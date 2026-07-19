/**
 * physics.js
 *
 * Rapier.js 物理演算エンジンの初期化・管理を行うモジュール。
 * 物理ワールドの生成、床（地面）の固定剛体作成、毎フレームの物理更新を担当する。
 */
import * as RAPIER from '@dimforge/rapier3d-compat';

// --- 内部状態 ---
let world = null;         // 物理ワールド（RAPIER.World）
let floorBody = null;     // 床の剛体
let eventQueue = null;    // イベントキュー（world.step() に必要）

/**
 * Rapier.js を初期化し、物理ワールドを作成する。
 * Rapier の初期化は非同期（WASM 読み込みなど）なので await が必要。
 * @returns {Promise<RAPIER.World>}
 */
export async function initPhysics() {
    await RAPIER.init();

    world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    eventQueue = new RAPIER.EventQueue(true);

    return world;
}

/**
 * 床（地面）の固定剛体とコライダーを作成する。
 * 床は動かない静的な物体として設定する。
 */
export function createFloor() {
    if (!world) {
        console.error('Physics world not initialized');
        return;
    }

    // 固定剛体の記述子を作成し、y=-0.5 の位置に配置
    // （ブロックの最下層が y=0.25 なので床はそれより下）
    const bodyDesc = RAPIER.RigidBodyDesc.fixed()
        .setTranslation(0, -0.5, 0);
    floorBody = world.createRigidBody(bodyDesc);

    // 巨大な直方体コライダー（半幅 20×0.5×20）で床を表現
    const colliderDesc = RAPIER.ColliderDesc.cuboid(20, 0.5, 20)
        .setFriction(0.6);       // 摩擦係数
    world.createCollider(colliderDesc, floorBody);
}

/**
 * 物理シミュレーションを 1 ステップ進める。
 * 毎フレームのアニメーションループ内で呼び出す。
 * @param {number} dt - デルタタイム（秒）
 */
export function stepPhysics(dt) {
    if (!world) return;

    const clampedDt = Math.min(dt, 1 / 30);
    world.step(eventQueue, clampedDt);
}

/**
 * 現在の物理ワールドを取得する。
 * @returns {RAPIER.World}
 */
export function getWorld() {
    return world;
}

/**
 * 物理ワールドをリセットし、新しいワールドと床を作成し直す。
 * ゲーム再起動時に使用する。
 */
export function resetWorld() {
    world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    eventQueue = new RAPIER.EventQueue(true);
    createFloor();
}
