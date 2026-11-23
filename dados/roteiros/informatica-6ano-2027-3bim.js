/* Roteiro da aula (só para o professor) — 6º ano, 3º bimestre de 2027 (Programação em blocos)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair (o 🗺️ Panorama organiza sozinho). */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 5, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 10, icone: "🖥️", t: "Demonstração no editor de blocos (⬜ projetor)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  const antes = [
    "🔊 Caixinha de som",
    "🖥️ Computadores ligados pelo Veyon (Chrome ou Edge atualizados: o editor de blocos precisa deles)",
    "🎬 Vídeo da missão aberto no computador do professor",
    "📇 Cartões com os códigos dos alunos",
    "🎮 Jogos da recreação definidos"
  ];
  PORTAL.registrarRoteiro("informatica-6ano-2027-3bim", {
    antes,
    m1: {
      datas: "1ª aula do bimestre · BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "No 2º bimestre vocês criaram algoritmos. Hoje o computador vai executar os de vocês: vamos programar!" },
        { acao: "No projetor, abra a prática da Missão 1 e mostre as 5 ações: abrir a gaveta, arrastar, encaixar, escrever e ▶️ Rodar." },
        { fala: "O computador lê de cima para baixo e faz exatamente o que os blocos mandam. Nem mais, nem menos." }
      ],
      onde: {
        pergunta: "Que programas vocês usam todo dia?",
        fechamento: "Todo jogo e todo aplicativo foi montado assim: instrução por instrução, na ordem certa.",
        dica: "Mostre um bloco solto, fora do programa, e rode: ele não aparece na tela."
      },
      demonstracao: "No projetor, faça a prática: rode o “Olá!”, encaixe o “Eu programo!” e rode de novo.",
      atencao: [
        "Arrastar: segure o clique no bloco e solte embaixo do outro até ele grudar.",
        "Arrastar um bloco leva junto os que estão embaixo dele."
      ],
      perguntas: [
        { p: "Errei, e agora?", r: "Arraste o bloco errado para a lixeira ou use 🧹 Limpar tudo e comece de novo." },
        { p: "Por que não apareceu nada?", r: "O bloco está solto ou o texto ficou vazio. Confira se ele grudou." }
      ],
      curiosidade: "A ideia de programar com blocos que se encaixam foi criada para ensinar crianças, e hoje é usada no mundo todo."
    },
    m2: {
      datas: "BNCC EF06CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se eu quiser mostrar “pula” 100 vezes, vou arrastar 100 blocos? Não: uso o repita." },
        { acao: "No projetor, mostre repita 3 vezes: mostrar “pula”. Depois arraste o “fim” para dentro e para fora e rode as duas vezes." },
        { fala: "E o se escolhe o caminho: se chover, guarda-chuva; senão, boné." }
      ],
      onde: {
        pergunta: "Onde aparece um “se” no jogo que vocês jogam?",
        fechamento: "Se a vida acabar, fim de jogo. Se pegar a moeda, ganha ponto.",
        dica: "Escreva as comparações no quadro: =, >, <, ≥, com um exemplo verdadeiro de cada."
      },
      demonstracao: "No projetor, faça a prática: mude o 3 do repita para 5 e rode.",
      atencao: [
        "Dentro do repita = repete; embaixo (fora) = uma vez só.",
        "No se … senão, use o segundo bloco da gaveta 🔀 Se (o que já tem o senão)."
      ],
      perguntas: [
        { p: "O repita pode ter mais de um bloco dentro?", r: "Pode: todos os blocos de dentro repetem juntos." },
        { p: "O que acontece se a condição for falsa?", r: "O programa vai para o senão (se tiver)." }
      ],
      curiosidade: "Os jogos repetem o mesmo conjunto de instruções muitas vezes por segundo para atualizar a tela."
    },
    m3: {
      datas: "BNCC EF06CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como o jogo lembra quantos pontos vocês fizeram? Numa variável: uma caixinha com nome." },
        { acao: "Desenhe uma caixinha no quadro escrita “pontos”. Coloque 0, depois +5, depois +3, apagando e escrevendo o novo valor." },
        { fala: "Definir coloca o valor; alterar por soma ao que já tinha." }
      ],
      onde: {
        pergunta: "O que no jogo de vocês é uma variável?",
        fechamento: "Pontos, vidas, moedas, tempo: tudo que muda é guardado em variáveis.",
        dica: "No editor, a gaveta 📦 Variáveis tem o botão para criar uma variável nova."
      },
      demonstracao: "No projetor, faça a prática: encaixe alterar pontos por 5 antes do mostrar.",
      atencao: [
        "No editor, o bloco aparece como “alterar … por”.",
        "No criar texto com, lembre o espaço depois dos dois-pontos: “Pontos: ”."
      ],
      perguntas: [
        { p: "Dá para alterar por um número negativo?", r: "Dá: alterar vidas por −1 tira uma vida." },
        { p: "A variável pode guardar um nome?", r: "Pode: variável guarda número ou texto." }
      ],
      curiosidade: "O placar eletrônico do estádio também é um programa que guarda os gols em variáveis."
    },
    m4: {
      datas: "BNCC EF06CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imaginem dar bom-dia para 30 alunos montando 30 vezes os mesmos blocos. Cansativo, né?" },
        { fala: "Hoje vocês vão usar o bloco que a gente cria: o saudar. O nome que muda é o parâmetro." },
        { acao: "No projetor, mostre o bloco “para saudar” e a gaveta 🧩 Meus blocos com o bloco “saudar” para chamar." }
      ],
      onde: {
        pergunta: "O botão “curtir” é diferente em cada post?",
        fechamento: "Não: é o mesmo botão. Só muda o post: o parâmetro.",
        dica: "Compare com a receita de suco: a receita é a mesma, a fruta é o parâmetro."
      },
      demonstracao: "No projetor, faça a prática: chame o bloco saudar com nome = Ana.",
      atencao: [
        "Se ninguém chamar o bloco, ele não roda (é como um bloco solto).",
        "Antes de cada chamada, mude o valor da variável nome."
      ],
      perguntas: [
        { p: "Posso chamar o mesmo bloco muitas vezes?", r: "Pode, quantas quiser." },
        { p: "Se eu mudar o texto dentro do bloco, muda em todo lugar?", r: "Sim: é a vantagem de reaproveitar." }
      ],
      curiosidade: "Os programadores chamam esses blocos próprios de funções; os aplicativos grandes têm milhares delas."
    },
    m5: {
      datas: "BNCC EF06CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A chamada da turma é uma lista: os nomes em ordem. O 1º, o 2º, o 3º…" },
        { acao: "Escreva no quadro frutas = [maçã, uva, caju] e numere as posições 1, 2, 3. Pergunte o item 2 e o tamanho." },
        { fala: "E cada valor tem um tipo: número, texto, lógico ou lista." }
      ],
      onde: {
        pergunta: "Onde vocês veem listas no celular?",
        fechamento: "Contatos, playlist, conversas: tudo lista.",
        dica: "No editor, o para cada passa por todos os itens; mostre isso no projetor com a lista de frutas."
      },
      demonstracao: "No projetor, faça a prática: troque o item 1 pelo item 3.",
      atencao: [
        "No editor, as posições começam em 1.",
        "Texto sempre aparece entre aspas no bloco; número, não."
      ],
      perguntas: [
        { p: "E se eu pedir o item 5 de uma lista de 3?", r: "Não existe: o programa mostra vazio ou erro. O tamanho ajuda a evitar isso." },
        { p: "Uma lista pode ter números?", r: "Pode: [3, 5, 2] é uma lista de números." }
      ],
      curiosidade: "A playlist de músicas é uma lista: tocar em ordem é seguir as posições; o aleatório sorteia uma posição."
    },
    m6: {
      datas: "BNCC EF06CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje vocês fazem um joguinho: o Pega-Moeda. Botão verde é moeda, vermelho é bomba." },
        { acao: "Escreva as 3 regras no quadro (começo, verde, vermelho) e as etapas: planejar, montar, testar, melhorar." },
        { fala: "Ao rodar, o portal aperta os botões sozinho, na ordem que aparece embaixo do editor." }
      ],
      onde: {
        pergunta: "Que regra vocês acrescentariam no jogo?",
        fechamento: "É a etapa melhorar: o Turbo pede o botão azul, que vale 2.",
        dica: "Mostre a setinha do bloco ⚡ quando, onde se escolhe o botão."
      },
      demonstracao: "No projetor, faça a prática: monte a regra do botão verde.",
      atencao: [
        "O definir pontos para 0 fica fora dos blocos ⚡ quando.",
        "Cada botão tem o seu próprio bloco ⚡ quando."
      ],
      perguntas: [
        { p: "Por que os pontos não aparecem?", r: "Falta o mostrar dentro do ⚡ quando, ou o bloco está vazio." },
        { p: "Posso ter dois blocos quando para o mesmo botão?", r: "Pode, mas é mais fácil de entender com um só." }
      ],
      curiosidade: "Quase todos os jogos funcionam assim: esperam o evento (um toque, uma tecla) e fazem a ação."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO03",
      tempo: T,
      abertura: [
        { fala: "Hoje vocês são detetives: vão prever o que o programa faz antes de rodar e achar os bugs." },
        { acao: "Faça a tabela de rastrear no quadro com x: 2 → 4 → 6 → 8, uma volta do repita por vez." },
        { fala: "Bug é o nome que os programadores dão para o erro." }
      ],
      onde: {
        pergunta: "Já viram um jogo travar ou fazer algo estranho?",
        fechamento: "Era um bug. Alguém precisou depurar: achar e consertar.",
        dica: "Mostre os quatro erros comuns da tabela: ordem, número, lugar e comparação."
      },
      demonstracao: "No projetor, faça a prática: rastreie o x com a turma.",
      atencao: [
        "Prever primeiro, rodar depois: a graça é conferir a previsão.",
        "Errar a previsão faz parte: é assim que se aprende."
      ],
      perguntas: [
        { p: "Por que chama bug?", r: "Bug é “inseto” em inglês; a palavra virou o nome dos erros de programa." },
        { p: "Programador erra?", r: "Sempre! Por isso testar e depurar fazem parte do trabalho." }
      ],
      curiosidade: "Os programadores passam boa parte do tempo testando e depurando, e não só escrevendo programas novos."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO04",
      tempo: T,
      abertura: [
        { fala: "Um programa também conta histórias. Cada linha da tela é uma cena." },
        { acao: "Leia em voz alta a história do Tito, batendo três vezes na mesa no “toc, toc, toc”." },
        { fala: "Sequência para as cenas, repita para o toc e uma variável para o nome do herói." }
      ],
      onde: {
        pergunta: "Que história vocês contariam com blocos?",
        fechamento: "Toda boa história tem começo, meio e fim: o roteiro.",
        dica: "Quem terminar cedo pode inventar a própria história no editor e mostrar para o colega do lado."
      },
      demonstracao: "No projetor, faça a prática: complete a história do Tito.",
      atencao: [
        "No criar texto com, o espaço antes de “abriu a porta” faz diferença.",
        "Mudando só o definir heroi, a história toda muda."
      ],
      perguntas: [
        { p: "Posso usar o se na história?", r: "Pode: se o herói tiver a chave, abre a porta; senão, bate de novo." },
        { p: "E repetir uma cena inteira?", r: "Coloque os blocos da cena dentro de um repita." }
      ],
      curiosidade: "Muitos jogos com história usam variáveis para guardar o nome que o jogador escolhe e mostrar nas falas."
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
