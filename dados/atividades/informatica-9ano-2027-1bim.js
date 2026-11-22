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
      { tipo: "tabela", titulo: "Os caminhos da Casa até a Escola", robo: {"paineis": ["🗺️ Outro grafo: A —1— B —2— C e A —4— C"], "passos": [{"fala": "Olha como eu analiso um grafo <b>diferente</b>. Vértices são os lugares; arestas, as ligações:", "painel": 0, "linha": "3 vértices (A, B, C) · 3 arestas"}, {"fala": "O <b>grau</b> é quantas arestas saem de um vértice:", "painel": 0, "linha": "Grau de A = 2 (A–B e A–C)", "marca": true}, {"fala": "Para o <b>caminho mais curto</b>, eu somo os pesos de cada caminho e fico com o menor:", "painel": 0, "linha": "A → B → C = 1 + 2 = 3 · A → C direto = 4", "marca": true, "espera": 2800}], "fim": "Agora é a sua vez: faça o mesmo com o grafo da tarefa! 💪"},
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
      { tipo: "tabela", titulo: "A rua fechada", robo: {"paineis": ["🚧 No grafo A —1— B —2— C e A —4— C, a rua B–C fechou"], "passos": [{"fala": "Quando uma aresta <b>some</b>, os caminhos que passavam por ela não valem mais:", "painel": 0, "linha": "A → B → C: não dá mais (B–C fechou)"}, {"fala": "Sobra o outro caminho:", "painel": 0, "linha": "A → C direto = 4 min", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ache o caminho que sobrou no bairro da tarefa! 💪"},
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
          { p: "Um grafo em que dá para sair de A, passar por B e C e voltar a A:", opcoes: ["Não é árvore: tem ciclo", "É árvore", "É uma folha"], certo: 0, why: "Árvores não têm voltas." },
          { p: "Numa árvore, entre dois vértices existe:", opcoes: ["Um único caminho", "Vários caminhos", "Nenhum caminho"], certo: 0 },
          { p: "Por que as pastas do computador são uma árvore?", opcoes: ["Cada pasta tem uma só pasta-mãe e não há voltas", "Porque são verdes", "Porque têm ciclos"], certo: 0 },
          { p: "O mata-mata da Copa é uma árvore em que o campeão fica:", opcoes: ["Na raiz", "Nas folhas", "Fora da árvore"], certo: 0, why: "As folhas são os times do começo." }],
        explicacao: "Árvore: sem ciclos, um único caminho entre dois vértices, cada vértice com um só pai." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "O mata-mata como árvore", robo: {"paineis": ["🏆 Outro torneio: 4 times"], "passos": [{"fala": "As <b>folhas</b> são os times do começo:", "painel": 0, "linha": "Folhas: 4 times"}, {"fala": "Cada jogo junta 2 times, e o vencedor sobe um nível:", "painel": 0, "linha": "Semifinal: 2 jogos"}, {"fala": "", "painel": 0, "linha": "Final: 1 jogo", "espera": 900}, {"fala": "Somo todos os jogos:", "painel": 0, "linha": "Total: 2 + 1 = 3 jogos", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça com os 8 times das quartas de final! 💪"},
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
      { tipo: "tabela", titulo: "Quantas opções cabem?", enunciado: "<p>Numa árvore de decisão, cada pergunta de <strong>sim ou não</strong> divide as opções em <strong>2 grupos</strong>. Com 1 pergunta, dá para separar 2 opções. Cada pergunta a mais <strong>dobra</strong> o número de opções. Complete a tabela.</p>", robo: {"paineis": ["❓ O jeito de pensar"], "passos": [{"fala": "Cada pergunta de sim ou não <b>divide</b> as opções em 2 grupos. Então cada pergunta a mais <b>dobra</b> o que dá para separar.", "painel": 0, "linha": "Cada pergunta: × 2"}, {"fala": "Exemplo com 5 perguntas:", "painel": 0, "linha": "2 × 2 × 2 × 2 × 2 = 32 opções", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: dobre para 1, 2, 3 e 4 perguntas! 💪"},
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
      { tipo: "tabela", titulo: "Quantas perguntas?", enunciado: "<p>Agora é o contrário: quantas perguntas de sim ou não, <strong>no mínimo</strong>, para achar 1 opção entre todas? Lembre: cada pergunta dobra (2, 4, 8, 16, 32…). Procure o primeiro número da sequência que chega ao total de opções.</p>", robo: {"paineis": ["❓ Outro exemplo: 8 opções"], "passos": [{"fala": "A cada pergunta, as opções caem pela <b>metade</b>. Escrevo até sobrar 1:", "painel": 0, "linha": "8 → 4 → 2 → 1"}, {"fala": "Conto as setas: são as perguntas.", "painel": 0, "linha": "8 opções → 3 perguntas", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça com 16, 32 e 1.000! 💪"},
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
      { tipo: "tabela", titulo: "Mão na massa: lista de vizinhos", robo: {"paineis": ["🕸️ Outras arestas: Casa–Rua · Rua–Praça · Rua–Loja"], "passos": [{"fala": "Os <b>vizinhos</b> de um vértice são os que estão ligados a ele por uma aresta. Procuro o nome em todas as arestas:", "painel": 0, "linha": "Vizinhos da Rua: Casa, Praça, Loja", "marca": true}, {"fala": "", "painel": 0, "linha": "Vizinhos da Casa: Rua", "espera": 2400}], "fim": "Agora é a sua vez: ache os vizinhos de cada lugar da escola! 💪"},
        enunciado: "<p>Arestas da escola: Portão–Pátio · Pátio–Cantina · Pátio–Informática · Pátio–Biblioteca · Informática–Biblioteca</p>",
        colunas: ["Vértice", "Vizinhos (separe com vírgula)"],
        linhas: [
          ["Portão", { r: "Pátio", tipo: "letras" }],
          ["Cantina", { r: "Pátio", tipo: "letras" }],
          ["Biblioteca", { r: ["Pátio, Informática", "Informática, Pátio"], tipo: "letras" }]],
        explicacao: "Os vizinhos de um vértice são os ligados diretamente a ele: Portão → Pátio; Cantina → Pátio; Biblioteca → Pátio e Informática." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Grau = tamanho da lista de vizinhos", robo: {"paineis": ["🔢 Usando a lista de vizinhos"], "passos": [{"fala": "O grau é só <b>contar</b> quantos vizinhos tem na lista:", "painel": 0, "linha": "Rua: Casa, Praça, Loja → grau 3", "marca": true}, {"fala": "", "painel": 0, "linha": "Casa: Rua → grau 1", "espera": 2400}], "fim": "Agora é a sua vez: conte os vizinhos de cada lugar da tarefa! 💪"},
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
          { p: "Uma árvore de decisão vira, no programa:", opcoes: ["Se dentro de se (se aninhado)", "Um grafo com pesos", "Uma pasta de arquivos"], certo: 0 },
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
      { tipo: "tabela", titulo: "Complete a tabela de transição da catraca", robo: {"paineis": ["💡 Outro autômato: a lâmpada com interruptor"], "passos": [{"fala": "Um autômato tem <b>estados</b> e <b>entradas</b>. A lâmpada tem 2 estados: Apagada e Acesa. A entrada é “apertar”.", "painel": 0, "linha": "Apagada + apertar → Acesa", "marca": true}, {"fala": "", "painel": 0, "linha": "Acesa + apertar → Apagada", "marca": true, "espera": 1200}, {"fala": "Para seguir várias entradas, eu vou <b>uma de cada vez</b>, sempre a partir do estado de agora. Começando apagada:", "painel": 0, "linha": "apertar → Acesa · apertar → Apagada · apertar → Acesa", "espera": 2800}], "fim": "Agora é a sua vez: siga as regras do autômato da tarefa, uma entrada de cada vez! 💪"},
        colunas: ["Estado atual", "Entrada", "Próximo estado"],
        linhas: [
          ["🔒 Travada", "💳 cartão", { op: ["Travada", "Liberada"], r: "Liberada" }],
          ["🔒 Travada", "🚶 empurrar", { op: ["Travada", "Liberada"], r: "Travada" }],
          ["🔓 Liberada", "🚶 empurrar", { op: ["Travada", "Liberada"], r: "Travada" }],
          ["🔓 Liberada", "💳 cartão", { op: ["Travada", "Liberada"], r: "Liberada" }]],
        explicacao: "Cartão libera; empurrar travada não gira; empurrar liberada gira e trava de novo; cartão em liberada continua liberada." },
      { tipo: "tabela", titulo: "Siga as entradas", robo: {"paineis": ["💡 Outro autômato: a lâmpada com interruptor"], "passos": [{"fala": "Um autômato tem <b>estados</b> e <b>entradas</b>. A lâmpada tem 2 estados: Apagada e Acesa. A entrada é “apertar”.", "painel": 0, "linha": "Apagada + apertar → Acesa", "marca": true}, {"fala": "", "painel": 0, "linha": "Acesa + apertar → Apagada", "marca": true, "espera": 1200}, {"fala": "Para seguir várias entradas, eu vou <b>uma de cada vez</b>, sempre a partir do estado de agora. Começando apagada:", "painel": 0, "linha": "apertar → Acesa · apertar → Apagada · apertar → Acesa", "espera": 2800}], "fim": "Agora é a sua vez: siga as regras do autômato da tarefa, uma entrada de cada vez! 💪"},
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
      { tipo: "tabela", titulo: "O autômato da porta automática", robo: {"paineis": ["🚰 Outro autômato: a torneira automática"], "passos": [{"fala": "Estados: <b>fechada</b> e <b>aberta</b>. Entradas: “mão chega” e “mão sai”.", "painel": 0, "linha": "Fechada + mão chega → Aberta", "marca": true}, {"fala": "", "painel": 0, "linha": "Aberta + mão chega → continua Aberta", "espera": 1000}, {"fala": "", "painel": 0, "linha": "Aberta + mão sai → Fechada", "marca": true, "espera": 1000}, {"fala": "", "painel": 0, "linha": "Fechada + mão sai → continua Fechada", "espera": 2400}], "fim": "Agora é a sua vez: complete a tabela da porta automática! 💪"},
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
      { tipo: "tabela", titulo: "O personagem do jogo", robo: {"paineis": ["🐶 Outro personagem: o cachorro do jogo"], "passos": [{"fala": "Estados: <b>em pé</b>, <b>sentado</b> e <b>deitado</b>. Para cada comando, eu olho a regra e mudo o estado:", "painel": 0, "linha": "Começa em pé"}, {"fala": "", "painel": 0, "linha": "“senta” → sentado", "espera": 900}, {"fala": "", "painel": 0, "linha": "“deita” → deitado", "espera": 900}, {"fala": "", "painel": 0, "linha": "“levanta” → em pé", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: siga as entradas do personagem da tarefa, uma por vez! 💪"},
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
      { tipo: "tabela", titulo: "Siga os tiques", robo: {"paineis": ["🔁 Outro ciclo: manhã → tarde → noite"], "passos": [{"fala": "Um ciclo de <b>3 estados</b> volta ao começo a cada 3 tiques. Começa de manhã:", "painel": 0, "linha": "1 tique: tarde"}, {"fala": "", "painel": 0, "linha": "2 tiques: noite", "espera": 800}, {"fala": "", "painel": 0, "linha": "3 tiques: manhã de novo", "marca": true}, {"fala": "Para muitos tiques, eu tiro os grupos de 3: 5 tiques = 3 + 2 → igual a 2 tiques:", "painel": 0, "linha": "5 tiques: noite", "marca": true, "espera": 2800}], "fim": "Agora é a sua vez: siga os tiques do semáforo! 💪"},
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
      { tipo: "tabela", titulo: "O semáforo de 4 estados", robo: {"paineis": ["🔁 Ciclo de 3 estados: manhã → tarde → noite"], "passos": [{"fala": "Com 3 estados, o ciclo se repete a cada 3 tiques. Para 4 tiques, tiro um ciclo inteiro (3) e sobra 1:", "painel": 0, "linha": "4 tiques = 3 + 1 → tarde", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: no semáforo de 4 estados, o ciclo se repete a cada 4! 💪"},
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
      { tipo: "tabela", titulo: "Perguntas sobre o grafo da escola", robo: {"paineis": ["🏫 Outro grafo: Entrada —1— Quadra —2— Sala · Quadra —2— Refeitório —1— Sala"], "passos": [{"fala": "<b>Maior grau</b>: quem tem mais ligações?", "painel": 0, "linha": "Quadra: 3 ligações", "marca": true}, {"fala": "<b>Mais curto</b> da Entrada até a Sala: somo os pesos.", "painel": 0, "linha": "Entrada → Quadra → Sala = 1 + 2 = 3 min"}, {"fala": "Se um corredor <b>fecha</b> (Quadra–Sala), procuro outro caminho e somo de novo:", "painel": 0, "linha": "Entrada → Quadra → Refeitório → Sala = 1 + 2 + 1 = 4 min", "marca": true, "espera": 2800}], "fim": "Agora é a sua vez: faça o mesmo com o grafo da escola da tarefa! 💪"},
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Lugar mais conectado (maior grau)", { op: ["Portão", "Pátio", "Cantina", "Biblioteca"], r: "Pátio" }], ["Grau do Pátio", { r: "4", tipo: "num" }], ["Minutos do Portão até a Biblioteca (mais curto)", { r: "3", tipo: "num", dica: "Portão → Pátio → Biblioteca." }], ["Minutos da Cantina até a Informática (mais curto)", { r: "3", tipo: "num", dica: "Cantina → Pátio → Informática." }]],
        explicacao: "Pátio, grau 4. Portão → Pátio → Biblioteca = 1 + 2 = 3. Cantina → Pátio → Informática = 1 + 2 = 3." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "O corredor em reforma", robo: {"paineis": ["🏫 Outro grafo: Entrada —1— Quadra —2— Sala · Quadra —2— Refeitório —1— Sala"], "passos": [{"fala": "<b>Maior grau</b>: quem tem mais ligações?", "painel": 0, "linha": "Quadra: 3 ligações", "marca": true}, {"fala": "<b>Mais curto</b> da Entrada até a Sala: somo os pesos.", "painel": 0, "linha": "Entrada → Quadra → Sala = 1 + 2 = 3 min"}, {"fala": "Se um corredor <b>fecha</b> (Quadra–Sala), procuro outro caminho e somo de novo:", "painel": 0, "linha": "Entrada → Quadra → Refeitório → Sala = 1 + 2 + 1 = 4 min", "marca": true, "espera": 2800}], "fim": "Agora é a sua vez: faça o mesmo com o grafo da escola da tarefa! 💪"},
        enunciado: "<p>O corredor <strong>Pátio — Informática</strong> está em reforma (a aresta sumiu).</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Minutos do Portão até a Informática agora", { r: "4", tipo: "num", dica: "Portão → Pátio → Biblioteca → Informática." }], ["Novo grau do Pátio", { r: "3", tipo: "num" }]],
        explicacao: "Sem a aresta Pátio–Informática: Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = 4. O Pátio perde uma aresta: grau 3." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "A rota de fuga", robo: {"paineis": ["🚪 Outro grafo: todos saem pela Entrada"], "passos": [{"fala": "Para cada lugar, eu acho o caminho <b>mais curto até a Entrada</b> e somo os pesos:", "painel": 0, "linha": "Quadra → Entrada = 1 min"}, {"fala": "", "painel": 0, "linha": "Sala → Quadra → Entrada = 2 + 1 = 3 min", "marca": true, "espera": 1200}, {"fala": "", "painel": 0, "linha": "Refeitório → Quadra → Entrada = 2 + 1 = 3 min", "espera": 2600}], "fim": "Agora é a sua vez: ache o tempo de cada lugar até o Portão! 💪"},
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
      { tipo: "tabela", de: "m1", titulo: "M1 · Caminho mais curto", robo: {"paineis": ["🗺️ Outro grafo: A —1— B —2— C e A —4— C"], "passos": [{"fala": "Olha como eu analiso um grafo <b>diferente</b>. Vértices são os lugares; arestas, as ligações:", "painel": 0, "linha": "3 vértices (A, B, C) · 3 arestas"}, {"fala": "O <b>grau</b> é quantas arestas saem de um vértice:", "painel": 0, "linha": "Grau de A = 2 (A–B e A–C)", "marca": true}, {"fala": "Para o <b>caminho mais curto</b>, eu somo os pesos de cada caminho e fico com o menor:", "painel": 0, "linha": "A → B → C = 1 + 2 = 3 · A → C direto = 4", "marca": true, "espera": 2800}], "fim": "Agora é a sua vez: faça o mesmo com o grafo da tarefa! 💪"}, enunciado: "<p>Arestas: A–B (2) · B–D (2) · A–C (1) · C–D (5) · A–D (6)</p>", colunas: ["Pergunta", "Resposta"],
        linhas: [["Caminho mais curto de A até D (soma)", { r: "4", tipo: "num", dica: "A → B → D = 2 + 2." }], ["Grau de A", { r: "3", tipo: "num" }]],
        explicacao: "A → B → D = 4; A → C → D = 6; A → D direto = 6. O mais curto soma 4. A tem 3 arestas: grau 3." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Árvores", perguntas: [{ p: "O vértice sem filhos é a:", opcoes: ["Folha", "Raiz", "Aresta"], certo: 0 }, { p: "Árvores têm ciclos?", opcoes: ["Não", "Sim", "Às vezes"], certo: 0 }], explicacao: "Folha = sem filhos; árvore não tem ciclos." },
      { tipo: "relembre", de: "m3" },
      { tipo: "arvore", de: "m3", titulo: "M3 · Árvore de decisão", modo: "decisao", raiz: objetos, perguntas: [{ p: "Eletrônico sim, tela sim: qual objeto?", r: ["Monitor"], tipo: "letras" }], explicacao: "Sim → tem tela? sim → Monitor." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Programar estruturas", perguntas: [{ p: "O grau de um vértice é o tamanho da:", opcoes: ["Lista de vizinhos", "Árvore inteira", "Tabela de transição"], certo: 0 }, { p: "Árvore de decisão no programa vira:", opcoes: ["Se aninhado", "Repita", "Contador"], certo: 0 }], explicacao: "Grau = tamanho da lista de vizinhos; árvore de decisão = se aninhado." },
      { tipo: "relembre", de: "m5" },
      { tipo: "tabela", de: "m5", titulo: "M5 · Catraca", robo: {"paineis": ["💡 Outro autômato: a lâmpada com interruptor"], "passos": [{"fala": "Um autômato tem <b>estados</b> e <b>entradas</b>. A lâmpada tem 2 estados: Apagada e Acesa. A entrada é “apertar”.", "painel": 0, "linha": "Apagada + apertar → Acesa", "marca": true}, {"fala": "", "painel": 0, "linha": "Acesa + apertar → Apagada", "marca": true, "espera": 1200}, {"fala": "Para seguir várias entradas, eu vou <b>uma de cada vez</b>, sempre a partir do estado de agora. Começando apagada:", "painel": 0, "linha": "apertar → Acesa · apertar → Apagada · apertar → Acesa", "espera": 2800}], "fim": "Agora é a sua vez: siga as regras do autômato da tarefa, uma entrada de cada vez! 💪"}, colunas: ["Estado + entrada", "Próximo estado"], linhas: [["Travada + cartão", { op: ["Travada", "Liberada"], r: "Liberada" }], ["Liberada + empurrar", { op: ["Travada", "Liberada"], r: "Travada" }]], explicacao: "Cartão libera; empurrar com liberada gira e trava." },
      { tipo: "relembre", de: "m6" },
      { tipo: "blocos", de: "m6", titulo: "M6 · Eventos", enunciado: "<p>Quando o <strong>🔔 sino</strong> tocar, mostrar <strong>Recreio!</strong>. O portal toca o sino 2 vezes.</p>",
        caixa: ["mostrar", "texto", "evento"], eventos: [["🔔 sino", "sino"]], disparos: ["sino", "sino"],
        esperado: ["Recreio!", "Recreio!"], exige: ["evento"], solucao: [["quando", "sino", [["mostrar", "Recreio!"]]]],
        explicacao: "Um tratador para o evento sino, que roda a cada toque." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Semáforo", perguntas: [{ p: "Começando no verde, depois de 2 tiques:", opcoes: ["Vermelho", "Amarelo", "Verde"], certo: 0 }], explicacao: "Verde → amarelo → vermelho." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Grafo da escola", perguntas: [{ p: "Corredor em reforma (interditar) no grafo é:", opcoes: ["Tirar a aresta", "Tirar todos os vértices", "Somar 1 no peso"], certo: 0 }], explicacao: "Interditar = tirar a aresta; o caminho mais curto pode mudar." }
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
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6", perguntas: [{ p: "O que roda quando o evento acontece:", opcoes: ["Tratador de evento", "Sensor", "Notificação"], certo: 0 }], explicacao: "Tratador." },
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

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, piloto aprovado pelo professor e levado ao ano todo)
   Por missão: ❓ gancho do Para começar, 🛠️ "Onde eu uso isso?" prático (aplicar = simulador ou jogo
   de uma situação real + 3 perguntas), "O que você já sabe?" na M1 e ⏱️ +25% de tempo de aula com
   jogos e simuladores no 🟡 Desafio e no 🔴 Turbo. Tudo cobra só o que o Para começar explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-1bim"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const TAG = "⏱️ +25%";
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: TAG }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const escola = {
    vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
      { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]
  };

  /* ---------- M1 · grafos e o melhor caminho ---------- */
  A.m1.gancho = { html: "<p>🛵 O entregador de lanche pode chegar à sua casa por <b>três caminhos</b>. O aplicativo avisa: “vá pela padaria: <b>5 minutos</b>”.</p><p>🤔 Como o aplicativo escolheu? Ele conhece cada rua? E por que o caminho com <b>mais paradas</b> pode ser o mais rápido?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Primeiro dia de Informática do 9º ano! Responda pelo que você já sabe do dia a dia. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Para achar o caminho mais rápido, o aplicativo de mapa enxerga a cidade como…", ["Pontos ligados por linhas", "Uma lista de fotos", "Uma tabela de preços"], "O aplicativo vê a cidade como um <b>grafo</b>: pontos (esquinas, casas) ligados por linhas (ruas)."],
    ["Casa → Padaria leva 3 minutos e Padaria → Escola leva 2. Quanto tempo leva Casa → Padaria → Escola?", ["5 minutos", "3 minutos", "6 minutos"], "O tamanho do caminho é a <b>soma</b> dos tempos: 3 + 2 = 5."],
    ["Para ir de casa à escola: a rua direta leva <b>9 minutos</b> e o caminho pela padaria leva <b>5</b>. Qual é o mais curto?", ["Pela padaria (5)", "A rua direta (9)", "Os dois são iguais"], "O mais curto é o de <b>menor soma</b>, mesmo tendo mais paradas."])];
  A.m1.aplicar = [
    { tipo: "sim_grafo", titulo: "🛠️ Na vida real: o entregador de lanche",
      enunciado: "<p>Você é o aplicativo de entrega! Cada número é o tempo em <b>minutos de moto</b> (o peso). Saindo da <b>Lanchonete</b>, clique nos lugares, um vizinho por vez, até a <b>Casa</b> do cliente, pela <b>menor soma</b>.</p>",
      vertices: { lanche: { nome: "Lanchonete", ic: "🍔", x: 45, y: 120 }, farmacia: { nome: "Farmácia", ic: "💊", x: 160, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 160, y: 195 },
        banco: { nome: "Banco", ic: "🏦", x: 270, y: 45 }, igreja: { nome: "Igreja", ic: "⛪", x: 270, y: 195 }, casa: { nome: "Casa", ic: "🏠", x: 360, y: 120 } },
      arestas: [["lanche", "farmacia", 4], ["lanche", "praca", 2], ["praca", "farmacia", 1], ["farmacia", "banco", 3], ["praca", "igreja", 6], ["banco", "casa", 2], ["igreja", "casa", 1]],
      inicio: "lanche", fim: "casa", menor: 8, solucao: ["lanche", "praca", "farmacia", "banco", "casa"], unidade: "min",
      dicas: ["Some os pesos de cada caminho antes de escolher.", "Ir para a Praça e depois para a Farmácia é mais rápido do que ir direto para a Farmácia."],
      explicacao: "Lanchonete → Praça → Farmácia → Banco → Casa = 2 + 1 + 3 + 2 = 8 min. Pela Farmácia direto seriam 9; pela Igreja, 9. Mais paradas, menor soma." },
    VIDA(
      ["No aplicativo de entrega, o tempo de cada rua, no grafo, é o…", ["Peso da aresta", "Grau do vértice", "Nome do vértice"], "O número escrito na aresta (minutos ou metros) é o <b>peso</b>."],
      ["Numa rede social, cada <b>pessoa</b> é um…", ["Vértice", "Peso", "Caminho"], "Cada pessoa é um <b>vértice</b>, e cada amizade é uma <b>aresta</b>."],
      ["Quantas ruas chegam numa esquina: no grafo, isso é o…", ["Grau do vértice", "Peso da aresta", "Caminho mais curto"], "O <b>grau</b> é quantas arestas saem de um vértice."])
  ];
  mais("m1", "desafio",
    { tipo: "sim_grafo", titulo: "🚲 O passeio de bicicleta até a cachoeira",
      enunciado: "<p>Cada número é o tempo em <b>minutos de bicicleta</b>. Saindo da <b>Escola</b>, chegue à <b>Cachoeira</b> pela <b>menor soma</b>.</p>",
      vertices: { escola: { nome: "Escola", ic: "🏫", x: 45, y: 120 }, posto: { nome: "Posto", ic: "⛽", x: 150, y: 45 }, ponte: { nome: "Ponte", ic: "🌉", x: 150, y: 195 },
        sitio: { nome: "Sítio", ic: "🐄", x: 260, y: 45 }, trilha: { nome: "Trilha", ic: "🥾", x: 260, y: 195 }, cachoeira: { nome: "Cachoeira", ic: "💦", x: 360, y: 120 } },
      arestas: [["escola", "posto", 3], ["escola", "ponte", 6], ["posto", "ponte", 2], ["posto", "sitio", 7], ["ponte", "trilha", 2], ["sitio", "cachoeira", 2], ["trilha", "cachoeira", 4], ["sitio", "trilha", 4]],
      inicio: "escola", fim: "cachoeira", menor: 11, solucao: ["escola", "posto", "ponte", "trilha", "cachoeira"], unidade: "min",
      dicas: ["Compare: Escola → Ponte direto (6) ou Escola → Posto → Ponte (3 + 2)?", "Some todos os caminhos até a Cachoeira antes de escolher."],
      explicacao: "Escola → Posto → Ponte → Trilha → Cachoeira = 3 + 2 + 2 + 4 = 11 min. Pelo Sítio: 3 + 7 + 2 = 12." });
  mais("m1", "turbo",
    Object.assign({ tipo: "grafo", titulo: "🚑 A ambulância: da Cantina até a Biblioteca", de: "Ca", para: "Bi", unidade: "minutos", descricao: "Grafo da escola" }, escola,
      { enunciado: "<p>Um aluno passou mal na Biblioteca e a enfermeira está na Cantina. Clique nos vértices, um depois do outro, começando pela <b>Cantina</b>, pelo caminho mais curto.</p>", explicacao: "Cantina → Pátio → Biblioteca = 1 + 2 = 3 minutos. Pela Sala de Informática seriam 1 + 2 + 1 = 4." }));

  /* ---------- M2 · árvores ---------- */
  A.m2.gancho = { html: "<p>🏆 No mata-mata da Copa, muitos times começam e só <b>um</b> fica campeão. No celular, a pasta <b>Fotos</b> tem pastas dentro, que têm arquivos dentro.</p><p>🤔 O que o chaveamento da Copa e as pastas do celular têm em comum? Por que os dois são uma “árvore de cabeça para baixo”?</p>" };
  A.m2.aplicar = [
    { tipo: "arvore", titulo: "🛠️ Na vida real: as pastas do celular", modo: "pastas",
      raiz: { t: "📁 Arquivos", filhos: [{ t: "📁 Fotos", filhos: [{ t: "📄 festa.jpg" }, { t: "📄 gol.jpg" }] }, { t: "📁 Downloads", filhos: [{ t: "📄 boletim.pdf" }] }, { t: "📁 Músicas", filhos: [{ t: "📁 Forró", filhos: [{ t: "📄 xote.mp3" }] }] }] },
      enunciado: "<p>O celular da Mila está organizado em pastas. Olhe a árvore e responda.</p>",
      perguntas: [
        { p: "Qual pasta é a raiz da árvore?", r: ["Arquivos"], tipo: "letras" },
        { p: "Quantas folhas (arquivos) a árvore tem?", r: "4", num: true },
        { p: "Qual é o pai de xote.mp3?", r: ["Forró"], tipo: "letras" },
        { p: "Em que nível está xote.mp3? (a raiz é o nível 0)", r: "3", num: true }],
      dicas: ["A raiz é a de cima. As folhas são os arquivos, sem filhos.", "Arquivos (0) → Músicas (1) → Forró (2) → xote.mp3 (?)"],
      explicacao: "Raiz: Arquivos. Folhas: festa.jpg, gol.jpg, boletim.pdf e xote.mp3 (4). O pai de xote.mp3 é Forró, e ele está no nível 3." },
    VIDA(
      ["No mata-mata da Copa visto como árvore, a <b>raiz</b> é…", ["O campeão", "Os times da primeira fase", "O estádio"], "As folhas são os times e a <b>raiz</b> é o campeão."],
      ["Na árvore de pastas, um <b>arquivo</b> (que não tem nada dentro) é…", ["Uma folha", "A raiz", "Um ciclo"], "Vértice sem filhos, no fim de um galho, é uma <b>folha</b>."],
      ["Uma árvore pode ter <b>voltas</b> (ciclos)?", ["Não: de um vértice a outro existe um único caminho", "Sim, quantas quiser", "Só se for pequena"], "Árvore <b>não tem ciclos</b>: de um vértice a outro existe um único caminho."])
  ];
  mais("m2", "desafio",
    { tipo: "arvore", titulo: "👵 A árvore genealógica", modo: "pastas",
      raiz: { t: "👵 Vó Rosa", filhos: [{ t: "👩 Tia Lu", filhos: [{ t: "👧 Bia" }] }, { t: "👨 Pai Zé", filhos: [{ t: "🧒 Caio" }, { t: "👦 Davi" }] }] },
      enunciado: "<p>A família da Bia em árvore: a vó em cima, os filhos dela embaixo, e os netos no fim.</p>",
      perguntas: [
        { p: "Quem é a raiz?", r: ["Vó Rosa", "Rosa"], tipo: "letras" },
        { p: "Quem é o pai do Caio na árvore?", r: ["Pai Zé", "Zé"], tipo: "letras" },
        { p: "Quantas folhas a árvore tem?", r: "3", num: true },
        { p: "Em que nível estão os netos?", r: "2", num: true }],
      explicacao: "Raiz: Vó Rosa (nível 0). Tia Lu e Pai Zé (nível 1). Bia, Caio e Davi são as folhas (nível 2)." });
  mais("m2", "turbo",
    { tipo: "arvore", titulo: "🗂️ O caminho até o arquivo", modo: "pastas",
      raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📁 9º ano", filhos: [{ t: "📁 Informática", filhos: [{ t: "📄 grafo.png" }] }, { t: "📄 redação.txt" }] }] }, { t: "📁 Jogos", filhos: [{ t: "📄 save.dat" }] }] },
      enunciado: "<p>Uma árvore mais funda. Responda com atenção aos níveis.</p>",
      perguntas: [
        { p: "Qual é o caminho da raiz até grafo.png?", r: ["Documentos > Escola > 9º ano > Informática > grafo.png", "Documentos Escola 9 ano Informatica grafo", "Documentos Escola 9º ano Informática grafo.png"], tipo: "letras" },
        { p: "Em que nível está grafo.png?", r: "4", num: true },
        { p: "Quantas folhas a árvore tem?", r: "3", num: true }],
      dicas: ["Conte os passos da raiz até o arquivo: cada pasta é um passo."],
      explicacao: "Documentos (0) → Escola (1) → 9º ano (2) → Informática (3) → grafo.png (4). Folhas: grafo.png, redação.txt e save.dat." });

  /* ---------- M3 · árvores de decisão ---------- */
  A.m3.gancho = { html: "<p>📞 Você liga para a operadora e ouve: “Digite <b>1</b> para segunda via, <b>2</b> para falar com um atendente…”. Depois, outra pergunta, e mais outra.</p><p>🤔 Como o atendimento sabe para onde mandar você? E como o jogo do gênio adivinha o personagem só com perguntas de <b>sim ou não</b>?</p>" };
  A.m3.aplicar = [
    { tipo: "arvore", titulo: "🛠️ Na vida real: em que lixeira vai?", modo: "decisao",
      raiz: { t: "❓ É de papel?", filhos: [
        { r: "Sim", t: "🔵 Lixeira azul" },
        { r: "Não", t: "❓ É de plástico?", filhos: [
          { r: "Sim", t: "🔴 Lixeira vermelha" },
          { r: "Não", t: "❓ É de vidro?", filhos: [{ r: "Sim", t: "🟢 Lixeira verde" }, { r: "Não", t: "🟡 Lixeira amarela (metal)" }] }] }] },
      enunciado: "<p>Na coleta seletiva da escola, cada material tem a sua lixeira. Siga a árvore de decisão, da raiz até a folha.</p>",
      perguntas: [
        { p: "Uma garrafa de <b>vidro</b> vai para qual lixeira?", r: ["verde", "Lixeira verde"], tipo: "letras" },
        { p: "Quantas decisões (folhas) a árvore tem?", r: "4", num: true },
        { p: "Quantas perguntas, no máximo, até decidir (profundidade)?", r: "3", num: true }],
      dicas: ["Vidro: é de papel? não → é de plástico? não → é de vidro? sim."],
      explicacao: "Vidro: não, não, sim → 🟢 verde. A árvore tem 4 folhas e, no pior caso, 3 perguntas até decidir." },
    VIDA(
      ["“Digite 1 para…, 2 para…” no atendimento automático é um exemplo de…", ["Árvore de decisão", "Um mapa de ruas", "Uma pasta vazia"], "Cada resposta leva a um galho até uma decisão final: é uma <b>árvore de decisão</b>."],
      ["Numa árvore de decisão, cada <b>folha</b> é…", ["Uma decisão final", "Uma pergunta", "Uma resposta sim ou não"], "As perguntas ficam nos vértices de dentro; a <b>folha</b> é a decisão final."],
      ["Com <b>3 perguntas</b> de sim ou não, quantas folhas cabem, no máximo?", ["8", "6", "3"], "Cada nível a mais dobra as folhas: 1 → 2, 2 → 4, <b>3 → 8</b>."])
  ];
  mais("m3", "desafio",
    { tipo: "arvore", titulo: "🎮 Qual jogo a turma vai jogar?", modo: "decisao",
      raiz: { t: "❓ Está chovendo?", filhos: [
        { r: "Sim", t: "❓ Tem computador livre?", filhos: [{ r: "Sim", t: "💻 Jogo no computador" }, { r: "Não", t: "♟️ Xadrez" }] },
        { r: "Não", t: "❓ A quadra está livre?", filhos: [{ r: "Sim", t: "⚽ Futebol" }, { r: "Não", t: "🪢 Pular corda no pátio" }] }] },
      enunciado: "<p>A turma decide o jogo do recreio com esta árvore. Siga as respostas.</p>",
      perguntas: [
        { p: "Não está chovendo e a quadra está ocupada. Qual é o jogo?", r: ["Pular corda", "pular corda no patio"], tipo: "letras" },
        { p: "Está chovendo e não tem computador livre. Qual é o jogo?", r: ["Xadrez"], tipo: "letras" },
        { p: "Quantas folhas a árvore tem?", r: "4", num: true }],
      explicacao: "Raiz: está chovendo? Cada resposta leva a outra pergunta e depois a uma folha (o jogo). 2 perguntas de sim ou não → 4 folhas." });
  mais("m3", "turbo",
    { tipo: "arvore", titulo: "🧞 O gênio adivinha o animal", modo: "decisao",
      raiz: { t: "❓ Voa?", filhos: [
        { r: "Sim", t: "❓ Tem penas?", filhos: [{ r: "Sim", t: "🦜 Papagaio" }, { r: "Não", t: "🦇 Morcego" }] },
        { r: "Não", t: "❓ Vive na água?", filhos: [
          { r: "Sim", t: "❓ Respira fora da água?", filhos: [{ r: "Sim", t: "🐬 Boto" }, { r: "Não", t: "🐟 Tucunaré" }] },
          { r: "Não", t: "🐆 Onça" }] }] },
      enunciado: "<p>O gênio do jogo usa esta árvore. Responda.</p>",
      perguntas: [
        { p: "Não voa, vive na água e respira fora da água. Qual é o animal?", r: ["Boto"], tipo: "letras" },
        { p: "Quantas folhas (animais) a árvore tem?", r: "5", num: true },
        { p: "Qual é a profundidade (o máximo de perguntas até decidir)?", r: "3", num: true },
        { p: "Para adivinhar a onça, quantas perguntas o gênio faz?", r: "2", num: true }],
      explicacao: "5 folhas. O boto e o tucunaré precisam de 3 perguntas (a profundidade); a onça, de 2. A árvore não precisa ser igual dos dois lados." });

  /* ---------- M4 · programar com grafos e árvores ---------- */
  A.m4.gancho = { html: "<p>👥 A rede social mostra: “Você tem <b>4 amigos</b>” e, quando você toca num amigo, aparece a lista dos amigos dele.</p><p>🤔 Como o programa <b>guarda</b> quem é amigo de quem? E como ele <b>conta</b> os seus amigos tão rápido?</p>" };
  A.m4.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: os amigos da rede social",
      enunciado: "<p>A ficha <b>rede</b> guarda a lista de vizinhos (amigos) de cada pessoa. O campo <b>Você</b> já tem a sua lista. Mostre os amigos, um por linha, com o <b>para cada</b>, e no fim o total com o <b>tamanho de</b>:</p><p><b>Ana</b><br><b>Bia</b><br><b>Caio</b><br><b>Duda</b><br><b>Amigos: 4</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada", "ficha"],
      inicio: [["definir", "rede", ["ficha"]], ["ficha_por", "rede", "Você", L("Ana", "Bia", "Caio", "Duda")], ["ficha_por", "rede", "Ana", L("Você", "Bia")]],
      esperado: ["Ana", "Bia", "Caio", "Duda", "Amigos: 4"], exige: ["paracada", "ficha"],
      solucao: [["definir", "rede", ["ficha"]], ["ficha_por", "rede", "Você", L("Ana", "Bia", "Caio", "Duda")], ["ficha_por", "rede", "Ana", L("Você", "Bia")],
        ["paracada", "x", ["campo", v("rede"), "Você"], [["mostrar", v("x")]]], ["mostrar", ["juntar", "Amigos: ", ["tamanho", ["campo", v("rede"), "Você"]]]]],
      dicas: ["No para cada, a lista é o “campo Você da ficha rede”.", "Escreva o nome do campo igualzinho: Você, com acento.", "O total é o “tamanho de” do mesmo campo, dentro de um “criar texto com”."],
      explicacao: "Os amigos são a <b>lista de vizinhos</b> do vértice Você, e o número de amigos é o <b>grau</b>: o tamanho dessa lista." },
    VIDA(
      ["A rede social guarda, para cada pessoa, a lista dos amigos dela. Isso é…", ["Uma lista de vizinhos (lista de adjacência)", "Uma árvore de decisão", "Um grafo sem vértices"], "Para cada vértice, a lista dos ligados a ele: é a <b>lista de vizinhos</b>."],
      ["O <b>grau</b> de um vértice é igual ao…", ["Tamanho da lista de vizinhos dele", "Primeiro vizinho da lista", "Número de vértices do grafo"], "Grau = quantas arestas saem do vértice = <b>tamanho da lista de vizinhos</b>."],
      ["O atendimento automático “digite 1…, digite 2…” vira, no programa…", ["Se … senão dentro de se … senão", "Uma lista de vizinhos", "Um para cada"], "A árvore de decisão vira <b>se aninhado</b>: um se dentro do outro."])
  ];
  mais("m4", "desafio",
    { tipo: "blocos", titulo: "♻️ A lixeira certa com se aninhado",
      enunciado: "<p>Transforme a árvore da coleta seletiva em blocos. A variável <b>material</b> já vale <b>vidro</b>. Monte: <b>se</b> material = papel → mostrar <b>Lixeira azul</b>; <b>senão</b>, <b>se</b> material = plástico → <b>Lixeira vermelha</b>; senão, <b>se</b> material = vidro → <b>Lixeira verde</b>; senão → <b>Lixeira amarela</b>. A tela deve mostrar:</p><p><b>Lixeira verde</b></p>",
      caixa: ["mostrar", "texto", "variavel", "se", "comparar"],
      inicio: [["definir", "material", "vidro"]],
      esperado: ["Lixeira verde"], exige: ["se"],
      solucao: [["definir", "material", "vidro"], ["se", ["=", v("material"), "papel"], [["mostrar", "Lixeira azul"]], [["se", ["=", v("material"), "plástico"], [["mostrar", "Lixeira vermelha"]], [["se", ["=", v("material"), "vidro"], [["mostrar", "Lixeira verde"]], [["mostrar", "Lixeira amarela"]]]]]]]],
      dicas: ["Cada pergunta da árvore é um “se … senão”. O próximo se vai dentro do senão do anterior.", "Teste depois trocando o material para papel: deve aparecer Lixeira azul."],
      explicacao: "A raiz da árvore é o primeiro se; cada galho “não” tem outro se dentro; as folhas são os mostrar. Árvore de decisão = se aninhado." });
  mais("m4", "turbo",
    { tipo: "blocos", titulo: "🗝️ O mapa do jogo de aventura",
      enunciado: "<p>No jogo, o mapa das salas é um grafo guardado como lista de vizinhos na ficha <b>mapa</b>. Mostre as saídas do <b>Corredor</b>, uma por linha, e depois quantas são:</p><p><b>Entrada</b><br><b>Sala do tesouro</b><br><b>Porão</b><br><b>Saídas: 3</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada", "ficha"],
      inicio: [["definir", "mapa", ["ficha"]], ["ficha_por", "mapa", "Entrada", L("Corredor")], ["ficha_por", "mapa", "Corredor", L("Entrada", "Sala do tesouro", "Porão")], ["ficha_por", "mapa", "Porão", L("Corredor")]],
      esperado: ["Entrada", "Sala do tesouro", "Porão", "Saídas: 3"], exige: ["paracada", "ficha"],
      solucao: [["definir", "mapa", ["ficha"]], ["ficha_por", "mapa", "Entrada", L("Corredor")], ["ficha_por", "mapa", "Corredor", L("Entrada", "Sala do tesouro", "Porão")], ["ficha_por", "mapa", "Porão", L("Corredor")],
        ["paracada", "s", ["campo", v("mapa"), "Corredor"], [["mostrar", v("s")]]], ["mostrar", ["juntar", "Saídas: ", ["tamanho", ["campo", v("mapa"), "Corredor"]]]]],
      dicas: ["O campo é Corredor. O para cada percorre a lista desse campo.", "O número de saídas é o grau do Corredor: o tamanho da lista."],
      explicacao: "Corredor tem grau 3: de lá dá para ir à Entrada, à Sala do tesouro e ao Porão. Os jogos guardam os mapas assim." });

  /* ---------- M5 · autômatos ---------- */
  A.m5.gancho = { html: "<p>🥤 Você coloca a moeda na máquina de refrigerante, ela pisca “escolha”, você aperta o botão e a lata cai. Mas se apertar o botão <b>antes</b> da moeda, nada acontece.</p><p>🤔 Como a máquina “lembra” se você já pagou? O mesmo botão pode fazer coisas diferentes?</p>" };
  A.m5.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: a máquina de refrigerante",
      enunciado: "<p>A máquina começa no estado <b>esperando moeda</b>. Você quer um refrigerante. Clique nos passos na ordem: estado, entrada, transição…</p>",
      etapas: [
        { ic: "🪙", t: "Estado: esperando moeda" },
        { ic: "👉", t: "Entrada: coloca a moeda" },
        { ic: "✅", t: "Transição: libera a escolha" },
        { ic: "🔘", t: "Entrada: aperta o botão do refrigerante" },
        { ic: "🥤", t: "Transição: entrega a lata e volta a esperar moeda" }],
      okMsg: "Você seguiu o autômato da máquina!",
      explicacao: "A máquina está sempre num estado. A mesma entrada (apertar o botão) só entrega a lata no estado certo: depois da moeda. É um autômato, como a catraca." },
    VIDA(
      ["No videogame, o personagem pode estar parado, correndo ou pulando. Isso são…", ["Estados", "Entradas", "Arestas"], "Parado, correndo e pulando são <b>estados</b>; os botões são as <b>entradas</b>."],
      ["A catraca está <b>travada</b> e alguém <b>empurra</b> sem passar o cartão. Próximo estado?", ["Travada (não gira)", "Liberada", "Quebrada"], "Pela tabela de transição: travada + empurrar → <b>travada</b>."],
      ["A tabela que diz o próximo estado para cada estado e cada entrada é a…", ["Tabela de transição", "Lista de vizinhos", "Árvore de decisão"], "É a <b>tabela de transição</b>; cada mudança de estado é uma transição."])
  ];
  mais("m5", "desafio",
    { tipo: "rota", titulo: "🚌 A catraca do ônibus, entrada por entrada",
      enunciado: "<p>A catraca começa <b>travada</b>. As entradas são, nesta ordem: <b>empurrar → cartão → empurrar → empurrar</b>. Use a tabela de transição do 💡 Para começar e clique nos estados na ordem em que acontecem.</p>",
      etapas: [
        { ic: "🔒", t: "Início: travada" },
        { ic: "🚶", t: "Empurrar → continua travada (não gira)" },
        { ic: "💳", t: "Cartão → fica liberada" },
        { ic: "🚶", t: "Empurrar → gira, a pessoa passa e fica travada" },
        { ic: "🚶", t: "Empurrar de novo → continua travada" }],
      okMsg: "Você seguiu a tabela de transição!",
      explicacao: "Travada + empurrar → travada; travada + cartão → liberada; liberada + empurrar → travada; travada + empurrar → travada. O estado final é travada." });
  mais("m5", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória da catraca",
      enunciado: "<p>Vire duas cartas: ache o <b>estado + entrada</b> e o <b>próximo estado</b> que combinam (como na tabela de transição).</p>",
      pares: [{ a: "🔒 Travada + 💳 cartão", b: "🔓 Liberada (luz verde)" }, { a: "🔒 Travada + 🚶 empurrar", b: "🔒 Travada (não gira)" }, { a: "🔓 Liberada + 🚶 empurrar", b: "🔒 Travada (uma pessoa passou)" },
        { a: "🔓 Liberada + 💳 cartão", b: "🔓 Liberada (já estava)" }, { a: "Estado inicial da catraca", b: "🔒 Travada" }, { a: "Cada mudança de estado", b: "Transição" }],
      porRodada: 3,
      explicacao: "A tabela de transição diz o próximo estado para cada estado e cada entrada. A catraca começa travada (estado inicial)." });

  /* ---------- M6 · programação por eventos ---------- */
  A.m6.gancho = { html: "<p>🔔 Seu celular está parado em cima da mesa. De repente, chega uma mensagem: ele <b>vibra</b> e mostra a notificação.</p><p>🤔 O celular ficou o tempo todo perguntando “chegou mensagem? chegou?”. Ou ele fica <b>esperando</b> algo acontecer para reagir?</p>" };
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o placar eletrônico da quadra",
      enunciado: "<p>No campeonato da escola, o placar tem dois botões: <b>⚽ gol do time A</b> e <b>⚽ gol do time B</b>. As variáveis <b>a</b> e <b>b</b> começam em 0. Monte um tratador para cada botão: <b>alterar</b> o placar do time por 1 e <b>mostrar</b> a, “ x ” e b. O portal vai apertar: A → B → A. A tela deve mostrar:</p><p><b>1 x 0</b><br><b>1 x 1</b><br><b>2 x 1</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
      eventos: [["⚽ gol do time A", "golA"], ["⚽ gol do time B", "golB"]], disparos: ["golA", "golB", "golA"],
      inicio: [["definir", "a", 0], ["definir", "b", 0]],
      esperado: ["1 x 0", "1 x 1", "2 x 1"], exige: ["evento"],
      solucao: [["definir", "a", 0], ["definir", "b", 0], ["quando", "golA", [["mudar", "a", 1], ["mostrar", ["juntar", v("a"), " x ", v("b")]]]], ["quando", "golB", [["mudar", "b", 1], ["mostrar", ["juntar", v("a"), " x ", v("b")]]]]],
      dicas: ["Pegue dois “quando acontecer” na gaveta ⚡ Eventos e escolha um botão em cada.", "O “criar texto com” tem 3 pedaços: a, “ x ” (com espaços) e b."],
      explicacao: "Cada gol é um <b>evento</b> e cada bloco “quando acontecer” é o <b>tratador</b> dele: roda toda vez que o botão é apertado." },
    VIDA(
      ["Você toca no ícone e o aplicativo abre. Nesse caso, o toque é o…", ["Evento", "Tratador", "Sensor"], "O que acontece (o toque) é o <b>evento</b>; abrir o aplicativo é o que o tratador faz."],
      ["Os blocos dentro de “quando acontecer … faça” rodam…", ["Toda vez que aquele evento acontece", "Uma vez só, no começo", "Nunca"], "O tratador roda <b>de novo toda vez</b> que o evento acontece."],
      ["A porta automática do mercado abre quando alguém chega perto. Ela reage ao…", ["Sensor de movimento", "Botão de pular", "Toque no ícone"], "A porta automática reage ao <b>sensor</b> de movimento."])
  ];
  mais("m6", "desafio",
    { tipo: "blocos", titulo: "🔦 A lanterna do celular: liga e desliga",
      enunciado: "<p>O mesmo botão liga e desliga a lanterna. A variável <b>luz</b> guarda o estado e começa <b>desligada</b>. Monte o tratador do <b>🔦 botão</b>: <b>se</b> luz = desligada, definir luz para <b>ligada</b> e mostrar <b>Ligou</b>; senão, definir luz para <b>desligada</b> e mostrar <b>Desligou</b>. O portal vai apertar 3 vezes:</p><p><b>Ligou</b><br><b>Desligou</b><br><b>Ligou</b></p>",
      caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
      eventos: [["🔦 botão da lanterna", "lanterna"]], disparos: ["lanterna", "lanterna", "lanterna"],
      inicio: [["definir", "luz", "desligada"]],
      esperado: ["Ligou", "Desligou", "Ligou"], exige: ["evento", "se"],
      solucao: [["definir", "luz", "desligada"], ["quando", "lanterna", [["se", ["=", v("luz"), "desligada"], [["definir", "luz", "ligada"], ["mostrar", "Ligou"]], [["definir", "luz", "desligada"], ["mostrar", "Desligou"]]]]]],
      dicas: ["Dentro do “quando acontecer 🔦”, um “se … senão”.", "Escreva ligada e desligada sempre do mesmo jeito: a comparação é com o texto."],
      explicacao: "Eventos + estados: a variável luz guarda o estado e o mesmo evento faz coisas diferentes conforme o estado. É um autômato no programa." });
  mais("m6", "turbo",
    { tipo: "blocos", titulo: "🦘 O pulo do personagem cansa",
      enunciado: "<p>No jogo, o personagem pode pular <b>3 vezes</b>; depois fica cansado. A variável <b>pulos</b> começa em 0. No tratador do <b>⬆️ botão de pular</b>: <b>se pulos &lt; 3</b>, alterar pulos por 1 e mostrar <b>Pulou!</b>; senão, mostrar <b>Cansado!</b>. O portal vai apertar 4 vezes:</p><p><b>Pulou!</b><br><b>Pulou!</b><br><b>Pulou!</b><br><b>Cansado!</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "evento"],
      eventos: [["⬆️ botão de pular", "pular"]], disparos: ["pular", "pular", "pular", "pular"],
      inicio: [["definir", "pulos", 0]],
      esperado: ["Pulou!", "Pulou!", "Pulou!", "Cansado!"], exige: ["evento", "se"],
      solucao: [["definir", "pulos", 0], ["quando", "pular", [["se", ["<", v("pulos"), 3], [["mudar", "pulos", 1], ["mostrar", "Pulou!"]], [["mostrar", "Cansado!"]]]]]],
      dicas: ["A condição é pulos &lt; 3 (menor que 3).", "O alterar pulos por 1 vai dentro do “faça”, junto com o Pulou!."],
      explicacao: "O tratador roda a cada aperto; a variável conta os pulos e o se decide a reação. Nos 3 primeiros apertos pulos vale 0, 1 e 2 (menor que 3); no 4º, vale 3." });

  /* ---------- M7 · o semáforo ---------- */
  A.m7.gancho = { html: "<p>🚦 Na frente da escola, o semáforo tem um <b>botão para pedestre</b>. A Mila apertou o botão quando o sinal dos carros estava <b>vermelho</b> e… nada mudou.</p><p>🤔 O semáforo estragou? Ou existe uma <b>regra</b> que diz quando o botão funciona?</p>" };
  A.m7.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: atravessar com o botão",
      enunciado: "<p>O semáforo dos carros está <b>verde</b> e você quer atravessar. Clique nos passos na ordem em que acontecem, seguindo as tabelas do 💡 Para começar.</p>",
      etapas: [
        { ic: "🟢", t: "Estado: verde para os carros" },
        { ic: "🚶", t: "Entrada: você aperta o botão" },
        { ic: "🟡", t: "Transição: fica amarelo" },
        { ic: "⏱️", t: "Entrada: tique (o tempo do amarelo acabou)" },
        { ic: "🔴", t: "Transição: fica vermelho e você atravessa" }],
      okMsg: "Você atravessou em segurança!",
      explicacao: "Verde + botão → amarelo; amarelo + tique → vermelho. Em amarelo ou vermelho, o botão não muda nada: foi o que aconteceu com a Mila." },
    VIDA(
      ["O semáforo está <b>verde</b> e o pedestre aperta o botão. Próximo estado?", ["Amarelo", "Verde", "Desligado"], "Pela regra: verde + botão → <b>amarelo</b>."],
      ["O semáforo está <b>vermelho</b> e alguém aperta o botão. O que acontece?", ["Continua vermelho", "Fica verde", "Fica amarelo"], "Em amarelo ou vermelho, o botão <b>não muda nada</b>."],
      ["O micro-ondas apita quando o tempo acaba. Ele usa um…", ["Temporizador", "Botão de pedestre", "Grafo"], "Quando o tempo do <b>temporizador</b> acaba, um evento acontece (apita)."])
  ];
  mais("m7", "desafio",
    { tipo: "rota", titulo: "🔁 O ciclo completo, com um botão no meio",
      enunciado: "<p>O semáforo começa <b>vermelho</b>. Acontecem, nesta ordem: <b>tique → botão → tique → tique</b>. Clique nos estados na ordem em que aparecem.</p>",
      etapas: [
        { ic: "🔴", t: "Início: vermelho" },
        { ic: "⏱️", t: "Tique → verde" },
        { ic: "🚶", t: "Botão (estava verde) → amarelo" },
        { ic: "⏱️", t: "Tique → vermelho" },
        { ic: "⏱️", t: "Tique → verde" }],
      okMsg: "Ciclo seguido sem errar!",
      explicacao: "Vermelho + tique → verde; verde + botão → amarelo; amarelo + tique → vermelho; vermelho + tique → verde. O ciclo continua para sempre." });
  mais("m7", "turbo",
    { tipo: "blocos", titulo: "🌅 O dia e a noite no jogo",
      enunciado: "<p>No jogo, o tempo passa num ciclo: <b>manhã → tarde → noite → manhã</b>. A variável <b>hora</b> começa em manhã. Monte o tratador do <b>⏱️ tique</b>: se hora = manhã → definir tarde; senão, se hora = tarde → definir noite; senão → definir manhã. Depois do se, mostrar a hora. O portal vai dar 4 tiques:</p><p><b>tarde</b><br><b>noite</b><br><b>manhã</b><br><b>tarde</b></p>",
      caixa: ["mostrar", "texto", "variavel", "se", "comparar", "evento"],
      eventos: [["⏱️ tique", "tique"]], disparos: ["tique", "tique", "tique", "tique"],
      inicio: [["definir", "hora", "manhã"]],
      esperado: ["tarde", "noite", "manhã", "tarde"], exige: ["evento", "se"],
      solucao: [["definir", "hora", "manhã"], ["quando", "tique", [["se", ["=", v("hora"), "manhã"], [["definir", "hora", "tarde"]], [["se", ["=", v("hora"), "tarde"], [["definir", "hora", "noite"]], [["definir", "hora", "manhã"]]]]], ["mostrar", v("hora")]]]],
      dicas: ["É igual ao semáforo: um se dentro do senão do outro.", "O mostrar fica depois do se (fora dele), dentro do quando."],
      explicacao: "Um ciclo de 3 estados, como o semáforo: cada tique leva ao próximo estado, e do último volta ao primeiro." });

  /* ---------- M8 · o mapa da escola em grafo ---------- */
  A.m8.gancho = { html: "<p>🚨 Simulado de incêndio! O alarme tocou na Sala de Informática e todo mundo precisa chegar ao <b>Portão</b> pelo caminho mais curto. Mas o corredor entre o Pátio e a Sala de Informática está <b>em reforma</b>.</p><p>🤔 Como achar a rota de fuga quando um caminho está interditado?</p>" };
  const escolaReforma = { vertices: escola.vertices, arestas: escola.arestas.filter(a => !(a[0] === "Pt" && a[1] === "In")) };
  A.m8.aplicar = [
    Object.assign({ tipo: "grafo", titulo: "🛠️ Na vida real: a rota de fuga com o corredor em reforma", de: "In", para: "Po", unidade: "minutos", descricao: "Grafo da escola sem o corredor Pátio–Informática (em reforma)" }, escolaReforma,
      { enunciado: "<p>O corredor <b>Pátio–Sala de Informática</b> está interditado (ele sumiu do grafo). Começando pela <b>Sala de Informática</b>, clique nos vértices até o <b>Portão</b> pelo caminho mais curto.</p>",
        explicacao: "Sala de Informática → Biblioteca → Pátio → Portão = 1 + 2 + 1 = 4 minutos. Quando uma aresta some, o caminho mais curto muda." }),
    VIDA(
      ["No grafo da escola, o lugar <b>mais conectado</b> é o vértice de maior…", ["Grau", "Peso", "Nível"], "O mais conectado é o de maior <b>grau</b>: o Pátio (grau 4)."],
      ["Uma rua foi interditada. O que o aplicativo de mapa faz?", ["Tira a aresta e procura o caminho de novo", "Continua mandando pela rua fechada", "Desliga"], "Quando uma aresta some, o aplicativo <b>recalcula</b> a rota sem ela."],
      ["Portão → Pátio (1 min) → Sala de Informática (2 min). Quanto tempo?", ["3 minutos", "2 minutos", "4 minutos"], "A soma dos pesos: 1 + 2 = <b>3</b>."])
  ];
  mais("m8", "desafio",
    { tipo: "sim_grafo", titulo: "🛍️ O mapa do shopping",
      enunciado: "<p>No mapa do shopping, cada número é o tempo em <b>minutos a pé</b>. Saindo da <b>Entrada</b>, chegue ao <b>Cinema</b> pela <b>menor soma</b>.</p>",
      vertices: { entrada: { nome: "Entrada", ic: "🚪", x: 45, y: 120 }, lanches: { nome: "Lanches", ic: "🍟", x: 150, y: 45 }, escada: { nome: "Escada", ic: "🪜", x: 150, y: 195 },
        livraria: { nome: "Livraria", ic: "📚", x: 260, y: 45 }, jogos: { nome: "Jogos", ic: "🕹️", x: 260, y: 195 }, cinema: { nome: "Cinema", ic: "🎬", x: 360, y: 120 } },
      arestas: [["entrada", "lanches", 2], ["entrada", "escada", 1], ["escada", "lanches", 2], ["lanches", "livraria", 4], ["escada", "jogos", 5], ["livraria", "cinema", 1], ["jogos", "cinema", 2], ["livraria", "jogos", 3]],
      inicio: "entrada", fim: "cinema", menor: 7, solucao: ["entrada", "lanches", "livraria", "cinema"], unidade: "min",
      dicas: ["Some cada caminho: pela Escada e pelos Jogos, e pelos Lanches e pela Livraria."],
      explicacao: "Entrada → Lanches → Livraria → Cinema = 2 + 4 + 1 = 7 min. Pela Escada e pelos Jogos: 1 + 5 + 2 = 8." });
  mais("m8", "turbo",
    Object.assign({ tipo: "grafo", titulo: "🚪 Rota de fuga da Cantina, com o corredor em reforma", de: "Ca", para: "In", unidade: "minutos", descricao: "Grafo da escola sem o corredor Pátio–Informática (em reforma)" }, escolaReforma,
      { enunciado: "<p>Ainda com o corredor <b>Pátio–Sala de Informática</b> em reforma, a professora precisa ir da <b>Cantina</b> até a <b>Sala de Informática</b>. Trace o caminho mais curto.</p>",
        explicacao: "Cantina → Pátio → Biblioteca → Sala de Informática = 1 + 2 + 1 = 4 minutos. Sem a reforma, seria 1 + 2 = 3." }));
})();
