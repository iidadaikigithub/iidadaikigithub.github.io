import * as THREE from '../lib/three.module.js';

/* ============================================================
   3D 空間認知クイズ  (main.js)
   かけた場所とおなじ「ならび」のつみきをえらぶ
   ============================================================ */

/* ---------------- DOM ---------------- */
const $ = (id) => document.getElementById(id);
const stage = $('stage');
const loading = $('loading');
const startScreen = $('start-screen');
const gameHud = $('game-hud');
const hudQ = $('hud-q');
const hudScore = $('hud-score');
const hudHoles = $('hud-holes');
const hintEl = $('hud-hint');
const messageEl = $('message');
const flashEl = $('flash');
const endScreen = $('end-screen');
const endStars = $('end-stars');
const endText = $('end-text');
const endMsg = $('end-msg');
const lvlDesc = $('lvl-desc');
const choicesEl = $('choices');
const btnTop = document.createElement('button');
btnTop.id = 'btn-top';
btnTop.type = 'button';
btnTop.title = 'まうえから見る';
btnTop.innerHTML = '<span class="arrow">\u2191</span><span>まうえから<br>見る</span>';

/* ---------------- 設定 ---------------- */
const SETTINGS = { count: 10, diff: 'normal', choices: 3, shape: '3x3' };
const SHAPES = {
  '2x2': { w: 2, d: 2 },
  '2x3': { w: 2, d: 3 },
  '3x3': { w: 3, d: 3 },
  '3x4': { w: 3, d: 4 },
  '4x4': { w: 4, d: 4 },
};
const DIFFS = {
  easy:    { holes: 1, name: 'やさしい' },
  normal:  { holes: 2, name: 'ふつう' },
  hard:    { holes: 3, name: 'むずかしい' },
  veryhard:{ holes: 4, name: 'ちょうむずかしい' },
  super:   { holes: 5, name: 'ぜつむ' },
};
const BLOCK_COLOR = '#ff8c3b';
const NUM = ['①', '②', '③', '④'];
// つみきの基準高さ。地面(0)の上に足場(高さ0.18)を置き、その上にのせる
const CUBE_Y = 0.68;
const PLATFORM_Y = 0.09;
// 選択肢のつみきが、問題の「うえ」にうかぶ高さと、そこから垂直におろす量
const ABOVE_H = 1.9;
const DROP_NEAR = 0.7; // はずれは、はまる手前でとまる

function updateLvlDesc() {
  const shp = SHAPES[SETTINGS.shape];
  const maxHoles = shp.w * shp.d - 1;
  lvlDesc.textContent = 'かけた数：' + Math.min(DIFFS[SETTINGS.diff].holes, maxHoles);
}

/* ---------------- 音 ---------------- */
let audioCtx = null;
let soundOn = true;
function ensureAudio() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}
function tone(freq, dur, type, vol, delay) {
  if (!soundOn || !audioCtx) return;
  const t0 = audioCtx.currentTime + (delay || 0);
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type || 'triangle';
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.25, t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(audioCtx.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.05);
}
function sndClick() { tone(660, 0.06, 'sine', 0.12); }
function sndCorrect() {
  tone(523.25, 0.12, 'triangle', 0.28);
  tone(659.25, 0.12, 'triangle', 0.28, 0.09);
  tone(783.99, 0.18, 'triangle', 0.28, 0.18);
  tone(1046.5, 0.32, 'triangle', 0.30, 0.28);
}
function sndWrong() {
  tone(200, 0.16, 'sawtooth', 0.20);
  tone(140, 0.28, 'sawtooth', 0.18, 0.12);
}
function sndClear() {
  tone(523.25, 0.14, 'triangle', 0.26);
  tone(659.25, 0.14, 'triangle', 0.26, 0.12);
  tone(783.99, 0.14, 'triangle', 0.26, 0.24);
  tone(1046.5, 0.14, 'triangle', 0.26, 0.36);
  tone(1318.5, 0.40, 'triangle', 0.30, 0.48);
}

/* ---------------- レンダラー / シーン ---------------- */
let renderer, scene, camera;
let blockGroup;
let camCenter, camDist;
let canvas;

function hex(c) { return '#' + c.getHexString(); }
function rgb(s) { return new THREE.Color(s); }

function makeCubeMaterial(hexStr) {
  const m = new THREE.MeshStandardMaterial({
    color: rgb(hexStr), roughness: 0.32, metalness: 0.08,
  });
  m.userData.hex = hexStr;
  return m;
}

