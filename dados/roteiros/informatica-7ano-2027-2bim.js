/* Roteiro da aula (só para o professor) — 7º ano, 2º bimestre de 2027 (Grafos e projetos)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair (o 🗺️ Panorama organiza sozinho). */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração (⬜ quadro para a turma ou Veyon)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  const TP = [
    { min: 10, icone: "🎬", t: "Abertura: o projeto do dia" },
    { min: 10, icone: "👥", t: "Montar as equipes e os papéis" },
    { min: 40, icone: "💻", t: "Missão no portal, em equipe" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-7ano-2027-2bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "📇 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF07CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como o aplicativo de mapa sabe o caminho até a casa de um amigo? Ele não enxerga as ruas como nós." },
        { acao: "No ⬜ quadro para a turma, desenhe 3 bolinhas (Escola, Praça, Mercado) e ligue com linhas, escrevendo os minutos." },
        { fala: "Isto é um grafo: pontos (vértices) ligados por linhas (arestas). O número na linha é o peso." },
        { fala: "Quantas linhas chegam à Praça? Esse número é o grau." }
      ],
      onde: {
        pergunta: "Onde mais vocês veem coisas ligadas umas às outras?",
        fechamento: "Ruas e esquinas, paradas de ônibus, computadores ligados por cabo, amigos numa rede social: tudo vira grafo.",
        dica: "Peça para desenharem no quadro o caminho de casa até a escola como bolinhas e linhas."
      },
      demonstracao: "Faça a prática no projetor: clique nos dois lugares de cada linha da tabela e mostre a aresta aparecendo.",
      atencao: [
        "Vértice × aresta: lugar é ponto (vértice), rua é linha (aresta).",
        "Grau não é peso: grau conta linhas; peso é o número escrito na linha."
      ],
      perguntas: [
        { p: "Nó e vértice são a mesma coisa?", r: "Sim: são dois nomes para o ponto do grafo." },
        { p: "Toda aresta precisa ter peso?", r: "Não: no grafo de amizades, por exemplo, só importa quem está ligado a quem." }
      ],
      curiosidade: "Em 1736, Leonhard Euler estudou as 7 pontes de Königsberg e provou que não dava para atravessar cada uma uma vez só: foi o primeiro grafo da história da Matemática."
    },
    m2: {
      datas: "BNCC EF07CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Para ir da Casa à Escola tem a rua direta, que leva 9 minutos, e o caminho pela Padaria: 3 + 2. Qual é mais rápido?" },
        { acao: "Escreva as contas no quadro: 9 × 5 × 8. Destaque o 5." },
        { fala: "O caminho mais curto é o de menor soma, não o de menos paradas. É exatamente isso que o aplicativo de mapa calcula." }
      ],
      onde: {
        pergunta: "Quem precisa achar o caminho mais curto todo dia?",
        fechamento: "Entregador, motorista de aplicativo, ônibus escolar, ambulância.",
        dica: "Pergunte: e quando uma rua está em obras? O caminho muda!"
      },
      demonstracao: "No projetor, trace primeiro a rua direta (9) e mostre o aviso “existe um caminho com soma menor”. Depois trace pela Padaria.",
      atencao: [
        "Erro comum: escolher o caminho de menos arestas. Peça sempre para somar.",
        "No Desafio da cidade, dois caminhos empatam em 10 minutos: os dois estão certos."
      ],
      perguntas: [
        { p: "Se empatar, qual escolho?", r: "Qualquer um dos dois: os dois são mais curtos." }
      ],
      curiosidade: "Edsger Dijkstra contou que pensou o algoritmo do caminho mais curto em uns 20 minutos, sentado num café de Amsterdã, em 1956."
    },
    m3: {
      datas: "BNCC EF07CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Por que a rede social sugere “pessoas que você talvez conheça”? Ela é vidente?" },
        { acao: "Desenhe no quadro 5 nomes inventados (Ana, Bia, Caio, Davi, Eva) e ligue as amizades da apostila." },
        { fala: "A Eva não é amiga da Ana, mas as duas são amigas do Davi. A rede procura os amigos dos seus amigos no grafo." }
      ],
      onde: {
        pergunta: "Vocês já receberam sugestão de alguém que não conhecem?",
        fechamento: "A sugestão vem do grafo, não da confiança. Só aceitem quem vocês conhecem de verdade.",
        dica: "Use só nomes inventados no quadro; nunca monte o grafo com os alunos reais da turma."
      },
      demonstracao: "Monte a rede de amizades no projetor e pergunte quem tem o maior grau.",
      atencao: [
        "Reforce a segurança: sugestão de amizade não é garantia de confiança.",
        "No Desafio, a Eva não é sugerida para a Bia: está a 3 passos."
      ],
      perguntas: [
        { p: "Quanto maior o grau, mais popular?", r: "No grafo, só quer dizer mais conexões. Ter muitos amigos virtuais não é o mesmo que ter amigos de verdade." }
      ],
      curiosidade: "Os cientistas usam grafos de contatos entre pessoas para entender como uma gripe passa de uma pessoa para outra."
    },
    m4: {
      datas: "BNCC EF07CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vocês já viram três jeitos de guardar dados: listas, tabelas e agora grafos. Hoje a pergunta é: quando usar cada um?" },
        { acao: "Escreva as 3 perguntas da apostila no quadro: importa a ordem? Várias informações por item? Importam as ligações?" },
        { fala: "Escolher a estrutura certa é metade do trabalho do programador." }
      ],
      onde: {
        pergunta: "No celular de vocês, onde aparece uma lista? E uma tabela? E um grafo?",
        fechamento: "Playlist = lista; contatos = tabela; mapa e rede social = grafo.",
        dica: "Ligue com o 1º bimestre: listas e registros (fichas) já apareceram lá."
      },
      demonstracao: "Faça o classificar da prática no projetor, lendo em voz alta as 3 perguntas para cada item.",
      atencao: [
        "Fila da cantina é lista (ordem), não tabela.",
        "Registro = uma linha; campo = uma coluna."
      ],
      perguntas: [
        { p: "Um mapa não pode ser uma tabela?", r: "Pode guardar as arestas numa tabela, mas o que importa nele são as ligações: a estrutura é o grafo." }
      ],
      curiosidade: "O aplicativo de mapa guarda milhões de esquinas e ruas como vértices e arestas de um grafo gigante."
    },
    m5: {
      datas: "BNCC EF07CO03 · datas pelo calendário da SEMED 2027 · 1ª aula do projeto",
      tempo: TP,
      abertura: [
        { fala: "Hoje e na próxima aula vocês vão fazer um projeto em equipe: o Guia de Rotas da Escola, um grafo para ajudar quem chega pela primeira vez." },
        { fala: "Todo projeto começa com um plano: problema, ideia, dados, tarefas e prazo." },
        { acao: "Forme equipes de 4 (ou duplas, se a turma for pequena) e peça para cada um escolher um papel: organizador, pesquisador, construtor, testador." }
      ],
      onde: {
        pergunta: "Que projetos em equipe vocês já fizeram?",
        fechamento: "Festa junina, trabalho em grupo, time de futebol: todos têm papéis e prazos.",
        dica: "Combine com a turma os combinados de equipe e escreva no quadro."
      },
      demonstracao: "Mostre o cronograma do Desafio e explique: hoje se juntam os dados, na próxima aula se constrói.",
      atencao: [
        "No portal, cada aluno faz as próprias atividades; a equipe conversa e se ajuda.",
        "Evite que um aluno faça tudo: lembre os papéis."
      ],
      perguntas: [
        { p: "Posso trocar de papel?", r: "Pode revezar na próxima aula, combinando com a equipe." }
      ],
      curiosidade: "Os grandes jogos de videogame são feitos por equipes com programadores, artistas, músicos e testadores."
    },
    m6: {
      datas: "BNCC EF07CO03 · datas pelo calendário da SEMED 2027 · 2ª aula do projeto",
      tempo: TP,
      abertura: [
        { fala: "Hoje a equipe constrói, testa e apresenta o Guia de Rotas da Escola." },
        { fala: "Projeto bom passa por um ciclo: construir, testar, ouvir e melhorar. Cada volta é uma versão nova, como as atualizações do celular." },
        { acao: "Retome as equipes e os papéis da aula passada." }
      ],
      onde: {
        pergunta: "Por que o celular vive pedindo atualização?",
        fechamento: "Cada atualização é uma nova versão: os criadores testaram, ouviram os usuários e melhoraram.",
        dica: "Reserve 10 minutos no fim para 2 ou 3 equipes apresentarem (1 minuto cada)."
      },
      demonstracao: "Mostre a apresentação em 4 partes: problema, o que fizemos, como usar e o que aprendemos.",
      atencao: [
        "No Desafio, o corredor fechado muda o caminho: Portão → Pátio → Biblioteca → Informática.",
        "Na apresentação, elogie a equipe toda, não só quem falou."
      ],
      perguntas: [
        { p: "E se a gente achar um erro depois de pronto?", r: "Ótimo: é a próxima volta do ciclo. Corrige e faz a versão 2." }
      ],
      curiosidade: "Os aplicativos mais usados do mundo recebem atualizações com frequência: cada uma é uma nova volta do ciclo do projeto."
    },
    m7: {
      datas: "Missão extra · BNCC EF07CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje o grafo é da nossa cidade: Escola, Praça, Igreja, Feira e Rodoviária." },
        { fala: "Os tempos são inventados para o exercício. O que importa é o jeito de pensar: lugar vira vértice, rua vira aresta, tempo vira peso." },
        { acao: "Peça para a turma sugerir outro lugar da cidade e onde ele entraria no grafo." }
      ],
      onde: {
        pergunta: "Como vocês explicariam a um visitante o caminho da rodoviária até a escola?",
        fechamento: "Com pontos de referência e caminhos: é um grafo falado.",
        dica: "Se a turma quiser, monte no ⬜ quadro um grafo com os lugares que eles mais usam."
      },
      demonstracao: "No projetor, compare os caminhos da Escola até a Rodoviária: 15 pela Praça e 14 direto pela Feira.",
      atencao: [
        "Deixe claro que os minutos são de mentirinha: ninguém precisa conferir na rua.",
        "No Turbo, o passeio tem duas partes: some no fim."
      ],
      perguntas: [
        { p: "O grafo é igual ao mapa?", r: "Não: é um modelo simplificado, só com o que importa para o problema." }
      ],
      curiosidade: "Os aplicativos de mapa usam o trânsito do momento como peso das arestas: por isso a rota muda na hora do rush."
    },
    m8: {
      datas: "Missão extra · BNCC EF07CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Todo labirinto é um grafo escondido: cruzamentos e becos viram pontos, corredores viram linhas." },
        { acao: "Desenhe um labirinto pequeno no quadro e marque com bolinhas os cruzamentos e os becos." },
        { fala: "Para sair: mão na parede, tentar e voltar, ou marcar o caminho. O computador usa o “tentar e voltar”, que se chama retrocesso." }
      ],
      onde: {
        pergunta: "Em que jogos vocês já viram labirintos?",
        fechamento: "Jogos de aventura, de terror, de corrida: os inimigos acham o caminho até você usando grafos.",
        dica: "Conte a lenda do fio de Ariadne, que marcou o caminho no labirinto: é a estratégia de marcar o caminho."
      },
      demonstracao: "No projetor, faça o robô entrar num beco de propósito e mostre o “voltar e tentar outro corredor”.",
      atencao: [
        "A mão na parede só funciona quando todas as paredes estão ligadas; não prometa que sempre funciona.",
        "No labirinto grande, peça para planejarem antes de clicar."
      ],
      perguntas: [
        { p: "Por que o computador não se perde?", r: "Porque marca por onde já passou e volta quando chega num beco." }
      ],
      curiosidade: "Os robôs que exploram cavernas e os robôs aspiradores também precisam resolver labirintos."
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
