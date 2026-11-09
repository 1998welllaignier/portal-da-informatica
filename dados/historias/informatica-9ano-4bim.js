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
  const V = { A: [16, 48], B: [46, 30], C: [46, 66], D: [78, 48] };
  const aresta = (u, v, at, cor, pac) => linha(V[u][0] + 3, V[u][1], V[v][0] - 3, V[v][1], at, pac || 0, cor);
  const vert = (n, at, cls) => box(n, "", V[n][0], V[n][1], at, cls);
  const grafo = (at, verde) => aresta("A", "B", at, verde ? "#4ade80" : "", verde ? 2 : 0) + aresta("B", "D", at + .3, verde ? "#4ade80" : "", verde ? 2 : 0) + aresta("A", "C", at + .6) + aresta("C", "D", at + .9)
    + vert("A", at) + vert("B", at + .2) + vert("C", at + .4) + vert("D", at + .6, verde ? "destaque" : "");
  const pesos = at => [{ t: "3", x: 31, y: 32, at }, { t: "4", x: 62, y: 32, at: at + .3 }, { t: "2", x: 31, y: 64, at: at + .6 }, { t: "6", x: 62, y: 64, at: at + .9 }];

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
        tags: [{ t: "VÉRTICE", x: 16, y: 30, at: 3.4 }, { t: "ARESTA", x: 30, y: 46, at: 5, seta: "" }] },

      { chip: "NO MAPA E NA REDE SOCIAL", emo: "uau", fala: "Cada esquina vira um vértice, e cada rua vira uma aresta. Numa rede social é igual: cada pessoa é um vértice, e cada amizade é uma aresta.",
        visual: box("📍", "Esquina", 20, 36, .3) + linha(25, 36, 41, 36, 1.4, 0) + box("📍", "Esquina", 46, 36, .6)
          + box("🙂", "Pessoa", 56, 64, 4.2) + linha(61, 64, 75, 64, 5.6, 0, "#f472b6") + box("😀", "Pessoa", 80, 64, 4.5),
        tags: [{ t: "RUA = ARESTA", x: 33, y: 22, at: 2 }, { t: "AMIZADE = ARESTA", x: 68, y: 50, at: 6 }] },

      { chip: "GRAFO COM PESOS", emo: "!", nome: "PESO", fala: "Mas as ruas não têm o mesmo tamanho! Então cada aresta ganha um número, o peso: a distância, o tempo ou o custo.",
        visual: grafo(.2), tags: pesos(3).concat([{ t: "📏 DISTÂNCIA · ⏱️ TEMPO · 💰 CUSTO", x: 50, y: 14, at: 5 }]) },

      { chip: "CAMINHO", emo: "ok", nome: "CAMINHO", fala: "Um caminho é a sequência de arestas que leva de um ponto até outro. E o comprimento do caminho é a soma dos pesos.",
        visual: grafo(.2, true), tags: pesos(.2).concat([{ t: "SOMA DOS PESOS", x: 50, y: 82, at: 4.6 }]) },

      { chip: "QUAL É MAIS CURTO?", emo: "?", fala: "De A até D, o caminho A, B, D soma três mais quatro: sete. O caminho A, C, D soma dois mais seis: oito.",
        visual: grafo(.2), tags: pesos(.2).concat([{ t: "A→B→D = 3 + 4 = 7", x: 62, y: 16, at: 1.6 }, { t: "A→C→D = 2 + 6 = 8", x: 62, y: 80, at: 4.4 }]) },

      { chip: "O MAIS CURTO", emo: "uau", nome: "MENOR SOMA", fala: "O mais curto é A, B, D. Atenção: o mais curto é o de menor soma, não o de menos paradas.",
        visual: grafo(.2, true), tags: pesos(.2).concat([{ t: "✅ 7 (MAIS CURTO)", x: 62, y: 16, at: 1 }]) },

      { chip: "E AS PASTAS?", emo: "?", fala: "E as pastas do computador? Elas também se ligam, mas de um jeito especial: formam uma árvore.",
        visual: box("📁", "Documentos", 50, 26, .3) + box("📁", "Escola", 30, 54, .8) + box("📁", "Fotos", 70, 54, 1.1) + linha(47, 32, 33, 48, 1.4, 0) + linha(53, 32, 67, 48, 1.6, 0) + box("🌳", "", 86, 26, 3.6) },

      { chip: "ÁRVORE", emo: "ok", nome: "ÁRVORE", fala: "A árvore começa em um único ponto, a raiz, e se divide em galhos até as folhas. E nunca tem ciclo: nenhum caminho volta para o ponto de onde saiu.",
        visual: box("📁", "Raiz", 50, 28, .3, "destaque") + box("📁", "Escola", 30, 46, 1.4) + box("📁", "Fotos", 70, 46, 1.6) + linha(47, 33, 33, 41, 1.6, 0) + linha(53, 33, 67, 41, 1.8, 0)
          + box("📄", "Folha", 20, 64, 2.4) + box("📄", "Folha", 40, 64, 2.6) + box("🖼️", "Folha", 70, 64, 2.8) + linha(28, 51, 22, 59, 2.4, 0) + linha(32, 51, 38, 59, 2.6, 0) + linha(70, 51, 70, 59, 2.8, 0),
        tags: [{ t: "🚫 SEM CICLO", x: 86, y: 30, at: 6.4, vermelho: true }] },

      { chip: "O DESAFIO", emo: "?", fala: "Agora, um desafio: adivinhar um objeto só com perguntas de sim ou não. Como organizar essas perguntas?",
        visual: box("🎁", "Objeto secreto", 50, 46, .3, "grande") + `<div class="hs-x" style="left:74%;top:46%;animation-delay:2.4s">?</div>`,
        tags: [{ t: "SÓ SIM OU NÃO", x: 50, y: 22, at: 2 }] },

      { chip: "ÁRVORE DE DECISÃO", emo: "uau", nome: "ÁRVORE DE DECISÃO", fala: "Com uma árvore de decisão! Cada ponto é uma pergunta de sim ou não, e cada folha é uma resposta.",
        visual: box("❓", "É vivo?", 50, 30, 1) + box("❓", "Voa?", 28, 48, 1.6) + box("❓", "É eletrônico?", 72, 48, 1.9) + linha(46, 35, 31, 43, 1.6, 0, "#4ade80") + linha(54, 35, 69, 43, 1.9, 0, "#f87171")
          + box("🐦", "Pássaro", 18, 66, 3.4) + box("🐶", "Cachorro", 38, 66, 3.6) + box("📱", "Celular", 62, 66, 3.8) + box("✏️", "Lápis", 82, 66, 4),
        tags: [{ t: "SIM", x: 36, y: 34, at: 2 }, { t: "NÃO", x: 64, y: 34, at: 2.2, vermelho: true }] },

      { chip: "ONDE EU USO ISSO?", emo: "uau", fala: "Onde eu uso isso? No aplicativo de mapas, nas sugestões de amizade, nas pastas do celular e na triagem do posto de saúde.",
        visual: box("🗺️", "Mapas", 18, 48, 1.4) + box("👥", "Sugestão de amizade", 39, 48, 2.2) + box("📁", "Pastas", 61, 48, 3.4) + box("🏥", "Triagem", 82, 48, 4.4) },

      { semMascote: true, fala: "Agora é com vocês: abram a Missão 1 no portal!",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 1 no portal</h2>${prof}</div>` }
    ]
  });
})();
