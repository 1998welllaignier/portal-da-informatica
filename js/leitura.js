/* ============================================================
   📖 LEITURA GUIADA (leitura compartilhada) — Prof. Welington Laignier (20/11/2026)
   Pedido do professor: no começo da aula, quando ele está 100% com a turma,
   liga a leitura guiada do "💡 Para começar". Ordem: 🎬 vídeo da missão no
   projetor → 📖 leitura do texto em trechos → 🔓 liberar a turma no ritmo de cada um.

   • Todos veem a MESMA coisa, sem rolar: o texto vira trechos curtos (slides).
   • Em cada trecho, a 🎡 roleta sorteia quem lê em voz alta (com ⏭ Pular).
   • Quem lê ganha ⭐ +10 XP no placar; depois do trecho, 🤔 pergunta relâmpago
     (o que significa uma palavra do trecho) e quem acerta ganha +5 XP.
   • Palavras difíceis destacadas: tocar mostra o significado.
   • 3 telas (projetor + monitor do professor + Veyon) ou 2 telas (os controles
     ficam numa faixa só na tela do professor).
   • No fim, fica registrado no Diário (aula do dia) e no relatório da família.

   Estado: config/leitura_<turma> (o professor grava; alunos e o telão leem)
     { ativa, dia, aid, mid, modo:"2"|"3", fase:"video"|"trecho"|"pergunta"|"resposta",
       idx, n, leitor:{id,nome}|null, leu:bool, xp:{alunoId:pts}, lidos:{idx:{id,nome}},
       stats:{resp,total,acertos}, video, em }
   Resposta do aluno: progresso/<aluno>_leitura { tipo:"leitura", dia, idx, fase, ping, resp:{idx:opção} }
   ============================================================ */
