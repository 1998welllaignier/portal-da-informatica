/* ============================================================
   🧱 EDITOR DE PROGRAMAÇÃO EM BLOCOS (tipo de atividade "blocos")
   Criado em 14/11/2026 para 2027 (7º ano 1º bim., 6º ano 3º bim. …).
   Usa o Blockly (Google, licença Apache 2.0), copiado em lib/blockly/ e
   carregado só quando a página tem uma atividade de blocos.

   Campos da atividade:
     tipo: "blocos", titulo, enunciado,
     caixa: ["mostrar","texto","numero","conta","repita","se","comparar","logica",
             "variavel","lista","paracada","enquanto","ficha"]   (gavetas de blocos)
     solucao: [ comandos ]  programa certo (o botão de resposta do professor monta ele no editor)
     inicio: [ comandos ]   programa que já vem montado (ex.: com erro, para depurar)
     esperado: ["linha 1", "linha 2"]   o que o programa precisa mostrar na tela
     eventos: [["🟢 botão verde", "verde"], …]  e  disparos: ["verde", "verde"]   (gaveta ⚡ Eventos: o portal faz os eventos acontecerem nessa ordem)
     exige: ["repita"]     blocos que precisam ser usados (nomes das gavetas)
     maxBlocos: 6          (opcional) no máximo N blocos
     dicas, explicacao, okMsg

   Mini-linguagem de "inicio" (para escrever programas prontos sem JSON do Blockly):
     comandos:  ["quando", "evento", [..]] (bloco de evento, separado) · ["funcao", "nome", [..]] (bloco criado, fica separado) · ["chamar", "nome"] · ["mostrar", e] · ["repita", n, [..]] · ["se", cond, [..], [..]?] · ["definir", "var", e]
                ["mudar", "var", n] · ["paracada", "var", listaE, [..]] · ["enquanto", cond, [..]]
                ["ficha_por", "var", "campo", e] · ["adicionar", "var", e]
     expressões: "texto" · 12 · {v:"var"} · ["lista", e…] · ["item", listaE, n] · ["tamanho", listaE]
                ["+", a, b] (também "-", "*", "/") · ["juntar", a, b…] · ["=", a, b] (também ">", "<", "≠")
                ["e", a, b] · ["ou", a, b] · ["nao", a] · ["ficha"] · ["campo", fichaE, "nome"]
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const { esc, md } = P.util;
  const V = () => window.PORTAL_VERSAO || "";

  /* ---------- carregar o Blockly só quando precisa ---------- */
  let carregando = null;
  const script = src => new Promise((ok, erro) => { const s = document.createElement("script"); s.src = src + "?v=" + V(); s.onload = ok; s.onerror = erro; document.head.appendChild(s); });
  P.carregarBlockly = () => carregando || (carregando = script("lib/blockly/blockly_compressed.js")
    .then(() => script("lib/blockly/blocks_compressed.js"))
    .then(() => script("lib/blockly/javascript_compressed.js"))
    .then(() => script("lib/blockly/pt-br.js"))
    .then(() => { definirBlocos(); caixasDoPortal(); return window.Blockly; }));

  /* 💬 o Blockly também usa as caixas do navegador (ex.: "Apagar todos os blocos?"): troca pelas caixas DENTRO da página,
     porque as do navegador tiram o aluno da tela cheia (19/11/2026) */
  function caixasDoPortal() {
    const d = window.Blockly && window.Blockly.dialog; if (!d) return;
    if (d.setAlert) d.setAlert((msg, cb) => { P.aviso(msg).then(() => cb && cb()); });
    if (d.setConfirm) d.setConfirm((msg, cb) => { P.confirmar(msg).then(ok => cb(!!ok)); });
    if (d.setPrompt) d.setPrompt((msg, valor, cb) => { P.perguntar(msg, valor).then(v => cb(v)); });
  }

  /* ---------- blocos próprios do portal ---------- */
  function definirBlocos() {
    const B = window.Blockly, G = window.javascript.javascriptGenerator, O = window.javascript.Order;
    B.defineBlocksWithJsonArray([
      { type: "mostrar", message0: "mostrar na tela %1", args0: [{ type: "input_value", name: "TXT" }],
        previousStatement: null, nextStatement: null, colour: 20, tooltip: "Escreve na tela do programa." },
      { type: "ficha_nova", message0: "nova ficha", output: null, colour: 290, tooltip: "Cria uma ficha (registro) vazia." },
      { type: "ficha_por", message0: "na ficha %1 o campo %2 vale %3",
        args0: [{ type: "field_variable", name: "VAR", variable: "aluno" }, { type: "field_input", name: "CAMPO", text: "nome" }, { type: "input_value", name: "VAL" }],
        inputsInline: true, previousStatement: null, nextStatement: null, colour: 290, tooltip: "Guarda um valor num campo da ficha." },
      { type: "ficha_campo", message0: "campo %1 da ficha %2",
        args0: [{ type: "field_input", name: "CAMPO", text: "nome" }, { type: "input_value", name: "FICHA" }],
        inputsInline: true, output: null, colour: 290, tooltip: "Pega o valor de um campo da ficha." },
      { type: "lista_adicionar", message0: "na lista %1 adicionar no fim %2",
        args0: [{ type: "field_variable", name: "VAR", variable: "lista" }, { type: "input_value", name: "VAL" }],
        inputsInline: true, previousStatement: null, nextStatement: null, colour: 260, tooltip: "Coloca um item no fim da lista." },
      { type: "quando", message0: "⚡ quando acontecer %1", args0: [{ type: "field_dropdown", name: "EV", options: function () { const bl = this.getSourceBlock && this.getSourceBlock(), w = bl && bl.workspace; const ev = (w && w.__eventos) || P._blkEventos; return ev && ev.length ? ev : [["botão", "botao"]]; } }],
        message1: "faça %1", args1: [{ type: "input_statement", name: "DO" }], colour: 45, tooltip: "Os blocos de dentro rodam toda vez que este evento acontece." }
    ]);
    G.forBlock.mostrar = (b, g) => "dizer(" + (g.valueToCode(b, "TXT", O.NONE) || "''") + ");\n";
    G.forBlock.ficha_nova = () => ["{}", O.ATOMIC];
    G.forBlock.ficha_por = (b, g) => g.getVariableName(b.getFieldValue("VAR")) + "[" + JSON.stringify(String(b.getFieldValue("CAMPO")).trim()) + "] = " + (g.valueToCode(b, "VAL", O.ASSIGNMENT) || "''") + ";\n";
    G.forBlock.ficha_campo = (b, g) => ["campo(" + (g.valueToCode(b, "FICHA", O.NONE) || "{}") + ", " + JSON.stringify(String(b.getFieldValue("CAMPO")).trim()) + ")", O.FUNCTION_CALL];
    G.forBlock.lista_adicionar = (b, g) => g.getVariableName(b.getFieldValue("VAR")) + ".push(" + (g.valueToCode(b, "VAL", O.NONE) || "''") + ");\n";
    G.forBlock.quando = (b, g) => "__on(" + JSON.stringify(b.getFieldValue("EV")) + ", function () {\n" + g.statementToCode(b, "DO") + "});\n";
    G.INFINITE_LOOP_TRAP = "if (--__lim < 0) throw new Error('LOOP');\n";
  }

  /* ---------- gavetas (caixa de ferramentas) ---------- */
  const num = n => ({ shadow: { type: "math_number", fields: { NUM: n } } });
  const txt = t => ({ shadow: { type: "text", fields: { TEXT: t } } });
  const GAVETAS = {
    mostrar: { nome: "📺 Mostrar", cor: 20, blocos: [{ type: "mostrar", inputs: { TXT: txt("Olá!") } }] },
    texto: { nome: "🔤 Texto", cor: 160, blocos: [{ type: "text" }, { type: "text_join" }, { type: "text_length", inputs: { VALUE: txt("abc") } }] },
    numero: { nome: "🔢 Número", cor: 230, blocos: [{ type: "math_number" }] },
    conta: { nome: "➕ Contas", cor: 230, blocos: [{ type: "math_arithmetic", inputs: { A: num(1), B: num(1) } }, { type: "math_number" }] },
    repita: { nome: "🔁 Repita", cor: 120, blocos: [{ type: "controls_repeat_ext", inputs: { TIMES: num(3) } }] },
    enquanto: { nome: "🔄 Enquanto", cor: 120, blocos: [{ type: "controls_whileUntil" }] },
    se: { nome: "🔀 Se", cor: 210, blocos: [{ type: "controls_if" }, { type: "controls_if", extraState: { hasElse: true } }] },
    comparar: { nome: "⚖️ Comparar", cor: 210, blocos: [{ type: "logic_compare" }, { type: "logic_boolean" }] },
    logica: { nome: "🧠 E / OU / NÃO", cor: 210, blocos: [{ type: "logic_operation" }, { type: "logic_negate" }] },
    variavel: { nome: "📦 Variáveis", cor: 330, custom: "VARIABLE" },
    lista: { nome: "📝 Listas", cor: 260, blocos: [{ type: "lists_create_with", extraState: { itemCount: 3 } }, { type: "lists_getIndex", inputs: { AT: num(1) } }, { type: "lists_length" }, { type: "lista_adicionar" }] },
    paracada: { nome: "👉 Para cada", cor: 120, blocos: [{ type: "controls_forEach" }] },
    ficha: { nome: "🗂️ Fichas", cor: 290, blocos: [{ type: "ficha_nova" }, { type: "ficha_por", inputs: { VAL: txt("Ana") } }, { type: "ficha_campo" }] },
    funcao: { nome: "🧩 Meus blocos", cor: 290, custom: "PROCEDURE" },
    evento: { nome: "⚡ Eventos", cor: 45, blocos: [{ type: "quando" }] }
  };
  const caixaDe = lista => ({ kind: "categoryToolbox", contents: lista.filter(k => GAVETAS[k]).map(k => {
    const g = GAVETAS[k];
    if (g.custom) return { kind: "category", name: g.nome, colour: g.cor, custom: g.custom };
    return { kind: "category", name: g.nome, colour: g.cor, contents: g.blocos.map(b => Object.assign({ kind: "block" }, b)) };
  }) });
  // que gaveta usa cada tipo de bloco (para o "exige")
  const GAVETA_DO_BLOCO = { mostrar: "mostrar", text: "texto", text_join: "texto", text_length: "texto", math_number: "numero", math_arithmetic: "conta",
    controls_repeat_ext: "repita", controls_whileUntil: "enquanto", controls_if: "se", logic_compare: "comparar", logic_boolean: "comparar",
    logic_operation: "logica", logic_negate: "logica", variables_set: "variavel", variables_get: "variavel", math_change: "variavel",
    lists_create_with: "lista", lists_getIndex: "lista", lists_length: "lista", lista_adicionar: "lista", controls_forEach: "paracada",
    ficha_nova: "ficha", ficha_por: "ficha", ficha_campo: "ficha", procedures_defnoreturn: "funcao", procedures_callnoreturn: "funcao", quando: "evento" };

  /* ---------- mini-linguagem → JSON do Blockly ---------- */
  function montarJSON(cmds) {
    const vars = new Set();
    const vid = n => { vars.add(n); return { id: "v_" + n }; };
    const ex = e => {
      if (e === undefined || e === null) return undefined;
      if (typeof e === "number") return { block: { type: "math_number", fields: { NUM: e } } };
      if (typeof e === "string") return { block: { type: "text", fields: { TEXT: e } } };
      if (typeof e === "boolean") return { block: { type: "logic_boolean", fields: { BOOL: e ? "TRUE" : "FALSE" } } };
      if (!Array.isArray(e) && e.v) return { block: { type: "variables_get", fields: { VAR: vid(e.v) } } };
      const [op, ...a] = e;
      const ar = { "+": "ADD", "-": "MINUS", "*": "MULTIPLY", "/": "DIVIDE" }, cp = { "=": "EQ", "≠": "NEQ", ">": "GT", "<": "LT", ">=": "GTE", "<=": "LTE" };
      if (ar[op]) return { block: { type: "math_arithmetic", fields: { OP: ar[op] }, inputs: { A: ex(a[0]), B: ex(a[1]) } } };
      if (cp[op]) return { block: { type: "logic_compare", fields: { OP: cp[op] }, inputs: { A: ex(a[0]), B: ex(a[1]) } } };
      if (op === "e" || op === "ou") return { block: { type: "logic_operation", fields: { OP: op === "e" ? "AND" : "OR" }, inputs: { A: ex(a[0]), B: ex(a[1]) } } };
      if (op === "nao") return { block: { type: "logic_negate", inputs: { BOOL: ex(a[0]) } } };
      if (op === "lista") { const inp = {}; a.forEach((x, i) => inp["ADD" + i] = ex(x)); return { block: { type: "lists_create_with", extraState: { itemCount: a.length }, inputs: inp } }; }
      if (op === "juntar") { const inp = {}; a.forEach((x, i) => inp["ADD" + i] = ex(x)); return { block: { type: "text_join", extraState: { itemCount: a.length }, inputs: inp } }; }
      if (op === "item") return { block: { type: "lists_getIndex", fields: { MODE: "GET", WHERE: "FROM_START" }, inputs: { VALUE: ex(a[0]), AT: ex(a[1]) } } };
      if (op === "tamanho") return { block: { type: "lists_length", inputs: { VALUE: ex(a[0]) } } };
      if (op === "ficha") return { block: { type: "ficha_nova" } };
      if (op === "campo") return { block: { type: "ficha_campo", fields: { CAMPO: a[1] }, inputs: { FICHA: ex(a[0]) } } };
      throw new Error("expressão desconhecida: " + op);
    };
    const st = c => {
      const [op, ...a] = c;
      if (op === "mostrar") return { type: "mostrar", inputs: { TXT: ex(a[0]) } };
      if (op === "repita") return { type: "controls_repeat_ext", inputs: { TIMES: ex(a[0]), DO: seq(a[1]) } };
      if (op === "se") { const b = { type: "controls_if", inputs: { IF0: ex(a[0]), DO0: seq(a[1]) } }; if (a[2]) { b.extraState = { hasElse: true }; b.inputs.ELSE = seq(a[2]); } return b; }
      if (op === "definir") return { type: "variables_set", fields: { VAR: vid(a[0]) }, inputs: { VALUE: ex(a[1]) } };
      if (op === "mudar") return { type: "math_change", fields: { VAR: vid(a[0]) }, inputs: { DELTA: ex(a[1]) } };
      if (op === "paracada") return { type: "controls_forEach", fields: { VAR: vid(a[0]) }, inputs: { LIST: ex(a[1]), DO: seq(a[2]) } };
      if (op === "enquanto") return { type: "controls_whileUntil", fields: { MODE: "WHILE" }, inputs: { BOOL: ex(a[0]), DO: seq(a[1]) } };
      if (op === "ficha_por") return { type: "ficha_por", fields: { VAR: vid(a[0]), CAMPO: a[1] }, inputs: { VAL: ex(a[2]) } };
      if (op === "adicionar") return { type: "lista_adicionar", fields: { VAR: vid(a[0]) }, inputs: { VAL: ex(a[1]) } };
      if (op === "chamar") return { type: "procedures_callnoreturn", extraState: { name: a[0] } };
      throw new Error("comando desconhecido: " + op);
    };
    const limpa = b => { if (b && b.inputs) { Object.keys(b.inputs).forEach(k => { if (b.inputs[k] === undefined) delete b.inputs[k]; }); if (!Object.keys(b.inputs).length) delete b.inputs; } return b; };
    const seq = lista => {
      if (!lista || !lista.length) return undefined;
      const blocos = lista.map(c => limpa(st(c)));
      for (let i = blocos.length - 2; i >= 0; i--) blocos[i].next = { block: blocos[i + 1] };
      return { block: blocos[0] };
    };
    const defs = (cmds || []).filter(c => c[0] === "funcao"), evs = (cmds || []).filter(c => c[0] === "quando"), prog = (cmds || []).filter(c => c[0] !== "funcao" && c[0] !== "quando");
    const raiz = seq(prog), tops = [];
    const lim = x => { if (x && x.block) { limpa(x.block); Object.values(x.block.inputs || {}).forEach(lim); if (x.block.next) lim(x.block.next); } return x; };
    if (raiz) tops.push(Object.assign({ x: 20, y: 20 }, lim(raiz).block));
    evs.forEach((d, i) => tops.push({ type: "quando", x: 20 + (i % 2) * 330, y: 200 + Math.floor(i / 2) * 220, fields: { EV: d[1] }, inputs: d[2] && d[2].length ? { DO: seq(d[2]) } : undefined }));
    defs.forEach((d, i) => tops.push({ type: "procedures_defnoreturn", x: 20, y: 260 + i * 200, fields: { NAME: d[1] }, inputs: d[2] && d[2].length ? { STACK: seq(d[2]) } : undefined }));
    const json = { blocks: { languageVersion: 0, blocks: tops } };
    json.variables = [...vars].map(n => ({ name: n, id: "v_" + n }));
    return json;
  }
  P.blocosJSON = montarJSON;

  /* ---------- rodar o programa com segurança ---------- */
  const mostrarValor = v => Array.isArray(v) ? v.map(mostrarValor).join(", ")
    : (v && typeof v === "object") ? Object.entries(v).map(([k, x]) => k + ": " + mostrarValor(x)).join(" · ")
    : (typeof v === "number" ? String(Math.round(v * 1000) / 1000).replace(".", ",") : String(v));
  function rodar(codigo, disparos) {
    const saida = [];
    const dizer = v => { saida.push(mostrarValor(v)); if (saida.length > 200) throw new Error("MUITO"); };
    const campo = (f, k) => (f && typeof f === "object" && k in f) ? f[k] : "(sem " + k + ")";
    const tratadores = {};
    const __on = (ev, fn) => { (tratadores[ev] = tratadores[ev] || []).push(fn); };
    try {
      new Function("dizer", "campo", "__on", "let __lim = 5000;\n" + codigo)(dizer, campo, __on);
      (disparos || []).forEach(ev => (tratadores[ev] || []).forEach(fn => fn()));
      return { saida };
    }
    catch (e) { return { saida, erro: /LOOP|MUITO/.test(e.message) ? "O programa não parou: alguma repetição ficou sem fim." : (e instanceof RangeError ? "O bloco chamou a si mesmo sem parar: falta a condição de parada (o caso base)." : "O programa travou: " + e.message) }; }
  }
  const norm = s => String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();

  /* ---------- a atividade ---------- */
  T.blocos = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      try { if (c._blkWs) c._blkWs.dispose(); } catch (e) { /* já descartado */ }
      c.innerHTML = `<div class="blk"><div class="blk-area" style="height:${at.altura || (at.eventos || (at.inicio || []).length > 4 ? 460 : 380)}px"><p class="blk-carrega">🧱 Abrindo o editor de blocos…</p></div>
        <div class="blk-bts"><button type="button" class="btn btn-ok" data-rodar>▶️ Rodar o programa</button>
        <button type="button" class="btn" data-limpar>${at.inicio ? "↩️ Voltar ao programa inicial" : "🧹 Limpar tudo"}</button></div>
        <div class="blk-tela" aria-live="polite"><div class="blk-tela-tit">📺 Tela do programa</div><pre class="blk-saida">(aperte ▶️ Rodar para ver)</pre></div>
        ${at.disparos ? `<p class="blk-ev">⚡ Ao rodar, o portal faz acontecer, nesta ordem: <strong>${at.disparos.map(d => esc(((at.eventos || []).find(e => e[1] === d) || [d])[0])).join(" → ")}</strong></p>` : ""}
        ${at.esperado ? `<details class="blk-meta"><summary>🎯 O que o programa precisa mostrar</summary><pre>${esc(at.esperado.join("\n"))}</pre></details>` : ""}</div>`;
      const area = c.querySelector(".blk-area"), saidaEl = c.querySelector(".blk-saida");
      P.carregarBlockly().then(B => {
        area.innerHTML = "";
        P._blkEventos = at.eventos || null;
        const ws = B.inject(area, { toolbox: caixaDe(at.caixa || ["mostrar", "texto", "numero", "repita"]), trashcan: true, scrollbars: true,
          zoom: { controls: true, startScale: window.innerWidth < 600 ? 0.65 : 0.9 }, move: { scrollbars: true, drag: true, wheel: false }, renderer: "zelos", maxBlocks: at.maxBlocos || Infinity });
        c._blkWs = ws;
        ws.__eventos = at.eventos || null;
        const arrumar = () => { try { ws.cleanUp(); } catch (e) { /* sem blocos */ } };
        const inicial = () => { ws.clear(); if (at.inicio) { B.serialization.workspaces.load(montarJSON(at.inicio), ws); arrumar(); } };
        if (at.solucao) ctx.resolver = () => { ws.clear(); B.serialization.workspaces.load(montarJSON(at.solucao), ws); arrumar(); st.prog = B.serialization.workspaces.save(ws); ctx.salvar(); };
        try { if (st.prog) B.serialization.workspaces.load(st.prog, ws); else inicial(); } catch (e) { inicial(); }
        let t = null;
        ws.addChangeListener(ev => { if (ev.isUiEvent) return; clearTimeout(t); t = setTimeout(() => { st.prog = B.serialization.workspaces.save(ws); ctx.salvar(); }, 400); });
        c.querySelector("[data-limpar]").onclick = () => P.confirmar(at.inicio ? "Voltar ao programa do começo? Os seus blocos somem." : "Apagar todos os blocos?", () => { inicial(); saidaEl.textContent = "(aperte ▶️ Rodar para ver)"; });
        c.querySelector("[data-rodar]").onclick = () => {
          const G = window.javascript.javascriptGenerator;
          G.init(ws);
          const r = rodar(G.workspaceToCode(ws), at.disparos);
          saidaEl.textContent = r.saida.length ? r.saida.slice(0, 40).join("\n") + (r.saida.length > 40 ? "\n…" : "") : "(o programa não mostrou nada)";
          saidaEl.classList.toggle("erro", !!r.erro);
          if (r.erro) { saidaEl.textContent += "\n⚠️ " + r.erro; return ctx.errou(r.erro); }
          const usados = new Set(ws.getAllBlocks(false).map(b => GAVETA_DO_BLOCO[b.type] || b.type));
          const falta = (at.exige || []).filter(k => !usados.has(k));
          if (at.esperado) {
            const a = r.saida.map(norm), e = at.esperado.map(norm);
            const ok = a.length === e.length && a.every((x, i) => x === e[i]);
            if (!ok) {
              const i = e.findIndex((x, k) => a[k] !== x);
              return ctx.errou(i >= 0 && a[i] !== undefined ? `A linha ${i + 1} mostrou “${r.saida[i]}”, mas devia mostrar “${at.esperado[i]}”.`
                : a.length < e.length ? `Faltam linhas: o programa mostrou ${a.length} e devia mostrar ${e.length}.` : `Sobraram linhas: o programa mostrou ${a.length} e devia mostrar ${e.length}.`);
            }
          }
          if (falta.length) return ctx.errou("O resultado está certo, mas use também: " + falta.map(k => (GAVETAS[k] || { nome: k }).nome).join(", ") + ".");
          ctx.feedback("ok", "▶️ Funcionou!");
          if (!st.status) ctx.concluir("certo", at.okMsg || "Programa certo! 🎉");
        };
      }).catch(() => { area.innerHTML = `<p class="blk-carrega">⚠️ Não foi possível abrir o editor de blocos. Atualize a página (F5).</p>`; });
    },
    imprimir(at) { return `<p>🧱 Atividade de programação em blocos no portal.${at.esperado ? " O programa precisa mostrar:" : ""}</p>${at.esperado ? `<pre>${esc(at.esperado.join("\n"))}</pre>` : ""}`; }
  };
})();
