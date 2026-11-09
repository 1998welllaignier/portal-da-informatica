/* História "problema → solução" da Missão 1 do 7º ano. Veja js/historia.js.
   Posições em % do palco (1280×720). {PROF} e {TURMAS} são trocados pelo nome do professor e pelas turmas. */
(function () {
  const box = (ic, rot, x, y, at, cls) => `<div class="hs-box ${cls || ""}" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s"><span class="ic">${ic}</span>${rot ? `<b>${rot}</b>` : ""}</div>`;
  const linha = (x1, y1, x2, y2, at, pac, cor) => {
    const X1 = x1 * 12.8, Y1 = y1 * 7.2, X2 = x2 * 12.8, Y2 = y2 * 7.2, d = `M${X1} ${Y1} L${X2} ${Y2}`;
    return `<svg class="hs-svg" viewBox="0 0 1280 720" style="animation-delay:${at || 0}s"><path d="${d}" class="hs-traco" style="animation-delay:${at || 0}s;${cor ? "stroke:" + cor : ""}"/>
      ${pac ? Array.from({ length: pac }, (_, k) => `<rect class="hs-pacote" width="22" height="16" rx="4" x="-11" y="-8"><animateMotion dur="2.2s" begin="${((at || 0) + .6 + k * .45).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></rect>`).join("") : ""}</svg>`;
  };
  const balao = (t, x, y, at) => `<div class="hs-balao" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s">${t}</div>`;
  const prof = `<div class="hs-capa-prof"><b>👨‍🏫 {PROF}</b><span>{TURMAS}</span></div>`;

  PORTAL.registrarHistoria("informatica-7ano-4bim", {
    titulo: { m1: "MISSÃO 1" },
    m1: [
      { semMascote: true, fala: "Redes e internet: como a sua mensagem viaja.",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🌐</div><p>7º ANO · MISSÃO 1</p><h1>Redes e internet</h1><h2>como a sua mensagem viaja</h2>${prof}</div>` },

      { chip: "O PROBLEMA", emo: "?", fala: "Você manda uma mensagem para um amigo que mora longe. Em um segundo, ela chega! Mas como ela sabe o caminho?",
        visual: box("📱", "Você", 18, 50, .2) + balao("Oi! 👋", 18, 28, .8) + box("📱", "Amigo longe", 82, 50, 1.4) + linha(24, 50, 76, 50, 2.6, 2) + `<div class="hs-x" style="left:50%;top:36%;animation-delay:4.4s">?</div>`,
        tags: [{ t: "QUAL CAMINHO?", x: 50, y: 66, at: 4.6, vermelho: true }] },

      { chip: "REDE", emo: "ok", nome: "REDE", fala: "Tudo começa numa rede: aparelhos ligados entre si para trocar informações e dividir coisas, como a internet e a impressora. A nossa sala de informática é uma rede!",
        visual: box("🖥️", "Professor", 50, 48, .4, "destaque") + box("💻", "Aluno", 20, 34, 1) + box("💻", "Aluno", 20, 62, 1.2) + box("💻", "Aluno", 80, 34, 1.4) + box("🖨️", "Impressora", 80, 62, 3.6) + linha(26, 36, 44, 46, 1.6, 1) + linha(26, 60, 44, 50, 1.8, 1) + linha(74, 36, 56, 46, 2, 1) + linha(74, 60, 56, 50, 3.8, 1),
        tags: [{ t: "NOSSA SALA!", x: 50, y: 70, at: 7 }] },

      { chip: "INTERNET", emo: "uau", nome: "REDE DE REDES", fala: "E a internet é uma rede de redes: milhões de redes ligadas no mundo inteiro.",
        visual: box("🏠", "Rede da casa", 18, 40, .4) + box("🏫", "Rede da escola", 50, 34, .7) + box("🏢", "Rede da empresa", 82, 40, 1) + box("🌐", "Internet", 50, 62, 1.8, "destaque") + linha(22, 46, 44, 58, 2, 1) + linha(50, 42, 50, 54, 2.2, 1) + linha(78, 46, 56, 58, 2.4, 1) },

      { chip: "ENDEREÇO IP", emo: "?", nome: "ENDEREÇO IP", fala: "Mas, no meio de tantos aparelhos, como a mensagem acha o celular certo? Cada aparelho tem um endereço IP, que funciona como o endereço de uma casa.",
        visual: box("📱", "192.168.0.12", 30, 50, 3.8, "grande") + `<div class="hs-x" style="left:50%;top:50%;animation-delay:6s">=</div>` + box("🏠", "Rua das Flores, 12", 70, 50, 6.2),
        tags: [{ t: "CADA UM TEM O SEU", x: 30, y: 28, at: 4.6 }] },

      { chip: "ROTEADOR", emo: "ok", nome: "ROTEADOR", fala: "E quem mostra o caminho é o roteador: ele encaminha os dados pela rota certa, como um carteiro.",
        visual: box("📱", "Celular", 16, 50, .2) + linha(22, 50, 42, 50, .8, 2) + box("📶", "Roteador", 50, 50, 1.2, "destaque") + linha(58, 50, 78, 50, 2.6, 2) + box("🌐", "Internet", 84, 50, 2.8),
        tags: [{ t: "ESCOLHE A ROTA", x: 50, y: 28, at: 3 }, { t: "📮 COMO UM CARTEIRO", x: 50, y: 70, at: 4.4 }] },

      { chip: "SERVIDOR", emo: "ok", nome: "SERVIDOR", fala: "Sites, vídeos e mensagens ficam guardados em servidores: computadores ligados o tempo todo, que respondem aos pedidos.",
        visual: box("📱", "Pedido", 18, 50, .4) + linha(24, 50, 42, 50, 1.2, 2) + box("🗄️", "Servidor", 52, 50, 2, "grande") + linha(62, 50, 78, 50, 4.4, 2, "#fde68a") + box("▶️", "Resposta", 84, 50, 4.8),
        tags: [{ t: "LIGADO 24 HORAS", x: 52, y: 26, at: 3.4 }] },

      { chip: "PACOTES", emo: "!", nome: "PACOTES", fala: "Mas e se a mensagem for grande demais, como um vídeo? Ela não viaja inteira: é dividida em pedaços chamados pacotes.",
        visual: box("🎬", "Vídeo grande", 20, 50, .3, "grande") + linha(28, 50, 44, 50, 3.4, 0) + box("📦", "1", 52, 50, 3.8) + box("📦", "2", 64, 50, 4.1) + box("📦", "3", 76, 50, 4.4) + box("📦", "4", 88, 50, 4.7),
        tags: [{ t: "GRANDE DEMAIS!", x: 20, y: 26, at: 1.6, vermelho: true }] },

      { chip: "O PACOTE", emo: "uau", fala: "Cada pacote leva o endereço de quem envia, o endereço de quem recebe e um número.",
        visual: box("📦", "Pacote", 50, 50, .2, "grande"),
        tags: [{ t: "DE: 192.168.0.12", x: 24, y: 34, at: 1.4 }, { t: "PARA: 200.10.5.8", x: 76, y: 34, at: 2.6 }, { t: "Nº 3", x: 50, y: 74, at: 3.8 }] },

      { chip: "CAMINHOS DIFERENTES", emo: "!", semMascote: true, fala: "Os pacotes podem ir por caminhos diferentes e chegar fora de ordem! O aparelho que recebe usa os números para montar tudo de novo.",
        visual: box("📱", "Envia", 14, 50, .2) + box("📶", "", 46, 30, .5) + box("📶", "", 46, 66, .7) + linha(19, 47, 41, 32, 1, 2) + linha(19, 53, 41, 64, 1.2, 2) + linha(51, 32, 70, 47, 1.6, 2) + linha(51, 64, 70, 53, 1.8, 2) + box("📱", "Recebe", 76, 50, 1.4),
        tags: [{ t: "3 · 1 · 2 → 1 · 2 · 3", x: 86, y: 30, at: 4.6 }] },

      { chip: "PROTOCOLOS", emo: "ok", nome: "PROTOCOLOS", fala: "E para todos os aparelhos se entenderem, eles seguem protocolos: regras combinadas, como as regras de trânsito.",
        visual: box("📜", "Protocolo", 30, 50, 2.6, "destaque") + `<div class="hs-x" style="left:50%;top:50%;animation-delay:4s">=</div>` + box("🚦", "Regras de trânsito", 70, 50, 4.4),
        tags: [{ t: "REGRAS COMBINADAS", x: 30, y: 28, at: 3.2 }] },

      { chip: "TCP/IP E HTTPS", emo: "uau", fala: "O TCP/IP divide a mensagem em pacotes e faz a entrega. E o HTTPS abre as páginas com segurança: é o cadeado no navegador.",
        visual: box("📦", "TCP/IP", 30, 48, .3, "grande") + box("🔒", "HTTPS", 70, 48, 3.4, "grande destaque"),
        tags: [{ t: "DIVIDE E ENTREGA", x: 30, y: 72, at: 1.4 }, { t: "SITE SEGURO", x: 70, y: 72, at: 4.8 }] },

      { chip: "NA NOSSA ESCOLA", emo: "ok", semMascote: true, fala: "Na nossa escola, a internet chega por fibra óptica, passa pelo roteador e pelo switch, e vai por cabos até o seu computador.",
        visual: box("💡", "Fibra óptica", 10, 50, 1.4) + linha(15, 50, 23, 50, 1.8, 1, "#38bdf8") + box("📶", "Roteador", 30, 50, 2.4) + linha(35, 50, 43, 50, 2.8, 1) + box("🔀", "Switch", 50, 50, 3.4) + linha(55, 50, 63, 50, 3.8, 1) + box("〰️", "Cabos", 70, 50, 4.2) + linha(75, 50, 83, 50, 4.6, 1) + box("💻", "Seu PC", 90, 50, 5, "destaque") },

      { chip: "A PARTE MAIS LENTA MANDA", emo: "!", nome: "100 Mbps", fala: "Mas o switch da baia vai só até cem megabits por segundo. E a parte mais lenta manda: é essa a velocidade que chega no seu computador.",
        visual: box("🛣️", "Cabo: até 1 Gbps", 22, 50, .3) + linha(30, 50, 42, 50, .8, 3) + box("🌉", "Switch da baia: 100 Mbps", 52, 50, 1, "destaque") + linha(62, 50, 74, 50, 3.6, 1) + box("💻", "Seu PC: 100 Mbps", 82, 50, 4),
        tags: [{ t: "GARGALO", x: 52, y: 28, at: 2.4, vermelho: true }] },

      { chip: "ONDE EU USO ISSO?", emo: "uau", fala: "Onde eu uso isso? Toda mensagem, todo vídeo e todo jogo online viaja em pacotes, seguindo protocolos.",
        visual: box("💬", "Mensagens", 24, 48, 1.4) + box("▶️", "Vídeos", 50, 48, 2) + box("🎮", "Jogos online", 76, 48, 2.6),
        tags: [{ t: "📦 TUDO EM PACOTES", x: 50, y: 70, at: 3.6 }] },

      { semMascote: true, fala: "Agora é com vocês: abram a Missão 1 no portal!",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 1 no portal</h2>${prof}</div>` }
    ]
  });
})();

