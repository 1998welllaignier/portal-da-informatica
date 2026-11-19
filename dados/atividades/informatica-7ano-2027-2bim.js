/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 2º bimestre de 2027 (Grafos e projetos)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF07CO03, EF07CO04.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  // Grafos usados na apostila (x, y no quadro 520 × 360)
  const BAIRRO_M1 = {
    vertices: [{ id: "E", rot: "Escola", x: 80, y: 260 }, { id: "P", rot: "Praça", x: 260, y: 80 }, { id: "M", rot: "Mercado", x: 440, y: 260 }],
    arestas: [["E", "P", 5], ["P", "M", 4], ["E", "M", 12]]
  };
  const BAIRRO = {
    vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "Pr", rot: "Praça", x: 260, y: 300 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
    arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "Pr", 4], ["Pr", "E", 4], ["C", "E", 9]]
  };
  const BAIRRO_FECHADO = { vertices: BAIRRO.vertices, arestas: BAIRRO.arestas.filter(e => !(e[0] === "Pa" && e[1] === "E")) };
  const CIDADE = {
    vertices: [{ id: "M", rot: "Mercado", x: 60, y: 190 }, { id: "B", rot: "Banco", x: 200, y: 60 }, { id: "F", rot: "Farmácia", x: 220, y: 320 },
      { id: "I", rot: "Igreja", x: 360, y: 60 }, { id: "Po", rot: "Posto", x: 370, y: 300 }, { id: "H", rot: "Hospital", x: 480, y: 180 }],
    arestas: [["M", "B", 3], ["M", "F", 6], ["B", "F", 2], ["B", "I", 4], ["F", "Po", 3], ["I", "H", 3], ["Po", "H", 2], ["F", "H", 7]]
  };
  const ESCOLA = {
    vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
      { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
    arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]
  };
  const ESCOLA_FECHADA = { vertices: ESCOLA.vertices, arestas: ESCOLA.arestas.filter(e => !(e[0] === "Pt" && e[1] === "In")) };
  const AMIGOS = {
    vertices: [{ id: "A", rot: "Ana", x: 200, y: 170 }, { id: "B", rot: "Bia", x: 70, y: 60 }, { id: "C", rot: "Caio", x: 70, y: 290 },
      { id: "D", rot: "Davi", x: 350, y: 170 }, { id: "E", rot: "Eva", x: 470, y: 290 }],
    arestas: [["A", "B", 1], ["A", "C", 1], ["A", "D", 1], ["B", "C", 1], ["D", "E", 1]]
  };
  const CURIO = {
    vertices: [{ id: "Es", rot: "Escola", x: 60, y: 180 }, { id: "Pr", rot: "Praça", x: 230, y: 60 }, { id: "Ig", rot: "Igreja", x: 440, y: 60 },
      { id: "Fe", rot: "Feira", x: 230, y: 300 }, { id: "Ro", rot: "Rodoviária", x: 450, y: 300 }],
    arestas: [["Es", "Pr", 6], ["Pr", "Ig", 2], ["Pr", "Fe", 4], ["Es", "Fe", 9], ["Fe", "Ro", 5], ["Ig", "Ro", 8]]
  };
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-7ano-2027-2bim", {

  /* ============ MISSÃO 1 — Grafos: pontos e ligações ============ */
  m1: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo do bairro",
        robo: BIT("🔗 Outro grafo: Sala – Pátio (2) · Pátio – Cantina (1)", [["Linha 1 da tabela: clico em <b>Sala</b> e depois em <b>Pátio</b>.", "Sala – Pátio ✔"], ["Linha 2: clico em <b>Pátio</b> e depois em <b>Cantina</b>.", "Pátio – Cantina ✔", true]]),
        enunciado: "<p>Clique num lugar e depois no lugar ligado a ele, seguindo a tabela de arestas. Cada ligação vira uma <strong>aresta</strong>.</p>",
        descricao: "Grafo do bairro com Escola, Praça e Mercado",
        explicacao: "3 vértices (Escola, Praça, Mercado) e 3 arestas: Escola–Praça (5), Praça–Mercado (4) e Escola–Mercado (12)." }, BAIRRO_M1)
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada parte do grafo e o que ela é no mapa",
        pares: [{ a: "Vértice", b: "Um lugar: a escola, a praça" }, { a: "Aresta", b: "A rua que liga dois lugares" }, { a: "Peso", b: "O número da aresta: 5 minutos" }, { a: "Grau", b: "Quantas arestas chegam a um vértice" }],
        explicacao: "Vértice = ponto; aresta = linha; peso = número da aresta; grau = quantas arestas chegam ao vértice." },
      { tipo: "tabela", titulo: "Qual é o grau de cada lugar?",
        enunciado: "<p>Use o grafo do bairro: <strong>Casa – Padaria</strong>, <strong>Padaria – Escola</strong>, <strong>Casa – Praça</strong>, <strong>Praça – Escola</strong> e <strong>Casa – Escola</strong>. Conte quantas arestas chegam a cada lugar.</p>",
        colunas: ["Lugar", "Grau"],
        linhas: [["Casa", { op: ["1", "2", "3"], r: "3" }], ["Padaria", { op: ["1", "2", "3"], r: "2" }], ["Praça", { op: ["1", "2", "3"], r: "2" }], ["Escola", { op: ["1", "2", "3"], r: "3" }]],
        explicacao: "Casa e Escola têm 3 arestas cada; Padaria e Praça têm 2." },
      { tipo: "memoria", titulo: "Jogo da memória do grafo",
        pares: [{ a: "Grafo", b: "Pontos ligados por linhas" }, { a: "Nó", b: "Outro nome do vértice" }, { a: "Vizinho", b: "Vértice ligado direto a outro" }, { a: "Euler", b: "Estudou as 7 pontes de Königsberg" }],
        explicacao: "Grafo = pontos e linhas · nó = vértice · vizinho = ligado direto · Euler e as pontes, em 1736." }
    ],
    desafio: [
      Object.assign({ tipo: "grafo_montar", titulo: "🟡 Monte o grafo da escola pelas pistas",
        enunciado: `<p>Leia as pistas e monte o grafo (os pesos são minutos):</p><ul>
          <li>Do <strong>Portão</strong> só se chega ao <strong>Pátio</strong>: 1 minuto.</li>
          <li>Do <strong>Pátio</strong> se vai à <strong>Cantina</strong> (1), à <strong>Sala de Informática</strong> (2) e à <strong>Biblioteca</strong> (2).</li>
          <li>A <strong>Sala de Informática</strong> e a <strong>Biblioteca</strong> são vizinhas: 1 minuto.</li></ul>`,
        descricao: "Grafo da escola para montar",
        dicas: ["São 5 arestas.", "O Pátio é o lugar de maior grau: liga-se a 4 lugares."],
        explicacao: "Portão–Pátio, Pátio–Cantina, Pátio–Informática, Pátio–Biblioteca e Informática–Biblioteca." }, ESCOLA)
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do grafo",
        palavras: ["GRAFO", "VERTICE", "ARESTA", "PESO", "GRAU"],
        pistas: ["Pontos ligados por linhas", "Cada ponto do grafo (sem acento)", "A linha que liga dois pontos", "O número escrito na linha", "Quantas linhas chegam a um ponto"], tam: 10,
        explicacao: "Grafo, vértice, aresta, peso e grau: as palavras da Missão 1." }
    ],
    vf: [
      { v: true, why: "É a definição de grafo." },
      { v: false, corrigir: { trecho: "só pode ser a distância em metros", opcoes: ["só pode ser a distância em metros", "pode ser distância, tempo ou preço"], certo: "pode ser distância, tempo ou preço" }, why: "Pode ser minutos, metros ou reais." },
      { v: true, why: "É a definição de grau." },
      { v: false, corrigir: { trecho: "as ruas são os vértices", opcoes: ["as ruas são os vértices", "as ruas são as arestas"], certo: "as ruas são as arestas" }, why: "Os lugares são vértices; as ruas, arestas." },
      { v: true, why: "Em 1736, com as margens como pontos e as pontes como linhas." }
    ]
  },

  /* ============ MISSÃO 2 — O caminho mais curto ============ */
  m2: {
    pratica: [
      Object.assign({ tipo: "grafo", titulo: "Trace o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos",
        robo: BIT("🗺️ Outro grafo: Casa —4— Banca —1— Igreja e Casa —7— Igreja", [["Pela Banca: 4 + 1 = <b>5</b>.", "Casa → Banca → Igreja = 5"], ["Pela rua direta: <b>7</b>.", "Casa → Igreja = 7"], ["O mais curto é o de <b>menor soma</b>: pela Banca!", "menor soma = 5 ✔", true]]),
        enunciado: "<p>Clique nos lugares, começando pela <strong>Casa</strong>, até chegar à <strong>Escola</strong>. Some os pesos e escolha o caminho de <strong>menor soma</strong>.</p>",
        descricao: "Grafo do bairro com Casa, Padaria, Praça e Escola",
        explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 minutos (a rua direta leva 9)." }, BAIRRO)
    ],
    basico: [
      { tipo: "tabela", titulo: "Some os pesos de cada caminho",
        enunciado: "<p>Grafo do bairro: Casa–Padaria (3), Padaria–Escola (2), Casa–Praça (4), Praça–Escola (4), Casa–Escola (9).</p>",
        colunas: ["Caminho", "Total"],
        linhas: [["Casa → Escola (rua direta)", { op: ["5 minutos", "8 minutos", "9 minutos"], r: "9 minutos" }], ["Casa → Padaria → Escola", { op: ["5 minutos", "8 minutos", "9 minutos"], r: "5 minutos" }], ["Casa → Praça → Escola", { op: ["5 minutos", "8 minutos", "9 minutos"], r: "8 minutos" }]],
        explicacao: "9, 3 + 2 = 5 e 4 + 4 = 8. O mais curto é o de 5 minutos." },
      { tipo: "ordenar", titulo: "Coloque em ordem: como achar o caminho mais curto",
        itens: ["Listar todos os caminhos possíveis", "Somar os pesos de cada caminho", "Escolher o caminho de menor total"],
        explicacao: "Listar, somar e escolher o menor total." },
      { tipo: "escolha", titulo: "Pense no caminho",
        perguntas: [
          { p: "O caminho com menos paradas é sempre o mais curto?", opcoes: ["Não: o mais curto é o de menor soma dos pesos", "Sim, sempre"], certo: 0, why: "A rua direta tem uma aresta só e leva 9 minutos." },
          { p: "Quem criou, em 1956, um algoritmo rápido para achar o caminho mais curto?", opcoes: ["Edsger Dijkstra", "Leonhard Euler", "al-Khwarizmi"], certo: 0, why: "Dijkstra, um cientista holandês." },
          { p: "Uma rua foi interditada. O que pode acontecer?", opcoes: ["O caminho mais curto pode mudar", "Nada muda nunca", "O grafo some"], certo: 0, why: "Sem aquela aresta, outro caminho pode virar o mais curto." }],
        explicacao: "Mais curto = menor soma; Dijkstra criou o algoritmo; ruas interditadas mudam a rota." }
    ],
    desafio: [
      Object.assign({ tipo: "grafo", titulo: "🟡 O caminho mais curto do Mercado até o Hospital", de: "M", para: "H", unidade: "minutos",
        enunciado: "<p>Agora a cidade é maior. Teste os caminhos e trace o de <strong>menor soma</strong>.</p>",
        descricao: "Grafo da cidade com Mercado, Banco, Farmácia, Igreja, Posto e Hospital",
        dicas: ["Compare: pelo Banco e pela Igreja; pelo Banco, Farmácia e Posto; pela Farmácia direto ao Hospital."],
        explicacao: "Mercado → Banco → Farmácia → Posto → Hospital = 3 + 2 + 3 + 2 = 10 minutos, empatado com Mercado → Banco → Igreja → Hospital = 3 + 4 + 3 = 10. Os dois são os mais curtos." }, CIDADE)
    ],
    turbo: [
      Object.assign({ tipo: "grafo", titulo: "🔴 A rua Padaria–Escola foi interditada!", de: "C", para: "E", unidade: "minutos",
        enunciado: "<p>A aresta <strong>Padaria – Escola</strong> está fechada para obras. Qual é o novo caminho mais curto da Casa até a Escola?</p>",
        descricao: "Grafo do bairro sem a aresta Padaria–Escola",
        explicacao: "Casa → Praça → Escola = 4 + 4 = 8 minutos. É isso que o aplicativo de mapa faz quando há um bloqueio." }, BAIRRO_FECHADO)
    ],
    vf: [
      { v: true, why: "Somar os pesos dá o total do caminho." },
      { v: false, corrigir: { trecho: "O caminho com menos paradas é sempre o mais curto", opcoes: ["O caminho com menos paradas é sempre o mais curto", "O caminho de menor soma dos pesos é o mais curto"], certo: "O caminho de menor soma dos pesos é o mais curto" }, why: "A rua direta tem menos paradas e leva mais tempo." },
      { v: true, why: "3 + 2 = 5." },
      { v: true, why: "Sem a aresta, outro caminho pode ficar mais curto." },
      { v: true, why: "Foi criado por Dijkstra em 1956." }
    ]
  },

  /* ============ MISSÃO 3 — Grafos de amizades ============ */
  m3: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo de amizades da turma", semPeso: true,
        enunciado: "<p>Cada pessoa é um vértice. Clique em duas pessoas para ligar uma amizade, seguindo a tabela.</p>",
        descricao: "Grafo de amizades com Ana, Bia, Caio, Davi e Eva",
        okMsg: "Rede de amizades montada! 🤝",
        explicacao: "Amizades: Ana–Bia, Ana–Caio, Ana–Davi, Bia–Caio e Davi–Eva." }, AMIGOS)
    ],
    basico: [
      { tipo: "tabela", titulo: "Quantos amigos cada um tem?",
        enunciado: "<p>O <strong>grau</strong> é o número de amizades de cada pessoa. Use a tabela de amizades.</p>",
        colunas: ["Pessoa", "Grau"],
        linhas: [["Ana", { op: ["1", "2", "3"], r: "3" }], ["Bia", { op: ["1", "2", "3"], r: "2" }], ["Davi", { op: ["1", "2", "3"], r: "2" }], ["Eva", { op: ["1", "2", "3"], r: "1" }]],
        explicacao: "Ana 3, Bia 2, Davi 2, Eva 1. Quem tem mais conexões é a Ana." },
      { tipo: "sinais", titulo: "Quem é amigo em comum da Ana e da Eva?",
        enunciado: "<p>Marque a pessoa que é amiga <strong>das duas</strong> ao mesmo tempo.</p>",
        opcoes: [{ t: "Davi", certo: true }, { t: "Bia", certo: false }, { t: "Caio", certo: false }],
        explicacao: "O Davi é amigo da Ana e da Eva. Por isso, a Eva e a Ana estão a 2 passos." },
      { tipo: "escolha", titulo: "As redes sociais e o grafo",
        perguntas: [
          { p: "Como a rede social sugere “pessoas que você talvez conheça”?", opcoes: ["Procura os amigos dos seus amigos no grafo", "Sorteia qualquer pessoa", "Escolhe quem tem o nome mais bonito"], certo: 0, why: "Amigos de amigos estão a 2 passos no grafo." },
          { p: "A rede sugeriu um desconhecido. O que fazer?", opcoes: ["Só aceitar quem eu conheço de verdade", "Aceitar, porque a rede sugeriu", "Mandar meu endereço"], certo: 0, why: "Sugestão não é garantia de confiança." }],
        explicacao: "A sugestão vem do grafo (amigos de amigos), mas só aceite quem você conhece." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 A rede sugeriria para a Bia?",
        enunciado: "<p>A rede social sugere os <strong>amigos dos amigos</strong> que ainda <strong>não são</strong> amigos da pessoa. Amizades: Ana–Bia, Ana–Caio, Ana–Davi, Bia–Caio, Davi–Eva.</p>",
        colunaItem: "Pessoa", colunaResp: "Sugere para a Bia?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [{ t: "Davi", c: "S", why: "É amigo da Ana, que é amiga da Bia, e ainda não é amigo da Bia." }, { t: "Caio", c: "N", why: "Já é amigo da Bia." },
          { t: "Ana", c: "N", why: "Já é amiga da Bia." }, { t: "Eva", c: "N", why: "Está a 3 passos: não é amiga de nenhum amigo da Bia." }],
        explicacao: "Só o Davi: amigo da Ana (amiga da Bia) e ainda não é amigo dela." }
    ],
    turbo: [
      Object.assign({ tipo: "grafo", titulo: "🔴 O caminho de menos passos da Bia até a Eva", de: "B", para: "E", semPeso: true,
        enunciado: "<p>Clique nas pessoas, começando pela <strong>Bia</strong>, até a <strong>Eva</strong>, com o <strong>menor número de passos</strong> (amizades).</p>",
        descricao: "Grafo de amizades",
        explicacao: "Bia → Ana → Davi → Eva: 3 passos." }, AMIGOS)
    ],
    vf: [
      { v: true, why: "Pessoas = vértices; amizades = arestas." },
      { v: false, corrigir: { trecho: "Quem tem o menor grau", opcoes: ["Quem tem o menor grau", "Quem tem o maior grau"], certo: "Quem tem o maior grau" }, why: "Mais arestas = mais amigos." },
      { v: true, why: "Amigos de amigos estão a 2 passos." },
      { v: false, corrigir: { trecho: "essa pessoa é sempre de confiança", opcoes: ["essa pessoa é sempre de confiança", "isso não quer dizer que a pessoa é de confiança"], certo: "isso não quer dizer que a pessoa é de confiança" }, why: "Sugestão não é garantia." },
      { v: true, why: "O Davi é amigo das duas." }
    ]
  },

  /* ============ MISSÃO 4 — Escolher a estrutura certa ============ */
  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Lista, tabela ou grafo?",
        robo: BIT("🧠 As 3 perguntas", [["Importa a ordem, e cada item tem uma informação só? <b>Lista</b>.", "ordem → lista"], ["Cada item tem várias informações? <b>Tabela</b>.", "várias informações → tabela"], ["Importa quem está ligado a quem? <b>Grafo</b>.", "ligações → grafo", true]]),
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "T", rot: "🗂️ Tabela" }, { id: "G", rot: "🕸️ Grafo" }],
        itens: [{ t: "As músicas na ordem em que vão tocar", c: "L" }, { t: "A fila da cantina", c: "L" }, { t: "Nome, turma e nota de cada aluno", c: "T" },
          { t: "Os contatos do celular (nome, telefone, foto)", c: "T" }, { t: "As estradas entre as cidades", c: "G" }, { t: "Quem é amigo de quem na turma", c: "G" }],
        explicacao: "Ordem → lista; várias informações por item → tabela; ligações → grafo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada estrutura e o seu exemplo",
        pares: [{ a: "📝 Lista", b: "A playlist de músicas" }, { a: "🗂️ Tabela", b: "O boletim da turma" }, { a: "🕸️ Grafo", b: "O mapa das ruas" }, { a: "Registro", b: "A ficha de um aluno" }],
        explicacao: "Playlist = lista; boletim = tabela; mapa = grafo; ficha = registro." },
      { tipo: "memoria", titulo: "Jogo da memória das estruturas",
        pares: [{ a: "Estrutura de dados", b: "O jeito de organizar os dados" }, { a: "Registro", b: "Uma linha da tabela" }, { a: "Campo", b: "Cada informação do registro" }, { a: "Lista", b: "Itens em ordem" }],
        explicacao: "Estrutura de dados = jeito de organizar; registro = linha; campo = informação; lista = itens em ordem." },
      { tipo: "escolha", titulo: "Qual estrutura?",
        perguntas: [
          { p: "Para guardar a ordem de chegada dos alunos à aula, uso:", opcoes: ["Uma lista", "Um grafo", "Nenhuma"], certo: 0, why: "A ordem importa e cada item é só um nome." },
          { p: "Na tabela do boletim, “nota” é:", opcoes: ["Um campo", "Um vértice", "Uma aresta"], certo: 0, why: "Campo é cada informação do registro." }],
        explicacao: "Ordem → lista; cada informação da ficha é um campo." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 O aplicativo da escola: qual estrutura em cada parte?",
        colunaItem: "Parte do aplicativo", colunaResp: "Estrutura",
        categorias: [{ id: "L", rot: "Lista" }, { id: "T", rot: "Tabela" }, { id: "G", rot: "Grafo" }],
        itens: [{ t: "Os avisos do dia, do mais novo ao mais antigo", c: "L", why: "Itens em ordem." },
          { t: "A ficha de cada aluno: nome, turma, código", c: "T", why: "Várias informações por aluno." },
          { t: "O mapa dos corredores da escola", c: "G", why: "Importa o que liga a quê." },
          { t: "O horário: dia, aula, turma e sala", c: "T", why: "Várias informações em cada linha." }],
        explicacao: "Avisos = lista; fichas e horário = tabela; corredores = grafo." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: as estruturas de dados",
        texto: "O jeito de organizar os dados se chama **estrutura** de dados. A **lista** guarda itens em ordem. A **tabela** guarda registros, e cada informação do registro é um **campo**. O **grafo** mostra o que está ligado a quê.",
        explicacao: "Estrutura de dados: lista (ordem), tabela (registros e campos) e grafo (ligações)." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "o melhor é um grafo", opcoes: ["o melhor é um grafo", "o melhor é uma tabela"], certo: "o melhor é uma tabela" }, why: "Várias informações por aluno = tabela." },
      { v: true, why: "As músicas ficam em ordem." },
      { v: true, why: "Linha = registro; colunas = campos." },
      { v: true, why: "Grafo = ligações." }
    ]
  },

  /* ============ MISSÃO 5 — Projeto em equipe: planejar ============ */
  m5: {
    pratica: [
      { tipo: "ordenar", titulo: "As etapas do plano do projeto",
        itens: ["Problema: o que queremos resolver?", "Ideia: como vamos resolver?", "Dados: de que informações precisamos?", "Tarefas: quem faz o quê?", "Prazo: até quando?"],
        explicacao: "Problema, ideia, dados, tarefas e prazo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada papel e a sua função",
        pares: [{ a: "🧭 Organizador", b: "Cuida do tempo e lembra as tarefas" }, { a: "🔎 Pesquisador", b: "Junta os dados: lugares e tempos" }, { a: "🛠️ Construtor", b: "Monta o grafo no portal" }, { a: "🧪 Testador", b: "Confere se os caminhos estão certos" }],
        explicacao: "Cada papel tem uma função, e todos são importantes." },
      { tipo: "sinais", titulo: "Marque os bons combinados de equipe",
        opcoes: [{ t: "Ouvir todos antes de decidir", certo: true }, { t: "Dividir o trabalho com justiça", certo: true }, { t: "Ajudar quem travou", certo: true },
          { t: "Uma pessoa faz tudo e os outros olham", certo: false }, { t: "Rir da ideia do colega", certo: false }],
        explicacao: "Ouvir, dividir com justiça e ajudar fazem a equipe funcionar." },
      { tipo: "memoria", titulo: "Jogo da memória do projeto",
        pares: [{ a: "Projeto", b: "Trabalho com objetivo, etapas e prazo" }, { a: "Prazo", b: "Tempo limite para terminar" }, { a: "Cronograma", b: "As tarefas com os prazos" }, { a: "Papel", b: "A função de cada pessoa" }],
        explicacao: "Projeto, prazo, cronograma e papel." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Monte o cronograma do projeto",
        enunciado: "<p>Escolha quem cuida de cada tarefa e quando. O projeto tem 2 aulas: hoje (planejar) e a próxima (construir e apresentar).</p>",
        colunas: ["Tarefa", "Quem", "Quando"],
        linhas: [["Juntar os lugares e os tempos", { op: ["Pesquisador", "Testador"], r: "Pesquisador" }, { op: ["Hoje", "Próxima aula"], r: "Hoje" }],
          ["Montar o grafo no portal", { op: ["Construtor", "Organizador"], r: "Construtor" }, { op: ["Hoje", "Próxima aula"], r: "Próxima aula" }],
          ["Conferir os caminhos mais curtos", { op: ["Testador", "Pesquisador"], r: "Testador" }, { op: ["Hoje", "Próxima aula"], r: "Próxima aula" }]],
        explicacao: "Hoje se juntam os dados; na próxima aula se constrói e se testa." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "🔴 Resolva os problemas da equipe",
        perguntas: [
          { p: "Faltam 10 minutos e o grafo não está pronto. O organizador:", opcoes: ["Avisa a equipe e todos ajudam o construtor", "Fica quieto", "Desiste do projeto"], certo: 0, why: "O organizador cuida do tempo." },
          { p: "Duas pessoas querem o mesmo papel. A equipe:", opcoes: ["Conversa e decide junto, ou reveza", "Briga", "Sorteia sem conversar e ninguém aceita"], certo: 0, why: "Decidir juntos é combinado de equipe." },
          { p: "Um colega faltou. A equipe:", opcoes: ["Redivide a tarefa dele", "Para tudo", "Reclama dele para a turma"], certo: 0, why: "O trabalho é de todos." }],
        explicacao: "Equipe boa resolve os problemas conversando e dividindo." }
    ],
    vf: [
      { v: true, why: "O plano vem primeiro." },
      { v: false, corrigir: { trecho: "uma pessoa faz tudo e as outras só olham", opcoes: ["uma pessoa faz tudo e as outras só olham", "cada pessoa tem um papel"], certo: "cada pessoa tem um papel" }, why: "O trabalho é dividido." },
      { v: true, why: "É a função do testador." },
      { v: true, why: "É a definição de prazo." },
      { v: true, why: "É um dos combinados." }
    ]
  },

  /* ============ MISSÃO 6 — Projeto em equipe: construir e apresentar ============ */
  m6: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "🛠️ Construa o Guia de Rotas da Escola",
        enunciado: "<p>Use os dados do pesquisador (a tabela de arestas) e monte o grafo da escola.</p>",
        descricao: "Guia de Rotas da Escola para montar",
        okMsg: "Versão 1 do guia pronta! Agora é hora de testar. 🧪",
        explicacao: "Portão–Pátio (1), Pátio–Cantina (1), Pátio–Informática (2), Pátio–Biblioteca (2), Informática–Biblioteca (1)." }, ESCOLA)
    ],
    basico: [
      Object.assign({ tipo: "grafo", titulo: "🧪 Teste o guia: do Portão até a Biblioteca", de: "Po", para: "Bi", unidade: "minutos",
        enunciado: "<p>Você é o testador: trace o caminho mais curto do <strong>Portão</strong> até a <strong>Biblioteca</strong>.</p>",
        descricao: "Grafo da escola",
        explicacao: "Portão → Pátio → Biblioteca = 1 + 2 = 3 minutos." }, ESCOLA),
      { tipo: "ordenar", titulo: "O ciclo do projeto",
        itens: ["Construir", "Testar", "Ouvir a opinião de quem usa", "Melhorar e fazer a nova versão"],
        explicacao: "Construir, testar, ouvir e melhorar: cada volta gera uma versão melhor." },
      { tipo: "classificar", titulo: "Construir ou testar?",
        categorias: [{ id: "C", rot: "🛠️ Construir" }, { id: "T", rot: "🧪 Testar" }],
        itens: [{ t: "Ligar as arestas no portal", c: "C" }, { t: "Conferir se o caminho mais curto está certo", c: "T" }, { t: "Escrever os pesos", c: "C" }, { t: "Pedir a um colega para usar o guia", c: "T" }],
        explicacao: "Construir é montar; testar é conferir se funciona." }
    ],
    desafio: [
      Object.assign({ tipo: "grafo", titulo: "🟡 Versão 2: o corredor Pátio–Informática fechou", de: "Po", para: "In", unidade: "minutos",
        enunciado: "<p>O corredor entre o <strong>Pátio</strong> e a <strong>Sala de Informática</strong> está em obras. Trace o novo caminho mais curto do <strong>Portão</strong> até a <strong>Sala de Informática</strong>.</p>",
        descricao: "Grafo da escola sem o corredor Pátio–Informática",
        explicacao: "Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = 4 minutos." }, ESCOLA_FECHADA)
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Organize a apresentação da equipe",
        itens: ["Qual era o problema", "O que fizemos", "Como usar o guia", "O que aprendemos"],
        explicacao: "Problema, o que fizemos, como usar e o que aprendemos: curto e claro." }
    ],
    vf: [
      { v: true, why: "Construir, testar, ouvir, melhorar." },
      { v: false, corrigir: { trecho: "não é preciso testar", opcoes: ["não é preciso testar", "é preciso testar"], certo: "é preciso testar" }, why: "Testar mostra os erros." },
      { v: true, why: "Cada volta melhora o projeto." },
      { v: true, why: "Atualização = nova versão." },
      { v: true, why: "São as 4 partes da apresentação." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Mapa de Curionópolis em grafo ============ */
  m7: {
    pratica: [
      Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo de lugares de Curionópolis",
        enunciado: "<p>Siga a tabela de arestas (tempos inventados para o exercício).</p>",
        descricao: "Grafo com Escola, Praça, Igreja, Feira e Rodoviária",
        explicacao: "6 arestas: Escola–Praça, Praça–Igreja, Praça–Feira, Escola–Feira, Feira–Rodoviária e Igreja–Rodoviária." }, CURIO)
    ],
    basico: [
      Object.assign({ tipo: "grafo", titulo: "O caminho mais curto da Escola até a Rodoviária", de: "Es", para: "Ro", unidade: "minutos",
        descricao: "Grafo de lugares de Curionópolis",
        explicacao: "Escola → Feira → Rodoviária = 9 + 5 = 14 minutos (pela Praça e pela Feira são 15)." }, CURIO),
      { tipo: "ligar", titulo: "Do mapa para o grafo",
        pares: [{ a: "Cada lugar", b: "Vira um vértice" }, { a: "Cada rua entre dois lugares", b: "Vira uma aresta" }, { a: "O tempo de caminhada", b: "Vira o peso" }],
        explicacao: "Lugar = vértice; rua = aresta; tempo = peso." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 O grau de cada lugar",
        colunas: ["Lugar", "Grau"],
        linhas: [["Praça", { op: ["2", "3", "4"], r: "3" }], ["Feira", { op: ["2", "3", "4"], r: "3" }], ["Igreja", { op: ["2", "3", "4"], r: "2" }], ["Rodoviária", { op: ["2", "3", "4"], r: "2" }]],
        explicacao: "Praça e Feira têm grau 3 (os mais conectados); Igreja e Rodoviária têm 2." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "🔴 Passeio: Escola → Igreja → Rodoviária",
        enunciado: "<p>O passeio sai da <strong>Escola</strong>, passa pela <strong>Igreja</strong> e termina na <strong>Rodoviária</strong>. Ache o caminho mais curto de cada parte.</p>",
        colunas: ["Parte", "Minutos"],
        linhas: [["Escola → Igreja (mais curto)", { op: ["8", "15", "17"], r: "8" }], ["Igreja → Rodoviária (mais curto)", { op: ["8", "11", "13"], r: "8" }], ["Total do passeio", { op: ["16", "22", "23"], r: "16" }]],
        explicacao: "Escola → Praça → Igreja = 6 + 2 = 8; Igreja → Rodoviária direto = 8; total 16 minutos." }
    ],
    vf: [
      { v: true, why: "Lugar = vértice." },
      { v: true, why: "O grafo simplifica o mapa." },
      { v: false, corrigir: { trecho: "leva 15 minutos", opcoes: ["leva 15 minutos", "leva 14 minutos"], certo: "leva 14 minutos" }, why: "Escola → Feira → Rodoviária = 14." },
      { v: true, why: "Rua = aresta." },
      { v: true, why: "O peso pode ser tempo." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Labirintos ============ */
  m8: {
    pratica: [
      { tipo: "robo", titulo: "Leve o robô até a saída do labirinto",
        enunciado: "<p>Cada seta anda uma casa. Se cair num beco sem saída, <strong>volte</strong> e tente outro caminho.</p>",
        grade: ["R..#.", "##.#.", "...#.", ".#...", "...#*"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1], ["D", 1]],
        dicas: ["Vá até C1 e desça pela coluna C até a linha 4.", "Depois vá para a direita até E4 e desça até a saída."],
        explicacao: "Um caminho certo: ➡️ ➡️ ⬇️ ⬇️ ⬇️ ➡️ ➡️ ⬇️. Os outros corredores são becos sem saída." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Do labirinto para o grafo",
        pares: [{ a: "Cruzamento", b: "Vértice de grau 3 ou mais" }, { a: "Beco sem saída", b: "Vértice de grau 1" }, { a: "Corredor", b: "Aresta" }, { a: "Entrada e saída", b: "Vértices de começo e de fim" }],
        explicacao: "Cruzamento e beco são vértices; corredor é aresta." },
      { tipo: "escolha", titulo: "Estratégias para sair",
        perguntas: [
          { p: "Cheguei a um beco sem saída. Na estratégia “tentar e voltar”, eu:", opcoes: ["Volto ao último cruzamento e tento outro caminho", "Desisto", "Fico parado"], certo: 0, why: "É o retrocesso." },
          { p: "Como se chama o “tentar e voltar” em programação?", opcoes: ["Retrocesso (backtracking)", "Laço infinito", "Grau"], certo: 0, why: "Backtracking, em inglês." },
          { p: "Para que serve marcar o caminho por onde já passei?", opcoes: ["Para não repetir o mesmo corredor", "Para enfeitar", "Para o labirinto sumir"], certo: 0, why: "Assim não se anda em círculos." }],
        explicacao: "Tentar e voltar = retrocesso; marcar o caminho evita repetir." }
    ],
    desafio: [
      { tipo: "robo", titulo: "🟡 O labirinto grande",
        enunciado: "<p>Este tem mais becos sem saída. Planeje antes de clicar!</p>",
        grade: ["R..#..", "#.##.#", "#....#", "##.#.#", "...#..", ".#...*"],
        solucao: [["R", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1], ["R", 1], ["D", 1]],
        dicas: ["Vá para B1 e desça até B3.", "Siga para a direita até E3 e desça pela coluna E."],
        explicacao: "Um caminho certo: ➡️ ⬇️ ⬇️ ➡️ ➡️ ➡️ ⬇️ ⬇️ ➡️ ⬇️." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Os passos do “tentar e voltar”",
        itens: ["Escolher um corredor no cruzamento", "Seguir até o fim do corredor", "Se for beco sem saída, voltar ao último cruzamento", "Tentar um corredor que ainda não foi testado", "Repetir até achar a saída"],
        explicacao: "É o retrocesso (backtracking), usado pelos computadores em labirintos e quebra-cabeças." }
    ],
    vf: [
      { v: true, why: "Cruzamentos e becos = vértices; corredores = arestas." },
      { v: true, why: "Só uma aresta chega ao beco." },
      { v: false, corrigir: { trecho: "desiste do labirinto", opcoes: ["desiste do labirinto", "volta ao último cruzamento"], certo: "volta ao último cruzamento" }, why: "É o retrocesso." },
      { v: true, why: "É o backtracking." },
      { v: true, why: "Corredor = aresta." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Partes do grafo", pares: [{ a: "Vértice", b: "Ponto" }, { a: "Aresta", b: "Linha" }, { a: "Peso", b: "Número da linha" }], explicacao: "Vértice, aresta e peso." },
      { tipo: "relembre", de: "m2" },
      { tipo: "tabela", de: "m2", titulo: "M2 · Some os caminhos", enunciado: "<p>Loja–Banca (2), Banca–Casa (3), Loja–Casa (6).</p>", colunas: ["Caminho", "Total"],
        linhas: [["Loja → Casa (direto)", { op: ["5", "6"], r: "6" }], ["Loja → Banca → Casa", { op: ["5", "6"], r: "5" }]], explicacao: "2 + 3 = 5 é mais curto que 6." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Amizades", perguntas: [{ p: "No grafo de amizades, quem tem mais amigos tem:", opcoes: ["O maior grau", "O menor grau"], certo: 0 }], explicacao: "Mais arestas = maior grau." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", de: "m4", titulo: "M4 · Qual estrutura?", categorias: [{ id: "L", rot: "Lista" }, { id: "T", rot: "Tabela" }, { id: "G", rot: "Grafo" }],
        itens: [{ t: "Fila da cantina", c: "L" }, { t: "Boletim", c: "T" }, { t: "Rede de amigos", c: "G" }], explicacao: "Ordem, fichas e ligações." },
      { tipo: "relembre", de: "m5" },
      { tipo: "ordenar", de: "m5", titulo: "M5 · O plano", itens: ["Problema", "Ideia", "Dados", "Tarefas", "Prazo"], explicacao: "As etapas do plano." },
      { tipo: "relembre", de: "m6" },
      { tipo: "sinais", de: "m6", titulo: "M6 · O ciclo do projeto", opcoes: [{ t: "Construir", certo: true }, { t: "Testar", certo: true }, { t: "Melhorar", certo: true }, { t: "Desistir", certo: false }], explicacao: "Construir, testar, ouvir e melhorar." },
      { tipo: "relembre", de: "m7" },
      { tipo: "memoria", de: "m7", titulo: "M7 · Mapa em grafo", pares: [{ a: "Lugar", b: "Vértice" }, { a: "Rua", b: "Aresta" }, { a: "Tempo", b: "Peso" }], explicacao: "Lugar, rua e tempo." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Labirintos", perguntas: [{ p: "O beco sem saída é um vértice de grau:", opcoes: ["1", "3"], certo: 0 }], explicacao: "Só um corredor chega ao beco." }
    ],
    desafio: [
      Object.assign({ tipo: "grafo", titulo: "🟡 Simulado: o caminho mais curto da Farmácia até a Igreja", de: "F", para: "I", unidade: "minutos", descricao: "Grafo da cidade",
        explicacao: "Farmácia → Banco → Igreja = 2 + 4 = 6 minutos." }, CIDADE)
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        palavras: ["GRAFO", "CAMINHO", "LISTA", "PROJETO", "LABIRINTO"],
        pistas: ["Pontos ligados por linhas", "Sequência de vértices ligados", "Itens em ordem", "Trabalho com objetivo, etapas e prazo", "Lugar cheio de corredores"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-2bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria", "grafo", "grafo_montar"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Grafos", [{ p: "Num grafo, os pontos se chamam:", opcoes: ["Vértices", "Pesos", "Campos"], certo: 0 }, { p: "O número escrito na aresta é o:", opcoes: ["Peso", "Grau", "Nó"], certo: 0 }]), pega("m1"),
    Q("m2", "Caminho mais curto", [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma dos pesos", "Menos paradas", "Mais arestas"], certo: 0 }, { p: "Uma rua interditada pode:", opcoes: ["Mudar o caminho mais curto", "Apagar o grafo", "Não mudar nada nunca"], certo: 0 }]), pega("m2"),
    Q("m3", "Amizades", [{ p: "A rede social sugere:", opcoes: ["Amigos dos seus amigos", "Pessoas sorteadas", "Só famosos"], certo: 0 }, { p: "Sugestão de amizade quer dizer que a pessoa é de confiança?", opcoes: ["Não", "Sim, sempre"], certo: 0 }]), pega("m3"),
    Q("m4", "Estruturas", [{ p: "Nome, turma e nota de cada aluno ficam melhor numa:", opcoes: ["Tabela", "Lista", "Rede de amigos"], certo: 0 }, { p: "Quem está ligado a quem fica melhor num:", opcoes: ["Grafo", "Campo", "Prazo"], certo: 0 }]), pega("m4"),
    Q("m5", "Planejar", [{ p: "O primeiro passo do plano é:", opcoes: ["Dizer qual é o problema", "Apresentar", "Testar"], certo: 0 }, { p: "Prazo é:", opcoes: ["O tempo limite para terminar", "Um papel da equipe", "Uma aresta"], certo: 0 }]), pega("m5"),
    Q("m6", "Construir e apresentar", [{ p: "Depois de construir, a equipe:", opcoes: ["Testa", "Desiste", "Apaga tudo"], certo: 0 }, { p: "Cada volta do ciclo gera:", opcoes: ["Uma versão melhor", "Um bug", "Um labirinto"], certo: 0 }]), pega("m6"),
    Q("m7", "Mapa em grafo", [{ p: "No grafo da cidade, cada lugar vira:", opcoes: ["Um vértice", "Uma aresta", "Um peso"], certo: 0 }, { p: "O grafo é um ___ do mapa:", opcoes: ["Modelo", "Bug", "Prazo"], certo: 0 }]), pega("m7"),
    Q("m8", "Labirintos", [{ p: "Cada corredor do labirinto vira:", opcoes: ["Uma aresta", "Um vértice", "Um campo"], certo: 0 }, { p: "“Tentar e voltar” em programação é:", opcoes: ["Retrocesso", "Laço", "Registro"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();
