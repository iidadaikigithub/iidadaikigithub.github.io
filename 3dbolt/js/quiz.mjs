'use strict';
var QUIZ = (function () {
  var THREE = window.THREE;
  var MODELS = window.MODELS;
  var SFX = window.SFX;

  var CUBE_TOP = MODELS.CUBE_SIZE;

  var world = null;
  var cfg = null;
  var questions = [];
  var qIndex = 0;
  var score = 0;
  var displayBolts = [];
  var animating = false;
  var currentQ = null;
  var ui = null;
  var onResultCb = null;

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function easeInOutCubic(t) { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOutCubic(t) { t = clamp01(t); return 1 - Math.pow(1 - t, 3); }

  function tween(dur, ease, step, done) {
    var t0 = performance.now();
    function f(now) {
      var t = (now - t0) / dur;
      if (t >= 1) { step(1, 1); if (done) done(); }
      else { step(ease(t), t); requestAnimationFrame(f); }
    }
    requestAnimationFrame(f);
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pickDistractors(c, k, diff) {
    var pref = { 1: [4, 5], 2: [3, 4], 3: [2, 3], 4: [2], 5: [1] }[diff] || [3];
    var used = {};
    var cands = [];
    var guard = 0;
    while (cands.length < k && guard < 500) {
      guard++;
      var d;
      if (Math.random() < 0.8) d = pref[Math.floor(Math.random() * pref.length)];
      else d = 1 + Math.floor(Math.random() * 5);
      var s = Math.random() < 0.5 ? 1 : -1;
      var cand = c + d * s;
      if (cand >= 0 && cand < MODELS.STANDARDS.length && cand !== c && !used[cand]) {
        used[cand] = true;
        cands.push(cand);
      }
    }
    for (var d2 = 1; d2 <= 6 && cands.length < k; d2++) {
      var seq = [c + d2, c - d2];
      for (var q = 0; q < seq.length && cands.length < k; q++) {
        var cand2 = seq[q];
        if (cand2 >= 0 && cand2 < MODELS.STANDARDS.length && cand2 !== c && !used[cand2]) {
          used[cand2] = true;
          cands.push(cand2);
        }
      }
    }
    shuffle(cands);
    return cands;
  }

  function makeQuestions() {
    var pool = [];
    for (var i = 0; i < MODELS.STANDARDS.length; i++) pool.push(i);
    shuffle(pool);
    var list = [];
    var prev = -1;
    for (var n = 0; n < cfg.count; n++) {
      var c;
      if (pool.length) {
        c = pool.shift();
      } else {
        do { c = Math.floor(Math.random() * MODELS.STANDARDS.length); } while (c === prev);
      }
      prev = c;
      var entries = [{ standard: MODELS.STANDARDS[c], correct: true }];
      var ds = pickDistractors(c, cfg.choices - 1, cfg.difficulty);
      for (var j = 0; j < ds.length; j++) entries.push({ standard: MODELS.STANDARDS[ds[j]], correct: false });
      shuffle(entries);
      list.push({ correct: c, entries: entries });
    }
    return list;
  }

  function disposeObj(o) {
    if (!o) return;
    o.traverse(function (ob) {
      if (ob.geometry) ob.geometry.dispose();
      if (ob.material) {
        if (Array.isArray(ob.material)) ob.material.forEach(function (m) { m.dispose(); });
        else ob.material.dispose();
      }
    });
  }

  function clearWorld() {
    while (world.children.length) {
      var o = world.children.pop();
      disposeObj(o);
    }
  }

  function castAll(g) {
    g.traverse(function (o) { if (o.isMesh) o.castShadow = true; });
  }

  function start(c) {
    cfg = c;
    questions = makeQuestions();
    qIndex = 0;
    score = 0;
    loadQuestion();
  }

  function loadQuestion() {
    clearWorld();
    currentQ = questions[qIndex];
    var std = MODELS.STANDARDS[currentQ.correct];
    if (cfg.type === 'bolt') world.add(MODELS.makeCubeBoltHole(std));
    else world.add(MODELS.makeCubeRod(std));
    world.add(MODELS.makeTray());

    displayBolts = [];
    var trayZ = 2.75;
    var K = cfg.choices;
    for (var i = 0; i < K; i++) {
      var e = currentQ.entries[i];
      var mesh;
      if (cfg.type === 'bolt') mesh = MODELS.makeBolt(e.standard, cfg.family);
      else mesh = MODELS.makeNut(e.standard, cfg.family);
      var x = (i - (K - 1) / 2) * 1.15;
      mesh.position.set(x, 0.16, trayZ);
      mesh.userData.choiceIndex = i;
      world.add(mesh);
      displayBolts.push({ mesh: mesh, standard: e.standard, correct: e.correct });
    }
    castAll(world);
    animating = false;
    if (ui) {
      ui.onNewQuestion(qIndex + 1, cfg.count, score);
    }
  }

  function next() {
    if (animating) return;
    if (qIndex < questions.length - 1) {
      qIndex++;
      if (ui) { ui.hideFeedback(); ui.hideNext(); }
      loadQuestion();
    } else {
      if (onResultCb) onResultCb({ score: score, total: questions.length });
    }
  }

  function onSelect(i) {
    if (animating) return;
    animating = true;
    var entry = currentQ.entries[i];
    var dpy = displayBolts[i];
    var srcPos = dpy.mesh.position.clone();
    var srcRot = dpy.mesh.rotation.clone();
    dpy.mesh.visible = false;

    var active;
    if (cfg.type === 'bolt') active = MODELS.makeBolt(entry.standard, cfg.family);
    else active = MODELS.makeNut(entry.standard, cfg.family);
    active.position.copy(srcPos);
    active.rotation.copy(srcRot);
    world.add(active);

    var corr = MODELS.STANDARDS[currentQ.correct];
    var outcome;
    if (entry.correct) outcome = 'correct';
    else if (entry.standard.d > corr.d) outcome = 'jam';
    else outcome = 'loose';

    if (cfg.type === 'bolt') animateBolt(active, dpy, srcPos, srcRot, entry, outcome, i);
    else animateNut(active, dpy, srcPos, srcRot, entry, outcome, i);
  }

  // ---------- bolt ----------
  function animateBolt(active, dpy, srcPos, srcRot, entry, outcome, idx) {
    var std = entry.standard;
    var len = std.len;
    var aboveY = CUBE_TOP + len + 0.1;
    SFX.whoosh();
    tween(0.6, easeInOutCubic, function (t) {
      active.position.x = lerp(srcPos.x, 0, t);
      active.position.z = lerp(srcPos.z, 0, t);
      active.position.y = lerp(srcPos.y, aboveY, t);
      active.rotation.y = srcRot.y + t * Math.PI * 4;
    }, function () {
      insertBolt(active, std, outcome, function () {
        finishAttempt(idx, entry, outcome, active, dpy, srcPos, srcRot);
      });
    });
  }

  // slow insertion, then rotate to tighten after it has gone in
  function insertBolt(active, std, outcome, done) {
    var len = std.len;
    var seatY = CUBE_TOP;
    var startY = active.position.y;
    var startRot = active.rotation.y;
    var stop = (outcome === 'jam') ? len * 0.06 : len;
    var endY = seatY + len - stop;
    tween(1.7, easeInOutCubic, function (t) {
      active.position.y = lerp(startY, endY, t);
      active.rotation.y = startRot + t * 0.5;
    }, function () {
      var turns = (outcome === 'correct') ? 3 : (outcome === 'loose' ? 4 : 3);
      rotatePhase(active, turns, 0.45, done);
    });
  }

  // ---------- nut ----------
  function animateNut(active, dpy, srcPos, srcRot, entry, outcome, idx) {
    var std = entry.standard;
    var corr = MODELS.STANDARDS[currentQ.correct];
    var prot = corr.len;
    var h = std.d * 0.85;
    var aboveY = CUBE_TOP + prot + h / 2 + 0.1;
    SFX.whoosh();
    tween(0.6, easeInOutCubic, function (t) {
      active.position.x = lerp(srcPos.x, 0, t);
      active.position.z = lerp(srcPos.z, 0, t);
      active.position.y = lerp(srcPos.y, aboveY, t);
      active.rotation.y = srcRot.y + t * Math.PI * 4;
    }, function () {
      insertNut(active, std, outcome, h, prot, function () {
        finishAttempt(idx, entry, outcome, active, dpy, srcPos, srcRot);
      });
    });
  }

  function insertNut(active, std, outcome, h, prot, done) {
    var startY = active.position.y;
    if (outcome === 'correct') {
      var endY = CUBE_TOP + h / 2;
      tween(1.7, easeInOutCubic, function (t) {
        active.position.x = lerp(active.position.x, 0, t);
        active.position.z = lerp(active.position.z, 0, t);
        active.position.y = lerp(startY, endY, t);
      }, function () {
        rotatePhase(active, 3, 0.45, done);
      });
    } else if (outcome === 'jam') {
      var targetY = CUBE_TOP + prot + h / 2 + 0.12;
      tween(1.2, easeInOutCubic, function (t) {
        active.position.x = lerp(active.position.x, 0, t);
        active.position.z = lerp(active.position.z, 0, t);
        active.position.y = lerp(startY, targetY, t);
      }, function () {
        rotatePhase(active, 3, 0.45, done);
      });
    } else {
      var targetY2 = CUBE_TOP + h / 2 + 0.5;
      tween(1.5, easeInOutCubic, function (t) {
        active.position.x = lerp(active.position.x, 0, t);
        active.position.z = lerp(active.position.z, 0, t);
        active.position.y = lerp(startY, targetY2, t);
      }, function () {
        rotatePhase(active, 4, 0.45, done);
      });
    }
  }

  // rotate in place (tighten) with tick sounds
  function rotatePhase(active, turns, perTurn, done) {
    var dur = turns * perTurn;
    var rotStart = active.rotation.y;
    var t0 = performance.now();
    var last = 0;
    function frame(now) {
      var t = Math.min(1, (now - t0) / dur);
      var e = 1 - Math.pow(1 - t, 2);
      var rot = rotStart + turns * Math.PI * 2 * e;
      active.rotation.y = rot;
      var tn = Math.floor((rot - rotStart) / (Math.PI * 2));
      if (tn > last) { last = tn; SFX.tick(); }
      if (t < 1) requestAnimationFrame(frame);
      else done();
    }
    requestAnimationFrame(frame);
  }

  // ---------- result handling ----------
  function finishAttempt(idx, entry, outcome, active, dpy, srcPos, srcRot) {
    var isCorrect = entry.correct;
    var after;
    if (isCorrect) {
      world.remove(dpy.mesh);
      disposeObj(dpy.mesh);
      score++;
      SFX.ok();
      if (ui) {
        ui.updateScore(score);
        ui.showFeedback(true, entry.standard);
      }
      after = function () {
        animating = false;
        if (ui) ui.showNext(qIndex < questions.length - 1);
      };
      settle(active, after);
    } else {
      SFX.bad();
      if (ui) ui.showFeedback(false, entry.standard, MODELS.STANDARDS[currentQ.correct]);
      after = function () {
        tween(0.5, easeOutCubic, function (t) {
          active.position.x = lerp(active.position.x, srcPos.x, t);
          active.position.y = lerp(active.position.y, srcPos.y, t);
          active.position.z = lerp(active.position.z, srcPos.z, t);
          active.rotation.x = lerp(active.rotation.x, srcRot.x, t);
          active.rotation.y = lerp(active.rotation.y, srcRot.y, t);
          active.rotation.z = lerp(active.rotation.z, srcRot.z, t);
        }, function () {
          world.remove(active);
          disposeObj(active);
          dpy.mesh.visible = true;
          animating = false;
          if (ui) ui.showNext(qIndex < questions.length - 1);
        });
      };
      if (outcome === 'jam') { SFX.clunk(); shake(active, 0.55, after); }
      else { SFX.loose(); wobble(active, after); }
    }
  }

  function settle(o, done) {
    var base = o.position.y;
    var t0 = performance.now();
    function f(now) {
      var t = (now - t0) / 260;
      if (t >= 1) { o.position.y = base; done(); return; }
      o.position.y = base + Math.sin(t * Math.PI) * 0.05 * (1 - t);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function shake(o, dur, done) {
    var t0 = performance.now();
    var base = o.position.clone();
    function f(now) {
      var t = (now - t0) / dur;
      if (t >= 1) { o.position.copy(base); o.rotation.z = 0; o.rotation.x = 0; done(); return; }
      o.position.x = base.x + Math.sin(t * 40) * 0.03 * (1 - t);
      o.position.y = base.y + Math.sin(t * 55) * 0.02 * (1 - t);
      o.rotation.z = Math.sin(t * 30) * 0.08 * (1 - t);
      o.rotation.x = Math.sin(t * 33) * 0.06 * (1 - t);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function wobble(o, done) {
    var t0 = performance.now();
    var basePos = o.position.clone();
    function f(now) {
      var t = (now - t0) / 700;
      if (t >= 1) {
        o.position.copy(basePos);
        o.rotation.z = 0; o.rotation.x = 0;
        done(); return;
      }
      o.rotation.z = Math.sin(t * 18) * 0.35;
      o.rotation.x = Math.sin(t * 21) * 0.2;
      o.position.x = basePos.x + Math.sin(t * 16) * 0.08;
      o.position.z = basePos.z + Math.cos(t * 14) * 0.06;
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function getChoiceStandard(i) {
    if (!currentQ || !currentQ.entries[i]) return null;
    return currentQ.entries[i].standard;
  }

  return {
    init: function (w) { world = w; },
    setUI: function (u) { ui = u; },
    setResultCb: function (cb) { onResultCb = cb; },
    isBusy: function () { return animating; },
    start: start,
    next: next,
    onSelect: onSelect,
    getChoiceStandard: getChoiceStandard
  };
})();
