/* ============================================================
   ATIVIDADES — Informática 7º ano — 4º bimestre de 2027 (Criar e cuidar) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande, quase tudo por clique.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const E = (titulo, p, opcoes, explicacao) => ({ tipo: "escolha", titulo, perguntas: [{ p, opcoes, certo: 0 }], explicacao });
  const SIGNIF = "<p>Veja o <strong>📖 O que significa?</strong>.</p>";
PORTAL.registrarAtividades("informatica-7ano-2027-4bim-trilha", {
  m1: {
    pratica: [{ tipo: "classificar", titulo: "Onde vai?", enunciado: "<p>Veja a tabela <strong>Destino · O que acontece</strong>.</p>",
      categorias: [{ id: "C", rot: "✅ Certo" }, { id: "E", rot: "❌ Errado" }],
      itens: [{ t: "Ponto de coleta", c: "C" }, { t: "Lixo comum", c: "E" }, { t: "Queimar", c: "E" }], explicacao: "O certo é o ponto de coleta." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Lixo eletrônico", b: "Aparelhos jogados fora, como celular e pilha" }, { a: "Ponto de coleta", b: "Lugar que recebe aparelhos velhos para reciclar" }, { a: "Reciclagem", b: "Usar o material de novo" }], explicacao: "Lixo eletrônico, ponto de coleta e reciclagem." },
      E("Passo 2 · A pilha", "A pilha gasta vai para:", ["O ponto de coleta", "O lixo comum"], "O ponto de coleta."),
      E("Passo 3 · Antes de doar", "Antes de doar o celular, eu:", ["Apago os meus dados", "Não faço nada"], "Apago os dados.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Queimar fios é seguro", opcoes: ["Queimar fios é seguro", "Queimar fios solta fumaça que faz mal"], certo: "Queimar fios solta fumaça que faz mal" } }]
  },
  m2: {
    pratica: [{ tipo: "ligar", titulo: "Parte e material", enunciado: "<p>Veja a tabela <strong>Parte do celular · Material · Para que serve</strong>.</p>",
      pares: [{ a: "🔋 Bateria", b: "Lítio" }, { a: "🧩 Placa", b: "Cobre e ouro" }, { a: "📱 Tela", b: "Vidro" }], explicacao: "Bateria: lítio; placa: cobre e ouro; tela: vidro." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Metal", b: "Material como o cobre e o ouro" }, { a: "Bateria estufada", b: "Bateria inchada, perigosa" }], explicacao: "Metal e bateria estufada." },
      E("Passo 2 · A bateria", "A bateria do celular usa:", ["Lítio", "Papel"], "Lítio."),
      E("Passo 3 · Cuidado", "Bateria estufada, eu:", ["Levo ao ponto de coleta", "Furo"], "Levo ao ponto de coleta.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Posso furar a bateria estufada", opcoes: ["Posso furar a bateria estufada", "Não fure a bateria estufada"], certo: "Não fure a bateria estufada" } }]
  },
  m3: {
    pratica: [{ tipo: "ordenar", titulo: "As cenas em ordem", enunciado: "<p>Veja a tabela <strong>Cena · O que aparece · O que se fala · Tempo</strong>.</p>",
      itens: ["Abertura", "Problema", "Solução"], explicacao: "Abertura → problema → solução." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Roteiro", b: "O plano do vídeo, cena por cena" }, { a: "Cena", b: "Uma parte do vídeo" }], explicacao: "Roteiro e cena." },
      E("Passo 2 · Rosto do colega", "Para filmar o rosto de alguém, eu:", ["Peço autorização", "Filmo sem pedir"], "Peço autorização."),
      E("Passo 3 · A primeira cena", "A primeira cena é a:", ["Abertura", "Solução"], "Abertura.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Filmo o rosto do colega sem pedir", opcoes: ["Filmo o rosto do colega sem pedir", "Peço autorização para filmar o colega"], certo: "Peço autorização para filmar o colega" } }]
  },
  m4: {
    pratica: [{ tipo: "classificar", titulo: "Ajuda ou atrapalha?", enunciado: "<p>Veja a tabela <strong>Dica · Por quê</strong>.</p>",
      categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
      itens: [{ t: "Celular deitado", c: "A" }, { t: "Lugar silencioso", c: "A" }, { t: "Lugar com barulho", c: "T" }], explicacao: "Deitado e silencioso ajudam." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Editor", b: "Programa que junta e corta vídeos" }, { a: "Exportar", b: "Salvar o vídeo pronto" }], explicacao: "Editor e exportar." },
      E("Passo 2 · O rosto escuro", "Para o rosto não ficar escuro:", ["Luz de frente", "Gravar no escuro"], "Luz de frente."),
      { tipo: "ordenar", titulo: "Passo 3 · No editor", itens: ["Colocar em ordem", "Cortar o que sobra", "Exportar"], explicacao: "Ordem → cortar → exportar." }],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Lugar barulhento é melhor", opcoes: ["Lugar barulhento é melhor", "Lugar silencioso é melhor"], certo: "Lugar silencioso é melhor" } }]
  },
  m5: {
    pratica: [{ tipo: "ligar", titulo: "A ficha técnica", enunciado: "<p>Veja a tabela <strong>Parte da ficha técnica · Exemplo</strong>.</p>",
      pares: [{ a: "🎬 Título", b: "“Celular no lixo? Não!”" }, { a: "👥 Equipe", b: "Só o primeiro nome" }, { a: "📚 Créditos", b: "Quem fez a música" }], explicacao: "Título, equipe e créditos." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Créditos", b: "Os nomes de quem fez" }, { a: "Publicar", b: "Deixar outras pessoas verem" }], explicacao: "Créditos e publicar." },
      { tipo: "classificar", titulo: "Passo 2 · Pode aparecer?", categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "❌ Não pode" }], itens: [{ t: "Primeiro nome", c: "S" }, { t: "Telefone", c: "N" }, { t: "Endereço", c: "N" }], explicacao: "Primeiro nome pode; telefone e endereço, não." },
      E("Passo 3 · Antes de publicar", "Antes de publicar, todos precisam:", ["Autorizar", "Nada"], "Autorizar.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Coloco o telefone de um colega no vídeo", opcoes: ["Coloco o telefone de um colega no vídeo", "Não coloco o telefone de ninguém no vídeo"], certo: "Não coloco o telefone de ninguém no vídeo" } }]
  },
  m6: {
    pratica: [{ tipo: "ligar", titulo: "Critério e pergunta", enunciado: "<p>Veja a tabela <strong>Critério da rubrica · Pergunta</strong>.</p>",
      pares: [{ a: "🎯 Mensagem", b: "A ideia ficou clara?" }, { a: "🎬 Qualidade", b: "Dá para ver e ouvir bem?" }, { a: "⏱️ Tempo", b: "Ficou em até 1 minuto?" }], explicacao: "Mensagem, qualidade e tempo." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Mostra", b: "Apresentação dos trabalhos" }, { a: "Plateia", b: "Quem assiste" }], explicacao: "Mostra e plateia." },
      E("Passo 2 · Na plateia", "Durante o vídeo do colega, eu:", ["Fico em silêncio", "Falo alto"], "Fico em silêncio."),
      E("Passo 3 · Feedback", "O melhor feedback é:", ["“Gostei! Sugestão: mais som.”", "“Ficou ruim.”"], "Algo bom + sugestão.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Rio do vídeo do colega", opcoes: ["Rio do vídeo do colega", "Aplaudo o vídeo do colega"], certo: "Aplaudo o vídeo do colega" } }]
  },
  m7: {
    pratica: [{ tipo: "ligar", titulo: "Cor e números", enunciado: "<p>Veja a tabela <strong>Cor · R (vermelho) · G (verde) · B (azul)</strong>.</p>",
      pares: [{ a: "⬛ Preto", b: "0, 0, 0" }, { a: "⬜ Branco", b: "255, 255, 255" }], explicacao: "Preto 0,0,0; branco 255,255,255." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Pixel", b: "Quadradinho de cor da foto" }, { a: "Zoom", b: "Aumentar a imagem" }], explicacao: "Pixel e zoom." },
      E("Passo 2 · Detalhes", "Mais pixels deixam a foto com:", ["Mais detalhes", "Menos detalhes"], "Mais detalhes."),
      E("Passo 3 · No zoom", "No zoom, aparecem:", ["Os pixels", "Os sons"], "Os pixels.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "O preto é 255, 255, 255", opcoes: ["O preto é 255, 255, 255", "O preto é 0, 0, 0"], certo: "O preto é 0, 0, 0" } }]
  },
  m8: {
    pratica: [{ tipo: "ligar", titulo: "Tag e para que serve", enunciado: "<p>Veja a tabela <strong>Tag · Para que serve · Exemplo</strong>.</p>",
      pares: [{ a: "tag h1", b: "Título" }, { a: "tag p", b: "Texto" }, { a: "tag a", b: "Link" }], explicacao: "h1 título, p texto, a link." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "HTML", b: "A linguagem das páginas da internet" }, { a: "Link", b: "Texto que abre outra página" }], explicacao: "HTML e link." },
      E("Passo 2 · O título", "A tag que faz um título é:", ["&lt;h1&gt;", "&lt;a&gt;"], "&lt;h1&gt;."),
      E("Passo 3 · O link", "A tag que faz um link é:", ["&lt;a&gt;", "&lt;p&gt;"], "&lt;a&gt;.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "faz uma imagem", opcoes: ["faz uma imagem", "faz um link"], certo: "faz um link" } }]
  },
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" }, Object.assign(E("M1 · Descarte", "O celular quebrado vai para:", ["O ponto de coleta", "O lixo comum"], "O ponto de coleta."), { de: "m1" }),
      { tipo: "relembre", de: "m2" }, Object.assign(E("M2 · Bateria", "Bateria estufada, eu:", ["Levo ao ponto de coleta", "Furo"], "Levo ao ponto de coleta."), { de: "m2" }),
      { tipo: "relembre", de: "m3" }, Object.assign(E("M3 · Roteiro", "O plano do vídeo é o:", ["Roteiro", "Pixel"], "Roteiro."), { de: "m3" }),
      { tipo: "relembre", de: "m4" }, Object.assign(E("M4 · Editor", "Salvar o vídeo pronto é:", ["Exportar", "Cortar"], "Exportar."), { de: "m4" }),
      { tipo: "relembre", de: "m5" }, Object.assign(E("M5 · Publicar", "Antes de publicar, todos precisam:", ["Autorizar", "Nada"], "Autorizar."), { de: "m5" }),
      { tipo: "relembre", de: "m6" }, Object.assign(E("M6 · Plateia", "Na plateia, eu:", ["Fico em silêncio", "Falo alto"], "Silêncio."), { de: "m6" }),
      { tipo: "relembre", de: "m7" }, Object.assign(E("M7 · Pixel", "A foto é feita de:", ["Pixels", "Pilhas"], "Pixels."), { de: "m7" }),
      { tipo: "relembre", de: "m8" }, Object.assign(E("M8 · HTML", "As páginas são escritas em:", ["HTML", "MP3"], "HTML."), { de: "m8" })
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-4bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Descarte", [{ p: "A pilha gasta vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }, { p: "Queimar fios:", opcoes: ["É seguro", "Solta fumaça que faz mal"], certo: 1 }]), pega("m1"),
    Q("m2", "Celular", [{ p: "A bateria usa:", opcoes: ["Lítio", "Vidro"], certo: 0 }, { p: "Bateria estufada, eu:", opcoes: ["Furo", "Levo ao ponto de coleta"], certo: 1 }]), pega("m2"),
    Q("m3", "Roteiro", [{ p: "O plano do vídeo é o:", opcoes: ["Roteiro", "Editor"], certo: 0 }, { p: "Filmar o rosto do colega:", opcoes: ["Sem pedir", "Com autorização"], certo: 1 }]), pega("m3"),
    Q("m4", "Gravar", [{ p: "Celular deitado:", opcoes: ["Ocupa a tela toda", "Fica escuro"], certo: 0 }, { p: "Salvar o vídeo pronto é:", opcoes: ["Cortar", "Exportar"], certo: 1 }]), pega("m4"),
    Q("m5", "Publicar", [{ p: "Os nomes de quem fez são os:", opcoes: ["Créditos", "Pixels"], certo: 0 }, { p: "O telefone do colega no vídeo:", opcoes: ["Pode", "Não pode"], certo: 1 }]), pega("m5"),
    Q("m6", "Mostra", [{ p: "Quem assiste é a:", opcoes: ["Plateia", "Equipe"], certo: 0 }, { p: "Durante o vídeo, a plateia:", opcoes: ["Fala alto", "Fica em silêncio"], certo: 1 }]), pega("m6"),
    Q("m7", "Pixels", [{ p: "A foto é feita de:", opcoes: ["Pixels", "Tags"], certo: 0 }, { p: "O preto é:", opcoes: ["255, 255, 255", "0, 0, 0"], certo: 1 }]), pega("m7"),
    Q("m8", "HTML", [{ p: "A tag do título é:", opcoes: ["&lt;h1&gt;", "&lt;a&gt;"], certo: 0 }, { p: "A tag &lt;a&gt; faz:", opcoes: ["Uma imagem", "Um link"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL — 🧭 Trilha (21/11/2026, Etapa 4: 4º bimestre de 2027)
   Mesmo ❓ gancho da turma, "O que você já sabe?" na M1 e 🛠️ "Onde eu uso isso?" calmo
   (3 itens + 2 perguntas). Sem Desafio/Turbo na Trilha.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-4bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>📦 Na casa da Júlia tem uma gaveta com 2 celulares velhos, 3 carregadores e um fone quebrado. A mãe dela diz: “um dia a gente joga fora”.</p><p>🤔 Qual é o jeito certo de se livrar disso? E de quem é a responsabilidade?</p>"},"m2":{"html":"<p>⛏️ O avô do Caio trabalhou no garimpo de Serra Pelada, aqui em Curionópolis, nos anos 1980. Ele diz que “tem ouro no celular”.</p><p>🤔 Será verdade? Que outros metais estão escondidos dentro de um celular?</p>"},"m3":{"html":"<p>🎬 A equipe da Lara foi gravar o vídeo sobre reciclagem sem combinar nada. Cada um falava uma coisa, o vídeo ficou com 4 minutos e ninguém entendeu a mensagem.</p><p>🤔 O que faltou antes de apertar o botão de gravar?</p>"},"m4":{"html":"<p>📱 O vídeo do Pedro ficou com uma faixa preta dos lados, o rosto escuro e um barulho de moto no meio da fala.</p><p>🤔 O que ele poderia ter feito diferente na hora de gravar?</p>"},"m5":{"html":"<p>🌐 A equipe do Davi quer publicar o vídeo. Nele aparece o colega Léo, de uniforme com o nome bordado, na frente de casa, com o número do portão.</p><p>🤔 Pode publicar assim? O que precisa conferir antes?</p>"},"m6":{"html":"<p>🎤 Na mostra, enquanto a equipe da Bia apresentava, dois colegas riam e mexiam no celular. No fim, um disse só: “ficou ruim”.</p><p>🤔 Como ser uma plateia que ajuda? E como dar um feedback que serve para melhorar?</p>"},"m7":{"html":"<p>🔍 O Theo deu zoom, zoom e mais zoom numa foto do gato. De repente, o gato virou um monte de quadradinhos coloridos!</p><p>🤔 De onde vieram esses quadradinhos? A foto sempre foi feita deles?</p>"},"m8":{"html":"<p>🌐 A Mia clicou com o botão direito numa página e viu um monte de &lt;h1&gt;, &lt;p&gt; e &lt;img&gt;. Parecia uma língua secreta!</p><p>🤔 Que “língua” é essa? Dá para uma pessoa da turma escrever uma página?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  const LEMBRA = (...ps) => { A.m1.lembra = [perg("🔍 O que você já sabe?", ...ps)]; A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>"; };
  LEMBRA(["Pilhas e celulares velhos vão para…", ["O ponto de coleta", "O lixo comum"], "Para o <b>ponto de coleta</b>."],
    ["No ponto de coleta, o lixo vai para a…", ["Reciclagem", "Rua"], "Para a <b>reciclagem</b>."]);
  A.m1.aplicar = [
    msg("🛠️ Na vida real: certo ou errado?", "♻️ Celular velho", [["C", "✅ Certo"], ["E", "❌ Errado"]], "Use a tabela do 💡 Para começar.",
      [["Levar ao ponto de coleta", "C", "O lugar certo."], ["Jogar no lixo comum", "E", "Contamina a terra e a água."], ["Queimar", "E", "Solta fumaça que faz mal."]],
      "Descarte consciente! ♻️", "O lugar certo é o ponto de coleta."),
    VIDA(["Antes de doar o celular, você…", ["Apaga os seus dados", "Pinta o celular"], "<b>Apague os seus dados</b>."], ["Queimar lixo eletrônico…", ["Solta fumaça que faz mal", "É o certo"], "Solta <b>fumaça que faz mal</b>."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: qual parte?", "📱 Celular desmontado", [["B", "🔋 Bateria"], ["P", "🧩 Placa"], ["T", "📱 Tela"]], "Onde está cada material?",
      [["Lítio", "B", "Na bateria."], ["Cobre e ouro", "P", "Na placa."], ["Vidro", "T", "Na tela."]],
      "Mandou bem! 📱", "Cada parte do celular tem um material."),
    VIDA(["A bateria ficou estufada (inchada). Você…", ["Não fura e leva ao ponto de coleta", "Fura para murchar"], "<b>Não fure</b>: leve ao ponto de coleta."], ["Quem guarda a energia é a…", ["Bateria", "Tela"], "A <b>bateria</b>."])
  ];
  A.m3.aplicar = [
    rota("🛠️ Na vida real: o roteiro", "Coloque as cenas <b>na ordem</b>.",
      [["1️⃣", "Abertura: “Você tem um desses?”"], ["2️⃣", "Problema: “No lixo, ele polui.”"], ["3️⃣", "Solução: “Leve ao ponto de coleta!”"]],
      "Roteiro pronto! 🎬", "Abertura, problema e solução."),
    VIDA(["O roteiro é…", ["O plano do vídeo, cena por cena", "Um tipo de bateria"], "O <b>plano do vídeo</b>."], ["Para filmar o rosto de alguém, você…", ["Pede autorização", "Filma escondido"], "<b>Peça autorização</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: qual dica?", "🎥 Gravação", [["H", "📱 Celular deitado"], ["L", "💡 Luz de frente"], ["S", "🤫 Lugar silencioso"]], "Qual dica resolve o problema?",
      [["O rosto ficou escuro", "L", "Luz de frente."], ["Tinha barulho", "S", "Lugar silencioso."], ["O vídeo não ocupa a tela toda", "H", "Celular deitado."]],
      "Mandou bem! 🎥", "Deitado, luz de frente e silêncio."),
    VIDA(["Salvar o vídeo pronto é…", ["Exportar", "Cortar"], "É <b>exportar</b>."], ["No editor, tirar o que sobra é…", ["Cortar", "Exportar"], "É <b>cortar</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: pode publicar?", "🌐 Antes de publicar", [["S", "✅ Pode"], ["N", "✋ Ainda não"]], "Todos autorizaram? Não tem endereço nem telefone?",
      [["Todos autorizaram e não tem endereço nem telefone", "S", "Então pode."], ["Aparece o telefone de um colega", "N", "Não coloco o telefone de ninguém."], ["Um colega não autorizou", "N", "Precisa de autorização."]],
      "Publicação segura! 🌐", "Autorização e nada de endereço ou telefone."),
    VIDA(["Na ficha técnica, a equipe aparece com…", ["Só o primeiro nome", "O endereço de cada um"], "<b>Só o primeiro nome</b>."], ["Os créditos dizem…", ["Quem fez a música", "A data de hoje"], "<b>Quem fez</b> a música."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: plateia respeitosa?", "🎤 Mostra", [["S", "👏 Respeitosa"], ["N", "🙅 Desrespeitosa"]], "Silêncio no vídeo e aplausos no fim.",
      [["Silêncio durante o vídeo", "S", "Respeita."], ["Rir do vídeo do colega", "N", "Desrespeita."], ["Aplaudir no fim", "S", "Respeita."]],
      "Plateia nota 10! 👏", "Silêncio, aplausos e feedback com algo bom + uma sugestão."),
    VIDA(["Um bom feedback tem…", ["Algo bom + uma sugestão", "Só “ficou ruim”"], "<b>Algo bom + uma sugestão</b>."], ["Pela rubrica, o vídeo ficou no tempo se durou até…", ["1 minuto", "10 minutos"], "Até <b>1 minuto</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: que cor?", "🎨 RGB", [["P", "⬛ Preto"], ["B", "⬜ Branco"]], "Use a tabela RGB.",
      [["R 0, G 0, B 0", "P", "Tudo 0: preto."], ["R 255, G 255, B 255", "B", "Tudo 255: branco."], ["0, 0, 0", "P", "Preto."]],
      "Mandou bem! 🎨", "Cada pixel guarda uma cor."),
    VIDA(["Os quadradinhos de cor da foto são os…", ["Pixels", "Cabos"], "Os <b>pixels</b>."], ["Mais pixels deixam a foto…", ["Com mais detalhes", "Sem cor"], "<b>Mais detalhes</b>."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: qual tag?", "🌐 Página", [["H", "&lt;h1&gt; Título"], ["P", "&lt;p&gt; Texto"], ["A", "&lt;a&gt; Link"]], "Qual tag usar?",
      [["“Recicle!” em letras grandes", "H", "Título."], ["“Pilha no ponto de coleta.”", "P", "Texto."], ["“Mais” levando para outra página", "A", "Link."]],
      "Página montada! 🌐", "h1 é título, p é texto e a é link."),
    VIDA(["As páginas da internet são escritas em…", ["HTML", "Pixel"], "Em <b>HTML</b>."], ["A tag &lt;a&gt; serve para…", ["Link", "Título"], "Para o <b>link</b>."])
  ];
})();
