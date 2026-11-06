/* Roteiro da aula (só para o professor) — 5º ano, 4º bimestre (atendimento individual)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Sem nomes de alunos neste arquivo (o repositório é público). */
(function () {
  const TEMPO = [
    { min: 5, icone: "🎬", t: "Abertura" },
    { min: 10, icone: "💡", t: "Para começar e O que significa?" },
    { min: 5, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 20, icone: "🧩", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 5, icone: "🎮", t: "Jogos (quem concluiu o Básico)" }
  ];
  const INDIVIDUAL = "Atendimento individual: leia junto, peça que ele explique com as próprias palavras e espere a resposta antes de ajudar. Elogie o esforço, não só o acerto. Se travar, dê uma pista, não a resposta.";

  PORTAL.registrarRoteiro("informatica-5ano-4bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computador do aluno ligado, com Bloco de Notas e Paint fáceis de achar",
      "🪪 Cartão com o código do aluno",
      "✅ Chamada no diário no começo; registro da aula no fim (ou o relatório do painel)"
    ],
    m1: {
      datas: "Terça 9h: 03/11 · Segunda 15h: 09/11",
      tempo: TEMPO,
      abertura: [
        { fala: "Hoje você vai descobrir como o computador funciona por dentro e onde ficam guardadas as fotos do celular da sua família. Quando concluir o Básico, aparece o primeiro ✔ no portal." },
        { fala: "Quando você tira uma foto no celular, para onde ela vai?" },
        { acao: "Para começar: aponte para as peças reais." },
        { fala: "O teclado e o mouse LEVAM informação para dentro: são entrada. O monitor MOSTRA: é saída. Dentro do gabinete está o processador, o ‘cérebro’, que faz as contas. E o armazenamento guarda os arquivos mesmo com tudo desligado." },
        { fala: "Os dados moram em dois lugares: no aparelho, como a galeria do celular e o pen drive, ou na nuvem, que não é no céu: são prédios cheios de computadores de empresas, e a gente chega lá pela internet." },
        { fala: "O sistema operacional é o programa que faz tudo funcionar. Aqui é o Windows, que quer dizer ‘janelas’ em inglês. No celular, é o Android ou o iOS." }
      ],
      onde: {
        pergunta: "Lembra do videogame? O controle é entrada e a televisão é saída. E quando o celular liga e aparece o logotipo, é o sistema operacional acordando.",
        fechamento: "Qual foi a palavra nova mais legal de hoje?",
        dica: INDIVIDUAL
      },
      demonstracao: "Mostre o botão Iniciar e deixe o aluno procurar o Bloco de Notas sozinho.",
      atencao: [
        "Confundiu pen drive com entrada? Pergunte: “Ele leva uma ordem para o computador ou guarda um arquivo?”",
        "O microfone costuma confundir: ele LEVA a voz para dentro, então é entrada.",
        "Não deixar mexer nos cabos. No fim, desligar pelo caminho certo: Iniciar → Ligar/Desligar → Desligar."
      ],
      perguntas: [
        { p: "A nuvem fica no céu?", r: "Não: são prédios cheios de computadores de empresas, e a gente chega lá pela internet." }
      ]
    },
    m2: {
      datas: "Terça 9h: 10/11 · Segunda 15h: 16/11",
      tempo: TEMPO,
      abertura: [
        { fala: "Hoje você vai organizar coisas como o celular organiza os contatos e desenhar um mapa de amizades. Isso tem nome: listas e grafos." },
        { fala: "Como o celular acha um nome rápido entre tantos contatos?" },
        { fala: "Uma lista guarda itens um depois do outro, cada um numa posição. Dá para inserir (colocar), remover (tirar) e trocar de lugar." },
        { acao: "Faça uma fila com 3 objetos da mesa e peça para ele inserir e remover um." },
        { fala: "Um grafo é um desenho de pontos e linhas. Cada ponto é um vértice, cada linha é uma aresta." },
        { acao: "Desenhe o grafo de amizades do exemplo da missão." }
      ],
      onde: {
        pergunta: "A fila da merenda é uma lista: quem chega entra no fim. E o mapa do celular é um grafo: as cidades são pontos e as estradas são linhas.",
        fechamento: "Me diz uma coisa da sua casa que é uma lista.",
        dica: INDIVIDUAL
      },
      demonstracao: "No Bloco de Notas, mostre uma vez: selecionar a linha, Ctrl + X para recortar e Ctrl + V para colar. Depois deixe ele fazer.",
      atencao: [
        "Para achar “quem tem mais amigos”, peça que conte as linhas que saem de cada círculo.",
        "Se a ordem alfabética travar, ele pode escrever só a primeira letra de cada brincadeira no papel antes."
      ]
    },
    m3: {
      datas: "Terça 9h: 17/11 · Segunda 15h: 23/11",
      tempo: TEMPO,
      abertura: [
        { fala: "Hoje você vai pensar como o computador pensa quando precisa escolher. Vamos usar três palavras mágicas: NÃO, E e OU." },
        { fala: "Como o celular sabe se pode desbloquear?" },
        { acao: "Jogo rápido:" },
        { fala: "O sol é quente: verdadeiro ou falso? E o sol NÃO é quente?" },
        { fala: "O NÃO vira ao contrário. Com E, as duas partes precisam ser verdade. Com OU, basta uma." },
        { fala: "Os algoritmos escolhem assim: SE estiver chovendo, ENTÃO levo guarda-chuva, SENÃO levo o boné." }
      ],
      onde: {
        pergunta: "No jogo, você só passa de fase SE pegar as moedas E chegar ao fim. O celular abre SE a senha estiver certa OU a digital for reconhecida.",
        fechamento: "Me fala uma escolha que você faz todo dia com SE, ENTÃO e SENÃO.",
        dica: INDIVIDUAL
      },
      demonstracao: "No Paint, deixe ele ler o algoritmo em voz alta antes de desenhar.",
      atencao: [
        "Para o E: “chave e cadeado: precisa dos dois”. Para o OU: “porta com duas chaves: qualquer uma abre”.",
        "Pintou o círculo errado? Peça para ler de novo o SE, devagar, círculo por círculo."
      ]
    },
    m4: {
      datas: "Terça 9h: 24/11 · Segunda 15h: 30/11 · No fim, avise que o próximo encontro é a prova",
      tempo: TEMPO,
      abertura: [
        { fala: "Hoje você vira detetive da internet: vai descobrir o que é verdade, o que é mentira e de quem é cada coisa que aparece lá." },
        { fala: "Já chegou no celular da sua família uma mensagem estranha?" },
        { acao: "Apresente as 4 perguntas: quem escreveu, quando, aparece em outros lugares, parece exagerado?" },
        { fala: "‘URGENTE!!!’ e ‘compartilhe já’ são alarmes." },
        { fala: "Quem cria um desenho é o autor, o dono. Para usar, a gente pede e escreve o nome dele: isso é dar o crédito. Copiar e dizer que é seu é plágio." },
        { fala: "Cada tecnologia tem seu uso: a calculadora faz contas, o Paint desenha, a chamada de vídeo junta quem está longe." }
      ],
      onde: {
        pergunta: "No grupo da família, antes de passar a mensagem para frente, confira. No trabalho da escola, escreva de onde veio a imagem.",
        fechamento: "Qual das 4 perguntas você vai usar na próxima mensagem estranha?",
        dica: INDIVIDUAL
      },
      demonstracao: "Cartaz no Paint: só desenho feito por ele, sem fotos e sem dados pessoais. O cartaz é a atividade que VOCÊ confere.",
      atencao: [
        "Achou que o vídeo do chocolate é verdade “porque está na internet”? Pergunte: “Quem fez o vídeo? Algum médico falou isso?” Valorize quando ele desconfiar.",
        "Nunca colocar no cartaz fotos de colegas, endereço ou telefone."
      ]
    },
    pf: {
      datas: "Prova no Wayground: terça 01/12 · segunda 07/12 · Projeto final: terça 08/12 · segunda 14/12 · Recuperação: terça 15/12 · segunda 14/12 (junto com o projeto)",
      tempo: [
        { min: 5, icone: "🎬", t: "Abertura" },
        { min: 30, icone: "🏁", t: "Missões que faltaram e projeto final" },
        { min: 10, icone: "💬", t: "Conversa sobre as missões" },
        { min: 5, icone: "🎮", t: "Jogos" }
      ],
      abertura: [
        { acao: "No dia da prova (abra o Wayground já na prova importada antes de chamar o aluno):" },
        { fala: "Hoje é o dia de mostrar tudo o que você aprendeu. São 15 perguntas, leia com calma. Se não souber, pense nas missões e escolha a melhor resposta." },
        { acao: "No dia do projeto final:" },
        { fala: "Hoje é o dia de fechar o bimestre. Vamos ver no portal o que ficou faltando e o que você mais gostou." }
      ],
      atencao: [
        "Na prova, pode ler as perguntas em voz alta se ele preferir, sem dar pistas. Anote a % de acertos no diário.",
        "Primeiro: alguma missão sem ✔ do Básico? Faça o Básico dela agora.",
        "Converse sobre as missões: “Qual dessas você mais gostou? Qual foi a mais difícil?”",
        "Recuperação (abaixo de 5,0): atividade impressa de 10 questões. A nota substitui a do bimestre quando for maior."
      ]
    }
  });
})();
