/* Roteiro da aula (só para o professor) — 9º ano, 2º bimestre de 2027 (Segurança)
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
  PORTAL.registrarRoteiro("informatica-9ano-2027-2bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "📇 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF09CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Alguém já viu um celular cheio de propaganda do nada, ou lento depois de instalar um joguinho “grátis”?" },
        { fala: "Isso tem nome: malware, o programa feito para prejudicar. Hoje vamos conhecer a família inteira: vírus, worm, cavalo de Troia, spyware e adware." },
        { acao: "Conte a lenda do cavalo de Troia em 1 minuto: o presente de madeira com soldados escondidos. Pergunte: qual malware vocês acham que tem esse nome?" }
      ],
      onde: {
        pergunta: "De onde vocês costumam baixar jogos e aplicativos?",
        fechamento: "Da loja oficial, com o sistema atualizado e antivírus, o risco cai muito. “Grátis demais” fora da loja é a isca preferida.",
        dica: "Pergunte quem já instalou algo por link de mensagem: sem julgar, só para mostrar como é comum."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma, oferta por oferta, se pode baixar ou não.",
      atencao: [
        "Vírus × worm: o vírus precisa que alguém abra o arquivo; o worm se espalha sozinho pela rede.",
        "Cavalo de Troia não é “um vírus forte”: é o disfarce de programa bom."
      ],
      perguntas: [
        { p: "Celular pega vírus?", r: "Pega malware, sim, principalmente por aplicativos de fora da loja oficial e links estranhos." },
        { p: "Antivírus resolve tudo?", r: "Ajuda muito, mas atualizar o sistema e desconfiar do “grátis demais” também é proteção." }
      ],
      curiosidade: "O nome “cavalo de Troia” vem da lenda grega em que soldados entraram na cidade escondidos dentro de um presente."
    },
    m2: {
      datas: "BNCC EF09CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Muitas vezes o golpista não invade o computador: ele engana a pessoa. Isso se chama engenharia social." },
        { acao: "Escreva no quadro: “URGENTE! Sua conta será bloqueada em 1 hora. Mande a senha e o código do SMS.” Peça para a turma achar os sinais de golpe." },
        { fala: "Pressa, pedido de senha, pedido de código, prêmio fácil: esses são os sinais. Banco nunca pede senha por mensagem." }
      ],
      onde: {
        pergunta: "Alguém conhece uma pessoa que recebeu o golpe do “troquei de número, me manda um Pix”?",
        fechamento: "É engenharia social: o golpista usa a confiança e a pressa. Ligar para o número antigo da pessoa desmonta o golpe.",
        dica: "Faça a conta da força bruta no quadro: 10 × 10 × 10 × 10 = 10.000. A 100 senhas por segundo, menos de 2 minutos."
      },
      demonstracao: "No projetor, faça a prática: classifique com a turma cada situação (engenharia social, força bruta ou DDoS).",
      atencao: [
        "Phishing é a isca (mensagem ou site falso); engenharia social é o jeito de enganar a pessoa.",
        "DDoS não rouba dados: ele derruba o site com milhares de acessos."
      ],
      perguntas: [
        { p: "Se eu cair num golpe, o que faço primeiro?", r: "Parar de responder, trocar a senha, ativar as duas etapas e avisar um adulto." },
        { p: "Por que senha de 4 números é fraca?", r: "Porque só tem 10.000 combinações: um programa testa todas em pouco tempo." }
      ],
      curiosidade: "O “D” de DDoS quer dizer distribuído: o ataque vem de milhares de computadores ao mesmo tempo, muitas vezes infectados sem o dono saber."
    },
    m3: {
      datas: "BNCC EF09CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Como mandar um bilhete que, se cair na mão errada, ninguém entende? Há mais de dois mil anos já se fazia isso." },
        { acao: "Escreva o alfabeto no quadro e, embaixo, o alfabeto andado 3 casas (D, E, F…). Cifre LUA junto com a turma: OXD." },
        { fala: "A chave é o número de casas. Quem sabe a chave decifra; quem não sabe vê só uma bagunça de letras." }
      ],
      onde: {
        pergunta: "Por que o aplicativo de mensagens precisa embaralhar o que vocês escrevem?",
        fechamento: "Para que ninguém no caminho leia. Hoje as cifras são muito mais fortes que a de César, mas a ideia de chave é a mesma.",
        dica: "Mostre por que a cifra de César é fraca: só 25 chaves; dá para testar todas (força bruta, da Missão 2)."
      },
      demonstracao: "No projetor, faça a prática: cifre SOL e decifre HVFROD com a tira da chave 3.",
      atencao: [
        "Depois do Z, volta para o A (X → A, Z → C com a chave 3).",
        "Decifrar é voltar as casas, não andar mais."
      ],
      perguntas: [
        { p: "Por que só 25 chaves?", r: "Andar 26 casas volta à mesma letra, então não muda nada." },
        { p: "Espaço e acento mudam?", r: "Na nossa atividade, o espaço fica igual; só as letras andam." }
      ],
      curiosidade: "A cifra leva o nome de Júlio César, que, segundo historiadores romanos, a usava em mensagens militares."
    },
    m4: {
      datas: "BNCC EF09CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Na cifra de César, quem cifra e quem decifra usam a mesma chave. Mas como combinar a chave com um site que você nunca viu?" },
        { acao: "Mostre um cadeado aberto (ou desenhe no quadro): qualquer um pode fechar, mas só quem tem a chave abre." },
        { fala: "O cadeado aberto é a chave pública; a chave que abre é a privada, secreta, só do site." }
      ],
      onde: {
        pergunta: "Vocês já repararam no cadeado ao lado do endereço do site?",
        fechamento: "O 🔒 e o https mostram que a conversa é cifrada. Mas atenção: site falso também pode ter cadeado. Confira o nome do site.",
        dica: "Abra o portal no projetor e mostre o https e o cadeado na barra de endereço."
      },
      demonstracao: "No projetor, faça a prática: clique nos passos do cadeado aberto, na ordem.",
      atencao: [
        "Pública fecha (cifra); privada abre (decifra).",
        "Cadeado ≠ site honesto: é o erro mais comum e o mais perigoso."
      ],
      perguntas: [
        { p: "O que é ponta a ponta?", r: "Só quem manda e quem recebe leem a mensagem; nem a empresa do aplicativo lê." },
        { p: "Se alguém interceptar a mensagem cifrada?", r: "Vê só uma bagunça de letras: sem a chave privada, não lê." }
      ],
      curiosidade: "O S do HTTPS vem de secure, “seguro” em inglês."
    },
    m5: {
      datas: "BNCC EF09CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Lembram da força bruta da Missão 2? Hoje vamos montar senhas que um programa levaria muito tempo para descobrir." },
        { acao: "Escreva no quadro uma senha fraca (123456) e uma frase-senha inventada (Gato!Azul7Pula). Pergunte: qual é mais fácil de lembrar? E de adivinhar?" },
        { fala: "Senha forte é comprida, mistura tudo e não tem nada pessoal. E um site sério nem guarda a sua senha: guarda um resumo, o hash." }
      ],
      onde: {
        pergunta: "Vocês usam a mesma senha em tudo?",
        fechamento: "Se um site vazar, todas as contas ficam abertas. Uma senha diferente para cada conta importante e a verificação em duas etapas resolvem.",
        dica: "Reforce: nunca usem nas atividades uma senha de verdade. Tudo é inventado."
      },
      demonstracao: "No projetor, faça a prática: digite uma senha inventada e mostre o medidor subindo até “Muito forte”.",
      atencao: [
        "Ninguém digita senha real no portal: os exemplos são de mentira.",
        "Hash não é criptografia que se desfaz: é uma conta de mão única."
      ],
      perguntas: [
        { p: "Como eu lembro tantas senhas?", r: "Com frases-senha e, para muitas contas, um gerenciador de senhas." },
        { p: "O que é a verificação em duas etapas?", r: "Além da senha, um código que chega no celular. Sem ele, ninguém entra." }
      ],
      curiosidade: "Por causa do hash, nem os funcionários de um site sério conseguem ler a sua senha."
    },
    m6: {
      datas: "BNCC EF09CO02 / EF09CO03 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "No 1º bimestre vocês viram programação por eventos. Hoje é o projeto: o alarme da sala de informática." },
        { acao: "Escreva no quadro: QUANDO… FAÇA… e monte a regra 1 com a turma: QUANDO a porta abrir depois das 18h, FAÇA tocar a sirene." },
        { fala: "Evento é o que acontece; ação é o que o programa faz. As etapas: listar, decidir, escrever, testar e apresentar." }
      ],
      onde: {
        pergunta: "Que outros aparelhos funcionam por eventos?",
        fechamento: "O celular que vibra quando chega mensagem, o portão que abre com o controle, o jogo que pula quando aperta a tecla.",
        dica: "Simule o teste: um aluno é a porta, outro digita o código; a turma diz o que o alarme faz."
      },
      demonstracao: "No projetor, faça a prática: ligue cada evento à sua ação.",
      atencao: [
        "A ação vem depois do evento, nunca antes.",
        "Testar é conferir cada regra, uma por uma."
      ],
      perguntas: [
        { p: "E se o professor errar o código?", r: "Uma vez, nada; 3 vezes, o alarme manda aviso ao celular do professor (regra 3)." },
        { p: "Dá para ter dois eventos na mesma ação?", r: "Dá: basta escrever duas regras com a mesma ação." }
      ],
      curiosidade: "Os botões de um site, os jogos e até os sensores de uma casa inteligente funcionam com regras “quando… faça…”."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO04",
      tempo: T,
      abertura: [
        { fala: "Imaginem chegar na escola e todos os arquivos estarem trancados, com um aviso pedindo dinheiro para devolver. Isso é o ransomware." },
        { fala: "Pagar não garante nada. A proteção de verdade é o backup, seguindo a regra 3-2-1." },
        { acao: "Escreva 3-2-1 no quadro: 3 cópias, 2 tipos de armazenamento, 1 fora do local." }
      ],
      onde: {
        pergunta: "Se o celular de vocês sumisse hoje, as fotos estariam salvas em outro lugar?",
        fechamento: "Com backup na nuvem ou no computador, sim. Sem backup, elas se perdem.",
        dica: "Mostre um HD externo ou pen drive e explique: depois do backup, desliga do computador."
      },
      demonstracao: "No projetor, faça a prática: complete a regra 3-2-1.",
      atencao: [
        "O HD de backup fica desligado: ligado, o ransomware cifra a cópia também.",
        "Ransomware também é malware (Missão 1)."
      ],
      perguntas: [
        { p: "Por que não pagar?", r: "O criminoso pode não devolver, e o pagamento financia novos ataques. Especialistas recomendam ter backup." },
        { p: "A nuvem conta como cópia fora do local?", r: "Sim: fica em data centers, longe da casa ou da escola." }
      ],
      curiosidade: "Hospitais e prefeituras já ficaram sem sistema por causa de ransomware."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF09CO05",
      tempo: T,
      abertura: [
        { fala: "Na criptografia, todo mundo vê que existe um segredo, mas não lê. E se ninguém nem percebesse que existe uma mensagem?" },
        { acao: "Escreva no quadro: “Saí cedo hoje. / Ontem choveu muito. / Levei o guarda-chuva.” Peça para lerem só as primeiras letras: SOL." },
        { fala: "Isso é esteganografia, “escrita escondida” em grego. O bilhete com a palavra nas primeiras letras é um acróstico." }
      ],
      onde: {
        pergunta: "Onde mais dá para esconder uma mensagem?",
        fechamento: "Nos pixels de uma foto: mudar um pouquinho a cor de cada pixel não aparece para o olho.",
        dica: "Desafie a turma a escrever um acróstico com o nome da escola ou da cidade."
      },
      demonstracao: "No projetor, faça a prática: ache as palavras escondidas nos dois bilhetes.",
      atencao: [
        "Criptografia: vê, mas não lê. Esteganografia: nem percebe que existe.",
        "No desafio, a palavra está na última letra de cada linha, não na primeira."
      ],
      perguntas: [
        { p: "Para que serve a marca d’água invisível em filmes?", r: "Para mostrar quem é o dono e descobrir de onde veio uma cópia pirata." },
        { p: "Dá para usar as duas juntas?", r: "Dá: cifrar a mensagem e depois esconder dentro de uma foto." }
      ],
      curiosidade: "Na Grécia antiga, segundo o historiador Heródoto, um mensageiro teve a mensagem escrita na cabeça raspada e esperou o cabelo crescer para viajar."
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
