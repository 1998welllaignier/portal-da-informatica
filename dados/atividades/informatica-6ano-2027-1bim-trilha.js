/* ============================================================
   ATIVIDADES — Informática 6º ano — 1º bimestre de 2027 · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação (sempre aqui no portal).
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-2027-1bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "baloes", titulo: "Estoure os balões com o mouse", quantidade: 6,
        enunciado: "<p>Mexa o <strong>mouse</strong> até cada balão e dê um <strong>clique</strong>. 🎈</p>",
        explicacao: "O <strong>clique</strong> (apertar 1 vez o botão esquerdo) escolhe e aperta botões." },
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Jogos", itens: ["Fotos", "Jogos", "Músicas"],
        enunciado: "<p>Dê <strong>dois cliques rapidinhos</strong> na pasta <strong>Jogos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas, arquivos e programas." }
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
    pratica: [
      { tipo: "explorador_pastas", titulo: "Guarde cada arquivo na pasta certa",
        enunciado: "<p>Clique no arquivo e depois na pasta certa. Olhe o final do nome (a <strong>extensão</strong>).</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }],
        arquivos: [{ nome: "🖼️ passeio.jpg", p: "fotos" }, { nome: "🎵 forro.mp3", p: "musicas" }, { nome: "🖼️ meu-time.jpg", p: "fotos" }, { nome: "🎵 hino.mp3", p: "musicas" }],
        explicacao: ".jpg é foto e vai para Fotos. .mp3 é música e vai para Músicas." }
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

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa o nome deste arquivo, com a extensão de texto: <strong>meu-trabalho.txt</strong></p>",
        linhas: [["Digite aqui:", { r: "meu-trabalho.txt", tipo: "letras", w: 16, ph: "meu-trabalho.txt", dica: "Digite: meu-trabalho.txt (o .txt é a extensão de texto)." }]],
        explicacao: "O nome é <strong>meu-trabalho</strong> e a extensão <strong>.txt</strong> mostra que é um texto." }
    ],
    vf: [{ v: false, why: ".mp3 é <strong>música</strong>. Foto é .jpg." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
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
    pratica: [
      { tipo: "tabela", titulo: "Aquecimento: a fileira base",
        enunciado: "<p>Ponha os dedos na fileira base e digite: <strong>asdf jklç</strong></p>",
        linhas: [["Digite aqui:", { r: "asdf jklç", exato: true, w: 12, ph: "asdf jklç", dica: "Os indicadores ficam no F e no J (os do risquinho)." }]],
        explicacao: "A fileira base é <strong>A S D F</strong> (mão esquerda) e <strong>J K L Ç</strong> (mão direita)." }
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

      { tipo: "tabela", titulo: "Passo 3 · Digite com maiúscula",
        enunciado: "<p>Segure <strong>Shift</strong> para a primeira letra e digite: <strong>Maria</strong></p>",
        linhas: [["Digite aqui:", { r: "Maria", exato: true, w: 10, ph: "Maria", dica: "Segure Shift e aperte M. Depois digite aria." }]],
        explicacao: "Shift + M faz o <strong>M</strong> maiúsculo." },

      { tipo: "tabela", titulo: "Passo 4 · Digite com acento",
        enunciado: "<p>Digite: <strong>café</strong> (acento antes do e) e <strong>pão</strong> (til antes do a).</p>",
        linhas: [["café", { r: "café", exato: true, w: 8, ph: "café", dica: "c, a, f, depois a tecla ´ e por último o e." }],
          ["pão", { r: "pão", exato: true, w: 8, ph: "pão", dica: "p, depois a tecla ~ e o a, por último o o." }]],
        explicacao: "Acento agudo ( ´ ) antes do <strong>e</strong> faz é. Til ( ~ ) antes do <strong>a</strong> faz ã." }
    ],
    vf: [{ v: true }, { v: false, why: "É ao contrário: primeiro o <strong>acento</strong>, depois a letra." }, { v: true }]
  },

  /* ======================= MISSÃO 8 (extra) ======================= */
  m8: {
    pratica: [
      { tipo: "rota", titulo: "Copie e cole uma palavra",
        enunciado: "<p>Clique nos passos <strong>na ordem</strong> para copiar uma palavra e colar em outro lugar.</p>",
        etapas: [
          { ic: "🖱️", t: "Selecionar a palavra" },
          { ic: "📋", t: "Ctrl + C (copiar)" },
          { ic: "📍", t: "Clicar no lugar novo" },
          { ic: "📌", t: "Ctrl + V (colar)", dica: "Colar vem por último." }],
        okMsg: "Copiou e colou! ⚡",
        explicacao: "Selecionar → <strong>Ctrl + C</strong> → clicar no lugar novo → <strong>Ctrl + V</strong>." }
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
