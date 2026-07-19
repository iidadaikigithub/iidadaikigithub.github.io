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
    startPulling, stopPulling, selectBlockByMesh,
    setPullMode, getPullMode
} from './game.js';
import { blocks } from './block.js';

let rotateLeftPressed  = false;
let rotateRightPressed = false;
const ROTATE_SPEED = 2.0;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function updateAllModeButtons() {
    const mode = getPullMode();
    for (const id of ['btnModeSide', 'btnModeFront', 'btnModeSelect']) {
        const btn = document.getElementById(id);
        if (!btn) continue;
        const expected = { btnModeSide: 0, btnModeFront: 1, btnModeSelect: 2 }[id];
        btn.classList.toggle('active', mode === expected);
    }
}

export function initInput(element) {
    // --- マウス位置追跡 ---
    element.addEventListener('mousemove', (e) => {
        mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // --- タッチ → ブロック選択のみ ---
    let lastTouchTime = 0;
    element.addEventListener('touchstart', (e) => {
        const touch = e.changedTouches[0];
        mouse.x =  (touch.clientX / window.innerWidth)  * 2 - 1;
        mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
        const block = findBlockAtMouse();
        if (block) selectBlockByMesh(block);
        lastTouchTime = Date.now();
    }, { passive: true });

    // --- 左クリック → モードに応じて選択 or 引き抜き ---
    element.addEventListener('mousedown', (e) => {
        try {
            if (e.button !== 0) return;
            if (Date.now() - lastTouchTime < 400) return;
            if (getPullMode() === 2) {
                const block = findBlockAtMouse();
                if (block) {
                    selectBlockByMesh(block);
                    setPullMode(0);
                    updateAllModeButtons();
                }
            } else {
                startPulling();
            }
        } catch (err) {
            console.error('mousedown error:', err);
        }
    });
    window.addEventListener('mouseup', (e) => {
        try {
            if (e.button === 0) stopPulling();
        } catch (err) {
            console.error('mouseup error:', err);
        }
    });

    element.addEventListener('contextmenu', (e) => e.preventDefault());
    element.setAttribute('tabindex', '0');

    // --- キーボード ---
    const onKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowUp':    e.preventDefault(); selectPrevBlock(); break;
            case 'ArrowDown':  e.preventDefault(); selectNextBlock(); break;
            case 'ArrowLeft':  rotateLeft(0.15);    break;
            case 'ArrowRight': rotateRight(0.15);   break;
            case 'a': case 'A': rotateLeftPressed = true;  break;
            case 'd': case 'D': rotateRightPressed = true; break;
        }
    };
    const onKeyUp = (e) => {
        switch (e.key) {
            case 'a': case 'A': rotateLeftPressed = false;  break;
            case 'd': case 'D': rotateRightPressed = false; break;
        }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup',   onKeyUp);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);

    // --- 回転ボタン ---
    const setupBtn = (id, onPress, onRelease) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('mousedown',   onPress);
        btn.addEventListener('mouseup',     onRelease);
        btn.addEventListener('mouseleave',  onRelease);
    };
    setupBtn('btnRotateLeft',  () => { rotateLeftPressed = true; },
                              () => { rotateLeftPressed = false; });
    setupBtn('btnRotateRight', () => { rotateRightPressed = true; },
                               () => { rotateRightPressed = false; });

    // --- モードボタン（横から取る / 引き抜いて取る / 選択） ---
    const modeMap = { btnModeSide: 0, btnModeFront: 1, btnModeSelect: 2 };
    for (const [id, mode] of Object.entries(modeMap)) {
        const btn = document.getElementById(id);
        if (!btn) continue;
        btn.addEventListener('click', () => {
            setPullMode(mode);
            updateAllModeButtons();
        });
    }
    updateAllModeButtons();
}

function findBlockAtMouse() {
    const camera = getCamera();
    if (!camera || blocks.length === 0) return null;
    raycaster.setFromCamera(mouse, camera);
    const meshes = blocks.map(b => b.mesh);
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length > 0) return hits[0].object.userData.blockData || null;
    return null;
}

export function updateInput(dt) {
    if (rotateLeftPressed)  rotateLeft(ROTATE_SPEED * dt);
    if (rotateRightPressed) rotateRight(ROTATE_SPEED * dt);
}
