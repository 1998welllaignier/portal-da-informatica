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
        okMsg: "Pasta criada e arquivo salvo! Você sabe guardar e encontrar os seus arquivos." }
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
        explicacao: "Metadados são dados sobre os dados: nome, tipo, tamanho e data. O texto escrito dentro do arquivo é o conteúdo." }
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

      { tipo: "pintura", titulo: "Siga o algoritmo do Paint",
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
        explicacao: "Senha forte: comprida, com maiúscula, minúscula, número e símbolo, e sem sequências fáceis. E nunca conte para ninguém!" }
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
      { tipo: "pc", titulo: "No computador: cartaz Cidadão Digital", programa: "Paint",
        passos: ["Abra o <strong>Paint</strong>.", "Escreva o título <strong>Cidadão Digital</strong>.", "Faça um desenho e escreva uma frase sobre respeito na internet ou consumo consciente.", "Deixe o cartaz aberto na tela (o professor vê pelo Veyon) e responda à conferência abaixo."],
        conferir: [{ rot: "Qual é o título do seu cartaz?", ph: "Título…", gab: "Cidadão Digital", re: "cidad[aã]o\\s+digital", dica: "O título é <strong>Cidadão Digital</strong>." },
          { rot: "Copie aqui a frase que você escreveu no cartaz:", ph: "A minha frase…", gab: "uma frase sobre respeito na internet ou consumo consciente", re: "\\S+\\s+\\S+\\s+\\S+\\s+\\S+", dica: "Copie a frase inteira (pelo menos 4 palavras)." }],
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
