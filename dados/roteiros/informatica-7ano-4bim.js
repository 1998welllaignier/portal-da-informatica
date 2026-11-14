/* Roteiro da aula (só para o professor) — 7º ano, 4º bimestre
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

  PORTAL.registrarRoteiro("informatica-7ano-4bim", {
    antes: [
      "📽️ Projetor ligado e vídeo da missão aberto (sem som: você lê os textos)",
      "🖥️ Veyon aberto, todos os computadores aparecendo",
      "🪪 Cartões com os códigos dos alunos",
      "🗺️ Mapa de lugares conferido",
      "▶️ Programa do dia testado pelo “Executar programa” do Veyon",
      "✂️ Material da dinâmica (tiras de pacotes na Missão 1; mensagens na Missão 3)",
      "🎮 Jogos da recreação fechados até o ✔ do Básico"
    ],
    m1: {
      datas: "7º D, 7º A e 7º B: 03/11 · 7º C: 09/11 · Primeira aula: comece pelos combinados",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês mandam um áudio no WhatsApp para alguém que mora em outra cidade, como ele chega lá em poucos segundos? Ele vai voando? Vai por um fio?" },
        { acao: "Ouça 3 ou 4 respostas sem corrigir. Depois, aponte para os computadores da sala:" },
        { fala: "Esta sala é uma rede. Cada computador está ligado ao meu. É por isso que eu consigo ver a tela de vocês e mandar mensagens pelo Veyon. A internet é a mesma ideia, só que com milhões de redes ligadas no mundo todo." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Correio de pacotes (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Escreva “Bom dia, turma! A aula de hoje é sobre redes de computadores. Até logo!” em 5 tiras numeradas (Pacote 1 de 5 … 5 de 5)." },
            { acao: "Escolha 1 remetente, 1 destinatário do outro lado da sala e 3 ou 4 “roteadores” no meio. Entregue as tiras embaralhadas: cada tira faz um caminho diferente; o destinatário lê na ordem." },
            { fala: "Viram? A mensagem foi dividida, cada pedaço fez um caminho e no final foi montada pelos números. Isso é um pacote. E as regras que combinamos para passar as tiras são o protocolo." },
            { acao: "Repita escondendo uma tira: o destinatário percebe que falta o pacote 3 e “pede de novo”. Isso prepara o Turbo, sem dar a resposta." }
          ]
        },
        {
          titulo: "🏫 Na prática: a rede da nossa escola (10 a 15 min)", cor: "c-rosa",
          itens: [
            { fala: "Esta sala é uma rede. E sabem por onde a internet chega até aqui? Ela vem da rua por um cabo de fibra óptica, passa por baixo do chão e entra na escola… pela cozinha!" },
            { acao: "Conte o caminho: fibra → cozinha → rack com roteador MikroTik (dá um IP para cada aparelho) → switch gigabit de 24 portas → cabos CAT6 → tomadas das salas (até 1 Gbps) → switch Fast Ethernet da baia (até 100 Mbps, 6 computadores). Mostre a tomada e o switch da baia. Nas outras salas, o AP vira Wi-Fi." },
            { fala: "A estrada dentro da escola é larga, mas a entrada que vem da rua é menor e todo mundo divide. Por isso, quando muita gente usa ao mesmo tempo, fica mais lento." },
            { acao: "Pergunta 4: no projetor, Windows + R → cmd → Enter → ipconfig → Enter. Aponte a linha “Endereço IPv4”." },
            { fala: "O começo é igual porque estamos todos na mesma rede. O final é diferente porque cada computador tem o seu endereço, como cada casa da rua tem o seu número." },
            { acao: "Pergunta 5: mostre as telas no Veyon." },
            { fala: "Eu só consigo ver a tela de vocês porque estamos na mesma rede. A imagem da tela de cada um viaja em pacotes até o meu computador." }
          ]
        }
      ],
      siglas: SIGLAS,
      onde: {
        pergunta: "Quantos aparelhos estão ligados no Wi-Fi da casa de vocês? O que acontece com o vídeo quando muita gente usa a internet ao mesmo tempo?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Se ninguém falar, conte um exemplo seu. Mundo do trabalho: técnicos de rede instalam e cuidam exatamente dessas partes nas empresas e na escola."
      },
      demonstracao: "Mostre o cadeado 🔒 e o “https” na barra de endereço.",
      atencao: [
        "Segurança: os alunos só observam a rede; ninguém mexe em cabos nem em aparelhos.",
        "Na pergunta 3, a ideia é perceber que a rede fica limitada pela peça mais lenta do caminho (o switch da baia, 100 Mbps).",
        "Quem trava no Desafio: pergunte “quem leva a carta? quem leva o pacote?”."
      ],
      perguntas: [
        { p: "Qual é a velocidade da internet da escola?", r: "O plano chega a no máximo 300 a 400 Mbps, quase sempre abaixo, e é dividido entre todos. Os 1 Gbps e 100 Mbps são a rede interna (cabos e switches), não o plano." },
        { p: "Por que os pacotes são numerados?", r: "Para montar a mensagem na ordem certa e perceber se algum se perdeu (aí pede de novo, que é o que o TCP faz)." }
      ],
      curiosidade: "A primeira mensagem da rede que deu origem à internet, em 1969, era para ser “LOGIN”, mas o sistema travou depois de duas letras e só chegou “LO”."
    },
    m2: {
      datas: "7º B: 10/11 · 7º A e 7º D: 17/11 · 7º C: 16/11",
      tempo: TEMPO,
      abertura: [
        { fala: "Se eu pedir para vocês organizarem a festa de fim de ano da turma, por onde começam? Ninguém faz tudo de uma vez. A gente divide em partes: comida, música, decoração. Isso tem nome em computação: decomposição." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Robô humano com bloco (10 min)", cor: "c-roxo",
          itens: [
            { acao: "Chame um aluno para ser o robô. Com a turma, crie o bloco COMEMORAR = bater palmas 2 vezes + dar um giro. Escreva no quadro:" },
            { fala: "Algoritmo: COMEMORAR → dar 2 passos → COMEMORAR → dar 2 passos → COMEMORAR. Viram? Escrevemos os passos do COMEMORAR uma vez só e usamos três vezes. Isso é reúso." },
            { acao: "Coloque um bug de propósito: troque “dar 2 passos” por “dar 20 passos” e deixe o robô obedecer até a parede (com cuidado)." },
            { fala: "Onde está o erro? Como corrigimos? E depois de corrigir, o que precisamos fazer?" },
            { acao: "Resposta esperada: testar de novo. Para a lista, chame 5 alunos em fila:" },
            { fala: "Esta é a lista FILA. Quem está na posição 2? Se a Maria entrar no final, qual é a posição dela?" }
          ]
        }
      ],
      onde: {
        pergunta: "Qual foi o maior trabalho que vocês já fizeram em grupo? Como dividiram as tarefas?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Mundo do trabalho: equipes de programadores dividem um aplicativo em partes, e cada pessoa cuida de uma."
      },
      demonstracao: "Na pintura do portal, mostre que cada clique pinta ou despinta o telhado de uma casa, para ninguém travar.",
      atencao: [
        "A lista começa na posição 1 (em algumas linguagens começa no 0; comente só com quem perguntar).",
        "No Desafio, peça que o aluno “seja o robô” com o dedo na mesa: andando e virando só 3 vezes, o quadrado não fecha.",
        "Retome do 6º ano: sequência, repetição e seleção reaparecem no algoritmo das casas, na pintura do portal."
      ],
      perguntas: [
        { p: "O que é reúso?", r: "Escrever os passos de um bloco uma vez e usar o bloco várias vezes, chamando pelo nome." },
        { p: "Depois de corrigir um bug, acabou?", r: "Não: precisa testar de novo para ver se funcionou." }
      ],
      curiosidade: "O termo “bug” ficou famoso em 1947, quando a equipe de Grace Hopper achou uma mariposa presa dentro de um computador e colou o inseto no caderno de registro."
    },
    m3: {
      datas: "7º B: 17/11 · 7º A e 7º D: 24/11 · 7º C: depois da prova, como conteúdo (14/12)",
      tempo: TEMPO,
      abertura: [
        { fala: "Levante a mão quem já recebeu uma mensagem prometendo prêmio, moedas grátis no jogo ou pedindo um código. Não precisa contar detalhes nem dizer nomes." },
        { acao: "Ouça sem expor ninguém. Em seguida:" },
        { fala: "Os golpistas não invadem o celular com mágica. Na maioria das vezes, eles convencem a pessoa a entregar a senha ou o código. Hoje vocês vão aprender a desconfiar." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: Golpe ou seguro? (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Leia 4 ou 5 mensagens curtas (prêmio com pressa, amigo que “trocou de número”, conta bloqueada falsa, código pedido pelo próprio aplicativo). Mão levantada ✋ = golpe; abaixada = seguro." },
            { fala: "Qual foi o sinal?" },
            { acao: "Para a parte de convivência:" },
            { fala: "Discordar é normal. Eu posso não gostar do time de vocês e ainda assim respeitar. O problema começa quando a gente ataca a pessoa, e não a ideia. E quando isso se repete para humilhar alguém, é cyberbullying." }
          ]
        }
      ],
      onde: {
        pergunta: "Sem dizer nomes: alguém da família de vocês já recebeu a mensagem ‘troquei de número’? O que fez?",
        dica: "Ouça 3 ou 4 alunos e anote no quadro. Sugira que contem em casa o que aprenderam: muitos golpes atingem pais e avós."
      },
      atencao: [
        "Ninguém escreve senha verdadeira no portal nem no computador. Repita várias vezes.",
        "O cartaz Alerta de golpe! é montado no próprio portal (desenhos, cor e 3 dicas) e o portal confere sozinho. Sem nomes ou apelidos de colegas.",
        "Se um aluno relatar cyberbullying ou golpe real: agradeça, não peça detalhes na frente da turma, converse depois e encaminhe à direção."
      ],
      perguntas: [
        { p: "Por que o código que eu mesmo pedi é seguro?", r: "Porque foi você que pediu, e o próprio aplicativo avisa para não compartilhar. Golpe é quando outra pessoa pede o código." },
        { p: "O que é verificação em duas etapas?", r: "Além da senha, a conta pede um código extra enviado ao celular. Quem descobriu só a senha não entra." }
      ],
      curiosidade: "“Phishing” vem de “fishing” (pescar, em inglês): o golpista joga a isca e espera alguém morder."
    },
    m4: {
      datas: "Só no 7º B: 24/11 (as outras turmas do 7º não têm aula sobrando antes da prova)",
      tempo: TEMPO,
      abertura: [
        { fala: "Quando vocês pedem ao aplicativo de mapa o caminho até a casa de alguém, ele mostra a rota mais rápida em um segundo. Como ele sabe? Ele enxerga as ruas como a gente?" },
        { acao: "Ouça 3 ou 4 respostas. Depois desenhe no quadro: três bolinhas (Casa, Padaria, Escola) ligadas por linhas, com 3 e 2 escritos nas linhas, e uma linha direta Casa–Escola com 9." },
        { fala: "Para o computador, o mapa é isso: pontos ligados por linhas. Os pontos são os vértices, as linhas são as arestas e o número em cada linha é o peso. Qual caminho é mais curto: o direto, de 9, ou o que passa pela Padaria?" },
        { acao: "Deixe a turma somar (3 + 2 = 5) e conclua: o mais curto é o de menor SOMA, não o de menos ruas." }
      ],
      extras: [
        {
          titulo: "🎲 Dinâmica: o grafo humano (5 min)", cor: "c-roxo",
          itens: [
            { acao: "Chame 4 alunos para a frente: cada um é um vértice (Ana, Bia, Caio, Davi). Entregue um barbante (ou peça que deem as mãos) para cada amizade: Ana–Bia, Ana–Caio, Ana–Davi, Bia–Caio." },
            { fala: "Cada barbante é uma aresta. Quantas arestas chegam na Ana? Esse número é o grau dela." },
            { acao: "A turma conta: Ana 3, Bia 2, Caio 2, Davi 1." },
            { fala: "A rede social faz isso: o Davi conhece a Ana, a Ana conhece a Bia… então ela sugere a Bia para o Davi: “pessoas que você talvez conheça”." }
          ]
        }
      ],
      onde: {
        pergunta: "Quem já usou mapa, aplicativo de transporte ou recebeu sugestão de amigos numa rede social? Em todos tem um grafo por trás.",
        dica: "Peça a 2 ou 3 alunos que digam por quais lugares passam de casa até a escola: cada lugar é um vértice e cada rua é uma aresta."
      },
      atencao: [
        "O erro mais comum: achar que o caminho com menos ruas é o mais curto. Repita: SOMA os pesos e escolhe a MENOR soma.",
        "No Turbo (entrega Mercado → Farmácia → Hospital), o aluno resolve em duas partes no próprio grafo do portal; não precisa de papel.",
        "Quem terminar cedo: refaça o grafo da escola com o corredor fechado (o Desafio já pede) e explique para o colega."
      ],
      perguntas: [
        { p: "O que é vértice e o que é aresta?", r: "Vértice é o ponto (lugar, pessoa, computador). Aresta é a linha que liga dois vértices (rua, amizade, cabo)." },
        { p: "Como saber o caminho mais curto?", r: "Somar os pesos de cada caminho e escolher a menor soma. Casa → Padaria → Escola = 5 ganha da rua direta (9)." },
        { p: "O que é o grau de um vértice?", r: "Quantas arestas chegam nele. Ana, com 3 amigos, tem grau 3." }
      ],
      curiosidade: "Em 1736, o matemático Leonhard Euler resolveu o problema das 7 pontes da cidade de Königsberg desenhando um grafo: foi o começo da Teoria dos Grafos, que hoje está no GPS e nas redes sociais."
    },
    rv: {
      datas: "7º A, 7º B e 7º D: 01/12 · 7º C: 23/11 (só M1 e M2)",
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
      datas: "Prova: 7º C 07/12 (só M1 e M2) · 7º A, 7º B e 7º D 08/12 · 2ª chamada/recuperação: 7º C 14/12 · 7º A, B e D 15/12",
      tempo: [
        { min: 10, icone: "🎬", t: "Abertura" },
        { min: 45, icone: "🏁", t: "Missões que faltaram e projeto final" },
        { min: 10, icone: "🎤", t: "Apresentações (Turbo)" },
        { min: 10, icone: "🎮", t: "Recreação" }
      ],
      abertura: [
        { acao: "No fim da aula ANTERIOR, avise sobre a avaliação. No dia da prova:" },
        { fala: "A prova é no Wayground e vale até 5 pontos. Leiam cada pergunta com calma; tudo o que cai está nos Resumos da Aula e nas Perguntas rápidas. Quem terminar fica em silêncio até todos acabarem." },
        { acao: "No dia do projeto final:" },
        { fala: "Hoje é o dia de fechar o bimestre. Cada um confere no portal quais missões já têm o ✔. Quem faltou a alguma faz agora o Básico dela. Depois, escrevam o que aprenderam em cada tema." }
      ],
      atencao: [
        "Abra o painel (aba Turmas) e veja quem ainda não tem o ✔ do Básico: chame esses alunos pelo nome primeiro.",
        "Use o Turbo (apresentar no projetor) como fechamento; turma tímida: dois ou três leem do lugar mesmo.",
        "A apresentação é a atividade que VOCÊ confere."
      ]
    }
  });
})();
