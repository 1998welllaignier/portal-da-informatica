/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-8ano-2027-1bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-8ano-2027-1bim", {
 "titulo": "Apostila de Informática – 8º Ano – 1º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai descobrir como o computador <strong>guarda, procura e organiza</strong> listas de dados, e o que é <strong>recursão</strong>. São <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "📝 Missão 1 – Listas: dados em fila",
     "Pensamento Computacional"
    ],
    [
     "➕ Missão 2 – Mexendo na lista: inserir, remover e contar",
     "Pensamento Computacional"
    ],
    [
     "🔎 Missão 3 – Busca sequencial: procurar um por um",
     "Pensamento Computacional"
    ],
    [
     "🎯 Missão 4 – Busca binária: procurar pelo meio",
     "Pensamento Computacional"
    ],
    [
     "🫧 Missão 5 – Ordenar: o método da bolha",
     "Pensamento Computacional"
    ],
    [
     "🪆 Missão 6 – Recursão: o problema dentro do problema",
     "Pensamento Computacional"
    ],
    [
     "🏅 Missão 7 – Extra: Ordenação por seleção",
     "Pensamento Computacional"
    ],
    [
     "❄️ Missão 8 – Extra: Fractais",
     "Pensamento Computacional"
    ],
    [
     "🔁 Revisão para a prova",
     "Todas as missões estudadas"
    ]
   ]
  },
  {
   "t": "p",
   "h": "<strong>Cada missão tem 3 níveis:</strong>"
  },
  {
   "t": "tabela",
   "cab": [
    "Nível",
    "Quem faz",
    "O que vale"
   ],
   "linhas": [
    [
     "🟢 Básico",
     "Todos os alunos",
     "Obrigatório: é o visto da missão e libera os jogos livres no fim da aula"
    ],
    [
     "🟡 Desafio",
     "Quem terminou o Básico",
     "<strong>+0,25 ponto</strong>: aumenta a sua nota do bimestre"
    ],
    [
     "🔴 Turbo",
     "Quem terminou o Desafio",
     "<strong>+0,25 ponto</strong>: aumenta ainda mais a sua nota"
    ]
   ]
  },
  {
   "t": "p",
   "h": "<strong>Algumas atividades usam o editor de blocos:</strong>"
  },
  {
   "t": "tabela",
   "cab": [
    "Parte",
    "Para que serve"
   ],
   "linhas": [
    [
     "🗄️ Gavetas (à esquerda)",
     "Guardam os blocos. Clique numa gaveta e arraste o bloco para a área branca"
    ],
    [
     "🧱 Área branca",
     "Onde você monta o programa, encaixando um bloco embaixo do outro"
    ],
    [
     "▶️ Rodar o programa",
     "O computador executa os blocos, de cima para baixo"
    ],
    [
     "📺 Tela do programa",
     "Mostra o que o programa escreveu. O portal confere se está certo"
    ]
   ]
  },
  {
   "t": "p",
   "h": "🔎 <strong>Todas as respostas estão na apostila:</strong> leia o <strong>💡 Para começar</strong> e o <strong>📖 O que significa?</strong>. Errou? Leia de novo com calma, peça uma <strong>💡 Dica</strong> ou veja a <strong>📘 resolução comentada</strong>. Você consegue fazer tudo sozinho!"
  },
  {
   "t": "p",
   "h": "<strong>Regra de ouro:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor."
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "📝",
   "titulo": "Missão 1 – Listas: dados em fila",
   "objetivo": "entender o que é uma lista, como cada item tem uma posição e para que o computador usa listas.",
   "comecar": [
    {
     "t": "p",
     "h": "O computador guarda muitos dados do mesmo tipo em <strong>listas</strong>: vários itens, um depois do outro, <strong>em ordem</strong>, todos com o mesmo nome. É como a fila da merenda: cada pessoa tem o seu lugar."
    },
    {
     "t": "tabela",
     "cab": [
      "Posição",
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "linhas": [
      [
       "Lista <strong>CHAMADA</strong>",
       "Ana",
       "Bruno",
       "Carla",
       "Davi",
       "Elisa"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Cada item tem uma <strong>posição</strong> (também chamada de <strong>índice</strong>). Aqui, a primeira posição é a <strong>1</strong>: CHAMADA[3] quer dizer “o item da posição 3 da lista CHAMADA”, que é <strong>Carla</strong>."
    },
    {
     "t": "p",
     "h": "O número de itens é o <strong>tamanho</strong> da lista: CHAMADA tem tamanho <strong>5</strong>. A última posição é sempre igual ao tamanho."
    },
    {
     "t": "p",
     "h": "<strong>Por que usar lista?</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Sem lista",
      "Com lista"
     ],
     "linhas": [
      [
       "19 variáveis: aluno1, aluno2, aluno3…",
       "1 lista: CHAMADA, com 19 itens"
      ],
      [
       "Para mostrar todos, 19 comandos",
       "Para mostrar todos, <strong>percorrer</strong> a lista com uma repetição"
      ],
      [
       "Entrou aluno novo? Criar outra variável",
       "Entrou aluno novo? <strong>Inserir</strong> na lista"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Uma lista pode estar <strong>ordenada</strong> (em ordem crescente, decrescente ou alfabética) ou <strong>desordenada</strong>. Nas próximas missões você vai ver que lista ordenada é muito mais fácil de procurar."
    }
   ],
   "termos": [
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "estrutura que guarda vários itens em ordem, com um nome só. Também chamada de <strong>vetor</strong> ou <strong>array</strong> (em inglês, “fileira arrumada”)."
    },
    {
     "termo": "Item",
     "rotulo": "<strong>Item</strong> (ou <strong>elemento</strong>)",
     "def": "cada valor guardado na lista."
    },
    {
     "termo": "Posição",
     "rotulo": "<strong>Posição</strong> (ou <strong>índice</strong>)",
     "def": "o número do lugar do item. Aqui começa no 1."
    },
    {
     "termo": "Tamanho",
     "rotulo": "<strong>Tamanho</strong>",
     "def": "quantos itens a lista tem."
    },
    {
     "termo": "Percorrer",
     "rotulo": "<strong>Percorrer</strong>",
     "def": "passar por todos os itens da lista, do primeiro ao último."
    },
    {
     "termo": "Ordenada",
     "rotulo": "<strong>Ordenada</strong>",
     "def": "lista arrumada em ordem (crescente: do menor para o maior; decrescente: do maior para o menor; alfabética: de A a Z)."
    },
    {
     "termo": "Estrutura de dados",
     "rotulo": "<strong>Estrutura de dados</strong>",
     "def": "jeito de organizar os dados no computador para usar depois; a lista é a mais simples."
    },
    {
     "termo": "Variável",
     "rotulo": "<strong>Variável</strong>",
     "def": "um espaço com nome na memória do computador que guarda um valor, e esse valor pode mudar. Exemplo: a variável <strong>pontos</strong> começa em 0 e aumenta a cada acerto."
    },
    {
     "termo": "Repetição",
     "rotulo": "<strong>Repetição</strong>",
     "def": "fazer o mesmo passo (ou o mesmo grupo de passos) várias vezes, sem precisar escrever tudo de novo. Exemplo: “repita 3 vezes: ande um passo”."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong> (ou <strong>app</strong>, do inglês <em>application</em>)",
     "def": "programa que usamos no celular, no tablet ou no computador para fazer uma tarefa, como o aplicativo de mapas, o WhatsApp ou a calculadora."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>histórico de mensagens</strong> do aplicativo é uma lista: a mais antiga em cima, a mais nova embaixo.",
     "A <strong>classificação do campeonato</strong> é uma lista ordenada pelos pontos.",
     "A <strong>fila de impressão</strong> da escola é uma lista: o primeiro documento enviado é o primeiro impresso."
    ],
    "reflexao": "Pense e escreva: dê um exemplo de lista do seu dia a dia e diga se ela é ordenada ou não."
   },
   "alertas": [],
   "vf": [
    "Uma lista guarda vários itens em ordem, com um nome só.",
    "Na lista CHAMADA, CHAMADA[2] é Ana.",
    "O tamanho é a quantidade de itens da lista.",
    "A lista 3, 8, 12, 20 está em ordem crescente.",
    "Percorrer a lista é olhar só o primeiro item."
   ],
   "resumo": {
    "texto": "A **lista** guarda vários **itens** em ordem, com um nome só. Cada item tem uma **posição** (índice), que aqui começa no 1: LISTA[3] é o item da posição 3. O **tamanho** é quantos itens a lista tem. **Percorrer** é passar por todos, do primeiro ao último. A lista pode ser **ordenada** (crescente, decrescente, alfabética) ou não.",
    "chaves": [
     "lista",
     "item",
     "posição",
     "índice",
     "tamanho",
     "percorrer",
     "ordenada",
     "estrutura de dados"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "➕",
   "titulo": "Missão 2 – Mexendo na lista: inserir, remover e contar",
   "objetivo": "inserir e remover itens de uma lista, entender o que acontece com as posições e contar itens com uma repetição.",
   "comecar": [
    {
     "t": "p",
     "h": "Uma lista muda o tempo todo: entra aluno novo, sai produto do carrinho. As três operações básicas são:"
    },
    {
     "t": "tabela",
     "cab": [
      "Operação",
      "O que faz",
      "O que acontece com as posições"
     ],
     "linhas": [
      [
       "➕ Inserir no fim",
       "Coloca um item novo depois do último",
       "Ninguém muda de lugar; o tamanho aumenta 1"
      ],
      [
       "➕ Inserir numa posição",
       "Coloca o item no meio",
       "Quem estava dali para trás <strong>anda uma posição para trás</strong>"
      ],
      [
       "➖ Remover",
       "Tira um item",
       "Quem estava atrás <strong>anda uma posição para a frente</strong>; o tamanho diminui 1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> FILA = Ana, Bia, Caio, Duda."
    },
    {
     "t": "tabela",
     "cab": [
      "Ação",
      "Lista depois",
      "Tamanho"
     ],
     "linhas": [
      [
       "Inserir Enzo no fim",
       "Ana, Bia, Caio, Duda, <strong>Enzo</strong>",
       "5"
      ],
      [
       "Remover Bia",
       "Ana, Caio, Duda, Enzo",
       "4 (Caio passou da posição 3 para a 2)"
      ],
      [
       "Inserir Gabi na posição 1",
       "<strong>Gabi</strong>, Ana, Caio, Duda, Enzo",
       "5 (todo mundo andou uma posição para trás)"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Contar</strong> é percorrer a lista com uma <strong>variável contadora</strong>: ela começa em <strong>0</strong> e soma <strong>1</strong> cada vez que o item passa no teste. Exemplo: quantas notas são maiores ou iguais a 5 na lista 8, 4, 6, 3, 9? Contador: 0 → 1 (8) → 1 → 2 (6) → 2 → 3 (9). Resposta: <strong>3</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Inserir",
     "rotulo": "<strong>Inserir</strong>",
     "def": "colocar um item novo na lista."
    },
    {
     "termo": "Remover",
     "rotulo": "<strong>Remover</strong>",
     "def": "tirar um item da lista."
    },
    {
     "termo": "Deslocar",
     "rotulo": "<strong>Deslocar</strong>",
     "def": "os itens andarem uma posição (para a frente quando alguém sai; para trás quando alguém entra antes deles)."
    },
    {
     "termo": "Contador",
     "rotulo": "<strong>Contador</strong>",
     "def": "variável que começa em 0 e soma 1 a cada vez que algo acontece."
    },
    {
     "termo": "Operação",
     "rotulo": "<strong>Operação</strong>",
     "def": "cada ação que fazemos na lista (inserir, remover, contar, procurar)."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>carrinho da loja on-line</strong>, adicionar é inserir e o botão 🗑️ é remover; o número no ícone é o tamanho.",
     "Na <strong>playlist</strong>, “tocar a seguir” insere a música numa posição do meio.",
     "Na <strong>lista de presença</strong>, contar quantos vieram é usar um contador."
    ],
    "reflexao": "Pense e escreva: num aplicativo que você usa, onde aparece inserir ou remover itens de uma lista?"
   },
   "alertas": [],
   "vf": [
    "Inserir um item no fim da lista aumenta o tamanho em 1.",
    "Quando um item é removido, os itens de trás andam uma posição para a frente.",
    "Inserir um item na posição 1 não muda a posição dos outros itens.",
    "Um contador começa em 0 e soma 1 a cada vez que conta algo.",
    "Remover um item aumenta o tamanho da lista."
   ],
   "resumo": {
    "texto": "As operações básicas da lista são **inserir** (no fim ou numa posição) e **remover**. Ao remover, os itens de trás **andam uma posição para a frente** e o tamanho diminui. Ao inserir no meio, os itens dali para trás andam uma posição para trás e o tamanho aumenta. Para **contar**, percorremos a lista com um **contador** que começa em 0 e soma 1 a cada item que passa no teste.",
    "chaves": [
     "inserir",
     "remover",
     "deslocar",
     "contador",
     "operação"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🔎",
   "titulo": "Missão 3 – Busca sequencial: procurar um por um",
   "objetivo": "procurar um item numa lista olhando um por um, contar quantas comparações são feitas e entender quando esse método é lento.",
   "comecar": [
    {
     "t": "p",
     "h": "Você perdeu a chave e tem 10 gavetas. O jeito mais simples de achar: abrir a <strong>1ª</strong>, depois a <strong>2ª</strong>, a <strong>3ª</strong>… até encontrar. Isso é a <strong>busca sequencial</strong> (ou <strong>busca linear</strong>)."
    },
    {
     "t": "p",
     "h": "<strong>Algoritmo:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1",
       "Comece na posição 1"
      ],
      [
       "2",
       "Compare o item com o que você procura"
      ],
      [
       "3",
       "É igual? <strong>Achou</strong>: diga a posição e pare"
      ],
      [
       "4",
       "Não é? Vá para a próxima posição e volte ao passo 2"
      ],
      [
       "5",
       "Acabou a lista sem achar? O item <strong>não está</strong> na lista"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> procurar o <strong>9</strong> em 5, 8, 2, 9, 4."
    },
    {
     "t": "tabela",
     "cab": [
      "Comparação",
      "Posição",
      "Item",
      "É o 9?"
     ],
     "linhas": [
      [
       "1ª",
       "1",
       "5",
       "não"
      ],
      [
       "2ª",
       "2",
       "8",
       "não"
      ],
      [
       "3ª",
       "3",
       "2",
       "não"
      ],
      [
       "4ª",
       "4",
       "9",
       "<strong>sim! posição 4</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Cada vez que olhamos um item é uma <strong>comparação</strong>. Quanto mais comparações, mais lenta a busca:"
    },
    {
     "t": "tabela",
     "cab": [
      "Situação",
      "Comparações numa lista de 1.000 itens"
     ],
     "linhas": [
      [
       "Melhor caso (o item é o 1º)",
       "1"
      ],
      [
       "Pior caso (é o último ou não está)",
       "1.000"
      ]
     ]
    },
    {
     "t": "p",
     "h": "A busca sequencial funciona em <strong>qualquer lista</strong>, ordenada ou não. Mas em listas grandes ela pode ficar <strong>lenta</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Busca",
     "rotulo": "<strong>Busca</strong> (ou pesquisa)",
     "def": "procurar um item numa lista."
    },
    {
     "termo": "Busca sequencial",
     "rotulo": "<strong>Busca sequencial</strong> (ou <strong>linear</strong>)",
     "def": "olhar os itens um por um, em sequência, do primeiro ao último."
    },
    {
     "termo": "Comparação",
     "rotulo": "<strong>Comparação</strong>",
     "def": "verificar se o item é igual ao procurado. Cada olhada é uma comparação."
    },
    {
     "termo": "Melhor caso",
     "rotulo": "<strong>Melhor caso</strong>",
     "def": "a situação em que o algoritmo termina mais rápido (o item é o primeiro)."
    },
    {
     "termo": "Pior caso",
     "rotulo": "<strong>Pior caso</strong>",
     "def": "a situação em que o algoritmo demora mais (o item é o último ou não está na lista)."
    },
    {
     "termo": "Eficiência",
     "rotulo": "<strong>Eficiência</strong>",
     "def": "quanto trabalho (quantas comparações) o algoritmo precisa para resolver o problema."
    },
    {
     "termo": "Navegador",
     "rotulo": "<strong>Navegador</strong>",
     "def": "programa usado para abrir os sites da internet, como o Google Chrome, o Microsoft Edge e o Firefox."
    }
   ],
   "ondeUso": {
    "itens": [
     "Procurar uma foto <strong>rolando a galeria</strong> do celular, uma por uma, é busca sequencial.",
     "Procurar o seu nome numa <strong>lista de aprovados fora de ordem</strong> também.",
     "O <strong>Ctrl + F</strong> do navegador procura a palavra olhando o texto do começo ao fim."
    ],
    "reflexao": "Pense e escreva: conte uma vez em que você procurou algo olhando um por um. Demorou? Por quê?"
   },
   "alertas": [],
   "vf": [
    "Na busca sequencial, olhamos os itens um por um, do primeiro ao último.",
    "A busca sequencial só funciona em listas ordenadas.",
    "Procurar o 9 em 5, 8, 2, 9, 4 precisa de 4 comparações.",
    "O pior caso é quando o item procurado é o primeiro da lista.",
    "Numa lista de 1.000 itens, o pior caso da busca sequencial tem 1.000 comparações."
   ],
   "resumo": {
    "texto": "Na **busca sequencial** (linear) olhamos os itens **um por um**, do primeiro ao último, até achar ou a lista acabar. Cada olhada é uma **comparação**. **Melhor caso**: o item é o primeiro (1 comparação). **Pior caso**: é o último ou não está (tantas comparações quanto o tamanho). Funciona em qualquer lista, mas é **lenta** em listas grandes.",
    "chaves": [
     "busca",
     "busca sequencial",
     "comparação",
     "melhor caso",
     "pior caso",
     "eficiência"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🎯",
   "titulo": "Missão 4 – Busca binária: procurar pelo meio",
   "objetivo": "procurar um item numa lista ordenada sempre pelo meio, descartando metade a cada comparação, e comparar com a busca sequencial.",
   "comecar": [
    {
     "t": "p",
     "h": "No jogo <strong>“adivinhe o número de 1 a 100”</strong>, ninguém chuta 1, 2, 3… O esperto chuta <strong>50</strong>. Se a resposta é “maior”, nem pensa mais de 1 a 50: chuta <strong>75</strong>, e assim por diante. Isso é a <strong>busca binária</strong>: procurar <strong>sempre pelo meio</strong> e jogar fora <strong>metade</strong> a cada vez."
    },
    {
     "t": "p",
     "h": "<strong>Regra de ouro:</strong> a busca binária só funciona se a lista estiver <strong>ordenada</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Algoritmo:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1",
       "Olhe o item do <strong>meio</strong> da parte que sobrou"
      ],
      [
       "2",
       "É o procurado? <strong>Achou!</strong>"
      ],
      [
       "3",
       "O procurado é <strong>maior</strong>? Jogue fora a metade da <strong>esquerda</strong>"
      ],
      [
       "4",
       "O procurado é <strong>menor</strong>? Jogue fora a metade da <strong>direita</strong>"
      ],
      [
       "5",
       "Repita com a parte que sobrou"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> procurar o <strong>31</strong> em 3, 7, 12, 18, 25, 31, 40, 52 (8 itens)."
    },
    {
     "t": "tabela",
     "cab": [
      "Tentativa",
      "Parte que sobrou",
      "Meio",
      "Comparação"
     ],
     "linhas": [
      [
       "1ª",
       "posições 1 a 8",
       "posição 4 → <strong>18</strong>",
       "31 é maior → sobra 5 a 8"
      ],
      [
       "2ª",
       "posições 5 a 8",
       "posição 6 → <strong>31</strong>",
       "<strong>achou!</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Só <strong>2</strong> comparações. A busca sequencial precisaria de <strong>6</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Por que é tão rápida?</strong> Cada comparação corta a lista pela <strong>metade</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Itens na lista",
      "Comparações no pior caso (binária)",
      "Comparações no pior caso (sequencial)"
     ],
     "linhas": [
      [
       "8",
       "4",
       "8"
      ],
      [
       "100",
       "7",
       "100"
      ],
      [
       "1.000",
       "10",
       "1.000"
      ],
      [
       "1.000.000",
       "20",
       "1.000.000"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Busca binária",
     "rotulo": "<strong>Busca binária</strong>",
     "def": "procurar sempre pelo meio de uma lista ordenada, jogando fora metade a cada comparação. <strong>Binária</strong> = em duas partes."
    },
    {
     "termo": "Meio",
     "rotulo": "<strong>Meio</strong>",
     "def": "o item do centro da parte que sobrou. Com número par de itens, usamos o do meio da esquerda."
    },
    {
     "termo": "Descartar",
     "rotulo": "<strong>Descartar</strong>",
     "def": "jogar fora a parte em que o item com certeza não está."
    },
    {
     "termo": "Dividir para conquistar",
     "rotulo": "<strong>Dividir para conquistar</strong>",
     "def": "estratégia de resolver um problema grande cortando-o em pedaços menores, como a busca binária faz."
    }
   ],
   "ondeUso": {
    "itens": [
     "Procurar uma palavra no <strong>dicionário</strong> de papel: abrimos no meio e vamos para a frente ou para trás.",
     "Os <strong>contatos do celular</strong>, em ordem alfabética, são achados pelo aplicativo com busca binária.",
     "Os sites de <strong>busca</strong> e os <strong>bancos de dados</strong> usam listas ordenadas para responder em milésimos de segundo."
    ],
    "reflexao": "Pense e escreva: por que a lista precisa estar ordenada para a busca binária funcionar?"
   },
   "alertas": [],
   "vf": [
    "A busca binária funciona em qualquer lista, mesmo fora de ordem.",
    "Na busca binária, começamos olhando o item do meio.",
    "A cada comparação, a busca binária joga fora metade da lista.",
    "Para achar um número de 1 a 100, a busca binária precisa de no máximo 7 comparações.",
    "Numa lista grande, a busca sequencial é mais rápida que a binária."
   ],
   "resumo": {
    "texto": "A **busca binária** procura sempre pelo **meio** de uma lista **ordenada**: se o procurado é maior, descarta a metade da esquerda; se é menor, a da direita; e repete. Cada comparação corta a lista pela **metade**: 100 itens → no máximo 7 comparações; 1.000 → 10. Muito mais rápida que a sequencial em listas grandes, mas **só funciona com a lista em ordem**.",
    "chaves": [
     "busca binária",
     "meio",
     "descartar",
     "lista ordenada",
     "dividir para conquistar"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "🫧",
   "titulo": "Missão 5 – Ordenar: o método da bolha",
   "objetivo": "ordenar uma lista comparando e trocando vizinhos, passada por passada, e contar as trocas.",
   "comecar": [
    {
     "t": "p",
     "h": "Para usar a busca binária a lista precisa estar <strong>ordenada</strong>. Mas como o computador ordena? Um dos jeitos mais simples é o <strong>método da bolha</strong> (<em>bubble sort</em>):"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1",
       "Compare os dois <strong>primeiros vizinhos</strong>"
      ],
      [
       "2",
       "O da esquerda é <strong>maior</strong>? <strong>Troque</strong> os dois de lugar. Não é? <strong>Mantenha</strong>"
      ],
      [
       "3",
       "Ande uma casa e compare o próximo par de vizinhos"
      ],
      [
       "4",
       "Chegou ao fim? Essa foi uma <strong>passada</strong>: o <strong>maior</strong> número já está no <strong>final</strong>"
      ],
      [
       "5",
       "Faça outra passada, até uma passada inteira <strong>sem nenhuma troca</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> ordenar 6, 3, 9, 1 (crescente)."
    },
    {
     "t": "tabela",
     "cab": [
      "Passada",
      "Comparações e trocas",
      "Lista no fim da passada"
     ],
     "linhas": [
      [
       "1ª",
       "6&gt;3 troca · 6&lt;9 mantém · 9&gt;1 troca",
       "3, 6, 1, <strong>9</strong>"
      ],
      [
       "2ª",
       "3&lt;6 mantém · 6&gt;1 troca",
       "3, 1, <strong>6, 9</strong>"
      ],
      [
       "3ª",
       "3&gt;1 troca",
       "<strong>1, 3, 6, 9</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "A cada passada, o maior número que ainda falta <strong>“sobe” para o final</strong>, como uma <strong>bolha</strong> subindo na água. Por isso o nome."
    },
    {
     "t": "p",
     "h": "Uma lista <strong>já ordenada</strong> (1, 2, 3, 4) termina em <strong>1 passada sem nenhuma troca</strong>. A lista <strong>ao contrário</strong> (4, 3, 2, 1) é a que dá <strong>mais trabalho</strong>: todo par de vizinhos troca."
    },
    {
     "t": "p",
     "h": "O método da bolha é fácil de entender, mas compara vizinhos muitas vezes, passada por passada, por isso fica lento em listas grandes; existem métodos que trocam menos (veja a Missão 7)."
    }
   ],
   "termos": [
    {
     "termo": "Ordenar",
     "rotulo": "<strong>Ordenar</strong>",
     "def": "colocar a lista em ordem (crescente, decrescente ou alfabética)."
    },
    {
     "termo": "Método da bolha",
     "rotulo": "<strong>Método da bolha</strong> (<em>bubble sort</em>, em inglês “ordenação por bolha”)",
     "def": "ordena comparando vizinhos e trocando os que estão fora de ordem, passada por passada."
    },
    {
     "termo": "Vizinhos",
     "rotulo": "<strong>Vizinhos</strong>",
     "def": "dois itens que estão um ao lado do outro na lista."
    },
    {
     "termo": "Troca",
     "rotulo": "<strong>Troca</strong>",
     "def": "mudar dois itens de lugar."
    },
    {
     "termo": "Passada",
     "rotulo": "<strong>Passada</strong>",
     "def": "uma volta completa comparando os vizinhos do começo ao fim da lista."
    },
    {
     "termo": "Crescente",
     "rotulo": "<strong>Crescente</strong>",
     "def": "do menor para o maior (1, 3, 6, 9). <strong>Decrescente</strong>: do maior para o menor (9, 6, 3, 1)."
    }
   ],
   "ondeUso": {
    "itens": [
     "Organizar as <strong>cartas na mão</strong> no jogo de baralho, trocando de lugar as que estão fora de ordem.",
     "A <strong>fila por altura</strong> na foto da turma: troca quem está ao lado e é mais alto.",
     "Planilhas e aplicativos <strong>ordenam</strong> listas (de nomes, preços, notas) com um clique."
    ],
    "reflexao": "Pense e escreva: o que você já organizou em ordem (crescente, decrescente ou alfabética)? Como fez?"
   },
   "alertas": [],
   "vf": [
    "O método da bolha compara itens vizinhos.",
    "Para ordem crescente, trocamos quando o da esquerda é menor que o da direita.",
    "No fim da 1ª passada, o maior número está no final da lista.",
    "O método termina quando uma passada inteira não faz nenhuma troca.",
    "9, 6, 3, 1 está em ordem crescente."
   ],
   "resumo": {
    "texto": "**Ordenar** é pôr a lista em ordem. O **método da bolha** compara **vizinhos** e **troca** os que estão fora de ordem (para crescente: troca quando o da esquerda é maior). Uma volta do começo ao fim é uma **passada**; a cada passada, o maior que falta “sobe” para o final, como uma bolha. Termina quando uma passada não faz nenhuma troca.",
    "chaves": [
     "ordenar",
     "método da bolha",
     "vizinhos",
     "troca",
     "passada",
     "crescente",
     "decrescente"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🪆",
   "titulo": "Missão 6 – Recursão: o problema dentro do problema",
   "objetivo": "reconhecer a recursão como um problema resolvido usando uma versão menor dele mesmo, sempre com uma condição de parada (caso base).",
   "comecar": [
    {
     "t": "p",
     "h": "Abra uma <strong>matrioska</strong> (a boneca russa): dentro dela tem uma boneca <strong>igual, só que menor</strong>. Dentro dessa, outra menor… até a <strong>última</strong>, que não abre. Isso é <strong>recursão</strong>: um problema que se resolve com uma <strong>versão menor dele mesmo</strong>."
    },
    {
     "t": "p",
     "h": "Toda recursão tem <strong>duas partes</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Parte",
      "O que é",
      "Na matrioska"
     ],
     "linhas": [
      [
       "🔁 Passo recursivo",
       "Resolver usando o mesmo problema, menor",
       "Abrir a boneca e repetir com a de dentro"
      ],
      [
       "🛑 Caso base (condição de parada)",
       "O caso pequeno que se resolve direto, sem repetir",
       "A bonequinha que não abre: acabou"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Sem caso base, a recursão nunca para</strong>, como dois espelhos frente a frente, com imagens dentro de imagens para sempre."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: a fila do cinema.</strong> Você quer saber em que posição está, mas a fila é enorme. Pergunta para quem está na frente: “qual é a sua posição?”. Essa pessoa faz a <strong>mesma pergunta</strong> para a da frente dela… até o <strong>primeiro da fila</strong>, que responde “sou o 1” (<strong>caso base</strong>). Cada um soma 1 e devolve a resposta para trás."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: contagem regressiva recursiva.</strong> Para contar a partir de <strong>n</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Se…",
      "Então…"
     ],
     "linhas": [
      [
       "n = 0 (caso base)",
       "mostrar “Fogo!” e parar"
      ],
      [
       "senão (passo recursivo)",
       "mostrar n e <strong>contar a partir de n − 1</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Contar a partir de 3 → mostra 3, conta a partir de 2 → mostra 2, conta a partir de 1 → mostra 1, conta a partir de 0 → “Fogo!”."
    },
    {
     "t": "p",
     "h": "No editor, um <strong>bloco próprio</strong> (gaveta 🧩 Meus blocos) que <strong>chama a si mesmo</strong> é recursivo."
    }
   ],
   "termos": [
    {
     "termo": "Recursão",
     "rotulo": "<strong>Recursão</strong>",
     "def": "resolver um problema usando uma versão menor do mesmo problema. Em programação, é um bloco (função) que chama a si mesmo."
    },
    {
     "termo": "Recursivo",
     "rotulo": "<strong>Recursivo</strong>",
     "def": "aquilo que usa recursão."
    },
    {
     "termo": "Caso base",
     "rotulo": "<strong>Caso base</strong> (condição de parada)",
     "def": "o caso mais simples, resolvido direto, que faz a recursão parar."
    },
    {
     "termo": "Passo recursivo",
     "rotulo": "<strong>Passo recursivo</strong>",
     "def": "a parte que chama o mesmo problema, um pouco menor, aproximando do caso base."
    },
    {
     "termo": "Função",
     "rotulo": "<strong>Função</strong> (bloco próprio)",
     "def": "conjunto de blocos com nome que pode ser chamado, inclusive por ele mesmo."
    },
    {
     "termo": "Pasta",
     "rotulo": "<strong>Pasta</strong>",
     "def": "lugar do computador onde guardamos e organizamos arquivos, como uma gaveta. Uma pasta pode ter outras pastas dentro dela."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>pastas do computador</strong>: uma pasta tem pastas dentro, que têm pastas dentro… Para contar todos os arquivos, o computador usa recursão.",
     "A <strong>matrioska</strong> e as <strong>imagens de espelhos</strong> frente a frente.",
     "Os <strong>fractais</strong> (Missão 8), como a samambaia, cujo galho é uma samambaia menor."
    ],
    "reflexao": "Pense e escreva: dê um exemplo de “coisa dentro de coisa igual” que você conhece. Qual seria o caso base?"
   },
   "alertas": [],
   "vf": [
    "Recursão é resolver um problema usando uma versão menor dele mesmo.",
    "Toda recursão precisa de um caso base para parar.",
    "Na matrioska, o caso base é a primeira boneca, a maior.",
    "Sem caso base, a recursão pode nunca parar.",
    "Pastas dentro de pastas são um exemplo de estrutura recursiva."
   ],
   "resumo": {
    "texto": "**Recursão** é resolver um problema usando uma **versão menor dele mesmo**; em programação, um bloco (função) que **chama a si mesmo**. Toda recursão tem o **passo recursivo** (chamar o problema menor) e o **caso base** (o caso simples que faz parar). Sem caso base, não para nunca. Exemplos: matrioska, a fila do cinema, pastas dentro de pastas, contagem regressiva.",
    "chaves": [
     "recursão",
     "recursivo",
     "caso base",
     "passo recursivo",
     "função"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🏅",
   "titulo": "Missão 7 – Extra: Ordenação por seleção",
   "objetivo": "ordenar uma lista escolhendo o menor item a cada rodada e comparar com o método da bolha.",
   "comecar": [
    {
     "t": "p",
     "h": "Outro jeito de ordenar é a <strong>ordenação por seleção</strong> (<em>selection sort</em>). A ideia é como escolher os times no recreio: <strong>escolhe o melhor, depois o melhor do que sobrou…</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1",
       "Procure o <strong>menor</strong> item de toda a lista"
      ],
      [
       "2",
       "<strong>Troque</strong> ele com o item da <strong>1ª posição</strong>: agora a 1ª posição está pronta"
      ],
      [
       "3",
       "Procure o menor <strong>do que sobrou</strong> (da 2ª posição em diante) e troque com a 2ª"
      ],
      [
       "4",
       "Repita até a última posição"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> 7, 2, 9, 4."
    },
    {
     "t": "tabela",
     "cab": [
      "Rodada",
      "Menor do que sobrou",
      "Troca",
      "Lista"
     ],
     "linhas": [
      [
       "1ª",
       "2",
       "2 ↔ 7",
       "<strong>2</strong>, 7, 9, 4"
      ],
      [
       "2ª",
       "4",
       "4 ↔ 7",
       "<strong>2, 4</strong>, 9, 7"
      ],
      [
       "3ª",
       "7",
       "7 ↔ 9",
       "<strong>2, 4, 7</strong>, 9"
      ],
      [
       "Fim",
       "—",
       "—",
       "<strong>2, 4, 7, 9</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Bolha × seleção:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "",
      "🫧 Bolha",
      "🏅 Seleção"
     ],
     "linhas": [
      [
       "O que compara",
       "Vizinhos",
       "O que sobrou, procurando o menor"
      ],
      [
       "Onde o item vai",
       "O maior sobe para o fim",
       "O menor vai para o começo"
      ],
      [
       "Trocas",
       "Muitas, uma a cada par fora de ordem",
       "Poucas: no máximo uma por rodada"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Ordenação por seleção",
     "rotulo": "<strong>Ordenação por seleção</strong>",
     "def": "método que, a cada rodada, seleciona (escolhe) o menor item do que sobrou e coloca na próxima posição."
    },
    {
     "termo": "Rodada",
     "rotulo": "<strong>Rodada</strong>",
     "def": "cada vez que escolhemos o menor e fazemos a troca."
    },
    {
     "termo": "Mínimo",
     "rotulo": "<strong>Mínimo</strong>",
     "def": "o menor valor de um grupo de números."
    },
    {
     "termo": "Parte ordenada",
     "rotulo": "<strong>Parte ordenada</strong>",
     "def": "o começo da lista, que já está pronto e não muda mais."
    }
   ],
   "ondeUso": {
    "itens": [
     "<strong>Escolher os times</strong> no recreio: o capitão escolhe o melhor, depois o melhor do que sobrou.",
     "Arrumar as <strong>cartas na mão</strong> puxando sempre a menor para a esquerda.",
     "O <strong>pódio</strong>: primeiro decide-se o 1º lugar, depois o 2º entre os que sobraram."
    ],
    "reflexao": "Pense e escreva: qual dos dois métodos (bolha ou seleção) você achou mais fácil? Por quê?"
   },
   "alertas": [],
   "vf": [
    "Na ordenação por seleção, procuramos o menor item do que sobrou a cada rodada.",
    "Na 1ª rodada, o menor item vai para a última posição.",
    "A ordenação por seleção faz no máximo uma troca por rodada.",
    "No método da bolha, comparamos sempre os vizinhos.",
    "Depois da 1ª rodada da seleção, a 1ª posição já está pronta."
   ],
   "resumo": {
    "texto": "Na **ordenação por seleção**, a cada **rodada** procuramos o **menor** item do que sobrou (o **mínimo**) e trocamos com a próxima posição; o começo da lista vai ficando pronto. Ela faz poucas trocas (no máximo uma por rodada). No **método da bolha**, comparamos **vizinhos** e o maior sobe para o fim.",
    "chaves": [
     "ordenação por seleção",
     "rodada",
     "mínimo",
     "parte ordenada",
     "bolha"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "❄️",
   "titulo": "Missão 8 – Extra: Fractais",
   "objetivo": "reconhecer fractais como figuras que repetem a mesma forma em tamanhos cada vez menores, e calcular quantas peças aparecem a cada nível.",
   "comecar": [
    {
     "t": "p",
     "h": "Olhe um <strong>galho de samambaia</strong>: cada folhinha parece uma samambaia inteira, só que menor. Um <strong>brócolis</strong> também: cada pedacinho parece um brócolis pequeno. Essas formas são <strong>fractais</strong>: figuras em que <strong>uma parte é parecida com o todo</strong>."
    },
    {
     "t": "p",
     "h": "Os fractais são feitos com <strong>recursão</strong>: a mesma regra repetida dentro de si mesma, em tamanhos menores."
    },
    {
     "t": "p",
     "h": "<strong>O triângulo de Sierpinski</strong> (criado pelo matemático polonês Wacław Sierpiński):"
    },
    {
     "t": "tabela",
     "cab": [
      "Nível",
      "Regra",
      "Triângulos pintados"
     ],
     "linhas": [
      [
       "0",
       "Um triângulo",
       "1"
      ],
      [
       "1",
       "Cada triângulo vira 3 menores (tira o do meio)",
       "3"
      ],
      [
       "2",
       "Cada um dos 3 vira 3 menores",
       "9"
      ],
      [
       "3",
       "De novo",
       "27"
      ],
      [
       "4",
       "De novo",
       "81"
      ]
     ]
    },
    {
     "t": "p",
     "h": "A cada nível, o número <strong>multiplica por 3</strong>. Num desenho de verdade, paramos num nível (o <strong>caso base</strong>), porque a tela não consegue mostrar triângulos menores que um ponto."
    },
    {
     "t": "p",
     "h": "<strong>A árvore fractal:</strong> um tronco se divide em <strong>2 galhos</strong>; cada galho se divide em 2 galhos menores…"
    },
    {
     "t": "tabela",
     "cab": [
      "Nível",
      "Galhos novos"
     ],
     "linhas": [
      [
       "1",
       "2"
      ],
      [
       "2",
       "4"
      ],
      [
       "3",
       "8"
      ],
      [
       "4",
       "16"
      ]
     ]
    },
    {
     "t": "p",
     "h": "A cada nível, o número <strong>dobra</strong> (multiplica por 2)."
    }
   ],
   "termos": [
    {
     "termo": "Fractal",
     "rotulo": "<strong>Fractal</strong>",
     "def": "figura em que cada parte, ampliada, se parece com a figura inteira."
    },
    {
     "termo": "Autossemelhança",
     "rotulo": "<strong>Autossemelhança</strong>",
     "def": "a qualidade de uma parte ser parecida com o todo."
    },
    {
     "termo": "Nível",
     "rotulo": "<strong>Nível</strong> (ou iteração)",
     "def": "cada vez que a regra é aplicada de novo, em tamanho menor."
    },
    {
     "termo": "Triângulo de Sierpinski",
     "rotulo": "<strong>Triângulo de Sierpinski</strong>",
     "def": "fractal feito de triângulos, em que cada triângulo vira 3 menores a cada nível."
    },
    {
     "termo": "Multiplicar a cada nível",
     "rotulo": "<strong>Multiplicar a cada nível</strong>",
     "def": "o número de peças cresce sempre pela mesma conta (×2, ×3…)."
    }
   ],
   "ondeUso": {
    "itens": [
     "Na <strong>natureza</strong>: samambaia, brócolis romanesco, raios, flocos de neve, rios vistos de cima.",
     "Nos <strong>jogos e filmes</strong>, montanhas e árvores são criadas por computador com fractais.",
     "As <strong>antenas de celular</strong> podem ter forma de fractal para captar sinais de vários tamanhos."
    ],
    "reflexao": "Pense e escreva: que forma da natureza da nossa região parece um fractal?"
   },
   "alertas": [],
   "vf": [
    "Num fractal, uma parte é parecida com a figura inteira.",
    "No triângulo de Sierpinski, cada triângulo vira 3 menores a cada nível.",
    "No nível 2 do triângulo de Sierpinski há 6 triângulos pintados.",
    "Os fractais são feitos com a ideia de recursão.",
    "Uma bola lisa é um exemplo de fractal."
   ],
   "resumo": {
    "texto": "**Fractal** é uma figura em que cada parte se parece com o todo (**autossemelhança**). Eles nascem da **recursão**: a mesma regra repetida em tamanhos menores, **nível** após nível, até um caso base. No **triângulo de Sierpinski**, cada triângulo vira 3 (1, 3, 9, 27, 81: ×3 por nível); na **árvore fractal**, cada galho vira 2 (×2). Estão na natureza (samambaia, brócolis, raios) e nos jogos.",
    "chaves": [
     "fractal",
     "autossemelhança",
     "nível",
     "triângulo de Sierpinski",
     "recursão"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "rv",
   "icone": "🔁",
   "titulo": "Revisão para a prova",
   "objetivo": "revisar, fazendo atividades, todas as missões que a sua turma estudou, para chegar preparado à prova.",
   "comecar": [
    {
     "t": "p",
     "h": "Hoje é dia de <strong>revisão</strong>, e a aula inteira tem atividade, como numa missão. O portal mostra <strong>só as missões que a sua turma estudou</strong>: é exatamente isso que cai na prova."
    },
    {
     "t": "p",
     "h": "Em cada missão, faça assim:"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "📚 1. Relembre",
       "Leia o resumo da missão e os termos principais"
      ],
      [
       "🟢 2. Pratique",
       "Faça as atividades daquela missão (correção automática)"
      ],
      [
       "🔁 3. Errou?",
       "Leia a explicação, volte ao 📚 Relembre e tente de novo"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Terminou o Básico de todas as missões? Siga para o 🟡 <strong>Desafio</strong> e o 🔴 <strong>Turbo</strong>: eles misturam as missões, como na prova."
    },
    {
     "t": "p",
     "h": "<strong>Dica de prova:</strong> tudo o que cai está nos <strong>Resumos da Aula</strong> e nas <strong>Perguntas rápidas</strong> de cada missão. Você pode abrir a missão no portal para reler quando quiser."
    }
   ],
   "termos": [],
   "ondeUso": {
    "itens": [],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [],
   "resumo": null,
   "autoavaliacao": []
  },
  {
   "id": "rc",
   "icone": "📝",
   "titulo": "Atividade de recuperação",
   "objetivo": "mostrar o que você aprendeu nas missões que a sua turma estudou e recuperar a nota do bimestre.",
   "comecar": [
    {
     "t": "p",
     "h": "Esta atividade só aparece para quem o professor <strong>liberou</strong>. Ela vale <strong>nota de 0 a 10</strong>, que entra sozinha no boletim, no lugar da recuperação (quando for maior que a sua nota)."
    },
    {
     "t": "tabela",
     "cab": [
      "Como funciona",
      "O que quer dizer"
     ],
     "linhas": [
      [
       "📚 Só as missões estudadas",
       "O portal mostra só as missões que a sua turma estudou"
      ],
      [
       "🎯 Vale nota",
       "Atividade certa de primeira vale o ponto inteiro; cada erro tira um pouco"
      ],
      [
       "🚫 Sem dica",
       "Aqui não tem 💡 Dica nem 📘 resolução comentada: é a hora de mostrar o que você sabe"
      ],
      [
       "🔎 Pode consultar",
       "Antes de responder, abra a missão e releia o 💡 Para começar e o 🧠 Resumo da Aula"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Dica de ouro:</strong> leia com calma e só clique em <strong>Verificar</strong> quando tiver certeza."
    }
   ],
   "termos": [],
   "ondeUso": {
    "itens": [],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [],
   "resumo": null,
   "autoavaliacao": []
  }
 ]
});
