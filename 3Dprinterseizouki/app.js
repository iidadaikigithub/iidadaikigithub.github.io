(function () {
'use strict';

if (typeof THREE === 'undefined') {
  document.body.innerHTML = '<div style="padding:30px;color:#ffb4b4;font-family:sans-serif">three.min.js を読み込めませんでした。同フォルダに three.min.js を置いて再読み込みしてください。</div>';
  return;
}

var FONT_DATA = (typeof FONT_JSON !== 'undefined') ? FONT_JSON : null;
var FONT_JA = (typeof window.FONT_JA !== 'undefined') ? window.FONT_JA : null;

function pickFontData(text) {
  if (!FONT_JA) return FONT_DATA;
  var chars = Array.from(text);
  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (c === '\n' || c === ' ') continue;
    if (!FONT_DATA.glyphs[c]) return FONT_JA;
  }
  return FONT_DATA;
}

function fontCreatePaths(text, size, data) {
  var chars = Array.from(text);
  var scale = size / data.resolution;
  var line_height = (data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness) * scale;
  var paths = [];
  var offsetX = 0, offsetY = 0;
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    if (char === '\n') {
      offsetX = 0;
      offsetY -= line_height;
    } else {
      var glyph = data.glyphs[char] || data.glyphs['?'];
      if (!glyph) { offsetX += (data.glyphs[' '] ? data.glyphs[' '].ha : 375) * scale; continue; }
      var path = new THREE.ShapePath();
      var x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;
      if (glyph.o) {
        var outline = glyph._cachedOutline || (glyph._cachedOutline = glyph.o.split(' '));
        for (var k = 0, l = outline.length; k < l;) {
          var action = outline[k++];
          switch (action) {
            case 'm':
              x = outline[k++] * scale + offsetX;
              y = outline[k++] * scale + offsetY;
              path.moveTo(x, y);
              break;
            case 'l':
              x = outline[k++] * scale + offsetX;
              y = outline[k++] * scale + offsetY;
              path.lineTo(x, y);
              break;
            case 'q':
              cpx = outline[k++] * scale + offsetX;
              cpy = outline[k++] * scale + offsetY;
              cpx1 = outline[k++] * scale + offsetX;
              cpy1 = outline[k++] * scale + offsetY;
              path.quadraticCurveTo(cpx1, cpy1, cpx, cpy);
              break;
            case 'b':
              cpx = outline[k++] * scale + offsetX;
              cpy = outline[k++] * scale + offsetY;
              cpx1 = outline[k++] * scale + offsetX;
              cpy1 = outline[k++] * scale + offsetY;
              cpx2 = outline[k++] * scale + offsetX;
              cpy2 = outline[k++] * scale + offsetY;
              path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, cpx, cpy);
              break;
          }
        }
      }
      offsetX += glyph.ha * scale;
      paths.push(path);
    }
  }
  return paths;
}

function fontGenerateShapes(text, size, data) {
  var shapes = [];
  var paths = fontCreatePaths(text, size, data);
  for (var i = 0; i < paths.length; i++) {
    var sh = paths[i].toShapes();
    for (var j = 0; j < sh.length; j++) shapes.push(sh[j]);
  }
  return shapes;
}

var scene, camera, renderer, raycaster = new THREE.Raycaster();
var viewport, panel, layerList, hintEl, textInput;
var objectMeshes = [];
var selEdges = null;
var previewMesh = null;
var pinchDist = 0;
var pendingSTLGeom = null;

var DEFAULT_H = 10;
var PLATE = 300;
var BUILD_H = 150;

var shapeLabel = { rect: '四角', circle: '正円', ellipse: '楕円', u: 'U字', j: 'J字', text: '文字', triangle: '三角', merge: '合成' };

var state = {
  mode: 'build',
  tool: 'select',
  addMode: false,
  selected: null,
  textVal: 'ABC',
  round: 0,
  objects: [],
  idSeq: 1,
  pointers: new Map(),
  press: null,
  cam: { theta: 0, phi: 0.001, dist: 780, target: new THREE.Vector3(0, 0, 0) }
};

function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
function fmt(v) { return Math.round(v * 10) / 10; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function signedArea(pts) {
  var s = 0;
  for (var i = 0; i < pts.length; i++) {
    var a = pts[i], b = pts[(i + 1) % pts.length];
    s += a.x * b.y - b.x * a.y;
  }
  return s / 2;
}
function normalizeRing(ring) {
  if (signedArea(ring.outer) < 0) ring.outer.reverse();
  for (var i = 0; i < ring.holes.length; i++) {
    if (signedArea(ring.holes[i]) > 0) ring.holes[i].reverse();
  }
}
function sampleShapePoints(sh, div) {
  var pts = sh.getPoints(div);
  return pts.map(function (p) { return { x: p.x, y: p.y }; });
}

function ringBox(w, d) {
  return { outer: [{ x: -w / 2, y: -d / 2 }, { x: w / 2, y: -d / 2 }, { x: w / 2, y: d / 2 }, { x: -w / 2, y: d / 2 }], holes: [] };
}
function ringCircle(r, seg) {
  var pts = [];
  for (var i = 0; i < seg; i++) {
    var a = i / seg * Math.PI * 2;
    pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
  }
  return { outer: pts, holes: [] };
}
function ringEllipse(rx, rz, seg) {
  var pts = [];
  for (var i = 0; i < seg; i++) {
    var a = i / seg * Math.PI * 2;
    pts.push({ x: Math.cos(a) * rx, y: Math.sin(a) * rz });
  }
  return { outer: pts, holes: [] };
}
function ringTriangle(w, d) {
  return { outer: [{ x: 0, y: d / 2 }, { x: -w / 2, y: -d / 2 }, { x: w / 2, y: -d / 2 }], holes: [] };
}
function fallbackRings(w, d) {
  return [ringBox(Math.max(5, w), Math.max(5, d))];
}
function glyphContourPolys(text, data) {
  var scale = 100 / data.resolution;
  var chars = Array.from(text);
  var polys = [];
  var offsetX = 0, offsetY = 0;
  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (c === '\n') { offsetX = 0; offsetY -= (Number(data.boundingBox.yMax) - Number(data.boundingBox.yMin) + Number(data.underlineThickness)) * scale; continue; }
    var glyph = data.glyphs[c] || data.glyphs['?'];
    if (!glyph) { offsetX += (data.glyphs[' '] ? data.glyphs[' '].ha : 375) * scale; continue; }
    if (glyph.o) {
      var outline = glyph.o.split(' ');
      var cur = null;
      for (var k = 0; k < outline.length;) {
        var a = outline[k++];
        if (a === 'm') { if (cur && cur.length >= 3) polys.push(cur); cur = [[outline[k++] * scale + offsetX, outline[k++] * scale + offsetY]]; }
        else if (a === 'l') { cur.push([outline[k++] * scale + offsetX, outline[k++] * scale + offsetY]); }
        else if (a === 'q') {
          var cx = outline[k++] * scale + offsetX, cy = outline[k++] * scale + offsetY;
          var px = outline[k++] * scale + offsetX, py = outline[k++] * scale + offsetY;
          var sx = cur[cur.length - 1][0], sy = cur[cur.length - 1][1];
          for (var t = 1; t <= 10; t++) { var u = t / 10; cur.push([(1 - u) * (1 - u) * sx + 2 * (1 - u) * u * cx + u * u * px, (1 - u) * (1 - u) * sy + 2 * (1 - u) * u * cy + u * u * py]); }
        } else if (a === 'b') {
          var c1x = outline[k++] * scale + offsetX, c1y = outline[k++] * scale + offsetY;
          var c2x = outline[k++] * scale + offsetX, c2y = outline[k++] * scale + offsetY;
          var px = outline[k++] * scale + offsetX, py = outline[k++] * scale + offsetY;
          var sx = cur[cur.length - 1][0], sy = cur[cur.length - 1][1];
          for (var t = 1; t <= 10; t++) { var u = t / 10, im = 1 - u; cur.push([im * im * im * sx + 3 * im * im * u * c1x + 3 * im * u * u * c2x + u * u * u * px, im * im * im * sy + 3 * im * im * u * c1y + 3 * im * u * u * c2y + u * u * u * py]); }
        }
      }
      if (cur && cur.length >= 3) polys.push(cur);
    }
    offsetX += glyph.ha * scale;
  }
  return polys;
}

