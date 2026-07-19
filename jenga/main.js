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

// ==============================
// グローバル参照
// ==============================
let scene, renderer, camera;

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
    const ground = new THREE.Mesh(geo, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.48;
    ground.receiveShadow = true;
    scene.add(ground);
}

// ==============================
// アニメーションループ
// ==============================

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    // デルタタイムを取得（最大 1/30 秒に制限）
    const dt = Math.min(clock.getDelta(), 1 / 30);

    // 入力更新（回転ボタン・キー押下によるカメラ回転）
    updateInput(dt);

    // ゲーム更新（物理 + ブロック位置同期 + 点滅 + ゲームオーバーチェック）
    updateGame(dt);

    // カメラ更新（この方式では特に処理なし）
    updateCamera();

    // 描画
    renderer.render(scene, camera);
}

// ==============================
// 起動
// ==============================

init().catch((err) => {
    console.error('Initialization failed:', err);
});
