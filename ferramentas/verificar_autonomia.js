#!/usr/bin/env node
/* ============================================================
   VERIFICADOR DE AUTONOMIA DO ALUNO
   Uso:  node ferramentas/verificar_autonomia.js [id-da-apostila]
   Confere, em todas as apostilas (ou só na indicada):
   1. Atividades que só o professor consegue fechar (tarefa no computador
      ou resposta aberta sem conferência automática).
   2. Textos que mandam chamar/mostrar ao professor, carimbo ou apostila impressa.
   3. Respostas de conhecimento que NÃO aparecem no texto da missão
      (Para começar, O que significa?, Onde eu uso isso?, avisos, resumo).
      É uma busca por palavras: cada item listado precisa de revisão humana.
   4. Tipos de atividade definidos em dois arquivos (um apaga o outro).
   Rode sempre antes de publicar uma apostila nova.
   ============================================================ */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
global.window = global; const C = {}, A = {};
global.PORTAL = { registrarConteudo: (id, c) => C[id] = c, registrarAtividades: (id, a) => A[id] = a };
for (const f of fs.readdirSync(path.join(RAIZ, "dados/conteudo"))) require(path.join(RAIZ, "dados/conteudo", f));
for (const f of fs.readdirSync(path.join(RAIZ, "dados/atividades"))) if (!f.startsWith("_")) require(path.join(RAIZ, "dados/atividades", f));
const so = process.argv[2];
const norm = s => String(s || "").replace(/<[^>]+>/g, " ").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9+%]+/g, " ").trim();
const STOP = new Set("para como mais pelo pela pelos pelas uma uns umas que com sem dos das nos nas aos isso esse essa este esta ele ela eles elas seu sua seus suas voce quando onde qual quais porque entre sobre tudo todo toda todos todas ser sao foi tem tambem muito pode nao sim mesmo cada outro outra outros outras ainda depois antes ate desde".split(" "));
const palavras = s => norm(s).split(" ").filter(w => w.length >= 4 && !STOP.has(w));
const limpa = s => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
function blocos(x, out) {
  if (x == null) return; if (typeof x === "string") { out.push(x); return; }
  if (Array.isArray(x)) { x.forEach(y => blocos(y, out)); return; }
  if (typeof x === "object") { if (x.t === "tabela") { (x.linhas || []).forEach(l => out.push(l.join(" | "))); return; } Object.values(x).forEach(v => blocos(v, out)); }
}
const RUIM = /chame o professor(?! quando)|chamar o professor(?! quando)|mostre ao professor|levante a m[aã]o e chame|carimb|apostila impressa|no papel\b/i;
let total = { prof: 0, texto: 0, falta: 0 };
for (const [aid, a] of Object.entries(A)) {
  if (so && aid !== so) continue;
  const c = C[aid]; if (!c) { console.log(`⚠️  ${aid}: sem conteúdo`); continue; }
  console.log(`\n================ ${aid} ================`);
  const ruimC = JSON.stringify(c).match(new RegExp(".{0,60}(" + RUIM.source + ").{0,40}", "gi")) || [];
  ruimC.forEach(t => { total.texto++; console.log(`  📄 TEXTO  ${limpa(t)}`); });
  for (const [mid, acts] of Object.entries(a)) {
    const m = c.missoes.find(x => x.id === mid); if (!m) continue;
    const bl = []; blocos([m.comecar, m.termos, m.ondeUso, m.alertas, m.resumo && m.resumo.texto, m.objetivo], bl);
    // o projeto final usa o texto de todas as missões
    if (mid === "pf") c.missoes.forEach(x => blocos([x.comecar, x.termos], bl));
    // textos de apoio (info) e enunciados da própria missão também contam como lugar para procurar
    Object.values(acts).forEach(arr => Array.isArray(arr) && arr.forEach(x => { if (x.html) bl.push(x.html); if (x.enunciado) bl.push(x.enunciado); }));
    const B = bl.map(b => " " + norm(b) + " ");
    const TUDO = B.join(" ");
    const achou = ans => { const w = [...new Set(palavras(ans))]; if (!w.length) return 1; let best = 0; for (const b of B) { const f = w.filter(x => b.includes(x)).length / w.length; if (f > best) best = f; }
      const geral = w.filter(x => TUDO.includes(x)).length / w.length; return Math.max(best, geral >= 0.8 ? 0.6 : 0); };
    const fatos = x => {
      const r = [];
      if (x.tipo === "escolha") (x.perguntas || []).forEach(p => r.push(p.opcoes[p.certo]));
      // classificar: os itens são situações para aplicar o conceito; confere se cada categoria está explicada no texto
      if (x.tipo === "classificar") (x.categorias || []).forEach(k => { if (!/^(sim|n[aã]o|certo|errado|v|f|verdadeira|falsa|pode|n[aã]o pode)$/i.test(limpa(k.rot))) r.push(k.rot); });
      if (x.tipo === "sinais") (x.opcoes || []).filter(o => o.certo).forEach(o => r.push(o.t));
      if (x.tipo === "ligar") (x.pares || []).forEach(p => r.push(p.a + " " + p.b));
      return r;
    };
    for (const [nivel, arr] of Object.entries(acts)) {
      if (nivel === "vf") { (arr || []).forEach((v, i) => { if (v.corrigir && palavras(v.corrigir.certo).length >= 3 && achou(v.corrigir.certo) < 0.5) { total.falta++; console.log(`  🔎 ${mid} V/F ${i + 1}: correção “${v.corrigir.certo}” não aparece no texto`); } }); continue; }
      if (!Array.isArray(arr)) continue;
      arr.forEach(x => {
        const tit = limpa(x.titulo).slice(0, 70);
        if ((x.tipo === "pc" || x.tipo === "aberta") && !x.conferir) { total.prof++; console.log(`  🙋 ${mid} ${nivel}: “${tit}” só fecha com o professor`); }
        const sx = JSON.stringify(x).replace(/impressora|impress[aã]o digital/gi, "");
        const mr = sx.match(new RegExp(".{0,40}(" + RUIM.source + ").{0,30}", "i"));
        if (mr) { total.texto++; console.log(`  📄 ${mid} ${nivel}: “${tit}” → “${limpa(mr[0])}”`); }
        const enun = norm((x.enunciado || "") + " " + (x.titulo || ""));
        fatos(x).forEach(ans => {
          if (achou(ans) >= 0.5 || palavras(ans).every(w => enun.includes(w))) return;
          total.falta++; console.log(`  🔎 ${mid} ${nivel}: “${tit}” → resposta “${limpa(ans).slice(0, 80)}” não aparece no texto (revisar)`);
        });
      });
    }
  }
}
// tipos definidos duas vezes
const defs = {};
for (const f of fs.readdirSync(path.join(RAIZ, "js"))) {
  const s = fs.readFileSync(path.join(RAIZ, "js", f), "utf8");
  for (const mm of s.matchAll(/^\s*T\.([a-z_]+) = \{/gm)) (defs[mm[1]] = defs[mm[1]] || []).push(f);
}
Object.entries(defs).filter(([, v]) => v.length > 1).forEach(([k, v]) => console.log(`\n❌ O tipo “${k}” está definido em ${v.join(" e ")}: um apaga o outro!`));
console.log(`\nResumo: ${total.prof} atividade(s) dependem do professor · ${total.texto} texto(s) com professor/carimbo/papel · ${total.falta} resposta(s) para revisar.`);
