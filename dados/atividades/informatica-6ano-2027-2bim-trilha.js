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

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026): o mesmo ❓ gancho da turma, "O que você já sabe?" na M1
   e o 🛠️ "Onde eu uso isso?" prático em versão calma (o mesmo jogo, sem meta de blocos, + 2 perguntas
   com 2 opções). Tudo cobra só o que o Para começar da Trilha explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-2bim-trilha"]; if (!A) return;
  const E = {"m1": {"gancho": {"html": "<p>🧁 A vó da Lia mandou a receita do bolo por áudio: “bota a farinha, os ovos, mistura e assa”. A Lia fez tudo… e o bolo saiu <b>solado</b>, duro e baixinho.</p><p>🤔 O que faltou na receita da vó? Uma receita pode ser “vaga” demais?</p>"}, "aplicar": [{"tipo": "rota", "titulo": "🛠️ Na vida real: ensine o primo a chegar à escola", "enunciado": "<p>O seu primo chegou de outra cidade e vai sozinho para a escola amanhã. Monte o algoritmo do caminho: clique nos passos <b>na ordem</b>.</p>", "etapas": [{"ic": "🏠", "t": "Sair de casa e fechar o portão"}, {"ic": "➡️", "t": "Virar à direita na calçada", "dica": "Primeiro ele sai de casa; depois escolhe para que lado ir."}, {"ic": "🚶", "t": "Andar até a padaria da esquina"}, {"ic": "⬅️", "t": "Virar à esquerda na padaria"}, {"ic": "🏫", "t": "Andar até o portão da escola e entrar", "dica": "Chegar à escola é o resultado: fica no fim."}], "okMsg": "Algoritmo claro e preciso: qualquer pessoa que seguir chega à escola! 🏫", "explicacao": "Começo (sair de casa), meio (virar e andar) e fim (chegar à escola). Cada passo diz exatamente o que fazer: é um algoritmo bom."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "O manual de montagem de um brinquedo, com os passos numerados, é…", "opcoes": ["Um algoritmo", "Um desenho"], "certo": 0, "why": "Passos em ordem para montar o brinquedo: é um <b>algoritmo</b>."}, {"p": "“Faz o suco aí.” Por que essa instrução é ruim?", "opcoes": ["É vaga: não diz exatamente o que fazer", "É comprida demais"], "certo": 0, "why": "Uma boa instrução é <b>clara e precisa</b>: diz exatamente o que fazer."}]}], "lembra": [{"tipo": "escolha", "titulo": "🔍 O que você já sabe?", "enunciado": "<p>Começou o 2º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉</p>", "perguntas": [{"p": "Uma <b>receita de bolo</b>, com os passos numerados, é um exemplo de…", "opcoes": ["Algoritmo", "Hardware"], "certo": 0, "why": "A receita tem passos em ordem para chegar ao bolo: é um <b>algoritmo</b>."}, {"p": "O computador <b>adivinha</b> o que você quer?", "opcoes": ["Não: ele faz exatamente o que mandamos", "Sim, sempre"], "certo": 0, "why": "O computador não adivinha nada: faz <b>exatamente</b> o que mandamos, do jeito que mandamos."}]}]}, "m2": {"gancho": {"html": "<p>🔐 O Davi sabe os 4 números da senha do celular da mãe: <b>1, 9, 7, 3</b>. Ele digitou <b>3, 7, 9, 1</b>… e o celular não abriu!</p><p>🤔 Se os números estão certos, por que não abriu? A <b>ordem</b> faz diferença?</p>"}, "aplicar": [{"tipo": "robo", "titulo": "🛠️ Na vida real: o robô do mercado leva as compras ao caixa", "icone": "🛒", "enunciado": "<p>O robô do mercado leva o carrinho 🛒 até o caixa ⭐. Clique nas setas, <b>uma por casa</b>, sem bater nas prateleiras 🧱, e depois em <b>▶ Executar</b>.</p>", "grade": ["R...#", "###.#", "*...#"], "solucao": [["R", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["L", 1]], "dicas": ["Siga o corredor de cima até onde dá para descer.", "Depois de descer, volte para a esquerda até o caixa."], "explicacao": "➡️ ➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬅️: cada seta na ordem certa. Uma seta fora do lugar e o carrinho bate na prateleira."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "No micro-ondas, qual é a ordem certa?", "opcoes": ["Pôr a comida, fechar a porta, escolher o tempo, apertar Iniciar", "Apertar Iniciar, pôr a comida, fechar a porta"], "certo": 0, "why": "Na sequência, cada passo vem na ordem certa: a comida entra antes de apertar Iniciar."}, {"p": "O que faz o comando ⬅️ no labirinto?", "opcoes": ["Anda uma casa para a esquerda", "Anda até a parede"], "certo": 0, "why": "Cada seta anda <b>uma casa</b>; ⬅️ vai para a esquerda."}]}]}, "m3": {"gancho": {"html": "<p>⏰ O despertador da Bia toca às 6h. Ela aperta “soneca” e, 5 minutos depois, ele toca <b>de novo</b>… e de novo…</p><p>🤔 Como o celular sabe tocar de novo? E se um programa repetisse uma coisa <b>para sempre</b>, o que aconteceria?</p>"}, "aplicar": [{"tipo": "robo", "titulo": "🛠️ Na vida real: a volta na quadra", "icone": "🏃", "enunciado": "<p>Na Educação Física, o professor mandou dar a volta na quadra até a bandeira ⭐. Em vez de clicar muitas setas iguais, use o <b>repita</b> (botões + e −): chegue com <b>no máximo 3 blocos</b>.</p>", "grade": ["R.....", "#####.", "*....."], "solucao": [["R", 5], ["D", 2], ["L", 5]], "dicas": ["São 5 casas para a direita: um bloco “repita 5× ➡️”.", "Depois desça 2 e volte 5 para a esquerda."], "explicacao": "repita 5× ➡️ · repita 2× ⬇️ · repita 5× ⬅️: 12 passos com só 3 blocos. É a repetição deixando o algoritmo curto."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "O semáforo faz sempre verde, amarelo, vermelho, verde… Isso é uma…", "opcoes": ["Repetição", "Música"], "certo": 0, "why": "O semáforo <b>repete</b> sempre as mesmas cores."}, {"p": "Um programa que repete uma coisa e <b>nunca para</b>…", "opcoes": ["Trava: é o laço infinito", "Fica mais rápido"], "certo": 0, "why": "Uma repetição que nunca para é o <b>laço infinito</b>, um erro que trava o programa."}]}]}, "m4": {"gancho": {"html": "<p>🔋 O celular da Ana mostrou o aviso <b>“bateria fraca”</b> quando estava com 19%. Com 50%, não mostrou nada.</p><p>🤔 Como o celular <b>decide</b> quando mostrar o aviso? Ele está fazendo uma pergunta?</p>"}, "aplicar": [{"tipo": "mensagens", "titulo": "🛠️ Na vida real: a porta automática do mercado", "app": "🚪 Porta automática", "botoes": [{"id": "A", "rot": "🚪 Abre (então)"}, {"id": "F", "rot": "🚪 Fica fechada (senão)"}], "enunciado": "<p>O algoritmo da porta é: <b>se</b> alguém chegar perto, <b>então</b> abre; <b>senão</b>, fica fechada. O que a porta faz em cada situação?</p>", "itens": [{"de": "", "t": "Uma moça com o carrinho chega perto da porta", "c": "A", "why": "Alguém chegou perto: a condição é verdadeira, vale o então."}, {"de": "", "t": "Ninguém está perto da porta", "c": "F", "why": "Ninguém perto: a condição é falsa, vale o senão."}, {"de": "", "t": "Um menino corre em direção à porta", "c": "A", "why": "Chegou perto: abre."}, {"de": "", "t": "Todo mundo está lá dentro, longe da porta", "c": "F", "why": "Ninguém perto: fica fechada."}], "okMsg": "Você pensou como a porta automática! 🚪", "explicacao": "A porta faz a mesma pergunta o tempo todo (alguém está perto?) e escolhe o caminho pela resposta: é a seleção."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "No celular: <b>se</b> a bateria estiver abaixo de 20%, <b>então</b> aparece o aviso. Com 19%, aparece?", "opcoes": ["Sim: a condição é verdadeira", "Não"], "certo": 0, "why": "19% é abaixo de 20%: a condição é <b>verdadeira</b>, vale o então."}, {"p": "Qual destas é uma <b>boa condição</b>?", "opcoes": ["Está chovendo?", "Que horas são?"], "certo": 0, "why": "Uma boa condição só tem duas respostas: <b>sim ou não</b>."}]}]}, "m5": {"gancho": {"html": "<p>🧮 Na cantina, a tia digita na calculadora o preço do suco e o do pão de queijo e mostra o total para o aluno.</p><p>🤔 O que <b>entrou</b> na calculadora, o que ela <b>fez</b> com isso e o que <b>saiu</b> no fim?</p>"}, "aplicar": [{"tipo": "mensagens", "titulo": "🛠️ Na vida real: a máquina de refrigerante", "app": "🥤 Máquina de refrigerante", "botoes": [{"id": "E", "rot": "📥 Entrada"}, {"id": "P", "rot": "⚙️ Processamento"}, {"id": "S", "rot": "📤 Saída"}], "enunciado": "<p>Na máquina de refrigerante, cada coisa é entrada, processamento ou saída?</p>", "itens": [{"de": "", "t": "Você coloca o dinheiro", "c": "E", "why": "É do que a máquina precisa para começar: entrada."}, {"de": "", "t": "Você escolhe a bebida no botão", "c": "E", "why": "A escolha também é uma entrada."}, {"de": "", "t": "A máquina confere o dinheiro e separa a lata", "c": "P", "why": "O que ela faz com as entradas: processamento."}, {"de": "", "t": "A lata cai na portinha", "c": "S", "why": "O resultado no fim: saída."}], "okMsg": "Você entendeu a máquina! 🥤", "explicacao": "Entradas: dinheiro e escolha. Processamento: conferir e separar. Saída: a bebida."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "No mapa do celular, “aonde eu quero ir” é…", "opcoes": ["Uma entrada", "Uma saída"], "certo": 0, "why": "É o que você informa ao aplicativo: <b>entrada</b>. O caminho na tela é a saída."}, {"p": "Sem ovos, o bolo não sai. Isso mostra que, se faltar uma ___, o algoritmo não funciona.", "opcoes": ["Entrada", "Saída"], "certo": 0, "why": "Faltou uma <b>entrada</b>: o algoritmo não funciona."}]}]}, "m6": {"gancho": {"html": "<p>🎒 A turma vai fazer um passeio ao parque, e a professora disse: “Organizem tudo!”. Todo mundo começou a falar ao mesmo tempo.</p><p>🤔 Por onde começar? Dá para uma pessoa só fazer tudo? E se o problema grande virasse vários <b>problemas pequenos</b>?</p>"}, "aplicar": [{"tipo": "mensagens", "titulo": "🛠️ Na vida real: organizar o passeio da turma", "app": "🎒 Passeio ao parque", "botoes": [{"id": "T", "rot": "🚌 Transporte"}, {"id": "L", "rot": "🥪 Lanche"}, {"id": "B", "rot": "⚽ Brincadeiras"}], "enunciado": "<p>O passeio foi dividido em 3 partes (subproblemas). Em qual parte entra cada tarefa?</p>", "itens": [{"de": "", "t": "Combinar o horário do ônibus", "c": "T", "why": "É sobre como chegar ao parque."}, {"de": "", "t": "Levar sanduíches e suco", "c": "L", "why": "É comida: lanche."}, {"de": "", "t": "Levar a bola e a corda", "c": "B", "why": "Para brincar."}, {"de": "", "t": "Contar quantos alunos vão no ônibus", "c": "T", "why": "Também é transporte."}], "okMsg": "Passeio organizado! 🎒", "explicacao": "Dividindo em partes (transporte, lanche, brincadeiras), cada grupo resolve uma e o problema grande fica resolvido."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "Arrumar o quarto: arrumar a cama, guardar as roupas, recolher os brinquedos. Isso é…", "opcoes": ["Decompor o problema em partes", "Uma música"], "certo": 0, "why": "Dividir o problema grande em partes menores é <b>decompor</b>."}, {"p": "Cada parte menor de um problema grande se chama…", "opcoes": ["Subproblema", "Saída"], "certo": 0, "why": "Cada parte é um <b>subproblema</b>."}]}]}, "m7": {"gancho": {"html": "<p>🤖 O Léo montou as setas do robô até a estrela, apertou ▶ Executar e… o robô <b>bateu na parede</b>!</p><p>🤔 O Léo precisa apagar tudo e começar de novo? Ou dá para <b>achar o passo errado</b> e corrigir só ele?</p>"}, "aplicar": [{"tipo": "robo", "titulo": "🛠️ Na vida real: o robô entregador de pizza", "icone": "🍕", "enunciado": "<p>O robô entregador já tem um programa, mas ele bate na parede. Clique em <b>▶ Executar</b> para testar, compare, ache o primeiro passo errado e corrija só ele (você pode apagar e montar de novo).</p>", "grade": ["R..#", "#.##", "#..*"], "inicial": [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["R", 1]], "solucao": [["R", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1]], "dicas": ["Teste: o robô bate na parede logo ao descer.", "Ele precisa descer pela coluna B, então vai só uma casa para a direita antes de descer."], "explicacao": "O primeiro passo errado era o 2º ➡️ (um passo a mais antes de descer). Programa certo: ➡️ ⬇️ ⬇️ ➡️ ➡️."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "O que é <b>depurar</b>?", "opcoes": ["Achar e corrigir o erro", "Desligar o computador"], "certo": 0, "why": "Depurar é <b>achar e corrigir</b> o erro."}, {"p": "Depois de achar o passo errado, o que você faz?", "opcoes": ["Muda só esse passo e testa de novo", "Apaga tudo"], "certo": 0, "why": "Mude <b>só esse passo</b> e teste de novo."}]}]}, "m8": {"gancho": {"html": "<p>🖨️ Na feira de ciências, uma <b>impressora 3D</b> desenhou sozinha um quadrado perfeitinho, andando e virando.</p><p>🤔 Como a máquina sabe para onde andar e quando virar? Alguém precisou escrever o caminho para ela?</p>"}, "aplicar": [{"tipo": "robo", "titulo": "🛠️ Na vida real: a máquina de corte desenha a placa", "icone": "🐢", "enunciado": "<p>A máquina de corte vai recortar a placa retangular da sala. Faça a tartaruga passar por <b>todos os pontos ⚪</b> e terminar na estrela, com <b>no máximo 4 blocos</b> (use o repita).</p>", "grade": ["Rooo", "*..o", "oooo"], "solucao": [["R", 3], ["D", 2], ["L", 3], ["U", 1]], "dicas": ["Lado de cima: 3 casas para a direita. Depois desça 2, volte 3 e suba 1."], "explicacao": "repita 3× ➡️ · repita 2× ⬇️ · repita 3× ⬅️ · ⬆️: os lados do retângulo, como a máquina de corte faz."}, {"tipo": "escolha", "titulo": "🛠️ E na vida real?", "enunciado": "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", "perguntas": [{"p": "O robô aspirador anda pela casa…", "opcoes": ["Seguindo um caminho programado", "Adivinhando onde está a sujeira"], "certo": 0, "why": "Ele segue um <b>caminho programado</b>, como a tartaruga."}, {"p": "Um quadrado tem…", "opcoes": ["4 lados iguais", "3 lados"], "certo": 0, "why": "O <b>quadrado</b> tem 4 lados iguais; o retângulo tem 2 compridos e 2 curtos."}]}]}};
  Object.keys(E).forEach(m => { if (A[m]) Object.assign(A[m], E[m]); });
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 2: 2º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-2bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🧁 A vó da Lia mandou a receita do bolo por áudio: “bota a farinha, os ovos, mistura e assa”. A Lia fez tudo… e o bolo saiu <b>solado</b>, duro e baixinho.</p><p>🤔 O que faltou na receita da vó? Uma receita pode ser “vaga” demais?</p>"},"m2":{"html":"<p>🔐 O Davi sabe os 4 números da senha do celular da mãe: <b>1, 9, 7, 3</b>. Ele digitou <b>3, 7, 9, 1</b>… e o celular não abriu!</p><p>🤔 Se os números estão certos, por que não abriu? A <b>ordem</b> faz diferença?</p>"},"m3":{"html":"<p>⏰ O despertador da Bia toca às 6h. Ela aperta “soneca” e, 5 minutos depois, ele toca <b>de novo</b>… e de novo…</p><p>🤔 Como o celular sabe tocar de novo? E se um programa repetisse uma coisa <b>para sempre</b>, o que aconteceria?</p>"},"m4":{"html":"<p>🔋 O celular da Ana mostrou o aviso <b>“bateria fraca”</b> quando estava com 19%. Com 50%, não mostrou nada.</p><p>🤔 Como o celular <b>decide</b> quando mostrar o aviso? Ele está fazendo uma pergunta?</p>"},"m5":{"html":"<p>🧮 Na cantina, a tia digita na calculadora o preço do suco e o do pão de queijo e mostra o total para o aluno.</p><p>🤔 O que <b>entrou</b> na calculadora, o que ela <b>fez</b> com isso e o que <b>saiu</b> no fim?</p>"},"m6":{"html":"<p>🎒 A turma vai fazer um passeio ao parque, e a professora disse: “Organizem tudo!”. Todo mundo começou a falar ao mesmo tempo.</p><p>🤔 Por onde começar? Dá para uma pessoa só fazer tudo? E se o problema grande virasse vários <b>problemas pequenos</b>?</p>"},"m7":{"html":"<p>🤖 O Léo montou as setas do robô até a estrela, apertou ▶ Executar e… o robô <b>bateu na parede</b>!</p><p>🤔 O Léo precisa apagar tudo e começar de novo? Ou dá para <b>achar o passo errado</b> e corrigir só ele?</p>"},"m8":{"html":"<p>🖨️ Na feira de ciências, uma <b>impressora 3D</b> desenhou sozinha um quadrado perfeitinho, andando e virando.</p><p>🤔 Como a máquina sabe para onde andar e quando virar? Alguém precisou escrever o caminho para ela?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const passos = s => s.split(" ").map(x => [x[0], 1]);

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["Uma <b>receita de bolo</b> é um…", ["Algoritmo", "Computador"], "A receita tem passos em ordem: é um <b>algoritmo</b>."],
    ["O computador adivinha o que você quer?", ["Não", "Sim"], "O computador <b>não adivinha</b> nada."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: o caminho até a escola",
      enunciado: "<p>Ensine o seu primo a chegar à escola. Clique nos passos <b>na ordem</b>.</p>",
      etapas: [{ ic: "🏠", t: "Sair de casa" }, { ic: "➡️", t: "Virar à direita na calçada" }, { ic: "🚶", t: "Andar até a padaria" }, { ic: "🏫", t: "Entrar na escola" }],
      okMsg: "Chegou à escola! 🏫", explicacao: "Começo, meio e fim, em ordem: é um algoritmo." },
    VIDA(["“Coloque um pouco de açúcar” é…", ["Vago: quanto é um pouco?", "Preciso"], "“Um pouco” é <b>vago</b>. “2 colheres” é preciso."],
      ["Cada passo de um algoritmo é uma…", ["Instrução", "Tela"], "Cada passo é uma <b>instrução</b>."])
  ];
  A.m2.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: o carrinho até o caixa", icone: "🛒",
      enunciado: "<p>Leve o carrinho 🛒 até o caixa ⭐. Uma seta por casa, e depois <b>▶ Executar</b>.</p>",
      grade: ["R..", "##.", "*.."], solucao: passos("R R D D L L"),
      dicas: ["Vá para a direita até o fim, desça 2 e volte para a esquerda."],
      explicacao: "➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️: cada seta na ordem certa." },
    VIDA(["Calçar o tênis antes da meia dá certo?", ["Não: a ordem importa", "Sim"], "Na sequência, <b>a ordem importa</b>."],
      ["O comando ⬇️ faz o robô…", ["Andar uma casa para baixo", "Voltar ao começo"], "Cada seta anda <b>uma casa</b>."])
  ];
  A.m3.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: a corrida no pátio", icone: "🏃", compacto: 2,
      enunciado: "<p>Chegue à bandeira ⭐ com <b>no máximo 2 blocos</b>: clique na seta e use o <b>+</b> para repetir.</p>",
      grade: ["R....", "####.", "####*"], solucao: [["R", 4], ["D", 2]],
      dicas: ["Clique em ➡️ e aperte + até 4. Depois ⬇️ e + até 2."],
      explicacao: "repita 4× ➡️ · repita 2× ⬇️: 6 passos com só 2 blocos." },
    VIDA(["Em vez de ➡️ ➡️ ➡️, podemos escrever…", ["repita 3× ➡️", "repita 1× ➡️"], "Com o <b>repita</b>, o algoritmo fica mais curto."],
      ["A repetição que nunca para se chama…", ["Laço infinito", "Sequência"], "É o <b>laço infinito</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: atravesso ou espero?", "🚦 Semáforo", [["T", "🚶 Atravesso (então)"], ["E", "✋ Espero (senão)"]],
      "<b>Se</b> o sinal estiver verde, <b>então</b> atravesso; <b>senão</b>, espero.",
      [["O sinal está verde", "T", "Verdadeiro: atravessa."], ["O sinal está vermelho", "E", "Falso: espera."], ["O sinal ficou verde agora", "T", "Verde: atravessa."]],
      "Travessia segura! 🚦", "A condição só tem sim ou não: sim → então, não → senão."),
    VIDA(["Qual é uma boa condição?", ["Está chovendo?", "Que horas são?"], "Boa condição: resposta <b>sim ou não</b>."],
      ["Se a resposta for sim (verdadeiro), o computador faz o…", ["Então", "Senão"], "Verdadeiro → <b>então</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: a calculadora", "🧮 Calculadora", [["E", "📥 Entrada"], ["S", "📤 Saída"]],
      "Na calculadora, cada coisa é entrada ou saída?",
      [["Os números que você digita", "E", "É o que você dá: entrada."], ["O resultado na tela", "S", "É o que sai no fim: saída."], ["O sinal de + que você aperta", "E", "Também é entrada."]],
      "Conta feita! 🧮", "Entradas: os números e a conta. Saída: o resultado na tela."),
    VIDA(["No bolo, a farinha e os ovos são…", ["Entradas", "Saída"], "O que precisa para começar: <b>entradas</b>."],
      ["O bolo pronto é a…", ["Saída", "Entrada"], "O que se quer no fim: <b>saída</b>."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: o aniversário da turma", "🎉 Festa da turma", [["D", "🎈 Decoração"], ["C", "🍰 Comida"]],
      "A festa foi dividida em partes. Em qual parte entra cada tarefa?",
      [["Encher os balões", "D", "Balões são decoração."], ["Comprar o bolo", "C", "Bolo é comida."], ["Pendurar a faixa", "D", "Faixa é decoração."], ["Fazer o suco", "C", "Suco é comida."]],
      "Festa organizada! 🎉", "Cada parte é um subproblema: juntas, resolvem o problema grande."),
    VIDA(["Dividir um problema grande em partes menores é…", ["Decompor", "Repetir"], "Isso é <b>decompor</b>."],
      ["Cada parte menor se chama…", ["Subproblema", "Saída"], "Cada parte é um <b>subproblema</b>."])
  ];
  A.m7.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: o robô entregador", icone: "🍕",
      enunciado: "<p>O robô tem um programa com <b>um passo a mais</b>. Aperte <b>▶ Executar</b> para testar, apague o passo errado e teste de novo.</p>",
      grade: ["R.#", "#.#", "#.*"], inicial: passos("R R D D"), solucao: passos("R D D R"),
      dicas: ["Depois do primeiro ➡️, o robô já tem de descer."],
      explicacao: "Com ➡️ ⬇️ ⬇️ ➡️ o robô chega. Achar e corrigir o erro é depurar." },
    VIDA(["Um erro no algoritmo se chama…", ["Bug", "Bolo"], "O erro é um <b>bug</b>."],
      ["Depois de achar o passo errado, você…", ["Muda só esse passo e testa de novo", "Apaga tudo"], "Corrigir: muda <b>só esse passo</b>."])
  ];
  A.m8.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: a placa quadrada", icone: "🐢",
      enunciado: "<p>Faça a tartaruga passar por <b>todos os pontos ⚪</b> e terminar na estrela: o rastro vira um quadrado.</p>",
      grade: ["Ro", "*o"], solucao: passos("R D L"),
      dicas: ["➡️, ⬇️ e ⬅️."],
      explicacao: "➡️ ⬇️ ⬅️: o rastro da tartaruga desenha o quadrado." },
    VIDA(["Um quadrado tem…", ["4 lados iguais", "3 lados"], "O <b>quadrado</b> tem 4 lados iguais."],
      ["O caminho da tartaruga deixa um…", ["Rastro", "Bug"], "O <b>rastro</b> vira desenho."])
  ];
})();
