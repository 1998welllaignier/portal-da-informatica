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

      { tipo: "tabela", titulo: "Agora sem ajuda: escreva as passadas de [5, 2, 8, 1]",
        enunciado: "<p>Faça o método da bolha na cabeça (ou no rascunho) e digite como a lista fica <strong>no fim de cada passada</strong>. Separe os números com vírgula.</p>",
        colunas: ["Etapa", "Lista"],
        linhas: [["Original", "5, 2, 8, 1"], ["Passada 1", { r: "2, 5, 1, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }], ["Passada 2", { r: "2, 1, 5, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }], ["Passada 3", { r: "1, 2, 5, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }],
          ["Quantas trocas aconteceram na passada 1?", { r: "2", tipo: "num", w: 4, dica: "5 e 2 trocam; 5 e 8 ficam; 8 e 1 trocam." }]],
        dicas: ["Compare só dois vizinhos por vez: se o da esquerda for maior, troque.", "No fim de cada passada, o maior número que ainda falta vai para o final."],
        explicacao: "Passada 1: [2, 5, 1, 8] (2 trocas) · Passada 2: [2, 1, 5, 8] · Passada 3: [1, 2, 5, 8]. Lista ordenada!" }
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

      { tipo: "caminho", titulo: "Monte o Mapa da internet",
        enunciado: "<p>Monte o caminho que o seu pedido faz até o vídeo, do seu aparelho até a nuvem. Depois, coloque ao lado quem ajuda o navegador a achar o endereço do site.</p>",
        etapas: ["Celular ou computador", "Roteador", "Provedor", "Backbone ou cabo submarino", "Data center (nuvem)"], fixos: [0],
        extras: [{ rot: "Ao lado do caminho: quem traduz o nome do site no endereço IP para o navegador?", r: "DNS" }],
        distratores: ["Impressora", "Teclado"],
        dicas: ["O roteador é a saída da sua casa ou escola; o provedor é a empresa que leva a internet até lá.", "O backbone e os cabos submarinos levam o pedido para longe, até o prédio cheio de servidores."],
        explicacao: "Celular ou computador → roteador → provedor → backbone ou cabo submarino → data center (nuvem). Ao lado, o DNS (<em>Domain Name System</em>, Sistema de Nomes de Domínio) troca o nome do site pelo endereço IP. Impressora e teclado não fazem parte do caminho." }
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

      { tipo: "classificar", modo: "tabela", titulo: "Boa regra ou não faz sentido para a nossa sala?", colunaItem: "Regra", colunaResp: "B ou N",
        categorias: [{ id: "B", rot: "Boa regra" }, { id: "N", rot: "Não faz sentido" }],
        itens: [
          { t: "Usar só os programas e sites que o professor pediu.", c: "B" },
          { t: "Compartilhar a minha senha com a turma toda.", c: "N", why: "Senha é pessoal: quem sabe a sua senha pode agir no seu nome." },
          { t: "Não comer nem beber perto do computador.", c: "B" },
          { t: "Desligar o computador puxando o cabo da tomada.", c: "N", why: "Desligar assim pode estragar o computador e perder arquivos; o certo é Iniciar → Desligar." },
          { t: "Não mexer no computador nem nos arquivos dos colegas.", c: "B" },
          { t: "Chamar o professor quando o computador travar.", c: "B" }],
        dicas: ["Uma boa regra protege os computadores, os dados e os colegas."] },
      { tipo: "aberta", titulo: "Termos de uso da nossa sala de informática",
        enunciado: "<p><strong>Ao usar este computador, eu concordo em:</strong></p>",
        campos: [{ rot: "Regra 1", linhas: 1 }, { rot: "Regra 2", linhas: 1 }, { rot: "Regra 3", linhas: 1 }, { rot: "Regra 4", linhas: 1 }, { rot: "Regra 5", linhas: 1 }],
        criterios: ["Cada regra está em linguagem simples, que qualquer colega entende.", "As regras protegem os computadores, os dados ou os colegas."], minPalavras: 3,
        exemplo: "1. Usar só os programas pedidos. 2. Não comer perto do computador. 3. Não mexer nos arquivos dos colegas. 4. Não passar a minha senha para ninguém. 5. Desligar pelo botão Iniciar." }
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
      { tipo: "ligar", titulo: "Desafio do bimestre: ligue cada termo ao seu significado", porRodada: 6,
        enunciado: "<p>Um termo de cada tema do bimestre. Clique no termo e depois no significado dele.</p>",
        pares: [{ a: "Busca binária", b: "Olha o meio e descarta metade; só funciona em lista ordenada" }, { a: "Método da bolha", b: "Compara vizinhos e troca os que estão fora de ordem" }, { a: "DNS (Sistema de Nomes de Domínio)", b: "Traduz o nome do site no endereço IP" }, { a: "Paralelismo", b: "Partes de uma tarefa feitas ao mesmo tempo, em núcleos diferentes" }, { a: "LGPD (Lei Geral de Proteção de Dados)", b: "Lei brasileira que protege os dados pessoais" }, { a: "Pegada digital", b: "Rastro do que publicamos, curtimos e comentamos" }] }
    ],
    turbo: [
      { tipo: "pc", titulo: "Apresente para a turma", programa: "Projetor da sala",
        passos: ["Escolha a missão de que você mais gostou.", "Prepare duas ou três frases dizendo por quê.", "Apresente para a turma, no projetor."] }
    ]
  }
});
