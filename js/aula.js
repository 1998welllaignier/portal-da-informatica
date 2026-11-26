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
      case "ligar": case "memoria":
        html = `<ul class="aula-lista">${at.pares.map(p => `<li>${limpo(p.a)} → ${forte(p.b)}</li>`).join("")}</ul>`; break;
      case "caca":
        html = `<ul class="aula-lista">${at.palavras.map((w, i) => `<li>${at.pistas && at.pistas[i] ? limpo(at.pistas[i]) + " → " : ""}${forte(w)}</li>`).join("")}</ul>`; break;
      case "vivi":
        html = `<p><em>Resposta pessoal: o aluno toca nas situações que já viveu. Sem certo nem errado.</em></p>`; break;
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
      case "mensagens": {
        const rot = id => ((at.botoes || []).find(b => b.id === id) || {}).rot || id;
        html = `<ul class="aula-lista">${(at.itens || []).map(i => `<li>${limpo(i.t)} → ${forte(rot(i.c))}</li>`).join("")}</ul>`; break;
      }
      case "cartaz":
        html = `<ul class="aula-lista">${(at.campos || []).map(c => `<li>${limpo(c.rot)} → ${forte(c.gab || c.exemplo || "")}</li>`).join("")}${at.exigirDesenhos ? `<li>Desenhos: ${at.exigirDesenhos.join(" ")}</li>` : ""}</ul>`; break;
      case "bolha": {
        const v = (at.lista || []).slice(), passos = []; let troca = true, n = 0;
        while (troca && n < v.length) { troca = false; n++; for (let i = 0; i + 1 < v.length - (n - 1); i++) if (v[i] > v[i + 1]) { [v[i], v[i + 1]] = [v[i + 1], v[i]]; troca = true; } if (!troca) break; passos.push(`${n}ª passada: ${forte(v.join(", "))}`); if (v.every((x, i) => !i || v[i - 1] <= x)) break; }
        html = `<p>Lista: ${(at.lista || []).join(", ")}</p><ul class="aula-lista">${passos.map(p => `<li>${p}</li>`).join("")}</ul><p class="aula-obs">Ordenada em ${passos.length} passada${passos.length > 1 ? "s" : ""}. Uma passada a mais não teria nenhuma troca.</p>`; break;
      }
      case "busca_binaria": {
        const L = at.lista || [], alvo = at.alvo; let lo = 0, hi = L.length - 1, k = 0; const pas = [];
        while (lo <= hi && k < 12) { k++; const mid = Math.floor((lo + hi) / 2); const v = L[mid];
          pas.push(`${k}ª: posições ${lo + 1} a ${hi + 1} → meio ${mid + 1} → número ${v} → ${v === alvo ? forte("achou!") : alvo > v ? "o " + alvo + " é maior" : "o " + alvo + " é menor"}`);
          if (v === alvo) break; if (alvo > v) lo = mid + 1; else hi = mid - 1; }
        html = `<ul class="aula-lista">${pas.map(p => `<li>${p}</li>`).join("")}</ul><p>Total: ${forte(k + " tentativa" + (k > 1 ? "s" : ""))}</p>`; break;
      }
      case "sequencial": {
        const L = at.lista || [], p = L.indexOf(at.alvo);
        html = `<p>O ${at.alvo} está na ${forte("posição " + (p + 1))}: ${forte((p + 1) + " comparações")} (olhando um por um: ${L.slice(0, p + 1).join(", ")}).</p>`; break;
      }
      case "adivinhe": {
        let lo = at.min || 1, hi = at.max || 100, k = 0; const ch = [];
        while (lo <= hi && k < 20) { k++; const m = Math.floor((lo + hi) / 2); ch.push(`${m}${m === at.secreto ? " ✔" : m < at.secreto ? " (maior)" : " (menor)"}`); if (m === at.secreto) break; if (m < at.secreto) lo = m + 1; else hi = m - 1; }
        html = `<p>Número secreto: ${forte(at.secreto)} · chutando sempre o meio: ${ch.join(" → ")} = ${forte(k + " tentativas")}</p>`; break;
      }
      case "grafo": {
        if (at.semPeso || !at.de || !at.para) { html = `<p class="aula-obs">Atividade interativa: o portal confere sozinho.${at.explicacao ? " " + limpo(at.explicacao) : ""}</p>`; break; }
        const ar = (at.arestas || []).map(e => Array.isArray(e) ? { a: e[0], b: e[1], peso: e[2] } : e), dist = { [at.de]: 0 }, ant = {}, fila = new Set([at.de]), viz = x => ar.filter(e => e.a === x || e.b === x).map(e => [e.a === x ? e.b : e.a, +e.peso || +e.p || 1]);
        while (fila.size) { const u = [...fila].sort((a, b) => dist[a] - dist[b])[0]; fila.delete(u); viz(u).forEach(([w, c]) => { if (dist[w] == null || dist[u] + c < dist[w]) { dist[w] = dist[u] + c; ant[w] = u; fila.add(w); } }); }
        const cam = []; for (let x = at.para; x != null; x = ant[x]) cam.unshift(x);
        const nome = id => { const v = (at.vertices || []).find(y => y.id === id); return v ? (v.nome || v.t || v.rot || id) : id; };
        html = dist[at.para] == null ? `<p class="aula-obs">${limpo(at.explicacao || "")}</p>` : `<p>Caminho mais curto: ${forte(cam.map(nome).join(" → "))} = ${forte(dist[at.para] + " " + (at.unidade || ""))}</p>`; break;
      }
      case "teclado": {
        const como = ch => (P.teclado ? P.teclado.passosDe(ch) : []).map(p => (p.teclas || []).map(c => ({ ShiftLeft: "Shift", ShiftRight: "Shift", AltRight: "AltGr", BracketLeft: "´", Quote: "~" }[c] || ((P.teclado.INFO[c] || {}).b || c))).join(" + ")).join(", depois ");
        if (at.modo === "cacar") html = `<ul class="aula-lista">${at.alvos.map(a => `<li>${esc(a)} → ${forte(como(a))}</li>`).join("")}</ul>`;
        else if (at.modo === "copiar") html = `<ul class="aula-lista">${at.frases.map(f => `<li>${forte(esc(f))}</li>`).join("")}</ul><p class="aula-obs">O portal confere letra por letra (maiúscula, acento e símbolo).</p>`;
        else if (at.modo === "teclas") html = `<ul class="aula-lista">${at.tarefas.map(t => `<li>${limpo(t.pede)} → ${forte(t.fim)}${t.tecla ? ` (com a tecla ${esc(t.tecla)})` : ""}</li>`).join("")}</ul>`;
        else html = `<p class="aula-obs">${limpo(at.explicacao || "")}</p>`;
        html += `<p class="aula-obs">🤖 Se o aluno travar, ele clica em “Me ajuda, robô!” e o Bit mostra a mini simulação.</p>`; break;
      }
      /* ✅ 26/11/2026 (pedido do professor): respostas de verdade dos simuladores e atividades interativas (antes só "o portal confere") */
      case "show":
        html = `<ul class="aula-lista">${(at.perguntas || []).map(q => `<li>${limpo(q.p)} → ${q.certo >= 0 ? forte((q.opcoes || [])[q.certo]) : "<em>resposta pessoal</em>"}</li>`).join("")}</ul>`; break;
      case "rota":
        html = `<ol class="aula-lista">${(at.etapas || []).map(e => `<li>${esc(e.ic || "")} ${forte(e.t)}</li>`).join("")}</ol>`; break;
      case "sim_pc": case "sim_windows":
        html = (at.passos || []).length ? `<ol class="aula-lista">${at.passos.map(p => `<li>${limpo(p.faca || p.t || "")}</li>`).join("")}</ol>` : ""; break;
      case "lista_ops": {
        let lst = (at.inicial || []).slice();
        html = `<p>Lista ${esc(at.nome || "")} no começo: ${(at.inicial || []).map((x, i) => `${i + 1} ${esc(x)}`).join(" · ")}</p><ol class="aula-lista">${(at.passos || []).map(p => {
          if (p.esperado) lst = p.esperado.slice();
          return `<li>${limpo(p.instr)} → ${p.esperado ? "fica: " + forte(p.esperado.map((x, i) => `${i + 1} ${x}`).join(" · ")) : forte(p.r)}</li>`; }).join("")}</ol>`; break;
      }
      case "lampadas":
        html = `<ol class="aula-lista">${(at.fases || []).map(f => `<li>${limpo(f.pede)}${f.dica ? ` → ${forte(f.dica)}` : ""}${f.why ? ` <span class="aula-obs">(${limpo(f.why)})</span>` : ""}</li>`).join("")}</ol>`; break;
      case "duplo_clique":
        html = `<p>Dar <strong>dois cliques rápidos</strong> na pasta ${forte(at.alvo)}.</p>`; break;
      case "baloes":
        html = `<p>Estourar os ${forte(at.quantidade || "")} balões: levar a setinha até o balão e clicar uma vez com o botão esquerdo.</p>`; break;
      case "explorador_pastas": {
        const pn = id => { const x = (at.pastas || []).find(y => y.id === id); return x ? (x.ic || "") + " " + x.nome : id; };
        html = `<ul class="aula-lista">${(at.pastas || []).map(pa => `<li>${forte(pn(pa.id))}: ${(at.arquivos || []).filter(a => a.p === pa.id).map(a => esc(a.nome)).join(" · ")}</li>`).join("")}</ul>`; break;
      }
      case "robo": {
        const D = { U: "⬆️", D: "⬇️", L: "⬅️", R: "➡️" };
        html = (at.solucao || []).length ? `<p>Um caminho certo: ${forte(at.solucao.map(([d, n]) => (n > 1 ? `repita ${n}× ` : "") + D[d]).join(" "))}</p>` : ""; break;
      }
      case "bits": {
        const v = at.valores || [8, 4, 2, 1], bin = n => v.map(x => { if (n >= x) { n -= x; return 1; } return 0; }).join("");
        html = `<ul class="aula-lista">${(at.fases || []).map(f => { const b = bin(f.alvo), soma = v.filter((x, i) => b[i] === "1"); return `<li>${f.alvo} → ${forte(b)} <span class="aula-obs">(${soma.join(" + ")} = ${f.alvo}; acende ${soma.map(x => "a de " + x).join(", ")})</span></li>`; }).join("")}</ul>`; break;
      }
      case "cabo":
        html = `<ul class="aula-lista">${(at.perguntas || []).map(q => `<li>${limpo(q.p)} → ${forte((q.opcoes || [])[q.certo])}${q.why ? ` <span class="aula-obs">(${limpo(q.why)})</span>` : ""}</li>`).join("")}</ul>`; break;
      case "sim_grafo": {
        const nm = id => ((at.vertices || {})[id] || {}).nome || id;
        html = `<p>Caminho: ${forte((at.solucao || []).map(nm).join(" → "))}${at.menor != null ? ` = ${forte(at.menor + " " + (at.unidade || ""))}` : ""}</p>`; break;
      }
      case "grafo_montar": {
        const nm = id => ((at.vertices || []).find(v => v.id === id) || {}).rot || id;
        html = `<ul class="aula-lista">${(at.arestas || []).map(([a, b, w]) => `<li>${forte(nm(a) + " – " + nm(b))}${w != null ? " (" + esc(w) + ")" : ""}</li>`).join("")}</ul>`; break;
      }
      case "sim_adivinhe":
        html = `<p>Chutar sempre o <strong>meio</strong> (busca binária): de 1 a ${esc(at.max || 100)}, no máximo ${forte(at.meta || 7)} chutes.</p>`; break;
      case "caminho":
        html = `<p>${forte((at.etapas || []).join(" → "))}</p>${(at.extras || []).map(x => `<p>${limpo(x.rot)} → ${forte(x.r)}</p>`).join("")}${(at.distratores || []).length ? `<p class="aula-obs">Não entram: ${at.distratores.map(esc).join(", ")}</p>` : ""}`; break;
      case "permissoes":
        html = `<ul class="aula-lista">${(at.itens || []).map(i => `<li>${esc(i.ic || "")} ${esc(i.app)} pede ${esc(i.pede)} → ${forte(i.c === "S" ? "✅ Permitir" : "⛔ Negar")}${i.why ? ` <span class="aula-obs">(${limpo(i.why)})</span>` : ""}</li>`).join("")}</ul>`; break;
      case "arvore":
        html = `<ul class="aula-lista">${(at.perguntas || []).map(q => `<li>${limpo(q.p)} → ${forte(Array.isArray(q.r) ? q.r[0] : q.r)}</li>`).join("")}</ul>`; break;
      case "sim_cesar":
        html = `<p>${esc(at.cifrada || "")} → ${forte(at.resposta || "")}</p>`; break;
      case "cesar":
        html = `<ul class="aula-lista">${(at.tarefas || []).map(t => `<li>${t.tipo === "cifrar" ? `Cifrar ${esc(t.claro)} → ${forte(t.cifrado)}` : `Decifrar ${esc(t.cifrado)} → ${forte(t.claro)}`}</li>`).join("")}</ul>`; break;
      case "sim_bolha": {
        const ord = (at.valores || []).slice().sort((a, b) => typeof a === "number" ? a - b : String(a).localeCompare(String(b), "pt-BR"));
        html = `<p>Fica: ${forte(ord.join(", "))}</p>`; break;
      }
      case "blocos": {
        const txt = bl => (bl || []).map(b => Array.isArray(b) ? (b[0] === "repita" ? `repita ${b[1]} vezes [ ${txt(b[2])} ]` : b[0] === "se" || b[0] === "seSenao" ? `${b[0]} ${esc(JSON.stringify(b[1]))} [ ${txt(b[2])} ]${b[3] ? " senão [ " + txt(b[3]) + " ]" : ""}` : `${b[0]} ${b.slice(1).filter(x => !Array.isArray(x)).map(x => `“${x}”`).join(" ")}`) : String(b)).join(" · ");
        html = `${at.solucao ? `<p>Programa: ${forte(txt(at.solucao))}</p>` : ""}${(at.esperado || []).length ? `<p>A tela mostra: ${forte(at.esperado.join(" · "))}</p>` : ""}`; break;
      }
      default:
        html = `<p class="aula-obs">Atividade interativa: o portal confere sozinho.${at.explicacao ? " " + limpo(at.explicacao) : ""}</p>`;
    }
    return { html, auto };
  }

  const NIVEIS = [["basico", "🟢 Básico"], ["desafio", "🟡 Desafio"], ["turbo", "🔴 Turbo"]];
  /* ⏱️ faixa do tempo da aula (26/11/2026, aprovada pelo professor): UMA faixa para todas as séries, no formato atual da aula
     (sala de espera → vídeo → leitura guiada com roleta → largada e missão → pódio → Sala de jogos), 75 min. Um roteiro pode
     ter a sua própria faixa só se marcar tempoProprio: true (ex.: aula especial). */
  const TEMPO_PADRAO = [
    { min: 5, icone: "🚦", t: "Chegada e sala de espera" },
    { min: 8, icone: "🎬", t: "Vídeo da missão" },
    { min: 15, icone: "📖", t: "Leitura guiada com roleta (com o Onde eu uso isso?)" },
    { min: 35, icone: "🏁", t: "Largada: missão no portal (Mão na massa → Básico → Desafio → Turbo)" },
    { min: 5, icone: "🏆", t: "Finalizar e pódio" },
    { min: 7, icone: "🎮", t: "Sala de jogos (quem concluiu o Básico)" }];

  /* ---------- a tela ---------- */
  P.aula = {
    async render(alvo, aid, mid, turmaId, ctx) {
      await P.carregarApostila(aid);
      await carregarRoteiro(aid);
      const ap = P.apostila(aid), C = P.conteudo[aid], R = (P.roteiros[aid] || {}), r = R[mid] || {};
      const m = C.missoes.find(x => x.id === mid) || C.missoes[0];
      const { pages } = P.montarMissao(aid, m.id);
      /* ✅ 26/11/2026: Respostas separadas pela parte da missão, na ordem em que o aluno faz (🎮 Mão na massa, 🟢 Básico, 🟡 Desafio,
         🔴 Turbo, ⭐ Bônus, 🌎 Onde uso, ✔✖ Perguntas rápidas…). Antes o Mão na massa ficava misturado no Básico. */
      const ROT = { pratica: "🎮 Mão na massa", basico: "🟢 Básico", desafio: "🟡 Desafio", turbo: "🔴 Turbo", bonus: "⭐ Bônus", lembra: "🔁 Lembra? (missões anteriores)", onde: "🌎 Onde eu uso isso?", fechar: "✔✖ Perguntas rápidas e fechamento", termos: "📖 O que significa?", lab: "♾️ Laboratório" };
      const PULA = ["lab", "carinhas", "chefao", "autoavaliacao"];   // sorteadas ou pessoais: sem uma resposta fixa
      const grupos = pages.map(pg => ({ id: pg.id, rot: ROT[pg.id] || `${pg.icone || ""} ${pg.rotulo || pg.id}`.trim(), ats: (pg.atividades || []).filter(at => !(P.tipos[at.tipo] || {}).semStatus && !PULA.includes(at.tipo)) })).filter(g => g.ats.length);
      const termosM = m.termos || [];
      const tempo = r.tempoProprio && r.tempo ? r.tempo : TEMPO_PADRAO, total = tempo.reduce((s, x) => s + x.min, 0);

      const cartaoResp = at => { const x = resposta(at); let ex = ""; try { ex = P.explicacaoProf ? P.explicacaoProf(at, termosM, aid, m.id) : ""; } catch (e) {}
        return `<div class="aula-resp ${x.auto ? "" : "prof"}"><p class="aula-resp-tit">${x.auto ? "✔" : "👀"} ${limpo(at.titulo || "")}</p>${x.html}${ex ? `<details class="aula-explic"><summary>💬 Como explicar para a turma</summary>${ex}</details>` : ""}</div>`; };
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

        ${tempo ? `<section class="aula-tempo" aria-label="Linha do tempo da aula (${total} min)">${tempo.map(x => `<div class="aula-t" style="flex:${x.min}"><span class="aula-t-i">${x.icone}</span><span class="aula-t-m">${x.min} min</span><span class="aula-t-t">${esc(x.t)}</span></div>`).join("")}</section>` : ""}

        ${R.antes ? `<section class="aula-card c-cinza"><h2>☑️ Antes de começar</h2><ul class="aula-check">${R.antes.map(x => `<li><label><input type="checkbox"> ${esc(x)}</label></li>`).join("")}</ul></section>` : ""}

        <section class="aula-card c-azul" id="aula-abrir"><h2>🎬 Abrir a aula</h2>
          ${(r.abertura || []).map(x => x.fala ? `<blockquote class="aula-fala">“${esc(x.fala)}”</blockquote>` : `<p class="aula-acao">👉 ${esc(x.acao)}</p>`).join("") || `<p class="aula-obs">Ainda sem falas cadastradas para esta missão.</p>`}
          ${r.siglas ? `<p class="aula-acao">📖 ${esc(r.siglas)}</p>` : ""}
        </section>

        ${(r.extras || []).map(e => `<section class="aula-card ${e.cor || "c-roxo"}"><h2>${esc(e.titulo)}</h2>
          ${(e.itens || []).map(x => x.fala ? `<blockquote class="aula-fala">“${esc(x.fala)}”</blockquote>` : `<p class="aula-acao">👉 ${esc(x.acao)}</p>`).join("")}</section>`).join("")}

        ${r.onde ? `<section class="aula-card c-verde" id="aula-onde"><h2>🌎 Onde eu uso isso?</h2>
          <blockquote class="aula-fala">“${esc(r.onde.pergunta)}”</blockquote>
          ${r.onde.fechamento ? `<blockquote class="aula-fala">“${esc(r.onde.fechamento)}”</blockquote>` : ""}
          ${r.onde.dica ? `<p class="aula-acao">👉 ${esc(r.onde.dica)}</p>` : ""}</section>` : ""}

        ${r.demonstracao ? `<section class="aula-card c-ciano"><h2>🖥️ Demonstração pelo Veyon</h2><p class="aula-grande">${esc(r.demonstracao)}</p></section>` : ""}

        <section class="aula-card c-amarelo" id="aula-resp"><h2>✅ Respostas</h2>
          <p class="aula-obs">✔ = o portal corrige sozinho · 👀 = você confere. Geradas das atividades do portal.</p>
          ${grupos.map((g, i) => `<details class="aula-nivel" ${g.id === "pratica" || g.id === "basico" || (i === 0 && !grupos.some(x => x.id === "pratica" || x.id === "basico")) ? "open" : ""}><summary>${esc(g.rot)} <span>(${g.ats.length})</span></summary>${g.ats.map(cartaoResp).join("")}</details>`).join("")}
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
  function baixar(aid) {
    if (P.roteiros[aid]) return Promise.resolve();
    return carregando[aid] = carregando[aid] || new Promise(ok => {
      const s = document.createElement("script");
      s.src = "dados/roteiros/" + aid + ".js?v=" + (window.PORTAL_VERSAO || ""); s.onload = ok; s.onerror = () => ok();
      document.head.appendChild(s);
    });
  }
  /* Roteiro com "base" (ex.: trilha): usa as falas da turma e acrescenta o apoio próprio */
  async function carregarRoteiro(aid) {
    await baixar(aid);
    const R = P.roteiros[aid];
    if (!R || !R.base || R._juntado) return;
    await baixar(R.base);
    const B = P.roteiros[R.base] || {};
    Object.keys(B).forEach(k => {
      const b = B[k], t = R[k];
      if (k === "base") return;
      if (Array.isArray(b) || typeof b !== "object") { if (t === undefined) R[k] = b; return; }
      const m = Object.assign({}, b, t || {});
      if (t) {
        const junta = (x, y) => { const l = (x || []).concat(y || []); return l.length ? l : undefined; };
        m.extras = junta(b.extras, t.extras);
        m.atencao = junta(t.atencao, b.atencao);
        m.perguntas = junta(t.perguntas, b.perguntas);
      }
      R[k] = m;
    });
    if (R.antesExtra) R.antes = (R.antes || []).concat(R.antesExtra);
    R._juntado = true;
  }
  P.aula.resposta = resposta;
})();
