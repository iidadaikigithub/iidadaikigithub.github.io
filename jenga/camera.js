/**
 * camera.js
 *
 * Three.js PerspectiveCamera を管理するモジュール。
 * OrbitControls は使わず、独自の球面座標系でカメラを制御する。
 * 左/右回転ボタン、A/D キーで水平回転、ホイールでズーム。
 */
import * as THREE from 'three';

// --- カメラ ---
let camera = null;

// --- 球面座標パラメータ ---
let theta  = Math.PI / 4;   // 水平角（ラジアン）
let phi    = Math.PI / 3;   // 垂直角（ラジアン）  0=真上, π/2=水平
let radius = 14;            // 注視点からの距離
const target = new THREE.Vector3(0, 4.5, 0);  // タワー中央

/**
 * カメラを初期化する。
 * @param {THREE.WebGLRenderer} renderer
 * @returns {{ camera: THREE.PerspectiveCamera }}
 */
export function initCamera(renderer) {
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);

    // 初期位置を反映
    applyPosition();

    // ---- マウスホイールでズーム ----
    renderer.domElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        radius += e.deltaY * 0.01;
        radius = Math.max(3, Math.min(25, radius));
        applyPosition();
    }, { passive: false });

    // ---- リサイズ ----
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    return { camera };
}

/**
 * 現在の球面座標からカメラ位置を計算して適用する。
 */
function applyPosition() {
    const sinPhi = Math.sin(phi);
    camera.position.set(
        target.x + radius * sinPhi * Math.sin(theta),
        target.y + radius * Math.cos(phi),
        target.z + radius * sinPhi * Math.cos(theta)
    );
    camera.lookAt(target);
}

/**
 * カメラを左に回す（水平角を減らす）。
 * @param {number} amount - 回転量（ラジアン）
 */
export function rotateLeft(amount) {
    theta -= amount;
    applyPosition();
}

/**
 * カメラを右に回す（水平角を増やす）。
 * @param {number} amount - 回転量（ラジアン）
 */
export function rotateRight(amount) {
    theta += amount;
    applyPosition();
}

/**
 * カメラを取得する。
 * @returns {THREE.PerspectiveCamera}
 */
export function getCamera() {
    return camera;
}

/**
 * 毎フレーム呼び出す更新（この方式では何もしない）。
 */
export function updateCamera() {
    // すべてのカメラ操作は即時反映されるため、ここでは何もしない
}
