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
PORTAL.historias["informatica-7ano-4bim"].sinc = Object.assign(PORTAL.historias["informatica-7ano-4bim"].sinc || {}, { m1: [{"dur":3.11,"wt":[0.3,0.64,0.81,1.67,1.94,2.07,2.21,2.61]},{"dur":6.0,"wt":[0.35,0.57,0.79,1.01,1.33,1.55,1.66,1.99,2.1,2.32,2.86,3.0,3.15,3.6,3.89,4.76,4.86,5.07,5.27,5.48,5.58]},{"dur":9.71,"wt":[0.35,0.59,0.94,1.17,1.73,2.36,2.83,3.14,3.3,3.61,3.93,4.55,4.71,5.18,5.73,5.98,6.11,6.48,6.6,6.73,7.75,7.86,8.09,8.32,8.44,9.02,9.13,9.37],"nomeAt":1.17},{"dur":4.87,"wt":[0.35,0.49,0.63,1.06,1.2,1.49,1.77,1.92,2.51,2.82,2.98,3.29,3.76,3.91,4.23],"nomeAt":1.49},{"dur":8.58,"wt":[0.35,1.1,1.26,1.43,1.59,1.93,2.94,3.19,3.32,3.69,3.94,4.06,4.44,5.13,5.38,5.86,5.99,6.11,6.59,7.01,7.12,7.44,7.66,7.76,8.19,8.3,8.51],"nomeAt":6.11},{"dur":5.5,"wt":[0.35,0.7,0.84,1.13,1.27,1.71,1.85,2.0,2.59,2.85,3.36,3.49,3.75,4.01,4.27,4.71,4.97,5.09],"nomeAt":2.0},{"dur":7.46,"wt":[0.35,0.71,1.07,1.25,1.8,2.16,2.7,2.88,3.61,4.51,5.05,5.23,5.6,6.21,6.36,6.83,6.98]},{"dur":7.66,"wt":[0.35,0.51,0.68,0.84,1.0,1.49,1.65,1.98,2.3,2.63,2.79,3.66,3.91,4.04,4.29,5.07,5.24,5.92,6.08,6.59,7.1],"nomeAt":7.1},{"dur":4.87,"wt":[0.35,0.62,1.01,1.28,1.41,1.94,2.08,2.21,2.72,2.84,3.33,3.45,3.57,3.93,4.27,4.39]},{"dur":7.62,"wt":[0.35,0.49,0.93,1.22,1.36,1.51,1.94,2.52,2.66,2.95,3.24,3.39,4.27,4.4,4.9,5.03,5.41,5.66,5.78,6.16,6.41,6.84,7.09,7.22]},{"dur":6.35,"wt":[0.35,0.48,0.75,1.01,1.14,1.67,1.8,2.33,2.59,2.86,3.58,3.98,4.99,5.24,5.36,5.61,5.73],"nomeAt":2.86},{"dur":7.08,"wt":[0.35,0.51,1.29,1.76,1.92,2.39,2.55,3.02,3.18,3.33,3.49,4.45,4.54,4.63,5.1,5.28,5.37,5.65,5.74,6.11,6.21,6.3,6.58,6.67]},{"dur":9.25,"wt":[0.35,0.58,1.05,2.28,2.48,3.37,3.78,3.98,4.38,5.26,5.58,5.89,6.37,6.53,6.84,7.32,7.46,7.59,7.73,8.0,8.27,8.41,8.55]},{"dur":8.1,"wt":[0.35,0.53,0.71,0.89,1.07,1.24,1.42,1.6,1.96,2.14,2.68,2.85,3.88,4.04,4.2,4.52,4.69,5.01,5.8,5.92,6.17,6.3,6.92,7.04,7.29,7.42,7.54]},{"dur":6.77,"wt":[0.35,0.56,0.67,0.88,1.62,1.96,2.67,2.98,3.29,3.45,3.76,4.07,4.54,4.85,5.0,5.47,5.94]},{"dur":5.99,"wt":[0.35,0.72,0.84,0.97,1.46,1.8,1.97,2.31,2.48,2.65]}] });
