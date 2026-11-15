/* Roteiro da aula (só para o professor) — 8º ano, 1º bimestre de 2027
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair. */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 5, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 10, icone: "🃏", t: "Dinâmica com a turma (cartas, fila ou lista no quadro)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-8ano-2027-1bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon (Chrome ou Edge: algumas atividades usam o editor de blocos)",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🃏 8 folhas com números grandes (para as dinâmicas de busca e ordenação)",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "BNCC EF08CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como o celular guarda as suas mensagens, os seus contatos, as suas fotos? Em listas: muitos itens, um depois do outro, com um nome só." },
        { acao: "Chame 5 alunos para a frente, em fila: cada um é um item da lista CHAMADA." },
        { fala: "Quem é CHAMADA[3]? E qual é o tamanho da lista?" }
      ],
      siglas: "Leia o “O que significa?”: lista = vetor = array; posição = índice.",
      onde: {
        pergunta: "Que listas existem no seu celular?",
        fechamento: "Mensagens, contatos, playlist, histórico: todas são listas que o programa percorre.",
        dica: "Mostre a classificação de um campeonato: é uma lista ordenada."
      },
      demonstracao: "No projetor, abra o editor de blocos e mostre “em lista … obter #” e “tamanho de” (primeira vez da turma com blocos: mostre arrastar e encaixar).",
      atencao: ["Primeira vez com o editor de blocos para esta turma: mostre devagar.", "A posição aqui começa no 1."],
      perguntas: [{ p: "Por que não começa no 0?", r: "Neste editor começa no 1. Muitas linguagens de programação começam no 0; vocês vão ver isso mais para a frente." }],
      curiosidade: "O WhatsApp guarda cada conversa como uma lista de mensagens, que pode ter dezenas de milhares de itens."
    },
    m2: {
      datas: "BNCC EF08CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { acao: "Repita a fila de 5 alunos. Peça para o 2º sair: os de trás andam para a frente." },
        { fala: "Remover: quem estava atrás anda uma posição para a frente, e o tamanho diminui." },
        { acao: "Coloque um aluno novo no começo da fila: todo mundo anda uma posição para trás." }
      ],
      siglas: "Inserir, remover, deslocar e contador.",
      onde: {
        pergunta: "No carrinho da loja on-line, o que é inserir e o que é remover?",
        fechamento: "Adicionar é inserir; a lixeirinha é remover; o número do ícone é o tamanho.",
        dica: "Faça a contagem das notas azuis em voz alta com a turma antes do editor."
      },
      demonstracao: "Monte no projetor o contador: definir contador para 0 e alterar por 1 dentro do para cada.",
      atencao: ["O mostrar do contador vai fora do para cada: é o erro mais comum."],
      perguntas: [{ p: "5 é nota azul?", r: "Sim: azul é maior OU IGUAL a 5." }],
      curiosidade: "Quando você apaga uma mensagem, o aplicativo remove um item da lista e “anda” as outras."
    },
    m3: {
      datas: "BNCC EF08CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { acao: "Cole 8 folhas viradas no quadro, fora de ordem. Peça para um aluno achar o número 22, virando uma por uma." },
        { fala: "Quantas folhas ele virou? Cada olhada é uma comparação. Isso é a busca sequencial." },
        { fala: "E se fossem 1.000 folhas?" }
      ],
      siglas: "Comparação, melhor caso e pior caso.",
      onde: {
        pergunta: "Quando vocês procuram uma foto rolando a galeria, que busca estão fazendo?",
        fechamento: "Sequencial: uma por uma. Funciona, mas demora se a galeria for enorme.",
        dica: "Deixe a turma dizer o melhor e o pior caso na dinâmica das folhas."
      },
      demonstracao: "Mostre a atividade das cartas viradas no projetor antes de liberar.",
      atencao: ["Se o item não está na lista, a busca olha todos: o pior caso."],
      perguntas: [{ p: "E se a lista estiver ordenada?", r: "Aí dá para fazer algo muito mais rápido: é a próxima missão (busca binária)." }],
      curiosidade: "O Ctrl + F do navegador faz uma busca sequencial em milissegundos, porque o computador compara milhões de letras por segundo."
    },
    m4: {
      datas: "BNCC EF08CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Pensei num número de 1 a 100. Quem acerta com menos chutes? Eu só digo maior ou menor." },
        { acao: "Jogue com a turma. Mostre que chutar sempre o meio garante no máximo 7 chutes." },
        { fala: "Isso é a busca binária. Mas atenção: só funciona com a lista em ordem." }
      ],
      siglas: "Busca binária, meio, descartar, dividir para conquistar.",
      onde: {
        pergunta: "Como vocês procuram uma palavra no dicionário de papel?",
        fechamento: "Abrem no meio e vão para a frente ou para trás: busca binária.",
        dica: "Com as 8 folhas EM ORDEM no quadro, faça a busca pelo meio e compare com a sequencial."
      },
      demonstracao: "No projetor, a atividade das cartas (busca_binaria) com o 31.",
      atencao: ["Com número par de itens, o meio é o da esquerda (arredonda para baixo).", "Lista fora de ordem: a binária não serve."],
      perguntas: [{ p: "E se o número não estiver na lista?", r: "A parte que sobra fica vazia: aí sabemos que não está." }],
      curiosidade: "Com 30 comparações, a busca binária acha um nome entre 1 bilhão de nomes em ordem."
    },
    m5: {
      datas: "BNCC EF08CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { acao: "Chame 5 alunos com folhas de números fora de ordem. Eles só podem trocar com o vizinho, quando o da esquerda for maior." },
        { fala: "Vejam: a cada volta, o maior vai parar no fim, como uma bolha subindo." }
      ],
      siglas: "Ordenar, vizinhos, troca, passada, crescente e decrescente.",
      onde: {
        pergunta: "Onde vocês já organizaram coisas em ordem?",
        fechamento: "Cartas na mão, fila por altura, ranking do jogo: o computador ordena listas o tempo todo.",
        dica: "Conte as trocas em voz alta na dinâmica."
      },
      demonstracao: "No projetor, a atividade “Trocar ou manter?” com 6, 3, 9, 1.",
      atencao: ["Na tabela das passadas, escrevem a lista depois de CADA passada, não depois de cada troca."],
      perguntas: [{ p: "E decrescente?", r: "Troca quando o da esquerda for MENOR: o menor vai para o fim." }],
      curiosidade: "O método da bolha é ensinado no mundo inteiro por ser fácil de entender, mas os programas de verdade usam métodos mais rápidos."
    },
    m6: {
      datas: "BNCC EF08CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imaginem a fila do cinema enorme. Como saber a sua posição sem sair da fila?" },
        { acao: "Faça com a turma: o último pergunta ao da frente, que pergunta ao da frente… até o primeiro dizer “sou o 1”. As respostas voltam somando 1." },
        { fala: "Isso é recursão: o mesmo problema, menor, até o caso base." }
      ],
      siglas: "Recursão, caso base, passo recursivo.",
      onde: {
        pergunta: "Que coisas são “uma dentro da outra, iguais”?",
        fechamento: "Matrioska, espelhos frente a frente, pastas dentro de pastas.",
        dica: "Se tiver uma matrioska (ou caixas uma dentro da outra), leve para a aula."
      },
      demonstracao: "No projetor, rode o bloco contar (que chama a si mesmo) e depois tire o caso base para mostrar o aviso.",
      atencao: ["Recursão é abstrata: use sempre a fila e a matrioska como apoio.", "O aviso “chamou a si mesmo sem parar” é esperado no Desafio."],
      perguntas: [{ p: "Recursão é o mesmo que repetição?", r: "Parecido, mas a recursão resolve com uma versão MENOR do mesmo problema e precisa de um caso base." }],
      curiosidade: "O sistema do computador conta os arquivos de uma pasta usando recursão: pasta dentro de pasta dentro de pasta."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO03",
      tempo: T,
      abertura: [
        { fala: "Outro jeito de ordenar: escolher o menor e colocar no começo, como escolher times no recreio." },
        { acao: "Com as folhas de números: o menor vai para a 1ª posição, depois o menor do que sobrou…" }
      ],
      siglas: "Seleção, rodada, mínimo, parte ordenada.",
      onde: {
        pergunta: "Como o capitão escolhe o time?",
        fechamento: "O melhor primeiro, depois o melhor do que sobrou: seleção.",
        dica: "Compare na hora com a bolha: quantas trocas cada um fez?"
      },
      demonstracao: "Faça a seleção de 7, 2, 9, 4 no quadro, rodada por rodada.",
      atencao: ["Quando o menor já está no lugar, não há troca naquela rodada."],
      perguntas: [{ p: "Qual é melhor?", r: "A seleção troca menos; a bolha para mais cedo se a lista já estiver quase em ordem." }],
      curiosidade: "Existem dezenas de métodos de ordenação; os mais famosos têm nomes como quicksort e mergesort."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO01",
      tempo: T,
      abertura: [
        { fala: "Olhem uma samambaia: cada folhinha parece a samambaia inteira, só que menor. Isso é um fractal." },
        { acao: "Desenhe no quadro o triângulo de Sierpinski até o nível 2, contando os triângulos com a turma." }
      ],
      siglas: "Fractal, autossemelhança, nível.",
      onde: {
        pergunta: "Que formas da natureza da nossa região parecem fractais?",
        fechamento: "Samambaia, árvores, raios, rios vistos de cima.",
        dica: "Mostre fotos de brócolis romanesco e de raios no projetor."
      },
      demonstracao: "No projetor, rode o bloco crescer (árvore fractal) e mostre a recursão de novo.",
      atencao: ["Os números crescem rápido: ajude com as contas (× 3 e × 2)."],
      perguntas: [{ p: "O fractal continua para sempre?", r: "Na matemática, sim; no desenho, paramos num nível (o caso base)." }],
      curiosidade: "Filmes e jogos usam fractais para criar montanhas, nuvens e árvores sem desenhar cada detalhe à mão."
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
        { fala: "Hoje é dia de revisão, mas não é aula de só olhar: a aula inteira tem atividade e vale ponto no placar." },
        { fala: "O portal mostra só as missões que vocês estudaram, e é isso que cai na prova." },
        { acao: "Inicie a aula com a Missão de hoje = 🔁 Revisão." }
      ],
      onde: { pergunta: "Qual missão vocês acham mais difícil? Comecem a revisão por ela.", dica: "Abra o 🔴 Ao vivo: quem estiver parado num bloco, mande reler o 📚 Relembre daquela missão." },
      atencao: ["No fim da aula, lembre a data da prova da turma (aparece no 🗺️ Panorama)."],
      perguntas: [{ p: "Por que não aparece a M8 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }]
    }
  });
})();
