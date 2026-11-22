/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 1º bimestre de 2027
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv).
   BNCC Computação: EF08CO01 (recursão), EF08CO02 (listas), EF08CO03 (algoritmos de listas).
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const NUM = ["mostrar", "texto", "numero", "conta", "variavel", "lista", "paracada", "se", "comparar"];
  PORTAL.registrarAtividades("informatica-8ano-2027-1bim", {

  /* ============ MISSÃO 1 — Listas ============ */
  m1: {
    pratica: [
      { tipo: "lista_ops", titulo: "Mão na massa: a lista CHAMADA", nome: "CHAMADA",
        inicial: ["Ana", "Bruno", "Carla", "Davi", "Elisa"],
        passos: [
          { tipo: "pergunta", instr: "Quem está na posição 3? (CHAMADA[3])", r: "Carla" },
          { tipo: "pergunta", instr: "Qual é a posição de Davi?", r: "4", num: true },
          { tipo: "pergunta", instr: "Qual é o tamanho da lista?", r: "5", num: true }],
        explicacao: "CHAMADA[3] = Carla. Davi está na posição 4. Tamanho = 5 itens; a última posição é igual ao tamanho." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Leia a lista NOTAS", robo: {"paineis": ["📋 Outra lista: IDADES = 12 · 15 · 11"], "passos": [{"fala": "Olha como eu leio uma lista <b>diferente</b>. As posições começam no <b>1</b>:", "painel": 0, "linha": "IDADES[1] = 12"}, {"fala": "", "painel": 0, "linha": "IDADES[2] = 15", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "IDADES[3] = 11", "espera": 900}, {"fala": "Tamanho = quantos itens: <b>3</b>. Em que posição está o 11? Na <b>3</b>.", "painel": 0, "linha": "Tamanho 3 · o 11 está na posição 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: leia a lista da tarefa do mesmo jeito! 💪"},
        enunciado: "<p><strong>NOTAS</strong> = 7 · 9 · 4 · 10 · 6 · 8 (posições 1 a 6)</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["NOTAS[2]", { r: "9", tipo: "num", dica: "O item da posição 2." }],
          ["NOTAS[5]", { r: "6", tipo: "num" }],
          ["Tamanho da lista", { r: "6", tipo: "num", dica: "Quantos itens?" }],
          ["Em que posição está o 10?", { r: "4", tipo: "num" }],
          ["Qual é a última posição?", { r: "6", tipo: "num", dica: "A última posição é igual ao tamanho." }]],
        explicacao: "NOTAS[2] = 9; NOTAS[5] = 6; o tamanho é 6; o 10 está na posição 4; a última posição é igual ao tamanho, 6." },

      { tipo: "classificar", modo: "tabela", titulo: "Ordenada ou não?",
        colunaItem: "Lista", colunaResp: "Como está",
        categorias: [{ id: "C", rot: "⬆️ Crescente" }, { id: "D", rot: "⬇️ Decrescente" }, { id: "A", rot: "🔤 Alfabética" }, { id: "N", rot: "🔀 Desordenada" }],
        itens: [
          { t: "3, 8, 12, 20", c: "C", why: "Do menor para o maior." },
          { t: "50, 31, 7, 2", c: "D", why: "Do maior para o menor." },
          { t: "Ana, Bia, Caio, Davi", c: "A", why: "De A a Z." },
          { t: "5, 1, 9, 3", c: "N", why: "Sobe e desce." },
          { t: "Zeca, Ana, Maria", c: "N", why: "Z antes de A: fora da ordem alfabética." }],
        explicacao: "Crescente: do menor para o maior. Decrescente: do maior para o menor. Alfabética: de A a Z. Fora disso, desordenada." },

      { tipo: "escolha", titulo: "Por que lista?",
        perguntas: [
          { p: "Guardar o nome de 19 alunos fica melhor em:", opcoes: ["Uma lista com 19 itens", "19 variáveis separadas", "Uma variável com um nome só"], certo: 0, why: "Com lista, percorremos com uma repetição e inserimos novos alunos." },
          { p: "Percorrer a lista é:", opcoes: ["Passar por todos os itens, do primeiro ao último", "Olhar só o primeiro item", "Apagar a lista"], certo: 0 },
          { p: "Outro nome para a posição de um item é:", opcoes: ["Índice", "Tamanho", "Item"], certo: 0 },
          { p: "Lista, vetor e array são:", opcoes: ["Nomes para a mesma estrutura de dados", "Três tipos de computador", "Programas diferentes"], certo: 0, why: "Array (inglês) = fileira arrumada." }],
        explicacao: "Lista (vetor, array) guarda vários itens com um nome só; posição = índice; percorrer = passar por todos." },

      { tipo: "blocos", titulo: "No editor: mostre itens da lista",
        enunciado: "<p>A lista <strong>notas</strong> (7, 9, 4, 10, 6, 8) já está criada. Mostre na tela:</p><p><strong>9</strong> (o item da posição 2)<br><strong>6</strong> (o tamanho da lista)</p><p>Gaveta 📝 Listas: “em lista … obter #” e “tamanho de”. Dentro deles, a variável notas (gaveta 📦 Variáveis).</p>",
        caixa: ["mostrar", "numero", "variavel", "lista"],
        inicio: [["definir", "notas", L(7, 9, 4, 10, 6, 8)]],
        esperado: ["9", "6"], exige: ["lista"],
        solucao: [["definir", "notas", L(7, 9, 4, 10, 6, 8)], ["mostrar", ["item", v("notas"), 2]], ["mostrar", ["tamanho", v("notas")]]],
        dicas: ["Encaixe dois blocos “mostrar na tela”, um embaixo do outro.", "No “em lista … obter #”, troque o número para 2."],
        explicacao: "“em lista notas obter # 2” → 9. “tamanho de notas” → 6." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Lista ordenada ou tanto faz?",
        colunaItem: "Situação", colunaResp: "Precisa estar ordenada?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "A classificação do campeonato (quem lidera)", c: "S", why: "É ordenada pelos pontos." },
          { t: "A fila de impressão (quem chegou primeiro imprime primeiro)", c: "N", why: "Vale a ordem de chegada, não uma ordem de valor." },
          { t: "Os contatos do celular, para achar rápido", c: "S", why: "Em ordem alfabética, acha-se rápido." },
          { t: "As compras do mercado anotadas na hora", c: "N", why: "Qualquer ordem serve." }],
        explicacao: "Quando precisamos achar rápido ou mostrar um ranking, a lista deve estar ordenada; quando importa a ordem de chegada, não." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Posição e item, um por linha",
        enunciado: "<p>Percorra a lista <strong>times</strong> (Leões, Águias, Tubarões) e mostre:</p><p>1: Leões<br>2: Águias<br>3: Tubarões</p><p>Use uma variável <strong>pos</strong> que começa em 1 e aumenta 1 a cada volta (“alterar pos por 1”).</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada"],
        inicio: [["definir", "times", L("Leões", "Águias", "Tubarões")]],
        esperado: ["1: Leões", "2: Águias", "3: Tubarões"], exige: ["paracada"],
        solucao: [["definir", "times", L("Leões", "Águias", "Tubarões")], ["definir", "pos", 1], ["paracada", "t", v("times"), [["mostrar", ["juntar", v("pos"), ": ", v("t")]], ["mudar", "pos", 1]]]],
        dicas: ["definir pos para 1 antes do para cada.", "Dentro do para cada: mostrar (criar texto com: pos, “: ”, o item) e depois alterar pos por 1."],
        explicacao: "O para cada percorre os itens; a variável pos acompanha a posição: 1, 2, 3." }
    ],
    vf: [
      { v: true, why: "Lista = vários itens, um nome só." },
      { v: false, corrigir: { trecho: "Ana", opcoes: ["Ana", "Bruno"], certo: "Bruno" }, why: "Posição 1 = Ana; posição 2 = Bruno." },
      { v: true, why: "Tamanho = quantidade de itens." },
      { v: true, why: "Do menor para o maior." },
      { v: false, corrigir: { trecho: "olhar só o primeiro item", opcoes: ["olhar só o primeiro item", "passar por todos os itens"], certo: "passar por todos os itens" }, why: "Percorrer é ir do primeiro ao último." }
    ]
  },

  /* ============ MISSÃO 2 — Inserir, remover e contar ============ */
  m2: {
    pratica: [
      { tipo: "lista_ops", titulo: "Mão na massa: a FILA da merenda", nome: "FILA",
        inicial: ["Ana", "Bia", "Caio", "Duda"],
        passos: [
          { tipo: "inserir", instr: "Enzo chegou: insira Enzo no fim.", esperado: ["Ana", "Bia", "Caio", "Duda", "Enzo"], dica: "Digite Enzo e clique em Inserir no fim." },
          { tipo: "remover", instr: "Bia foi embora: remova Bia.", esperado: ["Ana", "Caio", "Duda", "Enzo"], dica: "Clique em “remover” ao lado de Bia." },
          { tipo: "pergunta", instr: "Em que posição o Caio está agora?", r: "2", num: true },
          { tipo: "pergunta", instr: "Qual é o tamanho da fila agora?", r: "4", num: true }],
        explicacao: "Inserir no fim: tamanho 5. Remover Bia: quem estava atrás anda para a frente (Caio vai da 3 para a 2) e o tamanho volta a 4." }
    ],
    basico: [
      { tipo: "lista_ops", titulo: "O carrinho da loja", nome: "CARRINHO",
        inicial: ["fone", "capinha", "carregador"],
        passos: [
          { tipo: "inserir", instr: "Adicione pelicula no fim.", esperado: ["fone", "capinha", "carregador", "pelicula"] },
          { tipo: "remover", instr: "Desistiu da capinha: remova capinha.", esperado: ["fone", "carregador", "pelicula"] },
          { tipo: "pergunta", instr: "Quem está na posição 2 agora?", r: "carregador" },
          { tipo: "pergunta", instr: "Quantos itens o carrinho tem?", r: "3", num: true }],
        explicacao: "Ao remover a capinha (posição 2), o carregador andou para a posição 2. O número no ícone do carrinho é o tamanho: 3." },

      { tipo: "tabela", titulo: "Inserir no meio: todo mundo anda", robo: {"paineis": ["🚶 Outra fila: Léo · Mia"], "passos": [{"fala": "Olha o que acontece quando o Rui entra na <b>posição 1</b> de outra fila:", "painel": 0, "titulo": "Antes: 1 Léo · 2 Mia"}, {"fala": "O Rui ocupa a posição 1, e <b>todo mundo dali para trás anda uma posição</b>:", "painel": 0, "linha": "1 Rui", "marca": true}, {"fala": "", "painel": 0, "linha": "2 Léo", "espera": 700}, {"fala": "", "painel": 0, "linha": "3 Mia", "espera": 2400}], "fim": "Agora é a sua vez: faça a Gabi entrar na fila da tarefa! 💪"},
        enunciado: "<p>FILA = Ana · Caio · Duda. <strong>Gabi</strong> entra na <strong>posição 1</strong>.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Quem fica na posição 1?", { r: "Gabi" }],
          ["Em que posição a Ana fica?", { r: "2", tipo: "num", dica: "Quem estava dali para trás anda uma posição para trás." }],
          ["Em que posição o Duda fica?", { r: "4", tipo: "num" }],
          ["Qual é o novo tamanho?", { r: "4", tipo: "num" }]],
        explicacao: "Inserir na posição 1: Gabi, Ana, Caio, Duda. Todos andaram uma posição para trás e o tamanho aumentou 1." },

      { tipo: "tabela", titulo: "Conte na mão: quantas notas azuis?", robo: {"paineis": ["🔢 Outra lista: 6 · 2 · 7 (azul = 5 ou mais)"], "passos": [{"fala": "O contador começa em <b>0</b>. Para cada nota, eu pergunto: passa no teste?", "painel": 0, "linha": "6 ≥ 5? sim → contador 1", "marca": true}, {"fala": "", "painel": 0, "linha": "2 ≥ 5? não → contador continua 1", "espera": 1200}, {"fala": "", "painel": 0, "linha": "7 ≥ 5? sim → contador 2", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: teste cada nota da tarefa e atualize o contador! 💪"},
        enunciado: "<p>NOTAS = 8 · 4 · 6 · 3 · 9 · 5. Nota azul = maior ou igual a 5. O contador começa em 0.</p>",
        colunas: ["Item", "Passa no teste (≥ 5)?", "Contador depois"],
        linhas: [
          ["8", { op: ["sim", "não"], r: "sim" }, { r: "1", tipo: "num" }],
          ["4", { op: ["sim", "não"], r: "não" }, { r: "1", tipo: "num" }],
          ["6", { op: ["sim", "não"], r: "sim" }, { r: "2", tipo: "num" }],
          ["3", { op: ["sim", "não"], r: "não" }, { r: "2", tipo: "num" }],
          ["9", { op: ["sim", "não"], r: "sim" }, { r: "3", tipo: "num" }],
          ["5", { op: ["sim", "não"], r: "sim", dica: "5 é maior OU IGUAL a 5." }, { r: "4", tipo: "num" }]],
        explicacao: "O contador só soma 1 quando o item passa no teste: 8, 6, 9 e 5 → 4 notas azuis." },

      { tipo: "blocos", titulo: "No editor: o contador",
        enunciado: "<p>A lista <strong>notas</strong> é 8, 4, 6, 3, 9, 5. Complete o programa para mostrar quantas são maiores ou iguais a 5: <strong>4</strong>.</p><p>O contador <strong>azuis</strong> já começa em 0. Dentro do para cada: <strong>se</strong> o item ≥ 5, alterar azuis por 1. No fim, mostrar azuis.</p>",
        caixa: ["mostrar", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "notas", L(8, 4, 6, 3, 9, 5)], ["definir", "azuis", 0], ["paracada", "n", v("notas"), []]],
        esperado: ["4"], exige: ["paracada", "se"],
        solucao: [["definir", "notas", L(8, 4, 6, 3, 9, 5)], ["definir", "azuis", 0], ["paracada", "n", v("notas"), [["se", [">=", v("n"), 5], [["mudar", "azuis", 1]]]]], ["mostrar", v("azuis")]],
        dicas: ["Dentro do para cada, encaixe o “se” (o primeiro da gaveta Se).", "Condição: item ≥ 5. Dentro do se: alterar azuis por 1.", "O mostrar fica no fim, fora do para cada."],
        explicacao: "Contador começa em 0 e soma 1 a cada nota ≥ 5: 8, 6, 9, 5 → 4." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Várias operações seguidas", robo: {"paineis": ["📋 Outra lista: 1, 2"], "passos": [{"fala": "Faço <b>uma operação de cada vez</b>, na ordem, e escrevo como a lista ficou:", "painel": 0, "linha": "(1) inserir 3 no fim → 1, 2, 3"}, {"fala": "", "painel": 0, "linha": "(2) remover o 1 → 2, 3", "espera": 1200}, {"fala": "", "painel": 0, "linha": "(3) inserir 0 na posição 1 → 0, 2, 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as operações da tarefa, uma por vez! 💪"},
        enunciado: "<p>LISTA = 10 · 20 · 30. Faça na cabeça, na ordem: (1) inserir 40 no fim; (2) remover o 10; (3) inserir 5 na posição 1. Escreva como a lista fica depois de cada passo, separando por vírgula.</p>",
        colunas: ["Depois de", "Lista"],
        linhas: [
          ["(1) inserir 40 no fim", { r: "10, 20, 30, 40", tipo: "letras", ph: "_, _, _, _" }],
          ["(2) remover o 10", { r: "20, 30, 40", tipo: "letras", ph: "_, _, _" }],
          ["(3) inserir 5 na posição 1", { r: "5, 20, 30, 40", tipo: "letras", ph: "_, _, _, _" }],
          ["Tamanho final", { r: "4", tipo: "num" }]],
        explicacao: "10, 20, 30, 40 → 20, 30, 40 → 5, 20, 30, 40. Tamanho final 4." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Quantos tiraram nota azul e quantos não?",
        enunciado: "<p>Com a lista <strong>notas</strong> (8, 4, 6, 3, 9, 5), mostre:</p><p>Azuis: 4<br>Vermelhas: 2</p><p>Use dois contadores e o <strong>se … senão</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "notas", L(8, 4, 6, 3, 9, 5)]],
        esperado: ["Azuis: 4", "Vermelhas: 2"], exige: ["paracada", "se"],
        solucao: [["definir", "notas", L(8, 4, 6, 3, 9, 5)], ["definir", "azuis", 0], ["definir", "vermelhas", 0],
          ["paracada", "n", v("notas"), [["se", [">=", v("n"), 5], [["mudar", "azuis", 1]], [["mudar", "vermelhas", 1]]]]],
          ["mostrar", ["juntar", "Azuis: ", v("azuis")]], ["mostrar", ["juntar", "Vermelhas: ", v("vermelhas")]]],
        dicas: ["Os dois contadores começam em 0.", "No senão, altere o contador de vermelhas."],
        explicacao: "O se conta as azuis e o senão conta as vermelhas: 4 + 2 = 6, o tamanho da lista." }
    ],
    vf: [
      { v: true, why: "Um item a mais." },
      { v: true, why: "Eles andam para ocupar o lugar vazio." },
      { v: false, corrigir: { trecho: "não muda a posição dos outros itens", opcoes: ["não muda a posição dos outros itens", "faz todos os outros andarem uma posição para trás"], certo: "faz todos os outros andarem uma posição para trás" }, why: "Quem estava na 1 vai para a 2, e assim por diante." },
      { v: true, why: "Contador começa em 0." },
      { v: false, corrigir: { trecho: "aumenta", opcoes: ["aumenta", "diminui"], certo: "diminui" }, why: "Remover tira um item." }
    ]
  },

  /* ============ MISSÃO 3 — Busca sequencial ============ */
  m3: {
    pratica: [
      { tipo: "sequencial", titulo: "Mão na massa: ache o 9 virando as cartas",
        lista: [5, 8, 2, 9, 4], alvo: 9,
        enunciado: "<p>As cartas estão viradas. Vire uma por uma, da 1ª em diante, até achar o <strong>9</strong>. Conte quantas você virou.</p>",
        explicacao: "Você virou 4 cartas: 4 comparações, o 9 está na posição 4. Olhar um por um é a busca sequencial." }
    ],
    basico: [
      { tipo: "sequencial", titulo: "Busca sequencial: procure o 31",
        lista: [12, 40, 7, 31, 25, 3, 18, 52], alvo: 31,
        enunciado: "<p>Lista fora de ordem. Vire uma por uma até achar o <strong>31</strong>.</p>",
        explicacao: "12, 40, 7, 31: achou na 4ª comparação. Em lista desordenada, só a busca sequencial funciona." },

      { tipo: "tabela", titulo: "Conte as comparações", robo: {"paineis": ["🔎 Outra lista: 5 · 8 · 2 · 6"], "passos": [{"fala": "Na busca sequencial eu olho <b>um por um</b> e conto. Procurando o 2:", "painel": 0, "linha": "5? não · 8? não · 2? ACHEI → 3 comparações", "marca": true}, {"fala": "E se o número <b>não está</b> na lista, como o 9? Tenho que olhar <b>todos</b> para ter certeza:", "painel": 0, "linha": "9 → 4 comparações (a lista toda)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: conte as comparações da tarefa! 💪"},
        enunciado: "<p>LISTA = 6 · 14 · 3 · 22 · 9 · 17 · 1 · 30 (8 itens). Busca sequencial.</p>",
        colunas: ["Procurando", "Comparações"],
        linhas: [
          ["o 6", { r: "1", tipo: "num", dica: "Está na 1ª posição." }],
          ["o 9", { r: "5", tipo: "num" }],
          ["o 30", { r: "8", tipo: "num" }],
          ["o 50 (não está na lista)", { r: "8", tipo: "num", dica: "Para ter certeza de que não está, é preciso olhar todos." }]],
        explicacao: "A busca faz tantas comparações quanto a posição do item. Se o item não está, olha todos os 8." },

      { tipo: "escolha", titulo: "Melhor caso e pior caso",
        perguntas: [
          { p: "O melhor caso da busca sequencial é quando o item:", opcoes: ["É o primeiro da lista", "É o último", "Não está na lista"], certo: 0, why: "1 comparação só." },
          { p: "O pior caso é quando o item:", opcoes: ["É o último ou não está na lista", "É o primeiro", "Está no meio"], certo: 0, why: "Precisa olhar todos." },
          { p: "Numa lista de 1.000 itens, o pior caso tem:", opcoes: ["1.000 comparações", "10 comparações", "1 comparação"], certo: 0 },
          { p: "A busca sequencial funciona em lista desordenada?", opcoes: ["Sim, em qualquer lista", "Não, só em lista ordenada", "Só em listas pequenas"], certo: 0 }],
        explicacao: "Melhor caso: 1 comparação. Pior caso: tantas quanto o tamanho. Funciona em qualquer lista, mas fica lenta nas grandes." },

      { tipo: "blocos", titulo: "No editor: a busca que diz a posição",
        enunciado: "<p>Complete a busca sequencial do <strong>9</strong> na lista 5, 8, 2, 9, 4. A variável <strong>pos</strong> começa em 1 e anda a cada item. Dentro do para cada: <strong>se</strong> o item = 9, mostrar “Achei na posição ” junto com pos; depois alterar pos por 1.</p><p>Deve aparecer: <strong>Achei na posição 4</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "lista", L(5, 8, 2, 9, 4)], ["definir", "pos", 1], ["paracada", "x", v("lista"), [["mudar", "pos", 1]]]],
        esperado: ["Achei na posição 4"], exige: ["paracada", "se"],
        solucao: [["definir", "lista", L(5, 8, 2, 9, 4)], ["definir", "pos", 1], ["paracada", "x", v("lista"), [["se", ["=", v("x"), 9], [["mostrar", ["juntar", "Achei na posição ", v("pos")]]]], ["mudar", "pos", 1]]]],
        dicas: ["O se entra dentro do para cada, ANTES do “alterar pos por 1”.", "Condição: o item (x) = 9."],
        explicacao: "A cada item compara com 9 (uma comparação); pos acompanha a posição; no 4º item a condição é verdadeira." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Listas grandes", enunciado: "<p>Na <strong>busca sequencial</strong> (olhando um por um, desde o começo), quantas comparações são feitas em cada situação? Lembre: se o item não está na lista, é preciso olhar todos.</p>", robo: {"paineis": ["🔎 Outra lista: 50 nomes"], "passos": [{"fala": "Na busca sequencial, se o meu nome é o <b>12º</b>, eu olho 12 nomes:", "painel": 0, "linha": "O 12º → 12 comparações"}, {"fala": "Se o nome <b>não está</b>, olho a lista toda. Esse é o <b>pior caso</b>:", "painel": 0, "linha": "Não está → 50 comparações", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: pense do mesmo jeito com as listas da tarefa! 💪"},
        colunas: ["Situação", "Comparações"],
        linhas: [
          ["Lista de 500 nomes; o seu é o 320º", { r: "320", tipo: "num" }],
          ["Lista de 500 nomes; o seu não está", { r: "500", tipo: "num" }],
          ["Lista de 2.000 produtos; pior caso", { r: "2000", tipo: "num" }]],
        explicacao: "Na busca sequencial, as comparações são a posição do item, ou o tamanho da lista no pior caso." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "A busca que avisa quando não acha",
        enunciado: "<p>Procure o <strong>7</strong> na lista 5, 8, 2, 9, 4. Use a variável <strong>achou</strong>, que começa <strong>falso</strong> e vira <strong>verdadeiro</strong> quando encontra. No fim: se achou, mostrar “Achei!”; senão, mostrar “Não está na lista”.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "lista", L(5, 8, 2, 9, 4)], ["definir", "achou", false]],
        esperado: ["Não está na lista"], exige: ["paracada", "se"],
        solucao: [["definir", "lista", L(5, 8, 2, 9, 4)], ["definir", "achou", false], ["paracada", "x", v("lista"), [["se", ["=", v("x"), 7], [["definir", "achou", true]]]]],
          ["se", ["=", v("achou"), true], [["mostrar", "Achei!"]], [["mostrar", "Não está na lista"]]]],
        dicas: ["O bloco verdadeiro/falso fica na gaveta ⚖️ Comparar.", "Dentro do para cada: se item = 7, definir achou para verdadeiro.", "O se final fica fora do para cada."],
        explicacao: "Só depois de olhar todos (pior caso) dá para dizer que o 7 não está. A variável achou guarda se ele apareceu." }
    ],
    vf: [
      { v: true, why: "Um por um, em sequência." },
      { v: false, corrigir: { trecho: "só funciona em listas ordenadas", opcoes: ["só funciona em listas ordenadas", "funciona em qualquer lista"], certo: "funciona em qualquer lista" }, why: "Quem precisa de ordem é a busca binária." },
      { v: true, why: "5, 8, 2, 9: quatro olhadas." },
      { v: false, corrigir: { trecho: "o primeiro da lista", opcoes: ["o primeiro da lista", "o último ou não está na lista"], certo: "o último ou não está na lista" }, why: "Primeiro é o melhor caso." },
      { v: true, why: "Olha todos os 1.000." }
    ]
  },

  /* ============ MISSÃO 4 — Busca binária ============ */
  m4: {
    pratica: [
      { tipo: "sim_adivinhe", titulo: "Mão na massa: adivinhe o número de 1 a 100", max: 100, meta: 7,
        enunciado: "<p>O computador pensou num número de 1 a 100. Chute sempre o <strong>meio</strong> do que sobrou: 50, depois 25 ou 75… Consegue em até 7 chutes?</p>",
        explicacao: "Chutar o meio corta as opções pela metade: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. No máximo 7 chutes." }
    ],
    basico: [
      { tipo: "busca_binaria", titulo: "Procure o 31 pelo meio",
        lista: [3, 7, 12, 18, 25, 31, 40, 52], alvo: 31,
        enunciado: "<p>Lista <strong>ordenada</strong>. Clique sempre na carta do <strong>meio</strong> da parte que sobrou.</p>",
        explicacao: "Posições 1 a 8 → meio 4 = 18 → 31 é maior; posições 5 a 8 → meio 6 = 31: achou em 2 comparações (a sequencial faria 6)." },

      { tipo: "busca_binaria", titulo: "Procure o 4 pelo meio",
        lista: [1, 4, 6, 9, 11, 15, 20], alvo: 4,
        enunciado: "<p>Clique sempre no meio da parte que sobrou.</p>",
        explicacao: "Posições 1 a 7 → meio 4 = 9 → 4 é menor; posições 1 a 3 → meio 2 = 4: achou em 2 comparações." },

      { tipo: "escolha", titulo: "Binária × sequencial",
        perguntas: [
          { p: "Lista 9, 2, 7, 1 (fora de ordem). Posso usar a busca binária?", opcoes: ["Não: ela só funciona em lista ordenada", "Sim, sempre", "Só se a lista for pequena"], certo: 0, why: "Sem ordem, não dá para saber de que lado jogar fora." },
          { p: "O procurado é MAIOR que o meio. Jogo fora:", opcoes: ["A metade da esquerda", "A metade da direita", "Nada"], certo: 0, why: "Os menores ficam à esquerda numa lista crescente." },
          { p: "Lista de 1.000 itens ordenados. Pior caso da binária:", opcoes: ["10 comparações", "1.000 comparações", "500 comparações"], certo: 0 },
          { p: "Por que se chama binária?", opcoes: ["Porque divide em duas partes a cada vez", "Porque usa só 0 e 1", "Porque é para dois jogadores"], certo: 0 }],
        explicacao: "Binária = em duas partes. Só funciona em lista ordenada. Maior que o meio → descarta a esquerda. 1.000 itens → no máximo 10 comparações." },

      { tipo: "tabela", titulo: "Compare as buscas", robo: {"paineis": ["⚖️ Outra lista: 4 itens (ordenada)"], "passos": [{"fala": "<b>Sequencial</b>, no pior caso: olho todos.", "painel": 0, "linha": "Sequencial: 4"}, {"fala": "<b>Binária</b>: a cada olhada a lista cai pela metade. Conto os números da corrente:", "painel": 0, "linha": "Binária: 4 → 2 → 1 = 3 olhadas", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça o mesmo com 8, 100 e 1.000 itens (o 💡 Para começar ajuda)! 💪"},
        colunas: ["Itens na lista (ordenada)", "Pior caso sequencial", "Pior caso binária"],
        linhas: [
          ["8", { r: "8", tipo: "num" }, { r: "4", tipo: "num" }],
          ["100", { r: "100", tipo: "num" }, { r: "7", tipo: "num" }],
          ["1.000", { r: "1000", tipo: "num" }, { r: "10", tipo: "num" }]],
        dicas: ["Releia a tabela “Por que é tão rápida?” no 💡 Para começar."],
        explicacao: "A sequencial pode olhar todos; a binária corta pela metade: 8 → 4, 100 → 7, 1.000 → 10." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Escreva os meios", robo: {"paineis": ["🎯 Outra lista: 1 · 3 · 5 · 7 · 9 · 11 · 13 (7 itens), procurando o 11"], "passos": [{"fala": "1ª tentativa: o meio de 1 a 7 é a posição 4:", "painel": 0, "linha": "Posições 1 a 7 → meio = 7"}, {"fala": "11 é maior que 7, então jogo fora a metade da esquerda. Sobram as posições 5 a 7:", "painel": 0, "linha": "Posições 5 a 7 → meio = 11", "marca": true}, {"fala": "Achei o 11 na 2ª tentativa!", "painel": null, "espera": 2400}], "fim": "Agora é a sua vez: ache os meios procurando o 89! 💪"},
        enunciado: "<p>LISTA = 2 · 5 · 8 · 13 · 21 · 34 · 55 · 89 · 144 (9 itens). Procurando o <strong>89</strong> com busca binária. Meio = posição do meio da parte que sobrou (com número par de itens, a da esquerda).</p>",
        colunas: ["Tentativa", "Parte que sobrou (posições)", "Item do meio"],
        linhas: [
          ["1ª", "1 a 9", { r: "21", tipo: "num", dica: "Meio de 1 a 9 = posição 5." }],
          ["2ª", { r: ["6 a 9", "6-9"], tipo: "letras", ph: "_ a _" }, { r: "55", tipo: "num", dica: "Meio de 6 a 9 = posição 7." }],
          ["3ª", { r: ["8 a 9", "8-9"], tipo: "letras", ph: "_ a _" }, { r: "89", tipo: "num", dica: "Meio de 8 a 9 = posição 8." }]],
        explicacao: "1ª: meio 5 = 21 → 89 é maior → sobra 6 a 9. 2ª: meio 7 = 55 → maior → sobra 8 a 9. 3ª: meio 8 = 89 → achou em 3 comparações." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Listas enormes", robo: {"paineis": ["✂️ Outro tamanho: 8 itens"], "passos": [{"fala": "A cada comparação a lista cai pela metade. Escrevo a corrente até sobrar 1:", "painel": 0, "linha": "8 → 4 → 2 → 1"}, {"fala": "Conto os números da corrente: são <b>4 olhadas</b> no pior caso.", "painel": 0, "linha": "8 itens → 4 comparações", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: faça a corrente de 16, 32… e conte! 💪"},
        enunciado: "<p>A cada comparação, a lista cai pela metade. Conte quantas vezes dá para dividir por 2 até sobrar 1 item.</p>",
        colunas: ["Itens", "Comparações no pior caso (binária)"],
        linhas: [
          ["16", { r: "5", tipo: "num", dica: "16 → 8 → 4 → 2 → 1: são 5 olhadas (contando a última)." }],
          ["32", { r: "6", tipo: "num" }],
          ["1.000.000", { r: "20", tipo: "num", dica: "Veja a última linha da tabela do 💡 Para começar." }]],
        explicacao: "Dobrar o tamanho da lista acrescenta só 1 comparação: 16 → 5, 32 → 6. Um milhão → 20. Por isso a busca binária é tão usada." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "funciona em qualquer lista, mesmo fora de ordem", opcoes: ["funciona em qualquer lista, mesmo fora de ordem", "só funciona em lista ordenada"], certo: "só funciona em lista ordenada" }, why: "Precisa da ordem para descartar uma metade." },
      { v: true, why: "Sempre pelo meio." },
      { v: true, why: "Corta pela metade." },
      { v: true, why: "100 → 50 → 25 → 13 → 7 → 4 → 2 → 1." },
      { v: false, corrigir: { trecho: "a busca sequencial é mais rápida que a binária", opcoes: ["a busca sequencial é mais rápida que a binária", "a busca binária é mais rápida que a sequencial"], certo: "a busca binária é mais rápida que a sequencial" }, why: "1.000 itens: 10 × 1.000 comparações." }
    ]
  },

  /* ============ MISSÃO 5 — Método da bolha ============ */
  m5: {
    pratica: [
      { tipo: "sim_bolha", titulo: "Mão na massa: troque os vizinhos",
        enunciado: "<p>Clique em <strong>⇄</strong> para trocar dois vizinhos. Deixe em <strong>ordem crescente</strong>.</p>",
        valores: [42, 7, 19, 3, 25],
        explicacao: "Trocar vizinhos fora de ordem, até não precisar mais trocar: é o método da bolha." }
    ],
    basico: [
      { tipo: "bolha", titulo: "Trocar ou manter? Ordene 6, 3, 9, 1", lista: [6, 3, 9, 1],
        enunciado: "<p>Compare os vizinhos destacados: se o da esquerda for <strong>maior</strong>, <strong>troque</strong>; senão, <strong>mantenha</strong>.</p>",
        explicacao: "1ª passada: 3, 6, 1, 9 · 2ª: 3, 1, 6, 9 · 3ª: 1, 3, 6, 9. O maior que falta sobe para o fim a cada passada." },

      { tipo: "bolha", titulo: "Ordene 5, 2, 8, 1, 4", lista: [5, 2, 8, 1, 4],
        explicacao: "1ª passada: 2, 5, 1, 4, 8 · 2ª: 2, 1, 4, 5, 8 · 3ª: 1, 2, 4, 5, 8 · 4ª: sem trocas, terminou." },

      { tipo: "tabela", titulo: "Escreva as passadas de 4, 3, 2, 1", robo: {"paineis": ["🫧 Bolha com outra lista: 3, 1, 2"], "passos": [{"fala": "Comparo dois vizinhos; se o da esquerda for <b>maior</b>, troco:", "painel": 0, "titulo": "Original: 3, 1, 2"}, {"fala": "3 e 1: troca! 3 e 2: troca!", "painel": 0, "linha": "Passada 1: 1, 2, 3", "marca": true}, {"fala": "Na passada 2 ninguém troca: está em ordem!", "painel": 0, "linha": "Passada 2: 1, 2, 3", "espera": 2400}], "fim": "Agora é a sua vez: escreva as passadas de 4, 3, 2, 1! 💪"},
        enunciado: "<p>Faça o método da bolha (crescente) e escreva a lista no fim de cada passada, com vírgulas.</p>",
        colunas: ["Etapa", "Lista"],
        linhas: [["Original", "4, 3, 2, 1"], ["Passada 1", { r: "3, 2, 1, 4", tipo: "letras", ph: "_, _, _, _" }], ["Passada 2", { r: "2, 1, 3, 4", tipo: "letras", ph: "_, _, _, _" }], ["Passada 3", { r: "1, 2, 3, 4", tipo: "letras", ph: "_, _, _, _" }]],
        dicas: ["Na 1ª passada o 4 vai trocando até o fim."],
        explicacao: "Cada passada leva o maior que falta para o fim: 3, 2, 1, 4 → 2, 1, 3, 4 → 1, 2, 3, 4." },

      { tipo: "escolha", titulo: "Entendeu a bolha?",
        perguntas: [
          { p: "Para ordem crescente, troco os vizinhos quando:", opcoes: ["O da esquerda é maior", "O da esquerda é menor", "São iguais"], certo: 0 },
          { p: "No fim da 1ª passada, onde está o maior número?", opcoes: ["No final da lista", "No começo", "No meio"], certo: 0, why: "Ele sobe como uma bolha." },
          { p: "Quando o método termina?", opcoes: ["Quando uma passada inteira não faz nenhuma troca", "Depois de 1 passada", "Nunca"], certo: 0 }],
        explicacao: "Troca quando o da esquerda é maior; o maior sobe para o fim; termina numa passada sem trocas." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Agora decrescente: 2, 7, 4, 9", robo: {"paineis": ["🫧 Decrescente com outra lista: 1, 3, 2"], "passos": [{"fala": "Em ordem <b>decrescente</b>, a regra vira: troco quando o da esquerda for <b>menor</b>.", "painel": 0, "titulo": "Original: 1, 3, 2"}, {"fala": "1 e 3: o 1 é menor, troca! Depois 1 e 2: troca de novo!", "painel": 0, "linha": "Passada 1: 3, 2, 1", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as passadas de 2, 7, 4, 9 em ordem decrescente! 💪"},
        enunciado: "<p>Ordem <strong>decrescente</strong> (do maior para o menor): troque quando o da esquerda for <strong>menor</strong>.</p>",
        colunas: ["Etapa", "Lista"],
        linhas: [["Original", "2, 7, 4, 9"], ["Passada 1", { r: "7, 4, 9, 2", tipo: "letras", ph: "_, _, _, _" }], ["Passada 2", { r: "7, 9, 4, 2", tipo: "letras", ph: "_, _, _, _" }], ["Passada 3", { r: "9, 7, 4, 2", tipo: "letras", ph: "_, _, _, _" }], ["Quantas trocas ao todo?", { r: "5", tipo: "num", dica: "Passada 1: 3 trocas; passada 2: 1; passada 3: 1." }]],
        explicacao: "No decrescente, o menor é que vai para o fim. 2,7 troca; 2,4 troca; 2,9 troca → 7, 4, 9, 2. Depois 4,9 troca → 7, 9, 4, 2. Depois 7,9 troca → 9, 7, 4, 2. Total: 5 trocas." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Quando a bolha termina cedo?",
        perguntas: [
          { p: "A lista 1, 2, 3, 4 já está em ordem. Quantas passadas o método faz?", opcoes: ["1 passada, sem nenhuma troca, e termina", "4 passadas", "Nenhuma"], certo: 0, why: "Uma passada sem trocas mostra que já está ordenada." },
          { p: "Qual lista dá mais trabalho (mais trocas) para ordenar em crescente?", opcoes: ["4, 3, 2, 1 (ao contrário)", "1, 2, 3, 4", "1, 2, 4, 3"], certo: 0, why: "Tudo fora de ordem: todo par troca." },
          { p: "Por que o método da bolha é lento em listas enormes?", opcoes: ["Compara vizinhos muitas vezes, passada por passada", "Porque não compara nada", "Porque só funciona com letras"], certo: 0 }],
        explicacao: "A bolha termina numa passada sem trocas: lista já ordenada = 1 passada; lista ao contrário = o pior caso." }
    ],
    vf: [
      { v: true, why: "Sempre vizinhos." },
      { v: false, corrigir: { trecho: "é menor", opcoes: ["é menor", "é maior"], certo: "é maior" }, why: "Para crescente, o maior vai para a direita." },
      { v: true, why: "Ele sobe como bolha." },
      { v: true, why: "Sem troca = já ordenada." },
      { v: false, corrigir: { trecho: "crescente", opcoes: ["crescente", "decrescente"], certo: "decrescente" }, why: "Do maior para o menor é decrescente." }
    ]
  },

  /* ============ MISSÃO 6 — Recursão ============ */
  m6: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: a contagem recursiva",
        enunciado: "<p>O bloco <strong>contar</strong> chama <strong>a si mesmo</strong>. Rode e veja: 3, 2, 1, Fogo! Depois mude o “definir n para 3” para <strong>5</strong> e rode de novo.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
        inicio: [["funcao", "contar", [["se", ["=", v("n"), 0], [["mostrar", "Fogo!"]], [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]]]], ["definir", "n", 3], ["chamar", "contar"]],
        esperado: ["5", "4", "3", "2", "1", "Fogo!"],
        solucao: [["funcao", "contar", [["se", ["=", v("n"), 0], [["mostrar", "Fogo!"]], [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]]]], ["definir", "n", 5], ["chamar", "contar"]],
        dicas: ["Só troque o 3 por 5 no bloco “definir n para”."],
        explicacao: "Caso base: n = 0 → “Fogo!”. Passo recursivo: mostra n, diminui 1 e chama contar de novo, cada vez menor." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Caso base ou passo recursivo?",
        colunaItem: "Parte", colunaResp: "É…",
        categorias: [{ id: "B", rot: "🛑 Caso base" }, { id: "P", rot: "🔁 Passo recursivo" }],
        itens: [
          { t: "Matrioska: abrir a boneca e repetir com a de dentro", c: "P", why: "Repete com o problema menor." },
          { t: "Matrioska: a bonequinha que não abre", c: "B", why: "É onde para." },
          { t: "Fila: perguntar a posição para quem está na frente", c: "P", why: "Mesma pergunta, fila menor." },
          { t: "Fila: o primeiro responde “sou o 1”", c: "B", why: "Resposta direta, sem perguntar a ninguém." },
          { t: "Contagem: n = 0 → mostrar “Fogo!”", c: "B", why: "Para a recursão." },
          { t: "Contagem: mostrar n e contar a partir de n − 1", c: "P", why: "Chama o mesmo problema, menor." }],
        explicacao: "Passo recursivo: resolve com uma versão menor do mesmo problema. Caso base: o caso simples que faz parar." },

      { tipo: "ordenar", titulo: "A fila do cinema, de trás para a frente",
        enunciado: "<p>Você é o 4º da fila. Coloque em ordem o que acontece.</p>",
        itens: ["Você pergunta ao 3º: “qual é a sua posição?”", "O 3º pergunta ao 2º", "O 2º pergunta ao 1º", "O 1º responde: “sou o 1” (caso base)", "O 2º soma 1 e diz “sou o 2”", "O 3º soma 1 e diz “sou o 3”", "Você soma 1: “sou o 4”"],
        explicacao: "As perguntas vão para a frente até o caso base; as respostas voltam para trás, cada um somando 1." },

      { tipo: "escolha", titulo: "Recursão: confira",
        perguntas: [
          { p: "Recursão é:", opcoes: ["Resolver um problema usando uma versão menor dele mesmo", "Repetir sem parar", "Ordenar uma lista"], certo: 0 },
          { p: "Dois espelhos frente a frente mostram imagens sem fim porque:", opcoes: ["Não há caso base: nada faz parar", "Os espelhos estão quebrados", "Têm caso base"], certo: 0 },
          { p: "Por que pastas dentro de pastas são recursivas?", opcoes: ["Cada pasta pode ter pastas dentro, do mesmo jeito", "Porque são amarelas", "Porque não têm arquivos"], certo: 0 }],
        explicacao: "Recursão = o problema dentro do problema, com caso base. Sem caso base, não para (espelhos)." },

      { tipo: "tabela", titulo: "Siga a contagem recursiva", robo: {"paineis": ["🔁 Outra função: pular(n)"], "passos": [{"fala": "pular(n): <b>se n = 0</b>, mostra “Chegou!”; <b>senão</b>, mostra n e chama pular(n − 1). Começo com pular(2):", "painel": 0, "linha": "pular(2) → mostra 2"}, {"fala": "", "painel": 0, "linha": "pular(1) → mostra 1", "espera": 1000}, {"fala": "Chegou no zero: é o <b>caso base</b>, que faz a função parar!", "painel": 0, "linha": "pular(0) → mostra “Chegou!”", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: siga contar(3)! 💪"},
        enunciado: "<p>contar(n): <strong>se n = 0</strong>, mostrar “Fogo!”; <strong>senão</strong>, mostrar n e contar(n − 1). Começando com contar(3):</p>",
        colunas: ["Chamada", "O que mostra"],
        linhas: [["contar(3)", { r: "3" }], ["contar(2)", { r: "2" }], ["contar(1)", { r: "1" }], ["contar(0)", { r: "Fogo!", tipo: "letras" }]],
        explicacao: "Cada chamada mostra o seu n e chama com n − 1, até contar(0), o caso base, que mostra “Fogo!”." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "Conserte a recursão que não para",
        enunciado: "<p>Este bloco <strong>contar</strong> chama a si mesmo, mas esqueceram o <strong>caso base</strong>: rode e veja o aviso. Conserte para mostrar <strong>3, 2, 1, Fogo!</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
        inicio: [["funcao", "contar", [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]], ["definir", "n", 3], ["chamar", "contar"]],
        esperado: ["3", "2", "1", "Fogo!"], exige: ["se"],
        solucao: [["funcao", "contar", [["se", ["=", v("n"), 0], [["mostrar", "Fogo!"]], [["mostrar", v("n")], ["mudar", "n", -1], ["chamar", "contar"]]]]], ["definir", "n", 3], ["chamar", "contar"]],
        dicas: ["Coloque um “se … faça … senão” dentro do bloco contar.", "Se n = 0: mostrar “Fogo!”. Senão: os três blocos que já estavam lá."],
        explicacao: "Sem caso base, a recursão não para. O se n = 0 é a condição de parada." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Recursão da soma", robo: {"paineis": ["🔁 Outra função: dobro(n)"], "passos": [{"fala": "dobro(n): <b>se n = 1</b>, a resposta é 2 (caso base); <b>senão</b>, 2 + dobro(n − 1). Eu calculo <b>de baixo para cima</b>:", "painel": 0, "linha": "dobro(1) = 2"}, {"fala": "", "painel": 0, "linha": "dobro(2) = 2 + dobro(1) = 2 + 2 = 4", "espera": 1200}, {"fala": "", "painel": 0, "linha": "dobro(3) = 2 + dobro(2) = 2 + 4 = 6", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: calcule soma(1), soma(2)… de baixo para cima! 💪"},
        enunciado: "<p>soma(n) = <strong>se n = 1</strong>, a resposta é 1 (caso base); <strong>senão</strong>, n + soma(n − 1). Calcule de baixo para cima.</p>",
        colunas: ["Chamada", "Resultado"],
        linhas: [["soma(1)", { r: "1", tipo: "num" }], ["soma(2) = 2 + soma(1)", { r: "3", tipo: "num" }], ["soma(3) = 3 + soma(2)", { r: "6", tipo: "num" }], ["soma(4) = 4 + soma(3)", { r: "10", tipo: "num" }]],
        explicacao: "soma(4) = 4 + 3 + 2 + 1 = 10. Cada chamada usa a resposta da chamada menor; o caso base é soma(1) = 1." }
    ],
    vf: [
      { v: true, why: "Problema dentro do problema." },
      { v: true, why: "Caso base faz parar." },
      { v: false, corrigir: { trecho: "a primeira boneca, a maior", opcoes: ["a primeira boneca, a maior", "a última bonequinha, que não abre"], certo: "a última bonequinha, que não abre" }, why: "É nela que para." },
      { v: true, why: "Como os espelhos." },
      { v: true, why: "Pasta dentro de pasta." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Ordenação por seleção ============ */
  m7: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: ache o menor", enunciado: "<p>Olhe cada lista e escreva o <strong>menor</strong> item (o mínimo). Nos nomes, o menor é o que vem primeiro na <strong>ordem alfabética</strong>.</p>", robo: {"paineis": ["🔎 Outros exemplos"], "passos": [{"fala": "Olho todos os itens e guardo o menor que eu já vi:", "painel": 0, "linha": "6, 3, 8 → o menor é 3", "marca": true}, {"fala": "Com nomes, o “menor” é o que vem <b>primeiro no alfabeto</b>:", "painel": 0, "linha": "Téo, Lia, Rui → Lia", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: ache o menor de cada lista da tarefa! 💪"},
        colunas: ["Lista", "Menor item (mínimo)"],
        linhas: [["7, 2, 9, 4", { r: "2", tipo: "num" }], ["15, 8, 23, 11", { r: "8", tipo: "num" }], ["Caio, Ana, Bia (alfabético)", { r: "Ana" }]],
        explicacao: "O mínimo é o menor valor (ou o primeiro em ordem alfabética). A seleção começa sempre achando o mínimo." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Seleção passo a passo: 8, 3, 6, 1", robo: {"paineis": ["🏅 Seleção com outra lista: 3, 1, 2"], "passos": [{"fala": "A cada rodada, eu acho o <b>menor do que sobrou</b> e troco com a próxima posição.", "painel": 0, "titulo": "Original: 3, 1, 2"}, {"fala": "1ª rodada: o menor é o 1. Troco com a posição 1 (o 3):", "painel": 0, "linha": "1ª: 1, 3, 2", "marca": true}, {"fala": "2ª rodada: do que sobrou (3, 2), o menor é o 2. Troco com a posição 2:", "painel": 0, "linha": "2ª: 1, 2, 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as rodadas com a lista da tarefa! 💪"},
        enunciado: "<p>A cada rodada, ache o menor do que sobrou e troque com a próxima posição. Escreva a lista depois de cada rodada, com vírgulas.</p>",
        colunas: ["Rodada", "Menor do que sobrou", "Lista depois da troca"],
        linhas: [
          ["1ª", { r: "1", tipo: "num" }, { r: "1, 3, 6, 8", tipo: "letras", ph: "_, _, _, _", dica: "O 1 troca com o 8 (posição 1)." }],
          ["2ª", { r: "3", tipo: "num" }, { r: "1, 3, 6, 8", tipo: "letras", ph: "_, _, _, _", dica: "O 3 já está na posição 2: não precisa trocar." }],
          ["3ª", { r: "6", tipo: "num" }, { r: "1, 3, 6, 8", tipo: "letras", ph: "_, _, _, _" }]],
        explicacao: "1ª rodada: menor 1, troca com o 8 → 1, 3, 6, 8. Nas outras rodadas o menor já estava no lugar: nenhuma troca." },

      { tipo: "tabela", titulo: "Seleção: 7, 2, 9, 4", robo: {"paineis": ["🏅 Seleção com outra lista: 3, 1, 2"], "passos": [{"fala": "A cada rodada, eu acho o <b>menor do que sobrou</b> e troco com a próxima posição.", "painel": 0, "titulo": "Original: 3, 1, 2"}, {"fala": "1ª rodada: o menor é o 1. Troco com a posição 1 (o 3):", "painel": 0, "linha": "1ª: 1, 3, 2", "marca": true}, {"fala": "2ª rodada: do que sobrou (3, 2), o menor é o 2. Troco com a posição 2:", "painel": 0, "linha": "2ª: 1, 2, 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as rodadas com a lista da tarefa! 💪"},
        colunas: ["Rodada", "Lista depois da troca"],
        linhas: [["1ª", { r: "2, 7, 9, 4", tipo: "letras", ph: "_, _, _, _" }], ["2ª", { r: "2, 4, 9, 7", tipo: "letras", ph: "_, _, _, _" }], ["3ª", { r: "2, 4, 7, 9", tipo: "letras", ph: "_, _, _, _" }]],
        dicas: ["Releia o exemplo do 💡 Para começar: é esta mesma lista."],
        explicacao: "2 ↔ 7 → 2, 7, 9, 4; 4 ↔ 7 → 2, 4, 9, 7; 7 ↔ 9 → 2, 4, 7, 9." },

      { tipo: "classificar", modo: "tabela", titulo: "Bolha ou seleção?",
        colunaItem: "Característica", colunaResp: "Método",
        categorias: [{ id: "B", rot: "🫧 Bolha" }, { id: "S", rot: "🏅 Seleção" }],
        itens: [
          { t: "Compara sempre os vizinhos", c: "B" },
          { t: "Procura o menor do que sobrou", c: "S" },
          { t: "O maior sobe para o fim a cada passada", c: "B" },
          { t: "No máximo uma troca por rodada", c: "S" },
          { t: "Parece escolher os times no recreio", c: "S" }],
        explicacao: "Bolha: vizinhos, o maior sobe, muitas trocas. Seleção: procura o mínimo, poucas trocas, como escolher times." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Seleção em ordem alfabética", robo: {"paineis": ["🔤 Outra lista: Rui, Ana, Lia"], "passos": [{"fala": "Com nomes, o menor é o que vem <b>primeiro no alfabeto</b>. 1ª rodada: Ana. Troco com a posição 1:", "painel": 0, "linha": "1ª: Ana, Rui, Lia", "marca": true}, {"fala": "2ª rodada: do que sobrou (Rui, Lia), o menor é Lia. Troco com a posição 2:", "painel": 0, "linha": "2ª: Ana, Lia, Rui", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ordene Davi, Bia, Elisa, Ana e Caio! 💪"},
        enunciado: "<p>Ordene por seleção: <strong>Davi, Bia, Elisa, Ana, Caio</strong>.</p>",
        colunas: ["Rodada", "Lista depois da troca"],
        linhas: [
          ["1ª (menor: Ana)", { r: "Ana, Bia, Elisa, Davi, Caio", tipo: "letras" }],
          ["2ª (menor do que sobrou: Bia)", { r: "Ana, Bia, Elisa, Davi, Caio", tipo: "letras", dica: "Bia já está na posição 2." }],
          ["3ª", { r: "Ana, Bia, Caio, Davi, Elisa", tipo: "letras", dica: "O menor de Elisa, Davi, Caio é Caio: troca com Elisa." }]],
        explicacao: "Ana ↔ Davi; Bia fica; Caio ↔ Elisa. Na 4ª rodada, Davi já está no lugar: Ana, Bia, Caio, Davi, Elisa." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Quem troca menos?", robo: {"paineis": ["⚖️ Outra lista: 3, 2, 1"], "passos": [{"fala": "🫧 <b>Bolha</b>: conto cada troca de vizinhos.", "painel": 0, "linha": "Passada 1: 2 trocas · Passada 2: 1 troca = 3 trocas"}, {"fala": "🏅 <b>Seleção</b>: conto as trocas de cada rodada.", "painel": 0, "linha": "Rodada 1: 1 ↔ 3 · depois já está em ordem = 1 troca", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: conte as trocas com 4, 3, 2, 1! 💪"},
        enunciado: "<p>Lista <strong>4, 3, 2, 1</strong> em ordem crescente.</p>",
        colunas: ["Método", "Número de trocas"],
        linhas: [["🫧 Bolha", { r: "6", tipo: "num", dica: "Passada 1: 3 trocas; passada 2: 2; passada 3: 1." }], ["🏅 Seleção", { r: "2", tipo: "num", dica: "1ª rodada: 1 ↔ 4; 2ª: 2 ↔ 3; depois já está ordenada." }]],
        explicacao: "Bolha: 3 + 2 + 1 = 6 trocas. Seleção: 1 ↔ 4 e 2 ↔ 3 = 2 trocas. A seleção troca muito menos." }
    ],
    vf: [
      { v: true, why: "O mínimo do que sobrou." },
      { v: false, corrigir: { trecho: "a última posição", opcoes: ["a última posição", "a primeira posição"], certo: "a primeira posição" }, why: "O menor vai para o começo." },
      { v: true, why: "Uma por rodada, no máximo." },
      { v: true, why: "Bolha = vizinhos." },
      { v: true, why: "O começo vai ficando pronto." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Fractais ============ */
  m8: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: o triângulo de Sierpinski", robo: {"paineis": ["🔺 Outro fractal: o quadrado que vira 4"], "passos": [{"fala": "Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", "painel": 0, "linha": "Nível 0: 1"}, {"fala": "", "painel": 0, "linha": "Nível 1: 1 × 4 = 4", "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 2: 4 × 4 = 16", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 3: 16 × 4 = 64", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪"},
        colunas: ["Nível", "Triângulos pintados"],
        linhas: [["0", "1"], ["1", { r: "3", tipo: "num" }], ["2", { r: "9", tipo: "num" }], ["3", { r: "27", tipo: "num", dica: "9 × 3." }]],
        explicacao: "Cada triângulo vira 3 menores: 1 → 3 → 9 → 27 (× 3 por nível)." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "É fractal?",
        colunaItem: "Forma", colunaResp: "Fractal?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "Galho de samambaia", c: "S", why: "Cada folhinha parece a samambaia inteira." },
          { t: "Brócolis", c: "S", why: "Cada pedaço parece um brócolis pequeno." },
          { t: "Raio numa tempestade", c: "S", why: "Cada ramo se divide como o raio inteiro." },
          { t: "Uma bola lisa", c: "N", why: "As partes não repetem a forma do todo." },
          { t: "Um tijolo", c: "N", why: "Não tem autossemelhança." }],
        explicacao: "Fractal: uma parte parecida com o todo (autossemelhança). Bola e tijolo não têm isso." },
      { tipo: "tabela", titulo: "A árvore fractal", robo: {"paineis": ["🔺 Outro fractal: o quadrado que vira 4"], "passos": [{"fala": "Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", "painel": 0, "linha": "Nível 0: 1"}, {"fala": "", "painel": 0, "linha": "Nível 1: 1 × 4 = 4", "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 2: 4 × 4 = 16", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 3: 16 × 4 = 64", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪"},
        enunciado: "<p>Cada galho se divide em <strong>2</strong> galhos menores.</p>",
        colunas: ["Nível", "Galhos novos"],
        linhas: [["1", { r: "2", tipo: "num" }], ["2", { r: "4", tipo: "num" }], ["3", { r: "8", tipo: "num" }], ["4", { r: "16", tipo: "num" }], ["5", { r: "32", tipo: "num" }]],
        explicacao: "A cada nível, o número dobra (× 2): 2, 4, 8, 16, 32." },
      { tipo: "escolha", titulo: "Fractais: confira",
        perguntas: [
          { p: "Fractal é uma figura em que:", opcoes: ["Uma parte se parece com o todo", "Todas as partes são diferentes", "Só existem retas"], certo: 0 },
          { p: "Os fractais usam a ideia de:", opcoes: ["Recursão: a mesma regra dentro de si mesma", "Busca binária", "Contador"], certo: 0 },
          { p: "No desenho de verdade, por que paramos num nível?", opcoes: ["É o caso base: a tela não mostra triângulos menores que um ponto", "Porque o computador desliga", "Não paramos nunca"], certo: 0 }],
        explicacao: "Fractal = autossemelhança, feito com recursão; no desenho, o nível final é o caso base." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Níveis maiores", robo: {"paineis": ["🔺 Outro fractal: o quadrado que vira 4"], "passos": [{"fala": "Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", "painel": 0, "linha": "Nível 0: 1"}, {"fala": "", "painel": 0, "linha": "Nível 1: 1 × 4 = 4", "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 2: 4 × 4 = 16", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 3: 16 × 4 = 64", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪"},
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Triângulo de Sierpinski, nível 4", { r: "81", tipo: "num" }], ["Triângulo de Sierpinski, nível 5", { r: "243", tipo: "num" }], ["Árvore fractal, nível 6", { r: "64", tipo: "num" }]],
        explicacao: "Sierpinski × 3: 27 → 81 → 243. Árvore × 2: 32 → 64." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "A árvore fractal com recursão",
        enunciado: "<p>O bloco <strong>crescer</strong> chama a si mesmo. Complete o <strong>passo recursivo</strong> para mostrar:</p><p>Nível 1: 2 galhos<br>Nível 2: 4 galhos<br>Nível 3: 8 galhos<br>Nível 4: 16 galhos</p><p>Dentro do se (enquanto nivel &lt; 4): alterar nivel por 1, definir galhos para galhos × 2, mostrar o texto e chamar crescer.</p>",
        caixa: ["mostrar", "texto", "numero", "conta", "variavel", "se", "comparar", "funcao"],
        inicio: [["funcao", "crescer", [["se", ["<", v("nivel"), 4], [["mudar", "nivel", 1]]]]], ["definir", "nivel", 0], ["definir", "galhos", 1], ["chamar", "crescer"]],
        esperado: ["Nível 1: 2 galhos", "Nível 2: 4 galhos", "Nível 3: 8 galhos", "Nível 4: 16 galhos"], exige: ["funcao", "conta"],
        solucao: [["funcao", "crescer", [["se", ["<", v("nivel"), 4], [["mudar", "nivel", 1], ["definir", "galhos", ["*", v("galhos"), 2]], ["mostrar", ["juntar", "Nível ", v("nivel"), ": ", v("galhos"), " galhos"]], ["chamar", "crescer"]]]]], ["definir", "nivel", 0], ["definir", "galhos", 1], ["chamar", "crescer"]],
        dicas: ["Gaveta ➕ Contas: galhos × 2.", "O texto tem 5 pedaços: “Nível ”, nivel, “: ”, galhos, “ galhos”.", "O último bloco dentro do se é chamar crescer (gaveta 🧩 Meus blocos)."],
        explicacao: "Caso base: quando nivel chega a 4, o se é falso e para. Passo recursivo: sobe um nível, dobra os galhos, mostra e chama crescer de novo." }
    ],
    vf: [
      { v: true, why: "Autossemelhança." },
      { v: true, why: "× 3 por nível." },
      { v: false, corrigir: { trecho: "6 triângulos", opcoes: ["6 triângulos", "9 triângulos"], certo: "9 triângulos" }, why: "3 × 3 = 9." },
      { v: true, why: "Regra dentro da regra." },
      { v: false, corrigir: { trecho: "é um exemplo de fractal", opcoes: ["é um exemplo de fractal", "não é um fractal"], certo: "não é um fractal" }, why: "As partes não repetem o todo." }
    ]
  },

  /* ============ 🔁 REVISÃO PARA A PROVA ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "tabela", de: "m1", titulo: "M1 · Lista", robo: {"paineis": ["📋 Outra lista: IDADES = 12 · 15 · 11"], "passos": [{"fala": "Olha como eu leio uma lista <b>diferente</b>. As posições começam no <b>1</b>:", "painel": 0, "linha": "IDADES[1] = 12"}, {"fala": "", "painel": 0, "linha": "IDADES[2] = 15", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "IDADES[3] = 11", "espera": 900}, {"fala": "Tamanho = quantos itens: <b>3</b>. Em que posição está o 11? Na <b>3</b>.", "painel": 0, "linha": "Tamanho 3 · o 11 está na posição 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: leia a lista da tarefa do mesmo jeito! 💪"}, enunciado: "<p>CORES = azul · verde · rosa · preto</p>", colunas: ["Pergunta", "Resposta"],
        linhas: [["CORES[3]", { r: "rosa" }], ["Tamanho", { r: "4", tipo: "num" }]], explicacao: "Posição 3 = rosa; 4 itens." },
      { tipo: "relembre", de: "m2" },
      { tipo: "lista_ops", de: "m2", titulo: "M2 · Inserir e remover", nome: "FILA", inicial: ["Ana", "Bia", "Caio"],
        passos: [{ tipo: "remover", instr: "Remova Ana.", esperado: ["Bia", "Caio"] }, { tipo: "pergunta", instr: "Em que posição o Caio ficou?", r: "2", num: true }],
        explicacao: "Remover Ana: todo mundo anda uma posição para a frente." },
      { tipo: "relembre", de: "m3" },
      { tipo: "tabela", de: "m3", titulo: "M3 · Busca sequencial", robo: {"paineis": ["🔎 Outra lista: 5 · 8 · 2 · 6"], "passos": [{"fala": "Na busca sequencial eu olho <b>um por um</b> e conto. Procurando o 2:", "painel": 0, "linha": "5? não · 8? não · 2? ACHEI → 3 comparações", "marca": true}, {"fala": "E se o número <b>não está</b> na lista, como o 9? Tenho que olhar <b>todos</b> para ter certeza:", "painel": 0, "linha": "9 → 4 comparações (a lista toda)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: conte as comparações da tarefa! 💪"}, enunciado: "<p>LISTA = 4 · 9 · 1 · 7 · 3</p>", colunas: ["Procurando", "Comparações"],
        linhas: [["o 7", { r: "4", tipo: "num" }], ["o 8 (não está)", { r: "5", tipo: "num" }]], explicacao: "O 7 está na posição 4; o 8 não está: olha todos os 5." },
      { tipo: "relembre", de: "m4" },
      { tipo: "busca_binaria", de: "m4", titulo: "M4 · Busca binária", lista: [2, 6, 10, 14, 18, 22, 26], alvo: 22,
        explicacao: "Meio 4 = 14 → 22 é maior → sobra 5 a 7 → meio 6 = 22: achou em 2." },
      { tipo: "relembre", de: "m5" },
      { tipo: "bolha", de: "m5", titulo: "M5 · Bolha: 3, 1, 2", lista: [3, 1, 2], explicacao: "1ª passada: 1, 2, 3." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", modo: "tabela", de: "m6", titulo: "M6 · Recursão", colunaItem: "Parte", colunaResp: "É…",
        categorias: [{ id: "B", rot: "Caso base" }, { id: "P", rot: "Passo recursivo" }],
        itens: [{ t: "A bonequinha que não abre", c: "B" }, { t: "Abrir e repetir com a de dentro", c: "P" }, { t: "n = 0 → “Fogo!”", c: "B" }],
        explicacao: "Caso base para; passo recursivo repete com o problema menor." },
      { tipo: "relembre", de: "m7" },
      { tipo: "tabela", de: "m7", titulo: "M7 · Seleção", robo: {"paineis": ["🏅 Seleção com outra lista: 3, 1, 2"], "passos": [{"fala": "A cada rodada, eu acho o <b>menor do que sobrou</b> e troco com a próxima posição.", "painel": 0, "titulo": "Original: 3, 1, 2"}, {"fala": "1ª rodada: o menor é o 1. Troco com a posição 1 (o 3):", "painel": 0, "linha": "1ª: 1, 3, 2", "marca": true}, {"fala": "2ª rodada: do que sobrou (3, 2), o menor é o 2. Troco com a posição 2:", "painel": 0, "linha": "2ª: 1, 2, 3", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as rodadas com a lista da tarefa! 💪"}, colunas: ["Lista", "Depois da 1ª rodada"], linhas: [["5, 9, 2, 7", { r: "2, 9, 5, 7", tipo: "letras" }]],
        explicacao: "O menor (2) troca com a 1ª posição (5)." },
      { tipo: "relembre", de: "m8" },
      { tipo: "tabela", de: "m8", titulo: "M8 · Fractais", robo: {"paineis": ["🔺 Outro fractal: o quadrado que vira 4"], "passos": [{"fala": "Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", "painel": 0, "linha": "Nível 0: 1"}, {"fala": "", "painel": 0, "linha": "Nível 1: 1 × 4 = 4", "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 2: 4 × 4 = 16", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 3: 16 × 4 = 64", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪"}, colunas: ["Pergunta", "Resposta"], linhas: [["Sierpinski, nível 3", { r: "27", tipo: "num" }], ["Árvore (× 2), nível 3", { r: "8", tipo: "num" }]],
        explicacao: "× 3: 1, 3, 9, 27. × 2: 2, 4, 8." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1", perguntas: [{ p: "A última posição de uma lista é igual:", opcoes: ["Ao tamanho", "A 1", "A 0"], certo: 0 }], explicacao: "Lista de 5 itens: a última posição é 5." },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2", perguntas: [{ p: "Inserir na posição 1 faz os outros:", opcoes: ["Andarem uma posição para trás", "Sumirem", "Ficarem parados"], certo: 0 }], explicacao: "Todos se deslocam uma posição." },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3", perguntas: [{ p: "Pior caso da busca sequencial em 300 itens:", opcoes: ["300 comparações", "9 comparações", "1 comparação"], certo: 0 }], explicacao: "Olha todos." },
      { tipo: "escolha", de: "m4", titulo: "Desafio M4", perguntas: [{ p: "A busca binária exige que a lista esteja:", opcoes: ["Ordenada", "Desordenada", "Vazia"], certo: 0 }], explicacao: "Sem ordem, não dá para descartar uma metade." },
      { tipo: "escolha", de: "m5", titulo: "Desafio M5", perguntas: [{ p: "Uma passada sem nenhuma troca significa:", opcoes: ["A lista já está ordenada", "Deu erro", "A lista está ao contrário"], certo: 0 }], explicacao: "O método termina." },
      { tipo: "escolha", de: "m6", titulo: "Desafio M6", perguntas: [{ p: "O que acontece com uma recursão sem caso base?", opcoes: ["Não para nunca", "Para logo", "Vira uma lista"], certo: 0 }], explicacao: "Como dois espelhos frente a frente." },
      { tipo: "escolha", de: "m7", titulo: "Desafio M7", perguntas: [{ p: "Qual método troca menos?", opcoes: ["Seleção", "Bolha", "Os dois iguais sempre"], certo: 0 }], explicacao: "Seleção: no máximo uma troca por rodada." },
      { tipo: "escolha", de: "m8", titulo: "Desafio M8", perguntas: [{ p: "Sierpinski no nível 4:", opcoes: ["81", "12", "64"], certo: 0 }], explicacao: "1, 3, 9, 27, 81." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "Outro nome para a posição:", opcoes: ["Índice", "Contador", "Mínimo"], certo: 0 }, { p: "50, 31, 7, 2 está em ordem:", opcoes: ["Decrescente", "Crescente", "Alfabética"], certo: 0 }], explicacao: "Posição = índice. Do maior para o menor = decrescente." },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "O contador começa em:", opcoes: ["0", "1", "10"], certo: 0 }], explicacao: "Contador começa em 0." },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Busca sequencial é:", opcoes: ["Olhar um por um", "Olhar pelo meio", "Olhar só o último"], certo: 0 }], explicacao: "Um por um, do primeiro ao último." },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "Até 100 itens ordenados, a busca binária precisa de no máximo:", opcoes: ["7 comparações", "100 comparações", "50 comparações"], certo: 0 }], explicacao: "100 → 50 → 25 → 13 → 7 → 4 → 2 → 1." },
      { tipo: "escolha", de: "m5", titulo: "Turbo · Simulado M5", perguntas: [{ p: "Bubble sort é o:", opcoes: ["Método da bolha", "Busca binária", "Fractal"], certo: 0 }], explicacao: "Ordenação por bolha." },
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6", perguntas: [{ p: "A parte que faz a recursão parar é o:", opcoes: ["Caso base", "Passo recursivo", "Contador"], certo: 0 }], explicacao: "Caso base = condição de parada." },
      { tipo: "escolha", de: "m7", titulo: "Turbo · Simulado M7", perguntas: [{ p: "Na seleção, a cada rodada procuramos o:", opcoes: ["Menor do que sobrou", "Maior vizinho", "Meio"], certo: 0 }], explicacao: "O mínimo vai para a próxima posição." },
      { tipo: "escolha", de: "m8", titulo: "Turbo · Simulado M8", perguntas: [{ p: "Uma parte parecida com o todo é chamada de:", opcoes: ["Autossemelhança", "Ordenação", "Índice"], certo: 0 }], explicacao: "É a marca dos fractais." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-1bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Listas", perguntas: [{"p": "Lista CHAMADA = Ana, Bruno, Carla, Davi, Elisa. Qual é a última posição?", "opcoes": ["5", "1", "4"], "certo": 0}, {"p": "CHAMADA[1] é:", "opcoes": ["Bruno", "Ana", "Elisa"], "certo": 1}, {"p": "A lista 3, 8, 12, 20 está em ordem:", "opcoes": ["Decrescente", "Fora de ordem", "Crescente"], "certo": 2}],
      explicacao: "Lista CHAMADA = Ana, Bruno, Carla, Davi, Elisa. Qual é a última posição? → <strong>5</strong> · CHAMADA[1] é: → <strong>Ana</strong> · A lista 3, 8, 12, 20 está em ordem: → <strong>Crescente</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Inserir, remover e contar", perguntas: [{"p": "FILA = Ana, Bia, Caio. Inserir Duda no fim. Qual é o tamanho agora?", "opcoes": ["4", "3", "2"], "certo": 0}, {"p": "FILA = Ana, Bia, Caio, Duda. Removendo Ana, quem fica na posição 1?", "opcoes": ["Caio", "Bia", "Duda"], "certo": 1}, {"p": "Notas 7, 2, 5, 9. Quantas são 5 ou mais?", "opcoes": ["2", "4", "3"], "certo": 2}],
      explicacao: "FILA = Ana, Bia, Caio. Inserir Duda no fim. Qual é o tamanho agora? → <strong>4</strong> · FILA = Ana, Bia, Caio, Duda. Removendo Ana, quem fica na posição 1? → <strong>Bia</strong> · Notas 7, 2, 5, 9. Quantas são 5 ou mais? → <strong>3</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Busca sequencial", robo: {"paineis": ["🔎 Outra lista: 5 · 8 · 2 · 6"], "passos": [{"fala": "Na busca sequencial eu olho <b>um por um</b> e conto. Procurando o 2:", "painel": 0, "linha": "5? não · 8? não · 2? ACHEI → 3 comparações", "marca": true}, {"fala": "E se o número <b>não está</b> na lista, como o 9? Tenho que olhar <b>todos</b> para ter certeza:", "painel": 0, "linha": "9 → 4 comparações (a lista toda)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: conte as comparações da tarefa! 💪"}, perguntas: [{"p": "Procurar o 4 em 6, 1, 4, 9 com a busca sequencial. Quantas comparações?", "opcoes": ["3", "1", "4"], "certo": 0}, {"p": "Numa lista de 1.000 itens, o melhor caso da busca sequencial tem:", "opcoes": ["1.000 comparações", "1 comparação", "500 comparações"], "certo": 1}, {"p": "A busca sequencial funciona em lista fora de ordem?", "opcoes": ["Não, nunca", "Só se for pequena", "Sim, em qualquer lista"], "certo": 2}],
      explicacao: "Procurar o 4 em 6, 1, 4, 9 com a busca sequencial. Quantas comparações? → <strong>3</strong> · Numa lista de 1.000 itens, o melhor caso da busca sequencial tem: → <strong>1 comparação</strong> · A busca sequencial funciona em lista fora de ordem? → <strong>Sim, em qualquer lista</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Busca binária", perguntas: [{"p": "Na busca binária, o procurado é maior que o meio. Eu jogo fora:", "opcoes": ["A metade da esquerda", "A metade da direita", "A lista toda"], "certo": 0}, {"p": "Numa lista ordenada de 1.000 itens, a busca binária precisa de no máximo:", "opcoes": ["1.000 comparações", "10 comparações", "100 comparações"], "certo": 1}, {"p": "Procurar uma palavra no dicionário abrindo no meio parece a busca:", "opcoes": ["Sequencial", "Por seleção", "Binária"], "certo": 2}],
      explicacao: "Na busca binária, o procurado é maior que o meio. Eu jogo fora: → <strong>A metade da esquerda</strong> · Numa lista ordenada de 1.000 itens, a busca binária precisa de no máximo: → <strong>10 comparações</strong> · Procurar uma palavra no dicionário abrindo no meio parece a busca: → <strong>Binária</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Método da bolha", perguntas: [{"p": "No método da bolha (crescente), vizinhos 3 e 8:", "opcoes": ["Ficam como estão", "Trocam de lugar", "Saem da lista"], "certo": 0}, {"p": "Uma volta inteira comparando vizinhos do começo ao fim se chama:", "opcoes": ["Rodada", "Passada", "Caso base"], "certo": 1}, {"p": "O método da bolha termina quando:", "opcoes": ["Faz a primeira troca", "A lista fica vazia", "Uma passada inteira não faz nenhuma troca"], "certo": 2}],
      explicacao: "No método da bolha (crescente), vizinhos 3 e 8: → <strong>Ficam como estão</strong> · Uma volta inteira comparando vizinhos do começo ao fim se chama: → <strong>Passada</strong> · O método da bolha termina quando: → <strong>Uma passada inteira não faz nenhuma troca</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Recursão", perguntas: [{"p": "Na contagem regressiva recursiva, o caso base é:", "opcoes": ["n = 0: mostrar “Fogo!” e parar", "Mostrar n e contar de n − 1", "Começar do 10"], "certo": 0}, {"p": "Pastas dentro de pastas são um exemplo de:", "opcoes": ["Busca binária", "Estrutura recursiva", "Método da bolha"], "certo": 1}, {"p": "Sem caso base, a recursão:", "opcoes": ["Para logo de cara", "Vira uma lista", "Pode nunca parar"], "certo": 2}],
      explicacao: "Na contagem regressiva recursiva, o caso base é: → <strong>n = 0: mostrar “Fogo!” e parar</strong> · Pastas dentro de pastas são um exemplo de: → <strong>Estrutura recursiva</strong> · Sem caso base, a recursão: → <strong>Pode nunca parar</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Ordenação por seleção", perguntas: [{"p": "Na seleção, a cada rodada eu procuro:", "opcoes": ["O menor do que sobrou", "O maior vizinho", "O item do meio"], "certo": 0}, {"p": "Lista 5, 1, 4. Depois da 1ª rodada, ela fica:", "opcoes": ["5, 4, 1", "1, 5, 4", "4, 1, 5"], "certo": 1}, {"p": "Quantas trocas a seleção faz por rodada, no máximo?", "opcoes": ["Nenhuma", "Todas as possíveis", "Uma"], "certo": 2}],
      explicacao: "Na seleção, a cada rodada eu procuro: → <strong>O menor do que sobrou</strong> · Lista 5, 1, 4. Depois da 1ª rodada, ela fica: → <strong>1, 5, 4</strong> · Quantas trocas a seleção faz por rodada, no máximo? → <strong>Uma</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Fractais", robo: {"paineis": ["🔺 Outro fractal: o quadrado que vira 4"], "passos": [{"fala": "Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", "painel": 0, "linha": "Nível 0: 1"}, {"fala": "", "painel": 0, "linha": "Nível 1: 1 × 4 = 4", "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 2: 4 × 4 = 16", "marca": true, "espera": 900}, {"fala": "", "painel": 0, "linha": "Nível 3: 16 × 4 = 64", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪"}, perguntas: [{"p": "No triângulo de Sierpinski, quantos triângulos pintados há no nível 3?", "opcoes": ["27", "9", "12"], "certo": 0}, {"p": "Na árvore fractal, quantos galhos novos no nível 4?", "opcoes": ["8", "16", "12"], "certo": 1}, {"p": "Qual destes é um fractal da natureza?", "opcoes": ["Uma bola lisa", "Um cubo", "O brócolis"], "certo": 2}],
      explicacao: "No triângulo de Sierpinski, quantos triângulos pintados há no nível 3? → <strong>27</strong> · Na árvore fractal, quantos galhos novos no nível 4? → <strong>16</strong> · Qual destes é um fractal da natureza? → <strong>O brócolis</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, piloto aprovado pelo professor e levado ao ano todo)
   Por missão: ❓ gancho do Para começar, 🛠️ "Onde eu uso isso?" prático (aplicar = simulador ou jogo
   de uma situação real + 3 perguntas), "O que você já sabe?" na M1 e ⏱️ +25% de tempo de aula com
   jogos e simuladores no 🟡 Desafio e no 🔴 Turbo. Tudo cobra só o que o Para começar explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-1bim"]; if (!A) return;
  const v = n => ({ v: n });
  const TAG = "⏱️ +25%";
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: TAG }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);

  /* ---------- M1 · listas ---------- */
  A.m1.gancho = { html: "<p>📲 No grupo da turma já são <b>200 mensagens</b>. Elas aparecem uma embaixo da outra: a mais antiga em cima, a mais nova embaixo.</p><p>🤔 Como o aplicativo guarda tantas mensagens <b>em ordem</b>? Será que ele cria 200 variáveis diferentes?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Primeiro dia de Informática do 8º ano! Responda o que você lembra do 7º ano. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Uma <b>variável</b> no programa é…", ["Um espaço com nome que guarda um valor que pode mudar", "Um botão do teclado", "Uma pasta do computador"], "A variável guarda um valor com um nome, e esse valor pode mudar (como os <b>pontos</b> de um jogo)."],
    ["“Repita 3 vezes: ande um passo” é um exemplo de…", ["Repetição", "Variável", "Lista"], "Fazer o mesmo passo várias vezes, sem escrever tudo de novo, é <b>repetição</b>."],
    ["<b>Percorrer</b> uma lista quer dizer…", ["Passar por todos os itens, do primeiro ao último", "Apagar a lista", "Escolher só o último item"], "Percorrer é passar por <b>todos</b> os itens, do primeiro ao último."])];
  A.m1.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a fila de impressão da escola", nome: "IMPRESSAO",
      enunciado: "<p>Os professores mandaram documentos para a impressora da escola. A fila de impressão é uma <b>lista</b>: o primeiro enviado é o primeiro impresso.</p>",
      inicial: ["prova do 6º A", "bilhete da reunião", "cartaz da feira", "lista de chamada"],
      passos: [
        { tipo: "pergunta", instr: "Qual documento sai primeiro? (IMPRESSAO[1])", r: "prova do 6º A", why: "IMPRESSAO[1] = prova do 6º A: o primeiro da fila sai primeiro." },
        { tipo: "pergunta", instr: "Em que posição está o cartaz da feira?", r: "3", num: true },
        { tipo: "pergunta", instr: "Qual é o tamanho da fila?", r: "4", num: true },
        { tipo: "pergunta", instr: "Qual é a última posição da fila?", r: "4", num: true, why: "4: a última posição é sempre igual ao tamanho." }],
      explicacao: "A fila de impressão é uma lista: cada documento tem uma posição, o tamanho é 4 e a última posição é igual ao tamanho." },
    VIDA(
      ["A classificação do campeonato, arrumada pelos pontos, é uma lista…", ["Ordenada", "Desordenada", "Sem tamanho"], "Arrumada em ordem (pelos pontos), é uma lista <b>ordenada</b>."],
      ["A lista NOTAS tem <b>30 itens</b>. Qual é a última posição?", ["30", "1", "29"], "A última posição é sempre igual ao <b>tamanho</b>: 30."],
      ["Para mostrar o nome de 19 alunos, o jeito mais esperto é…", ["Percorrer a lista com uma repetição", "Escrever 19 comandos, um por aluno", "Criar 19 variáveis"], "Com a lista, uma <b>repetição</b> percorre todos os itens, sem 19 comandos."])
  ];
  mais("m1", "desafio",
    { tipo: "lista_ops", titulo: "🎮 O ranking do jogo", nome: "RANKING",
      enunciado: "<p>O ranking do jogo da turma é uma lista ordenada pelos pontos: quem está na posição 1 fez mais pontos.</p>",
      inicial: ["Lia", "Davi", "Bia", "Rafa", "Gui", "Mel"],
      passos: [
        { tipo: "pergunta", instr: "Quem está em RANKING[2]?", r: "Davi" },
        { tipo: "pergunta", instr: "Em que posição está o Gui?", r: "5", num: true },
        { tipo: "pergunta", instr: "Qual é o tamanho do ranking?", r: "6", num: true },
        { tipo: "pergunta", instr: "Quem está na última posição? (RANKING[6])", r: "Mel" }],
      explicacao: "RANKING[2] = Davi; Gui está na posição 5; o tamanho é 6, e a última posição (6) é a da Mel." });
  mais("m1", "turbo",
    { tipo: "lista_ops", titulo: "📲 O histórico de mensagens", nome: "MENSAGENS",
      enunciado: "<p>No aplicativo, a mensagem mais antiga fica em cima (posição 1) e a mais nova embaixo. Chegou mensagem nova!</p>",
      inicial: ["Bom dia, turma!", "Amanhã tem prova", "Quem tem o livro?"],
      passos: [
        { tipo: "pergunta", instr: "Qual é a mensagem mais antiga? (MENSAGENS[1])", r: "Bom dia, turma!" },
        { tipo: "inserir", instr: "Chegou a mensagem nova: insira Eu tenho! no fim.", esperado: ["Bom dia, turma!", "Amanhã tem prova", "Quem tem o livro?", "Eu tenho!"], dica: "Digite Eu tenho! e clique em Inserir no fim." },
        { tipo: "pergunta", instr: "Qual é o tamanho da lista agora?", r: "4", num: true },
        { tipo: "pergunta", instr: "Em que posição ficou a mensagem nova?", r: "4", num: true, why: "4: entrou no fim, e a última posição é igual ao tamanho." }],
      explicacao: "A mensagem nova entra no fim: o tamanho passa de 3 para 4, e ela fica na última posição." });

  /* ---------- M2 · inserir, remover e contar ---------- */
  A.m2.gancho = { html: "<p>🛒 A Júlia colocou 5 produtos no carrinho da loja on-line, apagou um e depois apertou <b>“tocar a seguir”</b> numa música da playlist.</p><p>🤔 O que acontece com os <b>outros itens</b> quando um sai da lista ou entra no meio dela? Quem muda de lugar?</p>" };
  A.m2.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a lista de presença do passeio", nome: "PASSEIO",
      enunciado: "<p>O ônibus do passeio vai sair! A lista de presença muda: um aluno chegou atrasado e outro não vai mais.</p>",
      inicial: ["Gabi", "Hugo", "Íris", "João"],
      passos: [
        { tipo: "inserir", instr: "O Kauã chegou atrasado: insira Kauã no fim.", esperado: ["Gabi", "Hugo", "Íris", "João", "Kauã"], dica: "Digite Kauã e clique em Inserir no fim." },
        { tipo: "remover", instr: "O Hugo não vai mais: remova Hugo.", esperado: ["Gabi", "Íris", "João", "Kauã"], dica: "Clique em “remover” ao lado de Hugo." },
        { tipo: "pergunta", instr: "Em que posição o João está agora?", r: "3", num: true, why: "3: com a saída do Hugo, quem estava atrás andou uma posição para a frente (João foi da 4 para a 3)." },
        { tipo: "pergunta", instr: "Qual é o tamanho da lista agora?", r: "4", num: true }],
      explicacao: "Inserir no fim aumenta o tamanho; remover faz quem estava atrás andar uma posição para a frente e diminui o tamanho." },
    VIDA(
      ["Você <b>removeu</b> um produto do carrinho. O tamanho da lista…", ["Diminui 1", "Aumenta 1", "Fica igual"], "Remover tira um item: o tamanho <b>diminui 1</b>."],
      ["Na playlist, “tocar a seguir” coloca a música…", ["Numa posição do meio da lista", "Sempre no fim", "Fora da lista"], "“Tocar a seguir” <b>insere</b> a música numa posição do meio: quem estava dali para trás anda uma posição."],
      ["Para contar quantos vieram na lista de presença, o contador começa em…", ["0", "1", "10"], "A variável <b>contadora</b> começa em 0 e soma 1 a cada item que passa no teste."])
  ];
  mais("m2", "desafio",
    { tipo: "lista_ops", titulo: "🎵 A playlist da festa", nome: "PLAYLIST",
      enunciado: "<p>A playlist da festa da turma vai mudando. Faça as operações e responda.</p>",
      inicial: ["forró", "samba", "funk", "pop", "rap"],
      passos: [
        { tipo: "remover", instr: "Ninguém quis ouvir funk: remova funk.", esperado: ["forró", "samba", "pop", "rap"] },
        { tipo: "pergunta", instr: "Em que posição o rap está agora?", r: "4", num: true },
        { tipo: "inserir", instr: "Pediram brega: insira brega no fim.", esperado: ["forró", "samba", "pop", "rap", "brega"] },
        { tipo: "remover", instr: "Remova samba.", esperado: ["forró", "pop", "rap", "brega"] },
        { tipo: "pergunta", instr: "Qual é o tamanho da playlist agora?", r: "4", num: true },
        { tipo: "pergunta", instr: "Quem está em PLAYLIST[2]?", r: "pop" }],
      explicacao: "Cada remoção faz quem estava atrás andar uma posição para a frente; cada inserção no fim aumenta o tamanho. No fim: forró, pop, rap, brega (tamanho 4)." });
  mais("m2", "turbo",
    { tipo: "lista_ops", titulo: "🔢 Conte as notas azuis", nome: "NOTAS",
      enunciado: "<p>Nota azul é <b>5 ou mais</b>. Conte como o contador: comece em 0 e some 1 a cada nota que passa no teste.</p>",
      inicial: ["8", "4", "6", "3", "9", "7"],
      passos: [
        { tipo: "pergunta", instr: "Quantas notas são azuis (5 ou mais)?", r: "4", num: true, why: "4: o contador foi 0 → 1 (8) → 1 → 2 (6) → 2 → 3 (9) → 4 (7)." },
        { tipo: "remover", instr: "A nota 4 foi revisada e saiu da lista: remova o 4.", esperado: ["8", "6", "3", "9", "7"] },
        { tipo: "inserir", instr: "Chegou a nota do aluno novo: insira 5 no fim.", esperado: ["8", "6", "3", "9", "7", "5"] },
        { tipo: "pergunta", instr: "E agora, quantas notas azuis?", r: "5", num: true, why: "5: o 5 também passa no teste (5 ou mais)." },
        { tipo: "pergunta", instr: "Qual é o tamanho da lista agora?", r: "6", num: true }],
      explicacao: "Contar é percorrer a lista com uma variável contadora. Depois das mudanças: 8, 6, 3, 9, 7, 5 → 5 notas azuis em 6." });

  /* ---------- M3 · busca sequencial ---------- */
  A.m3.gancho = { html: "<p>📷 O Teo quer mostrar para a avó a foto do gol que ele fez. A galeria do celular tem <b>500 fotos</b>, fora de ordem.</p><p>🤔 Como ele pode procurar? Quantas fotos ele vai precisar olhar se a do gol for a <b>última</b>?</p>" };
  A.m3.aplicar = [
    { tipo: "sequencial", titulo: "🛠️ Na vida real: ache a foto do gol na galeria",
      lista: ["🏖️", "🎂", "🐶", "🍕", "🎄", "⚽", "🌻"], alvo: "⚽",
      enunciado: "<p>As fotos da galeria estão fora de ordem. Olhe uma por uma, da 1ª em diante, até achar a foto do <b>gol ⚽</b>. Conte quantas você olhou.</p>",
      explicacao: "Você olhou 6 fotos: 6 comparações, e a foto está na posição 6. Olhar uma por uma, do começo, é a busca sequencial." },
    VIDA(
      ["Rolar a galeria olhando foto por foto, desde o começo, é…", ["Busca sequencial", "Busca pelo meio", "Apagar a galeria"], "Olhar um por um, desde o começo, é a <b>busca sequencial</b> (ou linear)."],
      ["Numa lista de <b>1.000 itens</b>, o item procurado é o último. Quantas comparações a busca sequencial faz?", ["1.000", "1", "10"], "É o <b>pior caso</b>: olha todos os 1.000 itens."],
      ["A busca sequencial funciona numa lista <b>fora de ordem</b>?", ["Sim, funciona em qualquer lista", "Não, só em lista ordenada", "Só se a lista for pequena"], "A busca sequencial funciona em <b>qualquer lista</b>, ordenada ou não. O problema é que pode ficar lenta."])
  ];
  mais("m3", "desafio",
    { tipo: "sequencial", titulo: "🔎 Ache o seu nome na lista de aprovados",
      lista: ["Rafa", "Lia", "Gui", "Bia", "Téo", "Mel", "Caio", "Ana", "Davi"], alvo: "Ana",
      enunciado: "<p>A lista de aprovados está <b>fora de ordem</b>. Procure a <b>Ana</b> olhando um por um.</p>",
      explicacao: "Ana estava na posição 8: foram 8 comparações. Como a lista não está em ordem, não dá para pular: é preciso olhar um por um." });
  mais("m3", "turbo",
    { tipo: "sequencial", titulo: "😰 O pior caso: o item é o último",
      lista: [14, 3, 27, 8, 19, 41, 6, 33, 12, 25, 38, 50], alvo: 50,
      enunciado: "<p>Procure o <b>50</b> virando as cartas em ordem. Antes de começar, pense: se ele for o último, quantas comparações você vai fazer?</p>",
      explicacao: "O 50 era o último: 12 comparações, o pior caso. Numa lista de 1.000 itens, seriam 1.000. Por isso a busca sequencial fica lenta em listas grandes." });

  /* ---------- M4 · busca binária ---------- */
  A.m4.gancho = { html: "<p>🎯 No jogo “adivinhe o número de 1 a 100”, a Bia chuta 1, 2, 3, 4… e já gastou 30 chutes. O Leo ganha sempre com no máximo <b>7 chutes</b>.</p><p>🤔 Qual é o truque do Leo? E por que o truque <b>só funciona</b> se os números estiverem em ordem?</p>" };
  A.m4.aplicar = [
    { tipo: "busca_binaria", titulo: "🛠️ Na vida real: ache a casa nº 47 na rua",
      lista: [3, 11, 18, 25, 32, 40, 47, 55, 61, 70, 78, 86, 93, 99, 105], alvo: 47,
      enunciado: "<p>O entregador precisa achar a casa <b>47</b>. As casas da rua estão em <b>ordem</b>. Em vez de olhar uma por uma, olhe sempre a casa do <b>meio</b> da parte que sobrou.</p>",
      explicacao: "15 casas → meio 8 = 55 → 47 é menor; sobram 1 a 7 → meio 4 = 25 → 47 é maior; sobram 5 a 7 → meio 6 = 40 → maior; sobra a 7 = 47. Achou em 4 comparações (a sequencial faria 7)." },
    VIDA(
      ["Procurar uma palavra no dicionário de papel abrindo no meio e indo para a frente ou para trás é…", ["Busca binária", "Busca sequencial", "Ler o dicionário inteiro de trás para a frente"], "Olhar o meio e jogar fora uma metade é a <b>busca binária</b>."],
      ["A busca binária <b>só funciona</b> se a lista estiver…", ["Ordenada", "Desordenada", "Com 100 itens"], "Regra de ouro: só em lista <b>ordenada</b>, senão não dá para saber qual metade jogar fora."],
      ["Numa lista ordenada de <b>1.000 itens</b>, quantas comparações a busca binária faz no pior caso?", ["10", "1.000", "500"], "Cada comparação corta a lista pela metade: <b>10</b> comparações bastam para 1.000 itens."])
  ];
  mais("m4", "desafio",
    { tipo: "busca_binaria", titulo: "📚 O livro nº 88 na estante",
      lista: [4, 9, 15, 22, 30, 37, 45, 51, 60, 68, 74, 81, 88, 94, 99], alvo: 88,
      enunciado: "<p>Os livros da biblioteca estão em <b>ordem</b> pelo número. Ache o <b>88</b> sempre pelo <b>meio</b> da parte que sobrou.</p>",
      explicacao: "Meio 8 = 51 → maior; sobram 9 a 15 → meio 12 = 81 → maior; sobram 13 a 15 → meio 14 = 94 → menor; sobra a 13 = 88. Achou em 4 comparações." });
  mais("m4", "turbo",
    { tipo: "sim_adivinhe", titulo: "🧠 Adivinhe o número de 1 a 1.000", max: 1000, meta: 10,
      enunciado: "<p>Agora o computador pensou num número de <b>1 a 1.000</b>. Chute sempre o <b>meio</b> do que sobrou. Consegue em até <b>10 chutes</b>?</p>",
      explicacao: "Cada chute no meio corta as opções pela metade: 1.000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1. No máximo 10 chutes." });

  /* ---------- M5 · método da bolha ---------- */
  A.m5.gancho = { html: "<p>📸 Na foto da turma, o fotógrafo pediu: “do mais baixo para o mais alto!”. Ninguém sabia por onde começar, e virou uma bagunça.</p><p>🤔 Existe um jeito simples, com regras, para arrumar a fila só trocando <b>vizinhos</b> de lugar?</p>" };
  A.m5.aplicar = [
    { tipo: "sim_bolha", titulo: "🛠️ Na vida real: a fila por altura na foto",
      enunciado: "<p>As alturas da turma (em centímetros) estão fora de ordem. Clique em <b>⇄</b> para trocar <b>vizinhos</b> até ficar em <b>ordem crescente</b> (do mais baixo para o mais alto).</p>",
      valores: [152, 138, 160, 145, 149],
      explicacao: "Trocando só vizinhos fora de ordem, a fila ficou 138, 145, 149, 152, 160. É o método da bolha: o maior vai “subindo” para o fim." },
    VIDA(
      ["No baralho, você arruma as cartas trocando de lugar as vizinhas fora de ordem. Isso lembra…", ["O método da bolha", "A busca binária", "A busca sequencial"], "Trocar vizinhos fora de ordem é o <b>método da bolha</b>."],
      ["A lista <b>1, 2, 3, 4</b> (já ordenada) termina em quantas passadas?", ["1 passada, sem nenhuma troca", "4 passadas", "Nunca termina"], "Uma lista já ordenada termina em <b>1 passada sem nenhuma troca</b>."],
      ["No fim de cada passada, o <b>maior</b> número que ainda faltava…", ["Já está no final", "Vai para o começo", "Some da lista"], "A cada passada, o maior que falta “sobe” para o <b>final</b>, como uma bolha."])
  ];
  mais("m5", "desafio",
    { tipo: "bolha", titulo: "😵 A lista ao contrário: 4, 3, 2, 1", lista: [4, 3, 2, 1],
      enunciado: "<p>Esta é a lista que dá <b>mais trabalho</b> para a bolha. Compare os vizinhos: se o da esquerda for <b>maior</b>, <b>troque</b>; senão, <b>mantenha</b>.</p>",
      explicacao: "1ª passada: 3, 2, 1, 4 · 2ª: 2, 1, 3, 4 · 3ª: 1, 2, 3, 4. Todo par de vizinhos trocou: é o pior caso da bolha." });
  mais("m5", "turbo",
    { tipo: "bolha", titulo: "🔥 Bolha com 5 números: 9, 4, 7, 1, 3", lista: [9, 4, 7, 1, 3],
      enunciado: "<p>Ordene em ordem <b>crescente</b>, passada por passada. Atenção: o maior que falta sobe para o fim a cada passada.</p>",
      explicacao: "1ª passada: 4, 7, 1, 3, 9 · 2ª: 4, 1, 3, 7, 9 · 3ª: 1, 3, 4, 7, 9 · 4ª: sem trocas, terminou." });

  /* ---------- M6 · recursão ---------- */
  A.m6.gancho = { html: "<p>🪆 A vó da Duda trouxe uma <b>matrioska</b> de presente. A Duda abriu a boneca e… tinha outra igual dentro, menor. Abriu de novo, e de novo…</p><p>🤔 Quando ela vai parar de abrir? E o que essa boneca tem a ver com o jeito de o computador contar as pastas dentro de pastas?</p>" };
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: abrindo a matrioska",
      enunciado: "<p>A matrioska da Duda tem <b>4 bonecas</b>. Complete o bloco recursivo <b>abrir</b>: <b>se n = 1</b> (caso base), mostrar <b>a bonequinha não abre</b>; <b>senão</b>, mostrar “abri a boneca ” com n, <b>alterar n por -1</b> e <b>chamar abrir</b> de novo. A tela deve mostrar:</p><p><b>abri a boneca 4</b><br><b>abri a boneca 3</b><br><b>abri a boneca 2</b><br><b>a bonequinha não abre</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
      inicio: [["funcao", "abrir", []], ["definir", "n", 4], ["chamar", "abrir"]],
      esperado: ["abri a boneca 4", "abri a boneca 3", "abri a boneca 2", "a bonequinha não abre"], exige: ["se", "funcao"],
      solucao: [["funcao", "abrir", [["se", ["=", v("n"), 1], [["mostrar", "a bonequinha não abre"]], [["mostrar", ["juntar", "abri a boneca ", v("n")]], ["mudar", "n", -1], ["chamar", "abrir"]]]]], ["definir", "n", 4], ["chamar", "abrir"]],
      dicas: ["Dentro do bloco roxo “para abrir”, coloque um “se … faça … senão”.", "Senão: mostrar (criar texto com “abri a boneca ” e n), alterar n por -1 e, por último, chamar abrir."],
      explicacao: "Passo recursivo: abrir a boneca e repetir com a de dentro (n − 1). Caso base: a bonequinha que não abre (n = 1). Sem caso base, ela nunca pararia." },
    VIDA(
      ["Para contar os arquivos de uma pasta que tem pastas dentro, que têm pastas dentro…, o computador usa…", ["Recursão", "Busca binária", "Método da bolha"], "Uma pasta dentro de pasta é o mesmo problema, menor: o computador usa <b>recursão</b>."],
      ["Na fila do cinema, quem responde “sou o 1” sem perguntar para ninguém é o…", ["Caso base", "Passo recursivo", "Contador"], "O primeiro da fila responde direto: é o <b>caso base</b>, que faz a recursão parar."],
      ["O que acontece com uma recursão <b>sem caso base</b>?", ["Nunca para", "Para na hora", "Fica mais rápida"], "Sem caso base, a recursão <b>nunca para</b>, como dois espelhos frente a frente."])
  ];
  mais("m6", "desafio",
    { tipo: "blocos", titulo: "🐸 O sapo recursivo: de 2 em 2",
      enunciado: "<p>O sapo está na pedra <b>10</b> e pula de <b>2 em 2</b> até a margem (0). Monte o bloco recursivo <b>pular</b>: <b>se n = 0</b>, mostrar <b>Chegou na margem!</b>; senão, mostrar n, <b>alterar n por -2</b> e chamar pular. A tela deve mostrar:</p><p><b>10</b> · <b>8</b> · <b>6</b> · <b>4</b> · <b>2</b> · <b>Chegou na margem!</b> (um por linha)</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
      inicio: [["definir", "n", 10]],
      esperado: ["10", "8", "6", "4", "2", "Chegou na margem!"], exige: ["se", "funcao"],
      solucao: [["funcao", "pular", [["se", ["=", v("n"), 0], [["mostrar", "Chegou na margem!"]], [["mostrar", v("n")], ["mudar", "n", -2], ["chamar", "pular"]]]]], ["definir", "n", 10], ["chamar", "pular"]],
      dicas: ["Crie o bloco “para pular” na gaveta 🧩 Meus blocos.", "Embaixo do “definir n para 10”, chame pular.", "Dentro do pular, o senão termina chamando pular de novo."],
      explicacao: "Cada chamada resolve o mesmo problema, menor (n − 2), até o caso base n = 0." });
  mais("m6", "turbo",
    { tipo: "blocos", titulo: "➕ A soma recursiva: 4 + 3 + 2 + 1",
      enunciado: "<p>Some 4 + 3 + 2 + 1 com recursão. As variáveis <b>n</b> (4) e <b>total</b> (0) já estão prontas. Monte o bloco <b>somar</b>: <b>se n = 0</b>, mostrar “Total: ” com o total; senão, <b>alterar total por n</b>, <b>alterar n por -1</b> e chamar somar. A tela deve mostrar:</p><p><b>Total: 10</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "funcao"],
      inicio: [["definir", "n", 4], ["definir", "total", 0]],
      esperado: ["Total: 10"], exige: ["se", "funcao"],
      solucao: [["funcao", "somar", [["se", ["=", v("n"), 0], [["mostrar", ["juntar", "Total: ", v("total")]]], [["mudar", "total", v("n")], ["mudar", "n", -1], ["chamar", "somar"]]]]], ["definir", "n", 4], ["definir", "total", 0], ["chamar", "somar"]],
      dicas: ["“alterar total por n”: encaixe a variável n no lugar do número.", "A ordem dentro do senão importa: primeiro soma o n, depois diminui o n."],
      explicacao: "total: 0 → 4 → 7 → 9 → 10. Quando n chega a 0 (caso base), mostra o total." });

  /* ---------- M7 · ordenação por seleção ---------- */
  A.m7.gancho = { html: "<p>⚽ No recreio, os capitães escolhem os times: primeiro o melhor jogador, depois o melhor <b>do que sobrou</b>, e assim por diante.</p><p>🤔 Dá para ordenar uma lista de números do mesmo jeito? Quantas <b>trocas</b> isso precisa, comparado com a bolha?</p>" };
  A.m7.aplicar = [
    { tipo: "ordenar", titulo: "🛠️ Na vida real: arrumando os livros por seleção",
      enunciado: "<p>Os livros da estante têm os números <b>5, 9, 2, 7</b>. Arrume pela <b>seleção</b>: a cada rodada, ache o <b>menor do que sobrou</b> e troque com a primeira posição que falta. Coloque os estados da estante em ordem, do início ao fim.</p>",
      itens: ["5, 9, 2, 7 (início)", "2, 9, 5, 7", "2, 5, 9, 7", "2, 5, 7, 9"],
      dicas: ["1ª rodada: o menor de todos é o 2; ele troca com o 5."],
      explicacao: "1ª rodada: 2 ↔ 5 → 2, 9, 5, 7 · 2ª: o menor do que sobrou é o 5, troca com o 9 → 2, 5, 9, 7 · 3ª: 7 ↔ 9 → 2, 5, 7, 9." },
    VIDA(
      ["Escolher os times no recreio (o melhor, depois o melhor do que sobrou) lembra…", ["A ordenação por seleção", "A busca sequencial", "O método da bolha"], "Escolher o melhor do que sobrou, rodada por rodada, é a <b>seleção</b>."],
      ["Qual método faz <b>menos trocas</b>?", ["A seleção: no máximo uma por rodada", "A bolha: uma a cada par fora de ordem", "Os dois trocam igual"], "A <b>seleção</b> troca no máximo uma vez por rodada; a bolha troca a cada par fora de ordem."],
      ["Na seleção, o menor item de cada rodada vai para…", ["O começo da parte que falta", "O fim da lista", "Fora da lista"], "O menor vai para o <b>começo</b>; na bolha, é o maior que sobe para o fim."])
  ];
  mais("m7", "desafio",
    { tipo: "ordenar", titulo: "🏅 Seleção com 5 números: 4, 7, 3, 9, 1",
      enunciado: "<p>Faça a ordenação por <b>seleção</b> (crescente) e coloque os estados da lista em ordem, do início ao fim.</p>",
      itens: ["4, 7, 3, 9, 1 (início)", "1, 7, 3, 9, 4", "1, 3, 7, 9, 4", "1, 3, 4, 9, 7", "1, 3, 4, 7, 9"],
      dicas: ["1ª rodada: o menor de todos é o 1, que troca com o 4.", "2ª rodada: o menor do que sobrou (7, 3, 9, 4) é o 3."],
      explicacao: "Rodadas: 1 ↔ 4, depois 3 ↔ 7, depois 4 ↔ 7, depois 7 ↔ 9. Só 4 trocas, uma por rodada." });
  mais("m7", "turbo",
    { tipo: "ordenar", titulo: "🔤 Seleção em ordem alfabética: Téo, Lia, Bia, Ana",
      enunciado: "<p>Agora com nomes, em ordem <b>alfabética</b> (de A a Z). A cada rodada, ache o nome que vem <b>primeiro</b> no alfabeto entre os que sobraram e troque. Coloque os estados em ordem.</p>",
      itens: ["Téo, Lia, Bia, Ana (início)", "Ana, Lia, Bia, Téo", "Ana, Bia, Lia, Téo"],
      dicas: ["1ª rodada: Ana é a primeira do alfabeto; ela troca com o Téo."],
      explicacao: "1ª rodada: Ana ↔ Téo · 2ª: Bia ↔ Lia · 3ª: Lia já está no lugar (sem troca). A seleção pode até ter rodada sem troca." });

  /* ---------- M8 · fractais ---------- */
  A.m8.gancho = { html: "<p>🥦 No almoço, o Gui reparou: cada pedacinho do brócolis parece um <b>brócolis pequeno</b>. E cada folhinha da samambaia do quintal parece uma <b>samambaia</b> inteira.</p><p>🤔 Por que a natureza repete a mesma forma em tamanhos menores? E como os jogos usam isso para desenhar montanhas e árvores?</p>" };
  A.m8.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: as montanhas fractais do jogo",
      enunciado: "<p>Um jogo desenha montanhas com o triângulo de Sierpinski. O programador quer saber quantos triângulos vai desenhar em cada nível. A variável <b>t</b> começa em 1 (nível 0). Use o <b>repita 4 vezes</b>: <b>definir t para t × 3</b> (gaveta ➗ Contas), mostrar “Nível ”, nível, “: ” e t, e <b>alterar nivel por 1</b>. A tela deve mostrar:</p><p><b>Nível 1: 3</b><br><b>Nível 2: 9</b><br><b>Nível 3: 27</b><br><b>Nível 4: 81</b></p>",
      caixa: ["mostrar", "texto", "numero", "conta", "variavel", "repita"],
      inicio: [["definir", "t", 1], ["definir", "nivel", 1]],
      esperado: ["Nível 1: 3", "Nível 2: 9", "Nível 3: 27", "Nível 4: 81"], exige: ["repita", "conta"],
      solucao: [["definir", "t", 1], ["definir", "nivel", 1], ["repita", 4, [["definir", "t", ["*", v("t"), 3]], ["mostrar", ["juntar", "Nível ", v("nivel"), ": ", v("t")]], ["mudar", "nivel", 1]]]],
      dicas: ["“definir t para” recebe uma conta: t × 3.", "No “criar texto com”, use a engrenagem para ter 4 pedaços: “Nível ”, nivel, “: ” e t."],
      explicacao: "A cada nível, o número de triângulos multiplica por 3: 3, 9, 27, 81. O jogo para num nível (o caso base), porque a tela não mostra triângulos menores que um ponto." },
    VIDA(
      ["Cada folhinha da samambaia parece uma samambaia inteira, menor. Isso é…", ["Um fractal", "Uma lista ordenada", "Uma busca"], "Figura em que uma parte é parecida com o todo é um <b>fractal</b>."],
      ["No triângulo de Sierpinski, a cada nível o número de triângulos…", ["Multiplica por 3", "Soma 3", "Dobra"], "Cada triângulo vira 3 menores: o número <b>multiplica por 3</b> (1, 3, 9, 27, 81)."],
      ["Por que o desenho do fractal no computador <b>para</b> num nível?", ["A tela não mostra triângulos menores que um ponto", "O computador cansa", "Fractais só têm 2 partes"], "Paramos num nível (o caso base) porque a tela não consegue mostrar triângulos menores que um ponto."])
  ];
  mais("m8", "desafio",
    { tipo: "memoria", titulo: "🧩 Jogo da memória dos fractais",
      enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>",
      pares: [{ a: "Fractal", b: "Uma parte parecida com o todo" }, { a: "Sierpinski nível 2", b: "9 triângulos" }, { a: "Árvore fractal nível 3", b: "8 galhos novos" }, { a: "Sierpinski nível 4", b: "81 triângulos" }, { a: "Árvore fractal", b: "O número dobra a cada nível" }, { a: "Triângulo de Sierpinski", b: "Multiplica por 3 a cada nível" }],
      porRodada: 3,
      explicacao: "Sierpinski multiplica por 3 (1, 3, 9, 27, 81); a árvore dobra (2, 4, 8, 16). Nos dois, uma parte é parecida com o todo." });
  mais("m8", "turbo",
    { tipo: "blocos", titulo: "🌲 A árvore fractal do jogo: dobra a cada nível",
      enunciado: "<p>No mesmo jogo, as árvores são fractais: o tronco se divide em 2 galhos, cada galho em 2… A variável <b>g</b> começa em 1. Monte o <b>repita 4 vezes</b> com <b>definir g para g × 2</b> e mostre os galhos novos de cada nível:</p><p><b>Nível 1: 2</b><br><b>Nível 2: 4</b><br><b>Nível 3: 8</b><br><b>Nível 4: 16</b></p>",
      caixa: ["mostrar", "texto", "numero", "conta", "variavel", "repita"],
      esperado: ["Nível 1: 2", "Nível 2: 4", "Nível 3: 8", "Nível 4: 16"], exige: ["repita", "conta"],
      solucao: [["definir", "g", 1], ["definir", "nivel", 1], ["repita", 4, [["definir", "g", ["*", v("g"), 2]], ["mostrar", ["juntar", "Nível ", v("nivel"), ": ", v("g")]], ["mudar", "nivel", 1]]]],
      dicas: ["Crie as variáveis g (1) e nivel (1) antes do repita.", "É o mesmo programa das montanhas, só que multiplica por 2."],
      explicacao: "A árvore dobra a cada nível: 2, 4, 8, 16. O jeito de programar é o mesmo do Sierpinski; só muda a regra (× 2 em vez de × 3)." });
})();
