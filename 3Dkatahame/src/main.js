import * as THREE from '../lib/three.module.js';
import { Brush, Evaluator, SUBTRACTION } from '../lib/three-bvh-csg.module.js';

/* ============================== ヘルパー ============================== */
const $ = (s, r = document) => r.querySelector(s);
const rand = a => a[Math.floor(Math.random() * a.length)];
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const easeOut = t => 1 - Math.pow(1 - t, 3);
const easeIn = t => t * t * t;
const easeInOut = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const wait = ms => new Promise(r => setTimeout(r, ms));
function randExcept(ex, len) {
  let i;
  do { i = Math.floor(Math.random() * len); } while (i === ex);
  return i;
}
function randFar(ex, len, dist) {
  const cands = [];
  for (let i = 0; i < len; i++) if (Math.abs(i - ex) >= dist) cands.push(i);
  return cands.length ? rand(cands) : randExcept(ex, len);
}

/* ============================== 効果音 ============================== */
const sfx = {
  ctx: null,
  enabled: true,
  ensure() {
    if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },
  tone(freq, dur, type = 'sine', vol = 0.25, delay = 0, slide = null) {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.ctx.destination);
    o.start(t); o.stop(t + dur + 0.06);
  },
  click() { this.tone(660, 0.09, 'sine', 0.2); },
  whoosh() { this.tone(260, 0.4, 'sawtooth', 0.05, 0, 560); },
  correct() { [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.3, 'sine', 0.26, i * 0.09)); },
  wrong() { this.tone(230, 0.35, 'sawtooth', 0.14, 0, 130); this.tone(150, 0.42, 'square', 0.08, 0.06, 100); },
  thud() { this.tone(130, 0.16, 'sine', 0.35); this.tone(90, 0.26, 'triangle', 0.22, 0.03, 55); },
  clink() { this.tone(1500, 0.06, 'sine', 0.12); },
  rattle() { [0, 0.1, 0.2, 0.3].forEach((d, i) => this.tone(170 + Math.random() * 50, 0.06, 'triangle', 0.13, d)); },
  pop() { this.tone(880, 0.1, 'triangle', 0.18); },
  fanfare() { [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => this.tone(f, 0.32, 'triangle', 0.22, i * 0.13)); },
};

/* ============================== 設定 ============================== */
const SHAPE_TYPES = ['box', 'circle', 'ellipse', 'tri', 'star', 'heart'];
const SHAPE_LABELS = {
  box: '□ しかく', circle: '○ まる',
  ellipse: '◍ だえん', tri: '△ さんかく', star: '☆ ほし', heart: '♡ ハート',
};
const SIMILAR = { box: [], circle: ['ellipse'], ellipse: ['circle'], tri: [], star: [], heart: [] };

/* 大きさの段階（5段階と8段階） */
const SIZE_TABLES = {
  wide:    [{ id: 'w1', size: 0.42 }, { id: 'w2', size: 0.58 }, { id: 'w3', size: 0.76 }, { id: 'w4', size: 0.98 }, { id: 'w5', size: 1.24 }],
  normal:  [{ id: 'n1', size: 0.50 }, { id: 'n2', size: 0.63 }, { id: 'n3', size: 0.76 }, { id: 'n4', size: 0.89 }, { id: 'n5', size: 1.02 }],
  tight:   [{ id: 't1', size: 0.52 }, { id: 't2', size: 0.60 }, { id: 't3', size: 0.69 }, { id: 't4', size: 0.79 }, { id: 't5', size: 0.90 }],
  extreme: [{ id: 'x1', size: 0.50 }, { id: 'x2', size: 0.57 }, { id: 'x3', size: 0.64 }, { id: 'x4', size: 0.71 }, { id: 'x5', size: 0.78 }, { id: 'x6', size: 0.85 }, { id: 'x7', size: 0.92 }, { id: 'x8', size: 0.99 }],
};
const sizeIn = (tableId, sizeId) => SIZE_TABLES[tableId].find(s => s.id === sizeId);

const MODES = [
  { id: 'up', label: '上からはめる' },
  { id: 'front', label: '正面からはめる' },
];

const DIFFS = [
  { id: 'easy',      label: 'やさしい',         sizes: 'wide' },
  { id: 'normal',    label: 'ふつう',            sizes: 'normal' },
  { id: 'hard',      label: 'むずかしい',        sizes: 'normal' },
  { id: 'veryhard',  label: 'ちょうむずかしい',  sizes: 'tight' },
  { id: 'superhard', label: 'ぜつむ',            sizes: 'extreme' },
];

