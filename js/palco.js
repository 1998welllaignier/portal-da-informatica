/* ============================================================
   🎤 AULA AO VIVO (palco) — Prof. Welington Laignier (23/11/2026)
   Pedido do professor ("organizar essa bagunça"): um caminho só para o começo da aula.
     ▶️ Iniciar a aula → 🚦 Sala de espera (cada aluno, ao entrar, espera ali) →
     🎬 Vídeo em sincronia  OU  📖 Leitura guiada (troca quando quiser) →
     ✕ fechar o vídeo ou a leitura = TODOS voltam para a sala de espera →
     🏁 Largada: aí sim cada um vai para a missão, no próprio ritmo.
   FONTE ÚNICA DA VERDADE: um registro só diz em que momento a aula está (config/palco_<turma>) e TODA tela obedece
   (os alunos pelo Firebase; o projetor, no mesmo computador do professor, pelo BroadcastChannel, sem internet).
   Telas (escolha do professor, guardada no computador): "1 tela" (o projetor duplica o monitor: tudo aqui, comandos
   numa barra só dele e "👥 A turma" num botão flutuante) ou "2 telas" (projetor = janela só com o conteúdo e o vídeo
   com som; no monitor dele, metade é o slide e metade os comandos + a turma = modo apresentador). O Veyon não conta.
   A leitura é um SLIDE de tamanho fixo (1280 × 720) que só aumenta ou diminui: fica idêntico em todas as telas e o
   risco do pincel cai no mesmo lugar. Perguntas relâmpago são slides logo depois do trecho que explica a palavra;
   quando todos os que estão online respondem, a certa aparece sozinha com quem acertou e quem errou, para todos.
   Dados:
   - config/palco_<turma> (o professor grava): { dia, sessao, aid, mid, titulo, momento: "espera"|"video"|"leitura",
       vivoEm, on: {n, total}, video: { vid, titulo, estado: "play"|"pause"|"fim", pos, emMs },
       slide, leitor: {id, nome}|null, leu, termo: {t, slide}|null, perg: {slide, revelada, resp, total, certa,
       acertaram: [nomes], erraram: [nomes], semResp: [nomes]}, xp: {alunoId: pts}, lidos: {trecho: {id, nome}} }
   - progresso/<aluno>_palco (o aluno grava): { tipo: "palco", dia, sessao, momento, slide, ping, falhou, resp: {"<sessao>_<slide>": opção} }
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const h = html => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const hoje = () => (P.nuvem && P.nuvem.hoje ? P.nuvem.hoje() : new Date().toISOString().slice(0, 10));
  const db = () => P.nuvem.app(0).db;
  const L = () => P.leitura;
  const semTags = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const W = 1280, H = 720, XP_LEITOR = 10, XP_PERGUNTA = 5, VELHO = 3 * 60 * 1000;
  const BC = "BroadcastChannel" in window ? new BroadcastChannel("portal-palco") : null;
  const nomeCurto = n => String(n || "").split(" ").filter(Boolean).slice(0, 2).join(" ");
  const ms = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;

  /* ⏱️ relógio do servidor (o vídeo de cada computador anda pelo mesmo relógio) */
  let offset = 0, melhorRtt = Infinity;
  async function medir(ref, extra) { try { const t0 = Date.now(); await ref.set(Object.assign({ relogio: firebase.firestore.FieldValue.serverTimestamp() }, extra || {}), { merge: true });
    const t1 = Date.now(), sn = await ref.get(), srv = ms(sn.exists && sn.data().relogio); if (srv && t1 - t0 < melhorRtt) { melhorRtt = t1 - t0; offset = srv - (t0 + t1) / 2; } } catch (e) {} }
  const agora = () => Date.now() + offset;
  const esperado = v => !v ? 0 : v.estado === "play" ? (v.pos || 0) + Math.max(0, agora() - (v.emMs || agora())) / 1000 : (v.pos || 0);

  /* ▶️ API do YouTube (uma vez só) */
  let ytProm = null;
  function yt() { if (window.YT && window.YT.Player) return Promise.resolve(window.YT); if (ytProm) return ytProm;
    ytProm = new Promise(res => { const antes = window.onYouTubeIframeAPIReady; window.onYouTubeIframeAPIReady = () => { try { antes && antes(); } catch (e) {} res(window.YT); };
      const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; s.onerror = () => { ytProm = null; s.remove(); }; document.head.appendChild(s); });
    return ytProm; }

  /* ================= 📚 MATERIAL: trechos + perguntas como slides ================= */
  const cacheM = {};
  async function material(aid, mid) {
    const k = aid + "|" + mid; if (cacheM[k]) return cacheM[k];
    const T = await L().trechos(aid, mid), slides = [], usados = new Set();
    T.lista.forEach((_, i) => { slides.push({ t: "trecho", i }); const q = perguntaDe(T, i, usados); if (q) slides.push({ t: "pergunta", i, q }); });
    return (cacheM[k] = { T, slides });
  }
  // a pergunta só cobra uma palavra que ACABOU de aparecer no trecho (regra do professor: só depois de terem visto o conteúdo)
  function perguntaDe(T, i, usados) {
    const termos = (T.termos || []).filter(t => t.termo && t.def); if (termos.length < 3) return null;
    const txt = " " + norm(semTags(T.lista[i] || "")).replace(/[^a-z0-9]+/g, " ") + " ", base = t => norm(String(t.termo).replace(/\s*\(.*?\)\s*/g, " ")).replace(/[^a-z0-9]+/g, " ").trim();
    const alvo = termos.find(t => base(t) && !usados.has(base(t)) && txt.includes(" " + base(t) + " ")); if (!alvo) return null; usados.add(base(alvo));
    const def = t => semTags(t.def).split(/\s+Onde (eu |fica|se |está|aparece)/)[0].replace(/[.:;]$/, "");
    const outras = termos.filter(t => t !== alvo && def(t) !== def(alvo)); if (outras.length < 2) return null;
    const s = i * 7 + 3, d1 = outras[s % outras.length], d2 = outras[(s + 3) % outras.length] === d1 ? outras[(s + 1) % outras.length] : outras[(s + 3) % outras.length];
    const ops = [def(alvo), def(d1), def(d2)], ordem = [[0, 1, 2], [1, 0, 2], [2, 1, 0], [1, 2, 0]][i % 4];
    return { termo: semTags(alvo.termo), q: `O que significa “${semTags(alvo.termo)}”?`, ops: ordem.map(k => ops[k]), certa: ordem.indexOf(0) };
  }

  /* ================= 🖼️ O SLIDE (igual para aluno, projetor e professor) ================= */
  function cab(d, M, extra) { const sl = M.slides[d.slide || 0] || {}, nT = M.T.lista.length;
    return `<div class="pc-cab"><span class="pc-selo">📖 Leitura guiada</span><b>${esc(M.T.icone || "")} ${esc(semTags(M.T.titulo || ""))}</b><span class="pc-pos">${extra || (sl.t === "pergunta" ? "🤔 Pergunta relâmpago" : `Trecho ${(sl.i || 0) + 1} de ${nT}`)}</span></div>`; }
  function slideHTML(d, M, quem, minha) {   // quem: "aluno" | "telao" | "prof"
    if (d.momento === "espera") { const o = d.on || {};
      return `<div class="pc-espera"><p class="pc-grande">🚦</p><h2>A aula já vai começar!</h2>${quem !== "aluno" && o.total ? `<p class="pc-esp-num">👥 <b>${o.n || 0}</b> de ${o.total} alunos já entraram</p>` : ""}<p class="pc-marca">💻 Aula de Informática com o Prof. Welington Laignier</p></div>`; }
    if (d.momento === "video") return `<div class="pc-espera"><p class="pc-grande">🎬</p><h2>Agora vamos ver um vídeo</h2>${quem === "aluno" ? "" : `<p>${esc(d.video && d.video.titulo || "")}</p>`}</div>`;
    const sl = M.slides[d.slide || 0]; if (!sl) return `<div class="pc-espera"><h2>📖</h2></div>`;
    if (sl.t === "pergunta") {
      const q = sl.q, g = d.perg && d.perg.slide === d.slide ? d.perg : null, rev = !!(g && g.revelada);
      const ops = q.ops.map((o, k) => `<button type="button" class="pc-op${rev && k === q.certa ? " certa" : ""}${rev && minha === k && k !== q.certa ? " errada" : ""}${minha === k ? " minha" : ""}" data-op="${k}" ${quem !== "aluno" || rev || minha != null ? "disabled" : ""}><span>${"ABC"[k]}</span>${esc(o)}</button>`).join("");
      let rodape = "";
      if (rev) { const lst = (t, arr, cls) => `<div class="pc-res ${cls}"><b>${t} (${arr.length})</b><p>${arr.length ? arr.map(n => `<span>${esc(n)}</span>`).join("") : "<i>ninguém</i>"}</p></div>`;
        rodape = `${quem === "aluno" && minha != null ? `<p class="pc-meu ${minha === q.certa ? "ok" : "no"}">${minha === q.certa ? `✅ Você acertou! <b>+${XP_PERGUNTA} XP</b>` : "❌ Não foi dessa vez: veja a certa em verde"}</p>` : quem === "aluno" ? `<p class="pc-meu no">⏰ Você não respondeu a tempo</p>` : ""}
          <div class="pc-resultado">${lst("✅ Acertaram", g.acertaram || [], "ok")}${lst("❌ Erraram", g.erraram || [], "no")}${(g.semResp || []).length ? lst("⏰ Não responderam", g.semResp, "sem") : ""}</div>`; }
      else rodape = quem === "aluno" ? `<p class="pc-info">${minha != null ? "✔ Resposta enviada! Espere todos responderem…" : "👆 Toque na resposta certa"}</p>` : `<p class="pc-info">✋ Responderam: <b>${(g && g.resp) || 0}</b> de ${(g && g.total) || 0}</p>`;
      return `${cab(d, M)}<div class="pc-perg"><h2>${esc(q.q)}</h2><div class="pc-ops">${ops}</div>${rodape}</div>`;
    }
    const souEu = quem === "aluno" && d.leitor && (minha === "eu");
    const faixa = d.leitor ? (souEu ? `<div class="pc-leitor eu">🎤 <b>É a sua vez de ler!</b></div>` : `<div class="pc-leitor">📖 Lendo agora: <b>${esc(d.leitor.nome)}</b>${d.leu ? " ✔" : ""}${d.leitor.maestra ? ` <span class="pc-maestra">🌟 escolha de ${esc(String(d.leitor.maestra.nome || "").split(" ")[0])}</span>` : ""}</div>`) : `<div class="pc-leitor sem">🎡 Quem vai ler?</div>`;
    let termo = "";
    if (d.termo && d.termo.slide === d.slide) { const x = L().acharTermo(M.T.termos, d.termo.t) || { termo: d.termo.t, def: "" };
      termo = `<div class="pc-termo"><div class="pc-termo-cx"><p class="pc-termo-sup">📖 Palavra difícil</p><h2>${x.rotulo || esc(x.termo)}</h2>${P.termoImg ? P.termoImg(x.termo, x.rotulo) : ""}<p class="modal-def">${x.def || ""}</p>${quem === "prof" ? `<button type="button" class="btn btn-ok pc-termo-x">✕ Fechar para todos</button>` : `<p class="pc-termo-pe">👀 O professor abriu esta palavra para todos</p>`}</div></div>`; }
    return `${cab(d, M)}${faixa}<div class="pc-txt leitura">${M.T.lista[sl.i] || ""}</div>${termo}`;
  }
  // a letra diminui até o trecho caber no slide (tudo em px do slide: o resultado é igual em qualquer tela)
  function encaixar(st) { const pg = st && st.querySelector(".pc-perg");
    if (pg) { let f = 30, n = 0; pg.style.fontSize = f + "px"; while (pg.scrollHeight > pg.clientHeight + 2 && f > 16 && n++ < 30) { f -= 1; pg.style.fontSize = f + "px"; } return; }
    const box = st && st.querySelector(".pc-txt"); if (!box) return;
    let f = 34; const ims = [...box.querySelectorAll(".ilustracao svg, .ilustracao img, img")]; let mh = 330;
    const aplica = () => { box.style.fontSize = f + "px"; ims.forEach(x => { x.style.maxHeight = mh + "px"; x.style.width = "auto"; x.style.maxWidth = "100%"; }); };
    aplica(); let n = 0;
    while (box.scrollHeight > box.clientHeight + 2 && n++ < 60) { if (f > 26) f -= 1; else if (ims.length && mh > 170) mh -= 15; else if (f > 18) f -= 1; else break; aplica(); } }
  // o slide de 1280 × 720 se encaixa (aumenta ou diminui) na caixa que o recebe, centralizado
  function escalar(host, st) { const r = host.getBoundingClientRect(); if (!r.width || !r.height) return; const k = Math.min(r.width / W, r.height / H);
    st.style.transform = `scale(${k})`; st.style.left = ((r.width - W * k) / 2) + "px"; st.style.top = ((r.height - H * k) / 2) + "px"; }
  function montarPalco(host) { host.classList.add("pc-host"); const st = h(`<div class="pc-stage"></div>`); host.appendChild(st);
    const ro = "ResizeObserver" in window ? new ResizeObserver(() => escalar(host, st)) : null; ro ? ro.observe(host) : addEventListener("resize", () => escalar(host, st)); escalar(host, st); return st; }
  function pintarSlide(st, d, M, quem, minha) { st.innerHTML = slideHTML(d, M, quem, minha); encaixar(st);
    st.querySelectorAll("img").forEach(im => { if (!im.complete) im.addEventListener("load", () => encaixar(st), { once: true }); }); }

  /* ================= 👩‍🎓 ALUNO ================= */
  const A = { docs: {}, unsubs: [], turma: null, cx: null, st: null, chave: "", player: null, vid: null, iv: null, vigia: null, pronto: false, hb: null, receb: {}, resp: {}, lousaU: [] };
  const sessaoAluno = () => P.sess && P.sess.get && P.sess.get();
  function ativoAluno() {
    const s = sessaoAluno(); if (!s || !s.nuvem || /^#\/(painel|prova|telao)/.test(location.hash)) return null;
    for (const [t, d] of Object.entries(A.docs)) if (d && d.dia === hoje() && d.sessao && (d.momento === "video" || d.momento === "leitura") && Date.now() - (A.receb[t] || 0) < VELHO) return Object.assign({ turmaAula: t }, d);
    return null;
  }
  function gravarAluno(extra) { const s = sessaoAluno(), d = ativoAluno(); if (!s || !d) return;
    (s.alunoIds || []).forEach((id, i) => { try { P.nuvem.app(i).db.collection("progresso").doc(id + "_palco").set(Object.assign({ alunoId: id, turma: s.turma, tipo: "palco", sala: d.turmaAula, dia: hoje(), sessao: d.sessao, momento: d.momento, slide: d.slide || 0, ping: Date.now() }, extra || {}), { merge: true }).catch(() => {}); } catch (e) {} }); }
  let avTm = null;
  function avisoAluno() { if (!A.cx) return; let a = A.cx.querySelector(".pc-so-olhe"); if (!a) { a = h(`<div class="pc-so-olhe">👀 Só acompanhe: quem comanda é o professor</div>`); A.cx.appendChild(a); }
    a.classList.add("on"); clearTimeout(avTm); avTm = setTimeout(() => a.classList.remove("on"), 1800); }
  document.addEventListener("keydown", e => { if (A.cx && A.cx.isConnected && e.key !== "Escape") { e.preventDefault(); e.stopPropagation(); } }, true);
  function fecharAluno() {
    clearInterval(A.iv); clearInterval(A.hb); clearTimeout(A.vigia); A.iv = A.hb = null; try { A.player && A.player.destroy && A.player.destroy(); } catch (e) {} A.player = null; A.vid = null; A.pronto = false;
    if (P.lousa && P.lousa.receberEspelho) P.lousa.receberEspelho(null, () => null);
    if (A.cx) { A.cx.remove(); A.cx = null; A.st = null; } A.chave = ""; document.body.classList.remove("pc-travado"); P.leituraAtiva = false;
  }
  async function atualizarAluno() {
    const d = ativoAluno(); if (!d) return fecharAluno();
    const s = sessaoAluno();
    if (!A.cx || !A.cx.isConnected) { A.cx = h(`<div class="pc-aluno" role="dialog" aria-label="Aula ao vivo"><div class="pc-barra-al"><span class="pc-vivo">● AO VIVO</span><span class="pc-al-txt"></span></div><div class="pc-area"><div class="pc-video" hidden></div><div class="pc-falha" hidden></div></div></div>`);
      document.body.appendChild(A.cx); A.st = montarPalco(A.cx.querySelector(".pc-area"));
      A.cx.addEventListener("contextmenu", e => e.preventDefault());
      // 🔒 o aluno não mexe em nada: cliques fora das respostas da pergunta só mostram um aviso; teclas não fazem nada
      A.cx.addEventListener("pointerdown", e => { if (e.target.closest(".pc-op:not(:disabled), .pc-falha button")) return; e.preventDefault(); e.stopPropagation(); avisoAluno(); }, true);
      const s0 = sessaoAluno(); medir(P.nuvem.app(0).db.collection("progresso").doc(s0.alunoIds[0] + "_palco"), { alunoId: s0.alunoIds[0], turma: s0.turma, tipo: "palco" });
      clearInterval(A.hb); A.hb = setInterval(() => gravarAluno({}), 15000); }
    document.body.classList.add("pc-travado"); P.leituraAtiva = d.momento === "leitura";
    A.cx.querySelector(".pc-al-txt").innerHTML = d.momento === "video" ? "<b>📺 Vídeo da turma</b>" : "<b>📖 Leitura guiada</b>";
    const vbox = A.cx.querySelector(".pc-video");
    if (d.momento === "video") { A.st.hidden = true; vbox.hidden = false; await videoAluno(d, vbox); }
    else { if (A.player) { try { A.player.destroy(); } catch (e) {} A.player = null; A.vid = null; clearInterval(A.iv); clearTimeout(A.vigia); vbox.innerHTML = ""; }
      vbox.hidden = true; A.cx.querySelector(".pc-falha").hidden = true; A.st.hidden = false; await leituraAluno(d, s); }
    gravarAluno({});
  }
  /* 🌟 MODO HELENA NA LEITURA GUIADA (27/11/2026, aprovado pelo professor: "tudo A")
     Montado sozinho a partir das palavras difíceis da missão que têm figura ou foto (dados/termos-imagens.js), então vale
     para todas as missões de todos os anos sem escrever nada à mão:
     - TRECHO: logo abaixo do texto, o 🌟 cartão com a figura e a palavra grande (a primeira palavra difícil do trecho que tem figura).
     - PERGUNTA RELÂMPAGO: primeiro a vez do aluno do Modo Helena — "Qual figura mostra “<palavra>”?" com 3 figuras
       (a certa e duas de outras palavras da missão). Errou: a certa brilha e ele tenta de novo (vale metade: 3 XP em vez de 5).
       Em dupla, o colega lê a pergunta para ele e depois responde a pergunta normal na vez dele.
     - Sem figura para aquela palavra: ele responde a pergunta normal (com o colega lendo, se estiver em dupla). */
  const temImg = t => !!(P.termoImg && P.termoImg(t));
  const baseT = t => norm(String(t || "").replace(/<[^>]+>/g, "").replace(/\s*\(.*?\)\s*/g, " ")).replace(/[^a-z0-9]+/g, " ").trim();
  function hzCartao(M, i) { const txt = " " + norm(semTags(M.T.lista[i] || "")).replace(/[^a-z0-9]+/g, " ") + " ";
    return (M.T.termos || []).find(t => t.termo && baseT(t.termo) && txt.includes(" " + baseT(t.termo) + " ") && temImg(t.termo)) || null; }
  function hzPergunta(M, sl) {
    const com = (M.T.termos || []).filter(t => t.termo && temImg(t.termo)), alvo = com.find(t => baseT(t.termo) === baseT(sl.q.termo)); if (!alvo) return null;
    const vistos = new Set([P.termoImg(alvo.termo)]), outras = com.filter(t => { const im = P.termoImg(t.termo); if (t === alvo || vistos.has(im)) return false; vistos.add(im); return true; });
    if (outras.length < 2) return null;
    const s0 = sl.i * 5 + 1, d1 = outras[s0 % outras.length], d2 = outras[(s0 + 2) % outras.length] === d1 ? outras[(s0 + 1) % outras.length] : outras[(s0 + 2) % outras.length];
    const ordem = [[0, 1, 2], [1, 0, 2], [2, 1, 0], [1, 2, 0]][sl.i % 4], ops = [alvo, d1, d2];
    return { termo: semTags(alvo.termo), ops: ordem.map(k => ops[k]), certa: ordem.indexOf(0) };
  }
  const gravarUm = (i, extra) => { const s = sessaoAluno(), d = ativoAluno(); if (!s || !d) return; const id = (s.alunoIds || [])[i]; if (!id) return;
    try { P.nuvem.app(i).db.collection("progresso").doc(id + "_palco").set(Object.assign({ alunoId: id, turma: s.turma, tipo: "palco", sala: d.turmaAula, dia: hoje(), sessao: d.sessao, momento: d.momento, slide: d.slide || 0, ping: Date.now() }, extra), { merge: true }).catch(() => {}); } catch (e) {} };
  A.hz = {};
  async function leituraAluno(d, s) {
    const M = await material(d.aid, d.mid); if (!M.T.lista.length) return;
    const sl = M.slides[d.slide || 0] || {}, meus = s.alunoIds || [], kResp = d.sessao + "_" + (d.slide || 0);
    const hz = P.helena && P.helena.estado ? await P.helena.estado(s).catch(() => null) : null;
    const minha = sl.t === "pergunta" ? A.resp[kResp] : (d.leitor && meus.includes(d.leitor.id) ? "eu" : null);
    const rev = !!(d.perg && d.perg.slide === d.slide && d.perg.revelada);
    const chave = JSON.stringify([d.momento, d.slide, d.leitor, d.leu, d.termo, d.perg && d.perg.slide === d.slide ? d.perg.revelada : 0, minha, d.aid, d.mid, hz ? A.hz[kResp] || 0 : 0]);
    if (chave === A.chave) return; A.chave = chave;
    pintarSlide(A.st, d, M, "aluno", minha);
    if (L().ligarPalavras) L().ligarPalavras(A.st, M.T.termos, "travado");
    const responder = k => { if (A.resp[kResp] != null) return; A.resp[kResp] = k;
      const z = hz && A.hz[kResp]; if (z && z.fase === "colega") meus.forEach((_, j) => { if (j !== hz.idx) gravarUm(j, { resp: { [kResp]: k } }); }); else gravarAluno({ resp: { [kResp]: k } });
      A.chave = ""; leituraAluno(d, s); };
    A.st.querySelectorAll(".pc-op").forEach(b => b.onclick = () => responder(+b.dataset.op));
    if (!hz) return;
    const nome = esc(hz.nome), colega = hz.dupla ? esc(hz.colega) : "";
    // 🌟 trecho: o cartão com a figura
    if (sl.t === "trecho") { const t = hzCartao(M, sl.i), box = A.st.querySelector(".pc-txt"); if (!t || !box) return;
      box.insertAdjacentHTML("beforeend", `<div class="pc-hz-cartao"><div class="pc-hz-fig">${P.termoImg(t.termo)}</div><div><span class="pc-hz-tag">🌟 Para ${nome}</span><p class="pc-hz-pal">${esc(semTags(t.termo))}</p></div></div>`);
      encaixar(A.st); A.st.querySelectorAll("img").forEach(im => { if (!im.complete) im.addEventListener("load", () => encaixar(A.st), { once: true }); }); return; }
    const pg = A.st.querySelector(".pc-perg"); if (sl.t !== "pergunta" || rev || !pg) return;
    if (A.resp[kResp] != null) { if ((A.hz[kResp] || {}).feito === "ok") pg.insertAdjacentHTML("afterbegin", `<p class="pc-hz-festa">🎉 Muito bem, ${nome}! Você acertou a figura.</p>`); return; }
    const z = A.hz[kResp] = A.hz[kResp] || { fase: "hz", erros: [] }, fq = hzPergunta(M, sl);
    if (z.fase === "hz") {
      const dica = hz.dupla ? `<p class="pc-hz-dica">👧🧒 <b>${colega}</b>, leia a pergunta para ${nome} e deixe que ${nome} escolha a resposta. Se precisar, pode apontar, mas quem toca é ${nome}.</p>` : "";
      if (!fq) {   // sem figura: a pergunta normal, na vez dele
        pg.insertAdjacentHTML("afterbegin", `<p class="pc-hz-vez">🌟 Sua vez, ${nome}!</p>${dica}`);
        A.st.querySelectorAll(".pc-op").forEach(b => b.onclick = () => { const k = +b.dataset.op;
          if (hz.dupla) { gravarUm(hz.idx, { resp: { [kResp]: k } }); z.fase = "colega"; z.feito = k === sl.q.certa ? "ok" : "no"; A.chave = ""; leituraAluno(d, s); } else responder(k); });
        encaixar(A.st); return; }
      pg.innerHTML = `<p class="pc-hz-vez">🌟 Sua vez, ${nome}!</p>${dica}<h2>Qual figura mostra “${esc(fq.termo)}”?</h2>
        <div class="pc-hz-ops">${fq.ops.map((t, k) => `<button type="button" class="pc-op pc-hz-op${z.erros.includes(k) ? " errada" : ""}${z.erros.length && k === fq.certa ? " brilha" : ""}" data-op="${k}" aria-label="Figura ${k + 1}" ${z.erros.includes(k) ? "disabled" : ""}>${P.termoImg(t.termo)}</button>`).join("")}</div>
        <p class="pc-info">${z.erros.length ? "Quase! A figura certa está brilhando: toque nela 😉" : "👆 Toque na figura certa"}</p>`;
      pg.style.fontSize = "";
      pg.querySelectorAll(".pc-hz-op").forEach(b => b.onclick = () => { const k = +b.dataset.op;
        if (k !== fq.certa) { if (!z.erros.includes(k)) z.erros.push(k); A.chave = ""; leituraAluno(d, s); return; }
        const meia = z.erros.length > 0, rr = { resp: { [kResp]: sl.q.certa } }; if (meia) rr.hzMeia = { [kResp]: 1 };
        z.feito = "ok";
        if (hz.dupla) { gravarUm(hz.idx, rr); z.fase = "colega"; A.chave = ""; leituraAluno(d, s); }
        else { A.resp[kResp] = sl.q.certa; gravarAluno(rr); z.fase = "fim"; A.chave = ""; leituraAluno(d, s); } });
      return; }
    if (z.fase === "colega") {
      pg.insertAdjacentHTML("afterbegin", `${z.feito === "ok" ? `<p class="pc-hz-festa">🎉 Muito bem, ${nome}!</p>` : ""}<p class="pc-hz-vez colega">👉 Agora é a vez de ${colega}: responda a pergunta.</p>`);
      encaixar(A.st); }
  }
  async function videoAluno(d, box) {
    const v = d.video || {}; if (!v.vid) return;
    if ((A.player || A.criando) && A.vid === v.vid) return sincAluno();
    if (A.player) { try { A.player.destroy(); } catch (e) {} A.player = null; }
    box.innerHTML = `<div id="pc-yt-al"></div><div class="pc-escudo" aria-hidden="true"></div><div class="pc-pausa" hidden>⏸ O vídeo começa quando o professor der o play</div><div class="pc-fim" hidden>🎬 Fim do vídeo</div>`; A.vid = v.vid; A.criando = true; A.pronto = false; falhaAluno(null);
    clearTimeout(A.vigia); A.vigia = setTimeout(() => { if (!A.pronto && A.vid === v.vid && ativoAluno()) falhaAluno("demorou"); }, 15000);
    let Y; try { Y = await Promise.race([yt(), new Promise((_, no) => setTimeout(() => no(new Error("api")), 14000))]); } catch (e) { A.criando = false; falhaAluno("sem-api"); return; }
    A.criando = false; const dd = ativoAluno(); if (!dd || dd.momento !== "video" || A.vid !== v.vid) return;
    A.player = new Y.Player("pc-yt-al", { videoId: v.vid, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
      playerVars: { autoplay: 1, mute: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, playsinline: 1, iv_load_policy: 3, cc_load_policy: 0, start: Math.floor(esperado(v)) },
      events: { onReady: e => { A.pronto = true; falhaAluno(null); try { e.target.mute(); } catch (x) {} semLegenda(e.target); sincAluno(); }, onError: e => falhaAluno("erro " + (e && e.data)) } });
    clearInterval(A.iv); A.iv = setInterval(sincAluno, 700);
  }
  // 💬 25/11/2026: os vídeos já têm a legenda dentro; o YouTube ligava a legenda automática por cima (vídeo sem som) e ficava uma em cima da outra
  const semLegenda = (p => { try { p.unloadModule && (p.unloadModule("captions"), p.unloadModule("cc")); p.setOption && p.setOption("captions", "track", {}); } catch (x) {} });
  function sincAluno() {
    const d = ativoAluno(), p = A.player; if (!d || d.momento !== "video" || !p || !p.getCurrentTime || !A.cx) return;
    const v = d.video || {};
    try { if (p.isMuted && !p.isMuted()) p.mute(); if (!A.semCC || Date.now() - A.semCC > 5000) { A.semCC = Date.now(); semLegenda(p); }
      const cur = p.getCurrentTime(), exp = esperado(v), st = p.getPlayerState();
      A.cx.querySelector(".pc-fim").hidden = v.estado !== "fim"; A.cx.querySelector(".pc-pausa").hidden = !(v.estado === "pause" && (v.pos || 0) < 1);
      if (v.estado === "play") { if (st !== 1 && st !== 3) p.playVideo(); if (Math.abs(cur - exp) > 0.5) p.seekTo(exp, true); }
      else { if (st === 1 || st === 3) p.pauseVideo(); if (v.estado !== "fim" && Math.abs(cur - exp) > 0.3) p.seekTo(exp, true); } } catch (e) {}
  }
  function falhaAluno(motivo) {
    const box = A.cx && A.cx.querySelector(".pc-falha"); if (!box) return;
    if (!motivo) { if (!box.hidden) { box.hidden = true; gravarAluno({ falhou: null }); } return; }
    box.innerHTML = `<div class="pc-cartao"><div class="pc-ic">😕</div><h2>O vídeo não abriu neste computador</h2><p>Assista pelo projetor.</p><button type="button" class="btn btn-grande btn-ok">🔁 Tentar de novo</button></div>`;
    box.querySelector("button").onclick = () => { box.hidden = true; try { A.player && A.player.destroy(); } catch (e) {} A.player = null; A.vid = null; A.criando = false; atualizarAluno(); };
    box.hidden = false; gravarAluno({ falhou: String(motivo) });
  }
  async function ouvir(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || s.prof) return;
    // 🎒 Agregados (26/11/2026): só ouve a aula da turma em que o professor o incluiu hoje (P.agAula, atualizado pelo portal.js)
    const ehAG = !!(P.agEh && P.agEh(s)), chave = ehAG ? s.turma + "|" + (P.agAula || "") : s.turma;
    if (A.turma === chave && (A.unsubs.length || ehAG)) return;
    A.unsubs.forEach(u => { try { u(); } catch (e) {} }); A.unsubs = []; A.docs = {}; A.turma = chave;
    if (ehAG && !P.agAula) return;
    try {
      const lb = await db().collection("config").doc("liberar_" + s.turma).get().catch(() => null), Lb = (lb && lb.exists && lb.data()) || {};
      if ((s.alunoIds || []).length && s.alunoIds.every(id => (Lb.casa || {})[id])) return;   // 🏠 quem estuda em casa não participa
      const turmas = ehAG ? [P.agAula] : [s.turma, ...new Set((s.alunoIds || []).map(id => (Lb.outra || {})[id]).filter(Boolean))];   // 🏫 quem frequenta a aula de outra turma
      turmas.forEach(t => {
        A.unsubs.push(db().collection("config").doc("palco_" + t).onSnapshot(sn => { A.docs[t] = sn.exists ? sn.data() : null; A.receb[t] = Date.now(); atualizarAluno(); }, () => {}));
        // ✏️ risco e laser do professor por cima do slide (só os da leitura de agora: confere a sessão, não o relógio do computador)
        A.unsubs.push(db().collection("config").doc("lousaLeitura_" + t).onSnapshot(sn => { let x = sn.exists ? sn.data() : null; try { if (x && x.j) x = Object.assign(JSON.parse(x.j), { sessao: x.sessao }); } catch (e) { x = null; }
          if (!P.lousa || !P.lousa.receberEspelho) return; const d = ativoAluno();
          if (!x || !d || d.momento !== "leitura" || (x.sessao && x.sessao !== d.sessao) || !A.st) return P.lousa.receberEspelho(null, () => null);
          P.lousa.receberEspelho(x, () => A.st && A.st.isConnected ? A.st : null); }, () => {}));
      });
    } catch (e) {}
  }
  addEventListener("hashchange", () => { if (A.cx || Object.keys(A.docs).length) atualizarAluno(); });
  setInterval(() => { if (A.cx) atualizarAluno(); }, 20000);   // professor sumiu há 3 min (aba fechada): libera sozinho

  /* ================= 📽️ PROJETOR (2 telas): #/telao/<turma> — conteúdo e vídeo COM SOM, sem comandos ================= */
  async function telao(mount, turma) {
    document.body.classList.add("modo-telao");
    const el = mount(`<section class="pc-telao"><div class="pc-area pc-area-t"></div><div class="pc-video pc-video-t" hidden></div>
      <button type="button" class="pc-ativar"><b>👆 Clique aqui uma vez</b><span>para a tela cheia e o som do vídeo</span><small>(depois, é só arrastar esta janela para o projetor)</small></button></section>`);
    const st = montarPalco(el.querySelector(".pc-area-t")), vbox = el.querySelector(".pc-video-t"), at = el.querySelector(".pc-ativar");
    let ativo = false, d = null, M = null, player = null, vid = null, chave = "";
    const pinta = () => { at.hidden = ativo && (!!document.fullscreenElement || matchMedia("(display-mode: fullscreen)").matches || innerHeight >= screen.height - 4); };
    at.onclick = () => { ativo = true; (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : Promise.reject()).catch(() => {}).finally(() => setTimeout(pinta, 300));
      if (player) try { player.unMute(); player.setVolume(100); } catch (e) {} relatar(); };
    addEventListener("fullscreenchange", pinta); addEventListener("resize", pinta); pinta();
    const relatar = () => { if (!BC) return; let v = null; try { if (player && player.getCurrentTime) v = { estado: ({ 1: "play", 2: "pause", 0: "fim", 3: "play" })[player.getPlayerState()] || "pause", pos: player.getCurrentTime(), mudo: player.isMuted(), dur: player.getDuration() }; } catch (e) {}
      BC.postMessage({ tipo: "telao", turma, ativo, vid, v, em: Date.now() }); };
    setInterval(relatar, 1000);
    async function videoMestre(v) {
      if (player && vid === v.vid) return;
      if (player) { try { player.destroy(); } catch (e) {} player = null; }
      vid = v.vid; vbox.innerHTML = `<div id="pc-yt-t"></div>`;
      const Y = await yt(); if (vid !== v.vid) return;
      player = new Y.Player("pc-yt-t", { videoId: v.vid, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
        playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, cc_load_policy: 0 },
        events: { onReady: e => { try { e.target.unMute(); e.target.setVolume(100); } catch (x) {} semLegenda(e.target); relatar(); }, onStateChange: () => relatar() } });
    }
    function comando(m) { const p = player; if (!p || !p.playVideo) return; try {
      if (m.cmd === "play") { p.unMute(); p.playVideo(); } else if (m.cmd === "pause") p.pauseVideo(); else if (m.cmd === "mudo") p.mute(); else if (m.cmd === "som") { p.unMute(); p.setVolume(100); }
      else if (m.cmd === "inicio") { p.seekTo(0, true); p.pauseVideo(); } } catch (e) {} setTimeout(relatar, 150); }
    async function render() {
      if (!d || d.dia !== hoje()) { st.innerHTML = `<div class="pc-espera"><p class="pc-grande">📽️</p><h2>Janela do projetor</h2><p>Esperando o professor…</p></div>`; return; }
      if (d.momento === "video" && d.video && d.video.vid) { el.querySelector(".pc-area-t").hidden = true; vbox.hidden = false; return videoMestre(d.video); }
      if (player) { try { player.destroy(); } catch (e) {} player = null; vid = null; vbox.innerHTML = ""; }
      vbox.hidden = true; el.querySelector(".pc-area-t").hidden = false;
      if (d.momento === "leitura") M = await material(d.aid, d.mid);
      const k = JSON.stringify([d.momento, d.slide, d.leitor, d.leu, d.termo, d.perg, d.on, d.aid, d.mid]); if (k === chave) return; chave = k;
      pintarSlide(st, d, M || { T: { lista: [], termos: [] }, slides: [] }, "telao"); if (M && L().ligarPalavras) L().ligarPalavras(st, M.T.termos, "travado");
    }
    if (BC) BC.addEventListener("message", e => { const m = e.data || {}; if (m.turma !== turma) return;
      if (m.tipo === "estado") { d = m.d; render(); } else if (m.tipo === "cmd") comando(m); else if (m.tipo === "quem") relatar(); });
    if (BC) BC.postMessage({ tipo: "pede", turma });
    // 🎡 a roleta também aparece no projetor (girando e depois o nome)
    let rolVisto = "", rolCx = null;
    try { db().collection("config").doc("roleta_" + turma).onSnapshot(sn => { const r = sn.exists ? sn.data() : null; if (!r || r.dia !== hoje() || !r.em || Date.now() - r.em > 90000) return;
      const k = r.em + (r.girando ? "g" : "n"); if (k === rolVisto) return; rolVisto = k; if (rolCx) rolCx.remove();
      rolCx = h(`<div class="rol-aluno telao"><div>${r.girando ? (r.roda && P.rodaRoletaHTML ? `<h2 class="rol-tit-roda">🎡 A roleta está girando…</h2>${P.rodaRoletaHTML(r.roda)}` : `<p class="rol-ic rol-gira">🎡</p><h2>A roleta está girando…</h2>`)
        : `<div class="rol-festa" aria-hidden="true">${["🎉", "✨", "🎊", "⭐", "🎉", "✨", "🎊", "⭐"].map((x, i) => `<i style="--k:${i}">${x}</i>`).join("")}</div>${P.rolTelaoNome ? P.rolTelaoNome(r) : `<p class="rol-ic">📖</p><p class="rol-sup">Quem vai ler é:</p><h2>${esc(r.nome || "")}</h2>`}`}</div></div>`);
      document.body.appendChild(rolCx); const cx = rolCx; if (r.girando && r.roda && P.rodaGirar) P.rodaGirar(cx, r.roda); setTimeout(() => { if (cx.isConnected) cx.remove(); }, r.girando ? 15000 : 7000); }, () => {}); } catch (e) {}
    render();
  }

  /* ================= 👨‍🏫 PROFESSOR ================= */
  // ctx: { t, alunos, getProg, turmas, aid, mid, nomeTurma, roleta(op), C, ap, modo: "2" (1 tela) | "3" (2 telas) }
  let aberto = null;
  const videosDa = (aid, mid) => { const base = (P.apostila && P.apostila(aid) && P.apostila(aid).base) || aid, vv = ((P.videosMissao || {})[base] || {})[mid];
    return (Array.isArray(vv) ? vv : [vv]).filter(v => v && /^[\w-]{11}$/.test(v.id || v)).map((v, k) => ({ id: v.id || v, nome: v.nome || (k ? "Vídeo extra (passo a passo)" : "Vídeo da missão") })); };
  function abrir(ctx, op) {
    op = op || {};
    if (aberto) { if (op.momento && op.momento !== "espera") aberto.ir(op.momento, op); else aberto.restaurar(); return aberto; }
    const { t, aid, mid } = ctx, doisTelas = ctx.modo === "3", alvo = [...new Set([t.id, ...(ctx.turmas || [])])].filter(x => x === t.id || (ctx.turmasJuntas || []).includes(x));
    const vids = videosDa(aid, mid);
    let M = null, d = { dia: hoje(), sessao: Math.random().toString(36).slice(2, 10), aid, mid, titulo: "", momento: "espera", vivoEm: 0, on: { n: 0, total: ctx.alunos.length },
      video: null, slide: 0, leitor: null, leu: false, termo: null, perg: null, xp: {}, lidos: {}, perguntas: {} };
    let telaoInfo = null, jan = ctx.jan || null, mestre = null, abrirTurma = false, inicioLeitura = 0;
    const tr = P.leitura && P.leitura.trechos ? material(aid, mid).then(m => { M = m; d.titulo = semTags(m.T.titulo); pintar(); }) : Promise.resolve();
    document.body.classList.add("pc-aberto");
    const cx = h(`<div class="pc-prof ${doisTelas ? "pc-dois" : "pc-um"}" role="dialog" aria-label="Aula ao vivo">
      <div class="pc-palco-prof"><div class="pc-area pc-area-p"></div><div class="pc-video pc-video-p" hidden></div></div>
      <aside class="pc-lado"><div class="pc-topo"><h2>🎤 Aula ao vivo · ${esc(ctx.nomeTurma || t.id)}</h2><span class="pc-modo">${doisTelas ? "🖥️📽️ 2 telas" : "🖥️ 1 tela"}</span></div>
        <div class="pc-st"></div><div class="pc-bts"></div><div class="pc-rel"></div></aside>
      <button type="button" class="pc-fab" hidden>👥 A turma</button></div>`);
    document.body.appendChild(cx);
    const st = montarPalco(cx.querySelector(".pc-area-p")), vbox = cx.querySelector(".pc-video-p"), lado = cx.querySelector(".pc-lado"), stEl = cx.querySelector(".pc-st"), bts = cx.querySelector(".pc-bts"), rel = cx.querySelector(".pc-rel"), fab = cx.querySelector(".pc-fab");
    fab.hidden = doisTelas;
    const medirBarra = () => { if (!doisTelas) cx.style.setProperty("--pc-bar", lado.offsetHeight + "px"); };
    try { new ResizeObserver(medirBarra).observe(lado); } catch (e) {} fab.onclick = () => { abrirTurma = !abrirTurma; cx.classList.toggle("pc-turma-aberta", abrirTurma); fab.textContent = abrirTurma ? "✕ Fechar a turma" : "👥 A turma"; relatorio(); };
    P.leituraAtual = { turmas: alvo, sessao: d.sessao };
    if (doisTelas) garantirTelao();   // 2 telas: a janela do projetor abre junto (ainda dentro do clique)   // ✏️ o pincel espelha para os alunos destas turmas
    medir(db().collection("prof").doc("relogio"));

    /* ---- gravar: Firebase (alunos) + BroadcastChannel (projetor, no mesmo computador) ---- */
    let passoUlt = "";
    const publico = () => { const o = JSON.parse(JSON.stringify(d)); delete o.perguntas; return o; };
    function salvar(semPintar) {
      const passo = d.momento + d.slide; if (passo !== passoUlt) { passoUlt = passo; if (P.lousa && P.lousa.limparPincel) P.lousa.limparPincel(); }
      if (d.termo && d.termo.slide !== d.slide) d.termo = null;
      d.vivoEm = agora(); const o = publico();
      alvo.forEach(id => db().collection("config").doc("palco_" + id).set(o).catch(e => console.warn("palco", e)));
      if (BC) BC.postMessage({ tipo: "estado", turma: t.id, d: o });
      if (P.podio && P.podio.setBonus) alvo.forEach(id => P.podio.setBonus(id, hoje(), d.xp));
      if (!semPintar) pintar();
    }
    if (BC) BC.addEventListener("message", onBC);
    function onBC(e) { const m = e.data || {}; if (m.turma !== t.id) return;
      if (m.tipo === "pede") BC.postMessage({ tipo: "estado", turma: t.id, d: publico() });
      if (m.tipo === "telao") { const antes = telaoInfo && telaoInfo.v ? telaoInfo.v.estado + telaoInfo.v.mudo : null; telaoInfo = m; if (doisTelas && d.momento === "video" && m.v && m.vid === (d.video || {}).vid) { publicarVideo(m.v); if (antes !== m.v.estado + m.v.mudo) pintar(); else pintarRemoto(); } } }
    const hb = setInterval(() => { if (!cx.isConnected) return clearInterval(hb); salvar(true); }, 20000);
    const ivOn = setInterval(() => { if (!cx.isConnected) return clearInterval(ivOn); contar(); if (!doisTelas || d.momento !== "video") relatorio(); }, 2000);
    addEventListener("beforeunload", sairUnload);
    function sairUnload() { try { const o = publico(); o.momento = "espera"; alvo.forEach(id => db().collection("config").doc("palco_" + id).set(o)); } catch (e) {} }

    /* ---- quem está online e respostas ---- */
    const online = () => { const pr = ctx.getProg(), ag = Date.now(); return ctx.alunos.filter(a => { const s2 = pr.find(p => p.tipo === "sessao" && p.alunoId === a.id); return s2 && ag - ms(s2.ping) < 180000; }); };
    const docP = id => ctx.getProg().find(p => p.tipo === "palco" && p.alunoId === id && p.dia === hoje() && p.sessao === d.sessao);
    function contar() {
      const on = online(), n = { n: on.length, total: ctx.alunos.length };
      if (n.n !== d.on.n || n.total !== d.on.total) { d.on = n; salvar(true); if (d.momento === "espera") pintar(); }
      const sl = M && M.slides[d.slide]; if (d.momento !== "leitura" || !sl || sl.t !== "pergunta" || (d.perg && d.perg.revelada)) return;
      const k = d.sessao + "_" + d.slide, rs = on.filter(a => (((docP(a.id) || {}).resp) || {})[k] != null);
      if (!d.perg || d.perg.slide !== d.slide || d.perg.resp !== rs.length || d.perg.total !== on.length) { d.perg = { slide: d.slide, revelada: false, resp: rs.length, total: on.length }; salvar(); }
      // ✅ todos os que estão online responderam: mostra a certa sozinha (1,5 s depois, para a última resposta chegar)
      if (on.length && rs.length >= on.length && !d._auto) { d._auto = d.slide; setTimeout(() => { if (d.momento === "leitura" && d.slide === d._auto && !(d.perg && d.perg.revelada)) revelar(); d._auto = null; }, 1500); }
    }
    function revelar() {
      const sl = M.slides[d.slide]; if (!sl || sl.t !== "pergunta") return;
      const k = d.sessao + "_" + d.slide, on = online(), resp = {}; ctx.alunos.forEach(a => { const r = (((docP(a.id) || {}).resp) || {})[k]; if (r != null) resp[a.id] = r; });
      const ac = ctx.alunos.filter(a => resp[a.id] === sl.q.certa), er = ctx.alunos.filter(a => resp[a.id] != null && resp[a.id] !== sl.q.certa), sem = on.filter(a => resp[a.id] == null);
      ac.forEach(a => { const meia = !!((((docP(a.id) || {}).hzMeia) || {})[k]); d.xp[a.id] = (d.xp[a.id] || 0) + (meia ? 3 : XP_PERGUNTA); });   // 🌟 Modo Helena: acertou a figura na 2ª tentativa = 3 XP
      d.perg = { slide: d.slide, revelada: true, certa: sl.q.certa, resp: ac.length + er.length, total: on.length, acertaram: ac.map(a => nomeCurto(a.nome)), erraram: er.map(a => nomeCurto(a.nome)), semResp: sem.map(a => nomeCurto(a.nome)) };
      d.perguntas[d.slide] = { termo: sl.q.termo, acertos: ac.length, resp: ac.length + er.length, quem: ac.map(a => a.id) };
      if (P.sons && P.sons.tandam) try { P.sons.tandam(); } catch (e) {}   // 🥁 "tan-dam!" curtinho (pedido do professor)
      salvar();
    }

    /* ---- 🎬 vídeo ---- */
    let ultPub = "";
    function publicarVideo(v) {   // v: { estado, pos } do player mestre (aqui ou no projetor)
      if (!d.video) return; const novo = { vid: d.video.vid, titulo: d.video.titulo, estado: v.estado, pos: v.pos || 0, emMs: agora() };
      const k = novo.estado + "|" + Math.round(novo.pos); const deriva = d.video.estado === "play" && novo.estado === "play" ? Math.abs(esperado(d.video) - novo.pos) : 99;
      if (k === ultPub || (novo.estado === d.video.estado && deriva < 0.6)) return; ultPub = k; d.video = novo; salvar(true);
    }
    const tocandoAgora = () => doisTelas ? !!(telaoInfo && telaoInfo.v && telaoInfo.v.estado === "play" && Date.now() - telaoInfo.em < 3000) : !!(mestre && mestre.getPlayerState && mestre.getPlayerState() === 1);
    const ivMus = setInterval(() => { if (!cx.isConnected) return clearInterval(ivMus); if (d.momento === "video" && tocandoAgora() && P.musica) P.musica.abafar(2500); }, 1000);
    async function mestreLocal(v) {   // 1 tela: o player com som fica aqui
      if (mestre && mestre._vid === v.vid) return;
      if (mestre) { try { mestre.destroy(); } catch (e) {} mestre = null; }
      vbox.innerHTML = `<div id="pc-yt-p"></div>`; const Y = await yt(); if (!d.video || d.video.vid !== v.vid) return;
      mestre = new Y.Player("pc-yt-p", { videoId: v.vid, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
        playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, cc_load_policy: 0 },
        events: { onReady: e => { try { e.target.unMute(); e.target.setVolume(100); } catch (x) {} semLegenda(e.target); pintarRemoto(); },
          onStateChange: e => { const s = e.data; publicarVideo({ estado: s === 1 || s === 3 ? "play" : s === 0 ? "fim" : "pause", pos: e.target.getCurrentTime() }); pintar(); } } });
      mestre._vid = v.vid;
      const iv = setInterval(() => { if (!mestre || mestre._vid !== v.vid) return clearInterval(iv); try { if (mestre.getPlayerState() === 1) { publicarVideo({ estado: "play", pos: mestre.getCurrentTime() }); pintarRemoto(); } } catch (e) {} }, 1000);
    }
    function remoto(cmd) {
      if (doisTelas) { if (BC) BC.postMessage({ tipo: "cmd", turma: t.id, cmd }); return; }
      const p = mestre; if (!p || !p.playVideo) return;
      try { if (cmd === "play") { p.unMute(); p.playVideo(); } else if (cmd === "pause") p.pauseVideo(); else if (cmd === "mudo") p.mute(); else if (cmd === "som") { p.unMute(); p.setVolume(100); }
        else if (cmd === "inicio") { p.seekTo(0, true); p.pauseVideo(); setTimeout(() => publicarVideo({ estado: "pause", pos: 0 }), 200); } } catch (e) {}
      setTimeout(pintar, 200);
    }
    const estadoMestre = () => { if (doisTelas) { const v = telaoInfo && Date.now() - telaoInfo.em < 3000 ? telaoInfo.v : null; return v ? { tocando: v.estado === "play", mudo: v.mudo, pos: v.pos, dur: v.dur } : null; }
      try { return mestre && mestre.getPlayerState ? { tocando: mestre.getPlayerState() === 1, mudo: mestre.isMuted(), pos: mestre.getCurrentTime(), dur: mestre.getDuration() } : null; } catch (e) { return null; } };
    const mmss = s => { s = Math.max(0, Math.round(s || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
    function pintarRemoto() { const r = lado.querySelector(".pc-remoto-info"); if (!r) return; const e = estadoMestre();
      r.innerHTML = e ? `${e.tocando ? "▶ tocando" : "⏸ pausado"} · ${mmss(e.pos)} de ${mmss(e.dur)} · ${e.mudo ? "🔇 <b>sem som</b>" : "🔊 com som"}` : doisTelas ? "⚠️ A janela do projetor não respondeu: clique em 📽️ Abrir a janela do projetor" : "⏳ carregando o vídeo…"; }

    /* ---- trocar de momento ---- */
    function ir(momento, o2) {
      o2 = o2 || {}; restaurar();
      if (d.momento === "leitura" && momento !== "leitura") registrarLeitura();
      if (momento === "video") { const v = o2.vid ? vids.find(x => x.id === o2.vid) || { id: o2.vid, nome: o2.nome || "Vídeo do YouTube" } : vids[0];
        if (!v) { P.toast && P.toast("Esta missão ainda não tem vídeo cadastrado."); return; }
        d.video = { vid: v.id, titulo: v.nome, estado: "pause", pos: 0, emMs: agora() }; ultPub = "";
        if (doisTelas) garantirTelao(); }
      if (momento === "leitura" && d.momento !== "leitura") { d.slide = 0; d.leitor = null; d.leu = false; d.perg = null; d.termo = null; inicioLeitura = Date.now(); }
      if (momento !== "video" && mestre) { try { mestre.destroy(); } catch (e) {} mestre = null; vbox.innerHTML = ""; }
      if (momento !== "leitura" && P.lousa && P.lousa.fechar && P.lousa.estado && P.lousa.estado().modo === "pincel") P.lousa.fechar();
      d.momento = momento; salvar();
    }
    function garantirTelao() {   // abre a janela do projetor (precisa ser no clique: o navegador bloqueia janela aberta depois)
      if (jan && !jan.closed) { try { jan.focus(); } catch (e) {} return; }
      jan = window.open("#/telao/" + t.id, "telao-" + t.id, "popup,width=1280,height=720");
      if (!jan) { P.toast && P.toast("⚠️ O navegador bloqueou a janela do projetor: permita pop-ups deste site e clique em 📽️ Abrir a janela do projetor."); return; }
      if ("getScreenDetails" in window) getScreenDetails().then(sd => { const outras = sd.screens.filter(s => s !== sd.currentScreen); if (!outras.length) return;
        const a = outras.sort((x, y) => y.width * y.height - x.width * x.height)[0]; jan.moveTo(a.availLeft, a.availTop); jan.resizeTo(a.availWidth, a.availHeight); }).catch(() => {});
      setTimeout(() => BC && BC.postMessage({ tipo: "estado", turma: t.id, d: publico() }), 1200);
    }

    /* ---- leitura: avançar, voltar, roleta, leu ---- */
    const N = () => M ? M.slides.length : 0;
    function irSlide(i) { if (!M) return; d.slide = Math.max(0, Math.min(N() - 1, i)); const sl = M.slides[d.slide];
      d.leitor = sl.t === "trecho" ? (d.lidos[sl.i] || null) : d.leitor; d.leu = sl.t === "trecho" ? !!d.lidos[sl.i] : d.leu; if (sl.t !== "pergunta" || !(d.perg && d.perg.slide === d.slide)) { if (sl.t === "pergunta") d.perg = null; } salvar(); }
    function sortear(pular) { if (!ctx.roleta) return; ctx.roleta({ leitura: true, pular: pular ? pular.id : null, aoEscolher: (a, ex) => { d.leitor = { id: a.id, nome: a.nome }; if (ex && ex.maestra) d.leitor.maestra = ex.maestra; d.leu = false; salvar(); } }); }
    function leu() { const sl = M.slides[d.slide]; if (!d.leitor || !sl) return; d.leu = true; d.lidos[sl.i] = d.leitor; d.xp[d.leitor.id] = (d.xp[d.leitor.id] || 0) + XP_LEITOR; const mae = d.leitor.maestra; if (mae && mae.id) d.xp[mae.id] = (d.xp[mae.id] || 0) + XP_LEITOR; salvar(); }   // 🌟 a maestra que escolheu ganha os mesmos pontos de quem leu
    async function registrarLeitura() {   // 📒 no Diário (aula do dia) e no relatório da família, como antes
      if (!M) return; const leitores = Object.entries(d.lidos).filter(([, x]) => x).map(([i, x]) => ({ id: x.id, nome: x.nome, trecho: +i + 1 }));
      if (!leitores.length && !Object.keys(d.perguntas).length) return;
      const respostas = {}; Object.values(d.perguntas).forEach(pq => (pq.quem || []).forEach(id => { respostas[id] = (respostas[id] || 0) + 1; }));
      const reg = { feita: true, aid, mid, titulo: semTags(M.T.titulo), trechos: M.T.lista.length, video: !!d._viuVideo, leitores, perguntas: Object.entries(d.perguntas).map(([i, x]) => ({ trecho: (M.slides[i] || {}).i + 1, termo: x.termo, acertos: x.acertos, resp: x.resp })), acertosPorAluno: respostas, xp: d.xp, inicio: inicioLeitura, fim: Date.now() };
      const linha = `📖 Leitura guiada do texto "${semTags(M.T.titulo).replace(/^[^–]*–\s*/, "")}"${d._viuVideo ? " (com o vídeo da missão antes)" : ""}: ${M.T.lista.length} trechos; leram em voz alta: ${leitores.map(x => x.nome.split(" ")[0]).join(", ") || "—"}.`;
      try { await Promise.all(alvo.map(async id => { const ref = db().collection("prof/diario/turmas/" + id + "/aulas").doc(hoje()); let r0 = ""; try { const sn = await ref.get(); r0 = (sn.exists && sn.data().registro) || ""; } catch (e) {}
        const registro = r0.includes("📖 Leitura guiada") ? r0.replace(/📖 Leitura guiada[^\n]*/, linha) : (r0 ? r0.trim() + "\n" : "") + linha;
        return ref.set({ data: hoje(), leituraGuiada: reg, registro }, { merge: true }); })); } catch (e) { console.warn("diário leitura", e); }
    }
    async function largada() {
      if (P.confirmar && !(await P.confirmar("🏁 Dar a largada agora? Cada aluno vai para a missão e faz no próprio ritmo.", "🏁 Sim, valendo!"))) return;
      try { await Promise.all(alvo.map(id => db().collection("config").doc("hoje_" + id).set({ largadaEm: Date.now() }, { merge: true }))); } catch (e) { P.toast && P.toast("Não foi possível dar a largada: " + (e.message || e)); return; }
      fechar(true); P.toast && P.toast("🏁 Largada! A turma começou junta.");
    }
    async function fechar(semPergunta) {
      if (d.momento === "leitura") registrarLeitura();
      d.momento = "espera"; salvar(true); clearInterval(hb); clearInterval(ivOn); clearInterval(ivMus);
      if (mestre) try { mestre.destroy(); } catch (e) {} mestre = null;
      if (P.lousa && P.lousa.fechar && P.lousa.estado && P.lousa.estado().modo) P.lousa.fechar();
      if (BC) BC.removeEventListener("message", onBC); removeEventListener("beforeunload", sairUnload);
      if (jan && !jan.closed) try { jan.close(); } catch (e) {}
      P.leituraAtual = null; document.body.classList.remove("pc-aberto", "pc-mini"); if (pilula) pilula.remove(); cx.remove(); aberto = null;
    }

    /* ---- 🔗 qualquer vídeo do YouTube (colar o link), em sincronia, como antes no 📡 Transmitir ---- */
    async function colarLink() {
      const txt = P.perguntar ? await P.perguntar("Cole aqui o link do vídeo do YouTube:", "") : null; if (!txt) return;
      const m = String(txt).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/) || String(txt).trim().match(/^([\w-]{11})$/);
      if (!m) { P.aviso ? P.aviso("Não reconheci esse link. Copie o endereço do vídeo no YouTube (ex.: https://youtu.be/…) e tente de novo.") : null; return; }
      ir("video", { vid: m[1], nome: "Vídeo do YouTube" });
    }
    /* ---- 📚 vídeo de outra missão da mesma apostila (23/11/2026, pedido do professor) ---- */
    function outraMissao() {
      const base = (P.apostila && P.apostila(aid) && P.apostila(aid).base) || aid, tudo = (P.videosMissao || {})[base] || {}, C = (P.conteudo || {})[aid] || (P.conteudo || {})[base];
      const tit = m => { const x = C && C.missoes.find(y => y.id === m); return x ? `${x.icone || ""} ${x.titulo || m}` : m.toUpperCase(); };
      const lista = Object.entries(tudo).flatMap(([m, v]) => (Array.isArray(v) ? v : [v]).filter(x => x && /^[\w-]{11}$/.test(x.id || x)).map((x, k) => ({ m, id: x.id || x, nome: x.nome || (k ? "vídeo extra (passo a passo)" : "vídeo da missão") })));
      if (!lista.length) { P.aviso && P.aviso("Esta apostila ainda não tem vídeos cadastrados."); return; }
      const dl = h(`<dialog class="pp-dlg pc-lista-v"><h2>📚 Vídeos desta apostila</h2><p class="ajuda">Toque num vídeo: ele passa em sincronia no projetor e nos computadores.</p>
        <div class="pc-lv">${lista.map((v, i) => `<button type="button" class="btn ${v.m === mid ? "btn-ok" : "btn-sec"}" data-i="${i}">${esc(tit(v.m))}<small> · ${esc(v.nome)}${v.m === mid ? " (missão de hoje)" : ""}</small></button>`).join("")}</div>
        <form method="dialog" class="row-btns"><button class="btn">Cancelar</button></form></dialog>`);
      document.body.appendChild(dl); dl.addEventListener("close", () => dl.remove()); dl.showModal();
      dl.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { const v = lista[+b.dataset.i]; dl.close(); ir("video", { vid: v.id, nome: tit(v.m).replace(/^\S+\s/, "") + " · " + v.nome }); });
    }
    /* ---- ⬇ ir ao painel sem encerrar: os alunos continuam onde estão (sala de espera, slide ou vídeo) ---- */
    let mini = false, pilula = null;
    function minimizar() {
      if (P.lousa && P.lousa.fechar && P.lousa.estado && P.lousa.estado().modo) P.lousa.fechar();
      mini = true; document.body.classList.add("pc-mini"); document.body.classList.remove("pc-aberto");
      if (!pilula) { pilula = h(`<button type="button" class="pc-volta"></button>`); pilula.onclick = restaurar; document.body.appendChild(pilula); }
      pintarPilula();
    }
    function restaurar() { if (!mini) return; mini = false; document.body.classList.remove("pc-mini"); document.body.classList.add("pc-aberto"); if (pilula) { pilula.remove(); pilula = null; } pintar(); }
    function pintarPilula() { if (!pilula) return; const sl = M && M.slides[d.slide];
      pilula.innerHTML = `<span class="pc-vivo">● AO VIVO</span> 🎤 ${esc(ctx.nomeTurma || t.id)}: ${d.momento === "espera" ? `🚦 sala de espera (👥 ${d.on.n} de ${d.on.total})` : d.momento === "video" ? "🎬 vídeo" : sl && sl.t === "pergunta" ? "🤔 pergunta" : "📖 leitura"} · <b>▲ Voltar para a Aula ao vivo</b>`; }

    /* ---- a tela do professor ---- */
    function pintar() {
      if (mini) return pintarPilula();
      const ehVideo = d.momento === "video";
      cx.dataset.momento = d.momento;
      if (ehVideo && !doisTelas) { st.hidden = true; vbox.hidden = false; mestreLocal(d.video); }
      else { st.hidden = false; vbox.hidden = true;
        if (d.momento !== "leitura" || M) { pintarSlide(st, d, M || { T: { lista: [], termos: [] }, slides: [] }, "prof");
          if (M && L().ligarPalavras) L().ligarPalavras(st, M.T.termos, "prof", x => { d.termo = { t: semTags(x.termo), slide: d.slide }; salvar(); });
          const fx = st.querySelector(".pc-termo-x"); if (fx) fx.onclick = () => { d.termo = null; salvar(); }; } }
      const sl = M && M.slides[d.slide];
      stEl.innerHTML = d.momento === "espera" ? `🚦 <b>Sala de espera</b> · 👥 <b>${d.on.n}</b> de ${d.on.total} entraram`
        : ehVideo ? `🎬 <b>Vídeo:</b> ${esc(d.video && d.video.titulo || "")}<br><span class="pc-remoto-info"></span>`
        : !sl ? "📖 carregando o texto…" : sl.t === "pergunta" ? `🤔 <b>Pergunta relâmpago</b> · slide ${d.slide + 1} de ${N()}` : `📖 <b>Trecho ${sl.i + 1}</b> de ${M.T.lista.length} · slide ${d.slide + 1} de ${N()} · ${d.leitor ? `lendo: <b>${esc(nomeCurto(d.leitor.nome))}</b>${d.leu ? " ✔" : ""}` : "falta sortear quem lê"}`;
      const B = [];   // [classe, rótulo, ação, dica]
      if (d.momento === "espera") {
        B.push(["pc-g pc-verde", "🎬 Começar pelo vídeo", () => { d._viuVideo = true; ir("video"); }, vids.length ? vids[0].nome : "Esta missão não tem vídeo"]);
        B.push(["pc-g pc-azul", "📖 Começar pela leitura", () => ir("leitura")]);
        if (vids.length > 1) vids.slice(1).forEach(v => B.push(["", "🎬 " + v.nome, () => ir("video", { vid: v.id })]));
        B.push(["pc-g pc-largada", "🏁 Dar a largada", largada, "Cada aluno vai para a missão, no próprio ritmo"]);
        B.push(["", "📚 Vídeo de outra missão", outraMissao, "Todos os vídeos desta apostila, de qualquer missão"]);
        B.push(["", "🔗 Outro vídeo (colar link do YouTube)", colarLink, "Qualquer vídeo do YouTube, em sincronia em todos os computadores"]);
        if (doisTelas) B.push(["", "📽️ Abrir a janela do projetor", garantirTelao]);
        B.push(["pc-mini", "⬇ Ir ao painel (os alunos continuam esperando)", minimizar, "Para ver códigos, chamada etc. Volte pelo botão 🎤 no alto da tela"]);
        B.push(["pc-sai", "✕ Fechar a Aula ao vivo", () => fechar()]);
      } else if (ehVideo) {
        const e = estadoMestre() || {};
        B.push(["pc-g " + (e.tocando ? "pc-amarelo" : "pc-verde"), e.tocando ? "⏸ Pausar" : "▶️ Play", () => remoto(e.tocando ? "pause" : "play")]);
        B.push(["", e.mudo ? "🔊 Ligar o som" : "🔇 Tirar o som", () => remoto(e.mudo ? "som" : "mudo")]);
        B.push(["", "⏮ Voltar ao início (pausado)", () => remoto("inicio")]);
        if (doisTelas) B.push(["", "📽️ Abrir a janela do projetor", garantirTelao]);
        B.push(["pc-azul", "📖 Ir para a leitura", () => ir("leitura")]);
        B.push(["", "📚 Vídeo de outra missão", outraMissao]);
        B.push(["", "🔗 Trocar por outro link", colarLink]);
        B.push(["pc-mini", "⬇ Ir ao painel", minimizar, "O vídeo continua; volte pelo botão 🎤 no alto da tela"]);
        B.push(["pc-sai", "✕ Fechar o vídeo (volta à sala de espera)", () => ir("espera")]);
      } else if (sl) {
        if (sl.t === "trecho") {
          if (!d.leitor) B.push(["pc-g pc-roxo", "🎡 Sortear quem lê", () => sortear()]);
          else if (!d.leu) { B.push(["pc-g pc-verde", `✔ Leu! (+${XP_LEITOR} XP)`, leu]); B.push(["", "⏭ Pular (sortear outro)", () => { const a = d.leitor; d.leitor = null; salvar(); sortear(a); }]); }
          else B.push(["pc-roxo", "🎡 Sortear outro leitor", () => { d.leitor = null; d.leu = false; salvar(); sortear(); }]);
        } else if (!(d.perg && d.perg.revelada)) B.push(["pc-g pc-verde", "✅ Mostrar a resposta agora", revelar, "Aparece sozinha quando todos os que estão online responderem"]);
        B.push(["pc-nav", "◀ Anterior", () => irSlide(d.slide - 1)]);
        B.push(["pc-nav pc-g pc-azul", d.slide < N() - 1 ? "Próximo ▶" : "🏁 Fim do texto: voltar à sala de espera", () => d.slide < N() - 1 ? irSlide(d.slide + 1) : ir("espera")]);
        B.push(["pc-ferr", "✏️ Riscar", () => P.lousa && P.lousa.ferramenta && P.lousa.ferramenta("pincel"), "O risco aparece no projetor e nos computadores dos alunos"]);
        B.push(["pc-ferr", "🔴 Laser", () => P.lousa && P.lousa.ferramenta && P.lousa.ferramenta("laser")]);
        B.push(["pc-ferr", "🧽 Apagar riscos", () => P.lousa && P.lousa.limparPincel && P.lousa.limparPincel()]);
        B.push(["pc-ferr", "🖱️ Mouse (clicar nas palavras)", () => P.lousa && P.lousa.ferramenta && P.lousa.ferramenta("mouse")]);
        if (vids.length) B.push(["", "🎬 Ir para o vídeo", () => { d._viuVideo = true; ir("video"); }]);
        B.push(["pc-mini", "⬇ Ir ao painel", minimizar, "Os alunos continuam no slide; volte pelo botão 🎤 no alto da tela"]);
        B.push(["pc-sai", "✕ Fechar a leitura (volta à sala de espera)", () => ir("espera")]);
      }
      bts.innerHTML = ""; B.forEach(([c, txt, fn, dica]) => { const b = document.createElement("button"); b.type = "button"; b.className = "btn pc-b " + (c || ""); b.textContent = txt; if (dica) b.title = dica; b.onclick = ev => { try { P.sons && P.sons.destravar && P.sons.destravar(); } catch (e) {} fn(ev); }; bts.appendChild(b); });
      const fer = P.lousa && P.lousa.estado ? P.lousa.estado() : {}; bts.querySelectorAll(".pc-ferr").forEach(b => { const f = /Riscar/.test(b.textContent) ? "pincel" : /Laser/.test(b.textContent) ? "laser" : /Mouse/.test(b.textContent) ? "mouse" : ""; b.classList.toggle("on", !!f && (fer.modo === "pincel" ? fer.ferr === f : f === "mouse")); b.addEventListener("click", () => setTimeout(pintar, 50)); });
      if (ehVideo) pintarRemoto();
      relatorio();
    }
    function relatorio() {   // 👥 a turma agora
      if (!doisTelas && !abrirTurma) return;
      const pr = ctx.getProg(), on = new Set(online().map(a => a.id)), sl = M && M.slides[d.slide], perg = d.momento === "leitura" && sl && sl.t === "pergunta", k = d.sessao + "_" + d.slide;
      const linhas = ctx.alunos.map(a => { const p = docP(a.id), s2 = pr.find(x => x.tipo === "sessao" && x.alunoId === a.id), tl = pr.find(x => x.tipo === "tela" && x.alunoId === a.id);
        const pc = s2 && /^PC\d+$/.test(s2.pc || "") ? s2.pc.slice(2) : "", junto = !!(p && p.momento === d.momento && Date.now() - ms(p.ping) < 45000), r = p && p.resp ? p.resp[k] : undefined;
        const leuA = Object.values(d.lidos).some(x => x && x.id === a.id), saiu = tl && tl.saidas && tl.saidas[hoje()] ? tl.saidas[hoje()] : 0;
        return { a, on: on.has(a.id), pc, junto, r, leuA, saiu, falhou: p && p.falhou, xp: d.xp[a.id] || 0 }; }).sort((x, y) => (y.on - x.on) || x.a.nome.localeCompare(y.a.nome, "pt-BR"));
      const nOn = linhas.filter(x => x.on).length, nJ = linhas.filter(x => x.junto).length, falhas = linhas.filter(x => x.falhou && d.momento === "video");
      rel.innerHTML = `<p class="pc-rel-t">👥 A turma agora</p><div class="pc-num"><span>✅ <b>${nOn}</b> de ${ctx.alunos.length} entraram</span>${d.momento !== "espera" ? `<span>👀 <b>${nJ}</b> acompanhando</span>` : ""}${perg ? `<span>✋ <b>${(d.perg && d.perg.resp) || 0}</b> responderam</span>` : ""}${falhas.length ? `<span class="alerta">😕 vídeo não abriu: ${falhas.map(x => esc(nomeCurto(x.a.nome))).join(", ")}</span>` : ""}</div>
        <table class="pc-tab"><thead><tr><th>Aluno</th><th>PC</th><th>Agora</th>${perg ? "<th>Resp.</th>" : ""}<th>XP</th></tr></thead><tbody>${linhas.map(x => `<tr class="${x.on ? "" : "fora"}"><td>${esc(nomeCurto(x.a.nome))}${x.leuA ? " 🎤" : ""}</td><td>${x.pc ? "💻 " + x.pc : "–"}</td>
          <td>${!x.on ? "⚪ não entrou" : d.momento === "espera" ? "🟢 na sala de espera" : x.falhou && d.momento === "video" ? "😕 vídeo não abriu" : x.junto ? "🟢 acompanhando" : "🟡 abrindo…"}${x.saiu ? ` <small>🖥️ saiu ${x.saiu}×</small>` : ""}</td>${perg ? `<td>${x.r == null ? "…" : d.perg && d.perg.revelada ? (x.r === sl.q.certa ? "✅" : "❌") : "✔"}</td>` : ""}<td>${x.xp ? "⭐ +" + x.xp : ""}</td></tr>`).join("")}</tbody></table>`;
    }
    aberto = { ir, fechar, restaurar, minimizar, d: () => d, cx };
    tr.then(() => { if (op.momento && op.momento !== "espera") ir(op.momento, op); });
    salvar(); contar();
    return aberto;
  }

  P.palco = { ouvir, telao, abrir, aberto: () => aberto, material, _A: A };
})();
