/* História "problema → solução" da Missão 1 do 9º ano. Veja js/historia.js.
   Posições em % do palco (1280×720). {PROF} e {TURMAS} são trocados pelo nome do professor e pelas turmas. */
(function () {
  const box = (ic, rot, x, y, at, cls) => `<div class="hs-box ${cls || ""}" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s"><span class="ic">${ic}</span>${rot ? `<b>${rot}</b>` : ""}</div>`;
  const linha = (x1, y1, x2, y2, at, pac, cor) => {
    const X1 = x1 * 12.8, Y1 = y1 * 7.2, X2 = x2 * 12.8, Y2 = y2 * 7.2, d = `M${X1} ${Y1} L${X2} ${Y2}`;
    return `<svg class="hs-svg" viewBox="0 0 1280 720" style="animation-delay:${at || 0}s"><path d="${d}" class="hs-traco" style="animation-delay:${at || 0}s;${cor ? "stroke:" + cor : ""}"/>
      ${pac ? Array.from({ length: pac }, (_, k) => `<rect class="hs-pacote" width="22" height="16" rx="4" x="-11" y="-8"><animateMotion dur="2.2s" begin="${((at || 0) + .6 + k * .45).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></rect>`).join("") : ""}</svg>`;
  };
  const prof = `<div class="hs-capa-prof"><b>👨‍🏫 {PROF}</b><span>{TURMAS}</span></div>`;
  // grafo A-B-C-D com pesos (usado em várias cenas)
  const V = { A: [16, 54], B: [46, 39], C: [46, 69], D: [78, 54] };
  const aresta = (u, v, at, cor, pac) => linha(V[u][0] + 3, V[u][1], V[v][0] - 3, V[v][1], at, pac || 0, cor);
  const vert = (n, at, cls) => box(n, "", V[n][0], V[n][1], at, cls);
  const grafo = (at, verde) => aresta("A", "B", at, verde ? "#4ade80" : "", verde ? 2 : 0) + aresta("B", "D", at + .3, verde ? "#4ade80" : "", verde ? 2 : 0) + aresta("A", "C", at + .6) + aresta("C", "D", at + .9)
    + vert("A", at) + vert("B", at + .2) + vert("C", at + .4) + vert("D", at + .6, verde ? "destaque" : "");
  const pesos = at => [{ t: "3", x: 29, y: 41, at }, { t: "4", x: 64, y: 41, at: at + .3 }, { t: "2", x: 29, y: 67, at: at + .6 }, { t: "6", x: 64, y: 67, at: at + .9 }];

  PORTAL.registrarHistoria("informatica-9ano-4bim", {
    titulo: { m1: "MISSÃO 1" },
    m1: [
      { semMascote: true, fala: "Grafos e árvores: mapas, caminhos e decisões.",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🗺️</div><p>9º ANO · MISSÃO 1</p><h1>Grafos e árvores</h1><h2>mapas, caminhos e decisões</h2>${prof}</div>` },

      { chip: "O PROBLEMA", emo: "?", fala: "Você quer ir da escola até a praça. São várias ruas e vários caminhos. Como o aplicativo de mapas descobre o melhor?",
        visual: box("🏫", "Escola", 16, 50, .2) + box("⛲", "Praça", 84, 50, 1) + linha(21, 47, 79, 30, 1.8, 0) + linha(21, 50, 79, 50, 2.1, 0) + linha(21, 53, 79, 68, 2.4, 0) + `<div class="hs-x" style="left:50%;top:50%;animation-delay:4.6s">?</div>`,
        tags: [{ t: "QUAL É O MELHOR?", x: 50, y: 24, at: 5, vermelho: true }] },

      { chip: "LISTA NÃO RESOLVE", emo: "!", fala: "Uma lista não resolve: as ruas não ficam em fila, uma depois da outra. Elas se ligam para vários lados.",
        visual: box("1", "", 20, 36, .3) + box("2", "", 32, 36, .5) + box("3", "", 44, 36, .7) + box("❌", "Fila", 58, 36, 1.6)
          + box("🔀", "Ligações para vários lados", 50, 62, 3.4, "destaque"),
        tags: [{ t: "LISTA", x: 32, y: 22, at: .9 }] },

      { chip: "GRAFO", emo: "ok", nome: "GRAFO", fala: "Por isso o computador usa um grafo: pontos, chamados vértices, ligados por linhas, chamadas arestas.",
        visual: grafo(1.4),
        tags: [{ t: "VÉRTICE", x: 16, y: 40, at: 3.4 }, { t: "ARESTA", x: 29, y: 41, at: 5, seta: "" }] },

      { chip: "NO MAPA E NA REDE SOCIAL", emo: "uau", fala: "Cada esquina vira um vértice, e cada rua vira uma aresta. Numa rede social é igual: cada pessoa é um vértice, e cada amizade é uma aresta.",
        visual: box("📍", "Esquina", 20, 36, .3) + linha(25, 36, 41, 36, 1.4, 0) + box("📍", "Esquina", 46, 36, .6)
          + box("🙂", "Pessoa", 56, 64, 4.2) + linha(61, 64, 75, 64, 5.6, 0, "#f472b6") + box("😀", "Pessoa", 80, 64, 4.5),
        tags: [{ t: "RUA = ARESTA", x: 33, y: 22, at: 2 }, { t: "AMIZADE = ARESTA", x: 68, y: 50, at: 6 }] },

      { chip: "GRAFO COM PESOS", emo: "!", nome: "PESO", fala: "Mas as ruas não têm o mesmo tamanho! Então cada aresta ganha um número, o peso: a distância, o tempo ou o custo.",
        visual: grafo(.2), tags: pesos(3).concat([{ t: "📏 DISTÂNCIA · ⏱️ TEMPO · 💰 CUSTO", x: 50, y: 14, at: 5 }]) },

      { chip: "CAMINHO", emo: "ok", nome: "CAMINHO", fala: "Um caminho é a sequência de arestas que leva de um ponto até outro. E o comprimento do caminho é a soma dos pesos.",
        visual: grafo(.2, true), tags: pesos(.2).concat([{ t: "SOMA DOS PESOS", x: 82, y: 40, at: 4.6 }]) },

      { chip: "QUAL É MAIS CURTO?", emo: "?", fala: "De A até D, o caminho A, B, D soma três mais quatro: sete. O caminho A, C, D soma dois mais seis: oito.",
        visual: grafo(.2), tags: pesos(.2).concat([{ t: "A→B→D = 3 + 4 = 7", x: 84, y: 34, at: 1.6 }, { t: "A→C→D = 2 + 6 = 8", x: 84, y: 74, at: 4.4 }]) },

      { chip: "O MAIS CURTO", emo: "uau", nome: "MENOR SOMA", fala: "O mais curto é A, B, D. Atenção: o mais curto é o de menor soma, não o de menos paradas.",
        visual: grafo(.2, true), tags: pesos(.2).concat([{ t: "✅ 7 (MAIS CURTO)", x: 84, y: 34, at: 1 }]) },

      { chip: "E AS PASTAS?", emo: "?", fala: "E as pastas do computador? Elas também se ligam, mas de um jeito especial: formam uma árvore.",
        visual: box("📁", "Documentos", 50, 26, .3) + box("📁", "Escola", 30, 54, .8) + box("📁", "Fotos", 70, 54, 1.1) + linha(47, 32, 33, 48, 1.4, 0) + linha(53, 32, 67, 48, 1.6, 0) + box("🌳", "", 86, 26, 3.6) },

      { chip: "ÁRVORE", emo: "ok", nome: "ÁRVORE", fala: "A árvore começa em um único ponto, a raiz, e se divide em galhos até as folhas. E nunca tem ciclo: nenhum caminho volta para o ponto de onde saiu.",
        visual: box("📁", "Raiz", 50, 33, .3, "destaque") + box("📁", "Escola", 30, 48, 1.4) + box("📁", "Fotos", 70, 48, 1.6) + linha(47, 38, 33, 43, 1.6, 0) + linha(53, 38, 67, 43, 1.8, 0)
          + box("📄", "Folha", 20, 64, 2.4) + box("📄", "Folha", 40, 64, 2.6) + box("🖼️", "Folha", 82, 64, 2.8) + linha(28, 55, 22, 59, 2.4, 0) + linha(32, 55, 38, 59, 2.6, 0) + linha(74, 54, 80, 59, 2.8, 0),
        tags: [{ t: "🚫 SEM CICLO", x: 84, y: 30, at: 6.4, vermelho: true }] },

      { chip: "O DESAFIO", emo: "?", fala: "Agora, um desafio: adivinhar um objeto só com perguntas de sim ou não. Como organizar essas perguntas?",
        visual: box("🎁", "Objeto secreto", 50, 46, .3, "grande") + `<div class="hs-x" style="left:74%;top:46%;animation-delay:2.4s">?</div>`,
        tags: [{ t: "SÓ SIM OU NÃO", x: 50, y: 22, at: 2 }] },

      { chip: "ÁRVORE DE DECISÃO", emo: "uau", nome: "ÁRVORE DE DECISÃO", fala: "Com uma árvore de decisão! Cada ponto é uma pergunta de sim ou não, e cada folha é uma resposta.",
        visual: box("❓", "É vivo?", 50, 35, 1) + box("❓", "Voa?", 28, 51, 1.6) + box("❓", "É eletrônico?", 72, 51, 1.9) + linha(46, 40, 31, 46, 1.6, 0, "#4ade80") + linha(54, 40, 69, 46, 1.9, 0, "#f87171")
          + box("🐦", "Pássaro", 18, 68, 3.4) + box("🐶", "Cachorro", 38, 68, 3.6) + box("📱", "Celular", 62, 68, 3.8) + box("✏️", "Lápis", 82, 68, 4),
        tags: [{ t: "SIM", x: 36, y: 41, at: 2 }, { t: "NÃO", x: 64, y: 41, at: 2.2, vermelho: true }] },

      { chip: "ONDE EU USO ISSO?", emo: "uau", fala: "Onde eu uso isso? No aplicativo de mapas, nas sugestões de amizade, nas pastas do celular e na triagem do posto de saúde.",
        visual: box("🗺️", "Mapas", 18, 48, 1.4) + box("👥", "Sugestão de amizade", 39, 48, 2.2) + box("📁", "Pastas", 61, 48, 3.4) + box("🏥", "Triagem", 82, 48, 4.4) },

      { semMascote: true, fala: "Agora é com vocês: abram a Missão 1 no portal!",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 1 no portal</h2>${prof}</div>` }
    ]
  });
})();

