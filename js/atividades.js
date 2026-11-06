/* ============================================================
   PORTAL JK — TIPOS DE ATIVIDADE
   Cada tipo tem: render(corpo, spec, ctx), imprimir(spec) e,
   quando faz sentido, resumoResposta(spec, estado).
   Toda atividade de arrastar também funciona por clique e teclado.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL;
  const { md, h, norm, shuffle, semTags } = P.util;
  const esc = s => P.util.esc(semTags(s));
  const T = P.tipos;

  const linhas = n => `<div class="imp-linhas">${"<div></div>".repeat(n || 2)}</div>`;
  const tecla = (el, fn) => el.addEventListener("keydown", e => { if (e.target !== el) return; if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(e); } });
  const numero = s => {
    let t = String(s).trim().replace(/(\d)\s*½/g, "$1.5").replace(/^½/, "0.5").replace(/\s+/g, "");
    t = t.replace(/(\d)\.(?=\d{3}(\D|$))/g, "$1").replace(",", ".");
    const m = t.match(/-?\d+(\.\d+)?/); return m ? Number(m[0]) : NaN;
  };
  const igual = (resp, aceitas, tipo) => {
    const lista = Array.isArray(aceitas) ? aceitas : [aceitas];
    if (tipo === "num") { const n = numero(resp); return lista.some(a => Math.abs(numero(a) - n) < 1e-9); }
    if (tipo === "letras") { const so = x => norm(x).replace(/[^a-z0-9]/g, ""); return lista.some(a => so(a) === so(resp)); }
    const r = norm(resp);
    return lista.some(a => norm(a) === r);
  };
  P.util.igual = igual;
  // confere um campo por expressão regular (ex.: formato de IP, de data, nome de arquivo)
  const confere = (resp, re) => { try { return new RegExp(re, "i").test(String(resp || "").trim()); } catch (e) { return false; } };
  // texto contém alguma das alternativas? (sem acento, sem maiúscula)
  const contem = (txt, alts) => { const t = " " + norm(txt) + " "; return (Array.isArray(alts) ? alts : [alts]).some(a => t.includes(norm(a))); };
  const palavras = t => String(t || "").trim().split(/\s+/).filter(Boolean).length;

  /* ------------------------------------------------------------
     ORDENAR — passos, etapas, pacotes
     ------------------------------------------------------------ */
  T.ordenar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      const itens = at.itens.map((x, i) => typeof x === "string" ? { t: x, id: i } : Object.assign({ id: i }, x));
      if (!st.ordem || st.ordem.length !== itens.length) {
        let o = shuffle(itens.map(x => x.id)); let g = 0;
        while (o.every((v, i) => v === i) && g++ < 10) o = shuffle(o);
        st.ordem = o;
      }
      let marcas = {};
      const draw = () => {
        c.innerHTML = `<ol class="ordenar" aria-label="Itens para ordenar">${st.ordem.map((id, pos) => {
          const it = itens[id];
          return `<li class="ord-item ${marcas[pos] || ""}" draggable="true" data-pos="${pos}">
            <span class="ord-num" aria-hidden="true">${pos + 1}</span>
            <span class="ord-txt">${it.etiqueta ? `<small class="etq">${esc(it.etiqueta)}</small> ` : ""}${md(it.t)}</span>
            <span class="ord-set"><button type="button" class="seta" data-m="-1" aria-label="Subir: ${esc(it.t)}" ${pos === 0 ? "disabled" : ""}>▲</button>
            <button type="button" class="seta" data-m="1" aria-label="Descer: ${esc(it.t)}" ${pos === st.ordem.length - 1 ? "disabled" : ""}>▼</button></span>
            ${marcas[pos] ? `<span class="marca">${marcas[pos] === "certo" ? "✔ certo" : "✖ fora do lugar"}</span>` : ""}</li>`;
        }).join("")}</ol>
        ${at.preview ? `<div class="preview"><span>${esc(at.preview)}</span><p>${st.ordem.map(id => esc(itens[id].t)).join(" ")}</p></div>` : ""}`;
        c.querySelectorAll(".ord-item").forEach(li => {
          const pos = +li.dataset.pos;
          li.querySelectorAll(".seta").forEach(b => b.onclick = () => mover(pos, pos + +b.dataset.m, true));
          li.addEventListener("dragstart", e => { e.dataTransfer.setData("text/plain", String(pos)); li.classList.add("arrastando"); });
          li.addEventListener("dragend", () => li.classList.remove("arrastando"));
          li.addEventListener("dragover", e => { e.preventDefault(); li.classList.add("sobre"); });
          li.addEventListener("dragleave", () => li.classList.remove("sobre"));
          li.addEventListener("drop", e => { e.preventDefault(); mover(+e.dataTransfer.getData("text/plain"), pos); });
        });
      };
      const mover = (de, para, foco) => {
        if (para < 0 || para >= st.ordem.length || de === para) return;
        const [x] = st.ordem.splice(de, 1); st.ordem.splice(para, 0, x); marcas = {}; ctx.salvar(); draw();
        if (foco) { const b = c.querySelector(`.ord-item[data-pos="${para}"] .seta[data-m="${para < de ? -1 : 1}"]`) || c.querySelector(`.ord-item[data-pos="${para}"] .seta`); if (b && !b.disabled) b.focus(); }
      };
      ctx.verificar = () => {
        marcas = {}; let ok = 0;
        const alt = (at.alternativas || []).some(a => a.join() === st.ordem.join());
        st.ordem.forEach((id, pos) => { const c1 = alt || id === pos; marcas[pos] = c1 ? "certo" : "errado"; if (c1) ok++; });
        draw();
        if (ok === itens.length) ctx.concluir("certo", "A ordem está certa!");
        else ctx.errou(`${ok} de ${itens.length} itens estão no lugar certo (marcados com ✔). Mude os marcados com ✖.`);
      };
      ctx.resolver = () => { st.ordem = itens.map(x => x.id); marcas = {}; st.ordem.forEach((_, p) => marcas[p] = "certo"); draw(); };
      draw();
    },
    imprimir(at) {
      const itens = at.itens.map((x, i) => typeof x === "string" ? { t: x, id: i } : Object.assign({ id: i }, x));
      const ord = shuffle(itens);
      return `<table class="imp-t"><tr><th style="width:70px">Ordem</th><th>Item</th></tr>${ord.map(x => `<tr><td></td><td>${x.etiqueta ? esc(x.etiqueta) + " — " : ""}${md(x.t)}</td></tr>`).join("")}</table>${at.preview ? `<p>${esc(at.preview)}</p>${linhas(2)}` : ""}`;
    },
    resumoResposta(at, st) { const itens = at.itens.map(x => typeof x === "string" ? x : x.t); return (st.ordem || []).map((id, i) => `${i + 1}. ${esc(itens[id])}`).join("<br>"); }
  };

  /* ------------------------------------------------------------
     CLASSIFICAR — arrastar para caixas OU tabela de códigos
     ------------------------------------------------------------ */
  T.classificar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.lugar = st.lugar || {};
      let sel = null, marcas = {}, arrast = null;
      const cats = at.categorias;
      const rotCat = id => (cats.find(k => k.id === id) || {}).rot || "";
      if (at.modo === "tabela") {
        const draw = () => {
          c.innerHTML = `<div class="tabela-wrap"><table class="classif-tab"><thead><tr><th scope="col">${esc(at.colunaItem || "Situação")}</th><th scope="col">${esc(at.colunaResp || "Resposta")}</th></tr></thead><tbody>
            ${at.itens.map((it, i) => `<tr class="${marcas[i] || ""}"><td>${md(it.t)}${marcas[i] === "errado" && it.why && ctx.st.tentativas >= 1 ? "" : ""}</td>
              <td><div class="cod-grupo" role="radiogroup" aria-label="Resposta para: ${esc(it.t)}">${cats.map(k => `<button type="button" role="radio" class="cod ${st.lugar[i] === k.id ? "sel" : ""}" aria-checked="${st.lugar[i] === k.id}" data-i="${i}" data-c="${k.id}" title="${esc(k.rot)}"><strong>${esc(k.cod || k.id)}</strong><span class="cod-rot">${esc(k.rot)}</span></button>`).join("")}</div>
              ${marcas[i] ? `<span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}${marcas[i] === "certo" && it.why && ctx.st.status ? `<small class="why">${md(it.why)}</small>` : ""}</td></tr>`).join("")}</tbody></table></div>`;
          c.querySelectorAll(".cod").forEach(b => b.onclick = () => { st.lugar[b.dataset.i] = b.dataset.c; delete marcas[b.dataset.i]; ctx.salvar(); draw(); const nb = c.querySelector(`.cod[data-i="${b.dataset.i}"][data-c="${b.dataset.c}"]`); nb && nb.focus(); });
        };
        ctx.draw = draw; draw();
      } else {
        const draw = () => {
          const chip = (it, i) => `<button type="button" class="chip ${sel === i ? "sel" : ""} ${marcas[i] || ""}" data-i="${i}" draggable="true" aria-pressed="${sel === i}">${it.ic ? `<span aria-hidden="true">${it.ic}</span> ` : ""}${md(it.t)}${marcas[i] ? ` <span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}</button>`;
          c.innerHTML = `<p class="instr-arrastar">Arraste cada item para a caixa certa, ou clique no item e depois na caixa.</p>
            <div class="banco" data-c="" aria-label="Itens para classificar">${at.itens.map((it, i) => st.lugar[i] ? "" : chip(it, i)).join("") || `<span class="vazio">Todos os itens foram colocados.</span>`}</div>
            <div class="caixas" style="--n:${cats.length}">${cats.map(k => `<div class="caixa ${sel !== null ? "alvo" : ""}" data-c="${k.id}" tabindex="0" role="button" aria-label="Caixa ${esc(k.rot)}">
              <h3>${k.ic ? k.ic + " " : ""}${esc(k.rot)}</h3>${k.desc ? `<p class="cx-desc">${esc(k.desc)}</p>` : ""}
              <div class="cx-itens">${at.itens.map((it, i) => st.lugar[i] === k.id ? chip(it, i) : "").join("")}</div></div>`).join("")}</div>`;
          c.querySelectorAll(".chip").forEach(b => {
            b.onclick = e => { e.stopPropagation(); sel = sel === +b.dataset.i ? null : +b.dataset.i; draw(); const nb = c.querySelector(`.chip[data-i="${b.dataset.i}"]`); nb && nb.focus(); };
            b.addEventListener("dragstart", e => { arrast = +b.dataset.i; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", b.dataset.i); });
          });
          c.querySelectorAll("[data-c]").forEach(z => {
            const put = i => { st.lugar[i] = z.dataset.c || undefined; if (!z.dataset.c) delete st.lugar[i]; delete marcas[i]; sel = null; ctx.salvar(); draw(); const cx = c.querySelector(`[data-c="${z.dataset.c}"]`); cx && cx.focus && cx.focus(); };
            z.addEventListener("click", () => { if (sel !== null) put(sel); });
            tecla(z, () => { if (sel !== null) put(sel); });
            z.addEventListener("dragover", e => { e.preventDefault(); z.classList.add("sobre"); });
            z.addEventListener("dragleave", () => z.classList.remove("sobre"));
            z.addEventListener("drop", e => { e.preventDefault(); z.classList.remove("sobre"); const d = e.dataTransfer.getData("text/plain"); const i = d !== "" ? +d : arrast; if (i !== null && !isNaN(i)) put(i); arrast = null; });
          });
        };
        ctx.draw = draw; draw();
      }
      ctx.verificar = () => {
        const falta = at.itens.filter((_, i) => !st.lugar[i]).length;
        if (falta) { ctx.feedback("info", `Ainda falta${falta > 1 ? "m" : ""} ${falta} item${falta > 1 ? "s" : ""} para responder.`); return; }
        marcas = {}; const errados = [];
        at.itens.forEach((it, i) => { const ok = st.lugar[i] === it.c; marcas[i] = ok ? "certo" : "errado"; if (!ok) errados.push(it); });
        ctx.draw();
        if (!errados.length) ctx.concluir("certo", "Tudo certo!");
        else {
          const pista = errados.find(x => x.dica);
          ctx.errou(`${errados.length} resposta${errados.length > 1 ? "s" : ""} para rever (marcada${errados.length > 1 ? "s" : ""} com ✖).${pista ? " Pista: " + md(pista.dica) : ""}`);
        }
      };
      ctx.resolver = () => { at.itens.forEach((it, i) => { st.lugar[i] = it.c; marcas[i] = "certo"; }); ctx.draw(); };
    },
    imprimir(at) {
      if (at.modo === "tabela") return `<p class="imp-leg">${at.categorias.map(k => `<strong>${esc(k.cod || k.id)}</strong> = ${esc(k.rot)}`).join(" · ")}</p>
        <table class="imp-t"><tr><th>${esc(at.colunaItem || "Situação")}</th><th style="width:90px">${esc(at.colunaResp || "Resposta")}</th></tr>${at.itens.map(it => `<tr><td>${md(it.t)}</td><td></td></tr>`).join("")}</table>`;
      return `<p>Escreva ao lado de cada item a letra da categoria: ${at.categorias.map((k, i) => `<strong>${String.fromCharCode(65 + i)}</strong> = ${esc(k.rot)}`).join(" · ")}</p>
        <table class="imp-t"><tr><th>Item</th><th style="width:90px">Letra</th></tr>${at.itens.map(it => `<tr><td>${md(it.t)}</td><td></td></tr>`).join("")}</table>`;
    },
    resumoResposta(at, st) { return at.itens.map((it, i) => `${esc(it.t)} → ${esc((at.categorias.find(k => k.id === (st.lugar || {})[i]) || {}).rot || "—")}`).join("<br>"); }
  };

  /* ------------------------------------------------------------
     V OU F + CORRIJA A FALSA
     ------------------------------------------------------------ */
  T.vf = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.vf = st.vf || {}; st.corr = st.corr || {};
      let marcas = {}, liberadas = st.liberadas || {};
      const frase = (it, i) => {
        if (!it.corrigir || !liberadas[i]) return md(it.t);
        const k = it.t.indexOf(it.corrigir.trecho);
        if (k < 0) return md(it.t);
        const sel = `<select class="corr-sel" data-i="${i}" aria-label="Escolha a palavra que deixa a frase verdadeira"><option value="">— escolha —</option>${it.corrigir.opcoes.map(o => `<option ${st.corr[i] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
        return esc(it.t.slice(0, k)) + sel + esc(it.t.slice(k + it.corrigir.trecho.length));
      };
      const draw = () => {
        c.innerHTML = `<ol class="vf-lista">${at.itens.map((it, i) => `<li class="vf-item ${marcas[i] || ""}">
          <div class="vf-botoes" role="radiogroup" aria-label="Frase ${i + 1}: verdadeira ou falsa">
            <button type="button" role="radio" class="vfb ${st.vf[i] === "V" ? "sel" : ""}" aria-checked="${st.vf[i] === "V"}" data-i="${i}" data-v="V">V</button>
            <button type="button" role="radio" class="vfb ${st.vf[i] === "F" ? "sel" : ""}" aria-checked="${st.vf[i] === "F"}" data-i="${i}" data-v="F">F</button></div>
          <div class="vf-frase">${frase(it, i)}${liberadas[i] && it.corrigir && !(marcas[i] === "certo") ? `<small class="vf-pede">✏️ Esta frase é falsa. Troque a parte destacada para ela ficar verdadeira.</small>` : ""}
            ${marcas[i] === "certo" && it.why ? `<small class="why">${md(it.why)}</small>` : ""}</div>
          ${marcas[i] ? `<span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}</li>`).join("")}</ol>`;
        c.querySelectorAll(".vfb").forEach(b => b.onclick = () => { st.vf[b.dataset.i] = b.dataset.v; delete marcas[b.dataset.i]; if (b.dataset.v === "V") delete liberadas[b.dataset.i]; ctx.salvar(); draw(); const nb = c.querySelector(`.vfb[data-i="${b.dataset.i}"][data-v="${b.dataset.v}"]`); nb && nb.focus(); });
        c.querySelectorAll(".corr-sel").forEach(s => s.onchange = () => { st.corr[s.dataset.i] = s.value; delete marcas[s.dataset.i]; ctx.salvar(); });
      };
      ctx.verificar = () => {
        const falta = at.itens.filter((_, i) => !st.vf[i]).length;
        if (falta) { ctx.feedback("info", `Responda todas as frases (faltam ${falta}).`); return; }
        let erros = 0, pendCorr = 0; marcas = {};
        at.itens.forEach((it, i) => {
          const certoVF = (st.vf[i] === "V") === !!it.v;
          if (!certoVF) { marcas[i] = "errado"; erros++; return; }
          if (!it.v && it.corrigir) {
            if (!liberadas[i]) { liberadas[i] = true; pendCorr++; marcas[i] = ""; return; }
            if (st.corr[i] !== it.corrigir.certo) { marcas[i] = "errado"; erros++; return; }
          }
          marcas[i] = "certo";
        });
        st.liberadas = liberadas; ctx.salvar(); draw();
        if (!erros && !pendCorr) ctx.concluir("certo", "Todas certas, inclusive as correções!");
        else if (!erros) ctx.feedback("info", `Você acertou o V e o F! Agora corrija ${pendCorr > 1 ? "as " + pendCorr + " frases falsas" : "a frase falsa"}: escolha a palavra certa na caixinha e clique em Verificar de novo.`);
        else ctx.errou(`${erros} item${erros > 1 ? "s" : ""} para rever (✖). Releia a frase com calma.`);
      };
      ctx.resolver = () => { at.itens.forEach((it, i) => { st.vf[i] = it.v ? "V" : "F"; if (it.corrigir) { liberadas[i] = true; st.corr[i] = it.corrigir.certo; } marcas[i] = "certo"; }); st.liberadas = liberadas; draw(); };
      draw();
    },
    imprimir(at) { return `<p>Escreva <strong>V</strong> ou <strong>F</strong>. Nas falsas, risque o erro e escreva a forma correta.</p><ol>${at.itens.map(it => `<li>( &nbsp; ) ${md(it.t)}</li>`).join("")}</ol>`; },
    resumoResposta(at, st) { return at.itens.map((it, i) => `${i + 1}) ${(st.vf || {})[i] || "—"}${(st.corr || {})[i] ? " → " + esc(st.corr[i]) : ""}`).join(" · "); }
  };

  /* ------------------------------------------------------------
     COMPLETAR — texto com lacunas e banco de palavras
     (no resumo, as palavras em negrito viram lacunas)
     ------------------------------------------------------------ */
  T.completar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.lac = st.lac || {};
      const partes = at.texto.split(/\*\*(.+?)\*\*/g); // ímpares = lacunas
      const lacunas = []; partes.forEach((p, i) => { if (i % 2) lacunas.push(p); });
      if (!st.banco || st.banco.length !== lacunas.length) st.banco = shuffle(lacunas.map((w, i) => i));
      let sel = null, marcas = {};
      const usado = k => Object.values(st.lac).includes(k);
      const draw = () => {
        let li = -1;
        const html = partes.map((p, i) => {
          if (!(i % 2)) return esc(p);
          li++;
          const k = st.lac[li];
          return `<button type="button" class="lacuna ${k !== undefined ? "cheia" : ""} ${marcas[li] || ""}" data-l="${li}" aria-label="Lacuna ${li + 1}${k !== undefined ? ": " + esc(lacunas[k]) : " vazia"}">${k !== undefined ? esc(lacunas[k]) : "______"}</button>`;
        }).join("");
        c.innerHTML = `<p class="instr-arrastar">Clique numa palavra do banco e depois na lacuna (ou arraste). Clique numa lacuna preenchida para esvaziar.</p>
          <div class="banco palavras">${st.banco.map(k => usado(k) ? "" : `<button type="button" class="chip palavra ${sel === k ? "sel" : ""}" data-k="${k}" draggable="true" aria-pressed="${sel === k}">${esc(lacunas[k])}</button>`).join("") || '<span class="vazio">Banco vazio.</span>'}</div>
          <p class="texto-lacunas">${html}</p>${at.chaves && at.chaves.length ? `<p class="chaves"><strong>Palavras-chave:</strong> ${at.chaves.map(esc).join(" · ")}</p>` : ""}`;
        c.querySelectorAll(".palavra").forEach(b => {
          b.onclick = () => { sel = sel === +b.dataset.k ? null : +b.dataset.k; draw(); const nb = c.querySelector(`.palavra[data-k="${b.dataset.k}"]`); nb && nb.focus(); };
          b.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", b.dataset.k));
        });
        c.querySelectorAll(".lacuna").forEach(b => {
          const l = +b.dataset.l;
          const put = k => { Object.keys(st.lac).forEach(x => { if (st.lac[x] === k) delete st.lac[x]; }); st.lac[l] = k; delete marcas[l]; sel = null; ctx.salvar(); draw(); const nx = c.querySelector(`.lacuna[data-l="${l + 1}"]`) || c.querySelector(".palavra"); nx && nx.focus(); };
          b.onclick = () => { if (sel !== null) put(sel); else if (st.lac[l] !== undefined) { delete st.lac[l]; delete marcas[l]; ctx.salvar(); draw(); } };
          b.addEventListener("dragover", e => e.preventDefault());
          b.addEventListener("drop", e => { e.preventDefault(); put(+e.dataTransfer.getData("text/plain")); });
        });
      };
      ctx.verificar = () => {
        const falta = lacunas.filter((_, i) => st.lac[i] === undefined).length;
        if (falta) { ctx.feedback("info", `Faltam ${falta} lacuna${falta > 1 ? "s" : ""}.`); return; }
        marcas = {}; let err = 0;
        lacunas.forEach((w, i) => { const ok = norm(lacunas[st.lac[i]]) === norm(w); marcas[i] = ok ? "certo" : "errado"; if (!ok) err++; });
        draw();
        err ? ctx.errou(`${err} lacuna${err > 1 ? "s" : ""} com a palavra trocada (✖). Clique nela para esvaziar e tente outra.`) : ctx.concluir("certo", "Resumo completo! Leia em voz alta para fixar.");
      };
      ctx.resolver = () => { lacunas.forEach((w, i) => { st.lac[i] = i; marcas[i] = "certo"; }); draw(); };
      draw();
    },
    imprimir(at) {
      const partes = at.texto.split(/\*\*(.+?)\*\*/g); const banco = shuffle(partes.filter((_, i) => i % 2));
      return `<p class="imp-banco"><strong>Banco de palavras:</strong> ${banco.map(esc).join(" · ")}</p><p class="imp-lac">${partes.map((p, i) => i % 2 ? "______________" : esc(p)).join("")}</p>`;
    }
  };

  /* ------------------------------------------------------------
     LIGAR — termo ↔ significado, em rodadas de até 5 pares
     ------------------------------------------------------------ */
  T.ligar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.feitos = st.feitos || [];
      const rodadas = []; const nR = at.porRodada || 5; for (let i = 0; i < at.pares.length; i += nR) rodadas.push(at.pares.slice(i, i + nR).map((p, k) => i + k));
      let r = rodadas.findIndex(rd => rd.some(i => !st.feitos.includes(i))); if (r < 0) r = rodadas.length - 1;
      let selA = null; let ordB = shuffle(rodadas[r]);
      const draw = () => {
        const rd = rodadas[r];
        c.innerHTML = `<p class="instr-arrastar">Rodada ${r + 1} de ${rodadas.length}: clique num termo e depois no significado dele.</p>
          <div class="ligar"><div class="lig-col">${rd.map(i => `<button type="button" class="lig a ${st.feitos.includes(i) ? "certo" : ""} ${selA === i ? "sel" : ""}" data-i="${i}" ${st.feitos.includes(i) ? "disabled" : ""} aria-pressed="${selA === i}">${esc(at.pares[i].a)}${st.feitos.includes(i) ? " ✔" : ""}</button>`).join("")}</div>
          <div class="lig-col">${ordB.map(i => `<button type="button" class="lig b ${st.feitos.includes(i) ? "certo" : ""}" data-i="${i}" ${st.feitos.includes(i) ? "disabled" : ""}>${at.pares[i].b}</button>`).join("")}</div></div>`;
        c.querySelectorAll(".lig.a").forEach(b => b.onclick = () => { selA = +b.dataset.i; draw(); const nb = c.querySelector(`.lig.a[data-i="${selA}"]`); nb && nb.focus(); });
        c.querySelectorAll(".lig.b").forEach(b => b.onclick = () => {
          if (selA === null) { ctx.feedback("info", "Primeiro clique num termo da coluna da esquerda."); return; }
          if (+b.dataset.i === selA) {
            st.feitos.push(selA); selA = null; ctx.salvar(); ctx.feedback("ok", "Par certo!");
            if (rd.every(i => st.feitos.includes(i))) {
              if (r < rodadas.length - 1) { r++; ordB = shuffle(rodadas[r]); }
              else { draw(); ctx.concluir("certo", "Você ligou todos os termos!"); return; }
            }
            draw(); const nb = c.querySelector(".lig.a:not([disabled])"); nb && nb.focus();
          } else { b.classList.add("treme"); setTimeout(() => b.classList.remove("treme"), 400); ctx.errou(`“${esc(at.pares[selA].a)}” não combina com esse significado.`); }
        });
      };
      ctx.resolver = () => { st.feitos = at.pares.map((_, i) => i); r = rodadas.length - 1; draw(); };
      draw();
    },
    imprimir(at) {
      const b = shuffle(at.pares.map((p, i) => i));
      return `<table class="imp-t"><tr><th>Termo</th><th style="width:60px">Letra</th><th>Significado</th></tr>${at.pares.map((p, i) => `<tr><td>${esc(p.a)}</td><td></td><td><strong>${String.fromCharCode(65 + i)})</strong> ${at.pares[b[i]].b}</td></tr>`).join("")}</table>`;
    }
  };

  /* ------------------------------------------------------------
     ABERTA — resposta escrita, critérios de revisão,
     detector de palavras ofensivas (opcional). Professor confere.
     ------------------------------------------------------------ */
  T.aberta = {
    // com "conferir", a resposta é corrigida automaticamente por critérios (tamanho e palavras-chave)
    auto: at => !!at.conferir,
    render(c, at, ctx) {
      const st = ctx.st; st.resposta = st.resposta || {};
      const campos = at.campos || [{ rot: "", linhas: at.linhas || 3 }];
      c.innerHTML = `${campos.map((f, i) => `<label class="campo-aberto">${f.rot ? `<span>${md(f.rot)}</span>` : ""}
          <textarea rows="${f.linhas || 3}" data-i="${i}" aria-label="${esc(f.rot || at.titulo || "Resposta")}" placeholder="${esc(f.ph || "Escreva aqui...")}">${esc(st.resposta[i] || "")}</textarea></label>`).join("")}
        ${at.criterios ? `<div class="criterios"><p><strong>Antes de enviar, confira:</strong></p><ul>${at.criterios.map(k => `<li>☐ ${md(k)}</li>`).join("")}</ul></div>` : ""}
        ${at.exemplo ? `<details class="exemplo"><summary>Ver um exemplo de resposta (depois de tentar)</summary><p>${md(at.exemplo)}</p></details>` : ""}`;
      c.querySelectorAll("textarea").forEach(t => t.oninput = () => { st.resposta[t.dataset.i] = t.value; ctx.salvar(); });
      ctx.verificar = () => {
        const vazios = campos.filter((_, i) => !(st.resposta[i] || "").trim()).length;
        if (vazios) { ctx.feedback("info", `Preencha ${vazios > 1 ? "todos os campos" : "a resposta"} antes de enviar.`); return; }
        if (at.detector) {
          const achou = [];
          campos.forEach((_, i) => at.detector.palavras.forEach(p => { if (norm(st.resposta[i] || "").split(" ").includes(norm(p)) || norm(st.resposta[i] || "").includes(norm(p) + " ")) achou.push(p); }));
          if (achou.length) { ctx.errou(`Revise: ainda aparece “${esc([...new Set(achou)].join("”, “"))}”. ${at.detector.msg || "Troque por palavras respeitosas."}`); return; }
        }
        if (at.exigir) {
          const tudo = norm(campos.map((_, i) => st.resposta[i] || "").join(" "));
          const faltam = at.exigir.filter(w => !tudo.includes(norm(w)));
          if (faltam.length) { ctx.errou(`Ainda falta usar: “${faltam.map(esc).join("”, “")}”.`); return; }
        }
        if (at.minPalavras) {
          const curto = campos.some((_, i) => (st.resposta[i] || "").trim().split(/\s+/).length < at.minPalavras);
          if (curto) { ctx.feedback("info", `Escreva um pouco mais (pelo menos ${at.minPalavras} palavras em cada campo).`); return; }
        }
        if (at.conferir) {
          const cf = at.conferir, txt = campos.map((_, i) => st.resposta[i] || "");
          if (cf.minPalavras && txt.some(t => palavras(t) < cf.minPalavras)) { ctx.errou(`Escreva um pouco mais: pelo menos ${cf.minPalavras} palavras${campos.length > 1 ? " em cada campo" : ""}.`); return; }
          if (cf.porCampo) {
            const i = cf.porCampo.findIndex((alts, k) => alts && !contem(txt[k], alts));
            if (i >= 0) { ctx.errou(`No campo “${semTags(campos[i].rot || "resposta")}”, use pelo menos uma palavra-chave do tema (ex.: ${cf.porCampo[i].slice(0, 3).map(x => "“" + esc(x.trim()) + "”").join(", ")}).`); return; }
          }
          if (cf.grupos) {
            const tudo = txt.join(" ");
            const faltam = cf.grupos.filter(g => !contem(tudo, g.alts || g));
            const min = cf.minGrupos || cf.grupos.length;
            if (cf.grupos.length - faltam.length < min) { const f = faltam[0]; ctx.errou(`Quase! Ainda falta falar sobre: <strong>${esc(f.dica || (f.alts || f)[0])}</strong>.`); return; }
          }
          if (cf.diferentes === "todos" && new Set(txt.map(norm)).size < txt.length) { ctx.errou("Cada campo precisa ter uma resposta diferente."); return; }
          if (Array.isArray(cf.diferentes) && norm(txt[cf.diferentes[0]]) === norm(txt[cf.diferentes[1]])) { ctx.errou("As duas ações precisam ser diferentes."); return; }
          if (cf.blocoDuasVezes) {
            // nome do bloco = primeira palavra do 1º campo (pulando "bloco"); precisa aparecer 2 vezes no 2º campo
            const pals = norm(txt[0]).replace(/[^a-z0-9 ]/g, " ").split(" ").filter(w => w.length >= 3 && w !== "bloco");
            const nome = pals[0] || "";
            const vezes = nome ? (" " + norm(txt[1]).replace(/[^a-z0-9 ]/g, " ") + " ").split(" " + nome + " ").length - 1 : 0;
            if (vezes < 2) { ctx.errou(nome ? `O algoritmo principal precisa chamar o bloco <strong>${esc(nome.toUpperCase())}</strong> duas vezes, pelo nome.` : "Comece o primeiro campo com o nome do bloco."); return; }
          }
          ctx.concluir("certo", cf.msg || "Resposta conferida automaticamente! O professor pode ler a sua resposta no painel.");
          return;
        }
        ctx.concluir("enviado", "Resposta registrada! Mostre ao professor: ele confere esta atividade.");
      };
      if (at.verificarRotulo !== false && !at.conferir) setTimeout(() => { const b = ctx.el.querySelector('[data-a="verificar"]'); if (b) b.textContent = "Registrar resposta"; }, 0);
    },
    imprimir(at) { const campos = at.campos || [{ rot: "", linhas: at.linhas || 3 }]; return campos.map(f => `${f.rot ? `<p>${md(f.rot)}</p>` : ""}${linhas(f.linhas || 3)}`).join(""); },
    resumoResposta(at, st) { return Object.values(st.resposta || {}).map(t => esc(t).replace(/\n/g, "<br>")).join("<hr>"); }
  };

  /* ------------------------------------------------------------
     TABELA — completar células (números, palavras ou listas)
     ------------------------------------------------------------ */
  T.tabela = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.cel = st.cel || {};
      let marcas = {};
      const draw = () => {
        c.innerHTML = `<div class="tabela-wrap"><table class="tab-completar">${at.colunas ? `<thead><tr>${at.colunas.map(k => `<th scope="col">${md(k)}</th>`).join("")}</tr></thead>` : ""}<tbody>
          ${at.linhas.map((ln, r) => `<tr>${ln.map((cel, k) => {
            const id = r + "-" + k;
            if (typeof cel === "string" || typeof cel === "number") return `<td>${md(String(cel))}</td>`;
            if (cel.op) return `<td class="${marcas[id] || ""}"><select data-id="${id}" aria-label="${esc(cel.rot || "Resposta")}"><option value="">—</option>${cel.op.map(o => `<option ${st.cel[id] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>${marca(id)}</td>`;
            return `<td class="${marcas[id] || ""}"><input data-id="${id}" ${cel.tipo === "num" ? 'inputmode="decimal"' : ""} value="${esc(st.cel[id] || "")}" size="${cel.w || 10}" aria-label="${esc(cel.rot || ln[0] || "Resposta")}" placeholder="${esc(cel.ph || "")}">${marca(id)}</td>`;
          }).join("")}</tr>`).join("")}</tbody></table></div>`;
        c.querySelectorAll("input,select").forEach(e => { e.oninput = e.onchange = () => { st.cel[e.dataset.id] = e.value; delete marcas[e.dataset.id]; ctx.salvar(); e.parentElement.classList.remove("certo", "errado"); const m = e.parentElement.querySelector(".marca"); m && m.remove(); }; });
      };
      const marca = id => marcas[id] ? `<span class="marca">${marcas[id] === "certo" ? "✔" : "✖"}</span>` : "";
      ctx.verificar = () => {
        const cels = []; at.linhas.forEach((ln, r) => ln.forEach((cel, k) => { if (cel && typeof cel === "object") cels.push([r + "-" + k, cel]); }));
        const falta = cels.filter(([id]) => !(st.cel[id] || "").trim()).length;
        if (falta) { ctx.feedback("info", `Faltam ${falta} campo${falta > 1 ? "s" : ""}.`); return; }
        marcas = {}; let err = 0; const dicasErro = [];
        cels.forEach(([id, cel]) => { const ok = cel.re ? confere(st.cel[id], cel.re) : igual(st.cel[id], cel.r, cel.tipo); marcas[id] = ok ? "certo" : "errado"; if (!ok) { err++; if (cel.dica) dicasErro.push(cel.dica); } });
        draw();
        err ? ctx.errou(`${err} campo${err > 1 ? "s" : ""} para rever (✖).${dicasErro.length ? " Pista: " + md(dicasErro[0]) : ""}`) : ctx.concluir("certo", "Tabela completa e certa!");
      };
      ctx.resolver = () => { at.linhas.forEach((ln, r) => ln.forEach((cel, k) => { if (cel && typeof cel === "object") { const id = r + "-" + k; st.cel[id] = cel.exemplo || (Array.isArray(cel.r) ? cel.r[0] : cel.r); marcas[id] = "certo"; } })); draw(); };
      draw();
    },
    imprimir(at) { return `<table class="imp-t">${at.colunas ? `<tr>${at.colunas.map(k => `<th>${md(k)}</th>`).join("")}</tr>` : ""}${at.linhas.map(ln => `<tr>${ln.map(cel => `<td>${typeof cel === "object" ? (cel.op ? cel.op.map(esc).join(" / ") : "") : md(String(cel))}</td>`).join("")}</tr>`).join("")}</table>`; },
    resumoResposta(at, st) { return Object.values(st.cel || {}).map(esc).join(" · "); }
  };

  /* ------------------------------------------------------------
     TAREFA NO COMPUTADOR — passo a passo; o professor confere
     ------------------------------------------------------------ */
  T.pc = {
    // com "conferir", o aluno digita o que encontrou no computador e o portal confere sozinho
    auto: at => !!at.conferir,
    render(c, at, ctx) {
      const st = ctx.st; st.passos = st.passos || {}; st.conf = st.conf || {};
      let marcas = {};
      const draw = () => {
        c.innerHTML = `<div class="pc"><p class="pc-prog">🖥️ Programa: <strong>${esc(at.programa)}</strong></p>
          <ol class="pc-passos">${at.passos.map((p, i) => `<li><label><input type="checkbox" data-i="${i}" ${st.passos[i] ? "checked" : ""}> <span>${md(p)}</span></label></li>`).join("")}</ol>
          ${at.conferir ? `<div class="pc-conf"><p><strong>✍️ Agora conte o que aparece no seu computador:</strong></p>${at.conferir.map((f, i) => `<label class="campo pc-conf-campo ${marcas[i] || ""}"><span>${md(f.rot)}</span><input data-c="${i}" value="${esc(st.conf[i] || "")}" placeholder="${esc(f.ph || "")}" autocomplete="off">${marcas[i] ? `<span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}</label>`).join("")}</div>`
            : `<p class="pc-aviso">👀 Não feche o programa antes de mostrar ao professor.</p>`}</div>`;
        c.querySelectorAll("input[data-i]").forEach(x => x.onchange = () => { st.passos[x.dataset.i] = x.checked; ctx.salvar(); });
        c.querySelectorAll("input[data-c]").forEach(x => x.oninput = () => { st.conf[x.dataset.c] = x.value; delete marcas[x.dataset.c]; ctx.salvar(); });
      };
      ctx.verificar = () => {
        const falta = at.passos.filter((_, i) => !st.passos[i]).length;
        if (falta) { ctx.feedback("info", `Marque cada passo quando terminar (faltam ${falta}).`); return; }
        if (at.conferir) {
          if (at.conferir.some((_, i) => !(st.conf[i] || "").trim())) { ctx.feedback("info", "Preencha todos os campos com o que aparece no seu computador."); return; }
          marcas = {}; const erros = [];
          at.conferir.forEach((f, i) => { const ok = confere(st.conf[i], f.re); marcas[i] = ok ? "certo" : "errado"; if (!ok) erros.push(f); });
          draw();
          erros.length ? ctx.errou(`${erros.length} campo${erros.length > 1 ? "s" : ""} para rever (✖).${erros[0].dica ? " Pista: " + md(erros[0].dica) : ""}`) : ctx.concluir("certo", at.okMsg || "Tarefa no computador conferida!");
          return;
        }
        ctx.concluir("enviado", "🙋 Pronto! Levante a mão e chame o professor para conferir.");
      };
      setTimeout(() => { const b = ctx.el.querySelector('[data-a="verificar"]'); if (b) b.textContent = at.conferir ? "Verificar" : "Terminei — chamar o professor"; }, 0);
      draw();
    },
    imprimir(at) { return `<p>🖥️ No computador (<strong>${esc(at.programa)}</strong>):</p><ol>${at.passos.map(p => `<li>☐ ${md(p)}</li>`).join("")}</ol>`; }
  };

  /* ------------------------------------------------------------
     INFO — texto de apoio dentro da missão (não conta progresso)
     ------------------------------------------------------------ */
  T.info = { semStatus: true, auto: false, render(c, at) { c.innerHTML = `<div class="info-bloco">${at.html}</div>`; }, imprimir(at) { return at.html; } };

  /* ------------------------------------------------------------
     ESCOLHA — perguntas com explicação (usada com moderação)
     ------------------------------------------------------------ */
  T.escolha = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.esc = st.esc || {};
      let marcas = {};
      const draw = () => {
        c.innerHTML = at.perguntas.map((q, i) => `<fieldset class="esc-q ${marcas[i] || ""}"><legend>${md(q.p)}</legend>
          ${q.opcoes.map((o, k) => `<label class="esc-op"><input type="radio" name="${at.id}-${i}" value="${k}" ${st.esc[i] === k ? "checked" : ""}> ${md(o)}</label>`).join("")}
          ${marcas[i] === "certo" && q.why ? `<small class="why">${md(q.why)}</small>` : ""}${marcas[i] ? `<span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}</fieldset>`).join("");
        c.querySelectorAll("input").forEach(x => x.onchange = () => { const i = +x.name.split("-").pop(); st.esc[i] = +x.value; delete marcas[i]; ctx.salvar(); });
      };
      ctx.verificar = () => {
        if (at.perguntas.some((_, i) => st.esc[i] === undefined)) { ctx.feedback("info", "Responda todas as perguntas."); return; }
        marcas = {}; let err = 0;
        at.perguntas.forEach((q, i) => { const ok = q.certo < 0 || st.esc[i] === q.certo; marcas[i] = ok ? "certo" : "errado"; if (!ok) err++; });
        draw();
        err ? ctx.errou(`${err} resposta${err > 1 ? "s" : ""} para rever (✖).`) : ctx.concluir("certo", "Certo!");
      };
      ctx.resolver = () => { at.perguntas.forEach((q, i) => { if (q.certo >= 0) st.esc[i] = q.certo; marcas[i] = "certo"; }); draw(); };
      draw();
    },
    imprimir(at) { return at.perguntas.map(q => `<p>${md(q.p)}</p><ul class="imp-op">${q.opcoes.map(o => `<li>☐ ${md(o)}</li>`).join("")}</ul>`).join(""); }
  };

  /* ------------------------------------------------------------
     SINAIS — marcar todos os itens corretos (ex.: sinais de golpe)
     ------------------------------------------------------------ */
  T.sinais = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.m = st.m || {};
      let mostrar = !!st.status;
      const draw = () => {
        c.innerHTML = `<p class="instr-arrastar">Marque <strong>todos</strong> os itens que se aplicam.</p><ul class="sinais">${at.opcoes.map((o, i) => `<li class="${mostrar ? (o.certo ? "certo" : "neutro") : ""}"><label><input type="checkbox" data-i="${i}" ${st.m[i] ? "checked" : ""}> ${md(o.t)}</label>${mostrar && o.why ? `<small class="why">${md(o.why)}</small>` : ""}</li>`).join("")}</ul>`;
        c.querySelectorAll("input").forEach(x => x.onchange = () => { st.m[x.dataset.i] = x.checked; ctx.salvar(); });
      };
      ctx.verificar = () => {
        const certos = at.opcoes.map((o, i) => o.certo ? i : -1).filter(i => i >= 0);
        const marc = at.opcoes.map((o, i) => st.m[i] ? i : -1).filter(i => i >= 0);
        const acertos = marc.filter(i => at.opcoes[i].certo).length, extras = marc.length - acertos;
        if (acertos === certos.length && !extras) { mostrar = true; draw(); ctx.concluir("certo", "Você encontrou todos!"); return; }
        const p = []; if (acertos < certos.length) p.push(`encontrou ${acertos} de ${certos.length}`); if (extras) p.push(`${extras} marcado${extras > 1 ? "s" : ""} não se aplica${extras > 1 ? "m" : ""}`);
        ctx.errou("Quase: você " + p.join(" e ") + ".");
      };
      ctx.resolver = () => { at.opcoes.forEach((o, i) => st.m[i] = !!o.certo); mostrar = true; draw(); };
      draw();
    },
    imprimir(at) { return `<ul class="imp-op">${at.opcoes.map(o => `<li>☐ ${md(o.t)}</li>`).join("")}</ul>`; }
  };

  /* ------------------------------------------------------------
     AUTOAVALIAÇÃO
     ------------------------------------------------------------ */
  T.autoavaliacao = {
    auto: false,
    render(c, at, ctx) {
      const st = ctx.st; st.m = st.m || {};
      c.innerHTML = `<ul class="auto">${at.itens.map((t, i) => `<li><label><input type="checkbox" data-i="${i}" ${st.m[i] ? "checked" : ""}> ${t}</label></li>`).join("")}</ul><p class="ajuda">Seja sincero: o que ainda não estiver marcado é o que vale estudar mais.</p>`;
      c.querySelectorAll("input").forEach(x => x.onchange = () => { st.m[x.dataset.i] = x.checked; ctx.salvar(); });
      ctx.verificar = () => { const n = Object.values(st.m).filter(Boolean).length; ctx.concluir("feito", `Autoavaliação registrada: ${n} de ${at.itens.length} itens marcados.`); };
      setTimeout(() => { const b = ctx.el.querySelector('[data-a="verificar"]'); if (b) b.textContent = "Registrar"; }, 0);
    },
    imprimir(at) { return `<ul class="imp-op">${at.itens.map(t => `<li>☐ ${t}</li>`).join("")}</ul>`; }
  };

  /* ------------------------------------------------------------
     SENHA FORTE — medidor de força (exemplos inventados)
     ------------------------------------------------------------ */
  const criteriosSenha = [
    ["8 caracteres ou mais", s => s.length >= 8],
    ["letra maiúscula", s => /[A-ZÀ-Ý]/.test(s)],
    ["letra minúscula", s => /[a-zà-ÿ]/.test(s)],
    ["número", s => /\d/.test(s)],
    ["símbolo (como # ! @ %)", s => /[^\p{L}\d\s]/u.test(s)],
    ["nada óbvio (123456, senha, abc, qwerty)", s => !/(123|234|345|456|abc|senha|password|qwerty|1111|0000)/i.test(s)]
  ];
  T.senha = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.s = st.s || {}; st.pq = st.pq || {};
      const n = at.n || 2;
      const medir = v => criteriosSenha.map(([r, f]) => [r, !!v && f(v)]);
      const draw = () => {
        c.innerHTML = `<p class="alerta">⚠️ São só exemplos para treinar. <strong>Nunca</strong> digite aqui uma senha que você usa de verdade.</p>
          ${Array.from({ length: n }, (_, i) => { const m = medir(st.s[i] || ""); const pts = m.filter(x => x[1]).length;
            return `<div class="senha-box"><label class="campo"><span>Senha inventada ${i + 1}</span><input data-i="${i}" class="senha-in" value="${esc(st.s[i] || "")}" autocomplete="off" spellcheck="false" aria-describedby="sm-${at.id}-${i}"></label>
            <div class="medidor" id="sm-${at.id}-${i}"><span class="med-barra"><i style="width:${pts / 6 * 100}%" class="${pts === 6 ? "forte" : pts >= 4 ? "media" : "fraca"}"></i></span>
            <strong>${pts === 6 ? "Forte 💪" : pts >= 4 ? "Média" : "Fraca"}</strong>
            <ul class="med-lista">${m.map(([r, ok]) => `<li class="${ok ? "certo" : ""}">${ok ? "✔" : "○"} ${r}</li>`).join("")}</ul></div>
            <label class="campo-aberto"><span>Por que ela é forte?</span><textarea rows="2" data-p="${i}">${esc(st.pq[i] || "")}</textarea></label></div>`; }).join("")}`;
        c.querySelectorAll(".senha-in").forEach(x => x.oninput = () => { st.s[x.dataset.i] = x.value; ctx.salvar(); const pos = x.selectionStart; draw(); const nx = c.querySelector(`.senha-in[data-i="${x.dataset.i}"]`); nx.focus(); nx.setSelectionRange(pos, pos); });
        c.querySelectorAll("textarea").forEach(x => x.oninput = () => { st.pq[x.dataset.p] = x.value; ctx.salvar(); });
      };
      ctx.verificar = () => {
        for (let i = 0; i < n; i++) {
          const fal = medir(st.s[i] || "").filter(x => !x[1]).map(x => x[0]);
          if (fal.length) return ctx.errou(`A senha ${i + 1} ainda precisa de: ${fal.join(", ")}.`);
          if (!(st.pq[i] || "").trim()) return ctx.feedback("info", `Explique por que a senha ${i + 1} é forte.`);
        }
        if (n > 1 && st.s[0] === st.s[1]) return ctx.errou("Invente senhas diferentes uma da outra.");
        ctx.concluir("certo", "As duas senhas inventadas são fortes!");
      };
      draw();
    },
    imprimir(at) { return `<table class="imp-t"><tr><th>Senha inventada</th><th>Por que é forte?</th></tr>${Array.from({ length: at.n || 2 }, (_, i) => `<tr><td>${i + 1}.</td><td></td></tr>`).join("")}</table>`; },
    resumoResposta(at, st) { return Object.values(st.pq || {}).map(esc).join("<br>"); }
  };

  /* ------------------------------------------------------------
     ROBÔ NO LABIRINTO — programação com setas e "repita"
     ------------------------------------------------------------ */
  const reduzido = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  T.robo = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.prog = st.prog || [];
      const G = at.grade, R = G.length, C = G[0].length;
      let ini, fim; G.forEach((ln, r) => [...ln].forEach((ch, k) => { if (ch === "R") ini = [r, k]; if (ch === "*") fim = [r, k]; }));
      const cols = "ABCDEFGH".slice(0, C);
      const D = { U: [-1, 0, "⬆️", "cima"], D: [1, 0, "⬇️", "baixo"], L: [0, -1, "⬅️", "esquerda"], R: [0, 1, "➡️", "direita"] };
      let pos = ini.slice(), rastro = [];
      const draw = () => {
        c.innerHTML = `<div class="robo">
          <table class="robo-grade" aria-label="Labirinto do robô"><tr><th></th>${[...cols].map(x => `<th scope="col">${x}</th>`).join("")}</tr>
            ${G.map((ln, r) => `<tr><th scope="row">${r + 1}</th>${[...ln].map((ch, k) => {
              const aqui = pos[0] === r && pos[1] === k; const passou = rastro.some(p => p[0] === r && p[1] === k);
              return `<td class="${ch === "#" ? "parede" : ""} ${passou ? "rastro" : ""}" aria-label="${cols[k]}${r + 1}${ch === "#" ? " parede" : ch === "*" ? " estrela" : ""}${aqui ? " robô aqui" : ""}">${aqui ? "🤖" : ch === "#" ? "🧱" : ch === "*" ? "⭐" : ""}</td>`;
            }).join("")}</tr>`).join("")}</table>
          <div class="robo-prog">
            <p><strong>Programa do robô</strong> ${at.compacto ? `<small>(meta: no máximo ${at.compacto} blocos, usando “repita”)</small>` : ""}</p>
            <div class="robo-add" aria-label="Acrescentar comando">${Object.keys(D).map(k => `<button type="button" class="seta-btn" data-d="${k}" aria-label="Acrescentar: andar para ${D[k][3]}">${D[k][2]}</button>`).join("")}</div>
            <ol class="robo-lista">${st.prog.map((cmd, i) => `<li><span class="cmd">${cmd.n > 1 ? `repita ${cmd.n}×` : ""} ${D[cmd.d][2]}</span>
              <span class="cmd-ctl"><button type="button" data-i="${i}" data-op="menos" aria-label="Repetir menos vezes">−</button><button type="button" data-i="${i}" data-op="mais" aria-label="Repetir mais vezes">+</button><button type="button" data-i="${i}" data-op="del" aria-label="Apagar comando">✕</button></span></li>`).join("") || '<li class="vazio">Clique nas setas para montar o caminho.</li>'}</ol>
            <p class="robo-texto" aria-live="polite">${st.prog.length ? "Em texto: " + st.prog.map(x => (x.n > 1 ? `repita ${x.n} vezes ` : "") + D[x.d][2]).join(" · ") : ""}</p>
            <div class="row-btns"><button type="button" class="btn btn-sec" data-op="limpar">Limpar</button></div>
          </div></div>`;
        c.querySelectorAll(".seta-btn").forEach(b => b.onclick = () => { const u = st.prog[st.prog.length - 1]; if (at.agrupar !== false && u && u.d === b.dataset.d && at.compacto) u.n++; else st.prog.push({ d: b.dataset.d, n: 1 }); reset(); ctx.salvar(); draw(); c.querySelector(`.seta-btn[data-d="${b.dataset.d}"]`).focus(); });
        c.querySelectorAll(".cmd-ctl button").forEach(b => b.onclick = () => { const i = +b.dataset.i; const x = st.prog[i]; if (b.dataset.op === "mais") x.n = Math.min(9, x.n + 1); if (b.dataset.op === "menos") x.n = Math.max(1, x.n - 1); if (b.dataset.op === "del") st.prog.splice(i, 1); reset(); ctx.salvar(); draw(); });
        c.querySelector('[data-op="limpar"]').onclick = () => { st.prog = []; reset(); ctx.salvar(); draw(); };
      };
      const reset = () => { pos = ini.slice(); rastro = []; };
      const passos = () => { const s = []; st.prog.forEach(x => { for (let i = 0; i < x.n; i++) s.push(x.d); }); return s; };
      const executar = () => new Promise(fim2 => {
        reset(); const s = passos(); let i = 0; let erro = null;
        const step = () => {
          if (i >= s.length || erro) return fim2(erro);
          const d = D[s[i]]; const n = [pos[0] + d[0], pos[1] + d[1]];
          if (n[0] < 0 || n[0] >= R || n[1] < 0 || n[1] >= C) { erro = `O robô saiu do tabuleiro no passo ${i + 1}.`; draw(); return fim2(erro); }
          if (G[n[0]][n[1]] === "#") { erro = `O robô bateu na parede ${cols[n[1]]}${n[0] + 1} no passo ${i + 1}.`; draw(); return fim2(erro); }
          rastro.push(pos.slice()); pos = n; i++; draw();
          reduzido() ? step() : setTimeout(step, 260);
        };
        step();
      });
      ctx.verificar = async () => {
        if (!st.prog.length) { ctx.feedback("info", "Monte o programa com as setas primeiro."); return; }
        const b = ctx.el.querySelector('[data-a="verificar"]'); b.disabled = true;
        const erro = await executar(); b.disabled = false;
        if (erro) return ctx.errou(erro + " A sua sequência foi mantida: ajuste e teste de novo.");
        if (pos[0] !== fim[0] || pos[1] !== fim[1]) return ctx.errou(`O robô parou em ${cols[pos[1]]}${pos[0] + 1}, mas a estrela está em ${cols[fim[1]]}${fim[0] + 1}.`);
        if (at.compacto && st.prog.length > at.compacto) return ctx.errou(`Chegou! Mas o programa tem ${st.prog.length} blocos. Use “repita” (botões + e −) para chegar com no máximo ${at.compacto} blocos.`);
        ctx.concluir("certo", `O robô chegou à estrela com ${passos().length} passos${at.compacto ? ` em ${st.prog.length} blocos` : ""}!`);
      };
      ctx.resolver = () => { st.prog = at.solucao.map(x => ({ d: x[0], n: x[1] })); reset(); draw(); };
      const btn = setTimeout(() => { const b = ctx.el.querySelector('[data-a="verificar"]'); if (b) b.textContent = "▶ Executar"; }, 0);
      draw();
    },
    imprimir(at) {
      const cols = "ABCDEFGH".slice(0, at.grade[0].length);
      return `<table class="imp-grade"><tr><th></th>${[...cols].map(x => `<th>${x}</th>`).join("")}</tr>${at.grade.map((ln, r) => `<tr><th>${r + 1}</th>${[...ln].map(ch => `<td>${ch === "#" ? "🧱" : ch === "R" ? "🤖" : ch === "*" ? "⭐" : ""}</td>`).join("")}</tr>`).join("")}</table><p>Meu caminho${at.compacto ? " usando “repita”" : " com setas"}:</p>${linhas(2)}`;
    },
    resumoResposta(at, st) { const D = { U: "⬆️", D: "⬇️", L: "⬅️", R: "➡️" }; return (st.prog || []).map(x => (x.n > 1 ? `repita ${x.n}× ` : "") + D[x.d]).join(" · "); }
  };

  /* ------------------------------------------------------------
     PINTURA — simula o desenho do Paint (quadrados, casas, círculos)
     ------------------------------------------------------------ */
  T.pintura = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.p = st.p || {};
      const forma = (i, on) => {
        if (at.forma === "casa") return `<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="5,28 30,5 55,28" fill="${on ? "#111" : "#fff"}" stroke="#333" stroke-width="2"/><rect x="10" y="28" width="40" height="28" fill="#fff" stroke="#333" stroke-width="2"/></svg>`;
        if (at.forma === "circulo") return `<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="25" fill="${on ? "#111" : "#fff"}" stroke="#333" stroke-width="2"/></svg>`;
        return `<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="5" y="5" width="50" height="50" fill="${on ? "#111" : "#fff"}" stroke="#333" stroke-width="2"/></svg>`;
      };
      let marca = "";
      const draw = () => {
        c.innerHTML = `<div class="regra">📜 <strong>Algoritmo:</strong> ${md(at.regra)}</div>
          <p class="instr-arrastar">Siga o algoritmo: clique ${at.forma === "casa" ? "no telhado" : "na figura"} para pintar de preto (clique de novo para apagar).</p>
          <div class="pintura">${Array.from({ length: at.n }, (_, i) => `<button type="button" class="fig" data-i="${i}" aria-pressed="${!!st.p[i]}" aria-label="${at.forma || "quadrado"} ${i + 1}${st.p[i] ? ", pintado de preto" : ", branco"}">${forma(i, st.p[i])}<span>${i + 1}º</span></button>`).join("")}</div>${marca}`;
        c.querySelectorAll(".fig").forEach(b => b.onclick = () => { const i = +b.dataset.i; st.p[i] = !st.p[i]; marca = ""; ctx.salvar(); draw(); c.querySelector(`.fig[data-i="${i}"]`).focus(); });
      };
      ctx.verificar = () => {
        const errados = []; for (let i = 0; i < at.n; i++) if (!!st.p[i] !== at.pretos.includes(i + 1)) errados.push(i + 1);
        errados.length ? ctx.errou(`Confira ${errados.length > 1 ? "as figuras" : "a figura"} nº ${errados.join(", ")}. Releia a condição do “se”.`) : ctx.concluir("certo", "O desenho segue o algoritmo!");
      };
      ctx.resolver = () => { for (let i = 0; i < at.n; i++) st.p[i] = at.pretos.includes(i + 1); draw(); };
      draw();
    },
    imprimir(at) { return `<p>📜 ${md(at.regra)}</p><p>Desenhe aqui:</p><div class="imp-caixa"></div>`; }
  };

  /* ------------------------------------------------------------
     LISTA — inserir, remover e responder sobre posições
     ------------------------------------------------------------ */
  T.lista_ops = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      if (!st.lista) { st.lista = at.inicial.slice(); st.passo = 0; st.resp = {}; }
      const draw = () => {
        const p = at.passos[st.passo];
        c.innerHTML = `<div class="lista-ops"><p class="lo-nome"><strong>${esc(at.nome || "LISTA")}</strong> =</p>
          <ol class="lo-itens">${st.lista.map((x, i) => `<li><span class="lo-pos">${i + 1}</span> ${esc(x)} ${p && p.tipo === "remover" ? `<button type="button" class="lo-del" data-i="${i}" aria-label="Remover ${esc(x)}">✕ remover</button>` : ""}</li>`).join("")}</ol>
          ${p ? `<div class="lo-passo"><p>Passo ${st.passo + 1} de ${at.passos.length}: <strong>${md(p.instr)}</strong></p>
            ${p.tipo === "inserir" ? `<label>Novo item: <input id="lo-novo-${at.id}" size="14"></label> <button type="button" class="btn btn-sec" id="lo-ins-${at.id}">➕ Inserir no fim</button>` : ""}
            ${p.tipo === "pergunta" ? `<label>Resposta: <input id="lo-resp-${at.id}" size="16"></label> <button type="button" class="btn btn-sec" id="lo-ok-${at.id}">Responder</button>` : ""}</div>`
            : `<p class="lo-fim">✔ Todos os passos feitos!</p>`}</div>`;
        const ins = c.querySelector(`#lo-ins-${at.id}`);
        if (ins) { const inp = c.querySelector(`#lo-novo-${at.id}`); const go = () => { const v = inp.value.trim(); if (!v) return; st.lista.push(v); conferir(); }; ins.onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); }; inp.focus(); }
        c.querySelectorAll(".lo-del").forEach(b => b.onclick = () => { st.lista.splice(+b.dataset.i, 1); conferir(); });
        const ok = c.querySelector(`#lo-ok-${at.id}`);
        if (ok) { const inp = c.querySelector(`#lo-resp-${at.id}`); const go = () => { const v = inp.value.trim(); if (!v) return; st.resp[st.passo] = v; if (igual(v, p.r, p.num ? "num" : "")) { avanca(`Certo: ${md(p.why || v)}`); } else ctx.errou(p.dica || "Releia a lista e conte as posições a partir de 1."); }; ok.onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); }; inp.focus(); }
      };
      const avanca = msg => { st.passo++; ctx.salvar(); draw(); if (st.passo >= at.passos.length) ctx.concluir("certo", "Lista feita!"); else ctx.feedback("ok", msg); };
      const conferir = () => {
        const p = at.passos[st.passo];
        if (norm(st.lista.join("|")) === norm(p.esperado.join("|"))) { st.anterior = st.lista.slice(); avanca("Isso! A lista ficou certa."); }
        else { st.lista = st.anterior.slice(); ctx.salvar(); draw(); ctx.errou((p.dica || "A lista não ficou como o passo pede.") + " Voltei a lista ao jeito anterior: tente de novo."); }
      };
      if (!st.anterior) st.anterior = st.lista.slice();
      ctx.resolver = () => { st.lista = at.passos.filter(p => p.esperado).slice(-1)[0] ? at.passos.filter(p => p.esperado).slice(-1)[0].esperado.slice() : st.lista; st.passo = at.passos.length; draw(); };
      draw();
    },
    imprimir(at) { return `<p><strong>${esc(at.nome || "LISTA")}</strong> = ${at.inicial.map((x, i) => `${i + 1}. ${esc(x)}`).join(" · ")}</p><table class="imp-t">${at.passos.map(p => `<tr><td>${md(p.instr)}</td><td style="width:45%"></td></tr>`).join("")}</table>`; }
  };

  /* ------------------------------------------------------------
     BUSCA BINÁRIA — clicar no meio a cada tentativa
     ------------------------------------------------------------ */
  T.busca_binaria = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      if (!st.lo) { st.lo = 1; st.hi = at.lista.length; st.hist = []; }
      const draw = () => {
        const achou = st.hist.some(x => x.res === "igual");
        c.innerHTML = `<p class="regra">Procure o <strong>${at.alvo}</strong>. Meio = (primeira + última posição) ÷ 2, desprezando a vírgula.</p>
          <div class="bb-lista">${at.lista.map((v, i) => { const p = i + 1; const fora = p < st.lo || p > st.hi; const visto = st.hist.find(x => x.meio === p);
            const ehMeio = at.ajudaMeio && !achou && p === Math.floor((st.lo + st.hi) / 2);
            return `<button type="button" class="bb-card ${fora && !achou ? "fora" : ""} ${visto ? "visto" : ""} ${visto && visto.res === "igual" ? "achou" : ""} ${ehMeio ? "meio" : ""}" data-p="${p}" ${fora || achou ? "disabled" : ""} aria-label="Posição ${p}${visto ? ", número " + v : ""}${ehMeio ? ", carta do meio" : ""}"><small>pos. ${p}</small><strong>${visto || fora || achou ? v : "?"}</strong>${ehMeio ? '<span class="bb-mao" aria-hidden="true">👆 meio</span>' : ""}</button>`; }).join("")}</div>
          ${!achou ? `<p>Tentativa ${st.hist.length + 1}: sobraram as posições <strong>${st.lo} a ${st.hi}</strong>. Clique na carta do <strong>meio</strong>.</p>` : ""}
          ${st.hist.length ? `<table class="tab-mini"><tr><th>Tentativa</th><th>Posições</th><th>Meio</th><th>Número</th><th>${at.alvo} é…</th></tr>${st.hist.map((x, i) => `<tr><td>${i + 1}ª</td><td>${x.lo} a ${x.hi}</td><td>${x.meio}</td><td>${x.v}</td><td>${x.res}</td></tr>`).join("")}</table>` : ""}`;
        c.querySelectorAll(".bb-card:not([disabled])").forEach(b => b.onclick = () => {
          const p = +b.dataset.p, meio = Math.floor((st.lo + st.hi) / 2);
          if (p !== meio) return ctx.errou(`Essa não é a posição do meio. Some ${st.lo} + ${st.hi} e divida por 2 (despreze a vírgula).`);
          const v = at.lista[p - 1]; const res = at.alvo === v ? "igual" : at.alvo > v ? "maior" : "menor";
          st.hist.push({ lo: st.lo, hi: st.hi, meio: p, v, res });
          if (res === "maior") st.lo = p + 1; else if (res === "menor") st.hi = p - 1;
          ctx.salvar(); draw();
          if (res === "igual") ctx.concluir("certo", `Achou o ${at.alvo} em ${st.hist.length} tentativa${st.hist.length > 1 ? "s" : ""}!`);
          else ctx.feedback("ok", `${at.alvo} é ${res} que ${v}: descartamos a metade da ${res === "maior" ? "esquerda" : "direita"}.`);
        });
      };
      ctx.resolver = () => { st.lo = 1; st.hi = at.lista.length; st.hist = []; while (true) { const m = Math.floor((st.lo + st.hi) / 2), v = at.lista[m - 1], res = at.alvo === v ? "igual" : at.alvo > v ? "maior" : "menor"; st.hist.push({ lo: st.lo, hi: st.hi, meio: m, v, res }); if (res === "igual") break; if (res === "maior") st.lo = m + 1; else st.hi = m - 1; } draw(); };
      draw();
    },
    imprimir(at) { return `<p>Lista: ${at.lista.map((v, i) => `(${i + 1}) ${v}`).join(" · ")} — procure o ${at.alvo}.</p><table class="imp-t"><tr><th>Tentativa</th><th>Posições que sobraram</th><th>Posição do meio</th><th>Número no meio</th><th>É maior, menor ou igual?</th></tr><tr><td>1ª</td><td>1 a ${at.lista.length}</td><td></td><td></td><td></td></tr><tr><td>2ª</td><td></td><td></td><td></td><td></td></tr><tr><td>3ª</td><td></td><td></td><td></td><td></td></tr></table>`; }
  };

  /* ------------------------------------------------------------
     SEQUENCIAL — virar as cartas uma por uma até achar (busca sequencial)
     ------------------------------------------------------------ */
  T.sequencial = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.vistas = st.vistas || 0;
      const draw = () => {
        const achou = at.lista[st.vistas - 1] === at.alvo;
        c.innerHTML = `<p class="regra">Procure o <strong>${at.alvo}</strong>. Vire as cartas em ordem: 1ª, 2ª, 3ª…</p>
          <div class="bb-lista">${at.lista.map((v, i) => { const aberta = i < st.vistas; const prox = !achou && i === st.vistas;
            return `<button type="button" class="bb-card ${aberta ? "visto" : ""} ${aberta && v === at.alvo ? "achou" : ""} ${prox ? "meio" : ""}" data-i="${i}" ${aberta || achou ? "disabled" : ""} aria-label="${i + 1}ª carta${aberta ? ", número " + v : ""}"><small>${i + 1}ª</small><strong>${aberta ? v : "?"}</strong>${prox ? '<span class="bb-mao" aria-hidden="true">👆 agora</span>' : ""}</button>`; }).join("")}</div>
          <p class="seq-conta">Cartas olhadas: <strong>${st.vistas}</strong></p>`;
        c.querySelectorAll(".bb-card:not([disabled])").forEach(b => b.onclick = () => {
          const i = +b.dataset.i;
          if (i !== st.vistas) return ctx.errou(`Um por um! Agora é a ${st.vistas + 1}ª carta.`);
          st.vistas++; ctx.salvar(); draw();
          const v = at.lista[i];
          if (v === at.alvo) ctx.concluir("certo", `Achou o ${at.alvo} na ${i + 1}ª carta!`);
          else { ctx.feedback("ok", `${v} não é o ${at.alvo}. Vire a próxima carta.`); const n = c.querySelector(".bb-card.meio"); n && n.focus(); }
        });
      };
      ctx.resolver = () => { st.vistas = at.lista.indexOf(at.alvo) + 1; draw(); };
      draw();
    },
    imprimir(at) { return `<p>Cartas: ${at.lista.map((v, i) => `(${i + 1}ª) ${v}`).join(" · ")} — procure o ${at.alvo} olhando uma por uma.</p><p>Quantas cartas você olhou? ______</p>`; }
  };

  /* ------------------------------------------------------------
     ADIVINHE O NÚMERO — busca binária jogando contra o computador
     ------------------------------------------------------------ */
  T.adivinhe = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      if (!st.lo) { st.lo = at.min; st.hi = at.max; st.hist = []; }
      const draw = () => {
        const fim = st.hist.length && st.hist[st.hist.length - 1].dica === "acertou";
        c.innerHTML = `<p class="regra">Número secreto entre <strong>${at.min}</strong> e <strong>${at.max}</strong>. O computador responde só “maior”, “menor” ou “acertou”. Use a busca binária: o palpite é sempre o <strong>meio</strong>.</p>
          <table class="tab-mini"><tr><th>Tentativa</th><th>Números que sobraram</th><th>Palpite (meio)</th><th>Dica</th></tr>${st.hist.map((x, i) => `<tr><td>${i + 1}</td><td>${x.lo} a ${x.hi}</td><td>${x.g}</td><td>${x.dica}</td></tr>`).join("")}
          ${fim ? "" : `<tr class="atual"><td>${st.hist.length + 1}</td><td>${st.lo} a ${st.hi}</td><td><input id="adv-${at.id}" inputmode="numeric" size="5" aria-label="Seu palpite"> <button type="button" class="btn btn-sec" id="advb-${at.id}">Chutar</button></td><td></td></tr>`}</table>`;
        const inp = c.querySelector(`#adv-${at.id}`);
        if (inp) {
          const go = () => {
            const g = parseInt(inp.value, 10); if (isNaN(g)) return;
            const meio = Math.floor((st.lo + st.hi) / 2);
            if (g !== meio) return ctx.errou(`Pela busca binária, o palpite agora é o meio de ${st.lo} a ${st.hi}: (${st.lo} + ${st.hi}) ÷ 2.`);
            const dica = g === at.secreto ? "acertou" : at.secreto > g ? "maior" : "menor";
            st.hist.push({ lo: st.lo, hi: st.hi, g, dica });
            if (dica === "maior") st.lo = g + 1; else if (dica === "menor") st.hi = g - 1;
            ctx.salvar(); draw();
            if (dica === "acertou") ctx.concluir("certo", `Acertou o ${at.secreto} em ${st.hist.length} tentativas!`);
            else { ctx.feedback("ok", `O secreto é ${dica} que ${g}.`); const n = c.querySelector(`#adv-${at.id}`); n && n.focus(); }
          };
          c.querySelector(`#advb-${at.id}`).onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); };
        }
      };
      ctx.resolver = () => { st.lo = at.min; st.hi = at.max; st.hist = []; for (;;) { const g = Math.floor((st.lo + st.hi) / 2); const dica = g === at.secreto ? "acertou" : at.secreto > g ? "maior" : "menor"; st.hist.push({ lo: st.lo, hi: st.hi, g, dica }); if (dica === "acertou") break; if (dica === "maior") st.lo = g + 1; else st.hi = g - 1; } draw(); };
      draw();
    },
    imprimir(at) { return `<table class="imp-t"><tr><th>Tentativa</th><th>Números que sobraram</th><th>Palpite (meio)</th><th>Dica</th></tr><tr><td>1</td><td>${at.min} a ${at.max}</td><td>${Math.floor((at.min + at.max) / 2)}</td><td></td></tr>${[2, 3, 4, 5, 6].map(n => `<tr><td>${n}</td><td></td><td></td><td></td></tr>`).join("")}</table>`; }
  };

  /* ------------------------------------------------------------
     MÉTODO DA BOLHA — passo a passo: trocar ou manter
     ------------------------------------------------------------ */
  T.bolha = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; const n = at.lista.length;
      if (!st.l) { st.l = at.lista.slice(); st.pass = 1; st.i = 0; st.reg = []; }
      const draw = () => {
        const fim = st.pass > n - 1;
        c.innerHTML = `<div class="bolha">${st.l.map((v, k) => `<span class="bol ${!fim && (k === st.i || k === st.i + 1) ? "par" : ""}">${v}</span>`).join("")}</div>
          ${fim ? `<p class="lo-fim">✔ Lista ordenada: [${st.l.join(", ")}]</p>` : `<p>${st.pass}ª passada · comparação ${st.i + 1} de ${n - 1}: <strong>${st.l[st.i]}</strong> e <strong>${st.l[st.i + 1]}</strong> estão em ordem crescente?</p>
          <div class="row-btns"><button type="button" class="btn" data-b="trocar">🔄 Trocar</button><button type="button" class="btn btn-sec" data-b="manter">✔ Manter (já estão em ordem)</button></div>`}
          ${st.reg.length ? `<table class="tab-mini"><tr><th>Passada</th><th>Lista no fim da passada</th></tr>${st.reg.map((x, k) => `<tr><td>${k + 1}ª</td><td>[${x.join(", ")}]</td></tr>`).join("")}</table>` : ""}`;
        c.querySelectorAll("[data-b]").forEach(b => b.onclick = () => {
          const a = st.l[st.i], d = st.l[st.i + 1], deve = a > d ? "trocar" : "manter";
          if (b.dataset.b !== deve) return ctx.errou(deve === "trocar" ? `${a} é maior que ${d}: estão fora de ordem, então é preciso trocar.` : `${a} é menor que ${d}: já estão em ordem, não troque.`);
          if (deve === "trocar") { st.l[st.i] = d; st.l[st.i + 1] = a; }
          st.i++;
          if (st.i >= n - 1) { st.reg.push(st.l.slice()); st.pass++; st.i = 0; ctx.feedback("ok", `Fim da ${st.pass - 1}ª passada: [${st.l.join(", ")}]`); }
          ctx.salvar(); draw();
          if (st.pass > n - 1) ctx.concluir("certo", `Lista ordenada em ${n - 1} passadas!`);
          else { const nb = c.querySelector(`[data-b="${b.dataset.b}"]`); nb && nb.focus(); }
        });
      };
      ctx.resolver = () => { st.l = at.lista.slice(); st.reg = []; for (let p = 1; p < n; p++) { for (let i = 0; i < n - 1; i++) if (st.l[i] > st.l[i + 1]) [st.l[i], st.l[i + 1]] = [st.l[i + 1], st.l[i]]; st.reg.push(st.l.slice()); } st.pass = n; draw(); };
      draw();
    },
    imprimir(at) { return `<p>Lista: [${at.lista.join(", ")}]</p><table class="imp-t"><tr><th>Passada</th><th>Lista no fim da passada</th></tr>${at.lista.slice(1).map((_, k) => `<tr><td>${k + 1}ª</td><td></td></tr>`).join("")}</table>`; }
  };

  /* ------------------------------------------------------------
     GRAFO — clicar nos vértices para traçar o caminho
     ------------------------------------------------------------ */
  const fmtPeso = p => String(p).replace(".5", "½").replace(/^0½$/, "½");
  T.grafo = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.cam = st.cam || [];
      const V = at.vertices, A = at.arestas;
      const viz = (a, b) => A.find(e => (e[0] === a && e[1] === b) || (e[0] === b && e[1] === a));
      const soma = () => { let s = 0; for (let i = 1; i < st.cam.length; i++) s += viz(st.cam[i - 1], st.cam[i])[2]; return s; };
      const W = at.largura || 520, H = at.altura || 360;
      const draw = () => {
        const noCam = (a, b) => st.cam.some((v, i) => i && ((st.cam[i - 1] === a && v === b) || (st.cam[i - 1] === b && v === a)));
        c.innerHTML = `<div class="grafo-wrap"><svg viewBox="0 0 ${W} ${H}" class="grafo" role="img" aria-label="${esc(at.descricao || "Grafo")}">
          ${A.map(e => { const p = V.find(v => v.id === e[0]), q = V.find(v => v.id === e[1]); const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
            return `<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" class="aresta ${noCam(e[0], e[1]) ? "no-cam" : ""}"/>${at.semPeso ? "" : `<g class="peso"><rect x="${mx - 15}" y="${my - 12}" width="30" height="22" rx="6"/><text x="${mx}" y="${my + 4}" text-anchor="middle">${fmtPeso(e[2])}</text></g>`}`; }).join("")}
          ${V.map(v => { const k = st.cam.indexOf(v.id); return `<g class="vert ${k >= 0 ? "no-cam" : ""} ${v.id === at.de || v.id === at.para ? "ponta" : ""}" data-v="${v.id}" tabindex="0" role="button" aria-label="${esc(v.rot)}${k >= 0 ? ", no caminho" : ""}">
            <circle cx="${v.x}" cy="${v.y}" r="${v.r || 24}"/><text x="${v.x}" y="${v.y + 5}" text-anchor="middle" class="v-id">${esc(v.id)}</text>
            ${v.rot !== v.id ? `<text x="${v.x}" y="${v.y + (v.r || 24) + 15}" text-anchor="middle" class="v-rot">${esc(v.rot)}</text>` : ""}</g>`; }).join("")}
        </svg>
        <div class="grafo-info"><p>Caminho: <strong>${st.cam.length ? st.cam.map(id => esc((V.find(v => v.id === id) || {}).rot || id)).join(" → ") : "clique em " + esc(V.find(v => v.id === at.de).rot)}</strong></p>
          ${at.semPeso ? "" : `<p>Soma dos pesos: <strong>${fmtPeso(soma())}</strong> ${esc(at.unidade || "")}</p>`}
          <div class="row-btns"><button type="button" class="btn btn-sec" data-g="voltar">↶ Desfazer</button><button type="button" class="btn btn-sec" data-g="limpar">Limpar</button></div></div></div>`;
        c.querySelectorAll(".vert").forEach(g => {
          const go = () => {
            const id = g.dataset.v;
            if (!st.cam.length) { if (id !== at.de) return ctx.feedback("info", `Comece por ${esc(V.find(v => v.id === at.de).rot)}.`); st.cam.push(id); }
            else { const u = st.cam[st.cam.length - 1]; if (!viz(u, id)) return ctx.feedback("info", `Não há aresta ligando ${esc(V.find(v => v.id === u).rot)} a ${esc(V.find(v => v.id === id).rot)}.`); if (st.cam.includes(id)) return ctx.feedback("info", "Esse vértice já está no caminho."); st.cam.push(id); }
            ctx.salvar(); draw(); const ng = c.querySelector(`.vert[data-v="${id}"]`); ng && ng.focus();
          };
          g.addEventListener("click", go); tecla(g, go);
        });
        c.querySelector('[data-g="voltar"]').onclick = () => { st.cam.pop(); ctx.salvar(); draw(); };
        c.querySelector('[data-g="limpar"]').onclick = () => { st.cam = []; ctx.salvar(); draw(); };
      };
      const menor = () => { // Dijkstra simples
        const dist = {}, prev = {}, Q = new Set(V.map(v => v.id)); V.forEach(v => dist[v.id] = Infinity); dist[at.de] = 0;
        while (Q.size) { let u = null; Q.forEach(x => { if (u === null || dist[x] < dist[u]) u = x; }); Q.delete(u); A.forEach(e => { const w = e[0] === u ? e[1] : e[1] === u ? e[0] : null; if (w && Q.has(w) && dist[u] + e[2] < dist[w]) { dist[w] = dist[u] + e[2]; prev[w] = u; } }); }
        const cam = [at.para]; while (cam[0] !== at.de) cam.unshift(prev[cam[0]]); return { d: dist[at.para], cam };
      };
      ctx.verificar = () => {
        if (st.cam[st.cam.length - 1] !== at.para) return ctx.feedback("info", `O caminho precisa terminar em ${esc(V.find(v => v.id === at.para).rot)}.`);
        const m = menor();
        if (Math.abs(soma() - m.d) < 1e-9) ctx.concluir("certo", at.semPeso ? "Caminho certo!" : `É o caminho mais curto: soma ${fmtPeso(m.d)} ${esc(at.unidade || "")}.`);
        else ctx.errou(`Esse caminho soma ${fmtPeso(soma())}. Existe um caminho com soma menor. Lembre: o mais curto é o de menor soma, não o de menos paradas.`);
      };
      ctx.resolver = () => { st.cam = menor().cam; draw(); };
      draw();
    },
    imprimir(at) { return `<table class="imp-t"><tr><th>Ligação (aresta)</th><th>Peso</th></tr>${at.arestas.map(e => `<tr><td>${esc(e[0])} – ${esc(e[1])}</td><td>${fmtPeso(e[2])}</td></tr>`).join("")}</table><p>Desenhe o grafo e marque o caminho mais curto de ${esc(at.de)} até ${esc(at.para)}:</p><div class="imp-caixa"></div>`; },
    resumoResposta(at, st) { return (st.cam || []).join(" → "); }
  };

  /* ------------------------------------------------------------
     ÁRVORE — pastas ou árvore de decisão + perguntas
     ------------------------------------------------------------ */
  T.arvore = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.cel = st.cel || {};
      const rend = (n, nivel) => `<li><span class="no ${n.filhos ? "galho" : "folha"}">${esc(n.t)}</span>${n.filhos ? `<ul>${n.filhos.map(f => rend(f, nivel + 1)).join("")}</ul>` : ""}</li>`;
      let jogo = at.raiz;
      const drawJogo = () => {
        if (at.modo !== "decisao") return "";
        if (!jogo.filhos) return `<div class="jogo-dec"><p>Resposta: <strong>${esc(jogo.t)}</strong></p><button type="button" class="btn btn-sec" data-j="rei">Jogar de novo</button></div>`;
        return `<div class="jogo-dec"><p>🎲 Pense num objeto e responda: <strong>${esc(jogo.t)}</strong></p><div class="row-btns">${jogo.filhos.map((f, i) => `<button type="button" class="btn btn-sec" data-j="${i}">${esc(f.r)}</button>`).join("")}</div></div>`;
      };
      let marcas = {};
      const draw = () => {
        c.innerHTML = `<ul class="arvore">${rend(at.raiz, 0)}</ul>${drawJogo()}
          ${at.perguntas ? `<div class="tabela-wrap"><table class="tab-completar"><thead><tr><th>Pergunta</th><th>Resposta</th></tr></thead><tbody>${at.perguntas.map((q, i) => `<tr><td>${md(q.p)}</td><td class="${marcas[i] || ""}"><input data-i="${i}" value="${esc(st.cel[i] || "")}" size="28" aria-label="${esc(q.p)}">${marcas[i] ? `<span class="marca">${marcas[i] === "certo" ? "✔" : "✖"}</span>` : ""}</td></tr>`).join("")}</tbody></table></div>` : ""}`;
        c.querySelectorAll("[data-j]").forEach(b => b.onclick = () => { jogo = b.dataset.j === "rei" ? at.raiz : jogo.filhos[+b.dataset.j]; draw(); });
        c.querySelectorAll("input").forEach(x => x.oninput = () => { st.cel[x.dataset.i] = x.value; delete marcas[x.dataset.i]; ctx.salvar(); });
      };
      if (at.perguntas) {
        ctx.verificar = () => {
          if (at.perguntas.some((_, i) => !(st.cel[i] || "").trim())) return ctx.feedback("info", "Responda todas as perguntas.");
          marcas = {}; let err = 0; at.perguntas.forEach((q, i) => { const ok = q.aberta ? true : igual(st.cel[i], q.r, q.tipo || (q.num ? "num" : "")); marcas[i] = ok ? "certo" : "errado"; if (!ok) err++; });
          draw(); err ? ctx.errou(`${err} resposta${err > 1 ? "s" : ""} para rever (✖).`) : ctx.concluir("certo", "Respostas certas!");
        };
        ctx.resolver = () => { at.perguntas.forEach((q, i) => { st.cel[i] = q.aberta ? (q.exemplo || "(resposta livre)") : Array.isArray(q.r) ? q.r[0] : q.r; marcas[i] = "certo"; }); draw(); };
      }
      draw();
    },
    imprimir(at) { const rend = n => `<li>${esc(n.r ? n.r + " → " : "")}${esc(n.t)}${n.filhos ? `<ul>${n.filhos.map(rend).join("")}</ul>` : ""}</li>`; return `<ul class="arvore">${rend(at.raiz)}</ul>${at.perguntas ? `<table class="imp-t">${at.perguntas.map(q => `<tr><td>${md(q.p)}</td><td style="width:45%"></td></tr>`).join("")}</table>` : ""}`; }
  };

  /* ------------------------------------------------------------
     CIFRA DE CÉSAR — disco/tira interativa + tarefas
     ------------------------------------------------------------ */
  const ALF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cesar = (t, k) => norm(t).toUpperCase().split("").map(ch => { const i = ALF.indexOf(ch); return i < 0 ? ch : ALF[(i + k + 26 * 3) % 26]; }).join("");
  T.cesar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.cel = st.cel || {}; st.k = st.k == null ? (at.chaveInicial != null ? at.chaveInicial : 3) : st.k; st.txt = st.txt || "";
      let marcas = {};
      const draw = () => {
        c.innerHTML = `<div class="cesar">
          <div class="ces-ctl"><span>Chave:</span><button type="button" class="btn btn-sec" data-k="-1" aria-label="Diminuir chave">−</button><strong class="ces-k" aria-live="polite">${st.k}</strong><button type="button" class="btn btn-sec" data-k="1" aria-label="Aumentar chave">+</button></div>
          <div class="ces-tira" aria-label="Tabela da cifra com chave ${st.k}"><div>${[...ALF].map(x => `<span>${x}</span>`).join("")}</div><div class="ces-cif">${[...ALF].map((x, i) => `<span>${ALF[(i + st.k) % 26]}</span>`).join("")}</div></div>
          <div class="ces-teste"><label>Experimente: <input id="ces-in-${at.id}" value="${esc(st.txt)}" size="18" aria-label="Texto para testar a cifra"></label>
            <span>Cifrado: <strong id="ces-c-${at.id}">${esc(cesar(st.txt, st.k))}</strong></span> <span>Decifrado: <strong id="ces-d-${at.id}">${esc(cesar(st.txt, -st.k))}</strong></span></div>
          <table class="tab-completar"><thead><tr><th>Tarefa</th><th>Texto claro</th><th>Texto cifrado</th></tr></thead><tbody>
          ${at.tarefas.map((t, i) => t.tipo === "chave" ? `<tr><td>Descubra a chave</td><td class="${marcas[i + "p"] || ""}"><input data-c="${i}p" value="${esc(st.cel[i + "p"] || "")}" size="10" aria-label="Palavra descoberta">${mk(i + "p")}</td><td>${esc(t.cifrado)} · chave: <span class="${marcas[i + "k"] || ""}"><input data-c="${i}k" value="${esc(st.cel[i + "k"] || "")}" size="3" inputmode="numeric" aria-label="Chave descoberta">${mk(i + "k")}</span></td></tr>`
            : `<tr><td>${t.tipo === "cifrar" ? "Cifre" : "Decifre"}</td>
            <td class="${marcas[i] && t.tipo !== "cifrar" ? marcas[i] : ""}">${t.tipo === "cifrar" ? esc(t.claro) : `<input data-c="${i}" value="${esc(st.cel[i] || "")}" size="16" aria-label="Texto claro">${mk(i)}`}</td>
            <td class="${marcas[i] && t.tipo === "cifrar" ? marcas[i] : ""}">${t.tipo === "cifrar" ? `<input data-c="${i}" value="${esc(st.cel[i] || "")}" size="16" aria-label="Texto cifrado">${mk(i)}` : esc(t.cifrado)}</td></tr>`).join("")}</tbody></table></div>`;
        c.querySelectorAll("[data-k]").forEach(b => b.onclick = () => { st.k = (st.k + +b.dataset.k + 26) % 26; ctx.salvar(); draw(); c.querySelector(`[data-k="${b.dataset.k}"]`).focus(); });
        const inp = c.querySelector(`#ces-in-${at.id}`);
        inp.oninput = () => { st.txt = inp.value; c.querySelector(`#ces-c-${at.id}`).textContent = cesar(st.txt, st.k); c.querySelector(`#ces-d-${at.id}`).textContent = cesar(st.txt, -st.k); ctx.salvar(); };
        c.querySelectorAll("[data-c]").forEach(x => x.oninput = () => { st.cel[x.dataset.c] = x.value; delete marcas[x.dataset.c]; ctx.salvar(); });
      };
      const mk = id => marcas[id] ? `<span class="marca">${marcas[id] === "certo" ? "✔" : "✖"}</span>` : "";
      const campos = () => { const l = []; at.tarefas.forEach((t, i) => { if (t.tipo === "chave") { l.push([i + "p", t.palavra, ""]); l.push([i + "k", String(t.chave), "num"]); } else l.push([String(i), t.tipo === "cifrar" ? t.cifrado : t.claro, ""]); }); return l; };
      ctx.verificar = () => {
        const cs = campos(); if (cs.some(([id]) => !(st.cel[id] || "").trim())) return ctx.feedback("info", "Preencha todas as tarefas.");
        marcas = {}; let err = 0; cs.forEach(([id, r, tp]) => { const ok = tp === "num" ? igual(st.cel[id], r, "num") : norm(st.cel[id]).replace(/ /g, "") === norm(r).replace(/ /g, ""); marcas[id] = ok ? "certo" : "errado"; if (!ok) err++; });
        draw(); err ? ctx.errou(`${err} resposta${err > 1 ? "s" : ""} para rever (✖). Use a tira acima: letra de cima → letra de baixo para cifrar; de baixo → de cima para decifrar.`) : ctx.concluir("certo", "Mensagens cifradas e decifradas!");
      };
      ctx.resolver = () => { campos().forEach(([id, r]) => { st.cel[id] = r; marcas[id] = "certo"; }); draw(); };
      draw();
    },
    imprimir(at) { const k = at.chaveInicial != null ? at.chaveInicial : 3; return `<table class="imp-grade"><tr>${[...ALF].map(x => `<td>${x}</td>`).join("")}</tr><tr>${[...ALF].map((x, i) => `<td>${ALF[(i + k) % 26]}</td>`).join("")}</tr></table><table class="imp-t"><tr><th>Tarefa</th><th>Texto claro</th><th>Texto cifrado</th></tr>${at.tarefas.map(t => t.tipo === "chave" ? `<tr><td>Descubra a chave e a palavra</td><td></td><td>${esc(t.cifrado)} · chave: ____</td></tr>` : `<tr><td>${t.tipo === "cifrar" ? "Cifre" : "Decifre"}</td><td>${t.tipo === "cifrar" ? esc(t.claro) : ""}</td><td>${t.tipo === "cifrar" ? "" : esc(t.cifrado)}</td></tr>`).join("")}</table>`; },
    resumoResposta(at, st) { return Object.values(st.cel || {}).map(esc).join(" · "); }
  };

  /* ------------------------------------------------------------
     CIFRA LIVRE — o aluno escreve a própria frase e a cifra;
     o portal confere se a cifra está certa para a chave dada
     ------------------------------------------------------------ */
  T.cesar_livre = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; const k = at.chave || 3; st.claro = st.claro || ""; st.cif = st.cif || "";
      let marca = "";
      const draw = () => {
        c.innerHTML = `<div class="cesar">
          <div class="ces-tira" aria-label="Tabela da cifra com chave ${k}"><div>${[...ALF].map(x => `<span>${x}</span>`).join("")}</div><div class="ces-cif">${[...ALF].map((x, i) => `<span>${ALF[(i + k) % 26]}</span>`).join("")}</div></div>
          <label class="campo-aberto"><span><strong>Texto claro:</strong> uma frase sua com ${at.minPalavras || 3} palavras ou mais (sem dados pessoais)</span>
            <input class="cl-in" data-c="claro" value="${esc(st.claro)}" size="34" placeholder="Ex.: EU GOSTO DE FUTEBOL" aria-label="Texto claro"></label>
          <p><strong>Chave:</strong> ${k}</p>
          <label class="campo-aberto ${marca}"><span><strong>Texto cifrado:</strong> use a tira para trocar cada letra</span>
            <input class="cl-in" data-c="cif" value="${esc(st.cif)}" size="34" aria-label="Texto cifrado">${marca ? `<span class="marca">${marca === "certo" ? "✔" : "✖"}</span>` : ""}</label></div>`;
        c.querySelectorAll(".cl-in").forEach(x => x.oninput = () => { st[x.dataset.c] = x.value; marca = ""; ctx.salvar(); });
      };
      ctx.verificar = () => {
        const pal = st.claro.trim().split(/\s+/).filter(Boolean);
        if (pal.length < (at.minPalavras || 3)) return ctx.feedback("info", `Escreva uma frase com pelo menos ${at.minPalavras || 3} palavras no texto claro.`);
        if (/\d{3,}|@/.test(st.claro)) return ctx.feedback("info", "Parece um número de telefone, documento ou e-mail. Use uma frase sem dados pessoais.");
        if (!st.cif.trim()) return ctx.feedback("info", "Agora escreva a sua frase cifrada.");
        const certo = cesar(st.claro, k).replace(/ /g, ""), dele = norm(st.cif).toUpperCase().replace(/ /g, "");
        if (certo === dele) { marca = "certo"; draw(); return ctx.concluir("certo", "Frase cifrada corretamente! Mostre a um colega e veja se ele consegue decifrar."); }
        let pos = -1; for (let i = 0; i < certo.length; i++) if (certo[i] !== dele[i]) { pos = i; break; }
        marca = "errado"; draw();
        ctx.errou(`A cifra ainda tem erro${pos >= 0 ? ` a partir da ${pos + 1}ª letra` : ""}. Confira na tira: letra de cima → letra de baixo.`);
      };
      ctx.resolver = () => { if (!st.claro.trim()) st.claro = "EU GOSTO DE INFORMATICA"; st.cif = cesar(st.claro, k); marca = "certo"; draw(); };
      draw();
    },
    imprimir(at) { const k = at.chave || 3; return `<table class="imp-grade"><tr>${[...ALF].map(x => `<td>${x}</td>`).join("")}</tr><tr>${[...ALF].map((x, i) => `<td>${ALF[(i + k) % 26]}</td>`).join("")}</tr></table><p>Texto claro:</p>${linhas(1)}<p>Chave: ${k}</p><p>Texto cifrado:</p>${linhas(1)}`; },
    resumoResposta(at, st) { return `${esc(st.claro || "")} → ${esc(st.cif || "")}`; }
  };

  /* ------------------------------------------------------------
     CAMINHO — montar um esquema em etapas (com setas) usando
     um banco de peças; peças "extras" ficam ao lado do caminho
     ------------------------------------------------------------ */
  T.caminho = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.slot = st.slot || {};
      const fixos = at.fixos || [];
      const vagas = at.etapas.map((t, i) => ({ id: "e" + i, r: t, fixo: fixos.includes(i) })).concat((at.extras || []).map((x, i) => ({ id: "x" + i, r: x.r, rot: x.rot, extra: true })));
      const pecas = vagas.filter(v => !v.fixo).map(v => v.r).concat(at.distratores || []);
      if (!st.banco || st.banco.length !== pecas.length) st.banco = shuffle(pecas.map((_, i) => i));
      let sel = null, marcas = {};
      const usado = k => Object.values(st.slot).includes(k);
      const vaga = v => {
        if (v.fixo) return `<div class="cam-vaga fixa">${esc(v.r)}</div>`;
        const k = st.slot[v.id];
        return `<button type="button" class="cam-vaga ${k !== undefined ? "cheia" : ""} ${marcas[v.id] || ""}" data-v="${v.id}" aria-label="${v.rot ? esc(v.rot) : "Etapa " + (+v.id.slice(1) + 1)}${k !== undefined ? ": " + esc(pecas[k]) : ", vazia"}">${k !== undefined ? esc(pecas[k]) : "?"}${marcas[v.id] ? `<span class="marca">${marcas[v.id] === "certo" ? "✔" : "✖"}</span>` : ""}</button>`;
      };
      const draw = () => {
        const etapas = vagas.filter(v => !v.extra), extras = vagas.filter(v => v.extra);
        c.innerHTML = `<p class="instr-arrastar">Clique numa peça e depois no espaço do caminho (ou arraste). Clique num espaço preenchido para esvaziar. Cuidado: há peças que não fazem parte do caminho.</p>
          <div class="banco">${st.banco.map(k => usado(k) ? "" : `<button type="button" class="chip ${sel === k ? "sel" : ""}" data-k="${k}" draggable="true" aria-pressed="${sel === k}">${esc(pecas[k])}</button>`).join("") || '<span class="vazio">Todas as peças foram usadas.</span>'}</div>
          <div class="cam-fluxo">${etapas.map((v, i) => (i ? '<span class="cam-seta" aria-hidden="true">➜</span>' : "") + vaga(v)).join("")}</div>
          ${extras.map(v => `<div class="cam-extra"><span>${md(v.rot)}</span>${vaga(v)}</div>`).join("")}`;
        c.querySelectorAll(".chip").forEach(b => {
          b.onclick = () => { sel = sel === +b.dataset.k ? null : +b.dataset.k; draw(); const nb = c.querySelector(`.chip[data-k="${b.dataset.k}"]`); nb && nb.focus(); };
          b.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", b.dataset.k));
        });
        c.querySelectorAll("button.cam-vaga").forEach(b => {
          const id = b.dataset.v;
          const put = k => { Object.keys(st.slot).forEach(x => { if (st.slot[x] === k) delete st.slot[x]; }); st.slot[id] = k; delete marcas[id]; sel = null; ctx.salvar(); draw(); const nx = c.querySelector(".chip"); nx && nx.focus(); };
          b.onclick = () => { if (sel !== null) put(sel); else if (st.slot[id] !== undefined) { delete st.slot[id]; delete marcas[id]; ctx.salvar(); draw(); } };
          b.addEventListener("dragover", e => e.preventDefault());
          b.addEventListener("drop", e => { e.preventDefault(); put(+e.dataTransfer.getData("text/plain")); });
        });
      };
      ctx.verificar = () => {
        const abertas = vagas.filter(v => !v.fixo);
        const falta = abertas.filter(v => st.slot[v.id] === undefined).length;
        if (falta) return ctx.feedback("info", `Faltam ${falta} espaço${falta > 1 ? "s" : ""} para preencher.`);
        marcas = {}; let err = 0;
        abertas.forEach(v => { const ok = norm(pecas[st.slot[v.id]]) === norm(v.r); marcas[v.id] = ok ? "certo" : "errado"; if (!ok) err++; });
        draw();
        err ? ctx.errou(`${err} peça${err > 1 ? "s" : ""} fora do lugar (✖). Clique para esvaziar e tente de novo.`) : ctx.concluir("certo", at.okMsg || "Esquema montado corretamente!");
      };
      ctx.resolver = () => { vagas.filter(v => !v.fixo).forEach(v => { st.slot[v.id] = pecas.findIndex(p => p === v.r); marcas[v.id] = "certo"; }); draw(); };
      draw();
    },
    imprimir(at) { const fixos = at.fixos || []; const pecas = shuffle(at.etapas.filter((_, i) => !fixos.includes(i)).concat((at.extras || []).map(x => x.r), at.distratores || [])); return `<p class="imp-banco"><strong>Peças:</strong> ${pecas.map(esc).join(" · ")}</p><p>${at.etapas.map((t, i) => fixos.includes(i) ? esc(t) : "__________").join(" → ")}</p>${(at.extras || []).map(x => `<p>${md(x.rot)} __________</p>`).join("")}`; },
    resumoResposta(at, st) { const fixos = at.fixos || []; const pecas = at.etapas.filter((_, i) => !fixos.includes(i)).concat((at.extras || []).map(x => x.r), at.distratores || []); return Object.keys(st.slot || {}).sort().map(k => esc(pecas[st.slot[k]])).join(" → "); }
  };

  /* ------------------------------------------------------------
     MONTAR GRAFO — o aluno liga os vértices conforme a tabela
     de arestas (clicando em dois lugares); o peso aparece na linha
     ------------------------------------------------------------ */
  T.grafo_montar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.fe = st.fe || [];
      const V = at.vertices, A = at.arestas, W = at.largura || 520, H = at.altura || 360;
      const chave = (a, b) => [a, b].sort().join("|");
      const ar = (a, b) => A.find(e => chave(e[0], e[1]) === chave(a, b));
      const rot = id => (V.find(v => v.id === id) || {}).rot || id;
      let sel = null;
      const draw = () => {
        c.innerHTML = `<div class="grafo-wrap"><svg viewBox="0 0 ${W} ${H}" class="grafo" role="img" aria-label="${esc(at.descricao || "Grafo para montar")}">
          ${st.fe.map(k => { const e = A.find(x => chave(x[0], x[1]) === k); const p = V.find(v => v.id === e[0]), q = V.find(v => v.id === e[1]); const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
            return `<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" class="aresta no-cam"/><g class="peso"><rect x="${mx - 15}" y="${my - 12}" width="30" height="22" rx="6"/><text x="${mx}" y="${my + 4}" text-anchor="middle">${fmtPeso(e[2])}</text></g>`; }).join("")}
          ${V.map(v => `<g class="vert ${sel === v.id ? "no-cam ponta" : ""}" data-v="${v.id}" tabindex="0" role="button" aria-label="${esc(v.rot)}${sel === v.id ? ", selecionado" : ""}">
            <circle cx="${v.x}" cy="${v.y}" r="${v.r || 24}"/><text x="${v.x}" y="${v.y + 5}" text-anchor="middle" class="v-id">${esc(v.id)}</text>
            <text x="${v.x}" y="${v.y + (v.r || 24) + 15}" text-anchor="middle" class="v-rot">${esc(v.rot)}</text></g>`).join("")}
        </svg>
        <div class="grafo-info"><p>Ligações feitas: <strong>${st.fe.length} de ${A.length}</strong></p>
          <p>${sel ? `Agora clique no lugar que se liga a <strong>${esc(rot(sel))}</strong>.` : "Clique em um lugar e depois no outro lugar ligado a ele."}</p>
          <div class="tabela-wrap"><table class="tab-mini"><tr><th>Aresta</th><th>Peso</th></tr>${A.map(e => `<tr class="${st.fe.includes(chave(e[0], e[1])) ? "certo" : ""}"><td>${esc(rot(e[0]))} – ${esc(rot(e[1]))}${st.fe.includes(chave(e[0], e[1])) ? " ✔" : ""}</td><td>${fmtPeso(e[2])}</td></tr>`).join("")}</table></div>
          <div class="row-btns"><button type="button" class="btn btn-sec" data-g="voltar">↶ Desfazer</button></div></div></div>`;
        c.querySelectorAll(".vert").forEach(g => {
          const go = () => {
            const id = g.dataset.v;
            if (!sel) { sel = id; draw(); }
            else if (sel === id) { sel = null; draw(); }
            else {
              const e = ar(sel, id);
              if (!e) { const a = sel; sel = null; draw(); return ctx.errou(`Não existe ligação entre ${esc(rot(a))} e ${esc(rot(id))} na tabela.`); }
              const k = chave(sel, id); sel = null;
              if (st.fe.includes(k)) { draw(); return ctx.feedback("info", "Essa ligação já foi feita."); }
              st.fe.push(k); ctx.salvar(); draw();
              if (st.fe.length === A.length) return ctx.concluir("certo", at.okMsg || "Grafo montado! Todas as arestas estão no lugar.");
              ctx.feedback("ok", `Aresta ${esc(rot(e[0]))} – ${esc(rot(e[1]))} (peso ${fmtPeso(e[2])}) ligada.`);
            }
            const ng = c.querySelector(`.vert[data-v="${id}"]`); ng && ng.focus();
          };
          g.addEventListener("click", go); tecla(g, go);
        });
        c.querySelector('[data-g="voltar"]').onclick = () => { st.fe.pop(); sel = null; ctx.salvar(); draw(); };
      };
      ctx.verificar = () => { const f = A.length - st.fe.length; f ? ctx.feedback("info", `Ainda faltam ${f} ligaç${f > 1 ? "ões" : "ão"} da tabela.`) : ctx.concluir("certo", at.okMsg || "Grafo montado!"); };
      ctx.resolver = () => { st.fe = A.map(e => chave(e[0], e[1])); sel = null; draw(); };
      draw();
    },
    imprimir(at) { return `<table class="imp-t"><tr><th>Aresta</th><th>Peso</th></tr>${at.arestas.map(e => `<tr><td>${esc(e[0])} – ${esc(e[1])}</td><td>${fmtPeso(e[2])}</td></tr>`).join("")}</table><p>Desenhe o grafo:</p><div class="imp-caixa"></div>`; },
    resumoResposta(at, st) { return `${(st.fe || []).length} de ${at.arestas.length} ligações`; }
  };
})();
