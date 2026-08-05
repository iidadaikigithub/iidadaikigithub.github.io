const THREE = window.THREE;

const SAMPLE_BASE = 'https://gleitz.github.io/midi-js-soundfonts/MusyngKite/acoustic_grand_piano-mp3/';
const MIDI_MIN = 21;
const MIDI_MAX = 108;

const WHITE_W = 2.2;
const WHITE_W_MESH = 2.16;
const WHITE_L = 15;
const WHITE_H = 1.8;
const BLACK_W = 1.2;
const BLACK_L = 9;
const BLACK_H = 2.6;
const BLACK_FRONT_OFFSET = 2.7;

const canvas = document.getElementById('stage');
const statusEl = document.getElementById('status');
const progressEl = document.getElementById('progress');
const preloadBtn = document.getElementById('preload');
const rotateBtn = document.getElementById('rotate');
const pedalBtn = document.getElementById('pedalBtn');

function isWhite(midi) {
  const s = midi % 12;
  return s === 0 || s === 2 || s === 4 || s === 5 || s === 7 || s === 9 || s === 11;
}

const noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
function midiName(midi) {
  return noteNames[midi % 12] + (Math.floor(midi / 12) - 1);
}

const whiteXByMidi = new Map();
let whiteIdx = 0;
for (let m = MIDI_MIN; m <= MIDI_MAX; m++) {
  if (isWhite(m)) {
    whiteXByMidi.set(m, whiteIdx * WHITE_W);
    whiteIdx++;
  }
}

const keySpecs = [];
whiteIdx = 0;
for (let m = MIDI_MIN; m <= MIDI_MAX; m++) {
  if (isWhite(m)) {
    keySpecs.push({ midi: m, white: true, x: whiteIdx * WHITE_W });
    whiteIdx++;
  } else {
    let prev = m - 1;
    let next = m + 1;
    while (!isWhite(prev)) prev--;
    while (!isWhite(next)) next++;
    keySpecs.push({ midi: m, white: false, x: (whiteXByMidi.get(prev) + whiteXByMidi.get(next)) / 2 });
  }
}

const totalCenter = ((whiteIdx - 1) * WHITE_W) / 2;
keySpecs.forEach(k => (k.x -= totalCenter));

const Z_FRONT = 7.5;

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sustain = false;
    this.bufferCache = new Map();
    this.rawCache = new Map();
    this.pending = new Map();
    this.voices = new Set();
    const OC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    this.decoder = OC ? new OC(1, 1, 44100) : null;
  }

  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  urlFor(midi) {
    return SAMPLE_BASE + midiName(midi) + '.mp3';
  }

  fetchRaw(midi) {
    if (this.rawCache.has(midi)) return this.rawCache.get(midi);
    const p = fetch(this.urlFor(midi), { mode: 'cors' })
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.arrayBuffer();
      })
      .catch(() => null);
    this.rawCache.set(midi, p);
    return p;
  }

  getBuffer(midi) {
    if (this.bufferCache.has(midi)) return Promise.resolve(this.bufferCache.get(midi));
    if (this.pending.has(midi)) return this.pending.get(midi);
    const p = this.fetchRaw(midi).then(raw => {
      if (!raw) return this.fallbackBuffer(midi);
      const dec = this.decoder || this.ctx;
      try {
        return dec.decodeAudioData(raw);
      } catch (e) {
        return this.fallbackBuffer(midi);
      }
    }).catch(() => this.fallbackBuffer(midi));
    this.pending.set(midi, p);
    const out = p.then(buf => {
      this.bufferCache.set(midi, buf);
      this.pending.delete(midi);
      return buf;
    });
    return out;
  }

  fallbackBuffer(midi) {
    const ctx = this.ctx || this.decoder;
    const freq = 440 * Math.pow(2, (midi - 69) / 12);
    const dur = 2.5;
    const sr = ctx.sampleRate;
    const n = Math.floor(sr * dur);
    const buf = ctx.createBuffer(1, n, sr);
    const d = buf.getChannelData(0);
    const partials = [1, 2, 3, 4, 5, 6, 7];
    const amps = [1, 0.5, 0.28, 0.16, 0.1, 0.06, 0.04];
    const decays = [3, 2.3, 1.9, 1.5, 1.2, 1, 0.85];
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      let s = 0;
      for (let k = 0; k < partials.length; k++) {
        s += amps[k] * Math.sin(2 * Math.PI * freq * partials[k] * t) * Math.exp(-decays[k] * t);
      }
      s *= 0.3 * Math.exp(-0.5 * t);
      d[i] = Math.tanh(s) * 0.85;
    }
    return buf;
  }

  noteOn(midi) {
    this.ensure();
    const voice = new PianoVoice(this, midi);
    this.voices.add(voice);
    this.getBuffer(midi).then(buf => voice.start(buf));
    return voice;
  }

  noteOff(midi) {
    for (const v of this.voices) {
      if (v.midi === midi && !v.ended) v.keyRelease(this.sustain);
    }
  }

  setSustain(on) {
    this.sustain = on;
    if (!on) {
      for (const v of this.voices) v.pedalRelease();
    }
  }
}

