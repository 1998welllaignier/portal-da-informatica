/* ============================================================
   ATIVIDADES — Informática 9º ano — 1º bimestre de 2027 · TRILHA PASSO A PASSO
   Mesmas missões da turma, um passo por vez: clicar nos lugares do mapa,
   seguir as árvores e mudar só um pedacinho dos programas já montados.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const v = n => ({ v: n });
  const bairro = {
    vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "Pr", rot: "Praça", x: 260, y: 300 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
    arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "Pr", 4], ["Pr", "E", 4], ["C", "E", 9]]
  };
  const escola = {
    vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
      { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]
  };
  const objetos = { t: "❓ É eletrônico?", filhos: [
    { r: "Sim", t: "❓ Tem tela?", filhos: [{ r: "Sim", t: "🖥️ Monitor" }, { r: "Não", t: "⌨️ Teclado" }] },
    { r: "Não", t: "❓ Serve para escrever?", filhos: [{ r: "Sim", t: "✏️ Lápis" }, { r: "Não", t: "🪑 Cadeira" }] }] };
  const semaforoTique = ["quando", "tique", [["se", ["=", v("luz"), "verde"], [["definir", "luz", "amarelo"]], [["se", ["=", v("luz"), "amarelo"], [["definir", "luz", "vermelho"]], [["definir", "luz", "verde"]]]]], ["mostrar", v("luz")]]];
  PORTAL.registrarAtividades("informatica-9ano-2027-1bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      Object.assign({ tipo: "grafo", titulo: "Trace o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos", descricao: "Grafo do bairro" }, bairro,
        { enunciado: "<p>Clique nos lugares, um depois do outro, começando pela <strong>Casa</strong>. A soma aparece embaixo. Procure a <strong>menor soma</strong>.</p>",
          dicas: ["Veja a tabela de caminhos no 💡 Para começar: o de soma 5 passa pela Padaria."],
          explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 minutos." })
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · As partes do grafo",
        pares: [
          { a: "⚪ Vértice", b: "Um ponto (uma esquina)" },
          { a: "➖ Aresta", b: "Uma ligação (uma rua)" },
          { a: "🔢 Peso", b: "O número da aresta (minutos)" }],
        explicacao: "Vértice é ponto, aresta é ligação e peso é o número da aresta." },

      { tipo: "escolha", titulo: "Passo 2 · Some os pesos",
        perguntas: [
          { p: "Casa → Praça → Escola (4 + 4) dá quantos minutos?", opcoes: ["8", "9", "5"], certo: 0 },
          { p: "Casa → Padaria → Escola (3 + 2) dá quantos minutos?", opcoes: ["5", "8", "9"], certo: 0 }],
        explicacao: "4 + 4 = <strong>8</strong>. 3 + 2 = <strong>5</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Qual é o mais curto?",
        perguntas: [
          { p: "Qual é o caminho mais curto da Casa até a Escola?", opcoes: ["Casa → Padaria → Escola (5)", "Casa → Escola direto (9)", "Casa → Praça → Escola (8)"], certo: 0 }],
        explicacao: "O mais curto é o de <strong>menor soma</strong>: 5 minutos, pela Padaria." },

      { tipo: "escolha", titulo: "Passo 4 · Menos paradas",
        perguntas: [
          { p: "A rua direta tem só uma aresta. Ela é a mais curta?", opcoes: ["Não: ela soma 9", "Sim, sempre"], certo: 0 }],
        explicacao: "Menos paradas <strong>nem sempre</strong> é mais curto: a rua direta soma 9." }
    ],
    vf: [{ v: true }, { v: false, why: "O mais curto é o de <strong>menor soma</strong>, nem sempre o de menos paradas." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "arvore", titulo: "A árvore de pastas", modo: "pastas",
        raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📄 redação.txt" }, { t: "📄 mapa.png" }] }, { t: "📁 Fotos", filhos: [{ t: "📄 aniversário.jpg" }] }] },
        perguntas: [{ p: "Qual pasta é a raiz da árvore?", r: ["Documentos"], tipo: "letras" }],
        dicas: ["A raiz é a de cima."],
        explicacao: "A raiz é <strong>Documentos</strong>, a pasta de cima, onde tudo começa." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Raiz, pasta do meio ou folha?",
        categorias: [{ id: "R", rot: "Raiz", ic: "🌱", desc: "em cima" }, { id: "M", rot: "Do meio", ic: "📁", desc: "tem filhos" }, { id: "F", rot: "Folha", ic: "🍃", desc: "sem filhos" }],
        itens: [
          { t: "📁 Documentos", ic: "📁", c: "R" },
          { t: "📁 Escola", ic: "📁", c: "M" },
          { t: "📄 mapa.png", ic: "📄", c: "F" }],
        explicacao: "Documentos é a raiz. Escola tem filhos. mapa.png não tem filhos: é folha." },

      { tipo: "escolha", titulo: "Passo 2 · O nível",
        perguntas: [
          { p: "A raiz Documentos está no nível 0. Em que nível está a pasta Escola?", opcoes: ["1", "0", "2"], certo: 0 }],
        explicacao: "Escola fica 1 passo abaixo da raiz: <strong>nível 1</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Pai e filho",
        perguntas: [
          { p: "Quem é o pai de aniversário.jpg?", opcoes: ["Fotos", "Escola", "mapa.png"], certo: 0 }],
        explicacao: "Logo acima de aniversário.jpg está a pasta <strong>Fotos</strong>: ela é o pai." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "Qual destes é uma árvore?", opcoes: ["As pastas do computador", "Uma bola"], certo: 0 }],
        explicacao: "As <strong>pastas</strong> formam uma árvore: pasta dentro de pasta." }
    ],
    vf: [{ v: true }, { v: false, why: "Folha é o vértice <strong>sem</strong> filhos." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "arvore", titulo: "Adivinhe o objeto da sala", modo: "decisao", raiz: objetos,
        perguntas: [{ p: "É eletrônico? Sim. Tem tela? Sim. Qual é o objeto?", r: ["Monitor"], tipo: "letras" }],
        explicacao: "Sim → “Tem tela?” → sim → folha: <strong>Monitor</strong>." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Siga a árvore",
        perguntas: [
          { p: "É eletrônico? Não. Serve para escrever? Sim. Qual é o objeto?", opcoes: ["✏️ Lápis", "🪑 Cadeira", "⌨️ Teclado"], certo: 0 },
          { p: "É eletrônico? Sim. Tem tela? Não. Qual é o objeto?", opcoes: ["⌨️ Teclado", "🖥️ Monitor", "✏️ Lápis"], certo: 0 }],
        explicacao: "Não → escrever? sim → <strong>Lápis</strong>. Sim → tela? não → <strong>Teclado</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Quantas folhas?",
        perguntas: [
          { p: "Quantas respostas finais (folhas) a árvore tem?", opcoes: ["4", "2", "3"], certo: 0 }],
        explicacao: "Monitor, Teclado, Lápis e Cadeira: <strong>4 folhas</strong>." },

      { tipo: "classificar", titulo: "Passo 3 · Pergunta boa ou ruim?",
        categorias: [{ id: "B", rot: "Boa", ic: "👍", desc: "resposta clara" }, { id: "R", rot: "Ruim", ic: "👎", desc: "cada um responde diferente" }],
        itens: [
          { t: "É eletrônico?", ic: "🔌", c: "B" },
          { t: "Ele é legal?", ic: "🤷", c: "R" },
          { t: "Tem tela?", ic: "🖥️", c: "B" }],
        explicacao: "Pergunta boa tem resposta clara (sim ou não). “Ele é legal?” depende de quem responde." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "“Digite 1 para…, 2 para…” no telefone é:", opcoes: ["Uma árvore de decisão", "Um mapa de ruas"], certo: 0 }],
        explicacao: "Cada número escolhido leva a outro galho: é uma <strong>árvore de decisão</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "“Ele é legal?” não tem resposta clara: cada pessoa responde de um jeito." }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "blocos", titulo: "Rode: os vizinhos do Pátio",
        enunciado: "<p>A lista <strong>vizinhos</strong> guarda os lugares ligados ao Pátio. Aperte <strong>▶️ Rodar</strong>: o programa mostra quantos são (o grau).</p>",
        caixa: ["mostrar", "lista", "variavel"],
        inicio: [["definir", "vizinhos", ["lista", "Portão", "Cantina", "Informática", "Biblioteca"]], ["mostrar", ["tamanho", v("vizinhos")]]],
        esperado: ["4"],
        solucao: [["definir", "vizinhos", ["lista", "Portão", "Cantina", "Informática", "Biblioteca"]], ["mostrar", ["tamanho", v("vizinhos")]]],
        explicacao: "O Pátio tem 4 vizinhos: o grau do Pátio é <strong>4</strong>." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Os vizinhos",
        enunciado: "<p>Veja a tabela <strong>Vértice · Vizinhos</strong>.</p>",
        perguntas: [
          { p: "Quais são os vizinhos da Informática?", opcoes: ["Pátio e Biblioteca", "Portão e Cantina"], certo: 0 },
          { p: "Qual é o grau do Portão?", opcoes: ["1", "4"], certo: 0 }],
        explicacao: "A Informática liga ao Pátio e à Biblioteca. O Portão só tem um vizinho (o Pátio): grau <strong>1</strong>." },

      { tipo: "blocos", titulo: "Passo 2 · Mude a resposta da árvore",
        enunciado: "<p>A árvore do objeto já virou blocos. Agora o objeto <strong>é eletrônico</strong> e <strong>tem tela</strong>, mas a variável tela está como <strong>falso</strong>. Troque <strong>falso</strong> por <strong>verdadeiro</strong> no bloco “definir tela” e rode: deve aparecer <strong>Monitor</strong>.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar", "logica"],
        inicio: [["definir", "eletronico", true], ["definir", "tela", false],
          ["se", ["=", v("eletronico"), true], [["se", ["=", v("tela"), true], [["mostrar", "Monitor"]], [["mostrar", "Teclado"]]]], [["mostrar", "Lápis ou Cadeira"]]]],
        esperado: ["Monitor"],
        solucao: [["definir", "eletronico", true], ["definir", "tela", true],
          ["se", ["=", v("eletronico"), true], [["se", ["=", v("tela"), true], [["mostrar", "Monitor"]], [["mostrar", "Teclado"]]]], [["mostrar", "Lápis ou Cadeira"]]]],
        dicas: ["No bloco “definir tela para falso”, clique em falso e escolha verdadeiro."],
        explicacao: "É eletrônico? sim → tem tela? sim → <strong>Monitor</strong>. É o <strong>se</strong> dentro do <strong>se</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Se dentro de se",
        perguntas: [
          { p: "No programa, a árvore de decisão vira:", opcoes: ["Um se dentro de outro se", "Uma lista de frutas"], certo: 0 }],
        explicacao: "Cada pergunta é um <strong>se</strong>; as perguntas de baixo ficam <strong>dentro</strong> do se de cima." },

      { tipo: "escolha", titulo: "Passo 4 · Na rede social",
        perguntas: [
          { p: "A rede social guarda, para cada pessoa:", opcoes: ["A lista de amigos (vizinhos)", "Só a foto"], certo: 0 }],
        explicacao: "Cada pessoa tem a sua <strong>lista de vizinhos</strong>: os amigos." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Vizinhos são lugares <strong>ligados</strong> por uma aresta." }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
    pratica: [
      { tipo: "ligar", titulo: "A catraca: o que acontece?",
        enunciado: "<p>Veja a tabela da catraca no 💡 Para começar.</p>",
        pares: [
          { a: "🔒 Travada + 💳 cartão", b: "🔓 Liberada" },
          { a: "🔒 Travada + 🚶 empurrar", b: "🔒 Continua travada" },
          { a: "🔓 Liberada + 🚶 empurrar", b: "Gira e fica 🔒 travada" }],
        explicacao: "Cartão libera. Empurrar a travada não faz nada. Empurrar a liberada: gira e trava de novo." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Estado ou entrada?",
        categorias: [{ id: "E", rot: "Estado", ic: "🔒", desc: "como a máquina está" }, { id: "N", rot: "Entrada", ic: "👆", desc: "o que acontece" }],
        itens: [
          { t: "Travada", ic: "🔒", c: "E" },
          { t: "Passar o cartão", ic: "💳", c: "N" },
          { t: "Liberada", ic: "🔓", c: "E" },
          { t: "Empurrar", ic: "🚶", c: "N" }],
        explicacao: "Travada e liberada são <strong>estados</strong>. Cartão e empurrar são <strong>entradas</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Siga a catraca",
        perguntas: [
          { p: "A catraca começa travada. Passo o cartão. Ela fica:", opcoes: ["Liberada", "Travada"], certo: 0 },
          { p: "Agora está liberada. Empurro. Ela:", opcoes: ["Gira e fica travada", "Fica liberada para sempre"], certo: 0 }],
        explicacao: "Travada + cartão = <strong>liberada</strong>. Liberada + empurrar = gira e fica <strong>travada</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Transição",
        perguntas: [
          { p: "Mudar de travada para liberada é uma:", opcoes: ["Transição", "Folha"], certo: 0 }],
        explicacao: "Cada mudança de estado é uma <strong>transição</strong>." },

      { tipo: "escolha", titulo: "Passo 4 · Outros autômatos",
        perguntas: [
          { p: "Qual destes é um autômato?", opcoes: ["O semáforo", "Uma pedra"], certo: 0 }],
        explicacao: "O semáforo muda de estado (verde, amarelo, vermelho): é um <strong>autômato</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "Empurrar a catraca <strong>travada</strong> não faz ela girar." }, { v: true }]
  },

  /* ======================= MISSÃO 6 ======================= */
  m6: {
    pratica: [
      { tipo: "blocos", titulo: "Rode o contador de cliques",
        enunciado: "<p>Aperte <strong>▶️ Rodar</strong>: o portal aperta o <strong>🟢 botão</strong> 3 vezes, e o tratador roda a cada clique.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🟢 botão verde", "verde"]], disparos: ["verde", "verde", "verde"],
        inicio: [["definir", "cliques", 0], ["quando", "verde", [["mudar", "cliques", 1], ["mostrar", v("cliques")]]]],
        esperado: ["1", "2", "3"],
        solucao: [["definir", "cliques", 0], ["quando", "verde", [["mudar", "cliques", 1], ["mostrar", v("cliques")]]]],
        explicacao: "O tratador rodou 3 vezes, uma a cada clique: 1, 2, 3." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Evento e tratador",
        pares: [
          { a: "👆 Tocar no ícone", b: "Abrir o aplicativo" },
          { a: "🔔 Chegar mensagem", b: "Vibrar e mostrar a notificação" },
          { a: "⬆️ Apertar o botão de pular", b: "O personagem pula" }],
        explicacao: "Cada evento (o que acontece) tem o seu tratador (o que o programa faz)." },

      { tipo: "blocos", titulo: "Passo 2 · O botão que fala",
        enunciado: "<p>Quando o <strong>🔵 botão azul</strong> é apertado, o programa mostra “Oi”. Troque <strong>Oi</strong> por <strong>Olá!</strong> e rode. O portal aperta o botão 2 vezes.</p>",
        caixa: ["mostrar", "texto", "evento"],
        eventos: [["🔵 botão azul", "azul"]], disparos: ["azul", "azul"],
        inicio: [["quando", "azul", [["mostrar", "Oi"]]]],
        esperado: ["Olá!", "Olá!"],
        solucao: [["quando", "azul", [["mostrar", "Olá!"]]]],
        dicas: ["Clique no texto Oi, dentro do bloco “quando acontecer”, e escreva Olá!"],
        explicacao: "O botão foi apertado 2 vezes: o tratador rodou <strong>2 vezes</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Quantas vezes?",
        perguntas: [
          { p: "O botão é apertado 5 vezes. Quantas vezes o tratador roda?", opcoes: ["5", "1"], certo: 0 }],
        explicacao: "O tratador roda <strong>toda vez</strong> que o evento acontece: 5 vezes." },

      { tipo: "escolha", titulo: "Passo 4 · Sensor",
        perguntas: [
          { p: "A porta automática abre quando:", opcoes: ["O sensor percebe alguém", "Alguém escreve uma lista"], certo: 0 }],
        explicacao: "O <strong>sensor</strong> percebe o movimento e gera o evento." }
    ],
    vf: [{ v: true }, { v: false, why: "O tratador roda <strong>toda vez</strong> que o evento acontece." }, { v: true }]
  },

  /* ======================= MISSÃO 7 (extra) ======================= */
  m7: {
    pratica: [
      { tipo: "ordenar", titulo: "O ciclo do semáforo",
        itens: ["🟢 Verde", "🟡 Amarelo", "🔴 Vermelho"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong> e deixe na ordem do ciclo, começando pelo verde.</p>",
        explicacao: "Verde → amarelo → vermelho → (volta ao verde)." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Com um tique",
        perguntas: [
          { p: "Está verde. Tique. Fica:", opcoes: ["🟡 Amarelo", "🔴 Vermelho"], certo: 0 },
          { p: "Está vermelho. Tique. Fica:", opcoes: ["🟢 Verde", "🟡 Amarelo"], certo: 0 }],
        explicacao: "Verde → <strong>amarelo</strong>. Vermelho → <strong>verde</strong> (o ciclo recomeça)." },

      { tipo: "blocos", titulo: "Passo 2 · Rode o semáforo",
        enunciado: "<p>O programa do semáforo está pronto, mas começa no <strong>vermelho</strong>. Troque “vermelho” por <strong>verde</strong> no bloco “definir luz” e rode. O portal dá 3 tiques.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
        eventos: [["⏱️ tique", "tique"]], disparos: ["tique", "tique", "tique"],
        inicio: [["definir", "luz", "vermelho"], semaforoTique],
        esperado: ["amarelo", "vermelho", "verde"],
        solucao: [["definir", "luz", "verde"], semaforoTique],
        dicas: ["Clique no texto vermelho do bloco “definir luz para” e escreva verde."],
        explicacao: "Começando no verde, 3 tiques: <strong>amarelo, vermelho, verde</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · O botão de pedestre",
        perguntas: [
          { p: "Está verde e o pedestre aperta o botão. Fica:", opcoes: ["🟡 Amarelo", "🟢 Verde"], certo: 0 },
          { p: "Está vermelho e o pedestre aperta o botão. Fica:", opcoes: ["🔴 Vermelho", "🟢 Verde"], certo: 0 }],
        explicacao: "Verde + botão = <strong>amarelo</strong>. No vermelho, o botão <strong>não muda nada</strong>." },

      { tipo: "escolha", titulo: "Passo 4 · Temporizador",
        perguntas: [
          { p: "O micro-ondas apita quando o tempo acaba. Quem avisa?", opcoes: ["O temporizador", "O pedestre"], certo: 0 }],
        explicacao: "O <strong>temporizador</strong> conta o tempo e avisa quando acaba." }
    ],
    vf: [{ v: true }, { v: false, why: "Depois do amarelo vem o <strong>vermelho</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 8 (extra) ======================= */
  m8: {
    pratica: [
      Object.assign({ tipo: "grafo", titulo: "Do Portão até a Sala de Informática", de: "Po", para: "In", unidade: "minutos", descricao: "Grafo da escola" }, escola,
        { enunciado: "<p>Clique nos lugares, começando pelo <strong>Portão</strong>, até a <strong>Sala de Informática</strong>, com a <strong>menor soma</strong>.</p>",
          explicacao: "Portão → Pátio → Informática = 1 + 2 = 3 minutos." })
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Vértice ou aresta?",
        perguntas: [
          { p: "No grafo da escola, a Biblioteca é:", opcoes: ["Um vértice", "Uma aresta"], certo: 0 },
          { p: "O corredor Pátio — Cantina é:", opcoes: ["Uma aresta", "Um vértice"], certo: 0 }],
        explicacao: "Lugar = <strong>vértice</strong>. Corredor = <strong>aresta</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · O mais conectado",
        perguntas: [
          { p: "Qual lugar é o mais conectado?", opcoes: ["Pátio (grau 4)", "Portão (grau 1)"], certo: 0 }],
        explicacao: "O <strong>Pátio</strong> liga a 4 lugares: é o mais conectado." },

      { tipo: "escolha", titulo: "Passo 3 · Quanto tempo?",
        perguntas: [
          { p: "Portão → Pátio → Informática (1 + 2) leva:", opcoes: ["3 minutos", "5 minutos"], certo: 0 }],
        explicacao: "1 + 2 = <strong>3 minutos</strong>." },

      { tipo: "escolha", titulo: "Passo 4 · Rota de fuga",
        perguntas: [
          { p: "A rota de fuga é:", opcoes: ["O caminho mais curto e seguro até a saída", "O caminho mais longo"], certo: 0 }],
        explicacao: "Numa emergência, o melhor é o caminho <strong>mais curto e seguro</strong>." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "A rota de fuga é o caminho <strong>mais curto</strong> e seguro." }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma dos pesos", "Menos paradas sempre"], certo: 0 }], explicacao: "O mais curto é o de menor soma dos pesos." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Na árvore, a raiz fica:", opcoes: ["Em cima", "Embaixo"], certo: 0 }], explicacao: "Na computação, a raiz fica em cima." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "As folhas da árvore de decisão são:", opcoes: ["As decisões finais", "As perguntas"], certo: 0 }], explicacao: "As folhas são as decisões finais." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "O grau de um lugar é:", opcoes: ["Quantos vizinhos ele tem", "O nome dele"], certo: 0 }], explicacao: "Grau é quantos vizinhos." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Responda", perguntas: [{ p: "Catraca travada + cartão fica:", opcoes: ["Liberada", "Travada"], certo: 0 }], explicacao: "O cartão libera a catraca." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Responda", perguntas: [{ p: "O tratador roda:", opcoes: ["Toda vez que o evento acontece", "Uma vez só"], certo: 0 }], explicacao: "Roda toda vez que o evento acontece." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Responda", perguntas: [{ p: "Depois do verde, com um tique, vem:", opcoes: ["Amarelo", "Vermelho"], certo: 0 }], explicacao: "Verde → amarelo." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Responda", perguntas: [{ p: "O lugar mais conectado da escola é:", opcoes: ["O Pátio", "O Portão"], certo: 0 }], explicacao: "O Pátio tem grau 4." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-1bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Grafos", perguntas: [{"p": "No grafo do mapa, uma esquina é um:", "opcoes": ["Vértice", "Peso"], "certo": 0}, {"p": "O caminho mais curto é o de:", "opcoes": ["Maior soma", "Menor soma"], "certo": 1}],
      explicacao: "No grafo do mapa, uma esquina é um: → <strong>Vértice</strong> · O caminho mais curto é o de: → <strong>Menor soma</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Árvores", perguntas: [{"p": "Na árvore, o vértice sem filhos é a:", "opcoes": ["Folha", "Raiz"], "certo": 0}, {"p": "A raiz Documentos está no nível:", "opcoes": ["2", "0"], "certo": 1}],
      explicacao: "Na árvore, o vértice sem filhos é a: → <strong>Folha</strong> · A raiz Documentos está no nível: → <strong>0</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Árvores de decisão", perguntas: [{"p": "É eletrônico? Sim. Tem tela? Não. O objeto é:", "opcoes": ["Teclado", "Monitor"], "certo": 0}, {"p": "Uma boa pergunta tem resposta:", "opcoes": ["Diferente para cada pessoa", "Clara (sim ou não)"], "certo": 1}],
      explicacao: "É eletrônico? Sim. Tem tela? Não. O objeto é: → <strong>Teclado</strong> · Uma boa pergunta tem resposta: → <strong>Clara (sim ou não)</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Programar com grafos e árvores", perguntas: [{"p": "O Portão só se liga ao Pátio. O grau do Portão é:", "opcoes": ["1", "4"], "certo": 0}, {"p": "A árvore de decisão, no programa, vira:", "opcoes": ["Uma lista de compras", "Se dentro de se"], "certo": 1}],
      explicacao: "O Portão só se liga ao Pátio. O grau do Portão é: → <strong>1</strong> · A árvore de decisão, no programa, vira: → <strong>Se dentro de se</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Autômatos", perguntas: [{"p": "Catraca liberada + empurrar:", "opcoes": ["Gira e fica travada", "Fica liberada"], "certo": 0}, {"p": "Travada e liberada são:", "opcoes": ["Entradas", "Estados"], "certo": 1}],
      explicacao: "Catraca liberada + empurrar: → <strong>Gira e fica travada</strong> · Travada e liberada são: → <strong>Estados</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Eventos", perguntas: [{"p": "O botão foi apertado 3 vezes. O tratador roda:", "opcoes": ["Toda vez que o evento acontece", "Uma vez só"], "certo": 0}, {"p": "A porta automática abre quando o sensor:", "opcoes": ["Desliga", "Percebe alguém"], "certo": 1}],
      explicacao: "O botão foi apertado 3 vezes. O tratador roda: → <strong>Toda vez que o evento acontece</strong> · A porta automática abre quando o sensor: → <strong>Percebe alguém</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · O semáforo", perguntas: [{"p": "Está verde. Tique. Fica:", "opcoes": ["Amarelo", "Vermelho"], "certo": 0}, {"p": "Está vermelho e o pedestre aperta o botão. Fica:", "opcoes": ["Verde", "Vermelho"], "certo": 1}],
      explicacao: "Está verde. Tique. Fica: → <strong>Amarelo</strong> · Está vermelho e o pedestre aperta o botão. Fica: → <strong>Vermelho</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · O mapa da escola", perguntas: [{"p": "Portão → Pátio → Informática (1 + 2) leva:", "opcoes": ["3 minutos", "5 minutos"], "certo": 0}, {"p": "O lugar mais conectado da escola é:", "opcoes": ["O Portão", "O Pátio"], "certo": 1}],
      explicacao: "Portão → Pátio → Informática (1 + 2) leva: → <strong>3 minutos</strong> · O lugar mais conectado da escola é: → <strong>O Pátio</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026): o mesmo ❓ gancho da turma, "O que você já sabe?" na M1
   e o 🛠️ "Onde eu uso isso?" prático em versão calma (simulador curto + 2 perguntas).
   Tudo cobra só o que o Para começar da Trilha explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-1bim-trilha"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  /* ❓ o mesmo gancho da apostila da turma */
  const GANCHO = {"m1":{"html":"<p>🛵 O entregador de lanche pode chegar à sua casa por <b>três caminhos</b>. O aplicativo avisa: “vá pela padaria: <b>5 minutos</b>”.</p><p>🤔 Como o aplicativo escolheu? Ele conhece cada rua? E por que o caminho com <b>mais paradas</b> pode ser o mais rápido?</p>"},"m2":{"html":"<p>🏆 No mata-mata da Copa, muitos times começam e só <b>um</b> fica campeão. No celular, a pasta <b>Fotos</b> tem pastas dentro, que têm arquivos dentro.</p><p>🤔 O que o chaveamento da Copa e as pastas do celular têm em comum? Por que os dois são uma “árvore de cabeça para baixo”?</p>"},"m3":{"html":"<p>📞 Você liga para a operadora e ouve: “Digite <b>1</b> para segunda via, <b>2</b> para falar com um atendente…”. Depois, outra pergunta, e mais outra.</p><p>🤔 Como o atendimento sabe para onde mandar você? E como o jogo do gênio adivinha o personagem só com perguntas de <b>sim ou não</b>?</p>"},"m4":{"html":"<p>👥 A rede social mostra: “Você tem <b>4 amigos</b>” e, quando você toca num amigo, aparece a lista dos amigos dele.</p><p>🤔 Como o programa <b>guarda</b> quem é amigo de quem? E como ele <b>conta</b> os seus amigos tão rápido?</p>"},"m5":{"html":"<p>🥤 Você coloca a moeda na máquina de refrigerante, ela pisca “escolha”, você aperta o botão e a lata cai. Mas se apertar o botão <b>antes</b> da moeda, nada acontece.</p><p>🤔 Como a máquina “lembra” se você já pagou? O mesmo botão pode fazer coisas diferentes?</p>"},"m6":{"html":"<p>🔔 Seu celular está parado em cima da mesa. De repente, chega uma mensagem: ele <b>vibra</b> e mostra a notificação.</p><p>🤔 O celular ficou o tempo todo perguntando “chegou mensagem? chegou?”. Ou ele fica <b>esperando</b> algo acontecer para reagir?</p>"},"m7":{"html":"<p>🚦 Na frente da escola, o semáforo tem um <b>botão para pedestre</b>. A Mila apertou o botão quando o sinal dos carros estava <b>vermelho</b> e… nada mudou.</p><p>🤔 O semáforo estragou? Ou existe uma <b>regra</b> que diz quando o botão funciona?</p>"},"m8":{"html":"<p>🚨 Simulado de incêndio! O alarme tocou na Sala de Informática e todo mundo precisa chegar ao <b>Portão</b> pelo caminho mais curto. Mas o corredor entre o Pátio e a Sala de Informática está <b>em reforma</b>.</p><p>🤔 Como achar a rota de fuga quando um caminho está interditado?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const escolaReforma = {
    vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
      { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "Bi", 2], ["In", "Bi", 1]]
  };

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["Casa → Padaria leva 3 minutos e Padaria → Escola leva 2. Quanto tempo leva tudo?", ["5 minutos", "3 minutos"], "Soma os tempos: 3 + 2 = <b>5</b>."],
    ["O caminho mais rápido é o de…", ["Menor soma de minutos", "Mais ruas"], "O mais curto é o de <b>menor soma</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda pelo que você já sabe do dia a dia. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";

  A.m1.aplicar = [
    { tipo: "sim_grafo", titulo: "🛠️ Na vida real: o entregador de lanche",
      enunciado: "<p>Cada número é o tempo em <b>minutos de moto</b>. Saindo da <b>Lanchonete</b>, clique nos lugares, um vizinho por vez, até a <b>Casa</b>, pela <b>menor soma</b>.</p>",
      vertices: { lanche: { nome: "Lanchonete", ic: "🍔", x: 45, y: 120 }, farmacia: { nome: "Farmácia", ic: "💊", x: 200, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 200, y: 195 }, casa: { nome: "Casa", ic: "🏠", x: 360, y: 120 } },
      arestas: [["lanche", "farmacia", 4], ["lanche", "praca", 2], ["praca", "farmacia", 1], ["farmacia", "casa", 2], ["praca", "casa", 6]],
      inicio: "lanche", fim: "casa", menor: 5, solucao: ["lanche", "praca", "farmacia", "casa"], unidade: "min",
      dicas: ["Some: Lanchonete → Praça → Farmácia → Casa = 2 + 1 + 2."],
      explicacao: "Lanchonete → Praça → Farmácia → Casa = 2 + 1 + 2 = 5 min. Mais paradas, menor soma." },
    VIDA(["No grafo, o tempo de cada rua é o…", ["Peso", "Vértice"], "O número na aresta é o <b>peso</b>."],
      ["Uma esquina do mapa, no grafo, é um…", ["Vértice", "Peso"], "Cada ponto é um <b>vértice</b>."])
  ];
  A.m2.aplicar = [
    { tipo: "arvore", titulo: "🛠️ Na vida real: as pastas do celular", modo: "pastas",
      raiz: { t: "📁 Arquivos", filhos: [{ t: "📁 Fotos", filhos: [{ t: "📄 festa.jpg" }] }, { t: "📁 Músicas", filhos: [{ t: "📄 xote.mp3" }] }] },
      enunciado: "<p>Olhe as pastas do celular da Mila e responda.</p>",
      perguntas: [{ p: "Qual pasta é a raiz?", r: ["Arquivos"], tipo: "letras" }, { p: "Quantas folhas (arquivos) a árvore tem?", r: "2", num: true }],
      dicas: ["A raiz é a de cima. As folhas são os arquivos."],
      explicacao: "Raiz: Arquivos. Folhas: festa.jpg e xote.mp3." },
    VIDA(["Na árvore, a <b>raiz</b> fica…", ["Em cima, onde tudo começa", "Embaixo, no fim"], "A árvore da computação é desenhada de cabeça para baixo: a <b>raiz</b> fica em cima."],
      ["Um arquivo, que não tem nada dentro, é uma…", ["Folha", "Raiz"], "Sem filhos, no fim do galho: <b>folha</b>."])
  ];
  A.m3.aplicar = [
    { tipo: "arvore", titulo: "🛠️ Na vida real: em que lixeira vai?", modo: "decisao",
      raiz: { t: "❓ É de papel?", filhos: [{ r: "Sim", t: "🔵 Lixeira azul" }, { r: "Não", t: "❓ É de plástico?", filhos: [{ r: "Sim", t: "🔴 Lixeira vermelha" }, { r: "Não", t: "🟢 Outra lixeira" }] }] },
      enunciado: "<p>Siga a árvore de decisão da coleta seletiva, da raiz até a folha.</p>",
      perguntas: [{ p: "Uma garrafa de <b>plástico</b> vai para qual lixeira?", r: ["vermelha", "Lixeira vermelha"], tipo: "letras" }, { p: "Quantas folhas (decisões) a árvore tem?", r: "3", num: true }],
      dicas: ["Plástico: é de papel? não → é de plástico? sim."],
      explicacao: "Plástico: não → sim → 🔴 vermelha. A árvore tem 3 folhas." },
    VIDA(["Numa árvore de decisão, cada <b>folha</b> é…", ["Uma decisão final", "Uma pergunta"], "A folha é a <b>decisão final</b>."],
      ["As perguntas da árvore de decisão são de…", ["Sim ou não", "Escrever um texto"], "Cada pergunta tem resposta clara: <b>sim ou não</b>."])
  ];
  A.m4.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: os amigos da rede social",
      enunciado: "<p>O programa devia mostrar os <b>seus</b> amigos, mas o para cada está olhando o campo <b>Ana</b>. Troque <b>Ana</b> por <b>Você</b> no para cada e rode. A tela deve mostrar:</p><p><b>Ana</b><br><b>Bia</b><br><b>Caio</b><br><b>Amigos: 3</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada", "ficha"],
      inicio: [["definir", "rede", ["ficha"]], ["ficha_por", "rede", "Você", L("Ana", "Bia", "Caio")], ["ficha_por", "rede", "Ana", L("Você", "Bia")],
        ["paracada", "x", ["campo", v("rede"), "Ana"], [["mostrar", v("x")]]], ["mostrar", ["juntar", "Amigos: ", ["tamanho", ["campo", v("rede"), "Você"]]]]],
      esperado: ["Ana", "Bia", "Caio", "Amigos: 3"],
      solucao: [["definir", "rede", ["ficha"]], ["ficha_por", "rede", "Você", L("Ana", "Bia", "Caio")], ["ficha_por", "rede", "Ana", L("Você", "Bia")],
        ["paracada", "x", ["campo", v("rede"), "Você"], [["mostrar", v("x")]]], ["mostrar", ["juntar", "Amigos: ", ["tamanho", ["campo", v("rede"), "Você"]]]]],
      dicas: ["No bloco “campo … da ficha rede” do para cada, apague Ana e escreva Você (com acento)."],
      explicacao: "Os seus amigos são a lista de vizinhos do vértice Você; o número de amigos é o tamanho dessa lista (o grau)." },
    VIDA(["Para cada pessoa, a lista dos amigos dela. Isso é a…", ["Lista de vizinhos", "Árvore de decisão"], "É a <b>lista de vizinhos</b>."],
      ["O grau de um vértice é…", ["Quantos vizinhos ele tem", "O primeiro vizinho"], "Grau = <b>quantos vizinhos</b> o vértice tem."])
  ];
  A.m5.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: a catraca da escola",
      enunciado: "<p>A catraca começa <b>travada</b>. Você quer entrar. Clique nos passos na ordem.</p>",
      etapas: [{ ic: "🔒", t: "Estado: travada" }, { ic: "💳", t: "Entrada: passa o cartão" }, { ic: "🔓", t: "Transição: fica liberada" }, { ic: "🚶", t: "Entrada: empurra e passa" }],
      okMsg: "Você seguiu o autômato da catraca!",
      explicacao: "Travada + cartão → liberada; liberada + empurrar → a pessoa passa." },
    VIDA(["Travada, liberada… isso são…", ["Estados", "Entradas"], "A catraca está sempre num <b>estado</b>."],
      ["Passar o cartão na catraca é uma…", ["Entrada", "Folha"], "O que acontece com a máquina (cartão, empurrar) é a <b>entrada</b>."])
  ];
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o placar de gols",
      enunciado: "<p>A cada gol, o portal aperta o botão <b>⚽ gol</b>. Falta somar o gol: arraste o bloco <b>alterar gols por 1</b> (gaveta 📦 Variáveis) para dentro do “quando acontecer”, <b>em cima</b> do mostrar, e rode. A tela deve mostrar:</p><p><b>Gols: 1</b><br><b>Gols: 2</b><br><b>Gols: 3</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
      eventos: [["⚽ gol", "gol"]], disparos: ["gol", "gol", "gol"],
      inicio: [["definir", "gols", 0], ["quando", "gol", [["mostrar", ["juntar", "Gols: ", v("gols")]]]]],
      esperado: ["Gols: 1", "Gols: 2", "Gols: 3"],
      solucao: [["definir", "gols", 0], ["quando", "gol", [["mudar", "gols", 1], ["mostrar", ["juntar", "Gols: ", v("gols")]]]]],
      dicas: ["O bloco “alterar … por 1” fica na gaveta 📦 Variáveis. Escolha a variável gols nele."],
      explicacao: "O gol é o evento; o “quando acontecer” é o tratador, que roda a cada gol: soma 1 e mostra." },
    VIDA(["Tocar no ícone e o aplicativo abrir: o toque é o…", ["Evento", "Tratador"], "O que acontece é o <b>evento</b>."],
      ["Os blocos dentro de “quando acontecer” rodam…", ["Toda vez que o evento acontece", "Uma vez só"], "O tratador roda <b>toda vez</b>."])
  ];
  A.m7.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: atravessar com o botão",
      enunciado: "<p>O semáforo dos carros está <b>verde</b> e você quer atravessar. Clique nos passos na ordem.</p>",
      etapas: [{ ic: "🟢", t: "Estado: verde para os carros" }, { ic: "🚶", t: "Você aperta o botão" }, { ic: "🟡", t: "Fica amarelo" }, { ic: "🔴", t: "Fica vermelho e você atravessa" }],
      okMsg: "Você atravessou em segurança!",
      explicacao: "Verde + botão → amarelo; depois do tempo do amarelo, vermelho: o pedestre atravessa." },
    VIDA(["Depois do verde, o semáforo fica…", ["Amarelo", "Vermelho"], "Verde → <b>amarelo</b> → vermelho → verde…"],
      ["O ciclo do semáforo…", ["Se repete para sempre", "Acontece uma vez só"], "O ciclo <b>se repete</b>."])
  ];
  A.m8.aplicar = [
    Object.assign({ tipo: "grafo", titulo: "🛠️ Na vida real: a rota de fuga com o corredor em reforma", de: "In", para: "Po", unidade: "minutos", descricao: "Grafo da escola sem o corredor Pátio–Informática (em reforma)" }, escolaReforma,
      { enunciado: "<p>O corredor entre o Pátio e a Sala de Informática está em reforma (ele sumiu do grafo). Começando pela <b>Sala de Informática</b>, clique nos vértices até o <b>Portão</b>.</p>",
        explicacao: "Sala de Informática → Biblioteca → Pátio → Portão = 1 + 2 + 1 = 4 minutos." }),
    VIDA(["O lugar mais conectado é o de maior…", ["Grau", "Peso"], "Mais arestas = maior <b>grau</b>."],
      ["Quando um corredor fecha, o caminho mais curto…", ["Pode mudar", "Nunca muda"], "Sem a aresta, é preciso procurar de novo: o caminho <b>muda</b>."])
  ];
})();
