/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-8ano-2027-2bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-8ano-2027-2bim", {
 "titulo": "Apostila de Informática – 8º Ano – 2º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Bem-vindo ao 2º bimestre! O tema agora é <strong>Internet por dentro</strong>: o caminho que os dados fazem até a sua tela, os cabos no fundo do mar, a nuvem e como vários computadores trabalham ao mesmo tempo. Você vai cumprir <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🌐 Missão 1 – Como a internet funciona: o caminho dos pacotes",
     "Computação e Sociedade"
    ],
    [
     "📒 Missão 2 – DNS: a agenda da internet",
     "Computação e Sociedade"
    ],
    [
     "🌊 Missão 3 – Cabos submarinos e data centers",
     "Computação e Sociedade"
    ],
    [
     "☁️ Missão 4 – Nuvem: seus arquivos em outro computador",
     "Mundo Digital"
    ],
    [
     "⚙️ Missão 5 – Paralelismo e concorrência: tudo ao mesmo tempo",
     "Mundo Digital"
    ],
    [
     "🧰 Missão 6 – Projeto: escolher a estrutura certa",
     "Pensamento Computacional"
    ],
    [
     "🕸️ Missão 7 – Extra: Sistemas distribuídos",
     "Mundo Digital"
    ],
    [
     "🚀 Missão 8 – Extra: Velocidade da internet",
     "Computação e Sociedade"
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
   "icone": "🌐",
   "titulo": "Missão 1 – Como a internet funciona: o caminho dos pacotes",
   "objetivo": "explicar que a internet é uma rede de redes e que os dados viajam divididos em pacotes, com endereço, passando por roteadores.",
   "comecar": [
    {
     "t": "p",
     "h": "A <strong>internet</strong> não é uma coisa só nem fica num lugar só: é uma <strong>rede de redes</strong>. A rede da sua casa, a rede da escola e as redes das empresas do mundo inteiro estão ligadas umas às outras."
    },
    {
     "t": "p",
     "h": "Quando você manda uma foto, ela <strong>não viaja inteira</strong>. O computador corta a foto em pedacinhos chamados <strong>pacotes</strong>. Cada pacote leva:"
    },
    {
     "t": "tabela",
     "cab": [
      "O que o pacote leva",
      "Para que serve",
      "Parece com…"
     ],
     "linhas": [
      [
       "📦 Um pedaço dos dados",
       "É a parte da foto, do vídeo ou da mensagem",
       "O conteúdo de uma caixa"
      ],
      [
       "🏠 O endereço de destino (IP)",
       "Diz para qual aparelho o pacote vai",
       "O endereço escrito na caixa"
      ],
      [
       "🔢 O número do pacote",
       "Diz a ordem para montar tudo de novo",
       "“Caixa 3 de 10”"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O caminho de um pacote:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "Onde o pacote está"
     ],
     "linhas": [
      [
       "1",
       "No seu celular, que corta a mensagem em pacotes"
      ],
      [
       "2",
       "No <strong>roteador</strong> da sua casa (o aparelho do Wi-Fi)"
      ],
      [
       "3",
       "No <strong>provedor</strong>, a empresa que leva a internet até você"
      ],
      [
       "4",
       "Em vários <strong>roteadores</strong> pelo caminho, que escolhem por onde seguir"
      ],
      [
       "5",
       "No aparelho de destino, que junta os pacotes na ordem certa"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Os pacotes de uma mesma mensagem podem ir por <strong>caminhos diferentes</strong> e chegar fora de ordem; o número de cada um permite remontar tudo. Se um pacote se perde, só ele é enviado de novo. As regras que todos os aparelhos seguem para conversar se chamam <strong>protocolos</strong>; o conjunto mais usado na internet é o <strong>TCP/IP</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Internet",
     "rotulo": "<strong>Internet</strong>",
     "def": "a rede mundial que liga milhões de redes de computadores. É uma <strong>rede de redes</strong>."
    },
    {
     "termo": "Rede",
     "rotulo": "<strong>Rede</strong>",
     "def": "dois ou mais aparelhos ligados para trocar dados (por cabo ou sem fio)."
    },
    {
     "termo": "Pacote",
     "rotulo": "<strong>Pacote</strong>",
     "def": "cada pedacinho em que os dados são cortados para viajar pela rede."
    },
    {
     "termo": "Endereço IP",
     "rotulo": "<strong>Endereço IP</strong> (do inglês <em>Internet Protocol</em>, “protocolo da internet”)",
     "def": "número que identifica cada aparelho ligado à internet, como o endereço de uma casa."
    },
    {
     "termo": "Roteador",
     "rotulo": "<strong>Roteador</strong>",
     "def": "aparelho que recebe os pacotes e escolhe por onde mandá-los; o Wi-Fi da sua casa tem um."
    },
    {
     "termo": "Provedor",
     "rotulo": "<strong>Provedor</strong> (de internet)",
     "def": "empresa que liga a sua casa ou a escola à internet."
    },
    {
     "termo": "Protocolo",
     "rotulo": "<strong>Protocolo</strong>",
     "def": "conjunto de regras que os aparelhos seguem para conversar. <strong>TCP/IP</strong> é o protocolo principal da internet."
    }
   ],
   "ondeUso": {
    "itens": [
     "Ao mandar um <strong>áudio no aplicativo de mensagens</strong>, ele vai cortado em pacotes até o celular do seu amigo.",
     "Quando o <strong>vídeo trava</strong> e depois volta, alguns pacotes se atrasaram ou tiveram de ser enviados de novo.",
     "O <strong>Wi-Fi da escola</strong> tem um roteador que recebe os pacotes de todos os computadores da sala."
    ],
    "reflexao": ""
   },
   "alertas": [
    "Os computadores são usados por todos: <strong>nunca apague nem mexa nos arquivos dos colegas</strong>."
   ],
   "vf": [
    "A internet é uma rede de redes.",
    "Uma foto viaja inteira, sem ser dividida, pela internet.",
    "O endereço IP identifica o aparelho de destino.",
    "Os pacotes de uma mesma mensagem sempre seguem o mesmo caminho.",
    "O roteador escolhe por onde mandar os pacotes."
   ],
   "resumo": {
    "texto": "A **internet** é uma **rede de redes**. Os dados viajam cortados em **pacotes**; cada pacote leva um pedaço dos dados, o **endereço IP** de destino e o seu número. Os **roteadores** escolhem o caminho, o **provedor** liga você à internet e o destino junta os pacotes na ordem. As regras dessa conversa são os **protocolos** (TCP/IP).",
    "chaves": [
     "internet",
     "rede",
     "pacote",
     "endereço IP",
     "roteador",
     "provedor",
     "protocolo"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "📒",
   "titulo": "Missão 2 – DNS: a agenda da internet",
   "objetivo": "entender que o DNS traduz o nome de um site no endereço IP do computador onde ele está.",
   "comecar": [
    {
     "t": "p",
     "h": "Os computadores se encontram pelo <strong>endereço IP</strong>, que é um número, como <strong>203.0.113.25</strong>. Mas o IP é um número difícil de decorar: nós digitamos <strong>nomes</strong>, como <strong>portal.professorwell.com.br</strong>. Quem faz a tradução do nome para o número é o <strong>DNS</strong>."
    },
    {
     "t": "p",
     "h": "O DNS funciona como a <strong>agenda de contatos</strong> do celular: você toca no nome “Mãe” e o celular liga para o número dela."
    },
    {
     "t": "tabela",
     "cab": [
      "Agenda do celular",
      "Internet"
     ],
     "linhas": [
      [
       "Nome do contato: Mãe",
       "Nome do site (domínio): portal.professorwell.com.br"
      ],
      [
       "Número do telefone",
       "Endereço IP: 203.0.113.25 (exemplo)"
      ],
      [
       "A agenda acha o número pelo nome",
       "O DNS acha o IP pelo nome"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O que acontece quando você digita o nome de um site:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "O que acontece"
     ],
     "linhas": [
      [
       "1",
       "Você digita o nome do site no navegador"
      ],
      [
       "2",
       "O navegador pergunta ao <strong>servidor DNS</strong>: “qual é o IP desse nome?”"
      ],
      [
       "3",
       "O servidor DNS responde com o endereço IP"
      ],
      [
       "4",
       "O navegador pede a página ao computador daquele IP"
      ],
      [
       "5",
       "A página chega e aparece na tela"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>As partes de um nome de site:</strong> em <strong>portal.professorwell.com.br</strong>, lendo da direita para a esquerda: <strong>.br</strong> é o país (Brasil), <strong>.com</strong> é o tipo (comercial), <strong>professorwell</strong> é o nome escolhido e <strong>portal</strong> é uma parte do site. No Brasil, os nomes que terminam em <strong>.br</strong> são registrados no <strong>Registro.br</strong>."
    },
    {
     "t": "p",
     "h": "Se o DNS parou de funcionar, a internet parece “fora do ar”, mesmo com o Wi-Fi ligado: o navegador não consegue achar o IP pelo nome."
    }
   ],
   "termos": [
    {
     "termo": "DNS",
     "rotulo": "<strong>DNS</strong> (do inglês <em>Domain Name System</em>, “Sistema de Nomes de Domínio”)",
     "def": "o serviço que traduz o nome de um site no endereço IP."
    },
    {
     "termo": "Domínio",
     "rotulo": "<strong>Domínio</strong>",
     "def": "o nome de um site na internet, como professorwell.com.br."
    },
    {
     "termo": "Servidor DNS",
     "rotulo": "<strong>Servidor DNS</strong>",
     "def": "computador que guarda e responde as traduções de nome para IP."
    },
    {
     "termo": "Navegador",
     "rotulo": "<strong>Navegador</strong>",
     "def": "o programa que abre os sites, como Chrome, Edge e Firefox."
    },
    {
     "termo": "Servidor",
     "rotulo": "<strong>Servidor</strong>",
     "def": "computador que fica ligado o tempo todo para guardar e entregar sites, arquivos ou serviços."
    },
    {
     "termo": ".br",
     "rotulo": "<strong>.br</strong>",
     "def": "final dos domínios do Brasil. Cada país tem o seu (.pt é Portugal, .ar é Argentina)."
    }
   ],
   "ondeUso": {
    "itens": [
     "Toda vez que você <strong>digita o nome de um site</strong>, o DNS trabalha antes de a página aparecer.",
     "Quando você <strong>clica num link</strong> no aplicativo de mensagens, o DNS acha o computador do site.",
     "Golpistas criam <strong>nomes parecidos</strong> para enganar, como <strong>pr0fessorwell</strong> (zero no lugar do O) ou um nome com uma letra a menos: conferir o nome do site, letra por letra, é uma proteção."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "O DNS traduz o nome de um site no endereço IP.",
    "O endereço IP é um nome fácil de decorar.",
    "Em professorwell.com.br, o final .br indica o Brasil.",
    "Se o DNS para, o navegador não consegue achar o site pelo nome.",
    "O navegador pede a página antes de saber o IP do site."
   ],
   "resumo": {
    "texto": "O **DNS** é a agenda da internet: traduz o **domínio** (nome do site) no **endereço IP** (número). O navegador pergunta ao **servidor DNS**, recebe o IP e só então pede a página. No nome, lendo da direita: **.br** é o país, **.com** o tipo e depois o nome escolhido. Sem DNS, a internet parece fora do ar.",
    "chaves": [
     "DNS",
     "domínio",
     "endereço IP",
     "servidor DNS",
     "navegador",
     "servidor"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🌊",
   "titulo": "Missão 3 – Cabos submarinos e data centers",
   "objetivo": "descobrir que a internet entre continentes passa por cabos no fundo do mar e que os sites e aplicativos ficam guardados em data centers.",
   "comecar": [
    {
     "t": "p",
     "h": "Muita gente acha que a internet vem do <strong>satélite</strong>. Na verdade, a <strong>maior parte</strong> dos dados que viajam entre os continentes passa por <strong>cabos submarinos</strong>: cabos de <strong>fibra óptica</strong> deitados no fundo do mar, com milhares de quilômetros."
    },
    {
     "t": "tabela",
     "cab": [
      "Parte",
      "O que é",
      "Detalhe"
     ],
     "linhas": [
      [
       "🌊 Cabo submarino",
       "Cabo de fibra óptica no fundo do oceano",
       "Liga continentes: Brasil, América do Norte, Europa, África"
      ],
      [
       "💡 Fibra óptica",
       "Fio de vidro mais fino que um cabelo",
       "Leva os dados como <strong>pulsos de luz</strong>, muito rápido"
      ],
      [
       "🏖️ Estação de chegada",
       "Lugar na praia onde o cabo sai do mar",
       "No Brasil, o principal ponto é <strong>Fortaleza (CE)</strong>, na Praia do Futuro"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Os data centers:</strong> quando você abre um vídeo, ele vem de um <strong>data center</strong>, um prédio cheio de <strong>servidores</strong> ligados o dia inteiro."
    },
    {
     "t": "tabela",
     "cab": [
      "Um data center precisa de…",
      "Por quê?"
     ],
     "linhas": [
      [
       "⚡ Energia sem parar",
       "Os servidores nunca desligam; há geradores para quando falta luz"
      ],
      [
       "❄️ Refrigeração",
       "Os servidores esquentam muito; o ar frio evita que estraguem"
      ],
      [
       "🔒 Segurança",
       "Guarda os dados de milhões de pessoas: tem portas trancadas e câmeras"
      ],
      [
       "🔁 Cópias",
       "Os dados ficam guardados em mais de um lugar, para não sumirem se algo quebrar"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O caminho de um vídeo de outro país:</strong> data center lá fora → cabo submarino → estação na praia (Fortaleza) → cabos pelo Brasil até o provedor → o roteador da sua casa → a sua tela."
    },
    {
     "t": "p",
     "h": "<strong>E o satélite?</strong> Ele é usado onde não chega cabo, como em áreas rurais e em navios, mas leva menos dados e demora mais que a fibra."
    }
   ],
   "termos": [
    {
     "termo": "Cabo submarino",
     "rotulo": "<strong>Cabo submarino</strong>",
     "def": "cabo de fibra óptica colocado no fundo do mar para ligar continentes e países."
    },
    {
     "termo": "Fibra óptica",
     "rotulo": "<strong>Fibra óptica</strong>",
     "def": "fio fino de vidro (ou plástico) que leva dados como pulsos de luz."
    },
    {
     "termo": "Data center",
     "rotulo": "<strong>Data center</strong> (em inglês, “centro de dados”)",
     "def": "prédio com muitos servidores que guardam sites, vídeos e aplicativos."
    },
    {
     "termo": "Servidor",
     "rotulo": "<strong>Servidor</strong>",
     "def": "computador que fica ligado o tempo todo para guardar e entregar dados."
    },
    {
     "termo": "Refrigeração",
     "rotulo": "<strong>Refrigeração</strong>",
     "def": "sistema que esfria o ambiente para os servidores não superaquecerem."
    },
    {
     "termo": "Satélite",
     "rotulo": "<strong>Satélite</strong>",
     "def": "aparelho que gira em volta da Terra; pode levar internet a lugares sem cabo, mas com menos velocidade que a fibra."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>vídeo de outro país</strong> que você assiste atravessa o oceano por um cabo submarino.",
     "As <strong>fotos que você guarda no aplicativo</strong> ficam em servidores de um data center.",
     "Quando um navio corta um cabo por acidente, a internet de uma região inteira pode ficar <strong>mais lenta</strong>."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "A maior parte dos dados entre continentes passa por cabos submarinos.",
    "A fibra óptica leva os dados como pulsos de luz.",
    "Os servidores de um data center podem desligar todas as noites.",
    "Fortaleza, no Ceará, é o principal ponto de chegada de cabos submarinos do Brasil.",
    "O satélite é mais rápido que a fibra óptica."
   ],
   "resumo": {
    "texto": "A **maior parte** dos dados entre continentes viaja por **cabos submarinos** de **fibra óptica**, como **pulsos de luz**. No Brasil, o principal ponto de chegada é **Fortaleza (CE)**. Sites, vídeos e aplicativos ficam em **data centers**: prédios com **servidores** que precisam de energia sem parar, **refrigeração**, segurança e cópias. O **satélite** atende lugares sem cabo, com menos velocidade.",
    "chaves": [
     "cabo submarino",
     "fibra óptica",
     "data center",
     "servidor",
     "refrigeração",
     "satélite"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "☁️",
   "titulo": "Missão 4 – Nuvem: seus arquivos em outro computador",
   "objetivo": "entender o que é a nuvem, quais são as vantagens e os cuidados de guardar arquivos nela.",
   "comecar": [
    {
     "t": "p",
     "h": "“Salvar na <strong>nuvem</strong>” quer dizer guardar o arquivo <strong>no computador de uma empresa</strong>, num data center, e não só no seu aparelho. Você acessa pela internet, de qualquer lugar. <strong>A nuvem não fica no céu</strong>: é o nome que se dá a esses servidores."
    },
    {
     "t": "tabela",
     "cab": [
      "Guardar só no aparelho",
      "Guardar na nuvem"
     ],
     "linhas": [
      [
       "O arquivo fica só no celular ou no computador",
       "Fica num servidor da empresa e também pode ficar no aparelho"
      ],
      [
       "Perdeu o celular? Perdeu o arquivo",
       "Perdeu o celular? O arquivo continua guardado no servidor: entra com a conta em outro aparelho e ele está lá"
      ],
      [
       "Funciona sem internet",
       "Para abrir de outro aparelho, precisa de internet"
      ],
      [
       "O espaço é o do aparelho",
       "Tem um espaço grátis limitado; para mais espaço, paga-se"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplos de nuvem:</strong> Google Drive, OneDrive, iCloud. O aplicativo de mensagens também guarda cópia das conversas na nuvem, se você ativar o <strong>backup</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Sincronizar</strong> é manter o mesmo arquivo igual em todos os aparelhos: você muda no computador e a mudança aparece no celular."
    },
    {
     "t": "p",
     "h": "<strong>Cuidados com a nuvem:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Cuidado",
      "Por quê"
     ],
     "linhas": [
      [
       "🔐 Senha forte e verificação em duas etapas",
       "Quem entra na sua conta vê todos os seus arquivos"
      ],
      [
       "👥 Conferir com quem você compartilha",
       "Um link aberto pode ser visto por qualquer pessoa que o receber. Mandou para quem não devia? Tire o compartilhamento do arquivo"
      ],
      [
       "🚪 Sair da conta em computador da escola",
       "O próximo aluno não pode entrar nos seus arquivos"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Nuvem",
     "rotulo": "<strong>Nuvem</strong> (em inglês, <em>cloud</em>)",
     "def": "servidores de uma empresa, em data centers, onde guardamos arquivos e usamos programas pela internet."
    },
    {
     "termo": "Armazenamento na nuvem",
     "rotulo": "<strong>Armazenamento na nuvem</strong>",
     "def": "guardar arquivos nesses servidores, e não só no próprio aparelho."
    },
    {
     "termo": "Sincronizar",
     "rotulo": "<strong>Sincronizar</strong>",
     "def": "deixar o mesmo arquivo igual em todos os aparelhos ligados à mesma conta."
    },
    {
     "termo": "Backup",
     "rotulo": "<strong>Backup</strong> (em português, “cópia de segurança”)",
     "def": "cópia dos arquivos para não perdê-los se o aparelho quebrar ou sumir."
    },
    {
     "termo": "Compartilhar",
     "rotulo": "<strong>Compartilhar</strong>",
     "def": "dar acesso a um arquivo para outra pessoa ver ou editar."
    },
    {
     "termo": "Verificação em duas etapas",
     "rotulo": "<strong>Verificação em duas etapas</strong>",
     "def": "além da senha, a conta pede um código enviado ao celular; mesmo quem descobre a senha não consegue entrar."
    }
   ],
   "ondeUso": {
    "itens": [
     "As <strong>fotos do celular</strong> que aparecem também no computador estão sincronizadas pela nuvem.",
     "Um <strong>trabalho em grupo</strong> num arquivo compartilhado deixa todos escreverem no mesmo documento.",
     "O <strong>backup</strong> do aplicativo de mensagens recupera as conversas quando você troca de celular."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "A nuvem é formada por servidores em data centers.",
    "Arquivo guardado na nuvem some quando o celular quebra.",
    "Sincronizar é deixar o mesmo arquivo igual em todos os aparelhos.",
    "No computador da escola, é seguro deixar a sua conta aberta para o próximo aluno.",
    "A verificação em duas etapas protege a conta mesmo se alguém descobrir a senha."
   ],
   "resumo": {
    "texto": "A **nuvem** são **servidores** de empresas, em data centers, onde guardamos arquivos e usamos programas pela internet. Vantagens: acessar de qualquer lugar, **sincronizar** os aparelhos e ter **backup**. Cuidados: senha forte com **verificação em duas etapas**, conferir com quem se **compartilha** e sempre **sair da conta** em computador de uso coletivo.",
    "chaves": [
     "nuvem",
     "armazenamento",
     "sincronizar",
     "backup",
     "compartilhar",
     "verificação em duas etapas"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "⚙️",
   "titulo": "Missão 5 – Paralelismo e concorrência: tudo ao mesmo tempo",
   "objetivo": "entender como o computador faz várias tarefas ao mesmo tempo (paralelismo) e o que acontece quando elas disputam a mesma coisa (concorrência).",
   "comecar": [
    {
     "t": "p",
     "h": "Imagine <strong>arrumar a sala de aula sozinho</strong>: varrer, organizar as cadeiras, limpar o quadro e recolher o lixo. Agora imagine <strong>4 colegas</strong>, cada um com uma parte, <strong>ao mesmo tempo</strong>. Termina muito mais rápido! Isso é <strong>paralelismo</strong>."
    },
    {
     "t": "p",
     "h": "O processador do computador faz o mesmo: ele tem vários <strong>núcleos</strong>, e cada núcleo cuida de uma parte do trabalho ao mesmo tempo."
    },
    {
     "t": "tabela",
     "cab": [
      "Trabalho",
      "1 pessoa (ou 1 núcleo)",
      "4 pessoas (ou 4 núcleos)"
     ],
     "linhas": [
      [
       "4 tarefas de 10 minutos",
       "40 minutos",
       "10 minutos"
      ],
      [
       "8 tarefas de 10 minutos",
       "80 minutos",
       "20 minutos"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Nem tudo dá para dividir.</strong> Se uma tarefa <strong>depende</strong> da outra, ela precisa esperar. Para fazer um bolo, dá para separar os ingredientes, untar a forma e ligar o forno para esquentar ao mesmo tempo, mas <strong>assar</strong> só depois de <strong>misturar</strong>, e a calda só depois de assar."
    },
    {
     "t": "p",
     "h": "<strong>Concorrência</strong> é quando várias tarefas querem usar <strong>a mesma coisa</strong> ao mesmo tempo. Exemplo: 19 alunos mandam imprimir ao mesmo tempo, mas a escola tem <strong>uma</strong> impressora. Ela não imprime tudo junto: forma uma <strong>fila</strong> e atende um pedido de cada vez."
    },
    {
     "t": "tabela",
     "cab": [
      "Situação",
      "É…"
     ],
     "linhas": [
      [
       "4 colegas varrem partes diferentes da sala ao mesmo tempo",
       "Paralelismo"
      ],
      [
       "19 pedidos disputam uma impressora só",
       "Concorrência (vira fila)"
      ],
      [
       "Dois amigos querem editar a mesma linha do arquivo ao mesmo tempo",
       "Concorrência (o programa precisa organizar)"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Paralelismo",
     "rotulo": "<strong>Paralelismo</strong>",
     "def": "fazer várias tarefas <strong>ao mesmo tempo</strong>, dividindo o trabalho entre vários processadores ou núcleos."
    },
    {
     "termo": "Núcleo",
     "rotulo": "<strong>Núcleo</strong>",
     "def": "cada “cérebro” dentro do processador; um processador de 4 núcleos faz 4 tarefas de uma vez."
    },
    {
     "termo": "Processador",
     "rotulo": "<strong>Processador</strong> (ou CPU, do inglês <em>Central Processing Unit</em>, “unidade central de processamento”)",
     "def": "a peça que faz as contas e executa os programas."
    },
    {
     "termo": "Concorrência",
     "rotulo": "<strong>Concorrência</strong>",
     "def": "várias tarefas disputando o mesmo recurso (impressora, arquivo, internet) ao mesmo tempo."
    },
    {
     "termo": "Recurso",
     "rotulo": "<strong>Recurso</strong>",
     "def": "aquilo que as tarefas precisam usar: a impressora, a memória, um arquivo."
    },
    {
     "termo": "Fila",
     "rotulo": "<strong>Fila</strong>",
     "def": "organização em que o primeiro que chega é o primeiro a ser atendido."
    },
    {
     "termo": "Dependência",
     "rotulo": "<strong>Dependência</strong>",
     "def": "quando uma tarefa só pode começar depois que outra termina."
    }
   ],
   "ondeUso": {
    "itens": [
     "Num <strong>jogo</strong>, um núcleo cuida da imagem enquanto outro cuida do som, ao mesmo tempo.",
     "A <strong>fila de impressão</strong> da escola organiza os pedidos que disputam a mesma impressora.",
     "Ao <strong>baixar vários arquivos</strong> ao mesmo tempo, eles dividem a mesma internet e cada um vai mais devagar."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Paralelismo é fazer várias tarefas ao mesmo tempo.",
    "Com 4 núcleos, 4 tarefas de 10 minutos levam 40 minutos.",
    "Concorrência é quando várias tarefas disputam o mesmo recurso.",
    "Uma impressora atende vários pedidos formando uma fila.",
    "Toda tarefa pode ser dividida, mesmo quando depende de outra."
   ],
   "resumo": {
    "texto": "**Paralelismo** é dividir o trabalho e fazer as partes **ao mesmo tempo**: o processador tem vários **núcleos** para isso. Mas tarefa que **depende** de outra precisa esperar. **Concorrência** é quando várias tarefas disputam o mesmo **recurso** (como uma impressora): o computador organiza uma **fila** e atende uma de cada vez.",
    "chaves": [
     "paralelismo",
     "núcleo",
     "processador",
     "concorrência",
     "recurso",
     "fila",
     "dependência"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🧰",
   "titulo": "Missão 6 – Projeto: escolher a estrutura certa",
   "objetivo": "escolher a estrutura de dados certa (lista, fila, tabela ou grafo) para cada problema e planejar um pequeno sistema da escola.",
   "comecar": [
    {
     "t": "p",
     "h": "Antes de criar um aplicativo, o programador decide <strong>como guardar os dados</strong>. Essa escolha é a <strong>estrutura de dados</strong>. Com a estrutura certa, o programa fica simples e rápido."
    },
    {
     "t": "tabela",
     "cab": [
      "Estrutura",
      "Como guarda",
      "Use quando…",
      "Exemplo"
     ],
     "linhas": [
      [
       "📝 Lista",
       "Itens em ordem, um depois do outro",
       "Precisa guardar vários itens do mesmo tipo",
       "A chamada da turma"
      ],
      [
       "🚶 Fila",
       "O primeiro que entra é o primeiro que sai",
       "Precisa atender por ordem de chegada",
       "A fila de impressão"
      ],
      [
       "📋 Tabela",
       "Linhas (registros) e colunas (campos)",
       "Cada item tem várias informações",
       "Ficha dos alunos: nome, turma, nota"
      ],
      [
       "🕸️ Grafo",
       "Pontos ligados por linhas",
       "O que importa são as ligações",
       "Mapa das ruas, rede de amigos"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Projeto da missão: o aplicativo da Escola JK.</strong> Para cada parte do aplicativo, a turma escolhe a estrutura:"
    },
    {
     "t": "tabela",
     "cab": [
      "Parte do aplicativo",
      "Estrutura escolhida",
      "Por quê"
     ],
     "linhas": [
      [
       "Chamada da turma",
       "Lista",
       "Vários nomes, em ordem"
      ],
      [
       "Pedidos de impressão",
       "Fila",
       "Imprime por ordem de chegada"
      ],
      [
       "Boletim (nome, notas e faltas)",
       "Tabela",
       "Cada aluno tem várias informações"
      ],
      [
       "Rotas dos ônibus escolares",
       "Grafo",
       "Paradas ligadas pelas ruas"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como fazer um projeto:</strong> 1) entender o problema; 2) listar os dados; 3) escolher a estrutura; 4) testar com um exemplo; 5) apresentar."
    }
   ],
   "termos": [
    {
     "termo": "Estrutura de dados",
     "rotulo": "<strong>Estrutura de dados</strong>",
     "def": "jeito de organizar os dados no computador para usar depois (lista, fila, tabela, grafo)."
    },
    {
     "termo": "Lista",
     "rotulo": "<strong>Lista</strong>",
     "def": "itens em ordem, com um nome só."
    },
    {
     "termo": "Fila",
     "rotulo": "<strong>Fila</strong>",
     "def": "lista em que o primeiro que entra é o primeiro que sai."
    },
    {
     "termo": "Tabela",
     "rotulo": "<strong>Tabela</strong>",
     "def": "dados em linhas e colunas; cada linha é um <strong>registro</strong> (um aluno) e cada coluna é um <strong>campo</strong> (nome, nota)."
    },
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "pontos (vértices) ligados por linhas (arestas); mostra o que está ligado a quê."
    },
    {
     "termo": "Projeto",
     "rotulo": "<strong>Projeto</strong>",
     "def": "trabalho com começo, meio e fim para resolver um problema: planejar, fazer, testar e apresentar."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapas</strong> usa grafos para achar o caminho.",
     "A <strong>planilha de notas</strong> do professor é uma tabela.",
     "A <strong>playlist</strong> é uma lista; a <strong>fila de atendimento</strong> do posto de saúde é uma fila."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na fila, o primeiro que entra é o primeiro que sai.",
    "O mapa das ruas fica melhor guardado num grafo.",
    "Numa tabela, cada linha é um campo e cada coluna é um registro.",
    "Escolher a estrutura de dados certa deixa o programa mais simples.",
    "Testar com um exemplo é uma etapa do projeto."
   ],
   "resumo": {
    "texto": "A **estrutura de dados** é o jeito de guardar os dados. **Lista**: itens em ordem. **Fila**: o primeiro que entra é o primeiro que sai. **Tabela**: linhas (**registros**) e colunas (**campos**). **Grafo**: pontos e ligações. No **projeto**: entender o problema, listar os dados, escolher a estrutura, testar e apresentar.",
    "chaves": [
     "estrutura de dados",
     "lista",
     "fila",
     "tabela",
     "registro",
     "campo",
     "grafo",
     "projeto"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "🕸️",
   "titulo": "Missão 7 – Extra: Sistemas distribuídos",
   "objetivo": "entender como muitos computadores, em lugares diferentes, trabalham juntos como se fossem um só.",
   "comecar": [
    {
     "t": "p",
     "h": "Quando você faz uma pesquisa no buscador, <strong>não é um computador só</strong> que responde: são <strong>milhares de servidores</strong>, em vários data centers, trabalhando juntos. Isso é um <strong>sistema distribuído</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Ideia",
      "Como funciona",
      "Exemplo"
     ],
     "linhas": [
      [
       "🧩 Dividir o trabalho",
       "Cada computador faz uma parte",
       "Um servidor procura nas páginas de A a M, outro de N a Z"
      ],
      [
       "📍 Ficar perto de você",
       "Cópias do site ficam em vários lugares do mundo",
       "O vídeo vem do servidor mais perto, mais rápido"
      ],
      [
       "🛟 Não parar se um quebrar",
       "Outro computador assume o trabalho",
       "O site continua no ar mesmo com um servidor com defeito"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Tolerância a falhas</strong> é essa capacidade de <strong>continuar funcionando</strong> mesmo quando uma parte quebra. É como um time de futebol: se um jogador se machuca, entra o reserva e o jogo continua."
    },
    {
     "t": "p",
     "h": "<strong>O jogo on-line</strong> também é distribuído: vários jogadores, em casas diferentes, veem o mesmo mapa. Os servidores do jogo recebem os movimentos de todos e mandam a mesma partida para cada um."
    }
   ],
   "termos": [
    {
     "termo": "Sistema distribuído",
     "rotulo": "<strong>Sistema distribuído</strong>",
     "def": "vários computadores, em lugares diferentes, ligados em rede e trabalhando juntos como se fossem um só."
    },
    {
     "termo": "Servidor",
     "rotulo": "<strong>Servidor</strong>",
     "def": "computador que fica ligado o tempo todo para guardar e entregar dados e serviços."
    },
    {
     "termo": "Tolerância a falhas",
     "rotulo": "<strong>Tolerância a falhas</strong>",
     "def": "capacidade de continuar funcionando mesmo quando uma parte quebra."
    },
    {
     "termo": "Cópia",
     "rotulo": "<strong>Cópia</strong> (ou réplica)",
     "def": "o mesmo dado guardado em mais de um computador."
    },
    {
     "termo": "Buscador",
     "rotulo": "<strong>Buscador</strong>",
     "def": "site que procura páginas na internet, como o Google e o Bing."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>buscador</strong> responde em menos de um segundo porque milhares de servidores dividem a busca.",
     "Nos <strong>jogos on-line</strong>, os servidores mantêm todos os jogadores na mesma partida.",
     "Os <strong>aplicativos de banco</strong> guardam cópias dos dados em vários lugares para não perder nada."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Num sistema distribuído, vários computadores trabalham juntos como se fossem um só.",
    "O buscador responde usando um único computador.",
    "Tolerância a falhas é continuar funcionando quando uma parte quebra.",
    "Ter cópias dos dados em vários lugares ajuda a não perder nada.",
    "Nos jogos on-line, cada jogador vê uma partida diferente."
   ],
   "resumo": {
    "texto": "Um **sistema distribuído** são vários computadores, em lugares diferentes, trabalhando juntos como um só. Eles **dividem o trabalho**, guardam **cópias** perto dos usuários e têm **tolerância a falhas**: se um quebra, outro assume. Buscadores, jogos on-line e bancos funcionam assim.",
    "chaves": [
     "sistema distribuído",
     "servidor",
     "tolerância a falhas",
     "cópia",
     "buscador"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "🚀",
   "titulo": "Missão 8 – Extra: Velocidade da internet",
   "objetivo": "entender o que é megabit por segundo, calcular o tempo de um download e saber o que é a latência (ping).",
   "comecar": [
    {
     "t": "p",
     "h": "O plano de internet diz “<strong>100 mega</strong>”. Isso quer dizer <strong>100 Mbps</strong>: <strong>100 megabits por segundo</strong>. Mas atenção: o tamanho dos arquivos é medido em <strong>megabytes (MB)</strong>, e <strong>1 byte = 8 bits</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Para saber quantos MB chegam por segundo",
      "Divida os Mbps por 8"
     ],
     "linhas": [
      [
       "Internet de 80 Mbps",
       "80 ÷ 8 = <strong>10 MB por segundo</strong>"
      ],
      [
       "Internet de 40 Mbps",
       "40 ÷ 8 = <strong>5 MB por segundo</strong>"
      ],
      [
       "Internet de 16 Mbps",
       "16 ÷ 8 = <strong>2 MB por segundo</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Quanto tempo demora o download?</strong> Tempo = tamanho do arquivo (MB) ÷ MB por segundo."
    },
    {
     "t": "tabela",
     "cab": [
      "Arquivo",
      "Internet",
      "Conta",
      "Tempo"
     ],
     "linhas": [
      [
       "Vídeo de 50 MB",
       "80 Mbps (10 MB/s)",
       "50 ÷ 10",
       "5 segundos"
      ],
      [
       "Jogo de 300 MB",
       "40 Mbps (5 MB/s)",
       "300 ÷ 5",
       "60 segundos (1 minuto)"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Download e upload:</strong> <strong>download</strong> é baixar (os dados chegam até você); <strong>upload</strong> é enviar (você manda para a internet, como ao postar um vídeo). Muitos planos têm upload menor que o download."
    },
    {
     "t": "p",
     "h": "<strong>Latência (ping):</strong> é o tempo que um pacote leva para ir até o servidor e voltar, medido em <strong>milissegundos (ms)</strong>. Em jogos on-line, <strong>ping baixo</strong> é melhor: o jogo responde na hora. Ping alto dá o famoso “lag”."
    }
   ],
   "termos": [
    {
     "termo": "Bit",
     "rotulo": "<strong>Bit</strong>",
     "def": "o menor pedaço de informação do computador: 0 ou 1."
    },
    {
     "termo": "Byte",
     "rotulo": "<strong>Byte</strong>",
     "def": "grupo de <strong>8 bits</strong>. Os arquivos são medidos em bytes (KB, MB, GB)."
    },
    {
     "termo": "Mbps",
     "rotulo": "<strong>Mbps</strong> (megabits por segundo)",
     "def": "quantos milhões de bits chegam a cada segundo; é a velocidade do plano de internet."
    },
    {
     "termo": "MB",
     "rotulo": "<strong>MB</strong> (megabyte)",
     "def": "cerca de um milhão de bytes; mede o tamanho dos arquivos."
    },
    {
     "termo": "Download",
     "rotulo": "<strong>Download</strong> (em português, “baixar”)",
     "def": "receber dados da internet."
    },
    {
     "termo": "Upload",
     "rotulo": "<strong>Upload</strong> (em português, “enviar”)",
     "def": "mandar dados para a internet."
    },
    {
     "termo": "Latência",
     "rotulo": "<strong>Latência</strong> (ou <strong>ping</strong>)",
     "def": "tempo de ida e volta de um pacote, em milissegundos; quanto menor, melhor."
    },
    {
     "termo": "Lag",
     "rotulo": "<strong>Lag</strong> (em português, “atraso”)",
     "def": "quando o jogo ou a chamada demora para responder, por causa de latência alta."
    }
   ],
   "ondeUso": {
    "itens": [
     "Para <strong>escolher um plano de internet</strong>, compare os Mbps de download e de upload.",
     "Antes de <strong>baixar um jogo</strong>, dá para calcular quanto tempo vai demorar.",
     "Nos <strong>jogos on-line</strong>, o número do ping mostra se a conexão está boa."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "1 byte é igual a 8 bits.",
    "Uma internet de 80 Mbps baixa 80 MB por segundo.",
    "Postar um vídeo na internet é fazer upload.",
    "Nos jogos on-line, quanto maior o ping, melhor.",
    "Um arquivo de 50 MB, a 10 MB por segundo, demora 5 segundos."
   ],
   "resumo": {
    "texto": "A velocidade da internet é medida em **Mbps** (megabits por segundo); os arquivos, em **MB** (megabytes). Como **1 byte = 8 bits**, divida os Mbps por 8 para saber os MB por segundo. Tempo de download = tamanho ÷ MB por segundo. **Download** é baixar; **upload** é enviar. **Latência (ping)** é o tempo de ida e volta: quanto menor, melhor.",
    "chaves": [
     "bit",
     "byte",
     "Mbps",
     "MB",
     "download",
     "upload",
     "latência",
     "ping"
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
