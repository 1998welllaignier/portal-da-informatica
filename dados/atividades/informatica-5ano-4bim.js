/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 5º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-5ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "baloes", titulo: "Aquecimento: estoure os balões", quantidade: 8,
        enunciado: "<p>Use o <strong>mouse</strong> (um periférico de entrada, é hardware!) para estourar os balões. Eles mudam de lugar. 🎈</p>",
        explicacao: "O mouse é <strong>hardware</strong>: uma peça que dá para tocar. O jogo que apareceu na tela é <strong>software</strong>." },
      { tipo: "mensagens", titulo: "Hardware ou software?", app: "🧐 O que é isso?",
        botoes: [{ id: "H", rot: "🔧 Hardware" }, { id: "S", rot: "💿 Software" }],
        enunciado: "<p>Para cada item, escolha: é <strong>hardware</strong> (peça que dá para tocar) ou <strong>software</strong> (programa)?</p>",
        itens: [
          { de: "", t: "🖱️ Mouse", c: "H" },
          { de: "", t: "🪟 Windows", c: "S", why: "É o sistema operacional." },
          { de: "", t: "💾 Pen drive", c: "H" },
          { de: "", t: "🎮 Um jogo de corrida", c: "S" },
          { de: "", t: "⌨️ Teclado", c: "H" },
          { de: "", t: "🌐 Navegador de internet", c: "S" }],
        okMsg: "Você separou hardware e software!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Cada parte no seu lugar: E, S, P ou A",
        categorias: [
          { id: "E", rot: "Entrada", ic: "⌨️", desc: "leva informações para dentro" },
          { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra ou toca o resultado" },
          { id: "P", rot: "Processamento", ic: "🧠", desc: "faz as contas" },
          { id: "A", rot: "Armazenamento", ic: "💾", desc: "guarda os arquivos" }],
        itens: [{ t: "Teclado", ic: "⌨️", c: "E" }, { t: "Monitor", ic: "🖥️", c: "S" }, { t: "Processador", ic: "🧠", c: "P" }, { t: "Pen drive", ic: "💾", c: "A" },
          { t: "Mouse", ic: "🖱️", c: "E" }, { t: "Caixa de som", ic: "🔊", c: "S" }, { t: "SSD", ic: "💽", c: "A" }, { t: "Microfone", ic: "🎙️", c: "E" }],
        dicas: ["A informação entra, sai, é processada ou fica guardada?"],
        explicacao: "Entrada: teclado, mouse e microfone. Saída: monitor e caixa de som. Processamento: o processador. Armazenamento: pen drive e SSD." },
      { tipo: "classificar", modo: "tabela", titulo: "Onde o arquivo está guardado?", colunaItem: "Arquivo", colunaResp: "A ou N",
        categorias: [{ id: "A", rot: "No aparelho" }, { id: "N", rot: "Na nuvem" }],
        itens: [
          { t: "Foto na galeria do celular, sem internet", c: "A" }, { t: "Trabalho salvo no pen drive", c: "A" },
          { t: "Vídeo assistido no YouTube", c: "N", why: "O vídeo fica nos computadores da empresa e chega pela internet." },
          { t: "Arquivo guardado no Google Drive", c: "N" }, { t: "Jogo instalado no computador da escola", c: "A" }],
        explicacao: "No aparelho: fica no próprio computador, celular ou pen drive. Na nuvem: fica em computadores de empresas e você acessa pela internet." },
      { tipo: "tabela", titulo: "Digite aqui no portal",
        enunciado: "<p>Digite nas caixas abaixo. Use as letras do teclado e a barra de espaço para separar as palavras.</p>",
        colunas: ["O que digitar", "Digite aqui"],
        linhas: [
          ["A frase: <strong>Meu nome é ______ e o sistema operacional deste computador é o Windows.</strong> (troque o ______ pelo seu nome)", { re: "meu\\s+nome\\s+(é|e)\\s+.+windows", w: 40, ph: "Meu nome é…", exemplo: "Meu nome é Ana e o sistema operacional deste computador é o Windows.", dica: "A frase começa com “Meu nome é” e termina com “Windows”." }],
          ["Uma peça de <strong>entrada</strong> (leva informação <strong>para dentro</strong> do computador)", { re: "teclado|mouse|microfone|webcam|c[aâ]mera|scanner|touchpad|joystick|controle", w: 16, ph: "Ex.: …", exemplo: "teclado", dica: "Entrada é a peça que leva informação <strong>para dentro</strong>: teclado, mouse, microfone ou câmera." }],
          ["Uma peça de <strong>saída</strong> (mostra ou entrega o resultado)", { re: "monitor|tela|impressora|caixa de som|caixinha de som|fone|projetor", w: 16, ph: "Ex.: …", exemplo: "monitor", dica: "Saída é a peça que mostra ou entrega o resultado: monitor, impressora, caixa de som ou fone." }]] }
    ],
    desafio: [
      { tipo: "escolha", titulo: "Por que o computador precisa de um sistema operacional? O que aconteceria sem ele?",
        perguntas: [
          { p: "O que o sistema operacional faz?", opcoes: ["É o programa principal: liga tudo e deixa os outros programas abrirem", "Só serve para jogar", "É uma peça que fica dentro do mouse"], certo: 0 },
          { p: "O que aconteceria sem ele?", opcoes: ["O computador não abriria nem o navegador", "O computador ficaria mais rápido", "Nada mudaria"], certo: 0 },
          { p: "Qual destes é um sistema operacional?", opcoes: ["Windows", "Navegador", "Teclado"], certo: 0 }],
        explicacao: "O sistema operacional é o programa principal: liga tudo e deixa os outros programas abrirem. Sem ele, o computador não abriria nem o navegador." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "O computador da escola quebrou!",
        perguntas: [
          { p: "O trabalho salvo só nele se perde?", opcoes: ["Pode se perder, porque estava guardado só naquele aparelho", "Não, ele vai para a nuvem sozinho"], certo: 0 },
          { p: "E o trabalho salvo na nuvem?", opcoes: ["Continua guardado: dá para abrir em outro aparelho com internet", "Também se perde"], certo: 0, why: "Na nuvem, o arquivo fica nos computadores da empresa, não no aparelho quebrado." }] }
    ],
    vf: [
      { v: true }, { v: true },
      { v: false, corrigir: { trecho: "no céu", opcoes: ["no céu", "em computadores de empresas"], certo: "em computadores de empresas" }, why: "Os arquivos ficam em prédios cheios de computadores." },
      { v: true },
      { v: false, corrigir: { trecho: "funcionam normalmente", opcoes: ["funcionam normalmente", "não funcionam"], certo: "não funcionam" } }
    ]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "sim_bolha", titulo: "Arrume a lista da chamada em ordem alfabética",
        enunciado: "<p>Clique no botão <strong>⇄</strong> entre dois nomes para trocar os dois de lugar. Deixe a lista em <strong>ordem alfabética</strong> (A, B, C…).</p>",
        valores: ["Pedro", "Ana", "Luíza", "Carlos", "Bia"],
        explicacao: "Trocar vizinhos até tudo ficar em ordem é um jeito que o computador usa para <strong>ordenar listas</strong>." }
    ],
    basico: [
      { tipo: "lista_ops", titulo: "A lista de compras", nome: "COMPRAS",
        inicial: ["arroz", "feijão", "leite", "pão"],
        passos: [
          { tipo: "pergunta", instr: "Qual item está na posição 3?", r: "leite" },
          { tipo: "inserir", instr: "Insira ovos no fim da lista.", esperado: ["arroz", "feijão", "leite", "pão", "ovos"], dica: "Digite ovos e clique em Inserir no fim." },
          { tipo: "remover", instr: "Agora remova feijão.", esperado: ["arroz", "leite", "pão", "ovos"], dica: "Clique em “remover” ao lado de feijão." },
          { tipo: "pergunta", instr: "Quantos itens a lista tem agora?", r: "4", num: true }],
        explicacao: "Inserir coloca um item novo; remover tira um item. Depois de remover feijão, os itens de trás andam uma posição para a frente." },
      { tipo: "lista_ops", titulo: "A fila da merenda", nome: "FILA",
        inicial: ["Ana", "Bia", "Caio", "Duda", "Enzo"],
        passos: [
          { tipo: "pergunta", instr: "Quem está na posição 3?", r: "Caio" },
          { tipo: "remover", instr: "Caio foi ao banheiro e saiu da fila: remova Caio.", esperado: ["Ana", "Bia", "Duda", "Enzo"] },
          { tipo: "pergunta", instr: "Quem fica na posição 3 agora?", r: "Duda" }],
        explicacao: "Quando Caio sai, Duda anda uma posição e fica em 3º lugar." },
      { tipo: "tabela", titulo: "O grafo das amizades",
        enunciado: "<p>Amizades: <strong>Ana — Bia · Ana — Caio · Bia — Duda · Caio — Duda · Duda — Enzo</strong>. Imagine o grafo: cada nome é um círculo (vértice) e cada amizade é uma linha (aresta) ligando dois nomes. Conte quantas linhas saem de cada nome e responda:</p>",
        linhas: [["Quem tem mais amigos no grafo?", { r: "Duda", w: 10 }], ["Quantos amigos essa pessoa tem?", { r: "3", tipo: "num", w: 4 }], ["Quem tem só um amigo?", { r: "Enzo", w: 10 }]],
        dicas: ["Conte quantas linhas saem de cada nome."],
        explicacao: "Duda tem 3 amigos (Bia, Caio e Enzo). Enzo tem só 1 amigo (Duda)." },
      { tipo: "ordenar", titulo: "Coloque as brincadeiras em ordem alfabética",
        enunciado: "<p>Ordem alfabética é a ordem do alfabeto: A, B, C, D… Olhe a <strong>primeira letra</strong> de cada brincadeira e arraste (ou use as setas ▲▼) até a lista ficar em ordem.</p>",
        itens: ["Amarelinha", "Cabo de guerra", "Esconde-esconde", "Pega-pega", "Queimada"],
        dicas: ["Qual brincadeira começa com a letra que vem primeiro no alfabeto?", "A, C, E, P, Q: é a ordem das primeiras letras."],
        explicacao: "Amarelinha (A) → Cabo de guerra (C) → Esconde-esconde (E) → Pega-pega (P) → Queimada (Q). Os contatos do celular também ficam em ordem alfabética: é por isso que a gente acha um nome rapidinho." }
    ],
    desafio: [
      { tipo: "grafo", titulo: "As estradas da nossa região: de Parauapebas a Marabá", semPeso: true,
        enunciado: "<p>Estradas: <strong>Parauapebas — Curionópolis · Curionópolis — Eldorado dos Carajás · Eldorado dos Carajás — Marabá</strong>. Clique nas cidades para traçar o caminho, começando em Parauapebas.</p>",
        vertices: [{ id: "Pa", rot: "Parauapebas", x: 60, y: 230 }, { id: "Cu", rot: "Curionópolis", x: 200, y: 150 }, { id: "El", rot: "Eldorado dos Carajás", x: 330, y: 230 }, { id: "Ma", rot: "Marabá", x: 460, y: 90 }],
        arestas: [["Pa", "Cu", 1], ["Cu", "El", 1], ["El", "Ma", 1]], de: "Pa", para: "Ma", largura: 520, altura: 300,
        explicacao: "Para ir de Parauapebas a Marabá, usando só essas estradas, é preciso passar por Curionópolis e por Eldorado dos Carajás." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "2 coisas que viram lista e 2 coisas que viram grafo",
        campos: [{ rot: "Viram lista:", linhas: 1 }, { rot: "Viram grafo:", linhas: 1 }],
        criterios: ["Nas listas, os itens ficam um depois do outro.", "Nos grafos, as coisas estão ligadas entre si."],
        exemplo: "Lista: a playlist e a chamada da turma. Grafo: os amigos de uma rede social e as ruas do bairro.",
        conferir: { minPalavras: 2, diferentes: "todos", msg: "Exemplos registrados! O professor pode ler no painel." } }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "tirar", opcoes: ["tirar", "colocar"], certo: "colocar" }, why: "Inserir é colocar; remover é tirar." },
      { v: true }, { v: true },
      { v: false, corrigir: { trecho: "Z", opcoes: ["Z", "A"], certo: "A" } }
    ]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "lampadas", titulo: "Acenda a lâmpada: E, OU e NÃO",
        enunciado: "<p>Clique nos interruptores <strong>A</strong> e <strong>B</strong> para ligar e desligar. Quando a lâmpada estiver como a fase pede, clique em <strong>Pronto!</strong></p>",
        fases: [
          { op: "E", pede: "No circuito **E**, a lâmpada só acende se **A E B** estiverem ligados. **Acenda a lâmpada!**", quer: (a, b) => a && b, why: "No E, as duas coisas precisam ser verdade." },
          { op: "OU", pede: "No circuito **OU**, basta um. **Acenda a lâmpada ligando só UM interruptor.**", quer: (a, b) => a !== b, dica: "Deixe só um interruptor ligado.", why: "No OU, basta uma ser verdade." },
          { op: "E", pede: "Circuito **E** de novo: deixe **um interruptor ligado**, mas a lâmpada **apagada**.", quer: (a, b) => a !== b, dica: "No E, com só um ligado, a lâmpada não acende.", why: "No E, só um não basta!" },
          { op: "NAO", pede: "Circuito **NÃO**: ele inverte. A lâmpada acende quando A está desligado. **Deixe a lâmpada apagada.**", quer: a => a, dica: "Para apagar, ligue o A.", why: "O NÃO troca: ligado vira apagado." }],
        explicacao: "<strong>E</strong>: as duas precisam ser verdade. <strong>OU</strong>: basta uma. <strong>NÃO</strong>: inverte." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Verdadeira ou falsa?", colunaItem: "Sentença", colunaResp: "V ou F",
        categorias: [{ id: "V", rot: "Verdadeira" }, { id: "F", rot: "Falsa" }],
        itens: [
          { t: "O sol é quente.", c: "V" }, { t: "O sol NÃO é quente.", c: "F", why: "O NÃO inverte: V vira F." },
          { t: "2 + 2 = 4 E 3 + 3 = 7", c: "F", why: "Com E, as duas partes precisam ser V, e 3 + 3 = 7 é F." },
          { t: "2 + 2 = 4 OU 3 + 3 = 7", c: "V", why: "Com OU, basta uma parte ser V." },
          { t: "Curionópolis fica no Pará E o Pará fica no Brasil.", c: "V" }],
        dicas: ["E: as duas partes precisam ser verdadeiras. OU: basta uma."] },
      { tipo: "classificar", modo: "tabela", titulo: "Regra da recreação: terminou a tarefa E guardou o material", colunaItem: "Aluno", colunaResp: "Pode jogar?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [{ t: "Léo — terminou: Sim · guardou: Não", c: "N" }, { t: "Mia — terminou: Sim · guardou: Sim", c: "S" }, { t: "Davi — terminou: Não · guardou: Sim", c: "N" }],
        explicacao: "Com E, só pode jogar quem fez as duas coisas: Mia." },
      { tipo: "aberta", titulo: "Complete os algoritmos de escolha",
        campos: [{ rot: "SE estiver com fome, ENTÃO… SENÃO…", linhas: 1 }, { rot: "SE o celular estiver com pouca bateria, ENTÃO… SENÃO…", linhas: 1 }, { rot: "SE eu terminar a tarefa, ENTÃO… SENÃO…", linhas: 1 }],
        criterios: ["Cada linha tem uma ação para o ENTÃO e outra para o SENÃO."],
        enunciado: "<p>Escreva o que acontece no <strong>ENTÃO</strong> e no <strong>SENÃO</strong>, usando essas duas palavras.</p>",
        conferir: { minPalavras: 4, porCampo: [["senao"], ["senao"], ["senao"]], msg: "Algoritmos de escolha completos!" },
        exemplo: "SE estiver com fome, ENTÃO como um lanche, SENÃO continuo brincando." },
      { tipo: "pintura", titulo: "Siga o algoritmo dos círculos", forma: "circulo", n: 4, pretos: [2, 4],
        regra: "<strong>REPITA 4 vezes:</strong> desenhe um círculo. Depois, para cada círculo: <strong>SE</strong> for o 2º <strong>OU</strong> o 4º, <strong>ENTÃO</strong> pinte de preto, <strong>SENÃO</strong> deixe branco.",
        explicacao: "Com OU, basta ser o 2º ou o 4º para pintar." },
      { tipo: "pintura", titulo: "Agora é com você: um algoritmo novo", forma: "circulo", n: 5, pretos: [1, 5],
        regra: "<strong>REPITA 5 vezes:</strong> desenhe um círculo. Depois, para cada círculo: <strong>SE</strong> for o 1º <strong>OU</strong> o último, <strong>ENTÃO</strong> pinte de preto, <strong>SENÃO</strong> deixe branco.",
        dicas: ["Com 5 círculos, o último é o 5º."],
        explicacao: "Só o 1º e o 5º (o último) ficam pretos. Mudando a condição do SE, o mesmo algoritmo faz um desenho diferente." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Complete a tabela do E e do OU",
        colunas: ["Frase A", "Frase B", "A E B", "A OU B"],
        linhas: [
          ["V", "V", { op: ["V", "F"], r: "V" }, { op: ["V", "F"], r: "V" }],
          ["V", "F", { op: ["V", "F"], r: "F" }, { op: ["V", "F"], r: "V" }],
          ["F", "V", { op: ["V", "F"], r: "F" }, { op: ["V", "F"], r: "V" }],
          ["F", "F", { op: ["V", "F"], r: "F" }, { op: ["V", "F"], r: "F" }]],
        explicacao: "E só é V quando as duas são V. OU só é F quando as duas são F." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "Crie frases sobre você com NÃO, E e OU, e diga se cada uma é V ou F",
        campos: [{ rot: "Frase com NÃO (V ou F?)", linhas: 1 }, { rot: "Frase com E (V ou F?)", linhas: 1 }, { rot: "Frase com OU (V ou F?)", linhas: 1 }],
        criterios: ["Cada frase usa a palavra pedida.", "Disse se é V ou F."],
        conferir: { minPalavras: 3, porCampo: [["nao"], [" e "], [" ou "]], vf: true, msg: "Frases com NÃO, E e OU criadas e avaliadas!" },
        exemplo: "Eu NÃO gosto de chuva (V). Eu tenho 10 anos E estudo no 5º ano (V). Eu moro em Belém OU em Curionópolis (V)." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "basta uma parte ser verdadeira", opcoes: ["basta uma parte ser verdadeira", "as duas partes precisam ser verdadeiras"], certo: "as duas partes precisam ser verdadeiras" } },
      { v: true }, { v: true },
      { v: false, corrigir: { trecho: "nunca fazem escolhas", opcoes: ["nunca fazem escolhas", "fazem escolhas com SE… ENTÃO… SENÃO"], certo: "fazem escolhas com SE… ENTÃO… SENÃO" } }
    ]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "mensagens", titulo: "Chegou no grupo da família: confiar ou desconfiar?", app: "💬 Grupo da Família",
        botoes: [{ id: "D", rot: "🚩 Desconfiar" }, { id: "C", rot: "✅ Confiável" }],
        enunciado: "<p>Leia cada mensagem e decida. Pense: <strong>quem escreveu?</strong> Tem <strong>fonte</strong>? Pede para espalhar com pressa?</p>",
        itens: [
          { de: "Tio Zé", t: "URGENTE!!! Compartilhe com 10 pessoas senão seu celular vai travar amanhã!!!", c: "D", why: "Pressa, muitas exclamações e sem autor: sinais de fake news." },
          { de: "Escola JK", t: "Lembrete: a reunião de pais será quinta, às 18h, na escola. Mais informações na secretaria.", c: "C", why: "Diz quem enviou, quando e onde confirmar." },
          { de: "Desconhecido", t: "Cientistas descobriram que comer chocolate deixa a pessoa invisível. Repassem!", c: "D", why: "Não tem fonte e é impossível." },
          { de: "Prima Ana", t: "Vi no site oficial da prefeitura: a vacinação vai até sexta no posto do centro.", c: "C", why: "Cita uma fonte oficial que dá para conferir." }],
        okMsg: "Você sabe desconfiar! Antes de compartilhar, confira quem escreveu e a fonte." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Confiável ou não?", colunaItem: "Mensagem", colunaResp: "C ou N",
        categorias: [{ id: "C", rot: "Confiável" }, { id: "N", rot: "Não confiável" }],
        itens: [
          { t: "“URGENTE!!! Amanhã não vai ter aula em nenhuma escola do Brasil. Compartilhe!”", c: "N", why: "“URGENTE!!!” e “compartilhe” são sinais de alerta." },
          { t: "Aviso no site da prefeitura sobre a vacinação, com data e horário", c: "C" },
          { t: "Vídeo que diz que comer chocolate faz crescer 10 centímetros em uma semana", c: "N", why: "Exagerado demais para ser verdade." },
          { t: "Informação do livro didático da escola", c: "C" }] },
      { tipo: "aberta", titulo: "Maria fez um desenho lindo de uma árvore. Você quer usar no seu cartaz.",
        campos: [{ rot: "O que você precisa fazer?", linhas: 2 }, { rot: "Escreva o crédito: Desenho: ____", linhas: 1 }],
        criterios: ["Pedi autorização à Maria.", "Escrevi o crédito com o nome dela."],
        conferir: { porCampo: [["autoriza", "permiss", "pedir", "peco", "pergunt", "deixa"], ["maria"]], msg: "Isso mesmo: pedir autorização e dar o crédito!" },
        exemplo: "Peço autorização para a Maria e escrevo o crédito no cartaz: Desenho: Maria." },
      { tipo: "classificar", modo: "tabela", titulo: "Ligue cada problema à tecnologia certa", colunaItem: "Problema", colunaResp: "Tecnologia",
        categorias: [{ id: "A", rot: "Programa de desenho" }, { id: "B", rot: "Bloco de Notas" }, { id: "C", rot: "Calculadora" }, { id: "D", rot: "Chamada de vídeo" }],
        itens: [{ t: "Fazer uma conta difícil bem rápido", c: "C" }, { t: "Falar com a avó que mora em outra cidade", c: "D" }, { t: "Escrever um texto no computador", c: "B" }, { t: "Fazer um desenho no computador", c: "A" }] },
      { tipo: "cartaz", titulo: "Monte aqui o cartaz Eu navego com cuidado", tituloCartaz: "Eu navego com cuidado",
        campos: [
          { rot: "Escreva no cartaz 1 cuidado que você tem na internet (está no 💡 Para começar):", ph: "Ex.: confiro quem escreveu antes de acreditar", gab: "conferir o autor e a fonte, desconfiar de mensagem urgente, dar crédito…", exemplo: "Eu confiro quem escreveu antes de acreditar.", re: "confi|fonte|autor|desconfi|compartilh|urgente|cr[eé]dito|adulto|verdade|pergunt|cuidado|link|senha|plágio|plagio", dica: "Releia o <strong>💡 Para começar</strong>: conferir quem escreveu, desconfiar de mensagem urgente, dar crédito…" },
          { rot: "Embaixo, escreva <strong>Criado por:</strong> e o seu primeiro nome:", ph: "Criado por: …", gab: "Criado por: (seu primeiro nome)", exemplo: "Criado por: Ana", re: "criado\\s+por\\s*:?\\s*\\S+", dica: "Escreva <strong>Criado por:</strong> e, depois, o seu primeiro nome." }],
        okMsg: "Cartaz pronto e conferido! Ficou registrado para o professor." }
    ],
    desafio: [
      { tipo: "aberta", titulo: "Escolha 2 profissões: qual tecnologia cada uma usa e como ajuda?",
        campos: [{ rot: "Profissão 1 — tecnologia — como ajuda", linhas: 2 }, { rot: "Profissão 2 — tecnologia — como ajuda", linhas: 2 }],
        criterios: ["Disse a profissão, a tecnologia e como ela ajuda."], exemplo: "Agricultor — previsão do tempo no celular — ajuda a saber o melhor dia para plantar.",
        conferir: { minPalavras: 5, diferentes: "todos", msg: "Profissões e tecnologias registradas! O professor pode ler no painel." } }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "Chegou uma notícia estranha no grupo da família: em que ordem você confere?",
        itens: ["Leio com calma e vejo se parece exagerada", "Procuro quem escreveu e a data", "Procuro se ela aparece em outros sites sérios", "Só compartilho se for confiável"],
        alternativas: [[1, 0, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [2, 1, 0, 3], [2, 0, 1, 3]],
        explicacao: "A ordem das três conferências pode variar, mas compartilhar vem sempre por último, e só se for confiável." },
      { tipo: "aberta", titulo: "Escreva os seus 3 passos antes de compartilhar", campos: [{ rot: "1.", linhas: 1 }, { rot: "2.", linhas: 1 }, { rot: "3.", linhas: 1 }], opcional: true,
        conferir: { minPalavras: 2, diferentes: "todos", msg: "Seus 3 passos estão registrados!" } }
    ],
    vf: [
      { v: false, corrigir: { trecho: "é verdade", opcoes: ["é verdade", "pode ser mentira"], certo: "pode ser mentira" } },
      { v: true }, { v: true }, { v: true },
      { v: false, corrigir: { trecho: "fazer um desenho", opcoes: ["fazer um desenho", "fazer contas"], certo: "fazer contas" } }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Faltou alguma missão?", html: "<p>Se você faltou em alguma missão, faça agora o <strong>Básico</strong> dela. Quando terminar, aparece a faixa verde <strong>Básico concluído</strong> e tudo fica registrado sozinho para o professor.</p>" },
      { tipo: "aberta", titulo: "Complete o seu passaporte: uma frase sobre cada missão",
        campos: [{ rot: "🖥️ Missão 1 – O computador e onde moram os dados", linhas: 2 }, { rot: "📋 Missão 2 – Listas e grafos", linhas: 2 }, { rot: "🤔 Missão 3 – Verdadeiro ou falso e escolhas", linhas: 2 }, { rot: "🛡️ Missão 4 – Internet com cuidado", linhas: 2 }],
        criterios: ["Cada frase fala de algo que eu aprendi naquela missão."],
        conferir: { minPalavras: 3, porCampo: [
          ["computador", "entrada", "saida", "sistema operacional", "windows", "dados", "nuvem", "pendrive", "guard", "salv", "teclado", "mouse", "monitor"],
          ["lista", "grafo", "inserir", "remover", "ordem", "ligad", "vertice", "aresta", "caminho"],
          ["verdadeir", "falso", "escolha", "se ", "entao", "senao", "nao", " e ", " ou ", "algoritmo", "repit"],
          ["internet", "cuidado", "senha", "autor", "credito", "noticia", "compartilh", "segur", "dados", "mentira", "confiavel"]] } },
      { tipo: "aberta", titulo: "Minha missão favorita",
        campos: [{ rot: "Qual foi a missão de que você mais gostou?", linhas: 1, ph: "Ex.: Missão 2 – Listas e grafos" }, { rot: "Por que você gostou dela?", linhas: 3 }],
        criterios: ["Escrevi o nome da missão.", "Expliquei o porquê com uma frase completa, com letra maiúscula e ponto final."],
        conferir: { minPalavras: 2, porCampo: [["missao", "1", "2", "3", "4", "comput", "lista", "grafo", "verdadeir", "escolha", "internet", "cuidado"], null], msg: "Obrigado por contar! O professor pode ler no painel." } }
    ],
    desafio: [
      { tipo: "aberta", titulo: "Crie um algoritmo com SE… ENTÃO… SENÃO para decidir se você pode compartilhar uma mensagem",
        linhas: 4, criterios: ["A condição usa as perguntas de confiança (quem escreveu, quando, outros lugares, exagero)."],
        conferir: { minPalavras: 10, grupos: [{ dica: "a palavra SE", alts: ["se "] }, { dica: "a palavra ENTÃO", alts: ["entao"] }, { dica: "a palavra SENÃO", alts: ["senao"] },
          { dica: "uma pergunta de confiança (quem escreveu, a data, outros sites, exagero)", alts: ["autor", "quem escreveu", "data", "quando", "outros sites", "outro site", "fonte", "exager", "confiavel", "seri"] }],
          msg: "Algoritmo de decisão criado!" },
        exemplo: "SE a mensagem tem autor E data E aparece em outros sites sérios, ENTÃO posso compartilhar, SENÃO não compartilho." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "O grafo do caminho até a escola",
        enunciado: "<p>Pense no caminho da sua casa até a escola. Cada lugar é um <strong>vértice</strong> (círculo) e cada rua que liga dois lugares é uma <strong>aresta</strong> (linha).</p>",
        campos: [{ rot: "5 lugares do caminho, em ordem (os vértices):", linhas: 1 }, { rot: "As ligações entre eles (as arestas), assim: Casa – Padaria:", linhas: 2 }],
        criterios: ["Escreveu 5 lugares.", "Ligou os lugares de dois em dois, como as ruas."],
        exemplo: "Vértices: Casa, Padaria, Praça, Igreja, Escola. Arestas: Casa – Padaria, Padaria – Praça, Praça – Igreja, Igreja – Escola.",
        conferir: { minPalavras: 5, msg: "Grafo registrado! O professor pode ler no painel." } }
    ]
  }
});
