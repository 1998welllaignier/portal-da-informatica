/* Roteiro da aula (só para o professor) — 7º ano, 3º bimestre de 2027 (Rede segura)
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
  PORTAL.registrarRoteiro("informatica-7ano-2027-3bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🪪 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF07CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando o telefone toca, o que vocês dizem primeiro? “Alô!” Ninguém combinou isso com vocês, mas todo mundo segue." },
        { acao: "Faça um telefonema de mentira com um aluno, errando de propósito a ordem (despedir antes de atender). A turma percebe que não funciona." },
        { fala: "Os aparelhos também têm regras combinadas para conversar: os protocolos. É por isso que um celular de uma marca conversa com um computador de outra." }
      ],
      onde: {
        pergunta: "Quem já viu o “erro 404” num site?",
        fechamento: "É o servidor dizendo, pelo protocolo HTTP: “essa página não existe”.",
        dica: "Mostre no projetor um endereço inventado do portal e o erro que aparece."
      },
      demonstracao: "No projetor, faça a prática: clique nos 4 passos da conversa do navegador com o site.",
      atencao: [
        "Protocolo não é um aparelho nem um cabo: é a regra.",
        "Wi-Fi e Bluetooth são sem fio; o Bluetooth é só para aparelhos pertinho."
      ],
      perguntas: [
        { p: "A internet tem um protocolo só?", r: "Não: tem vários, cada um com uma função (páginas, endereços, e-mail…)." },
        { p: "Quem inventou essas regras?", r: "Grupos de especialistas do mundo todo, para que todos os aparelhos sigam o mesmo padrão." }
      ],
      curiosidade: "Graças aos protocolos, celulares, computadores e consoles de marcas diferentes usam a mesma internet."
    },
    m2: {
      datas: "BNCC EF07CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se vocês mandassem um cartão-postal, quem poderia ler no caminho? O carteiro, qualquer um! E uma carta lacrada?" },
        { acao: "Escreva no quadro: http:// = 📮 cartão-postal; https:// 🔒 = ✉️ carta lacrada." },
        { fala: "O S é de secure, seguro. Mas cuidado com a pegadinha: o cadeado não prova que o site é honesto." }
      ],
      onde: {
        pergunta: "Antes de digitar a senha de um jogo, vocês olham o endereço do site?",
        fechamento: "Confiram o https e o nome do site, letra por letra: golpistas trocam um E por um 3, um O por um zero.",
        dica: "Escreva dois nomes no quadro (jogoestrela e jogo3strela) e peça para acharem a diferença."
      },
      demonstracao: "Abra o portal no projetor e mostre o https e o cadeado na barra de endereço.",
      atencao: [
        "Cadeado = conversa cifrada, não = site honesto.",
        "Melhor digitar o endereço do que clicar em link de mensagem."
      ],
      perguntas: [
        { p: "Site sem cadeado é sempre golpe?", r: "Não necessariamente, mas nele os dados viajam abertos: nunca digite senha." },
        { p: "Por que o golpista também consegue o cadeado?", r: "Porque o cadeado só mostra que a conversa é cifrada; qualquer site pode ter." }
      ],
      curiosidade: "Hoje, a maioria dos sites usa HTTPS, e os navegadores avisam quando um site não usa."
    },
    m3: {
      datas: "BNCC EF07CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Qual é a senha mais usada do mundo? Uma das campeãs é 123456. Por que ela é tão ruim?" },
        { acao: "Escreva no quadro 123456 e Pipa!Verde8Voa. Pergunte: qual é mais fácil de lembrar? E de adivinhar?" },
        { fala: "E mesmo com senha forte, dá para pôr uma segunda tranca: a verificação em duas etapas." }
      ],
      onde: {
        pergunta: "Já chegou um código por SMS para entrar numa conta?",
        fechamento: "Esse código é a segunda etapa. Ele é só seu: se alguém pedir, é golpe.",
        dica: "Reforce: nas atividades, as senhas são inventadas. Ninguém digita senha de verdade no portal."
      },
      demonstracao: "No projetor, faça a prática: digite uma senha inventada e mostre o medidor subindo.",
      atencao: [
        "Nenhum aluno digita senha real no portal.",
        "Sabe (senha, PIN), tem (código no celular), é (digital, rosto)."
      ],
      perguntas: [
        { p: "Como lembrar de tantas senhas?", r: "Com frases-senha que você imagina e, quando for mais velho, um gerenciador de senhas." },
        { p: "Desbloquear com o rosto é seguro?", r: "É uma prova do tipo “algo que você é”; junto com a senha, protege mais." }
      ],
      curiosidade: "Muitos serviços oferecem a verificação em duas etapas de graça; basta ativar nas configurações."
    },
    m4: {
      datas: "BNCC EF07CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Phishing vem de “pescaria”: o golpista joga uma isca e espera alguém morder." },
        { acao: "Escreva no quadro: “PROMOSSÃO SÓ HOJE! Você ganhou um fone. Mande o código do SMS.” Peça para a turma achar todos os sinais de golpe." },
        { fala: "Pressa, prêmio fácil, pedido de código, erro de português: quatro sinais numa mensagem só." }
      ],
      onde: {
        pergunta: "Alguém já recebeu oferta de moedas grátis num jogo?",
        fechamento: "Se pede a senha, é golpe. Moeda de verdade só pela loja do próprio jogo.",
        dica: "Sem expor ninguém: pergunte quem conhece alguém que recebeu o golpe do “troquei de número”."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma, mensagem por mensagem, golpe ou normal.",
      atencao: [
        "Caiu num golpe? Não é vergonha: contar para um adulto ajuda a resolver mais rápido.",
        "Nunca clicar no link para “conferir” se é golpe."
      ],
      perguntas: [
        { p: "Como saber se o parente trocou mesmo de número?", r: "Ligar para o número antigo ou perguntar algo que só ele sabe." },
        { p: "E se eu já cliquei no link?", r: "Não digite nada, feche a página, troque a senha e conte para um adulto." }
      ],
      curiosidade: "Golpistas costumam usar datas especiais, como Black Friday e Dia das Crianças, para mandar mais iscas."
    },
    m5: {
      datas: "BNCC EF07CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vou ler a mesma frase de dois jeitos: “Que legal o seu desenho.” Uma vez sorrindo, outra com cara de deboche." },
        { acao: "Leia a frase dos dois jeitos. Depois escreva-a no quadro e pergunte: escrita, dá para saber qual foi?" },
        { fala: "Na mensagem escrita, a gente não vê o rosto nem ouve o tom. Por isso precisa de mais cuidado: empatia." }
      ],
      onde: {
        pergunta: "Já leram uma mensagem no grupo e ficaram em dúvida se era brincadeira?",
        fechamento: "Emoji ajuda a mostrar o tom, e ler antes de enviar evita muita confusão.",
        dica: "Escreva no quadro: é verdade? É gentil? É necessário? Deixe até o fim do bimestre."
      },
      demonstracao: "No projetor, faça a prática: leia cada mensagem e pergunte como a turma se sentiria.",
      atencao: [
        "“Kkk” no fim não transforma ofensa em brincadeira.",
        "Maiúsculas = grito na internet."
      ],
      perguntas: [
        { p: "E se a pessoa não entendeu a minha brincadeira?", r: "Peça desculpas e explique. Se machucou, apague." },
        { p: "Posso não responder uma mensagem que me deixou com raiva?", r: "Pode e é ótimo: espere a raiva passar." }
      ],
      curiosidade: "Algumas plataformas já mostram um aviso pedindo para a pessoa repensar antes de publicar um comentário ofensivo."
    },
    m6: {
      datas: "BNCC EF07CO09 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Hoje o assunto é sério: cyberbullying. É humilhar, ameaçar ou perseguir alguém pela internet, de propósito e várias vezes." },
        { fala: "Discordar com respeito não é cyberbullying. Apelido que humilha, todo dia, no grupo, é." },
        { acao: "Desenhe três bonecos no quadro: 🎯 alvo, 👀 espectador e 😈 autor. Pergunte o que cada um pode fazer." }
      ],
      onde: {
        pergunta: "Quem está vendo o cyberbullying também tem responsabilidade?",
        fechamento: "Sim: curtir e repassar espalha. Não repassar, apoiar o colega e avisar um adulto faz a diferença.",
        dica: "Não peça exemplos da própria turma com nomes. Use só os exemplos da apostila."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma o que é e o que não é cyberbullying.",
      atencao: [
        "Se algum aluno contar um caso real, acolha, não exponha na frente da turma e encaminhe à coordenação depois da aula.",
        "Desde 2024, a intimidação sistemática virtual é crime (Lei nº 14.811/2024); adolescente responde pelo ECA."
      ],
      perguntas: [
        { p: "Se eu responder com ofensa, não resolve?", r: "Piora: a briga cresce. Guarde prints, bloqueie, denuncie e conte para um adulto." },
        { p: "Para quem eu conto?", r: "Para os pais ou responsáveis, o professor, a coordenação: um adulto de confiança." }
      ],
      curiosidade: "As principais redes sociais têm o botão de denunciar em cada publicação, e a denúncia é anônima: quem foi denunciado não fica sabendo quem denunciou."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO07",
      tempo: T,
      abertura: [
        { fala: "Rodoviária, praça, lanchonete: muitos lugares têm Wi-Fi grátis. Ele ajuda, mas tem riscos." },
        { acao: "Escreva no quadro três nomes de rede: Rodoviaria_Oficial, Rodoviaria_Gratis_Rapida e Rodoviaria-0ficial. Qual você escolheria? Como ter certeza?" },
        { fala: "Pergunte ao lugar o nome certo. E, para banco e senhas, use os dados móveis." }
      ],
      onde: {
        pergunta: "Vocês já entraram numa rede “grátis” sem saber de quem era?",
        fechamento: "Golpistas criam redes falsas com nomes parecidos. Na dúvida, não entre.",
        dica: "Mostre no celular onde fica a opção “Esquecer esta rede”."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma o que pode e o que é melhor evitar na rodoviária.",
      atencao: [
        "Wi-Fi público serve para coisas simples; o que é importante vai pelos dados móveis.",
        "Rede aberta = sem senha."
      ],
      perguntas: [
        { p: "O Wi-Fi da escola é público?", r: "É uma rede de um lugar, com regras da escola; mesmo assim, nada de senha pessoal em computador compartilhado." },
        { p: "Com https estou seguro no Wi-Fi público?", r: "O https cifra a conversa com o site e ajuda muito, mas a rede falsa ainda é um risco." }
      ],
      curiosidade: "O celular guarda o nome das redes em que já entrou e tenta entrar sozinho de novo; por isso “esquecer a rede” ajuda."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO08",
      tempo: T,
      abertura: [
        { fala: "Pergunta para a turma: o recreio devia ser mais longo? Levante a mão quem concorda e quem discorda." },
        { acao: "Escolha dois alunos de cada lado e faça um minidebate de 3 minutos, seguindo as 4 regras escritas no quadro." },
        { fala: "Discordar é normal. O importante é criticar a ideia, não a pessoa." }
      ],
      onde: {
        pergunta: "Onde vocês veem mais briga na internet: nos comentários, nos jogos ou nos grupos?",
        fechamento: "Em todos. Quem usa argumento e fonte é ouvido; quem ataca a pessoa perde a razão.",
        dica: "Mostre a diferença entre “eu discordo, porque…” e “você é burro”."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma argumentos e ataques pessoais.",
      atencao: [
        "Escolha temas leves para o minidebate (recreio, merenda, passeio).",
        "No fim, aceitar discordar faz parte."
      ],
      perguntas: [
        { p: "E se a outra pessoa me atacar?", r: "Volte para a ideia, ou saia da conversa. Não precisa responder com ataque." },
        { p: "O que é uma boa fonte?", r: "Um livro, um jornal sério, um site confiável: algo que dá para conferir." }
      ],
      curiosidade: "Em muitos campeonatos de debate, cada lado defende uma posição sorteada, mesmo que não concorde com ela."
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
