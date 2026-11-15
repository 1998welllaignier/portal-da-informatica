/* Roteiro da aula (só para o professor) — 7º ano, 1º bimestre de 2027
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal
   (nas atividades de blocos, o ✅ Resposta monta o programa certo no editor).
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair. */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 5, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 10, icone: "🖥️", t: "Demonstração no editor de blocos (projetor)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-7ano-2027-1bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon (Chrome ou Edge atualizado: o editor de blocos roda no navegador)",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🧱 Editor de blocos aberto no projetor para a demonstração",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "BNCC EF07CO03 · 1ª aula de programação · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Ano passado vocês escreveram algoritmos. Este ano vocês vão PROGRAMAR de verdade: montar programas com blocos, como peças de encaixar." },
        { fala: "O computador é obediente e muito literal: faz exatamente o que os blocos mandam, de cima para baixo." },
        { acao: "No projetor, monte: repita 3 vezes [mostrar “pulo”] e mostrar “fim”. Rode." },
        { fala: "Agora vou arrastar o “fim” para dentro do repita. O que vai acontecer?" },
        { acao: "Deixe a turma apostar e rode de novo: “fim” aparece 3 vezes." }
      ],
      siglas: "Leia o “O que significa?”. Reforce: programa = algoritmo para o computador; executar = rodar.",
      onde: {
        pergunta: "Num jogo, onde aparece repetição? E seleção?",
        fechamento: "Inimigos que andam de um lado para o outro (repetição); se a vida chegar a zero, fim de jogo (seleção).",
        dica: "Os alunos adoram falar de jogo: aproveite para ligar cada exemplo a um bloco."
      },
      demonstracao: "Mostre as gavetas, arrastar, encaixar (o bloco “gruda”), a lixeira e o ▶️ Rodar. Mostre também o 🎯 “O que o programa precisa mostrar”.",
      atencao: [
        "Bloco solto (não encaixado) não roda junto: muitos esquecem de encaixar.",
        "O texto precisa ser igual ao pedido (o portal não liga para acento nem maiúscula, mas liga para palavras e pontuação diferentes).",
        "Nos computadores mais lentos o editor demora uns segundos para abrir na primeira vez."
      ],
      perguntas: [
        { p: "Meu programa não mostra nada!", r: "Veja se os blocos estão encaixados e se tem um “mostrar na tela”." },
        { p: "Apareceu “Faltam linhas”.", r: "O programa mostrou menos linhas do que devia: falta um mostrar, ou o repita está com número menor." }
      ],
      curiosidade: "A ideia de programar com blocos de encaixar foi criada para ensinar crianças; hoje milhões de pessoas aprendem assim antes de passar para o código escrito."
    },
    m2: {
      datas: "BNCC EF07CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imaginem guardar os 19 nomes da turma em 19 variáveis: aluno1, aluno2… Cansativo! Para isso existe a lista." },
        { acao: "No projetor: definir frutas para criar lista com maçã, uva, caju, açaí. Mostre o item 3 e o tamanho." },
        { fala: "Atenção: aqui as posições começam no 1." },
        { acao: "Mostre o para cada percorrendo a lista." }
      ],
      siglas: "Leia o “O que significa?”. Item, posição, tamanho e percorrer são as palavras-chave da prova.",
      onde: {
        pergunta: "Que listas vocês usam no celular?",
        fechamento: "Playlist, carrinho de compras, histórico, lista de contatos: todos são listas que um programa percorre.",
        dica: "Mostre o carrinho de uma loja on-line: o número no ícone é o tamanho da lista."
      },
      demonstracao: "Mostre a engrenagem do bloco “criar lista com”, que muda a quantidade de itens (arrastando “item” para dentro).",
      atencao: [
        "Para pegar um item, o bloco precisa da variável da lista dentro dele: muitos esquecem.",
        "No Desafio, o “mostrar Total” precisa ficar fora do para cada."
      ],
      perguntas: [
        { p: "Por que começa no 1?", r: "Neste editor as posições começam no 1, como numa fila. Em algumas linguagens começa no 0; isso vem mais para frente." }
      ],
      curiosidade: "As playlists dos aplicativos de música podem ter milhares de músicas: o programa percorre a lista sem saber de antemão o tamanho."
    },
    m3: {
      datas: "BNCC EF07CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A lista guarda vários itens parecidos. Mas e o nome, a idade e a turma de UM aluno? Isso é um registro: uma ficha com campos." },
        { acao: "No projetor: monte a ficha aluno com nome e idade e mostre a ficha inteira." },
        { fala: "Na lista a gente acha pela posição; na ficha, pelo nome do campo." }
      ],
      siglas: "Leia o “O que significa?” e o quadro Lista × Registro.",
      onde: {
        pergunta: "Que ficha tem um personagem de jogo?",
        fechamento: "Nome, vida, força, velocidade: cada um é um campo. O contato do celular também é uma ficha.",
        dica: "Peça para a turma inventar os campos de um personagem no quadro."
      },
      demonstracao: "Mostre os 3 blocos da gaveta 🗂️ Fichas: nova ficha, na ficha … o campo … vale, campo … da ficha.",
      atencao: [
        "O nome do campo precisa ser escrito igual nas duas pontas (gravar e ler): idade ≠ idadee.",
        "No Turbo, cada item da lista é uma ficha inteira."
      ],
      perguntas: [
        { p: "Apareceu “(sem turma)”.", r: "O campo turma não foi criado na ficha, ou está com outro nome." }
      ],
      curiosidade: "Os cadastros de escolas, bancos e lojas são enormes listas de fichas, guardadas em bancos de dados."
    },
    m4: {
      datas: "BNCC EF07CO02 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Todo programador erra. O que diferencia os bons é saber achar o erro: depurar." },
        { fala: "Em 1947, uma mariposa presa num computador causou uma falha. Desde então, erro de programa se chama bug, inseto." },
        { acao: "No projetor: mostre um programa com “fim” dentro do repita e use o método do detetive em voz alta." }
      ],
      siglas: "Leia o “O que significa?” e a tabela dos erros comuns.",
      onde: {
        pergunta: "Quando a receita dá errado, como vocês descobrem o porquê?",
        fechamento: "Comparando com o que devia ser e mudando uma coisa por vez: é depuração.",
        dica: "Faça a turma repetir os 4 passos: rodar, comparar, achar, mudar uma coisa só."
      },
      demonstracao: "Mostre a mensagem do portal “A linha N mostrou X, mas devia mostrar Y”: é o passo de comparar.",
      atencao: [
        "Tem aluno que apaga tudo e monta de novo: incentive a consertar só o que está errado.",
        "No Turbo (repetição sem fim), o portal para o programa sozinho: o aluno não perde nada."
      ],
      perguntas: [
        { p: "Consertei, mas apareceu outro erro!", r: "Ótimo: era um programa com dois erros. Repita o método para o próximo." }
      ],
      curiosidade: "Empresas grandes pagam prêmios a quem acha bugs nos seus programas (os “programas de recompensa por bugs”)."
    },
    m5: {
      datas: "BNCC EF07CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Problema grande assusta. O segredo é dividir: decompor." },
        { acao: "Escreva “festa da turma” no quadro e decomponha com eles em 4 partes." },
        { fala: "No programa, quando uma parte se repete, a gente cria um bloco nosso, com nome, e chama quando precisar." },
        { acao: "No projetor: crie o bloco refrão (gaveta 🧩 Meus blocos → “para fazer algo”, renomeie) e chame duas vezes." }
      ],
      siglas: "Leia o “O que significa?”. Bloco próprio = função ou procedimento.",
      onde: {
        pergunta: "Num trabalho em grupo, como vocês dividem as partes?",
        fechamento: "Decompor e dividir: cada um faz uma parte, e no fim junta tudo.",
        dica: "Ligue com a Missão 6: a dupla vai dividir o trabalho assim."
      },
      demonstracao: "Mostre que, depois de criado, o bloco aparece na gaveta 🧩 Meus blocos para ser chamado.",
      atencao: [
        "Para renomear o bloco, clique em “fazer algo” e digite o nome.",
        "No Turbo, o desafio é mudar SÓ dentro do bloco, sem mexer no programa principal."
      ],
      perguntas: [
        { p: "Criei o bloco, mas nada aparece!", r: "Criar não basta: é preciso chamar o bloco no programa principal." }
      ],
      curiosidade: "Os aplicativos usam milhares de blocos prontos (funções) feitos por outras pessoas: ninguém programa tudo do zero."
    },
    m6: {
      datas: "BNCC EF07CO05 · aula em dupla · datas pelo calendário da SEMED 2027",
      tempo: [
        { min: 10, icone: "🎬", t: "Abertura e vídeo" },
        { min: 5, icone: "👥", t: "Formar as duplas e combinar os papéis" },
        { min: 45, icone: "💻", t: "Missão em dupla (trocar de papel a cada 10 min)" },
        { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
        { min: 10, icone: "🎮", t: "Recreação" }
      ],
      abertura: [
        { fala: "Hoje cada computador tem dois programadores: o piloto, que monta, e o navegador, que pensa e confere." },
        { fala: "A cada 10 minutos eu aviso, e vocês trocam de papel." },
        { acao: "Entrem em dupla no portal (modo dupla). Marque os 10 minutos no cronômetro do projetor." }
      ],
      siglas: "Leia o “O que significa?” e os combinados da dupla.",
      onde: {
        pergunta: "No carro, quem dirige e quem olha o mapa?",
        fechamento: "Piloto e navegador: um faz, o outro guia. As empresas de tecnologia trabalham assim.",
        dica: "Monte as duplas com um aluno mais seguro e outro que precisa de apoio."
      },
      demonstracao: "Simule com um aluno: você é o navegador e ele o piloto, por 1 minuto.",
      atencao: [
        "Fique de olho no navegador que pega o mouse: lembre o combinado.",
        "Conflito na dupla: “o erro é da dupla” e “ouvir a ideia do outro antes de testar a sua”."
      ],
      perguntas: [
        { p: "Meu colega não deixa eu mexer!", r: "Hora de trocar de papel: no aviso dos 10 minutos, o mouse muda de mão." }
      ],
      curiosidade: "A “programação em par” (pair programming) é usada em empresas do mundo todo para errar menos e ensinar quem está chegando."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO02",
      tempo: T,
      abertura: [
        { fala: "Hoje vocês são detetives: todos os programas chegam quebrados." },
        { acao: "Mostre no projetor as 4 pistas (item errado, “(sem …)”, item repetido ou faltando, erro em vários lugares)." }
      ],
      siglas: "Pista, hipótese e corrigir.",
      onde: {
        pergunta: "Que profissões usam pistas para achar problemas?",
        fechamento: "Mecânico, médico, técnico de informática: todos depuram.",
        dica: "Premie no placar quem consertar sem pedir dica."
      },
      demonstracao: "Resolva o primeiro programa com a turma, falando a hipótese em voz alta.",
      atencao: ["No Turbo são 3 erros: incentive a consertar e testar um de cada vez."],
      perguntas: [{ p: "Como sei que acabaram os erros?", r: "Quando o portal diz “Programa certo!”: o resultado obtido ficou igual ao esperado." }],
      curiosidade: "O maior desafio dos programadores não é escrever o programa, é achar os erros escondidos nele."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO01 / EF07CO03",
      tempo: T,
      abertura: [
        { fala: "Sabe o placar do Wayground? Hoje vocês vão montar o programa que confere as respostas e conta os pontos." },
        { acao: "No quadro: gabarito B A D C e respostas B C D C. Corrijam juntos à mão." },
        { fala: "O programa faz igual: compara posição por posição e soma 1 no contador a cada acerto." }
      ],
      siglas: "Gabarito, contador, alterar por 1.",
      onde: {
        pergunta: "Que outras coisas um contador conta?",
        fechamento: "Passos, moedas, vidas, curtidas: tudo começa em 0 e soma 1.",
        dica: "Mostre a prova do portal: ela faz exatamente isso."
      },
      demonstracao: "Mostre o “em lista … obter #” com a variável i no lugar do número.",
      atencao: ["O “alterar i por 1” fica dentro do repita mas fora do se: é a dúvida mais comum."],
      perguntas: [{ p: "Por que o i começa em 1?", r: "Porque é a posição que estamos conferindo, e as posições começam no 1." }],
      curiosidade: "Todo placar eletrônico, do futebol ao videogame, é um contador que soma pontos."
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
        { fala: "O portal mostra só as missões que vocês estudaram, e é exatamente isso que cai na prova." },
        { acao: "Inicie a aula com a Missão de hoje = 🔁 Revisão. O painel grava sozinho quais missões a turma estudou." }
      ],
      onde: {
        pergunta: "Qual missão vocês acham mais difícil? Comecem a revisão por ela.",
        dica: "Abra o 🔴 Ao vivo: quem estiver parado num bloco, mande reler o 📚 Relembre daquela missão."
      },
      atencao: [
        "No fim da aula, lembre a data da prova da turma (aparece no 🗺️ Panorama).",
        "A prova não tem editor de blocos: as questões perguntam o que um programa mostra e qual bloco usar."
      ],
      perguntas: [
        { p: "Por que não aparece a M7 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }
      ]
    }
  });
})();