/* Sincronia m1 com a narração gravada (voz do professor): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */
PORTAL.historias["informatica-7ano-4bim"].sinc = Object.assign(PORTAL.historias["informatica-7ano-4bim"].sinc || {}, { m1: [{"dur":3.22,"wt":[0.29,0.61,0.77,1.79,1.87,2.03,2.07,2.97]},{"dur":5.85,"wt":[0.35,0.45,0.63,0.77,1.17,1.41,1.49,1.73,1.93,2.05,2.79,2.86,2.93,3.59,3.79,4.65,4.79,4.93,5.13,5.33,5.47]},{"dur":9.58,"wt":[0.35,0.61,0.89,1.17,1.56,2.35,2.69,3.07,3.33,3.53,3.79,4.43,4.79,5.09,5.81,6.01,6.25,6.53,6.83,7.15,7.73,8.03,8.11,8.33,8.53,8.97,9.09,9.33],"nomeAt":1.17},{"dur":5.18,"wt":[0.35,0.59,1.03,1.19,1.33,1.55,1.75,2.05,2.45,3.15,3.39,3.65,4.03,4.25,4.41],"nomeAt":1.55},{"dur":8.64,"wt":[0.35,0.92,1.12,1.26,1.5,1.78,2.94,2.97,2.98,3.44,3.74,3.9,4.14,5.02,5.2,5.62,5.82,5.91,6.26,6.76,7.02,7.32,7.49,7.58,7.92,8.1,8.24],"nomeAt":5.91},{"dur":5.29,"wt":[0.35,0.55,0.75,1.03,1.45,1.45,1.71,1.93,2.59,2.7,2.93,2.99,3.33,3.63,3.97,4.51,4.73,4.93],"nomeAt":1.93},{"dur":7.42,"wt":[0.35,1.39,1.57,1.75,2.45,2.61,3.11,3.35,4.37,4.77,5.25,5.41,5.65,6.03,6.37,6.81,7.01]},{"dur":7.56,"wt":[0.35,0.73,0.75,0.77,0.93,1.19,1.53,1.83,2.61,2.73,2.89,3.71,3.89,4.03,4.37,5.35,5.39,5.55,5.73,6.13,6.59],"nomeAt":6.59},{"dur":5.02,"wt":[0.35,0.71,1.19,1.4,1.51,1.93,2.11,2.33,2.62,2.76,3.33,3.49,3.67,4.13,4.47,4.57]},{"dur":7.72,"wt":[0.35,0.55,0.89,1.17,1.35,1.51,1.79,2.41,2.63,2.91,3.23,3.51,4.25,4.45,4.75,5.05,5.27,5.41,5.79,6.13,6.45,6.81,7.05,7.35]},{"dur":6.42,"wt":[0.35,0.43,0.63,0.85,1.03,1.3,1.37,2.29,2.41,2.61,3.42,3.83,4.64,5.05,5.17,5.41,5.65],"nomeAt":2.61},{"dur":8.93,"wt":[0.35,0.51,1.34,1.83,1.91,2.38,2.53,2.99,3.15,3.23,3.31,4.35,4.43,4.57,5.25,5.65,5.85,6.19,6.41,7.06,7.23,7.39,7.88,8.1]},{"dur":7.19,"wt":[0.35,0.51,0.59,1.39,1.59,1.83,2.07,2.29,2.55,3.45,3.53,3.84,4.31,4.45,5.06,5.37,5.47,5.57,5.79,6.07,6.37,6.51,6.65]},{"dur":8.18,"wt":[0.35,0.59,0.75,0.97,1.2,1.43,1.71,1.87,2.24,2.43,2.81,3.13,3.99,4.11,4.25,4.33,4.69,4.93,5.51,6.15,6.27,6.33,6.79,6.94,7.25,7.4,7.55]},{"dur":6.77,"wt":[0.35,0.55,0.67,0.83,1.52,1.8,2.76,3.3,3.3,3.6,4.06,4.06,4.61,4.97,5.15,5.7,6.31]},{"dur":5.96,"wt":[0.35,0.55,0.75,0.75,1.53,1.75,2.05,2.09,2.11,2.35]}] });
