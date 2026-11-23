/* Roteiro da aula (só para o professor) — 9º ano, 4º bimestre de 2027 (Autoria e verdade)
   Professor Welington Laignier · Portal da Informática
   Bimestre curto (formatura): se faltar aula, as extras ficam de fora e a prova cobre só as fixas vistas.
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
  const TP = [
    { min: 10, icone: "🎬", t: "Abertura: o projeto" },
    { min: 50, icone: "👥", t: "Trabalho em equipe (no portal e no computador)" },
    { min: 15, icone: "📋", t: "Conferência do plano ou apresentações" },
    { min: 5, icone: "🧹", t: "Salvar e organizar" }
  ];
  PORTAL.registrarRoteiro("informatica-9ano-2027-4bim", {
    antes: ["🔊 Caixinha de som", "🖥️ Computadores ligados pelo Veyon", "🎬 Vídeo da missão aberto no computador do professor", "📇 Cartões com os códigos dos alunos", "🎮 Jogos da recreação definidos"],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF09CO09 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se vocês fizessem uma música e alguém publicasse como se fosse dele, o que sentiriam?" },
        { fala: "É para isso que existe o direito autoral: quem cria decide como a obra é usada." },
        { acao: "Escreva no quadro: © = só com autorização · domínio público = livre · CC BY = livre com crédito." }
      ],
      onde: { pergunta: "Onde vocês pegam imagens para os trabalhos?", fechamento: "Use imagens próprias ou com licença livre, sempre com crédito: autor · site · licença.", dica: "Mostre no projetor um banco de imagens com filtro de licença livre." },
      demonstracao: "No projetor, faça a prática: decida com a turma se cada obra é livre, com crédito ou só com autorização.",
      atencao: ["Domínio público no Brasil: 70 anos depois da morte do autor (Lei 9.610/1998).", "Estar na internet não quer dizer que é livre."],
      perguntas: [{ p: "Posso usar uma música no meu vídeo?", r: "Só com autorização ou se a licença permitir; senão, a plataforma pode bloquear." }, { p: "Copiar e mudar umas palavras é plágio?", r: "É: o certo é explicar com as próprias palavras e citar a fonte." }],
      curiosidade: "As licenças Creative Commons foram criadas para que os autores pudessem liberar as obras com regras simples."
    },
    m2: {
      datas: "BNCC EF09CO09 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Chegando a formatura, vai ter muita foto. Posso postar qualquer uma?" },
        { fala: "Não: o direito de imagem exige autorização. Para menores de idade, dos responsáveis." },
        { acao: "Escreva no quadro: pergunte antes · respeite o não · se for exposto, guarde as provas." }
      ],
      onde: { pergunta: "Já postaram uma foto de vocês que vocês não queriam?", fechamento: "Pedir para retirar, denunciar e contar a um adulto. Guardar as provas primeiro.", dica: "Lembre que a escola pede autorização de imagem às famílias." },
      demonstracao: "No projetor, faça a prática: decida com a turma o que pode publicar.",
      atencao: ["Não use fotos reais de alunos nos exemplos.", "Acolha com cuidado se alguém relatar exposição real; encaminhe à coordenação."],
      perguntas: [{ p: "Foto em lugar público pode?", r: "Depende: a pessoa em destaque precisa autorizar." }, { p: "E print de conversa?", r: "Conversa particular não se publica sem autorização." }],
      curiosidade: "As principais plataformas têm formulários para pedir a remoção de fotos e vídeos publicados sem autorização."
    },
    m3: {
      datas: "BNCC EF09CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como os checadores profissionais descobrem rápido se algo é falso? Eles saem do site suspeito." },
        { acao: "Mostre no projetor a leitura lateral: abra outra aba e pesquise o nome do site e a notícia." },
        { fala: "Pare, pesquise, decida." }
      ],
      onde: { pergunta: "Qual foi o último vídeo cortado que vocês viram?", fechamento: "Vídeo editado muda o sentido da fala. Procure o vídeo completo: a fonte original.", dica: "Os quatro tipos no quadro: falso, fora de contexto, editado, sátira." },
      demonstracao: "No projetor, faça a prática: classifique os conteúdos enganosos com a turma.",
      atencao: ["Evite exemplos políticos reais.", "Sátira é legítima; o problema é compartilhar como verdade."],
      perguntas: [{ p: "E se eu não achar nada em outras fontes?", r: "Desconfie e não compartilhe." }, { p: "Fonte original de uma pesquisa?", r: "O site da universidade ou do órgão que fez a pesquisa." }],
      curiosidade: "Checadores profissionais costumam passar menos tempo no site suspeito e mais tempo em outras abas."
    },
    m4: {
      datas: "BNCC EF09CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje a IA cria vídeo com o rosto e a voz de qualquer pessoa. Como saber o que é real?" },
        { acao: "Liste os sinais no quadro: boca fora de sincronia, voz robótica, piscar estranho, mãos, letras borradas, promessa fácil." },
        { fala: "Mas atenção: pode não ter sinal nenhum. O mais importante é checar a fonte." }
      ],
      onde: { pergunta: "Já viram golpe com voz de famoso?", fechamento: "Não clicar, não compartilhar e avisar quem mandou.", dica: "Reforce: deepfake de colega é cyberbullying." },
      demonstracao: "No projetor, faça a prática: marque os sinais com a turma.",
      atencao: ["Não mostre deepfakes reais de pessoas reais em sala.", "TSE proíbe deepfake na propaganda eleitoral."],
      perguntas: [{ p: "Usar IA é errado?", r: "Não: o problema é enganar ou humilhar. Avise quando usar." }, { p: "Como provar que um vídeo é falso?", r: "Procure a fonte original e o que os sites de notícias e checadores dizem." }],
      curiosidade: "O nome deepfake junta deep learning (um jeito de a IA aprender) com fake (falso)."
    },
    m5: {
      datas: "BNCC EF09CO02 / EF09CO06 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "O projeto de conclusão: um guia digital para os alunos do 6º ano, sobre um tema que vocês estudaram." },
        { acao: "Forme as equipes (3 a 4). Escreva as 6 partes do plano no quadro." },
        { fala: "Primeiro o plano; depois a produção; por último a apresentação." }
      ],
      onde: { pergunta: "O que vocês gostariam de ter sabido no 6º ano?", fechamento: "É esse o guia: o que ajuda os mais novos a usar a internet com segurança.", dica: "Combine a regra: nenhum dado pessoal e nenhuma foto de colega sem autorização." },
      demonstracao: "No projetor, mostre a tabela do plano e um exemplo preenchido.",
      atencao: ["Cada membro com uma tarefa.", "Combine onde salvar os arquivos da equipe (pasta com nome da equipe)."],
      perguntas: [{ p: "Pode ser vídeo?", r: "Pode, se for curto e sem imagem de colegas sem autorização." }, { p: "Quantos slides?", r: "Poucos: 5 a 8, uma ideia por slide." }],
      curiosidade: "Dividir um projeto em tarefas pequenas é a mesma ideia de decompor um problema em programação."
    },
    m6: {
      datas: "BNCC EF09CO02 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "Hoje é dia de apresentar. Lembrem: falar para o público, pouco texto, créditos no fim." },
        { acao: "Escreva a rubrica no quadro: conteúdo, clareza, criatividade, créditos, equipe." },
        { fala: "Depois de cada apresentação, um feedback: algo bom e uma sugestão." }
      ],
      onde: { pergunta: "Onde vocês vão precisar apresentar trabalhos?", fechamento: "No Ensino Médio, no curso técnico e no trabalho: apresentar bem abre portas.", dica: "Se possível, convide uma turma do 6º ano para assistir." },
      demonstracao: "No projetor, faça a prática: separe o que ajuda e o que atrapalha.",
      atencao: ["Controle o tempo de cada equipe.", "Feedback sempre com respeito."],
      perguntas: [{ p: "E se eu tiver vergonha?", r: "Divida a fala com a equipe e treine antes; ninguém precisa ler tudo." }, { p: "Pode ler do slide?", r: "Pode olhar, mas fale com as suas palavras, olhando para a turma." }],
      curiosidade: "Muitos apresentadores usam a regra de uma ideia por slide para não cansar o público."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO10",
      tempo: T,
      abertura: [
        { fala: "Toda mentira que se espalha tem alguém ganhando alguma coisa. Quem?" },
        { acao: "Escreva os motivos no quadro: dinheiro, política, ódio, humor, engano." },
        { fala: "Nas redes, atenção vira dinheiro: é a economia da atenção." }
      ],
      onde: { pergunta: "Que títulos chocantes vocês viram esta semana?", fechamento: "Caça-cliques prendem a atenção e rendem propaganda.", dica: "Pergunta de ouro no quadro: quem ganha se eu acreditar?" },
      demonstracao: "No projetor, faça a prática: descubra o motivo de cada mensagem.",
      atencao: ["Neutralidade política nos exemplos.", "Engano: quem repassa não ganha nada, só acreditou."],
      perguntas: [{ p: "Todo site com anúncio é mentiroso?", r: "Não: muitos sites sérios têm anúncios. O sinal é o título chocante sem fonte." }, { p: "Por que as pessoas repassam?", r: "Porque a notícia mexe com a emoção: raiva, medo ou alegria." }],
      curiosidade: "Notícias que despertam emoções fortes costumam ser mais compartilhadas do que notícias neutras."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO09",
      tempo: T,
      abertura: [
        { fala: "Vocês estão terminando o Ensino Fundamental. Quais foram os melhores trabalhos destes anos?" },
        { acao: "Mostre a tabela dos 5 passos do portfólio." },
        { fala: "O portfólio mostra o que vocês sabem fazer. E vocês são os autores!" }
      ],
      onde: { pergunta: "Para que um portfólio pode servir?", fechamento: "Para entrar num curso, num estágio e para guardar as lembranças.", dica: "Ajude a montar uma pasta com nomes claros no computador ou na nuvem da família." },
      demonstracao: "No projetor, faça a prática: coloque os passos em ordem.",
      atencao: ["Nenhum dado pessoal no portfólio.", "Imagens de terceiros só com crédito."],
      perguntas: [{ p: "Posso pôr trabalho em equipe?", r: "Pode, citando a equipe." }, { p: "Onde guardar?", r: "Numa pasta organizada e, se possível, com uma cópia (backup)." }],
      curiosidade: "Artistas, designers e programadores costumam mostrar portfólios em vez de só currículos."
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
