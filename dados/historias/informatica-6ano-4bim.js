/* História "problema → solução" da Missão 1 do 6º ano. Veja js/historia.js.
   Posições em % do palco (1280×720). {PROF} e {TURMAS} são trocados pelo nome do professor e pelas turmas. */
(function () {
  const box = (ic, rot, x, y, at, cls) => `<div class="hs-box ${cls || ""}" style="left:${x}%;top:${y}%;animation-delay:${at || 0}s"><span class="ic">${ic}</span>${rot ? `<b>${rot}</b>` : ""}</div>`;
  const linha = (x1, y1, x2, y2, at, pac, cor) => {
    const X1 = x1 * 12.8, Y1 = y1 * 7.2, X2 = x2 * 12.8, Y2 = y2 * 7.2, d = `M${X1} ${Y1} L${X2} ${Y2}`;
    return `<svg class="hs-svg" viewBox="0 0 1280 720" style="animation-delay:${at || 0}s"><path d="${d}" class="hs-traco" style="animation-delay:${at || 0}s;${cor ? "stroke:" + cor : ""}"/>
      ${pac ? Array.from({ length: pac }, (_, k) => `<rect class="hs-pacote" width="22" height="16" rx="4" x="-11" y="-8"><animateMotion dur="2.2s" begin="${((at || 0) + .6 + k * .45).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></rect>`).join("") : ""}</svg>`;
  };
  const prof = `<div class="hs-capa-prof"><b>👨‍🏫 {PROF}</b><span>{TURMAS}</span></div>`;

  PORTAL.registrarHistoria("informatica-6ano-4bim", {
    titulo: { m1: "MISSÃO 1" },
    m1: [
      { semMascote: true, fala: "O computador e meus arquivos: o mistério do trabalho que sumiu.",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">💾</div><p>6º ANO · MISSÃO 1</p><h1>O computador e meus arquivos</h1><h2>o mistério do trabalho que sumiu</h2>${prof}</div>` },

      { chip: "O PROBLEMA", emo: "!", fala: "A Ana passou a aula inteira fazendo um desenho no computador. Tocou o sinal, ela fechou o programa, e o desenho sumiu! Mas o que aconteceu?",
        visual: box("🎨", "Desenho da Ana", 30, 46, .2, "grande") + box("🔔", "Tocou o sinal", 58, 36, 2.4) + box("❌", "Fechou o programa", 80, 52, 3.4),
        tags: [{ t: "SUMIU!", x: 30, y: 22, at: 4.4, vermelho: true }] },

      { chip: "3 ETAPAS", emo: "?", fala: "Para entender, vamos ver como o computador trabalha. Ele faz tudo em três etapas: entrada, processamento e saída.",
        visual: box("⌨️", "1. Entrada", 20, 48, 3.2) + linha(26, 48, 42, 48, 3.6, 2) + box("🧠", "2. Processamento", 50, 48, 4) + linha(58, 48, 74, 48, 4.4, 2) + box("🖥️", "3. Saída", 80, 48, 4.8),
        tags: [{ t: "RECEBE", x: 20, y: 68, at: 3.4 }, { t: "CALCULA", x: 50, y: 68, at: 4.2 }, { t: "MOSTRA", x: 80, y: 68, at: 5 }] },

      { chip: "ENTRADA", emo: "ok", nome: "ENTRADA", fala: "Entrada é quando o computador recebe informações: pelo teclado, pelo mouse ou pelo microfone.",
        visual: box("⌨️", "Teclado", 16, 48, 2.2) + box("🖱️", "Mouse", 32, 48, 2.8) + box("🎤", "Microfone", 48, 48, 3.4) + linha(55, 48, 72, 48, 3.6, 3) + box("💻", "Computador", 80, 48, 1, "destaque"),
        tags: [{ t: "INFORMAÇÃO ENTRANDO", x: 64, y: 34, at: 4 }] },

      { chip: "PROCESSAMENTO", emo: "uau", nome: "PROCESSAMENTO", fala: "Processamento é quando o processador, a CPU, o cérebro do computador, faz os cálculos e segue os comandos. Ele fica dentro do gabinete.",
        visual: box("🧠", "CPU (processador)", 40, 48, 1.2, "grande") + linha(48, 48, 64, 48, 4.6, 0) + box("🗄️", "Gabinete", 74, 48, 4.8),
        tags: [{ t: "O CÉREBRO", x: 40, y: 26, at: 2.4 }, { t: "FAZ OS CÁLCULOS", x: 40, y: 70, at: 3.4 }, { t: "FICA AQUI DENTRO", x: 74, y: 30, at: 5.4 }] },

      { chip: "SAÍDA", emo: "ok", nome: "SAÍDA", fala: "Saída é quando o computador mostra o resultado: no monitor, na caixa de som ou na impressora.",
        visual: box("💻", "Computador", 18, 48, .2, "destaque") + linha(25, 48, 42, 48, 1.4, 3) + box("🖥️", "Monitor", 52, 48, 2.2) + box("🔊", "Caixa de som", 68, 48, 2.8) + box("🖨️", "Impressora", 84, 48, 3.4),
        tags: [{ t: "RESULTADO SAINDO", x: 34, y: 34, at: 1.8 }] },

      { chip: "ENTRADA E SAÍDA", emo: "uau", fala: "E tem peça que faz as duas coisas! A tela do celular recebe o toque do dedo, que é entrada, e mostra a imagem, que é saída.",
        visual: box("📱", "Tela touch", 50, 48, .4, "grande") + box("👆", "Toque", 22, 48, 2.4) + linha(28, 48, 42, 48, 2.8, 2) + linha(58, 48, 72, 48, 4.4, 2, "#fde68a") + box("🖼️", "Imagem", 78, 48, 4.6),
        tags: [{ t: "ENTRADA", x: 22, y: 30, at: 3 }, { t: "SAÍDA", x: 78, y: 30, at: 5 }] },

      { chip: "HARDWARE E SOFTWARE", emo: "ok", nome: "HARDWARE E SOFTWARE", nomeAt: 1.4, fala: "As peças que dá para tocar são o hardware. Os programas, como o Paint e os jogos, são o software.",
        visual: box("🖱️", "Hardware", 30, 50, .6, "grande") + box("🎮", "Software", 70, 50, 2.6, "grande"),
        tags: [{ t: "DÁ PARA TOCAR ✋", x: 30, y: 72, at: 1.6 }, { t: "PROGRAMAS: PAINT, JOGOS", x: 70, y: 72, at: 3.6 }] },

      { chip: "O PROBLEMA", emo: "!", fala: "Mas e o desenho da Ana? Enquanto ela desenhava, ele ainda não estava guardado. Quando ela fechou sem salvar, o trabalho se perdeu.",
        visual: box("🎨", "Ainda não guardado", 34, 48, .2, "apagado grande") + box("❌", "Fechou sem salvar", 70, 48, 3.6),
        tags: [{ t: "PERDEU!", x: 50, y: 24, at: 5, vermelho: true }] },

      { chip: "A SOLUÇÃO", emo: "ok", nome: "SALVAR", fala: "A solução é salvar! Escolha onde guardar, dê um nome e clique em Salvar. Ou use o atalho: Ctrl mais S.",
        visual: box("📁", "1. Onde", 16, 50, 1.6) + linha(22, 50, 30, 50, 2, 1) + box("✏️", "2. Nome", 36, 50, 2.4) + linha(42, 50, 50, 50, 2.8, 1) + box("💾", "3. Salvar", 56, 50, 3.2, "destaque") + box("⌨️", "Ctrl + S", 82, 50, 4.6, "destaque"),
        tags: [{ t: "ATALHO", x: 82, y: 32, at: 5 }] },

      { chip: "ARMAZENAMENTO", emo: "ok", nome: "ARMAZENAMENTO", fala: "O arquivo fica guardado no armazenamento: no HD, no SSD ou no pen drive. E continua lá, mesmo com o computador desligado.",
        visual: box("💽", "HD", 28, 46, 2) + box("⚡", "SSD", 50, 46, 2.6) + box("🔌", "Pen drive", 72, 46, 3.2),
        tags: [{ t: "DISCO QUE GIRA", x: 28, y: 66, at: 2.4 }, { t: "MAIS RÁPIDO", x: 50, y: 66, at: 3 }, { t: "CABE NO BOLSO", x: 72, y: 66, at: 3.6 }, { t: "🔌 MESMO DESLIGADO", x: 50, y: 28, at: 5 }] },

      { chip: "PASTAS", emo: "ok", nome: "PASTAS", fala: "Para não virar bagunça, usamos pastas: elas são como gavetas que organizam os arquivos. E lembre: nunca apague nem mexa nos arquivos dos colegas.",
        visual: box("📄", "Texto", 18, 38, .4) + box("🖼️", "Foto", 18, 62, .7) + linha(24, 40, 42, 48, 1.4, 1) + linha(24, 60, 42, 52, 1.6, 1) + box("🗂️", "Pasta = gaveta", 50, 50, 1.2, "grande") + box("🚫", "Arquivo do colega", 80, 50, 4.6),
        tags: [{ t: "NÃO MEXA!", x: 80, y: 32, at: 5.2, vermelho: true }] },

      { chip: "METADADOS", emo: "uau", nome: "METADADOS", fala: "Cada arquivo também tem nome, tipo, tamanho e data. Essas informações sobre o arquivo se chamam metadados.",
        visual: box("📄", "trabalho.png", 30, 48, .3, "grande"),
        tags: [{ t: "NOME: trabalho", x: 66, y: 30, at: 1.4 }, { t: "TIPO: imagem (.png)", x: 66, y: 42, at: 1.9 }, { t: "TAMANHO: 2 MB", x: 66, y: 54, at: 2.4 }, { t: "DATA: 09/11", x: 66, y: 66, at: 2.9 }] },

      { chip: "ONDE EU USO ISSO?", emo: "uau", fala: "Onde eu uso isso? A foto que você tira no celular vira um arquivo. E quando separa as fotos em álbuns, está organizando em pastas.",
        visual: box("📸", "Foto = arquivo", 30, 48, 1.4) + linha(37, 48, 63, 48, 3.4, 2) + box("🗂️", "Álbum = pasta", 70, 48, 3.6) },

      { semMascote: true, fala: "Agora é com vocês: abram a Missão 1 no portal!",
        visual: `<div class="hs-capa"><div class="hs-capa-ic">🚀</div><h1>Agora é com vocês!</h1><h2>Abram a Missão 1 no portal</h2>${prof}</div>` }
    ]
  });
})();

/* Sincronia m1 com a narração gravada (Grok): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */
PORTAL.historias["informatica-6ano-4bim"].sinc = Object.assign(PORTAL.historias["informatica-6ano-4bim"].sinc || {}, { m1: [{"dur":3.74,"wt":[0.34,0.44,0.91,1.01,1.23,1.65,2.17,2.56,2.7,3.08,3.26]},{"dur":7.77,"wt":[0.35,0.45,0.63,0.92,1.02,1.24,1.57,1.91,2.05,2.38,2.52,3.33,3.59,3.69,4.2,4.37,4.67,4.77,5.18,5.5,5.6,5.93,6.23,6.41,6.98,7.16]},{"dur":7.13,"wt":[0.35,0.59,1.37,1.65,1.85,2.09,2.2,2.7,3.73,3.93,4.13,4.37,4.52,4.76,5.31,5.89,6.52,6.63]},{"dur":5.9,"wt":[0.35,0.76,0.88,1.5,1.62,2.17,2.54,3.41,3.68,4.29,4.56,4.87,5.04,5.31],"nomeAt":0.35},{"dur":8.25,"wt":[0.35,1.01,1.12,1.47,1.58,2.35,2.47,2.72,2.83,3.54,3.7,4.27,4.71,4.87,5.31,5.42,5.72,5.88,6.35,6.87,7.12,7.46,7.62],"nomeAt":0.35},{"dur":5.48,"wt":[0.35,0.66,0.78,1.14,1.26,1.81,2.17,2.28,2.83,3.0,3.46,3.78,4.09,4.26,4.47,4.64,4.81],"nomeAt":0.35},{"dur":7.39,"wt":[0.35,0.46,0.65,0.88,1.07,1.26,1.41,1.64,2.0,2.61,2.84,2.99,3.35,3.66,3.77,4.04,4.19,4.65,4.84,4.94,5.64,5.75,6.06,6.17,6.53,6.72,6.82]},{"dur":5.99,"wt":[0.35,0.51,0.79,0.99,1.15,1.39,1.68,1.88,1.99,2.88,3.04,3.55,3.79,3.9,4.19,4.3,4.46,4.79,5.21,5.32],"nomeAt":1.99},{"dur":9.42,"wt":[0.35,0.57,0.69,0.81,1.21,1.38,2.19,2.64,2.86,3.71,3.92,4.24,4.45,5.33,5.83,6.19,6.72,7.08,7.29,7.7,8.15,8.6,8.77]},{"dur":6.02,"wt":[0.35,0.45,0.78,0.87,1.2,1.74,1.95,2.51,2.65,2.78,3.0,3.09,3.38,4.01,4.34,4.48,4.65,4.99,5.31,5.53,5.74],"nomeAt":0.87},{"dur":7.92,"wt":[0.35,0.47,0.87,1.13,1.58,1.75,2.63,2.8,3.17,3.33,3.55,3.71,3.88,4.09,4.45,4.57,5.63,5.84,6.35,6.57,6.68,7.23],"nomeAt":1.75},{"dur":8.78,"wt":[0.35,0.6,0.81,1.1,1.54,1.88,2.27,2.67,2.88,3.13,3.51,3.72,4.2,4.36,4.84,5.5,6.33,6.63,6.97,7.17,7.43,7.63,8.06,8.27],"nomeAt":1.88},{"dur":6.83,"wt":[0.35,0.62,1.05,1.42,1.65,1.97,2.5,2.92,3.2,3.53,4.27,4.89,5.22,5.34,5.77,5.94,6.32],"nomeAt":6.32},{"dur":7.66,"wt":[0.35,0.58,0.73,0.92,1.68,1.78,2.01,2.2,2.43,2.67,2.81,3.17,3.4,3.55,4.35,4.46,4.77,5.09,5.24,5.51,5.66,6.2,6.43,6.95,7.1]},{"dur":6.05,"wt":[0.35,0.64,0.75,0.94,1.48,1.76,1.87,2.2,2.31,2.47]}] });
