'use strict';
var MODELS = (function () {
  var THREE = window.THREE;
  var earcut = window.earcut;

  var STANDARDS = [
    { id: 'M3',  d: 0.30, p: 0.05,  len: 1.5 },
    { id: 'M4',  d: 0.40, p: 0.07,  len: 1.7 },
    { id: 'M5',  d: 0.50, p: 0.08,  len: 1.9 },
    { id: 'M6',  d: 0.60, p: 0.10,  len: 2.1 },
    { id: 'M7',  d: 0.70, p: 0.115, len: 2.2 },
    { id: 'M8',  d: 0.80, p: 0.125, len: 2.3 },
    { id: 'M9',  d: 0.90, p: 0.14,  len: 2.4 },
    { id: 'M10', d: 1.00, p: 0.15,  len: 2.5 },
    { id: 'M11', d: 1.10, p: 0.16,  len: 2.6 },
    { id: 'M12', d: 1.20, p: 0.175, len: 2.7 }
  ];

  var CUBE_SIZE = 3.4;

  var BOLT_FAMILIES = [
    { id: 'hex', name: '六角ボルト' },
    { id: 'cap', name: 'キャップボルト' },
    { id: 'pan', name: 'なべボルト' },
    { id: 'truss', name: 'トラスボルト' },
    { id: 'square', name: '四角ボルト' }
  ];
  var NUT_FAMILIES = [
    { id: 'hex', name: '六角ナット' },
    { id: 'square', name: '四角ナット' },
    { id: 'flange', name: 'フランジナット' },
    { id: 'cap', name: '袋ナット' }
  ];

  var _wood = null, _silver = null, _silverDark = null, _thread = null, _threadDark = null, _black = null, _ring = null, _bore = null;

  function silver() {
    return _silver || (_silver = new THREE.MeshStandardMaterial({ color: 0xdde3ea, metalness: 0.95, roughness: 0.28, envMapIntensity: 1.1 }));
  }
  function silverDark() {
    return _silverDark || (_silverDark = new THREE.MeshStandardMaterial({ color: 0x9aa3ac, metalness: 0.9, roughness: 0.5 }));
  }
  // flat-shaded thread material so each ridge reads as a crisp 凹凸 facet
  function threadMat() {
    return _thread || (_thread = new THREE.MeshStandardMaterial({ color: 0xd7dee6, metalness: 0.92, roughness: 0.34, envMapIntensity: 1.05, flatShading: true }));
  }
  function threadDarkMat() {
    return _threadDark || (_threadDark = new THREE.MeshStandardMaterial({ color: 0x858f98, metalness: 0.85, roughness: 0.5, flatShading: true }));
  }
  function black() {
    return _black || (_black = new THREE.MeshStandardMaterial({ color: 0x1e2327, metalness: 0.4, roughness: 0.7 }));
  }
  function boreMat() {
    return _bore || (_bore = new THREE.MeshStandardMaterial({ color: 0x3a2e20, metalness: 0.0, roughness: 0.95 }));
  }
  function ringMat() {
    return _ring || (_ring = new THREE.MeshStandardMaterial({ color: 0xffb84d, metalness: 0.3, roughness: 0.5, emissive: 0xff9a1f, emissiveIntensity: 0.5 }));
  }
  function wood() {
    if (_wood) return _wood;
    var c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    var x = c.getContext('2d');
    x.fillStyle = '#b58a52';
    x.fillRect(0, 0, 512, 256);
    for (var i = 0; i < 180; i++) {
      var y = Math.random() * 256;
      var dark = Math.random() < 0.5;
      var a = Math.random() * 0.22;
      x.strokeStyle = dark ? 'rgba(92,60,25,' + a + ')' : 'rgba(245,215,165,' + (a * 0.8) + ')';
      x.lineWidth = Math.random() * 2 + 0.6;
      x.beginPath();
      var px = 0, py = y;
      x.moveTo(px, py);
      while (px < 512) { px += Math.random() * 36 + 12; py += (Math.random() - 0.5) * 7; x.lineTo(px, py); }
      x.stroke();
    }
    for (i = 0; i < 6; i++) {
      var kx = Math.random() * 512, ky = Math.random() * 256;
      x.strokeStyle = 'rgba(70,45,18,0.35)';
      x.beginPath(); x.ellipse(kx, ky, Math.random() * 12 + 5, Math.random() * 9 + 4, 0, 0, Math.PI * 2); x.stroke();
    }
    var tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    _wood = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88, metalness: 0.0 });
    return _wood;
  }

  // ---- geometry helpers ----

  function forceTriNormal(geom, tx, ty, tz) {
    var pos = geom.getAttribute('position');
    var i, f, ax, ay, az, bx, by, bz, cx, cy, cz, ux, uy, uz, vx, vy, vz, nx, ny, nz, dot, x1, y1, z1, x2, y2, z2;
    for (f = 0; f < pos.count; f += 3) {
      ax = pos.getX(f); ay = pos.getY(f); az = pos.getZ(f);
      bx = pos.getX(f + 1); by = pos.getY(f + 1); bz = pos.getZ(f + 1);
      cx = pos.getX(f + 2); cy = pos.getY(f + 2); cz = pos.getZ(f + 2);
      ux = bx - ax; uy = by - ay; uz = bz - az;
      vx = cx - ax; vy = cy - ay; vz = cz - az;
      nx = uy * vz - uz * vy; ny = uz * vx - ux * vz; nz = ux * vy - uy * vx;
      dot = nx * tx + ny * ty + nz * tz;
      if (dot < 0) {
        x1 = pos.getX(f + 1); y1 = pos.getY(f + 1); z1 = pos.getZ(f + 1);
        x2 = pos.getX(f + 2); y2 = pos.getY(f + 2); z2 = pos.getZ(f + 2);
        pos.setXYZ(f + 1, x2, y2, z2); pos.setXYZ(f + 2, x1, y1, z1);
      }
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }

  function orientRadial(geom, dir) {
    var pos = geom.getAttribute('position');
    var f, k, cx, cz, len, ax, ay, az, bx, by, bz, ccx, ccy, ccz, ux, uy, uz, vx, vy, vz, nx, ny, nz, dot, x1, y1, z1, x2, y2, z2;
    for (f = 0; f < pos.count; f += 3) {
      cx = 0; cz = 0;
      for (k = 0; k < 3; k++) { cx += pos.getX(f + k); cz += pos.getZ(f + k); }
      cx /= 3; cz /= 3;
      len = Math.hypot(cx, cz);
      if (len < 1e-6) continue;
      cx /= len; cz /= len;
      ax = pos.getX(f); ay = pos.getY(f); az = pos.getZ(f);
      bx = pos.getX(f + 1); by = pos.getY(f + 1); bz = pos.getZ(f + 1);
      ccx = pos.getX(f + 2); ccy = pos.getY(f + 2); ccz = pos.getZ(f + 2);
      ux = bx - ax; uy = by - ay; uz = bz - az;
      vx = ccx - ax; vy = ccy - ay; vz = ccz - az;
      nx = uy * vz - uz * vy; ny = uz * vx - ux * vz; nz = ux * vy - uy * vx;
      dot = nx * cx + nz * cz;
      if ((dir > 0 && dot < 0) || (dir < 0 && dot > 0)) {
        x1 = pos.getX(f + 1); y1 = pos.getY(f + 1); z1 = pos.getZ(f + 1);
        x2 = pos.getX(f + 2); y2 = pos.getY(f + 2); z2 = pos.getZ(f + 2);
        pos.setXYZ(f + 1, x2, y2, z2); pos.setXYZ(f + 2, x1, y1, z1);
      }
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }

  function makeThreadBand(rootR, crestR, length, pitch) {
    var crestW = pitch * 0.34;
    var profAx = [-pitch * 0.5, -crestW * 0.5, crestW * 0.5, pitch * 0.5];
    var profR = [rootR, crestR, crestR, rootR];
    var turns = length / pitch;
    var N = Math.max(56, Math.round(turns * 44));
    var M = profAx.length;
    var i, j;
    var grid = [];
    for (i = 0; i <= N; i++) {
      var s = (i / N) * length;
      var ang = s / pitch * Math.PI * 2;
      var ca = Math.cos(ang), sa = Math.sin(ang);
      var row = [];
      for (j = 0; j < M; j++) {
        var ax2 = s + profAx[j];
        var r = profR[j];
        row.push([r * ca, ax2, r * sa]);
      }
      grid.push(row);
    }
    var verts = [];
    for (i = 0; i < N; i++) {
      for (j = 0; j < M - 1; j++) {
        var a = grid[i][j], b = grid[i][j + 1], c = grid[i + 1][j], d = grid[i + 1][j + 1];
        verts.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
        verts.push(b[0], b[1], b[2], d[0], d[1], d[2], c[0], c[1], c[2]);
      }
    }
    var geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geom.computeVertexNormals();
    return geom;
  }

  function hexPts(radiusAcrossCorners) {
    var a = [];
    for (var i = 0; i < 6; i++) {
      var ang = i / 6 * Math.PI * 2 + Math.PI / 2;
      a.push([radiusAcrossCorners * Math.cos(ang), radiusAcrossCorners * Math.sin(ang)]);
    }
    return a;
  }
  function squarePts(half) {
    return [[-half, -half], [half, -half], [half, half], [-half, half]];
  }
  function holePt(holeR, holeSeg, i) {
    var a = i / holeSeg * Math.PI * 2;
    return [holeR * Math.cos(a), holeR * Math.sin(a)];
  }

  // gear / serrated polygon: teeth around a circle (odd/even radius alternation)
  function gearPts(r, tooth, teeth, segs) {
    var pts = [];
    var step = Math.PI * 2 / teeth;
    for (var t = 0; t < teeth; t++) {
      for (var s = 0; s < segs; s++) {
        var a = t * step + s / segs * step;
        var rr = (s % 2 === 0) ? r : r - tooth;
        pts.push([rr * Math.cos(a), rr * Math.sin(a)]);
      }
    }
    return pts;
  }

  // fine vertical ridges on each flat face of a prism polygon (knurling)
  function faceKnurl(outerPts, height, d, count) {
    var g = new THREE.Group();
    var mat = silver();
    var ridgeR = Math.max(0.011, d * 0.022);
    var prot = Math.max(0.02, d * 0.032);
    var n = outerPts.length;
    for (var f = 0; f < n; f++) {
      var a = outerPts[f], b = outerPts[(f + 1) % n];
      var fx = (a[0] + b[0]) / 2, fz = (a[1] + b[1]) / 2;
      var len = Math.hypot(fx, fz) || 1;
      var nx = fx / len, nz = fz / len;
      var tx = -nz, tz = nx;
      var edge = Math.hypot(b[0] - a[0], b[1] - a[1]);
      for (var r = 0; r < count; r++) {
        var off = (r / (count - 1) - 0.5) * edge * 0.62;
        var px = nx * (len + prot) + tx * off;
        var pz = nz * (len + prot) + tz * off;
        var ridge = new THREE.Mesh(new THREE.CylinderGeometry(ridgeR, ridgeR, height, 6), mat);
        ridge.position.set(px, height / 2, pz);
        g.add(ridge);
      }
    }
    return g;
  }

  // chamfered (beveled) top / bottom edges of a prism
  function bevelRings(circumR, height, d, seg, top, bottom) {
    var hB = Math.max(0.03, d * 0.08);
    var g = new THREE.Group();
    if (top) {
      var t = new THREE.Mesh(new THREE.CylinderGeometry(circumR * 0.9, circumR * 1.03, hB, seg, 1, true), silver());
      t.position.y = height - hB / 2;
      g.add(t);
    }
    if (bottom) {
      var b = new THREE.Mesh(new THREE.CylinderGeometry(circumR * 1.03, circumR * 0.9, hB, seg, 1, true), silver());
      b.position.y = hB / 2;
      g.add(b);
    }
    return g;
  }

  // Build a prism (outer polygon) with a central cylindrical hole.
  // opts: mat, mode 'through'|'top'|'bottom', holeDepth, halfSize
  function buildPrismWithHole(outerPts, holeR, height, opts) {
    opts = opts || {};
    var mat = opts.mat || silver();
    var innerMat = opts.innerMat || mat;
    var mode = opts.mode || 'through';
    var holeDepth = opts.holeDepth !== undefined ? opts.holeDepth : height;
    var cb = opts.counterbore || null;
    var cbR = cb ? cb.radius : holeR;
    var cbD = cb ? cb.depth : 0;
    var half = opts.halfSize !== undefined ? opts.halfSize : (function () {
      var m = 0;
      for (var i = 0; i < outerPts.length; i++) m = Math.max(m, Math.abs(outerPts[i][0]), Math.abs(outerPts[i][1]));
      return m;
    })();
    var outerSeg = outerPts.length;
    var holeSeg = 28;
    var g = new THREE.Group();

    var perim = [0];
    var plen = 0;
    var i;
    for (i = 1; i <= outerSeg; i++) {
      var p0 = outerPts[(i - 1) % outerSeg], p1 = outerPts[i % outerSeg];
      plen += Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
      perim.push(plen);
    }
    function uv2(wx, wz) {
      return [(wx + half) / (2 * half), (wz + half) / (2 * half)];
    }

    function buildFace(y, winding, radius) {
      radius = radius !== undefined ? radius : holeR;
      var ctr = [];
      for (i = 0; i < outerSeg; i++) ctr.push(outerPts[i][0], outerPts[i][1]);
      var hs = outerSeg;
      for (i = 0; i < holeSeg; i++) { var hp = holePt(radius, holeSeg, i); ctr.push(hp[0], hp[1]); }
      var idx = earcut(ctr, [hs], 2);
      var positions = [], uvs = [];
      for (i = 0; i < idx.length; i += 3) {
        var tri = [idx[i], idx[i + 1], idx[i + 2]];
        if (winding < 0) tri = [tri[0], tri[2], tri[1]];
        for (var k = 0; k < 3; k++) {
          var ci = tri[k];
          var pt = ci < outerSeg ? [outerPts[ci][0], outerPts[ci][1]] : holePt(radius, holeSeg, ci - outerSeg);
          positions.push(pt[0], y, pt[1]);
          var u = uv2(pt[0], pt[1]);
          uvs.push(u[0], u[1]);
        }
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      forceTriNormal(geom, 0, winding, 0);
      g.add(new THREE.Mesh(geom, mat));
    }

    // outer walls
    (function () {
      var positions = [], uvs = [];
      for (i = 0; i < outerSeg; i++) {
        var nxt = (i + 1) % outerSeg;
        var a = outerPts[i], b = outerPts[nxt];
        var u0 = perim[i] / plen, u1 = perim[i + 1] / plen;
        positions.push(a[0], 0, a[1]); uvs.push(u0, 0);
        positions.push(b[0], 0, b[1]); uvs.push(u1, 0);
        positions.push(a[0], height, a[1]); uvs.push(u0, 1);
        positions.push(b[0], 0, b[1]); uvs.push(u1, 0);
        positions.push(b[0], height, b[1]); uvs.push(u1, 1);
        positions.push(a[0], height, a[1]); uvs.push(u0, 1);
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      orientRadial(geom, 1);
      g.add(new THREE.Mesh(geom, mat));
    })();

    // inner wall
    function wallSegment(radius, yBot, yTop) {
      var positions = [], uvs = [];
      for (i = 0; i < holeSeg; i++) {
        var a0 = i / holeSeg * Math.PI * 2, a1 = (i + 1) / holeSeg * Math.PI * 2;
        var p0 = [radius * Math.cos(a0), radius * Math.sin(a0)];
        var p1 = [radius * Math.cos(a1), radius * Math.sin(a1)];
        positions.push(p0[0], yBot, p0[1]); uvs.push(i / holeSeg, 0);
        positions.push(p1[0], yBot, p1[1]); uvs.push((i + 1) / holeSeg, 0);
        positions.push(p0[0], yTop, p0[1]); uvs.push(i / holeSeg, 1);
        positions.push(p1[0], yBot, p1[1]); uvs.push((i + 1) / holeSeg, 0);
        positions.push(p1[0], yTop, p1[1]); uvs.push((i + 1) / holeSeg, 1);
        positions.push(p0[0], yTop, p0[1]); uvs.push(i / holeSeg, 1);
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      orientRadial(geom, -1);
      g.add(new THREE.Mesh(geom, innerMat));
    }
    // counterbore floor ring (between the bore and the wider pocket)
    function ringFloor(yy, rOut, rIn) {
      var positions = [], uvs = [];
      for (i = 0; i < holeSeg; i++) {
        var j = (i + 1) % holeSeg;
        var a = holePt(rOut, holeSeg, i), b = holePt(rOut, holeSeg, j);
        var c = holePt(rIn, holeSeg, i), d = holePt(rIn, holeSeg, j);
        positions.push(a[0], yy, a[1]); positions.push(b[0], yy, b[1]); positions.push(d[0], yy, d[1]);
        positions.push(a[0], yy, a[1]); positions.push(d[0], yy, d[1]); positions.push(c[0], yy, c[1]);
        uvs.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1);
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      forceTriNormal(geom, 0, 1, 0);
      var m = innerMat.clone();
      m.side = THREE.DoubleSide;
      g.add(new THREE.Mesh(geom, m));
    }
    (function () {
      var yBot = 0, yTop = height;
      if (mode === 'top') yBot = height - holeDepth;
      if (mode === 'bottom') yTop = holeDepth;
      if (cb) {
        wallSegment(holeR, yBot, height - cbD);
        wallSegment(cbR, height - cbD, yTop);
      } else {
        wallSegment(holeR, yBot, yTop);
      }
    })();

    // blind bore cap disc
    function capDisc(yy, reverse) {
      var positions = [], uvs = [];
      for (i = 1; i < holeSeg - 1; i++) {
        var p1 = holePt(holeR, holeSeg, i), p2 = holePt(holeR, holeSeg, i + 1);
        var order = reverse ? [p2, p1] : [p1, p2];
        positions.push(0, yy, 0); uvs.push(0.5, 0.5);
        positions.push(order[0][0], yy, order[0][1]); uvs.push(uv2(order[0][0], order[0][1])[0], uv2(order[0][0], order[0][1])[1]);
        positions.push(order[1][0], yy, order[1][1]); uvs.push(uv2(order[1][0], order[1][1])[0], uv2(order[1][0], order[1][1])[1]);
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      forceTriNormal(geom, 0, -1, 0);
      g.add(new THREE.Mesh(geom, innerMat));
    }
    if (mode === 'top') capDisc(height - holeDepth, false);
    if (mode === 'bottom') capDisc(holeDepth, true);

    // top / bottom faces
    function solidFace(y, winding, reverseFan) {
      var positions = [], uvs = [];
      for (i = 1; i < outerSeg - 1; i++) {
        var p0 = outerPts[0], p1 = outerPts[i], p2 = outerPts[i + 1];
        var order = reverseFan ? [p2, p1] : [p1, p2];
        positions.push(p0[0], y, p0[1]); uvs.push(uv2(p0[0], p0[1])[0], uv2(p0[0], p0[1])[1]);
        positions.push(order[0][0], y, order[0][1]); uvs.push(uv2(order[0][0], order[0][1])[0], uv2(order[0][0], order[0][1])[1]);
        positions.push(order[1][0], y, order[1][1]); uvs.push(uv2(order[1][0], order[1][1])[0], uv2(order[1][0], order[1][1])[1]);
      }
      var geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      forceTriNormal(geom, 0, winding, 0);
      g.add(new THREE.Mesh(geom, mat));
    }

    if (mode === 'top') {
      buildFace(height, 1, cb ? cbR : holeR);
      if (cb) ringFloor(height - cbD, cbR, holeR);
      buildFace(0, -1, holeR);
    } else if (mode === 'bottom') {
      solidFace(height, 1, false);
      solidFace(0, -1, true);
    } else {
      buildFace(height, 1);
      buildFace(0, -1);
    }

    return g;
  }

  // serrated lock-washer collar that sticks out under a bolt head
  function serratedCollar(d) {
    var th = Math.max(0.045, d * 0.12);
    var outerR = d * 1.32;
    var pts = gearPts(outerR, d * 0.09, 14, 2);
    var w = buildPrismWithHole(pts, d * 0.62, th, { mat: silver(), innerMat: silver() });
    w.position.y = -th;
    return w;
  }

  // serrated ring that sits around a hole rim (wood insertion area)
  function makeGearRing(outerR, tooth, innerR, height) {
    var pts = gearPts(outerR, tooth, 16, 2);
    return buildPrismWithHole(pts, innerR, height, { mat: ringMat(), innerMat: ringMat() });
  }

  // ---- parts ----

  function makeBoltShaft(d, len, pitch) {
    var crestR = d / 2;
    var depth = Math.max(0.05, d * 0.16);
    var rootR = crestR - depth;
    var g = new THREE.Group();
    var core = new THREE.Mesh(new THREE.CylinderGeometry(rootR * 0.95, rootR * 0.95, len, 24), silver());
    core.position.y = -len / 2;
    var band = makeThreadBand(rootR, crestR, len, pitch);
    orientRadial(band, 1);
    var thr = new THREE.Mesh(band, threadMat());
    thr.position.y = -len;
    var tipH = Math.min(0.25, len * 0.12);
    var tip = new THREE.Mesh(new THREE.ConeGeometry(rootR, tipH, 20), silver());
    tip.rotation.x = Math.PI;
    tip.position.y = -len - tipH / 2;
    g.add(core, thr, tip);
    return g;
  }

  function boltHead(family, d) {
    var g = new THREE.Group();
    if (family === 'hex') {
      var hr = d * 1.05, hh = d * 0.75;
      var head = new THREE.Mesh(new THREE.CylinderGeometry(hr, hr, hh, 6), silver());
      head.position.y = hh / 2;
      var w = new THREE.Mesh(new THREE.CylinderGeometry(d * 1.2, d * 1.2, d * 0.16, 20), silverDark());
      w.position.y = d * 0.08;
      var bevel = new THREE.Mesh(new THREE.CylinderGeometry(hr * 0.9, hr * 1.03, d * 0.13, 6), silver());
      bevel.position.y = hh - d * 0.065;
      g.add(head, w, bevel);
    } else if (family === 'cap') {
      var hr2 = d * 0.75, hh2 = d * 1.0;
      var head2 = new THREE.Mesh(new THREE.CylinderGeometry(hr2, hr2, hh2, 24), silver());
      head2.position.y = hh2 / 2;
      var sock = new THREE.Mesh(new THREE.CylinderGeometry(hr2 * 0.42, hr2 * 0.42, hh2 * 0.35, 6), black());
      sock.position.y = hh2 * 0.82;
      g.add(head2, sock);
    } else if (family === 'pan') {
      var hr3 = d * 0.95, hh3 = d * 0.5;
      var head3 = new THREE.Mesh(new THREE.CylinderGeometry(hr3, hr3, hh3, 24), silver());
      head3.position.y = hh3 / 2;
      var dome = new THREE.Mesh(new THREE.SphereGeometry(hr3 * 0.92, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), silver());
      dome.position.y = hh3;
      g.add(head3, dome);
    } else if (family === 'truss') {
      var hr4 = d * 1.25, hh4 = d * 0.4;
      var head4 = new THREE.Mesh(new THREE.CylinderGeometry(hr4, hr4, hh4, 24), silver());
      head4.position.y = hh4 / 2;
      var dome2 = new THREE.Mesh(new THREE.SphereGeometry(hr4 * 0.98, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), silver());
      dome2.position.y = hh4;
      g.add(head4, dome2);
    } else if (family === 'square') {
      var s = d * 1.7, hh5 = d * 0.8;
      var head5 = new THREE.Mesh(new THREE.BoxGeometry(s, hh5, s), silver());
      head5.position.y = hh5 / 2;
      var w2 = new THREE.Mesh(new THREE.CylinderGeometry(d * 1.2, d * 1.2, d * 0.16, 20), silverDark());
      w2.position.y = d * 0.08;
      g.add(head5, w2);
    }
    return g;
  }

  function makeBolt(std, family) {
    var g = new THREE.Group();
    g.add(makeBoltShaft(std.d, std.len, std.p));
    g.add(boltHead(family, std.d));
    return g;
  }

  function makeNut(std, family) {
    var d = std.d, p = std.p;
    var h = d * 0.85;
    var hexR = d * 1.05;
    var boreRootR = d / 2 + 0.09;
    var thrRootR = d / 2 + 0.16;
    var thrCrestR = d / 2 + 0.05;
    var g = new THREE.Group();
    var outer;
    var mode = 'through';
    var holeDepth = h;
    if (family === 'square') outer = squarePts(d * 0.75);
    else outer = hexPts(hexR);
    if (family === 'cap') { mode = 'bottom'; holeDepth = h * 0.75; }
    var body = buildPrismWithHole(outer, boreRootR, h, { mode: mode, holeDepth: holeDepth, mat: silver() });
    g.add(body);
    var circumR = (family === 'square') ? d * 0.75 * Math.SQRT2 : hexR;
    var seg = (family === 'square') ? 4 : 6;
    if (family === 'square') {
      // square nut: keep clean flat faces, no chamfer ring (would poke out spiky corners)
    } else if (family === 'flange') g.add(bevelRings(circumR, h, d, seg, true, false));
    else if (family === 'cap') g.add(bevelRings(circumR, h, d, seg, false, true));
    else g.add(bevelRings(circumR, h, d, seg, true, true));
    var band = makeThreadBand(thrRootR, thrCrestR, holeDepth, p);
    orientRadial(band, -1);
    var thr = new THREE.Mesh(band, threadMat());
    g.add(thr);
    if (family === 'flange') {
      var fl = new THREE.Mesh(new THREE.CylinderGeometry(d * 1.55, d * 1.55, d * 0.14, 24), silverDark());
      fl.position.y = d * 0.07;
      g.add(fl);
    }
    if (family === 'cap') {
      var dome = new THREE.Mesh(new THREE.SphereGeometry(hexR * 0.98, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), silver());
      dome.position.y = h;
      g.add(dome);
    }
    return g;
  }

  function makeRod(std, protrusion) {
    var d = std.d, p = std.p;
    var embed = 0.7;
    var total = embed + protrusion;
    var crestR = d / 2;
    var depth = Math.max(0.05, d * 0.16);
    var rootR = crestR - depth;
    var g = new THREE.Group();
    var core = new THREE.Mesh(new THREE.CylinderGeometry(rootR * 0.95, rootR * 0.95, total, 24), silver());
    core.position.y = total / 2;
    var band = makeThreadBand(rootR, crestR, total, p);
    orientRadial(band, 1);
    var thr = new THREE.Mesh(band, threadMat());
    var tip = new THREE.Mesh(new THREE.ConeGeometry(rootR, 0.14, 20), silver());
    tip.rotation.x = Math.PI;
    tip.position.y = total + 0.07;
    g.add(core, thr, tip);
    return g;
  }

  var CB_DEPTH = 0.18;

  // how far the stud (rod) should protrude above the cube top in nut mode:
  // tall enough for the matching nut to thread on, but low enough that the
  // nut can fly high above it without leaving the screen.
  function rodProtrude(std) {
    return Math.max(0.9, std.d * 0.85 * 1.1 + 0.2);
  }

  function makeCubeBoltHole(std) {
    var S = CUBE_SIZE;
    var holeR = std.d / 2 + 0.07;
    var depth = std.len + CB_DEPTH;
    var g = new THREE.Group();
    var body = buildPrismWithHole(squarePts(S / 2), holeR, S, { mode: 'top', holeDepth: depth, counterbore: { radius: holeR + CB_DEPTH, depth: CB_DEPTH }, mat: wood(), innerMat: boreMat() });
    g.add(body);
    var band = makeThreadBand(holeR, holeR - 0.09, std.len, std.p);
    orientRadial(band, -1);
    var thr = new THREE.Mesh(band, threadDarkMat());
    thr.position.y = S - std.len - CB_DEPTH;
    g.add(thr);
    var collar = makeGearRing(holeR + 0.31, 0.10, holeR + 0.19, 0.08);
    collar.position.y = S + 0.04;
    g.add(collar);
    return g;
  }

  function makeCubeRod(std) {
    var S = CUBE_SIZE;
    var rodR = std.d / 2 + 0.06;
    var embed = 0.7;
    var g = new THREE.Group();
    var body = buildPrismWithHole(squarePts(S / 2), rodR, S, { mode: 'top', holeDepth: embed + 0.15 + CB_DEPTH, counterbore: { radius: rodR + CB_DEPTH, depth: CB_DEPTH }, mat: wood(), innerMat: boreMat() });
    g.add(body);
    var rod = makeRod(std, rodProtrude(std));
    rod.position.y = S - embed;
    g.add(rod);
    var collar = makeGearRing(rodR + 0.31, 0.10, rodR + 0.19, 0.08);
    collar.position.y = S + 0.04;
    g.add(collar);
    return g;
  }

  function makeTray() {
    var g = new THREE.Group();
    var plank = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.16, 1.0), wood());
    plank.position.y = 0.08;
    g.add(plank);
    return g;
  }

  return {
    STANDARDS: STANDARDS,
    CUBE_SIZE: CUBE_SIZE,
    BOLT_FAMILIES: BOLT_FAMILIES,
    NUT_FAMILIES: NUT_FAMILIES,
    makeBolt: makeBolt,
    makeNut: makeNut,
    makeRod: makeRod,
    makeCubeBoltHole: makeCubeBoltHole,
    makeCubeRod: makeCubeRod,
    makeTray: makeTray,
    rodProtrude: rodProtrude,
    CB_DEPTH: CB_DEPTH
  };
})();