const THEMES = [
  {
    id: 'rainbow', name: 'にじいろ', bg: '#bfe6ff', table: '#f3e6c9', tableDark: '#dfc9a0', block: '#f2c06b',
    pieces: ['#ff5e5e', '#ffc93c', '#4cb75b', '#4d9fff', '#a86bff', '#ff7ac2', '#3fd6c0'],
  },
  {
    id: 'pastel', name: 'パステル', bg: '#e6f4ff', table: '#ffffff', tableDark: '#e8edf2', block: '#c9b8ff',
    pieces: ['#ffb3ba', '#ffdfba', '#baffc9', '#bae1ff', '#e0bbff', '#ffd0f4', '#fff0a8'],
  },
  {
    id: 'vivid', name: 'げんきビビッド', bg: '#232a4d', table: '#3a3f63', tableDark: '#2a2e4d', block: '#8a2be2',
    pieces: ['#ff3860', '#ffdd57', '#2ee073', '#2f9df3', '#b847ff', '#ff9f43', '#57e0d0'],
  },
  {
    id: 'cool', name: 'クール', bg: '#d8f2ff', table: '#cfe9f5', tableDark: '#b7d6e8', block: '#5f9ed6',
    pieces: ['#2d7fd6', '#4aa3e8', '#5bc8e0', '#39b3a0', '#6fb5f0', '#8fd0f7', '#a5e0ff'],
  },
  {
    id: 'warm', name: 'あたたかい', bg: '#fff0e2', table: '#f7e0c6', tableDark: '#e8cfac', block: '#e08a4b',
    pieces: ['#ff6f43', '#ff9f43', '#ffc443', '#e85d5d', '#f08a8a', '#f2a65a', '#ffd166'],
  },
  {
    id: 'mono', name: 'シックモノトーン', bg: '#ececec', table: '#f7f7f7', tableDark: '#e0e0e0', block: '#8f97a1',
    pieces: ['#2b2d42', '#555b6e', '#8d99ae', '#6b6b6b', '#a9a9a9', '#3d3d3d', '#c9c9c9'],
  },
];

/* ============================== 形のジオメトリ ============================== */
function extrudeShape(shape, h) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 18 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, -h / 2, 0);
  return g;
}
function triangleShape(size) {
  const a = size * 1.7, R = a / Math.sqrt(3);
  const s = new THREE.Shape();
  s.moveTo(0, R); s.lineTo(-a / 2, -R / 2); s.lineTo(a / 2, -R / 2); s.closePath();
  return s;
}
function starShape(size) {
  const R = size * 1.3, r = R * 0.45;
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 === 0 ? R : r;
    const x = Math.cos(ang) * rad, y = Math.sin(ang) * rad;
    if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}
function heartShape(size) {
  const k = size * 1.0;
  const s = new THREE.Shape();
  s.moveTo(0, 0.9 * k);
  s.bezierCurveTo(0.6 * k, 0.5 * k, 1.1 * k, 0.0 * k, 0, -0.95 * k);
  s.bezierCurveTo(-1.1 * k, 0.0 * k, -0.6 * k, 0.5 * k, 0, 0.9 * k);
  return s;
}
function pieceHeight(shape, size) {
  /* box は立方体（縦横高さが等しい）、その他は薄い板状 */
  return shape === 'box' ? size : size * 0.6;
}
function createShapeGeometry(shape, size, fs = 1) {
  const h = pieceHeight(shape, size);
  const s = size * fs;
  let geo;
  switch (shape) {
    case 'box': geo = new THREE.BoxGeometry(s, s, s); break;
    case 'circle': geo = new THREE.CylinderGeometry(s, s, h, 36); break;
    case 'ellipse': { geo = new THREE.CylinderGeometry(s, s, h, 36); geo.scale(1.5, 1, 0.7); break; }
    case 'tri': geo = extrudeShape(triangleShape(s), h); break;
    case 'star': geo = extrudeShape(starShape(s), h); break;
    case 'heart': geo = extrudeShape(heartShape(s), h); break;
    default: geo = new THREE.BoxGeometry(s, s, s);
  }
  return geo;
}

const pieceCache = new Map();
function getPieceGeometry(shape, sizeId, tableId) {
  const key = `${tableId}|${shape}|${sizeId}`;
  if (pieceCache.has(key)) return pieceCache.get(key);
  const g = createShapeGeometry(shape, sizeIn(tableId, sizeId).size, 1.0);
  pieceCache.set(key, g);
  return g;
}