/* Sincronia m1 com a narração gravada (Grok): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */
PORTAL.historias["informatica-9ano-4bim"].sinc = Object.assign(PORTAL.historias["informatica-9ano-4bim"].sinc || {}, { m1: [{"dur":3.62,"wt":[0.28,0.73,0.88,1.67,2.12,2.68,2.83]},{"dur":6.52,"wt":[0.35,0.58,0.81,0.95,1.1,1.41,1.6,1.7,2.27,2.46,2.77,3.0,3.11,3.42,3.86,4.59,4.7,5.18,5.32,5.59,5.99,6.09]},{"dur":6.58,"wt":[0.35,0.55,0.85,1.05,1.65,1.81,2.06,2.26,2.56,2.71,3.3,3.5,3.84,4.0,4.73,4.98,5.13,5.43,5.68,6.01]},{"dur":6.77,"wt":[0.35,0.59,0.88,1.01,1.62,2.23,2.42,2.81,3.26,3.76,4.31,4.76,5.0,5.62,6.12],"nomeAt":2.42},{"dur":8.59,"wt":[0.35,0.59,0.97,1.21,1.36,1.78,2.13,2.37,2.57,2.81,3.01,3.96,4.21,4.45,4.78,4.89,5.59,5.83,6.16,6.27,6.42,7.04,7.15,7.39,7.77,7.88,8.08]},{"dur":7.09,"wt":[0.35,0.57,0.74,1.02,1.24,1.46,1.58,1.9,2.84,3.16,3.43,3.8,4.31,4.48,4.9,5.03,5.35,5.47,6.04,6.16,6.48,6.65,6.78],"nomeAt":5.03},{"dur":6.57,"wt":[0.35,0.51,0.9,1.01,1.13,1.61,1.77,2.16,2.37,2.62,2.78,2.94,3.24,3.44,3.79,4.24,4.35,4.93,5.09,5.48,5.59,5.7,5.96,6.16],"nomeAt":0.51},{"dur":5.55,"wt":[0.35,0.48,0.56,0.73,0.85,0.94,1.57,1.7,1.82,1.91,2.11,2.49,2.69,3.0,3.5,3.59,3.89,4.02,4.14,4.23,4.43,4.63,5.01,5.25]},{"dur":6.85,"wt":[0.35,0.47,0.72,1.02,1.3,1.46,1.79,1.95,2.71,2.82,3.08,3.38,3.49,3.84,4.0,4.77,5.07,5.28,5.39,5.56,6.05],"nomeAt":4.0},{"dur":6.19,"wt":[0.35,0.47,0.63,1.15,1.32,1.9,2.15,2.5,2.66,3.01,3.22,3.38,3.54,3.85,4.87,5.21,5.42]},{"dur":10.28,"wt":[0.35,0.47,0.85,1.22,1.64,1.81,2.14,2.84,2.96,3.28,3.41,3.58,4.42,4.59,4.97,5.19,5.37,5.79,5.91,6.24,6.46,7.12,7.49,7.91,8.24,8.51,8.63,9.46,9.63,9.91],"nomeAt":0.47},{"dur":7.49,"wt":[0.35,0.77,0.97,1.5,2.1,2.29,3.19,3.38,3.64,4.48,4.68,4.93,5.13,5.44,5.75,6.34,6.7]},{"dur":8.93,"wt":[0.35,0.64,0.92,1.4,1.62,2.74,3.09,3.51,3.66,4.48,5.08,5.3,5.58,5.81,6.16,6.31,7.05,7.46,7.62,7.91],"nomeAt":0.92},{"dur":8.19,"wt":[0.35,0.62,0.79,1.01,1.97,2.14,2.7,2.87,3.39,3.61,4.13,4.3,4.77,4.99,5.35,5.53,5.94,6.06,6.51,6.92,7.09,7.41,7.58]},{"dur":6.36,"wt":[0.35,0.66,0.78,1.0,1.65,1.97,2.09,2.45,2.57,2.74]}] });
