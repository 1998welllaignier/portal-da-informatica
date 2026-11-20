/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-7ano-2027-2bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-7ano-2027-2bim", {
 "titulo": "Apostila de Informática – 7º Ano – 2º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Bem-vindo ao 2º bimestre! O tema agora é <strong>Grafos e projetos</strong>: o jeito que o computador usa para guardar mapas, caminhos e amizades, e um projeto feito em equipe. Você vai cumprir <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🕸️ Missão 1 – Grafos: pontos e ligações",
     "Pensamento Computacional"
    ],
    [
     "🧭 Missão 2 – O caminho mais curto",
     "Pensamento Computacional"
    ],
    [
     "🤝 Missão 3 – Grafos de amizades",
     "Pensamento Computacional"
    ],
    [
     "🗂️ Missão 4 – Escolher a estrutura certa",
     "Pensamento Computacional"
    ],
    [
     "📋 Missão 5 – Projeto em equipe: planejar",
     "Pensamento Computacional"
    ],
    [
     "🛠️ Missão 6 – Projeto em equipe: construir e apresentar",
     "Pensamento Computacional"
    ],
    [
     "🗺️ Missão 7 – Extra: Mapa de Curionópolis em grafo",
     "Pensamento Computacional"
    ],
    [
     "🌀 Missão 8 – Extra: Labirintos",
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
   "h": "<strong>Ícones da apostila:</strong>"
  },
  {
   "t": "lista",
   "ord": false,
   "itens": [
    {
     "nivel": 0,
     "h": "💡 <strong>Para começar</strong> – a explicação do dia"
    },
    {
     "nivel": 0,
     "h": "📖 <strong>O que significa?</strong> – as palavras novas, explicadas"
    },
    {
     "nivel": 0,
     "h": "🌎 <strong>Onde eu uso isso?</strong> – onde o assunto aparece na sua vida"
    },
    {
     "nivel": 0,
     "h": "🎯 <strong>Missão</strong> – as atividades que você faz no portal; ele confere na hora"
    },
    {
     "nivel": 0,
     "h": "✅ <strong>Perguntas rápidas</strong> – verdadeiro ou falso para conferir"
    },
    {
     "nivel": 0,
     "h": "🧠 <strong>Resumo da Aula</strong> – ajuda a estudar para a prova"
    }
   ]
  },
  {
   "t": "p",
   "h": "🔎 <strong>Todas as respostas estão na apostila:</strong> leia o <strong>💡 Para começar</strong> e o <strong>📖 O que significa?</strong>. Errou? Leia de novo com calma, peça uma <strong>💡 Dica</strong> ou toque em <strong>🤖 Me ajuda, robô!</strong>. Você consegue fazer tudo sozinho!"
  },
  {
   "t": "p",
   "h": "<strong>Regra de ouro:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor."
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "🕸️",
   "titulo": "Missão 1 – Grafos: pontos e ligações",
   "objetivo": "representar lugares, pessoas e computadores como um grafo (vértices ligados por arestas) e ler as informações dele.",
   "comecar": [
    {
     "t": "p",
     "h": "O computador <strong>não enxerga</strong> um mapa, uma turma ou uma rede como nós. Ele guarda tudo de um jeito bem simples: <strong>pontos ligados por linhas</strong>. Esse desenho se chama <strong>grafo</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Parte do grafo",
      "O que é",
      "Exemplo no mapa da cidade"
     ],
     "linhas": [
      [
       "⚪ Vértice (ou nó)",
       "Um ponto: um lugar, uma pessoa, um computador",
       "A escola, a praça, o mercado"
      ],
      [
       "➖ Aresta",
       "Uma linha que liga dois vértices",
       "A rua que liga a escola à praça"
      ],
      [
       "🔢 Peso",
       "Um número escrito na aresta: distância, tempo ou preço",
       "5 minutos de caminhada"
      ],
      [
       "🔗 Grau",
       "Quantas arestas chegam a um vértice",
       "A praça tem grau 3: liga-se a 3 lugares"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como ler um grafo:</strong> escreva as ligações numa tabela. Cada linha da tabela é uma aresta."
    },
    {
     "t": "tabela",
     "cab": [
      "Aresta",
      "Peso (minutos)"
     ],
     "linhas": [
      [
       "Escola – Praça",
       "5"
      ],
      [
       "Praça – Mercado",
       "4"
      ],
      [
       "Escola – Mercado",
       "12"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Nesse grafo há <strong>3 vértices</strong> (Escola, Praça e Mercado) e <strong>3 arestas</strong>. A Praça liga-se à Escola e ao Mercado: o <strong>grau</strong> dela é <strong>2</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Onde nasceu a ideia:</strong> em 1736, o matemático Leonhard Euler estudou as <strong>7 pontes</strong> da cidade de Königsberg. Ele desenhou as margens do rio como pontos e as pontes como linhas, e provou que <strong>não dava</strong> para passear atravessando cada ponte uma vez só. Foi o primeiro grafo da história da Matemática."
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "desenho (ou modelo) feito de pontos ligados por linhas, que mostra <strong>o que está ligado a quê</strong>. Onde se vê: mapas, redes de amigos, rotas de ônibus, a rede de computadores."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong> (também chamado de <strong>nó</strong>)",
     "def": "cada ponto do grafo; pode ser um lugar, uma pessoa ou um computador."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada linha que liga dois vértices; mostra que eles estão conectados (uma rua, uma amizade, um cabo)."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "o número escrito numa aresta; pode ser distância (metros), tempo (minutos) ou preço (reais)."
    },
    {
     "termo": "Grau",
     "rotulo": "<strong>Grau</strong>",
     "def": "quantas arestas chegam a um vértice; mostra quantas conexões ele tem."
    },
    {
     "termo": "Vizinho",
     "rotulo": "<strong>Vizinho</strong>",
     "def": "vértice ligado diretamente a outro por uma aresta."
    },
    {
     "termo": "Wi-Fi",
     "rotulo": "<strong>Wi-Fi</strong>",
     "def": "internet sem fio."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong>",
     "def": "programa do celular ou do computador."
    },
    {
     "termo": "Algoritmo",
     "rotulo": "<strong>Algoritmo</strong>",
     "def": "uma sequência de passos, em ordem, para resolver um problema."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong>",
     "def": "programa do celular ou do computador."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong>",
     "def": "programa do celular ou do computador."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong>",
     "def": "programa do celular ou do computador."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>aplicativo de mapa</strong>: cada esquina é um vértice e cada rua é uma aresta.",
     "Na <strong>rede de computadores</strong> da escola: cada computador é um vértice e cada cabo (ou sinal de Wi-Fi) é uma aresta.",
     "Nas <strong>linhas de ônibus</strong>: cada parada é um vértice e o trecho entre duas paradas é uma aresta."
    ],
    "reflexao": ""
   },
   "alertas": [
    "Os computadores são usados por todos: <strong>nunca apague nem mexa nos arquivos dos colegas</strong>."
   ],
   "vf": [
    "Um grafo é formado por vértices (pontos) e arestas (linhas).",
    "O peso de uma aresta só pode ser a distância em metros.",
    "O grau de um vértice é o número de arestas que chegam até ele.",
    "Num mapa em forma de grafo, as ruas são os vértices.",
    "Leonhard Euler usou um grafo para estudar as 7 pontes de Königsberg."
   ],
   "resumo": {
    "texto": "Um **grafo** mostra o que está ligado a quê. Os **vértices** são os pontos (lugares, pessoas, computadores) e as **arestas** são as linhas que os ligam. O **peso** é o número da aresta (distância, tempo ou preço) e o **grau** é quantas arestas chegam a um vértice. A ideia nasceu com Euler e as pontes de Königsberg, em 1736.",
    "chaves": [
     "grafo",
     "vértice",
     "nó",
     "aresta",
     "peso",
     "grau",
     "vizinho"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🧭",
   "titulo": "Missão 2 – O caminho mais curto",
   "objetivo": "encontrar caminhos num grafo e descobrir o caminho mais curto somando os pesos, como faz o aplicativo de mapa.",
   "comecar": [
    {
     "t": "p",
     "h": "Um <strong>caminho</strong> é uma sequência de vértices ligados por arestas, um depois do outro: <strong>Casa → Padaria → Escola</strong>. Para saber quanto um caminho “custa”, <strong>somamos os pesos</strong> das arestas dele."
    },
    {
     "t": "p",
     "h": "Veja o grafo do bairro (pesos em minutos de caminhada):"
    },
    {
     "t": "tabela",
     "cab": [
      "Aresta",
      "Peso (minutos)"
     ],
     "linhas": [
      [
       "Casa – Padaria",
       "3"
      ],
      [
       "Padaria – Escola",
       "2"
      ],
      [
       "Casa – Praça",
       "4"
      ],
      [
       "Praça – Escola",
       "4"
      ],
      [
       "Casa – Escola",
       "9"
      ]
     ]
    },
    {
     "t": "tabela",
     "cab": [
      "Caminho",
      "Conta",
      "Total"
     ],
     "linhas": [
      [
       "Casa → Escola (rua direta)",
       "9",
       "<strong>9 minutos</strong>"
      ],
      [
       "Casa → Padaria → Escola",
       "3 + 2",
       "<strong>5 minutos</strong> ✅"
      ],
      [
       "Casa → Praça → Escola",
       "4 + 4",
       "<strong>8 minutos</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O mais curto é o de menor soma</strong>, e não o de menos paradas: a rua direta tem uma aresta só, mas leva 9 minutos."
    },
    {
     "t": "p",
     "h": "<strong>Como achar o caminho mais curto:</strong> 1. liste todos os caminhos possíveis; 2. some os pesos de cada um; 3. escolha o <strong>menor total</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Quando uma rua fecha:</strong> se a aresta Padaria – Escola estiver interditada, o caminho mais curto muda para Casa → Praça → Escola (8 minutos). É isso que o aplicativo de mapa faz quando aparece um bloqueio."
    },
    {
     "t": "p",
     "h": "<strong>Quem inventou o jeito rápido:</strong> em 1956, o holandês <strong>Edsger Dijkstra</strong> criou um algoritmo que acha o caminho mais curto sem precisar testar todos os caminhos um por um. Os aplicativos de mapa usam ideias que vieram dele."
    }
   ],
   "termos": [
    {
     "termo": "Caminho",
     "rotulo": "<strong>Caminho</strong>",
     "def": "sequência de vértices ligados por arestas, um depois do outro."
    },
    {
     "termo": "Caminho mais curto",
     "rotulo": "<strong>Caminho mais curto</strong>",
     "def": "o caminho cuja <strong>soma dos pesos</strong> é a menor de todas."
    },
    {
     "termo": "Soma dos pesos",
     "rotulo": "<strong>Soma dos pesos</strong>",
     "def": "o total de um caminho; somamos o peso de cada aresta que ele usa."
    },
    {
     "termo": "Rota",
     "rotulo": "<strong>Rota</strong>",
     "def": "o caminho escolhido para ir de um lugar a outro."
    },
    {
     "termo": "Interditada",
     "rotulo": "<strong>Interditada</strong>",
     "def": "fechada; a aresta não pode ser usada."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>aplicativo de mapa</strong> e no <strong>aplicativo de transporte</strong>, que calculam a rota mais rápida até um endereço.",
     "No <strong>entregador</strong> de comida, que escolhe o caminho que gasta menos tempo.",
     "No <strong>ônibus escolar</strong>, que passa pelas casas num caminho que gasta menos tempo e combustível."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Para saber quanto um caminho custa, somamos os pesos das arestas dele.",
    "O caminho com menos paradas é sempre o mais curto.",
    "No bairro do exemplo, Casa → Padaria → Escola leva 5 minutos.",
    "Quando uma rua é interditada, o caminho mais curto pode mudar.",
    "O algoritmo de Dijkstra acha o caminho mais curto."
   ],
   "resumo": {
    "texto": "Um **caminho** passa de vértice em vértice pelas arestas. Para saber o total, **somamos os pesos**. O **caminho mais curto** é o de **menor soma**, que nem sempre é o de menos paradas. Se uma aresta é **interditada**, o caminho mais curto pode mudar. Edsger Dijkstra criou, em 1956, um algoritmo rápido para achar o caminho mais curto.",
    "chaves": [
     "caminho",
     "caminho mais curto",
     "soma dos pesos",
     "rota",
     "Dijkstra"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🤝",
   "titulo": "Missão 3 – Grafos de amizades",
   "objetivo": "usar grafos para representar pessoas e amizades e entender como as redes sociais sugerem amigos.",
   "comecar": [
    {
     "t": "p",
     "h": "Grafos também mostram <strong>pessoas</strong>. Cada pessoa é um <strong>vértice</strong> e cada amizade é uma <strong>aresta</strong>. Esse grafo não tem peso: só importa <strong>quem está ligado a quem</strong>."
    },
    {
     "t": "p",
     "h": "Veja a rede de amigos de uma turma:"
    },
    {
     "t": "tabela",
     "cab": [
      "Amizade (aresta)"
     ],
     "linhas": [
      [
       "Ana – Bia"
      ],
      [
       "Ana – Caio"
      ],
      [
       "Ana – Davi"
      ],
      [
       "Bia – Caio"
      ],
      [
       "Davi – Eva"
      ]
     ]
    },
    {
     "t": "tabela",
     "cab": [
      "Pessoa",
      "Amigos",
      "Grau"
     ],
     "linhas": [
      [
       "Ana",
       "Bia, Caio, Davi",
       "3"
      ],
      [
       "Bia",
       "Ana, Caio",
       "2"
      ],
      [
       "Caio",
       "Ana, Bia",
       "2"
      ],
      [
       "Davi",
       "Ana, Eva",
       "2"
      ],
      [
       "Eva",
       "Davi",
       "1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Quem tem mais conexões?</strong> É quem tem o <strong>maior grau</strong>: a Ana (3)."
    },
    {
     "t": "p",
     "h": "<strong>Amigo de amigo:</strong> a Eva não é amiga da Ana, mas as duas têm um amigo em comum, o Davi. No grafo, elas estão a <strong>2 passos</strong> de distância. É assim que as <strong>redes sociais</strong> sugerem “pessoas que você talvez conheça”: procuram no grafo os <strong>amigos dos seus amigos</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Cuidado:</strong> a sugestão da rede social <strong>não quer dizer</strong> que a pessoa é de confiança. Só aceitar quem eu conheço de verdade: essa é a regra."
    }
   ],
   "termos": [
    {
     "termo": "Rede social",
     "rotulo": "<strong>Rede social</strong>",
     "def": "um grande grafo de pessoas (vértices) ligadas por amizades ou por quem segue quem (arestas)."
    },
    {
     "termo": "Grau",
     "rotulo": "<strong>Grau</strong>",
     "def": "quantas amizades (arestas) uma pessoa tem no grafo."
    },
    {
     "termo": "Amigo em comum",
     "rotulo": "<strong>Amigo em comum</strong>",
     "def": "pessoa ligada a duas outras ao mesmo tempo."
    },
    {
     "termo": "Distância",
     "rotulo": "<strong>Distância</strong> (num grafo sem peso)",
     "def": "o número de arestas do caminho mais curto entre duas pessoas."
    },
    {
     "termo": "Sugestão de amizade",
     "rotulo": "<strong>Sugestão de amizade</strong>",
     "def": "quando a rede social mostra os amigos dos seus amigos."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nas <strong>redes sociais</strong>, quando aparece “pessoas que você talvez conheça”.",
     "No <strong>grupo da turma</strong> no aplicativo de mensagens: todos ligados ao mesmo grupo.",
     "Na <strong>pesquisa de saúde</strong>: os cientistas usam grafos de contatos para entender como uma gripe passa de pessoa para pessoa."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num grafo de amizades, cada pessoa é um vértice e cada amizade é uma aresta.",
    "Quem tem o menor grau é quem tem mais amigos.",
    "As redes sociais sugerem amigos procurando os amigos dos seus amigos.",
    "Se a rede social sugeriu alguém, essa pessoa é sempre de confiança.",
    "No exemplo, a Eva e a Ana têm o Davi como amigo em comum."
   ],
   "resumo": {
    "texto": "Num **grafo de amizades**, as pessoas são vértices e as amizades são arestas. O **grau** mostra quantos amigos cada um tem. Duas pessoas com um **amigo em comum** estão a 2 passos de distância, e é assim que as **redes sociais** sugerem amigos. Sugestão não é garantia de confiança: aceite só quem você conhece.",
    "chaves": [
     "rede social",
     "grau",
     "amigo em comum",
     "distância",
     "sugestão de amizade"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🗂️",
   "titulo": "Missão 4 – Escolher a estrutura certa",
   "objetivo": "escolher o melhor jeito de organizar os dados de um problema: lista, tabela ou grafo.",
   "comecar": [
    {
     "t": "p",
     "h": "Antes de programar, o programador decide <strong>como guardar os dados</strong>. Esse jeito de organizar se chama <strong>estrutura de dados</strong>. Escolher bem deixa o programa simples; escolher mal deixa tudo difícil."
    },
    {
     "t": "tabela",
     "cab": [
      "Estrutura",
      "Como é",
      "Serve para",
      "Exemplo"
     ],
     "linhas": [
      [
       "📝 Lista",
       "Itens um depois do outro, em ordem",
       "Guardar coisas em sequência",
       "Lista de compras, fila da cantina, playlist"
      ],
      [
       "🗂️ Tabela (registros)",
       "Linhas e colunas: cada linha é a ficha de uma coisa",
       "Guardar várias informações de cada item",
       "Boletim (aluno, nota, faltas), agenda de contatos"
      ],
      [
       "🕸️ Grafo",
       "Vértices ligados por arestas",
       "Mostrar o que está ligado a quê",
       "Mapa da cidade, rede de amigos, rede de computadores"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como escolher:</strong> faça três perguntas."
    },
    {
     "t": "tabela",
     "cab": [
      "Pergunta",
      "Se a resposta for sim…"
     ],
     "linhas": [
      [
       "A ordem dos itens importa e cada item tem só uma informação?",
       "📝 <strong>Lista</strong>"
      ],
      [
       "Cada item tem <strong>várias</strong> informações (nome, idade, telefone)?",
       "🗂️ <strong>Tabela</strong>"
      ],
      [
       "O importante é <strong>quem está ligado a quem</strong>?",
       "🕸️ <strong>Grafo</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> para guardar as músicas na ordem em que vão tocar, uso uma <strong>lista</strong>. Para guardar o nome, a turma e a nota de cada aluno, uso uma <strong>tabela</strong>. Para guardar quais cidades têm estrada entre si, uso um <strong>grafo</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Estrutura de dados",
     "rotulo": "<strong>Estrutura de dados</strong>",
     "def": "o jeito de organizar os dados dentro do programa."
    },
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "itens guardados um depois do outro, em ordem."
    },
    {
     "termo": "Tabela",
     "rotulo": "<strong>Tabela</strong>",
     "def": "dados em linhas e colunas; cada linha é um <strong>registro</strong>."
    },
    {
     "termo": "Registro",
     "rotulo": "<strong>Registro</strong>",
     "def": "a ficha de uma coisa, com várias informações (campos)."
    },
    {
     "termo": "Campo",
     "rotulo": "<strong>Campo</strong>",
     "def": "cada informação de um registro, como “nome” ou “nota”."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>playlist</strong> de músicas é uma lista: uma depois da outra.",
     "A <strong>agenda de contatos</strong> do celular é uma tabela: cada contato tem nome, telefone e foto.",
     "O <strong>aplicativo de mapa</strong> guarda as ruas num grafo."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Estrutura de dados é o jeito de organizar os dados dentro do programa.",
    "Para guardar o nome, a turma e a nota de cada aluno, o melhor é um grafo.",
    "Uma playlist de músicas é um exemplo de lista.",
    "Na tabela, cada linha é um registro com vários campos.",
    "O grafo é a melhor estrutura quando o importante é quem está ligado a quem."
   ],
   "resumo": {
    "texto": "A **estrutura de dados** é o jeito de organizar os dados. A **lista** guarda itens em ordem; a **tabela** guarda **registros** com vários **campos**; o **grafo** mostra o que está ligado a quê. Para escolher, pergunte: importa a ordem? Cada item tem várias informações? Importam as ligações?",
    "chaves": [
     "estrutura de dados",
     "lista",
     "tabela",
     "registro",
     "campo",
     "grafo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "📋",
   "titulo": "Missão 5 – Projeto em equipe: planejar",
   "objetivo": "planejar um projeto em equipe: definir o problema, dividir as tarefas e organizar o tempo.",
   "comecar": [
    {
     "t": "p",
     "h": "Nesta missão e na próxima, a turma vai fazer um <strong>projeto em equipe</strong>: o <strong>Guia de Rotas da Escola</strong>, um grafo que mostra os lugares da escola e os caminhos mais curtos entre eles, para ajudar quem chega à escola pela primeira vez."
    },
    {
     "t": "p",
     "h": "Todo projeto bem feito começa com um <strong>plano</strong>. As etapas são sempre estas:"
    },
    {
     "t": "tabela",
     "cab": [
      "Etapa",
      "Pergunta",
      "No nosso projeto"
     ],
     "linhas": [
      [
       "1. Problema",
       "O que queremos resolver?",
       "Aluno novo se perde na escola"
      ],
      [
       "2. Ideia",
       "Como vamos resolver?",
       "Um guia em forma de grafo"
      ],
      [
       "3. Dados",
       "De que informações precisamos?",
       "Os lugares e o tempo entre eles"
      ],
      [
       "4. Tarefas",
       "Quem faz o quê?",
       "Cada um com um papel"
      ],
      [
       "5. Prazo",
       "Até quando?",
       "Construir na próxima missão"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Os papéis da equipe:</strong> cada pessoa tem uma função, e todas são importantes."
    },
    {
     "t": "tabela",
     "cab": [
      "Papel",
      "O que faz"
     ],
     "linhas": [
      [
       "🧭 Organizador",
       "Cuida do tempo e lembra a equipe das tarefas"
      ],
      [
       "🔎 Pesquisador",
       "Junta os dados: lugares e tempos"
      ],
      [
       "🛠️ Construtor",
       "Monta o grafo no portal"
      ],
      [
       "🧪 Testador",
       "Confere se os caminhos estão certos"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Combinados de equipe:</strong> ouvir todos, dividir o trabalho com justiça, ajudar quem travou e decidir juntos. Se duas pessoas querem o mesmo papel, a equipe conversa e decide junto, ou reveza. Se alguém faltar, a equipe redivide a tarefa dele. Projeto em equipe é como um <strong>grafo</strong>: cada pessoa é um vértice, e o trabalho só funciona com as ligações entre elas."
    }
   ],
   "termos": [
    {
     "termo": "Projeto",
     "rotulo": "<strong>Projeto</strong>",
     "def": "trabalho com um objetivo, etapas e um prazo para terminar."
    },
    {
     "termo": "Planejar",
     "rotulo": "<strong>Planejar</strong>",
     "def": "decidir antes o que fazer, quem faz e até quando."
    },
    {
     "termo": "Papel",
     "rotulo": "<strong>Papel</strong>",
     "def": "a função de cada pessoa na equipe."
    },
    {
     "termo": "Prazo",
     "rotulo": "<strong>Prazo</strong>",
     "def": "a data ou o tempo limite para terminar uma tarefa."
    },
    {
     "termo": "Cronograma",
     "rotulo": "<strong>Cronograma</strong>",
     "def": "a lista das tarefas com os prazos de cada uma."
    }
   ],
   "ondeUso": {
    "itens": [
     "Num <strong>trabalho em grupo</strong> da escola: cada um faz uma parte.",
     "Na <strong>festa junina</strong> da escola: uma equipe cuida da comida, outra da decoração, outra das brincadeiras.",
     "As <strong>empresas de jogos</strong> planejam cada jogo com equipes de programadores, artistas e testadores."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Todo projeto bem feito começa com um plano.",
    "No projeto em equipe, uma pessoa faz tudo e as outras só olham.",
    "O testador confere se os caminhos do grafo estão certos.",
    "Prazo é o tempo limite para terminar uma tarefa.",
    "Ouvir todos e decidir juntos é um bom combinado de equipe."
   ],
   "resumo": {
    "texto": "Um **projeto** tem objetivo, etapas e **prazo**. Planejar é decidir o **problema**, a **ideia**, os **dados**, as **tarefas** e o **prazo**. Cada pessoa tem um **papel** (organizador, pesquisador, construtor, testador), e os combinados fazem a equipe funcionar.",
    "chaves": [
     "projeto",
     "planejar",
     "papel",
     "prazo",
     "cronograma",
     "equipe"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🛠️",
   "titulo": "Missão 6 – Projeto em equipe: construir e apresentar",
   "objetivo": "construir o Guia de Rotas da Escola em equipe, testar, melhorar e apresentar o resultado.",
   "comecar": [
    {
     "t": "p",
     "h": "Hoje a equipe <strong>constrói</strong> o Guia de Rotas da Escola. Os dados que o pesquisador juntou:"
    },
    {
     "t": "tabela",
     "cab": [
      "Aresta",
      "Peso (minutos)"
     ],
     "linhas": [
      [
       "Portão – Pátio",
       "1"
      ],
      [
       "Pátio – Cantina",
       "1"
      ],
      [
       "Pátio – Sala de Informática",
       "2"
      ],
      [
       "Pátio – Biblioteca",
       "2"
      ],
      [
       "Sala de Informática – Biblioteca",
       "1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Construir, testar e melhorar:</strong> projeto bom passa por um ciclo."
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "🛠️ 1. Construir",
       "Montar o grafo com os dados"
      ],
      [
       "🧪 2. Testar",
       "Conferir os caminhos mais curtos"
      ],
      [
       "💬 3. Ouvir",
       "Pedir a opinião de quem vai usar"
      ],
      [
       "🔁 4. Melhorar",
       "Corrigir e fazer a nova versão"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Cada volta do ciclo gera uma <strong>versão</strong> melhor. Os aplicativos do celular fazem isso o tempo todo: por isso recebem <strong>atualizações</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Apresentar:</strong> no fim, a equipe mostra o projeto para a turma em poucos minutos: <strong>1.</strong> qual era o problema; <strong>2.</strong> o que fizemos; <strong>3.</strong> como usar; <strong>4.</strong> o que aprendemos."
    }
   ],
   "termos": [
    {
     "termo": "Construir",
     "rotulo": "<strong>Construir</strong>",
     "def": "montar o projeto com os dados planejados."
    },
    {
     "termo": "Testar",
     "rotulo": "<strong>Testar</strong>",
     "def": "conferir se o projeto funciona do jeito certo."
    },
    {
     "termo": "Versão",
     "rotulo": "<strong>Versão</strong>",
     "def": "cada etapa do projeto, melhorada em relação à anterior."
    },
    {
     "termo": "Opinião",
     "rotulo": "<strong>Opinião</strong> (ou <strong>retorno</strong>)",
     "def": "o que os usuários dizem sobre o projeto, para melhorar."
    },
    {
     "termo": "Apresentação",
     "rotulo": "<strong>Apresentação</strong>",
     "def": "mostrar o projeto para outras pessoas, de forma curta e clara."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>atualizações</strong> do celular são novas versões, feitas depois de ouvir os usuários.",
     "Na <strong>feira de ciências</strong>, cada equipe apresenta o projeto para os visitantes.",
     "No <strong>jogo</strong> que recebe uma fase nova: os criadores testaram e melhoraram antes."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "O ciclo do projeto é construir, testar, ouvir e melhorar.",
    "Depois de construir, não é preciso testar.",
    "Cada volta do ciclo gera uma versão melhor.",
    "As atualizações dos aplicativos são novas versões.",
    "Na apresentação, a equipe conta o problema, o que fez, como usar e o que aprendeu."
   ],
   "resumo": {
    "texto": "A equipe **constrói** o projeto, **testa**, **ouve** a opinião de quem usa e **melhora**: cada volta gera uma **versão** melhor, como as atualizações do celular. No fim, a **apresentação** conta o problema, o que foi feito, como usar e o que a equipe aprendeu.",
    "chaves": [
     "construir",
     "testar",
     "versão",
     "opinião",
     "apresentação"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🗺️",
   "titulo": "Missão 7 – Extra: Mapa de Curionópolis em grafo",
   "objetivo": "transformar lugares conhecidos da cidade num grafo e usá-lo para planejar caminhos.",
   "comecar": [
    {
     "t": "p",
     "h": "Vamos transformar alguns lugares de <strong>Curionópolis</strong> num grafo. Os tempos são <strong>de mentirinha</strong>, inventados para o exercício: o importante é o jeito de pensar."
    },
    {
     "t": "tabela",
     "cab": [
      "Aresta",
      "Peso (minutos de caminhada)"
     ],
     "linhas": [
      [
       "Escola – Praça",
       "6"
      ],
      [
       "Praça – Igreja",
       "2"
      ],
      [
       "Praça – Feira",
       "4"
      ],
      [
       "Escola – Feira",
       "9"
      ],
      [
       "Feira – Rodoviária",
       "5"
      ],
      [
       "Igreja – Rodoviária",
       "8"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Passo a passo para montar o grafo de qualquer lugar:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1. Escolher os lugares",
       "Cada lugar vira um vértice"
      ],
      [
       "2. Ver o que liga",
       "Cada rua entre dois lugares vira uma aresta"
      ],
      [
       "3. Medir",
       "O tempo ou a distância vira o peso"
      ],
      [
       "4. Usar",
       "Achar caminhos e o caminho mais curto"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> da Escola até a Rodoviária, o caminho Escola → Praça → Feira → Rodoviária soma 6 + 4 + 5 = <strong>15 minutos</strong>. O caminho Escola → Feira → Rodoviária soma 9 + 5 = <strong>14 minutos</strong>: é o mais curto!"
    }
   ],
   "termos": [
    {
     "termo": "Mapa",
     "rotulo": "<strong>Mapa</strong>",
     "def": "desenho de um lugar visto de cima, com ruas e pontos importantes."
    },
    {
     "termo": "Modelo",
     "rotulo": "<strong>Modelo</strong>",
     "def": "um jeito simplificado de representar algo real; o grafo é um modelo do mapa."
    },
    {
     "termo": "Ponto de referência",
     "rotulo": "<strong>Ponto de referência</strong>",
     "def": "lugar conhecido que ajuda a se localizar, como a igreja ou a praça."
    },
    {
     "termo": "Rodoviária",
     "rotulo": "<strong>Rodoviária</strong>",
     "def": "lugar onde os ônibus de viagem chegam e partem."
    }
   ],
   "ondeUso": {
    "itens": [
     "Para explicar a um <strong>visitante</strong> como chegar à escola.",
     "O <strong>mototáxi</strong> e o <strong>entregador</strong> escolhem o caminho mais rápido pela cidade.",
     "A <strong>prefeitura</strong> planeja as rotas do ônibus escolar."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num grafo da cidade, cada lugar vira um vértice.",
    "O grafo é um modelo simplificado do mapa.",
    "No exemplo, o caminho mais curto da Escola até a Rodoviária leva 15 minutos.",
    "Cada rua entre dois lugares vira uma aresta.",
    "O peso pode ser o tempo de caminhada entre dois lugares."
   ],
   "resumo": {
    "texto": "Para fazer o grafo de um lugar: cada **lugar** vira um vértice, cada **rua** vira uma aresta e o **tempo** vira o peso. O grafo é um **modelo** simplificado do mapa e ajuda a achar o caminho mais curto.",
    "chaves": [
     "mapa",
     "modelo",
     "vértice",
     "aresta",
     "peso",
     "ponto de referência"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "🌀",
   "titulo": "Missão 8 – Extra: Labirintos",
   "objetivo": "ver um labirinto como um grafo e usar estratégias para sair dele.",
   "comecar": [
    {
     "t": "p",
     "h": "Todo <strong>labirinto</strong> é um grafo escondido! Cada <strong>cruzamento</strong> (onde dá para escolher o caminho) e cada <strong>beco sem saída</strong> viram <strong>vértices</strong>. Cada <strong>corredor</strong> entre eles vira uma <strong>aresta</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "No labirinto",
      "No grafo"
     ],
     "linhas": [
      [
       "Entrada e saída",
       "Vértice de começo e vértice de fim"
      ],
      [
       "Cruzamento",
       "Vértice com grau 3 ou mais"
      ],
      [
       "Beco sem saída",
       "Vértice com grau 1"
      ],
      [
       "Corredor",
       "Aresta"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Estratégias para sair de um labirinto:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Estratégia",
      "Como funciona"
     ],
     "linhas": [
      [
       "✋ Mão na parede",
       "Encoste a mão numa parede e nunca solte. Funciona nos labirintos em que todas as paredes estão ligadas umas às outras."
      ],
      [
       "🔙 Tentar e voltar",
       "Siga um caminho; se der num beco sem saída, volte até o último cruzamento e tente outro."
      ],
      [
       "🧵 Marcar o caminho",
       "Marque por onde já passou (como um fio ou uma pedrinha) para não repetir."
      ]
     ]
    },
    {
     "t": "p",
     "h": "A estratégia <strong>tentar e voltar</strong> é usada pelos computadores para resolver labirintos, quebra-cabeças e jogos: o nome dela em programação é <strong>retrocesso</strong> (em inglês, <em>backtracking</em>)."
    }
   ],
   "termos": [
    {
     "termo": "Labirinto",
     "rotulo": "<strong>Labirinto</strong>",
     "def": "lugar com muitos corredores e caminhos, em que é fácil se perder."
    },
    {
     "termo": "Cruzamento",
     "rotulo": "<strong>Cruzamento</strong>",
     "def": "lugar em que dá para escolher entre dois ou mais caminhos."
    },
    {
     "termo": "Beco sem saída",
     "rotulo": "<strong>Beco sem saída</strong>",
     "def": "corredor que não leva a lugar nenhum; é preciso voltar."
    },
    {
     "termo": "Retrocesso",
     "rotulo": "<strong>Retrocesso</strong> (<em>backtracking</em>)",
     "def": "voltar ao último cruzamento e tentar outro caminho."
    },
    {
     "termo": "Estratégia",
     "rotulo": "<strong>Estratégia</strong>",
     "def": "um plano para resolver um problema."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nos <strong>jogos</strong> de labirinto e de aventura, em que os inimigos acham o caminho até você.",
     "O <strong>robô aspirador</strong> precisa achar o caminho pela casa sem ficar preso.",
     "Os <strong>parques</strong> e as <strong>fazendas</strong> fazem labirintos de plantas para os visitantes."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Todo labirinto pode ser visto como um grafo.",
    "O beco sem saída é um vértice de grau 1.",
    "Na estratégia “tentar e voltar”, quem chega a um beco sem saída desiste do labirinto.",
    "Os computadores usam a estratégia “tentar e voltar” para resolver labirintos.",
    "Cada corredor do labirinto vira uma aresta do grafo."
   ],
   "resumo": {
    "texto": "Um **labirinto** é um grafo: **cruzamentos** e **becos sem saída** são vértices, e os **corredores** são arestas. Para sair: **mão na parede**, **tentar e voltar** (**retrocesso**) ou **marcar o caminho**. Os computadores usam o retrocesso para resolver labirintos e quebra-cabeças.",
    "chaves": [
     "labirinto",
     "cruzamento",
     "beco sem saída",
     "retrocesso",
     "estratégia"
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