const evaluator = new Evaluator();
const blockCache = new Map();
function getBlock(shape, sizeId, blockType, tableId) {
  const key = `${tableId}|${shape}|${sizeId}|${blockType}`;
  if (blockCache.has(key)) return blockCache.get(key);
  const size = sizeIn(tableId, sizeId).size;
  const h = pieceHeight(shape, size);
  const holeGeo = createShapeGeometry(shape, size, 1.12);
  holeGeo.computeBoundingBox();
  const bb = holeGeo.boundingBox;
  const w = bb.max.x - bb.min.x;
  const d = bb.max.z - bb.min.z;
  const geoH = bb.max.y - bb.min.y;
  let BW, BD;
  if (blockType === 'square') { BW = w + 1.5; BD = d + 1.5; }
  else { BW = w + 2.2; BD = d + 0.9; }
  /* ポケットは一律に深く：ピースがリムの下に沈み、貫通孔のように見える。
     回答ピースの size に比例させると小さい回答（特に「おなじ形」のサイズ問題）で浅くなるため、
     recess は固定値にして全問題で同じ深さにする */
  const floorY = 0.47;
  const recess = 0.50;
  const H = floorY + h + recess;
  const holeHeight = H - floorY + 0.02;
  holeGeo.scale(1, holeHeight / geoH, 1);
  holeGeo.translate(0, floorY + holeHeight / 2, 0);
  const brush1 = new Brush(new THREE.BoxGeometry(BW, H, BD));
  brush1.updateMatrixWorld();
  const brush2 = new Brush(holeGeo);
  brush2.updateMatrixWorld();
  const result = evaluator.evaluate(brush1, brush2, SUBTRACTION);
  const geometry = result.geometry;
  const data = { geometry, dims: { BW, BD, H, h, floorY, size } };
  blockCache.set(key, data);
  return data;
}

function getBlockFront(shape, sizeId, blockType, tableId) {
  const key = `F|${tableId}|${shape}|${sizeId}|${blockType}`;
  if (blockCache.has(key)) return blockCache.get(key);
  const size = sizeIn(tableId, sizeId).size;
  const h = pieceHeight(shape, size);
  const holeGeo = createShapeGeometry(shape, size, 1.12);
  holeGeo.computeBoundingBox();
  const bb = holeGeo.boundingBox;
  const w = bb.max.x - bb.min.x;
  const d = bb.max.z - bb.min.z;
  const geoH = bb.max.y - bb.min.y;
  let BW, BD;
  if (blockType === 'square') { BW = w + 1.5; BD = d + 1.5; }
  else { BW = w + 2.2; BD = d + 0.9; }
  const BZ = h + 0.45;
  /* 凹み（ポケット）：断面を正面（+Z）に向け、奥行き h だけ切る（背面は残す） */
  const pocket = createShapeGeometry(shape, size, 1.12);
  pocket.rotateX(Math.PI / 2);
  pocket.translate(0, 0, BZ / 2 - geoH / 2 + 0.03);
  const brush1 = new Brush(new THREE.BoxGeometry(BW, BD, BZ));
  brush1.updateMatrixWorld();
  const brush2 = new Brush(pocket);
  brush2.updateMatrixWorld();
  const result = evaluator.evaluate(brush1, brush2, SUBTRACTION);
  const geometry = result.geometry;
  const data = { geometry, dims: { BW, BD, BZ, h, w, d } };
  blockCache.set(key, data);
  return data;
}

/* ============================== シーン初期化 ============================== */
const container = $('#stage');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 0.75));
const keyLight = new THREE.DirectionalLight(0xffffff, 1.7);
keyLight.position.set(5, 11, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.left = -12; keyLight.shadow.camera.right = 12;
keyLight.shadow.camera.top = 12; keyLight.shadow.camera.bottom = -12;
keyLight.shadow.camera.near = 1; keyLight.shadow.camera.far = 40;
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xbfd9ff, 0.4);
fillLight.position.set(-5, 4, -6);
scene.add(fillLight);

/* テーブル */
const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 8.5, 0.35, 64), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }));
tableTop.position.y = -0.175;
tableTop.receiveShadow = true;
scene.add(tableTop);
const tableSkirt = new THREE.Mesh(new THREE.CylinderGeometry(8.4, 8.8, 1.1, 64), new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.9 }));
tableSkirt.position.y = -0.9;
scene.add(tableSkirt);

const blockGroup = new THREE.Group();
const piecesGroup = new THREE.Group();
scene.add(blockGroup);
scene.add(piecesGroup);

/* マテリアル（テーマで差し替え） */
let blockMat = new THREE.MeshStandardMaterial({ color: 0xf2c06b, roughness: 0.4, metalness: 0.05 });
let pieceMats = [];
function applyTheme(theme) {
  scene.background = new THREE.Color(theme.bg);
  document.body.style.background = theme.bg;
  tableTop.material.color.set(theme.table);
  tableSkirt.material.color.set(theme.tableDark);
  blockMat.color.set(theme.block);
  pieceMats = theme.pieces.map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.35, metalness: 0.05 }));
}
applyTheme(THEMES[0]);

