/* =========================================================
   2026 CARD DUEL - 共通モジュール
   Firebase / 画像圧縮 / 効果音 / UIヘルパー
   ========================================================= */
(function () {
  'use strict';

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDA94obQ1gp2sK1ShKvY159yvMV8s-5AdE",
    authDomain: "cardgame-8bf6c.firebaseapp.com",
    projectId: "cardgame-8bf6c",
    storageBucket: "cardgame-8bf6c.firebasestorage.app",
    messagingSenderId: "261868329481",
    appId: "1:261868329481:web:654824f6750845153676d8"
  };

  let db = null;
  let initError = null;
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    db.settings({ ignoreUndefinedProperties: true });
  } catch (e) {
    initError = e;
    console.error('[firebase init]', e);
  }

  /* ---------------- DOM helpers ---------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const int = (v, def = 0) => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : def; };
  const num = (v, def = 0) => { const n = Number(v); return Number.isFinite(n) ? n : def; };
  const fmt = n => Math.round(Number(n) || 0).toLocaleString('ja-JP');
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------------- toast ---------------- */
  const toastTimers = new WeakMap();
  function toast(msg, type = 'info', ms = 3000) {
    let box = document.getElementById('toastBox');
    if (!box) { box = el('div', 'toast-box'); box.id = 'toastBox'; document.body.appendChild(box); }
    const t = el('div', 'toast ' + type, esc(msg));
    box.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    toastTimers.set(t, setTimeout(() => {
      t.classList.add('hide');
      setTimeout(() => t.remove(), 380);
    }, ms));
  }

  /* ---------------- 画像 ---------------- */
  function readFile(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = rej;
      r.readAsDataURL(file);
    });
  }
  function loadImage(src) {
    return new Promise((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = src;
    });
  }

  /** 画像を縮小して dataURL(webp/jpeg) にする。Firestore の 1MB 制限対策。 */
  async function compressImage(source, maxSide = 420, quality = 0.82) {
    const dataUrl = (typeof source === 'string') ? source : await readFile(source);
    const img = await loadImage(dataUrl);
    let w = Math.max(1, img.width || 1);
    let h = Math.max(1, img.height || 1);
    const scale = Math.min(1, maxSide / Math.max(w, h));
    w = Math.max(1, Math.round(w * scale));
    h = Math.max(1, Math.round(h * scale));
    let q = quality;
    let out = '';
    for (let attempt = 0; attempt < 6; attempt++) {
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      out = c.toDataURL('image/webp', q);
      if (out.indexOf('data:image/webp') !== 0) {
        const c2 = document.createElement('canvas');
        c2.width = w; c2.height = h;
        const x2 = c2.getContext('2d');
        x2.fillStyle = '#10131f';
        x2.fillRect(0, 0, w, h);
        x2.drawImage(img, 0, 0, w, h);
        out = c2.toDataURL('image/jpeg', q);
      }
      if (out.length < 620000) break;
      w = Math.max(1, Math.round(w * 0.82));
      h = Math.max(1, Math.round(h * 0.82));
      q = Math.max(0.5, q - 0.1);
    }
    return out;
  }

  function imageFromClipboard(e) {
    const items = (e.clipboardData && e.clipboardData.items) || [];
    for (const it of items) {
      if (it.type && it.type.indexOf('image/') === 0) {
        const f = it.getAsFile();
        if (f) return f;
      }
    }
    return null;
  }

  const PLACEHOLDER = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#1b2547"/><stop offset="1" stop-color="#0a0e1c"/></linearGradient></defs>' +
    '<rect width="420" height="420" fill="url(#g)"/>' +
    '<text x="210" y="245" font-size="120" text-anchor="middle" fill="#3d4a72" font-family="sans-serif">?</text></svg>'
  );

  function faceData(char, kind) {
    const imgs = (char && char.images) || {};
    return imgs[kind] || imgs.normal || PLACEHOLDER;
  }

  function charDisplayName(char) {
    return (char && (char.name || char.charName)) || '名無し';
  }

  /* ---------------- 特殊能力 ---------------- */
  const SPECIALS = [
    { id: 'none', short: 'なし', label: '効果なし' },
    { id: 'rest', short: '一回休み', label: '一回休み攻撃力（相手の次の攻撃を無効化）' },
    { id: 'atk2x', short: '攻撃2倍', label: '次のターン自分の攻撃力2倍' },
    { id: 'def2x', short: '防御2倍', label: '次のターン自分の防御力2倍' },
    { id: 'enemyAtkHalf', short: '敵攻撃½', label: '次のターン相手の攻撃力半分' },
    { id: 'enemyDefHalf', short: '敵防御½', label: '次のターン相手の防御力半分' },
    { id: 'heal30', short: '30%回復', label: '自分を30%回復' },
    { id: 'heal50', short: '50%回復', label: '自分を50%回復' },
    { id: 'accUp', short: '命中↑', label: '次のターン自分の命中率+20%' },
    { id: 'accDown', short: '命中↓', label: '次のターン相手の命中率-20%' },
  ];
  const specialLabel = id => (SPECIALS.find(s => s.id === id) || SPECIALS[0]).label;
  const specialShort = id => (SPECIALS.find(s => s.id === id) || SPECIALS[0]).short;

  /* ---------------- 命中率 ---------------- */
  const DEFAULT_ACC = 85;   // カード作成時の初期値
  const ACC_STEP = 20;      // 命中率アップ / ダウンの変動幅（ポイント）
  const ACC_MIN = 5;        // 補正後の下限
  const ACC_MAX = 100;      // 補正後の上限

  /** 保存値や古いカード（accなし）を 0〜100 の整数に正規化する */
  function normalizeAcc(v) {
    if (v === '' || v == null) return DEFAULT_ACC;
    const n = Number(v);
    if (!Number.isFinite(n)) return DEFAULT_ACC;
    return clamp(Math.round(n), 0, 100);
  }
  const accOf = card => normalizeAcc(card && card.acc);

  /* ---------------- 効果音（WebAudio 合成） ---------------- */
  const SFX = (() => {
    let ac = null;
    let master = null;
    let muted = false;
    try { muted = localStorage.getItem('cd2026.muted') === '1'; } catch (_) { }

    function ctx() {
      if (!ac) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ac = new AC();
        master = ac.createGain();
        master.gain.value = muted ? 0 : 0.5;
        master.connect(ac.destination);
      }
      if (ac.state === 'suspended') ac.resume().catch(() => { });
      return ac;
    }
    function setMuted(v) {
      muted = !!v;
      try { localStorage.setItem('cd2026.muted', muted ? '1' : '0'); } catch (_) { }
      if (master) master.gain.value = muted ? 0 : 0.5;
    }

    function tone(o) {
      const a = ctx(); if (!a) return;
      const { freq = 440, to = null, dur = 0.18, type = 'sine', vol = 0.2, delay = 0 } = o || {};
      const t0 = a.currentTime + delay;
      const osc = a.createOscillator();
      const gain = a.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t0 + dur);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t0 + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain).connect(master);
      osc.start(t0);
      osc.stop(t0 + dur + 0.03);
    }

    function noise(o) {
      const a = ctx(); if (!a) return;
      const { dur = 0.25, vol = 0.2, freq = 1200, q = 1, delay = 0, type = 'bandpass', sweep = null } = o || {};
      const t0 = a.currentTime + delay;
      const len = Math.max(1, Math.floor(a.sampleRate * dur));
      const buf = a.createBuffer(1, len, a.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.6);
      const src = a.createBufferSource(); src.buffer = buf;
      const f = a.createBiquadFilter(); f.type = type; f.Q.value = q;
      f.frequency.setValueAtTime(freq, t0);
      if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(60, sweep), t0 + dur);
      const g = a.createGain();
      g.gain.setValueAtTime(vol, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      src.connect(f).connect(g).connect(master);
      src.start(t0);
    }

    const chords = (arr, o) => arr.forEach((f, i) => tone(Object.assign({}, o, { freq: f, delay: (o.delay || 0) + i * (o.step || 0.07) })));

    return {
      unlock: () => { ctx(); },
      isMuted: () => muted,
      setMuted,
      click: () => tone({ freq: 660, to: 900, dur: 0.07, type: 'square', vol: 0.06 }),
      hover: () => tone({ freq: 520, to: 620, dur: 0.04, type: 'sine', vol: 0.025 }),
      draw: () => {
        noise({ dur: 0.26, vol: 0.16, freq: 1800, sweep: 420, q: 0.8 });
        tone({ freq: 300, to: 720, dur: 0.18, type: 'triangle', vol: 0.08 });
      },
      flip: () => {
        noise({ dur: 0.12, vol: 0.1, freq: 2600, q: 1.2 });
        tone({ freq: 900, to: 500, dur: 0.09, type: 'square', vol: 0.05 });
      },
      whoosh: () => noise({ dur: 0.28, vol: 0.2, freq: 700, sweep: 2600, q: 0.7 }),
      hit: () => {
        noise({ dur: 0.32, vol: 0.5, freq: 180, sweep: 60, q: 0.6, type: 'lowpass' });
        tone({ freq: 160, to: 50, dur: 0.3, type: 'sawtooth', vol: 0.3 });
      },
      bigHit: () => {
        noise({ dur: 0.55, vol: 0.65, freq: 140, sweep: 40, q: 0.5, type: 'lowpass' });
        tone({ freq: 110, to: 35, dur: 0.5, type: 'sawtooth', vol: 0.38 });
        tone({ freq: 70, to: 30, dur: 0.6, type: 'square', vol: 0.22 });
      },
      block: () => {
        tone({ freq: 1400, to: 520, dur: 0.22, type: 'triangle', vol: 0.17 });
        tone({ freq: 2100, to: 900, dur: 0.16, type: 'sine', vol: 0.09 });
        noise({ dur: 0.1, vol: 0.12, freq: 3000, q: 2 });
      },
      clash: () => {
        noise({ dur: 0.4, vol: 0.42, freq: 900, sweep: 200, q: 0.7 });
        tone({ freq: 800, to: 120, dur: 0.35, type: 'sawtooth', vol: 0.18 });
        tone({ freq: 1600, to: 300, dur: 0.25, type: 'square', vol: 0.09 });
      },
      heal: () => chords([523, 659, 784, 1047], { dur: 0.4, type: 'sine', vol: 0.11, step: 0.07 }),
      buff: () => chords([392, 523, 659, 880], { dur: 0.5, type: 'triangle', vol: 0.09, step: 0.06 }),
      debuff: () => chords([440, 370, 311, 262], { dur: 0.45, type: 'sawtooth', vol: 0.06, step: 0.07 }),
      shield: () => {
        tone({ freq: 220, to: 660, dur: 0.4, type: 'triangle', vol: 0.14 });
        noise({ dur: 0.35, vol: 0.09, freq: 500, sweep: 2500, q: 1.2 });
      },
      turn: () => chords([660, 880], { dur: 0.25, type: 'sine', vol: 0.09, step: 0.09 }),
      special: () => {
        noise({ dur: 0.5, vol: 0.14, freq: 400, sweep: 4000, q: 1.5 });
        chords([523, 784, 1047, 1568], { dur: 0.5, type: 'triangle', vol: 0.08, step: 0.06 });
      },
      win: () => chords([523, 659, 784, 1047, 1319], { dur: 0.6, type: 'triangle', vol: 0.13, step: 0.12 }),
      lose: () => chords([392, 330, 262, 196], { dur: 0.7, type: 'sawtooth', vol: 0.09, step: 0.16 }),
      error: () => tone({ freq: 190, to: 110, dur: 0.2, type: 'square', vol: 0.09 }),
    };
  })();

  ['pointerdown', 'keydown'].forEach(ev =>
    window.addEventListener(ev, () => SFX.unlock(), { once: true, passive: true })
  );

  /* ---------------- 設定の正規化 ---------------- */
  const DEFAULT_SETTINGS = { playerCount: 2, deckSize: 20, hp: 1000, drawCount: 1, excluded: [] };
  function normalizeSettings(raw) {
    const s = Object.assign({}, DEFAULT_SETTINGS, raw || {});
    s.playerCount = clamp(int(s.playerCount, 2), 1, 4);
    s.deckSize = clamp(int(s.deckSize, 20), 1, 100);
    s.hp = clamp(int(s.hp, 1000), 0, 100000);
    s.drawCount = clamp(int(s.drawCount, 1), 1, 5);
    s.excluded = Array.isArray(s.excluded) ? s.excluded.filter(x => typeof x === 'string') : [];
    return s;
  }

  window.CD = {
    db, initError, FIREBASE_CONFIG,
    $, $$, el, esc, clamp, int, num, fmt, sleep, shuffle,
    toast, SFX, compressImage, imageFromClipboard, readFile, loadImage,
    SPECIALS, specialLabel, specialShort,
    DEFAULT_ACC, ACC_STEP, ACC_MIN, ACC_MAX, normalizeAcc, accOf,
    PLACEHOLDER, faceData, charDisplayName,
    DEFAULT_SETTINGS, normalizeSettings,
  };
})();