let cubeGeo = null, edgesGeo = null;
function initGeos() {
  if (cubeGeo) return;
  cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  edgesGeo = new THREE.EdgesGeometry(cubeGeo);
}
const edgeMat = new THREE.LineBasicMaterial({ color: 0x20304a, transparent: true, opacity: 0.55 });
const matCache = {};

function buildScene() {
  initGeos();
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  stage.appendChild(renderer.domElement);
  canvas = renderer.domElement;

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#dbe6f5');

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x7c93b5, 1.0);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 1.35);
  dir.position.set(6, 11, 7);
  dir.castShadow = true;
  dir.shadow.mapSize.set(1024, 1024);
  dir.shadow.camera.left = -10; dir.shadow.camera.right = 10;
  dir.shadow.camera.top = 10; dir.shadow.camera.bottom = -10;
  dir.shadow.camera.near = 1; dir.shadow.camera.far = 40;
  scene.add(dir);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.MeshStandardMaterial({ color: '#d4e0f2', roughness: 1, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  blockGroup = new THREE.Group();
  scene.add(blockGroup);
}

/* ---------------- 視点 ---------------- */
// カメラを土台のまわりでまわす（土台自体は動かさず、めり込みを防ぐ）
let yaw = 0.571, pitch = 0.472;
let shakeT = 0;
camCenter = new THREE.Vector3(0, 0.6, 0);

function positionCamera() {
  const cd = new THREE.Vector3(
    Math.cos(pitch) * Math.sin(yaw),
    Math.sin(pitch),
    Math.cos(pitch) * Math.cos(yaw)
  );
  camera.position.copy(camCenter).addScaledVector(cd, camDist);
  if (shakeT > 0) {
    const a = shakeT * 0.06;
    camera.position.x += (Math.random() - 0.5) * a;
    camera.position.y += (Math.random() - 0.5) * a;
    camera.position.z += (Math.random() - 0.5) * a;
  }
  camera.lookAt(camCenter);
}
function startShake() { shakeT = 1.0; }

function attachInput() {
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camDist *= Math.pow(1.0014, e.deltaY);
    camDist = THREE.MathUtils.clamp(camDist, 3.5, 45);
  }, { passive: false });

  const pointers = new Map();
  let downInfo = null;

  canvas.addEventListener('pointerdown', (e) => {
    ensureAudio();
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      downInfo = { x: e.clientX, y: e.clientY, t: performance.now(), pid: e.pointerId, moved: false, px: e.clientX, py: e.clientY, touchD0: 0 };
      canvas.classList.add('grabbing');
    }
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
  });
  window.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 2) {
      const pts = [...pointers.values()];
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (downInfo && downInfo.touchD0 > 0) {
        camDist *= downInfo.touchD0 / d;
        camDist = THREE.MathUtils.clamp(camDist, 3.5, 45);
      }
      downInfo.touchD0 = d;
      downInfo.moved = true;
      return;
    }

    if (downInfo && downInfo.pid === e.pointerId) {
      const dx = e.clientX - downInfo.px;
      const dy = e.clientY - downInfo.py;
      if (Math.hypot(dx, dy) > 7) downInfo.moved = true;
      if (downInfo.moved) {
        yaw += dx * 0.009;
        pitch = THREE.MathUtils.clamp(pitch - dy * 0.009, 0.15, 1.45);
        downInfo.px = e.clientX; downInfo.py = e.clientY;
      }
    }
  });
  window.addEventListener('pointerup', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (pointers.size === 0) canvas.classList.remove('grabbing');
    downInfo = null;
  });
  window.addEventListener('pointercancel', (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) canvas.classList.remove('grabbing');
  });
}

/* ---------------- パーティクル ---------------- */
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const particles = [];
function burst(pos, count, colors, opts) {
  const o = opts || {};
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(cubeGeo, new THREE.MeshBasicMaterial({
      color: rgb(colors[Math.floor(Math.random() * colors.length)]),
      transparent: true, opacity: 1,
    }));
    const s = (o.size || 0.12) * (0.5 + Math.random());
    m.scale.setScalar(s);
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    const sp = (o.speed || 3.5) * (0.5 + Math.random());
    const v = new THREE.Vector3(
      Math.sin(ph) * Math.cos(th) * sp,
      Math.abs(Math.cos(ph)) * sp + (o.up || 2.2),
      Math.sin(ph) * Math.sin(th) * sp
    );
    m.position.copy(pos);
    scene.add(m);
    particles.push({ m, v, life: (o.life || 0.9) * (0.7 + Math.random() * 0.6), grav: o.grav === undefined ? 6 : o.grav, base: s });
  }
}

