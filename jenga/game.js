/**
 * game.js
 *
 * ゲームの状態管理・メインロジックを扱うモジュール。
 * ブロック選択（↑↓キー）、赤点滅表示、引き抜き処理、
 * ゲームオーバー判定、再起動を担当する。
 */
import * as RAPIER from '@dimforge/rapier3d-compat';
import { blocks, syncBlocks, buildTower, resetBlocksData } from './block.js';
import { stepPhysics, resetWorld } from './physics.js';

// ==============================
// ゲーム状態
// ==============================
const state = {
    isGameOver: false,
    isPulling: false,
    currentBlock: null,
    selectedBlockIndex: 0,
    pullSpeed: 1.2,
    fallenThresholdY: -0.8,
    pullMode: 0   // 0 = 短軸（横から取る）, 1 = 長軸（引き抜いて取る）
};

let sceneRef = null;
let uiUpdateTimer = 0;
let blinkTimer = 0;

// ==============================
// 公開 API
// ==============================

export function initGame(scene) {
    sceneRef = scene;
    resetGameState();

    const btn = document.getElementById('restartBtn');
    if (btn) btn.addEventListener('click', restartGame);
    const btnCorner = document.getElementById('restartBtnCorner');
    if (btnCorner) btnCorner.addEventListener('click', restartGame);
}

export function getGameState() {
    return state;
}

/** 現在選択中のブロックインデックスを返す（デバッグ表示用） */
export function getSelectedIndex() {
    return state.selectedBlockIndex;
}

export function getPullMode() {
    return state.pullMode;
}

export function setPullMode(mode) {
    state.pullMode = mode;
}

// ==============================
// ブロック選択
// ==============================

/** 次のブロックを選択（番号が大きい方へ） */
export function selectNextBlock() {
    if (blocks.length === 0) return;
    clearSelectionHighlight();
    state.selectedBlockIndex = (state.selectedBlockIndex + 1) % blocks.length;
    updateBlockInfo();
    blinkTimer = 0; // 点滅をリセット
}

/** 前のブロックを選択（番号が小さい方へ） */
export function selectPrevBlock() {
    if (blocks.length === 0) return;
    clearSelectionHighlight();
    state.selectedBlockIndex = (state.selectedBlockIndex - 1 + blocks.length) % blocks.length;
    updateBlockInfo();
    blinkTimer = 0;
}

/** 選択中のブロックの情報を画面に表示 */
function updateBlockInfo() {
    const span = document.getElementById('selectedBlock');
    if (!span) return;

    const idx = state.selectedBlockIndex;
    if (idx >= 0 && idx < blocks.length) {
        const b = blocks[idx];
        const layer = b.layerIndex + 1;
        const posLabel = ['左', '中央', '右'][b.posInLayer];
        span.textContent = `${layer} 層目 ${posLabel} (${idx + 1}/${blocks.length})`;
    } else {
        span.textContent = 'なし';
    }
}

/** 選択ハイライトを消す */
function clearSelectionHighlight() {
    if (blocks.length === 0) return;
    const idx = state.selectedBlockIndex;
    if (idx >= 0 && idx < blocks.length) {
        const b = blocks[idx];
        b.mesh.material.emissive.setHex(0x000000);
        b.mesh.material.emissiveIntensity = 0;
    }
}

/**
 * レイキャストでヒットしたブロックを選択する（左クリック用）。
 * @param {object} blockData - ブロックデータ
 */
export function selectBlockByMesh(blockData) {
    if (!blockData) return;
    const idx = blocks.indexOf(blockData);
    if (idx === -1) return;
    clearSelectionHighlight();
    state.selectedBlockIndex = idx;
    updateBlockInfo();
    blinkTimer = 0;
}

// ==============================
// 引き抜き
// ==============================

/** 現在選択中のブロックの引き抜きを開始する */
export function startPulling() {
    if (state.isGameOver) return;
    if (blocks.length === 0) return;

    // 前に引き抜き中のブロックがあれば停止
    if (state.isPulling && state.currentBlock) {
        forceStopPulling(state.currentBlock);
    }

    const block = blocks[state.selectedBlockIndex];
    if (!block) return;

    state.isPulling = true;
    state.currentBlock = block;
    block.isBeingPulled = true;
    block.pullProgress = 0;
    block.activePullDir = state.pullMode === 0 ? block.pullDir : block.pullDirLong;

    block.body.setBodyType(RAPIER.RigidBodyType.KinematicPositionBased);
}

