/* Gera dados/provas/<apostila>.js a partir de um arquivo de gabarito que NÃO fica no repositório.
   Uso: node ferramentas/gerar_provas.js /caminho/gabarito.json
   Formato: { "<apostila>": { "m1": [ {p, certo, erradas:[...]}, ... ], "m2": [...] } }
   Cada missão entra com as suas questões de múltipla escolha + todas as Perguntas rápidas (V ou F) da apostila.
   No dia da prova, o portal sorteia até 10 questões SÓ das missões que a turma estudou (o professor marca no painel).
   No site vai só a "impressão digital" (hash) da resposta certa: o aluno não acha a resposta abrindo o código. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const hash = require(path.join(RAIZ, "js", "prova-hash.js"));
const spec = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
function carregar(aid) {
  const P = { conteudo: {}, atividades: {}, registrarConteudo: (i, d) => P.conteudo[i] = d, registrarAtividades: (i, d) => P.atividades[i] = d };
  const ctx = { PORTAL: P, window: { PORTAL: P } }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, "dados/conteudo", aid + ".js"), "utf8"), ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, "dados/atividades", aid + ".js"), "utf8"), ctx);
  return { C: P.conteudo[aid], A: P.atividades[aid] };
}
const limpa = s => String(s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "").trim();
for (const [aid, porMissao] of Object.entries(spec)) {
  const { C, A } = carregar(aid);
  const questoes = [], missoes = [];
  C.missoes.filter(m => m.id !== "pf").forEach(m => {
    missoes.push({ id: m.id, titulo: limpa(m.titulo) });
    (porMissao[m.id] || []).forEach((q, i) => {
      const id = m.id + "e" + (i + 1);
      questoes.push({ id, m: m.id, tipo: "me", p: q.p, opcoes: [q.certo, ...q.erradas], h: hash(aid, id, q.certo) });
    });
    (m.vf || []).forEach((q, i) => {
      const id = m.id + "v" + (i + 1), v = !!((A[m.id] || {}).vf || [])[i].v;
      questoes.push({ id, m: m.id, tipo: "vf", p: limpa(typeof q === "string" ? q : q.t || q.p), opcoes: ["Verdadeiro", "Falso"], h: hash(aid, id, v ? "Verdadeiro" : "Falso") });
    });
    if (!(porMissao[m.id] || []).length) throw new Error(aid + " " + m.id + ": falta questão de múltipla escolha");
  });
  const out = `/* Prova do bimestre — ${aid}. Gerado por ferramentas/gerar_provas.js (não edite à mão).
   Banco de questões por missão. A prova sorteia até 10 questões só das missões que a turma estudou.
   A resposta certa não aparece aqui: só a impressão digital (h). */
PORTAL.registrarProva(${JSON.stringify(aid)}, ${JSON.stringify({ missoes, questoes })});
`;
  fs.writeFileSync(path.join(RAIZ, "dados/provas", aid + ".js"), out);
  console.log(aid, "→", missoes.map(m => m.id + ":" + questoes.filter(q => q.m === m.id).length).join(" "));
}