/* ---------------- メッセージ / フラッシュ ---------------- */
let msgTimer = null;
function showMsg(text, kind) {
  messageEl.textContent = text;
  messageEl.className = kind + ' show';
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => messageEl.classList.remove('show'), 950);
}
function flash(kind) {
  flashEl.className = kind;
  flashEl.style.opacity = 1;
  setTimeout(() => { flashEl.style.opacity = 0; }, 380);
}

/* ---------------- ゲーム状態 ---------------- */
const game = {
  running: false, qIdx: 0, total: 10, correct: 0, mistakes: 0,
  W: 3, D: 3, cfg: DIFFS.normal,
  holes: [], holesKey: '', remaining: [],
  choiceKeys: [],
  busy: false,
  grid: {}, ghosts: {},
};

function layoutKey(arr) { return arr.slice().sort().join('|'); }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function makeBlock() {
  clearBlock();
  const { W, D, cfg } = game;
  game.grid = {};
  game.ghosts = {};
  game.holes = [];
  game.remaining = [];

  const cx = (W - 1) / 2, cz = (D - 1) / 2;

  const cells = [];
  for (let i = 0; i < W; i++) for (let j = 0; j < D; j++) cells.push([i, j]);
  shuffle(cells);
  const K = Math.min(cfg.holes, cells.length - 1);
  const holeSet = new Set(cells.slice(0, K).map((c) => c.join(',')));
  game.holes = cells.filter((c) => holeSet.has(c.join(','))).map(([i, j]) => ({ i, j }));
  game.holesKey = layoutKey(game.holes.map((h) => h.i + ',' + h.j));
  game.remaining = [...game.holes];

  for (let i = 0; i < W; i++) {
    for (let j = 0; j < D; j++) {
      const key = i + ',' + j;
      if (holeSet.has(key)) {
        game.ghosts[key] = makeGhost(i - cx, j - cz);
      } else {
        game.grid[key] = makeCube(i - cx, j - cz, BLOCK_COLOR);
      }
    }
  }

  // 外枠の強調（二重のワイヤーフレーム）
  const frame1 = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W + 0.22, 1.22, D + 0.22)), new THREE.LineBasicMaterial({ color: 0x1d4ed8 }));
  frame1.position.y = CUBE_Y;
  blockGroup.add(frame1);
  const frame2 = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W + 0.34, 1.34, D + 0.34)), new THREE.LineBasicMaterial({ color: 0x7fb0ff, transparent: true, opacity: 0.9 }));
  frame2.position.y = CUBE_Y;
  blockGroup.add(frame2);

  // 足場のすべりだい
  const plat = new THREE.Mesh(
    new THREE.BoxGeometry(W + 1.6, 0.18, D + 1.6),
    new THREE.MeshStandardMaterial({ color: '#c4d4ea', roughness: 0.9 })
  );
  plat.position.y = PLATFORM_Y;
  plat.receiveShadow = true;
  blockGroup.add(plat);

  // 向きのラベル（まんなかより前／後ろに、うかして目立たせる＝回転しない）
  const labelFront = makeLabelPlane('前');
  labelFront.position.set(0, 0.9, (D - 1) / 2 + 1.35);
  blockGroup.add(labelFront);
  const labelBack = makeLabelPlane('後ろ');
  labelBack.position.set(0, 0.9, -(D - 1) / 2 - 1.35);
  blockGroup.add(labelBack);
}

function clearBlock() {
  while (blockGroup.children.length) blockGroup.remove(blockGroup.children[0]);
}

function makeCube(px, pz, col) {
  const mat = matCache[col] || (matCache[col] = makeCubeMaterial(col));
  const mesh = new THREE.Mesh(cubeGeo, mat);
  mesh.position.set(px, CUBE_Y, pz);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  blockGroup.add(mesh);
  const edges = new THREE.LineSegments(edgesGeo, edgeMat);
  edges.position.copy(mesh.position);
  blockGroup.add(edges);
  return { mesh, edges, color: col };
}

function makeGhost(px, pz) {
  const mesh = new THREE.Mesh(cubeGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16, depthWrite: false }));
  mesh.position.set(px, CUBE_Y, pz);
  blockGroup.add(mesh);
  const edges = new THREE.LineSegments(edgesGeo, new THREE.LineBasicMaterial({ color: 0x2a5fba }));
  edges.position.copy(mesh.position);
  blockGroup.add(edges);
  return { mesh, edges };
}

