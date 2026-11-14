/* Acrescenta (ou troca) as questões de UMA missão no banco da prova já gerado, sem precisar do gabarito antigo.
   Uso: node ferramentas/acrescentar_prova.js /caminho/missao.json
   Formato: { "<apostila>": { "m4": [ {p, certo, erradas:[...]}, ... ] } }
   Entram as questões de múltipla escolha + as Perguntas rápidas (V ou F) da missão, como no gerar_provas.js.
   O gabarito (missao.json) NÃO fica no repositório: no site vai só a impressão digital (hash). */
const fs = require("fs"), vm = require("vm"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const hash = require(path.join(RAIZ, "js", "prova-hash.js"));
const spec = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const limpa = s => String(s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "").trim();
for (const [aid, porMissao] of Object.entries(spec)) {
  const P = { conteudo: {}, atividades: {}, provas: {}, registrarConteudo: (i, d) => P.conteudo[i] = d, registrarAtividades: (i, d) => P.atividades[i] = d, registrarProva: (i, d) => P.provas[i] = d };
  const ctx = { PORTAL: P, window: { PORTAL: P } }; vm.createContext(ctx);
  for (const pasta of ["conteudo", "atividades", "provas"]) vm.runInContext(fs.readFileSync(path.join(RAIZ, "dados", pasta, aid + ".js"), "utf8"), ctx);
  const C = P.conteudo[aid], A = P.atividades[aid], prova = P.provas[aid];
  for (const [mid, lista] of Object.entries(porMissao)) {
    const m = C.missoes.find(x => x.id === mid); if (!m) throw new Error(aid + ": missão " + mid + " não existe no conteúdo");
    prova.questoes = prova.questoes.filter(q => q.m !== mid);
    prova.missoes = prova.missoes.filter(x => x.id !== mid).concat([{ id: mid, titulo: limpa(m.titulo) }]);
    lista.forEach((q, i) => { const id = mid + "e" + (i + 1); prova.questoes.push({ id, m: mid, tipo: "me", p: q.p, opcoes: [q.certo, ...q.erradas], h: hash(aid, id, q.certo) }); });
    (m.vf || []).forEach((q, i) => {
      const id = mid + "v" + (i + 1), v = !!((A[mid] || {}).vf || [])[i].v;
      prova.questoes.push({ id, m: mid, tipo: "vf", p: limpa(typeof q === "string" ? q : q.t || q.p), opcoes: ["Verdadeiro", "Falso"], h: hash(aid, id, v ? "Verdadeiro" : "Falso") });
    });
  }
  const ordem = C.missoes.map(x => x.id); prova.missoes.sort((a, b) => ordem.indexOf(a.id) - ordem.indexOf(b.id));
  const out = `/* Prova do bimestre — ${aid}. Gerado por ferramentas/gerar_provas.js e ferramentas/acrescentar_prova.js (não edite à mão).
   Banco de questões por missão. A prova sorteia até 10 questões só das missões que a turma estudou.
   A resposta certa não aparece aqui: só a impressão digital (h). */
PORTAL.registrarProva(${JSON.stringify(aid)}, ${JSON.stringify(prova)});
`;
  fs.writeFileSync(path.join(RAIZ, "dados/provas", aid + ".js"), out);
  console.log(aid, "→", prova.missoes.map(m => m.id + ":" + prova.questoes.filter(q => q.m === m.id).length).join(" "));
}
