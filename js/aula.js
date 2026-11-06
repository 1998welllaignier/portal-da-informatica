/* ============================================================
   TELA DA AULA — roteiro visual do professor
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   Cartões grandes e coloridos para consultar durante a aula.
   As respostas são geradas sozinhas a partir das atividades
   do portal: se uma atividade mudar, a resposta muda junto.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  P.roteiros = P.roteiros || {};
  P.registrarRoteiro = (id, d) => { P.roteiros[id] = d; };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // texto das atividades já vem com HTML simples (negrito, itálico); tira o resto
  const limpo = s => String(s == null ? "" : s).replace(/<(?!\/?(strong|em|b|i)\b)[^>]*>/g, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const forte = s => `<strong class="aula-r">${limpo(s)}</strong>`;

  /* ---------- resposta de cada atividade, em poucas palavras ---------- */
  function resposta(at) {
    const T = (P.tipos || {})[at.tipo] || {};
    const auto = at.professor ? false : typeof T.auto === "function" ? T.auto(at) : T.auto;
    let html = "";
    switch (at.tipo) {
      case "escolha":
        html = `<ul class="aula-lista">${at.perguntas.map(q => `<li>${limpo(q.p)} → ${q.certo >= 0 ? forte(q.opcoes[q.certo]) : "<em>resposta pessoal</em>"}</li>`).join("")}</ul>`; break;
      case "vf":
        html = `<ul class="aula-lista">${(at.itens || []).map((it, i) => `<li>${i + 1}. ${limpo(it.t)} → ${forte(it.v ? "V" : "F")}${it.corrigir ? ` <span class="aula-obs">(corrige para: ${forte(it.corrigir.certo)})</span>` : ""}</li>`).join("")}</ul>`; break;
      case "ordenar":
        html = `<ol class="aula-lista">${at.itens.map(x => `<li>${limpo(typeof x === "string" ? x : x.t)}</li>`).join("")}</ol>`; break;
      case "classificar": {
        const cats = at.categorias || [];
        html = `<ul class="aula-lista">${cats.map(c => `<li>${forte(c.rot)}: ${at.itens.filter(i => i.c === c.id).map(i => limpo(i.t)).join(" · ")}</li>`).join("")}</ul>`; break;
      }
      case "completar": {
        const lac = []; String(at.texto).replace(/\*\*(.+?)\*\*/g, (_, w) => lac.push(w));
        html = `<p>${lac.map((w, i) => `${i + 1}. ${forte(w)}`).join(" · ")}</p>`; break;
      }
      case "ligar":
        html = `<ul class="aula-lista">${at.pares.map(p => `<li>${limpo(p.a)} → ${forte(p.b)}</li>`).join("")}</ul>`; break;
      case "sinais":
        html = `<p>Marcar: ${at.opcoes.filter(o => o.certo).map(o => forte(o.t)).join(" · ")}</p>`; break;
      case "tabela":
        html = `<ul class="aula-lista">${at.linhas.map(l => { const c = l.find(x => x && typeof x === "object"); if (!c) return ""; const rot = l.filter(x => typeof x === "string").join(" · ");
          return `<li>${limpo(rot)} → ${c.re ? `o que aparece no computador (ex.: ${forte(c.exemplo || "")})` : forte(Array.isArray(c.r) ? c.r[0] : c.r)}</li>`; }).join("")}</ul>`; break;
      case "pc":
        html = at.conferir ? `<ul class="aula-lista">${at.conferir.map(c => `<li>${limpo(c.rot)} → ${forte(c.gab || c.dica || "")}</li>`).join("")}</ul>`
          : `<p>👀 <strong>Você confere:</strong> ${at.passos.map(limpo).join(" → ")}</p>`; break;
      case "pintura":
        html = `<p>Pintar de preto: ${forte(at.pretos.map(n => n + "º").join(", "))} (de ${at.n})</p>`; break;
      case "aberta": {
        const c = at.conferir;
        const reg = [];
        if (c) {
          if (c.grupos) reg.push("precisa falar de: " + c.grupos.map(g => "<strong>" + esc(g.dica || (g.alts || g)[0]) + "</strong>").join(", ") + (c.minGrupos && c.minGrupos < c.grupos.length ? ` (basta ${c.minGrupos})` : ""));
          if (c.porCampo) reg.push("cada campo com uma palavra-chave do tema");
          if (c.blocoDuasVezes) reg.push("o bloco é chamado 2 vezes pelo nome");
          if (c.vf) reg.push("cada frase diz V ou F");
          if (c.minPalavras) reg.push(`mínimo de ${c.minPalavras} palavras`);
        }
        html = `${c ? `<p class="aula-obs">O portal confere: ${reg.join(" · ")}</p>` : `<p>👀 <strong>Você confere</strong>${at.criterios ? ": " + at.criterios.map(limpo).join(" · ") : ""}</p>`}${at.exemplo ? `<p>Exemplo: ${forte(at.exemplo)}</p>` : ""}`; break;
      }
      default:
        html = `<p class="aula-obs">Atividade interativa: o portal confere sozinho.${at.explicacao ? " " + limpo(at.explicacao) : ""}</p>`;
    }
    return { html, auto };
  }

  const NIVEIS = [["basico", "🟢 Básico"], ["desafio", "🟡 Desafio"], ["turbo", "🔴 Turbo"]];

  /* ---------- a tela ---------- */
  P.aula = {
    async render(alvo, aid, mid, turmaId, ctx) {
      await P.carregarApostila(aid);
      await carregarRoteiro(aid);
      const ap = P.apostila(aid), C = P.conteudo[aid], R = (P.roteiros[aid] || {}), r = R[mid] || {};
      const m = C.missoes.find(x => x.id === mid) || C.missoes[0];
      const { pages } = P.montarMissao(aid, m.id);
      const porNivel = {}; pages.forEach(pg => (pg.atividades || []).forEach(at => { if (!(P.tipos[at.tipo] || {}).semStatus) (porNivel[at.nivel || pg.id] = porNivel[at.nivel || pg.id] || []).push(at); }));
      const vf = pages.flatMap(pg => (pg.atividades || []).filter(a => a.tipo === "vf"));
      const total = (r.tempo || []).reduce((s, x) => s + x.min, 0);

      const cartaoResp = at => { const x = resposta(at); return `<div class="aula-resp ${x.auto ? "" : "prof"}"><p class="aula-resp-tit">${x.auto ? "✔" : "👀"} ${limpo(at.titulo || "")}</p>${x.html}</div>`; };
      const html = `
      <div class="aula" style="--cor:${esc((P.serie(ap.serie) || {}).cor || "#3b5bdb")}">
        <header class="aula-cab">
          <div><p class="aula-sup">${esc(ap.titulo || ap.nome || "")}${r.datas ? " · " + esc(r.datas) : ""}</p>
            <h1>${esc(m.icone || "")} ${esc(m.titulo)}</h1></div>
          <div class="aula-vivo" id="aula-vivo" ${turmaId ? "" : "hidden"}></div>
        </header>
        <nav class="aula-ir" aria-label="Ir para">
          ${[["abrir", "🎬 Abrir"], ["onde", "🌎 Onde uso"], ["resp", "✅ Respostas"], ["atencao", "⚠️ Atenção"], ["pergs", "💬 Perguntas"]].map(([k, t]) => `<a href="#" data-ir="${k}">${t}</a>`).join("")}
        </nav>

        ${r.tempo ? `<section class="aula-tempo" aria-label="Linha do tempo da aula (${total} min)">${r.tempo.map(x => `<div class="aula-t" style="flex:${x.min}"><span class="aula-t-i">${x.icone}</span><span class="aula-t-m">${x.min} min</span><span class="aula-t-t">${esc(x.t)}</span></div>`).join("")}</section>` : ""}

        ${R.antes ? `<section class="aula-card c-cinza"><h2>☑️ Antes de começar</h2><ul class="aula-check">${R.antes.map(x => `<li><label><input type="checkbox"> ${esc(x)}</label></li>`).join("")}</ul></section>` : ""}

        <section class="aula-card c-azul" id="aula-abrir"><h2>🎬 Abrir a aula</h2>
          ${(r.abertura || []).map(x => x.fala ? `<blockquote class="aula-fala">“${esc(x.fala)}”</blockquote>` : `<p class="aula-acao">👉 ${esc(x.acao)}</p>`).join("") || `<p class="aula-obs">Ainda sem falas cadastradas para esta missão.</p>`}
          ${r.siglas ? `<p class="aula-acao">📖 ${esc(r.siglas)}</p>` : ""}
        </section>

        ${r.onde ? `<section class="aula-card c-verde" id="aula-onde"><h2>🌎 Onde eu uso isso?</h2>
          <blockquote class="aula-fala">“${esc(r.onde.pergunta)}”</blockquote>
          ${r.onde.fechamento ? `<blockquote class="aula-fala">“${esc(r.onde.fechamento)}”</blockquote>` : ""}
          ${r.onde.dica ? `<p class="aula-acao">👉 ${esc(r.onde.dica)}</p>` : ""}</section>` : ""}

        ${r.demonstracao ? `<section class="aula-card c-ciano"><h2>🖥️ Demonstração pelo Veyon</h2><p class="aula-grande">${esc(r.demonstracao)}</p></section>` : ""}

        <section class="aula-card c-amarelo" id="aula-resp"><h2>✅ Respostas</h2>
          <p class="aula-obs">✔ = o portal corrige sozinho · 👀 = você confere. Geradas das atividades do portal.</p>
          ${NIVEIS.filter(([k]) => porNivel[k]).map(([k, t], i) => `<details class="aula-nivel" ${i === 0 ? "open" : ""}><summary>${t} <span>(${porNivel[k].length})</span></summary>${porNivel[k].filter(a => a.tipo !== "vf").map(cartaoResp).join("")}</details>`).join("")}
          ${vf.length ? `<details class="aula-nivel"><summary>✔✖ V ou F</summary>${vf.map(cartaoResp).join("")}</details>` : ""}
        </section>

        ${r.atencao ? `<section class="aula-card c-laranja" id="aula-atencao"><h2>⚠️ Atenção: onde mais erram</h2><ul class="aula-grande">${r.atencao.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}

        ${r.perguntas ? `<section class="aula-card c-roxo" id="aula-pergs"><h2>💬 Se perguntarem…</h2>${r.perguntas.map(x => `<details class="aula-perg"><summary>${esc(x.p)}</summary><p>${esc(x.r)}</p></details>`).join("")}</section>` : ""}

        ${r.curiosidade ? `<section class="aula-card c-rosa"><h2>✨ Se sobrar tempo: curiosidade</h2><p class="aula-grande">${esc(r.curiosidade)}</p></section>` : ""}
      </div>`;
      alvo.innerHTML = html;
      alvo.querySelectorAll("[data-ir]").forEach(a => a.onclick = e => { e.preventDefault(); const t = alvo.querySelector("#aula-" + a.dataset.ir); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
      if (turmaId && ctx && ctx.vivo) vivo(alvo.querySelector("#aula-vivo"), aid, m.id, turmaId, ctx.vivo);
    }
  };

  // contador ao vivo: quantos entraram hoje e quantos concluíram o Básico desta missão
  function vivo(el, aid, mid, turmaId, ler) {
    const atualizar = async () => {
      if (!document.body.contains(el)) return clearInterval(t);
      try {
        const { entraram, basico, total } = await ler(aid, mid, turmaId);
        el.innerHTML = `<span class="aula-v"><b>${entraram}</b> entraram hoje</span><span class="aula-v ok"><b>${basico}</b>/${entraram || 0} com o Básico ✔</span><span class="aula-v-t">${esc(turmaId)} · atualiza a cada minuto</span>`;
        el.hidden = false;
      } catch (e) { el.hidden = true; }
    };
    const t = setInterval(atualizar, 60000); atualizar();
  }

  const carregando = {};
  function carregarRoteiro(aid) {
    if (P.roteiros[aid]) return Promise.resolve();
    return carregando[aid] = carregando[aid] || new Promise(ok => {
      const s = document.createElement("script");
      s.src = "dados/roteiros/" + aid + ".js?v=" + (window.PORTAL_VERSAO || ""); s.onload = ok; s.onerror = () => ok();
      document.head.appendChild(s);
    });
  }
  P.aula.resposta = resposta;
})();
