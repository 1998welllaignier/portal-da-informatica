/* ============================================================
   ATIVIDADES — Informática 9º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-9ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "sim_grafo", titulo: "Ache o caminho mais curto até a escola",
        enunciado: "<p>O número em cada rua é o tempo em <strong>minutos</strong>. Saindo de <strong>Casa</strong>, clique nos lugares, um por vez, até a <strong>Escola</strong>. Procure a <strong>menor soma</strong>.</p>",
        vertices: { casa: { nome: "Casa", ic: "🏠", x: 50, y: 120 }, padaria: { nome: "Padaria", ic: "🥖", x: 200, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 200, y: 195 }, escola: { nome: "Escola", ic: "🏫", x: 350, y: 120 } },
        arestas: [["casa", "padaria", 2], ["padaria", "escola", 3], ["casa", "praca", 1], ["praca", "escola", 6]],
        inicio: "casa", fim: "escola", menor: 5, solucao: ["casa", "padaria", "escola"], unidade: "min",
        dicas: ["Some os números de cada caminho.", "Pela Padaria: 2 + 3. Pela Praça: 1 + 6."],
        explicacao: "Pela Padaria: 2 + 3 = <strong>5 min</strong>. Pela Praça: 1 + 6 = 7 min. O mais curto é pela Padaria." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O que é cada parte do grafo?",
        perguntas: [
          { p: "🔵 O que é cada ponto do grafo?", opcoes: ["Um lugar, como a casa ou a escola", "Uma tecla", "Uma música"], certo: 0 },
          { p: "🔢 O que mostra o número na linha?", opcoes: ["Os minutos de caminhada", "A idade da pessoa", "O número da casa"], certo: 0 }],
        explicacao: "O ponto é um <strong>lugar</strong>. A linha é a <strong>rua</strong>. O número é o <strong>tempo</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Qual caminho é mais curto?",
        enunciado: "<p class=\"regra\">Caminho 1: A → B → D = <strong>3 + 4 = 7</strong><br>Caminho 2: A → C → D = <strong>2 + 6 = 8</strong></p>",
        perguntas: [{ p: "Qual é o caminho mais curto?", opcoes: ["Caminho 1 (soma 7)", "Caminho 2 (soma 8)"], certo: 0 }],
        explicacao: "O mais curto é o de <strong>menor soma</strong>: 7 é menor que 8." },

      { tipo: "escolha", titulo: "Passo 3 · Árvore de decisão: adivinhe o objeto",
        enunciado: "<p class=\"regra\">❓ É eletrônico? → <strong>Sim</strong><br>❓ Tem tela? → <strong>Sim</strong></p>",
        perguntas: [{ p: "Que objeto é?", opcoes: ["🖥️ Monitor", "⌨️ Teclado", "✏️ Lápis"], certo: 0 }],
        explicacao: "É eletrônico e tem tela: é o <strong>monitor</strong>. Cada resposta de sim ou não leva a um galho da árvore." },

      { tipo: "arvore", titulo: "Passo 4 · Conte as perguntas da árvore", modo: "decisao",
        raiz: { t: "❓ É eletrônico?", filhos: [
          { r: "Sim", t: "❓ Tem tela?", filhos: [{ r: "Sim", t: "🖥️ Monitor" }, { r: "Não", t: "⌨️ Teclado" }] },
          { r: "Não", t: "❓ Serve para escrever?", filhos: [{ r: "Sim", t: "✏️ Lápis" }, { r: "Não", t: "🪑 Cadeira" }] }] },
        perguntas: [{ p: "Quantas respostas (objetos) a árvore tem? Digite o número.", r: "4", num: true }],
        dicas: ["Conte os objetos do fim: monitor, teclado, lápis e cadeira."],
        explicacao: "A árvore tem <strong>4</strong> respostas: monitor, teclado, lápis e cadeira." }
    ],
    vf: [{ v: true }, { v: false, why: "O mais curto é o de <strong>menor</strong> soma." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "sim_cesar", titulo: "Descubra a palavra secreta",
        enunciado: "<p>Cada letra andou <strong>1 casa</strong> no alfabeto. Mude a <strong>chave</strong> com as setas até aparecer uma palavra.</p>",
        cifrada: "TPM", resposta: "SOL",
        explicacao: "Com a chave 1, voltando 1 casa: T → S, P → O, M → L. A palavra é <strong>SOL</strong>." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · A cifra de César com chave 1",
        enunciado: "<p class=\"regra\">Com a chave 1, cada letra anda 1 casa: A → B, B → C, C → D, O → P, S → T…</p>",
        perguntas: [
          { p: "Com a chave 1, a letra A vira:", opcoes: ["B", "Z", "C"], certo: 0 },
          { p: "Com a chave 1, a palavra OI vira:", opcoes: ["PJ", "NH", "OI"], certo: 0 }],
        explicacao: "A → B. O → P e I → J: OI vira <strong>PJ</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Descubra a palavra",
        enunciado: "<p class=\"regra\">A palavra secreta é <strong>DBTB</strong> (chave 1). Volte cada letra 1 casa: D → C, B → A, T → S, B → A.</p>",
        perguntas: [{ p: "Qual é a palavra?", opcoes: ["CASA", "BOLA", "GATO"], certo: 0 }],
        explicacao: "DBTB voltando 1 casa vira <strong>CASA</strong>. Isso é <strong>decifrar</strong>." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 3 · Qual é o golpe?", colunaItem: "O que aconteceu", colunaResp: "Golpe",
        categorias: [{ id: "F", rot: "🔨 Força bruta" }, { id: "R", rot: "🦠 Ransomware" }, { id: "E", rot: "🎭 Engenharia social" }],
        itens: [
          { t: "Um programa tenta 0000, 0001, 0002… até acertar a senha", c: "F" },
          { t: "Os arquivos foram trancados e pedem dinheiro para devolver", c: "R" },
          { t: "Alguém diz ser do banco e pede o código do celular", c: "E", why: "Enganar a pessoa para ela entregar o código é engenharia social." }],
        explicacao: "Força bruta tenta todas as senhas. Ransomware tranca os arquivos. Engenharia social engana a pessoa." },

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Com a chave 1, cada letra anda 1 casa: S → T, O → P, L → M. Digite como fica a palavra <strong>SOL</strong>.</p>",
        linhas: [["SOL com a chave 1:", { r: "TPM", tipo: "letras", w: 8, ph: "_ _ _", dica: "Cada letra anda 1 casa: S → T, O → P, L → M." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Pedido de senha com pressa é engenharia social: nunca passe." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "No seu feed: compartilhar ou não?", app: "📲 Feed",
        botoes: [{ id: "S", rot: "🔁 Pode compartilhar" }, { id: "N", rot: "🛑 Não compartilhe" }],
        enunciado: "<p>Leia cada postagem e clique na resposta.</p>",
        itens: [
          { de: "@zoeira", t: "📸 Foto do colega fazendo careta, postada sem ele saber kkk", c: "N", why: "Precisa da autorização da pessoa." },
          { de: "@arte_livre", t: "🖼️ Desenho da autora Ana Lima. Pode compartilhar com o nome dela.", c: "S" },
          { de: "@famoso_oficial??", t: "🎥 Vídeo de famoso dando celular para quem clicar no link (voz de robô)", c: "N", why: "Pode ser deepfake e golpe." }],
        okMsg: "Você pensa antes de compartilhar! 👏" }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Passo 1 · Pode ou não pode?", colunaItem: "Situação", colunaResp: "Pode?",
        categorias: [{ id: "P", rot: "✅ Pode" }, { id: "N", rot: "🚫 Não pode" }],
        itens: [
          { t: "Usar a foto de outra pessoa escrevendo o nome dela", c: "P" },
          { t: "Copiar o trabalho do colega e dizer que é meu", c: "N", why: "Isso é plágio." },
          { t: "Postar a foto do colega sem perguntar", c: "N", why: "Precisa de autorização." },
          { t: "Pedir autorização antes de postar", c: "P" }],
        explicacao: "Dê o <strong>crédito</strong>, não faça <strong>plágio</strong> e peça <strong>autorização</strong>." },

      { tipo: "sinais", titulo: "Passo 2 · Marque os sinais de deepfake",
        enunciado: "<p class=\"regra\">Um vídeo mostra um jogador famoso dizendo: “<strong>Vou dar um celular para quem clicar no link!</strong>” A boca dele não acompanha a fala.</p>",
        opcoes: [
          { t: "👄 A boca não acompanha a fala", certo: true },
          { t: "🎁 Promete presente por um link", certo: true },
          { t: "📰 Nenhum site de notícias confirma", certo: true },
          { t: "🧑‍🏫 A escola avisou no grupo oficial", certo: false, why: "O vídeo não veio da escola." }],
        explicacao: "Esses sinais mostram que pode ser <strong>deepfake</strong>: não clique e não compartilhe." },

      { tipo: "escolha", titulo: "Passo 3 · Responda",
        perguntas: [
          { p: "©️ Usei a foto da Ana Lima no trabalho. Como dou o crédito?", opcoes: ["Foto: Ana Lima", "Foto: minha", "Não escrevo nada"], certo: 0 },
          { p: "🎥 Recebi um vídeo suspeito. O que eu faço?", opcoes: ["Não clico e não compartilho", "Mando para todo mundo"], certo: 0 }],
        explicacao: "Crédito é escrever o nome de quem criou. Vídeo suspeito: não clique e não compartilhe." },

      { tipo: "cartaz", titulo: "Passo 4 · Monte o seu cartaz do sol", tituloCartaz: "Meu cartaz",
        desenhos: ["☀️", "🌙", "⭐", "🌈", "🌳", "🐦"], exigirDesenhos: ["☀️"], dicaDesenhos: "Clique no <strong>sol</strong> ☀️ para colocar no cartaz.",
        cor: "amarelo", dicaCor: "Clique na cor <strong>amarelo</strong>, a cor do sol.",
        campos: [{ rot: "Quem é o autor deste cartaz?", opcoes: ["O computador", "Eu", "A internet"], gab: "Eu", re: "^Eu$", dica: "Quem cria é o <strong>autor</strong>: foi você que montou." }],
        okMsg: "Isso! Você é o autor do seu cartaz. ©️" }
    ],
    vf: [{ v: false, why: "Estar na internet não quer dizer que é seu: isso é plágio." }, { v: true }, { v: true }]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🕸️ Mapas e caminhos", "🔐 Mensagem secreta", "©️ Autoria e vídeos falsos"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
