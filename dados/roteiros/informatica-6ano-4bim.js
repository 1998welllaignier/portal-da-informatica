/* Roteiro da aula (só para o professor) — 6º ano, 4º bimestre
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal. */
PORTAL.registrarRoteiro("informatica-6ano-4bim", {
  antes: [
    "🔊 Caixinha de som",
    "🖥️ Computadores ligados pelo Veyon",
    "🎬 Vídeo da missão aberto no computador do professor",
    "🪪 Cartões com os códigos dos alunos",
    "🎮 Jogos da recreação definidos"
  ],
  m1: {
    datas: "6º A e 6º B: 05/11 · 6º C: 09/11",
    tempo: [
      { min: 10, icone: "🎬", t: "Abertura e vídeo" },
      { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
      { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
      { min: 30, icone: "🧩", t: "Missão no portal" },
      { min: 10, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Boa tarde, turma! Neste bimestre a gente vai trabalhar com missões no Portal da Informática. Cada aula é uma missão, e quem concluir o Básico ganha um ✔ que eu vejo no meu painel." },
      { fala: "Primeiro, uma pergunta: quando vocês fazem uma conta na calculadora do celular, o que acontece lá dentro?" },
      { acao: "Ouça 2 ou 3 respostas, sem corrigir." },
      { fala: "O computador trabalha em três etapas: ele recebe a informação, que é a ENTRADA; faz a conta, que é o PROCESSAMENTO; e mostra o resultado, que é a SAÍDA." },
      { acao: "No projetor, abra a Calculadora, digite 2 + 3 e mostre o 5." },
      { fala: "O que foi a entrada? E a saída?" },
      { fala: "Hoje vocês vão criar uma pasta que vai guardar os seus trabalhos. Cuidado com ela: não pode apagar!" }
    ],
    siglas: "Depois do vídeo, leia com a turma o quadro “O que significa?”. Para cada termo: o que é e onde aparece. Pergunte: “Alguém já tinha visto isso? Onde?”",
    onde: {
      pergunta: "Quem aqui já perdeu uma foto, um jogo salvo ou um trabalho? O que aconteceu?",
      fechamento: "Tudo o que vimos hoje serve para isso não acontecer de novo.",
      dica: "Ouça 3 ou 4 alunos. Se ninguém falar, conte um exemplo seu. Puxe exemplos da cidade: o caixa do mercado e a maquininha de cartão também têm entrada, processamento e saída."
    },
    demonstracao: "Pelo Veyon, mostre devagar: botão direito → Novo → Pasta → digitar o nome → Enter. É o passo em que mais travam.",
    atencao: [
      "Muitos chamam o monitor de “computador”. Mostre que o computador de verdade é o gabinete.",
      "O pen drive é armazenamento: não é entrada nem saída. Ele guarda arquivos.",
      "A ordem para salvar o arquivo é onde mais erram. Faça junto com a turma pelo Veyon."
    ],
    perguntas: [
      { p: "O pen drive é entrada ou saída?", r: "Nenhum dos dois: é armazenamento, ele guarda arquivos." },
      { p: "Por que o arquivo sumiu?", r: "Provavelmente foi salvo em outra pasta. Procure em Documentos ou pela busca do Explorador e arraste para a pasta certa." },
      { p: "O mouse é entrada ou saída?", r: "Entrada: leva o movimento e o clique para dentro do computador." }
    ],
    curiosidade: "O primeiro computador eletrônico, o ENIAC (1946), ocupava uma sala inteira e pesava cerca de 27 toneladas."
  }
});
