/* Gera dados/provas/<apostila>.js a partir de um arquivo de gabarito que NÃO fica no repositório.
   Uso: node ferramentas/gerar_provas.js /caminho/gabarito.json
   No site vai só a "impressão digital" (hash) da resposta certa: o aluno não acha a resposta abrindo o código.
   O professor vê o gabarito no painel (aba Prova). */
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
for (const [aid, def] of Object.entries(spec)) {
  let qs = def;
  if (typeof def === "string" && def.startsWith("auto:")) {
    const [p, certo, ...erradas] = def.slice(5).split("|");
    const { C, A } = carregar(aid); qs = [];
    C.missoes.filter(m => m.id !== "pf").forEach(m => (m.vf || []).forEach((q, i) => qs.push({ t: "vf", p: limpa(typeof q === "string" ? q : q.t || q.p), v: !!((A[m.id] || {}).vf || [])[i].v })));
    qs.push({ t: "me", p, certo, erradas });
  }
  if (qs.length !== 10) throw new Error(aid + ": a prova precisa ter 10 questões (tem " + qs.length + ")");
  const questoes = qs.map((q, i) => {
    const id = "q" + (i + 1);
    const opcoes = q.t === "vf" ? ["Verdadeiro", "Falso"] : [q.certo, ...q.erradas];
    const certo = q.t === "vf" ? (q.v ? "Verdadeiro" : "Falso") : q.certo;
    return { id, tipo: q.t, p: q.p, opcoes, h: hash(aid, id, certo) };
  });
  const out = `/* Prova do bimestre — ${aid}. Gerado por ferramentas/gerar_provas.js (não edite à mão).
   10 questões, 0,5 cada (até 5,0). A resposta certa não aparece aqui: só a impressão digital (h). */
PORTAL.registrarProva(${JSON.stringify(aid)}, ${JSON.stringify({ questoes }, null, 1)});
`;
  fs.writeFileSync(path.join(RAIZ, "dados/provas", aid + ".js"), out);
  console.log(aid, "→", questoes.length, "questões");
}
