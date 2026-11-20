/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 9º ano — 4º bimestre de 2027 (Autoria e verdade)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF09CO02, EF09CO06, EF09CO09, EF09CO10. Bimestre curto (formatura).
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-9ano-2027-4bim", {

  m1: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: posso usar esta obra?",
        robo: BIT("🔎 As perguntas", [["Tem ©, “todos os direitos reservados”? Só com autorização.", "© → peça autorização"], ["É CC BY? Pode, dando crédito. Domínio público? Livre.", "CC BY → com crédito · domínio público → livre", true]]),
        enunciado: "<p>Use a tabela <strong>Situação da obra · Posso usar?</strong>.</p>",
        colunaItem: "Obra", colunaResp: "Posso usar?",
        categorias: [{ id: "L", rot: "🆓 Livre" }, { id: "C", rot: "✍️ Sim, dando crédito" }, { id: "A", rot: "🔒 Só com autorização" }],
        itens: [{ t: "Poema de Machado de Assis", c: "L" }, { t: "Foto com licença CC BY", c: "C" }, { t: "Música de um cantor, “todos os direitos reservados”", c: "A" }, { t: "Desenho com licença CC BY", c: "C" }],
        explicacao: "Domínio público = livre; CC BY = com crédito; © = só com autorização." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Autor", b: "Quem criou a obra" }, { a: "Plágio", b: "Apresentar o trabalho de outro como seu" }, { a: "Domínio público", b: "Obra que todos podem usar" }, { a: "Crédito", b: "Escrever quem é o autor" }],
        explicacao: "Autor, plágio, domínio público e crédito." },
      { tipo: "ordenar", titulo: "Monte o crédito na ordem certa",
        robo: BIT("🖼️ Outro crédito", [["Desenho de João Lima, no site Arte Aberta, licença CC BY.", "autor · site · licença"], ["Crédito: João Lima · Arte Aberta · CC BY.", "✔", true]]),
        enunciado: "<p>Foto de Maria Souza, achada no Banco de Imagens Livres, com licença CC BY. Monte o crédito na ordem: <em>autor · site · licença</em>.</p>",
        itens: ["Foto: Maria Souza", "Banco de Imagens Livres", "CC BY"],
        explicacao: "Foto: Maria Souza · Banco de Imagens Livres · CC BY." },
      { tipo: "escolha", titulo: "Direito autoral",
        perguntas: [
          { p: "Uma obra estar na internet quer dizer que é livre?", opcoes: ["Não", "Sim, sempre"], certo: 0 },
          { p: "No Brasil, a obra entra em domínio público:", opcoes: ["70 anos depois da morte do autor", "Quando vai para a internet", "Depois de 1 ano"], certo: 0 }],
        explicacao: "Na internet não é sinônimo de livre; domínio público: 70 anos depois da morte do autor." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 O trabalho de Ciências: certo ou plágio?",
        enunciado: "<p>Para cada atitude no trabalho, decida.</p>",
        app: "📄 Trabalho", botoes: [{ id: "C", rot: "✅ Certo" }, { id: "P", rot: "🚫 Plágio ou errado" }],
        itens: [{ de: "Texto", t: "Copiar um parágrafo do site e entregar como se fosse seu", c: "P", why: "É plágio." },
          { de: "Imagem", t: "Usar uma foto CC BY com o crédito embaixo", c: "C" },
          { de: "Texto", t: "Explicar com as próprias palavras e citar o site de onde tirou", c: "C" },
          { de: "Imagem", t: "Usar uma foto “todos os direitos reservados” sem pedir", c: "P", why: "Precisa de autorização." }],
        okMsg: "Trabalho honesto! ©️",
        explicacao: "Com as próprias palavras e com crédito: certo. Copiar ou usar sem autorização: errado." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: direito autoral",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O **autor** tem o direito autoral sobre a obra. Com ©, é preciso **autorização**. Obras em domínio **público** são livres, e a licença CC BY libera o uso com **crédito**. Apresentar o trabalho de outro como seu é **plágio**.",
        explicacao: "Autor, autorização, público, crédito e plágio." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "pode ser usado sem dar crédito", opcoes: ["pode ser usado sem dar crédito", "nem sempre pode ser usado"], certo: "nem sempre pode ser usado" }, why: "Na internet não é sinônimo de livre." },
      { v: true, why: "Crédito ao autor." },
      { v: true, why: "Mais de 70 anos da morte do autor." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "quer dizer que a obra é livre", opcoes: ["quer dizer que a obra é livre", "quer dizer que precisa de autorização"], certo: "quer dizer que precisa de autorização" }, why: "© = tem dono." }
    ]
  },

  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: pode publicar?",
        robo: BIT("🔎 A pergunta", [["A pessoa (ou os responsáveis) <b>autorizou</b>? Pode.", "autorizou → pode"], ["Não sabe ou não autorizou? Não pode.", "sem autorização → não", true]]),
        enunciado: "<p>Use a tabela <strong>Situação · Pode publicar?</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Pode publicar?",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "❌ Não pode" }],
        itens: [{ t: "Foto do grupo, e todos disseram “pode postar”", c: "S" }, { t: "Foto do colega dormindo na sala", c: "N" }, { t: "Print da conversa particular de outra pessoa", c: "N" },
          { t: "Vídeo da apresentação, com a autorização das famílias", c: "S" }, { t: "Áudio de um colega, publicado sem ele saber", c: "N" }],
        explicacao: "Com autorização, pode; sem, não pode." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "A minha imagem foi exposta: o que fazer, em ordem?",
        enunciado: "<p>Use o 💡 Para começar.</p>",
        itens: ["Não apagar as provas (guardar prints e links)", "Pedir para retirar", "Denunciar na plataforma", "Contar para um adulto de confiança"],
        explicacao: "Provas → pedir para retirar → denunciar → contar para um adulto." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Direito de imagem", b: "Decidir se a sua imagem pode ser publicada" }, { a: "Autorização", b: "A permissão da pessoa" }, { a: "Expor", b: "Mostrar alguém de um jeito que prejudica" }, { a: "Denunciar", b: "Avisar a plataforma" }],
        explicacao: "Direito de imagem, autorização, expor e denunciar." },
      { tipo: "escolha", titulo: "Autorização",
        perguntas: [
          { p: "Para publicar a foto de um aluno de 14 anos, a autorização é:", opcoes: ["Dos pais ou responsáveis", "De ninguém", "Do fotógrafo"], certo: 0 },
          { p: "O colega disse “não posta”. Você:", opcoes: ["Não posta ou corta ele da foto", "Posta mesmo assim", "Posta com filtro"], certo: 0 }],
        explicacao: "Menor de idade: responsáveis. Se a pessoa disser não, não poste ou corte." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 As fotos da formatura",
        perguntas: [
          { p: "Você tirou uma foto linda da turma toda. Antes de postar:", opcoes: ["Pergunto se todos concordam", "Posto logo", "Posto só no grupo da família, sem perguntar"], certo: 0 },
          { p: "Um colega aparece de olhos fechados e pede para não postar. Você:", opcoes: ["Escolhe outra foto ou corta ele", "Posta porque ficou engraçado", "Posta e marca ele"], certo: 0 },
          { p: "Alguém postou um vídeo seu dançando, sem pedir. O primeiro passo:", opcoes: ["Guardar o print e o link, sem apagar as provas", "Responder com ofensa", "Apagar a sua conta"], certo: 0 }],
        explicacao: "Perguntar antes, respeitar o não e, se for exposto, guardar as provas primeiro." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória do direito de imagem",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Direito de imagem", b: "Precisa de autorização" }, { a: "Print", b: "Serve de prova" }, { a: "Menor de idade", b: "Autorização dos responsáveis" }, { a: "Denunciar", b: "Avisar a plataforma" }],
        explicacao: "Direito de imagem, print, menor de idade e denunciar." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "sem autorização se ela estiver bonita", opcoes: ["sem autorização se ela estiver bonita", "só com autorização"], certo: "só com autorização" }, why: "Bonita ou não, precisa de autorização." },
      { v: true, why: "Responsáveis autorizam." },
      { v: false, corrigir: { trecho: "o primeiro passo é apagar as provas", opcoes: ["o primeiro passo é apagar as provas", "o primeiro passo é guardar as provas"], certo: "o primeiro passo é guardar as provas" }, why: "As provas ajudam a resolver." },
      { v: true, why: "Não é seu para publicar." },
      { v: true, why: "Respeita a pessoa." }
    ]
  },

  m3: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: que tipo de conteúdo enganoso?",
        robo: BIT("🔎 As perguntas", [["Foi <b>inventado</b>? Falso. É de <b>outro tempo ou lugar</b>? Fora de contexto.", "inventado → falso"], ["Foi <b>cortado</b>? Editado. É <b>humor</b>? Sátira.", "cortado → editado · humor → sátira", true]]),
        enunciado: "<p>Use a tabela <strong>Tipo · Exemplo</strong>.</p>",
        colunaItem: "Conteúdo", colunaResp: "Tipo",
        categorias: [{ id: "F", rot: "❌ Falso" }, { id: "C", rot: "🕰️ Fora de contexto" }, { id: "E", rot: "✂️ Editado" }, { id: "S", rot: "😂 Sátira" }],
        itens: [{ t: "Foto de uma enchente de 2015 postada como “hoje”", c: "C" }, { t: "“A escola vai fechar amanhã”, sem nenhuma fonte", c: "F" },
          { t: "Vídeo cortado para a pessoa parecer dizer o contrário", c: "E" }, { t: "Site de humor: “Merenda vira pizza todo dia”", c: "S" }],
        explicacao: "Outro tempo = fora de contexto; inventado = falso; cortado = editado; humor = sátira." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "A pausa dos 3 passos",
        itens: ["Pare: não compartilhe na hora", "Pesquise: leitura lateral e fonte original", "Decida: compartilhe só se for verdade"],
        explicacao: "Pare → pesquise → decida." },
      { tipo: "ligar", titulo: "Cada técnica e o que ela faz",
        pares: [{ a: "↔️ Leitura lateral", b: "Abrir outras abas e pesquisar sobre o site e a notícia" }, { a: "🔙 Fonte original", b: "Procurar quem disse primeiro" }, { a: "Desinformação", b: "Informação falsa ou enganosa que se espalha" }],
        explicacao: "Leitura lateral, fonte original e desinformação." },
      { tipo: "escolha", titulo: "Verdade ou fake?",
        perguntas: [
          { p: "Na leitura lateral, você:", opcoes: ["Sai do site suspeito e pesquisa em outras fontes", "Fica lendo só o site suspeito", "Compartilha para perguntar"], certo: 0 },
          { p: "A sátira vira desinformação quando:", opcoes: ["É compartilhada como se fosse verdade", "Faz rir", "Tem imagem"], certo: 0 }],
        explicacao: "Leitura lateral = outras fontes; sátira compartilhada como verdade = desinformação." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Investigue com a leitura lateral",
        enunciado: "<p>Você recebe: “<strong>Cientistas confirmam: celular carregando na tomada explode se usado</strong>”, de um site chamado “noticiasbombasticas.xyz”. Você abre outras abas e pesquisa.</p>",
        dicas: ["Use a tabela das técnicas e a pausa dos 3 passos."],
        perguntas: [
          { p: "Nenhum jornal conhecido nem órgão oficial publica isso. O que isso sugere?", opcoes: ["Que a notícia pode ser falsa", "Que é verdade, porque é bombástica", "Nada"], certo: 0 },
          { p: "A notícia não diz quais cientistas nem onde está a pesquisa. Falta a:", opcoes: ["Fonte original", "Imagem", "Música"], certo: 0 },
          { p: "O que fazer?", opcoes: ["Não compartilhar", "Compartilhar para avisar todo mundo", "Compartilhar com “será?”"], certo: 0 }],
        explicacao: "Sem confirmação e sem fonte original: pare e não compartilhe." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da verdade",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["LATERAL", "ORIGINAL", "SATIRA", "EDITADO", "PARE"],
        pistas: ["Leitura… : abrir outras abas", "A fonte que disse primeiro", "Humor que imita notícia (sem acento)", "Vídeo cortado para mudar o sentido", "O primeiro passo da pausa"], tam: 10,
        explicacao: "Lateral, original, sátira, editado e pare." }
    ],
    vf: [
      { v: true, why: "Outras abas, outras fontes." },
      { v: true, why: "Verdadeira, mas de outro tempo." },
      { v: false, corrigir: { trecho: "é sempre uma notícia verdadeira", opcoes: ["é sempre uma notícia verdadeira", "é humor que imita notícia"], certo: "é humor que imita notícia" }, why: "Sátira é humor." },
      { v: true, why: "Quem disse primeiro." },
      { v: false, corrigir: { trecho: "é compartilhar", opcoes: ["é compartilhar", "é parar"], certo: "é parar" }, why: "Pare, pesquise, decida." }
    ]
  },

  m4: {
    pratica: [
      { tipo: "sinais", titulo: "Mão na massa: quais são sinais de deepfake?",
        robo: BIT("🔎 Outro vídeo", [["Uma cantora “anuncia” um sorteio por link. A voz parece de máquina.", "✔ voz robótica"], ["E nenhum site de notícias fala disso.", "✔ ninguém confirma", true]]),
        enunciado: "<p>Um vídeo mostra um jogador famoso dizendo que vai dar celulares para quem clicar num link. Marque <strong>só</strong> os sinais de alerta.</p>",
        opcoes: [{ t: "A boca não acompanha a fala", certo: true }, { t: "A voz parece robótica", certo: true }, { t: "Promessa de presente fácil por link", certo: true }, { t: "Nenhum site de notícias confirma", certo: true },
          { t: "O vídeo tem boa qualidade", certo: false, why: "Qualidade não prova nada: deepfakes também podem ser ótimos." }],
        explicacao: "Boca fora de sincronia, voz robótica, promessa fácil e nenhuma confirmação." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "IA generativa", b: "IA que cria textos, imagens, vozes e vídeos" }, { a: "Deepfake", b: "Vídeo, foto ou áudio falso feito com IA" }, { a: "Sincronia", b: "Duas coisas acontecendo juntas" }, { a: "Vítima", b: "Quem sofre o dano" }],
        explicacao: "IA generativa, deepfake, sincronia e vítima." },
      { tipo: "classificar", modo: "tabela", titulo: "Pode ou é proibido?",
        colunaItem: "Situação", colunaResp: "É…",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Não pode" }],
        itens: [{ t: "Usar IA para gerar uma paisagem inventada para o seu trabalho, avisando que foi IA", c: "S" }, { t: "Fazer um deepfake de um colega “de brincadeira”", c: "N" },
          { t: "Deepfake de candidato na propaganda eleitoral", c: "N" }, { t: "Criar um desenho próprio com ajuda da IA e dizer que usou", c: "S" }],
        explicacao: "Avisar que usou IA pode; deepfake de pessoa real para enganar ou zombar, não." },
      { tipo: "escolha", titulo: "Se for vítima",
        perguntas: [
          { p: "Fizeram um deepfake seu. O primeiro passo:", opcoes: ["Não apagar as provas", "Apagar tudo correndo", "Fazer um deepfake de volta"], certo: 0 },
          { p: "Um deepfake pode não ter nenhum sinal visível?", opcoes: ["Pode: por isso checo a fonte", "Não, sempre tem", "Só se for curto"], certo: 0 }],
        explicacao: "Guardar as provas; e checar a fonte, porque nem sempre há sinais." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O vídeo do jogador famoso",
        perguntas: [
          { p: "O vídeo do jogador “dando celulares” é provavelmente:", opcoes: ["Um deepfake usado em golpe", "Uma promoção verdadeira", "Um vídeo de treino"], certo: 0 },
          { p: "Qual é o motivo de quem espalhou?", opcoes: ["Dinheiro (golpe)", "Humor", "Engano"], certo: 0 },
          { p: "O que você faz?", opcoes: ["Não clica, não compartilha e avisa quem mandou", "Clica para ver", "Compartilha com os amigos"], certo: 0 }],
        explicacao: "Deepfake em golpe, por dinheiro: não clique, não compartilhe, avise." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: deepfakes",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "A IA **generativa** pode criar deepfakes. Sinais: boca fora de **sincronia** e voz **robótica**. Mas pode não ter sinal nenhum: cheque a **fonte**. Deepfake de colega é **cyberbullying**.",
        explicacao: "Generativa, sincronia, robótica, fonte e cyberbullying." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "É um dos sinais." },
      { v: false, corrigir: { trecho: "sempre tem sinais fáceis de ver", opcoes: ["sempre tem sinais fáceis de ver", "pode não ter sinais visíveis"], certo: "pode não ter sinais visíveis" }, why: "Por isso se checa a fonte." },
      { v: true, why: "Humilha e expõe." },
      { v: true, why: "Confirmação ajuda." }
    ]
  },

  m5: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada parte do plano e a sua pergunta",
        robo: BIT("🗂️ Outro projeto: a festa junina", [["Tema: a festa. Público: as famílias. Formato: barracas.", "tema · público · formato"], ["Tarefas: quem faz cada barraca. Cronograma: o que fica pronto em cada semana.", "tarefas · cronograma ✔", true]]),
        enunciado: "<p>Use a tabela <strong>Parte · Pergunta · Exemplo</strong>.</p>",
        pares: [{ a: "🎯 Tema", b: "Sobre o que é?" }, { a: "👥 Público", b: "Para quem é?" }, { a: "🖼️ Formato", b: "Como vai ser?" }, { a: "🧩 Tarefas", b: "Quem faz o quê?" }, { a: "📅 Cronograma", b: "Quando fica pronta cada parte?" }],
        explicacao: "Tema, público, formato, tarefas e cronograma." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Pode ou não pode no projeto?",
        colunaItem: "Situação", colunaResp: "No projeto…",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Não pode" }],
        itens: [{ t: "Desenho feito pela própria equipe", c: "S" }, { t: "Foto de um colega sem autorização", c: "N" }, { t: "Imagem CC BY com crédito", c: "S" }, { t: "O telefone de um aluno no slide", c: "N" }],
        explicacao: "Imagens próprias ou com crédito: pode. Fotos sem autorização e dados pessoais: não." },
      { tipo: "ordenar", titulo: "As etapas do projeto",
        itens: ["Escolher o tema e o público", "Dividir as tarefas", "Montar o cronograma", "Produzir com fontes e créditos", "Apresentar"],
        explicacao: "Tema e público → tarefas → cronograma → produzir → apresentar." },
      { tipo: "escolha", titulo: "Decompor",
        perguntas: [
          { p: "Dividir o projeto em tarefas pequenas, cada uma com um responsável, é:", opcoes: ["Decompor", "Plagiar", "Expor"], certo: 0 },
          { p: "O público do guia são:", opcoes: ["Os alunos do 6º ano", "Os professores da universidade", "Ninguém"], certo: 0 }],
        explicacao: "Decompor; o público é o 6º ano." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Monte o plano da equipe",
        enunciado: "<p>A equipe vai fazer um guia sobre <strong>senhas fortes</strong> para o 6º ano. Escolha em cada linha.</p>",
        dicas: ["Use a tabela Parte · Pergunta · Exemplo."],
        colunas: ["Parte", "Escolha"],
        linhas: [["Público", { op: ["Alunos do 6º ano", "Os vizinhos do bairro"], r: "Alunos do 6º ano" }], ["Formato", { op: ["Apresentação de slides com desenhos", "Um livro de 300 páginas"], r: "Apresentação de slides com desenhos" }],
          ["Imagens", { op: ["Próprias ou CC BY com crédito", "Qualquer uma da internet, sem crédito"], r: "Próprias ou CC BY com crédito" }], ["Tarefas", { op: ["Cada membro com uma tarefa", "Uma pessoa faz tudo"], r: "Cada membro com uma tarefa" }]],
        explicacao: "Público: 6º ano; formato simples; imagens com crédito; tarefas divididas." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "🔴 O cronograma do projeto",
        enunciado: "<p>Coloque cada etapa na aula certa, como no exemplo do cronograma.</p>",
        dicas: ["Releia a linha Cronograma da tabela."],
        colunas: ["Etapa", "Aula"],
        linhas: [["Fazer o plano", { op: ["Aula 1", "Aula 2", "Aula 3"], r: "Aula 1" }], ["Produzir o guia", { op: ["Aula 1", "Aula 2", "Aula 3"], r: "Aula 2" }], ["Apresentar", { op: ["Aula 1", "Aula 2", "Aula 3"], r: "Aula 3" }]],
        explicacao: "Aula 1: plano · Aula 2: produção · Aula 3: apresentação." }
    ],
    vf: [
      { v: true, why: "O guia é para o 6º ano." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "posso usar fotos de colegas sem autorização", opcoes: ["posso usar fotos de colegas sem autorização", "não posso usar fotos de colegas sem autorização"], certo: "não posso usar fotos de colegas sem autorização" }, why: "Direito de imagem." },
      { v: true, why: "Decompor ajuda." },
      { v: false, corrigir: { trecho: "podem ser usadas sem crédito", opcoes: ["podem ser usadas sem crédito", "precisam de crédito ou autorização"], certo: "precisam de crédito ou autorização" }, why: "Direito autoral." }
    ]
  },

  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: ajuda ou atrapalha a apresentação?",
        robo: BIT("🎤 Outro exemplo", [["Falar olhando para a turma? Ajuda.", "olhar → ajuda"], ["Ler tudo de costas? Atrapalha.", "de costas → atrapalha", true]]),
        enunciado: "<p>Use a tabela <strong>Dica · Por quê</strong>.</p>",
        colunaItem: "Atitude", colunaResp: "Na apresentação…",
        categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
        itens: [{ t: "Pouco texto e letra grande", c: "A" }, { t: "Ler tudo de costas para a turma", c: "T" }, { t: "Uma ideia por slide, com imagem", c: "A" }, { t: "Passar muito do tempo combinado", c: "T" }, { t: "Mostrar as fontes e os créditos no fim", c: "A" }],
        explicacao: "Pouco texto, uma ideia por slide e créditos ajudam; ler de costas e passar do tempo atrapalham." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada critério da rubrica e a sua pergunta",
        pares: [{ a: "✅ Conteúdo", b: "As informações estão certas?" }, { a: "💬 Clareza", b: "O 6º ano entenderia?" }, { a: "🎨 Criatividade", b: "O guia chama a atenção?" }, { a: "📚 Créditos", b: "As fontes e as imagens têm crédito?" }, { a: "🤝 Equipe", b: "Todos participaram?" }],
        explicacao: "Conteúdo, clareza, criatividade, créditos e equipe." },
      { tipo: "escolha", titulo: "O melhor feedback",
        perguntas: [
          { p: "Qual é o melhor feedback para a equipe?", opcoes: ["“Gostei dos desenhos! Uma sugestão: aumentar a letra do slide 2.”", "“Ficou ruim.”", "“Nem prestei atenção.”"], certo: 0 },
          { p: "Rubrica é:", opcoes: ["A lista do que vai ser avaliado", "O nome do slide", "Uma imagem"], certo: 0 }],
        explicacao: "Feedback: algo bom + sugestão. Rubrica: os critérios." },
      { tipo: "sinais", titulo: "O que mostrar no último slide?",
        enunciado: "<p>Marque <strong>só</strong> o que combina com o último slide.</p>",
        opcoes: [{ t: "As fontes das informações", certo: true }, { t: "Os créditos das imagens", certo: true }, { t: "Os nomes da equipe", certo: true }, { t: "O telefone de cada um", certo: false, why: "Dado pessoal não vai na apresentação." }],
        explicacao: "Fontes, créditos e nomes da equipe; dados pessoais, não." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Avalie o slide com a rubrica",
        enunciado: "<p>O slide da equipe tem: informação certa sobre senhas, letra muito pequena, desenho próprio bonito, nenhuma fonte citada. Para cada critério, escolha.</p>",
        dicas: ["Releia a rubrica: cada critério tem uma pergunta."],
        colunas: ["Critério", "Avaliação"],
        linhas: [["Conteúdo", { op: ["Bom", "Precisa melhorar"], r: "Bom" }], ["Clareza (letra)", { op: ["Bom", "Precisa melhorar"], r: "Precisa melhorar" }], ["Criatividade", { op: ["Bom", "Precisa melhorar"], r: "Bom" }], ["Créditos", { op: ["Bom", "Precisa melhorar"], r: "Precisa melhorar" }]],
        explicacao: "Conteúdo e criatividade bons; letra e créditos precisam melhorar." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 A apresentação da equipe, em ordem",
        itens: ["Apresentar a equipe e o tema", "Explicar o guia, slide por slide", "Mostrar as fontes e os créditos", "Ouvir as perguntas e o feedback"],
        explicacao: "Equipe e tema → guia → créditos → perguntas e feedback." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "ajuda o público", opcoes: ["ajuda o público", "atrapalha o público"], certo: "atrapalha o público" }, why: "Pouco texto e letra grande." },
      { v: true, why: "Os critérios." },
      { v: true, why: "Algo bom + sugestão." },
      { v: true, why: "Créditos." },
      { v: false, corrigir: { trecho: "o melhor é ler tudo de costas para a turma", opcoes: ["o melhor é ler tudo de costas para a turma", "o melhor é falar olhando para a turma"], certo: "o melhor é falar olhando para a turma" }, why: "Prende a atenção." }
    ]
  },

  m7: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual é o motivo?",
        robo: BIT("🔎 A pergunta de ouro", [["Quem ganha se eu acreditar? O site com anúncios? <b>Dinheiro</b>.", "anúncios → dinheiro"], ["Ninguém ganha, a pessoa só acreditou? <b>Engano</b>.", "acreditou → engano", true]]),
        enunciado: "<p>Use a tabela <strong>Motivo · Como ganha · Exemplo</strong>.</p>",
        colunaItem: "Mensagem", colunaResp: "Motivo",
        categorias: [{ id: "D", rot: "💰 Dinheiro" }, { id: "P", rot: "🗳️ Política" }, { id: "O", rot: "😠 Ódio" }, { id: "H", rot: "😂 Humor" }, { id: "E", rot: "🤷 Engano" }],
        itens: [{ t: "“Você não vai acreditar! Clique aqui” (site cheio de anúncios)", c: "D" }, { t: "Montagem de um candidato na véspera da eleição", c: "P" },
          { t: "Perfil falso com apelidos ofensivos a um colega", c: "O" }, { t: "Site de humor: “Merenda vira pizza”", c: "H" }, { t: "A tia repassa a corrente achando que ajuda", c: "E" }],
        explicacao: "Anúncios = dinheiro; candidato = política; ofensa = ódio; piada = humor; acreditou = engano." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Caça-cliques", b: "Título chocante para ganhar cliques" }, { a: "Economia da atenção", b: "A atenção vira dinheiro com propaganda" }, { a: "Perfil falso", b: "Conta que finge ser outra pessoa" }, { a: "Motivo", b: "A razão de fazer algo" }],
        explicacao: "Caça-cliques, economia da atenção, perfil falso e motivo." },
      { tipo: "escolha", titulo: "A pergunta de ouro",
        perguntas: [
          { p: "A pergunta de ouro é:", opcoes: ["Quem ganha se eu acreditar e compartilhar?", "Quantas curtidas tem?", "De que cor é o site?"], certo: 0 },
          { p: "Por que títulos chocantes rendem dinheiro?", opcoes: ["Porque prendem a atenção e geram propaganda", "Porque são verdadeiros", "Porque são curtos"], certo: 0 }],
        explicacao: "Quem ganha? Atenção vira propaganda." },
      { tipo: "sinais", titulo: "Quais são sinais de caça-cliques?",
        enunciado: "<p>Marque <strong>só</strong> os sinais de caça-cliques.</p>",
        opcoes: [{ t: "“Você não vai acreditar…”", certo: true }, { t: "“O número 7 vai te chocar!”", certo: true }, { t: "Site cheio de propagandas", certo: true }, { t: "Título que diz exatamente o que aconteceu, com data", certo: false }],
        explicacao: "Mistério, choque e propaganda demais são sinais de caça-cliques." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Siga o dinheiro",
        enunciado: "<p>Um vídeo “URGENTE” sobre uma cura milagrosa leva a um site que vende um chá por R$ 199 e está cheio de anúncios.</p>",
        perguntas: [
          { p: "Quem ganha com o clique?", opcoes: ["O site, com a venda e os anúncios", "Quem clicou", "Ninguém"], certo: 0 },
          { p: "O motivo principal é:", opcoes: ["Dinheiro", "Humor", "Engano"], certo: 0 },
          { p: "O que fazer?", opcoes: ["Não comprar, não compartilhar e conversar com um adulto", "Comprar logo", "Compartilhar no grupo da família"], certo: 0 }],
        explicacao: "Siga o dinheiro: o site lucra. Não compre nem compartilhe." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos motivos",
        enunciado: "<p>Vire duas cartas e ache os pares: cada motivo e um exemplo.</p>", dicas: ["Releia a tabela Motivo · Exemplo."],
        pares: [{ a: "Dinheiro", b: "Site cheio de anúncios" }, { a: "Política", b: "Montagem de candidato" }, { a: "Humor", b: "Site de piada" }, { a: "Engano", b: "Repassou sem checar" }],
        explicacao: "Dinheiro, política, humor e engano." }
    ],
    vf: [
      { v: true, why: "Sempre há um motivo." },
      { v: true, why: "É a definição." },
      { v: true, why: "Economia da atenção." },
      { v: false, corrigir: { trecho: "sempre ganha dinheiro", opcoes: ["sempre ganha dinheiro", "não ganha nada"], certo: "não ganha nada" }, why: "No engano, ninguém ganha." },
      { v: true, why: "É a pergunta de ouro." }
    ]
  },

  m8: {
    pratica: [
      { tipo: "ordenar", titulo: "Mão na massa: monte o portfólio em ordem",
        robo: BIT("🗂️ Outro portfólio: o de desenhos", [["Escolho os 4 melhores desenhos e ponho numa pasta.", "1 · escolher · 2 · organizar"], ["Escrevo o que é cada um, dou crédito e tiro dados pessoais.", "3 · 4 · 5 ✔", true]]),
        enunciado: "<p>Use a tabela <strong>Passo · O que fazer</strong>.</p>",
        itens: ["Escolher os melhores trabalhos", "Organizar numa pasta, com nomes claros", "Descrever cada trabalho", "Dar crédito às imagens e fontes", "Proteger: tirar os dados pessoais"],
        explicacao: "Escolher → organizar → descrever → crédito → proteger." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Pode ou não pode no portfólio?",
        colunaItem: "Item", colunaResp: "No portfólio…",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Não pode" }],
        itens: [{ t: "O projeto de senhas da equipe", c: "S" }, { t: "O seu endereço e o telefone", c: "N" }, { t: "Um desenho seu com licença CC BY", c: "S" }, { t: "Foto de documento com o seu CPF", c: "N" }],
        explicacao: "Trabalhos sim; dados pessoais não." },
      { tipo: "escolha", titulo: "O nome do arquivo",
        perguntas: [
          { p: "Qual é o melhor nome de arquivo?", opcoes: ["2027-projeto-senhas", "arquivo1", "aaaaa"], certo: 0 },
          { p: "Quem é o autor dos seus trabalhos?", opcoes: ["Você", "O computador", "A escola"], certo: 0 }],
        explicacao: "Nome claro; você é o autor." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Portfólio", b: "Coleção dos melhores trabalhos" }, { a: "Descrição", b: "Texto curto que explica o trabalho" }, { a: "Dado pessoal", b: "Informação que identifica você" }],
        explicacao: "Portfólio, descrição e dado pessoal." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 A descrição do trabalho",
        perguntas: [
          { p: "Qual é a melhor descrição para o guia de senhas?", opcoes: ["“Guia sobre senhas fortes para o 6º ano, feito em equipe em 2027. Aprendi a criar frases-senha.”", "“trabalho”", "“Não lembro o que é.”"], certo: 0 },
          { p: "Uma boa descrição diz:", opcoes: ["O que é, quando fez e o que aprendeu", "Só a cor", "O telefone do autor"], certo: 0 }],
        explicacao: "O que é, quando fez e o que aprendeu." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do portfólio",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["PORTFOLIO", "PASTA", "CREDITO", "AUTOR", "LICENCA"],
        pistas: ["Coleção dos melhores trabalhos (sem acento)", "Onde se guardam os arquivos", "Escrever o nome de quem criou (sem acento)", "Quem criou", "CC BY é uma… (sem cedilha)"], tam: 10,
        explicacao: "Portfólio, pasta, crédito, autor e licença." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "posso colocar o meu endereço e o telefone", opcoes: ["posso colocar o meu endereço e o telefone", "não coloco o endereço nem o telefone"], certo: "não coloco o endereço nem o telefone" }, why: "Dados pessoais protegidos." },
      { v: true, why: "Organiza." },
      { v: true, why: "Você é o autor." },
      { v: false, corrigir: { trecho: "não precisam de crédito", opcoes: ["não precisam de crédito", "precisam de crédito"], certo: "precisam de crédito" }, why: "Direito autoral." }
    ]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "classificar", de: "m1", titulo: "M1 · Posso usar?", categorias: [{ id: "L", rot: "Livre" }, { id: "C", rot: "Com crédito" }, { id: "A", rot: "Só com autorização" }], itens: [{ t: "Domínio público", c: "L" }, { t: "CC BY", c: "C" }, { t: "Todos os direitos reservados", c: "A" }], explicacao: "Livre, com crédito, com autorização." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Imagem", perguntas: [{ p: "Para publicar a foto de alguém, preciso de:", opcoes: ["Autorização", "Filtro"], certo: 0 }], explicacao: "Autorização." },
      { tipo: "relembre", de: "m3" },
      { tipo: "ordenar", de: "m3", titulo: "M3 · A pausa", itens: ["Pare", "Pesquise", "Decida"], explicacao: "Pare, pesquise, decida." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Deepfake", perguntas: [{ p: "Deepfake é feito com:", opcoes: ["IA", "Lápis"], certo: 0 }], explicacao: "IA." },
      { tipo: "relembre", de: "m5" },
      { tipo: "ligar", de: "m5", titulo: "M5 · O plano", pares: [{ a: "Público", b: "Para quem é?" }, { a: "Cronograma", b: "Quando fica pronto?" }], explicacao: "Público e cronograma." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Rubrica", perguntas: [{ p: "Rubrica é:", opcoes: ["A lista do que vai ser avaliado", "Um slide"], certo: 0 }], explicacao: "Os critérios." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Motivo", perguntas: [{ p: "Site cheio de anúncios: o motivo é", opcoes: ["Dinheiro", "Humor"], certo: 0 }], explicacao: "Dinheiro." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Portfólio", perguntas: [{ p: "No portfólio, dados pessoais:", opcoes: ["Não entram", "Entram"], certo: 0 }], explicacao: "Não entram." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: respeita ou desrespeita?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "©️ Autoria e verdade", botoes: [{ id: "R", rot: "✅ Respeita" }, { id: "D", rot: "🚩 Desrespeita" }],
        itens: [{ de: "", t: "Usar foto CC BY com crédito", c: "R" }, { de: "", t: "Postar o vídeo do colega sem pedir", c: "D" }, { de: "", t: "Fazer leitura lateral antes de compartilhar", c: "R" },
          { de: "", t: "Criar deepfake de um professor “de brincadeira”", c: "D" }, { de: "", t: "Mostrar as fontes no fim da apresentação", c: "R" }],
        okMsg: "Você está pronto para a prova! ©️",
        explicacao: "Crédito, leitura lateral e fontes respeitam; postar sem pedir e deepfake desrespeitam." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["AUTOR", "PLAGIO", "IMAGEM", "DEEPFAKE", "RUBRICA", "PORTFOLIO"],
        pistas: ["Quem criou a obra", "Apresentar o trabalho de outro como seu (sem acento)", "Direito de… : precisa de autorização", "Vídeo falso feito com IA", "Lista do que vai ser avaliado", "Coleção dos melhores trabalhos (sem acento)"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-4bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Direito autoral", [{ p: "Apresentar o trabalho de outra pessoa como seu é:", opcoes: ["Plágio", "Crédito", "Licença"], certo: 0 }, { p: "A licença CC BY permite usar a obra:", opcoes: ["Dando o crédito ao autor", "Sem dizer nada", "Vendendo a obra"], certo: 0 }]), pega("m1"),
    Q("m2", "Direito de imagem", [{ p: "Para publicar a foto de um aluno de 14 anos, a autorização é:", opcoes: ["Dos pais ou responsáveis", "De ninguém", "Do fotógrafo"], certo: 0 }, { p: "Se a sua imagem for exposta, o primeiro passo é:", opcoes: ["Guardar as provas", "Apagar as provas", "Responder com ofensa"], certo: 0 }]), pega("m2"),
    Q("m3", "Verdade ou fake", [{ p: "Abrir outras abas para pesquisar sobre a notícia é a:", opcoes: ["Leitura lateral", "Sátira", "Rubrica"], certo: 0 }, { p: "Foto verdadeira de outro ano postada como de hoje é:", opcoes: ["Fora de contexto", "Sátira", "Plágio"], certo: 0 }]), pega("m3"),
    Q("m4", "Deepfakes", [{ p: "Deepfake é:", opcoes: ["Vídeo, foto ou áudio falso feito com IA", "Um tipo de senha", "Uma licença"], certo: 0 }, { p: "Um sinal de deepfake é:", opcoes: ["Boca fora de sincronia com a fala", "Vídeo colorido", "Ter som"], certo: 0 }]), pega("m4"),
    Q("m5", "Projeto: planejar", [{ p: "O plano do que fica pronto em cada data é o:", opcoes: ["Cronograma", "Público", "Formato"], certo: 0 }, { p: "Dividir o projeto em tarefas é:", opcoes: ["Decompor", "Plagiar", "Expor"], certo: 0 }]), pega("m5"),
    Q("m6", "Projeto: apresentar", [{ p: "A lista do que vai ser avaliado é a:", opcoes: ["Rubrica", "Fonte", "Pasta"], certo: 0 }, { p: "Um bom feedback:", opcoes: ["Começa por algo bom e sugere uma melhoria", "Só critica", "Não diz nada"], certo: 0 }]), pega("m6"),
    Q("m7", "Quem ganha", [{ p: "Título chocante feito para ganhar cliques é:", opcoes: ["Caça-cliques", "Rubrica", "Portfólio"], certo: 0 }, { p: "Quem repassa por engano:", opcoes: ["Não ganha nada", "Ganha dinheiro", "Ganha votos"], certo: 0 }]), pega("m7"),
    Q("m8", "Portfólio", [{ p: "Portfólio é:", opcoes: ["Coleção dos melhores trabalhos", "Uma senha", "Um vírus"], certo: 0 }, { p: "No portfólio, o telefone e o endereço:", opcoes: ["Não entram", "Entram", "Entram em destaque"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();
