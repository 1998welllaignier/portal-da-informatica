/* ============================================================
   🎵 MÚSICA AMBIENTE DO PORTAL — Prof. Welington Laignier (20/11/2026)
   Pedido do professor: a caixinha de som da sala desliga sozinha quando
   fica muito tempo sem som. Esta música ambiente, bem baixinha, mantém a
   caixinha "acordada" sem atrapalhar a aula.

   • Música ORIGINAL e ANIMADA, criada na hora pelo navegador (Web Audio):
     acordes alegres, baixo saltitante, chocalho e melodia que muda sozinha.
     Nenhum arquivo de áudio, nenhum direito autoral de terceiros.
   • Só toca no PAINEL DO PROFESSOR (inclui o placar ao vivo): em nenhum outro lugar.
   • Botão 🎵 no canto de baixo: liga/desliga e volume, com a marca
     "ambiente" (o volume padrão). Tudo fica memorizado neste computador.
   • Abaixa sozinha e volta depois: enquanto a roleta gira, na festa do
     sorteio e do pódio, enquanto um vídeo do YouTube toca no portal,
     com o vídeo aberto em outra aba e quando o professor clica dentro do vídeo.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const AMB = 22;                                   // posição "ambiente" do volume (0 a 100)
  const lerLS = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } };
  const gravarLS = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  let ligada = lerLS("portal:musica", "1") === "1", vol = +lerLS("portal:musica:vol", AMB);
  let ctx = null, mestre = null, abafo = null, filtro = null, eco = null, prox = 0, acorde = 0, iv = null, abafarAte = 0, tocando = false;
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  const ehProf = () => /^#\/painel/.test(location.hash);   // só no PAINEL DO PROFESSOR (pedido do professor): em nenhum outro lugar

  /* 🎶 ESTILOS (20/11/2026). "animada" é a escolhida pelo professor ("gostei muito… acho que vai ser essa").
     A pedido dele, outros estilos para comparar, todos originais e criados na hora pelo navegador:
     🥁 pagodinho · ☕ lo-fi · 📺 programa de TV (auditório) · 👾 videogame 8 bits.
     Cada estilo toca em semicolcheias (16 por compasso) e escolhe os acordes da sua sequência. */
  const ESTILOS = {
    animada:   { nome: "🎉 Animada (a escolhida)", bpm: 112, acordes: [{ b: 36, n: [60, 64, 67] }, { b: 43, n: [59, 62, 67] }, { b: 45, n: [57, 60, 64] }, { b: 41, n: [57, 60, 65] }], melo: [72, 74, 76, 79, 81, 84] },
    pagodinho: { nome: "🥁 Pagodinho", bpm: 96, acordes: [{ b: 36, n: [64, 67, 72] }, { b: 45, n: [64, 67, 73] }, { b: 38, n: [65, 69, 74] }, { b: 43, n: [65, 71, 74] }], melo: [72, 74, 76, 79, 81] },
    lofi:      { nome: "☕ Lo-fi (calminha)", bpm: 76, acordes: [{ b: 36, n: [59, 64, 67, 71] }, { b: 45, n: [60, 64, 67, 72] }, { b: 38, n: [60, 65, 69, 72] }, { b: 43, n: [59, 62, 65, 69] }], melo: [76, 79, 81, 83, 84, 86] },
    tv:        { nome: "📺 Programa de TV", bpm: 128, acordes: [{ b: 36, n: [60, 64, 67] }, { b: 41, n: [60, 65, 69] }, { b: 43, n: [62, 67, 71] }, { b: 36, n: [64, 67, 72] }], melo: [72, 76, 79, 84, 79, 76] },
    oitobits:  { nome: "👾 Videogame 8 bits", bpm: 140, acordes: [{ b: 36, n: [60, 64, 67] }, { b: 45, n: [57, 60, 64] }, { b: 41, n: [57, 60, 65] }, { b: 43, n: [59, 62, 67] }], melo: [72, 74, 76, 79, 81, 84] },
  };
  /* 🥁 10 VERSÕES DE PAGODINHO (20/11/2026: "gostei desse estilo, faça 10 versões diferentes"). Todas originais:
     cada uma muda o andamento, o tom, a sequência de acordes, o desenho do cavaquinho/banjo, o surdo, o baixo e a melodia. */
  const QUAL = { M: [0, 4, 7], m: [0, 3, 7], 7: [0, 4, 7, 10], m7: [0, 3, 7, 10], maj7: [0, 4, 7, 11], 6: [0, 4, 7, 9] };
  const ac = (raiz, q) => { const r = 36 + ((raiz % 12) + 12) % 12, base = 60 + ((raiz % 12) + 12) % 12; return { b: r > 43 ? r - 12 : r, n: QUAL[q].map(i => { const m = base + i; return m > 74 ? m - 12 : m; }).sort((x, y) => x - y) }; };
  const pent = (tom, menor) => (menor ? [0, 3, 5, 7, 10, 12] : [0, 2, 4, 7, 9, 12]).map(i => 72 + ((tom % 12) + 12) % 12 - (tom % 12 > 4 ? 12 : 0) + i);
  const PAGODES = [
    ["Pagode 1 · Roda clássica",          { bpm: 96,  ac: [[0, "M"], [9, "7"], [2, "m"], [7, "7"]], tom: 0, cav: [0, 3, 6, 10, 12], surdo: [8], baixo: "roda", mel: "triangle", melBarras: 3 }],
    ["Pagode 2 · Partido-alto",           { bpm: 100, ac: [[5, "M"], [2, "7"], [7, "m"], [0, "7"]], tom: 5, cav: [0, 3, 5, 8, 11, 14], surdo: [8], baixo: "partido", mel: "square", melBarras: 2 }],
    ["Pagode 3 · Samba de quintal",       { bpm: 84,  ac: [[7, "M"], [4, "m7"], [9, "m7"], [2, "7"]], tom: 7, cav: [0, 6, 10], surdo: [8], baixo: "roda", mel: "sine", melBarras: 4, flauta: true }],
    ["Pagode 4 · Romântico anos 90",      { bpm: 90,  ac: [[2, "maj7"], [11, "m7"], [4, "m7"], [9, "7"]], tom: 2, cav: [0, 6, 12], surdo: [8], baixo: "longo", mel: "sine", melBarras: 4, pad: true }],
    ["Pagode 5 · Festa acelerada",        { bpm: 112, ac: [[0, "M"], [5, "M"], [7, "7"], [0, "M"]], tom: 0, cav: [0, 2, 4, 6, 8, 10, 12, 14], surdo: [8], baixo: "roda", mel: "square", melBarras: 3, palmas: true }],
    ["Pagode 6 · Bossa no pagode",        { bpm: 92,  ac: [[9, "m7"], [2, "7"], [7, "maj7"], [0, "maj7"]], tom: 7, cav: [0, 3, 7, 10, 13], surdo: [8], baixo: "bossa", mel: "sine", melBarras: 4, pad: true }],
    ["Pagode 7 · Escola de samba",        { bpm: 120, ac: [[9, "M"], [6, "m"], [11, "m"], [4, "7"]], tom: 9, cav: [0, 3, 6, 10, 12], surdo: [0, 8], baixo: "roda", mel: "square", melBarras: 3, repique: true, palmas: true }],
    ["Pagode 8 · Pagode de mesa (tantã)", { bpm: 94,  ac: [[4, "M"], [1, "m"], [6, "m"], [11, "7"]], tom: 4, cav: [0, 3, 6, 10, 12], surdo: [], baixo: "roda", mel: "triangle", melBarras: 3, tanta: true }],
    ["Pagode 9 · Samba-rock",             { bpm: 104, ac: [[9, "m7"], [2, "7"], [9, "m7"], [4, "7"]], tom: 9, menor: true, cav: [2, 6, 10, 14], surdo: [8], baixo: "rock", mel: "square", melBarras: 2, palmas: true }],
    ["Pagode 10 · Banjo na roda",         { bpm: 98,  ac: [[10, "M"], [7, "7"], [0, "m"], [5, "7"]], tom: 10, cav: [0, 2, 3, 6, 8, 10, 11, 14], surdo: [8], baixo: "partido", mel: "triangle", melBarras: 3, banjo: true }],
  ];
  PAGODES.forEach(([nome, v], i) => { ESTILOS["pagode" + (i + 1)] = { nome: "🥁 " + nome, bpm: v.bpm, acordes: v.ac.map(([r, q]) => ac(r, q)), melo: pent(v.tom, v.menor), v, toca: "pagodeV", oculto: true }; });
  let estilo = ESTILOS[lerLS("portal:musica:estilo", "animada")] ? lerLS("portal:musica:estilo", "animada") : "animada";
  const E = () => ESTILOS[estilo];
  const semi = () => 15 / E().bpm;                                // duração de uma semicolcheia (s)
  let passo = 0, motivo = [];
  function montar() {
    if (ctx) return true;
    const c = P.sons && P.sons.ctx ? P.sons.ctx() : null; if (!c) return false;
    ligarNos(c); return true;
  }
  function ligarNos(c) {   // monta a "mesa de som" (também usada para gravar as amostras)
    ctx = c; mestre = ctx.createGain(); mestre.gain.value = 0;
    abafo = ctx.createGain(); abafo.gain.value = 1;
    filtro = ctx.createBiquadFilter(); filtro.type = "lowpass"; filtro.frequency.value = 4200;
    eco = ctx.createDelay(1.5); eco.delayTime.value = 0.4; const fb = ctx.createGain(); fb.gain.value = 0.22; const ecoV = ctx.createGain(); ecoV.gain.value = 0.25;
    eco.connect(fb).connect(eco); eco.connect(ecoV).connect(filtro);
    filtro.connect(mestre).connect(abafo).connect(ctx.destination);
  }
  const ganho = () => Math.pow(Math.max(0, Math.min(100, vol)) / 100, 2) * 0.9;
  function toque(m, t, d, v, tipo, comEco, ataque) {     // nota curta
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = tipo || "triangle"; o.frequency.value = hz(m);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + (ataque || 0.012)); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(filtro); if (comEco) g.connect(eco); o.start(t); o.stop(t + d + 0.05);
  }
  function metal(m, t, d, v) {   // "metais" de programa de auditório: duas ondas dente-de-serra levemente desafinadas, abafadas
    [-6, 6].forEach(dt => { const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(); o.type = "sawtooth"; o.frequency.value = hz(m); o.detune.value = dt;
      f.type = "lowpass"; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(2600, t + 0.05); f.frequency.exponentialRampToValueAtTime(1200, t + d);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(f).connect(g).connect(filtro); o.start(t); o.stop(t + d + 0.05); });
  }
  function ruido(t, v, dur, corte, tipo) {
    const n = Math.floor(ctx.sampleRate * (dur || 0.05)), bf = ctx.createBuffer(1, n, ctx.sampleRate), d = bf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = bf; f.type = tipo || "highpass"; f.frequency.value = corte || 6000; g.gain.value = v;
    s.connect(f).connect(g).connect(filtro); s.start(t);
  }
  const chocalho = (t, v) => ruido(t, v, 0.05, 6000);
  function bumbo(t, v, de, ate) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine";
    o.frequency.setValueAtTime(de || 140, t); o.frequency.exponentialRampToValueAtTime(ate || 48, t + 0.12);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22); o.connect(g).connect(filtro); o.start(t); o.stop(t + 0.25);
  }
  function novoMotivo(n) {   // pedacinho de melodia que muda sozinho (pausas + passos pela escala do estilo)
    const M = E().melo; let i = Math.floor(Math.random() * 3); motivo = [];
    for (let k = 0; k < (n || 8); k++) { if (Math.random() < 0.42) { motivo.push(null); continue; } i = Math.max(0, Math.min(M.length - 1, i + [-1, 1, 1, 2, -2][Math.floor(Math.random() * 5)])); motivo.push(M[i]); }
  }
  // cada estilo diz o que toca em cada semicolcheia s (0 a 15) do compasso
  const TOCA = {
    animada(s, t, A, barra) {
      if (s % 2) return; const naBarra = s / 2;
      if (naBarra === 0 && (barra % 2 === 0 || !motivo.length)) novoMotivo(8);
      if (naBarra % 2 === 0) { const b = naBarra / 2; toque(A.b + (b % 2 ? 12 : 0), t, 0.28, 0.16, "triangle"); if (b === 0 || b === 2) bumbo(t, 0.22); chocalho(t, 0.035); }
      else { A.n.forEach(m => toque(m, t, 0.16, 0.045, "square")); chocalho(t, 0.06); }
      const nota = motivo[naBarra]; if (nota && barra % 8 < 6) toque(nota, t, 0.22, 0.06, "sine", true);
    },
    pagodinho(s, t, A, barra) {   // pandeiro em todas as semicolcheias, surdo no 2º tempo, cavaquinho sincopado, baixo de 7 cordas
      if (s === 0 && barra % 2 === 0) novoMotivo(8);
      ruido(t, [0.07, 0.03, 0.045, 0.03][s % 4], 0.04, 5000);                                      // pandeiro (platinelas)
      if (s % 4 === 0) ruido(t, 0.05, 0.08, 700, "lowpass");                                       // pandeiro (pele)
      if (s === 8) bumbo(t, 0.26, 95, 50); if (s === 0 || s === 14) bumbo(t, 0.1, 90, 55);         // surdo
      if ([0, 3, 6, 10, 12].includes(s)) A.n.forEach(m => toque(m, t, 0.1, 0.04, "square"));      // cavaquinho
      if ([0, 6, 8, 14].includes(s)) toque(A.b + (s === 6 ? 7 : s === 14 ? 4 : s === 8 ? 12 : 0), t, 0.3, 0.15, "triangle");
      const nota = s % 2 ? null : motivo[s / 2]; if (nota && barra % 4 < 3) toque(nota, t, 0.2, 0.05, "triangle", true);
    },
    pagodeV(s, t, A, barra) {     // as 10 versões de pagodinho (os detalhes vêm de E().v)
      const v = E().v;
      if (s === 0 && barra % 2 === 0) novoMotivo(8);
      ruido(t, [0.07, 0.03, 0.045, 0.03][s % 4], 0.04, 5000);                                      // pandeiro (platinelas)
      if (s % 4 === 0) ruido(t, 0.05, 0.08, 700, "lowpass");                                       // pandeiro (pele)
      v.surdo.forEach(k => { if (s === k) bumbo(t, k === 8 ? 0.26 : 0.16, 95, 50); });
      if (v.surdo.length && (s === 0 || s === 14) && !v.surdo.includes(s)) bumbo(t, 0.09, 90, 55);
      if (v.tanta && [0, 3, 8, 11, 14].includes(s)) bumbo(t, s === 8 ? 0.24 : 0.12, s % 2 ? 160 : 120, 70); // tantã
      if (v.repique && s % 2 === 0 && barra % 2) ruido(t, 0.04, 0.05, 2500, "bandpass");
      if (v.palmas && (s === 4 || s === 12)) { ruido(t, 0.07, 0.06, 1500, "bandpass"); ruido(t + 0.012, 0.05, 0.06, 1100, "bandpass"); }
      if (v.cav.includes(s)) A.n.forEach(m => v.banjo ? toque(m + 12, t, 0.08, 0.035, "square") : toque(m, t, 0.1, 0.04, "square"));
      if (v.pad && s === 0) A.n.forEach(m => toque(m, t, semi() * 15, 0.025, "sine", false, 0.2));
      const B = { roda: [[0, 0], [6, 7], [8, 12], [14, 4]], partido: [[0, 0], [3, 7], [6, 12], [8, 0], [11, 7], [14, 4]], longo: [[0, 0], [8, 7]], bossa: [[0, 0], [6, 7], [8, 7], [14, 0]], rock: [[0, 0], [3, 0], [6, 12], [10, 7], [12, 10], [14, 12]] }[v.baixo] || [];
      B.forEach(([k, iv]) => { if (s === k) toque(A.b + iv, t, v.baixo === "longo" ? 0.7 : 0.3, 0.15, "triangle"); });
      const nota = s % 2 ? null : motivo[s / 2]; if (nota && barra % 4 < v.melBarras) toque(nota, t, v.flauta ? 0.35 : 0.2, v.flauta ? 0.06 : 0.05, v.mel, true, v.flauta ? 0.03 : 0.012);
    },
    lofi(s, t, A, barra) {         // piano elétrico macio, batida preguiçosa, poucas notas
      const sw = s % 2 ? semi() * 0.18 : 0; t += sw;                                               // balanço (swing)
      if (s === 0) { novoMotivo(8); A.n.forEach((m, k) => toque(m, t + k * 0.03, 2.4, 0.05, "sine", false, 0.04)); }
      if (s === 10) A.n.slice(1).forEach(m => toque(m, t, 1.1, 0.03, "sine", false, 0.04));
      if (s === 0 || s === 7 || s === 10) bumbo(t, 0.2, 110, 45);
      if (s === 4 || s === 12) ruido(t, 0.05, 0.12, 1800, "bandpass");                              // caixa abafada
      if (s % 2 === 0) ruido(t, 0.018, 0.03, 8000);
      if (s === 0 || s === 8) toque(A.b, t, 1.2, 0.13, "sine");
      const nota = s % 2 ? null : motivo[s / 2]; if (nota && barra % 4 >= 2) toque(nota, t, 0.5, 0.035, "sine", true, 0.03);
    },
    tv(s, t, A, barra) {           // auditório: metais em "pá-pá-pá", palmas no 2 e no 4, baixo em oitavas
      if (s === 0 && barra % 2 === 0) novoMotivo(8);
      if (s % 4 === 0) bumbo(t, 0.22);
      if (s === 4 || s === 12) { ruido(t, 0.09, 0.06, 1500, "bandpass"); ruido(t + 0.012, 0.07, 0.06, 1100, "bandpass"); }   // palmas
      if (s % 2 === 0) ruido(t, 0.03, 0.03, 8000);
      if (s % 2 === 0) toque(A.b + (s % 4 ? 12 : 0), t, 0.18, 0.14, "triangle");
      if ([0, 3, 6].includes(s) && barra % 2 === 0) A.n.forEach(m => metal(m, t, 0.16, 0.03));
      if (s === 14 && barra % 4 === 3) A.n.forEach(m => metal(m + 12, t, 0.3, 0.025));
      const nota = s % 2 ? null : motivo[s / 2]; if (nota && barra % 2) toque(nota, t, 0.16, 0.05, "square", true);
    },
    oitobits(s, t, A, barra) {     // videogame antigo: arpejo rápido, baixo triangular, "chiado" de bateria
      if (s === 0 && barra % 2 === 0) novoMotivo(8);
      const arp = [...A.n, A.n[0] + 12]; toque(arp[s % 4] + 12, t, 0.07, 0.03, "square");
      if (s % 4 === 0) toque(A.b + 12, t, 0.2, 0.15, "triangle"); if (s % 4 === 2) toque(A.b + 24, t, 0.1, 0.1, "triangle");
      if (s % 8 === 4) ruido(t, 0.07, 0.07, 2500); if (s % 2 === 0) ruido(t, 0.02, 0.02, 9000);
      const nota = s % 2 ? null : motivo[s / 2]; if (nota && barra % 8 < 6) toque(nota, t, 0.14, 0.05, "square");
    },
  };
  function agendar(ate) {
    if (!ctx || !tocando) return;
    if (prox < ctx.currentTime) prox = ctx.currentTime + 0.1;
    const lim = ate != null ? ate : ctx.currentTime + 1.5;
    while (prox < lim) {
      const s = passo % 16, barra = Math.floor(passo / 16), A = E().acordes[barra % E().acordes.length];
      try { TOCA[E().toca || estilo](s, prox, A, barra); } catch (e) {}
      prox += semi(); passo++;
    }
  }
  /* 🎧 grava uns segundos de um estilo num arquivo de som (para o professor comparar os estilos) */
  async function renderizar(qual, seg) {
    const salvo = { ctx, mestre, abafo, filtro, eco, estilo, prox, passo, tocando, motivo };
    const off = new OfflineAudioContext(2, Math.ceil(44100 * seg), 44100);
    ligarNos(off); mestre.gain.value = 0.6; estilo = qual; prox = 0.05; passo = 0; motivo = []; tocando = true;
    agendar(seg - 0.6);
    ({ ctx, mestre, abafo, filtro, eco, estilo, prox, passo, tocando, motivo } = salvo);
    return off.startRendering();
  }
  /* ---------- quando abaixar: vídeo tocando, vídeo em outra aba, festa da roleta/pódio ---------- */
  const ytTocando = new Set();
  addEventListener("message", e => {
    if (!/youtube(-nocookie)?\.com$/.test((e.origin || "").replace(/^https?:\/\/(www\.)?/, ""))) return;
    let d = e.data; try { d = typeof d === "string" ? JSON.parse(d) : d; } catch (x) { return; }
    const st = d && (d.event === "onStateChange" ? d.info : d.info && d.info.playerState);
    if (st == null) return; const src = e.source;
    if (st === 1 || st === 3) ytTocando.add(src); else ytTocando.delete(src);
    aplicar();
  });
  // pede ao YouTube para avisar quando o vídeo toca/pausa (vale para os vídeos com enablejsapi=1)
  setInterval(() => { document.querySelectorAll('iframe[src*="youtube"]').forEach(f => { if (!/enablejsapi=1/.test(f.src) || !f.contentWindow) return;
    try { f.contentWindow.postMessage(JSON.stringify({ event: "listening", id: f.dataset.ytId || (f.dataset.ytId = Math.random().toString(36).slice(2)), channel: "widget" }), "*"); } catch (e) {} }); }, 2000);
  const videoAtivo = () => { const a = document.activeElement; return ytTocando.size > 0 || !!(a && a.tagName === "IFRAME" && /youtube/.test(a.src || "")) || document.hidden; };
  function aplicar() {
    if (!ctx || !mestre) return;
    const deveTocar = ligada && ehProf(), calar = !deveTocar || videoAtivo() || Date.now() < abafarAte;
    const agora = ctx.currentTime;
    mestre.gain.cancelScheduledValues(agora); mestre.gain.setTargetAtTime(deveTocar ? ganho() : 0, agora, 0.3);
    abafo.gain.cancelScheduledValues(agora); abafo.gain.setTargetAtTime(calar ? 0 : 1, agora, calar ? 0.12 : 0.9);
    if (deveTocar && !tocando) { tocando = true; prox = 0; agendar(); }
    if (!deveTocar && tocando) tocando = false;
    pintar();
  }
  function iniciar() {
    if (!montar()) return;
    if (ctx.state !== "running") ctx.resume().catch(() => {});
    clearInterval(iv); iv = setInterval(() => { agendar(); aplicar(); }, 250);
    aplicar();
  }
  // o navegador só deixa tocar som depois de um clique: o primeiro clique em qualquer lugar liga a música
  ["pointerdown", "keydown"].forEach(t => addEventListener(t, () => { if (ehProf()) iniciar(); }, { capture: true, passive: true }));
  document.addEventListener("visibilitychange", aplicar);
  addEventListener("hashchange", () => { aplicar(); pintar(); });
  addEventListener("focus", aplicar); addEventListener("blur", () => setTimeout(aplicar, 50));

  /* ---------- botão 🎵 (só no computador do professor) ---------- */
  let ui = null, aberto = false;
  function pintar() {
    if (!ehProf()) { if (ui) { ui.remove(); ui = null; } return; }
    if (!ui || !ui.isConnected) {
      ui = document.createElement("div"); ui.className = "mus-ui";
      ui.innerHTML = `<button type="button" class="mus-bt" title="Música ambiente (mantém a caixinha de som acordada)"></button>
        <div class="mus-pn" hidden><p class="mus-tit">🎵 Música ambiente</p><p class="mus-sub">Bem baixinha, só para a caixinha de som não desligar sozinha.</p>
          <button type="button" class="mus-liga"></button>
          <label class="mus-vol">Volume <input type="range" min="0" max="100" step="1" list="mus-marcas" aria-label="Volume da música ambiente"><output></output></label>
          <datalist id="mus-marcas"><option value="${AMB}" label="ambiente"></option></datalist>
          <div class="mus-regua" aria-hidden="true"><span style="left:${AMB}%">▲ ambiente</span></div>
          <button type="button" class="mus-amb">↺ Voltar ao volume ambiente</button>
          <label class="mus-est">Estilo <select aria-label="Estilo da música">${Object.entries(ESTILOS).filter(([k, v]) => !v.oculto || k === estilo).map(([k, v]) => `<option value="${k}">${v.nome}</option>`).join("")}</select></label>
          <p class="mus-pe">Ela abaixa sozinha durante vídeos, a roleta e as comemorações, e volta depois. Fica memorizado neste computador.</p></div>`;
      document.body.appendChild(ui);
      const pn = ui.querySelector(".mus-pn"), rg = ui.querySelector("input[type=range]");
      ui.querySelector(".mus-bt").onclick = () => { aberto = !aberto; pn.hidden = !aberto; iniciar(); };
      ui.querySelector(".mus-liga").onclick = () => { ligada = !ligada; gravarLS("portal:musica", ligada ? "1" : "0"); iniciar(); aplicar(); };
      rg.oninput = () => { vol = +rg.value; gravarLS("portal:musica:vol", String(vol)); if (!ligada) { ligada = true; gravarLS("portal:musica", "1"); } iniciar(); aplicar(); };
      const se = ui.querySelector(".mus-est select"); se.value = estilo;
      se.onchange = () => { trocarEstilo(se.value); iniciar(); aplicar(); };
      ui.querySelector(".mus-amb").onclick = () => { vol = AMB; gravarLS("portal:musica:vol", String(vol)); iniciar(); aplicar(); };
      document.addEventListener("pointerdown", e => { if (aberto && ui && !ui.contains(e.target)) { aberto = false; pn.hidden = true; } }, true);
    }
    ui.querySelector(".mus-pn").hidden = !aberto;
    const tocandoAgora = ligada && ctx && ctx.state === "running";
    const htmlBt = !ligada ? "🔇 <small>música desligada</small>" : tocandoAgora ? (videoAtivo() || Date.now() < abafarAte ? "🎵 <small>pausa (vídeo/festa)</small>" : "🎵 <small>música ambiente</small>") : "🎵 <small>toque para ligar a música</small>";
    const bt = ui.querySelector(".mus-bt"); if (bt.dataset.h !== htmlBt) { bt.dataset.h = htmlBt; bt.innerHTML = htmlBt; }   // só troca se mudou (trocar no meio do clique faz o clique se perder)
    ui.classList.toggle("off", !ligada);
    ui.querySelector(".mus-liga").textContent = ligada ? "⏸ Desligar a música" : "▶ Ligar a música";
    const rg = ui.querySelector("input[type=range]"); if (document.activeElement !== rg) rg.value = vol;
    ui.querySelector("output").textContent = vol === AMB ? "ambiente" : vol + "%";
  }
  function trocarEstilo(k) { if (!ESTILOS[k]) return; estilo = k; gravarLS("portal:musica:estilo", k); passo = 0; motivo = []; if (ctx) prox = ctx.currentTime + 0.1; }
  P.musica = {
    estilos: Object.fromEntries(Object.entries(ESTILOS).map(([k, v]) => [k, v.nome])), trocarEstilo, renderizar, get estilo() { return estilo; },
    abafar(ms) { abafarAte = Math.max(abafarAte, Date.now() + (ms || 2000)); aplicar(); setTimeout(aplicar, (ms || 2000) + 60); },
    get ligada() { return ligada; }, AMB
  };
  setTimeout(pintar, 1500); setInterval(pintar, 3000);
})();
