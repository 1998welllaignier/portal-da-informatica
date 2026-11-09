/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-9ano-4bim.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-9ano-4bim", {
 "titulo": "Apostila de Informática – 9º Ano – 4º Bimestre",
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
     "🕸️ Missão 1 – Grafos e árvores: mapas, caminhos e decisões",
     "Pensamento Computacional"
    ],
    [
     "🔐 Missão 2 – Criptografia e ataques: como os dados são protegidos",
     "Mundo Digital"
    ],
    [
     "©️ Missão 3 – Autoria, imagem e deepfakes",
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
   "icone": "🕸️",
   "titulo": "Missão 1 – Grafos e árvores: mapas, caminhos e decisões",
   "objetivo": "representar informações ligadas com grafos e árvores, encontrar o caminho mais curto em um mapa e organizar escolhas em uma árvore de decisão.",
   "comecar": [
    {
     "t": "p",
     "h": "No 8º ano você trabalhou com <strong>listas</strong>, em que cada item ocupa uma posição, um depois do outro. Mas muita informação não cabe em fila: as ruas de um mapa, as amizades de uma rede social e as pastas do computador têm ligações para vários lados. Para guardar esse tipo de informação, os computadores usam <strong>grafos</strong> e <strong>árvores</strong>."
    },
    {
     "t": "tabela",
     "cab": [
      "Estrutura",
      "O que é",
      "Exemplo"
     ],
     "linhas": [
      [
       "🕸️ Grafo",
       "Pontos, chamados <strong>vértices</strong>, ligados por linhas, chamadas <strong>arestas</strong>",
       "Cidades ligadas por estradas; amigos em uma rede social"
      ],
      [
       "⚖️ Grafo com pesos",
       "Cada aresta tem um número, o <strong>peso</strong>: distância, tempo ou custo",
       "O aplicativo de mapas calculando a melhor rota"
      ],
      [
       "🌳 Árvore",
       "Grafo <strong>sem ciclos</strong> que começa em um único vértice, a <strong>raiz</strong>, e se divide em galhos até as <strong>folhas</strong>",
       "As pastas do computador; a árvore genealógica; o chaveamento de um campeonato"
      ],
      [
       "❓ Árvore de decisão",
       "Árvore em que cada vértice é uma <strong>pergunta</strong> de sim ou não e cada folha é uma <strong>resposta</strong>",
       "O jogo de adivinhar um objeto; a triagem de um atendimento"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Palavras importantes:</strong>"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "<strong>Caminho:</strong> a sequência de arestas que leva de um vértice a outro."
      },
      {
       "nivel": 0,
       "h": "<strong>Comprimento do caminho:</strong> a soma dos pesos das arestas do caminho."
      },
      {
       "nivel": 0,
       "h": "<strong>Ciclo:</strong> um caminho que volta ao vértice de onde saiu. Uma árvore nunca tem ciclo."
      }
     ]
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> de A até D existem dois caminhos. A → B → D soma 3 + 4 = <strong>7</strong>. A → C → D soma 2 + 6 = <strong>8</strong>. O caminho mais curto é <strong>A → B → D</strong>. Atenção: o mais curto é o de <strong>menor soma</strong>, não o de menos paradas."
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong> (do grego <em>graphein</em>, escrever ou desenhar)",
     "def": "desenho de pontos ligados por linhas que representa informações conectadas."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong>",
     "def": "cada ponto do grafo, como um lugar ou uma pessoa."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada linha que liga dois vértices, como uma rua ou uma amizade."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "o número escrito na aresta: distância, tempo ou custo."
    },
    {
     "termo": "Caminho",
     "rotulo": "<strong>Caminho</strong>",
     "def": "a sequência de arestas que leva de um vértice a outro."
    },
    {
     "termo": "Ciclo",
     "rotulo": "<strong>Ciclo</strong>",
     "def": "um caminho que volta ao vértice de onde saiu."
    },
    {
     "termo": "Árvore",
     "rotulo": "<strong>Árvore</strong>",
     "def": "grafo sem ciclos. A <strong>raiz</strong> é o vértice onde ela começa; as <strong>folhas</strong> são os vértices do fim, que não se dividem mais."
    },
    {
     "termo": "Árvore de decisão",
     "rotulo": "<strong>Árvore de decisão</strong>",
     "def": "árvore em que cada vértice é uma pergunta de sim ou não e cada folha é uma resposta."
    },
    {
     "termo": "Chaveamento",
     "rotulo": "<strong>Chaveamento</strong>",
     "def": "a tabela de um campeonato em que quem vence avança para a próxima fase."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapas</strong> usa um grafo com pesos para achar o caminho mais rápido.",
     "A sugestão “<strong>pessoas que você talvez conheça</strong>” vem do grafo de amizades da rede social.",
     "As <strong>pastas do celular</strong> e o <strong>chaveamento</strong> de um campeonato são árvores.",
     "A <strong>triagem</strong> no posto de saúde segue perguntas de sim ou não, como uma árvore de decisão."
    ],
    "reflexao": "Pense em dois caminhos para ir a um lugar da cidade (a praça, o mercado). Qual é mais curto e por quê?"
   },
   "alertas": [
    "Tudo desta missão é feito no próprio portal. Não precisa salvar nada no computador: o portal registra o que você fez. Ao final da aula, desligue o computador pelo caminho certo: <strong>Iniciar → Ligar/Desligar → Desligar</strong>."
   ],
   "vf": [
    "Em um grafo, os pontos se chamam vértices e as ligações se chamam arestas.",
    "O caminho com menos paradas é sempre o mais curto.",
    "Uma árvore é um grafo sem ciclos que começa na raiz.",
    "As pastas do computador são organizadas como uma árvore.",
    "Em uma árvore de decisão, cada folha é uma pergunta."
   ],
   "resumo": {
    "texto": "Um **grafo** representa informações ligadas entre si: os pontos são os **vértices** e as ligações são as **arestas**. Quando as arestas têm números (distância, tempo ou custo), elas têm **pesos**, e o **caminho mais curto** é o de menor soma dos pesos, não o de menos paradas. Uma **árvore** é um grafo sem **ciclos** que começa na **raiz** e termina nas **folhas**, como as pastas do computador. Na **árvore de decisão**, cada vértice é uma pergunta de sim ou não e cada folha é uma resposta.",
    "chaves": [
     "grafo",
     "vértice",
     "aresta",
     "peso",
     "caminho mais curto",
     "ciclo",
     "árvore",
     "raiz",
     "folha",
     "árvore de decisão"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🔐",
   "titulo": "Missão 2 – Criptografia e ataques: como os dados são protegidos",
   "objetivo": "entender como a criptografia esconde uma mensagem com uma chave, usar a cifra de César e conhecer como funcionam ataques como a força bruta, o ransomware e a engenharia social.",
   "comecar": [
    {
     "t": "p",
     "h": "No 7º ano você aprendeu a reconhecer golpes e a criar senhas fortes. Agora vamos ver o que acontece por dentro: como os dados viajam escondidos e como os ataques funcionam."
    },
    {
     "t": "tabela",
     "cab": [
      "Termo",
      "O que é"
     ],
     "linhas": [
      [
       "🔐 Criptografia",
       "Transformar uma mensagem para que só quem tem a <strong>chave</strong> consiga ler"
      ],
      [
       "📄 Texto claro",
       "A mensagem original, que qualquer pessoa entende"
      ],
      [
       "🔒 Texto cifrado",
       "A mensagem embaralhada, depois de criptografada"
      ],
      [
       "🔑 Chave",
       "A informação secreta usada para cifrar e para decifrar"
      ],
      [
       "🔓 Decifrar",
       "Voltar do texto cifrado para o texto claro usando a chave"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Cifra de César:</strong> cada letra anda um número fixo de casas no alfabeto. Esse número é a <strong>chave</strong>. Com a chave 3, o A vira D, o B vira E, e assim por diante; no fim do alfabeto, a contagem volta para o começo (X vira A, Y vira B, Z vira C). Exemplo: <strong>SOL → VRO</strong>. Para decifrar, ande 3 casas para trás."
    },
    {
     "t": "p",
     "h": "<strong>Por que a cifra de César é fácil de quebrar?</strong> Ela só tem <strong>25 chaves</strong> possíveis. Testando uma chave de cada vez (um <strong>ataque de força bruta</strong>), dá para descobrir a mensagem em poucos minutos, mesmo sem saber a chave. Por isso a criptografia de hoje usa chaves enormes."
    },
    {
     "t": "tabela",
     "cab": [
      "Letra",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M"
     ],
     "linhas": [
      [
       "Chave 3",
       "D",
       "E",
       "F",
       "G",
       "H",
       "I",
       "J",
       "K",
       "L",
       "M",
       "N",
       "O",
       "P"
      ]
     ]
    },
    {
     "t": "tabela",
     "cab": [
      "Letra",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
     ],
     "linhas": [
      [
       "Chave 3",
       "Q",
       "R",
       "S",
       "T",
       "U",
       "V",
       "W",
       "X",
       "Y",
       "Z",
       "A",
       "B",
       "C"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Onde a criptografia está:</strong> no <strong>cadeado</strong> e no <strong>https</strong> dos sites, nas mensagens com criptografia de ponta a ponta (só quem envia e quem recebe consegue ler), nas senhas guardadas pelos sites e na senha do Wi-Fi."
    },
    {
     "t": "p",
     "h": "<strong>Como funcionam os ataques:</strong>"
    },
    {
     "t": "tabela",
     "cab": [
      "Ataque",
      "Como funciona",
      "Como se proteger"
     ],
     "linhas": [
      [
       "🔨 Força bruta",
       "Um programa testa todas as senhas possíveis, uma por uma, até acertar",
       "Senha longa; bloqueio depois de tentativas erradas; verificação em duas etapas"
      ],
      [
       "🦠 Ransomware",
       "Programa malicioso que <strong>criptografa</strong> os arquivos da vítima e pede dinheiro, o <strong>resgate</strong>, para devolvê-los",
       "Cópia de segurança (<strong>backup</strong>); não abrir anexos suspeitos; sistema atualizado"
      ],
      [
       "🎭 Engenharia social",
       "Enganar a pessoa para que ela mesma entregue a senha ou o código. O <strong>phishing</strong> (mensagem ou link falso que promete prêmio ou finge ser do banco para você digitar a senha) é um tipo de engenharia social",
       "Desconfiar de pedidos urgentes; nunca passar códigos recebidos por SMS; não clicar em links de prêmio"
      ],
      [
       "🌊 DDoS (negação de serviço)",
       "Milhares de computadores mandam pedidos ao mesmo tempo até o site sair do ar",
       "Proteção feita pelas empresas nos servidores"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>Por que a senha longa protege:</strong> cada posição de uma senha só de números tem 10 opções (0 a 9). Uma senha de 2 dígitos tem 10 × 10 = <strong>100</strong> combinações; uma de 4 dígitos tem 10 × 10 × 10 × 10 = <strong>10.000</strong>. Cada dígito a mais multiplica o trabalho da força bruta por 10."
    }
   ],
   "termos": [
    {
     "termo": "Criptografia",
     "rotulo": "<strong>Criptografia</strong> (do grego <em>kryptós</em> = escondido; <em>graphein</em> = escrever)",
     "def": "a “escrita escondida”, que transforma a mensagem para que só quem tem a chave consiga ler."
    },
    {
     "termo": "Cifrar",
     "rotulo": "<strong>Cifrar</strong> e <strong>decifrar</strong>",
     "def": "embaralhar a mensagem e desembaralhá-la. <strong>Cifra</strong> é o método usado para isso."
    },
    {
     "termo": "Texto claro",
     "rotulo": "<strong>Texto claro</strong> e <strong>texto cifrado</strong>",
     "def": "a mensagem original, que qualquer um entende, e a mensagem embaralhada."
    },
    {
     "termo": "Chave",
     "rotulo": "<strong>Chave</strong>",
     "def": "a informação secreta usada para cifrar e decifrar, como o número de casas na cifra de César."
    },
    {
     "termo": "Cifra de César",
     "rotulo": "<strong>Cifra de César</strong>",
     "def": "usada por Júlio César, general romano, há mais de 2 mil anos, para mandar ordens ao exército."
    },
    {
     "termo": "Criptografia de ponta a ponta",
     "rotulo": "<strong>Criptografia de ponta a ponta</strong>",
     "def": "só quem envia e quem recebe conseguem ler, nem a empresa do aplicativo. Onde eu vejo: no aviso amarelo no começo das conversas do WhatsApp."
    },
    {
     "termo": "HTTPS",
     "rotulo": "<strong>HTTPS</strong> (<em>HyperText Transfer Protocol Secure</em>, Protocolo Seguro de Transferência de Hipertexto)",
     "def": "as páginas viajam criptografadas. Onde eu vejo: no começo do endereço do site e no cadeado 🔒."
    },
    {
     "termo": "Força bruta",
     "rotulo": "<strong>Força bruta</strong> (em inglês, <em>brute force</em>)",
     "def": "testar todas as senhas possíveis, uma por uma, até acertar."
    },
    {
     "termo": "Malware",
     "rotulo": "<strong>Malware</strong> (<em>malicious software</em>, programa malicioso)",
     "def": "programa feito para causar dano ou roubar dados."
    },
    {
     "termo": "Ransomware",
     "rotulo": "<strong>Ransomware</strong> (<em>ransom</em> = resgate; <em>software</em> = programa)",
     "def": "programa que tranca (criptografa) os arquivos e pede dinheiro para devolvê-los."
    },
    {
     "termo": "Backup",
     "rotulo": "<strong>Backup</strong> (em inglês, reserva, apoio)",
     "def": "cópia de segurança dos arquivos, guardada em outro lugar."
    },
    {
     "termo": "Engenharia social",
     "rotulo": "<strong>Engenharia social</strong>",
     "def": "enganar a pessoa, e não o computador, para que ela mesma entregue a senha ou o código."
    },
    {
     "termo": "DDoS",
     "rotulo": "<strong>DDoS</strong> (<em>Distributed Denial of Service</em>, Negação de Serviço Distribuída)",
     "def": "milhares de aparelhos mandam pedidos ao mesmo tempo para derrubar um site. <em>Distribuída</em> quer dizer que os pedidos vêm de muitos lugares."
    },
    {
     "termo": "Lei nº 12.737/2012",
     "rotulo": "<strong>Lei nº 12.737/2012</strong>",
     "def": "conhecida como Lei Carolina Dieckmann, torna crime invadir o celular ou o computador de outra pessoa."
    }
   ],
   "ondeUso": {
    "itens": [
     "As mensagens do WhatsApp têm <strong>criptografia de ponta a ponta</strong>: só quem envia e quem recebe consegue ler.",
     "O <strong>Pix</strong> e o aplicativo do banco usam criptografia e códigos para proteger o dinheiro.",
     "Hospitais e empresas já pararam por causa de <strong>ransomware</strong>; quem tinha backup voltou a funcionar mais rápido."
    ],
    "reflexao": "Onde você usa senha ou código no dia a dia? Qual deles é o mais importante proteger? (Não escreva a senha!)"
   },
   "alertas": [
    "Use o que você aprendeu <strong>só para se proteger</strong>. Tentar descobrir a senha de outra pessoa ou invadir a conta ou o aparelho de alguém é <strong>crime</strong> (Lei nº 12.737/2012). No Bloco de Notas, <strong>nunca escreva uma senha verdadeira</strong>."
   ],
   "vf": [
    "Criptografar é transformar uma mensagem para que só quem tem a chave consiga ler.",
    "Na cifra de César com chave 3, a letra A vira D.",
    "Uma senha de 4 dígitos é mais difícil de descobrir por força bruta do que uma de 6 dígitos.",
    "O ransomware criptografa os arquivos da vítima e pede dinheiro para devolvê-los.",
    "Engenharia social é um programa que testa todas as senhas possíveis."
   ],
   "resumo": {
    "texto": "A **criptografia** transforma o **texto claro** em **texto cifrado**, e só quem tem a **chave** consegue **decifrar**. Na **cifra de César**, cada letra anda um número fixo de casas no alfabeto. A criptografia protege os sites com cadeado (https), as mensagens e as senhas. Os ataques também usam a computação: a **força bruta** testa todas as senhas possíveis, por isso senhas longas são mais seguras; o **ransomware** criptografa os arquivos e pede **resgate**, e o **backup** é a melhor defesa; a **engenharia social** engana a pessoa para ela entregar a senha; o **DDoS** derruba um site com milhões de pedidos ao mesmo tempo.",
    "chaves": [
     "criptografia",
     "texto claro",
     "texto cifrado",
     "chave",
     "cifra de César",
     "força bruta",
     "ransomware",
     "backup",
     "engenharia social",
     "DDoS"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "©️",
   "titulo": "Missão 3 – Autoria, imagem e deepfakes",
   "objetivo": "respeitar os direitos autorais e o direito de imagem ao criar e compartilhar conteúdo, reconhecer conteúdos falsos feitos com inteligência artificial e descobrir por que uma informação foi espalhada.",
   "comecar": [
    {
     "t": "p",
     "h": "No 8º ano você aprendeu a checar uma informação antes de compartilhar: quem publicou, quando, se outros confirmam e como está escrita. Agora vamos dar mais dois passos: <strong>respeitar quem cria</strong> e descobrir <strong>por que</strong> um conteúdo foi espalhado."
    },
    {
     "t": "p",
     "h": "<strong>Quem cria tem direitos:</strong>"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "<strong>Direito autoral:</strong> quem cria uma música, foto, texto, desenho ou vídeo é o <strong>autor</strong> e decide como a obra pode ser usada (Lei nº 9.610/1998). Estar na internet <strong>não</strong> significa que a obra é livre."
      },
      {
       "nivel": 0,
       "h": "<strong>Plágio:</strong> copiar o trabalho de outra pessoa e apresentar como se fosse seu."
      },
      {
       "nivel": 0,
       "h": "<strong>Domínio público:</strong> obras que todos podem usar livremente. No Brasil, isso acontece 70 anos depois da morte do autor, como as obras de Machado de Assis."
      },
      {
       "nivel": 0,
       "h": "<strong>Licença Creative Commons:</strong> o autor libera o uso da obra com algumas condições. Na mais comum, a <strong>CC BY</strong>, você pode usar desde que dê o <strong>crédito</strong>, isto é, escreva o nome do autor."
      },
      {
       "nivel": 0,
       "h": "<strong>Como dar crédito:</strong> <em>Foto: nome do autor, site onde estava, licença.</em>"
      },
      {
       "nivel": 0,
       "h": "<strong>Direito de imagem:</strong> ninguém pode publicar a foto ou o vídeo de uma pessoa sem a autorização dela (ou dos responsáveis, no caso de menores de idade)."
      }
     ]
    },
    {
     "t": "p",
     "h": "<strong>Inteligência artificial e deepfakes:</strong>"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "A <strong>inteligência artificial (IA) generativa</strong> cria textos, imagens, vozes e vídeos novos a partir de um pedido."
      },
      {
       "nivel": 0,
       "h": "<strong>Deepfake</strong> é um vídeo, uma foto ou um áudio <strong>falso</strong>, feito com IA, que imita o rosto ou a voz de uma pessoa real."
      },
      {
       "nivel": 0,
       "h": "<strong>Sinais de alerta:</strong> boca fora de sincronia com a fala, voz robótica, piscar estranho, mãos e dedos deformados, letras borradas no fundo, uma fala que a pessoa nunca diria, uma <strong>promessa de presente fácil por link</strong> (famoso “dando” celular ou dinheiro) e nenhum site de notícias confirmando. Atenção: ser famoso ou ter imagem de boa qualidade <strong>não</strong> prova nada; deepfakes também podem ter ótima qualidade."
      },
      {
       "nivel": 0,
       "h": "Criar um deepfake de um colega, mesmo “de brincadeira”, desrespeita o direito de imagem, é cyberbullying e pode ser crime."
      }
     ]
    },
    {
     "t": "p",
     "h": "<strong>Por que foi espalhado?</strong> Toda informação falsa tem um motivo:"
    },
    {
     "t": "tabela",
     "cab": [
      "Motivo",
      "Exemplo"
     ],
     "linhas": [
      [
       "💰 Dinheiro",
       "Título chamativo para ganhar cliques e propaganda; golpe para vender um produto falso"
      ],
      [
       "🗳️ Política",
       "Atacar ou favorecer um candidato ou um grupo"
      ],
      [
       "😂 Humor",
       "Sátira ou piada que passa a circular como se fosse verdade"
      ],
      [
       "😠 Ódio",
       "Humilhar uma pessoa ou um grupo"
      ],
      [
       "🤷 Engano",
       "A pessoa acreditou e repassou sem checar"
      ]
     ]
    },
    {
     "t": "p",
     "h": "<strong>O que fazer quando chega um conteúdo suspeito:</strong> não clico no link, não compartilho e aviso a quem me mandou que pode ser golpe ou mentira."
    }
   ],
   "termos": [
    {
     "termo": "Obra",
     "rotulo": "<strong>Obra</strong> e <strong>autor</strong>",
     "def": "obra é o que foi criado (música, foto, texto, desenho, vídeo); autor é quem criou."
    },
    {
     "termo": "Direito autoral",
     "rotulo": "<strong>Direito autoral</strong>",
     "def": "o direito de quem cria de decidir como a obra é usada (Lei nº 9.610/1998)."
    },
    {
     "termo": "©",
     "rotulo": "<strong>©</strong> (<em>copyright</em>: <em>copy</em> = cópia; <em>right</em> = direito)",
     "def": "símbolo de que a obra tem dono. Onde eu vejo: no rodapé de sites e na capa de livros, com “todos os direitos reservados”."
    },
    {
     "termo": "Plágio",
     "rotulo": "<strong>Plágio</strong>",
     "def": "copiar o trabalho de outra pessoa e apresentar como se fosse seu."
    },
    {
     "termo": "Domínio público",
     "rotulo": "<strong>Domínio público</strong>",
     "def": "obras que todos podem usar livremente; no Brasil, 70 anos depois da morte do autor."
    },
    {
     "termo": "Licença",
     "rotulo": "<strong>Licença</strong>",
     "def": "a autorização que o autor dá para usar a obra."
    },
    {
     "termo": "Creative Commons",
     "rotulo": "<strong>Creative Commons</strong>",
     "def": "nome de uma organização que criou licenças gratuitas com que o autor libera o uso da obra sob algumas condições."
    },
    {
     "termo": "CC BY",
     "rotulo": "<strong>CC BY</strong> (<em>CC = Creative Commons; BY indica atribuição, ou seja, dizer por quem a obra foi feita</em>)",
     "def": "pode usar a obra desde que dê o <strong>crédito</strong>, isto é, escreva o nome do autor."
    },
    {
     "termo": "Direito de imagem",
     "rotulo": "<strong>Direito de imagem</strong>",
     "def": "ninguém pode publicar a sua foto ou o seu vídeo sem a sua autorização."
    },
    {
     "termo": "IA",
     "rotulo": "<strong>IA</strong> (Inteligência Artificial)",
     "def": "programas que aprendem com muitos exemplos e fazem tarefas que pareciam só humanas, como conversar ou reconhecer rostos. <strong>IA generativa</strong> é a que <em>gera</em> (cria) textos, imagens, vozes e vídeos novos a partir de um pedido."
    },
    {
     "termo": "Deepfake",
     "rotulo": "<strong>Deepfake</strong> (<em>deep</em>, de <em>deep learning</em>, “aprendizado profundo”, um jeito de a IA aprender; <em>fake</em> = falso)",
     "def": "vídeo, foto ou áudio falso, feito com IA, que imita uma pessoa real."
    },
    {
     "termo": "Sátira",
     "rotulo": "<strong>Sátira</strong>",
     "def": "texto de humor que imita uma notícia para fazer rir; vira desinformação quando é compartilhado como se fosse verdade."
    }
   ],
   "ondeUso": {
    "itens": [
     "Um vídeo com <strong>música de outra pessoa</strong> pode ser bloqueado na rede social por direito autoral.",
     "Num <strong>trabalho da escola</strong>, a imagem da internet precisa de crédito ao autor.",
     "Golpistas usam <strong>voz e rosto falsos de famosos</strong>, feitos com IA, para pedir dinheiro."
    ],
    "reflexao": "Você já viu um vídeo ou uma foto que parecia falso? Que sinais você percebeu?"
   },
   "alertas": [
    "No cartaz, <strong>não use fotos de colegas nem imagens copiadas da internet</strong>. Se você for vítima de um deepfake ou tiver uma foto exposta, <strong>não apague as provas</strong> e conte ao professor ou a um adulto de confiança."
   ],
   "vf": [
    "Tudo o que está na internet pode ser usado sem dar crédito ao autor.",
    "Publicar a foto de alguém sem autorização desrespeita o direito de imagem.",
    "Deepfake é um vídeo, uma foto ou um áudio falso feito com inteligência artificial.",
    "A licença CC BY permite usar a obra desde que o autor receba o crédito.",
    "Toda informação falsa é espalhada por engano, nunca para ganhar dinheiro."
   ],
   "resumo": {
    "texto": "Quem cria uma obra é o **autor** e tem o **direito autoral** sobre ela; copiar e apresentar como seu é **plágio**. Obras em **domínio público** podem ser usadas livremente, e licenças como a **Creative Commons (CC BY)** liberam o uso desde que você dê o **crédito**. O **direito de imagem** proíbe publicar a foto ou o vídeo de alguém sem autorização. A **inteligência artificial** pode criar **deepfakes**, vídeos, fotos e áudios falsos que imitam pessoas reais: desconfie de boca fora de sincronia, voz robótica e falas estranhas. Antes de compartilhar, pergunte também **por que** aquilo foi espalhado: dinheiro, política, humor, ódio ou engano.",
    "chaves": [
     "autor",
     "direito autoral",
     "plágio",
     "domínio público",
     "Creative Commons",
     "crédito",
     "direito de imagem",
     "inteligência artificial",
     "deepfake",
     "motivação"
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
    "texto": "Neste bimestre você aprendeu a representar mapas, pastas e decisões com grafos e árvores, descobriu como a criptografia protege os dados e como funcionam os ataques, e viu como respeitar a autoria e a imagem das pessoas e desconfiar de deepfakes. As missões concluídas no portal mostram tudo o que você conquistou. Boa jornada no Ensino Médio!",
    "chaves": [
     "missão",
     "conquista",
     "autoavaliação",
     "aprendizado"
    ]
   },
   "autoavaliacao": [
    "Represento um mapa como grafo, com vértices, arestas e pesos.",
    "Encontro o caminho mais curto somando os pesos.",
    "Reconheço a raiz e as folhas de uma árvore, como as pastas do computador.",
    "Cifro e decifro uma mensagem com a cifra de César.",
    "Explico como funcionam a força bruta, o ransomware e a engenharia social e como me proteger.",
    "Respeito os direitos autorais e o direito de imagem e sei dar crédito ao autor.",
    "Reconheço sinais de deepfake e pergunto por que um conteúdo foi espalhado."
   ]
  }
 ]
});
