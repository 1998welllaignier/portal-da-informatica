/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   Baseadas nas tarefas da apostila impressa.
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Trabalhos", itens: ["Fotos", "Músicas", "Trabalhos", "Vídeos"],
        enunciado: "<p>Na área de trabalho de mentira, dê um <strong>duplo clique</strong> (dois cliques rapidinhos) na pasta <strong>Trabalhos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas, arquivos e programas. Um clique só, seleciona." },
      { tipo: "explorador_pastas", titulo: "Organize os arquivos nas pastas certas",
        enunciado: "<p>Arraste cada arquivo para a pasta certa (ou clique no arquivo e depois na pasta). Olhe a <strong>extensão</strong>: o final depois do ponto. Depois clique em <strong>Verificar</strong>.</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "textos", nome: "Trabalhos", ic: "📝" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "feira-de-ciencias.jpg", p: "fotos" }, { nome: "time.jpg", p: "fotos" }, { nome: "forro.mp3", p: "musicas" }, { nome: "hino-nacional.mp3", p: "musicas" }, { nome: "redacao.docx", p: "textos" }, { nome: "pesquisa-historia.docx", p: "textos" }, { nome: "gol.mp4", p: "videos" }, { nome: "apresentacao.mp4", p: "videos" }],
        explicacao: "A extensão (.jpg, .mp3, .docx, .mp4) mostra o tipo do arquivo. Pastas organizadas = arquivo achado rapidinho!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Monte o computador: cada peça no seu papel",
        enunciado: "<p>Organize as peças nas 4 funções que você estudou no <strong>💡 Para começar</strong> (a tabela de Entrada, Processamento, Saída e Armazenamento).</p>",
        categorias: [
          { id: "E", rot: "Entrada", ic: "⌨️", desc: "recebe informações" },
          { id: "P", rot: "Processamento", ic: "🧠", desc: "faz os cálculos" },
          { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" },
          { id: "A", rot: "Armazenamento", ic: "💾", desc: "guarda os arquivos" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" }, { t: "Mouse", ic: "🖱️", c: "E" }, { t: "Microfone", ic: "🎙️", c: "E" },
          { t: "Processador (CPU)", ic: "🧠", c: "P", dica: "a CPU é o “cérebro”: ela processa." },
          { t: "Monitor", ic: "🖥️", c: "S" }, { t: "Caixa de som", ic: "🔊", c: "S" }, { t: "Impressora", ic: "🖨️", c: "S" },
          { t: "HD", ic: "🗄️", c: "A" }, { t: "SSD", ic: "💽", c: "A" }, { t: "Pen drive", ic: "💾", c: "A" }],
        dicas: ["Pergunte para cada peça: a informação <em>entra</em> no computador, <em>sai</em> dele ou fica <em>guardada</em>?", "HD, SSD e pen drive guardam o que foi salvo, mesmo com o computador desligado."],
        explicacao: "Entrada: teclado, mouse e microfone. Processamento: o processador (CPU, <em>Central Processing Unit</em>, Unidade Central de Processamento). Saída: monitor, caixa de som e impressora. Armazenamento: HD (<em>Hard Disk</em>, disco rígido), SSD (<em>Solid State Drive</em>, unidade de estado sólido) e pen drive." },

      { tipo: "classificar", modo: "tabela", titulo: "Qual ação do mouse eu uso?",
        colunaItem: "O que eu quero fazer", colunaResp: "Ação do mouse",
        categorias: [{ id: "D", cod: "2×", rot: "Duplo clique" }, { id: "A", cod: "↔", rot: "Arrastar" }, { id: "C", cod: "🖱️▸", rot: "Clique direito" }],
        itens: [
          { t: "Abrir a pasta com o meu nome", c: "D", why: "Duplo clique abre pastas e arquivos." },
          { t: "Levar o arquivo para dentro de outra pasta", c: "A", why: "Arrastar muda algo de lugar." },
          { t: "Criar uma pasta nova", c: "C", why: "O clique direito mostra mais opções, como Novo → Pasta." },
          { t: "Renomear um arquivo", c: "C", why: "Renomear também aparece no menu do clique direito." },
          { t: "Abrir de novo o arquivo “Sobre mim”", c: "D", why: "Duplo clique no arquivo abre o arquivo." }],
        dicas: ["Releia a tabela “Ação do mouse” em Para começar."],
        explicacao: "Duplo clique abre; arrastar muda de lugar; clique direito mostra mais opções (criar pasta, renomear, Propriedades)." },

      { tipo: "ordenar", titulo: "Em que ordem eu salvo um arquivo?",
        enunciado: "<p>Coloque os passos em ordem, do primeiro ao último.</p>",
        itens: ["Abrir o Bloco de Notas", "Escrever o meu texto", "Clicar em Arquivo → Salvar como", "Escolher a pasta onde vou guardar", "Digitar o nome do arquivo", "Clicar em Salvar"],
        dicas: ["Para salvar: escolha <strong>onde</strong> guardar, dê um <strong>nome</strong> e clique em <strong>Salvar</strong>.", "Você só pode salvar depois de escrever alguma coisa."],
        explicacao: "Para salvar escolhemos <strong>onde</strong> guardar, damos um <strong>nome</strong> e clicamos em <strong>Salvar</strong>. O atalho <strong>Ctrl + S</strong> faz o mesmo." },

      { tipo: "pc", titulo: "No computador: minha pasta e meu primeiro arquivo",
        programa: "Explorador de Arquivos e Bloco de Notas",
        passos: [
          "Abra o <strong>Explorador de Arquivos</strong> (ícone de pasta amarela). No local indicado pelo professor, clique com o botão direito → <strong>Novo</strong> → <strong>Pasta</strong> e dê o seu nome a ela.",
          "Abra o <strong>Bloco de Notas</strong> e escreva: seu nome, sua idade e o que você gosta de fazer.",
          "Clique em <strong>Arquivo → Salvar como</strong>, escolha a sua pasta e salve com o nome <strong>Sobre mim</strong>.",
          "Feche o Bloco de Notas, abra a sua pasta e dê duplo clique no arquivo para abri-lo de novo."],
        conferir: [
          { rot: "Qual é o <strong>nome do arquivo</strong> que aparece dentro da sua pasta?", ph: "Ex.: Sobre mim", gab: "Sobre mim", re: "^sobre\\s*mim(\\.txt)?$", dica: "Você salvou com o nome <strong>Sobre mim</strong>. Se não aparece assim, salve de novo com esse nome." },
          { rot: "Quando você deu <strong>duplo clique</strong> no arquivo, qual programa abriu?", ph: "Nome do programa", gab: "Bloco de Notas", re: "bloco\\s*de\\s*notas|notepad", dica: "É o mesmo programa em que você escreveu o texto." }],
        okMsg: "Pasta criada e arquivo salvo! Você sabe guardar e encontrar os seus arquivos." },
      { id: "m1-sim-pasta", opcional: true, tipo: "sim_pc", titulo: "🖥️ Simulador: crie a sua pasta e salve o seu primeiro arquivo",
        enunciado: "<p>Treine no <strong>computador de mentira</strong> o caminho completo: criar uma pasta, escrever no Bloco de Notas e salvar o arquivo dentro da pasta. O <strong>Bit</strong>, o seu ajudante, diz o que fazer e corrige na hora. Depois faça igualzinho no computador de verdade!</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        pastas: { "Documentos": [{ nome: "lista-de-chamada", ext: "txt" }] },
        passos: [
          { faca: "Abra o <b>Explorador de Arquivos</b>: clique na pastinha amarela 📁 da <b>barra de tarefas</b>, lá embaixo.", ok: ["clique:bar:exp", "abrir:app:exp"], onde: "bar:exp" },
          { faca: "No painel da esquerda, clique em <b>Documentos</b>.", ok: "abrir:pasta:Documentos", onde: "nav:Documentos" },
          { faca: "Clique com o <b>botão direito</b> num espaço vazio (a parte branca embaixo dos arquivos) e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito na parte branca, onde não tem nenhum arquivo. No menu: Novo › Pasta." },
          { faca: "Digite o nome <b>Meus trabalhos</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>meus trabalhos$/", dica: "Se o nome saiu errado: botão direito na pasta › Renomear." },
          { faca: "Agora abra o <b>Bloco de Notas</b>: clique no botão <b>Iniciar ⊞</b> e depois em <b>Bloco de Notas</b> 📝.", ok: "abrir:app:notas", onde: "bar:iniciar", dica: "O Iniciar é o ⊞ da barra de tarefas. Ele abre a lista de programas." },
          { faca: "Escreva uma frase sobre você começando com <b>Sobre mim:</b> (exemplo: <i>Sobre mim: eu gosto de futebol.</i>)", ok: { estado: "notas", texto: "Sobre mim:", contem: true }, onde: "notas:texto" },
          { faca: "Salve com <b>Ctrl + S</b>. Na janela <b>Salvar como</b>, escolha a pasta <b>Meus trabalhos</b>, dê o nome <b>sobre-mim</b> e clique em <b>Salvar</b>.", ok: { estado: "salvo", nome: "sobre-mim", pasta: "Meus trabalhos" }, erros: { "salvar:*": "Quase! Confira: o nome é <b>sobre-mim</b> e a pasta é <b>Meus trabalhos</b>. Aperte <b>Ctrl + S</b> e salve de novo." }, dica: "Ctrl + S abre a janela Salvar como. Em Pasta, escolha Meus trabalhos. Em Nome, digite sobre-mim." },
          { faca: "Para conferir, clique na pasta <b>Meus trabalhos</b>, no painel da esquerda do Explorador. O arquivo está lá?", ok: "abrir:pasta:Meus trabalhos", onde: "nav:Meus trabalhos", dica: "Clique no Explorador (barra de tarefas, 📁) e depois em Meus trabalhos, na lista da esquerda." },
        ],
        fimMsg: "Pasta criada, texto escrito e arquivo salvo no lugar certo. Agora faça o mesmo no computador da sala!",
        explicacao: "Para salvar um arquivo no lugar certo: crie a pasta (botão direito › Novo › Pasta), escreva no programa e use Ctrl + S (Salvar como), escolhendo a pasta e o nome." }
    ],
    desafio: [
      { tipo: "pc", titulo: "No computador: organizando em pastas",
        programa: "Explorador de Arquivos",
        passos: ["Dentro da sua pasta, crie as pastas <strong>Textos</strong> e <strong>Desenhos</strong>.", "Arraste o arquivo <strong>Sobre mim</strong> para a pasta Textos.", "Clique com o botão direito no arquivo → <strong>Propriedades</strong> e veja os metadados."],
        conferir: [
          { rot: "Dentro da sua pasta, quantas pastas existem agora?", ph: "Digite um número", gab: "2 (Textos e Desenhos)", re: "^(2|duas)$", dica: "Você criou a pasta Textos e a pasta Desenhos." },
          { rot: "Em qual pasta está agora o arquivo <strong>Sobre mim</strong>?", ph: "Nome da pasta", gab: "Textos", re: "^textos$", dica: "Você arrastou o arquivo para a pasta de textos." }],
        okMsg: "Arquivos organizados em pastas!" },
      { tipo: "tabela", titulo: "Anote os metadados do arquivo “Sobre mim”",
        enunciado: "<p>Copie o que aparece na janela <strong>Propriedades</strong> do arquivo (botão direito → Propriedades).</p>",
        colunas: ["Metadado", "O que aparece no seu computador"],
        linhas: [
          ["Tipo", { re: "texto|txt", ph: "Ex.: Documento de Texto", exemplo: "Documento de Texto (.txt)", dica: "O Bloco de Notas salva arquivos do tipo <strong>Documento de Texto (.txt)</strong>.", rot: "Tipo" }],
          ["Tamanho", { re: "\\d+([.,]\\d+)?\\s*(bytes?|kb|mb)", ph: "Ex.: 58 bytes", exemplo: "58 bytes", dica: "O tamanho é um número seguido de <strong>bytes</strong> ou <strong>KB</strong>.", rot: "Tamanho" }],
          ["Data de criação", { re: "\\d{1,2}\\s*(/|de)\\s*(\\d{1,2}|[a-zç]+)\\s*(/|de)\\s*\\d{2,4}", ph: "Ex.: 05/11/2026", exemplo: "05/11/2026", dica: "Copie a data no formato dia/mês/ano, como aparece na janela.", rot: "Data de criação" }]],
        explicacao: "Tipo, tamanho e data são <strong>metadados</strong>: dados <em>sobre</em> o arquivo, que o computador guarda sozinho." },
      { tipo: "sinais", titulo: "Quais destas informações são metadados?",
        opcoes: [
          { t: "O nome do arquivo", certo: true }, { t: "O tipo do arquivo (documento de texto)", certo: true },
          { t: "O tamanho do arquivo", certo: true }, { t: "A data de criação", certo: true },
          { t: "As frases que eu escrevi dentro do arquivo", certo: false, why: "Isso é o conteúdo, não um dado <em>sobre</em> o arquivo." },
          { t: "A cor do monitor", certo: false, why: "Não tem relação com o arquivo." }],
        dicas: ["Metadados (<em>meta</em> = sobre) são dados <strong>sobre</strong> o arquivo, não o que está escrito dentro dele."],
        explicacao: "Metadados são dados sobre os dados: nome, tipo, tamanho e data. O texto escrito dentro do arquivo é o conteúdo." },
      { id: "m1-sim-organizar", opcional: true, tipo: "sim_pc", titulo: "🗂️ Simulador: organize os arquivos em pastas",
        enunciado: "<p>A pasta <strong>Downloads</strong> está uma bagunça! Guarde cada arquivo na pasta certa, arrastando com o mouse. O <strong>Bit</strong> confere cada um.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "Fotos", tipo: "pasta" }, { nome: "Músicas da festa", tipo: "pasta" }, { nome: "Trabalhos", tipo: "pasta" }, { nome: "praia", ext: "jpg", figura: "🏖️" }, { nome: "forro-junino", ext: "mp3" }, { nome: "redacao-meio-ambiente", ext: "docx" }, { nome: "aniversario-da-vo", ext: "jpg", figura: "🎂" }] },
        passos: [
          { faca: "Primeiro, ligue as <b>Extensões</b> (botão lá em cima, à direita) para ver o tipo de cada arquivo.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "A <b>praia.jpg</b> é uma foto. <b>Arraste</b> ela até a pasta <b>Fotos</b> e solte.", ok: "mover:arq:praia*>Fotos", onde: "arq:praia.jpg", erros: { "mover:arq:praia*": "Ops! Foto vai na pasta <b>Fotos</b>. Abra a pasta, arraste de volta para Downloads e tente de novo." } },
          { faca: "A <b>aniversario-da-vo.jpg</b> também é foto: leve para <b>Fotos</b>.", ok: "mover:arq:aniversario-da-vo*>Fotos", onde: "arq:aniversario-da-vo.jpg" },
          { faca: "O <b>.mp3</b> é uma música. Arraste para <b>Músicas da festa</b>.", ok: "mover:arq:forro-junino*>Músicas da festa", onde: "arq:forro-junino.mp3", erros: { "mover:arq:forro-junino*": "Música (.mp3) vai na pasta <b>Músicas da festa</b>." } },
          { faca: "E o <b>.docx</b> é um texto do Word: arraste para <b>Trabalhos</b>.", ok: "mover:arq:redacao-meio-ambiente*>Trabalhos", onde: "arq:redacao-meio-ambiente.docx" },
          { faca: "Confira: dê <b>duplo clique</b> na pasta <b>Fotos</b> para ver as duas fotos lá dentro.", ok: "abrir:pasta:Fotos", onde: "arq:Fotos" }
        ],
        fimMsg: "Downloads organizado: cada arquivo na sua pasta. Assim fica fácil achar depois!",
        explicacao: "Organizar é guardar cada arquivo numa pasta com nome claro. A extensão ajuda a saber o tipo: .jpg foto, .mp3 música, .docx texto." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Descubra uma peça que é ao mesmo tempo entrada e saída",
        perguntas: [
          { p: "Qual destas peças é <strong>entrada e saída</strong> ao mesmo tempo?", opcoes: ["O teclado", "A tela sensível ao toque (touchscreen) do celular", "A impressora", "O monitor comum"], certo: 1,
            why: "A tela touchscreen mostra imagens (saída) e recebe o toque do dedo (entrada)." },
          { p: "Por que ela é <strong>entrada</strong>?", opcoes: ["Porque mostra as imagens", "Porque recebe o toque do dedo e leva a informação para o computador", "Porque guarda os arquivos"], certo: 1 },
          { p: "Por que ela é <strong>saída</strong>?", opcoes: ["Porque mostra o resultado na tela", "Porque recebe o toque do dedo", "Porque liga o aparelho"], certo: 0 },
          { p: "Qual destas também é entrada e saída?", opcoes: ["O fone de ouvido com microfone", "O mouse", "A caixa de som"], certo: 0,
            why: "O microfone recebe a sua voz (entrada) e o fone toca o som (saída)." }],
        explicacao: "Algumas peças fazem as duas coisas: <strong>recebem</strong> informações (entrada) e <strong>mostram ou devolvem</strong> resultados (saída). Exemplos: tela touchscreen, fone com microfone, pen drive (grava e lê)." }
    ],
    vf: [
      { v: true, why: "O teclado leva informações para dentro do computador." },
      { v: false, corrigir: { trecho: "entrada", opcoes: ["entrada", "saída", "armazenamento"], certo: "saída" }, why: "O monitor mostra o resultado: é saída." },
      { v: true, why: "As pastas funcionam como gavetas." },
      { v: true, why: "Por isso é importante salvar (Ctrl + S)." },
      { v: true, why: "Nome, tipo, tamanho e data são metadados." }
    ]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "Monte o algoritmo: plantar uma muda de árvore",
        enunciado: "<p>Um <strong>algoritmo</strong> é uma sequência de passos na ordem certa. Clique nos passos <strong>na ordem</strong> em que eles acontecem.</p>",
        etapas: [
          { ic: "🧤", t: "Pegar a pá e a muda", dica: "Primeiro, separe o material." },
          { ic: "⛏️", t: "Cavar um buraco", dica: "Antes de colocar a muda, precisa ter onde colocar." },
          { ic: "🌱", t: "Colocar a muda no buraco" },
          { ic: "🟫", t: "Cobrir a raiz com terra" },
          { ic: "💧", t: "Regar a planta", dica: "A água vem depois que a muda está plantada." }],
        okMsg: "Algoritmo na ordem certa! Se trocar a ordem, não funciona: tente cobrir com terra antes de cavar… 😅",
        explicacao: "No computador é igual: as <strong>instruções</strong> precisam estar na <strong>sequência</strong> certa." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Algoritmo de escovar os dentes",
        enunciado: "<p>Os passos estão fora de ordem. Organize do 1º ao 6º.</p>",
        itens: ["Pegar a escova e a pasta", "Abrir a torneira e molhar a escova", "Colocar pasta na escova", "Escovar todos os dentes", "Enxaguar a boca", "Guardar a escova"],
        alternativas: [[0, 2, 1, 3, 4, 5]],
        dicas: ["O primeiro passo é pegar o que você vai usar.", "Guardar a escova é sempre o último passo."],
        explicacao: "Um algoritmo é uma sequência de passos em ordem. Molhar a escova antes ou depois de pôr a pasta: os dois jeitos funcionam! Mas escovar antes de pegar a escova, não." },

      { tipo: "robo", titulo: "Leve o robô 🤖 até a estrela ⭐ — caminho com setas",
        enunciado: "<p>Use as setas ⬆️ ⬇️ ⬅️ ➡️, uma por casa, sem passar pelas paredes 🧱. Depois clique em <strong>Executar</strong> para testar.</p>",
        grade: ["R..#.", "##.#.", ".....", ".###.", "....*"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1]],
        dicas: ["Das casas abaixo do robô, A2 e B2 são paredes: ele precisa ir para a direita primeiro.", "Pela coluna C dá para descer até a linha 3."],
        explicacao: "Um caminho certo: ➡️ ➡️ ⬇️ ⬇️ ➡️ ➡️ ⬇️ ⬇️ (8 passos)." },

      { tipo: "robo", titulo: "Agora o mesmo caminho usando “repita”",
        enunciado: "<p>Use os botões <strong>+</strong> e <strong>−</strong> para transformar passos iguais seguidos em um bloco “repita”. Meta: no máximo <strong>4 blocos</strong>.</p>",
        grade: ["R..#.", "##.#.", ".....", ".###.", "....*"], compacto: 4,
        solucao: [["R", 2], ["D", 2], ["R", 2], ["D", 2]],
        dicas: ["Os passos iguais seguidos viram um bloco só: ➡️ ➡️ = “repita 2 vezes ➡️”."],
        explicacao: "Com repetição: repita 2× ➡️ · repita 2× ⬇️ · repita 2× ➡️ · repita 2× ⬇️. O algoritmo fica mais curto!" },

      { tipo: "pintura", titulo: "Siga o algoritmo de pintura",
        forma: "quadrado", n: 5, pretos: [1, 3, 5],
        regra: "<strong>Repita 5 vezes:</strong> desenhe um quadrado e deixe um espaço à direita. Para cada quadrado: <strong>se</strong> for o 1º, o 3º ou o 5º, pinte de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["Só os quadrados da condição (1º, 3º e 5º) ficam pretos."],
        explicacao: "Aqui o algoritmo usa repetição (repita 5 vezes) e seleção (se… senão)." },

      { tipo: "pintura", titulo: "Agora é com você: um algoritmo novo", forma: "quadrado", n: 6, pretos: [2, 4, 6],
        regra: "<strong>Repita 6 vezes:</strong> desenhe um quadrado e deixe um espaço à direita. Para cada quadrado: <strong>se</strong> a posição for <strong>par</strong> (2º, 4º, 6º…), pinte de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["Número par é o que pode ser dividido em dois grupos iguais: 2, 4, 6, 8…"],
        explicacao: "Os quadrados pares (2º, 4º e 6º) ficam pretos e formam um padrão alternado: branco, preto, branco, preto… Repetição + seleção." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Complete as instruções de seleção",
        colunas: ["Se...", "então...", "senão..."],
        linhas: [
          ["Se o sinal estiver verde,", { op: ["atravesso com cuidado", "espero o sinal abrir", "coloco para carregar"], r: "atravesso com cuidado", rot: "então" }, { op: ["atravesso com cuidado", "espero o sinal abrir", "o celular desbloqueia"], r: "espero o sinal abrir", rot: "senão" }],
          ["Se a bateria estiver fraca,", { op: ["coloco o celular para carregar", "continuo usando normalmente", "aparece erro"], r: "coloco o celular para carregar", rot: "então" }, { op: ["coloco o celular para carregar", "continuo usando normalmente", "espero o sinal abrir"], r: "continuo usando normalmente", rot: "senão" }],
          ["Se eu acertar a senha,", { op: ["o celular desbloqueia", "aparece uma mensagem de erro", "a bateria acaba"], r: "o celular desbloqueia", rot: "então" }, { op: ["o celular desbloqueia", "aparece uma mensagem de erro", "atravesso com cuidado"], r: "aparece uma mensagem de erro", rot: "senão" }]],
        dicas: ["O “então” acontece quando a condição é verdadeira; o “senão”, quando é falsa."],
        explicacao: "Na seleção, a <strong>condição</strong> é uma pergunta de sim ou não. Sim → então. Não → senão." },
      { tipo: "aberta", titulo: "Crie a sua instrução de seleção", campos: [{ rot: "Se...", linhas: 1 }, { rot: "então...", linhas: 1 }, { rot: "senão...", linhas: 1 }],
        criterios: ["A condição é uma pergunta de sim ou não.", "O “então” e o “senão” são ações diferentes."], opcional: true,
        conferir: { minPalavras: 2, diferentes: [1, 2], msg: "Instrução de seleção criada! Condição, então e senão no lugar certo." },
        exemplo: "Se estiver chovendo, então levo o guarda-chuva, senão vou de boné." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Caça ao erro no algoritmo",
        enunciado: "<p><em>1. Pegar o copo. 2. Beber a água. 3. Abrir a geladeira. 4. Colocar água no copo.</em></p>",
        perguntas: [{ p: "Qual é o erro desse algoritmo?", opcoes: ["Beber a água antes de colocar água no copo", "Pegar o copo antes de abrir a geladeira", "O algoritmo não tem erro"], certo: 0, why: "Não dá para beber antes de colocar a água: o passo 2 está fora de ordem." }] },
      { tipo: "ordenar", titulo: "Agora corrija: coloque os passos na ordem certa",
        itens: ["Pegar o copo", "Abrir a geladeira", "Colocar água no copo", "Beber a água"],
        alternativas: [[1, 0, 2, 3]],
        explicacao: "Corrigido: pegar o copo, abrir a geladeira, colocar água no copo e só então beber. Encontrar e corrigir erros é o que os programadores fazem o tempo todo." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "não importa", opcoes: ["não importa", "importa", "tanto faz"], certo: "importa" }, why: "O computador faz exatamente o que mandamos, na ordem." },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "mais longo", opcoes: ["mais longo", "mais curto", "mais difícil"], certo: "mais curto" }, why: "Com “repita 4 vezes ➡️” escrevemos menos do que ➡️➡️➡️➡️." }
    ]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "No grupo da turma: respeito ou cyberbullying?", app: "💬 Grupo do 6º ano",
        botoes: [{ id: "R", rot: "😊 Respeitosa" }, { id: "B", rot: "🚫 Cyberbullying" }],
        enunciado: "<p>Leia cada mensagem do grupo de mentira e decida.</p>",
        itens: [
          { de: "Lucas", t: "Parabéns, Maria, sua apresentação ficou muito boa! 👏", c: "R" },
          { de: "Anônimo", t: "Olha a foto que eu tirei do João dormindo na aula kkkk espalhem 😂", c: "B", why: "Expor alguém sem permissão para rirem dele é cyberbullying." },
          { de: "Bia", t: "Alguém pode me explicar a tarefa de matemática?", c: "R" },
          { de: "Pedro", t: "Ninguém aqui gosta da Júlia, vamos tirar ela do grupo.", c: "B", why: "Excluir e humilhar de propósito também é cyberbullying." }],
        okMsg: "Você reconhece o cyberbullying. Se acontecer: não compartilhe, guarde o print e conte para um adulto." },
      { tipo: "medidor_senha", titulo: "Laboratório de senhas: monte uma senha muito forte",
        enunciado: "<p>Digite uma senha <strong>inventada</strong> e veja o medidor mudar. Complete todos os itens da lista para chegar em <strong>Muito forte</strong>.</p>",
        explicacao: "Senha forte: comprida, com maiúscula, minúscula, número e símbolo, e sem sequências fáceis. E nunca conte para ninguém!" },
      { id: "m3-sim-conta", opcional: true, tipo: "sim_pc", titulo: "🔐 Simulador: crie uma conta segura no site da biblioteca",
        enunciado: "<p>Treine no <strong>navegador de mentira</strong>: confira se o site é seguro, crie um usuário sem dados pessoais e uma senha forte. Nada aqui vai para a internet de verdade.</p>",
        abertas: ["web"],
        web: {
          "biblioteca.escola.br": { titulo: "Biblioteca Digital da Escola", palavras: "biblioteca livros escola",
            html: "<p>📚 Crie a sua conta para pegar livros digitais emprestados.</p><label class='campo'>Nome de usuário (não use o seu nome completo)<input data-campo='usuario' data-k='pg:usuario' placeholder='ex.: leitor_veloz'></label><label class='campo'>Senha<input data-campo='senha' data-k='pg:senha' type='text' placeholder='mínimo 8: letras, números e símbolos'></label><button data-ev='criar' data-k='pg:criar' class='pri'>Criar conta</button>" },
          "premios-gratis.net": { titulo: "Ganhe 1000 moedas!", seguro: false, html: "<p>🎁 Digite a sua senha do jogo para ganhar moedas grátis!</p>" }
        },
        passos: [
          { faca: "Clique na <b>barra de endereço</b>, digite <b>biblioteca.escola.br</b> e aperte <b>Enter</b>.", ok: "url:biblioteca.escola.br", onde: "web:url", dica: "A barra de endereço é a caixa comprida lá em cima do navegador." },
          { faca: "Antes de criar a conta, clique no <b>cadeado 🔒</b> ao lado do endereço para ver se a conexão é segura.", ok: "cadeado:biblioteca.escola.br", onde: "web:cadeado" },
          { faca: "Crie um <b>nome de usuário</b> que não mostra quem você é (sem nome completo, sem idade). Exemplo: <b>leitor_veloz</b>. Digite com pelo menos 5 letras.", ok: { estado: "campo", nome: "usuario", regex: "^\\S{5,}$" }, onde: "pg:usuario", dica: "Clique na caixa Nome de usuário e digite um apelido, sem espaço. Ex.: leitor_veloz" },
          { faca: "Agora a <b>senha forte</b>: pelo menos <b>8</b> caracteres, com letra <b>maiúscula</b>, <b>minúscula</b>, <b>número</b> e <b>símbolo</b> (! @ # $). Ex.: <b>Livro#2026azul</b> (invente a sua).", ok: { estado: "senhaForte", campo: "senha" }, onde: "pg:senha", dica: "Confira: tem maiúscula (A-Z)? minúscula (a-z)? número (0-9)? símbolo (! @ # $ %)? 8 ou mais caracteres?" },
          { faca: "Tudo certo! Clique em <b>Criar conta</b>.", ok: "pagina:criar", onde: "pg:criar" }
        ],
        fimMsg: "Conta criada com segurança: site com cadeado, usuário sem dados pessoais e senha forte. E lembre: senha não se empresta para ninguém!",
        explicacao: "Antes de digitar uma senha, confira o endereço e o cadeado. Senha forte tem 8 ou mais caracteres misturando maiúsculas, minúsculas, números e símbolos. Nome de usuário não deve mostrar nome completo, idade ou endereço." }
    ],
    basico: [
      { tipo: "aberta", titulo: "Reescreva as mensagens de forma respeitosa",
        enunciado: "<p>Mantenha a ideia, mas sem ofender. O portal avisa se ainda sobrar alguma palavra ofensiva.</p>",
        campos: [{ rot: "“Seu desenho ficou horrível, kkkk”", linhas: 2 }, { rot: "“Sai do grupo, ninguém gosta de você”", linhas: 2 }, { rot: "“Você é burro, errou tudo”", linhas: 2 }],
        detector: { palavras: ["horrivel", "kkkk", "kkk", "burro", "burra", "ninguem gosta", "sai do grupo", "idiota", "feio"], msg: "Escreva como se a pessoa estivesse na sua frente." },
        criterios: ["Não tem apelido, xingamento nem risada de deboche.", "Dá para entender o que a pessoa quis dizer.", "Ajuda ou incentiva em vez de humilhar."],
        exemplo: "“Acho que o seu desenho pode ficar ainda melhor com mais cores!” · “Vamos combinar as regras do grupo juntos?” · “Errar faz parte. Quer ajuda para revisar?”",
        conferir: { minPalavras: 4, msg: "Mensagens reescritas com respeito! O professor pode ler as suas respostas no painel." } },
      { tipo: "classificar", modo: "tabela", titulo: "O que fazer com um celular que não funciona mais?",
        colunaItem: "Atitude", colunaResp: "Certo ou errado?",
        categorias: [{ id: "C", rot: "Certo" }, { id: "E", rot: "Errado" }],
        itens: [
          { t: "Jogar no lixo comum", c: "E", why: "Vira lixo eletrônico e pode contaminar o solo e a água." },
          { t: "Levar a um ponto de coleta de eletrônicos", c: "C", why: "Lá ele é reciclado do jeito certo." },
          { t: "Tentar consertar antes de trocar", c: "C", why: "Consertar faz o aparelho durar mais." },
          { t: "Jogar no rio ou no mato", c: "E", why: "Os metais do aparelho contaminam a natureza." }],
        explicacao: "Atitudes conscientes: consertar, doar, usar por mais tempo e descartar em pontos de coleta." },
      { tipo: "sinais", titulo: "Quais atitudes protegem você na internet?",
        opcoes: [
          { t: "Não divulgar endereço, telefone nem senhas", certo: true },
          { t: "Usar senha forte, com letras, números e símbolos", certo: true },
          { t: "Desconfiar de prêmios fáceis", certo: true },
          { t: "Contar a um adulto de confiança quando algo assusta", certo: true },
          { t: "Usar a data de nascimento como senha", certo: false, why: "É fácil de adivinhar." },
          { t: "Espalhar uma foto engraçada de um colega", certo: false, why: "Isso pode ser cyberbullying." },
          { t: "Conversar em segredo com estranhos que oferecem presentes", certo: false, why: "Desconfie de estranhos e conte a um adulto." }],
        explicacao: "Respeito, dados protegidos e desconfiança de prêmios e estranhos: é assim que um cidadão digital se protege." },
      { tipo: "cartaz", titulo: "Monte aqui o cartaz Cidadão Digital", tituloCartaz: "Cidadão Digital",
        campos: [
          { rot: "Escreva no cartaz uma frase sobre respeito na internet ou consumo consciente (pelo menos 4 palavras):", ph: "Ex.: Na internet eu respeito todo mundo", gab: "uma frase sobre respeito na internet ou consumo consciente", exemplo: "Na internet eu respeito todo mundo.", re: "\\S+\\s+\\S+\\s+\\S+\\s+\\S+", dica: "Escreva a frase inteira (pelo menos 4 palavras)." }],
        okMsg: "Cartaz pronto e conferido! Ficou registrado para o professor." }
    ],
    desafio: [
      { tipo: "senha", titulo: "Invente 2 senhas fortes (que você NÃO vai usar de verdade)", n: 2,
        explicacao: "Senha forte é longa e mistura letras maiúsculas e minúsculas, números e símbolos. Nada de 123456, nome ou data de nascimento." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "Mensagem para um colega que está sofrendo cyberbullying", linhas: 4,
        criterios: ["Mostro que me importo com ele.", "Digo o que ele pode fazer: guardar provas (print), bloquear e contar a um adulto de confiança.", "A mensagem é respeitosa."],
        exemplo: "“Sinto muito pelo que estão fazendo com você. Não é culpa sua. Tire print das mensagens, bloqueie quem está te ofendendo e conte para o professor ou para alguém da sua família. Conte comigo!”",
        detector: { palavras: ["burro", "burra", "idiota", "feio", "kkkk", "otario"], msg: "A mensagem precisa ser respeitosa." },
        conferir: { minPalavras: 15, minGrupos: 3, grupos: [
          { dica: "guardar provas (tirar print)", alts: ["print", "prova", "guard", "captura"] },
          { dica: "bloquear quem ofende", alts: ["bloque"] },
          { dica: "contar a um adulto de confiança", alts: ["adulto", "professor", "famil", "pais", "mae", "pai", "responsav", "diretor", "coordenad"] },
          { dica: "mostrar que você se importa com ele", alts: ["sinto", "conte comigo", "estou com voce", "nao e culpa", "importo", "apoio", "ajud", "amigo", "sozinho"] }] } }
    ],
    vf: [
      { v: false, corrigir: { trecho: "é só brincadeira e não machuca ninguém", opcoes: ["é só brincadeira e não machuca ninguém", "machuca e deve ser levado a sério", "só acontece com adultos"], certo: "machuca e deve ser levado a sério" } },
      { v: true },
      { v: false, corrigir: { trecho: "podem ser jogados no lixo comum sem problema", opcoes: ["podem ser jogados no lixo comum sem problema", "devem ir para um ponto de coleta", "podem ser queimados no quintal"], certo: "devem ir para um ponto de coleta" } },
      { v: true },
      { v: true }
    ]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "bits", titulo: "Fale a língua do computador: números com lâmpadas",
        enunciado: "<p>Cada lâmpada é um <strong>bit</strong>: <strong>acesa = 1</strong>, <strong>apagada = 0</strong>. Cada lâmpada vale um número (8, 4, 2 e 1). Acenda as lâmpadas certas para a <strong>soma</strong> dar o número pedido e clique em <strong>Pronto!</strong></p>",
        valores: [8, 4, 2, 1],
        fases: [
          { alvo: 3, pede: "Escreva o número **3**.", dica: "3 = 2 + 1. Acenda as lâmpadas que valem 2 e 1." },
          { alvo: 5, pede: "Escreva o número **5**.", dica: "5 = 4 + 1." },
          { alvo: 10, pede: "Escreva o número **10**.", dica: "10 = 8 + 2." },
          { alvo: 15, pede: "Escreva o número **15**: o maior que dá com 4 lâmpadas.", dica: "Acenda todas: 8 + 4 + 2 + 1." }],
        okMsg: "Você escreveu números só com 0 e 1, como o computador faz!",
        explicacao: "3 = 0011 · 5 = 0101 · 10 = 1010 · 15 = 1111. O computador guarda tudo assim, em bits (0 e 1)." },
      { id: "m4-sim-zip", opcional: true, tipo: "sim_pc", titulo: "🗜️ Simulador: compacte, descompacte e ache arquivos",
        enunciado: "<p>No <strong>computador de mentira</strong>, compacte uma pasta em <strong>.zip</strong>, descompacte o .zip que um colega mandou e ache um arquivo pela pesquisa. O <strong>Bit</strong> confere cada passo.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: {
          "Downloads": [{ nome: "Trabalho de Ciências", tipo: "pasta" }, { nome: "video-da-festa", ext: "mp4", kb: 48600 }, { nome: "foto-da-turma", ext: "jpg", kb: 3200, figura: "🧑‍🤝‍🧑" }, { nome: "fotos-da-excursao", ext: "zip", kb: 9800, tem: [{ nome: "cachoeira", ext: "jpg", kb: 4100, figura: "🏞️" }, { nome: "onibus", ext: "jpg", kb: 3900, figura: "🚌" }, { nome: "lanche", ext: "jpg", kb: 3500, figura: "🥪" }] }],
          "Trabalho de Ciências": [{ nome: "capa", ext: "docx", kb: 820 }, { nome: "pesquisa-planetas", ext: "docx", kb: 1450 }, { nome: "cartaz", ext: "pptx", kb: 2600 }],
          "Documentos": [{ nome: "receita-de-bolo", ext: "txt", kb: 2, texto: "Bolo de cenoura\n- 3 cenouras\n- 3 ovos\n- 2 xícaras de farinha\n- 1 xícara de açúcar" }]
        },
        passos: [
          { faca: "Ative as <b>Extensões</b> e olhe a coluna <b>Tamanho</b>. Clique <b>uma vez</b> no arquivo <b>maior</b> da pasta.", ok: "clique:arq:video-da-festa*", onde: "exp:ext", erros: { "clique:arq:*": "Esse não é o maior. Compare a coluna Tamanho: MB é maior que KB!" } },
          { faca: "A pasta <b>Trabalho de Ciências</b> é grande para mandar ao professor. Clique nela com o <b>botão direito</b> e escolha <b>Compactar</b> (no Windows 10: Enviar para › Pasta compactada).", ok: "compactar:arq:Trabalho de Ciências", onde: "arq:Trabalho de Ciências", dica: "No Windows 11 o menu diz <b>Compactar para arquivo ZIP</b>; no Windows 10, <b>Enviar para › Pasta compactada</b>." },
          { faca: "Apareceu o <b>Trabalho de Ciências.zip</b> 🗜️: compare o tamanho dele com os arquivos lá de dentro (2,6 MB + 1,4 MB + 820 KB). Dê <b>duplo clique</b> no .zip para ver o que tem dentro.", ok: "/^abrir:arq:trabalho de ci.ncias(\\.zip)?$/", onde: "arq:Trabalho de Ciências.zip" },
          { faca: "Feche essa janela no <b>X</b>.", ok: "fechar:jan:ver", onde: "jan:ver:fechar" },
          { faca: "Um colega mandou <b>fotos-da-excursao.zip</b>. Para usar as fotos, descompacte: <b>botão direito</b> nele › <b>Extrair Tudo...</b>", ok: "extrair:arq:fotos-da-excursao*", onde: "arq:fotos-da-excursao.zip" },
          { faca: "Onde está a <b>receita-de-bolo</b>? Use a <b>pesquisa</b> 🔍 do Explorador: digite <b>bolo</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*bolo/", onde: "exp:busca" },
          { faca: "Achou! Abra a <b>receita-de-bolo</b> com <b>duplo clique</b>.", ok: "/^abrir:arq:receita-de-bolo/", onde: "arq:receita-de-bolo.txt" }
        ],
        fimMsg: "Você compactou uma pasta (o .zip ficou menor), descompactou outro .zip e achou um arquivo pela pesquisa!",
        explicacao: "Compactar junta arquivos num só .zip e diminui o tamanho, bom para mandar pela internet. Descompactar (Extrair Tudo) tira os arquivos do .zip. A pesquisa 🔍 do Explorador acha um arquivo pelo nome." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Do menor para o maior: as medidas",
        enunciado: "<p>Arraste (ou use as setas ▲▼) até ficar do <strong>menor</strong> para o <strong>maior</strong>.</p>",
        itens: ["bit", "byte", "KB (quilobyte)", "MB (megabyte)", "GB (gigabyte)", "TB (terabyte)"],
        dicas: ["O menor de todos é o bit, que vale 0 ou 1.", "Depois do byte, as medidas crescem de mil em mil: KB, MB, GB, TB."],
        explicacao: "bit → byte (8 bits) → KB → MB → GB → TB. Cada medida, a partir do byte, é cerca de mil vezes maior que a anterior." },
      { tipo: "ordenar", titulo: "Do menor para o maior: os arquivos",
        enunciado: "<p>Coloque os arquivos do <strong>menor</strong> para o <strong>maior</strong>. Olhe o tamanho entre parênteses.</p>",
        itens: ["📄 bilhete.txt (2 KB)", "🖼️ foto-da-turma.jpg (3 MB)", "🎵 musica.mp3 (4 MB)", "🎬 video-da-festa.mp4 (200 MB)", "🍿 filme.mp4 (2 GB)"],
        dicas: ["KB é menor que MB, e MB é menor que GB.", "Entre a foto (3 MB) e a música (4 MB), qual número é menor?"],
        explicacao: "2 KB < 3 MB < 4 MB < 200 MB < 2 GB. Texto ocupa pouco; vídeo e filme ocupam muito." },
      { tipo: "tabela", titulo: "Contas de quanto cabe",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantos bits formam 1 byte?", { r: "8", tipo: "num", w: 4 }],
          ["1 GB é cerca de quantos MB?", { r: "1000", tipo: "num", w: 6, dica: "Cada medida é cerca de mil vezes a anterior." }],
          ["Um pen drive de 1 GB (cerca de 1000 MB) guarda quantas fotos de 5 MB?", { r: "200", tipo: "num", w: 5, dica: "1000 ÷ 5" }],
          ["O que ocupa MAIS espaço?", { op: ["Um vídeo de 200 MB", "Um texto de 2 KB", "Uma foto de 3 MB"], r: "Um vídeo de 200 MB" }]],
        explicacao: "1 byte = 8 bits. 1 GB ≈ 1000 MB. 1000 ÷ 5 = 200 fotos. O vídeo de 200 MB é o maior." },
      { tipo: "escolha", titulo: "Compactar e descompactar",
        perguntas: [
          { p: "O que acontece quando eu compacto 10 arquivos de texto?", opcoes: ["Viram um arquivo .zip só, menor que os 10 juntos", "Os arquivos são apagados", "Os arquivos ficam maiores"], certo: 0, why: "Compactar junta tudo em um .zip e diminui o tamanho." },
          { p: "Recebi um arquivo .zip. O que faço para usar os arquivos de dentro?", opcoes: ["Descompacto (extraio) o .zip", "Apago o .zip", "Mudo o nome para .jpg"], certo: 0 },
          { p: "Por que compactar fotos quase não diminui o tamanho?", opcoes: ["Porque as fotos já vêm compactadas", "Porque foto não pode ir para .zip", "Porque o .zip só aceita texto"], certo: 0, why: "Fotos (.jpg) e vídeos (.mp4) já são compactados quando são criados." }],
        explicacao: "Compactar junta e diminui; para usar, descompactamos (extraímos). Texto diminui bastante; foto e vídeo, quase nada, porque já vêm compactados." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Que tipo de arquivo é? Olhe a extensão", colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "F", rot: "🖼️ Foto" }, { id: "V", rot: "🎬 Vídeo" }, { id: "T", rot: "📄 Texto" }, { id: "Z", rot: "🗜️ Compactado" }],
        itens: [
          { t: "passeio.jpg", c: "F", why: ".jpg é foto." }, { t: "apresentacao.mp4", c: "V", why: ".mp4 é vídeo." },
          { t: "resumo.txt", c: "T", why: ".txt é texto." }, { t: "trabalhos-6A.zip", c: "Z", why: ".zip é compactado." },
          { t: "selfie.png", c: "F", why: ".png também é imagem." }],
        explicacao: "A extensão, depois do ponto, mostra o tipo: .jpg e .png = imagem · .mp4 = vídeo · .txt = texto · .zip = compactado." },
      { tipo: "escolha", titulo: "Ajude o colega a achar e organizar",
        perguntas: [
          { p: "O colega salvou o trabalho ontem e não lembra onde. Qual é o jeito mais rápido de achar?", opcoes: ["Digitar parte do nome na busca 🔍", "Abrir todas as pastas, uma por uma", "Desligar e ligar o computador"], certo: 0 },
          { p: "Ele quer ver primeiro os arquivos mais novos. Como ordenar?", opcoes: ["Por data, do mais recente para o mais antigo", "Por nome, de A a Z", "Por cor do ícone"], certo: 0 },
          { p: "Qual nome é melhor para achar depois?", opcoes: ["trabalho-ciencias-6A.docx", "documento1.docx", "aaaaa.docx"], certo: 0, why: "Um nome que diz o que é, a matéria e a turma se acha fácil na busca." },
          { p: "O pen drive está cheio. O que libera MAIS espaço?", opcoes: ["Apagar 1 vídeo de 500 MB que já está salvo em outro lugar", "Apagar 1 texto de 2 KB", "Mudar o nome dos arquivos"], certo: 0 }],
        explicacao: "Busca 🔍 pelo nome; ordenar por data para ver os mais novos; nomes que dizem o que o arquivo é; e, para liberar espaço, apagar o que é grande (vídeo), depois de guardar uma cópia." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "O celular com 10 GB livres",
        enunciado: "<p>Use: <strong>1 GB ≈ 1000 MB</strong>. Então <strong>10 GB ≈ 10 000 MB</strong>.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantos vídeos de 500 MB cabem em 10 GB?", { r: "20", tipo: "num", w: 5, dica: "10 000 ÷ 500" }],
          ["Quantas fotos de 5 MB cabem em 10 GB?", { r: "2000", tipo: "num", w: 6, dica: "10 000 ÷ 5" }],
          ["Para guardar mais lembranças, o que ocupa menos espaço?", { op: ["Fotos", "Vídeos"], r: "Fotos" }]],
        explicacao: "10 000 ÷ 500 = 20 vídeos. 10 000 ÷ 5 = 2000 fotos. Cada vídeo de 500 MB ocupa o espaço de 100 fotos de 5 MB." }
    ],
    vf: [
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "menor", opcoes: ["menor", "maior"], certo: "maior" }, why: "GB é cerca de um milhão de KB: muito maior." },
      { v: true },
      { v: false, corrigir: { trecho: "um texto", opcoes: ["um texto", "um vídeo", "uma foto"], certo: "um vídeo" }, why: ".mp4 é vídeo." }
    ]
  },

  /* ======================= 🔁 REVISÃO PARA A PROVA =======================
     Cada atividade tem "de" (a missão). O portal mostra só as missões que a turma estudou. */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "classificar", modo: "tabela", de: "m1", titulo: "M1 · Entrada, processamento ou saída?", colunaItem: "Peça", colunaResp: "Etapa",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "P", rot: "Processamento" }, { id: "S", rot: "Saída" }],
        itens: [{ t: "Teclado", c: "E" }, { t: "Monitor", c: "S" }, { t: "Processador", c: "P" }, { t: "Microfone", c: "E" }, { t: "Impressora", c: "S" }, { t: "Mouse", c: "E" }],
        explicacao: "Entrada recebe (teclado, mouse, microfone); processamento calcula (processador); saída mostra (monitor, impressora)." },
      { tipo: "escolha", de: "m1", titulo: "M1 · Arquivos, pastas e metadados",
        perguntas: [
          { p: "O teclado e o mouse (as peças que dá para tocar) são:", opcoes: ["Hardware", "Software", "Pastas"], certo: 0 },
          { p: "Qual é o atalho para salvar?", opcoes: ["Ctrl + S", "Ctrl + P", "Alt + F4"], certo: 0 },
          { p: "Nome, tipo, tamanho e data de um arquivo são os:", opcoes: ["Metadados", "Programas", "Periféricos"], certo: 0 },
          { p: "Para que serve uma pasta?", opcoes: ["Organizar os arquivos, como uma gaveta", "Desligar o computador", "Imprimir"], certo: 0 }],
        explicacao: "Hardware = peças; software = programas. Ctrl + S salva. Metadados = nome, tipo, tamanho e data. Pasta organiza arquivos." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ordenar", de: "m2", titulo: "M2 · Coloque o algoritmo do suco em ordem",
        itens: ["Pegar as laranjas", "Cortar as laranjas ao meio", "Espremer as laranjas", "Colocar o suco no copo"],
        explicacao: "Algoritmo é uma sequência de passos em ordem: se trocar a ordem, não dá certo." },
      { tipo: "classificar", modo: "tabela", de: "m2", titulo: "M2 · Sequência, repetição ou seleção?", colunaItem: "Instrução", colunaResp: "Tipo",
        categorias: [{ id: "Q", rot: "Sequência" }, { id: "R", rot: "Repetição" }, { id: "L", rot: "Seleção" }],
        itens: [{ t: "Repita 4 vezes: ande 1 passo", c: "R" }, { t: "Se chover, então leve o guarda-chuva; senão, leve o boné", c: "L" }, { t: "Abra a porta, entre, feche a porta", c: "Q" }, { t: "Enquanto tiver louça, lave um prato", c: "R" }, { t: "Se a senha estiver certa, abra; senão, mostre erro", c: "L" }],
        explicacao: "Sequência = um passo depois do outro. Repetição = repetir passos. Seleção = escolher com se… então… senão." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", modo: "tabela", de: "m3", titulo: "M3 · Atitude de cidadão digital ou não?", colunaItem: "Atitude", colunaResp: "Cidadão digital?",
        categorias: [{ id: "S", rot: "👍 Sim" }, { id: "N", rot: "👎 Não" }],
        itens: [{ t: "Discordar do colega sem ofender", c: "S" }, { t: "Espalhar uma foto para zombar de alguém", c: "N", why: "Isso é cyberbullying." }, { t: "Usar uma senha que mistura letras, números e símbolos", c: "S" }, { t: "Jogar o celular velho no lixo comum", c: "N", why: "Lixo eletrônico vai para o ponto de coleta." }, { t: "Consertar ou doar o aparelho que ainda funciona", c: "S" }],
        explicacao: "Cidadão digital respeita, protege a senha e cuida do lixo eletrônico (consertar, doar, descartar no lugar certo)." },
      { tipo: "escolha", de: "m3", titulo: "M3 · Respeito e consumo consciente",
        perguntas: [
          { p: "Trocar um aparelho que ainda funciona só porque ficou “velho” se chama:", opcoes: ["Obsolescência", "Reciclagem", "Processamento"], certo: 0 },
          { p: "Estão me ofendendo na internet. O que eu faço?", opcoes: ["Tiro print, bloqueio e conto a um adulto de confiança", "Respondo com outra ofensa", "Apago o celular"], certo: 0 }],
        explicacao: "Obsolescência = trocar o que ainda funciona. Diante de ofensa: print, bloquear e contar a um adulto." },
      { tipo: "relembre", de: "m4" },
      { tipo: "ordenar", de: "m4", titulo: "M4 · Do menor para o maior",
        itens: ["bit", "byte", "KB", "MB", "GB", "TB"], explicacao: "bit → byte → KB → MB → GB → TB." },
      { tipo: "escolha", de: "m4", titulo: "M4 · Bits, compactar e extensão",
        perguntas: [
          { p: "Quantos bits formam 1 byte?", opcoes: ["8", "2", "100"], certo: 0 },
          { p: "O arquivo trabalhos.zip está:", opcoes: ["Compactado", "Apagado", "Impresso"], certo: 0 },
          { p: "O que ocupa mais espaço?", opcoes: ["Um filme (2 GB)", "Uma foto (3 MB)", "Um texto (2 KB)"], certo: 0 }],
        explicacao: "8 bits = 1 byte. .zip = compactado. GB é maior que MB, que é maior que KB." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1 · Pense",
        perguntas: [{ p: "A tela sensível ao toque do celular é:", opcoes: ["De entrada e saída ao mesmo tempo", "Só de entrada", "Só de saída"], certo: 0, why: "Recebe o toque (entrada) e mostra a imagem (saída)." }] },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2 · Ache o erro",
        enunciado: "<p>Algoritmo para calçar o tênis: <em>1. Calce o tênis. 2. Calce a meia. 3. Amarre o cadarço.</em></p>",
        perguntas: [{ p: "Qual é o erro?", opcoes: ["A meia vem antes do tênis: os passos 1 e 2 estão trocados", "Falta repetir o passo 3", "Não tem erro"], certo: 0 }] },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3 · Qual senha é mais forte?",
        perguntas: [{ p: "Qual senha é mais forte?", opcoes: ["Gat0#Azul72!", "123456", "joao2013"], certo: 0, why: "Mistura letras maiúsculas e minúsculas, números e símbolos." }] },
      { tipo: "tabela", de: "m4", titulo: "Desafio M4 · Quanto cabe?",
        linhas: [["Um pen drive de 1 GB (cerca de 1000 MB) guarda quantas músicas de 4 MB?", { r: "250", tipo: "num", w: 5, dica: "1000 ÷ 4" }]],
        explicacao: "1000 ÷ 4 = 250 músicas." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1",
        perguntas: [{ p: "O processador fica em qual etapa?", opcoes: ["Processamento", "Entrada", "Saída"], certo: 0 }, { p: "Os programas, como o navegador, são:", opcoes: ["Software", "Hardware", "Metadados"], certo: 0 }] },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2",
        perguntas: [{ p: "“Se… então… senão” é:", opcoes: ["Seleção", "Repetição", "Sequência"], certo: 0 }, { p: "A pergunta “a porta está aberta?” num algoritmo é a:", opcoes: ["Condição", "Saída", "Repetição"], certo: 0 }] },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3",
        perguntas: [{ p: "Ofender alguém de forma repetida na internet é:", opcoes: ["Cyberbullying", "Obsolescência", "Algoritmo"], certo: 0 }, { p: "Aparelho quebrado que não tem conserto vai para:", opcoes: ["O ponto de coleta de lixo eletrônico", "O lixo comum", "O rio"], certo: 0 }] },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4",
        perguntas: [{ p: "Um bit pode valer:", opcoes: ["0 ou 1", "De 1 a 10", "Qualquer letra"], certo: 0 }, { p: "Para usar os arquivos de dentro de um .zip, eu:", opcoes: ["Descompacto (extraio)", "Apago o .zip", "Imprimo o .zip"], certo: 0 }] }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Confira as suas missões", html: "<p>Volte à lista de missões da apostila: cada missão com o <strong>Básico concluído</strong> aparece com ✔. Se faltar alguma (por exemplo, porque você faltou à aula), faça o Básico dela agora. O professor acompanha tudo pelo painel.</p>" },
      { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
        campos: [{ rot: "🌐 O computador e meus arquivos", linhas: 2 }, { rot: "⚙️ Algoritmos", linhas: 2 }, { rot: "🤝 Cidadão digital", linhas: 2 }],
        criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."],
        conferir: { minPalavras: 4, porCampo: [
          ["computador", "arquivo", "pasta", "entrada", "saida", "process", "armazen", "salvar", "metadado", "teclado", "mouse", "monitor", "explorador", "bloco de notas"],
          ["algoritmo", "sequencia", "passo", "ordem", "repeti", "selecao", "condicao", "se ", "entao", "senao", "instru", "robo"],
          ["respeit", "cyberbullying", "senha", "dados", "lixo eletronico", "consumo", "cidadao", "internet", "segur", "golpe", "privacidade", "recicl", "proteg"]] } }
    ],
    desafio: [
      { tipo: "ligar", titulo: "Desafio do bimestre: ligue cada termo ao seu significado", porRodada: 6,
        enunciado: "<p>Um termo de cada tema do bimestre. Clique no termo e depois no significado dele.</p>",
        pares: [{ a: "Entrada", b: "O computador recebe informações, pelo teclado ou pelo mouse" }, { a: "Processamento", b: "O computador faz os cálculos com as informações" }, { a: "Pasta", b: "Lugar onde organizamos os nossos arquivos" }, { a: "Algoritmo", b: "Sequência de passos, em ordem, para resolver um problema" }, { a: "Repetição", b: "Fazer os mesmos passos várias vezes" }, { a: "Lixo eletrônico", b: "Aparelhos velhos que precisam ser descartados no lugar certo" }] }
    ],
    turbo: [
      { tipo: "aberta", titulo: "A missão de que eu mais gostei",
        enunciado: "<p>Escolha a missão de que você mais gostou e escreva duas ou três frases dizendo por quê. Se o professor ligar o projetor no fim da aula, você pode ler para a turma (é opcional).</p>",
        campos: [{ rot: "A missão de que eu mais gostei:", linhas: 1 }, { rot: "Por que eu gostei (duas ou três frases):", linhas: 3 }],
        criterios: ["Diz qual foi a missão.", "Explica o motivo com as suas palavras."],
        exemplo: "Missão 1. Eu gostei porque aprendi como a internet funciona por dentro e agora entendo por que o vídeo trava.",
        conferir: { minPalavras: 2, msg: "Registrado! O professor pode ler no painel." } }
    ]
  }
});
