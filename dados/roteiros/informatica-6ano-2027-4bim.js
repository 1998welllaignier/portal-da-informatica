/* Roteiro da aula (só para o professor) — 6º ano, 4º bimestre de 2027 (Rede, arquivos e planeta)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal. */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração (⬜ quadro para a turma ou Veyon)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-6ano-2027-4bim", {
    antes: ["🔊 Caixinha de som", "🖥️ Computadores ligados pelo Veyon", "🎬 Vídeo da missão aberto no computador do professor", "📇 Cartões com os códigos dos alunos", "🎮 Jogos da recreação definidos"],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF06CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando vocês mandam uma foto pelo celular, ela vai inteira, de uma vez?" },
        { fala: "Não: ela é dividida em pedacinhos, os pacotes, e cada um leva uma etiqueta com o destino e o número de ordem." },
        { acao: "Escreva uma frase no quadro, recorte em 4 papeizinhos numerados, embaralhe e peça para um aluno remontar pelo número." }
      ],
      onde: { pergunta: "Já viram uma mensagem ficar com o reloginho antes de ser enviada?", fechamento: "Os pacotes estavam esperando um caminho livre para viajar.", dica: "A brincadeira dos papeizinhos mostra a ideia melhor que qualquer explicação." },
      demonstracao: "No projetor, faça a prática: remonte a mensagem pelo número de ordem.",
      atencao: ["Não é preciso falar de protocolos (TCP/IP) com o 6º: a ideia é dividir, numerar, viajar e remontar.", "Pacote perdido: só ele é reenviado."],
      perguntas: [{ p: "Que tamanho tem um pacote?", r: "Bem pequeno: uma foto do celular vira milhares de pacotes." }, { p: "Os pacotes podem se perder?", r: "Podem; quando isso acontece, só aquele pedaço é pedido de novo." }],
      curiosidade: "A ideia de dividir as mensagens em pacotes surgiu nos anos 1960 e é a base da internet até hoje."
    },
    m2: {
      datas: "BNCC EF06CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Do celular de vocês até um vídeo de outro país: por onde passa o pacote?" },
        { acao: "Desenhe no quadro: aparelho → roteador → provedor → roteadores da internet → cabo submarino → servidor." },
        { fala: "Cada pacote pode ir por um caminho diferente; o roteador escolhe o melhor." }
      ],
      onde: { pergunta: "Onde fica o roteador da escola? E o da casa de vocês?", fechamento: "É ele que recebe os pacotes do Wi-Fi e manda para a internet.", dica: "Se possível, mostre o roteador da sala (sem mexer nos cabos)." },
      demonstracao: "No projetor, faça a prática: qual parada faz cada coisa?",
      atencao: ["O IP 192.168.0.10 é só um exemplo de endereço da rede de casa.", "Cabos submarinos: a maior parte do tráfego entre continentes passa por eles, não por satélites."],
      perguntas: [{ p: "Satélite não leva internet?", r: "Leva, em lugares sem cabo; mas a maior parte da internet entre continentes passa pelos cabos no fundo do mar." }, { p: "Por que a internet fica lenta?", r: "Quando muita gente usa ao mesmo tempo, os pacotes enfrentam congestionamento, como numa estrada cheia." }],
      curiosidade: "O cabo submarino EllaLink liga Fortaleza, no Ceará, a Sines, em Portugal, desde 2021."
    },
    m3: {
      datas: "BNCC EF06CO08 · datas pelo calendário da SEMED 2027 · ♻️ reaproveita a Missão 4 do 6º ano de 2026 (outra turma)",
      tempo: T,
      abertura: [
        { fala: "O computador só entende 0 e 1. Como ele guarda uma foto, uma música, um filme?" },
        { acao: "Desenhe 4 lâmpadas no quadro (8, 4, 2, 1) e mostre como escrever o número 6 acendendo as certas." },
        { fala: "Cada lâmpada é um bit; 8 bits formam 1 byte." }
      ],
      onde: { pergunta: "O celular de alguém aqui já avisou “armazenamento cheio”?", fechamento: "Vídeos ocupam muito mais que fotos, e fotos muito mais que mensagens.", dica: "Mostre a coluna Tamanho no Explorador de Arquivos." },
      demonstracao: "No projetor, abra o simulador do computador e compacte uma pasta junto com a turma.",
      atencao: ["O simulador ensina o caminho do Windows 11 e do Windows 10 (Enviar para › Pasta compactada).", "Medidas aproximadas: 1 GB ≈ 1000 MB."],
      perguntas: [{ p: "Por que a foto quase não diminui no .zip?", r: "Porque .jpg já vem compactado quando a foto é tirada." }, { p: "Pen drive de 32 GB cabe quantas fotos de 4 MB?", r: "Cerca de 32 000 ÷ 4 = 8000 fotos." }],
      curiosidade: "A palavra bit vem do inglês binary digit, dígito binário."
    },
    m4: {
      datas: "BNCC EF06CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Uma foto guarda só a imagem? Ou guarda mais coisas escondidas?" },
        { acao: "No projetor, clique com o botão direito numa foto › Propriedades › Detalhes, e mostre data, tamanho e aparelho." },
        { fala: "Isso são os metadados: dados sobre os dados." }
      ],
      onde: { pergunta: "Como a galeria do celular sabe a data de cada foto?", fechamento: "Pelos metadados guardados dentro do arquivo.", dica: "Mostre uma Área de Trabalho bagunçada e outra organizada em pastas." },
      demonstracao: "No projetor, faça a prática: ligue cada metadado ao seu exemplo.",
      atencao: ["Use fotos sem pessoas e sem localização para mostrar os metadados.", "Começar o nome com o ano (2027-…) deixa os arquivos em ordem sozinhos."],
      perguntas: [{ p: "Dá para apagar os metadados?", r: "Alguns sim, na janela de Propriedades; e dá para desligar a localização da câmera." }, { p: "Qual a diferença entre data de criação e de modificação?", r: "Criação é quando o arquivo nasceu; modificação é a última vez que ele foi mudado." }],
      curiosidade: "Muitas câmeras gravam os metadados das fotos num padrão chamado EXIF."
    },
    m5: {
      datas: "BNCC EF06CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Por que as pessoas trocam de celular? Ele sempre estragou?" },
        { acao: "Escreva no quadro as 3 perguntas antes de trocar: funciona? dá para consertar? preciso ou só quero?" },
        { fala: "Trocar antes da hora tem nome: obsolescência." }
      ],
      onde: { pergunta: "Vocês já quiseram um celular novo só porque viram uma propaganda?", fechamento: "Desejo é normal; o importante é pensar antes de comprar.", dica: "Evite comparar marcas ou o celular dos alunos: fale de situações inventadas." },
      demonstracao: "No projetor, faça a prática: que tipo de obsolescência?",
      atencao: ["Sensibilidade: há alunos sem celular; nada de comparar aparelhos da turma.", "Calor estraga bateria: sol, carro fechado, debaixo do travesseiro carregando."],
      perguntas: [{ p: "Atualizar o celular é ruim?", r: "Não: as atualizações corrigem falhas de segurança. O problema é quando o aparelho para de recebê-las." }, { p: "Película serve mesmo?", r: "Protege a tela de arranhões e de algumas quedas; é bem mais barata que trocar a tela." }],
      curiosidade: "Consertar um aparelho em vez de trocar evita que ele vire lixo eletrônico antes da hora."
    },
    m6: {
      datas: "BNCC EF06CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Para onde vão as pilhas do controle quando acabam?" },
        { acao: "Escreva os 5 Rs no quadro: repensar, recusar, reduzir, reutilizar, reciclar." },
        { fala: "Aparelho e pilha não vão para o lixo comum: vão para o ponto de coleta." }
      ],
      onde: { pergunta: "Vocês conhecem algum lugar na cidade que recebe pilhas ou celulares velhos?", fechamento: "Lojas que vendem pilhas e celulares costumam ter caixas de coleta.", dica: "Se a escola quiser, organize uma campanha de coleta com a turma." },
      demonstracao: "No projetor, faça a prática: o que acontece em cada destino?",
      atencao: ["Política Nacional de Resíduos Sólidos: Lei nº 12.305/2010.", "Nunca abrir pilhas e baterias em sala."],
      perguntas: [{ p: "O que acontece no ponto de coleta?", r: "Os aparelhos vão para empresas de reciclagem, que separam metais e plásticos." }, { p: "Pilha pequena faz mal?", r: "Faz: os metais podem contaminar o solo e a água." }],
      curiosidade: "Segundo a ONU, o mundo produziu 62 milhões de toneladas de lixo eletrônico em 2022."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO09",
      tempo: T,
      abertura: [
        { fala: "O grupo da turma é como a sala de aula: precisa de combinados. Quais?" },
        { acao: "Construa com a turma, no quadro, a lista de combinados do grupo." },
        { fala: "Ética é agir com respeito e de forma justa com os outros." }
      ],
      onde: { pergunta: "O que mais atrapalha num grupo de mensagens?", fechamento: "Combinados feitos juntos são mais respeitados.", dica: "Não use prints reais de grupos da escola: use os exemplos do portal." },
      demonstracao: "No projetor, faça a prática: respeita ou desrespeita o combinado?",
      atencao: ["Se surgir relato de cyberbullying real, acolha em particular e acione a coordenação.", "Lei nº 14.811/2024: o cyberbullying é crime no Brasil."],
      perguntas: [{ p: "Posso sair do grupo?", r: "Pode, se estiver fazendo mal; e conte a um adulto se for por causa de ofensas." }, { p: "E se o print for para ajudar?", r: "Para pedir ajuda a um adulto pode; para espalhar, não." }],
      curiosidade: "Muitos grupos de mensagens têm um espaço para a descrição: é lá que se colocam os combinados."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO08",
      tempo: T,
      abertura: [
        { fala: "Se o celular de vocês sumisse hoje, o que perderiam para sempre?" },
        { acao: "Escreva a regra 3-2-1 no quadro: 3 cópias, 2 tipos de lugar, 1 longe de casa." },
        { fala: "Backup é a cópia de segurança, sempre em outro lugar." }
      ],
      onde: { pergunta: "Onde vocês guardam as fotos mais importantes?", fechamento: "Num lugar só, um acidente apaga tudo; com backup, não.", dica: "Mostre como copiar uma pasta para um pen drive no computador da escola." },
      demonstracao: "No projetor, faça a prática: ligue cada lugar à sua vantagem.",
      atencao: ["Nuvem precisa de senha forte e das duas etapas.", "Conferir se a cópia abre faz parte do backup."],
      perguntas: [{ p: "Nuvem é segura?", r: "É, com senha forte e duas etapas; mas é bom ter também uma cópia fora dela." }, { p: "De quanto em quanto tempo?", r: "Sempre que tiver arquivos novos importantes: depois de um trabalho grande ou de uma viagem." }],
      curiosidade: "A regra 3-2-1 é usada por fotógrafos e empresas para não perder arquivos."
    },
    rv: {
      datas: "Última aula antes da prova (o 🗺️ Panorama marca sozinho)",
      tempo: [{ min: 5, icone: "🎬", t: "Abertura: como funciona a revisão" }, { min: 45, icone: "💻", t: "Revisão no portal: 📚 Relembre + atividades de cada missão" }, { min: 15, icone: "🏆", t: "Desafio e Turbo (simulado) + placar" }, { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }],
      abertura: [
        { fala: "Hoje é dia de revisão, mas não é aula de só olhar: a aula inteira tem atividade, igual a uma missão, e vale ponto no placar." },
        { fala: "O portal mostra só as missões que vocês estudaram, e é exatamente isso que cai na prova. Em cada missão: leiam o 📚 Relembre e façam as atividades." },
        { acao: "Inicie a aula com a Missão de hoje = 🔁 Revisão. O painel grava sozinho quais missões a turma estudou e o portal mostra só essas." }
      ],
      onde: { pergunta: "Qual missão vocês acham mais difícil? Comecem a revisão por ela.", dica: "Abra o 🔴 Ao vivo: quem estiver parado num bloco, mande reler o 📚 Relembre daquela missão." },
      atencao: ["No fim da aula, lembre a data da prova da turma (aparece no 🗺️ Panorama).", "Quem terminar o Básico vai para o Desafio e o Turbo: eles misturam as missões, como na prova.", "Aluno que faltou a uma missão: a revisão não substitui a missão. Libere a missão para ele fazer em casa (🏠) ou na reposição."],
      perguntas: [{ p: "Por que não aparece a M7 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }]
    }
  });
})();
