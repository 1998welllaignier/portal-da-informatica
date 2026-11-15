/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 9º ano — 1º bimestre de 2027
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv).
   BNCC Computação: EF09CO01 (árvores e grafos), EF09CO03 (autômatos e eventos).
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const bairro = {
    vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "Pr", rot: "Praça", x: 260, y: 300 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
    arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "Pr", 4], ["Pr", "E", 4], ["C", "E", 9]]
  };
  const escola = {
    vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
      { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]
  };
  const cidade = {
    vertices: [{ id: "M", rot: "Mercado", x: 60, y: 190 }, { id: "B", rot: "Banco", x: 200, y: 60 }, { id: "F", rot: "Farmácia", x: 220, y: 320 },
      { id: "I", rot: "Igreja", x: 360, y: 60 }, { id: "P", rot: "Posto", x: 370, y: 300 }, { id: "H", rot: "Hospital", x: 480, y: 180 }],
    arestas: [["M", "B", 3], ["M", "F", 6], ["B", "F", 2], ["B", "I", 4], ["F", "P", 3], ["I", "H", 3], ["P", "H", 2], ["F", "H", 7]]
  };
  const objetos = { t: "❓ É eletrônico?", filhos: [
    { r: "Sim", t: "❓ Tem tela?", filhos: [{ r: "Sim", t: "🖥️ Monitor" }, { r: "Não", t: "⌨️ Teclado" }] },
    { r: "Não", t: "❓ Serve para escrever?", filhos: [{ r: "Sim", t: "✏️ Lápis" }, { r: "Não", t: "🪑 Cadeira" }] }] };
  const catracaEv = [["💳 passar o cartão", "cartao"], ["🚶 empurrar", "empurrar"]];
  const catracaCartao = ["quando", "cartao", [["se", ["=", v("estado"), "travada"], [["definir", "estado", "liberada"], ["mostrar", "Liberada"]], [["mostrar", "Já está liberada"]]]]];
  const semaforoTique = ["quando", "tique", [["se", ["=", v("luz"), "verde"], [["definir", "luz", "amarelo"]], [["se", ["=", v("luz"), "amarelo"], [["definir", "luz", "vermelho"]], [["definir", "luz", "verde"]]]]], ["mostrar", v("luz")]]];
  PORTAL.registrarAtividades("informatica-9ano-2027-1bim", {

  /* ============ MISSÃO 1 — Grafos e o melhor caminho ============ */
  m1: {
    pratica: [
      { tipo: "sim_grafo", titulo: "Mão na massa: o GPS sou eu",
        enunciado: "<p>Cada número é o tempo em <strong>minutos de bicicleta</strong> (o <strong>peso</strong>). Saindo de <strong>Casa</strong>, clique nos lugares, um vizinho por vez, até o <strong>Parque</strong>, com a <strong>menor soma</strong>.</p>",
        vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, sorveteria: { nome: "Sorveteria", ic: "🍦", x: 160, y: 45 }, quadra: { nome: "Quadra", ic: "🏀", x: 160, y: 195 },
          ponte: { nome: "Ponte", ic: "🌉", x: 270, y: 45 }, feira: { nome: "Feira", ic: "🧺", x: 270, y: 195 }, parque: { nome: "Parque", ic: "🌳", x: 360, y: 120 } },
        arestas: [["casa", "sorveteria", 2], ["casa", "quadra", 5], ["sorveteria", "quadra", 1], ["sorveteria", "ponte", 6], ["ponte", "parque", 2], ["quadra", "feira", 2], ["feira", "parque", 3]],
        inicio: "casa", fim: "parque", menor: 8, solucao: ["casa", "sorveteria", "quadra", "feira", "parque"], unidade: "min",
        dicas: ["Some os pesos de cada caminho antes de escolher.", "Passar pela Sorveteria e depois pela Quadra pode ser mais rápido do que ir direto para a Quadra."],
        explicacao: "Casa → Sorveteria → Quadra → Feira → Parque = 2 + 1 + 2 + 3 = 8 min. Tem mais paradas, mas a menor soma." }
    ],
    basico: [
      Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo do bairro", descricao: "Grafo do bairro para montar: Casa, Padaria, Praça e Escola" }, bairro,
        { enunciado: "<p>Ligue os lugares seguindo a tabela de arestas do 💡 Para começar: clique num lugar e depois no lugar ligado a ele.</p>",
          dicas: ["A Casa se liga à Padaria, à Praça e à Escola."], explicacao: "4 vértices e 5 arestas, cada uma com o seu peso em minutos." }),
      { tipo: "tabela", titulo: "Os caminhos da Casa até a Escola",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Quantos vértices o grafo tem?", { r: "4", tipo: "num" }],
          ["Quantas arestas?", { r: "5", tipo: "num" }],
          ["Grau da Casa", { r: "3", tipo: "num", dica: "Quantas arestas saem da Casa?" }],
          ["Casa → Praça → Escola (minutos)", { r: "8", tipo: "num" }],
          ["Caminho mais curto (minutos)", { r: "5", tipo: "num" }]],
        explicacao: "4 vértices, 5 arestas; a Casa tem grau 3 (Padaria, Praça, Escola). Casa → Praça → Escola = 8; o mais curto é Casa → Padaria → Escola = 5." },
      Object.assign({ tipo: "grafo", titulo: "Trace o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos", descricao: "Grafo do bairro" }, bairro,
        { enunciado: "<p>Clique nos vértices, um depois do outro, começando pela Casa. A soma aparece embaixo.</p>", explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 minutos." }),
      { tipo: "classificar", modo: "tabela", titulo: "Cada coisa é o quê no grafo?", colunaItem: "No mundo", colunaResp: "No grafo",
        categorias: [{ id: "V", rot: "Vértice" }, { id: "A", rot: "Aresta" }, { id: "P", rot: "Peso" }, { id: "G", rot: "Grau" }],
        itens: [
          { t: "Uma esquina do bairro", c: "V", why: "Ponto = vértice." },
          { t: "A rua entre duas esquinas", c: "A", why: "Ligação = aresta." },
          { t: "“4 minutos” escrito na rua", c: "P", why: "Número da aresta = peso." },
          { t: "Quantas ruas chegam numa esquina", c: "G", why: "Quantidade de arestas = grau." },
          { t: "Uma pessoa numa rede social", c: "V", why: "Cada pessoa é um vértice." },
          { t: "A amizade entre duas pessoas", c: "A", why: "A ligação é uma aresta." }],
        explicacao: "Vértice = ponto; aresta = ligação; peso = número da aresta; grau = quantas arestas saem do vértice." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "A rua fechada",
        enunciado: "<p>No grafo do bairro, a rua <strong>Padaria — Escola</strong> foi interditada (a aresta sumiu).</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Qual é agora o caminho mais curto da Casa até a Escola? (minutos)", { r: "8", tipo: "num", dica: "Sobraram Casa → Praça → Escola (4 + 4) e a rua direta (9)." }],
          ["Por qual lugar ele passa?", { op: ["Praça", "Padaria", "Nenhum (rua direta)"], r: "Praça" }]],
        explicacao: "Sem a aresta Padaria–Escola, os caminhos são Casa → Praça → Escola = 8 e o direto = 9. O mais curto passa a ser 8, pela Praça." }
    ],
    turbo: [
      Object.assign({ tipo: "grafo", titulo: "Entrega parte 1: do Mercado até a Farmácia", de: "M", para: "F", unidade: "minutos", descricao: "Grafo da cidade" }, cidade,
        { explicacao: "Mercado → Banco → Farmácia = 3 + 2 = 5 (a rua direta leva 6)." }),
      Object.assign({ tipo: "grafo", titulo: "Entrega parte 2: da Farmácia até o Hospital", de: "F", para: "H", unidade: "minutos", descricao: "Grafo da cidade" }, cidade,
        { explicacao: "Farmácia → Posto → Hospital = 3 + 2 = 5 (a rua direta leva 7). Entrega inteira: 10 minutos." })
    ],
    vf: [
      { v: true, why: "Esquina = ponto = vértice." },
      { v: false, corrigir: { trecho: "é sempre o mais curto", opcoes: ["é sempre o mais curto", "nem sempre é o mais curto"], certo: "nem sempre é o mais curto" }, why: "O mais curto é o de menor soma." },
      { v: true, why: "Peso fica na aresta." },
      { v: true, why: "Grau = arestas que saem." },
      { v: true, why: "Soma dos pesos." }
    ]
  },

  /* ============ MISSÃO 2 — Árvores ============ */
  m2: {
    pratica: [
      { tipo: "arvore", titulo: "Mão na massa: a árvore de pastas", modo: "pastas",
        raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📄 redação.txt" }, { t: "📄 mapa.png" }] }, { t: "📁 Fotos", filhos: [{ t: "📄 aniversário.jpg" }] }] },
        perguntas: [{ p: "Qual pasta é a raiz da árvore?", r: ["Documentos"], tipo: "letras" }, { p: "Quantas folhas (arquivos) a árvore tem?", r: "3", num: true }],
        dicas: ["A raiz é a de cima. As folhas são as do fim, sem filhos."],
        explicacao: "Raiz: Documentos. Folhas: redação.txt, mapa.png e aniversário.jpg (3)." }
    ],
    basico: [
      { tipo: "arvore", titulo: "Caminhos e níveis", modo: "pastas",
        raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📁 Informática", filhos: [{ t: "📄 grafo.png" }] }, { t: "📄 redação.txt" }] }, { t: "📁 Fotos", filhos: [{ t: "📄 praia.jpg" }] }] },
        perguntas: [
          { p: "Qual é o caminho da raiz até grafo.png?", r: ["Documentos > Escola > Informática > grafo.png", "Documentos Escola Informatica grafo"], tipo: "letras" },
          { p: "Em que nível está a pasta Escola? (a raiz é o nível 0)", r: "1", num: true },
          { p: "Em que nível está grafo.png?", r: "3", num: true },
          { p: "Quem é o pai de praia.jpg?", r: ["Fotos"], tipo: "letras" }],
        dicas: ["Escreva o caminho assim: Documentos > Escola > Informática > grafo.png", "Conte os passos a partir da raiz."],
        explicacao: "Caminho: Documentos > Escola > Informática > grafo.png. Escola = nível 1; grafo.png = nível 3. O pai de praia.jpg é Fotos." },
      { tipo: "classificar", modo: "tabela", titulo: "Raiz, pai, filho ou folha?",
        enunciado: "<p>Na árvore genealógica: <strong>Vovó Rita</strong> → filhos <strong>Ana</strong> e <strong>Beto</strong> → Ana tem a filha <strong>Clara</strong>; Beto não tem filhos.</p>",
        colunaItem: "Pessoa", colunaResp: "Na árvore é…",
        categorias: [{ id: "R", rot: "🌱 Raiz" }, { id: "M", rot: "👨‍👧 Pai/mãe e filho ao mesmo tempo" }, { id: "F", rot: "🍃 Folha" }],
        itens: [
          { t: "Vovó Rita", c: "R", why: "Está no topo." },
          { t: "Ana", c: "M", why: "É filha da Vovó e mãe da Clara." },
          { t: "Beto", c: "F", why: "Não tem filhos." },
          { t: "Clara", c: "F", why: "Não tem filhos." }],
        explicacao: "A raiz é o topo; quem tem filhos e também tem pai está no meio; quem não tem filhos é folha." },
      { tipo: "escolha", titulo: "É árvore ou não?",
        perguntas: [
          { p: "Um grafo em que dá para sair de A, passar por B e C e voltar a A:", opcoes: ["Não é árvore: tem ciclo", "É árvore", "É uma lista"], certo: 0, why: "Árvores não têm voltas." },
          { p: "Numa árvore, entre dois vértices existe:", opcoes: ["Um único caminho", "Vários caminhos", "Nenhum caminho"], certo: 0 },
          { p: "Por que as pastas do computador são uma árvore?", opcoes: ["Cada pasta tem uma só pasta-mãe e não há voltas", "Porque são verdes", "Porque têm ciclos"], certo: 0 },
          { p: "O mata-mata da Copa é uma árvore em que o campeão fica:", opcoes: ["Na raiz", "Nas folhas", "Fora da árvore"], certo: 0, why: "As folhas são os times do começo." }],
        explicacao: "Árvore: sem ciclos, um único caminho entre dois vértices, cada vértice com um só pai." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "O mata-mata como árvore",
        enunciado: "<p>Quartas de final com 8 times. Quem ganha sobe um nível até a final.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Quantas folhas (times no começo)?", { r: "8", tipo: "num" }],
          ["Quantos jogos nas quartas de final?", { r: "4", tipo: "num" }],
          ["Quantos jogos na semifinal?", { r: "2", tipo: "num" }],
          ["Quantos jogos ao todo, contando a final?", { r: "7", tipo: "num", dica: "4 + 2 + 1." }]],
        explicacao: "8 folhas; 4 jogos, depois 2, depois 1 (a final, na raiz): 7 jogos. Em cada jogo, um time sai: 8 times − 1 campeão = 7 jogos." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Árvores e ciclos",
        perguntas: [
          { p: "Uma árvore com 6 vértices tem quantas arestas?", opcoes: ["5", "6", "7"], certo: 0, why: "Cada vértice, menos a raiz, tem uma aresta ligando ao pai: 6 − 1 = 5." },
          { p: "Se eu acrescentar mais uma aresta numa árvore, entre dois vértices que já existem:", opcoes: ["Aparece um ciclo e deixa de ser árvore", "Continua árvore", "Some um vértice"], certo: 0, why: "Passa a haver dois caminhos entre esses vértices." }],
        explicacao: "Numa árvore, arestas = vértices − 1 (cada um liga ao seu pai). Uma aresta a mais cria um ciclo." }
    ],
    vf: [
      { v: true, why: "Desenhada de cabeça para baixo." },
      { v: false, corrigir: { trecho: "o vértice que tem mais filhos", opcoes: ["o vértice que tem mais filhos", "o vértice que não tem filhos"], certo: "o vértice que não tem filhos" }, why: "Folha fica no fim do galho." },
      { v: true, why: "Pasta dentro de pasta." },
      { v: false, corrigir: { trecho: "pode ter ciclos", opcoes: ["pode ter ciclos", "não pode ter ciclos"], certo: "não pode ter ciclos" }, why: "Árvore não tem voltas." },
      { v: true, why: "Um único caminho." }
    ]
  },

  /* ============ MISSÃO 3 — Árvores de decisão ============ */
  m3: {
    pratica: [
      { tipo: "arvore", titulo: "Mão na massa: adivinhe o objeto da sala", modo: "decisao", raiz: objetos,
        perguntas: [{ p: "É eletrônico? Não. Serve para escrever? Sim. Qual é o objeto?", r: ["Lápis"], tipo: "letras" }],
        explicacao: "Raiz → não → “Serve para escrever?” → sim → folha: Lápis." }
    ],
    basico: [
      { tipo: "arvore", titulo: "Conte as folhas e as perguntas", modo: "decisao", raiz: objetos,
        perguntas: [
          { p: "Quantas decisões (folhas) a árvore tem?", r: "4", num: true },
          { p: "Quantas perguntas, no máximo, até decidir (profundidade)?", r: "2", num: true },
          { p: "É eletrônico? Sim. Tem tela? Não. Qual é o objeto?", r: ["Teclado"], tipo: "letras" }],
        explicacao: "4 folhas (monitor, teclado, lápis, cadeira); profundidade 2; sim e não → Teclado." },
      { tipo: "classificar", modo: "tabela", titulo: "Pergunta boa ou ruim para a árvore?",
        colunaItem: "Pergunta", colunaResp: "Serve?",
        categorias: [{ id: "B", rot: "👍 Boa" }, { id: "R", rot: "👎 Ruim" }],
        itens: [
          { t: "Tem quatro patas?", c: "B", why: "Resposta clara: sim ou não." },
          { t: "É bonito?", c: "R", why: "Cada um responde de um jeito." },
          { t: "Vive na água?", c: "B", why: "Sim ou não, sem dúvida." },
          { t: "É legal?", c: "R", why: "Opinião, não tem resposta clara." },
          { t: "Pesa mais de 10 kg?", c: "B", why: "Dá para medir." }],
        explicacao: "Boa pergunta tem resposta clara (sim ou não) e divide as opções. Opinião não serve." },
      { tipo: "tabela", titulo: "Quantas opções cabem?",
        colunas: ["Perguntas de sim ou não", "Opções que dá para separar"],
        linhas: [["1", { r: "2", tipo: "num" }], ["2", { r: "4", tipo: "num" }], ["3", { r: "8", tipo: "num" }], ["4", { r: "16", tipo: "num" }]],
        explicacao: "Cada pergunta a mais dobra as opções: 2, 4, 8, 16." }
    ],
    desafio: [
      { tipo: "arvore", titulo: "A árvore da triagem", modo: "decisao",
        raiz: { t: "❓ Tem dificuldade para respirar?", filhos: [
          { r: "Sim", t: "🔴 Atendimento imediato" },
          { r: "Não", t: "❓ Tem febre há mais de 3 dias?", filhos: [{ r: "Sim", t: "🟡 Atendimento em breve" }, { r: "Não", t: "🟢 Pode aguardar" }] }] },
        perguntas: [
          { p: "Sem dificuldade para respirar e febre há 5 dias: que cor?", r: ["amarela", "amarelo", "Atendimento em breve"], tipo: "letras" },
          { p: "Quantas folhas a árvore tem?", r: "3", num: true },
          { p: "Quem tem dificuldade para respirar responde quantas perguntas?", r: "1", num: true }],
        explicacao: "Não → febre há mais de 3 dias? sim → 🟡. A árvore tem 3 folhas. O caso grave decide logo na 1ª pergunta: a árvore não precisa ser simétrica." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Quantas perguntas?",
        colunas: ["Opções", "Perguntas de sim ou não, no mínimo"],
        linhas: [["16 animais", { r: "4", tipo: "num" }], ["32 objetos", { r: "5", tipo: "num" }], ["1.000 palavras", { r: "10", tipo: "num", dica: "2 elevado a 10 = 1.024." }]],
        explicacao: "Cada pergunta dobra: 4 perguntas → 16; 5 → 32; 10 → 1.024. É a mesma ideia da busca binária." }
    ],
    vf: [
      { v: true, why: "Folhas = decisões." },
      { v: true, why: "Sim ou não." },
      { v: false, corrigir: { trecho: "é uma boa pergunta", opcoes: ["é uma boa pergunta", "é uma pergunta ruim"], certo: "é uma pergunta ruim" }, why: "Opinião não tem resposta clara." },
      { v: true, why: "2 × 2 × 2 = 8." },
      { v: true, why: "Digite 1, digite 2…" }
    ]
  },

  /* ============ MISSÃO 4 — Programar com grafos e árvores ============ */
  m4: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: lista de vizinhos",
        enunciado: "<p>Arestas da escola: Portão–Pátio · Pátio–Cantina · Pátio–Informática · Pátio–Biblioteca · Informática–Biblioteca</p>",
        colunas: ["Vértice", "Vizinhos (separe com vírgula)"],
        linhas: [
          ["Portão", { r: "Pátio", tipo: "letras" }],
          ["Cantina", { r: "Pátio", tipo: "letras" }],
          ["Biblioteca", { r: ["Pátio, Informática", "Informática, Pátio"], tipo: "letras" }]],
        explicacao: "Os vizinhos de um vértice são os ligados diretamente a ele: Portão → Pátio; Cantina → Pátio; Biblioteca → Pátio e Informática." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Grau = tamanho da lista de vizinhos",
        colunas: ["Vértice", "Grau"],
        linhas: [["Pátio", { r: "4", tipo: "num" }], ["Sala de Informática", { r: "2", tipo: "num" }], ["Portão", { r: "1", tipo: "num" }]],
        explicacao: "Pátio: Portão, Cantina, Informática, Biblioteca (4). Informática: Pátio, Biblioteca (2). Portão: Pátio (1)." },
      { tipo: "blocos", titulo: "No editor: o grau e os vizinhos",
        enunciado: "<p>A ficha <strong>vizinhos</strong> já guarda a lista de vizinhos de cada lugar. Mostre:</p><p><strong>4</strong> (o grau do Pátio: tamanho da lista)<br><strong>Pátio</strong> e <strong>Biblioteca</strong> (os vizinhos da Informática, um por linha, com o para cada)</p>",
        caixa: ["mostrar", "variavel", "lista", "paracada", "ficha"],
        inicio: [["definir", "vizinhos", ["ficha"]], ["ficha_por", "vizinhos", "Pátio", L("Portão", "Cantina", "Informática", "Biblioteca")], ["ficha_por", "vizinhos", "Portão", L("Pátio")], ["ficha_por", "vizinhos", "Informática", L("Pátio", "Biblioteca")]],
        esperado: ["4", "Pátio", "Biblioteca"], exige: ["paracada", "ficha"],
        solucao: [["definir", "vizinhos", ["ficha"]], ["ficha_por", "vizinhos", "Pátio", L("Portão", "Cantina", "Informática", "Biblioteca")], ["ficha_por", "vizinhos", "Portão", L("Pátio")], ["ficha_por", "vizinhos", "Informática", L("Pátio", "Biblioteca")],
          ["mostrar", ["tamanho", ["campo", v("vizinhos"), "Pátio"]]], ["paracada", "x", ["campo", v("vizinhos"), "Informática"], [["mostrar", v("x")]]]],
        dicas: ["“tamanho de” + “campo Pátio da ficha vizinhos” = grau do Pátio.", "No para cada, a lista é o “campo Informática da ficha vizinhos”.", "Escreva o nome do campo igualzinho: Pátio, com acento."],
        explicacao: "O grau é o tamanho da lista de vizinhos; o para cada percorre os vizinhos. É assim que a rede social conta e mostra os seus amigos." },
      { tipo: "escolha", titulo: "Representar no computador",
        perguntas: [
          { p: "Na lista de vizinhos, guardamos para cada vértice:", opcoes: ["Os vértices ligados a ele", "Só o seu nome", "O caminho mais curto"], certo: 0 },
          { p: "Uma árvore de decisão vira, no programa:", opcoes: ["Se dentro de se (se aninhado)", "Uma repetição sem fim", "Uma lista de compras"], certo: 0 },
          { p: "Na árvore de decisão programada, as folhas viram:", opcoes: ["Os blocos mostrar com a decisão", "As perguntas", "As variáveis"], certo: 0 }],
        explicacao: "Grafo = lista de vizinhos. Árvore de decisão = se aninhado; perguntas = condições; folhas = mostrar." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "A árvore de decisão em blocos",
        enunciado: "<p>As variáveis já dizem como é o objeto: <strong>eletronico = verdadeiro</strong>, <strong>tela = falso</strong>, <strong>escreve = falso</strong>. Monte a árvore do 💡 Para começar com <strong>se … senão</strong> dentro de <strong>se … senão</strong>: o programa deve mostrar <strong>Teclado</strong>.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar"],
        inicio: [["definir", "eletronico", true], ["definir", "tela", false], ["definir", "escreve", false]],
        esperado: ["Teclado"], exige: ["se", "comparar"],
        solucao: [["definir", "eletronico", true], ["definir", "tela", false], ["definir", "escreve", false],
          ["se", ["=", v("eletronico"), true], [["se", ["=", v("tela"), true], [["mostrar", "Monitor"]], [["mostrar", "Teclado"]]]], [["se", ["=", v("escreve"), true], [["mostrar", "Lápis"]], [["mostrar", "Cadeira"]]]]]],
        dicas: ["O primeiro se pergunta: eletronico = verdadeiro? (o verdadeiro fica na gaveta ⚖️ Comparar).", "No “faça” dele vai outro se … senão (tela); no “senão”, outro se … senão (escreve).", "Monte a árvore inteira, com as 4 folhas: Monitor, Teclado, Lápis e Cadeira."],
        explicacao: "Cada pergunta da árvore vira um se; cada galho, o faça ou o senão; cada folha, um mostrar. Com eletrônico sim e tela não, o programa chega à folha Teclado." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Qual lugar é o mais conectado?",
        enunciado: "<p>A lista <strong>lugares</strong> tem fichas com os campos <strong>nome</strong> e <strong>viz</strong> (a lista de vizinhos). Percorra os lugares e guarde o de maior grau. No fim, mostre: <strong>Pátio (4)</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada", "se", "comparar", "ficha"],
        inicio: [["definir", "a", ["ficha"]], ["ficha_por", "a", "nome", "Portão"], ["ficha_por", "a", "viz", L("Pátio")],
          ["definir", "b", ["ficha"]], ["ficha_por", "b", "nome", "Pátio"], ["ficha_por", "b", "viz", L("Portão", "Cantina", "Informática", "Biblioteca")],
          ["definir", "c", ["ficha"]], ["ficha_por", "c", "nome", "Informática"], ["ficha_por", "c", "viz", L("Pátio", "Biblioteca")],
          ["definir", "lugares", L(v("a"), v("b"), v("c"))], ["definir", "maior", 0], ["definir", "campeao", ""]],
        esperado: ["Pátio (4)"], exige: ["paracada", "se"],
        solucao: [["definir", "a", ["ficha"]], ["ficha_por", "a", "nome", "Portão"], ["ficha_por", "a", "viz", L("Pátio")],
          ["definir", "b", ["ficha"]], ["ficha_por", "b", "nome", "Pátio"], ["ficha_por", "b", "viz", L("Portão", "Cantina", "Informática", "Biblioteca")],
          ["definir", "c", ["ficha"]], ["ficha_por", "c", "nome", "Informática"], ["ficha_por", "c", "viz", L("Pátio", "Biblioteca")],
          ["definir", "lugares", L(v("a"), v("b"), v("c"))], ["definir", "maior", 0], ["definir", "campeao", ""],
          ["paracada", "lg", v("lugares"), [["se", [">", ["tamanho", ["campo", v("lg"), "viz"]], v("maior")], [["definir", "maior", ["tamanho", ["campo", v("lg"), "viz"]]], ["definir", "campeao", ["campo", v("lg"), "nome"]]]]]],
          ["mostrar", ["juntar", v("campeao"), " (", v("maior"), ")"]]],
        dicas: ["Para cada lugar: se o tamanho do campo viz for maior que a variável maior, guarde o tamanho em maior e o nome em campeao.", "O mostrar fica no fim: criar texto com campeao, “ (”, maior, “)”."],
        explicacao: "Percorrer e guardar o maior até agora: Portão (1) → Pátio (4) → Informática (2) não passa de 4. Resultado: Pátio (4)." }
    ],
    vf: [
      { v: true, why: "Lista de adjacência." },
      { v: true, why: "Grau = quantos vizinhos." },
      { v: true, why: "Se aninhado." },
      { v: false, corrigir: { trecho: "não têm nenhuma ligação", opcoes: ["não têm nenhuma ligação", "estão ligados por uma aresta"], certo: "estão ligados por uma aresta" }, why: "Vizinho = ligado diretamente." },
      { v: true, why: "A lista de amigos." }
    ]
  },

  /* ============ MISSÃO 5 — Autômatos ============ */
  m5: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: a catraca",
        enunciado: "<p>A catraca começa <strong>travada</strong>. Uma pessoa quer passar. Clique nos passos na ordem.</p>",
        etapas: [
          { ic: "🔒", t: "Estado: travada" },
          { ic: "💳", t: "Entrada: passa o cartão" },
          { ic: "🔓", t: "Transição: fica liberada" },
          { ic: "🚶", t: "Entrada: empurra e passa" },
          { ic: "🔒", t: "Transição: volta a ficar travada" }],
        okMsg: "Você seguiu o autômato da catraca!",
        explicacao: "Estado travada + cartão → liberada; liberada + empurrar → travada (a pessoa passou)." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Complete a tabela de transição da catraca",
        colunas: ["Estado atual", "Entrada", "Próximo estado"],
        linhas: [
          ["🔒 Travada", "💳 cartão", { op: ["Travada", "Liberada"], r: "Liberada" }],
          ["🔒 Travada", "🚶 empurrar", { op: ["Travada", "Liberada"], r: "Travada" }],
          ["🔓 Liberada", "🚶 empurrar", { op: ["Travada", "Liberada"], r: "Travada" }],
          ["🔓 Liberada", "💳 cartão", { op: ["Travada", "Liberada"], r: "Liberada" }]],
        explicacao: "Cartão libera; empurrar travada não gira; empurrar liberada gira e trava de novo; cartão em liberada continua liberada." },
      { tipo: "tabela", titulo: "Siga as entradas",
        enunciado: "<p>A catraca começa <strong>travada</strong>. Entradas: <strong>cartão → empurrar → empurrar → cartão</strong>.</p>",
        colunas: ["Depois da entrada", "Estado"],
        linhas: [["1ª (cartão)", { op: ["Travada", "Liberada"], r: "Liberada" }], ["2ª (empurrar)", { op: ["Travada", "Liberada"], r: "Travada" }], ["3ª (empurrar)", { op: ["Travada", "Liberada"], r: "Travada" }], ["4ª (cartão)", { op: ["Travada", "Liberada"], r: "Liberada" }],
          ["Quantas pessoas passaram?", { r: "1", tipo: "num", dica: "Só passa quem empurra com a catraca liberada." }]],
        explicacao: "Liberada → travada (passou 1) → travada (não gira) → liberada. Passou 1 pessoa." },
      { tipo: "classificar", modo: "tabela", titulo: "Estado ou entrada?",
        colunaItem: "No aparelho", colunaResp: "É…",
        categorias: [{ id: "E", rot: "Estado" }, { id: "N", rot: "Entrada" }],
        itens: [
          { t: "Semáforo vermelho", c: "E", why: "É a situação dele agora." },
          { t: "O tempo do verde acabou", c: "N", why: "Acontece e muda o estado." },
          { t: "Elevador parado no 2º andar", c: "E" },
          { t: "Alguém aperta o botão do 5º andar", c: "N" },
          { t: "Personagem pulando", c: "E" },
          { t: "Apertar o botão de pular", c: "N" }],
        explicacao: "Estado = a situação atual. Entrada = o que acontece e pode mudar o estado." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "O autômato da porta automática",
        enunciado: "<p>Estados: <strong>fechada</strong> e <strong>aberta</strong>. Entradas: <strong>alguém chega</strong> (sensor) e <strong>ninguém por 5 segundos</strong>. Começa fechada.</p>",
        colunas: ["Estado atual", "Entrada", "Próximo estado"],
        linhas: [
          ["Fechada", "alguém chega", { op: ["Fechada", "Aberta"], r: "Aberta" }],
          ["Aberta", "alguém chega", { op: ["Fechada", "Aberta"], r: "Aberta" }],
          ["Aberta", "ninguém por 5 segundos", { op: ["Fechada", "Aberta"], r: "Fechada" }],
          ["Fechada", "ninguém por 5 segundos", { op: ["Fechada", "Aberta"], r: "Fechada" }]],
        explicacao: "A porta abre quando o sensor percebe alguém e fecha depois de 5 segundos sem ninguém. Em todos os outros casos, continua como está." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "O personagem do jogo",
        enunciado: "<p>Estados: <strong>parado</strong>, <strong>correndo</strong>, <strong>pulando</strong>. Regras: ➡️ (seta) faz correr; ⬆️ (pular) faz pular de qualquer estado; ao cair, quem pulou volta a ficar <strong>parado</strong>; soltar a seta faz parar quem está correndo. Começa parado.</p>",
        colunas: ["Entrada", "Estado depois"],
        linhas: [["➡️ seta", { op: ["parado", "correndo", "pulando"], r: "correndo" }], ["⬆️ pular", { op: ["parado", "correndo", "pulando"], r: "pulando" }], ["caiu no chão", { op: ["parado", "correndo", "pulando"], r: "parado" }], ["➡️ seta", { op: ["parado", "correndo", "pulando"], r: "correndo" }], ["soltar a seta", { op: ["parado", "correndo", "pulando"], r: "parado" }]],
        explicacao: "parado → correndo → pulando → parado → correndo → parado. Os jogos controlam os personagens com autômatos assim." }
    ],
    vf: [
      { v: true, why: "Sempre em um estado." },
      { v: true, why: "Transição = mudança." },
      { v: false, corrigir: { trecho: "faz ela girar", opcoes: ["faz ela girar", "não faz ela girar"], certo: "não faz ela girar" }, why: "Travada continua travada." },
      { v: true, why: "Estado + entrada → próximo." },
      { v: true, why: "Verde → amarelo → vermelho." }
    ]
  },

  /* ============ MISSÃO 6 — Programação por eventos ============ */
  m6: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: o contador de cliques",
        enunciado: "<p>Rode o programa: o portal aperta o <strong>🟢 botão</strong> 3 vezes, e o tratador roda a cada clique. Mude para mostrar o texto “Cliques: ” junto com o número.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🟢 botão verde", "verde"]], disparos: ["verde", "verde", "verde"],
        inicio: [["definir", "cliques", 0], ["quando", "verde", [["mudar", "cliques", 1], ["mostrar", v("cliques")]]]],
        esperado: ["Cliques: 1", "Cliques: 2", "Cliques: 3"],
        solucao: [["definir", "cliques", 0], ["quando", "verde", [["mudar", "cliques", 1], ["mostrar", ["juntar", "Cliques: ", v("cliques")]]]]],
        dicas: ["Troque o que está no “mostrar” por “criar texto com” (gaveta 🔤 Texto): “Cliques: ” e a variável cliques."],
        explicacao: "O “definir cliques para 0” roda uma vez; o tratador do botão roda a cada clique: 1, 2, 3." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Evento e tratador",
        pares: [
          { a: "👆 Tocar no ícone", b: "Abrir o aplicativo" },
          { a: "🔔 Chegar mensagem", b: "Vibrar e mostrar a notificação" },
          { a: "⬆️ Apertar o botão de pular", b: "O personagem pula" },
          { a: "🚶 Sensor percebe alguém", b: "A porta automática abre" }],
        explicacao: "Cada evento (o que acontece) tem um tratador (o que o programa faz)." },
      { tipo: "blocos", titulo: "O botão que fala",
        enunciado: "<p>Monte dois tratadores: <strong>quando 🔵 botão azul</strong>, mostrar <strong>Olá!</strong>; <strong>quando 🔴 botão vermelho</strong>, mostrar <strong>Tchau!</strong>. O portal vai apertar: azul → vermelho → azul.</p>",
        caixa: ["mostrar", "texto", "evento"],
        eventos: [["🔵 botão azul", "azul"], ["🔴 botão vermelho", "vermelho"]], disparos: ["azul", "vermelho", "azul"],
        esperado: ["Olá!", "Tchau!", "Olá!"], exige: ["evento"],
        solucao: [["quando", "azul", [["mostrar", "Olá!"]]], ["quando", "vermelho", [["mostrar", "Tchau!"]]]],
        dicas: ["Arraste dois blocos “quando acontecer” da gaveta ⚡ Eventos e escolha o botão em cada um.", "Dentro de cada um, um “mostrar na tela”."],
        explicacao: "Cada evento tem o seu tratador. O tratador do azul roda duas vezes, porque o azul foi apertado duas vezes." },
      { tipo: "escolha", titulo: "Eventos: confira",
        perguntas: [
          { p: "Quantas vezes roda o tratador de um botão apertado 5 vezes?", opcoes: ["5 vezes", "1 vez", "Nenhuma"], certo: 0, why: "Roda de novo toda vez que o evento acontece." },
          { p: "O que é um sensor?", opcoes: ["Peça que percebe algo do mundo e gera um evento", "Um tipo de lista", "Um estado"], certo: 0 },
          { p: "Programas por eventos ficam:", opcoes: ["Esperando algo acontecer para reagir", "Rodando de cima para baixo e terminando", "Desligados"], certo: 0 }],
        explicacao: "Programa por eventos espera e reage; o tratador roda a cada evento; sensores geram eventos." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "A catraca programada",
        enunciado: "<p>A variável <strong>estado</strong> começa “travada” e o tratador do <strong>💳 cartão</strong> já está pronto. Complete o tratador de <strong>🚶 empurrar</strong>: se o estado for “liberada”, definir estado para “travada” e mostrar <strong>Girou</strong>; senão, mostrar <strong>Travada!</strong></p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
        eventos: catracaEv, disparos: ["empurrar", "cartao", "empurrar", "empurrar"],
        inicio: [["definir", "estado", "travada"], catracaCartao, ["quando", "empurrar", []]],
        esperado: ["Travada!", "Liberada", "Girou", "Travada!"], exige: ["se", "evento"],
        solucao: [["definir", "estado", "travada"], catracaCartao, ["quando", "empurrar", [["se", ["=", v("estado"), "liberada"], [["definir", "estado", "travada"], ["mostrar", "Girou"]], [["mostrar", "Travada!"]]]]]],
        dicas: ["Use o tratador do cartão como modelo.", "Condição: estado = “liberada” (texto, gaveta 🔤 Texto)."],
        explicacao: "A variável estado é o estado do autômato; cada evento faz a transição com um se. É a tabela de transição da Missão 5 virando programa." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "O placar de dois botões",
        enunciado: "<p>Dois botões: <strong>🏠 gol da casa</strong> e <strong>✈️ gol do visitante</strong>. A cada gol, mostre o placar no formato <strong>1 x 0</strong>. O portal vai fazer: casa → casa → visitante → casa.</p><p>Deve aparecer: 1 x 0 · 2 x 0 · 2 x 1 · 3 x 1</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🏠 gol da casa", "casa"], ["✈️ gol do visitante", "visitante"]], disparos: ["casa", "casa", "visitante", "casa"],
        esperado: ["1 x 0", "2 x 0", "2 x 1", "3 x 1"], exige: ["evento", "variavel"],
        solucao: [["definir", "gc", 0], ["definir", "gv", 0], ["quando", "casa", [["mudar", "gc", 1], ["mostrar", ["juntar", v("gc"), " x ", v("gv")]]]], ["quando", "visitante", [["mudar", "gv", 1], ["mostrar", ["juntar", v("gc"), " x ", v("gv")]]]]],
        dicas: ["Duas variáveis que começam em 0 (uma para cada time).", "Cada tratador soma 1 no seu time e mostra: criar texto com (casa, “ x ”, visitante)."],
        explicacao: "Dois eventos, dois tratadores, duas variáveis: é o placar eletrônico do estádio." }
    ],
    vf: [
      { v: true, why: "Espera e reage." },
      { v: false, corrigir: { trecho: "roda uma vez só", opcoes: ["roda uma vez só", "roda toda vez que o evento acontece"], certo: "roda toda vez que o evento acontece" }, why: "Cada evento dispara o tratador de novo." },
      { v: true, why: "Toque = evento." },
      { v: true, why: "Sensor gera evento." },
      { v: true, why: "Variável de estado." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: O semáforo ============ */
  m7: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o ciclo do semáforo",
        enunciado: "<p>Começando no verde, clique nos estados na ordem, a cada tique, até voltar ao verde.</p>",
        etapas: [{ ic: "🟢", t: "Verde" }, { ic: "🟡", t: "Amarelo" }, { ic: "🔴", t: "Vermelho" }, { ic: "🟢", t: "Verde de novo" }],
        okMsg: "Ciclo completo!", explicacao: "Verde → amarelo → vermelho → verde: um ciclo que se repete sempre." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Siga os tiques",
        enunciado: "<p>O semáforo começa <strong>verde</strong>.</p>",
        colunas: ["Depois de", "Luz"],
        linhas: [["1 tique", { op: ["verde", "amarelo", "vermelho"], r: "amarelo" }], ["2 tiques", { op: ["verde", "amarelo", "vermelho"], r: "vermelho" }], ["3 tiques", { op: ["verde", "amarelo", "vermelho"], r: "verde" }], ["7 tiques", { op: ["verde", "amarelo", "vermelho"], r: "amarelo", dica: "A cada 3 tiques volta ao verde: 6 tiques = verde; mais 1 = amarelo." }]],
        explicacao: "O ciclo tem 3 estados: a cada 3 tiques volta ao começo. 7 = 6 + 1 → amarelo." },
      { tipo: "blocos", titulo: "Programe o semáforo",
        enunciado: "<p>A variável <strong>luz</strong> começa “verde”. Complete o tratador do <strong>⏱️ tique</strong>: se luz = verde, luz vira amarelo; senão, se luz = amarelo, vira vermelho; senão, vira verde. Depois do se, mostrar a luz. O portal dá 4 tiques.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
        eventos: [["⏱️ tique (o tempo acabou)", "tique"]], disparos: ["tique", "tique", "tique", "tique"],
        inicio: [["definir", "luz", "verde"], ["quando", "tique", []]],
        esperado: ["amarelo", "vermelho", "verde", "amarelo"], exige: ["se", "evento"],
        solucao: [["definir", "luz", "verde"], semaforoTique],
        dicas: ["Use se … senão; dentro do senão, outro se … senão.", "O mostrar luz fica depois do se, ainda dentro do tratador."],
        explicacao: "A tabela de transição virou se aninhado: verde → amarelo, amarelo → vermelho, senão (vermelho) → verde." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "O botão de pedestre",
        enunciado: "<p>O tique já funciona. Acrescente o evento <strong>🚶 botão de pedestre</strong>: se a luz for verde, ela vira amarelo; depois, mostrar a luz. O portal faz: botão → tique → tique → botão → tique.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
        eventos: [["⏱️ tique (o tempo acabou)", "tique"], ["🚶 botão de pedestre", "botao"]], disparos: ["botao", "tique", "tique", "botao", "tique"],
        inicio: [["definir", "luz", "verde"], semaforoTique],
        esperado: ["amarelo", "vermelho", "verde", "amarelo", "vermelho"], exige: ["evento"],
        solucao: [["definir", "luz", "verde"], semaforoTique, ["quando", "botao", [["se", ["=", v("luz"), "verde"], [["definir", "luz", "amarelo"]]], ["mostrar", v("luz")]]]],
        dicas: ["Novo bloco “quando acontecer 🚶 botão de pedestre”.", "Dentro: se luz = verde → definir luz para amarelo. Depois do se: mostrar luz."],
        explicacao: "O botão só muda o semáforo quando está verde; o tique continua o ciclo. Dois eventos mexendo no mesmo estado." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "O semáforo de 4 estados",
        enunciado: "<p>Em alguns cruzamentos há um estado a mais: <strong>verde → amarelo → vermelho → vermelho com seta verde ↱</strong> → verde… Começa verde.</p>",
        colunas: ["Depois de", "Estado"],
        linhas: [["4 tiques", { op: ["verde", "amarelo", "vermelho", "seta"], r: "verde" }], ["6 tiques", { op: ["verde", "amarelo", "vermelho", "seta"], r: "vermelho" }], ["Quantos tiques para um ciclo completo?", { r: "4", tipo: "num" }]],
        explicacao: "Com 4 estados, o ciclo tem 4 tiques: 4 tiques = verde; 6 = 4 + 2 → vermelho." }
    ],
    vf: [
      { v: true, why: "Três estados." },
      { v: false, corrigir: { trecho: "vem o verde", opcoes: ["vem o verde", "vem o vermelho"], certo: "vem o vermelho" }, why: "Amarelo → vermelho." },
      { v: true, why: "Temporizador gera o tique." },
      { v: true, why: "Regra da missão." },
      { v: true, why: "Ciclo fixo." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: O mapa da escola em grafo ============ */
  m8: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Mão na massa: monte o grafo da escola", descricao: "Grafo da escola para montar" }, escola,
        { enunciado: "<p>Clique em um lugar e depois no lugar ligado a ele, seguindo a tabela de corredores do 💡 Para começar.</p>",
          dicas: ["São 5 arestas.", "O Pátio se liga a 4 lugares."], explicacao: "Portão–Pátio (1), Pátio–Cantina (1), Pátio–Informática (2), Pátio–Biblioteca (2), Informática–Biblioteca (1)." })
    ],
    basico: [
      Object.assign({ tipo: "grafo", titulo: "Trace: do Portão até a Sala de Informática", de: "Po", para: "In", unidade: "minutos", descricao: "Grafo da escola" }, escola,
        { explicacao: "Portão → Pátio → Informática = 1 + 2 = 3 minutos." }),
      { tipo: "tabela", titulo: "Perguntas sobre o grafo da escola",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Lugar mais conectado (maior grau)", { op: ["Portão", "Pátio", "Cantina", "Biblioteca"], r: "Pátio" }], ["Grau do Pátio", { r: "4", tipo: "num" }], ["Minutos do Portão até a Biblioteca (mais curto)", { r: "3", tipo: "num", dica: "Portão → Pátio → Biblioteca." }], ["Minutos da Cantina até a Informática (mais curto)", { r: "3", tipo: "num", dica: "Cantina → Pátio → Informática." }]],
        explicacao: "Pátio, grau 4. Portão → Pátio → Biblioteca = 1 + 2 = 3. Cantina → Pátio → Informática = 1 + 2 = 3." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "O corredor em reforma",
        enunciado: "<p>O corredor <strong>Pátio — Informática</strong> está em reforma (a aresta sumiu).</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Minutos do Portão até a Informática agora", { r: "4", tipo: "num", dica: "Portão → Pátio → Biblioteca → Informática." }], ["Novo grau do Pátio", { r: "3", tipo: "num" }]],
        explicacao: "Sem a aresta Pátio–Informática: Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = 4. O Pátio perde uma aresta: grau 3." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "A rota de fuga",
        enunciado: "<p>Numa emergência, todos saem pelo <strong>Portão</strong>. Ache o tempo do caminho mais curto de cada lugar até o Portão.</p>",
        colunas: ["De", "Minutos até o Portão"],
        linhas: [["Cantina", { r: "2", tipo: "num" }], ["Biblioteca", { r: "3", tipo: "num" }], ["Sala de Informática", { r: "3", tipo: "num" }]],
        explicacao: "Todos passam pelo Pátio: Cantina 1 + 1 = 2; Biblioteca 2 + 1 = 3; Informática 2 + 1 = 3. O Pátio precisa estar sempre livre: é o vértice mais conectado." }
    ],
    vf: [
      { v: true, why: "Lugar = vértice; corredor = aresta." },
      { v: true, why: "Liga 4 lugares." },
      { v: false, corrigir: { trecho: "leva 4 minutos", opcoes: ["leva 4 minutos", "leva 3 minutos"], certo: "leva 3 minutos" }, why: "1 + 2 = 3." },
      { v: true, why: "Tirou a aresta, procura de novo." },
      { v: false, corrigir: { trecho: "o caminho mais longo", opcoes: ["o caminho mais longo", "o caminho mais curto e seguro"], certo: "o caminho mais curto e seguro" }, why: "Rota de fuga = mais curto até a saída." }
    ]
  },

  /* ============ 🔁 REVISÃO PARA A PROVA ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "tabela", de: "m1", titulo: "M1 · Caminho mais curto", enunciado: "<p>Arestas: A–B (2) · B–D (2) · A–C (1) · C–D (5) · A–D (6)</p>", colunas: ["Pergunta", "Resposta"],
        linhas: [["Caminho mais curto de A até D (soma)", { r: "4", tipo: "num", dica: "A → B → D = 2 + 2." }], ["Grau de A", { r: "3", tipo: "num" }]],
        explicacao: "A → B → D = 4; A → C → D = 6; A → D direto = 6. O mais curto soma 4. A tem 3 arestas: grau 3." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Árvores", perguntas: [{ p: "O vértice sem filhos é a:", opcoes: ["Folha", "Raiz", "Aresta"], certo: 0 }, { p: "Árvores têm ciclos?", opcoes: ["Não", "Sim", "Às vezes"], certo: 0 }], explicacao: "Folha = sem filhos; árvore não tem ciclos." },
      { tipo: "relembre", de: "m3" },
      { tipo: "arvore", de: "m3", titulo: "M3 · Árvore de decisão", modo: "decisao", raiz: objetos, perguntas: [{ p: "Eletrônico sim, tela sim: qual objeto?", r: ["Monitor"], tipo: "letras" }], explicacao: "Sim → tem tela? sim → Monitor." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Programar estruturas", perguntas: [{ p: "O grau de um vértice é o tamanho da:", opcoes: ["Lista de vizinhos", "Árvore inteira", "Tabela de transição"], certo: 0 }, { p: "Árvore de decisão no programa vira:", opcoes: ["Se aninhado", "Repita", "Contador"], certo: 0 }], explicacao: "Grau = tamanho da lista de vizinhos; árvore de decisão = se aninhado." },
      { tipo: "relembre", de: "m5" },
      { tipo: "tabela", de: "m5", titulo: "M5 · Catraca", colunas: ["Estado + entrada", "Próximo estado"], linhas: [["Travada + cartão", { op: ["Travada", "Liberada"], r: "Liberada" }], ["Liberada + empurrar", { op: ["Travada", "Liberada"], r: "Travada" }]], explicacao: "Cartão libera; empurrar com liberada gira e trava." },
      { tipo: "relembre", de: "m6" },
      { tipo: "blocos", de: "m6", titulo: "M6 · Eventos", enunciado: "<p>Quando o <strong>🔔 sino</strong> tocar, mostrar <strong>Recreio!</strong>. O portal toca o sino 2 vezes.</p>",
        caixa: ["mostrar", "texto", "evento"], eventos: [["🔔 sino", "sino"]], disparos: ["sino", "sino"],
        esperado: ["Recreio!", "Recreio!"], exige: ["evento"], solucao: [["quando", "sino", [["mostrar", "Recreio!"]]]],
        explicacao: "Um tratador para o evento sino, que roda a cada toque." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Semáforo", perguntas: [{ p: "Começando no verde, depois de 2 tiques:", opcoes: ["Vermelho", "Amarelo", "Verde"], certo: 0 }], explicacao: "Verde → amarelo → vermelho." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Grafo da escola", perguntas: [{ p: "Corredor interditado no grafo é:", opcoes: ["Tirar a aresta", "Tirar todos os vértices", "Somar 1 no peso"], certo: 0 }], explicacao: "Interditar = tirar a aresta; o caminho mais curto pode mudar." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1", perguntas: [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma dos pesos", "Menos paradas", "Mais arestas"], certo: 0 }], explicacao: "Menor soma dos pesos." },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2", perguntas: [{ p: "Árvore com 10 vértices tem quantas arestas?", opcoes: ["9", "10", "11"], certo: 0 }], explicacao: "Arestas = vértices − 1." },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3", perguntas: [{ p: "Com 4 perguntas de sim ou não, separo até:", opcoes: ["16 opções", "8 opções", "4 opções"], certo: 0 }], explicacao: "2 × 2 × 2 × 2 = 16." },
      { tipo: "escolha", de: "m4", titulo: "Desafio M4", perguntas: [{ p: "Vizinhos do Portão na escola:", opcoes: ["Pátio", "Pátio e Cantina", "Nenhum"], certo: 0 }], explicacao: "O Portão só se liga ao Pátio." },
      { tipo: "escolha", de: "m5", titulo: "Desafio M5", perguntas: [{ p: "Travada + empurrar →", opcoes: ["Travada", "Liberada", "Quebrada"], certo: 0 }], explicacao: "Sem cartão, não gira." },
      { tipo: "escolha", de: "m6", titulo: "Desafio M6", perguntas: [{ p: "Quem gera o evento da porta automática?", opcoes: ["O sensor de movimento", "A lista de vizinhos", "O contador"], certo: 0 }], explicacao: "O sensor percebe alguém e gera o evento." },
      { tipo: "escolha", de: "m7", titulo: "Desafio M7", perguntas: [{ p: "Começando no verde, depois de 7 tiques:", opcoes: ["Amarelo", "Verde", "Vermelho"], certo: 0 }], explicacao: "6 tiques = verde; mais 1 = amarelo." },
      { tipo: "escolha", de: "m8", titulo: "Desafio M8", perguntas: [{ p: "Onde pôr o bebedouro, pelo grafo?", opcoes: ["No vértice de maior grau (Pátio)", "No Portão", "Na Cantina"], certo: 0 }], explicacao: "Por onde mais gente passa." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "O número numa aresta é o:", opcoes: ["Peso", "Grau", "Vértice"], certo: 0 }], explicacao: "Peso." },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "Nível da raiz:", opcoes: ["0", "1", "Depende"], certo: 0 }], explicacao: "A raiz é o nível 0." },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Máximo de perguntas da raiz até uma folha:", opcoes: ["Profundidade", "Grau", "Peso"], certo: 0 }], explicacao: "Profundidade." },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "Lista de adjacência é o mesmo que:", opcoes: ["Lista de vizinhos", "Lista de compras", "Tabela de transição"], certo: 0 }], explicacao: "Adjacente = vizinho." },
      { tipo: "escolha", de: "m5", titulo: "Turbo · Simulado M5", perguntas: [{ p: "A mudança de estado se chama:", opcoes: ["Transição", "Evento", "Folha"], certo: 0 }], explicacao: "Transição." },
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6", perguntas: [{ p: "O que roda quando o evento acontece:", opcoes: ["Tratador de evento", "Caso base", "Contador"], certo: 0 }], explicacao: "Tratador." },
      { tipo: "escolha", de: "m7", titulo: "Turbo · Simulado M7", perguntas: [{ p: "Quem gera o tique do semáforo:", opcoes: ["O temporizador", "O pedestre", "O GPS"], certo: 0 }], explicacao: "Temporizador." },
      { tipo: "escolha", de: "m8", titulo: "Turbo · Simulado M8", perguntas: [{ p: "Rota de fuga é o caminho:", opcoes: ["Mais curto e seguro até a saída", "Mais longo", "Com mais portas"], certo: 0 }], explicacao: "Mais curto e seguro." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-1bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Grafos", perguntas: [{"p": "No grafo de ruas, a rua entre duas esquinas é uma:", "opcoes": ["Aresta", "Vértice", "Folha"], "certo": 0}, {"p": "Casa → Praça → Escola tem pesos 4 e 4. Qual é a soma?", "opcoes": ["4", "8", "9"], "certo": 1}, {"p": "O grau de um vértice é:", "opcoes": ["O maior peso", "O nome do lugar", "Quantas arestas saem dele"], "certo": 2}],
      explicacao: "No grafo de ruas, a rua entre duas esquinas é uma: → <strong>Aresta</strong> · Casa → Praça → Escola tem pesos 4 e 4. Qual é a soma? → <strong>8</strong> · O grau de um vértice é: → <strong>Quantas arestas saem dele</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Árvores", perguntas: [{"p": "Na árvore de pastas, Documentos é a:", "opcoes": ["Raiz", "Folha", "Aresta"], "certo": 0}, {"p": "Os arquivos no fim dos galhos (como mapa.png) são as:", "opcoes": ["Raízes", "Folhas", "Arestas"], "certo": 1}, {"p": "Uma árvore pode ter ciclos (voltas)?", "opcoes": ["Sim, sempre", "Só se for grande", "Não"], "certo": 2}],
      explicacao: "Na árvore de pastas, Documentos é a: → <strong>Raiz</strong> · Os arquivos no fim dos galhos (como mapa.png) são as: → <strong>Folhas</strong> · Uma árvore pode ter ciclos (voltas)? → <strong>Não</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Árvores de decisão", perguntas: [{"p": "É eletrônico? Não. Serve para escrever? Não. O objeto é:", "opcoes": ["🪑 Cadeira", "✏️ Lápis", "🖥️ Monitor"], "certo": 0}, {"p": "Com 3 perguntas de sim ou não, dá para separar até:", "opcoes": ["3 opções", "8 opções", "6 opções"], "certo": 1}, {"p": "Na árvore de decisão, cada galho é:", "opcoes": ["Uma decisão final", "Um peso", "Uma resposta (sim ou não)"], "certo": 2}],
      explicacao: "É eletrônico? Não. Serve para escrever? Não. O objeto é: → <strong>🪑 Cadeira</strong> · Com 3 perguntas de sim ou não, dá para separar até: → <strong>8 opções</strong> · Na árvore de decisão, cada galho é: → <strong>Uma resposta (sim ou não)</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Programar com grafos e árvores", perguntas: [{"p": "Vizinhos do Pátio: Portão, Cantina, Informática, Biblioteca. O grau do Pátio é:", "opcoes": ["4", "2", "1"], "certo": 0}, {"p": "Guardar, para cada vértice, os vértices ligados a ele é a:", "opcoes": ["Árvore de decisão", "Lista de vizinhos", "Tabela de transição"], "certo": 1}, {"p": "No programa, a árvore de decisão vira:", "opcoes": ["Repita dentro de repita", "Uma lista de frutas", "Se dentro de se"], "certo": 2}],
      explicacao: "Vizinhos do Pátio: Portão, Cantina, Informática, Biblioteca. O grau do Pátio é: → <strong>4</strong> · Guardar, para cada vértice, os vértices ligados a ele é a: → <strong>Lista de vizinhos</strong> · No programa, a árvore de decisão vira: → <strong>Se dentro de se</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Autômatos", perguntas: [{"p": "A catraca começa travada. Entradas: empurrar → cartão. Como ela fica?", "opcoes": ["Liberada", "Travada", "Quebrada"], "certo": 0}, {"p": "Qual tabela diz o próximo estado para cada estado e entrada?", "opcoes": ["Lista de vizinhos", "Tabela de transição", "Tabela do campeonato"], "certo": 1}, {"p": "Em que estado a catraca começa (estado inicial)?", "opcoes": ["Liberada", "Girando", "Travada"], "certo": 2}],
      explicacao: "A catraca começa travada. Entradas: empurrar → cartão. Como ela fica? → <strong>Liberada</strong> · Qual tabela diz o próximo estado para cada estado e entrada? → <strong>Tabela de transição</strong> · Em que estado a catraca começa (estado inicial)? → <strong>Travada</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Programação por eventos", perguntas: [{"p": "O conjunto de blocos que roda quando o evento acontece é o:", "opcoes": ["Tratador", "Sensor", "Estado"], "certo": 0}, {"p": "O botão foi apertado 3 vezes. O tratador “alterar cliques por 1; mostrar cliques” mostra:", "opcoes": ["3", "1, 2, 3", "1, 1, 1"], "certo": 1}, {"p": "Chegar uma mensagem no celular é um:", "opcoes": ["Vértice", "Caso base", "Evento"], "certo": 2}],
      explicacao: "O conjunto de blocos que roda quando o evento acontece é o: → <strong>Tratador</strong> · O botão foi apertado 3 vezes. O tratador “alterar cliques por 1; mostrar cliques” mostra: → <strong>1, 2, 3</strong> · Chegar uma mensagem no celular é um: → <strong>Evento</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · O semáforo", perguntas: [{"p": "Está amarelo. Tique. Fica:", "opcoes": ["🔴 Vermelho", "🟢 Verde", "🟡 Amarelo"], "certo": 0}, {"p": "Está amarelo e o pedestre aperta o botão. Fica:", "opcoes": ["🟢 Verde", "🟡 Amarelo", "🔴 Vermelho"], "certo": 1}, {"p": "O que conta o tempo e avisa quando ele acaba?", "opcoes": ["O pedestre", "A aresta", "O temporizador"], "certo": 2}],
      explicacao: "Está amarelo. Tique. Fica: → <strong>🔴 Vermelho</strong> · Está amarelo e o pedestre aperta o botão. Fica: → <strong>🟡 Amarelo</strong> · O que conta o tempo e avisa quando ele acaba? → <strong>O temporizador</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · O mapa da escola", perguntas: [{"p": "O corredor Pátio–Informática está em reforma. O caminho mais curto do Portão à Informática leva:", "opcoes": ["4 minutos", "3 minutos", "2 minutos"], "certo": 0}, {"p": "Onde colocar o bebedouro, para mais gente passar?", "opcoes": ["No Portão", "No vértice de maior grau (Pátio)", "Na Cantina"], "certo": 1}, {"p": "Quando uma aresta some, o caminho mais curto:", "opcoes": ["Nunca muda", "Some também", "Pode mudar"], "certo": 2}],
      explicacao: "O corredor Pátio–Informática está em reforma. O caminho mais curto do Portão à Informática leva: → <strong>4 minutos</strong> · Onde colocar o bebedouro, para mais gente passar? → <strong>No vértice de maior grau (Pátio)</strong> · Quando uma aresta some, o caminho mais curto: → <strong>Pode mudar</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();
