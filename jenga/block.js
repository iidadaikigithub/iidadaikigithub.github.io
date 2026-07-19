/**
 * block.js
 *
 * ジェンガブロックの作成・管理を行うモジュール。
 * プロシージャルな木目テクスチャの生成、個別ブロックの生成、
 * 54 ブロックからなるタワーの構築、ポジション同期、ハイライト表示を担当する。
 */
import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import { getWorld } from './physics.js';

// ==============================
// ブロックの寸法定数
// ==============================
export const BLOCK_LENGTH = 3.0;    // 長さ（X または Z 方向）
export const BLOCK_WIDTH  = 1.0;    // 幅（短辺）
export const BLOCK_HEIGHT = 0.5;    // 高さ（Y 方向）
export const BLOCK_GAP    = 0.05;   // 同層ブロック間の隙間

// Rapier コライダー用 half-extents
const HALF_LENGTH = BLOCK_LENGTH / 2;  // 1.5
const HALF_WIDTH  = BLOCK_WIDTH  / 2;  // 0.5
const HALF_HEIGHT = BLOCK_HEIGHT / 2;  // 0.25

// ==============================
// グローバルなブロックデータ管理
// ==============================
/** @type {Array<object>} 全ブロックのデータ配列 */
export const blocks = [];

/** @type {Map<THREE.Mesh, object>} メッシュ → ブロックデータの対応表（レイキャスト用） */
export const meshToBlock = new Map();

// 木目テクスチャ（初回生成時にキャッシュ）
let woodTexture = null;

// ==============================
// プロシージャル木目テクスチャ
// ==============================

/**
 * Canvas を使ってプロシージャルに木目テクスチャを生成する。
 * 木のベース色 → 木目線 → 節（ふし）の順に描画。
 * @returns {THREE.CanvasTexture}
 */
function createWoodTexture() {
    const SIZE = 256;
    const canvas = document.createElement('canvas');
    canvas.width  = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext('2d');

    // ---- 1. ベース色（明るめの茶色） ----
    ctx.fillStyle = '#c4a265';
    ctx.fillRect(0, 0, SIZE, SIZE);

    // ---- 2. 木目線をランダムに描画 ----
    const GRAIN_COUNT = 60;
    for (let i = 0; i < GRAIN_COUNT; i++) {
        const baseY = Math.random() * SIZE;
        // 色にランダムな濃淡をつける
        const r = 150 + Math.random() * 70;
        const g = 120 + Math.random() * 50;
        const b = 70  + Math.random() * 40;
        ctx.strokeStyle = `rgb(${r|0}, ${g|0}, ${b|0})`;
        ctx.lineWidth = 1 + Math.random() * 2;

        ctx.beginPath();
        ctx.moveTo(0, baseY);
        // サイン波＋ノイズで自然な木目線を表現
        for (let x = 0; x <= SIZE; x += 6) {
            const wave = Math.sin(x * 0.05 + i * 0.7) * 3;
            const noise = (Math.random() - 0.5) * 2.5;
            ctx.lineTo(x, baseY + wave + noise);
        }
        ctx.stroke();
    }

    // ---- 3. 節（木の節）をランダムに追加 ----
    for (let i = 0; i < 6; i++) {
        const cx = Math.random() * SIZE;
        const cy = Math.random() * SIZE;
        const radius = 3 + Math.random() * 8;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, '#5a3d1a');
        grad.addColorStop(0.6, '#8b6b3a');
        grad.addColorStop(1, '#c4a265');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Three.js テクスチャに変換
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);        // 長手方向に 2 回リピート
    texture.anisotropy = 4;          // 斜め視点での品質向上
    return texture;
}

/**
 * 木目テクスチャを取得する（初回のみ生成し、以降はキャッシュを返す）。
 * @returns {THREE.CanvasTexture}
 */
export function getWoodTexture() {
    if (!woodTexture) {
        woodTexture = createWoodTexture();
    }
    return woodTexture;
}

// ==============================
// ブロック作成
// ==============================

/**
 * 1 個のブロックを Three.js メッシュ + Rapier 剛体として作成する。
 *
 * @param {number}  layerIndex   - 層の番号（0〜17）
 * @param {number}  posInLayer   - 層内の位置（0=左/奥, 1=中央, 2=右/手前）
 * @param {boolean} isXDdirection- true で X 方向、false で Z 方向に長い
 * @param {THREE.Scene} scene    - 追加先シーン
 * @returns {object} ブロックデータ
 */
