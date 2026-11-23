/* Roteiro da aula (só para o professor) — 8º ano, 3º bimestre de 2027 (Redes sociais)
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
  PORTAL.registrarRoteiro("informatica-8ano-2027-3bim", {
    antes: [
      "🔊 Caixinha de som",
      "🖥️ Computadores ligados pelo Veyon",
      "🎬 Vídeo da missão aberto no computador do professor",
      "📇 Cartões com os códigos dos alunos",
      "🎮 Jogos da recreação definidos"
    ],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF08CO07 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quanto tempo leva para compartilhar uma foto? Um segundo. E para desfazer, se alguém já tirou print? Às vezes, nunca." },
        { acao: "Escreva as 4 perguntas no quadro: é verdade? É meu? Protege as pessoas? Protege você?" },
        { fala: "Hoje vamos treinar essas perguntas até virar costume, antes de cada compartilhamento." }
      ],
      onde: {
        pergunta: "Quem já postou foto com o uniforme da escola ou com a localização ligada?",
        fechamento: "Sem perceber, a foto conta onde você estuda, mora ou está agora. Dá para cortar, desligar a localização ou não postar.",
        dica: "Mostre (sem foto de aluno real) uma imagem inventada e peça para a turma achar o que expõe."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma o que pode, o que precisa de permissão e o que não se compartilha.",
      atencao: [
        "Não use fotos reais de alunos em nenhum exemplo.",
        "ECA Digital (Lei nº 15.211/2025), em vigor desde 17/03/2026: contas de até 16 anos ligadas a um responsável."
      ],
      perguntas: [
        { p: "Se eu apagar rápido, ninguém vê?", r: "Não dá para garantir: alguém pode ter tirado print ou repassado." },
        { p: "Posso postar foto do meu amigo se ele estiver bonito?", r: "Pergunte antes: a imagem é dele, e ele decide." }
      ],
      curiosidade: "A localização pode ficar guardada dentro do próprio arquivo da foto, e alguns aplicativos mostram onde ela foi tirada."
    },
    m2: {
      datas: "BNCC EF08CO11 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Se um desconhecido na rua dissesse que a escola vai fechar amanhã, vocês acreditariam? E se fosse o diretor?" },
        { fala: "A diferença é a fonte: de onde vem a informação." },
        { acao: "Escreva as 5 perguntas no quadro: quem, onde, quando, tem provas, outras fontes confirmam?" }
      ],
      onde: {
        pergunta: "Onde vocês pesquisam para os trabalhos da escola?",
        fechamento: "Sites com autor e data, de jornais, universidades ou do governo (.gov.br) são mais confiáveis do que correntes.",
        dica: "Mostre no projetor um site .gov.br e aponte o autor, a data e o órgão."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma as fontes mais e menos confiáveis.",
      atencao: [
        "Fonte confiável também pode errar; por isso a pergunta “outras fontes confirmam?”.",
        "Não citar veículos de imprensa como “bons” ou “ruins”: ensine as perguntas."
      ],
      perguntas: [
        { p: "Wikipédia é confiável?", r: "Pode ser um começo: veja as fontes no fim do artigo e confira nelas." },
        { p: "E vídeo de youtuber?", r: "Faça as mesmas perguntas: quem é, de onde tirou a informação, tem provas?" }
      ],
      curiosidade: "Notícias velhas costumam voltar a circular anos depois como se fossem novas; olhar a data desmonta muitas delas."
    },
    m3: {
      datas: "BNCC EF08CO11 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando o time de vocês perde, de quem é a culpa? Do juiz, claro! E quando o outro time perde?" },
        { fala: "Isso é viés de confirmação: acreditamos mais rápido no que combina com o que já pensamos. Todo mundo tem." },
        { acao: "Desenhe uma bolha no quadro com vários “eu concordo” dentro. Fora, escreva “opiniões diferentes”." }
      ],
      onde: {
        pergunta: "O feed de vocês mostra sempre o mesmo tipo de vídeo?",
        fechamento: "A rede mostra mais do mesmo. Parece que todo mundo pensa igual, mas é a bolha.",
        dica: "Peça para dois alunos compararem (só falando) que tipo de vídeo aparece no feed de cada um."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma o que é dentro e fora da bolha.",
      atencao: [
        "Exemplos neutros (futebol, gostos, jogos): evite temas políticos.",
        "Furar a bolha não é mudar de opinião: é conhecer os outros pontos de vista."
      ],
      perguntas: [
        { p: "Então eu tenho que seguir quem eu não gosto?", r: "Não precisa: basta ver de vez em quando fontes diferentes e o outro lado." },
        { p: "Professor também tem viés?", r: "Tem, todo mundo tem. Saber disso ajuda a conferir antes." }
      ],
      curiosidade: "O termo “bolha de filtro” ficou conhecido por um livro de 2011 que discutia como a internet personaliza o que cada um vê."
    },
    m4: {
      datas: "BNCC EF08CO09 · ♻️ reaproveita a M4 do 8º ano de 2026 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quem aqui já leu os termos de uso de algum aplicativo até o fim? E quem já clicou em “Li e aceito”?" },
        { fala: "Aquele clique é um contrato. Hoje vamos ler um termo de verdade, de um aplicativo inventado, e decidir com consciência." },
        { acao: "Escreva as 3 perguntas no quadro: que dados ele pega? Com quem compartilha? Consigo apagar a conta?" }
      ],
      onde: {
        pergunta: "Se o aplicativo é grátis, como a empresa paga os funcionários?",
        fechamento: "Com propaganda, escolhida a partir dos dados de quem usa.",
        dica: "Mostre o caminho Configurações → Sobre → Termos em algum aplicativo no projetor."
      },
      demonstracao: "No projetor, faça o começo do simulador do FotoTop: Personalizar os cookies em vez de Aceitar tudo.",
      atencao: [
        "Pela LGPD: saber, corrigir, pedir para apagar e retirar o consentimento.",
        "Até 12 anos: autorização de um dos pais ou responsáveis."
      ],
      perguntas: [
        { p: "Se eu não aceitar, não posso usar?", r: "Muitas vezes não. Por isso vale comparar e escolher aplicativos que pedem menos." },
        { p: "Cookie é vírus?", r: "Não: é um arquivo pequeno do site. Alguns são necessários; outros servem para anúncios." }
      ],
      curiosidade: "Já houve empresas que esconderam prêmios no meio dos termos de uso para testar se alguém lia até o fim."
    },
    m5: {
      datas: "BNCC EF08CO08 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Imaginem que vocês contratam alguém para trocar a lâmpada e ele pede a chave do cofre. Faz sentido?" },
        { fala: "Com os aplicativos é igual: a lanterna pedindo os contatos é a lâmpada pedindo o cofre." },
        { acao: "Escreva a pergunta de ouro no quadro: essa permissão faz sentido para o que o aplicativo faz?" }
      ],
      onde: {
        pergunta: "Quantos aplicativos no celular de vocês têm acesso à localização?",
        fechamento: "Em muitos Android, dá para ver em Configurações → Aplicativos → Permissões. Vale revisar.",
        dica: "Se puder, mostre no projetor (pelo seu celular) a tela de permissões de um aplicativo."
      },
      demonstracao: "No projetor, faça a prática: decida com a turma se cada pedido faz sentido.",
      atencao: [
        "O caminho das Configurações muda um pouco de celular para celular; o do iPhone é diferente.",
        "“Só durante o uso” costuma ser a melhor opção para localização."
      ],
      perguntas: [
        { p: "Se eu negar, o aplicativo para de funcionar?", r: "Só a parte que precisa daquilo. A lanterna funciona sem os contatos." },
        { p: "Por que um jogo quer o microfone?", r: "Alguns têm chat de voz. Se você não usa, pode negar." }
      ],
      curiosidade: "As versões mais novas do Android e do iPhone mostram um aviso na tela quando a câmera ou o microfone estão sendo usados."
    },
    m6: {
      datas: "BNCC EF08CO07 / EF08CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "Quando vocês andam na areia da praia, o que fica para trás? As pegadas. Na internet também." },
        { acao: "Desenhe duas pegadas no quadro: ✍️ ativa (o que você publica) e 👀 passiva (o que coletam sem você ver)." },
        { fala: "Essas pegadas ficam por muito tempo. Daqui a 10 anos, o que vão encontrar sobre vocês?" }
      ],
      onde: {
        pergunta: "Vocês já viram as “lembranças” que o aplicativo mostra, de anos atrás?",
        fechamento: "É a pegada digital: o que foi postado continua lá.",
        dica: "Pergunte: “eu teria orgulho disso daqui a 10 anos?” e deixe a frase no quadro."
      },
      demonstracao: "No projetor, faça a prática: separe com a turma a pegada ativa e a passiva.",
      atencao: [
        "Não pesquise o nome de alunos em sala.",
        "Pegada não é só risco: projetos e conquistas também viram pegada boa."
      ],
      perguntas: [
        { p: "Se eu apagar a conta, a pegada some?", r: "Parte some, mas prints, repasses e dados já coletados podem continuar." },
        { p: "Conta privada resolve tudo?", r: "Ajuda muito, mas quem você aceita ainda pode tirar print." }
      ],
      curiosidade: "Muitas empresas pesquisam o nome dos candidatos na internet antes de chamar para uma entrevista."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO11",
      tempo: T,
      abertura: [
        { fala: "No Brasil, existem jornalistas cujo trabalho é conferir se as notícias que se espalham são verdadeiras: as agências de checagem." },
        { acao: "Escreva os 5 passos no quadro: desconfiar, ler além do título, fonte original, data, outras fontes." },
        { fala: "Hoje vocês vão ser checadores por uma aula." }
      ],
      onde: {
        pergunta: "Já receberam uma foto de “acontecimento de hoje” que parecia estranha?",
        fechamento: "Fotos antigas e de outros lugares circulam como novas. A busca reversa de imagem mostra a origem.",
        dica: "Se puder, mostre no projetor uma busca reversa de imagem com uma foto qualquer de paisagem."
      },
      demonstracao: "No projetor, faça a prática: coloque os passos da checagem em ordem com a turma.",
      atencao: [
        "Agências citadas na apostila: Agência Lupa, Aos Fatos, Fato ou Fake (g1).",
        "Ao corrigir alguém no grupo, com calma e sem humilhar."
      ],
      perguntas: [
        { p: "E se nenhuma agência falou da notícia?", r: "Procure a fonte original e outras fontes; na dúvida, não repasse." },
        { p: "Como faço a busca reversa?", r: "Nos buscadores de imagem, envie a foto ou cole o endereço dela para ver onde já apareceu." }
      ],
      curiosidade: "Agências de checagem costumam classificar as notícias com selos como “falso”, “verdadeiro” ou “fora de contexto”."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF08CO11",
      tempo: T,
      abertura: [
        { fala: "Por que o feed de cada um é diferente, se a rede social é a mesma?" },
        { fala: "Porque um algoritmo de recomendação observa o que vocês curtem, assistem até o fim e pulam, e escolhe o que mostrar." },
        { acao: "Faça uma tabela no quadro: ❤️ curtir, ⏱️ assistir até o fim, ⏭️ pular, 🙅 não tenho interesse. Pergunte o que o algoritmo entende de cada um." }
      ],
      onde: {
        pergunta: "Quanto tempo vocês acham que passam por dia nos vídeos curtos?",
        fechamento: "O objetivo do algoritmo costuma ser fazer você ficar mais tempo. Você também pode treinar o algoritmo e fazer pausas.",
        dica: "Mostre onde fica o “Não tenho interesse” em algum aplicativo de vídeo, se puder."
      },
      demonstracao: "No projetor, faça a prática: ligue cada ação ao que o algoritmo entende.",
      atencao: [
        "Não é para assustar: é para os alunos saberem que podem influenciar o feed.",
        "Liga com a Missão 3 (bolhas)."
      ],
      perguntas: [
        { p: "O algoritmo escuta o que eu falo?", r: "O que ele mais usa é o que você faz no aplicativo: curtir, assistir, pular, comentar." },
        { p: "Tem como zerar o feed?", r: "Alguns aplicativos têm opção de reiniciar as recomendações nas configurações." }
      ],
      curiosidade: "Nos vídeos curtos, até poucos segundos a mais assistindo já são um sinal para o algoritmo."
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
