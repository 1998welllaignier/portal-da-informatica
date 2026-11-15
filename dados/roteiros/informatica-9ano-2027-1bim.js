/* Roteiro da aula (só para o professor) — 9º ano, 1º bimestre de 2027
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair. */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 5, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 10, icone: "🖊️", t: "Exemplo no quadro ou no projetor" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-9ano-2027-1bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon (Chrome ou Edge: há atividades no editor de blocos)",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🖊️ Pincel para desenhar grafos e árvores no quadro",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "BNCC EF09CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como o aplicativo de mapa acha o caminho mais rápido? Ele vê a cidade como pontos ligados por linhas: um grafo." },
        { acao: "Desenhe no quadro o grafo do bairro (Casa, Padaria, Praça, Escola) com os pesos." },
        { fala: "Qual caminho vocês escolhem? O de menos paradas é o mais rápido?" }
      ],
      siglas: "Leia o “O que significa?”: vértice, aresta, peso, grau. GPS = Sistema de Posicionamento Global.",
      onde: {
        pergunta: "Onde mais vocês veem coisas ligadas umas às outras?",
        fechamento: "Redes sociais (amizades), internet (cabos), ônibus (linhas): tudo vira grafo.",
        dica: "Peça para um aluno descrever o caminho de casa até a escola como vértices e arestas."
      },
      demonstracao: "No projetor, a atividade do GPS (sim_grafo): mostre que o caminho mais curto tem mais paradas.",
      atencao: ["Erro comum: escolher o caminho com menos arestas. O critério é a menor soma dos pesos."],
      perguntas: [{ p: "E se dois caminhos tiverem a mesma soma?", r: "Os dois são caminhos mais curtos; qualquer um serve." }],
      curiosidade: "O matemático Leonhard Euler criou a ideia de grafo em 1736, para resolver um quebra-cabeça das pontes da cidade de Königsberg."
    },
    m2: {
      datas: "BNCC EF09CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A árvore da computação é ao contrário: a raiz fica em cima." },
        { acao: "No projetor, abra o Explorador de Arquivos e mostre a árvore de pastas: Documentos › Escola › arquivo." },
        { fala: "Quem é a raiz? Quem são as folhas?" }
      ],
      siglas: "Raiz, pai, filho, folha, nível, ciclo.",
      onde: {
        pergunta: "Que outras coisas têm forma de árvore?",
        fechamento: "Árvore genealógica, mata-mata da Copa, organograma da escola.",
        dica: "Desenhe o mata-mata de um campeonato que a turma acompanhe."
      },
      demonstracao: "Desenhe um grafo com uma volta e pergunte: isto é árvore? Por quê?",
      atencao: ["O nível da raiz é 0, não 1."],
      perguntas: [{ p: "Uma pasta pode estar dentro de duas pastas ao mesmo tempo?", r: "Não: cada pasta tem uma só pasta-mãe. Por isso é árvore." }],
      curiosidade: "Os sites de busca organizam bilhões de páginas usando árvores para achar tudo rapidinho."
    },
    m3: {
      datas: "BNCC EF09CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vamos jogar “adivinhe o objeto”: eu penso num objeto da sala e vocês só podem fazer perguntas de sim ou não." },
        { acao: "Depois do jogo, desenhe no quadro a árvore das perguntas que funcionaram." },
        { fala: "Isso é uma árvore de decisão: perguntas nos vértices, respostas nos galhos, decisões nas folhas." }
      ],
      siglas: "Árvore de decisão, condição, profundidade, IA (Inteligência Artificial).",
      onde: {
        pergunta: "Onde vocês já responderam perguntas que levavam a um resultado?",
        fechamento: "Atendimento do telefone, triagem do posto, testes de personalidade, filtros de loja.",
        dica: "Mostre que a árvore de decisão é parecida com a busca binária: cada pergunta corta as opções."
      },
      demonstracao: "No projetor, siga a árvore dos objetos com respostas diferentes.",
      atencao: ["Reforce: pergunta boa tem resposta clara; opinião não serve."],
      perguntas: [{ p: "A árvore precisa ter todos os galhos do mesmo tamanho?", r: "Não: na triagem, o caso grave decide logo na 1ª pergunta." }],
      curiosidade: "Muitos programas de IA aprendem a montar árvores de decisão sozinhos, a partir de milhares de exemplos."
    },
    m4: {
      datas: "BNCC EF09CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como o computador guarda um grafo? Para cada lugar, a lista dos lugares ligados a ele: a lista de vizinhos." },
        { acao: "No quadro, faça a tabela de vizinhos da escola a partir das arestas." },
        { fala: "E a árvore de decisão? Vira se dentro de se." }
      ],
      siglas: "Lista de vizinhos (adjacência), representar, se aninhado.",
      onde: {
        pergunta: "Como a rede social sabe quantos amigos você tem?",
        fechamento: "Ela guarda a sua lista de amigos (vizinhos) e conta o tamanho: o grau.",
        dica: "Ligue com o 7º ano: fichas com campos e listas."
      },
      demonstracao: "No projetor, monte o “se dentro de se” da árvore dos objetos, um galho por vez.",
      atencao: ["O nome do campo precisa ser escrito igual, com acento (Pátio).", "No Desafio, montar a árvore inteira (as 4 folhas), não só o caminho até “Teclado”."],
      perguntas: [{ p: "Por que não guardar só a lista de arestas?", r: "Dá, mas para achar os vizinhos de um lugar seria preciso olhar todas as arestas; a lista de vizinhos já está pronta." }],
      curiosidade: "As redes sociais guardam bilhões de listas de vizinhos: uma para cada pessoa."
    },
    m5: {
      datas: "BNCC EF09CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A catraca do ônibus tem memória? Ela sabe se você já pagou ou não!" },
        { acao: "Desenhe no quadro os dois estados (travada e liberada) como círculos e as transições como setas com a entrada escrita." },
        { fala: "Isso é um autômato: uma máquina de estados." }
      ],
      siglas: "Autômato, estado, entrada, transição, tabela de transição, estado inicial.",
      onde: {
        pergunta: "Que aparelhos têm estados?",
        fechamento: "Semáforo, elevador, máquina de refrigerante, personagem de jogo.",
        dica: "Peça para a turma descrever os estados do personagem do jogo favorito."
      },
      demonstracao: "Siga no quadro uma sequência de entradas (empurrar, cartão, empurrar) mudando o estado.",
      atencao: ["Diferença entre estado (situação) e entrada (o que acontece)."],
      perguntas: [{ p: "Autômato é robô?", r: "Não necessariamente: é qualquer máquina (ou programa) que muda de estado conforme as entradas." }],
      curiosidade: "O matemático Alan Turing usou a ideia de máquinas de estados para definir o que um computador consegue calcular."
    },
    m6: {
      datas: "BNCC EF09CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "O celular fica parado esperando. Quando você toca, ele reage. Isso é programação por eventos." },
        { acao: "No projetor, mostre o bloco ⚡ “quando acontecer … faça …” e o contador de cliques." },
        { fala: "Ao apertar ▶️ Rodar, o portal aperta os botões por vocês, na ordem que aparece em cima do editor." }
      ],
      siglas: "Evento, tratador, sensor, notificação.",
      onde: {
        pergunta: "Que eventos o seu celular percebe?",
        fechamento: "Toque, mensagem chegando, bateria fraca, giro da tela: cada um tem um tratador.",
        dica: "Ligue com a Missão 5: a catraca com eventos e uma variável de estado."
      },
      demonstracao: "Monte a catraca no projetor: variável estado + dois eventos.",
      atencao: ["O “definir” fora dos eventos roda uma vez só, no começo.", "Os textos “travada” e “liberada” precisam ser escritos igual nos dois lugares."],
      perguntas: [{ p: "Por que o tratador roda várias vezes?", r: "Porque ele roda toda vez que o evento acontece." }],
      curiosidade: "Os jogos de videogame verificam os botões do controle dezenas de vezes por segundo, gerando eventos."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO03",
      tempo: T,
      abertura: [
        { fala: "O semáforo é um autômato de 3 estados. Quem muda ele é o tempo: o tique do temporizador." },
        { acao: "Desenhe o ciclo verde → amarelo → vermelho → verde." }
      ],
      siglas: "Ciclo, tique, temporizador, pedestre.",
      onde: { pergunta: "Onde há semáforo com botão de pedestre?", fechamento: "Em avenidas movimentadas; o botão é um evento que muda o estado.", dica: "Pergunte que regra eles criariam para o semáforo da frente da escola." },
      demonstracao: "Monte o se dentro do senão no projetor.",
      atencao: ["Os textos verde, amarelo e vermelho precisam ser escritos igual em todos os blocos."],
      perguntas: [{ p: "Por que o botão não muda o vermelho?", r: "Pela regra da missão: no vermelho o pedestre já pode atravessar." }],
      curiosidade: "O primeiro semáforo elétrico foi instalado em 1914, em Cleveland, nos Estados Unidos."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO01",
      tempo: T,
      abertura: [
        { fala: "Vamos transformar a nossa escola num grafo!" },
        { acao: "Se der tempo, desenhe com a turma a planta real da escola e compare com o grafo da apostila." }
      ],
      siglas: "Planta, mais conectado, rota de fuga, interditar.",
      onde: { pergunta: "Vocês já viram mapa de rota de fuga em algum prédio?", fechamento: "Ele mostra o caminho mais curto até a saída: um grafo com pesos.", dica: "Leve a turma a pensar onde ficaria o bebedouro." },
      demonstracao: "Trace no projetor o caminho do Portão até a Informática e depois tire a aresta.",
      atencao: ["O grafo da apostila é um modelo simplificado; a escola real pode ter outros corredores."],
      perguntas: [{ p: "E se o Pátio fechar?", r: "Vários lugares ficam sem caminho: por isso ele precisa estar sempre livre." }],
      curiosidade: "Engenheiros usam grafos para planejar as saídas de emergência de estádios e shoppings."
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
      perguntas: [{ p: "Por que não aparece a M7 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }]
    }
  });
})();
