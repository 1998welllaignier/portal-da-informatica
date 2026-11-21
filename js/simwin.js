/* ============================================================
   🖥️ SIMULADOR DO WINDOWS — tipo de atividade "sim_windows"
   Aula especial "Meu papel de parede" (15/11/2026, pedido do professor):
   o aluno descobre qual Windows está na tela (10 ou 11), baixa uma imagem
   no navegador, descobre o formato (.webp), converte no Paint para .png/.jpg
   e coloca como papel de parede — tudo numa área de trabalho de mentira,
   o mais parecida possível com o Windows de verdade (menus em português,
   clique direito, Configurações, Explorador de Arquivos, Paint, winver).
   Nada muda no computador de verdade.
   Campos da atividade: alvo (id da imagem, padrão "estadio"), so ("10"/"11"; sem isso, sorteia).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const { esc } = P.util;
  const ACEITA = ["jpg", "jpeg", "png", "bmp", "gif", "tif", "tiff"];
  const aceita = ext => ACEITA.includes(String(ext).toLowerCase());
  const TIPO = { webp: "Arquivo WEBP", jpg: "Arquivo JPG", jpeg: "Arquivo JPEG", png: "Arquivo PNG", bmp: "Arquivo BMP", gif: "Arquivo GIF", tif: "Arquivo TIF" };
  const TAM = { webp: "214 KB", jpg: "486 KB", png: "1.920 KB", bmp: "6.075 KB", gif: "702 KB", tif: "5.110 KB" };
  const svg = s => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);

  /* ---------- as imagens (desenhos inventados, sem pessoas reais) ---------- */
  const ARTE = {
    estadio: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1340"/><stop offset="1" stop-color="#27408b"/></linearGradient><radialGradient id="l"><stop offset="0" stop-color="#fffbe0"/><stop offset="1" stop-color="#fffbe0" stop-opacity="0"/></radialGradient></defs><rect width="320" height="200" fill="url(#c)"/>${[30, 290].map(x => `<rect x="${x - 2}" y="30" width="4" height="80" fill="#555"/><circle cx="${x}" cy="32" r="34" fill="url(#l)"/><rect x="${x - 10}" y="26" width="20" height="10" rx="2" fill="#fff8c4"/>`).join("")}<path d="M0 110 Q160 80 320 110 L320 135 L0 135Z" fill="#7a1f2b"/><path d="M0 118 Q160 92 320 118" stroke="#f3c623" stroke-width="3" fill="none"/>${Array.from({ length: 40 }, (_, i) => `<circle cx="${8 + i * 8}" cy="${120 - Math.sin(i / 39 * Math.PI) * 18}" r="2" fill="${["#fff", "#f3c623", "#e33"][i % 3]}"/>`).join("")}<rect y="135" width="320" height="65" fill="#2f9e44"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 40}" y="135" width="20" height="65" fill="#37b24d"/>`).join("")}<ellipse cx="160" cy="168" rx="40" ry="14" fill="none" stroke="#fff" stroke-width="2"/><line x1="160" y1="135" x2="160" y2="200" stroke="#fff" stroke-width="2"/><circle cx="200" cy="182" r="9" fill="#fff" stroke="#222"/><path d="M196 178 l4 -3 4 3 -1.5 5 h-5z" fill="#222"/></svg>`),
    sol: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7b54"/><stop offset=".6" stop-color="#ffb26b"/><stop offset="1" stop-color="#ffd56b"/></linearGradient></defs><rect width="320" height="200" fill="url(#c)"/><circle cx="160" cy="118" r="34" fill="#fff3b0"/><path d="M0 120 Q60 100 110 118 T220 112 T320 120 V200 H0Z" fill="#2d6a4f"/><rect y="138" width="320" height="62" fill="#1d3557"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${130 + i * 3}" y="${145 + i * 10}" width="${60 - i * 8}" height="3" fill="#fff3b0" opacity=".7"/>`).join("")}<path d="M40 150 l30 0 -6 8 -18 0z" fill="#3d2b1f"/><line x1="55" y1="150" x2="55" y2="132" stroke="#3d2b1f" stroke-width="2"/></svg>`),
    galaxia: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" fill="#0d0221"/><ellipse cx="160" cy="100" rx="120" ry="40" fill="#7b2cbf" opacity=".45" transform="rotate(-18 160 100)"/><ellipse cx="160" cy="100" rx="70" ry="22" fill="#c77dff" opacity=".6" transform="rotate(-18 160 100)"/><circle cx="160" cy="100" r="14" fill="#fff0f6"/>${Array.from({ length: 60 }, (_, i) => `<circle cx="${(i * 53) % 320}" cy="${(i * 37) % 200}" r="${i % 5 ? 0.8 : 1.6}" fill="#fff"/>`).join("")}<circle cx="262" cy="44" r="16" fill="#4cc9f0"/><path d="M244 48 q18 -12 36 -6" stroke="#fff" fill="none"/></svg>`),
    carro: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" fill="#1b263b"/><rect y="150" width="320" height="50" fill="#333"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${i * 60 + 10}" y="173" width="30" height="4" fill="#ffd60a"/>`).join("")}<path d="M60 140 L90 110 L190 104 L240 126 L270 132 L272 150 L60 150Z" fill="#e63946"/><path d="M100 112 L185 108 L215 124 L98 126Z" fill="#a8dadc"/><circle cx="105" cy="150" r="15" fill="#111"/><circle cx="105" cy="150" r="6" fill="#999"/><circle cx="235" cy="150" r="15" fill="#111"/><circle cx="235" cy="150" r="6" fill="#999"/><rect x="262" y="134" width="10" height="5" fill="#ffd60a"/></svg>`),
    w10: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><radialGradient id="g" cx=".6" cy=".45" r=".7"><stop offset="0" stop-color="#4fb3ff"/><stop offset=".45" stop-color="#0a5fb4"/><stop offset="1" stop-color="#021a3d"/></radialGradient></defs><rect width="320" height="200" fill="url(#g)"/><path d="M150 40 L250 25 L250 175 L150 160Z" fill="#7cc8ff" opacity=".25"/><path d="M0 0 L150 40 L150 160 L0 200Z" fill="#9fd8ff" opacity=".12"/></svg>`),
    w11: svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe3f7"/><stop offset="1" stop-color="#8fb6e0"/></linearGradient><linearGradient id="f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f7de1"/><stop offset="1" stop-color="#0a3d91"/></linearGradient></defs><rect width="320" height="200" fill="url(#g)"/><path d="M160 30 C210 60 230 120 160 175 C90 120 110 60 160 30Z" fill="url(#f)" opacity=".85"/><path d="M160 60 C250 70 270 130 200 170 C170 130 150 100 160 60Z" fill="#1e64c8" opacity=".7"/><path d="M160 60 C70 70 50 130 120 170 C150 130 170 100 160 60Z" fill="#3b8cf0" opacity=".7"/></svg>`)
  };
  const WEB = [
    { id: "estadio", nome: "estadio-a-noite", ext: "webp", tit: "Papel de parede: estádio à noite", site: "papeisdeparede.exemplo" },
    { id: "sol", nome: "por-do-sol-no-rio", ext: "jpg", tit: "Pôr do sol no rio", site: "fotosdobrasil.exemplo" },
    { id: "galaxia", nome: "galaxia-colorida", ext: "png", tit: "Galáxia colorida", site: "espaco.exemplo" },
    { id: "carro", nome: "carro-esportivo", ext: "webp", tit: "Carro esportivo vermelho", site: "papeisdeparede.exemplo" }
  ];
  const PASTAS = { desk: "Área de Trabalho", down: "Downloads", docs: "Documentos", imgs: "Imagens" };
  const PIC = { desk: "🖥️", down: "⬇️", docs: "📄", imgs: "🖼️" };

  /* ---------- estilo (uma vez só) ---------- */
  if (!document.getElementById("simwin-css")) {
    const st = document.createElement("style"); st.id = "simwin-css";
    st.textContent = `
.sw{--sw-esc:1;font-family:"Segoe UI",system-ui,sans-serif}
.sw-check{list-style:none;margin:0 0 10px;padding:10px 12px;background:var(--fundo-suave,#f3f6fb);border-radius:10px;display:grid;gap:4px;font-size:.95rem}
.sw-check li.ok{color:#15803d}.sw-check li.ok::marker{content:""}
.sw-cartao{display:flex;gap:16px;align-items:center;background:#fffbeb;color:#1c1f22;border:4px solid #1c1f22;border-radius:20px;box-shadow:5px 5px 0 #facc15;padding:10px 16px;margin:0 0 12px}
.swc-num{flex:none;width:70px;height:70px;border-radius:50%;background:#2563eb;color:#fff;border:4px solid #1c1f22;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:14px;line-height:1}.swc-num b{font-size:2rem;font-weight:900}
.swc-meio{flex:1;min-width:0}.swc-linha{display:flex;align-items:center;gap:14px;font-size:1.25rem;font-weight:700;line-height:1.25}
.swc-gest{flex:none;display:flex;flex-direction:column;align-items:center;background:#fff;border:3px solid #1c1f22;border-radius:14px;padding:4px 8px 6px;box-shadow:3px 3px 0 #1c1f22}.swc-gest .gs-mouse{width:58px;height:56px}.swc-gest .gs-k{min-width:34px;height:34px;font-size:.9rem}
.swc-t b{background:#fde047;padding:0 4px;border-radius:6px}
.swc-prog{display:flex;gap:6px;margin-top:8px;max-width:420px}.swc-prog i{flex:1;height:10px;border-radius:5px;border:2px solid #1c1f22;background:#e5e7eb}.swc-prog i.ok{background:#22c55e}.swc-prog i.at{background:#facc15}
.swc-todas{margin-top:6px;font-size:.9rem}.swc-todas summary{cursor:pointer;font-weight:700;color:#2563eb}.swc-todas .sw-check{margin:6px 0 0}
.sw-dica{background:#fff7d6;border:1px solid #f1d27a;border-radius:8px;padding:8px 10px;margin:0 0 10px;color:#5b4500}
.sw-moldura{width:100%;position:relative;overflow:hidden;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,.25);background:#000;user-select:none}
.sw-tela{position:absolute;left:0;top:0;width:1000px;height:600px;transform-origin:0 0;overflow:hidden;font-size:13px;color:#111;cursor:default}
.sw-fundo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.sw-icons{position:absolute;left:8px;top:8px;display:grid;gap:6px;z-index:1}
.sw-ic{width:78px;text-align:center;color:#fff;text-shadow:0 1px 2px #000;padding:4px 2px;border-radius:3px;font-size:12px;line-height:1.2;word-break:break-word}
.sw-ic:hover{background:rgba(255,255,255,.18)}.sw-ic .e{font-size:30px;display:block;text-shadow:none}
.sw-ic img{width:46px;height:34px;object-fit:cover;border:2px solid #fff;display:block;margin:0 auto 2px}
.sw-bar{position:absolute;left:0;right:0;bottom:0;height:40px;display:flex;align-items:center;z-index:50}
.sw10 .sw-bar{background:#1c1c1c;color:#fff}
.sw11 .sw-bar{background:rgba(238,243,250,.92);backdrop-filter:blur(8px);color:#111;justify-content:center;border-top:1px solid #d6dbe3;height:44px}
.sw-bar button{background:none;border:0;color:inherit;height:100%;min-width:44px;font-size:20px;cursor:pointer;position:relative}
.sw10 .sw-bar button:hover{background:#3a3a3a}.sw11 .sw-bar button{border-radius:6px;height:38px;margin:0 2px}.sw11 .sw-bar button:hover{background:#fff}
.sw-bar button.ativo::after{content:"";position:absolute;left:30%;right:30%;bottom:2px;height:3px;border-radius:2px;background:#76b9ed}
.sw-ini{font-size:22px!important}.sw10 .sw-ini{color:#fff}.sw11 .sw-ini{color:#0067c0}
.sw-busca10{height:100%;box-sizing:border-box;border:0;outline:0;width:270px;font-family:inherit;background:#f2f2f2!important;color:#555!important;font-size:13px!important;text-align:left;padding:0 10px!important}
.sw-relogio{position:absolute;right:10px;font-size:12px;text-align:center;line-height:1.3}
.sw-jan{position:absolute;background:#fff;box-shadow:0 8px 28px rgba(0,0,0,.35);display:flex;flex-direction:column;z-index:10}
.sw11 .sw-jan{border-radius:8px;overflow:hidden}.sw10 .sw-jan{border:1px solid #1883d7}
.sw-tit{height:32px;display:flex;align-items:center;padding-left:10px;gap:8px;flex:none;font-size:12px}
.sw10 .sw-tit{background:#fff}.sw11 .sw-tit{background:#f3f3f3}
.sw-tit .t{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sw-tit button{width:44px;height:32px;border:0;background:none;font-size:14px;cursor:pointer}.sw-tit button:hover{background:#e5e5e5}.sw-tit button.x:hover{background:#e81123;color:#fff}
.sw-corpo{flex:1;overflow:auto;position:relative}
.sw-menu{position:absolute;z-index:200;background:#f2f2f2;border:1px solid #ccc;box-shadow:2px 3px 10px rgba(0,0,0,.3);padding:3px 0;min-width:230px;font-size:12.5px}
.sw11 .sw-menu{background:#f9f9f9;border-radius:8px;padding:4px;border-color:#ddd}
.sw-menu div{padding:5px 26px 5px 30px;white-space:nowrap;position:relative;cursor:pointer}.sw11 .sw-menu div{border-radius:4px;padding:6px 26px 6px 36px}
.sw-menu div:hover{background:#dbeafe}.sw-menu div.off{color:#999;cursor:default}.sw-menu div.off:hover{background:none}
.sw-menu div .i{position:absolute;left:8px}.sw-menu div .s{position:absolute;right:8px}
.sw-menu hr{border:0;border-top:1px solid #d5d5d5;margin:3px 2px}
.sw-menu .sw-icrow{display:flex;gap:4px;padding:2px 4px 4px;border-bottom:1px solid #e3e3e3;margin-bottom:3px}.sw-menu .sw-icrow span{padding:4px 8px;border-radius:4px;cursor:pointer}.sw-menu .sw-icrow span:hover{background:#e8e8e8}
.sw-start{position:absolute;z-index:150;box-shadow:0 6px 24px rgba(0,0,0,.4)}
.sw10 .sw-start{left:0;bottom:40px;width:330px;height:430px;background:#2b2b2b;color:#fff;display:flex}
.sw10 .sw-start .rail{width:46px;background:#1f1f1f;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:6px}
.sw10 .sw-start .rail span{padding:10px;font-size:18px;text-align:center;cursor:pointer}.sw10 .sw-start .rail span:hover{background:#444}
.sw10 .sw-start .lista{flex:1;padding:10px 6px;overflow:auto}
.sw10 .sw-start .lista div{padding:7px 8px;cursor:pointer;display:flex;gap:10px;align-items:center}.sw10 .sw-start .lista div:hover{background:#444}
.sw10 .sw-start .lista small{color:#aaa;padding:4px 8px;display:block}
.sw11 .sw-start{left:50%;margin-left:-260px;bottom:52px;width:520px;height:440px;background:rgba(243,243,243,.97);border-radius:8px;border:1px solid #ddd;padding:18px 24px}
.sw11 .sw-start input{width:100%;border:1px solid #ccc;border-bottom:2px solid #0067c0;border-radius:18px;padding:8px 14px;font-size:13px}
.sw11 .sw-start h4{margin:16px 0 8px;font-size:13px}
.sw11 .sw-start .grade{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}
.sw11 .sw-start .grade div{text-align:center;padding:8px 2px;border-radius:6px;cursor:pointer;font-size:11.5px}.sw11 .sw-start .grade div:hover{background:#fff}
.sw11 .sw-start .grade div .e{font-size:26px;display:block}
.sw-start .res div{padding:8px;border-radius:6px;cursor:pointer;display:flex;gap:10px;align-items:center}.sw-start .res div:hover{background:rgba(127,127,127,.2)}
.sw-dlg{position:absolute;left:150px;top:70px;width:700px;height:430px;z-index:120}
.sw-nav{width:170px;background:#fafafa;border-right:1px solid #e5e5e5;padding:6px 0;flex:none}
.sw-nav div{padding:6px 12px;cursor:pointer}.sw-nav div:hover{background:#e5f1fb}.sw-nav div.sel{background:#cce8ff}
.sw-arqs{flex:1;overflow:auto}
.sw-arqs table{width:100%;border-collapse:collapse;font-size:12px}.sw-arqs th{font-weight:normal;color:#4c607a;text-align:left;padding:5px 8px;border-bottom:1px solid #e5e5e5}
.sw-arqs td{padding:4px 8px;white-space:nowrap}.sw-arqs tr.f:hover td{background:#e5f3ff}.sw-arqs tr.sel td{background:#cce8ff}
.sw-arqs img{width:22px;height:16px;object-fit:cover;vertical-align:middle;margin-right:6px;border:1px solid #ccc}
.sw-end{height:30px;border-bottom:1px solid #e5e5e5;display:flex;align-items:center;padding:0 10px;gap:6px;color:#333;flex:none}
.sw-pe{border-top:1px solid #e5e5e5;padding:8px 12px;display:grid;grid-template-columns:70px 1fr auto;gap:6px 8px;align-items:center;flex:none;background:#f7f7f7}
.sw-pe input,.sw-pe .tp{border:1px solid #bbb;padding:4px 6px;font-size:12px;background:#fff;font-family:inherit}
.sw-pe .bts{grid-column:1/-1;display:flex;justify-content:flex-end;gap:8px}
.sw-bt{border:1px solid #adadad;background:#e1e1e1;padding:5px 18px;font-size:12px;cursor:pointer;font-family:inherit}.sw-bt:hover{background:#e5f1fb;border-color:#0078d7}
.sw11 .sw-bt{border-radius:4px;background:#fbfbfb;border-color:#d0d0d0}.sw-bt.pri{background:#0067c0;color:#fff;border-color:#0067c0}.sw10 .sw-bt.pri{background:#e1e1e1;color:#111;border:2px solid #0078d7}
.sw-chr{display:flex;flex-direction:column;height:100%}
.sw-abas{background:#dee1e6;height:34px;display:flex;align-items:flex-end;padding-left:8px}.sw-aba{background:#fff;border-radius:8px 8px 0 0;padding:7px 14px;font-size:12px;width:230px;white-space:nowrap;overflow:hidden}
.sw-url{display:flex;gap:6px;align-items:center;padding:5px 8px;border-bottom:1px solid #ddd;position:relative}.sw-url span.u{flex:1;background:#f1f3f4;border-radius:14px;padding:5px 12px;color:#333;font-size:12px}
.sw-dl{position:absolute;right:8px;top:36px;background:#fff;border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,.25);padding:10px 12px;width:260px;z-index:5;font-size:12px}
.sw-pesq{padding:10px 18px;overflow:auto;flex:1;display:flex;gap:14px}
.sw-pesq .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;flex:1;align-content:start}
.sw-pesq .grid div{cursor:pointer;font-size:11px;color:#444}.sw-pesq .grid img{width:100%;border-radius:8px;display:block}.sw-pesq .grid div.sel img{outline:3px solid #1a73e8}
.sw-prev{width:330px;border-left:1px solid #ddd;padding-left:12px;font-size:12px}.sw-prev img{width:100%;border-radius:6px;cursor:context-menu}
.sw-cfg{display:flex;height:100%}.sw-cfg .lado{width:220px;background:#f3f3f3;padding:10px 6px;flex:none}.sw10 .sw-cfg .lado{background:#fff;border-right:1px solid #eee}
.sw-cfg .lado div{padding:7px 10px;border-radius:5px;cursor:pointer}.sw-cfg .lado div:hover{background:#e9e9e9}.sw-cfg .lado div.sel{background:#e3e3e3;font-weight:600}
.sw-cfg .pag{flex:1;padding:16px 22px;overflow:auto;background:#fafafa}.sw10 .sw-cfg .pag{background:#fff}
.sw-cfg h2{font-size:22px;font-weight:600;margin:0 0 14px}.sw-cfg h3{font-size:14px;margin:14px 0 6px}
.sw-cfg .lin{background:#fff;border:1px solid #e8e8e8;border-radius:6px;padding:12px 14px;margin-bottom:4px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
.sw10 .sw-cfg .lin{border:0;border-bottom:1px solid #eee;border-radius:0}.sw-cfg .lin:hover{background:#f6f6f6}
.sw-cfg .tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.sw-cfg .tiles div{padding:14px;display:flex;gap:10px;cursor:pointer;border:1px solid transparent}.sw-cfg .tiles div:hover{border-color:#ccc;background:#f3f3f3}
.sw-cfg .prev{width:260px;height:150px;border-radius:8px;object-fit:cover;border:6px solid #222;display:block;margin-bottom:12px}
.sw-cfg .mini{display:flex;gap:6px;margin:6px 0 12px}.sw-cfg .mini img{width:64px;height:40px;object-fit:cover;border-radius:3px}
.sw-cfg .sel-falso{border:1px solid #bbb;padding:5px 10px;background:#fff;display:inline-block;min-width:150px;border-radius:4px}
.sw-paint{display:flex;flex-direction:column;height:100%;background:#e3e9f1}
.sw-paint .fita{background:#f5f6f7;border-bottom:1px solid #dadbdc;display:flex;gap:2px;padding:0 4px;align-items:center;height:30px;position:relative}
.sw-paint .fita span{padding:5px 12px;cursor:pointer}.sw-paint .fita span:hover{background:#e5e5e5}
.sw10 .sw-paint .fita span.arq{background:#1979ca;color:#fff}.sw10 .sw-paint .ferr{height:70px;background:#f5f6f7;border-bottom:1px solid #dadbdc;display:flex;gap:14px;align-items:center;padding:0 12px;color:#555}
.sw11 .sw-paint .ferr{height:44px;background:#f9f9f9;border-bottom:1px solid #e5e5e5;display:flex;gap:14px;align-items:center;padding:0 12px;color:#555}
.sw-paint .tela{flex:1;padding:14px;overflow:auto}.sw-paint .tela img{width:420px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3)}
.sw-pmenu10{position:absolute;left:0;top:30px;width:520px;height:330px;background:#fff;border:1px solid #aaa;display:flex;z-index:20;box-shadow:2px 3px 10px rgba(0,0,0,.3)}
.sw-pmenu10 .l{width:200px;background:#fff;border-right:1px solid #ddd;padding:4px 0}.sw-pmenu10 .l div{padding:8px 12px;cursor:pointer}.sw-pmenu10 .l div:hover,.sw-pmenu10 .l div.sel{background:#dbe9f8}
.sw-pmenu10 .r{flex:1;padding:8px}.sw-pmenu10 .r b{display:block;border-bottom:1px solid #ddd;padding:4px 6px 6px;margin-bottom:4px}.sw-pmenu10 .r div{padding:8px 10px;cursor:pointer}.sw-pmenu10 .r div:hover{background:#dbe9f8}
.sw-fotos{background:#1f1f1f;height:100%;display:flex;align-items:center;justify-content:center}.sw-fotos img{max-width:92%;max-height:92%}
.sw-wv{position:absolute;left:300px;top:120px;width:420px;z-index:130}.sw-wv .c{padding:16px 20px;font-size:12.5px;line-height:1.5}.sw-wv .logo{font-size:28px;font-weight:300;color:#0067c0;border-bottom:1px solid #ddd;padding-bottom:10px;margin-bottom:10px}
.sw-exp10fita{background:#f5f6f7;border-bottom:1px solid #dadbdc;flex:none}.sw-exp10fita .tabs{display:flex}.sw-exp10fita .tabs span{padding:5px 14px;cursor:pointer}.sw-exp10fita .tabs span.arq{background:#1979ca;color:#fff}.sw-exp10fita .tabs span.sel{background:#fff;border:1px solid #dadbdc;border-bottom-color:#fff}
.sw-exp10fita .painel{background:#fff;padding:10px 14px;border-top:1px solid #dadbdc;display:flex;gap:24px;align-items:center}
.sw-exp11cmd{display:flex;gap:4px;align-items:center;padding:4px 8px;border-bottom:1px solid #e5e5e5;flex:none;background:#f9f9f9}.sw-exp11cmd span{padding:5px 10px;border-radius:4px;cursor:pointer}.sw-exp11cmd span:hover{background:#ebebeb}
.sw-q{margin-top:12px;padding:10px 12px;border:2px solid var(--cor,#3b82f6);border-radius:10px}.sw-q p{margin:0 0 8px}.sw-q .bts{display:flex;gap:8px;flex-wrap:wrap}
.sw-acoes{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}` + ((P.winui && P.winui.css) || "");
    document.head.appendChild(st);
  }

  T.sim_windows = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      const alvoId = at.alvo || "estadio", alvo = WEB.find(w => w.id === alvoId) || WEB[0];
      const inicia = so => {
        st.so = so; st.g = {}; st.ext = false; st.papel = null;
        st.p = { desk: [], down: [], docs: [{ nome: "trabalho-de-ciencias", ext: "docx" }], imgs: [{ nome: "ferias-na-praia", ext: "jpg", arte: "sol" }] };
      };
      if (!st.so) inicia(at.so || (Math.random() < 0.5 ? "10" : "11"));
      const ui = { jan: [], menu: null, start: false, wu: (P.winui ? P.winui.novoEstado() : {}), busca: "", run: false, runTxt: "", dlg: null, chrSel: null, dl: null, exp: "down", expSel: null, fita: false, cfg: "home", paint: null, pm: false, pmSub: false, fotos: null, wv: false, dica: "" };
      const so = () => st.so, w11 = () => st.so === "11";
      const nomeArq = f => f.nome + (st.ext ? "." + f.ext : "");
      const imgDe = f => ARTE[f.arte] || "";
      const salvar = () => ctx.salvar();
      const metas = () => [
        ["versao", "Descubra qual Windows está nesta tela (olhe a barra de tarefas) e responda embaixo."],
        ["sobre", "Confirme a versão: ⚙️ Configurações › Sistema › Sobre, ou a janela Executar (no PC de verdade: tecla ⊞ + R; aqui: clique direito no ⊞ › Executar) e digite winver."],
        ["baixar", `No navegador, salve a imagem “${alvo.tit.replace(/^Papel de parede: /, "")}” (clique direito › Salvar imagem como…).`],
        ["formato", "Descubra o formato (a extensão) da imagem que você baixou e responda embaixo."],
        ["converter", "Converta: abra a imagem no 🎨 Paint › Arquivo › Salvar como › Imagem PNG (ou JPEG)."],
        ["papel", "Coloque a imagem convertida como papel de parede."]
      ];
      const marca = k => { if (!st.g[k]) { st.g[k] = true; salvar(); } };
      const terminou = () => metas().every(([k]) => st.g[k]);
      const abrir = id => { ui.jan = ui.jan.filter(j => j !== id); ui.jan.push(id); ui.start = false; ui.menu = null; };
      const fechar = id => { ui.jan = ui.jan.filter(j => j !== id); if (id === "paint") { ui.paint = null; ui.pm = false; } };
      const todas = () => Object.entries(st.p).flatMap(([p, fs]) => fs.map(f => ({ ...f, pasta: p })));
      const pos = { chrome: [40, 20, 900, 500], exp: [90, 50, 820, 460], cfg: [70, 30, 860, 500], paint: [110, 40, 800, 480], fotos: [160, 60, 680, 420] };

      function checarConversao() {
        if (todas().some(f => f.arte === alvo.id && aceita(f.ext))) { marca("converter"); ui.dica = ""; }
      }
      function definirPapel(f) {
        if (!aceita(f.ext)) return;
        st.papel = f.arte; salvar();
        if (f.arte === alvo.id) marca("papel");
        ui.menu = null; draw(); fim();
      }
      function fim() {
        if (terminou() && !st.status) ctx.concluir("certo", `Pronto! No ${w11() ? "Windows 11" : "Windows 10"} você descobriu a versão, viu que a imagem era <strong>.${alvo.ext}</strong> (o papel de parede não aceita), converteu no Paint e colocou como papel de parede. 🎉`);
      }

      /* ---------- pedaços da tela ---------- */
      const janela = (id, titulo, corpo, extra = "") => {
        const [x, y, wd, h] = pos[id];
        return `<div class="sw-jan" style="left:${x}px;top:${y}px;width:${wd}px;height:${h}px;z-index:${10 + ui.jan.indexOf(id)}" data-jan="${id}" ${extra}>
          <div class="sw-tit"><span class="t">${titulo}</span><button data-a="min:${id}" title="Minimizar">—</button><button title="Maximizar">☐</button><button class="x" data-a="fechar:${id}" title="Fechar">✕</button></div>
          <div class="sw-corpo">${corpo}</div></div>`;
      };
      const linhaArq = (f, i, pasta, selId) => `<tr class="f ${selId === pasta + i ? "sel" : ""}" data-a="sel:${pasta}:${i}" data-dbl="${pasta}:${i}" data-ctx="arq:${pasta}:${i}">
        <td>${f.arte ? `<img src="${imgDe(f)}" alt="">` : "📄 "}${esc(nomeArq(f))}</td><td>15/11/2026 10:${String(20 + i).padStart(2, "0")}</td><td>${f.arte ? TIPO[f.ext] || "Arquivo " + f.ext.toUpperCase() : "Documento do Microsoft Word"}</td><td style="text-align:right">${f.arte ? TAM[f.ext] || "300 KB" : "18 KB"}</td></tr>`;
      const tabelaArqs = (lista, pasta, selId, filtro) => {
        const fs = lista.map((f, i) => [f, i]).filter(([f]) => !filtro || filtro(f));
        return `<table><thead><tr><th>Nome</th><th>Data de modificação</th><th>Tipo</th><th style="text-align:right">Tamanho</th></tr></thead><tbody>
          ${fs.length ? fs.map(([f, i]) => linhaArq(f, i, pasta, selId)).join("") : `<tr><td colspan="4" style="color:#888;padding:14px 8px">${filtro ? "Nenhum item corresponde à sua pesquisa." : "Esta pasta está vazia."}</td></tr>`}</tbody></table>`;
      };
      const nav = (atual, acao) => `<div class="sw-nav">${w11() ? `<div>🏠 Início</div>` : `<div>⭐ Acesso rápido</div>`}${Object.keys(PASTAS).map(p => `<div class="${p === atual ? "sel" : ""}" data-a="${acao}:${p}">${PIC[p]} ${PASTAS[p]}</div>`).join("")}<div style="margin-top:8px">💻 Este Computador</div></div>`;

      function htmlChrome() {
        const sel = WEB.find(w => w.id === ui.chrSel);
        const corpo = `<div class="sw-chr"><div class="sw-abas"><div class="sw-aba">🔎 papel de parede - Pesquisa de imagens</div></div>
          <div class="sw-url">◀ ▶ ⟳ <span class="u">🔒 busca.exemplo/imagens?q=papel+de+parede</span> ⬇️ ⋮
            ${ui.dl ? `<div class="sw-dl"><b>Downloads recentes</b><br>${ui.dl.arte ? `<img src="${ARTE[ui.dl.arte]}" style="width:40px;height:26px;object-fit:cover;vertical-align:middle;margin:6px 6px 0 0">` : ""}${esc(ui.dl.nome + "." + ui.dl.ext)}<br><small style="color:#188038">Concluído · ${TAM[ui.dl.ext] || ""}</small></div>` : ""}</div>
          <div class="sw-pesq"><div class="grid">${WEB.map(w => `<div class="${w.id === ui.chrSel ? "sel" : ""}" data-a="chrimg:${w.id}" data-ctx="chrimg:${w.id}"><img src="${ARTE[w.id]}" alt="${esc(w.tit)}">${esc(w.tit)}<br><small>${esc(w.site)}</small></div>`).join("")}</div>
          ${sel ? `<div class="sw-prev"><img src="${ARTE[sel.id]}" alt="${esc(sel.tit)}" data-ctx="chrimg:${sel.id}"><p><b>${esc(sel.tit)}</b><br>${esc(sel.site)}</p><p style="color:#666">Para salvar: clique com o <b>botão direito</b> na imagem.</p></div>` : `<div class="sw-prev" style="color:#666"><p>Clique numa imagem para ver maior.</p></div>`}</div></div>`;
        return janela("chrome", "Google Chrome", corpo);
      }
      function htmlExp() {
        const lista = st.p[ui.exp];
        const fita = w11()
          ? `<div class="sw-exp11cmd"><span>⊕ Novo ▾</span><span>✂</span><span>⧉</span><span>🗑</span><span>⇅ Classificar ▾</span><span data-a="expexibir">☰ Exibir ▾</span><span>⋯</span></div>`
          : `<div class="sw-exp10fita"><div class="tabs"><span class="arq">Arquivo</span><span>Início</span><span>Compartilhar</span><span class="${ui.fita ? "sel" : ""}" data-a="fita">Exibir</span></div>
             ${ui.fita ? `<div class="painel"><span>▦ Painel de navegação</span><span>☰ Detalhes</span><label data-a="ext" style="cursor:pointer">${st.ext ? "☑" : "☐"} Extensões de nomes de arquivos</label><label>☐ Itens ocultos</label></div>` : ""}</div>`;
        const corpo = `<div style="display:flex;flex-direction:column;height:100%">${fita}
          <div class="sw-end">← → ↑ &nbsp; 💻 › ${PASTAS[ui.exp]}</div>
          <div style="display:flex;flex:1;min-height:0">${nav(ui.exp, "exppasta")}<div class="sw-arqs">${tabelaArqs(lista, ui.exp, ui.expSel)}</div></div></div>`;
        return janela("exp", `${w11() ? "📁" : "📁 |"} ${PASTAS[ui.exp]}`, corpo);
      }
      function htmlCfg() {
        const pag = ui.cfg;
        const lado = w11()
          ? `<div class="lado"><div style="padding:8px 10px 14px">👤 <b>Aluno</b><br><small>Conta local</small></div>${[["sistema", "🖥️ Sistema"], ["bt", "📶 Bluetooth e dispositivos"], ["rede", "🌐 Rede e Internet"], ["perso", "🖌️ Personalização"], ["apps", "🧩 Aplicativos"], ["contas", "👤 Contas"], ["hora", "🕒 Hora e idioma"], ["jogos", "🎮 Jogos"], ["acess", "♿ Acessibilidade"], ["priv", "🛡️ Privacidade e segurança"], ["upd", "🔄 Windows Update"]].map(([k, t]) => `<div class="${pag === k || (k === "sistema" && pag === "sobre") || (k === "perso" && pag === "fundo") ? "sel" : ""}" data-a="cfg:${k}">${t}</div>`).join("")}</div>`
          : (pag === "home" ? "" : `<div class="lado"><div data-a="cfg:home">🏠 Página inicial</div><div style="color:#666;font-size:11px;padding:10px 10px 4px">${pag === "sobre" || pag === "sistema" ? "Sistema" : "Personalização"}</div>${(pag === "sobre" || pag === "sistema" ? [["sistema", "🖥️ Vídeo"], ["x", "🔊 Som"], ["x", "🔔 Notificações e ações"], ["x", "🔋 Energia e suspensão"], ["x", "💾 Armazenamento"], ["sobre", "ℹ️ Sobre"]] : [["fundo", "🖼️ Tela de fundo"], ["x", "🎨 Cores"], ["x", "🔒 Tela de bloqueio"], ["x", "🖌️ Temas"], ["x", "Ａ Fontes"], ["x", "⊞ Iniciar"], ["x", "▭ Barra de tarefas"]]).map(([k, t]) => `<div class="${pag === k ? "sel" : ""}" ${k !== "x" ? `data-a="cfg:${k}"` : ""}>${t}</div>`).join("")}</div>`);
        let conteudo = "";
        const papelAtual = ARTE[st.papel] || ARTE[w11() ? "w11" : "w10"];
        if (pag === "home" && !w11()) conteudo = `<h2 style="text-align:center">Configurações do Windows</h2><div class="tiles">${[["sistema", "🖥️", "Sistema", "Vídeo, som, notificações, energia"], ["x", "⌨️", "Dispositivos", "Bluetooth, impressoras, mouse"], ["x", "📱", "Telefone", "Vincule seu Android, iPhone"], ["x", "🌐", "Rede e Internet", "Wi-Fi, modo avião, VPN"], ["fundo", "🖌️", "Personalização", "Tela de fundo, tela de bloqueio, cores"], ["x", "🧩", "Aplicativos", "Desinstalar, padrões, recursos opcionais"], ["x", "👤", "Contas", "Suas contas, email, sincronização"], ["x", "🕒", "Hora e Idioma", "Fala, região, data"], ["x", "🔄", "Atualização e Segurança", "Windows Update, recuperação"]].map(([k, e, t, d]) => `<div ${k !== "x" ? `data-a="cfg:${k}"` : ""}><span style="font-size:24px">${e}</span><span><b>${t}</b><br><small style="color:#666">${d}</small></span></div>`).join("")}</div>`;
        else if (pag === "sistema" || (pag === "home" && w11())) conteudo = `<h2>Sistema</h2>${["🖥️ Tela", "🔊 Som", "🔔 Notificações", "🔋 Energia", "💾 Armazenamento", "📋 Área de transferência"].map(t => `<div class="lin">${t}<span>›</span></div>`).join("")}<div class="lin" data-a="cfg:sobre">ℹ️ Sobre<small style="color:#666;margin-left:8px">Especificações do dispositivo, renomear o PC, especificações do Windows</small><span>›</span></div>`;
        else if (pag === "sobre") conteudo = `<h2>${w11() ? "Sistema › Sobre" : "Sobre"}</h2><h3>Especificações do dispositivo</h3><div class="lin" style="cursor:default">Nome do dispositivo<span>PC-SALA-INFO-07</span></div><div class="lin" style="cursor:default">Processador<span>Intel(R) Core(TM) i3</span></div><div class="lin" style="cursor:default">RAM instalada<span>8,00 GB</span></div>
          <h3>Especificações do Windows</h3><div class="lin" style="cursor:default;background:#fffbe6"><b>Edição</b><b>${w11() ? "Windows 11 Home" : "Windows 10 Home"}</b></div><div class="lin" style="cursor:default">Versão<span>${w11() ? "24H2" : "22H2"}</span></div><div class="lin" style="cursor:default">Compilação do sistema operacional<span>${w11() ? "26100" : "19045"}</span></div>`;
        else if (pag === "perso") conteudo = `<h2>Personalização</h2><div class="lin" data-a="cfg:fundo">🖼️ Tela de fundo<small style="color:#666;margin-left:8px">Imagem de fundo, cor, apresentação de slides</small><span>›</span></div>${["🎨 Cores", "🖌️ Temas", "🔒 Tela de bloqueio", "⊞ Iniciar", "▭ Barra de tarefas"].map(t => `<div class="lin">${t}<span>›</span></div>`).join("")}`;
        else if (pag === "fundo") conteudo = w11()
          ? `<h2>Personalização › Tela de fundo</h2><img class="prev" src="${papelAtual}" alt="Tela de fundo atual"><div class="lin" style="cursor:default">Personalizar a tela de fundo<span class="sel-falso">Imagem ▾</span></div><div class="lin" style="cursor:default;display:block">Imagens recentes<div class="mini">${[st.papel, "w11", "sol", "galaxia"].filter((x, i, a) => x && a.indexOf(x) === i).slice(0, 4).map(a => `<img src="${ARTE[a]}" alt="">`).join("")}</div></div><div class="lin" style="cursor:default">Escolher uma foto<button class="sw-bt" data-a="procurar">Procurar fotos</button></div><div class="lin" style="cursor:default">Escolher um ajuste para a imagem da área de trabalho<span class="sel-falso">Preencher ▾</span></div>`
          : `<h2>Tela de fundo</h2><img class="prev" src="${papelAtual}" alt="Tela de fundo atual"><p>Tela de fundo</p><span class="sel-falso">Imagem ▾</span><h3>Escolha sua imagem</h3><div class="mini">${[st.papel, "w10", "sol", "galaxia"].filter((x, i, a) => x && a.indexOf(x) === i).slice(0, 4).map(a => `<img src="${ARTE[a]}" alt="">`).join("")}</div><button class="sw-bt" data-a="procurar">Procurar</button><h3>Escolher um ajuste</h3><span class="sel-falso">Preencher ▾</span>`;
        else conteudo = `<h2>Configurações</h2><p>Escolha uma opção ao lado.</p>`;
        return janela("cfg", "Configurações", `<div class="sw-cfg">${lado}<div class="pag">${conteudo}</div></div>`);
      }
      function htmlPaint() {
        const f = ui.paint;
        const menu10 = ui.pm && !w11() ? `<div class="sw-pmenu10"><div class="l">${["📄 Novo", "📂 Abrir", "💾 Salvar"].map(t => `<div>${t}</div>`).join("")}<div class="${ui.pmSub ? "sel" : ""}" data-a="pmsub">💾 Salvar como ▸</div>${["🖨️ Imprimir ▸", "🖼️ Definir como plano de fundo da área de trabalho ▸", "ℹ️ Propriedades", "ℹ️ Sobre o Paint", "✕ Sair"].map(t => `<div>${t}</div>`).join("")}</div><div class="r">${ui.pmSub ? `<b>Salvar uma cópia do documento</b>${[["png", "🖼️ Imagem PNG", "Salva uma foto ou um desenho com alta qualidade"], ["jpg", "🖼️ Imagem JPEG", "Salva uma foto com boa qualidade"], ["bmp", "🖼️ Imagem BMP", "Salva qualquer tipo de desenho"], ["gif", "🖼️ Imagem GIF", "Salva um desenho simples"], ["outros", "📁 Outros formatos", "Abre a caixa de diálogo Salvar como"]].map(([k, t, d]) => `<div data-a="psalvar:${k}"><b>${t}</b><br><small style="color:#666">${d}</small></div>`).join("")}` : `<b>Documentos recentes</b><div>${f ? esc(f.nome + "." + f.ext) : ""}</div>`}</div></div>` : "";
        const menu11 = ui.pm && w11() ? `<div class="sw-menu" style="left:4px;top:30px">${["📄 Novo", "📂 Abrir", "📥 Importar para a tela", "💾 Salvar"].map(t => `<div>${t}</div>`).join("")}<div data-a="pmsub">💾 Salvar como<span class="s">›</span></div>${["🖨️ Imprimir", "🖼️ Definir como tela de fundo", "ℹ️ Propriedades da imagem", "✕ Sair"].map(t => `<div>${t}</div>`).join("")}</div>${ui.pmSub ? `<div class="sw-menu" style="left:238px;top:150px">${[["png", "Imagem PNG"], ["jpg", "Imagem JPEG"], ["bmp", "Imagem BMP"], ["gif", "Imagem GIF"], ["outros", "Outros formatos"]].map(([k, t]) => `<div data-a="psalvar:${k}">${t}</div>`).join("")}</div>` : ""}` : "";
        const corpo = `<div class="sw-paint"><div class="fita">${w11() ? `<span data-a="pmenu">Arquivo</span><span>Editar</span><span>Exibir</span>` : `<span class="arq" data-a="pmenu">Arquivo</span><span>Início</span><span>Exibir</span>`}${menu10}${menu11}</div>
          <div class="ferr">✂️ Selecionar &nbsp; ✏️ Lápis &nbsp; 🪣 Balde &nbsp; 🅰 Texto &nbsp; ⬛ Formas &nbsp; 🎨 Cores</div>
          <div class="tela">${f ? `<img src="${imgDe(f)}" alt="">` : `<div style="width:420px;height:260px;background:#fff"></div>`}</div></div>`;
        return janela("paint", `${f ? esc(f.nome) : "Sem título"} - Paint`, corpo);
      }
      function htmlFotos() {
        const f = ui.fotos; if (!f) return "";
        return janela("fotos", `${esc(f.nome + "." + f.ext)}${w11() ? " - Fotos" : " - Fotos"}`, `<div class="sw-fotos"><img src="${imgDe(f)}" alt=""></div>`);
      }
      function htmlDlg() {
        const d = ui.dlg; if (!d) return "";
        const lista = st.p[d.pasta];
        const filtro = d.modo === "fundo" ? f => f.arte && aceita(f.ext) : d.modo === "paintabrir" ? f => !!f.arte : null;
        const titulo = d.modo === "salvar" ? "Salvar como" : "Abrir";
        const tipoTxt = d.modo === "salvar" ? (d.ext === "webp" ? "Arquivo WEBP (*.webp)" : { png: "PNG (*.png)", jpg: "JPEG (*.jpg;*.jpeg;*.jpe;*.jfif)", bmp: "Bitmap de 24 bits (*.bmp;*.dib)", gif: "GIF (*.gif)" }[d.ext] || "")
          : d.modo === "fundo" ? "Arquivos de imagem (*.jpg; *.jpeg; *.bmp; *.dib; *.png; *.jfif; *.jpe; *.gif; *.tif; *.tiff; *.wdp)" : "Todos os arquivos de imagem";
        return `<div class="sw-jan sw-dlg" style="z-index:120"><div class="sw-tit"><span class="t">${titulo}</span><button class="x" data-a="dlgcancel">✕</button></div>
          <div class="sw-end">← → ↑ &nbsp; 💻 › ${PASTAS[d.pasta]}</div>
          <div style="display:flex;flex:1;min-height:0">${nav(d.pasta, "dlgpasta")}<div class="sw-arqs">${tabelaArqs(lista, d.pasta, d.sel != null ? d.pasta + d.sel : null, filtro)}</div></div>
          <div class="sw-pe">${d.modo === "salvar" ? `<span>Nome:</span><input id="sw-nome" value="${esc(d.nome)}" spellcheck="false"><span></span><span>Tipo:</span><span class="tp">${tipoTxt} ▾</span><span></span>
            <div class="bts"><button class="sw-bt pri" data-a="dlgok">Salvar</button><button class="sw-bt" data-a="dlgcancel">Cancelar</button></div>`
            : `<span>Nome:</span><input readonly value="${d.sel != null ? esc(nomeArq(lista[d.sel])) : ""}"><span class="tp">${tipoTxt} ▾</span>
            <div class="bts"><button class="sw-bt pri" data-a="dlgok">${d.modo === "fundo" ? (w11() ? "Escolher esta imagem" : "Escolher imagem") : "Abrir"}</button><button class="sw-bt" data-a="dlgcancel">Cancelar</button></div>`}</div></div>`;
      }
      function htmlStart() {
        if (!ui.start) return "";
        const WU = P.winui; if (!WU) return "";
        return WU.iniciar(so(), { estado: ui.wu, busca: ui.busca, buscaId: w11() ? "sw-busca" : null,
          extraRes: [{ casa: q => /^win/.test(q), attr: 'data-a="app:winver"', ic: "▶️", nome: "winver — Executar comando" }],
          attr: id => ["cfg", "exp", "chrome", "paint", "fotos"].includes(id) ? `data-a="app:${id}"` : "" });
      }
      function htmlMenu() {
        const m = ui.menu; if (!m) return "";
        let itens = [];
        if (m.tipo === "desk") itens = w11()
          ? [["🗔", "Exibir", "›"], ["⇅", "Classificar por", "›"], ["⟳", "Atualizar"], "-", ["⊕", "Novo", "›"], "-", ["🖥️", "Configurações de exibição", "", "cfgsis"], ["🖌️", "Personalizar", "", "cfgfundo"], "-", ["⋯", "Mostrar mais opções"]]
          : [["", "Exibir", "›"], ["", "Classificar por", "›"], ["", "Atualizar"], "-", ["", "Colar", "", "", true], ["", "Desfazer Renomear"], "-", ["", "Novo", "›"], "-", ["🖥️", "Configurações de exibição", "", "cfgsis"], ["🖌️", "Personalizar", "", "cfgfundo"]];
        else if (m.tipo === "winx") itens = [["", "Aplicativos instalados"], ["", "Opções de Energia"], ["", "Visualizador de Eventos"], ["", "Sistema", "", "sistema"], ["", "Gerenciador de Dispositivos"], ["", "Conexões de Rede"], ["", "Gerenciamento de Disco"], "-", ["", "Gerenciador de Tarefas"], ["", "Configurações", "", "cfgsis"], ["", "Explorador de Arquivos", "", "abrexp"], ["", "Pesquisar"], ["", "Executar", "", "executar"], "-", ["", "Desligar ou sair", "›"], ["", "Área de Trabalho"]];
        else if (m.tipo === "chrimg") itens = [["", "Abrir imagem em uma nova guia"], ["", "Salvar imagem como...", "", "chrsalvar"], ["", "Copiar imagem"], ["", "Copiar endereço da imagem"], "-", ["", "Pesquisar imagem com o Google Lens"], "-", ["", "Inspecionar"]];
        else if (m.tipo === "arq") {
          const f = st.p[m.pasta][m.i], img = !!f.arte, ok = img && aceita(f.ext);
          const classico = !w11() || m.classico;
          itens = classico
            ? [["", "Abrir", "", "abrirarq"], ...(ok ? [["", "Definir como plano de fundo da área de trabalho", "", "papel"], ["", "Editar", "", "paint"], ["", "Imprimir"], ["", "Girar para a direita"], ["", "Girar para a esquerda"]] : []), "-", ["", "Abrir com", "›", "abrircom"], ["", "Compartilhar"], "-", ["", "Enviar para", "›"], "-", ["", "Recortar"], ["", "Copiar"], "-", ["", "Criar atalho"], ["", "Excluir"], ["", "Renomear"], "-", ["", "Propriedades"]]
            : [["📂", "Abrir", "", "abrirarq"], ["", "Abrir com", "›", "abrircom"], ...(ok ? [["🖼️", "Definir como plano de fundo da área de trabalho", "", "papel"], ["↻", "Girar para a direita"], ["↺", "Girar para a esquerda"]] : []), ["🗜️", "Compactar para arquivo ZIP"], ["📋", "Copiar como caminho"], ["ℹ️", "Propriedades"], "-", ["⋯", "Mostrar mais opções", "", "classico"]];
        } else if (m.tipo === "abrircom") itens = [["🎨", "Paint", "", "paint"], ["🖼️", "Fotos", "", "abrirarq"], ["🌐", "Google Chrome"], "-", ["", "Escolher outro aplicativo"]];
        else if (m.tipo === "expexibir") itens = [["", "Ícones grandes"], ["", "Ícones médios"], ["", "Lista"], ["☰", "Detalhes"], "-", ["", "Mostrar", "›", "mostrar"]];
        else if (m.tipo === "mostrar") itens = [["", "Painel de navegação"], ["", "Painel de detalhes"], ["", "Painel de visualização"], "-", ["", "Caixas de seleção de item"], [st.ext ? "✔" : "", "Extensões de nomes de arquivos", "", "ext"], ["", "Itens ocultos"]];
        const icrow = m.tipo === "arq" && w11() && !m.classico ? `<div class="sw-icrow"><span title="Recortar">✂</span><span title="Copiar">⧉</span><span title="Renomear">Ａ</span><span title="Compartilhar">⇪</span><span title="Excluir">🗑</span></div>` : "";
        return `<div class="sw-menu" style="left:${m.x}px;top:${m.y}px">${icrow}${itens.map(it => it === "-" ? "<hr>" : `<div class="${it[4] ? "off" : ""}" ${it[3] ? `data-a="m:${it[3]}"` : `data-a="m:nada"`}><span class="i">${it[0] || ""}</span>${it[1]}${it[2] ? `<span class="s">${it[2]}</span>` : ""}</div>`).join("")}</div>`;
      }
      function htmlRun() {
        if (!ui.run) return "";
        return `<div class="sw-jan" style="left:12px;top:${w11() ? 372 : 382}px;width:400px;height:190px;z-index:130"><div class="sw-tit"><span class="t">Executar</span><button class="x" data-a="runx">✕</button></div>
          <div class="c" style="padding:12px 16px;font-size:12.5px"><p style="margin:0 0 10px">📨 Digite o nome de um programa, pasta, documento ou recurso da Internet e o Windows o abrirá para você.</p>
          <div style="display:flex;gap:8px;align-items:center"><b>Abrir:</b><input id="sw-run" style="flex:1;border:1px solid #888;padding:4px 6px" value="${esc(ui.runTxt)}" spellcheck="false" autocomplete="off"></div>
          <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px"><button class="sw-bt pri" data-a="runok">OK</button><button class="sw-bt" data-a="runx">Cancelar</button><button class="sw-bt">Procurar...</button></div></div></div>`;
      }
      function htmlWinver() {
        if (!ui.wv) return "";
        return `<div class="sw-jan sw-wv"><div class="sw-tit"><span class="t">Sobre o Windows</span><button class="x" data-a="wvok">✕</button></div><div class="c"><div class="logo">${w11() ? "Windows 11" : "Windows 10"}</div>
          Microsoft Windows<br>Versão ${w11() ? "24H2 (Compilação do SO 26100)" : "22H2 (Compilação do SO 19045)"}<br>© Microsoft Corporation. Todos os direitos reservados.<br><br>O sistema operacional ${w11() ? "Windows 11 Home" : "Windows 10 Home"} e sua interface de usuário são protegidos por leis de marca registrada.
          <div style="text-align:right;margin-top:12px"><button class="sw-bt pri" data-a="wvok">OK</button></div></div></div>`;
      }
      function htmlTela() {
        const fundo = ARTE[st.papel] || ARTE[w11() ? "w11" : "w10"];
        const jan = ui.jan.filter(j => !(ui.min || {})[j]).map(j => ({ chrome: htmlChrome, exp: htmlExp, cfg: htmlCfg, paint: htmlPaint, fotos: htmlFotos })[j]()).join("");
        const icDesk = [`<div class="sw-ic" data-dbl="app:lixeira"><span class="e">🗑️</span>Lixeira</div>`, `<div class="sw-ic" data-dbl="app:chrome"><span class="e">🌐</span>Google Chrome</div>`, `<div class="sw-ic" data-dbl="app:exp"><span class="e">📁</span>Explorador de Arquivos</div>`,
          ...st.p.desk.map((f, i) => `<div class="sw-ic" data-dbl="desk:${i}" data-ctx="arq:desk:${i}">${f.arte ? `<img src="${imgDe(f)}" alt="">` : `<span class="e">📄</span>`}${esc(nomeArq(f))}</div>`)].join("");
        const tb = id => ui.jan.includes(id) ? "ativo" : "";
        const WU = P.winui, LG = WU ? WU.logo(so()) : "⊞", abertos = `<button class="${tb("exp")}" data-a="app:exp" title="Explorador de Arquivos">📁</button><button class="${tb("chrome")}" data-a="app:chrome" title="Google Chrome">🌐</button>${ui.jan.includes("cfg") ? `<button class="ativo" data-a="app:cfg" title="Configurações">⚙️</button>` : ""}${ui.jan.includes("paint") ? `<button class="ativo" data-a="app:paint" title="Paint">🎨</button>` : ""}${ui.jan.includes("fotos") ? `<button class="ativo" data-a="app:fotos" title="Fotos">🖼️</button>` : ""}`;
        const bar = w11()
          ? `<div class="sw-bar">${WU ? WU.widget11() : ""}<button class="sw-ini" data-a="start" data-ctx="winx" title="Iniciar">${LG}</button><button data-a="start" title="Pesquisar">🔍</button><button title="Visão de Tarefas" class="wu-tv">⧉</button>${abertos}${WU ? WU.bandeja("11", "10:35", "15/11/2026") : `<span class="sw-relogio">10:35<br>15/11/2026</span>`}</div>`
          : `<div class="sw-bar"><button class="sw-ini" data-a="start" data-ctx="winx" title="Iniciar">${LG}</button><input class="sw-busca10" id="sw-busca10" placeholder="Digite aqui para pesquisar" value="${esc(ui.busca)}" autocomplete="off" aria-label="Pesquisar"><button title="Visão de Tarefas" class="wu-tv">⧉</button>${abertos}${WU ? WU.bandeja("10", "10:35", "15/11/2026") : `<span class="sw-relogio">10:35<br>15/11/2026</span>`}</div>`;
        return `<img class="sw-fundo" src="${fundo}" alt="" data-ctx="desk"><div class="sw-icons">${icDesk}</div>${jan}${htmlDlg()}${htmlRun()}${htmlWinver()}${htmlStart()}${htmlMenu()}${bar}`;
      }

      /* 🃏 CARTÃO DA MISSÃO (21/11/2026, mesmo estilo dos simuladores sim_pc): a meta da vez em destaque, com número grande,
         o mousezinho do gesto e a barrinha de progresso; a lista completa continua a um toque ("ver todas as metas") */
      function cartao(ms) {
        const i = ms.findIndex(([k]) => !st.g[k]), feito = i < 0, t = feito ? "Você cumpriu todas as metas! 🎉" : ms[i][1];
        const g = !feito && P.gesto && P.gesto.deTexto(t);
        return `<div class="sw-cartao"><div class="swc-num">${feito ? "<b>🏆</b>" : `<b>${i + 1}</b>de ${ms.length}`}</div>
          <div class="swc-meio"><div class="swc-linha">${g ? `<span class="swc-gest">${P.gesto(g[0], g[1])}</span>` : ""}<span class="swc-t">${t}</span></div>
          <div class="swc-prog">${ms.map(([k], j) => `<i class="${st.g[k] ? "ok" : j === i ? "at" : ""}"></i>`).join("")}</div>
          <details class="swc-todas"><summary>📋 ver todas as metas</summary><ul class="sw-check">${ms.map(([k, tt], j) => `<li class="${st.g[k] ? "ok" : ""}">${st.g[k] ? "✅" : "⬜"} <b>${j + 1}.</b> ${tt}</li>`).join("")}</ul></details></div></div>`;
      }
      /* ---------- desenho ---------- */
      function draw() {
        const ms = metas();
        const perguntaV = !st.g.versao ? `<div class="sw-q"><p><b>1️⃣ Qual Windows está nesta tela?</b> Olhe onde fica o botão Iniciar (⊞) na barra de tarefas.</p><div class="bts"><button class="btn btn-sec" data-r="v:10">Windows 10</button><button class="btn btn-sec" data-r="v:11">Windows 11</button></div></div>` : "";
        const perguntaF = st.g.baixar && !st.g.formato ? `<div class="sw-q"><p><b>4️⃣ Qual é o formato da imagem que você baixou?</b> Dica: no 📁 Explorador de Arquivos › Downloads, olhe a coluna <b>Tipo</b> ou ligue <b>Exibir › ${w11() ? "Mostrar › " : ""}Extensões de nomes de arquivos</b>.</p><div class="bts">${["jpg", "png", "webp"].map(e => `<button class="btn btn-sec" data-r="f:${e}">.${e}</button>`).join("")}</div></div>` : "";
        c.innerHTML = `<div class="sw sw${so()}">
          ${cartao(ms)}
          ${ui.dica ? `<p class="sw-dica">${P.gesto ? P.gesto.comInstrucao(ui.dica) : ui.dica}</p>` : ""}
          <div class="sw-moldura"><div class="sw-tela">${htmlTela()}</div></div>
          ${perguntaV}${perguntaF}
          <div class="sw-acoes"><button class="btn btn-link" data-r="reset">↺ Recomeçar</button>${terminou() ? `<button class="btn btn-sec" data-r="outro">🔄 Treinar no ${w11() ? "Windows 10" : "Windows 11"}</button>` : ""}</div></div>`;
        { const d = c.querySelector(".swc-todas"); if (d) { d.open = !!ui.todas; d.ontoggle = () => { ui.todas = d.open; }; } }
        const mold = c.querySelector(".sw-moldura"), tela = c.querySelector(".sw-tela");
        const ajusta = () => { const k = mold.clientWidth / 1000; tela.style.transform = `scale(${k})`; mold.style.height = (600 * k) + "px"; };
        ajusta(); if (window.ResizeObserver) { if (c._ro) c._ro.disconnect(); c._ro = new ResizeObserver(ajusta); c._ro.observe(mold); }
        if (P.winui) P.winui.ligar(c, ui.wu, draw);
        const bus = c.querySelector("#sw-busca") || c.querySelector("#sw-busca10");
        if (bus) { if (ui.start) { bus.focus(); bus.setSelectionRange(bus.value.length, bus.value.length); } bus.onclick = e => { e.stopPropagation(); if (!ui.start) { ui.start = true; ui.menu = null; draw(); } }; bus.oninput = () => { ui.busca = bus.value; ui.start = true; draw(); }; bus.onkeydown = e => { if (e.key === "Enter") { const r = c.querySelector(".res [data-a]"); if (r) acao(r.dataset.a); } }; }
        const rn = c.querySelector("#sw-run");
        if (rn) { rn.focus(); rn.setSelectionRange(rn.value.length, rn.value.length); rn.oninput = () => { ui.runTxt = rn.value; }; rn.onkeydown = e => { if (e.key === "Enter") acao("runok"); }; }
        const nm = c.querySelector("#sw-nome"); if (nm) nm.oninput = () => { ui.dlg.nome = nm.value; };
      }
      const pt = (e) => { const r = c.querySelector(".sw-tela").getBoundingClientRect(), k = r.width / 1000; return [Math.min((e.clientX - r.left) / k, 760), Math.min((e.clientY - r.top) / k, 360)]; };

      function acao(a, e) {
        const [cmd, x1, x2] = a.split(":");
        if (cmd !== "m" && cmd !== "pmsub" && cmd !== "expexibir") ui.menu = null;
        switch (cmd) {
          case "start": ui.start = !ui.start; ui.busca = ""; ui.menu = null; if (ui.wu) { ui.wu.todos = false; ui.wu.energia = false; } break;
          case "app":
            if (x1 === "lixeira") break;
            if (x1 === "winver") { ui.wv = true; ui.start = false; marca("sobre"); break; }
            if (x1 === "cfg" && !ui.jan.includes("cfg")) ui.cfg = w11() ? "sistema" : "home";
            if (x1 === "fotos" && !ui.fotos) ui.fotos = todas().find(f => f.arte) || null;
            if (x1 === "fotos" && !ui.fotos) break;
            ui.min = ui.min || {}; ui.min[x1] = false; abrir(x1); break;
          case "min": ui.min = ui.min || {}; ui.min[x1] = true; break;
          case "fechar": fechar(x1); break;
          case "chrimg": ui.chrSel = x1; break;
          case "exppasta": ui.exp = x1; ui.expSel = null; break;
          case "sel": ui.expSel = x1 + x2; break;
          case "fita": ui.fita = !ui.fita; break;
          case "ext": st.ext = !st.ext; salvar(); ui.menu = null; break;
          case "expexibir": { const [mx, my] = e ? pt(e) : [400, 120]; ui.menu = { tipo: "expexibir", x: mx, y: my }; break; }
          case "cfg": ui.cfg = x1; if (x1 === "sobre") marca("sobre"); break;
          case "procurar": ui.dlg = { modo: "fundo", pasta: "imgs", sel: null }; ui.dica = ""; break;
          case "dlgpasta": ui.dlg.pasta = x1; ui.dlg.sel = null;
            if (ui.dlg.modo === "fundo" && x1 !== "imgs" && st.p[x1].some(f => f.arte === alvo.id && !aceita(f.ext)) && !st.p[x1].some(f => f.arte === alvo.id && aceita(f.ext)))
              ui.dica = `🤔 Cadê a imagem que você baixou? Ela está em ${PASTAS[x1]}, mas é <b>.${alvo.ext}</b>. Esta janela só mostra os formatos que o papel de parede aceita (veja o “Tipo” embaixo: .jpg, .png, .bmp, .gif…). Converta no Paint primeiro!`;
            break;
          case "dlgcancel": ui.dlg = null; break;
          case "dlgok": {
            const d = ui.dlg;
            if (d.modo === "salvar") {
              const nome = String(d.nome || "").trim().replace(/\.[a-z0-9]+$/i, "") || "imagem";
              const lista = st.p[d.pasta]; const ix = lista.findIndex(f => f.nome === nome && f.ext === d.ext);
              const novo = { nome, ext: d.ext, arte: d.arte }; if (ix >= 0) lista[ix] = novo; else lista.push(novo);
              if (d.origem === "chrome") { ui.dl = { nome, ext: d.ext, arte: d.arte }; setTimeout(() => { ui.dl = null; if (c.isConnected) draw(); }, 6000); if (d.arte === alvo.id) marca("baixar"); }
              if (d.origem === "paint") { ui.paint = novo; }
              ui.dlg = null; salvar(); checarConversao();
            } else {
              const f = d.sel != null ? st.p[d.pasta][d.sel] : null; if (!f) break;
              if (d.modo === "fundo") { ui.dlg = null; definirPapel(f); return; }
            }
            break;
          }
          case "dlgsel": break;
          case "pmenu": ui.pm = !ui.pm; ui.pmSub = false; break;
          case "pmsub": ui.pmSub = true; break;
          case "psalvar": {
            const f = ui.paint; ui.pm = false; ui.pmSub = false; if (!f) break;
            const ext = x1 === "outros" ? "png" : x1;
            ui.dlg = { modo: "salvar", origem: "paint", pasta: "imgs", nome: f.nome, ext, arte: f.arte }; break;
          }
          case "wvok": ui.wv = false; break;
          case "runx": ui.run = false; break;
          case "runok": {
            const q = ui.runTxt.trim().toLowerCase(); ui.run = false; ui.runTxt = "";
            if (q === "winver") { ui.wv = true; marca("sobre"); }
            else if (q === "mspaint") { ui.paint = null; abrir("paint"); }
            else if (q === "explorer") abrir("exp");
            else if (q === "control" || q === "ms-settings:") { ui.cfg = w11() ? "sistema" : "home"; abrir("cfg"); }
            else if (q) ui.dica = `O Windows não encontrou “${esc(q)}”. Para ver a versão, digite <b>winver</b> (tudo junto) e aperte Enter.`;
            break;
          }
          case "m": {
            const m = ui.menu; ui.menu = null;
            if (x1 === "cfgsis") { ui.cfg = "sistema"; abrir("cfg"); }
            if (x1 === "cfgfundo") { ui.cfg = "fundo"; abrir("cfg"); }
            if (x1 === "sistema") { ui.cfg = "sobre"; abrir("cfg"); marca("sobre"); }
            if (x1 === "abrexp") abrir("exp");
            if (x1 === "executar") { ui.run = true; ui.runTxt = ""; }
            if (x1 === "chrsalvar") { const w = WEB.find(q => q.id === m.id); ui.dlg = { modo: "salvar", origem: "chrome", pasta: "down", nome: w.nome, ext: w.ext, arte: w.id }; }
            if (m && m.tipo === "arq") {
              const f = st.p[m.pasta][m.i];
              if (x1 === "abrirarq" && f.arte) { ui.fotos = f; ui.min = ui.min || {}; ui.min.fotos = false; abrir("fotos"); }
              if (x1 === "papel") { definirPapel(f); return; }
              if (x1 === "paint" && f.arte) { ui.paint = f; ui.min = ui.min || {}; ui.min.paint = false; abrir("paint"); }
              if (x1 === "abrircom") ui.menu = { tipo: "abrircom", x: Math.min(m.x + 200, 760), y: m.y + 40, pasta: m.pasta, i: m.i, f };
              if (x1 === "classico") ui.menu = { ...m, classico: true };
            }
            if (m && m.tipo === "abrircom") {
              if (x1 === "paint") { ui.paint = m.f; ui.min = ui.min || {}; ui.min.paint = false; abrir("paint"); }
              if (x1 === "abrirarq") { ui.fotos = m.f; abrir("fotos"); }
            }
            if (m && m.tipo === "expexibir" && x1 === "mostrar") ui.menu = { tipo: "mostrar", x: Math.min(m.x + 160, 760), y: m.y + 110 };
            if (x1 === "ext") { st.ext = !st.ext; salvar(); }
            break;
          }
        }
        draw();
      }

      c.onclick = e => {
        const r = e.target.closest("[data-r]");
        if (r) {
          const [k, v] = r.dataset.r.split(":");
          if (k === "v") { if (v === st.so) { marca("versao"); draw(); fim(); } else ctx.errou(`Olhe de novo a barra de tarefas: no <b>Windows 11</b> o botão Iniciar (⊞) fica <b>no centro</b>; no <b>Windows 10</b>, <b>no canto esquerdo</b>. Para ter certeza, abra ⚙️ Configurações › Sistema › Sobre.`); }
          if (k === "f") { if (v === alvo.ext) { marca("formato"); draw(); fim(); } else ctx.errou(`Ainda não. No Explorador de Arquivos › Downloads, a coluna <b>Tipo</b> mostra “${TIPO[alvo.ext]}”. Ou ligue Exibir › ${w11() ? "Mostrar › " : ""}Extensões de nomes de arquivos para ver o final do nome.`); }
          if (k === "reset") { const s0 = st.so; inicia(s0); Object.assign(ui, { jan: [], menu: null, dlg: null, paint: null, fotos: null, wv: false, dica: "", start: false }); salvar(); draw(); }
          if (k === "outro") { inicia(w11() ? "10" : "11"); Object.assign(ui, { jan: [], menu: null, dlg: null, paint: null, fotos: null, wv: false, dica: "", start: false }); salvar(); draw(); }
          return;
        }
        const tela = e.target.closest(".sw-tela"); if (!tela) return;
        const t = e.target.closest("[data-a]");
        if (t) {
          const a = t.dataset.a;
          if (a.startsWith("sel:") && ui.dlg && t.closest(".sw-dlg")) { const [, , i] = a.split(":"); ui.dlg.sel = +i; draw(); return; }
          if (a.startsWith("chrimg:") || a === "expexibir") { acao(a, e); return; }
          acao(a, e); return;
        }
        if (ui.menu || ui.start) { ui.menu = null; if (!e.target.closest(".sw-start,.wu-start,.sw-busca10")) ui.start = false; draw(); }
      };
      c.ondblclick = e => {
        const t = e.target.closest("[data-dbl]"); if (!t || !e.target.closest(".sw-tela")) return;
        const [k, v, i] = t.dataset.dbl.split(":");
        if (k === "app") { acao("app:" + v); return; }
        if (t.closest(".sw-dlg") && ui.dlg) { if (ui.dlg.modo !== "salvar") { ui.dlg.sel = +i; acao("dlgok"); } return; }
        const pasta = k === "desk" ? "desk" : k, ix = k === "desk" ? +v : +i;
        const f = st.p[pasta] && st.p[pasta][ix]; if (!f || !f.arte) return;
        ui.fotos = f; ui.min = ui.min || {}; ui.min.fotos = false; abrir("fotos"); draw();
      };
      c.oncontextmenu = e => {
        const tela = e.target.closest(".sw-tela"); if (!tela) return;
        e.preventDefault();
        const t = e.target.closest("[data-ctx]"); const [x, y] = pt(e);
        ui.start = false;
        if (!t) { ui.menu = null; draw(); return; }
        const [k, a, b] = t.dataset.ctx.split(":");
        if (k === "desk") ui.menu = { tipo: "desk", x, y };
        else if (k === "winx") ui.menu = { tipo: "winx", x: w11() ? 360 : 2, y: w11() ? 150 : 150 };
        else if (k === "chrimg") { ui.chrSel = a; ui.menu = { tipo: "chrimg", id: a, x, y }; }
        else if (k === "arq") { if (t.closest(".sw-dlg")) return; ui.menu = { tipo: "arq", pasta: a, i: +b, x, y }; ui.expSel = a + b; }
        draw();
      };
      draw();
    }
  };
})();
