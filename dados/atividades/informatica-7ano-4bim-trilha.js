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
        okMsg: "Muito bem! O portal é um site seguro. 🔒" },
      { id: "m1-sim-navegador", opcional: true, tipo: "sim_pc", titulo: "🌐 Simulador: endereço, cadeado e guias do navegador",
        enunciado: "<p>No <strong>navegador de mentira</strong>, digite um endereço, confira o cadeado e. O <strong>Bit</strong> ajuda você em cada passo.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Navegador", app: "web" }],
        web: {
          "portal.professorwell.com.br": { titulo: "Portal da Informática", palavras: "portal informatica professor well missões", html: "<p>🎮 Bem-vindo ao <b>Portal da Informática</b>! Escolha a sua turma para começar as missões.</p><p style='font-size:40px'>🏫 💻 🚀</p>" },
          "jogos-gratis-agora.net": { titulo: "JOGOS GRÁTIS AGORA", seguro: false, palavras: "jogos gratis", html: "<p style='color:#c5221f;font-weight:700'>🎁 BAIXE JÁ 500 JOGOS GRÁTIS!!!</p><p>Digite seu email e sua senha para liberar o download.</p>" }
        },
        passos: [
          { faca: "Abra o <b>Navegador</b>: dê <b>duplo clique</b> no ícone 🌐 da área de trabalho.", ok: "abrir:app:web", onde: "ic:Navegador" },
          { faca: "Clique na <b>barra de endereço</b> (a caixa comprida lá em cima), digite <b>portal.professorwell.com.br</b> e aperte <b>Enter</b>.", ok: "url:portal.professorwell.com.br", onde: "web:url", dica: "Digite certinho, com os pontos: portal.professorwell.com.br" },
          { faca: "O portal abriu! Clique no <b>cadeado 🔒</b> do lado do endereço para ver se a conexão é segura.", ok: "cadeado:portal.professorwell.com.br", onde: "web:cadeado" },
        ],
        fimMsg: "Você digitou o endereço, conferiu o cadeado. Navegação segura!",
        explicacao: "O cadeado 🔒 (https) mostra que a conexão é protegida: os pacotes viajam embaralhados. “⚠️ Não seguro” (http) quer dizer que alguém no caminho pode ler o que você digita: nunca coloque senha ali." }
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
        okMsg: "Você não cai em golpe! Na dúvida, pergunte a um adulto." },
      { id: "m3-sim-email", opcional: true, tipo: "sim_pc", titulo: "📧 Simulador: na caixa de email, golpe ou mensagem segura?",
        enunciado: "<p>Você tem emails novos no <strong>computador de mentira</strong>. Descubra quais são <strong>golpe</strong> e denuncie, sem clicar nos links perigosos. O <strong>Bit</strong> confere.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }, { nome: "Navegador", app: "web" }],
        emails: [
          { id: "premio", nome: "Promoção Celular Grátis", de: "premios@ganhe-celular-ja.xyz", assunto: "PARABÉNS!!! Você ganhou um celular 📱",
            html: "<p>Você foi sorteado!!! Clique AGORA e informe seu nome, endereço e CPF para receber o prêmio.</p><p><b>Oferta válida só por 10 minutos!!!</b></p><p><a data-link='ganhe-celular-ja.xyz' data-k='pg:linkpremio'>👉 QUERO MEU CELULAR</a></p>" },
          { id: "conta", nome: "Suporte do Jogo", de: "suporte@frifire-seguranca.com", assunto: "Sua conta do jogo será apagada hoje",
            html: "<p>Detectamos problemas na sua conta. Para não perder suas skins, responda este email com o seu <b>usuário e senha</b> até meia-noite.</p>" },
          { id: "escola", nome: "Coordenação da Escola", de: "coordenacao@escola.edu.br", assunto: "Feira de Ciências: horário",
            html: "<p>Olá, turma! A Feira de Ciências será na sexta, às 8h. O mapa das bancas está no site da escola:</p><p><a data-link='escola.edu.br/feira' data-k='pg:linkfeira'>escola.edu.br/feira</a></p>" }
        ],
        web: {
          "ganhe-celular-ja.xyz": { titulo: "Ganhe seu celular", seguro: false, html: "<p>Digite seu CPF e endereço:</p><label class='campo'>CPF<input data-campo='cpf'></label>" },
          "escola.edu.br/feira": { titulo: "Feira de Ciências", html: "<p>🗺️ Mapa das bancas: Sala 1 – Planetas · Sala 2 – Robótica · Pátio – Vulcão.</p>" }
        },
        passos: [
          { faca: "Abra o <b>Email</b>: dê <b>duplo clique</b> no ícone 📧 da área de trabalho.", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Clique no email <b>PARABÉNS!!! Você ganhou um celular</b> para ler.", ok: "email:abrir:premio", onde: "email:premio" },
          { faca: "Sinais de golpe: prêmio que você não pediu, <b>pressa</b> (10 minutos!), pede <b>CPF</b> e o remetente termina em <b>.xyz</b>. <b>Não clique no link!</b> Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:premio", "email:excluir:premio"], onde: "email:denunciar", erros: { "link:ganhe*": "Opa! Você clicou no link do golpe e caiu num site <b>Não seguro</b>. Na vida real, pare aqui: feche a guia, volte ao Email (📧 na barra de tarefas) e denuncie." } },
          { faca: "Agora abra o email da <b>Coordenação da Escola</b>.", ok: "email:abrir:escola", onde: "email:escola" },
          { faca: "Esse é seguro: remetente da escola, sem pressa e sem pedir dados. Clique no link <b>escola.edu.br/feira</b> para ver o mapa.", ok: "link:escola.edu.br/feira", onde: "pg:linkfeira" }
        ],
        fimMsg: "Você denunciou o golpe sem clicar nos links perigosos e abriu só o link seguro da escola. Detetive de golpes!",
        explicacao: "Sinais de golpe: prêmio que você não pediu, pressa, pedido de senha ou documentos, remetente estranho ou escrito errado, links esquisitos. Na dúvida, não clique: denuncie e mostre a um adulto." }
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

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa: <strong>NAO PASSO MEU CODIGO</strong></p>",
        linhas: [["Digite aqui:", { r: "NAO PASSO MEU CODIGO", tipo: "letras", w: 24, ph: "NAO PASSO MEU CODIGO", dica: "Digite: NAO PASSO MEU CODIGO." }]] }
    ],
    vf: [{ v: false, why: "O código é só seu: nunca passe para ninguém." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: (function () {
    const bairro = {
      vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
      arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "E", 9]]
    };
    return {
      pratica: [
        { tipo: "sim_grafo", titulo: "Leve o amigo até a escola pelo caminho mais rápido",
          enunciado: "<p>Clique nos lugares, um depois do outro, saindo de <strong>Casa</strong> até a <strong>Escola</strong>. Some os números. Depois clique em <strong>Verificar</strong>.</p>",
          vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, padaria: { nome: "Padaria", ic: "🥖", x: 200, y: 45 }, escola: { nome: "Escola", ic: "🏫", x: 360, y: 120 } },
          arestas: [["casa", "padaria", 3], ["padaria", "escola", 2], ["casa", "escola", 9]],
          inicio: "casa", fim: "escola", menor: 5, solucao: ["casa", "padaria", "escola"], unidade: "min",
          dicas: ["3 + 2 = 5. A rua direta é 9."],
          explicacao: "Casa → Padaria → Escola = 3 + 2 = <strong>5 min</strong>. É menos que 9!" }
      ],
      basico: [
        { tipo: "classificar", titulo: "Passo 1 · Lugar ou rua?",
          categorias: [{ id: "V", rot: "Vértice", ic: "⚪", desc: "é um lugar" }, { id: "A", rot: "Aresta", ic: "➖", desc: "é uma rua (linha)" }],
          itens: [{ t: "A escola", ic: "🏫", c: "V" }, { t: "A rua da padaria", ic: "🛣️", c: "A" }, { t: "A praça", ic: "🌳", c: "V" }, { t: "A rua da escola", ic: "🛣️", c: "A" }],
          explicacao: "Lugar = <strong>vértice</strong>. Rua = <strong>aresta</strong>." },
        { tipo: "tabela", titulo: "Passo 2 · Some os números",
          linhas: [["Casa → Padaria → Escola = 3 + 2 =", { r: "5", tipo: "num", w: 3 }], ["Casa → Escola (rua direta) =", { r: "9", tipo: "num", w: 3 }]],
          explicacao: "3 + 2 = 5 e a rua direta é 9." },
        { tipo: "escolha", titulo: "Passo 3 · Qual é o mais curto?",
          perguntas: [{ p: "Qual caminho é o mais curto?", opcoes: ["Casa → Padaria → Escola (5 minutos)", "Casa → Escola (9 minutos)"], certo: 0, why: "5 é menor que 9." }],
          explicacao: "O mais curto é o de <strong>menor soma</strong>: pela Padaria, 5 minutos." },
        Object.assign({ tipo: "grafo", titulo: "Passo 4 · Trace o caminho mais curto", de: "C", para: "E", unidade: "minutos", descricao: "Grafo com Casa, Padaria e Escola" }, bairro,
          { enunciado: "<p>Clique na Casa, depois na Padaria e depois na Escola.</p>", explicacao: "Casa → Padaria → Escola = 5 minutos." })
      ],
      vf: [{ v: true }, { v: false, why: "O mais curto é o de MENOR soma." }, { v: true }]
    };
  })(),

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "A mensagem viaja pela internet em:", opcoes: ["Pacotes", "Cartas"], certo: 0 }], explicacao: "A mensagem viaja pela internet em: Pacotes." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Um erro no algoritmo se chama:", opcoes: ["Bug", "Pacote"], certo: 0 }], explicacao: "Um erro no algoritmo se chama: Bug." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "O código que chega no celular eu passo para:", opcoes: ["Ninguém", "Quem pedir"], certo: 0 }], explicacao: "O código que chega no celular eu passo para: Ninguém." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma", "Menos ruas"], certo: 0 }], explicacao: "O caminho mais curto é o de: Menor soma." },
    ]
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
