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
        visual: `<div class="hs-capa"><div class="hs-capa-ic">☁️</div><p>8º ANO · MISSÃO 2</p><h1>Internet por dentro</h1><h2>nuvem e processamento em paralelo</h2><div class="hs-capa-prof"><b>👨‍🏫 {PROF}</b><span>{TURMAS}</span></div></div>` },

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
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 2 no portal</h2><div class="hs-capa-prof"><b>👨‍🏫 {PROF}</b><span>{TURMAS}</span></div></div>` }
    ]
  });
})();

/* Sincronia com a narração gravada (Grok): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */
PORTAL.historias["informatica-8ano-4bim"].sinc = { m2: [{"dur":5.79,"wt":[1.63,2.33,2.67,3.64,3.82,4.45,4.71,5.04]},{"dur":5.69,"wt":[0.35,0.59,0.91,1.02,1.25,1.4,1.64,1.87,2.07,2.22,2.73,2.92,3.03,3.43,3.63,4.3,4.62,4.81,4.97,5.33]},{"dur":6.4,"wt":[0.35,0.64,0.97,1.08,1.33,1.44,1.77,1.93,2.88,3.04,3.5,3.7,3.99,4.1,4.35,4.5,4.75,4.99,5.42,5.57,5.73],"nomeAt":1.08},{"dur":8.04,"wt":[0.35,0.47,0.82,1.03,1.29,1.74,1.9,2.11,2.42,2.63,3.52,3.73,3.95,4.11,4.51,5.34,5.83,6.26,6.66,6.87,7.18,7.3,7.51],"nomeAt":5.34},{"dur":9.39,"wt":[0.35,0.57,0.7,1.02,1.29,1.77,1.94,2.26,2.69,3.01,3.38,4.25,4.82,4.94,5.27,5.39,5.76,6.09,6.26,6.78,7.43,7.9,8.47,8.64],"nomeAt":6.26},{"dur":8.67,"wt":[0.35,0.48,0.65,0.78,1.11,1.53,1.71,2.04,3.12,3.35,3.72,3.9,4.67,4.85,5.28,5.65,5.93,6.21,6.44,6.76,6.94,7.27,7.64,7.82,8.15,8.32]},{"dur":10.0,"wt":[0.35,0.91,1.05,1.63,1.92,2.16,2.46,2.91,3.1,3.88,4.12,4.63,4.82,5.49,6.22,6.57,6.7,7.1,7.78,8.02,8.48,8.93,9.07,9.26],"nomeAt":2.16},{"dur":7.76,"wt":[0.35,0.79,0.98,1.26,1.6,2.0,2.65,2.94,3.48,3.62,4.28,4.41,4.8,5.04,5.84,5.97,6.26,6.7,6.88,7.22],"nomeAt":4.41},{"dur":4.85,"wt":[0.35,0.57,0.69,0.86,1.13,1.4,1.76,2.08,2.3,2.76,3.59,3.76,4.02,4.34]},{"dur":7.78,"wt":[0.35,0.59,0.99,1.52,2.02,2.48,2.87,3.06,3.46,3.75,4.25,4.44,4.89,5.56,6.08,6.27,6.66,7.17]},{"dur":7.76,"wt":[0.35,0.76,1.18,1.7,2.17,2.91,3.26,3.68,3.87,4.56,4.86,5.38,5.85,6.15,6.51,6.96]},{"dur":6.81,"wt":[0.35,0.56,0.92,1.32,1.82,1.93,2.38,2.55,2.86,3.21,3.85,4.02,4.23,4.4,5.54,5.89,6.06,6.41]},{"dur":8.75,"wt":[0.35,0.5,0.93,1.49,2.27,2.71,3.26,3.47,3.84,5.11,5.43,5.99,6.13,6.45,6.6,6.74,7.79,8.17,8.43]},{"dur":9.27,"wt":[0.35,0.89,1.01,1.5,1.98,2.72,3.25,3.74,3.92,4.2,5.2,5.43,5.56,5.84,6.22,6.4,7.32,7.45,7.57,7.8,8.19,8.31,8.59,8.77]},{"dur":9.04,"wt":[0.35,0.48,0.82,1.05,1.33,1.77,2.0,2.18,2.37,2.65,3.09,3.79,4.13,4.31,4.65,5.14,5.32,5.65,6.15,6.79,6.92,7.2,7.38,7.98,8.11]},{"dur":7.14,"wt":[0.35,0.74,0.89,1.16,1.62,2.38,2.53,2.99,3.14,3.35]}] };
