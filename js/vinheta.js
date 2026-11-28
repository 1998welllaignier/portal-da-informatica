/* ============================================================
   🎬📖 VINHETINHAS DE ETAPA — Prof. Welington Laignier (27/11/2026, aprovadas pelo professor)
   Antes do 🎬 vídeo da missão e da 📖 leitura guiada, uma mini vinheta no estilo Pixel Neon aparece AO MESMO TEMPO
   em todas as telas (alunos, projetor e professor), desenhada pelo próprio navegador (sem arquivo de vídeo).
   - 🎬 Vídeo (8 s): cortina fechada "HORA DO VÍDEO DA MISSÃO" → cortina abre "ATENÇÃO E SILÊNCIO / JÁ VAI COMEÇAR!"
     → contagem 3, 2, 1 (só na tela, com bip) → "VAI!" (bip mais agudo) → o vídeo começa sozinho.
   - 📖 Leitura (12 s): o livro abre "LEITURA GUIADA" → os 3 combinados (todos leem o mesmo trecho · a roleta sorteia
     quem lê · preste atenção: depois tem pergunta) → "QUEM SERÁ O PRIMEIRO?" com a roleta girando.
   SOM: só na janela que já toca o som da aula (projetor, nas 2 telas; o painel, na 1 tela). Os PCs dos alunos não têm som.
   Voz: Gemini (Charon), gerada uma vez e guardada em midia/vinhetas/. Os bips são feitos aqui mesmo (Web Audio).
   Uso: P.vinheta.mostrar(host, { tipo: "video"|"leitura", em: <ms no relógio da aula>, dur: <ms> }, agora, { som: bool })
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const DUR = { video: 8000, leitura: 12000 };
  const VOZ = { video: "midia/vinhetas/voz-video.mp3?v=20261127a", leitura: "midia/vinhetas/voz-leitura.mp3?v=20261127a" };
  const AM = "#ffc43c", AZ = "#5abeff", BR = "#f0f0f0", VM = "#e63c46";
  const ease = u => u * u * (3 - 2 * u), cl = u => Math.max(0, Math.min(1, u));
  let fonteOk = null;
  const fonte = () => fonteOk = fonteOk || (window.FontFace ? new FontFace("VT323", "url(css/fontes/VT323.ttf)").load().then(f => { document.fonts.add(f); }).catch(() => {}) : Promise.resolve());
  const ligada = () => { try { return localStorage.getItem("portal:vinhetas") !== "0"; } catch (e) { return true; } };

  /* ---------- desenho (tela lógica 640 × 360; o canvas tem 1280 × 720) ---------- */
  const ESTRELAS = Array.from({ length: 90 }, (_, i) => [(i * 137) % 640, (i * 89 + (i * i) % 37) % 260]);
  function fundo(c) {
    const g = c.createLinearGradient(0, 0, 0, 360); g.addColorStop(0, "#080a1e"); g.addColorStop(1, "#141638"); c.fillStyle = g; c.fillRect(0, 0, 640, 360);
    c.fillStyle = "#788cdc"; ESTRELAS.forEach(([x, y]) => c.fillRect(x, y, 1, 1));
  }
  function brilho(c, x, y, r, cor, f) {
    if (f <= 0 || r <= 0) return; c.save(); c.globalCompositeOperation = "lighter";
    const g = c.createRadialGradient(x, y, 0, x, y, r * 1.6); g.addColorStop(0, cor.replace("A", (.55 * f).toFixed(3))); g.addColorStop(1, cor.replace("A", "0"));
    c.fillStyle = g; c.fillRect(x - r * 1.6, y - r * 1.6, r * 3.2, r * 3.2); c.restore();
  }
  function tarja(c, cx, y, partes, tam) {   // título em tarja escura, letra pixel estreita (tamanho em px da tela lógica)
    c.font = `${tam}px VT323, monospace`; c.textBaseline = "top"; const w = partes.reduce((s, [t]) => s + c.measureText(t).width, 0); let x = cx - w / 2;
    c.fillStyle = "#060814"; c.fillRect(Math.round(x - 8), Math.round(y - 3), Math.round(w + 16), Math.round(tam * .86));
    partes.forEach(([t, cor]) => { c.fillStyle = cor; c.fillText(t, x, y - tam * .1); x += c.measureText(t).width; });
  }
  function nome(c) {
    const s = "PROF. WELINGTON LAIGNIER"; c.font = "20px VT323, monospace"; c.textBaseline = "top"; const w = c.measureText(s).width, x = 320 - w / 2, y = 330;
    c.fillStyle = "#000"; for (const dx of [-1.5, 0, 1.5]) for (const dy of [-1.5, 0, 1.5]) c.fillText(s, x + dx, y + dy);
    c.fillStyle = "#ffd628"; c.fillText(s, x, y);
  }
  function cinema(c, abre) {
    c.fillStyle = abre > .5 ? "#e6eeff" : "#141e3c"; c.fillRect(150, 60, 340, 190);
    for (const lado of [0, 1]) { const larg = Math.round(170 * (1 - abre)); if (larg <= 0) continue; const x0 = lado ? 490 - larg : 150;
      c.fillStyle = "#aa1e28"; c.fillRect(x0, 56, larg, 198); c.fillStyle = "#78101a"; for (let x = x0 + 6; x < x0 + larg; x += 12) c.fillRect(x, 56, 2, 198); }
    c.fillStyle = "#78101a"; c.fillRect(140, 46, 360, 12);
    for (let i = 0; i < 14; i++) { c.fillStyle = "#1e1e32"; c.fillRect(60 + i * 38, 290, 28, 30); c.fillStyle = "#3c325a"; c.fillRect(60 + i * 38, 284, 28, 8); }
  }
  function olho(c, x, y) { c.fillStyle = BR; c.strokeStyle = "#000"; c.beginPath(); c.ellipse(x, y, 18, 10, 0, 0, 7); c.fill(); c.stroke(); c.fillStyle = "#3c78f0"; c.beginPath(); c.arc(x, y, 7, 0, 7); c.fill(); c.fillStyle = "#000"; c.beginPath(); c.arc(x, y, 3, 0, 7); c.fill(); }
  function mudo(c, x, y) { c.fillStyle = "#283250"; c.fillRect(x - 16, y - 6, 8, 12); c.beginPath(); c.moveTo(x - 8, y - 6); c.lineTo(x + 2, y - 14); c.lineTo(x + 2, y + 14); c.lineTo(x - 8, y + 6); c.fill();
    c.strokeStyle = VM; c.lineWidth = 3; c.beginPath(); c.moveTo(x + 8, y - 8); c.lineTo(x + 20, y + 8); c.moveTo(x + 20, y - 8); c.lineTo(x + 8, y + 8); c.stroke(); c.lineWidth = 1; }
  function contagem(c, u) {
    c.strokeStyle = "#c8c8dc"; c.lineWidth = 3; c.beginPath(); c.arc(320, 170, 100, 0, 7); c.stroke(); c.strokeStyle = "#787896"; c.lineWidth = 2; c.beginPath(); c.arc(320, 170, 80, 0, 7); c.stroke();
    c.lineWidth = 1; c.beginPath(); c.moveTo(320, 60); c.lineTo(320, 280); c.moveTo(210, 170); c.lineTo(430, 170); c.stroke();
    c.fillStyle = "rgba(60,70,110,.85)"; c.beginPath(); c.moveTo(320, 170); c.arc(320, 170, 80, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * u); c.fill();
  }
  function livro(c, x, y, ab) {
    c.fillStyle = "#faf4dc"; c.strokeStyle = "#000";
    for (const s of [-1, 1]) { c.beginPath(); c.moveTo(x, y); c.lineTo(x + s * 90 * ab, y - 10); c.lineTo(x + s * 90 * ab, y + 90); c.lineTo(x, y + 100); c.closePath(); c.fill(); c.stroke(); }
    c.strokeStyle = "#b4aa8c"; c.lineWidth = 2; for (let i = 0; i < 5; i++) { c.beginPath(); c.moveTo(x - 78 * ab, y + 10 + i * 14); c.lineTo(x - 12, y + 12 + i * 14); c.moveTo(x + 12, y + 12 + i * 14); c.lineTo(x + 78 * ab, y + 10 + i * 14); c.stroke(); } c.lineWidth = 1;
  }
  const CORES = ["#e64650", "#ffc43c", "#5abeff", "#78dc8c", "#be78ff", "#ff8c3c"];
  function roleta(c, x, y, r, ang) {
    CORES.forEach((cor, i) => { c.fillStyle = cor; c.strokeStyle = "#000"; c.beginPath(); c.moveTo(x, y); c.arc(x, y, r, (ang + i * 60) * Math.PI / 180, (ang + (i + 1) * 60) * Math.PI / 180); c.closePath(); c.fill(); c.stroke(); });
    c.fillStyle = BR; c.beginPath(); c.arc(x, y, 6, 0, 7); c.fill(); c.beginPath(); c.moveTo(x - 8, y - r - 14); c.lineTo(x + 8, y - r - 14); c.lineTo(x, y - r + 4); c.closePath(); c.fill(); c.stroke();
  }
  function interrog(c, x, y) { c.fillStyle = "#8c50dc"; c.strokeStyle = "#000"; c.fillRect(x - 22, y - 22, 44, 44); c.strokeRect(x - 22, y - 22, 44, 44); c.fillStyle = BR; c.font = "40px VT323, monospace"; c.textBaseline = "middle"; c.textAlign = "center"; c.fillText("?", x, y); c.textAlign = "left"; }
  const sobe = (t, t0) => Math.round(9 * (1 - ease(cl((t - t0) / .3))));

  /* 🎬 VÍDEO — tempos da voz: 0,24 "Hora do vídeo…" · 1,95 "Atenção e silêncio…" · contagem 4,6 / 5,6 / 6,6 · VAI! 7,6 */
  function quadroVideo(c, t) {
    fundo(c);
    if (t < 4.6) { const abre = ease(cl((t - 1.9) / .7)); cinema(c, abre);
      if (abre > .6) { olho(c, 250, 150); mudo(c, 390, 150); c.font = "17px VT323, monospace"; c.fillStyle = "#141e3c"; c.textBaseline = "top"; c.fillText("OLHOS NA TELA", 215, 170); c.fillText("SEM CONVERSA", 350, 170); }
      brilho(c, 320, 150, 130 * abre, "rgba(200,220,255,A)", abre);
      tarja(c, 320, 20 + sobe(t, .2), t < 1.9 ? [["HORA DO ", BR], ["VÍDEO", AM], [" DA MISSÃO", BR]] : [["ATENÇÃO E ", BR], ["SILÊNCIO", AM]], 36);
      if (t > 3) tarja(c, 320, 260 + sobe(t, 3), [["JÁ VAI COMEÇAR!", AZ]], 32);
    } else { const PASSOS = [[4.6, "3"], [5.6, "2"], [6.6, "1"], [7.6, "VAI!"]]; const [a0, n] = PASSOS.filter(p => t >= p[0] - .1).pop() || PASSOS[0];
      contagem(c, cl((t - a0 + .1) / 1)); brilho(c, 320, 170, 80, "rgba(255,230,150,A)", .9);
      const s = 1 + .5 * (1 - ease(cl((t - a0 + .1) / .25))), tam = (n === "VAI!" ? 100 : 130) * s;
      c.font = `${tam}px VT323, monospace`; c.textBaseline = "middle"; c.textAlign = "center"; c.fillStyle = n === "VAI!" ? AM : BR; c.fillText(n, 320, 172); c.textAlign = "left";
      tarja(c, 320, 20, [["JÁ VAI COMEÇAR!", AZ]], 32); }
    nome(c);
  }
  /* 📖 LEITURA — 0,23 título · 2,52 "Todos leem…" · 4,48 "a roleta…" · 6,57 "…tem pergunta" · 8,50 "Prestem atenção!" · 10,12 "Quem será o primeiro?" */
  function quadroLeitura(c, t) {
    fundo(c);
    if (t < 2.45) { const ab = ease(cl((t - .2) / .8)); brilho(c, 320, 165, 120 * ab, "rgba(255,230,150,A)", ab); livro(c, 320, 110, Math.max(.05, ab)); tarja(c, 320, 20 + sobe(t, .2), [["LEITURA ", BR], ["GUIADA", AM]], 40); }
    else if (t < 10) {
      const v = [2.5, 4.45, 6.55].map(a => cl((t - a) / .35)), pisca = t > 8.5 && t < 9.6 && Math.floor(t * 6) % 2 === 0;
      tarja(c, 320, 20, [["COMO ", BR], ["FUNCIONA", AM]], 32);
      if (v[0]) { brilho(c, 110, 165, 45, "rgba(255,230,150,A)", .7 * v[0]); livro(c, 110, 120 + sobe(t, 2.5) / 2, .45); tarja(c, 110, 235, [["1. TODOS LEEM", BR]], 20); tarja(c, 110, 258, [["O MESMO TRECHO", BR]], 20); }
      if (v[1]) { brilho(c, 320, 165, 45, "rgba(255,230,150,A)", .7 * v[1]); roleta(c, 320, 165 + sobe(t, 4.45) / 2, 46, 20 + (t - 4.45) * 120); tarja(c, 320, 235, [["2. A ", BR], ["ROLETA", AM]], 20); tarja(c, 320, 258, [["SORTEIA QUEM LÊ", BR]], 20); }
      if (v[2]) { brilho(c, 530, 165, pisca ? 60 : 45, "rgba(190,140,255,A)", (pisca ? 1.4 : .7) * v[2]); interrog(c, 530, 165 + sobe(t, 6.55) / 2); tarja(c, 530, 235, [["3. PRESTE ", BR], ["ATENÇÃO", pisca ? VM : AM]], 20); tarja(c, 530, 258, [["DEPOIS TEM PERGUNTA", BR]], 20); }
    } else { brilho(c, 320, 170, 110, "rgba(255,255,255,A)", .7); roleta(c, 320, 170, 80, 140 + (t - 10) * 900 * Math.max(.05, 1 - (t - 10) / 2.2)); tarja(c, 320, 20 + sobe(t, 10), [["QUEM SERÁ O ", BR], ["PRIMEIRO", AM], ["?", BR]], 32); }
    nome(c);
  }

  /* ---------- som (bips da contagem + voz) ---------- */
  function bips(tipo, t0) {   // agenda os bips a partir de agora (t0 = segundos já passados da vinheta)
    if (tipo !== "video") return null;
    let ac; try { ac = (P.sons && P.sons.ctx && P.sons.ctx()) || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state !== "running") ac.resume().catch(() => {}); } catch (e) { return null; }
    const mg = ac.createGain(); mg.connect(ac.destination);   // um "volume geral" desta vinheta: ⏭ pular desliga tudo de uma vez
    const bip = (quando, f, d, vol) => { const at = ac.currentTime + quando - t0; if (at < ac.currentTime - .05) return;
      const o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; o2.frequency.value = f * 2; o.connect(g); o2.connect(g); g.connect(mg);
      g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(vol, at + .005); g.gain.exponentialRampToValueAtTime(.001, at + d); o.start(at); o2.start(at); o.stop(at + d + .05); o2.stop(at + d + .05); };
    [4.6, 5.6, 6.6].forEach(q => bip(q, 880, .18, .25)); bip(7.6, 1320, .6, .32);
    return mg;
  }

  /* ---------- mostrar ---------- */
  function mostrar(host, vin, agora, op) {
    op = op || {}; if (!host || !vin || !vin.tipo || !vin.em) return;
    const dur = vin.dur || DUR[vin.tipo] || 8000, fim = vin.em + dur;
    if (agora() >= fim - 150) return parar(host);
    const chave = vin.tipo + vin.em; if (host._vin && host._vin.chave === chave) { host._vin.fim = fim; return; }
    parar(host);
    if (getComputedStyle(host).position === "static") host.style.position = "relative";
    const ov = document.createElement("div"); ov.className = "vin-ov"; ov.setAttribute("aria-label", vin.tipo === "video" ? "Vinheta: hora do vídeo" : "Vinheta: leitura guiada");
    ov.innerHTML = `<canvas width="1280" height="720"></canvas>`; host.appendChild(ov);
    const cv = ov.querySelector("canvas"), c = cv.getContext("2d"); c.imageSmoothingEnabled = false;
    const V = host._vin = { chave, fim, ov, raf: 0, audio: null };
    if (op.som) {   // 🔊 só na janela que toca o som da aula
      const t0 = Math.max(0, (agora() - vin.em) / 1000);
      try { if (t0 < 1.5) { const a = new Audio(VOZ[vin.tipo]); a.volume = 1; V.audio = a; const vai = () => { a.currentTime = Math.max(0, (agora() - vin.em) / 1000); a.play().catch(() => {}); };
        const espera = vin.em - agora(); espera > 0 ? setTimeout(vai, espera) : vai(); } } catch (e) {}
      V.ac = bips(vin.tipo, Math.max(0, (agora() - vin.em) / 1000));
    }
    fonte().then(() => {
      const pinta = () => { if (!ov.isConnected) return; const t = (agora() - vin.em) / 1000;
        if (agora() >= V.fim) return parar(host);
        c.setTransform(2, 0, 0, 2, 0, 0); (vin.tipo === "video" ? quadroVideo : quadroLeitura)(c, Math.max(0, t));
        const fe = cl((t - (V.fim - vin.em) / 1000 + .35) / .35); if (fe > 0) { c.fillStyle = `rgba(255,255,255,${fe})`; c.fillRect(0, 0, 640, 360); }   // clarão no fim
        V.raf = requestAnimationFrame(pinta); };
      pinta(); });
  }
  function parar(host) {
    const V = host && host._vin; if (!V) return; host._vin = null; cancelAnimationFrame(V.raf);
    try { if (V.audio) { V.audio.pause(); V.audio.src = ""; } } catch (e) {} try { if (V.ac) V.ac.disconnect(); } catch (e) {} if (V.ov && V.ov.isConnected) V.ov.remove();
  }
  P.vinheta = { mostrar, parar, ligada, DUR, ativa: host => !!(host && host._vin) };
})();
