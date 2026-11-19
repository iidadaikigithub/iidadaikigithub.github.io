/* =========================================================
   2026 CARD DUEL - ゲームロジック
   ========================================================= */
(function () {
  'use strict';
  const { $, esc, toast, fmt, sleep, clamp, shuffle } = CD;

  /* ---------------- sample data (Firestoreが空のとき) ---------------- */
  function svgUrl(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }

  function avatar(emoji, c1, c2) {
    return svgUrl(
      '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">' +
      '<defs><radialGradient id="g" cx="50%" cy="32%" r="78%">' +
      '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></radialGradient>' +
      '<linearGradient id="s" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="rgba(255,255,255,.18)"/><stop offset="1" stop-color="rgba(0,0,0,.45)"/>' +
      '</linearGradient></defs>' +
      '<rect width="512" height="512" fill="url(#g)"/>' +
      '<circle cx="256" cy="240" r="150" fill="rgba(255,255,255,.1)"/>' +
      '<text x="256" y="322" font-size="238" text-anchor="middle" font-family="Segoe UI Emoji,Apple Color Emoji,Noto Color Emoji,sans-serif">' + emoji + '</text>' +
      '<rect width="512" height="512" fill="url(#s)"/>' +
      '</svg>'
    );
  }
  function cardArt(emoji, c1, c2) {
    return svgUrl(
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient>' +
      '<radialGradient id="r" cx="50%" cy="40%" r="60%">' +
      '<stop offset="0" stop-color="rgba(255,255,255,.25)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/>' +
      '</radialGradient></defs>' +
      '<rect width="640" height="480" fill="url(#g)"/>' +
      '<circle cx="320" cy="235" r="150" fill="url(#r)"/>' +
      '<circle cx="320" cy="235" r="120" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="2"/>' +
      '<text x="320" y="310" font-size="200" text-anchor="middle" font-family="Segoe UI Emoji,Apple Color Emoji,Noto Color Emoji,sans-serif">' + emoji + '</text>' +
      '<rect y="360" width="640" height="120" fill="rgba(0,0,0,.42)"/>' +
      '</svg>'
    );
  }

  const SAMPLE_CHARS = [
    { id: 's-char-1', name: '紅蓮の剣士', images: { normal: avatar('🔥', '#ff6a3d', '#3d0716'), attack: avatar('😡', '#ff2d4f', '#2c020c'), hurt: avatar('😵', '#7f3557', '#1c0209') } },
    { id: 's-char-2', name: '蒼の魔導士', images: { normal: avatar('❄️', '#3fa9ff', '#061a3d'), attack: avatar('😠', '#2f7dff', '#03102c'), hurt: avatar('😖', '#3a5e8f', '#040b19') } },
    { id: 's-char-3', name: '森の守護者', images: { normal: avatar('🌿', '#4dffa6', '#04301f'), attack: avatar('😤', '#25c97a', '#022116'), hurt: avatar('😫', '#2f7358', '#02130c') } },
    { id: 's-char-4', name: '雷の拳士', images: { normal: avatar('⚡', '#ffcc5c', '#3d2a02'), attack: avatar('😡', '#ffb020', '#2c1c00'), hurt: avatar('😵', '#7f6420', '#1a1000') } },
  ];

  const SAMPLE_CARDS = [
    { id: 's-card-1', name: '紅蓮斬', atkName: '烈火斬', atk: 140, defName: '火の盾', def: 60, acc: 85, special: 'atk2x', image: cardArt('🔥', '#ff3b64', '#4a0716') },
    { id: 's-card-2', name: '蒼波の盾', atkName: '水鏡', atk: 60, defName: '蒼波の加護', def: 160, acc: 90, special: 'def2x', image: cardArt('🛡️', '#2f7dff', '#041533') },
    { id: 's-card-3', name: '雷鳴撃', atkName: '落雷', atk: 200, defName: '雷紋', def: 40, acc: 75, special: 'enemyDefHalf', image: cardArt('⚡', '#ffcc5c', '#3a2702') },
    { id: 's-card-4', name: '森の癒し', atkName: '木の葉', atk: 40, defName: '生命の環', def: 90, acc: 95, special: 'heal30', image: cardArt('🌿', '#27c97a', '#03251a') },
    { id: 's-card-5', name: '幻影乱舞', atkName: '幻影斬', atk: 120, defName: '陽炎', def: 80, acc: 80, special: 'rest', image: cardArt('🌫️', '#b06bff', '#1e0633') },
    { id: 's-card-6', name: '冥王の呪', atkName: '呪縛', atk: 180, defName: '冥府の帳', def: 70, acc: 70, special: 'enemyAtkHalf', image: cardArt('💀', '#7d3bff', '#160233') },
    { id: 's-card-7', name: '鉄壁の構え', atkName: '体当たり', atk: 50, defName: '鉄壁', def: 220, acc: 85, special: 'none', image: cardArt('🏰', '#8b97b8', '#181d2c') },
    { id: 's-card-8', name: '双星の刃', atkName: '双連撃', atk: 160, defName: '星の守り', def: 100, acc: 90, special: 'none', image: cardArt('✨', '#ff7ad9', '#2a0730') },
  ];

  /* ---------------- state ---------------- */
  const G = {
    settings: CD.normalizeSettings(null),
    chars: [],
    allCards: [],
    cards: [],
    players: [],
    deck: [],
    discard: [],
    turnIdx: 0,
    round: 1,
    busy: true,
    over: false,
    selections: [],
    sampleChars: false,
    sampleCards: false,
    offline: false,
  };
  let uidCounter = 0;
  let bannerTimer = null;
  let resultTimer = null;

  /* ---------------- DOM ---------------- */
  const gameRoot = $('#gameRoot');
  const titleScreen = $('#titleScreen');
  const loadingScreen = $('#loadingScreen');
  const playersBar = $('#playersBar');
  const arena = $('#arena');
  const deckPile = $('#deckPile');
  const deckCountEl = $('#deckCount');
  const deckNum = $('#deckNum');
  const deckStackEl = deckPile.querySelector('.deck-stack');
  const deckFaceEl = deckStackEl.querySelector('.deck-face');

  /* DECKの束：残り枚数ぶんのカードを重ねて表示（多すぎるときは上限まで） */
  const MAX_DECK_LAYERS = 20;
  const deckLayers = [];
  for (let i = 0; i < MAX_DECK_LAYERS; i++) {
    const layer = document.createElement('i');
    layer.className = 'deck-layer';
    deckStackEl.insertBefore(layer, deckFaceEl);
    deckLayers.push(layer);
  }
  const heroWrap = $('#heroWrap');
  const heroName = $('#heroName');
  const heroImg = $('#heroImg');
  const heroFoot = $('#heroFoot');
  const cornerWrap = $('#cornerWrap');
  const cardStage = $('#cardStage');
  const cardStageInner = $('#cardStageInner');
  const fxLayer = $('#fxLayer');
  const banner = $('#banner');
  const logBox = $('#log');
  const flashEl = $('#flash');
  const actDraw = $('#actDraw');
  const actDefend = $('#actDefend');
  const actSpecial = $('#actSpecial');

  function face(char, kind) { return CD.faceData(char, kind); }
  function activePlayer() { return G.players[G.turnIdx]; }

  function log(msg) {
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = msg;
    logBox.appendChild(line);
    while (logBox.children.length > 80) logBox.removeChild(logBox.firstChild);
    logBox.scrollTop = logBox.scrollHeight;
  }

  function showLoading(on) { loadingScreen.classList.toggle('hidden', !on); }

  /* ---------------- sound ---------------- */
  function paintSound() {
    document.querySelectorAll('.sound-toggle').forEach(b => {
      b.textContent = CD.SFX.isMuted() ? '🔇' : '🔊';
      b.classList.toggle('off', CD.SFX.isMuted());
    });
  }
  document.querySelectorAll('.sound-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      CD.SFX.setMuted(!CD.SFX.isMuted());
      CD.SFX.click();
      paintSound();
    });
  });
  paintSound();

  /* ---------------- init ---------------- */
  async function init() {
    showLoading(true);
    let failed = false;
    if (CD.db) {
      try {
        const [cs, ks, ss] = await Promise.all([
          CD.db.collection('characters').get(),
          CD.db.collection('cards').get(),
          CD.db.collection('settings').doc('game').get(),
        ]);
        G.chars = cs.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(c => c && c.name && c.images);
        G.allCards = ks.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(c => c && c.name);
        G.settings = CD.normalizeSettings(ss.exists ? ss.data() : null);
      } catch (e) {
        console.error('[init]', e);
        failed = true;
        G.offline = true;
      }
    } else {
      failed = true;
      G.offline = true;
    }

    if (!G.chars.length) { G.chars = SAMPLE_CHARS.slice(); G.sampleChars = true; }
    if (!G.allCards.length) { G.allCards = SAMPLE_CARDS.slice(); G.sampleCards = true; }

    G.cards = G.allCards.filter(c => !G.settings.excluded.includes(c.id));
    if (!G.cards.length) G.cards = G.allCards.slice();

    G.selections = Array.from({ length: G.settings.playerCount }, (_, i) => i % G.chars.length);
    buildTitle();
    showLoading(false);

    const note = $('#sampleNote');
    if (failed) {
      note.classList.remove('hidden');
      note.textContent = '⚠ Firestore に接続できませんでした。サンプルデータでオフライン動作しています。保存機能を使うには Firebase のルールを確認してください。';
    } else if (G.sampleChars || G.sampleCards) {
      note.classList.remove('hidden');
      note.textContent = '登録データが空のため、サンプルキャラクター・カードで起動しています。player.html / cardsakusei.html で作成するとゲームに反映されます。';
    }
  }

  /* ---------------- title ---------------- */
  function buildTitle() {
    const chips = [
      G.settings.playerCount + '人プレイ',
      'デッキ ' + G.settings.deckSize + '枚',
      '体力 ' + fmt(G.settings.hp),
      '毎ターン ' + G.settings.drawCount + '枚ドロー',
    ];
    $('#ruleSummary').innerHTML = chips.map(t => '<span>' + esc(t) + '</span>').join('');

    const box = $('#charPick');
    box.style.setProperty('--n', G.settings.playerCount);
    box.innerHTML = '';
    for (let i = 0; i < G.settings.playerCount; i++) {
      const slot = document.createElement('div');
      slot.className = 'pick-slot';
      slot.dataset.p = i;
      slot.innerHTML =
        '<div class="pick-title">PLAYER ' + (i + 1) + '</div>' +
        '<div class="pick-preview"><img alt=""><div class="pick-prev-info"><b></b><span>SELECT CHARACTER</span></div></div>' +
        '<div class="pick-grid"></div>';
      box.appendChild(slot);
      paintPickSlot(i);
    }
  }

  function paintPickSlot(i) {
    const slot = $('#charPick .pick-slot[data-p="' + i + '"]');
    if (!slot) return;
    const ch = G.chars[G.selections[i]] || G.chars[0];
    slot.querySelector('.pick-preview img').src = face(ch, 'normal');
    slot.querySelector('.pick-prev-info b').textContent = ch.name;

    const grid = slot.querySelector('.pick-grid');
    grid.innerHTML = G.chars.map((c, ci) => {
      const sel = ci === G.selections[i] ? ' selected' : '';
      return '<button class="pick-char' + sel + '" data-ci="' + ci + '">' +
        '<img src="' + face(c, 'normal') + '" alt="">' +
        '<span>' + esc(c.name) + '</span></button>';
    }).join('');

    grid.querySelectorAll('.pick-char').forEach(btn => {
      btn.addEventListener('click', () => {
        G.selections[i] = Number(btn.dataset.ci);
        CD.SFX.click();
        paintPickSlot(i);
      });
    });
  }

  /* ---------------- game start ---------------- */
  function startGame() {
    if (!G.chars.length) { toast('キャラクターがありません', 'error'); return; }
    if (!G.cards.length) { toast('使用できるカードがありません。設定を確認してください。', 'error'); return; }

    G.players = G.selections.map((ci, i) => {
      const ch = G.chars[ci] || G.chars[0];
      const hp = G.settings.hp;
      return {
        idx: i,
        name: ch.name,
        char: ch,
        hp: hp,
        maxHp: Math.max(1, hp),
        guard: 0,
        current: null,
        cardUsed: false,
        specialUsed: false,
        atk2x: false,
        def2x: false,
        atkHalf: false,
        defHalf: false,
        accUp: false,
        accDown: false,
        skip: false,
        alive: true,
      };
    });

    G.turnIdx = 0;
    G.round = 1;
    G.over = false;
    G.busy = true;
    G.discard = [];
    G.deck = buildDeck();

    titleScreen.classList.add('hidden');
    gameRoot.classList.remove('hidden');
    hideModal('#resultModal');
    clearTimeout(resultTimer);

    renderPlayersBar();
    renderDeck();
    renderCardStage();
    updateHUD();
    updateCommands();

    heroWrap.classList.add('hidden');
    heroWrap.classList.remove('leave', 'enter');
    cornerWrap.classList.add('hidden');
    logBox.innerHTML = '';

    log('🎮 ゲーム開始 — ' + G.players.length + '人 / 体力 ' + fmt(G.settings.hp) + ' / デッキ ' + G.deck.length + '枚 / 毎ターン' + G.settings.drawCount + '枚ドロー');
    if (G.players.length === 1) log('※ 1人プレイはソロ練習モードです（敵なし）');

    setTimeout(beginTurn, 950);
  }

  /* ---------------- deck ---------------- */
  function cloneCard(c) {
    return Object.assign({}, c, { uid: 'c' + (++uidCounter) });
  }

  function buildDeck() {
    const pool = G.cards.slice();
    const out = [];
    if (!pool.length) return out;
    const size = Math.max(1, G.settings.deckSize);
    while (out.length < size) {
      const batch = shuffle(pool.slice());
      for (const c of batch) {
        if (out.length >= size) break;
        out.push(cloneCard(c));
      }
    }
    return shuffle(out);
  }

  function renderDeck() {
    deckCountEl.textContent = G.deck.length;
    deckNum.textContent = G.deck.length;
    deckPile.classList.toggle('empty', G.deck.length === 0);
    renderDeckStack();
  }

  let lastDeckCount = -1;
  function renderDeckStack() {
    const n = Math.min(G.deck.length, MAX_DECK_LAYERS);
    const back = Math.max(0, n - 1); // 一番上のカード(DECKの面)を除いた枚数
    deckLayers.forEach((layer, k) => {
      const depth = back - k;
      if (depth >= 1) {
        layer.style.visibility = 'visible';
        layer.style.setProperty('--i', String(depth));
      } else {
        layer.style.visibility = 'hidden';
      }
    });
    deckFaceEl.style.visibility = G.deck.length > 0 ? 'visible' : 'hidden';

    if (lastDeckCount >= 0 && G.deck.length < lastDeckCount) {
      deckPile.classList.remove('bump');
      void deckPile.offsetWidth;
      deckPile.classList.add('bump');
      clearTimeout(deckPile._bumpTimer);
      deckPile._bumpTimer = setTimeout(() => deckPile.classList.remove('bump'), 460);
    }
    lastDeckCount = G.deck.length;
  }

  function drawFromDeck() {
    if (!G.deck.length) {
      G.deck = buildDeck();
      log('🔄 デッキが尽きたため再構築しました');
      renderDeck();
    }
    const c = G.deck.shift() || null;
    renderDeck();
    return c;
  }

  /* ---------------- turn ---------------- */
  async function beginTurn() {
    if (G.over) return;
    const p = activePlayer();
    if (!p) return;
    if (!p.alive) { await endTurn(); return; }

    p.guard = 0;
    G.busy = true;
    $('#turnNumP').textContent = 'P' + (p.idx + 1);
    updateHUD();
    renderCardStage();
    updateCommands();

    log('▼ PLAYER ' + (p.idx + 1) + ' / ' + p.name + ' のターン');
    showBanner(p.name + 'のターンです', 'PLAYER ' + (p.idx + 1), 2000);
    CD.SFX.turn();

    await showHero(p);
    if (G.over) return;
    // 「○○のターンです」を読み終えるまで操作を待つ
    await sleep(800);
    G.busy = false;
    updateHUD();
    updateCommands();
  }

  async function showHero(p) {
    heroImg.src = face(p.char, 'normal');
    heroName.textContent = p.name;
    heroFoot.innerHTML = '<span>HP</span> <b>' + fmt(p.hp) + '</b> <i>/ ' + fmt(p.maxHp) + '</i>';
    heroWrap.classList.remove('hidden', 'leave');
    heroWrap.classList.add('enter');
    await sleep(800);
    heroWrap.classList.remove('enter');
  }

  function positionHeroLeaveTarget() {
    const ar = arena.getBoundingClientRect();
    const hr = heroWrap.getBoundingClientRect();
    const hx = hr.left - ar.left + hr.width / 2;
    const hy = hr.top - ar.top + hr.height / 2;
    const tx = ar.width - 95;
    const ty = 50;
    heroWrap.style.setProperty('--dx', (tx - hx) + 'px');
    heroWrap.style.setProperty('--dy', (ty - hy) + 'px');
  }

  async function hideHero(p) {
    if (heroWrap.classList.contains('hidden')) {
      showCorner(p);
      return;
    }
    positionHeroLeaveTarget();
    heroWrap.classList.add('leave');
    await sleep(750);
    heroWrap.classList.add('hidden');
    heroWrap.classList.remove('leave', 'enter');
    showCorner(p);
  }

  function showCorner(p) {
    if (!p) { cornerWrap.classList.add('hidden'); return; }
    cornerWrap.innerHTML = '<img src="' + face(p.char, 'normal') + '" alt="">' +
      '<div><b>' + esc(p.name) + '</b><span>PLAYER ' + (p.idx + 1) + '</span></div>';
    cornerWrap.classList.remove('hidden', 'pop');
    void cornerWrap.offsetWidth;
    cornerWrap.classList.add('pop');
  }

  /* ---------------- draw action ---------------- */
  async function doDraw() {
    if (G.busy || G.over) return;
    const p = activePlayer();
    if (!p || !p.alive) return;

    G.busy = true;
    updateCommands();
    CD.SFX.click();

    if (p.current) {
      const oldName = p.current.name;
      G.discard.push(p.current);
      p.current = null;
      p.cardUsed = false;
      p.specialUsed = false;
      renderCardStage();
      log('♻ ' + p.name + ' は前回のカード「' + oldName + '」を捨てた');
      await sleep(420);
    }

    const n = G.settings.drawCount;
    for (let i = 0; i < n; i++) {
      if (G.over || !p.alive) break;
      const card = drawFromDeck();
      if (!card) break;

      await animateDraw(card);
      p.current = card;
      p.cardUsed = false;
      p.specialUsed = false;
      renderCardStage();
      CD.SFX.flip();
      log('🎴 ' + p.name + ' が「' + card.name + '」を引いた（攻' + fmt(card.atk) + ' / 防' + fmt(card.def) + ' / 命' + CD.accOf(card) + '%）');
      await sleep(320);

      await performAttack(p, card);
      if (G.over || !p.alive) break;

      const mul = (p.def2x ? 2 : 1) * (p.defHalf ? 0.5 : 1);
      const gain = Math.round((Number(card.def) || 0) * mul);
      if (gain > 0) {
        p.guard += gain;
        updateHUD();
        const pos = heroCenter();
        popNumber(pos.x, pos.y, '防 +' + fmt(gain), 'blk');
        CD.SFX.shield();
        await sleep(400);
      }
      await sleep(200);
    }

    p.atk2x = false;
    p.atkHalf = false;
    p.accUp = false;
    p.accDown = false;
    p.skip = false;
    p.def2x = false;
    p.defHalf = false;

    updateHUD();
    updateCommands();
    if (G.over) return;
    await endTurn();
  }

  /* ---------------- attack ---------------- */
  async function performAttack(p, card) {
    const targets = G.players.filter(o => o !== p && o.alive);
    const atkMul = (p.atk2x ? 2 : 1) * (p.atkHalf ? 0.5 : 1);
    const atk = Math.round((Number(card.atk) || 0) * atkMul);
    const baseAcc = CD.accOf(card);
    const accMod = (p.accUp ? CD.ACC_STEP : 0) - (p.accDown ? CD.ACC_STEP : 0);
    const acc = clamp(baseAcc + accMod, CD.ACC_MIN, CD.ACC_MAX);

    if (!targets.length) {
      if (atk > 0) log('（相手がいないため攻撃は空振り）');
      return false;
    }
    if (p.skip || atk <= 0) {
      CD.SFX.debuff();
      showBanner('一回休み…', p.name, 1500);
      log('😴 ' + p.name + ' は一回休み。攻撃できない');
      await sleep(1150);
      return false;
    }
    if (acc !== baseAcc) {
      log('🎯 ' + p.name + ' の命中率 ' + baseAcc + '% → ' + acc + '%');
    }

    heroImg.src = face(p.char, 'attack');
    heroWrap.classList.remove('lunge');
    void heroWrap.offsetWidth;
    heroWrap.classList.add('lunge');

    for (const t of targets) {
      if (!t.alive || !p.alive || G.over) break;
      if (Math.random() * 100 >= acc) {
        await missAttack(p, t, acc);
        continue;
      }
      await strike(p, t, atk);
    }

    heroImg.src = face(p.char, 'normal');
    heroWrap.classList.remove('lunge');
    return true;
  }

  async function missAttack(p, t, acc) {
    const panel = playersBar.children[t.idx];
    if (!panel) return;
    const ar = arena.getBoundingClientRect();
    const r = panel.getBoundingClientRect();
    const x = clamp(r.left - ar.left + r.width / 2, 70, Math.max(70, ar.width - 70));
    const y = clamp(r.top - ar.top + r.height / 2, 40, Math.max(40, ar.height - 40));

    CD.SFX.whoosh();
    popNumber(x, y, 'MISS', 'miss');
    shakeNode(panel, 'shake-soft');
    log('💨 ' + p.name + ' の攻撃は ' + t.name + ' に外れた（命中率 ' + acc + '%）');
    await sleep(620);
  }

  async function strike(p, t, atk) {
    const targetNode = playersBar.children[t.idx];
    if (!targetNode) return;

    const beforeGuard = t.guard;
    let blocked = 0, dmg = 0, reflect = 0;
    if (beforeGuard > 0) {
      if (beforeGuard >= atk) {
        blocked = atk;
        reflect = beforeGuard - atk;
        t.guard = 0;
      } else {
        blocked = beforeGuard;
        t.guard = 0;
        dmg = atk - beforeGuard;
      }
    } else {
      dmg = atk;
    }

    CD.SFX.whoosh();
    await slashTo(targetNode);

    const portrait = spawnPortrait(t);
    flashPanelFace(t, 'hurt', 1800);
    shakeNode(targetNode, 'shake-hard');
    flashScreen();
    shakeNode(arena, dmg > 0 ? 'shake-hard' : 'shake-soft');

    const pos = nodeCenter(portrait);

    if (blocked > 0) {
      CD.SFX.block();
      popNumber(pos.x - Math.min(70, pos.x * 0.2), pos.y - 6, '防 ' + fmt(blocked), 'blk');
      burst(pos.x, pos.y, 'blue');
      if (dmg === 0) log('防 ' + t.name + ' が攻撃を完全に防いだ');
    }

    if (dmg > 0) {
      CD.SFX.hit();
      popNumber(pos.x + 34, pos.y, '-' + fmt(dmg), 'dmg');
      await damage(t, dmg);
      if (dmg >= Math.max(1000, t.maxHp * 0.2)) {
        CD.SFX.bigHit();
        flashScreen();
        shakeNode(arena, 'shake-hard');
      }
      log('💥 ' + t.name + ' に ' + fmt(dmg) + ' ダメージ！（残りHP ' + fmt(t.hp) + '）');
    }

    if (reflect > 0 && p.alive) {
      CD.SFX.clash();
      burst(pos.x, pos.y, 'blue');
      popNumber(pos.x, pos.y - 74, 'カウンター！', 'counter');
      await sleep(340);
      if (p.alive) {
        const hp = heroCenter();
        popNumber(hp.x, hp.y, '-' + fmt(reflect), 'dmg');
        flashPanelFace(p, 'hurt', 1600);
        await damage(p, reflect);
        log('⚡ ' + t.name + ' の防御が攻撃を上回り、' + p.name + ' に ' + fmt(reflect) + ' 反撃！');
      }
    }

    updateHUD();
    await sleep(dmg > 0 || reflect > 0 ? 780 : 500);
  }

  /* ---------------- damage ---------------- */
  async function damage(t, amount) {
    if (!t || amount <= 0) return;
    t.hp = Math.max(0, t.hp - amount);
    updateHUD();

    if (t.hp <= 0 && t.alive) {
      t.alive = false;
      t.guard = 0;
      t.current = null;
      t.atk2x = false;
      t.def2x = false;
      t.atkHalf = false;
      t.defHalf = false;
      t.accUp = false;
      t.accDown = false;
      t.skip = false;
      const panel = playersBar.children[t.idx];
      if (panel) panel.classList.add('dead');
      log('💀 ' + t.name + ' は倒れた');
      showBanner('K.O.', t.name, 2200);
      CD.SFX.bigHit();
      updateHUD();
      await sleep(750);
      checkGameOver();
    }
  }

  function checkGameOver() {
    if (G.over) return true;
    if (G.settings.playerCount <= 1) return false;
    const alive = G.players.filter(p => p.alive);
    if (alive.length <= 1) {
      endGame(alive[0] || null);
      return true;
    }
    return false;
  }

  /* ---------------- defend ---------------- */
  async function doDefend() {
    if (G.busy || G.over) return;
    const p = activePlayer();
    if (!p || !p.current || p.cardUsed) return;

    G.busy = true;
    updateCommands();
    CD.SFX.click();
    p.cardUsed = true;

    const mul = (p.def2x ? 2 : 1) * (p.defHalf ? 0.5 : 1);
    const amount = Math.round((Number(p.current.def) || 0) * 2 * mul);
    p.guard = amount;
    p.def2x = false;
    p.defHalf = false;

    CD.SFX.shield();
    showBanner('DEFEND', '防御力 ' + fmt(amount), 1900);
    auraAtHero('blue');
    const pos = heroCenter();
    popNumber(pos.x, pos.y, '防 ' + fmt(amount), 'blk');
    log('防 ' + p.name + ' は防御！「' + p.current.name + '」の防御力が2倍 → ' + fmt(amount));
    updateHUD();
    updateCommands();
    renderCardStage();

    await sleep(1750);
    if (G.over) return;
    await endTurn();
  }

  /* ---------------- special ---------------- */
  async function doSpecial() {
    if (G.busy || G.over) return;
    const p = activePlayer();
    if (!p || !p.current || p.cardUsed) return;
    const eff = p.current.special;
    if (!eff || eff === 'none' || p.specialUsed) return;

    G.busy = true;
    updateCommands();
    p.cardUsed = true;
    p.specialUsed = true;

    CD.SFX.special();
    showBanner('SPECIAL', CD.specialShort(eff), 1900);
    auraAtHero('');
    applySpecial(p, eff);
    updateHUD();
    renderCardStage();
    updateCommands();

    await sleep(1800);
    if (G.over) return;
    await endTurn();
  }

  function applySpecial(p, eff) {
    const opps = G.players.filter(o => o !== p && o.alive);
    switch (eff) {
      case 'rest':
        opps.forEach(o => { o.skip = true; });
        log('✨ ' + p.name + ' の特殊効果：相手は次の攻撃が一回休み！');
        break;
      case 'atk2x':
        p.atk2x = true;
        log('✨ ' + p.name + ' の特殊効果：次のターン攻撃力2倍！');
        break;
      case 'def2x':
        p.def2x = true;
        log('✨ ' + p.name + ' の特殊効果：次のターン防御力2倍！');
        break;
      case 'enemyAtkHalf':
        opps.forEach(o => { o.atkHalf = true; });
        log('✨ ' + p.name + ' の特殊効果：相手の次の攻撃力が半分に！');
        break;
      case 'enemyDefHalf':
        opps.forEach(o => { o.defHalf = true; });
        log('✨ ' + p.name + ' の特殊効果：相手の次の防御力が半分に！');
        break;
      case 'accUp':
        p.accUp = true;
        log('✨ ' + p.name + ' の特殊効果：次の攻撃の命中率が +' + CD.ACC_STEP + '%！');
        break;
      case 'accDown':
        opps.forEach(o => { o.accDown = true; });
        log('✨ ' + p.name + ' の特殊効果：相手の次の攻撃の命中率が -' + CD.ACC_STEP + '%！');
        break;
      case 'heal30':
      case 'heal50': {
        const heal = Math.round(p.maxHp * (eff === 'heal50' ? 0.5 : 0.3));
        const before = p.hp;
        p.hp = Math.min(p.maxHp, p.hp + heal);
        const real = p.hp - before;
        const pos = heroCenter();
        popNumber(pos.x, pos.y, '+' + fmt(real), 'heal');
        auraAtHero('green');
        CD.SFX.heal();
        log('✨ ' + p.name + ' の特殊効果：' + fmt(real) + ' HP回復！');
        break;
      }
    }
  }

  /* ---------------- turn end ---------------- */
  async function endTurn() {
    if (G.over) return;
    const p = activePlayer();
    G.busy = true;
    updateCommands();
    await hideHero(p);
    if (G.over) return;

    const next = nextAliveIndex(G.turnIdx);
    if (next <= G.turnIdx) G.round++;
    G.turnIdx = next;
    updateHUD();
    await sleep(520);
    beginTurn();
  }

  function nextAliveIndex(from) {
    for (let i = 1; i <= G.players.length; i++) {
      const idx = (from + i) % G.players.length;
      if (G.players[idx].alive) return idx;
    }
    return from;
  }

  /* ---------------- HUD ---------------- */
  function updateHUD() {
    if (!G.players.length) return;
    G.players.forEach(p => {
      const panel = playersBar.children[p.idx];
      if (!panel) return;
      panel.classList.toggle('active', p.idx === G.turnIdx && !G.over);
      panel.classList.toggle('dead', !p.alive);

      const hpBar = panel.querySelector('.hpbar');
      hpBar.classList.toggle('low', p.maxHp > 0 && p.hp / p.maxHp <= .25);
      hpBar.querySelector('i').style.width = clamp((p.hp / p.maxHp) * 100, 0, 100) + '%';
      panel.querySelector('.hpnum').textContent = fmt(p.hp) + ' / ' + fmt(p.maxHp);

      const gb = panel.querySelector('.guardbadge');
      gb.textContent = '防 ' + fmt(p.guard);
      gb.classList.toggle('on', p.guard > 0);

      const buffs = [];
      if (p.atk2x) buffs.push('攻×2');
      if (p.def2x) buffs.push('防×2');
      if (p.atkHalf) buffs.push('攻½');
      if (p.defHalf) buffs.push('防½');
      if (p.accUp) buffs.push('命↑');
      if (p.accDown) buffs.push('命↓');
      if (p.skip) buffs.push('😴');
      if (p.current && p.current.special && p.current.special !== 'none' && !p.specialUsed) buffs.push('✨');
      panel.querySelector('.buffs').innerHTML = buffs.map(b => '<span>' + b + '</span>').join('');
    });

    $('#roundNum').textContent = G.round;
    deckCountEl.textContent = G.deck.length;
    deckNum.textContent = G.deck.length;

    const p = activePlayer();
    if (p) {
      $('#turnNumP').textContent = 'P' + (p.idx + 1);
      heroFoot.innerHTML = '<span>HP</span> <b>' + fmt(p.hp) + '</b> <i>/ ' + fmt(p.maxHp) + '</i>';
    }
  }

  function renderPlayersBar() {
    playersBar.innerHTML = '';
    playersBar.style.setProperty('--n', G.players.length);
    G.players.forEach(p => {
      const panel = document.createElement('div');
      panel.className = 'pcard';
      panel.dataset.idx = p.idx;
      panel.innerHTML =
        '<div class="pface"><img alt=""></div>' +
        '<div class="pmeta">' +
          '<div class="prow"><span class="pname">' + esc(p.name) + '</span><span class="ptag">P' + (p.idx + 1) + '</span></div>' +
          '<div class="hpbar"><i></i></div>' +
          '<div class="hprow"><span class="hpnum">0</span><span class="guardbadge">防 0</span></div>' +
          '<div class="buffs"></div>' +
        '</div>';
      panel.querySelector('.pface img').src = face(p.char, 'normal');
      playersBar.appendChild(panel);
    });
    updateHUD();
  }

  function renderCardStage() {
    const p = activePlayer();
    const card = p ? p.current : null;
    cardStage.classList.toggle('empty', !card);
    cardStage.classList.toggle('used', !!(card && p.cardUsed));
    if (!card) {
      cardStageInner.innerHTML = '<div class="card-empty">前回のカード<br><span>なし</span></div>';
      return;
    }
    cardStageInner.innerHTML = '';
    cardStageInner.appendChild(cardEl(card));
  }

  function cardEl(card) {
    const node = document.createElement('div');
    node.className = 'gcard';
    const img = card.image
      ? '<img class="gcard-img" src="' + card.image + '" alt="">'
      : '<div class="gcard-img placeholder">NO IMAGE</div>';
    const sp = (card.special && card.special !== 'none')
      ? '<div class="gcard-special">✨ ' + esc(CD.specialShort(card.special)) + '</div>'
      : '';
    node.innerHTML = img +
      '<div class="gcard-body">' +
        '<div class="gcard-name">' + esc(card.name) + '</div>' +
        '<div class="gcard-stat atk"><span>攻 ' + esc(card.atkName || '攻撃') + '</span><b>' + fmt(card.atk) + '</b></div>' +
        '<div class="gcard-stat def"><span>防 ' + esc(card.defName || '防御') + '</span><b>' + fmt(card.def) + '</b></div>' +
        '<div class="gcard-stat acc"><span>命中率</span><b>' + CD.accOf(card) + '%</b></div>' +
        sp +
      '</div>';
    return node;
  }

  /* ---------------- animations ---------------- */
  // タブが非表示のとき WAAPI の完了通知が来ないことがあるため、保険のタイマーと競争させる
  function animDone(anim, fallbackMs) {
    return Promise.race([
      anim.finished.catch(() => { }),
      sleep(fallbackMs),
    ]);
  }

  async function animateDraw(card) {
    CD.SFX.draw();
    const ghost = document.createElement('div');
    ghost.className = 'draw-ghost';
    ghost.appendChild(cardEl(card));
    document.body.appendChild(ghost);

    const dr = deckPile.getBoundingClientRect();
    const sr = cardStage.getBoundingClientRect();
    const x0 = dr.left + dr.width / 2;
    const y0 = dr.top + dr.height / 2;
    const x1 = sr.left + sr.width / 2;
    const y1 = sr.top + sr.height / 2;
    ghost.style.left = x0 + 'px';
    ghost.style.top = y0 + 'px';
    ghost.style.width = sr.width + 'px';

    const anim = ghost.animate([
      { transform: 'translate(-50%,-50%) rotate(-10deg) scale(.3)', opacity: .15, filter: 'blur(2px)' },
      {
        transform: 'translate(calc(-50% + ' + ((x1 - x0) * .55) + 'px), calc(-50% + ' + ((y1 - y0) * .55 - 70) + 'px)) rotate(190deg) scale(1.16)',
        opacity: 1, filter: 'blur(0px)', offset: .65
      },
      { transform: 'translate(calc(-50% + ' + (x1 - x0) + 'px), calc(-50% + ' + (y1 - y0) + 'px)) rotate(360deg) scale(1)', opacity: 1 }
    ], { duration: 1000, easing: 'cubic-bezier(.2,.8,.2,1)' });

    try { await animDone(anim, 1500); } catch (e) { }
    ghost.remove();

    cardStage.classList.remove('land');
    void cardStage.offsetWidth;
    cardStage.classList.add('land');
    setTimeout(() => cardStage.classList.remove('land'), 800);
  }

  async function slashTo(targetNode) {
    const ar = arena.getBoundingClientRect();
    const hr = heroImg.getBoundingClientRect();
    const tr = targetNode.getBoundingClientRect();
    const x0 = hr.left - ar.left + hr.width / 2;
    const y0 = hr.top - ar.top + hr.height / 2;
    const x1 = tr.left - ar.left + tr.width / 2;
    const y1 = tr.top - ar.top + tr.height / 2;
    const dx = x1 - x0;
    const dy = y1 - y0;
    const dist = Math.max(40, Math.hypot(dx, dy));
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;

    const s = document.createElement('div');
    s.className = 'slash';
    s.style.left = x0 + 'px';
    s.style.top = y0 + 'px';
    s.style.width = dist + 'px';
    s.style.transform = 'rotate(' + ang + 'deg) scaleX(0)';
    fxLayer.appendChild(s);

    const anim = s.animate([
      { transform: 'rotate(' + ang + 'deg) scaleX(0)', opacity: .35 },
      { transform: 'rotate(' + ang + 'deg) scaleX(1)', opacity: 1 }
    ], { duration: 440, easing: 'cubic-bezier(.3,0,.7,1)' });

    try { await animDone(anim, 800); } catch (e) { }
    s.remove();
  }

  function spawnPortrait(t) {
    const panel = playersBar.children[t.idx];
    if (!panel) return fxLayer;
    const pr = panel.getBoundingClientRect();
    const ar = arena.getBoundingClientRect();
    const x = clamp(pr.left - ar.left + pr.width / 2, 110, ar.width - 110);

    const node = document.createElement('div');
    node.className = 'hit-portrait';
    node.style.left = x + 'px';
    node.innerHTML = '<img src="' + face(t.char, 'hurt') + '" alt="">' +
      '<div class="hit-name">' + esc(t.name) + '</div>';
    fxLayer.appendChild(node);

    setTimeout(() => {
      node.classList.add('out');
      setTimeout(() => node.remove(), 700);
    }, 1700);
    return node;
  }

  function nodeCenter(node) {
    const ar = arena.getBoundingClientRect();
    const r = node.getBoundingClientRect();
    return { x: r.left - ar.left + r.width / 2, y: r.top - ar.top + r.height / 2 };
  }

  function heroCenter() {
    const ar = arena.getBoundingClientRect();
    const r = heroImg.getBoundingClientRect();
    return { x: r.left - ar.left + r.width / 2, y: r.top - ar.top + r.height / 2 };
  }

  function flashPanelFace(p, kind, ms) {
    const panel = playersBar.children[p.idx];
    if (!panel) return;
    const img = panel.querySelector('.pface img');
    if (!img) return;
    const normal = face(p.char, 'normal');
    img.src = face(p.char, kind);
    clearTimeout(img._faceTimer);
    img._faceTimer = setTimeout(() => {
      if (p.alive) img.src = normal;
    }, ms || 1500);
  }

  function shakeNode(node, cls) {
    if (!node) return;
    node.classList.remove('shake-soft', 'shake-hard');
    void node.offsetWidth;
    node.classList.add(cls);
    setTimeout(() => node.classList.remove(cls), 900);
  }

  function flashScreen() {
    flashEl.classList.remove('on');
    void flashEl.offsetWidth;
    flashEl.classList.add('on');
  }

  function popNumber(x, y, text, cls) {
    const n = document.createElement('div');
    n.className = 'pop-num ' + cls;
    n.textContent = text;
    n.style.left = x + 'px';
    n.style.top = y + 'px';
    fxLayer.appendChild(n);
    setTimeout(() => n.remove(), 2400);
  }

  function burst(x, y, color) {
    const b = document.createElement('div');
    b.className = 'burst ' + color;
    b.style.left = x + 'px';
    b.style.top = y + 'px';
    fxLayer.appendChild(b);
    setTimeout(() => b.remove(), 1200);
  }

  function auraAtHero(kind) {
    const pos = heroCenter();
    const a = document.createElement('div');
    a.className = 'aura ' + kind;
    a.style.left = pos.x + 'px';
    a.style.top = pos.y + 'px';
    fxLayer.appendChild(a);
    setTimeout(() => a.remove(), 1700);
  }

  function showBanner(main, sub, ms) {
    banner.innerHTML = '';
    const m = document.createElement('div');
    m.className = 'banner-main';
    m.textContent = main;
    banner.appendChild(m);
    if (sub) {
      const s = document.createElement('div');
      s.className = 'banner-sub';
      s.textContent = sub;
      banner.appendChild(s);
    }
    banner.classList.remove('hidden');
    void banner.offsetWidth;
    banner.classList.add('show');
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => {
      banner.classList.remove('show');
      setTimeout(() => banner.classList.add('hidden'), 500);
    }, ms || 1700);
  }

  /* ---------------- commands ---------------- */
  function updateCommands() {
    const p = activePlayer();
    const can = !G.busy && !G.over && !!p && p.alive;

    actDraw.disabled = !can;
    actDefend.disabled = !can || !p || !p.current || p.cardUsed || (Number(p.current.def) || 0) <= 0;
    actSpecial.disabled = !can || !p || !p.current || p.cardUsed || !p.current.special || p.current.special === 'none' || p.specialUsed;

    if (actDraw.querySelector('small')) {
      actDraw.querySelector('small').textContent = '束から' + G.settings.drawCount + '枚';
    }
    if (actSpecial.querySelector('small')) {
      actSpecial.querySelector('small').textContent =
        (p && p.current && p.current.special && p.current.special !== 'none')
          ? '✨ ' + CD.specialShort(p.current.special)
          : '能力を1回';
    }
  }

  /* ---------------- result / modal ---------------- */
  function showModal(sel) {
    const m = $(sel);
    if (m) m.classList.remove('hidden');
  }
  function hideModal(sel) {
    const m = $(sel);
    if (m) m.classList.add('hidden');
  }

  function endGame(winner) {
    if (G.over) return;
    G.over = true;
    G.busy = true;
    updateCommands();
    updateHUD();

    if (winner) {
      CD.SFX.win();
      $('#resultTitle').textContent = 'WINNER';
      $('#resultImg').src = face(winner.char, 'normal');
      $('#resultImg').classList.remove('hidden');
      $('#resultName').textContent = winner.name + ' の勝利！';
    } else {
      CD.SFX.lose();
      $('#resultTitle').textContent = 'DRAW';
      $('#resultImg').classList.add('hidden');
      $('#resultName').textContent = '全員倒れた…';
    }
    $('#resultSub').textContent = 'ROUND ' + G.round;

    clearTimeout(resultTimer);
    resultTimer = setTimeout(() => showModal('#resultModal'), 1500);
  }

  /* ---------------- events ---------------- */
  $('#startBtn').addEventListener('click', () => {
    CD.SFX.click();
    startGame();
  });

  [document.getElementById('rulesBtn'), document.getElementById('rulesBtn2')].forEach(btn => {
    if (btn) btn.addEventListener('click', () => { CD.SFX.click(); showModal('#rulesModal'); });
  });

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      CD.SFX.click();
      hideModal('#' + btn.dataset.close);
    });
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  $('#titleBtn').addEventListener('click', () => {
    if (!G.over && !confirm('ゲームを中断してタイトルに戻りますか？')) return;
    G.over = true;
    G.busy = true;
    updateCommands();
    hideModal('#resultModal');
    hideModal('#rulesModal');
    clearTimeout(resultTimer);
    gameRoot.classList.add('hidden');
    titleScreen.classList.remove('hidden');
  });

  $('#rematchBtn').addEventListener('click', () => {
    CD.SFX.click();
    hideModal('#resultModal');
    clearTimeout(resultTimer);
    startGame();
  });

  $('#toTitleBtn').addEventListener('click', () => {
    CD.SFX.click();
    hideModal('#resultModal');
    G.over = true;
    G.busy = true;
    updateCommands();
    gameRoot.classList.add('hidden');
    titleScreen.classList.remove('hidden');
  });

  actDraw.addEventListener('click', doDraw);
  actDefend.addEventListener('click', doDefend);
  actSpecial.addEventListener('click', doSpecial);

  window.addEventListener('keydown', e => {
    if (e.repeat) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (!titleScreen.classList.contains('hidden')) return;
    if (G.over || G.busy) return;
    if (e.key === '1') { e.preventDefault(); doDraw(); }
    else if (e.key === '2') { e.preventDefault(); doDefend(); }
    else if (e.key === '3') { e.preventDefault(); doSpecial(); }
  });

  /* ---------------- go ---------------- */
  init();
})();