(function () {
  "use strict";
  const semLegenda = (p => { try { p.unloadModule && (p.unloadModule("captions"), p.unloadModule("cc")); p.setOption && p.setOption("captions", "track", {}); } catch (x) {} });   // 💬 sem a legenda automática do YouTube (25/11/2026)
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const h = html => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const hoje = () => (P.nuvem && P.nuvem.hoje ? P.nuvem.hoje() : new Date().toISOString().slice(0, 10));
  const db = () => P.nuvem.app(0).db;
  const semTags = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const XP_LEITOR = 10, XP_PERGUNTA = 5;

  /* ---------- o texto dividido em trechos (~70 palavras; a ilustração vai junto com o bloco de antes) ---------- */
  const cacheT = {};
  async function trechos(aid, mid) {
    const k = aid + "|" + mid; if (cacheT[k]) return cacheT[k];
    const b = await P.leituraBase(aid, mid); if (!b) return (cacheT[k] = { lista: [], termos: [] });
    const filhos = [...b.el.children], grupos = []; let atual = [], pal = 0; const ALVO = 60;
    // a ilustração "pesa" como um parágrafo (ocupa a tela): assim cada trecho cabe sem a letra ficar miúda
    const conta = c => c.classList.contains("ilustracao") ? 40 : semTags(c.textContent).split(" ").filter(Boolean).length;
    filhos.forEach(c => { const w = conta(c); if (atual.length && w && pal + w > ALVO * 1.35 && pal >= ALVO * 0.45) { grupos.push(atual); atual = []; pal = 0; } atual.push(c); pal += w; });
    if (atual.length) grupos.push(atual);
    if (grupos.length > 1 && grupos[grupos.length - 1].reduce((t, c) => t + conta(c), 0) < 25) { const u = grupos.pop(); grupos[grupos.length - 1].push(...u); }
    return (cacheT[k] = { lista: grupos.map(g => g.map(x => x.outerHTML).join("")), termos: b.termos, titulo: b.titulo, icone: b.icone });
  }
  // 🤔 pergunta relâmpago: "O que significa X?" com 3 opções (a definição certa + 2 de outras palavras da missão)
  function pergunta(T, idx) {
    const termos = (T.termos || []).filter(t => t.termo && t.def); if (termos.length < 3) return null;
    const txt = norm(semTags(T.lista[idx] || "")), base = t => norm(String(t.termo).replace(/\s*\(.*?\)\s*/g, " "));
    let alvo = termos.find(t => txt.includes(base(t))) || termos[idx % termos.length];
    const def = t => semTags(t.def).split(/\s+Onde (eu |fica|se |está|aparece)/)[0].replace(/[.:;]$/, "");
    const outras = termos.filter(t => t !== alvo); const seed = idx * 7 + 3;
    const d1 = outras[seed % outras.length], d2 = outras[(seed + 3) % outras.length] === d1 ? outras[(seed + 1) % outras.length] : outras[(seed + 3) % outras.length];
    const ops = [def(alvo), def(d1), def(d2)], ordem = [[0, 1, 2], [1, 0, 2], [2, 1, 0], [1, 2, 0]][idx % 4];
    return { termo: semTags(alvo.termo), q: `O que significa “${semTags(alvo.termo)}”?`, ops: ordem.map(i => ops[i]), certa: ordem.indexOf(0) };
  }
  // palavra destacada → significado (os botões vêm do texto já pronto, sem o clique original)
  // se a palavra destacada não está no "O que significa?" desta missão, procura nas outras apostilas já carregadas
  const todosTermos = () => { const L = [], visto = new Set(), anda = o => { if (!o || typeof o !== "object" || visto.has(o)) return; visto.add(o); if (Array.isArray(o)) return o.forEach(anda); if (o.termo && o.def) L.push(o); Object.values(o).forEach(anda); }; anda(P.conteudo || {}); return L; };
  const acharTermo = (termos, txt) => achar1(termos, txt) || achar1(todosTermos(), txt);
  const achar1 = (termos, txt) => { const t = norm(txt); return (termos || []).find(y => norm(String(y.termo).replace(/\s*\(.*?\)\s*/g, " ")).startsWith(t) || t.startsWith(norm(String(y.termo).replace(/\s*\(.*?\)\s*/g, " ")))); };
  /* 👆 20/11/2026 (pedido do professor): na leitura guiada, a palavra difícil abre COM O CLIQUE DO PROFESSOR e aparece igual
     em todas as telas (alunos, telão e a do professor), como numa apresentação. O aluno não abre sozinho durante a leitura guiada;
     fora dela (estudo normal), cada aluno toca e abre a sua. modo: "prof" (cb = ao escolher) | "travado" (aluno na leitura guiada) */
  function ligarPalavras(raiz, termos, modo, cb) {
    raiz.querySelectorAll(".termo-link").forEach(b => { const x = acharTermo(termos, b.textContent);
      if (modo === "travado") { b.onclick = e => { e.preventDefault(); e.stopPropagation(); }; b.tabIndex = -1; b.classList.add("lg-so-prof"); b.title = "O professor vai abrir esta palavra para todos"; return; }
      if (modo === "prof") { b.title = "Clique para mostrar o significado na tela de TODOS"; b.onclick = e => { e.stopPropagation(); if (x) cb(x); }; return; }
      b.onclick = e => { e.stopPropagation(); if (!x) return; const d = h(`<dialog class="pp-dlg lg-def"><h2>📖 ${x.rotulo || esc(x.termo)}</h2>${P.termoImg ? P.termoImg(x.termo, x.rotulo) : ""}<p class="modal-def">${x.def}</p><form method="dialog" class="row-btns"><button class="btn btn-ok">👍 Entendi</button></form></dialog>`);
        document.body.appendChild(d); d.addEventListener("close", () => d.remove()); d.showModal(); }; });
  }
  // a janela da palavra que o professor abriu para todos (fica por cima do trecho até ele fechar)
  function sincTermo(dono, d, T, rodape) {
    const k = d && d.termo && d.fase === "trecho" ? d.termo.em + "|" + d.termo.t : "", velho = dono.querySelector(":scope > .lg-defall");
    if (velho && velho.dataset.k === k) return; if (velho) velho.remove(); if (!k) return;
    const x = acharTermo(T.termos, d.termo.t) || { termo: d.termo.t, def: "" };
    const el = h(`<div class="lg-defall" data-k="${esc(k)}"><div class="lg-defcx"><p class="lg-defsup">📖 Palavra difícil</p><h2>${x.rotulo || esc(x.termo)}</h2>${P.termoImg ? P.termoImg(x.termo, x.rotulo) : ""}<p class="modal-def">${x.def || ""}</p>${rodape || ""}</div></div>`);
    dono.appendChild(el); return el;
  }
  // diminui a letra até o trecho caber inteiro na tela (todos veem tudo, sem rolar)
  function caber(box) { if (!box) return; let f = 1.6; box.style.fontSize = f + "rem"; let n = 0;
    box.querySelectorAll(".ilustracao svg, .ilustracao img").forEach(x => { x.style.maxHeight = "36vh"; });
    while (box.scrollHeight > box.clientHeight + 2 && n++ < 40) {
      if (f > 1.05) { f -= 0.05; box.style.fontSize = f + "rem"; continue; }
      const ims = box.querySelectorAll(".ilustracao svg, .ilustracao img"); const mh = parseFloat((ims[0] && ims[0].style.maxHeight) || "36");
      if (ims.length && mh > 18) { ims.forEach(x => { x.style.maxHeight = (mh - 3) + "vh"; }); continue; }
      if (f > 0.85) { f -= 0.05; box.style.fontSize = f + "rem"; continue; } break; } }

  const cabeDuasVezes = box => { caber(box); setTimeout(() => caber(box), 450); };   // de novo depois que as imagens carregam
  /* ---------- a tela do trecho (igual para o aluno, o telão e a prévia do professor) ---------- */
  function htmlFase(d, T, quem) {   // quem: "aluno" | "telao" | "previa"
    const n = d.n || T.lista.length, i = Math.min(d.idx || 0, n - 1), cab = `<div class="lg-cab"><span class="lg-selo">📖 Leitura guiada</span><b>${esc(T.icone || "")} ${esc(semTags(T.titulo || ""))}</b><span class="lg-pos">${d.fase === "espera" ? "⏳ Já vai começar" : d.fase === "video" ? "🎬 Vídeo" : `Trecho ${i + 1} de ${n}`}</span></div>`;
    // ⏳ 23/11/2026 (pedido do professor): ao abrir a leitura guiada, primeiro a sala de espera; ele vê quantos entraram e escolhe começar pelo texto ou pelo vídeo
    if (d.fase === "espera") { const e = d.espera || {}; return `${cab}<div class="lg-fim lg-espera"><p class="lg-grande">📖</p><h2>A leitura guiada já vai começar!</h2>${quem !== "aluno" && e.total ? `<p class="lg-esp-num">👥 <b>${e.on || 0}</b> de ${e.total} alunos já entraram</p>` : ""}</div>`; }
    if (d.fase === "video") return `${cab}<div class="lg-video">${quem === "telao" && d.video ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(d.video)}?rel=0&modestbranding=1&enablejsapi=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Vídeo da missão"></iframe>`
      : `<p class="lg-grande">🎬</p><h2>Agora vamos ver um vídeo</h2>`}</div>`;
    const P2 = d.fase === "pergunta" || d.fase === "resposta" ? pergunta(T, i) : null;
    let faixa;
    if (d.leitor) faixa = quem === "aluno" && d.souEu ? `<div class="lg-leitor eu">🎤 <b>É a sua vez de ler!</b></div>` : `<div class="lg-leitor">📖 Lendo agora: <b>${esc(d.leitor.nome)}</b>${d.leu ? " ✔" : ""}${d.leitor.maestra ? ` <span class="pc-maestra">🌟 escolha de ${esc(String(d.leitor.maestra.nome || "").split(" ")[0])}</span>` : ""}</div>`;
    else faixa = `<div class="lg-leitor sem">🎡 Quem vai ler?</div>`;
    if (P2) {
      const st = d.stats || {}, rev = d.fase === "resposta", minha = d.minhaResp;
      return `${cab}<div class="lg-perg"><p class="lg-sup">🤔 Pergunta relâmpago</p><h2>${esc(P2.q)}</h2><div class="lg-ops">${P2.ops.map((o, k) => `<button type="button" class="lg-op${rev && k === P2.certa ? " certa" : ""}${rev && minha === k && k !== P2.certa ? " errada" : ""}${minha === k ? " minha" : ""}" data-op="${k}" ${quem !== "aluno" || rev || minha != null ? "disabled" : ""}><span>${"ABC"[k]}</span>${esc(o)}</button>`).join("")}</div>
        <p class="lg-info">${rev ? (quem === "aluno" ? (minha == null ? "Você não respondeu a tempo." : minha === P2.certa ? `✅ Você acertou! <b>+${XP_PERGUNTA} XP</b>` : "❌ Não foi dessa vez") : `✅ <b>${st.acertos || 0}</b> de ${st.resp || 0} acertaram`) : quem === "aluno" ? (minha != null ? "✔ Resposta enviada" : "") : `✋ Responderam: <b>${st.resp || 0}</b> de ${st.total || 0}`}</p></div>`;
    }
    return `${cab}${faixa}<div class="lg-texto leitura">${T.lista[i] || ""}</div>`;
  }

  /* ========== 👩‍🎓 TELA DO ALUNO: ouve a leitura e trava a tela no trecho ========== */
  let alUnsub = null, alTurma = null, alCx = null, alUlt = "", alResp = {};
  P.leituraAtiva = false;
  function ouvir(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || alTurma === s.turma) return;
    if (alUnsub) alUnsub(); alTurma = s.turma;
    try { alUnsub = db().collection("config").doc("leitura_" + s.turma).onSnapshot(sn => mostrarAluno(sn.exists ? sn.data() : null), () => {}); } catch (e) {}
    // ✏️ 23/11/2026: o risco e o laser do professor por cima do trecho, na tela do aluno
    try { db().collection("config").doc("lousaLeitura_" + s.turma).onSnapshot(sn => { let x = sn.exists ? sn.data() : null; try { if (x && x.j) x = Object.assign(JSON.parse(x.j), { em: x.em }); } catch (e) { x = null; }
      if (!P.lousa || !P.lousa.receberEspelho) return;
      if (!x || !alCx || !alCx.isConnected || Date.now() - (x.em || 0) > 120000) return P.lousa.receberEspelho(null, () => null);
      P.lousa.receberEspelho(x, () => alCx && alCx.isConnected ? alCx.querySelector(".lg-quadro") : null); }, () => {}); } catch (e) {}
    addEventListener("hashchange", () => { if (alCx && /^#\/(prova|painel)/.test(location.hash)) fecharAluno(); });
  }
  function fecharAluno() { if (P.lousa && P.lousa.receberEspelho) P.lousa.receberEspelho(null, () => null); if (alCx) { alCx.remove(); alCx = null; } document.body.classList.remove("lg-travado"); P.leituraAtiva = false; }
  async function mostrarAluno(d) {
    const s = (P.sess && P.sess.get && P.sess.get()) || null;
    if (!d || !d.ativa || d.dia !== hoje() || !s || /^#\/(prova|painel)/.test(location.hash)) { fecharAluno(); return; }
    P.leituraAtiva = true;
    const T = await trechos(d.aid, d.mid); if (!T.lista.length) return;
    const meus = s.alunoIds || [], idx = d.idx || 0;
    const v = Object.assign({}, d, { souEu: !!(d.leitor && meus.includes(d.leitor.id)), minhaResp: alResp[d.aid + d.mid + idx] });
    const chave = JSON.stringify([d.fase, idx, d.leitor && d.leitor.id, d.leu, v.minhaResp, d.stats && d.fase === "resposta"]);
    if (!alCx || !alCx.isConnected) { alCx = h(`<div class="lg-aluno" role="dialog" aria-label="Leitura guiada"><div class="lg-quadro"></div></div>`); document.body.appendChild(alCx); }
    document.body.classList.add("lg-travado");
    sincTermo(alCx, d, T, `<p class="lg-defpe">👀 O professor abriu esta palavra para a turma toda.</p>`);
    if (chave === alUlt) return; alUlt = chave;
    const q = alCx.querySelector(".lg-quadro"); q.innerHTML = htmlFase(v, T, "aluno"); q.classList.toggle("sou-eu", v.souEu);
    ligarPalavras(q, T.termos, "travado"); requestAnimationFrame(() => cabeDuasVezes(q.querySelector(".lg-texto")));
    q.querySelectorAll(".lg-op").forEach(b => b.onclick = () => { const k = +b.dataset.op; alResp[d.aid + d.mid + idx] = k; enviar(s, d, { resp: { [idx]: k } }); mostrarAluno(d); });
    enviar(s, d, {});
  }
  function enviar(s, d, extra) {   // o aluno avisa em que trecho está (e a resposta da pergunta) — para o relatório do professor
    (s.alunoIds || []).forEach((id, i) => { try { P.nuvem.app(i).db.collection("progresso").doc(id + "_leitura").set(Object.assign({ alunoId: id, turma: s.turma, tipo: "leitura", dia: hoje(), aid: d.aid, mid: d.mid, idx: d.idx || 0, fase: d.fase, ping: Date.now() }, extra), { merge: true }).catch(() => {}); } catch (e) {} });
  }

  /* ========== 📽️ TELÃO (janela do projetor no modo 3 telas): #/telao/<turma> ========== */
  async function telao(mount, turma) {
    document.body.classList.add("modo-telao");
    const el = mount(`<section class="lg-telao"><div class="lg-quadro grande"></div><button type="button" class="lg-cheia">⛶ Toque aqui para deixar em tela cheia<small>(ou aperte F11)</small></button></section>`);
    const q = el.querySelector(".lg-quadro"), bc = el.querySelector(".lg-cheia");
    const pinta = () => { bc.hidden = !!document.fullscreenElement || matchMedia("(display-mode: fullscreen)").matches; };
    bc.onclick = () => { (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : Promise.reject()).catch(() => {}).finally(() => setTimeout(pinta, 300)); };
    addEventListener("fullscreenchange", pinta); addEventListener("resize", pinta); pinta();
    // 🎡 a roleta também aparece no projetor (no modo 3 telas ela gira na tela do professor): "girando…" e depois o nome com festa
    let rolVisto = "", rolCx = null;
    db().collection("config").doc("roleta_" + turma).onSnapshot(sn => { const r = sn.exists ? sn.data() : null; if (!r || r.dia !== hoje() || !r.em || Date.now() - r.em > 90000) return;
      const k = r.em + (r.girando ? "g" : "n"); if (k === rolVisto) return; rolVisto = k; if (rolCx) rolCx.remove();
      rolCx = h(`<div class="rol-aluno telao"><div>${r.girando ? (r.roda && P.rodaRoletaHTML ? `<h2 class="rol-tit-roda">🎡 A roleta está girando…</h2>${P.rodaRoletaHTML(r.roda)}` : `<p class="rol-ic rol-gira">🎡</p><h2>A roleta está girando…</h2><p>Quem será que vai ler?</p>`)
        : `<div class="rol-festa" aria-hidden="true">${["🎉", "✨", "🎊", "⭐", "🎉", "✨", "🎊", "⭐", "🎉", "✨"].map((e, i) => `<i style="--k:${i}">${e}</i>`).join("")}</div>${P.rolTelaoNome ? P.rolTelaoNome(r) : `<p class="rol-ic">📖</p><p class="rol-sup">Quem vai ler é:</p><h2>${esc(r.nome || "")}</h2>`}`}</div></div>`);
      document.body.appendChild(rolCx); const cx = rolCx; if (r.girando && r.roda && P.rodaGirar) P.rodaGirar(cx, r.roda); setTimeout(() => { if (cx.isConnected) cx.remove(); }, r.girando ? 15000 : 7000); }, () => {});
    // 📡 23/11/2026: no projetor, o vídeo acompanha o que o professor dá play/pausa (config/sala_<turma>), sem som
    let salaD = null, ytP = null;
    const ytApi = () => new Promise(r => { if (window.YT && YT.Player) return r(YT); const o = window.onYouTubeIframeAPIReady; window.onYouTubeIframeAPIReady = () => { o && o(); r(YT); }; if (!document.querySelector('script[src*="iframe_api"]')) { const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s); } });
    const sincTelao = () => { const p = ytP; if (!p || !p.getCurrentTime || !salaD || salaD.modo !== "video") return; try {
      const ag = P.sala && P.sala.agora ? P.sala.agora() : Date.now(), alvo = (salaD.pos || 0) + (salaD.estado === "play" ? (ag - (salaD.emMs || ag)) / 1000 : 0);
      if (Math.abs(p.getCurrentTime() - alvo) > 1.2) p.seekTo(alvo, true);
      if (salaD.estado === "play" && p.getPlayerState() !== 1) p.playVideo(); if (salaD.estado !== "play" && p.getPlayerState() === 1) p.pauseVideo(); } catch (e) {} };
    db().collection("config").doc("sala_" + turma).onSnapshot(sn => { salaD = sn.exists ? sn.data() : null; sincTelao(); }, () => {});
    setInterval(sincTelao, 2000);
    let ult = "";
    db().collection("config").doc("leitura_" + turma).onSnapshot(async sn => {
      const d = sn.exists ? sn.data() : null;
      if (!d || !d.ativa || d.dia !== hoje()) { q.innerHTML = `<div class="lg-fim"><p class="lg-grande">📖</p><h2>Leitura guiada encerrada</h2><p>Pode fechar esta janela.</p></div>`; ult = ""; return; }
      const T = await trechos(d.aid, d.mid), chave = JSON.stringify([d.fase, d.idx, d.leitor, d.leu, d.stats, d.fase === "espera" ? d.espera : 0]);
      sincTermo(el, d, T, "");
      if (chave === ult) return; ult = chave;
      if (d.fase === "video" && q.querySelector(".lg-video iframe, .lg-video .tl-yt")) return;   // não recarrega o vídeo que está tocando
      q.innerHTML = htmlFase(d, T, "telao"); ligarPalavras(q, T.termos, "travado"); requestAnimationFrame(() => cabeDuasVezes(q.querySelector(".lg-texto")));
      ytP = null; const ifr = q.querySelector(".lg-video iframe");
      // 🩺 23/11/2026: no projetor, um player só, SEM SOM desde o início (o som sai do player do professor) e preso no tempo dele
      if (ifr) { const box = document.createElement("div"); box.id = "tl-yt"; box.className = "tl-yt"; ifr.replaceWith(box); if (P.sala && P.sala.relogio) P.sala.relogio();
        ytApi().then(Y => { if (!box.isConnected) return; ytP = new Y.Player("tl-yt", { videoId: d.video, host: "https://www.youtube-nocookie.com", width: "100%", height: "100%",
          playerVars: { autoplay: 0, mute: 1, controls: 0, disablekb: 1, fs: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, cc_load_policy: 0 },
          events: { onReady: e => { try { e.target.mute(); } catch (x) {} semLegenda(e.target); sincTelao(); } } }); }).catch(() => {}); }
    }, () => {});
  }

  /* ========== 👨‍🏫 CONTROLES DO PROFESSOR (dentro do placar ao vivo) ========== */
  // ctx: { t, alunos, getProg, turmas, So, aid, mid, roleta(opções), nomeTurma }
  async function iniciar(ctx) {
    if (document.querySelector(".lgc-escolha, .lgc")) return;
    const { t, aid, mid } = ctx, T = await trechos(aid, mid);
    if (!T.lista.length) { P.toast && P.toast("Esta missão não tem o texto do “Para começar”."); return; }
    const vv = ((P.videosMissao || {})[(P.apostila && P.apostila(aid) && P.apostila(aid).base) || aid] || {})[mid] || ((P.videosMissao || {})[aid] || {})[mid];
    const vid = (Array.isArray(vv) ? vv : [vv]).map(v => v && (v.id || v)).find(v => /^[\w-]{11}$/.test(v || "")) || null;
    const esc1 = h(`<div class="lgc-escolha rl-cobre"><div class="rl-caixa"><h2>📖 Leitura guiada</h2><p class="rl-sub">${esc(T.icone || "")} ${esc(semTags(T.titulo))} · ${T.lista.length} trechos</p>
      <p class="lgc-q">Quantas telas você está usando agora?</p>
      <div class="lgc-telas"><button type="button" data-m="3"><span>🖥️🖥️📽️</span><b>3 telas</b><small>Projetor + o seu monitor (controles e relatório) + o Veyon</small></button>
        <button type="button" data-m="2"><span>🖥️📽️</span><b>2 telas</b><small>Esta tela vai para o projetor; os controles ficam numa faixa só aqui</small></button></div>
      <div class="rl-bts"><button type="button" class="btn btn-sec lgc-cancela">Cancelar</button></div></div></div>`);
    const comecar = modo => { let jan = null; if (modo === "3") jan = window.open("#/telao/" + t.id, "telao-leitura", "popup,width=1280,height=720");   // abre já, perto do clique (o navegador bloqueia janela aberta muito depois)
      esc1.remove(); controle(ctx, T, modo, vid, jan); };
    if (ctx.modo === "2" || ctx.modo === "3") return comecar(ctx.modo);   // aberto pelo painel: ele já sabe quantas telas são, vai direto para a sala de espera
    document.body.appendChild(esc1);
    esc1.querySelector(".lgc-cancela").onclick = () => esc1.remove();
    esc1.querySelectorAll("[data-m]").forEach(b => b.onclick = () => comecar(b.dataset.m));
  }
  async function moverParaProjetor(jan) {
    if (!jan || !("getScreenDetails" in window)) return false;
    try { const sd = await getScreenDetails(); const outras = sd.screens.filter(s => s !== sd.currentScreen); if (!outras.length) return false;
      let alvo = outras.find(s => s.label && s.label === localStorage.getItem("portal:telaProjetor")) || (outras.length === 1 ? outras[0] : outras.sort((a, b) => (b.width * b.height) - (a.width * a.height))[0]);
      jan.moveTo(alvo.availLeft, alvo.availTop); jan.resizeTo(alvo.availWidth, alvo.availHeight); return alvo; } catch (e) { return false; }
  }
  async function controle(ctx, T, modo, vid, jan) {
    const { t, alunos, getProg, turmas, So, aid, mid } = ctx, N = T.lista.length;
    const alvo = [...new Set([t.id, ...(turmas || [])])];
    let d = { ativa: true, dia: hoje(), aid, mid, modo, fase: "espera", espera: null, viuVideo: false, idx: 0, n: N, leitor: null, leu: false, xp: {}, lidos: {}, stats: null, video: vid, inicio: Date.now(), perguntas: {} };
    const gravar = () => { d.em = Date.now(); return Promise.all(alvo.map(id => db().collection("config").doc("leitura_" + id).set(JSON.parse(JSON.stringify(d))))).catch(e => console.warn("leitura", e)); };
    await gravar(); bonus();
    // 📡 23/11/2026: o vídeo da missão passa EM SINCRONIA no projetor e nas telas dos alunos (mesmo esquema do 📡 Transmitir)
    const passarSinc = () => { if (vid && P.sala && P.sala.passarVideo) P.sala.passarVideo(t.id, vid, "Vídeo da missão: " + semTags(T.titulo || ""), ctx.nomeTurma || t.id,
      // 23/11/2026 (pedido do professor): aqui o botão não "libera a turma": encerra o vídeo e volta para a sala de espera da leitura guiada
      { fim: "◀ Encerrar o vídeo e voltar para a leitura guiada", aviso: "🎬 Vídeo encerrado: de volta ao começo da leitura guiada.", aoFim: () => { if (cx.isConnected && d.fase === "video") { d.fase = "espera"; salvar(); } } }).catch(e => console.warn("sala", e)); };
    const pararSinc = () => { try { if (P.sala && P.sala._PR && P.sala._PR.t) P.sala.parar("🎬 Vídeo encerrado nos computadores. A leitura guiada continua."); } catch (e) {} };
    if (modo === "3" && jan) moverParaProjetor(jan).then(s => { if (s && s.label) try { localStorage.setItem("portal:telaProjetor", s.label); } catch (e) {} });
    // 2 telas: esta própria tela vira o telão, com a faixa de controles embaixo (só aqui, os alunos não veem)
    const cx = h(`<div class="lgc ${modo === "2" ? "lgc-2" : "lgc-3"}" role="dialog" aria-label="Controles da leitura guiada">
      ${modo === "2" ? `<div class="lg-quadro grande lgc-tela"></div>` : `<div class="lgc-topo"><h2>📖 Leitura guiada · ${esc(ctx.nomeTurma || t.id)}</h2>${jan ? "" : `<span class="lgc-dica">⚠️ A janela do projetor foi bloqueada: permita pop-ups e clique em 📽️ Abrir o telão.</span>`}</div>
        <div class="lgc-corpo"><div class="lgc-esq"><p class="lgc-rot">📽️ Projetor e alunos</p><div class="lg-quadro lgc-previa"></div></div><div class="lgc-dir"><p class="lgc-rot">📊 A turma agora</p><div class="lgc-rel"></div></div></div>`}
      <div class="lgc-barra"><div class="lgc-st"></div><div class="lgc-bts"></div></div></div>`);
    document.body.appendChild(cx);
    const tela = cx.querySelector(".lgc-tela, .lgc-previa"), bts = cx.querySelector(".lgc-bts"), st = cx.querySelector(".lgc-st"), rel = cx.querySelector(".lgc-rel");
    const msT = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;
    const online = () => { const pr = getProg(), ag = Date.now(); return alunos.filter(a => { const s2 = pr.find(p => p.tipo === "sessao" && p.alunoId === a.id); return s2 && ag - msT(s2.ping) < 180000; }); };
    const docL = id => getProg().find(p => p.tipo === "leitura" && p.alunoId === id && p.dia === hoje() && p.aid === aid && p.mid === mid);
    function bonus() { if (P.podio && P.podio.setBonus) alvo.forEach(id => P.podio.setBonus(id, hoje(), d.xp)); }
    function addXP(id, n) { d.xp[id] = (d.xp[id] || 0) + n; bonus(); }
    function contar() { const P2 = pergunta(T, d.idx); if (!P2) return { resp: 0, total: 0, acertos: 0, quem: [] };
      const on = online(), rs = on.map(a => ({ a, r: ((docL(a.id) || {}).resp || {})[d.idx] })).filter(x => x.r != null);
      return { resp: rs.length, total: on.length, acertos: rs.filter(x => x.r === P2.certa).length, quem: rs.filter(x => x.r === P2.certa).map(x => x.a.id) }; }
    function pintar() {
      tela.innerHTML = htmlFase(d, T, modo === "2" ? "telao" : "previa");
      ligarPalavras(tela, T.termos, "prof", x => { d.termo = { t: semTags(x.termo), em: Date.now() }; salvar(); });
      const jt = sincTermo(modo === "2" ? cx : tela.parentElement, d, T, `<div class="lg-defbts"><span>👀 Aparecendo na tela de todos${modo === "3" ? " e no telão" : ""}</span><button type="button" class="btn btn-ok lg-deffecha">✕ Fechar para todos</button></div>`);
      if (jt) jt.querySelector(".lg-deffecha").onclick = () => { d.termo = null; salvar(); }; requestAnimationFrame(() => cabeDuasVezes(tela.querySelector(".lg-texto")));
      st.innerHTML = d.fase === "espera" ? `⏳ Começando a leitura: <b>${(d.espera || {}).on || 0}</b> de ${alunos.length} alunos já entraram` : d.fase === "video" ? "🎬 Vídeo da missão" : `Trecho <b>${d.idx + 1}</b> de ${N} · ${d.fase === "trecho" ? (d.leitor ? `lendo: <b>${esc(d.leitor.nome)}</b>${d.leu ? " ✔" : ""}` : "falta sortear quem lê") : d.fase === "pergunta" ? "🤔 pergunta relâmpago" : "✅ resposta mostrada"}`;
      const B = [];
      if (d.fase === "espera") {
        B.push(["lgc-ok", "📖 Começar pelo texto", () => { d.fase = "trecho"; salvar(); }]);
        if (vid) B.push(["lgc-ok", "🎬 Começar pelo vídeo", () => { d.fase = "video"; d.viuVideo = true; salvar(); passarSinc(); }]);
        else B.push(["lgc-sec lgc-off", "🎬 Esta missão ainda não tem vídeo", () => {}]);
      }
      if (d.fase === "video") { B.push(["lgc-ok", "📖 Terminou o vídeo: começar a leitura ➜", () => { pararSinc(); d.fase = "trecho"; salvar(); }]); B.push(["lgc-sec", "📡 Abrir o vídeo de novo", passarSinc]); }
      if (d.fase === "trecho") {
        if (!d.leitor) B.push(["lgc-rol", "🎡 Sortear quem lê", sortear]);
        else if (!d.leu) { B.push(["lgc-ok", `✔ Leu! (+${XP_LEITOR} XP)`, () => { d.leu = true; addXP(d.leitor.id, XP_LEITOR); if (d.leitor.maestra && d.leitor.maestra.id) addXP(d.leitor.maestra.id, XP_LEITOR); d.lidos[d.idx] = d.leitor; salvar(); }]); B.push(["lgc-sec", "⏭ Pular (sortear outro)", () => { const a = d.leitor; d.leitor = null; salvar(); sortear(a); }]); }
        if (d.leu || !d.leitor) { if (pergunta(T, d.idx)) B.push([d.leu ? "lgc-ok" : "lgc-sec", "🤔 Pergunta relâmpago", () => { d.fase = "pergunta"; d.stats = { resp: 0, total: online().length, acertos: 0 }; salvar(); }]);
          B.push([d.leu && !pergunta(T, d.idx) ? "lgc-ok" : "lgc-sec", d.idx < N - 1 ? "Próximo trecho ➜" : "🏁 Terminar e liberar a turma", proximo]); }
      }
      if (d.fase === "pergunta") B.push(["lgc-ok", "✅ Mostrar a resposta certa", mostrarResposta]);
      if (d.fase === "resposta") B.push(["lgc-ok", d.idx < N - 1 ? "Próximo trecho ➜" : "🏁 Terminar e liberar a turma", proximo]);
      // ◀ 23/11/2026 (pedido do professor): do 1º trecho ou do vídeo, "Voltar" leva de novo à sala de espera, para escolher outro começo
      if (d.fase !== "espera") B.push(["lgc-sec", d.fase === "video" || (d.fase === "trecho" && d.idx === 0) ? "◀ Voltar (escolher texto ou vídeo)" : "◀ Voltar", voltar]);
      if (modo === "3") B.push(["lgc-sec", "📽️ Abrir o telão", () => { const j = window.open("#/telao/" + t.id, "telao-leitura", "popup,width=1280,height=720"); moverParaProjetor(j); }]);
      B.push(["lgc-sai", "✕ Encerrar", encerrar]);
      bts.innerHTML = ""; B.forEach(([c, txt, fn]) => { const b = document.createElement("button"); b.type = "button"; b.className = "btn " + c; b.textContent = txt; b.onclick = fn; bts.appendChild(b); });
      if (rel) relatorio();
    }
    function relatorio() {   // 📊 a turma agora (3 telas): quem entrou, tela cheia, em que trecho está, quem já leu, quem respondeu
      const pr = getProg(), ag = Date.now(), on = new Set(online().map(a => a.id)), P2 = (d.fase === "pergunta" || d.fase === "resposta") ? pergunta(T, d.idx) : null;
      const linhas = alunos.map(a => { const L = docL(a.id), s2 = pr.find(p => p.tipo === "sessao" && p.alunoId === a.id), tl = pr.find(p => p.tipo === "tela" && p.alunoId === a.id);
        const saiu = tl && tl.saidas && tl.saidas[hoje()] ? tl.saidas[hoje()] : 0, pc = s2 && /^PC\d+$/.test(s2.pc || "") ? s2.pc.slice(2) : "";
        const r = L && L.resp ? L.resp[d.idx] : undefined, junto = L && L.idx === d.idx && ag - (L.ping || 0) < 120000;
        const leu = Object.values(d.lidos).some(x => x && x.id === a.id);
        return { a, on: on.has(a.id), pc, saiu, junto, leu, r, xp: d.xp[a.id] || 0 }; }).sort((x, y) => (y.on - x.on) || x.a.nome.localeCompare(y.a.nome, "pt-BR"));
      const nOn = linhas.filter(x => x.on).length, nJunto = linhas.filter(x => x.junto).length, nSaiu = linhas.filter(x => x.on && x.saiu).length;
      rel.innerHTML = `<div class="lgc-num"><span>👥 <b>${nOn}</b> de ${alunos.length} entraram</span><span>📖 <b>${nJunto}</b> no trecho certo</span><span class="${nSaiu ? "alerta" : ""}">🖥️ ${nSaiu ? `<b>${nSaiu}</b> saíram da tela cheia hoje` : "todos em tela cheia"}</span>${P2 ? `<span>✋ <b>${contar().resp}</b> responderam</span>` : ""}</div>
        <table class="lgc-tab"><thead><tr><th>Aluno</th><th>PC</th><th>Agora</th><th>Leu</th>${P2 ? "<th>Pergunta</th>" : ""}<th>XP</th></tr></thead><tbody>${linhas.map(x => `<tr class="${x.on ? "" : "fora"}"><td>${esc(x.a.nome)}${x.a.visitante || (x.a.turma && x.a.turma !== t.id) ? " 🏫" : ""}</td><td>${x.pc ? "💻 " + x.pc : "–"}</td>
          <td>${!x.on ? "⚪ não entrou" : x.junto ? "🟢 acompanhando" : "🟡 em outra tela"}${x.saiu ? ` <span class="lgc-tc">🖥️ saiu ${x.saiu}×</span>` : ""}</td><td>${x.leu ? "🎤 leu" : ""}</td>${P2 ? `<td>${x.r == null ? "…" : d.fase === "resposta" ? (x.r === P2.certa ? "✅" : "❌") : "✔ respondeu"}</td>` : ""}<td>${x.xp ? "⭐ +" + x.xp : ""}</td></tr>`).join("")}</tbody></table>`;
    }
    // a palavra aberta fecha sozinha quando o professor muda de trecho ou de fase
    P.leituraAtual = { turmas: alvo };   // ✏️ a caneta/laser vai para a tela dos alunos destas turmas
    let passoUlt = d.fase + d.idx;
    const salvar = () => { const passo = d.fase + d.idx; if (passo !== passoUlt) { passoUlt = passo; if (P.lousa && P.lousa.limparPincel) P.lousa.limparPincel(); } if (d.termo) { if (!d.termo.passo) d.termo.passo = passo; else if (d.termo.passo !== passo) d.termo = null; } gravar(); pintar(); };
    function sortear(pular) {
      ctx.roleta({ leitura: true, pular: pular ? pular.id : null, aoEscolher: (a, ex) => { d.leitor = { id: a.id, nome: a.nome }; if (ex && ex.maestra) d.leitor.maestra = ex.maestra; d.leu = false; salvar(); } });
    }
    function mostrarResposta() { if (d.fase !== "pergunta") return; const c = contar(); d.stats = { resp: c.resp, total: c.total, acertos: c.acertos }; c.quem.forEach(id => addXP(id, XP_PERGUNTA)); const P2 = pergunta(T, d.idx); d.perguntas[d.idx] = { termo: P2.termo, acertos: c.acertos, resp: c.resp, quem: c.quem }; d.fase = "resposta"; salvar(); }
    let autoRev = null;   // ✅ 23/11/2026 (pedido do professor): quando TODOS os alunos que entraram responderem, a resposta certa aparece sozinha
    function proximo() { if (d.idx >= N - 1) return terminar(); d.idx++; d.fase = "trecho"; d.leitor = null; d.leu = false; d.stats = null; salvar(); }
    function voltar() { if (d.fase === "video") { pararSinc(); d.fase = "espera"; d.viuVideo = false; } else if (d.fase === "trecho" && d.idx === 0) { d.fase = "espera"; d.leitor = null; d.leu = false; }
      else if (d.fase === "pergunta" || d.fase === "resposta") { d.fase = "trecho"; } else if (d.idx > 0) { d.idx--; d.fase = "trecho"; d.leitor = d.lidos[d.idx] || null; d.leu = !!d.lidos[d.idx]; } salvar(); }
    async function terminar() {
      const leitores = Object.entries(d.lidos).filter(([, x]) => x).map(([i, x]) => ({ id: x.id, nome: x.nome, trecho: +i + 1 }));
      const respostas = {}; Object.values(d.perguntas).forEach(pq => (pq.quem || []).forEach(id => { respostas[id] = (respostas[id] || 0) + 1; }));
      const reg = { feita: true, aid, mid, titulo: semTags(T.titulo), trechos: N, video: !!d.viuVideo, leitores, perguntas: Object.entries(d.perguntas).map(([i, x]) => ({ trecho: +i + 1, termo: x.termo, acertos: x.acertos, resp: x.resp })), acertosPorAluno: respostas, xp: d.xp, inicio: d.inicio, fim: Date.now() };
      // 📒 no Diário: a aula do dia ganha o registro da leitura e uma linha no "Registro das aulas" (que também vai para o relatório da família)
      const linha = `📖 Leitura guiada do texto "${semTags(T.titulo).replace(/^[^–]*–\s*/, "")}"${d.viuVideo ? " (com o vídeo da missão antes)" : ""}: ${N} trechos; leram em voz alta: ${leitores.map(x => x.nome.split(" ")[0]).join(", ") || "—"}.`;
      try { await Promise.all(alvo.map(async id => { const ref = db().collection("prof/diario/turmas/" + id + "/aulas").doc(hoje()); let reg0 = ""; try { const sn = await ref.get(); reg0 = (sn.exists && sn.data().registro) || ""; } catch (e) {}
        const registro = reg0.includes("📖 Leitura guiada") ? reg0.replace(/📖 Leitura guiada[^\n]*/, linha) : (reg0 ? reg0.trim() + "\n" : "") + linha;
        return ref.set({ data: hoje(), leituraGuiada: reg, registro }, { merge: true }); })); } catch (e) { console.warn("diário leitura", e); }
      d.ativa = false; d.fase = "fim"; await gravar();
      P.leituraAtual = null; cx.remove(); P.toast && P.toast("📖 Leitura guiada concluída e anotada no Diário. A turma está liberada!");
    }
    async function encerrar() { if (P.confirmar && !(await P.confirmar("Encerrar a leitura guiada agora? As telas dos alunos voltam ao normal.", "Sim, encerrar"))) return; if (Object.keys(d.lidos).length) return terminar(); d.ativa = false; P.leituraAtual = null; await gravar(); cx.remove(); }
    const contarEspera = () => { const e = { on: online().length, total: alunos.length }; if (!d.espera || d.espera.on !== e.on || d.espera.total !== e.total) { d.espera = e; return true; } return false; };
    contarEspera(); gravar(); pintar();
    const iv = setInterval(() => { if (!cx.isConnected) { clearInterval(iv); return; } if (d.fase === "espera" && contarEspera()) { gravar(); pintar(); return; } if (d.fase === "pergunta") { const c = contar();
        if (c.total > 0 && c.resp >= c.total) { if (!autoRev) { const k = d.idx; autoRev = setTimeout(() => { autoRev = null; if (d.fase === "pergunta" && d.idx === k) mostrarResposta(); }, 1500); } }   // um respiro para a última resposta aparecer
        else if (autoRev) { clearTimeout(autoRev); autoRev = null; }
        if (!d.stats || c.resp !== d.stats.resp || c.total !== d.stats.total) { d.stats = { resp: c.resp, total: c.total, acertos: 0 }; gravar(); pintar(); return; } } if (rel) relatorio(); }, 2000);
  }

  P.leitura = { trechos, pergunta, ouvir, telao, iniciar, htmlFase, acharTermo, ligarPalavras, semTags, norm };
})();
