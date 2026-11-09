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

/* Sincronia m1 com a narração gravada (Grok): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */
PORTAL.historias["informatica-7ano-4bim"].sinc = Object.assign(PORTAL.historias["informatica-7ano-4bim"].sinc || {}, { m1: [{"dur":3.4,"wt":[0.0,0.38,0.53,1.15,1.65,1.79,2.06,2.62]},{"dur":7.32,"wt":[0.35,0.6,0.9,1.1,1.54,1.79,1.95,2.25,2.45,2.7,3.57,3.73,3.89,4.33,4.78,5.12,5.82,6.07,6.28,6.53,6.65]},{"dur":11.0,"wt":[0.35,0.64,1.03,1.32,1.66,2.64,3.08,3.42,3.61,3.9,4.29,4.95,5.08,5.52,5.97,6.6,6.73,7.23,7.36,7.49,8.14,8.73,9.08,9.36,9.55,10.2,10.34,10.57],"nomeAt":1.32},{"dur":5.43,"wt":[0.35,0.48,0.62,1.12,1.26,1.5,1.79,1.98,2.38,3.2,3.39,3.74,4.19,4.38,4.73],"nomeAt":1.5},{"dur":9.41,"wt":[0.35,0.61,0.77,1.03,1.19,1.54,2.08,2.63,2.75,3.19,3.45,3.57,3.97,5.06,5.32,5.76,5.97,6.14,6.58,6.79,7.38,7.82,8.08,8.2,8.64,8.81,9.02],"nomeAt":6.14},{"dur":6.24,"wt":[0.35,0.47,0.73,1.09,1.21,1.62,1.74,1.86,2.36,3.01,3.52,3.68,3.99,4.26,4.52,4.88,5.48,5.64],"nomeAt":1.86},{"dur":8.04,"wt":[0.35,0.75,1.16,1.29,1.86,2.21,2.78,2.97,3.64,4.72,5.18,5.32,5.67,6.02,6.62,7.19,7.43]},{"dur":7.51,"wt":[0.35,0.57,0.7,0.87,0.99,1.46,1.69,2.06,2.48,2.75,2.92,3.73,3.95,4.17,4.49,5.32,5.45,5.92,6.09,6.51,6.98],"nomeAt":6.98},{"dur":5.12,"wt":[0.35,0.61,0.97,1.23,1.35,1.8,1.97,2.23,2.58,3.02,3.47,3.63,3.9,4.25,4.37,4.54]},{"dur":8.03,"wt":[0.35,0.52,0.94,1.26,1.43,1.65,2.11,2.68,2.8,3.17,3.43,3.61,4.52,4.65,5.11,5.33,5.7,5.92,6.09,6.51,6.78,7.14,7.41,7.58]},{"dur":6.79,"wt":[0.35,0.47,0.73,1.03,1.2,1.69,1.86,2.77,3.03,3.39,4.3,4.66,5.25,5.51,5.67,6.02,6.19],"nomeAt":3.39},{"dur":8.93,"wt":[0.35,0.49,0.92,1.35,1.49,2.03,2.23,2.72,2.86,3.12,3.26,4.24,4.38,4.52,4.89,5.21,5.41,5.89,6.15,6.81,6.95,7.48,7.96,8.16]},{"dur":8.07,"wt":[0.35,0.52,0.83,1.53,1.65,2.11,2.42,2.64,2.95,3.36,4.06,4.33,4.78,4.9,5.17,5.58,5.7,6.25,6.46,6.78,6.99,7.11,7.33]},{"dur":8.39,"wt":[0.35,0.56,0.68,1.04,1.21,1.47,1.68,1.85,2.06,2.28,2.73,2.94,3.39,3.51,4.06,4.37,4.64,4.94,5.3,5.42,6.06,6.18,6.72,6.94,7.25,7.41,7.63]},{"dur":7.12,"wt":[0.35,0.65,0.83,1.08,1.96,2.25,2.82,3.11,3.46,3.6,3.89,4.19,4.59,4.94,5.13,5.64,6.43]},{"dur":6.49,"wt":[0.35,0.67,0.79,1.01,1.37,2.02,2.14,2.51,2.63,2.8]}] });
