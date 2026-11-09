/* História "problema → solução" da Missão 2 do 8º ano (piloto). Veja js/historia.js.
   Posições em % do palco (1280×720). Visual montado com caixas (.hs-box), linhas e pacotes (SVG). */
(function () {
  const box = (ic, rot, x, y, at, cls) => `<div class="hs-box ${cls || ""}" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s"><span class="ic">${ic}</span>${rot ? `<b>${rot}</b>` : ""}</div>`;
  // linha entre dois pontos (em % do palco) com pacotes andando
  const linha = (x1, y1, x2, y2, at, pac, cor) => {
    const X1 = x1 * 12.8, Y1 = y1 * 7.2, X2 = x2 * 12.8, Y2 = y2 * 7.2, d = `M${X1} ${Y1} L${X2} ${Y2}`;
    return `<svg class="hs-svg" viewBox="0 0 1280 720" style="animation-delay:${at || 0}s"><path d="${d}" class="hs-traco" style="animation-delay:${at || 0}s;${cor ? "stroke:" + cor : ""}"/>
      ${pac ? Array.from({ length: pac }, (_, k) => `<rect class="hs-pacote" width="22" height="16" rx="4" x="-11" y="-8"><animateMotion dur="2.2s" begin="${((at || 0) + .6 + k * .45).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></rect>`).join("") : ""}</svg>`;
  };
  const balao = (t, x, y, at) => `<div class="hs-balao" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s">${t}</div>`;

  PORTAL.registrarHistoria("informatica-8ano-4bim", {
    titulo: { m2: "MISSÃO 2" },
    m2: [
      { semMascote: true, dur: 4.5, fala: "Internet por dentro: o caminho do seu vídeo.",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">☁️</div><p>8º ANO · MISSÃO 2</p><h1>Internet por dentro</h1><h2>nuvem e processamento em paralelo</h2></div>` },

      { chip: "O PEDIDO", emo: "?", fala: "Você digita o nome do site para ver um vídeo. Mas a internet não entende nomes: ela só entende números.",
        visual: box("📱", "", 34, 46, .2, "grande") + balao("www.videos.com", 34, 22, .8) + box("🔢", "142.250.79.46", 72, 46, 2.6, "") + `<div class="hs-x" style="left:53%;top:46%;animation-delay:3.4s">≠</div>`,
        tags: [{ t: "NOME", x: 34, y: 12, at: 1.2 }, { t: "SÓ NÚMEROS", x: 72, y: 30, at: 3, vermelho: true }] },

      { chip: "O DNS", emo: "ok", nome: "DNS", nomeAt: 1.4, fala: "Então existe o DNS: a agenda de contatos da internet. Ele troca o nome do site pelo endereço IP do servidor.",
        visual: box("📒", "DNS", 50, 50, .2, "grande") + balao("www.videos.com", 24, 36, .9) + linha(30, 44, 42, 50, 1.2, 2) + linha(58, 50, 72, 44, 2.6, 2) + box("🔢", "142.250.79.46", 78, 38, 3, ""),
        tags: [{ t: "NOME → NÚMERO", x: 50, y: 74, at: 3.6 }] },

      { chip: "O PROVEDOR", emo: "?", nome: "PROVEDOR", nomeAt: 2.6, fala: "O pedido sai pelo roteador da sua casa. Mas como ele sai do bairro? Pelo provedor, a empresa que vende a sua internet.",
        visual: box("📱", "", 22, 50, .1) + linha(28, 50, 40, 50, .4, 2) + box("📶", "Roteador", 46, 50, .5) + linha(52, 50, 66, 50, 1.6, 2) + box("🏢", "Provedor", 72, 50, 2.2, "destaque"),
        tags: [{ t: "PORTA DE SAÍDA DO BAIRRO", x: 72, y: 72, at: 3.2 }] },

      { chip: "O BACKBONE", emo: "!", nome: "BACKBONE", nomeAt: 2.4, fala: "Mas o vídeo está guardado em outra cidade, longe daqui! Para atravessar o país, o pedido entra no backbone: as estradas principais da internet.",
        visual: `<div class="hs-mapa"></div>` + box("🏢", "Provedor", 16, 58, .1) + linha(22, 56, 80, 40, 1.4, 4, "#fde68a") + box("🏙️", "Outra cidade", 84, 38, .9),
        tags: [{ t: "MUITO RÁPIDO", x: 50, y: 34, at: 3 }, { t: "ESPINHA DORSAL", x: 50, y: 66, at: 3.6 }] },

      { chip: "O CABO SUBMARINO", emo: "!", nome: "CABO SUBMARINO", nomeAt: 2.6, fala: "E se o vídeo estiver em outro continente? Tem oceano no meio! Os pacotes viajam como luz, por cabos de fibra óptica no fundo do mar.",
        visual: `<div class="hs-mar"><i></i><i></i><i></i></div>` + box("🌎", "Brasil", 14, 34, .1) + box("🌍", "Outro continente", 86, 34, .4) + linha(18, 46, 82, 46, 1.2, 4, "#38bdf8"),
        tags: [{ t: "FUNDO DO MAR", x: 50, y: 78, at: 3.2 }, { t: "LUZ", x: 50, y: 56, at: 2.2 }] },

      { chip: "O DATA CENTER", emo: "uau", nome: "DATA CENTER", nomeAt: 2.2, fala: "Chegamos! O vídeo mora num data center: um prédio com milhares de servidores, ligados vinte e quatro horas, com energia reserva e ar gelado.",
        visual: `<div class="hs-dc">${Array.from({ length: 12 }, (_, k) => `<i style="animation-delay:${(.2 + k * .12).toFixed(2)}s"></i>`).join("")}</div>`,
        tags: [{ t: "24 HORAS", x: 30, y: 30, at: 3 }, { t: "⚡ ENERGIA RESERVA", x: 52, y: 30, at: 3.6 }, { t: "❄️ REFRIGERAÇÃO", x: 76, y: 30, at: 4.2 }] },

      { chip: "A NUVEM", emo: "ok", nome: "NUVEM", nomeAt: 2, fala: "Guardar as suas fotos nesses servidores, pela internet, é usar a nuvem. Por isso a foto aparece em outro celular.",
        visual: box("📱", "Seu celular", 20, 58, .1) + linha(26, 52, 44, 36, .6, 3) + `<div class="hs-nuvem" style="left:50%;top:30%"><span>☁️</span></div>` + linha(56, 36, 74, 52, 1.6, 3) + box("📱", "Outro celular", 80, 58, 1.4),
        tags: [{ t: "GOOGLE FOTOS · DRIVE · ICLOUD", x: 50, y: 52, at: 3 }] },

      { chip: "O PROBLEMA", emo: "!", fala: "Mas e se esse data center ficar sem energia? Todas as suas fotos somem?",
        visual: `<div class="hs-dc apagado">${Array.from({ length: 12 }, (_, k) => `<i style="animation-delay:${(k * .05).toFixed(2)}s"></i>`).join("")}</div><div class="hs-raio">⚡</div>`,
        tags: [{ t: "SEM ENERGIA", x: 50, y: 20, at: 1.2, vermelho: true }] },

      { chip: "SISTEMA DISTRIBUÍDO", emo: "ok", nome: "SISTEMA DISTRIBUÍDO", nomeAt: 2.4, fala: "Não somem! As empresas guardam cópias em vários data centers, em lugares diferentes. Se um falha, outro responde.",
        visual: box("🗄️", "São Paulo", 24, 40, .1, "apagado") + box("🗄️", "Estados Unidos", 50, 36, .5) + box("🗄️", "Europa", 76, 40, .9) + box("🖼️", "Suas fotos", 50, 64, 1.6, "destaque") + linha(50, 56, 50, 45, 2.4, 2),
        tags: [{ t: "CÓPIAS", x: 34, y: 64, at: 3 }, { t: "SE UM FALHA, OUTRO RESPONDE", x: 76, y: 22, at: 3.8 }] },

      { chip: "PARALELISMO", emo: "!", fala: "Agora, um trabalho enorme: um único núcleo do processador leva sessenta minutos para fazer tudo sozinho.",
        visual: `<div class="hs-cpu"><div class="nuc so"><b>1 núcleo</b><span class="barra lenta"></span><em>60 min</em></div></div>`,
        tags: [{ t: "DEMORA!", x: 70, y: 24, at: 2.6, vermelho: true }] },

      { chip: "PARALELISMO", emo: "uau", nome: "PARALELISMO", nomeAt: 2.8, fala: "Com quatro núcleos dividindo o trabalho ao mesmo tempo, cada um faz um quarto. Pronto em quinze minutos!",
        visual: `<div class="hs-cpu quatro">${[1, 2, 3, 4].map(k => `<div class="nuc"><b>Núcleo ${k}</b><span class="barra rapida" style="animation-delay:${(.4 + k * .1).toFixed(1)}s"></span><em>15 min</em></div>`).join("")}</div>`,
        tags: [{ t: "AO MESMO TEMPO", x: 86, y: 26, at: 1.6 }] },

      { chip: "CONCORRÊNCIA", emo: "!", nome: "CONCORRÊNCIA", nomeAt: 3, fala: "E quando dezenove computadores mandam imprimir na mesma impressora? Eles disputam a vez, e a impressora forma uma fila.",
        visual: `<div class="hs-fila">${Array.from({ length: 6 }, (_, k) => `<span style="animation-delay:${(.2 + k * .25).toFixed(2)}s">📄</span>`).join("")}<span class="imp">🖨️</span></div>`,
        tags: [{ t: "FILA DE IMPRESSÃO", x: 50, y: 62, at: 2.4 }, { t: "UM DE CADA VEZ", x: 80, y: 30, at: 3.4 }] },

      { chip: "O CAMINHO COMPLETO", emo: "ok", dur: 9, fala: "Resumindo o caminho: celular, roteador, provedor, backbone ou cabo submarino, até o data center na nuvem. E o DNS traduz o nome no começo.",
        visual: box("📱", "Celular", 9, 52, .2) + linha(13, 52, 22, 52, .5, 1) + box("📶", "Roteador", 27, 52, .7) + linha(31, 52, 40, 52, 1, 1) + box("🏢", "Provedor", 45, 52, 1.2) + linha(49, 52, 58, 52, 1.5, 1) + box("🛣️", "Backbone", 63, 52, 1.7) + linha(67, 52, 76, 52, 2, 1) + box("🗄️", "Data center", 82, 52, 2.2, "destaque") + box("📒", "DNS", 27, 24, 2.8) + linha(25, 30, 12, 46, 3, 1),
        semMascote: true },

      { chip: "ONDE EU USO ISSO?", emo: "uau", fala: "O vídeo que você assiste vem de um data center. As fotos na nuvem aparecem em outro celular. E a fila da impressora é concorrência.",
        visual: box("▶️", "Vídeos", 26, 46, .2) + box("☁️", "Fotos na nuvem", 50, 46, 1.4) + box("🖨️", "Fila da impressora", 74, 46, 2.6) },

      { semMascote: true, dur: 5, fala: "Agora é com vocês: abram a Missão 2 no portal!",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 2 no portal</h2></div>` }
    ]
  });
})();
