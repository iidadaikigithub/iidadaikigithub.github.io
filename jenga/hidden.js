let hiddenMode = false;
let groundMesh = null;
let soraTexture = null;

export function isHiddenMode() {
    return hiddenMode;
}

export function setHiddenMode(v) {
    hiddenMode = v;
}

export function setGroundMesh(mesh) {
    groundMesh = mesh;
}

export function setSoraTexture(tex) {
    soraTexture = tex;
}

export function applySoraTexture() {
    if (groundMesh && soraTexture) {
        groundMesh.material.map = soraTexture;
        groundMesh.material.color.setHex(0xffffff);
        groundMesh.material.needsUpdate = true;
    }
}

export function resetHiddenMode() {
    hiddenMode = false;
    if (groundMesh) {
        groundMesh.material.map = null;
        groundMesh.material.color.setHex(0x4a7c59);
        groundMesh.material.needsUpdate = true;
    }
}

export function playCodeSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.setValueAtTime(1047, ctx.currentTime);
        o.frequency.setValueAtTime(1319, ctx.currentTime + 0.1);
        g.gain.setValueAtTime(0.25, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        o.start();
        o.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}