/* ============================== カメラ（簡易オービット） ============================== */
const orbit = { theta: 0.6, phi: 1.02, radius: 13, target: new THREE.Vector3(0, 1.1, 0) };
function updateCamera() {
  const s = Math.sin(orbit.phi), c = Math.cos(orbit.phi);
  camera.position.set(
    orbit.target.x + orbit.radius * s * Math.sin(orbit.theta),
    orbit.target.y + orbit.radius * c,
    orbit.target.z + orbit.radius * s * Math.cos(orbit.theta),
  );
  camera.lookAt(orbit.target);
}

/* ============================== 状態 ============================== */
const state = {
  questionCount: 10,
  difficulty: DIFFS[1],
  choices: 3,
  theme: THEMES[0],
  mode: 'up',
  questions: [],
  qi: 0,
  score: 0,
  totalWrong: 0,
  currentFirst: true,
  busy: false,
};
let currentBlock = { H: 1, BW: 2, BD: 2 };
let layout = { mode: 'up' };

/* ============================== 問題生成 ============================== */
function genQuestions(n, diff, m) {
  const sizes = SIZE_TABLES[diff.sizes];
  const qs = [];
  for (let i = 0; i < n; i++) {
    const answerShape = rand(SHAPE_TYPES);
    const aIdx = Math.floor(Math.random() * sizes.length);
    const answerSize = sizes[aIdx].id;
    const sims = SIMILAR[answerShape];
    const otherPool = SHAPE_TYPES.filter(t => t !== answerShape);
    const usedShapes = new Set([answerShape]);
    const usedSizes = new Set([aIdx]);
    const decoys = [];
    let guard = 0;
    while (decoys.length < m - 1 && guard++ < 300) {
      let shape, si, rel;
      if (diff.id === 'easy') {
        const far = otherPool.filter(t => !sims.includes(t) && !usedShapes.has(t));
        shape = far.length ? rand(far) : rand(otherPool.filter(t => !usedShapes.has(t)));
        si = randFar(aIdx, sizes.length, 2);
        rel = 'wrongshape';
      } else if (diff.id === 'normal') {
        shape = rand(otherPool.filter(t => !usedShapes.has(t)));
        si = Math.floor(Math.random() * sizes.length);
        rel = 'wrongshape';
      } else if (diff.id === 'hard') {
        const near = sims.filter(t => !usedShapes.has(t));
        if (near.length) { shape = rand(near); rel = 'similarshape'; }
        else { shape = rand(otherPool.filter(t => !usedShapes.has(t))); rel = 'wrongshape'; }
        si = aIdx;
      } else if (diff.id === 'veryhard') {
        shape = answerShape;
        si = randExcept(aIdx, sizes.length);
        if (usedSizes.has(si)) continue;
        usedSizes.add(si);
        rel = sizes[si].size > sizes[aIdx].size * 1.12 ? 'toobig' : 'toosmall';
      } else { /* superhard */
        if (Math.random() < 0.5 && sims.length) {
          const near = sims.filter(t => !usedShapes.has(t));
          shape = near.length ? rand(near) : rand(sims);
          si = aIdx;
          rel = 'similarshape';
        } else {
          shape = answerShape;
          si = randExcept(aIdx, sizes.length);
          if (usedSizes.has(si)) continue;
          usedSizes.add(si);
          rel = sizes[si].size > sizes[aIdx].size * 1.12 ? 'toobig' : 'toosmall';
        }
      }
      if (shape !== answerShape) {
        if (usedShapes.has(shape)) continue;
        usedShapes.add(shape);
      }
      decoys.push({ shape, size: sizes[si].id, relation: rel, correct: false });
    }
    const pieces = decoys.concat([{ shape: answerShape, size: answerSize, relation: 'same', correct: true }]);
    shuffle(pieces);
    qs.push({ answer: { shape: answerShape, size: answerSize, sizeIndex: aIdx }, pieces, sizesId: diff.sizes });
  }
  return qs;
}

function slotPositions(m, radius) {
  const span = Math.min(1.2, (m - 1) * 0.5);
  const pos = [];
  for (let i = 0; i < m; i++) {
    const a = -span + (2 * span * i) / (m - 1);
    pos.push(new THREE.Vector3(Math.sin(a) * radius, 0, Math.cos(a) * radius));
  }
  return pos;
}

