/* ============================================================
   PORTAL DE APOSTILAS DIGITAIS — ESCOLA JK
   Motor principal: navegação, identificação, progresso,
   páginas das missões, impressão e exportação.
   Professor Welington Laignier
   ============================================================ */
(function () {
  "use strict";

  const P = window.PORTAL = window.PORTAL || {};
  P.conteudo = {};
  P.atividades = {};
  P.tipos = P.tipos || {};
  P.registrarConteudo = (id, d) => { P.conteudo[id] = d; };
  P.registrarAtividades = (id, d) => { P.atividades[id] = d; };
  P.ilustracoes = {};
  P.registrarIlustracoes = (id, d) => { P.ilustracoes[id] = d; };

  const KEY = "portalJK:v1:";
  const SESS = "portalJK:sessao";
  const $app = () => document.getElementById("app");

  /* ---------------- utilidades ---------------- */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // textos das apostilas (conteúdo do professor): aceitam HTML simples e **negrito**
  const md = s => String(s == null ? "" : s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const semTags = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "");
  const h = html => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const norm = s => String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[.,;:!?"'“”]/g, " ").replace(/\s+/g, " ").trim();
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  P.util = { esc, md, h, norm, shuffle, semTags };

  const store = {
    get(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const sess = {
    get() { try { return JSON.parse(sessionStorage.getItem(SESS) || "null"); } catch (e) { return null; } },
    set(v) { try { sessionStorage.setItem(SESS, JSON.stringify(v)); } catch (e) {} },
    del() { try { sessionStorage.removeItem(SESS); } catch (e) {} }
  };

  let toastT;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 3200);
  }
  P.toast = toast;
  /* ✋ ESQUECEU DE VERIFICAR? (18/11/2026, pedido do professor)
     Quando o aluno mexe numa tarefa que tem botão Verificar e começa a mexer em OUTRA sem ter verificado a primeira:
     a esquecida ganha borda amarela + selo "✋ Falta verificar!", aparece um balão "Ir para ela" e, no rodapé,
     um lembrete fixo "⚠️ N tarefas sem verificar" que leva direto até elas. Some sozinho quando forem verificadas. */
  const pendVer = () => [...document.querySelectorAll(".atv[data-mexeu]")].filter(el => !el.classList.contains("concluida") && (() => { const b = el.querySelector('[data-a="verificar"]'); return b && !b.hidden; })());
  function pintarVerificar() {
    const lst = pendVer(); document.querySelectorAll(".atv.falta-verificar").forEach(el => { if (!lst.includes(el)) el.classList.remove("falta-verificar"); });
    let bar = document.getElementById("falta-ver");
    const avisadas = lst.filter(el => el.classList.contains("falta-verificar"));
    document.body.classList.toggle("tem-falta-ver", !!avisadas.length);   // espaço embaixo para o lembrete não cobrir nada
    if (!avisadas.length) { if (bar) bar.remove(); return; }
    if (!bar) { bar = document.createElement("button"); bar.type = "button"; bar.id = "falta-ver"; bar.className = "falta-ver"; document.body.appendChild(bar);
      bar.onclick = () => { const el = pendVer().find(x => x.classList.contains("falta-verificar")); if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); const b = el.querySelector('[data-a="verificar"]'); setTimeout(() => b && b.focus({ preventScroll: true }), 500); } }; }
    bar.innerHTML = `⚠️ <b>${avisadas.length} tarefa${avisadas.length > 1 ? "s" : ""} sem verificar</b> · toque aqui para ir até ela${avisadas.length > 1 ? "s" : ""} ⬆️`;
  }
  document.addEventListener("pointerdown", e => {
    const el = e.target.closest && e.target.closest(".atv"); if (!el || e.target.closest(".atv-acoes, .ab-bit, .resp-prof")) return;
    const antes = pendVer().filter(x => x !== el);
    if (antes.length) antes.forEach(x => { if (!x.classList.contains("falta-verificar")) { x.classList.add("falta-verificar"); 
      const t = (x.querySelector(".atv-cab h2") || {}).textContent || "a tarefa anterior";
      const bal = document.createElement("div"); bal.className = "falta-balao"; bal.setAttribute("role", "alert");
      bal.innerHTML = `✋ <b>Opa!</b> “${esc(t.length > 50 ? t.slice(0, 48) + "…" : t)}” ficou <b>sem verificar</b>. <button type="button" class="btn btn-peq btn-ok">⬆️ Ir para ela</button>`;
      bal.querySelector("button").onclick = () => { bal.remove(); x.scrollIntoView({ behavior: "smooth", block: "center" }); };
      document.body.appendChild(bal); setTimeout(() => bal.remove(), 6000); } });
    if (!el.classList.contains("concluida")) el.dataset.mexeu = "1";
    setTimeout(pintarVerificar, 50);
  }, true);
  setInterval(pintarVerificar, 1000); addEventListener("hashchange", () => { const b = document.getElementById("falta-ver"); if (b) b.remove(); });
  /* ✂️ COPIAR, COLAR E BOTÃO DIREITO BLOQUEADOS (20/11/2026, pedido do professor): nas respostas digitadas o objetivo é
     treinar a digitação, e na prova é evitar cola. O bloqueio é SELETIVO:
     - liberado para o professor (logado) e no painel;
     - liberado nas tarefas que ENSINAM copiar/colar/recortar/desfazer (Ctrl + C/V/X/Z): a tarefa ganha data-libera-copiar
       sozinha quando o texto dela fala desses atalhos (ex.: Bloco de Notas do computador de treino, "copie e cole na caixa");
     - os simuladores que têm o próprio menu do botão direito (Windows, teclado, computador de treino) continuam funcionando,
       porque aqui só se impede o menu do navegador, sem parar o clique deles;
     - as teclas continuam chegando aos jogos e simuladores (só a área de transferência do navegador é bloqueada). */
  let ehProf = false; const verProf = () => { try { professorLogado().then(v => { ehProf = !!v; P.__profSim = ehProf; }); } catch (e) {} };
  setTimeout(verProf, 2500); addEventListener("hashchange", () => { if (!ehProf) { profOk = null; verProf(); } });
  const liberado = e => ehProf || /^#\/painel/.test(location.hash) || !!(e.target && e.target.closest && e.target.closest("[data-libera-copiar], .lousa, .pp-dlg"));
  let avisoCopiar = 0;
  const bloquear = (e, msg) => { if (liberado(e)) return; e.preventDefault();
    if (msg && Date.now() - avisoCopiar > 4000) { avisoCopiar = Date.now(); toast(msg); } };
  document.addEventListener("copy", e => bloquear(e, "✋ Aqui não dá para copiar: o treino é escrever com as suas palavras 😉"));
  document.addEventListener("cut", e => bloquear(e, "✋ Aqui não dá para recortar."));
  document.addEventListener("paste", e => bloquear(e, "✋ Aqui não dá para colar: digite a resposta com as suas palavras 😉"));
  document.addEventListener("contextmenu", e => bloquear(e, null));
  document.addEventListener("drop", e => { const tg = e.target; if (tg && tg.matches && tg.matches("input, textarea, [contenteditable]") && e.dataTransfer && [...(e.dataTransfer.types || [])].includes("text/plain")) bloquear(e, "✋ Aqui não dá para arrastar texto pronto: digite 😉"); });
  const ENSINA_COPIAR = /ctrl\s*\+\s*[cvxz]\b|copiar e colar|copie e cole|recortar|desfazer/i;

  /* 👆 AJUDA QUANDO O ALUNO FICA PARADO (20/11/2026, pedido do professor): no simulador, 12 s sem mexer em nada →
     uma mãozinha pisca em cima do que ele tem que fazer agora; 25 s → além da mãozinha, um balão
     "📖 Leia aqui o que fazer agora" aponta para a instrução, que pisca. Some no primeiro clique ou tecla. */
  function tirarMao() { document.querySelectorAll(".mao-dica, .mao-balao").forEach(x => x.remove()); document.querySelectorAll(".instr-pisca").forEach(x => x.classList.remove("instr-pisca")); }
  P.maozinha = function (alvo, texto) {
    if (!alvo || !alvo.isConnected) return; const r = alvo.getBoundingClientRect(); if (!r.width && !r.height) return;
    const m = document.createElement("div"); m.className = "mao-dica"; m.textContent = "👆"; m.setAttribute("aria-hidden", "true");
    m.style.left = (r.left + r.width / 2 - 22) + "px"; m.style.top = Math.min(innerHeight - 70, r.top + r.height / 2) + "px"; document.body.appendChild(m);
    if (texto) { alvo.classList.add("instr-pisca"); const b = document.createElement("div"); b.className = "mao-balao"; b.setAttribute("role", "status"); b.innerHTML = texto;
      document.body.appendChild(b); const bw = b.offsetWidth; b.style.left = Math.max(8, Math.min(innerWidth - bw - 8, r.left + r.width / 2 - bw / 2)) + "px";
      b.style.top = (r.bottom + 64 < innerHeight - 60 ? r.bottom + 64 : Math.max(8, r.top - 70)) + "px"; }
  };
  P.vigiaParado = function (raiz, o) {
    let t12 = null, t25 = null, vivo = true;
    const ativo = () => vivo && raiz.isConnected && (!o.ativo || o.ativo());
    const zera = () => { clearTimeout(t12); clearTimeout(t25); tirarMao(); if (!vivo || !raiz.isConnected) return;
      t12 = setTimeout(() => { if (ativo()) { tirarMao(); P.maozinha(o.alvo()); } }, 12000);
      t25 = setTimeout(() => { if (ativo()) { tirarMao(); P.maozinha(o.alvo()); P.maozinha(o.instrucao(), "📖 <b>Leia aqui</b> o que fazer agora ⬆️"); } }, 25000); };
    const ev = () => zera(); ["pointerdown", "keydown", "wheel"].forEach(t => document.addEventListener(t, ev, true));
    const parar = () => { vivo = false; clearTimeout(t12); clearTimeout(t25); tirarMao(); ["pointerdown", "keydown", "wheel"].forEach(t => document.removeEventListener(t, ev, true)); };
    const iv = setInterval(() => { if (!raiz.isConnected) { clearInterval(iv); parar(); } }, 3000);
    zera(); return { zera, parar };
  };
  addEventListener("hashchange", tirarMao);

  /* 🚪 TAREFA FORA DO PORTAL (20/11/2026, ideia do professor): nas tarefas feitas nos programas do computador de verdade
     (Explorador de Arquivos, Paint…), o aluno toca em "Sair do portal e fazer no computador": a tela cheia sai SEM contar
     como saída (o professor não é avisado), o portal fica pausado mostrando o checklist marcável, e o botão
     "↩️ Voltar para o portal" só acende quando todos os passos estiverem marcados; ao voltar, a tela cheia volta junto. */
  P.foraDoPortal = false;
  P.sairDoPortal = function (o) {
    if (document.querySelector(".fora-capa")) return;
    P.foraDoPortal = true;
    try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch (e) {}
    const cx = h(`<div class="fora-capa" role="dialog" aria-modal="true" aria-labelledby="fora-t"><div class="fora-cx">
      <p class="fora-ic">🖥️</p><h2 id="fora-t">Agora é no computador!</h2>
      <p class="fora-sub">Abra o <b>${esc(o.programa || "programa")}</b> e faça cada passo. Marque ✔ cada um quando terminar.<br><small>O portal fica pausado até você voltar.</small></p>
      <ol class="fora-lista">${o.passos.map((p, i) => `<li><label><input type="checkbox" data-i="${i}" ${o.marcados && o.marcados[i] ? "checked" : ""}> <span>${p}</span></label></li>`).join("")}</ol>
      <button type="button" class="btn btn-grande btn-ok fora-volta" disabled>↩️ Voltar para o portal</button>
      <p class="ajuda fora-falta"></p></div></div>`);
    document.body.appendChild(cx); document.body.classList.add("simc-travado");
    const bt = cx.querySelector(".fora-volta"), falta = cx.querySelector(".fora-falta");
    const pinta = () => { const n = [...cx.querySelectorAll("input[data-i]")].filter(x => !x.checked).length; bt.disabled = n > 0;
      falta.textContent = n ? `Falta${n > 1 ? "m" : ""} ${n} passo${n > 1 ? "s" : ""} para liberar a volta.` : "Tudo feito! Pode voltar 🎉"; };
    cx.querySelectorAll("input[data-i]").forEach(x => x.onchange = () => { o.aoMarcar && o.aoMarcar(+x.dataset.i, x.checked); pinta(); });
    pinta();
    bt.onclick = () => { const d = document.documentElement;
      const fim = () => { P.foraDoPortal = false; cx.remove(); document.body.classList.remove("simc-travado"); o.aoVoltar && o.aoVoltar(); };
      (d.requestFullscreen ? d.requestFullscreen({ navigationUI: "hide" }) : Promise.resolve()).catch(() => {}).finally(() => setTimeout(fim, 250)); };
  };

  /* ⛶ TODOS OS SIMULADORES EM TELA CHEIA (20/11/2026, pedido do professor; o do computador de treino já era assim desde 19/11):
     enquanto a tarefa não termina, o simulador só funciona em tela cheia (capa "▶ Começar o simulador" por cima);
     em tela cheia, a tarefa ocupa a janela inteira com as instruções em cima; ao terminar, volta sozinha ao tamanho normal.
     Vale para: Windows (inclui a aula especial do papel de parede), explorador de pastas, teclado,
     pintura, programação com blocos e os simuladores de grafo, bolha, adivinhe e César. */
  const SIM_TELA_CHEIA = new Set(["sim_windows", "sim_video", "explorador_pastas", "teclado", "pintura", "blocos", "sim_grafo", "sim_bolha", "sim_adivinhe", "sim_cesar"]);
  addEventListener("hashchange", () => document.body.classList.remove("simc-travado"));
  // o próximo passo da lista do simulador: a 1ª caixinha não marcada (lista do Windows: li sem "ok"; listas com caixinhas de marcar)
  const proximoPasso = el => { const li = el.querySelector(".sw-check li:not(.ok)"); if (li) return li;
    const cb = [...el.querySelectorAll(".atv-corpo input[type=checkbox]")].find(x => !x.checked); return cb ? (cb.closest("li, label") || cb) : null; };
  function telaCheiaSim(el, at, st, corpo) {
    if (!SIM_TELA_CHEIA.has(at.tipo)) return;
    el.classList.add("atv-sim");
    const cab = el.querySelector(".atv-cab");
    const bt = document.createElement("button"); bt.type = "button"; bt.className = "btn btn-peq simc-bt"; cab.appendChild(bt);
    const capa = () => { if (st.status || ehProf || corpo.querySelector(".simc-capa")) return;
      corpo.insertAdjacentHTML("beforeend", `<div class="simc-capa"><button type="button">▶ ${corpo.dataset.simcComecou ? "Continuar" : "Começar"} o simulador<small>só funciona em tela cheia</small></button></div>`);
      corpo.querySelector(".simc-capa").onclick = e => { e.stopPropagation(); foco(true); }; };
    function foco(on) {
      el.classList.toggle("simc-foco", !!on); document.body.classList.toggle("simc-travado", !!on);
      bt.textContent = on ? "✕ Sair da tela cheia" : "⛶ Tela cheia";
      if (on) { corpo.dataset.simcComecou = "1"; const c = corpo.querySelector(".simc-capa"); if (c) c.remove(); el.scrollTop = 0; }
      else { capa(); setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 60); }
      requestAnimationFrame(() => dispatchEvent(new Event("resize")));
    }
    bt.onclick = () => foco(!el.classList.contains("simc-foco"));
    foco(false);
    // 👆 parado no simulador: mãozinha no próximo passo da lista (o primeiro ainda não marcado) e balão apontando a instrução
    P.vigiaParado(el, { ativo: () => el.classList.contains("simc-foco") && !st.status,
      alvo: () => proximoPasso(el) || el.querySelector(".atv-enun") || el.querySelector(".atv-corpo"),
      instrucao: () => proximoPasso(el) || el.querySelector(".atv-enun") || el.querySelector(".atv-cab") });
    // terminou: comemora e sai sozinho da tela cheia
    new MutationObserver(() => { if (el.classList.contains("concluida")) { const c = corpo.querySelector(".simc-capa"); if (c) c.remove();
      if (el.classList.contains("simc-foco")) setTimeout(() => { if (el.classList.contains("simc-foco")) foco(false); }, 2500); } }).observe(el, { attributes: true, attributeFilter: ["class"] });
  }

  /* 🎒 DEIXOU TAREFA PARA TRÁS? (20/11/2026, pedido do professor)
     Ao sair de uma página da missão (próxima etapa, outra etapa da trilha, "Voltar às missões", menu…) com tarefas desta
     página que ficaram para trás, aparece uma janelinha listando cada uma, com "Ir para ela" e "Seguir mesmo assim".
     - ✋ respondeu e não tocou em Verificar → avisa SEMPRE (inclusive voltando para a etapa anterior);
     - ⏳ obrigatória sem fazer e ⭐ opcional sem fazer → avisa só indo para a frente ou saindo da missão, 1 vez por página
       (não fica chato). Se não resolver, o plano B é a liberação sequencial também por tarefa (ver docs). */
  function deixadas() {
    const pv = pendVer(), todas = [...document.querySelectorAll("#pag-corpo .atv[id^='atv-']")].filter(el => !el.classList.contains("concluida") && !el.classList.contains("atv-info"));
    const tit = el => ((el.querySelector(".atv-cab h2") || {}).textContent || "Tarefa").trim();
    return todas.map(el => ({ el, t: tit(el), k: pv.includes(el) ? "ver" : el.dataset.opc ? "opc" : "obr" }));
  }
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a[href^='#/']"); if (!a || e.defaultPrevented || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (a.closest(".atv, .atras-dlg") || !/^#\/missao\//.test(location.hash) || !document.getElementById("pag-corpo")) return;
    const destino = a.getAttribute("href"); if (destino === location.hash) return;
    const lis = [...document.querySelectorAll(".mn-trilha li[data-pg]")], ids = lis.map(li => li.dataset.pg);
    const atual = lis.findIndex(li => li.querySelector("a.atual")), pAtual = ids[atual] || "";
    const [, , aid, mid] = location.hash.split("/"), base = `#/missao/${aid}/${mid}/`;
    const pDest = destino.startsWith(base) ? destino.slice(base.length).split("/")[0] : null;
    const praTras = pDest != null && ids.indexOf(pDest) >= 0 && ids.indexOf(pDest) < atual;
    const chave = "portalJK:atras:" + aid + "/" + mid + "/" + pAtual;
    let jaAvisou = false; try { jaAvisou = !!sessionStorage.getItem(chave); } catch (er) {}
    const lst = deixadas().filter(x => x.k === "ver" || (!praTras && !jaAvisou));
    if (!lst.length) return;
    e.preventDefault(); e.stopPropagation();
    try { sessionStorage.setItem(chave, "1"); } catch (er) {}
    const ROT = { ver: ["✋", "respondeu, mas <b>não tocou em ✔ Verificar</b>"], obr: ["⏳", "ainda <b>não foi feita</b>"], opc: ["⭐", "<b>opcional</b> ainda não feita (vale XP extra)"] };
    const soOpc = lst.every(x => x.k === "opc");
    const dlg = h(`<dialog class="pp-dlg atras-dlg"><h2>${soOpc ? "⭐ Ficou uma tarefa extra para trás" : "🎒 Você está deixando tarefa para trás!"}</h2>
      <p>${soOpc ? "Não é obrigatória, mas vale XP. Quer fazer antes de seguir?" : "Antes de seguir, confira:"}</p>
      <ul class="atras-lista">${lst.map((x, i) => `<li class="atras-${x.k}"><span aria-hidden="true">${ROT[x.k][0]}</span> <span>“${esc(x.t.length > 60 ? x.t.slice(0, 58) + "…" : x.t)}” ${ROT[x.k][1]}</span>
        <button type="button" class="btn btn-peq" data-ir="${i}">⬆️ Ir para ela</button></li>`).join("")}</ul>
      <div class="row-btns"><button type="button" class="btn btn-grande btn-ok" data-ir="0">⬆️ Voltar e terminar</button><button type="button" class="btn btn-sec" data-seguir="1">Seguir mesmo assim →</button></div></dialog>`);
    document.body.appendChild(dlg);
    dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => { const x = lst[+b.dataset.ir]; dlg.close();
      if (x.k === "ver") x.el.classList.add("falta-verificar");
      x.el.scrollIntoView({ behavior: "smooth", block: "center" }); x.el.classList.add("atras-pisca"); setTimeout(() => x.el.classList.remove("atras-pisca"), 2400);
      const bv = x.el.querySelector('[data-a="verificar"]'); setTimeout(() => bv && !bv.hidden && bv.focus({ preventScroll: true }), 500); });
    dlg.querySelector("[data-seguir]").onclick = () => { dlg.close(); location.hash = destino; };
    dlg.showModal();
  }, true);

  /* 📐 a trilha da missão só fica "grudada" na tela se couber inteira; senão rola com a página (nada escondido), 18/11/2026 */
  function ajustarTrilha() { const n = document.querySelector(".mis-nav"); if (!n) return; n.classList.remove("solta"); if (n.getBoundingClientRect().height > innerHeight - 86) n.classList.add("solta"); }
  addEventListener("resize", ajustarTrilha); addEventListener("hashchange", () => setTimeout(ajustarTrilha, 400)); setInterval(ajustarTrilha, 3000);

  /* ---------------- catálogo ---------------- */
  const cat = () => P.catalogo;
  // 🗓️ bimestre em uso: config/geral.periodo (escolhido no painel) ou o padrão do catálogo
  P.periodoAtual = () => P._periodo || cat().periodoPadrao;
  P.doPeriodo = a => a.periodo === "sempre" || !cat().periodoPadrao || (a.periodo || cat().periodoPadrao) === P.periodoAtual();
  /* 📒 separação por bimestre (15/11/2026) */
  P.periodoInfo = pid => (cat().periodos || []).find(x => x.id === (pid || P.periodoAtual())) || {};
  P.noPeriodo = (data, pid) => { const pr = P.periodoInfo(pid); return (!pr.inicio || data >= pr.inicio) && (!pr.fim || data <= pr.fim); };
  P.periodoDoAid = aid => { const a = cat().apostilas.find(x => x.id === aid); return a ? (a.periodo || cat().periodoPadrao) : null; };
  P.aidDoPeriodo = (aid, pid) => { const p = P.periodoDoAid(aid); return p === "sempre" || p === (pid || P.periodoAtual()); };
  P.ehLegado = pid => (pid || P.periodoAtual()) === (cat().periodoLegado || cat().periodoPadrao);
  P.docProva = (turma, pid) => P.ehLegado(pid) ? "prova_" + turma : "prova_" + turma + "_" + (pid || P.periodoAtual());   // config da prova do bimestre
  P.carregarPeriodo = async () => {
    if (P._periodoLido) return; P._periodoLido = true;
    try { if (P.nuvem && P.nuvem.pronto) { const g = await Promise.race([P.nuvem.db().collection("config").doc("geral").get(), new Promise((_, no) => setTimeout(() => no(new Error("tempo")), 4000))]); if (g.exists && g.data().periodo) P._periodo = g.data().periodo; } } catch (e) {}
  };
  const serie = id => cat().series.find(s => s.id === id);
  const turma = id => { for (const s of cat().series) { const t = s.turmas.find(x => x.id === id); if (t) return { ...t, serie: s }; } return null; };
  const apostila = id => cat().apostilas.find(a => a.id === id);
  const disciplina = id => cat().disciplinas.find(d => d.id === id);
  P.carregarApostila = id => carregar(id);
  P.serie = serie; P.turma = turma; P.apostila = apostila; P.sess = sess; P.store = store;
  /* 🎒 AGREGADOS (26/11/2026): turma livre (sem horário), cada um na sua série e UMA MISSÃO POR VEZ:
     a missão "aberta" é a que o aluno começou (já fez alguma tarefa do 🟢 Básico) e ainda não terminou o Básico.
     Enquanto ela existir, as outras missões ficam 🔒; terminou o Básico, escolhe a próxima. */
  P.agEh = s => { const t = s && turma(s.turma); return !!(t && t.livre); };
  let _agCache = { k: "", t: 0, v: null };
  async function missaoAbertaAG(s, fresco) {
    if (!P.agEh(s) || s.prof) return null;
    const k = (s.alunoIds || []).join(",") + "|" + s.serie;
    if (!fresco && _agCache.k === k && Date.now() - _agCache.t < 15000) return _agCache.v;
    let v = null;
    const aps = cat().apostilas.filter(a => a.serie === s.serie && !a.oculta && P.doPeriodo(a)).map(a => trilhaDe(a.id) ? apostila(trilhaDe(a.id)) : a).filter(Boolean);
    for (const a of aps) {
      try { await carregar(a.id); await restaurarNuvem(a.id); } catch (e) { continue; }
      const C = P.conteudo[a.id]; if (!C) continue;
      const m = C.missoes.find(mm => { if (mm.id === "rc") return false; const st = statusMissao(a.id, mm.id); return st.basico[0] > 0 && !st.basicoOk; });
      if (m) { v = { aid: a.id, mid: m.id, titulo: m.titulo, icone: m.icone, apTitulo: a.titulo }; break; }
    }
    _agCache = { k, t: Date.now(), v }; return v;
  }
  P.missaoAbertaAG = missaoAbertaAG;
  const faixaAG = ab => `<div class="painel ag-faixa" role="note"><h2>🎒 Uma missão de cada vez</h2>${ab
    ? `<p>Você está na <b>${esc(ab.icone || "")} ${esc(ab.titulo)}</b>. Termine o <b>🟢 Básico</b> dela para escolher a próxima. As outras ficam 🔒 até lá.</p><p><a class="btn" href="#/missao/${esc(ab.aid)}/${esc(ab.mid)}">Continuar a missão ▶</a></p>`
    : `<p>Escolha uma missão e comece. Quando você começar, termine o <b>🟢 Básico</b> dela antes de abrir outra. Você estuda na hora que quiser, e a 🎮 Sala de jogos fica sempre aberta.</p>`}</div>`;

  /* ---------------- carregamento das apostilas ---------------- */
  const loading = {};
  function carregar(aid) {
    if (P.conteudo[aid] && P.atividades[aid]) return Promise.resolve();
    if (loading[aid]) return loading[aid];
    const add = src => new Promise((ok, err) => {
      const s = document.createElement("script");
      s.src = src + "?v=" + (window.PORTAL_VERSAO || ""); s.onload = ok; s.onerror = () => err(new Error(src)); document.head.appendChild(s);
    });
    loading[aid] = Promise.all([add("dados/conteudo/" + aid + ".js"), add("dados/atividades/" + aid + ".js"),
      add("dados/ilustracoes/" + aid + ".js").catch(() => null)]).then(() => garantirDefs(aid));
    return loading[aid];
  }

  /* ---------------- ilustrações (da Apostila Ilustrada) ---------------- */
  function garantirDefs(aid) {
    let d = document.getElementById("ilu-defs");
    if (!d) { d = document.createElement("div"); d.id = "ilu-defs"; d.setAttribute("aria-hidden", "true"); document.body.appendChild(d); }
    if (d.dataset.ap !== aid) { d.innerHTML = (P.ilustracoes[aid] || {}).defs || ""; d.dataset.ap = aid; }
  }
  const soLetras = t => norm(t).replace(/[^a-z0-9]/g, "");
  function figurasDaPagina(aid, mid, pageId, pageIds) {
    const I = P.ilustracoes[aid]; if (!I) return [];
    const destino = f => {
      if (pageIds.includes(f.pagina)) return f.pagina;
      if (f.pagina === "comecar") return pageIds[0];
      return pageIds.includes("basico") ? "basico" : pageIds[0];
    };
    return I.figuras.filter(f => f.missao === mid && destino(f) === pageId);
  }
  // Coloca cada figura logo depois do bloco que vinha antes dela na apostila ilustrada
  function colocarFiguras(alvo, figs, candidatos, modo) {
    if (!figs.length) return;
    let topo = alvo.querySelector(":scope > .ilu-topo");
    let ultima = null;
    figs.forEach(f => {
      const el = h(`<div class="ilustracao">${f.html}</div>`);
      const anc = soLetras(f.ancora).slice(0, 40);
      let achou = null;
      const txtC = c => soLetras(((c.dataset && c.dataset.cab) || "") + " " + c.textContent);
      if (anc.length >= 8) achou = candidatos.find(c => txtC(c).includes(anc)) || candidatos.find(c => txtC(c).includes(anc.slice(0, 20)));
      if (!anc && ultima) { ultima.after(el); ultima = el; return; }
      if (achou) {
        if (modo === "cartao") { const corpo = achou.querySelector(".atv-corpo"); achou.insertBefore(el, corpo); }
        else if (modo === "depois") { const tit = achou.querySelector("h4"); tit ? tit.after(el) : achou.prepend(el); }
        else achou.after(el);
      } else {
        if (!topo) { topo = h('<div class="ilu-topo"></div>'); alvo.prepend(topo); }
        topo.appendChild(el);
      }
      ultima = el;
    });
  }
  P.colocarFiguras = colocarFiguras;

  /* ---------------- progresso ---------------- */
  function progressoKey(aid) {
    const s = sess.get(); if (!s) return null;
    if (s.alunoIds && s.alunoIds.length) return KEY + aid + ":" + s.turma + ":id:" + s.alunoIds.join("+");
    return KEY + aid + ":" + s.turma + ":" + norm(s.nomes.join("+")).replace(/ /g, "_");
  }
  /* 🗺️ trilha da missão (barra da esquerda): bolinhas numeradas que ficam verdes e barra de ⚡ XP; atualiza na hora */
  let trilhaAtual = null;
  function paginaFeita(p, mid, prog) {
    if (p.id === "lab") { const st = prog.atv[mid + "-lab"]; return !!(st && st.ac); }   // ♾️ Laboratório: "feito" quando acertou pelo menos uma
    return p.tipo === "relatorio" || p.tipo === "consulta" ? false : p.tipo === "leitura" ? !!(prog.visitas || {})[mid + "/" + p.id] : (p.atividades || []).filter(x => !x.opcional && !((P.tipos || {})[x.tipo] || {}).semStatus).every(x => prog.atv[x.id] && prog.atv[x.id].status);
  }
  /* 🔒 Trilha em sequência (12/11/2026): uma etapa só abre quando as anteriores estão feitas (tarefas VERIFICADAS),
     para o aluno não deixar nada para trás. Até o Básico é tudo em fila; o Desafio abre depois do Básico, o Turbo
     depois do Desafio; Perguntas rápidas, Autoavaliação e Resumo abrem depois do Básico (Desafio e Turbo são extras).
     O "Resumo do que fiz" fica sempre aberto. Só vale com o aluno logado e as tarefas abertas. */
  function bloqueioPagina(pages, i, mid, prog) {
    const p = pages[i]; if (!p || p.id === "relatorio" || p.tipo === "consulta") return null;
    const iB = pages.findIndex(x => x.id === "basico"), iD = pages.findIndex(x => x.id === "desafio");
    let req = [];
    if (iB < 0 || i <= iB) req = pages.slice(0, i).map((_, j) => j);
    else if (p.id === "desafio") req = pages.slice(0, iB + 1).map((_, j) => j);
    else if (p.id === "turbo") { req = pages.slice(0, iB + 1).map((_, j) => j); if (iD >= 0) req.push(iD); }
    else if (p.id === "bonus") req = pages.slice(0, i).map((_, j) => j);
    // ♾️ Laboratório (26/11/2026, pedido do professor): abre só depois das 3 etapas (🟢 Básico, 🟡 Desafio e 🔴 Turbo), para segurar
    //    na cadeira quem já terminou tudo. Na 👣 Trilha (modo calmo) continua abrindo depois do Básico.
    else if (p.id === "lab") { req = pages.slice(0, iB + 1).map((_, j) => j);
      if (!((p.atividades || [])[0] || {}).calmo) ["desafio", "turbo"].forEach(k => { const x = pages.findIndex(y => y.id === k); if (x >= 0) req.push(x); }); }
    else req = pages.slice(0, i).map((_, j) => j).filter(j => j <= iB || !["desafio", "turbo", "bonus", "lab"].includes(pages[j].id));
    const j = req.find(k => pages[k].id !== "relatorio" && pages[k].tipo !== "consulta" && !paginaFeita(pages[k], mid, prog));
    return j == null ? null : pages[j];
  }
  function faltandoNaPagina(p, prog) {
    return (p.atividades || []).filter(x => !x.opcional && !((P.tipos || {})[x.tipo] || {}).semStatus && !(prog.atv[x.id] && prog.atv[x.id].status));
  }
  function atualizarTrilha(aid) {
    if (!trilhaAtual || trilhaAtual.aid !== aid) return;
    const mid = trilhaAtual.mid, box = document.getElementById("mn-xp"); if (!box) return;
    const prog = getProg(aid); let pages = []; try { pages = montarMissao(aid, mid).pages; } catch (e) {}
    pages.forEach(p => { const li = document.querySelector(`.mn-trilha li[data-pg="${p.id}"]`); if (!li) return; const ok = paginaFeita(p, mid, prog);
      if (ok && !li.classList.contains("ok")) { li.classList.add("ok", "acabou"); const a = li.querySelector("a"); if (a && !a.querySelector(".feito")) a.insertAdjacentHTML("beforeend", ' <span class="feito" title="feito">✔</span>'); } });
    if (trilhaAtual.seq) pages.forEach((p, i) => { const li = document.querySelector(`.mn-trilha li[data-pg="${p.id}"]`); if (!li || !li.classList.contains("trancada")) return;
      if (!bloqueioPagina(pages, i, mid, prog)) { li.classList.remove("trancada"); li.classList.add("abriu"); li.innerHTML = `<a href="#/missao/${aid}/${mid}/${p.id}"><span aria-hidden="true">${p.icone}</span> <span class="mn-rot">${esc(p.rotulo)}</span> <span class="novo-ok">🔓 liberada!</span></a>`; } });
    if (trilhaAtual.seq) { const bx = document.getElementById("pag-prox"); if (bx && bx.dataset.trancado) { const i = pages.findIndex(p => p.id === bx.dataset.pg);
      if (i >= 0 && !bloqueioPagina(pages, i, mid, prog)) { const a = document.createElement("a"); a.className = "btn btn-pulsa"; a.id = "pag-prox"; a.href = `#/missao/${aid}/${mid}/${pages[i].id}`; a.textContent = "🔓 " + pages[i].rotulo + " →"; bx.replaceWith(a); const av = document.getElementById("pag-falta"); if (av) av.remove(); } } }
    const xp = pontosDaMissao(aid, mid, prog.atv), cheio = xp >= 1000, antes = +box.dataset.xp || 0;
    box.dataset.xp = xp; box.classList.toggle("cheio", cheio);
    const bon = xp > 1000 ? xp - 1000 : 0;
    box.innerHTML = `<div class="xp-cab"><span>⚡ XP da missão</span><b>${cheio ? `🏆 COMPLETA!${bon ? ` <span class="xp-bonus">⭐ +${bon}</span>` : ""}` : `${xp} / 1000`}</b></div><div class="xp-trilho"><i style="width:${Math.max(xp ? 3 : 0, Math.min(100, xp / 10))}%"></i></div>`;
    // 🧾 26/11/2026 (pedido do professor): de onde veio cada ponto, para o aluno ver que tudo o que ele faz soma no placar
    try { const z = P.podio && P.podio.xpPartes ? P.podio.xpPartes(aid, mid, prog.atv) : null;
      const ps = z ? [["📘", "tarefas", z.tarefas], ["⭐", "bônus relâmpago", z.bonus], ["🔥", "sequência", z.sequencia], ["♾️", "laboratório", z.lab], ["🃏", "álbum", z.album], ["🌟", `“Sua vez${P.helena && P.helena.nomeAtual && P.helena.nomeAtual() ? ", " + esc(P.helena.nomeAtual()) : ""}”`, z.helena]].filter(x => x[2] > 0) : [];
      if (ps.length > 1 || (ps.length === 1 && ps[0][1] !== "tarefas")) box.insertAdjacentHTML("beforeend", `<p class="xp-partes">${ps.map(([ic, r, v], k) => `<span>${k ? "+ " : ""}${ic} ${v} ${r}</span>`).join(" ")}</p>`); } catch (e) {}
    if (xp > antes && antes) { box.classList.remove("subiu"); void box.offsetWidth; box.classList.add("subiu"); }
    linhaPlacarXP();
  }
  /* 🏆 26/11/2026 (pedido do professor: "o mesmo número em todo lugar"): embaixo da barra, o total do PLACAR, que é o número do
     painel, do projetor e do pódio (missão + 🚦 sala de espera + 📖 leitura guiada). Só aparece com a aula valendo e na missão do placar. */
  function linhaPlacarXP() {
    const box = document.getElementById("mn-xp"); if (!box || !trilhaAtual) return;
    let ln = box.querySelector(".xp-placar"); const mp = minhaPos;
    const ok = mp && !mp.congelado && mp.pontos != null && (!mp.mid || mp.mid === trilhaAtual.mid);
    if (!ok) { if (ln) ln.remove(); return; }
    if (!ln) { ln = document.createElement("p"); ln.className = "xp-placar"; box.appendChild(ln); }
    ln.innerHTML = `🏆 No placar da aula: <b>${mp.pontos} pts</b>${mp.extra ? `<small>⚡ ${mp.missao || 0} da missão + 🚦📖 ${mp.extra} da sala de espera e da leitura</small>` : ""}`;
  }
  function getProg(aid) { const k = progressoKey(aid); return (k && store.get(k, null)) || { visitas: {}, atv: {}, atualizado: 0 }; }
  // ⚡ XP da missão (a barra): é a base do placar; o placar soma ainda 🚦 sala de espera e 📖 leitura guiada (24/11/2026)
  function pontosDaMissao(aid, mid, atv) { try { return P.podio ? P.podio.xpDoc(aid, mid, atv || {}) : 0; } catch (e) { return 0; } }
  function conferirPontos(aid, antes, depois) {
    const s = sess.get(), C = P.conteudo[aid]; if (!s || !s.nuvem || !C || !P.podio) return;
    if (JSON.stringify(antes.atv || {}) === JSON.stringify(depois.atv || {})) return;
    let ganho = 0; C.missoes.forEach(m => { const d = pontosDaMissao(aid, m.id, depois.atv) - pontosDaMissao(aid, m.id, antes.atv); if (d > 0) ganho += d; });
    if (ganho > 0) bolhaPontos(ganho);
    setTimeout(() => atualizarTrilha(aid), 0);
  }
  function setProg(aid, p, daNuvem) {
    const k = progressoKey(aid); if (!k) return;
    if (!daNuvem) try { conferirPontos(aid, getProg(aid), p); } catch (e) {}
    p.atualizado = Date.now();
    if (!store.set(k, p)) toast("Não foi possível guardar o progresso neste navegador.");
    if (!daNuvem && P.nuvem && P.nuvem.pronto) P.nuvem.agendar(aid);
  }
  P.getProg = getProg; P.setProg = setProg;

  /* ---------------- estrutura da missão ---------------- */
  // palavras novas da missão (termos do "O que significa?"), para conferir o "Pense e escreva" sozinho
  const PARADAS = new Set(["sobre", "entre", "quando", "porque", "outro", "outra", "dados", "forma", "parte", "cada", "como", "mais", "para", "pelo", "pela", "não", "nao"]);
  function palavrasDaMissao(m) {
    const r = new Set();
    (m.termos || []).forEach(t => {
      const termo = String(t.termo || "").replace(/\(.*?\)/g, " ").replace(/<[^>]+>/g, " ").trim();
      if (termo.length >= 3 && !PARADAS.has(termo.toLowerCase())) r.add(termo);
      termo.split(/[\s\/,–-]+/).forEach(w => { if (w.length >= 5 && !PARADAS.has(w.toLowerCase())) r.add(w); });
      const sig = (String(t.termo || "").match(/\(([^)]+)\)/) || [])[1]; if (sig && sig.trim().length >= 3 && sig.length <= 12) r.add(sig.trim());
    });
    return [...r];
  }

  /* 🌀 22/11/2026 (pedido do professor): no 4º bimestre de 2026, só as missões que AINDA NÃO FORAM DADAS viram espiral
     (catálogo: espiralMissoes). Nelas muda a forma da aula (gancho, Lembra?, Onde eu uso prático, Laboratório, Fechamento),
     mas NADA que entra na nota: o Básico, o Desafio e o Turbo continuam com as mesmas tarefas e a mesma regra do visto
     (o visto com domínio de 70% continua só nas apostilas com modelo: "espiral", as de 2027). */
  const ehEspiral = (aid, mid) => { const ap = apostila(aid) || {}; return ap.modelo === "espiral" || (ap.espiralMissoes || []).includes(mid); };
  P.ehEspiral = ehEspiral;
  function montarMissao(aid, mid) {
    if (ehEspiral(aid, mid) && !/^(rv|rc|pf)$/.test(mid)) return montarEspiral(aid, mid);
    const C = P.conteudo[aid], A = P.atividades[aid] || {};
    const m = C.missoes.find(x => x.id === mid);
    const a = A[mid] || {};
    const pages = [];
    /* 🔁 Revisão (rv): cada atividade diz de qual missão é (de: "m1"…). Só entram as missões que a turma estudou
       (P.revisaAtual, carregado na tela da missão; no painel, sem filtro = todas). O id vem ANTES do filtro, para não mudar. */
    /* 📝 Recuperação (rc, 15/11/2026): o mesmo filtro, com as missões gravadas pelo professor ao liberar (P.recMissoes). */
    const filtroLista = mid === "rv" ? P.revisaAtual : mid === "rc" ? P.recMissoes : null;
    const rvSet = (mid === "rv" || mid === "rc") && Array.isArray(filtroLista) && filtroLista.length ? new Set(filtroLista) : null;
    const relembre = x => { const mm = C.missoes.find(y => y.id === x.de); if (!mm) return null;
      return Object.assign({}, x, { tipo: "info", titulo: "📚 Relembre: " + mm.titulo,
        html: `<p>${md(mm.resumo ? mm.resumo.texto : "")}</p>${(mm.termos || []).length ? `<ul>${mm.termos.map(t => `<li><strong>${esc(t.termo)}</strong>: ${t.def}</li>`).join("")}</ul>` : ""}` }); };
    const ativ = (lvl, arr) => (arr || []).map((x, i) => Object.assign({ nivel: lvl }, x, { id: x.id || (mid + "-" + lvl + "-" + (i + 1)) }))
      .filter(x => !rvSet || !x.de || rvSet.has(x.de)).map(x => x.tipo === "relembre" ? relembre(x) : x).filter(Boolean);
    if (m.comecar && m.comecar.length) pages.push({ id: "comecar", rotulo: "Para começar", icone: "💡", tipo: "leitura" });
    // 🎮 Mão na massa: simulação logo na abertura (todos fazem; conta no Básico)
    if (a.pratica && a.pratica.length) pages.push({ id: "pratica", rotulo: (apostila(aid) || {}).trilha ? "Praticar" : "Mão na massa", icone: "🎮", tipo: "missao", atividades: ativ("basico", a.pratica).map(x => Object.assign(x, { id: x.id.replace("-basico-", "-pratica-") })) });
    if (m.termos && m.termos.length) pages.push({ id: "termos", rotulo: "O que significa?", icone: "📖", tipo: "leitura",
      atividades: [{ id: mid + "-termos", nivel: "treino", tipo: "ligar", titulo: "Treino rápido: ligue cada termo ao seu significado",
        porRodada: (apostila(aid) || {}).trilha ? 3 : 5, pares: m.termos.map(t => ({ a: t.termo, b: t.def })), explicacao: "Revise os termos sempre que precisar: eles caem na avaliação." }] });
    if (m.ondeUso && m.ondeUso.itens.length) pages.push({ id: "onde", rotulo: "Onde eu uso isso?", icone: "🌎", tipo: "leitura",
      /* 👆 18/11/2026 (pedido do professor): o antigo "✍️ Pense e escreva" (digitar 8 palavras com uma palavra nova) travava a aula.
         Agora é "Toque no que você já viveu": as situações do próprio Onde eu uso isso?, sem digitar, sem certo nem errado. */
      atividades: [{ id: mid + "-onde", nivel: "treino", tipo: "vivi", titulo: "👆 Toque no que você já viu ou já fez", opcional: true,
        enunciado: "<p>Toque nas situações que já aconteceram com você (ou com alguém da sua casa). Depois, toque em <b>Pronto</b>.</p>",
        opcoes: m.ondeUso.itens }] });
    const lv = [["basico", "Missão — Básico", "🟢"], ["desafio", "Desafio", "🟡"], ["turbo", "Turbo", "🔴"]];
    lv.forEach(([k, r, i]) => { const arr = ativ(k, a[k]); if (arr.length) pages.push({ id: k, rotulo: r, icone: i, tipo: "missao", atividades: arr }); });
    /* ⭐ Bônus relâmpago (16/11/2026, pedido do professor): tarefinha curta (5 a 10 min) que só abre quando o aluno terminou
       TUDO da aula (Básico, Desafio e Turbo). Não entra na nota nem no visto: vale XP a mais e a medalha ⭐ no placar. */
    { const bz = ativ("bonus", a.bonus); if (bz.length) pages.push({ id: "bonus", rotulo: "Bônus relâmpago", icone: "⭐", tipo: "missao", atividades: bz }); }
    if (m.vf && m.vf.length && a.vf) pages.push({ id: "vf", rotulo: "Perguntas rápidas", icone: "✅", tipo: "revisao",
      atividades: [{ id: mid + "-vf", nivel: "revisao", tipo: "vf", titulo: "Verdadeiro ou falso — e corrija as falsas",
        itens: m.vf.map((t, i) => Object.assign({ t }, a.vf[i] || {})) }] });
    if (m.autoavaliacao && m.autoavaliacao.length) pages.push({ id: "auto", rotulo: "Autoavaliação", icone: "📋", tipo: "revisao",
      atividades: [{ id: mid + "-auto", nivel: "revisao", tipo: "autoavaliacao", titulo: "Marque o que você já consegue fazer sozinho", itens: m.autoavaliacao }] });
    if (m.resumo) pages.push({ id: "resumo", rotulo: mid === "pf" ? "Resumo do bimestre" : "Resumo da Aula", icone: "🧠", tipo: "revisao",
      atividades: [/\*\*/.test(m.resumo.texto)
        ? { id: mid + "-resumo", nivel: "revisao", tipo: "completar", titulo: "Complete o resumo com as palavras do banco", texto: m.resumo.texto, chaves: m.resumo.chaves }
        : { id: mid + "-resumo", tipo: "info", titulo: "Leia com a turma", html: `<p>${md(m.resumo.texto)}</p>${m.resumo.chaves.length ? `<p class="chaves"><strong>Palavras-chave:</strong> ${m.resumo.chaves.map(esc).join(" · ")}</p>` : ""}` }] });
    // 👾 CHEFÃO DO BIMESTRE (modelo em espiral, aprovado em 20/11/2026): na Revisão, uma batalha com perguntas de TODAS as missões
    if ((apostila(aid) || {}).modelo === "espiral" && mid === "rv") {
      const todas = missoesAntes(aid, "__fim__").reverse().map(x => x.id), trilha = !!(apostila(aid) || {}).trilha;
      pages.splice(Math.min(1, pages.length), 0, { id: "chefao", rotulo: "Chefão do bimestre", icone: "👾", tipo: "missao",
        atividades: [{ id: "rv-chefao", nivel: "chefao", tipo: "chefao", calmo: trilha, missoes: todas, vida: trilha ? 8 : 12,
          titulo: "👾 Derrote o Chefão do bimestre!", enunciado: "<p>O <b>Bugzão</b> quer apagar tudo o que você aprendeu no bimestre! Cada pergunta certa é um golpe nele. As perguntas vêm de <b>todas as missões</b>.</p>" }] });
    }
    pages.push({ id: "relatorio", rotulo: "Resumo do que fiz", icone: "📋", tipo: "relatorio" });
    return { C, m, a, pages };
  }
  P.montarMissao = montarMissao;
  /* 🌀 MODELO EM ESPIRAL (piloto 20/11/2026, aprovado pelo professor — ver docs/NOVO-MODELO.md).
     A missão tem 6 etapas e nenhuma aula é uma ilha:
       🔁 Lembra? (missões anteriores) → 💡 Para começar (com ❓ gancho) → 🎮 Mão na massa → 🎯 Missão (🟢 Básico,
       e para quem vai além: 🟡 Desafio, 🔴 Turbo, ♾️ Laboratório sem fim) → 🛠️ Onde eu uso isso? (aplicar) → 🏁 Fechamento
       (perguntas misturadas + resumo + autoavaliação de carinhas). 📖 O que significa? vira consulta (com o 🃏 álbum). */
  const ehExtra = (aid, mid) => ((apostila(aid) || {}).extras || []).includes(mid);
  function missoesAntes(aid, mid) {   // as missões fixas que vieram antes desta, da mais recente para a mais antiga
    const C = P.conteudo[aid], L = C.missoes.filter(x => /^m\d+$/.test(x.id) && !ehExtra(aid, x.id)), i = L.findIndex(x => x.id === mid);
    return (i < 0 ? L.filter(x => x.id !== mid) : L.slice(0, i)).reverse();
  }
  const defCurta = t => semTags(String(t.def || "")).split(/\s+Onde (eu |fica|se |está|aparece)|\s+Para que serve/)[0].replace(/[.:;]\s*$/, "");
  function perguntaTermo(mm, k, de) {
    const ts = (mm.termos || []).filter(t => t.termo && t.def); if (ts.length < 3) return null;
    const alvo = ts[k % ts.length], outras = ts.filter(t => t !== alvo), o1 = outras[(k * 3 + 1) % outras.length], o2 = outras.filter(t => t !== o1)[(k * 5 + 2) % (outras.length - 1)];
    const ops = [defCurta(alvo), defCurta(o1), defCurta(o2)], ordem = [[0, 1, 2], [1, 0, 2], [2, 0, 1], [1, 2, 0]][k % 4];
    return { p: `O que significa <b>${esc(semTags(alvo.termo))}</b>?`, opcoes: ordem.map(i => ops[i]), certo: ordem.indexOf(0), why: `${esc(semTags(alvo.termo))}: ${esc(defCurta(alvo))}.`, de };
  }
  function perguntaVF(mm, aa, k, de) {
    const vf = (mm.vf || []).map((t, i) => Object.assign({ t }, ((aa || {}).vf || [])[i] || {})).filter(x => x.v != null); if (!vf.length) return null;
    const x = vf[k % vf.length];
    return { p: `Verdadeiro ou falso? ${md(x.t)}`, opcoes: ["✅ Verdadeiro", "❌ Falso"], certo: x.v ? 0 : 1, why: x.why || (x.v ? "É verdadeiro." : "É falso" + (x.corrigir ? `: o certo é “${esc(x.corrigir.certo)}”.` : ".")), de };
  }
  function montarEspiral(aid, mid) {
    const C = P.conteudo[aid], A = P.atividades[aid] || {}, m = C.missoes.find(x => x.id === mid), a = A[mid] || {}, pages = [];
    /* 👣 TRILHA PASSO A PASSO no modelo em espiral (DUA, 20/11/2026): mesma sequência sempre (rotina previsível), Lembra? com
       1 pergunta, gancho e "Onde eu uso" (com 2 situações) escritos no arquivo de atividades da Trilha, Laboratório calmo (sem recorde),
       só 1 pergunta de missão passada no Fechamento e carinhas sem a lista do "o que ficou difícil". */
    const apo = apostila(aid) || {}, trilha = !!apo.trilha;
    const ativ = (lvl, arr) => (arr || []).map((x, i) => Object.assign({ nivel: lvl }, x, { id: x.id || (mid + "-" + lvl + "-" + (i + 1)) }));
    const antes = missoesAntes(aid, mid), n = +(mid.match(/\d+/) || [0])[0];
    // 🔁 Lembra?: 2 perguntas da missão anterior + 1 de uma mais antiga (repetição espaçada). Na 1ª missão, "O que você já sabe?"
    // 🎤 o Lembra? é um "show de perguntas" (aprendizagem baseada em jogos); a escolha escrita à mão também vira show
    let lembra = a.lembra ? ativ("lembra", a.lembra).map(x => x.tipo === "escolha" ? Object.assign({}, x, { tipo: "show", calmo: trilha }) : x) : null;
    if (!lembra && antes.length) {
      const p1 = antes[0], p2 = antes[1] || antes[0];
      const qs = [perguntaVF(p1, A[p1.id], n, p1.id), perguntaTermo(p1, n + 1, p1.id), perguntaTermo(p2, n + 2, p2.id) || perguntaVF(p2, A[p2.id], n + 3, p2.id)].filter(Boolean);
      if (trilha) qs.splice(1);   // 👣 Trilha: 1 pergunta só, da aula anterior
      if (qs.length) lembra = [{ id: mid + "-lembra", nivel: "lembra", tipo: "show", calmo: trilha, titulo: `🔁 Lembra da ${esc(p1.titulo.replace(/ –.*/, ""))}?`,
        enunciado: "<p>Antes de começar, vamos ver se você lembra do que já estudou. Se não lembrar, tudo bem: o portal mostra onde está a resposta.</p>", perguntas: qs }];
    }
    if (lembra && lembra.length) pages.push({ id: "lembra", rotulo: antes.length ? "Lembra?" : "O que você já sabe?", icone: antes.length ? "🔁" : "🔍", tipo: "missao", atividades: lembra });
    if (m.comecar && m.comecar.length) pages.push({ id: "comecar", rotulo: "Para começar", icone: "💡", tipo: "leitura", gancho: a.gancho || null });
    if (a.pratica && a.pratica.length) pages.push({ id: "pratica", rotulo: "Mão na massa", icone: "🎮", tipo: "missao", atividades: ativ("basico", a.pratica).map(x => Object.assign(x, { id: x.id.replace("-basico-", "-pratica-") })) });
    [["basico", "Missão — Básico", "🟢"], ["desafio", "Desafio", "🟡"], ["turbo", "Turbo", "🔴"]].forEach(([k, r, i]) => { const arr = ativ(k, a[k]); if (arr.length) pages.push({ id: k, rotulo: r, icone: i, tipo: "missao", atividades: arr, sub: k !== "basico" }); });
    { const bz = ativ("bonus", a.bonus); if (bz.length) pages.push({ id: "bonus", rotulo: "Bônus relâmpago", icone: "⭐", tipo: "missao", atividades: bz }); }   // ⭐ 2026: o bônus relâmpago continua
    // ♾️ Laboratório sem fim: para quem termina antes (piso baixo, teto alto); perguntas sem fim desta missão e das anteriores
    pages.push({ id: "lab", rotulo: "Laboratório sem fim", icone: "♾️", tipo: "missao", sub: true,
      atividades: [{ id: mid + "-lab", nivel: "lab", tipo: "lab", opcional: true, calmo: trilha, titulo: trilha ? "♾️ Laboratório sem fim: treine no seu ritmo" : "♾️ Laboratório sem fim: quantas você acerta seguidas?", missoes: [mid, ...antes.map(x => x.id)] }] });
    // 🛠️ Onde eu uso isso? (agora é aplicar) + o "toque no que você já viveu" (opcional)
    const aplicar = a.aplicar || null;
    if (m.ondeUso && m.ondeUso.itens.length) pages.push({ id: "onde", rotulo: "Onde eu uso isso?", icone: "🛠️", tipo: aplicar ? "revisao" : "leitura",
      atividades: [...ativ("onde", aplicar), { id: mid + "-onde", nivel: "treino", tipo: "vivi", titulo: "👆 Toque no que você já viu ou já fez", opcional: true,
        enunciado: "<p>Toque nas situações que já aconteceram com você (ou com alguém da sua casa). Depois, toque em <b>Pronto</b>.</p>", opcoes: m.ondeUso.itens }] });
    // 🏁 Fechamento: perguntas rápidas MISTURADAS (desta missão + 2 de missões antigas), resumo e autoavaliação de carinhas
    const fech = [];
    if (m.vf && m.vf.length && a.vf) { const itens = m.vf.map((t, i) => Object.assign({ t }, a.vf[i] || {}));
      antes.slice(0, trilha ? 1 : 2).forEach((p0, k) => { const aa = A[p0.id] || {}, L = (p0.vf || []).map((t, i) => Object.assign({ t }, (aa.vf || [])[i] || {})).filter(x => x.v != null && !x.corrigir);
        if (L.length) { const x = L[(n + k) % L.length]; itens.push(Object.assign({}, x, { t: `🔁 <small>(da ${p0.titulo.replace(/ –.*/, "")})</small> ` + x.t })); } });
      fech.push({ id: mid + "-vf", nivel: "revisao", tipo: "vf", titulo: "✅ Perguntas rápidas (com algumas de missões passadas 🔁)", itens }); }
    if (m.resumo && /\*\*/.test(m.resumo.texto)) fech.push({ id: mid + "-resumo", nivel: "revisao", tipo: "completar", titulo: "🧠 Complete o resumo da aula", texto: m.resumo.texto, chaves: m.resumo.chaves });
    fech.push({ id: mid + "-carinhas", nivel: "revisao", tipo: "carinhas", titulo: "🙂 Como foi a aula para você?", simples: trilha, termos: trilha ? [] : (m.termos || []).map(t => semTags(t.termo)) });
    pages.push({ id: "fechar", rotulo: "Fechamento", icone: "🏁", tipo: "revisao", atividades: fech });
    // 📖 consulta (fora da fila, sempre aberta): o dicionário da missão, o treino e o 🃏 álbum de figurinhas
    if (m.termos && m.termos.length) pages.push({ id: "termos", rotulo: "O que significa? + Álbum", icone: "📖", tipo: "consulta",
      atividades: [{ id: mid + "-termos", nivel: "treino", tipo: "ligar", titulo: "🃏 Ganhe as figurinhas desta missão: ligue cada palavra ao significado",
        porRodada: trilha ? 3 : 5, pares: m.termos.map(t => ({ a: t.termo, b: t.def })), explicacao: "Figurinhas desta missão conquistadas! Elas aparecem coloridas no seu álbum. 🃏" }] });
    pages.push({ id: "relatorio", rotulo: "Resumo do que fiz", icone: "📋", tipo: "relatorio" });
    return { C, m, a, pages, espiral: true };
  }
  P.missoesAntes = missoesAntes;
  P.espiral = { perguntaTermo, perguntaVF, defCurta };
  /* 💬 CORREÇÃO QUE EXPLICA (feedback elaborativo, modelo em espiral): ao errar, o botão "📖 Ver onde isso está explicado"
     abre o pedaço do 💡 Para começar que mais tem a ver com a pergunta (da missão de onde a pergunta veio). */
  function ondeExplica(aid, mid, texto) {
    const C = P.conteudo[aid], m = C && C.missoes.find(x => x.id === mid); if (!m || !(m.comecar || []).length) return null;
    const q = norm(semTags(texto)), pal = [...new Set(q.split(/[^a-z0-9]+/).filter(w => w.length >= 4))];
    const termos = (m.termos || []).map(t => norm(semTags(String(t.termo).replace(/\(.*?\)/g, " ")).trim())).filter(t => t.length > 2 && q.includes(t));
    let melhor = null, nota = 0;
    m.comecar.forEach((b, i) => { const html = blocos([b]), tx = norm(semTags(html)); let n = 0;
      pal.forEach(w => { if (tx.includes(w)) n++; }); termos.forEach(t => { if (tx.includes(t)) n += 4; });
      if (n > nota) { nota = n; melhor = { html, i }; } });
    return melhor && nota >= 2 ? Object.assign(melhor, { m }) : null;
  }
  P.ondeExplica = ondeExplica;
  P.verOndeExplica = function (aid, mid, texto) {
    const r = ondeExplica(aid, mid, texto);
    if (!r) { toast("Releia o 💡 Para começar da missão: a resposta está lá."); return; }
    const box = modal(`📖 Está explicado aqui`, `<p class="ajuda">Do <b>💡 Para começar</b> da ${esc(r.m.titulo.replace(/ –.*/, ""))}:</p><div class="leitura onde-trecho">${r.html}</div>`, "modal-onde");
    try { ligarTermos(box || document.querySelector(".modal-onde"), (P.conteudo[aid].missoes || []).flatMap(x => x.termos || [])); } catch (e) {}
  };
  /* 🃏 ÁLBUM DE FIGURINHAS (gamificação por coleção): cada missão é uma página; a figurinha da palavra fica colorida quando
     o aluno faz o "ligue cada palavra ao significado" daquela missão. Página completa = +50 XP na missão (podio.js). */
  function albumFigurinhas(aid, mid) {
    const C = P.conteudo[aid], prog = getProg(aid), L = C.missoes.filter(x => /^m\d+$/.test(x.id) && (x.termos || []).length);
    const pagina = mm => { const st = prog.atv[mm.id + "-termos"], tem = !!(st && st.status), ts = mm.termos;
      return `<div class="alb-pag${tem ? " cheia" : ""}${mm.id === mid ? " atual" : ""}"><p class="alb-tit">${esc(mm.icone || "")} ${esc(mm.titulo.replace(/ –.*/, ""))} <small>${tem ? `${ts.length}/${ts.length} ⭐ página completa (+50 XP)` : `0/${ts.length}`}</small></p>
        <div class="alb-grade">${ts.map(t => { const img = tem && P.termoImg ? P.termoImg(t.termo, t.rotulo) : ""; return `<div class="alb-fig${tem ? " tem" : ""}" title="${esc(semTags(t.termo))}">${tem ? (img || `<span class="alb-emo">📖</span>`) : `<span class="alb-emo">❔</span>`}<b>${tem ? esc(semTags(t.termo)) : "?"}</b></div>`; }).join("")}</div></div>`; };
    return h(`<div class="album"><h2>🃏 Meu álbum de figurinhas</h2><p class="ajuda">Para ganhar as figurinhas de uma missão, faça lá embaixo o “ligue cada palavra ao significado”. As figurinhas da sua missão de hoje estão destacadas.</p>${L.map(pagina).join("")}</div>`);
  }

  // 📖 leitura guiada (20/11/2026): o texto do "💡 Para começar", com as palavras explicadas e as ilustrações, pronto para dividir em trechos
  P.leituraBase = async (aid, mid) => {
    await carregar(aid); const C = P.conteudo[aid], m = C && (C.missoes || []).find(x => x.id === mid); if (!m) return null;
    const raiz = h(`<div><div class="leitura">${blocos(m.comecar || [], true)}</div></div>`);
    try { ligarTermos(raiz, (C.missoes || []).flatMap(x => x.termos || [])); } catch (e) {}
    try { const ids = montarMissao(aid, mid).pages.map(p => p.id), figs = figurasDaPagina(aid, mid, "comecar", ids); const leit = raiz.querySelector(".leitura"); if (figs.length) colocarFiguras(leit, figs, [...leit.children], "bloco"); } catch (e) {}
    return { el: raiz.querySelector(".leitura"), termos: m.termos || [], titulo: m.titulo, icone: m.icone, objetivo: m.objetivo };
  };

  /* 🎯 VISTO COM DOMÍNIO (21/11/2026, aprovado pelo professor; só nas apostilas do modelo em espiral, por enquanto o piloto):
     cada tarefa do Básico vale de 0 a 100%: de primeira = 100%; cada erro antes de acertar tira 25% (nas tarefas grandes, com
     muitos itens, o desconto é dividido: 1 "erro que conta" a cada 4 itens); quem terminou com a resposta/ajuda fica com 25%
     (mínimo para quem concluiu). O visto sai quando a MÉDIA do Básico chega a 70% (👣 Trilha: 50%). Refazer vale a melhor. */
  const LIMIAR_DOMINIO = 0.7, LIMIAR_DOMINIO_TRILHA = 0.5;
  function itensDe(at) { const n = (at.perguntas || at.itens || at.pares || at.passos || at.frases || at.palavras || []).length; const t = String(at.texto || at.frase || at.alvo || "").length; return Math.max(n, at.tipo === "teclado" ? Math.round(t / 25) : 0, 1); }
  function pontoAt(at, st) {
    if (!st) return 0; let p = 0;
    if (st.status === "ajuda") p = 0.25;
    else if (st.status === "certo") { const f = Math.max(1, Math.round(itensDe(at) / 4)); p = Math.max(0.25, 1 - 0.25 * (st.tentativas || 0) / f); }
    else if (st.status) p = 1;   // tarefas de produção (o professor confere) contam inteiras
    return Math.max(p, st.melhor || 0);
  }
  P.pontoAt = pontoAt;
  function statusMissao(aid, mid) {
    const { pages } = montarMissao(aid, mid);
    const prog = getProg(aid), ap = apostila(aid) || {}, dominio = ap.modelo === "espiral";
    const res = { leitura: [0, 0], basico: [0, 0], desafio: [0, 0], turbo: [0, 0], revisao: [0, 0], aprov: null, limiar: null, fracas: [] };
    let soma = 0;
    pages.forEach(pg => {
      if (pg.tipo === "leitura") { res.leitura[1]++; if (prog.visitas[mid + "/" + pg.id]) res.leitura[0]++; }
      (pg.atividades || []).forEach(at => {
        const k = ["basico", "desafio", "turbo"].includes(at.nivel) ? at.nivel : at.nivel === "revisao" ? "revisao" : null;
        if (!k || at.opcional || (P.tipos[at.tipo] || {}).semStatus) return;
        res[k][1]++; const s = prog.atv[at.id]; if (s && (s.status || s.melhor != null)) res[k][0]++;
        if (k === "basico") { const pt = pontoAt(at, s); soma += pt; if (s && (s.status || s.melhor != null) && pt < 0.75) res.fracas.push({ id: at.id, pg: pg.id, titulo: String(at.titulo || "").replace(/<[^>]+>/g, ""), pt }); }
      });
    });
    const feito = !!(res.basico[1] && res.basico[0] === res.basico[1]);
    if (dominio && res.basico[1] && mid !== "rv" && mid !== "rc") { res.aprov = soma / res.basico[1]; res.limiar = ap.trilha ? LIMIAR_DOMINIO_TRILHA : LIMIAR_DOMINIO; res.basicoOk = feito && res.aprov >= res.limiar - 1e-9; }
    else res.basicoOk = feito;
    return res;
  }
  P.statusMissao = statusMissao;

  /* ---------------- barra superior (visível no Veyon) ---------------- */
  function barra(info) {
    const s = sess.get();
    const el = document.getElementById("topbar");
    const marca = `<span class="brand-txt">💻 ${esc(cat().portal)}</span><span class="brand-prof">${esc(cat().professor)}</span>`;
    if (!s) { el.innerHTML = `<a class="brand" href="#/">${marca}</a><a class="tb-home" href="https://professorwell.com.br/">🏠 Página inicial</a><a class="tb-home tb-painel" href="#/painel" title="Painel do professor (só abre com a conta Google de professor)">📊 <span class="tb-longo">Painel do professor</span><span class="tb-curto">Painel</span></a>`; return; }
    const t = turma(s.turma);
    const apel = (s.apelidos || []).filter(Boolean);
    el.innerHTML = `<a class="brand" href="#/apostilas">${marca}</a>
      ${P.avatar && s.nuvem ? `<button type="button" class="tb-av" id="tb-av" title="Ver o meu avatar de perto" aria-label="Ver o meu avatar de perto">${(s.alunoIds || []).map((_, i) => P.avatar.svg((s.avatares || [])[i], 46, true)).join("")}</button>` : ""}
      <div class="tb-who" aria-label="Quem está usando"><span class="tb-turma">${esc(t ? t.nome : "")}</span><strong class="tb-nome">${esc(quem(s))}</strong>${apel.length ? `<span class="tb-completo">${esc(s.nomes.join(" & "))}</span>` : ""}</div>
      <div class="tb-rei" id="tb-rei" hidden></div>
      <div class="tb-info"${info ? "" : " hidden"}>${info || ""}</div>
      <div class="tb-relogio" id="tb-relogio" hidden aria-live="off"></div>
      <button class="tb-btn" id="tb-sair" type="button">Sair</button>`;
    document.getElementById("tb-sair").onclick = () => sair();
    const tbAv = document.getElementById("tb-av"); if (tbAv) tbAv.onclick = () => verAvatar();
    relogioAula(); aplicarCoroa();
    if (P.avatar && s.nuvem && !(s.avatares && s.avatares.length)) P.avatar.daSessao(s, () => barra(info));
  }
  /* ⏱️ cronômetro da aula: durante a aula da turma, mostra quanto falta para o fim (contagem regressiva) e o horário final;
     nos últimos 10 minutos fica vermelho e nos últimos 5 pisca. Horário de Curionópolis (UTC−3). */
  let relogioIv = null, podioUnsub = null, podioTurma = null, podioVisto = 0;
  /* 🎒 AGREGADO INCLUÍDO NA AULA (26/11/2026): o professor inclui o agregado na aula de uma turma (painel, aba Aula, botão 🎒).
     A cada 15 s o portal confere (trava.aulaDe): incluído → P.agAula = a turma da aula; o aluno vai para a sala de espera ou para a
     missão da turma e passa a ouvir a leitura guiada, o vídeo, a roleta, o placar e o pódio dela. Acabou a aula → volta às missões dele. */
  P.agAula = null; let agIv = null, agRodando = false;
  async function agChecar() {
    const s = sess.get(); if (!s || !s.nuvem || !P.agEh(s) || !P.trava || !P.trava.aulaDe || agRodando) return;
    agRodando = true;
    try {
      let r = null; try { r = await P.trava.aulaDe(s, {}); } catch (e) {}
      const nova = r && r.tAula !== s.turma ? r.tAula : null, antes = P.agAula;
      if (nova === antes) return;
      P.agAula = nova;
      try { P.palco && P.palco.ouvir(s); P.sala && P.sala.ouvir(s); ouvirRoleta(s); ouvirRei(s); ouvirPodio(s); } catch (e) {}
      const dia = P.nuvem.hoje(), k = "portalJK:agIn:" + dia + ":" + (nova || antes);
      if (nova) {
        let ja = false; try { ja = !!sessionStorage.getItem(k); sessionStorage.setItem(k, "1"); } catch (e) {}
        if (ja || /^#\/(prova|painel)/.test(location.hash)) return;
        toast(`🎒 Você entrou na aula do ${(turma(nova) || {}).nome || nova}! Agora você participa junto com a turma.`);
        if (P.espera && await P.espera.ativaPara(s).catch(() => null)) { location.replace("#/espera"); return; }
        const h = r.h; if (h && h.aid && h.mid && !location.hash.startsWith(`#/missao/${h.aid}/${h.mid}`)) location.replace(`#/missao/${h.aid}/${h.mid}`);
      } else if (antes) {
        toast("🏁 A aula acabou. Você voltou para as suas missões.");
        if (!/^#\/(jogos|prova)/.test(location.hash)) location.replace("#/apostilas");
      }
    } finally { agRodando = false; }
  }
  // 🏁 quando o professor finaliza a aula, aparece para o aluno a posição dele no pódio
  function ouvirPodio(s) {
    // 🎒 agregado incluído numa aula: ouve o pódio daquela turma (P.agAula); quando a aula acaba, continua ouvindo a última
    if (s && P.agEh(s)) { if (!s.nuvem || !P.nuvem || !P.nuvem.app || !P.agAula || podioTurma === P.agAula) return;
      if (podioUnsub) podioUnsub(); podioTurma = P.agAula;
      try { podioUnsub = P.nuvem.app(0).db.collection("config").doc("podio_" + P.agAula).onSnapshot(sn => mostrarPodioDoc(sn, s), () => {}); } catch (e) {} return; }
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || podioTurma === s.turma) return;
    if (podioUnsub) podioUnsub(); podioTurma = s.turma;
    // 🏫 18/11/2026: quem frequenta a aula de outra turma também vê o pódio dessa turma (config/liberar_<turma>.outra)
    const ouvirOutra = async () => { try { const lb = await P.nuvem.app(0).db.collection("config").doc("liberar_" + s.turma).get(); const outras = [...new Set((s.alunoIds || []).map(id => ((lb.exists && lb.data().outra) || {})[id]).filter(Boolean))];
      outras.forEach(ot => { const u = P.nuvem.app(0).db.collection("config").doc("podio_" + ot).onSnapshot(sn => mostrarPodioDoc(sn, s), () => {}); const u0 = podioUnsub; podioUnsub = () => { u0 && u0(); u(); }; }); } catch (e) {} };
    try { podioUnsub = P.nuvem.app(0).db.collection("config").doc("podio_" + s.turma).onSnapshot(sn => mostrarPodioDoc(sn, s), () => {}); ouvirOutra(); } catch (e) {}
  }
  function mostrarPodioDoc(sn, s) { {
      const d = sn.exists ? sn.data() : null; if (!d || d.dia !== P.nuvem.hoje() || d.finalizadaEm === podioVisto) return;
      const ss = sess.get(); if (!ss || ss.turma !== s.turma) return;
      podioVisto = d.finalizadaEm;
      const meu = (d.ranking || []).find(e => (e.ids || []).some(id => (ss.alunoIds || []).includes(id)));
      const med = meu && meu.pos <= 3 ? ["🥇", "🥈", "🥉"][meu.pos - 1] : "🏁";
      const dlg = h(`<dialog class="pp-dlg fim-aula"><h2>${med} Aula encerrada!</h2>
        ${meu ? `<p class="fa-pos">Você${meu.ids.length > 1 ? "s" : ""} ficou${meu.ids.length > 1 ? "aram" : ""} em <b>${meu.pos}º lugar</b>, com <b>${meu.pontos} pontos</b>${meu.pos <= 3 ? " 🎉" : "!"}</p>` : `<p>O professor finalizou a aula.</p>`}
        <p>Veja o pódio no projetor! 🏆</p><p class="ajuda">Os pontos do pódio são só da brincadeira da aula: não são a sua nota. Quem fez o Básico pode ir para os jogos livres.</p>
        <form method="dialog"><button class="btn">OK</button></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
      // 🎉 confete na tela de todos quando a aula termina
      if (P.podio) { const cf = h(`<div class="conf-tela" aria-hidden="true"></div>`); dlg.appendChild(cf); P.podio.confete(cf, 0); setTimeout(() => cf.remove(), 7000); }
    }
  }
  // 👑 rei da sala: o painel do professor grava quem está em 1º lugar (config/rei_<turma>); quem é ganha a coroinha na barra de cima
  let reiUnsub = null, reiTurma = null, reiEu = null, minhaPos = null, esperaPos = 0, bolha = null, bolhaTo = null;
  // ⭐ bolha que aparece e some: "+N pontos" na hora; a posição chega logo depois (o painel do professor recalcula o placar)
  function posTxt(mp) { return mp.congelado ? `🤫 Placar congelado: a sua posição aparece no pódio!` : `${mp.dupla ? "Vocês estão" : "Você está"} em <b>${mp.pos}º lugar</b> de ${mp.total} · ${mp.pontos} pts`; }
  function bolhaPontos(ganho) {
    esperaPos = Date.now() + 15000;
    if (!bolha || !bolha.isConnected) { bolha = h(`<div class="pts-bolha" role="status"><b class="pts-mais"></b><span class="pts-pos"></span></div>`); document.body.appendChild(bolha); }
    bolha.classList.remove("sai"); bolha.classList.remove("pula"); void bolha.offsetWidth; bolha.classList.add("pula");
    bolha.querySelector(".pts-mais").textContent = `+${ganho} XP!`;
    const pos = bolha.querySelector(".pts-pos"); pos.innerHTML = minhaPos ? posTxt(minhaPos) : ""; pos.hidden = !minhaPos;
    segura(4500);
  }
  function segura(ms) { clearTimeout(bolhaTo); bolhaTo = setTimeout(() => { if (bolha) { bolha.classList.add("sai"); setTimeout(() => { if (bolha && bolha.classList.contains("sai")) { bolha.remove(); bolha = null; } }, 700); } }, ms); }
  function novaPos(mp) {
    const antes = minhaPos; minhaPos = mp; try { linhaPlacarXP(); } catch (e) {}
    if (!mp || Date.now() > esperaPos) return;
    if (antes && !mp.congelado && !antes.congelado && antes.pos === mp.pos && antes.pontos === mp.pontos) return;
    if (!bolha || !bolha.isConnected) { bolha = h(`<div class="pts-bolha" role="status"><b class="pts-mais"></b><span class="pts-pos"></span></div>`); document.body.appendChild(bolha); bolha.querySelector(".pts-mais").hidden = true; }
    bolha.classList.remove("sai"); const pos = bolha.querySelector(".pts-pos"); pos.hidden = false;
    const subiu = antes && !antes.congelado && !mp.congelado && mp.pos < antes.pos;
    pos.innerHTML = (subiu ? "⬆️ Subiu! " : "") + posTxt(mp); pos.classList.remove("pisca1"); void pos.offsetWidth; pos.classList.add("pisca1");
    segura(4000);
  }
  /* 🔍 tocar no avatar da barra de cima: abre o avatar grande (corpo inteiro); ✖ ou "Voltar" fecha */
  function verAvatar() {
    const s = sess.get(); if (!s || !P.avatar) return;
    const d = document.createElement("dialog"); d.className = "pp-dlg av-zoom";
    d.innerHTML = `<form method="dialog"><button class="av-zoom-x" value="x" aria-label="Fechar">✖</button>
      <div class="av-zoom-lista">${(s.alunoIds || []).map((_, i) => `<figure>${P.avatar.svg((s.avatares || [])[i], 210)}<figcaption>${esc(s.nomes[i])}</figcaption></figure>`).join("")}</div>
      <div class="row-btns"><button class="btn btn-ok" value="x">↩️ Voltar</button></div></form>`;
    document.body.appendChild(d); d.addEventListener("close", () => d.remove());
    d.addEventListener("click", e => { if (e.target === d) d.close(); }); // tocar fora também fecha
    d.showModal();
  }
  function aplicarCoroa() {
    const av = document.querySelector("#topbar .tb-av"), chip = document.getElementById("tb-rei");
    if (av) { av.classList.toggle("rei", !!reiEu); const c = av.querySelector(".coroa"); if (reiEu && !c && P.podio) av.insertAdjacentHTML("afterbegin", P.podio.coroa(26)); if (!reiEu && c) c.remove(); }
    if (chip) { chip.hidden = !reiEu; chip.innerHTML = reiEu ? `👑 ${reiEu}<small>1º lugar</small>` : ""; }
  }
  function aviso(html, cls) { const b = h(`<div class="rei-aviso ${cls || ""}" role="status">${html}</div>`); document.body.appendChild(b); setTimeout(() => b.classList.add("sai"), 5200); setTimeout(() => b.remove(), 6000); }
  /* 🏆 PLACAR NA TELA DO ALUNO (20/11/2026, pedido do professor): uma bolinha flutuante, que se explica sozinha
     ("🏆 Placar da aula · você: 5º lugar · toque para ver"). Ao tocar, abre por cima o placar: o pódio (top 3) aparece sem rolar
     e a lista completa vem rolando para baixo; a linha do aluno fica destacada. Tocar fora (ou ✕) fecha e ele volta à tarefa.
     Os nomes são os OFICIAIS do cadastro (nome e inicial do sobrenome, como no projetor), nunca o apelido. */
  let plBola = null, plPainel = null, plDados = null;
  function placarBola(d) {
    plDados = d; const s = sess.get();
    if (!d || !s || /^#\/(painel|prova)/.test(location.hash)) { if (plBola) { plBola.remove(); plBola = null; } if (plPainel) fecharPlacarAluno(); return; }
    if (!plBola || !plBola.isConnected) { plBola = h(`<button type="button" class="plb-bola" aria-haspopup="dialog"></button>`); plBola.onclick = e => { e.stopPropagation(); plPainel ? fecharPlacarAluno() : abrirPlacarAluno(); }; document.body.appendChild(plBola); }
    const meu = (d.lista || []).find(x => (x.ids || []).some(id => (s.alunoIds || []).includes(id)));
    plBola.innerHTML = `<span class="plb-ic" aria-hidden="true">🏆</span><span class="plb-tx"><b>Placar da aula</b><small>${d.congelado ? "🤫 congelado: veja no pódio" : meu && meu.pontos ? `você: <b>${meu.pos}º lugar</b> · ${meu.pontos} pts` : "toque para ver quem está na frente"}</small></span><span class="plb-ver">ver ▸</span>`;
    plBola.title = "Toque para ver o placar ao vivo da aula: quem está em 1º, 2º, 3º e a sua posição";
    if (plPainel) pintaPlacarAluno();
  }
  function fecharPlacarAluno() { if (plPainel) { plPainel.remove(); plPainel = null; } document.removeEventListener("pointerdown", foraPlacar, true); if (plBola) plBola.classList.remove("aberta"); }
  function foraPlacar(e) { if (plPainel && !plPainel.contains(e.target) && !(plBola && plBola.contains(e.target))) fecharPlacarAluno(); }
  function abrirPlacarAluno() { plPainel = h(`<div class="plb-painel" role="dialog" aria-label="Placar ao vivo da aula"></div>`); document.body.appendChild(plPainel); plBola.classList.add("aberta");
    pintaPlacarAluno(); setTimeout(() => document.addEventListener("pointerdown", foraPlacar, true), 0); }
  function pintaPlacarAluno() {
    const d = plDados, s = sess.get(); if (!plPainel || !s) return;
    const MED = ["🥇", "🥈", "🥉"], eu = x => (x.ids || []).some(id => (s.alunoIds || []).includes(id));
    const nomeDe = x => esc((x.nomes || []).join(" & ") || "Aluno");
    const lista = d && !d.congelado ? (d.lista || []).filter(x => x.nomes) : [];
    const top = lista.filter(x => x.pontos && x.pos <= 3), meu = lista.find(eu);
    plPainel.innerHTML = `<div class="plb-cab"><b>🏆 Placar ao vivo da aula</b><button type="button" class="plb-x" aria-label="Fechar o placar">✕</button></div>
      ${d && d.congelado ? `<p class="plb-cong">🤫 <b>Placar congelado!</b> Faltam menos de 5 minutos: o resultado aparece no pódio.</p>`
      : !lista.length ? `<p class="plb-cong">⏳ O placar aparece assim que a turma começar a pontuar.</p>`
      : `${meu ? `<p class="plb-meu">${(s.alunoIds || []).length > 1 ? "Vocês estão" : "Você está"} em <b>${meu.pontos ? meu.pos + "º lugar" : "–"}</b> com <b>${meu.pontos} pts</b></p>` : ""}
        <div class="plb-podio">${top.length ? top.map(x => `<div class="plb-p p${x.pos}${eu(x) ? " eu" : ""}"><span>${MED[x.pos - 1]}</span><b>${nomeDe(x)}</b><small>${x.pontos} pts</small></div>`).join("") : `<p class="plb-cong">Ninguém pontuou ainda. Seja o primeiro! 💪</p>`}</div>
        <p class="plb-rola">⬇️ Role para ver a turma toda</p>
        <ol class="plb-lista">${lista.map(x => `<li class="${eu(x) ? "eu" : ""}"><span class="plb-po">${x.pontos ? (x.pos <= 3 ? MED[x.pos - 1] : x.pos + "º") : "–"}</span><span class="plb-no">${nomeDe(x)}${eu(x) ? " <small>(você)</small>" : ""}</span><span class="plb-pt">${x.pontos} pts</span></li>`).join("")}</ol>`}
      <p class="plb-pe">Pontos do pódio da aula (não são nota). Toque fora para voltar à tarefa.</p>`;
    plPainel.querySelector(".plb-x").onclick = fecharPlacarAluno;
  }
  addEventListener("hashchange", () => { if (/^#\/(painel|prova)/.test(location.hash)) placarBola(null); else if (plDados) placarBola(plDados); });
  /* 🎡 ROLETA DA LEITURA (20/11/2026): o professor sorteia no placar do projetor quem vai ler; o nome sorteado (o OFICIAL,
     nunca o apelido) aparece também aqui, no meio da tela de todos os alunos. config/roleta_<turma> = { dia, em, girando, id, nome } */
  let rolUnsub = null, rolTurma = null, rolVisto = 0, rolCx = null;
  /* 🎡 23/11/2026: a MESMA roda gira no projetor e na tela dos alunos, sincronizada pelo relógio (roda = { nomes, final, dur, t0 }) */
  const RCORES = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#84cc16", "#6366f1"];
  P.rodaRoletaHTML = roda => { const L = (roda && roda.nomes) || [], N2 = L.length || 1, R = 200, c = 210, fat = 360 / N2, e = s => String(s).replace(/[&<>"]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[x]);
    const arco = i => { const a0 = (i * fat - 90) * Math.PI / 180, a1 = ((i + 1) * fat - 90) * Math.PI / 180;
      return N2 === 1 ? `<circle cx="${c}" cy="${c}" r="${R}" fill="${RCORES[0]}"/>` : `<path d="M${c},${c} L${c + R * Math.cos(a0)},${c + R * Math.sin(a0)} A${R},${R} 0 ${fat > 180 ? 1 : 0} 1 ${c + R * Math.cos(a1)},${c + R * Math.sin(a1)} Z" fill="${RCORES[i % RCORES.length]}" stroke="#fff" stroke-width="3"/>`; };
    const txt = (n, i) => { const m = i * fat + fat / 2, esq = m > 180; return `<text transform="rotate(${esq ? m + 90 : m - 90} ${c} ${c}) translate(${esq ? c - R * .58 : c + R * .58} ${c})" text-anchor="middle" dominant-baseline="middle" font-size="${N2 > 14 ? 13 : N2 > 8 ? 16 : 20}" font-weight="800" fill="#fff" stroke="rgba(0,0,0,.35)" stroke-width=".6">${e(n)}</text>`; };
    return `<div class="rl-roda rl-roda-viva"><svg viewBox="0 0 420 420" class="rl-svg">${L.map((n, i) => arco(i)).join("")}${L.map(txt).join("")}<circle cx="210" cy="210" r="26" fill="#0f172a" stroke="#fff" stroke-width="5"/></svg><div class="rl-ponteiro" aria-hidden="true">▼</div></div>`; };
  P.rodaGirar = (box, roda) => { const svg = box && box.querySelector(".rl-svg"); if (!svg || !roda) return; const ease = x => 1 - Math.pow(1 - x, 3.2);
    const passo = () => { if (!svg.isConnected) return; const x = Math.min(1, Math.max(0, (Date.now() - roda.t0) / roda.dur)); svg.style.transform = `rotate(${roda.final * ease(x)}deg)`; if (x < 1) requestAnimationFrame(passo); };
    requestAnimationFrame(passo); };
  /* 🌟 27/11/2026: no projetor, o nome sorteado — ou a maestra da leitura escolhendo, ou quem a maestra escolheu */
  P.rolTelaoNome = r => { const e = s => String(s == null ? "" : s).replace(/[&<>"]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[x]), c = n => P.podio && P.podio.nomeCurto ? P.podio.nomeCurto(n) : n;
    if (!r.id) return `<p class="rol-ic">🎡</p><h2>Vamos sortear de novo…</h2>`;
    if (r.maestra) return `<p class="rol-ic">🌟</p><p class="rol-sup">A maestra da leitura é:</p><h2>${e(r.nome)}</h2><p class="rol-por">Escolhendo quem vai ler este trecho… 👀</p>`;
    return `<p class="rol-ic">📖</p><p class="rol-sup">Quem vai ler é:</p><h2>${e(r.nome)}</h2>${r.porMaestra ? `<p class="rol-por">🌟 Escolha da maestra ${e(c(r.porMaestra))}</p>` : ""}`; };
  /* 🌟 MAESTRA DA LEITURA (27/11/2026): a roleta caiu num aluno do Modo Helena. Na tela dele aparecem os nomes de quem está
     online (botões grandes) e ele toca em quem vai ler; a escolha vai para progresso/<id>_maestra e o painel do professor anuncia.
     Na tela dos outros: "a maestra da leitura é…, escolhendo quem vai ler". */
  function maestraAluno(d, ss, souEu) {
    const curto = n => P.podio && P.podio.nomeCurto ? P.podio.nomeCurto(n) : n, nome = esc(curto(d.nome || "")), ids = ss.alunoIds || [];
    if (!souEu) {
      rolCx = h(`<div class="rol-aluno rol-maestra-ve" role="alert"><div><p class="rol-ic">🌟</p><p class="rol-sup">A maestra da leitura é:</p><h2>${esc(d.nome || "")}</h2><p class="rol-por">Escolhendo quem vai ler este trecho… 👀</p><button type="button" class="btn btn-grande btn-ok">👍 Ok</button></div></div>`);
      document.body.appendChild(rolCx); const cx = rolCx; cx.querySelector("button").onclick = () => cx.remove();
      setTimeout(() => { if (cx.isConnected && cx === rolCx) cx.remove(); }, 12000); return;
    }
    const i = Math.max(0, ids.indexOf(d.id)), colega = ids.length > 1 ? (ss.nomes || [])[i === 0 ? 1 : 0] : null;
    const ops = ((d.maestra || {}).opcoes || []).filter(o => !ids.includes(o.id) || ids.length > 1);
    rolCx = h(`<div class="rol-aluno eu rol-maestra" role="dialog" aria-label="Maestra da leitura"><div>
      <p class="rol-ic">🌟</p><p class="rol-sup">Sua vez, ${nome}! Você é a maestra da leitura.</p><h2>Toque em quem vai ler este trecho:</h2>
      ${colega ? `<p class="rol-maes-dica">👧🧒 <b>${esc(curto(colega))}</b>, leia os nomes para ${nome} e deixe que ${nome} escolha.</p>` : ""}
      <div class="rol-maes-ops">${ops.map(o => `<button type="button" class="rol-maes-op" data-id="${esc(o.id)}">${o.av && P.avatar ? `<span class="rol-maes-av">${P.avatar.svg(o.av, 72, true)}</span>` : `<span class="rol-maes-ini">${esc((curto(o.nome) || "?").charAt(0))}</span>`}<span>${esc(curto(o.nome))}</span></button>`).join("")}</div>
      <p class="rol-maes-msg" aria-live="polite"></p></div></div>`);
    document.body.appendChild(rolCx); const cx = rolCx, msg = cx.querySelector(".rol-maes-msg");
    cx.querySelectorAll(".rol-maes-op").forEach(b => b.onclick = () => {
      const o = ops.find(x => x.id === b.dataset.id); if (!o) return;
      cx.querySelectorAll(".rol-maes-op").forEach(x => { x.disabled = true; x.classList.toggle("escolhido", x === b); });
      msg.innerHTML = `✔ Você escolheu <b>${esc(curto(o.nome))}</b>! 🎉`;
      try { P.nuvem.app(i).db.collection("progresso").doc(d.id + "_maestra").set({ alunoId: d.id, turma: ss.turma, tipo: "maestra", dia: P.nuvem.hoje(), em: d.maestra.em, escolha: { id: o.id, nome: o.nome } }).catch(() => { msg.textContent = "Não deu para enviar. Peça ajuda ao professor."; }); } catch (e) {}
      setTimeout(() => { if (cx.isConnected) cx.remove(); }, 2500);
    });
    setTimeout(() => { if (cx.isConnected && cx === rolCx) cx.remove(); }, 85000);
  }
  function ouvirRoleta(s) {
    const tR = s && P.agEh(s) ? P.agAula : s && s.turma;   // 🎒 agregado: a roleta da aula em que foi incluído
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || !tR || rolTurma === tR) return;
    if (rolUnsub) rolUnsub(); rolTurma = tR;
    try { rolUnsub = P.nuvem.app(0).db.collection("config").doc("roleta_" + tR).onSnapshot(sn => {
      const d = sn.exists ? sn.data() : null, ss = sess.get(); if (!d || !ss || d.dia !== P.nuvem.hoje() || !d.em || Date.now() - d.em > 90000) return;
      if (/^#\/(painel|prova)/.test(location.hash)) return; // não atrapalha a prova
      const chave = d.em + (d.girando ? "g" : "n"); if (rolVisto === chave) return; rolVisto = chave;
      if (rolCx) rolCx.remove();
      if (!d.girando && !d.id) { rolCx = null; return; }   // 🌟 o professor pulou a maestra: some e vem a roleta de novo
      const souEu = !d.girando && (ss.alunoIds || []).includes(d.id);
      if (!d.girando && d.maestra) { maestraAluno(d, ss, souEu); return; }
      rolCx = h(`<div class="rol-aluno${souEu ? " eu" : ""}" role="alert"><div>${d.girando ? (d.roda ? `<h2 class="rol-tit-roda">🎡 A roleta está girando…</h2>${P.rodaRoletaHTML(d.roda)}` : `<p class="rol-ic">🎡</p><h2>A roleta da leitura está girando…</h2><p>Quem será que vai ler? Olhe para o projetor!</p>`)
        : `<div class="rol-festa" aria-hidden="true">${Array.from("🎉✨🎊⭐🎉✨🎊⭐🎉✨").map((e, k) => `<i style="--k:${k}">${e}</i>`).join("")}</div><p class="rol-ic">${souEu ? "🎤" : "📖"}</p><p class="rol-sup">${souEu ? (d.porMaestra ? `A maestra ${esc(P.podio.nomeCurto(d.porMaestra))} escolheu VOCÊ! Prepare-se para ler em voz alta:` : "É VOCÊ que vai ler! Prepare-se para ler em voz alta:") : "Quem vai ler é:"}</p><h2>${esc(d.nome || "")}</h2>${d.porMaestra && !souEu ? `<p class="rol-por">🌟 Escolha da maestra ${esc(P.podio.nomeCurto(d.porMaestra))}</p>` : ""}<button type="button" class="btn btn-grande btn-ok">👍 Ok</button>`}</div></div>`);
      document.body.appendChild(rolCx); const cx = rolCx, b = cx.querySelector("button"); if (b) b.onclick = () => cx.remove();
      if (d.girando && d.roda) P.rodaGirar(cx, d.roda);
      setTimeout(() => { if (cx.isConnected && (cx === rolCx)) cx.remove(); }, d.girando ? 15000 : 12000);
    }, () => {}); } catch (e) {}
  }
  /* 👣 26/11/2026 (professor): o professor marca o aluno para a Trilha Passo a Passo (ou tira) no painel e vale NA HORA:
     o portal do aluno escuta config/liberar_<turma>.trilha e leva ele para a Trilha (ou de volta) na mesma missão.
     Só para quem está sozinho no computador (em dupla vale a regra da dupla, decidida ao entrar). */
  let triUnsub = null, triChave = "";
  function ouvirTrilha(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || (s.alunoIds || []).length !== 1 || s.prof) return;
    const k = s.turma + "|" + s.alunoIds[0]; if (triChave === k) return;
    if (triUnsub) triUnsub(); triChave = k;
    try { triUnsub = P.nuvem.app(0).db.collection("config").doc("liberar_" + s.turma).onSnapshot(sn => {
      const ss = sess.get(); if (!ss || (ss.alunoIds || [])[0] !== s.alunoIds[0]) return;
      const v = ((sn.exists && sn.data().trilha) || {})[s.alunoIds[0]]; if (typeof v !== "boolean" || v === !!ss.trilha) return;
      sess.set(Object.assign({}, ss, { trilha: v }));
      const [r, a1, a2, a3] = (location.hash || "").replace(/^#\//, "").split("/");
      if (r === "apostila" || r === "missao") {
        const ap = apostila(a1) || {}, alvo = v ? trilhaDe(ap.base || a1) : (ap.trilha && ap.base ? ap.base : null);
        if (alvo && alvo !== a1) location.replace("#/" + r + "/" + alvo + (a2 ? "/" + a2 : "") + (r === "missao" && a3 ? "/" + a3 : ""));
      }
      toast(v ? "👣 O professor passou você para a Trilha Passo a Passo: a mesma missão, um passo de cada vez." : "📘 O professor voltou você para a apostila da turma.");
    }, () => {}); } catch (e) {}
  }
  function ouvirRei(s) {
    const tR = s && P.agEh(s) ? P.agAula : s && s.turma;   // 🎒 agregado: o placar da aula em que foi incluído
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || !tR || reiTurma === tR) return;
    if (reiUnsub) reiUnsub(); reiTurma = tR; reiEu = null;
    try { reiUnsub = P.nuvem.app(0).db.collection("config").doc("rei_" + tR).onSnapshot(sn => {
      const d = sn.exists ? sn.data() : null, ss = sess.get(); if (!ss || ss.turma !== s.turma) return;
      try { placarBola(d && d.dia === P.nuvem.hoje() ? d : null); } catch (e) {}
      const g = d && d.dia === P.nuvem.hoje() ? (d.grupos || []).find(x => (x.ids || []).some(id => (ss.alunoIds || []).includes(id))) : null;
      if (d && d.dia === P.nuvem.hoje()) { const meu = (d.lista || []).find(x => (x.ids || []).some(id => (ss.alunoIds || []).includes(id)));
        novaPos(d.congelado ? { congelado: true } : meu ? { pos: meu.pos, pontos: meu.pontos, total: d.total || (d.lista || []).length, dupla: (ss.alunoIds || []).length > 1, mid: d.mid || "", missao: meu.missao, extra: meu.extra } : null); }
      if (d && d.congelado) return; // placar congelado: a coroa fica com quem estava na frente
      const novo = g ? (g.titulo || "Rei da sala") : null, antes = reiEu; reiEu = novo; aplicarCoroa();
      const voce = (ss.alunoIds || []).length > 1 ? "Vocês são" : "Você é";
      if (novo && !antes) aviso(`${P.podio ? P.podio.coroa(54) : "👑"}<div><b>${voce} ${novo.replace(/^(Reis?|Rainhas?)/, m => (/s$/.test(m) ? "os " : /Rainha/.test(m) ? "a " : "o ") + m.toLowerCase())}!</b><span>${(ss.alunoIds || []).length > 1 ? "Vocês estão" : "Você está"} em 1º lugar. Continue acertando para não perder a coroa!</span></div>`, "ganhou");
      else if (!novo && antes) aviso(`<span class="rei-ic">😮</span><div><b>Alguém passou na sua frente!</b><span>Responda certo e rápido para pegar a coroa de volta 👑</span></div>`, "perdeu");
    }, () => {}); } catch (e) {}
  }
  /* 🖥️ TELA CHEIA OBRIGATÓRIA (16/11/2026): o professor liga no painel (config/tela_<turma> = { cheia, dia }).
     Ligada (só no dia em que foi ligada), o portal do aluno fica bloqueado enquanto a janela não estiver em tela cheia:
     aparece um aviso com o botão "Entrar em tela cheia" (o navegador exige esse clique). Saiu (Esc), bloqueia de novo.
     Quem estuda em casa (🏠) e o professor (painel) não são afetados. Conta quantas vezes o aluno saiu (progresso/<id>_tela). */
  let telaUnsub = null, telaTurma = null, telaOn = false, tcCasa = false, telaDlg = null, telaIv = null;
  /* ⛶ TELA CHEIA À PROVA DE FALHAS (20/11/2026, problema relatado pelo professor: às vezes o botão "Entrar em tela cheia" não
     respondia, o F11 não resolvia e a página continuava bloqueada; só o ⋮ › tela cheia do Chrome destravava).
     1) "está em tela cheia?" agora também aceita a tela cheia do próprio Chrome (F11 ou ⋮ › ⛶), mesmo com o zoom diferente de 100%
        (antes a conta comparava o tamanho da janela com o da tela, e com zoom 90%/110% dava "não está", e o portal travava);
     2) o botão tenta 3 jeitos de pedir a tela cheia; se o Chrome recusar, mostra na hora o plano B (⋮ › ⛶ ou Fn + F11);
     3) a janela de aviso não se re-desenha enquanto o aluno está clicando nela (antes, se outra janela abrisse por cima, ela
        podia ser recolocada no meio do clique e o clique se perdia); 4) cada falha fica anotada (para descobrir a causa). */
  const emTelaCheia = () => !!(document.fullscreenElement || document.webkitFullscreenElement)
    || (window.matchMedia && matchMedia("(display-mode: fullscreen)").matches)
    || (Math.abs(innerHeight - screen.height) < 6 && Math.abs(innerWidth - screen.width) < 6);
  async function pedirTelaCheia() {
    const d = document.documentElement, tentativas = [() => d.requestFullscreen({ navigationUI: "hide" }), () => d.requestFullscreen(), () => document.body.requestFullscreen(), () => d.webkitRequestFullscreen && d.webkitRequestFullscreen()];
    let erro = null;
    for (const t of tentativas) { try { const r = t(); if (r && r.then) await r; await new Promise(ok => setTimeout(ok, 120)); if (emTelaCheia()) return { ok: true }; } catch (e) { erro = e; } }
    return { ok: emTelaCheia(), erro: erro ? (erro.name + ": " + erro.message).slice(0, 160) : "sem erro, mas não entrou" };
  }
  P.telaCheia = { esta: emTelaCheia, pedir: pedirTelaCheia };
  function checarTela() {
    const s = sess.get(), deve = !P.foraDoPortal && !(P.saidaFim && P.saidaFim === location.hash) && telaOn && !tcCasa && s && s.nuvem && !/^#\/painel/.test(location.hash) && !emTelaCheia() && !(P.sala && P.sala.ativa());   // 📡 a transmissão ao vivo tem o próprio bloqueio
    if (!deve) { if (telaDlg && telaDlg.open) telaDlg.close(); return; }
    if (!telaDlg) {
      telaDlg = h(`<dialog class="tela-cheia-dlg" aria-labelledby="tc-h"><div class="tc-ic">🖥️</div><h2 id="tc-h">Aula em TELA CHEIA</h2>
        <p>O professor pediu: durante a aula, o portal funciona só em <b>tela cheia</b>.</p>
        <button type="button" class="btn btn-grande btn-ok" id="tc-ok">⛶ Entrar em tela cheia</button>
        <p class="ajuda">Se sair da tela cheia (tecla Esc), a apostila para de funcionar até você voltar.</p></dialog>`);
      telaDlg.addEventListener("cancel", e => e.preventDefault());
      telaDlg.querySelector("#tc-ok").insertAdjacentHTML("afterend", `<div class="tc-planob" hidden><p><b>😕 O navegador não deixou abrir pelo botão.</b> Faça assim:</p>
        <ol><li>Clique nos <b>⋮ três pontinhos</b> do Chrome, no canto de cima, à direita.</li><li>Na linha do <b>Zoom</b> ( − 100% + ), clique no <b>quadradinho ⛶</b> do lado.</li></ol>
        <p>Ou aperte a tecla <b>F11</b> (em alguns teclados: segure <b>Fn</b> e aperte <b>F11</b>). Se nada der certo, chame o professor.</p></div>`);
      telaDlg.addEventListener("pointerdown", () => { telaDlg.dataset.mexendo = Date.now(); });
      telaDlg.querySelector("#tc-ok").onclick = async () => {
        const r = await pedirTelaCheia(); setTimeout(checarTela, 300);
        if (!r.ok) { const pb = telaDlg.querySelector(".tc-planob"); if (pb) pb.hidden = false;
          try { const s2 = sess.get(); (s2.alunoIds || []).forEach((id, i) => P.nuvem.app(i).db.collection("progresso").doc(id + "_tela").set({ alunoId: id, turma: s2.turma, tipo: "tela",
            falhaBotao: { em: Date.now(), dia: P.nuvem.hoje(), erro: r.erro, zoom: Math.round(devicePixelRatio * 100), janela: innerWidth + "x" + innerHeight, tela: screen.width + "x" + screen.height, foco: document.hasFocus(), modo: matchMedia("(display-mode: fullscreen)").matches ? "cheia" : "janela" } }, { merge: true }).catch(() => {})); } catch (e) {} }
      };
      document.body.appendChild(telaDlg);
    }
    // fica sempre por cima de qualquer outra janela do portal
    const abertos = [...document.querySelectorAll("dialog[open]")];
    if (telaDlg.open && Date.now() - (+telaDlg.dataset.mexendo || 0) < 2500) return; // o aluno está clicando nela: não mexe agora
    if (!telaDlg.open || abertos[abertos.length - 1] !== telaDlg) { if (telaDlg.open) telaDlg.close(); document.body.appendChild(telaDlg); telaDlg.showModal(); }
  }
  let telaEstava = null;
  function contarSaida() {
    if (P.foraDoPortal) { telaEstava = false; return; }   // 🚪 saiu de propósito para uma tarefa no computador: não conta
    if (P.saidaFim && P.saidaFim === location.hash) { telaEstava = false; return; }   // 🏁 terminou a missão e saiu pelo botão do Resumo: não conta
    const s = sess.get(); if (!telaOn || tcCasa || !s || !s.nuvem || !P.nuvem || !P.nuvem.app) return;
    const fora = !emTelaCheia(); if (telaEstava === true && fora) {
      const hoje = P.nuvem.hoje();
      (s.alunoIds || []).forEach((id, i) => { try { P.nuvem.app(i).db.collection("progresso").doc(id + "_tela").set({ alunoId: id, turma: s.turma, tipo: "tela", saidas: { [hoje]: firebase.firestore.FieldValue.increment(1) } }, { merge: true }).catch(() => {}); } catch (e) {} });
    }
    telaEstava = !fora;
  }
  function ouvirTela(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || telaTurma === s.turma) return;
    if (telaUnsub) telaUnsub(); telaTurma = s.turma;
    try {
      const db = P.nuvem.app(0).db;
      db.collection("config").doc("liberar_" + s.turma).get().then(sn => { const c = (sn.exists && sn.data().casa) || {}; tcCasa = (s.alunoIds || []).length > 0 && (s.alunoIds || []).every(id => c[id]); checarTela(); }).catch(() => {});
      telaUnsub = db.collection("config").doc("tela_" + s.turma).onSnapshot(sn => { const d = sn.exists ? sn.data() : {}; telaOn = !!(d.cheia && d.dia === P.nuvem.hoje()); telaEstava = emTelaCheia(); checarTela(); }, () => {});
    } catch (e) {}
    if (!telaIv) { telaIv = setInterval(checarTela, 1500); ["fullscreenchange", "resize"].forEach(ev => addEventListener(ev, () => { contarSaida(); checarTela(); })); addEventListener("hashchange", checarTela); }
  }
  /* 🔐 o código foi aberto em outro computador com a liberação do professor (ou depois que este ficou sem sinal): este sai */
  function sessaoDerrubada() {
    sess.del(); try { P.nuvem.sair(); } catch (e) {}
    const dlg = h(`<dialog class="pp-dlg sessao-caiu"><h2>🔐 Você saiu deste computador</h2><p>O seu código foi aberto em <b>outro computador</b>. Cada código só fica aberto em um computador por vez.</p>
      <p>Se não foi você, <b>chame o professor agora</b>.</p><form method="dialog" class="row-btns"><button class="btn btn-grande" value="ok">Entendi</button></form></dialog>`);
    document.body.appendChild(dlg); dlg.addEventListener("close", () => { dlg.remove(); location.hash = "#/"; rota(); }); dlg.showModal();
  }
  function relogioAula() {
    try { if (P.nuvem && P.nuvem.sessaoVigiar) P.nuvem.sessaoVigiar(sess.get(), sessaoDerrubada); } catch (e) {}
    try { ouvirPodio(sess.get()); } catch (e) {}
    try { ouvirTela(sess.get()); } catch (e) {}
    try { P.sala && P.sala.ouvir(sess.get()); } catch (e) {}
    // 🖥️ anota uma vez por dia o tamanho da tela e o zoom deste computador (para otimizar as telas para os PCs reais da sala)
    try { const s = sess.get(), hj = P.nuvem && P.nuvem.hoje && P.nuvem.hoje(), k = "portalJK:monitor:" + hj;
      if (s && s.nuvem && hj && !sessionStorage.getItem(k) && (s.alunoIds || []).length) { sessionStorage.setItem(k, "1");
        const m = { w: screen.width, h: screen.height, dpr: Math.round(devicePixelRatio * 100) / 100, iw: innerWidth, ih: innerHeight, dia: hj };
        P.nuvem.app(0).db.collection("progresso").doc(s.alunoIds[0] + "_tela").set({ alunoId: s.alunoIds[0], turma: s.turma, tipo: "tela", monitor: m }, { merge: true }).catch(() => {}); } } catch (e) {}
    try { ouvirRei(sess.get()); } catch (e) {}
    try { ouvirTrilha(sess.get()); } catch (e) {}
    try { ouvirRoleta(sess.get()); } catch (e) {}
    try { P.palco && P.palco.ouvir(sess.get()); } catch (e) {}   // 🎤 23/11/2026: a Aula ao vivo (vídeo e leitura guiada) num registro só
    try { if (P.agEh(sess.get())) { agChecar(); if (!agIv) agIv = setInterval(agChecar, 15000); } } catch (e) {}
    clearInterval(relogioIv);
    const tick = () => {
      const el = document.getElementById("tb-relogio"); if (!el) return clearInterval(relogioIv);
      const s = sess.get(), t = s && turma(s.turma), a = t && t.aula;
      if (!a || !a.ini) { el.hidden = true; return; }
      const d = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000);
      const [hh, mm] = a.ini.split(":").map(Number), ini = hh * 3600 + mm * 60, fim = ini + (cat().duracaoAula || 75) * 60, agora = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
      if (d.getDay() !== a.dia || agora < ini || agora >= fim) { el.hidden = true; return; }
      const r = fim - agora, mi = Math.floor(r / 60), se = r % 60, hf = `${Math.floor(fim / 3600)}h${String(Math.floor(fim % 3600 / 60)).padStart(2, "0")}`;
      el.hidden = false;
      el.className = "tb-relogio" + (r <= 300 ? " fim pisca" : r <= 600 ? " fim" : "");
      el.innerHTML = `<span class="tb-rel-ic">⏱️</span><span class="tb-rel-t">${mi}:${String(se).padStart(2, "0")}</span><span class="tb-rel-txt">para acabar a aula<br><small>termina às ${hf}</small></span>`;
      el.title = `A aula termina às ${hf}`;
    };
    tick(); relogioIv = setInterval(tick, 1000);
  }
  // nome curto para mostrar: apelido (se tiver) ou o primeiro nome
  function curto(s, i) { return (s.apelidos && s.apelidos[i]) || s.nomes[i].split(" ")[0]; }
  function quem(s) { return s.nomes.map((n, i) => (s.apelidos && s.apelidos[i]) ? s.apelidos[i] : n).join(" & "); }
  P.curto = curto; P.quem = quem;
  /* 💬 caixas de mensagem DENTRO da página, no lugar de alert(), confirm() e prompt() do navegador:
     as do navegador podem ser bloqueadas (aí o botão parece não funcionar) e congelam a página inteira (cronômetros param) */
  function caixa(msg, { botoes, campo, valor }) {
    return new Promise(res => {
      const d = document.createElement("dialog"); d.className = "pp-dlg pp-caixa";
      d.innerHTML = `<form method="dialog"><p class="pp-caixa-msg">${esc(msg)}</p>${campo ? `<textarea class="pp-caixa-campo" rows="${String(valor || "").length > 60 || campo === "longo" ? 4 : 1}">${esc(valor == null ? "" : valor)}</textarea>` : ""}
        <div class="row-btns">${botoes.map(([v, r, cls]) => `<button class="btn ${cls || ""}" value="${v}">${esc(r)}</button>`).join(" ")}</div></form>`;
      document.body.appendChild(d);
      const t = d.querySelector("textarea");
      if (t) t.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && campo !== "longo") { e.preventDefault(); d.close("ok"); } });
      d.addEventListener("close", () => { const v = d.returnValue; res(campo ? (v === "ok" ? t.value : null) : v === "sim" || v === "ok"); d.remove(); });
      d.showModal(); if (t) { t.focus(); t.select(); }
    });
  }
  const confirmar = (msg, sim, nao) => caixa(msg, { botoes: [["sim", sim || "Sim", "btn-ok"], ["nao", nao || "Não, voltar"]] });
  P.confirmar = confirmar;
  P.aviso = msg => caixa(msg, { botoes: [["ok", "OK", "btn-ok"]] }).then(() => undefined);
  P.perguntar = (msg, valor, longo) => caixa(msg, { botoes: [["ok", "OK", "btn-ok"], ["nao", "Cancelar"]], campo: longo ? "longo" : "curto", valor });
  // 🔘 escolha com botões grandes (26/11/2026, Agregados: escolher a série): devolve o valor escolhido ou null
  P.escolher = (msg, ops) => new Promise(res => {
    const d = document.createElement("dialog"); d.className = "pp-dlg pp-caixa";
    d.innerHTML = `<form method="dialog"><p class="pp-caixa-msg">${esc(msg)}</p><div class="row-btns">${ops.map(([v, r]) => `<button class="btn btn-ok" value="${esc(v)}">${esc(r)}</button>`).join(" ")}<button class="btn" value="">Cancelar</button></div></form>`;
    document.body.appendChild(d);
    d.addEventListener("close", () => { const v = d.returnValue; res(ops.some(o => String(o[0]) === v) ? v : null); d.remove(); });
    d.showModal();
  });
  async function sair() {
    const s = sess.get();
    if (!(await confirmar(s && s.nuvem ? "Sair do portal? O que você fez já está guardado no painel do professor." : "Sair do portal? Seu progresso fica guardado neste navegador (veja “Privacidade e progresso”).", "Sim, sair"))) return;
    if (s && s.nuvem) { try { await Promise.all(cat().apostilas.map(a => P.nuvem.enviar(a.id).catch(() => null))); } catch (e) {} try { await P.nuvem.sessaoSoltar(s); } catch (e) {} await P.nuvem.sair(); }
    sess.del(); location.hash = "#/";
  }

  function rodape() {
    document.getElementById("rodape").innerHTML = `<a href="https://professorwell.com.br/">🏠 Página inicial</a> · <strong>${esc(cat().portal)}</strong> · <strong>${esc(cat().professor)}</strong> · <span>${esc(cat().escola)} — ${esc(cat().cidade)}</span> ·
      <a href="#/sobre">Privacidade e progresso</a> · <a href="#/professor">Área do professor</a> · <a href="#/painel">Painel do professor</a>`;
  }

  function modoTrilha(a) { const on = !!(a && a.trilha); document.body.classList.toggle("modo-trilha", on); document.documentElement.classList.toggle("trilha", on); }

  /* ✨ 23/11/2026 (pedido do professor): transição suave ao trocar de tela, os blocos descem um pouquinho e se encaixam,
     um logo depois do outro (entrada escalonada). Só quando a tela muda de verdade (redesenhar a mesma tela não anima);
     barras presas (sticky/fixed) ficam paradas; quem pede menos movimento no aparelho vê a tela direto. */
  let cxUlt = "";
  function cascata(el) {
    const rota = location.hash.split("?")[0]; if (rota === cxUlt) return; cxUlt = rota;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let filhos = [...el.children]; if (filhos.length === 1 && filhos[0].children.length > 1) filhos = [...filhos[0].children];
    let k = 0;
    filhos.forEach(c => { if (k >= 12 || c.hidden) return; const ps = getComputedStyle(c).position; if (ps === "fixed" || ps === "sticky") return;
      c.style.setProperty("--cx-i", k++); c.classList.add("cx-entra"); c.addEventListener("animationend", () => { c.classList.remove("cx-entra"); c.style.removeProperty("--cx-i"); }, { once: true }); });
  }
  function mount(html) { const a = $app(); a.innerHTML = ""; const el = typeof html === "string" ? h(html) : html; a.appendChild(el); try { cascata(el); } catch (e) {} window.scrollTo(0, 0); const f = el.querySelector("h1"); if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); } return el; }

  /* ============================================================
     TELAS
     ============================================================ */

  /* -------- início -------- */
  /* 🎬 vídeo leve: mostra só a miniatura (uma imagem pequena); o player do YouTube só carrega quando a pessoa clica no play */
  P.videoLeve = (id, o = {}) => {
    if (!id || !/^[\w-]{11}$/.test(id)) return "";
    return `<section class="painel video-leve">${o.titulo ? `<h2>${esc(o.titulo)}</h2>` : ""}${o.sub ? `<p class="ajuda">${esc(o.sub)}</p>` : ""}
      <button type="button" class="vl-quadro" data-vl="${id}" aria-label="Assistir ao vídeo${o.titulo ? ": " + esc(o.titulo.replace(/^\W+/, "")) : ""}">
        <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" decoding="async" width="480" height="360" onerror="this.remove()"><span class="vl-play" aria-hidden="true">▶</span></button></section>`;
  };
  P.ligarVideoLeve = el => el.querySelectorAll("[data-vl]").forEach(b => b.onclick = () => {
    const id = b.dataset.vl, q = document.createElement("div"); q.className = "vl-quadro vl-on";
    q.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="Vídeo de apresentação do Portal da Informática" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    b.replaceWith(q);
  });

  /* 🎬 cartão de vídeo da página inicial (18/11/2026): compacto (miniatura ao lado do texto, também no celular), explica do que se trata
     e, ao tocar, abre o vídeo por cima da página, na tela toda (tela cheia de verdade onde o aparelho permite) */
  P.videoCartao = (id, o = {}) => {
    if (!id || !/^[\w-]{11}$/.test(id)) return "";
    return `<section class="vc" aria-labelledby="vc-tit">
      <button type="button" class="vc-mini" data-vc="${id}" data-vc-tit="${esc(o.titulo || "")}" aria-label="Assistir ao vídeo: ${esc(o.titulo || "")}${o.duracao ? " (" + esc(o.duracao) + ")" : ""}">
        <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" decoding="async" width="480" height="360" onerror="this.remove()">
        <span class="vc-play" aria-hidden="true">▶</span>${o.duracao ? `<span class="vc-dur" aria-hidden="true">${esc(o.duracao)}</span>` : ""}</button>
      <div class="vc-txt">
        ${o.para ? `<p class="vc-para">${esc(o.para)}</p>` : ""}
        <h2 id="vc-tit">${esc(o.titulo || "")}</h2>
        ${o.sub ? `<p class="vc-sub">${esc(o.sub)}</p>` : ""}
        <button type="button" class="btn vc-btn" data-vc="${id}" data-vc-tit="${esc(o.titulo || "")}">▶ Assistir${o.duracao ? ` <span class="vc-btn-dur">· ${esc(o.duracao)}</span>` : ""}</button>
      </div>
      ${o.topicos && o.topicos.length ? `<details class="vc-mais"><summary>O que você vai ver no vídeo</summary><ul>${o.topicos.map(t => `<li>${esc(t)}</li>`).join("")}</ul>${o.nota ? `<p class="vc-nota">${esc(o.nota)}</p>` : ""}</details>` : ""}
    </section>`;
  };
  P.ligarVideoCartao = el => el.querySelectorAll("[data-vc]").forEach(b => b.onclick = () => {
    const id = b.dataset.vc, dlg = document.createElement("dialog"); dlg.className = "vc-modal";
    dlg.setAttribute("aria-label", b.dataset.vcTit || "Vídeo");
    dlg.innerHTML = `<div class="vc-modal-topo"><strong>${esc(b.dataset.vcTit || "")}</strong><button type="button" class="vc-fechar" aria-label="Fechar o vídeo">✕ Fechar</button></div>
      <div class="vc-modal-video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&fs=1" title="${esc(b.dataset.vcTit || "Vídeo")}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
    document.body.appendChild(dlg);
    const sair = () => { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); dlg.close(); };
    dlg.querySelector(".vc-fechar").onclick = sair;
    dlg.addEventListener("click", e => { if (e.target === dlg) sair(); });
    dlg.onclose = () => { dlg.remove(); document.body.classList.remove("vc-aberto"); b.focus({ preventScroll: true }); };
    document.body.classList.add("vc-aberto"); dlg.showModal();
    // tela cheia de verdade onde o navegador deixa (computador e Android); no iPhone o vídeo já ocupa a tela e o player tem o próprio botão de tela cheia
    if (dlg.requestFullscreen && matchMedia("(max-width: 820px)").matches) dlg.requestFullscreen().catch(() => {});
  });

  /* 🎮 PÁGINA INICIAL no estilo videogame antigo (24/11/2026, aprovada pelo professor): "Escolha a sua fase".
     As séries são fases numa escadinha que sobe (5º → 9º); clicar ou apertar o número no teclado faz o bloco "pular" e abre a série.
     Fonte de pixel (Press Start 2P, licença OFL, em css/fontes) só em títulos, números e botões; o texto continua na fonte normal. */
  function telaInicio() {
    barra();
    const ss = cat().series.filter(s => !s.oculta);   // 🎒 o 5º ano ficou dentro dos Agregados (26/11/2026)
    const el = mount(`<section class="tela inicio-jogo">
      <div class="ij-cena pix-s">
        <svg class="ij-nuvem" style="left:4%;top:26px;width:132px" viewBox="0 0 36 14" shape-rendering="crispEdges" aria-hidden="true"><path fill="#10173A" d="M8 2h10v2h4v2h6v2h4v4h2v2H0v-2h2V8h2V6h4z"/><path fill="#fff" d="M9 3h8v2h4v2h6v2h4v3H2v-2h2V8h2V6h3z"/></svg>
        <svg class="ij-nuvem" style="right:5%;top:120px;width:100px" viewBox="0 0 36 14" shape-rendering="crispEdges" aria-hidden="true"><path fill="#10173A" d="M8 2h10v2h4v2h6v2h4v4h2v2H0v-2h2V8h2V6h4z"/><path fill="#fff" d="M9 3h8v2h4v2h6v2h4v3H2v-2h2V8h2V6h3z"/></svg>
        <div class="ij-placa pix-s">
          <h1>Aula de Informática</h1>
          <span class="ij-selo pix">com o ${esc(cat().professor.replace(/^Professor\s+/i, "Prof. "))}</span>
          <p>Aqui você lê, pratica nos simuladores e descobre onde usa cada conteúdo no dia a dia.</p>
        </div>
        <h2 class="ij-perg">Escolha a sua fase: qual é a sua série?</h2>
        <svg class="ij-morros" viewBox="0 0 320 55" preserveAspectRatio="none" shape-rendering="crispEdges" aria-hidden="true">
          <path fill="#2A8C57" d="M0 55V35h8v-6h8v-5h12v5h8v6h8v20zM190 55V30h10v-8h8v-5h16v5h8v8h10v25z"/>
          <path fill="#3BB273" d="M60 55V40h10v-6h10v-4h18v4h10v6h10v15zM250 55V38h8v-6h12v-4h14v4h10v6h8v17z"/></svg>
        <nav class="ij-mapa" aria-label="Escolha a sua série">${ss.map((s, i) => { const n = esc(s.bloco || s.nome.split(/[º°ª\s]/)[0]);
          return `<a class="ij-fase" href="#/serie/${s.id}" data-k="${n}" style="--c:${s.cor};--sobe:${i * 30}px">
            <span class="ij-bloco pix-s"><span>${n}</span>${i === ss.length - 1 ? `<i class="ij-bandeira" aria-hidden="true"></i>` : ""}</span>
            <span class="ij-rotulo pix"><b>${esc(s.nome)}</b><small>${s.nota ? esc(s.nota) : "Turmas " + s.turmas.map(t => esc(t.nome.replace(/^\S+\s*/, ""))).join(", ").replace(/, ([^,]*)$/, " e $1")}</small></span></a>`; }).join("")}</nav>
        <div class="ij-chao" aria-hidden="true"></div>
      </div>
      <div class="ij-mais">
        ${P.videoCartao((cat().videosApresentacao || {}).familias, { para: "🎬 Para famílias e alunos", titulo: "Conheça o Portal da Informática", duracao: "3 min",
        sub: "Veja como funcionam as aulas de Informática do Prof. Welington Laignier e como o aluno aprende no portal. Assista com o som ligado.",
        topicos: ["🔢 Como o aluno entra: só um código de 4 números, sem e-mail e sem senha", "🎯 As missões: videozinho, leitura e “Onde eu uso isso?”", "🖱️ Os simuladores e as tarefas em três níveis, com o robô Bit para ajudar", "🏆 Os pontos, o rei da sala e o pódio no fim da aula", "👀 Como o professor acompanha cada aluno e quem estuda em casa", "🔒 A segurança: nome e notas só aparecem no painel do professor"] })}
        <a class="card-material ij-material pix-s" href="material.html">
          <span class="cmat-ic" aria-hidden="true">📚</span>
          <span class="cmat-txt"><b class="ij-mat-tit">O material da Sala de Informática</b>
            <span>O que os alunos estudam, com qual material e como ele trabalha <b>as 42 habilidades e os 3 eixos da BNCC Computação</b>. Com relatório em PDF.</span></span>
          <span class="cmat-ir ij-btn pix">Conhecer o material</span></a>
      </div>
    </section>`);
    P.ligarVideoCartao(el);
    // clicar ou apertar o número: o bloco pula (como no jogo) e a série abre
    const pular = (f, ir) => { f.classList.remove("pulou"); void f.offsetWidth; f.classList.add("pulou"); if (ir) setTimeout(() => { location.hash = f.getAttribute("href"); }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260); };
    el.querySelectorAll(".ij-fase").forEach(f => f.addEventListener("click", e => { if (e.ctrlKey || e.metaKey || e.shiftKey) return; e.preventDefault(); pular(f, true); }));
    const tecla = e => { if (!el.isConnected) return removeEventListener("keydown", tecla); if (e.ctrlKey || e.altKey || e.metaKey || /input|textarea|select/i.test((e.target.tagName || ""))) return;
      const f = el.querySelector('.ij-fase[data-k="' + e.key + '"]'); if (f) { e.preventDefault(); pular(f, true); } };
    addEventListener("keydown", tecla);
    return el;
  }

  /* -------- escolha da turma + identificação -------- */
  function telaSerie(sid, destino) {
    if (P.nuvem && P.nuvem.pronto && !P.modoAntigo) return telaCodigo(sid, destino);
    return telaSerieAntiga(sid, destino);
  }
  P.telaSerieAntiga = (sid, destino) => { P.modoAntigo = true; return telaSerieAntiga(sid, destino); };

  /* -------- entrada com código (turma → código → "Você é…?") -------- */
  function telaCodigo(sid, destino) {
    const s = serie(sid); if (!s) return telaInicio();
    barra();
    const el = mount(`<section class="tela" style="--cor:${s.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(s.nome)}</nav>
      <h1>${esc(s.nome)} — entrar no portal</h1>
      <form class="painel form-id" id="fcod" novalidate>
        <fieldset><legend>1. Turma</legend>
          <div class="opcoes-turma">${s.turmas.filter(t => !t.arquivada).map((t, _i, tv) => `<label class="opt-turma"><input type="radio" name="turma" value="${t.id}" ${tv.length === 1 ? "checked" : ""}><span>${esc(t.nome)}${t.aula && t.aula.ini ? `<small class="opt-hora">${["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][t.aula.dia]} ${t.aula.ini}</small>` : ""}</span></label>`).join("")}</div>
        </fieldset>
        <fieldset><legend>2. Vai fazer sozinho ou em dupla?</legend>
          <div class="opcoes-turma">
            <label class="opt-turma"><input type="radio" name="modo" value="individual" checked><span>👤 Sozinho</span></label>
            <label class="opt-turma"><input type="radio" name="modo" value="dupla"><span>👥 Em dupla <small>(no mesmo computador)</small></span></label>
          </div>
          <p class="aviso-dupla">👥 <strong>Em dupla = os dois no MESMO computador</strong>, lado a lado. O portal mostra de quem é a vez: um faz e o outro ajuda. Não é como jogar Roblox junto, cada um no seu computador: aqui a dupla divide <strong>um computador só</strong>.</p>
        </fieldset>
        <fieldset><legend>3. Seu código</legend>
          <div class="pessoa"><label class="campo"><span>Seu código de 4 números</span><input id="c1" class="in-codigo" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="0000" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a1" maxlength="20" autocomplete="off" placeholder="Ex.: Aninha"></label></div>
          <div class="pessoa" id="p2" hidden><p class="pessoa-tit">Colega da dupla</p>
            <label class="campo"><span>Código do colega</span><input id="c2" class="in-codigo" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="0000"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a2" maxlength="20" autocomplete="off" placeholder="Ex.: Pedrão"></label></div>
          <p class="ajuda">O código está no seu cartãozinho. Esqueceu? Peça ao professor. Não mostre o seu código para os colegas.</p>
        </fieldset>
        <p class="erro" id="ferro" role="alert" hidden></p>
        <button class="btn btn-grande" type="submit" id="bcont">Continuar ➜</button>
      </form>
      <div id="confirma"></div>
    </section>`);
    const form = el.querySelector("#fcod"), fe = el.querySelector("#ferro"), bc = el.querySelector("#bcont");
    const p2 = el.querySelector("#p2");
    el.querySelectorAll('input[name="modo"]').forEach(r => r.onchange = () => { p2.hidden = el.querySelector('input[name="modo"]:checked').value !== "dupla"; });
    el.querySelectorAll(".in-codigo").forEach(i => i.oninput = () => { i.value = i.value.replace(/\D/g, "").slice(0, 4); });
    const erro = m => { fe.innerHTML = m; fe.hidden = !m; };
    let falhas = 0, bloqueadoAte = 0;
    form.onsubmit = async e => {
      e.preventDefault(); erro("");
      if (Date.now() < bloqueadoAte) return erro("Muitas tentativas erradas. Espere alguns segundos e chame o professor.");
      const t = el.querySelector('input[name="turma"]:checked');
      const modo = el.querySelector('input[name="modo"]:checked').value;
      const cods = [el.querySelector("#c1").value.trim()].concat(modo === "dupla" ? [el.querySelector("#c2").value.trim()] : []);
      const apels = [el.querySelector("#a1").value, el.querySelector("#a2").value].map(a => a.trim().replace(/\s+/g, " "));
      if (!t) return erro("Escolha a turma.");
      if (cods.some(c => !/^\d{4}$/.test(c))) return erro(modo === "dupla" ? "Digite os dois códigos, com 4 números cada." : "Digite o seu código de 4 números.");
      if (modo === "dupla" && cods[0] === cods[1]) return erro("Os dois códigos estão iguais. Cada um digita o seu.");
      if (apels.some(a => a && !/^[\p{L}\p{N}' ._-]{1,20}$/u.test(a))) return erro("O apelido pode ter só letras, números e espaços (até 20).");
      bc.disabled = true; bc.textContent = "Conferindo…";
      let infos;
      try { infos = await Promise.all(cods.map((c, i) => P.nuvem.conferirCodigo(i, t.value, c)));
        // 🎒 Agregados (26/11/2026): enquanto o professor não junta o 5º ano (botão no painel), o código do aluno ainda está na
        //    turma antiga do 5º (arquivada); procura lá também, e ele entra como antes, sem precisar escolher turma
        if ((turma(t.value) || {}).livre) { const arq = cat().series.flatMap(x => x.turmas.filter(y => y.arquivada).map(y => y.id));
          infos = await Promise.all(infos.map(async (x, i) => { if (x) return x; for (const ta of arq) { const y = await P.nuvem.conferirCodigo(i, ta, cods[i]).catch(() => null); if (y) return Object.assign({}, y, { turma: y.turma || ta }); } return null; })); } }
      catch (err) {
        console.warn(err); bc.disabled = false; bc.textContent = "Continuar ➜";
        return erro(`Não foi possível conferir o código agora (sem internet?). <a href="#" id="antigo">Entrar sem código, só neste computador</a>.`);
      } finally { bc.disabled = false; bc.textContent = "Continuar ➜"; }
      const ruins = infos.map((x, i) => x ? null : i).filter(x => x !== null);
      if (ruins.length) {
        falhas++; if (falhas >= 5) { bloqueadoAte = Date.now() + 30000; falhas = 0; }
        return erro(ruins.length === 2 ? "Os dois códigos não foram encontrados nesta turma." : modo === "dupla" ? `O código ${ruins[0] === 0 ? "do primeiro aluno" : "do colega"} não foi encontrado nesta turma.` : "Código não encontrado nesta turma. Confira a turma e o número, ou chame o professor.");
      }
      // 🏫 aluno de outra turma (frequenta esta aula): a sessão fica na turma dele; em dupla, os dois precisam ser da mesma turma
      const tReal = [...new Set(infos.map(x => x.turma || t.value))];
      if (tReal.length > 1) return erro("Vocês são de turmas diferentes. Entrem um de cada vez (Sozinho).");
      const turmaSess = tReal[0];
      // 🎒 Agregados (26/11/2026): a turma é livre e cada aluno usa as missões DA SÉRIE DELE (gravada no código pelo painel)
      const seT = cat().series.find(x => x.turmas.some(y => y.id === turmaSess));
      let serieSess = seT && !seT.agregados ? seT.id : sid;
      if ((turma(turmaSess) || {}).livre) {
        const sx = [...new Set(infos.map(x => x.serie || ""))];
        if (sx.some(x => !serie(x))) return erro("O professor ainda não marcou a sua série nos Agregados. Chame o professor.");
        if (sx.length > 1) return erro("Vocês são de séries diferentes. Entrem um de cada vez (Sozinho).");
        serieSess = sx[0];
      }
      form.hidden = true;
      const cf = el.querySelector("#confirma");
      cf.innerHTML = `<div class="painel confirma-quem">
        <h2>${infos.length > 1 ? "Vocês são…" : "Você é…"}</h2>
        <ul class="quem-lista">${infos.map(x => `<li>👤 <strong>${esc(x.nome)}</strong></li>`).join("")}</ul>
        <p class="ajuda">Turma ${esc((turma(t.value) || {}).nome || t.value)}</p>
        <div class="row-btns"><button class="btn btn-grande" type="button" id="sim">✔ Sim, ${infos.length > 1 ? "somos nós" : "sou eu"}</button>
          <button class="btn btn-sec" type="button" id="nao">✖ Não, voltar</button></div></div>`;
      cf.querySelector("#nao").onclick = () => { cf.innerHTML = ""; form.hidden = false; el.querySelector("#c1").focus(); };
      cf.querySelector("#sim").onclick = async () => {
        const b = cf.querySelector("#sim"); b.disabled = true; b.textContent = "Entrando…";
        try { await Promise.all(infos.map((x, i) => P.nuvem.confirmar(i, x, turmaSess))); }
        catch (err) { console.warn(err); b.disabled = false; b.textContent = "Tentar de novo"; toast("Não foi possível entrar agora. Tente de novo."); return; }
        // 🔐 um computador por vez: se o código já está aberto em outro computador, não entra (o professor pode liberar)
        if (P.nuvem.sessaoChecar) { let bloq = [];
          try { const rs = await Promise.all(infos.map((x, i) => P.nuvem.sessaoChecar(i, x.alunoId, turmaSess))); bloq = infos.filter((x, i) => !rs[i].ok); } catch (e) { console.warn("sessao", e); }
          if (bloq.length) { try { await P.nuvem.sair(); } catch (e) {}
            cf.innerHTML = `<div class="painel confirma-quem sessao-bloq" role="alert"><h2>🔐 Este código já está aberto em outro computador</h2>
              <p>${bloq.map(x => `<b>${esc((x.nome || "").split(" ")[0])}</b>`).join(" e ")} já ${bloq.length > 1 ? "estão" : "está"} usando o portal agora em outro computador da sala.</p>
              <p>Por segurança, cada código só pode ficar aberto <b>em um computador por vez</b>. Se foi você que trocou de computador, <b>chame o professor</b>: ele libera a sua entrada no painel.</p>
              <div class="row-btns"><button class="btn btn-grande" type="button" id="sb-tentar">🔄 Tentar de novo</button><button class="btn btn-sec" type="button" id="sb-voltar">✖ Voltar</button></div></div>`;
            cf.querySelector("#sb-tentar").onclick = () => { cf.innerHTML = ""; form.hidden = false; const bc2 = el.querySelector("#fcod button[type=submit], #fcod .btn-grande"); if (bc2) bc2.click(); else el.querySelector("#c1").focus(); };
            cf.querySelector("#sb-voltar").onclick = () => { cf.innerHTML = ""; form.hidden = false; el.querySelector("#c1").focus(); };
            return; } }
        let trilhaS = infos.length === 1 && !!infos[0].trilha;
        try { if (!trilhaS) trilhaS = await trilhaDaDupla(infos, turmaSess); } catch (e) {}
        sess.set({ serie: serieSess, turma: turmaSess, modo, nuvem: true, alunoIds: infos.map(x => x.alunoId), nomes: infos.map(x => x.nome), apelidos: infos.map((x, i) => apels[i] || ""), entrou: Date.now(),
          trilha: trilhaS });
        // 🚦 Sala de espera (20/11/2026): no dia e na hora da aula, quem entra vai para a sala de espera (jogos que dão pontos,
        //    avatar sem pressa, espiar a missão) até o professor dar a 🏁 largada; o avatar de 4 minutos fica para casa e outros dias
        if (P.espera) { try { if (await P.espera.ativaPara(sess.get())) { location.hash = "#/espera"; return; } } catch (e) { console.warn("espera", e); } }
        // 🧍 monta o avatar (2 min); quem não salvar entra com o avatar que já tinha ou com o uniforme da escola
        if (P.avatar) { try { const avs = await P.avatar.fluxoLogin(mount, infos.map(x => Object.assign({}, x, { turma: turmaSess })), 240); const ss = sess.get(); if (ss && avs && avs.length) sess.set(Object.assign({}, ss, { avatares: avs })); } catch (e) { console.warn("avatar", e); } }
        if (P.curiosidadesNoLogin) { try { await P.curiosidadesNoLogin(infos, turmaSess); } catch (e) { console.warn("curiosidades", e); } }
        location.hash = destino || "#/apostilas";
      };
      cf.querySelector("#sim").focus();
    };
    el.addEventListener("click", ev => { if (ev.target && ev.target.id === "antigo") { ev.preventDefault(); P.telaSerieAntiga(sid, destino); } });
  }

  function telaSerieAntiga(sid, destino) {
    const s = serie(sid); if (!s) return telaInicio();
    barra();
    const el = mount(`<section class="tela" style="--cor:${s.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(s.nome)}</nav>
      <h1>${esc(s.nome)} — quem vai usar este computador?</h1>
      <form class="painel form-id" id="fid" novalidate>
        <fieldset><legend>1. Turma</legend>
          <div class="opcoes-turma">${s.turmas.map((t, i) => `<label class="opt-turma"><input type="radio" name="turma" value="${t.id}" ${s.turmas.length === 1 ? "checked" : ""}><span>${esc(t.nome)}${t.aula && t.aula.ini ? `<small class="opt-hora">${["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][t.aula.dia]} ${t.aula.ini}</small>` : ""}</span></label>`).join("")}</div>
        </fieldset>
        <fieldset><legend>2. Vai fazer sozinho ou em dupla?</legend>
          <div class="opcoes-turma">
            <label class="opt-turma"><input type="radio" name="modo" value="individual" checked><span>👤 Sozinho</span></label>
            <label class="opt-turma"><input type="radio" name="modo" value="dupla"><span>👥 Em dupla <small>(no mesmo computador)</small></span></label>
          </div>
          <p class="aviso-dupla">👥 <strong>Em dupla = os dois no MESMO computador</strong>, lado a lado. O portal mostra de quem é a vez: um faz e o outro ajuda. Não é como jogar Roblox junto, cada um no seu computador: aqui a dupla divide <strong>um computador só</strong>.</p>
        </fieldset>
        <fieldset><legend>3. Quem é você?</legend>
          <div class="pessoa"><label class="campo"><span>Nome completo <em class="obrig">(obrigatório)</em></span><input id="n1" maxlength="60" autocomplete="off" placeholder="Ex.: Ana Clara Souza" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a1" maxlength="20" autocomplete="off" placeholder="Ex.: Aninha, Hacker do 6º"></label></div>
          <div class="pessoa" id="c2" hidden><p class="pessoa-tit">Colega da dupla</p>
            <label class="campo"><span>Nome completo <em class="obrig">(obrigatório)</em></span><input id="n2" maxlength="60" autocomplete="off" placeholder="Ex.: Pedro Henrique Lima" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a2" maxlength="20" autocomplete="off" placeholder="Ex.: Pedrão"></label></div>
          <p class="ajuda">O apelido aparece em destaque no topo da tela; o nome completo fica embaixo, para o professor registrar. Não digite telefone, endereço nem senha.</p>
        </fieldset>
        <p class="erro" id="ferro" role="alert" hidden></p>
        <button class="btn btn-grande" type="submit">Entrar ➜</button>
      </form>
    </section>`);
    const c2 = el.querySelector("#c2");
    el.querySelectorAll('input[name="modo"]').forEach(r => r.onchange = () => { c2.hidden = el.querySelector('input[name="modo"]:checked').value !== "dupla"; });
    el.querySelector("#fid").onsubmit = e => {
      e.preventDefault();
      const t = el.querySelector('input[name="turma"]:checked');
      const modo = el.querySelector('input[name="modo"]:checked').value;
      const n1 = el.querySelector("#n1").value.trim().replace(/\s+/g, " ");
      const n2 = el.querySelector("#n2").value.trim().replace(/\s+/g, " ");
      const a1 = el.querySelector("#a1").value.trim().replace(/\s+/g, " ");
      const a2 = el.querySelector("#a2").value.trim().replace(/\s+/g, " ");
      const err = [];
      const ok = n => n.length >= 5 && n.split(" ").length >= 2 && /^[\p{L}' .-]+$/u.test(n);
      const okApel = a => !a || /^[\p{L}\p{N}' ._-]{1,20}$/u.test(a);
      if (!t) err.push("Escolha a turma.");
      if (!ok(n1)) err.push("Digite o seu nome completo: nome e sobrenome (só letras).");
      if (modo === "dupla" && !ok(n2)) err.push("Digite o nome completo do colega da dupla.");
      if (!okApel(a1) || (modo === "dupla" && !okApel(a2))) err.push("O apelido pode ter só letras, números e espaços (até 20).");
      if (modo === "dupla" && ok(n1) && ok(n2) && norm(n1) === norm(n2)) err.push("Os dois nomes estão iguais.");
      const fe = el.querySelector("#ferro");
      if (err.length) { fe.innerHTML = err.map(esc).join("<br>"); fe.hidden = false; return; }
      sess.set({ serie: sid, turma: t.value, modo, nomes: modo === "dupla" ? [n1, n2] : [n1], apelidos: modo === "dupla" ? [a1, a2] : [a1], entrou: Date.now() });
      location.hash = destino || "#/apostilas";
    };
    setTimeout(() => el.querySelector("#n1").focus(), 50);
  }

  /* -------- lista de apostilas da série (por disciplina e unidade) -------- */
  function telaApostilas() {
    const s = sess.get(); if (!s) return telaInicio();
    const se = serie(s.serie);
    barra();
    if (!P._periodoLido) { P.carregarPeriodo().then(() => { if (/^#\/apostilas/.test(location.hash)) telaApostilas(); }); }
    const lista = cat().apostilas.filter(a => a.serie === s.serie && !a.oculta && P.doPeriodo(a)).map(a => trilhaDe(a.id) ? apostila(trilhaDe(a.id)) : a);
    const porDisc = {};
    lista.forEach(a => { (porDisc[a.disciplina] = porDisc[a.disciplina] || []).push(a); });
    const hoje = sessionStorage.getItem("portalJK:hoje");
    mount(`<section class="tela" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(se.nome)}</nav>
      <h1>Olá, ${esc(s.nomes.map((n, i) => curto(s, i)).join(" e "))}! 👋</h1>
      <p class="lead">Escolha a apostila que o professor pediu.</p>
      ${P.agEh(s) ? `<div id="ag-faixa"></div>` : ""}
      ${Object.keys(porDisc).map(did => { const d = disciplina(did); return `<h2 class="sec-tit">${d.icone} ${esc(d.nome)}</h2>
        <div class="grid-cards">${porDisc[did].map(a => `<a class="card-apostila" href="#/apostila/${a.id}">
          <span class="ca-un">${esc(a.unidade)}</span><strong>${esc(a.titulo)}</strong><span class="ca-modo">${esc(a.modo)}</span></a>`).join("")}</div>`; }).join("")}
      ${lista.length ? "" : `<p class="painel">Ainda não há apostilas para esta série.</p>`}
      ${hoje ? `<p class="painel destaque hoje-destaque">📌 <strong>Missão de hoje</strong>, escolhida pelo professor: <a class="btn" href="#/abrir/${esc(hoje)}">abrir agora →</a></p>` : ""}
    </section>`);    if (P.agEh(s)) missaoAbertaAG(s, true).then(ab => { const x = document.getElementById("ag-faixa"); if (x) x.outerHTML = faixaAG(ab); }).catch(() => {});
  }

  /* -------- capa da apostila -------- */
  async function telaApostila(aid) {
    const s = sess.get(); const a = apostila(aid); if (!a) return telaInicio();
    if (!s) return telaSerie(a.serie, "#/apostila/" + aid);
    await carregar(aid);
    await restaurarNuvem(aid);
    await carregarRevisa(s);
    await carregarRec(s);
    modoTrilha(a);
    const C = P.conteudo[aid]; const se = serie(a.serie);
    barra(`<span>${esc(a.titulo)}</span>`);
    // 🏠🔓 reposição em casa (25/11/2026): 🔓 nas missões liberadas para fazer de casa e 🔒 nas que são feitas na aula
    let repo = null; if (P.trava && P.trava.repo) { try { repo = await P.trava.repo(s); } catch (e) { repo = null; } }
    const hAG = P.agEh(s) && P.trava ? await P.trava.hoje(s).catch(() => null) : null, naAulaAG = !!(hAG && (hAG.aid === aid || hAG.aid === a.base));
    const ehAG = P.agEh(s) && !naAulaAG, abAG = ehAG ? await missaoAbertaAG(s, true) : null;   // 🎒 na aula de uma turma, sem a trava de uma por vez
    const card = mm => {
      const st = statusMissao(aid, mm.id);
      if (abAG && mm.id !== "rc" && (abAG.aid !== aid || abAG.mid !== mm.id)) { const ic0 = (P.ilustracoes[aid] || { icones: {} }).icones[mm.id];
        return `<a class="card-missao ag-trancada${st.basicoOk ? " ok" : ""}" href="#/missao/${esc(abAG.aid)}/${esc(abAG.mid)}" title="Termine primeiro o Básico da missão que você começou"><span class="cm-repo">🔒 Termine primeiro: ${esc(abAG.titulo.replace(/ –.*/, ""))}</span>
        <span class="cm-ic" aria-hidden="true">${ic0 ? `<span class="cm-svg">${ic0}</span>` : esc(mm.icone)}</span><span class="cm-tit">${esc(mm.titulo)}</span><span class="cm-obj">${mm.objetivo}</span>
        <span class="cm-prog"><span>${st.basicoOk ? "🟢 Básico ✔" : "🔒 Fechada por enquanto"}</span></span></a>`; }
      const rpTag = repo && mm.id !== "rc" ? (repo.mids.includes(mm.id) ? `<span class="cm-repo ok">🔓 Liberada para fazer de casa</span>` : `<span class="cm-repo">🔒 Feita na aula, com a turma</span>`) : "";
      const pct = st.basico[1] ? Math.round(st.basico[0] / st.basico[1] * 100) : 0;
      const ok = st.basicoOk;
      const ic = (P.ilustracoes[aid] || { icones: {} }).icones[mm.id];
      return `<a class="card-missao ${ok ? "ok" : ""}${rpTag ? (repo.mids.includes(mm.id) ? " repo-sim" : " repo-nao") : ""}" href="#/missao/${aid}/${mm.id}">${rpTag}
        <span class="cm-ic" aria-hidden="true">${ic ? `<span class="cm-svg">${ic}</span>` : esc(mm.icone)}</span>
        <span class="cm-tit">${esc(mm.titulo)}</span>
        <span class="cm-obj">${mm.objetivo}</span>
        <span class="cm-prog"><span class="mini-bar"><i style="width:${pct}%"></i></span>
          <span>${st.leitura[1] ? `📖 Leitura ${st.leitura[0]}/${st.leitura[1]} · ` : ""}🟢 Básico ${st.basico[0]}/${st.basico[1]}${ok ? " ✔" : ""}</span></span></a>`;
    };
    mount(`<section class="tela" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/apostilas">Apostilas</a> › ${esc(a.titulo)}</nav>
      <header class="capa"><div class="capa-txt">
        <p class="capa-esc">${esc(cat().portal)} · ${esc(cat().escola)} · ${esc(cat().cidade)}</p>
        <h1>${esc(C.titulo.replace("Apostila de ", ""))}</h1>
        <p class="capa-prof">${esc(cat().professor)}</p></div>
        ${(P.ilustracoes[aid] || {}).mascote ? `<div class="capa-masc">${P.ilustracoes[aid].mascote}</div>` : ""}
      </header>
      ${P.jogosEspera && !s.prof ? `<a class="jogos5-cta" id="cta-jogos" href="#/jogos"><span class="jogos5-ic">🎮</span><span><b>Sala de jogos</b><small>Todos os jogos do portal para você jogar e bater recordes!</small></span><span class="jogos5-ir">Jogar ▶</span></a>` : ""}
      ${repo ? `<div class="painel repo-faixa" role="note"><h2>🏠 Reposição em casa</h2><p>O Prof. Welington Laignier liberou para você fazer <strong>de casa</strong>, na hora que quiser, até <strong>${new Date(repo.ate).toLocaleDateString("pt-BR")}</strong>: ${repo.mids.map(x => `<b>🔓 ${esc(rotMis(aid, x))}</b>`).join(", ")}.</p><p>⏱️ São até <strong>${Math.round((P.catalogo.casaMinutos || 120) / 60)} horas de estudo por dia</strong> (o tempo começa na primeira tarefa). Antes das tarefas, assista ao vídeo da missão. As missões com 🔒 são feitas na aula, junto com a turma.</p></div>` : ""}
      ${ehAG ? faixaAG(abAG) : ""}
      <div class="grid-missoes">${C.missoes.filter(mm => mm.id !== "rc" || P.recLiberada || s.prof || !s.nuvem).map(card).join("")}</div>
      <details class="painel como-usar"><summary>📘 Como usar esta apostila</summary>${blocos(C.comoUsar.filter(b => !(b.t === "p" && /Tudo na apostila|escreve e desenha/.test(b.h))))}
        <p><strong>No portal:</strong> faça junto com o professor a missão do dia. Quando terminar o 🟢 Básico, aparece a faixa verde <strong>“Básico concluído”</strong>: tudo fica registrado sozinho, e você escolhe entre o Desafio (nota maior) e os jogos livres.</p></details>
      <div class="row-btns"><a class="btn btn-sec" href="#/imprimir/${aid}">🖨️ Versão para imprimir</a>
        <button class="btn btn-sec" id="exp" type="button">📥 Baixar minhas respostas</button>
        <button class="btn btn-sec" id="apagar" type="button">🧹 Apagar meus dados deste computador</button></div>
    </section>`);
    document.getElementById("exp").onclick = () => exportar(aid);
    // 🔒 na hora da aula da turma, a Sala de jogos livre fica fechada (abre pelo 🏁 fim da missão, com o básico concluído)
    const ctaJ = document.getElementById("cta-jogos");
    if (ctaJ && !jogosLiberadoPeloFim(s)) aulaAgora(s).then(sim => { if (!sim || !ctaJ.isConnected) return;
      ctaJ.outerHTML = `<div class="jogos5-cta jogos5-fechada" id="cta-jogos" role="note"><span class="jogos5-ic">🔒</span><span><b>Sala de jogos fechada durante a aula</b><small>Termine o 🟢 Básico da missão: no “Resumo do que fiz” ela abre para você.</small></span></div>`; });
    document.getElementById("apagar").onclick = async () => {
      if (!(await confirmar("Apagar todas as suas respostas desta apostila neste computador? Não dá para desfazer.", "Sim, apagar"))) return;
      store.del(progressoKey(aid)); toast("Seus dados desta apostila foram apagados deste computador."); telaApostila(aid);
    };
  }

  /* 🎮🔒 Aula acontecendo agora para a turma do aluno? (config/hoje_<turma>.iniciadaDia = hoje; o ⏹️ Finalizar limpa).
     Nesse horário a Sala de jogos livre fica fechada; ela só abre pelo 🏁 fim da missão (básico concluído). Sem internet: não bloqueia. */
  async function aulaAgora(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.pronto || !s.turma) return false;
    try { const h = await Promise.race([P.nuvem.db().collection("config").doc("hoje_" + s.turma).get(), new Promise((_, no) => setTimeout(() => no(new Error("tempo")), 4000))]);
      return !!(h.exists && h.data().iniciadaDia === P.nuvem.hoje()); } catch (e) { return false; }
  }
  const jogosLiberadoPeloFim = s => { try { return sessionStorage.getItem("jogos-liberados") === s.turma + "|" + new Date().toDateString(); } catch (e) { return false; } };
  /* 🎮 SALA DE JOGOS (25/11/2026, pedido do professor): começou no 5º ano e agora aparece para todas as séries, na lista de missões. Os alunos
     jogam TODOS os jogos da Sala de espera, a qualquer hora, sem contar pontos de aula. Os recordes e o progresso dos jogos
     (ex.: as fases do Byte) ficam no mesmo lugar da Sala de espera: progresso/<aluno>_espera.recordes. */
  async function telaJogos5() {
    const s = sess.get(); if (!s) return telaInicio();
    if (!P.jogosEspera) { location.replace("#/apostilas"); return; }   // 🎮 desde 25/11/2026 aberta para todas as séries (antes só o 5º ano), a pedido do professor
    if (!jogosLiberadoPeloFim(s) && await aulaAgora(s)) { location.replace("#/apostilas"); return; }   // 🔒 na hora da aula, só pelo fim da missão
    barra(`<span>🎮 Sala de jogos</span>`);
    const ids = s.alunoIds || [], nuvem = !!(s.nuvem && P.nuvem && P.nuvem.pronto);
    const refs = nuvem ? ids.map((id, i) => P.nuvem.app(i).db.collection("progresso").doc(id + "_espera")) : [];
    const docs = await Promise.all(refs.map(r => r.get().then(x => x.exists ? x.data() : {}).catch(() => ({}))));
    const recordes = {}; docs.forEach(x => Object.entries(x.recordes || {}).forEach(([k, v]) => { recordes[k] = Math.max(recordes[k] || 0, v || 0); }));
    mount(`<section class="tela jogos5"><nav class="migalhas"><a href="#/apostilas">Apostilas</a> › 🎮 Sala de jogos</nav>
      <header class="jogos5-topo"><h1>🎮 Sala de jogos</h1><p>Escolha um jogo, veja como se joga e tente bater o seu recorde. Bom divertimento, ${esc(((s.nomes || [])[0] || "").split(" ")[0])}!</p></header>
      <div class="painel jogos5-box"></div></section>`);
    const box = document.querySelector(".jogos5-box");
    P.jogosEspera.abrir(box, { turma: s.turma, serie: s.serie, todos: true, ganhar: () => {}, recordes, eu: ids, nome: (s.nomes || []).map(n => (n || "").split(" ")[0]).join(" e "),
      avatar: (s.avatares || [])[0] || null,
      salvarRecorde: (id, v) => refs.forEach((r, i) => r.set({ alunoId: ids[i], turma: s.turma, recordes: { [id]: v } }, { merge: true }).catch(() => {})) });
  }

  // traz da nuvem o que o aluno já fez (espera no máximo 4 segundos)
  async function restaurarNuvem(aid) {
    const s = sess.get(); if (!s || !s.nuvem || !P.nuvem || !P.nuvem.pronto) return;
    await Promise.race([P.nuvem.restaurar(aid).catch(e => console.warn(e)), new Promise(ok => setTimeout(ok, 4000))]);
  }

  /* 🔁 Revisão: quais missões a turma estudou (para a Revisão mostrar só elas). Ordem: o que o painel gravou hoje
     (config/hoje_<turma>.revisa, no ▶️ Iniciar a aula) → o plano da turma (config/plano_<turma>.revisa) → o cronograma
     do catálogo (missões com data até hoje). Sem nada: mostra todas. */
  let _rvCache = { k: "", t: 0, v: null };
  async function carregarRevisa(s) {
    if (!s || !s.turma) { P.revisaAtual = null; return; }
    if (_rvCache.k === s.turma && Date.now() - _rvCache.t < 120000) { P.revisaAtual = _rvCache.v; return; }
    let v = null;
    if (s.nuvem && P.nuvem && P.nuvem.pronto) {
      try {
        const db = P.nuvem.db(), hoje = P.nuvem.hoje();
        const [h, pl] = await Promise.race([Promise.all([db.collection("config").doc("hoje_" + s.turma).get(), db.collection("config").doc("plano_" + s.turma).get()]), new Promise((_, no) => setTimeout(() => no(new Error("tempo")), 4000))]);
        const hd = h.exists ? h.data() : {}, pd = pl.exists ? pl.data() : {};
        if (hd.dia === hoje && Array.isArray(hd.revisa) && hd.revisa.length) v = hd.revisa;
        else if (Array.isArray(pd.revisa) && pd.revisa.length) v = pd.revisa;
      } catch (e) {}
    }
    if (!v) { const t = turma(s.turma), hj = (P.nuvem && P.nuvem.hoje) ? P.nuvem.hoje() : new Date().toISOString().slice(0, 10);
      const ms = t && t.missoes4 && P.ehLegado() ? [...new Set(Object.entries(t.missoes4).filter(([d]) => d <= hj).map(([, m]) => m))].filter(m => /^m\d+$/.test(m)) : [];
      v = ms.length ? ms : null; }
    _rvCache = { k: s.turma, t: Date.now(), v }; P.revisaAtual = v;
  }
  P.carregarRevisa = carregarRevisa;

  /* 📝 Atividade de recuperação (15/11/2026): o professor libera por aluno no painel (📝 Prova › Atividade de recuperação).
     config/prova_<turma>: recAtv = [alunoIds liberados], recMissoes = missões que a turma estudou (as únicas que entram). */
  async function carregarRec(s) {
    P.recLiberada = false; P.recMissoes = null;
    if (!s || !s.turma || !s.nuvem || !P.nuvem || !P.nuvem.pronto) return;
    try {
      const sn = await Promise.race([(await P.carregarPeriodo(), P.nuvem.db().collection("config").doc(P.docProva(s.turma)).get()), new Promise((_, no) => setTimeout(() => no(new Error("tempo")), 4000))]);
      const d = sn.exists ? sn.data() : {}, ids = s.alunoIds || [];
      P.recLiberada = ids.length > 0 && ids.every(id => (d.recAtv || []).includes(id));
      P.recMissoes = Array.isArray(d.recMissoes) && d.recMissoes.length ? d.recMissoes : null;
    } catch (e) {}
  }
  P.carregarRec = carregarRec;
  /* Nota da atividade de recuperação (0 a 10): cada atividade vale 1 ponto se sair certa de primeira; cada erro tira 0,25
     (mínimo 0,25 para quem concluiu); não feita = 0. Na recuperação não há dica nem resolução comentada. */
  P.notaRecuperacao = function (aid) {
    const C = P.conteudo[aid]; if (!C || !C.missoes.some(m => m.id === "rc")) return null;
    const { pages } = montarMissao(aid, "rc"), prog = getProg(aid);
    const ats = pages.filter(p => p.tipo === "missao").flatMap(p => p.atividades).filter(a => !(P.tipos[a.tipo] || {}).semStatus);
    if (!ats.length) return null;
    let soma = 0, feitas = 0;
    ats.forEach(a => { const st = prog.atv[a.id]; if (st && (st.status === "certo" || st.status === "ajuda")) { feitas++; soma += Math.max(0.25, 1 - 0.25 * (st.tentativas || 0)); } });
    return { nota: Math.round(100 * soma / ats.length) / 10, feitas, total: ats.length };
  };

  /* -------- página de missão -------- */
  async function telaMissao(aid, mid, pid) {
    const s = sess.get(); const a = apostila(aid); if (!a) return telaInicio();
    if (!s) return telaSerie(a.serie, "#/missao/" + aid + "/" + mid);
    // 🎒 agregado incluído na aula de uma turma: a apostila da aula dela abre (mesmo sendo de outra série) e a trava de uma missão por vez não vale
    const hAG = P.agEh(s) && P.trava ? await P.trava.hoje(s).catch(() => null) : null, naAulaAG = !!(hAG && (hAG.aid === aid || hAG.aid === a.base));
    if (s.serie !== a.serie && (s.serie !== "5" || P.agEh(s)) && !naAulaAG) { toast("Esta apostila é de outra série."); location.hash = "#/apostilas"; return; }   // 🎒 o 5º ano faz a apostila da turma em que está assistindo à aula (25/11/2026); nos Agregados, só a da série dele
    await carregar(aid);
    await restaurarNuvem(aid);
    // 🎒 Agregados: uma missão por vez (a que começou e ainda não terminou o Básico)
    if (P.agEh(s) && mid !== "rc" && !naAulaAG) { const st0 = statusMissao(aid, mid);
      if (!(st0.basico[0] > 0 && !st0.basicoOk)) { const ab = await missaoAbertaAG(s);
        if (ab && (ab.aid !== aid || ab.mid !== mid)) { toast(`🔒 Termine primeiro o Básico da ${ab.titulo.replace(/ –.*/, "")}. Depois você escolhe a próxima.`); location.replace(`#/missao/${ab.aid}/${ab.mid}`); return; } } }
    if (mid === "rv") await carregarRevisa(s);
    if (mid === "rc") await carregarRec(s);
    modoTrilha(a);
    const { m, pages } = montarMissao(aid, mid);
    if (!pages.length) return telaApostila(aid);
    const idx = Math.max(0, pages.findIndex(p => p.id === pid));
    const pg = pages[idx];
    const se = serie(a.serie);
    const prog = getProg(aid);
    if (pg.tipo === "leitura" && !prog.visitas[mid + "/" + pg.id]) { prog.visitas[mid + "/" + pg.id] = Date.now(); setProg(aid, prog); }
    const st = statusMissao(aid, mid);
    // 🔒 trilha em sequência: só com aluno logado e tarefas abertas (fora do horário ele continua podendo ler tudo)
    let travaPre = { aberta: true };
    if (P.trava) { try { travaPre = await P.trava.estado(s, mid); } catch (e) { travaPre = { aberta: true }; } }
    const seq = !!(s.nuvem && travaPre.aberta);
    /* 🌟 Modo Helena (25/11/2026): sozinha, a missão vira a "Trilha da <nome>" (cartas de um toque); em dupla, a carta da vez
       aparece em cada etapa de tarefas (js/helena.js). Só com tarefas abertas e quando a missão tem cartas. */
    let hz = null;
    if (P.helena && s.nuvem && travaPre.aberta && P.helena.temCartas(aid, mid)) { try { hz = await P.helena.estado(s); } catch (e) { hz = null; } }
    if (hz && hz.solo) { barra(); return P.helena.telaSolo({ mount, aid, mid, m, hz, apostilaHref: `#/apostila/${aid}` }); }
    if (seq) { const b = bloqueioPagina(pages, idx, mid, prog);
      if (b) { toast(`🔒 Primeiro termine “${b.rotulo}”. A trilha abre uma etapa de cada vez.`); location.replace(`#/missao/${aid}/${mid}/${b.id}`); return; } }
    const info = () => { const x = statusMissao(aid, mid); return `<span class="tb-mis">${esc(m.icone)} ${esc(m.titulo.replace(/ –.*/, ""))}</span><span class="tb-prog">🟢 ${x.basico[0]}/${x.basico[1]}</span>`; };
    barra(info());
    const navItem = (p, i) => {
      const done = paginaFeita(p, mid, prog);
      if (seq && bloqueioPagina(pages, i, mid, prog)) return `<li class="trancada${p.sub ? " mn-sub" : ""}" data-pg="${p.id}"><span class="mn-tranca" title="Termine as etapas anteriores para abrir"><span aria-hidden="true">${p.icone}</span> <span class="mn-rot">${esc(p.rotulo)}</span> 🔒</span></li>`;
      return `<li class="${done ? "ok" : ""}${p.sub ? " mn-sub" : ""}${p.tipo === "consulta" ? " mn-consulta" : ""}" data-pg="${p.id}"><a href="#/missao/${aid}/${mid}/${p.id}" class="${i === idx ? "atual" : ""}" ${i === idx ? 'aria-current="page"' : ""}>
        <span aria-hidden="true">${p.icone}</span> <span class="mn-rot">${esc(p.rotulo)}</span> ${done ? '<span class="feito" title="feito">✔</span>' : ""}</a></li>`;
    };
    trilhaAtual = { aid, mid, seq };
    const el = mount(`<section class="tela missao" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/apostila/${aid}">${esc(a.titulo)}</a> › ${esc(m.titulo.replace(/ –.*/, ""))}</nav>
      <div class="mis-layout">
        <aside class="mis-nav" aria-label="Páginas da missão">
          <p class="mn-tit">${esc(m.icone)} ${esc(m.titulo)}</p>
          <div class="mn-xp" id="mn-xp"></div>
          <ol class="mn-trilha">${pages.map(navItem).join("")}</ol>
          <div class="mn-status" id="mn-status"></div>
        </aside>
        <article class="mis-pag">
          <header class="pag-cab"><p class="pag-mis">${esc(m.titulo)}</p><h1>${pg.icone} ${esc(pg.rotulo)}</h1>
            ${idx === 0 && m.objetivo ? `<p class="objetivo"><strong>Objetivo:</strong> ${m.objetivo}</p>` : ""}</header>
          <div id="pag-corpo"></div>
          <div id="banner-ok"></div>
          <nav class="pag-nav">${idx > 0 ? `<a class="btn btn-sec" href="#/missao/${aid}/${mid}/${pages[idx - 1].id}">← ${esc(pages[idx - 1].rotulo)}</a>` : `<a class="btn btn-sec" href="#/apostila/${aid}">← Missões</a>`}
            ${idx < pages.length - 1 ? (seq && bloqueioPagina(pages, idx + 1, mid, prog) && pages[idx + 1].id !== "relatorio"
              ? `<button type="button" class="btn btn-tranca" id="pag-prox" data-trancado="1" data-pg="${pages[idx + 1].id}" disabled>🔒 ${esc(pages[idx + 1].rotulo)}</button>`
              : `<a class="btn" id="pag-prox" href="#/missao/${aid}/${mid}/${pages[idx + 1].id}">${esc(pages[idx + 1].rotulo)} →</a>`) : `<a class="btn" href="#/apostila/${aid}">Voltar às missões ✔</a>`}</nav>
          ${seq && idx < pages.length - 1 && bloqueioPagina(pages, idx + 1, mid, prog) && pages[idx + 1].id !== "relatorio" ? (() => { const f = faltandoNaPagina(pg, prog);
            return `<p class="pag-falta" id="pag-falta" role="note">🔒 A próxima etapa abre quando você terminar esta.${f.length ? ` Falta${f.length > 1 ? "m" : ""} <b>${f.length}</b> tarefa${f.length > 1 ? "s" : ""}: faça e toque em <b>✔ Verificar</b> em cada uma.` : ""}</p>`; })() : ""}
        </article>
      </div></section>`);
    const corpo = el.querySelector("#pag-corpo");
    atualizarTrilha(aid);
    if (pg.tipo === "relatorio") { el.classList.add("pg-rel"); window.scrollTo(0, 0); }
    // Trilha: antecipa a sequência da aula (rotina previsível, sem surpresas)
    if (pg.id === "comecar" && a.trilha) corpo.appendChild(h(`<div class="painel roteiro-hoje"><strong>📋 A aula de hoje, nesta ordem:</strong><ol>${pages.filter(p => !["relatorio"].includes(p.id) && p.tipo !== "consulta").map(p => `<li>${p.icone || ""} ${esc(p.rotulo)}${p.id === pg.id ? " <em>(você está aqui)</em>" : ""}${p.id === "desafio" || p.id === "turbo" || p.id === "lab" ? " <small>(se quiser, depois do Básico)</small>" : ""}</li>`).join("")}</ol></div>`));
    // ❓ gancho (modelo em espiral): um probleminha antes do texto, para o aluno ler com um motivo
    if (pg.id === "comecar" && pg.gancho) corpo.appendChild(h(`<div class="gancho" role="note"><p class="gancho-sup">❓ Pense nisso antes de ler</p>${pg.gancho.html || ""}<p class="gancho-pe">👇 A resposta está no texto abaixo. Leia procurando por ela!</p></div>`));
    if (pg.id === "comecar") corpo.appendChild(h(`<div class="leitura">${blocos(m.comecar, true)}</div>`));
    if (pg.id === "termos" && pg.tipo === "consulta") corpo.appendChild(albumFigurinhas(aid, mid));
    if (pg.id === "termos") corpo.appendChild(h(`<div class="glossario">${m.termos.map(t => `<details class="termo"><summary>${t.rotulo}</summary><p>${t.def}</p></details>`).join("")}</div>`));
    if (pg.id === "onde") corpo.appendChild(h(`<ul class="onde-uso">${m.ondeUso.itens.map(i => `<li>${i}</li>`).join("")}</ul>`));
    if (pg.tipo === "missao" && pg.id !== "pratica" && m.alertas.length) corpo.appendChild(h(`<div class="alerta" role="note">${m.alertas.map(x => `<p>⚠️ ${x}</p>`).join("")}</div>`));
    if (pg.tipo === "missao") corpo.appendChild(h(`<p class="nivel-info nivel-${pg.id}">${{ lembra: pg.icone === "🔍" ? "🔍 <strong>O que você já sabe?</strong>: um aquecimento para ver o que você já conhece. Valem pontos!" : "🔁 <strong>Lembra?</strong>: perguntas das missões passadas, para não esquecer. Valem pontos!", lab: a.trilha ? "♾️ <strong>Laboratório sem fim</strong>: se quiser, depois do Básico. Treine com calma, no seu ritmo: cada acerto vale XP." : "♾️ <strong>Laboratório sem fim</strong>: abre quando você termina as 3 etapas (🟢 Básico, 🟡 Desafio e 🔴 Turbo). Perguntas sem fim desta missão e das anteriores, e XP <strong>sem limite</strong>: acertos seguidos fazem o 🔥 combo subir (cada acerto vale até 30) e a cada 10 acertos é 🏁 +50. Chutar não compensa: leia com calma!", pratica: "🎮 <strong>Mão na massa</strong>: experimente antes de estudar! Todos fazem, e conta no Básico.", basico: "🟢 <strong>Básico</strong>: todos fazem. Vale 1,0 ponto e libera os jogos livres. As respostas estão no 💡 Para começar e no 📖 O que significa?." + ((apostila(aid) || {}).modelo === "espiral" ? ` 🎯 O visto sai quando você acerta pelo menos <strong>${(apostila(aid) || {}).trilha ? 50 : 70}%</strong> (errar menos antes de acertar). Dá para refazer: vale a melhor tentativa.` : ""), desafio: "🟡 <strong>Desafio</strong>: para quem terminou o Básico. Vale +0,25 e aumenta a sua nota do bimestre.", turbo: "🔴 <strong>Turbo</strong>: para quem terminou o Desafio. Vale mais +0,25 na nota do bimestre." }[pg.id]}</p>`));
    // 🔒 trava de horário: os textos ficam abertos; as tarefas só no dia e na hora da aula (ou liberadas pelo professor)
    let trava = { aberta: true };
    if (pg.tipo === "missao" || pg.tipo === "revisao") trava = travaPre;
    // 🏠 estudo em casa: cronômetro de 2 h por dia (começa na 1ª tarefa do dia) e vídeo da missão antes das tarefas
    let casaVideo = null;
    if (trava.casa) {
      if (!trava.ini) { try { trava.ini = await P.trava.casaIniciar(s, mid); } catch (e) { trava.ini = Date.now(); } }
      cronometroCasa(trava.ini + trava.lim);
      const vv = ((P.videosMissao || {})[a.base || aid] || {})[mid], vl = (Array.isArray(vv) ? vv : [vv]).filter(v => v && !v.curiosidade), vid0 = vl[vl.length - 1], vid = vid0 && (vid0.id || vid0); // 🏠 em casa: o vídeo longo (passo a passo), quando existir; o vídeo de curiosidade nunca é o obrigatório
      if (vid && /^[\w-]{11}$/.test(vid) && !trava.videoVisto) casaVideo = vid;
    }
    if (casaVideo) {
      const box = h(`<div class="painel casa-video"><p class="trava-tit">🎬 Primeiro, assista ao vídeo da missão</p>
        <p>As tarefas abrem quando o vídeo terminar. Assista até o fim, sem pular (pode pausar). Use fone ou o som do celular.</p>
        <div class="casa-player"><div id="casa-yt"></div></div><p class="ajuda" id="casa-vmsg"></p></div>`);
      corpo.appendChild(box);
      videoObrigatorio(box.querySelector("#casa-yt"), casaVideo, async () => { try { await P.trava.casaVideo(s, mid); } catch (e) {} toast("✅ Vídeo assistido! As tarefas foram abertas."); rota(); }, msg => { box.querySelector("#casa-vmsg").textContent = msg; });
    } else
    if (!trava.aberta && trava.repoFora) corpo.appendChild(h(`<div class="painel trava-aviso repo-aviso" role="note"><p class="trava-tit">🔒 Esta missão é feita na aula, com a turma</p>
      <p>🏠 O Prof. Welington Laignier liberou para você fazer <strong>de casa</strong> só estas missões (até ${new Date(trava.repoFora.ate).toLocaleDateString("pt-BR")}):</p>
      <p class="row-btns">${trava.repoFora.mids.map(x => `<a class="btn" href="#/missao/${aid}/${esc(x)}">🔓 ${esc(rotMis(aid, x))}</a>`).join("")}</p>
      <p>📖 Os textos desta missão ficam sempre abertos: <a href="#/missao/${aid}/${mid}/comecar">💡 Para começar</a>, <a href="#/missao/${aid}/${mid}/termos">📖 O que significa?</a> e <a href="#/missao/${aid}/${mid}/onde">🌎 Onde eu uso isso?</a>.</p></div>`));
    else
    if (!trava.aberta) corpo.appendChild(h(`<div class="painel trava-aviso" role="note"><p class="trava-tit">🔒 ${trava.encerrada ? "A aula de hoje já terminou" : trava.recFechada ? "A atividade de recuperação não está liberada para você" : trava.casaOutra ? "Hoje você já está em outra missão" : trava.casaFutura ? "Esta missão ainda não abriu" : trava.casaFim ? "Seu tempo de estudo de hoje acabou" : trava.espera ? "🚦 A turma está na Sala de espera" : trava.aguardando ? "Aguardando o professor iniciar a aula" : trava.fechada ? "As tarefas estão fechadas agora" : trava.so ? "Esta missão não está liberada para você hoje" : trava.hoje ? "Hoje a turma está em outra missão" : "As tarefas abrem na hora da sua aula"}</p>
      ${trava.recFechada ? "<p>📝 A recuperação abre só quando o professor libera para você. Enquanto isso, estude pelos resumos das missões.</p>" : trava.encerrada ? "<p>⏰ O horário da aula acabou e as tarefas fecharam. O que você fez ficou salvo.</p>" : trava.casaOutra ? `<p>📅 Neste bimestre, em casa, é <strong>uma missão por dia</strong>. Hoje a sua é a <strong>${esc(rotMis(aid, trava.casaOutra))}</strong>. Esta aqui você faz em outro dia (pode ler os textos à vontade).</p><p><a class="btn" href="#/missao/${aid}/${trava.casaOutra}">Ir para a ${esc(rotMis(aid, trava.casaOutra))} →</a></p>` : trava.casaFutura ? `<p>📅 Em casa, abre <strong>uma missão nova por semana</strong>. Esta abre na <strong>segunda-feira, ${esc(trava.casaFutura.slice(8, 10) + "/" + trava.casaFutura.slice(5, 7))}</strong>. Enquanto isso, você pode ler os textos à vontade e fazer as missões que já abriram.</p>` : trava.casaFim ? `<p>⏰ Você já usou as ${Math.round(trava.lim / 3600000)} horas de hoje. Volte amanhã para continuar: o seu progresso fica salvo.</p>` : trava.espera ? `<p>🏁 As tarefas abrem quando o professor der a largada, para todo mundo começar junto. Enquanto isso, vá para a Sala de espera: lá tem jogos que dão pontos!</p><p><a class="btn" href="#/espera">🚦 Ir para a Sala de espera →</a></p>` : trava.aguardando ? "<p>⏳ As tarefas abrem quando o professor iniciar a aula. Enquanto isso, leia os textos da missão. Esta página se atualiza sozinha.</p>" : trava.fechada ? "<p>O professor fechou as tarefas desta turma por enquanto.</p>" : trava.so ? `<p>🔓 O professor liberou para você a <strong>${esc(rotMis(aid, trava.so))}</strong>${trava.hoje ? ` e a missão de hoje da turma (<strong>${esc(trava.hoje.titulo || rotMis(aid, trava.hoje.mid))}</strong>)` : ""}. Faça essa missão primeiro.</p><p><a class="btn" href="#/missao/${aid}/${trava.so}">Ir para a ${esc(rotMis(aid, trava.so))} →</a>${trava.hoje ? ` <a class="btn btn-sec" href="#/missao/${aid}/${trava.hoje.mid}">Ir para a missão de hoje →</a>` : ""}</p>` : trava.hoje ? `<p>📌 A missão de hoje é a <strong>${esc(trava.hoje.titulo || rotMis(aid, trava.hoje.mid))}</strong>. <a class="btn" href="#/missao/${aid}/${trava.hoje.mid}">Ir para a missão de hoje →</a></p>` : `<p>Você pode fazer as tarefas no dia e na hora da aula:</p><ul>${(trava.horarios || []).map(x => `<li><strong>${esc(x)}</strong></li>`).join("")}</ul>`}
      <p>📖 Enquanto isso, pode estudar à vontade: <a href="#/missao/${aid}/${mid}/comecar">💡 Para começar</a>, <a href="#/missao/${aid}/${mid}/termos">📖 O que significa?</a> e <a href="#/missao/${aid}/${mid}/onde">🌎 Onde eu uso isso?</a> ficam sempre abertos.</p>
      <p class="ajuda">Precisa fazer fora do horário (faltou, reposição, estuda em casa)? Peça ao professor para liberar.</p></div>`));
    else (pg.atividades || []).forEach((at, i) => corpo.appendChild(cartaoAtividade(aid, mid, at, i, () => { barra(info()); atualizarStatus(); })));
    if (hz && hz.dupla && trava.aberta && !casaVideo) try { P.helena.naPagina({ aid, mid, pages, pg, hz, aoFechar: () => { barra(info()); atualizarTrilha(aid); } }); } catch (e) { console.warn("vez da helena", e); }
    // 🔌 em casa: vídeo de curiosidade da missão (opcional, depois das tarefas), quando existir (17/11/2026)
    if (trava.casa && trava.aberta) try {
      const vv = ((P.videosMissao || {})[a.base || aid] || {})[mid];
      (Array.isArray(vv) ? vv : []).filter(v => v && v.curiosidade && /^[\w-]{11}$/.test(v.id)).forEach(v => corpo.appendChild(h(`<details class="painel casa-video"><summary class="trava-tit">${esc(v.nome || "🎬 Curiosidade")} <small>(vídeo extra, opcional)</small></summary>
        <p>${esc(v.sub || "Um vídeo curtinho para saber mais sobre o assunto da missão.")} Use fone ou o som do celular.</p>
        <div class="casa-player"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1" title="${esc(v.nome || "Curiosidade")}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0"></iframe></div></details>`)));
    } catch (e) { console.warn(e); }
    // ⏳ esperando o professor iniciar a aula: confere a cada 20 s e abre sozinho, sem o aluno recarregar
    if (!trava.aberta && (trava.aguardando || trava.espera) && P.trava) {
      const hashAgora = location.hash;
      const vigia = setInterval(async () => {
        if (location.hash !== hashAgora || !document.body.contains(corpo)) { clearInterval(vigia); return; }
        try { P.trava.limpar(); const e = await P.trava.estado(sess.get(), mid); if (e.aberta || !(e.aguardando || e.espera)) { clearInterval(vigia); rota(); } } catch (x) {}
      }, 20000);
    }
    if (pg.tipo === "relatorio") corpo.appendChild(relatorio(aid, mid, pages));
    if (pg.id !== "termos") try { ligarTermos(el, (P.conteudo[aid].missoes || []).flatMap(x => x.termos || [])); } catch (e) { console.warn("termos", e); }
    const figs = figurasDaPagina(aid, mid, pg.id, pages.map(p => p.id));
    if (figs.length) {
      const leit = corpo.querySelector(".leitura, .glossario, .onde-uso");
      if (leit && pg.id === "comecar") colocarFiguras(leit, figs, [...leit.children], "bloco");
      else if (corpo.querySelector(".atv")) colocarFiguras(corpo, figs, [...corpo.querySelectorAll(".atv")], "cartao");
      else colocarFiguras(corpo, figs, [], "bloco");
    }
    // 🎯 terminou o Básico, mas abaixo do mínimo: mostra o que refazer (vale a melhor tentativa)
    function bannerDominio(x) {
      const lista = x.fracas.slice().sort((a, b) => a.pt - b.pt).slice(0, 6).map(f => `<li><a href="#/missao/${aid}/${mid}/${f.pg}">${esc(f.titulo || "tarefa")}</a> <small>(${Math.round(f.pt * 100)}%)</small></li>`).join("");
      return `<div class="banner-concluida banner-dominio" role="status"><p class="bc-tit">🎯 Quase lá! Básico com ${Math.round(x.aprov * 100)}%</p>
        <p>Para ganhar o <b>✔ visto</b>, chegue a <b>${Math.round(x.limiar * 100)}%</b>. Refaça (↺ Refazer) estas tarefas com calma; <b>vale a sua melhor tentativa</b>:</p><ul class="bd-lista">${lista}</ul></div>`;
    }
    function bannerNivel(x) {
      const tem = id => pages.some(p => p.id === id);
      const fez = k => x[k][1] > 0 && x[k][0] === x[k][1];
      const ir = (id, txt, cls) => tem(id) ? `<a class="btn ${cls}" href="#/missao/${aid}/${mid}/${id}">${txt}</a>` : "";
      const resumo = `<a class="bc-link" href="#/missao/${aid}/${mid}/relatorio">📋 Ver o resumo do que fiz</a>`;
      if (fez("desafio") && (fez("turbo") || !tem("turbo")))
        return `<div class="banner-concluida" role="status"><p class="bc-tit">🏆 MISSÃO COMPLETA!</p>
          <p>Você fez o <strong>Básico</strong>, o <strong>Desafio</strong>${tem("turbo") ? " e o <strong>Turbo</strong>" : ""}. Esses pontos extras deixam a sua <strong>nota do bimestre maior</strong>.</p>
          <p>🎮 Agora é a sua vez de aproveitar os <strong>jogos livres</strong> no fim da aula. Ou, se faltou em alguma aula, faça o Básico daquela missão.</p>
          <div class="bc-bts"><a class="btn btn-sec" href="#/apostila/${aid}">📚 Ver todas as missões</a></div>${resumo}</div>`;
      if (fez("desafio"))
        return `<div class="banner-concluida" role="status"><p class="bc-tit">🟡 DESAFIO CONCLUÍDO! +0,25</p>
          <p>Falta só o <strong>Turbo</strong> para completar a missão e ganhar mais <strong>+0,25</strong> na nota do bimestre. Se preferir, você já pode ir para os <strong>jogos livres</strong>. 🎮</p>
          <div class="bc-bts">${ir("turbo", "🔴 Ir para o Turbo →", "btn-ok")}</div>${resumo}</div>`;
      return `<div class="banner-concluida" role="status"><p class="bc-tit">✅ BÁSICO CONCLUÍDO!</p>
        <p>Você terminou a parte <strong>obrigatória</strong> desta aula e garantiu <strong>1,0 ponto</strong>. Já ficou tudo <strong>registrado sozinho</strong> para o professor: não precisa chamar ninguém.</p>
        <p><strong>Agora você escolhe:</strong></p>
        <ul class="bc-opcoes"><li>🟡 <strong>Desafio</strong> (+0,25) e depois 🔴 <strong>Turbo</strong> (+0,25): quem faz todos termina o bimestre com a <strong>nota maior</strong>.</li>
        <li>🎮 <strong>Jogos livres</strong> no fim da aula: com o Básico pronto, você já tem direito.</li></ul>
        <div class="bc-bts">${ir("desafio", "🟡 Ir para o Desafio →", "btn-ok")}</div>${resumo}</div>`;
    }
    function atualizarStatus() {
      const x = statusMissao(aid, mid);
      const linha = (r, k) => x[k][1] ? `<li>${r} <strong>${x[k][0]}/${x[k][1]}</strong>${k === "basico" && x.aprov != null ? ` <span class="mn-aprov ${x.basicoOk ? "ok" : ""}" title="Aproveitamento do Básico: para o visto, ${Math.round(x.limiar * 100)}%">🎯 ${Math.round(x.aprov * 100)}%</span>` : ""}${(k === "basico" ? x.basicoOk : x[k][0] === x[k][1]) ? " ✔" : ""}</li>` : "";
      el.querySelector("#mn-status").innerHTML = `<ul>${linha("📖 Leitura", "leitura")}${linha("🟢 Básico", "basico")}${linha("🟡 Desafio", "desafio")}${linha("🔴 Turbo", "turbo")}${linha("✅ Revisão", "revisao")}</ul>`;
      const ok = x.basicoOk, feito = x.basico[1] && x.basico[0] === x.basico[1];
      el.querySelector("#banner-ok").innerHTML = ok && pg.tipo === "missao" ? bannerNivel(x) : feito && x.aprov != null && pg.tipo === "missao" ? bannerDominio(x) : "";
      const tb = document.querySelector(".tb-info"); if (tb) tb.classList.toggle("tb-ok", !!ok);
    }
    atualizarStatus();
  }

  /* ---------------- blocos de leitura ---------------- */
  function blocos(arr, enriquecer) {
    return (arr || []).map(b => {
      if (b.t === "p") return `<p>${b.h}</p>`;
      if (b.t === "lista") {
        const tag = b.ord ? "ol" : "ul";
        return `<${tag} class="lista">${b.itens.map(i => `<li style="margin-left:${i.nivel * 1.2}em">${i.h}</li>`).join("")}</${tag}>`;
      }
      if (b.t === "cena") return `<div class="cr-cena" data-cena-m="${String(b.id).replace(/[^\w-]/g, "")}"></div>`;   // 🎬 cena em rolagem (js/cenas-missao.js)
      if (b.t === "tabela") {
        // tabela de 3 colunas vira cartões, para leitura mais visual
        if (enriquecer && b.cab.length === 3 && b.linhas.length <= 7 && b.linhas.every(l => l.length === 3)) {
          return `<div class="cartoes-leitura" data-cab="${String(b.cab.join(" ")).replace(/<[^>]+>/g, "").replace(/"/g, "&quot;")}">${b.linhas.map(l => `<div class="cl"><h3>${l[0]}</h3><p>${l[1]}</p><p class="cl-ex"><span>${b.cab[2]}:</span> ${l[2]}</p></div>`).join("")}</div>`;
        }
        return `<div class="tabela-wrap"><table><thead><tr>${b.cab.map(c => `<th scope="col">${c}</th>`).join("")}</tr></thead>
          <tbody>${b.linhas.map(l => `<tr>${l.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      }
      return "";
    }).join("");
  }
  P.blocos = blocos;

  /* ============================================================
     CARTÃO DE ATIVIDADE (estrutura comum)
     ============================================================ */
  const NIVEL = { basico: ["🟢", "Básico"], desafio: ["🟡", "Desafio"], turbo: ["🔴", "Turbo"], bonus: ["⭐", "Bônus"], treino: ["🔁", "Treino"], revisao: ["✅", "Revisão"] };
  /* 🔲 modal simples (abre por cima da página, fecha com o botão ou com Esc) */
  function modal(titulo, html, cls) {
    const d = h(`<dialog class="pp-dlg ${cls || ""}"><form method="dialog"><h2>${titulo}</h2><div class="modal-corpo">${html}</div><div class="row-btns"><button class="btn" value="x">Fechar</button></div></form></dialog>`);
    document.body.appendChild(d); d.showModal(); d.addEventListener("close", () => d.remove());
    d.addEventListener("click", e => { if (e.target === d) d.close(); });
    return d;
  }
  // ✅ só para o professor: na 👀 visualização do professor e com o login de professor ativo neste navegador
  let profOk = null;
  function professorLogado() {
    if (profOk) return profOk;
    const N = P.nuvem; if (!N || !N.pronto || !N.app) return Promise.resolve(false);
    return profOk = (async () => { try { await N.app(0).pronto; const a = N.auth(); await new Promise(ok => { const x = a.onAuthStateChanged(() => { x(); ok(); }); });
      const u = a.currentUser; return !!(u && !u.isAnonymous && u.email === N.EMAIL_PROFESSOR); } catch (e) { return false; } })();
  }
  // 💬 explicação breve para o professor explicar à turma: o texto "prof" da atividade (quando existe) ou, senão,
  // a resolução comentada, as dicas e os termos da missão que aparecem na atividade (do "O que significa?")
  function explicacaoProf(at, termos, aid, mid) {
    const sem = x => String(x || "").replace(/<[^>]+>/g, " ");
    const partes = [], EX = ((P.explicProf || {})[aid] || {}), extra = (EX.at || {})[String(at.id || "").replace(/^.*?(?=m\d|pf)/, "")] || (EX.at || {})[at.id];
    const vfEx = ((EX.vf || {})[mid]) || [];
    if (extra && !at.prof) at = Object.assign({}, at, { prof: extra });
    if (at.prof) partes.push(`<p>${at.prof}</p>`);
    else if (at.explicacao) partes.push(`<p>${at.explicacao}</p>`);
    if (at.tipo === "vf") partes.push(`<ul class="aula-lista">${(at.itens || []).map((it, k) => `<li>${k + 1}. ${it.v ? "<strong>V</strong>" : "<strong>F</strong>"} — ${(vfEx[k] || "").replace(/^[VF]:\s*/, "") || it.prof || it.explic || (it.corrigir ? "o certo é: <strong>" + it.corrigir.certo + "</strong>" : it.v ? "está certo como está escrito" : "")}</li>`).join("")}</ul>`);
    if (at.tipo === "completar") partes.push(`<p>Leia o texto completo com a turma: <em>${String(at.texto || "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</em></p>`);
    if (at.tipo === "aberta" && !at.prof && !at.explicacao) partes.push(`<p>Não há uma única resposta. Peça 2 ou 3 exemplos em voz alta e mostre o que precisa aparecer${at.criterios ? ": " + at.criterios.map(c => sem(c)).join(" · ") : "."}${at.exemplo ? ` Exemplo de boa resposta: <strong>${at.exemplo}</strong>.` : ""}</p>`);
    if (at.tipo === "autoavaliacao") partes.push(`<p>Não tem resposta certa: é o aluno olhando para o que aprendeu. Se alguém marcar que ainda não sabe um item, mostre onde ele está na missão (Para começar ou O que significa?).</p>`);
    const porques = [].concat((at.perguntas || []).map(q => q.why && [q.p, q.why]), (at.itens || []).map(i => i && i.why && [i.t, i.why]), (at.opcoes || []).map(o => o && o.why && [o.t, o.why])).filter(Boolean);
    if (porques.length && at.tipo !== "vf") partes.push(`<p><strong>Por quê:</strong></p><ul class="aula-lista">${porques.map(([q, w]) => `<li>${sem(q)} → ${w}</li>`).join("")}</ul>`);
    const dicas = (at.dicas || []).concat(at.tipo === "tabela" ? (at.linhas || []).flatMap(l => l.filter(c => c && typeof c === "object" && c.dica).map(c => c.dica)) : []);
    if (dicas.length && !at.prof) partes.push(`<p><strong>Pistas para dar, uma de cada vez:</strong></p><ul class="aula-lista">${[...new Set(dicas)].map(d => `<li>${d}</li>`).join("")}</ul>`);
    const txt = norm(sem(JSON.stringify(at)));
    const ts = (termos || []).filter(t => { const b = norm(String(t.termo || "").replace(/\s*\(.*?\)\s*/g, " ").trim()); return b.length > 1 && new RegExp(`(^|[^a-z0-9])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(txt); }).slice(0, 4);
    if (ts.length) partes.push(`<p><strong>Termos para relembrar com a turma:</strong></p><ul class="aula-lista">${ts.map(t => `<li>${t.rotulo}: ${t.def}</li>`).join("")}</ul>`);
    return partes.join("") || `<p>Mostre na tela, junto com a turma, o primeiro item resolvido e peça que eles façam o resto.</p>`;
  }
  P.explicacaoProf = explicacaoProf;
  function botaoRespostaProf(el, at, termos, aid, mid) {
    const s = sess.get(); if (!s || !s.prof || !P.aula || !P.aula.resposta) return;
    professorLogado().then(ok => { if (!ok) return;
      const b = h(`<button type="button" class="btn btn-peq atv-resp-prof" title="Só você vê este botão">✅ Resposta</button>`);
      el.querySelector(".atv-cab").appendChild(b);
      b.onclick = () => { const x = P.aula.resposta(at);
        modal(`✅ ${md(at.titulo || "Resposta")}`, `<h3 class="modal-sub">✅ Resposta</h3>${x.html}
          <h3 class="modal-sub">💬 Como explicar para a turma</h3><div class="modal-explic">${explicacaoProf(at, termos, aid, mid)}</div>
          <p class="ajuda">${x.auto ? "✔ O portal confere sozinho." : "👀 Esta você confere."} Só você vê este botão: os alunos não têm.</p>`, "modal-resp"); };
    });
  }

  /* 📖 palavra explicada: os termos do "O que significa?" viram botõezinhos nos textos; tocou, abre o significado num modal */
  /* 🖼️ 20/11/2026: imagem da palavra difícil (desenho em linha clara ou foto real com crédito), na mesma janela do significado.
     Vem de dados/termos-imagens.js (gerado por ferramentas/ilustracoes_2026/termos.py). Sem imagem para o termo = só o texto. */
  P.termoImg = function (...nomes) {
    const T = window.TERMOS_IMG; if (!T) return "";
    const k = s => String(s || "").replace(/<[^>]+>/g, "").replace(/\s*\(.*?\)\s*/g, " ").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const n of nomes) {
      const b = k(n); if (!b) continue;
      const x = T[b] || T[b.split(/\s*[\/:]\s*/)[0]] || T[b.replace(/s$/, "")];
      if (!x) continue;
      if (x.foto) return `<figure class="termo-img foto"><img src="${x.foto}" alt="${esc(x.alt)}" loading="lazy"><figcaption>${esc(x.credito || "")}</figcaption></figure>`;
      return `<figure class="termo-img">${x.html}</figure>`;
    }
    return "";
  };
  function ligarTermos(raiz, termos) {
    if (!raiz || !termos || !termos.length) return;
    const base = t => String(t.termo || "").replace(/\s*\(.*?\)\s*/g, " ").trim();
    const lista = termos.map(t => ({ t, b: base(t) })).filter(x => x.b.length > 1).sort((a, b) => b.b.length - a.b.length);
    const usados = new Set();
    const zonas = raiz.querySelectorAll(".leitura, .onde-uso, .atv-enun, .alerta, .objetivo, .atv-info .atv-corpo");
    zonas.forEach(z => {
      const walker = document.createTreeWalker(z, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest("a, button, input, textarea, select, label, .termo-link, svg, code") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nos = []; while (walker.nextNode()) nos.push(walker.currentNode);
      nos.forEach(no => {
        for (const x of lista) {
          if (usados.has(x.b)) continue;
          const esc2 = x.b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const re = new RegExp(`(^|[^\\p{L}\\p{N}])(${esc2})(?![\\p{L}\\p{N}])`, "iu");
          const m = re.exec(no.nodeValue); if (!m) continue;
          const ini = m.index + m[1].length, fim = ini + m[2].length;
          const depois = no.splitText(ini); depois.splitText(fim - ini);
          const b = document.createElement("button"); b.type = "button"; b.className = "termo-link"; b.textContent = depois.nodeValue; b.title = "Toque para ver o que significa";
          b.onclick = () => modal(`📖 ${x.t.rotulo}`, `${P.termoImg(x.t.termo, x.t.rotulo)}<p class="modal-def">${x.t.def}</p><p class="ajuda">Está no “O que significa?” desta apostila.</p>`, "modal-termo");
          depois.replaceWith(b); usados.add(x.b); break;
        }
      });
    });
  }

  /* 🔎 18/11/2026: tarefa sem enunciado ganha uma instrução padrão do tipo, para o aluno nunca ficar sem saber o que fazer */
  function INSTRUCAO_PADRAO(at) {
    if (at.tipo === "ordenar") return "<p>Coloque na ordem certa, do 1º ao último: arraste os itens ou use as setas ▲▼. Depois clique em <strong>Verificar</strong>.</p>";
    if (at.tipo === "classificar" && at.modo === "tabela") return "<p>Leia cada linha e clique na resposta certa. Depois clique em <strong>Verificar</strong>.</p>";
    if (at.tipo === "tabela") return "<p>Complete cada linha da tabela: digite a resposta na caixa ou escolha na lista. Depois clique em <strong>Verificar</strong>.</p>";
    return "";
  }
  /* 📖 Aviso de leitura (20/11/2026; trocado em 21/11/2026, pedido do professor): antes era um cronômetro (tempo mínimo de leitura);
     agora é o mesmo aviso com um botão OK: a tarefa libera quando o aluno toca em OK. */
  function tempoDeLeitura(el, pronto) {
    // 👌 21/11/2026 (professor): no lugar do cronômetro, um botão OK já disponível. O aviso continua no meio da tarefa
    // ("Primeiro, leia o pedido com calma") e a tarefa só libera quando o aluno toca em OK: ele para e lê, sem esperar relógio.
    const txt = (el.querySelector(".atv-cab h2") || {}).textContent + " " + ((el.querySelector(".atv-enun") || {}).textContent || "") + " " + ((el.querySelector(".atv-corpo") || {}).textContent || "");
    const pal = txt.split(/\s+/).filter(w => w.length > 1).length;
    if (pal < 6) return;   // tarefa curtinha: sem aviso
    el.classList.add("atv-lendo");
    const tag = h(`<div class="atv-ler" role="status">📖 Leia o pedido com calma e toque em <b>OK</b></div>`); el.querySelector(".atv-cab").after(tag);
    const corpo = el.querySelector(".atv-corpo"), meio = corpo ? h(`<div class="atv-ler-meio"><div><span>📖</span><b>Primeiro, leia o pedido com calma</b><small>Leu? Então toque em OK para começar.</small><button type="button" class="btn atv-ler-ok">👌 OK, li o pedido</button></div></div>`) : null;
    const libera = () => { if (!el.classList.contains("atv-lendo")) return; el.classList.remove("atv-lendo"); tag.remove(); if (meio) meio.remove(); pronto && pronto(); };
    if (meio) { el.appendChild(meio); const pos = () => { meio.style.top = corpo.offsetTop + "px"; meio.style.height = corpo.offsetHeight + "px"; }; pos(); requestAnimationFrame(pos); setTimeout(pos, 400); meio.querySelector(".atv-ler-ok").onclick = libera; }
    else { const b = h(`<button type="button" class="btn atv-ler-ok">👌 OK</button>`); b.onclick = libera; tag.appendChild(b); }
  }
  /* 🤔 três erros rápidos seguidos: a tarefa pausa uns segundos e mostra onde reler a explicação */
  function pausaChute(el, aid, mid) {
    if (el.querySelector(".atv-pausa")) return;
    const seg = 8, ov = h(`<div class="atv-pausa" role="alert"><div><p class="atv-pausa-t">🤔 Parece que você está chutando…</p>
      <p>Leia de novo com calma 😉 Chutar não dá pontos: só vale ponto inteiro quem acerta de primeira.</p>
      <p><a class="btn btn-sec" href="#/missao/${aid}/${mid}/comecar">📖 Reler a explicação da missão</a></p><p class="atv-pausa-s">Volte a responder em <b>${seg}</b>s</p></div></div>`);
    el.appendChild(ov); let r = seg; const iv = setInterval(() => { r--; const b = ov.querySelector("b"); if (b) b.textContent = r; if (r <= 0 || !el.isConnected) { clearInterval(iv); ov.remove(); } }, 1000);
  }
  function cartaoAtividade(aid, mid, at, i, onChange) {
    const T = P.tipos[at.tipo];
    if (!T) return h(`<div class="atv erro">Tipo de atividade desconhecido: ${esc(at.tipo)}</div>`);
    if (T.semStatus) {
      const box = h(`<section class="atv atv-info"><header class="atv-cab"><h2>${md(at.titulo || "")}</h2></header><div class="atv-corpo"></div></section>`);
      T.render(box.querySelector(".atv-corpo"), at, {});
      return box;
    }
    const prog = getProg(aid);
    const st = prog.atv[at.id] = prog.atv[at.id] || { tentativas: 0, dicas: 0, r2: 1 };   // r2: regra contra o chute (20/11/2026)
    if (!st.ini && !st.status) st.ini = Date.now();   // 📄 relatório do aluno (18/11/2026): hora em que a tarefa apareceu para ele pela 1ª vez
    const s = sess.get();
    const auto = typeof T.auto === "function" ? T.auto(at) : T.auto;
    const corr = at.tipo === "vivi" ? "💬 sem certo nem errado" : at.professor ? "👨‍🏫 o professor confere" : auto ? "✔ correção automática" : "👨‍🏫 o professor confere";
    const vez = s && s.modo === "dupla" && ["basico", "desafio", "turbo"].includes(at.nivel) ? `<span class="vez">🎮 Vez de: <strong>${esc(curto(s, i % 2))}</strong> (o outro ajuda)</span>` : "";
    const el = h(`<section class="atv nivel-${at.nivel}" id="atv-${at.id}"${at.opcional ? ' data-opc="1"' : ""}${ENSINA_COPIAR.test(JSON.stringify(at)) ? ' data-libera-copiar="1"' : ""} aria-labelledby="t-${at.id}">
      <header class="atv-cab"><span class="atv-nivel">${(NIVEL[at.nivel] || ["", ""])[0]} ${(NIVEL[at.nivel] || ["", ""])[1]}</span>
        <h2 id="t-${at.id}">${md(at.titulo || "")}</h2><span class="atv-corr">${corr}${at.opcional ? " · opcional" : ""}</span>${vez}</header>
      ${at.enunciado ? `<div class="atv-enun">${at.enunciado}</div>` : INSTRUCAO_PADRAO(at) ? `<div class="atv-enun">${INSTRUCAO_PADRAO(at)}</div>` : ""}
      <div class="atv-corpo"></div>
      <div class="atv-dicas" aria-live="polite"></div>
      <div class="atv-acoes">
        <button type="button" class="btn btn-ok" data-a="verificar">Verificar</button>
        <button type="button" class="btn btn-sec" data-a="dica" hidden>💡 Dica</button>
        <button type="button" class="btn btn-sec" data-a="resolucao" hidden>📘 Ver resolução comentada</button>
        <button type="button" class="btn btn-link" data-a="refazer" hidden>↺ Refazer</button>
        <span class="atv-status" aria-live="polite"></span>
      </div>
      <div class="atv-fb" role="status" aria-live="polite"></div>
    </section>`);
    botaoRespostaProf(el, at, ((P.conteudo[aid] || {}).missoes || []).find(x => x.id === mid)?.termos, aid, mid);
    const corpo = el.querySelector(".atv-corpo"), fb = el.querySelector(".atv-fb"), dicasEl = el.querySelector(".atv-dicas");
    const bV = el.querySelector('[data-a="verificar"]'), bD = el.querySelector('[data-a="dica"]'), bR = el.querySelector('[data-a="resolucao"]'), bRef = el.querySelector('[data-a="refazer"]');
    const statusEl = el.querySelector(".atv-status");
    const emRec = mid === "rc";   // 📝 recuperação: vale nota, então sem dica, sem resolução comentada e sem refazer
    const dicas = emRec ? [] : (at.dicas || []);

    const salvar = () => { const p = getProg(aid); p.atv[at.id] = st; setProg(aid, p); };
    const feedback = (kind, html) => { fb.innerHTML = html ? `<div class="fb fb-${kind}">${kind === "ok" ? "✔ " : kind === "erro" ? "✖ " : ""}${html}</div>` : ""; };
    const mostrarStatus = () => {
      const m = { certo: "✔ Concluída", ajuda: "✔ Concluída com ajuda", enviado: "📝 Enviada — o professor confere", feito: "✔ Feita" }[st.status] || "";
      statusEl.textContent = m; el.classList.toggle("concluida", !!st.status);
      bRef.hidden = !st.status || at.semRefazer || emRec;
    };
    const atualizarAjuda = () => {
      bD.hidden = !dicas.length || st.dicas >= dicas.length || !!st.status;
      bD.textContent = `💡 Dica ${Math.min(st.dicas + 1, dicas.length)} de ${dicas.length}`;
      dicasEl.innerHTML = dicas.slice(0, st.dicas).map((d, k) => `<p class="dica"><strong>Dica ${k + 1}:</strong> ${d}</p>`).join("");
      const liberou = st.tentativas >= 2 || (dicas.length > 0 && st.dicas >= dicas.length);
      bR.hidden = emRec || !!st.status || !ctx.resolver || !liberou;
    };
    const ctx = {
      at, st, el, corpo, salvar, feedback,
      sessao: s,
      verificar: null, resolver: null,
      concluir(status, msg) {
        st.status = (status === "certo" && (st.dicas > 0 || st.viuResolucao)) ? "ajuda" : status;
        st.quando = Date.now(); salvar(); mostrarStatus(); atualizarAjuda();
        // 🔥 sequência de acertos de primeira (a cada 3 seguidas, +20 XP)
        let fogo = ""; try { if (st.r2 && st.status === "certo" && !st.tentativas && P.podio && P.podio.sequencia) { const q = P.podio.sequencia(getProg(aid).atv);
          if (q.atual >= 2) fogo = ` <span class="atv-fogo">🔥 ${q.atual} de primeira seguidas!${q.atual % 3 === 0 && q.bonus <= 100 ? " +20 XP" : ""}</span>`; } } catch (e) {}
        if (msg !== false) feedback("ok", (msg || "Muito bem!") + fogo + (at.explicacao ? `<div class="explic">${at.explicacao}</div>` : ""));
        onChange && onChange();
      },
      errou(msg) {
        st.tentativas++;
        // 🤔 detector de chute (20/11/2026): erro em menos de 4 s desde a última ação conta como "chute"; 3 seguidos = pausa
        const ag = Date.now(), rapido = ag - (ctx._ult || ag - 99999) < 4000; ctx._ult = ag;
        if (rapido && !emRec && !(s && s.prof)) { st.chutes = (st.chutes || 0) + 1; ctx._seguidos = (ctx._seguidos || 0) + 1; } else ctx._seguidos = 0;
        salvar();
        if (ctx._seguidos >= 3) { ctx._seguidos = 0; pausaChute(el, aid, mid); }
        const ondeBt = !emRec && ehEspiral(aid, mid) && !["lab"].includes(at.tipo) ? ` <button type="button" class="btn btn-sec ver-onde">📖 Ver onde isso está explicado</button>` : "";
        feedback("erro", msg + (!emRec && st.tentativas >= 2 && (dicas.length || ctx.resolver) ? " <br><small>Se quiser, peça uma dica ou veja a resolução comentada.</small>" : " <br><small>Sua resposta foi mantida: ajuste e tente de novo.</small>") + ondeBt);
        const vo = fb.querySelector(".ver-onde"); if (vo) vo.onclick = () => { const f = ctx.foco; const txt = f ? [f.p, (f.opcoes || [])[f.certo], f.why, f.t].join(" ") : [at.titulo, at.enunciado, at.explicacao, JSON.stringify(at.itens || at.pares || at.perguntas || "")].join(" ");
          P.verOndeExplica(aid, (f && f.de) || at.de || mid, txt); };
        atualizarAjuda();
      },
      esconderVerificar() { bV.hidden = true; },
      mostrarVerificar() { bV.hidden = false; },
      reRender() { corpo.innerHTML = ""; T.render(corpo, at, ctx); }
    };
    bV.onclick = () => { if (ctx.verificar) ctx.verificar(); };
    bD.onclick = () => { st.dicas++; salvar(); atualizarAjuda(); };
    bR.onclick = () => { if (!ctx.resolver) return; st.viuResolucao = true; ctx.resolver(); ctx.concluir("ajuda", "Resolução comentada:"); };
    bRef.onclick = () => { const mel = Math.max(st.melhor || 0, st.status ? pontoAt(at, st) : 0); for (const k of Object.keys(st)) delete st[k]; if (mel) st.melhor = mel; st.tentativas = 0; st.dicas = 0; st.ini = Date.now(); salvar(); feedback("", ""); ctx.reRender(); mostrarStatus(); atualizarAjuda(); onChange && onChange(); };
    T.render(corpo, at, ctx);
    // ⌨️ resposta digitada: aviso de que aqui se digita (copiar e colar não funciona), menos nas tarefas que ensinam atalhos
    if (!el.dataset.liberaCopiar && corpo.querySelector("textarea, input[type=text], input:not([type])"))
      el.querySelector(".atv-cab").insertAdjacentHTML("beforeend", `<span class="atv-digite" title="O objetivo é treinar a digitação">⌨️ Aqui você digita: copiar e colar não funciona</span>`);
    telaCheiaSim(el, at, st, corpo);
    ctx._ult = Date.now();
    corpo.addEventListener("change", () => { ctx._ult = Date.now(); });
    corpo.addEventListener("click", e => { if (!(e.target && /^(INPUT|LABEL)$/.test(e.target.tagName))) ctx._ult = Date.now(); });   // depois de cada resposta, o relógio do chute recomeça
    // 📖 tempo mínimo de leitura (20/11/2026): só na 1ª vez, quando a tarefa aparece na tela; já com folga para quem lê rápido
    if (!st.status && !st.leu && !emRec && !(s && s.prof) && !/^(lab|show)$/.test(at.tipo)) tempoDeLeitura(   // 21/11/2026 (professor): o ⚡ show do Lembra? tem relógio próprio, a trava de leitura comia o tempo dele
      el, () => { st.leu = 1; ctx._ult = Date.now(); salvar(); });
    // 🤖 Bit (18/11/2026): qualquer tarefa com "robo" ganha o botão "Me ajuda, robô!", mesmo se o tipo dela não chama o Bit sozinho
    //    sem robô próprio, vale o robô padrão do tipo (js/robo-padrao.js, 18/11/2026)
    { const rb = at.robo || (P.roboPadrao && P.roboPadrao(at));
      if (rb && P.bitAjuda && !(corpo.nextElementSibling && corpo.nextElementSibling.classList.contains("ab-bit"))) P.bitAjuda(corpo, at.robo ? at : Object.assign({}, at, { robo: rb }), ctx); }
    el._ctx = ctx; // usado pelos testes automatizados
    if (!ctx.verificar) bV.hidden = true;
    if (st.status) { mostrarStatus(); if (at.explicacao && st.status !== "enviado") feedback("ok", "Você já concluiu esta atividade." + `<div class="explic">${at.explicacao}</div>`); }
    atualizarAjuda();
    return el;
  }

  /* ============================================================
     RESUMO DA MISSÃO (para print e registro no diário)
     ============================================================ */
  function relatorio(aid, mid, pages) {
    const s = sess.get(), prog = getProg(aid), a = apostila(aid), t = turma(s.turma);
    const m = P.conteudo[aid].missoes.find(x => x.id === mid);
    const x = statusMissao(aid, mid);
    const tempos = [];
    Object.keys(prog.visitas).forEach(k => { if (k.startsWith(mid + "/")) tempos.push(prog.visitas[k]); });
    const linhas = [];
    pages.forEach(pg => {
      if (pg.tipo === "leitura") linhas.push(`<li class="${prog.visitas[mid + "/" + pg.id] ? "r-ok" : ""}"><span class="r-ic">📖</span><span class="r-o">Leitura: ${esc(pg.rotulo)}</span><span class="r-s">${prog.visitas[mid + "/" + pg.id] ? "✔ lida" : "⬜ não aberta"}</span></li>`);
      (pg.atividades || []).forEach(at => {
        if ((P.tipos[at.tipo] || {}).semStatus) return;
        const st = prog.atv[at.id] || {};
        if (st.quando) tempos.push(st.quando);
        const sit = { certo: "✔ sem ajuda", ajuda: "✔ com ajuda", enviado: "📝 enviada — professor confere", feito: "✔ feita" }[st.status] || (at.opcional ? "— opcional" : "⬜ não feita");
        const tit = P.util.semTags(at.titulo || "").replace(/\s+/g, " ");
        const extra = [st.tentativas ? `${st.tentativas} erro${st.tentativas > 1 ? "s" : ""}` : "", st.dicas ? `${st.dicas} dica${st.dicas > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ");
        linhas.push(`<li class="${st.status ? "r-ok" : ""}"><span class="r-ic">${(NIVEL[at.nivel] || ["", ""])[0]}</span><span class="r-o">${esc(tit.length > 58 ? tit.slice(0, 56) + "…" : tit)}</span><span class="r-s">${sit}${extra ? `<small>${extra}</small>` : ""}</span></li>`);
      });
    });
    const agora = Date.now();
    const ini = tempos.length ? Math.min(...tempos) : agora, fim = tempos.length ? Math.max(...tempos) : agora;
    const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR").slice(0, 5);
    const okB = x.basicoOk;
    const base = [s.nomes.join("+"), s.turma, aid, mid, x.basico.join("/"), x.desafio.join("/"), x.turbo.join("/"), x.revisao.join("/"), new Date(fim).toDateString()].join("|");
    let hsh = 0; for (const ch of base) hsh = (hsh * 31 + ch.charCodeAt(0)) >>> 0;
    const codigo = hsh.toString(36).toUpperCase().padStart(6, "0").slice(-6);
    const nomesTxt = s.nomes.map((n, i) => esc(n) + (s.apelidos && s.apelidos[i] ? ` <span class="r-apel">“${esc(s.apelidos[i])}”</span>` : "")).join("<br>");
    const cont = (r, k) => x[k][1] ? `<div class="r-cont ${x[k][0] === x[k][1] ? "ok" : ""}"><span>${r}</span><strong>${x[k][0]}/${x[k][1]}</strong></div>` : "";
    const el = h(`<div class="rel-wrap">
      <div class="rel-instr nao-imprimir">${s.nuvem ? `<p>✅ <strong>Não precisa de print:</strong> o que você fez já vai sozinho para o painel do professor.</p>` : `<p>📸 <strong>Tire um print desta tela</strong> e envie ao professor: tecla <kbd>PrtSc</kbd> ou <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.</p>`}
        <button class="btn btn-sec btn-peq" type="button" id="rel-imp">🖨️ Imprimir</button></div>
      ${okB ? `<div class="rel-fim nao-imprimir"><div class="rel-fim-tx"><strong>🏁 Missão concluída!</strong><span>Você terminou o básico. Escolha o que fazer agora:</span></div>
        <div class="rel-fim-bts"><button class="btn rel-jogos" type="button" id="rel-jogos">🎮 Abrir a Sala de jogos</button><button class="btn btn-sec rel-sair" type="button" id="rel-sair" hidden>⛶ Sair da tela cheia</button></div></div>`
      : `<div class="rel-fim rel-fim-nao nao-imprimir"><div class="rel-fim-tx"><strong>🎮 Sala de jogos</strong><span>Ela abre quando você terminar o básico (${x.basico[0]} de ${x.basico[1]}). Falta pouco!</span></div></div>`}
      <section class="relatorio" id="relatorio" aria-label="Resumo da missão">
        <header class="r-cab"><div><p class="r-portal">💻 ${esc(cat().portal)}</p><p class="r-prof">${esc(cat().professor)}</p></div>
          <h2 class="r-tit">📋 Resumo da missão</h2>
          <div class="r-cod"><span>código de conferência</span><strong>${codigo}</strong></div></header>
        <div class="r-grid">
          <div><span>Aluno(s)</span><strong>${nomesTxt}</strong></div>
          <div><span>Turma</span><strong>${esc(t ? t.nome : s.turma)}</strong></div>
          <div><span>Data</span><strong>${new Date(fim).toLocaleDateString("pt-BR")}</strong></div>
          <div><span>Horário</span><strong>${hhmm(ini)} – ${hhmm(fim)}</strong></div>
          <div class="r-larga"><span>Missão</span><strong>${esc(m.icone)} ${esc(m.titulo)}</strong><small>${esc(a.titulo)}</small></div>
        </div>
        <div class="r-basico ${okB ? "ok" : "nao"}">${okB ? "✅ BÁSICO CONCLUÍDO" : `⏳ BÁSICO AINDA NÃO CONCLUÍDO (${x.basico[0]} de ${x.basico[1]})`}</div>
        <div class="r-conts">${cont("📖 Leitura", "leitura")}${cont("🟢 Básico", "basico")}${cont("🟡 Desafio", "desafio")}${cont("🔴 Turbo", "turbo")}${cont("✅ Revisão", "revisao")}</div>
        <h3 class="r-sub">O que foi feito</h3>
        <ol class="r-lista">${linhas.join("")}</ol>
        <p class="r-rod">Gerado em ${new Date(agora).toLocaleDateString("pt-BR")} às ${hhmm(agora)} · ${esc(cat().escola)} — ${esc(cat().cidade)} · ${esc(cat().professor)}</p>
      </section>
      ${okB ? `<div class="rel-fim rel-fim-baixo nao-imprimir"><div class="rel-fim-tx"><strong>🏁 Missão concluída!</strong><span>Você terminou o básico. Escolha o que fazer agora:</span></div>
        <div class="rel-fim-bts"><button class="btn rel-jogos" type="button">🎮 Abrir a Sala de jogos</button><button class="btn btn-sec rel-sair" type="button" hidden>⛶ Sair da tela cheia</button></div></div>`
      : `<div class="rel-fim rel-fim-nao rel-fim-baixo nao-imprimir"><div class="rel-fim-tx"><strong>🎮 Sala de jogos</strong><span>Ela abre quando você terminar o básico (${x.basico[0]} de ${x.basico[1]}). Falta pouco!</span></div></div>`}</div>`);
    // 🏁 fim da missão (25/11/2026, pedido do professor): quem terminou o básico abre a Sala de jogos ou sai da tela cheia para fechar
    // (26/11/2026) os mesmos botões aparecem em cima e embaixo do resumo; os de cima têm id, os de baixo só a classe
    const bjs = el.querySelectorAll(".rel-jogos"), bss = [...el.querySelectorAll(".rel-sair")];
    bjs.forEach(bj => { bj.onclick = () => { try { sessionStorage.setItem("jogos-liberados", s.turma + "|" + new Date().toDateString()); } catch (e) {} location.hash = "#/jogos"; }; });
    if (bss.length) { const pinta = () => { bss.forEach(b => { b.hidden = !emTelaCheia(); }); }, ouvir = () => { if (!bss[0].isConnected) return removeEventListener("fullscreenchange", ouvir); pinta(); };
      addEventListener("fullscreenchange", ouvir); pinta(); setTimeout(pinta, 300);
      // saída de propósito, com a missão concluída: o bloqueio da 🖥️ tela cheia não volta nem conta "saída" enquanto ele estiver nesta página
      bss.forEach(bs => { bs.onclick = () => { P.saidaFim = location.hash; try { (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()); } catch (e) {} }; }); }
    el.querySelector("#rel-imp").onclick = () => { document.body.classList.add("so-relatorio"); window.print(); setTimeout(() => document.body.classList.remove("so-relatorio"), 500); };
    return el;
  }

  /* ============================================================
     IMPRESSÃO
     ============================================================ */
  async function telaImprimir(aid) {
    const a = apostila(aid); if (!a) return telaInicio();
    { const ss = sess.get(); if (!(ss && ss.serie === a.serie) && !(await profLogado())) return ss ? telaRestrita() : telaSerie(a.serie, "#/imprimir/" + aid); }
    await carregar(aid);
    modoTrilha(a);
    const C = P.conteudo[aid];
    barra();
    const el = mount(`<section class="tela impressao">
      <div class="nao-imprimir painel"><p>Esta é a versão para imprimir ou salvar em PDF. Use o botão abaixo e escolha a impressora ou “Salvar como PDF”.</p>
        <div class="row-btns"><button class="btn" id="bp" type="button">🖨️ Imprimir / salvar PDF</button><a class="btn btn-sec" href="#/apostila/${aid}">← Voltar</a></div></div>
      <header class="imp-capa"><p>${esc(cat().portal)} · ${esc(cat().escola)} · ${esc(cat().cidade)}</p><h1>${esc(C.titulo)}</h1><p class="imp-prof">${esc(cat().professor)}</p>
        ${(P.ilustracoes[aid] || {}).mascote ? `<div class="imp-masc">${P.ilustracoes[aid].mascote}</div>` : ""}
        <table class="imp-id"><tr><td>Nome:</td><td class="linha"></td></tr><tr><td>Turma:</td><td class="linha"></td></tr></table></header>
      <div id="imp-corpo"></div>
      <footer class="imp-rodape">${esc(cat().portal)} · ${esc(cat().professor)} · ${esc(cat().escola)}</footer>
    </section>`);
    const corpo = el.querySelector("#imp-corpo");
    C.missoes.forEach(m => {
      const { pages } = montarMissao(aid, m.id);
      const sec = h(`<section class="imp-missao"><h2>${esc(m.icone)} ${esc(m.titulo)}</h2>${m.objetivo ? `<p><strong>Objetivo:</strong> ${m.objetivo}</p>` : ""}<p>📅 Data: ____/____</p></section>`);
      pages.forEach(pg => {
        let html = `<h3>${pg.icone} ${esc(pg.rotulo)}</h3>`;
        if (pg.id === "comecar") html += blocos(m.comecar);
        if (pg.id === "termos") html += `<dl class="imp-termos">${m.termos.map(t => `<dt>${t.rotulo}</dt><dd>${t.def}</dd>`).join("")}</dl>`;
        if (pg.id === "onde") html += `<ul>${m.ondeUso.itens.map(i => `<li>${i}</li>`).join("")}</ul>`;
        if (pg.tipo === "missao" && pg.id === "basico" && m.alertas.length) html += m.alertas.map(x => `<p class="imp-alerta">⚠️ ${x}</p>`).join("");
        (pg.atividades || []).forEach((at, k) => {
          if (at.id.endsWith("-termos")) return; // jogo digital; os termos já estão impressos acima
          const T = P.tipos[at.tipo];
          html += `<div class="imp-atv"><h4>${(NIVEL[at.nivel] || ["", ""])[0]} ${md(at.titulo || "")}</h4>${at.enunciado ? `<div>${at.enunciado}</div>` : ""}${T && T.imprimir ? T.imprimir(at) : ""}</div>`;
        });
        if (pg.tipo === "missao") html += `<p class="imp-carimbo">Carimbo do professor: ☐ ${pg.rotulo}</p>`;
        if (pg.tipo === "relatorio" || pg.id === "pratica") return; // simulação só existe na tela
        const bloco = h(`<div class="imp-pag">${html}</div>`);
        const figs = figurasDaPagina(aid, m.id, pg.id, pages.map(p => p.id));
        if (figs.length) colocarFiguras(bloco, figs, pg.tipo === "missao" ? [...bloco.querySelectorAll(".imp-atv")] : [...bloco.children].slice(1), pg.tipo === "missao" ? "depois" : "bloco");
        sec.appendChild(bloco);
      });
      corpo.appendChild(sec);
    });
    el.querySelector("#bp").onclick = () => window.print();
  }

  /* ============================================================
     EXPORTAÇÃO DAS RESPOSTAS (arquivo HTML legível)
     ============================================================ */
  async function exportar(aid) {
    await carregar(aid);
    const s = sess.get(); const C = P.conteudo[aid]; const prog = getProg(aid);
    const t = turma(s.turma);
    const linhas = [];
    C.missoes.forEach(m => {
      const { pages } = montarMissao(aid, m.id);
      const itens = [];
      pages.forEach(pg => (pg.atividades || []).forEach(at => {
        const x = prog.atv[at.id]; if (!x || (!x.status && !x.resposta)) return;
        const T = P.tipos[at.tipo];
        const resp = T && T.resumoResposta ? T.resumoResposta(at, x) : "";
        itens.push(`<tr><td>${(NIVEL[at.nivel] || ["", ""])[1]}</td><td>${md(at.titulo || "")}</td><td>${{ certo: "Concluída", ajuda: "Concluída com ajuda", enviado: "Enviada (professor confere)", feito: "Feita" }[x.status] || "Em andamento"}</td><td>${resp}</td></tr>`);
      }));
      if (itens.length) linhas.push(`<h2>${esc(m.icone)} ${esc(m.titulo)}</h2><table><tr><th>Nível</th><th>Atividade</th><th>Situação</th><th>Resposta</th></tr>${itens.join("")}</table>`);
    });
    const d = new Date();
    const doc = `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Respostas — ${esc(s.nomes.join(" & "))}</title>
      <style>body{font-family:Segoe UI,Arial,sans-serif;max-width:900px;margin:20px auto;color:#1e2235}table{border-collapse:collapse;width:100%;margin-bottom:16px}td,th{border:1px solid #bbb;padding:6px;vertical-align:top;text-align:left}th{background:#eee}h1{margin-bottom:0}</style>
      <h1>${esc(C.titulo)}</h1><p><strong>${esc(cat().portal)}</strong> · <strong>${esc(cat().professor)}</strong> · ${esc(cat().escola)} — ${esc(cat().cidade)}</p>
      <p><strong>Aluno(s):</strong> ${esc(s.nomes.map((n, i) => n + (s.apelidos && s.apelidos[i] ? ` (${s.apelidos[i]})` : "")).join(" & "))} · <strong>Turma:</strong> ${esc(t ? t.nome : s.turma)} · <strong>Gerado em:</strong> ${d.toLocaleDateString("pt-BR")} ${d.toLocaleTimeString("pt-BR").slice(0, 5)}</p>
      ${linhas.join("") || "<p>Nenhuma atividade registrada ainda.</p>"}
      <p style="color:#666;font-size:12px">Arquivo gerado pelo Portal da Informática — Professor Welington Laignier — Escola JK. As respostas abertas são avaliadas pelo professor.</p></html>`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([doc], { type: "text/html;charset=utf-8" }));
    const slug = x => norm(x).replace(/[^a-z0-9]+/g, "_");
    a.download = `respostas_${slug(aid)}_${slug(t ? t.nome : s.turma)}_${slug(s.nomes.join("_"))}.html`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 3000);
    toast("📥 Arquivo baixado (pasta Downloads).");
  }

  /* ============================================================
     ÁREA DO PROFESSOR e PRIVACIDADE
     ============================================================ */
  // 🔒 26/11/2026 (segurança): Área do professor, Trilhas e versões para imprimir só com a conta do professor
  //    (a versão para imprimir também abre para o aluno logado na série daquela apostila)
  async function profLogado() {
    try { if (!P.nuvem || !P.nuvem.auth) return false; const a = P.nuvem.auth();
      const u = a.currentUser || await new Promise(ok => { const x = a.onAuthStateChanged(v => { x(); ok(v); }); setTimeout(() => ok(a.currentUser), 4000); });
      return !!(u && !u.isAnonymous && u.email === P.nuvem.EMAIL_PROFESSOR); } catch (e) { return false; }
  }
  function telaRestrita() {
    barra();
    mount(`<section class="tela"><div class="painel restrita"><h1>🔒 Área do professor</h1>
      <p>Esta página é só para o professor. Entre no painel com a sua conta e depois volte por aqui.</p>
      <p class="row-btns"><a class="btn" href="#/painel">🔑 Entrar no painel do professor</a> <a class="btn btn-sec" href="#/">← Início</a></p></div></section>`);
  }
  async function telaProfessor() {
    if (!(await profLogado())) return telaRestrita();
    barra();
    await Promise.all(cat().apostilas.map(a => carregar(a.id).catch(() => null)));
    const o = cat().orientacoes;
    const base = location.href.split("#")[0];
    const el = mount(`<section class="tela">
      <nav class="migalhas"><a href="#/">Início</a> › Área do professor</nav>
      <h1>Área do professor</h1>
      <p class="lead">${esc(cat().professor)} · orientações rápidas e links da missão do dia.</p>
      <div class="painel"><h2>⏱️ Duração</h2><p>${esc(o.duracao)}</p><h2>🧰 Recursos</h2><p>${esc(o.recursos)}</p><h2>📝 Avaliação</h2><p>${esc(o.avaliacao)}</p>
        <h2>✔ Correção</h2><p>Cada atividade mostra se tem <strong>correção automática</strong> ou se <strong>o professor confere</strong> (respostas abertas e tarefas no Bloco de Notas; os cartazes agora são montados no próprio portal, sem o Paint). As respostas abertas não recebem nota automática: o portal só mostra critérios de revisão.</p>
        <h2>👀 Acompanhamento pelo Veyon</h2><p>O topo de cada tela mostra a turma, o nome do aluno (ou da dupla), a missão e o andamento do Básico. Quando o Básico termina, a barra fica verde e aparece a faixa “Básico concluído”, que explica ao aluno o que fazer depois (Desafio ou jogos livres), sem precisar chamar o professor. O Veyon só mostra as telas: ele não guarda respostas nem notas.</p></div>
      <a class="painel atalho-trilhas" href="#/trilhas"><span class="at-ic" aria-hidden="true">👣</span><span><strong>Trilhas Passo a Passo</strong><br>Missões com letra grande, um passo por vez e botão 🔊 Ouvir, para os alunos que precisam de apoio. Clique para ver os links de cada missão.</span><span class="at-seta" aria-hidden="true">→</span></a>
      <div class="painel"><h2>🔗 Link da missão do dia</h2><p>Escolha a apostila e a missão. Abra o link em todos os computadores (função “Abrir site” do Veyon): depois de se identificar, o aluno cai direto na missão.</p>
        <div class="row-btns"><select id="sa">${cat().apostilas.map(a => `<option value="${a.id}">${esc(a.titulo)}</option>`).join("")}</select>
        <select id="sm"></select></div>
        <p><input id="link" class="link-out" readonly aria-label="Link da missão do dia"></p>
        <div class="row-btns"><button class="btn" id="copiar" type="button">📋 Copiar link</button><a class="btn btn-sec" id="abrir" href="#">Testar</a></div></div>
      <div class="painel"><h2>🖨️ Versões para imprimir</h2><ul>${cat().apostilas.map(a => `<li><a href="#/imprimir/${a.id}">${esc(a.titulo)}</a></li>`).join("")}</ul></div>
    </section>`);
    const sa = el.querySelector("#sa"), sm = el.querySelector("#sm"), link = el.querySelector("#link"), ab = el.querySelector("#abrir");
    const upd = () => {
      const C = P.conteudo[sa.value];
      if (sm.dataset.ap !== sa.value) { sm.innerHTML = C ? C.missoes.map(m => `<option value="${m.id}">${esc(m.icone)} ${esc(m.titulo)}</option>`).join("") : ""; sm.dataset.ap = sa.value; }
      const hash = "#/abrir/" + sa.value + "/" + sm.value;
      link.value = base + hash; ab.href = hash;
    };
    sa.onchange = upd; sm.onchange = upd; upd();
    el.querySelector("#copiar").onclick = () => { link.select(); try { navigator.clipboard.writeText(link.value).then(() => toast("Link copiado!"), () => { document.execCommand("copy"); toast("Link copiado!"); }); } catch (e) { document.execCommand("copy"); toast("Link copiado!"); } };
  }

  /* -------- Trilhas Passo a Passo (só pela Área do professor) -------- */
  async function telaTrilhas() {
    if (!(await profLogado())) return telaRestrita();
    barra();
    const lista = cat().apostilas.filter(a => a.trilha).sort((a, b) => (P.doPeriodo(b) ? 1 : 0) - (P.doPeriodo(a) ? 1 : 0));  // as do bimestre em uso primeiro
    await Promise.all(lista.map(a => carregar(a.id).catch(() => null)));
    const base = location.href.split("#")[0];
    const el = mount(`<section class="tela">
      <nav class="migalhas"><a href="#/">Início</a> › <a href="#/professor">Área do professor</a> › Trilhas Passo a Passo</nav>
      <h1>👣 Trilhas Passo a Passo</h1>
      <p class="lead">As mesmas missões da turma, com letra grande, um passo por vez, quase tudo por clique e o botão 🔊 Ouvir.</p>
      <div class="painel"><h2>Como usar</h2><ol>
        <li>Na missão do dia, clique em <strong>📋 Copiar link</strong>.</li>
        <li>No Veyon, selecione <strong>só o computador do aluno</strong> e use “Abrir site” com o link copiado.</li>
        <li>O aluno digita o nome, escolhe a turma e cai direto na missão. Na tela, ela tem o mesmo título da missão da turma.</li></ol>
        <p class="ajuda">As Trilhas não aparecem na lista dos alunos. Esta página fica só aqui, na Área do professor. Dica: salve esta página nos favoritos do seu computador.</p></div>
      ${lista.length ? lista.map(a => { const C = P.conteudo[a.id]; const se = serie(a.serie); return `<div class="painel trilha-box" style="--cor:${se.cor}">
        <h2>${esc(se.nome)} · ${esc(a.unidade)}</h2><p class="ajuda">${esc(a.titulo)}</p>
        <ul class="trilha-missoes">${C ? C.missoes.map(m => `<li><span class="tm-tit">${esc(m.icone)} ${esc(m.titulo)}</span>
          <span class="row-btns"><button type="button" class="btn" data-link="${esc(base + "#/abrir/" + a.id + "/" + m.id)}">📋 Copiar link</button>
          <a class="btn btn-sec" href="#/abrir/${a.id}/${m.id}">Testar aqui</a></span></li>`).join("") : "<li>Não foi possível carregar esta trilha.</li>"}</ul>
        <p><a href="#/imprimir/${a.id}">🖨️ Versão para imprimir</a></p></div>`; }).join("") : `<p class="painel">Ainda não há Trilhas Passo a Passo.</p>`}
    </section>`);
    el.querySelectorAll("[data-link]").forEach(b => b.onclick = () => {
      const v = b.dataset.link;
      const ok = () => toast("Link copiado! Cole no “Abrir site” do Veyon.");
      const plano = () => { const t = document.createElement("textarea"); t.value = v; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); ok(); } catch (e) { toast(v); } t.remove(); };
      try { navigator.clipboard.writeText(v).then(ok, plano); } catch (e) { plano(); }
    });
  }

  function telaSobre() {
    barra();
    mount(`<section class="tela"><nav class="migalhas"><a href="#/">Início</a> › Privacidade e progresso</nav>
      <h1>Privacidade e progresso</h1>
      <div class="painel">
        <h2>Como o aluno entra?</h2><p>Escolhe a turma e digita o <strong>código de 4 números</strong> do seu cartãozinho. Aparece o nome dele para confirmar. A lista de alunos não fica visível para ninguém: só o professor vê, no painel.</p>
        <h2>O que o portal guarda?</h2><p>O nome do aluno (cadastrado pelo professor), a turma, as respostas das atividades, o andamento de cada missão e os dias em que ele entrou. Isso fica guardado neste navegador e também num banco de dados protegido (Google Firebase), que <strong>só o professor consegue abrir</strong>, com a conta dele.</p>
        <h2>Para que serve?</h2><p>Para o professor ver, no Painel do professor, quem veio a cada aula, quem concluiu o Básico e o Desafio, sem precisar de print. E para o aluno continuar de onde parou em qualquer computador da sala.</p>
        <h2>Sem internet</h2><p>Se a internet cair, o portal continua funcionando no modo antigo: o aluno digita o nome e o progresso fica só neste computador. Nesse caso, vale o print do “Resumo do que fiz”.</p>
        <h2>Quem pode ver o quê?</h2><ul><li>O aluno vê só o que ele mesmo fez.</li><li>Os colegas não veem as respostas nem o código dos outros.</li><li>O professor vê tudo da turma, no painel.</li></ul>
        <h2>Precisa de internet?</h2><p>Se o portal estiver na pasta do computador ou da rede da escola, funciona sem internet. Se estiver publicado num endereço web, precisa de internet só para abrir.</p>
        <h2>Cuidados</h2><p>Não mostre o seu código para os colegas. Nunca digite senhas, telefone, endereço ou documentos no portal. Ao terminar, clique em <strong>Sair</strong>.</p>
      </div></section>`);
  }

  /* ============================================================
     ROTEADOR
     ============================================================ */
  /* Aluno com 📌 apostila diferenciada: a apostila da turma vira a Trilha Passo a Passo dela */
  /* 👣🌟 26/11/2026 (professor): dupla de um aluno da Trilha Passo a Passo com alguém do Modo Helena faz o PASSO A PASSO
     (e as cartas da vez aparecem nele). Os outros casos de dupla continuam na apostila da turma, como antes. */
  async function trilhaDaDupla(infos, turmaS) {
    if (!infos || infos.length < 2 || !infos.some(x => x.trilha) || !P.nuvem || !P.nuvem.db) return false;
    const sn = await P.nuvem.db().collection("config").doc("liberar_" + turmaS).get(); const hz = (sn.exists && sn.data().helena) || {};
    return infos.every(x => x.trilha || hz[x.alunoId]) && infos.some(x => hz[x.alunoId]);
  }
  P.trilhaDaDupla = trilhaDaDupla;
  function trilhaDe(aid) {
    const s = sess.get(); if (!s || !s.trilha) return null;
    const t = cat().apostilas.find(x => x.trilha && x.base === aid); return t ? t.id : null;
  }
  /* 📣 avisos do professor (config/avisos_<turma>) que valem para este aluno, um de cada vez, com um tempinho de leitura
     antes do "OK, já li". Cada aviso aparece até o aluno ler o número de vezes que o professor escolheu (vezes; 0 = até
     o professor apagar). Leituras em progresso/<aluno>_avisos.lidos. */
  async function avisosDoAluno(s, casa) {
    try {
      const db = P.nuvem.db(), hoje = P.nuvem.hoje(), ids = s.alunoIds || [];
      const [sn, ld] = await Promise.all([db.collection("config").doc("avisos_" + s.turma).get(), db.collection("progresso").doc(ids[0] + "_avisos").get().catch(() => null)]);
      const lidos = (ld && ld.exists && ld.data().lidos) || {};
      return ((sn.exists && sn.data().lista) || []).filter(a => !(a.ate && a.ate < hoje)
        && (a.alvo === "todos" || (a.alvo === "casa" && casa) || (a.alvo === "presencial" && !casa) || (a.alvo === "aluno" && ids.includes(a.alunoId)))
        && (!(a.vezes > 0) || (lidos[a.id] || 0) < a.vezes)).map(a => Object.assign({}, a, { lidos: lidos[a.id] || 0 }));
    } catch (e) { return []; }
  }
  const tempoLeitura = txt => Math.min(25, Math.max(4, Math.round(String(txt).trim().split(/\s+/).length / 130 * 60)));
  function mostrarAvisos(s, lista) {
    return new Promise(fim => {
      const d = h(`<dialog class="dlg-aviso"><form method="dialog"><div id="av-u"></div></form></dialog>`); document.body.appendChild(d); d.showModal();
      d.addEventListener("cancel", e => e.preventDefault());
      let i = 0, tk = null;
      const passo = () => {
        const a = lista[i], ult = i === lista.length - 1; let r = tempoLeitura(a.texto);
        d.querySelector("#av-u").innerHTML = `<div class="aviso-prof"><p class="ap-tit">📣 Aviso do professor${a.alvo === "aluno" ? " (só para você)" : ""}${lista.length > 1 ? ` · ${i + 1} de ${lista.length}` : ""}</p><p>${esc(a.texto)}</p></div>
          <div class="av-relogio" id="av-rel"><span class="av-rel-n">⏱️ <b id="av-n">${r}</b> s</span><i><b id="av-bar" style="width:0%"></b></i></div>
          <div class="row-btns"><button type="button" class="btn" id="av-ok" disabled>⏳ Leia com atenção… o botão libera em ${r}s</button></div>`;
        const b = d.querySelector("#av-ok"), tot = r; clearInterval(tk);
        tk = setInterval(() => { r--; d.querySelector("#av-n").textContent = Math.max(0, r); d.querySelector("#av-bar").style.width = Math.min(100, Math.round(100 * (tot - r) / tot)) + "%";
          if (r > 0) b.textContent = `⏳ Leia com atenção… o botão libera em ${r}s`; else { d.querySelector("#av-rel").classList.add("ok"); d.querySelector("#av-n").textContent = "✓"; clearInterval(tk); b.disabled = false; b.textContent = ult ? "✓ OK, já li · ▶️ Ir para as minhas tarefas" : "✓ OK, já li · próximo aviso →"; } }, 1000);
        b.onclick = () => {
          const ids = s.alunoIds || [];
          ids.forEach(id => P.nuvem.db().collection("progresso").doc(id + "_avisos").set({ alunoId: id, turma: s.turma, tipo: "avisos", lidos: { [a.id]: (a.lidos || 0) + 1 }, atualizado: Date.now() }, { merge: true }).catch(() => {}));
          if (ult) { clearInterval(tk); d.close(); d.remove(); fim(); } else { i++; passo(); }
        };
      };
      passo();
    });
  }
  async function aoEntrar(s) {
    // uma vez por entrada (sessão): primeiro os avisos (só se houver), depois 🏠 quem estuda em casa vai para a tela dele
    if (!s || !s.nuvem || !P.trava || !P.nuvem) return false;
    const k = "portalJK:entrou:" + (s.entrou || "") + ":" + (s.alunoIds || []).join("+");
    if (sessionStorage.getItem(k)) return false; try { sessionStorage.setItem(k, "1"); } catch (e) {}
    const casa = await P.trava.casaEh(s).catch(() => false);
    const l = await avisosDoAluno(s, casa);
    if (l.length) await mostrarAvisos(s, l);
    if (casa) { location.replace("#/casa"); return true; }
    return false;
  }
  async function telaCasa() {
    const s = sess.get(); if (!s || !s.nuvem) { location.replace("#/"); return; }
    barra();
    const db = P.nuvem.db();
    const [cd, pl, livre] = await Promise.all([P.trava.casaDoc(s), db.collection("config").doc("plano_" + s.turma).get().then(x => x.exists ? x.data() : {}).catch(() => ({})), P.trava.casaLivre(s).catch(() => false)]);
    const versao = P.catalogo.videoCasaVersao || 1, jaViu = (cd.instrucoes || 0) >= versao;
    const br = d => d ? d.slice(8, 10) + "/" + d.slice(5, 7) : "";
    const ultimo = (pl.missoes || []).map(m => m.fim).filter(Boolean).sort().pop() || "";
    const prazo = pl.prova ? (() => { const x = new Date(pl.prova + "T12:00:00"); x.setDate(x.getDate() - 1); return x.toISOString().slice(0, 10); })() : ultimo;
    const horas = Math.round((P.catalogo.casaMinutos || 120) / 60), vid = P.catalogo.videoCasa;
    const nome = (s.apelidos || [])[0] || (s.nomes || [""])[0].split(" ")[0];
    mount(`<section class="tela casa">
      <h1>🏠 Olá, ${esc(nome)}! Bem-vindo ao estudo em casa</h1>
      <p class="lead">Como você não pode vir à aula do contraturno, vai fazer as missões de Informática a distância, no seu ritmo, com o <strong>Prof. Welington Laignier</strong> acompanhando tudo pelo portal.</p>
      ${livre ? `<div class="painel casa-livre" role="note"><h2>🚀 Para você: todas as missões já estão abertas</h2>
        <p>Você começou o estudo em casa com o bimestre quase no fim. Por isso, <strong>neste bimestre</strong>, o Prof. Welington Laignier <strong>desligou a liberação semanal</strong> para você: <strong>todas as missões já estão abertas</strong>, para dar tempo de terminar tudo.</p>
        <p>📌 A regra é <strong>uma missão por dia</strong>, na ordem (M1, depois M2, e assim por diante). A missão do dia é a primeira que você abrir; as outras ficam para os próximos dias.</p>
        <p class="ajuda">📅 <strong>No próximo ano</strong>, volta a regra normal: abre <strong>uma missão nova por semana</strong>, nas datas do plano, e as que ficarem para trás continuam abertas para você colocar em dia.</p></div>` : ""}
      ${vid ? `<div class="painel"><h2>🎬 Como estudar em casa</h2>${jaViu ? `<details><summary class="btn btn-sec">🎬 Rever as instruções</summary><div class="casa-player"><iframe src="https://www.youtube-nocookie.com/embed/${esc(vid)}?rel=0&playsinline=1" title="Como estudar em casa" allowfullscreen></iframe></div></details>` : `<p>Assista até o fim (pode pausar, mas não pular). Depois, as suas missões abrem.</p><div class="casa-player"><div id="casa-inst"></div></div><p class="ajuda" id="casa-imsg"></p>`}</div>` : ""}
      <div class="painel" ${vid ? "hidden" : ""}><h2>📋 Como funciona</h2><ol class="casa-passos">
        <li><b>🔑 Seu código</b>: são os 4 números que você pega com o professor na sala de informática, no dia da sua aula regular. Anote e guarde.</li>
        ${livre ? `<li><b>🚀 Uma missão por dia</b>: neste bimestre, todas as missões já estão abertas para você. Faça uma por dia, na ordem, até terminar todas.</li>` : ""}<li ${livre ? "hidden" : ""}><b>📅 Uma missão nova por semana</b>: toda segunda-feira abre a missão da semana. A sua obrigação é fazer, <b>no mínimo, uma missão por semana</b>. O ideal é seguir as datas sugeridas aqui embaixo. Ficou alguma para trás? Ela continua aberta: você pode fazer mais de uma no mesmo dia para ficar em dia.</li>
        <li><b>⏱️ No máximo ${horas} horas por dia</b>: você <b>não precisa</b> ficar ${horas} horas estudando. Esse é só o tempo máximo, se você precisar, para terminar as tarefas do dia. O cronômetro começa quando você abre a primeira tarefa do dia e fica no canto da tela. Quando o tempo acaba, as tarefas fecham. Você pode entrar e ler os textos quando quiser. Tudo o que fez fica salvo.</li>
        <li><b>🎬 Vídeo primeiro</b>: em cada missão, assista ao vídeo até o fim (pode pausar, mas não pular). Só depois as tarefas abrem. Use o som do celular ou um fone.</li>
        <li><b>🧭 Uma etapa de cada vez</b>: resolva cada tarefa e toque em <b>✔ Verificar</b>. A próxima etapa abre quando você termina a anterior.</li>
        <li><b>🟢 Básico = visto</b>: terminando o Básico de uma missão, você ganha o visto dela. Desafio e Turbo dão pontos extras.</li>
        <li><b>📖 Tudo está no material</b>: leia com calma <b>💡 Para começar</b>, <b>📖 O que significa?</b> e as dicas. Todas as respostas estão na apostila. Você consegue sozinho!</li>
        ${prazo ? `<li><b>🏁 Prazo</b>: termine todas as missões até <b>${br(prazo)}</b>.</li>` : ""}
      </ol></div>
      ${(pl.missoes || []).length ? `<div class="painel"><h2>📅 A semana de cada missão</h2>
        <ul class="casa-plano">${pl.missoes.map(m => `<li><b>${esc(String(m.mid).toUpperCase())}</b> · ${esc(String(m.titulo || "").replace(/^[^–]*–\s*/, ""))}<br><span>${m.ini ? `semana de ${br(m.ini)} a ${br(m.fim)}` : prazo ? `até ${br(prazo)}` : "quando puder"}</span></li>`).join("")}</ul>
        <p class="ajuda">${livre ? "Neste bimestre, todas já estão abertas para você: as datas são só a referência da turma. Faça uma por dia, na ordem." : "Cada missão abre na segunda-feira da semana dela. O ideal é fazer na semana sugerida; se ficar para trás, ela continua aberta até o prazo."}</p></div>` : ""}
      <p class="row-btns" id="casa-ir" ${vid && !jaViu ? "hidden" : ""}><a class="btn btn-grande" href="#/apostilas">📚 Ir para as minhas missões →</a></p>
    </section>`);
    if (vid && !jaViu) videoObrigatorio(document.getElementById("casa-inst"), vid, async () => { try { await P.trava.casaGravar(s, { instrucoes: versao, instrucoesEm: Date.now() }); } catch (e) {} document.getElementById("casa-ir").hidden = false; toast("✅ Instruções assistidas!"); }, m => { const x = document.getElementById("casa-imsg"); if (x) x.textContent = m; });
  }
  /* 🏷️ missão sempre com número e título: "M2 · Listas e grafos no dia a dia" (pedido em 14/11/2026) */
  function rotMis(aid, mid) {
    const C = P.conteudo[aid] || {}, m = (C.missoes || []).find(x => x.id === mid);
    const t = m ? String(m.titulo || "").replace(/^[^–]*–\s*/, "") : "";
    return (mid === "rv" ? "🔁" : String(mid || "").toUpperCase()) + (t ? " · " + t : "");
  }
  /* ⏱️ cronômetro do estudo em casa (fica no canto da tela; quando zera, as tarefas fecham) */
  let casaTimer = null;
  function cronometroCasa(fim) {
    let el = document.getElementById("casa-timer");
    if (!el) { el = document.createElement("div"); el.id = "casa-timer"; el.className = "casa-timer"; el.setAttribute("role", "timer"); document.body.appendChild(el); }
    clearInterval(casaTimer);
    const tic = () => {
      const r = fim - Date.now();
      if (r <= 0) { clearInterval(casaTimer); el.remove(); toast("⏰ Seu tempo de estudo de hoje acabou."); rota(); return; }
      const hh = Math.floor(r / 3600000), mm = Math.floor(r / 60000) % 60, sg = Math.floor(r / 1000) % 60;
      el.innerHTML = `⏱️ <b>${hh}:${String(mm).padStart(2, "0")}:${String(sg).padStart(2, "0")}</b><small>tempo máximo que resta hoje</small>`;
      el.classList.toggle("pouco", r < 10 * 60000);
    };
    tic(); casaTimer = setInterval(tic, 1000);
  }
  /* 🎬 vídeo obrigatório: só conta se o aluno assistiu de verdade (sem pular para o fim) */
  function ytApi() {
    if (window.YT && window.YT.Player) return Promise.resolve();
    return ytApi.p = ytApi.p || new Promise(ok => { const ant = window.onYouTubeIframeAPIReady; window.onYouTubeIframeAPIReady = () => { if (ant) ant(); ok(); };
      const sc = document.createElement("script"); sc.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(sc); });
  }
  async function videoObrigatorio(alvo, videoId, terminou, avisar) {
    await ytApi();
    let visto = 0, ult = null, tk = null, pl;
    pl = new YT.Player(alvo, { videoId, width: "100%", playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
      events: { onStateChange: e => {
        if (e.data === YT.PlayerState.PLAYING) { clearInterval(tk); ult = pl.getCurrentTime(); tk = setInterval(() => { const t = pl.getCurrentTime(); if (ult != null && t - ult > 0 && t - ult < 2.5) visto += t - ult; ult = t; }, 1000); }
        else { clearInterval(tk); ult = null; }
        if (e.data === YT.PlayerState.ENDED) {
          const dur = pl.getDuration() || 1;
          if (visto >= dur * 0.85) terminou();
          else { avisar("Parece que o vídeo foi pulado. Assista do começo ao fim para abrir as tarefas 😉"); visto = 0; pl.seekTo(0); }
        } } } });
  }
  async function rota() {
    const hs = (location.hash || "#/").slice(1).split("/").filter(Boolean);
    modoTrilha(null);
    try {
      if (!hs.length) return telaInicio();
      const [r, a1, a2, a3] = hs;
      if (r === "serie") { const se = serie(a1); if (se && se.oculta && cat().series.some(x => x.agregados)) { location.replace("#/serie/ag"); return; } return telaSerie(a1); }   // 🎒 5º ano → Agregados (endereço antigo salvo no navegador)
      if (r === "historia") { if (!P.historia) return telaInicio(); return await P.historia.abrir(mount, a1, a2, a3); }
      if (r === "apresentar") { if (!P.apresentacao) return telaInicio(); return await P.apresentacao.abrir(mount, a1, a2); }
      // 👀 Visualização do professor (botão no painel, aba Aula): a apostila exatamente como o aluno vê,
      // numa aba só dela, sem código, sem nuvem e sempre zerada (nada vai para o painel)
      // 🧪 #/testar/<apostila>/<missão>: o professor joga como ALUNO (sem botões de resposta, com tempo de leitura e anti-chute),
      // sem código, sem nuvem e sempre zerado: serve para testar apostilas de outros bimestres (ex.: o piloto de 2027) — 21/11/2026
      if (r === "ver" || r === "testar") {
        const ap = apostila(a1); if (!ap) return telaInicio(); const aluno = r === "testar";
        // 🔒 26/11/2026: só o professor (logado nesta aba, ou com o passe de 2 min que o botão 👀 do painel deixa ao abrir a aba nova)
        let passe = false; try { const x = JSON.parse(localStorage.getItem("portalJK:passeVer") || "null"); passe = !!(x && x.ate > Date.now()); localStorage.removeItem("portalJK:passeVer"); } catch (e) {}
        if (!passe && !(await profLogado())) return telaRestrita();
        const s0 = serie(ap.serie), t0 = (s0 && s0.turmas.find(x => x.id === a3)) || (s0 && s0.turmas[0]);
        sess.set({ serie: ap.serie, turma: t0 ? t0.id : "", modo: "sozinho", nomes: [aluno ? "Aluno Teste" : "Professor"], apelidos: [aluno ? "🧪 Teste" : "👀 Visualização do professor"], prof: !aluno, teste: aluno, trilha: !!ap.trilha, entrou: Date.now() });
        store.del(progressoKey(a1));
        location.replace("#/" + (a2 ? "missao/" + a1 + "/" + a2 : "apostila/" + a1)); return;
      }
      if (r === "prova") { barra(); if (!P.prova) return telaInicio(); return await P.prova.abrir(mount, a1); }
      if ((r === "apostilas" || r === "apostila" || r === "missao") && P.prova) { const d = await P.prova.destino(); if (d) { location.replace(d); return; } }
      if (r === "casa") return await telaCasa();
      if (r === "jogos") return await telaJogos5();
      if (r === "espera") { barra(); if (!P.espera) return telaInicio(); return await P.espera.tela(mount, sess.get()); }
      // 🚦 enquanto a turma está na Sala de espera, quem abre a lista ou uma missão volta para lá (as tarefas ainda estão fechadas)
      if ((r === "apostilas" || r === "apostila" || r === "missao") && P.espera) { try { if (await P.espera.ativaPara(sess.get())) { location.replace("#/espera"); return; } } catch (e) {} }
      if (r === "apostilas" && await aoEntrar(sess.get()).catch(() => false)) return;
      // 📌 Missão de hoje: logo depois do código, o aluno cai direto na missão que o professor escolheu (uma vez por dia)
      if (r === "apostilas" && P.trava) {
        const s = sess.get(), h = await P.trava.hoje(s).catch(() => null);
        if (h && h.mid && !(await P.trava.casaEh(s).catch(() => false))) {
          try { sessionStorage.setItem("portalJK:hoje", h.aid + "/" + h.mid); } catch (e) {}
          const k = "portalJK:hojeIr:" + h.dia + ":" + h.mid;
          if (!sessionStorage.getItem(k)) { try { sessionStorage.setItem(k, 1); } catch (e) {} location.replace("#/missao/" + h.aid + "/" + h.mid); return; }
        }
      }
      if (r === "apostilas") return telaApostilas();
      if ((r === "apostila" || r === "missao") && trilhaDe(a1)) { location.replace("#/" + r + "/" + trilhaDe(a1) + (a2 ? "/" + a2 : "") + (a3 ? "/" + a3 : "")); return; }
      if (r === "apostila") return await telaApostila(a1);
      if (r === "missao") return await telaMissao(a1, a2, a3);
      if (r === "imprimir") return await telaImprimir(a1);
      if (r === "professor") return await telaProfessor();
      if (r === "trilhas") return await telaTrilhas();
      if (r === "sobre") return telaSobre();
      if (r === "explorar") { if (!P.explorador || !P.explorador.abrir) return telaInicio(); return await P.explorador.abrir(mount, a1, a2, a3); }
      if (r === "telao") { if (!P.palco) return telaInicio(); return await P.palco.telao(mount, a1); }   // 📽️ janela do projetor da Aula ao vivo (2 telas)
      if (r === "painel") { barra(); if (!P.painel) return mount(`<section class="tela"><div class="painel erro"><h1>Painel indisponível</h1><p>O painel precisa de internet. Abra o portal pelo endereço do GitHub.</p></div></section>`); return await P.painel.abrir(mount, a1, a2, a3); }
      const ss = sess.get();
      if (ss && ss.nuvem && P.nuvem && !(await P.nuvem.sessaoValida(ss))) { sess.del(); toast("Sua entrada expirou. Digite o código de novo."); }
      if (r === "abrir") {
        const ap = apostila(a1); if (!ap) return telaInicio();
        try { sessionStorage.setItem("portalJK:hoje", a1 + "/" + a2); } catch (e) {}
        const s = sess.get();
        if (!s || s.serie !== ap.serie) return telaSerie(ap.serie, "#/missao/" + a1 + "/" + a2);
        location.replace("#/missao/" + a1 + "/" + a2); return;
      }
      return telaInicio();
    } catch (e) {
      console.error(e);
      mount(`<section class="tela"><div class="painel erro"><h1>Não foi possível abrir esta página</h1><p>${esc(e.message)}</p><p><a href="#/">Voltar ao início</a></p></div></section>`);
    }
  }

  window.addEventListener("hashchange", rota);
  // 📱 rótulo de cada célula (cabeçalho da coluna) para as tabelas virarem cartões no celular
  (() => { let ag = 0; const rotular = () => { ag = 0; document.querySelectorAll("table.tab-completar, table.classif-tab").forEach(t => {
      const hs = [...t.querySelectorAll("thead th")].map(th => th.textContent.trim()); if (!hs.length) return;
      t.querySelectorAll("tbody tr").forEach(tr => [...tr.children].forEach((td, i) => { if (hs[i] && td.dataset.rot !== hs[i]) td.dataset.rot = hs[i]; })); }); };
    new MutationObserver(() => { if (!ag) ag = requestAnimationFrame(rotular); }).observe(document.body, { childList: true, subtree: true }); })();
  window.addEventListener("DOMContentLoaded", () => { rodape(); rota(); });
})();