/** 引き抜きを停止する */
export function stopPulling() {
    if (!state.isPulling || !state.currentBlock) return;

    const block = state.currentBlock;

    block.body.setBodyType(RAPIER.RigidBodyType.Dynamic);
    block.body.setGravityScale(1);
    block.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    block.body.setAngvel({ x: 0, y: 0, z: 0 }, true);

    block.isBeingPulled = false;
    state.isPulling = false;
    state.currentBlock = null;

    // ハイライトは選択状態のまま（点滅継続）
}

function forceStopPulling(block) {
    if (!block) return;
    block.body.setBodyType(RAPIER.RigidBodyType.Dynamic);
    block.body.setGravityScale(1);
    block.isBeingPulled = false;
}

// ==============================
// 毎フレーム更新
// ==============================

export function updateGame(dt) {
    if (state.isGameOver) return;

    // ---- 引き抜き更新 ----
    if (state.isPulling && state.currentBlock) {
        updatePulling(dt);
    }

    // ---- 物理演算 ----
    stepPhysics(dt);
    syncBlocks();

    // ---- ゲームオーバーチェック ----
    checkGameOver();

    // ---- UI 更新（0.2 秒ごと） ----
    uiUpdateTimer += dt;
    if (uiUpdateTimer > 0.2) {
        uiUpdateTimer = 0;
        updateRemainingCount();
    }

    // ---- 選択ブロックの赤点滅 ----
    blinkTimer += dt;
    updateBlinking();
}

/**
 * 引き抜き中のブロックをキネマティック移動させる。
 */
function updatePulling(dt) {
    const block = state.currentBlock;
    const speed = state.pullSpeed;
    const dir   = block.activePullDir || block.pullDir;

    const pos = block.body.translation();
    const nextPos = {
        x: pos.x + dir.x * speed * dt,
        y: pos.y,
        z: pos.z + dir.z * speed * dt
    };
    block.body.setNextKinematicTranslation(nextPos);
    block.pullProgress += speed * dt;
}

// ==============================
// 赤点滅
// ==============================

/**
 * 選択中のブロックを赤く点滅させる。
 * 引き抜き中は点灯状態をキープ、選択のみの場合は点滅。
 */
function updateBlinking() {
    const idx = state.selectedBlockIndex;
    if (idx < 0 || idx >= blocks.length) return;

    const block = blocks[idx];
    if (!block) return;

    if (block.isBeingPulled) {
        // 引き抜き中は赤く光りっぱなし
        block.mesh.material.emissive.setHex(0xff0000);
        block.mesh.material.emissiveIntensity = 0.5;
    } else {
        // 選択中は点滅（約 3 Hz）
        const phase = Math.sin(blinkTimer * 20);
        const intensity = (phase + 1) / 2 * 0.5;
        block.mesh.material.emissive.setHex(0xff0000);
        block.mesh.material.emissiveIntensity = intensity;
    }
}

// ==============================
// ゲームオーバー
// ==============================

function checkGameOver() {
    if (state.isGameOver) return;

    for (const block of blocks) {
        if (block.isBeingPulled) continue;
        const pos = block.body.translation();
        if (pos.y < state.fallenThresholdY) {
            state.isGameOver = true;
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

function showGameOverUI() {
    const overlay = document.getElementById('gameOver');
    if (overlay) overlay.classList.add('active');
}

// ==============================
// 再起動
// ==============================

export function restartGame() {
    const overlay = document.getElementById('gameOver');
    if (overlay) overlay.classList.remove('active');

    if (sceneRef) {
        for (const block of blocks) {
            sceneRef.remove(block.mesh);
            block.mesh.geometry.dispose();
            block.mesh.material.dispose();
        }
    }

    resetWorld();
    resetBlocksData();
    resetGameState();
    buildTower(sceneRef);
    updateRemainingCount();

    updateBlockInfo();
}

function resetGameState() {
    state.isGameOver  = false;
    state.isPulling   = false;
    state.currentBlock = null;
    state.selectedBlockIndex = 0;
    uiUpdateTimer = 0;
    blinkTimer = 0;
}

// ==============================
// UI ヘルパー
// ==============================

function updateRemainingCount() {
    const span = document.getElementById('remainingBlocks');
    if (span) {
        let count = 0;
        for (const block of blocks) {
            const pos = block.body.translation();
            if (pos.y >= -0.5) count++;
        }
        span.textContent = count;
    }
}
