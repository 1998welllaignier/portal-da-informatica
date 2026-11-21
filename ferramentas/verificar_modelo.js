#!/usr/bin/env node
/* ============================================================
   🧪 VERIFICADOR DO PORTAL (varredura total) — 20/11/2026
   Pedido do professor: "um verificador que faça uma varredura total depois das modificações e garanta que tudo está no lugar".
   É um TESTE DE REGRESSÃO: abre o portal de verdade (Chromium) e monta CADA missão de CADA apostila como o aluno vê.

   Uso:  python3 -m http.server 8765   (na raiz do portal, em outro terminal)
         node ferramentas/verificar_modelo.js [id-da-apostila] [--prints]

   Confere:
   ❌ ERROS (precisam ser consertados antes de publicar)
     • missão que não monta; tarefa de tipo que não existe; id de tarefa repetido
     • escolha sem opções / com resposta certa fora da lista; V ou F sem gabarito; "ligar" com menos de 2 pares
     • imagem ou foto que não existe no disco
     • 🌀 modelo em espiral: falta etapa (Lembra?, Para começar, Básico, Laboratório, Onde eu uso, Fechamento);
       "Lembra?" com menos de 2 perguntas ou apontando para missão que não existe; falta o gancho ou o "Onde eu uso" prático
   ⚠️ AVISOS (revisão humana)
     • "Ver onde isso está explicado" que não acha o trecho certo no Para começar
     • Desafio + Turbo curtos demais perto do Básico (o reequilíbrio pedido antes do caminho adaptativo)
     • palavra difícil sem figurinha (imagem) no álbum
   --prints: tira um print de cada etapa das missões em espiral (pasta ferramentas/verificar_prints/)
   ============================================================ */
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, ".."), BASE = process.env.PORTAL_URL || "http://localhost:8765/";
const so = process.argv.slice(2).find(a => !a.startsWith("--")), PRINTS = process.argv.includes("--prints");

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1366, height: 900 } });
  await p.route(/gstatic|youtube|ytimg|firestore|googleapis/, r => r.abort());
  const errosPagina = []; p.on("pageerror", e => errosPagina.push(e.message));
  await p.goto(BASE + "?v=" + Date.now()); await p.waitForFunction(() => window.PORTAL && PORTAL.montarMissao, null, { timeout: 20000 });
  const lista = await p.evaluate(() => (PORTAL.catalogo || window.CATALOGO || {}).apostilas ? (PORTAL.catalogo || window.CATALOGO).apostilas.map(a => a.id) : null);
  const ids = (lista || fs.readdirSync(path.join(RAIZ, "dados/conteudo")).map(f => f.replace(/\.js$/, ""))).filter(id => !so || id === so);
  const rel = { erros: [], avisos: [], ok: 0 };
  for (const aid of ids) {
    const r = await p.evaluate(async aid => {
      const E = [], W = []; let missoes = 0;
      try { await new Promise((ok, err) => { const ap = PORTAL.apostila && PORTAL.apostila(aid); if (!ap) return err(new Error("não está no catálogo")); ok(); }); } catch (e) { return { E: [aid + ": " + e.message], W, missoes }; }
      // carrega a apostila como o portal faz
      const add = src => new Promise((ok, err) => { const s = document.createElement("script"); s.src = src + "?v=" + Date.now(); s.onload = ok; s.onerror = () => err(new Error(src)); document.head.appendChild(s); });
      if (!PORTAL.conteudo[aid]) { try { await add("dados/conteudo/" + aid + ".js"); await add("dados/atividades/" + aid + ".js"); await add("dados/ilustracoes/" + aid + ".js").catch(() => null); } catch (e) { return { E: [aid + ": não carregou " + e.message], W, missoes }; } }
      const C = PORTAL.conteudo[aid], ap = PORTAL.apostila(aid), esp = ap.modelo === "espiral";
      const ids = new Set(), T = PORTAL.tipos || {};
      for (const m of C.missoes) {
        const mid = m.id, onde = `${aid} › ${mid}`; missoes++;
        let mm; try { mm = PORTAL.montarMissao(aid, mid); } catch (e) { E.push(`${onde}: a missão não monta (${e.message})`); continue; }
        const pg = Object.fromEntries(mm.pages.map(x => [x.id, x]));
        mm.pages.forEach(pag => (pag.atividades || []).forEach(at => {
          const o = `${onde} › ${pag.id} › ${String(at.titulo || at.id).replace(/<[^>]+>/g, "").slice(0, 50)}`;
          if (!T[at.tipo]) E.push(`${o}: tipo de tarefa "${at.tipo}" não existe`);
          if (ids.has(at.id) && mid !== "rv" && mid !== "rc") E.push(`${o}: id repetido (${at.id})`); ids.add(at.id);
          if (at.tipo === "escolha") (at.perguntas || []).forEach((q, k) => { if (!q.opcoes || q.opcoes.length < 2) E.push(`${o}: pergunta ${k + 1} sem opções`); else if (q.certo != null && q.certo >= 0 && !(q.certo < q.opcoes.length)) E.push(`${o}: pergunta ${k + 1} com resposta certa fora da lista`); });
          if (at.tipo === "vf") (at.itens || []).forEach((it, k) => { if (it.v == null) E.push(`${o}: frase ${k + 1} do V ou F sem gabarito`); });
          if (at.tipo === "ligar" && !((at.pares || []).length >= 2)) E.push(`${o}: "ligar" com menos de 2 pares`);
        }));
        if (/^m\d+$/.test(mid) && !ap.trilha) {   // a 👣 Trilha (alunos atípicos) não tem Desafio/Turbo de propósito
          const n = k => ((pg[k] || {}).atividades || []).filter(x => !x.opcional).length, nb = n("basico") + n("pratica"), nd = n("desafio") + n("turbo");
          if (nb && nd * 2 < nb) W.push(`${onde}: Desafio + Turbo com ${nd} tarefa(s) para ${nb} do Mão na massa + Básico (reequilibrar antes do caminho adaptativo)`);
        }
        if (esp && /^m\d+$/.test(mid)) {
          ["lembra", "comecar", "basico", "lab", "onde", "fechar"].forEach(k => { if (!pg[k]) E.push(`${onde}: falta a etapa "${k}" do modelo em espiral`); });
          if (pg.comecar && !pg.comecar.gancho) E.push(`${onde}: falta o ❓ gancho do Para começar`);
          if (pg.onde && !(pg.onde.atividades || []).some(x => !x.opcional)) E.push(`${onde}: o "Onde eu uso isso?" ainda não é prático (falta "aplicar")`);
          const lem = ((pg.lembra || {}).atividades || [])[0];
          if (lem) { const qs = lem.perguntas || []; if (qs.length < (ap.trilha ? 1 : 2)) E.push(`${onde}: "Lembra?" com menos de ${ap.trilha ? 1 : 2} pergunta(s)`);
            qs.forEach(q => { if (q.de && !C.missoes.some(x => x.id === q.de)) E.push(`${onde}: "Lembra?" aponta para a missão ${q.de}, que não existe`);
              const txt = [q.p, (q.opcoes || [])[q.certo], q.why].join(" "); if (q.de && !PORTAL.ondeExplica(aid, q.de, txt)) W.push(`${onde}: "Ver onde está explicado" não achou o trecho de: ${String(q.p).replace(/<[^>]+>/g, "").slice(0, 60)}`); }); }
          ((pg.onde || {}).atividades || []).filter(x => x.tipo === "escolha").forEach(at => (at.perguntas || []).forEach(q => { const txt = [q.p, (q.opcoes || [])[q.certo], q.why].join(" ");
            if (!PORTAL.ondeExplica(aid, mid, txt)) W.push(`${onde}: "Ver onde está explicado" não achou o trecho de: ${String(q.p).replace(/<[^>]+>/g, "").slice(0, 60)}`); }));
          const semImg = (m.termos || []).filter(t => !PORTAL.termoImg(t.termo, t.rotulo)).map(t => String(t.termo).replace(/<[^>]+>/g, ""));
          if (semImg.length) W.push(`${onde}: ${semImg.length} palavra(s) sem figurinha: ${semImg.join(", ")}`);
        }
      }
      // imagens e fotos citadas nas ilustrações
      const figs = JSON.stringify((PORTAL.ilustracoes || {})[aid] || {}), srcs = [...new Set((figs.match(/(img|fotos|dados)\/[\w\/.-]+\.(webp|png|jpe?g|svg|gif)/g) || []))];
      return { E, W, missoes, srcs };
    }, aid);
    (r.srcs || []).forEach(s => { if (!fs.existsSync(path.join(RAIZ, s))) r.E.push(`${aid}: imagem que não existe no disco: ${s}`); });
    rel.erros.push(...r.E); rel.avisos.push(...r.W); rel.ok += r.missoes;
    console.log(`${r.E.length ? "❌" : r.W.length ? "⚠️ " : "✅"} ${aid}: ${r.missoes} missões · ${r.E.length} erro(s) · ${r.W.length} aviso(s)`);
  }
  // 📸 prints das etapas do modelo em espiral
  if (PRINTS) {
    const dir = path.join(__dirname, "verificar_prints"); fs.mkdirSync(dir, { recursive: true });
    await p.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "6", turma: "6A", modo: "sozinho", nuvem: false, alunoIds: ["teste"], nomes: ["Aluno Teste"], apelidos: ["Teste"], avatares: [{ tipo: "m" }], entrou: 1 })));
    for (const aid of ids) {
      const ehEsp = await p.evaluate(aid => (PORTAL.apostila(aid) || {}).modelo === "espiral", aid); if (!ehEsp) continue;
      const mids = await p.evaluate(aid => PORTAL.conteudo[aid].missoes.map(m => m.id).filter(x => /^m\d+$/.test(x)), aid);
      for (const mid of mids) for (const pid of ["lembra", "comecar", "lab", "onde", "fechar", "termos"]) {
        await p.goto(`${BASE}?v=${Date.now()}#/missao/${aid}/${mid}/${pid}`); await p.waitForTimeout(1200);
        await p.screenshot({ path: path.join(dir, `${aid}_${mid}_${pid}.png`) });
      }
    }
  }
  errosPagina.forEach(e => rel.erros.push("erro de JavaScript na página: " + e));
  console.log(`\n================ RESULTADO ================\n${rel.ok} missões conferidas · ❌ ${rel.erros.length} erro(s) · ⚠️ ${rel.avisos.length} aviso(s)`);
  if (rel.erros.length) console.log("\n❌ ERROS\n" + rel.erros.map(x => "  • " + x).join("\n"));
  if (rel.avisos.length) console.log("\n⚠️ AVISOS\n" + rel.avisos.map(x => "  • " + x).join("\n"));
  await b.close(); process.exit(rel.erros.length ? 1 : 0);
})();
