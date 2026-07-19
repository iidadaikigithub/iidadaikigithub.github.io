/**
 * camera.js
 *
 * Three.js の PerspectiveCamera と OrbitControls のセットアップを行うモジュール。
 * マウス左ドラッグでの視点回転、ホイールでのズームを提供する。
 * 右クリックは OrbitControls から外し、ブロック選択操作用に空ける。
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- 内部状態 ---
let camera = null;
let controls = null;

/**
 * カメラとオービットコントロールを初期化する。
 * @param {THREE.WebGLRenderer} renderer - Three.js レンダラー
 * @returns {{ camera: THREE.PerspectiveCamera, controls: OrbitControls }}
 */
export function initCamera(renderer) {
    // 画角 45° のパースペクティブカメラ
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);

    // タワーの斜め上から見下ろす位置に配置
    camera.position.set(9, 7, 9);

    // OrbitControls を生成（ターゲットはタワー中央）
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 4.5, 0);
    controls.enableDamping = true;        // 慣性スクロール
    controls.dampingFactor = 0.12;
    controls.minDistance = 3;
    controls.maxDistance = 25;
    controls.maxPolarAngle = Math.PI / 2.1;  // 地面の下には回り込まない

    // 右クリックは OrbitControls では無効化（ブロック選択用）
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: null
    };
    controls.touches = {
        ONE: THREE.TOUCH.ROTATE_PAN,
        TWO: THREE.TOUCH.DOLLY_PAN
    };

    controls.update();

    return { camera, controls };
}

/**
 * カメラコントロールを更新する（アニメーションループの先頭で呼ぶ）。
 */
export function updateCamera() {
    if (controls) {
        controls.update();
    }
}

/**
 * カメラを取得する。
 * @returns {THREE.PerspectiveCamera}
 */
export function getCamera() {
    return camera;
}

/**
 * OrbitControls を取得する。
 * @returns {OrbitControls}
 */
export function getControls() {
    return controls;
}