function frontSlotPositions(infos, baseZ) {
  const m = infos.length;
  const gaps = [];
  for (let i = 1; i < m; i++) gaps.push(infos[i - 1].fw / 2 + infos[i].fw / 2 + 0.5);
  const maxSpan = 2.1;
  let R = 2.2;
  const spans = () => gaps.map(g => 2 * Math.asin(Math.min(0.99, g / (2 * R))));
  let ss = spans();
  let total = ss.reduce((s, x) => s + x, 0);
  let guard = 0;
  while (total > maxSpan && guard++ < 20) {
    R *= 1.15;
    ss = spans();
    total = ss.reduce((s, x) => s + x, 0);
  }
  const center = total / 2;
  const pos = [];
  let a = 0;
  for (let i = 0; i < m; i++) {
    pos.push(new THREE.Vector3(Math.sin(a - center) * R, 0, baseZ + Math.cos(a - center) * R));
    if (i < m - 1) a += ss[i];
  }
  return pos;
}

/* ============================== 問題の構築 ============================== */
function clearQuestion() {
  for (const g of [blockGroup, piecesGroup]) {
    while (g.children.length) {
      const m = g.children[0];
      g.remove(m);
      if (m.geometry) m.geometry.dispose();
    }
  }
  setHovered(null);
}

function buildQuestion(q) {
  clearQuestion();
  const tableId = q.sizesId;
  const front = state.mode === 'front';
  const block = front
    ? getBlockFront(q.answer.shape, q.answer.size, Math.random() < 0.5 ? 'square' : 'rect', tableId)
    : getBlock(q.answer.shape, q.answer.size, Math.random() < 0.5 ? 'square' : 'rect', tableId);
  const D = block.dims;
  currentBlock = D;

  const blockMesh = new THREE.Mesh(block.geometry, blockMat);
  blockMesh.castShadow = true;
  blockMesh.receiveShadow = true;
  blockMesh.position.y = front ? D.BD / 2 : D.H / 2;
  blockGroup.add(blockMesh);

  const infos = q.pieces.map(p => {
    const geo = getPieceGeometry(p.shape, p.size, tableId);
    geo.computeBoundingBox();
    const bb = geo.boundingBox;
    return { p, fw: bb.max.x - bb.min.x, fd: bb.max.z - bb.min.z, h: bb.max.y - bb.min.y };
  });

  layout = front
    ? { mode: 'front', pocketY: D.BD / 2, mouthZ: D.BZ / 2, pocketZ: D.BZ / 2 - D.h / 2 - 0.02, floorY: D.BD / 2 - D.d / 2 }
    : { mode: 'up' };

  const slots = front
    ? frontSlotPositions(infos, D.BZ / 2 + 0.8)
    : slotPositions(q.pieces.length, Math.hypot(D.BW, D.BD) / 2 + 1.45);

  q.pieces.forEach((p, i) => {
    const info = infos[i];
    const mesh = new THREE.Mesh(getPieceGeometry(p.shape, p.size, tableId), pieceMats[i % pieceMats.length]);
    mesh.castShadow = true;
    const slot = slots[i];
    mesh.userData = { piece: p, slot: { x: slot.x, z: slot.z }, pieceHeight: info.h, fw: info.fw, fd: info.fd, correct: p.correct, relation: p.relation };
    /* 選択肢は立てた状態（断面が上向き）でスロットに並ぶ */
    mesh.position.set(slot.x, info.h / 2, slot.z);
    mesh.userData.slotY = info.h / 2;
    piecesGroup.add(mesh);
  });

  state.busy = false;

  orbit.radius = clamp(Math.max(D.BW, D.BD) * 2.6, 9.5, 20);
  orbit.theta = 0.6;
  orbit.phi = 1.02;
  orbit.target.y = front ? D.BD * 0.45 : D.H / 2;
  state.currentFirst = true;
  updateHUD();
}

/* ============================== HUD ============================== */
function updateHUD() {
  $('#hud-q').textContent = `もんだい ${state.qi + 1} / ${state.questionCount}`;
  $('#hud-score').textContent = `せいかい ${state.score}`;
}
let msgTimer = null;
function showMessage(text, kind) {
  const el = $('#message');
  el.textContent = text;
  el.className = 'show ' + kind;
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => { el.className = ''; }, 1700);
}

/* ============================== エフェクト ============================== */
const particles = [];
function spawnBurst(pos) {
  const group = new THREE.Group();
  const n = 26;
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.05 + Math.random() * 0.09),
      new THREE.MeshBasicMaterial({ color: rand(state.theme.pieces) }),
    );
    m.position.copy(pos);
    m.userData.v = new THREE.Vector3((Math.random() - 0.5) * 2.2, Math.random() * 2.2 + 1.2, (Math.random() - 0.5) * 2.2);
    group.add(m);
  }
  scene.add(group);
  particles.push({ group, life: 1.1 });
}
function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life -= dt;
    for (const m of p.group.children) {
      m.position.addScaledVector(m.userData.v, dt);
      m.userData.v.y -= 3.2 * dt;
      const s = clamp(p.life, 0, 1) * 0.4 + 0.05;
      m.scale.setScalar(s);
    }
    if (p.life <= 0) {
      scene.remove(p.group);
      p.group.children.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      particles.splice(i, 1);
    }
  }
}