// 向きのラベル（「前」「後ろ」）を作る。固定（回転しない）で、うえにうかぶ
function makeLabelPlane(text) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 256;
  const ctx = cv.getContext('2d');
  ctx.font = 'bold 150px "Yu Gothic UI","Hiragino Kaku Gothic ProN","Meiryo",sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round'; ctx.lineWidth = 26;
  ctx.strokeStyle = 'rgba(25,45,80,0.95)';
  ctx.strokeText(text, 256, 128);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(text, 256, 128);
  const tex = new THREE.CanvasTexture(cv);
  tex.minFilter = THREE.LinearFilter;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.2),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide })
  );
  mesh.rotation.x = -Math.PI / 2; // 地面と平行に横たえる（うえ向き＝文字がさかさまにならない）
  mesh.userData.isLabel = text;
  return mesh;
}

/* ---------------- 選択肢（ミニグリッドのボタン） ---------------- */
function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function drawBlockCell(ctx, x, y, s) {
  const g = ctx.createLinearGradient(x, y, x, y + s);
  g.addColorStop(0, '#ffb35c');
  g.addColorStop(0.5, '#ff8c3b');
  g.addColorStop(1, '#e06917');
  roundRectPath(ctx, x, y, s, s, s * 0.22);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.strokeStyle = 'rgba(120,60,0,0.55)';
  ctx.lineWidth = Math.max(1, s * 0.05);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  roundRectPath(ctx, x + s * 0.12, y + s * 0.12, s * 0.76, s * 0.3, s * 0.14);
  ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,0.14)';
  roundRectPath(ctx, x + s * 0.1, y + s * 0.78, s * 0.8, s * 0.14, s * 0.1);
  ctx.fill();
}
function drawEmptyCell(ctx, x, y, s) {
  ctx.fillStyle = 'rgba(233,239,248,0.9)';
  roundRectPath(ctx, x, y, s, s, s * 0.22);
  ctx.fill();
  ctx.strokeStyle = 'rgba(165,182,207,0.95)';
  ctx.lineWidth = Math.max(1, s * 0.05);
  ctx.stroke();
}
function drawMiniIcon(cv, set, W, D) {
  const ctx = cv.getContext('2d');
  const P = cv.width, Q = cv.height;
  ctx.clearRect(0, 0, P, Q);
  const pad = 9;
  const cell = Math.min((P - pad * 2) / W, (Q - pad * 2) / D);
  const ox = (P - cell * W) / 2, oy = (Q - cell * D) / 2;
  roundRectPath(ctx, 2, 2, P - 4, Q - 4, 16);
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(186,202,228,0.95)';
  ctx.lineWidth = 3;
  ctx.stroke();
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < D; j++) {
      const x = ox + i * cell, y = oy + j * cell;
      if (set.has(i + ',' + j)) drawBlockCell(ctx, x, y, cell);
      else drawEmptyCell(ctx, x, y, cell);
    }
  }
}

function createChoices(layouts) {
  choicesEl.innerHTML = '';
  game.choiceKeys = layouts;
  const W = game.W, D = game.D;
  layouts.forEach((lk, k) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.type = 'button';
    const cv = document.createElement('canvas');
    cv.className = 'mini-canvas';
    cv.width = 160; cv.height = 160;
    drawMiniIcon(cv, new Set(lk.split('|')), W, D);
    const num = document.createElement('span');
    num.className = 'opt-num';
    num.textContent = NUM[k];
    btn.appendChild(cv);
    btn.appendChild(num);
    btn.addEventListener('click', () => onPick(k));
    choicesEl.appendChild(btn);
  });
  choicesEl.appendChild(btnTop);
  choicesEl.style.visibility = 'visible';
}
function removeChoices() {
  choicesEl.innerHTML = '';
  game.choiceKeys = [];
  choicesEl.style.visibility = 'hidden';
}

/* ---------------- 選択のアニメーション ---------------- */
let flyers = [];
let group = null; // { mode:'correct'|'wrong', phase:'form'|'slide' }

