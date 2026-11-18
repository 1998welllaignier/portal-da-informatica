/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-9ano-2027-1bim-trilha.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-9ano-2027-1bim-trilha", {
 "titulo": "Apostila de Informática – 9º Ano – 1º Bimestre de 2027 · Trilha Passo a Passo",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai conhecer <strong>grafos, árvores e máquinas que reagem</strong>. São <strong>6 missões</strong>. Se sobrar aula, tem <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. São as mesmas missões da sua turma."
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
     "h": "🖱️ Quase tudo é feito <strong>clicando</strong> nos lugares do mapa e nos botões."
    },
    {
     "nivel": 0,
     "h": "🧱 Nos programas, quase tudo <strong>já vem montado</strong>: você muda só um pedacinho."
    },
    {
     "nivel": 0,
     "h": "✅ Clique em <strong>Verificar</strong> (ou <strong>▶️ Rodar</strong>) quando terminar cada atividade."
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
   "icone": "🗺️",
   "titulo": "Missão 1 – Grafos e o melhor caminho",
   "objetivo": "ver lugares e ruas como um grafo e achar o caminho de menor soma.",
   "comecar": [
    {
     "t": "p",
     "h": "O aplicativo de mapa enxerga a cidade como um <strong>grafo</strong>: <strong>pontos</strong> ligados por <strong>linhas</strong>."
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
       "Uma rua"
      ],
      [
       "🔢 Peso",
       "Um número na aresta",
       "Os minutos daquela rua"
      ]
     ]
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
     "h": "O <strong>caminho mais curto</strong> é o de <strong>menor soma</strong>, e <strong>nem sempre</strong> é o que tem menos paradas: a rua direta soma 9."
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "pontos (vértices) ligados por linhas (arestas)."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong>",
     "def": "cada ponto do grafo."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada ligação entre dois pontos."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "o número na aresta (tempo, distância)."
    },
    {
     "termo": "Caminho mais curto",
     "rotulo": "<strong>Caminho mais curto</strong>",
     "def": "o caminho com a menor soma dos pesos."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong> (ou <strong>app</strong>, do inglês <em>application</em>)",
     "def": "programa que usamos no celular, no tablet ou no computador para fazer uma tarefa, como o aplicativo de mapas, o WhatsApp ou a calculadora."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapa</strong> calcula o caminho mais curto.",
     "Nas <strong>redes sociais</strong>, cada pessoa é um vértice e cada amizade é uma aresta.",
     "O <strong>aplicativo de entrega</strong> escolhe o caminho mais rápido."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num grafo de ruas, cada esquina pode ser um vértice.",
    "O caminho com menos paradas é sempre o mais curto.",
    "O peso é o número que aparece numa aresta."
   ],
   "resumo": {
    "texto": "O **grafo** tem **vértices** (pontos) ligados por **arestas** (linhas). O **peso** é o número da aresta. O **caminho mais curto** é o de menor soma, nem sempre o de menos paradas.",
    "chaves": [
     "grafo",
     "vértice",
     "aresta",
     "peso",
     "caminho mais curto"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🌳",
   "titulo": "Missão 2 – Árvores",
   "objetivo": "reconhecer a raiz, os galhos e as folhas de uma árvore.",
   "comecar": [
    {
     "t": "p",
     "h": "Uma <strong>árvore</strong>, na computação, é desenhada <strong>de cabeça para baixo</strong>: a <strong>raiz</strong> fica em cima e os galhos descem até as <strong>folhas</strong>."
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
     "h": "Na árvore <strong>não tem voltas</strong>: de um vértice a outro só existe <strong>um caminho</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Árvore",
     "rotulo": "<strong>Árvore</strong>",
     "def": "grafo sem voltas, com uma raiz em cima."
    },
    {
     "termo": "Raiz",
     "rotulo": "<strong>Raiz</strong>",
     "def": "o vértice do topo, onde a árvore começa."
    },
    {
     "termo": "Folha",
     "rotulo": "<strong>Folha</strong>",
     "def": "vértice que não tem filhos."
    },
    {
     "termo": "Nível",
     "rotulo": "<strong>Nível</strong>",
     "def": "quantos passos da raiz até o vértice (a raiz é o nível 0)."
    },
    {
     "termo": "Pasta",
     "rotulo": "<strong>Pasta</strong>",
     "def": "lugar do computador onde guardamos e organizamos arquivos, como uma gaveta. Uma pasta pode ter outras pastas dentro dela."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>pastas</strong> do computador formam uma árvore.",
     "A <strong>árvore genealógica</strong> da família: avós, pais e filhos.",
     "O <strong>mata-mata</strong> do campeonato."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Numa árvore da computação, a raiz fica em cima.",
    "Folha é o vértice que tem mais filhos.",
    "As pastas do computador formam uma árvore."
   ],
   "resumo": {
    "texto": "A **árvore** tem a **raiz** em cima, os galhos descendo e as **folhas** (sem filhos) no fim. O **nível** é quantos passos da raiz. Não tem voltas.",
    "chaves": [
     "árvore",
     "raiz",
     "folha",
     "nível",
     "pai",
     "filho"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "❓",
   "titulo": "Missão 3 – Árvores de decisão",
   "objetivo": "seguir perguntas de sim ou não até a resposta final.",
   "comecar": [
    {
     "t": "p",
     "h": "Já jogou <strong>“adivinhe o objeto”</strong> com perguntas de sim ou não? Isso é uma <strong>árvore de decisão</strong>: cada vértice é uma <strong>pergunta</strong>, cada galho é uma <strong>resposta</strong> (sim ou não) e cada <strong>folha</strong> é a <strong>decisão</strong> final."
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
     "h": "<strong>Como usar:</strong> comece na primeira pergunta, responda e siga o galho até a <strong>folha</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Boa pergunta</strong> tem resposta clara (sim ou não). “Ele é legal?” é ruim: cada pessoa responde de um jeito."
    }
   ],
   "termos": [
    {
     "termo": "Árvore de decisão",
     "rotulo": "<strong>Árvore de decisão</strong>",
     "def": "árvore de perguntas de sim ou não que termina numa resposta."
    },
    {
     "termo": "Decisão",
     "rotulo": "<strong>Decisão</strong>",
     "def": "a resposta final, na folha. As folhas são as decisões finais."
    },
    {
     "termo": "Condição",
     "rotulo": "<strong>Condição</strong>",
     "def": "pergunta de sim ou não, como “é eletrônico?”."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>atendimento automático</strong> do telefone: “digite 1 para… 2 para…”.",
     "Na <strong>triagem do posto de saúde</strong>: cada resposta leva a uma cor de prioridade.",
     "No jogo de <strong>adivinhar o objeto</strong>."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Numa árvore de decisão, as folhas são as decisões finais.",
    "“Ele é legal?” é uma boa pergunta para uma árvore de decisão.",
    "O atendimento automático do telefone usa uma árvore de decisão."
   ],
   "resumo": {
    "texto": "Na **árvore de decisão**, cada vértice é uma **pergunta** de sim ou não, cada galho é uma resposta e cada **folha** é uma **decisão**. Boas perguntas têm resposta clara.",
    "chaves": [
     "árvore de decisão",
     "decisão",
     "condição"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🧱",
   "titulo": "Missão 4 – Programar com grafos e árvores",
   "objetivo": "guardar os vizinhos de cada lugar e ver a árvore de decisão virar blocos.",
   "comecar": [
    {
     "t": "p",
     "h": "O computador guarda um grafo com a <strong>lista de vizinhos</strong>: para cada lugar, a <strong>lista</strong> dos lugares ligados a ele."
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
     "h": "O <strong>grau</strong> do lugar é <strong>quantos vizinhos</strong> ele tem: o Pátio tem grau <strong>4</strong>."
    },
    {
     "t": "p",
     "h": "E a <strong>árvore de decisão</strong> vira <strong>se … senão dentro de se … senão</strong>: a primeira pergunta é o primeiro <strong>se</strong>; as folhas são os <strong>mostrar</strong>."
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
     "rotulo": "<strong>Lista de vizinhos</strong>",
     "def": "para cada lugar, a lista dos lugares ligados a ele."
    },
    {
     "termo": "Vizinho",
     "rotulo": "<strong>Vizinho</strong>",
     "def": "lugar ligado diretamente a outro por uma aresta."
    },
    {
     "termo": "Grau",
     "rotulo": "<strong>Grau</strong>",
     "def": "quantos vizinhos um lugar tem."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>rede social</strong> guarda a lista de amigos de cada pessoa e conta quantos você tem.",
     "O <strong>jogo</strong> guarda, de cada sala, para onde dá para ir.",
     "O <strong>atendimento automático</strong> é um programa de <strong>se</strong> dentro de <strong>se</strong>."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na lista de vizinhos, guardamos para cada lugar os lugares ligados a ele.",
    "O grau é quantos vizinhos um lugar tem.",
    "Vizinhos são lugares que não têm nenhuma ligação."
   ],
   "resumo": {
    "texto": "A **lista de vizinhos** guarda, para cada lugar, os lugares ligados a ele. O **grau** é quantos vizinhos ele tem. A árvore de decisão vira **se** dentro de **se**.",
    "chaves": [
     "lista de vizinhos",
     "vizinho",
     "grau",
     "se dentro de se"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "🤖",
   "titulo": "Missão 5 – Autômatos: máquinas de estados",
   "objetivo": "seguir uma máquina que muda de estado, como a catraca do ônibus.",
   "comecar": [
    {
     "t": "p",
     "h": "A <strong>catraca do ônibus</strong> pode estar <strong>travada</strong> ou <strong>liberada</strong>. Ela muda conforme o que acontece: alguém passa o <strong>cartão</strong> ou <strong>empurra</strong>. Uma máquina assim é um <strong>autômato</strong> (máquina de estados)."
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
     "h": "A catraca <strong>começa travada</strong>. Cada mudança de estado é uma <strong>transição</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Autômato",
     "rotulo": "<strong>Autômato</strong>",
     "def": "máquina que está sempre num estado e muda conforme o que acontece."
    },
    {
     "termo": "Estado",
     "rotulo": "<strong>Estado</strong>",
     "def": "a situação da máquina agora (travada, liberada)."
    },
    {
     "termo": "Entrada",
     "rotulo": "<strong>Entrada</strong>",
     "def": "o que acontece e pode mudar o estado (cartão, empurrar)."
    },
    {
     "termo": "Transição",
     "rotulo": "<strong>Transição</strong>",
     "def": "a mudança de um estado para outro."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>catraca</strong>, o <strong>semáforo</strong> e o <strong>elevador</strong> são autômatos.",
     "No <strong>videogame</strong>, o personagem fica parado, correndo ou pulando.",
     "A <strong>máquina de refrigerante</strong> espera o dinheiro e entrega a lata."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Um autômato está sempre em algum estado.",
    "Na catraca travada, empurrar faz ela girar.",
    "O semáforo é um exemplo de autômato."
   ],
   "resumo": {
    "texto": "O **autômato** está sempre num **estado** e muda conforme as **entradas**. Cada mudança é uma **transição**. A catraca: travada + cartão = liberada; liberada + empurrar = gira e trava.",
    "chaves": [
     "autômato",
     "estado",
     "entrada",
     "transição"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "⚡",
   "titulo": "Missão 6 – Programação por eventos",
   "objetivo": "ver programas que esperam algo acontecer e reagem.",
   "comecar": [
    {
     "t": "p",
     "h": "O celular e o jogo <strong>esperam</strong> algo acontecer e então <strong>reagem</strong>. Isso é a <strong>programação por eventos</strong>."
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
     "h": "No editor, o bloco <strong>“quando acontecer … faça …”</strong> roda <strong>toda vez</strong> que o evento acontece. Ao apertar ▶️ Rodar, o portal <strong>aperta os botões sozinho</strong>, na ordem mostrada em cima do editor."
    }
   ],
   "termos": [
    {
     "termo": "Evento",
     "rotulo": "<strong>Evento</strong>",
     "def": "algo que acontece e o programa percebe: um clique, uma mensagem, um sensor."
    },
    {
     "termo": "Tratador",
     "rotulo": "<strong>Tratador</strong>",
     "def": "os blocos que rodam quando o evento acontece."
    },
    {
     "termo": "Sensor",
     "rotulo": "<strong>Sensor</strong>",
     "def": "peça que percebe algo (movimento, luz) e gera um evento."
    }
   ],
   "ondeUso": {
    "itens": [
     "Todo <strong>aplicativo de celular</strong>: tocar, arrastar, chegar mensagem.",
     "A <strong>porta automática</strong> reage ao sensor de movimento.",
     "Nos <strong>jogos</strong>, cada botão do controle é um evento."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na programação por eventos, o programa espera algo acontecer e reage.",
    "O tratador roda uma vez só, mesmo que o evento aconteça várias vezes.",
    "Tocar no ícone do aplicativo é um evento."
   ],
   "resumo": {
    "texto": "Na **programação por eventos**, o programa **espera** e **reage**. Cada **evento** tem um **tratador**, que roda toda vez que ele acontece.",
    "chaves": [
     "evento",
     "tratador",
     "sensor"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🚦",
   "titulo": "Missão 7 – Extra: O semáforo",
   "objetivo": "seguir o semáforo como uma máquina de estados.",
   "comecar": [
    {
     "t": "p",
     "h": "O <strong>semáforo</strong> tem 3 estados. Cada vez que o tempo acaba (evento <strong>tique</strong>), ele passa para o próximo."
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
     "h": "O <strong>ciclo</strong> se repete para sempre: verde → amarelo → vermelho → verde…"
    },
    {
     "t": "p",
     "h": "<strong>O botão de pedestre:</strong> se o semáforo estiver <strong>verde</strong> e o pedestre apertar o botão, ele vai <strong>para o amarelo</strong>. Em amarelo ou vermelho, o botão <strong>não muda nada</strong>."
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
    }
   ],
   "termos": [
    {
     "termo": "Ciclo",
     "rotulo": "<strong>Ciclo</strong>",
     "def": "estados que se repetem sempre na mesma ordem."
    },
    {
     "termo": "Tique",
     "rotulo": "<strong>Tique</strong>",
     "def": "o evento que avisa que o tempo daquele estado acabou."
    },
    {
     "termo": "Temporizador",
     "rotulo": "<strong>Temporizador</strong>",
     "def": "o que conta o tempo e avisa quando acaba."
    },
    {
     "termo": "Pedestre",
     "rotulo": "<strong>Pedestre</strong>",
     "def": "quem anda a pé e atravessa a rua."
    }
   ],
   "ondeUso": {
    "itens": [
     "Os <strong>semáforos</strong> da cidade.",
     "O <strong>micro-ondas</strong> apita quando o tempo acaba.",
     "Nos <strong>jogos</strong>, o tempo de cada fase."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "O semáforo tem os estados verde, amarelo e vermelho.",
    "Depois do amarelo, com um tique, vem o verde.",
    "O ciclo do semáforo se repete sempre na mesma ordem."
   ],
   "resumo": {
    "texto": "O **semáforo** é um autômato de 3 estados num **ciclo**: verde → amarelo → vermelho → verde. A cada **tique**, muda. O botão de pedestre leva o verde para o amarelo.",
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
   "objetivo": "usar o grafo da escola para achar caminhos curtos e o lugar mais conectado.",
   "comecar": [
    {
     "t": "p",
     "h": "Vamos transformar a escola num grafo! Cada <strong>lugar</strong> vira um <strong>vértice</strong> e cada <strong>corredor</strong> vira uma <strong>aresta</strong>. O <strong>peso</strong> é o tempo de caminhada, em minutos."
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
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Mais conectado",
     "rotulo": "<strong>Mais conectado</strong>",
     "def": "o lugar ligado a mais lugares (o de maior grau)."
    },
    {
     "termo": "Rota de fuga",
     "rotulo": "<strong>Rota de fuga</strong>",
     "def": "o caminho mais curto e seguro até a saída numa emergência."
    },
    {
     "termo": "Planta",
     "rotulo": "<strong>Planta</strong>",
     "def": "o desenho da escola vista de cima."
    }
   ],
   "ondeUso": {
    "itens": [
     "Os <strong>mapas de emergência</strong> dos prédios mostram a rota de fuga.",
     "Os <strong>shoppings</strong> têm mapas com o caminho até cada loja.",
     "O <strong>aplicativo de mapa</strong> muda a rota quando uma rua é fechada."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "No grafo da escola, cada lugar é um vértice e cada corredor é uma aresta.",
    "O Pátio é o lugar mais conectado, com grau 4.",
    "A rota de fuga é o caminho mais longo até a saída."
   ],
   "resumo": {
    "texto": "No grafo da escola, os lugares são **vértices** e os corredores, **arestas**. O **Pátio** é o mais conectado (grau 4). O caminho mais curto do Portão à Informática leva **3 minutos**.",
    "chaves": [
     "grafo",
     "mais conectado",
     "rota de fuga",
     "planta"
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