/* ============================== アニメーション ============================== */
function animateValue(dur, fn, ease = easeInOut) {
  return new Promise(res => {
    const t0 = performance.now();
    function step() {
      const t = Math.min(1, (performance.now() - t0) / dur);
      fn(ease(t));
      if (t < 1) requestAnimationFrame(step);
      else res();
    }
    requestAnimationFrame(step);
  });
}
function tweenPos(obj, from, to, dur, ease) {
  return animateValue(dur, t => obj.position.lerpVectors(from, to, t), ease);
}

async function wobble(mesh, target) {
  sfx.thud();
  await animateValue(1000, t => {
    const w = Math.sin(t * Math.PI * 6);
    mesh.rotation.z = w * 0.14 * Math.sin(t * Math.PI);
    mesh.position.y = target.y + Math.abs(w) * 0.07;
  });
  mesh.rotation.z = 0;
  mesh.position.y = target.y;
  sfx.wrong();
  state.currentFirst = false;
  state.totalWrong++;
}
async function finishCorrect(mesh, target, info, D, L) {
  mesh.position.copy(target);
  sfx.clink();
  sfx.correct();
  const front = L.mode === 'front';
  spawnBurst(new THREE.Vector3(0, front ? L.pocketY : target.y, front ? L.pocketZ : 0));
  await animateValue(500, t => { const s = 1 + 0.045 * Math.sin(t * Math.PI); blockGroup.scale.setScalar(s); });
  blockGroup.scale.setScalar(1);
  showMessage('せいかい！', 'correct');
  if (state.currentFirst) state.score++;
  await wait(1600);
  nextQuestion();
}

async function playUp(mesh, info, start, slotPos, D, L) {
  const liftY = D.H + info.pieceHeight + 1.15;
  sfx.whoosh();
  const liftPos = new THREE.Vector3(start.x, liftY, start.z);
  await tweenPos(mesh, start, liftPos, 600, easeOut);
  const above = new THREE.Vector3(0, liftY, 0);
  await tweenPos(mesh, liftPos, above, 800, easeInOut);

  if (info.correct) {
    /* 正解：あなぐちのすぐ下までおりて浅くはまる（奥までは入れない） */
    const target = new THREE.Vector3(0, D.H - 0.02 - info.pieceHeight / 2, 0);
    await tweenPos(mesh, above, target, 1700, easeIn);
    await finishCorrect(mesh, target, info, D, L);
  } else {
    /* ちがう：あなぐちのふちでつっかえて、ポケットには入らずもどる */
    const target = new THREE.Vector3(0, D.H + 0.12 + info.pieceHeight / 2, 0);
    await tweenPos(mesh, above, target, 1400, easeIn);
    await wobble(mesh, target);
    showMessage('このブロックではないよ', 'wrong');
    await wait(1500);
    const up = new THREE.Vector3(0, liftY, 0);
    await tweenPos(mesh, target, up, 450, easeInOut);
    await tweenPos(mesh, up, slotPos, 650, easeInOut);
    state.busy = false;
  }
}

async function standBack(mesh, slotPos) {
  /* 横になった状態から、立てた状態に戻してスロットへ */
  await animateValue(380, t => { mesh.rotation.x = (Math.PI / 2) * (1 - easeInOut(t)); });
  mesh.rotation.x = 0;
  await tweenPos(mesh, mesh.position, slotPos, 550, easeInOut);
}

async function playFront(mesh, info, start, slotPos, D, L) {
  /* スロット（立てた状態）からあなぐちの前まで運び、90度回して横からはめこむ */
  const alignUp = new THREE.Vector3(0, L.pocketY, L.mouthZ + 0.9);
  sfx.whoosh();
  await tweenPos(mesh, start, alignUp, 550, easeInOut);

  /* 断面を上向き → 横（あなの向き）に90度回転 */
  await animateValue(380, t => { mesh.rotation.x = (Math.PI / 2) * easeInOut(t); });
  mesh.rotation.x = Math.PI / 2;

  if (info.correct) {
    const target = new THREE.Vector3(0, L.pocketY, L.pocketZ);
    await tweenPos(mesh, alignUp, target, 1400, easeIn);
    await finishCorrect(mesh, target, info, D, L);
  } else {
    /* ちがう：あなぐちのまえでつっかえて、ポケットには入らずもどる */
    const target = new THREE.Vector3(0, L.pocketY, L.mouthZ + info.pieceHeight / 2 + 0.05);
    await tweenPos(mesh, alignUp, target, 1200, easeIn);
    await wobble(mesh, target);
    showMessage('このブロックではないよ', 'wrong');
    await wait(1500);
    await tweenPos(mesh, target, alignUp, 300, easeInOut);
    await standBack(mesh, slotPos);
    state.busy = false;
  }
}

