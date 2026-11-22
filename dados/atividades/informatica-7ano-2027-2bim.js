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
          { p: "Como se chama o “tentar e voltar” em programação?", opcoes: ["Retrocesso (backtracking)", "Cruzamento", "Grau"], certo: 0, why: "Backtracking, em inglês." },
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

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 2: 2º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-2bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const passos = s => s.split(" ").map(x => [x[0], 1]);
  const G = (vs, as) => ({ vertices: vs.map(([id, rot, x, y]) => ({ id, rot, x, y })), arestas: as });
  const ESCOLA = G([["Po", "Portão", 60, 180], ["Pt", "Pátio", 230, 180], ["Ca", "Cantina", 230, 330], ["In", "Sala de Informática", 420, 70], ["Bi", "Biblioteca", 420, 290]],
    [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]);
  const ESCOLA_FECHADA = { vertices: ESCOLA.vertices, arestas: ESCOLA.arestas.filter(e => !(e[0] === "Pt" && e[1] === "In")) };
  const CIDADE = G([["M", "Mercado", 60, 190], ["B", "Banco", 200, 60], ["F", "Farmácia", 220, 320], ["I", "Igreja", 360, 60], ["Po", "Posto", 370, 300], ["H", "Hospital", 480, 180]],
    [["M", "B", 3], ["M", "F", 6], ["B", "F", 2], ["B", "I", 4], ["F", "Po", 3], ["I", "H", 3], ["Po", "H", 2], ["F", "H", 7]]);
  const AMIGOS = G([["A", "Ana", 200, 170], ["B", "Bia", 70, 60], ["C", "Caio", 70, 290], ["D", "Davi", 350, 170], ["E", "Eva", 470, 290]],
    [["A", "B", 1], ["A", "C", 1], ["A", "D", 1], ["B", "C", 1], ["D", "E", 1]]);
  const CURIO = G([["Es", "Escola", 60, 180], ["Pr", "Praça", 230, 60], ["Ig", "Igreja", 440, 60], ["Fe", "Feira", 230, 300], ["Ro", "Rodoviária", 450, 300]],
    [["Es", "Pr", 6], ["Pr", "Ig", 2], ["Pr", "Fe", 4], ["Es", "Fe", 9], ["Fe", "Ro", 5], ["Ig", "Ro", 8]]);
  const tab = (linhas, un) => `<table class="tab"><tr><th>Aresta</th><th>${un}</th></tr>${linhas.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</table>`;

  /* ---------- M1 · grafos ---------- */
  A.m1.gancho = { html: "<p>🚌 O motorista do ônibus escolar tem um mapa com as paradas e as ruas entre elas, todo rabiscado. Ele quer passar o mapa para o computador.</p><p>🤔 Como desenhar esse mapa de um jeito que o computador entenda? E como saber qual parada tem <b>mais ruas</b> chegando?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 2º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Uma <b>sequência de passos, em ordem, para resolver um problema</b> é um…", ["Algoritmo", "Aplicativo", "Wi-Fi"], "É um <b>algoritmo</b>."],
    ["O <b>Wi-Fi</b> é…", ["Internet sem fio", "Um cabo de rede", "Um aplicativo de mapa"], "Wi-Fi é a <b>internet sem fio</b>."],
    ["No aplicativo de mapa, cada esquina pode ser vista como…", ["Um ponto ligado às ruas", "Uma senha", "Uma pasta"], "O computador enxerga o mapa como <b>pontos ligados por linhas</b>: o grafo."])];
  A.m1.aplicar = [
    Object.assign({ tipo: "grafo_montar", titulo: "🛠️ Na vida real: a rede de computadores da sala", semPeso: true,
      enunciado: "<p>Na sala de informática, cada aparelho é um <b>vértice</b> e cada cabo é uma <b>aresta</b>. Todos os aparelhos estão ligados ao <b>Roteador</b>. Clique no Roteador e depois em cada aparelho para ligar.</p>",
      descricao: "Rede da sala: Roteador ligado a 3 computadores e à impressora", okMsg: "Rede montada! 🖧",
      explicacao: "5 vértices e 4 arestas. O Roteador tem grau 4: chegam 4 cabos nele." },
      G([["R", "Roteador", 260, 180], ["P1", "PC 1", 80, 70], ["P2", "PC 2", 80, 290], ["P3", "PC 3", 440, 70], ["Im", "Impressora", 440, 290]],
        [["R", "P1", 1], ["R", "P2", 1], ["R", "P3", 1], ["R", "Im", 1]])),
    VIDA(
      ["Na rede de computadores da escola, cada computador é um…", ["Vértice", "Peso", "Grau"], "Cada computador é um <b>vértice</b>; cada cabo ou sinal é uma aresta."],
      ["No mapa, “5 minutos” escrito na rua entre a escola e a praça é o…", ["Peso", "Vértice", "Grau"], "O número na aresta (distância, tempo ou preço) é o <b>peso</b>."],
      ["A praça liga-se a 3 lugares. Qual é o grau dela?", ["3", "1", "5"], "Grau = quantas arestas chegam ao vértice: <b>3</b>."])
  ];
  mais("m1", "desafio",
    Object.assign({ tipo: "grafo_montar", titulo: "🚏 As paradas do ônibus escolar",
      enunciado: `<p>Monte o grafo das paradas. Os pesos são os minutos de ônibus:</p>${tab([["Escola – Praça", "3"], ["Escola – Feira", "4"], ["Praça – Feira", "2"], ["Praça – Rodoviária", "5"], ["Feira – Rodoviária", "2"]], "Minutos")}`,
      descricao: "Grafo das paradas: Escola, Praça, Feira e Rodoviária", okMsg: "Mapa do ônibus pronto! 🚌",
      explicacao: "4 vértices e 5 arestas. A Praça e a Feira têm grau 3; a Escola e a Rodoviária, grau 2." },
      G([["Es", "Escola", 60, 180], ["Pr", "Praça", 260, 60], ["Fe", "Feira", 260, 300], ["Ro", "Rodoviária", 460, 180]],
        [["Es", "Pr", 3], ["Es", "Fe", 4], ["Pr", "Fe", 2], ["Pr", "Ro", 5], ["Fe", "Ro", 2]])));
  mais("m1", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória do grafo",
      enunciado: "<p>Vire duas cartas: ache a <b>parte do grafo</b> e o <b>exemplo</b> que combinam.</p>",
      pares: [{ a: "Vértice", b: "A escola, a praça, o mercado" }, { a: "Aresta", b: "A rua que liga a escola à praça" }, { a: "Peso", b: "5 minutos de caminhada" },
        { a: "Grau", b: "Quantas ruas chegam à praça" }, { a: "Grafo", b: "Pontos ligados por linhas" }, { a: "Vizinho", b: "Lugar ligado direto ao outro por uma aresta" }],
      porRodada: 3,
      explicacao: "Vértice = ponto · aresta = ligação · peso = número na aresta · grau = quantas arestas chegam." });

  /* ---------- M2 · caminho mais curto ---------- */
  A.m2.gancho = { html: "<p>🚑 A ambulância precisa chegar ao hospital o mais rápido possível. Existe uma rua que vai <b>direto</b> até lá, mas ela é longa e cheia de buracos.</p><p>🤔 O caminho com <b>menos ruas</b> é sempre o mais rápido? Como o aplicativo de mapa decide?</p>" };
  A.m2.aplicar = [
    { tipo: "sim_grafo", titulo: "🛠️ Na vida real: a ambulância até o hospital",
      enunciado: "<p>Cada número é o tempo em <b>minutos</b>. Saindo de <b>Casa</b>, clique nos lugares, um vizinho por vez, até o <b>Hospital</b>, pela <b>menor soma</b>.</p>",
      vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, ponte: { nome: "Ponte", ic: "🌉", x: 160, y: 45 }, feira: { nome: "Feira", ic: "🧺", x: 160, y: 195 },
        banco: { nome: "Banco", ic: "🏦", x: 270, y: 45 }, escola: { nome: "Escola", ic: "🏫", x: 270, y: 195 }, hospital: { nome: "Hospital", ic: "🏥", x: 360, y: 120 } },
      arestas: [["casa", "ponte", 4], ["casa", "feira", 2], ["feira", "ponte", 1], ["ponte", "banco", 2], ["feira", "escola", 5], ["banco", "hospital", 3], ["escola", "hospital", 2], ["casa", "hospital", 12]],
      inicio: "casa", fim: "hospital", menor: 8, solucao: ["casa", "feira", "ponte", "banco", "hospital"], unidade: "min",
      dicas: ["A rua direta tem uma aresta só, mas leva 12 minutos.", "Liste os caminhos e some: pela Feira e pela Ponte pode ser mais rápido do que ir direto para a Ponte."],
      explicacao: "Casa → Feira → Ponte → Banco → Hospital = 2 + 1 + 2 + 3 = 8 min. Mais paradas, menor soma. A rua direta leva 12." },
    VIDA(
      ["O caminho mais curto é o de…", ["Menor soma dos pesos", "Menos paradas", "Ruas mais largas"], "O mais curto é o de <b>menor soma</b>, e não o de menos paradas."],
      ["Para achar o caminho mais curto, depois de listar os caminhos, você…", ["Soma os pesos de cada um e escolhe o menor total", "Escolhe o primeiro que aparecer", "Escolhe o que tem menos vértices"], "1. liste; 2. <b>some os pesos</b>; 3. escolha o menor total."],
      ["Uma rua foi <b>interditada</b>. O que o aplicativo de mapa faz?", ["Procura de novo o caminho mais curto sem aquela rua", "Manda você pela rua fechada", "Desliga o mapa"], "Sem aquela aresta, o caminho mais curto pode mudar: o aplicativo calcula de novo."])
  ];
  mais("m2", "desafio",
    { tipo: "sim_grafo", titulo: "🚲 A entrega de bicicleta",
      enunciado: "<p>Cada número é o tempo em <b>minutos de bicicleta</b>. Saindo da <b>Loja</b>, chegue à casa do <b>Cliente</b> pela <b>menor soma</b>. Atenção: tem atalho escondido!</p>",
      vertices: { loja: { nome: "Loja", ic: "🏪", x: 45, y: 120 }, igreja: { nome: "Igreja", ic: "⛪", x: 160, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 160, y: 195 },
        banco: { nome: "Banco", ic: "🏦", x: 270, y: 45 }, posto: { nome: "Posto", ic: "⛽", x: 270, y: 195 }, cliente: { nome: "Cliente", ic: "🏠", x: 360, y: 120 } },
      arestas: [["loja", "igreja", 3], ["loja", "praca", 5], ["igreja", "praca", 1], ["igreja", "banco", 6], ["praca", "posto", 2], ["banco", "cliente", 2], ["posto", "cliente", 4], ["banco", "posto", 1]],
      inicio: "loja", fim: "cliente", menor: 9, solucao: ["loja", "igreja", "praca", "posto", "banco", "cliente"], unidade: "min",
      dicas: ["Do Posto, vale a pena ir ao Banco antes do Cliente?", "Compare: Loja → Praça (5) ou Loja → Igreja → Praça (3 + 1)?"],
      explicacao: "Loja → Igreja → Praça → Posto → Banco → Cliente = 3 + 1 + 2 + 1 + 2 = 9 min. Cinco arestas, e mesmo assim é o mais curto." });
  mais("m2", "turbo",
    Object.assign({ tipo: "grafo", titulo: "🔴 Do Banco até o Posto", de: "B", para: "Po", unidade: "minutos", descricao: "Grafo da cidade" }, CIDADE,
      { enunciado: "<p>Clique nos vértices, começando pelo <b>Banco</b>, até o <b>Posto</b>, pelo caminho mais curto.</p>",
        explicacao: "Banco → Farmácia → Posto = 2 + 3 = 5 minutos. Pela Igreja e pelo Hospital seriam 4 + 3 + 2 = 9." }));

  /* ---------- M3 · grafos de amizades ---------- */
  A.m3.gancho = { html: "<p>📱 A rede social mostrou para a Lara: “Pessoas que você talvez conheça: <b>Eva</b>”. A Lara nunca falou com a Eva!</p><p>🤔 Como a rede social escolheu a Eva? E aceitar qualquer sugestão é seguro?</p>" };
  A.m3.aplicar = [
    msg("🛠️ Na vida real: aceitar ou não a sugestão de amizade?", "📱 Rede social",
      [["S", "✅ Aceito"], ["N", "❌ Não aceito"]],
      "A rede social sugeriu várias pessoas. Pelo combinado de segurança, <b>só aceitar quem eu conheço de verdade</b>. O que você faz?",
      [["O seu primo Caio, que você conhece", "S", "Você conhece de verdade: pode aceitar."], ["“Gamer_Pro_99”, que você nunca viu", "N", "Não conhece: a sugestão não quer dizer que é de confiança."],
        ["A Bia, sua colega de turma", "S", "Conhece de verdade: pode aceitar."], ["Uma pessoa com 30 amigos em comum, mas que você nunca viu", "N", "Amigo em comum não quer dizer que a pessoa é de confiança."]],
      "Rede segura! 🔒", "A sugestão vem do grafo (amigos dos seus amigos), mas isso não quer dizer que a pessoa é de confiança. Só aceite quem você conhece de verdade."),
    VIDA(
      ["Na rede de amigos, quem tem <b>mais conexões</b> é quem tem…", ["O maior grau", "O menor grau", "O nome maior"], "Mais conexões = <b>maior grau</b>."],
      ["A Eva e a Ana não são amigas, mas as duas são amigas do Davi. O Davi é um…", ["Amigo em comum", "Peso", "Rota"], "O Davi é <b>amigo em comum</b>: elas estão a 2 passos de distância."],
      ["Por que a rede social sugere “pessoas que você talvez conheça”?", ["Procura no grafo os amigos dos seus amigos", "Escolhe pessoas ao acaso", "Porque são de confiança"], "Ela procura os <b>amigos dos seus amigos</b> no grafo."])
  ];
  mais("m3", "desafio",
    Object.assign({ tipo: "grafo", titulo: "🟡 Quantos passos do Caio até a Eva?", de: "C", para: "E", semPeso: true, descricao: "Grafo de amizades da turma" }, AMIGOS,
      { enunciado: "<p>Clique nas pessoas, um amigo por vez, do <b>Caio</b> até a <b>Eva</b>, pelo caminho com <b>menos passos</b>.</p>",
        explicacao: "Caio → Ana → Davi → Eva: 3 passos. Pela Bia seriam 4." }));
  mais("m3", "turbo",
    Object.assign({ tipo: "grafo_montar", titulo: "🔴 Monte a rede de amigos do 7º B", semPeso: true,
      enunciado: `<p>Monte o grafo. Cada amizade é uma aresta:</p>${tab([["Lia – Rui", "amigos"], ["Lia – Téo", "amigos"], ["Rui – Mel", "amigos"], ["Téo – Mel", "amigos"], ["Mel – Gui", "amigos"]], "")}<p>Depois pense: quem tem o maior grau?</p>`,
      descricao: "Grafo de amizades: Lia, Rui, Téo, Mel e Gui", okMsg: "Rede montada! 🤝",
      explicacao: "A Mel tem grau 3 (Rui, Téo e Gui): é quem tem mais conexões. O Gui tem grau 1." },
      G([["L", "Lia", 80, 180], ["R", "Rui", 240, 60], ["T", "Téo", 240, 300], ["M", "Mel", 400, 180], ["Gu", "Gui", 500, 300]],
        [["L", "R", 1], ["L", "T", 1], ["R", "M", 1], ["T", "M", 1], ["M", "Gu", 1]])));

  /* ---------- M4 · escolher a estrutura certa ---------- */
  A.m4.gancho = { html: "<p>📒 O Caio anotou os contatos da turma: os nomes numa folha, os telefones em outra e os aniversários numa terceira. Na hora de ligar para a Bia, se perdeu todo.</p><p>🤔 Qual seria o jeito certo de guardar esses dados? Uma lista, uma tabela ou um grafo?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: qual estrutura usar?", "🧠 O programador escolhe",
      [["L", "📝 Lista"], ["T", "🗂️ Tabela"], ["G", "🕸️ Grafo"]],
      "Para cada situação, qual estrutura de dados é a melhor? Use as três perguntas do 💡 Para começar.",
      [["A fila de músicas da festa, uma depois da outra", "L", "A ordem importa e cada item tem uma informação só."],
        ["O boletim: cada aluno com nome, nota e faltas", "T", "Cada item tem várias informações: tabela."],
        ["As ruas que ligam os bairros da cidade", "G", "O importante é o que está ligado a quê: grafo."],
        ["A agenda de contatos: nome, telefone e aniversário", "T", "Várias informações de cada contato: tabela."],
        ["A lista de compras do mercado", "L", "Itens em sequência, uma informação cada."]],
      "Programador esperto! 🧠", "Lista: sequência com uma informação. Tabela: várias informações por item. Grafo: ligações."),
    VIDA(
      ["A playlist de músicas é uma…", ["Lista", "Tabela", "Grafo"], "Uma música depois da outra: <b>lista</b>."],
      ["A agenda de contatos do celular é uma…", ["Tabela", "Lista", "Grafo"], "Cada contato tem nome, telefone e foto: <b>tabela</b>."],
      ["O aplicativo de mapa guarda as ruas num…", ["Grafo", "Lista de compras", "Boletim"], "Ruas ligando lugares: <b>grafo</b>."])
  ];
  mais("m4", "desafio",
    { tipo: "memoria", titulo: "🧩 Jogo da memória das estruturas",
      enunciado: "<p>Vire duas cartas: ache a <b>estrutura</b> e o <b>exemplo</b> que combinam.</p>",
      pares: [{ a: "📝 Lista", b: "Fila da cantina" }, { a: "🗂️ Tabela", b: "Boletim: aluno, nota e faltas" }, { a: "🕸️ Grafo", b: "Rede de amigos" },
        { a: "Registro", b: "A ficha (linha) de uma coisa na tabela" }, { a: "Campo", b: "Cada coluna da ficha: nome, nota…" }, { a: "Estrutura de dados", b: "O jeito de organizar os dados" }],
      porRodada: 3,
      explicacao: "Escolher a estrutura certa deixa o programa simples." });
  mais("m4", "turbo",
    msg("🔴 Mais difícil: qual estrutura?", "🧠 O programador escolhe", [["L", "📝 Lista"], ["T", "🗂️ Tabela"], ["G", "🕸️ Grafo"]],
      "Agora as situações são mais escondidas. Pense nas três perguntas.",
      [["Os cabos que ligam os computadores da escola uns aos outros", "G", "O que importa é o que está ligado a quê."], ["Os pedidos da lanchonete, na ordem em que chegaram", "L", "A ordem importa e cada pedido é uma informação."],
        ["Os dados dos alunos do passeio: nome, turma e telefone do responsável", "T", "Várias informações por aluno."], ["As linhas de ônibus e as paradas entre elas", "G", "Paradas ligadas por trechos."],
        ["A ordem de chegada da corrida", "L", "Sequência de nomes."]],
      "Mandou bem! 🧠", "Pense: importa a ordem? Tem várias informações? Importa o que está ligado?"));

  /* ---------- M5 · projeto: planejar ---------- */
  A.m5.gancho = { html: "<p>🗺️ Um aluno novo chegou na escola e passou o recreio inteiro procurando a Sala de Informática. Chegou atrasado e com vergonha.</p><p>🤔 Como a turma poderia ajudar todo aluno novo? E por onde começa um projeto, para não virar bagunça?</p>" };
  A.m5.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: planejar a horta da escola",
      enunciado: "<p>A turma quer fazer uma horta, mas as plantas sempre morrem porque ninguém rega. Coloque as etapas do plano <b>na ordem</b>.</p>",
      etapas: [{ ic: "❓", t: "Problema: as plantas morrem sem água" }, { ic: "💡", t: "Ideia: uma escala de quem rega cada dia" }, { ic: "📊", t: "Dados: quais plantas e quanta água cada uma precisa" },
        { ic: "👥", t: "Tarefas: quem faz o quê" }, { ic: "📅", t: "Prazo: a escala pronta até sexta" }],
      okMsg: "Plano pronto! 🌱",
      explicacao: "Problema → ideia → dados → tarefas → prazo: as 5 etapas de todo projeto." },
    VIDA(
      ["Na equipe, quem <b>junta os dados</b> (lugares e tempos)?", ["🔎 O pesquisador", "🧭 O organizador", "🧪 O testador"], "O <b>pesquisador</b> junta os dados."],
      ["Quem cuida do tempo e lembra a equipe das tarefas?", ["🧭 O organizador", "🛠️ O construtor", "🔎 O pesquisador"], "É o <b>organizador</b>."],
      ["Alguém da equipe faltou. O que a equipe faz?", ["Redivide a tarefa dele", "Desiste do projeto", "Culpa quem faltou"], "Se alguém faltar, a equipe <b>redivide</b> a tarefa."])
  ];
  mais("m5", "desafio",
    msg("👥 Quem faz o quê na equipe?", "👥 Equipe do Guia de Rotas", [["O", "🧭 Organizador"], ["P", "🔎 Pesquisador"], ["C", "🛠️ Construtor"], ["T", "🧪 Testador"]],
      "Para cada tarefa do projeto, qual papel cuida dela?",
      [["Medir quantos minutos leva do portão à cantina", "P", "Juntar dados é com o pesquisador."], ["Montar o grafo no portal", "C", "Montar é com o construtor."],
        ["Conferir se o caminho mais curto está certo", "T", "Conferir é com o testador."], ["Avisar: “faltam 10 minutos!”", "O", "Cuidar do tempo é com o organizador."]],
      "Equipe afinada! 👥", "Cada papel tem uma função, e todas são importantes."));
  mais("m5", "turbo",
    msg("🤝 Combinado de equipe ou não?", "👥 Equipe", [["S", "👍 É combinado"], ["N", "👎 Não é combinado"]],
      "Leia cada atitude. Ela segue os combinados de equipe?",
      [["Ouvir a ideia de todos antes de decidir", "S", "Ouvir todos é combinado."], ["Um faz tudo e os outros só olham", "N", "O trabalho é dividido com justiça."],
        ["Ajudar o colega que travou", "S", "Ajudar quem travou é combinado."], ["Dois querem o mesmo papel: a equipe conversa ou reveza", "S", "Decidir juntos ou revezar."],
        ["Brigar para ficar com o papel preferido", "N", "A equipe conversa e decide junto."]],
      "Equipe nota 10! 🤝", "Ouvir todos, dividir com justiça, ajudar quem travou e decidir juntos."));

  /* ---------- M6 · construir e apresentar ---------- */
  A.m6.gancho = { html: "<p>📲 O jogo preferido do Davi pediu <b>atualização</b> de novo, pela terceira vez no mês!</p><p>🤔 Os criadores do jogo erraram tanto assim? Ou existe um <b>ciclo</b> de construir, testar e melhorar que nunca acaba?</p>" };
  A.m6.aplicar = [
    Object.assign({ tipo: "grafo", titulo: "🛠️ Na vida real: teste o guia da Cantina até a Sala de Informática", de: "Ca", para: "In", unidade: "minutos", descricao: "Grafo do Guia de Rotas da Escola" }, ESCOLA,
      { enunciado: "<p>Você é o testador! Um aluno novo está na <b>Cantina</b> e quer ir à <b>Sala de Informática</b>. Clique nos vértices pelo caminho mais curto.</p>",
        explicacao: "Cantina → Pátio → Sala de Informática = 1 + 2 = 3 minutos. Pela Biblioteca seriam 4." }),
    VIDA(
      ["Qual é a ordem do ciclo do projeto?", ["Construir, testar, ouvir, melhorar", "Melhorar, construir, apresentar, testar", "Testar, apresentar, construir, ouvir"], "🛠️ construir → 🧪 testar → 💬 ouvir → 🔁 melhorar."],
      ["Cada volta do ciclo gera uma nova…", ["Versão", "Rota", "Aresta"], "Cada volta gera uma <b>versão</b> melhor: é por isso que os aplicativos recebem atualizações."],
      ["Na apresentação, a equipe conta primeiro…", ["Qual era o problema", "O que aprendeu", "Como usar"], "1. o problema; 2. o que fizemos; 3. como usar; 4. o que aprendemos."])
  ];
  mais("m6", "desafio",
    { tipo: "rota", titulo: "🔁 O ciclo de melhorar o guia",
      enunciado: "<p>A primeira versão do guia ficou pronta. Coloque o ciclo de melhoria <b>na ordem</b>.</p>",
      etapas: [{ ic: "🛠️", t: "Construir: montar o grafo com os dados" }, { ic: "🧪", t: "Testar: conferir os caminhos mais curtos" }, { ic: "💬", t: "Ouvir: pedir a opinião de quem vai usar" }, { ic: "🔁", t: "Melhorar: corrigir e fazer a versão 2" }],
      okMsg: "Versão 2 a caminho! 🔁",
      explicacao: "Cada volta do ciclo gera uma versão melhor." });
  mais("m6", "turbo",
    Object.assign({ tipo: "grafo", titulo: "🔴 Versão 2: corredor em reforma", de: "Ca", para: "In", unidade: "minutos", descricao: "Grafo da escola sem o corredor Pátio–Informática" }, ESCOLA_FECHADA,
      { enunciado: "<p>O corredor <b>Pátio–Sala de Informática</b> entrou em reforma (sumiu do grafo). Teste a versão 2: da <b>Cantina</b> até a <b>Sala de Informática</b>.</p>",
        explicacao: "Cantina → Pátio → Biblioteca → Sala de Informática = 1 + 2 + 1 = 4 minutos." }));

  /* ---------- M7 · mapa de Curionópolis ---------- */
  A.m7.gancho = { html: "<p>🧳 Um visitante desceu na rodoviária de Curionópolis e perguntou: “Qual é o caminho mais rápido até a feira?”. Cada pessoa ensinou um caminho diferente!</p><p>🤔 Como transformar a cidade num grafo para responder sem dúvida?</p>" };
  A.m7.aplicar = [
    Object.assign({ tipo: "grafo", titulo: "🛠️ Na vida real: da Igreja até a Feira", de: "Ig", para: "Fe", unidade: "minutos", descricao: "Grafo de lugares de Curionópolis (tempos inventados)" }, CURIO,
      { enunciado: "<p>Depois da missa, a família quer ir à <b>Feira</b>. Começando pela <b>Igreja</b>, clique nos vértices pelo caminho mais curto. (Os tempos são inventados para o exercício.)</p>",
        explicacao: "Igreja → Praça → Feira = 2 + 4 = 6 minutos. Pela Rodoviária seriam 8 + 5 = 13." }),
    VIDA(
      ["Para montar o grafo de um lugar, o primeiro passo é…", ["Escolher os lugares (cada um vira um vértice)", "Medir os tempos", "Achar o caminho mais curto"], "1. escolher os lugares; 2. ver o que liga; 3. medir; 4. usar."],
      ["No grafo da cidade, o tempo de caminhada de uma rua vira o…", ["Peso", "Vértice", "Grau"], "O tempo ou a distância vira o <b>peso</b>."],
      ["O mototáxi escolhe o caminho mais rápido. Ele procura o caminho de…", ["Menor soma", "Mais ruas", "Menos curvas"], "O mais rápido é o de <b>menor soma</b>."])
  ];
  mais("m7", "desafio",
    Object.assign({ tipo: "grafo_montar", titulo: "🏘️ Monte o grafo da Vila Esperança",
      enunciado: `<p>A Vila Esperança é um lugar inventado. Monte o grafo com os tempos de caminhada:</p>${tab([["Posto – Escola", "3"], ["Escola – Mercado", "4"], ["Posto – Praça", "6"], ["Praça – Mercado", "2"], ["Escola – Praça", "5"]], "Minutos")}`,
      descricao: "Grafo da Vila Esperança: Posto, Escola, Mercado e Praça", okMsg: "Vila no mapa! 🏘️",
      explicacao: "4 vértices e 5 arestas. Escola e Praça têm grau 3." },
      G([["Po", "Posto", 60, 180], ["Es", "Escola", 260, 60], ["Pr", "Praça", 260, 300], ["Me", "Mercado", 460, 180]],
        [["Po", "Es", 3], ["Es", "Me", 4], ["Po", "Pr", 6], ["Pr", "Me", 2], ["Es", "Pr", 5]])));
  mais("m7", "turbo",
    { tipo: "sim_grafo", titulo: "🛺 O mototáxi na Vila Esperança",
      enunciado: "<p>O mototáxi está no <b>Posto</b> e o passageiro quer ir ao <b>Mercado</b>. Cada número é o tempo em minutos. Escolha a <b>menor soma</b>.</p>",
      vertices: { posto: { nome: "Posto", ic: "⛽", x: 45, y: 120 }, escola: { nome: "Escola", ic: "🏫", x: 200, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 200, y: 195 }, mercado: { nome: "Mercado", ic: "🛒", x: 360, y: 120 } },
      arestas: [["posto", "escola", 3], ["escola", "mercado", 4], ["posto", "praca", 6], ["praca", "mercado", 2], ["escola", "praca", 5]],
      inicio: "posto", fim: "mercado", menor: 7, solucao: ["posto", "escola", "mercado"], unidade: "min",
      dicas: ["Some: pela Escola (3 + 4) e pela Praça (6 + 2)."],
      explicacao: "Posto → Escola → Mercado = 3 + 4 = 7 min. Pela Praça seriam 8; pela Escola e pela Praça, 10." });

  /* ---------- M8 · labirintos ---------- */
  A.m8.gancho = { html: "<p>🌽 Na fazenda, fizeram um <b>labirinto de milho</b> para as crianças. O Gui entrou, virou para um lado, virou para o outro… e caiu num beco sem saída três vezes!</p><p>🤔 Existe um jeito esperto de sair de qualquer labirinto? Como os computadores fazem isso?</p>" };
  A.m8.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: sair do labirinto de milho", icone: "🧒",
      enunciado: "<p>Leve o Gui 🧒 até a saída ⭐ do labirinto de milho. Se cair num beco sem saída, <b>volte</b> até o último cruzamento e tente outro caminho (tentar e voltar).</p>",
      grade: ["R.#..", ".##.#", "....#", "#.#..", "#.#.*"],
      solucao: passos("D D R R R D R D"),
      dicas: ["Desça pela coluna A até a linha 3.", "Na linha 3, vá para a direita até a coluna D e desça."],
      explicacao: "Um caminho certo: ⬇️ ⬇️ ➡️ ➡️ ➡️ ⬇️ ➡️ ⬇️. Os outros corredores (como B4–B5 e D1–E1) são becos sem saída." },
    VIDA(
      ["No grafo do labirinto, um <b>beco sem saída</b> é um vértice com grau…", ["1", "3 ou mais", "0"], "Beco sem saída: só uma aresta chega nele, <b>grau 1</b>."],
      ["Na estratégia <b>tentar e voltar</b>, se você cair num beco sem saída…", ["Volta até o último cruzamento e tenta outro caminho", "Para e espera", "Começa tudo do zero"], "Volta ao último <b>cruzamento</b> e tenta outro caminho."],
      ["“Mão na parede” funciona nos labirintos em que…", ["Todas as paredes estão ligadas umas às outras", "Não tem parede", "Tem só um corredor"], "Funciona quando <b>todas as paredes estão ligadas</b>."])
  ];
  mais("m8", "desafio",
    { tipo: "robo", titulo: "🟡 O labirinto do castelo", icone: "🤴",
      enunciado: "<p>Leve o príncipe até a saída ⭐. Este labirinto tem mais de um caminho e vários becos.</p>",
      grade: ["R..#..", "#.##.#", "#....#", "##.#..", "...#.#", ".#...*"],
      solucao: passos("R D D R R R D D D R"),
      dicas: ["Desça pela coluna B até a linha 3.", "Na linha 3 há dois jeitos de descer: teste e volte se precisar."],
      explicacao: "Um caminho: ➡️ ⬇️ ⬇️ ➡️ ➡️ ➡️ ⬇️ ⬇️ ⬇️ ➡️. Também dá para descer pela coluna C: um labirinto pode ter mais de um caminho." });
  mais("m8", "turbo",
    { tipo: "robo", titulo: "🔴 O labirinto da volta comprida", icone: "🐁",
      enunciado: "<p>A saída ⭐ parece pertinho, mas a parede não deixa passar direto! Encontre o caminho, tentando e voltando.</p>",
      grade: ["R.....", "####.#", "*..#..", "#.##.#", "#....#"],
      solucao: passos("R R R R D D D D L L L U U L"),
      dicas: ["O único jeito de descer da linha 1 é pela coluna E.", "Lá embaixo, volte para a esquerda e suba pela coluna B."],
      explicacao: "➡️ ➡️ ➡️ ➡️ ⬇️ ⬇️ ⬇️ ⬇️ ⬅️ ⬅️ ⬅️ ⬆️ ⬆️ ⬅️: às vezes o caminho certo dá uma volta enorme." });
})();
