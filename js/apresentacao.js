/* ============================================================
   🎬 MODO APRESENTAÇÃO — slides animados gerados da própria missão
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   Rota: #/apresentar/<apostila>/<missão>  (botão na aba 🎤 Aula do painel)
   - Os slides saem do conteúdo da missão: capa, Para começar
     (textos, tabelas e listas), O que significa? (cartas que viram),
     Onde eu uso isso?, Resumo e encerramento. Nada para digitar.
   - Cada tópico entra um de cada vez. Avança com → / espaço / clique /
     passador de slides; volta com ←. F = tela cheia. Esc = sair.
   - Só mostra o conteúdo (o roteiro de falas fica no painel).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const md = s => String(s == null ? "" : s).replace(/\*\*(.+?)\*\*/g, "<mark>$1</mark>");
  const semTag = s => String(s || "").replace(/<[^>]+>/g, "");

  /* ---------- monta a lista de slides a partir da missão ---------- */
  function montar(ap, serie, m, C) {
    const S = [];
    const titulo = m.titulo.replace(/^[^–]*–\s*/, "");
    const numero = m.titulo.replace(/\s*–.*/, "");
    S.push({ tipo: "capa", html: `<div class="ax-capa">
        <div class="ax-ic frag-fixo">${esc(m.icone || "💻")}</div>
        <p class="ax-sobre">${esc(serie ? serie.nome : "")} · ${esc(numero)}</p>
        <h1 class="ax-tit">${esc(titulo)}</h1>
        ${m.objetivo ? `<p class="ax-obj frag"><span>🎯 Objetivo</span>${m.objetivo}</p>` : ""}</div>` });

    // 💡 Para começar: cada bloco vira um slide; um parágrafo que termina com ":" junta com o bloco seguinte.
    // Depois da explicação, vem o desenho dela (as figuras da apostila ilustrada), montando-se na tela.
    const I = (P.ilustracoes || {})[ap.id];
    const figs = I ? I.figuras.filter(x => x.missao === m.id && x.pagina === "comecar") : [];
    const usadas = new Set();
    const letras = x => semTag(x).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const visual = fg => ({ tipo: "visual", sec: "👀 Veja no desenho", html: `<div class="ax-lousa">${fg.html}</div>` });
    const figsDoBloco = b => {
      const t = letras(b.h || (b.linhas || []).flat().join(" ") + (b.itens || []).map(x => x.h).join(" "));
      return figs.filter(fg => !usadas.has(fg) && fg.ancora && t.includes(letras(fg.ancora).slice(0, 40)));
    };
    const bl = m.comecar || [];
    for (let i = 0; i < bl.length; i++) {
      const b = bl[i];
      const figsAqui = figsDoBloco(b).concat(bl[i + 1] ? figsDoBloco(bl[i + 1]) : []);
      let titulo = "", partes = [b];
      if (b.t === "p" && /:\s*(<\/strong>)?\s*$/.test(semTag(b.h)) && bl[i + 1] && bl[i + 1].t !== "p") { titulo = b.h; partes = [bl[i + 1]]; i++; }
      partes.forEach(x => {
        if (x.t === "p") {
          const frases = splitTexto(x.h);
          S.push({ tipo: "texto", sec: "💡 Para começar", html: `<div class="ax-texto">${frases.map((f, k) => `<p class="${k ? "frag" : ""}">${f}</p>`).join("")}</div>` });
        } else if (x.t === "tabela") {
          const tres = x.cab.length === 3 && x.linhas.length <= 6;
          S.push({ tipo: "tabela", sec: "💡 Para começar", html: `${titulo ? `<h2 class="ax-h2">${titulo}</h2>` : ""}${tres
            ? `<div class="ax-cards">${x.linhas.map(l => `<div class="ax-card frag"><h3>${l[0]}</h3><p>${l[1]}</p><p class="ax-ex"><span>${x.cab[2]}</span>${l[2]}</p></div>`).join("")}</div>`
            : `<table class="ax-tab"><thead><tr>${x.cab.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${x.linhas.map(l => `<tr class="frag">${l.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`}` });
        } else if (x.t === "lista") {
          S.push({ tipo: "lista", sec: "💡 Para começar", html: `${titulo ? `<h2 class="ax-h2">${titulo}</h2>` : ""}<ul class="ax-lista">${x.itens.map(it => `<li class="frag" style="margin-left:${it.nivel * 1.4}em">${it.h}</li>`).join("")}</ul>` });
        }
      });
      figsAqui.forEach(fg => { if (!usadas.has(fg)) { usadas.add(fg); S.push(visual(fg)); } });
    }
    figs.filter(fg => !usadas.has(fg)).forEach(fg => S.push(visual(fg)));

    // 📖 O que significa? — cartas que viram (até 6 por slide)
    const T = m.termos || [];
    for (let i = 0; i < T.length; i += 6) {
      const g = T.slice(i, i + 6);
      S.push({ tipo: "termos", sec: "📖 O que significa?", html: `<div class="ax-flip-grid n${g.length}">${g.map(t => `<div class="ax-flip frag" tabindex="-1"><div class="ax-flip-in"><div class="ax-f ax-frente">${t.rotulo || esc(t.termo)}</div><div class="ax-f ax-verso"><strong>${esc(t.termo)}</strong><span>${t.def}</span></div></div></div>`).join("")}</div>`, flip: true });
    }

    // 🌎 Onde eu uso isso?
    if (m.ondeUso && m.ondeUso.itens && m.ondeUso.itens.length) {
      const ics = ["📱", "🏠", "🛒", "🎮", "🚌", "🏫", "💬", "🗺️"];
      S.push({ tipo: "onde", sec: "🌎 Onde eu uso isso?", html: `<ul class="ax-onde">${m.ondeUso.itens.map((t, k) => `<li class="frag"><span class="ax-onde-ic">${ics[k % ics.length]}</span><span>${t}</span></li>`).join("")}</ul>` });
    }

    // 🧠 Resumo
    if (m.resumo && m.resumo.texto) {
      S.push({ tipo: "resumo", sec: m.id === "pf" ? "🧠 Resumo do bimestre" : "🧠 Resumo da aula", html: `<div class="ax-resumo"><p>${md(m.resumo.texto)}</p>
        ${(m.resumo.chaves || []).length ? `<div class="ax-chaves">${m.resumo.chaves.map(c => `<span class="frag">${esc(c)}</span>`).join("")}</div>` : ""}</div>` });
    }

    S.push({ tipo: "fim", html: `<div class="ax-capa ax-fim"><div class="ax-ic">🚀</div><h1 class="ax-tit">Agora é com vocês!</h1>
      <p class="ax-obj frag"><span>🎮 No portal</span>Abram a <strong>${esc(numero)}</strong> e comecem pelo <strong>Mão na massa</strong>. Terminou o Básico? Vá para o Desafio e o Turbo!</p></div>` });
    return S;
  }
  // parágrafo muito longo: divide em frases, para entrar aos poucos
  function splitTexto(h) {
    if (semTag(h).length < 260) return [h];
    const fr = h.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÀÇ<])/);
    const out = []; let cur = "";
    fr.forEach(f => { if (semTag(cur + f).length > 200 && cur) { out.push(cur.trim()); cur = ""; } cur += f + " "; });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  /* ---------- tela ---------- */
  async function abrir(mount, aid, mid) {
    const ap = P.apostila && P.apostila(aid);
    if (!ap) { mount(`<section class="tela"><div class="painel erro"><h1>Apostila não encontrada</h1></div></section>`); return; }
    await P.carregarApostila(aid);
    const C = P.conteudo[aid]; const m = C && (C.missoes.find(x => x.id === mid) || C.missoes[0]);
    const serie = P.catalogo.series.find(s => s.id === ap.serie);
    const slides = montar(ap, serie, m, C);
    document.body.classList.add("modo-apresentacao");
    const raiz = mount(`<section class="ax" style="--ax-cor:${serie ? serie.cor : "#2f7de1"}" tabindex="0" aria-label="Apresentação da missão">
      <div class="ax-bolhas" aria-hidden="true">${Array.from({ length: 9 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <div class="ax-palco" id="ax-palco"></div>
      <div class="ax-barra"><i id="ax-prog"></i></div>
      <div class="ax-ctrl"><button type="button" id="ax-ant" title="Voltar (←)">◀</button><span id="ax-num"></span><button type="button" id="ax-prox" title="Avançar (→)">▶</button>
        <button type="button" id="ax-tela" title="Tela cheia (F)">⛶</button><button type="button" id="ax-sair" title="Sair (Esc)">✕</button></div>
      <p class="ax-dica" id="ax-dica">→ ou clique para avançar · ← volta · F tela cheia</p>
    </section>`);
    const el = raiz.classList && raiz.classList.contains("ax") ? raiz : raiz.querySelector(".ax");
    const palco = el.querySelector("#ax-palco");
    let i = 0, f = 0, frags = [];
    function mostrar(n, dir) {
      i = Math.max(0, Math.min(slides.length - 1, n));
      const s = slides[i];
      const div = document.createElement("div");
      div.className = `ax-slide axs-${s.tipo} entra-${dir || "frente"}`;
      div.innerHTML = `${s.sec ? `<p class="ax-sec">${s.sec}</p>` : ""}<div class="ax-corpo">${s.html}</div>`;
      palco.querySelectorAll(".ax-slide").forEach(velho => {
        if (velho.dataset.saindo) return; velho.dataset.saindo = 1;
        velho.classList.remove("entra-frente", "entra-tras"); velho.classList.add(dir === "tras" ? "sai-tras" : "sai-frente");
        setTimeout(() => velho.remove(), 600);
      });
      palco.appendChild(div);
      // cabe na tela: se o conteúdo passar da altura, diminui a letra até caber
      let fs = 100; div.style.fontSize = "";
      while (div.scrollHeight > div.clientHeight + 2 && fs > 50) { fs -= 5; div.style.fontSize = fs + "%"; }
      frags = [...div.querySelectorAll(".frag")];
      f = dir === "tras" ? frags.length : 0;
      frags.forEach((x, k) => x.classList.toggle("on", k < f));
      if (s.flip && dir === "tras") frags.forEach(x => x.classList.add("virada"));
      atualizar();
    }
    function atualizar() {
      const tot = slides.length;
      el.querySelector("#ax-num").textContent = `${i + 1} / ${tot}`;
      el.querySelector("#ax-prog").style.width = ((i + (frags.length ? f / frags.length : 1)) / tot * 100) + "%";
    }
    function prox() {
      const s = slides[i];
      if (s.flip) {
        // cartas: 1º toque mostra a carta; 2º toque vira
        const cur = frags[f - 1];
        if (cur && !cur.classList.contains("virada")) { cur.classList.add("virada"); return atualizar(); }
      }
      if (f < frags.length) { frags[f].classList.add("on"); f++; return atualizar(); }
      if (i < slides.length - 1) mostrar(i + 1, "frente");
    }
    function ant() {
      const s = slides[i];
      if (f > 0) {
        const cur = frags[f - 1];
        if (s.flip && cur.classList.contains("virada")) { cur.classList.remove("virada"); return atualizar(); }
        cur.classList.remove("on"); f--; return atualizar();
      }
      if (i > 0) mostrar(i - 1, "tras");
    }
    function sair() {
      document.removeEventListener("keydown", tecla);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      document.body.classList.remove("modo-apresentacao");
      window.close(); // aberta numa aba nova pelo painel: fecha a aba
      setTimeout(() => { location.hash = "#/"; }, 300);
    }
    function tela() { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); else el.requestFullscreen && el.requestFullscreen().catch(() => {}); }
    function tecla(e) {
      if (!document.body.classList.contains("modo-apresentacao")) return document.removeEventListener("keydown", tecla);
      const k = e.key;
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); prox(); }
      else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); ant(); }
      else if (k === "f" || k === "F") tela();
      else if (k === "Escape" && !document.fullscreenElement) sair();
      else if (k === "Home") mostrar(0, "tras");
    }
    document.addEventListener("keydown", tecla);
    palco.addEventListener("click", e => { if (e.target.closest("a")) return; (e.clientX < window.innerWidth * 0.25 ? ant : prox)(); });
    el.querySelector("#ax-prox").onclick = prox; el.querySelector("#ax-ant").onclick = ant;
    el.querySelector("#ax-tela").onclick = tela; el.querySelector("#ax-sair").onclick = sair;
    window.addEventListener("hashchange", function x() { document.body.classList.remove("modo-apresentacao"); document.removeEventListener("keydown", tecla); window.removeEventListener("hashchange", x); });
    setTimeout(() => { const d = el.querySelector("#ax-dica"); if (d) d.classList.add("some"); }, 6000);
    el.focus();
    mostrar(0, "frente");
  }
  P.apresentacao = { abrir, montar };
})();
