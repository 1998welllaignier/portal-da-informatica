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
