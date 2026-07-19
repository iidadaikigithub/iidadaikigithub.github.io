/**
 * main.js
 *
 * アプリケーションのエントリーポイント。
 * Three.js シーン・レンダラー・光源のセットアップ、
 * 各モジュールの初期化、アニメーションループの制御を行う。
 */
import * as THREE from 'three';
import { initPhysics, createFloor } from './physics.js';
import { initCamera, updateCamera } from './camera.js';
import { buildTower } from './block.js';
import { initInput, updateInput } from './input.js';
import { initGame, updateGame } from './game.js';
import { setHiddenMode, setGroundMesh, setSoraTexture, applySoraTexture, playCodeSound } from './hidden.js';

// ==============================
// グローバル参照
// ==============================
let scene, renderer, camera;
let groundMesh;

// ==============================
// 初期化（非同期）
// ==============================

async function init() {
    // ---- Rapier.js を初期化 ----
    await initPhysics();

    // ---- Three.js シーン ----
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);   // 空色
    scene.fog = new THREE.Fog(0x87CEEB, 18, 32);    // 距離感のある霧

    // ---- レンダラー ----
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    // canvas を body の先頭に挿入
    document.body.prepend(renderer.domElement);

    // ---- 光源 ----
    setupLights(scene);

    // ---- 地面（視覚用） ----
    createGround(scene);

    // ---- 物理床 ----
    createFloor();

    // ---- カメラ ----
    const camResult = initCamera(renderer);
    camera = camResult.camera;

    // ---- ジェンガタワー構築 ----
    buildTower(scene);

    // ---- ゲーム状態の初期化 ----
    initGame(scene);

    // ---- 入力処理の初期化 ----
    initInput(renderer.domElement);

    // ---- sora.jpg のロード（隠しモード用） ----
    const loader = new THREE.TextureLoader();
    loader.load('./sora.jpg', (tex) => {
        setSoraTexture(tex);
    });

    // ---- 隠しモード起動コード検出 ----
    setupCodeDetection();

    // ---- BGM ----
    setupBGM();

    // ---- アニメーションループ開始 ----
    animate();
}

// ==============================
// 光源設定
// ==============================

function setupLights(scene) {
    // 環境光（全体的な明るさ）
    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambient);

    // メインの平行光（影あり）
    const sun = new THREE.DirectionalLight(0xffeedd, 1.4);
    sun.position.set(8, 14, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.width  = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near  = 0.5;
    sun.shadow.camera.far   = 30;
    sun.shadow.camera.left  = -8;
    sun.shadow.camera.right =  8;
    sun.shadow.camera.top   =  8;
    sun.shadow.camera.bottom = -8;
    sun.shadow.bias = -0.001;
    scene.add(sun);

    // 補助光（青み）
    const fill = new THREE.DirectionalLight(0x8888ff, 0.35);
    fill.position.set(-6, 4, -6);
    scene.add(fill);

    // 逆光（暖かみ）
    const rim = new THREE.DirectionalLight(0xffaa88, 0.2);
    rim.position.set(-3, 1, 8);
    scene.add(rim);

    // デバッグ用にヘルパーを表示したい場合はコメントを外す
    // scene.add(new THREE.DirectionalLightHelper(sun));
}

// ==============================
// 地面（視覚用メッシュ）
// ==============================

function createGround(scene) {
    const geo = new THREE.PlaneGeometry(40, 40);
    const mat = new THREE.MeshStandardMaterial({
        color: 0x4a7c59,
        roughness: 0.9,
        metalness: 0.0
    });
    groundMesh = new THREE.Mesh(geo, mat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.48;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);
    setGroundMesh(groundMesh);
}

// ==============================
// 隠しモード起動コード検出（4734）
// ==============================

function setupCodeDetection() {
    let seq = '';
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            seq += e.key;
            if (seq.length > 4) seq = seq.slice(-4);
            if (seq === '4734') {
                seq = '';
                setHiddenMode(true);
                playCodeSound();
                applySoraTexture();
            }
        }
    });
}

// ==============================
// BGM
// ==============================

let bgmAudio = null;

function setupBGM() {
    bgmAudio = new Audio('./bach.mp3');
    bgmAudio.id = 'bgmAudio';
    bgmAudio.loop = true;
    bgmAudio.volume = 0.5;

    const btn = document.getElementById('bgmToggle');
    if (btn) {
        btn.textContent = 'BGM: OFF';
        btn.classList.add('off');
        btn.addEventListener('click', () => {
            if (bgmAudio.paused) {
                bgmAudio.play();
                btn.textContent = 'BGM: ON';
                btn.classList.remove('off');
            } else {
                bgmAudio.pause();
                btn.textContent = 'BGM: OFF';
                btn.classList.add('off');
            }
        });
    }
}

// ==============================
// アニメーションループ
// ==============================

const clock = new THREE.Clock();
let frameCount = 0;
const errorEl = document.createElement('div');
errorEl.id = 'errorDisplay';
errorEl.style.cssText = 'position:fixed;top:50px;left:50%;transform:translateX(-50%);background:rgba(255,0,0,0.85);color:#fff;padding:8px 16px;border-radius:6px;font-size:14px;z-index:999;font-family:monospace;display:none;white-space:pre-wrap;max-width:80%;text-align:left;user-select:text;';
document.body.appendChild(errorEl);

function showError(label, err) {
    errorEl.style.display = 'block';
    errorEl.textContent = '[' + label + '] ' + err.name + ': ' + err.message + '\n' + (err.stack || '');
}

function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 1 / 30);

    try { updateInput(dt); } catch (err) { showError('updateInput', err); return; }

    try { updateGame(dt); } catch (err) { showError('updateGame', err); return; }

    try { updateCamera(); } catch (err) { showError('updateCamera', err); return; }

    try { renderer.render(scene, camera); } catch (err) { showError('render', err); return; }

    frameCount++;
}

// ==============================
// 起動
// ==============================

init().catch((err) => {
    console.error('Initialization failed:', err);
});
