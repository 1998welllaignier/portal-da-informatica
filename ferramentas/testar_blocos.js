// Uso: (servidor local na porta 8765) node ferramentas/testar_blocos.js <id-da-apostila>
// Testa as atividades de blocos de uma apostila: a solução deve dar o esperado (e usar o "exige"); o início não.
const { chromium } = require('playwright');
const aid = process.argv[2];
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage(); const errs = [];
  pg.on('pageerror', e => errs.push(e.message));
  await pg.route(/gstatic\.com\/firebasejs/, r => r.fulfill({ body: '', contentType: 'application/javascript' }));
  await pg.goto('http://localhost:8765/'); await pg.waitForTimeout(1500);
  const res = await pg.evaluate(async (aid) => {
    await new Promise((ok, no) => { const s = document.createElement('script'); s.src = 'dados/atividades/' + aid + '.js?t=' + Date.now(); s.onload = ok; s.onerror = no; document.head.appendChild(s); });
    const B = await PORTAL.carregarBlockly(); const G = window.javascript.javascriptGenerator;
    const GAV = { mostrar: "mostrar", text: "texto", text_join: "texto", text_length: "texto", math_number: "numero", math_arithmetic: "conta", controls_repeat_ext: "repita", controls_whileUntil: "enquanto", controls_if: "se", logic_compare: "comparar", logic_boolean: "comparar", logic_operation: "logica", logic_negate: "logica", variables_set: "variavel", variables_get: "variavel", math_change: "variavel", lists_create_with: "lista", lists_getIndex: "lista", lists_length: "lista", lista_adicionar: "lista", controls_forEach: "paracada", ficha_nova: "ficha", ficha_por: "ficha", ficha_campo: "ficha", procedures_defnoreturn: "funcao", procedures_callnoreturn: "funcao", quando: "evento" };
    const mv = v => Array.isArray(v) ? v.map(mv).join(", ") : (typeof v === "number" ? String(Math.round(v * 1000) / 1000).replace(".", ",") : String(v));
    const norm = s => String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
    const roda = (prog, at) => {
      const ws = new B.Workspace(); ws.__eventos = at.eventos || null; PORTAL._blkEventos = at.eventos || null;
      B.serialization.workspaces.load(PORTAL.blocosJSON(prog), ws); G.init(ws); const code = G.workspaceToCode(ws);
      const saida = [], tr = {}; let erro = null;
      try { new Function("dizer", "campo", "__on", "let __lim = 5000;\n" + code)(x => saida.push(mv(x)), (f, k) => f[k], (ev, fn) => (tr[ev] = tr[ev] || []).push(fn)); (at.disparos || []).forEach(ev => (tr[ev] || []).forEach(fn => fn())); } catch (e) { erro = e.message; }
      const usados = new Set(ws.getAllBlocks(false).map(b => GAV[b.type] || b.type)); ws.dispose();
      return { saida, erro, usados: [...usados] };
    };
    const A = PORTAL.atividades[aid], out = [];
    Object.entries(A).forEach(([mid, M]) => Object.entries(M).forEach(([niv, arr]) => (Array.isArray(arr) ? arr : []).forEach((at, i) => {
      if (at.tipo !== 'blocos') return;
      const r = { id: mid + '/' + niv + '/' + i, titulo: at.titulo };
      try {
        const s = roda(at.solucao, at);
        const ok = s.saida.map(norm).join('|') === at.esperado.map(norm).join('|');
        const falta = (at.exige || []).filter(k => !s.usados.includes(k));
        r.sol = ok && !falta.length && !s.erro ? 'OK' : 'FALHA ' + JSON.stringify(s.saida) + ' ' + (s.erro || '') + (falta.length ? ' falta ' + falta : '');
        if (at.inicio) { const i0 = roda(at.inicio, at); r.ini = i0.saida.map(norm).join('|') === at.esperado.map(norm).join('|') ? 'PASSA (ruim)' : 'falha (bom) ' + JSON.stringify(i0.saida); }
        const naCaixa = s.usados.filter(k => !(at.caixa || []).includes(k));
        if (naCaixa.length) r.caixa = 'gaveta faltando: ' + naCaixa;
      } catch (e) { r.sol = 'ERRO ' + e.message; }
      out.push(r);
    })));
    return out;
  }, aid);
  res.forEach(r => console.log(r.sol === 'OK' && (!r.ini || r.ini.startsWith('falha')) && !r.caixa ? '✅' : '❌', r.id, r.titulo, '|', r.sol, '|', r.ini || '', r.caixa || ''));
  console.log('erros', errs); await b.close();
})();