function crossSectionRings(text) {
  if (!window.MANIFOLD) return null;
  var data = pickFontData(text);
  var polys = glyphContourPolys(text, data);
  if (!polys.length) return null;
  try {
    var E = window.MANIFOLD.getModule();
    var cs = new E.CrossSection(polys, "EvenOdd");
    var deco = cs.toPolygons();
    var outers = [], holes = [];
    for (var d = 0; d < deco.length; d++) {
      var a = signedAreaArr(deco[d]);
      if (a > 0) outers.push(deco[d]); else holes.push(deco[d]);
    }
    var rings = [];
    for (var o = 0; o < outers.length; o++) {
      var ring = { outer: outers[o].map(function (q) { return { x: q[0], y: q[1] }; }), holes: [] };
      for (var h = 0; h < holes.length; h++) {
        if (holes[h].length && pointInPoly(holes[h][0], outers[o])) {
          ring.holes.push(holes[h].map(function (q) { return { x: q[0], y: q[1] }; }));
        }
      }
      rings.push(ring);
    }
    return rings.length ? rings : null;
  } catch (e) { return null; }
}

function signedAreaArr(pts) {
  var a = 0;
  for (var i = 0; i < pts.length; i++) {
    var p = pts[i], q = pts[(i + 1) % pts.length];
    a += (p[0] * q[1] - q[0] * p[1]);
  }
  return a / 2;
}

function pointInPoly(pt, poly) {
  var inside = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    if (((yi > pt[1]) !== (yj > pt[1])) && (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}

function glyphRings(text, p, mode) {
  if (!FONT_DATA) return fallbackRings(p.w, p.d);
  var data = pickFontData(text);
  var rings;
  if (data === FONT_JA) {
    var csr = crossSectionRings(text);
    if (csr) rings = csr;
  }
  if (!rings) {
    var shapes = null;
    try { shapes = fontGenerateShapes(text, 100, data); }
    catch (e) { shapes = null; }
    if (!shapes || !shapes.length) return fallbackRings(p.w, p.d);
    rings = [];
    for (var i = 0; i < shapes.length; i++) {
      var sh = shapes[i];
      var outer = sampleShapePoints(sh, 14);
      if (outer.length < 3) continue;
      var holes = [];
      for (var j = 0; j < sh.holes.length; j++) {
        var hp = sampleShapePoints(sh.holes[j], 14);
        if (hp.length >= 3) holes.push(hp);
      }
      rings.push({ outer: outer, holes: holes });
    }
    if (!rings.length) return fallbackRings(p.w, p.d);
  }
  var minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
  for (var i = 0; i < rings.length; i++) {
    for (var j = 0; j < rings[i].outer.length; j++) {
      var pt = rings[i].outer[j];
      if (pt.x < minx) minx = pt.x;
      if (pt.x > maxx) maxx = pt.x;
      if (pt.y < miny) miny = pt.y;
      if (pt.y > maxy) maxy = pt.y;
    }
  }
  var bw = maxx - minx, bh = maxy - miny;
  if (bw <= 0 || bh <= 0) return fallbackRings(p.w, p.d);
  var sx, sy;
  if (mode === 'fit') {
    var s = Math.min(p.w / bw, p.d / bh);
    sx = s; sy = s;
  } else {
    sx = p.w / bw; sy = p.d / bh;
  }
  var cx = (minx + maxx) / 2, cy = (miny + maxy) / 2;
  for (var i = 0; i < rings.length; i++) {
    for (var j = 0; j < rings[i].outer.length; j++) {
      var p1 = rings[i].outer[j];
      p1.x = (p1.x - cx) * sx;
      p1.y = (p1.y - cy) * sy;
    }
    for (var j = 0; j < rings[i].holes.length; j++) {
      for (var k = 0; k < rings[i].holes[j].length; k++) {
        var p2 = rings[i].holes[j][k];
        p2.x = (p2.x - cx) * sx;
        p2.y = (p2.y - cy) * sy;
      }
    }
  }
  if (p.flip) {
    for (var i = 0; i < rings.length; i++) {
      for (var j = 0; j < rings[i].outer.length; j++) rings[i].outer[j].x = -rings[i].outer[j].x;
      for (var j = 0; j < rings[i].holes.length; j++) {
        for (var k = 0; k < rings[i].holes[j].length; k++) rings[i].holes[j][k].x = -rings[i].holes[j][k].x;
      }
    }
  }
  return rings;
}

function roundRing(ring, r) {
  if (r <= 0) return ring;
  var n = ring.length;
  var out = [];
  for (var i = 0; i < n; i++) {
    var p0 = ring[(i - 1 + n) % n], p1 = ring[i], p2 = ring[(i + 1) % n];
    var d1x = p1.x - p0.x, d1y = p1.y - p0.y;
    var d2x = p2.x - p1.x, d2y = p2.y - p1.y;
    var l1 = Math.hypot(d1x, d1y), l2 = Math.hypot(d2x, d2y);
    if (l1 < 1e-6 || l2 < 1e-6) { out.push({ x: p1.x, y: p1.y }); continue; }
    var u1x = d1x / l1, u1y = d1y / l1;
    var u2x = d2x / l2, u2y = d2y / l2;
    if (u1x * u2y - u1y * u2x <= 1e-6) { out.push({ x: p1.x, y: p1.y }); continue; }
    var rr = Math.min(r, l1 / 2, l2 / 2);
    if (rr < 0.01) { out.push({ x: p1.x, y: p1.y }); continue; }
    var nx1 = -u1y, ny1 = u1x;
    var nx2 = -u2y, ny2 = u2x;
    var ax = p1.x - rr * u1x + rr * nx1, ay = p1.y - rr * u1y + rr * ny1;
    var bx = p1.x + rr * u2x + rr * nx2, by = p1.y + rr * u2y + rr * ny2;
    var dx = bx - ax, dy = by - ay;
    var det = u1x * (-u2y) - u1y * (-u2x);
    if (Math.abs(det) < 1e-9) { out.push({ x: p1.x, y: p1.y }); continue; }
    var t = (dx * (-u2y) - dy * (-u2x)) / det;
    var cx = ax + t * u1x, cy = ay + t * u1y;
    var T1x = cx - rr * nx1, T1y = cy - rr * ny1;
    var T2x = cx - rr * nx2, T2y = cy - rr * ny2;
    var a1 = Math.atan2(T1y - cy, T1x - cx);
    var a2 = Math.atan2(T2y - cy, T2x - cx);
    var sw = a2 - a1;
    if (sw < 0) sw += Math.PI * 2;
    var segs = Math.max(3, Math.round(sw / (Math.PI / 12)));
    for (var k = 0; k < segs; k++) {
      var ang = a1 + sw * k / segs;
      out.push({ x: cx + Math.cos(ang) * rr, y: cy + Math.sin(ang) * rr });
    }
    out.push({ x: T2x, y: T2y });
  }
  return out;
}

function makeFootprintRings(st, p) {
  var rings;
  if (st === 'rect') rings = [ringBox(p.w, p.d)];
  else if (st === 'circle') rings = [ringCircle(p.r, 64)];
  else if (st === 'ellipse') rings = [ringEllipse(p.rx, p.rz, 64)];
  else if (st === 'triangle') rings = [ringTriangle(p.w, p.d)];
  else if (st === 'u') rings = glyphRings('U', p, 'fill');
  else if (st === 'j') rings = glyphRings('J', p, 'fill');
  else if (st === 'text') rings = glyphRings(p.text || 'ABC', p, 'fit');
  else rings = [];
  var rr = p.round || 0;
  if (rr > 0 && (st === 'rect' || st === 'triangle')) {
    for (var i = 0; i < rings.length; i++) {
      if (rings[i] && rings[i].outer) rings[i].outer = roundRing(rings[i].outer, rr);
    }
  }
  return rings;
}

function mergeGeoms(geoms) {
  if (!geoms.length) return null;
  if (geoms.length === 1) return geoms[0];
  var pos = [], nor = [];
  for (var i = 0; i < geoms.length; i++) {
    var g = geoms[i];
    var pa = g.attributes.position, na = g.attributes.normal;
    var cnt = pa.count;
    for (var j = 0; j < cnt; j++) {
      pos.push(pa.getX(j), pa.getY(j), pa.getZ(j));
      nor.push(na.getX(j), na.getY(j), na.getZ(j));
    }
  }
  var gg = new THREE.BufferGeometry();
  gg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  gg.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return gg;
}

function ringsToGeometry(rings, height, edgeR) {
  var geoms = [];
  for (var i = 0; i < rings.length; i++) {
    var ring = rings[i];
    if (!ring.outer || ring.outer.length < 3) continue;
    normalizeRing(ring);
    var shape = new THREE.Shape();
    shape.moveTo(ring.outer[0].x, ring.outer[0].y);
    for (var j = 1; j < ring.outer.length; j++) shape.lineTo(ring.outer[j].x, ring.outer[j].y);
    shape.closePath();
    for (var h = 0; h < ring.holes.length; h++) {
      var hp = new THREE.Path();
      var hpw = ring.holes[h];
      hp.moveTo(hpw[0].x, hpw[0].y);
      for (var j = 1; j < hpw.length; j++) hp.lineTo(hpw[j].x, hpw[j].y);
      hp.closePath();
      shape.holes.push(hp);
    }
    var g;
    if (edgeR > 0) {
      var r = Math.min(edgeR, height / 3);
      g = new THREE.ExtrudeGeometry(shape, {
        depth: height - 2 * r,
        bevelEnabled: true,
        bevelThickness: r,
        bevelSize: r,
        bevelSegments: 8,
        bevelOffset: 0,
        curveSegments: 12
      });
      g.rotateX(-Math.PI / 2);
      g.translate(0, r, 0);
    } else {
      g = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false });
      g.rotateX(-Math.PI / 2);
    }
    geoms.push(g);
  }
  return mergeGeoms(geoms);
}

