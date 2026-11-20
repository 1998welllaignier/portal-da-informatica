/* Roteiro da aula (só para o professor) — 7º ano, 4º bimestre de 2027 (Criar e cuidar)
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
  PORTAL.registrarRoteiro("informatica-7ano-2027-4bim", {
    antes: ["🔊 Caixinha de som", "🖥️ Computadores ligados pelo Veyon", "🎬 Vídeo da missão aberto no computador do professor", "🪪 Cartões com os códigos dos alunos", "🎮 Jogos da recreação definidos", "📱 Para as aulas do projeto (M3 a M6): celulares ou câmera da escola e um editor de vídeo instalado nos computadores (confira antes)"],
    m1: {
      datas: "1ª aula do bimestre · BNCC EF07CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "No 6º ano vocês viram que celular no lixo comum vira lixo eletrônico. Mas para onde ele vai depois?" },
        { fala: "Segundo a ONU, em 2022 o mundo produziu 62 milhões de toneladas de lixo eletrônico, e menos de um quarto foi reciclado do jeito certo." },
        { acao: "Escreva no quadro os quatro destinos: lixo comum, queimar, gaveta, ponto de coleta." }
      ],
      onde: { pergunta: "O que a família de vocês faz com pilhas e celulares velhos?", fechamento: "O certo é o ponto de coleta: pela logística reversa, lojas e fabricantes recolhem e mandam para a reciclagem.", dica: "Se a escola ou o município tiver um ponto de coleta, mostre onde fica." },
      demonstracao: "No projetor, faça a prática: o que acontece em cada destino?",
      atencao: ["Política Nacional de Resíduos Sólidos: Lei nº 12.305/2010; os eletroeletrônicos têm logística reversa regulamentada pelo Decreto nº 10.240/2020.", "Lembre: antes de doar, apagar os dados e tirar o chip e o cartão."],
      perguntas: [{ p: "Onde fica um ponto de coleta?", r: "Algumas lojas de eletrônicos e de celular recebem; a associação ABREE tem um site para achar o ponto mais próximo." }, { p: "Guardar na gaveta polui?", r: "Não polui, mas os materiais ficam parados sem serem reaproveitados." }],
      curiosidade: "O relatório da ONU Global E-waste Monitor 2024 calculou 62 milhões de toneladas de lixo eletrônico no mundo em 2022."
    },
    m2: {
      datas: "BNCC EF07CO10 · datas pelo calendário da SEMED 2027",
      tempo: T,
      abertura: [
        { fala: "O que tem dentro de um celular? Será que tem ouro?" },
        { acao: "Mostre a tabela das partes e materiais. Se tiver um aparelho velho e seguro (sem bateria), mostre a placa." },
        { fala: "Aqui em Curionópolis fica Serra Pelada, famosa pelo garimpo de ouro nos anos 1980." }
      ],
      onde: { pergunta: "Alguém já viu um celular com a bateria inchada?", fechamento: "Bateria estufada pode pegar fogo: parar de usar e levar a um ponto de coleta ou a uma assistência.", dica: "Nunca abra baterias em sala." },
      demonstracao: "No projetor, faça a prática: em que parte do celular está cada material?",
      atencao: ["Não desmonte celulares com bateria na sala.", "Reciclar = mineração urbana: tirar metais do lixo em vez de abrir uma mina nova."],
      perguntas: [{ p: "Tem muito ouro no celular?", r: "Muito pouco em cada um; mas, somando milhões de aparelhos, vale reciclar." }, { p: "Por que a bateria incha?", r: "Com o tempo ou com defeito, ela pode soltar gases por dentro; por isso é sinal de perigo." }],
      curiosidade: "Na região de Carajás, no Pará, há mineração de cobre e de ouro, metais usados também nos circuitos dos aparelhos."
    },
    m3: {
      datas: "BNCC EF07CO11 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "O projeto do bimestre: um vídeo ou um podcast de até 1 minuto sobre cuidar do planeta." },
        { acao: "Forme as equipes (3 a 4) e distribua as funções: roteirista, narrador, câmera e editor." },
        { fala: "Hoje é só o roteiro: o que aparece, o que se fala e o tempo de cada cena." }
      ],
      onde: { pergunta: "Que mensagem sobre o lixo eletrônico vocês querem passar?", fechamento: "Uma ideia só, clara, em 1 minuto.", dica: "Combine as regras: nenhum rosto sem autorização; música e imagens próprias ou livres, com crédito." },
      demonstracao: "No projetor, mostre o roteiro de exemplo e um storyboard desenhado no quadro.",
      atencao: ["Cada membro com uma função.", "Guarde os roteiros (foto ou arquivo) para a próxima aula."],
      perguntas: [{ p: "Pode ser desenho animado?", r: "Pode: desenhos filmados ou fotos em sequência também viram vídeo." }, { p: "Pode aparecer o rosto?", r: "Só com autorização (e dos responsáveis); dá para filmar só as mãos e os objetos." }],
      curiosidade: "Filmes e animações costumam ser planejados primeiro em storyboard, quadrinho por quadrinho."
    },
    m4: {
      datas: "BNCC EF07CO11 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "Hoje é dia de gravar e montar. Lembrem: celular deitado, luz de frente, lugar silencioso." },
        { acao: "Escreva no quadro os passos do editor: importar → ordenar → cortar → texto e som → exportar." },
        { fala: "Gravem cada cena separada: se errar, regravam só aquela." }
      ],
      onde: { pergunta: "Onde na escola tem um lugar silencioso para gravar?", fechamento: "Combinem os lugares para as equipes não se atrapalharem.", dica: "Salve com nome bom: 2027-turma-equipe-tema.mp4." },
      demonstracao: "No projetor, mostre no editor como importar, cortar e exportar um trecho curto.",
      atencao: ["Confira antes da aula se o editor está instalado e se os celulares ou câmeras estão carregados.", "Os arquivos ficam numa pasta com o nome da equipe."],
      perguntas: [{ p: "E se não der tempo de terminar?", r: "Salvem o projeto do editor e continuem na próxima aula." }, { p: "Posso usar música famosa?", r: "Só música livre, com crédito; ou criem um som próprio." }],
      curiosidade: "Muitos vídeos são gravados fora de ordem e só ficam na ordem certa na hora da edição."
    },
    m5: {
      datas: "BNCC EF07CO11 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "O vídeo ficou pronto. Agora vamos registrar como foi feito: a ficha técnica." },
        { acao: "Escreva no quadro as partes da ficha: título, equipe e funções, ferramentas, créditos, o que aprendemos." },
        { fala: "E antes de publicar, o checklist: autorização, nenhum dado pessoal, créditos, lugar seguro." }
      ],
      onde: { pergunta: "Onde vocês já viram créditos?", fechamento: "No fim dos filmes: todo trabalho mostra quem fez e de onde vieram as músicas e imagens.", dica: "Publicação só em lugar seguro: o portal da turma ou a mostra da escola." },
      demonstracao: "No projetor, faça a prática: pode publicar?",
      atencao: ["Só o primeiro nome dos alunos na ficha.", "Recolha as autorizações de imagem antes de qualquer publicação."],
      perguntas: [{ p: "Podemos postar nas nossas redes?", r: "Só com a autorização de todos que aparecem e dos responsáveis; o combinado da turma é a mostra e o portal." }, { p: "O que é CC BY?", r: "Uma licença: outros podem usar o vídeo, desde que deem o crédito à equipe." }],
      curiosidade: "As licenças Creative Commons foram criadas para que os autores pudessem liberar as obras com regras simples."
    },
    m6: {
      datas: "BNCC EF07CO11 · datas pelo calendário da SEMED 2027",
      tempo: TP,
      abertura: [
        { fala: "Hoje é a mostra! Cada equipe: título e tema, o vídeo e uma coisa que aprenderam." },
        { acao: "Escreva a rubrica no quadro: mensagem, qualidade, tempo, créditos, segurança." },
        { fala: "Plateia: silêncio durante o vídeo, aplausos no fim, feedback com algo bom + uma sugestão." }
      ],
      onde: { pergunta: "Para quem mais vocês gostariam de mostrar o vídeo?", fechamento: "Com as autorizações, o vídeo pode ir para a mostra da escola.", dica: "Se possível, convide outra turma para assistir." },
      demonstracao: "Projete os vídeos das equipes pela ordem combinada.",
      atencao: ["Controle o tempo: 2 minutos por equipe.", "Feedback sempre com respeito."],
      perguntas: [{ p: "E se o arquivo não abrir?", r: "Tenha um computador de reserva e peça o arquivo .mp4 exportado com antecedência." }, { p: "Tem nota?", r: "A missão no portal vale como as outras; a rubrica serve para o feedback." }],
      curiosidade: "Existem festivais só de vídeos de até 1 minuto, como o Festival do Minuto, no Brasil."
    },
    m7: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO11",
      tempo: T,
      abertura: [
        { fala: "Como o computador guarda uma foto se ele só entende números?" },
        { acao: "Desenhe uma grade de quadradinhos no quadro e pinte alguns: cada quadradinho é um pixel." },
        { fala: "Cada pixel guarda três números: vermelho, verde e azul, de 0 a 255." }
      ],
      onde: { pergunta: "Quantos megapixels tem a câmera do celular de vocês?", fechamento: "Mais pixels = mais detalhes e arquivo maior.", dica: "Dê um zoom grande numa foto no projetor para mostrar os pixels." },
      demonstracao: "No projetor, faça a prática: ligue cada cor aos seus números RGB.",
      atencao: ["4000 × 3000 = 12 milhões de pixels (12 megapixels).", "Música comum: 44.100 amostras por segundo."],
      perguntas: [{ p: "Por que 255?", r: "Porque cada cor usa 1 byte (8 bits), que vai de 0 a 255." }, { p: "Mais megapixels é sempre melhor?", r: "Dá mais detalhes, mas a lente e a luz também importam; e o arquivo fica maior." }],
      curiosidade: "Com 256 tons de vermelho, de verde e de azul, o RGB forma mais de 16 milhões de cores."
    },
    m8: {
      datas: "⭐ Extra (só onde sobrar aula) · BNCC EF07CO11",
      tempo: T,
      abertura: [
        { fala: "Todo site que vocês abrem foi escrito numa linguagem. Qual?" },
        { acao: "Escreva no quadro: <h1>, <p>, <img>, <a> e o que cada uma faz." },
        { fala: "Tag que abre precisa fechar: <p> abre, </p> fecha." }
      ],
      onde: { pergunta: "Já viram o código de uma página?", fechamento: "Botão direito → Exibir código-fonte: lá está o HTML.", dica: "Se der tempo, abra o Bloco de Notas, escreva 4 linhas de HTML, salve como pagina.html e abra no navegador." },
      demonstracao: "No projetor, faça a prática: ligue cada tag ao que ela faz.",
      atencao: ["Imagem sempre com texto alternativo (alt).", "Se for publicar uma página, nenhum dado pessoal."],
      perguntas: [{ p: "HTML é programação?", r: "É uma linguagem de marcação: diz o que cada parte da página é; a programação faz a página reagir." }, { p: "Preciso de internet para testar?", r: "Não: o arquivo .html abre direto no navegador." }],
      curiosidade: "O HTML foi criado por Tim Berners-Lee, o mesmo criador da World Wide Web, no começo dos anos 1990."
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
