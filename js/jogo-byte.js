/* 🤖 BYTE: A AVENTURA (25/11/2026, pedido do professor Welington Laignier)
   Jogo de plataforma da Sala de espera no estilo dos videogames antigos (e da página inicial "Escolha a sua fase"),
   com personagem, mundo, músicas e história NOSSOS: o robozinho Byte atravessa 4 mundos de dentro do computador
   (⌨️ Vale do Teclado, 🟩 Cidade da Placa-mãe, 🔌 Túnel dos Cabos, ☁️ Reino da Nuvem) para salvar a Princesa Pixel,
   presa pelo Rei Vírus no Castelo do Firewall.
   O que os jogos antigos tinham e este também tem:
   - VIDAS (Byte x3), vida extra a cada 50 chips, ESCUDO (bateria) que aguenta uma batida, RELÓGIO de cada fase;
   - tela de abertura de cada fase ("MUNDO 1-1"), com a NOVIDADE da fase explicada (piso baixo: a fase 1 só ensina);
   - entra por um portal e sai pelo outro, com musiquinha de passagem de fase e contagem do tempo que sobrou;
   - ponto de controle (SAVE) no meio da fase; FIM DE JOGO quando as vidas acabam (volta para o começo do mundo);
   - teto alto: 3 BYTES DOURADOS escondidos em cada fase (24 no total) e, depois de salvar a princesa, a VOLTA 2 (modo difícil).
   - SALVO NO CÓDIGO DO ALUNO: progresso/<aluno>_espera.recordes (chaves "byte-aventura_fase", "_ouro" e "_volta"):
     na próxima aula ele continua de onde parou, no mapa de fases.
   - Pontos da Sala de espera: chips, bugs derrotados e fases completas chamam api.ponto() (+5, até 150 por aula).
   - Tudo desenhado e tocado por código (js/pixel-byte.js e Web Audio): nenhuma imagem nem música de fora (~30 KB). */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {}, J = P.jogosEspera; if (!J) return;
  const T = 32, ROWS = 14, W = 800, H = ROWS * T, TINTA = "#10173A", FONTE = "PressStart, 'Courier New', monospace";
  const ID = "byte-aventura", FASES = 8;

  /* ---------- sprites (grades de pixels → canvas, com cache) ---------- */
  const PX = () => P.pixelByte || { grades: {}, cores: {} };
  const cache = {};
  function sprite(nome, esc, flip) {
    const k = nome + esc + (flip ? "f" : ""); if (cache[k]) return cache[k];
    const g = PX().grades[nome]; if (!g) return null;
    const cv = document.createElement("canvas"); cv.width = Math.ceil(g[0].length * esc); cv.height = Math.ceil(g.length * esc); const c = cv.getContext("2d");
    g.forEach((lin, y) => [...lin].forEach((ch, x) => { const cor = PX().cores[ch]; if (!cor) return; c.fillStyle = cor; c.fillRect(Math.floor((flip ? g[0].length - 1 - x : x) * esc), Math.floor(y * esc), Math.ceil(esc), Math.ceil(esc)); }));
    return (cache[k] = cv);
  }
  const desenha = (c, nome, x, y, esc, flip) => { const s = sprite(nome, esc, flip); if (s) c.drawImage(s, Math.round(x), Math.round(y)); };
  function txt(c, s, x, y, tam, cor, al, sombra) {
    c.save(); c.font = `${tam}px ${FONTE}`; c.textAlign = al || "left"; c.textBaseline = "top";
    if (sombra) { c.fillStyle = sombra; c.fillText(s, x + Math.max(2, tam / 6), y + Math.max(2, tam / 6)); }
    c.fillStyle = cor || "#fff"; c.fillText(s, x, y); c.restore();
  }
  const caixa = (c, x, y, w, h, fundo) => { c.fillStyle = TINTA; c.fillRect(x - 4, y - 4, w + 8, h + 8); c.fillStyle = fundo; c.fillRect(x, y, w, h); };

  /* ---------- 🎵 sons e musiquinhas (melodias nossas, onda quadrada como nos videogames antigos) ---------- */
  let AC = null, mudo = false;
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  function nota(f, ini, dur, vol, tipo) { if (!AC || mudo || !f) return; const o = AC.createOscillator(), g = AC.createGain(); o.type = tipo || "square"; o.frequency.value = f;
    g.gain.setValueAtTime(vol || .05, ini); g.gain.exponentialRampToValueAtTime(.0008, ini + dur); o.connect(g); g.connect(AC.destination); o.start(ini); o.stop(ini + dur + .02); }
  function ligarSom() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === "suspended") AC.resume(); } catch (e) {} }
  const JINGLES = {
    pulo: [[62, .05], [69, .07]], chip: [[83, .05], [88, .12]], pisa: [[55, .05], [50, .09]], dano: [[64, .08], [60, .08], [55, .14]], vida: [[72, .08], [76, .08], [79, .08], [84, .2]],
    escudo: [[67, .06], [71, .06], [74, .06], [79, .14]], ouro: [[79, .06], [83, .06], [86, .06], [91, .22]], save: [[72, .07], [79, .14]],
    abertura: [[67, .1], [72, .1], [76, .1], [79, .3]],
    passou: [[72, .12], [76, .12], [79, .12], [76, .12], [79, .12], [84, .45], [0, .08], [83, .1], [84, .5]],
    morreu: [[71, .1], [70, .1], [69, .1], [68, .35]], fimjogo: [[67, .25], [64, .25], [60, .25], [55, .6]],
    vitoria: [[72, .15], [72, .15], [72, .15], [72, .45], [68, .45], [70, .45], [72, .3], [70, .15], [72, .8]]
  };
  function tocar(n) { if (!AC || mudo) return; let t = AC.currentTime + .01; (JINGLES[n] || []).forEach(([m, d]) => { nota(m ? hz(m) : 0, t, d * .95, .05); t += d; }); }
  const MUSICAS = [   // uma por mundo + o castelo (notas MIDI; 0 = pausa)
    [72, 0, 76, 79, 77, 0, 74, 0, 72, 0, 76, 79, 81, 79, 77, 0, 76, 0, 72, 74, 76, 0, 79, 0, 77, 76, 74, 72, 74, 0, 0, 0],
    [69, 72, 76, 72, 69, 72, 76, 79, 77, 76, 74, 72, 71, 72, 74, 0, 69, 72, 76, 72, 81, 79, 77, 76, 74, 72, 71, 69, 71, 0, 0, 0],
    [64, 0, 64, 67, 0, 69, 0, 67, 64, 0, 62, 64, 0, 0, 60, 0, 64, 0, 64, 67, 0, 72, 0, 71, 69, 0, 67, 64, 0, 0, 0, 0],
    [76, 79, 84, 79, 76, 79, 83, 79, 74, 77, 81, 77, 72, 76, 79, 0, 76, 79, 84, 86, 88, 86, 84, 83, 81, 79, 77, 76, 74, 0, 0, 0],
    [62, 65, 69, 65, 62, 65, 70, 69, 67, 65, 64, 62, 61, 62, 64, 0, 62, 65, 69, 74, 73, 70, 69, 67, 65, 64, 62, 61, 62, 0, 0, 0]];
  const BAIXO = [[48, 53, 55, 48], [45, 41, 43, 45], [40, 43, 45, 43], [48, 45, 41, 43], [38, 34, 33, 38]];
  let musPos = 0, musT = 0;
  function musica(qual, rapido) { if (!AC || mudo) return; const passo = rapido ? .11 : .15; if (musT < AC.currentTime) musT = AC.currentTime + .05;
    while (musT < AC.currentTime + .25) { const m = MUSICAS[qual], n = m[musPos % m.length]; if (n) nota(hz(n), musT, passo * .9, .022);
      if (musPos % 8 === 0) nota(hz(BAIXO[qual][(musPos / 8) % 4]), musT, passo * 3.5, .03, "triangle"); musPos++; musT += passo; } }

  /* ---------- os 4 mundos e as 8 fases ---------- */
  const MUNDOS = [
    { nome: "VALE DO TECLADO", ceu: ["#63B8FF", "#9AD3FF"], chao: ["#3BB273", "#2A8C57", "#B9733A", "#8C5226"], bloco: "tecla", cor: "#3BB273" },
    { nome: "CIDADE DA PLACA-MAE", ceu: ["#0B3B2C", "#14533D"], chao: ["#34D399", "#1F7A4D", "#14533D", "#0B3B2C"], bloco: "chipbloco", cor: "#1F7A4D" },
    { nome: "TUNEL DOS CABOS", ceu: ["#0B1D3A", "#16305C"], chao: ["#CBD5E1", "#94A3B8", "#64748B", "#475569"], bloco: "conector", cor: "#3B82F6" },
    { nome: "REINO DA NUVEM", ceu: ["#A5B4FC", "#FBCFE8"], chao: ["#FFFFFF", "#E0E7FF", "#C7D2FE", "#A5B4FC"], bloco: "nuvembloco", cor: "#8B5CF6" }];
  // 🆕 a novidade de cada fase, explicada na tela de abertura (uma coisa nova por vez: piso baixo)
  const NOVIDADE = [
    ["chip", "PEGUE OS CHIPS!", "50 CHIPS = 1 VIDA EXTRA"],
    ["bug", "BUGS: PULE EM CIMA DELES!", "ENCOSTOU DO LADO? PERDE 1 VIDA"],
    ["faisca", "FAISCAS DA PLACA!", "PASSE QUANDO ELAS APAGAREM"],
    ["bateria", "BATERIA = ESCUDO!", "AGUENTA 1 BATIDA SEM PERDER VIDA"],
    ["mover", "PLATAFORMAS QUE ANDAM!", "SUBA NELAS PARA ATRAVESSAR"],
    ["bug", "BUGS MAIS RAPIDOS!", "OLHE BEM ANTES DE PULAR"],
    ["ouro", "BURACOS MAIORES!", "ACHE OS 3 BYTES DOURADOS"],
    ["rei", "CASTELO DO FIREWALL!", "PULE 3 VEZES NO REI VIRUS"]];
  // 🏫 a equipe da escola (eles toparam participar; 25/11/2026): cada um guia um mundo ou ajuda o Byte pelo caminho
  const GUIA = [["welington", "PROF. WELINGTON"], ["geane", "DIRETORA GEANE"], ["marcileia", "COORD. MARCILÉIA"], ["celia", "COORD. CÉLIA"]];
  const CFG = (n, volta) => { const m = Math.floor((n - 1) / 2), k = (n - 1) % 2, d = 1 + .25 * ((volta || 1) - 1);
    return { n, m, k, volta: volta || 1, L: 120 + n * 14, gap: (n === 1 ? .07 : .1 + n * .012) * d, gapMax: n === 1 ? 2 : n < 7 ? 3 : 4, bug: n === 1 ? 0 : Math.min(.8, (.25 + n * .05) * d),
      vel: (50 + n * 8) * d, plat: .22, faisca: n >= 3, bateria: n >= 4, mover: n >= 5, chefe: n === FASES, tempo: Math.round((170 - n * 5) / Math.sqrt(d)) }; };

  /* ---------- gerador das fases (a mesma fase sempre igual: semente fixa) ---------- */
  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function gerar(cfg) {
    const r = rng(1000 + cfg.n * 7919 + cfg.volta * 31), col = [], blocos = new Set(), chips = [], bugs = [], faiscas = [], movers = [], plats = [], buracos = [];
    let g = 11; const plano = n => { for (let i = 0; i < n; i++) col.push(g); };
    const chip = (cx, ry) => chips.push({ x: cx * T + 8, y: ry * T + 8, ok: false });
    plano(12);
    const fimJogo = cfg.L - (cfg.chefe ? 34 : 16);
    let ultBuraco = false;
    while (col.length < fimJogo) {
      const x = col.length, s = r();
      if (s < cfg.gap && !ultBuraco) {
        const largo = cfg.mover && r() < .5 ? 5 : 2 + Math.floor(r() * (cfg.gapMax - 1));
        for (let i = 0; i < largo; i++) col.push(-1);
        if (largo >= 5) movers.push({ x0: (x + .5) * T, x1: (x + largo - 2.5) * T, y: (g - 1) * T, w: T * 2, t: r() * 6, vel: .9 + r() * .4, x: 0, dx: 0 });
        else for (let i = 0; i < largo; i++) chip(x + i, g - 3 - (i > 0 && i < largo - 1 ? 1 : 0));
        buracos.push({ x, largo, g }); ultBuraco = true; plano(3); continue;
      }
      ultBuraco = false;
      if (s < cfg.gap + .18) { g = Math.max(9, Math.min(12, g + (r() < .5 ? -1 : 1))); plano(3 + Math.floor(r() * 3)); continue; }
      if (s < cfg.gap + .18 + cfg.plat) {
        const n = 7 + Math.floor(r() * 2); plano(n); const len = 3 + Math.floor(r() * 2), x0 = x + 2, ry = g - 3;
        for (let i = 0; i < len; i++) { blocos.add((x0 + i) + "," + ry); chip(x0 + i, ry - 1); }
        plats.push({ x0, len, ry });
        if (r() < cfg.bug) bugs.push({ x: (x + n - 2) * T, g });
        continue;
      }
      const n = 5 + Math.floor(r() * 5); plano(n);
      if (r() < cfg.bug) bugs.push({ x: (x + n - 2) * T, g });
      if (cfg.faisca && r() < .4) faiscas.push({ x: (x + 2) * T + 6, y: (g - 1) * T + 8, fase: r() * 3 });
      else if (r() < .6) { const ry = g - 2 - Math.floor(r() * 2); for (let i = 1; i < 4; i++) chip(x + i, ry); }
    }
    g = 11; plano(cfg.L - col.length);
    // 🌟 3 Bytes Dourados: lá no alto, em cima das plataformas (um em cada terço da fase), ou no meio de um buraco
    const ouros = [];
    for (let k = 0; k < 3; k++) { const a = fimJogo * k / 3, b = fimJogo * (k + 1) / 3;
      const pl = plats.filter(q => q.x0 >= a && q.x0 < b), bu = buracos.filter(q => q.x >= a && q.x < b && q.largo < 5);
      if (pl.length) { const q = pl[Math.floor(r() * pl.length)]; ouros.push({ x: (q.x0 + Math.floor(q.len / 2)) * T + 4, y: (q.ry - 3) * T, ok: false, k }); }
      else if (bu.length) { const q = bu[0]; ouros.push({ x: (q.x + q.largo / 2) * T - 12, y: (q.g - 4) * T, ok: false, k }); }
      else { const cx = Math.floor((a + b) / 2); let gg = col[cx]; if (gg < 0) gg = 11; ouros.push({ x: cx * T, y: (gg - 4) * T, ok: false, k }); } }
    // 🔋 bateria (escudo): numa plataforma do começo
    const bats = cfg.bateria && plats.length ? [{ x: (plats[0].x0 + 1) * T + 4, y: (plats[0].ry - 1) * T + 2, ok: false }] : [];
    const meio = Math.floor(fimJogo / 2); let cp = meio; while (col[cp] < 0) cp++;
    return { col, blocos, chips, faiscas, movers, ouros, bats, len: col.length, cp: { x: cp * T, g: col[cp] },
      bugs: bugs.map(b => ({ x: b.x, y: b.g * T - 22, w: 26, h: 22, vx: -cfg.vel, vivo: true, morto: 0 })),
      meta: cfg.chefe ? null : (cfg.L - 8) * T, arena: cfg.chefe ? (fimJogo + 2) * T : null };
  }

  /* ---------- cenários ---------- */
  function nuvem(c, x, y, e) { x = Math.round(x); y = Math.round(y); const g = ["....XXXX....", "..XXXXXXXX..", ".XXXXXXXXXXX", "XXXXXXXXXXXX", ".XXXXXXXXXX."];
    c.fillStyle = TINTA; g.forEach((l, j) => [...l].forEach((ch, i) => { if (ch === "X") c.fillRect(x + i * e * 3 - e, y + j * e * 3 - e, e * 5, e * 5); }));
    c.fillStyle = "#fff"; g.forEach((l, j) => [...l].forEach((ch, i) => { if (ch === "X") c.fillRect(x + i * e * 3, y + j * e * 3, e * 3, e * 3); })); }
  function fundo(c, cfg, cam, tempo, castelo) {
    const M = MUNDOS[cfg.m], ceu = c.createLinearGradient(0, 0, 0, H);
    ceu.addColorStop(0, castelo ? "#1E1B4B" : M.ceu[0]); ceu.addColorStop(1, castelo ? "#4C1D95" : M.ceu[1]); c.fillStyle = ceu; c.fillRect(0, 0, W, H);
    const loop = (i, esp, vel, tot, des) => ((i * esp - cam * vel) % tot + tot) % tot - des;
    if (castelo) { c.fillStyle = "#FDE68A"; for (let i = 0; i < 30; i++) { if ((i + Math.floor(tempo * 2)) % 7 === 0) continue; c.fillRect((i * 97) % W, (i * 53) % 200, 4, 4); }
      c.fillStyle = "#312E81"; for (let x = -((cam * .3) % 64); x < W; x += 64) { c.fillRect(x, 220, 60, 140); c.fillRect(x, 200, 28, 20); } return; }
    if (cfg.m === 0) {
      for (let i = 0; i < 6; i++) nuvem(c, loop(i, 260, .15, 1560, 200), 40 + (i % 3) * 38, 3);
      for (let i = 0; i < 9; i++) { const x = loop(i, 190, .35, 1710, 160), y = 250 + (i % 2) * 22; caixa(c, x, y, 110, 100, "#BFDBFE"); c.fillStyle = "#DBEAFE"; c.fillRect(x + 10, y + 6, 90, 66); txt(c, "QWERTYUIO"[i], x + 42, y + 24, 26, "#60A5FA"); }
    } else if (cfg.m === 1) {
      c.strokeStyle = "rgba(250,204,21,.35)"; c.lineWidth = 4;
      for (let i = 0; i < 12; i++) { const x = loop(i, 140, .3, 1680, 120), y = 60 + (i * 53) % 260; c.beginPath(); c.moveTo(x, y); c.lineTo(x + 80, y); c.lineTo(x + 80, y + 60); c.lineTo(x + 160, y + 60); c.stroke();
        c.fillStyle = Math.floor(tempo * 2 + i) % 2 ? "#F87171" : "#4ADE80"; c.fillRect(x + 156, y + 56, 8, 8); }
    } else if (cfg.m === 2) {
      ["#F59E0B", "#3B82F6", "#22C55E", "#EF4444"].forEach((cor, i) => { const y = 70 + i * 50; c.fillStyle = cor; c.fillRect(0, y, W, 10);
        for (let k = 0; k < 4; k++) { const x = ((k * 230 + tempo * (120 + i * 40) - cam * .3) % 920 + 920) % 920 - 60; c.fillStyle = "#fff"; c.fillRect(x, y - 2, 14, 14); c.fillStyle = TINTA; c.fillRect(x + 4, y + 2, 6, 6); } });
    } else for (let i = 0; i < 7; i++) nuvem(c, loop(i, 230, .2, 1610, 200), 30 + (i % 4) * 60, 4);
  }
  function chao(c, cfg, x, y, topo, emC) {
    const k = emC ? ["#7C3AED", "#5B21B6", "#4C1D95", "#2E1065"] : MUNDOS[cfg.m].chao;
    c.fillStyle = k[2]; c.fillRect(x, y, T, T);
    if (topo) { c.fillStyle = k[0]; c.fillRect(x, y, T, 12); c.fillStyle = k[1]; c.fillRect(x, y + 12, T, 6); c.fillStyle = TINTA; c.fillRect(x, y, T, 4); }
    c.fillStyle = k[3]; c.fillRect(x, y + T - 4, T, 4); c.fillRect(x + T - 4, y + (topo ? 18 : 0), 4, T - (topo ? 18 : 0));
    if (cfg.m === 1 && !emC) { c.fillStyle = "#FACC15"; c.fillRect(x + 8, y + 24, 4, 4); }
  }
  function bloco(c, cfg, x, y, emC, letra) {
    const tipo = emC ? "castelo" : MUNDOS[cfg.m].bloco;
    if (tipo === "tecla") { caixa(c, x + 2, y + 2, T - 4, T - 4, "#FFF6D8"); c.fillStyle = "#E7D9A8"; c.fillRect(x + 2, y + T - 8, T - 4, 6); txt(c, letra, x + 10, y + 8, 12, TINTA); }
    else if (tipo === "chipbloco") { c.fillStyle = "#FACC15"; for (let i = 0; i < 3; i++) { c.fillRect(x + 6 + i * 9, y, 4, T); c.fillRect(x, y + 6 + i * 9, T, 4); } caixa(c, x + 6, y + 6, T - 12, T - 12, "#1F2937"); }
    else if (tipo === "conector") { caixa(c, x + 2, y + 2, T - 4, T - 4, "#94A3B8"); c.fillStyle = "#334155"; c.fillRect(x + 8, y + 10, 16, 10); c.fillStyle = "#FACC15"; c.fillRect(x + 10, y + 12, 3, 4); c.fillRect(x + 15, y + 12, 3, 4); c.fillRect(x + 20, y + 12, 2, 4); }
    else if (tipo === "nuvembloco") { caixa(c, x + 2, y + 4, T - 4, T - 8, "#fff"); c.fillStyle = "#E0E7FF"; c.fillRect(x + 2, y + T - 10, T - 4, 6); }
    else { caixa(c, x + 2, y + 2, T - 4, T - 4, "#6D28D9"); c.fillStyle = "#5B21B6"; c.fillRect(x + 2, y + 14, T - 4, 4); c.fillRect(x + 14, y + 2, 4, 12); }
  }
  function placaSave(c, x, y, ok) { c.fillStyle = TINTA; c.fillRect(x, y - 70, 6, 70); caixa(c, x - 22, y - 92, 50, 24, ok ? "#4ADE80" : "#E2E8F0"); txt(c, "SAVE", x - 16, y - 85, 9, TINTA); }
  function faisca(c, f, tempo) { if ((tempo + f.fase) % 2.2 >= 1.4) { c.fillStyle = "rgba(250,204,21,.3)"; c.fillRect(f.x + 4, f.y + 12, 12, 4); return; }
    const k = Math.floor(tempo * 12) % 2; c.fillStyle = "#FDE047"; c.fillRect(f.x + 6, f.y - 2 + k * 2, 8, 22); c.fillRect(f.x - 2, f.y + 6, 24, 8); c.fillStyle = "#fff"; c.fillRect(f.x + 8, f.y + 8, 4, 4); }
  function plataforma(c, x, y, w) { caixa(c, x, y, w, 12, "#FFD23F"); c.fillStyle = "#F59E0B"; c.fillRect(x, y + 8, w, 4); }

  /* ---------- o jogo ---------- */
  function criar(api) {
    const ler = k => +(api.ler ? api.ler(k) : 0) || 0;
    let fSalva = Math.max(1, Math.min(FASES + 1, ler("fase"))), ouroBits = ler("ouro"), volta = Math.max(1, ler("volta"));
    const salvar = (k, v) => api.salvar && api.salvar(k, v);
    let estado = "mapa", sel = Math.min(fSalva, FASES), tempo = 0, pts = 0, msg = "", msgT = 0, eT = 0, acabou = false;
    let cfg = null, L = null, cam = 0, camMin = 0, p = null, vidas = 3, chipsN = 0, relogio = 0, chefe = null, princesa = null, cpOk = false, ourosAgora = 0, conta = 0;
    const tecla = {}; let pulou = false, toqueX = 0;
    try { document.fonts && document.fonts.load("16px PressStart"); } catch (e) {}
    const temOuro = (n, k) => !!(ouroBits & (1 << ((n - 1) * 3 + k)));
    const nOuro = () => { let s = 0; for (let i = 0; i < 24; i++) if (ouroBits & (1 << i)) s++; return s; };

    function montar(n, doCp) {
      cfg = CFG(n, volta); L = gerar(cfg); cpOk = !!doCp;
      const x0 = doCp ? L.cp.x : 2 * T, g0 = doCp ? L.cp.g : 11;
      p = { x: x0, y: g0 * T - 30, w: 22, h: 30, vx: 0, vy: 0, chao: true, coyote: 0, inv: 0, dir: 1, anda: 0, escudo: false };
      cam = camMin = Math.max(0, x0 - W * .4); relogio = cfg.tempo; ourosAgora = 0;
      chefe = cfg.chefe ? { x: L.arena + 15 * T, y: 11 * T - 64, w: 56, h: 60, vx: -110 * (1 + .2 * (volta - 1)), vy: 0, vida: 3, inv: 0, pulo: 2, vivo: true, cai: 0 } : null;
      princesa = cfg.chefe ? { x: L.arena + 21 * T, y: 11 * T - 32, livre: false } : null;
    }
    function abrirFase(n, doCp) { montar(n, doCp); estado = "intro"; eT = 3.2; tocar("abertura"); musPos = 0; }
    const solido = (cx, ry) => { if (cx < 0) return true; if (ry < 0) return false; const g = L.col[Math.min(cx, L.len - 1)]; if (g >= 0 && ry >= g) return true; return L.blocos.has(cx + "," + ry); };
    const cruza = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    const aviso = (s, t) => { msg = s; msgT = t || 1.2; };
    function batida() { if (p.inv > 0 || estado !== "jogo") return; if (p.escudo) { p.escudo = false; p.inv = 1.4; p.vy = -380; tocar("dano"); aviso("ESCUDO GASTO!"); return; } morrer(); }
    function morrer() { if (estado !== "jogo") return; estado = "morreu"; eT = 2; p.vy = -620; tocar("morreu"); }
    function ganharChip() { chipsN++; pts += 10; api.ponto && api.ponto(); if (chipsN % 50 === 0) { vidas++; tocar("vida"); aviso("+1 VIDA!"); } else tocar("chip"); }
    function venceuFase() { estado = "saindo"; eT = 1.2; p.vx = 0; tocar("passou"); }
    function contagem() { estado = "conta"; conta = Math.max(0, Math.ceil(relogio)); eT = 0;
      const bit = cfg.n; if (bit + 1 > fSalva) { fSalva = Math.min(FASES, bit + 1); salvar("fase", fSalva); }
      salvar("ouro", ouroBits); pts += 100; api.ponto && api.ponto(); }

    function fisica(dt) {
      const quer = (tecla.ArrowRight || tecla.d || toqueX > 0 ? 1 : 0) - (tecla.ArrowLeft || tecla.a || toqueX < 0 ? 1 : 0);
      p.vx += (quer * 230 - p.vx) * Math.min(1, dt * (p.chao ? 12 : 6)); if (quer) p.dir = quer;
      p.coyote = p.chao ? .09 : p.coyote - dt;
      if (pulou && p.coyote > 0) { p.vy = -660; p.coyote = 0; pulou = false; tocar("pulo"); }
      if (!(tecla.ArrowUp || tecla[" "] || tecla.w || tecla.toque) && p.vy < -260) p.vy = -260;   // soltou cedo: pulo baixinho
      p.vy = Math.min(900, p.vy + 1900 * dt);
      p.x += p.vx * dt; if (p.x < cam) { p.x = cam; p.vx = 0; }
      for (let ry = Math.floor(p.y / T); ry <= Math.floor((p.y + p.h - 1) / T); ry++) {
        if (p.vx > 0 && solido(Math.floor((p.x + p.w) / T), ry)) { p.x = Math.floor((p.x + p.w) / T) * T - p.w - .01; p.vx = 0; }
        else if (p.vx < 0 && solido(Math.floor(p.x / T), ry)) { p.x = (Math.floor(p.x / T) + 1) * T + .01; p.vx = 0; } }
      const pe0 = p.y + p.h; p.y += p.vy * dt; p.chao = false;
      for (let cx = Math.floor(p.x / T); cx <= Math.floor((p.x + p.w - 1) / T); cx++) {
        const rb = Math.floor((p.y + p.h) / T);
        if (p.vy > 0 && rb < ROWS && solido(cx, rb)) { p.y = rb * T - p.h; p.vy = 0; p.chao = true; }
        else if (p.vy < 0 && solido(cx, Math.floor(p.y / T))) { p.y = (Math.floor(p.y / T) + 1) * T; p.vy = 0; } }
      L.movers.forEach(m => { if (p.vy >= 0 && pe0 <= m.y + 4 && p.y + p.h >= m.y && p.x + p.w > m.x && p.x < m.x + m.w) { p.y = m.y - p.h; p.vy = 0; p.chao = true; p.x += m.dx; } });
      if (!cpOk && p.chao && p.x > L.cp.x - T && !L.arena) { cpOk = true; tocar("save"); aviso("RAILENA, A SECRETÁRIA, ANOTOU: SALVO!", 1.8); }
      p.anda = p.chao && Math.abs(p.vx) > 30 ? p.anda + dt : 0;
      if (p.y > H + 40) morrer();
    }
    function update(dt) {
      tempo += dt; if (msgT > 0) msgT -= dt; if (eT > 0) eT -= dt;
      if (estado === "mapa") return;
      if (estado === "intro") { if (eT <= 0) { estado = "entrando"; eT = .8; } return; }
      if (estado === "entrando") { if (eT <= 0) estado = "jogo"; return; }
      if (estado === "morreu") { p.vy += 1500 * dt; p.y += p.vy * dt; if (eT <= 0) { vidas--; if (vidas > 0) abrirFase(cfg.n, cpOk); else fimDeJogo(); } return; }
      if (estado === "fimjogo") { if (eT <= 0 && !acabou) { acabou = true; api.fim(pts); } return; }
      if (estado === "saindo") { p.x += 60 * dt; if (eT <= 0) contagem(); return; }
      if (estado === "conta") { // ⏱️ o tempo que sobrou vira pontos (tic-tic-tic)
        if (eT <= 0) { if (conta > 0) { const k = Math.min(conta, 5); conta -= k; pts += k * 10; eT = .03; nota(hz(96), AC ? AC.currentTime : 0, .03, .03); } else { estado = "passou"; eT = 1.6; } } return; }
      if (estado === "passou") { if (eT <= 0) { if (cfg.n < FASES) abrirFase(cfg.n + 1); else { estado = "mapa"; sel = FASES; } } return; }
      if (estado === "vitoria") { if (eT <= 0 && !acabou) { acabou = true; api.fim(pts); } return; }
      // ---- jogando ----
      musica(L.arena && p.x > L.arena ? 4 : cfg.m, relogio < 30);
      relogio -= dt; if (relogio <= 0) { relogio = 0; aviso("ACABOU O TEMPO!", 2); morrer(); return; }
      if (p.inv > 0) p.inv -= dt;
      L.movers.forEach(m => { const nx = m.x0 + (m.x1 - m.x0) * (.5 - .5 * Math.cos((tempo + m.t) * m.vel)); m.dx = m.x ? nx - m.x : 0; m.x = nx; });
      fisica(dt); if (estado !== "jogo") return;
      const naArena = L.arena && p.x > L.arena + 2 * T;
      cam = naArena ? Math.min(cam + 400 * dt, L.arena) : Math.max(camMin, Math.min(p.x - W * .4, L.len * T - W)); camMin = Math.max(camMin, cam);
      L.chips.forEach(ch => { if (!ch.ok && cruza(p, { x: ch.x, y: ch.y, w: 16, h: 16 })) { ch.ok = true; ganharChip(); } });
      L.ouros.forEach(o => { if (!o.ok && cruza(p, { x: o.x, y: o.y, w: 24, h: 24 })) { o.ok = true; ourosAgora++; ouroBits |= 1 << ((cfg.n - 1) * 3 + o.k); pts += 200; api.ponto && api.ponto(); tocar("ouro"); aviso("BYTE DOURADO!"); } });
      L.bats.forEach(b => { if (!b.ok && cruza(p, { x: b.x, y: b.y, w: 20, h: 26 })) { b.ok = true; p.escudo = true; tocar("escudo"); aviso("MARCKEILY ENTREGOU O ESCUDO!", 1.8); } });
      L.bugs.forEach(b => { if (!b.vivo) { b.morto += dt; return; } if (b.x > cam + W + 64 || b.x < cam - 200) return;
        b.x += b.vx * dt; const frente = Math.floor((b.vx < 0 ? b.x : b.x + b.w) / T), pe = Math.floor((b.y + b.h) / T);
        if (solido(frente, pe - 1) || !solido(frente, pe)) { b.vx = -b.vx; b.x += b.vx * dt * 2; }
        if (cruza(p, b)) { if (p.vy > 0 && p.y + p.h - b.y < 16) { b.vivo = false; p.vy = -420; pts += 20; api.ponto && api.ponto(); tocar("pisa"); } else batida(); } });
      L.faiscas.forEach(f => { if ((tempo + f.fase) % 2.2 < 1.4 && cruza(p, { x: f.x, y: f.y, w: 20, h: 20 })) batida(); });
      if (L.meta && p.x + p.w / 2 > L.meta + 24) return venceuFase();
      if (chefe) {
        if (chefe.vivo && p.x > L.arena) {
          chefe.inv = Math.max(0, chefe.inv - dt); chefe.pulo -= dt; chefe.vy = Math.min(900, chefe.vy + 1900 * dt); chefe.y += chefe.vy * dt;
          if (chefe.y > 11 * T - chefe.h) { chefe.y = 11 * T - chefe.h; chefe.vy = 0; if (chefe.pulo <= 0) { chefe.vy = -560; chefe.pulo = 1.6 + Math.random() * 1.4; } }
          chefe.x += chefe.vx * dt; if (chefe.x < L.arena + 3 * T) { chefe.x = L.arena + 3 * T; chefe.vx = Math.abs(chefe.vx); } if (chefe.x > L.arena + 19 * T - chefe.w) { chefe.x = L.arena + 19 * T - chefe.w; chefe.vx = -Math.abs(chefe.vx); }
          if (cruza(p, chefe)) { if (p.vy > 0 && p.y + p.h - chefe.y < 22 && chefe.inv <= 0) { chefe.vida--; chefe.inv = 1.1; p.vy = -560; pts += 100; api.ponto && api.ponto(); tocar("pisa"); chefe.vx *= 1.35;
              aviso(chefe.vida ? `ACERTOU! FALTA${chefe.vida > 1 ? "M" : ""} ${chefe.vida}` : "REI VIRUS DERROTADO!", 1.6); if (!chefe.vida) { chefe.vivo = false; princesa.livre = true; } }
            else if (chefe.inv <= 0) batida(); }
        } else if (!chefe.vivo) { chefe.cai += dt; chefe.y += 300 * dt; }
        if (princesa.livre && p.x + p.w > princesa.x - 10) { estado = "vitoria"; eT = 9; pts += 1000; api.ponto && api.ponto(); tocar("vitoria");
          fSalva = 1; volta++; salvar("volta", volta); salvar("fase", 1); salvar("ouro", ouroBits); }
      }
    }
    function fimDeJogo() { estado = "fimjogo"; eT = 3.2; tocar("fimjogo");
      // ⚠️ como nos jogos antigos: perdeu todas as vidas na fase mais nova, volta para o começo daquele mundo
      const ini = cfg.m * 2 + 1; if (Math.floor((fSalva - 1) / 2) === cfg.m && fSalva > ini) { fSalva = ini; salvar("fase", fSalva); }
      salvar("ouro", ouroBits); }

    function draw(c) {
      c.imageSmoothingEnabled = false;
      if (estado === "mapa") return mapa(c);
      if (estado === "intro") return intro(c);
      const castelo = L.arena && cam > L.arena - W * .6;
      fundo(c, cfg, cam, tempo, castelo);
      const c0 = Math.floor(cam / T), c1 = Math.min(L.len - 1, c0 + Math.ceil(W / T) + 1);
      c.save(); c.translate(-Math.round(cam), 0);
      for (let cx = c0; cx <= c1; cx++) { const g = L.col[cx], emC = L.arena && cx * T >= L.arena - 2 * T;
        if (g >= 0) for (let ry = g; ry < ROWS; ry++) chao(c, cfg, cx * T, ry * T, ry === g, emC);
        for (let ry = 0; ry < ROWS; ry++) if (L.blocos.has(cx + "," + ry)) bloco(c, cfg, cx * T, ry * T, emC, "ASDFGHJKL"[(cx + ry) % 9]); }
      L.movers.forEach(m => plataforma(c, m.x, m.y, m.w));
      desenha(c, "portal", 2 * T - 12, 11 * T - 52, 4);
      if (!L.arena) { placaSave(c, L.cp.x, L.cp.g * T, cpOk); desenha(c, "railena", L.cp.x + 30, L.cp.g * T - 32, 2); desenha(c, "portal", L.meta, 11 * T - 52, 4);
        if (cpOk && msgT > 0 && /RAILENA/.test(msg)) { caixa(c, L.cp.x + 4, L.cp.g * T - 78, 92, 22, "#fff"); txt(c, "ANOTADO!", L.cp.x + 50, L.cp.g * T - 72, 8, TINTA, "center"); } }
      L.faiscas.forEach(f => faisca(c, f, tempo));
      L.chips.forEach(ch => { if (ch.ok) return; const w = Math.abs(Math.cos(tempo * 4 + ch.x)); c.save(); c.translate(ch.x + 8, ch.y + 8); c.scale(Math.max(.15, w), 1); desenha(c, "chip", -8, -8, 2); c.restore(); });
      L.ouros.forEach(o => { if (!o.ok) desenha(c, "ouro", o.x, o.y + Math.sin(tempo * 3 + o.x) * 4, 2.6); });
      L.bats.forEach(b => { desenha(c, "marckeily", b.x + 34, b.y + 32 - 4 - 32 + 2, 2); if (!b.ok) desenha(c, "bateria", b.x, b.y + Math.sin(tempo * 3) * 3, 2.6); });
      L.bugs.forEach(b => { if (b.vivo) desenha(c, Math.floor(tempo * 6) % 2 ? "bug" : "bug2", b.x - 4, b.y - 2, 2.5, b.vx > 0); else if (b.morto < .5) { c.save(); c.translate(b.x, b.y + b.h); c.scale(1, .4); desenha(c, "bug", -4, -25, 2.5); c.restore(); } });
      if (L.arena) {
        const ax = L.arena; c.fillStyle = "#4C1D95"; c.fillRect(ax + 20 * T, 3 * T, 6 * T, 8 * T); c.fillStyle = TINTA; for (let i = 0; i < 6; i++) c.fillRect(ax + 20 * T + i * T + 6, 2 * T, 20, T);
        txt(c, "FIREWALL", ax + 20 * T + 12, 4 * T, 12, "#FDE68A", "left", TINTA);
        desenha(c, "princesa", princesa.x, princesa.y - 8 - (princesa.livre ? Math.abs(Math.sin(tempo * 6)) * 10 : 0), 2.5);
        if (!princesa.livre) { c.fillStyle = "#94A3B8"; for (let i = 0; i < 6; i++) c.fillRect(princesa.x - 8 + i * 8, princesa.y - 26, 4, 58); c.fillRect(princesa.x - 10, princesa.y - 28, 50, 6); }
        if (chefe && (chefe.vivo || chefe.cai < 2) && !(chefe.inv > 0 && Math.floor(tempo * 16) % 2)) desenha(c, "rei", chefe.x - 4, chefe.y - 4, 4, chefe.vx > 0);
      }
      // o Byte (pisca quando acabou de levar batida; contorno verde = escudo; no portal, vai sumindo)
      const vis = estado === "entrando" ? 1 - eT / .8 : estado === "saindo" ? Math.max(0, eT / 1.2) : 1;
      if (estado !== "conta" && estado !== "passou" && !(p.inv > 0 && Math.floor(tempo * 14) % 2)) { c.save(); c.globalAlpha = vis;
        if (p.escudo) { c.fillStyle = "rgba(74,222,128,.45)"; c.fillRect(p.x - 6, p.y - 8, p.w + 12, p.h + 12); }
        desenha(c, estado === "morreu" ? "byte2" : p.chao ? (p.anda && Math.floor(p.anda * 10) % 2 ? "byte2" : "byte") : "byte2", p.x - 1, p.y - 2, 2, p.dir < 0); c.restore(); }
      c.restore();
      hud(c);
      if (msgT > 0 && msg) txt(c, msg, W / 2, 84, 14, "#fff", "center", TINTA);
      if (estado === "conta" || estado === "passou") { c.fillStyle = "rgba(16,23,58,.78)"; c.fillRect(0, 120, W, 200);
        txt(c, "FASE COMPLETA!", W / 2, 140, 26, "#FFD23F", "center", "#000");
        txt(c, `TEMPO  ${String(conta).padStart(3, "0")}  x 10`, W / 2, 196, 12, "#fff", "center");
        txt(c, `BYTES DOURADOS NESTA FASE: ${ourosAgora}/3`, W / 2, 226, 10, "#FDE68A", "center");
        txt(c, cfg.n < FASES ? `JOGO SALVO: FASE ${cfg.n + 1} LIBERADA` : "", W / 2, 262, 12, "#4ADE80", "center"); }
      if (estado === "fimjogo") { c.fillStyle = "rgba(16,23,58,.88)"; c.fillRect(0, 0, W, H); txt(c, "FIM DE JOGO", W / 2, 140, 30, "#FF5A5F", "center", "#000");
        txt(c, "AS VIDAS ACABARAM...", W / 2, 210, 12, "#fff", "center"); txt(c, `VOCE CONTINUA DA FASE ${fSalva}`, W / 2, 244, 12, "#FFD23F", "center"); }
      if (estado === "vitoria") { const f = 9 - eT; c.fillStyle = "rgba(16,23,58,.86)"; c.fillRect(0, 0, W, H);
        for (let i = 0; i < 40; i++) { c.fillStyle = ["#FFD23F", "#FF8BD1", "#4ADE80", "#7CF9FF"][i % 4]; c.fillRect((i * 83 + f * 40 * (i % 3 + 1)) % W, (i * 47 + f * 120) % H, 8, 8); }
        txt(c, "VOCE SALVOU A", W / 2, 60, 20, "#fff", "center", "#000"); txt(c, "PRINCESA PIXEL!", W / 2, 96, 26, "#FFD23F", "center", "#000");
        desenha(c, "byte", W / 2 - 100, 170 - Math.abs(Math.sin(f * 5)) * 20, 5); desenha(c, "princesa", W / 2 + 30, 170 - Math.abs(Math.sin(f * 5 + 1)) * 20, 5);
        txt(c, "OBRIGADA, BYTE! O COMPUTADOR ESTA SALVO!", W / 2, 262, 10, "#FBCFE8", "center");
        ["welington", "geane", "marcileia", "celia", "railena", "marckeily"].forEach((q, i) => desenha(c, q, 40 + i * 30 + (i > 2 ? 520 : 0), 360 - Math.abs(Math.sin(f * 6 + i)) * 16, 2));
        txt(c, `VOLTA ${volta} LIBERADA: MODO DIFICIL!`, W / 2, 298, 12, "#4ADE80", "center"); txt(c, `BYTES DOURADOS: ${nOuro()}/24`, W / 2, 330, 10, "#FDE68A", "center"); }
    }
    function hud(c) {
      c.fillStyle = "rgba(16,23,58,.82)"; c.fillRect(0, 0, W, 40);
      desenha(c, "byte", 10, 5, 1.8); txt(c, "x" + vidas, 36, 14, 12, "#fff");
      desenha(c, "chip", 92, 12, 2); txt(c, "x" + String(chipsN).padStart(2, "0"), 112, 14, 12, "#fff");
      for (let k = 0; k < 3; k++) { c.save(); c.globalAlpha = L.ouros[k] && L.ouros[k].ok ? 1 : .25; desenha(c, "ouro", 188 + k * 24, 9, 2); c.restore(); }
      txt(c, String(pts).padStart(6, "0"), 278, 14, 12, "#FFD23F");
      txt(c, `MUNDO ${cfg.m + 1}-${cfg.k + 1}`, 470, 14, 11, "#fff");
      txt(c, `TEMPO ${String(Math.ceil(relogio)).padStart(3, "0")}`, W - 10, 14, 11, relogio < 30 && Math.floor(tempo * 3) % 2 ? "#FF5A5F" : "#fff", "right");
      if (chefe && chefe.vivo && p.x > L.arena) { txt(c, "REI VIRUS", W / 2 - 120, 52, 10, "#fff", "left", TINTA);
        for (let i = 0; i < 3; i++) { c.fillStyle = TINTA; c.fillRect(W / 2 + 6 + i * 34, 48, 30, 18); c.fillStyle = i < chefe.vida ? "#A855F7" : "#334155"; c.fillRect(W / 2 + 9 + i * 34, 51, 24, 12); } }
    }
    // 🎬 tela de abertura da fase: MUNDO x-y, vidas e a NOVIDADE explicada
    function intro(c) {
      c.fillStyle = TINTA; c.fillRect(0, 0, W, H);
      txt(c, `MUNDO ${cfg.m + 1}-${cfg.k + 1}`, W / 2, 50, 28, "#FFD23F", "center", "#000");
      txt(c, MUNDOS[cfg.m].nome + (volta > 1 ? `  (VOLTA ${volta})` : ""), W / 2, 100, 13, "#fff", "center");
      desenha(c, "byte", W / 2 - 70, 140, 3); txt(c, "x  " + vidas, W / 2 - 12, 160, 16, "#fff");
      // o guia do mundo (alguém da equipe da escola) explica a novidade num balão, como nos jogos antigos
      const [gs, gn] = GUIA[cfg.m];
      desenha(c, gs, 70, 248, 5); txt(c, gn, 106, 336 + 14, 8, "#FFD23F", "center");
      caixa(c, 190, 226, 560, 150, "#FFF6D8"); c.fillStyle = TINTA; c.beginPath(); c.moveTo(186, 290); c.lineTo(160, 300); c.lineTo(186, 306); c.fill();
      c.fillStyle = "#FFF6D8"; c.beginPath(); c.moveTo(192, 293); c.lineTo(172, 300); c.lineTo(192, 303); c.fill();
      txt(c, cpOk ? "VOCE VOLTA DO PONTO DE CONTROLE!" : "NOVIDADE DESTA FASE:", 470, 242, 10, "#334155", "center");
      const [ic, t1, t2] = NOVIDADE[cfg.n - 1];
      if (ic === "faisca") faisca(c, { x: 222, y: 300, fase: 0 }, .2); else if (ic === "mover") plataforma(c, 210, 318, 56);
      else desenha(c, ic, 214, ic === "rei" ? 276 : 298, ic === "rei" ? 3 : ic === "chip" ? 4 : 3);
      txt(c, t1, 300, 294, 12, TINTA); txt(c, t2, 300, 322, 8, "#334155");
      if (cfg.n === 1) txt(c, "<- -> ANDAR   ESPACO OU SETA PARA CIMA: PULAR", 470, 352, 7, "#7C3AED", "center");
      txt(c, "BOA SORTE!", W / 2, 404, 12, "#4ADE80", "center");
    }
    // 🗺️ mapa de fases (no estilo da página inicial "Escolha a sua fase")
    const posFase = n => { const m = Math.floor((n - 1) / 2), k = (n - 1) % 2; return { x: 62 + m * 172 + k * 82, y: 236 - k * 44 }; };
    function mapa(c) {
      const ceu = c.createLinearGradient(0, 0, 0, H); ceu.addColorStop(0, "#63B8FF"); ceu.addColorStop(.7, "#9AD3FF"); c.fillStyle = ceu; c.fillRect(0, 0, W, H);
      nuvem(c, ((tempo * 12) % 1000) - 120, 110, 3); nuvem(c, ((tempo * 8 + 500) % 1000) - 120, 150, 2);
      c.fillStyle = TINTA; c.fillRect(0, 362, W, 4); c.fillStyle = "#3BB273"; c.fillRect(0, 366, W, 14); c.fillStyle = "#2A8C57"; c.fillRect(0, 380, W, 8); c.fillStyle = "#B9733A"; c.fillRect(0, 388, W, 60);
      caixa(c, 150, 16, 500, 76, "#FFF6D8"); txt(c, "BYTE: A AVENTURA", W / 2, 28, 22, TINTA, "center", "#FFD23F");
      txt(c, volta > 1 ? `VOLTA ${volta}: MODO DIFICIL!` : "SALVE A PRINCESA PIXEL DO REI VIRUS!", W / 2, 66, 9, volta > 1 ? "#B91C1C" : "#334155", "center");
      MUNDOS.forEach((M, m) => txt(c, M.nome, 62 + m * 172 + 70, 336, 6, "#fff", "center", TINTA));
      for (let n = 1; n <= FASES; n++) { const q = posFase(n), livre = n <= fSalva, ativo = n === sel, pula = ativo ? Math.abs(Math.sin(tempo * 5)) * 8 : 0;
        if (n < FASES) { const q2 = posFase(n + 1); c.fillStyle = n < fSalva ? "#FFD23F" : "rgba(16,23,58,.35)"; for (let s = 1; s < 6; s++) c.fillRect(q.x + 27 + (q2.x - q.x) * s / 6, q.y + 27 + (q2.y - q.y) * s / 6, 6, 6); }
        caixa(c, q.x, q.y - pula, 60, 60, livre ? (n === FASES ? "#7C3AED" : MUNDOS[Math.floor((n - 1) / 2)].cor) : "#94A3B8");
        c.strokeStyle = "rgba(255,255,255,.45)"; c.lineWidth = 4; c.strokeRect(q.x + 8, q.y + 8 - pula, 44, 44);
        if (livre) txt(c, String(n), q.x + 30, q.y + 18 - pula, 22, "#fff", "center", TINTA); else desenha(c, "cadeado", q.x + 18, q.y + 18, 3);
        for (let k = 0; k < 3; k++) { c.save(); c.globalAlpha = temOuro(n, k) ? 1 : .25; desenha(c, "ouro", q.x + 2 + k * 20, q.y + 68, 1.6); c.restore(); }
        if (ativo) desenha(c, "byte", q.x + 18, q.y - 38 - pula, 2); }
      desenha(c, "welington", 24, 300, 3); caixa(c, 20, 118, 108, 40, "#fff"); txt(c, "AJUDE O", 74, 126, 8, TINTA, "center"); txt(c, "BYTE!", 74, 142, 8, TINTA, "center");
      desenha(c, "princesa", 744, 150, 2); if (volta === 1) { c.fillStyle = "#94A3B8"; for (let i = 0; i < 5; i++) c.fillRect(740 + i * 8, 142, 4, 44); }
      txt(c, `JOGO SALVO: FASE ${Math.min(fSalva, FASES)}`, 20, 400, 9, "#fff", "left", TINTA);
      txt(c, `BYTES DOURADOS ${nOuro()}/24`, W - 20, 400, 9, "#FFD23F", "right", TINTA);
      txt(c, "<- -> ESCOLHER   ENTER JOGAR   OU CLIQUE NA FASE   (M: SOM)", W / 2, 424, 7, "#FFF6D8", "center");
    }
    const obj = {
      update, draw,
      tecla(k, desce) {
        if (desce) ligarSom();
        if (k === "m" || k === "M") { if (desce) mudo = !mudo; return; }
        const usa = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "a", "d", "w", "Enter"].includes(k); if (!usa) return false;
        if (estado === "mapa") { if (!desce) return;
          if (k === "ArrowRight" || k === "d") sel = Math.min(Math.min(fSalva, FASES), sel + 1); else if (k === "ArrowLeft" || k === "a") sel = Math.max(1, sel - 1);
          else if (k === "Enter" || k === " " || k === "ArrowUp") abrirFase(sel); return; }
        if (estado === "intro" && desce && (k === "Enter" || k === " ")) { eT = 0; return; }
        tecla[k] = desce; if (k === "ArrowUp" || k === " " || k === "w") pulou = desce;
      },
      desce(x, y) {
        ligarSom();
        if (estado === "mapa") { for (let n = 1; n <= Math.min(fSalva, FASES); n++) { const q = posFase(n); if (x > q.x - 8 && x < q.x + 68 && y > q.y - 50 && y < q.y + 90) { sel = n; return abrirFase(n); } } return; }
        if (estado === "intro") { eT = 0; return; }
        if (y < H * .5) { pulou = true; tecla.toque = true; } else toqueX = x < W / 2 ? -1 : 1;
      },
      sobe() { toqueX = 0; tecla.toque = false; pulou = false; },
      _teste: { get estado() { return estado; }, get p() { return p; }, get L() { return L; }, get vidas() { return vidas; }, get fSalva() { return fSalva; }, get pts() { return pts; }, abrirFase, morrer, set vidas(v) { vidas = v; }, set cam(v) { cam = camMin = v; } }
    };
    if (P.jogoByte) P.jogoByte._ultimo = obj;   // (para os roteiros de teste)
    return obj;
  }

  /* ---------- tutorial animado ("Veja como se joga") ---------- */
  function demo(c, t, Wd, Hd) {
    c.imageSmoothingEnabled = false; const ceu = c.createLinearGradient(0, 0, 0, Hd); ceu.addColorStop(0, "#63B8FF"); ceu.addColorStop(1, "#9AD3FF"); c.fillStyle = ceu; c.fillRect(0, 0, Wd, Hd);
    c.fillStyle = TINTA; c.fillRect(0, 176, Wd, 4); c.fillStyle = "#3BB273"; c.fillRect(0, 180, Wd, 10); c.fillStyle = "#B9733A"; c.fillRect(0, 190, Wd, 30);
    const x = 20 + t / 4 * 300, pulo = t > 1.4 && t < 2.3 ? Math.sin((t - 1.4) / .9 * Math.PI) * 60 : 0;
    if (t < 1.9) desenha(c, "bug", 170, 156, 2); else { c.save(); c.translate(170, 176); c.scale(1, .4); desenha(c, "bug", 0, -20, 2); c.restore(); }
    if (t < 2.9) desenha(c, "chip", 260, 140, 2);
    desenha(c, "portal", 318, 124, 3);
    desenha(c, pulo ? "byte2" : "byte", x, 144 - pulo, 2);
    J.D.tecla(c, 10, 12, t > 1.3 && t < 1.7 ? "⬆️" : "➡️", t > 1.3 && t < 1.7, 44);
  }

  J.registrar({ id: ID, nome: "Byte: a Aventura", ic: "🤖", cat: "acao", estreia: "2026-11-25", W, H, demo, demoDur: 4,
    controle: "⌨️ ⬅️ ➡️ andar · ⬆️ ou Espaço pular (segure para pular mais alto). 🖱️ No mapa, clique na fase.",
    como: ["🤖 Ajude o robozinho Byte a atravessar 4 mundos e salvar a Princesa Pixel do Rei Vírus!",
      "⬅️ ➡️ andar · ⬆️ ou Espaço PULAR (segure para pular mais alto).",
      "🪙 Pegue os chips, pule EM CIMA dos bugs 🐞 e chegue ao portal do fim. Você tem 3 vidas!",
      "💾 Cada fase vencida fica SALVA: na próxima aula você continua de onde parou."],
    criar });
  P.jogoByte = { CFG, gerar, FASES, ID };
})();
