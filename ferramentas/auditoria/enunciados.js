#!/usr/bin/env node
/* ============================================================
   🔎 VERIFICADOR DE ENUNCIADOS — Portal da Informática (18/11/2026)
   Prof. Welington Laignier
   ------------------------------------------------------------
   Uso:  node ferramentas/auditoria/enunciados.js [filtro] [--ficha]
         filtro = parte do id da apostila (ex.: 8ano-4bim, 2027)
         --ficha = imprime também o texto de TODAS as tarefas (para a
                   leitura "com os olhos do aluno")
   Aponta tarefas que podem confundir o aluno sozinho:
   ⓐ SEM-ENUNCIADO   tarefa que precisa de instrução e só tem título
   ⓑ METODO?         pergunta de número/conta ("quantas", "quantos",
                     "tentativas", "comparações", "trocas"…) que não diz
                     o método ou os dados
   ⓒ SEM-AJUDA       sem dica e sem robô
   ⓓ SEM-EXPLICACAO  sem explicação da resposta (e escolha sem "why")
   ⓔ PRATICA-SEM-ROBO tarefa prática/simulação sem o 🤖 Bit
   ⓕ RESPOSTA×EXPL   número da resposta que não aparece na explicação
   ⓖ CITA-AUSENTE    o texto cita algo (tabela, imagem, figura, lista
                     abaixo/acima) que a tarefa não tem
   ⓗ ESCOLHA         alternativa certa inválida, repetida ou vazia
   Cada aviso é para revisão humana: nem todo aviso é erro.
   Aceitos depois de revisados: ferramentas/auditoria/enunciados_aceitos.json
   ============================================================ */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..", "..");
