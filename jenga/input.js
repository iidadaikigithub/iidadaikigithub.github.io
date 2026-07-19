/**
 * input.js
 *
 * キーボード・ボタン・マウス入力の処理。
 * 左クリック or ↑↓キー でブロック選択、
 * 右クリック（押し続け）で引き抜き、
 * A/D or ◀▶ボタン（押し続け）で視点回転。
 */
import * as THREE from 'three';
import { rotateLeft, rotateRight, getCamera } from './camera.js';
import {
    selectNextBlock, selectPrevBlock,
    startPulling, stopPulling, selectBlockByMesh
} from './game.js';
import { blocks } from './block.js';

let rotateLeftPressed  = false;
let rotateRightPressed = false;
const ROTATE_SPEED = 2.0;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function initInput(element) {
    // コンテキストメニュー抑制
    element.addEventListener('contextmenu', (e) => e.preventDefault());

    // --- マウス位置追跡（左クリック選択・レイキャスト用） ---
    element.addEventListener('pointermove', (e) => {
        mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // --- 左クリック → ブロックを直接選択 ---
    element.addEventListener('pointerdown', (e) => {
        if (e.button === 0) {
            const block = findBlockAtMouse();
            if (block) selectBlockByMesh(block);
        }
    });

    // --- 右クリック → 選択中のブロックを引き抜く ---
    element.addEventListener('pointerdown', (e) => {
        if (e.button === 2) startPulling();
    });
    element.addEventListener('pointerup', (e) => {
        if (e.button === 2) stopPulling();
    });

    // --- canvas にフォーカスを当て、キーボードを有効にする ---
    element.setAttribute('tabindex', '0');
    element.focus();

    // --- キーボード（document で拾う → フォーカスに関係なく動作） ---
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':    e.preventDefault(); selectPrevBlock(); break;
            case 'ArrowDown':  e.preventDefault(); selectNextBlock(); break;
            case 'ArrowLeft':  rotateLeft(0.15);    break;
            case 'ArrowRight': rotateRight(0.15);   break;
            case 'a': case 'A': rotateLeftPressed = true;  break;
            case 'd': case 'D': rotateRightPressed = true; break;
        }
    });
    document.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'a': case 'A': rotateLeftPressed = false;  break;
            case 'd': case 'D': rotateRightPressed = false; break;
        }
    });

    // --- 画面上の回転ボタン ---
    const setupBtn = (id, onPress, onRelease) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('mousedown',   onPress);
        btn.addEventListener('mouseup',     onRelease);
        btn.addEventListener('mouseleave',  onRelease);
        btn.addEventListener('touchstart',  (e) => { e.preventDefault(); onPress(); }, { passive: false });
        btn.addEventListener('touchend',    onRelease);
        btn.addEventListener('touchcancel', onRelease);
    };
    setupBtn('btnRotateLeft',  () => rotateLeftPressed = true,  () => rotateLeftPressed = false);
    setupBtn('btnRotateRight', () => rotateRightPressed = true, () => rotateRightPressed = false);
}

/**
 * 現在のマウス位置からブロックを探す（左クリック選択用）。
 */
function findBlockAtMouse() {
    const camera = getCamera();
    if (!camera || blocks.length === 0) return null;

    raycaster.setFromCamera(mouse, camera);
    const meshes = blocks.map(b => b.mesh);
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length > 0) {
        return hits[0].object.userData.blockData || null;
    }
    return null;
}

export function updateInput(dt) {
    if (rotateLeftPressed)  rotateLeft(ROTATE_SPEED * dt);
    if (rotateRightPressed) rotateRight(ROTATE_SPEED * dt);
}