class PianoVoice {
  constructor(engine, midi) {
    this.engine = engine;
    this.midi = midi;
    this.gain = null;
    this.source = null;
    this.sustained = false;
    this.wantRelease = false;
    this.sustainOnRelease = false;
    this.started = false;
    this.ended = false;
  }

  start(buf) {
    if (this.ended) return;
    const ctx = this.engine.ctx;
    this.source = ctx.createBufferSource();
    this.source.buffer = buf;
    this.gain = ctx.createGain();
    this.gain.gain.value = 1;
    this.source.connect(this.gain);
    this.gain.connect(this.engine.master);
    this.source.start();
    this.started = true;
    this.source.onended = () => this.cleanup();
    if (this.wantRelease) {
      if (this.sustainOnRelease) {
        this.sustained = true;
      } else {
        this.fadeOut();
      }
    }
  }

  keyRelease(sustainActive) {
    if (this.ended) return;
    if (!this.started) {
      this.wantRelease = true;
      this.sustainOnRelease = sustainActive;
      return;
    }
    if (sustainActive) {
      this.sustained = true;
      return;
    }
    this.fadeOut();
  }

  pedalRelease() {
    if (this.ended || !this.started) return;
    if (this.sustained) {
      this.sustained = false;
      this.fadeOut();
    }
  }

  fadeOut() {
    if (this.ended) return;
    const ctx = this.engine.ctx;
    const t = ctx.currentTime;
    this.gain.gain.cancelScheduledValues(t);
    this.gain.gain.setTargetAtTime(0, t, 0.12);
    try {
      this.source.stop(t + 2);
    } catch (e) {}
    this.ended = true;
  }

  cleanup() {
    if (this.gain) {
      this.gain.disconnect();
      this.gain = null;
    }
    this.source = null;
    this.ended = true;
    this.engine.voices.delete(this);
  }
}

const audio = new AudioEngine();

let renderer, scene, camera, pianoGroup, pedalGroup, pedalHit;
const keys = [];
const keyMeshes = [];
const pedalHitMeshes = [];
let autoRotate = false;
let sustainOn = false;

const clock = new THREE.Clock();

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1217);
  scene.fog = new THREE.Fog(0x0e1217, 120, 260);

  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  camera.position.set(0, 19, 36);
  camera.lookAt(0, 0, -4);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const hemi = new THREE.HemisphereLight(0xffffff, 0x2a3a4a, 0.9);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff2e0, 1.6);
  sun.position.set(28, 42, 24);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -90;
  sun.shadow.camera.right = 90;
  sun.shadow.camera.top = 90;
  sun.shadow.camera.bottom = -90;
  scene.add(sun);

  const rim = new THREE.DirectionalLight(0xbfd9ff, 0.5);
  rim.position.set(-30, 20, -30);
  scene.add(rim);

  const floorMat = new THREE.MeshStandardMaterial({ color: 0x14181d, roughness: 0.9, metalness: 0 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -7;
  floor.receiveShadow = true;
  scene.add(floor);

  pianoGroup = new THREE.Group();
  scene.add(pianoGroup);

  buildPiano();

  setupPointer();

  preloadBtn.addEventListener('click', () => preloadAll(true));
  rotateBtn.addEventListener('click', () => {
    autoRotate = !autoRotate;
    rotateBtn.classList.toggle('on', autoRotate);
  });
  pedalBtn.addEventListener('click', () => setSustain(!sustainOn));
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const d = camera.position.length();
    const nd = THREE.MathUtils.clamp(d + e.deltaY * 0.04, 16, 110);
    const f = nd / d;
    camera.position.multiplyScalar(f);
  }, { passive: false });

  window.addEventListener('resize', onResize);

  setTimeout(() => preloadAll(false), 400);
}