function materialForMode(mode) {
  var c = mode === 'build' ? new THREE.Color(0x3f8cff) : new THREE.Color(0xff4d4d);
  return new THREE.MeshStandardMaterial({
    color: c, roughness: 0.55, metalness: 0.05,
    transparent: mode === 'cut',
    opacity: mode === 'cut' ? 0.5 : 1
  });
}

function materialFor(obj) {
  var sel = (state.selected === obj);
  var c = obj.mode === 'build' ? new THREE.Color(0x3f8cff) : new THREE.Color(0xff4d4d);
  return new THREE.MeshStandardMaterial({
    color: c, roughness: 0.55, metalness: 0.05,
    transparent: obj.mode === 'cut',
    opacity: obj.mode === 'cut' ? 0.5 : 1,
    emissive: sel ? new THREE.Color(0x33405e) : new THREE.Color(0x000000)
  });
}

function makeName(mode, st) {
  var prefix = mode === 'build' ? '造形' : '切抜';
  state.nameCounts = state.nameCounts || {};
  var key = mode + '-' + st;
  state.nameCounts[key] = (state.nameCounts[key] || 0) + 1;
  return prefix + '・' + shapeLabel[st] + ' ' + state.nameCounts[key];
}

function buildObjectMesh(obj) {
  if (obj.mesh) {
    var j = objectMeshes.indexOf(obj.mesh);
    if (j >= 0) objectMeshes.splice(j, 1);
    scene.remove(obj.mesh);
    obj.mesh.geometry.dispose();
    obj.mesh.material.dispose();
  }
  var geom;
  if (obj.st === 'merge') {
    geom = obj.mergeGeom ? obj.mergeGeom.clone() : new THREE.BufferGeometry();
  } else {
    geom = ringsToGeometry(makeFootprintRings(obj.st, obj.params), obj.height, obj.params.round || 0);
  }
  var mesh = new THREE.Mesh(geom, materialFor(obj));
  mesh.position.copy(obj.pos);
  mesh.quaternion.setFromEuler(obj.euler);
  obj.mesh = mesh;
  obj.geomCache = geom;
  obj.csgGeom = null;
  scene.add(mesh);
  objectMeshes.push(mesh);
  mesh.userData.obj = obj;
}

function rebuildObjectMesh(obj) {
  buildObjectMesh(obj);
  updateSelectionVisual();
  syncPanel();
}

function createObject(mode, st, params, height, posX, posZ) {
  var obj = {
    id: state.idSeq++,
    mode: mode,
    st: st,
    params: params,
    height: height,
    pos: new THREE.Vector3(posX, 0, posZ),
    euler: new THREE.Euler(0, 0, 0, 'YXZ'),
    interact: 'move',
    visible: true,
    mesh: null,
    geomCache: null
  };
  obj.name = makeName(mode, st);
  buildObjectMesh(obj);
  state.objects.push(obj);
  selectObject(obj);
  refreshLayers();
  return obj;
}

function deleteObject(o) {
  var i = state.objects.indexOf(o);
  if (i < 0) return;
  state.objects.splice(i, 1);
  if (o.mesh) {
    var j = objectMeshes.indexOf(o.mesh);
    if (j >= 0) objectMeshes.splice(j, 1);
    scene.remove(o.mesh);
    o.mesh.geometry.dispose();
    o.mesh.material.dispose();
  }
  if (state.selected === o) deselect();
  refreshLayers();
  refreshHint();
}

function duplicateObject(o) {
  var np = JSON.parse(JSON.stringify(o.params));
  var nobj = {
    id: state.idSeq++,
    mode: o.mode, st: o.st, params: np, height: o.height,
    pos: new THREE.Vector3(o.pos.x + 5, o.pos.y, o.pos.z + 5),
    euler: new THREE.Euler(o.euler.x, o.euler.y, o.euler.z, 'YXZ'),
    interact: 'move', visible: true, mesh: null, geomCache: null
  };
  nobj.name = o.name + ' コピー';
  buildObjectMesh(nobj);
  state.objects.push(nobj);
  selectObject(nobj);
  refreshLayers();
}

function selectObject(obj) {
  state.selected = obj;
  refreshPanel();
  refreshLayers();
  updateSelectionVisual();
  refreshHint();
}

function deselect() {
  state.selected = null;
  refreshPanel();
  updateSelectionVisual();
  refreshHint();
}

function updateSelectionVisual() {
  if (selEdges) {
    scene.remove(selEdges);
    selEdges.geometry.dispose();
    selEdges = null;
  }
  if (state.selected && state.selected.mesh && state.selected.mesh.visible) {
    var g = new THREE.EdgesGeometry(state.selected.mesh.geometry, 1);
    selEdges = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 }));
    selEdges.position.copy(state.selected.mesh.position);
    selEdges.quaternion.copy(state.selected.mesh.quaternion);
    scene.add(selEdges);
  }
  for (var i = 0; i < state.objects.length; i++) {
    var o = state.objects[i];
    if (o.mesh) o.mesh.material = materialFor(o);
  }
}

function applyPos(obj) {
  obj.mesh.position.copy(obj.pos);
  if (selEdges) { selEdges.position.copy(obj.pos); }
  syncPanel();
}

function applyRot(obj) {
  obj.mesh.quaternion.setFromEuler(obj.euler);
  if (selEdges) { selEdges.quaternion.copy(obj.mesh.quaternion); }
  syncPanel();
}

function initScene() {
  viewport = document.getElementById('viewport');
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(viewport.clientWidth, viewport.clientHeight);
  renderer.setClearColor(0x0d1119);
  viewport.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0d1119, 1300, 2600);
  camera = new THREE.PerspectiveCamera(45, viewport.clientWidth / viewport.clientHeight, 1, 6000);
  updateCamera();

  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  var dl = new THREE.DirectionalLight(0xffffff, 0.95);
  dl.position.set(320, 520, 260);
  scene.add(dl);
  var dl2 = new THREE.DirectionalLight(0x9db9ff, 0.35);
  dl2.position.set(-260, 220, -320);
  scene.add(dl2);

  buildPlate();
  buildAxes();
  bindEvents();
  renderer.setAnimationLoop(function () { renderer.render(scene, camera); });
  window.addEventListener('resize', onResize);
  if (window.ResizeObserver) {
    new ResizeObserver(function () { onResize(); }).observe(viewport);
  }
  setTimeout(function () { onResize(); }, 100);
}

