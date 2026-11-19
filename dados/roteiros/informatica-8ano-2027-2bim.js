/* Roteiro da aula (só para o professor) — 8º ano, 2º bimestre de 2027 (Internet por dentro)
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
  PORTAL.registrarRoteiro("informatica-8ano-2027-2bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "🪪 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF08CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando vocês mandam uma foto pelo celular, ela viaja inteira até o amigo? Não: ela é cortada em pedacinhos, os pacotes." },
        { acao: "Escreva uma frase no quadro, corte em 4 pedaços numerados e entregue a 4 alunos em lugares diferentes da sala. Peça para trazerem até você por caminhos diferentes e monte a frase pelos números." },
        { fala: "Isso é a internet: os pacotes vão por caminhos diferentes, cada um com o endereço (IP) e o número, e o destino junta tudo na ordem." }
      ],
      onde: {
        pergunta: "Por que um vídeo às vezes trava e depois volta?",
        fechamento: "Alguns pacotes se atrasaram ou se perderam e foram enviados de novo.",
        dica: "Mostre o roteador da sala de informática: é por ele que passam os pacotes dos computadores da turma."
      },
      demonstracao: "Faça a prática no projetor: clique nas etapas do caminho do pacote, do celular até o aparelho do amigo.",
      atencao: [
        "Roteador × provedor: o roteador é o aparelho; o provedor é a empresa.",
        "A internet é uma rede de redes, e não “um lugar” ou “um computador”."
      ],
      perguntas: [
        { p: "O Wi-Fi é a internet?", r: "Não: o Wi-Fi é a rede sem fio da casa ou da escola, ligada à internet pelo roteador e pelo provedor." },
        { p: "Todo aparelho tem IP?", r: "Sim: todo aparelho ligado à rede recebe um endereço para receber os pacotes." }
      ],
      curiosidade: "Os pacotes de uma mesma mensagem podem atravessar países diferentes e, mesmo assim, chegar em menos de um segundo."
    },
    m2: {
      datas: "BNCC EF08CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quem sabe de cabeça o número de telefone da mãe? E quem só toca no nome “Mãe” na agenda?" },
        { fala: "Na internet é igual: o computador do site tem um número (o IP), mas nós digitamos o nome. Quem traduz é o DNS, a agenda da internet." },
        { acao: "Escreva no quadro portal.professorwell.com.br e separe as partes, da direita para a esquerda: .br, .com, professorwell, portal." }
      ],
      onde: {
        pergunta: "Já receberam um link com o nome de um site conhecido escrito um pouco diferente?",
        fechamento: "Golpistas trocam letras (um zero no lugar do O, uma letra a menos). Conferir o nome, letra por letra, protege.",
        dica: "Escreva no quadro um nome verdadeiro e um falso parecido e peça para acharem a diferença."
      },
      demonstracao: "No projetor, faça a prática: as cinco etapas, do nome digitado até a página na tela.",
      atencao: [
        "O IP do exemplo (203.0.113.25) é um número de exemplo, reservado para ensinar: não é o IP real do portal.",
        "Se o Wi-Fi está ligado e nenhum site abre pelo nome, pode ser o DNS."
      ],
      perguntas: [
        { p: "Dá para abrir um site digitando o IP?", r: "Em muitos casos, sim; mas o nome é muito mais fácil de lembrar, e um mesmo computador pode guardar vários sites." },
        { p: "Quem cuida dos nomes .br?", r: "O Registro.br, no Brasil." }
      ],
      curiosidade: "DNS é a sigla de Domain Name System, “Sistema de Nomes de Domínio”."
    },
    m3: {
      datas: "BNCC EF08CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "De onde vem a internet que chega ao Brasil de outros países? Do satélite?" },
        { fala: "A maior parte vem por cabos no fundo do mar, de fibra óptica, que levam os dados como pulsos de luz. E no Brasil o principal ponto de chegada é Fortaleza, na Praia do Futuro." },
        { acao: "Mostre um mapa-múndi e trace com o dedo um cabo saindo de Fortaleza para a Europa e outro para os Estados Unidos." }
      ],
      onde: {
        pergunta: "Onde ficam guardados os vídeos que vocês assistem?",
        fechamento: "Em data centers: prédios cheios de servidores, que nunca desligam e precisam de refrigeração.",
        dica: "Pergunte por que um computador esquenta quando fica muito tempo ligado: imagine milhares juntos."
      },
      demonstracao: "Faça a prática no projetor: o caminho de um vídeo de outro país até a tela.",
      atencao: [
        "Não dizer que “toda” a internet é por cabo: a maior parte dos dados entre continentes é por cabo; o satélite atende onde não chega cabo.",
        "Servidor é um computador; data center é o prédio cheio deles."
      ],
      perguntas: [
        { p: "E se um cabo submarino quebrar?", r: "Os dados passam por outros cabos, mas a internet da região pode ficar mais lenta até o conserto, feito por navios especiais." },
        { p: "Tem cabo submarino perto de Curionópolis?", r: "Não: o Pará fica longe dos pontos de chegada; os dados vêm por cabos em terra até aqui." }
      ],
      curiosidade: "A fibra óptica é um fio de vidro mais fino que um cabelo."
    },
    m4: {
      datas: "BNCC EF08CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se o celular de vocês caísse no rio hoje, as fotos sumiriam?" },
        { fala: "Depende: se estiverem na nuvem, não. A nuvem não fica no céu: são servidores de empresas, em data centers." },
        { acao: "No quadro, desenhe um celular e um prédio (data center) ligados por uma seta de ida e volta: sincronizar." }
      ],
      onde: {
        pergunta: "Quem já trocou de celular e recuperou as conversas?",
        fechamento: "Foi o backup na nuvem.",
        dica: "Aproveite para lembrar: no computador da escola, sempre sair da conta."
      },
      demonstracao: "Faça a prática no projetor: separe o que é só do aparelho e o que é da nuvem.",
      atencao: [
        "Reforce o cuidado com links abertos: qualquer pessoa que receber o link pode ver o arquivo.",
        "Verificação em duas etapas: senha + código no celular."
      ],
      perguntas: [
        { p: "A nuvem é de graça?", r: "Tem um espaço grátis limitado; para mais espaço, paga-se." },
        { p: "Se eu apagar o arquivo no celular, ele some da nuvem?", r: "Quando os aparelhos estão sincronizados, em geral sim: a mudança vale para todos. Por isso existe a lixeira da nuvem." }
      ],
      curiosidade: "A palavra “nuvem” vem do desenho que os técnicos usavam nos esquemas para representar “a internet lá fora”."
    },
    m5: {
      datas: "BNCC EF08CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quanto tempo uma pessoa leva para arrumar a sala sozinha? E quatro pessoas, cada uma com uma parte?" },
        { acao: "Peça a 4 voluntários para arrumarem 4 fileiras de cadeiras ao mesmo tempo e cronometre. Depois, um só arruma 2 fileiras e compare." },
        { fala: "Isso é paralelismo: o processador tem vários núcleos que trabalham ao mesmo tempo." }
      ],
      onde: {
        pergunta: "O que acontece quando todo mundo manda imprimir ao mesmo tempo?",
        fechamento: "Forma-se uma fila: os pedidos disputam a mesma impressora. Isso é concorrência.",
        dica: "Mostre no computador do professor a fila de impressão do Windows, se houver pedidos."
      },
      demonstracao: "Faça a prática no projetor: a tabela do tempo com 1, 4 e 8 núcleos.",
      atencao: [
        "Paralelismo = dividir o trabalho; concorrência = disputar o mesmo recurso.",
        "Nem tudo pode ser dividido: tarefas com dependência precisam esperar."
      ],
      perguntas: [
        { p: "Mais núcleos sempre deixa tudo mais rápido?", r: "Só quando o trabalho pode ser dividido. Se uma tarefa depende da outra, ela espera." }
      ],
      curiosidade: "Os celulares de hoje costumam ter processadores com vários núcleos, alguns para tarefas pesadas e outros para economizar bateria."
    },
    m6: {
      datas: "BNCC EF08CO04 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Vamos planejar juntos o aplicativo da nossa escola. Antes de programar, o que precisamos decidir?" },
        { fala: "Como guardar os dados: lista, fila, tabela ou grafo. Essa é a estrutura de dados." },
        { acao: "Faça no quadro a tabela: chamada → lista; impressão → fila; boletim → tabela; ônibus → grafo." }
      ],
      onde: {
        pergunta: "Que parte desse aplicativo vocês mais usariam?",
        fechamento: "Cada parte pede a estrutura certa: é isso que deixa o programa simples e rápido.",
        dica: "Pergunte qual estrutura o aplicativo de mapas usa (grafo) e qual a playlist usa (lista)."
      },
      demonstracao: "Faça a prática no projetor: classifique as quatro partes do aplicativo da Escola JK.",
      atencao: [
        "Fila é uma lista com regra: o primeiro que entra é o primeiro que sai.",
        "Tabela: linha = registro (um aluno); coluna = campo (nome, nota)."
      ],
      perguntas: [
        { p: "Dá para guardar tudo numa tabela?", r: "Até dá, mas ficaria mais difícil: o mapa, por exemplo, fica muito mais simples num grafo." }
      ],
      curiosidade: "Escolher a estrutura de dados é uma das primeiras decisões de quem cria um aplicativo."
    },
    m7: {
      datas: "Missão extra · BNCC EF08CO05 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando vocês pesquisam no buscador, quantos computadores respondem? Um só?" },
        { fala: "São milhares de servidores, em vários lugares, trabalhando juntos: um sistema distribuído." },
        { acao: "Divida a turma em grupos; cada grupo procura uma palavra numa página do livro. Junte as respostas: vários trabalhando como um só." }
      ],
      onde: {
        pergunta: "Já jogaram on-line com amigos de outra cidade?",
        fechamento: "Os servidores do jogo mandam a mesma partida para todos: é um sistema distribuído.",
        dica: "Compare com um time: se um jogador se machuca, entra o reserva (tolerância a falhas)."
      },
      demonstracao: "Faça a prática no projetor: o que é e o que não é sistema distribuído.",
      atencao: ["Sistema distribuído precisa de vários computadores ligados em rede."],
      perguntas: [
        { p: "Por que o site não cai quando um servidor quebra?", r: "Porque há cópias e outros servidores assumem o trabalho: tolerância a falhas." }
      ],
      curiosidade: "Os grandes buscadores guardam cópias das páginas em data centers espalhados pelo mundo."
    },
    m8: {
      datas: "Missão extra · BNCC EF08CO06 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "A propaganda diz “internet de 80 mega”. Um vídeo de 80 MB baixa em 1 segundo?" },
        { fala: "Não: 80 mega são 80 megabits por segundo, e o arquivo é medido em megabytes. Como 1 byte tem 8 bits, dividimos por 8: 10 MB por segundo." },
        { acao: "No quadro, faça a conta 80 ÷ 8 = 10 e depois 50 MB ÷ 10 = 5 segundos." }
      ],
      onde: {
        pergunta: "Quem joga on-line já viu o número do ping?",
        fechamento: "Ping é o tempo de ida e volta: quanto menor, menos lag.",
        dica: "Pergunte quem posta vídeos: postar é upload."
      },
      demonstracao: "Faça a prática no projetor: a tabela de Mbps para MB por segundo.",
      atencao: [
        "Bit × byte: b minúsculo (bits) na velocidade; B maiúsculo (bytes) no tamanho do arquivo.",
        "Download = baixar; upload = enviar."
      ],
      perguntas: [
        { p: "Por que o download real às vezes é menor que o do plano?", r: "Porque a internet é dividida entre os aparelhos da casa, o Wi-Fi perde força com a distância e os servidores também têm limite." }
      ],
      curiosidade: "Milissegundo é a milésima parte de um segundo: um ping de 35 ms é muito rápido."
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
