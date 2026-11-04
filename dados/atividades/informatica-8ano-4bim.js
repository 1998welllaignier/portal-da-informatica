/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-8ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    basico: [
      { tipo: "tabela", titulo: "Busca sequencial: procure o 31",
        enunciado: "<p>Lista ordenada: <strong>NÚMEROS = [3, 7, 12, 18, 25, 31, 40, 52]</strong></p>",
        linhas: [["Quantas comparações você fez, olhando um por um desde a posição 1, até achar o 31?", { r: "6", tipo: "num", w: 4 }]],
        dicas: ["Conte: 3 (1ª comparação), 7 (2ª), 12 (3ª)… até chegar no 31."],
        explicacao: "São 6 comparações: o 31 está na posição 6. Na busca sequencial, olhamos um por um." },

      { tipo: "busca_binaria", titulo: "Busca binária: procure o 31 jogando com as cartas",
        lista: [3, 7, 12, 18, 25, 31, 40, 52], alvo: 31,
        explicacao: "1ª tentativa: posições 1 a 8 → meio 4 → número 18 → o 31 é maior. 2ª tentativa: posições 5 a 8 → meio 6 → número 31 → igual! Só 2 tentativas, contra 6 da busca sequencial." },

      { tipo: "bolha", titulo: "Método da bolha: ordene [6, 3, 9, 1]", lista: [6, 3, 9, 1],
        enunciado: "<p>Compare os vizinhos destacados e decida: <strong>trocar</strong> (se estão fora de ordem) ou <strong>manter</strong>.</p>",
        explicacao: "1ª passada: [3, 6, 1, 9] · 2ª passada: [3, 1, 6, 9] · 3ª passada: [1, 3, 6, 9]. A cada passada, o maior número que ainda falta “sobe” para o final, como uma bolha." },

      { tipo: "pc", titulo: "No computador: as passadas no Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Digite, uma por linha: <strong>Original: 6, 3, 9, 1</strong>.", "Depois <strong>Passada 1:</strong>, <strong>Passada 2:</strong> e <strong>Passada 3:</strong> com as listas que você encontrou.", "Na última linha, escreva <strong>Lista ordenada:</strong> e a lista final.", "Com o texto na tela, chame o professor para conferir e carimbar."] }
    ],
    desafio: [
      { tipo: "adivinhe", titulo: "Jogo “Adivinhe o número” (o número secreto é 73)", min: 1, max: 100, secreto: 73,
        enunciado: "<p>Na apostila, um colega pensa no número e responde. Aqui, o computador responde por ele. O primeiro palpite é sempre o meio: (1 + 100) ÷ 2 = <strong>50</strong>.</p>",
        explicacao: "50 (maior) → 75 (menor) → 62 (maior) → 68 (maior) → 71 (maior) → 73 (acertou): 6 tentativas para um número de 1 a 100." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Quantas tentativas, no máximo, para achar um número de 1 a 1.000?",
        linhas: [["Tentativas no máximo", { r: "10", tipo: "num", w: 4 }]],
        dicas: ["A cada tentativa a lista cai pela metade: 1.000 → 500 → 250 → 125 → …", "Conte quantas vezes dá para dividir por 2 até sobrar 1 número."],
        explicacao: "No máximo 10 tentativas, porque 2 × 2 × … (10 vezes) = 1.024, que já é mais do que 1.000." },
      { tipo: "aberta", titulo: "Por que a busca binária não funciona em uma lista desordenada?", linhas: 3,
        criterios: ["Expliquei que, ao olhar o meio, descartamos uma metade inteira.", "Disse por que isso só é seguro quando a lista está em ordem."],
        exemplo: "Porque, ao comparar com o meio, a busca binária descarta uma metade inteira. Numa lista desordenada, o número procurado pode estar justamente na metade descartada." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "em qualquer lista, mesmo desordenada", opcoes: ["em qualquer lista, mesmo desordenada", "só em lista ordenada", "só em listas pequenas"], certo: "só em lista ordenada" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "apagar os itens repetidos", opcoes: ["apagar os itens repetidos", "colocar os itens em ordem", "embaralhar os itens"], certo: "colocar os itens em ordem" } }
    ]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    basico: [
      { tipo: "ordenar", titulo: "Você abriu um site de vídeos: numere o caminho do pedido",
        itens: ["Você digita o nome do site no navegador", "O DNS traduz o nome do site no endereço IP do servidor", "O pedido sai pelo roteador e chega ao provedor", "O pedido viaja pelo backbone (e às vezes por cabos submarinos) até o data center", "O servidor do data center envia o vídeo em pacotes de volta"],
        alternativas: [[0, 2, 1, 3, 4]],
        dicas: ["Tudo começa no navegador e termina com o vídeo voltando em pacotes.", "O backbone leva o pedido longe, até o data center."],
        explicacao: "Navegador → DNS (que troca o nome pelo IP) → roteador e provedor → backbone e cabos submarinos → data center, que devolve o vídeo em pacotes. A consulta ao DNS também passa pelo roteador e pelo provedor, por isso as duas ordens do meio são aceitas." },

      { tipo: "classificar", modo: "tabela", titulo: "Paralelismo, concorrência ou sistema distribuído?", colunaItem: "Situação", colunaResp: "P, C ou D",
        categorias: [{ id: "P", rot: "Paralelismo" }, { id: "C", rot: "Concorrência" }, { id: "D", rot: "Distribuído" }],
        itens: [
          { t: "Quatro colegas dividem as 40 questões de uma lista e cada um resolve 10 ao mesmo tempo.", c: "P", why: "Partes da tarefa feitas ao mesmo tempo." },
          { t: "19 alunos mandam imprimir ao mesmo tempo e a impressora forma uma fila.", c: "C", why: "Várias tarefas disputam o mesmo recurso." },
          { t: "Um aplicativo guarda as fotos dos usuários em servidores de vários países.", c: "D", why: "Dados espalhados em vários computadores." },
          { t: "O processador usa um núcleo para o jogo e outro para a música, ao mesmo tempo.", c: "P", why: "Núcleos diferentes trabalhando ao mesmo tempo." },
          { t: "Duas pessoas tentam comprar o último ingresso do show ao mesmo tempo e o sistema decide quem compra.", c: "C", why: "Disputa pelo mesmo recurso (o último ingresso)." }],
        dicas: ["Paralelo = ao mesmo tempo, dividindo o trabalho. Concorrência = disputa pelo mesmo recurso. Distribuído = espalhado em vários lugares."] },

      { tipo: "pc", titulo: "No computador: o Mapa da internet", programa: "Paint",
        passos: ["Desenhe o caminho: celular ou computador → roteador → provedor → backbone ou cabo submarino → data center (nuvem).", "Use setas e escreva o nome de cada parte.", "Desenhe o <strong>DNS</strong> ao lado do caminho, com uma seta para o navegador.", "Chame o professor para conferir o desenho e carimbar (não precisa salvar)."] }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Uma tarefa leva 60 minutos em um núcleo. Quanto tempo leva com mais núcleos?",
        colunas: ["Núcleos", "Tempo (minutos)"],
        linhas: [["1", "60 minutos"], ["2", { r: "30", tipo: "num", w: 6 }], ["3", { r: "20", tipo: "num", w: 6 }], ["6", { r: "10", tipo: "num", w: 6 }]],
        dicas: ["Divida os 60 minutos pelo número de núcleos."],
        explicacao: "60 ÷ 2 = 30 · 60 ÷ 3 = 20 · 60 ÷ 6 = 10. Isso vale quando a tarefa pode ser dividida em partes iguais." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "Por que as empresas guardam cópias dos mesmos arquivos em data centers de lugares diferentes?", linhas: 3,
        criterios: ["Falei do que acontece se um data center falhar.", "Usei a ideia de sistema distribuído."],
        exemplo: "Para os arquivos não sumirem se um data center ficar sem energia ou pegar fogo: outro data center, em outro lugar, tem a cópia e continua respondendo. Se só existisse um, as fotos ficariam inacessíveis ou poderiam ser perdidas." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "não são usados", opcoes: ["não são usados", "são usados e ligam os continentes", "foram desligados"], certo: "são usados e ligam os continentes" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "no próprio computador, sem usar a internet", opcoes: ["no próprio computador, sem usar a internet", "em servidores de data centers, pela internet", "num pen drive"], certo: "em servidores de data centers, pela internet" } }
    ]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "O aplicativo precisa dessa permissão para funcionar?", colunaItem: "Aplicativo e permissão pedida", colunaResp: "S ou N",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "Lanterna pede os seus contatos", c: "N", why: "Uma lanterna não precisa de contatos: desconfie." },
          { t: "Mapa com GPS pede a sua localização", c: "S", why: "Sem localização, o mapa não sabe onde você está." },
          { t: "Calculadora pede o microfone", c: "N" },
          { t: "Câmera de fotos pede a câmera", c: "S" },
          { t: "Jogo de cartas pede localização e contatos", c: "N" }],
        explicacao: "Pergunte sempre: ele precisa disso para funcionar? GPS (<em>Global Positioning System</em>, Sistema de Posicionamento Global) é o que descobre onde o aparelho está." },

      { tipo: "classificar", modo: "tabela", titulo: "Dado pessoal, dado sensível ou não é dado pessoal?", colunaItem: "Informação", colunaResp: "P, S ou N",
        categorias: [{ id: "P", rot: "Pessoal" }, { id: "S", rot: "Sensível" }, { id: "N", rot: "Não é" }],
        itens: [
          { t: "Nome completo", c: "P" }, { t: "Previsão do tempo da cidade", c: "N" },
          { t: "Impressão digital usada para desbloquear o celular", c: "S", why: "Biometria é dado sensível." },
          { t: "Endereço de casa", c: "P" }, { t: "Informação sobre uma doença", c: "S", why: "Saúde é dado sensível." },
          { t: "Resultado do jogo de futebol de ontem", c: "N" }],
        dicas: ["Dado sensível pede cuidado extra: saúde, religião, opinião política, origem étnica e biometria."] },

      { tipo: "tabela", titulo: "Faça as perguntas do checador",
        enunciado: "<p class=\"regra\">“URGENTE!!! Cientistas confirmam que celular carregando na tomada explode se for usado à noite. Compartilhe antes que apaguem!” <em>(sem autor, sem data, sem link de jornal)</em></p>",
        colunas: ["Pergunta do checador", "Resposta"],
        linhas: [
          ["Quem publicou?", { op: ["Não diz: é uma fonte anônima", "Um jornal conhecido", "Cientistas com nome e universidade"], r: "Não diz: é uma fonte anônima" }],
          ["Tem data?", { op: ["Não tem data", "Tem a data de hoje"], r: "Não tem data" }],
          ["O título é exagerado?", { op: ["Sim: “URGENTE!!!” e “compartilhe antes que apaguem”", "Não, é um título calmo"], r: "Sim: “URGENTE!!!” e “compartilhe antes que apaguem”" }]],
        explicacao: "Sem autor, sem data, sem outra fonte confirmando e com título exagerado: são quatro sinais de alerta." },
      { tipo: "aberta", titulo: "Você compartilharia essa mensagem? Por quê?", linhas: 2,
        criterios: ["Usei pelo menos um sinal das perguntas do checador para justificar."] },

      { tipo: "pc", titulo: "No computador: Termos de uso da nossa sala de informática", programa: "Bloco de Notas",
        passos: ["Na primeira linha, escreva: <em>Ao usar este computador, eu concordo em:</em>", "Depois, escreva <strong>5 regras</strong> numeradas, em linguagem simples.", "Chame o professor para conferir e carimbar."] }
    ],
    desafio: [
      { tipo: "info", titulo: "Termos de uso do aplicativo inventado FotoTop",
        html: "<p class=\"regra\">“O FotoTop coleta seu nome, e-mail, data de nascimento, fotos publicadas e localização. Podemos compartilhar esses dados com empresas parceiras de publicidade. Você pode apagar sua conta a qualquer momento em Configurações. Uso permitido a partir de 13 anos.”</p>" },
      { tipo: "sinais", titulo: "a) Quais dados o FotoTop coleta?",
        opcoes: [{ t: "Nome", certo: true }, { t: "E-mail", certo: true }, { t: "Data de nascimento", certo: true }, { t: "Fotos publicadas", certo: true }, { t: "Localização", certo: true },
          { t: "CPF", certo: false, why: "O trecho não fala de CPF." }, { t: "Lista de contatos", certo: false, why: "O trecho não fala de contatos." }] },
      { tipo: "escolha", titulo: "b), c) e d) Leia de novo e responda",
        perguntas: [
          { p: "b) Com quem ele pode compartilhar os dados?", opcoes: ["Com empresas parceiras de publicidade", "Com ninguém", "Só com a escola"], certo: 0 },
          { p: "c) É possível apagar a conta? Onde?", opcoes: ["Sim, em Configurações", "Não, nunca", "Só mandando carta"], certo: 0 },
          { p: "d) Qual é a idade mínima?", opcoes: ["13 anos", "10 anos", "18 anos"], certo: 0 }],
        explicacao: "Ler os termos de uso mostra o que você está aceitando antes de clicar em “Aceito”." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "O que é pegada digital? Dê um exemplo de publicação que poderia atrapalhar alguém daqui a 5 anos.", linhas: 3,
        criterios: ["Expliquei que é o rastro do que publicamos, curtimos e comentamos.", "Dei um exemplo concreto e disse por que atrapalharia."] }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "precisa", opcoes: ["precisa", "não precisa"], certo: "não precisa" } },
      { v: true },
      { v: false, corrigir: { trecho: "é sempre verdadeira", opcoes: ["é sempre verdadeira", "pode ser falsa"], certo: "pode ser falsa" } },
      { v: true }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "autoavaliacao", titulo: "Folheie a apostila impressa: quais missões já têm o carimbo do Básico?",
        itens: ["🗂️ Missão 1 – Listas: buscar e ordenar", "☁️ Missão 2 – Internet por dentro: nuvem e paralelismo", "🔍 Missão 3 – Dados pessoais e informação confiável"] },
      { tipo: "info", titulo: "Faltou algum carimbo?", html: "<p>Se faltar algum carimbo (por exemplo, porque você faltou à aula), volte à missão agora, faça o Básico e peça o carimbo ao professor.</p>" },
      { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
        campos: [{ rot: "🗂️ Listas, busca e ordenação", linhas: 2 }, { rot: "☁️ Internet, nuvem e paralelismo", linhas: 2 }, { rot: "🔍 Dados pessoais e informação confiável", linhas: 2 }],
        criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."], minPalavras: 4 }
    ],
    desafio: [
      { tipo: "pc", titulo: "No computador: digite as suas três frases", programa: "Bloco de Notas",
        passos: ["Digite as três frases no Bloco de Notas.", "Confira letra maiúscula, acentos e pontuação.", "Mostre ao professor."] }
    ],
    turbo: [
      { tipo: "pc", titulo: "Apresente para a turma", programa: "Projetor da sala",
        passos: ["Escolha a missão de que você mais gostou.", "Prepare duas ou três frases dizendo por quê.", "Apresente para a turma, no projetor."] }
    ]
  }
});