function onResize() {
  if (!viewport || !renderer) return;
  var w = viewport.clientWidth, h = viewport.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function updateCamera() {
  var sp = state.cam.dist * Math.sin(state.cam.phi);
  var cy = state.cam.dist * Math.cos(state.cam.phi);
  camera.position.set(
    state.cam.target.x + sp * Math.sin(state.cam.theta),
    state.cam.target.y + cy,
    state.cam.target.z + sp * Math.cos(state.cam.theta)
  );
  camera.lookAt(state.cam.target);
}

function buildPlate() {
  var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(PLATE, PLATE),
    new THREE.MeshBasicMaterial({ color: 0x1a2230, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -0.05;
  scene.add(plane);

  function gridLines(color, stepEvery, opacity, y) {
    var pts = [];
    for (var i = 0; i <= 30; i += stepEvery) {
      var v = -PLATE / 2 + i * 10;
      pts.push(v, y, -PLATE / 2, v, y, PLATE / 2);
      pts.push(-PLATE / 2, y, v, PLATE / 2, y, v);
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    var l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: opacity }));
    scene.add(l);
  }
  gridLines(0x2b3745, 1, 0.35, 0.02);
  gridLines(0x3f5170, 5, 0.75, 0.02);

  var border = new THREE.BufferGeometry();
  border.setAttribute('position', new THREE.Float32BufferAttribute([
    -PLATE / 2, 0.03, -PLATE / 2, PLATE / 2, 0.03, -PLATE / 2,
    PLATE / 2, 0.03, -PLATE / 2, PLATE / 2, 0.03, PLATE / 2,
    PLATE / 2, 0.03, PLATE / 2, -PLATE / 2, 0.03, PLATE / 2,
    -PLATE / 2, 0.03, PLATE / 2, -PLATE / 2, 0.03, -PLATE / 2
  ], 3));
  var bl = new THREE.LineSegments(border, new THREE.LineBasicMaterial({ color: 0x6b86c0, transparent: true, opacity: 0.8 }));
  scene.add(bl);
}

function addSprite(text, pos, color, s) {
  var cv = document.createElement('canvas');
  var ctx = cv.getContext('2d');
  ctx.font = 'bold 76px "Segoe UI", sans-serif';
  var w = Math.max(32, Math.ceil(ctx.measureText(text).width) + 24);
  cv.width = w;
  cv.height = 128;
  ctx = cv.getContext('2d');
  ctx.font = 'bold 76px "Segoe UI", sans-serif';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, cv.width / 2, 64);
  var tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sp.position.set(pos[0], pos[1], pos[2]);
  var ss = s || 16;
  var ar = cv.width / cv.height;
  sp.scale.set(ss * 2.4 * (ar / 2), ss * 1.2, 1);
  scene.add(sp);
}

function buildAxes() {
  var L = 175;
  function line(a, b, color) {
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([a[0], a[1], a[2], b[0], b[1], b[2]], 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.9 })));
  }
  line([0, 0, 0], [L, 0, 0], 0xff6b6b);
  line([0, 0, 0], [0, 0, L], 0x5aa7ff);
  line([0, 0, 0], [0, L, 0], 0x56d98a);
  addSprite('X →', [L + 12, 0, 0], '#ff8d8d');
  addSprite('Y →', [0, 0, L + 12], '#7fb9ff');

  addSprite('30cm×30cm', [-PLATE / 2 + 40, 0, PLATE / 2 - 30], '#9fb4d8', 12);
  addSprite('Z高さ ' + (BUILD_H / 10) + 'cm', [-PLATE / 2 + 40, 0, PLATE / 2 - 60], '#8ae8b0', 12);
  for (var y = 10; y <= BUILD_H; y += 10) {
    var long = (y % 50 === 0);
    line([0, y, 0], [long ? 20 : 10, y, 0], 0x56d98a);
    if (long) addSprite((y / 10) + 'cm', [30, y, 0], '#8ae8b0', 8);
  }
  var top = new THREE.BufferGeometry();
  top.setAttribute('position', new THREE.Float32BufferAttribute([
    -PLATE / 2, BUILD_H, -PLATE / 2, PLATE / 2, BUILD_H, -PLATE / 2,
    PLATE / 2, BUILD_H, -PLATE / 2, PLATE / 2, BUILD_H, PLATE / 2,
    PLATE / 2, BUILD_H, PLATE / 2, -PLATE / 2, BUILD_H, PLATE / 2,
    -PLATE / 2, BUILD_H, PLATE / 2, -PLATE / 2, BUILD_H, -PLATE / 2
  ], 3));
  scene.add(new THREE.LineSegments(top, new THREE.LineBasicMaterial({ color: 0x56d98a, transparent: true, opacity: 0.35 })));
}

function getNDC(e) {
  var rect = renderer.domElement.getBoundingClientRect();
  return new THREE.Vector2(
    ((e.clientX - rect.left) / rect.width) * 2 - 1,
    -((e.clientY - rect.top) / rect.height) * 2 + 1
  );
}

function rayPlaneFromNDC(ndc, y) {
  raycaster.setFromCamera(ndc, camera);
  var o = raycaster.ray.origin, d = raycaster.ray.direction;
  if (Math.abs(d.y) < 1e-9) return null;
  var t = (y - o.y) / d.y;
  if (t < 0) return null;
  return new THREE.Vector3(o.x + d.x * t, y, o.z + d.z * t);
}

function raycastObjects(ndc) {
  raycaster.setFromCamera(ndc, camera);
  var list = [];
  for (var i = 0; i < objectMeshes.length; i++) {
    if (objectMeshes[i].visible) list.push(objectMeshes[i]);
  }
  var hits = raycaster.intersectObjects(list, false);
  return hits.length ? hits[0] : null;
}

function pointerDist() {
  var arr = Array.from(state.pointers.values());
  if (arr.length < 2) return 0;
  return Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
}

function onPointerDown(e) {
  if (e.button === 2) return;
  var dom = renderer.domElement;
  try { dom.setPointerCapture(e.pointerId); } catch (err) {}
  if (e.button === 1) {
    state.press = { type: 'orbit', startX: e.clientX, startY: e.clientY, t0: state.cam.theta, p0: state.cam.phi, moved: false, middle: true };
    return;
  }
  state.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (state.pointers.size >= 2) {
    state.press = { type: 'pinch' };
    pinchDist = pointerDist();
    return;
  }
  var ndc = getNDC(e);
  var tool = state.tool;

  if (tool !== 'select') {
    var A = rayPlaneFromNDC(ndc, 0);
    if (A) {
      state.press = { type: 'draw', a: A.clone(), b: null, moved: false };
      if (previewMesh) { previewMesh.material = materialForMode(state.mode); }
    } else {
      state.press = { type: 'orbit', startX: e.clientX, startY: e.clientY, t0: state.cam.theta, p0: state.cam.phi, moved: false };
    }
    return;
  }

  var hit = raycastObjects(ndc);
  if (hit && hit.object.userData.obj) {
    var o = hit.object.userData.obj;
    if (o !== state.selected) {
      selectObject(o);
      state.press = { type: 'idle', moved: false };
    } else {
      if (o.interact === 'move') {
        state.press = { type: 'moveobj', obj: o, last: rayPlaneFromNDC(ndc, o.pos.y), moved: false };
      } else if (o.interact === 'rotate') {
        state.press = { type: 'rotobj', obj: o, lastX: e.clientX, lastY: e.clientY, moved: false };
      } else {
        state.press = { type: 'idle', moved: false };
      }
    }
  } else {
    if (state.selected && state.selected.interact === 'rotate') {
      state.press = { type: 'rotobj', obj: state.selected, lastX: e.clientX, lastY: e.clientY, moved: false };
    } else {
      state.press = { type: 'orbit', startX: e.clientX, startY: e.clientY, t0: state.cam.theta, p0: state.cam.phi, moved: false };
    }
  }
}

function computeParamsFromDrag(st, a, b) {
  var minS = 3;
  var p = null;
  if (st === 'rect' || st === 'triangle' || st === 'u' || st === 'j' || st === 'text') {
    var w = Math.abs(b.x - a.x), d = Math.abs(b.z - a.z);
    if (w < minS || d < minS) return null;
    w = Math.min(w, PLATE); d = Math.min(d, PLATE);
    p = { w: w, d: d, round: state.round };
    if (st === 'text') p.text = state.textVal || 'ABC';
  } else if (st === 'circle') {
    var r = Math.hypot(b.x - a.x, b.z - a.z);
    if (r < minS) return null;
    p = { r: Math.min(r, PLATE / 2), round: state.round };
  } else if (st === 'ellipse') {
    var rx = Math.abs(b.x - a.x), rz = Math.abs(b.z - a.z);
    if (rx < minS || rz < minS) return null;
    p = { rx: Math.min(rx, PLATE / 2), rz: Math.min(rz, PLATE / 2), round: state.round };
  }
  return p;
}