function buildPiano() {
  const wood = new THREE.MeshStandardMaterial({ color: 0x2a1c12, roughness: 0.4, metalness: 0.15 });
  const woodDark = new THREE.MeshStandardMaterial({ color: 0x1c120b, roughness: 0.35, metalness: 0.2 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf6f5f0, roughness: 0.42, metalness: 0 });
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x070707, roughness: 0.45, metalness: 0.05 });

  const bed = new THREE.Mesh(new THREE.BoxGeometry(120, 3, 24), wood);
  bed.position.set(0, -1.5, -1.5);
  bed.castShadow = true;
  bed.receiveShadow = true;
  pianoGroup.add(bed);

  const rail = new THREE.Mesh(new THREE.BoxGeometry(120, 1.4, 1.4), woodDark);
  rail.position.set(0, 0.6, 9.0);
  rail.castShadow = false;
  rail.receiveShadow = true;
  pianoGroup.add(rail);

  const back = new THREE.Mesh(new THREE.BoxGeometry(120, 14, 2), woodDark);
  back.position.set(0, 7, -13);
  back.castShadow = false;
  back.receiveShadow = true;
  pianoGroup.add(back);

  const lid = new THREE.Mesh(new THREE.BoxGeometry(121, 1, 18), wood);
  lid.position.set(0, 14.5, -3);
  lid.rotation.x = -0.32;
  lid.castShadow = false;
  lid.receiveShadow = true;
  pianoGroup.add(lid);

  const cheekL = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 26), woodDark);
  cheekL.position.set(-59.6, 2.5, -1);
  cheekL.castShadow = true;
  pianoGroup.add(cheekL);

  const cheekR = cheekL.clone();
  cheekR.position.x = 59.6;
  pianoGroup.add(cheekR);

  for (const spec of keySpecs) {
    let mesh;
    if (spec.white) {
      const g = new THREE.BoxGeometry(WHITE_W_MESH, WHITE_H, WHITE_L);
      g.translate(0, WHITE_H / 2, WHITE_L / 2);
      mesh = new THREE.Mesh(g, whiteMat);
      mesh.position.set(spec.x, 0, Z_FRONT - WHITE_L);
    } else {
      const g = new THREE.BoxGeometry(BLACK_W, BLACK_H, BLACK_L);
      g.translate(0, BLACK_H / 2, BLACK_L / 2);
      mesh = new THREE.Mesh(g, blackMat);
      mesh.position.set(spec.x, 0, Z_FRONT - BLACK_FRONT_OFFSET - BLACK_L);
    }
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    mesh.userData.key = spec;
    spec.baseY = 0;
    spec.offY = 0;
    spec.pressed = false;
    spec.mesh = mesh;
    pianoGroup.add(mesh);
    keys.push(spec);
    keyMeshes.push(mesh);
  }

  pedalGroup = new THREE.Group();  pedalGroup.position.set(0, 0.4, 14);
  const pedalArm = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 3, 16), new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.3, metalness: 0.9 }));
  pedalArm.rotation.x = Math.PI / 2;
  pedalArm.position.y = 1.3;
  pedalArm.castShadow = true;
  pedalGroup.add(pedalArm);
  const pedalBase = new THREE.Mesh(new THREE.BoxGeometry(3, 0.6, 6), new THREE.MeshStandardMaterial({ color: 0x111, roughness: 0.4, metalness: 0.4 }));
  pedalBase.position.y = 0.2;
  pedalGroup.add(pedalBase);
  pedalHit = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 10), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
  pedalHit.position.y = 1.6;
  pedalGroup.add(pedalHit);
  pianoGroup.add(pedalGroup);
  pedalHitMeshes.push(pedalHit);
}

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();

