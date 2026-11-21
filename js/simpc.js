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
  addEventListener("hashchange", () => document.body.classList.remove("sp-travado")); // saiu da página: a rolagem volta
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
.sp.sp-foco{position:fixed;inset:0;z-index:9000;background:#0b1220;padding:10px 14px;display:flex;flex-direction:column;overflow:hidden}
.sp.sp-foco .sp-guia{margin:0 0 8px;flex:none;align-items:center}.sp.sp-foco .sp-bts{flex-direction:row;flex-wrap:wrap;justify-content:flex-end;max-width:46%}
.sp.sp-foco .sp-moldura{flex:none;margin:0 auto;width:min(100%,calc((100vh - var(--sp-gh,150px) - 26px) * 1.6667))}
body.sp-travado{overflow:hidden}
.sp-prop .c{width:420px}.sp-prop .pr-abas{display:flex;gap:2px;padding:6px 10px 0;border-bottom:1px solid #ccc;font-size:12px}.sp-prop .pr-abas span{padding:4px 10px;border:1px solid transparent}.sp-prop .pr-abas .on{border-color:#ccc #ccc #fff;background:#fff;margin-bottom:-1px}
.sp-prop .pr-corpo{padding:10px 14px;font-size:12.5px;background:#fff}.sp-prop .pr-l{display:grid;grid-template-columns:120px 1fr;gap:6px;padding:3px 0}.sp-prop .pr-l b{font-weight:400;word-break:break-all}.sp-prop .pr-nome{grid-template-columns:40px 1fr;font-size:14px;align-items:center}.sp-prop .pr-nome span{font-size:26px}.sp-prop hr{border:0;border-top:1px solid #ddd;margin:6px 0}
.sp-iniciar{position:absolute;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(6,20,50,.55);cursor:pointer}
.sp-iniciar button{background:#facc15;color:#0f172a;border:0;border-radius:14px;padding:16px 26px;font-size:1.25rem;font-weight:800;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.35)}
.sp-iniciar small{display:block;font-size:.85rem;font-weight:600;margin-top:4px}
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
.sp-busca10{box-sizing:border-box;border:0;outline:0;font-family:inherit;width:250px;background:#f2f2f2!important;color:#555!important;font-size:13px!important;text-align:left;padding:0 10px!important;height:100%!important}
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
.sp-cad{flex:none;border:0;background:none;font-size:13px;cursor:pointer;padding:3px 6px;border-radius:12px;white-space:nowrap}.sp-cad.ns{color:#c5221f;font-weight:600}.sp-cadbox{position:absolute;left:120px;top:72px;z-index:5;background:#fff;border-radius:8px;box-shadow:0 4px 16px #0004;padding:12px 14px;width:280px;font-size:12.5px;color:#222}.sp-cadbox b{display:block;margin-bottom:4px;font-size:13.5px}
.sp-pag .campo{display:block;margin:6px 0 10px}.sp-pag .campo input{display:block;width:70%;margin-top:3px;padding:6px 8px;border:1px solid #bbb;border-radius:6px;font:inherit}.sp-pag [data-ev]{cursor:pointer}.sp-pag button[data-ev]{padding:7px 14px;border-radius:6px;border:1px solid #888;background:#f5f5f5;font:inherit;margin:4px 6px 4px 0}.sp-pag button[data-ev].pri{background:#1a73e8;color:#fff;border-color:#1a73e8}
.sp-mail{display:flex;height:100%;font-size:12.5px;background:#fff}.sp-mail .ls{width:42%;border-right:1px solid #ddd;overflow:auto}.sp-mail .it{padding:8px 10px;border-bottom:1px solid #eee;cursor:pointer}.sp-mail .it:hover{background:#f3f6fb}.sp-mail .it.sel{background:#dbe7fb}.sp-mail .it.nl b{font-weight:800}.sp-mail .it small{display:block;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sp-mail .ld{flex:1;overflow:auto;padding:12px 14px}.sp-mail .tb{display:flex;gap:6px;margin-bottom:8px}.sp-mail .tb button{border:1px solid #ccc;background:#f7f7f7;border-radius:5px;padding:4px 9px;font:inherit;cursor:pointer}.sp-mail .de{color:#444;margin:4px 0 10px;border-bottom:1px solid #eee;padding-bottom:8px}.sp-mail a,.sp-pag a{color:#1a0dab;text-decoration:underline;cursor:pointer}
.sp-jogo{height:100%;background:linear-gradient(#bae6fd,#dcfce7);display:flex;align-items:center;justify-content:center;font-size:56px;gap:20px}
.sp-pisca{animation:spPisca 1s infinite;z-index:950!important;position:relative}
@keyframes spPisca{0%,100%{box-shadow:0 0 0 3px #facc15,0 0 16px 6px rgba(250,204,21,.8)}50%{box-shadow:0 0 0 6px #facc15,0 0 30px 12px rgba(250,204,21,.4)}}
.sp-fant{position:absolute;z-index:990;pointer-events:none;opacity:.8;font-size:28px}
.sp-fim{position:absolute;inset:0;background:rgba(15,23,42,.6);z-index:999;display:flex;align-items:center;justify-content:center}
.sp-fim div{background:#fff;border-radius:18px;padding:22px 30px;text-align:center;font-size:20px;font-weight:700;box-shadow:0 10px 40px rgba(0,0,0,.4)}.sp-fim div span{font-size:54px;display:block}
` + ((P.winui && P.winui.css) || "");
    document.head.appendChild(st);
  }

  /* ---------- peças fixas ---------- */
  const WU = (window.PORTAL || {}).winui;
  const APPS = {
    exp: { nome: "Explorador de Arquivos", ic: "📁" }, notas: { nome: "Bloco de Notas", ic: "📝" }, calc: { nome: "Calculadora", ic: "🧮" },
    web: { nome: "Google Chrome", ic: "🌐" }, lixeira: { nome: "Lixeira", ic: "🗑️" }, jogo: { nome: "Jogo da escola", ic: "🎮" }, ver: { nome: "Fotos", ic: "🖼️" }, email: { nome: "Email", ic: "📧" }
  };
  const ICEXT = { txt: "📄", docx: "📘", pdf: "📕", jpg: "🖼️", png: "🖼️", webp: "🖼️", mp3: "🎵", mp4: "🎬", zip: "🗜️", exe: "⚙️", pptx: "📙", xlsx: "📗" };
  const TIPOEXT = { txt: "Documento de Texto", docx: "Documento do Word", pdf: "Documento PDF", jpg: "Arquivo JPG", png: "Arquivo PNG", webp: "Arquivo WEBP", mp3: "Arquivo MP3", mp4: "Arquivo MP4", zip: "Pasta compactada (zip)", exe: "Aplicativo", pptx: "Apresentação", xlsx: "Planilha" };
  const tam = f => { const k = f.kb || 0; return k >= 1024 ? (k / 1024).toFixed(1).replace(".", ",") + " MB" : Math.max(1, Math.round(k)) + " KB"; };
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
        notas: at.notas || "", notasNome: null, calc: { vis: "0", conta: "", novo: true }, web: { abas: [{ url: at.inicioWeb || "busca", hist: [] }], at: 0 }, exp: { pasta: at.inicioPasta || "Documentos", sel: null, busca: "", ren: null }, dlg: null, wu: (window.PORTAL.winui || { novoEstado: () => ({}) }).novoEstado(), busca: "", campos: Object.assign({}, at.campos || {}), cad: false, mail: { sel: null, lidos: {}, fora: {} } };
      const POS = { exp: [110, 40, 760, 440], notas: [180, 60, 620, 400], calc: [620, 40, 300, 440], web: [60, 20, 860, 500], lixeira: [200, 80, 560, 360], jogo: [240, 70, 520, 340], ver: [220, 50, 600, 420], email: [90, 30, 820, 470] };
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
        if (aOk === "email" && a === "email" && tOk.startsWith("abrir:") && t.startsWith("abrir:")) { const m = (at.emails || []).find(x => x.id === tOk.slice(6)); return errou(`Esse não é o email pedido. Procure o email <b>${esc(m ? m.assunto : tOk.slice(6))}</b> na lista da esquerda.`); }
        if (aOk === "pagina" && a === "pagina") return errou(`Hum, não é esse botão. Leia com calma o que o ${nomeBit} pediu.`);
        if (aOk === a && tOk && t && !casa(tOk, t) && !tOk.includes("*") && !["email", "campo", "marcar", "calc"].includes(a) && (tOk.split(":").length < 2 || t.split(":")[0] === tOk.split(":")[0])) return errou(`Opa! Esse é <b>${esc(nome(t))}</b>. Procure <b>${esc(nome(tOk))}</b>.`);
      }
      function checar(o, e, extra) {
        if (o.estado === "notas") { const want = o.texto, got = S.notas; return o.contem ? norm(got).includes(norm(want)) : got.replace(/\s+$/, "") === want; }
        if (o.estado === "calc") return e.startsWith("calc:=") && S.calc.vis === String(o.resultado);
        if (o.estado === "pastaTem") return (fs[o.pasta] || []).some(x => norm(x.nome + (x.ext ? "." + x.ext : "")) === norm(o.item) || norm(x.nome) === norm(o.item));
        if (o.estado === "pastaNaoTem") return !(fs[o.pasta] || []).some(x => norm(x.nome) === norm(o.item));
        if (o.estado === "janela") { const j = jan(o.id); if (!j) return o.fechada === true; return (o.min == null || j.min === o.min) && (o.max == null || j.max === o.max) && !o.fechada; }
        if (o.estado === "salvo") return S.notasNome && norm(S.notasNome) === norm(o.nome) && (o.pasta ? (fs[o.pasta] || []).some(x => norm(x.nome) === norm(o.nome)) : true);
        if (o.estado === "fechadas") return o.ids.every(id => !jan(id));
        if (o.estado === "campo") { const v = S.campos[o.nome] || ""; return o.regex ? new RegExp(o.regex, "i").test(v) : norm(v) === norm(o.valor); }
        if (o.estado === "senhaForte") { const v = S.campos[o.campo || "senha"] || ""; return v.length >= (o.min || 8) && /[a-z]/.test(v) && /[A-Z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v); }
        if (o.estado === "marcado") return !!S.campos["ck:" + o.nome] === (o.valor !== false);
        if (o.estado === "emailFora") return !!S.mail.fora[o.id] && (!o.como || e === "email:" + o.como + ":" + o.id);
        if (o.estado === "url") { const a = S.web.abas[S.web.at]; return a && norm(a.url) === norm(o.url); }
        return false;
      }
      function acertou() {
        erros = 0; tAcerto = Date.now(); const p = pAtual(); st.passo++; ctx.salvar(); falar(p.msgOk || elogio(), "ok", true);
        if (st.passo >= passos.length) { ctx.concluir("certo", at.fimMsg || `Você fez todos os ${passos.length} passos sozinho(a)! 🎉`); desenharGuia(); setTimeout(mostrarFim, 400);
          setTimeout(() => { if (SP.classList.contains("sp-foco")) foco(false); }, 3200); } // ⛶ terminou: sai da tela cheia depois do troféu
        else setTimeout(() => desenharGuia(), 50);
      }
      const ELOG = ["Isso! 👏", "Mandou bem! ⭐", "Perfeito! ✅", "Muito bem! 🎉", "Show! 💪", "Acertou! 🌟"];
      const elogio = () => ELOG[Math.floor(Math.random() * ELOG.length)];
      function errou(msg) { if (Date.now() - tAcerto < 450) return; erros++; st.erros = (st.erros || 0) + 1; ctx.salvar(); falar(msg + (erros >= 2 ? ` <br><small>Toque em <b>💡 Mostre onde</b> que eu aponto para você.</small>` : ""), "erro"); if (erros >= 3) mostrarOnde(); }
      /* ---------- desenho ---------- */
      c.innerHTML = `<div class="sp"><div class="sp-guia"><div class="sp-bit" aria-hidden="true">🤖</div><div class="sp-fala"><div class="q"></div><div class="f"></div><div class="r" aria-live="polite"></div><div class="sp-prog"></div></div>
        <div class="sp-bts"><button type="button" class="onde">💡 Mostre onde</button><button type="button" class="sec rec">↺ Recomeçar</button><button type="button" class="sec foco">⛶ Tela cheia</button></div></div>
        <div class="sp-moldura sp${st.so}"><div class="sp-tela" tabindex="0"></div>${st.status ? "" : `<div class="sp-iniciar"><button type="button">▶ Começar o simulador<small>${!st.demoVisto && at.demo !== false ? "🎬 primeiro um vídeo curtinho · ✋ depois é a sua vez" : "só funciona em tela cheia"}</small></button></div>`}</div></div>`;
      const G = c.querySelector(".sp-guia"), bit = G.querySelector(".sp-bit"), q = G.querySelector(".q"), fEl = G.querySelector(".f"), rEl = G.querySelector(".r"), prog = G.querySelector(".sp-prog");
      const mold = c.querySelector(".sp-moldura"), tela = c.querySelector(".sp-tela");
      /* ⛶ modo tela cheia (19/11/2026, pedido do professor): enquanto o aluno faz o simulador, ele ocupa a tela inteira,
         com a letra maior e sem rolar a página; ao terminar todos os passos, volta sozinho ao tamanho normal */
      const SP = c.querySelector(".sp"), bFoco = G.querySelector(".foco");
      const ajustarGuia = () => { if (SP.classList.contains("sp-foco")) SP.style.setProperty("--sp-gh", G.offsetHeight + "px"); };
      function foco(on) {
        c.__spFoco = !!on; SP.classList.toggle("sp-foco", !!on); document.body.classList.toggle("sp-travado", !!on);
        bFoco.textContent = on ? "✕ Sair da tela cheia" : st.status ? "⛶ Tela cheia" : "⛶ Abrir em tela cheia";
        const ini = c.querySelector(".sp-iniciar"); if (on && ini) ini.remove();
        // obrigatório (19/11/2026): fora da tela cheia, o simulador não funciona enquanto não terminar; a capa volta por cima
        if (!on && !st.status && !c.querySelector(".sp-iniciar")) {
          mold.insertAdjacentHTML("beforeend", `<div class="sp-iniciar"><button type="button">▶ Continuar o simulador<small>só funciona em tela cheia</small></button></div>`);
          c.querySelector(".sp-iniciar").onclick = e => { e.stopPropagation(); comecar(); };
        }
        ajustarGuia(); requestAnimationFrame(() => { K = esc2(); ajustarGuia(); K = esc2(); });
        if (!on) setTimeout(() => c.scrollIntoView({ block: "center", behavior: "smooth" }), 60); else tela.focus();
      }
      bFoco.onclick = () => foco(!SP.classList.contains("sp-foco"));
      /* 🎬 DEMONSTRAÇÃO GUIADA (20/11/2026, pedido do professor): na 1ª vez que o aluno vai fazer este simulador, ele ASSISTE
         antes, obrigatoriamente, o Bit fazendo tudo num computador igual, com o mousezinho andando e clicando, passo a passo.
         Depois de ver uma vez, não precisa ver de novo (fica salvo no progresso); o botão "🎬 Rever como faz" fica sempre ali. */
      const comecar = () => { if (!st.status && !st.demoVisto && !ctx.demo && at.demo !== false && !P.__profSim) return T.sim_pc.demo(at, st.so, { obrigatorio: true, aoFim: () => { st.demoVisto = 1; ctx.salvar(); foco(true); } }); foco(true); };
      { const ini = c.querySelector(".sp-iniciar"); if (ini) ini.onclick = e => { e.stopPropagation(); comecar(); }; }
      if (!ctx.demo && at.demo !== false) { const bR = document.createElement("button"); bR.type = "button"; bR.className = "sec rever"; bR.textContent = "🎬 Rever como faz";
        bR.onclick = () => T.sim_pc.demo(at, st.so, { aoFim: () => { if (!st.status) foco(true); } }); G.querySelector(".sp-bts").insertBefore(bR, G.querySelector(".rec")); }
      if (ctx.demo) ctx.demo.forcar = () => { if (pAtual()) acertou(); };
      addEventListener("resize", ajustarGuia);
      G.querySelector(".onde").onclick = () => { st.dicas = (st.dicas || 0); mostrarOnde(true); };
      G.querySelector(".rec").onclick = async () => { if (!await P.confirmar("Recomeçar do primeiro passo?", "Sim, recomeçar")) return; st.passo = 0; st.erros = 0; delete st.status; ctx.salvar(); ctx.reRender(); };
      function falar(html, tipo, anima) { rEl.className = "r " + (tipo || ""); rEl.innerHTML = html; bit.className = "sp-bit " + (tipo === "ok" ? "feliz" : tipo === "erro" ? "triste" : ""); void bit.offsetWidth; bit.textContent = tipo === "erro" ? "🤔" : tipo === "ok" ? "😄" : "🤖"; }
      function desenharGuia() {
        const p = pAtual();
        prog.innerHTML = passos.map((_, i) => `<i class="${i < st.passo ? "ok" : i === st.passo ? "at" : ""}"></i>`).join("");
        if (!p) { q.textContent = `${nomeBit} · tudo pronto`; fEl.innerHTML = "Você terminou! 🎉"; G.querySelector(".onde").hidden = true; return; }
        q.textContent = `${nomeBit}, o seu ajudante · passo ${st.passo + 1} de ${passos.length}`; fEl.innerHTML = P.gesto ? P.gesto.comInstrucao(p.faca, gestoDoPasso(p, passos[st.passo + 1])) : p.faca; G.querySelector(".onde").hidden = false;
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
      if (c.__spFoco && !st.status) setTimeout(() => foco(true), 0); // ↺ Recomeçar: continua em tela cheia
      const xy = e => { const r = tela.getBoundingClientRect(); return [(e.clientX - r.left) / K, (e.clientY - r.top) / K]; };

      const nomeArq = f => f.tipo === "pasta" ? f.nome : f.nome + (S.ext && f.ext ? "." + f.ext : "");
      const icArq = f => f.tipo === "pasta" ? "📁" : ICEXT[f.ext] || "📄";
      function corpoApp(j) {
        if (j.app === "exp") return corpoExp();
        if (j.app === "notas") return `<div class="sp-notas"><div class="menu"><span data-a="notasArq">Arquivo</span><span>Editar</span><span>Exibir</span></div><textarea spellcheck="false" data-k="notas:texto" aria-label="Texto do Bloco de Notas">${esc(S.notas)}</textarea><div class="rod"><span>${S.notas.length} caracteres</span><span>UTF-8</span></div></div>`;
        if (j.app === "calc") { const C = S.calc; return `<div class="sp-calc"><div class="vis"><small>${esc(C.conta)}</small><b>${esc(C.vis)}</b></div><div class="tec">${["C", "⌫", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "±", "0", ",", "="].map(b => `<button type="button" class="${/[÷×−+]/.test(b) ? "op" : b === "=" ? "ig" : ""}" data-a="calc:${b}" data-k="calc:${b}">${b}</button>`).join("")}</div></div>`; }
        if (j.app === "web") return corpoWeb();
        if (j.app === "lixeira") return `<div class="sp-lix">${S.lix.length ? `<div class="sp-arqs"><table><thead><tr><th>Nome</th><th>Local original</th></tr></thead><tbody>${S.lix.map((f, i) => `<tr class="f" data-ctx="lix:${esc(f.nome)}" data-k="lix:${esc(f.nome)}"><td>${icArq(f)} ${esc(nomeArq(f))}</td><td>${esc(f.de)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="sp-vazio">A Lixeira está vazia.</p>`}</div>`;
        if (j.app === "email") { const M = S.mail, L = (at.emails || []).filter(m => !M.fora[m.id]); const m = L.find(x => x.id === M.sel); return `<div class="sp-mail"><div class="ls">${L.length ? L.map(x => `<div class="it ${x.id === M.sel ? "sel" : ""} ${M.lidos[x.id] ? "" : "nl"}" data-a="mailAbrir:${esc(x.id)}" data-k="email:${esc(x.id)}"><b>${esc(x.nome || x.de)}</b><small>${esc(x.assunto)}</small></div>`).join("") : `<p class="sp-vazio">Caixa de entrada vazia. 🎉</p>`}</div><div class="ld">${m ? `<div class="tb"><button type="button" data-a="mailDenunciar:${esc(m.id)}" data-k="email:denunciar">🚩 Denunciar golpe</button><button type="button" data-a="mailExcluir:${esc(m.id)}" data-k="email:excluir">🗑️ Excluir</button></div><h3 style="margin:2px 0">${esc(m.assunto)}</h3><div class="de">De: <b>${esc(m.nome || "")}</b> &lt;<span data-k="email:remetente">${esc(m.de)}</span>&gt;</div>${m.html || ""}` : `<p class="sp-vazio">Selecione um email para ler.</p>`}</div></div>`; }
        if (j.app === "jogo") return `<div class="sp-jogo">⭐ 🎮 ⚽</div>`;
        if (j.app === "ver") { const f = S.verArq || {}; const e = f.ext || ""; if (e === "zip") return `<div class="sp-ver doc"><div class="pg"><b>🗜️ Dentro de ${esc(f.nome)}.zip</b>\n\n${(f.tem || []).map(x => (x.tipo === "pasta" ? "📁 " : (ICEXT[x.ext] || "📄") + " ") + esc(nomeArq(x))).join("\n")}\n\n<small>Para usar os arquivos, clique com o botão direito no .zip › Extrair Tudo...</small></div></div>`; if (/^(docx|pdf|pptx|xlsx)$/.test(e)) return `<div class="sp-ver doc"><div class="pg"><b>${esc(f.nome)}</b>\n\n${esc(f.texto || "Texto do trabalho…")}</div></div>`; if (/^(mp3|mp4)$/.test(e)) return `<div class="sp-ver"><span class="g">${e === "mp3" ? "🎵" : "🎬"}</span>${esc(f.nome)}<div class="pl"><span>⏮️</span><span>▶️</span><span>⏭️</span></div></div>`; return `<div class="sp-ver"><span class="g">${esc(f.figura || ICEXT[e] || "📄")}</span>${esc(nomeArq(f))}</div>`; }
        return "";
      }
      function corpoExp() {
        const E = S.exp, todas = Object.keys(fs), lista = E.busca ? todas.flatMap(p => fs[p].filter(f => norm(nomeArq(f)).includes(norm(E.busca))).map(f => Object.assign({ _p: p }, f))) : (fs[E.pasta] || []);
        const temKb = lista.some(f => f.kb);
        return `<div class="sp-exp"><div class="sp-exbar"><button type="button" data-a="expVoltar" title="Voltar">←</button><button type="button" data-a="expAcima" title="Acima">↑</button><span class="end">📁 Este Computador › ${esc(E.busca ? "Resultados da pesquisa" : E.pasta)}</span><input type="search" placeholder="🔍 Pesquisar" value="${esc(E.busca)}" data-k="exp:busca" aria-label="Pesquisar"><button type="button" data-a="expExt" title="Exibir › Extensões de nomes de arquivos" data-k="exp:ext">${S.ext ? "☑" : "☐"} Extensões</button></div>
          <div class="sp-exc"><div class="sp-nav">${[...BASEPASTAS, ...todas.filter(p => !BASEPASTAS.includes(p))].map(p => `<div class="${p === E.pasta && !E.busca ? "sel" : ""}" data-a="expIr:${esc(p)}" data-drop="${esc(p)}" data-k="nav:${esc(p)}">${PICP[p] || "📁"} ${esc(p)}</div>`).join("")}</div>
          <div class="sp-arqs" data-ctx="fundoexp">${lista.length ? `<table><thead><tr><th>Nome</th><th>Tipo</th>${temKb ? "<th style=\"text-align:right\">Tamanho</th>" : ""}${E.busca ? "<th>Pasta</th>" : ""}</tr></thead><tbody>${lista.map(f => {
            const id = (f._p || E.pasta) + "|" + f.nome + "|" + (f.ext || "");
            const ren = E.ren === id;
            return `<tr class="f ${E.sel === id ? "sel" : ""}" data-arq="${esc(id)}" data-ctx="arq:${esc(id)}" ${f.tipo === "pasta" ? `data-drop="${esc(f.nome)}"` : ""} data-k="arq:${esc(nomeArq(f))}" draggable="false"><td>${icArq(f)} ${ren ? `<input value="${esc(f.nome)}" data-ren="${esc(id)}" aria-label="Novo nome">` : esc(nomeArq(f))}</td><td>${f.tipo === "pasta" ? "Pasta de arquivos" : TIPOEXT[f.ext] || "Arquivo"}</td>${temKb ? `<td style="text-align:right">${f.tipo === "pasta" ? "" : tam(f)}</td>` : ""}${E.busca ? `<td>${esc(f._p)}</td>` : ""}</tr>`;
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
        return `<div class="sp-chr"><div class="sp-abas">${W.abas.map((x, i) => `<div class="sp-aba ${i === W.at ? "at" : ""}" data-a="aba:${i}" data-k="aba:${i}"><span class="t">${esc((PAGINAS[x.url] || {}).titulo || x.url)}</span><span class="x" data-a="fecharAba:${i}" data-k="aba:x:${i}" title="Fechar guia">✕</span></div>`).join("")}<button type="button" class="nova" data-a="novaAba" data-k="web:novaaba" title="Nova guia">+</button></div>
          <div class="sp-url"><button type="button" data-a="webVoltar" data-k="web:voltar" title="Voltar">←</button><button type="button" title="Avançar">→</button><button type="button" data-a="webRecarregar" title="Recarregar">⟳</button>${pg && !pg.busca ? (pg.seguro === false ? `<button type="button" class="sp-cad ns" data-a="cadeado" data-k="web:cadeado" title="Informações do site">⚠️ Não seguro</button>` : `<button type="button" class="sp-cad" data-a="cadeado" data-k="web:cadeado" title="Informações do site">🔒</button>`) : ""}<input value="${esc(a.url === "busca" ? "" : a.url)}" placeholder="Pesquise no Buscador ou digite um endereço" data-k="web:url" aria-label="Barra de endereço"></div>
          ${S.cad && pg && !pg.busca ? `<div class="sp-cadbox">${pg.seguro === false ? `<b style="color:#c5221f">⚠️ Sua conexão com este site não é segura</b>Não digite senhas nem dados pessoais aqui: alguém pode ver ou roubar o que você enviar.` : `<b>🔒 A conexão é segura</b>O que você envia fica protegido no caminho (https). Atenção: cadeado não garante que o site é honesto; confira também o endereço.`}</div>` : ""}
          <div class="sp-pag" data-rolar="${esc(a.url)}">${h}</div></div>`;
      }
      function draw() {
        const ordem = [...S.jan].sort((a, b) => a.z - b.z);
        tela.innerHTML = `<div class="sp-icons" data-ctx="area">${area.map((ic, i) => `<div class="sp-ic ${S.sel === "ic:" + ic.nome ? "sel" : ""}" style="left:${ic.x}px;top:${ic.y}px" data-ic="${i}" data-ctx="ic:${i}" data-k="ic:${esc(ic.nome)}" ${ic.tipo === "pasta" ? `data-drop="${esc(ic.nome)}"` : ""}><span class="e">${ic.ic || (ic.tipo === "pasta" ? "📁" : ic.app ? APPS[ic.app].ic : icArq(ic))}</span>${esc(ic.nome)}</div>`).join("")}</div>
          ${ordem.filter(j => !j.min).map(j => `<div class="sp-jan ${j.max ? "max" : ""}" data-jan="${j.id}" style="${j.max ? "left:0;top:0;width:1000px;height:" + (w11() ? 556 : 560) + "px" : `left:${j.x}px;top:${j.y}px;width:${j.w}px;height:${j.h}px`};z-index:${10 + j.z}">
            <div class="sp-tit" data-arrasta="${j.id}"><span>${APPS[j.app] ? APPS[j.app].ic : ""}</span><span class="t">${esc(j.titulo)}</span><button type="button" data-a="min:${j.id}" data-k="jan:${j.id}:min" title="Minimizar">—</button><button type="button" data-a="max:${j.id}" data-k="jan:${j.id}:max" title="${j.max ? "Restaurar" : "Maximizar"}">${j.max ? "❐" : "☐"}</button><button type="button" class="x" data-a="fechar:${j.id}" data-k="jan:${j.id}:fechar" title="Fechar">✕</button></div>
            <div class="sp-corpo">${corpoApp(j)}</div></div>`).join("")}
          <div class="sp-bar">${w11() && WU ? WU.widget11() : ""}${w11() ? "" : `<button type="button" data-a="iniciar" data-k="bar:iniciar" title="Iniciar" class="sp-ini">${WU ? WU.logo("10") : "⊞"}</button><input class="sp-busca10" data-k="bar:busca" placeholder="Digite aqui para pesquisar" value="${esc(S.busca || "")}" aria-label="Pesquisar"><button type="button" title="Visão de Tarefas" class="wu-tv">⧉</button>`}
            ${w11() ? `<button type="button" data-a="iniciar" data-k="bar:iniciar" title="Iniciar" class="sp-ini">${WU ? WU.logo("11") : "⊞"}</button><button type="button" data-a="iniciar" title="Pesquisar">🔍</button><button type="button" title="Visão de Tarefas" class="wu-tv">⧉</button>` : ""}
            ${["exp", "web", ...S.jan.map(j => j.app).filter(a => !["exp", "web"].includes(a))].map(a => { const j = jan(a); return `<button type="button" class="${j ? "ab" : ""} ${j && !j.min && j.z === S.z ? "fr" : ""}" data-a="barra:${a}" data-k="bar:${a}" title="${APPS[a].nome}">${APPS[a].ic}</button>`; }).join("")}
            ${WU ? WU.bandeja(w11() ? "11" : "10", "10:30", "15/03/2027") : `<div class="sp-rel">10:30<br>15/03/2027</div>`}</div>
          ${S.start && WU ? WU.iniciar(w11() ? "11" : "10", { estado: S.wu, busca: S.busca, buscaId: w11() ? "sp-busca11" : null, attr: id => { const a = { exp: "exp", notas: "notas", calc: "calc", chrome: "web", email: "email" }[id]; return a ? `data-a="abrirApp:${a}" data-k="start:${a}"` : ""; } }) : ""}
          ${S.menu ? `<div class="sp-menu" style="left:${S.menu.x}px;top:${S.menu.y}px">${S.menu.itens.map(m => m === "-" ? "<hr>" : `<div class="${m.off ? "off" : ""}" data-m="${esc(m.id || "")}" data-k="menu:${esc(m.t)}"><span class="i">${m.i || ""}</span>${esc(m.t)}${m.s ? `<span class="s">${m.s}</span>` : ""}</div>`).join("")}</div>` : ""}
          ${S.prop ? propHtml() : ""}
          ${S.dlg ? `<div class="sp-dlg"><div class="c"><div class="tt">💾 Salvar como</div><div class="cc"><span>Pasta:</span><select data-k="dlg:pasta">${Object.keys(fs).map(p => `<option ${p === S.dlg.pasta ? "selected" : ""}>${esc(p)}</option>`).join("")}</select><span>Nome:</span><input value="${esc(S.dlg.nome)}" data-k="dlg:nome" aria-label="Nome do arquivo"><span>Tipo:</span><span>Documentos de texto (*.txt)</span></div><div class="bb"><button type="button" class="sp-bt pri" data-a="dlgSalvar" data-k="dlg:salvar">Salvar</button><button type="button" class="sp-bt" data-a="dlgCancelar">Cancelar</button></div></div></div>` : ""}`;
        if (S.fim) { const d = document.createElement("div"); d.className = "sp-fim"; d.innerHTML = `<div><span>🏆</span>Missão no computador cumprida!<br><small style="font-weight:500;font-size:14px">${nomeBit} está orgulhoso(a) de você. Toque para continuar treinando.</small></div>`; tela.appendChild(d); d.onclick = e => { e.stopPropagation(); S.fim = false; draw(); }; }
        ligar();
      }
      /* ---------- 🔧 janela Propriedades (metadados do arquivo) ---------- */
      const TIPOS = { txt: "Documento de Texto (.txt)", jpg: "Arquivo JPG (.jpg)", jpeg: "Arquivo JPEG (.jpeg)", png: "Arquivo PNG (.png)", webp: "Arquivo WEBP (.webp)", mp3: "Arquivo MP3 (.mp3)", mp4: "Arquivo MP4 (.mp4)", docx: "Documento do Microsoft Word (.docx)", pdf: "Documento PDF (.pdf)", zip: "Pasta compactada (zipada) (.zip)", xlsx: "Planilha do Microsoft Excel (.xlsx)", pptx: "Apresentação do Microsoft PowerPoint (.pptx)" };
      const ABRE = { txt: "Bloco de Notas", jpg: "Fotos", jpeg: "Fotos", png: "Fotos", webp: "Fotos", mp3: "Media Player", mp4: "Media Player", docx: "Word", pdf: "Microsoft Edge", zip: "Explorador de Arquivos" };
      const RAIZ = { "Documentos": "Documents", "Downloads": "Downloads", "Área de Trabalho": "Desktop", "Imagens": "Pictures", "Músicas": "Music", "Vídeos": "Videos" };
      function caminho(p) { const partes = []; let atual = p, n = 0;
        while (atual && !RAIZ[atual] && n++ < 8) { partes.unshift(atual); atual = Object.keys(fs).find(k => (fs[k] || []).some(x => x.tipo === "pasta" && x.nome === atual)); }
        return "C:\\Users\\Aluno\\" + [RAIZ[atual] || atual || "Documents", ...partes].join("\\"); }
      function tamanho(f) { const b = f.tipo === "pasta" ? 0 : f.texto != null ? new TextEncoder().encode(f.texto).length : Math.round((f.kb || 40) * 1024);
        const fm = n => n.toLocaleString("pt-BR"); return b < 1024 ? `${fm(b)} bytes (${fm(b)} bytes)` : `${(b / 1024).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} KB (${fm(b)} bytes)`; }
      function propHtml() { const { p, f } = S.prop, e = f.ext || "", nome = nomeArq(f);
        const lin = (r, v) => `<div class="pr-l"><span>${r}</span><b>${esc(v)}</b></div>`;
        return `<div class="sp-dlg sp-prop"><div class="c"><div class="tt">🔧 Propriedades de ${esc(nome)}</div><div class="pr-abas"><span class="on">Geral</span><span>Segurança</span><span>Detalhes</span></div>
          <div class="pr-corpo"><div class="pr-l pr-nome"><span>${f.tipo === "pasta" ? "📁" : (ICEXT[e] || "📄")}</span><b>${esc(nome)}</b></div><hr>
          ${lin("Tipo de arquivo:", f.tipo === "pasta" ? "Pasta de arquivos" : (TIPOS[e] || ("Arquivo " + e.toUpperCase())))}${f.tipo === "pasta" ? "" : lin("Abre com:", ABRE[e] || "—")}<hr>
          ${lin("Local:", caminho(p))}${lin("Tamanho:", tamanho(f))}<hr>
          ${lin("Criado em:", "segunda-feira, 15 de março de 2027, 10:30:12")}${lin("Modificado em:", "segunda-feira, 15 de março de 2027, 10:30:12")}</div>
          <div class="bb"><button type="button" class="sp-bt pri" data-a="propOk">OK</button><button type="button" class="sp-bt" data-a="propOk">Cancelar</button></div></div></div>`; }

      /* ---------- menus do botão direito (textos iguais aos do Windows) ---------- */
      function menuPara(alvo, x, y) {
        let itens = [];
        if (alvo === "area") itens = [{ t: "Exibir", s: "›" }, { t: "Classificar por", s: "›" }, { t: "Atualizar", id: "atualizar" }, "-", { t: "Novo › Pasta", i: "📁", id: "novaPastaArea" }, { t: "Novo › Documento de Texto", i: "📄", id: "novoTxtArea" }, "-", { t: "Personalizar", i: "🎨", id: "personalizar" }];
        else if (alvo.startsWith("ic:")) { const ic = area[+alvo.slice(3)]; itens = [{ t: "Abrir", id: "abrirIc:" + alvo.slice(3), i: "📂" }, "-", { t: "Recortar", s: "Ctrl+X", id: "x" }, { t: "Copiar", s: "Ctrl+C", id: "c" }, "-", { t: "Criar atalho", off: true }, { t: "Excluir", i: "🗑️", id: "exclIc:" + alvo.slice(3), off: ic.app === "lixeira" }, { t: "Renomear", id: "renIc:" + alvo.slice(3), off: !!ic.app }, "-", { t: "Propriedades", id: "prop" }]; }
        else if (alvo === "fundoexp") itens = [{ t: "Exibir", s: "›" }, { t: "Classificar por", s: "›" }, "-", { t: "Colar", s: "Ctrl+V", id: "colar", off: !S.clip }, "-", { t: "Novo › Pasta", i: "📁", id: "novaPasta" }, { t: "Novo › Documento de Texto", i: "📄", id: "novoTxt" }, "-", { t: "Propriedades", id: "prop" }];
        else if (alvo.startsWith("arq:")) { const id = alvo.slice(4); itens = [{ t: "Abrir", id: "abrirArq:" + id, i: "📂" }, "-", { t: "Recortar", s: "Ctrl+X", id: "recortar:" + id }, { t: "Copiar", s: "Ctrl+C", id: "copiar:" + id }, "-", { t: "Excluir", i: "🗑️", id: "excluir:" + id }, { t: "Renomear", id: "renomear:" + id }, "-", /\|zip$/.test(id) ? { t: "Extrair Tudo...", i: "📤", id: "extrair:" + id } : (w11() ? { t: "Compactar para arquivo ZIP", i: "🗜️", id: "zipar:" + id } : { t: "Enviar para › Pasta compactada", i: "🗜️", id: "zipar:" + id }), "-", { t: "Propriedades", i: "🔧", id: "prop:" + id }]; }
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
        if (k === "zipar") { const { p, f } = achar(a); if (!f) return; const tem = f.tipo === "pasta" ? (fs[f.nome] || []).map(x => Object.assign({}, x)) : [Object.assign({}, f)]; const kb = tem.reduce((t, x) => t + (x.kb || 40), 0) * (at.taxaZip || 0.45); let n = f.nome; while (fs[p].some(x => x.nome === n && x.ext === "zip")) n += " (2)"; fs[p].push({ nome: n, ext: "zip", tem, kb: Math.max(1, Math.round(kb)) }); ev("compactar:arq:" + nomeArq(f)); draw(); return; }
        if (k === "extrair") { const { p, f } = achar(a); if (!f) return; let n = f.nome; while (fs[p].some(x => x.nome === n && x.tipo === "pasta")) n += " (2)"; fs[p].push({ nome: n, tipo: "pasta" }); fs[n] = (f.tem || []).map(x => Object.assign({}, x)); ev("extrair:arq:" + nomeArq(f)); draw(); return; }
        if (k === "exclIc") { const ic = area[+a]; area.splice(+a, 1); S.lix.push(Object.assign({ de: "Área de Trabalho" }, ic)); ev("excluir:ic:" + ic.nome); draw(); return; }
        if (k === "personalizar") { ev("menu:Personalizar"); draw(); return; }
        // 🔧 Propriedades do arquivo (20/11/2026): janela igual à do Windows, com os metadados (tipo, local, tamanho, data)
        if (k === "prop" && a) { const { p, f } = achar(a); if (!f) return; S.prop = { p, f }; ev("prop:arq:" + nomeArq(f)); draw(); return; }
        ev("menu:" + (m || "")); draw();
      }
      function colar() { if (!S.clip) return; const { p, i, f } = achar(S.clip.id); if (!f) return; const dest = S.exp.pasta; const novo = Object.assign({}, f); if (S.clip.modo === "recortar") { fs[p].splice(i, 1); S.clip = null; } else if (dest === p) novo.nome = f.nome + " - Cópia"; fs[dest].push(novo); ev("colar:arq:" + nomeArq(novo) + ">" + dest); draw(); }
      function mover(id, dest) { const { p, i, f } = achar(id); if (!f || dest === p || dest === f.nome) return; fs[p].splice(i, 1); (fs[dest] = fs[dest] || []).push(f); ev("mover:arq:" + nomeArq(f) + ">" + dest); draw(); }
      function focarRen() { const inp = tela.querySelector("[data-ren]"); if (!inp) return; inp.focus(); inp.select(); const fim2 = ok => { const id = inp.dataset.ren, { p, f } = achar(id); S.exp.ren = null; if (f && ok) { const v = inp.value.trim(); if (v && v !== f.nome) { const velho = f.nome; f.nome = v; if (f.tipo === "pasta") { fs[v] = fs[velho] || []; delete fs[velho]; } ev("renomear:" + (f.tipo === "pasta" ? "pasta" : "arq") + ":" + velho + ">" + v); } } draw(); };
        inp.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") fim2(true); if (e.key === "Escape") fim2(false); }; inp.onblur = () => fim2(true); }
      function abrirIcone(i) { const ic = area[i]; if (!ic) return; ev("duplo:ic:" + ic.nome); if (ic.app) { abrir(ic.app); } else if (ic.tipo === "pasta") { S.exp.pasta = ic.nome; S.exp.busca = ""; abrir("exp", ic.nome); jan("exp").titulo = ic.nome; } else { abrirArqObj(ic); } draw(); }
      function abrirArq(id) { const { p, f } = achar(id); if (!f) return; if (f.tipo === "pasta") { S.exp.pasta = f.nome; S.exp.busca = ""; jan("exp") && (jan("exp").titulo = f.nome); ev("abrir:pasta:" + f.nome); draw(); return; } abrirArqObj(f); }
      function abrirArqObj(f) { ev("abrir:arq:" + nomeArq(f)); if (f.ext === "txt") { S.notas = f.texto || ""; S.notasNome = f.nome; abrir("notas", f.nome + " - Bloco de Notas"); } else if (f.ext === "zip") { S.verArq = f; const j = abrir("ver", f.nome + ".zip"); j.titulo = f.nome + ".zip - Pasta compactada"; } else { const prog = { jpg: "Fotos", png: "Fotos", webp: "Fotos", pdf: "Leitor de PDF", docx: "Word", pptx: "PowerPoint", xlsx: "Excel", mp3: "Media Player", mp4: "Media Player" }[f.ext]; if (prog) { S.verArq = f; const j = abrir("ver", f.nome + " - " + prog); j.titulo = f.nome + " - " + prog; } } draw(); }
      /* ---------- eventos ---------- */
      function ligar() {
        tela.querySelectorAll("[data-a]:not(form)").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); acao(b.dataset.a, e); }));
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
        tela.querySelectorAll("[data-link]").forEach(l => l.onclick = e => { e.stopPropagation(); e.preventDefault(); if (!jan("web") || l.closest(".sp-mail")) { const j = abrir("web"); j.z = ++S.z; } ev("link:" + l.dataset.link); ir(l.dataset.link); });
        tela.querySelectorAll(".sp-pag [data-ev], .sp-mail [data-ev]").forEach(b => { if (b.type === "checkbox") { b.checked = !!S.campos["ck:" + b.dataset.ev]; b.onchange = e => { e.stopPropagation(); S.campos["ck:" + b.dataset.ev] = b.checked; ev("marcar:" + b.dataset.ev + ":" + (b.checked ? "sim" : "nao")); }; b.onclick = e => e.stopPropagation(); } else b.onclick = e => { e.stopPropagation(); e.preventDefault(); ev("pagina:" + b.dataset.ev); if (b.dataset.ir) ir(b.dataset.ir); }; });
        if (WU) WU.ligar(tela, S.wu, draw);
        { const bx = tela.querySelector("#sp-busca11") || tela.querySelector(".sp-busca10"); if (bx) { if (S.start && S.busca) { bx.focus(); bx.setSelectionRange(bx.value.length, bx.value.length); }
          bx.onclick = e => { e.stopPropagation(); if (!S.start && bx.classList.contains("sp-busca10")) { S.start = true; draw(); const n = tela.querySelector(".sp-busca10"); if (n) n.focus(); } };
          bx.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") { const r = tela.querySelector(".wu-start .res [data-a]"); if (r) r.click(); } };
          bx.oninput = () => { S.busca = bx.value; S.start = true; ev("buscarIniciar:" + bx.value); draw(); }; } }
        tela.querySelectorAll(".sp-pag [data-campo]").forEach(i => { const n = i.dataset.campo; if (S.campos[n] != null) i.value = S.campos[n]; i.oninput = () => { S.campos[n] = i.value; clearTimeout(i._t); i._t = setTimeout(() => ev("campo:" + n + ":" + i.value), 250); }; i.onkeydown = e => e.stopPropagation(); });
        const pg = tela.querySelector(".sp-pag"); if (pg) pg.onwheel = () => { if (pg.scrollHeight <= pg.clientHeight + 8 && !pg.dataset.fim) { pg.dataset.fim = 1; ev("rolar:fim:" + pg.dataset.rolar); } }; /* página curta (tela grande): a rodinha já conta como "cheguei ao fim" */
        if (pg) pg.onscroll = () => { if (pg.scrollTop + pg.clientHeight >= pg.scrollHeight - 8 && !pg.dataset.fim) { pg.dataset.fim = 1; ev("rolar:fim:" + pg.dataset.rolar); } else if (pg.scrollTop > 30) ev("rolar:" + pg.dataset.rolar); };
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
        else if (k === "iniciar") { S.start = !S.start; S.menu = null; S.busca = ""; if (S.wu) { S.wu.todos = false; S.wu.energia = false; } ev("clique:bar:iniciar"); }
        else if (k === "abrirApp") { abrir(v); }
        else if (k === "calc") { calcTecla(v); return; }
        else if (k === "expIr") { S.exp.pasta = v; S.exp.busca = ""; S.exp.sel = null; jan("exp").titulo = v; ev("abrir:pasta:" + v); }
        else if (k === "expVoltar" || k === "expAcima") { S.exp.pasta = "Documentos"; S.exp.busca = ""; jan("exp").titulo = "Documentos"; ev("voltar:exp"); }
        else if (k === "expExt") { S.ext = !S.ext; ev("extensoes:" + (S.ext ? "sim" : "nao")); }
        else if (k === "notasArq") { S.dlg = { pasta: "Documentos", nome: S.notasNome || "Sem título" }; ev("menu:Salvar como"); }
        else if (k === "dlgSalvar") { const nm = (S.dlg.nome || "").trim().replace(/\.txt$/i, ""); if (!nm) return; const l = fs[S.dlg.pasta]; const ex = l.find(f => f.nome === nm && f.ext === "txt"); if (ex) ex.texto = S.notas; else l.push({ nome: nm, ext: "txt", texto: S.notas }); S.notasNome = nm; const j = jan("notas"); if (j) j.titulo = nm + " - Bloco de Notas"; const pd = S.dlg.pasta; S.dlg = null; ev("salvar:" + nm + ">" + pd); }
        else if (k === "dlgCancelar") { S.dlg = null; }
        else if (k === "propOk") { S.prop = null; ev("fechar:propriedades"); }
        else if (k === "aba") { S.web.at = +v; ev("aba:" + v); }
        else if (k === "fecharAba") { S.web.abas.splice(+v, 1); if (!S.web.abas.length) { S.jan = S.jan.filter(j => j.id !== "web"); S.web.abas = [{ url: "busca", hist: [] }]; } S.web.at = Math.min(S.web.at, S.web.abas.length - 1); ev("fecharAba"); }
        else if (k === "novaAba") { S.web.abas.push({ url: "busca", hist: [] }); S.web.at = S.web.abas.length - 1; ev("novaAba"); }
        else if (k === "webVoltar") { const ab = S.web.abas[S.web.at]; if (ab.hist.length) { ab.url = ab.hist.pop(); ab.termo = ab.url === "busca" ? ab.termo : ab.termo; } ev("voltar:web"); }
        else if (k === "webRecarregar") { ev("recarregar"); }
        else if (k === "cadeado") { S.cad = !S.cad; ev("cadeado:" + S.web.abas[S.web.at].url); }
        else if (k === "mailAbrir") { S.mail.sel = v; S.mail.lidos[v] = 1; ev("email:abrir:" + v); }
        else if (k === "mailDenunciar" || k === "mailExcluir") { S.mail.fora[v] = 1; S.mail.sel = null; ev("email:" + (k === "mailDenunciar" ? "denunciar" : "excluir") + ":" + v); }
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
      tela.addEventListener("click", e => { if (S.menu || S.start || S.sel) { if (!e.target.closest(".sp-menu,.sp-start,.wu-start,.sp-busca10")) { const tinha = S.menu || S.start; S.menu = null; S.start = false; if (!e.target.closest(".sp-ic")) { S.sel = null; tela.querySelectorAll(".sp-ic.sel").forEach(x => x.classList.remove("sel")); } if (tinha) draw(); } } }); /* só redesenha se fechou menu: redesenhar tiraria o foco da caixa de texto clicada */
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
      // 👆 parado (20/11/2026): 12 s → mãozinha onde clicar; 25 s → balão apontando o pedido do Bit
      if (P.vigiaParado && !ctx.demo) P.vigiaParado(c, { ativo: () => !st.status && !!pAtual() && (c.__spFoco || !c.querySelector(".sp-iniciar")),
        alvo: () => { const p = pAtual(); return (p && p.onde && tela.querySelector(`[data-k="${CSS.escape(p.onde)}"]`)) || fEl; },
        instrucao: () => fEl });
    }
  };

  /* ---------- 🎬 demonstração guiada: o Bit faz cada passo num computador igual, com o mousezinho ---------- */
  const espera = ms => new Promise(r => setTimeout(r, ms));
  const DEMO_CSS = `.spd{position:fixed;inset:0;z-index:10040;background:#0b1220;display:flex;flex-direction:column}
.spd .sp.sp-foco{position:relative;inset:auto;z-index:auto;flex:1;min-height:0}
.spd .sp.sp-foco .sp-moldura{width:min(100%,calc((100vh - var(--sp-gh,150px) - 132px) * 1.6667))}
.spd .sp-bts{display:none!important}.spd .sp-iniciar{display:none!important}
.spd-faixa{flex:none;display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:linear-gradient(90deg,#7c2d12,#b45309);color:#fff;padding:10px 16px;font-size:1.1rem}
.spd-faixa b{color:#fde68a}.spd-selo{display:inline-block;background:#dc2626;color:#fff;font-weight:900;border-radius:8px;padding:2px 10px;margin-right:6px;letter-spacing:.05em;animation:spdPisca 1.2s ease-in-out infinite}
@keyframes spdPisca{50%{opacity:.55}}
.spd-intro .passos{display:flex;gap:14px;justify-content:center;align-items:stretch;margin:14px 0 4px;flex-wrap:wrap}
.spd-intro .passos>div{flex:1;min-width:170px;border-radius:16px;padding:12px;border:3px solid #e2e8f0}.spd-intro .passos .a{border-color:#f59e0b;background:#fffbeb}.spd-intro .passos .b{border-color:#16a34a;background:#f0fdf4}
.spd-intro .passos i{display:block;font-style:normal;font-size:2.4rem}.spd-intro .passos .t{display:block;font-size:1.15rem;margin:4px 0 4px;font-weight:800}.spd-intro .passos>div{line-height:1.4}.spd-intro .seta{align-self:center;font-size:2rem;color:#64748b}.spd-faixa .spd-tit{flex:1;min-width:260px;font-weight:700}
.spd-faixa button{border:0;border-radius:10px;padding:9px 14px;font-weight:800;cursor:pointer;font-size:1rem;background:rgba(255,255,255,.18);color:#fff}
.spd-faixa .spd-ja{background:#22c55e;color:#052e16;font-size:1.15rem;padding:12px 20px;animation:spdPulsa 1s ease-in-out infinite alternate}
@keyframes spdPulsa{to{transform:scale(1.06);box-shadow:0 0 0 6px rgba(34,197,94,.35)}}
.spd-mouse{position:fixed;left:50%;top:50%;width:34px;height:40px;z-index:10050;pointer-events:none;transition:left .85s cubic-bezier(.45,.05,.3,1),top .85s cubic-bezier(.45,.05,.3,1);filter:drop-shadow(2px 3px 2px rgba(0,0,0,.45))}
.spd-mouse.clica svg{transform:scale(.85)}.spd-mouse svg{transition:transform .12s;transform-origin:4px 4px}
.spd-onda{position:fixed;z-index:10049;pointer-events:none;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;border:4px solid #facc15;animation:spdOnda .6s ease-out forwards}
.spd-onda.dir{border-color:#f472b6}
@keyframes spdOnda{to{transform:scale(4.5);opacity:0}}
.spd-etq{position:fixed;z-index:10051;pointer-events:none;background:#facc15;color:#0f172a;font-weight:900;font-size:15px;border-radius:999px;padding:4px 12px;white-space:nowrap;transform:translate(22px,26px);box-shadow:0 3px 8px rgba(0,0,0,.3)}
.spd-etq.spd-gesto{background:#fff;border:2px solid #1c1f22;border-radius:10px;padding:2px 4px;box-shadow:2px 2px 0 #1c1f22;white-space:normal;transform:none}.spd-gesto .gs-mouse{width:36px;height:35px}.spd-gesto .gs-k{min-width:24px;height:24px;font-size:.75rem;padding:0 4px}
.spd .sp-guia .gs-mini .gs-mouse{width:66px;height:64px}.spd .sp-guia .gs-mini .gs-rot{display:block;font-size:.75rem;padding:0 8px}.gs-agora{animation:gsAgora .5s ease-out}@keyframes gsAgora{0%{transform:scale(1.35)}100%{transform:none}}
.spd-fim{position:fixed;inset:0;z-index:10060;background:rgba(6,20,50,.78);display:flex;align-items:center;justify-content:center}
.spd-fim>div{background:#fff;border-radius:22px;padding:26px 32px;max-width:560px;text-align:center;font-size:1.15rem}
.spd-fim h2{margin:6px 0 10px}.spd-fim .row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}
.spd-fim button{border:0;border-radius:12px;padding:12px 20px;font-weight:800;font-size:1.1rem;cursor:pointer}
.spd-fim .ok{background:#16a34a;color:#fff}.spd-fim .sec{background:#e2e8f0;color:#0f172a}`;
  const SETA = `<svg viewBox="0 0 24 30" width="34" height="40"><path d="M2 2 L2 24 L8 18.5 L12.5 28 L16.5 26 L12 16.8 L20 16.8 Z" fill="#fff" stroke="#000" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
  /* o que o Bit faz em cada passo: vem de p.demo (lista de ações) ou é deduzido do que o passo confere (p.ok) e de onde piscar (p.onde)
     ações: ["clique", k] ["duplo", k] ["direito", k] ["menu", "rótulo"] ["digitar", k|seletor, texto] ["tecla", "Enter"|"Ctrl+S"] ["arrastar", k, pastaDestino] */
  function acoesDoPasso(p, prox) {
    if (Array.isArray(p.demo)) return p.demo;
    const oks = p.ok == null ? [] : Array.isArray(p.ok) ? p.ok : [p.ok];
    const limpa = x => { if (/^\/.+\/[a-z]*$/.test(x)) x = x.slice(1, x.lastIndexOf("/")).replace(/\([^()]*\)\?/g, "").replace(/\[\^?[^\]]*\][*+]?/g, "").replace(/^\^/, "").replace(/\$$/, "").replace(/\.\*/g, "*").replace(/\\(.)/g, "$1").replace(/[()?+\[\]|]/g, ""); return x; };
    const pats = oks.filter(x => typeof x === "string").map(limpa);
    const o = oks.find(x => typeof x === "object") || null, sv = pats.find(x => !x.includes("*")) || pats[0] || "";
    const onde = p.onde || null, [v, a2, ...r] = sv.split(":"), resto = [a2, ...r].join(":"), alvoNome = r.join(":").replace(/\*/g, "");
    // texto a digitar quando o passo confere com /regex/: usa o que está em negrito no pedido (ex.: "pesquise <b>escolas fechar dezembro</b>")
    const sug = (verbo, padrao) => { const orig = oks.find(x => typeof x === "string" && x.startsWith("/")); if (!orig) return padrao;
      const bs = [...String(p.faca || "").matchAll(/<b>(.*?)<\/b>/g)].map(m => m[1].replace(/<[^>]+>/g, "").trim()).filter(Boolean);
      return bs.find(b => casa(orig, verbo + ":" + b)) || padrao; };
    const pre = alvo => onde && onde !== alvo && !/^(arq|ic):/.test(onde) ? [["clique", onde]] : [];
    if (o) {
      if (o.estado === "notas") return [["clique", "notas:texto"], ["digitarNotas", "notas:texto", o.texto]];
      if (o.estado === "campo") return [["digitar", `[data-campo="${o.nome}"]`, o.valor || o.demo || (/\\d\{2\}\//.test(o.regex || "") ? "15/03/2012" : "aluno2026")]];
      if (o.estado === "senhaForte") return [["digitar", `[data-campo="${o.campo || "senha"}"]`, "Escola@2026"]];
      if (o.estado === "marcado") return [["clique", `[data-ev="${o.nome}"]`]];
      if (o.estado === "salvo") return [["clique", "notas:texto"], ["tecla", "Ctrl+S"]].concat(o.pasta ? [["escolher", "dlg:pasta", o.pasta]] : []).concat([["digitar", "dlg:nome", o.nome], ["tecla", "Enter"]]);
      if (o.estado === "fechadas") return o.ids.map(id => ["clique", `jan:${id}:fechar`]);
      if (o.estado === "url") return [["digitar", "web:url", o.url], ["tecla", "Enter"]];
      if (o.estado === "pastaTem" && onde) return [["arrastar", onde, o.pasta]];
      return onde ? [["clique", onde]] : [];
    }
    if (v === "duplo") return [["duplo", onde || resto]];
    if (v === "abrir" && a2 === "pasta") return onde && /^nav:/.test(onde) ? [["clique", onde]] : pre("arq:" + alvoNome).concat([["duplo", onde && /^(arq|ic):/.test(onde) ? onde : "arq:" + alvoNome]]);
    if (v === "abrir" && a2 === "arq") return pre("arq:" + alvoNome).concat([["duplo", onde && /^(arq|ic):/.test(onde) ? onde : "arq:" + alvoNome]]);
    if (v === "abrir" && a2 === "app") return onde && /^ic:/.test(onde) ? [["duplo", onde]] : onde && onde !== "bar:iniciar" ? [["clique", onde]] : [["clique", "bar:iniciar"], ["clique", "start:" + alvoNome]];
    if (["min", "max", "fechar", "restaurarTam"].includes(v) && a2 === "jan") return [["clique", onde || `jan:${alvoNome}:${v === "restaurarTam" ? "max" : v}`]];
    if (v === "fechar" && a2 === "propriedades") return [["clique", '[data-a="propOk"]']];
    if (v === "restaurar" && a2 === "arq") return [["direito", onde || "lix:" + alvoNome], ["menu", "Restaurar"]];
    if (v === "restaurar" && a2 === "jan") return [["clique", onde || "bar:" + alvoNome]];
    if (v === "link") { const l = `[data-link^="${resto.replace(/\*/g, "")}"]`; return onde && /^email:/.test(onde) ? [["clique", onde], ["clique", l]] : [["clique", onde || l]]; }
    if (v === "clique") return [["clique", onde && onde.split(":")[0] === a2 ? onde : resto.replace(/\*/g, "")]];
    if (v === "calc") return [["clique", "calc:" + resto]];
    if (v === "rolar") return [["rolar", ".sp-pag"]];
    if (v === "arrastar" && a2 === "jan") return [["arrastarJan", alvoNome]];
    if (v === "direito") return [["direito", onde || resto]];
    if (v === "mover") { const [de, para] = alvoNome.split(">"); return [["arrastar", onde || a2 + ":" + de, para]]; }
    if (v === "texto") return [["clique", "notas:texto"], ["digitarNotas", "notas:texto", sug("texto", resto.replace(/\*.*$/, "") || "Olá, eu sou da escola")]];
    if (v === "atalho") return [["tecla", resto]];
    if (v === "url") return [["digitar", "web:url", resto], ["tecla", "Enter"]];
    if (v === "buscar") return [["digitar", onde || "web:busca", sug("buscar", resto.replace(/\*/g, " ").trim())], ["tecla", "Enter"]];
    if (v === "criar") { const ren = prox && [].concat(prox.ok || []).find(x => typeof x === "string" && x.startsWith("renomear:"));
      return [["direito", a2 === "pasta" && /Área de Trabalho/.test(alvoNome) ? "area" : "fundoexp"], ["menu", r[0] === "Área de Trabalho" ? "Novo › Pasta" : (a2 === "txt" ? "Novo › Documento de Texto" : "Novo › Pasta")]].concat(ren ? [] : [["tecla", "Enter"]]); }
    if (v === "renomear") { let [velho, novo] = alvoNome.split(">"); novo = (novo || "").replace(/\.$/, "") || "Minha pasta"; if (pats[0] !== oks.find(x => typeof x === "string")) novo = novo[0].toUpperCase() + novo.slice(1); return [["renomear", "arq:" + velho, novo]]; }
    if (v === "excluir") return [["direito", onde || "arq:" + alvoNome], ["menu", "Excluir"]];
    if (v === "compactar") return [["direito", onde || "arq:" + alvoNome], ["menu", /Compactar|Enviar/]];
    if (v === "extrair") return [["direito", onde || "arq:" + alvoNome], ["menu", "Extrair Tudo..."]];
    if (v === "prop") return [["direito", onde || "arq:" + alvoNome], ["menu", "Propriedades"]];
    if (v === "copiar" || v === "recortar") return [["direito", onde || "arq:" + alvoNome], ["menu", v === "copiar" ? "Copiar" : "Recortar"]];
    if (v === "colar") return [["direito", "fundoexp"], ["menu", "Colar"]];
    if (v === "extensoes") return [["clique", onde || "exp:ext"]];
    return onde ? [["clique", onde]] : [];
  }
  // 🖱️ o gesto do passo: o que o texto pede; senão, a ação principal que o Bit faz na demonstração
  function gestoDoPasso(p, prox) { const g = P.gesto && P.gesto.deTexto(p.faca); if (g) return g;
    let acs = []; try { acs = acoesDoPasso(p, prox); } catch (e) {}
    const a = acs.find(x => x[0] !== "menu") || acs[0]; if (!a) return null;
    return { clique: ["clique"], menu: ["clique"], escolher: ["clique"], duplo: ["duplo"], direito: ["direito"], arrastar: ["arrastar"], arrastarJan: ["arrastar"], rolar: ["rolarBaixo"], tecla: ["tecla", a[1]] }[a[0]] || null; }
  T.sim_pc.demo = function (at, so, op) {
    op = op || {};
    if (!document.getElementById("spd-css")) { const stl = document.createElement("style"); stl.id = "spd-css"; stl.textContent = DEMO_CSS; document.head.appendChild(stl); }
    const ov = document.createElement("div"); ov.className = "spd"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-label", "Veja como faz");
    ov.innerHTML = `<div class="spd-faixa"><span class="spd-tit"><span class="spd-selo">🎬 VÍDEO</span> Só assista, <b>não precisa clicar</b>: o ${esc(at.ajudante || "Bit")} faz primeiro, passo a passo. <b>Depois é a sua vez!</b></span>
      <button type="button" class="spd-pausa">⏸ Pausar</button><button type="button" class="spd-denovo">↺ Ver de novo</button>${op.obrigatorio ? "" : `<button type="button" class="spd-sair">✕ Fechar</button>`}</div><div class="spd-sim"></div>`;
    document.body.appendChild(ov); document.body.classList.add("sp-travado");
    // durante a demonstração, o aluno só assiste: cliques e teclas de verdade no computador da demonstração são ignorados
    ["click", "dblclick", "pointerdown", "pointerup", "contextmenu", "keydown", "input", "wheel"].forEach(t => ov.addEventListener(t, e => { if (e.isTrusted && !e.target.closest(".spd-faixa")) { e.stopPropagation(); if (t !== "wheel") e.preventDefault(); } }, { capture: true, passive: false }));
    const mouse = document.createElement("div"); mouse.className = "spd-mouse"; mouse.innerHTML = SETA; document.body.appendChild(mouse);
    let rodada = 0, pausado = false, fechado = false;
    const fechar = () => { fechado = true; rodada++; ov.remove(); mouse.remove(); document.querySelectorAll(".spd-etq,.spd-onda,.spd-fim").forEach(x => x.remove()); document.body.classList.remove("sp-travado"); };
    const pausa = ov.querySelector(".spd-pausa"); pausa.onclick = () => { pausado = !pausado; pausa.textContent = pausado ? "▶ Continuar" : "⏸ Pausar"; };
    ov.querySelector(".spd-denovo").onclick = () => tocar();
    const bs = ov.querySelector(".spd-sair"); if (bs) bs.onclick = () => { fechar(); };
    const dorme = async (ms, meu) => { ms *= (P.__demoVel || 1); let t = 0; while (t < ms) { if (meu !== rodada) return false; await espera(100); if (!pausado) t += 100; } return meu === rodada; };
    async function tocar() {
      const meu = ++rodada; pausado = false; pausa.textContent = "⏸ Pausar"; document.querySelectorAll(".spd-fim,.spd-etq").forEach(x => x.remove());
      const box = ov.querySelector(".spd-sim"); box.innerHTML = ""; box.style.cssText = "flex:1;min-height:0;display:flex;flex-direction:column";
      const dst = { so: so || at.so || "10" }, dctx = { st: dst, demo: {}, salvar() {}, concluir() {}, reRender() {}, esconderVerificar() {} };
      T.sim_pc.render(box, at, dctx);
      const SP = box.querySelector(".sp"); SP.classList.add("sp-foco"); const ini = box.querySelector(".sp-iniciar"); if (ini) ini.remove();
      dispatchEvent(new Event("resize")); await espera(60); dispatchEvent(new Event("resize"));
      const tela = box.querySelector(".sp-tela"), passos = at.passos || [];
      const achaEl = k => { if (!k) return null; if (/^[\[.#]/.test(k)) return tela.querySelector(k); return tela.querySelector(`[data-k="${CSS.escape(k)}"]`) || (/^arq:.+\.\w{2,4}$/.test(k) ? [...tela.querySelectorAll("tr[data-arq]")].find(e => { const [, nm, ex] = e.dataset.arq.split("|"); return ex && norm(nm + "." + ex) === norm(k.slice(4)); }) : null) || (/^arq:\./.test(k) ? [...tela.querySelectorAll('[data-k^="arq:"]')].find(e => norm(e.dataset.k).endsWith(norm(k.slice(4)))) : null) || (/^arq:/.test(k) ? [...tela.querySelectorAll('[data-k^="arq:"]')].find(e => norm(e.dataset.k).startsWith(norm(k))) : null) || tela.querySelector(`[data-ctx="${CSS.escape(k)}"]`) || (k === "fundoexp" ? tela.querySelector('[data-ctx="fundoexp"]') : null) || (k === "area" ? tela.querySelector('[data-ctx="area"]') : null); };
      const centro = el => { const r = el.getBoundingClientRect(); return [r.left + Math.min(r.width / 2, 60), r.top + Math.min(r.height / 2, 18)]; };
      const vai = async (x, y) => { mouse.style.left = x + "px"; mouse.style.top = y + "px"; return dorme(950, meu); };
      const onda = (x, y, dir) => { const o = document.createElement("div"); o.className = "spd-onda" + (dir ? " dir" : ""); o.style.left = x + "px"; o.style.top = y + "px"; document.body.appendChild(o); setTimeout(() => o.remove(), 700); mouse.classList.add("clica"); setTimeout(() => mouse.classList.remove("clica"), 160); };
      const GE = { "clique": ["clique"], "2 cliques rápidos": ["duplo"], "botão direito": ["direito"], "segure e arraste": ["arrastar"], "🖱️ rodinha do mouse": ["rolarBaixo"], "escolha a pasta": ["clique"], "⌫ Backspace (apagar)": ["tecla", "Backspace"] };
      // 🖱️⌨️ 21/11/2026 (ideia do professor): no lugar da etiqueta de texto, o mousezinho mostra QUAL botão (ou as teclinhas, QUAL tecla)
      const etq = txt => { document.querySelectorAll(".spd-etq").forEach(x => x.remove()); if (!txt) return; const e = document.createElement("div"); const g = GE[txt] || (/^⌨️ (?!digitando)/.test(txt) ? ["tecla", txt.slice(3)] : null);
        if (g && P.gesto) { e.className = "spd-etq spd-gesto"; e.innerHTML = P.gesto(g[0], g[1], { mini: true, rotulo: false });
          // o mousezinho GRANDE, com o nome do gesto, vai na faixa do Bit (fora da tela do computador: não cobre nada)
          const gl = tela.closest(".sp") && tela.closest(".sp").querySelector(".sp-guia .f"); if (gl) { const vel = gl.querySelector(".gs-linha > .gs"), novo = document.createElement("span"); novo.innerHTML = P.gesto(g[0], g[1], { mini: true }); novo.firstChild.classList.add("gs-agora");
            if (vel) vel.replaceWith(novo.firstChild); else gl.innerHTML = `<span class="gs-linha">${novo.innerHTML}<span class="gs-txt">${gl.innerHTML}</span></span>`; } }
        else { e.className = "spd-etq"; e.textContent = txt; } e.style.left = mouse.style.left; e.style.top = mouse.style.top; document.body.appendChild(e);
        // o mousezinho fica ACIMA e à ESQUERDA da setinha, para não cobrir o menu que abre embaixo/à direita; perto da borda, vira para o outro lado
        // junto da setinha só onde NÃO cobrir nada importante (botão, campo, item de menu, ícone, texto pequeno): testa 6 lugares; se nenhum estiver livre, fica só o da faixa do Bit
        if (g) { const imp = [...tela.querySelectorAll("[data-k],[data-m],[data-ev],[data-campo],[data-link],button,input,textarea,a,td,label,h1,h2,h3,p,li")].filter(x => x.matches("input,textarea") || (x.getBoundingClientRect().width * x.getBoundingClientRect().height < 45000)).map(x => x.getBoundingClientRect()).filter(r => r.width && r.height);
          if (g[0] === "direito") imp.push({ left: parseFloat(e.style.left), top: parseFloat(e.style.top), right: parseFloat(e.style.left) + 280, bottom: parseFloat(e.style.top) + 320 });   // o menu do botão direito vai abrir aqui
          tela.querySelectorAll(".sp-dlg").forEach(d => imp.push(d.getBoundingClientRect()));
          const w = e.offsetWidth, h = e.offsetHeight, x0 = parseFloat(e.style.left), y0 = parseFloat(e.style.top), livre = (x, y) => x > 4 && y > 4 && x + w < innerWidth - 4 && y + h < innerHeight - 4 && !imp.some(r => !(r.right <= x || r.left >= x + w || r.bottom <= y || r.top >= y + h));
          const pos = [[-w - 6, -2], [-w - 6, -h - 6], [-w / 2, -h - 10], [30, -h - 6], [-w - 6, 24], [30, 34]].find(([dx, dy]) => livre(x0 + dx, y0 + dy));
          if (pos && g[0] !== "arrastar") e.style.transform = `translate(${pos[0]}px,${pos[1]}px)`; else e.remove();   // arrastando, as coisas andam na tela: fica só o da faixa
          // a tela muda depois do clique (página nova, janela, caixa de diálogo): se passar a cobrir algo, o mousezinho da setinha sai
          const cobre = () => { if (!e.isConnected) return; const c = e.getBoundingClientRect(), tl = document.querySelector(".spd .sp-tela") || tela, sp = tl.closest(".sp");
            const els = [...tl.querySelectorAll("[data-k],[data-m],[data-ev],[data-campo],[data-link],button,input,textarea,a,td,label,h1,h2,h3,p,li,.sp-dlg")].concat(sp ? [sp.querySelector(".sp-guia")] : []).filter(Boolean);
            if (els.some(x => { const r = x.getBoundingClientRect(); return r.width && (x.matches("input,textarea,.sp-guia,.sp-dlg") || r.width * r.height < 45000) && !(r.right <= c.left || r.left >= c.right || r.bottom <= c.top || r.top >= c.bottom); })) e.remove(); };
          if (e.isConnected) { const mo = new MutationObserver(cobre); mo.observe(document.querySelector(".spd") || tela, { childList: true, subtree: true, attributes: true, characterData: true }); setTimeout(() => mo.disconnect(), 2000); [150, 500].forEach(t => setTimeout(cobre, t)); } }
        setTimeout(() => e.remove(), g ? 1800 : 1600); };
      const me = (tipo, el, x, y, extra) => el.dispatchEvent(new MouseEvent(tipo, Object.assign({ bubbles: true, cancelable: true, clientX: x, clientY: y, button: tipo === "contextmenu" ? 2 : 0 }, extra || {})));
      const pe = (tipo, el, x, y) => el.dispatchEvent(new PointerEvent(tipo, { bubbles: true, cancelable: true, clientX: x, clientY: y, button: 0, pointerId: 1, isPrimary: true }));
      const tecla = (el, t) => { const ctrl = /^Ctrl\+/.test(t), key = ctrl ? t.slice(5).toLowerCase() : t; (el || tela).dispatchEvent(new KeyboardEvent("keydown", { key, ctrlKey: ctrl, bubbles: true, cancelable: true })); };
      async function fazer(ac) {
        const [tipo, k, extra] = ac;
        if (tipo === "menu") { const itens = [...tela.querySelectorAll("[data-m]")]; const it = itens.find(b => (k instanceof RegExp ? k.test(b.dataset.k.slice(5)) : b.dataset.k.slice(5) === k)); if (!it) return false;
          const [x, y] = centro(it); if (!await vai(x, y)) return null; etq("clique"); onda(x, y); it.click(); return dorme(500, meu); }
        if (tipo === "tecla") { const foco = document.activeElement && tela.contains(document.activeElement) ? document.activeElement : tela.querySelector("[data-ren]") || tela.querySelector('[data-k="dlg:nome"]') || tela.querySelector(".sp-notas textarea") || tela;
          etq("⌨️ " + k); if (k === "Enter" && foco.form) foco.form.requestSubmit(); else tecla(foco, k); return dorme(700, meu); }
        if (tipo === "renomear") { let inp = tela.querySelector("[data-ren]");
          if (!inp) { if (!await fazer(["direito", k])) return false; if (!await fazer(["menu", "Renomear"])) return false; inp = tela.querySelector("[data-ren]"); }
          if (!inp) return false; return fazer(["digitar", "[data-ren]", extra]).then(okk => okk && fazer(["tecla", "Enter"])); }
        if (tipo === "escolher") { const sel = achaEl(k); if (!sel) return false; const [x, y] = centro(sel); if (!await vai(x, y)) return null; etq("escolha a pasta"); onda(x, y);
          const op = [...sel.options].find(o2 => norm(o2.value) === norm(extra) || norm(o2.textContent) === norm(extra)); if (!op) return false; sel.value = op.value; sel.dispatchEvent(new Event("change", { bubbles: true })); return dorme(800, meu); }
        if (tipo === "rolar") { const pgEl = tela.querySelector(k); if (!pgEl) return false; const [x, y] = centro(pgEl); if (!await vai(x, y + 60)) return null; etq("🖱️ rodinha do mouse");
          for (let i = 0; i < 14; i++) { pgEl.scrollTop += Math.ceil(pgEl.scrollHeight / 12); pgEl.dispatchEvent(new Event("scroll")); pgEl.dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: 120 })); if (!await dorme(110, meu)) return null; } return dorme(600, meu); }
        if (tipo === "arrastarJan") { const t = tela.querySelector(`[data-arrasta="${CSS.escape(k)}"]`); if (!t) return false; const r = t.getBoundingClientRect(), x = r.left + r.width * .4, y = r.top + r.height / 2; if (!await vai(x, y)) return null;
          etq("segure e arraste"); pe("pointerdown", t, x, y); for (let i = 1; i <= 12; i++) { const xi = x - i * 9, yi = y + i * 6; mouse.style.transition = "none"; mouse.style.left = xi + "px"; mouse.style.top = yi + "px"; pe("pointermove", tela, xi, yi); if (!await dorme(60, meu)) return null; }
          mouse.style.transition = ""; etq("solte"); pe("pointerup", tela, x - 108, y + 72); return dorme(800, meu); }
        if (tipo === "digitarNotas") { const ta = tela.querySelector(".sp-notas textarea"); if (!ta) return false; const alvo = String(extra || "");
          let cp = 0; while (cp < ta.value.length && cp < alvo.length && ta.value[cp] === alvo[cp]) cp++;
          if (ta.value.length > cp) { const [x, y] = centro(ta); if (!await vai(x, y)) return null; ta.focus(); etq("⌫ Backspace (apagar)");
            while (ta.value.length > cp) { ta.value = ta.value.slice(0, -1); ta.dispatchEvent(new Event("input", { bubbles: true })); if (!await dorme(140, meu)) return null; } }
          return alvo.length > cp ? fazer(["digitar", "notas:texto", alvo.slice(cp)]) : dorme(500, meu); }
        const el = achaEl(k); if (!el) return false; const [x, y] = centro(el);
        if (!await vai(x, y)) return null;
        if (tipo === "clique") { etq("clique"); onda(x, y); pe("pointerdown", el, x, y); pe("pointerup", tela, x, y); me("click", el, x, y); }
        else if (tipo === "duplo") { etq("2 cliques rápidos"); onda(x, y); me("click", el, x, y); await espera(120); onda(x, y); me("dblclick", el, x, y); }
        else if (tipo === "direito") { etq("botão direito"); onda(x, y, true); me("contextmenu", el, x, y); }
        else if (tipo === "digitar") { etq("⌨️ digitando"); el.focus(); if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") { if (el.matches("[data-ren],[data-k='dlg:nome'],[data-campo],[data-k='web:url']")) el.value = "";
            for (const ch of String(extra || "")) { if (!await dorme(70, meu)) return null; const t = tela.querySelector(el.matches("[data-k]") ? `[data-k="${CSS.escape(el.dataset.k)}"]` : k) || el; t.value += ch; t.dispatchEvent(new Event("input", { bubbles: true })); } } }
        else if (tipo === "arrastar") { const dzs = [...tela.querySelectorAll("[data-drop]")], dz = dzs.find(z => z.matches("tr") && norm(z.dataset.drop) === norm(extra)) || dzs.find(z => norm(z.dataset.drop) === norm(extra)); if (!dz) return false; etq("segure e arraste"); pe("pointerdown", el, x, y);
          const [x2, y2] = centro(dz); for (let i = 1; i <= 12; i++) { const xi = x + (x2 - x) * i / 12, yi = y + (y2 - y) * i / 12; mouse.style.transition = "none"; mouse.style.left = xi + "px"; mouse.style.top = yi + "px"; pe("pointermove", tela, xi, yi); if (!await dorme(60, meu)) return null; }
          mouse.style.transition = ""; etq("solte"); pe("pointerup", tela, x2, y2); onda(x2, y2); }
        return dorme(900, meu);
      }
      mouse.style.left = innerWidth / 2 + "px"; mouse.style.top = innerHeight / 2 + "px";
      if (!await dorme(1800, meu)) return;
      for (let i = 0; i < passos.length; i++) {
        if (meu !== rodada) return;
        const antes = dst.passo; if (!await dorme(1600, meu)) return; // tempo para ler o pedido do passo
        const mudou = async () => { for (let k = 0; k < 10 && dst.passo === antes; k++) await espera(100); return dst.passo !== antes; }; // o clique só "conta" ~0,3 s depois (pode virar duplo)
        for (const ac of acoesDoPasso(passos[i], passos[i + 1])) { const r = await fazer(ac); if (r === null || meu !== rodada) return; if (dst.passo !== antes || (ac[0] !== "direito" && ac[0] !== "menu" && await mudou())) break; }
        await mudou(); if (!await dorme(700, meu)) return;
        if (dst.passo === antes) { console.warn("[demo sim_pc] passo sem demonstração automática:", at.id || at.titulo, i + 1, passos[i]); dctx.demo.forcar && dctx.demo.forcar(); (P.__demoFalhas = P.__demoFalhas || []).push([at.id || at.titulo, i + 1]); }
        if (!await dorme(1400, meu)) return; // tempo para ver o resultado e o elogio
      }
      if (meu !== rodada) return;
      const fim = document.createElement("div"); fim.className = "spd-fim";
      fim.innerHTML = `<div><p style="font-size:3rem;margin:0">🙌</p><h2>Viu como faz?</h2><p>Agora é a <b>sua vez</b>: faça <b>igualzinho</b>, passo a passo. O ${esc(at.ajudante || "Bit")} vai estar do seu lado, e o botão <b>🎬 Rever como faz</b> fica sempre ali, se precisar.</p>
        <div class="row"><button type="button" class="ok">▶ Agora é a minha vez!</button><button type="button" class="sec">↺ Ver de novo</button></div></div>`;
      document.body.appendChild(fim);
      fim.querySelector(".ok").onclick = () => { fechar(); op.aoFim && op.aoFim(); };
      fim.querySelector(".sec").onclick = () => { fim.remove(); tocar(); };
      fim.querySelector(".ok").focus();
    }
    // 1º: deixa claro, no meio da tela, que primeiro é um VÍDEO e depois é a vez do aluno (20/11/2026, pedido do professor)
    if (op.obrigatorio) {
      const nm = esc(at.ajudante || "Bit"), it = document.createElement("div"); it.className = "spd-fim spd-intro";
      it.innerHTML = `<div><h2>Antes de começar, preste atenção!</h2><p>Este simulador tem <b>duas partes</b>:</p>
        <div class="passos"><div class="a"><i>🎬</i><span class="t">1. Primeiro, um vídeo</span>O ${nm} faz a tarefa inteira, passo a passo. Você <b>só assiste</b>: não precisa clicar em nada.</div><span class="seta" aria-hidden="true">➜</span>
        <div class="b"><i>✋</i><span class="t">2. Depois, a sua vez</span>Você faz <b>igualzinho</b> ao que viu, com o ${nm} do seu lado ajudando.</div></div>
        <div class="row"><button type="button" class="ok">👍 Entendi! Ver o vídeo</button></div></div>`;
      document.body.appendChild(it); const b2 = it.querySelector(".ok"); b2.focus();
      b2.onclick = () => { it.remove(); tocar(); };
    } else tocar();
    return { fechar };
  };
})();
