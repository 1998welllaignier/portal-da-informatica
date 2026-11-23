/* 📡 SALA AO VIVO (18/11/2026) — o professor transmite para os computadores dos alunos que estão no portal.
   Duas ferramentas, ligadas na aba 🎤 Aula do painel:
   1) 📺 Vídeo em sincronia: cada computador toca o MESMO vídeo do YouTube, sem som (o som sai nas caixinhas da sala,
      pelo player do professor). O player do professor é o "controle remoto": play, pausa e pulos são copiados por todos.
      Cada aluno confere o tempo a cada 0,7 s e corrige quem atrasou (diferença típica: menos de meio segundo).
   2) 🖥️ Espelhar a tela: a tela do professor vai para os alunos por WebRTC (direto pela rede da escola, sem servidor).
   Nos dois casos o aluno vê uma barra vermelha em cima explicando o que está acontecendo, a tela fica em tela cheia e
   travada (não dá para clicar no vídeo nem no portal) até o professor liberar. Se sair da tela cheia ou trocar de janela,
   aparece o bloqueio "o professor exige que você volte" e o professor é avisado no painel.
   Dados (sem mudar as regras do Firebase):
   - config/sala_<turma> (o professor grava; qualquer um lê): { modo: "video"|"espelho"|null, dia, sessao, vid, titulo,
     estado: "play"|"pause"|"fim", pos (s), emMs (hora do servidor em que pos valia), vivoEm, respostas: { alunoId: {sdp, sessao, n} } }
   - progresso/<alunoId>_sala (o aluno grava): { tipo: "sala", sala: <turma da aula>, dia, sessao, em, fora, saidas, oferta } */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ICE = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
  const VELHO = 3 * 60 * 1000;   // sem sinal do professor há 3 min = transmissão esquecida aberta: libera os alunos
  const hoje = () => (P.nuvem && P.nuvem.hoje) ? P.nuvem.hoje() : new Date().toISOString().slice(0, 10);
  const ms = v => v == null ? null : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds != null ? v.seconds * 1000 : null);

  /* ⏱️ relógio do servidor: grava serverTimestamp, lê de volta e calcula a diferença para o relógio deste computador
     (guarda a medida com menor tempo de ida e volta, que é a mais precisa) */
  let offset = 0, melhorRtt = Infinity;
  async function medir(ref, extra) {
    try {
      const t0 = Date.now(); await ref.set(Object.assign({ relogio: firebase.firestore.FieldValue.serverTimestamp() }, extra || {}), { merge: true });
      const t1 = Date.now(), sn = await ref.get(); const srv = ms(sn.exists && sn.data().relogio);
      if (srv && t1 - t0 < melhorRtt) { melhorRtt = t1 - t0; offset = srv - (t0 + t1) / 2; }
    } catch (e) {}
  }
  const agora = () => Date.now() + offset;
  const esperado = d => d.estado === "play" ? (d.pos || 0) + Math.max(0, agora() - (d.emMs || agora())) / 1000 : (d.pos || 0);

  /* ▶️ API do YouTube (carregada uma vez só) */
  let ytProm = null;
  function yt() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (ytProm) return ytProm;
    ytProm = new Promise(res => {
      const antes = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { try { antes && antes(); } catch (e) {} res(window.YT); };
      const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s);
    });
    return ytProm;
  }
  function esperarIce(pc, max) {
    return new Promise(res => { if (pc.iceGatheringState === "complete") return res();
      const t = setTimeout(res, max || 2500); pc.addEventListener("icegatheringstatechange", () => { if (pc.iceGatheringState === "complete") { clearTimeout(t); res(); } }); });
  }

  /* =============================== LADO DO ALUNO =============================== */
  const A = { docs: {}, unsubs: [], turma: null, dlg: null, entrou: false, player: null, pc: null, n: 0, iv: null, hb: null, ativoKey: null, vidAtual: null, fora: false };
  function sessao() { return P.sess && P.sess.get(); }
  function ativo() {
    const s = sessao(); if (!s || !s.nuvem || /^#\/painel/.test(location.hash)) return null;
    for (const [t, d] of Object.entries(A.docs)) {
      if (d && d.modo && d.dia === hoje() && d.sessao && !(d.vivoEm && agora() - d.vivoEm > VELHO)) return Object.assign({ turmaAula: t }, d);
    }
    return null;
  }
  function refAluno(i) { const s = sessao(); return P.nuvem.app(i).db.collection("progresso").doc(s.alunoIds[i] + "_sala"); }
  function gravar(extra, todos) {
    const s = sessao(), d = ativo(); if (!s || !d) return;
    (s.alunoIds || []).forEach((id, i) => { if (!todos && i) return;
      const base = { alunoId: id, turma: s.turma, tipo: "sala", sala: d.turmaAula, dia: hoje(), sessao: d.sessao, modo: d.modo, em: Date.now() };
      refAluno(i).set(Object.assign(base, extra || {}), { merge: true }).catch(() => {}); });
  }
  const emTelaCheia = () => P.telaCheia ? P.telaCheia.esta() : (!!document.fullscreenElement || (Math.abs(innerHeight - screen.height) < 6 && Math.abs(innerWidth - screen.width) < 6));

  function montar(d) {
    if (!A.dlg) {
      A.dlg = document.createElement("dialog"); A.dlg.className = "sala-dlg"; A.dlg.setAttribute("aria-labelledby", "sala-txt");
      A.dlg.innerHTML = `<div class="sala-barra" role="status"><span class="sala-ao-vivo">● AO VIVO</span><span id="sala-txt"></span></div>
        <div class="sala-palco"><div class="sala-midia"></div><div class="sala-escudo" aria-hidden="true"></div>
          <div class="sala-entrar"></div><div class="sala-saiu" hidden></div><div class="sala-fim" hidden>🎬 Fim do vídeo! Aguarde: o professor vai liberar a tela.</div></div>`;
      A.dlg.addEventListener("cancel", e => e.preventDefault());
      // nada de teclado durante a transmissão (setas, espaço, Tab…); o Esc do navegador continua saindo da tela cheia
      A.dlg.addEventListener("keydown", e => { if (e.key !== "Escape") { e.preventDefault(); e.stopPropagation(); } }, true);
      A.dlg.addEventListener("contextmenu", e => e.preventDefault());
      document.body.appendChild(A.dlg);
    }
    const video = d.modo === "video";
    A.dlg.querySelector("#sala-txt").innerHTML = d.modo === "quadro"
      ? `<b>O professor está escrevendo no quadro para toda a sala. Preste atenção!</b> <span>🔒 A tela fica travada até o professor liberar</span>`
      : video
      ? `<b>O professor está reproduzindo este vídeo para toda a sala. Preste atenção!</b> <span>🔊 O som sai nas caixinhas da sala · 🔒 a tela fica travada até o professor liberar</span>`
      : `<b>O professor está compartilhando a tela dele com todos da sala. Preste atenção!</b> <span>🔒 A tela fica travada até o professor liberar</span>`;
    A.dlg.querySelector(".sala-entrar").innerHTML = `<div class="sala-cartao"><div class="sala-ic">${video ? "📺" : "🖥️"}</div>
      <h2>${video ? "Hora de assistir ao vídeo junto com a turma!" : d.modo === "quadro" ? "O professor vai explicar no quadro para a sala toda" : "O professor vai mostrar a tela dele para a sala toda"}</h2>
      <p>Clique no botão para entrar. A tela vai ficar <b>cheia e travada</b>: não dá para clicar nem sair até o professor liberar.</p>
      <button type="button" class="btn btn-grande btn-ok" id="sala-ok">${video ? "▶️ Entrar para assistir" : "👀 Entrar para ver"}</button></div>`;
    A.dlg.querySelector("#sala-ok").onclick = entrar;
    if (!A.dlg.open) A.dlg.showModal();
    const abertos = [...document.querySelectorAll("dialog[open]")];   // fica por cima de qualquer outra janela do portal
    if (abertos[abertos.length - 1] !== A.dlg) { A.dlg.close(); document.body.appendChild(A.dlg); A.dlg.showModal(); }
  }
  function telaCheia() { const el = A.dlg; if (el && el.requestFullscreen) el.requestFullscreen({ navigationUI: "hide" }).catch(() => {}).finally(() => setTimeout(checarFora, 300)); }
  function entrar() {
    A.entrou = true; telaCheia();
    A.dlg.querySelector(".sala-entrar").hidden = true;
    const d = ativo(); if (!d) return;
    gravar({ fora: false, entrou: Date.now() }, true);
    const s = sessao(); medir(refAluno(0), { alunoId: s.alunoIds[0], turma: s.turma, tipo: "sala", sala: d.turmaAula });
    iniciarMidia(d);
    clearInterval(A.hb); A.hb = setInterval(() => { gravar({}, true); }, 15000);
  }
  function checarFora() {
    if (!A.entrou || !A.dlg) return;
    const fora = !emTelaCheia() || document.hidden;
    const box = A.dlg.querySelector(".sala-saiu");
    if (fora && !A.fora) {
      gravar({ fora: true, saiuEm: Date.now(), saidas: { [hoje()]: firebase.firestore.FieldValue.increment(1) } }, true);
      box.innerHTML = `<div class="sala-cartao sala-alerta"><div class="sala-ic">⛔</div><h2>O professor exige que você volte para a tela cheia para continuar na aula.</h2>
        <p><b>O professor foi avisado de que você saiu da tela cheia.</b></p>
        <button type="button" class="btn btn-grande btn-ok" id="sala-volta">⛶ Voltar para a tela cheia</button></div>`;
      box.querySelector("#sala-volta").onclick = telaCheia;
    } else if (!fora && A.fora) gravar({ fora: false }, true);
    box.hidden = !fora; A.fora = fora;
  }

  async function iniciarMidia(d) {
    const midia = A.dlg.querySelector(".sala-midia");
    if (d.modo === "video") {
      if (A.player && A.vidAtual === d.vid) return;
      if (A.player && A.player.loadVideoById) { A.vidAtual = d.vid; A.player.loadVideoById({ videoId: d.vid, startSeconds: esperado(d) }); return; }
      midia.innerHTML = `<div id="sala-yt"></div>`; A.vidAtual = d.vid;
      const Y = await yt(); if (!ativo() || A.vidAtual !== d.vid) return;
      A.player = new Y.Player("sala-yt", { videoId: d.vid, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
        playerVars: { autoplay: 1, mute: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, playsinline: 1, iv_load_policy: 3, start: Math.floor(esperado(d)) },
        events: { onReady: e => { try { e.target.mute(); } catch (x) {} sincronizar(); } } });
      clearInterval(A.iv); A.iv = setInterval(sincronizar, 700);
    } else if (d.modo === "quadro") {
      // ⬜ quadro: o desenho chega como dados (traços), nítido e quase sem atraso
      let c = midia.querySelector("canvas.sala-quadro-cv");
      if (!c) { midia.innerHTML = `<canvas class="sala-quadro-cv"></canvas>`; c = midia.querySelector("canvas"); }
      if (P.lousa) P.lousa.desenharRemoto(c, d.quadro || null);
    } else {
      conectarEspelho(d);
    }
  }
  function sincronizar() {
    const d = ativo(), p = A.player; if (!d || d.modo !== "video" || !p || !p.getCurrentTime) return;
    try {
      if (p.isMuted && !p.isMuted()) p.mute();
      const cur = p.getCurrentTime(), exp = esperado(d), st = p.getPlayerState();
      A.dlg.querySelector(".sala-fim").hidden = d.estado !== "fim";
      if (d.estado === "play") { if (st !== 1 && st !== 3) p.playVideo(); if (Math.abs(cur - exp) > 0.4) p.seekTo(exp, true); }
      else { if (st === 1 || st === 3) p.pauseVideo(); if (d.estado !== "fim" && Math.abs(cur - exp) > 0.3) p.seekTo(exp, true); }
    } catch (e) {}
  }
  async function conectarEspelho(d) {
    if (A.pc && A.pc.__sessao === d.sessao && !["failed", "closed"].includes(A.pc.connectionState)) return;
    try { A.pc && A.pc.close(); } catch (e) {}
    const midia = A.dlg.querySelector(".sala-midia");
    midia.innerHTML = `<video id="sala-video" autoplay muted playsinline></video><p class="sala-espera">⏳ Conectando à tela do professor…</p>`;
    const pc = new RTCPeerConnection(ICE); A.pc = pc; pc.__sessao = d.sessao; const n = ++A.n; pc.__n = n;
    pc.addTransceiver("video", { direction: "recvonly" });
    pc.ontrack = e => { const v = midia.querySelector("video"); v.srcObject = e.streams[0] || new MediaStream([e.track]); v.play().catch(() => {}); const w = midia.querySelector(".sala-espera"); if (w) w.remove(); };
    pc.onconnectionstatechange = () => { if (["failed", "disconnected"].includes(pc.connectionState)) setTimeout(() => { const a = ativo(); if (a && a.modo === "espelho" && A.pc === pc && pc.connectionState !== "connected") { pc.close(); A.pc = null; conectarEspelho(a); } }, 4000); };
    await pc.setLocalDescription(await pc.createOffer()); await esperarIce(pc);
    if (A.pc !== pc) return;
    gravar({ oferta: { sdp: pc.localDescription.sdp, sessao: d.sessao, n } });
    responder();
  }
  function responder() {
    const d = ativo(), pc = A.pc, s = sessao(); if (!d || d.modo !== "espelho" || !pc || !s || pc.remoteDescription) return;
    const r = (d.respostas || {})[s.alunoIds[0]];
    if (r && r.sessao === d.sessao && r.n === pc.__n) pc.setRemoteDescription({ type: "answer", sdp: r.sdp }).catch(() => {});
  }
  function encerrar() {
    clearInterval(A.iv); clearInterval(A.hb); A.iv = A.hb = null;
    try { A.player && A.player.destroy && A.player.destroy(); } catch (e) {} A.player = null; A.vidAtual = null;
    try { A.pc && A.pc.close(); } catch (e) {} A.pc = null;
    if (A.dlg) { if (document.fullscreenElement === A.dlg) document.exitFullscreen().catch(() => {}); A.dlg.remove(); A.dlg = null; }
    A.entrou = false; A.fora = false; A.ativoKey = null;
  }
  function atualizar() {
    const d = ativo();
    if (!d) { if (A.dlg) encerrar(); return; }
    const key = d.modo + "|" + d.sessao;
    if (A.ativoKey !== key) { if (A.dlg) encerrar(); A.ativoKey = key; }
    montar(d);
    if (A.entrou) { iniciarMidia(d); if (d.modo === "video") sincronizar(); else if (d.modo === "espelho") responder(); checarFora(); }
  }
  async function ouvir(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app) return;
    if (A.turma === s.turma && A.unsubs.length) return;
    A.unsubs.forEach(u => { try { u(); } catch (e) {} }); A.unsubs = []; A.docs = {}; A.turma = s.turma;
    try {
      const db = P.nuvem.app(0).db;
      const lb = await db.collection("config").doc("liberar_" + s.turma).get().catch(() => null), L = (lb && lb.exists && lb.data()) || {};
      if ((s.alunoIds || []).length && s.alunoIds.every(id => (L.casa || {})[id])) return;   // 🏠 quem estuda em casa não participa
      const turmas = [s.turma, ...new Set((s.alunoIds || []).map(id => (L.outra || {})[id]).filter(Boolean))];   // 🏫 quem frequenta a aula de outra turma
      turmas.forEach(t => A.unsubs.push(db.collection("config").doc("sala_" + t).onSnapshot(sn => { A.docs[t] = sn.exists ? sn.data() : null; atualizar(); }, () => {})));
    } catch (e) {}
  }
  ["fullscreenchange", "resize", "visibilitychange", "blur", "focus"].forEach(ev => addEventListener(ev, () => setTimeout(checarFora, 150)));
  document.addEventListener("visibilitychange", () => setTimeout(checarFora, 150));
  addEventListener("hashchange", () => atualizar());
  setInterval(() => { if (A.dlg || Object.keys(A.docs).length) atualizar(); }, 20000);   // transmissão esquecida aberta: libera sozinho

  /* ============================ LADO DO PROFESSOR (painel) ============================ */
  const PR = { t: null, unsub: null, presUnsub: null, stream: null, pcs: {}, player: null, dlg: null, hb: null, ultimo: null, nomes: {}, pres: [] };
  function dbP() { return P.nuvem.app(0).db; }
  const refSala = t => dbP().collection("config").doc("sala_" + t);
  async function relogioProf() { await medir(dbP().collection("prof").doc("relogio")); }
  async function nome(id) {
    if (PR.nomes[id] != null) return PR.nomes[id];
    try { const sn = await dbP().collection("alunos").doc(id).get(); PR.nomes[id] = sn.exists ? (sn.data().apelido || sn.data().nome || id) : id; } catch (e) { PR.nomes[id] = id; }
    return PR.nomes[id];
  }
  async function iniciarProf(t, dados) {
    await relogioProf();
    const sessao = Math.random().toString(36).slice(2, 10);
    await refSala(t).set(Object.assign({ dia: hoje(), sessao, vivoEm: agora(), respostas: {} }, dados));
    PR.t = t; PR.sessao = sessao;
    clearInterval(PR.hb); PR.hb = setInterval(() => refSala(t).set({ vivoEm: agora() }, { merge: true }).catch(() => {}), 30000);
    addEventListener("beforeunload", pararNoUnload);
    ouvirPresenca(t, sessao);
    return sessao;
  }
  function pararNoUnload() { if (PR.t) try { refSala(PR.t).set({ modo: null, dia: hoje(), sessao: null }); } catch (e) {} }
  async function pararProf(aviso) {
    const t = PR.t; clearInterval(PR.hb); PR.hb = null; removeEventListener("beforeunload", pararNoUnload);
    if (PR.presUnsub) PR.presUnsub(); PR.presUnsub = null;
    Object.values(PR.pcs).forEach(pc => { try { pc.close(); } catch (e) {} }); PR.pcs = {};
    if (PR.stream) { PR.stream.getTracks().forEach(k => k.stop()); PR.stream = null; }
    try { PR.player && PR.player.destroy && PR.player.destroy(); } catch (e) {} PR.player = null;
    if (PR.dlg) { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); PR.dlg.remove(); PR.dlg = null; }
    PR.t = null; PR.sessao = null;
    if (t) await refSala(t).set({ modo: null, dia: hoje(), sessao: null }).catch(() => {});
    P.toast && P.toast(aviso || "📡 Transmissão encerrada: as telas dos alunos foram liberadas.");
  }
  function ouvirPresenca(t, sessao) {
    if (PR.presUnsub) PR.presUnsub();
    PR.presUnsub = dbP().collection("progresso").where("tipo", "==", "sala").where("sala", "==", t).onSnapshot(async q => {
      const docs = q.docs.map(d => d.data()).filter(d => d.sessao === sessao && d.dia === hoje());
      PR.pres = docs; pintarStatus();
      if (PR.stream) for (const d of docs) if (d.oferta && d.oferta.sessao === sessao) atenderOferta(d.alunoId, d.oferta);
    }, () => {});
  }
  async function pintarStatus() {
    const el = document.querySelectorAll(".sala-status"); if (!el.length) return;
    const vivos = PR.pres.filter(d => Date.now() - (d.em || 0) < 45000 || d.fora);
    const fora = vivos.filter(d => d.fora);
    const nomesFora = await Promise.all(fora.map(d => nome(d.alunoId)));
    const conectados = PR.stream ? Object.values(PR.pcs).filter(pc => pc.connectionState === "connected").length : null;
    const html = `👥 <b>${vivos.length}</b> ${vivos.length === 1 ? "aluno assistindo" : "alunos assistindo"}${conectados != null ? ` · 🔗 ${conectados} recebendo a sua tela` : ""}`
      + (fora.length ? ` · <span class="sala-st-fora">⚠️ Saiu da tela cheia: ${nomesFora.map(esc).join(", ")}</span>` : "");
    el.forEach(e => { e.innerHTML = html; });
  }
  async function atenderOferta(aid, of) {
    const pc0 = PR.pcs[aid]; if (pc0 && pc0.__n === of.n) return;
    try { pc0 && pc0.close(); } catch (e) {}
    const pc = new RTCPeerConnection(ICE); pc.__n = of.n; PR.pcs[aid] = pc;
    pc.onconnectionstatechange = pintarStatus;
    PR.stream.getVideoTracks().forEach(k => pc.addTrack(k, PR.stream));
    await pc.setRemoteDescription({ type: "offer", sdp: of.sdp });
    await pc.setLocalDescription(await pc.createAnswer()); await esperarIce(pc);
    // 19 alunos ao mesmo tempo: cada transmissão limitada a ~1,5 Mbps e 15 quadros por segundo (≈ 30 Mbps no total)
    pc.getSenders().forEach(sd => { try { const p = sd.getParameters(); p.encodings = p.encodings && p.encodings.length ? p.encodings : [{}]; p.encodings[0].maxBitrate = 1500000; p.encodings[0].maxFramerate = 15; sd.setParameters(p).catch(() => {}); } catch (e) {} });
    if (PR.pcs[aid] !== pc || !PR.t) return;
    await refSala(PR.t).update({ ["respostas." + aid]: { sdp: pc.localDescription.sdp, sessao: PR.sessao, n: of.n } }).catch(() => {});
  }

  /* 📺 vídeo: o player do professor (com som, no projetor) manda play/pausa/pulos para todos */
  // op (23/11/2026): { fim: texto do botão de encerrar, aoFim: o que fazer depois } — a leitura guiada usa para voltar à sala de espera
  async function passarVideo(t, vid, titulo, rotulo, op) {
    op = op || {};
    if (PR.t) await pararProf();
    const sessao = await iniciarProf(t, { modo: "video", vid, titulo: titulo || "", estado: "pause", pos: 0, emMs: agora() });
    PR.dlg = document.createElement("div"); PR.dlg.className = "sala-prof";
    PR.dlg.innerHTML = `<div class="sala-barra"><span class="sala-ao-vivo">● AO VIVO</span><span><b>Transmitindo para ${esc(rotulo || t)}:</b> ${esc(titulo || "vídeo")}</span>
        <span class="sala-status">👥 esperando os alunos entrarem…</span>
        <span class="sala-prof-bts"><button type="button" class="btn btn-sec" id="sp-cheia">⛶ Tela cheia</button><button type="button" class="btn btn-perigo" id="sp-fim">${esc(op.fim || "⏹ Encerrar e liberar a turma")}</button></span></div>
      <div class="sala-prof-palco"><div id="sala-prof-yt"></div></div>
      <p class="sala-prof-dica">Dê o ▶️ aqui quando a turma estiver pronta: todos começam juntos. Pausar e pular também vale para todos. O som sai só deste computador (caixinhas).</p>`;
    document.body.appendChild(PR.dlg); document.body.classList.add("sala-prof-aberta");
    PR.dlg.querySelector("#sp-fim").onclick = async () => { document.body.classList.remove("sala-prof-aberta"); await pararProf(op.aviso); if (op.aoFim) try { op.aoFim(); } catch (e) { console.warn(e); } };
    PR.dlg.querySelector("#sp-cheia").onclick = () => { const e = PR.dlg; document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : e.requestFullscreen && e.requestFullscreen().catch(() => {}); };
    const Y = await yt(); if (PR.sessao !== sessao) return;
    const enviar = estado => { const p = PR.player; if (!p || !p.getCurrentTime || PR.sessao !== sessao) return;
      refSala(t).set({ estado, pos: p.getCurrentTime(), emMs: agora() }, { merge: true }).catch(() => {}); };
    PR.player = new Y.Player("sala-prof-yt", { videoId: vid, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1 },
      events: { onStateChange: e => { const s = e.data;
        if (s === 1) enviar("play"); else if (s === 2 || s === 3) enviar("pause"); else if (s === 0) enviar("fim"); } } });
    // a cada 5 s, reancora o tempo (corrige qualquer escorregão do relógio)
    const iv = setInterval(() => { if (PR.sessao !== sessao) return clearInterval(iv); try { if (PR.player.getPlayerState() === 1) enviar("play"); } catch (e) {} }, 5000);
  }
  /* 🖥️ espelhar a tela do professor */
  async function espelhar(t, rotulo) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) { P.toast && P.toast("Este navegador não consegue compartilhar a tela. Use o Chrome ou o Edge."); return; }
    let st; try { st = await navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 15 }, audio: false }); } catch (e) { P.toast && P.toast("Compartilhamento cancelado."); return; }
    if (PR.t) await pararProf();
    st.getVideoTracks().forEach(k => { try { k.contentHint = "detail"; } catch (e) {} k.onended = () => { if (PR.stream === st) pararProf(); }; });
    PR.stream = st;
    await iniciarProf(t, { modo: "espelho" });
    PR.dlg = document.createElement("div"); PR.dlg.className = "sala-prof-mini";
    PR.dlg.innerHTML = `<div class="sala-barra"><span class="sala-ao-vivo">● AO VIVO</span><span><b>Sua tela está nos computadores da ${esc(rotulo || t)}</b></span></div>
      <video autoplay muted playsinline></video><p class="sala-status">👥 esperando os alunos entrarem…</p>
      <button type="button" class="btn btn-perigo" id="sp-fim">⏹ Parar e liberar a turma</button>`;
    PR.dlg.querySelector("video").srcObject = st;
    PR.dlg.querySelector("#sp-fim").onclick = pararProf;
    document.body.appendChild(PR.dlg);
  }

  /* ⬜ quadro branco direto nos computadores dos alunos (os traços vão como dados, a cada 0,7 s) */
  async function quadroTurma(t, rotulo) {
    if (!P.lousa) return;
    if (PR.t) await pararProf();
    P.lousa.abrirQuadro();
    const sessao = await iniciarProf(t, { modo: "quadro", quadro: P.lousa.quadro.estado() });
    let pend = null, tm = null;
    const envia = () => { tm = null; if (PR.sessao !== sessao || !pend) return; const q = pend; pend = null;
      refSala(t).set({ quadro: q, vivoEm: agora() }, { merge: true }).catch(() => {}); };
    const sai = P.lousa.quadro.aoMudar(q => { if (PR.sessao !== sessao) return sai();
      if (!q) { sai(); if (tag) tag.remove(); pararProf(); return; }
      pend = q; if (!tm) tm = setTimeout(envia, 700); });
    const qel = P.lousa.estado().quadro && P.lousa.estado().quadro.el;
    const tag = document.createElement("div"); tag.className = "sala-quadro-tag";
    tag.innerHTML = `<span class="sala-ao-vivo">● AO VIVO</span> <b>No quadro da ${esc(rotulo || t)}</b> <span class="sala-status">👥 esperando os alunos…</span> <button type="button" class="btn btn-perigo btn-peq">⏹ Parar e liberar</button>`;
    tag.querySelector("button").onclick = () => P.lousa.fechar();
    if (qel) qel.appendChild(tag);
  }

  /* quadro da aba 🎤 Aula */
  function painel(antes, t, videos, rotulo) {
    const box = document.createElement("details"); box.className = "painel sala-quadro"; box.open = true;
    box.innerHTML = `<summary><strong>📡 Transmitir para os computadores dos alunos</strong> (ao vivo, em tela cheia e travada)</summary>
      <div class="sala-opcoes">
        <div class="sala-op"><h3>📺 Vídeo em sincronia</h3>
          <label>Vídeo <select id="sala-vid">${videos.map(v => `<option value="${esc(v.id)}">${esc(v.nome)}</option>`).join("")}<option value="">🔗 Outro vídeo do YouTube (colar o link)…</option></select></label>
          <input type="url" id="sala-link" placeholder="Cole aqui o link do YouTube" ${videos.length ? "hidden" : ""}>
          <button type="button" class="btn btn-ok" id="sala-passar">▶️ Passar para a turma</button>
          <p class="ajuda">Cada computador toca o mesmo vídeo, sem som; o som sai daqui (caixinhas). Você controla play, pausa e pulos.</p></div>
        <div class="sala-op"><h3>⬜ Quadro branco na tela deles</h3>
          <button type="button" class="btn btn-ok" id="sala-quadro">⬜ Abrir o quadro para a turma</button>
          <p class="ajuda">Você escreve e desenha no quadro (pincel, formas, texto, carimbos, páginas) e aparece na hora em todos os computadores, nítido. Para parar, “⏹ Parar e liberar” ou ✕ no quadro.</p></div>
        <div class="sala-op"><h3>🖥️ Espelhar a minha tela</h3>
          <button type="button" class="btn btn-ok" id="sala-espelho">🖥️ Mostrar minha tela para a turma</button>
          <p class="ajuda">O Chrome pergunta o que compartilhar (a tela inteira ou uma janela). Para parar, use “⏹ Parar” aqui ou “Interromper compartilhamento” do Chrome. Para vídeo com som, prefira o 📺.</p></div>
      </div>
      <p class="ajuda">Só recebe quem está com o portal aberto (quem estuda em casa 🏠 não). O aluno clica em “Entrar”, a tela fica cheia e travada, com uma barra vermelha em cima explicando; se sair da tela cheia, o portal dele trava até voltar e o nome aparece aqui em ⚠️.</p>`;
    antes.before(box);
    // 🖥️ telas dos computadores (o portal anota o tamanho e o zoom de cada computador uma vez por dia)
    try { dbP().collection("progresso").where("tipo", "==", "tela").where("turma", "==", t).get().then(q => {
      const c = {}; q.docs.forEach(d => { const m = d.data().monitor; if (!m || !m.w) return; const k = `${Math.round(m.w * m.dpr)}×${Math.round(m.h * m.dpr)} com zoom do Windows de ${Math.round(m.dpr * 100)}% (área do site ${m.iw}×${m.ih})`; c[k] = (c[k] || 0) + 1; });
      const l = Object.entries(c).sort((a, b) => b[1] - a[1]); if (!l.length) return;
      box.insertAdjacentHTML("beforeend", `<p class="ajuda">🖥️ <b>Telas dos computadores desta turma:</b> ${l.map(([k, n]) => esc(k) + ` (${n})`).join(" · ")}</p>`); }).catch(() => {}); } catch (e) {}
    const sel = box.querySelector("#sala-vid"), link = box.querySelector("#sala-link");
    sel.onchange = () => { link.hidden = !!sel.value; };
    box.querySelector("#sala-passar").onclick = () => {
      let vid = sel.value, nomeV = sel.selectedOptions[0] ? sel.selectedOptions[0].textContent : "";
      if (!vid) { const m = (link.value || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/) || (link.value || "").trim().match(/^([\w-]{11})$/); vid = m && m[1]; nomeV = "Vídeo do YouTube"; }
      if (!vid) { P.toast && P.toast("Cole um link do YouTube válido."); link.focus(); return; }
      passarVideo(t, vid, nomeV, rotulo);
    };
    box.querySelector("#sala-espelho").onclick = () => espelhar(t, rotulo);
    box.querySelector("#sala-quadro").onclick = () => quadroTurma(t, rotulo);
  }

  P.sala = { ouvir, ativa: () => !!(A.dlg), painel, parar: pararProf, passarVideo, espelhar, quadroTurma, _A: A, _PR: PR };
})();
