/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-7ano-2027-3bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-7ano-2027-3bim", {
 "titulo": "Apostila de Informática – 7º Ano – 3º Bimestre de 2027",
 "comoUsar": [
  {
   "t": "p",
   "h": "Bem-vindo ao 3º bimestre! O tema agora é <strong>Rede segura</strong>: as regras que os aparelhos usam para conversar, o cadeado dos sites, as senhas, os golpes e, principalmente, como tratar bem as pessoas na internet. Você vai cumprir <strong>6 missões</strong> e, se sobrar aula, <strong>2 missões extras</strong>. Antes da prova tem a <strong>🔁 Revisão</strong>. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🤝 Missão 1 – Protocolos: as regras da conversa",
     "Mundo Digital"
    ],
    [
     "🔒 Missão 2 – HTTP, HTTPS e o cadeado",
     "Mundo Digital"
    ],
    [
     "🔑 Missão 3 – Senhas e verificação em duas etapas",
     "Computação e Sociedade"
    ],
    [
     "🎣 Missão 4 – Golpes e phishing",
     "Computação e Sociedade"
    ],
    [
     "💬 Missão 5 – Empatia na rede",
     "Computação e Sociedade"
    ],
    [
     "🛑 Missão 6 – Cyberbullying: como agir",
     "Computação e Sociedade"
    ],
    [
     "📶 Missão 7 – Extra: Wi-Fi público",
     "Computação e Sociedade"
    ],
    [
     "🗣️ Missão 8 – Extra: Debate respeitoso",
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
   "icone": "🤝",
   "titulo": "Missão 1 – Protocolos: as regras da conversa",
   "objetivo": "entender o que é um protocolo e por que aparelhos diferentes conseguem conversar pela rede.",
   "comecar": [
    {
     "t": "p",
     "h": "Num telefonema, todo mundo segue as mesmas <strong>regras</strong>, mesmo sem perceber:"
    },
    {
     "t": "tabela",
     "cab": [
      "Passo",
      "No telefonema"
     ],
     "linhas": [
      [
       "1",
       "Quem atende diz <strong>“Alô?”</strong>"
      ],
      [
       "2",
       "Quem ligou se <strong>apresenta</strong>"
      ],
      [
       "3",
       "Os dois <strong>conversam</strong>, um de cada vez"
      ],
      [
       "4",
       "Os dois se <strong>despedem</strong> e desligam"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Os aparelhos também precisam de regras combinadas para conversar. Essas regras se chamam <strong>protocolo</strong>. Graças a elas, um celular de uma marca conversa com um computador de outra marca: os dois seguem o <strong>mesmo protocolo</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Protocolo",
      "Para que serve"
     ],
     "linhas": [
      [
       "🌐 <strong>HTTP</strong>",
       "Pedir e receber as páginas da internet"
      ],
      [
       "🔒 <strong>HTTPS</strong>",
       "O mesmo que o HTTP, mas com os dados <strong>cifrados</strong> (embaralhados)"
      ],
      [
       "🏠 <strong>IP</strong>",
       "Dar um <strong>endereço</strong> a cada aparelho, para os dados chegarem ao lugar certo"
      ],
      [
       "📶 <strong>Wi-Fi</strong>",
       "Ligar os aparelhos à rede <strong>sem fio</strong>"
      ],
      [
       "🎧 <strong>Bluetooth</strong>",
       "Ligar aparelhos <strong>pertinho</strong> um do outro, como o fone sem fio"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>A conversa do navegador com o site (HTTP):</strong>"
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
       "Você digita o endereço ou clica num link"
      ],
      [
       "2",
       "O navegador <strong>pede</strong> a página ao servidor do site"
      ],
      [
       "3",
       "O servidor <strong>responde</strong> mandando a página"
      ],
      [
       "4",
       "O navegador <strong>mostra</strong> a página na tela"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Se a página não existe, o servidor responde com o famoso <strong>erro 404</strong>: “página não encontrada”."
    }
   ],
   "termos": [
    {
     "termo": "Protocolo",
     "rotulo": "<strong>Protocolo</strong>",
     "def": "conjunto de regras combinadas para dois aparelhos conversarem."
    },
    {
     "termo": "HTTP",
     "rotulo": "<strong>HTTP</strong> (do inglês <em>HyperText Transfer Protocol</em>, “protocolo de transferência de hipertexto”)",
     "def": "protocolo das páginas da internet."
    },
    {
     "termo": "IP",
     "rotulo": "<strong>IP</strong> (do inglês <em>Internet Protocol</em>, “protocolo da internet”)",
     "def": "dá um endereço a cada aparelho ligado à rede."
    },
    {
     "termo": "Navegador",
     "rotulo": "<strong>Navegador</strong>",
     "def": "programa que abre os sites, como o Chrome ou o Edge."
    },
    {
     "termo": "Servidor",
     "rotulo": "<strong>Servidor</strong>",
     "def": "computador que guarda o site e responde aos pedidos."
    },
    {
     "termo": "Bluetooth",
     "rotulo": "<strong>Bluetooth</strong>",
     "def": "ligação sem fio para aparelhos que estão bem perto."
    },
    {
     "termo": "Wi-Fi",
     "rotulo": "<strong>Wi-Fi</strong>",
     "def": "rede sem fio, que liga os aparelhos sem cabo."
    },
    {
     "termo": "HTTPS",
     "rotulo": "<strong>HTTPS</strong>",
     "def": "o HTTP com os dados cifrados (você vai ver na Missão 2)."
    },
    {
     "termo": "Link",
     "rotulo": "<strong>Link</strong>",
     "def": "texto ou botão que, ao ser clicado, abre outra página."
    }
   ],
   "ondeUso": {
    "itens": [
     "Toda vez que você <strong>abre um site</strong>, o navegador e o servidor seguem o HTTP.",
     "O <strong>fone sem fio</strong> conversa com o celular pelo Bluetooth.",
     "O celular entra no <strong>Wi-Fi da escola</strong> seguindo o protocolo do Wi-Fi."
    ],
    "reflexao": ""
   },
   "alertas": [
    "Os computadores são usados por todos: <strong>nunca apague nem mexa nos arquivos dos colegas</strong>."
   ],
   "vf": [
    "Protocolo é um conjunto de regras para os aparelhos conversarem.",
    "Só aparelhos da mesma marca conseguem conversar pela rede.",
    "O HTTP serve para pedir e receber as páginas da internet.",
    "O erro 404 quer dizer que a página não foi encontrada.",
    "O Bluetooth serve para ligar aparelhos muito longe, em outra cidade."
   ],
   "resumo": {
    "texto": "**Protocolo** é o conjunto de regras que os aparelhos seguem para conversar. **HTTP** pede e recebe páginas; **HTTPS** faz o mesmo com os dados cifrados; **IP** dá o endereço; **Wi-Fi** liga sem fio; **Bluetooth** liga aparelhos pertinho. O navegador **pede**, o servidor **responde**, o navegador **mostra**. Erro **404** = página não encontrada.",
    "chaves": [
     "protocolo",
     "HTTP",
     "HTTPS",
     "IP",
     "Wi-Fi",
     "Bluetooth",
     "navegador",
     "servidor"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🔒",
   "titulo": "Missão 2 – HTTP, HTTPS e o cadeado",
   "objetivo": "saber a diferença entre HTTP e HTTPS e o que o cadeado do navegador mostra (e o que ele não mostra).",
   "comecar": [
    {
     "t": "tabela",
     "cab": [
      "Endereço",
      "Parece com…",
      "O que acontece"
     ],
     "linhas": [
      [
       "<strong>http://</strong>",
       "📮 Um <strong>cartão-postal</strong>: quem pegar no caminho consegue ler",
       "Os dados viajam <strong>abertos</strong>"
      ],
      [
       "<strong>https://</strong> e um 🔒",
       "✉️ Uma <strong>carta lacrada</strong>: no caminho, ninguém lê",
       "Os dados viajam <strong>cifrados</strong>"
      ]
     ]
    },
    {
     "t": "p",
     "h": "O <strong>S</strong> do HTTPS vem de <em>secure</em>, “seguro” em inglês. O 🔒 <strong>cadeado</strong> aparece ao lado do endereço quando a conversa com o site é cifrada."
    },
    {
     "t": "p",
     "h": "<strong>Atenção, a pegadinha:</strong> o cadeado mostra que a <strong>conversa é cifrada</strong>, mas <strong>não prova que o site é honesto</strong>. Um site falso também pode ter cadeado. Por isso:"
    },
    {
     "t": "tabela",
     "cab": [
      "Antes de digitar uma senha",
      "Por quê"
     ],
     "linhas": [
      [
       "🔒 Confira se tem <strong>https</strong> e cadeado",
       "Sem eles, a senha viaja aberta"
      ],
      [
       "🔤 Leia o <strong>nome do site</strong>, letra por letra",
       "Golpistas criam nomes parecidos, trocando uma letra"
      ],
      [
       "🔗 Prefira <strong>digitar o endereço</strong> você mesmo",
       "Links de mensagens podem levar a sites falsos"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "HTTPS",
     "rotulo": "<strong>HTTPS</strong> (HTTP + <em>Secure</em>)",
     "def": "o HTTP com os dados cifrados."
    },
    {
     "termo": "Cifrado",
     "rotulo": "<strong>Cifrado</strong>",
     "def": "embaralhado, para que só o site e você consigam ler."
    },
    {
     "termo": "Cadeado",
     "rotulo": "<strong>Cadeado</strong> 🔒",
     "def": "símbolo do navegador que mostra que a conversa com o site é cifrada."
    },
    {
     "termo": "Endereço do site",
     "rotulo": "<strong>Endereço do site</strong>",
     "def": "o texto que aparece na barra de cima do navegador, como https://portal.professorwell.com.br."
    },
    {
     "termo": "Site falso",
     "rotulo": "<strong>Site falso</strong>",
     "def": "página que imita um site verdadeiro para roubar dados."
    },
    {
     "termo": "Link",
     "rotulo": "<strong>Link</strong>",
     "def": "texto ou botão que, ao ser clicado, abre outra página."
    }
   ],
   "ondeUso": {
    "itens": [
     "Ao entrar no <strong>portal da escola</strong>: o endereço começa com https e tem o cadeado.",
     "Antes de digitar a <strong>senha</strong> de um jogo ou de uma rede social.",
     "Ao receber um <strong>link</strong> com o nome de um site conhecido escrito um pouco diferente."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "No http, os dados viajam abertos, como um cartão-postal.",
    "O S do HTTPS vem de *secure*, “seguro”.",
    "O cadeado prova que o site é honesto.",
    "Golpistas criam sites com nomes parecidos com os verdadeiros.",
    "No https, os dados viajam cifrados."
   ],
   "resumo": {
    "texto": "**HTTP** = cartão-postal (dados abertos). **HTTPS** com 🔒 = carta lacrada (dados cifrados). O cadeado mostra que a **conversa é cifrada**, mas **não prova que o site é honesto**: confira o **nome do site**, letra por letra, e prefira digitar o endereço.",
    "chaves": [
     "HTTP",
     "HTTPS",
     "cifrado",
     "cadeado",
     "endereço do site",
     "site falso"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "🔑",
   "titulo": "Missão 3 – Senhas e verificação em duas etapas",
   "objetivo": "criar senhas fortes e entender como a verificação em duas etapas protege a conta.",
   "comecar": [
    {
     "t": "tabela",
     "cab": [
      "Senha fraca",
      "Senha forte"
     ],
     "linhas": [
      [
       "Curta: 123456, 2014",
       "Comprida: 12 caracteres ou mais"
      ],
      [
       "Tem nome, apelido ou data de nascimento",
       "Não tem nada pessoal"
      ],
      [
       "Só números ou só letras",
       "Mistura maiúsculas, minúsculas, números e símbolos"
      ],
      [
       "A mesma em todos os sites",
       "Uma diferente para cada conta importante"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Dica da frase-senha:</strong> junte palavras que só você imagina e misture: <strong>Pipa!Verde8Voa</strong> é longa e fácil de lembrar (é só um exemplo: não use esta). Outro exemplo inventado: <strong>Lago#Sol55Peixe</strong>."
    },
    {
     "t": "p",
     "h": "<strong>Verificação em duas etapas:</strong> além da senha, a conta pede uma <strong>segunda prova</strong>. Assim, mesmo se alguém descobrir a senha, não entra."
    },
    {
     "t": "tabela",
     "cab": [
      "Tipo de prova",
      "Exemplo"
     ],
     "linhas": [
      [
       "🧠 Algo que você <strong>sabe</strong>",
       "A senha, o PIN"
      ],
      [
       "📱 Algo que você <strong>tem</strong>",
       "O código que chega no celular"
      ],
      [
       "👆 Algo que você <strong>é</strong>",
       "A digital, o rosto"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Regra de ouro:</strong> o código que chega no celular é <strong>só seu</strong>. Se alguém pedir esse código, <strong>é golpe</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Senha forte",
     "rotulo": "<strong>Senha forte</strong>",
     "def": "senha comprida e misturada, sem nada pessoal."
    },
    {
     "termo": "Frase-senha",
     "rotulo": "<strong>Frase-senha</strong>",
     "def": "várias palavras misturadas com números e símbolos, longa e fácil de lembrar."
    },
    {
     "termo": "Verificação em duas etapas",
     "rotulo": "<strong>Verificação em duas etapas</strong>",
     "def": "proteção que pede a senha e mais uma prova (um código, a digital)."
    },
    {
     "termo": "PIN",
     "rotulo": "<strong>PIN</strong>",
     "def": "senha curta de números, como a do celular."
    },
    {
     "termo": "Caractere",
     "rotulo": "<strong>Caractere</strong>",
     "def": "cada letra, número, símbolo ou espaço."
    }
   ],
   "ondeUso": {
    "itens": [
     "Ao criar a conta de um <strong>jogo</strong> ou de um <strong>e-mail</strong>.",
     "Quando chega um <strong>código por SMS</strong> para entrar numa conta.",
     "Ao <strong>desbloquear o celular</strong> com a digital."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Uma senha com o seu nome e o ano em que você nasceu é forte.",
    "Senha forte mistura letras, números e símbolos.",
    "Na verificação em duas etapas, a conta pede uma segunda prova além da senha.",
    "Pode passar para outra pessoa o código que chegou no seu celular.",
    "A digital é um exemplo de algo que você é."
   ],
   "resumo": {
    "texto": "Senha forte é **comprida**, **misturada** e sem nada **pessoal**; a **frase-senha** ajuda a lembrar. A **verificação em duas etapas** pede a senha e mais uma prova: algo que você **tem** (código no celular) ou que você **é** (digital). O código é **só seu**: quem pede é golpista.",
    "chaves": [
     "senha forte",
     "frase-senha",
     "verificação em duas etapas",
     "PIN",
     "caractere"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m4",
   "icone": "🎣",
   "titulo": "Missão 4 – Golpes e phishing",
   "objetivo": "reconhecer os sinais de golpe e saber o que fazer.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Phishing</strong> (parecido com <em>fishing</em>, “pescaria” em inglês) é o golpe que usa uma <strong>isca</strong>: uma mensagem ou um site <strong>falso</strong> que imita um banco, uma loja, um jogo ou a escola."
    },
    {
     "t": "tabela",
     "cab": [
      "Golpe",
      "Como é"
     ],
     "linhas": [
      [
       "👪 Falso parente",
       "“Oi, troquei de número. Me manda um Pix?”"
      ],
      [
       "🎁 Prêmio falso",
       "“Você ganhou um celular! Pague só o frete hoje.”"
      ],
      [
       "🔗 Link falso",
       "“Sua conta será bloqueada. Clique aqui e digite a senha.”"
      ],
      [
       "🎮 Moedas grátis",
       "“Ganhe moedas do jogo: é só entrar com a sua senha neste site.”"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Sinais de golpe:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Sinal",
      "Exemplo"
     ],
     "linhas": [
      [
       "⏰ <strong>Pressa</strong>",
       "“Só hoje!”, “Em 1 hora!”"
      ],
      [
       "🎁 <strong>Prêmio fácil</strong>",
       "Algo caro de graça"
      ],
      [
       "🔑 Pede <strong>senha ou código</strong>",
       "“Mande o código que chegou no SMS”"
      ],
      [
       "💸 Pede <strong>dinheiro</strong>",
       "“Me empresta, depois te pago”"
      ],
      [
       "✍️ <strong>Erros</strong> de português ou endereço estranho",
       "“Promossão”, “banc0-oficial.xyz”"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Caí num golpe, e agora?</strong> Pare de responder, troque a senha, ative as duas etapas e <strong>conte para um adulto de confiança</strong>. Avise os seus contatos para não caírem também."
    }
   ],
   "termos": [
    {
     "termo": "Golpe",
     "rotulo": "<strong>Golpe</strong>",
     "def": "enganar alguém para tirar vantagem, como dinheiro ou dados."
    },
    {
     "termo": "Phishing",
     "rotulo": "<strong>Phishing</strong>",
     "def": "golpe com mensagem ou site falso que serve de isca."
    },
    {
     "termo": "Isca",
     "rotulo": "<strong>Isca</strong>",
     "def": "algo que chama a atenção para a pessoa cair no golpe."
    },
    {
     "termo": "Golpista",
     "rotulo": "<strong>Golpista</strong>",
     "def": "quem aplica o golpe."
    },
    {
     "termo": "Perfil falso",
     "rotulo": "<strong>Perfil falso</strong>",
     "def": "conta que finge ser outra pessoa ou empresa."
    },
    {
     "termo": "Link",
     "rotulo": "<strong>Link</strong>",
     "def": "texto ou botão que, ao ser clicado, abre outra página."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nas <strong>mensagens</strong> do celular e no <strong>e-mail</strong>.",
     "Nos <strong>jogos on-line</strong>, com ofertas de moedas grátis.",
     "Nas <strong>redes sociais</strong>, com perfis falsos de lojas."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Phishing é o golpe que usa uma mensagem ou um site falso como isca.",
    "Pressa e prêmio fácil são sinais de golpe.",
    "Moedas grátis em troca da senha do jogo são uma boa oferta.",
    "Se cair num golpe, é bom contar para um adulto de confiança.",
    "Erros de português podem ser um sinal de golpe."
   ],
   "resumo": {
    "texto": "**Phishing** é o golpe da isca falsa. Sinais: **pressa**, **prêmio fácil**, pedido de **senha, código ou dinheiro**, **erros** e endereço estranho. Caiu num golpe? **Pare de responder**, **troque a senha**, ative as **duas etapas** e **conte para um adulto**.",
    "chaves": [
     "golpe",
     "phishing",
     "isca",
     "golpista",
     "perfil falso"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m5",
   "icone": "💬",
   "titulo": "Missão 5 – Empatia na rede",
   "objetivo": "lembrar que do outro lado da tela tem uma pessoa e escrever com respeito.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Empatia</strong> é se colocar no lugar do outro. Na internet, a gente não vê o rosto nem ouve o tom de voz da pessoa, por isso é fácil ser mal entendido."
    },
    {
     "t": "tabela",
     "cab": [
      "Na conversa ao vivo",
      "Na mensagem escrita"
     ],
     "linhas": [
      [
       "Você vê o <strong>rosto</strong> da pessoa",
       "Você <strong>não vê</strong> a reação dela"
      ],
      [
       "O <strong>tom de voz</strong> mostra se é brincadeira",
       "A brincadeira pode parecer <strong>ofensa</strong>"
      ],
      [
       "Dá para pedir desculpas na hora",
       "O texto pode ser <strong>copiado</strong> e espalhado"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Combinados da boa conversa na rede:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Combinado",
      "Por quê"
     ],
     "linhas": [
      [
       "🔠 Não escrever TUDO EM MAIÚSCULAS",
       "Na internet, parece que você está <strong>gritando</strong>"
      ],
      [
       "🔁 Ler antes de enviar",
       "Evita mandar algo de que vai se arrepender"
      ],
      [
       "🙂 Usar emoji para mostrar o tom",
       "Ajuda a mostrar que é uma brincadeira ou um carinho"
      ],
      [
       "⏸️ Esperar a raiva passar",
       "Com raiva, a gente escreve coisas que machucam"
      ],
      [
       "🤝 Ajudar quem não entendeu",
       "Explicar com gentileza e oferecer ajuda"
      ],
      [
       "🙏 Machucou alguém sem querer?",
       "Pedir desculpas e apagar a mensagem"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Antes de postar, faça três perguntas:</strong> é <strong>verdade</strong>? É <strong>gentil</strong>? É <strong>necessário</strong>? Se a resposta for “não” para alguma delas, <strong>não poste</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Empatia",
     "rotulo": "<strong>Empatia</strong>",
     "def": "se colocar no lugar do outro e imaginar o que ele sente."
    },
    {
     "termo": "Tom",
     "rotulo": "<strong>Tom</strong>",
     "def": "o jeito como algo é dito (bravo, alegre, brincando)."
    },
    {
     "termo": "Postar",
     "rotulo": "<strong>Postar</strong>",
     "def": "publicar algo na internet."
    },
    {
     "termo": "Emoji",
     "rotulo": "<strong>Emoji</strong>",
     "def": "desenho pequeno que mostra emoções ou ideias nas mensagens."
    },
    {
     "termo": "Aplicativo",
     "rotulo": "<strong>Aplicativo</strong> (ou <em>app</em>)",
     "def": "programa instalado no celular ou no computador."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>grupo da turma</strong> no aplicativo de mensagens.",
     "Nos <strong>comentários</strong> de vídeos e fotos.",
     "No <strong>chat dos jogos on-line</strong>."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Empatia é se colocar no lugar do outro.",
    "Na internet, escrever tudo em maiúsculas parece que você está gritando.",
    "Na mensagem escrita, sempre dá para perceber o tom de voz.",
    "Antes de postar, vale perguntar: é verdade, é gentil, é necessário?",
    "Com raiva, o melhor é responder na hora."
   ],
   "resumo": {
    "texto": "**Empatia** é se colocar no lugar do outro. Na mensagem escrita não se vê o rosto nem o **tom**, então a brincadeira pode virar ofensa. Combinados: não escrever **em maiúsculas**, **ler antes de enviar**, usar **emoji** para o tom e **esperar a raiva passar**. Antes de postar: é **verdade**, **gentil** e **necessário**?",
    "chaves": [
     "empatia",
     "tom",
     "postar",
     "emoji"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m6",
   "icone": "🛑",
   "titulo": "Missão 6 – Cyberbullying: como agir",
   "objetivo": "reconhecer o cyberbullying e saber como agir, sendo o alvo ou quem está vendo.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Cyberbullying</strong> é quando alguém <strong>humilha, ameaça ou persegue</strong> outra pessoa pela internet, <strong>de propósito</strong> e <strong>várias vezes</strong>. Uma discussão em que os dois discordam com respeito <strong>não</strong> é cyberbullying."
    },
    {
     "t": "tabela",
     "cab": [
      "Exemplo de cyberbullying",
      "O que é"
     ],
     "linhas": [
      [
       "😠 Apelidos que humilham, repetidos no grupo",
       "Ofender de propósito, várias vezes"
      ],
      [
       "🖼️ Montagem com a foto do colega para zombar",
       "Usar a imagem para humilhar"
      ],
      [
       "🚪 Tirar alguém do grupo de propósito, toda vez",
       "Excluir para machucar"
      ],
      [
       "🗣️ Espalhar boato ou mentira sobre o colega",
       "Mentir para prejudicar"
      ],
      [
       "🎭 Criar perfil falso para zombar de alguém",
       "Fingir ser a pessoa"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Quem está na história:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Papel",
      "Quem é",
      "O que pode fazer"
     ],
     "linhas": [
      [
       "🎯 <strong>Alvo</strong>",
       "Quem sofre",
       "Não responder com ofensa, guardar <strong>prints</strong>, <strong>bloquear</strong>, <strong>denunciar</strong> e <strong>contar para um adulto de confiança</strong>"
      ],
      [
       "👀 <strong>Espectador</strong>",
       "Quem vê",
       "<strong>Não curtir nem repassar</strong>, apoiar o colega e avisar um adulto"
      ],
      [
       "😈 <strong>Autor</strong>",
       "Quem pratica",
       "<strong>Parar</strong>, apagar o que postou e pedir desculpas"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>É lei:</strong> desde 2024, a <strong>intimidação sistemática virtual</strong> (cyberbullying) é <strong>crime</strong> no Brasil (Lei nº 14.811/2024). Quando quem pratica é adolescente, ele responde pelo Estatuto da Criança e do Adolescente (ECA)."
    }
   ],
   "termos": [
    {
     "termo": "Cyberbullying",
     "rotulo": "<strong>Cyberbullying</strong>",
     "def": "humilhar, ameaçar ou perseguir alguém pela internet, de propósito e várias vezes."
    },
    {
     "termo": "Alvo",
     "rotulo": "<strong>Alvo</strong>",
     "def": "a pessoa que sofre o cyberbullying."
    },
    {
     "termo": "Espectador",
     "rotulo": "<strong>Espectador</strong>",
     "def": "quem vê o que está acontecendo."
    },
    {
     "termo": "Print",
     "rotulo": "<strong>Print</strong> (captura de tela)",
     "def": "foto da tela, que serve para guardar a prova do que aconteceu."
    },
    {
     "termo": "Bloquear",
     "rotulo": "<strong>Bloquear</strong>",
     "def": "impedir que uma pessoa fale com você."
    },
    {
     "termo": "Denunciar",
     "rotulo": "<strong>Denunciar</strong>",
     "def": "avisar a plataforma (o aplicativo ou a rede social) sobre o que está errado."
    },
    {
     "termo": "ECA",
     "rotulo": "<strong>ECA</strong>",
     "def": "Estatuto da Criança e do Adolescente, a lei que protege e orienta crianças e adolescentes."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>grupo da turma</strong>, quando alguém começa a zombar de um colega.",
     "Nas <strong>redes sociais</strong>, ao ver uma montagem que humilha alguém.",
     "Nos <strong>jogos on-line</strong>, quando alguém persegue um jogador."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Cyberbullying é humilhar alguém pela internet, de propósito e várias vezes.",
    "Repassar a montagem que zomba do colega ajuda a resolver.",
    "Guardar prints ajuda a provar o que aconteceu.",
    "Desde 2024, o cyberbullying é crime no Brasil.",
    "O espectador pode apoiar o colega e avisar um adulto."
   ],
   "resumo": {
    "texto": "**Cyberbullying** é humilhar, ameaçar ou perseguir alguém pela internet, **de propósito** e **várias vezes**. O **alvo** guarda **prints**, **bloqueia**, **denuncia** e **conta para um adulto**. O **espectador** não curte nem repassa e apoia o colega. Desde 2024, é **crime** no Brasil.",
    "chaves": [
     "cyberbullying",
     "alvo",
     "espectador",
     "print",
     "bloquear",
     "denunciar",
     "ECA"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m7",
   "icone": "📶",
   "titulo": "Missão 7 – Extra: Wi-Fi público",
   "objetivo": "saber os riscos das redes Wi-Fi abertas e como se proteger nelas.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Wi-Fi público</strong> é a rede de lugares como praças, rodoviárias, lanchonetes e shoppings. Muitas são <strong>abertas</strong>: entram sem senha."
    },
    {
     "t": "tabela",
     "cab": [
      "Risco",
      "Como acontece"
     ],
     "linhas": [
      [
       "👀 Bisbilhoteiro na rede",
       "Numa rede aberta, alguém na mesma rede pode tentar ver o que <strong>não está cifrado</strong>"
      ],
      [
       "🎭 Rede falsa",
       "Um golpista cria uma rede com nome parecido, como “Wi-Fi Gratis Praca”, para espiar quem entrar"
      ],
      [
       "🔁 Conexão automática",
       "O celular entra sozinho em redes conhecidas, até numa falsa com o mesmo nome"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Como se proteger:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Atitude",
      "Por quê"
     ],
     "linhas": [
      [
       "🏦 Não entrar no banco nem digitar senhas importantes",
       "Se algo der errado, não perde nada importante"
      ],
      [
       "📱 Usar os <strong>dados móveis</strong> para o que é importante",
       "A conexão do celular não é compartilhada com estranhos"
      ],
      [
       "❓ <strong>Perguntar</strong> ao lugar o nome certo da rede",
       "Evita a rede falsa"
      ],
      [
       "🔒 Conferir o <strong>https</strong> e o cadeado",
       "Os dados viajam cifrados"
      ],
      [
       "🗑️ <strong>Esquecer a rede</strong> depois de usar",
       "O celular não entra sozinho de novo"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Wi-Fi público",
     "rotulo": "<strong>Wi-Fi público</strong>",
     "def": "rede sem fio de um lugar aberto ao público."
    },
    {
     "termo": "Rede aberta",
     "rotulo": "<strong>Rede aberta</strong>",
     "def": "rede que entra sem senha."
    },
    {
     "termo": "Dados móveis",
     "rotulo": "<strong>Dados móveis</strong>",
     "def": "a internet da operadora do celular (3G, 4G, 5G)."
    },
    {
     "termo": "Esquecer a rede",
     "rotulo": "<strong>Esquecer a rede</strong>",
     "def": "apagar a rede da lista do celular para ele não entrar sozinho."
    }
   ],
   "ondeUso": {
    "itens": [
     "Na <strong>rodoviária</strong> ou na <strong>lanchonete</strong>, ao ver uma rede “grátis”.",
     "Em <strong>viagens</strong>, quando a internet do celular acaba.",
     "No <strong>celular</strong>, ao configurar o Wi-Fi."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Rede aberta é a rede que entra sem senha.",
    "Um golpista pode criar uma rede falsa com nome parecido.",
    "No Wi-Fi público, o melhor é entrar no banco e digitar todas as senhas.",
    "Os dados móveis são mais seguros para o que é importante.",
    "Esquecer a rede impede que o celular entre sozinho de novo."
   ],
   "resumo": {
    "texto": "O **Wi-Fi público** costuma ser **aberto**. Riscos: o **bisbilhoteiro** na rede e a **rede falsa** com nome parecido. Proteção: não entrar no **banco** nem digitar senhas importantes, usar os **dados móveis**, perguntar o **nome certo** da rede, conferir o **https** e **esquecer a rede** depois.",
    "chaves": [
     "Wi-Fi público",
     "rede aberta",
     "rede falsa",
     "dados móveis",
     "esquecer a rede"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m8",
   "icone": "🗣️",
   "titulo": "Missão 8 – Extra: Debate respeitoso",
   "objetivo": "discordar com respeito, usando argumentos, e não ataques.",
   "comecar": [
    {
     "t": "p",
     "h": "Discordar é normal e até bom: é assim que as ideias melhoram. O importante é <strong>criticar a ideia, não a pessoa</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "✅ Argumento (ataca a ideia)",
      "❌ Ataque pessoal (ataca a pessoa)"
     ],
     "linhas": [
      [
       "“Eu discordo, porque o jogo fica mais lento com tantos jogadores.”",
       "“Você não sabe nada, seu burro.”"
      ],
      [
       "“Li numa notícia do jornal da cidade que a praça vai reabrir.”",
       "“Ninguém liga para o que você fala.”"
      ],
      [
       "“Entendi o seu ponto, mas penso diferente.”",
       "“Cala a boca, você sempre erra.”"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Regras do debate:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Regra",
      "Como fazer"
     ],
     "linhas": [
      [
       "👂 Ouvir até o fim",
       "Esperar o outro terminar antes de responder"
      ],
      [
       "✋ Esperar a vez",
       "Um fala de cada vez"
      ],
      [
       "📚 Dar um motivo",
       "Dizer <strong>por que</strong> pensa assim e, se puder, de onde veio a informação (a <strong>fonte</strong>)"
      ],
      [
       "🤝 Aceitar discordar",
       "No fim, cada um pode continuar com a sua opinião, e tudo bem"
      ]
     ]
    }
   ],
   "termos": [
    {
     "termo": "Debate",
     "rotulo": "<strong>Debate</strong>",
     "def": "conversa em que as pessoas defendem opiniões diferentes."
    },
    {
     "termo": "Argumento",
     "rotulo": "<strong>Argumento</strong>",
     "def": "motivo que explica por que você pensa de um jeito."
    },
    {
     "termo": "Ataque pessoal",
     "rotulo": "<strong>Ataque pessoal</strong>",
     "def": "ofender a pessoa em vez de responder à ideia dela."
    },
    {
     "termo": "Fonte",
     "rotulo": "<strong>Fonte</strong>",
     "def": "de onde veio a informação (um livro, um jornal, um site confiável)."
    },
    {
     "termo": "Opinião",
     "rotulo": "<strong>Opinião</strong>",
     "def": "o que cada um pensa sobre um assunto."
    }
   ],
   "ondeUso": {
    "itens": [
     "Nos <strong>comentários</strong> de um vídeo polêmico.",
     "No <strong>grupo da turma</strong>, quando a turma não concorda sobre o passeio.",
     "Nas <strong>eleições do grêmio</strong> da escola."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "No debate respeitoso, a gente critica a ideia, não a pessoa.",
    "“Você não sabe nada” é um bom argumento.",
    "Argumento é o motivo que explica a sua opinião.",
    "No fim do debate, tudo bem cada um continuar com a sua opinião.",
    "Fonte é de onde veio a informação."
   ],
   "resumo": {
    "texto": "No **debate respeitoso**, você critica a **ideia**, não a **pessoa**. Use **argumentos**: discordar e dar um motivo, com **fontes**; evite o **ataque pessoal**. Regras: **ouvir até o fim**, **esperar a vez**, **dar um motivo** e **aceitar discordar**.",
    "chaves": [
     "debate",
     "argumento",
     "ataque pessoal",
     "fonte",
     "opinião"
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
