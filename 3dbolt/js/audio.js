'use strict';
var SFX = (function () {
  var ctx = null;
  var master = null;

  function init() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') {
      try { ctx.resume().catch(function () { }); } catch (e) { }
    }
  }

  function tone(freq, dur, o) {
    if (!ctx) return;
    o = o || {};
    var t0 = ctx.currentTime + (o.delay || 0);
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (o.slide) osc.frequency.linearRampToValueAtTime(o.slide, t0 + dur);
    var v = o.vol || 0.2;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0002), t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  function noise(dur, o) {
    if (!ctx) return;
    o = o || {};
    var t0 = ctx.currentTime + (o.delay || 0);
    var len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = o.freq || 1000;
    f.Q.value = o.q || 1;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.3, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f);
    f.connect(g);
    g.connect(master);
    src.start(t0);
    src.stop(t0 + dur + 0.02);
  }

  return {
    init: init,
    click: function () { tone(640, 0.07, { type: 'square', vol: 0.12 }); },
    tick: function () { tone(900, 0.03, { type: 'triangle', vol: 0.08 }); },
    whoosh: function () { noise(0.3, { freq: 700, q: 0.7, vol: 0.22 }); },
    clunk: function () {
      tone(115, 0.16, { type: 'sine', vol: 0.55 });
      noise(0.09, { freq: 420, q: 1, vol: 0.2 });
    },
    ok: function () {
      [523, 659, 784, 1046, 1318].forEach(function (f, i) { tone(f, 0.22, { type: 'triangle', vol: 0.22, delay: i * 0.08 }); });
      tone(1568, 0.4, { type: 'sine', vol: 0.1, delay: 0.4 });
      noise(0.12, { freq: 4000, q: 2, vol: 0.05, delay: 0.32 });
    },
    bad: function () {
      tone(160, 0.35, { type: 'sawtooth', vol: 0.18 });
      tone(120, 0.35, { type: 'sawtooth', vol: 0.18, delay: 0.06 });
    },
    loose: function () {
      for (var i = 0; i < 8; i++) tone(200 + Math.random() * 400, 0.04, { type: 'triangle', vol: 0.08, delay: i * 0.05 });
    },
    fanfare: function () {
      [523, 659, 784, 1046].forEach(function (f, i) { tone(f, 0.22, { type: 'triangle', vol: 0.25, delay: i * 0.12 }); });
    }
  };
})();