function buttonStartPos(btn) {
  const r = btn.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  ndc.x = (cx / window.innerWidth) * 2 - 1;
  ndc.y = -(cy / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(ndc, camera);
  const depth = camDist * 0.85;
  return raycaster.ray.origin.clone().addScaledVector(raycaster.ray.direction, depth);
}

// カメラから土台中心へ向かう水平方向（問題の「まえ」）
function commonFrontDir() {
  const center = new THREE.Vector3(0, CUBE_Y, 0);
  blockGroup.localToWorld(center);
  const dir = new THREE.Vector3(camera.position.x - center.x, 0, camera.position.z - center.z);
  if (dir.lengthSq() < 1e-6) dir.set(0, 0, 1);
  return dir.normalize();
}

function makeFlyer(startPos, liftY, gi, gj, isCorrect, dir) {
  const off = new THREE.Vector3((Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5);
  const start = startPos.clone().add(off);
  const holeLocal = new THREE.Vector3(gi - (game.W - 1) / 2, CUBE_Y, gj - (game.D - 1) / 2);
  const holeWorld = holeLocal.clone();
  blockGroup.localToWorld(holeWorld);
  // 問題の「うえ」に、おなじ「ならび」でうかぶ
  const hover = holeWorld.clone().add(new THREE.Vector3(0, ABOVE_H, 0));
  // そこから垂直におろす（はずれは、はまる手前でとまる）
  const dropTarget = isCorrect ? holeWorld.clone() : holeWorld.clone().add(new THREE.Vector3(0, DROP_NEAR, 0));

  const fmat = matCache[BLOCK_COLOR] || (matCache[BLOCK_COLOR] = makeCubeMaterial(BLOCK_COLOR));
  const fMesh = new THREE.Mesh(cubeGeo, fmat);
  const fEdges = new THREE.LineSegments(edgesGeo, edgeMat);
  fMesh.position.copy(start);
  fMesh.scale.setScalar(0.9);
  fMesh.castShadow = true;
  scene.add(fMesh);
  scene.add(fEdges);
  fEdges.position.copy(start);

  return {
    mesh: fMesh, edges: fEdges, phase: 'lift', t: 0,
    startPos: start, liftY, hover, dropTarget, holeWorld, holeLocal,
    frontDir: dir, isCorrect, target: { i: gi, j: gj }, done: false,
  };
}

function onPick(k) {
  if (!game.running || game.busy || flyers.length) return;
  const btns = choicesEl.querySelectorAll('.opt-btn');
  const btn = btns[k];
  if (!btn) return;
  sndClick();

  const chosen = game.choiceKeys[k];
  const isCorrect = chosen === game.holesKey;

  game.busy = true;
  btns.forEach((b) => (b.disabled = true));
  blockGroup.updateMatrixWorld(true);

  const startPos = buttonStartPos(btn);
  const liftY = startPos.y + 1.3;
  const dir = commonFrontDir();

  flyers = [];
  if (isCorrect) {
    // 正解：穴と同じ位置に、そのままならんでからはまる
    game.holes.forEach((h) => flyers.push(makeFlyer(startPos, liftY, h.i, h.j, true, dir)));
  } else {
    // はずれ：えらんだ配置でならんで、はまらずにはねる
    chosen.split('|').forEach((c) => {
      const [i, j] = c.split(',').map(Number);
      flyers.push(makeFlyer(startPos, liftY, i, j, false, dir));
    });
  }
  group = { mode: isCorrect ? 'correct' : 'wrong', phase: 'form' };
}

function updateFly(dt) {
  if (!flyers.length) return;
  let anyWrong = false;
  for (const f of flyers) {
    if (!f.done && updateFlyer(f, dt)) f.done = true;
    if (!f.isCorrect) anyWrong = true;
  }
  // 全員が問題のうえにならんだら、いっせいに垂直おろしスタート
  if (group && group.phase === 'form') {
    const allAtFormation = flyers.every((f) => f.done || f.phase === 'hold' || f.phase === 'lower');
    if (allAtFormation) group.phase = 'drop';
  }
  const prevCount = flyers.length;
  flyers = flyers.filter((f) => !f.done);
  if (prevCount && flyers.length === 0 && group && group.phase === 'drop') {
    if (anyWrong) settleWrongAll();
    else settleCorrectAll();
  }
}

function updateFlyer(f, dt) {
  f.t += dt;
  const m = f.mesh, e = f.edges;

  if (f.phase === 'lift') {
    // 1) そのまま上に持ちあげる
    const d = 0.38;
    const k = Math.min(f.t / d, 1);
    const s = easeOutCubic(k);
    m.position.lerpVectors(f.startPos, new THREE.Vector3(f.startPos.x, f.liftY, f.startPos.z), s);
    m.scale.setScalar(0.9 + Math.sin(Math.PI * k) * 0.25);
    e.position.copy(m.position);
    if (k >= 1) { f.phase = 'fly'; f.t = 0; }
  } else if (f.phase === 'fly') {
    // 2) 問題のうえの「ならび」の位置まで移動する
    const d = 0.5;
    const k = Math.min(f.t / d, 1);
    const s = easeOutCubic(k);
    const from = new THREE.Vector3(f.startPos.x, f.liftY, f.startPos.z);
    m.position.lerpVectors(from, f.hover, s);
    m.scale.setScalar(1.05);
    e.position.copy(m.position);
    if (k >= 1) { f.phase = 'hold'; f.t = 0; }
  } else if (f.phase === 'hold') {
    // ならびの位置でちょっとまつ
    m.position.copy(f.hover);
    m.position.y += Math.sin(f.t * 6) * 0.03;
    e.position.copy(m.position);
    if (group && group.phase === 'drop') { f.phase = 'lower'; f.t = 0; }
  } else if (f.phase === 'lower') {
    // 3) そのまままっすぐ垂直におろしてすっぽりはめる
    const d = 0.75;
    const k = Math.min(f.t / d, 1);
    const s = easeInOutQuad(k);
    m.position.lerpVectors(f.hover, f.dropTarget, s);
    e.position.copy(m.position);
    if (k >= 1) {
      f.phase = f.isCorrect ? 'correct' : 'bounce';
      f.t = 0;
    }
  } else if (f.phase === 'correct') {
    m.scale.setScalar(0.98 + Math.sin(f.t * 20) * 0.01);
    if (f.t >= 0.22) { attachToGrid(f); return true; }
  } else if (f.phase === 'bounce') {
    // はまらずにはねて消える
    const d = 0.34;
    const k = Math.min(f.t / d, 1);
    const off = Math.sin(k * Math.PI * 4) * (1 - k) * 0.55;
    const jitter = new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.3 * Math.sin(k * Math.PI * 3), (Math.random() - 0.5) * 0.3);
    m.position.copy(f.dropTarget).addScaledVector(f.frontDir, off).add(jitter);
    m.rotation.x += 0.3 * dt * 60;
    m.rotation.z += 0.3 * dt * 60;
    e.position.copy(m.position);
    if (k >= 1) { f.phase = 'poof'; f.t = 0; }
  } else if (f.phase === 'poof') {
    const k = Math.min(f.t / 0.35, 1);
    const s = 1 - easeOutCubic(k);
    m.scale.setScalar(Math.max(s, 0.02));
    m.material.opacity = Math.max(1 - k, 0);
    m.material.transparent = true;
    e.visible = false;
    if (k >= 1) {
      scene.remove(m); scene.remove(e);
      return true;
    }
  }
  return false;
}

function attachToGrid(f) {
  const { i, j } = f.target;
  const key = i + ',' + j;
  scene.remove(f.mesh);
  scene.remove(f.edges);
  f.mesh.position.copy(f.holeLocal);
  f.mesh.scale.setScalar(1);
  f.edges.position.copy(f.holeLocal);
  blockGroup.add(f.mesh);
  blockGroup.add(f.edges);

  if (game.ghosts[key]) {
    blockGroup.remove(game.ghosts[key].mesh);
    blockGroup.remove(game.ghosts[key].edges);
    delete game.ghosts[key];
  }
  game.grid[key] = { mesh: f.mesh, edges: f.edges, color: BLOCK_COLOR };
}

function settleCorrectAll() {
  game.remaining = [];
  game.correct++;
  const colors = ['#ffd84d', '#ffb020', '#fff', '#ff6b6b', '#ff8c3b'];
  for (const h of game.holes) {
    const w = new THREE.Vector3(h.i - (game.W - 1) / 2, CUBE_Y, h.j - (game.D - 1) / 2);
    blockGroup.localToWorld(w);
    burst(w, 24, colors, { speed: 4.2, up: 3.0, life: 0.9 });
  }
  flash('good');
  showMsg('せいかい！', 'correct');
  sndCorrect();
  updateHUD();
  setTimeout(() => { game.busy = false; completeQuestion(); }, 700);
}

function settleWrongAll() {
  game.mistakes++;
  const c = new THREE.Vector3(0, 1.2, 0);
  blockGroup.localToWorld(c);
  burst(c, 22, ['#ff5b5b', '#ff8a8a', '#b04848'], { speed: 3.2, up: 2.0, life: 0.6, grav: 7 });
  startShake();
  flash('bad');
  showMsg('ざんねん…', 'wrong');
  sndWrong();
  updateHUD();
  setTimeout(() => {
    game.busy = false;
    prepareChoices();
  }, 800);
}

/* ---------------- 問題の流れ ---------------- */
function randomDistractor(correctArr, used, W, D, K) {
  const correctKey = layoutKey(correctArr);
  const nonHole = [];
  for (let i = 0; i < W; i++) for (let j = 0; j < D; j++) {
    const c = i + ',' + j;
    if (!correctArr.includes(c)) nonHole.push(c);
  }
  for (let t = 0; t < 500; t++) {
    // 正解とすこしだけ重なる、まぎらわしい配置をつくる
    const keepN = K === 1 ? 0 : Math.floor(Math.random() * K);
    const s = new Set(shuffle(correctArr).slice(0, keepN));
    const pool = shuffle(nonHole.filter((c) => !s.has(c)));
    let g = 0;
    while (s.size < K && pool.length && g++ < 200) s.add(pool.pop());
    if (s.size < K) continue;
    const key = layoutKey([...s]);
    if (key === correctKey || used.has(key)) continue;
    return key;
  }
  return null;
}
function fallbackDistractor(used, W, D, K) {
  const n = W * D;
  const idx = Array.from({ length: K }, (_, i) => i);
  for (;;) {
    const key = layoutKey(idx.map((x) => Math.floor(x / D) + ',' + (x % D)));
    if (!used.has(key)) return key;
    let i = K - 1;
    while (i >= 0 && idx[i] === n - K + i) i--;
    if (i < 0) return null;
    idx[i]++;
    for (let j = i + 1; j < K; j++) idx[j] = idx[j - 1] + 1;
  }
}

function prepareChoices() {
  if (!game.holes.length) { completeQuestion(); return; }
  const K = game.holes.length;
  const correctArr = game.holes.map((h) => h.i + ',' + h.j);
  const correctKey = layoutKey(correctArr);
  const used = new Set([correctKey]);
  const layouts = [correctKey];
  while (layouts.length < SETTINGS.choices) {
    let d = randomDistractor(correctArr, used, game.W, game.D, K);
    if (d === null) d = fallbackDistractor(used, game.W, game.D, K);
    if (d === null) break;
    used.add(d);
    layouts.push(d);
  }
  createChoices(shuffle(layouts));
}

function loadQuestion(idx) {
  game.qIdx = idx;
  const shp = SHAPES[SETTINGS.shape];
  game.W = shp.w; game.D = shp.d;
  game.cfg = DIFFS[SETTINGS.diff];

  blockGroup.rotation.set(0, 0, 0);
  yaw = 0.571; pitch = 0.62;
  camDist = Math.max(game.W, game.D) * 1.7 + 3.2;
  camCenter.set(0, 0.6, 0);
  positionCamera();

  makeBlock();
  updateHUD();
  prepareChoices();
}

function completeQuestion() {
  burst(new THREE.Vector3(0, 2, 0), 70, ['#ffd84d', '#ff6b6b', '#3fd070', '#35c2ff', '#a06bff', '#ffb020', '#fff'], { speed: 6.5, up: 5.0, life: 1.3 });
  flash('good');
  sndClear();
  showMsg('すべて はまった！', 'correct');

  setTimeout(() => {
    if (game.qIdx + 1 >= game.total) endGame();
    else loadQuestion(game.qIdx + 1);
  }, 1500);
}

function updateHUD() {
  hudQ.textContent = 'もんだい ' + (game.qIdx + 1) + ' / ' + game.total;
  hudScore.textContent = 'せいかい ' + game.correct;
  hudHoles.textContent = 'のこり ' + game.remaining.length + ' こ';
}

function startGame() {
  ensureAudio();
  game.running = true;
  game.correct = 0;
  game.mistakes = 0;
  game.total = SETTINGS.count;

  startScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  gameHud.classList.remove('hidden');
  hintEl.classList.remove('hidden');

  loadQuestion(0);
}

function endGame() {
  game.running = false;
  gameHud.classList.add('hidden');
  hintEl.classList.add('hidden');
  removeChoices();

  const totalPicks = game.correct + game.mistakes;
  const acc = totalPicks ? game.correct / totalPicks : 1;
  const stars = acc >= 0.95 ? 3 : acc >= 0.75 ? 2 : 1;
  endStars.textContent = '★'.repeat(stars);
  endText.textContent = 'せいかい ' + game.correct + ' こ / まちがい ' + game.mistakes + ' かい';
  if (stars === 3) endMsg.textContent = 'すごい！ ぜんぶ ばっちりだね！';
  else if (stars === 2) endMsg.textContent = 'がんばったね！ あとちょっと！';
  else endMsg.textContent = 'もういちど ちょうせんしよう！';
  endScreen.classList.remove('hidden');
}

/* ---------------- 設定UI ---------------- */
function bindOpts(role, storeKey) {
  const box = document.querySelector('.opts[data-role="' + role + '"]');
  box.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-v]');
    if (!b) return;
    box.querySelectorAll('button').forEach((x) => x.classList.remove('sel'));
    b.classList.add('sel');
    SETTINGS[storeKey] = b.dataset.v;
    if (role === 'diff' || role === 'shape') updateLvlDesc();
  });
}
bindOpts('count', 'count');
bindOpts('diff', 'diff');
bindOpts('choices', 'choices');
bindOpts('shape', 'shape');

