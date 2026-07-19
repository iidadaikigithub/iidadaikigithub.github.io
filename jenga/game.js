/**
 * game.js
 *
 * ゲームの状態管理・メインロジックを扱うモジュール。
 * ブロックの引き抜き処理、ゲームオーバー判定、再起動処理を担当する。
 */
import { blocks, syncBlocks, highlightBlock, buildTower, resetBlocksData } from './block.js';
import { stepPhysics, resetWorld } from './physics.js';

// ==============================
// ゲーム状態
// ==============================
const state = {
    isGameOver: false,
    isPulling: false,
    currentBlock: null,       // 現在引き抜き中のブロック
    pullSpeed: 0.6,           // 引き抜き速度（単位/秒）
    fallenThresholdY: -0.8    // この Y 以下で「落下」判定
};

// シーン参照（再起動時に使用）
let sceneRef = null;

// UI 更新用タイマー
let uiUpdateTimer = 0;

// ==============================
// 公開 API
// ==============================

/**
 * ゲームモジュールを初期化する。
 * @param {THREE.Scene} scene - Three.js シーン
 */
export function initGame(scene) {
    sceneRef = scene;
    resetGameState();

    // 再起動ボタン
    const btn = document.getElementById('restartBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            restartGame();
        });
    }
}

/**
 * ゲーム状態を取得する。
 * @returns {object}
 */
export function getGameState() {
    return state;
}

/**
 * ブロックの引き抜きを開始する。
 * 前に引き抜き中のブロックがあれば強制停止してから新しいブロックに切り替える。
 * @param {object} block - 引き抜くブロックデータ
 */
export function startPulling(block) {
    if (state.isGameOver) return;

    // 前の引き抜きを強制終了
    if (state.isPulling && state.currentBlock) {
        forceStopPulling(state.currentBlock);
    }

    state.isPulling = true;
    state.currentBlock = block;
    block.isBeingPulled = true;
    block.pullProgress = 0;

    // 引き抜き中は重力を無効化し、速度をリセット
    block.body.setGravityScale(0);
    block.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    block.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
}

/**
 * ブロックの引き抜きを停止する。
 * 重力を復活させ、速度をゼロにする。
 */
export function stopPulling() {
    if (!state.isPulling || !state.currentBlock) return;

    const block = state.currentBlock;

    // 重力を元に戻す
    block.body.setGravityScale(1);
    // 速度をゼロに
    block.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    block.body.setAngvel({ x: 0, y: 0, z: 0 }, true);

    block.isBeingPulled = false;
    state.isPulling = false;
    state.currentBlock = null;

    // ハイライト解除
    highlightBlock(null);
}

/**
 * 強制的に引き抜きを終了させる（内部用）。
 * @param {object} block
 */
function forceStopPulling(block) {
    if (!block) return;
    block.body.setGravityScale(1);
    block.isBeingPulled = false;
}

// ==============================
// 毎フレーム更新
// ==============================

/**
 * ゲーム全体の更新処理。アニメーションループから毎フレーム呼び出す。
 * @param {number} dt - デルタタイム（秒）
 */
export function updateGame(dt) {
    if (state.isGameOver) return;

    // ---- 引き抜き中のブロックを移動 ----
    if (state.isPulling && state.currentBlock) {
        updatePulling(dt);
    }

    // ---- 物理演算を実行 ----
    stepPhysics(dt);

    // ---- メッシュ位置を物理ボディに同期 ----
    syncBlocks();

    // ---- ゲームオーバーチェック ----
    checkGameOver();

    // ---- UI 更新（0.2 秒ごと） ----
    uiUpdateTimer += dt;
    if (uiUpdateTimer > 0.2) {
        uiUpdateTimer = 0;
        updateRemainingCount();
    }
}

/**
 * 引き抜き中のブロックに一定速度を設定する。
 * @param {number} dt
 */
function updatePulling(dt) {
    const block = state.currentBlock;
    const speed = state.pullSpeed;
    const dir   = block.pullDir;

    // 引き抜き方向に一定の線速度を設定
    const vel = {
        x: dir.x * speed,
        y: 0,
        z: dir.z * speed
    };
    block.body.setLinvel(vel, true);
    block.body.setAngvel({ x: 0, y: 0, z: 0 }, true);

    block.pullProgress += speed * dt;
}

// ==============================
// ゲームオーバー判定
// ==============================

/**
 * 全ブロックの Y 位置をチェックし、閾値以下になったブロックがあればゲームオーバー。
 * 現在引き抜き中のブロックは除外する。
 */
function checkGameOver() {
    if (state.isGameOver) return;

    for (const block of blocks) {
        if (block.isBeingPulled) continue;
        const pos = block.body.translation();
        if (pos.y < state.fallenThresholdY) {
            state.isGameOver = true;
            // 引き抜き中なら強制停止
            if (state.isPulling) {
                forceStopPulling(state.currentBlock);
                state.isPulling = false;
                state.currentBlock = null;
            }
            showGameOverUI();
            return;
        }
    }
}

/**
 * ゲームオーバー UI を表示する。
 */
function showGameOverUI() {
    const overlay = document.getElementById('gameOver');
    if (overlay) {
        overlay.classList.add('active');
    }
}

// ==============================
// 再起動
// ==============================

/**
 * ゲームを完全に初期状態に戻して再開する。
 */
export function restartGame() {
    // ゲームオーバー UI を非表示に
    const overlay = document.getElementById('gameOver');
    if (overlay) {
        overlay.classList.remove('active');
    }

    // 既存のブロックメッシュをシーンから削除
    if (sceneRef) {
        for (const block of blocks) {
            sceneRef.remove(block.mesh);
            block.mesh.geometry.dispose();
            block.mesh.material.dispose();
        }
    }

    // 物理ワールドをリセット（新しい床も作成される）
    resetWorld();

    // ブロックデータをクリア
    resetBlocksData();

    // ゲーム状態をリセット
    resetGameState();

    // タワーを再構築
    buildTower(sceneRef);

    // 残数表示を更新
    updateRemainingCount();

    // 選択中ブロック表示をクリア
    const span = document.getElementById('selectedBlock');
    if (span) span.textContent = 'なし';
}

/**
 * ゲーム状態を初期値に戻す。
 */
function resetGameState() {
    state.isGameOver  = false;
    state.isPulling   = false;
    state.currentBlock = null;
    uiUpdateTimer = 0;
}

// ==============================
// UI ヘルパー
// ==============================

/**
 * 残りブロック数の表示を更新する。
 * 本来のゲームでは 54 から引き抜いた数を引くが、
 * ここでは現在のブロック数を表示する簡易版。
 */
function updateRemainingCount() {
    const span = document.getElementById('remainingBlocks');
    if (span) {
        // y >= -0.5 にある（落下していない）ブロック数をカウント
        let count = 0;
        for (const block of blocks) {
            const pos = block.body.translation();
            if (pos.y >= -0.5) count++;
        }
        span.textContent = count;
    }
}
