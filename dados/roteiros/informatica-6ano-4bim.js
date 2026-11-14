/* Roteiro da aula (só para o professor) — 6º ano, 4º bimestre
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal. */
PORTAL.registrarRoteiro("informatica-6ano-4bim", {
  antes: [
    "🔊 Caixinha de som",
    "🖥️ Computadores ligados pelo Veyon",
    "🎬 Vídeo da missão aberto no computador do professor",
    "🪪 Cartões com os códigos dos alunos",
    "🎮 Jogos da recreação definidos"
  ],
  m1: {
    datas: "6º A e 6º B: 05/11 · 6º C: 09/11",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura e vídeo" },
      { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
      { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
      { min: 30, icone: "💻", t: "Missão no portal" },
      { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Boa tarde, turma! Neste bimestre a gente vai trabalhar com missões no Portal da Informática. Cada aula é uma missão, e quem concluir o Básico ganha um ✔ que eu vejo no meu painel." },
      { fala: "Primeiro, uma pergunta: quando vocês fazem uma conta na calculadora do celular, o que acontece lá dentro?" },
      { acao: "Ouça 2 ou 3 respostas, sem corrigir." },
      { fala: "O computador trabalha em três etapas: ele recebe a informação, que é a ENTRADA; faz a conta, que é o PROCESSAMENTO; e mostra o resultado, que é a SAÍDA." },
      { acao: "No projetor, abra a Calculadora, digite 2 + 3 e mostre o 5." },
      { fala: "O que foi a entrada? E a saída?" },
      { fala: "Hoje vocês vão criar uma pasta que vai guardar os seus trabalhos. Cuidado com ela: não pode apagar!" }
    ],
    siglas: "Depois do vídeo, leia com a turma o quadro “O que significa?”. Para cada termo: o que é e onde aparece. Pergunte: “Alguém já tinha visto isso? Onde?”",
    onde: {
      pergunta: "Quem aqui já perdeu uma foto, um jogo salvo ou um trabalho? O que aconteceu?",
      fechamento: "Tudo o que vimos hoje serve para isso não acontecer de novo.",
      dica: "Ouça 3 ou 4 alunos. Se ninguém falar, conte um exemplo seu. Puxe exemplos da cidade: o caixa do mercado e a maquininha de cartão também têm entrada, processamento e saída."
    },
    demonstracao: "Pelo Veyon, mostre devagar: botão direito → Novo → Pasta → digitar o nome → Enter. É o passo em que mais travam.",
    atencao: [
      "Muitos chamam o monitor de “computador”. Mostre que o computador de verdade é o gabinete.",
      "O pen drive é armazenamento: não é entrada nem saída. Ele guarda arquivos.",
      "A ordem para salvar o arquivo é onde mais erram. Faça junto com a turma pelo Veyon."
    ],
    perguntas: [
      { p: "O pen drive é entrada ou saída?", r: "Nenhum dos dois: é armazenamento, ele guarda arquivos." },
      { p: "Por que o arquivo sumiu?", r: "Provavelmente foi salvo em outra pasta. Procure em Documentos ou pela busca do Explorador e arraste para a pasta certa." },
      { p: "O mouse é entrada ou saída?", r: "Entrada: leva o movimento e o clique para dentro do computador." }
    ],
    curiosidade: "O primeiro computador eletrônico, o ENIAC (1946), ocupava uma sala inteira e pesava cerca de 27 toneladas."
  },
  m2: {
    datas: "6º A e 6º B: 12/11 · 6º C: 16/11",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura e vídeo" },
      { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
      { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
      { min: 30, icone: "💻", t: "Missão no portal" },
      { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Hoje eu sou um robô. Eu só faço exatamente o que vocês mandarem. Me ensinem a sentar naquela cadeira." },
      { acao: "Siga as ordens ao pé da letra: se disserem “senta”, agache no lugar; se disserem “anda”, ande sem parar até baterem na mesa. A turma vai rir e corrigir as ordens." },
      { fala: "Viram? O robô não adivinha nada. O computador também é assim. Uma lista de passos claros e em ordem para resolver um problema se chama ALGORITMO." },
      { acao: "Durante o vídeo, na parte das instruções:" },
      { fala: "Existem três tipos de instrução. SEQUÊNCIA é um passo depois do outro. REPETIÇÃO é quando um passo se repete: em vez de “ande, ande, ande, ande”, eu escrevo “repita 4 vezes: ande”. E SELEÇÃO é quando tem uma escolha: se estiver chovendo, então levo guarda-chuva; senão, levo boné." }
    ],
    onde: {
      pergunta: "Vocês seguiram algum algoritmo hoje antes de vir para a escola? Qual foi o primeiro passo?",
      dica: "Ouça 3 ou 4 alunos. Se ninguém falar, conte um exemplo seu. Mostre que quem cria jogos e aplicativos escreve exatamente esse tipo de passo, só que para o computador."
    },
    demonstracao: "Mostre o labirinto pelo Veyon e conte as casas com o dedo: cada seta anda UMA casa.",
    atencao: [
      "No labirinto, muitos acham que a seta anda até a parede. Reforce: cada seta anda uma casa.",
      "Peça que contem as casas com o dedo antes de responder.",
      "Esta é a missão mais abstrata. Se a turma travar, priorize o labirinto e deixe o resto para os mais rápidos."
    ],
    perguntas: [
      { p: "Qual a diferença entre repetição e sequência?", r: "Sequência é um passo depois do outro. Repetição é o mesmo passo várias vezes: “repita 4 vezes: ande”." },
      { p: "Onde eu vejo seleção no celular?", r: "Na senha: se a senha estiver certa, então desbloqueia; senão, mostra erro." },
      { p: "Onde eu vejo repetição no dia a dia?", r: "Na playlist que repete as músicas." }
    ],
    curiosidade: "A palavra algoritmo vem do nome de um matemático persa, Al-Khwarizmi, que viveu há mais de mil anos."
  },
  m3: {
    datas: "6º A e 6º B: 19/11 · 6º C: depois da prova, como conteúdo (14/12)",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura e vídeo" },
      { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
      { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
      { min: 30, icone: "💻", t: "Missão no portal" },
      { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Alguém já recebeu uma mensagem que deixou chateado? Não precisa dizer quem mandou. Como essa mensagem poderia ter sido escrita?" },
      { acao: "Ouça sem expor ninguém." },
      { fala: "Na internet, a gente deve escrever como se a pessoa estivesse na nossa frente. Ofender, zombar ou espalhar foto de alguém é cyberbullying, e machuca de verdade." },
      { fala: "E o que vocês fazem com um celular que quebrou? Ele tem metais que, no lixo comum, contaminam a terra e a água. Por isso o certo é consertar, doar ou levar a um ponto de coleta." }
    ],
    onde: {
      pergunta: "Quem tem em casa um celular velho guardado na gaveta? O que dá para fazer com ele?",
      dica: "Ouça 3 ou 4 alunos. Se souber de um ponto de coleta de eletrônicos na cidade, informe a turma."
    },
    atencao: [
      "Tema sensível: se um aluno relatar algo sério (ameaça, exposição, contato de estranho), não aprofunde na frente da turma. Converse depois e encaminhe à direção.",
      "No exemplo de senha forte, avise que ninguém deve usar a senha mostrada no quadro.",
      "O cartaz Cidadão Digital é montado no próprio portal (desenhos, cor e frase) e o portal confere sozinho. Nada de nomes de colegas na frase."
    ],
    perguntas: [
      { p: "O que é obsolescência?", r: "É quando um aparelho é trocado ainda funcionando, porque ficou “ultrapassado” ou parou de receber atualizações." },
      { p: "O que eu faço se estiverem me ofendendo na internet?", r: "Tire print, bloqueie quem ofende e conte a um adulto de confiança. Não responda com ofensa." }
    ]
  },
  m4: {
    datas: "6º A e 6º B: 26/11 (o 6º C não tem aula sobrando antes da prova)",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura e vídeo" },
      { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
      { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
      { min: 30, icone: "💻", t: "Missão no portal" },
      { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Quem já viu no celular o aviso “armazenamento cheio”? O que vocês apagaram para liberar espaço?" },
      { acao: "Ouça 3 ou 4 respostas (fotos, vídeos, aplicativos)." },
      { fala: "Por que um vídeo enche o celular muito mais rápido do que mil mensagens? Para entender, a gente precisa saber como o computador guarda as coisas: só com 0 e 1." }
    ],
    extras: [
      {
        titulo: "🎲 Dinâmica: os alunos-bits (5 min)", cor: "c-roxo",
        itens: [
          { acao: "Chame 4 alunos para a frente, lado a lado. Dê a cada um um papel com 8, 4, 2 e 1. Em pé = lâmpada acesa (1); agachado = apagada (0)." },
          { fala: "Quero o número 5. Quem fica em pé?" },
          { acao: "A turma descobre: o 4 e o 1 em pé (0101). Repita com 3 (0011) e 10 (1010)." },
          { fala: "Cada um de vocês é um bit. Juntando 8 bits, temos 1 byte: mais ou menos o espaço de uma letra." }
        ]
      }
    ],
    onde: {
      pergunta: "O que ocupa mais espaço no celular de vocês: fotos, vídeos ou aplicativos?",
      dica: "No seu computador, mostre pelo projetor uma pasta com a coluna Tamanho e ordene por tamanho. Mostre também a busca 🔍 da pasta e um arquivo .zip sendo extraído."
    },
    atencao: [
      "Use sempre “cerca de mil” (1 KB ≈ 1000 bytes). Se um aluno disser 1024, ele está certo: é o valor exato em muitos computadores. Elogie e siga com o “cerca de mil”.",
      "Ordem das medidas: bit → byte → KB → MB → GB → TB. Escreva no quadro e deixe até o fim da aula.",
      "Na Mão na massa, as lâmpadas valem 8, 4, 2 e 1: quem travar, peça para somar só as acesas."
    ],
    perguntas: [
      { p: "Quantos bits tem um byte?", r: "8 bits. Um byte guarda mais ou menos uma letra." },
      { p: "Por que um vídeo ocupa mais que uma foto?", r: "Porque o vídeo é como muitas fotos por segundo, com som: são muito mais bytes." },
      { p: "Para que serve compactar?", r: "Para diminuir o tamanho e juntar vários arquivos em um só (.zip), mais fácil de mandar ou guardar." }
    ],
    curiosidade: "Os primeiros computadores guardavam bits em furinhos de cartões de papel: furo = 1, sem furo = 0. Hoje, um pen drive do tamanho de um dedo guarda bilhões de bits."
  },
  rv: {
    datas: "6º A e 6º B: 03/12 · 6º C: 23/11 (só M1 e M2)",
    tempo: [
      { min: 5, icone: "🎬", t: "Abertura: como funciona a revisão" },
      { min: 45, icone: "💻", t: "Revisão no portal: 📚 Relembre + atividades de cada missão" },
      { min: 15, icone: "🏆", t: "Desafio e Turbo (simulado) + placar" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Hoje é dia de revisão, mas não é aula de só olhar: a aula inteira tem atividade, igual a uma missão, e vale ponto no placar." },
      { fala: "O portal mostra só as missões que vocês estudaram, e é exatamente isso que cai na prova. Em cada missão: leiam o 📚 Relembre e façam as atividades." },
      { acao: "Inicie a aula com a Missão de hoje = 🔁 Revisão. O painel grava sozinho quais missões a turma estudou e o portal mostra só essas." }
    ],
    onde: {
      pergunta: "Qual missão vocês acham mais difícil? Comecem a revisão por ela.",
      dica: "Abra o 🔴 Ao vivo: quem estiver parado num bloco, mande reler o 📚 Relembre daquela missão."
    },
    atencao: [
      "No fim da aula, lembre a data da prova da turma (aparece no 🗺️ Panorama).",
      "Quem terminar o Básico vai para o Desafio e o Turbo: eles misturam as missões, como na prova.",
      "Aluno que faltou a uma missão: a revisão não substitui a missão. Libere a missão para ele fazer em casa (🏠) ou na reposição."
    ],
    perguntas: [
      { p: "Por que não aparece a M4 (ou a M3) para a minha turma?", r: "Porque a turma não estudou essa missão: a revisão e a prova só cobram o que foi dado." }
    ]
  },
  pf: {
    datas: "Prova: 6º C 07/12 (só M1 e M2) · 6º A e 6º B 10/12 · 2ª chamada/recuperação: 6º C 14/12 · 6º A e 6º B 17/12",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura" },
      { min: 45, icone: "🏁", t: "Missões que faltaram e projeto final" },
      { min: 10, icone: "🎤", t: "Apresentações" },
      { min: 10, icone: "🎮", t: "Recreação" }
    ],
    abertura: [
      { acao: "Na aula ANTERIOR à avaliação:" },
      { fala: "Na próxima aula vai ter avaliação. Ela vai cobrar o que está nos Resumos da Aula e nas Perguntas rápidas. Quem estudar os resumos vai bem." },
      { acao: "No dia do projeto final:" },
      { fala: "Hoje é o dia de mostrar tudo o que vocês fizeram. Quem faltou a alguma aula pode fazer agora a missão que perdeu." }
    ],
    atencao: [
      "Abra o painel (aba Turmas) e veja quem ainda não tem o ✔ do Básico em cada missão: chame esses alunos primeiro.",
      "Recuperação e segunda chamada: 10/12 (6º A e B) e 07/12 (6º C), com o mesmo conteúdo da prova.",
      "A apresentação para a turma é a atividade que VOCÊ confere."
    ]
  }
});
