/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-8ano-2027-1bim-trilha.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-8ano-2027-1bim-trilha", {
 "titulo": "Apostila de Informática – 8º Ano – 1º Bimestre de 2027 · Trilha Passo a Passo",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai aprender como o computador <strong>guarda, procura e arruma</strong> listas. São <strong>6 missões</strong>. Se sobrar aula, tem <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. São as mesmas missões da sua turma."
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
   "h": "<strong>Como funciona a Trilha Passo a Passo:</strong>"
  },
  {
   "t": "lista",
   "ord": false,
   "itens": [
    {
     "nivel": 0,
     "h": "👣 Faça <strong>um passo de cada vez</strong>."
    },
    {
     "nivel": 0,
     "h": "🖱️ Quase tudo é feito <strong>clicando</strong> nas cartas e nos botões."
    },
    {
     "nivel": 0,
     "h": "✅ Clique em <strong>Verificar</strong> quando terminar cada atividade."
    },
    {
     "nivel": 0,
     "h": "🔊 Quer ouvir o texto? Clique em <strong>Ouvir</strong>."
    },
    {
     "nivel": 0,
     "h": "⏸️ Cansou? Pode parar e descansar um pouco. Tudo fica salvo."
    },
    {
     "nivel": 0,
     "h": "🎉 No fim do Básico aparece a faixa <strong>✅ Básico concluído</strong>. Tudo fica registrado sozinho para o professor."
    }
   ]
  },
  {
   "t": "p",
   "h": "🔎 <strong>Todas as respostas estão aqui na apostila.</strong> Errou? Leia de novo com calma e tente outra vez. Você consegue!"
  },
  {
   "t": "p",
   "h": "<strong>Regra importante:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode ficar com os jogos livres no final da aula. 🎮"
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "📝",
   "titulo": "Missão 1 – Listas: dados em fila",
   "objetivo": "entender o que é uma lista e a posição de cada item.",
   "comecar": [
    {
     "t": "p",
     "h": "O computador guarda muitos dados em <strong>listas</strong>: vários itens, um depois do outro, <strong>em ordem</strong>, com um nome só. É como a fila da merenda: cada pessoa tem o seu lugar."
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
     "h": "Cada item tem uma <strong>posição</strong>. A primeira posição é a <strong>1</strong>: CHAMADA[3] quer dizer “o item da posição 3”, que é <strong>Carla</strong>."
    },
    {
     "t": "p",
     "h": "O número de itens é o <strong>tamanho</strong> da lista: CHAMADA tem tamanho <strong>5</strong>."
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
       "Entrou aluno novo? Criar outra variável",
       "Entrou aluno novo? <strong>Inserir</strong> na lista"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Uma lista pode estar <strong>ordenada</strong> (em ordem, como 3, 8, 12, 20) ou <strong>desordenada</strong> (fora de ordem, como 9, 2, 7)."
    }
   ],
   "termos": [
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "vários itens em ordem, com um nome só."
    },
    {
     "termo": "Item",
     "rotulo": "<strong>Item</strong>",
     "def": "cada valor guardado na lista."
    },
    {
     "termo": "Posição",
     "rotulo": "<strong>Posição</strong>",
     "def": "o número do lugar do item. Aqui começa no 1."
    },
    {
     "termo": "Tamanho",
     "rotulo": "<strong>Tamanho</strong>",
     "def": "quantos itens a lista tem."
    },
    {
     "termo": "Ordenada",
     "rotulo": "<strong>Ordenada</strong>",
     "def": "lista arrumada em ordem. <strong>Crescente</strong> é do menor para o maior."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>mensagens</strong> do aplicativo ficam numa lista: a mais nova embaixo.",
     "A <strong>classificação do campeonato</strong> é uma lista ordenada pelos pontos.",
     "A <strong>fila de impressão</strong> da escola é uma lista."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Uma lista guarda vários itens em ordem, com um nome só.",
    "Na lista CHAMADA, CHAMADA[2] é Ana.",
    "O tamanho é a quantidade de itens da lista."
   ],
   "resumo": {
    "texto": "A **lista** guarda vários **itens** em ordem. Cada item tem uma **posição** (começa no 1). O **tamanho** é quantos itens ela tem. A lista pode ser **ordenada** ou não.",
    "chaves": [
     "lista",
     "item",
     "posição",
     "tamanho",
     "ordenada"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "➕",
   "titulo": "Missão 2 – Mexendo na lista: inserir, remover e contar",
   "objetivo": "colocar e tirar itens da lista e ver o que acontece com as posições.",
   "comecar": [
    {
     "t": "p",
     "h": "A lista muda o tempo todo: entra aluno novo, sai produto do carrinho."
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
      ]
     ]
    },
    {
     "t": "p",
     "h": "Resumindo: inserir faz o tamanho <strong>aumentar 1</strong>; remover faz o tamanho <strong>diminuir 1</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Contar</strong> é percorrer a lista com uma variável contadora (o <strong>contador</strong>): olhar todos os itens, do primeiro ao último. Ele começa em <strong>0</strong> e soma <strong>1</strong> cada vez que acha o que procura."
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
     "termo": "Contador",
     "rotulo": "<strong>Contador</strong>",
     "def": "número que começa em 0 e soma 1 a cada vez que algo acontece."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>carrinho da loja on-line</strong>, adicionar é inserir e o botão 🗑️ é remover.",
     "Na <strong>playlist</strong>, você coloca e tira músicas.",
     "Na <strong>lista de presença</strong>, contar quantos vieram é usar um contador."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Inserir um item no fim aumenta o tamanho em 1.",
    "Quando um item é removido, os de trás andam uma posição para a frente.",
    "Remover um item aumenta o tamanho da lista."
   ],
   "resumo": {
    "texto": "**Inserir** coloca um item (o tamanho aumenta). **Remover** tira um item: quem estava atrás **anda uma posição para a frente** e o tamanho diminui. O **contador** começa em 0 e soma 1.",
    "chaves": [
     "inserir",
     "remover",
     "contador"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🔎",
   "titulo": "Missão 3 – Busca sequencial: procurar um por um",
   "objetivo": "procurar um item olhando um por um e contar as comparações.",
   "comecar": [
    {
     "t": "p",
     "h": "Você perdeu a chave e tem 10 gavetas. O jeito mais simples: abrir a <strong>1ª</strong>, depois a <strong>2ª</strong>, a <strong>3ª</strong>… até achar. Isso é a <strong>busca sequencial</strong>."
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
     "h": "Cada olhada é uma <strong>comparação</strong>. Aqui foram <strong>4 comparações</strong>."
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
     "h": "A busca sequencial funciona em <strong>qualquer lista</strong>, em ordem ou fora de ordem."
    }
   ],
   "termos": [
    {
     "termo": "Busca",
     "rotulo": "<strong>Busca</strong>",
     "def": "procurar um item numa lista."
    },
    {
     "termo": "Busca sequencial",
     "rotulo": "<strong>Busca sequencial</strong>",
     "def": "olhar os itens um por um, do primeiro ao último."
    },
    {
     "termo": "Comparação",
     "rotulo": "<strong>Comparação</strong>",
     "def": "ver se o item é igual ao procurado. Cada olhada é uma comparação."
    },
    {
     "termo": "Melhor caso",
     "rotulo": "<strong>Melhor caso</strong>",
     "def": "quando termina mais rápido (o item é o primeiro)."
    },
    {
     "termo": "Pior caso",
     "rotulo": "<strong>Pior caso</strong>",
     "def": "quando demora mais (o item é o último ou não está)."
    }
   ],
   "ondeUso": {
    "itens": [
     "Procurar uma foto <strong>rolando a galeria</strong>, uma por uma.",
     "Procurar o seu nome numa <strong>lista fora de ordem</strong>.",
     "O <strong>Ctrl + F</strong> do navegador procura a palavra do começo ao fim."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na busca sequencial, olhamos os itens um por um.",
    "A busca sequencial só funciona em listas ordenadas.",
    "Procurar o 9 em 5, 8, 2, 9, 4 precisa de 4 comparações."
   ],
   "resumo": {
    "texto": "Na **busca sequencial** olhamos **um por um** até achar. Cada olhada é uma **comparação**. **Melhor caso**: o item é o primeiro. **Pior caso**: é o último ou não está. Funciona em qualquer lista.",
    "chaves": [
     "busca sequencial",
     "comparação",
     "melhor caso",
     "pior caso"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🎯",
   "titulo": "Missão 4 – Busca binária: procurar pelo meio",
   "objetivo": "procurar sempre pelo meio numa lista ordenada.",
   "comecar": [
    {
     "t": "p",
     "h": "No jogo <strong>“adivinhe o número de 1 a 100”</strong>, o esperto chuta <strong>50</strong>. Se a resposta é “maior”, chuta <strong>75</strong>, e assim por diante. Isso é a <strong>busca binária</strong>: procurar <strong>sempre pelo meio</strong> e jogar fora <strong>metade</strong> a cada vez."
    },
    {
     "t": "p",
     "h": "<strong>Regra de ouro:</strong> a busca binária só funciona se a lista estiver <strong>ordenada</strong>."
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
     "t": "tabela",
     "cab": [
      "Itens na lista",
      "Comparações no pior caso (binária)",
      "Comparações no pior caso (sequencial)"
     ],
     "linhas": [
      [
       "100",
       "7",
       "100"
      ],
      [
       "1.000",
       "10",
       "1.000"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Busca binária",
     "rotulo": "<strong>Busca binária</strong>",
     "def": "procurar sempre pelo meio de uma lista ordenada. <strong>Binária</strong> quer dizer “em duas partes”."
    },
    {
     "termo": "Meio",
     "rotulo": "<strong>Meio</strong>",
     "def": "o item do centro da parte que sobrou."
    },
    {
     "termo": "Descartar",
     "rotulo": "<strong>Descartar</strong>",
     "def": "jogar fora a parte em que o item com certeza não está."
    }
   ],
   "ondeUso": {
    "itens": [
     "Procurar uma palavra no <strong>dicionário</strong>: abrimos no meio.",
     "Os <strong>contatos do celular</strong>, em ordem alfabética.",
     "O jogo de <strong>adivinhar o número</strong>."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "A busca binária funciona em qualquer lista, mesmo fora de ordem.",
    "Na busca binária, começamos olhando o item do meio.",
    "A cada comparação, a busca binária joga fora metade da lista."
   ],
   "resumo": {
    "texto": "A **busca binária** olha sempre o **meio** de uma lista **ordenada** e joga fora **metade** a cada vez. É muito mais rápida que a sequencial, mas **só funciona com a lista em ordem**.",
    "chaves": [
     "busca binária",
     "meio",
     "descartar",
     "lista ordenada"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "🫧",
   "titulo": "Missão 5 – Ordenar: o método da bolha",
   "objetivo": "pôr uma lista em ordem trocando vizinhos.",
   "comecar": [
    {
     "t": "p",
     "h": "Um jeito simples de ordenar é o <strong>método da bolha</strong>:"
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
     "h": "O maior número <strong>“sobe” para o final</strong>, como uma <strong>bolha</strong> subindo na água."
    }
   ],
   "termos": [
    {
     "termo": "Ordenar",
     "rotulo": "<strong>Ordenar</strong>",
     "def": "colocar a lista em ordem."
    },
    {
     "termo": "Método da bolha",
     "rotulo": "<strong>Método da bolha</strong>",
     "def": "ordena comparando vizinhos e trocando os que estão fora de ordem. Em inglês, <em>bubble sort</em>."
    },
    {
     "termo": "Vizinhos",
     "rotulo": "<strong>Vizinhos</strong>",
     "def": "dois itens que estão um ao lado do outro."
    },
    {
     "termo": "Troca",
     "rotulo": "<strong>Troca</strong>",
     "def": "mudar dois itens de lugar."
    },
    {
     "termo": "Passada",
     "rotulo": "<strong>Passada</strong>",
     "def": "uma volta inteira, do começo ao fim da lista."
    }
   ],
   "ondeUso": {
    "itens": [
     "Organizar as <strong>cartas na mão</strong> no baralho.",
     "A <strong>fila por altura</strong> na foto da turma.",
     "Aplicativos <strong>ordenam</strong> listas de nomes e preços com um clique."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "O método da bolha compara itens vizinhos.",
    "No fim da 1ª passada, o maior número está no final da lista.",
    "9, 6, 3, 1 está em ordem crescente."
   ],
   "resumo": {
    "texto": "O **método da bolha** compara **vizinhos** e **troca** quando o da esquerda é maior. Uma volta inteira é uma **passada**; o maior sobe para o final. Termina quando uma passada não faz nenhuma troca.",
    "chaves": [
     "ordenar",
     "método da bolha",
     "vizinhos",
     "troca",
     "passada"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🪆",
   "titulo": "Missão 6 – Recursão: o problema dentro do problema",
   "objetivo": "reconhecer a recursão e o caso base, que faz parar.",
   "comecar": [
    {
     "t": "p",
     "h": "Abra uma <strong>matrioska</strong> (a boneca russa): dentro dela tem uma boneca <strong>igual, só que menor</strong>. Dentro dessa, outra menor… até a <strong>última</strong>, que não abre. Isso é <strong>recursão</strong>: um problema que se resolve com uma <strong>versão menor dele mesmo</strong>."
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
       "O caso pequeno que faz parar",
       "A bonequinha que não abre: acabou"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Sem caso base, a recursão nunca para.</strong>"
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: contagem regressiva.</strong> Para contar a partir de <strong>n</strong>:"
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
     "h": "Contar a partir de 3 → 3, 2, 1, “Fogo!”."
    }
   ],
   "termos": [
    {
     "termo": "Recursão",
     "rotulo": "<strong>Recursão</strong>",
     "def": "resolver um problema usando uma versão menor dele mesmo."
    },
    {
     "termo": "Caso base",
     "rotulo": "<strong>Caso base</strong>",
     "def": "o caso mais simples, que faz a recursão parar."
    },
    {
     "termo": "Passo recursivo",
     "rotulo": "<strong>Passo recursivo</strong>",
     "def": "a parte que repete o problema, um pouco menor."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>pastas do computador</strong>: pasta dentro de pasta, dentro de pasta.",
     "A <strong>matrioska</strong> e os <strong>espelhos</strong> frente a frente.",
     "A <strong>contagem regressiva</strong> do foguete."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Recursão é resolver um problema usando uma versão menor dele mesmo.",
    "Na matrioska, o caso base é a primeira boneca, a maior.",
    "Sem caso base, a recursão pode nunca parar."
   ],
   "resumo": {
    "texto": "**Recursão** é resolver um problema com uma **versão menor dele mesmo**. Tem o **passo recursivo** (repetir menor) e o **caso base** (o que faz parar). Exemplos: matrioska, pastas dentro de pastas, contagem regressiva.",
    "chaves": [
     "recursão",
     "caso base",
     "passo recursivo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🏅",
   "titulo": "Missão 7 – Extra: Ordenação por seleção",
   "objetivo": "ordenar escolhendo o menor a cada rodada.",
   "comecar": [
    {
     "t": "p",
     "h": "Na <strong>ordenação por seleção</strong>, a cada rodada você <strong>escolhe o menor</strong> do que sobrou e põe na frente."
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
       "<strong>Troque</strong> ele com o item da <strong>1ª posição</strong>"
      ],
      [
       "3",
       "Procure o menor <strong>do que sobrou</strong> e troque com a 2ª"
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
    }
   ],
   "termos": [
    {
     "termo": "Ordenação por seleção",
     "rotulo": "<strong>Ordenação por seleção</strong>",
     "def": "a cada rodada, escolhe (seleciona) o menor e põe na próxima posição."
    },
    {
     "termo": "Rodada",
     "rotulo": "<strong>Rodada</strong>",
     "def": "cada vez que escolhemos o menor e fazemos a troca."
    },
    {
     "termo": "Mínimo",
     "rotulo": "<strong>Mínimo</strong>",
     "def": "o menor número de um grupo."
    }
   ],
   "ondeUso": {
    "itens": [
     "<strong>Escolher os times</strong> no recreio: escolhe o melhor, depois o melhor do que sobrou.",
     "O <strong>pódio</strong>: primeiro o 1º lugar, depois o 2º.",
     "Arrumar as <strong>cartas</strong> puxando a menor para a esquerda."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na seleção, procuramos o menor item do que sobrou a cada rodada.",
    "Na 1ª rodada, o menor item vai para a última posição.",
    "Depois da 1ª rodada, a 1ª posição já está pronta."
   ],
   "resumo": {
    "texto": "Na **ordenação por seleção**, a cada **rodada** achamos o **menor** do que sobrou (o **mínimo**) e trocamos com a próxima posição. O começo da lista vai ficando pronto.",
    "chaves": [
     "ordenação por seleção",
     "rodada",
     "mínimo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "❄️",
   "titulo": "Missão 8 – Extra: Fractais",
   "objetivo": "reconhecer fractais e contar as peças de cada nível.",
   "comecar": [
    {
     "t": "p",
     "h": "Olhe um <strong>galho de samambaia</strong>: cada folhinha parece uma samambaia inteira, só que menor. Essas formas são <strong>fractais</strong>: uma <strong>parte é parecida com o todo</strong>. Eles usam a ideia da <strong>recursão</strong>."
    },
    {
     "t": "p",
     "h": "<strong>O triângulo de Sierpinski</strong> (nome do matemático polonês Wacław Sierpiński):"
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
      ]
     ]
    },
    {
     "t": "p",
     "h": "A cada nível, o número <strong>multiplica por 3</strong>."
    },
    {
     "t": "p",
     "h": "<strong>A árvore fractal:</strong> cada galho se divide em <strong>2 galhos</strong> menores."
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
     "h": "A cada nível, o número <strong>dobra</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Fractal",
     "rotulo": "<strong>Fractal</strong>",
     "def": "figura em que cada parte se parece com a figura inteira."
    },
    {
     "termo": "Nível",
     "rotulo": "<strong>Nível</strong>",
     "def": "cada vez que a regra é aplicada de novo, em tamanho menor."
    },
    {
     "termo": "Triângulo de Sierpinski",
     "rotulo": "<strong>Triângulo de Sierpinski</strong>",
     "def": "fractal em que cada triângulo vira 3 menores a cada nível."
    }
   ],
   "ondeUso": {
    "itens": [
     "Na <strong>natureza</strong>: samambaia, brócolis, raios, flocos de neve.",
     "Nos <strong>jogos e filmes</strong>, montanhas e árvores feitas por computador.",
     "Os <strong>rios</strong> vistos de cima parecem árvores fractais."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num fractal, uma parte é parecida com a figura inteira.",
    "No triângulo de Sierpinski, cada triângulo vira 3 menores a cada nível.",
    "Uma bola lisa é um exemplo de fractal."
   ],
   "resumo": {
    "texto": "**Fractal** é uma figura em que cada parte se parece com o todo. No **triângulo de Sierpinski**, cada triângulo vira 3 (1, 3, 9, 27). Na **árvore fractal**, cada galho vira 2 (2, 4, 8, 16).",
    "chaves": [
     "fractal",
     "nível",
     "triângulo de Sierpinski"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "rv",
   "icone": "🔁",
   "titulo": "Revisão para a prova",
   "objetivo": "relembrar as missões que a sua turma estudou, um passo de cada vez.",
   "comecar": [
    {
     "t": "p",
     "h": "Hoje é dia de <strong>revisão</strong>. O portal mostra <strong>só as missões que a sua turma estudou</strong>."
    },
    {
     "t": "p",
     "h": "Em cada missão:"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "📚 <strong>leia</strong> o resumo;"
      },
      {
       "nivel": 0,
       "h": "🟢 <strong>faça</strong> as atividades;"
      },
      {
       "nivel": 0,
       "h": "🔁 errou? Leia a explicação e tente de novo."
      }
     ]
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
   "objetivo": "mostrar o que você aprendeu e recuperar a nota do bimestre.",
   "comecar": [
    {
     "t": "p",
     "h": "Esta atividade só aparece quando o professor <strong>libera</strong> para você. Ela vale <strong>nota de 0 a 10</strong>."
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "📚 Tem só as missões que a sua turma estudou."
      },
      {
       "nivel": 0,
       "h": "🎯 Certa de primeira vale o ponto inteiro; cada erro tira um pouco."
      },
      {
       "nivel": 0,
       "h": "🚫 Aqui <strong>não tem dica</strong>: é a hora de mostrar o que você sabe."
      },
      {
       "nivel": 0,
       "h": "🔎 Antes de responder, pode reler o 🧠 Resumo da Aula da missão."
      }
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
