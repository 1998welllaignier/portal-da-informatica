/* ============================================================
   🎬 MODO HISTÓRIA — "problema → solução", cena por cena
   Portal da Informatica · Professor Welington Laignier
   ------------------------------------------------------------
   Rota: #/historia/<apostila>/<missão>        (avança no clique / →)
         #/historia/<apostila>/<missão>/auto   (toca sozinho: usado para gravar o vídeo)
   Cenas em dados/historias/<apostila>.js:
     PORTAL.registrarHistoria(aid, { m2: [ { chip, fala, dur, visual, nome, tags, emo }, ... ] })
   - chip: etiqueta da etapa (canto superior esquerdo)
   - fala: texto da narração; vira legenda que acende palavra por palavra
   - nome: o conceito em letras grandes amarelas (entra no meio da cena)
   - tags: etiquetas pequenas com seta [{t, x, y, at}] (x/y em % do palco, at em segundos)
   - emo: emoção do mascote ("?" dúvida, "!" problema, "ok" resolvido)
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  P.historias = P.historias || {};
  P.registrarHistoria = (id, d) => { P.historias[id] = d; };
  // missões que já têm história (para mostrar o botão no painel)
  P.historiasDisponiveis = { "informatica-6ano-4bim": ["m1"], "informatica-7ano-4bim": ["m1"], "informatica-8ano-4bim": ["m2"] };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function carregar(aid) {
    if (P.historias[aid]) return Promise.resolve();
    return new Promise((ok, err) => { const s = document.createElement("script"); s.src = "dados/historias/" + aid + ".js?v=" + (window.PORTAL_VERSAO || ""); s.onload = ok; s.onerror = () => err(new Error("Ainda não há história para esta apostila.")); document.head.appendChild(s); });
  }
  let PROF = "", TURMAS = "";
  const EMO = { "?": "🤔", "!": "😱", ok: "😃", uau: "🤩" };

  function cenaHTML(c, idx) {
    const palavras = String(c.fala || "").split(/\s+/).filter(Boolean);
    // c._s = sincronia com o áudio narrado (só no modo auto): {dur, wt:[início de cada palavra], nomeAt}
    const S = c._s || null;
    const dur = S ? S.dur : (c.dur || Math.max(4, palavras.length * 0.42 + 1.2));
    const passo = (dur - 0.9) / Math.max(1, palavras.length);
    const leg = palavras.map((w, i) => `<span style="animation-delay:${(S && S.wt[i] != null ? S.wt[i] : 0.35 + i * passo).toFixed(2)}s">${esc(w)}</span>`).join(" ");
    const nomeAt = S && S.nomeAt != null ? S.nomeAt : (c.nomeAt != null ? c.nomeAt : 1.2);
    const tags = (c.tags || []).map(t => `<div class="hs-tag ${t.seta ? "seta-" + t.seta : ""}" style="left:${t.x}%;top:${t.y}%;animation-delay:${t.at != null ? t.at : 1}s">${t.vermelho ? '<i class="r"></i>' : "<i></i>"}${esc(t.t)}</div>`).join("");
    return { dur, html: `<div class="hs-cena" data-i="${idx}">
      ${c.chip ? `<div class="hs-chip"><b></b>${esc(c.chip)}</div>` : ""}
      <div class="hs-visual">${String(c.visual || "").replace(/\{PROF\}/g, esc(PROF)).replace(/\{TURMAS\}/g, esc(TURMAS))}</div>
      ${c.nome ? `<div class="hs-nome" style="animation-delay:${nomeAt}s">${esc(c.nome)}</div>` : ""}
      ${tags}
      ${c.emo && !c.semMascote ? `<div class="hs-emo" style="animation-delay:${c.emoAt != null ? c.emoAt : .3}s">${EMO[c.emo] || c.emo}</div>` : ""}
      ${palavras.length ? `<div class="hs-leg"><p>${leg}</p></div>` : ""}
    </div>` };
  }

  async function abrir(mount, aid, mid, modo) {
    const ap = P.apostila && P.apostila(aid);
    try { await carregar(aid); } catch (e) { return mount(`<section class="tela"><div class="painel erro"><h1>${esc(e.message)}</h1></div></section>`); }
    if (ap) await P.carregarApostila(aid).catch(() => null);
    const H = P.historias[aid] || {}; let cenas = H[mid];
    if (!cenas) return mount(`<section class="tela"><div class="painel"><h1>Esta missão ainda não tem história.</h1></div></section>`);
    const serie = ap && P.catalogo.series.find(s => s.id === ap.serie);
    const I = (P.ilustracoes || {})[aid] || {};
    const mascote = I.mascote || "";
    const auto = modo === "auto";
    // professor e turmas que estudam esta missão (destaque no canto e na capa)
    PROF = String((P.catalogo && P.catalogo.professor) || "").replace(/^Professor\s+/i, "Prof. ");
    const lt = serie ? (serie.turmas || []).filter(t => t.missoes4 && Object.values(t.missoes4).includes(mid)).map(t => t.id.replace(/^\d+/, "")) : [];
    TURMAS = serie ? serie.nome + (lt.length ? " · Turma" + (lt.length > 1 ? "s " + lt.slice(0, -1).join(", ") + " e " + lt[lt.length - 1] : " " + lt[0]) : "") : "";
    // com áudio narrado: cada cena dura o tempo da fala gravada
    const sinc = auto && H.sinc && H.sinc[mid];
    if (sinc) cenas = cenas.map((c, k) => Object.assign({}, c, { _s: sinc[k] }));
    document.body.classList.add("modo-apresentacao");
    const raiz = mount(`<section class="hs ${auto ? "auto" : ""}" style="--hs-cor:${serie ? serie.cor : "#7a4fd8"}" tabindex="0">
      <div class="hs-palco" id="hs-palco">
        <div class="hs-fundo" aria-hidden="true">${Array.from({ length: 7 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
        <div class="hs-marca">PORTAL DA INFORMÁTICA · ${esc(serie ? serie.nome.toUpperCase() : "")} · ${esc((H.titulo || {})[mid] || "")}</div>
        ${PROF ? `<div class="hs-prof"><b>👨‍🏫 ${esc(PROF)}</b><span>${esc(TURMAS)}</span></div>` : ""}
        <div class="hs-mascote" id="hs-masc">${mascote}</div>
        <div id="hs-cenas"></div>
        <div class="hs-prog"><i id="hs-prog"></i></div>
      </div>
      ${auto ? "" : `<div class="hs-ctrl"><button type="button" id="hs-ant">◀</button><span id="hs-num"></span><button type="button" id="hs-prox">▶</button><button type="button" id="hs-tela">⛶</button><button type="button" id="hs-sair">✕</button></div>`}
    </section>`);
    const el = raiz.classList && raiz.classList.contains("hs") ? raiz : raiz.querySelector(".hs");
    const palco = el.querySelector("#hs-palco"), box = el.querySelector("#hs-cenas"), masc = el.querySelector("#hs-masc");
    // o palco é 1280×720 e se ajusta à tela
    const ajustar = () => { const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720); palco.style.transform = `translate(-50%,-50%) scale(${s})`; };
    ajustar(); window.addEventListener("resize", ajustar);
    let i = -1, timer = null;
    function ir(n) {
      i = Math.max(0, Math.min(cenas.length - 1, n));
      const c = cenas[i], r = cenaHTML(c, i);
      box.querySelectorAll(".hs-cena").forEach(v => { v.classList.add("sai"); setTimeout(() => v.remove(), 700); });
      box.insertAdjacentHTML("beforeend", r.html);
      masc.className = "hs-mascote " + (c.mascote || "dir") + (c.semMascote ? " some" : "");
      el.querySelector("#hs-prog").style.width = ((i + 1) / cenas.length * 100) + "%";
      const num = el.querySelector("#hs-num"); if (num) num.textContent = `${i + 1} / ${cenas.length}`;
      clearTimeout(timer);
      if (auto) timer = setTimeout(() => { if (i < cenas.length - 1) ir(i + 1); else { document.title = "FIM"; window.__historiaFim = true; } }, r.dur * 1000);
    }
    function sair() { document.body.classList.remove("modo-apresentacao"); clearTimeout(timer); window.close(); setTimeout(() => { location.hash = "#/"; }, 300); }
    if (!auto) {
      const tecla = e => {
        if (!document.body.classList.contains("modo-apresentacao")) return document.removeEventListener("keydown", tecla);
        if (["ArrowRight", " ", "PageDown", "Enter"].includes(e.key)) { e.preventDefault(); ir(i + 1); }
        else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); ir(i - 1); }
        else if (e.key === "f" || e.key === "F") el.requestFullscreen && el.requestFullscreen().catch(() => {});
        else if (e.key === "Escape" && !document.fullscreenElement) sair();
      };
      document.addEventListener("keydown", tecla);
      palco.addEventListener("click", e => (e.clientX < window.innerWidth * .25 ? ir(i - 1) : ir(i + 1)));
      el.querySelector("#hs-prox").onclick = () => ir(i + 1); el.querySelector("#hs-ant").onclick = () => ir(i - 1);
      el.querySelector("#hs-tela").onclick = () => el.requestFullscreen && el.requestFullscreen().catch(() => {});
      el.querySelector("#hs-sair").onclick = sair;
    }
    window.__historiaComecar = () => ir(0);
    if (!auto || !/gravar/.test(location.search)) ir(0);
  }
  P.historia = { abrir };
})();
