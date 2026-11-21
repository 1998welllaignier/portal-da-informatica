/* ============================================================
   ATIVIDADES — Informática 6º ano — 1º bimestre de 2027 · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação (sempre aqui no portal).
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-2027-1bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>😱 A Bia estava fazendo um trabalho no computador, clicou num botão no cantinho da janela e… <b>o trabalho sumiu da tela!</b></p><p>🤔 Será que ela apagou tudo? <b>Onde o trabalho foi parar</b> e <b>como ela faz para ele voltar?</b></p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você está fazendo um trabalho e quer ver um vídeo <b>sem fechar</b> o trabalho. Qual botão da janela do trabalho você usa?", "opcoes": ["➖ Minimizar", "❌ Fechar", "⬜ Maximizar"], "certo": 0, "why": "<b>Minimizar</b> esconde a janela na barra de tarefas sem fechar: o trabalho continua lá, é só clicar no ícone dele para voltar. (Foi isso que aconteceu com a Bia!)"}, {"p": "Você digitou <b>Brasiu</b> em vez de <b>Brasil</b>, e o cursor está logo depois do <b>u</b>. Qual tecla apaga essa letra errada?", "opcoes": ["Backspace (⟵)", "Enter", "Caps Lock"], "certo": 0, "why": "O <b>Backspace</b> apaga a letra que está antes do cursor."}]}],
    lembra: [{"tipo": "escolha", "titulo": "🔍 O que você já sabe?", "enunciado": "<p>Primeiro dia de Informática! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉</p>", "perguntas": [{"p": "Para escrever uma letra <b>maiúscula</b>, qual tecla você segura?", "opcoes": ["Shift (⇧)", "Enter", "Barra de espaço"], "certo": 0, "why": "É o <b>Shift</b>: segurando ele, a letra sai maiúscula."}, {"p": "Para <b>abrir</b> uma pasta no computador, o que fazemos com o mouse?", "opcoes": ["Duplo clique (2 cliques rapidinhos)", "Clique com o botão direito", "Giramos a rodinha"], "certo": 0, "why": "O <b>duplo clique</b> abre pastas, arquivos e programas."}]}],
    pratica: [
      { tipo: "baloes", titulo: "Estoure os balões com o mouse", quantidade: 6,
        enunciado: "<p>Mexa o <strong>mouse</strong> até cada balão e dê um <strong>clique</strong>. 🎈</p>",
        explicacao: "O <strong>clique</strong> (apertar 1 vez o botão esquerdo) escolhe e aperta botões." },
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Jogos", itens: ["Fotos", "Jogos", "Músicas"],
        enunciado: "<p>Dê <strong>dois cliques rapidinhos</strong> na pasta <strong>Jogos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas, arquivos e programas." },
      { id: "m1-sim-janela", tipo: "sim_pc", titulo: "🖥️ No computador: abra a pasta e feche a janela",
        enunciado: "<p>Treine no computador de mentira. O <strong>Bit</strong> diz o que fazer, um passo de cada vez.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Jogos", tipo: "pasta" }],
        pastas: { "Jogos": [{ nome: "xadrez", ext: "exe" }, { nome: "quebra-cabeca", ext: "exe" }] },
        passos: [
          { faca: "Abra a pasta <b>Jogos</b> com <b>dois cliques rapidinhos</b>.", ok: "duplo:ic:Jogos", onde: "ic:Jogos" },
          { faca: "Aumente a janela: clique no <b>quadradinho ☐</b> (Maximizar), lá em cima à direita.", ok: "max:jan:exp", onde: "jan:exp:max" },
          { faca: "Agora feche a janela no <b>X</b>.", ok: "fechar:jan:exp", onde: "jan:exp:fechar" }
        ],
        fimMsg: "Abriu, maximizou e fechou. Muito bem!",
        explicacao: "Dois cliques abrem. ☐ aumenta a janela. X fecha." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que cada ação do mouse faz?",
        enunciado: "<p>Clique na ação e depois no que ela faz. A resposta está na tabela <strong>Ação do mouse</strong>.</p>",
        pares: [
          { a: "Clique", b: "Escolher um ícone ou apertar um botão" },
          { a: "Duplo clique", b: "Abrir pastas e programas" },
          { a: "Rolar a rodinha", b: "Subir e descer a página" }],
        explicacao: "Clique escolhe, duplo clique abre e a rodinha sobe e desce a página." },

      { tipo: "escolha", titulo: "Passo 2 · Qual tecla?",
        perguntas: [
          { p: "⟵ Qual tecla apaga a letra antes do cursor?", opcoes: ["Backspace", "Enter", "Shift"], certo: 0 },
          { p: "⇧ Segurando qual tecla a letra sai maiúscula?", opcoes: ["Enter", "Shift", "Barra de espaço"], certo: 1 }],
        explicacao: "<strong>Backspace</strong> apaga a letra antes do cursor. Segurando <strong>Shift</strong>, a letra sai maiúscula." },

      { tipo: "ligar", titulo: "Passo 3 · Os botões da janela",
        enunciado: "<p>Ligue cada botão ao que ele faz. Veja a tabela <strong>Botão · Nome · O que faz</strong>.</p>",
        pares: [
          { a: "➖ Minimizar", b: "Esconde a janela na barra de tarefas" },
          { a: "⬜ Maximizar", b: "A janela ocupa a tela toda" },
          { a: "❌ Fechar", b: "Fecha a janela e o programa" }],
        explicacao: "➖ esconde lá embaixo, ⬜ ocupa a tela toda e ❌ fecha." },

      { tipo: "escolha", titulo: "Passo 4 · A janela sumiu!",
        perguntas: [
          { p: "🪟 Você clicou em ➖ e a janela sumiu. Como ela volta?", opcoes: ["Clico no ícone dela na barra de tarefas", "Desligo o computador", "Aperto Backspace"], certo: 0 }],
        explicacao: "A janela minimizada <strong>não sumiu</strong>: está na <strong>barra de tarefas</strong>. Um clique no ícone dela e ela volta." }
    ],
    vf: [{ v: true }, { v: false, why: "O ❌ <strong>fecha</strong> o programa. Quem esconde na barra de tarefas é o ➖ (minimizar)." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>🛒 No caixa do mercado, a moça passa o pacote de arroz no <b>leitor de código de barras</b>, ouve um “bip” e o preço aparece na tela.</p><p>🤔 O que aconteceu <b>dentro</b> do computador do caixa entre o “bip” e o preço aparecer? Quem <b>recebeu</b>, quem <b>pensou</b> e quem <b>mostrou</b>?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Na calculadora do celular, você digita <b>7 + 8</b>. Essa parte é…", "opcoes": ["Entrada", "Processamento", "Saída"], "certo": 0, "why": "Digitar é dar informação ao aparelho: é a <b>entrada</b>."}, {"p": "Você fala “Ok, Google” e a resposta aparece na tela. Quem <b>entende</b> o pedido?", "opcoes": ["O processador (processamento)", "O microfone (entrada)", "A tela (saída)"], "certo": 0, "why": "Quem entende e faz as contas é o <b>processador</b>: é o processamento."}]}],
    pratica: [
      { tipo: "rota", titulo: "A calculadora por dentro",
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong> em que a calculadora faz a conta 2 + 3.</p>",
        etapas: [
          { ic: "⌨️", t: "Você digita 2 + 3 (entrada)", dica: "Primeiro a informação entra." },
          { ic: "🧠", t: "O processador faz a conta (processamento)" },
          { ic: "🖥️", t: "Aparece 5 na tela (saída)", dica: "O resultado aparece por último." }],
        okMsg: "Entrada → processamento → saída! 🔄",
        explicacao: "Primeiro <strong>entra</strong>, depois o computador <strong>pensa</strong>, por último <strong>mostra</strong>." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Entrada ou saída?",
        categorias: [{ id: "E", rot: "Entrada", ic: "⌨️", desc: "recebe o que você manda" }, { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" },
          { t: "Microfone", ic: "🎤", c: "E" },
          { t: "Monitor (a tela)", ic: "🖥️", c: "S" },
          { t: "Impressora", ic: "🖨️", c: "S" }],
        explicacao: "Teclado e microfone <strong>mandam</strong> (entrada). Monitor e impressora <strong>mostram</strong> (saída)." },

      { tipo: "escolha", titulo: "Passo 2 · Quem faz o quê?",
        perguntas: [
          { p: "🧠 Qual peça faz as contas?", opcoes: ["O processador (CPU)", "A caixa de som", "O mouse"], certo: 0 },
          { p: "💾 Qual peça guarda os arquivos para depois?", opcoes: ["O pen drive", "O microfone", "O monitor"], certo: 0 }],
        explicacao: "O <strong>processador (CPU)</strong> faz as contas. O <strong>pen drive</strong> é armazenamento: guarda para depois." },

      { tipo: "ordenar", titulo: "Passo 3 · Arrume as etapas",
        itens: ["⌨️ Entrada", "🧠 Processamento", "🖥️ Saída"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer). O que vem primeiro?</p>",
        explicacao: "Entrada → processamento → saída." },

      { tipo: "escolha", titulo: "Passo 4 · No caixa do mercado",
        perguntas: [
          { p: "🛒 O leitor do código de barras é:", opcoes: ["Entrada", "Saída"], certo: 0 },
          { p: "📱 A tela de toque do celular é:", opcoes: ["Só entrada", "Entrada e saída"], certo: 1 }],
        explicacao: "O leitor <strong>manda</strong> o código para o computador: entrada. A tela de toque recebe o dedo e mostra a imagem: <strong>entrada e saída</strong>." }
    ],
    vf: [{ v: false, why: "O microfone <strong>manda</strong> a sua voz para o computador: é de entrada." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>📱 O celular do Davi está com dois problemas: o <b>jogo fecha sozinho</b> toda hora, e a <b>tela está rachada</b>.</p><p>🤔 Um desses problemas é de <b>hardware</b> e o outro é de <b>software</b>. Qual é qual? E quem resolve cada um?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "O aplicativo de mensagens travou e fechou sozinho. Esse problema é de…", "opcoes": ["Software", "Hardware", "Os dois ao mesmo tempo"], "certo": 0, "why": "O aplicativo é um programa: é <b>software</b>."}, {"p": "O cabo do carregador rompeu. Esse problema é de…", "opcoes": ["Hardware", "Software", "Sistema operacional"], "certo": 0, "why": "O cabo é uma peça física, dá para tocar: é <b>hardware</b>."}]}],
    pratica: [
      { tipo: "mensagens", titulo: "O celular deu problema: peça ou programa?", app: "🔧 Oficina do celular",
        botoes: [{ id: "H", rot: "🔧 Hardware (peça)" }, { id: "S", rot: "💿 Software (programa)" }],
        enunciado: "<p>Leia cada problema e clique na resposta.</p>",
        itens: [
          { de: "Ana", t: "A tela do meu celular quebrou 😢", c: "H" },
          { de: "Caio", t: "O aplicativo do jogo travou e fechou sozinho", c: "S", why: "Aplicativo é programa: é software." },
          { de: "Bia", t: "O cabo do carregador partiu", c: "H" }],
        okMsg: "Peça quebrada é hardware; programa travado é software. 👍",
        explicacao: "Tela e cabo são peças: <strong>hardware</strong>. Aplicativo travado é programa: <strong>software</strong>." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Hardware ou software?",
        categorias: [{ id: "H", rot: "Hardware", ic: "🔧", desc: "peça que dá para tocar" }, { id: "S", rot: "Software", ic: "💿", desc: "programa" }],
        itens: [
          { t: "Mouse", ic: "🖱️", c: "H" },
          { t: "Pen drive", ic: "💾", c: "H" },
          { t: "Navegador", ic: "🌐", c: "S" },
          { t: "Jogo", ic: "🎮", c: "S" }],
        explicacao: "Mouse e pen drive dá para tocar: <strong>hardware</strong>. Navegador e jogo são programas: <strong>software</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Quem manda em tudo?",
        perguntas: [
          { p: "⚙️ Qual é um sistema operacional?", opcoes: ["Windows", "Calculadora", "Teclado"], certo: 0 },
          { p: "📱 O Android é:", opcoes: ["Um sistema operacional de celular", "Uma peça do celular", "Um jogo"], certo: 0 }],
        explicacao: "<strong>Windows</strong> (computador) e <strong>Android</strong> (celular) são sistemas operacionais: comandam tudo." },

      { tipo: "ligar", titulo: "Passo 3 · Cada aplicativo e a sua tarefa",
        pares: [
          { a: "Navegador", b: "Abre sites" },
          { a: "Calculadora", b: "Faz contas" },
          { a: "Jogo", b: "Diverte" }],
        explicacao: "Cada aplicativo faz uma tarefa: o navegador abre sites e a calculadora faz contas." },

      { tipo: "escolha", titulo: "Passo 4 · Este portal",
        perguntas: [
          { p: "🌐 Este portal abre dentro de qual aplicativo?", opcoes: ["No navegador", "Na calculadora", "No mouse"], certo: 0 }],
        explicacao: "O <strong>navegador</strong> é o aplicativo que abre os sites, como este portal." }
    ],
    vf: [{ v: true }, { v: false, why: "O navegador é um programa: é <strong>software</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>📂 A Lara salvou o trabalho de Ciências, mas agora <b>não acha</b> o arquivo. Ela lembra só que era uma <b>foto</b> e que estava escrito “ciencias” no nome.</p><p>🤔 Como ela pode descobrir <b>onde</b> o arquivo foi parar e <b>que tipo</b> de arquivo ele é?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você baixou o boletim em PDF pelo navegador. Em que pasta ele costuma ir parar?", "opcoes": ["Downloads", "Área de trabalho", "Lixeira"], "certo": 0, "why": "O que você baixa da internet vai para a pasta <b>Downloads</b>."}, {"p": "O arquivo se chama <b>festa.jpg</b>. Que tipo de arquivo ele é?", "opcoes": ["Imagem (foto)", "Música", "Texto"], "certo": 0, "why": "A extensão <b>.jpg</b> mostra que é uma imagem."}]}],
    pratica: [
      { tipo: "explorador_pastas", titulo: "Guarde cada arquivo na pasta certa",
        enunciado: "<p>Clique no arquivo e depois na pasta certa. Olhe o final do nome (a <strong>extensão</strong>).</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }],
        arquivos: [{ nome: "🖼️ passeio.jpg", p: "fotos" }, { nome: "🎵 forro.mp3", p: "musicas" }, { nome: "🖼️ meu-time.jpg", p: "fotos" }, { nome: "🎵 hino.mp3", p: "musicas" }],
        explicacao: ".jpg é foto e vai para Fotos. .mp3 é música e vai para Músicas." },
      { id: "m4-sim-pasta", tipo: "sim_pc", titulo: "📁 No computador: crie uma pasta e guarde um arquivo",
        enunciado: "<p>No computador de mentira, crie a sua pasta e guarde um arquivo nela. O <strong>Bit</strong> ajuda.</p>",
        abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "redacao", ext: "docx" }] },
        passos: [
          { faca: "Clique com o <b>botão direito</b> na parte branca e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito embaixo do arquivo, onde está vazio." },
          { faca: "Digite <b>Escola</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>escola$/" },
          { faca: "Arraste a <b>redacao</b> para dentro da pasta <b>Escola</b>.", ok: "mover:arq:redacao*>Escola", onde: "arq:redacao" }
        ],
        fimMsg: "Pasta criada e arquivo guardado!",
        explicacao: "Botão direito › Novo › Pasta cria a pasta. Arrastar guarda o arquivo nela." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Cada extensão e o seu tipo",
        enunciado: "<p>Veja a tabela <strong>Extensão · Tipo de arquivo</strong>.</p>",
        pares: [
          { a: ".jpg", b: "Imagem (foto)" },
          { a: ".mp3", b: "Música" },
          { a: ".txt", b: "Texto" },
          { a: ".mp4", b: "Vídeo" }],
        explicacao: ".jpg foto, .mp3 música, .txt texto, .mp4 vídeo." },

      { tipo: "ordenar", titulo: "Passo 2 · Arrume os passos para salvar",
        itens: ["📄 Arquivo → Salvar como", "📂 Escolher onde guardar", "✏️ Dar um nome bom", "💾 Clicar em Salvar"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>. Primeiro <strong>Arquivo → Salvar como</strong>.</p>",
        explicacao: "Salvar como → onde guardar → nome → Salvar." },

      { tipo: "escolha", titulo: "Passo 3 · Onde está o arquivo?",
        perguntas: [
          { p: "🗺️ Documentos › Escola › Informática › trabalho.docx. Em que pasta está o trabalho?", opcoes: ["Informática", "Fotos", "Músicas"], certo: 0 },
          { p: "⌨️ Qual atalho salva o trabalho?", opcoes: ["Ctrl + S", "Ctrl + Z", "Enter"], certo: 0 }],
        explicacao: "O <strong>caminho</strong> mostra que o trabalho está em <strong>Informática</strong> (a última pasta antes do nome). <strong>Ctrl + S</strong> salva." },

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal", robo: {"digitar": "foto.jpg", "intro": "Olha como eu digito o nome de <b>outro</b> arquivo. O ponto separa o nome da extensão.", "paineis": [], "passos": []},
        enunciado: "<p>Digite na caixa o nome deste arquivo, com a extensão de texto: <strong>meu-trabalho.txt</strong></p>",
        linhas: [["Digite aqui:", { r: "meu-trabalho.txt", tipo: "letras", w: 16, ph: "meu-trabalho.txt", dica: "Digite: meu-trabalho.txt (o .txt é a extensão de texto)." }]],
        explicacao: "O nome é <strong>meu-trabalho</strong> e a extensão <strong>.txt</strong> mostra que é um texto." }
    ],
    vf: [{ v: false, why: ".mp3 é <strong>música</strong>. Foto é .jpg." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>📝 Na ficha de cadastro do clube de futebol, a Yara escreveu o <b>telefone</b> na caixinha de “idade” e a <b>idade</b> na caixinha de “telefone”.</p><p>🤔 Por que o computador <b>reclamou</b>? Telefone não é número?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "No cadastro da loja, o campo “Aceita receber ofertas?” só pode ser sim ou não. Que tipo de dado é?", "opcoes": ["Lógico (verdadeiro ou falso)", "Texto", "Data"], "certo": 0, "why": "Sim ou não é o tipo <b>lógico</b> (verdadeiro ou falso)."}, {"p": "O CEP <b>68505-000</b> é feito de algarismos. Que tipo de dado ele é?", "opcoes": ["Texto", "Número", "Lógico"], "certo": 0, "why": "Ninguém faz contas com CEP: ele é um nome feito de algarismos, então é <b>texto</b>."}]}],
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "O cadastro da loja", colunaItem: "Dado", colunaResp: "Tipo",
        enunciado: "<p>Escolha o tipo de cada dado do cadastro.</p>",
        categorias: [{ id: "T", rot: "Texto" }, { id: "N", rot: "Número" }],
        itens: [
          { t: "👤 Nome: Maria", c: "T" },
          { t: "🎂 Idade: 12", c: "N" },
          { t: "📞 Telefone: 94 99999-0000", c: "T", why: "Ninguém soma telefones: é texto." }],
        explicacao: "Nome é texto. Idade é número (dá para fazer conta). Telefone parece número, mas é texto." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Qual é o tipo do dado?",
        categorias: [{ id: "T", rot: "Texto", ic: "🔤", desc: "nomes" }, { id: "N", rot: "Número", ic: "🔢", desc: "para contas" }, { id: "I", rot: "Imagem", ic: "🖼️", desc: "fotos" }],
        itens: [
          { t: "“Rua das Flores”", ic: "🏠", c: "T" },
          { t: "150", ic: "🔢", c: "N" },
          { t: "Uma foto da turma", ic: "📸", c: "I" }],
        explicacao: "Nome de rua é texto, 150 é número e foto é imagem." },

      { tipo: "escolha", titulo: "Passo 2 · Sim ou não",
        perguntas: [
          { p: "✅ Um dado que só pode ser verdadeiro ou falso é:", opcoes: ["Lógico", "Vídeo", "Data"], certo: 0 },
          { p: "📞 O número do telefone é:", opcoes: ["Texto", "Número para contas"], certo: 0 }],
        explicacao: "Dado <strong>lógico</strong> é sim ou não. O telefone é <strong>texto</strong>: ninguém soma telefones." },

      { tipo: "ligar", titulo: "Passo 3 · Lista ou tabela?",
        pares: [
          { a: "Lista", b: "Um dado depois do outro, em ordem" },
          { a: "Tabela", b: "Linhas e colunas" }],
        explicacao: "A <strong>lista</strong> é um dado depois do outro. A <strong>tabela</strong> tem linhas e colunas." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "🎵 A playlist de músicas é:", opcoes: ["Uma lista", "Uma tabela"], certo: 0 },
          { p: "🏆 A tabela do campeonato tem:", opcoes: ["Linhas e colunas", "Só uma palavra"], certo: 0 }],
        explicacao: "A playlist é uma <strong>lista</strong>. A tabela do campeonato tem <strong>linhas</strong> (os times) e <strong>colunas</strong> (pontos, gols)." }
    ],
    vf: [{ v: true }, { v: false, why: "Ninguém soma telefones: o telefone é <strong>texto</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 6 ======================= */
  m6: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>💬 No grupo da turma, alguém escreveu <b>“VOCÊS SÃO MUITO CHATOS!!!”</b>, e outro colega postou uma foto de um amigo <b>sem pedir</b>.</p><p>🤔 O que deu errado nessas duas mensagens? E o que fazer quando algo ruim acontece na internet?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Um desconhecido no chat do jogo pergunta o nome da sua escola. O que você faz?", "opcoes": ["Não responde e conta para um adulto de confiança", "Responde, porque é só o nome da escola", "Passa também o seu telefone"], "certo": 0, "why": "O nome da escola é <b>dado pessoal</b>: não se passa para desconhecidos. Conte para um adulto de confiança."}, {"p": "Você quer postar uma foto da festa em que aparecem os seus amigos. O que fazer antes?", "opcoes": ["Pedir permissão a eles", "Postar e avisar depois", "Postar só no grupo da escola"], "certo": 0, "why": "A imagem é da pessoa: <b>peça permissão</b> antes de postar."}]}],
    pratica: [
      { tipo: "mensagens", titulo: "No grupo da turma: respeito ou não?", app: "💬 Grupo do 6º ano",
        botoes: [{ id: "R", rot: "🙂 Com respeito" }, { id: "N", rot: "🚫 Sem respeito" }],
        enunciado: "<p>Leia cada mensagem e clique na resposta.</p>",
        itens: [
          { de: "Lucas", t: "Parabéns pelo trabalho, Maria! 👏", c: "R" },
          { de: "Davi", t: "VOCÊS SÃO TODOS CHATOS!!!", c: "N", why: "Tudo em maiúsculas parece grito, e ainda ofende." },
          { de: "Bia", t: "Posso postar a foto em que você aparece?", c: "R" }],
        okMsg: "Você sabe o que é netiqueta! 🙂",
        explicacao: "Elogiar e pedir permissão é respeito. Escrever tudo em MAIÚSCULAS parece grito." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Netiqueta ou não?",
        categorias: [{ id: "S", rot: "É netiqueta", ic: "🙂", desc: "boa educação" }, { id: "N", rot: "Não é", ic: "🚫", desc: "falta de educação" }],
        itens: [
          { t: "Falar com respeito", ic: "💬", c: "S" },
          { t: "Pedir permissão antes de postar foto", ic: "📸", c: "S" },
          { t: "Escrever TUDO EM MAIÚSCULAS", ic: "🔠", c: "N" },
          { t: "Passar a senha para o amigo", ic: "🔑", c: "N" }],
        explicacao: "Respeito e permissão são netiqueta. Maiúsculas parecem grito, e a senha é só sua." },

      { tipo: "sinais", titulo: "Passo 2 · O que NÃO se passa para desconhecidos?",
        opcoes: [
          { t: "Endereço de casa", certo: true }, { t: "Senha", certo: true }, { t: "Telefone", certo: true },
          { t: "A cor de que eu mais gosto", certo: false, why: "Não mostra quem você é nem onde você mora." }],
        dicas: ["Dados pessoais mostram quem você é ou onde você mora."],
        explicacao: "Endereço, senha e telefone são <strong>dados pessoais</strong>: não se passam para desconhecidos." },

      { tipo: "escolha", titulo: "Passo 3 · Perigo!",
        perguntas: [
          { p: "⚠️ Um desconhecido pede a sua foto e diz para guardar segredo. O que eu faço?", opcoes: ["Paro a conversa e conto a um adulto de confiança", "Mando a foto", "Guardo segredo"], certo: 0 }],
        explicacao: "Desconhecido pedindo foto ou segredo é <strong>perigo</strong>: pare e conte a um adulto de confiança." },

      { tipo: "escolha", titulo: "Passo 4 · Quem é adulto de confiança?",
        perguntas: [
          { p: "🙋 Qual destes é um adulto de confiança?", opcoes: ["O professor", "Um desconhecido do jogo on-line", "Um perfil sem foto"], certo: 0 }],
        explicacao: "Pai, mãe, responsável e <strong>professor</strong> são adultos de confiança: cuidam de você." }
    ],
    vf: [{ v: true }, { v: false, why: "A senha é como a chave de casa: é <strong>só sua</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 7 (extra) ======================= */
  m7: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>⌨️ O Kauã digita com <b>um dedo só</b>, olhando para o teclado o tempo todo. A Bia usa <b>as duas mãos</b> e quase não olha.</p><p>🤔 Por que a Bia termina antes? E como ela acha as teclas <b>sem olhar</b>?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você precisa escrever <b>São Paulo</b>. Como sai o <b>ã</b> no teclado brasileiro (ABNT2)?", "opcoes": ["Aperta o til (~) e depois a letra a", "Aperta a letra a e depois o til", "Segura o Shift e aperta a"], "certo": 0, "why": "No ABNT2, o acento vem primeiro: <b>til (~)</b> e depois a vogal."}, {"p": "Para achar a posição certa das mãos sem olhar, você procura…", "opcoes": ["O risquinho nas teclas F e J", "A tecla Enter", "A barra de espaço"], "certo": 0, "why": "As teclas <b>F e J</b> têm um risquinho em alto-relevo para guiar os indicadores."}]}],
    pratica: [
      { tipo: "tabela", titulo: "Aquecimento: a fileira base", robo: {"digitar": "fdsa jklç", "intro": "Olha como eu faço: os indicadores ficam no <b>F</b> e no <b>J</b> (as teclas com o risquinho).", "paineis": [], "passos": []},
        enunciado: "<p>Ponha os dedos na fileira base e digite: <strong>asdf jklç</strong></p>",
        linhas: [["Digite aqui:", { r: "asdf jklç", exato: true, w: 12, ph: "asdf jklç", dica: "Os indicadores ficam no F e no J (os do risquinho)." }]],
        explicacao: "A fileira base é <strong>A S D F</strong> (mão esquerda) e <strong>J K L Ç</strong> (mão direita)." },
      { id: "m7-sim-acento", tipo: "sim_pc", titulo: "⌨️ No computador: digite com acento",
        enunciado: "<p>Digite no Bloco de Notas de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["notas"],
        passos: [
          { faca: "Digite: <b>Eu sou da escola.</b> (com E maiúsculo: segure <b>Shift</b> e aperte E)", ok: { estado: "notas", texto: "Eu sou da escola." }, onde: "notas:texto" },
          { faca: "Aperte <b>Enter</b> e digite: <b>Você é legal.</b> (o <b>é</b>: aperte o acento <b>´</b>, solte e aperte <b>e</b>)", ok: { estado: "notas", texto: "Eu sou da escola.\nVocê é legal." }, dica: "O ê de Você: Shift + a tecla do ~, depois e." }
        ],
        fimMsg: "Maiúscula e acento certinhos!",
        explicacao: "Shift + letra = maiúscula. Primeiro o acento, depois a letra." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O risquinho",
        perguntas: [
          { p: "🔎 Quais teclas têm o risquinho?", opcoes: ["F e J", "A e L", "Enter e Shift"], certo: 0 },
          { p: "👍 Onde ficam os polegares?", opcoes: ["Na barra de espaço", "No Enter"], certo: 0 }],
        explicacao: "<strong>F</strong> e <strong>J</strong> têm o risquinho. Os polegares ficam na <strong>barra de espaço</strong>." },

      { tipo: "ordenar", titulo: "Passo 2 · Como escrever “é”",
        itens: ["1º Aperto a tecla do acento ( ´ )", "2º Aperto a letra e"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>. O acento vem antes ou depois?</p>",
        explicacao: "No teclado brasileiro, o <strong>acento vem antes</strong> da letra." },

      { tipo: "tabela", titulo: "Passo 3 · Digite com maiúscula", robo: {"digitar": "Pedro", "intro": "Olha como eu digito <b>outro</b> nome: segurando o Shift só na primeira letra.", "paineis": [], "passos": []},
        enunciado: "<p>Segure <strong>Shift</strong> para a primeira letra e digite: <strong>Maria</strong></p>",
        linhas: [["Digite aqui:", { r: "Maria", exato: true, w: 10, ph: "Maria", dica: "Segure Shift e aperte M. Depois digite aria." }]],
        explicacao: "Shift + M faz o <strong>M</strong> maiúsculo." },

      { tipo: "tabela", titulo: "Passo 4 · Digite com acento", robo: {"digitar": "pé", "intro": "Olha como eu digito <b>outra</b> palavra: primeiro o acento, depois a letra.", "paineis": [], "passos": []},
        enunciado: "<p>Digite: <strong>café</strong> (acento antes do e) e <strong>pão</strong> (til antes do a).</p>",
        linhas: [["café", { r: "café", exato: true, w: 8, ph: "café", dica: "c, a, f, depois a tecla ´ e por último o e." }],
          ["pão", { r: "pão", exato: true, w: 8, ph: "pão", dica: "p, depois a tecla ~ e o a, por último o o." }]],
        explicacao: "Acento agudo ( ´ ) antes do <strong>e</strong> faz é. Til ( ~ ) antes do <strong>a</strong> faz ã." }
    ],
    vf: [{ v: true }, { v: false, why: "É ao contrário: primeiro o <strong>acento</strong>, depois a letra." }, { v: true }]
  },

  /* ======================= MISSÃO 8 (extra) ======================= */
  m8: {
    /* 🌀 modelo em espiral na Trilha (20/11/2026): gancho, "Onde eu uso" prático com 2 situações (copiados da apostila da turma) */
    gancho: {"html": "<p>⏳ A Lara está copiando <b>à mão</b>, letra por letra, um texto enorme da tela para o trabalho. O Kauã olha e diz: “Dá para fazer isso em <b>3 segundos</b>!”</p><p>🤔 Que mágica é essa? Quais teclas o Kauã vai apertar?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você vai pagar com PIX e precisa colocar um código enorme. O que evita erro de digitação?", "opcoes": ["Copiar (Ctrl + C) e colar (Ctrl + V)", "Digitar o código devagar", "Tirar um print"], "certo": 0, "why": "Copiar e colar não erra nenhuma letra: <b>Ctrl + C</b> e depois <b>Ctrl + V</b>."}, {"p": "Você apagou sem querer um parágrafo do trabalho. Qual atalho traz ele de volta?", "opcoes": ["Ctrl + Z", "Ctrl + S", "Ctrl + A"], "certo": 0, "why": "<b>Ctrl + Z</b> desfaz o último passo."}]}],
    pratica: [
      { tipo: "rota", titulo: "Copie e cole uma palavra",
        enunciado: "<p>Clique nos passos <strong>na ordem</strong> para copiar uma palavra e colar em outro lugar.</p>",
        etapas: [
          { ic: "🖱️", t: "Selecionar a palavra" },
          { ic: "📋", t: "Ctrl + C (copiar)" },
          { ic: "📍", t: "Clicar no lugar novo" },
          { ic: "📌", t: "Ctrl + V (colar)", dica: "Colar vem por último." }],
        okMsg: "Copiou e colou! ⚡",
        explicacao: "Selecionar → <strong>Ctrl + C</strong> → clicar no lugar novo → <strong>Ctrl + V</strong>." },
      { id: "m8-sim-atalhos", tipo: "sim_pc", titulo: "⚡ No computador: copiar e colar com atalhos",
        enunciado: "<p>Use os atalhos no Bloco de Notas de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["notas"], notas: "Bom dia!",
        passos: [
          { faca: "Clique no texto e aperte <b>Ctrl + A</b> para selecionar tudo.", ok: "atalho:Ctrl+A", onde: "notas:texto" },
          { faca: "Aperte <b>Ctrl + C</b> para copiar.", ok: "atalho:Ctrl+C" },
          { faca: "Aperte a seta <b>→</b>, depois <b>Enter</b> e <b>Ctrl + V</b> para colar.", ok: { estado: "notas", texto: "Bom dia!\nBom dia!" } }
        ],
        fimMsg: "Ctrl + A, Ctrl + C e Ctrl + V: você copiou e colou!",
        explicacao: "Ctrl + A seleciona tudo, Ctrl + C copia, Ctrl + V cola." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Cada atalho e o que ele faz",
        pares: [
          { a: "Ctrl + C", b: "Copia" },
          { a: "Ctrl + V", b: "Cola" },
          { a: "Ctrl + Z", b: "Desfaz" },
          { a: "Ctrl + S", b: "Salva" }],
        explicacao: "C copia, V cola, Z desfaz e S salva." },

      { tipo: "escolha", titulo: "Passo 2 · Ops!",
        perguntas: [
          { p: "😱 Apaguei uma frase sem querer. Qual atalho volta?", opcoes: ["Ctrl + Z", "Ctrl + C", "Ctrl + S"], certo: 0 }],
        explicacao: "<strong>Ctrl + Z</strong> desfaz o último passo." },

      { tipo: "escolha", titulo: "Passo 3 · Copiar ou recortar?",
        perguntas: [
          { p: "📄 Qual deixa o original no lugar?", opcoes: ["Copiar", "Recortar"], certo: 0 }],
        explicacao: "<strong>Copiar</strong> deixa o original. <strong>Recortar</strong> (Ctrl + X) tira do lugar." },

      { tipo: "escolha", titulo: "Passo 4 · Código do PIX",
        perguntas: [
          { p: "💸 Para não errar o código do PIX, o melhor é:", opcoes: ["Copiar e colar", "Digitar tudo de cabeça"], certo: 0 }],
        explicacao: "Copiar e colar evita erro de digitação." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Recortar <strong>tira</strong> do lugar. Quem deixa o original é copiar." }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "Para abrir uma pasta, eu dou:", opcoes: ["Duplo clique", "Clique direito"], certo: 0 }], explicacao: "Para abrir uma pasta, eu dou: duplo clique." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "O teclado é de:", opcoes: ["Entrada", "Saída"], certo: 0 }], explicacao: "O teclado manda informação: é de entrada." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "O mouse é:", opcoes: ["Hardware", "Software"], certo: 0 }], explicacao: "O mouse é uma peça: hardware." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "A extensão .jpg é de:", opcoes: ["Foto", "Música"], certo: 0 }], explicacao: "A extensão .jpg é de foto." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Responda", perguntas: [{ p: "A idade é um dado do tipo:", opcoes: ["Número", "Imagem"], certo: 0 }], explicacao: "A idade serve para contas: é número." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Responda", perguntas: [{ p: "A senha eu passo para:", opcoes: ["Ninguém", "O melhor amigo"], certo: 0 }], explicacao: "A senha é só sua: não passo para ninguém." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Responda", perguntas: [{ p: "Para a letra maiúscula, seguro:", opcoes: ["Shift", "Enter"], certo: 0 }], explicacao: "Shift + letra faz maiúscula." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Responda", perguntas: [{ p: "Ctrl + Z serve para:", opcoes: ["Desfazer", "Copiar"], certo: 0 }], explicacao: "Ctrl + Z desfaz o último passo." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-1bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Mouse, teclado e janelas", perguntas: [{"p": "Para abrir uma pasta, eu dou:", "opcoes": ["Duplo clique", "Clique direito"], "certo": 0}, {"p": "Qual botão fecha a janela?", "opcoes": ["➖ Minimizar", "❌ Fechar"], "certo": 1}],
      explicacao: "Para abrir uma pasta, eu dou: → <strong>Duplo clique</strong> · Qual botão fecha a janela? → <strong>❌ Fechar</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Entrada e saída", perguntas: [{"p": "O mouse é de:", "opcoes": ["Entrada", "Saída"], "certo": 0}, {"p": "O monitor é de:", "opcoes": ["Entrada", "Saída"], "certo": 1}],
      explicacao: "O mouse é de: → <strong>Entrada</strong> · O monitor é de: → <strong>Saída</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Hardware e software", perguntas: [{"p": "O teclado é:", "opcoes": ["Hardware", "Software"], "certo": 0}, {"p": "A calculadora do celular é:", "opcoes": ["Hardware", "Software"], "certo": 1}],
      explicacao: "O teclado é: → <strong>Hardware</strong> · A calculadora do celular é: → <strong>Software</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Pastas e arquivos", perguntas: [{"p": "A extensão .mp3 é de:", "opcoes": ["Música", "Foto"], "certo": 0}, {"p": "Qual atalho salva?", "opcoes": ["Ctrl + Z", "Ctrl + S"], "certo": 1}],
      explicacao: "A extensão .mp3 é de: → <strong>Música</strong> · Qual atalho salva? → <strong>Ctrl + S</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Tipos de dados", perguntas: [{"p": "O nome “Maria” é:", "opcoes": ["Texto", "Número"], "certo": 0}, {"p": "A lista de compras é:", "opcoes": ["Um vídeo", "Uma lista"], "certo": 1}],
      explicacao: "O nome “Maria” é: → <strong>Texto</strong> · A lista de compras é: → <strong>Uma lista</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Boa convivência na rede", perguntas: [{"p": "Escrever TUDO EM MAIÚSCULAS parece:", "opcoes": ["Grito", "Elogio"], "certo": 0}, {"p": "A senha eu passo para:", "opcoes": ["O melhor amigo", "Ninguém"], "certo": 1}],
      explicacao: "Escrever TUDO EM MAIÚSCULAS parece: → <strong>Grito</strong> · A senha eu passo para: → <strong>Ninguém</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Digitação", perguntas: [{"p": "Quais teclas têm o risquinho?", "opcoes": ["F e J", "A e L"], "certo": 0}, {"p": "Para a letra maiúscula, seguro:", "opcoes": ["Enter", "Shift"], "certo": 1}],
      explicacao: "Quais teclas têm o risquinho? → <strong>F e J</strong> · Para a letra maiúscula, seguro: → <strong>Shift</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Atalhos", perguntas: [{"p": "Ctrl + C serve para:", "opcoes": ["Copiar", "Colar"], "certo": 0}, {"p": "Ctrl + V serve para:", "opcoes": ["Desfazer", "Colar"], "certo": 1}],
      explicacao: "Ctrl + C serve para: → <strong>Copiar</strong> · Ctrl + V serve para: → <strong>Colar</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();
