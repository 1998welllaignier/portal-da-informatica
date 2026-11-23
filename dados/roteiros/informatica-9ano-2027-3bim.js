/* Roteiro da aula (só para o professor) — 9º ano, 3º bimestre de 2027 (Tecnologia e sociedade)
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair (o 🗺️ Panorama organiza sozinho). */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração (⬜ quadro para a turma ou Veyon)" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-9ano-2027-3bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "📇 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF09CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Que problema vocês veem todo dia no caminho de casa para a escola?" },
        { acao: "Anote no quadro os problemas que a turma falar (sem nomes de pessoas). Depois, escolham um juntos." },
        { fala: "Hoje vamos pensar como quem resolve: observar, escolher, ver quem sofre, pensar nos dados, imaginar a solução e testar." }
      ],
      onde: {
        pergunta: "Para o problema que escolhemos, quem é mais afetado?",
        fechamento: "Saber quem sofre ajuda a criar uma solução que as pessoas vão usar de verdade.",
        dica: "Lembre que a tecnologia nem sempre é a resposta: às vezes é uma conversa com a associação do bairro."
      },
      demonstracao: "No projetor, faça a prática: clique nos 6 passos do método com a turma.",
      atencao: [
        "Não critique pessoas nem gestões: o foco é o problema e a solução.",
        "Exemplos da apostila são gerais; os da turma ficam só no quadro."
      ],
      perguntas: [
        { p: "Precisa saber programar para criar a solução?", r: "Não para planejar. O plano (problema, afetados, dados, solução) já é pensamento computacional." },
        { p: "E se a solução não der certo?", r: "É para isso que serve o teste: melhorar a ideia ouvindo as pessoas." }
      ],
      curiosidade: "Muitas cidades usam mapas colaborativos em que os moradores marcam buracos e lâmpadas queimadas pelo celular."
    },
    m2: {
      datas: "BNCC EF09CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vocês sabiam que qualquer pessoa pode ver quanto a prefeitura gastou com a merenda? São os dados abertos." },
        { acao: "Abra no projetor o IBGE Cidades (cidades.ibge.gov.br) e pesquise Curionópolis com a turma." },
        { fala: "Dado aberto é público. Dado pessoal, como o nome e a nota de um aluno, não é publicado." }
      ],
      onde: {
        pergunta: "Que informação da nossa cidade vocês gostariam de conhecer?",
        fechamento: "Muitas estão no IBGE Cidades e no Portal da Transparência. As que não estão, a LAI permite pedir.",
        dica: "Mostre também o Portal da Transparência da prefeitura, se estiver no ar."
      },
      demonstracao: "No projetor, faça a prática: leia com a turma a tabela dos bairros inventados (somar e achar o maior).",
      atencao: [
        "A tabela dos bairros é inventada, para treinar.",
        "Números da cidade só do IBGE ou de fontes oficiais, mostrados na hora."
      ],
      perguntas: [
        { p: "Qualquer pessoa pode pedir informação pela LAI?", r: "Sim. O órgão tem um prazo para responder." },
        { p: "Por que o nome dos alunos não é dado aberto?", r: "Porque é dado pessoal: identifica a pessoa e é protegido pela LGPD." }
      ],
      curiosidade: "O censo do IBGE visita os domicílios de todo o Brasil para contar a população."
    },
    m3: {
      datas: "BNCC EF09CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Ter celular é o mesmo que ter acesso à tecnologia? Pense num celular dividido por quatro irmãos, com o pacote de dados acabando no dia 10." },
        { acao: "Escreva no quadro as 3 partes: 📱 acesso, ⚡ qualidade, 🧠 habilidade." },
        { fala: "A desigualdade digital tem essas três partes. E hoje estudar, trabalhar e pedir documentos depende da internet." }
      ],
      onde: {
        pergunta: "Quem na família de vocês precisa de ajuda para usar o celular?",
        fechamento: "Ajudar alguém a usar a tecnologia já é inclusão digital.",
        dica: "Cuidado para não expor quem não tem internet em casa: fale sempre em situações gerais."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma acesso, qualidade e habilidade.",
      atencao: [
        "Não pergunte em público quem não tem internet ou celular.",
        "O laboratório da escola é exemplo concreto de inclusão."
      ],
      perguntas: [
        { p: "A escola pode ajudar?", r: "Pode: com o laboratório, com tarefas que não dependem só da internet e com cursos." },
        { p: "Ter internet rápida resolve tudo?", r: "Não: falta ainda a habilidade de usar com segurança." }
      ],
      curiosidade: "Muitos serviços públicos, como pedir documentos, já podem ser feitos pelo gov.br."
    },
    m4: {
      datas: "BNCC EF09CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "No supermercado, quem passa as compras: o caixa ou vocês, no autoatendimento?" },
        { fala: "Isso é automação: a máquina faz uma tarefa que era de uma pessoa. Algumas profissões mudam, outras diminuem e outras novas surgem." },
        { acao: "Faça duas colunas no quadro: 🤖 a máquina faz bem · 🧑 muito humano. Peça exemplos à turma." }
      ],
      onde: {
        pergunta: "Que profissão vocês querem ter? Ela vai mudar com a tecnologia?",
        fechamento: "Quase todas vão mudar. Quem junta tecnologia com habilidades humanas sai na frente.",
        dica: "Valorize todas as profissões citadas; o foco é como a tecnologia ajuda em cada uma."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma o que a máquina faz bem e o que é muito humano.",
      atencao: [
        "Sem catastrofismo: a tecnologia muda o trabalho, não acaba com ele.",
        "Liga com a Missão 5 (IA)."
      ],
      perguntas: [
        { p: "A IA vai tirar todos os empregos?", r: "Algumas tarefas serão automatizadas, mas surgem outras, e as habilidades humanas continuam valendo." },
        { p: "O que estudar?", r: "Usar a tecnologia, e também comunicação, criatividade e trabalho em equipe." }
      ],
      curiosidade: "Profissões como piloto de drone e analista de dados quase não existiam há vinte anos."
    },
    m5: {
      datas: "BNCC EF09CO07 · ♻️ reaproveita a M4 do 9º ano de 2026 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quem já usou inteligência artificial hoje? Quem desbloqueou o celular com o rosto ou viu um vídeo recomendado, usou!" },
        { fala: "A IA aprende com muitos exemplos. Hoje vocês vão ser a IA: aprender o padrão do spam e separar os e-mails." },
        { acao: "Escreva no quadro: coletar → treinar → testar → usar." }
      ],
      onde: {
        pergunta: "O chatbot sempre acerta?",
        fechamento: "Não: ele pode inventar com toda a certeza. Por isso a regra de ouro é conferir.",
        dica: "Combine com a turma as 4 regras da IA na escola e deixe no quadro."
      },
      demonstracao: "No projetor, faça a prática “Seja a IA”: mostre o padrão dos exemplos e separe os e-mails novos.",
      atencao: [
        "Viés: exemplos poucos ou de um tipo só.",
        "Ninguém coloca dados pessoais no chatbot."
      ],
      perguntas: [
        { p: "Posso usar IA no trabalho da escola?", r: "Para estudar e entender, sim, conferindo e dizendo que usou. Para copiar, não." },
        { p: "A IA pensa?", r: "Não como nós: ela acha padrões em muitos exemplos." }
      ],
      curiosidade: "O filtro de spam do e-mail foi uma das primeiras IAs usadas por muita gente no dia a dia."
    },
    m6: {
      datas: "BNCC EF09CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A tecnologia ajuda ou prejudica o meio ambiente? As duas coisas!" },
        { acao: "Faça duas colunas no quadro: ⚠️ prejudica · 🌱 ajuda. Comece com o celular velho na gaveta e o satélite que vigia a Amazônia." },
        { fala: "Aqui no Pará isso é muito próximo: o INPE usa satélites para acompanhar o desmatamento da Amazônia." }
      ],
      onde: {
        pergunta: "Quantos celulares velhos estão parados na casa de vocês?",
        fechamento: "Eles podem ser consertados, doados ou levados a um ponto de coleta, nunca ao lixo comum.",
        dica: "Se a escola ou a cidade tiver ponto de coleta de pilhas, mostre onde fica."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma o que prejudica e o que ajuda.",
      atencao: [
        "DETER = alertas quase em tempo real; PRODES = desmatamento de cada ano.",
        "Liga com a Missão 5: os computadores que treinam a IA também gastam muita energia."
      ],
      perguntas: [
        { p: "Por que bateria não pode ir para o lixo comum?", r: "Porque solta metais que contaminam a terra e a água." },
        { p: "A internet gasta energia?", r: "Sim: os data centers gastam muita energia e água para resfriar os servidores." }
      ],
      curiosidade: "As imagens de satélite usadas pelo INPE no acompanhamento do desmatamento são divulgadas para o público."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO08",
      tempo: T,
      abertura: [
        { fala: "Como uma pessoa cega usa o celular? Como uma pessoa surda assiste a um vídeo?" },
        { acao: "Se puder, ligue o leitor de tela (NVDA no computador ou TalkBack no celular) por um minuto e deixe a turma ouvir." },
        { fala: "Acessibilidade é fazer a tecnologia funcionar para todas as pessoas. E ela ajuda todo mundo." }
      ],
      onde: {
        pergunta: "Quem já ligou a legenda num vídeo, mesmo ouvindo bem?",
        fechamento: "A legenda é um recurso de acessibilidade que ajuda todo mundo, por exemplo num lugar barulhento.",
        dica: "Mostre o VLibras num site do governo, se estiver disponível."
      },
      demonstracao: "No projetor, faça a prática: ligue cada recurso a quem ele ajuda.",
      atencao: [
        "Fale de pessoas com deficiência com respeito; evite termos ultrapassados.",
        "Lei Brasileira de Inclusão: Lei nº 13.146/2015."
      ],
      perguntas: [
        { p: "Como escrevo a descrição de uma foto?", r: "Diga o que aparece de importante: quem, o quê, onde. Ex.: “Turma do 9º ano plantando uma árvore no pátio”." },
        { p: "O portal da escola é acessível?", r: "Ótima pergunta para a turma investigar com o que aprendeu hoje." }
      ],
      curiosidade: "Leitores de tela permitem que pessoas cegas usem o computador e o celular, inclusive para estudar e trabalhar."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO07",
      tempo: T,
      abertura: [
        { fala: "Daqui a pouco vocês vão poder votar: aos 16 e 17 anos o voto é facultativo." },
        { fala: "Hoje o assunto é a tecnologia das eleições e como se proteger da desinformação, que circula de todos os lados." },
        { acao: "Escreva no quadro: urna eletrônica (desde 1996) · boletim de urna · TSE · voto facultativo aos 16 e 17." }
      ],
      onde: {
        pergunta: "Já receberam um vídeo chocante sobre política no grupo?",
        fechamento: "Antes de repassar: desconfiar de raiva e medo, lembrar do deepfake e conferir nas fontes oficiais.",
        dica: "Mantenha neutralidade total: nenhum exemplo com partido ou candidato real."
      },
      demonstracao: "No projetor, faça a prática: ligue cada termo ao seu significado.",
      atencao: [
        "Neutralidade: não comentar candidatos, partidos nem votos.",
        "TSE: deepfake proibido na propaganda; uso de IA exige aviso."
      ],
      perguntas: [
        { p: "Como tiro o título de eleitor?", r: "Pela Justiça Eleitoral, no cartório eleitoral ou pelo site, com os documentos pedidos." },
        { p: "Quem garante que a urna funciona?", r: "A Justiça Eleitoral faz testes públicos e, no fim da votação, cada urna imprime o boletim de urna com o total de votos." }
      ],
      curiosidade: "O boletim de urna é impresso e afixado no local de votação ao fim da eleição, para quem quiser conferir."
    },
    rv: {
      datas: "Última aula antes da prova (o 🗺️ Panorama marca sozinho)",
      tempo: [
        { min: 5, icone: "🎬", t: "Abertura: como funciona a revisão" },
        { min: 45, icone: "💻", t: "Revisão no portal: 📚 Relembre + atividades de cada missão" },
        { min: 15, icone: "🏆", t: "Desafio e Turbo (simulado) + placar" },
        { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
      ],
      abertura: [
        { fala: "Hoje é dia de revisão, mas não é aula de só olhar: a aula inteira tem atividade, igual a uma missão, e vale ponto no placar." },
        { fala: "O portal mostra só as missões que vocês estudaram, e é exatamente isso que cai na prova. Em cada missão: leiam o 📚 Relembre e façam as atividades." },
        { acao: "Inicie a aula com a Missão de hoje = 🔁 Revisão. O painel grava sozinho quais missões a turma estudou e o portal mostra só essas." }
      ],
      onde: {
        pergunta: "Qual missão vocês acham mais difícil? Comecem a revisão por ela.",
        dica: "Abra o 🔴 Ao vivo: quem estiver parado num bloco, mande reler o 📚 Relembre daquela missão."
      },
      atencao: [
        "No fim da aula, lembre a data da prova da turma (aparece no 🗺️ Panorama).",
        "Quem terminar o Básico vai para o Desafio e o Turbo: eles misturam as missões, como na prova.",
        "Aluno que faltou a uma missão: a revisão não substitui a missão. Libere a missão para ele fazer em casa (🏠) ou na reposição."
      ],
      perguntas: [
        { p: "Por que não aparece a M7 para a minha turma?", r: "Porque a turma não teve essa missão extra: a revisão e a prova só cobram o que foi dado." }
      ]
    }
  });
})();
