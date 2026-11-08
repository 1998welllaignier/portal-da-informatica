/* ============================================================
   ATIVIDADES — Informática 7º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-7ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "O caminho da mensagem",
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>: do seu celular até o servidor.</p>",
        etapas: [
          { ic: "📱", t: "Seu celular", dica: "Comece pelo seu celular." },
          { ic: "📶", t: "Roteador (a caixinha da internet)" },
          { ic: "🏢", t: "Provedor (a empresa da internet)" },
          { ic: "🖥️", t: "Servidor", dica: "O servidor é a última etapa." }],
        okMsg: "Isso! A mensagem viajou até o servidor. ⚡",
        explicacao: "A mensagem viaja em <strong>pacotes</strong>: celular → roteador → provedor → servidor." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Arrume o caminho da mensagem",
        itens: ["📱 Celular", "📶 Roteador", "🏢 Provedor", "🖥️ Servidor"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer). Comece pelo <strong>celular</strong>.</p>",
        explicacao: "Celular → roteador → provedor → servidor." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🌐 O que é a internet?", opcoes: ["A rede que liga o mundo todo", "Um jogo", "Uma tecla do teclado"], certo: 0 },
          { p: "📦 Como a mensagem viaja na internet?", opcoes: ["Em pedaços, chamados pacotes", "Por carta", "Inteira, sem dividir"], certo: 0 }],
        explicacao: "A internet liga o mundo todo, e a mensagem viaja em <strong>pacotes</strong>." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 3 · Site seguro ou perigoso?", colunaItem: "Endereço do site", colunaResp: "Seguro?",
        categorias: [{ id: "S", rot: "🔒 Seguro" }, { id: "N", rot: "⚠️ Perigoso" }],
        itens: [
          { t: "🔒 https://www.gov.br", c: "S" },
          { t: "http://celular-gratis.net", c: "N", why: "Sem o S e sem o cadeado: os dados não viajam protegidos." },
          { t: "🔒 https://pt.wikipedia.org", c: "S" }],
        explicacao: "Com <strong>https</strong> e o cadeado 🔒, os dados viajam protegidos." },

      { tipo: "pc", titulo: "Passo 4 · No computador: olhe o cadeado", programa: "Navegador (Chrome ou Edge)",
        passos: ["Abra o <strong>navegador</strong> (Chrome ou Edge).", "Olhe a <strong>barra de endereço</strong>, lá em cima.", "Procure o <strong>cadeado 🔒</strong> do lado do endereço do portal."],
        conferir: [{ rot: "Tem um cadeado ao lado do endereço?", opcoes: ["Sim, tem o cadeado 🔒", "Não tem nada"], gab: "Sim, tem o cadeado 🔒", re: "^Sim", dica: "O portal usa <strong>https</strong>: aparece o cadeado ao lado do endereço." }],
        okMsg: "Muito bem! O portal é um site seguro. 🔒" }
    ],
    vf: [{ v: true }, { v: false, why: "A mensagem viaja em pedaços, os <strong>pacotes</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "robo", titulo: "Caça ao bug: o robô não chega na estrela",
        enunciado: "<p>O programa tem um <strong>erro</strong> (bug). Clique em <strong>▶ Executar</strong>, veja onde o robô para e <strong>conserte</strong> com os botões <strong>+</strong> e <strong>−</strong>.</p>",
        grade: ["R..", "#..", "#.*"],
        inicial: [["R", 1], ["D", 2]],
        solucao: [["R", 2], ["D", 2]],
        dicas: ["O robô anda pouco para a direita: aumente o primeiro bloco com +."],
        explicacao: "O bug estava no 1º bloco: era <strong>2× ➡️</strong>, não 1×. Testar e corrigir é <strong>depurar</strong>." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Divida a tarefa: fazer um bolo",
        itens: ["🥚 Separar os ingredientes", "🥣 Misturar a massa", "🔥 Assar no forno", "🎂 Decorar o bolo"],
        enunciado: "<p>A tarefa grande foi dividida em <strong>4 partes</strong>. Use as setas <strong>▲</strong> e <strong>▼</strong> para deixar <strong>em ordem</strong>.</p>",
        explicacao: "Dividir uma tarefa grande em partes é a <strong>decomposição</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · A lista de cores",
        enunciado: "<p class=\"regra\">CORES = 1️⃣ <strong>azul</strong> · 2️⃣ <strong>verde</strong> · 3️⃣ <strong>amarelo</strong></p>",
        perguntas: [
          { p: "Qual cor está na posição 2?", opcoes: ["Azul", "Verde", "Amarelo"], certo: 1 },
          { p: "Qual cor está na posição 1?", opcoes: ["Azul", "Verde", "Amarelo"], certo: 0 }],
        explicacao: "Na lista, cada cor tem uma <strong>posição</strong>: 1 = azul, 2 = verde, 3 = amarelo." },

      { tipo: "robo", titulo: "Passo 3 · Ache o bug e conserte",
        enunciado: "<p>Clique em <strong>▶ Executar</strong>. O robô bate na parede 🧱. Conserte o bloco errado com <strong>+</strong> e <strong>−</strong>.</p>",
        grade: ["R..", "##.", "..*"],
        inicial: [["R", 1], ["D", 2]],
        solucao: [["R", 2], ["D", 2]],
        dicas: ["Embaixo do robô tem parede. Ele precisa andar 2 casas para a direita antes de descer."],
        explicacao: "Certo: <strong>2× ➡️</strong> e depois <strong>2× ⬇️</strong>. Você depurou o algoritmo!" },

      { tipo: "escolha", titulo: "Passo 4 · Responda",
        perguntas: [
          { p: "🐞 O que é um bug?", opcoes: ["Um erro no programa", "Um acerto", "Um tipo de teclado"], certo: 0 },
          { p: "✅ Corrigi o erro. E agora?", opcoes: ["Testo de novo", "Apago tudo", "Desligo o computador"], certo: 0 }],
        explicacao: "Bug é erro. Depois de corrigir, sempre <strong>teste de novo</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "Bug é um <strong>erro</strong> do programa." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "Chegou mensagem: golpe ou segura?", app: "📱 Mensagens",
        botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "S", rot: "✅ Segura" }],
        enunciado: "<p>Leia cada mensagem e clique na resposta.</p>",
        itens: [
          { de: "Número desconhecido", t: "PARABÉNS! Você ganhou um celular. Clique em 10 minutos: bit.ly/premio", c: "G", why: "Prêmio + pressa + link estranho = golpe." },
          { de: "Mãe", t: "Filho, chego às 18h.", c: "S" },
          { de: "Número novo", t: "Oi, é a sua tia, troquei de número. Me passa o código que chegou aí?", c: "G", why: "Nunca passe o código." }],
        okMsg: "Você não cai em golpe! Na dúvida, pergunte a um adulto." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Marque os sinais de golpe",
        enunciado: "<p class=\"regra\">“<strong>Só hoje!</strong> Você ganhou um prêmio. <strong>Clique aqui:</strong> premio-ja.xyz e me passe o <strong>código</strong> que chegou no seu celular.”</p>",
        opcoes: [
          { t: "⏰ Tem pressa (só hoje!)", certo: true },
          { t: "🎁 Promete prêmio fácil", certo: true },
          { t: "🔢 Pede o código do celular", certo: true },
          { t: "😊 Tem o nome da sua mãe", certo: false, why: "A mensagem não tem o nome de ninguém da família." }],
        explicacao: "Pressa, prêmio e pedido de código: é <strong>golpe</strong>. Não clique e não passe o código." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🔢 Chegou um código no meu celular. Para quem eu passo?", opcoes: ["Para ninguém", "Para quem pedir", "Para o grupo da turma"], certo: 0 },
          { p: "💬 Não concordo com o colega. O que eu faço?", opcoes: ["Discordo sem ofender", "Xingo o colega", "Espalho a foto dele"], certo: 0 }],
        explicacao: "O código é só seu. Discordar é normal, mas <strong>sem ofender</strong>." },

      { tipo: "classificar", titulo: "Passo 3 · Cyberbullying: faço ou não faço?",
        categorias: [{ id: "F", rot: "Faço", ic: "✅", desc: "ajuda a resolver" }, { id: "N", rot: "Não faço", ic: "❌", desc: "piora a situação" }],
        itens: [
          { t: "Tirar print (a foto da tela)", ic: "📸", c: "F" },
          { t: "Contar a um adulto de confiança", ic: "🧑‍🏫", c: "F" },
          { t: "Responder com outra ofensa", ic: "😡", c: "N" },
          { t: "Bloquear e denunciar", ic: "🚫", c: "F" }],
        explicacao: "No cyberbullying: <strong>print</strong>, <strong>bloquear</strong>, <strong>denunciar</strong> e <strong>contar a um adulto</strong>. Nunca responder com ofensa." },

      { tipo: "pc", titulo: "Passo 4 · No computador: Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>bloco</strong>. Clique em <strong>Bloco de Notas</strong>.", "Digite: <strong>NAO PASSO MEU CODIGO</strong>"],
        conferir: [{ rot: "Clique no que você digitou:", opcoes: ["NAO PASSO MEU CODIGO", "PASSO MEU CODIGO", "MEU JOGO"], gab: "NAO PASSO MEU CODIGO", re: "^NAO PASSO MEU CODIGO$", dica: "Você digitou: NAO PASSO MEU CODIGO." }],
        okMsg: "Isso mesmo! O código é só seu. 🔐" }
    ],
    vf: [{ v: false, why: "O código é só seu: nunca passe para ninguém." }, { v: true }, { v: true }]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🌐 Redes e internet", "⚙️ Algoritmos", "🛡️ Segurança"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
