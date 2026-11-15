/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-7ano-2027-1bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-7ano-2027-1bim", {
 "titulo": "Apostila de Informática – 7º Ano – 1º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai <strong>programar de verdade</strong>, montando blocos no próprio portal. São <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🧱 Missão 1 – Programar com blocos: sequência, repetição e seleção",
     "Pensamento Computacional"
    ],
    [
     "📝 Missão 2 – Listas no programa",
     "Pensamento Computacional"
    ],
    [
     "🗂️ Missão 3 – Registros: a ficha de cada coisa",
     "Pensamento Computacional"
    ],
    [
     "🐞 Missão 4 – Depurar: achar e consertar erros",
     "Pensamento Computacional"
    ],
    [
     "🧩 Missão 5 – Decompor e reaproveitar",
     "Pensamento Computacional"
    ],
    [
     "👥 Missão 6 – Programar em dupla",
     "Pensamento Computacional"
    ],
    [
     "🔍 Missão 7 – Extra: Desafios de depuração",
     "Pensamento Computacional"
    ],
    [
     "❓ Missão 8 – Extra: O placar do quiz",
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
   "h": "<strong>Como funciona o editor de blocos:</strong>"
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
    ],
    [
     "🗑️ Lixeira",
     "Arraste para lá o bloco que não quer mais"
    ]
   ]
  },
  {
   "t": "p",
   "h": "🔎 <strong>Todas as respostas estão na apostila:</strong> leia o <strong>💡 Para começar</strong> e o <strong>📖 O que significa?</strong>. Errou? O portal diz qual linha saiu diferente. Leia de novo, peça uma <strong>💡 Dica</strong> ou veja a <strong>📘 resolução comentada</strong>. Você consegue fazer tudo sozinho!"
  },
  {
   "t": "p",
   "h": "<strong>Regra de ouro:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor."
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "🧱",
   "titulo": "Missão 1 – Programar com blocos: sequência, repetição e seleção",
   "objetivo": "montar programas com blocos usando sequência, repetição e seleção, e entender como o computador executa cada bloco.",
   "comecar": [
    {
     "t": "p",
     "h": "No 6º ano você escreveu <strong>algoritmos</strong>: passos em ordem para resolver um problema. Um <strong>programa</strong> é um algoritmo escrito numa linguagem que o computador entende. Aqui, a linguagem são <strong>blocos</strong> que se encaixam como peças de montar."
    },
    {
     "t": "p",
     "h": "O computador lê os blocos <strong>de cima para baixo</strong>, um de cada vez, e faz <strong>exatamente</strong> o que eles mandam:"
    },
    {
     "t": "tabela",
     "cab": [
      "Bloco",
      "O que faz",
      "Exemplo"
     ],
     "linhas": [
      [
       "📺 mostrar na tela",
       "Escreve uma mensagem na Tela do programa",
       "mostrar na tela “Olá!” → aparece Olá!"
      ],
      [
       "🔁 repita 3 vezes",
       "Faz os blocos de dentro várias vezes",
       "repita 3 vezes: mostrar “pulo” → pulo, pulo, pulo"
      ],
      [
       "🔀 se … faça … senão",
       "Escolhe um caminho conforme uma condição",
       "se nota ≥ 5, mostrar “passou”; senão, mostrar “recuperação”"
      ]
     ]
    },
    {
     "t": "p",
     "h": "São as mesmas três ideias dos algoritmos:"
    },
    {
     "t": "tabela",
     "cab": [
      "Ideia",
      "No bloco",
      "Na vida"
     ],
     "linhas": [
      [
       "➡️ Sequência",
       "Um bloco embaixo do outro",
       "Acordar, escovar os dentes, tomar café"
      ],
      [
       "🔁 Repetição",
       "Blocos dentro do <strong>repita</strong>",
       "Fazer 10 polichinelos"
      ],
      [
       "🔀 Seleção",
       "Blocos dentro do <strong>se</strong>",
       "Se chover, levar guarda-chuva; senão, levar boné"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Atenção à ordem:</strong> se o “mostrar ‘fim’” ficar <strong>dentro</strong> do repita, ele aparece 3 vezes; se ficar <strong>embaixo</strong> do repita (fora dele), aparece só 1 vez, no final. A posição do bloco muda o resultado!"
    },
    {
     "t": "p",
     "h": "Uma <strong>variável</strong> é uma caixinha com nome que guarda um valor: <strong>definir nota para 7</strong> guarda 7 na caixinha “nota”. Depois, o programa pode usar a nota numa conta ou numa condição."
    }
   ],
   "termos": [
    {
     "termo": "Programa",
     "rotulo": "<strong>Programa</strong>",
     "def": "algoritmo escrito numa linguagem que o computador entende. Onde eu vejo: todo aplicativo e todo jogo é um programa."
    },
    {
     "termo": "Programar",
     "rotulo": "<strong>Programar</strong>",
     "def": "criar programas, dizendo ao computador o que fazer, passo a passo."
    },
    {
     "termo": "Bloco",
     "rotulo": "<strong>Bloco</strong>",
     "def": "peça do editor que representa uma instrução (um comando). Os blocos se encaixam para formar o programa."
    },
    {
     "termo": "Executar",
     "rotulo": "<strong>Executar</strong> (ou <strong>rodar</strong>)",
     "def": "fazer o computador seguir os blocos do programa, de cima para baixo."
    },
    {
     "termo": "Sequência",
     "rotulo": "<strong>Sequência</strong>",
     "def": "blocos um embaixo do outro, executados na ordem."
    },
    {
     "termo": "Repetição",
     "rotulo": "<strong>Repetição</strong> (laço)",
     "def": "bloco que faz os blocos de dentro várias vezes, como o <strong>repita</strong>."
    },
    {
     "termo": "Seleção",
     "rotulo": "<strong>Seleção</strong> (condição)",
     "def": "bloco que escolhe o caminho com <strong>se … faça … senão</strong>. A condição é uma pergunta de sim ou não, como “nota ≥ 5?”."
    },
    {
     "termo": "Variável",
     "rotulo": "<strong>Variável</strong>",
     "def": "caixinha com nome que guarda um valor (um número ou um texto) para o programa usar depois."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>despertador</strong> do celular é um programa com <strong>seleção</strong>: se for 6h, então toca.",
     "Nos <strong>jogos</strong>, a vida do personagem é uma <strong>variável</strong>: começa em 3 e diminui quando ele leva dano.",
     "A <strong>máquina de lavar</strong> segue uma <strong>sequência</strong> (molhar, bater, enxaguar, centrifugar) com <strong>repetições</strong>."
    ],
    "reflexao": "Pense e escreva: escolha um jogo ou aplicativo e diga onde ele usa sequência, repetição ou seleção."
   },
   "alertas": [],
   "vf": [
    "O computador executa os blocos de cima para baixo.",
    "O bloco repita serve para escolher um caminho conforme uma condição.",
    "Se o bloco “mostrar ‘fim’” ficar dentro do repita 3 vezes, ele aparece 3 vezes.",
    "Uma variável é uma caixinha com nome que guarda um valor.",
    "Programa é um algoritmo escrito numa linguagem que o computador entende."
   ],
   "resumo": {
    "texto": "Um **programa** é um algoritmo numa linguagem que o computador entende; aqui ela é feita de **blocos**. O computador **executa** os blocos de cima para baixo. **Sequência**: um bloco depois do outro. **Repetição**: o **repita** faz os blocos de dentro várias vezes. **Seleção**: o **se … faça … senão** escolhe o caminho pela condição. A posição do bloco (dentro ou fora) muda o resultado. **Variável** é uma caixinha com nome que guarda um valor.",
    "chaves": [
     "programa",
     "bloco",
     "executar",
     "sequência",
     "repetição",
     "seleção",
     "condição",
     "variável"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "📝",
   "titulo": "Missão 2 – Listas no programa",
   "objetivo": "criar listas no programa, pegar um item pela posição, saber o tamanho da lista e percorrer todos os itens.",
   "comecar": [
    {
     "t": "p",
     "h": "Imagine guardar o nome de 19 alunos em 19 variáveis diferentes: aluno1, aluno2, aluno3… Cansativo! Para isso existe a <strong>lista</strong>: <strong>uma variável só</strong> que guarda <strong>vários itens em ordem</strong>."
    },
    {
     "t": "p",
     "h": "Cada item tem uma <strong>posição</strong>, contada a partir do <strong>1</strong>:"
    },
    {
     "t": "tabela",
     "cab": [
      "Posição",
      "1",
      "2",
      "3",
      "4"
     ],
     "linhas": [
      [
       "Item da lista <strong>frutas</strong>",
       "maçã",
       "uva",
       "caju",
       "açaí"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Com a lista, o programa consegue:"
    },
    {
     "t": "tabela",
     "cab": [
      "Bloco",
      "O que faz",
      "Com a lista frutas"
     ],
     "linhas": [
      [
       "📝 criar lista com",
       "Cria a lista com os itens",
       "frutas = maçã, uva, caju, açaí"
      ],
      [
       "em lista … obter #",
       "Pega o item de uma posição",
       "item nº 3 → <strong>caju</strong>"
      ],
      [
       "tamanho de",
       "Conta quantos itens a lista tem",
       "tamanho de frutas → <strong>4</strong>"
      ],
      [
       "na lista … adicionar no fim",
       "Coloca um item novo no final",
       "adicionar “banana” → agora são 5"
      ],
      [
       "👉 para cada item … na lista",
       "Repete os blocos de dentro <strong>uma vez para cada item</strong>",
       "mostra maçã, uva, caju, açaí (um por linha)"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O <strong>para cada</strong> é uma repetição esperta: você não precisa saber quantos itens tem. Se a lista crescer, ele percorre os novos itens também."
    },
    {
     "t": "p",
     "h": "<strong>Cuidado:</strong> pedir o item nº 5 de uma lista com 4 itens dá problema: a posição <strong>não existe</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "variável que guarda vários itens em ordem, como a lista de chamada."
    },
    {
     "termo": "Item",
     "rotulo": "<strong>Item</strong> (ou <strong>elemento</strong>)",
     "def": "cada valor guardado na lista."
    },
    {
     "termo": "Posição",
     "rotulo": "<strong>Posição</strong> (ou <strong>índice</strong>)",
     "def": "o número do lugar do item na lista. Aqui começa no 1."
    },
    {
     "termo": "Tamanho",
     "rotulo": "<strong>Tamanho</strong>",
     "def": "quantos itens a lista tem."
    },
    {
     "termo": "Percorrer",
     "rotulo": "<strong>Percorrer</strong>",
     "def": "passar por todos os itens da lista, um de cada vez, do primeiro ao último."
    },
    {
     "termo": "Para cada",
     "rotulo": "<strong>Para cada</strong>",
     "def": "bloco de repetição que percorre a lista, fazendo os blocos de dentro uma vez para cada item."
    },
    {
     "termo": "Adicionar",
     "rotulo": "<strong>Adicionar</strong>",
     "def": "colocar um item novo na lista (aqui, no fim)."
    }
   ],
   "ondeUso": {
    "itens": [
     "A <strong>playlist</strong> é uma lista de músicas: o aplicativo toca uma por vez, do começo ao fim (percorrer).",
     "O <strong>carrinho da loja on-line</strong> é uma lista: cada produto adicionado entra no fim, e o aplicativo mostra quantos itens tem (tamanho).",
     "O <strong>histórico do navegador</strong> é uma lista dos sites que você visitou, em ordem."
    ],
    "reflexao": "Pense e escreva: que lista você usa no celular ou no dia a dia? O que daria para fazer com ela num programa?"
   },
   "alertas": [],
   "vf": [
    "Uma lista guarda vários itens numa variável só.",
    "Na lista maçã, uva, caju, o item da posição 2 é maçã.",
    "O bloco tamanho de mostra quantos itens a lista tem.",
    "O para cada repete os blocos uma vez para cada item da lista.",
    "Numa lista de 4 itens, existe o item da posição 5."
   ],
   "resumo": {
    "texto": "A **lista** guarda vários **itens** em ordem numa variável só. Cada item tem uma **posição** (aqui começa no 1). Com a lista, o programa pega um item pela posição, descobre o **tamanho** (quantos itens tem), **adiciona** itens no fim e **percorre** todos com o **para cada**, que repete os blocos uma vez para cada item. Posição que não existe dá erro.",
    "chaves": [
     "lista",
     "item",
     "posição",
     "tamanho",
     "percorrer",
     "para cada",
     "adicionar"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🗂️",
   "titulo": "Missão 3 – Registros: a ficha de cada coisa",
   "objetivo": "organizar várias informações sobre uma mesma coisa num registro (ficha) com campos, e usar listas de fichas.",
   "comecar": [
    {
     "t": "p",
     "h": "Uma lista guarda vários itens <strong>do mesmo tipo</strong> (vários nomes, várias notas). Mas e quando queremos guardar <strong>várias informações diferentes sobre uma coisa só</strong>, como nome, idade e turma de um aluno? Usamos um <strong>registro</strong>: uma <strong>ficha</strong> com <strong>campos</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Ficha (registro) do aluno",
      ""
     ],
     "linhas": [
      [
       "campo <strong>nome</strong>",
       "Ana"
      ],
      [
       "campo <strong>idade</strong>",
       "12"
      ],
      [
       "campo <strong>turma</strong>",
       "7º A"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Cada campo tem um <strong>nome</strong> (nome, idade, turma) e um <strong>valor</strong> (Ana, 12, 7º A). No editor:"
    },
    {
     "t": "tabela",
     "cab": [
      "Bloco",
      "O que faz"
     ],
     "linhas": [
      [
       "🗂️ nova ficha",
       "Cria uma ficha vazia (guarde numa variável, ex.: <strong>aluno</strong>)"
      ],
      [
       "na ficha … o campo … vale …",
       "Escreve um valor num campo da ficha"
      ],
      [
       "campo … da ficha …",
       "Lê o valor de um campo"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Lista × registro:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "",
      "📝 Lista",
      "🗂️ Registro (ficha)"
     ],
     "linhas": [
      [
       "Guarda",
       "Vários itens parecidos",
       "Várias informações de uma coisa só"
      ],
      [
       "Acha pela",
       "Posição (1, 2, 3…)",
       "Nome do campo (nome, idade…)"
      ],
      [
       "Exemplo",
       "Nomes da turma",
       "Os dados de um aluno"
      ]
     ]
    },
    {
     "t": "p",
     "h": "E dá para juntar os dois: uma <strong>lista de fichas</strong> é exatamente uma <strong>tabela</strong>! Cada ficha é uma <strong>linha</strong> e cada campo é uma <strong>coluna</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Registro",
     "rotulo": "<strong>Registro</strong>",
     "def": "conjunto de informações diferentes sobre uma mesma coisa, guardado junto. Aqui chamamos de <strong>ficha</strong>."
    },
    {
     "termo": "Campo",
     "rotulo": "<strong>Campo</strong>",
     "def": "cada informação da ficha, com um nome (ex.: idade) e um valor (ex.: 12)."
    },
    {
     "termo": "Valor",
     "rotulo": "<strong>Valor</strong>",
     "def": "o que está guardado no campo (um texto, um número…)."
    },
    {
     "termo": "Cadastro",
     "rotulo": "<strong>Cadastro</strong>",
     "def": "conjunto de fichas, como o cadastro dos alunos da escola."
    },
    {
     "termo": "Tabela",
     "rotulo": "<strong>Tabela</strong>",
     "def": "uma lista de fichas: cada ficha é uma linha e cada campo é uma coluna."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>contato do celular</strong> é uma ficha: campos nome, telefone, foto, aniversário.",
     "No <strong>jogo</strong>, cada personagem tem uma ficha: nome, vida, força, velocidade.",
     "Na <strong>secretaria da escola</strong>, cada aluno tem uma ficha de matrícula; o conjunto delas é o cadastro."
    ],
    "reflexao": "Pense e escreva: invente a ficha de um personagem de jogo: quais campos ela teria?"
   },
   "alertas": [],
   "vf": [
    "Um registro guarda várias informações diferentes sobre uma mesma coisa.",
    "Num registro, achamos a informação pela posição 1, 2, 3.",
    "No campo idade = 12, “idade” é o nome do campo e 12 é o valor.",
    "Uma lista de fichas funciona como uma tabela.",
    "O contato do celular é um exemplo de registro."
   ],
   "resumo": {
    "texto": "Um **registro** (ficha) guarda várias informações diferentes sobre uma mesma coisa. Cada informação é um **campo**, com **nome** (idade) e **valor** (12). Na lista achamos pela **posição**; no registro, pelo **nome do campo**. Uma **lista de fichas** é uma **tabela**: cada ficha é uma linha e cada campo, uma coluna. Exemplos: contato do celular, personagem de jogo, ficha de matrícula.",
    "chaves": [
     "registro",
     "ficha",
     "campo",
     "valor",
     "cadastro",
     "tabela"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🐞",
   "titulo": "Missão 4 – Depurar: achar e consertar erros",
   "objetivo": "encontrar e corrigir erros em programas, testando, comparando o resultado com o esperado e mudando uma coisa de cada vez.",
   "comecar": [
    {
     "t": "p",
     "h": "Todo programador erra, até os profissionais! Um erro no programa se chama <strong>bug</strong> (inseto, em inglês). Achar e consertar o erro é <strong>depurar</strong> (em inglês, <em>debug</em>)."
    },
    {
     "t": "p",
     "h": "Os erros mais comuns em blocos:"
    },
    {
     "t": "tabela",
     "cab": [
      "Erro",
      "O que acontece",
      "Exemplo"
     ],
     "linhas": [
      [
       "🔃 Ordem trocada",
       "Os passos saem fora de ordem",
       "mostrar “fim” antes do repita"
      ],
      [
       "📦 Bloco no lugar errado",
       "Dentro em vez de fora (ou o contrário)",
       "“fim” dentro do repita aparece 3 vezes"
      ],
      [
       "🔢 Número errado",
       "Repete demais ou de menos",
       "repita 4 em vez de 3"
      ],
      [
       "⚖️ Condição trocada",
       "Escolhe o caminho errado",
       "se nota &lt; 5, mostrar “passou”"
      ],
      [
       "✏️ Valor errado",
       "Texto ou conta errada",
       "mostrar “Óla” em vez de “Olá”"
      ],
      [
       "♾️ Repetição sem fim",
       "O programa não para",
       "enquanto verdadeiro, sem nunca mudar"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O método do detetive 🕵️ (4 passos):</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1. Rodar",
       "Aperte ▶️ e veja o que aparece"
      ],
      [
       "2. Comparar",
       "Compare com o que <strong>devia</strong> aparecer: em que <strong>linha</strong> começou a diferença?"
      ],
      [
       "3. Achar",
       "Procure o bloco responsável por aquela linha"
      ],
      [
       "4. Mudar uma coisa só e testar de novo",
       "Se mudar tudo de uma vez, você não sabe o que resolveu"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O portal ajuda no passo 2: ele diz <strong>qual linha</strong> saiu diferente."
    }
   ],
   "termos": [
    {
     "termo": "Bug",
     "rotulo": "<strong>Bug</strong>",
     "def": "em inglês, “inseto”: um erro no programa. O nome ficou famoso em 1947, quando uma mariposa presa num computador causou uma falha."
    },
    {
     "termo": "Depurar",
     "rotulo": "<strong>Depurar</strong>",
     "def": "achar e consertar os erros de um programa. Em inglês, <em>debug</em> (tirar o inseto)."
    },
    {
     "termo": "Testar",
     "rotulo": "<strong>Testar</strong>",
     "def": "rodar o programa para ver se ele faz o que devia."
    },
    {
     "termo": "Resultado esperado",
     "rotulo": "<strong>Resultado esperado</strong>",
     "def": "o que o programa <strong>devia</strong> mostrar."
    },
    {
     "termo": "Resultado obtido",
     "rotulo": "<strong>Resultado obtido</strong>",
     "def": "o que o programa <strong>mostrou de verdade</strong>."
    },
    {
     "termo": "Repetição sem fim",
     "rotulo": "<strong>Repetição sem fim</strong> (laço infinito)",
     "def": "repetição que nunca termina, porque a condição de parar nunca acontece."
    }
   ],
   "ondeUso": {
    "itens": [
     "Quando um <strong>aplicativo atualiza</strong> “com correções de erros”, foi alguém depurando o programa.",
     "Quando a <strong>receita</strong> dá errado, você depura: o que eu fiz diferente? Muito sal? Pouco tempo no forno?",
     "Em <strong>jogos</strong>, os testadores jogam muitas vezes procurando bugs antes de lançar."
    ],
    "reflexao": "Pense e escreva: conte uma vez em que você achou o erro de alguma coisa (um jogo, uma receita, uma conta) testando e comparando."
   },
   "alertas": [],
   "vf": [
    "Bug é um erro no programa.",
    "Depurar é achar e consertar os erros de um programa.",
    "Para depurar, o melhor é mudar tudo de uma vez.",
    "Comparar o resultado obtido com o esperado ajuda a achar o erro.",
    "Uma repetição sem fim é aquela que nunca termina."
   ],
   "resumo": {
    "texto": "Erro no programa é **bug**; achar e consertar é **depurar**. Erros comuns: ordem trocada, bloco dentro ou fora do lugar, número errado, condição trocada, valor errado e repetição sem fim. Método do detetive: **rodar**, **comparar** o resultado obtido com o **esperado** (em que linha começou a diferença?), **achar** o bloco responsável e **mudar uma coisa só** antes de testar de novo.",
    "chaves": [
     "bug",
     "depurar",
     "testar",
     "resultado esperado",
     "resultado obtido",
     "repetição sem fim"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "🧩",
   "titulo": "Missão 5 – Decompor e reaproveitar",
   "objetivo": "dividir um problema grande em partes menores e criar blocos próprios para reaproveitar uma parte do programa várias vezes.",
   "comecar": [
    {
     "t": "p",
     "h": "Problema grande assusta. O segredo é <strong>decompor</strong>: dividir em partes menores, que dá para resolver uma de cada vez."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: organizar a festa da turma</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Parte",
      "Quem resolve"
     ],
     "linhas": [
      [
       "🎈 Decoração",
       "Grupo 1"
      ],
      [
       "🍰 Comida",
       "Grupo 2"
      ],
      [
       "🎵 Música",
       "Grupo 3"
      ],
      [
       "🎮 Brincadeiras",
       "Grupo 4"
      ]
     ]
    },
    {
     "t": "p",
     "h": "No programa é igual. E quando uma parte <strong>se repete</strong> em vários lugares, criamos um <strong>bloco nosso</strong> com nome: ele <strong>é escrito uma vez só e chamado quando precisar</strong>. Isso é <strong>reaproveitar</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo: a música com refrão</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Sem bloco próprio",
      "Com o bloco <strong>refrão</strong>"
     ],
     "linhas": [
      [
       "verso 1 · la la la · la la la · verso 2 · la la la · la la la",
       "criar o bloco <strong>refrão</strong> (la la la · la la la) uma vez só; programa: verso 1 · <strong>refrão</strong> · verso 2 · <strong>refrão</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Vantagens de criar o seu bloco (na gaveta 🧩 <strong>Meus blocos</strong>, com “para fazer algo” e dando um nome):"
    },
    {
     "t": "tabela",
     "cab": [
      "Vantagem",
      "Por quê"
     ],
     "linhas": [
      [
       "✂️ Programa mais curto",
       "A parte repetida é escrita uma vez só"
      ],
      [
       "🛠️ Conserta num lugar só",
       "Mudou o refrão? Muda no bloco e vale em todos os lugares"
      ],
      [
       "👀 Mais fácil de ler",
       "O nome do bloco diz o que ele faz"
      ],
      [
       "👥 Dá para dividir o trabalho",
       "Cada colega cria um bloco"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Decompor",
     "rotulo": "<strong>Decompor</strong>",
     "def": "dividir um problema grande em partes menores, mais fáceis de resolver."
    },
    {
     "termo": "Reaproveitar",
     "rotulo": "<strong>Reaproveitar</strong> (reutilizar)",
     "def": "usar de novo uma parte que já está pronta, em vez de fazer tudo outra vez."
    },
    {
     "termo": "Bloco próprio",
     "rotulo": "<strong>Bloco próprio</strong> (função ou procedimento)",
     "def": "conjunto de blocos que você junta, dá um nome e chama quando precisar. Fica na gaveta 🧩 Meus blocos."
    },
    {
     "termo": "Chamar",
     "rotulo": "<strong>Chamar</strong>",
     "def": "usar o bloco próprio no programa. Cada vez que ele é chamado, os blocos de dentro são executados."
    },
    {
     "termo": "Colaborar",
     "rotulo": "<strong>Colaborar</strong>",
     "def": "trabalhar junto, cada um fazendo uma parte do mesmo projeto."
    }
   ],
   "ondeUso": {
    "itens": [
     "Num <strong>trabalho em grupo</strong>, cada um faz uma parte (introdução, pesquisa, cartaz): decomposição.",
     "Na <strong>fábrica de carros</strong>, cada setor monta uma parte (motor, porta, pintura).",
     "O botão <strong>“compartilhar”</strong> é um bloco pronto que todo aplicativo reaproveita."
    ],
    "reflexao": "Pense e escreva: decomponha uma tarefa de casa (arrumar o quarto, fazer o almoço) em pelo menos 3 partes."
   },
   "alertas": [],
   "vf": [
    "Decompor é dividir um problema grande em partes menores.",
    "Um bloco próprio precisa ser escrito de novo cada vez que é usado.",
    "Se eu mudar o bloco próprio, a mudança vale em todos os lugares onde ele é chamado.",
    "Chamar o bloco é usar o bloco no programa.",
    "Num trabalho em grupo, dividir as partes entre os colegas é um exemplo de decomposição."
   ],
   "resumo": {
    "texto": "**Decompor** é dividir um problema grande em partes menores. Quando uma parte se repete, criamos um **bloco próprio** (função) com nome, na gaveta 🧩 Meus blocos, e o **chamamos** sempre que precisar: isso é **reaproveitar**. Vantagens: programa mais curto, conserto num lugar só, leitura mais fácil e trabalho dividido entre colegas (**colaborar**).",
    "chaves": [
     "decompor",
     "reaproveitar",
     "bloco próprio",
     "função",
     "chamar",
     "colaborar"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "👥",
   "titulo": "Missão 6 – Programar em dupla",
   "objetivo": "programar em dupla com os papéis de piloto e navegador, combinar o plano antes de montar e criar juntos um programa completo.",
   "comecar": [
    {
     "t": "p",
     "h": "Programadores de verdade trabalham muito em <strong>dupla</strong>. Um computador, duas cabeças, dois <strong>papéis</strong> que se revezam:"
    },
    {
     "t": "tabela",
     "cab": [
      "Papel",
      "O que faz",
      "O que NÃO faz"
     ],
     "linhas": [
      [
       "🕹️ Piloto",
       "Fica com o mouse e o teclado e monta os blocos",
       "Não decide tudo sozinho"
      ],
      [
       "🧭 Navegador",
       "Lê o enunciado, pensa no próximo passo, confere cada bloco e procura erros",
       "Não pega o mouse"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>A cada 10 minutos, troquem de papel!</strong> Assim os dois aprendem tudo."
    },
    {
     "t": "p",
     "h": "<strong>O jeito de trabalhar (4 passos):</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que a dupla faz"
     ],
     "linhas": [
      [
       "1. 📝 Planejar",
       "Ler o problema juntos e decompor em partes"
      ],
      [
       "2. 🧱 Montar",
       "O piloto monta uma parte; o navegador confere"
      ],
      [
       "3. ▶️ Testar",
       "Rodar depois de cada parte, não só no final"
      ],
      [
       "4. 🔄 Trocar",
       "Trocar de papel e seguir para a próxima parte"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Combinados da dupla:</strong> falar com respeito (“acho que esse bloco vai dentro do repita”, e não “você é burro”); ouvir a ideia do outro antes de testar a sua; o erro é <strong>da dupla</strong>, não de um só."
    }
   ],
   "termos": [
    {
     "termo": "Programação em dupla",
     "rotulo": "<strong>Programação em dupla</strong>",
     "def": "duas pessoas programando juntas no mesmo computador, com papéis diferentes."
    },
    {
     "termo": "Piloto",
     "rotulo": "<strong>Piloto</strong>",
     "def": "quem controla o mouse e o teclado e monta os blocos."
    },
    {
     "termo": "Navegador",
     "rotulo": "<strong>Navegador</strong>",
     "def": "quem lê, planeja, confere cada bloco e procura erros, sem mexer no mouse."
    },
    {
     "termo": "Revezar",
     "rotulo": "<strong>Revezar</strong>",
     "def": "trocar de papel de tempos em tempos."
    },
    {
     "termo": "Plano",
     "rotulo": "<strong>Plano</strong>",
     "def": "a lista das partes do programa, combinada antes de começar a montar."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>carro</strong>, o motorista dirige e quem está ao lado olha o mapa: piloto e navegador.",
     "Num <strong>jogo cooperativo</strong>, um ataca e o outro cuida da vida do time.",
     "Nas <strong>empresas de tecnologia</strong>, programar em dupla é usado para errar menos e ensinar os novatos."
    ],
    "reflexao": "Pense e escreva: o que faz uma dupla trabalhar bem? Dê dois exemplos de atitude."
   },
   "alertas": [],
   "vf": [
    "O piloto fica com o mouse e monta os blocos.",
    "O navegador pega o mouse sempre que quiser.",
    "Na programação em dupla, os papéis devem ser revezados.",
    "É melhor testar só no final, quando o programa inteiro estiver pronto.",
    "Quando o programa dá erro, o erro é da dupla, não de um só."
   ],
   "resumo": {
    "texto": "Na **programação em dupla**, o **piloto** fica com o mouse e monta os blocos e o **navegador** lê, planeja, confere e procura erros, sem pegar o mouse. Os dois **revezam** a cada 10 minutos. O jeito de trabalhar: **planejar** (decompor), **montar** uma parte, **testar** logo e **trocar** de papel. Respeito sempre: o erro é da dupla.",
    "chaves": [
     "programação em dupla",
     "piloto",
     "navegador",
     "revezar",
     "plano"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🔍",
   "titulo": "Missão 7 – Extra: Desafios de depuração",
   "objetivo": "usar o método do detetive para consertar programas mais difíceis, com listas, fichas e blocos próprios.",
   "comecar": [
    {
     "t": "p",
     "h": "Hoje é dia de detetive 🕵️! Os programas chegam <strong>quebrados</strong> e a sua missão é consertar. Use o mesmo método da Missão 4:"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que fazer"
     ],
     "linhas": [
      [
       "1. Rodar",
       "Aperte ▶️ e veja o que aparece"
      ],
      [
       "2. Comparar",
       "Compare com o esperado: em que <strong>linha</strong> começou a diferença?"
      ],
      [
       "3. Achar",
       "Procure o bloco responsável por aquela linha"
      ],
      [
       "4. Mudar uma coisa só e testar de novo",
       "Uma mudança por vez"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Pistas dos erros com listas e fichas:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Pista",
      "Erro provável"
     ],
     "linhas": [
      [
       "Apareceu o item errado da lista",
       "Posição errada (lembre: começa no 1)"
      ],
      [
       "Apareceu “(sem idade)”",
       "O nome do campo está diferente (idade × idadee)"
      ],
      [
       "Um item apareceu repetido ou faltou",
       "O para cada está percorrendo a lista errada, ou o bloco está fora do lugar"
      ],
      [
       "A parte repetida saiu errada em vários lugares",
       "O erro está dentro do bloco próprio: conserte lá, uma vez só"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Pista",
     "rotulo": "<strong>Pista</strong>",
     "def": "o sinal que ajuda a achar o erro, como a linha que saiu diferente."
    },
    {
     "termo": "Hipótese",
     "rotulo": "<strong>Hipótese</strong>",
     "def": "o seu palpite sobre onde está o erro, que você testa mudando uma coisa."
    },
    {
     "termo": "Corrigir",
     "rotulo": "<strong>Corrigir</strong>",
     "def": "mudar o programa para ele fazer o que devia."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>mecânico</strong> testa uma peça de cada vez até achar o defeito do carro.",
     "O <strong>médico</strong> faz perguntas e exames (pistas) até descobrir a doença.",
     "Na <strong>conta de matemática errada</strong>, você refaz passo a passo para achar onde errou."
    ],
    "reflexao": "Pense e escreva: qual dos passos do método do detetive você acha mais importante? Por quê?"
   },
   "alertas": [],
   "vf": [
    "Se apareceu o item errado da lista, a posição pode estar errada.",
    "Uma hipótese é um palpite sobre onde está o erro.",
    "Se o erro está dentro do bloco próprio, preciso consertar em cada lugar onde ele é chamado.",
    "Mudar uma coisa de cada vez ajuda a saber o que resolveu o problema.",
    "Apareceu “(sem idade)”: o nome do campo pode estar escrito diferente."
   ],
   "resumo": {
    "texto": "Para depurar: **rodar**, **comparar** com o esperado, **achar** o bloco responsável e **mudar uma coisa só**. Pistas: item errado = **posição** errada; “(sem campo)” = **nome do campo** diferente; item repetido ou faltando = bloco fora do lugar ou lista errada; erro repetido em vários lugares = conserte dentro do **bloco próprio**. A **hipótese** é o palpite que você testa.",
    "chaves": [
     "pista",
     "hipótese",
     "corrigir",
     "depurar",
     "posição",
     "campo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "❓",
   "titulo": "Missão 8 – Extra: O placar do quiz",
   "objetivo": "usar listas, repetição, seleção e uma variável contadora para corrigir as respostas de um quiz e mostrar o placar.",
   "comecar": [
    {
     "t": "p",
     "h": "Todo jogo de perguntas (quiz) precisa de um programa que <strong>confere as respostas</strong> e <strong>conta os pontos</strong>. Vamos montar esse programa!"
    },
    {
     "t": "p",
     "h": "O programa usa <strong>duas listas</strong> do mesmo tamanho, comparando posição por posição:"
    },
    {
     "t": "tabela",
     "cab": [
      "Posição",
      "1",
      "2",
      "3",
      "4"
     ],
     "linhas": [
      [
       "Lista <strong>gabarito</strong> (respostas certas)",
       "B",
       "A",
       "D",
       "C"
      ],
      [
       "Lista <strong>respostas</strong> (do jogador)",
       "B",
       "C",
       "D",
       "C"
      ],
      [
       "Acertou?",
       "✅",
       "❌",
       "✅",
       "✅"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Para contar os acertos usamos uma <strong>variável contadora</strong>, que começa em <strong>0</strong> e <strong>aumenta 1</strong> a cada acerto:"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "Bloco"
     ],
     "linhas": [
      [
       "1",
       "definir <strong>acertos</strong> para 0"
      ],
      [
       "2",
       "definir <strong>i</strong> para 1 (a posição que estamos conferindo)"
      ],
      [
       "3",
       "repita 4 vezes: <strong>se</strong> item <strong>i</strong> do gabarito = item <strong>i</strong> das respostas, <strong>então</strong> alterar <strong>acertos</strong> por 1; depois alterar <strong>i</strong> por 1"
      ],
      [
       "4",
       "mostrar na tela acertos → <strong>3</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O bloco <strong>alterar … por 1</strong> (gaveta 📦 Variáveis) soma 1 ao valor da variável."
    }
   ],
   "termos": [
    {
     "termo": "Quiz",
     "rotulo": "<strong>Quiz</strong>",
     "def": "jogo de perguntas e respostas."
    },
    {
     "termo": "Gabarito",
     "rotulo": "<strong>Gabarito</strong>",
     "def": "a lista das respostas certas."
    },
    {
     "termo": "Contador",
     "rotulo": "<strong>Contador</strong>",
     "def": "variável que começa em 0 e aumenta de 1 em 1 para contar alguma coisa (acertos, vidas, moedas)."
    },
    {
     "termo": "Alterar … por 1",
     "rotulo": "<strong>Alterar … por 1</strong>",
     "def": "bloco que soma 1 ao valor de uma variável."
    },
    {
     "termo": "Comparar",
     "rotulo": "<strong>Comparar</strong>",
     "def": "verificar se dois valores são iguais (=) ou diferentes, ou qual é maior."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>placar do Wayground</strong> e de jogos on-line confere cada resposta e conta os pontos assim.",
     "Na <strong>prova do portal</strong>, o programa compara as suas respostas com o gabarito.",
     "O <strong>contador de passos</strong> do celular soma 1 a cada passo."
    ],
    "reflexao": "Pense e escreva: que outra coisa um programa poderia contar com uma variável contadora?"
   },
   "alertas": [],
   "vf": [
    "O gabarito é a lista das respostas certas.",
    "Uma variável contadora começa em 0 e aumenta a cada vez que conta algo.",
    "Para corrigir o quiz, comparamos as duas listas posição por posição.",
    "O bloco alterar acertos por 1 apaga a variável acertos.",
    "O placar de um jogo on-line usa um contador."
   ],
   "resumo": {
    "texto": "Para corrigir um **quiz**, o programa compara a lista **gabarito** com a lista **respostas**, posição por posição. Uma variável **contadora** começa em 0 e o bloco **alterar … por 1** soma 1 a cada acerto. No fim, o programa mostra o placar. Contadores estão em placares, provas e contadores de passos.",
    "chaves": [
     "quiz",
     "gabarito",
     "contador",
     "alterar por 1",
     "comparar"
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
