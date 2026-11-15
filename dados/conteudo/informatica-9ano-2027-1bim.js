/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-9ano-2027-1bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-9ano-2027-1bim", {
 "titulo": "Apostila de Informática – 9º Ano – 1º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai conhecer as <strong>estruturas</strong> que estão por trás do GPS, das pastas do computador, dos jogos e dos aparelhos que respondem a botões: <strong>grafos</strong>, <strong>árvores</strong>, <strong>autômatos</strong> e <strong>eventos</strong>. São <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🗺️ Missão 1 – Grafos e o melhor caminho",
     "Pensamento Computacional"
    ],
    [
     "🌳 Missão 2 – Árvores",
     "Pensamento Computacional"
    ],
    [
     "❓ Missão 3 – Árvores de decisão",
     "Pensamento Computacional"
    ],
    [
     "🧱 Missão 4 – Programar com grafos e árvores",
     "Pensamento Computacional"
    ],
    [
     "🤖 Missão 5 – Autômatos: máquinas de estados",
     "Pensamento Computacional"
    ],
    [
     "⚡ Missão 6 – Programação por eventos",
     "Pensamento Computacional"
    ],
    [
     "🚦 Missão 7 – Extra: O semáforo",
     "Pensamento Computacional"
    ],
    [
     "🏫 Missão 8 – Extra: O mapa da escola em grafo",
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
     "O computador executa os blocos (e, nas missões de eventos, faz os eventos acontecerem)"
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
   "icone": "🗺️",
   "titulo": "Missão 1 – Grafos e o melhor caminho",
   "objetivo": "representar lugares e ligações como um grafo, com vértices, arestas e pesos, e encontrar o caminho de menor soma.",
   "comecar": [
    {
     "t": "p",
     "h": "Como o aplicativo de mapa sabe o caminho mais rápido de casa até a escola? Ele enxerga a cidade como um <strong>grafo</strong>: <strong>pontos</strong> ligados por <strong>linhas</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Parte do grafo",
      "O que é",
      "No mapa da cidade"
     ],
     "linhas": [
      [
       "⚪ Vértice",
       "Um ponto",
       "Uma esquina, uma casa, a escola"
      ],
      [
       "➖ Aresta",
       "Uma ligação entre dois vértices",
       "Uma rua entre duas esquinas"
      ],
      [
       "🔢 Peso",
       "Um número na aresta",
       "Os minutos (ou metros) daquela rua"
      ],
      [
       "🔗 Grau",
       "Quantas arestas saem de um vértice",
       "Quantas ruas chegam numa esquina"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Um <strong>caminho</strong> é uma sequência de vértices ligados por arestas, como Casa → Padaria → Escola. O <strong>tamanho</strong> do caminho é a <strong>soma dos pesos</strong> das arestas dele."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: o bairro</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Aresta",
      "Peso (minutos)"
     ],
     "linhas": [
      [
       "Casa — Padaria",
       "3"
      ],
      [
       "Padaria — Escola",
       "2"
      ],
      [
       "Casa — Praça",
       "4"
      ],
      [
       "Praça — Escola",
       "4"
      ],
      [
       "Casa — Escola (rua direta)",
       "9"
      ]
     ]
    },
    {
     "t": "tabela",
     "cab": [
      "Caminho da Casa até a Escola",
      "Soma"
     ],
     "linhas": [
      [
       "Casa → Escola (direto)",
       "9"
      ],
      [
       "Casa → Praça → Escola",
       "4 + 4 = 8"
      ],
      [
       "Casa → Padaria → Escola",
       "3 + 2 = <strong>5</strong> ✅"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O <strong>caminho mais curto</strong> é o de <strong>menor soma dos pesos</strong>, e <strong>nem sempre</strong> é o que tem menos paradas: a rua direta tem uma aresta só, mas soma 9. O aplicativo de mapa faz essas contas com milhões de ruas em segundos."
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "estrutura formada por vértices (pontos) ligados por arestas (linhas). Serve para representar ligações: ruas, amizades, voos, cabos."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong> (ou nó)",
     "def": "cada ponto do grafo."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada ligação entre dois vértices."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "número na aresta que diz o “custo” de passar por ela (tempo, distância, preço)."
    },
    {
     "termo": "Grau",
     "rotulo": "<strong>Grau</strong>",
     "def": "quantas arestas saem de um vértice."
    },
    {
     "termo": "Caminho",
     "rotulo": "<strong>Caminho</strong>",
     "def": "sequência de vértices ligados por arestas, do início até o fim."
    },
    {
     "termo": "Caminho mais curto",
     "rotulo": "<strong>Caminho mais curto</strong>",
     "def": "o caminho com a menor soma dos pesos."
    },
    {
     "termo": "GPS",
     "rotulo": "<strong>GPS</strong> (<em>Global Positioning System</em>, Sistema de Posicionamento Global)",
     "def": "sistema de satélites que diz onde você está; os aplicativos de mapa juntam o GPS com grafos para achar o caminho."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapa</strong> e o <strong>aplicativo de entrega</strong> calculam o caminho mais curto num grafo de ruas.",
     "Nas <strong>redes sociais</strong>, cada pessoa é um vértice e cada amizade é uma aresta: “amigos em comum” vêm daí.",
     "A <strong>internet</strong> é um grafo de roteadores ligados por cabos; os pacotes seguem o melhor caminho."
    ],
    "reflexao": "Pense e escreva: desenhe na cabeça o grafo do caminho da sua casa até a escola. Quais seriam os vértices?"
   },
   "alertas": [],
   "vf": [
    "Num grafo de ruas, cada esquina pode ser um vértice.",
    "O caminho com menos paradas é sempre o mais curto.",
    "O peso é o número que aparece numa aresta.",
    "O grau de um vértice é quantas arestas saem dele.",
    "O tamanho de um caminho é a soma dos pesos das suas arestas."
   ],
   "resumo": {
    "texto": "Um **grafo** tem **vértices** (pontos) ligados por **arestas** (linhas). O **peso** é o número da aresta (tempo, distância); o **grau** é quantas arestas saem de um vértice. Um **caminho** é uma sequência de vértices ligados, e o seu tamanho é a **soma dos pesos**. O **caminho mais curto** é o de menor soma, e nem sempre é o de menos paradas. Mapas, redes sociais e a internet são grafos.",
    "chaves": [
     "grafo",
     "vértice",
     "aresta",
     "peso",
     "grau",
     "caminho",
     "caminho mais curto",
     "GPS"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🌳",
   "titulo": "Missão 2 – Árvores",
   "objetivo": "reconhecer a árvore como um grafo com raiz, galhos e folhas, sem voltas, e achar caminhos, níveis e folhas.",
   "comecar": [
    {
     "t": "p",
     "h": "Uma <strong>árvore</strong>, na computação, é um grafo especial, desenhado <strong>de cabeça para baixo</strong>: a <strong>raiz</strong> fica em cima e os <strong>galhos</strong> descem até as <strong>folhas</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Parte",
      "O que é",
      "Nas pastas do computador"
     ],
     "linhas": [
      [
       "🌱 Raiz",
       "O vértice de cima, onde tudo começa",
       "A pasta Documentos"
      ],
      [
       "👨‍👧 Pai e filho",
       "Quem está logo acima é o pai; logo abaixo, os filhos",
       "A pasta Escola é filha de Documentos"
      ],
      [
       "🍃 Folha",
       "Vértice sem filhos, no fim de um galho",
       "Os arquivos (redação.txt, foto.jpg)"
      ],
      [
       "📏 Nível",
       "Quantos passos da raiz até o vértice",
       "Documentos = nível 0; Escola = nível 1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Nível 0",
      "Nível 1",
      "Nível 2"
     ],
     "linhas": [
      [
       "📁 Documentos",
       "📁 Escola",
       "📄 redação.txt · 📄 mapa.png"
      ],
      [
       "",
       "📁 Fotos",
       "📄 aniversário.jpg"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O que faz um grafo ser árvore:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Regra",
      "Por quê"
     ],
     "linhas": [
      [
       "Tem uma raiz",
       "Tudo começa num lugar só"
      ],
      [
       "<strong>Não tem voltas</strong> (ciclos)",
       "Não dá para sair de um vértice e voltar a ele sem repetir caminho"
      ],
      [
       "De um vértice a outro existe <strong>um único caminho</strong>",
       "Da raiz até mapa.png só existe: Documentos › Escola › mapa.png"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Árvores servem para organizar coisas <strong>em hierarquia</strong> (do mais geral para o mais específico): pastas, árvore genealógica, campeonato mata-mata, organograma da escola."
    }
   ],
   "termos": [
    {
     "termo": "Árvore",
     "rotulo": "<strong>Árvore</strong>",
     "def": "grafo sem voltas (ciclos), com uma raiz, em que existe um único caminho entre dois vértices."
    },
    {
     "termo": "Raiz",
     "rotulo": "<strong>Raiz</strong>",
     "def": "o vértice do topo, onde a árvore começa."
    },
    {
     "termo": "Pai",
     "rotulo": "<strong>Pai</strong> e <strong>filho</strong>",
     "def": "o vértice logo acima é o pai; os logo abaixo são os filhos."
    },
    {
     "termo": "Folha",
     "rotulo": "<strong>Folha</strong>",
     "def": "vértice que não tem filhos."
    },
    {
     "termo": "Nível",
     "rotulo": "<strong>Nível</strong> (ou profundidade)",
     "def": "quantos passos da raiz até o vértice (a raiz está no nível 0)."
    },
    {
     "termo": "Ciclo",
     "rotulo": "<strong>Ciclo</strong>",
     "def": "caminho que sai de um vértice e volta a ele. Árvores não têm ciclos."
    },
    {
     "termo": "Hierarquia",
     "rotulo": "<strong>Hierarquia</strong>",
     "def": "organização em níveis, do mais geral para o mais específico."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>pastas</strong> do computador e do celular formam uma árvore.",
     "A <strong>árvore genealógica</strong> da família mostra avós, pais e filhos em níveis.",
     "O <strong>mata-mata</strong> da Copa é uma árvore: as folhas são os times e a raiz é o campeão."
    ],
    "reflexao": "Pense e escreva: monte de cabeça a árvore de uma coisa que você conhece (família, campeonato, pastas). Quem é a raiz? Quem são as folhas?"
   },
   "alertas": [],
   "vf": [
    "Numa árvore da computação, a raiz fica em cima.",
    "Folha é o vértice que tem mais filhos.",
    "As pastas do computador formam uma árvore.",
    "Uma árvore pode ter ciclos (voltas).",
    "Numa árvore, existe um único caminho entre dois vértices."
   ],
   "resumo": {
    "texto": "A **árvore** é um grafo sem **ciclos**, desenhado de cabeça para baixo: a **raiz** em cima, os galhos descendo e as **folhas** (vértices sem filhos) no fim. O vértice logo acima é o **pai**; os de baixo, os **filhos**. O **nível** é quantos passos da raiz até o vértice. Entre dois vértices há um **único caminho**. Árvores organizam **hierarquias**: pastas, família, mata-mata.",
    "chaves": [
     "árvore",
     "raiz",
     "pai",
     "filho",
     "folha",
     "nível",
     "ciclo",
     "hierarquia"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "❓",
   "titulo": "Missão 3 – Árvores de decisão",
   "objetivo": "usar árvores de perguntas de sim ou não para tomar decisões e classificar coisas, e contar quantas perguntas são necessárias.",
   "comecar": [
    {
     "t": "p",
     "h": "Já jogou <strong>“adivinhe o objeto”</strong> com perguntas de sim ou não? Isso é uma <strong>árvore de decisão</strong>: cada <strong>vértice</strong> é uma <strong>pergunta</strong>, cada <strong>galho</strong> é uma <strong>resposta</strong> (sim ou não) e cada <strong>folha</strong> é uma <strong>decisão</strong> final."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: adivinhe o objeto da sala</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Pergunta 1",
      "Pergunta 2",
      "Folha (resposta)"
     ],
     "linhas": [
      [
       "É eletrônico? <strong>sim</strong> →",
       "Tem tela? <strong>sim</strong> →",
       "🖥️ Monitor"
      ],
      [
       "",
       "Tem tela? <strong>não</strong> →",
       "⌨️ Teclado"
      ],
      [
       "É eletrônico? <strong>não</strong> →",
       "Serve para escrever? <strong>sim</strong> →",
       "✏️ Lápis"
      ],
      [
       "",
       "Serve para escrever? <strong>não</strong> →",
       "🪑 Cadeira"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como usar:</strong> comece na <strong>raiz</strong> (a primeira pergunta), responda e siga o galho da resposta até chegar a uma <strong>folha</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Contas da árvore de decisão:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Pergunta",
      "Nesta árvore"
     ],
     "linhas": [
      [
       "Quantas decisões (folhas)?",
       "4"
      ],
      [
       "Quantas perguntas, no máximo, até decidir (profundidade)?",
       "2"
      ],
      [
       "Com perguntas de sim/não, cada nível a mais <strong>dobra</strong> as folhas",
       "1 pergunta → 2 folhas; 2 → 4; 3 → 8"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Boa árvore de decisão:</strong> cada pergunta tem <strong>resposta clara</strong> (sim ou não) e <strong>divide</strong> as possibilidades. “Ele é legal?” é uma pergunta ruim: cada pessoa responde de um jeito."
    }
   ],
   "termos": [
    {
     "termo": "Árvore de decisão",
     "rotulo": "<strong>Árvore de decisão</strong>",
     "def": "árvore em que cada vértice é uma pergunta, cada galho é uma resposta e cada folha é uma decisão."
    },
    {
     "termo": "Decisão",
     "rotulo": "<strong>Decisão</strong> (ou classificação)",
     "def": "a resposta final, na folha."
    },
    {
     "termo": "Condição",
     "rotulo": "<strong>Condição</strong>",
     "def": "pergunta de sim ou não, como “é eletrônico?”."
    },
    {
     "termo": "Profundidade",
     "rotulo": "<strong>Profundidade</strong>",
     "def": "o número máximo de perguntas da raiz até uma folha."
    },
    {
     "termo": "IA",
     "rotulo": "<strong>IA</strong> (Inteligência Artificial)",
     "def": "programas que aprendem a decidir; muitos usam árvores de decisão montadas a partir de exemplos."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>atendimento automático</strong> do telefone: “digite 1 para… 2 para…” é uma árvore de decisão.",
     "Na <strong>triagem do posto de saúde</strong>: tem febre? Há quantos dias? Cada resposta leva a uma cor de prioridade.",
     "No <strong>jogo do Akinator</strong> e em <strong>filtros de compra</strong> (preço, tamanho, cor)."
    ],
    "reflexao": "Pense e escreva: invente duas perguntas de sim ou não que separem 4 animais diferentes."
   },
   "alertas": [],
   "vf": [
    "Numa árvore de decisão, as folhas são as decisões finais.",
    "Cada galho de uma árvore de decisão de sim ou não é uma resposta.",
    "“Ele é legal?” é uma boa pergunta para uma árvore de decisão.",
    "Com 3 perguntas de sim ou não, dá para separar até 8 opções.",
    "O atendimento automático do telefone usa uma árvore de decisão."
   ],
   "resumo": {
    "texto": "Na **árvore de decisão**, cada vértice é uma **pergunta** de sim ou não (condição), cada galho é uma **resposta** e cada **folha** é uma **decisão**. Começamos na raiz e seguimos os galhos. A **profundidade** é o máximo de perguntas até decidir; com sim/não, cada pergunta a mais **dobra** as opções (1 → 2, 2 → 4, 3 → 8). Boas perguntas têm resposta clara. Usos: atendimento automático, triagem, IA.",
    "chaves": [
     "árvore de decisão",
     "decisão",
     "condição",
     "profundidade",
     "IA"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🧱",
   "titulo": "Missão 4 – Programar com grafos e árvores",
   "objetivo": "escrever programas que guardam um grafo como lista de vizinhos e que transformam uma árvore de decisão em blocos se … senão.",
   "comecar": [
    {
     "t": "p",
     "h": "Como o computador <strong>guarda</strong> um grafo? Um jeito muito usado é a <strong>lista de vizinhos</strong> (lista de adjacência): para cada vértice, guardamos a <strong>lista</strong> dos vértices ligados a ele."
    },
    {
     "t": "tabela",
     "cab": [
      "Vértice",
      "Vizinhos"
     ],
     "linhas": [
      [
       "Pátio",
       "Portão, Cantina, Informática, Biblioteca"
      ],
      [
       "Portão",
       "Pátio"
      ],
      [
       "Informática",
       "Pátio, Biblioteca"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O <strong>grau</strong> do vértice é o <strong>tamanho</strong> da lista de vizinhos: Pátio tem grau <strong>4</strong>."
    },
    {
     "t": "p",
     "h": "No editor, usamos uma <strong>ficha</strong> chamada <strong>vizinhos</strong>, com um <strong>campo</strong> para cada vértice; o valor de cada campo é uma <strong>lista</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Bloco",
      "Faz"
     ],
     "linhas": [
      [
       "na ficha vizinhos o campo Pátio vale (criar lista com Portão, Cantina, Informática, Biblioteca)",
       "Guarda os vizinhos do Pátio"
      ],
      [
       "tamanho de (campo Pátio da ficha vizinhos)",
       "Calcula o grau do Pátio → 4"
      ],
      [
       "para cada item v na lista (campo Pátio da ficha vizinhos)",
       "Percorre os vizinhos, um por um"
      ]
     ]
    },
    {
     "t": "p",
     "h": "E a <strong>árvore de decisão</strong> vira <strong>se … senão dentro de se … senão</strong>: a pergunta da raiz é o primeiro <strong>se</strong>; cada galho tem outro <strong>se</strong> dentro; as folhas são os <strong>mostrar</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Árvore",
      "Blocos"
     ],
     "linhas": [
      [
       "É eletrônico?",
       "<strong>se</strong> eletronico = verdadeiro"
      ],
      [
       "└ sim: Tem tela?",
       "↳ <strong>se</strong> tela = verdadeiro → mostrar “Monitor”; <strong>senão</strong> → mostrar “Teclado”"
      ],
      [
       "└ não: Serve para escrever?",
       "↳ <strong>senão</strong>: <strong>se</strong> escreve = verdadeiro → mostrar “Lápis”; <strong>senão</strong> → mostrar “Cadeira”"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Lista de vizinhos",
     "rotulo": "<strong>Lista de vizinhos</strong> (lista de adjacência)",
     "def": "jeito de guardar um grafo: para cada vértice, a lista dos vértices ligados a ele."
    },
    {
     "termo": "Vizinho",
     "rotulo": "<strong>Vizinho</strong>",
     "def": "vértice ligado diretamente a outro. Dois vértices são vizinhos quando estão ligados por uma aresta."
    },
    {
     "termo": "Representar",
     "rotulo": "<strong>Representar</strong>",
     "def": "guardar uma coisa do mundo (um mapa, uma árvore) num formato que o computador entende."
    },
    {
     "termo": "Se aninhado",
     "rotulo": "<strong>Se aninhado</strong>",
     "def": "um bloco se colocado dentro de outro se, como os galhos de uma árvore."
    }
   ],
   "ondeUso": {
    "itens": [
     "O aplicativo da <strong>rede social</strong> guarda, para cada pessoa, a lista de amigos (vizinhos) e conta quantos você tem (grau).",
     "O <strong>jogo</strong> guarda o mapa de salas como lista de vizinhos: de cada sala, para onde dá para ir.",
     "O <strong>atendimento automático</strong> é um programa de <strong>se</strong> dentro de <strong>se</strong>."
    ],
    "reflexao": "Pense e escreva: num jogo que você conhece, o que seriam os vértices e os vizinhos?"
   },
   "alertas": [],
   "vf": [
    "Na lista de vizinhos, guardamos para cada vértice os vértices ligados a ele.",
    "O grau de um vértice é o tamanho da sua lista de vizinhos.",
    "Uma árvore de decisão vira, no programa, um se dentro de outro se.",
    "Vizinhos são vértices que não têm nenhuma ligação.",
    "A rede social guarda a lista de amigos de cada pessoa."
   ],
   "resumo": {
    "texto": "Para **representar** um grafo no programa, usamos a **lista de vizinhos**: para cada vértice, a lista dos vértices ligados a ele; o **grau** é o tamanho dessa lista, e o **para cada** percorre os vizinhos. No editor, uma ficha guarda um campo por vértice. A **árvore de decisão** vira **se** dentro de **se** (se aninhado): a raiz é o primeiro se e as folhas são os mostrar.",
    "chaves": [
     "lista de vizinhos",
     "vizinho",
     "grau",
     "representar",
     "se aninhado"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "🤖",
   "titulo": "Missão 5 – Autômatos: máquinas de estados",
   "objetivo": "descrever máquinas que mudam de estado conforme as entradas, usando estados, transições e tabelas de transição.",
   "comecar": [
    {
     "t": "p",
     "h": "A <strong>catraca do ônibus</strong> pode estar <strong>travada</strong> ou <strong>liberada</strong>. Ela muda de um jeito para o outro conforme o que acontece: alguém paga (<strong>cartão</strong>) ou alguém <strong>empurra</strong>. Uma máquina assim, que está sempre num <strong>estado</strong> e muda conforme as <strong>entradas</strong>, é um <strong>autômato</strong> (máquina de estados)."
    },
    {
     "t": "tabela",
     "cab": [
      "Estado atual",
      "Entrada",
      "Próximo estado",
      "O que acontece"
     ],
     "linhas": [
      [
       "🔒 Travada",
       "💳 cartão",
       "🔓 Liberada",
       "A luz fica verde"
      ],
      [
       "🔒 Travada",
       "🚶 empurrar",
       "🔒 Travada",
       "Não gira"
      ],
      [
       "🔓 Liberada",
       "🚶 empurrar",
       "🔒 Travada",
       "Gira: uma pessoa passa"
      ],
      [
       "🔓 Liberada",
       "💳 cartão",
       "🔓 Liberada",
       "Já estava liberada"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Essa é a <strong>tabela de transição</strong>: para cada <strong>estado</strong> e cada <strong>entrada</strong>, ela diz o <strong>próximo estado</strong>. Cada mudança de estado é uma <strong>transição</strong>. O estado em que a máquina começa é o <strong>estado inicial</strong> (a catraca começa travada)."
    },
    {
     "t": "p",
     "h": "<strong>Seguindo uma sequência de entradas:</strong> começando travada, com as entradas <strong>empurrar → cartão → empurrar</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "Estado antes",
      "Entrada",
      "Estado depois"
     ],
     "linhas": [
      [
       "1",
       "Travada",
       "empurrar",
       "Travada"
      ],
      [
       "2",
       "Travada",
       "cartão",
       "Liberada"
      ],
      [
       "3",
       "Liberada",
       "empurrar",
       "Travada"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Onde estão os autômatos:</strong> semáforo (verde → amarelo → vermelho), máquina de refrigerante, elevador, porta automática, controle de videogame (personagem parado, correndo, pulando)."
    }
   ],
   "termos": [
    {
     "termo": "Autômato",
     "rotulo": "<strong>Autômato</strong> (máquina de estados)",
     "def": "máquina que está sempre num estado e muda de estado conforme as entradas."
    },
    {
     "termo": "Estado",
     "rotulo": "<strong>Estado</strong>",
     "def": "a situação em que a máquina está agora (travada, liberada, verde, vermelho)."
    },
    {
     "termo": "Entrada",
     "rotulo": "<strong>Entrada</strong>",
     "def": "o que acontece de fora e pode mudar o estado (cartão, botão, tempo)."
    },
    {
     "termo": "Transição",
     "rotulo": "<strong>Transição</strong>",
     "def": "a mudança de um estado para outro."
    },
    {
     "termo": "Tabela de transição",
     "rotulo": "<strong>Tabela de transição</strong>",
     "def": "tabela que diz, para cada estado e cada entrada, qual é o próximo estado."
    },
    {
     "termo": "Estado inicial",
     "rotulo": "<strong>Estado inicial</strong>",
     "def": "o estado em que a máquina começa."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>catraca</strong> do ônibus e da escola, o <strong>semáforo</strong> e o <strong>elevador</strong> são autômatos.",
     "No <strong>videogame</strong>, o personagem tem estados (parado, correndo, pulando) que mudam com os botões.",
     "A <strong>máquina de refrigerante</strong> espera o dinheiro, libera a escolha e entrega a lata."
    ],
    "reflexao": "Pense e escreva: escolha um aparelho que você usa. Quais são os estados dele? O que faz ele mudar de estado?"
   },
   "alertas": [],
   "vf": [
    "Um autômato está sempre em algum estado.",
    "A transição é a mudança de um estado para outro.",
    "Na catraca travada, empurrar faz ela girar.",
    "A tabela de transição diz o próximo estado para cada estado e cada entrada.",
    "O semáforo é um exemplo de autômato."
   ],
   "resumo": {
    "texto": "Um **autômato** (máquina de estados) está sempre num **estado** e muda conforme as **entradas**. Cada mudança é uma **transição**. A **tabela de transição** diz, para cada estado e entrada, o próximo estado. A máquina começa no **estado inicial**. Exemplos: catraca (travada/liberada), semáforo, elevador, máquina de refrigerante, personagem de jogo.",
    "chaves": [
     "autômato",
     "estado",
     "entrada",
     "transição",
     "tabela de transição",
     "estado inicial"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "⚡",
   "titulo": "Missão 6 – Programação por eventos",
   "objetivo": "criar programas que reagem a eventos (cliques, botões, sensores), com um bloco de instruções para cada evento.",
   "comecar": [
    {
     "t": "p",
     "h": "Os programas que fizemos até agora rodam <strong>de cima para baixo</strong> e terminam. Mas o celular, o jogo e a catraca <strong>esperam</strong> algo acontecer e então <strong>reagem</strong>. Isso é a <strong>programação por eventos</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Evento (o que acontece)",
      "Tratador (o que o programa faz)"
     ],
     "linhas": [
      [
       "👆 Tocar no ícone",
       "Abrir o aplicativo"
      ],
      [
       "🔔 Chegar mensagem",
       "Vibrar e mostrar a notificação"
      ],
      [
       "⬆️ Apertar o botão de pular",
       "O personagem pula"
      ],
      [
       "💳 Passar o cartão na catraca",
       "Liberar e acender a luz verde"
      ]
     ]
    },
    {
     "t": "p",
     "h": "No editor, a gaveta <strong>⚡ Eventos</strong> tem o bloco <strong>“quando acontecer … faça …”</strong>. Os blocos de dentro só rodam <strong>quando aquele evento acontece</strong>, e rodam <strong>de novo toda vez</strong> que ele acontece."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: o contador de cliques</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Bloco",
      "O que faz"
     ],
     "linhas": [
      [
       "definir cliques para 0",
       "Roda uma vez, no começo"
      ],
      [
       "⚡ quando acontecer 🟢 botão: alterar cliques por 1; mostrar cliques",
       "Roda a cada clique no botão"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Se o botão for apertado 3 vezes, aparece 1, 2, 3."
    },
    {
     "t": "p",
     "h": "<strong>Eventos + estados = autômato no programa:</strong> uma variável guarda o <strong>estado</strong> (travada ou liberada) e cada <strong>evento</strong> (cartão, empurrar) usa um <strong>se</strong> para decidir a transição."
    },
    {
     "t": "p",
     "h": "Ao apertar ▶️ Rodar, o portal <strong>faz os eventos acontecerem</strong> na ordem mostrada em cima do editor, como se alguém apertasse os botões."
    }
   ],
   "termos": [
    {
     "termo": "Evento",
     "rotulo": "<strong>Evento</strong>",
     "def": "algo que acontece e o programa percebe: um clique, uma tecla, uma mensagem que chega, um sensor que detecta."
    },
    {
     "termo": "Programação por eventos",
     "rotulo": "<strong>Programação por eventos</strong>",
     "def": "jeito de programar em que o programa espera os eventos e reage a cada um."
    },
    {
     "termo": "Tratador de evento",
     "rotulo": "<strong>Tratador de evento</strong>",
     "def": "o conjunto de blocos que roda quando aquele evento acontece."
    },
    {
     "termo": "Sensor",
     "rotulo": "<strong>Sensor</strong>",
     "def": "peça que percebe algo do mundo (movimento, luz, temperatura) e gera um evento."
    },
    {
     "termo": "Notificação",
     "rotulo": "<strong>Notificação</strong>",
     "def": "aviso que o celular mostra quando um evento acontece, como uma mensagem nova."
    }
   ],
   "ondeUso": {
    "itens": [
     "Todo <strong>aplicativo de celular</strong> é programado por eventos: tocar, arrastar, chegar mensagem.",
     "A <strong>porta automática</strong> do mercado reage ao <strong>sensor</strong> de movimento.",
     "Nos <strong>jogos</strong>, cada botão do controle é um evento com o seu tratador."
    ],
    "reflexao": "Pense e escreva: num aplicativo que você usa, cite um evento e o que o aplicativo faz quando ele acontece."
   },
   "alertas": [],
   "vf": [
    "Na programação por eventos, o programa espera algo acontecer e então reage.",
    "O tratador de evento roda uma vez só, mesmo que o evento aconteça várias vezes.",
    "Tocar no ícone do aplicativo é um evento.",
    "Um sensor de movimento pode gerar um evento.",
    "Uma variável pode guardar o estado de um autômato no programa."
   ],
   "resumo": {
    "texto": "Na **programação por eventos**, o programa **espera** e **reage**: cada **evento** (clique, tecla, mensagem, **sensor**) tem um **tratador**, os blocos que rodam toda vez que ele acontece. No editor, é o bloco **“quando acontecer … faça …”**. Juntando eventos e uma variável de **estado**, programamos um **autômato**, como a catraca.",
    "chaves": [
     "evento",
     "programação por eventos",
     "tratador de evento",
     "sensor",
     "notificação"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🚦",
   "titulo": "Missão 7 – Extra: O semáforo",
   "objetivo": "modelar o semáforo como autômato e programá-lo com eventos de tempo, incluindo o botão de pedestre.",
   "comecar": [
    {
     "t": "p",
     "h": "O <strong>semáforo</strong> é um autômato com 3 estados. A entrada é o <strong>tempo</strong>: cada vez que o tempo do estado acaba (evento <strong>tique</strong>), ele passa para o próximo."
    },
    {
     "t": "tabela",
     "cab": [
      "Estado atual",
      "Entrada",
      "Próximo estado"
     ],
     "linhas": [
      [
       "🟢 Verde",
       "⏱️ tique",
       "🟡 Amarelo"
      ],
      [
       "🟡 Amarelo",
       "⏱️ tique",
       "🔴 Vermelho"
      ],
      [
       "🔴 Vermelho",
       "⏱️ tique",
       "🟢 Verde"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O ciclo se repete para sempre: verde → amarelo → vermelho → verde…"
    },
    {
     "t": "p",
     "h": "<strong>O botão de pedestre:</strong> muitos semáforos têm um botão para quem atravessa. Uma regra comum: se o semáforo estiver <strong>verde</strong> e o pedestre apertar o botão, ele vai <strong>para o amarelo</strong> (para depois ficar vermelho e o pedestre atravessar). Em amarelo ou vermelho, o botão <strong>não muda nada</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Estado atual",
      "Entrada",
      "Próximo estado"
     ],
     "linhas": [
      [
       "🟢 Verde",
       "🚶 botão",
       "🟡 Amarelo"
      ],
      [
       "🟡 Amarelo",
       "🚶 botão",
       "🟡 Amarelo"
      ],
      [
       "🔴 Vermelho",
       "🚶 botão",
       "🔴 Vermelho"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>No programa:</strong> uma variável <strong>luz</strong> guarda o estado; o evento <strong>tique</strong> usa <strong>se … senão</strong> para escolher o próximo estado; o evento <strong>botão</strong> só muda quando a luz é verde."
    }
   ],
   "termos": [
    {
     "termo": "Ciclo",
     "rotulo": "<strong>Ciclo</strong> (no semáforo)",
     "def": "sequência de estados que se repete sempre na mesma ordem."
    },
    {
     "termo": "Tique",
     "rotulo": "<strong>Tique</strong>",
     "def": "aqui, o evento de tempo que avisa que o tempo daquele estado acabou."
    },
    {
     "termo": "Temporizador",
     "rotulo": "<strong>Temporizador</strong> (<em>timer</em>)",
     "def": "peça ou programa que conta o tempo e gera o evento quando ele acaba."
    },
    {
     "termo": "Pedestre",
     "rotulo": "<strong>Pedestre</strong>",
     "def": "quem anda a pé e atravessa a rua."
    }
   ],
   "ondeUso": {
    "itens": [
     "Os <strong>semáforos</strong> da cidade, com ou sem botão de pedestre.",
     "O <strong>micro-ondas</strong> e o <strong>despertador</strong> usam temporizador: quando o tempo acaba, um evento acontece (apita).",
     "Nos <strong>jogos</strong>, o tempo de cada fase é controlado por temporizadores."
    ],
    "reflexao": "Pense e escreva: se você fosse programar um semáforo para a frente da escola, mudaria alguma regra? Qual?"
   },
   "alertas": [],
   "vf": [
    "O semáforo tem os estados verde, amarelo e vermelho.",
    "Depois do amarelo, com um tique, vem o verde.",
    "O temporizador gera um evento quando o tempo acaba.",
    "Na regra desta missão, o botão de pedestre muda o semáforo verde para amarelo.",
    "O ciclo do semáforo se repete sempre na mesma ordem."
   ],
   "resumo": {
    "texto": "O **semáforo** é um autômato de 3 estados num **ciclo**: verde → amarelo → vermelho → verde. A entrada é o **tique** do **temporizador**. O **botão de pedestre**, na regra desta missão, leva o verde para o amarelo e não muda os outros estados. No programa, a variável **luz** guarda o estado e cada evento usa **se … senão** para fazer a transição.",
    "chaves": [
     "semáforo",
     "ciclo",
     "tique",
     "temporizador",
     "pedestre"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "🏫",
   "titulo": "Missão 8 – Extra: O mapa da escola em grafo",
   "objetivo": "transformar a planta da escola num grafo com pesos e usá-lo para achar caminhos curtos e o lugar mais conectado.",
   "comecar": [
    {
     "t": "p",
     "h": "Vamos transformar a nossa escola num grafo! Cada <strong>lugar</strong> vira um <strong>vértice</strong> e cada <strong>corredor</strong> vira uma <strong>aresta</strong>. O <strong>peso</strong> é o tempo de caminhada, em minutos."
    },
    {
     "t": "tabela",
     "cab": [
      "Corredor (aresta)",
      "Minutos"
     ],
     "linhas": [
      [
       "Portão — Pátio",
       "1"
      ],
      [
       "Pátio — Cantina",
       "1"
      ],
      [
       "Pátio — Sala de Informática",
       "2"
      ],
      [
       "Pátio — Biblioteca",
       "2"
      ],
      [
       "Sala de Informática — Biblioteca",
       "1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Perguntas que o grafo responde:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Pergunta",
      "Como achar",
      "Resposta"
     ],
     "linhas": [
      [
       "Qual lugar é o mais conectado?",
       "O vértice de <strong>maior grau</strong>",
       "Pátio (grau 4)"
      ],
      [
       "Caminho mais curto do Portão à Informática?",
       "Menor soma",
       "Portão → Pátio → Informática = 1 + 2 = <strong>3</strong>"
      ],
      [
       "E se o corredor Pátio–Informática estiver em reforma?",
       "Tirar a aresta e procurar de novo",
       "Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = <strong>4</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Quando uma aresta <strong>some</strong> (rua interditada, corredor em reforma), o caminho mais curto <strong>muda</strong>. O aplicativo de mapa faz isso quando uma rua é fechada."
    },
    {
     "t": "p",
     "h": "<strong>Para que serve o grafo da escola:</strong> planejar a <strong>rota de fuga</strong> (o caminho mais curto até a saída), decidir onde colocar o <strong>bebedouro</strong> (no vértice de maior grau, por onde mais gente passa) e orientar visitantes."
    }
   ],
   "termos": [
    {
     "termo": "Planta",
     "rotulo": "<strong>Planta</strong>",
     "def": "o desenho da escola vista de cima, com as salas e os corredores."
    },
    {
     "termo": "Mais conectado",
     "rotulo": "<strong>Mais conectado</strong>",
     "def": "o vértice com maior grau, ligado a mais lugares."
    },
    {
     "termo": "Rota de fuga",
     "rotulo": "<strong>Rota de fuga</strong>",
     "def": "o caminho mais curto e seguro até a saída numa emergência."
    },
    {
     "termo": "Interditar",
     "rotulo": "<strong>Interditar</strong>",
     "def": "fechar uma rua ou um corredor; no grafo, é tirar a aresta."
    }
   ],
   "ondeUso": {
    "itens": [
     "Os <strong>mapas de emergência</strong> dos prédios mostram a rota de fuga até a saída.",
     "Os <strong>shoppings</strong> e <strong>aeroportos</strong> têm mapas que indicam o caminho mais curto até cada loja ou portão.",
     "O <strong>aplicativo de mapa</strong> recalcula a rota quando uma rua é interditada."
    ],
    "reflexao": "Pense e escreva: no grafo da escola, onde você colocaria o bebedouro? Por quê?"
   },
   "alertas": [],
   "vf": [
    "No grafo da escola, cada lugar é um vértice e cada corredor é uma aresta.",
    "O Pátio é o lugar mais conectado, com grau 4.",
    "O caminho mais curto do Portão até a Informática leva 4 minutos.",
    "Quando uma aresta some, o caminho mais curto pode mudar.",
    "A rota de fuga é o caminho mais longo até a saída."
   ],
   "resumo": {
    "texto": "No **grafo da escola**, cada lugar é um **vértice** e cada corredor, uma **aresta** com **peso** (minutos). O vértice de **maior grau** é o **mais conectado** (Pátio). O **caminho mais curto** é o de menor soma (Portão → Pátio → Informática = 3). Se uma aresta for **interditada**, o caminho mais curto muda (4). Serve para a **rota de fuga**, para orientar visitantes e para planejar a escola.",
    "chaves": [
     "planta",
     "mais conectado",
     "rota de fuga",
     "interditar",
     "grafo"
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
  }
 ]
});
