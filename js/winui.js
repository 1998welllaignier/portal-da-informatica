/* 🪟 winui.js — peças do Windows 10 e 11 COMPARTILHADAS pelos simuladores (simpc.js e simwin.js), para os dois
   ficarem iguais e parecidos com o Windows de verdade da sala (pedido do professor, 16/11/2026).
   - botão Iniciar com o ícone de 4 quadrados (desenho simples, sem copiar a marca);
   - menu Iniciar do Windows 10: trilho da esquerda (☰, conta, Documentos, Imagens, Configurações, Ligar/Desligar),
     "Mais usados" + lista em ordem alfabética com as letras, e os blocos coloridos à direita;
   - menu Iniciar do Windows 11: pesquisa no topo, "Fixado" com "Todos os aplicativos ›", "Recomendado" com "Mais ›",
     conta e botão de energia embaixo (Suspender, Desligar, Reiniciar);
   - bandeja do sistema (^, rede, som, POR PTB2, relógio e data, notificações) e o widget do clima no Windows 11.
   O simulador passa os aplicativos que funcionam nele (attr = como abrir) e o estado (P.winui.novoEstado()). */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  /* aplicativos que aparecem no menu (os que o simulador não abre ficam na lista, como no Windows, mas não fazem nada) */
  const CATALOGO = {
    alarmes: ["⏰", "Alarmes e Relógio"], calc: ["🧮", "Calculadora"], camera: ["📷", "Câmera"], cfg: ["⚙️", "Configurações"],
    email: ["📧", "Email"], exp: ["📁", "Explorador de Arquivos"], fotos: ["🖼️", "Fotos"], chrome: ["🌐", "Google Chrome"],
    mapas: ["🗺️", "Mapas"], store: ["🛍️", "Microsoft Store"], notas: ["📝", "Bloco de Notas"], paint: ["🎨", "Paint"],
    tempo: ["⛅", "Previsão do Tempo"], musica: ["🎵", "Media Player"], lixeira: ["🗑️", "Lixeira"], video: ["🎬", "Editor de Vídeo"]
  };
  const COR_BLOCO = { calc: "#4b4b4b", cfg: "#5c2d91", email: "#0063b1", exp: "#c79100", fotos: "#0078d4", chrome: "#2d7d32", notas: "#00577a", paint: "#b4009e", mapas: "#00897b", tempo: "#1e88e5", store: "#0063b1", camera: "#37474f" };
  const css = `
.wu-logo{display:inline-grid;grid-template-columns:1fr 1fr;gap:2px;width:18px;height:18px;vertical-align:middle}
.wu-logo i{display:block;border-radius:1px}.wu-l10 i{background:#fff}.wu-l11 i{background:linear-gradient(135deg,#3ec1ff,#0067c0)}
.wu-start{position:absolute;z-index:900;font-family:"Segoe UI",system-ui,sans-serif;user-select:none}
.wu-s10{left:0;bottom:40px;width:620px;height:480px;background:rgba(32,32,32,.97);color:#fff;display:flex;box-shadow:4px -4px 18px rgba(0,0,0,.45)}
.wu-s10 .tr{width:48px;display:flex;flex-direction:column;justify-content:space-between;padding:4px 0}
.wu-s10 .tr span{display:block;height:44px;line-height:44px;text-align:center;font-size:17px;cursor:pointer}.wu-s10 .tr span:hover{background:#3a3a3a}
.wu-s10 .ls{width:250px;overflow-y:auto;padding:8px 4px;scrollbar-width:thin;scrollbar-color:#666 transparent}
.wu-s10 .ls .h{color:#ccc;font-size:12px;padding:10px 10px 4px}.wu-s10 .ls .l{font-size:13px;padding:6px 10px;margin-top:2px;display:inline-block;cursor:default}
.wu-s10 .ls .a{display:flex;gap:10px;align-items:center;padding:5px 10px;font-size:13px;cursor:pointer}.wu-s10 .ls .a:hover{background:#3a3a3a}
.wu-s10 .ls .a .q{width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:17px;background:#0078d4}
.wu-s10 .bl{flex:1;padding:12px 10px;overflow:hidden}.wu-s10 .bl h5{margin:2px 4px 8px;font-size:12px;font-weight:600;color:#eee}
.wu-s10 .bl .g{display:grid;grid-template-columns:repeat(3,94px);gap:4px;margin-bottom:10px}
.wu-s10 .bl .t{height:94px;position:relative;cursor:pointer;color:#fff}.wu-s10 .bl .t:hover{outline:2px solid rgba(255,255,255,.6);outline-offset:-2px}
.wu-s10 .bl .t .e{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-size:34px}.wu-s10 .bl .t .n{position:absolute;left:8px;bottom:6px;font-size:11.5px}
.wu-s10 .bl .t.w{grid-column:span 2}
.wu-s11{left:50%;margin-left:-300px;bottom:54px;width:600px;height:620px;max-height:calc(100% - 66px);background:rgba(242,242,242,.97);color:#111;border:1px solid #d5d5d5;border-radius:8px;box-shadow:0 8px 28px rgba(0,0,0,.28);display:flex;flex-direction:column}
.wu-s11 .bx{margin:22px 30px 6px;position:relative}.wu-s11 .bx input,.wu-s11 .bx div{width:100%;box-sizing:border-box;border:1px solid #c8c8c8;border-bottom:2px solid #0067c0;border-radius:20px;padding:9px 14px 9px 38px;font:13px "Segoe UI",system-ui,sans-serif;background:#fff;color:#555;outline:none}
.wu-s11 .bx input:focus{outline:none;box-shadow:none}
.wu-s11 .bx::before{content:"🔍";position:absolute;left:13px;top:8px;font-size:14px}
.wu-s11 .sec{display:flex;justify-content:space-between;align-items:center;margin:16px 42px 8px}.wu-s11 .sec b{font-size:14px;font-weight:600}
.wu-s11 .sec span{font-size:12px;background:#fff;border:1px solid #ddd;border-radius:4px;padding:3px 9px;cursor:pointer}.wu-s11 .sec span:hover{background:#f7f7f7}
.wu-s11 .gr{display:grid;grid-template-columns:repeat(6,1fr);gap:2px;margin:0 30px}
.wu-s11 .gr div{text-align:center;padding:10px 2px 8px;border-radius:5px;cursor:pointer;font-size:11.5px;line-height:1.25}.wu-s11 .gr div:hover{background:rgba(255,255,255,.9)}
.wu-s11 .gr .e{font-size:28px;display:block;margin-bottom:5px}
.wu-s11 .rc{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin:0 30px}.wu-s11 .rc div{display:flex;gap:10px;align-items:center;padding:7px 10px;border-radius:5px;font-size:12.5px;cursor:default}.wu-s11 .rc div:hover{background:rgba(255,255,255,.9)}
.wu-s11 .rc .e{font-size:22px}.wu-s11 .rc small{display:block;color:#666;font-size:11px}
.wu-s11 .td{flex:1;overflow-y:auto;margin:0 30px;scrollbar-width:thin}.wu-s11 .td .l{font-size:12.5px;padding:8px 10px 2px;color:#333;font-weight:600}
.wu-s11 .td .a,.wu-s10 .res .a,.wu-s11 .res .a{display:flex;gap:12px;align-items:center;padding:6px 10px;border-radius:5px;font-size:13px;cursor:pointer}.wu-s11 .td .a:hover,.wu-s11 .res .a:hover{background:rgba(255,255,255,.9)}
.wu-s11 .rod{margin-top:auto;height:62px;border-top:1px solid #ddd;background:rgba(232,232,232,.9);border-radius:0 0 8px 8px;display:flex;align-items:center;justify-content:space-between;padding:0 44px;position:relative}
.wu-s11 .rod .u{display:flex;gap:10px;align-items:center;font-size:13px}.wu-s11 .rod .u i{width:30px;height:30px;border-radius:50%;background:#cfd8e3;display:flex;align-items:center;justify-content:center;font-style:normal}
.wu-s11 .rod .p{font-size:18px;cursor:pointer;padding:6px 10px;border-radius:5px}.wu-s11 .rod .p:hover{background:#fff}
.wu-pw{position:absolute;bottom:56px;background:#f9f9f9;color:#111;border:1px solid #ccc;border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,.25);padding:4px;font-size:13px;z-index:5}
.wu-s11 .wu-pw{right:30px}.wu-s10 .wu-pw{left:52px;bottom:8px;background:#2b2b2b;color:#fff;border-color:#444}
.wu-pw div{padding:7px 14px;border-radius:4px;cursor:pointer}.wu-pw div:hover{background:rgba(127,127,127,.22)}
.wu-res-h{font-size:12px;color:#888;padding:8px 10px 2px}.wu-s10 .res{padding:10px 8px;flex:1}.wu-s10 .res .a:hover{background:#3a3a3a}.wu-s11 .res{margin:0 30px;flex:1}
.wu-tray{position:absolute;right:0;top:0;bottom:0;display:flex;align-items:center;gap:2px;font-size:12px;padding-right:4px}
.wu-tray span{padding:0 6px;display:flex;align-items:center;height:100%;cursor:default}.wu-tray .rl{flex-direction:column;justify-content:center;line-height:1.3;text-align:right}
.wu-tray .ln{font-size:11px;line-height:1.25;text-align:center;flex-direction:column;justify-content:center}
.wu-wid{position:absolute;left:10px;top:0;bottom:0;display:flex;align-items:center;gap:8px;font-size:12px;line-height:1.25}.wu-wid b{display:block;font-weight:600}
.wu-tv{font-size:18px!important}
`;
  function logo(so) { return `<span class="wu-logo wu-l${so === "11" ? "11" : "10"}" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`; }
  const novoEstado = () => ({ todos: false, energia: false, busca: "" });
  function itemApp(id, o, cls) { const c = CATALOGO[id] || ["❔", id], at = o.attr(id); return `<div class="${cls}" ${at || 'title="(não usado neste treino)"'}><span class="e q">${c[0]}</span>${esc(c[1])}</div>`; }
  function resultados(so, o, q) {
    const lst = Object.keys(CATALOGO).filter(id => id !== "lixeira" && (id !== "video" || (o.fixados || []).includes("video")) && CATALOGO[id][1].toLowerCase().includes(q));
    const extra = (o.extraRes || []).filter(r => r.casa(q));
    return `<div class="res"><div class="wu-res-h">Melhor correspondência</div>${extra.map(r => `<div class="a" ${r.attr}><span class="e">${r.ic}</span>${esc(r.nome)}</div>`).join("")}${lst.map(id => itemApp(id, o, "a")).join("") || (extra.length ? "" : `<div class="a" style="cursor:default">Nenhum resultado para “${esc(q)}”</div>`)}</div>`;
  }
  function energia(E) { return E.energia ? `<div class="wu-pw" data-wu="x"><div data-wu="x">🌙 Suspender</div><div data-wu="x">⏻ Desligar</div><div data-wu="x">🔄 Reiniciar</div></div>` : ""; }
  /* menu Iniciar. o = { attr(id) => atributos para abrir (ou "" se não abre), estado, busca?, buscaId?, extraRes?, recentes?, usuario?, fixados?, maisUsados? } */
  function iniciar(so, o) {
    const E = o.estado || novoEstado(), q = String(o.busca != null ? o.busca : E.busca || "").trim().toLowerCase(), u = o.usuario || "Aluno";
    const todosIds = Object.keys(CATALOGO).filter(id => id !== "lixeira" && (id !== "video" || (o.fixados || []).includes("video"))).sort((a, b) => CATALOGO[a][1].localeCompare(CATALOGO[b][1], "pt-BR"));
    const alfabetica = () => { let l = ""; return todosIds.map(id => { const L = CATALOGO[id][1][0].toUpperCase(); const cab = L !== l ? `<div class="l">${L}</div>` : ""; l = L; return cab + itemApp(id, o, "a"); }).join(""); };
    if (so === "11") {
      const fix = (o.fixados || ["exp", "chrome", "notas", "calc", "fotos", "paint", "cfg", "email", "store", "camera", "tempo", "alarmes"]);
      const rec = o.recentes || [["🖼️", "ferias-na-praia.jpg", "Há 2 h"], ["📄", "trabalho-de-ciencias.docx", "Ontem às 15:20"], ["📝", "lista-de-compras.txt", "Ontem às 09:10"], ["📊", "notas-do-bimestre.xlsx", "12 de nov."]];
      const busca = `<div class="bx">${o.buscaId ? `<input id="${o.buscaId}" placeholder="Pesquisar aplicativos, configurações e documentos" value="${esc(o.busca || "")}" autocomplete="off">` : `<div data-wu="x">Pesquisar aplicativos, configurações e documentos</div>`}</div>`;
      const meio = q ? resultados(so, o, q)
        : E.todos ? `<div class="sec"><b>Todos os aplicativos</b><span data-wu="voltar">‹ Voltar</span></div><div class="td">${alfabetica()}</div>`
        : `<div class="sec"><b>Fixado</b><span data-wu="todos">Todos os aplicativos ›</span></div><div class="gr">${fix.map(id => itemApp(id, o, "")).join("").replace(/class="" /g, "").replace(/<span class="e q">/g, '<span class="e">')}</div>
           <div class="sec"><b>Recomendado</b><span data-wu="x">Mais ›</span></div><div class="rc">${rec.map(r => `<div><span class="e">${r[0]}</span><span>${esc(r[1])}<small>${esc(r[2])}</small></span></div>`).join("")}</div>`;
      return `<div class="wu-start wu-s11" data-k="start">${busca}${meio}<div class="rod"><div class="u"><i>👤</i>${esc(u)}</div><div class="p" data-wu="energia" data-k="start:energia" title="Ligar/Desligar">⏻</div>${energia(E)}</div></div>`;
    }
    const usados = o.maisUsados || ["exp", "chrome", "notas"];
    const blocos = [["Produtividade", [["email", 1], ["calc", 0], ["exp", 0], ["notas", 0], ["fotos", 0]]], ["Explorar", [["chrome", 1], ["paint", 0], ["tempo", 0], ["cfg", 0], ["store", 0]]]];
    const lista = q ? resultados(so, o, q)
      : `<div class="ls"><div class="h">Mais usados</div>${usados.map(id => itemApp(id, o, "a")).join("")}${alfabetica()}</div>
         <div class="bl">${blocos.map(([t, bs]) => `<h5>${t}</h5><div class="g">${bs.map(([id, wd]) => { const c = CATALOGO[id], at = o.attr(id); return `<div class="t ${wd ? "w" : ""}" style="background:${COR_BLOCO[id] || "#0078d4"}" ${at || 'title="(não usado neste treino)"'}><span class="e">${c[0]}</span><span class="n">${esc(c[1])}</span></div>`; }).join("")}</div>`).join("")}</div>`;
    return `<div class="wu-start wu-s10" data-k="start"><div class="tr"><span title="Expandir">☰</span><div><span title="${esc(u)}">👤</span><span title="Documentos">📄</span><span title="Imagens">🖼️</span><span ${o.attr("cfg") || ""} title="Configurações">⚙️</span><span data-wu="energia" data-k="start:energia" title="Ligar/Desligar">⏻</span></div></div>${lista}${energia(E)}</div>`;
  }
  /* bandeja do sistema (canto direito da barra de tarefas) */
  function bandeja(so, hora, data) {
    return `<div class="wu-tray"><span title="Mostrar ícones ocultos">˄</span><span class="ln" title="Português (Brasil) · Teclado ABNT2">POR<br>PTB2</span><span title="Rede: conectado">📶</span><span title="Volume">🔊</span><span class="rl">${esc(hora)}<br>${esc(data)}</span>${so === "11" ? `<span title="Notificações">🔔</span>` : `<span title="Central de ações">💬</span>`}</div>`;
  }
  function widget11() { return `<div class="wu-wid" title="Widgets">⛅<span><b>31 °C</b>Ensolarado</span></div>`; }
  /* liga os botões internos do menu (Todos os aplicativos, Voltar, energia). redraw() redesenha o simulador. */
  function ligar(raiz, E, redraw) {
    raiz.querySelectorAll("[data-wu]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); const k = b.dataset.wu;
      if (k === "todos") { E.todos = true; E.energia = false; } else if (k === "voltar") E.todos = false; else if (k === "energia") E.energia = !E.energia; else return; redraw(); }));
  }
  P.winui = { css, logo, iniciar, bandeja, widget11, ligar, novoEstado, CATALOGO };
})();