function centerClamp(st, params, cx, cz) {
  var hw, hd;
  if (st === 'circle') { hw = params.r; hd = params.r; }
  else if (st === 'ellipse') { hw = params.rx; hd = params.rz; }
  else { hw = params.w / 2; hd = params.d / 2; }
  cx = clamp(cx, -PLATE / 2 + hw, PLATE / 2 - hw);
  cz = clamp(cz, -PLATE / 2 + hd, PLATE / 2 - hd);
  return [cx, cz];
}

function updatePreviewDraw(a, b) {
  var tool = state.tool;
  var params = computeParamsFromDrag(tool, a, b);
  if (!params) { setPreviewGeometry(null); return; }
  var rings = makeFootprintRings(tool, params);
  var geom = ringsToGeometry(rings, DEFAULT_H, params.round || 0);
  var cc = centerClamp(tool, params, a.x, a.z);
  setPreviewGeometry(geom);
  if (previewMesh) previewMesh.position.set(cc[0], 0, cc[1]);
}

function setPreviewGeometry(geom) {
  if (!previewMesh) {
    previewMesh = new THREE.Mesh(new THREE.BufferGeometry(), materialForMode(state.mode));
    scene.add(previewMesh);
  }
  if (previewMesh.geometry && previewMesh.geometry !== geom) previewMesh.geometry.dispose();
  previewMesh.geometry = geom || new THREE.BufferGeometry();
  previewMesh.visible = !!geom;
  previewMesh.quaternion.identity();
  if (geom) previewMesh.position.set(0, 0, 0);
}

function finalizeDraw(a, b) {
  var tool = state.tool;
  var params = computeParamsFromDrag(tool, a, b);
  if (!params) return;
  var cc = centerClamp(tool, params, (a.x + b.x) / 2, (a.z + b.z) / 2);
  if (tool === 'circle' || tool === 'ellipse') {
    cc = centerClamp(tool, params, a.x, a.z);
  }
  createObject(state.mode, tool, params, DEFAULT_H, cc[0], cc[1]);
  if (!state.addMode) setTool('select');
}

function onPointerMove(e) {
  if (state.pointers.has(e.pointerId)) {
    state.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  }
  var press = state.press;
  if (!press) return;
  if (press.type === 'pinch') {
    var d = pointerDist();
    if (pinchDist > 0 && d > 0) {
      state.cam.dist = clamp(state.cam.dist * pinchDist / d, 140, 2600);
      updateCamera();
    }
    pinchDist = d;
    return;
  }
  if (press.type === 'draw') {
    var B = rayPlaneFromNDC(getNDC(e), 0);
    if (B) {
      press.moved = true;
      press.b = B;
      updatePreviewDraw(press.a, B);
    }
    return;
  }
  if (press.type === 'orbit') {
    var dx = e.clientX - press.startX;
    var dy = e.clientY - press.startY;
    if (Math.abs(dx) + Math.abs(dy) > 3) press.moved = true;
    state.cam.theta = press.t0 - dx * 0.006;
    state.cam.phi = clamp(press.p0 - dy * 0.006, 0.12, Math.PI - 0.12);
    updateCamera();
    return;
  }
  if (press.type === 'moveobj') {
    var B2 = rayPlaneFromNDC(getNDC(e), press.obj.pos.y);
    if (B2 && press.last) {
      if (Math.abs(e.clientX - press.startX) + Math.abs(e.clientY - press.startY) > 2) press.moved = true;
      press.obj.pos.x += B2.x - press.last.x;
      press.obj.pos.z += B2.z - press.last.z;
      press.last.copy(B2);
      applyPos(press.obj);
    }
    return;
  }
  if (press.type === 'rotobj') {
    var ddx = e.clientX - press.lastX;
    var ddy = e.clientY - press.lastY;
    if (Math.abs(ddx) + Math.abs(ddy) > 1) press.moved = true;
    applyObjRotate(press.obj, ddx, ddy);
    press.lastX = e.clientX;
    press.lastY = e.clientY;
  }
}

function applyObjRotate(obj, dx, dy) {
  var q = new THREE.Quaternion();
  q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -dx * 0.01);
  obj.mesh.quaternion.premultiply(q);
  var fwd = camera.position.clone().sub(state.cam.target);
  if (fwd.lengthSq() < 1e-6) fwd.set(0, 0, -1);
  fwd.normalize();
  var right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0));
  if (right.lengthSq() < 0.05) right.set(1, 0, 0);
  right.normalize();
  q.setFromAxisAngle(right, -dy * 0.01);
  obj.mesh.quaternion.premultiply(q);
  obj.euler.setFromQuaternion(obj.mesh.quaternion, 'YXZ');
  if (selEdges) selEdges.quaternion.copy(obj.mesh.quaternion);
  syncPanel();
}

function onPointerUp(e) {
  state.pointers.delete(e.pointerId);
  var press = state.press;
  if (!press) return;
  if (press.type === 'pinch') {
    if (state.pointers.size < 2) { state.press = null; }
    return;
  }
  if (press.type === 'draw') {
    setPreviewGeometry(null);
    finalizeDraw(press.a, press.b || press.a);
    state.press = null;
    return;
  }
  if (press.type === 'orbit') {
    if (!press.moved && !press.middle && state.selected) deselect();
    state.press = null;
    return;
  }
  if (press.type === 'idle') {
    state.press = null;
    return;
  }
  state.press = null;
}

function bindEvents() {
  var dom = renderer.domElement;
  dom.addEventListener('pointerdown', onPointerDown);
  dom.addEventListener('pointermove', onPointerMove);
  dom.addEventListener('pointerup', onPointerUp);
  dom.addEventListener('pointercancel', onPointerUp);
  dom.addEventListener('wheel', function (e) {
    e.preventDefault();
    state.cam.dist = clamp(state.cam.dist * (1 + e.deltaY * 0.001), 140, 2600);
    updateCamera();
  }, { passive: false });
  dom.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  dom.addEventListener('mousedown', function (e) { if (e.button === 1) e.preventDefault(); });

  document.addEventListener('keydown', onKeyDown);

  document.querySelectorAll('.tbtn[data-tool]').forEach(function (b) {
    b.addEventListener('click', function () { setTool(b.dataset.tool); });
  });
  var addToggle = document.getElementById('addToggle');
  addToggle.addEventListener('click', function () {
    state.addMode = !state.addMode;
    addToggle.classList.toggle('active', state.addMode);
    if (state.addMode && state.tool === 'select') {
      setTool(state.lastShapeTool || 'rect');
    }
    refreshHint();
  });
  textInput = document.getElementById('textInput');
  textInput.addEventListener('input', function () { state.textVal = textInput.value; });
  document.getElementById('btnTextOut').addEventListener('click', function () {
    var txt = (textInput.value || '').trim();
    if (!txt) { showModal('文字を入力してください', '出力ボタンの左の欄に名前などの文字を入力してください。'); return; }
    state.textVal = txt;
    createObject(state.mode, 'text', { w: 160, d: 80, text: txt, round: state.round }, DEFAULT_H, 0, 0);
    refreshHint();
  });

  document.getElementById('btnRound').addEventListener('click', function () {
    state.round = state.round > 0 ? 0 : 5;
    this.classList.toggle('active', state.round > 0);
    for (var i = 0; i < state.objects.length; i++) {
      var o = state.objects[i];
      if (o.st === 'merge') continue;
      o.params.round = state.round;
      buildObjectMesh(o);
    }
    refreshLayers();
    refreshHint();
  });

  document.getElementById('modeBuild').addEventListener('click', function () {
    setMode('build');
  });
  document.getElementById('modeCut').addEventListener('click', function () {
    setMode('cut');
  });
  document.getElementById('btnExport').addEventListener('click', exportSTL);
  document.getElementById('btnApply').addEventListener('click', applyMerge);

  document.getElementById('modalOK').addEventListener('click', closeModal);
  document.getElementById('modalExtra').addEventListener('click', function () {
    var cb = modalExtra._cb;
    closeModal();
    if (cb) cb();
  });
}

function isTyping() {
  var el = document.activeElement;
  return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
}

