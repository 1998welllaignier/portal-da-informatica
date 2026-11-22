/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 2º bimestre de 2027 (Internet por dentro)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF08CO04, EF08CO05, EF08CO06.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-8ano-2027-2bim", {

  /* ============ MISSÃO 1 — Como a internet funciona ============ */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o caminho de um pacote",
        robo: BIT("📮 Outro caminho: uma carta pelo correio", [["Primeiro, quem escreve põe a carta no envelope com o endereço.", "1. Carta no envelope"], ["Depois, a agência recebe e escolhe o caminho.", "2. Agência dos Correios"], ["Por último, o carteiro entrega no endereço.", "3. Carteiro entrega ✔", true]]),
        enunciado: "<p>Você mandou uma foto pelo celular. Clique nas etapas <strong>na ordem</strong> em que os pacotes viajam. A resposta está na tabela <strong>O caminho de um pacote</strong>.</p>",
        etapas: [
          { ic: "📱", t: "O celular corta a foto em pacotes", dica: "Tudo começa no aparelho que envia." },
          { ic: "📶", t: "O roteador da casa (Wi-Fi) recebe os pacotes" },
          { ic: "🏢", t: "O provedor leva os pacotes para a internet" },
          { ic: "🔀", t: "Vários roteadores escolhem o caminho" },
          { ic: "🧩", t: "O celular do amigo junta os pacotes na ordem", dica: "No fim, os pacotes são juntados." }],
        okMsg: "Os pacotes chegaram e a foto foi montada! 📦",
        explicacao: "Celular → roteador da casa → provedor → roteadores pelo caminho → aparelho de destino, que junta os pacotes." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o que ele é",
        robo: BIT("🔗 Outro exemplo: a escola", [["“Diretora” → quem cuida da escola.", "diretora → cuida da escola"], ["Eu procuro no texto o que cada palavra quer dizer e ligo.", "termo → significado ✔", true]]),
        pares: [{ a: "Pacote", b: "Pedacinho dos dados que viaja pela rede" }, { a: "Endereço IP", b: "Número que identifica cada aparelho" },
          { a: "Roteador", b: "Aparelho que escolhe por onde mandar os pacotes" }, { a: "Provedor", b: "Empresa que liga a sua casa à internet" }],
        explicacao: "Pacote = pedaço dos dados; IP = número do aparelho; roteador = escolhe o caminho; provedor = liga você à internet." },
      { tipo: "tabela", titulo: "O que vai dentro de cada pacote?", dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."],
        enunciado: "<p>Um pacote leva três coisas. Escolha, em cada linha, a que corresponde ao exemplo.</p>",
        colunas: ["Exemplo", "É…"],
        linhas: [["“Caixa 3 de 10”", { op: ["O número do pacote", "O endereço IP", "Um pedaço dos dados"], r: "O número do pacote" }],
          ["203.0.113.25", { op: ["O número do pacote", "O endereço IP", "Um pedaço dos dados"], r: "O endereço IP" }],
          ["Um pedacinho da foto", { op: ["O número do pacote", "O endereço IP", "Um pedaço dos dados"], r: "Um pedaço dos dados" }]],
        explicacao: "Cada pacote leva um pedaço dos dados, o endereço IP de destino e o seu número (para montar na ordem)." },
      { tipo: "escolha", titulo: "A internet por dentro",
        perguntas: [
          { p: "A internet é:", opcoes: ["Uma rede de redes", "Um computador só, num lugar só", "Um roteador só"], certo: 0, why: "Liga as redes de casas, escolas e empresas do mundo todo." },
          { p: "Se um pacote se perde no caminho:", opcoes: ["Só ele é enviado de novo", "A foto inteira some para sempre", "A internet desliga"], certo: 0 },
          { p: "As regras que os aparelhos seguem para conversar são os:", opcoes: ["Protocolos", "Pacotes", "Provedores"], certo: 0, why: "O principal é o TCP/IP." }],
        explicacao: "Rede de redes; só o pacote perdido é reenviado; as regras são os protocolos (TCP/IP)." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "🟡 Os pacotes chegaram fora de ordem: monte a mensagem",
        enunciado: "<p>Os pacotes foram por caminhos diferentes e chegaram misturados. Use o <strong>número de cada pacote</strong> para pôr a mensagem em ordem.</p>",
        itens: ["Pacote 1: “Oi, turma!”", "Pacote 2: “A aula de hoje”", "Pacote 3: “é na sala”", "Pacote 4: “de Informática.”"],
        explicacao: "Pelo número: 1, 2, 3, 4 → “Oi, turma! A aula de hoje é na sala de Informática.”" }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da internet", enunciado: "<p>Leia cada pista e ache a palavra no quadro. As palavras estão no 📖 O que significa?.</p>", dicas: ["As palavras podem estar na horizontal ou na vertical.", "Releia o 🧠 Resumo da Aula: todas as palavras estão lá."],
        palavras: ["PACOTE", "ROTEADOR", "PROVEDOR", "REDE", "PROTOCOLO"],
        pistas: ["Pedacinho dos dados que viaja", "Aparelho que escolhe o caminho", "Empresa que liga você à internet", "Aparelhos ligados para trocar dados", "Conjunto de regras da conversa"], tam: 11,
        explicacao: "Pacote, roteador, provedor, rede e protocolo: as palavras da Missão 1." }
    ],
    vf: [
      { v: true, why: "Liga as redes do mundo todo." },
      { v: false, corrigir: { trecho: "viaja inteira, sem ser dividida", opcoes: ["viaja inteira, sem ser dividida", "viaja cortada em pacotes"], certo: "viaja cortada em pacotes" }, why: "A foto é cortada em pacotes." },
      { v: true, why: "O IP é o endereço do aparelho." },
      { v: false, corrigir: { trecho: "sempre seguem o mesmo caminho", opcoes: ["sempre seguem o mesmo caminho", "podem seguir caminhos diferentes"], certo: "podem seguir caminhos diferentes" }, why: "Cada pacote pode ir por um caminho." },
      { v: true, why: "É o trabalho do roteador." }
    ]
  },

  /* ============ MISSÃO 2 — DNS ============ */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o que acontece quando você digita o nome de um site",
        robo: BIT("📞 Outro exemplo: ligar para a mãe", [["Toco no nome “Mãe” na agenda.", "1. Nome na agenda"], ["A agenda acha o número.", "2. A agenda acha o número"], ["O celular liga para o número.", "3. Liga ✔", true]]),
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>. A resposta está na tabela <strong>O que acontece quando você digita o nome de um site</strong>.</p>",
        etapas: [
          { ic: "⌨️", t: "Você digita o nome do site no navegador" },
          { ic: "❓", t: "O navegador pergunta ao servidor DNS: qual é o IP?" },
          { ic: "📒", t: "O servidor DNS responde com o endereço IP" },
          { ic: "📨", t: "O navegador pede a página ao computador daquele IP" },
          { ic: "🖥️", t: "A página aparece na tela" }],
        okMsg: "O DNS traduziu o nome e a página chegou! 📒",
        explicacao: "Nome → pergunta ao DNS → DNS responde o IP → pedido da página → página na tela." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Agenda do celular × internet",
        robo: BIT("📒 Outro par: o crachá", [["No crachá, o <b>nome</b> é fácil de ler; o <b>número de matrícula</b> é o que o sistema usa.", "nome ↔ número"], ["Na internet é igual: o nome do site e o número (IP).", "domínio ↔ IP ✔", true]]),
        pares: [{ a: "Nome do contato", b: "Domínio (nome do site)" }, { a: "Número do telefone", b: "Endereço IP" }, { a: "A agenda que acha o número", b: "O DNS" }],
        explicacao: "Contato = domínio; telefone = IP; agenda = DNS." },
      { tipo: "classificar", modo: "tabela", titulo: "As partes de portal.professorwell.com.br",
        colunaItem: "Parte", colunaResp: "O que indica",
        categorias: [{ id: "P", rot: "🌎 O país" }, { id: "T", rot: "🏷️ O tipo" }, { id: "N", rot: "✍️ O nome escolhido" }, { id: "S", rot: "🧩 Uma parte do site" }],
        itens: [{ t: ".br", c: "P", why: "Brasil." }, { t: ".com", c: "T", why: "Comercial." }, { t: "professorwell", c: "N" }, { t: "portal", c: "S" }],
        explicacao: "Lendo da direita: .br = país; .com = tipo; professorwell = nome escolhido; portal = parte do site." },
      { tipo: "escolha", titulo: "Para que serve o DNS?",
        perguntas: [
          { p: "O DNS traduz:", opcoes: ["O nome do site no endereço IP", "O português para o inglês", "A foto em pacotes"], certo: 0 },
          { p: "O Wi-Fi está ligado, mas nenhum site abre pelo nome. Pode ser:", opcoes: ["O DNS parou", "O teclado quebrou", "A tela está suja"], certo: 0, why: "Sem DNS, o navegador não acha o IP pelo nome." },
          { p: "Os domínios que terminam em .br são registrados no:", opcoes: ["Registro.br", "Aplicativo de mensagens", "Roteador de casa"], certo: 0 }],
        explicacao: "DNS = nome → IP; sem DNS, a internet parece fora do ar; .br é registrado no Registro.br." }
    ],
    desafio: [
      { tipo: "sinais", titulo: "🟡 O site verdadeiro é portal.professorwell.com.br. Marque os nomes FALSOS",
        enunciado: "<p>Golpistas criam nomes <strong>parecidos</strong>, trocando ou acrescentando letras. Compare letra por letra.</p>",
        opcoes: [
          { t: "portal.pr0fessorwell.com.br (zero no lugar do O)", certo: true },
          { t: "portal.professorwel.com.br (falta um L)", certo: true },
          { t: "portal.professorwell.com.br-premio.net", certo: true },
          { t: "portal.professorwell.com.br", certo: false, why: "É exatamente o nome verdadeiro." }],
        explicacao: "Zero no lugar do O, letra faltando e um final diferente são sinais de nome falso." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória do DNS", enunciado: "<p>Vire duas cartas de cada vez e ache os pares: cada termo com o seu significado.</p>", dicas: ["Os significados estão no 📖 O que significa? da missão."],
        pares: [{ a: "DNS", b: "Traduz nome em IP" }, { a: "Domínio", b: "Nome do site" }, { a: "Servidor", b: "Computador sempre ligado" }, { a: "Navegador", b: "Programa que abre os sites" }],
        explicacao: "DNS traduz; domínio é o nome; servidor fica sempre ligado; navegador abre os sites." }
    ],
    vf: [
      { v: true, why: "É o trabalho do DNS." },
      { v: false, corrigir: { trecho: "é um nome fácil de decorar", opcoes: ["é um nome fácil de decorar", "é um número difícil de decorar"], certo: "é um número difícil de decorar" }, why: "O IP é um número; por isso usamos nomes." },
      { v: true, why: ".br = Brasil." },
      { v: true, why: "Sem DNS, não há tradução." },
      { v: false, corrigir: { trecho: "antes de saber", opcoes: ["antes de saber", "depois de saber"], certo: "depois de saber" }, why: "Primeiro o DNS responde o IP." }
    ]
  },

  /* ============ MISSÃO 3 — Cabos submarinos e data centers ============ */
  m3: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o caminho de um vídeo de outro país",
        robo: BIT("🍍 Outro caminho: uma fruta que vem de longe", [["A fruta sai da fazenda…", "1. Fazenda"], ["…atravessa o mar de navio…", "2. Navio"], ["…chega ao porto e vai de caminhão até o mercado.", "3. Porto → mercado ✔", true]]),
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>, do data center até a sua tela.</p>",
        etapas: [
          { ic: "🏭", t: "Data center em outro país" },
          { ic: "🌊", t: "Cabo submarino no fundo do mar" },
          { ic: "🏖️", t: "Estação na praia, em Fortaleza (CE)" },
          { ic: "🏢", t: "Cabos pelo Brasil até o provedor" },
          { ic: "📶", t: "Roteador da sua casa" },
          { ic: "📱", t: "A sua tela" }],
        okMsg: "O vídeo atravessou o oceano pela luz! 🌊",
        explicacao: "Data center → cabo submarino → Fortaleza → cabos até o provedor → roteador → tela." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "É do cabo submarino ou do data center?",
        robo: BIT("🔎 As perguntas", [["Fala de <b>levar</b> os dados de um lugar a outro? É do <b>cabo</b>.", "levar → cabo"], ["Fala de <b>guardar</b> os dados num prédio? É do <b>data center</b>.", "guardar → data center", true]]),
        colunaItem: "Característica", colunaResp: "É do…",
        categorias: [{ id: "C", rot: "🌊 Cabo submarino" }, { id: "D", rot: "🏭 Data center" }],
        itens: [{ t: "Fica deitado no fundo do mar", c: "C" }, { t: "Leva os dados como pulsos de luz", c: "C" },
          { t: "Prédio cheio de servidores", c: "D" }, { t: "Precisa de refrigeração e energia sem parar", c: "D" }, { t: "Liga continentes", c: "C" }],
        explicacao: "Cabo: fundo do mar, luz, liga continentes. Data center: prédio com servidores, refrigeração e energia." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Fibra óptica", b: "Fio de vidro que leva dados como luz" }, { a: "Servidor", b: "Computador sempre ligado" }, { a: "Refrigeração", b: "Esfria os servidores" }, { a: "Satélite", b: "Leva internet onde não chega cabo" }],
        explicacao: "Fibra = luz; servidor = sempre ligado; refrigeração = esfria; satélite = onde não há cabo." },
      { tipo: "escolha", titulo: "A internet atravessa o mar",
        perguntas: [
          { p: "A maior parte dos dados entre continentes viaja por:", opcoes: ["Cabos submarinos", "Satélites", "Ondas de rádio de casa"], certo: 0 },
          { p: "O principal ponto de chegada de cabos submarinos no Brasil é:", opcoes: ["Fortaleza (CE)", "Brasília (DF)", "Manaus (AM)"], certo: 0, why: "Na Praia do Futuro." },
          { p: "Os dados ficam guardados em mais de um lugar no data center para:", opcoes: ["Não sumirem se algo quebrar", "Ficarem mais pesados", "Ninguém conseguir ver"], certo: 0 }],
        explicacao: "Cabos submarinos; Fortaleza; cópias para não perder nada." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 Cabo ou satélite? O melhor para cada lugar",
        colunaItem: "Lugar", colunaResp: "Melhor opção",
        categorias: [{ id: "C", rot: "🔌 Cabo (fibra)" }, { id: "S", rot: "🛰️ Satélite" }],
        itens: [{ t: "Um navio no meio do oceano", c: "S", why: "Não dá para ligar um cabo num navio andando." },
          { t: "Ligar o Brasil à Europa com muitos dados", c: "C", why: "Cabo submarino leva mais dados." },
          { t: "Uma fazenda longe da cidade, sem cabo", c: "S", why: "O satélite chega onde não há cabo." },
          { t: "A escola no centro da cidade, com fibra na rua", c: "C", why: "Fibra é mais rápida." }],
        explicacao: "Onde há cabo, a fibra é melhor; onde não chega cabo (navio, área rural), o satélite resolve." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a internet que atravessa o mar", enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula da missão."],
        texto: "A maior parte dos dados entre continentes viaja por **cabos** submarinos de fibra **óptica**, como pulsos de **luz**. No Brasil, o principal ponto de chegada é **Fortaleza**. Os vídeos ficam em **data** centers, prédios com muitos **servidores**.",
        explicacao: "Cabos de fibra óptica, luz, Fortaleza, data centers e servidores." }
    ],
    vf: [
      { v: true, why: "Por cabos, não por satélite." },
      { v: true, why: "Pulsos de luz." },
      { v: false, corrigir: { trecho: "podem desligar todas as noites", opcoes: ["podem desligar todas as noites", "ficam ligados o tempo todo"], certo: "ficam ligados o tempo todo" }, why: "Servidores nunca desligam." },
      { v: true, why: "Na Praia do Futuro." },
      { v: false, corrigir: { trecho: "mais rápido", opcoes: ["mais rápido", "mais lento"], certo: "mais lento" }, why: "O satélite leva menos dados e demora mais." }
    ]
  },

  /* ============ MISSÃO 4 — Nuvem ============ */
  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Mão na massa: só no aparelho ou na nuvem?",
        robo: BIT("🔎 A pergunta", [["Se o celular sumir, o arquivo continua existindo? Se <b>sim</b>, está na <b>nuvem</b>.", "continua → nuvem"], ["Se some junto com o celular, estava <b>só no aparelho</b>.", "some junto → só no aparelho", true]]),
        categorias: [{ id: "A", rot: "📱 Só no aparelho" }, { id: "N", rot: "☁️ Na nuvem" }],
        itens: [{ t: "Perdeu o celular e perdeu as fotos", c: "A" }, { t: "Entra com a conta em outro aparelho e o arquivo está lá", c: "N" },
          { t: "O espaço é só o do aparelho", c: "A" }, { t: "Fica num servidor de um data center", c: "N" }, { t: "Mudou no computador e apareceu no celular", c: "N", why: "Isso é sincronizar." }],
        explicacao: "Na nuvem, o arquivo fica num servidor e aparece em todos os aparelhos da conta; só no aparelho, ele some se o aparelho sumir." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo da nuvem",
        robo: BIT("🔗 Outro exemplo", [["“Cofre” → lugar seguro para guardar coisas.", "cofre → guardar"], ["Eu procuro no 📖 O que significa? e ligo cada termo.", "termo → significado ✔", true]]),
        pares: [{ a: "Nuvem", b: "Servidores de empresas onde guardamos arquivos" }, { a: "Sincronizar", b: "Deixar o arquivo igual em todos os aparelhos" },
          { a: "Backup", b: "Cópia de segurança" }, { a: "Verificação em duas etapas", b: "Senha + código no celular" }],
        explicacao: "Nuvem = servidores; sincronizar = igual em todos; backup = cópia; duas etapas = senha + código." },
      { tipo: "sinais", titulo: "Quais atitudes protegem os seus arquivos na nuvem?", enunciado: "<p>Marque <strong>só</strong> as opções certas.</p>",
        opcoes: [{ t: "Usar senha forte", certo: true }, { t: "Ativar a verificação em duas etapas", certo: true }, { t: "Sair da conta no computador da escola", certo: true },
          { t: "Mandar o link aberto do arquivo para qualquer grupo", certo: false, why: "Qualquer pessoa que receber o link pode ver." },
          { t: "Deixar a conta aberta para o próximo aluno", certo: false, why: "O próximo aluno veria todos os seus arquivos." }],
        explicacao: "Senha forte, duas etapas e sair da conta protegem; link aberto e conta aberta expõem os arquivos." },
      { tipo: "escolha", titulo: "A nuvem por dentro",
        perguntas: [
          { p: "A nuvem fica:", opcoes: ["Em servidores de data centers", "No céu, nas nuvens", "Dentro do seu mouse"], certo: 0 },
          { p: "Para abrir um arquivo da nuvem em outro aparelho, é preciso:", opcoes: ["Internet", "Um cabo de força", "Um mouse"], certo: 0 },
          { p: "São exemplos de nuvem:", opcoes: ["Google Drive, OneDrive e iCloud", "Teclado, mouse e monitor", "Roteador e cabo"], certo: 0 }],
        explicacao: "Servidores em data centers; precisa de internet; Google Drive, OneDrive e iCloud." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Com quem compartilhar?",
        perguntas: [
          { p: "O trabalho em grupo de Ciências deve ser compartilhado com:", opcoes: ["Só os colegas do grupo", "O grupo da escola inteira", "Qualquer pessoa com o link"], certo: 0, why: "Só quem precisa editar." },
          { p: "As fotos da família no celular devem ficar:", opcoes: ["Sem compartilhar, ou só com a família", "Com link aberto num grupo grande", "Num computador da escola"], certo: 0 },
          { p: "Mandou o link errado para um grupo grande. O melhor é:", opcoes: ["Tirar o compartilhamento do arquivo", "Esperar ninguém abrir", "Apagar o grupo"], certo: 0, why: "Desligando o compartilhamento, o link deixa de funcionar." }],
        explicacao: "Compartilhe só com quem precisa; fotos pessoais, sem compartilhar; errou o link? Tire o compartilhamento." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a nuvem", enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula da missão."],
        texto: "Salvar na **nuvem** é guardar o arquivo num **servidor** de uma empresa. Com a mesma conta, o arquivo aparece em todos os aparelhos: isso é **sincronizar**. A cópia de segurança se chama **backup**. Para proteger a conta, use senha forte e a verificação em duas **etapas**.",
        explicacao: "Nuvem, servidor, sincronizar, backup e verificação em duas etapas." }
    ],
    vf: [
      { v: true, why: "A nuvem são servidores." },
      { v: false, corrigir: { trecho: "some quando o celular quebra", opcoes: ["some quando o celular quebra", "continua guardado no servidor"], certo: "continua guardado no servidor" }, why: "Basta entrar com a conta em outro aparelho." },
      { v: true, why: "É a definição de sincronizar." },
      { v: false, corrigir: { trecho: "é seguro deixar", opcoes: ["é seguro deixar", "não é seguro deixar"], certo: "não é seguro deixar" }, why: "Sempre saia da conta." },
      { v: true, why: "Precisa do código do celular." }
    ]
  },

  /* ============ MISSÃO 5 — Paralelismo e concorrência ============ */
  m5: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: quanto tempo com mais núcleos?",
        robo: BIT("🧹 Outro exemplo: 6 tarefas de 5 minutos", [["Com <b>1 pessoa</b>: 6 × 5 = 30 minutos.", "1 pessoa → 30 min"], ["Com <b>3 pessoas</b>, cada uma faz 2 tarefas: 2 × 5 = 10 minutos.", "3 pessoas → 10 min", true]]),
        enunciado: "<p>Cada tarefa leva <strong>10 minutos</strong>. Os núcleos trabalham ao mesmo tempo, cada um com uma parte igual.</p>",
        colunas: ["Situação", "Tempo (minutos)"],
        linhas: [["4 tarefas com 1 núcleo", { r: "40", tipo: "num", dica: "Um núcleo faz uma de cada vez: 4 × 10." }],
          ["4 tarefas com 4 núcleos", { r: "10", tipo: "num", dica: "Cada núcleo faz 1 tarefa ao mesmo tempo." }],
          ["8 tarefas com 4 núcleos", { r: "20", tipo: "num", dica: "Cada núcleo faz 2 tarefas: 2 × 10." }],
          ["8 tarefas com 8 núcleos", { r: "10", tipo: "num" }]],
        explicacao: "Divida as tarefas pelos núcleos e multiplique por 10: 40, 10, 20 e 10 minutos." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Paralelismo ou concorrência?",
        robo: BIT("🔎 A pergunta", [["As tarefas estão <b>dividindo o trabalho</b>? É <b>paralelismo</b>.", "dividir → paralelismo"], ["As tarefas estão <b>disputando a mesma coisa</b>? É <b>concorrência</b>.", "disputar → concorrência", true]]),
        colunaItem: "Situação", colunaResp: "É…",
        categorias: [{ id: "P", rot: "⚙️ Paralelismo" }, { id: "C", rot: "🚦 Concorrência" }],
        itens: [{ t: "4 colegas varrem partes diferentes da sala ao mesmo tempo", c: "P" }, { t: "19 pedidos disputam uma impressora só", c: "C" },
          { t: "Um núcleo cuida da imagem do jogo e outro do som", c: "P" }, { t: "Dois amigos querem mudar a mesma linha do arquivo", c: "C" },
          { t: "Três downloads dividem a mesma internet", c: "C", why: "Disputam a mesma conexão." }],
        explicacao: "Dividir o trabalho = paralelismo; disputar o mesmo recurso = concorrência." },
      { tipo: "sinais", titulo: "Para fazer um bolo: o que dá para fazer AO MESMO TEMPO, no começo?",
        enunciado: "<p>Marque só as tarefas que <strong>não dependem</strong> de nenhuma outra e podem começar juntas.</p>",
        opcoes: [{ t: "Separar os ingredientes", certo: true }, { t: "Untar a forma", certo: true }, { t: "Ligar o forno para esquentar", certo: true },
          { t: "Assar o bolo", certo: false, why: "Só depois de misturar a massa." }, { t: "Cobrir com a calda", certo: false, why: "Só depois de assar." }],
        explicacao: "Separar ingredientes, untar a forma e ligar o forno não dependem de nada; assar e cobrir dependem de etapas anteriores." },
      { tipo: "escolha", titulo: "Tudo ao mesmo tempo",
        perguntas: [
          { p: "Um processador de 4 núcleos consegue:", opcoes: ["Fazer 4 tarefas de uma vez", "Fazer só 1 tarefa por dia", "Funcionar sem energia"], certo: 0 },
          { p: "Quando 19 pedidos disputam uma impressora, ela:", opcoes: ["Forma uma fila e atende um de cada vez", "Imprime tudo junto na mesma folha", "Desliga"], certo: 0 },
          { p: "Uma tarefa que só pode começar depois de outra tem:", opcoes: ["Dependência", "Paralelismo", "Fibra óptica"], certo: 0 }],
        explicacao: "4 núcleos = 4 tarefas; impressora = fila; esperar outra tarefa = dependência." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "🟡 As tarefas que dependem umas das outras: coloque em ordem",
        enunciado: "<p>Para postar o vídeo da feira de ciências, cada etapa depende da anterior.</p>",
        itens: ["Gravar o vídeo", "Editar o vídeo", "Salvar o vídeo pronto", "Enviar para a internet", "Compartilhar o link"],
        explicacao: "Não dá para editar antes de gravar nem enviar antes de salvar o vídeo pronto: gravar → editar → salvar → enviar → compartilhar." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "🔴 Quantos ajudantes para terminar a tempo?", dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."],
        enunciado: "<p>Cada caixa de livros leva <strong>6 minutos</strong> para arrumar, e cada ajudante arruma uma caixa de cada vez. Quantos ajudantes, no mínimo, para terminar no tempo pedido?</p>",
        colunas: ["Trabalho", "Ajudantes"],
        linhas: [["12 caixas em 12 minutos", { r: "6", tipo: "num", dica: "Em 12 minutos, cada ajudante arruma 2 caixas." }],
          ["12 caixas em 36 minutos", { r: "2", tipo: "num", dica: "Em 36 minutos, cada um arruma 6 caixas." }],
          ["20 caixas em 30 minutos", { r: "4", tipo: "num", dica: "Em 30 minutos, cada um arruma 5 caixas." }]],
        explicacao: "Tempo ÷ 6 = caixas por ajudante; total ÷ caixas por ajudante = ajudantes: 6, 2 e 4." }
    ],
    vf: [
      { v: true, why: "É a definição de paralelismo." },
      { v: false, corrigir: { trecho: "levam 40 minutos", opcoes: ["levam 40 minutos", "levam 10 minutos"], certo: "levam 10 minutos" }, why: "Cada núcleo faz 1 tarefa ao mesmo tempo." },
      { v: true, why: "É a definição de concorrência." },
      { v: true, why: "Um pedido de cada vez." },
      { v: false, corrigir: { trecho: "Toda tarefa pode ser dividida", opcoes: ["Toda tarefa pode ser dividida", "Nem toda tarefa pode ser dividida"], certo: "Nem toda tarefa pode ser dividida" }, why: "Assar só depois de misturar." }
    ]
  },

  /* ============ MISSÃO 6 — Projeto: escolher a estrutura ============ */
  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: o aplicativo da Escola JK",
        robo: BIT("🧠 As perguntas", [["Importa a ordem de chegada? <b>Fila</b>.", "ordem de chegada → fila"], ["Cada item tem várias informações? <b>Tabela</b>.", "várias informações → tabela"], ["Importam as ligações? <b>Grafo</b>. Só itens em ordem? <b>Lista</b>.", "ligações → grafo · ordem → lista", true]]),
        colunaItem: "Parte do aplicativo", colunaResp: "Estrutura",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "F", rot: "🚶 Fila" }, { id: "T", rot: "📋 Tabela" }, { id: "G", rot: "🕸️ Grafo" }],
        itens: [{ t: "Chamada da turma", c: "L" }, { t: "Pedidos de impressão", c: "F" }, { t: "Boletim: nome, notas e faltas", c: "T" }, { t: "Rotas dos ônibus escolares", c: "G" }],
        explicacao: "Chamada = lista; impressão = fila; boletim = tabela; rotas = grafo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada estrutura e o seu jeito de guardar",
        robo: BIT("🔗 Outro exemplo", [["“Gaveta de meias” → as meias ficam todas juntas.", "gaveta → guardar junto"], ["Ligo cada estrutura ao jeito de guardar da tabela do 💡 Para começar.", "estrutura → jeito ✔", true]]),
        pares: [{ a: "📝 Lista", b: "Itens em ordem, um depois do outro" }, { a: "🚶 Fila", b: "O primeiro que entra é o primeiro que sai" },
          { a: "📋 Tabela", b: "Linhas (registros) e colunas (campos)" }, { a: "🕸️ Grafo", b: "Pontos ligados por linhas" }],
        explicacao: "Lista = ordem; fila = primeiro a entrar, primeiro a sair; tabela = registros e campos; grafo = ligações." },
      { tipo: "ordenar", titulo: "As etapas do projeto, em ordem",
        itens: ["Entender o problema", "Listar os dados", "Escolher a estrutura", "Testar com um exemplo", "Apresentar"],
        explicacao: "Entender → listar os dados → escolher a estrutura → testar → apresentar." },
      { tipo: "escolha", titulo: "Escolha a estrutura",
        perguntas: [
          { p: "O mapa das ruas da cidade fica melhor num:", opcoes: ["Grafo", "Campo", "Backup"], certo: 0 },
          { p: "Na tabela do boletim, cada aluno é:", opcoes: ["Um registro (uma linha)", "Um campo (uma coluna)", "Um grafo"], certo: 0 },
          { p: "A estrutura certa deixa o programa:", opcoes: ["Mais simples e rápido", "Mais lento", "Sem dados"], certo: 0 }],
        explicacao: "Mapa = grafo; aluno = registro; estrutura certa = programa simples e rápido." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 Lista ou fila? Decida pelo jeito de atender",
        colunaItem: "Situação", colunaResp: "Estrutura",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "F", rot: "🚶 Fila" }],
        itens: [{ t: "Atendimento no posto de saúde por ordem de chegada", c: "F" }, { t: "As músicas favoritas, para tocar em qualquer ordem", c: "L" },
          { t: "Os pedidos da lanchonete: o primeiro pedido sai primeiro", c: "F" }, { t: "Os nomes dos alunos em ordem alfabética", c: "L" }],
        explicacao: "Se quem chega primeiro é atendido primeiro, é fila; se só guardamos itens em ordem, é lista." }
    ],
    turbo: [
      { tipo: "sinais", titulo: "🔴 Monte a tabela do boletim: quais campos (colunas) entram?", enunciado: "<p>Marque <strong>só</strong> as opções certas.</p>",
        opcoes: [{ t: "Nome do aluno", certo: true }, { t: "Turma", certo: true }, { t: "Nota", certo: true }, { t: "Faltas", certo: true },
          { t: "Cor da mochila", certo: false, why: "Não é informação do boletim." }, { t: "Música favorita", certo: false, why: "Não é informação do boletim." }],
        explicacao: "O boletim guarda nome, turma, nota e faltas; cada um é um campo (coluna) da tabela." }
    ],
    vf: [
      { v: true, why: "É a regra da fila." },
      { v: true, why: "Ruas são ligações." },
      { v: false, corrigir: { trecho: "cada linha é um campo e cada coluna é um registro", opcoes: ["cada linha é um campo e cada coluna é um registro", "cada linha é um registro e cada coluna é um campo"], certo: "cada linha é um registro e cada coluna é um campo" }, why: "Linha = registro; coluna = campo." },
      { v: true, why: "É por isso que se escolhe a estrutura." },
      { v: true, why: "Entender, listar, escolher, testar e apresentar." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Sistemas distribuídos ============ */
  m7: {
    pratica: [
      { tipo: "classificar", titulo: "Mão na massa: é um sistema distribuído?",
        robo: BIT("🔎 A pergunta", [["São <b>vários computadores</b>, em lugares diferentes, trabalhando juntos? Então é distribuído.", "vários juntos → distribuído"], ["Um aparelho sozinho, sem rede? Não é.", "sozinho → não é", true]]),
        categorias: [{ id: "S", rot: "🕸️ É distribuído" }, { id: "N", rot: "💻 Não é" }],
        itens: [{ t: "O buscador que responde com milhares de servidores", c: "S" }, { t: "Um jogo on-line com jogadores de várias cidades", c: "S" },
          { t: "A calculadora do celular, sem internet", c: "N" }, { t: "O aplicativo do banco com cópias dos dados em vários lugares", c: "S" }, { t: "Um editor de texto usado sem internet", c: "N" }],
        explicacao: "Vários computadores juntos, em rede = distribuído; um aparelho sozinho = não é." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada ideia e o seu exemplo",
        robo: BIT("🔗 Outro exemplo", [["“Mutirão” → muita gente faz partes do trabalho.", "mutirão → dividir"], ["Ligo cada ideia ao exemplo da tabela do 💡 Para começar.", "ideia → exemplo ✔", true]]),
        pares: [{ a: "Dividir o trabalho", b: "Um servidor procura de A a M, outro de N a Z" }, { a: "Ficar perto de você", b: "O vídeo vem do servidor mais perto" },
          { a: "Não parar se um quebrar", b: "Outro computador assume o trabalho" }],
        explicacao: "Dividir = cada um faz uma parte; perto = servidor mais próximo; não parar = outro assume." },
      { tipo: "escolha", titulo: "Muitos computadores, um sistema",
        perguntas: [
          { p: "Tolerância a falhas é:", opcoes: ["Continuar funcionando quando uma parte quebra", "Nunca ter defeito", "Desligar tudo quando algo quebra"], certo: 0 },
          { p: "Cópias dos dados em vários lugares servem para:", opcoes: ["Não perder nada se um computador quebrar", "Gastar mais energia", "Esconder os dados"], certo: 0 },
          { p: "Nos jogos on-line, os servidores:", opcoes: ["Mandam a mesma partida para todos os jogadores", "Mostram uma partida diferente para cada um", "Não existem"], certo: 0 }],
        explicacao: "Tolerância a falhas = continuar; cópias = não perder; servidores do jogo = mesma partida para todos." },
      { tipo: "memoria", titulo: "Jogo da memória", enunciado: "<p>Vire duas cartas de cada vez e ache os pares: cada termo com o seu significado.</p>", dicas: ["Os significados estão no 📖 O que significa? da missão."],
        pares: [{ a: "Sistema distribuído", b: "Vários computadores como um só" }, { a: "Réplica", b: "Cópia do dado em outro computador" }, { a: "Buscador", b: "Site que procura páginas" }],
        explicacao: "Sistema distribuído, réplica (cópia) e buscador." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Um servidor quebrou. O que acontece?",
        perguntas: [
          { p: "Num sistema com tolerância a falhas, um dos servidores do vídeo quebrou. Você:", opcoes: ["Continua assistindo: outro servidor assume", "Perde o vídeo para sempre", "Precisa trocar de celular"], certo: 0 },
          { p: "Um site guardado num computador só, sem cópias, perde o servidor. O site:", opcoes: ["Sai do ar", "Continua igual", "Fica mais rápido"], certo: 0, why: "Sem outro computador para assumir, não há tolerância a falhas." }],
        explicacao: "Com cópias e outros servidores, o serviço continua; com um computador só, ele cai." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras dos sistemas distribuídos", enunciado: "<p>Leia cada pista e ache a palavra no quadro. As palavras estão no 📖 O que significa?.</p>", dicas: ["As palavras podem estar na horizontal ou na vertical.", "Releia o 🧠 Resumo da Aula: todas as palavras estão lá."],
        palavras: ["SERVIDOR", "COPIA", "FALHA", "BUSCADOR", "REDE"],
        pistas: ["Computador sempre ligado", "O mesmo dado em outro lugar (sem acento)", "Quando uma parte quebra", "Site que procura páginas", "Computadores ligados"], tam: 10,
        explicacao: "Servidor, cópia, falha, buscador e rede." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "usando um único computador", opcoes: ["usando um único computador", "usando milhares de servidores"], certo: "usando milhares de servidores" }, why: "O trabalho é dividido." },
      { v: true, why: "É a definição de tolerância a falhas." },
      { v: true, why: "Se um quebra, há outra cópia." },
      { v: false, corrigir: { trecho: "cada jogador vê uma partida diferente", opcoes: ["cada jogador vê uma partida diferente", "todos veem a mesma partida"], certo: "todos veem a mesma partida" }, why: "Os servidores sincronizam a partida." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Velocidade da internet ============ */
  m8: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: de Mbps para MB por segundo",
        robo: BIT("➗ Outro exemplo: 24 Mbps", [["1 byte = 8 bits. Então eu <b>divido por 8</b>.", "24 ÷ 8"], ["24 ÷ 8 = <b>3 MB por segundo</b>.", "24 Mbps = 3 MB/s", true]]),
        enunciado: "<p>Divida os Mbps por 8 para saber quantos <strong>MB chegam por segundo</strong>.</p>",
        colunas: ["Internet", "MB por segundo"],
        linhas: [["80 Mbps", { r: "10", tipo: "num" }], ["40 Mbps", { r: "5", tipo: "num" }], ["16 Mbps", { r: "2", tipo: "num" }], ["200 Mbps", { r: "25", tipo: "num", dica: "200 ÷ 8" }]],
        explicacao: "80 ÷ 8 = 10; 40 ÷ 8 = 5; 16 ÷ 8 = 2; 200 ÷ 8 = 25." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Quanto tempo demora o download?",
        robo: BIT("⏱️ Outro exemplo: 30 MB a 3 MB/s", [["Tempo = tamanho ÷ MB por segundo.", "30 ÷ 3"], ["30 ÷ 3 = <b>10 segundos</b>.", "10 segundos ✔", true]]),
        enunciado: "<p>Tempo (segundos) = tamanho do arquivo (MB) ÷ MB por segundo.</p>",
        colunas: ["Arquivo e internet", "Segundos"],
        linhas: [["Vídeo de 50 MB a 10 MB/s", { r: "5", tipo: "num" }], ["Jogo de 300 MB a 5 MB/s", { r: "60", tipo: "num" }], ["Música de 8 MB a 2 MB/s", { r: "4", tipo: "num" }]],
        explicacao: "50 ÷ 10 = 5; 300 ÷ 5 = 60 (1 minuto); 8 ÷ 2 = 4." },
      { tipo: "classificar", modo: "tabela", titulo: "Download ou upload?",
        colunaItem: "Situação", colunaResp: "É…",
        categorias: [{ id: "D", rot: "⬇️ Download" }, { id: "U", rot: "⬆️ Upload" }],
        itens: [{ t: "Baixar um jogo", c: "D" }, { t: "Postar um vídeo na rede social", c: "U" }, { t: "Assistir a um filme", c: "D" }, { t: "Mandar uma foto para a nuvem", c: "U" }],
        explicacao: "Os dados chegam até você = download; você manda para a internet = upload." },
      { tipo: "escolha", titulo: "Bits, bytes e ping",
        perguntas: [
          { p: "1 byte tem:", opcoes: ["8 bits", "10 bits", "2 bits"], certo: 0 },
          { p: "O tamanho dos arquivos é medido em:", opcoes: ["Megabytes (MB)", "Megabits por segundo (Mbps)", "Milissegundos (ms)"], certo: 0 },
          { p: "Latência (ping) é:", opcoes: ["O tempo de ida e volta de um pacote", "O tamanho do arquivo", "O preço do plano"], certo: 0 }],
        explicacao: "1 byte = 8 bits; arquivos em MB; ping = ida e volta em milissegundos." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Qual plano serve para cada família?",
        perguntas: [
          { p: "A família baixa um arquivo de 600 MB por dia e quer que demore no máximo 1 minuto (60 s). Precisa de pelo menos:", opcoes: ["80 Mbps (10 MB/s)", "16 Mbps (2 MB/s)", "8 Mbps (1 MB/s)"], certo: 0, why: "600 ÷ 60 = 10 MB/s = 80 Mbps." },
          { p: "Um youtuber posta vídeos todo dia. Ele deve olhar com atenção a velocidade de:", opcoes: ["Upload", "Só download", "Ping da TV"], certo: 0, why: "Postar é enviar: upload." }],
        explicacao: "10 MB/s × 8 = 80 Mbps; quem envia muito precisa de bom upload." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "🔴 Ping alto ou baixo? Escolha o melhor servidor do jogo", dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."],
        enunciado: "<p>No jogo on-line, quanto <strong>menor</strong> o ping, mais rápido o jogo responde.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Servidor São Paulo: 35 ms · Servidor EUA: 140 ms · Servidor Europa: 210 ms. Qual escolher?", { op: ["São Paulo", "EUA", "Europa"], r: "São Paulo" }],
          ["Com qual deles o lag é maior?", { op: ["São Paulo", "EUA", "Europa"], r: "Europa" }]],
        explicacao: "35 ms é o menor ping: São Paulo. 210 ms é o maior: mais lag (Europa)." }
    ],
    vf: [
      { v: true, why: "1 byte = 8 bits." },
      { v: false, corrigir: { trecho: "baixa 80 MB por segundo", opcoes: ["baixa 80 MB por segundo", "baixa 10 MB por segundo"], certo: "baixa 10 MB por segundo" }, why: "80 ÷ 8 = 10." },
      { v: true, why: "Enviar = upload." },
      { v: false, corrigir: { trecho: "quanto maior o ping, melhor", opcoes: ["quanto maior o ping, melhor", "quanto menor o ping, melhor"], certo: "quanto menor o ping, melhor" }, why: "Ping alto dá lag." },
      { v: true, why: "50 ÷ 10 = 5." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · A internet por dentro", pares: [{ a: "Pacote", b: "Pedaço dos dados" }, { a: "Endereço IP", b: "Número do aparelho" }, { a: "Roteador", b: "Escolhe o caminho" }], explicacao: "Pacote, IP e roteador." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · DNS", perguntas: [{ p: "O DNS traduz:", opcoes: ["O nome do site no IP", "O IP em português"], certo: 0 }, { p: "Em professorwell.com.br, o .br indica:", opcoes: ["O país", "O tipo"], certo: 0 }], explicacao: "Nome → IP; .br = Brasil." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", de: "m3", titulo: "M3 · Cabo ou data center?", categorias: [{ id: "C", rot: "🌊 Cabo" }, { id: "D", rot: "🏭 Data center" }],
        itens: [{ t: "Fundo do mar", c: "C" }, { t: "Servidores e refrigeração", c: "D" }, { t: "Pulsos de luz", c: "C" }], explicacao: "Cabo leva; data center guarda." },
      { tipo: "relembre", de: "m4" },
      { tipo: "sinais", de: "m4", titulo: "M4 · Nuvem segura", enunciado: "<p>Marque <strong>só</strong> as opções certas.</p>", opcoes: [{ t: "Senha forte", certo: true }, { t: "Verificação em duas etapas", certo: true }, { t: "Conta aberta no computador da escola", certo: false }], explicacao: "Senha forte e duas etapas; sempre sair da conta." },
      { tipo: "relembre", de: "m5" },
      { tipo: "tabela", de: "m5", titulo: "M5 · Núcleos", dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."], enunciado: "<p>Tarefas de 10 minutos.</p>", colunas: ["Situação", "Minutos"],
        linhas: [["6 tarefas com 1 núcleo", { r: "60", tipo: "num" }], ["6 tarefas com 3 núcleos", { r: "20", tipo: "num" }]], explicacao: "6 × 10 = 60; com 3 núcleos, 2 tarefas cada: 20." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", de: "m6", titulo: "M6 · Qual estrutura?", categorias: [{ id: "L", rot: "Lista" }, { id: "F", rot: "Fila" }, { id: "T", rot: "Tabela" }, { id: "G", rot: "Grafo" }],
        itens: [{ t: "Fila da cantina", c: "F" }, { t: "Boletim", c: "T" }, { t: "Mapa das ruas", c: "G" }, { t: "Chamada", c: "L" }], explicacao: "Fila, tabela, grafo e lista." },
      { tipo: "relembre", de: "m7" },
      { tipo: "memoria", de: "m7", titulo: "M7 · Distribuídos", enunciado: "<p>Vire duas cartas de cada vez e ache os pares: cada termo com o seu significado.</p>", dicas: ["Os significados estão no 📖 O que significa? da missão."], pares: [{ a: "Sistema distribuído", b: "Vários computadores como um só" }, { a: "Tolerância a falhas", b: "Continuar se um quebrar" }], explicacao: "Distribuído e tolerância a falhas." },
      { tipo: "relembre", de: "m8" },
      { tipo: "tabela", de: "m8", titulo: "M8 · Velocidade", dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."], colunas: ["Pergunta", "Resposta"],
        linhas: [["56 Mbps em MB por segundo", { r: "7", tipo: "num" }], ["Arquivo de 70 MB a 7 MB/s (segundos)", { r: "10", tipo: "num" }]], explicacao: "56 ÷ 8 = 7; 70 ÷ 7 = 10." }
    ],
    desafio: [
      { tipo: "rota", titulo: "🟡 Simulado: do nome do site até a página na tela",
        etapas: [
          { ic: "⌨️", t: "Digitar o nome do site" }, { ic: "📒", t: "O DNS responde o IP" }, { ic: "📦", t: "O pedido vai em pacotes pelos roteadores" },
          { ic: "🏭", t: "O servidor do data center envia a página" }, { ic: "🖥️", t: "A página aparece na tela" }],
        okMsg: "Você juntou o bimestre inteiro num caminho só! 🌐",
        explicacao: "Nome → DNS → pacotes pelos roteadores → servidor no data center → tela." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre", enunciado: "<p>Leia cada pista e ache a palavra no quadro. As palavras estão no 📖 O que significa?.</p>", dicas: ["As palavras podem estar na horizontal ou na vertical.", "Releia o 🧠 Resumo da Aula: todas as palavras estão lá."],
        palavras: ["PACOTE", "DNS", "FIBRA", "NUVEM", "NUCLEO", "PING"],
        pistas: ["Pedaço dos dados", "Traduz nome em IP", "Fio de vidro que leva luz", "Servidores onde guardamos arquivos", "Cérebro do processador (sem acento)", "Tempo de ida e volta"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-2bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "A internet", [{ p: "Os dados viajam pela internet cortados em:", opcoes: ["Pacotes", "Satélites", "Domínios"], certo: 0 }, { p: "O número que identifica o aparelho de destino é o:", opcoes: ["Endereço IP", "Ping", "Backup"], certo: 0 }]), pega("m1"),
    Q("m2", "DNS", [{ p: "O DNS é como a ___ do celular:", opcoes: ["Agenda de contatos", "Câmera", "Calculadora"], certo: 0 }, { p: "O nome de um site se chama:", opcoes: ["Domínio", "Pacote", "Núcleo"], certo: 0 }]), pega("m2"),
    Q("m3", "Cabos e data centers", [{ p: "A fibra óptica leva os dados como:", opcoes: ["Pulsos de luz", "Som", "Papel"], certo: 0 }, { p: "Um data center precisa de refrigeração porque:", opcoes: ["Os servidores esquentam muito", "Fica no mar", "É enfeite"], certo: 0 }]), pega("m3"),
    Q("m4", "Nuvem", [{ p: "Deixar o arquivo igual em todos os aparelhos é:", opcoes: ["Sincronizar", "Compactar", "Formatar"], certo: 0 }, { p: "Backup quer dizer:", opcoes: ["Cópia de segurança", "Vírus", "Senha"], certo: 0 }]), pega("m4"),
    Q("m5", "Paralelismo e concorrência", [{ p: "Várias tarefas disputando a mesma impressora é:", opcoes: ["Concorrência", "Paralelismo", "Backup"], certo: 0 }, { p: "8 tarefas de 10 minutos com 4 núcleos levam:", opcoes: ["20 minutos", "80 minutos", "10 minutos"], certo: 0 }]), pega("m5"),
    Q("m6", "Estruturas", [{ p: "O primeiro que entra é o primeiro que sai na:", opcoes: ["Fila", "Tabela", "Árvore"], certo: 0 }, { p: "Cada coluna de uma tabela é um:", opcoes: ["Campo", "Registro", "Pacote"], certo: 0 }]), pega("m6"),
    Q("m7", "Sistemas distribuídos", [{ p: "Continuar funcionando quando uma parte quebra é:", opcoes: ["Tolerância a falhas", "Concorrência", "Latência"], certo: 0 }, { p: "O buscador responde usando:", opcoes: ["Milhares de servidores", "Um computador só", "O seu celular"], certo: 0 }]), pega("m7"),
    Q("m8", "Velocidade", [{ p: "Internet de 40 Mbps baixa quantos MB por segundo?", opcoes: ["5", "40", "320"], certo: 0 }, { p: "Postar um vídeo é fazer:", opcoes: ["Upload", "Download", "Ping"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 2: 2º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-2bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });

  /* ---------- M1 · o caminho dos pacotes ---------- */
  A.m1.gancho = { html: "<p>📸 A Júlia mandou uma foto do aniversário para a avó, que mora em outro estado. Em 2 segundos, a avó respondeu: “que linda!”.</p><p>🤔 A foto viajou <b>inteira</b>? Por onde ela passou para chegar tão rápido?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 2º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["O aparelho do <b>Wi-Fi</b> da sua casa se chama…", ["Roteador", "Monitor", "Processador"], "O aparelho do Wi-Fi é o <b>roteador</b>."],
    ["A empresa que leva a internet até a sua casa é o…", ["Provedor", "Aplicativo", "Navegador"], "É o <b>provedor</b>."],
    ["A internet é…", ["Uma rede de redes, ligadas no mundo inteiro", "Um computador só, nos Estados Unidos", "Um satélite"], "A internet é uma <b>rede de redes</b>."])];
  A.m1.aplicar = [
    rota("🛠️ Na vida real: a viagem da foto até a avó",
      "A foto da Júlia vai até o celular da avó. Clique nos lugares <b>na ordem</b> em que os pacotes passam.",
      [["📱", "No celular da Júlia, que corta a foto em pacotes"], ["📶", "No roteador da casa (o aparelho do Wi-Fi)"], ["🏢", "No provedor, a empresa da internet"],
        ["🔀", "Em vários roteadores pelo caminho", "Eles escolhem por onde cada pacote segue."], ["👵", "No celular da avó, que junta os pacotes na ordem certa"]],
      "A foto chegou inteirinha! 📸", "A foto viajou cortada em pacotes; cada um tem o IP de destino e o seu número, e o celular da avó remonta tudo na ordem."),
    VIDA(
      ["Os pacotes de uma foto chegaram fora de ordem. O que o celular usa para montar tudo certo?", ["O número de cada pacote", "A cor da foto", "O nome do aplicativo"], "Cada pacote leva o seu <b>número</b> (“caixa 3 de 10”) para remontar na ordem."],
      ["O que diz para <b>qual aparelho</b> o pacote vai?", ["O endereço IP de destino", "O tamanho do pacote", "O nome do provedor"], "O <b>endereço IP</b> é como o endereço escrito na caixa."],
      ["O vídeo travou e depois voltou. O que provavelmente aconteceu?", ["Alguns pacotes se atrasaram ou foram enviados de novo", "O celular quebrou", "O vídeo foi apagado"], "Pacote atrasado ou perdido é enviado de novo: o vídeo trava e volta."])
  ];
  mais("m1", "desafio",
    { tipo: "ordenar", titulo: "🧩 Remonte a mensagem: os pacotes chegaram fora de ordem",
      enunciado: "<p>A mensagem chegou em 5 pacotes, fora de ordem. Use o <b>número de cada pacote</b> para remontar.</p>",
      itens: ["Pacote 1 de 5: “Oi, vó!”", "Pacote 2 de 5: “Hoje foi o meu”", "Pacote 3 de 5: “aniversário e eu”", "Pacote 4 de 5: “ganhei um bolo”", "Pacote 5 de 5: “de chocolate! 🎂”"],
      dicas: ["Olhe o número: 1 de 5 vem primeiro."],
      explicacao: "Os pacotes podem chegar fora de ordem; o número de cada um permite remontar a mensagem." });
  mais("m1", "turbo",
    msg("📦 O que vai no pacote?", "📦 Pacote de dados", [["D", "📦 Pedaço dos dados"], ["I", "🏠 IP de destino"], ["N", "🔢 Número do pacote"]],
      "Cada informação abaixo é qual parte do pacote?",
      [["Um pedacinho da foto do bolo", "D", "É o conteúdo: o pedaço dos dados."], ["203.0.113.25, o endereço do celular da avó (exemplo)", "I", "Diz para onde vai: IP de destino."],
        ["“3 de 10”", "N", "Diz a ordem: número do pacote."], ["Um trecho do áudio", "D", "Conteúdo: pedaço dos dados."], ["O endereço do aparelho que vai receber", "I", "É o IP de destino."]],
      "Pacote montado! 📦", "Cada pacote leva um pedaço dos dados, o IP de destino e o número para remontar."));

  /* ---------- M2 · DNS ---------- */
  A.m2.gancho = { html: "<p>🔤 Você digita <b>portal.professorwell.com.br</b> e a página aparece. Mas os computadores só se encontram por <b>números</b>, como 203.0.113.25.</p><p>🤔 Quem faz a “tradução” do nome para o número? E o que acontece se essa tradução parar de funcionar?</p>" };
  A.m2.aplicar = [
    rota("🛠️ Na vida real: abrir o site do portal",
      "Você vai abrir o portal no navegador. Clique no que acontece <b>na ordem</b>.",
      [["⌨️", "Você digita o nome do site no navegador"], ["❓", "O navegador pergunta ao servidor DNS: “qual é o IP desse nome?”"], ["📇", "O servidor DNS responde com o endereço IP"],
        ["📨", "O navegador pede a página ao computador daquele IP"], ["🖥️", "A página chega e aparece na tela"]],
      "Página aberta! 🖥️", "O DNS trabalha antes de a página aparecer: ele acha o IP pelo nome, como a agenda acha o número pelo nome do contato."),
    VIDA(
      ["O DNS funciona como…", ["A agenda de contatos: acha o número pelo nome", "Um roteador", "Um provedor"], "O DNS acha o <b>IP pelo nome</b>, como a agenda acha o telefone."],
      ["O Wi-Fi está ligado, mas nenhum site abre pelo nome. Um motivo possível é…", ["O DNS parou de funcionar", "A tela está suja", "O mouse está sem pilha"], "Sem DNS, o navegador não consegue achar o IP pelo nome."],
      ["Em portal.professorwell.com.br, o que é o <b>.br</b>?", ["O país: Brasil", "O tipo: comercial", "O nome escolhido"], "Lendo da direita para a esquerda: <b>.br</b> é o país (Brasil)."])
  ];
  mais("m2", "desafio",
    msg("🕵️ Nome verdadeiro ou nome falso?", "🔗 Links recebidos", [["V", "✅ Nome certo"], ["G", "⚠️ Nome falso"]],
      "Golpistas criam nomes parecidos para enganar. O site verdadeiro é <b>portal.professorwell.com.br</b>. Confira cada link, letra por letra.",
      [["portal.professorwell.com.br", "V", "É o nome certo."], ["portal.pr0fessorwell.com.br", "G", "Tem um zero no lugar do O."], ["portal.professorwel.com.br", "G", "Falta um L."],
        ["portal.professorwell.com.br/missao", "V", "É o mesmo site, numa página dele."], ["portal.professorwelll.com.br", "G", "Tem um L a mais."]],
      "Olho de detetive! 🕵️", "Um nome com uma letra trocada leva a outro computador, de outra pessoa. Confira o nome com calma antes de clicar."));
  mais("m2", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória: agenda × internet",
      enunciado: "<p>Vire duas cartas: ache o que <b>combina</b> entre a agenda do celular e a internet.</p>",
      pares: [{ a: "Nome do contato", b: "Nome do site (domínio)" }, { a: "Número do telefone", b: "Endereço IP" }, { a: "A agenda acha o número", b: "O DNS acha o IP" },
        { a: ".br", b: "O país: Brasil" }, { a: ".com", b: "O tipo: comercial" }, { a: "Registro.br", b: "Onde se registram os nomes .br" }],
      porRodada: 3,
      explicacao: "Nome → DNS → IP: igual à agenda, que acha o número pelo nome." });

  /* ---------- M3 · cabos submarinos e data centers ---------- */
  A.m3.gancho = { html: "<p>🛰️ O Léo jura que a internet vem do <b>satélite</b>. A Mia diz que vem do <b>fundo do mar</b>.</p><p>🤔 Quem tem razão? Como um vídeo de outro país chega até o seu celular?</p>" };
  A.m3.aplicar = [
    rota("🛠️ Na vida real: o vídeo de outro país até a sua tela",
      "Você abriu um vídeo que está guardado em outro país. Clique no caminho dele <b>na ordem</b>.",
      [["🏢", "Data center lá fora"], ["🌊", "Cabo submarino, no fundo do oceano"], ["🏖️", "Estação na praia, em Fortaleza (CE)"], ["🛣️", "Cabos pelo Brasil até o provedor"], ["📶", "O roteador da sua casa"], ["📱", "A sua tela"]],
      "Vídeo carregado! 🎬", "A maior parte dos dados entre continentes passa por cabos submarinos de fibra óptica, e não pelo satélite."),
    VIDA(
      ["A fibra óptica leva os dados como…", ["Pulsos de luz", "Ondas do mar", "Sons"], "A fibra é um fio de vidro que leva os dados como <b>pulsos de luz</b>."],
      ["Por que o data center precisa de <b>refrigeração</b>?", ["Os servidores esquentam muito", "Para gelar a água", "Para os servidores dormirem"], "Os servidores esquentam muito; o ar frio evita que estraguem."],
      ["Um navio cortou um cabo submarino por acidente. O que pode acontecer?", ["A internet de uma região inteira pode ficar mais lenta", "Nada", "Todos os celulares desligam"], "Um cabo cortado deixa a internet de uma região <b>mais lenta</b>."])
  ];
  mais("m3", "desafio",
    msg("🏢 Do que o data center precisa?", "🏢 Data center", [["E", "⚡ Energia sem parar"], ["R", "❄️ Refrigeração"], ["S", "🔒 Segurança"], ["C", "🔁 Cópias"]],
      "Cada situação mostra uma das necessidades do data center. Qual?",
      [["Faltou luz na cidade, e os geradores ligaram na hora", "E", "Os servidores nunca desligam."], ["O ar-condicionado gigante não pode parar", "R", "Os servidores esquentam muito."],
        ["Só entra quem tem crachá, e há câmeras em todo lugar", "S", "Guarda os dados de milhões de pessoas."], ["As suas fotos estão guardadas em dois prédios diferentes", "C", "Para não sumirem se algo quebrar."]],
      "Data center protegido! 🏢", "Energia, refrigeração, segurança e cópias: o data center não pode parar nem perder dados."));
  mais("m3", "turbo",
    { tipo: "sinais", titulo: "🛰️ Mito ou verdade?",
      enunciado: "<p>Marque só as frases <b>verdadeiras</b>.</p>",
      opcoes: [{ t: "A maior parte dos dados entre os continentes passa por cabos no fundo do mar", certo: true }, { t: "O principal ponto de chegada dos cabos no Brasil é Fortaleza (CE)", certo: true },
        { t: "O satélite é usado onde não chega cabo, como em áreas rurais e navios", certo: true },
        { t: "A maior parte da internet vem do satélite", certo: false, why: "A maior parte passa por cabos submarinos." }, { t: "A fibra óptica é um fio de cobre grosso", certo: false, why: "É um fio de vidro mais fino que um cabelo." },
        { t: "O satélite leva mais dados e é mais rápido que a fibra", certo: false, why: "Leva menos dados e demora mais." }],
      explicacao: "Cabos submarinos de fibra óptica levam a maior parte dos dados; o satélite ajuda onde não chega cabo." });

  /* ---------- M4 · nuvem ---------- */
  A.m4.gancho = { html: "<p>📱 A Duda perdeu o celular com todas as fotos do aniversário. Ela chorou, mas a mãe disse: “calma, estão na <b>nuvem</b>”.</p><p>🤔 Como as fotos podem estar num celular perdido e, ao mesmo tempo, guardadas? E a nuvem fica no céu?</p>" };
  A.m4.aplicar = [
    rota("🛠️ Na vida real: recuperar as fotos da Duda",
      "A Duda ganhou um celular novo. Ajude-a a ver as fotos de novo: clique nos passos <b>na ordem</b>.",
      [["📲", "Ligar o celular novo"], ["🔐", "Entrar com a mesma conta (usuário e senha dela)"], ["☁️", "Abrir o aplicativo da nuvem"], ["🖼️", "As fotos aparecem: estavam guardadas no servidor"]],
      "Fotos de volta! 🎉", "As fotos estavam no servidor da empresa (num data center). Entrando com a conta em outro aparelho, elas estão lá."),
    VIDA(
      ["Você muda um arquivo no computador e a mudança aparece no celular. Isso é…", ["Sincronizar", "Formatar", "Desligar"], "<b>Sincronizar</b> é manter o mesmo arquivo igual em todos os aparelhos."],
      ["Por que usar <b>senha forte e verificação em duas etapas</b> na nuvem?", ["Quem entra na sua conta vê todos os seus arquivos", "Para a internet ficar mais rápida", "Para ganhar espaço grátis"], "Quem entra na sua conta vê <b>todos</b> os seus arquivos."],
      ["Você usou a nuvem num computador da escola. Antes de ir embora…", ["Saio da conta", "Deixo a conta aberta para o próximo", "Apago o navegador"], "Sair da conta: o próximo aluno não pode entrar nos seus arquivos."])
  ];
  mais("m4", "desafio",
    msg("☁️ Só no aparelho ou na nuvem?", "☁️ Onde está o arquivo?", [["A", "📱 Só no aparelho"], ["N", "☁️ Na nuvem"]],
      "Leia cada situação. O arquivo estava guardado só no aparelho ou na nuvem?",
      [["Perdeu o celular e as fotos sumiram para sempre", "A", "Guardado só no aparelho: perdeu o celular, perdeu o arquivo."], ["Trocou de celular e as conversas voltaram com o backup", "N", "O backup estava na nuvem."],
        ["Abriu o trabalho no computador da escola e no de casa", "N", "Para abrir em vários aparelhos, o arquivo está na nuvem."], ["Abre o arquivo mesmo sem internet, mas só naquele computador", "A", "Funciona sem internet, mas só no aparelho."]],
      "Mandou bem! ☁️", "Na nuvem, o arquivo fica num servidor e você acessa de qualquer lugar, com internet."));
  mais("m4", "turbo",
    { tipo: "sinais", titulo: "🔐 Cuidados certos com a nuvem",
      enunciado: "<p>Marque só as atitudes <b>seguras</b> com a nuvem.</p>",
      opcoes: [{ t: "Usar senha forte e verificação em duas etapas", certo: true }, { t: "Conferir com quem o arquivo está compartilhado", certo: true }, { t: "Sair da conta no computador da escola", certo: true },
        { t: "Mandar o link aberto do arquivo para qualquer grupo", certo: false, why: "Qualquer pessoa que receber o link vê o arquivo." }, { t: "Deixar a conta aberta no computador da escola", certo: false, why: "O próximo aluno entra nos seus arquivos." },
        { t: "Usar a mesma senha fácil em todos os lugares", certo: false, why: "Senha fraca deixa a conta fácil de invadir." }],
      explicacao: "Senha forte, verificação em duas etapas, compartilhar com cuidado e sair da conta." });

  /* ---------- M5 · paralelismo e concorrência ---------- */
  A.m5.gancho = { html: "<p>🧹 Arrumar a sala sozinho leva <b>40 minutos</b>: varrer, organizar as cadeiras, limpar o quadro e recolher o lixo. Com 4 colegas, cada um com uma parte…</p><p>🤔 Quanto tempo leva agora? E se os 19 alunos mandarem imprimir ao mesmo tempo, na única impressora da escola?</p>" };
  A.m5.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a fila da impressora da escola", nome: "FILA_IMPRESSAO",
      enunciado: "<p>Vários alunos mandaram imprimir ao mesmo tempo, mas a escola tem <b>uma</b> impressora. Ela atende um pedido de cada vez, por ordem de chegada (concorrência vira fila).</p>",
      inicial: ["Ana", "Bia", "Caio"],
      passos: [
        { tipo: "inserir", instr: "O Davi mandou imprimir agora: insira Davi no fim.", esperado: ["Ana", "Bia", "Caio", "Davi"], dica: "Digite Davi e clique em Inserir no fim." },
        { tipo: "pergunta", instr: "Quem é atendido primeiro?", r: "Ana", why: "Ana chegou primeiro: é atendida primeiro." },
        { tipo: "remover", instr: "A impressora terminou o pedido da Ana: remova Ana.", esperado: ["Bia", "Caio", "Davi"] },
        { tipo: "pergunta", instr: "E agora, quem é o próximo?", r: "Bia" },
        { tipo: "pergunta", instr: "Quantos pedidos ainda esperam na fila?", r: "3", num: true }],
      explicacao: "Os pedidos disputam a mesma impressora (concorrência); ela forma uma fila e atende um de cada vez, por ordem de chegada." },
    VIDA(
      ["O processador tem vários <b>núcleos</b>. Cada núcleo…", ["Cuida de uma parte do trabalho ao mesmo tempo", "Guarda fotos", "Liga a tela"], "Cada núcleo cuida de uma parte, <b>ao mesmo tempo</b>: é o paralelismo."],
      ["8 tarefas de 10 minutos, com 4 pessoas (ou 4 núcleos), levam…", ["20 minutos", "80 minutos", "10 minutos"], "8 tarefas ÷ 4 = 2 tarefas para cada um × 10 min = <b>20 minutos</b>."],
      ["No bolo, dá para assar antes de misturar?", ["Não: assar depende de misturar antes", "Sim, tudo ao mesmo tempo", "Só no micro-ondas"], "Se uma tarefa depende da outra, <b>precisa esperar</b>."])
  ];
  mais("m5", "desafio",
    msg("⚡ Paralelismo ou concorrência?", "🧠 Ao mesmo tempo", [["P", "🧹 Paralelismo"], ["C", "🚦 Concorrência"]],
      "Em cada situação, as tarefas se ajudam (paralelismo) ou disputam a mesma coisa (concorrência)?",
      [["4 colegas varrem partes diferentes da sala ao mesmo tempo", "P", "Cada um faz uma parte: paralelismo."], ["19 pedidos disputam uma impressora só", "C", "Disputam o mesmo recurso: vira fila."],
        ["No jogo, um núcleo cuida da imagem e outro do som", "P", "Cada núcleo com uma parte: paralelismo."], ["Dois amigos querem editar a mesma linha do arquivo ao mesmo tempo", "C", "Disputam a mesma coisa: o programa precisa organizar."],
        ["Vários downloads dividem a mesma internet", "C", "Disputam a mesma internet: cada um vai mais devagar."]],
      "Mandou bem! ⚡", "Paralelismo: dividir o trabalho. Concorrência: disputar o mesmo recurso."));
  mais("m5", "turbo",
    rota("🎂 O bolo: o que precisa esperar?",
      "Algumas tarefas dependem de outras. Coloque na ordem as tarefas que <b>dependem</b> uma da outra.",
      [["🥣", "Separar os ingredientes, untar a forma e ligar o forno (dá para fazer ao mesmo tempo)"], ["🥄", "Misturar a massa"], ["🔥", "Assar", "Assar só depois de misturar."], ["🍫", "Fazer a calda e cobrir", "A calda só depois de assar."]],
      "Bolo pronto! 🎂", "O começo pode ser em paralelo; misturar, assar e cobrir dependem uns dos outros e precisam esperar."));

  /* ---------- M6 · projeto: escolher a estrutura ---------- */
  A.m6.gancho = { html: "<p>📲 A escola quer um aplicativo com a chamada, os pedidos de impressão, o boletim e as rotas do ônibus escolar.</p><p>🤔 Dá para guardar tudo do mesmo jeito? Ou cada parte precisa de uma <b>estrutura</b> diferente?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: o aplicativo da cantina", "📲 Aplicativo da cantina", [["L", "📝 Lista"], ["F", "🚶 Fila"], ["T", "📋 Tabela"], ["G", "🕸️ Grafo"]],
      "Agora a turma vai planejar o aplicativo da cantina. Para cada parte, qual estrutura é a certa?",
      [["Os pedidos de lanche, atendidos por ordem de chegada", "F", "O primeiro que entra é o primeiro que sai: fila."], ["O cardápio do dia: os nomes dos lanches, em ordem", "L", "Vários itens do mesmo tipo: lista."],
        ["Cada lanche com nome, preço e calorias", "T", "Várias informações por item: tabela."], ["O caminho da cantina até cada sala, para a entrega", "G", "Lugares ligados por corredores: grafo."]],
      "Aplicativo planejado! 📲", "Fila: ordem de chegada. Lista: itens em ordem. Tabela: várias informações. Grafo: ligações."),
    VIDA(
      ["A fila de atendimento do posto de saúde é uma…", ["Fila: o primeiro que entra é o primeiro que sai", "Tabela", "Grafo"], "Atende por <b>ordem de chegada</b>: fila."],
      ["A planilha de notas do professor (nome, notas e faltas) é uma…", ["Tabela", "Fila", "Lista de compras"], "Várias informações por aluno: <b>tabela</b>."],
      ["Qual é o 1º passo para fazer o projeto?", ["Entender o problema", "Apresentar", "Testar com um exemplo"], "1) entender o problema; 2) listar os dados; 3) escolher a estrutura; 4) testar; 5) apresentar."])
  ];
  mais("m6", "desafio",
    { tipo: "lista_ops", titulo: "🚶 A fila do posto de saúde", nome: "FILA_POSTO",
      enunciado: "<p>Na fila, <b>o primeiro que entra é o primeiro que sai</b>. Faça as operações e responda.</p>",
      inicial: ["Seu João", "Dona Rita", "Lucas"],
      passos: [
        { tipo: "pergunta", instr: "Quem vai ser atendido agora?", r: "Seu João" },
        { tipo: "remover", instr: "O Seu João foi atendido: remova Seu João.", esperado: ["Dona Rita", "Lucas"] },
        { tipo: "inserir", instr: "Chegou a Mara: insira Mara no fim.", esperado: ["Dona Rita", "Lucas", "Mara"] },
        { tipo: "pergunta", instr: "Quem é o próximo a ser atendido?", r: "Dona Rita" },
        { tipo: "pergunta", instr: "Em que posição está a Mara?", r: "3", num: true }],
      explicacao: "Na fila, quem chegou primeiro sai primeiro; quem chega entra no fim." });
  mais("m6", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória das estruturas",
      enunciado: "<p>Vire duas cartas: ache a <b>estrutura</b> e o <b>exemplo</b> que combinam.</p>",
      pares: [{ a: "📝 Lista", b: "A chamada da turma" }, { a: "🚶 Fila", b: "Os pedidos de impressão" }, { a: "📋 Tabela", b: "Boletim: nome, notas e faltas" },
        { a: "🕸️ Grafo", b: "As rotas dos ônibus escolares" }, { a: "Estrutura de dados", b: "O jeito de guardar os dados" }, { a: "Projeto", b: "Entender, listar, escolher, testar e apresentar" }],
      porRodada: 3,
      explicacao: "Cada parte do aplicativo pede a sua estrutura." });

  /* ---------- M7 · sistemas distribuídos ---------- */
  A.m7.gancho = { html: "<p>🔎 Você digita uma pergunta no buscador e, em menos de 1 segundo, aparecem respostas tiradas de bilhões de páginas.</p><p>🤔 Um computador só conseguiria fazer isso tão rápido? E se esse computador quebrasse?</p>" };
  A.m7.aplicar = [
    msg("🛠️ Na vida real: como o sistema distribuído ajuda?", "🌐 Sistema distribuído", [["D", "🧩 Dividir o trabalho"], ["P", "📍 Ficar perto de você"], ["N", "🛟 Não parar se um quebrar"]],
      "Para cada situação, qual ideia do sistema distribuído está em ação?",
      [["Um servidor procura nas páginas de A a M, e outro, de N a Z", "D", "Cada computador faz uma parte."], ["O vídeo vem de um servidor no Brasil, e não do outro lado do mundo", "P", "A cópia mais perto chega mais rápido."],
        ["Um servidor do jogo quebrou, e outro assumiu sem a partida parar", "N", "É a tolerância a falhas."], ["O banco guarda cópias dos dados em vários lugares", "N", "Se um lugar falhar, os dados continuam guardados."]],
      "Mandou bem! 🌐", "Dividir o trabalho, ficar perto e não parar se um quebrar: as três ideias dos sistemas distribuídos."),
    VIDA(
      ["No futebol, o jogador se machuca, entra o reserva e o jogo continua. Na computação, isso parece com…", ["Tolerância a falhas", "Paralelismo", "DNS"], "Continuar funcionando quando uma parte quebra é <b>tolerância a falhas</b>."],
      ["No jogo on-line, como todos os jogadores veem a mesma partida?", ["Os servidores recebem os movimentos de todos e mandam a mesma partida para cada um", "Cada um joga sozinho", "O celular adivinha"], "Os <b>servidores</b> do jogo mantêm todos na mesma partida."],
      ["Por que o buscador responde tão rápido?", ["Milhares de servidores dividem a busca", "Ele já sabe todas as respostas de cabeça", "Por causa do Wi-Fi"], "Milhares de servidores <b>dividem</b> o trabalho."])
  ];
  mais("m7", "desafio",
    rota("🎮 Um movimento no jogo on-line",
      "Você apertou o botão de pular no jogo on-line. Clique no que acontece <b>na ordem</b>.",
      [["🎮", "Você aperta o botão de pular"], ["📨", "O seu movimento vai para os servidores do jogo"], ["🧠", "Os servidores juntam os movimentos de todos os jogadores"], ["📡", "Os servidores mandam a mesma partida para cada jogador"], ["👀", "Todos veem o seu personagem pular"]],
      "Pulo visto por todos! 🎮", "O jogo on-line é distribuído: os servidores mantêm todos na mesma partida."));
  mais("m7", "turbo",
    { tipo: "sinais", titulo: "🛟 Tolerância a falhas: marque os exemplos",
      enunciado: "<p>Marque só as situações em que o sistema <b>continua funcionando</b> mesmo quando uma parte quebra.</p>",
      opcoes: [{ t: "Um servidor do site quebrou, outro assumiu, e o site continuou no ar", certo: true }, { t: "As fotos estão em dois data centers; um pegou fogo e as fotos continuaram lá", certo: true },
        { t: "No time, o goleiro se machucou e o reserva entrou", certo: true },
        { t: "O único servidor do site quebrou e o site saiu do ar", certo: false, why: "Sem outro computador para assumir, o sistema parou." }, { t: "O arquivo estava só num celular, que quebrou", certo: false, why: "Sem cópia, o arquivo se perdeu." }],
      explicacao: "Tolerância a falhas: ter outro para assumir e ter cópias em mais de um lugar." });

  /* ---------- M8 · velocidade da internet ---------- */
  A.m8.gancho = { html: "<p>🎮 O plano da casa do Caio é de <b>80 mega</b>. Ele achou que o jogo de 300 MB ia baixar em 4 segundos… e demorou bem mais!</p><p>🤔 “80 mega” é 80 o quê? Megabit e megabyte são a mesma coisa?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: download ou upload?", "🌐 Internet de casa", [["D", "⬇️ Download (baixar)"], ["U", "⬆️ Upload (enviar)"]],
      "Em cada situação, os dados estão chegando até você (download) ou saindo de você para a internet (upload)?",
      [["Baixar um jogo no celular", "D", "Os dados chegam até você."], ["Postar um vídeo da festa", "U", "Você manda o vídeo para a internet."],
        ["Assistir a um filme", "D", "O filme chega até você."], ["Mandar uma foto para a vó", "U", "A foto sai do seu celular."], ["Baixar um aplicativo novo", "D", "O aplicativo chega até você."]],
      "Mandou bem! 🌐", "Download: os dados chegam até você. Upload: você envia. Muitos planos têm upload menor que o download."),
    VIDA(
      ["A internet é de <b>80 Mbps</b>. Quantos <b>MB</b> chegam por segundo?", ["10 MB por segundo", "80 MB por segundo", "640 MB por segundo"], "Divida os Mbps por 8: 80 ÷ 8 = <b>10 MB/s</b>."],
      ["Um vídeo de <b>50 MB</b>, numa internet de 10 MB por segundo, leva…", ["5 segundos", "50 segundos", "500 segundos"], "Tempo = tamanho ÷ MB por segundo: 50 ÷ 10 = <b>5 segundos</b>."],
      ["No jogo on-line, o que é melhor?", ["Ping baixo: o jogo responde na hora", "Ping alto", "Tanto faz"], "Ping baixo é melhor; ping alto dá o “lag”."])
  ];
  mais("m8", "desafio",
    { tipo: "tabela", titulo: "⏱️ Quanto tempo o download leva?",
      enunciado: "<p>Primeiro divida os Mbps por 8 (MB por segundo); depois divida o tamanho do arquivo por esse número.</p>",
      colunas: ["Arquivo e internet", "Tempo (segundos)"],
      linhas: [["Jogo de 300 MB, internet de 40 Mbps (5 MB/s)", { r: "60", tipo: "num" }], ["Vídeo de 100 MB, internet de 80 Mbps", { r: "10", tipo: "num", dica: "80 ÷ 8 = 10 MB/s." }],
        ["Música de 8 MB, internet de 16 Mbps", { r: "4", tipo: "num", dica: "16 ÷ 8 = 2 MB/s." }], ["Foto de 20 MB, internet de 80 Mbps", { r: "2", tipo: "num" }]],
      explicacao: "300 ÷ 5 = 60 · 100 ÷ 10 = 10 · 8 ÷ 2 = 4 · 20 ÷ 10 = 2." });
  mais("m8", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória: Mbps e MB por segundo",
      enunciado: "<p>Vire duas cartas: ache a <b>internet</b> e os <b>MB por segundo</b> que combinam (divida por 8).</p>",
      pares: [{ a: "80 Mbps", b: "10 MB por segundo" }, { a: "40 Mbps", b: "5 MB por segundo" }, { a: "16 Mbps", b: "2 MB por segundo" },
        { a: "1 byte", b: "8 bits" }, { a: "Ping alto", b: "Lag no jogo" }, { a: "Postar um vídeo", b: "Upload" }],
      porRodada: 3,
      explicacao: "Para saber os MB por segundo, divida os Mbps por 8." });
})();
