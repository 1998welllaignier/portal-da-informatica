/* ============================================================
   🧑‍🏫 SIMULADOR-AJUDANTE DO COMPUTADOR — tipo de atividade "sim_pc"
   Pedido do professor (15/11/2026): "um simulador que seja meu ajudante,
   que diga o que fazer e corrija quando errar, por mim". Um computador de
   mentira (Windows 10 ou 11), muito parecido com o de verdade, com o
   ajudante Bit dando UM PASSO DE CADA VEZ, conferindo sozinho cada ação,
   corrigindo na hora e mostrando onde clicar quando o aluno se perde.

   Tudo acontece aqui dentro: nada muda no computador de verdade.

   O que dá para fazer no simulador:
   • mouse: clique, duplo clique, botão direito (menus reais), arrastar, rolar
   • janelas: minimizar, maximizar/restaurar, fechar, arrastar pela barra,
     voltar pela barra de tarefas; menu Iniciar
   • Explorador de Arquivos: abrir pastas, criar pasta, renomear, mover
     (arrastando), copiar/colar, excluir, Lixeira (restaurar), pesquisar,
     ver extensões
   • Bloco de Notas (digitação de verdade, atalhos Ctrl+C/V/X/Z/A, Ctrl+S
     abre "Salvar como"), Calculadora, Navegador (abas, endereço, busca,
     links, voltar, rolar)

   Campos da atividade:
     so: "10" | "11" (sem isso, sorteia) · ajudante: nome (padrão "Bit")
     area: [ícones da área de trabalho] ex.: {nome:"Jogos", tipo:"pasta"} | {nome:"Calculadora", app:"calc"}
     pastas: { "Documentos": [{nome:"redacao", ext:"txt"}, {nome:"Fotos", tipo:"pasta"}], … }
     abertas: ["jogo"] (janelas já abertas no início) · notas: texto inicial do Bloco de Notas
     web: { "endereco.com": {titulo, html} } páginas do navegador (busca usa "busca: palavras")
     passos: [{ faca, ok, erros, dica, onde, msgOk }]
       ok: padrão do evento esperado ("duplo:ic:Jogos", "min:jan:jogo", "mover:arq:foto.jpg>Fotos",
           "texto:Oi, Pedro", "atalho:Ctrl+C", "*" curinga), uma lista de padrões, ou
           {estado:"nome-da-checagem", ...} para conferir o estado (ex.: texto exato no Bloco de Notas).
       erros: { "padrão": "mensagem" } correções específicas; as comuns já vêm prontas
       onde: o que piscar quando o aluno pede ajuda (ex.: "ic:Jogos", "jan:jogo:min", "bar:jogo")
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const esc = s => P.util.esc(String(s == null ? "" : s));

  /* ---------- aparência (uma vez só) ---------- */
  if (!document.getElementById("simpc-css")) {
    const st = document.createElement("style"); st.id = "simpc-css";
    st.textContent = `
.sp{font-family:"Segoe UI",system-ui,sans-serif}
.sp-guia{display:flex;gap:12px;align-items:flex-start;background:linear-gradient(135deg,#1e3a8a,#0f172a);color:#fff;border-radius:14px;padding:12px 14px;margin:0 0 10px;box-shadow:0 4px 14px rgba(0,0,0,.2)}
.sp-bit{flex:none;width:58px;height:58px;border-radius:16px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:36px;position:relative}
.sp-bit.feliz{animation:spPula .5s}.sp-bit.triste{animation:spBalanca .4s}
@keyframes spPula{30%{transform:translateY(-10px) scale(1.08)}}@keyframes spBalanca{25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}
.sp-fala{flex:1;min-width:0}.sp-fala .q{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#93c5fd;font-weight:700}
.sp-fala .f{font-size:1.08rem;font-weight:600;line-height:1.35;margin-top:2px}.sp-fala .f b{color:#fde68a}
.sp-fala .r{margin-top:6px;font-size:.95rem;border-radius:8px;padding:6px 10px;display:none}.sp-fala .r.ok{display:block;background:#14532d;color:#bbf7d0}.sp-fala .r.erro{display:block;background:#7f1d1d;color:#fecaca}
.sp-bts{display:flex;flex-direction:column;gap:6px;flex:none}.sp-bts button{background:#facc15;color:#0f172a;border:0;border-radius:10px;padding:7px 12px;font-weight:700;cursor:pointer;font-size:.9rem}
.sp-bts button.sec{background:rgba(255,255,255,.15);color:#fff}
.sp-prog{display:flex;gap:4px;margin-top:8px}.sp-prog i{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.2)}.sp-prog i.ok{background:#4ade80}.sp-prog i.at{background:#facc15}
.sp-moldura{width:100%;position:relative;overflow:hidden;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,.25);background:#000;user-select:none;touch-action:none}
.sp-tela{position:absolute;left:0;top:0;width:1000px;height:600px;transform-origin:0 0;overflow:hidden;font-size:13px;color:#111;cursor:default}
.sp10 .sp-tela{background:radial-gradient(ellipse at 65% 40%,#5ab4ff 0,#1a6fd1 30%,#0b3a8c 60%,#06204f 100%)}
.sp11 .sp-tela{background:radial-gradient(ellipse at 50% 60%,#e8f0fb 0,#b9d0ee 25%,#6f9fd8 55%,#2f5fa8 100%)}
.sp-icons{position:absolute;inset:0 0 44px 0;z-index:1}
.sp-ic{position:absolute;width:80px;text-align:center;color:#fff;text-shadow:0 1px 3px #000;padding:4px 2px;border-radius:3px;font-size:12px;line-height:1.2;word-break:break-word;border:1px solid transparent}
.sp-ic:hover{background:rgba(255,255,255,.15)}.sp-ic.sel{background:rgba(160,200,255,.35);border-color:rgba(200,225,255,.7)}
.sp-ic .e{font-size:32px;display:block;text-shadow:none;line-height:1.15}
.sp-bar{position:absolute;left:0;right:0;bottom:0;height:40px;display:flex;align-items:center;z-index:500}
.sp10 .sp-bar{background:#1c1c1c;color:#fff}.sp11 .sp-bar{background:rgba(238,243,250,.94);color:#111;justify-content:center;border-top:1px solid #d6dbe3;height:44px}
.sp-bar button{background:none;border:0;color:inherit;height:100%;min-width:46px;font-size:20px;cursor:pointer;position:relative;font-family:inherit}
.sp10 .sp-bar button:hover{background:#3a3a3a}.sp11 .sp-bar button{border-radius:6px;height:38px;margin:0 2px}.sp11 .sp-bar button:hover{background:#fff}
.sp-bar button.ab::after{content:"";position:absolute;left:32%;right:32%;bottom:2px;height:3px;border-radius:2px;background:#76b9ed}
.sp-bar button.fr::after{left:20%;right:20%;background:#0078d4}
.sp-busca10{width:250px;background:#f2f2f2!important;color:#555!important;font-size:13px!important;text-align:left;padding:0 10px!important;height:100%!important}
.sp-rel{position:absolute;right:10px;font-size:12px;text-align:center;line-height:1.3}
.sp-jan{position:absolute;background:#fff;box-shadow:0 8px 28px rgba(0,0,0,.35);display:flex;flex-direction:column}
.sp11 .sp-jan{border-radius:8px;overflow:hidden}.sp10 .sp-jan{border:1px solid #1883d7}.sp-jan.max{border-radius:0!important}
.sp-tit{height:32px;display:flex;align-items:center;padding-left:10px;gap:8px;flex:none;font-size:12px;cursor:move}
.sp10 .sp-tit{background:#fff}.sp11 .sp-tit{background:#f3f3f3}
.sp-tit .t{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.sp-tit button{width:46px;height:32px;border:0;background:none;font-size:14px;cursor:pointer;font-family:inherit}.sp-tit button:hover{background:#e5e5e5}.sp-tit button.x:hover{background:#e81123;color:#fff}
.sp-corpo{flex:1;overflow:auto;position:relative}
.sp-menu{position:absolute;z-index:900;background:#f2f2f2;border:1px solid #ccc;box-shadow:2px 3px 10px rgba(0,0,0,.3);padding:3px 0;min-width:220px;font-size:12.5px}
.sp11 .sp-menu{background:#f9f9f9;border-radius:8px;padding:4px;border-color:#ddd}
.sp-menu div{padding:5px 26px 5px 30px;white-space:nowrap;position:relative;cursor:pointer}.sp11 .sp-menu div{border-radius:4px;padding:6px 26px 6px 34px}
.sp-menu div:hover{background:#dbeafe}.sp-menu div.off{color:#999;cursor:default}.sp-menu div.off:hover{background:none}
.sp-menu div .i{position:absolute;left:8px}.sp-menu div .s{position:absolute;right:8px;color:#666}.sp-menu hr{border:0;border-top:1px solid #d5d5d5;margin:3px 2px}
.sp-start{position:absolute;z-index:800;box-shadow:0 6px 24px rgba(0,0,0,.4)}
.sp10 .sp-start{left:0;bottom:40px;width:320px;height:420px;background:#2b2b2b;color:#fff;padding:10px 6px}
.sp10 .sp-start div{padding:8px;cursor:pointer;display:flex;gap:10px;align-items:center}.sp10 .sp-start div:hover{background:#444}.sp10 .sp-start small{color:#aaa;padding:4px 8px;display:block}
.sp11 .sp-start{left:50%;margin-left:-250px;bottom:52px;width:500px;height:400px;background:rgba(243,243,243,.97);border-radius:8px;border:1px solid #ddd;padding:18px 24px}
.sp11 .sp-start .grade{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}.sp11 .sp-start .grade div{text-align:center;padding:8px 2px;border-radius:6px;cursor:pointer;font-size:11.5px}.sp11 .sp-start .grade div:hover{background:#fff}
.sp11 .sp-start .grade .e{font-size:28px;display:block}.sp11 .sp-start h4{margin:4px 0 10px;font-size:13px}
.sp-exp{display:flex;flex-direction:column;height:100%}
.sp-exbar{display:flex;gap:6px;align-items:center;padding:5px 8px;border-bottom:1px solid #e5e5e5;flex:none;background:#f9f9f9}
.sp-exbar button{border:0;background:none;font-size:15px;cursor:pointer;padding:3px 7px;border-radius:4px}.sp-exbar button:hover{background:#e5e5e5}
.sp-exbar .end{flex:1;border:1px solid #d5d5d5;background:#fff;padding:4px 8px;border-radius:4px;white-space:nowrap;overflow:hidden}
.sp-exbar input{width:170px;border:1px solid #d5d5d5;padding:4px 8px;border-radius:4px;font-family:inherit;font-size:12px}
.sp-exc{display:flex;flex:1;min-height:0}
.sp-nav{width:160px;background:#fafafa;border-right:1px solid #e5e5e5;padding:6px 0;flex:none;overflow:auto}
.sp-nav div{padding:5px 12px;cursor:pointer;white-space:nowrap}.sp-nav div:hover{background:#e5f1fb}.sp-nav div.sel{background:#cce8ff}
.sp-arqs{flex:1;overflow:auto;padding:4px 0}.sp-arqs table{width:100%;border-collapse:collapse;font-size:12px}
.sp-arqs th{font-weight:normal;color:#4c607a;text-align:left;padding:5px 8px;border-bottom:1px solid #e5e5e5}
.sp-arqs td{padding:4px 8px;white-space:nowrap}.sp-arqs tr.f:hover td{background:#e5f3ff}.sp-arqs tr.sel td{background:#cce8ff}.sp-arqs tr.drop td{background:#bfdbfe}
.sp-arqs input{font:inherit;padding:1px 4px;border:1px solid #0078d7;width:180px}
.sp-vazio{color:#888;padding:16px}
.sp-notas{display:flex;flex-direction:column;height:100%}.sp-notas .menu{display:flex;gap:2px;padding:2px 4px;border-bottom:1px solid #eee;flex:none;font-size:12px}
.sp-notas .menu span{padding:4px 8px;cursor:pointer;border-radius:3px}.sp-notas .menu span:hover{background:#e5e5e5}
.sp-notas textarea{flex:1;border:0;resize:none;padding:8px 10px;font:15px Consolas,"Courier New",monospace;outline:none;color:#111}
.sp-notas .rod{border-top:1px solid #eee;padding:3px 10px;font-size:11px;color:#555;flex:none;display:flex;gap:24px}
.sp-calc{background:#f3f3f3;height:100%;display:flex;flex-direction:column;padding:8px}
.sp-calc .vis{text-align:right;padding:10px 8px;flex:none}.sp-calc .vis small{color:#666;display:block;min-height:16px}.sp-calc .vis b{font-size:38px;font-weight:600}
.sp-calc .tec{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;flex:1}
.sp-calc .tec button{border:0;border-radius:4px;background:#fff;font-size:17px;cursor:pointer;font-family:inherit}.sp-calc .tec button:hover{background:#e9e9e9}.sp-calc .tec button.op{background:#f9f9f9}.sp-calc .tec button.ig{background:#0067c0;color:#fff}
.sp-chr{display:flex;flex-direction:column;height:100%}
.sp-abas{background:#dee1e6;height:34px;display:flex;align-items:flex-end;padding-left:8px;gap:2px;flex:none}
.sp-aba{background:#c9ccd1;border-radius:8px 8px 0 0;padding:7px 10px;font-size:12px;width:170px;white-space:nowrap;overflow:hidden;cursor:pointer;display:flex;gap:6px}.sp-aba.at{background:#fff}
.sp-aba .t{flex:1;overflow:hidden;text-overflow:ellipsis}.sp-aba .x{opacity:.6}.sp-aba .x:hover{opacity:1}
.sp-abas .nova{border:0;background:none;font-size:18px;cursor:pointer;padding:4px 8px}
.sp-url{display:flex;gap:6px;align-items:center;padding:5px 8px;border-bottom:1px solid #ddd;flex:none}
.sp-url button{border:0;background:none;font-size:16px;cursor:pointer;border-radius:50%;width:28px;height:28px}.sp-url button:hover{background:#eee}
.sp-url input{flex:1;background:#f1f3f4;border:2px solid transparent;border-radius:14px;padding:5px 12px;color:#333;font-size:12.5px;font-family:inherit;outline:none}.sp-url input:focus{background:#fff;border-color:#1a73e8}
.sp-pag{flex:1;overflow:auto;padding:16px 26px;font-size:14px;line-height:1.5}.sp-pag h1{font-size:24px;margin:0 0 10px}.sp-pag a{color:#1a0dab;cursor:pointer;text-decoration:underline}
.sp-pag .busca{display:flex;gap:8px;max-width:520px;margin:60px auto 0}.sp-pag .busca input{flex:1;border:1px solid #dfe1e5;border-radius:22px;padding:10px 16px;font-size:15px}
.sp-pag .res{margin:14px 0}.sp-pag .res small{color:#006621;display:block}
.sp-lix{padding:10px}
.sp-dlg{position:absolute;inset:0;background:rgba(0,0,0,.08);z-index:700;display:flex;align-items:center;justify-content:center}
.sp-dlg .c{background:#fff;width:440px;box-shadow:0 10px 30px rgba(0,0,0,.4);border:1px solid #999;font-size:12.5px}.sp11 .sp-dlg .c{border-radius:8px}
.sp-dlg .c .tt{padding:8px 12px;background:#f3f3f3;border-bottom:1px solid #ddd}.sp-dlg .c .cc{padding:14px;display:grid;grid-template-columns:70px 1fr;gap:8px;align-items:center}
.sp-dlg .c input{border:1px solid #bbb;padding:4px 6px;font:inherit}.sp-dlg .c .bb{display:flex;justify-content:flex-end;gap:8px;padding:0 14px 14px}
.sp-bt{border:1px solid #adadad;background:#e1e1e1;padding:5px 18px;font-size:12px;cursor:pointer;font-family:inherit}.sp-bt:hover{background:#e5f1fb;border-color:#0078d7}.sp11 .sp-bt{border-radius:4px;background:#fbfbfb}.sp-bt.pri{background:#0067c0;color:#fff;border-color:#0067c0}
.sp-ver{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#1f2937;color:#f9fafb;font:600 15px system-ui}.sp-ver .g{font-size:90px}.sp-ver.doc{background:#e5e7eb;color:#111}.sp-ver.doc .pg{background:#fff;width:62%;height:78%;box-shadow:0 2px 8px #0003;padding:18px;font:500 13px system-ui;color:#374151;overflow:auto;white-space:pre-wrap}.sp-ver .pl{display:flex;gap:14px;font-size:22px}
.sp-jogo{height:100%;background:linear-gradient(#bae6fd,#dcfce7);display:flex;align-items:center;justify-content:center;font-size:56px;gap:20px}
.sp-pisca{animation:spPisca 1s infinite;z-index:950!important;position:relative}
@keyframes spPisca{0%,100%{box-shadow:0 0 0 3px #facc15,0 0 16px 6px rgba(250,204,21,.8)}50%{box-shadow:0 0 0 6px #facc15,0 0 30px 12px rgba(250,204,21,.4)}}
.sp-fant{position:absolute;z-index:990;pointer-events:none;opacity:.8;font-size:28px}
.sp-fim{position:absolute;inset:0;background:rgba(15,23,42,.6);z-index:999;display:flex;align-items:center;justify-content:center}
.sp-fim div{background:#fff;border-radius:18px;padding:22px 30px;text-align:center;font-size:20px;font-weight:700;box-shadow:0 10px 40px rgba(0,0,0,.4)}.sp-fim div span{font-size:54px;display:block}
`;
    document.head.appendChild(st);
  }

  /* ---------- peças fixas ---------- */
  const APPS = {
    exp: { nome: "Explorador de Arquivos", ic: "📁" }, notas: { nome: "Bloco de Notas", ic: "📝" }, calc: { nome: "Calculadora", ic: "🧮" },
    web: { nome: "Navegador", ic: "🌐" }, lixeira: { nome: "Lixeira", ic: "🗑️" }, jogo: { nome: "Jogo da escola", ic: "🎮" }, ver: { nome: "Visualizador", ic: "🖼️" }
  };
  const ICEXT = { txt: "📄", docx: "📘", pdf: "📕", jpg: "🖼️", png: "🖼️", webp: "🖼️", mp3: "🎵", mp4: "🎬", zip: "🗜️", exe: "⚙️", pptx: "📙", xlsx: "📗" };
  const TIPOEXT = { txt: "Documento de Texto", docx: "Documento do Word", pdf: "Documento PDF", jpg: "Arquivo JPG", png: "Arquivo PNG", webp: "Arquivo WEBP", mp3: "Arquivo MP3", mp4: "Arquivo MP4", zip: "Pasta compactada (zip)", exe: "Aplicativo", pptx: "Apresentação", xlsx: "Planilha" };
  const BASEPASTAS = ["Área de Trabalho", "Documentos", "Downloads", "Imagens", "Músicas", "Vídeos"];
  const PICP = { "Área de Trabalho": "🖥️", Documentos: "📄", Downloads: "⬇️", Imagens: "🖼️", Músicas: "🎵", Vídeos: "🎬" };
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const casa = (pad, ev) => { // padrão de evento: texto exato, com * curinga, ou /regex/
    if (pad === "*") return true;
    if (pad[0] === "/" && pad.lastIndexOf("/") > 0) { try { const k = pad.lastIndexOf("/"); return new RegExp(pad.slice(1, k), pad.slice(k + 1) || "i").test(ev); } catch (e) { return false; } }
    if (pad.includes("*")) return new RegExp("^" + pad.split("*").map(x => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$", "i").test(ev);
    return norm(pad) === norm(ev);
  };

  T.sim_pc = {
    auto: true,
    imprimir() { return `<p class="imp-obs">🖥️ Atividade no simulador do computador: faça no portal.</p>`; },
    resumoResposta(at, st) { return st && st.passo != null ? `Simulador: ${Math.min(st.passo, (at.passos || []).length)} de ${(at.passos || []).length} passos` : ""; },
    render(c, at, ctx) {
      const st = ctx.st, passos = at.passos || [], nomeBit = at.ajudante || "Bit";
      if (st.passo == null) st.passo = 0;
      if (!st.so) st.so = at.so || (Math.random() < .5 ? "10" : "11");
      const w11 = () => st.so === "11";
      /* ---------- estado do computador de mentira (recomeça a cada vez; o progresso dos passos fica salvo) ---------- */
      const fs = {}; // pastas: nome -> [{nome, ext, tipo}]
      BASEPASTAS.forEach(p => fs[p] = []);
      Object.entries(at.pastas || {}).forEach(([p, l]) => { fs[p] = (fs[p] || []).concat(l.map(x => Object.assign({}, x))); l.forEach(x => { if (x.tipo === "pasta" && !fs[x.nome]) fs[x.nome] = []; }); });
      (at.area || []).forEach((ic, i) => { if (ic.tipo === "pasta" && !fs[ic.nome]) fs[ic.nome] = (at.pastas || {})[ic.nome] ? fs[ic.nome] : []; });
      const area = (at.area || []).map((ic, i) => Object.assign({ x: 12 + Math.floor(i / 5) * 92, y: 10 + (i % 5) * 92 }, ic));
      const S = { jan: [], z: 1, sel: null, menu: null, start: false, lix: [], clip: null, ext: false,
        notas: at.notas || "", notasNome: null, calc: { vis: "0", conta: "", novo: true }, web: { abas: [{ url: at.inicioWeb || "busca", hist: [] }], at: 0 }, exp: { pasta: at.inicioPasta || "Documentos", sel: null, busca: "", ren: null }, dlg: null };
      const POS = { exp: [110, 40, 760, 440], notas: [180, 60, 620, 400], calc: [620, 40, 300, 440], web: [60, 20, 860, 500], lixeira: [200, 80, 560, 360], jogo: [240, 70, 520, 340], ver: [220, 50, 600, 420] };
      let erros = 0, mostrando = false, fimMostrado = !!st.status;

      /* ---------- janelas ---------- */
      const jan = id => S.jan.find(j => j.id === id);
      function abrir(app, titulo) {
        let j = jan(app); if (!j) { const [x, y, w, h] = POS[app] || [150, 60, 600, 400]; j = { id: app, app, titulo: titulo || APPS[app].nome, x, y, w, h, min: false, max: false }; S.jan.push(j); }
        j.min = false; j.z = ++S.z; S.start = false; S.menu = null; ev("abrir:app:" + app); return j;
      }
      /* ---------- o ajudante ---------- */
      const pAtual = () => passos[st.passo];
      let tAcerto = 0; /* eventos que chegam junto com o acerto (ex.: o Ctrl+V que fez o texto ficar certo) não contam como erro */
      function ev(e, extra) {
        if (st.status || !pAtual()) return;
        const p = pAtual(), oks = p.ok == null ? [] : (Array.isArray(p.ok) ? p.ok : [p.ok]);
        const bate = oks.some(o => typeof o === "string" ? casa(o, e) : checar(o, e, extra));
        if (bate) return acertou();
        // correções específicas do passo
        for (const [pad, msg] of Object.entries(p.erros || {})) if (casa(pad, e)) return errou(msg);
        // correções comuns
        const alvoOk = oks.find(o => typeof o === "string" && o.includes(":"));
        if (!alvoOk) return;
        const [aOk, ...rOk] = alvoOk.split(":"), [a, ...r] = e.split(":"), tOk = rOk.join(":"), t = r.join(":");
        const nome = x => x.replace(/^(ic|jan|arq|pasta|app|bar|menu|nav):/, "").replace(/>.*/, "");
        if (aOk === "duplo" && a === "clique" && casa(tOk, t)) return errou(`Isso foi <b>um clique só</b>: ele só <b>seleciona</b>. Para abrir, dê <b>dois cliques rapidinhos</b>, sem mexer o mouse.`);
        if (aOk === "direito" && a === "clique" && casa(tOk, t)) return errou(`Esse foi o botão <b>esquerdo</b>. Agora é o botão <b>direito</b> do mouse (o do lado direito).`);
        if (aOk === "clique" && a === "direito") return errou(`Esse foi o botão <b>direito</b>: ele abre o menu de opções. Aqui é um <b>clique com o botão esquerdo</b>.`);
        if (["min", "max", "fechar", "restaurar"].includes(aOk) && ["min", "max", "fechar"].includes(a)) {
          const N = { min: "<b>Minimizar</b> (o tracinho —)", max: "<b>Maximizar</b> (o quadradinho ☐)", fechar: "<b>Fechar</b> (o X)", restaurar: "<b>Restaurar</b>" };
          return errou(`Ops! Você clicou em ${N[a]}. O pedido era ${N[aOk]}.` + (a === "fechar" ? " Sem problema: abra de novo e tente outra vez." : ""));
        }
        if (aOk === a && tOk && t && !casa(tOk, t) && !tOk.includes("*")) return errou(`Opa! Esse é <b>${esc(nome(t))}</b>. Procure <b>${esc(nome(tOk))}</b>.`);
      }
      function checar(o, e, extra) {
        if (o.estado === "notas") { const want = o.texto, got = S.notas; return o.contem ? norm(got).includes(norm(want)) : got.replace(/\s+$/, "") === want; }
        if (o.estado === "calc") return e.startsWith("calc:=") && S.calc.vis === String(o.resultado);
        if (o.estado === "pastaTem") return (fs[o.pasta] || []).some(x => norm(x.nome + (x.ext ? "." + x.ext : "")) === norm(o.item) || norm(x.nome) === norm(o.item));
        if (o.estado === "pastaNaoTem") return !(fs[o.pasta] || []).some(x => norm(x.nome) === norm(o.item));
        if (o.estado === "janela") { const j = jan(o.id); if (!j) return o.fechada === true; return (o.min == null || j.min === o.min) && (o.max == null || j.max === o.max) && !o.fechada; }
        if (o.estado === "salvo") return S.notasNome && norm(S.notasNome) === norm(o.nome) && (o.pasta ? (fs[o.pasta] || []).some(x => norm(x.nome) === norm(o.nome)) : true);
        if (o.estado === "url") { const a = S.web.abas[S.web.at]; return a && norm(a.url) === norm(o.url); }
        return false;
      }
      function acertou() {
        erros = 0; tAcerto = Date.now(); const p = pAtual(); st.passo++; ctx.salvar(); falar(p.msgOk || elogio(), "ok", true);
        if (st.passo >= passos.length) { ctx.concluir("certo", at.fimMsg || `Você fez todos os ${passos.length} passos sozinho(a)! 🎉`); desenharGuia(); setTimeout(mostrarFim, 400); }
        else setTimeout(() => desenharGuia(), 50);
      }
      const ELOG = ["Isso! 👏", "Mandou bem! ⭐", "Perfeito! ✅", "Muito bem! 🎉", "Show! 💪", "Acertou! 🌟"];
      const elogio = () => ELOG[Math.floor(Math.random() * ELOG.length)];
      function errou(msg) { if (Date.now() - tAcerto < 450) return; erros++; st.erros = (st.erros || 0) + 1; ctx.salvar(); falar(msg + (erros >= 2 ? ` <br><small>Toque em <b>💡 Mostre onde</b> que eu aponto para você.</small>` : ""), "erro"); if (erros >= 3) mostrarOnde(); }
      /* ---------- desenho ---------- */
      c.innerHTML = `<div class="sp"><div class="sp-guia"><div class="sp-bit" aria-hidden="true">🤖</div><div class="sp-fala"><div class="q"></div><div class="f"></div><div class="r" aria-live="polite"></div><div class="sp-prog"></div></div>
        <div class="sp-bts"><button type="button" class="onde">💡 Mostre onde</button><button type="button" class="sec rec">↺ Recomeçar</button></div></div>
        <div class="sp-moldura sp${st.so}"><div class="sp-tela" tabindex="0"></div></div></div>`;
      const G = c.querySelector(".sp-guia"), bit = G.querySelector(".sp-bit"), q = G.querySelector(".q"), fEl = G.querySelector(".f"), rEl = G.querySelector(".r"), prog = G.querySelector(".sp-prog");
      const mold = c.querySelector(".sp-moldura"), tela = c.querySelector(".sp-tela");
      G.querySelector(".onde").onclick = () => { st.dicas = (st.dicas || 0); mostrarOnde(true); };
      G.querySelector(".rec").onclick = () => { if (!confirm("Recomeçar do primeiro passo?")) return; st.passo = 0; st.erros = 0; delete st.status; ctx.salvar(); ctx.reRender(); };
      function falar(html, tipo, anima) { rEl.className = "r " + (tipo || ""); rEl.innerHTML = html; bit.className = "sp-bit " + (tipo === "ok" ? "feliz" : tipo === "erro" ? "triste" : ""); void bit.offsetWidth; bit.textContent = tipo === "erro" ? "🤔" : tipo === "ok" ? "😄" : "🤖"; }
      function desenharGuia() {
        const p = pAtual();
        prog.innerHTML = passos.map((_, i) => `<i class="${i < st.passo ? "ok" : i === st.passo ? "at" : ""}"></i>`).join("");
        if (!p) { q.textContent = `${nomeBit} · tudo pronto`; fEl.innerHTML = "Você terminou! 🎉"; G.querySelector(".onde").hidden = true; return; }
        q.textContent = `${nomeBit}, o seu ajudante · passo ${st.passo + 1} de ${passos.length}`; fEl.innerHTML = p.faca; G.querySelector(".onde").hidden = false;
      }
      function mostrarOnde(pediu) {
        tela.querySelectorAll(".sp-pisca").forEach(x => x.classList.remove("sp-pisca"));
        const p = pAtual(); if (!p) return; if (pediu) { st.dicas = (st.dicas || 0) + 1; ctx.salvar(); }
        const alvo = p.onde && tela.querySelector(`[data-k="${CSS.escape(p.onde)}"]`);
        if (alvo) { alvo.classList.add("sp-pisca"); setTimeout(() => alvo.classList.remove("sp-pisca"), 6000); }
        if (p.dica && pediu) falar("💡 " + p.dica, "");
        else if (pediu && !alvo) falar("💡 " + (p.dica || "Leia de novo o pedido do passo, com calma."), "");
      }
      function mostrarFim() { if (fimMostrado) return; fimMostrado = true; S.fim = true; draw(); }
      // escala: a tela tem 1000×600 e encolhe para caber
      const esc2 = () => { const k = mold.clientWidth / 1000; tela.style.transform = `scale(${k})`; mold.style.height = (600 * k) + "px"; return k; };
      let K = 1; const ro = new ResizeObserver(() => { K = esc2(); }); ro.observe(mold); K = esc2();
      const xy = e => { const r = tela.getBoundingClientRect(); return [(e.clientX - r.left) / K, (e.clientY - r.top) / K]; };

      const nomeArq = f => f.tipo === "pasta" ? f.nome : f.nome + (S.ext && f.ext ? "." + f.ext : "");
      const icArq = f => f.tipo === "pasta" ? "📁" : ICEXT[f.ext] || "📄";
      function corpoApp(j) {
        if (j.app === "exp") return corpoExp();
        if (j.app === "notas") return `<div class="sp-notas"><div class="menu"><span data-a="notasArq">Arquivo</span><span>Editar</span><span>Exibir</span></div><textarea spellcheck="false" data-k="notas:texto" aria-label="Texto do Bloco de Notas">${esc(S.notas)}</textarea><div class="rod"><span>${S.notas.length} caracteres</span><span>UTF-8</span></div></div>`;
        if (j.app === "calc") { const C = S.calc; return `<div class="sp-calc"><div class="vis"><small>${esc(C.conta)}</small><b>${esc(C.vis)}</b></div><div class="tec">${["C", "⌫", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "±", "0", ",", "="].map(b => `<button type="button" class="${/[÷×−+]/.test(b) ? "op" : b === "=" ? "ig" : ""}" data-a="calc:${b}" data-k="calc:${b}">${b}</button>`).join("")}</div></div>`; }
        if (j.app === "web") return corpoWeb();
        if (j.app === "lixeira") return `<div class="sp-lix">${S.lix.length ? `<div class="sp-arqs"><table><thead><tr><th>Nome</th><th>Local original</th></tr></thead><tbody>${S.lix.map((f, i) => `<tr class="f" data-ctx="lix:${esc(f.nome)}" data-k="lix:${esc(f.nome)}"><td>${icArq(f)} ${esc(nomeArq(f))}</td><td>${esc(f.de)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="sp-vazio">A Lixeira está vazia.</p>`}</div>`;
        if (j.app === "jogo") return `<div class="sp-jogo">⭐ 🎮 ⚽</div>`;
        if (j.app === "ver") { const f = S.verArq || {}; const e = f.ext || ""; if (/^(docx|pdf|pptx|xlsx)$/.test(e)) return `<div class="sp-ver doc"><div class="pg"><b>${esc(f.nome)}</b>\n\n${esc(f.texto || "Texto do trabalho…")}</div></div>`; if (/^(mp3|mp4)$/.test(e)) return `<div class="sp-ver"><span class="g">${e === "mp3" ? "🎵" : "🎬"}</span>${esc(f.nome)}<div class="pl"><span>⏮️</span><span>▶️</span><span>⏭️</span></div></div>`; return `<div class="sp-ver"><span class="g">${esc(f.figura || ICEXT[e] || "📄")}</span>${esc(nomeArq(f))}</div>`; }
        return "";
      }
      function corpoExp() {
        const E = S.exp, todas = Object.keys(fs), lista = E.busca ? todas.flatMap(p => fs[p].filter(f => norm(nomeArq(f)).includes(norm(E.busca))).map(f => Object.assign({ _p: p }, f))) : (fs[E.pasta] || []);
        return `<div class="sp-exp"><div class="sp-exbar"><button type="button" data-a="expVoltar" title="Voltar">←</button><button type="button" data-a="expAcima" title="Acima">↑</button><span class="end">📁 Este Computador › ${esc(E.busca ? "Resultados da pesquisa" : E.pasta)}</span><input type="search" placeholder="🔍 Pesquisar" value="${esc(E.busca)}" data-k="exp:busca" aria-label="Pesquisar"><button type="button" data-a="expExt" title="Exibir › Extensões de nomes de arquivos" data-k="exp:ext">${S.ext ? "☑" : "☐"} Extensões</button></div>
          <div class="sp-exc"><div class="sp-nav">${[...BASEPASTAS, ...todas.filter(p => !BASEPASTAS.includes(p))].map(p => `<div class="${p === E.pasta && !E.busca ? "sel" : ""}" data-a="expIr:${esc(p)}" data-drop="${esc(p)}" data-k="nav:${esc(p)}">${PICP[p] || "📁"} ${esc(p)}</div>`).join("")}</div>
          <div class="sp-arqs" data-ctx="fundoexp">${lista.length ? `<table><thead><tr><th>Nome</th><th>Tipo</th>${E.busca ? "<th>Pasta</th>" : ""}</tr></thead><tbody>${lista.map(f => {
            const id = (f._p || E.pasta) + "|" + f.nome + "|" + (f.ext || "");
            const ren = E.ren === id;
            return `<tr class="f ${E.sel === id ? "sel" : ""}" data-arq="${esc(id)}" data-ctx="arq:${esc(id)}" ${f.tipo === "pasta" ? `data-drop="${esc(f.nome)}"` : ""} data-k="arq:${esc(nomeArq(f))}" draggable="false"><td>${icArq(f)} ${ren ? `<input value="${esc(f.nome)}" data-ren="${esc(id)}" aria-label="Novo nome">` : esc(nomeArq(f))}</td><td>${f.tipo === "pasta" ? "Pasta de arquivos" : TIPOEXT[f.ext] || "Arquivo"}</td>${E.busca ? `<td>${esc(f._p)}</td>` : ""}</tr>`;
          }).join("")}</tbody></table>` : `<p class="sp-vazio">${E.busca ? "Nenhum item corresponde à sua pesquisa." : "Esta pasta está vazia."}</p>`}</div></div></div>`;
      }
      const PAGINAS = Object.assign({ busca: { titulo: "Buscador", busca: true } }, at.web || {});
      function corpoWeb() {
        const W = S.web, a = W.abas[W.at], pg = PAGINAS[a.url];
        let h;
        if (!pg) h = `<h1>😕 Não é possível acessar esse site</h1><p>Confira se o endereço <b>${esc(a.url)}</b> foi digitado certinho.</p>`;
        else if (pg.busca) {
          const termo = a.termo || "";
          const res = termo ? Object.entries(PAGINAS).filter(([u, p]) => !p.busca && (norm(p.titulo + " " + (p.palavras || "")).split(/\s+/).some(w => w.length > 2 && norm(termo).includes(w)))) : [];
          h = `<div style="text-align:center;font-size:40px;font-weight:700;color:#4285f4;margin-top:20px">Busc<span style="color:#ea4335">a</span><span style="color:#fbbc05">d</span><span style="color:#34a853">o</span>r</div>
            <form class="busca" data-a="buscar"><input name="q" value="${esc(termo)}" placeholder="Pesquise ou digite um endereço" data-k="web:busca" aria-label="Pesquisar"><button type="submit" class="sp-bt pri">Pesquisar</button></form>
            ${termo ? (res.length ? res.map(([u, p]) => `<div class="res"><a data-link="${esc(u)}" data-k="link:${esc(u)}">${esc(p.titulo)}</a><small>${esc(u)}</small>${esc(p.resumo || "")}</div>`).join("") : `<p>Nenhum resultado para <b>${esc(termo)}</b>.</p>`) : ""}`;
        } else h = `<h1>${esc(pg.titulo)}</h1>${pg.html || ""}`;
        return `<div class="sp-chr"><div class="sp-abas">${W.abas.map((x, i) => `<div class="sp-aba ${i === W.at ? "at" : ""}" data-a="aba:${i}" data-k="aba:${i}"><span class="t">${esc((PAGINAS[x.url] || {}).titulo || x.url)}</span><span class="x" data-a="fecharAba:${i}">✕</span></div>`).join("")}<button type="button" class="nova" data-a="novaAba" data-k="web:novaaba" title="Nova guia">+</button></div>
          <div class="sp-url"><button type="button" data-a="webVoltar" data-k="web:voltar" title="Voltar">←</button><button type="button" title="Avançar">→</button><button type="button" data-a="webRecarregar" title="Recarregar">⟳</button><input value="${esc(a.url === "busca" ? "" : a.url)}" placeholder="Pesquise no Buscador ou digite um endereço" data-k="web:url" aria-label="Barra de endereço"></div>
          <div class="sp-pag" data-rolar="${esc(a.url)}">${h}</div></div>`;
      }
      function draw() {
        const ordem = [...S.jan].sort((a, b) => a.z - b.z);
        tela.innerHTML = `<div class="sp-icons" data-ctx="area">${area.map((ic, i) => `<div class="sp-ic ${S.sel === "ic:" + ic.nome ? "sel" : ""}" style="left:${ic.x}px;top:${ic.y}px" data-ic="${i}" data-ctx="ic:${i}" data-k="ic:${esc(ic.nome)}" ${ic.tipo === "pasta" ? `data-drop="${esc(ic.nome)}"` : ""}><span class="e">${ic.ic || (ic.tipo === "pasta" ? "📁" : ic.app ? APPS[ic.app].ic : icArq(ic))}</span>${esc(ic.nome)}</div>`).join("")}</div>
          ${ordem.filter(j => !j.min).map(j => `<div class="sp-jan ${j.max ? "max" : ""}" data-jan="${j.id}" style="${j.max ? "left:0;top:0;width:1000px;height:" + (w11() ? 556 : 560) + "px" : `left:${j.x}px;top:${j.y}px;width:${j.w}px;height:${j.h}px`};z-index:${10 + j.z}">
            <div class="sp-tit" data-arrasta="${j.id}"><span>${APPS[j.app] ? APPS[j.app].ic : ""}</span><span class="t">${esc(j.titulo)}</span><button type="button" data-a="min:${j.id}" data-k="jan:${j.id}:min" title="Minimizar">—</button><button type="button" data-a="max:${j.id}" data-k="jan:${j.id}:max" title="${j.max ? "Restaurar" : "Maximizar"}">${j.max ? "❐" : "☐"}</button><button type="button" class="x" data-a="fechar:${j.id}" data-k="jan:${j.id}:fechar" title="Fechar">✕</button></div>
            <div class="sp-corpo">${corpoApp(j)}</div></div>`).join("")}
          <div class="sp-bar">${w11() ? "" : `<button type="button" data-a="iniciar" data-k="bar:iniciar" title="Iniciar" style="font-size:22px">⊞</button><button type="button" class="sp-busca10">🔍 Digite aqui para pesquisar</button>`}
            ${w11() ? `<button type="button" data-a="iniciar" data-k="bar:iniciar" title="Iniciar" style="color:#0067c0;font-size:22px">⊞</button><button type="button" title="Pesquisar">🔍</button>` : ""}
            ${["exp", "web", ...S.jan.map(j => j.app).filter(a => !["exp", "web"].includes(a))].map(a => { const j = jan(a); return `<button type="button" class="${j ? "ab" : ""} ${j && !j.min && j.z === S.z ? "fr" : ""}" data-a="barra:${a}" data-k="bar:${a}" title="${APPS[a].nome}">${APPS[a].ic}</button>`; }).join("")}
            <div class="sp-rel">10:30<br>15/03/2027</div></div>
          ${S.start ? `<div class="sp-start" data-k="start">${w11() ? `<h4>Fixado</h4><div class="grade">${Object.entries(APPS).filter(([k]) => k !== "jogo").map(([k, a]) => `<div data-a="abrirApp:${k}" data-k="start:${k}"><span class="e">${a.ic}</span>${a.nome}</div>`).join("")}</div>` : `<small>Aplicativos</small>${Object.entries(APPS).filter(([k]) => k !== "jogo").map(([k, a]) => `<div data-a="abrirApp:${k}" data-k="start:${k}"><span>${a.ic}</span>${a.nome}</div>`).join("")}`}</div>` : ""}
          ${S.menu ? `<div class="sp-menu" style="left:${S.menu.x}px;top:${S.menu.y}px">${S.menu.itens.map(m => m === "-" ? "<hr>" : `<div class="${m.off ? "off" : ""}" data-m="${esc(m.id || "")}" data-k="menu:${esc(m.t)}"><span class="i">${m.i || ""}</span>${esc(m.t)}${m.s ? `<span class="s">${m.s}</span>` : ""}</div>`).join("")}</div>` : ""}
          ${S.dlg ? `<div class="sp-dlg"><div class="c"><div class="tt">💾 Salvar como</div><div class="cc"><span>Pasta:</span><select data-k="dlg:pasta">${Object.keys(fs).map(p => `<option ${p === S.dlg.pasta ? "selected" : ""}>${esc(p)}</option>`).join("")}</select><span>Nome:</span><input value="${esc(S.dlg.nome)}" data-k="dlg:nome" aria-label="Nome do arquivo"><span>Tipo:</span><span>Documentos de texto (*.txt)</span></div><div class="bb"><button type="button" class="sp-bt pri" data-a="dlgSalvar" data-k="dlg:salvar">Salvar</button><button type="button" class="sp-bt" data-a="dlgCancelar">Cancelar</button></div></div></div>` : ""}`;
        if (S.fim) { const d = document.createElement("div"); d.className = "sp-fim"; d.innerHTML = `<div><span>🏆</span>Missão no computador cumprida!<br><small style="font-weight:500;font-size:14px">${nomeBit} está orgulhoso(a) de você. Toque para continuar treinando.</small></div>`; tela.appendChild(d); d.onclick = e => { e.stopPropagation(); S.fim = false; draw(); }; }
        ligar();
      }
      /* ---------- menus do botão direito (textos iguais aos do Windows) ---------- */
      function menuPara(alvo, x, y) {
        let itens = [];
        if (alvo === "area") itens = [{ t: "Exibir", s: "›" }, { t: "Classificar por", s: "›" }, { t: "Atualizar", id: "atualizar" }, "-", { t: "Novo › Pasta", i: "📁", id: "novaPastaArea" }, { t: "Novo › Documento de Texto", i: "📄", id: "novoTxtArea" }, "-", { t: "Personalizar", i: "🎨", id: "personalizar" }];
        else if (alvo.startsWith("ic:")) { const ic = area[+alvo.slice(3)]; itens = [{ t: "Abrir", id: "abrirIc:" + alvo.slice(3), i: "📂" }, "-", { t: "Recortar", s: "Ctrl+X", id: "x" }, { t: "Copiar", s: "Ctrl+C", id: "c" }, "-", { t: "Criar atalho", off: true }, { t: "Excluir", i: "🗑️", id: "exclIc:" + alvo.slice(3), off: ic.app === "lixeira" }, { t: "Renomear", id: "renIc:" + alvo.slice(3), off: !!ic.app }, "-", { t: "Propriedades", id: "prop" }]; }
        else if (alvo === "fundoexp") itens = [{ t: "Exibir", s: "›" }, { t: "Classificar por", s: "›" }, "-", { t: "Colar", s: "Ctrl+V", id: "colar", off: !S.clip }, "-", { t: "Novo › Pasta", i: "📁", id: "novaPasta" }, { t: "Novo › Documento de Texto", i: "📄", id: "novoTxt" }, "-", { t: "Propriedades", id: "prop" }];
        else if (alvo.startsWith("arq:")) { const id = alvo.slice(4); itens = [{ t: "Abrir", id: "abrirArq:" + id, i: "📂" }, "-", { t: "Recortar", s: "Ctrl+X", id: "recortar:" + id }, { t: "Copiar", s: "Ctrl+C", id: "copiar:" + id }, "-", { t: "Excluir", i: "🗑️", id: "excluir:" + id }, { t: "Renomear", id: "renomear:" + id }, "-", { t: "Propriedades", id: "prop" }]; }
        else if (alvo.startsWith("lix:")) itens = [{ t: "Restaurar", id: "restaurar:" + alvo.slice(4), i: "↩️" }, { t: "Excluir", id: "apagarDeVez:" + alvo.slice(4) }];
        if (itens.length) { S.menu = { x: Math.min(x, 1000 - 240), y: Math.min(y, 560 - itens.length * 27), itens }; S.start = false; draw(); }
      }
      function achar(id) { const [p, nome, ext] = id.split("|"); const l = fs[p] || []; const i = l.findIndex(f => f.nome === nome && (f.ext || "") === ext); return { p, i, f: l[i] }; }
      function acaoMenu(m) {
        const [k, ...r] = m.split(":"), a = r.join(":"); S.menu = null;
        if (k === "abrirIc") return abrirIcone(+a);
        if (k === "abrirArq") return abrirArq(a);
        if (k === "novaPasta" || k === "novaPastaArea") { const p = k === "novaPasta" ? S.exp.pasta : "Área de Trabalho"; let n = "Nova pasta", c2 = 2; while (fs[p].some(f => f.nome === n)) n = `Nova pasta (${c2++})`; fs[p].push({ nome: n, tipo: "pasta" }); fs[n] = fs[n] || []; if (k === "novaPastaArea") { area.push({ nome: n, tipo: "pasta", x: 12 + Math.floor(area.length / 5) * 92, y: 10 + (area.length % 5) * 92 }); } else S.exp.ren = p + "|" + n + "|"; ev("criar:pasta:" + p); draw(); focarRen(); return; }
        if (k === "novoTxt" || k === "novoTxtArea") { const p = k === "novoTxt" ? S.exp.pasta : "Área de Trabalho"; fs[p].push({ nome: "Novo Documento de Texto", ext: "txt" }); if (k === "novoTxt") S.exp.ren = p + "|Novo Documento de Texto|txt"; ev("criar:txt:" + p); draw(); focarRen(); return; }
        if (k === "renomear") { S.exp.ren = a; draw(); focarRen(); return; }
        if (k === "excluir") { const { p, i, f } = achar(a); if (!f) return; fs[p].splice(i, 1); S.lix.push(Object.assign({ de: p }, f)); S.exp.sel = null; ev("excluir:arq:" + nomeArq(f)); draw(); return; }
        if (k === "restaurar") { const i = S.lix.findIndex(f => f.nome === a); if (i < 0) return; const f = S.lix.splice(i, 1)[0]; fs[f.de].push(f); ev("restaurar:arq:" + nomeArq(f)); draw(); return; }
        if (k === "apagarDeVez") { const i = S.lix.findIndex(f => f.nome === a); if (i >= 0) S.lix.splice(i, 1); ev("apagarDeVez:arq:" + a); draw(); return; }
        if (k === "copiar" || k === "recortar") { S.clip = { modo: k, id: a }; const { f } = achar(a); ev((k === "copiar" ? "copiar" : "recortar") + ":arq:" + (f ? nomeArq(f) : "")); draw(); return; }
        if (k === "colar") return colar();
        if (k === "exclIc") { const ic = area[+a]; area.splice(+a, 1); S.lix.push(Object.assign({ de: "Área de Trabalho" }, ic)); ev("excluir:ic:" + ic.nome); draw(); return; }
        if (k === "personalizar") { ev("menu:Personalizar"); draw(); return; }
        ev("menu:" + (m || "")); draw();
      }
      function colar() { if (!S.clip) return; const { p, i, f } = achar(S.clip.id); if (!f) return; const dest = S.exp.pasta; const novo = Object.assign({}, f); if (S.clip.modo === "recortar") { fs[p].splice(i, 1); S.clip = null; } else if (dest === p) novo.nome = f.nome + " - Cópia"; fs[dest].push(novo); ev("colar:arq:" + nomeArq(novo) + ">" + dest); draw(); }
      function mover(id, dest) { const { p, i, f } = achar(id); if (!f || dest === p || dest === f.nome) return; fs[p].splice(i, 1); (fs[dest] = fs[dest] || []).push(f); ev("mover:arq:" + nomeArq(f) + ">" + dest); draw(); }
      function focarRen() { const inp = tela.querySelector("[data-ren]"); if (!inp) return; inp.focus(); inp.select(); const fim2 = ok => { const id = inp.dataset.ren, { p, f } = achar(id); S.exp.ren = null; if (f && ok) { const v = inp.value.trim(); if (v && v !== f.nome) { const velho = f.nome; f.nome = v; if (f.tipo === "pasta") { fs[v] = fs[velho] || []; delete fs[velho]; } ev("renomear:" + (f.tipo === "pasta" ? "pasta" : "arq") + ":" + velho + ">" + v); } } draw(); };
        inp.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") fim2(true); if (e.key === "Escape") fim2(false); }; inp.onblur = () => fim2(true); }
      function abrirIcone(i) { const ic = area[i]; if (!ic) return; ev("duplo:ic:" + ic.nome); if (ic.app) { abrir(ic.app); } else if (ic.tipo === "pasta") { S.exp.pasta = ic.nome; S.exp.busca = ""; abrir("exp", ic.nome); jan("exp").titulo = ic.nome; } else { abrirArqObj(ic); } draw(); }
      function abrirArq(id) { const { p, f } = achar(id); if (!f) return; if (f.tipo === "pasta") { S.exp.pasta = f.nome; S.exp.busca = ""; jan("exp") && (jan("exp").titulo = f.nome); ev("abrir:pasta:" + f.nome); draw(); return; } abrirArqObj(f); }
      function abrirArqObj(f) { ev("abrir:arq:" + nomeArq(f)); if (f.ext === "txt") { S.notas = f.texto || ""; S.notasNome = f.nome; abrir("notas", f.nome + " - Bloco de Notas"); } else { const prog = { jpg: "Fotos", png: "Fotos", webp: "Fotos", pdf: "Leitor de PDF", docx: "Word", pptx: "PowerPoint", xlsx: "Excel", mp3: "Media Player", mp4: "Media Player" }[f.ext]; if (prog) { S.verArq = f; const j = abrir("ver", f.nome + " - " + prog); j.titulo = f.nome + " - " + prog; } } draw(); }
      /* ---------- eventos ---------- */
      function ligar() {
        tela.querySelectorAll("[data-a]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); acao(b.dataset.a, e); }));
        tela.querySelectorAll("[data-m]").forEach(b => b.onclick = e => { e.stopPropagation(); if (!b.classList.contains("off")) { const t = b.dataset.k.slice(5); if (b.dataset.m) { acaoMenu(b.dataset.m); ev("menu:" + t); } else { S.menu = null; ev("menu:" + t); draw(); } } });
        // o clique só é avisado ao ajudante depois de um instante: se virar duplo clique, conta só o duplo
        tela.querySelectorAll(".sp-ic").forEach(b => { b.onclick = e => { e.stopPropagation(); const ic = area[+b.dataset.ic]; S.sel = "ic:" + ic.nome; S.menu = null; S.start = false; tela.querySelectorAll(".sp-ic.sel").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); adiar("clique:ic:" + ic.nome); }; b.ondblclick = e => { e.stopPropagation(); clearTimeout(tClique); abrirIcone(+b.dataset.ic); }; });
        tela.querySelectorAll("tr[data-arq]").forEach(r => { r.onclick = e => { if (e.target.tagName === "INPUT") return; e.stopPropagation(); S.exp.sel = r.dataset.arq; tela.querySelectorAll("tr.sel").forEach(x => x.classList.remove("sel")); r.classList.add("sel"); const { f } = achar(r.dataset.arq); adiar("clique:arq:" + (f ? nomeArq(f) : "")); }; r.ondblclick = e => { e.stopPropagation(); clearTimeout(tClique); abrirArq(r.dataset.arq); }; });
        tela.querySelectorAll("[data-jan]").forEach(w => w.addEventListener("pointerdown", () => { const j = jan(w.dataset.jan); if (j && j.z !== S.z) { j.z = ++S.z; w.style.zIndex = 10 + j.z; } }));
        // Bloco de Notas: digitação de verdade
        const ta = tela.querySelector(".sp-notas textarea");
        if (ta) { ta.oninput = () => { S.notas = ta.value; const rod = tela.querySelector(".sp-notas .rod span"); if (rod) rod.textContent = ta.value.length + " caracteres"; ev("texto:" + ta.value); };
          ta.onkeydown = e => { e.stopPropagation(); const ctrl = e.ctrlKey || e.metaKey; if (ctrl && e.key.length === 1) { const k = e.key.toUpperCase(); if (k === "S") { e.preventDefault(); S.dlg = { pasta: "Documentos", nome: S.notasNome || "Sem título" }; ev("atalho:Ctrl+S"); draw(); return; } setTimeout(() => ev("atalho:Ctrl+" + k), 0); return; }
            if (["Enter", "Backspace", "Tab", "Delete"].includes(e.key)) setTimeout(() => ev("tecla:" + e.key), 0); if (e.key === "Shift") ev("tecla:Shift"); };
          if (at.focarNotas !== false && !S.menu && !S.dlg && jan("notas") && !jan("notas").min && jan("notas").z === S.z) setTimeout(() => { try { ta.focus(); ta.selectionStart = ta.selectionEnd = ta.value.length; } catch (e) { } }, 0); }
        // Explorador: pesquisa
        const bs = tela.querySelector('[data-k="exp:busca"]'); if (bs) { bs.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") { S.exp.busca = bs.value; ev("buscar:" + bs.value); draw(); } }; bs.onsearch = () => { S.exp.busca = bs.value; draw(); }; }
        // Navegador: endereço e busca
        const url = tela.querySelector('[data-k="web:url"]'); if (url) url.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") { const v = url.value.trim().replace(/^https?:\/\//, "").replace(/\/$/, ""); if (!v) return; if (PAGINAS[v] || /\.\w{2,}/.test(v)) ir(v); else { const a = S.web.abas[S.web.at]; a.hist.push(a.url); a.url = "busca"; a.termo = v; ev("buscar:" + v); draw(); } } };
        const fb = tela.querySelector("form[data-a=buscar]"); if (fb) { fb.onsubmit = e => { e.preventDefault(); const v = fb.q.value.trim(); const a = S.web.abas[S.web.at]; a.termo = v; ev("buscar:" + v); draw(); }; fb.q.onkeydown = e => e.stopPropagation(); }
        tela.querySelectorAll("[data-link]").forEach(l => l.onclick = e => { e.stopPropagation(); ev("link:" + l.dataset.link); ir(l.dataset.link); });
        const pg = tela.querySelector(".sp-pag"); if (pg) pg.onscroll = () => { if (pg.scrollTop + pg.clientHeight >= pg.scrollHeight - 8 && !pg.dataset.fim) { pg.dataset.fim = 1; ev("rolar:fim:" + pg.dataset.rolar); } else if (pg.scrollTop > 30) ev("rolar:" + pg.dataset.rolar); };
        // Salvar como
        const dn = tela.querySelector('[data-k="dlg:nome"]'); if (dn) { dn.oninput = () => S.dlg.nome = dn.value; dn.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") acao("dlgSalvar"); }; dn.focus(); dn.select(); const dp = tela.querySelector('[data-k="dlg:pasta"]'); dp.onchange = () => S.dlg.pasta = dp.value; }
      }
      let tClique = null; const adiar = e => { clearTimeout(tClique); tClique = setTimeout(() => ev(e), 320); };
      function ir(u) { const a = S.web.abas[S.web.at]; a.hist.push(a.url); a.url = u; ev("url:" + u); draw(); }
      function acao(a, e) {
        const [k, ...r] = a.split(":"), v = r.join(":");
        if (k === "min") { const j = jan(v); j.min = true; ev("min:jan:" + v); }
        else if (k === "max") { const j = jan(v); j.max = !j.max; ev((j.max ? "max" : "restaurarTam") + ":jan:" + v); }
        else if (k === "fechar") { S.jan = S.jan.filter(j => j.id !== v); ev("fechar:jan:" + v); }
        else if (k === "barra") { const j = jan(v); if (!j) { abrir(v); } else if (j.min) { j.min = false; j.z = ++S.z; ev("restaurar:jan:" + v); } else if (j.z === S.z) { j.min = true; ev("min:jan:" + v); } else { j.z = ++S.z; ev("frente:jan:" + v); } ev("clique:bar:" + v); }
        else if (k === "iniciar") { S.start = !S.start; S.menu = null; ev("clique:bar:iniciar"); }
        else if (k === "abrirApp") { abrir(v); }
        else if (k === "calc") { calcTecla(v); return; }
        else if (k === "expIr") { S.exp.pasta = v; S.exp.busca = ""; S.exp.sel = null; jan("exp").titulo = v; ev("abrir:pasta:" + v); }
        else if (k === "expVoltar" || k === "expAcima") { S.exp.pasta = "Documentos"; S.exp.busca = ""; jan("exp").titulo = "Documentos"; ev("voltar:exp"); }
        else if (k === "expExt") { S.ext = !S.ext; ev("extensoes:" + (S.ext ? "sim" : "nao")); }
        else if (k === "notasArq") { S.dlg = { pasta: "Documentos", nome: S.notasNome || "Sem título" }; ev("menu:Salvar como"); }
        else if (k === "dlgSalvar") { const nm = (S.dlg.nome || "").trim().replace(/\.txt$/i, ""); if (!nm) return; const l = fs[S.dlg.pasta]; const ex = l.find(f => f.nome === nm && f.ext === "txt"); if (ex) ex.texto = S.notas; else l.push({ nome: nm, ext: "txt", texto: S.notas }); S.notasNome = nm; const j = jan("notas"); if (j) j.titulo = nm + " - Bloco de Notas"; const pd = S.dlg.pasta; S.dlg = null; ev("salvar:" + nm + ">" + pd); }
        else if (k === "dlgCancelar") { S.dlg = null; }
        else if (k === "aba") { S.web.at = +v; ev("aba:" + v); }
        else if (k === "fecharAba") { S.web.abas.splice(+v, 1); if (!S.web.abas.length) { S.jan = S.jan.filter(j => j.id !== "web"); S.web.abas = [{ url: "busca", hist: [] }]; } S.web.at = Math.min(S.web.at, S.web.abas.length - 1); ev("fecharAba"); }
        else if (k === "novaAba") { S.web.abas.push({ url: "busca", hist: [] }); S.web.at = S.web.abas.length - 1; ev("novaAba"); }
        else if (k === "webVoltar") { const ab = S.web.abas[S.web.at]; if (ab.hist.length) { ab.url = ab.hist.pop(); ab.termo = ab.url === "busca" ? ab.termo : ab.termo; } ev("voltar:web"); }
        else if (k === "webRecarregar") { ev("recarregar"); }
        draw();
      }
      function calcTecla(b) {
        const C = S.calc, ops = { "÷": "/", "×": "*", "−": "-", "+": "+" };
        if (b === "C") { C.vis = "0"; C.conta = ""; C.novo = true; }
        else if (b === "⌫") { C.vis = C.vis.length > 1 ? C.vis.slice(0, -1) : "0"; }
        else if (/^\d$/.test(b)) { C.vis = C.novo || C.vis === "0" ? b : C.vis + b; C.novo = false; }
        else if (b === ",") { if (!C.vis.includes(",")) C.vis += ","; C.novo = false; }
        else if (ops[b]) { C.conta = (C.conta && !C.novo ? C.conta + " " + C.vis : C.vis) + " " + b; C.novo = true; }
        else if (b === "=") { const expr = (C.conta + " " + C.vis).replace(/[÷×−]/g, m => ops[m]).replace(/,/g, "."); let r; try { r = Function(`"use strict";return (${expr.replace(/[^0-9.+\-*/ ]/g, "")})`)(); } catch (e) { r = NaN; } C.conta = C.conta + " " + C.vis + " ="; C.vis = isFinite(r) ? String(+r.toFixed(8)).replace(".", ",") : "Erro"; C.novo = true; draw(); ev("calc:=:" + C.vis); return; }
        ev("calc:" + b); draw();
      }
      // botão direito
      tela.addEventListener("contextmenu", e => {
        e.preventDefault(); const [x, y] = xy(e); let el = e.target.closest("[data-ctx]"); if (!el) return;
        const alvo = el.dataset.ctx;
        if (alvo.startsWith("ic:")) { const ic = area[+alvo.slice(3)]; S.sel = "ic:" + ic.nome; ev("direito:ic:" + ic.nome); }
        else if (alvo.startsWith("arq:")) { S.exp.sel = alvo.slice(4); const { f } = achar(alvo.slice(4)); ev("direito:arq:" + (f ? nomeArq(f) : "")); }
        else if (alvo.startsWith("lix:")) ev("direito:lix:" + alvo.slice(4));
        else ev("direito:" + alvo);
        menuPara(alvo, x, y);
      });
      tela.addEventListener("click", e => { if (S.menu || S.start || S.sel) { if (!e.target.closest(".sp-menu,.sp-start")) { const tinha = S.menu || S.start || S.sel; S.menu = null; S.start = false; if (!e.target.closest(".sp-ic")) S.sel = null; if (tinha) draw(); } } });
      // arrastar: janelas (pela barra de título), ícones da área de trabalho e arquivos do Explorador
      let drag = null;
      tela.addEventListener("pointerdown", e => {
        if (e.button !== 0) return; const [x, y] = xy(e);
        const tit = e.target.closest("[data-arrasta]"); if (tit && !e.target.closest("button")) { const j = jan(tit.dataset.arrasta); if (j && !j.max) drag = { tipo: "jan", j, ox: x - j.x, oy: y - j.y, x0: x, y0: y }; return; }
        const ic = e.target.closest(".sp-ic"); if (ic) { drag = { tipo: "ic", i: +ic.dataset.ic, x0: x, y0: y }; return; }
        const tr = e.target.closest("tr[data-arq]"); if (tr && e.target.tagName !== "INPUT") drag = { tipo: "arq", id: tr.dataset.arq, x0: x, y0: y };
      });
      tela.addEventListener("pointermove", e => {
        if (!drag) return; const [x, y] = xy(e); const d = Math.hypot(x - drag.x0, y - drag.y0); if (d < 6 && !drag.ativo) return; drag.ativo = true;
        if (drag.tipo === "jan") { drag.j.x = Math.max(-200, Math.min(900, x - drag.ox)); drag.j.y = Math.max(0, Math.min(520, y - drag.oy)); const w = tela.querySelector(`[data-jan="${drag.j.id}"]`); if (w) { w.style.left = drag.j.x + "px"; w.style.top = drag.j.y + "px"; } return; }
        if (!drag.fant) { drag.fant = document.createElement("div"); drag.fant.className = "sp-fant"; drag.fant.textContent = drag.tipo === "ic" ? (tela.querySelector(`[data-ic="${drag.i}"] .e`) || {}).textContent : "📄"; tela.appendChild(drag.fant); }
        drag.fant.style.left = (x + 6) + "px"; drag.fant.style.top = (y + 6) + "px";
        tela.querySelectorAll(".drop").forEach(z => z.classList.remove("drop")); const sob = document.elementFromPoint(e.clientX, e.clientY); const dz = sob && sob.closest("[data-drop]"); if (dz) dz.classList.add("drop");
      });
      const soltar = e => {
        if (!drag) return; const dd = drag; drag = null; if (dd.fant) dd.fant.remove(); if (!dd.ativo) return;
        const [x, y] = xy(e);
        if (dd.tipo === "jan") { ev("arrastar:jan:" + dd.j.id); return; }
        const sob = document.elementFromPoint(e.clientX, e.clientY), dz = sob && sob.closest("[data-drop]");
        if (dd.tipo === "ic") { const ic = area[dd.i]; if (dz && dz.dataset.drop !== ic.nome) { area.splice(dd.i, 1); (fs[dz.dataset.drop] = fs[dz.dataset.drop] || []).push(Object.assign({}, ic)); ev("mover:ic:" + ic.nome + ">" + dz.dataset.drop); draw(); return; } ic.x = Math.max(0, Math.min(910, x - 40)); ic.y = Math.max(0, Math.min(470, y - 30)); ev("arrastar:ic:" + ic.nome); draw(); return; }
        if (dd.tipo === "arq" && dz) mover(dd.id, dz.dataset.drop); else draw();
      };
      tela.addEventListener("pointerup", soltar); tela.addEventListener("pointerleave", e => { if (drag && drag.tipo !== "jan") { if (drag.fant) drag.fant.remove(); drag = null; draw(); } });
      // rodinha do mouse na área de trabalho/janela sem rolagem: conta como "rolar"
      tela.addEventListener("wheel", e => { if (!e.target.closest(".sp-pag,.sp-arqs,textarea")) ev("rolar:tela"); }, { passive: true });
      // teclado fora do Bloco de Notas (atalhos no Explorador: Ctrl+C, Ctrl+V, Delete, F2)
      tela.addEventListener("keydown", e => {
        if (e.target.matches("input,textarea,select")) return; const ctrl = e.ctrlKey || e.metaKey;
        if (S.exp.sel && jan("exp") && !jan("exp").min) {
          if (ctrl && /^[cx]$/i.test(e.key)) { e.preventDefault(); acaoMenu((e.key.toLowerCase() === "c" ? "copiar:" : "recortar:") + S.exp.sel); ev("atalho:Ctrl+" + e.key.toUpperCase()); return; }
          if (e.key === "Delete") { e.preventDefault(); acaoMenu("excluir:" + S.exp.sel); ev("tecla:Delete"); return; }
          if (e.key === "F2") { e.preventDefault(); acaoMenu("renomear:" + S.exp.sel); ev("tecla:F2"); return; }
        }
        if (ctrl && /^v$/i.test(e.key) && jan("exp") && !jan("exp").min) { e.preventDefault(); colar(); ev("atalho:Ctrl+V"); }
      });
      // cena inicial
      (at.abertas || []).forEach(a => { const j = abrir(a); if (a === "exp") j.titulo = S.exp.pasta; });
      if (at.tituloJogo && jan("jogo")) jan("jogo").titulo = at.tituloJogo;
      draw(); desenharGuia();
      if (st.status) { falar("Você já concluiu esta atividade. Pode treinar de novo à vontade, ou tocar em ↺ Recomeçar.", "ok"); }
      else if (st.passo > 0) falar(`Vamos continuar de onde você parou: passo ${st.passo + 1}.`, "");
      ctx.esconderVerificar && ctx.esconderVerificar();
      ctx.resolver = () => { falar("Siga os passos do Bit: ele mostra o que fazer e onde clicar (💡 Mostre onde).", ""); };
    }
  };
})();
