/* Roteiro da aula (só para o professor) — 8º ano, 4º bimestre
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal. */
(function () {
  const TEMPO = [
    { min: 10, icone: "🎬", t: "Pergunta, dinâmica e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
    { min: 30, icone: "🧩", t: "Missão no portal" },
    { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  const SIGLAS = "Depois do vídeo, leia o quadro “O que significa?”. Para cada sigla: as letras em inglês, a tradução e onde aparece (navegador, celular, computador da sala). Pergunte: “Alguém já tinha visto isso? Onde?”";

  PORTAL.registrarRoteiro("informatica-8ano-4bim", {
    antes: [
      "📽️ Projetor ligado e vídeo da missão aberto (sem som: você lê os textos)",
      "🖥️ Veyon aberto, todos os computadores aparecendo",
      "🪪 Cartões com os códigos dos alunos",
      "🗺️ Mapa de lugares conferido",
      "▶️ Programa do dia testado pelo “Executar programa” do Veyon",
      "✂️ Material da dinâmica (cartões 7, 2, 9, 4, 5 na Missão 1; 20 folhas e 1 caneta na Missão 2; 3 manchetes na Missão 3)",
      "🎮 Jogos da recreação fechados até o ✔ do Básico"
    ],
    m1: {
      datas: "8º C, 8º D, 8º A e 8º B: 04/11 · Primeira aula: comece pelos combinados",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês procuram um contato no celular, ele aparece em menos de um segundo, mesmo com centenas de nomes. Como o celular encontra tão rápido? Ele olha nome por nome?" },
        { acao: "Ouça 3 ou 4 respostas sem corrigir. Depois:" },
        { fala: "No 7º ano vocês aprenderam que uma lista guarda dados em posições. Hoje vamos ver os dois trabalhos que o computador mais faz com uma lista: procurar e colocar em ordem. E vocês vão fazer isso do mesmo jeito que ele faz." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Adivinhe o número (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Pense em um número de 1 a 100 e deixe a turma chutar à vontade; conte as tentativas no quadro. Jogue de novo, agora com a estratégia:" },
            { fala: "Sempre chutem o meio. Eu respondo maior ou menor, e vocês jogam fora metade." },
            { acao: "Com o meio, ninguém passa de 7 tentativas." },
            { fala: "O que vocês fizeram agora tem nome: busca binária. Só funciona porque os números de 1 a 100 estão em ordem." }
          ]
        },
        {
          titulo: "🫧 Dinâmica: Fila da bolha (5 min)", cor: "c-rosa",
          itens: [
            { acao: "Chame 5 alunos com os cartões 7, 2, 9, 4 e 5, em fila nessa ordem. A turma compara só dois vizinhos por vez: “Estão em ordem? Não? Troquem!” Vá até o fim da fila e faça mais uma ou duas passadas." },
            { fala: "Viram que o maior subiu para o fim, como uma bolha no copo de refrigerante? Cada volta na fila é uma passada. Quando uma passada termina sem nenhuma troca, a lista está ordenada." }
          ]
        }
      ],
      siglas: SIGLAS,
      onde: {
        pergunta: "Se os contatos do celular não ficassem em ordem, quanto tempo vocês levariam para achar um nome?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. No Explorador de Arquivos, mostre que dá para ordenar por nome, data ou tamanho: ordenar listas é algo que fazemos todo dia."
      },
      demonstracao: "No quadro, resolva a 1ª passada de [6, 3, 9, 1] só até a primeira troca; o resto é com eles.",
      atencao: [
        "Para achar o meio: somar a primeira e a última posição, dividir por 2 e desprezar a vírgula.",
        "Muitos confundem posição com valor. Pergunte sempre: “Estou falando do lugar na fila ou do número no cartão?”",
        "No Desafio em dupla, quem pensa no número só pode responder “maior”, “menor” ou “acertou”. Se brigarem ou chutarem, troque os papéis no meio."
      ],
      perguntas: [
        { p: "Por que a busca binária não funciona numa lista desordenada?", r: "Porque olhar o meio não diz em qual metade o número está, então não dá para jogar nada fora." },
        { p: "Quantas tentativas de 1 a 1.000?", r: "Cerca de 10, porque 2 multiplicado 10 vezes dá 1.024." }
      ],
      curiosidade: "Com a busca binária, uma lista de 1 bilhão de itens ordenados é vasculhada em cerca de 30 tentativas. Por isso os buscadores e os contatos do celular guardam os dados em ordem."
    },
    m2: {
      datas: "8º C, 8º D, 8º A e 8º B: 11/11",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês assistem a um vídeo no celular, onde esse vídeo está guardado? Dentro do celular? Em Curionópolis? Em outro país?" },
        { acao: "Ouça as respostas. Depois:" },
        { fala: "O vídeo está num prédio cheio de computadores, chamado data center, que pode ficar a milhares de quilômetros daqui. No 7º ano vocês viram os pacotes e os roteadores. Hoje vamos ver o caminho inteiro e como esses computadores dão conta de tanta gente ao mesmo tempo." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Sozinho ou em equipe? (5 min)", cor: "c-roxo",
          itens: [
            { acao: "1️⃣ Um aluno dobra 20 folhas ao meio, sozinho; a turma conta o tempo em voz alta." },
            { acao: "2️⃣ Agora 4 alunos, 5 folhas cada, ao mesmo tempo. Compare os tempos." },
            { fala: "Dividir o trabalho e fazer ao mesmo tempo é o paralelismo. O processador do celular tem vários núcleos que fazem exatamente isso." },
            { acao: "3️⃣ Entregue UMA caneta aos 4 e peça que cada um escreva o nome no quadro. Eles têm de esperar a vez." },
            { fala: "Isso é concorrência: várias tarefas querendo o mesmo recurso. É o que acontece com a nossa impressora quando todo mundo manda imprimir: forma uma fila." }
          ]
        }
      ],
      onde: {
        pergunta: "Se o aplicativo de fotos saísse do ar hoje, vocês perderiam alguma coisa? Onde estão as fotos de vocês?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Aproveite para falar de backup: guardar uma cópia em mais de um lugar."
      },
      demonstracao: "Abra o Paint em todos os computadores de uma vez pelo Veyon e diga: “Acabei de mandar 19 tarefas em paralelo.”",
      atencao: [
        "Compare o DNS com a agenda do celular: ninguém decora o número do amigo, procura pelo nome. O computador procura o IP pelo nome do site.",
        "No mapa da internet vale a ordem certa e o nome de cada parte, não o capricho do desenho.",
        "Se perguntarem se a nuvem fica no céu: “nuvem” é só o apelido; os arquivos estão em servidores de verdade, no chão, dentro dos data centers."
      ],
      perguntas: [
        { p: "Por que guardar cópias em vários data centers?", r: "Para os arquivos continuarem disponíveis e não se perderem se um prédio falhar." },
        { p: "O que o DNS faz?", r: "Traduz o nome do site para o endereço IP do servidor, como a agenda do celular troca o nome pelo número." }
      ],
      curiosidade: "Desde 2021, o cabo submarino EllaLink liga Fortaleza (CE) a Sines, em Portugal. É por cabos assim, e não por satélite, que passa quase todo o tráfego de internet entre continentes."
    },
    m3: {
      datas: "8º C, 8º D, 8º A e 8º B: 18/11 · No fim da aula, avise sobre a avaliação",
      tempo: TEMPO,
      abertura: [
        { fala: "Levante a mão quem já instalou um aplicativo ou criou uma conta e clicou em ‘Aceito’ sem ler nada." },
        { acao: "Quase todos levantam. Em seguida:" },
        { fala: "Quando vocês clicam em ‘Aceito’, estão assinando um contrato. Muitos aplicativos gratuitos ganham dinheiro com os nossos dados e com a propaganda feita a partir deles. Hoje vocês vão aprender a ler o que estão aceitando e a desconfiar do que recebem." }
      ],
      extras: [
        {
          titulo: "🕵️ Dinâmica: Detetive de notícias (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Leia 3 manchetes inventadas: uma confiável (com veículo e data), uma com título exagerado e “compartilhe já”, e uma notícia antiga circulando como nova. A turma vota: confiável ou não?" },
            { fala: "Qual das 4 perguntas do checador denunciou essa notícia: quem publicou, quando, outros confirmam ou como está escrita?" },
            { acao: "Para a parte de permissões:" },
            { fala: "Uma lanterna precisa saber onde você está? Precisa da sua lista de contatos? Se o aplicativo pede mais do que precisa, ele quer os seus dados, não te ajudar." }
          ]
        }
      ],
      onde: {
        pergunta: "Qual foi a última vez que um aplicativo pediu a localização de vocês? Ele precisava mesmo?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Mostre no seu celular onde ficam as permissões dos aplicativos, sem abrir dados pessoais na frente da turma."
      },
      atencao: [
        "Ninguém escreve CPF, endereço, telefone ou senha verdadeiros no portal nem no computador. Repita várias vezes.",
        "Termos de uso da sala: no fim, deixe 2 ou 3 lerem regras em voz alta; guarde as melhores para os combinados do próximo ano.",
        "No Desafio do FotoTop, destaque a frase sobre compartilhar dados com empresas de publicidade: é a parte que quase ninguém lê.",
        "Aluno relata fotos ou dados expostos: agradeça, não peça detalhes na frente da turma, converse depois e encaminhe à direção."
      ],
      perguntas: [
        { p: "O que é pegada digital?", r: "O rastro do que publicamos, curtimos e comentamos, que pode continuar visível por anos." },
        { p: "O que é dado sensível?", r: "Dado que pode causar discriminação se for exposto, como impressão digital ou informação sobre doença." }
      ],
      curiosidade: "“Se o serviço é de graça, talvez o produto seja você.” A frase ajuda a turma a lembrar que os dados têm valor."
    },
    pf: {
      datas: "Avaliação: 25/11 · Projeto final: 02/12 · Segunda chamada: 09/12",
      tempo: [
        { min: 10, icone: "🎬", t: "Abertura" },
        { min: 45, icone: "🏁", t: "Missões que faltaram e projeto final" },
        { min: 10, icone: "🎤", t: "Apresentações (Turbo)" },
        { min: 10, icone: "🎮", t: "Recreação" }
      ],
      abertura: [
        { acao: "No dia da prova:" },
        { fala: "A prova é no Wayground e vale até 5 pontos. Leiam cada pergunta com calma; tudo o que cai está nos Resumos da Aula e nas Perguntas rápidas. Nas questões de busca e de ordenação, façam as contas no rascunho antes de marcar. Quem terminar fica em silêncio até todos acabarem." },
        { acao: "No dia do projeto final:" },
        { fala: "Hoje é o dia de fechar o bimestre. Cada um confere no portal quais missões já têm o ✔. Quem faltou a alguma faz agora o Básico dela. Depois, escrevam o que aprenderam em cada tema." }
      ],
      atencao: [
        "Abra o painel (aba Turmas) e veja quem ainda não tem o ✔ do Básico: chame esses alunos pelo nome primeiro.",
        "Use o Turbo (apresentar no projetor) como fechamento; turma tímida: dois ou três leem do lugar mesmo. A apresentação é a atividade que VOCÊ confere.",
        "Em 09/12, enquanto os faltosos fazem a segunda chamada, os demais terminam Desafios e Turbos pendentes."
      ]
    }
  });
})();
