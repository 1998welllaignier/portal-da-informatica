/* Roteiro da aula (só para o professor) — 6º ano, 1º bimestre de 2027
   Professor Welington Laignier · Portal da Informática
   As RESPOSTAS não ficam aqui: a tela da aula gera sozinha a partir das atividades do portal.
   Datas: entram quando o Calendário Escolar 2027 da SEMED sair (o 🗺️ Panorama organiza sozinho). */
(function () {
  const T = [
    { min: 10, icone: "🎬", t: "Abertura e vídeo" },
    { min: 10, icone: "🌎", t: "Onde eu uso isso?" },
    { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon" },
    { min: 35, icone: "💻", t: "Missão no portal" },
    { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
    { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
  ];
  PORTAL.registrarRoteiro("informatica-6ano-2027-1bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🪪 Cartões com os códigos dos alunos (turmas novas: conferir a importação)",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do ano · BNCC EF06CO05 · datas pelo calendário da SEMED 2027",
      tempo: [
        { min: 15, icone: "👋", t: "Boas-vindas, combinados e códigos de entrada" },
        { min: 5, icone: "🎬", t: "Vídeo da missão" },
        { min: 5, icone: "🖥️", t: "Demonstração pelo Veyon (janelas)" },
        { min: 35, icone: "💻", t: "Missão no portal (com o diagnóstico)" },
        { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
        { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
      ],
      abertura: [
        { fala: "Sejam bem-vindos à Informática! Eu sou o professor Welington. Aqui cada aula é uma missão no Portal da Informática, e tudo o que vocês fizerem fica registrado sozinho no meu painel." },
        { fala: "Quem conclui o Básico ganha o visto da missão e libera os jogos no fim da aula. Quem quiser mais pontos faz o Desafio e o Turbo." },
        { acao: "Mostre no projetor como entrar com o código de 4 números e montar o avatar (2 minutos)." },
        { fala: "Combinados da sala: nada de comer perto do computador, não mexer nos cabos nem na mesa, e nunca mexer nos arquivos dos colegas." },
        { fala: "Hoje a missão é a base de tudo: mouse, teclado e janelas. Quem já sabe, vai voar; quem ainda não sabe, vai aprender hoje." }
      ],
      siglas: "Leia com a turma o “O que significa?”. Mostre a diferença entre ponteiro (a seta) e cursor (a barrinha que pisca): é a dúvida mais comum.",
      onde: {
        pergunta: "No celular, o que faz o papel do clique? E do clique direito?",
        fechamento: "Tocar é o clique; tocar e segurar é o clique direito; arrastar o dedo é rolar. O computador e o celular conversam com a gente do mesmo jeito.",
        dica: "Deixe os alunos que já sabem ajudarem a explicar. Isso também mostra quem já tem experiência."
      },
      demonstracao: "Pelo Veyon, abra uma janela e mostre devagar: ➖ minimizar (ela vai para a barra de tarefas), clicar no ícone para voltar, ⬜ maximizar e ❌ fechar.",
      atencao: [
        "Primeira aula do ano: muitos alunos novos nunca usaram computador. Observe o diagnóstico no painel (🏫 Turmas → resposta da última atividade do Básico) para descobrir quem precisa da 👣 Trilha.",
        "Duplo clique: muitos mexem o mouse entre os dois cliques. Peça para segurar o mouse parado.",
        "Na digitação do Desafio, o portal confere acento e maiúscula: é de propósito."
      ],
      perguntas: [
        { p: "Fechei sem querer, perdi tudo?", r: "Se o trabalho não foi salvo, sim; por isso a gente vai aprender a salvar. Os programas em si não se apagam ao fechar." },
        { p: "A minha seta sumiu!", r: "Mexa o mouse com força para os lados; se não voltar, veja se o cabo está conectado (chame o professor)." },
        { p: "Por que a letra está saindo toda maiúscula?", r: "O Caps Lock está ligado (luzinha acesa). Aperte de novo para desligar." }
      ],
      curiosidade: "O primeiro mouse foi criado em 1964 por Douglas Engelbart e era uma caixinha de madeira com duas rodinhas de metal."
    },
    m2: {
      datas: "BNCC EF06CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando vocês fazem uma conta na calculadora do celular, o que acontece lá dentro?" },
        { acao: "Ouça 2 ou 3 respostas, sem corrigir." },
        { fala: "Todo computador trabalha em etapas: recebe a informação (ENTRADA), trabalha com ela (PROCESSAMENTO) e mostra o resultado (SAÍDA). E pode guardar para depois (ARMAZENAMENTO)." },
        { acao: "No projetor, abra a Calculadora, digite 2 + 3 e mostre o 5." },
        { fala: "Qual foi a entrada? E a saída? E quem fez a conta?" }
      ],
      siglas: "Leia o “O que significa?”. Destaque CPU (Unidade Central de Processamento) e RAM: a RAM é a memória do momento, que apaga ao desligar.",
      onde: {
        pergunta: "No caixa do mercado, qual é a entrada, o processamento e a saída?",
        fechamento: "Leitor de código de barras = entrada; computador soma = processamento; tela e cupom = saída.",
        dica: "Puxe exemplos da cidade: maquininha de cartão, urna eletrônica, catraca do ônibus."
      },
      demonstracao: "Abra o gabinete de um computador desligado (se possível) ou mostre uma foto: processador, memória RAM e HD/SSD.",
      atencao: [
        "Muitos chamam o monitor de “computador”: mostre que o computador de verdade está no gabinete.",
        "Pen drive e HD não são entrada nem saída: são armazenamento.",
        "RAM × armazenamento: use o exemplo da luz que acaba com o trabalho não salvo."
      ],
      perguntas: [
        { p: "O pen drive é entrada ou saída?", r: "É armazenamento: guarda os arquivos." },
        { p: "A tela do celular é entrada ou saída?", r: "As duas: recebe o toque (entrada) e mostra a imagem (saída)." },
        { p: "Por que o trabalho sumiu quando faltou luz?", r: "Estava só na RAM, que apaga ao desligar. Salvando (Ctrl + S), ele vai para o armazenamento." }
      ],
      curiosidade: "O primeiro computador eletrônico, o ENIAC (1946), ocupava uma sala inteira e pesava cerca de 27 toneladas."
    },
    m3: {
      datas: "BNCC EF06CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Uma brincadeira para lembrar: hardware é o que você chuta; software é o que você xinga quando trava." },
        { fala: "Hardware são as peças que dá para tocar. Software são os programas." },
        { acao: "Segure o mouse e pergunte: hardware ou software? Depois aponte o navegador na tela." },
        { fala: "E qual é o programa que liga primeiro e manda em todos os outros?" }
      ],
      siglas: "Leia o “O que significa?”. Hardware e software não se traduzem: explique o sentido (hard = duro, soft = macio).",
      onde: {
        pergunta: "Quem já teve um celular que travou? E um que quebrou a tela? Qual é hardware e qual é software?",
        fechamento: "Tela quebrada = hardware (troca a peça). Aplicativo travando = software (fecha, atualiza ou reinstala).",
        dica: "Fale da oficina de celular da cidade: o técnico mexe nos dois."
      },
      demonstracao: "Pelo Veyon, clique no Iniciar e mostre que o Windows é o sistema operacional; depois mostre o navegador, a calculadora e o editor de texto (aplicativos).",
      atencao: [
        "Confundem aplicativo com sistema operacional: o sistema operacional comanda; o aplicativo faz uma tarefa.",
        "O Turbo pede para descobrir o sistema operacional e o navegador do computador: deixe eles procurarem."
      ],
      perguntas: [
        { p: "O WhatsApp é hardware ou software?", r: "Software: é um aplicativo." },
        { p: "Android é aplicativo?", r: "Não: é o sistema operacional do celular." }
      ],
      curiosidade: "O nome Windows quer dizer “janelas” em inglês, por causa das janelas em que os programas aparecem."
    },
    m4: {
      datas: "BNCC EF06CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quem aqui já perdeu uma foto, um jogo salvo ou um trabalho? O que aconteceu?" },
        { acao: "Ouça 2 ou 3 alunos." },
        { fala: "Hoje cada um vai criar a sua pasta no computador. Pasta é como uma gaveta, e o arquivo é o que vai dentro dela." },
        { fala: "Repare no final do nome dos arquivos, depois do ponto: é a extensão, que diz o tipo do arquivo." }
      ],
      siglas: "Leia o “O que significa?”. Mostre um caminho de verdade na barra de endereço do Explorador de Arquivos.",
      onde: {
        pergunta: "Na galeria do celular, como as fotos ficam organizadas?",
        fechamento: "Os álbuns são pastas. E o boletim em PDF que vocês baixam vai para a pasta Downloads.",
        dica: "Mostre a pasta Downloads do computador do professor."
      },
      demonstracao: "Pelo Veyon, mostre devagar: botão direito → Novo → Pasta → digitar o nome → Enter. Depois, dentro dela: Novo → Documento de Texto → renomear. É o passo em que mais travam.",
      atencao: [
        "Combine antes onde cada turma cria as pastas (por exemplo, Documentos › 6º A).",
        "Se as extensões não aparecem no computador, a coluna Tipo do Explorador mostra o tipo.",
        "Reforce: nunca apagar nem mexer na pasta do colega."
      ],
      perguntas: [
        { p: "Criei a pasta no lugar errado!", r: "Arraste a pasta para o lugar certo ou clique com o botão direito → Recortar, e cole no lugar certo." },
        { p: "Não aparece o .txt no nome.", r: "O Windows esconde a extensão; a coluna Tipo mostra “Documento de Texto”." }
      ],
      curiosidade: "O ícone de salvar, um disquete 💾, é de uma peça que quase ninguém usa mais: guardava só 1,44 MB, menos que uma foto de celular."
    },
    m5: {
      datas: "BNCC EF06CO01 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Pergunta difícil: o número do telefone é um número?" },
        { acao: "Deixe a turma discutir 1 minuto." },
        { fala: "Parece, mas ninguém soma dois telefones! Para o computador, telefone é texto. Hoje vamos aprender os tipos de dados." },
        { fala: "E quando temos muitos dados juntos, organizamos em listas e tabelas, como a tabela do campeonato." }
      ],
      siglas: "Leia o “O que significa?”. Explique o tipo lógico com exemplos de sim ou não: “veio à aula?”, “terminou o Básico?”.",
      onde: {
        pergunta: "Que listas e tabelas vocês usam na vida?",
        fechamento: "Lista de compras, playlist, tabela do campeonato, boletim: o computador organiza dados do mesmo jeito.",
        dica: "Mostre a tabela do campeonato brasileiro ou de um campeonato da cidade no projetor."
      },
      demonstracao: "No projetor, mostre o boletim (ou uma tabela de exemplo): linha = aluno, coluna = nota, faltas.",
      atencao: [
        "Telefone, CEP e número do computador são texto (não servem para conta): é a pegadinha da missão.",
        "Linha é deitada, coluna é em pé: confundem bastante."
      ],
      perguntas: [
        { p: "Data é número?", r: "É um tipo próprio: o computador sabe contar dias e ver o que vem antes." },
        { p: "Verdadeiro ou falso é texto?", r: "É o tipo lógico (booleano): só pode ser verdadeiro ou falso." }
      ],
      curiosidade: "O nome booleano vem de George Boole, matemático inglês do século 19 que criou a lógica do verdadeiro e falso usada em todo computador."
    },
    m6: {
      datas: "BNCC EF06CO09 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Do outro lado da tela tem uma pessoa de verdade, com sentimentos. Por isso a educação continua valendo na internet." },
        { fala: "As boas maneiras na rede têm nome: netiqueta." },
        { acao: "Escreva no quadro: OI, TUDO BEM? e pergunte como soa." },
        { fala: "Na internet, tudo em maiúsculas parece grito!" }
      ],
      siglas: "Leia o “O que significa?”. Reforce o que são dados pessoais: endereço, telefone, escola, onde estou agora.",
      onde: {
        pergunta: "O que mais causa briga no grupo da turma?",
        fechamento: "A netiqueta evita a maioria das brigas: respeito, pensar antes de postar e pedir permissão para fotos.",
        dica: "Não exponha casos reais de alunos; fale de forma geral."
      },
      demonstracao: "Mostre no projetor onde ficam os botões de bloquear e denunciar num aplicativo de mensagens (em geral, nos três pontinhos).",
      atencao: [
        "Assunto sensível: se algum aluno contar uma situação de perigo ou de ofensa, acolha e encaminhe à coordenação.",
        "O Desafio tem detector de palavras ofensivas: o aluno precisa reescrever com respeito.",
        "Reforce: desconhecido pedindo foto, endereço ou segredo = parar e contar a um adulto de confiança."
      ],
      perguntas: [
        { p: "Se eu apagar a postagem, some?", r: "Não necessariamente: alguém pode ter copiado ou tirado print antes." },
        { p: "Posso passar a senha para o meu irmão?", r: "A senha é sua. Quem cuida das suas contas, se precisar, são os seus responsáveis." }
      ],
      curiosidade: "A palavra netiqueta surgiu nos anos 1980, quando a internet ainda era usada quase só por universidades."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO05",
      tempo: T,
      abertura: [
        { fala: "Hoje é dia de treino: digitar rápido e sem erro economiza tempo em todo trabalho." },
        { acao: "Mostre no projetor a posição das mãos: A S D F e J K L Ç, com os risquinhos no F e no J." },
        { fala: "No teclado brasileiro, o acento vem antes da letra: primeiro o ´, depois a vogal." }
      ],
      siglas: "Explique ABNT2: é o modelo de teclado brasileiro, com Ç. ABNT = Associação Brasileira de Normas Técnicas.",
      onde: {
        pergunta: "Em que profissões é preciso digitar bem?",
        fechamento: "Secretária, atendente, programador, jornalista… e em todo cadastro de emprego.",
        dica: "Faça uma disputa amigável: quem digita a frase do Desafio primeiro, sem erro."
      },
      demonstracao: "Digite no projetor “você” e “maçã” devagar, falando cada toque.",
      atencao: [
        "O portal confere acento, maiúscula e pontuação: se der errado, peça para comparar letra por letra.",
        "Teclados com Ç ausente (padrão americano) mudam os acentos; os da sala são ABNT2."
      ],
      perguntas: [
        { p: "Apertei o acento e não apareceu nada!", r: "É assim mesmo: o acento espera a vogal. Aperte a vogal em seguida." }
      ],
      curiosidade: "A ordem QWERTY das letras foi criada para as máquinas de escrever do século 19 e continua até hoje."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF06CO08",
      tempo: T,
      abertura: [
        { fala: "Quem quer fazer as coisas no computador duas vezes mais rápido? Hoje vamos aprender os atalhos." },
        { acao: "No projetor: selecione uma frase, Ctrl + C, clique em outro lugar, Ctrl + V." },
        { fala: "E o mais salvador de todos: Ctrl + Z, que desfaz o último passo." }
      ],
      siglas: "Leia o “O que significa?”. Explique a área de transferência: um lugar escondido que guarda o que você copiou até colar.",
      onde: {
        pergunta: "No celular, como vocês copiam e colam?",
        fechamento: "Tocar e segurar mostra Copiar e Colar: o mesmo atalho, em botão. Copiar o código do PIX evita erro.",
        dica: "Mostre Alt + Tab trocando entre o portal e outra janela."
      },
      demonstracao: "Mostre a diferença entre copiar (o original fica) e recortar (o original sai) num texto.",
      atencao: [
        "Segurar a primeira tecla e só depois apertar a segunda: é o erro mais comum.",
        "No “Treine de verdade”, a palavra precisa ser colada exatamente: INFORMÁTICA, em maiúsculas."
      ],
      perguntas: [
        { p: "Copiei, mas não colou!", r: "Confira se o texto ficou azul (selecionado) antes do Ctrl + C." }
      ],
      curiosidade: "Copiar e colar foi inventado por Larry Tesler nos anos 1970, inspirado em recortar e colar papéis com tesoura e cola."
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