export function createBlock(layerIndex, posInLayer, isXDdirection, scene) {
    const world = getWorld();
    if (!world) {
        console.error('Physics world not available');
        return null;
    }

    // ---- 座標計算 ----
    const layerY = layerIndex * BLOCK_HEIGHT + BLOCK_HEIGHT / 2;
    let posX = 0, posZ = 0;
    if (isXDdirection) {
        // X 方向に長い → Z 方向に 3 つ並べる
        posZ = (posInLayer - 1) * (BLOCK_WIDTH + BLOCK_GAP);
    } else {
        // Z 方向に長い → X 方向に 3 つ並べる
        posX = (posInLayer - 1) * (BLOCK_WIDTH + BLOCK_GAP);
    }

    // ---- 引き抜き方向 ----
    // pullDir：短軸方向（タワーの中心から外側へ）
    const pullDir = new THREE.Vector3(0, 0, 0);
    if (isXDdirection) {
        pullDir.z = (posZ >= 0) ? 1 : -1;
        if (posZ === 0) pullDir.z = 1;
    } else {
        pullDir.x = (posX >= 0) ? 1 : -1;
        if (posX === 0) pullDir.x = 1;
    }
    // pullDirLong：長軸方向（常に正方向）
    const pullDirLong = new THREE.Vector3(
        isXDdirection ? 1 : 0,
        0,
        isXDdirection ? 0 : 1
    );

    // ========== Three.js メッシュ ==========
    const geometry = new THREE.BoxGeometry(BLOCK_LENGTH, BLOCK_HEIGHT, BLOCK_WIDTH);
    const material = new THREE.MeshStandardMaterial({
        map: getWoodTexture(),
        roughness: 0.7,
        metalness: 0.0
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(posX, layerY, posZ);
    // Z 方向レイヤーの場合は Y 軸周りに 90° 回転
    if (!isXDdirection) {
        mesh.rotation.y = Math.PI / 2;
    }
    mesh.castShadow   = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // ========== Rapier 剛体 ==========
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(posX, layerY, posZ);
    const body = world.createRigidBody(bodyDesc);

    // Z 方向なら剛体を Y 軸周りに 90° 回転 → コライダーも追従
    if (!isXDdirection) {
        const angle = Math.PI / 2;
        body.setRotation(new RAPIER.Quaternion(0, Math.sin(angle / 2), 0, Math.cos(angle / 2)), true);
    }

    // コライダー（直方体）
    const colliderDesc = RAPIER.ColliderDesc.cuboid(HALF_LENGTH, HALF_HEIGHT, HALF_WIDTH)
        .setFriction(0.3)          // 摩擦（低めにして引き抜きやすく）
        .setRestitution(0.05)      // ほとんど反発しない
        .setDensity(0.8);          // やや軽め
    const collider = world.createCollider(colliderDesc, body);

    // ========== ブロックデータ ==========
    const blockData = {
        mesh,
        body,
        collider,
        layerIndex,
        posInLayer,
        isXDdirection,
        pullDir,
        pullDirLong,
        originalPos: new THREE.Vector3(posX, layerY, posZ),
        isBeingPulled: false,
        isPulledOut: false,
        pullProgress: 0
    };

    // 各種マッピング
    mesh.userData.blockData = blockData;
    meshToBlock.set(mesh, blockData);
    blocks.push(blockData);

    return blockData;
}

/**
 * 54 ブロック（18 層 × 3 ブロック）からなるジェンガタワーを構築する。
 * @param {THREE.Scene} scene - 追加先シーン
 */
export function buildTower(scene) {
    for (let layer = 0; layer < 18; layer++) {
        // 偶数層 → X 方向, 奇数層 → Z 方向
        const isXDdirection = (layer % 2 === 0);
        for (let pos = 0; pos < 3; pos++) {
            createBlock(layer, pos, isXDdirection, scene);
        }
    }
    console.log(`タワー構築完了: ${blocks.length} ブロック`);
}

/**
 * 全ブロックの Three.js メッシュ位置・回転を物理ボディから同期する。
 * アニメーションループ内で物理更新後に呼ぶ。
 */
export function syncBlocks() {
    for (const block of blocks) {
        const t = block.body.translation();
        const r = block.body.rotation();
        block.mesh.position.set(t.x, t.y, t.z);
        block.mesh.quaternion.set(r.x, r.y, r.z, r.w);
    }
}

/**
 * 指定したブロックをハイライト表示する。
 * それ以外のブロックのハイライトは解除する。
 * @param {object|null} block - ハイライトするブロックデータ（null で全解除）
 */
export function highlightBlock(block) {
    // 全ブロックのハイライトを解除
    for (const b of blocks) {
        if (b.mesh.material.emissive) {
            b.mesh.material.emissive.setHex(0x000000);
            b.mesh.material.emissiveIntensity = 0;
        }
    }
    // 指定ブロックのみハイライト
    if (block && block.mesh.material.emissive) {
        block.mesh.material.emissive.setHex(0xff8800);
        block.mesh.material.emissiveIntensity = 0.35;
    }
}

/**
 * ブロックデータをすべてクリアする（ゲーム再起動時）。
 * メッシュ・剛体の削除は呼び出し元で行う。
 */
export function resetBlocksData() {
    blocks.length = 0;
    meshToBlock.clear();
}
