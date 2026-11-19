/* ============================================================
   ATIVIDADES — Informática 6º ano — 2º bimestre de 2027 (Algoritmos) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-2027-2bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "Monte o algoritmo do suco",
        enunciado: "<p>Clique nos passos <strong>na ordem</strong>. Veja a tabela <strong>Algoritmo bom</strong>.</p>",
        etapas: [
          { ic: "🥤", t: "Pegar um copo" },
          { ic: "🥄", t: "Colocar 2 colheres de suco em pó" },
          { ic: "🚰", t: "Encher o copo com água" },
          { ic: "🌀", t: "Mexer com a colher" }],
        okMsg: "Muito bem! O algoritmo está na ordem. 🥤",
        explicacao: "Copo, pó, água e mexer: passos em ordem." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Preciso ou vago?",
        enunciado: "<p>Preciso diz exatamente o que fazer. Vago deixa dúvida.</p>",
        categorias: [{ id: "P", rot: "✅ Preciso" }, { id: "V", rot: "❓ Vago" }],
        itens: [{ t: "Coloque 2 colheres de açúcar", c: "P" }, { t: "Coloque um pouco de açúcar", c: "V" }, { t: "Faz o suco aí", c: "V" }, { t: "Pegue um copo", c: "P" }],
        explicacao: "“2 colheres” e “um copo” são precisos. “Um pouco” e “faz aí” são vagos." },
      { tipo: "memoria", titulo: "Passo 2 · Jogo da memória",
        pares: [{ a: "Algoritmo", b: "Passos em ordem" }, { a: "Instrução", b: "Cada passo" }, { a: "Programa", b: "Algoritmo para o computador" }],
        explicacao: "Algoritmo = passos em ordem. Instrução = cada passo. Programa = algoritmo para o computador." },
      { tipo: "escolha", titulo: "Passo 3 · O que é algoritmo?",
        perguntas: [
          { p: "Qual destes é um algoritmo?", opcoes: ["Uma receita com passos", "Uma foto de bolo"], certo: 0 },
          { p: "O computador adivinha o que queremos?", opcoes: ["Sim", "Não"], certo: 1 }],
        explicacao: "A receita tem passos em ordem. O computador não adivinha nada." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "adivinha o que queremos", opcoes: ["adivinha o que queremos", "não adivinha nada"], certo: "não adivinha nada" } }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "robo", titulo: "Leve o robô até a estrela",
        enunciado: "<p>Clique nas setas. <strong>Cada seta anda uma casa.</strong> Depois clique em <strong>▶ Executar</strong>.</p>",
        grade: ["R..", "##.", "..*"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1]],
        dicas: ["Vá 2 casas para a direita e desça 2."],
        explicacao: "➡️ ➡️ ⬇️ ⬇️: o robô chega na estrela." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Atravessar a rua",
        itens: ["Parar na calçada", "Olhar para os dois lados", "Atravessar na faixa"],
        explicacao: "Primeiro parar, depois olhar e só então atravessar." },
      { tipo: "ligar", titulo: "Passo 2 · O que a seta faz?",
        enunciado: "<p>Veja a tabela <strong>Comando · O que o robô faz</strong>.</p>",
        pares: [{ a: "➡️", b: "Anda uma casa para a direita" }, { a: "⬇️", b: "Anda uma casa para baixo" }, { a: "⬆️", b: "Anda uma casa para cima" }],
        explicacao: "Cada seta anda uma casa." },
      { tipo: "robo", titulo: "Passo 3 · Outro labirinto",
        enunciado: "<p>Leve o robô até a estrela. Cuidado com as paredes 🧱.</p>",
        grade: ["R#.", ".#.", "..*"],
        solucao: [["D", 1], ["D", 1], ["R", 1], ["R", 1]],
        dicas: ["Desça 2 casas e vá 2 para a direita."],
        explicacao: "⬇️ ⬇️ ➡️ ➡️." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "nunca muda o resultado", opcoes: ["nunca muda o resultado", "pode mudar o resultado"], certo: "pode mudar o resultado" } }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "robo", titulo: "Use o repita", compacto: 2,
        enunciado: "<p>Clique em ➡️ e use o <strong>+</strong> para repetir. Depois ⬇️ com o <strong>+</strong>. Só <strong>2 blocos</strong>!</p>",
        grade: ["R...", "...*"],
        solucao: [["R", 3], ["D", 1]],
        dicas: ["repita 3× ➡️ e depois ⬇️."],
        explicacao: "repita 3× ➡️ · ⬇️: 2 blocos." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Quantas vezes?",
        colunas: ["Sequência", "Com repetição"],
        linhas: [["➡️ ➡️ ➡️", { op: ["repita 2× ➡️", "repita 3× ➡️"], r: "repita 3× ➡️" }], ["👏 👏", { op: ["repita 2× 👏", "repita 4× 👏"], r: "repita 2× 👏" }]],
        explicacao: "Conte as setas ou as palmas: é o número do repita." },
      { tipo: "pintura", titulo: "Passo 2 · Pinte com repetição",
        forma: "quadrado", n: 4, pretos: [2, 4],
        regra: "<strong>Repita 4 vezes:</strong> desenhe um quadrado. O 2º e o 4º ficam pretos.",
        explicacao: "4 quadrados: o 2º e o 4º pretos." },
      { tipo: "escolha", titulo: "Passo 3 · Laço infinito",
        perguntas: [{ p: "A repetição que nunca para é:", opcoes: ["Laço infinito", "Sequência"], certo: 0 }],
        explicacao: "Laço infinito nunca para." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "para depois de 3 vezes", opcoes: ["para depois de 3 vezes", "nunca para"], certo: "nunca para" } }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "tabela", titulo: "Se… então… senão",
        enunciado: "<p>Veja a tabela <strong>Se · então · senão</strong>.</p>",
        colunas: ["Se…", "então…", "senão…"],
        linhas: [["estiver chovendo", { op: ["levo o guarda-chuva", "vou sem guarda-chuva"], r: "levo o guarda-chuva" }, { op: ["levo o guarda-chuva", "vou sem guarda-chuva"], r: "vou sem guarda-chuva" }],
          ["o sinal estiver verde", { op: ["atravesso", "espero"], r: "atravesso" }, { op: ["atravesso", "espero"], r: "espero" }]],
        explicacao: "Então = quando é sim. Senão = quando é não." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Boas condições",
        enunciado: "<p>Marque as perguntas de <strong>sim ou não</strong>.</p>",
        opcoes: [{ t: "Está chovendo?", certo: true }, { t: "O sinal está verde?", certo: true }, { t: "Que horas são?", certo: false }],
        explicacao: "“Que horas são?” não tem resposta sim ou não." },
      { tipo: "ligar", titulo: "Passo 2 · Sim ou não?",
        pares: [{ a: "Verdadeiro", b: "A resposta é sim" }, { a: "Falso", b: "A resposta é não" }, { a: "Condição", b: "Pergunta de sim ou não" }],
        explicacao: "Verdadeiro = sim. Falso = não." },
      { tipo: "escolha", titulo: "Passo 3 · O jogo",
        perguntas: [{ p: "Se pegar a moeda, ganha pontos. Pegou a moeda. Ganha pontos?", opcoes: ["Sim", "Não"], certo: 0 }],
        explicacao: "A condição é verdadeira: ganha pontos." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é uma boa condição", opcoes: ["é uma boa condição", "não é uma boa condição"], certo: "não é uma boa condição" } }, { v: true }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
    pratica: [
      { tipo: "classificar", titulo: "O bolo: entrada ou saída?",
        categorias: [{ id: "E", rot: "📥 Entrada" }, { id: "S", rot: "📤 Saída" }],
        itens: [{ t: "Farinha", c: "E" }, { t: "Ovos", c: "E" }, { t: "Leite", c: "E" }, { t: "O bolo pronto", c: "S" }],
        explicacao: "Ingredientes são entradas. O bolo pronto é a saída." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · As três partes",
        enunciado: "<p>Veja a tabela <strong>Pergunta · Nome</strong>.</p>",
        pares: [{ a: "Entradas", b: "Do que eu preciso" }, { a: "Processamento", b: "Misturar e assar" }, { a: "Saída", b: "O que eu quero no fim" }],
        explicacao: "Entradas → processamento → saída." },
      { tipo: "tabela", titulo: "Passo 2 · A calculadora",
        colunas: ["O que acontece", "É…"],
        linhas: [["Você digita o número 2", { op: ["entrada", "saída"], r: "entrada" }], ["Aparece 5 na tela", { op: ["entrada", "saída"], r: "saída" }]],
        explicacao: "O número digitado é entrada. O resultado na tela é saída." },
      { tipo: "memoria", titulo: "Passo 3 · Jogo da memória",
        pares: [{ a: "Entrada", b: "O que o algoritmo recebe" }, { a: "Saída", b: "O resultado" }, { a: "Processamento", b: "Os passos" }],
        explicacao: "Entrada = recebe. Processamento = passos. Saída = resultado." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é uma entrada", opcoes: ["é uma entrada", "é uma saída"], certo: "é uma saída" } }, { v: true }]
  },

  /* ======================= MISSÃO 6 ======================= */
  m6: {
    pratica: [
      { tipo: "classificar", titulo: "O aniversário em partes",
        categorias: [{ id: "D", rot: "🎈 Decoração" }, { id: "C", rot: "🍰 Comida" }],
        itens: [{ t: "Encher os balões", c: "D" }, { t: "Pendurar a faixa", c: "D" }, { t: "Comprar o bolo", c: "C" }, { t: "Fazer o suco", c: "C" }],
        explicacao: "Balões e faixa são decoração. Bolo e suco são comida." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Partes de arrumar o quarto",
        opcoes: [{ t: "Arrumar a cama", certo: true }, { t: "Guardar as roupas", certo: true }, { t: "Assistir à TV", certo: false }],
        explicacao: "Arrumar a cama e guardar as roupas são partes. Assistir à TV não é." },
      { tipo: "memoria", titulo: "Passo 2 · Jogo da memória",
        pares: [{ a: "Decompor", b: "Dividir em partes menores" }, { a: "Subproblema", b: "Cada parte menor" }, { a: "Equipe", b: "Grupo que divide o trabalho" }],
        explicacao: "Decompor = dividir. Subproblema = cada parte." },
      { tipo: "escolha", titulo: "Passo 3 · Fica fácil?",
        perguntas: [{ p: "Dividir o problema em partes deixa ele:", opcoes: ["Mais fácil", "Mais difícil"], certo: 0 }],
        explicacao: "Cada parte menor é mais fácil." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "mais difícil", opcoes: ["mais difícil", "mais fácil"], certo: "mais fácil" } }]
  },

  /* ======================= MISSÃO 7 ======================= */
  m7: {
    pratica: [
      { tipo: "robo", titulo: "Conserte o robô 🐞",
        enunciado: "<p>O programa tem um <strong>bug</strong>: uma seta a mais. Clique em <strong>▶ Executar</strong>, veja o erro e apague a seta a mais no <strong>✕</strong>.</p>",
        grade: ["R..*"],
        inicial: [["R", 1], ["R", 1], ["R", 1], ["R", 1]],
        solucao: [["R", 1], ["R", 1], ["R", 1]],
        dicas: ["A estrela está a 3 casas. Apague uma ➡️."],
        explicacao: "Eram 4 setas; o certo são 3." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Conserte a ordem",
        enunciado: "<p>Os passos estão fora de ordem. Arrume.</p>",
        itens: ["Pegar o copo", "Colocar o suco no copo", "Beber o suco"],
        explicacao: "Não dá para beber antes de colocar o suco." },
      { tipo: "ligar", titulo: "Passo 2 · Palavras do erro",
        pares: [{ a: "Bug", b: "Um erro no algoritmo" }, { a: "Depurar", b: "Achar e corrigir o erro" }, { a: "Testar", b: "Executar para ver se funciona" }],
        explicacao: "Bug = erro. Depurar = achar e corrigir." },
      { tipo: "escolha", titulo: "Passo 3 · Como consertar?",
        perguntas: [{ p: "Achei o passo errado. O que eu faço?", opcoes: ["Mudo só esse passo e testo", "Apago tudo"], certo: 0 }],
        explicacao: "Muda só o passo errado e testa de novo." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "mudar todos os passos de uma vez", opcoes: ["mudar todos os passos de uma vez", "mudar só o passo errado"], certo: "mudar só o passo errado" } }]
  },

  /* ======================= MISSÃO 8 ======================= */
  m8: {
    pratica: [
      { tipo: "robo", titulo: "🐢 Desenhe uma linha", icone: "🐢",
        enunciado: "<p>Passe por todos os pontos ⚪ e chegue na estrela.</p>",
        grade: ["Ro.", ".o.", ".o*"],
        solucao: [["R", 1], ["D", 1], ["D", 1], ["R", 1]],
        dicas: ["➡️, depois ⬇️ ⬇️ e ➡️."],
        explicacao: "➡️ ⬇️ ⬇️ ➡️: o rastro passou por todos os pontos." }
    ],
    basico: [
      { tipo: "robo", titulo: "Passo 1 · 🐢 O quadrado", icone: "🐢",
        enunciado: "<p>Passe por todos os pontos ⚪ e chegue na estrela. É um quadrado!</p>",
        grade: ["Roo", "*.o", "ooo"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["U", 1]],
        dicas: ["➡️ ➡️, ⬇️ ⬇️, ⬅️ ⬅️ e ⬆️."],
        explicacao: "➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬆️: os 4 lados." },
      { tipo: "ligar", titulo: "Passo 2 · As figuras",
        pares: [{ a: "Quadrado", b: "4 lados iguais" }, { a: "Retângulo", b: "2 lados compridos e 2 curtos" }, { a: "Tartaruga", b: "Anda e deixa o rastro" }],
        explicacao: "Quadrado: 4 lados iguais. Retângulo: 2 compridos e 2 curtos." },
      { tipo: "escolha", titulo: "Passo 3 · O rastro",
        perguntas: [{ p: "O rastro da tartaruga vira:", opcoes: ["Desenho", "Música"], certo: 0 }],
        explicacao: "O rastro vira desenho." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "O retângulo tem 4 lados iguais", opcoes: ["O retângulo tem 4 lados iguais", "O quadrado tem 4 lados iguais"], certo: "O quadrado tem 4 lados iguais" } }]
  },

  /* ======================= 🔁 REVISÃO ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Algoritmo", perguntas: [{ p: "Algoritmo é:", opcoes: ["Passos em ordem", "Um computador"], certo: 0 }], explicacao: "Algoritmo = passos em ordem." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ordenar", de: "m2", titulo: "M2 · Sequência", itens: ["Calçar a meia", "Calçar o tênis"], explicacao: "Primeiro a meia, depois o tênis." },
      { tipo: "relembre", de: "m3" },
      { tipo: "tabela", de: "m3", titulo: "M3 · Repetição", colunas: ["Sequência", "Com repetição"], linhas: [["⬇️ ⬇️ ⬇️", { op: ["repita 3× ⬇️", "repita 2× ⬇️"], r: "repita 3× ⬇️" }]], explicacao: "3 setas = repita 3×." },
      { tipo: "relembre", de: "m4" },
      { tipo: "sinais", de: "m4", titulo: "M4 · Boas condições", opcoes: [{ t: "A porta está aberta?", certo: true }, { t: "Qual é o seu nome?", certo: false }], explicacao: "Condição é pergunta de sim ou não." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Entrada ou saída?", categorias: [{ id: "E", rot: "📥 Entrada" }, { id: "S", rot: "📤 Saída" }], itens: [{ t: "Os ovos do bolo", c: "E" }, { t: "O bolo pronto", c: "S" }], explicacao: "Ovos entram; o bolo sai." },
      { tipo: "relembre", de: "m6" },
      { tipo: "ligar", de: "m6", titulo: "M6 · Decompor", pares: [{ a: "Decompor", b: "Dividir em partes" }, { a: "Subproblema", b: "Cada parte" }], explicacao: "Decompor = dividir." },
      { tipo: "relembre", de: "m7" },
      { tipo: "memoria", de: "m7", titulo: "M7 · Caça ao erro", pares: [{ a: "Bug", b: "Erro" }, { a: "Depurar", b: "Achar e corrigir" }], explicacao: "Bug = erro. Depurar = corrigir." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Tartaruga", perguntas: [{ p: "O quadrado tem:", opcoes: ["4 lados iguais", "3 lados"], certo: 0 }], explicacao: "Quadrado = 4 lados iguais." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-2bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Algoritmos", [{ p: "Algoritmo é:", opcoes: ["Passos em ordem", "Um jogo"], certo: 0 }, { p: "“Um pouco de açúcar” é:", opcoes: ["Preciso", "Vago"], certo: 1 }]), pega("m1"),
    Q("m2", "Sequência", [{ p: "Cada seta anda:", opcoes: ["Uma casa", "Duas casas"], certo: 0 }, { p: "Trocar a ordem pode mudar o resultado?", opcoes: ["Não", "Sim"], certo: 1 }]), pega("m2"),
    Q("m3", "Repetição", [{ p: "➡️ ➡️ é o mesmo que:", opcoes: ["repita 2× ➡️", "repita 3× ➡️"], certo: 0 }, { p: "A repetição que nunca para é:", opcoes: ["Sequência", "Laço infinito"], certo: 1 }]), pega("m3"),
    Q("m4", "Seleção", [{ p: "“Está chovendo?” é uma condição?", opcoes: ["Sim", "Não"], certo: 0 }, { p: "Quando a condição é falsa, faço o:", opcoes: ["então", "senão"], certo: 1 }]), pega("m4"),
    Q("m5", "Entradas e saídas", [{ p: "Os ovos do bolo são:", opcoes: ["Entrada", "Saída"], certo: 0 }, { p: "O resultado na tela é:", opcoes: ["Entrada", "Saída"], certo: 1 }]), pega("m5"),
    Q("m6", "Decompor", [{ p: "Decompor é:", opcoes: ["Dividir em partes", "Apagar tudo"], certo: 0 }, { p: "Cada parte se chama:", opcoes: ["Laço", "Subproblema"], certo: 1 }]), pega("m6"),
    Q("m7", "Caça ao erro", [{ p: "Bug é:", opcoes: ["Um erro", "Um robô"], certo: 0 }, { p: "Depurar é:", opcoes: ["Apagar tudo", "Achar e corrigir o erro"], certo: 1 }]), pega("m7"),
    Q("m8", "Tartaruga", [{ p: "O rastro da tartaruga vira:", opcoes: ["Desenho", "Música"], certo: 0 }, { p: "O quadrado tem:", opcoes: ["3 lados", "4 lados iguais"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