$('btn-start').addEventListener('click', () => { ensureAudio(); sndClick(); startGame(); });
$('btn-retry').addEventListener('click', () => { sndClick(); startGame(); });
$('btn-config').addEventListener('click', () => {
  sndClick();
  endScreen.classList.add('hidden');
  gameHud.classList.add('hidden');
  startScreen.classList.remove('hidden');
});
$('btn-home').addEventListener('click', () => {
  sndClick();
  game.running = false;
  removeChoices();
  gameHud.classList.add('hidden');
  hintEl.classList.add('hidden');
  startScreen.classList.remove('hidden');
});
$('btn-sound').addEventListener('click', () => {
  ensureAudio();
  soundOn = !soundOn;
  $('btn-sound').classList.toggle('muted', !soundOn);
  $('btn-sound').textContent = soundOn ? 'おと' : 'おとOFF';
  if (soundOn) sndClick();
});
btnTop.addEventListener('click', () => {
  if (!game.running || game.busy) return;
  ensureAudio();
  sndClick();
  // まうえから見て 前／後ろ の文字がまっすぐになる向きにカメラをセット
  yaw = 0;
  pitch = Math.PI / 2 - 0.0001; // まうえからまっすぐ見おろす
  positionCamera();
});

/* ---------------- ループ ---------------- */
let lastT = performance.now();
function loop(now) {
  const dt = Math.min((now - lastT) / 1000, 0.05);
  lastT = now;

  const time = now / 1000;

  // おばけ（穴）のパルス
  for (const key in game.ghosts) {
    const g = game.ghosts[key];
    g.mesh.material.opacity = 0.13 + Math.sin(time * 3) * 0.07;
    const s = 0.97 + Math.sin(time * 3) * 0.03;
    g.mesh.scale.setScalar(s);
    g.edges.scale.setScalar(s);
  }

  updateFly(dt);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.v.y -= p.grav * dt;
    p.m.position.addScaledVector(p.v, dt);
    p.life -= dt;
    p.m.material.opacity = Math.max(p.life / 0.9, 0);
    const s = Math.max(p.base * (p.life / 0.9), 0.02);
    p.m.scale.setScalar(s);
    if (p.life <= 0) {
      scene.remove(p.m);
      p.m.material.dispose();
      particles.splice(i, 1);
    }
  }

  if (shakeT > 0) shakeT -= dt;
  positionCamera();

  renderer.render(scene, camera);
}