function screenToNdc(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  ndc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  ndc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
}

function hitTest(clientX, clientY) {
  screenToNdc(clientX, clientY);
  raycaster.setFromCamera(ndc, camera);
  const keyHit = raycaster.intersectObjects(keyMeshes, false);
  if (keyHit.length) return { type: 'key', key: keyHit[0].object.userData.key };
  const pedalHit = raycaster.intersectObjects(pedalHitMeshes, false);
  if (pedalHit.length) return { type: 'pedal' };
  return null;
}

const activePointers = new Map();

function pressKey(key, pointerId) {
  if (key.pressed) return;
  key.pressed = true;
  audio.noteOn(key.midi);
  activePointers.set(pointerId, key);
}

function releaseKey(key, pointerId) {
  if (key.pressed) {
    key.pressed = false;
    audio.noteOff(key.midi);
  }
  if (activePointers.get(pointerId) === key) activePointers.delete(pointerId);
}

function setSustain(on) {
  sustainOn = on;
  audio.setSustain(on);
  pedalBtn.classList.toggle('on', on);
  statusEl.textContent = on
    ? 'ペダル: ON (サステイン中)'
    : '音源: MusyngKite (gleitz.github.io)';
}

function setupPointer() {
  document.addEventListener('contextmenu', e => e.preventDefault());

  canvas.addEventListener('pointerdown', e => {
    if (e.button === 2) {
      setSustain(true);
      e.preventDefault();
      return;
    }
    audio.ensure();
    const hit = hitTest(e.clientX, e.clientY);
    if (hit) {
      if (hit.type === 'key') {
        pressKey(hit.key, e.pointerId);
      } else if (hit.type === 'pedal') {
        setSustain(!sustainOn);
      }
    }
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (err) {}
    e.preventDefault();
  });

  canvas.addEventListener('pointermove', e => {
    const prev = activePointers.get(e.pointerId);
    if (!prev) return;
    const hit = hitTest(e.clientX, e.clientY);
    if (hit && hit.type === 'key' && hit.key !== prev) {
      releaseKey(prev, e.pointerId);
      pressKey(hit.key, e.pointerId);
    } else if (!hit && prev.pressed) {
      releaseKey(prev, e.pointerId);
    }
  });

  function onPointerUp(e) {
    if (e.button === 2) {
      setSustain(false);
      return;
    }
    const key = activePointers.get(e.pointerId);
    if (key) releaseKey(key, e.pointerId);
  }

  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);
  window.addEventListener('pointerup', e => {
    if (e.button === 2) setSustain(false);
  });
  window.addEventListener('blur', () => {
    setSustain(false);
    for (const k of keys) {
      if (k.pressed) {
        k.pressed = false;
        audio.noteOff(k.midi);
      }
    }
    activePointers.clear();
  });
}

function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}

async function preloadAll(manual) {
  preloadBtn.disabled = true;
  if (manual) statusEl.textContent = '音源を読み込み中…';
  const list = [];
  for (let m = MIDI_MIN; m <= MIDI_MAX; m++) list.push(m);
  let done = 0;
  for (const m of list) {
    await audio.getBuffer(m);
    done++;
    progressEl.style.width = Math.round((done / list.length) * 100) + '%';
    await new Promise(r => setTimeout(r, 0));
  }
  progressEl.style.width = '100%';
  preloadBtn.disabled = false;
  if (manual) statusEl.textContent = '読み込み完了: 88音すべて利用可能';
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  for (const k of keys) {
    const target = k.pressed ? -0.75 : 0;
    k.offY += (target - k.offY) * Math.min(1, dt * 14);
    k.mesh.rotation.x = -k.offY * 0.06;
  }

  const pedalTarget = sustainOn ? 0.55 : 0;
  pedalGroup.rotation.x += (pedalTarget - pedalGroup.rotation.x) * Math.min(1, dt * 8);
  pedalGroup.position.y = 0.4 - pedalGroup.rotation.x * 0.3;

  if (autoRotate) pianoGroup.rotation.y += dt * 0.12;

  renderer.render(scene, camera);
}
