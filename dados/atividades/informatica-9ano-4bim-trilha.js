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

      { tipo: "arvore", titulo: "Passo 4 · Conte as perguntas da árvore", robo: {"paineis": ["🌳 Como eu conto"], "passos": [{"fala": "Olha como eu conto as <b>respostas</b> numa árvore: são os desenhos no fim, que não têm pergunta depois.", "painel": 0, "titulo": "Contar folhas"}, {"fala": "Numa árvore com 🍎 Maçã, 🍌 Banana e 🍇 Uva no fim, são 3 respostas.", "painel": 0, "linha": "🍎 🍌 🍇 → 3", "marca": true}, {"fala": "As perguntas (❓) não contam: só os objetos no fim.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: conte os objetos da sua árvore. 💪"}, modo: "decisao",
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
        explicacao: "Com a chave 1, voltando 1 casa: T → S, P → O, M → L. A palavra é <strong>SOL</strong>." },
      { id: "m2-sim-golpes", tipo: "sim_pc", titulo: "🎣 Simulador: pesque o golpe na caixa de email",
        enunciado: "<p>Na caixa de email do computador de mentira há <strong>golpes</strong> misturados com mensagem verdadeira. Olhe o <strong>remetente</strong>, desconfie da pressa e proteja a sua conta. O <strong>Bit</strong> confere.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }, { nome: "Navegador", app: "web" }],
        emails: [
          { id: "pix", nome: "Banco do Brasil", de: "seguranca@banco-do-brasill.com.br", assunto: "⚠️ Seu Pix foi BLOQUEADO",
            html: "<p>Detectamos uma movimentação suspeita. Seu Pix será cancelado em 1 hora.</p><p>Para desbloquear, <a data-link='bb-desbloqueio-pix.xyz' data-k='pg:linkpix'>clique aqui e confirme sua senha</a>.</p>" },
          { id: "codigo", nome: "Primo Lucas", de: "lucas.primo2009@email.com", assunto: "me passa o código que chegou aí",
            html: "<p>Oi! Mandei sem querer um código de 6 números pro seu celular. Me passa ele rapidinho? 🙏</p>" },
          { id: "escola", nome: "Secretaria da Escola", de: "secretaria@escola.edu.br", assunto: "Ative a verificação em duas etapas",
            html: "<p>Turma, protejam a conta do portal da escola: ativem a verificação em duas etapas.</p><p><a data-link='conta.escola.edu.br/seguranca' data-k='pg:linkconta'>conta.escola.edu.br/seguranca</a></p>" }
        ],
        web: {
          "bb-desbloqueio-pix.xyz": { titulo: "Desbloqueio Pix", seguro: false, html: "<p>Digite sua senha do banco:</p><label class='campo'>Senha<input data-campo='senhabanco'></label>" },
          "conta.escola.edu.br/seguranca": { titulo: "Conta da escola: segurança", html: "<p>🔐 Segurança da conta</p><p><label><input type='checkbox' data-ev='2fa' data-k='pg:2fa'> Ativar verificação em duas etapas (senha + código no celular)</label></p><button data-ev='salvar2fa' data-k='pg:salvar2fa' class='pri'>Salvar</button>" }
        },
        passos: [
          { faca: "Abra o <b>Email</b> (duplo clique no 📧 da área de trabalho).", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Abra o email <b>⚠️ Seu Pix foi BLOQUEADO</b>.", ok: "email:abrir:pix", onde: "email:pix" },
          { faca: "Olhe o <b>remetente</b> com lupa: <i>banco-do-brasil<b>l</b></i>, com dois L! Pressa (1 hora) e pedido de senha. Não clique no link: <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:pix", "email:excluir:pix"], onde: "email:denunciar", erros: { "link:bb*": "Você clicou no link do golpe (é <b>phishing</b>: “pescaria” de senha). Feche essa guia, volte ao Email (📧 na barra) e denuncie." } },
          { faca: "Abra o email da <b>Secretaria da Escola</b> e clique no link <b>conta.escola.edu.br/seguranca</b>.", ok: "link:conta.escola.edu.br/seguranca", onde: "email:escola" },
        ],
        fimMsg: "Você pescou o golpe pelo remetente e pela pressa. Conta protegida!",
        explicacao: "Phishing é o golpe que imita banco, loja ou amigo para pescar senha ou código. Confira o remetente letra por letra, desconfie de pressa e nunca passe senha ou código. A verificação em duas etapas protege mesmo se a senha vazar." }
    ],
    bonus: [
      
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

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal", robo: {"paineis": ["🔐 Outra palavra: LUA"], "passos": [{"fala": "Com a chave 1, cada letra anda <b>1 casa para a frente</b> no alfabeto:", "painel": 0, "linha": "L → M"}, {"fala": "", "painel": 0, "linha": "U → V", "espera": 700}, {"fala": "", "painel": 0, "linha": "A → B", "espera": 900}, {"fala": "LUA vira:", "painel": 0, "linha": "MVB", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: faça o mesmo com SOL! 💪"},
        enunciado: "<p>Com a chave 1, cada letra anda 1 casa: S → T, O → P, L → M. Digite como fica a palavra <strong>SOL</strong>.</p>",
        linhas: [["SOL com a chave 1:", { r: "TPM", tipo: "letras", w: 8, ph: "_ _ _", dica: "Cada letra anda 1 casa: S → T, O → P, L → M." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Pedido de senha com pressa é engenharia social: nunca passe." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "No seu feed: compartilhar ou não?", explicacao: "Não compartilhe a foto do colega sem autorização nem o vídeo suspeito do famoso. Pode compartilhar o desenho da Ana Lima, com o nome dela.", robo: {"paineis": ["📲 Outras postagens"], "passos": [{"fala": "Olha como eu decido com <b>outros</b> exemplos. Eu faço sempre as mesmas perguntas: Quem é o autor? Tem autorização? Pode ser falso (deepfake)?", "painel": 0, "titulo": "Meus exemplos"}, {"fala": "“Print da conversa de uma colega, postado sem ela saber” → expõe a pessoa sem autorização (direito de imagem e privacidade).", "painel": 0, "linha": "Print da conversa de uma colega, postado sem e… → 🛑 Não compartilhe", "marca": true, "espera": 2600}, {"fala": "“Desenho com licença CC BY, com o nome do autor” → a licença deixa, desde que eu dê o crédito ao autor.", "painel": 0, "linha": "Desenho com licença CC BY, com o nome do autor → 🔁 Pode compartilhar", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as perguntas para cada postagem. 💪"}, app: "📲 Feed",
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

      { tipo: "sinais", titulo: "Passo 2 · Marque os sinais de deepfake", robo: {"paineis": ["🎭 Outro vídeo"], "passos": [{"fala": "Olha com <b>outra</b> situação: um vídeo mostra um cantor prometendo dinheiro por um link, e a boca não acompanha a voz. Eu leio item por item e pergunto: “isso aparece aqui?”", "painel": 0, "titulo": "Minha situação"}, {"fala": "“A boca não acompanha a fala” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ A boca não acompanha a fala", "marca": true, "espera": 1800}, {"fala": "“Promete presente por um link” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ Promete presente por um link", "marca": true, "espera": 1800}], "fim": "Agora é a sua vez: marque os sinais do seu vídeo. 💪"},
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

      { tipo: "cartaz", titulo: "Passo 4 · Monte o seu cartaz do sol", robo: {"paineis": ["🖼️ Meu cartaz de exemplo: Meu cartaz da noite"], "passos": [{"fala": "Olha como eu monto um cartaz de <b>outro</b> tema, em 3 passos:", "painel": 0, "titulo": "Meu cartaz da noite"}, {"fala": "1. Escolho desenhos que <b>combinam com o tema</b>: clico em cada um (clicando de novo, ele sai).", "painel": 0, "linha": "1. Desenhos: 🌙 ⭐"}, {"fala": "2. Clico numa cor de fundo.", "painel": 0, "linha": "2. Cor: azul"}, {"fala": "3. Escrevo a frase no campo de texto, completa, com letra maiúscula e ponto final.", "painel": 0, "linha": "3. Frase: Quem fez: eu.", "marca": true, "espera": 3000}], "fim": "Agora é a sua vez: siga o que o cartaz pede. 💪"}, tituloCartaz: "Meu cartaz",
        desenhos: ["☀️", "🌙", "⭐", "🌈", "🌳", "🐦"], exigirDesenhos: ["☀️"], dicaDesenhos: "Clique no <strong>sol</strong> ☀️ para colocar no cartaz.",
        cor: "amarelo", dicaCor: "Clique na cor <strong>amarelo</strong>, a cor do sol.",
        campos: [{ rot: "Quem é o autor deste cartaz?", opcoes: ["O computador", "Eu", "A internet"], gab: "Eu", re: "^Eu$", dica: "Quem cria é o <strong>autor</strong>: foi você que montou." }],
        okMsg: "Isso! Você é o autor do seu cartaz. ©️" }
    ],
    vf: [{ v: false, why: "Estar na internet não quer dizer que é seu: isso é plágio." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "mensagens", titulo: "Seja a IA: spam ou normal?", explicacao: "PRÊMIO GRÁTIS e “clique já” são o padrão do spam. O aviso da escola é normal.", robo: {"paineis": ["🤖 Como a IA decide"], "passos": [{"fala": "Olha como eu decido com <b>outros</b> exemplos. Eu faço sempre as mesmas perguntas: Esse e-mail se parece com quais exemplos do treino? (é assim que a IA aprende: pelos padrões)", "painel": 0, "titulo": "Meus exemplos"}, {"fala": "“GANHE DINHEIRO FÁCIL!!! Clique já!” → tem as mesmas pistas dos exemplos de spam: GRÁTIS/GANHE, CLIQUE JÁ, muitos pontos de exclamação.", "painel": 0, "linha": "GANHE DINHEIRO FÁCIL!!! Clique já! → 🚫 Spam", "marca": true, "espera": 2600}, {"fala": "“Professor: a prova é na quinta.” → parece os exemplos normais: avisos da escola, sem prêmio nem pressa.", "painel": 0, "linha": "Professor: a prova é na quinta. → ✅ Normal", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: compare cada e-mail com os exemplos do treino. 💪"}, app: "📧 E-mail",
        botoes: [{ id: "S", rot: "🚫 Spam" }, { id: "N", rot: "✅ Normal" }],
        enunciado: "<p><strong>Exemplo:</strong> e-mail com <strong>GRÁTIS</strong>, <strong>PRÊMIO</strong> e <strong>CLIQUE JÁ</strong> é spam. Agora separe:</p>",
        itens: [{ de: "sorteio.xyz", t: "PRÊMIO GRÁTIS! Clique já!", c: "S", why: "Grátis + prêmio + clique já." }, { de: "Escola", t: "A aula de amanhã é às 13h30.", c: "N" }],
        okMsg: "Você aprendeu com o exemplo, como a IA!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Usa IA ou não?",
        categorias: [{ id: "S", rot: "Usa IA", ic: "🤖", desc: "aprendeu com exemplos" }, { id: "N", rot: "Não usa", ic: "⚙️", desc: "regra fixa" }],
        itens: [{ t: "Vídeo recomendado", ic: "📺", c: "S" }, { t: "Desbloqueio pelo rosto", ic: "🙂", c: "S" }, { t: "Interruptor de luz", ic: "💡", c: "N" }, { t: "Calculadora: 2 + 2", ic: "🧮", c: "N" }],
        explicacao: "Vídeo recomendado e rosto usam IA. Interruptor e calculadora seguem regras fixas." },
      { tipo: "escolha", titulo: "Passo 2 · A IA erra?",
        perguntas: [{ p: "O chatbot respondeu. O que eu faço?", opcoes: ["Confiro em outro lugar", "Copio sem ler"], certo: 0 },
          { p: "Coloco meu endereço no chatbot?", opcoes: ["Não", "Sim"], certo: 0 }],
        explicacao: "A IA erra: eu confiro. E não coloco meus dados pessoais." },
      { tipo: "sinais", titulo: "Passo 3 · Onde está a IA?", robo: {"paineis": ["🤖 Outra lista"], "passos": [{"fala": "Olha com <b>outra</b> situação: onde tem IA no celular? Eu leio item por item e pergunto: “isso aparece aqui?”", "painel": 0, "titulo": "Minha situação"}, {"fala": "“Assistente de voz que entende o que eu falo” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ Assistente de voz que entende o que eu falo", "marca": true, "espera": 1800}, {"fala": "“Câmera que reconhece o rosto” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ Câmera que reconhece o rosto", "marca": true, "espera": 1800}, {"fala": "“A lanterna” aparece? <b>Não</b> → deixo sem marcar.", "painel": 0, "linha": "☐ A lanterna", "espera": 1800}], "fim": "Agora é a sua vez: marque onde a máquina aprendeu com exemplos. 💪"},
        enunciado: "<p>Marque <strong>onde tem IA</strong>.</p>",
        opcoes: [{ t: "⌨️ Corretor do teclado", certo: true }, { t: "🌐 Tradutor", certo: true }, { t: "📺 Vídeo recomendado", certo: true }, { t: "✏️ Lápis", certo: false, why: "O lápis não tem programa." }],
        explicacao: "Teclado, tradutor e vídeo recomendado usam IA." },
      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal", robo: {"paineis": ["⌨️ Como eu digito"], "passos": [{"fala": "Olha como eu faço com <b>outra</b> frase. Clico na caixa. Para as letras grandes, aperto uma vez o <b>Caps Lock</b> (a luzinha acende):", "painel": 0, "linha": "Caps Lock ligado 💡"}, {"fala": "Digito letra por letra. Entre uma palavra e outra, aperto a <b>barra de espaço</b>, a tecla comprida:", "painel": 0, "linha": "EU GOSTO DE APRENDER", "marca": true}, {"fala": "No fim, confiro se ficou igualzinho e aperto <b>Verificar</b>.", "painel": null, "espera": 2400}], "fim": "Agora é a sua vez: digite a frase da tarefa, igualzinho! 💪"},
        enunciado: "<p>Digite na caixa: <strong>EU CONFIRO A IA</strong></p>",
        linhas: [["Digite aqui:", { r: "EU CONFIRO A IA", tipo: "letras", w: 20, ph: "EU CONFIRO A IA", dica: "Digite: EU CONFIRO A IA." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "A IA erra: por isso eu confiro." }, { v: true }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "No grafo, cada lugar é um:", opcoes: ["Vértice", "Peso"], certo: 0 }], explicacao: "No grafo, cada lugar é um: Vértice." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Só quem tem a chave consegue:", opcoes: ["Decifrar a mensagem", "Ver o cadeado"], certo: 0 }], explicacao: "Só quem tem a chave consegue: Decifrar a mensagem." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "Copiar e dizer que é meu é:", opcoes: ["Plágio", "Crédito"], certo: 0 }], explicacao: "Copiar e dizer que é meu é: Plágio." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "A IA aprende com:", opcoes: ["Muitos exemplos", "Mágica"], certo: 0 }], explicacao: "A IA aprende com: Muitos exemplos." },
    ]
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

/* ============================================================
   🌀 MODELO EM ESPIRAL NAS MISSÕES AINDA NÃO DADAS (22/11/2026, pedido do professor)
   Só as missões listadas em espiralMissoes no catálogo. Ganham o ❓ gancho, o mesmo ❓ gancho da turma, o 🔁 Lembra? (automático), o 🛠️ "Onde eu uso
   isso?" prático, o ♾️ Laboratório e o 🏁 Fechamento. ⚖️ EQUILÍBRIO DA NOTA: o Básico, o Desafio e o Turbo NÃO mudam
   (mesmas tarefas, mesma regra do visto, mesmos 0,25 por Desafio/Turbo): quem já fez as outras missões não perde nada.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-4bim-trilha"]; if (!A) return;
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  const GANCHO = {"m3":{"html":"<p>🎵 O vídeo do Leo para a feira de ciências foi tirado do ar 1 hora depois de postado: a música de fundo era de um cantor famoso, usada sem autorização.</p><p>🤔 Mas a música estava na internet… não era de graça? Que música ele poderia ter usado?</p>"},"m4":{"html":"<p>📧 Um e-mail dizendo <b>“Você ganhou um PRÊMIO GRÁTIS, clique já!”</b> foi direto para a pasta Spam. Ninguém mexeu em nada.</p><p>🤔 Como o programa “sabia” que era spam? E se ele errar e esconder um e-mail importante?</p>"}};
  Object.keys(GANCHO).forEach(m => { if (A[m]) A[m].gancho = GANCHO[m]; });
  A.m3.aplicar = [
    msg("🛠️ Na vida real: pode postar?", "📸 Antes de postar", [["S", "✅ Pode"], ["N", "❌ Não pode"]], "Use o 💡 Para começar.",
      [["Um desenho que eu fiz", "S", "Eu sou o autor."], ["A foto de um colega, sem pedir", "N", "Antes, peça autorização."], ["Uma foto com o crédito do autor (Foto: Ana Lima)", "S", "Deu o crédito."]],
      "Respeito garantido! 📸", "Dê o crédito e peça autorização."),
    VIDA(["O famoso “dando” celular por um link, com a boca fora da fala. Você…", ["Desconfia: pode ser deepfake", "Clica rápido"], "Sinais de <b>deepfake</b>: não clique."], ["Copiar o trabalho de alguém e dizer que é seu é…", ["Plágio", "Crédito"], "É <b>plágio</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: tem IA aqui?", "🤖 IA no dia a dia", [["S", "🤖 Tem IA"], ["N", "✋ Não tem IA"]], "Use a lista do 💡 Para começar.",
      [["O corretor do teclado", "S", "Tem IA."], ["O desbloqueio pelo rosto do celular", "S", "Tem IA."], ["Uma régua de plástico", "N", "Não é programa."]],
      "Mandou bem! 🤖", "A IA aprende com muitos exemplos."),
    VIDA(["A IA respondeu. Você…", ["Confere a resposta", "Copia sem ler"], "A IA também erra: <b>confira</b>."], ["Na IA, eu não coloco…", ["Meus dados pessoais", "Minhas dúvidas da aula"], "Não coloque <b>dados pessoais</b>."])
  ];
})();
