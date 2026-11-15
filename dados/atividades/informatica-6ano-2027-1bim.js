/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 1º bimestre de 2027
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv).
   BNCC Computação: EF06CO05, EF06CO08, EF06CO01, EF06CO09.
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-2027-1bim", {

  /* ============ MISSÃO 1 — Primeiros passos: mouse, teclado e janelas ============ */
  m1: {
    pratica: [
      { tipo: "baloes", titulo: "Aquecimento: estoure os balões com o mouse", quantidade: 8,
        enunciado: "<p>Mexa o <strong>mouse</strong> para levar o ponteiro até cada balão e dê um <strong>clique</strong>. Eles mudam de lugar! 🎈</p>",
        explicacao: "O <strong>clique</strong> (apertar 1 vez o botão esquerdo) serve para escolher e apertar botões. É a ação do mouse que mais usamos." },
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Jogos", itens: ["Fotos", "Jogos", "Músicas", "Trabalhos"],
        enunciado: "<p>Agora dê um <strong>duplo clique</strong> (dois cliques rapidinhos, sem mexer o mouse) na pasta <strong>Jogos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas, arquivos e programas. Um clique só apenas seleciona (escolhe)." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Ligue cada ação do mouse ao que ela faz",
        enunciado: "<p>Clique na ação e depois no que ela faz. Releia a tabela <strong>Ação do mouse</strong> no 💡 Para começar.</p>",
        pares: [
          { a: "Clique", b: "Escolher um ícone ou apertar um botão" },
          { a: "Duplo clique", b: "Abrir pastas, arquivos e programas" },
          { a: "Clique direito", b: "Ver mais opções (menu)" },
          { a: "Arrastar", b: "Mudar algo de lugar" },
          { a: "Rolar a rodinha", b: "Subir e descer a página" }],
        explicacao: "Clique escolhe; duplo clique abre; clique direito mostra o menu de opções; arrastar muda de lugar; a rodinha rola a página." },

      { tipo: "classificar", modo: "tabela", titulo: "Qual tecla eu aperto?",
        colunaItem: "O que eu quero fazer", colunaResp: "Tecla",
        categorias: [{ id: "EN", cod: "↵", rot: "Enter" }, { id: "ES", cod: "␣", rot: "Barra de espaço" }, { id: "BK", cod: "⟵", rot: "Backspace" }, { id: "SH", cod: "⇧", rot: "Shift" }],
        itens: [
          { t: "Apagar a letra que digitei errado (antes do cursor)", c: "BK", why: "Backspace apaga a letra que está antes do cursor." },
          { t: "Separar uma palavra da outra", c: "ES", why: "A barra de espaço coloca um espaço entre as palavras." },
          { t: "Pular para a linha de baixo", c: "EN", why: "Enter confirma ou pula para a linha de baixo." },
          { t: "Escrever só a primeira letra do meu nome maiúscula", c: "SH", why: "Segurando Shift, a letra sai maiúscula." },
          { t: "Confirmar a busca que eu digitei", c: "EN", why: "Enter também confirma." }],
        dicas: ["Releia a tabela das teclas no 💡 Para começar."],
        explicacao: "Enter confirma ou pula de linha; espaço separa palavras; Backspace apaga a letra antes do cursor; Shift (segurando) faz maiúscula." },

      { tipo: "escolha", titulo: "Os botões da janela",
        enunciado: "<p>No canto de cima, à direita, toda janela tem ➖ ⬜ ❌.</p>",
        perguntas: [
          { p: "Quero que a janela ocupe a tela toda. Qual botão?", opcoes: ["⬜ Maximizar", "➖ Minimizar", "❌ Fechar"], certo: 0, why: "Maximizar faz a janela ocupar a tela toda." },
          { p: "Quero esconder a janela sem fechar o programa. Qual botão?", opcoes: ["❌ Fechar", "➖ Minimizar", "⬜ Maximizar"], certo: 1, why: "Minimizar esconde na barra de tarefas; o programa continua aberto." },
          { p: "Terminei e quero fechar o programa. Qual botão?", opcoes: ["➖ Minimizar", "⬜ Maximizar", "❌ Fechar"], certo: 2, why: "O ❌ fecha a janela e o programa." },
          { p: "Minimizei a janela. Como faço para ela voltar?", opcoes: ["Clico no ícone dela na barra de tarefas", "Desligo o computador", "Aperto Backspace"], certo: 0, why: "Os programas abertos ficam na barra de tarefas, lá embaixo." }],
        explicacao: "➖ Minimizar esconde na barra de tarefas; ⬜ Maximizar ocupa a tela toda; ❌ Fechar fecha o programa. Para voltar a uma janela minimizada, clique no ícone dela na barra de tarefas." },

      { tipo: "escolha", titulo: "🔎 Diagnóstico: o que você já sabe?",
        enunciado: "<p>Responda com calma. Tudo está no 💡 Para começar e no 📖 O que significa? desta missão.</p>",
        perguntas: [
          { p: "A setinha que anda na tela quando mexo o mouse se chama:", opcoes: ["Ponteiro", "Cursor", "Ícone"], certo: 0, why: "Ponteiro é a seta; cursor é a barrinha que pisca onde a letra vai aparecer." },
          { p: "A barrinha que pisca no lugar onde a letra vai aparecer é o:", opcoes: ["Ícone", "Cursor", "Ponteiro"], certo: 1, why: "O cursor pisca no lugar onde vou digitar." },
          { p: "O desenho pequeno que representa um programa ou pasta é o:", opcoes: ["Ícone", "Gabinete", "Cursor"], certo: 0, why: "Ícones ficam na área de trabalho e na tela do celular." },
          { p: "A tela de fundo do computador, com os ícones, é a:", opcoes: ["Área de trabalho", "Barra de tarefas", "Janela"], certo: 0, why: "Em inglês, desktop." },
          { p: "O Caps Lock ligado faz:", opcoes: ["Todas as letras saírem maiúsculas", "O computador desligar", "A janela fechar"], certo: 0, why: "Caps Lock trava as maiúsculas; acende uma luzinha no teclado." }],
        explicacao: "Ponteiro = seta; cursor = barrinha que pisca; ícone = desenho do programa/pasta; área de trabalho = tela de fundo; Caps Lock = trava das maiúsculas." },

      { tipo: "aberta", titulo: "Conte o que você já sabe fazer no computador",
        enunciado: "<p>Isso ajuda o professor a conhecer a turma. Não existe resposta errada: escreva com as suas palavras.</p>",
        campos: [{ rot: "O que eu já sei fazer no computador ou no celular:", linhas: 2 }, { rot: "O que eu quero aprender na Informática:", linhas: 2 }],
        criterios: ["Escreve pelo menos uma frase em cada campo."],
        exemplo: "Eu sei ligar o celular, mandar mensagem e jogar. Quero aprender a digitar rápido e fazer trabalhos no computador.",
        conferir: { minPalavras: 4, msg: "Obrigado! O professor lê as respostas no painel." } }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Digite exatamente igual",
        enunciado: "<p>Digite as frases <strong>igualzinho</strong>: letra maiúscula (Shift), espaço, vírgula, acento e ponto. O portal confere tudo, até o acento!</p>",
        colunas: ["Frase", "Digite aqui"],
        linhas: [
          ["Bom dia, turma!", { r: "Bom dia, turma!", exato: true, dica: "Comece com B maiúsculo (Shift + B) e termine com o ponto de exclamação (Shift + 1)." }],
          ["Eu gosto de Informática.", { r: "Eu gosto de Informática.", exato: true, dica: "Informática tem I maiúsculo e acento no a: aperte a tecla do acento ( ´ ) e depois a letra a." }],
          ["Curionópolis é a minha cidade.", { r: "Curionópolis é a minha cidade.", exato: true, dica: "Para ó e é: primeiro a tecla do acento ( ´ ), depois a vogal." }]],
        explicacao: "Shift + letra faz maiúscula; o acento vem antes da vogal (´ depois o); a frase termina com ponto." },
      { tipo: "escolha", titulo: "Socorro, a janela sumiu!",
        perguntas: [
          { p: "Ana estava fazendo o trabalho e a janela sumiu, mas o programa aparece na barra de tarefas. O que aconteceu?", opcoes: ["Ela minimizou a janela", "Ela fechou o programa", "O computador quebrou"], certo: 0, why: "Se o programa aparece na barra de tarefas, ele está aberto: a janela só foi minimizada." },
          { p: "O que Ana deve fazer?", opcoes: ["Clicar no ícone do programa na barra de tarefas", "Abrir o programa de novo do zero", "Apertar Backspace"], certo: 0, why: "Clicar no ícone na barra de tarefas traz a janela de volta." },
          { p: "João quer ver duas janelas lado a lado, mas uma ocupa a tela toda. O que ela está?", opcoes: ["Maximizada", "Minimizada", "Fechada"], certo: 0, why: "Maximizada = ocupa a tela toda." }],
        explicacao: "Janela minimizada continua aberta na barra de tarefas; é só clicar no ícone para voltar. Maximizada ocupa a tela toda." }
    ],
    turbo: [
      { tipo: "ligar", titulo: "Mouse × toque no celular",
        enunciado: "<p>Releia o 🌎 Onde eu uso isso? e ligue cada ação do mouse ao jeito de fazer no celular.</p>",
        pares: [
          { a: "Clique", b: "Tocar na tela" },
          { a: "Clique direito", b: "Tocar e segurar" },
          { a: "Rolar a rodinha", b: "Arrastar o dedo para cima ou para baixo" }],
        explicacao: "No celular, o toque é o clique; tocar e segurar é como o clique direito; arrastar o dedo rola a página." },
      { tipo: "escolha", titulo: "Pense",
        perguntas: [{ p: "Por que é bom fechar (❌) os programas que você não está usando?", opcoes: ["Para o computador não ficar lento com muita coisa aberta", "Porque o programa se apaga do computador", "Para o mouse funcionar"], certo: 0, why: "Cada programa aberto usa um pouco do computador; com muitos abertos, ele fica lento. Fechar não apaga o programa." }],
        explicacao: "Fechar o programa não apaga nada: só deixa o computador mais livre (mais rápido)." }
    ],
    vf: [
      { v: true, why: "Duplo clique abre pastas, arquivos e programas." },
      { v: false, corrigir: { trecho: "apenas esconde o programa na barra de tarefas", opcoes: ["apenas esconde o programa na barra de tarefas", "fecha a janela e o programa"], certo: "fecha a janela e o programa" }, why: "Quem esconde é o ➖ Minimizar; o ❌ fecha." },
      { v: true, why: "Backspace apaga a letra antes do cursor." },
      { v: true, why: "Shift segurado faz maiúscula." },
      { v: true, why: "A rodinha rola a página." }
    ]
  },

  /* ============ MISSÃO 2 — Entrada, processamento e saída ============ */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "A calculadora por dentro",
        enunciado: "<p>Você vai fazer <strong>2 + 3</strong> na calculadora. Clique nas etapas <strong>na ordem</strong> em que acontecem.</p>",
        etapas: [
          { ic: "⌨️", t: "Entrada: digito 2 + 3", dica: "Primeiro a informação entra." },
          { ic: "🧠", t: "Processamento: o processador faz a conta", dica: "Depois o computador trabalha com a informação." },
          { ic: "🖥️", t: "Saída: aparece 5 na tela", dica: "Por último o resultado sai." }],
        okMsg: "Isso! Entrada → processamento → saída.",
        explicacao: "Todo computador trabalha assim: a informação <strong>entra</strong>, é <strong>processada</strong> e o resultado <strong>sai</strong>." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Cada peça na sua etapa",
        enunciado: "<p>Organize as peças nas 4 etapas da tabela do 💡 Para começar.</p>",
        categorias: [
          { id: "E", rot: "Entrada", ic: "⌨️", desc: "recebe informações" },
          { id: "P", rot: "Processamento", ic: "🧠", desc: "faz os cálculos" },
          { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" },
          { id: "A", rot: "Armazenamento", ic: "💾", desc: "guarda para depois" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" }, { t: "Microfone", ic: "🎙️", c: "E" }, { t: "Câmera", ic: "📷", c: "E" }, { t: "Leitor de código de barras", ic: "🏷️", c: "E" },
          { t: "Processador (CPU)", ic: "🧠", c: "P", dica: "a CPU é o “cérebro”." },
          { t: "Monitor", ic: "🖥️", c: "S" }, { t: "Impressora", ic: "🖨️", c: "S" }, { t: "Fone de ouvido", ic: "🎧", c: "S" },
          { t: "HD", ic: "🗄️", c: "A" }, { t: "Pen drive", ic: "💾", c: "A" }, { t: "Cartão de memória", ic: "🗂️", c: "A" }],
        dicas: ["Pergunte: a informação entra, é trabalhada, sai ou fica guardada?"],
        explicacao: "Entrada: teclado, microfone, câmera, leitor de código de barras. Processamento: CPU. Saída: monitor, impressora, fone. Armazenamento: HD, pen drive, cartão de memória." },

      { tipo: "ordenar", titulo: "No caixa do mercado",
        enunciado: "<p>Coloque em ordem o que acontece quando o caixa passa um produto.</p>",
        itens: ["O leitor lê o código de barras (entrada)", "O computador procura o preço e soma (processamento)", "O preço aparece na tela (saída)", "O cupom sai na impressora (saída)"],
        alternativas: [[0, 1, 3, 2]],
        dicas: ["Primeiro a informação entra; depois é processada; por último sai."],
        explicacao: "Entrada (leitor) → processamento (procura e soma) → saída (tela e cupom)." },

      { tipo: "escolha", titulo: "RAM, armazenamento e touchscreen",
        perguntas: [
          { p: "A luz acabou e o trabalho que não estava salvo sumiu. Ele estava só na:", opcoes: ["Memória RAM", "HD", "Pen drive"], certo: 0, why: "A RAM apaga tudo quando o computador desliga." },
          { p: "Onde os arquivos ficam guardados mesmo com o computador desligado?", opcoes: ["No armazenamento (HD ou SSD)", "Na memória RAM", "No monitor"], certo: 0, why: "Armazenamento guarda para depois." },
          { p: "A tela touchscreen do celular é:", opcoes: ["De entrada e de saída", "Só de entrada", "Só de saída"], certo: 0, why: "Recebe o toque (entrada) e mostra a imagem (saída)." },
          { p: "O SSD é mais rápido que o HD porque:", opcoes: ["Não tem disco girando", "É maior", "Fica fora do computador"], certo: 0, why: "SSD = unidade de estado sólido, sem disco girando." }],
        explicacao: "RAM = o que está aberto agora (apaga ao desligar). HD e SSD = armazenamento (guardam). Touchscreen = entrada e saída. SSD não tem disco girando, por isso é mais rápido." },

      { tipo: "ligar", titulo: "Ligue o termo ao significado",
        pares: [
          { a: "CPU", b: "Processador: faz os cálculos" },
          { a: "Gabinete", b: "Caixa do computador de mesa" },
          { a: "Entrada", b: "Leva informação para dentro do computador" },
          { a: "Saída", b: "Mostra ou entrega o resultado" },
          { a: "Memória RAM", b: "Guarda o que está aberto agora" }],
        explicacao: "CPU processa; o gabinete é a caixa; entrada leva para dentro; saída mostra; RAM guarda o que está aberto." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Entrada, processamento ou saída na vida real",
        colunaItem: "O que acontece", colunaResp: "Etapa",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "P", rot: "Processamento" }, { id: "S", rot: "Saída" }],
        itens: [
          { t: "Falo “Ok, Google” no microfone do celular", c: "E", why: "A voz entra pelo microfone." },
          { t: "O celular entende o que eu disse", c: "P", why: "Entender é trabalho do processador." },
          { t: "A resposta aparece na tela", c: "S", why: "A tela mostra o resultado." },
          { t: "Digito o número na urna eletrônica", c: "E", why: "O número entra pelo teclado da urna." },
          { t: "A urna confere o número", c: "P", why: "Conferir é processar." },
          { t: "A foto do candidato aparece", c: "S", why: "A tela mostra o resultado." }],
        explicacao: "Em todo aparelho: a informação entra (microfone, teclado), é processada (entender, conferir) e sai (tela)." },
      { tipo: "aberta", titulo: "Um aparelho da minha casa",
        enunciado: "<p>Escolha um aparelho (TV, micro-ondas, celular, videogame…) e diga a entrada, o processamento e a saída dele.</p>",
        campos: [{ rot: "Aparelho:", linhas: 1 }, { rot: "Entrada (o que recebe):", linhas: 1 }, { rot: "Processamento (o que ele faz por dentro):", linhas: 1 }, { rot: "Saída (o que mostra ou entrega):", linhas: 1 }],
        criterios: ["Cada campo preenchido.", "Entrada, processamento e saída diferentes entre si."],
        exemplo: "Micro-ondas · Entrada: aperto os botões do tempo · Processamento: o chip conta o tempo · Saída: o visor mostra o tempo e o apito toca.",
        conferir: { minPalavras: 1, diferentes: [1, 2, 3], msg: "Muito bem! Você achou as etapas num aparelho de verdade." } }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Por que salvar?",
        perguntas: [
          { p: "Por que a RAM perde tudo quando falta energia e o HD não?", opcoes: ["A RAM só guarda o que está aberto agora e precisa de energia; o HD guarda para depois", "O HD é maior que a RAM", "A RAM fica fora do gabinete"], certo: 0, why: "RAM = memória do momento; armazenamento = memória que fica." },
          { p: "Qual é o jeito de não perder o trabalho se a luz acabar?", opcoes: ["Salvar sempre (Ctrl + S)", "Deixar o monitor ligado", "Aumentar o volume"], certo: 0, why: "Salvar leva o trabalho da RAM para o armazenamento." }],
        explicacao: "Quem está só na RAM se apaga ao desligar. Salvar guarda no armazenamento (HD/SSD), que não precisa de energia para manter os arquivos." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "saída", opcoes: ["saída", "entrada"], certo: "entrada" }, why: "O microfone recebe a voz: é entrada." },
      { v: true, why: "A CPU faz os cálculos." },
      { v: true, why: "A impressora entrega o resultado no papel." },
      { v: true, why: "Recebe o toque e mostra a imagem." },
      { v: false, corrigir: { trecho: "A memória RAM", opcoes: ["A memória RAM", "O HD"], certo: "O HD" }, why: "A RAM apaga tudo ao desligar; quem guarda é o armazenamento (HD, SSD)." }
    ]
  },

  /* ============ MISSÃO 3 — Hardware e software ============ */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "Hardware ou software?", app: "🧐 O que é isso?",
        botoes: [{ id: "H", rot: "🔧 Hardware" }, { id: "S", rot: "💿 Software" }],
        enunciado: "<p>Para cada item, escolha: é <strong>hardware</strong> (peça que dá para tocar) ou <strong>software</strong> (programa)?</p>",
        itens: [
          { de: "", t: "🖱️ Mouse", c: "H", why: "Dá para pegar com a mão." },
          { de: "", t: "🪟 Windows", c: "S", why: "É o sistema operacional, um programa." },
          { de: "", t: "🔌 Cabo de energia", c: "H", why: "É uma peça física." },
          { de: "", t: "🎮 Um jogo de corrida", c: "S", why: "Jogo é programa." },
          { de: "", t: "🖥️ Monitor", c: "H", why: "É uma peça física." },
          { de: "", t: "🌐 Navegador de internet", c: "S", why: "Navegador é aplicativo." }],
        okMsg: "Você separou hardware e software!",
        explicacao: "Hardware é o que dá para tocar (mouse, cabo, monitor). Software é programa: Windows (sistema operacional), jogo e navegador." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Separe hardware e software",
        categorias: [{ id: "H", rot: "Hardware", ic: "🔧", desc: "peças que dá para tocar" }, { id: "S", rot: "Software", ic: "💿", desc: "programas" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "H" }, { t: "Processador", ic: "🧠", c: "H" }, { t: "Pen drive", ic: "💾", c: "H" }, { t: "Impressora", ic: "🖨️", c: "H" },
          { t: "Calculadora do computador", ic: "🧮", c: "S" }, { t: "Android", ic: "🤖", c: "S" }, { t: "Editor de texto", ic: "📝", c: "S" }, { t: "Aplicativo de mensagens", ic: "💬", c: "S" }],
        dicas: ["Dá para pegar com a mão? Hardware. Aparece na tela? Software."],
        explicacao: "Hardware: teclado, processador, pen drive, impressora. Software: calculadora, Android, editor de texto, aplicativo de mensagens." },

      { tipo: "classificar", modo: "tabela", titulo: "Sistema operacional ou aplicativo?",
        colunaItem: "Software", colunaResp: "Tipo",
        categorias: [{ id: "SO", rot: "⚙️ Sistema operacional" }, { id: "AP", rot: "📱 Aplicativo" }],
        itens: [
          { t: "Windows", c: "SO", why: "Comanda o computador." },
          { t: "Navegador Chrome", c: "AP", why: "Faz uma tarefa: abrir sites." },
          { t: "Android", c: "SO", why: "Sistema operacional de celular." },
          { t: "Jogo de futebol", c: "AP", why: "Faz uma tarefa para o usuário: divertir." },
          { t: "iOS (iPhone)", c: "SO", why: "Sistema operacional do iPhone." },
          { t: "Calculadora", c: "AP", why: "Faz uma tarefa: contas." }],
        explicacao: "Sistema operacional comanda o aparelho (Windows, Linux, Android, iOS). Aplicativo faz uma tarefa para o usuário." },

      { tipo: "ligar", titulo: "Cada aplicativo e a sua tarefa",
        pares: [
          { a: "Navegador", b: "Abrir sites da internet" },
          { a: "Editor de texto", b: "Escrever trabalhos" },
          { a: "Calculadora", b: "Fazer contas" },
          { a: "Tocador de música", b: "Ouvir músicas" }],
        explicacao: "Cada aplicativo faz uma tarefa: navegador abre sites; editor de texto escreve; calculadora faz contas; tocador toca músicas." },

      { tipo: "escolha", titulo: "Um precisa do outro",
        perguntas: [
          { p: "O computador sem nenhum software:", opcoes: ["Não faz nada", "Funciona normalmente", "Fica mais rápido"], certo: 0, why: "O hardware precisa dos programas para saber o que fazer." },
          { p: "Qual é o primeiro programa a ligar e comanda o resto?", opcoes: ["O sistema operacional", "O navegador", "O jogo"], certo: 0, why: "O sistema operacional liga primeiro." },
          { p: "O aviso “atualizar agora” no celular serve para:", opcoes: ["Melhorar o software, corrigir erros e aumentar a segurança", "Trocar a tela", "Apagar as fotos"], certo: 0, why: "Atualização melhora o software." }],
        explicacao: "Hardware e software trabalham juntos. O sistema operacional comanda tudo. Atualizações melhoram e protegem o software." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "O problema é de hardware ou de software?",
        colunaItem: "Problema", colunaResp: "De quê?",
        categorias: [{ id: "H", rot: "🔧 Hardware" }, { id: "S", rot: "💿 Software" }],
        itens: [
          { t: "A tela do celular trincou", c: "H", why: "Peça física quebrada." },
          { t: "O aplicativo fecha sozinho", c: "S", why: "Programa com erro." },
          { t: "O fio do fone rompeu", c: "H", why: "Peça física." },
          { t: "O jogo travou na fase 3", c: "S", why: "Programa travado." },
          { t: "A tecla A do teclado não funciona", c: "H", why: "Peça física com defeito." }],
        explicacao: "Peça quebrada = hardware (troca a peça). Programa travando = software (fecha, atualiza ou reinstala)." },
      { tipo: "escolha", titulo: "O que fazer?",
        perguntas: [{ p: "O aplicativo de mensagens vive travando. O que tentar primeiro?", opcoes: ["Atualizar o aplicativo", "Trocar a tela", "Comprar um celular novo"], certo: 0, why: "Problema de software se resolve no software: atualizar costuma corrigir erros." }],
        explicacao: "A atualização corrige erros do software." }
    ],
    turbo: [
      { tipo: "pc", titulo: "Investigue o computador da sala",
        programa: "Área de trabalho e navegador",
        passos: ["Olhe o botão <strong>Iniciar</strong> (o logotipo no canto da barra de tarefas): ele mostra o sistema operacional.", "Olhe o ícone do programa em que você abriu este portal: é o navegador."],
        conferir: [
          { rot: "Qual é o <strong>sistema operacional</strong> deste computador?", ph: "Ex.: Windows", gab: "Windows (ou Linux)", re: "windows|linux|ubuntu", dica: "O logotipo de janelinha no botão Iniciar é do Windows." },
          { rot: "Qual <strong>navegador</strong> você está usando para abrir o portal?", ph: "Ex.: Chrome", gab: "Chrome, Edge ou Firefox", re: "chrome|edge|firefox|opera|brave|navegador", dica: "Veja o ícone na barra de tarefas: bolinha colorida = Chrome; onda azul = Edge; raposa = Firefox." }],
        okMsg: "Você descobriu o sistema operacional e o navegador!",
        explicacao: "Nos computadores da sala, o sistema operacional é o Windows (logotipo de janelinha no Iniciar). O navegador é o programa que abre o portal: Chrome ou Edge." }
    ],
    vf: [
      { v: true, why: "O mouse é uma peça física." },
      { v: false, corrigir: { trecho: "hardware", opcoes: ["hardware", "software"], certo: "software" }, why: "Navegador é programa (aplicativo)." },
      { v: true, why: "Ele liga primeiro e comanda tudo." },
      { v: true, why: "Android (celular) e Windows (computador)." },
      { v: false, corrigir: { trecho: "funciona sozinho, sem nenhum software", opcoes: ["funciona sozinho, sem nenhum software", "precisa de software para funcionar"], certo: "precisa de software para funcionar" }, why: "Sem software o hardware não faz nada." }
    ]
  },

  /* ============ MISSÃO 4 — Pastas e arquivos ============ */
  m4: {
    pratica: [
      { tipo: "explorador_pastas", titulo: "Organize os arquivos pela extensão",
        enunciado: "<p>Arraste cada arquivo para a pasta certa (ou clique no arquivo e depois na pasta). Olhe a <strong>extensão</strong>: o final depois do ponto.</p>",
        pastas: [{ id: "fotos", nome: "Imagens", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "textos", nome: "Trabalhos", ic: "📝" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "festa-junina.jpg", p: "fotos" }, { nome: "desenho.png", p: "fotos" }, { nome: "brega.mp3", p: "musicas" }, { nome: "hino.mp3", p: "musicas" }, { nome: "redacao.docx", p: "textos" }, { nome: "lista.txt", p: "textos" }, { nome: "gol.mp4", p: "videos" }, { nome: "aula-gravada.mp4", p: "videos" }],
        explicacao: ".jpg e .png = imagem; .mp3 = áudio; .docx e .txt = texto; .mp4 = vídeo." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Que tipo de arquivo é?",
        colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "📝 Texto" }, { id: "I", rot: "🖼️ Imagem" }, { id: "A", rot: "🎵 Áudio" }, { id: "V", rot: "🎬 Vídeo" }, { id: "P", rot: "📄 PDF" }],
        itens: [
          { t: "boletim.pdf", c: "P", why: ".pdf = documento para ler e imprimir." },
          { t: "selfie.jpg", c: "I", why: ".jpg = imagem." },
          { t: "pesquisa.docx", c: "T", why: ".docx = documento de texto." },
          { t: "podcast.mp3", c: "A", why: ".mp3 = áudio." },
          { t: "tutorial.mp4", c: "V", why: ".mp4 = vídeo." },
          { t: "logo.png", c: "I", why: ".png = imagem." }],
        dicas: ["Releia a tabela das extensões no 💡 Para começar."],
        explicacao: "A extensão diz o tipo: .txt/.docx texto, .jpg/.png imagem, .mp3 áudio, .mp4 vídeo, .pdf documento." },

      { tipo: "ordenar", titulo: "Monte o caminho do arquivo",
        enunciado: "<p>O arquivo <strong>trabalho.docx</strong> está na pasta Informática, que está dentro de Escola, que está dentro de Documentos. Coloque do começo do caminho até o arquivo.</p>",
        itens: ["Documentos", "Escola", "Informática", "trabalho.docx"],
        dicas: ["O caminho começa pela pasta de fora e termina no arquivo."],
        explicacao: "Documentos › Escola › Informática › trabalho.docx: da pasta de fora até o arquivo." },

      { tipo: "ordenar", titulo: "Como salvar um trabalho",
        itens: ["Escrever o trabalho", "Clicar em Arquivo → Salvar como", "Escolher a pasta onde vou guardar", "Digitar um nome bom", "Clicar em Salvar"],
        alternativas: [[0, 1, 3, 2, 4]],
        dicas: ["Para salvar: escolher onde, dar um nome e clicar em Salvar."],
        explicacao: "Salvar como → onde → nome → Salvar. O atalho Ctrl + S salva de novo no mesmo lugar." },

      { tipo: "pc", titulo: "No computador: a minha pasta e o meu primeiro arquivo",
        programa: "Explorador de Arquivos",
        passos: [
          "Abra o <strong>Explorador de Arquivos</strong> (ícone de pasta amarela na barra de tarefas).",
          "No local indicado pelo professor, clique com o botão direito → <strong>Novo</strong> → <strong>Pasta</strong> e dê o seu primeiro nome a ela.",
          "Dê duplo clique para entrar na sua pasta. Clique com o botão direito → <strong>Novo</strong> → <strong>Documento de Texto</strong>.",
          "Dê o nome <strong>minha-primeira-nota</strong> e aperte Enter."],
        conferir: [
          { rot: "Qual é o nome do arquivo que você criou?", ph: "Nome do arquivo", gab: "minha-primeira-nota", re: "^minha[-\\s]?primeira[-\\s]?nota(\\.txt)?$", dica: "Clique com o botão direito no arquivo → Renomear e escreva minha-primeira-nota." },
          { rot: "Na coluna <strong>Tipo</strong> (ou no clique direito → Propriedades), que tipo de arquivo ele é?", ph: "Ex.: Documento de Texto", gab: "Documento de Texto (.txt)", re: "texto|txt", dica: "Você criou um Documento de Texto." }],
        okMsg: "Pasta e arquivo criados! Você sabe organizar o seu espaço.",
        explicacao: "Clique direito → Novo → Pasta cria a pasta; dentro dela, clique direito → Novo → Documento de Texto cria um arquivo .txt (tipo Documento de Texto). Renomear: clique direito → Renomear." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "Qual é o melhor nome?",
        perguntas: [
          { p: "Uma redação sobre o meio ambiente:", opcoes: ["redacao-meio-ambiente.docx", "sem título 3.docx", "aaaaa.docx"], certo: 0, why: "Nome bom diz o que tem dentro." },
          { p: "Fotos do passeio da turma em 2027:", opcoes: ["passeio-turma-2027.jpg", "IMG_0001.jpg", "foto.jpg"], certo: 0, why: "Assunto e ano ajudam a achar." },
          { p: "Por que nomes bons ajudam?", opcoes: ["Porque acho o arquivo rápido só de ler o nome", "Porque o arquivo fica menor", "Porque o computador fica mais rápido"], certo: 0, why: "Nome bom = achar rápido." }],
        explicacao: "Um nome bom diz o assunto (e, se precisar, a data): redacao-meio-ambiente é melhor que sem título 3." },
      { tipo: "tabela", titulo: "Em que pasta está?",
        enunciado: "<p>Leia o caminho e escreva o nome da pasta onde o arquivo está guardado (a última pasta antes do arquivo).</p>",
        colunas: ["Caminho", "Pasta onde o arquivo está"],
        linhas: [
          ["Documentos › Escola › Matemática › tabuada.pdf", { r: ["Matemática", "Matematica"], dica: "É a pasta logo antes do nome do arquivo." }],
          ["Imagens › Família › Natal › ceia.jpg", { r: "Natal", dica: "A última pasta antes de ceia.jpg." }],
          ["Downloads › boletim.pdf", { r: "Downloads", dica: "Só tem uma pasta antes do arquivo." }]],
        explicacao: "No caminho, o arquivo fica dentro da última pasta antes do nome dele." }
    ],
    turbo: [
      { tipo: "explorador_pastas", titulo: "A área de trabalho bagunçada",
        enunciado: "<p>A área de trabalho do Pedro está uma bagunça! Organize os 10 arquivos nas pastas certas.</p>",
        pastas: [{ id: "escola", nome: "Escola", ic: "📚" }, { id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "trabalho-ciencias.docx", p: "escola" }, { nome: "prova-historia.pdf", p: "escola" }, { nome: "resumo.txt", p: "escola" }, { nome: "aniversario.jpg", p: "fotos" }, { nome: "praia.png", p: "fotos" }, { nome: "forro.mp3", p: "musicas" }, { nome: "rap.mp3", p: "musicas" }, { nome: "jogo-final.mp4", p: "videos" }, { nome: "receita.mp4", p: "videos" }, { nome: "pesquisa-geografia.docx", p: "escola" }],
        explicacao: "Trabalhos (.docx, .pdf, .txt) na pasta Escola; .jpg e .png em Fotos; .mp3 em Músicas; .mp4 em Vídeos." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "imagem", opcoes: ["imagem", "áudio (música)"], certo: "áudio (música)" }, why: ".mp3 é áudio; imagem é .jpg ou .png." },
      { v: true, why: "Pastas podem ter pastas dentro." },
      { v: true, why: "O caminho é o endereço do arquivo." },
      { v: true, why: "S de save (salvar)." },
      { v: false, corrigir: { trecho: "um ótimo nome", opcoes: ["um ótimo nome", "um nome ruim"], certo: "um nome ruim" }, why: "Nome bom diz o assunto do arquivo." }
    ]
  },

  /* ============ MISSÃO 5 — Tipos de dados ============ */
  m5: {
    pratica: [
      { tipo: "mensagens", titulo: "Número ou texto?", app: "🔢 Que tipo é?",
        botoes: [{ id: "N", rot: "🔢 Número (faz conta)" }, { id: "T", rot: "🔤 Texto" }],
        enunciado: "<p>Lembre: se o dado é usado em contas, é <strong>número</strong>; se é só um “nome” feito de algarismos, é <strong>texto</strong>.</p>",
        itens: [
          { de: "", t: "📞 Telefone: 94 99999-0000", c: "T", why: "Ninguém soma telefones." },
          { de: "", t: "🎂 Idade: 12", c: "N", why: "Dá para fazer conta (daqui a 3 anos = 15)." },
          { de: "", t: "📮 CEP: 68523-000", c: "T", why: "CEP é um código, não serve para conta." },
          { de: "", t: "📝 Nota da prova: 8,5", c: "N", why: "Notas são somadas e viram média." },
          { de: "", t: "👥 Quantidade de alunos: 19", c: "N", why: "Quantidade é número." }],
        okMsg: "Você já sabe separar número de texto!",
        explicacao: "Idade, nota e quantidade servem para contas: número. Telefone e CEP são códigos feitos de algarismos: texto." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Cada dado no seu tipo",
        categorias: [
          { id: "T", rot: "Texto", ic: "🔤" }, { id: "N", rot: "Número", ic: "🔢" }, { id: "D", rot: "Data", ic: "📅" },
          { id: "L", rot: "Lógico", ic: "✅", desc: "verdadeiro ou falso" }, { id: "M", rot: "Imagem, som ou vídeo", ic: "🎞️" }],
        itens: [
          { t: "“Maria Clara”", c: "T" }, { t: "Rua das Flores", c: "T" },
          { t: "150 (preço em reais)", c: "N" }, { t: "3,5 (quilos)", c: "N" },
          { t: "10/05/2027", c: "D" }, { t: "Data de nascimento", c: "D" },
          { t: "Veio à aula? sim", c: "L" }, { t: "Aceita receber ofertas? não", c: "L" },
          { t: "Foto do perfil", c: "M" }, { t: "Áudio do zap", c: "M" }],
        dicas: ["Releia a tabela dos tipos de dado no 💡 Para começar.", "Sim e não são dados do tipo lógico."],
        explicacao: "Texto: nomes e endereços. Número: preço, peso. Data: dia/mês/ano. Lógico: sim ou não. Imagem, som e vídeo: foto, áudio, filme." },

      { tipo: "tabela", titulo: "O cadastro da loja",
        enunciado: "<p>Escolha o tipo de dado de cada campo do cadastro.</p>",
        colunas: ["Campo do cadastro", "Tipo de dado"],
        linhas: [
          ["Nome", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }],
          ["Idade", { op: ["Texto", "Número", "Data", "Lógico"], r: "Número" }],
          ["Nascimento", { op: ["Texto", "Número", "Data", "Lógico"], r: "Data" }],
          ["Aceita receber ofertas?", { op: ["Texto", "Número", "Data", "Lógico"], r: "Lógico" }],
          ["Telefone", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto", dica: "Telefone parece número, mas ninguém faz conta com ele." }]],
        explicacao: "Nome = texto; idade = número; nascimento = data; sim/não = lógico; telefone = texto (não serve para contas)." },

      { tipo: "escolha", titulo: "Coleções: lista e tabela",
        perguntas: [
          { p: "A lista de chamada é um exemplo de:", opcoes: ["Lista", "Imagem", "Dado lógico"], certo: 0, why: "Nomes um depois do outro, em ordem." },
          { p: "O boletim, com aluno, nota e faltas, é um exemplo de:", opcoes: ["Tabela", "Lista", "Som"], certo: 0, why: "Linhas (alunos) e colunas (nota, faltas)." },
          { p: "Numa tabela, as linhas são:", opcoes: ["Deitadas", "Em pé", "Apagadas"], certo: 0, why: "Linhas deitadas; colunas em pé." },
          { p: "O que o computador consegue fazer com dados do tipo número?", opcoes: ["Contas, como somar e tirar a média", "Tocar", "Recortar"], certo: 0, why: "Número serve para conta." }],
        explicacao: "Lista = dados em ordem, um depois do outro. Tabela = linhas (deitadas) e colunas (em pé). Números servem para contas." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Lista ou tabela?",
        colunaItem: "Dados", colunaResp: "Melhor jeito",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "T", rot: "📊 Tabela" }],
        itens: [
          { t: "As compras do mercado", c: "L", why: "Só uma informação por item." },
          { t: "Os times do campeonato com pontos, vitórias e gols", c: "T", why: "Várias informações por time: colunas." },
          { t: "As músicas da playlist, em ordem", c: "L", why: "Uma depois da outra." },
          { t: "Os alunos com nota e faltas", c: "T", why: "Cada aluno tem várias informações." }],
        explicacao: "Uma informação por item = lista. Várias informações por item = tabela (cada uma numa coluna)." },
      { tipo: "tabela", titulo: "Leia a tabela do campeonato",
        enunciado: "<table class='tab'><tr><th>Time</th><th>Pontos</th><th>Vitórias</th><th>Gols</th></tr><tr><td>Leões</td><td>9</td><td>3</td><td>8</td></tr><tr><td>Águias</td><td>6</td><td>2</td><td>5</td></tr><tr><td>Tubarões</td><td>3</td><td>1</td><td>4</td></tr></table>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Quantos pontos têm as Águias?", { r: "6", tipo: "num", dica: "Ache a linha das Águias e a coluna Pontos." }],
          ["Quantos gols fizeram os Leões?", { r: "8", tipo: "num", dica: "Linha dos Leões, coluna Gols." }],
          ["Qual time tem 1 vitória?", { r: ["Tubarões", "Tubaroes"], dica: "Procure o 1 na coluna Vitórias." }],
          ["Quantos gols os três times fizeram juntos?", { r: "17", tipo: "num", dica: "8 + 5 + 4." }]],
        explicacao: "Para ler uma tabela: ache a linha (o time) e a coluna (a informação). Como gols são números, dá para somar: 8 + 5 + 4 = 17." }
    ],
    turbo: [
      { tipo: "classificar", modo: "tabela", titulo: "Monte a tabela da turma",
        enunciado: "<p>O professor quer uma tabela da turma com estas colunas. Escolha o tipo de dado de cada uma.</p>",
        colunaItem: "Coluna", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "Texto" }, { id: "N", rot: "Número" }, { id: "D", rot: "Data" }, { id: "L", rot: "Lógico" }, { id: "M", rot: "Imagem" }],
        itens: [
          { t: "Nome do aluno", c: "T", why: "Nome é texto." },
          { t: "Número do computador (só para identificar)", c: "T", why: "É um código, ninguém soma números de computador." },
          { t: "Pontos no placar", c: "N", why: "Pontos se somam." },
          { t: "Aniversário", c: "D", why: "Dia e mês." },
          { t: "Terminou o Básico?", c: "L", why: "Sim ou não." },
          { t: "Avatar", c: "M", why: "É uma imagem." }],
        explicacao: "Escolher o tipo certo de cada coluna é o primeiro passo para o computador saber o que pode fazer com cada dado." }
    ],
    vf: [
      { v: true, why: "Idade serve para contas." },
      { v: false, corrigir: { trecho: "um dado usado para fazer contas", opcoes: ["um dado usado para fazer contas", "um dado do tipo texto"], certo: "um dado do tipo texto" }, why: "Ninguém soma telefones: é texto." },
      { v: true, why: "Lógico = verdadeiro ou falso." },
      { v: true, why: "Linhas e colunas." },
      { v: true, why: "Uma música depois da outra, em ordem." }
    ]
  },

  /* ============ MISSÃO 6 — Boa convivência na rede ============ */
  m6: {
    pratica: [
      { tipo: "mensagens", titulo: "Chegou no chat do jogo", app: "🎮 Chat do jogo",
        botoes: [{ id: "OK", rot: "🙂 Pode responder" }, { id: "PE", rot: "🚨 Perigo: parar e contar a um adulto" }],
        enunciado: "<p>Você está num jogo on-line. Para cada mensagem, decida.</p>",
        itens: [
          { de: "Jogador123", t: "Boa partida! Quer jogar de novo?", c: "OK", why: "Mensagem educada sobre o jogo." },
          { de: "Desconhecido", t: "Me manda uma foto sua? É segredo nosso, não conta pra ninguém.", c: "PE", why: "Desconhecido pedindo foto e segredo é perigo." },
          { de: "Desconhecido", t: "Em que escola você estuda? Onde você mora?", c: "PE", why: "Escola e endereço são dados pessoais." },
          { de: "Amiga_da_turma", t: "Vamos fazer o trabalho juntas amanhã na escola?", c: "OK", why: "Colega conhecida falando da escola." }],
        okMsg: "Você reconheceu os sinais de perigo!",
        explicacao: "Mensagem educada de colega ou sobre o jogo: pode responder. Desconhecido pedindo foto, segredo, escola ou endereço: perigo, parar e contar a um adulto de confiança." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "É netiqueta ou não?",
        colunaItem: "Atitude", colunaResp: "Netiqueta?",
        categorias: [{ id: "S", rot: "👍 Sim" }, { id: "N", rot: "👎 Não" }],
        itens: [
          { t: "Falar com respeito, como falaria pessoalmente", c: "S", why: "Do outro lado tem uma pessoa." },
          { t: "ESCREVER TUDO ASSIM NO GRUPO", c: "N", why: "Maiúsculas parecem grito." },
          { t: "Pedir permissão antes de postar a foto de um amigo", c: "S", why: "A imagem é da pessoa." },
          { t: "Postar sem pensar, porque depois é só apagar", c: "N", why: "O que vai para a internet pode ser copiado e ficar para sempre." },
          { t: "Contar para um adulto quando algo estranho acontece", c: "S", why: "Você não precisa resolver sozinho." }],
        explicacao: "Netiqueta: respeito, nada de tudo em maiúsculas, pensar antes de postar, pedir permissão para fotos e contar a um adulto quando algo estranho acontece." },

      { tipo: "sinais", titulo: "Marque o que NÃO se passa para desconhecidos",
        opcoes: [
          { t: "Endereço de casa", certo: true }, { t: "Senha", certo: true }, { t: "Nome da escola", certo: true },
          { t: "Onde estou agora", certo: true }, { t: "Telefone", certo: true },
          { t: "O meu time de futebol favorito", certo: false, why: "Gosto pessoal não mostra onde encontrar você." },
          { t: "A cor de que eu mais gosto", certo: false, why: "Não é dado pessoal perigoso." }],
        dicas: ["Dados pessoais mostram quem você é ou onde encontrar você."],
        explicacao: "Endereço, senha, escola, onde você está e telefone são dados pessoais: não se passam para quem você não conhece." },

      { tipo: "escolha", titulo: "O que fazer?",
        perguntas: [
          { p: "Um colega está sendo ofendido no grupo da turma. O que você faz?", opcoes: ["Não compartilhar, apoiar o colega, guardar o print e contar a um adulto", "Compartilho para todo mundo ver", "Entro na brincadeira"], certo: 0, why: "Apoiar, guardar a prova e denunciar." },
          { p: "O meu melhor amigo pediu a minha senha do jogo. Eu:", opcoes: ["Não passo a senha: ela é como a chave de casa", "Passo, porque ele é meu amigo", "Mudo a senha para 123456"], certo: 0, why: "A senha é como a chave de casa." },
          { p: "Para que serve o print de uma ofensa?", opcoes: ["Serve de prova para denunciar", "Para espalhar no grupo", "Para apagar a ofensa"], certo: 0, why: "Print = prova." }],
        explicacao: "Ofensa: não compartilhe, apoie, guarde o print e denuncie. Senha não se passa para ninguém." }
    ],
    desafio: [
      { tipo: "aberta", titulo: "Reescreva com respeito",
        enunciado: "<p>Mantenha a ideia, mas sem ofender e sem gritar. O portal avisa se sobrar alguma palavra ofensiva ou tudo em maiúsculas.</p>",
        campos: [{ rot: "“QUE TRABALHO RUIM, VOCÊ NÃO SABE NADA”", linhas: 2 }, { rot: "“Sai do grupo, ninguém te chamou”", linhas: 2 }, { rot: "“kkkk olha a foto dele, que feio”", linhas: 2 }],
        detector: { palavras: ["ruim", "nao sabe nada", "ninguem te chamou", "sai do grupo", "kkkk", "kkk", "feio", "burro", "idiota"], msg: "Escreva como se a pessoa estivesse na sua frente." },
        criterios: ["Sem xingamento, deboche ou tudo em maiúsculas.", "Dá para entender a ideia.", "Ajuda em vez de humilhar."],
        exemplo: "“Acho que o trabalho pode melhorar. Quer ajuda?” · “Vamos combinar as regras do grupo juntos?” · “Melhor não postar a foto sem ele deixar.”",
        conferir: { minPalavras: 4, msg: "Mensagens reescritas com respeito! O professor pode ler no painel." } }
    ],
    turbo: [
      { tipo: "aberta", titulo: "As regras do grupo da turma",
        enunciado: "<p>Crie 3 regras de netiqueta para o grupo da sua turma.</p>",
        campos: [{ rot: "Regra 1:", linhas: 1 }, { rot: "Regra 2:", linhas: 1 }, { rot: "Regra 3:", linhas: 1 }],
        criterios: ["Três regras diferentes.", "Cada regra fala de respeito, segurança ou cuidado."],
        exemplo: "1. Falar com respeito. 2. Não postar foto de ninguém sem permissão. 3. Não passar senha nem endereço.",
        conferir: { minPalavras: 3, diferentes: "todos", minGrupos: 2, grupos: [
          { dica: "respeito", alts: ["respeit", "educa", "ofend", "xing", "grit", "maiuscul"] },
          { dica: "fotos e permissão", alts: ["foto", "permiss", "imagem"] },
          { dica: "senha e dados pessoais", alts: ["senha", "endereco", "telefone", "dado"] },
          { dica: "pensar antes de postar", alts: ["pens", "post", "compartilh"] },
          { dica: "contar a um adulto", alts: ["adulto", "professor", "denunc", "contar"] }],
          msg: "Regras criadas! Que tal propor ao grupo da sua turma?" } }
    ],
    vf: [
      { v: true, why: "Maiúsculas parecem grito." },
      { v: false, corrigir: { trecho: "Posso", opcoes: ["Posso", "Não posso"], certo: "Não posso" }, why: "Senha é só sua, nem para o melhor amigo." },
      { v: true, why: "A imagem é da pessoa." },
      { v: true, why: "Pedir segredo é sinal de perigo." },
      { v: false, corrigir: { trecho: "ajuda a resolver", opcoes: ["ajuda a resolver", "piora"], certo: "piora" }, why: "Compartilhar espalha a ofensa." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Digitação sem medo ============ */
  m7: {
    pratica: [
      { tipo: "info", titulo: "Posição das mãos",
        html: "<p>Coloque os dedos na <strong>fileira base</strong>: mão esquerda em <strong>A S D F</strong>, mão direita em <strong>J K L Ç</strong>. Sinta o <strong>risquinho</strong> no F e no J. Polegares na barra de espaço. Depois de cada letra, volte para a fileira base.</p>" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Mão esquerda ou mão direita?",
        enunciado: "<p>Na fileira base, qual mão aperta cada tecla?</p>",
        categorias: [{ id: "E", rot: "Mão esquerda", ic: "✋" }, { id: "D", rot: "Mão direita", ic: "🤚" }],
        itens: [{ t: "A", c: "E" }, { t: "S", c: "E" }, { t: "D", c: "E" }, { t: "F", c: "E" }, { t: "J", c: "D" }, { t: "K", c: "D" }, { t: "L", c: "D" }, { t: "Ç", c: "D" }],
        dicas: ["Esquerda: A S D F. Direita: J K L Ç."],
        explicacao: "Mão esquerda: A S D F (o indicador no F). Mão direita: J K L Ç (o indicador no J)." },

      { tipo: "ordenar", titulo: "Como escrever “é”",
        itens: ["Apertar a tecla do acento agudo ( ´ )", "Soltar a tecla do acento (nada aparece ainda)", "Apertar a letra e", "Aparece é na tela"],
        explicacao: "No teclado ABNT2, o acento vem antes: ´ e depois a vogal." },

      { tipo: "escolha", titulo: "Acentos no teclado ABNT2",
        perguntas: [
          { p: "Para escrever “mãe”, aperto:", opcoes: ["A tecla do til ( ~ ) e depois a", "A letra a e depois o til", "Shift + a"], certo: 0, why: "O acento vem antes da vogal." },
          { p: "Para escrever “você” (ê), aperto:", opcoes: ["Shift + a tecla do til (^) e depois e", "A tecla do acento agudo e depois e", "Caps Lock e depois e"], certo: 0, why: "O circunflexo (^) é Shift + til." },
          { p: "Onde fica o Ç no teclado brasileiro?", opcoes: ["Ao lado do L", "Ao lado do A", "No lugar do espaço"], certo: 0, why: "Fileira base direita: J K L Ç." },
          { p: "Para que servem os risquinhos do F e do J?", opcoes: ["Achar a posição das mãos sem olhar", "Enfeitar", "Ligar o computador"], certo: 0, why: "São a referência dos indicadores." }],
        explicacao: "Til (~) para ã, õ; Shift + til (^) para â, ê, ô; Ç ao lado do L; os risquinhos do F e J guiam os indicadores." },

      { tipo: "tabela", titulo: "Digite as palavras com acento",
        enunciado: "<p>Digite exatamente igual, com o acento certo. O portal confere o acento!</p>",
        colunas: ["Palavra", "Digite aqui"],
        linhas: [
          ["café", { r: "café", exato: true, dica: "´ e depois e." }],
          ["maçã", { r: "maçã", exato: true, dica: "Ç ao lado do L; ~ e depois a." }],
          ["você", { r: "você", exato: true, dica: "Shift + ~ (vira ^) e depois e." }],
          ["avó", { r: "avó", exato: true, dica: "´ e depois o." }],
          ["pão", { r: "pão", exato: true, dica: "~ e depois a." }]],
        explicacao: "Acento sempre antes da vogal: ´ (agudo), ~ (til), Shift + ~ (circunflexo)." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Frases completas",
        enunciado: "<p>Digite igualzinho: maiúscula, acento, cedilha e pontuação.</p>",
        colunas: ["Frase", "Digite aqui"],
        linhas: [
          ["A maçã está na mesa.", { r: "A maçã está na mesa.", exato: true, dica: "A maiúsculo (Shift + a), ç ao lado do L e ponto final." }],
          ["Você já almoçou?", { r: "Você já almoçou?", exato: true, dica: "? = Shift + a tecla da barra ( / )." }],
          ["Ótimo trabalho, João!", { r: "Ótimo trabalho, João!", exato: true, dica: "Ó maiúsculo: ´ e depois Shift + o." }]],
        explicacao: "Maiúscula com Shift, acento antes da vogal, ç ao lado do L, ? com Shift + barra e ! com Shift + 1." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Um parágrafo sem erros",
        enunciado: "<p>Digite o parágrafo inteiro, igualzinho. Volte sempre os dedos para a fileira base.</p>",
        colunas: ["Parágrafo", "Digite aqui"],
        linhas: [
          ["Na Informática, aprendi a usar o teclado. Agora escrevo mais rápido e com menos erros!", { r: "Na Informática, aprendi a usar o teclado. Agora escrevo mais rápido e com menos erros!", exato: true, dica: "Confira: vírgula depois de Informática, ponto depois de teclado e exclamação no fim." }]],
        explicacao: "Treino é o segredo: com os dedos na fileira base, a velocidade aumenta sozinha." }
    ],
    vf: [
      { v: true, why: "Os risquinhos guiam os indicadores." },
      { v: false, corrigir: { trecho: "primeiro a letra e depois o acento", opcoes: ["primeiro a letra e depois o acento", "primeiro o acento e depois a letra"], certo: "primeiro o acento e depois a letra" }, why: "No ABNT2, o acento vem antes." },
      { v: true, why: "J K L Ç." },
      { v: true, why: "Shift + letra = maiúscula." },
      { v: true, why: "Os polegares apertam o espaço." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Atalhos do teclado e do mouse ============ */
  m8: {
    pratica: [
      { tipo: "info", titulo: "Como apertar um atalho",
        html: "<p>Segure a primeira tecla (<strong>Ctrl</strong>, <strong>Alt</strong> ou <strong>Windows</strong>), aperte a segunda e solte as duas. Experimente agora: selecione esta frase arrastando o mouse e aperte <strong>Ctrl + C</strong>. Pronto, você copiou!</p>" }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada atalho e o que ele faz",
        pares: [
          { a: "Ctrl + C", b: "Copiar" }, { a: "Ctrl + V", b: "Colar" }, { a: "Ctrl + X", b: "Recortar" },
          { a: "Ctrl + Z", b: "Desfazer" }, { a: "Ctrl + S", b: "Salvar" }, { a: "Ctrl + A", b: "Selecionar tudo" }],
        explicacao: "C copia; V cola; X recorta (tesoura); Z desfaz; S salva (save); A seleciona tudo (all)." },

      { tipo: "classificar", modo: "tabela", titulo: "Qual atalho eu uso?",
        colunaItem: "Situação", colunaResp: "Atalho",
        categorias: [{ id: "Z", rot: "Ctrl + Z" }, { id: "S", rot: "Ctrl + S" }, { id: "T", rot: "Alt + Tab" }, { id: "E", rot: "Windows + E" }],
        itens: [
          { t: "Apaguei um parágrafo sem querer", c: "Z", why: "Desfaz o último passo." },
          { t: "Quero guardar o trabalho antes que a luz acabe", c: "S", why: "Salva." },
          { t: "Quero ir do navegador para o editor de texto", c: "T", why: "Troca de janela." },
          { t: "Quero abrir as minhas pastas", c: "E", why: "Abre o Explorador de Arquivos." }],
        explicacao: "Ctrl + Z desfaz; Ctrl + S salva; Alt + Tab troca de janela; Windows + E abre o Explorador de Arquivos." },

      { tipo: "escolha", titulo: "Copiar ou recortar?",
        perguntas: [
          { p: "Quero o mesmo texto em dois lugares. Uso:", opcoes: ["Copiar (Ctrl + C) e colar", "Recortar (Ctrl + X) e colar", "Desfazer"], certo: 0, why: "Copiar mantém o original." },
          { p: "Quero mudar o parágrafo de lugar. Uso:", opcoes: ["Recortar (Ctrl + X) e colar", "Copiar e colar", "Salvar"], certo: 0, why: "Recortar tira do lugar." },
          { p: "Onde fica guardado o que copiei, antes de colar?", opcoes: ["Na área de transferência", "Na lixeira", "No monitor"], certo: 0, why: "É o lugar escondido que guarda até colar." }],
        explicacao: "Copiar deixa o original; recortar tira do lugar. O que foi copiado ou recortado fica na área de transferência até colar." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "Mudar um texto de lugar só com atalhos",
        itens: ["Selecionar o texto (arrastar o mouse)", "Apertar Ctrl + X (recortar)", "Clicar no lugar novo", "Apertar Ctrl + V (colar)", "Apertar Ctrl + S (salvar)"],
        explicacao: "Selecionar → recortar → clicar no lugar novo → colar → salvar." },
      { tipo: "tabela", titulo: "Treine de verdade",
        enunciado: "<p>Selecione a palavra <strong>INFORMÁTICA</strong> desta frase com duplo clique, copie com <strong>Ctrl + C</strong> e cole na caixa com <strong>Ctrl + V</strong>.</p>",
        colunas: ["O que fazer", "Cole aqui"],
        linhas: [["Copie e cole a palavra INFORMÁTICA", { r: "INFORMÁTICA", exato: true, dica: "Duplo clique na palavra, Ctrl + C, clique na caixa e Ctrl + V." }]],
        explicacao: "Duplo clique seleciona a palavra; Ctrl + C copia; Ctrl + V cola. Assim não tem erro de digitação!" }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Atalhos do mouse",
        perguntas: [
          { p: "Clique triplo num texto:", opcoes: ["Seleciona o parágrafo inteiro", "Apaga o texto", "Abre um programa"], certo: 0, why: "Duplo seleciona a palavra; triplo, o parágrafo." },
          { p: "Ctrl + rodinha do mouse:", opcoes: ["Aumenta ou diminui o tamanho da página (zoom)", "Fecha a janela", "Salva"], certo: 0, why: "Zoom." },
          { p: "Clico no 1º arquivo, seguro Shift e clico no 5º. O que acontece?", opcoes: ["Seleciona do 1º ao 5º", "Apaga os 5", "Abre só o 5º"], certo: 0, why: "Shift + clique seleciona tudo entre os dois." },
          { p: "No celular, tocar e segurar num texto mostra:", opcoes: ["Copiar e Colar", "Desligar", "Atualizar"], certo: 0, why: "É o mesmo atalho, em botão." }],
        explicacao: "Clique triplo = parágrafo; Ctrl + rodinha = zoom; Shift + clique = seleciona um intervalo; no celular, tocar e segurar mostra Copiar e Colar." }
    ],
    vf: [
      { v: true, why: "C copia, V cola." },
      { v: true, why: "Z desfaz." },
      { v: false, corrigir: { trecho: "deixa o original no lugar", opcoes: ["deixa o original no lugar", "tira o original do lugar"], certo: "tira o original do lugar" }, why: "Quem deixa o original é copiar." },
      { v: true, why: "Troca de janela." },
      { v: true, why: "A de all (tudo)." }
    ]
  },

  /* ============ 🔁 REVISÃO PARA A PROVA ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Mouse, teclado e janela",
        pares: [{ a: "Duplo clique", b: "Abrir pastas e programas" }, { a: "Clique direito", b: "Ver mais opções" }, { a: "Backspace", b: "Apagar a letra antes do cursor" }, { a: "➖ Minimizar", b: "Esconder a janela na barra de tarefas" }, { a: "❌ Fechar", b: "Fechar a janela e o programa" }],
        explicacao: "Duplo clique abre; clique direito mostra opções; Backspace apaga; ➖ esconde; ❌ fecha." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", modo: "tabela", de: "m2", titulo: "M2 · Em que etapa?", colunaItem: "Peça", colunaResp: "Etapa",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "P", rot: "Processamento" }, { id: "S", rot: "Saída" }, { id: "A", rot: "Armazenamento" }],
        itens: [{ t: "Microfone", c: "E" }, { t: "CPU", c: "P" }, { t: "Impressora", c: "S" }, { t: "SSD", c: "A" }, { t: "Câmera", c: "E" }, { t: "Monitor", c: "S" }],
        explicacao: "Entrada recebe; processamento calcula; saída mostra; armazenamento guarda." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Hardware e software",
        perguntas: [
          { p: "O teclado é:", opcoes: ["Hardware", "Software", "Sistema operacional"], certo: 0, why: "Dá para tocar." },
          { p: "Android e Windows são:", opcoes: ["Exemplos de sistema operacional", "Aplicativos", "Peças"], certo: 0, why: "Comandam o aparelho." },
          { p: "O aplicativo que abre sites é o:", opcoes: ["Navegador", "Processador", "Gabinete"], certo: 0, why: "Chrome, Edge, Firefox." }],
        explicacao: "Hardware = peça; software = programa; sistema operacional comanda; navegador abre sites." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", modo: "tabela", de: "m4", titulo: "M4 · Que tipo de arquivo?", colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "Texto" }, { id: "I", rot: "Imagem" }, { id: "A", rot: "Áudio" }, { id: "V", rot: "Vídeo" }],
        itens: [{ t: "carta.docx", c: "T" }, { t: "praia.jpg", c: "I" }, { t: "forro.mp3", c: "A" }, { t: "gol.mp4", c: "V" }, { t: "nota.txt", c: "T" }],
        explicacao: ".docx/.txt texto; .jpg imagem; .mp3 áudio; .mp4 vídeo." },
      { tipo: "relembre", de: "m5" },
      { tipo: "tabela", de: "m5", titulo: "M5 · Tipo de dado", colunas: ["Dado", "Tipo"],
        linhas: [["Nome do aluno", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }], ["Nota 7,5", { op: ["Texto", "Número", "Data", "Lógico"], r: "Número" }], ["15/03/2027", { op: ["Texto", "Número", "Data", "Lógico"], r: "Data" }], ["Veio à aula? sim", { op: ["Texto", "Número", "Data", "Lógico"], r: "Lógico" }], ["CEP 68523-000", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }]],
        explicacao: "Nome e CEP = texto; nota = número; 15/03/2027 = data; sim/não = lógico." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Boa convivência",
        perguntas: [
          { p: "Escrever TUDO EM MAIÚSCULAS na internet parece:", opcoes: ["Grito", "Educação", "Elogio"], certo: 0 },
          { p: "Desconhecido pede foto e segredo. Eu:", opcoes: ["Parar a conversa e contar para um adulto de confiança", "Mando a foto", "Guardo segredo"], certo: 0 },
          { p: "As boas maneiras na internet se chamam:", opcoes: ["Netiqueta", "Navegador", "Atalho"], certo: 0 }],
        explicacao: "Maiúsculas = grito. Pedido de foto e segredo = perigo: parar e contar. Netiqueta = boas maneiras na rede." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Digitação",
        perguntas: [
          { p: "Os dedos descansam na:", opcoes: ["Fileira base (A S D F … J K L Ç)", "Fileira dos números", "Barra de espaço"], certo: 0 },
          { p: "Para “é”, aperto:", opcoes: ["´ e depois e", "e e depois ´", "Shift + e"], certo: 0 }],
        explicacao: "Fileira base: A S D F e J K L Ç. Acento antes da vogal." },
      { tipo: "relembre", de: "m8" },
      { tipo: "ligar", de: "m8", titulo: "M8 · Atalhos",
        pares: [{ a: "Ctrl + C", b: "Copiar" }, { a: "Ctrl + V", b: "Colar" }, { a: "Ctrl + Z", b: "Desfazer" }, { a: "Alt + Tab", b: "Trocar de janela" }],
        explicacao: "C copia; V cola; Z desfaz; Alt + Tab troca de janela." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1",
        perguntas: [{ p: "O programa está na barra de tarefas, mas a janela sumiu. Ela foi:", opcoes: ["Minimizada", "Fechada", "Apagada"], certo: 0, why: "Minimizada continua aberta." }],
        explicacao: "Resposta: Minimizada. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2",
        perguntas: [{ p: "Faltou luz e o trabalho não salvo sumiu. Ele estava só na:", opcoes: ["RAM", "SSD", "Pen drive"], certo: 0, why: "A RAM apaga ao desligar." }],
        explicacao: "Resposta: RAM. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3",
        perguntas: [{ p: "O jogo travou na fase 3. O problema é de:", opcoes: ["Software", "Hardware", "Monitor"], certo: 0, why: "Programa travado = software." }],
        explicacao: "Resposta: Software. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "tabela", de: "m4", titulo: "Desafio M4", colunas: ["Caminho", "Pasta do arquivo"],
        linhas: [["Documentos › Escola › Ciências › planta.jpg", { r: ["Ciências", "Ciencias"], dica: "A última pasta antes do arquivo." }]],
        explicacao: "O arquivo está na última pasta antes do nome dele." },
      { tipo: "escolha", de: "m5", titulo: "Desafio M5",
        perguntas: [{ p: "Times com pontos, vitórias e gols ficam melhor numa:", opcoes: ["Tabela", "Lista", "Imagem"], certo: 0, why: "Várias informações por item = tabela." }],
        explicacao: "Resposta: Tabela. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m6", titulo: "Desafio M6",
        perguntas: [{ p: "Viram uma ofensa contra um colega. O certo é:", opcoes: ["Não compartilhar, apoiar o colega, guardar o print e denunciar", "Compartilhar", "Rir junto"], certo: 0 }],
        explicacao: "Resposta: Não compartilhar, apoiar o colega, guardar o print e denunciar. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "tabela", de: "m7", titulo: "Desafio M7", colunas: ["Frase", "Digite aqui"],
        linhas: [["Eu já sei digitar!", { r: "Eu já sei digitar!", exato: true, dica: "E maiúsculo, já com acento e ! no fim (Shift + 1)." }]],
        explicacao: "Shift para a maiúscula, acento antes da vogal, Shift + 1 para a exclamação." },
      { tipo: "escolha", de: "m8", titulo: "Desafio M8",
        perguntas: [{ p: "Quero mudar um parágrafo de lugar:", opcoes: ["Ctrl + X e depois Ctrl + V", "Ctrl + C e depois Ctrl + Z", "Ctrl + S"], certo: 0, why: "Recortar e colar." }],
        explicacao: "Resposta: Ctrl + X e depois Ctrl + V. Errou? Releia o 📚 Relembre da missão." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1",
        perguntas: [{ p: "A barrinha que pisca onde a letra vai aparecer é o:", opcoes: ["Cursor", "Ponteiro", "Ícone"], certo: 0 }, { p: "Caps Lock ligado:", opcoes: ["Todas as letras maiúsculas", "Fecha a janela", "Apaga a letra"], certo: 0 }],
        explicacao: "Resposta: Cursor · Todas as letras maiúsculas. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2",
        perguntas: [{ p: "A tela touchscreen é:", opcoes: ["Entrada e saída", "Só saída", "Só armazenamento"], certo: 0 }, { p: "CPU significa:", opcoes: ["Unidade Central de Processamento", "Computador Pessoal Útil", "Cabo de Ponta Única"], certo: 0 }],
        explicacao: "Resposta: Entrada e saída · Unidade Central de Processamento. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3",
        perguntas: [{ p: "O programa principal, que liga primeiro, é o:", opcoes: ["Sistema operacional", "Aplicativo", "Navegador"], certo: 0 }, { p: "A tela trincou. O problema é de:", opcoes: ["Hardware", "Software", "Atualização"], certo: 0 }],
        explicacao: "Resposta: Sistema operacional · Hardware. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4",
        perguntas: [{ p: "O final .pdf é a:", opcoes: ["Extensão", "Pasta", "Senha"], certo: 0 }, { p: "Qual é o melhor nome?", opcoes: ["trabalho-historia.docx", "sem título 7.docx", "xxx.docx"], certo: 0 }],
        explicacao: "Resposta: Extensão · trabalho-historia.docx. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m5", titulo: "Turbo · Simulado M5",
        perguntas: [{ p: "Um dado que só pode ser verdadeiro ou falso é do tipo:", opcoes: ["Lógico", "Texto", "Vídeo"], certo: 0 }, { p: "A playlist é uma:", opcoes: ["Lista", "Tabela", "Data"], certo: 0 }],
        explicacao: "Resposta: Lógico · Lista. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6",
        perguntas: [{ p: "Antes de postar a foto de um amigo, eu:", opcoes: ["Peço permissão", "Posto e pronto", "Posto escondido"], certo: 0 }, { p: "O print serve como:", opcoes: ["Prova", "Senha", "Atalho"], certo: 0 }],
        explicacao: "Resposta: Peço permissão · Prova. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m7", titulo: "Turbo · Simulado M7",
        perguntas: [{ p: "O teclado brasileiro, com Ç, é o:", opcoes: ["ABNT2", "USB", "CPU"], certo: 0 }],
        explicacao: "Resposta: ABNT2. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m8", titulo: "Turbo · Simulado M8",
        perguntas: [{ p: "Windows + E abre o:", opcoes: ["Explorador de Arquivos", "Navegador", "Bloco de Notas"], certo: 0 }, { p: "Ctrl + A:", opcoes: ["Seleciona tudo", "Apaga tudo", "Abre o arquivo"], certo: 0 }],
        explicacao: "Resposta: Explorador de Arquivos · Seleciona tudo. Errou? Releia o 📚 Relembre da missão." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-1bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Mouse, teclado e janelas", perguntas: [{"p": "Você quer ver mais opções de um ícone. Qual ação do mouse usa?", "opcoes": ["Clique direito", "Duplo clique", "Rolar a rodinha"], "certo": 0}, {"p": "Qual tecla confirma ou pula para a linha de baixo?", "opcoes": ["Shift", "Enter", "Backspace"], "certo": 1}, {"p": "Qual botão faz a janela ocupar a tela toda?", "opcoes": ["➖ Minimizar", "❌ Fechar", "⬜ Maximizar"], "certo": 2}],
      explicacao: "Você quer ver mais opções de um ícone. Qual ação do mouse usa? → <strong>Clique direito</strong> · Qual tecla confirma ou pula para a linha de baixo? → <strong>Enter</strong> · Qual botão faz a janela ocupar a tela toda? → <strong>⬜ Maximizar</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Entrada, processamento e saída", perguntas: [{"p": "A câmera do celular é uma peça de:", "opcoes": ["Entrada", "Saída", "Armazenamento"], "certo": 0}, {"p": "A caixa de som é uma peça de:", "opcoes": ["Entrada", "Saída", "Processamento"], "certo": 1}, {"p": "O pen drive serve para:", "opcoes": ["Fazer as contas", "Mostrar a imagem", "Guardar os arquivos para depois"], "certo": 2}],
      explicacao: "A câmera do celular é uma peça de: → <strong>Entrada</strong> · A caixa de som é uma peça de: → <strong>Saída</strong> · O pen drive serve para: → <strong>Guardar os arquivos para depois</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Hardware e software", perguntas: [{"p": "O monitor é:", "opcoes": ["Hardware", "Software", "Sistema operacional"], "certo": 0}, {"p": "O jogo instalado no celular é:", "opcoes": ["Hardware", "Software", "Uma peça"], "certo": 1}, {"p": "Qual destes é um sistema operacional de celular?", "opcoes": ["Navegador", "Calculadora", "Android"], "certo": 2}],
      explicacao: "O monitor é: → <strong>Hardware</strong> · O jogo instalado no celular é: → <strong>Software</strong> · Qual destes é um sistema operacional de celular? → <strong>Android</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Pastas e arquivos", perguntas: [{"p": "A extensão .mp4 é de:", "opcoes": ["Vídeo", "Foto", "Texto"], "certo": 0}, {"p": "Documentos › Escola › Informática › trabalho.docx. O trabalho está na pasta:", "opcoes": ["Documentos", "Informática", "Downloads"], "certo": 1}, {"p": "Qual é o melhor nome para um arquivo?", "opcoes": ["sem título 3", "IMG_0001", "redacao-meio-ambiente"], "certo": 2}],
      explicacao: "A extensão .mp4 é de: → <strong>Vídeo</strong> · Documentos › Escola › Informática › trabalho.docx. O trabalho está na pasta: → <strong>Informática</strong> · Qual é o melhor nome para um arquivo? → <strong>redacao-meio-ambiente</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Tipos de dados", perguntas: [{"p": "A data 10/05/2027 é um dado do tipo:", "opcoes": ["Data", "Imagem", "Lógico"], "certo": 0}, {"p": "O CEP é um dado do tipo:", "opcoes": ["Número para contas", "Texto", "Vídeo"], "certo": 1}, {"p": "O boletim (aluno, nota, faltas) é organizado como:", "opcoes": ["Uma lista só de nomes", "Uma imagem", "Uma tabela"], "certo": 2}],
      explicacao: "A data 10/05/2027 é um dado do tipo: → <strong>Data</strong> · O CEP é um dado do tipo: → <strong>Texto</strong> · O boletim (aluno, nota, faltas) é organizado como: → <strong>Uma tabela</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Boa convivência na rede", perguntas: [{"p": "Antes de postar a foto de um amigo, eu:", "opcoes": ["Peço permissão a ele", "Posto sem perguntar", "Mando para desconhecidos"], "certo": 0}, {"p": "Viu um colega sendo ofendido no grupo. O que fazer?", "opcoes": ["Compartilhar para todos verem", "Não compartilhar, apoiar e contar a um adulto", "Rir junto"], "certo": 1}, {"p": "Qual destes é um dado pessoal?", "opcoes": ["A cor favorita", "O nome do time favorito", "O endereço de casa"], "certo": 2}],
      explicacao: "Antes de postar a foto de um amigo, eu: → <strong>Peço permissão a ele</strong> · Viu um colega sendo ofendido no grupo. O que fazer? → <strong>Não compartilhar, apoiar e contar a um adulto</strong> · Qual destes é um dado pessoal? → <strong>O endereço de casa</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Digitação sem medo", perguntas: [{"p": "Em que fileira os dedos descansam?", "opcoes": ["Na fileira base (A S D F … J K L Ç)", "Na fileira dos números", "Na barra de espaço"], "certo": 0}, {"p": "Para escrever “ã”, aperto primeiro:", "opcoes": ["A letra a", "A tecla do til ( ~ )", "A tecla Enter"], "certo": 1}, {"p": "Para várias letras maiúsculas seguidas, uso:", "opcoes": ["Backspace", "Enter", "Caps Lock"], "certo": 2}],
      explicacao: "Em que fileira os dedos descansam? → <strong>Na fileira base (A S D F … J K L Ç)</strong> · Para escrever “ã”, aperto primeiro: → <strong>A tecla do til ( ~ )</strong> · Para várias letras maiúsculas seguidas, uso: → <strong>Caps Lock</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Atalhos do teclado e do mouse", perguntas: [{"p": "Qual atalho seleciona tudo?", "opcoes": ["Ctrl + A", "Ctrl + Z", "Ctrl + V"], "certo": 0}, {"p": "Qual atalho troca de janela?", "opcoes": ["Ctrl + S", "Alt + Tab", "Ctrl + C"], "certo": 1}, {"p": "Recortar um texto (Ctrl + X):", "opcoes": ["Deixa o original e faz uma cópia", "Salva o trabalho", "Tira do lugar para colar em outro"], "certo": 2}],
      explicacao: "Qual atalho seleciona tudo? → <strong>Ctrl + A</strong> · Qual atalho troca de janela? → <strong>Alt + Tab</strong> · Recortar um texto (Ctrl + X): → <strong>Tira do lugar para colar em outro</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();
