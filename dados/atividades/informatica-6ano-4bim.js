/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   Baseadas nas tarefas da apostila impressa.
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    basico: [
      { tipo: "classificar", titulo: "Monte o computador: cada peça no seu papel",
        enunciado: "<p>Na apostila impressa você desenha o computador e escreve <strong>E</strong> (entrada) ou <strong>S</strong> (saída) em cada parte. Aqui, organize as peças nas 4 funções que você estudou.</p>",
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
          "Feche o Bloco de Notas, abra a sua pasta e dê duplo clique no arquivo para abri-lo de novo.",
          "Com o arquivo aberto, chame o professor para conferir e carimbar."] }
    ],
    desafio: [
      { tipo: "pc", titulo: "No computador: organizando em pastas",
        programa: "Explorador de Arquivos",
        passos: ["Dentro da sua pasta, crie as pastas <strong>Textos</strong> e <strong>Desenhos</strong>.", "Arraste o arquivo <strong>Sobre mim</strong> para a pasta Textos.", "Clique com o botão direito no arquivo → <strong>Propriedades</strong> e veja os metadados."] },
      { tipo: "aberta", titulo: "Anote os metadados do arquivo “Sobre mim”",
        campos: [{ rot: "Tipo", linhas: 1 }, { rot: "Tamanho", linhas: 1 }, { rot: "Data de criação", linhas: 1 }],
        criterios: ["Copiei exatamente o que aparece na janela Propriedades."] },
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
      { tipo: "aberta", titulo: "Descubra uma peça que é ao mesmo tempo entrada e saída. Explique.",
        linhas: 3, criterios: ["Dei o nome da peça.", "Expliquei o que ela recebe (entrada) e o que ela mostra ou devolve (saída)."],
        exemplo: "A tela sensível ao toque (touchscreen) do celular: ela mostra imagens (saída) e recebe o toque do dedo (entrada). Outro exemplo: o fone de ouvido com microfone." }
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

      { tipo: "pc", titulo: "No computador: o algoritmo no Paint", programa: "Paint",
        passos: ["Abra o <strong>Paint</strong>.", "<strong>Repita 5 vezes:</strong> desenhe um quadrado e deixe um espaço à direita.", "Pinte de preto o 1º, o 3º e o 5º quadrado; deixe os outros brancos.", "Chame o professor para conferir o desenho e carimbar."] }
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
        criterios: ["A condição é uma pergunta de sim ou não.", "O “então” e o “senão” são ações diferentes."], opcional: true }
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
    basico: [
      { tipo: "aberta", titulo: "Reescreva as mensagens de forma respeitosa",
        enunciado: "<p>Mantenha a ideia, mas sem ofender. O portal avisa se ainda sobrar alguma palavra ofensiva.</p>",
        campos: [{ rot: "“Seu desenho ficou horrível, kkkk”", linhas: 2 }, { rot: "“Sai do grupo, ninguém gosta de você”", linhas: 2 }, { rot: "“Você é burro, errou tudo”", linhas: 2 }],
        detector: { palavras: ["horrivel", "kkkk", "kkk", "burro", "burra", "ninguem gosta", "sai do grupo", "idiota", "feio"], msg: "Escreva como se a pessoa estivesse na sua frente." },
        criterios: ["Não tem apelido, xingamento nem risada de deboche.", "Dá para entender o que a pessoa quis dizer.", "Ajuda ou incentiva em vez de humilhar."],
        exemplo: "“Acho que o seu desenho pode ficar ainda melhor com mais cores!” · “Vamos combinar as regras do grupo juntos?” · “Errar faz parte. Quer ajuda para revisar?”" },
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
        passos: ["Abra o <strong>Paint</strong>.", "Escreva o título <strong>Cidadão Digital</strong>.", "Faça um desenho e escreva uma frase sobre respeito na internet ou consumo consciente.", "Chame o professor para conferir e carimbar."] }
    ],
    desafio: [
      { tipo: "senha", titulo: "Invente 2 senhas fortes (que você NÃO vai usar de verdade)", n: 2,
        explicacao: "Senha forte é longa e mistura letras maiúsculas e minúsculas, números e símbolos. Nada de 123456, nome ou data de nascimento." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "Mensagem para um colega que está sofrendo cyberbullying", linhas: 4,
        criterios: ["Mostro que me importo com ele.", "Digo o que ele pode fazer: guardar provas (print), bloquear e contar a um adulto de confiança.", "A mensagem é respeitosa."],
        exemplo: "“Sinto muito pelo que estão fazendo com você. Não é culpa sua. Tire print das mensagens, bloqueie quem está te ofendendo e conte para o professor ou para alguém da sua família. Conte comigo!”" }
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
      { tipo: "autoavaliacao", titulo: "Folheie a apostila impressa: quais missões já têm o carimbo do Básico?",
        itens: ["🌐 Missão 1 – O computador e meus arquivos", "🧩 Missão 2 – Algoritmos", "🤝 Missão 3 – Cidadão digital"] },
      { tipo: "info", titulo: "Faltou algum carimbo?", html: "<p>Se faltar algum carimbo (por exemplo, porque você faltou à aula), volte à missão agora, faça o Básico e peça o carimbo ao professor.</p>" },
      { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
        campos: [{ rot: "🌐 O computador e meus arquivos", linhas: 2 }, { rot: "🧩 Algoritmos", linhas: 2 }, { rot: "🤝 Cidadão digital", linhas: 2 }],
        criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."], minPalavras: 4 }
    ],
    desafio: [
      { tipo: "pc", titulo: "No computador: digite as suas três frases", programa: "Bloco de Notas",
        passos: ["Digite as três frases no Bloco de Notas.", "Confira letra maiúscula, acentos e pontuação.", "Mostre ao professor."] }
    ],
    turbo: [
      { tipo: "pc", titulo: "Apresente para a turma", programa: "Projetor da sala",
        passos: ["Escolha a missão de que você mais gostou.", "Prepare duas ou três frases dizendo por quê.", "Apresente para a turma, no projetor."] }
    ]
  }
});
