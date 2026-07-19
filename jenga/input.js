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
    getSelectedIndex, setPullMode, getPullMode
} from './game.js';
import { blocks } from './block.js';

let rotateLeftPressed  = false;
let rotateRightPressed = false;
const ROTATE_SPEED = 2.0;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let debugEl = null;

export function initInput(element) {
    debugEl = document.createElement('div');
    debugEl.id = 'debug';
    debugEl.style.cssText = 'position:fixed;bottom:40px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:#0f0;padding:4px 12px;border-radius:4px;font-size:13px;z-index:999;font-family:monospace;pointer-events:none;';
    document.body.appendChild(debugEl);
    log('init');

    // --- マウス位置追跡 ---
    const track = (e) => {
        mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    element.addEventListener('mousemove', track);

    // --- 左クリック → 選択 + 引き抜き ---
    element.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
            const block = findBlockAtMouse();
            if (block) {
                selectBlockByMesh(block);
                startPulling();
                log('pullStart');
            }
        }
    });
    window.addEventListener('mouseup', (e) => {
        if (e.button === 0) {
            stopPulling();
            log('pullStop');
        }
    });

    element.addEventListener('contextmenu', (e) => e.preventDefault());
    element.setAttribute('tabindex', '0');
    element.focus();

    // --- キーボード ---
    const onKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowUp':    e.preventDefault(); selectPrevBlock(); log('up'); break;
            case 'ArrowDown':  e.preventDefault(); selectNextBlock(); log('down'); break;
            case 'ArrowLeft':  rotateLeft(0.15);    log('left'); break;
            case 'ArrowRight': rotateRight(0.15);   log('right'); break;
            case 'a': case 'A': rotateLeftPressed = true;  log('a press'); break;
            case 'd': case 'D': rotateRightPressed = true; log('d press'); break;
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
    setupBtn('btnRotateLeft',  () => { rotateLeftPressed = true;  log('btnL press'); },
                              () => { rotateLeftPressed = false; });
    setupBtn('btnRotateRight', () => { rotateRightPressed = true;  log('btnR press'); },
                               () => { rotateRightPressed = false; });

    // --- 引き抜きモードボタン ---
    const btnModeSide = document.getElementById('btnModeSide');
    const btnModeFront = document.getElementById('btnModeFront');
    function updateModeButtons() {
        const mode = getPullMode();
        if (btnModeSide) btnModeSide.classList.toggle('active', mode === 0);
        if (btnModeFront) btnModeFront.classList.toggle('active', mode === 1);
    }
    if (btnModeSide) btnModeSide.addEventListener('click', () => {
        setPullMode(0);
        updateModeButtons();
        log('modeSide');
    });
    if (btnModeFront) btnModeFront.addEventListener('click', () => {
        setPullMode(1);
        updateModeButtons();
        log('modeFront');
    });
    updateModeButtons();

    log('ready');
}

function log(msg) {
    if (debugEl) debugEl.textContent = msg + ' | sel:' + getSelectedIndex();
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
