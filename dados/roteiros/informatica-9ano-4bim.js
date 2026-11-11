/* Roteiro da aula (só para o professor) — 9º ano, 4º bimestre
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal. */
(function () {
  const TEMPO = [
    { min: 10, icone: "🎬", t: "Pergunta, dinâmica e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
    { min: 30, icone: "💻", t: "Missão no portal" },
    { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  const SIGLAS = "Depois do vídeo, leia o quadro “O que significa?”. Para cada sigla: as letras em inglês, a tradução e onde aparece (navegador, celular, computador da sala). Pergunte: “Alguém já tinha visto isso? Onde?”";

  PORTAL.registrarRoteiro("informatica-9ano-4bim", {
    antes: [
      "📽️ Projetor ligado e vídeo da missão aberto (sem som: você lê os textos)",
      "🖥️ Veyon aberto, todos os computadores aparecendo",
      "🪪 Cartões com os códigos dos alunos",
      "🗺️ Mapa de lugares conferido",
      "▶️ Programa do dia testado pelo “Executar programa” do Veyon",
      "✏️ Material da dinâmica (grafo do bairro no quadro na Missão 1; mensagem secreta na Missão 2; 3 imagens “Real ou IA?” na Missão 3)",
      "🎮 Jogos da recreação fechados até o ✔ do Básico"
    ],
    m1: {
      datas: "9º C: 03/11 · 9º D: 05/11 · 9º A e 9º B: 09/11 · Primeira aula: comece pelos combinados",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês pedem uma rota no aplicativo de mapas, ele mostra o caminho mais rápido em um segundo, mesmo com milhares de ruas. Como ele descobre qual é o melhor caminho?" },
        { acao: "Ouça 3 ou 4 respostas sem corrigir. Depois:" },
        { fala: "No 8º ano vocês trabalharam com listas, em que tudo fica em fila. Mas um mapa não é uma fila: cada esquina se liga a várias ruas. Para isso o computador usa uma estrutura chamada grafo. Hoje vocês vão pensar como o aplicativo de mapas." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Grafo no quadro (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Mostre o grafo do bairro desenhado antes da aula, sem os pesos. Pergunte quanto tempo se leva a pé entre dois lugares e escreva os pesos nas linhas. Três alunos propõem caminhos da Casa até a Escola; some cada um." },
            { fala: "Repararam? O caminho com mais paradas foi o mais rápido. Para o computador, o melhor caminho é o de menor soma, e não o de menos paradas." }
          ]
        },
        {
          titulo: "🌳 Dinâmica: Adivinhe o objeto (5 min)", cor: "c-rosa",
          itens: [
            { acao: "Pense em um objeto da sala. A turma só faz perguntas de sim ou não. A cada pergunta, desenhe um galho com o “sim” e o “não”, até chegar ao objeto." },
            { fala: "O que nós desenhamos é uma árvore de decisão. A primeira pergunta é a raiz e as respostas finais são as folhas. As pastas do computador funcionam do mesmo jeito: uma pasta principal, que se divide em outras, até os arquivos." }
          ]
        },
        {
          titulo: "🏘️ Na prática: o nosso bairro (10 a 15 min, depois do exemplo A, B, C, D)", cor: "c-ciano",
          itens: [
            { acao: "Projete no celular o mapa com a escola e o Mercado Municipal." },
            { fala: "Quem já foi a pé da escola até o mercado? Por qual rua vocês vão?" },
            { acao: "Mostre que a página é o mesmo bairro “desenhado como grafo”: esquina = vértice, rua = aresta, quadras = peso. Faça o caminho 1 junto; o 2 e o 3 eles fazem sozinhos ou em dupla. Depois, o mercado mais perto (Comercial União) e a rua com lama:" },
            { fala: "O aplicativo não escolhe sempre a rua mais reta. Ele escolhe a de menor peso. E o peso pode ser metro ou minuto: rua com obra ou lama pesa mais." },
            { acao: "Fechamento: Rotas → a pé no seu celular, no projetor. Se o aplicativo mostrar outra rota, discuta o porquê (metros reais, mão única, tempo)." }
          ]
        }
      ],
      siglas: SIGLAS,
      onde: {
        pergunta: "Para ir de casa até a praça, vocês sempre vão pelo mesmo caminho? Ele é o mais curto ou o mais fácil?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Mundo do trabalho: entregadores, motoristas de aplicativo e empresas de ônibus usam grafos para planejar as rotas."
      },
      demonstracao: "No grafo do portal, ligue só os dois primeiros lugares e mostre o peso aparecendo na linha; o resto é com eles.",
      atencao: [
        "Muitos confundem vértice com aresta. Use sempre: vértice é o lugar, aresta é a rua.",
        "Errou a soma do caminho? Peça que leia em voz alta cada peso antes de somar.",
        "No Turbo, se travar, peça que desenhe as amizades como um grafo antes de responder."
      ],
      perguntas: [
        { p: "Por que o caminho com mais paradas pode ser o mais rápido?", r: "Porque vale a soma dos pesos, não o número de paradas." },
        { p: "Um grafo com ciclo pode ser árvore?", r: "Não. Árvore não tem ciclo: de um ponto a outro só existe um caminho." }
      ],
      curiosidade: "Em 1956, Edsger Dijkstra criou em uns 20 minutos, sem papel, num café de Amsterdã, o algoritmo do caminho mais curto que inspira os aplicativos de mapas. E o grafo nasceu em 1736, com Euler e as sete pontes de Königsberg."
    },
    m2: {
      datas: "9º C: 10/11 · 9º D: 12/11 · 9º A e 9º B: 16/11 (avise sobre a avaliação no fim da aula: só caem as Missões 1 e 2)",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês mandam uma mensagem para um amigo, ela passa por roteadores, provedores e servidores de várias empresas. Se alguém no meio do caminho pegasse essa mensagem, conseguiria ler?" },
        { acao: "Ouça as respostas. Depois:" },
        { fala: "Não consegue, porque a mensagem viaja embaralhada. Isso se chama criptografia. No 7º ano vocês aprenderam a se defender de golpes; hoje vão ver como os dados são escondidos e como os ataques funcionam por dentro." }
      ],
      extras: [
        {
          titulo: "🕵️ Dinâmica: Mensagem secreta (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Escreva no quadro SDUDEHQV WXUPD e projete a tabela da cifra de César com a chave 3. Quem decifrar primeiro levanta a mão (PARABENS TURMA)." },
            { fala: "Vocês acabaram de decifrar uma mensagem porque tinham a chave. Sem a tabela, seria só um monte de letras. Júlio César usava esse truque há mais de 2 mil anos para mandar ordens ao exército." }
          ]
        },
        {
          titulo: "🔨 Dinâmica: Força bruta ao vivo (3 min)", cor: "c-rosa",
          itens: [
            { acao: "Anote escondido um número de 00 a 99. A turma chuta em ordem (00, 01, 02…) e você só responde “não” ou “acertou”. Pare em umas 15 tentativas e revele." },
            { fala: "Isso é a força bruta: testar tudo, um por um. Com 2 dígitos são 100 tentativas. Com 4, são 10.000. Com uma senha longa, de letras e números, um computador levaria anos. É por isso que senha longa protege." }
          ]
        }
      ],
      onde: {
        pergunta: "Onde vocês usam senha ou código todos os dias? O que aconteceria se alguém descobrisse?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Reforce: ninguém fala a senha em voz alta; o exemplo é só o lugar onde ela é usada."
      },
      atencao: [
        "Muitos andam para trás ao cifrar. Cifrar = 3 casas para frente; decifrar = 3 para trás. Aponte a tabela: em cima o texto claro, embaixo o cifrado.",
        "O alfabeto “dá a volta”: X vira A, Y vira B e Z vira C.",
        "Ninguém digita senha verdadeira no portal.",
        "Se perguntarem como invadir uma conta: é crime (Lei nº 12.737/2012). Volte para “como eu me protejo disso?”."
      ],
      perguntas: [
        { p: "O que é ransomware?", r: "O criminoso tranca os seus arquivos e cobra pela chave. Quem tem backup não precisa pagar." },
        { p: "Por que a cifra de César é fácil de quebrar?", r: "Porque só existem 25 chaves: dá para testar todas em poucos minutos." }
      ],
      curiosidade: "Na Segunda Guerra, os alemães usavam a máquina Enigma, com milhões de chaves. A equipe de Alan Turing construiu máquinas para quebrá-la, e esse trabalho ajudou a criar os primeiros computadores."
    },
    m3: {
      datas: "9º C: 17/11 · 9º D: 19/11 (avise sobre a avaliação no fim) · 9º A e 9º B: 07/12, depois da prova",
      tempo: TEMPO,
      abertura: [
        { fala: "Quem aqui já viu um vídeo de um famoso dizendo algo absurdo e depois descobriu que era montagem?" },
        { acao: "Deixe dois ou três contarem. Em seguida:" },
        { fala: "Hoje a inteligência artificial consegue criar uma foto, uma voz ou um vídeo de qualquer pessoa em poucos minutos. Isso se chama deepfake. No 8º ano vocês aprenderam a checar uma notícia. Hoje vamos aprender duas coisas novas: a respeitar quem cria e a perguntar por que alguém espalhou aquilo." }
      ],
      extras: [
        {
          titulo: "🤖 Dinâmica: Real ou IA? (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Projete 3 imagens de sites de checagem (uma real, duas de IA) ou leia 3 situações. Exemplo: a foto do papa Francisco de casaco branco acolchoado (2023) foi criada por IA. A turma vota em cada uma." },
            { fala: "O que denunciou a imagem? E quem ganha alguma coisa quando uma imagem dessas se espalha?" },
            { acao: "Para a parte de autoria, pegue o desenho de um aluno:" },
            { fala: "Se eu tirar uma foto desse desenho e publicar dizendo que fui eu que fiz, está certo? O desenho é de quem fez. Com as músicas, as fotos e os textos da internet é igual: eles têm dono." }
          ]
        }
      ],
      onde: {
        pergunta: "Quem já teve um vídeo bloqueado, ou viu alguém reclamar disso, por causa da música? Por que vocês acham que isso acontece?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Mundo do trabalho: em qualquer emprego que produz conteúdo, dar crédito e pedir autorização é obrigação."
      },
      atencao: [
        "Nunca use fotos, vozes ou vídeos de alunos ou professores da escola como exemplo de deepfake.",
        "Crédito: autor, site e licença, nessa ordem (exemplo do Desafio).",
        "O cartaz Eu respeito a autoria é montado no próprio portal (desenhos, cor, Criado por e Licença: CC BY) e o portal confere sozinho.",
        "Aluno relata deepfake ou foto exposta: agradeça, não peça detalhes na frente da turma, converse depois e encaminhe à direção."
      ],
      perguntas: [
        { p: "Com “todos os direitos reservados”, posso usar se der crédito?", r: "Não: é preciso pedir autorização ao autor." },
        { p: "O que a vítima de deepfake deve fazer?", r: "Não apagar as provas (prints e links), contar a um adulto de confiança ou à escola e denunciar na plataforma." }
      ],
      curiosidade: "Por décadas uma empresa cobrou direitos autorais de “Parabéns pra você” (Happy Birthday). Em 2016 a Justiça dos EUA encerrou o caso e a música virou domínio público por lá. Termo para lembrar: “Antes de compartilhar, pergunte: quem ganha com isso?”"
    },
    pf: {
      datas: "Prova: 9º A e 9º B 23/11 (Missões 1 e 2) · 9º C 24/11 · 9º D 26/11 · Projeto final: 9º C 01/12 · 9º D 03/12 · 9º A e 9º B 14/12 · 2ª chamada: 9º A e B 07/12 · 9º C 08/12 · 9º D 10/12",
      tempo: [
        { min: 10, icone: "🎬", t: "Abertura" },
        { min: 45, icone: "🏁", t: "Missões que faltaram e projeto final" },
        { min: 10, icone: "🎤", t: "Apresentações (Turbo)" },
        { min: 10, icone: "🎮", t: "Recreação" }
      ],
      abertura: [
        { acao: "No dia da prova:" },
        { fala: "A prova é no Wayground e vale até 5 pontos. Leiam cada pergunta com calma; tudo o que cai está nos Resumos da Aula e nas Perguntas rápidas. A tabela da cifra de César vai ficar no projetor. Nas questões de caminho mais curto, façam as contas no rascunho antes de marcar. Quem terminar fica em silêncio até todos acabarem." },
        { acao: "No 9º A e no 9º B, acrescente:" },
        { fala: "A Missão 3 a gente faz depois da prova, em 07/12; ela não cai hoje." },
        { acao: "No dia do projeto final:" },
        { fala: "Hoje é o dia de fechar o bimestre. Cada um confere no portal quais missões já têm o ✔. Quem faltou a alguma faz agora o Básico dela. Depois, escrevam o que aprenderam em cada tema. É o último bimestre de vocês no Fundamental: caprichem!" }
      ],
      atencao: [
        "Abra o painel (aba Turmas) e veja quem ainda não tem o ✔ do Básico: chame esses alunos pelo nome primeiro.",
        "Use o Turbo (apresentar no projetor) como fechamento; turma tímida: dois ou três leem do lugar. A apresentação é a atividade que VOCÊ confere.",
        "Na segunda chamada, os demais terminam Desafios e Turbos (no 9º A e B, fazem a Missão 3).",
        "14/12 é conselho de classe: confirme com a direção se o 9º A e o 9º B terão aula. Se não, feche o bimestre em 07/12."
      ]
    }
  });
})();
