/* Roteiro da aula (só para o professor) — 8º ano, 4º bimestre de 2027 (Privacidade)
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
  const TP = [
    { min: 10, icone: "🎬", t: "Abertura: o projeto" },
    { min: 50, icone: "👥", t: "Trabalho em equipe (no portal e no computador)" },
    { min: 15, icone: "📋", t: "Conferência do plano ou apresentações" },
    { min: 5, icone: "🧹", t: "Salvar e organizar" }
  ];
  PORTAL.registrarRoteiro("informatica-8ano-2027-4bim", {
    antes: ["🔊 Caixinha de som", "🖥️ Computadores ligados pelo Veyon", "🎬 Vídeo da missão aberto no computador do professor", "🪪 Cartões com os códigos dos alunos", "🎮 Jogos da recreação definidos"],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF08CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se eu souber só que alguém gosta de futebol, eu sei quem é? E se eu souber a escola, a turma, o time e a rua?" },
        { fala: "Informações soltas, juntas, podem identificar uma pessoa. Isso é dado pessoal." },
        { acao: "Escreva no quadro as três perguntas: quem está pedindo? Para quê? Precisa mesmo?" }
      ],
      onde: { pergunta: "Onde vocês já preencheram um cadastro com o nome, o telefone ou a data de nascimento?", fechamento: "Antes de informar, faça as três perguntas. Muitos cadastros pedem mais do que precisam.", dica: "Use só exemplos inventados no quadro (como Ana Souza Lima): nenhum dado real de aluno." },
      demonstracao: "No projetor, faça a prática: decida com a turma o que é dado pessoal.",
      atencao: ["Não peça nem mostre dados reais dos alunos durante a aula.", "Se um aluno contar que passou dados para um desconhecido, converse em particular e acione a coordenação se houver risco."],
      perguntas: [{ p: "O meu apelido é dado pessoal?", r: "Pode ser: junto com outras informações, ajuda a identificar você." }, { p: "Por que um jogo pede a data de nascimento?", r: "Para saber a idade e liberar o que é próprio para ela; o resto, desconfie." }],
      curiosidade: "Na LGPD, dado pessoal é a informação relacionada a uma pessoa identificada ou que pode ser identificada."
    },
    m2: {
      datas: "BNCC EF08CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Alguns dados, se vazarem, podem fazer a pessoa ser tratada de forma injusta. Quais seriam?" },
        { acao: "Escreva no quadro: saúde, religião, opinião política, origem racial ou étnica, biometria, dado genético." },
        { fala: "Esses são os dados sensíveis, e a LGPD cuida deles com mais rigor." }
      ],
      onde: { pergunta: "Quem aqui desbloqueia o celular com a digital ou com o rosto?", fechamento: "Isso é biometria: um dado sensível. Os direitos da LGPD valem para ele também.", dica: "Mostre a tabela dos direitos: saber, corrigir, apagar e retirar o consentimento." },
      demonstracao: "No projetor, faça a prática: separe dados comuns e sensíveis.",
      atencao: ["Não use exemplos de saúde ou religião de alunos reais.", "LGPD: Lei nº 13.709/2018; quem fiscaliza é a ANPD."],
      perguntas: [{ p: "Posso pedir para uma empresa apagar os meus dados?", r: "Pode pedir; a empresa precisa responder, com algumas exceções previstas na lei." }, { p: "Criança pode aceitar sozinha?", r: "Para dados de crianças, a lei pede a autorização de um dos pais ou responsáveis." }],
      curiosidade: "A LGPD é a Lei nº 13.709, de 2018. A ANPD é o órgão que fiscaliza a lei."
    },
    m3: {
      datas: "BNCC EF08CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imagine: chegou um e-mail dizendo “novo acesso à sua conta”, e não foi você. O que fazer?" },
        { acao: "Escreva no quadro, em ordem: trocar a senha → sair de todos os aparelhos → ativar as duas etapas → avisar um adulto." },
        { fala: "Hoje vamos aprender os hábitos que evitam chegar a esse ponto." }
      ],
      onde: { pergunta: "Quem já esqueceu a conta aberta num computador ou celular de outra pessoa?", fechamento: "No computador da escola, sair da conta no fim da aula é obrigatório.", dica: "No fim desta aula, confira com a turma: todo mundo saiu da conta?" },
      demonstracao: "No projetor, faça a prática: protege ou arrisca?",
      atencao: ["Nunca peça a senha de um aluno, nem para ajudar.", "Se um aluno disser que a conta foi invadida, ajude a trocar a senha com ele no computador dele."],
      perguntas: [{ p: "E se eu perder o celular que recebe o código?", r: "Por isso o e-mail e o telefone de recuperação precisam estar atualizados." }, { p: "Preciso de senha diferente em tudo?", r: "Pelo menos nas contas importantes (e-mail, redes, jogos com compras)." }],
      curiosidade: "Muitos serviços mostram, nas configurações da conta, a lista de aparelhos conectados e a opção de sair de todos."
    },
    m4: {
      datas: "BNCC EF08CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quem pode ver os posts de vocês agora? Vocês sabem?" },
        { acao: "Mostre a tabela das configurações e a opção mais protegida de cada uma." },
        { fala: "Hoje cada um aprende a escolher quem vê o quê." }
      ],
      onde: { pergunta: "Alguém já recebeu mensagem de um desconhecido numa rede ou num jogo?", fechamento: "Mensagens só de amigos e, se precisar, bloquear.", dica: "Não peça para os alunos abrirem as contas pessoais na escola: use a tabela e a prática do portal." },
      demonstracao: "No projetor, faça a prática: escolha a opção mais protegida.",
      atencao: ["Diferença: bloquear impede contato; silenciar só esconde os posts.", "Lembre que as atualizações podem mudar as configurações."],
      perguntas: [{ p: "Se eu bloquear, a pessoa sabe?", r: "Pode perceber, porque deixa de ver você; o aplicativo nem sempre avisa." }, { p: "Conta privada é 100% segura?", r: "Não: quem você aceita pode copiar e repassar. Poste pensando nisso." }],
      curiosidade: "As redes sociais mudam os menus com as atualizações; por isso vale revisar a privacidade de vez em quando."
    },
    m5: {
      datas: "BNCC EF08CO04 e EF08CO10 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "O projeto do bimestre: um guia de privacidade para alguém da família ou da escola." },
        { acao: "Forme as equipes (3 a 4). Escreva as 5 partes do plano no quadro: tema, público, formato, tarefas e fontes." },
        { fala: "Primeiro o plano; na próxima aula, a apresentação." }
      ],
      onde: { pergunta: "Quem na família de vocês mais precisa de ajuda com o celular?", fechamento: "É para essa pessoa que o guia é feito: a linguagem muda com o público.", dica: "Combine a regra: nenhum dado pessoal real no guia; só exemplos inventados." },
      demonstracao: "No projetor, mostre a tabela do plano e um exemplo preenchido.",
      atencao: ["Cada membro com uma tarefa.", "Combine onde salvar os arquivos da equipe (pasta com o nome da equipe)."],
      perguntas: [{ p: "Pode ser vídeo?", r: "Pode, se for curto e sem imagem de colegas sem autorização." }, { p: "Quantos slides?", r: "Poucos: 5 a 8, uma dica por slide." }],
      curiosidade: "Dividir um projeto em tarefas pequenas é a mesma ideia de decompor um problema em programação."
    },
    m6: {
      datas: "BNCC EF08CO04 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "Hoje é dia de apresentar o guia. Lembrem: uma dica por parte, imagens e exemplos inventados." },
        { acao: "Escreva a rubrica no quadro: correto, para o público, seguro, atraente, equipe." },
        { fala: "Depois de cada apresentação, um feedback: algo bom e uma sugestão." }
      ],
      onde: { pergunta: "Para quem vocês vão mostrar o guia em casa?", fechamento: "O guia só ajuda se chegar ao público: combinem de mostrar em casa.", dica: "Confira o critério “Seguro” antes de cada equipe apresentar: nenhum dado real na tela." },
      demonstracao: "No projetor, faça a prática: separe o que ajuda e o que atrapalha.",
      atencao: ["Controle o tempo de cada equipe.", "Feedback sempre com respeito."],
      perguntas: [{ p: "E se eu tiver vergonha?", r: "Divida a fala com a equipe e treine antes; ninguém precisa ler tudo." }, { p: "Pode ler do slide?", r: "Pode olhar, mas fale com as suas palavras, olhando para a turma." }],
      curiosidade: "Muitos apresentadores usam a regra de uma ideia por slide para não cansar o público."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO10",
      tempo: T,
      abertura: [
        { fala: "Uma foto pode contar onde ela foi tirada, mesmo sem aparecer nada no fundo. Como?" },
        { acao: "Escreva no quadro: metadados, tempo real, histórico, check-in." },
        { fala: "Hoje vamos ver onde a localização aparece e como controlar." }
      ],
      onde: { pergunta: "Quem compartilha a localização com a família?", fechamento: "Compartilhar com a família ajuda; com desconhecidos, expõe.", dica: "Lembre: postar o passeio depois de sair do lugar." },
      demonstracao: "No projetor, faça a prática: onde a localização aparece?",
      atencao: ["Alguns aplicativos de mensagem retiram os metadados das fotos ao enviar; outros não. Na dúvida, desligue a localização da câmera.", "Cookies não são vírus."],
      perguntas: [{ p: "Desligar o GPS some com a localização?", r: "Ajuda, mas o celular também pode estimar pelo Wi-Fi e pelas antenas." }, { p: "Cookie é ruim?", r: "Não sempre: lembra o login e o carrinho; mas também é usado para propaganda." }],
      curiosidade: "Muitas câmeras de celular gravam nos metadados da foto a data, o modelo do aparelho e, se a localização estiver ligada, o local."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO10",
      tempo: T,
      abertura: [
        { fala: "Ligaram para alguém e disseram o nome completo e o CPF. Isso prova que é do banco?" },
        { acao: "Escreva a regra de ouro no quadro: saber os seus dados não prova que a pessoa é de confiança." },
        { fala: "Os dados vazados deixam o golpe mais convincente." }
      ],
      onde: { pergunta: "Alguém na família já recebeu SMS de entrega que não esperava?", fechamento: "Na dúvida: desligar e ligar para o número oficial; nunca pagar taxa por link.", dica: "Peça para os alunos levarem a regra de ouro para casa." },
      demonstracao: "No projetor, faça a prática: qual é o golpe?",
      atencao: ["Não use nomes de bancos ou lojas reais nos exemplos.", "Se um aluno contar que a família caiu num golpe, acolha e oriente procurar o banco pelo número oficial."],
      perguntas: [{ p: "Como eu sei se os meus dados vazaram?", r: "Às vezes a empresa avisa; o importante é trocar a senha, ativar as duas etapas e desconfiar." }, { p: "Por que o golpista pede o código?", r: "Porque com o código ele entra na conta, mesmo sem a senha." }],
      curiosidade: "Pela LGPD, a empresa que sofre um incidente de segurança que possa causar risco às pessoas precisa comunicar a ANPD e as pessoas afetadas."
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