global.window = global; const A = {};
global.PORTAL = { atividades: A, registrarConteudo() {}, registrarAtividades: (id, a) => A[id] = a };
for (const f of fs.readdirSync(path.join(RAIZ, "dados/atividades"))) if (!f.startsWith("_")) require(path.join(RAIZ, "dados/atividades", f));
const args = process.argv.slice(2), ficha = args.includes("--ficha"), filtro = args.find(a => !a.startsWith("--"));
let aceitos = {}; try { aceitos = JSON.parse(fs.readFileSync(path.join(__dirname, "enunciados_aceitos.json"), "utf8")); } catch (e) {}
const txt = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const SEM_INSTRUCAO = new Set(["escolha", "relembre", "info", undefined]);           // a própria pergunta já é a instrução
// tipos que já mostram sozinhos o que fazer (texto do próprio tipo ou a instrução padrão do portal desde 18/11/2026)
const INSTRUI_SOZINHO = new Set(["ordenar", "tabela", "classificar", "ligar", "pintura", "lista_ops", "busca_binaria", "bolha", "pc", "senha", "arvore", "blocos", "sim_pc", "cartaz", "rota", "robo"]);
const PRATICOS = /^(sim_|baloes|lampadas|duplo_clique|explorador_pastas|rota|cabo|sinais|bits|medidor_senha|senha|grafo|grafo_montar|arvore|busca_binaria|bolha|adivinhe|sequencial|permissoes|caminho|cesar|cesar_livre|teclado|pc|robo|blocos|pintura|lista_ops|mensagens|cartaz)$/;
const NUMERICA = /\b(quant[oa]s|tentativas|compara[cç][oõ]es|trocas|passos|vezes|posi[cç][aã]o|resultado|calcule|some|total)\b/i;
const METODO = /(som[ae]|soma|divid|multiplic|conte |grau|posi[cç][aã]o 1|busca bin[aá]ria|busca sequencial|m[eé]todo|bolha|um por um|meio|metade|algoritmo|regra|f[oó]rmula|usando|com a |pela |pelo )/i;
const CITA = /\b(tabela|imagem|figura|desenho|lista)\s+(abaixo|acima|ao lado|a seguir)\b/i;
const avisos = []; const fichas = [];
for (const [aid, ap] of Object.entries(A)) {
  if (filtro && !aid.includes(filtro)) continue;
  for (const [mid, niveis] of Object.entries(ap)) for (const [nv, lista] of Object.entries(niveis)) {
    if (!Array.isArray(lista)) continue;
    lista.forEach((at, i) => {
      const id = `${aid} ${mid}/${nv}/${i + 1}`, chave = `${aid}|${mid}|${nv}|${i + 1}`;
      const add = (cod, msg) => { if ((aceitos[chave] || []).includes(cod)) return; avisos.push({ id, cod, msg, titulo: txt(at.titulo || at.p || "") }); };
      if (!at || typeof at !== "object") return;
      const tipo = at.tipo, tit = txt(at.titulo), en = txt(at.enunciado);
      const LIN = Array.isArray(at.linhas) ? at.linhas : [];
      const rotulos = LIN.map(l => Array.isArray(l) ? l.filter(x => typeof x === "string").map(txt).join(" | ") : "").join(" · ");
      const tudo = [tit, en, rotulos, txt(at.descricao)].join(" ");
      if (tipo === undefined) {   // ✔/✖ das Perguntas rápidas (v = resposta, de = explicação)
        if (ficha) fichas.push(`${id} [V/F=${at.v}] ${txt(at.de)}`); return;
      }
      if (!SEM_INSTRUCAO.has(tipo) && !INSTRUI_SOZINHO.has(tipo) && !en && !at.descricao && !(at.campos || []).some(c => c.rot) && tit.length < 70 && !/[?:]$/.test(tit))
        add("SEM-ENUNCIADO", `tipo ${tipo}: só o título explica o que fazer`);
      // número sem método: só nas tarefas que pedem número digitado
      const pedeNum = LIN.some(l => Array.isArray(l) && l.some(x => x && typeof x === "object" && (x.tipo === "num" || /^\d+([.,]\d+)?$/.test(String(x.r || "")))));
      if ((pedeNum || ["sim_adivinhe", "adivinhe"].includes(tipo)) && NUMERICA.test(tudo) && !METODO.test(tudo))
        add("METODO?", "pede um número/contagem sem dizer o método ou de onde vêm os dados");
      if (!SEM_INSTRUCAO.has(tipo) && !(at.dicas || []).length && !at.robo && !["info", "relembre", "sim_pc"].includes(tipo))   // sim_pc já tem o Bit guiando passo a passo
        add("SEM-AJUDA", `tipo ${tipo}: sem dica e sem robô`);
      if (!at.explicacao && !["info", "relembre"].includes(tipo)) {
        if (tipo === "escolha") { const sem = (at.perguntas || []).filter(p => !p.why).length; if (sem) add("SEM-EXPLICACAO", `${sem} pergunta(s) sem "why"`); }
        else add("SEM-EXPLICACAO", `tipo ${tipo}: sem explicação da resposta`);
      }
      if (PRATICOS.test(tipo || "") && !at.robo && !at.opcional && ["pratica", "basico"].includes(nv)) add("PRATICA-SEM-ROBO", `tipo ${tipo} (${nv}) sem o 🤖 Bit`);
      // resposta numérica × explicação
      if (at.explicacao) LIN.forEach(l => Array.isArray(l) && l.forEach(x => { if (x && typeof x === "object" && /^\d+$/.test(String(x.r || "")) && !new RegExp("(^|\\D)" + x.r + "(\\D|$)").test(txt(at.explicacao).replace(/(\d)\.(?=\d{3})/g, "$1"))) add("RESPOSTA×EXPL", `resposta ${x.r} não aparece na explicação`); }));
      if (CITA.test(tudo) && !at.linhas && !at.html && !at.lista && !at.valores && !at.itens && !at.pares) add("CITA-AUSENTE", `cita "${(tudo.match(CITA) || [])[0]}" que a tarefa não mostra`);
      if (tipo === "escolha") (at.perguntas || []).forEach((p, k) => {
        const op = p.opcoes || [];
        if (!(p.certo >= 0 && p.certo < op.length)) add("ESCOLHA", `pergunta ${k + 1}: alternativa certa inválida`);
        if (new Set(op.map(txt)).size !== op.length) add("ESCOLHA", `pergunta ${k + 1}: alternativas repetidas`);
        if (op.some(o => !txt(o))) add("ESCOLHA", `pergunta ${k + 1}: alternativa vazia`);
      });
      if (ficha) {
        let corpo = [tit && "T: " + tit, en && "E: " + en, rotulos && "L: " + rotulos].filter(Boolean).join(" ‖ ");
        if (tipo === "escolha") corpo += " ‖ " + (at.perguntas || []).map((p, k) => `P${k + 1}: ${txt(p.p)} [${(p.opcoes || []).map((o, j) => (j === p.certo ? "✔" : "") + txt(o)).join(" / ")}]`).join(" ");
        if (at.itens && !Array.isArray(at.itens[0])) corpo += " ‖ I: " + at.itens.map(x => typeof x === "string" ? x : txt(x.t) + (x.c ? "→" + x.c : "")).join("; ");
        if (at.pares) corpo += " ‖ PARES: " + at.pares.map(p => Array.isArray(p) ? p.map(txt).join("=") : txt(p.a || p.t) + "=" + txt(p.b || p.r)).join("; ");
        fichas.push(`${id} [${tipo}${at.opcional ? ", opcional" : ""}] ${corpo}`.slice(0, 900));
      }
    });
  }
}
if (ficha) { console.log("====== FICHAS ======"); fichas.forEach(f => console.log(f)); console.log(); }
const porCod = {}; avisos.forEach(a => { (porCod[a.cod] = porCod[a.cod] || []).push(a); });
console.log(`====== ${avisos.length} aviso(s) ======`);
for (const [cod, l] of Object.entries(porCod)) { console.log(`\n── ${cod} (${l.length})`); l.forEach(a => console.log(`  ${a.id} · ${a.titulo.slice(0, 70)} → ${a.msg}`)); }
process.exitCode = 0;