/* ---------------- 開始 ---------------- */
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function init() {
  buildScene();
  attachInput();
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  loading.classList.add('hidden');
  updateLvlDesc();
  // はじめる前の、うつくしい背景ブロック
  yaw = 0.571; pitch = 0.472;
  camDist = 9.5;
  camCenter.set(0, 0.6, 0);
  positionCamera();
  loadQuestion(0);
  renderer.setAnimationLoop(loop);
}

// テスト用フック（実プレイには影響しない）
window.__dbg = () => ({
  holesKey: game.holesKey,
  choiceKeys: game.choiceKeys,
  correct: game.correct,
  mistakes: game.mistakes,
  qIdx: game.qIdx,
  groupPhase: group ? group.phase : null,
  flyers: flyers.map((f) => ({
    phase: f.phase, isCorrect: f.isCorrect,
    hover: f.hover.toArray(),
    dropTarget: f.dropTarget.toArray(),
  })),
});
window.__view = () => {
  const labels = [];
  blockGroup.traverse((o) => {
    if (o.userData.isLabel) {
      let white = 0;
      try {
        const img = o.material.map.image;
        const cv = document.createElement('canvas');
        cv.width = img.width; cv.height = img.height;
        cv.getContext('2d').drawImage(img, 0, 0);
        const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
        for (let i = 0; i < d.length; i += 4) if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) white++;
      } catch (e) { white = -1; }
      const c = new THREE.Vector3(0, 0, 0);
      const t = new THREE.Vector3(0, 0.6, 0);
      const b = new THREE.Vector3(0, -0.6, 0);
      [c, t, b].forEach((p) => { o.localToWorld(p); });
      const ndc = (v) => { const s = v.clone().project(camera); return [s.x, s.y, s.z]; };
      labels.push({ p: o.position.toArray(), s: o.scale.x, r: o.rotation.toArray(), white, ndc: { c: ndc(c), t: ndc(t), b: ndc(b) } });
    }
  });
  return { yaw, pitch, camPos: camera.position.toArray(), blockRot: blockGroup.rotation.toArray(), labels };
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