function onKeyDown(e) {
  if (isTyping()) return;
  var sel = state.selected;
  var up = e.key === 'ArrowUp', down = e.key === 'ArrowDown', left = e.key === 'ArrowLeft', right = e.key === 'ArrowRight';
  if (e.key === 'Escape') {
    if (state.tool !== 'select') { setTool('select'); }
    else if (sel) deselect();
    return;
  }
  if (sel && (e.key === 'Delete' || e.key === 'Backspace')) {
    deleteObject(sel);
    return;
  }
  if (!up && !down && !left && !right && e.key !== 'PageUp' && e.key !== 'PageDown') return;
  e.preventDefault();
  if (!sel) return;
  var step = (e.ctrlKey || e.metaKey) ? 10 : 1;
  if (sel.interact === 'extrude') {
    if (up) setObjectHeight(sel, sel.height + step);
    if (down) setObjectHeight(sel, sel.height - step);
    return;
  }
  if (sel.interact === 'rotate') return;
  if (left) { sel.pos.x -= step; applyPos(sel); }
  else if (right) { sel.pos.x += step; applyPos(sel); }
  else if (up) { if (e.shiftKey) sel.pos.y += step; else sel.pos.z += step; applyPos(sel); }
  else if (down) { if (e.shiftKey) sel.pos.y -= step; else sel.pos.z -= step; applyPos(sel); }
  else if (e.key === 'PageUp') { sel.pos.y += step; applyPos(sel); }
  else if (e.key === 'PageDown') { sel.pos.y -= step; applyPos(sel); }
}

function setObjectHeight(obj, h) {
  obj.height = Math.max(0.5, h);
  rebuildObjectMesh(obj);
}

function setTool(tool) {
  state.tool = tool;
  if (tool !== 'select') state.lastShapeTool = tool;
  document.querySelectorAll('.tbtn[data-tool]').forEach(function (b) {
    b.classList.toggle('active', b.dataset.tool === tool);
  });
  if (state.press && state.press.type === 'draw') {
    setPreviewGeometry(null);
    state.press = null;
  }
  refreshHint();
}

function setMode(m) {
  state.mode = m;
  document.getElementById('modeBuild').classList.toggle('active', m === 'build');
  document.getElementById('modeCut').classList.toggle('active', m === 'cut');
  if (state.press && state.press.type === 'draw') {
    setPreviewGeometry(null);
    state.press = null;
  }
  refreshHint();
}

function refreshLayers() {
  var list = document.getElementById('layerList');
  list.innerHTML = '';
  if (!state.objects.length) {
    var e0 = document.createElement('div');
    e0.textContent = 'まだ図形がありません';
    e0.style.cssText = 'color:#5a6577;padding:12px;';
    list.appendChild(e0);
    return;
  }
  state.objects.forEach(function (o) {
    var row = document.createElement('div');
    row.className = 'layer' + (state.selected === o ? ' sel' : '');
    var dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = o.mode === 'build' ? '#3f8cff' : '#ff4d4d';
    var nm = document.createElement('span');
    nm.className = 'nm';
    nm.textContent = o.name;
    nm.title = o.name;
    var eye = document.createElement('button');
    eye.className = 'ic' + (o.visible ? '' : ' hid');
    eye.textContent = o.visible ? '☑' : '□';
    eye.addEventListener('click', function (ev) {
      ev.stopPropagation();
      o.visible = !o.visible;
      if (o.mesh) o.mesh.visible = o.visible;
      if (state.selected === o) updateSelectionVisual();
      refreshLayers();
    });
    var del = document.createElement('button');
    del.className = 'ic';
    del.textContent = '×';
    del.addEventListener('click', function (ev) {
      ev.stopPropagation();
      deleteObject(o);
    });
    row.appendChild(dot);
    row.appendChild(nm);
    row.appendChild(eye);
    row.appendChild(del);
    row.addEventListener('click', function () { selectObject(o); });
    list.appendChild(row);
  });
}

function rowNudge(field, label) {
  return '<div class="row"><label>' + label + '</label><input data-f="' + field + '" type="number" step="1"><div class="nudge">' +
    '<button data-n="' + field + '" data-s="-1">−</button><button data-n="' + field + '" data-s="1">＋</button></div></div>';
}

function refreshPanel() {
  var sel = state.selected;
  if (!sel) {
    panel.innerHTML = '<div class="ph">図形を選択してください</div>';
    return;
  }
  var sizeRows = '';
  if (sel.st === 'merge') {
    sizeRows = '<div class="row" style="color:#8b96aa">合成済みモデルのためサイズ変更できません</div>';
  } else if (sel.st === 'rect' || sel.st === 'triangle' || sel.st === 'u' || sel.st === 'j' || sel.st === 'text') {
    sizeRows = rowNudge('w', '幅 (W)') + rowNudge('d', '奥行 (D)');
  } else if (sel.st === 'circle') {
    sizeRows = rowNudge('r', '半径 (R)');
  } else if (sel.st === 'ellipse') {
    sizeRows = rowNudge('rx', '半径X') + rowNudge('rz', '半径Z');
  }
  var textHtml = (sel.st === 'text') ?
    '<h3>文字</h3><div class="row"><input data-f="text" type="text" value="' + esc(sel.params.text || '') + '"></div>' +
    '<div class="row"><label>反転（左右ミラー）</label><input data-f="flip" type="checkbox"' + (sel.params.flip ? ' checked' : '') + '></div>' : '';
  panel.innerHTML =
    '<div class="pname"><span>名前</span><input data-f="name" type="text" value="' + esc(sel.name) + '"></div>' +
    '<div class="grp"><h3>操作モード</h3><div class="seg" id="intSeg">' +
    '<button data-int="move" class="' + (sel.interact === 'move' ? 'active' : '') + '">設置</button>' +
    '<button data-int="extrude" class="' + (sel.interact === 'extrude' ? 'active' : '') + '">押し出し</button>' +
    '<button data-int="rotate" class="' + (sel.interact === 'rotate' ? 'active' : '') + '">回転</button>' +
    '</div></div>' +
    '<div class="grp"><h3>位置（mm）</h3>' + rowNudge('x', 'X（左右）') + rowNudge('y', 'Y（上下）') + rowNudge('z', 'Z（高低）') + rowNudge('h', '厚み（mm）') + '</div>' +
    '<div class="grp"><h3>回転（度）</h3>' + rowNudge('rotx', 'X軸') + rowNudge('roty', 'Y軸') + rowNudge('rotz', 'Z軸') + '</div>' +
    '<div class="grp"><h3>形状サイズ（mm）</h3>' + sizeRows + textHtml + '</div>' +
    '<div class="grp"><button class="btn small pbtn" id="btnDup">複製</button>' +
    '<button class="btn small danger pbtn" id="btnDel">削除</button></div>';
  bindPanelEvents(sel);
  syncPanel();
}

function syncPanel() {
  var sel = state.selected;
  if (!sel || !panel) return;
  function set(f, v) {
    var el = panel.querySelector('[data-f="' + f + '"]');
    if (!el || el === document.activeElement) return;
    if (el.type === 'checkbox') el.checked = !!v;
    else el.value = v;
  }
  set('name', sel.name);
  set('x', fmt(sel.pos.x));
  set('y', fmt(sel.pos.z));
  set('z', fmt(sel.pos.y));
  set('h', fmt(sel.height));
  set('rotx', fmt(sel.euler.x * 180 / Math.PI));
  set('roty', fmt(sel.euler.y * 180 / Math.PI));
  set('rotz', fmt(sel.euler.z * 180 / Math.PI));
  if (sel.st === 'rect' || sel.st === 'triangle' || sel.st === 'u' || sel.st === 'j' || sel.st === 'text') {
    set('w', fmt(sel.params.w));
    set('d', fmt(sel.params.d));
  }
  if (sel.st === 'circle') set('r', fmt(sel.params.r));
  if (sel.st === 'ellipse') { set('rx', fmt(sel.params.rx)); set('rz', fmt(sel.params.rz)); }
  if (sel.st === 'text') set('text', sel.params.text || '');
  if (sel.st === 'text') set('flip', !!sel.params.flip);
}

function num(v) {
  var n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

function bindPanelEvents(sel) {
  panel.querySelectorAll('input[data-f]').forEach(function (inp) {
    inp.addEventListener('input', function () {
      handleField(sel, inp.dataset.f, inp.type === 'checkbox' ? (inp.checked ? 'on' : 'off') : inp.value);
    });
    inp.addEventListener('change', function () {
      handleField(sel, inp.dataset.f, inp.type === 'checkbox' ? (inp.checked ? 'on' : 'off') : inp.value);
    });
  });
  panel.querySelectorAll('button[data-n]').forEach(function (b) {
    b.addEventListener('click', function () {
      nudge(sel, b.dataset.n, parseInt(b.dataset.s, 10) || 1);
    });
  });
  var seg = panel.querySelector('#intSeg');
  if (seg) {
    seg.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        sel.interact = b.dataset.int;
        seg.querySelectorAll('button').forEach(function (x) { x.classList.toggle('active', x === b); });
        refreshHint();
      });
    });
  }
  var dup = panel.querySelector('#btnDup');
  if (dup) dup.addEventListener('click', function () { duplicateObject(sel); });
  var del = panel.querySelector('#btnDel');
  if (del) del.addEventListener('click', function () { deleteObject(sel); });
}

