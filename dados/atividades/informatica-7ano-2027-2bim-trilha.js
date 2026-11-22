/* ============================================================
   ATIVIDADES — Informática 7º ano — 2º bimestre de 2027 (Grafos e projetos) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const TRI = {
    vertices: [{ id: "E", rot: "Escola", x: 90, y: 260 }, { id: "P", rot: "Praça", x: 260, y: 80 }, { id: "M", rot: "Mercado", x: 430, y: 260 }],
    arestas: [["E", "P", 5], ["P", "M", 4], ["E", "M", 12]]
  };
  const BAIRRO = {
    vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "Pr", rot: "Praça", x: 260, y: 300 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
    arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "Pr", 4], ["Pr", "E", 4], ["C", "E", 9]]
  };
  const AMIGOS = {
    vertices: [{ id: "A", rot: "Ana", x: 200, y: 170 }, { id: "B", rot: "Bia", x: 70, y: 60 }, { id: "C", rot: "Caio", x: 70, y: 290 }, { id: "D", rot: "Davi", x: 350, y: 170 }, { id: "E", rot: "Eva", x: 470, y: 290 }],
    arestas: [["A", "B", 1], ["A", "C", 1], ["A", "D", 1], ["B", "C", 1], ["D", "E", 1]]
  };
  const ESCOLA = {
    vertices: [{ id: "Po", rot: "Portão", x: 70, y: 180 }, { id: "Pt", rot: "Pátio", x: 260, y: 180 }, { id: "Ca", rot: "Cantina", x: 260, y: 320 }, { id: "Bi", rot: "Biblioteca", x: 440, y: 180 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "Bi", 2]]
  };
  const CURIO = {
    vertices: [{ id: "Es", rot: "Escola", x: 70, y: 180 }, { id: "Pr", rot: "Praça", x: 260, y: 60 }, { id: "Fe", rot: "Feira", x: 260, y: 300 }, { id: "Ro", rot: "Rodoviária", x: 450, y: 300 }],
    arestas: [["Es", "Pr", 6], ["Es", "Fe", 9], ["Fe", "Ro", 5], ["Pr", "Fe", 4]]
  };

PORTAL.registrarAtividades("informatica-7ano-2027-2bim-trilha", {

  m1: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Ligue os lugares",
        enunciado: "<p>Clique num lugar e depois no outro, seguindo a tabela. Cada ligação é uma <strong>aresta</strong>.</p>",
        descricao: "Grafo com Escola, Praça e Mercado",
        explicacao: "3 ligações: Escola–Praça, Praça–Mercado e Escola–Mercado." }, TRI)
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · As partes do grafo",
        enunciado: "<p>Veja a tabela <strong>Parte do grafo</strong>.</p>",
        pares: [{ a: "Vértice", b: "Um ponto: um lugar" }, { a: "Aresta", b: "A linha: a rua" }, { a: "Peso", b: "O número na linha" }],
        explicacao: "Vértice = ponto. Aresta = linha. Peso = número." },
      { tipo: "escolha", titulo: "Passo 2 · O grau",
        perguntas: [{ p: "A Praça liga-se à Escola e ao Mercado. Quantas linhas chegam nela?", opcoes: ["2", "5"], certo: 0 }],
        explicacao: "2 linhas: o grau da Praça é 2." },
      { tipo: "memoria", titulo: "Passo 3 · Jogo da memória",
        pares: [{ a: "Grafo", b: "Pontos e linhas" }, { a: "Vértice", b: "Ponto" }, { a: "Aresta", b: "Linha" }],
        explicacao: "Grafo = pontos e linhas." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "as ruas são os vértices", opcoes: ["as ruas são os vértices", "as ruas são as arestas"], certo: "as ruas são as arestas" } }, { v: true }]
  },

  m2: {
    pratica: [
      Object.assign({ tipo: "grafo", titulo: "O caminho mais curto até a Escola", de: "C", para: "E", unidade: "minutos",
        enunciado: "<p>Clique na <strong>Casa</strong> e vá clicando até a <strong>Escola</strong>. Escolha o caminho de <strong>menor soma</strong>. Veja a tabela da apostila.</p>",
        descricao: "Grafo do bairro",
        explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 minutos." }, BAIRRO)
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Some",
        colunas: ["Conta", "Total"],
        linhas: [["3 + 2", { op: ["5", "6"], r: "5" }], ["4 + 4", { op: ["8", "9"], r: "8" }]],
        explicacao: "3 + 2 = 5. 4 + 4 = 8." },
      { tipo: "escolha", titulo: "Passo 2 · Qual é o mais curto?",
        perguntas: [{ p: "Qual total é o mais curto?", opcoes: ["5 minutos", "9 minutos"], certo: 0 }],
        explicacao: "O menor número é o mais curto: 5." },
      { tipo: "ordenar", titulo: "Passo 3 · Como achar",
        itens: ["Ver os caminhos", "Somar cada um", "Escolher o menor"],
        explicacao: "Ver, somar e escolher o menor." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "de maior soma", opcoes: ["de maior soma", "de menor soma"], certo: "de menor soma" } }, { v: true }]
  },

  m3: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Ligue as amizades", semPeso: true,
        enunciado: "<p>Clique em duas pessoas para ligar uma amizade, seguindo a tabela.</p>",
        descricao: "Grafo de amizades",
        explicacao: "Ana–Bia, Ana–Caio, Ana–Davi, Bia–Caio e Davi–Eva." }, AMIGOS)
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Quantos amigos?",
        enunciado: "<p>Veja a tabela <strong>Pessoa · Amigos · Grau</strong>.</p>",
        colunas: ["Pessoa", "Grau"],
        linhas: [["Ana", { op: ["1", "3"], r: "3" }], ["Eva", { op: ["1", "3"], r: "1" }]],
        explicacao: "Ana tem 3 amigos. Eva tem 1." },
      { tipo: "sinais", titulo: "Passo 2 · Aceitar ou não?",
        enunciado: "<p>Marque quem você pode aceitar na rede social.</p>",
        opcoes: [{ t: "Meu primo, que eu conheço", certo: true }, { t: "Meu colega de sala", certo: true }, { t: "Um desconhecido que a rede sugeriu", certo: false }],
        explicacao: "Só aceite quem você conhece de verdade." },
      { tipo: "ligar", titulo: "Passo 3 · Palavras",
        pares: [{ a: "Pessoa", b: "Ponto do grafo" }, { a: "Amizade", b: "Linha do grafo" }, { a: "Grau", b: "Quantos amigos" }],
        explicacao: "Pessoa = ponto. Amizade = linha. Grau = quantos amigos." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "A Eva tem mais amigos que a Ana", opcoes: ["A Eva tem mais amigos que a Ana", "A Ana tem mais amigos que a Eva"], certo: "A Ana tem mais amigos que a Eva" } }, { v: true }]
  },

  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Lista, tabela ou grafo?",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "T", rot: "🗂️ Tabela" }, { id: "G", rot: "🕸️ Grafo" }],
        itens: [{ t: "Fila da cantina", c: "L" }, { t: "Boletim", c: "T" }, { t: "Mapa da cidade", c: "G" }],
        explicacao: "Fila = lista. Boletim = tabela. Mapa = grafo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Como é cada uma?",
        pares: [{ a: "📝 Lista", b: "Itens em ordem" }, { a: "🗂️ Tabela", b: "Linhas e colunas" }, { a: "🕸️ Grafo", b: "Pontos e linhas" }],
        explicacao: "Lista = ordem. Tabela = linhas e colunas. Grafo = pontos e linhas." },
      { tipo: "memoria", titulo: "Passo 2 · Jogo da memória",
        pares: [{ a: "Playlist", b: "Lista" }, { a: "Contatos", b: "Tabela" }, { a: "Mapa", b: "Grafo" }],
        explicacao: "Playlist = lista. Contatos = tabela. Mapa = grafo." },
      { tipo: "escolha", titulo: "Passo 3 · Qual usar?",
        perguntas: [{ p: "Para guardar a ordem da fila, uso:", opcoes: ["Lista", "Grafo"], certo: 0 }],
        explicacao: "A ordem importa: lista." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "numa lista", opcoes: ["numa lista", "num grafo"], certo: "num grafo" } }, { v: true }]
  },

  m5: {
    pratica: [
      { tipo: "ordenar", titulo: "As etapas do plano",
        itens: ["Problema", "Ideia", "Tarefas"],
        explicacao: "Problema, ideia e tarefas." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Os papéis",
        enunciado: "<p>Veja a tabela <strong>Papel · O que faz</strong>.</p>",
        pares: [{ a: "🔎 Pesquisador", b: "Junta os dados" }, { a: "🛠️ Construtor", b: "Monta o grafo" }, { a: "🧪 Testador", b: "Confere se está certo" }],
        explicacao: "Cada papel tem uma tarefa." },
      { tipo: "sinais", titulo: "Passo 2 · Bons combinados",
        opcoes: [{ t: "Ouvir todos", certo: true }, { t: "Ajudar quem travou", certo: true }, { t: "Uma pessoa faz tudo sozinha", certo: false }],
        explicacao: "Ouvir todos e ajudar quem travou." },
      { tipo: "escolha", titulo: "Passo 3 · O começo",
        perguntas: [{ p: "Todo projeto começa com:", opcoes: ["Um plano", "A apresentação"], certo: 0 }],
        explicacao: "Primeiro o plano." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "uma pessoa faz tudo sozinha", opcoes: ["uma pessoa faz tudo sozinha", "cada pessoa tem um papel"], certo: "cada pessoa tem um papel" } }, { v: true }]
  },

  m6: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Construa o guia da escola",
        enunciado: "<p>Ligue os lugares da escola, seguindo a tabela.</p>",
        descricao: "Grafo da escola",
        explicacao: "Portão–Pátio, Pátio–Cantina e Pátio–Biblioteca." }, ESCOLA)
    ],
    basico: [
      Object.assign({ tipo: "grafo", titulo: "Passo 1 · Teste: do Portão até a Biblioteca", de: "Po", para: "Bi", unidade: "minutos",
        enunciado: "<p>Clique no <strong>Portão</strong>, depois no <strong>Pátio</strong> e na <strong>Biblioteca</strong>.</p>",
        descricao: "Grafo da escola",
        explicacao: "Portão → Pátio → Biblioteca = 1 + 2 = 3 minutos." }, ESCOLA),
      { tipo: "ordenar", titulo: "Passo 2 · Construir, testar e melhorar",
        itens: ["Construir", "Testar", "Melhorar"],
        explicacao: "Construir, testar e melhorar." },
      { tipo: "escolha", titulo: "Passo 3 · A apresentação",
        perguntas: [{ p: "Na apresentação, a equipe mostra:", opcoes: ["O que fez", "Nada"], certo: 0 }],
        explicacao: "A equipe mostra o problema, o que fez e como usar." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "Testar não serve para nada", opcoes: ["Testar não serve para nada", "Testar mostra os erros"], certo: "Testar mostra os erros" } }, { v: true }]
  },

  m7: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Ligue os lugares da cidade",
        enunciado: "<p>Siga a tabela de ligações.</p>",
        descricao: "Grafo com Escola, Praça, Feira e Rodoviária",
        explicacao: "Escola–Praça, Escola–Feira, Feira–Rodoviária e Praça–Feira." }, CURIO)
    ],
    basico: [
      Object.assign({ tipo: "grafo", titulo: "Passo 1 · Da Escola até a Rodoviária", de: "Es", para: "Ro", unidade: "minutos",
        descricao: "Grafo da cidade",
        explicacao: "Escola → Feira → Rodoviária = 9 + 5 = 14 minutos." }, CURIO),
      { tipo: "ligar", titulo: "Passo 2 · Do mapa para o grafo",
        pares: [{ a: "Lugar", b: "Ponto" }, { a: "Rua", b: "Linha" }, { a: "Tempo", b: "Número" }],
        explicacao: "Lugar = ponto. Rua = linha. Tempo = número." },
      { tipo: "escolha", titulo: "Passo 3 · A conta",
        perguntas: [{ p: "9 + 5 é:", opcoes: ["14", "20"], certo: 0 }],
        explicacao: "9 + 5 = 14." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "leva 20 minutos", opcoes: ["leva 20 minutos", "leva 14 minutos"], certo: "leva 14 minutos" } }]
  },

  m8: {
    pratica: [
      { tipo: "robo", titulo: "Saia do labirinto",
        enunciado: "<p>Leve o robô até a saída ⭐. Cuidado com o beco sem saída!</p>",
        grade: ["R.#", ".##", "..*"],
        solucao: [["D", 1], ["D", 1], ["R", 1], ["R", 1]],
        dicas: ["Desça 2 casas e vá 2 para a direita."],
        explicacao: "⬇️ ⬇️ ➡️ ➡️. A casa B1 é um beco sem saída." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Labirinto e grafo",
        pares: [{ a: "Corredor", b: "Linha" }, { a: "Cruzamento", b: "Ponto onde dá para escolher" }, { a: "Beco sem saída", b: "Ponto sem continuação" }],
        explicacao: "Corredor = linha. Cruzamento e beco = pontos." },
      { tipo: "escolha", titulo: "Passo 2 · Cheguei num beco!",
        perguntas: [{ p: "Cheguei num beco sem saída. O que eu faço?", opcoes: ["Volto e tento outro caminho", "Desisto"], certo: 0 }],
        explicacao: "Volte e tente outro caminho." },
      { tipo: "robo", titulo: "Passo 3 · Outro labirinto",
        grade: ["R..", "#.#", "#.*"],
        solucao: [["R", 1], ["D", 1], ["D", 1], ["R", 1]],
        dicas: ["➡️, ⬇️ ⬇️ e ➡️."],
        explicacao: "➡️ ⬇️ ⬇️ ➡️." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Todo corredor leva até a saída", opcoes: ["Todo corredor leva até a saída", "Alguns corredores são becos sem saída"], certo: "Alguns corredores são becos sem saída" } }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Grafo", pares: [{ a: "Vértice", b: "Ponto" }, { a: "Aresta", b: "Linha" }], explicacao: "Vértice = ponto. Aresta = linha." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Mais curto", perguntas: [{ p: "O mais curto é o de:", opcoes: ["Menor soma", "Maior soma"], certo: 0 }], explicacao: "Menor soma." },
      { tipo: "relembre", de: "m3" },
      { tipo: "sinais", de: "m3", titulo: "M3 · Aceitar?", opcoes: [{ t: "Quem eu conheço", certo: true }, { t: "Um desconhecido", certo: false }], explicacao: "Só quem você conhece." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", de: "m4", titulo: "M4 · Estruturas", categorias: [{ id: "L", rot: "Lista" }, { id: "G", rot: "Grafo" }], itens: [{ t: "Fila", c: "L" }, { t: "Mapa", c: "G" }], explicacao: "Fila = lista. Mapa = grafo." },
      { tipo: "relembre", de: "m5" },
      { tipo: "ordenar", de: "m5", titulo: "M5 · Plano", itens: ["Problema", "Ideia", "Tarefas"], explicacao: "Problema, ideia e tarefas." },
      { tipo: "relembre", de: "m6" },
      { tipo: "memoria", de: "m6", titulo: "M6 · Projeto", pares: [{ a: "Construir", b: "Montar" }, { a: "Testar", b: "Conferir" }], explicacao: "Construir = montar. Testar = conferir." },
      { tipo: "relembre", de: "m7" },
      { tipo: "ligar", de: "m7", titulo: "M7 · Cidade", pares: [{ a: "Lugar", b: "Ponto" }, { a: "Rua", b: "Linha" }], explicacao: "Lugar = ponto. Rua = linha." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Labirinto", perguntas: [{ p: "No beco sem saída, eu:", opcoes: ["Volto", "Desisto"], certo: 0 }], explicacao: "Volte e tente outro caminho." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-2bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria", "grafo"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Grafo", [{ p: "A linha do grafo se chama:", opcoes: ["Aresta", "Vértice"], certo: 0 }, { p: "O ponto do grafo se chama:", opcoes: ["Peso", "Vértice"], certo: 1 }]), pega("m1"),
    Q("m2", "Caminho mais curto", [{ p: "3 + 2 é:", opcoes: ["5", "6"], certo: 0 }, { p: "O mais curto é o de:", opcoes: ["Maior soma", "Menor soma"], certo: 1 }]), pega("m2"),
    Q("m3", "Amizades", [{ p: "Na rede social, aceito:", opcoes: ["Quem eu conheço", "Qualquer pessoa"], certo: 0 }, { p: "Grau é:", opcoes: ["Uma rua", "Quantos amigos"], certo: 1 }]), pega("m3"),
    Q("m4", "Estruturas", [{ p: "A fila da cantina é:", opcoes: ["Lista", "Grafo"], certo: 0 }, { p: "O mapa da cidade é:", opcoes: ["Lista", "Grafo"], certo: 1 }]), pega("m4"),
    Q("m5", "Planejar", [{ p: "O projeto começa com:", opcoes: ["Um plano", "A apresentação"], certo: 0 }, { p: "O testador:", opcoes: ["Junta os dados", "Confere se está certo"], certo: 1 }]), pega("m5"),
    Q("m6", "Construir", [{ p: "Depois de construir, eu:", opcoes: ["Testo", "Apago"], certo: 0 }, { p: "Na apresentação, a equipe mostra:", opcoes: ["Nada", "O que fez"], certo: 1 }]), pega("m6"),
    Q("m7", "Cidade", [{ p: "Cada lugar vira:", opcoes: ["Um ponto", "Uma linha"], certo: 0 }, { p: "9 + 5 é:", opcoes: ["20", "14"], certo: 1 }]), pega("m7"),
    Q("m8", "Labirinto", [{ p: "No beco sem saída, eu:", opcoes: ["Volto", "Desisto"], certo: 0 }, { p: "O corredor vira:", opcoes: ["Um ponto", "Uma linha"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 2: 2º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-2bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🚌 O motorista do ônibus escolar tem um mapa com as paradas e as ruas entre elas, todo rabiscado. Ele quer passar o mapa para o computador.</p><p>🤔 Como desenhar esse mapa de um jeito que o computador entenda? E como saber qual parada tem <b>mais ruas</b> chegando?</p>"},"m2":{"html":"<p>🚑 A ambulância precisa chegar ao hospital o mais rápido possível. Existe uma rua que vai <b>direto</b> até lá, mas ela é longa e cheia de buracos.</p><p>🤔 O caminho com <b>menos ruas</b> é sempre o mais rápido? Como o aplicativo de mapa decide?</p>"},"m3":{"html":"<p>📱 A rede social mostrou para a Lara: “Pessoas que você talvez conheça: <b>Eva</b>”. A Lara nunca falou com a Eva!</p><p>🤔 Como a rede social escolheu a Eva? E aceitar qualquer sugestão é seguro?</p>"},"m4":{"html":"<p>📒 O Caio anotou os contatos da turma: os nomes numa folha, os telefones em outra e os aniversários numa terceira. Na hora de ligar para a Bia, se perdeu todo.</p><p>🤔 Qual seria o jeito certo de guardar esses dados? Uma lista, uma tabela ou um grafo?</p>"},"m5":{"html":"<p>🗺️ Um aluno novo chegou na escola e passou o recreio inteiro procurando a Sala de Informática. Chegou atrasado e com vergonha.</p><p>🤔 Como a turma poderia ajudar todo aluno novo? E por onde começa um projeto, para não virar bagunça?</p>"},"m6":{"html":"<p>📲 O jogo preferido do Davi pediu <b>atualização</b> de novo, pela terceira vez no mês!</p><p>🤔 Os criadores do jogo erraram tanto assim? Ou existe um <b>ciclo</b> de construir, testar e melhorar que nunca acaba?</p>"},"m7":{"html":"<p>🧳 Um visitante desceu na rodoviária de Curionópolis e perguntou: “Qual é o caminho mais rápido até a feira?”. Cada pessoa ensinou um caminho diferente!</p><p>🤔 Como transformar a cidade num grafo para responder sem dúvida?</p>"},"m8":{"html":"<p>🌽 Na fazenda, fizeram um <b>labirinto de milho</b> para as crianças. O Gui entrou, virou para um lado, virou para o outro… e caiu num beco sem saída três vezes!</p><p>🤔 Existe um jeito esperto de sair de qualquer labirinto? Como os computadores fazem isso?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const passos = s => s.split(" ").map(x => [x[0], 1]);
  const G = (vs, as) => ({ vertices: vs.map(([id, rot, x, y]) => ({ id, rot, x, y })), arestas: as });

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["O mapa do celular mostra as esquinas como…", ["Pontos ligados por linhas", "Fotos"], "O computador guarda o mapa como <b>pontos ligados por linhas</b>."],
    ["Um aplicativo é…", ["Um programa do celular ou do computador", "Um cabo"], "Aplicativo é um <b>programa</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    Object.assign({ tipo: "grafo_montar", titulo: "🛠️ Na vida real: a rede da sala", semPeso: true,
      enunciado: "<p>Os computadores da sala ligam-se ao <b>Roteador</b>. Clique no Roteador e depois em cada computador para ligar.</p>",
      descricao: "Rede: Roteador ligado a 3 computadores", okMsg: "Rede montada! 🖧", explicacao: "Cada aparelho é um ponto; cada cabo é uma linha." },
      G([["R", "Roteador", 260, 180], ["P1", "PC 1", 80, 80], ["P2", "PC 2", 80, 290], ["P3", "PC 3", 440, 180]], [["R", "P1", 1], ["R", "P2", 1], ["R", "P3", 1]])),
    VIDA(["Cada computador da rede, no grafo, é um…", ["Vértice (ponto)", "Peso"], "Cada ponto é um <b>vértice</b>."],
      ["O número na linha (como “5 minutos”) é o…", ["Peso", "Vértice"], "O número na linha é o <b>peso</b>."])
  ];
  A.m2.aplicar = [
    { tipo: "sim_grafo", titulo: "🛠️ Na vida real: a ambulância até o hospital",
      enunciado: "<p>Saindo de <b>Casa</b>, clique nos lugares até o <b>Hospital</b>, pela <b>menor soma</b> de minutos.</p>",
      vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, feira: { nome: "Feira", ic: "🧺", x: 200, y: 45 }, ponte: { nome: "Ponte", ic: "🌉", x: 200, y: 195 }, hospital: { nome: "Hospital", ic: "🏥", x: 360, y: 120 } },
      arestas: [["casa", "feira", 2], ["feira", "hospital", 3], ["casa", "ponte", 4], ["ponte", "hospital", 4], ["casa", "hospital", 9]],
      inicio: "casa", fim: "hospital", menor: 5, solucao: ["casa", "feira", "hospital"], unidade: "min",
      dicas: ["Some cada caminho: pela Feira, pela Ponte e direto."], explicacao: "Casa → Feira → Hospital = 2 + 3 = 5 min. Direto são 9." },
    VIDA(["O caminho mais curto é o de…", ["Menor soma", "Menos linhas"], "O mais curto é o de <b>menor soma</b>."],
      ["Para saber quanto um caminho leva, você…", ["Soma os pesos", "Conta os pontos"], "Somamos os <b>pesos</b> das linhas."])
  ];
  A.m3.aplicar = [
    msg("🛠️ Na vida real: aceitar a sugestão?", "📱 Rede social", [["S", "✅ Aceito"], ["N", "❌ Não aceito"]],
      "Só aceite quem você <b>conhece de verdade</b>.",
      [["O seu primo, que você conhece", "S", "Conhece de verdade: pode aceitar."], ["Uma pessoa que você nunca viu", "N", "Não conhece: não aceite."], ["A sua colega de turma", "S", "Conhece: pode aceitar."]],
      "Rede segura! 🔒", "A rede sugere amigos dos seus amigos, mas só aceite quem você conhece de verdade."),
    VIDA(["Quem tem mais amigos tem o maior…", ["Grau", "Peso"], "Mais amigos = maior <b>grau</b>."],
      ["A rede social sugere…", ["Os amigos dos seus amigos", "Só pessoas famosas"], "Ela sugere os <b>amigos dos seus amigos</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: qual estrutura?", "🧠 Guardar os dados", [["L", "📝 Lista"], ["T", "🗂️ Tabela"], ["G", "🕸️ Grafo"]],
      "Para cada situação, qual estrutura serve?",
      [["A fila da cantina", "L", "Itens em ordem: lista."], ["O boletim com nome e nota", "T", "Várias informações: tabela."], ["O mapa da cidade", "G", "Pontos e linhas: grafo."]],
      "Muito bem! 🧠", "Lista: ordem. Tabela: várias informações. Grafo: ligações."),
    VIDA(["A playlist é uma…", ["Lista", "Grafo"], "Uma música depois da outra: <b>lista</b>."], ["Os contatos do celular são uma…", ["Tabela", "Lista"], "Cada contato tem várias informações: <b>tabela</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: quem faz o quê?", "👥 Equipe", [["P", "🔎 Pesquisador"], ["C", "🛠️ Construtor"], ["T", "🧪 Testador"]],
      "Para cada tarefa do Guia de Rotas, qual papel cuida dela?",
      [["Juntar os lugares e os tempos", "P", "Juntar dados é do pesquisador."], ["Montar o grafo", "C", "Montar é do construtor."], ["Conferir se o caminho está certo", "T", "Conferir é do testador."]],
      "Equipe afinada! 👥", "Cada pessoa tem um papel."),
    VIDA(["O primeiro passo do plano é…", ["O problema: o que queremos resolver", "As tarefas"], "1. Problema; 2. Ideia; 3. Tarefas."], ["Quem junta os dados?", ["🔎 O pesquisador", "🧪 O testador"], "O <b>pesquisador</b> junta os dados."])
  ];
  A.m6.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: fazer o guia",
      enunciado: "<p>Coloque os passos do projeto <b>na ordem</b>.</p>",
      etapas: [{ ic: "🛠️", t: "Construir: montar o grafo" }, { ic: "🧪", t: "Testar: conferir os caminhos" }, { ic: "🔁", t: "Melhorar: corrigir o que estava errado" }],
      okMsg: "Guia pronto! 🗺️", explicacao: "Construir → testar → melhorar." },
    VIDA(["Depois de construir, a equipe…", ["Testa", "Apaga tudo"], "Construir → <b>testar</b> → melhorar."], ["Depois de testar, a equipe…", ["Melhora: corrige o que estava errado", "Para de trabalhar"], "Construir → testar → <b>melhorar</b>."])
  ];
  A.m7.aplicar = [
    { tipo: "sim_grafo", titulo: "🛠️ Na vida real: da Escola à Rodoviária",
      enunciado: "<p>Saindo da <b>Escola</b>, clique nos lugares até a <b>Rodoviária</b>, pela <b>menor soma</b> (tempos de mentirinha).</p>",
      vertices: { escola: { nome: "Escola", ic: "🏫", x: 45, y: 120 }, praca: { nome: "Praça", ic: "🌳", x: 200, y: 45 }, feira: { nome: "Feira", ic: "🧺", x: 200, y: 195 }, rodo: { nome: "Rodoviária", ic: "🚌", x: 360, y: 120 } },
      arestas: [["escola", "praca", 6], ["escola", "feira", 9], ["feira", "rodo", 5], ["praca", "rodo", 10]],
      inicio: "escola", fim: "rodo", menor: 14, solucao: ["escola", "feira", "rodo"], unidade: "min",
      dicas: ["Some: pela Feira (9 + 5) e pela Praça (6 + 10)."], explicacao: "Escola → Feira → Rodoviária = 9 + 5 = 14 minutos." },
    VIDA(["Cada lugar da cidade, no grafo, é um…", ["Ponto (vértice)", "Peso"], "Cada lugar vira um <b>ponto</b>."], ["Escola → Feira → Rodoviária leva…", ["9 + 5 = 14 minutos", "6 minutos"], "Somando os pesos: 9 + 5 = <b>14</b>."])
  ];
  A.m8.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: o labirinto de milho", icone: "🧒",
      enunciado: "<p>Leve o Gui até a saída ⭐. Se cair num beco sem saída, volte e tente outro caminho.</p>",
      grade: ["R.#", ".##", "..*"], solucao: passos("D D R R"),
      dicas: ["Desça pela coluna A e depois vá para a direita."], explicacao: "⬇️ ⬇️ ➡️ ➡️. O corredor B1 é um beco sem saída." },
    VIDA(["Num beco sem saída, você…", ["Volta e tenta outro caminho", "Fica parado"], "Tentar e <b>voltar</b>."], ["Um beco sem saída é um ponto…", ["Sem continuação", "Onde dá para escolher"], "Beco sem saída: ponto <b>sem continuação</b>."])
  ];
})();