async function playAnswer(mesh) {
  if (state.busy) return;
  state.busy = true;
  setHovered(null);
  const info = mesh.userData;
  const D = currentBlock;
  const L = layout;
  const start = mesh.position.clone();
  const slotPos = new THREE.Vector3(info.slot.x, info.slotY, info.slot.z);
  if (L.mode === 'front') await playFront(mesh, info, start, slotPos, D, L);
  else await playUp(mesh, info, start, slotPos, D, L);
}

function nextQuestion() {
  state.qi++;
  if (state.qi >= state.questionCount) {
    showEnd();
    return;
  }
  buildQuestion(state.questions[state.qi]);
}

/* ============================== 結果 ============================== */
function showEnd() {
  const total = state.questionCount;
  const correct = state.score;
  const ratio = total ? correct / total : 0;
  const stars = Math.round(ratio * 3);
  let starsHtml = '';
  for (let i = 0; i < 3; i++) starsHtml += i < stars ? '★' : '☆';
  $('#end-stars').textContent = starsHtml;
  $('#end-text').textContent = `${correct} もん せいかい！ ／ ${total} もん`;
  let msg;
  if (correct === total) msg = 'パーフェクト！ ほんとうにすごい！';
  else if (ratio >= 0.8) msg = 'じょうず！ さいこうだよ！';
  else if (ratio >= 0.5) msg = 'いいちょうし！ もっとやってみよう！';
  else msg = 'まえむきにがんばれ！ つぎはぜったいせいかい！';
  msg += `（まちがえた かいすう：${state.totalWrong}）`;
  $('#end-msg').textContent = msg;
  showScreen('end');
  sfx.fanfare();
}

/* ============================== 画面表示 ============================== */
function showScreen(name) {
  $('#start-screen').classList.toggle('hidden', name !== 'start');
  $('#game-hud').classList.toggle('hidden', name !== 'game');
  $('#hud-hint').classList.toggle('hidden', name !== 'game');
  $('#end-screen').classList.toggle('hidden', name !== 'end');
}

/* ============================== 操作（クリック・ドラッグ・ピンチ） ============================== */
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let hovered = null;
function setHovered(mesh) {
  if (hovered === mesh) return;
  if (hovered) hovered.material.emissiveIntensity = 0;
  hovered = mesh;
  if (hovered) {
    hovered.material.emissive = new THREE.Color(0xffffff);
    hovered.material.emissiveIntensity = 0.22;
    renderer.domElement.style.cursor = 'pointer';
  } else {
    renderer.domElement.style.cursor = 'default';
  }
}
function hitPiece(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(piecesGroup.children, false);
  return hits.length ? hits[0].object : null;
}

const drag = { active: false, moved: false, x: 0, y: 0, candidate: null };
const pointers = new Map();
let pinchDist = 0;

renderer.domElement.addEventListener('pointerdown', e => {
  sfx.ensure();
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
    drag.moved = true;
    return;
  }
  drag.active = true;
  drag.moved = false;
  drag.x = e.clientX;
  drag.y = e.clientY;
  drag.candidate = state.busy ? null : hitPiece(e);
  renderer.domElement.setPointerCapture(e.pointerId);
});
window.addEventListener('pointermove', e => {
  if (pointers.has(e.pointerId)) {
    pointers.get(e.pointerId).x = e.clientX;
    pointers.get(e.pointerId).y = e.clientY;
  }
  if (pointers.size >= 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchDist > 0) orbit.radius = clamp(orbit.radius * (pinchDist / d), 4.5, 24);
    pinchDist = d;
    drag.moved = true;
    return;
  }
  if (drag.active) {
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) > 5) drag.moved = true;
    if (drag.moved) {
      orbit.theta -= dx * 0.008;
      orbit.phi = clamp(orbit.phi - dy * 0.008, 0.25, 1.5);
      drag.x = e.clientX;
      drag.y = e.clientY;
    }
  } else if (!state.busy) {
    const h = hitPiece(e);
    if (h && h.userData && h.userData.piece) setHovered(h);
    else setHovered(null);
  }
});
function endPointer(e) {
  pointers.delete(e.pointerId);
  if (drag.active && !drag.moved && drag.candidate) {
    sfx.click();
    playAnswer(drag.candidate);
  }
  drag.active = false;
  drag.candidate = null;
  pinchDist = 0;
}
window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);
renderer.domElement.addEventListener('wheel', e => {
  e.preventDefault();
  orbit.radius = clamp(orbit.radius * Math.exp(e.deltaY * 0.001), 4.5, 24);
}, { passive: false });

