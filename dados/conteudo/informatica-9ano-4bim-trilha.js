/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/informatica-9ano-4bim-trilha.md.
   Para mudar o texto, edite a fonte e rode o script de novo. */
PORTAL.registrarConteudo("informatica-9ano-4bim-trilha", {
 "titulo": "Passaporte de Missões – 9º Ano – 4º Bimestre · Trilha Passo a Passo",
 "comoUsar": [
  {
   "t": "p",
   "h": "Neste bimestre você vai cumprir <strong>3 missões</strong> e um <strong>projeto final</strong>. São as mesmas missões da sua turma."
  },
  {
   "t": "tabela",
   "cab": [
    "Missão",
    "Tema"
   ],
   "linhas": [
    [
     "🕸️ Missão 1 – Mapas e caminhos",
     "Pensamento Computacional"
    ],
    [
     "🔐 Missão 2 – Mensagem secreta e golpes",
     "Mundo Digital"
    ],
    [
     "©️ Missão 3 – Autoria, imagem e vídeos falsos",
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
   "h": "<strong>Regra importante:</strong> quem conclui o Básico (aparece a faixa verde <strong>✅ Básico concluído</strong>) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮"
  }
 ],
 "missoes": [
  {
   "id": "m1",
   "icone": "🕸️",
   "titulo": "Missão 1 – Mapas e caminhos",
   "objetivo": "ler um mapa de pontos e linhas, achar o caminho mais curto e seguir perguntas de sim ou não.",
   "comecar": [
    {
     "t": "p",
     "h": "Um <strong>grafo</strong> é um desenho de <strong>pontos</strong> ligados por <strong>linhas</strong>. Ele parece um mapa."
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "Cada <strong>ponto</strong> é um lugar: a casa, a escola, a padaria."
      },
      {
       "nivel": 0,
       "h": "Cada <strong>linha</strong> é uma rua que liga dois lugares."
      },
      {
       "nivel": 0,
       "h": "O <strong>número</strong> na linha mostra quantos <strong>minutos</strong> você anda naquela rua."
      }
     ]
    },
    {
     "t": "p",
     "h": "Para achar o <strong>caminho mais curto</strong>, <strong>some os números</strong> de cada caminho. O caminho com a <strong>menor soma</strong> é o mais curto."
    },
    {
     "t": "p",
     "h": "<strong>Exemplo:</strong> de A até D, o caminho A → B → D soma 3 + 4 = <strong>7</strong>. O caminho A → C → D soma 2 + 6 = <strong>8</strong>. O mais curto é <strong>A → B → D</strong> (7)."
    },
    {
     "t": "p",
     "h": "Uma <strong>árvore de decisão</strong> é uma lista de <strong>perguntas de sim ou não</strong>. Cada resposta leva a um galho, até chegar ao resultado. Exemplo: É eletrônico? <strong>Sim</strong>. Tem tela? <strong>Sim</strong>. Então é o <strong>🖥️ Monitor</strong>. Se não tiver tela, é o <strong>⌨️ Teclado</strong>."
    }
   ],
   "termos": [
    {
     "termo": "Grafo",
     "rotulo": "<strong>Grafo</strong>",
     "def": "desenho de pontos ligados por linhas, como um mapa."
    },
    {
     "termo": "Vértice",
     "rotulo": "<strong>Vértice</strong>",
     "def": "cada ponto do grafo, como um lugar."
    },
    {
     "termo": "Aresta",
     "rotulo": "<strong>Aresta</strong>",
     "def": "cada linha que liga dois pontos, como uma rua."
    },
    {
     "termo": "Peso",
     "rotulo": "<strong>Peso</strong>",
     "def": "o número escrito na linha, como os minutos de caminhada."
    },
    {
     "termo": "Caminho mais curto",
     "rotulo": "<strong>Caminho mais curto</strong>",
     "def": "o caminho com a <strong>menor soma</strong> dos números."
    },
    {
     "termo": "Árvore de decisão",
     "rotulo": "<strong>Árvore de decisão</strong>",
     "def": "perguntas de sim ou não que levam a uma resposta."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>aplicativo de mapas</strong> soma os tempos para achar o caminho mais rápido.",
     "As <strong>pastas do celular</strong> se dividem como galhos de uma árvore.",
     "O jogo de <strong>adivinhar um objeto</strong> usa perguntas de sim ou não."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "No grafo, os pontos são ligados por linhas.",
    "O caminho mais curto é o de maior soma.",
    "A árvore de decisão usa perguntas de sim ou não."
   ],
   "resumo": {
    "texto": "Um **grafo** tem **pontos** ligados por **linhas** com números. Para achar o **caminho mais curto**, eu **somo** e escolho a **menor soma**. Na **árvore de decisão**, eu respondo sim ou não até chegar ao resultado.",
    "chaves": [
     "grafo",
     "ponto",
     "linha",
     "soma",
     "caminho mais curto",
     "árvore de decisão"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m2",
   "icone": "🔐",
   "titulo": "Missão 2 – Mensagem secreta e golpes",
   "objetivo": "esconder e descobrir uma mensagem com a cifra de César e reconhecer golpes que roubam senhas e arquivos.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Criptografia</strong> é esconder uma mensagem para que <strong>só quem tem a chave</strong> consiga ler."
    },
    {
     "t": "p",
     "h": "<strong>Cifra de César:</strong> cada letra <strong>anda</strong> algumas casas no alfabeto. O número de casas é a <strong>chave</strong>."
    },
    {
     "t": "p",
     "h": "Com a <strong>chave 1</strong>, cada letra anda <strong>1 casa</strong>:"
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
      "L",
      "O",
      "S"
     ],
     "linhas": [
      [
       "Com chave 1",
       "B",
       "C",
       "D",
       "E",
       "F",
       "G",
       "H",
       "M",
       "P",
       "T"
      ]
     ]
    },
    {
     "t": "p",
     "h": "Exemplo: <strong>SOL</strong> com chave 1 vira <strong>TPM</strong>. Para <strong>descobrir</strong> a mensagem, cada letra <strong>volta</strong> 1 casa: T → S, P → O, M → L."
    },
    {
     "t": "p",
     "h": "<strong>Golpes que você precisa conhecer:</strong>"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "🔨 <strong>Força bruta</strong>: um programa tenta <strong>todas as senhas</strong>, uma por uma. Proteção: senha <strong>comprida</strong>."
      },
      {
       "nivel": 0,
       "h": "🦠 <strong>Ransomware</strong>: um vírus <strong>tranca</strong> os seus arquivos e pede dinheiro. Proteção: ter uma <strong>cópia</strong> dos arquivos."
      },
      {
       "nivel": 0,
       "h": "🎭 <strong>Engenharia social</strong>: alguém <strong>engana você</strong> para você mesmo entregar a senha ou o código. Proteção: <strong>nunca passe</strong> senha nem código."
      }
     ]
    }
   ],
   "termos": [
    {
     "termo": "Criptografia",
     "rotulo": "<strong>Criptografia</strong> (do grego: <em>kryptós</em> = escondido; <em>graphein</em> = escrever)",
     "def": "escrever escondido, para só quem tem a chave ler."
    },
    {
     "termo": "Chave",
     "rotulo": "<strong>Chave</strong>",
     "def": "o segredo que esconde e mostra a mensagem. Na cifra de César, é o número de casas."
    },
    {
     "termo": "Cifrar",
     "rotulo": "<strong>Cifrar</strong>",
     "def": "esconder a mensagem. <strong>Decifrar</strong>: descobrir a mensagem."
    },
    {
     "termo": "Cifra de César",
     "rotulo": "<strong>Cifra de César</strong>",
     "def": "o jeito de esconder mensagens que o general romano Júlio César usava, há mais de 2 mil anos."
    },
    {
     "termo": "Força bruta",
     "rotulo": "<strong>Força bruta</strong>",
     "def": "tentar todas as senhas, uma por uma."
    },
    {
     "termo": "Ransomware",
     "rotulo": "<strong>Ransomware</strong> (<em>ransom</em> = resgate; <em>software</em> = programa)",
     "def": "programa que tranca os arquivos e pede dinheiro."
    },
    {
     "termo": "Backup",
     "rotulo": "<strong>Backup</strong> (em inglês, reserva)",
     "def": "uma cópia dos arquivos guardada em outro lugar."
    },
    {
     "termo": "Engenharia social",
     "rotulo": "<strong>Engenharia social</strong>",
     "def": "enganar a pessoa para ela mesma entregar a senha."
    }
   ],
   "ondeUso": {
    "itens": [
     "O <strong>cadeado 🔒</strong> dos sites e o <strong>WhatsApp</strong> usam criptografia.",
     "A <strong>senha comprida</strong> protege contra a força bruta.",
     "A <strong>cópia das fotos</strong> na nuvem protege contra o ransomware."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Na cifra de César, cada letra anda algumas casas no alfabeto.",
    "Posso passar a minha senha para quem me pedir com pressa.",
    "Ter uma cópia dos arquivos protege contra o ransomware."
   ],
   "resumo": {
    "texto": "A **criptografia** esconde a mensagem com uma **chave**. Na **cifra de César**, cada letra anda algumas casas. Contra os golpes: **senha comprida**, **cópia dos arquivos** e **nunca passar** senha ou código.",
    "chaves": [
     "criptografia",
     "chave",
     "cifra de César",
     "força bruta",
     "ransomware",
     "backup"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "m3",
   "icone": "©️",
   "titulo": "Missão 3 – Autoria, imagem e vídeos falsos",
   "objetivo": "dar o crédito a quem criou, pedir autorização antes de postar a foto de alguém e desconfiar de vídeos falsos feitos por inteligência artificial.",
   "comecar": [
    {
     "t": "p",
     "h": "<strong>Quem cria tem direitos.</strong> Quem fez a foto, a música ou o desenho é o <strong>autor</strong>. Estar na internet <strong>não</strong> quer dizer que é de graça para copiar."
    },
    {
     "t": "p",
     "h": "<strong>Plágio</strong> é copiar o trabalho de alguém e dizer que é seu."
    },
    {
     "t": "p",
     "h": "Ao usar a obra de outra pessoa, dê o <strong>crédito</strong>: escreva o <strong>nome do autor</strong>. Exemplo: <em>Foto: Ana Lima</em>."
    },
    {
     "t": "p",
     "h": "<strong>Direito de imagem:</strong> antes de postar a foto ou o vídeo de alguém, <strong>peça autorização</strong>."
    },
    {
     "t": "p",
     "h": "A <strong>inteligência artificial</strong> (IA) consegue fazer <strong>vídeos falsos</strong> de pessoas de verdade. Esse vídeo falso se chama <strong>deepfake</strong>."
    },
    {
     "t": "p",
     "h": "Sinais de <strong>deepfake</strong>:"
    },
    {
     "t": "lista",
     "ord": false,
     "itens": [
      {
       "nivel": 0,
       "h": "👄 a <strong>boca</strong> não acompanha a fala;"
      },
      {
       "nivel": 0,
       "h": "🤖 a <strong>voz</strong> parece de robô;"
      },
      {
       "nivel": 0,
       "h": "🎁 a pessoa famosa <strong>promete presente</strong> por um link;"
      },
      {
       "nivel": 0,
       "h": "📰 <strong>nenhum site de notícias</strong> confirma."
      }
     ]
    },
    {
     "t": "p",
     "h": "Recebeu algo suspeito? <strong>Não clique</strong>, <strong>não compartilhe</strong> e avise quem mandou."
    }
   ],
   "termos": [
    {
     "termo": "Autor",
     "rotulo": "<strong>Autor</strong>",
     "def": "quem criou a obra (foto, música, texto, desenho, vídeo)."
    },
    {
     "termo": "Direito autoral",
     "rotulo": "<strong>Direito autoral</strong>",
     "def": "o direito de quem criou de decidir como a obra é usada."
    },
    {
     "termo": "Plágio",
     "rotulo": "<strong>Plágio</strong>",
     "def": "copiar o trabalho de alguém e dizer que é seu."
    },
    {
     "termo": "Crédito",
     "rotulo": "<strong>Crédito</strong>",
     "def": "escrever o nome de quem criou."
    },
    {
     "termo": "Direito de imagem",
     "rotulo": "<strong>Direito de imagem</strong>",
     "def": "ninguém pode postar a sua foto sem a sua autorização."
    },
    {
     "termo": "IA",
     "rotulo": "<strong>IA</strong> (Inteligência Artificial)",
     "def": "programas que aprendem com exemplos e criam textos, imagens e vídeos."
    },
    {
     "termo": "Deepfake",
     "rotulo": "<strong>Deepfake</strong> (<em>fake</em> = falso, em inglês)",
     "def": "vídeo, foto ou áudio falso, feito com IA, que imita uma pessoa de verdade."
    }
   ],
   "ondeUso": {
    "itens": [
     "No <strong>trabalho da escola</strong>, escreva o nome de quem fez a foto que você usou.",
     "Antes de postar a <strong>foto de um colega</strong>, pergunte se ele deixa.",
     "Um <strong>vídeo de famoso dando celular</strong> por link é golpe."
    ],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [
    "Se está na internet, posso copiar e dizer que é meu.",
    "Antes de postar a foto de alguém, peço autorização.",
    "Boca fora de sincronia com a fala pode ser sinal de deepfake."
   ],
   "resumo": {
    "texto": "Quem cria é o **autor**: eu dou o **crédito** e não faço **plágio**. Antes de postar a foto de alguém, **peço autorização**. Vídeo com sinais estranhos pode ser **deepfake**: não clico e não compartilho.",
    "chaves": [
     "autor",
     "crédito",
     "plágio",
     "direito de imagem",
     "deepfake"
    ]
   },
   "autoavaliacao": []
  },
  {
   "id": "pf",
   "icone": "🏁",
   "titulo": "Projeto final – Meu Passaporte de Missões",
   "objetivo": "conferir as missões concluídas, completar o que faltou e mostrar o que você aprendeu no bimestre.",
   "comecar": [],
   "termos": [],
   "ondeUso": {
    "itens": [],
    "reflexao": ""
   },
   "alertas": [],
   "vf": [],
   "resumo": {
    "texto": "Neste bimestre você aprendeu a achar caminhos em mapas, a esconder mensagens com a cifra de César, a se proteger de golpes e a respeitar quem cria e a imagem das pessoas. As missões concluídas no portal mostram tudo o que você conquistou!",
    "chaves": [
     "missão",
     "conquista",
     "autoavaliação",
     "aprendizado"
    ]
   },
   "autoavaliacao": [
    "Acho o caminho mais curto somando os números.",
    "Respondo perguntas de sim ou não numa árvore de decisão.",
    "Escondo e descubro uma palavra com a cifra de César.",
    "Nunca passo a minha senha nem o código.",
    "Dou o crédito a quem criou.",
    "Desconfio de vídeo falso feito com IA."
   ]
  }
 ]
});
