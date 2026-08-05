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
  var firstTry = true;

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function easeInOutCubic(t) { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOutCubic(t) { t = clamp01(t); return 1 - Math.pow(1 - t, 3); }
  function easeInCubic(t) { t = clamp01(t); return t * t * t; }

  // shrink & remove an object (wrong answers fade away)
  function fadeOut(o, done) {
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / 340);
      o.scale.setScalar(Math.max(0.001, 1 - easeInCubic(t)));
      if (t < 1) requestAnimationFrame(f);
      else {
        world.remove(o);
        disposeObj(o);
        if (done) done();
      }
    }
    requestAnimationFrame(f);
  }

  function headTop(mesh) {
    var b = new THREE.Box3().setFromObject(mesh);
    return new THREE.Vector3((b.min.x + b.max.x) / 2, b.max.y, (b.min.z + b.max.z) / 2);
  }

  // sparkle burst at a point
  function sparkle(pos, color) {
    var N = 28;
    var geo = new THREE.BufferGeometry();
    var arr = new Float32Array(N * 3);
    var vel = [];
    for (var i = 0; i < N; i++) {
      arr[i * 3] = pos.x; arr[i * 3 + 1] = pos.y; arr[i * 3 + 2] = pos.z;
      var a = Math.random() * Math.PI * 2;
      var e = (Math.random() - 0.5) * Math.PI * 0.9;
      var sp = 1.0 + Math.random() * 1.4;
      vel.push(new THREE.Vector3(Math.cos(a) * Math.cos(e), Math.sin(e) + 0.5, Math.sin(a) * Math.cos(e)).multiplyScalar(sp));
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
    var mat = new THREE.PointsMaterial({ color: color, size: 0.16, transparent: true, opacity: 1, depthWrite: false });
    var pts = new THREE.Points(geo, mat);
    world.add(pts);
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / 720);
      if (t >= 1) { world.remove(pts); disposeObj(pts); return; }
      var p = pts.geometry.attributes.position;
      for (var i = 0; i < N; i++) {
        p.array[i * 3] += vel[i].x * 0.016;
        p.array[i * 3 + 1] += vel[i].y * 0.016 - 0.55 * t * 0.016;
        p.array[i * 3 + 2] += vel[i].z * 0.016;
      }
      p.needsUpdate = true;
      mat.opacity = 1 - t;
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  // expanding ring flash at a point
  function ringFlash(pos, color) {
    var ring = new THREE.Mesh(
      new THREE.RingGeometry(0.22, 0.3, 40),
      new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.position.copy(pos);
    ring.rotation.x = -Math.PI / 2;
    world.add(ring);
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / 460);
      if (t >= 1) { world.remove(ring); disposeObj(ring); return; }
      ring.scale.setScalar(1 + t * 2.6);
      ring.material.opacity = 0.9 * (1 - t);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function tween(dur, ease, step, done) {
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = (now - t0) / (dur * 1000);
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
    firstTry = true;
    currentQ = questions[qIndex];
    var std = MODELS.STANDARDS[currentQ.correct];
    var cube;
    if (cfg.type === 'bolt') {
      cube = MODELS.makeCubeBoltHole(std);
      cube.userData.sectionClip = true;
      world.add(cube);
    } else {
      cube = MODELS.makeCubeRod(std);
      cube.userData.sectionClip = true;
      world.add(cube);
    }
    world.add(MODELS.makeTray());

    displayBolts = [];
    var trayZ = 2.75;
    var K = cfg.choices;
    for (var i = 0; i < K; i++) {
      var e = currentQ.entries[i];
      var mesh;
      if (cfg.type === 'bolt') mesh = MODELS.makeBolt(e.standard, cfg.family);
      else mesh = MODELS.makeNut(e.standard, cfg.family);
      var x = (i - (K - 1) / 2) * 2.8;
      var baseY = (cfg.type === 'bolt') ? 0.16 + e.standard.len : 0.16 + e.standard.d * 0.85 / 2;
      mesh.position.set(x, baseY, trayZ);
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
    if (ui) ui.clearFeedback();
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
  // fly straight up, move sideways over the cube, then screw in (correct)
  // or drop and bounce on top of the cube (wrong). never penetrates the cube.
  function animateBolt(active, dpy, srcPos, srcRot, entry, outcome, idx) {
    var std = entry.standard;
    var topY = CUBE_TOP + std.len + 0.5;
    SFX.whoosh();
    tween(0.55, easeInOutCubic, function (t) {
      active.position.y = lerp(srcPos.y, topY, t);
      active.rotation.y = srcRot.y - t * Math.PI * 3;
    }, function () {
      if (outcome === 'correct') {
        tween(0.55, easeInOutCubic, function (t) {
          active.position.x = lerp(srcPos.x, 0, t);
          active.position.z = lerp(srcPos.z, 0, t);
        }, function () {
          insertBolt(active, std, function () {
            finishAttempt(idx, entry, outcome, active, dpy);
          });
        });
      } else {
        var spot = randCubeSpot();
        tween(0.55, easeInOutCubic, function (t) {
          active.position.x = lerp(srcPos.x, spot.x, t);
          active.position.z = lerp(srcPos.z, spot.z, t);
        }, function () {
          bounceOnCube(active, CUBE_TOP + std.len + 0.02, function () {
            finishAttempt(idx, entry, outcome, active, dpy);
          });
        });
      }
    });
  }

  // screw in: descend while rotating
  function insertBolt(active, std, done) {
    var startY = active.position.y;
    var startRot = active.rotation.y;
    var last = 0;
    tween(1.7, easeInOutCubic, function (t) {
      active.position.y = lerp(startY, CUBE_TOP, t);
      var rot = startRot - t * Math.PI * 2 * 3;
      active.rotation.y = rot;
      var tn = Math.floor((startRot - rot) / (Math.PI * 2));
      if (tn > last) { last = tn; SFX.tick(); }
    }, done);
  }

  // ---------- nut ----------
  function animateNut(active, dpy, srcPos, srcRot, entry, outcome, idx) {
    var std = entry.standard;
    var h = std.d * 0.85;
    // rise high enough that the nut clearly clears the stud protruding from the
    // cube, while keeping the whole rise on screen (rod tip + nut height + margin)
    var rodTip = CUBE_TOP + MODELS.rodProtrude(MODELS.STANDARDS[currentQ.correct]) + 0.21;
    var topY = rodTip + h / 2 + 0.5;
    SFX.whoosh();
    tween(0.55, easeInOutCubic, function (t) {
      active.position.y = lerp(srcPos.y, topY, t);
      active.rotation.y = srcRot.y - t * Math.PI * 3;
    }, function () {
      if (outcome === 'correct') {
        tween(0.55, easeInOutCubic, function (t) {
          active.position.x = lerp(srcPos.x, 0, t);
          active.position.z = lerp(srcPos.z, 0, t);
        }, function () {
          insertNut(active, std, h, function () {
            finishAttempt(idx, entry, outcome, active, dpy);
          });
        });
      } else {
        var spot = randCubeSpot();
        tween(0.55, easeInOutCubic, function (t) {
          active.position.x = lerp(srcPos.x, spot.x, t);
          active.position.z = lerp(srcPos.z, spot.z, t);
        }, function () {
          bounceOnCube(active, CUBE_TOP + h / 2 + 0.02, function () {
            finishAttempt(idx, entry, outcome, active, dpy);
          });
        });
      }
    });
  }

  function insertNut(active, std, h, done) {
    var startY = active.position.y;
    var startRot = active.rotation.y;
    var last = 0;
    tween(1.7, easeInOutCubic, function (t) {
      active.position.y = lerp(startY, CUBE_TOP + h / 2, t);
      var rot = startRot - t * Math.PI * 2 * 3;
      active.rotation.y = rot;
      var tn = Math.floor((startRot - rot) / (Math.PI * 2));
      if (tn > last) { last = tn; SFX.tick(); }
    }, done);
  }

  function randCubeSpot() {
    var sx = Math.random() < 0.5 ? -1 : 1;
    var sz = Math.random() < 0.5 ? -1 : 1;
    return { x: sx * (0.75 + Math.random() * 0.6), z: sz * (0.55 + Math.random() * 0.55) };
  }

  // drop onto the cube top and bounce a little, then stay
  function bounceOnCube(active, landY, done) {
    var startY = active.position.y;
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / 950);
      var e = easeOutCubic(t);
      var bounce = Math.abs(Math.sin(t * Math.PI * 5)) * 0.3 * (1 - t);
      active.position.y = lerp(startY, landY, e) + bounce;
      active.rotation.z = Math.sin(t * Math.PI * 4) * 0.1 * (1 - t);
      active.rotation.x = Math.cos(t * Math.PI * 4) * 0.1 * (1 - t);
      if (t < 1) requestAnimationFrame(f);
      else {
        active.position.y = landY;
        active.rotation.z = 0;
        active.rotation.x = 0;
        done();
      }
    }
    requestAnimationFrame(f);
  }

  // ---------- result handling ----------
  function finishAttempt(idx, entry, outcome, active, dpy) {
    if (entry.correct) {
      world.remove(dpy.mesh);
      disposeObj(dpy.mesh);
      if (firstTry) {
        score++;
        if (ui) ui.updateScore(score);
      }
      SFX.ok();
      if (ui) ui.showFeedback(true, entry.standard);
      var hp = headTop(active);
      sparkle(hp, 0xffe066);
      sparkle(hp, 0x7fffd4);
      ringFlash(hp, 0xfff176);
      ringFlash(hp, 0xffffff);
      settle(active, function () {
        animating = false;
        advanceAfterAnswer();
      });
    } else {
      firstTry = false;
      SFX.bad();
      if (ui) ui.showFeedback(false, entry.standard, MODELS.STANDARDS[currentQ.correct]);
      animating = false;
      fadeOut(active);
    }
  }

  function advanceAfterAnswer() {
    setTimeout(function () { next(); }, 950);
  }

  function settle(o, done) {
    var base = o.position.y;
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      var t = (now - t0) / 260;
      if (t >= 1) { o.position.y = base; done(); return; }
      o.position.y = base + Math.sin(t * Math.PI) * 0.05 * (1 - t);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function getChoiceStandard(i) {
    if (!currentQ || !currentQ.entries[i]) return null;
    return currentQ.entries[i].standard;
  }

  function getCorrectStandard() {
    if (!currentQ) return null;
    return MODELS.STANDARDS[currentQ.correct];
  }

  return {
    init: function (w) { world = w; },
    setUI: function (u) { ui = u; },
    setResultCb: function (cb) { onResultCb = cb; },
    isBusy: function () { return animating; },
    start: start,
    next: next,
    onSelect: onSelect,
    getChoiceStandard: getChoiceStandard,
    getCorrectStandard: getCorrectStandard
  };
})();
