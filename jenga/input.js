/**
 * input.js
 *
 * キーボード・ボタン・マウス入力の処理を行うモジュール。
 * 左/右回転ボタン、A/D キーでの視点回転、
 * ↑/↓ キーでのブロック選択、右クリックでの引き抜きを担当する。
 */
import { rotateLeft, rotateRight } from './camera.js';
import {
    selectNextBlock, selectPrevBlock,
    startPulling, stopPulling
} from './game.js';

// --- 回転ボタン押下状態 ---
let rotateLeftPressed  = false;
let rotateRightPressed = false;

// --- 回転速度（ラジアン/秒） ---
const ROTATE_SPEED = 2.0;

/**
 * 入力を初期化する。
 * @param {HTMLElement} element - Three.js の canvas 要素
 */
export function initInput(element) {
    // コンテキストメニュー抑制
    element.addEventListener('contextmenu', (e) => e.preventDefault());

    // ========== 右クリック → 選択中のブロックを引き抜く ==========
    document.addEventListener('pointerdown', (e) => {
        if (e.button === 2) {
            e.stopPropagation();
            startPulling();
        }
    }, true);
    document.addEventListener('pointerup', (e) => {
        if (e.button === 2) {
            stopPulling();
        }
    });

    // ========== キーボード ==========
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault();
                selectPrevBlock();
                break;
            case 'ArrowDown':
                e.preventDefault();
                selectNextBlock();
                break;
            case 'a':
            case 'A':
                rotateLeftPressed = true;
                break;
            case 'd':
            case 'D':
                rotateRightPressed = true;
                break;
            case 'ArrowLeft':
                rotateLeft(0.15);
                break;
            case 'ArrowRight':
                rotateRight(0.15);
                break;
        }
    });
    document.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'a': case 'A': rotateLeftPressed = false; break;
            case 'd': case 'D': rotateRightPressed = false; break;
        }
    });

    // ========== 画面の回転ボタン ==========
    const btnL = document.getElementById('btnRotateLeft');
    const btnR = document.getElementById('btnRotateRight');

    if (btnL) {
        const pressL = () => { rotateLeftPressed = true; };
        const releaseL = () => { rotateLeftPressed = false; };
        btnL.addEventListener('mousedown', pressL);
        btnL.addEventListener('mouseup', releaseL);
        btnL.addEventListener('mouseleave', releaseL);
        btnL.addEventListener('touchstart', (e) => { e.preventDefault(); pressL(); }, { passive: false });
        btnL.addEventListener('touchend', releaseL);
        btnL.addEventListener('touchcancel', releaseL);
    }
    if (btnR) {
        const pressR = () => { rotateRightPressed = true; };
        const releaseR = () => { rotateRightPressed = false; };
        btnR.addEventListener('mousedown', pressR);
        btnR.addEventListener('mouseup', releaseR);
        btnR.addEventListener('mouseleave', releaseR);
        btnR.addEventListener('touchstart', (e) => { e.preventDefault(); pressR(); }, { passive: false });
        btnR.addEventListener('touchend', releaseR);
        btnR.addEventListener('touchcancel', releaseR);
    }
}

/**
 * 毎フレーム呼び出す。回転ボタンが押されていればカメラを回転させる。
 * @param {number} dt - デルタタイム（秒）
 */
export function updateInput(dt) {
    if (rotateLeftPressed)  rotateLeft(ROTATE_SPEED * dt);
    if (rotateRightPressed) rotateRight(ROTATE_SPEED * dt);
}