function nudge(sel, field, s) {
  if (field === 'x') { sel.pos.x += s; applyPos(sel); }
  else if (field === 'y') { sel.pos.z += s; applyPos(sel); }
  else if (field === 'z') { sel.pos.y += s; applyPos(sel); }
  else if (field === 'h') { setObjectHeight(sel, sel.height + s); }
  else if (field === 'rotx') { sel.euler.x += s * Math.PI / 180; applyRot(sel); }
  else if (field === 'roty') { sel.euler.y += s * Math.PI / 180; applyRot(sel); }
  else if (field === 'rotz') { sel.euler.z += s * Math.PI / 180; applyRot(sel); }
  else if (field === 'w') { sel.params.w = Math.max(1, sel.params.w + s); rebuildObjectMesh(sel); }
  else if (field === 'd') { sel.params.d = Math.max(1, sel.params.d + s); rebuildObjectMesh(sel); }
  else if (field === 'r') { sel.params.r = Math.max(1, sel.params.r + s); rebuildObjectMesh(sel); }
  else if (field === 'rx') { sel.params.rx = Math.max(1, sel.params.rx + s); rebuildObjectMesh(sel); }
  else if (field === 'rz') { sel.params.rz = Math.max(1, sel.params.rz + s); rebuildObjectMesh(sel); }
}

function handleField(sel, field, value) {
  if (field === 'name') {
    sel.name = value;
    refreshLayers();
  } else if (field === 'x') {
    sel.pos.x = num(value); applyPos(sel);
  } else if (field === 'y') {
    sel.pos.z = num(value); applyPos(sel);
  } else if (field === 'z') {
    sel.pos.y = num(value); applyPos(sel);
  } else if (field === 'h') {
    setObjectHeight(sel, num(value));
  } else if (field === 'rotx') {
    sel.euler.x = num(value) * Math.PI / 180; applyRot(sel);
  } else if (field === 'roty') {
    sel.euler.y = num(value) * Math.PI / 180; applyRot(sel);
  } else if (field === 'rotz') {
    sel.euler.z = num(value) * Math.PI / 180; applyRot(sel);
  } else if (field === 'w') {
    sel.params.w = Math.max(1, num(value)); rebuildObjectMesh(sel);
  } else if (field === 'd') {
    sel.params.d = Math.max(1, num(value)); rebuildObjectMesh(sel);
  } else if (field === 'r') {
    sel.params.r = Math.max(1, num(value)); rebuildObjectMesh(sel);
  } else if (field === 'rx') {
    sel.params.rx = Math.max(1, num(value)); rebuildObjectMesh(sel);
  } else if (field === 'rz') {
    sel.params.rz = Math.max(1, num(value)); rebuildObjectMesh(sel);
  } else if (field === 'text') {
    sel.params.text = value;
    rebuildObjectMesh(sel);
  } else if (field === 'flip') {
    sel.params.flip = (value === 'on');
    rebuildObjectMesh(sel);
  }
}

function refreshHint() {
  var sel = state.selected;
  var h = '';
  if (sel) {
    if (sel.interact === 'move') {
      h = '<b>設置モード</b> 左ドラッグで移動 ／ <b>←→</b> X・<b>↑↓</b> Y(奥行)・<b>Shift+↑↓</b> Z(高さ)（1mm）／ Ctrl同時押しで10mm ／ 空きクリックで選択解除';
    } else if (sel.interact === 'extrude') {
      h = '<b>押し出しモード</b> <b>↑↓</b> で高さを変更（1mm・Ctrlで10mm） ／ 左ドラッグは視点回転';
    } else {
      h = '<b>回転モード</b> 左ドラッグで図形を自由回転、マウスを離すとその向きで固定 ／ 別の図形をクリックで選択を切り替え';
    }
  } else if (state.tool === 'text') {
    h = '<b>文字ツール</b> 上の「文字を入力」に名前などを入力 ／ 盤上をドラッグして大きさを決めます ／ または<b>「出力」ボタン</b>で盤中央に作成' +
      (state.mode === 'build' ? '＜造形モード＞ 文字が<u>浮き出ます</u>（青・凸）' : '＜切り抜きモード＞ 文字が<u>彫り込まれます</u>（赤・凹）') +
      (state.addMode ? ' ／ 追加モードON: 続けて複数作成できます' : '');
  } else if (state.tool !== 'select') {
    h = '<b>' + shapeLabel[state.tool] + 'ツール</b> 盤上をドラッグして形を描きます' + (state.addMode ? ' ／ 追加モードON: 続けて複数作成できます' : ' ／ 作成後は選択ツールに戻ります。連続作成は＋追加ON');
  } else {
    h = '左ドラッグまたは<b>ミドルドラッグ</b>で視点回転 ／ ホイールでズーム ／ 図形クリックで選択 ／ 下のツールから図形を作成 ／ 青=造形・赤=切り抜き';
  }
  hintEl.innerHTML = h;
}

function showBusy(v) {
  document.getElementById('busy').style.display = v ? 'flex' : 'none';
}

function showModal(title, msg, isError, extraLabel, extraCb) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalTitle').className = isError ? 'err' : '';
  document.getElementById('modalMsg').textContent = msg;
  var ex = document.getElementById('modalExtra');
  ex.style.display = extraLabel ? 'inline-block' : 'none';
  ex.textContent = extraLabel || '';
  ex._cb = extraCb || null;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function csgIndexedGeometry(o) {
  var g = o.csgGeom;
  if (g) return g;
  var geom = o.geomCache;
  if (!geom) {
    geom = ringsToGeometry(makeFootprintRings(o.st, o.params), o.height, o.params.round || 0);
  }
  var clean = new THREE.BufferGeometry();
  clean.setAttribute('position', geom.getAttribute('position'));
  if (geom.index) {
    clean.setIndex(geom.index);
    g = clean;
  } else {
    g = mergeVertices(clean, 1e-4);
    if (!g.index) {
      g = mergeVertices(g.toNonIndexed(), 1e-4);
    }
  }
  o.csgGeom = g;
  return g;
}

function toManifoldMesh(geom) {
  if (!geom.index) geom = geom.toNonIndexed();
  var pos = geom.attributes.position;
  var n = pos.count;
  var vp = new Float32Array(n * 3);
  for (var i = 0; i < n; i++) {
    vp[i * 3] = pos.getX(i);
    vp[i * 3 + 1] = pos.getY(i);
    vp[i * 3 + 2] = pos.getZ(i);
  }
  var tri = geom.index.array;
  var tri32;
  if (tri.BYTES_PER_ELEMENT === 4) {
    tri32 = tri;
  } else {
    tri32 = new Uint32Array(tri.length);
    for (var k = 0; k < tri.length; k++) tri32[k] = tri[k];
  }
  return { numProp: 3, numVert: n, vertProperties: vp, triVerts: tri32, numTri: tri.length / 3 };
}

function objectToManifold(o, Manifold) {
  var m = Manifold.ofMesh(toManifoldMesh(csgIndexedGeometry(o)));
  return m.transform(o.mesh.matrixWorld.elements);
}

function meshToBufferGeometry(mesh) {
  var numProp = mesh.numProp;
  var pos = new Float32Array(mesh.numVert * 3);
  for (var i = 0; i < mesh.numVert; i++) {
    pos[i * 3] = mesh.vertProperties[i * numProp];
    pos[i * 3 + 1] = mesh.vertProperties[i * numProp + 1];
    pos[i * 3 + 2] = mesh.vertProperties[i * numProp + 2];
  }
  var geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geom.setIndex(new THREE.BufferAttribute(mesh.triVerts, 1));
  return geom;
}

