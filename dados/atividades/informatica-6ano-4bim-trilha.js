/* ============================================================
   ATIVIDADES — Informática 6º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Trabalhos", itens: ["Fotos", "Músicas", "Trabalhos"],
        enunciado: "<p>Dê <strong>dois cliques rapidinhos</strong> na pasta <strong>Trabalhos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas e arquivos." },
      { tipo: "explorador_pastas", titulo: "Guarde cada arquivo na pasta certa",
        enunciado: "<p>Clique no arquivo e depois na pasta certa. A 🖼️ foto vai para <strong>Fotos</strong>. A 🎵 música vai para <strong>Músicas</strong>.</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }],
        arquivos: [{ nome: "🖼️ foto-da-escola.jpg", p: "fotos" }, { nome: "🎵 forro.mp3", p: "musicas" }, { nome: "🖼️ meu-time.jpg", p: "fotos" }, { nome: "🎵 hino.mp3", p: "musicas" }],
        explicacao: "Cada arquivo na sua pasta: assim você acha rapidinho!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Entrada ou saída?",
        categorias: [{ id: "E", rot: "Entrada", ic: "⌨️", desc: "manda para o computador" }, { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" },
          { t: "Mouse", ic: "🖱️", c: "E" },
          { t: "Monitor (a tela)", ic: "🖥️", c: "S" },
          { t: "Caixa de som", ic: "🔊", c: "S" }],
        explicacao: "Teclado e mouse <strong>mandam</strong> (entrada). Monitor e caixa de som <strong>mostram</strong> (saída)." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🗂️ Para que serve a pasta?", opcoes: ["Guardar e organizar os arquivos", "Ligar o computador", "Imprimir"], certo: 0 },
          { p: "📄 O que é um arquivo?", opcoes: ["Um trabalho guardado no computador", "Um cabo", "Uma tecla"], certo: 0 }],
        explicacao: "O arquivo é o trabalho guardado. A pasta é a gaveta que guarda os arquivos." },

      { tipo: "ordenar", titulo: "Passo 3 · Arrume os passos para salvar",
        itens: ["📂 Escolher onde guardar", "✏️ Dar um nome", "💾 Clicar em Salvar"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer). Primeiro escolha <strong>onde</strong> guardar.</p>",
        explicacao: "Onde guardar → nome → Salvar." },

      { tipo: "pc", titulo: "Passo 4 · No computador: Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>bloco</strong>. Clique em <strong>Bloco de Notas</strong>.", "Digite o seu <strong>primeiro nome</strong>.", "Aperte <strong>Ctrl</strong> e <strong>S</strong> juntos. No nome do arquivo, digite <strong>EU</strong> e clique em <strong>Salvar</strong>."],
        conferir: [{ rot: "Que nome você deu ao arquivo?", opcoes: ["CASA", "EU", "JOGO"], gab: "EU", re: "^EU$", dica: "O nome do arquivo é <strong>EU</strong>." }],
        okMsg: "Muito bem! Seu trabalho está salvo." }
    ],
    vf: [{ v: true }, { v: false, why: "O monitor <strong>mostra</strong>: é de saída." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "Monte o algoritmo: plantar uma muda",
        enunciado: "<p>Clique nos passos <strong>na ordem</strong> certa.</p>",
        etapas: [
          { ic: "🧤", t: "Pegar a pá e a muda", dica: "Primeiro, separe o material." },
          { ic: "⛏️", t: "Cavar um buraco" },
          { ic: "🌱", t: "Colocar a muda no buraco" },
          { ic: "💧", t: "Regar a planta", dica: "A água vem por último." }],
        okMsg: "Algoritmo na ordem certa! 🌳",
        explicacao: "Os passos de um <strong>algoritmo</strong> precisam estar na <strong>ordem</strong> certa." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Arrume os passos para escovar os dentes",
        itens: ["🪥 Colocar pasta na escova", "😁 Escovar os dentes", "💧 Enxaguar a boca", "🧺 Guardar a escova"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong> para deixar os passos <strong>em ordem</strong>.</p>",
        explicacao: "Pasta → escovar → enxaguar → guardar. Isso é um algoritmo!" },

      { tipo: "robo", titulo: "Passo 2 · Leve o robô 🤖 até a estrela ⭐",
        enunciado: "<p>Use as setas, uma por casa. Não passe pela parede 🧱. Depois clique em <strong>Executar</strong>.</p>",
        grade: ["R..", "##.", "..*"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1]],
        dicas: ["Embaixo do robô tem parede: vá primeiro para a direita ➡️."],
        explicacao: "Um caminho certo: ➡️ ➡️ ⬇️ ⬇️." },

      { tipo: "classificar", titulo: "Passo 3 · Repetição ou escolha?",
        categorias: [{ id: "R", rot: "Repetição", ic: "🔁", desc: "o mesmo passo várias vezes" }, { id: "S", rot: "Escolha (se… então)", ic: "🔀", desc: "depende de uma condição" }],
        itens: [
          { t: "Repita 3 vezes: pule", ic: "🦘", c: "R" },
          { t: "Se chover, então levo guarda-chuva", ic: "☔", c: "S" },
          { t: "O despertador toca todo dia", ic: "⏰", c: "R" },
          { t: "Se a senha estiver certa, então o celular abre", ic: "📱", c: "S" }],
        explicacao: "<strong>Repetição</strong> faz várias vezes. <strong>Escolha</strong> usa <strong>se… então</strong>." },

      { tipo: "pintura", titulo: "Passo 4 · Siga o algoritmo de pintar", forma: "quadrado", n: 3, pretos: [1, 3],
        regra: "<strong>Repita 3 vezes:</strong> desenhe um quadrado. Depois: <strong>se</strong> for o 1º ou o 3º, pinte de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["Só o 1º e o 3º ficam pretos. O do meio fica branco."],
        explicacao: "Você usou <strong>repetição</strong> (repita 3 vezes) e <strong>escolha</strong> (se… senão)." }
    ],
    vf: [{ v: true }, { v: false, why: "A ordem importa: não dá para regar antes de plantar." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "No grupo da turma: respeito ou cyberbullying?", app: "💬 Grupo do 6º ano",
        botoes: [{ id: "R", rot: "😊 Respeito" }, { id: "B", rot: "🚫 Cyberbullying" }],
        enunciado: "<p>Leia cada mensagem e clique na resposta.</p>",
        itens: [
          { de: "Lucas", t: "Parabéns, Maria, seu trabalho ficou lindo! 👏", c: "R" },
          { de: "Anônimo", t: "Olha a foto do João dormindo kkkk espalhem 😂", c: "B", why: "Espalhar a foto de alguém para rirem dele é cyberbullying." },
          { de: "Bia", t: "Alguém me ajuda na tarefa?", c: "R" }],
        okMsg: "Você reconhece o cyberbullying. Se acontecer, conte a um adulto." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Mensagem com respeito ou ofensa?",
        categorias: [{ id: "R", rot: "Com respeito", ic: "😊", desc: "trata bem" }, { id: "O", rot: "Ofensa", ic: "🚫", desc: "machuca o colega" }],
        itens: [
          { t: "Seu desenho ficou bonito!", ic: "🎨", c: "R" },
          { t: "Você é burro, errou tudo", ic: "😠", c: "O" },
          { t: "Posso te ajudar?", ic: "🤝", c: "R" },
          { t: "Sai do grupo, ninguém gosta de você", ic: "🚪", c: "O" }],
        explicacao: "Na internet, escreva como se a pessoa estivesse na sua frente." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🔐 Qual senha é a mais forte?", opcoes: ["123456", "Gato#2026!Azul", "maria"], certo: 1 },
          { p: "😟 Algo me assustou na internet. O que eu faço?", opcoes: ["Conto a um adulto de confiança", "Guardo segredo", "Respondo com ofensa"], certo: 0 }],
        explicacao: "Senha forte é comprida e mistura letras, números e símbolos. Se algo assustar, conte a um adulto." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 3 · Celular velho: certo ou errado?", colunaItem: "O que fazer com o celular que não funciona mais", colunaResp: "Certo?",
        categorias: [{ id: "C", rot: "Certo" }, { id: "E", rot: "Errado" }],
        itens: [
          { t: "🗑️ Jogar no lixo comum", c: "E", why: "Ele tem metais que sujam a terra e a água." },
          { t: "♻️ Levar a um ponto de coleta", c: "C" },
          { t: "🔧 Tentar consertar", c: "C" },
          { t: "🌊 Jogar no rio", c: "E" }],
        explicacao: "Consertar, doar ou levar ao ponto de coleta. Nunca no lixo comum." },

      { tipo: "pc", titulo: "Passo 4 · No computador: desenhe no Paint", programa: "Paint",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>paint</strong>. Clique em <strong>Paint</strong>.", "Clique no <strong>retângulo</strong> ▭ e desenhe <strong>1 quadrado</strong> grande.", "Clique no <strong>balde</strong> 🪣, escolha a cor <strong>verde</strong> e clique dentro do quadrado.", "Deixe o desenho aberto e responda abaixo."],
        conferir: [{ rot: "De que cor você pintou o quadrado?", opcoes: ["Vermelho", "Verde", "Azul"], gab: "Verde", re: "^Verde$", dica: "A cor pedida é <strong>verde</strong>, a cor da natureza." }],
        okMsg: "Desenho pronto! Verde, como a natureza que a gente protege. 🌳" }
    ],
    vf: [{ v: false, why: "Cyberbullying machuca de verdade." }, { v: true }, { v: true }]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🌐 O computador e meus arquivos", "⚙️ Algoritmos", "🤝 Cidadão digital"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
