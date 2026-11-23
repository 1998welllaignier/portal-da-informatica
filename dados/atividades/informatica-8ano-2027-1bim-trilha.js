/* ============================================================
   ATIVIDADES — Informática 8º ano — 1º bimestre de 2027 · TRILHA PASSO A PASSO
   Mesmas missões da turma, um passo por vez, quase tudo por clique
   (cartas para virar, vizinhos para trocar, botões).
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const v = n => ({ v: n });
  PORTAL.registrarAtividades("informatica-8ano-2027-1bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "lista_ops", titulo: "A lista CHAMADA", nome: "CHAMADA",
        inicial: ["Ana", "Bruno", "Carla", "Davi", "Elisa"],
        passos: [
          { tipo: "pergunta", instr: "Quem está na posição 1?", r: "Ana" },
          { tipo: "pergunta", instr: "Qual é o tamanho da lista?", r: "5", num: true }],
        explicacao: "Na posição 1 está a Ana. São 5 itens: o tamanho é 5." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Qual é o item?",
        enunciado: "<p>CHAMADA: 1 Ana · 2 Bruno · 3 Carla · 4 Davi · 5 Elisa</p>",
        perguntas: [
          { p: "CHAMADA[3] é:", opcoes: ["Carla", "Bruno", "Davi"], certo: 0 },
          { p: "Em que posição está o Davi?", opcoes: ["4", "3", "5"], certo: 0 }],
        explicacao: "CHAMADA[3] é o item da posição 3: <strong>Carla</strong>. Davi está na posição <strong>4</strong>." },

      { tipo: "ligar", titulo: "Passo 2 · Palavras da lista",
        pares: [
          { a: "Item", b: "Cada valor guardado na lista" },
          { a: "Posição", b: "O número do lugar do item" },
          { a: "Tamanho", b: "Quantos itens a lista tem" }],
        explicacao: "Item é o valor, posição é o lugar e tamanho é quantos itens." },

      { tipo: "classificar", titulo: "Passo 3 · Ordenada ou não?",
        categorias: [{ id: "O", rot: "Ordenada", ic: "📈", desc: "em ordem" }, { id: "D", rot: "Desordenada", ic: "🔀", desc: "fora de ordem" }],
        itens: [
          { t: "3, 8, 12, 20", ic: "🔢", c: "O" },
          { t: "9, 2, 7", ic: "🔢", c: "D" },
          { t: "1, 2, 3, 4", ic: "🔢", c: "O" }],
        explicacao: "3, 8, 12, 20 e 1, 2, 3, 4 crescem: estão <strong>ordenadas</strong>. 9, 2, 7 está fora de ordem." },

      { tipo: "escolha", titulo: "Passo 4 · Por que lista?",
        perguntas: [
          { p: "Entrou um aluno novo. Com a lista, eu:", opcoes: ["Insiro na lista", "Crio outra variável"], certo: 0 }],
        explicacao: "Com a lista, é só <strong>inserir</strong> o aluno novo." }
    ],
    vf: [{ v: true }, { v: false, why: "CHAMADA[2] é <strong>Bruno</strong>. Ana é a posição 1." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "lista_ops", titulo: "A FILA da merenda", nome: "FILA",
        inicial: ["Ana", "Bia", "Caio", "Duda"],
        passos: [
          { tipo: "inserir", instr: "Enzo chegou: insira Enzo no fim.", esperado: ["Ana", "Bia", "Caio", "Duda", "Enzo"], dica: "Digite Enzo e clique em Inserir no fim." }],
        explicacao: "Inserir no fim: ninguém muda de lugar e o tamanho vai para 5." }
    ],
    basico: [
      { tipo: "lista_ops", titulo: "Passo 1 · Remova a Bia", nome: "FILA",
        inicial: ["Ana", "Bia", "Caio", "Duda"],
        passos: [
          { tipo: "remover", instr: "Bia foi embora: remova Bia.", esperado: ["Ana", "Caio", "Duda"], dica: "Clique em “remover” ao lado de Bia." },
          { tipo: "pergunta", instr: "Em que posição o Caio está agora?", r: "2", num: true }],
        explicacao: "Bia saiu: quem estava atrás <strong>andou uma posição para a frente</strong>. Caio foi da 3 para a 2." },

      { tipo: "escolha", titulo: "Passo 2 · O tamanho",
        perguntas: [
          { p: "Inserir um item no fim faz o tamanho:", opcoes: ["Aumentar 1", "Diminuir 1"], certo: 0 },
          { p: "Remover um item faz o tamanho:", opcoes: ["Diminuir 1", "Aumentar 1"], certo: 0 }],
        explicacao: "Inserir <strong>aumenta</strong> 1; remover <strong>diminui</strong> 1." },

      { tipo: "escolha", titulo: "Passo 3 · Conte",
        enunciado: "<p>NOTAS: 8 · 4 · 6 · 3 · 9</p>",
        perguntas: [
          { p: "Quantas notas são 5 ou mais?", opcoes: ["3", "2", "5"], certo: 0 }],
        explicacao: "8, 6 e 9 são 5 ou mais: o contador vai 0 → 1 → 2 → <strong>3</strong>." },

      { tipo: "escolha", titulo: "Passo 4 · O contador",
        perguntas: [
          { p: "O contador começa em:", opcoes: ["0", "10"], certo: 0 }],
        explicacao: "O <strong>contador</strong> começa em 0 e soma 1 cada vez que acha o que procura." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Remover <strong>diminui</strong> o tamanho." }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "sequencial", titulo: "Ache o 9 virando as cartas",
        lista: [5, 8, 2, 9, 4], alvo: 9,
        enunciado: "<p>Vire uma carta por vez, da 1ª em diante, até achar o <strong>9</strong>.</p>",
        explicacao: "Você virou 4 cartas: 4 comparações. Olhar um por um é a busca sequencial." }
    ],
    basico: [
      { tipo: "sequencial", titulo: "Passo 1 · Procure o 7",
        lista: [3, 10, 7, 1, 6], alvo: 7,
        enunciado: "<p>Vire uma carta por vez, da 1ª em diante, até achar o <strong>7</strong>.</p>",
        explicacao: "3, 10, 7: achou na <strong>3ª comparação</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Quantas comparações?",
        perguntas: [
          { p: "Você achou o 7 na posição 3. Quantas comparações fez?", opcoes: ["3", "1", "5"], certo: 0 }],
        explicacao: "Cada carta virada é uma comparação: <strong>3</strong>." },

      { tipo: "ligar", titulo: "Passo 3 · Melhor e pior caso",
        pares: [
          { a: "Melhor caso", b: "O item é o primeiro" },
          { a: "Pior caso", b: "O item é o último ou não está" }],
        explicacao: "Melhor caso: acha logo de cara. Pior caso: olha a lista toda." },

      { tipo: "escolha", titulo: "Passo 4 · Lista fora de ordem",
        perguntas: [
          { p: "A busca sequencial funciona em lista fora de ordem?", opcoes: ["Sim, funciona em qualquer lista", "Não"], certo: 0 }],
        explicacao: "A busca sequencial funciona em <strong>qualquer lista</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "A busca sequencial funciona em <strong>qualquer</strong> lista, ordenada ou não." }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "sim_adivinhe", titulo: "Adivinhe o número de 1 a 100", max: 100, meta: 7,
        enunciado: "<p>O computador pensou num número de 1 a 100. Chute sempre o <strong>meio</strong>: comece com <strong>50</strong>.</p>",
        explicacao: "Chutar o meio joga fora metade a cada vez: no máximo 7 chutes." }
    ],
    basico: [
      { tipo: "busca_binaria", titulo: "Passo 1 · Procure o 31 pelo meio",
        lista: [3, 7, 12, 18, 25, 31, 40, 52], alvo: 31,
        enunciado: "<p>Lista <strong>ordenada</strong>. Clique sempre na carta do <strong>meio</strong> da parte que sobrou. Comece pela posição 4.</p>",
        explicacao: "Meio 4 = 18 → 31 é maior → sobra 5 a 8 → meio 6 = 31: achou em 2 comparações." },

      { tipo: "escolha", titulo: "Passo 2 · A regra de ouro",
        perguntas: [
          { p: "A busca binária só funciona se a lista estiver:", opcoes: ["Ordenada", "Fora de ordem"], certo: 0 }],
        explicacao: "Sem ordem, não dá para saber de que lado jogar fora: precisa estar <strong>ordenada</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Por onde começa?",
        perguntas: [
          { p: "No jogo de 1 a 100, qual é o primeiro chute esperto?", opcoes: ["50", "1", "100"], certo: 0 }],
        explicacao: "O <strong>meio</strong>: 50. Assim joga fora metade de uma vez." },

      { tipo: "escolha", titulo: "Passo 4 · Quem é mais rápida?",
        perguntas: [
          { p: "Numa lista de 1.000 itens ordenados, quem precisa de menos comparações?", opcoes: ["Busca binária (10)", "Busca sequencial (1.000)"], certo: 0 }],
        explicacao: "A binária precisa de no máximo <strong>10</strong>; a sequencial, até 1.000." }
    ],
    vf: [{ v: false, why: "A busca binária só funciona em lista <strong>ordenada</strong>." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
    pratica: [
      { tipo: "sim_bolha", titulo: "Troque os vizinhos",
        enunciado: "<p>Clique em <strong>⇄</strong> para trocar dois vizinhos. Deixe em <strong>ordem crescente</strong> (do menor para o maior).</p>",
        valores: [8, 3, 5],
        explicacao: "Trocar vizinhos fora de ordem até ficar 3, 5, 8: é o método da bolha." }
    ],
    basico: [
      { tipo: "bolha", titulo: "Passo 1 · Trocar ou manter? Ordene 6, 3, 9, 1", lista: [6, 3, 9, 1],
        enunciado: "<p>Olhe os dois vizinhos destacados: se o da esquerda for <strong>maior</strong>, <strong>troque</strong>; senão, <strong>mantenha</strong>.</p>",
        explicacao: "1ª passada: 3, 6, 1, 9 · 2ª: 3, 1, 6, 9 · 3ª: 1, 3, 6, 9." },

      { tipo: "escolha", titulo: "Passo 2 · Troca ou mantém?",
        perguntas: [
          { p: "Vizinhos 7 e 2 (ordem crescente):", opcoes: ["Troca", "Mantém"], certo: 0 },
          { p: "Vizinhos 1 e 5 (ordem crescente):", opcoes: ["Mantém", "Troca"], certo: 0 }],
        explicacao: "7 é maior que 2: <strong>troca</strong>. 1 é menor que 5: <strong>mantém</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Depois da 1ª passada",
        perguntas: [
          { p: "No fim da 1ª passada, onde fica o maior número?", opcoes: ["No final da lista", "No começo"], certo: 0 }],
        explicacao: "O maior <strong>sobe para o final</strong>, como uma bolha." },

      { tipo: "classificar", titulo: "Passo 4 · Crescente ou não?",
        categorias: [{ id: "C", rot: "Crescente", ic: "📈", desc: "do menor para o maior" }, { id: "N", rot: "Não é crescente", ic: "📉", desc: "" }],
        itens: [
          { t: "1, 3, 6, 9", ic: "🔢", c: "C" },
          { t: "9, 6, 3, 1", ic: "🔢", c: "N" }],
        explicacao: "1, 3, 6, 9 é crescente. 9, 6, 3, 1 é do maior para o menor." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "9, 6, 3, 1 vai do maior para o menor: não é crescente." }]
  },

  /* ======================= MISSÃO 6 ======================= */
  m6: {
    pratica: [
      { tipo: "blocos", titulo: "Rode a contagem recursiva",
        enunciado: "<p>O bloco <strong>contar</strong> chama a si mesmo. Aperte <strong>▶️ Rodar o programa</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
        inicio: [["funcao", "contar", [["se", ["=", v("n"), 0], [["mostrar", "Fogo!"]], [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]]]], ["definir", "n", 3], ["chamar", "contar"]],
        esperado: ["3", "2", "1", "Fogo!"],
        solucao: [["funcao", "contar", [["se", ["=", v("n"), 0], [["mostrar", "Fogo!"]], [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]]]], ["definir", "n", 3], ["chamar", "contar"]],
        explicacao: "Caso base: n = 0 → “Fogo!”. Passo recursivo: mostra n, diminui 1 e chama contar de novo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · As duas partes",
        pares: [
          { a: "🔁 Passo recursivo", b: "Repetir com o problema menor" },
          { a: "🛑 Caso base", b: "O caso que faz parar" }],
        explicacao: "Passo recursivo repete menor; caso base faz parar." },

      { tipo: "escolha", titulo: "Passo 2 · Na matrioska",
        perguntas: [
          { p: "Na matrioska, o caso base é:", opcoes: ["A bonequinha que não abre", "A boneca maior"], certo: 0 }],
        explicacao: "A última, que <strong>não abre</strong>: ali a recursão para." },

      { tipo: "escolha", titulo: "Passo 3 · Contagem regressiva",
        perguntas: [
          { p: "Contar a partir de 3 mostra:", opcoes: ["3, 2, 1, Fogo!", "1, 2, 3", "3, 3, 3"], certo: 0 }],
        explicacao: "Mostra 3, depois conta a partir de 2, de 1… e no 0 (caso base) mostra “Fogo!”." },

      { tipo: "escolha", titulo: "Passo 4 · Sem caso base",
        perguntas: [
          { p: "Sem caso base, a recursão:", opcoes: ["Nunca para", "Para sozinha"], certo: 0 }],
        explicacao: "Sem o caso que faz parar, ela <strong>nunca para</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "O caso base é a <strong>bonequinha menor</strong>, que não abre." }, { v: true }]
  },

  /* ======================= MISSÃO 7 (extra) ======================= */
  m7: {
    pratica: [
      { tipo: "lista_ops", titulo: "Ache o menor", nome: "LISTA",
        inicial: ["7", "2", "9", "4"],
        passos: [
          { tipo: "pergunta", instr: "Qual é o menor número da lista?", r: "2", num: true },
          { tipo: "pergunta", instr: "Em que posição ele está?", r: "2", num: true }],
        explicacao: "O menor (o mínimo) é o 2, na posição 2. Na 1ª rodada da seleção, ele vai para a 1ª posição." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O menor",
        perguntas: [
          { p: "Lista 7, 2, 9, 4. Qual é o menor?", opcoes: ["2", "4", "7"], certo: 0 }],
        explicacao: "O menor (o <strong>mínimo</strong>) é 2." },

      { tipo: "escolha", titulo: "Passo 2 · Para onde vai?",
        perguntas: [
          { p: "Na 1ª rodada, o menor vai para:", opcoes: ["A 1ª posição", "A última posição"], certo: 0 }],
        explicacao: "O menor é trocado com o item da <strong>1ª posição</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · Depois da 1ª rodada",
        enunciado: "<p>7, 2, 9, 4 → troca 2 ↔ 7</p>",
        perguntas: [
          { p: "Como fica a lista?", opcoes: ["2, 7, 9, 4", "7, 2, 4, 9"], certo: 0 }],
        explicacao: "O 2 e o 7 trocaram de lugar: <strong>2, 7, 9, 4</strong>. A 1ª posição está pronta." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "Escolher os times no recreio (o melhor, depois o melhor do que sobrou) parece:", opcoes: ["A ordenação por seleção", "A busca binária"], certo: 0 }],
        explicacao: "Escolher o melhor do que sobrou, rodada por rodada, é a <strong>seleção</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "O menor vai para a <strong>1ª posição</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 8 (extra) ======================= */
  m8: {
    pratica: [
      { tipo: "classificar", titulo: "Fractal ou não?",
        categorias: [{ id: "F", rot: "Fractal", ic: "❄️", desc: "a parte parece o todo" }, { id: "N", rot: "Não é", ic: "⚪", desc: "" }],
        itens: [
          { t: "Samambaia", ic: "🌿", c: "F" },
          { t: "Brócolis", ic: "🥦", c: "F" },
          { t: "Bola lisa", ic: "⚽", c: "N", why: "Um pedaço da bola não parece uma bola inteira." }],
        explicacao: "Na samambaia e no brócolis, cada parte parece o todo. A bola lisa não." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O que é fractal?",
        perguntas: [
          { p: "Fractal é uma figura em que:", opcoes: ["Cada parte se parece com o todo", "Tudo é redondo"], certo: 0 }],
        explicacao: "No <strong>fractal</strong>, cada parte parece a figura inteira." },

      { tipo: "escolha", titulo: "Passo 2 · O triângulo de Sierpinski",
        perguntas: [
          { p: "No nível 1, quantos triângulos pintados?", opcoes: ["3", "1", "9"], certo: 0 },
          { p: "No nível 2?", opcoes: ["9", "6", "3"], certo: 0 }],
        explicacao: "Cada triângulo vira 3: 1 → <strong>3</strong> → <strong>9</strong>." },

      { tipo: "escolha", titulo: "Passo 3 · A árvore",
        perguntas: [
          { p: "Na árvore fractal, a cada nível o número de galhos:", opcoes: ["Dobra", "Fica igual"], certo: 0 }],
        explicacao: "2, 4, 8, 16: <strong>dobra</strong> a cada nível." },

      { tipo: "escolha", titulo: "Passo 4 · Nível 3",
        perguntas: [
          { p: "Na árvore fractal, quantos galhos novos no nível 3?", opcoes: ["8", "6", "4"], certo: 0 }],
        explicacao: "Nível 1 = 2, nível 2 = 4, nível 3 = <strong>8</strong>." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Um pedaço da bola não parece a bola inteira: não é fractal." }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "O tamanho da lista é:", opcoes: ["Quantos itens ela tem", "O maior número"], certo: 0 }], explicacao: "Tamanho é quantos itens a lista tem." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Remover um item faz o tamanho:", opcoes: ["Diminuir", "Aumentar"], certo: 0 }], explicacao: "Remover diminui o tamanho." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "A busca sequencial olha os itens:", opcoes: ["Um por um", "Sempre pelo meio"], certo: 0 }], explicacao: "A busca sequencial olha um por um." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "A busca binária precisa de lista:", opcoes: ["Ordenada", "Fora de ordem"], certo: 0 }], explicacao: "A busca binária só funciona em lista ordenada." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Responda", perguntas: [{ p: "O método da bolha compara:", opcoes: ["Vizinhos", "O primeiro e o último"], certo: 0 }], explicacao: "O método da bolha compara vizinhos." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Responda", perguntas: [{ p: "O que faz a recursão parar?", opcoes: ["O caso base", "O passo recursivo"], certo: 0 }], explicacao: "O caso base faz a recursão parar." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Responda", perguntas: [{ p: "Na seleção, a cada rodada escolhemos:", opcoes: ["O menor do que sobrou", "Dois vizinhos"], certo: 0 }], explicacao: "A seleção escolhe o menor do que sobrou." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Responda", perguntas: [{ p: "Qual é um fractal?", opcoes: ["A samambaia", "A bola lisa"], certo: 0 }], explicacao: "Na samambaia, cada parte parece o todo." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-1bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Listas", perguntas: [{"p": "CHAMADA = Ana, Bruno, Carla. CHAMADA[2] é:", "opcoes": ["Bruno", "Ana"], "certo": 0}, {"p": "O tamanho de Ana, Bruno, Carla é:", "opcoes": ["2", "3"], "certo": 1}],
      explicacao: "CHAMADA = Ana, Bruno, Carla. CHAMADA[2] é: → <strong>Bruno</strong> · O tamanho de Ana, Bruno, Carla é: → <strong>3</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Inserir e remover", perguntas: [{"p": "Inserir no fim faz o tamanho:", "opcoes": ["Aumentar 1", "Diminuir 1"], "certo": 0}, {"p": "Quando alguém sai, quem estava atrás:", "opcoes": ["Fica no mesmo lugar", "Anda uma posição para a frente"], "certo": 1}],
      explicacao: "Inserir no fim faz o tamanho: → <strong>Aumentar 1</strong> · Quando alguém sai, quem estava atrás: → <strong>Anda uma posição para a frente</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Busca sequencial", perguntas: [{"p": "A busca sequencial olha os itens:", "opcoes": ["Um por um", "Sempre pelo meio"], "certo": 0}, {"p": "O melhor caso é quando o item é:", "opcoes": ["O último", "O primeiro"], "certo": 1}],
      explicacao: "A busca sequencial olha os itens: → <strong>Um por um</strong> · O melhor caso é quando o item é: → <strong>O primeiro</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Busca binária", perguntas: [{"p": "No jogo de 1 a 100, o primeiro chute esperto é:", "opcoes": ["50", "1"], "certo": 0}, {"p": "A busca binária precisa de lista:", "opcoes": ["Fora de ordem", "Ordenada"], "certo": 1}],
      explicacao: "No jogo de 1 a 100, o primeiro chute esperto é: → <strong>50</strong> · A busca binária precisa de lista: → <strong>Ordenada</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Método da bolha", perguntas: [{"p": "Vizinhos 9 e 4 (crescente):", "opcoes": ["Trocam de lugar", "Ficam como estão"], "certo": 0}, {"p": "No fim da 1ª passada, o maior fica:", "opcoes": ["No começo", "No final"], "certo": 1}],
      explicacao: "Vizinhos 9 e 4 (crescente): → <strong>Trocam de lugar</strong> · No fim da 1ª passada, o maior fica: → <strong>No final</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Recursão", perguntas: [{"p": "Na matrioska, a bonequinha que não abre é o:", "opcoes": ["Caso base", "Passo recursivo"], "certo": 0}, {"p": "Contar a partir de 2 mostra:", "opcoes": ["1, 2, 3", "2, 1, Fogo!"], "certo": 1}],
      explicacao: "Na matrioska, a bonequinha que não abre é o: → <strong>Caso base</strong> · Contar a partir de 2 mostra: → <strong>2, 1, Fogo!</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Ordenação por seleção", perguntas: [{"p": "Lista 6, 3, 8. O menor é:", "opcoes": ["3", "8"], "certo": 0}, {"p": "Na 1ª rodada, o menor vai para:", "opcoes": ["A última posição", "A 1ª posição"], "certo": 1}],
      explicacao: "Lista 6, 3, 8. O menor é: → <strong>3</strong> · Na 1ª rodada, o menor vai para: → <strong>A 1ª posição</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Fractais", perguntas: [{"p": "Na samambaia, cada folhinha parece:", "opcoes": ["A samambaia inteira", "Uma bola"], "certo": 0}, {"p": "Na árvore fractal, a cada nível o número de galhos:", "opcoes": ["Fica igual", "Dobra"], "certo": 1}],
      explicacao: "Na samambaia, cada folhinha parece: → <strong>A samambaia inteira</strong> · Na árvore fractal, a cada nível o número de galhos: → <strong>Dobra</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026): o mesmo ❓ gancho da turma, "O que você já sabe?" na M1
   e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   Tudo cobra só o que o Para começar da Trilha explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-1bim-trilha"]; if (!A) return;
  const v = n => ({ v: n });
  /* ❓ o mesmo gancho da apostila da turma */
  const GANCHO = {"m1":{"html":"<p>📲 No grupo da turma já são <b>200 mensagens</b>. Elas aparecem uma embaixo da outra: a mais antiga em cima, a mais nova embaixo.</p><p>🤔 Como o aplicativo guarda tantas mensagens <b>em ordem</b>? Será que ele cria 200 variáveis diferentes?</p>"},"m2":{"html":"<p>🛒 A Júlia colocou 5 produtos no carrinho da loja on-line, apagou um e depois apertou <b>“tocar a seguir”</b> numa música da playlist.</p><p>🤔 O que acontece com os <b>outros itens</b> quando um sai da lista ou entra no meio dela? Quem muda de lugar?</p>"},"m3":{"html":"<p>📷 O Teo quer mostrar para a avó a foto do gol que ele fez. A galeria do celular tem <b>500 fotos</b>, fora de ordem.</p><p>🤔 Como ele pode procurar? Quantas fotos ele vai precisar olhar se a do gol for a <b>última</b>?</p>"},"m4":{"html":"<p>🎯 No jogo “adivinhe o número de 1 a 100”, a Bia chuta 1, 2, 3, 4… e já gastou 30 chutes. O Leo ganha sempre com no máximo <b>7 chutes</b>.</p><p>🤔 Qual é o truque do Leo? E por que o truque <b>só funciona</b> se os números estiverem em ordem?</p>"},"m5":{"html":"<p>📸 Na foto da turma, o fotógrafo pediu: “do mais baixo para o mais alto!”. Ninguém sabia por onde começar, e virou uma bagunça.</p><p>🤔 Existe um jeito simples, com regras, para arrumar a fila só trocando <b>vizinhos</b> de lugar?</p>"},"m6":{"html":"<p>🎎 A vó da Duda trouxe uma <b>matrioska</b> de presente. A Duda abriu a boneca e… tinha outra igual dentro, menor. Abriu de novo, e de novo…</p><p>🤔 Quando ela vai parar de abrir? E o que essa boneca tem a ver com o jeito de o computador contar as pastas dentro de pastas?</p>"},"m7":{"html":"<p>⚽ No recreio, os capitães escolhem os times: primeiro o melhor jogador, depois o melhor <b>do que sobrou</b>, e assim por diante.</p><p>🤔 Dá para ordenar uma lista de números do mesmo jeito? Quantas <b>trocas</b> isso precisa, comparado com a bolha?</p>"},"m8":{"html":"<p>🥦 No almoço, o Gui reparou: cada pedacinho do brócolis parece um <b>brócolis pequeno</b>. E cada folhinha da samambaia do quintal parece uma <b>samambaia</b> inteira.</p><p>🤔 Por que a natureza repete a mesma forma em tamanhos menores? E como os jogos usam isso para desenhar montanhas e árvores?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["Uma <b>variável</b> guarda…", ["Um valor com um nome, que pode mudar", "Só fotos"], "A variável guarda um valor com nome, e ele pode mudar (como os pontos de um jogo)."],
    ["“Repita 3 vezes: ande um passo” é…", ["Repetição", "Lista"], "Fazer o mesmo passo várias vezes é <b>repetição</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você lembra do 7º ano. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";

  A.m1.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a fila da impressora", nome: "IMPRESSAO",
      enunciado: "<p>A fila da impressora da escola é uma <b>lista</b>: o primeiro enviado sai primeiro.</p>",
      inicial: ["prova", "bilhete", "cartaz"],
      passos: [
        { tipo: "pergunta", instr: "Qual documento sai primeiro? (IMPRESSAO[1])", r: "prova" },
        { tipo: "pergunta", instr: "Qual é o tamanho da fila?", r: "3", num: true }],
      explicacao: "A prova está na posição 1 e a fila tem 3 itens (tamanho 3)." },
    VIDA(["CHAMADA[3] quer dizer…", ["O item da posição 3 da lista CHAMADA", "Que a lista tem 3 itens"], "CHAMADA[3] é o item da <b>posição 3</b>."],
      ["O <b>tamanho</b> de uma lista é…", ["Quantos itens ela tem", "O nome dela"], "Tamanho = número de itens."])
  ];
  A.m2.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a lista do passeio", nome: "PASSEIO",
      enunciado: "<p>O Kauã chegou atrasado para o passeio. Coloque ele na lista e responda.</p>",
      inicial: ["Gabi", "Hugo", "Íris"],
      passos: [
        { tipo: "inserir", instr: "Insira Kauã no fim.", esperado: ["Gabi", "Hugo", "Íris", "Kauã"], dica: "Digite Kauã e clique em Inserir no fim." },
        { tipo: "pergunta", instr: "Qual é o tamanho da lista agora?", r: "4", num: true }],
      explicacao: "Inserir no fim: ninguém muda de lugar e o tamanho aumenta 1 (de 3 para 4)." },
    VIDA(["Você <b>removeu</b> um produto do carrinho. O tamanho…", ["Diminui 1", "Aumenta 1"], "Remover tira um item: o tamanho <b>diminui 1</b>."],
      ["Inserir no fim faz os outros itens…", ["Ficarem no mesmo lugar", "Mudarem todos de lugar"], "No fim, ninguém muda de lugar."])
  ];
  A.m3.aplicar = [
    { tipo: "sequencial", titulo: "🛠️ Na vida real: a foto do gol",
      lista: ["🏖️", "🎂", "🐶", "⚽", "🌻"], alvo: "⚽",
      enunciado: "<p>Ache a foto do <b>gol ⚽</b> na galeria, olhando uma por uma, da 1ª em diante.</p>",
      explicacao: "A foto estava na 4ª posição: 4 comparações. Olhar um por um é a busca sequencial." },
    VIDA(["Olhar foto por foto, desde o começo, é…", ["Busca sequencial", "Apagar as fotos"], "Olhar um por um é a <b>busca sequencial</b>."],
      ["Cada vez que você olha um item é uma…", ["Comparação", "Lista nova"], "Cada olhada é uma <b>comparação</b>."])
  ];
  A.m4.aplicar = [
    { tipo: "busca_binaria", titulo: "🛠️ Na vida real: a casa nº 47",
      lista: [11, 25, 32, 40, 47, 55, 61], alvo: 47,
      enunciado: "<p>As casas da rua estão em <b>ordem</b>. Olhe sempre a casa do <b>meio</b> da parte que sobrou até achar a <b>47</b>.</p>",
      explicacao: "Meio 4 = 40 → 47 é maior; sobram 5 a 7 → meio 6 = 55 → menor; sobra a 5 = 47. Achou em 3 comparações." },
    VIDA(["A busca binária só funciona se a lista estiver…", ["Ordenada", "Bagunçada"], "Regra de ouro: só em lista <b>ordenada</b>."],
      ["No jogo de adivinhar de 1 a 100, o esperto chuta primeiro o…", ["50 (o meio)", "1"], "Chutar o <b>meio</b> joga fora metade a cada vez."])
  ];
  A.m5.aplicar = [
    { tipo: "sim_bolha", titulo: "🛠️ Na vida real: a fila por altura",
      enunciado: "<p>Clique em <b>⇄</b> para trocar vizinhos até a fila ficar do mais baixo para o mais alto.</p>",
      valores: [150, 138, 160, 145],
      explicacao: "Trocando vizinhos fora de ordem: 138, 145, 150, 160. É o método da bolha." },
    VIDA(["No método da bolha, você compara…", ["Dois vizinhos", "O primeiro e o último"], "A bolha compara <b>vizinhos</b> e troca se o da esquerda for maior."],
      ["No fim de uma passada, o maior número…", ["Está no final", "Está no começo"], "A cada passada, o maior sobe para o <b>final</b>."])
  ];
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: a matrioska",
      enunciado: "<p>O bloco <b>abrir</b> chama a si mesmo. Falta o texto do <b>caso base</b>: troque o <b>???</b> por <b>a bonequinha não abre</b> e rode. A tela deve mostrar:</p><p><b>abri a boneca 3</b><br><b>abri a boneca 2</b><br><b>a bonequinha não abre</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
      inicio: [["funcao", "abrir", [["se", ["=", v("n"), 1], [["mostrar", "???"]], [["mostrar", ["juntar", "abri a boneca ", v("n")]], ["mudar", "n", -1], ["chamar", "abrir"]]]]], ["definir", "n", 3], ["chamar", "abrir"]],
      esperado: ["abri a boneca 3", "abri a boneca 2", "a bonequinha não abre"],
      solucao: [["funcao", "abrir", [["se", ["=", v("n"), 1], [["mostrar", "a bonequinha não abre"]], [["mostrar", ["juntar", "abri a boneca ", v("n")]], ["mudar", "n", -1], ["chamar", "abrir"]]]]], ["definir", "n", 3], ["chamar", "abrir"]],
      dicas: ["Clique no ??? (dentro do “faça” do se) e digite a bonequinha não abre."],
      explicacao: "A bonequinha que não abre é o caso base: é ali que a recursão para." },
    VIDA(["A parte que faz a recursão <b>parar</b> é o…", ["Caso base", "Passo recursivo"], "O <b>caso base</b> é o caso pequeno que se resolve direto."],
      ["Sem caso base, a recursão…", ["Nunca para", "Para na hora"], "Sem caso base, ela <b>nunca para</b>."])
  ];
  A.m7.aplicar = [
    { tipo: "ordenar", titulo: "🛠️ Na vida real: os livros por seleção",
      enunciado: "<p>Os livros têm os números <b>3, 1, 2</b>. Na seleção, a cada rodada o <b>menor do que sobrou</b> vai para a frente. Coloque os estados da estante em ordem, do início ao fim.</p>",
      itens: ["3, 1, 2 (início)", "1, 3, 2", "1, 2, 3"],
      dicas: ["1ª rodada: o menor é o 1; ele troca com o 3."],
      explicacao: "1ª rodada: 1 ↔ 3 → 1, 3, 2 · 2ª: 2 ↔ 3 → 1, 2, 3." },
    VIDA(["Na seleção, a cada rodada você procura o…", ["Menor do que sobrou", "Maior vizinho"], "A cada rodada, o <b>menor do que sobrou</b> vai para a frente."],
      ["Escolher os times (o melhor, depois o melhor do que sobrou) lembra…", ["A seleção", "A bolha"], "É a mesma ideia da <b>seleção</b>."])
  ];
  A.m8.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: as montanhas fractais do jogo",
      enunciado: "<p>O jogo desenha montanhas com o triângulo de Sierpinski: a cada nível, os triângulos <b>multiplicam por 3</b>. O programa está mostrando só 2 níveis: troque o número do <b>repita</b> para <b>4</b> e rode. A tela deve mostrar:</p><p><b>Nível 1: 3</b><br><b>Nível 2: 9</b><br><b>Nível 3: 27</b><br><b>Nível 4: 81</b></p>",
      caixa: ["mostrar", "texto", "numero", "conta", "variavel", "repita"],
      inicio: [["definir", "t", 1], ["definir", "nivel", 1], ["repita", 2, [["definir", "t", ["*", v("t"), 3]], ["mostrar", ["juntar", "Nível ", v("nivel"), ": ", v("t")]], ["mudar", "nivel", 1]]]],
      esperado: ["Nível 1: 3", "Nível 2: 9", "Nível 3: 27", "Nível 4: 81"],
      solucao: [["definir", "t", 1], ["definir", "nivel", 1], ["repita", 4, [["definir", "t", ["*", v("t"), 3]], ["mostrar", ["juntar", "Nível ", v("nivel"), ": ", v("t")]], ["mudar", "nivel", 1]]]],
      dicas: ["Clique no 2 do repita e digite 4."],
      explicacao: "A cada nível, o número de triângulos multiplica por 3: 3, 9, 27, 81." },
    VIDA(["Cada folhinha da samambaia parece uma samambaia inteira. Isso é…", ["Um fractal", "Uma lista"], "Uma parte parecida com o todo é um <b>fractal</b>."],
      ["No Sierpinski, a cada nível o número de triângulos…", ["Multiplica por 3", "Diminui"], "Cada triângulo vira 3: <b>multiplica por 3</b>."])
  ];
})();
