/* Roteiro da aula (só para o professor) — 6º ano, 2º bimestre de 2027 (Algoritmos)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair (o 🗺️ Panorama organiza sozinho). */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon (ou 📡 Sala ao vivo)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-6ano-2027-2bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🪪 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF06CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Neste bimestre vocês vão aprender a pensar como um programador. E tudo começa com uma palavra: algoritmo." },
        { fala: "Quem sabe fazer um copo de suco? Me ditem os passos, que eu vou fazer exatamente o que vocês disserem." },
        { acao: "Siga ao pé da letra (se disserem “coloca o suco”, pergunte: “coloco onde? quanto?”). A turma ri e percebe que a instrução precisa ser precisa." },
        { fala: "Isso é um algoritmo: passos em ordem, claros e precisos. O computador é igualzinho a mim agora: não adivinha nada." }
      ],
      onde: {
        pergunta: "Que algoritmo vocês seguem todo dia, sem perceber?",
        fechamento: "Receita, caminho para a escola, tutorial de jogo, manual de montagem: tudo é algoritmo.",
        dica: "Peça um exemplo da casa de cada um: lavar a louça, dar comida ao cachorro, fazer o café."
      },
      demonstracao: "No projetor, faça o Para começar ao vivo: leia o algoritmo do suco e troque uma instrução precisa por uma vaga (“um pouco de pó”). Pergunte: “quanto é um pouco?”.",
      atencao: [
        "Muitos acham que algoritmo é “coisa de computador”: mostre que a receita também é.",
        "Na atividade de clicar na ordem, quem clicar errado recomeça: peça para ler o passo inteiro antes de clicar."
      ],
      perguntas: [
        { p: "Algoritmo é a mesma coisa que programa?", r: "Quase: o programa é o algoritmo escrito na linguagem do computador." },
        { p: "Por que “um pouco” é vago?", r: "Porque cada um entende uma quantidade diferente; o computador não sabe adivinhar." }
      ],
      curiosidade: "A palavra algoritmo vem do nome do matemático persa al-Khwarizmi, que viveu há mais de mil anos."
    },
    m2: {
      datas: "BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje o robô do portal vai obedecer vocês. Mas ele só entende setas: cada seta anda uma casa." },
        { acao: "Desenhe um tabuleiro 3×3 no quadro (ou use o ⬜ quadro para a turma) e peça a um aluno para ditar as setas até a estrela." },
        { fala: "Agora troquem a ordem das setas. O robô chega? Na sequência, a ordem importa!" }
      ],
      onde: {
        pergunta: "O que dá errado se a gente trocar a ordem de calçar a meia e o tênis?",
        fechamento: "Trocar a ordem muda o resultado: por isso o computador faz os passos um depois do outro, sem pular.",
        dica: "Atravessar a rua é ótimo exemplo: olhar antes de atravessar, nunca depois."
      },
      demonstracao: "Abra a prática do robô no projetor e erre de propósito (bata na parede). Mostre a mensagem do portal dizendo em que passo bateu.",
      atencao: [
        "Os alunos confundem esquerda e direita da tela: mostre as setas ⬅️ ➡️ no teclado.",
        "Quem bater na parede não perde a sequência: é só ajustar e executar de novo."
      ],
      perguntas: [
        { p: "O robô bateu na parede. Começo do zero?", r: "Não: a sequência fica salva. Ache o passo errado e troque só ele." },
        { p: "Posso subir no labirinto?", r: "Pode: ⬆️ também vale, se a casa estiver livre." }
      ],
      curiosidade: "Os robôs de fábrica seguem sequências de movimentos tão precisas que repetem o mesmo gesto milhares de vezes por dia."
    },
    m3: {
      datas: "BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imaginem escrever “bata palma” 100 vezes. Cansativo, né? O programador escreve só uma vez: repita 100 vezes." },
        { acao: "Peça à turma para bater palma: “repita 3 vezes: bater palma”. Depois “repita 2 vezes: pular”." },
        { fala: "E se eu disser “repita para sempre”? Quando a gente para? Nunca! Isso é o laço infinito." }
      ],
      onde: {
        pergunta: "Onde vocês veem repetição no celular?",
        fechamento: "Música em modo repetir, despertador todo dia, vídeo em loop, rolar a tela infinita.",
        dica: "Comente que a rolagem infinita das redes é um laço feito para a gente não parar."
      },
      demonstracao: "No projetor, monte o zigue-zague com setas soltas (16 blocos) e depois com o + (5 blocos). Pergunte qual é mais fácil de corrigir.",
      atencao: [
        "O + só aparece depois de clicar numa seta: mostre onde fica.",
        "Na meta de blocos, o portal avisa se passou: incentive a contar as casas antes."
      ],
      perguntas: [
        { p: "Laço é a mesma coisa que repetição?", r: "Sim: laço (ou loop) é outro nome da repetição." },
        { p: "Por que o meu deu “saiu do tabuleiro”?", r: "O número do repita ficou grande: diminua com o −." }
      ],
      curiosidade: "Em inglês, a repetição se chama loop, que quer dizer laço ou volta."
    },
    m4: {
      datas: "BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se estiver chovendo, o que vocês fazem antes de sair? E se não estiver?" },
        { acao: "Escreva no quadro: SE está chovendo ENTÃO levo o guarda-chuva SENÃO vou sem ele." },
        { fala: "Isso é a seleção: o computador escolhe o caminho respondendo uma pergunta de sim ou não." }
      ],
      onde: {
        pergunta: "Onde o celular faz uma pergunta de sim ou não para decidir o que fazer?",
        fechamento: "Senha certa abre, errada avisa; bateria abaixo de 20% mostra o aviso; no jogo, pegou a moeda ganha pontos.",
        dica: "Peça exemplos de jogos: “se cair no buraco, perde uma vida”."
      },
      demonstracao: "Brinque de “sim ou não”: diga condições (“está chovendo agora?”, “que horas são?”) e a turma diz se é boa condição.",
      atencao: [
        "“Que horas são?” não é condição: a resposta não é sim nem não.",
        "Na tabela, o então e o senão usam as mesmas opções: peça para ler a condição primeiro."
      ],
      perguntas: [
        { p: "Pode ter só o se, sem o senão?", r: "Pode: se a condição for falsa, o computador simplesmente não faz nada." }
      ],
      curiosidade: "O semáforo é um algoritmo de seleção e repetição: repete as cores o dia inteiro, e alguns mudam o tempo se tiver carro esperando."
    },
    m5: {
      datas: "BNCC EF06CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Para fazer um bolo, do que eu preciso? E o que eu quero no fim?" },
        { acao: "Faça duas colunas no quadro: ENTRADAS (ingredientes) e SAÍDA (o bolo). No meio, a seta: PROCESSAMENTO (misturar e assar)." },
        { fala: "Todo problema funciona assim: entra alguma coisa, o algoritmo trabalha e sai um resultado." }
      ],
      onde: {
        pergunta: "Na calculadora do celular, o que é entrada e o que é saída?",
        fechamento: "Os números e a conta digitados são entradas; o resultado na tela é a saída.",
        dica: "Ligue com o 1º bimestre: entrada e saída também aparecem nas peças do computador."
      },
      demonstracao: "Abra a Calculadora no projetor: digite 2 + 3 e pergunte, em cada toque, se é entrada ou saída.",
      atencao: [
        "Alguns confundem o processamento com a saída: “assar” é processamento, “o bolo pronto” é saída.",
        "No caça-palavras, SAIDA está sem acento: avise antes."
      ],
      perguntas: [
        { p: "E se faltar uma entrada?", r: "O algoritmo pode não funcionar: sem ovos, não sai o bolo." }
      ],
      curiosidade: "O aplicativo de mapa do celular recebe como entrada o lugar aonde você quer ir e entrega como saída o caminho na tela."
    },
    m6: {
      datas: "BNCC EF06CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vamos organizar o aniversário da turma. Parece muita coisa, né? Como a gente pode dividir?" },
        { acao: "Anote no quadro as partes que a turma disser (decoração, comida, diversão, limpeza)." },
        { fala: "Dividir um problema grande em partes menores é decompor. Cada parte é um subproblema, e fica fácil." }
      ],
      onde: {
        pergunta: "Como vocês dividem um trabalho em grupo?",
        fechamento: "Cada um faz uma parte (pesquisa, cartaz, apresentação) e no fim juntam tudo e conferem.",
        dica: "O time de futebol é ótimo exemplo: cada posição cuida de uma parte do jogo."
      },
      demonstracao: "Mostre o jogo de celular dividido em partes: personagens, cenário, pontos e sons, cada um feito por uma equipe.",
      atencao: [
        "Na atividade de marcar, “jogar videogame” e “dormir até tarde” não são partes do trabalho: deixe que descubram.",
        "Lembre o último passo: juntar e conferir."
      ],
      perguntas: [
        { p: "Tem jeito certo de dividir?", r: "Tem vários: o importante é que cada parte seja menor e mais fácil." }
      ],
      curiosidade: "Os grandes jogos de videogame são feitos por equipes de centenas de pessoas, cada uma cuidando de uma parte."
    },
    m7: {
      datas: "Missão extra · BNCC EF06CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje vocês são detetives de erros. Erro em programa tem um nome engraçado: bug, que quer dizer inseto em inglês." },
        { fala: "Em 1947, a equipe de Grace Hopper achou uma mariposa presa dentro de um computador. Tiraram o inseto, colaram no caderno e escreveram que era o primeiro bug encontrado de verdade." },
        { acao: "Leia no quadro um algoritmo com erro (beber o suco antes de colocar no copo) e peça para acharem o bug." }
      ],
      onde: {
        pergunta: "Já viram um aplicativo travar ou um jogo com defeito?",
        fechamento: "Isso é bug. As atualizações do celular corrigem bugs: é a depuração.",
        dica: "Mostre que até os programadores mais experientes erram; por isso existe a depuração."
      },
      demonstracao: "Na prática do robô, execute o programa com bug no projetor, mostre onde o robô sai do caminho e apague só o passo errado.",
      atencao: [
        "Ensine a regra: testar, achar o PRIMEIRO passo errado e mudar só ele.",
        "Quem apagar tudo e refazer não está errado, mas perde a parte de depurar: incentive a consertar."
      ],
      perguntas: [
        { p: "Depurar é a mesma coisa que apagar?", r: "Não: é achar e corrigir o erro, mantendo o que estava certo." }
      ],
      curiosidade: "A mariposa de 1947 ainda existe: o caderno com ela colada fica guardado num museu nos Estados Unidos."
    },
    m8: {
      datas: "Missão extra · BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Nos anos 1960, o pesquisador Seymour Papert e a sua equipe criaram uma linguagem para crianças, a Logo. Nela, uma tartaruga anda pela tela e deixa um rastro." },
        { acao: "Peça a um aluno para ser a tartaruga: a turma dita “ande 2 passos, vire à direita”, 4 vezes. Ele desenha um quadrado andando." },
        { fala: "O quadrado é “ande e vire” repetido 4 vezes. Sequência mais repetição vira desenho!" }
      ],
      onde: {
        pergunta: "Que máquinas desenham ou andam seguindo um caminho?",
        fechamento: "Impressora 3D, máquina de corte, robô aspirador, personagens de jogo.",
        dica: "Se tiver tempo, mostre no ⬜ quadro para a turma o caminho de um quadrado desenhado com setas."
      },
      demonstracao: "No projetor, faça o quadrado da prática: passe por todos os pontos ⚪ e mostre que eles ficam 🟩.",
      atencao: [
        "A tartaruga precisa passar por TODOS os pontos: o portal avisa quais faltam.",
        "No desafio, lembre do + para juntar as setas iguais."
      ],
      perguntas: [
        { p: "Por que o quadrado termina uma casa antes do começo?", r: "Porque a tartaruga começa no canto; a estrela fecha o desenho na casa de baixo." }
      ],
      curiosidade: "As ideias da linguagem Logo inspiraram o Scratch, uma linguagem de programação em blocos, assunto do 3º bimestre."
    },
    rv: {
      datas: "Última aula antes da prova (o 🗺️ Panorama marca sozinho)",
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
        { p: "Por que não aparece a M7 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }
      ]
    }
  });
})();
