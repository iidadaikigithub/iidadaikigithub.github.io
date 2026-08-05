'use strict';
(function () {
  var THREE = window.THREE;
  var MODELS = window.MODELS;
  var SFX = window.SFX;
  var QUIZ = window.QUIZ;

  // ---------- main renderer ----------
  var canvas = document.getElementById('scene');
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeceef1);
  scene.fog = new THREE.Fog(0xeceef1, 16, 30);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(5.4, 4.8, 7.6);

  var controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 1.8, 0.3);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 3.5;
  controls.maxDistance = 15;
  controls.maxPolarAngle = 1.45;
  controls.update();

  // environment reflections for metal
  (function () {
    var pmrem = new THREE.PMREMGenerator(renderer);
    var es = new THREE.Scene();
    var box = new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6), [
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xe2ebf4 }),
      new THREE.MeshBasicMaterial({ color: 0xccd6df }),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0x93a0aa })
    ]);
    es.add(box);
    var panel = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    panel.position.y = 2.98;
    panel.rotation.x = Math.PI;
    es.add(panel);
    scene.environment = pmrem.fromScene(es, 0.04).texture;
    pmrem.dispose();
  })();

  scene.add(new THREE.HemisphereLight(0xffffff, 0xbfa98a, 0.55));
  var dir = new THREE.DirectionalLight(0xffffff, 1.15);
  dir.position.set(5, 8, 4);
  dir.castShadow = true;
  dir.shadow.mapSize.width = 1024;
  dir.shadow.mapSize.height = 1024;
  dir.shadow.camera.left = -8;
  dir.shadow.camera.right = 8;
  dir.shadow.camera.top = 8;
  dir.shadow.camera.bottom = -8;
  dir.shadow.camera.near = 0.5;
  dir.shadow.camera.far = 30;
  scene.add(dir);
  var fill = new THREE.DirectionalLight(0xd4e2ff, 0.4);
  fill.position.set(-4, 3, -5);
  scene.add(fill);

  var floor = new THREE.Mesh(new THREE.CircleGeometry(9, 48), new THREE.MeshStandardMaterial({ color: 0xdcd5c9, roughness: 0.95 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  var world = new THREE.Group();
  scene.add(world);
  QUIZ.init(world);

  // ---------- preview renderer ----------
  var pvCanvas = document.getElementById('preview');
  var pvRenderer = new THREE.WebGLRenderer({ canvas: pvCanvas, antialias: true, alpha: true });
  pvRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  pvRenderer.setSize(150, 150);
  pvRenderer.outputEncoding = THREE.sRGBEncoding;
  var pvScene = new THREE.Scene();
  pvScene.environment = scene.environment;
  var pvCam = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
  pvCam.position.set(2.4, 1.7, 3.0);
  pvCam.lookAt(0, 0.2, 0);
  pvScene.add(new THREE.DirectionalLight(0xffffff, 1.0));
  pvScene.add(new THREE.HemisphereLight(0xffffff, 0xcccccc, 0.6));
  var pvMesh = null;

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

  function updatePreview() {
    if (pvMesh) { pvScene.remove(pvMesh); disposeObj(pvMesh); }
    var s = MODELS.STANDARDS[4]; // M8
    pvMesh = state.type === 'bolt' ? MODELS.makeBolt(s, state.family) : MODELS.makeNut(s, state.family);
    pvMesh.scale.setScalar(1.6);
    pvScene.add(pvMesh);
  }

  // ---------- state & UI ----------
  var state = { type: 'bolt', count: 10, difficulty: 3, choices: 3, family: 'hex' };

  function $id(x) { return document.getElementById(x); }
  var ids = ['btn-type-bolt', 'btn-type-nut', 'grp-count', 'grp-diff', 'grp-choices', 'grp-family', 'btn-start',
    'diff-label', 'hud-q', 'hud-score', 'hud-msg', 'feedback', 'btn-next', 'btn-exit', 'btn-retry',
    'btn-menu', 'res-score', 'res-msg', 'screen-menu', 'screen-quiz', 'screen-result', 'preview'];
  var el = {};
  ids.forEach(function (id) { el[id] = $id(id); });

  function refreshSelected() {
    el['btn-type-bolt'].classList.toggle('sel', state.type === 'bolt');
    el['btn-type-nut'].classList.toggle('sel', state.type === 'nut');
    el['grp-count'].querySelectorAll('.cnt').forEach(function (b) { b.classList.toggle('sel', +b.textContent === state.count); });
    el['grp-diff'].querySelectorAll('.diff').forEach(function (b) { b.classList.toggle('sel', +b.textContent === state.difficulty); });
    el['grp-choices'].querySelectorAll('.ch').forEach(function (b) { b.classList.toggle('sel', +b.textContent === state.choices); });
    el['grp-family'].querySelectorAll('.fam').forEach(function (b) { b.classList.toggle('sel', b.dataset.fid === state.family); });
    el['diff-label'].textContent = ['かんたん', 'やさしい', 'ふつう', 'むずかしい', 'さいなんいど'][state.difficulty - 1];
  }

  el['btn-type-bolt'].onclick = function () { SFX.init(); SFX.click(); state.type = 'bolt'; buildFamilyButtons(); updatePreview(); refreshSelected(); };
  el['btn-type-nut'].onclick = function () { SFX.init(); SFX.click(); state.type = 'nut'; buildFamilyButtons(); updatePreview(); refreshSelected(); };
  el['grp-count'].querySelectorAll('.cnt').forEach(function (b) { b.onclick = function () { SFX.init(); SFX.click(); state.count = +b.textContent; refreshSelected(); }; });
  el['grp-diff'].querySelectorAll('.diff').forEach(function (b) { b.onclick = function () { SFX.init(); SFX.click(); state.difficulty = +b.textContent; refreshSelected(); }; });
  el['grp-choices'].querySelectorAll('.ch').forEach(function (b) { b.onclick = function () { SFX.init(); SFX.click(); state.choices = +b.textContent; refreshSelected(); }; });

  function buildFamilyButtons() {
    var fams = state.type === 'bolt' ? MODELS.BOLT_FAMILIES : MODELS.NUT_FAMILIES;
    var cont = el['grp-family'];
    cont.innerHTML = '';
    var found = false;
    for (var i = 0; i < fams.length; i++) if (fams[i].id === state.family) found = true;
    if (!found) state.family = fams[0].id;
    fams.forEach(function (f) {
      var b = document.createElement('button');
      b.className = 'opt fam';
      b.dataset.fid = f.id;
      b.textContent = f.name;
      b.onclick = function () { SFX.init(); SFX.click(); state.family = f.id; refreshSelected(); updatePreview(); };
      cont.appendChild(b);
    });
    refreshSelected();
  }

  function castAll(g) {
    g.traverse(function (o) { if (o.isMesh) o.castShadow = true; });
  }

  function showScreen(name) {
    el['screen-menu'].classList.toggle('hidden', name !== 'menu');
    el['screen-quiz'].classList.toggle('hidden', name !== 'quiz');
    el['screen-result'].classList.toggle('hidden', name !== 'result');
    if (name === 'menu') showDemo();
  }

  function showDemo() {
    while (world.children.length) { var o = world.children.pop(); disposeObj(o); }
    var s = MODELS.STANDARDS[4];
    world.add(MODELS.makeCubeBoltHole(s));
    var bolt = MODELS.makeBolt(s, 'hex');
    bolt.position.set(0, MODELS.CUBE_SIZE, 0);
    world.add(bolt);
    world.add(MODELS.makeTray());
    [0, 2, 6].forEach(function (idx, i) {
      var b = MODELS.makeBolt(MODELS.STANDARDS[idx], 'hex');
      b.position.set((i - 1) * 1.15, 0.16, 2.75);
      world.add(b);
    });
    castAll(world);
  }

  el['btn-start'].onclick = function () {
    SFX.init(); SFX.click();
    QUIZ.setUI(ui);
    QUIZ.setResultCb(onResult);
    QUIZ.start(state);
    showScreen('quiz');
  };
  el['btn-exit'].onclick = function () { SFX.init(); SFX.click(); showScreen('menu'); };
  el['btn-retry'].onclick = function () { SFX.init(); SFX.click(); QUIZ.setUI(ui); QUIZ.setResultCb(onResult); QUIZ.start(state); showScreen('quiz'); };
  el['btn-menu'].onclick = function () { SFX.init(); SFX.click(); showScreen('menu'); };

  // ---------- quiz UI ----------
  var ui = {
    onNewQuestion: function (q, total, score) {
      el['hud-q'].textContent = q + ' / ' + total;
      el['hud-score'].textContent = score + 'てん';
      el['hud-msg'].textContent = state.type === 'bolt' ? 'ぴったりはまる ボルトを クリック／タップ！' : 'ぴったりはまる ナットを クリック／タップ！';
      el['feedback'].classList.add('hidden');
      el['feedback'].textContent = '';
      el['btn-next'].classList.add('hidden');
    },
    showFeedback: function (isC, std, correctStd) {
      var f = el['feedback'];
      f.classList.remove('hidden');
      f.textContent = isC ? '◎' : '×';
      f.style.color = isC ? '#35d07f' : '#ff5b4d';
      if (isC) el['hud-msg'].textContent = 'せいかい！ ' + std.id;
      else if (correctStd) el['hud-msg'].textContent = 'まちがい！ こたえは ' + correctStd.id;
    },
    hideFeedback: function () { el['feedback'].classList.add('hidden'); },
    showNext: function (hasMore) {
      var b = el['btn-next'];
      b.textContent = hasMore ? 'つぎへ' : 'けっかへ';
      b.classList.remove('hidden');
      b.onclick = function () { SFX.init(); SFX.click(); QUIZ.next(); };
    },
    hideNext: function () { el['btn-next'].classList.add('hidden'); },
    updateScore: function (s) { el['hud-score'].textContent = s + 'てん'; }
  };

  function onResult(res) {
    el['res-score'].textContent = res.score + ' / ' + res.total;
    var r = res.total > 0 ? res.score / res.total : 0;
    var msgs = [
      'パーフェクト！ すごい！！',
      'とても じょうず！',
      'よく できました！',
      'もう すこし！',
      'れんしゅうしよう！',
      'みるだけでも たのしいね！'
    ];
    var m;
    if (r === 1) m = msgs[0];
    else if (r >= 0.8) m = msgs[1];
    else if (r >= 0.6) m = msgs[2];
    else if (r >= 0.4) m = msgs[3];
    else if (r > 0) m = msgs[4];
    else m = msgs[5];
    el['res-msg'].textContent = m;
    SFX.fanfare();
    showScreen('result');
  }

  // ---------- click / tap bolts in 3D ----------
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  var hovered = null;

  function pickBolt(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var groups = [];
    world.traverse(function (o) { if (o.userData && o.userData.choiceIndex !== undefined) groups.push(o); });
    var hits = raycaster.intersectObjects(groups, true);
    if (hits.length) {
      var p = hits[0].object;
      while (p && p.userData.choiceIndex === undefined) p = p.parent;
      if (p) return p;
    }
    return null;
  }

  canvas.addEventListener('pointerdown', function (e) {
    if (el['screen-quiz'].classList.contains('hidden')) return;
    var target = pickBolt(e);
    if (hovered) { hovered.scale.setScalar(1); hovered = null; }
    if (target) QUIZ.onSelect(target.userData.choiceIndex);
  });

  canvas.addEventListener('pointermove', function (e) {
    if (el['screen-quiz'].classList.contains('hidden')) {
      if (hovered) { hovered.scale.setScalar(1); hovered = null; }
      canvas.style.cursor = 'grab';
      return;
    }
    if (QUIZ.isBusy()) {
      if (hovered) { hovered.scale.setScalar(1); hovered = null; }
      canvas.style.cursor = 'grab';
      return;
    }
    var target = pickBolt(e);
    if (target !== hovered) {
      if (hovered) hovered.scale.setScalar(1);
      hovered = target;
      if (hovered) hovered.scale.setScalar(1.08);
    }
    canvas.style.cursor = hovered ? 'pointer' : 'grab';
  });

  // ---------- resize ----------
  function onResize() {
    var w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);
  onResize();

  window.addEventListener('pointerdown', function () { SFX.init(); });

  // ---------- loop ----------
  var t = 0;
  function loop() {
    requestAnimationFrame(loop);
    t += 0.01;
    if (pvMesh) pvMesh.rotation.y = t * 1.2;
    controls.update();
    renderer.render(scene, camera);
    pvRenderer.render(pvScene, pvCam);
  }

  buildFamilyButtons();
  updatePreview();
  showDemo();
  showScreen('menu');
  loop();
})();
