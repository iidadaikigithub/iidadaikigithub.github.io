/**
 * input.js
 *
 * マウス入力の処理と、レイキャスティングによるブロック選択を行うモジュール。
 * 右クリックの検出、マウス位置の正規化座標管理、ブロックのヒット判定を担当する。
 */
import * as THREE from 'three';
import { getCamera } from './camera.js';
import { blocks, highlightBlock } from './block.js';
import { startPulling, stopPulling, getGameState } from './game.js';

// --- レイキャスター ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// --- マウス状態 ---
let mouseX = 0;
let mouseY = 0;
export let isRightButtonDown = false;

/**
 * マウス入力を初期化する。
 * @param {HTMLElement} element - イベントを購読する DOM 要素
 */
export function initInput(element) {
    // ブラウザのコンテキストメニューを抑制
    element.addEventListener('contextmenu', (e) => e.preventDefault());

    // マウス移動 → 正規化デバイス座標を更新
    element.addEventListener('mousemove', (e) => {
        mouseX = ( e.clientX / window.innerWidth  ) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight ) * 2 + 1;
        mouse.set(mouseX, mouseY);
    });

    // マウスボタン押下
    element.addEventListener('mousedown', (e) => {
        if (e.button === 2) {
            // 右クリック → ブロック選択を試みる
            isRightButtonDown = true;
            handleRightClick();
        }
    });

    // マウスボタン解放
    element.addEventListener('mouseup', (e) => {
        if (e.button === 2) {
            // 右クリック解放 → 引き抜き停止
            isRightButtonDown = false;
            stopPulling();
        }
    });

    // タッチデバイス用: 長押しで右クリック相当の動作
    let touchTimer = null;
    let touchStartPos = { x: 0, y: 0 };
    element.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            const t = e.touches[0];
            touchStartPos.x = t.clientX;
            touchStartPos.y = t.clientY;
            // 500ms 長押しでブロック選択
            touchTimer = setTimeout(() => {
                mouseX = (touchStartPos.x / window.innerWidth) * 2 - 1;
                mouseY = -(touchStartPos.y / window.innerHeight) * 2 + 1;
                mouse.set(mouseX, mouseY);
                isRightButtonDown = true;
                handleRightClick();
            }, 500);
        }
    }, { passive: true });
    element.addEventListener('touchmove', (e) => {
        // 指が動いたら長押しキャンセル
        if (touchTimer) {
            clearTimeout(touchTimer);
            touchTimer = null;
        }
        if (isRightButtonDown && e.touches.length === 1) {
            // タッチでブロック引き抜き中も位置追跡
            const t = e.touches[0];
            mouseX = (t.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(t.clientY / window.innerHeight) * 2 + 1;
            mouse.set(mouseX, mouseY);
        }
    }, { passive: true });
    element.addEventListener('touchend', (e) => {
        if (touchTimer) {
            clearTimeout(touchTimer);
            touchTimer = null;
        }
        if (isRightButtonDown) {
            isRightButtonDown = false;
            stopPulling();
        }
    }, { passive: true });

    // ウィンドウリサイズ → カメラアスペクト比更新
    window.addEventListener('resize', () => {
        const camera = getCamera();
        if (camera) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }
    });
}

/**
 * 現在のマウス位置からレイキャストでブロックを探す。
 * @returns {object|null} ヒットしたブロックデータ、なければ null
 */
function findBlockAtMouse() {
    const camera = getCamera();
    if (!camera) return null;

    raycaster.setFromCamera(mouse, camera);

    // 全ブロックのメッシュを配列に集める
    const meshes = blocks.map(b => b.mesh);
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
        return intersects[0].object.userData.blockData || null;
    }
    return null;
}

/**
 * 右クリック時の処理: ブロック選択 → 引き抜き開始、または選択解除。
 */
function handleRightClick() {
    const state = getGameState();
    if (state.isGameOver) return;

    const block = findBlockAtMouse();

    if (block) {
        // ブロックにヒット → 選択して引き抜き開始
        highlightBlock(block);
        startPulling(block);
        updateBlockInfo(block);
    } else {
        // 空クリック → 選択解除
        stopPulling();
        updateBlockInfo(null);
    }
}

/**
 * 画面のブロック情報表示を更新する。
 * @param {object|null} block - 選択中のブロックデータ
 */
function updateBlockInfo(block) {
    const span = document.getElementById('selectedBlock');
    if (!span) return;

    if (block) {
        const layer = block.layerIndex + 1;
        const posLabel = ['左', '中央', '右'][block.posInLayer];
        span.textContent = `${layer} 層目 ${posLabel}`;
    } else {
        span.textContent = 'なし';
    }
}
