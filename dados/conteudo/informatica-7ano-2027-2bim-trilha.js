/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-7ano-2027-2bim-trilha.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-7ano-2027-2bim-trilha", {
 "titulo": "Apostila de Informática – 7º Ano – 2º Bimestre de 2027 · Trilha Passo a Passo",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai cumprir <strong>6 missões</strong>. Se sobrar aula, tem <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. São as mesmas missões da sua turma."
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
     "h": "🖱️ Quase tudo é feito <strong>clicando</strong>."
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
   "icone": "🕸️",
   "titulo": "Missão 1 – Grafos: pontos e ligações",
   "objetivo": "saber o que é um grafo: pontos ligados por linhas.",
   "comecar": [
    {
     "t": "p",
     "h": "Um <strong>grafo</strong> é um desenho de <strong>pontos ligados por linhas</strong>. O computador guarda mapas assim."
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
       "⚪ Vértice",
       "Um ponto: um lugar",
       "A escola, a praça"
      ],
      [
       "➖ Aresta",
       "A linha que liga dois pontos",
       "A rua"
      ],
      [
       "🔢 Peso",
       "O número na linha",
       "5 minutos"
      ],
      [
       "🔗 Grau",
       "Quantas linhas chegam ao ponto",
       "A praça tem grau 2"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "pontos ligados por linhas."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong>",
     "def": "cada ponto."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada linha."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "o número escrito na linha."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong>",
     "def": "programa do celular ou do computador."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>mapa</strong> do celular: as esquinas são pontos e as ruas são linhas.",
     "Na <strong>rede de computadores</strong> da escola."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Um grafo tem pontos (vértices) e linhas (arestas).",
    "No mapa, as ruas são os vértices.",
    "O peso é o número escrito na linha."
   ],
   "resumo": {
    "texto": "Um **grafo** tem **vértices** (pontos) e **arestas** (linhas). O **peso** é o número da linha. O **grau** é quantas linhas chegam a um ponto.",
    "chaves": [
     "grafo",
     "vértice",
     "aresta",
     "peso",
     "grau"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🧭",
   "titulo": "Missão 2 – O caminho mais curto",
   "objetivo": "achar o caminho mais curto somando os números.",
   "comecar": [
    {
     "t": "p",
     "h": "Para saber quanto um caminho leva, <strong>somamos</strong> os números (pesos) das linhas."
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
     "h": "O <strong>mais curto</strong> é o de <strong>menor soma</strong>. O aplicativo de mapa faz essa conta."
    }
   ],
   "termos": [
    {
     "termo": "Caminho",
     "rotulo": "<strong>Caminho</strong>",
     "def": "os pontos por onde eu passo, um depois do outro."
    },
    {
     "termo": "Caminho mais curto",
     "rotulo": "<strong>Caminho mais curto</strong>",
     "def": "o de menor soma."
    },
    {
     "termo": "Somar",
     "rotulo": "<strong>Somar</strong>",
     "def": "juntar os números (3 + 2 = 5)."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapa</strong> mostra o caminho mais rápido.",
     "O <strong>entregador</strong> escolhe o caminho mais curto."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Para saber o total do caminho, somamos os números.",
    "O caminho mais curto é o de maior soma.",
    "Casa → Padaria → Escola leva 5 minutos."
   ],
   "resumo": {
    "texto": "Some os números de cada caminho. O **caminho mais curto** é o de **menor soma**.",
    "chaves": [
     "caminho",
     "caminho mais curto",
     "somar"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🤝",
   "titulo": "Missão 3 – Grafos de amizades",
   "objetivo": "ver amizades como um grafo.",
   "comecar": [
    {
     "t": "p",
     "h": "Num grafo de amizades, cada <strong>pessoa</strong> é um ponto e cada <strong>amizade</strong> é uma linha."
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
       "Eva",
       "Davi",
       "1"
      ]
     ]
    },
    {
     "t": "p",
     "h": "A <strong>Ana</strong> tem mais amigos: o grau dela é <strong>3</strong>."
    },
    {
     "t": "p",
     "h": "A rede social sugere os <strong>amigos dos seus amigos</strong>. Mas <strong>só aceite quem você conhece de verdade</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Rede social",
     "rotulo": "<strong>Rede social</strong>",
     "def": "um grafo de pessoas."
    },
    {
     "termo": "Grau",
     "rotulo": "<strong>Grau</strong>",
     "def": "quantos amigos a pessoa tem no grafo."
    },
    {
     "termo": "Amigo em comum",
     "rotulo": "<strong>Amigo em comum</strong>",
     "def": "amigo de duas pessoas ao mesmo tempo."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nas <strong>redes sociais</strong>: “pessoas que você talvez conheça”.",
     "No <strong>grupo da turma</strong> no celular."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num grafo de amizades, cada pessoa é um ponto.",
    "A Eva tem mais amigos que a Ana.",
    "Só devo aceitar quem eu conheço de verdade."
   ],
   "resumo": {
    "texto": "Pessoas são pontos e amizades são linhas. O **grau** mostra quantos amigos cada um tem. A rede sugere amigos dos amigos: aceite só quem você conhece.",
    "chaves": [
     "rede social",
     "grau",
     "amigo em comum"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🗂️",
   "titulo": "Missão 4 – Escolher a estrutura certa",
   "objetivo": "escolher entre lista, tabela e grafo.",
   "comecar": [
    {
     "t": "p",
     "h": "Existem jeitos diferentes de guardar dados:"
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
       "Itens em ordem",
       "Coisas em sequência",
       "Fila da cantina"
      ],
      [
       "🗂️ Tabela",
       "Linhas e colunas",
       "Várias informações de cada item",
       "Boletim"
      ],
      [
       "🕸️ Grafo",
       "Pontos e linhas",
       "Ligações",
       "Mapa da cidade"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "itens em ordem."
    },
    {
     "termo": "Tabela",
     "rotulo": "<strong>Tabela</strong>",
     "def": "linhas e colunas."
    },
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "pontos ligados por linhas."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>playlist</strong> é uma lista.",
     "Os <strong>contatos</strong> do celular são uma tabela."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "A fila da cantina é uma lista.",
    "O mapa da cidade é melhor guardado numa lista.",
    "O boletim é uma tabela."
   ],
   "resumo": {
    "texto": "**Lista** = ordem. **Tabela** = várias informações. **Grafo** = ligações.",
    "chaves": [
     "lista",
     "tabela",
     "grafo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "📋",
   "titulo": "Missão 5 – Projeto em equipe: planejar",
   "objetivo": "planejar um projeto com a equipe.",
   "comecar": [
    {
     "t": "p",
     "h": "A turma vai fazer o <strong>Guia de Rotas da Escola</strong> em equipe. Todo projeto começa com um <strong>plano</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Etapa",
      "Pergunta"
     ],
     "linhas": [
      [
       "1. Problema",
       "O que queremos resolver?"
      ],
      [
       "2. Ideia",
       "Como vamos resolver?"
      ],
      [
       "3. Tarefas",
       "Quem faz o quê?"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Cada pessoa tem um <strong>papel</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Papel",
      "O que faz"
     ],
     "linhas": [
      [
       "🔎 Pesquisador",
       "Junta os dados"
      ],
      [
       "🛠️ Construtor",
       "Monta o grafo"
      ],
      [
       "🧪 Testador",
       "Confere se está certo"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Combinados: <strong>ouvir todos</strong> e <strong>ajudar quem travou</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Projeto",
     "rotulo": "<strong>Projeto</strong>",
     "def": "trabalho com um objetivo e um prazo."
    },
    {
     "termo": "Papel",
     "rotulo": "<strong>Papel</strong>",
     "def": "a tarefa de cada pessoa na equipe."
    },
    {
     "termo": "Prazo",
     "rotulo": "<strong>Prazo</strong>",
     "def": "até quando terminar."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>trabalho em grupo</strong> da escola.",
     "Na <strong>festa junina</strong>: cada equipe cuida de uma parte."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Todo projeto começa com um plano.",
    "Na equipe, uma pessoa faz tudo sozinha.",
    "O testador confere se está certo."
   ],
   "resumo": {
    "texto": "O **plano** tem problema, ideia e tarefas. Cada pessoa tem um **papel**. A equipe ouve todos e se ajuda.",
    "chaves": [
     "projeto",
     "plano",
     "papel",
     "prazo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🛠️",
   "titulo": "Missão 6 – Projeto em equipe: construir e apresentar",
   "objetivo": "construir, testar e mostrar o projeto.",
   "comecar": [
    {
     "t": "p",
     "h": "Hoje a equipe <strong>constrói</strong> o guia. Depois <strong>testa</strong> e <strong>melhora</strong>."
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
       "Montar o grafo"
      ],
      [
       "🧪 2. Testar",
       "Conferir os caminhos"
      ],
      [
       "🔁 3. Melhorar",
       "Corrigir o que estava errado"
      ]
     ]
    },
    {
     "t": "p",
     "h": "No fim, a equipe <strong>apresenta</strong>: na apresentação, a equipe mostra o problema, o que fez e como usar."
    }
   ],
   "termos": [
    {
     "termo": "Construir",
     "rotulo": "<strong>Construir</strong>",
     "def": "montar o projeto."
    },
    {
     "termo": "Testar",
     "rotulo": "<strong>Testar</strong>",
     "def": "conferir se funciona."
    },
    {
     "termo": "Apresentar",
     "rotulo": "<strong>Apresentar</strong>",
     "def": "mostrar para a turma."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>atualizações</strong> do celular são versões melhoradas.",
     "Na <strong>feira de ciências</strong>, as equipes apresentam os projetos."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Depois de construir, a equipe testa.",
    "Testar não serve para nada.",
    "Na apresentação, a equipe mostra o que fez."
   ],
   "resumo": {
    "texto": "**Construir**, **testar** e **melhorar**. No fim, **apresentar** o projeto.",
    "chaves": [
     "construir",
     "testar",
     "melhorar",
     "apresentar"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🗺️",
   "titulo": "Missão 7 – Extra: Mapa de Curionópolis em grafo",
   "objetivo": "transformar lugares da cidade num grafo.",
   "comecar": [
    {
     "t": "p",
     "h": "Lugares de <strong>Curionópolis</strong> viram pontos. Os tempos são <strong>de mentirinha</strong>, só para o exercício."
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
       "Escola – Feira",
       "9"
      ],
      [
       "Feira – Rodoviária",
       "5"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Escola → Feira → Rodoviária</strong> = 9 + 5 = <strong>14 minutos</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Lugar",
     "rotulo": "<strong>Lugar</strong>",
     "def": "vira um ponto (vértice)."
    },
    {
     "termo": "Rua",
     "rotulo": "<strong>Rua</strong>",
     "def": "vira uma linha (aresta)."
    },
    {
     "termo": "Tempo",
     "rotulo": "<strong>Tempo</strong>",
     "def": "vira o número (peso)."
    }
   ],
   "ondeUso": {
    "itens": [
     "Para explicar a um <strong>visitante</strong> como chegar à escola.",
     "O <strong>mototáxi</strong> escolhe o caminho mais rápido."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Cada lugar da cidade vira um ponto do grafo.",
    "Cada rua vira uma linha.",
    "Escola → Feira → Rodoviária leva 20 minutos."
   ],
   "resumo": {
    "texto": "Lugar = ponto. Rua = linha. Tempo = número. Assim a cidade vira um grafo.",
    "chaves": [
     "lugar",
     "rua",
     "tempo",
     "grafo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "🌀",
   "titulo": "Missão 8 – Extra: Labirintos",
   "objetivo": "sair de um labirinto com uma estratégia.",
   "comecar": [
    {
     "t": "p",
     "h": "Um <strong>labirinto</strong> tem corredores e <strong>becos sem saída</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "No labirinto",
      "No grafo"
     ],
     "linhas": [
      [
       "Cruzamento",
       "Ponto onde dá para escolher"
      ],
      [
       "Beco sem saída",
       "Ponto sem continuação"
      ],
      [
       "Corredor",
       "Linha"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Estratégia “tentar e voltar”:</strong> se chegar num beco sem saída, <strong>volte</strong> e tente outro caminho."
    }
   ],
   "termos": [
    {
     "termo": "Labirinto",
     "rotulo": "<strong>Labirinto</strong>",
     "def": "lugar com muitos corredores."
    },
    {
     "termo": "Beco sem saída",
     "rotulo": "<strong>Beco sem saída</strong>",
     "def": "corredor que não continua."
    },
    {
     "termo": "Voltar",
     "rotulo": "<strong>Voltar</strong>",
     "def": "retornar ao último cruzamento."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nos <strong>jogos</strong> de labirinto.",
     "O <strong>robô aspirador</strong> precisa achar o caminho pela casa."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Um labirinto tem becos sem saída.",
    "No beco sem saída, eu volto e tento outro caminho.",
    "Todo corredor leva até a saída."
   ],
   "resumo": {
    "texto": "O labirinto tem **cruzamentos**, **corredores** e **becos sem saída**. Chegou num beco? **Volte** e tente outro caminho.",
    "chaves": [
     "labirinto",
     "beco sem saída",
     "voltar"
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
