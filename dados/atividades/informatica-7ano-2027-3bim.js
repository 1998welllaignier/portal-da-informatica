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
          { p: "O erro 404 quer dizer:", opcoes: ["Página não encontrada", "Internet muito rápida", "Bluetooth ligado"], certo: 0 }],
        explicacao: "Protocolo = regras; o mesmo protocolo deixa marcas diferentes conversarem; 404 = página não encontrada." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 Qual protocolo está trabalhando?",
        enunciado: "<p>Para cada situação, escolha o protocolo. Use a tabela <strong>Protocolo · Para que serve</strong>.</p>",
        dicas: ["Releia a tabela Protocolo · Para que serve."],
        colunaItem: "Situação", colunaResp: "Protocolo",
        categorias: [{ id: "H", rot: "🌐 HTTP" }, { id: "S", rot: "🔒 HTTPS" }, { id: "W", rot: "📶 Wi-Fi" }, { id: "B", rot: "🎧 Bluetooth" }],
        itens: [{ t: "O fone sem fio toca a música do celular", c: "B" }, { t: "O notebook entra na rede da escola sem cabo", c: "W" },
          { t: "Abrir a página do portal, com os dados cifrados (embaralhados)", c: "S" }, { t: "Abrir uma página antiga, sem o S no endereço", c: "H" }],
        explicacao: "Fone = Bluetooth; rede sem cabo = Wi-Fi; cifrado = HTTPS; sem o S = HTTP." }
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
          { de: "Mãe", t: "Chego às 18h na escola.", c: "N" }],
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
          { p: "Você ficou com raiva de uma mensagem. O melhor:", opcoes: ["Esperar a raiva passar antes de responder", "Responder na hora, em maiúsculas", "Mandar a mensagem para todo mundo"], certo: 0 },
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

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 3: 3º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-3bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why, de]) => ({ de: de || "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });
  const mem = (titulo, pares, expl) => ({ tipo: "memoria", titulo, enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>", pares: pares.map(([a, b]) => ({ a, b })), porRodada: 3, explicacao: expl });
  const sin = (titulo, enun, certos, errados, expl) => ({ tipo: "sinais", titulo, enunciado: `<p>${enun}</p>`, opcoes: [...certos.map(t => ({ t, certo: true })), ...errados.map(([t, why]) => ({ t, certo: false, why }))], explicacao: expl });

  /* ---------- M1 · protocolos ---------- */
  A.m1.gancho = { html: "<p>🎧 O fone sem fio do Rafa é de uma marca e funciona direitinho no celular da mãe dele, que é de outra marca.</p><p>🤔 Como aparelhos de marcas diferentes conseguem “conversar”? Quem combinou as regras?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 3º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["O <b>Wi-Fi</b> serve para…", ["Ligar os aparelhos à rede sem fio", "Imprimir", "Carregar a bateria"], "Wi-Fi liga os aparelhos à <b>rede sem fio</b>."],
    ["O programa que usamos para abrir sites é o…", ["Navegador", "Servidor", "Bluetooth"], "É o <b>navegador</b>."],
    ["O fone sem fio conversa com o celular pelo…", ["Bluetooth", "Cabo de rede", "HTTP"], "Pelo <b>Bluetooth</b>, para aparelhos pertinho um do outro."])];
  A.m1.aplicar = [
    msg("🛠️ Na vida real: qual protocolo está trabalhando?", "🌐 Protocolos", [["H", "🌐 HTTP"], ["S", "🔒 HTTPS"], ["I", "🏠 IP"], ["W", "📶 Wi-Fi"], ["B", "🎧 Bluetooth"]],
      "Em cada situação, qual protocolo está trabalhando?",
      [["O fone sem fio toca a música do celular", "B", "Aparelhos pertinho: Bluetooth."], ["O celular entra na rede sem fio da escola", "W", "Rede sem fio: Wi-Fi."],
        ["O navegador pede a página do site e recebe a página", "H", "Pedir e receber páginas: HTTP."], ["Você entra no portal e os dados viajam cifrados (embaralhados)", "S", "Dados cifrados: HTTPS."],
        ["Os dados chegam ao aparelho certo pelo endereço dele", "I", "Endereço de cada aparelho: IP."]],
      "Mandou bem! 🌐", "Cada protocolo é um conjunto de regras combinadas para os aparelhos conversarem."),
    VIDA(
      ["As regras combinadas para os aparelhos conversarem se chamam…", ["Protocolo", "Bateria", "Link"], "São o <b>protocolo</b>."],
      ["Você clicou num link e apareceu “erro 404”. O que quer dizer?", ["Página não encontrada", "Bluetooth desligado", "Internet rápida"], "O servidor respondeu: a página <b>não existe</b>."],
      ["Um celular de uma marca conversa com um computador de outra marca porque…", ["Os dois seguem o mesmo protocolo", "São da mesma cor", "Têm a mesma bateria"], "Seguem o <b>mesmo protocolo</b>."])
  ];
  mais("m1", "desafio",
    rota("🌐 A conversa do navegador com o site", "Clique nos passos da conversa (HTTP) <b>na ordem</b>.",
      [["⌨️", "Você digita o endereço ou clica num link"], ["📨", "O navegador pede a página ao servidor do site"], ["📦", "O servidor responde mandando a página"], ["🖥️", "O navegador mostra a página na tela"]],
      "Página na tela! 🖥️", "Pedido e resposta: é o HTTP trabalhando."));
  mais("m1", "turbo",
    mem("🧩 Jogo da memória dos protocolos", [["🌐 HTTP", "Pedir e receber páginas"], ["🔒 HTTPS", "HTTP com dados cifrados"], ["🏠 IP", "Endereço de cada aparelho"],
      ["📶 Wi-Fi", "Rede sem fio"], ["🎧 Bluetooth", "Aparelhos pertinho"], ["Erro 404", "Página não encontrada"]],
      "Cada protocolo tem a sua função."));

  /* ---------- M2 · HTTP, HTTPS e o cadeado ---------- */
  A.m2.gancho = { html: "<p>🔒 A Lara ia digitar a senha do jogo e reparou que o endereço começava com <b>http://</b>, sem o S e sem o cadeado.</p><p>🤔 Faz diferença? O que pode acontecer com a senha dela no caminho?</p>" };
  A.m2.aplicar = [
    msg("🛠️ Na vida real: digitar a senha aqui?", "🌐 Navegador", [["S", "✅ Pode digitar"], ["N", "🚫 Não digite"]],
      "O site do jogo é <b>www.jogoverde.com.br</b>. Confira o https, o cadeado e o nome, letra por letra.",
      [["🔒 https://www.jogoverde.com.br/entrar", "S", "Tem https, cadeado e o nome certo."], ["http://www.jogoverde.com.br/entrar", "N", "Sem https: a senha viaja aberta, como cartão-postal."],
        ["🔒 https://www.jogov3rde.com.br/entrar", "N", "Tem cadeado, mas o nome trocou uma letra: site falso."], ["Link de mensagem: “entre aqui para ganhar moedas”", "N", "Prefira digitar o endereço você mesmo."]],
      "Senha protegida! 🔒", "Confira o https e o cadeado, leia o nome do site letra por letra e prefira digitar o endereço você mesmo."),
    VIDA(
      ["O http:// sem o S é como…", ["Um cartão-postal: quem pegar no caminho lê", "Uma carta lacrada", "Um cofre"], "Os dados viajam abertos, como um <b>cartão-postal</b>."],
      ["Um site com cadeado 🔒 é sempre honesto?", ["Não: um site falso também pode ter cadeado", "Sim, sempre", "Só se for de jogo"], "O cadeado mostra que a conversa é cifrada, mas <b>não prova</b> que o site é honesto."],
      ["Recebeu um link com o nome de um site conhecido. O mais seguro é…", ["Digitar o endereço você mesmo", "Clicar rápido", "Mandar para os amigos"], "Prefira <b>digitar o endereço</b> você mesmo."])
  ];
  mais("m2", "desafio",
    sin("🔍 O que conferir antes de digitar a senha?", "Marque só o que você deve <b>conferir</b> antes de digitar uma senha.",
      ["Se tem https e o cadeado 🔒", "O nome do site, letra por letra", "Se fui eu que digitei o endereço"],
      [["Se o site é bonito", "Site falso também pode ser bonito."], ["Se o link veio de um número desconhecido, então pode", "Link de mensagem pode levar a site falso."]],
      "Https e cadeado, o nome certo e o endereço digitado por você."));
  mais("m2", "turbo",
    msg("🕵️ O nome certo do site", "🔗 Links", [["V", "✅ Nome certo"], ["F", "⚠️ Nome falso"]],
      "O site verdadeiro é <b>portal.professorwell.com.br</b>. Golpistas trocam uma letra. Confira cada um.",
      [["portal.professorwell.com.br", "V", "É o nome certo."], ["portal.professorwe11.com.br", "F", "Dois números 1 no lugar dos L."], ["portal.profesorwell.com.br", "F", "Falta um S."],
        ["portal.professorwell.com.br/missao", "V", "É o mesmo site, numa página dele."], ["portal.professorwell.com.br.xyz", "F", "O fim do nome mudou: é outro site."]],
      "Olho de lince! 🕵️", "Uma letra trocada leva a outro site. Leia o nome letra por letra."));

  /* ---------- M3 · senhas e duas etapas ---------- */
  A.m3.gancho = { html: "<p>📱 Chegou um SMS no celular da Bia com um código. Logo depois, um “amigo” mandou: “me passa esse código que chegou aí? É para um sorteio!”.</p><p>🤔 Por que alguém quer tanto esse código? O que ele protege?</p>" };
  A.m3.aplicar = [
    msg("🛠️ Na vida real: que tipo de prova é?", "🔐 Verificação em duas etapas", [["S", "🧠 Algo que você sabe"], ["T", "📱 Algo que você tem"], ["E", "👆 Algo que você é"]],
      "Na verificação em duas etapas, a conta pede uma segunda prova. Cada prova abaixo é de qual tipo?",
      [["A senha da conta", "S", "Você sabe: algo que você sabe."], ["O código que chegou por SMS", "T", "Chega no celular que você tem."], ["A sua digital", "E", "Faz parte de você."],
        ["O PIN do celular", "S", "Você sabe de cabeça."], ["O seu rosto para desbloquear", "E", "Algo que você é."]],
      "Mandou bem! 🔐", "Com duas provas de tipos diferentes, mesmo quem descobrir a senha não entra."),
    VIDA(
      ["Alguém pediu o código que chegou no seu celular. Isso é…", ["Golpe: o código é só seu", "Normal entre amigos", "Um sorteio de verdade"], "Regra de ouro: o código é só seu. Se alguém pedir, <b>é golpe</b>."],
      ["Uma senha forte tem…", ["12 caracteres ou mais, misturando maiúsculas, minúsculas, números e símbolos", "Só o seu nome", "Só números"], "Comprida e <b>misturada</b>, sem nada pessoal."],
      ["Usar a mesma senha em todos os sites é…", ["Fraco: o certo é uma diferente para cada conta importante", "O mais seguro", "Obrigatório"], "Use <b>uma senha diferente</b> para cada conta importante."])
  ];
  mais("m3", "desafio",
    sin("💪 Marque as senhas fortes (inventadas)", "São senhas <b>inventadas</b>, só para treinar. Marque só as fortes.",
      ["Pipa!Verde8Voa", "Lago#Sol55Peixe", "Bola?Azul29Gol"],
      [["123456", "Curta e só números."], ["bia2014", "Tem nome e data."], ["senha", "Curta e fácil demais."]],
      "Forte: comprida, misturada e sem nada pessoal."));
  mais("m3", "turbo",
    msg("🚨 Pedido de código: o que fazer?", "📱 Mensagens", [["F", "✅ Faça"], ["N", "🚫 Não faça"]],
      "Chegou um código por SMS e alguém está pedindo. Para cada atitude, faça ou não faça?",
      [["Mandar o código para o “amigo” do sorteio", "N", "O código é só seu."], ["Não passar o código para ninguém", "F", "É a regra de ouro."],
        ["Contar para um adulto", "F", "Pedir ajuda é sempre certo."], ["Passar o código para quem diz ser da empresa", "N", "Empresa séria não pede código."]],
      "Código protegido! 📱", "Se alguém pedir o código, é golpe."));

  /* ---------- M4 · golpes e phishing ---------- */
  A.m4.gancho = { html: "<p>🎮 No chat do jogo apareceu: “Ganhe <b>10.000 moedas grátis</b>! É só entrar com a sua senha neste site!”.</p><p>🤔 É um presente ou uma isca? Como saber?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: golpe ou não?", "💬 Mensagens", [["G", "⚠️ É golpe"], ["O", "✅ Parece confiável"]],
      "Procure os sinais: pressa, prêmio fácil, pedido de senha, código ou dinheiro, erros de português, endereço estranho.",
      [["Ganhe moedas grátis do jogo: entre com a sua senha neste site", "G", "Moedas grátis pedindo senha: isca.", "Chat do jogo"],
        ["Oi, troquei de número. Me manda um Pix?", "G", "Falso parente pedindo dinheiro.", "Número desconhecido"],
        ["Promossão! Celular por 1 real, só hoje!", "G", "Prêmio fácil, pressa e erro de português.", "Loja estranha"],
        ["A reunião de pais é sexta, às 19h", "O", "Não pede nada.", "Escola"]],
      "Nenhuma isca te pegou! 🎣", "Phishing usa iscas: mensagens e sites falsos. Os sinais denunciam o golpe."),
    VIDA(
      ["Caí num golpe. Qual é o primeiro passo?", ["Parar de responder", "Mandar mais dinheiro", "Apagar o celular"], "Pare de responder, troque a senha, ative as duas etapas, conte a um adulto e avise os contatos."],
      ["Por que o golpe se chama <b>phishing</b>?", ["Parece fishing, pescaria: usa uma isca", "É o nome de um jogo", "É o nome do golpista"], "Parecido com <b>fishing</b>, pescaria: a mensagem falsa é a isca."],
      ["“Promossão” escrito assim é…", ["Um sinal de golpe (erro de português)", "Normal em promoções", "Um código"], "Erros de português são <b>sinal de golpe</b>."])
  ];
  mais("m4", "desafio",
    rota("🆘 Caí num golpe: e agora?", "Coloque <b>na ordem</b> o que fazer.",
      [["🛑", "Parar de responder ao golpista"], ["🔑", "Trocar a senha"], ["📱", "Ativar as duas etapas"], ["🧑‍🏫", "Contar para um adulto de confiança"], ["📢", "Avisar os contatos para não caírem também"]],
      "Agiu certinho! 🆘", "Parar, trocar a senha, ativar as duas etapas, contar a um adulto e avisar os contatos."));
  mais("m4", "turbo",
    sin("🚩 Marque os sinais de golpe", "Marque só os <b>sinais de golpe</b>.",
      ["“Só hoje!”, “Em 1 hora!”", "Algo caro de graça", "“Mande o código que chegou no SMS”", "Endereço estranho, como banc0-oficial.xyz"],
      [["Uma mensagem da escola com o horário da reunião", "Não pede nada."], ["O site oficial com o nome certo e o cadeado", "É o site verdadeiro."]],
      "Pressa, prêmio fácil, pedido de senha, código ou dinheiro, erros de português e endereço estranho."));

  /* ---------- M5 · empatia na rede ---------- */
  A.m5.gancho = { html: "<p>💬 O Caio escreveu no grupo: “KKK VOCÊ É MUITO LENTO NO JOGO”. Ele estava brincando, mas o amigo ficou triste e saiu do grupo.</p><p>🤔 Por que a brincadeira machucou? O que a mensagem escrita não mostra?</p>" };
  A.m5.aplicar = [
    msg("🛠️ Na vida real: enviar ou reescrever?", "💬 Grupo da turma", [["E", "📤 Pode enviar"], ["R", "✏️ Reescreva antes"]],
      "Antes de enviar, use os combinados: é verdade? É gentil? É necessário?",
      [["VOCÊ NUNCA ACERTA NADA!!!", "R", "Tudo em maiúsculas parece grito, e machuca."], ["Valeu pela ajuda no trabalho! 😊", "E", "Gentil, e o emoji mostra o tom."],
        ["Não entendi o dever. Alguém me explica? 🙂", "E", "Pede ajuda com gentileza."], ["Que roupa feia a sua na foto kkk", "R", "Não é gentil nem necessário."], ["Desculpa, não quis te chatear. Vou apagar a mensagem.", "E", "Pedir desculpas e apagar é o combinado."]],
      "Grupo em paz! 🤝", "Na mensagem escrita, não dá para ver o rosto nem ouvir o tom: os combinados evitam mal-entendidos."),
    VIDA(
      ["Escrever TUDO EM MAIÚSCULAS na internet parece…", ["Que você está gritando", "Que você está feliz", "Que você está com pressa"], "Parece <b>grito</b>."],
      ["Quais são as 3 perguntas antes de postar?", ["É verdade? É gentil? É necessário?", "É engraçado? É rápido? É grande?", "Tem foto? Tem emoji? Tem link?"], "<b>Verdade, gentileza e necessidade.</b>"],
      ["Machucou alguém sem querer numa mensagem. O que fazer?", ["Pedir desculpas e apagar a mensagem", "Fingir que nada aconteceu", "Mandar outra pior"], "<b>Pedir desculpas e apagar</b>."])
  ];
  mais("m5", "desafio",
    mem("🧩 Jogo da memória dos combinados", [["🔠 TUDO EM MAIÚSCULAS", "Parece grito"], ["🔁 Ler antes de enviar", "Evita arrependimento"], ["🙂 Emoji", "Mostra o tom"],
      ["⏸️ Esperar a raiva passar", "Evita escrever o que machuca"], ["🤝 Ajudar quem não entendeu", "Explicar com gentileza"], ["Empatia", "Se colocar no lugar do outro"]],
      "Na internet, a gente não vê o rosto do outro: os combinados ajudam."));
  mais("m5", "turbo",
    msg("💡 Empatia em ação", "🎮 Chat do jogo", [["E", "💚 Tem empatia"], ["S", "💔 Sem empatia"]],
      "No chat do jogo, cada resposta tem empatia ou não?",
      [["Um colega errou a jogada: “Calma, na próxima a gente consegue!”", "E", "Se colocou no lugar dele."], ["Um colega errou a jogada: “Sai do time, seu inútil”", "S", "Ofende."],
        ["Alguém novo no jogo pediu ajuda: “Vem, eu te explico!”", "E", "Ajuda com gentileza."], ["Alguém pediu ajuda: “Se vira, ninguém liga”", "S", "Não ajuda e magoa."]],
      "Jogador gente boa! 💚", "Empatia é se colocar no lugar do outro, também no jogo."));

  /* ---------- M6 · cyberbullying ---------- */
  A.m6.gancho = { html: "<p>🖼️ No grupo da turma, alguém postou uma montagem com a foto da Duda para zombar. Várias pessoas riram e repassaram. A Duda não quis mais ir à escola.</p><p>🤔 Isso é “só brincadeira”? O que cada pessoa do grupo poderia ter feito?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: você é o espectador", "👀 Você viu a montagem", [["A", "✅ Ajuda"], ["P", "❌ Piora"]],
      "Você viu a montagem da Duda no grupo. Cada atitude ajuda ou piora?",
      [["Curtir e repassar a montagem", "P", "Espalha a humilhação."], ["Não curtir nem repassar", "A", "Não alimenta o cyberbullying."],
        ["Mandar uma mensagem de apoio para a Duda", "A", "Apoiar o colega."], ["Avisar um adulto de confiança", "A", "É o que o espectador pode fazer."], ["Rir no grupo para não ficar de fora", "P", "Também machuca."]],
      "Você fez a diferença! 💪", "O espectador não curte nem repassa, apoia o colega e avisa um adulto."),
    VIDA(
      ["O que o <b>alvo</b> deve fazer?", ["Não responder com ofensa, guardar prints, bloquear, denunciar e contar a um adulto", "Responder com mais ofensas", "Apagar a própria conta e não contar a ninguém"], "Guardar <b>prints</b>, bloquear, denunciar e contar a um adulto de confiança."],
      ["Desde 2024, no Brasil, o cyberbullying é…", ["Crime (Lei nº 14.811/2024)", "Permitido", "Só falta de educação"], "É <b>crime</b> desde 2024 (Lei nº 14.811/2024)."],
      ["Uma discussão em que os dois discordam com respeito é cyberbullying?", ["Não", "Sim", "Depende do horário"], "Discordar com respeito <b>não</b> é cyberbullying."])
  ];
  mais("m6", "desafio",
    msg("🔍 É cyberbullying ou não?", "💬 Grupo", [["C", "⚠️ É cyberbullying"], ["N", "✅ Não é"]],
      "Cyberbullying é humilhar, ameaçar ou perseguir alguém pela internet, de propósito e várias vezes.",
      [["Um apelido que humilha, repetido todo dia no grupo", "C", "Ofender de propósito, várias vezes."], ["Dois colegas discordam sobre o passeio, com respeito", "N", "Discordar com respeito não é."],
        ["Criar um perfil falso para zombar de alguém", "C", "Fingir ser a pessoa para humilhar."], ["Tirar alguém do grupo de propósito, toda vez", "C", "Excluir para machucar."], ["Um colega pede desculpas por uma piada", "N", "Isso é reparar."]],
      "Você reconheceu! 🔍", "Humilhar, ameaçar ou perseguir, de propósito e várias vezes: é cyberbullying."));
  mais("m6", "turbo",
    mem("🧩 Jogo da memória: quem pode fazer o quê", [["🎯 Alvo", "Guardar prints, bloquear e contar a um adulto"], ["👀 Espectador", "Não repassar e apoiar o colega"], ["😈 Autor", "Parar, apagar e pedir desculpas"],
      ["Print", "A foto da tela, que serve de prova"], ["Denunciar", "Avisar a rede social sobre o abuso"], ["Lei nº 14.811/2024", "Cyberbullying é crime"]],
      "Cada um na história pode fazer algo para o cyberbullying parar."));

  /* ---------- M7 · Wi-Fi público ---------- */
  A.m7.gancho = { html: "<p>📶 Na rodoviária, o celular da Mia mostrou duas redes abertas: <b>Rodoviaria_Oficial</b> e <b>Wi-Fi Gratis Rodoviaria</b>.</p><p>🤔 Qual é a verdadeira? E é seguro entrar no aplicativo do banco ali?</p>" };
  A.m7.aplicar = [
    msg("🛠️ Na vida real: no Wi-Fi da rodoviária", "📶 Wi-Fi público", [["S", "✅ Pode fazer"], ["N", "🚫 Não faça"]],
      "A Mia está no Wi-Fi aberto da rodoviária. Para cada atitude, pode fazer ou não?",
      [["Ver um vídeo de receita", "S", "Nada importante em risco."], ["Entrar no banco e digitar a senha", "N", "Não digite senhas importantes no Wi-Fi público."],
        ["Perguntar no guichê o nome certo da rede", "S", "Evita a rede falsa."], ["Usar os dados móveis para o que é importante", "S", "A conexão do celular não é compartilhada com estranhos."], ["Deixar o celular entrar sozinho em qualquer rede", "N", "Pode entrar numa rede falsa com o mesmo nome."]],
      "Viagem segura! 📶", "No Wi-Fi público: nada de senha importante, nome certo da rede, dados móveis para o importante e esquecer a rede depois."),
    VIDA(
      ["Um golpista criou a rede “Wi-Fi Gratis Praca”. Isso é…", ["Uma rede falsa para espiar quem entrar", "A rede oficial da praça", "Um protocolo"], "É uma <b>rede falsa</b>, com nome parecido."],
      ["Depois de usar o Wi-Fi da lanchonete, o melhor é…", ["Esquecer a rede", "Deixar ela salva para sempre", "Contar a senha para todos"], "<b>Esquecer a rede</b>: o celular não entra sozinho de novo."],
      ["Numa rede aberta, alguém na mesma rede pode tentar ver…", ["O que não está cifrado", "Só a sua foto de perfil", "Nada"], "O que <b>não está cifrado</b>. Por isso, confira o https e o cadeado."])
  ];
  mais("m7", "desafio",
    sin("⚠️ Os riscos do Wi-Fi público", "Marque só os <b>riscos</b> do Wi-Fi público.",
      ["Alguém na mesma rede tentar ver o que não está cifrado", "Uma rede falsa com nome parecido", "O celular entrar sozinho numa rede falsa com o mesmo nome"],
      [["A tela do celular ficar mais clara", "Não tem a ver com a rede."], ["A bateria virar Wi-Fi", "Não existe."]],
      "Bisbilhoteiro na rede, rede falsa e conexão automática."));
  mais("m7", "turbo",
    rota("📶 Usar o Wi-Fi da lanchonete com segurança", "Coloque os passos <b>na ordem</b>.",
      [["❓", "Perguntar ao atendente o nome certo da rede"], ["📶", "Entrar na rede certa"], ["🔒", "Usar só sites com https e cadeado, sem senhas importantes"], ["🗑️", "Esquecer a rede ao sair"]],
      "Conexão segura! 📶", "Nome certo, https, nada de senha importante e esquecer a rede depois."));

  /* ---------- M8 · debate respeitoso ---------- */
  A.m8.gancho = { html: "<p>📣 Nos comentários de um vídeo sobre o jogo novo, a conversa virou briga: “você é burro!”, “cala a boca!”. Ninguém mudou de ideia, e todo mundo saiu chateado.</p><p>🤔 Dá para discordar sem brigar? O que faz uma discussão virar debate?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: argumento ou ataque pessoal?", "💬 Comentários", [["A", "✅ Argumento (ataca a ideia)"], ["P", "❌ Ataque pessoal"]],
      "Cada comentário critica a ideia ou ataca a pessoa?",
      [["Eu discordo, porque o jogo fica lento com tantos jogadores.", "A", "Dá um motivo sobre a ideia."], ["Você não sabe nada, seu burro.", "P", "Ataca a pessoa."],
        ["Entendi o seu ponto, mas penso diferente.", "A", "Respeita e discorda."], ["Ninguém liga para o que você fala.", "P", "Ataca a pessoa."], ["Li no jornal da cidade que a praça vai reabrir.", "A", "Dá a fonte da informação."]],
      "Debate de respeito! 🤝", "Critique a ideia, não a pessoa. Dê um motivo e, se puder, a fonte."),
    VIDA(
      ["No debate, enquanto o outro fala, você…", ["Ouve até o fim", "Interrompe", "Grita mais alto"], "<b>Ouvir até o fim</b> e esperar a vez."],
      ["No fim do debate, cada um continuou com a sua opinião. Isso é…", ["Normal: aceitar discordar", "Proibido", "Briga"], "<b>Aceitar discordar</b>, e tudo bem."],
      ["Para dar força ao seu argumento, você pode…", ["Dizer o motivo e de onde veio a informação (a fonte)", "Xingar o outro", "Escrever em maiúsculas"], "Dar o <b>motivo</b> e a <b>fonte</b>."])
  ];
  mais("m8", "desafio",
    sin("🤝 As atitudes do bom debate", "Marque só as atitudes de um <b>debate respeitoso</b>.",
      ["Esperar o outro terminar antes de responder", "Dizer por que pensa assim", "Aceitar que o outro continue com a opinião dele"],
      [["Chamar o outro de burro", "Ataque pessoal."], ["Falar todo mundo ao mesmo tempo", "Um fala de cada vez."]],
      "Ouvir, esperar a vez, dar um motivo e aceitar discordar."));
  mais("m8", "turbo",
    mem("🧩 Jogo da memória do debate", [["Argumento", "Ataca a ideia, com um motivo"], ["Ataque pessoal", "Ataca a pessoa"], ["Fonte", "De onde veio a informação"],
      ["👂 Ouvir até o fim", "Esperar o outro terminar"], ["✋ Esperar a vez", "Um fala de cada vez"], ["🤝 Aceitar discordar", "Cada um pode manter a opinião"]],
      "Critique a ideia, não a pessoa."));
})();