function computeCSG() {
  var builds = [];
  var cuts = [];
  for (var i = 0; i < state.objects.length; i++) {
    var o = state.objects[i];
    if (o.mode === 'build') builds.push(o);
    else cuts.push(o);
  }
  if (!builds.length) return Promise.reject(new Error('造形(青)オブジェクトがありません。先に造形モードで図形を作成してください。'));
  return window.MANIFOLD.ready.then(function () {
    var M = window.MANIFOLD.getModule().Manifold;
    scene.updateMatrixWorld(true);
    var result = null;
    for (var i = 0; i < builds.length; i++) {
      var m = objectToManifold(builds[i], M);
      if (!result) {
        result = m;
      } else {
        result = result.add(m);
      }
    }
    for (var i = 0; i < cuts.length; i++) {
      result = result.subtract(objectToManifold(cuts[i], M));
    }
    result = clipToPlate(result);
    if (!result || result.isEmpty()) {
      throw new Error('立体が空です。');
    }
    return meshToBufferGeometry(result.getMesh());
  });
}

function clipToPlate(result) {
  var bb = result.boundingBox();
  if (bb.min[1] >= 0) return result;
  var pad = 2;
  var w = (bb.max[0] - bb.min[0]) + pad * 2;
  var d = (bb.max[2] - bb.min[2]) + pad * 2;
  var h = (bb.max[1] - 0) + pad;
  var geom = ringsToGeometry([ringBox(w, d)], h);
  geom.translate((bb.min[0] + bb.max[0]) / 2, 0, (bb.min[2] + bb.max[2]) / 2);
  var clean = new THREE.BufferGeometry();
  clean.setAttribute('position', geom.getAttribute('position'));
  var g = mergeVertices(clean, 1e-4);
  if (!g.index) g = mergeVertices(g.toNonIndexed(), 1e-4);
  var M = window.MANIFOLD.getModule().Manifold;
  var box = M.ofMesh(toManifoldMesh(g));
  return result.intersect(box);
}

function checkManifold(geom) {
  var arr = geom.attributes.position.array;
  var issues = [];
  if (!arr || arr.length < 9) { issues.push('三角形がありません。'); return issues; }
  var map = new Map();
  var V = [{}, {}, {}];
  var S = [{}, {}, {}];
  var nTri = 0;
  for (var i = 0; i < arr.length; i += 9) {
    nTri++;
    for (var k = 0; k < 3; k++) {
      V[k].x = arr[i + k * 3];
      V[k].y = arr[i + k * 3 + 1];
      V[k].z = arr[i + k * 3 + 2];
      S[k].x = Math.round(V[k].x * 1000) / 1000;
      S[k].y = Math.round(V[k].y * 1000) / 1000;
      S[k].z = Math.round(V[k].z * 1000) / 1000;
    }
    for (var e = 0; e < 3; e++) {
      var p = S[e], q = S[(e + 1) % 3];
      var key;
      if (p.x < q.x || (p.x === q.x && (p.y < q.y || (p.y === q.y && p.z <= q.z)))) {
        key = p.x + '|' + p.y + '|' + p.z + '|' + q.x + '|' + q.y + '|' + q.z;
      } else {
        key = q.x + '|' + q.y + '|' + q.z + '|' + p.x + '|' + p.y + '|' + p.z;
      }
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  var open = 0;
  map.forEach(function (c) { if (c === 1) open++; });
  if (open > 0) {
    issues.push('閉じていないエッジが' + open + '本あります。\n面が接合していない箇所があるため、STLは水密(マニホールド)ではありません。\n重なる面の位置を修正してください。');
  }
  return issues;
}

function writeSTL(geom) {
  var pos = geom.attributes.position.array;
  var nTri = Math.floor(pos.length / 9);
  var buffer = new ArrayBuffer(84 + 50 * nTri);
  var dv = new DataView(buffer);
  var name = '3DPrinterModel';
  for (var i = 0; i < name.length; i++) dv.setUint8(i, name.charCodeAt(i));
  var o = 80;
  dv.setUint32(o, nTri, true);
  o += 4;
  var a = [0, 0, 0], b = [0, 0, 0], c = [0, 0, 0];
  for (var i = 0; i < nTri; i++) {
    var k = i * 9;
    a[0] = pos[k]; a[1] = -pos[k + 2]; a[2] = pos[k + 1];
    b[0] = pos[k + 3]; b[1] = -pos[k + 5]; b[2] = pos[k + 4];
    c[0] = pos[k + 6]; c[1] = -pos[k + 8]; c[2] = pos[k + 7];
    var e1x = b[0] - a[0], e1y = b[1] - a[1], e1z = b[2] - a[2];
    var e2x = c[0] - a[0], e2y = c[1] - a[1], e2z = c[2] - a[2];
    var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
    var l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
    nx /= l; ny /= l; nz /= l;
    dv.setFloat32(o, nx, true); dv.setFloat32(o + 4, ny, true); dv.setFloat32(o + 8, nz, true);
    o += 12;
    var tri = [a, b, c];
    for (var t = 0; t < 3; t++) {
      dv.setFloat32(o, tri[t][0], true);
      dv.setFloat32(o + 4, tri[t][1], true);
      dv.setFloat32(o + 8, tri[t][2], true);
      o += 12;
    }
    dv.setUint16(o, 0, true);
    o += 2;
  }
  var blob = new Blob([buffer], { type: 'application/octet-stream' });
  var url = URL.createObjectURL(blob);
  var al = document.createElement('a');
  al.href = url;
  var d = new Date();
  function pad(n) { return String(n).padStart(2, '0'); }
  al.download = '3dprint_' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + '_' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds()) + '.stl';
  document.body.appendChild(al);
  al.click();
  document.body.removeChild(al);
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
}

function exportSTL() {
  showBusy(true);
  computeCSG().then(function (geom) {
    try {
      var ni = geom.toNonIndexed();
      var problems = checkManifold(ni);
      showBusy(false);
      if (problems.length) {
        pendingSTLGeom = ni;
        showModal('STLエラー', '以下の問題があります:\n\n' + problems.join('\n') + '\n\nそれでも出力を続けますか？', true, 'それでも出力する', function () {
          writeSTL(pendingSTLGeom);
        });
      } else {
        writeSTL(ni);
      }
    } catch (err) {
      showBusy(false);
      showModal('エラー', 'STL生成に失敗しました: ' + err.message, true);
    }
  }).catch(function (err) {
    showBusy(false);
    showModal('エラー', err.message, true);
  });
}

function applyMerge() {
  showBusy(true);
  computeCSG().then(function (geom) {
    try {
      showBusy(false);
      if (!geom || !geom.attributes.position.count) {
        showModal('エラー', '立体が空です。', true);
        return;
      }
      commitMerged(geom);
    } catch (err) {
      showBusy(false);
      showModal('エラー', '合成に失敗しました: ' + err.message, true);
    }
  }).catch(function (err) {
    showBusy(false);
    showModal('エラー', err.message, true);
  });
}

function commitMerged(geom) {
  while (state.objects.length) deleteObject(state.objects[0]);
  state.selected = null;
  var obj = {
    id: state.idSeq++,
    mode: 'build',
    st: 'merge',
    params: {},
    height: 1,
    pos: new THREE.Vector3(0, 0, 0),
    euler: new THREE.Euler(0, 0, 0, 'YXZ'),
    interact: 'move',
    visible: true,
    mesh: null,
    geomCache: null,
    mergeGeom: geom
  };
  state.nameCounts = state.nameCounts || {};
  state.nameCounts['merge'] = (state.nameCounts['merge'] || 0) + 1;
  obj.name = '合成モデル ' + state.nameCounts['merge'];
  buildObjectMesh(obj);
  state.objects.push(obj);
  selectObject(obj);
  refreshLayers();
  refreshHint();
  showModal('合成完了', 'すべての図形が1つのモデルに合成されました。\nレイヤーには合成結果のみが残ります。\n盤面より下に出ている部分は出力されません。');
}

panel = document.getElementById('panel');
layerList = document.getElementById('layerList');
hintEl = document.getElementById('hint');

initScene();
refreshLayers();
refreshHint();
setTool('select');

window.__app = {
  state: state,
  createObject: createObject,
  makeFootprintRings: makeFootprintRings,
  pickFontData: pickFontData,
  ringBox: ringBox,
  roundRing: roundRing,
  ringsToGeometry: ringsToGeometry,
  computeCSG: computeCSG,
  checkManifold: checkManifold,
  csgIndexedGeometry: csgIndexedGeometry,
  objectToManifold: objectToManifold,
  meshToBufferGeometry: meshToBufferGeometry,
  toManifoldMesh: toManifoldMesh,
  applyMerge: applyMerge,
  clipToPlate: clipToPlate
};

})();
