/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-8ano-4bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-8ano-4bim", {
 "titulo": "Apostila de Informática – 8º Ano – 4º Bimestre",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai cumprir <strong>3 missões</strong> e um <strong>projeto final</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🗂️ Missão 1 – Listas: buscar e ordenar",
     "Pensamento Computacional"
    ],
    [
     "☁️ Missão 2 – Internet por dentro: nuvem e paralelismo",
     "Mundo Digital"
    ],
    [
     "🔍 Missão 3 – Dados pessoais e informação confiável",
     "Cultura Digital"
    ],
    [
     "🏁 Projeto final – Meu Passaporte de Missões",
     "Todos os temas"
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
     "Obrigatório: vale <strong>1,0 ponto</strong> por missão e libera os jogos livres"
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
     "h": "🎯 <strong>Missão</strong> – as atividades que você faz no computador; o portal confere na hora"
    },
    {
     "nivel": 0,
     "h": "✅ <strong>Perguntas rápidas</strong> – verdadeiro ou falso para conferir"
    },
    {
     "nivel": 0,
     "h": "🧠 <strong>Resumo da Aula</strong> – leia com a turma; ele ajuda a estudar para a avaliação"
    }
   ]
  },
  {
   "t": "p",
   "h": "🔎 <strong>Todas as respostas estão na apostila:</strong> leia o <strong>💡 Para começar</strong> e o <strong>📖 O que significa?</strong>. Errou? Leia de novo com calma, peça uma <strong>💡 Dica</strong> ou veja a <strong>📘 resolução comentada</strong>. Você consegue fazer tudo sozinho!"
  },
  {
   "t": "p",
   "h": "<strong>Regra de ouro:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor: não precisa chamar ninguém."
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "🗂️",
   "titulo": "Missão 1 – Listas: buscar e ordenar como um computador",
   "objetivo": "usar listas para organizar informações, encontrar um item com a busca sequencial e a busca binária e colocar uma lista em ordem com o método da bolha.",
   "comecar": [
    {
     "t": "p",
     "h": "No 7º ano você viu que uma <strong>lista</strong> guarda vários dados em ordem e que cada item ocupa uma <strong>posição</strong> (a primeira é a posição 1). Agora vamos aprender o que os computadores fazem com as listas o tempo todo: <strong>buscar</strong> um item e <strong>ordenar</strong> os itens."
    },
    {
     "t": "tabela",
     "cab": [
      "Algoritmo",
      "Como funciona",
      "Quando usar"
     ],
     "linhas": [
      [
       "🔎 Busca sequencial",
       "Olha os itens um por um, do começo ao fim, até achar",
       "Em qualquer lista, mesmo desordenada"
      ],
      [
       "✂️ Busca binária",
       "Olha o item do <strong>meio</strong>: se o procurado for maior, descarta a metade da esquerda; se for menor, descarta a da direita; repete com a metade que sobrou",
       "Só em lista <strong>ordenada</strong>; é muito mais rápida em listas grandes"
      ],
      [
       "🫧 Método da bolha",
       "Compara <strong>vizinhos</strong> e troca os que estão fora de ordem; repete as passadas até não haver nenhuma troca",
       "Para colocar uma lista em ordem crescente ou alfabética"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como achar o meio na busca binária:</strong> some a primeira e a última posição e divida por 2. Se der número quebrado, despreze a vírgula. Exemplo: posições 1 a 8 → (1 + 8) ÷ 2 = 4,5 → meio = posição <strong>4</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Por que a busca binária só funciona em lista ordenada?</strong> Ela joga fora a metade em que o número “não pode estar”. Se a lista estiver fora de ordem, o número procurado pode estar justamente na metade que foi descartada, e a busca erra."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo do método da bolha</strong> com a lista [5, 2, 8, 1]:"
    },
    {
     "t": "lista",
     "ord": true,
     "itens": [
      {
       "nivel": 0,
       "h": "Compara 5 e 2 → fora de ordem → troca → [2, 5, 8, 1]"
      },
      {
       "nivel": 0,
       "h": "Compara 5 e 8 → em ordem → não troca"
      },
      {
       "nivel": 0,
       "h": "Compara 8 e 1 → fora de ordem → troca → [2, 5, 1, 8]"
      }
     ]
    },
    {
     "t": "p",
     "h": "Fim da <strong>1ª passada</strong>: o maior número (8) “subiu” para o final, como uma bolha. As próximas passadas fazem o mesmo com os outros números, até a lista ficar [1, 2, 5, 8]."
    }
   ],
   "termos": [
    {
     "termo": "Busca sequencial",
     "rotulo": "<strong>Busca sequencial</strong> (<em>sequência</em> = um depois do outro)",
     "def": "olhar os itens da lista um por um, do começo ao fim."
    },
    {
     "termo": "Busca binária",
     "rotulo": "<strong>Busca binária</strong> (<em>binário</em> = de dois)",
     "def": "olhar o meio e dividir a lista em duas metades a cada tentativa, descartando uma delas. Só funciona em lista ordenada."
    },
    {
     "termo": "Ordenação",
     "rotulo": "<strong>Ordenação</strong>",
     "def": "colocar os itens em ordem: <strong>crescente</strong> (do menor para o maior), <strong>decrescente</strong> (do maior para o menor) ou <strong>alfabética</strong> (de A a Z)."
    },
    {
     "termo": "Método da bolha",
     "rotulo": "<strong>Método da bolha</strong> (em inglês, <em>bubble sort</em>)",
     "def": "ordena comparando vizinhos e trocando os que estão fora de ordem; o maior “sobe” para o fim, como uma bolha."
    },
    {
     "termo": "Passada",
     "rotulo": "<strong>Passada</strong>",
     "def": "uma volta completa pela lista, do começo ao fim, comparando os vizinhos."
    },
    {
     "termo": "Comparação",
     "rotulo": "<strong>Comparação</strong>",
     "def": "olhar dois itens e ver qual é o maior, ou se são iguais."
    }
   ],
   "ondeUso": {
    "itens": [
     "Os <strong>contatos do celular</strong> ficam em ordem alfabética para você achar um nome rápido.",
     "A <strong>tabela do campeonato</strong> e o <strong>ranking</strong> dos jogos são listas ordenadas por pontos.",
     "Na loja on-line, o botão “<strong>ordenar por menor preço</strong>” coloca a lista em ordem."
    ],
    "reflexao": "Onde você já viu uma lista em ordem (alfabética, de preço ou de pontos)? Para que ela servia?"
   },
   "alertas": [
    "Nesta missão use <strong>só o Bloco de Notas</strong>."
   ],
   "vf": [
    "Na busca sequencial, olhamos os itens da lista um por um.",
    "A busca binária funciona em qualquer lista, mesmo desordenada.",
    "A busca binária descarta metade da lista a cada tentativa.",
    "No método da bolha, comparamos itens vizinhos e trocamos os que estão fora de ordem.",
    "Ordenar uma lista é o mesmo que apagar os itens repetidos."
   ],
   "resumo": {
    "texto": "Uma **lista** guarda dados em ordem, cada um em uma **posição**. Para encontrar um item, a **busca sequencial** olha um por um e funciona em qualquer lista. A **busca binária** só funciona em lista **ordenada**: olha o meio e descarta metade a cada tentativa, por isso é muito mais rápida. Para **ordenar**, o **método da bolha** compara vizinhos e troca os que estão fora de ordem, em várias **passadas**, até não haver mais trocas.",
    "chaves": [
     "lista",
     "posição",
     "busca sequencial",
     "busca binária",
     "ordenação",
     "método da bolha",
     "passada",
     "comparação"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "☁️",
   "titulo": "Missão 2 – Internet por dentro: nuvem e processamento em paralelo",
   "objetivo": "conhecer as partes que formam a internet (provedor, backbone, cabos submarinos, DNS e data centers) e entender como os computadores dividem o trabalho em paralelo, disputam recursos e guardam dados de forma distribuída.",
   "comecar": [
    {
     "t": "p",
     "h": "No 7º ano você viu que as mensagens viajam em <strong>pacotes</strong>, passam por <strong>roteadores</strong> e chegam a <strong>servidores</strong>. Agora vamos ver o caminho completo e onde ficam os servidores."
    },
    {
     "t": "tabela",
     "cab": [
      "Parte da internet",
      "O que é",
      "Comparação"
     ],
     "linhas": [
      [
       "🏢 Provedor",
       "Empresa que liga a sua casa ou a escola à internet (fibra, rádio ou rede do celular)",
       "A “porta de saída” do bairro"
      ],
      [
       "🛣️ Backbone",
       "As ligações principais e mais rápidas da internet, entre cidades e países",
       "As rodovias principais"
      ],
      [
       "🌊 Cabo submarino",
       "Cabos de fibra óptica no fundo do mar que ligam os continentes; levam quase todo o tráfego entre países",
       "Pontes entre continentes"
      ],
      [
       "📒 DNS",
       "Sistema que traduz o nome do site (ex.: escola.com.br) no endereço IP do servidor",
       "A agenda de contatos do celular"
      ],
      [
       "🗄️ Data center",
       "Prédio com milhares de servidores ligados 24 horas, com energia reserva e refrigeração",
       "Um “armazém” de computadores"
      ],
      [
       "☁️ Nuvem",
       "Guardar arquivos e usar programas em servidores de data centers, pela internet",
       "Guardar as coisas num armário fora de casa"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Os computadores também precisam <strong>dividir o trabalho</strong>:"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "<strong>Paralelismo:</strong> partes de uma tarefa são feitas <strong>ao mesmo tempo</strong> por vários processadores ou <strong>núcleos</strong>. Um processador de 4 núcleos é como 4 colegas dividindo uma lista de exercícios."
      },
      {
       "nivel": 0,
       "h": "<strong>Concorrência:</strong> várias tarefas <strong>disputam o mesmo recurso</strong> e precisam de regras para esperar a vez. Exemplo: 19 computadores mandando imprimir na mesma impressora formam uma <strong>fila de impressão</strong>."
      },
      {
       "nivel": 0,
       "h": "<strong>Sistema distribuído:</strong> dados e processamento ficam <strong>espalhados em vários computadores</strong>, em lugares diferentes. As suas fotos na nuvem têm cópias em mais de um data center: se um falhar, outro responde."
      }
     ]
    }
   ],
   "termos": [
    {
     "termo": "Provedor",
     "rotulo": "<strong>Provedor</strong> (de <em>prover</em> = fornecer)",
     "def": "a empresa que vende o acesso à internet para casas e escolas. Onde eu vejo: o nome da empresa na conta de internet."
    },
    {
     "termo": "Backbone",
     "rotulo": "<strong>Backbone</strong> (em inglês, espinha dorsal)",
     "def": "as ligações principais e mais rápidas da internet, entre cidades e países, como a coluna que segura o corpo."
    },
    {
     "termo": "Fibra óptica",
     "rotulo": "<strong>Fibra óptica</strong>",
     "def": "cabo fininho, de vidro ou plástico, que leva os dados em forma de luz, muito rápido."
    },
    {
     "termo": "Cabo submarino",
     "rotulo": "<strong>Cabo submarino</strong>",
     "def": "cabo de fibra óptica no fundo do mar que liga os continentes."
    },
    {
     "termo": "DNS",
     "rotulo": "<strong>DNS</strong> (<em>Domain Name System</em>, Sistema de Nomes de Domínio)",
     "def": "a “agenda de contatos” da internet, que troca o nome do site pelo endereço IP do servidor. <strong>Domínio</strong> é o nome do site, como escola.com.br."
    },
    {
     "termo": "IP",
     "rotulo": "<strong>IP</strong> (<em>Internet Protocol</em>, Protocolo de Internet)",
     "def": "o número que identifica cada aparelho na rede, visto no 7º ano."
    },
    {
     "termo": "Data center",
     "rotulo": "<strong>Data center</strong> (em inglês, centro de dados)",
     "def": "prédio com milhares de servidores ligados 24 horas, com energia reserva e refrigeração."
    },
    {
     "termo": "Nuvem",
     "rotulo": "<strong>Nuvem</strong> (em inglês, <em>cloud</em>)",
     "def": "guardar arquivos e usar programas em servidores de data centers, pela internet. Onde eu vejo: Google Fotos, Google Drive, iCloud e OneDrive."
    },
    {
     "termo": "Paralelismo",
     "rotulo": "<strong>Paralelismo</strong> (<em>paralelo</em> = lado a lado, ao mesmo tempo)",
     "def": "partes de uma tarefa feitas ao mesmo tempo por vários processadores ou núcleos."
    },
    {
     "termo": "Núcleo",
     "rotulo": "<strong>Núcleo</strong> (em inglês, <em>core</em>)",
     "def": "cada “cérebro” dentro do processador. Onde eu vejo: “processador de 8 núcleos” (<em>octa-core</em>) na caixa do celular."
    },
    {
     "termo": "Concorrência",
     "rotulo": "<strong>Concorrência</strong> (de <em>concorrer</em> = disputar)",
     "def": "várias tarefas disputando o mesmo recurso e esperando a vez, como na fila da impressora."
    },
    {
     "termo": "Sistema distribuído",
     "rotulo": "<strong>Sistema distribuído</strong>",
     "def": "dados e processamento espalhados em vários computadores, em lugares diferentes."
    }
   ],
   "ondeUso": {
    "itens": [
     "O vídeo que você assiste vem de um <strong>data center</strong> que pode estar em outro país.",
     "As <strong>fotos na nuvem</strong> aparecem em outro celular porque estão guardadas em servidores.",
     "Quando todos mandam imprimir ao mesmo tempo, a impressora forma uma <strong>fila</strong>: isso é concorrência."
    ],
    "reflexao": "Que serviço de nuvem você ou sua família usa (fotos, e-mail, jogos)? O que aconteceria se ele saísse do ar?"
   },
   "alertas": [
    "Tudo desta missão é feito no próprio portal. Não precisa salvar nada no computador: o portal registra o que você fez."
   ],
   "vf": [
    "O DNS traduz o nome de um site no endereço IP do servidor.",
    "Os cabos submarinos não são usados pela internet.",
    "Um data center é um prédio com muitos servidores funcionando o tempo todo.",
    "No processamento em paralelo, partes de uma tarefa são feitas ao mesmo tempo.",
    "Guardar arquivos na nuvem é guardar no próprio computador, sem usar a internet."
   ],
   "resumo": {
    "texto": "A internet é formada por **provedores**, que ligam casas e escolas à rede, pelo **backbone**, as ligações principais, e por **cabos submarinos** que unem os continentes. O **DNS** traduz o nome do site no endereço IP, e os sites ficam em **data centers**, prédios cheios de servidores; usar esses servidores pela internet é usar a **nuvem**. Os computadores ganham velocidade com o **paralelismo** (partes feitas ao mesmo tempo, em vários **núcleos**), organizam a **concorrência** (disputa pelo mesmo recurso, como a fila de impressão) e usam **sistemas distribuídos** (dados espalhados em vários lugares).",
    "chaves": [
     "provedor",
     "backbone",
     "cabo submarino",
     "DNS",
     "data center",
     "nuvem",
     "paralelismo",
     "núcleo",
     "concorrência",
     "sistema distribuído"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🔍",
   "titulo": "Missão 3 – Dados pessoais, privacidade e informação confiável",
   "objetivo": "reconhecer os dados pessoais que os aplicativos pedem e os riscos de entregá-los, entender termos de uso e permissões e verificar se uma informação é confiável antes de compartilhar.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Seus dados, sua privacidade:</strong>"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "<strong>Dado pessoal</strong> é tudo o que identifica você: nome, data de nascimento, endereço, telefone, CPF, foto, localização, escola. Informações que <strong>não identificam ninguém</strong>, como a previsão do tempo ou o resultado do jogo de ontem, <strong>não são dados pessoais</strong>."
      },
      {
       "nivel": 0,
       "h": "<strong>Dado sensível</strong> pede cuidado extra: saúde, religião, opinião política, origem étnica e dados <strong>biométricos</strong> (impressão digital, reconhecimento do rosto)."
      },
      {
       "nivel": 0,
       "h": "A <strong>LGPD</strong> (Lei Geral de Proteção de Dados, Lei nº 13.709/2018) obriga as empresas a explicar quais dados coletam e para quê, e protege de forma especial os dados de crianças e adolescentes."
      },
      {
       "nivel": 0,
       "h": "<strong>Termos de uso</strong> são as regras que você aceita ao clicar em “Aceito”: dizem quais dados o serviço coleta, com quem compartilha, a idade mínima e como apagar a conta."
      },
      {
       "nivel": 0,
       "h": "<strong>Combinados da sala de informática:</strong> usar só os programas e sites que o professor pediu · não comer nem beber perto do computador · não mexer no computador nem nos arquivos dos colegas · senha é pessoal, nunca compartilhe com a turma · não mexer nos cabos nem nas peças do computador · chamar o professor quando o computador travar."
      },
      {
       "nivel": 0,
       "h": "<strong>Permissões:</strong> o aplicativo pede acesso à câmera, ao microfone, à localização ou aos contatos. Pergunte sempre: <strong>ele precisa disso para funcionar?</strong> Uma lanterna que pede os seus contatos é motivo para desconfiar."
      },
      {
       "nivel": 0,
       "h": "<strong>Pegada digital</strong> é o rastro de tudo o que você publica, curte e comenta. Ela pode continuar visível por muitos anos."
      }
     ]
    },
    {
     "t": "p",
     "h": "<strong>Informação confiável:</strong> antes de compartilhar, faça as 4 perguntas do checador:"
    },
    {
     "t": "tabela",
     "cab": [
      "Pergunta",
      "O que observar"
     ],
     "linhas": [
      [
       "👤 Quem publicou?",
       "Há autor ou veículo conhecido? Uma fonte anônima é sinal de alerta"
      ],
      [
       "📅 Quando?",
       "A data é recente ou é uma notícia velha circulando de novo?"
      ],
      [
       "📰 Outros confirmam?",
       "Sites de notícia confiáveis falam a mesma coisa?"
      ],
      [
       "❗ Como está escrita?",
       "Título exagerado, muitas exclamações, “compartilhe antes que apaguem”, erros de português"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Desinformação</strong> (ou fake news) é a informação falsa ou distorcida espalhada como se fosse verdade. Uma fonte com <strong>viés</strong> mostra só um lado do assunto. Compartilhar é responsabilidade de quem compartilha."
    }
   ],
   "termos": [
    {
     "termo": "Dado pessoal",
     "rotulo": "<strong>Dado pessoal</strong>",
     "def": "toda informação que identifica você."
    },
    {
     "termo": "Dado sensível",
     "rotulo": "<strong>Dado sensível</strong>",
     "def": "dado pessoal que pede cuidado extra, porque pode gerar discriminação: saúde, religião, opinião política, origem étnica e biometria."
    },
    {
     "termo": "Biometria",
     "rotulo": "<strong>Biometria</strong> (<em>bio</em> = vida; <em>metria</em> = medida)",
     "def": "reconhecer a pessoa pelo corpo, como pela impressão digital, pelo rosto ou pela voz."
    },
    {
     "termo": "CPF",
     "rotulo": "<strong>CPF</strong> (Cadastro de Pessoas Físicas)",
     "def": "o número de documento de cada brasileiro na Receita Federal. Por isso não se informa em qualquer site."
    },
    {
     "termo": "LGPD",
     "rotulo": "<strong>LGPD</strong> (Lei Geral de Proteção de Dados, Lei nº 13.709/2018)",
     "def": "lei brasileira que obriga as empresas a explicar quais dados coletam e para quê, e protege de forma especial os dados de crianças e adolescentes."
    },
    {
     "termo": "Termos de uso",
     "rotulo": "<strong>Termos de uso</strong>",
     "def": "o contrato que você aceita ao clicar em “Aceito”."
    },
    {
     "termo": "Permissão",
     "rotulo": "<strong>Permissão</strong>",
     "def": "a autorização que o aplicativo pede para usar a câmera, o microfone, a localização ou os contatos. Onde eu vejo: Configurações → Aplicativos → Permissões."
    },
    {
     "termo": "GPS",
     "rotulo": "<strong>GPS</strong> (<em>Global Positioning System</em>, Sistema de Posicionamento Global)",
     "def": "descobre onde o aparelho está usando sinais de satélites."
    },
    {
     "termo": "Pegada digital",
     "rotulo": "<strong>Pegada digital</strong>",
     "def": "o rastro de tudo o que você publica, curte e comenta."
    },
    {
     "termo": "Fonte",
     "rotulo": "<strong>Fonte</strong>",
     "def": "quem produziu a informação, como um jornal, um site ou uma pessoa."
    },
    {
     "termo": "Desinformação",
     "rotulo": "<strong>Desinformação</strong> (ou <em>fake news</em>: <em>fake</em> = falso; <em>news</em> = notícias)",
     "def": "informação falsa ou distorcida espalhada como se fosse verdade."
    },
    {
     "termo": "Viés",
     "rotulo": "<strong>Viés</strong>",
     "def": "quando a fonte mostra só um lado do assunto."
    }
   ],
   "ondeUso": {
    "itens": [
     "Lojas e aplicativos pedem <strong>CPF, telefone e localização</strong> no cadastro: pergunte para que precisam.",
     "Ao instalar um jogo, ele pede <strong>permissões</strong>, como câmera, microfone e contatos.",
     "No <strong>grupo da família</strong> circulam correntes e notícias antigas como se fossem novas."
    ],
    "reflexao": "Escreva uma mensagem ou notícia que você recebeu e desconfiou. O que fez você desconfiar?"
   },
   "alertas": [
    "<strong>Nunca escreva os seus dados verdadeiros</strong> (CPF, endereço, telefone ou senha) na apostila ou no computador da escola. Se algum dado ou foto sua for exposto na internet, conte ao professor ou a um adulto de confiança."
   ],
   "vf": [
    "Nome, endereço e telefone são dados pessoais.",
    "Um aplicativo de lanterna precisa acessar os seus contatos para funcionar.",
    "Antes de compartilhar uma notícia, devo verificar quem publicou e a data.",
    "Uma notícia com muitos compartilhamentos é sempre verdadeira.",
    "A LGPD é a lei brasileira que protege os dados pessoais."
   ],
   "resumo": {
    "texto": "**Dados pessoais** identificam você, e os **dados sensíveis** (saúde, religião, biometria) pedem cuidado extra; a **LGPD** é a lei que os protege. Antes de aceitar os **termos de uso** ou dar uma **permissão**, pergunte se o aplicativo precisa daquilo. Tudo o que publicamos forma a nossa **pegada digital**. Para não espalhar **desinformação**, verifique a **fonte**, a data, se outros sites confirmam e se o texto é exagerado.",
    "chaves": [
     "dado pessoal",
     "dado sensível",
     "LGPD",
     "termos de uso",
     "permissões",
     "pegada digital",
     "fonte",
     "desinformação"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "pf",
   "icone": "🏁",
   "titulo": "Projeto final – Meu Passaporte de Missões",
   "objetivo": "conferir as missões concluídas, completar o que faltou e registrar o que você aprendeu no bimestre.",
   "comecar": [],
   "termos": [],
   "ondeUso": {
    "itens": [],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [],
   "resumo": {
    "texto": "Neste bimestre você aprendeu a buscar e a ordenar listas como um computador, descobriu como a internet é organizada por dentro e como os computadores dividem o trabalho, e viu como proteger os seus dados e checar uma informação antes de compartilhar. As missões concluídas no portal mostram tudo o que você conquistou!",
    "chaves": [
     "missão",
     "conquista",
     "autoavaliação",
     "aprendizado"
    ]
   },
   "autoavaliacao": [
    "Encontro um item em uma lista com a busca sequencial.",
    "Uso a busca binária em uma lista ordenada e sei por que ela é mais rápida.",
    "Ordeno uma lista com o método da bolha, passada por passada.",
    "Explico o caminho de um pedido na internet: provedor, backbone, DNS e data center.",
    "Diferencio paralelismo, concorrência e sistema distribuído.",
    "Reconheço dados pessoais e sensíveis e desconfio de permissões desnecessárias.",
    "Verifico quem publicou, a data e outras fontes antes de compartilhar uma informação."
   ]
  }
 ]
});
