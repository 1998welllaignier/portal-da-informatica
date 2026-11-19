/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 3º bimestre de 2027 (Rede segura)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF07CO06, EF07CO07, EF07CO08, EF07CO09.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-7ano-2027-3bim", {

  /* ============ MISSÃO 1 — Protocolos ============ */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: a conversa do navegador com o site",
        robo: BIT("☎️ Outro exemplo: o telefonema", [["Primeiro alguém atende: “Alô?”.", "1 · Alô?"], ["Depois se apresenta, conversa e se despede. Cada passo na sua vez.", "2 · 3 · 4 ✔", true]]),
        enunciado: "<p>Clique nos passos <strong>na ordem</strong>. A resposta está na tabela <strong>A conversa do navegador com o site</strong>.</p>",
        etapas: [
          { ic: "⌨️", t: "Você digita o endereço ou clica num link" },
          { ic: "📨", t: "O navegador pede a página ao servidor" },
          { ic: "🖥️", t: "O servidor responde mandando a página" },
          { ic: "📄", t: "O navegador mostra a página na tela" }],
        okMsg: "A página abriu! 🌐",
        explicacao: "Digitar → o navegador pede → o servidor responde → o navegador mostra." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada protocolo e para que serve",
        robo: BIT("🔗 Outro exemplo", [["“Semáforo” → organiza o trânsito.", "regra → para que serve"], ["Eu leio a coluna <b>Para que serve</b> da tabela e ligo.", "protocolo → função ✔", true]]),
        pares: [{ a: "🌐 HTTP", b: "Pedir e receber as páginas da internet" }, { a: "🔒 HTTPS", b: "Páginas com os dados cifrados" }, { a: "🏠 IP", b: "Dar um endereço a cada aparelho" },
          { a: "📶 Wi-Fi", b: "Ligar os aparelhos à rede sem fio" }, { a: "🎧 Bluetooth", b: "Ligar aparelhos pertinho, como o fone" }],
        explicacao: "HTTP = páginas; HTTPS = páginas cifradas; IP = endereço; Wi-Fi = sem fio; Bluetooth = pertinho." },
      { tipo: "ordenar", titulo: "As regras do telefonema, em ordem",
        enunciado: "<p>Coloque os passos na ordem. Veja a tabela <strong>Passo · No telefonema</strong>.</p>",
        itens: ["Quem atende diz “Alô?”", "Quem ligou se apresenta", "Os dois conversam, um de cada vez", "Os dois se despedem e desligam"],
        explicacao: "Alô → apresentar → conversar → despedir. Protocolo é isso: regras na ordem combinada." },
      { tipo: "escolha", titulo: "Protocolos",
        perguntas: [
          { p: "Protocolo é:", opcoes: ["Um conjunto de regras para os aparelhos conversarem", "Um tipo de cabo", "Uma marca de celular"], certo: 0 },
          { p: "Um celular de uma marca conversa com um computador de outra porque:", opcoes: ["Os dois seguem o mesmo protocolo", "São da mesma cor", "Estão na mesma mesa"], certo: 0 },
          { p: "O erro 404 quer dizer:", opcoes: ["Página não encontrada", "Internet muito rápida", "Senha certa"], certo: 0 }],
        explicacao: "Protocolo = regras; o mesmo protocolo deixa marcas diferentes conversarem; 404 = página não encontrada." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 Qual protocolo está trabalhando?",
        enunciado: "<p>Para cada situação, escolha o protocolo. Use a tabela <strong>Protocolo · Para que serve</strong>.</p>",
        dicas: ["Releia a tabela Protocolo · Para que serve."],
        colunaItem: "Situação", colunaResp: "Protocolo",
        categorias: [{ id: "H", rot: "🌐 HTTP" }, { id: "S", rot: "🔒 HTTPS" }, { id: "W", rot: "📶 Wi-Fi" }, { id: "B", rot: "🎧 Bluetooth" }],
        itens: [{ t: "O fone sem fio toca a música do celular", c: "B" }, { t: "O notebook entra na rede da escola sem cabo", c: "W" },
          { t: "Abrir a página do portal, com o cadeado 🔒", c: "S" }, { t: "Abrir uma página antiga, sem o S no endereço", c: "H" }],
        explicacao: "Fone = Bluetooth; rede sem cabo = Wi-Fi; com cadeado = HTTPS; sem o S = HTTP." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos protocolos",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Protocolo", b: "Regras da conversa" }, { a: "Navegador", b: "Abre os sites" }, { a: "Servidor", b: "Guarda o site" }, { a: "IP", b: "Endereço do aparelho" }],
        explicacao: "Protocolo = regras; navegador abre; servidor guarda; IP = endereço." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "Só aparelhos da mesma marca conseguem", opcoes: ["Só aparelhos da mesma marca conseguem", "Aparelhos de marcas diferentes conseguem"], certo: "Aparelhos de marcas diferentes conseguem" }, why: "Basta seguir o mesmo protocolo." },
      { v: true, why: "É o protocolo das páginas." },
      { v: true, why: "Página não encontrada." },
      { v: false, corrigir: { trecho: "muito longe, em outra cidade", opcoes: ["muito longe, em outra cidade", "bem perto um do outro"], certo: "bem perto um do outro" }, why: "Bluetooth é para aparelhos pertinho." }
    ]
  },

  /* ============ MISSÃO 2 — HTTP, HTTPS e o cadeado ============ */
  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: cartão-postal ou carta lacrada?",
        robo: BIT("🔎 Como eu olho o endereço", [["Começa com <b>https</b> e tem 🔒? Carta lacrada: cifrado.", "https 🔒 → cifrado"], ["Começa só com <b>http</b>, sem S? Cartão-postal: aberto.", "http → aberto", true]]),
        enunciado: "<p>Olhe o começo de cada endereço.</p>",
        colunaItem: "Endereço", colunaResp: "Os dados viajam…",
        categorias: [{ id: "C", rot: "✉️ Cifrados (https)" }, { id: "A", rot: "📮 Abertos (http)" }],
        itens: [{ t: "https://portal.professorwell.com.br 🔒", c: "C" }, { t: "http://site-antigo.exemplo", c: "A" }, { t: "https://loja.exemplo 🔒", c: "C" }, { t: "http://jogos.exemplo", c: "A" }],
        explicacao: "https e cadeado = cifrado (carta lacrada); http sem S = aberto (cartão-postal)." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Antes de digitar a senha: o que conferir?",
        robo: BIT("🔎 A pergunta", [["Isso me ajuda a saber se o site é o verdadeiro e se a conversa é cifrada? Então confiro.", "nome + https ✔"], ["A cor do site não prova nada.", "cor → não prova", true]]),
        enunciado: "<p>Marque <strong>só</strong> o que vale conferir.</p>",
        opcoes: [{ t: "Se tem https e o cadeado", certo: true }, { t: "O nome do site, letra por letra", certo: true }, { t: "Digitar o endereço eu mesmo, em vez de clicar no link", certo: true },
          { t: "Se o site é bonito e colorido", certo: false, why: "Site falso também pode ser bonito." }, { t: "Se o link veio de um número desconhecido", certo: false, why: "Isso não é motivo para confiar; é motivo para desconfiar." }],
        explicacao: "Confira https e cadeado, o nome do site e prefira digitar o endereço." },
      { tipo: "ligar", titulo: "Cada parte e o que ela é",
        pares: [{ a: "http://", b: "Cartão-postal: dados abertos" }, { a: "https://", b: "Carta lacrada: dados cifrados" }, { a: "🔒", b: "Mostra que a conversa é cifrada" }, { a: "S do HTTPS", b: "Secure, “seguro”" }],
        explicacao: "http = aberto; https = cifrado; o cadeado mostra a conversa cifrada; S = secure." },
      { tipo: "escolha", titulo: "O cadeado",
        perguntas: [
          { p: "O cadeado 🔒 mostra que:", opcoes: ["A conversa com o site é cifrada", "O site é honesto", "A internet está rápida"], certo: 0 },
          { p: "Um site falso pode ter cadeado?", opcoes: ["Pode: por isso confiro o nome do site", "Não, nunca", "Só se for de jogos"], certo: 0 }],
        explicacao: "O cadeado mostra a conversa cifrada, mas site falso também pode ter cadeado." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Posso digitar a senha aqui?",
        enunciado: "<p>Para cada site, decida. Confira o <strong>https</strong> e o <strong>nome do site</strong>, letra por letra. O site verdadeiro do jogo é <strong>jogoestrela.exemplo</strong>.</p>",
        dicas: ["Compare o nome com jogoestrela.exemplo, letra por letra."],
        app: "🔑 Entrar na conta", botoes: [{ id: "S", rot: "✅ Pode digitar" }, { id: "N", rot: "🚫 Não digite" }],
        itens: [{ de: "https://jogoestrela.exemplo 🔒", t: "Entre com a sua senha", c: "S", why: "Nome certo e cadeado." },
          { de: "http://jogoestrela.exemplo", t: "Entre com a sua senha", c: "N", why: "Sem o S: a senha viajaria aberta." },
          { de: "https://jogo3strela.exemplo 🔒", t: "Ganhe moedas: entre com a senha", c: "N", why: "Trocaram o E por 3: site falso, mesmo com cadeado." },
          { de: "https://jogoestrela-premio.xyz 🔒", t: "Prêmio! Digite a senha", c: "N", why: "Nome diferente do verdadeiro." }],
        okMsg: "Você não caiu na pegadinha do cadeado! 🔒",
        explicacao: "Só pode quando tem https E o nome do site é exatamente o verdadeiro." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o cadeado",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "No **HTTP**, os dados viajam abertos, como um cartão-postal. No **HTTPS**, com o 🔒, viajam **cifrados**, como uma carta lacrada. O cadeado não prova que o site é **honesto**: confira o **nome** do site, letra por letra.",
        explicacao: "HTTP, HTTPS, cifrados, honesto e nome." }
    ],
    vf: [
      { v: true, why: "Quem pegar no caminho lê." },
      { v: true, why: "Secure = seguro." },
      { v: false, corrigir: { trecho: "prova que o site é honesto", opcoes: ["prova que o site é honesto", "mostra que a conversa é cifrada"], certo: "mostra que a conversa é cifrada" }, why: "Site falso também pode ter cadeado." },
      { v: true, why: "Trocam uma letra para enganar." },
      { v: true, why: "É a carta lacrada." }
    ]
  },

  /* ============ MISSÃO 3 — Senhas e duas etapas ============ */
  m3: {
    pratica: [
      { tipo: "medidor_senha", titulo: "Mão na massa: laboratório de senhas",
        robo: BIT("🔐 Montando uma senha de mentira", [["Começo com palavras que eu imagino: <b>Pipa Verde Voa</b>.", "PipaVerdeVoa"], ["Misturo número e símbolo: <b>Pipa!Verde8Voa</b> → muito forte.", "Pipa!Verde8Voa ✔", true]]),
        enunciado: "<p>Digite uma senha <strong>inventada</strong> e veja o medidor mudar. Complete todos os itens da lista para chegar em <strong>Muito forte</strong>.</p>",
        explicacao: "Senha forte: comprida, com maiúscula, minúscula, número e símbolo, e sem nada pessoal. E nunca conte para ninguém!" }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Senha forte ou fraca?",
        robo: BIT("🔎 As perguntas", [["É <b>comprida</b>? Tem <b>mistura</b>? Não tem nada <b>pessoal</b>? Então é forte.", "Rio#Azul42Mar → forte"], ["Tem nome ou ano de nascimento? Fraca.", "lucas2014 → fraca", true]]),
        colunaItem: "Senha (de mentira)", colunaResp: "É…",
        categorias: [{ id: "F", rot: "💪 Forte" }, { id: "R", rot: "⚠️ Fraca" }],
        itens: [{ t: "123456", c: "R", why: "Curta e sequência." }, { t: "julia2014", c: "R", why: "Nome e ano." }, { t: "Pipa!Verde8Voa", c: "F" }, { t: "Lago#Sol55Peixe", c: "F" }, { t: "2014", c: "R" }],
        explicacao: "Forte = comprida, misturada e sem nada pessoal." },
      { tipo: "ligar", titulo: "Cada proteção e o que ela faz",
        pares: [{ a: "Verificação em duas etapas", b: "Pede a senha e mais uma prova" }, { a: "Frase-senha", b: "Palavras misturadas, longa e fácil de lembrar" }, { a: "PIN", b: "Senha curta de números" }, { a: "Código do SMS", b: "É só seu" }],
        explicacao: "Duas etapas = senha + prova; frase-senha = palavras misturadas; PIN = números; código = só seu." },
      { tipo: "escolha", titulo: "Duas etapas",
        perguntas: [
          { p: "Alguém descobriu a sua senha, mas a conta tem duas etapas. Ele:", opcoes: ["Não entra sem a segunda prova", "Entra na hora", "Apaga a conta"], certo: 0 },
          { p: "Um “amigo” pede o código que chegou no seu celular. Isso é:", opcoes: ["Golpe", "Normal", "Uma brincadeira sem risco"], certo: 0 }],
        explicacao: "Sem a segunda prova, ninguém entra; quem pede o código é golpista." }
    ],
    desafio: [
      { tipo: "senha", titulo: "🟡 Invente 2 senhas fortes (que você NÃO vai usar de verdade)", n: 2,
        enunciado: "<p>Use a dica da frase-senha: palavras misturadas com número e símbolo.</p>",
        dicas: ["Exemplo do jeito: Pipa!Verde8Voa. Invente outras, sem nada pessoal."],
        explicacao: "Senha forte é longa e mistura letras maiúsculas e minúsculas, números e símbolos. Nada de 123456, nome ou data de nascimento." }
    ],
    turbo: [
      { tipo: "classificar", modo: "tabela", titulo: "🔴 Sabe, tem ou é?",
        enunciado: "<p>Separe as provas da verificação em duas etapas. Veja a tabela <strong>Tipo de prova · Exemplo</strong>.</p>",
        dicas: ["Releia a tabela Tipo de prova · Exemplo."],
        colunaItem: "Prova", colunaResp: "É algo que você…",
        categorias: [{ id: "S", rot: "🧠 Sabe" }, { id: "T", rot: "📱 Tem" }, { id: "E", rot: "👆 É" }],
        itens: [{ t: "A senha", c: "S" }, { t: "O PIN", c: "S" }, { t: "O código que chega no celular", c: "T" }, { t: "A digital", c: "E" }, { t: "O rosto", c: "E" }],
        explicacao: "Sabe: senha e PIN. Tem: o código no celular. É: digital e rosto." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "é forte", opcoes: ["é forte", "é fraca"], certo: "é fraca" }, why: "Nada pessoal na senha." },
      { v: true, why: "Mistura deixa forte." },
      { v: true, why: "É a segunda prova." },
      { v: false, corrigir: { trecho: "Pode passar", opcoes: ["Pode passar", "Nunca passe"], certo: "Nunca passe" }, why: "O código é só seu." },
      { v: true, why: "Algo que você é." }
    ]
  },

  /* ============ MISSÃO 4 — Golpes e phishing ============ */
  m4: {
    pratica: [
      { tipo: "mensagens", titulo: "Mão na massa: golpe ou normal?",
        robo: BIT("📩 Outra mensagem", [["“Ganhe um celular! Pague só o frete HOJE.” Prêmio fácil e pressa.", "✔ golpe"], ["“A aula de amanhã é no laboratório.” Não pede nada.", "✔ normal", true]]),
        enunciado: "<p>Para cada mensagem, decida. Lembre os sinais: pressa, prêmio, pedido de senha, código ou dinheiro.</p>",
        app: "💬 Mensagens", botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "Número novo", t: "Oi, troquei de número. Me manda um Pix?", c: "G", why: "Falso parente pedindo dinheiro." },
          { de: "Professor", t: "Tragam a apostila na quinta.", c: "N" },
          { de: "Jogo grátis", t: "Ganhe moedas: entre com a sua senha neste site.", c: "G", why: "Pede a senha." },
          { de: "Mãe", t: "Chego às 18h para te buscar.", c: "N" }],
        okMsg: "Você reconhece um golpe! 🎣",
        explicacao: "Pedido de dinheiro ou senha = golpe; avisos sem pedido = normal." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Quais são sinais de golpe nesta mensagem?",
        enunciado: "<p>“<strong>PROMOSSÃO SÓ HOJE!</strong> Você ganhou um fone. Mande o código que chegou no seu SMS para liberar: banc0-premio.xyz”</p><p>Marque <strong>só</strong> os sinais de golpe.</p>",
        opcoes: [{ t: "Pressa (“só hoje”)", certo: true }, { t: "Prêmio fácil", certo: true }, { t: "Pede o código do SMS", certo: true }, { t: "Erro de português e endereço estranho", certo: true },
          { t: "Fala de um fone", certo: false, why: "Falar de um fone não é sinal; o pedido do código é." }],
        explicacao: "Pressa, prêmio, pedido de código e erros são sinais de golpe." },
      { tipo: "classificar", modo: "tabela", titulo: "Qual é o golpe?",
        colunaItem: "Mensagem", colunaResp: "Golpe",
        categorias: [{ id: "P", rot: "👪 Falso parente" }, { id: "R", rot: "🎁 Prêmio falso" }, { id: "L", rot: "🔗 Link falso" }, { id: "M", rot: "🎮 Moedas grátis" }],
        itens: [{ t: "“Sua conta será bloqueada. Clique aqui e digite a senha.”", c: "L" }, { t: "“Troquei de número, me empresta um dinheiro?”", c: "P" },
          { t: "“Você ganhou uma bicicleta! Pague só o frete.”", c: "R" }, { t: "“Moedas do jogo de graça: entre com a sua senha.”", c: "M" }],
        explicacao: "Conta bloqueada = link falso; número novo = falso parente; ganhou = prêmio falso; moedas = moedas grátis." },
      { tipo: "ordenar", titulo: "Caí num golpe: o que fazer, em ordem?",
        itens: ["Parar de responder", "Trocar a senha", "Ativar as duas etapas", "Contar para um adulto de confiança", "Avisar os contatos"],
        explicacao: "Parar → trocar a senha → duas etapas → contar a um adulto → avisar os contatos." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Caixa de entrada: golpe ou normal?",
        enunciado: "<p>Agora é o e-mail. Decida cada mensagem.</p>",
        app: "📧 E-mail", botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "suporte@banc0-oficial.xyz", t: "Confirme a sua senha em 1 hora ou perde a conta!", c: "G", why: "Pressa, senha e endereço estranho." },
          { de: "Escola", t: "Reunião de pais na sexta, às 19h.", c: "N" },
          { de: "Loja Super Barato", t: "Celular de R$ 2.000 por R$ 50, só hoje!", c: "G", why: "Prêmio fácil e pressa." },
          { de: "Biblioteca", t: "O livro que você reservou chegou.", c: "N" }],
        okMsg: "Caixa de entrada limpa! 📧",
        explicacao: "Pressa, senha, preço impossível e endereço estranho = golpe." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do golpe",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["PHISHING", "ISCA", "GOLPISTA", "PRESSA", "SENHA"],
        pistas: ["Golpe da mensagem falsa", "Chama a atenção para cair no golpe", "Quem aplica o golpe", "Sinal de golpe: “só hoje!”", "Nunca passe para ninguém"], tam: 10,
        explicacao: "Phishing, isca, golpista, pressa e senha." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Sinais clássicos." },
      { v: false, corrigir: { trecho: "são uma boa oferta", opcoes: ["são uma boa oferta", "são um golpe"], certo: "são um golpe" }, why: "Pedem a senha." },
      { v: true, why: "Um adulto ajuda a resolver." },
      { v: true, why: "Golpistas costumam errar." }
    ]
  },

  /* ============ MISSÃO 5 — Empatia na rede ============ */
  m5: {
    pratica: [
      { tipo: "mensagens", titulo: "Mão na massa: gentil ou machuca?",
        robo: BIT("💬 Outra mensagem", [["“Adorei o seu desenho! 😊” Deixa a pessoa feliz.", "✔ gentil"], ["“Que desenho feio, kkk” Machuca, mesmo com risada.", "✔ machuca", true]]),
        enunciado: "<p>Imagine que a mensagem é para você. Como você se sentiria?</p>",
        app: "💬 Grupo da turma", botoes: [{ id: "G", rot: "🙂 Gentil" }, { id: "M", rot: "😢 Machuca" }],
        itens: [{ de: "Colega", t: "Parabéns pela apresentação! 👏", c: "G" }, { de: "Colega", t: "NINGUÉM QUER VOCÊ NO TIME", c: "M", why: "Em maiúsculas, parece grito, e exclui." },
          { de: "Colega", t: "Quer ajuda com a tarefa?", c: "G" }, { de: "Colega", t: "Você é muito lento, kkkk", c: "M", why: "A risada não tira a ofensa." }],
        okMsg: "Você pensou no outro! 💛",
        explicacao: "Mensagem gentil faz bem; ofensa machuca, mesmo com “kkk”." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada combinado e o seu motivo",
        robo: BIT("🔗 Como eu ligo", [["Eu leio a coluna <b>Por quê</b> da tabela dos combinados.", "combinado → motivo"], ["Maiúsculas → parece grito.", "🔠 → gritando ✔", true]]),
        pares: [{ a: "🔠 Não escrever tudo em maiúsculas", b: "Parece que você está gritando" }, { a: "🔁 Ler antes de enviar", b: "Evita se arrepender" }, { a: "🙂 Usar emoji", b: "Mostra o tom da mensagem" }, { a: "⏸️ Esperar a raiva passar", b: "Com raiva, a gente machuca" }],
        explicacao: "Maiúsculas = grito; ler = evita arrependimento; emoji = tom; esperar = não machucar." },
      { tipo: "classificar", modo: "tabela", titulo: "Ao vivo ou na mensagem escrita?",
        colunaItem: "Situação", colunaResp: "Acontece…",
        categorias: [{ id: "V", rot: "🗣️ Na conversa ao vivo" }, { id: "E", rot: "⌨️ Na mensagem escrita" }],
        itens: [{ t: "Você vê o rosto da pessoa", c: "V" }, { t: "A brincadeira pode parecer ofensa", c: "E" }, { t: "O tom de voz mostra se é brincadeira", c: "V" }, { t: "O texto pode ser copiado e espalhado", c: "E" }],
        explicacao: "Ao vivo: rosto e tom de voz. Escrito: brincadeira vira ofensa e o texto se espalha." },
      { tipo: "escolha", titulo: "Empatia",
        perguntas: [
          { p: "Empatia é:", opcoes: ["Se colocar no lugar do outro", "Ter muitos seguidores", "Responder rápido"], certo: 0 },
          { p: "Antes de postar, as três perguntas são:", opcoes: ["É verdade? É gentil? É necessário?", "Vai ter curtida? É engraçado? É rápido?", "Quem viu? Quem curtiu? Quem comentou?"], certo: 0 }],
        explicacao: "Empatia = lugar do outro; antes de postar: verdade, gentil, necessário." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 No grupo da turma: qual é a melhor resposta?",
        perguntas: [
          { p: "Um colega manda: “Não entendi a tarefa…”. A melhor resposta:", opcoes: ["Explicar com gentileza e oferecer ajuda", "Responder “Ninguém merece, kkk”", "Responder “LÊ DIREITO!”"], certo: 0 },
          { p: "Você ficou com raiva de uma mensagem. O melhor:", opcoes: ["Esperar a raiva passar antes de responder", "Responder na hora, em maiúsculas", "Mandar print para todo mundo"], certo: 0 },
          { p: "Você postou uma brincadeira e o colega ficou chateado. O melhor:", opcoes: ["Pedir desculpas e apagar a mensagem", "Dizer que ele não sabe brincar", "Postar outra"], certo: 0 }],
        explicacao: "Ajudar com gentileza, esperar a raiva passar e pedir desculpas são atitudes de empatia." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Antes de postar, em ordem",
        enunciado: "<p>Coloque em ordem o que fazer antes de postar. A resposta está no 💡 Para começar.</p>",
        itens: ["Escrever a mensagem", "Ler antes de enviar", "Perguntar: é verdade? É gentil? É necessário?", "Se tudo for “sim”, postar"],
        explicacao: "Escrever → ler → as três perguntas → postar só se tudo for “sim”." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Maiúsculas parecem grito." },
      { v: false, corrigir: { trecho: "sempre dá para perceber", opcoes: ["sempre dá para perceber", "nem sempre dá para perceber"], certo: "nem sempre dá para perceber" }, why: "Não se ouve a voz." },
      { v: true, why: "As três perguntas." },
      { v: false, corrigir: { trecho: "o melhor é responder na hora", opcoes: ["o melhor é responder na hora", "o melhor é esperar a raiva passar"], certo: "o melhor é esperar a raiva passar" }, why: "Com raiva, a gente machuca." }
    ]
  },

  /* ============ MISSÃO 6 — Cyberbullying ============ */
  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: é cyberbullying?",
        robo: BIT("🔎 As perguntas", [["É <b>de propósito</b>? Acontece <b>várias vezes</b>? Humilha ou ameaça? Então é cyberbullying.", "✔ ✔ ✔ → é"], ["Dois colegas discordam com respeito? Não é.", "discordar → não é", true]]),
        enunciado: "<p>Use a definição do 💡 Para começar: <strong>de propósito</strong>, <strong>várias vezes</strong>, para <strong>humilhar, ameaçar ou perseguir</strong>.</p>",
        colunaItem: "Situação", colunaResp: "É cyberbullying?",
        categorias: [{ id: "S", rot: "🛑 É" }, { id: "N", rot: "✅ Não é" }],
        itens: [{ t: "Todo dia, no grupo, chamam um colega por um apelido que humilha", c: "S" }, { t: "Dois colegas discordam sobre o melhor time, com respeito", c: "N" },
          { t: "Criaram um perfil falso para zombar de uma aluna", c: "S" }, { t: "Fazem montagens com a foto do colega para todo mundo rir", c: "S" }, { t: "Uma colega elogia o desenho do outro", c: "N" }],
        explicacao: "Humilhar de propósito e várias vezes é cyberbullying; discordar com respeito e elogiar, não." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Você é o alvo: o que ajuda?",
        enunciado: "<p>Marque <strong>só</strong> as atitudes que ajudam.</p>",
        opcoes: [{ t: "Guardar prints", certo: true }, { t: "Bloquear quem ataca", certo: true }, { t: "Denunciar na plataforma", certo: true }, { t: "Contar para um adulto de confiança", certo: true },
          { t: "Responder com ofensas", certo: false, why: "Só piora a briga." }],
        explicacao: "Prints, bloquear, denunciar e contar para um adulto ajudam; responder com ofensa piora." },
      { tipo: "ligar", titulo: "Cada papel e o que ele pode fazer",
        robo: BIT("🔗 Como eu ligo", [["Eu leio a coluna <b>O que pode fazer</b> da tabela dos papéis.", "papel → atitude"], ["Espectador → não curtir nem repassar.", "👀 → não repassar ✔", true]]),
        pares: [{ a: "🎯 Alvo", b: "Guardar prints, bloquear e contar para um adulto" }, { a: "👀 Espectador", b: "Não curtir nem repassar e apoiar o colega" }, { a: "😈 Autor", b: "Parar, apagar e pedir desculpas" }],
        explicacao: "Alvo pede ajuda; espectador não repassa e apoia; autor para e pede desculpas." },
      { tipo: "escolha", titulo: "Cyberbullying e a lei",
        perguntas: [
          { p: "Desde 2024, no Brasil, o cyberbullying:", opcoes: ["É crime", "É permitido", "Só vale fora da escola"], certo: 0 },
          { p: "O print serve para:", opcoes: ["Guardar a prova do que aconteceu", "Espalhar a ofensa", "Deixar a tela bonita"], certo: 0 }],
        explicacao: "É crime desde 2024 (Lei nº 14.811/2024); o print guarda a prova." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Você está no grupo: ajuda ou piora?",
        enunciado: "<p>Chegou no grupo uma montagem zombando de um colega. Para cada atitude, decida.</p>",
        app: "👀 Espectador", botoes: [{ id: "A", rot: "💚 Ajuda" }, { id: "P", rot: "💥 Piora" }],
        itens: [{ de: "Você", t: "Curtir e rir da montagem", c: "P", why: "Curtir espalha e incentiva." },
          { de: "Você", t: "Mandar uma mensagem de apoio ao colega", c: "A" },
          { de: "Você", t: "Repassar para outro grupo", c: "P", why: "Espalha a humilhação." },
          { de: "Você", t: "Avisar o professor ou a coordenação", c: "A" },
          { de: "Você", t: "Denunciar a montagem na plataforma", c: "A" }],
        okMsg: "Você fez a diferença! 💚",
        explicacao: "Apoiar, avisar um adulto e denunciar ajudam; curtir e repassar pioram." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: cyberbullying",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "**Cyberbullying** é humilhar alguém pela internet, de propósito e várias **vezes**. O alvo guarda **prints**, bloqueia, denuncia e conta para um **adulto**. O **espectador** não curte nem repassa. Desde 2024, é **crime** no Brasil.",
        explicacao: "Cyberbullying, vezes, prints, adulto, espectador e crime." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "ajuda a resolver", opcoes: ["ajuda a resolver", "piora a situação"], certo: "piora a situação" }, why: "Repassar espalha." },
      { v: true, why: "O print é a prova." },
      { v: true, why: "Lei nº 14.811/2024." },
      { v: true, why: "É o papel do espectador." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Wi-Fi público ============ */
  m7: {
    pratica: [
      { tipo: "mensagens", titulo: "Mão na massa: na rodoviária, conectar ou não?",
        robo: BIT("📶 Outro lugar: a lanchonete", [["Pergunto ao atendente o <b>nome certo</b> da rede.", "nome certo ✔"], ["Vou só ver vídeo? Pode. Entrar no banco? Melhor nos dados móveis.", "banco → dados móveis", true]]),
        enunciado: "<p>Você está na rodoviária. O atendente disse que a rede da rodoviária se chama <strong>Rodoviaria_Oficial</strong>. Para cada ação, decida.</p>",
        app: "📶 Wi-Fi", botoes: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Melhor evitar" }],
        itens: [{ de: "Rodoviaria_Oficial", t: "Ver a previsão do tempo", c: "S" },
          { de: "Rodoviaria_Gratis_Rapida", t: "Entrar nessa rede com nome parecido", c: "N", why: "Pode ser rede falsa." },
          { de: "Rodoviaria_Oficial", t: "Entrar no aplicativo do banco", c: "N", why: "Para o que é importante, use os dados móveis." },
          { de: "Dados móveis", t: "Pagar uma conta pelo celular", c: "S" }],
        okMsg: "Viagem segura! 🚌",
        explicacao: "Rede com o nome certo serve para coisas simples; banco e pagamento, nos dados móveis; nome parecido, evite." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que protege no Wi-Fi público?",
        enunciado: "<p>Marque <strong>só</strong> o que protege.</p>",
        opcoes: [{ t: "Perguntar ao lugar o nome certo da rede", certo: true }, { t: "Usar os dados móveis para o que é importante", certo: true }, { t: "Esquecer a rede depois de usar", certo: true },
          { t: "Entrar no banco pela rede aberta", certo: false, why: "Evite coisas importantes na rede aberta." }, { t: "Entrar em qualquer rede com “grátis” no nome", certo: false, why: "Pode ser rede falsa." }],
        explicacao: "Nome certo, dados móveis e esquecer a rede protegem." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Rede aberta", b: "Entra sem senha" }, { a: "Rede falsa", b: "Nome parecido, criada por golpista" }, { a: "Dados móveis", b: "Internet da operadora do celular" }, { a: "Esquecer a rede", b: "O celular não entra sozinho de novo" }],
        explicacao: "Aberta = sem senha; falsa = nome parecido; dados móveis = operadora; esquecer = não entra sozinho." },
      { tipo: "escolha", titulo: "Redes abertas",
        perguntas: [
          { p: "Numa rede aberta, alguém na mesma rede pode tentar ver:", opcoes: ["O que não está cifrado", "Só a bateria do celular", "Nada, nunca"], certo: 0 },
          { p: "Para evitar a rede falsa, o melhor é:", opcoes: ["Perguntar ao lugar o nome certo da rede", "Escolher a rede com o nome mais bonito", "Entrar em todas"], certo: 0 }],
        explicacao: "O que não está cifrado pode ser visto; pergunte o nome certo da rede." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 Wi-Fi público ou dados móveis?",
        enunciado: "<p>Para cada tarefa, escolha a conexão mais segura. Use a tabela <strong>Atitude · Por quê</strong>.</p>",
        dicas: ["O que é importante vai pelos dados móveis."],
        colunaItem: "Tarefa", colunaResp: "Melhor usar…",
        categorias: [{ id: "W", rot: "📶 Pode ser o Wi-Fi público" }, { id: "D", rot: "📱 Dados móveis" }],
        itens: [{ t: "Ver um vídeo engraçado", c: "W" }, { t: "Entrar no banco", c: "D" }, { t: "Ler uma notícia", c: "W" }, { t: "Digitar a senha do e-mail", c: "D" }],
        explicacao: "Coisas simples: Wi-Fi com o nome certo. Banco e senhas: dados móveis." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória do Wi-Fi",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Wi-Fi público", b: "Rede de um lugar aberto" }, { a: "Rede aberta", b: "Sem senha" }, { a: "Dados móveis", b: "3G, 4G, 5G" }, { a: "Rede falsa", b: "Nome parecido" }],
        explicacao: "Wi-Fi público, rede aberta, dados móveis e rede falsa." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "É a rede falsa." },
      { v: false, corrigir: { trecho: "o melhor é entrar no banco e digitar todas as senhas", opcoes: ["o melhor é entrar no banco e digitar todas as senhas", "o melhor é evitar o banco e as senhas importantes"], certo: "o melhor é evitar o banco e as senhas importantes" }, why: "Use os dados móveis." },
      { v: true, why: "Não são compartilhados com estranhos." },
      { v: true, why: "Ele não entra sozinho." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Debate respeitoso ============ */
  m8: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: argumento ou ataque pessoal?",
        robo: BIT("🔎 A pergunta", [["A frase fala da <b>ideia</b> e dá um motivo? Argumento.", "ideia + motivo → argumento"], ["A frase ofende a <b>pessoa</b>? Ataque pessoal.", "ofende → ataque", true]]),
        colunaItem: "Frase", colunaResp: "É…",
        categorias: [{ id: "A", rot: "✅ Argumento" }, { id: "P", rot: "❌ Ataque pessoal" }],
        itens: [{ t: "“Eu discordo, porque o passeio fica caro para muita gente.”", c: "A" }, { t: "“Você só fala besteira.”", c: "P" },
          { t: "“Entendi o seu ponto, mas penso diferente.”", c: "A" }, { t: "“Cala a boca, ninguém te perguntou.”", c: "P" }],
        explicacao: "Argumento fala da ideia e dá motivo; ataque pessoal ofende a pessoa." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "As regras do debate, em ordem",
        robo: BIT("🗣️ Como eu penso", [["Primeiro eu <b>ouço</b> o outro até o fim.", "1 · ouvir"], ["Depois espero a vez, falo o meu motivo e, no fim, aceito discordar.", "2 · 3 · 4 ✔", true]]),
        enunciado: "<p>Coloque na ordem da tabela <strong>Regras do debate</strong>.</p>",
        itens: ["Ouvir até o fim", "Esperar a vez", "Dar um motivo (e a fonte)", "Aceitar discordar"],
        explicacao: "Ouvir → esperar a vez → dar um motivo → aceitar discordar." },
      { tipo: "ligar", titulo: "Cada palavra e o seu significado",
        pares: [{ a: "Debate", b: "Conversa com opiniões diferentes" }, { a: "Argumento", b: "Motivo da sua opinião" }, { a: "Ataque pessoal", b: "Ofender a pessoa" }, { a: "Fonte", b: "De onde veio a informação" }],
        explicacao: "Debate, argumento, ataque pessoal e fonte." },
      { tipo: "escolha", titulo: "Debate respeitoso",
        perguntas: [
          { p: "No debate respeitoso, a gente critica:", opcoes: ["A ideia", "A pessoa", "A roupa da pessoa"], certo: 0 },
          { p: "No fim do debate, se ninguém mudou de opinião:", opcoes: ["Tudo bem: cada um pode continuar com a sua", "Alguém tem que ser xingado", "O debate foi inútil"], certo: 0 }],
        explicacao: "Critique a ideia; aceitar discordar faz parte." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Qual é a melhor resposta para continuar o debate?",
        perguntas: [
          { p: "Colega: “Acho que o celular devia ser liberado na aula.” A melhor resposta:", opcoes: ["Discordar e dar um motivo", "Responder “Que ideia burra.”", "Responder “Você nem estuda.”"], certo: 0 },
          { p: "Alguém diz um número sem dizer de onde tirou. O melhor:", opcoes: ["Perguntar: “Qual é a fonte?”", "Mandar calar a boca", "Sair do grupo"], certo: 0 },
          { p: "Duas pessoas falam ao mesmo tempo. O combinado é:", opcoes: ["Esperar a vez", "Falar mais alto", "Escrever em maiúsculas"], certo: 0 }],
        explicacao: "Discordar com motivo, pedir a fonte e esperar a vez." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do debate",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 📖 O que significa?."],
        palavras: ["DEBATE", "ARGUMENTO", "FONTE", "OPINIAO", "RESPEITO"],
        pistas: ["Conversa com opiniões diferentes", "Motivo da sua opinião", "De onde veio a informação", "O que cada um pensa (sem acento)", "Criticar a ideia, não a pessoa, é ter…"], tam: 10,
        explicacao: "Debate, argumento, fonte, opinião e respeito." }
    ],
    vf: [
      { v: true, why: "Ideia, não pessoa." },
      { v: false, corrigir: { trecho: "é um bom argumento", opcoes: ["é um bom argumento", "é um ataque pessoal"], certo: "é um ataque pessoal" }, why: "Ofende a pessoa." },
      { v: true, why: "É a definição." },
      { v: true, why: "Aceitar discordar." },
      { v: true, why: "É a definição." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Protocolos", enunciado: "<p>Ligue cada protocolo ao que ele faz.</p>", pares: [{ a: "HTTP", b: "Páginas da internet" }, { a: "IP", b: "Endereço do aparelho" }, { a: "Bluetooth", b: "Aparelhos pertinho" }], explicacao: "HTTP, IP e Bluetooth." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", de: "m2", titulo: "M2 · Aberto ou cifrado?", enunciado: "<p>Separe os endereços.</p>", categorias: [{ id: "C", rot: "Cifrado" }, { id: "A", rot: "Aberto" }], itens: [{ t: "https:// com 🔒", c: "C" }, { t: "http:// sem S", c: "A" }], explicacao: "https = cifrado; http = aberto." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", de: "m3", titulo: "M3 · Senhas", enunciado: "<p>Forte ou fraca?</p>", categorias: [{ id: "F", rot: "Forte" }, { id: "R", rot: "Fraca" }], itens: [{ t: "Lago#Sol55Peixe", c: "F" }, { t: "julia2014", c: "R" }], explicacao: "Comprida e misturada = forte." },
      { tipo: "relembre", de: "m4" },
      { tipo: "sinais", de: "m4", titulo: "M4 · Sinais de golpe", enunciado: "<p>Marque os sinais de golpe.</p>", opcoes: [{ t: "Pressa", certo: true }, { t: "Pede o código do SMS", certo: true }, { t: "Aviso da reunião de pais", certo: false }], explicacao: "Pressa e pedido de código." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Empatia", perguntas: [{ p: "Tudo em maiúsculas parece que você está:", opcoes: ["Gritando", "Elogiando"], certo: 0 }], explicacao: "Gritando." },
      { tipo: "relembre", de: "m6" },
      { tipo: "ligar", de: "m6", titulo: "M6 · Papéis", enunciado: "<p>Ligue cada papel ao que ele pode fazer.</p>", pares: [{ a: "Alvo", b: "Guardar prints e contar para um adulto" }, { a: "Espectador", b: "Não repassar e apoiar o colega" }], explicacao: "Alvo pede ajuda; espectador não repassa." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Wi-Fi público", perguntas: [{ p: "Para entrar no banco, use:", opcoes: ["Os dados móveis", "A rede aberta da praça"], certo: 0 }], explicacao: "Dados móveis." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Debate", perguntas: [{ p: "No debate, a gente critica:", opcoes: ["A ideia", "A pessoa"], certo: 0 }], explicacao: "A ideia." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: protege ou arrisca?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "🛡️ Rede segura", botoes: [{ id: "P", rot: "✅ Protege" }, { id: "R", rot: "🚩 Arrisca" }],
        itens: [{ de: "", t: "Conferir o nome do site antes de digitar a senha", c: "P" }, { de: "", t: "Passar o código do SMS para um “amigo”", c: "R" }, { de: "", t: "Ativar a verificação em duas etapas", c: "P" },
          { de: "", t: "Repassar a montagem que zomba do colega", c: "R" }, { de: "", t: "Usar os dados móveis para entrar no banco", c: "P" }],
        okMsg: "Você está pronto para a prova! 🛡️",
        explicacao: "Conferir o site, duas etapas e dados móveis protegem; passar o código e repassar a montagem arriscam." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["PROTOCOLO", "CADEADO", "SENHA", "PHISHING", "EMPATIA", "PRINT"],
        pistas: ["Regras da conversa dos aparelhos", "Mostra que a conversa é cifrada", "Forte, comprida e misturada", "Golpe da isca falsa", "Se colocar no lugar do outro", "Foto da tela que serve de prova"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-3bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Protocolos", [{ p: "As regras combinadas para os aparelhos conversarem se chamam:", opcoes: ["Protocolo", "Cabo", "Senha"], certo: 0 }, { p: "Na conversa do HTTP, quem responde mandando a página é o:", opcoes: ["Servidor", "Fone", "Mouse"], certo: 0 }]), pega("m1"),
    Q("m2", "HTTPS", [{ p: "No http, os dados viajam como:", opcoes: ["Um cartão-postal, abertos", "Uma carta lacrada", "Um cofre"], certo: 0 }, { p: "Além do cadeado, antes de digitar a senha, confira:", opcoes: ["O nome do site, letra por letra", "A cor do site", "O tamanho da letra"], certo: 0 }]), pega("m2"),
    Q("m3", "Senhas", [{ p: "Qual é a senha mais forte?", opcoes: ["Lago#Sol55Peixe", "123456", "julia2014"], certo: 0 }, { p: "O código do celular, na verificação em duas etapas, é algo que você:", opcoes: ["Tem", "É", "Sabe"], certo: 0 }]), pega("m3"),
    Q("m4", "Golpes", [{ p: "O golpe da mensagem ou do site falso se chama:", opcoes: ["Phishing", "Protocolo", "Bluetooth"], certo: 0 }, { p: "Caiu num golpe? A primeira coisa é:", opcoes: ["Parar de responder", "Mandar mais dinheiro", "Repassar a mensagem"], certo: 0 }]), pega("m4"),
    Q("m5", "Empatia", [{ p: "Se colocar no lugar do outro é:", opcoes: ["Empatia", "Phishing", "Debate"], certo: 0 }, { p: "Antes de postar, pergunte se é verdade, se é gentil e se é:", opcoes: ["Necessário", "Engraçado", "Rápido"], certo: 0 }]), pega("m5"),
    Q("m6", "Cyberbullying", [{ p: "Cyberbullying é humilhar alguém pela internet:", opcoes: ["De propósito e várias vezes", "Uma vez, sem querer", "Só com elogios"], certo: 0 }, { p: "O espectador ajuda quando:", opcoes: ["Não repassa e apoia o colega", "Curte a montagem", "Ri junto"], certo: 0 }]), pega("m6"),
    Q("m7", "Wi-Fi público", [{ p: "Rede com nome parecido, criada por golpista, é a:", opcoes: ["Rede falsa", "Rede da escola", "Dados móveis"], certo: 0 }, { p: "Para não entrar sozinho de novo numa rede, o celular deve:", opcoes: ["Esquecer a rede", "Ficar ligado", "Trocar de capa"], certo: 0 }]), pega("m7"),
    Q("m8", "Debate", [{ p: "O motivo que explica a sua opinião é o:", opcoes: ["Argumento", "Ataque pessoal", "Print"], certo: 0 }, { p: "“Você não sabe nada” é um:", opcoes: ["Ataque pessoal", "Argumento", "Protocolo"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();