/* ============================== スタート画面のUI ============================== */
const selVals = { count: 10, diff: 'normal', choices: 3, theme: 0, mode: 'up' };

document.querySelectorAll('.opts').forEach(group => {
  const role = group.dataset.role;
  group.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    group.querySelectorAll('button').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    selVals[role] = btn.dataset.v;
    sfx.click();
  });
});

const swatchWrap = $('[data-role="theme"]');
THEMES.forEach((th, i) => {
  const w = document.createElement('div');
  w.className = 'swatch' + (i === 0 ? ' sel' : '');
  w.dataset.v = i;
  w.style.background = th.pieces[0];
  w.innerHTML = `<div class="sw-name">${th.name}</div>`;
  w.addEventListener('click', () => {
    swatchWrap.querySelectorAll('.swatch').forEach(x => x.classList.remove('sel'));
    w.classList.add('sel');
    selVals.theme = i;
    document.body.style.background = th.bg;
    sfx.click();
  });
  swatchWrap.appendChild(w);
});

function startGame() {
  sfx.ensure();
  sfx.pop();
  state.questionCount = parseInt(selVals.count, 10);
  state.difficulty = DIFFS.find(d => d.id === selVals.diff);
  state.choices = parseInt(selVals.choices, 10);
  state.theme = THEMES[selVals.theme];
  state.mode = selVals.mode;
  applyTheme(state.theme);
  state.questions = genQuestions(state.questionCount, state.difficulty, state.choices);
  state.qi = 0;
  state.score = 0;
  state.totalWrong = 0;
  showScreen('game');
  buildQuestion(state.questions[0]);
  warmTable(state.difficulty.sizes);
}

$('#btn-start').addEventListener('click', startGame);

$('#btn-sound').addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  const b = $('#btn-sound');
  b.textContent = sfx.enabled ? 'おと' : 'おとOFF';
  b.classList.toggle('muted', !sfx.enabled);
  if (sfx.enabled) sfx.click();
});
$('#btn-home').addEventListener('click', () => {
  sfx.click();
  state.busy = true;
  showScreen('start');
  state.busy = false;
});
$('#btn-retry').addEventListener('click', () => {
  sfx.ensure();
  sfx.pop();
  state.questions = genQuestions(state.questionCount, state.difficulty, state.choices);
  state.qi = 0;
  state.score = 0;
  state.totalWrong = 0;
  showScreen('game');
  buildQuestion(state.questions[0]);
});
$('#btn-config').addEventListener('click', () => {
  sfx.click();
  showScreen('start');
});

/* ============================== サイズ・ループ ============================== */
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();
updateCamera();

let lastTime = performance.now();
function loop() {
  requestAnimationFrame(loop);
  const now = performance.now();
  const dt = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;
  updateCamera();
  updateParticles(dt);
  renderer.render(scene, camera);
}
loop();

/* ============================== プリコンピュート ============================== */
const tablesReady = new Map();
function warmTable(tableId) {
  if (tablesReady.get(tableId)) return Promise.resolve();
  return new Promise(res => {
    const sizes = SIZE_TABLES[tableId];
    const ops = [];
    for (const shape of SHAPE_TYPES) {
      for (const sz of sizes) {
        for (const bt of ['square', 'rect']) ops.push([shape, sz.id, bt]);
      }
    }
    let i = 0;
    (function next() {
      if (i >= ops.length) { tablesReady.set(tableId, true); res(); return; }
      getBlock(ops[i][0], ops[i][1], ops[i][2], tableId);
      i++;
      setTimeout(next, 0);
    })();
  });
}
warmTable('normal');
$('#loading').style.display = 'none';

window.addEventListener('error', e => {
  const el = $('#errlog');
  if (el) el.textContent += (e.message || 'error') + '\n';
});
window.addEventListener('unhandledrejection', e => {
  const el = $('#errlog');
  if (el) el.textContent += 'REJECT: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)) + '\n';
});

/* デバッグ／自動テスト用フック */
window.__game = { state, piecesGroup, blockGroup, playAnswer, buildQuestion, genQuestions, getBlock, getBlockFront, currentBlock: () => currentBlock, layout: () => layout, camera, orbit, renderer, selVals, DIFFS, MODES, SIZE_TABLES, tablesReady };
window.__game.selectSlot = i => {
  const m = piecesGroup.children[i];
  if (!m) return null;
  playAnswer(m);
  return m.userData.correct;
};
const _urlParams = new URLSearchParams(location.search);
if (_urlParams.has('autostart')) {
  setTimeout(() => $('#btn-start').click(), 400);
}
