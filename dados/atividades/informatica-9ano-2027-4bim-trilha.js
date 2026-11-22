/* ============================================================
   ATIVIDADES — Informática 9º ano — 4º bimestre de 2027 (Autoria e verdade) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande, quase tudo por clique.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const E = (titulo, p, opcoes, explicacao) => ({ tipo: "escolha", titulo, perguntas: [{ p, opcoes, certo: 0 }], explicacao });
  const SIGNIF = "<p>Veja o <strong>📖 O que significa?</strong>.</p>";
PORTAL.registrarAtividades("informatica-9ano-2027-4bim-trilha", {
  m1: {
    pratica: [{ tipo: "classificar", titulo: "Posso usar?", enunciado: "<p>Veja a tabela <strong>Situação da obra · Posso usar?</strong>.</p>",
      categorias: [{ id: "L", rot: "✅ Livre ou com crédito" }, { id: "A", rot: "🔒 Só com autorização" }],
      itens: [{ t: "Foto CC BY", c: "L" }, { t: "Música “todos os direitos reservados”", c: "A" }, { t: "Obra em domínio público", c: "L" }], explicacao: "CC BY e domínio público: livres; ©: só com autorização." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Autor", b: "Quem criou" }, { a: "Crédito", b: "Escrever o nome do autor" }, { a: "Plágio", b: "Copiar e dizer que é seu" }], explicacao: "Autor, crédito e plágio." },
      E("Passo 2 · CC BY", "Com CC BY, eu posso usar:", ["Dando o crédito", "Sem dizer nada"], "Dando o crédito."),
      E("Passo 3 · Plágio", "Copiar o trabalho do colega e dizer que é meu é:", ["Plágio", "Crédito"], "Plágio.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Plágio é dar crédito", opcoes: ["Plágio é dar crédito", "Plágio é copiar e dizer que é seu"], certo: "Plágio é copiar e dizer que é seu" } }]
  },
  m2: {
    pratica: [{ tipo: "classificar", titulo: "Pode publicar?", enunciado: "<p>Veja a tabela <strong>Situação · Pode publicar?</strong>.</p>",
      categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "❌ Não pode" }],
      itens: [{ t: "Todos disseram “pode postar”", c: "S" }, { t: "Foto do colega dormindo", c: "N" }], explicacao: "Com autorização pode; sem, não." }],
    basico: [
      E("Passo 1 · Antes de postar", "Antes de postar a foto de alguém, eu:", ["Pergunto", "Posto logo"], "Pergunto."),
      { tipo: "ordenar", titulo: "Passo 2 · Minha foto foi exposta", itens: ["Guardar as provas", "Contar para um adulto"], explicacao: "Provas primeiro, depois um adulto." },
      { tipo: "ligar", titulo: "Passo 3 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Direito de imagem", b: "Precisa de autorização para publicar" }, { a: "Autorização", b: "A pessoa deixar" }], explicacao: "Direito de imagem e autorização." }],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "pode ser postada", opcoes: ["pode ser postada", "não pode ser postada"], certo: "não pode ser postada" } }, { v: true }]
  },
  m3: {
    pratica: [{ tipo: "ordenar", titulo: "A pausa", enunciado: "<p>Veja a tabela <strong>Técnica · Como fazer</strong>.</p>", itens: ["Pare", "Pesquise", "Decida"], explicacao: "Pare → pesquise → decida." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Leitura lateral", b: "Pesquisar em outros sites" }, { a: "Sátira", b: "Notícia de humor" }], explicacao: "Leitura lateral e sátira." },
      E("Passo 2 · Leitura lateral", "Na leitura lateral, eu pesquiso:", ["Em outras abas", "Só no site suspeito"], "Em outras abas."),
      E("Passo 3 · Sátira", "Sátira é:", ["Notícia de humor", "Sempre verdade"], "Notícia de humor.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Sátira é sempre verdade", opcoes: ["Sátira é sempre verdade", "Sátira é humor"], certo: "Sátira é humor" } }]
  },
  m4: {
    pratica: [{ tipo: "sinais", titulo: "Sinais de deepfake", enunciado: "<p>Veja a tabela <strong>Sinal · O que observar</strong>. Marque <strong>só</strong> os sinais.</p>",
      opcoes: [{ t: "Boca não acompanha a fala", certo: true }, { t: "Voz de robô", certo: true }, { t: "Presente fácil por link", certo: true }, { t: "Vídeo com som", certo: false }], explicacao: "Boca, voz e promessa fácil." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Deepfake", b: "Vídeo ou áudio falso feito com IA" }, { a: "IA", b: "Inteligência artificial" }], explicacao: "Deepfake e IA." },
      E("Passo 2 · Deepfake de colega", "Fazer deepfake de um colega é:", ["Cyberbullying", "Brincadeira sem problema"], "Cyberbullying."),
      E("Passo 3 · O link", "Vídeo de famoso dando presente por link. Eu:", ["Não clico", "Clico logo"], "Não clique.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é brincadeira sem problema", opcoes: ["é brincadeira sem problema", "é cyberbullying"], certo: "é cyberbullying" } }]
  },
  m5: {
    pratica: [{ tipo: "ligar", titulo: "Cada parte do plano", enunciado: "<p>Veja a tabela <strong>Parte · Pergunta · Exemplo</strong>.</p>",
      pares: [{ a: "🎯 Tema", b: "Sobre o que é?" }, { a: "👥 Público", b: "Para quem é?" }, { a: "🧩 Tarefas", b: "Quem faz o quê?" }], explicacao: "Tema, público e tarefas." }],
    basico: [
      E("Passo 1 · O público", "O público do guia é:", ["O 6º ano", "Ninguém"], "O 6º ano."),
      { tipo: "classificar", titulo: "Passo 2 · Pode no projeto?", categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Não pode" }], itens: [{ t: "Desenho da própria equipe", c: "S" }, { t: "Foto de colega sem pedir", c: "N" }], explicacao: "Desenho próprio pode; foto sem pedir, não." },
      E("Passo 3 · Tarefas", "Na equipe:", ["Cada um faz uma tarefa", "Uma pessoa faz tudo"], "Cada um faz uma tarefa.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Posso usar fotos de colegas sem pedir", opcoes: ["Posso usar fotos de colegas sem pedir", "Não posso usar fotos de colegas sem pedir"], certo: "Não posso usar fotos de colegas sem pedir" } }]
  },
  m6: {
    pratica: [{ tipo: "ligar", titulo: "Cada critério e a pergunta", enunciado: "<p>Veja a tabela <strong>Critério · Pergunta</strong>.</p>",
      pares: [{ a: "✅ Conteúdo", b: "Está certo?" }, { a: "💬 Clareza", b: "O 6º ano entende?" }, { a: "📚 Créditos", b: "Tem as fontes?" }], explicacao: "Conteúdo, clareza e créditos." }],
    basico: [
      E("Passo 1 · Feedback", "O melhor feedback é:", ["“Gostei! Sugestão: aumentar a letra.”", "“Ficou ruim.”"], "Algo bom + sugestão."),
      { tipo: "classificar", titulo: "Passo 2 · Ajuda ou atrapalha?", categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }], itens: [{ t: "Letra grande", c: "A" }, { t: "Muito texto no slide", c: "T" }], explicacao: "Letra grande ajuda; muito texto atrapalha." },
      E("Passo 3 · No fim", "No fim da apresentação, eu mostro:", ["As fontes", "O meu telefone"], "As fontes.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Slide com letra pequena é melhor", opcoes: ["Slide com letra pequena é melhor", "Slide com letra grande é melhor"], certo: "Slide com letra grande é melhor" } }]
  },
  m7: {
    pratica: [{ tipo: "classificar", titulo: "Qual é o motivo?", enunciado: "<p>Veja a tabela <strong>Motivo · Como ganha · Exemplo</strong>.</p>",
      categorias: [{ id: "D", rot: "💰 Dinheiro" }, { id: "H", rot: "😂 Humor" }, { id: "E", rot: "🤷 Engano" }],
      itens: [{ t: "“Você não vai acreditar!” com anúncios", c: "D" }, { t: "Site de humor", c: "H" }, { t: "Repassou sem checar", c: "E" }], explicacao: "Anúncios = dinheiro; piada = humor; sem checar = engano." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Motivo", b: "A razão de fazer algo" }, { a: "Caça-cliques", b: "Título chocante" }], explicacao: "Motivo e caça-cliques." },
      E("Passo 2 · A pergunta de ouro", "A pergunta de ouro é:", ["Quem ganha se eu acreditar?", "Quantas curtidas tem?"], "Quem ganha?"),
      E("Passo 3 · Engano", "Quem repassa por engano:", ["Não ganha nada", "Ganha dinheiro"], "Não ganha nada.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "ganha dinheiro", opcoes: ["ganha dinheiro", "não ganha nada"], certo: "não ganha nada" } }]
  },
  m8: {
    pratica: [{ tipo: "ordenar", titulo: "Monte o portfólio", enunciado: "<p>Veja a tabela <strong>Passo · O que fazer</strong>.</p>", itens: ["Escolher os melhores trabalhos", "Guardar numa pasta", "Não colocar endereço nem telefone"], explicacao: "Escolher → pasta → proteger." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Portfólio", b: "Os melhores trabalhos" }, { a: "Pasta", b: "Onde se guardam arquivos" }], explicacao: "Portfólio e pasta." },
      { tipo: "classificar", titulo: "Passo 2 · Entra ou não?", categorias: [{ id: "S", rot: "✅ Entra" }, { id: "N", rot: "🚫 Não entra" }], itens: [{ t: "O projeto da equipe", c: "S" }, { t: "O meu telefone", c: "N" }], explicacao: "Trabalhos entram; telefone não." },
      E("Passo 3 · Onde guardar", "Os trabalhos ficam:", ["Numa pasta", "Espalhados"], "Numa pasta.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Coloco o meu telefone no portfólio", opcoes: ["Coloco o meu telefone no portfólio", "Não coloco o meu telefone no portfólio"], certo: "Não coloco o meu telefone no portfólio" } }]
  },
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" }, Object.assign(E("M1 · Autoria", "Com CC BY, eu:", ["Dou o crédito", "Não digo nada"], "Dou o crédito."), { de: "m1" }),
      { tipo: "relembre", de: "m2" }, Object.assign(E("M2 · Imagem", "Antes de postar a foto de alguém:", ["Pergunto", "Posto logo"], "Pergunto."), { de: "m2" }),
      { tipo: "relembre", de: "m3" }, Object.assign(E("M3 · Pausa", "O primeiro passo é:", ["Pare", "Compartilhe"], "Pare."), { de: "m3" }),
      { tipo: "relembre", de: "m4" }, Object.assign(E("M4 · Deepfake", "Deepfake é feito com:", ["IA", "Lápis"], "IA."), { de: "m4" }),
      { tipo: "relembre", de: "m5" }, Object.assign(E("M5 · Projeto", "O público do guia é:", ["O 6º ano", "Ninguém"], "O 6º ano."), { de: "m5" }),
      { tipo: "relembre", de: "m6" }, Object.assign(E("M6 · Feedback", "Feedback é:", ["Algo bom + sugestão", "Só crítica"], "Algo bom + sugestão."), { de: "m6" }),
      { tipo: "relembre", de: "m7" }, Object.assign(E("M7 · Motivo", "Anúncios demais: o motivo é", ["Dinheiro", "Humor"], "Dinheiro."), { de: "m7" }),
      { tipo: "relembre", de: "m8" }, Object.assign(E("M8 · Portfólio", "No portfólio, o telefone:", ["Não entra", "Entra"], "Não entra."), { de: "m8" })
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-4bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Autoria", [{ p: "Quem cria a obra é o:", opcoes: ["Autor", "Plágio"], certo: 0 }, { p: "Copiar e dizer que é seu é:", opcoes: ["Crédito", "Plágio"], certo: 1 }]), pega("m1"),
    Q("m2", "Imagem", [{ p: "Antes de postar a foto de alguém:", opcoes: ["Pergunto", "Posto logo"], certo: 0 }, { p: "Foto exposta: primeiro eu", opcoes: ["Apago tudo", "Guardo as provas"], certo: 1 }]), pega("m2"),
    Q("m3", "Verdade", [{ p: "O primeiro passo da pausa é:", opcoes: ["Pare", "Compartilhe"], certo: 0 }, { p: "Sátira é:", opcoes: ["Verdade", "Humor"], certo: 1 }]), pega("m3"),
    Q("m4", "Deepfake", [{ p: "Deepfake é feito com:", opcoes: ["IA", "Lápis"], certo: 0 }, { p: "Deepfake de colega é:", opcoes: ["Brincadeira", "Cyberbullying"], certo: 1 }]), pega("m4"),
    Q("m5", "Projeto", [{ p: "O público do guia é:", opcoes: ["O 6º ano", "Ninguém"], certo: 0 }, { p: "Na equipe:", opcoes: ["Um faz tudo", "Cada um faz uma tarefa"], certo: 1 }]), pega("m5"),
    Q("m6", "Apresentar", [{ p: "Feedback é:", opcoes: ["Algo bom + sugestão", "Só crítica"], certo: 0 }, { p: "Slide bom tem letra:", opcoes: ["Pequena", "Grande"], certo: 1 }]), pega("m6"),
    Q("m7", "Motivo", [{ p: "Anúncios demais: o motivo é", opcoes: ["Dinheiro", "Humor"], certo: 0 }, { p: "Quem repassa por engano:", opcoes: ["Ganha dinheiro", "Não ganha nada"], certo: 1 }]), pega("m7"),
    Q("m8", "Portfólio", [{ p: "Portfólio são:", opcoes: ["Os melhores trabalhos", "As senhas"], certo: 0 }, { p: "O telefone no portfólio:", opcoes: ["Entra", "Não entra"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL — 🧭 Trilha (21/11/2026, Etapa 4: 4º bimestre de 2027)
   Mesmo ❓ gancho da turma, "O que você já sabe?" na M1 e 🛠️ "Onde eu uso isso?" calmo
   (3 itens + 2 perguntas). Sem Desafio/Turbo na Trilha.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-4bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🎵 O vídeo do Leo para a feira de ciências foi tirado do ar 1 hora depois de postado. Motivo: a música de fundo era de um cantor famoso, usada sem autorização.</p><p>🤔 Mas a música estava na internet… não era de graça? Que música ele poderia ter usado?</p>"},"m2":{"html":"<p>😴 Na aula de reforço, o Caio cochilou. Alguém tirou uma foto e postou no grupo com legenda engraçada. Em 10 minutos, a escola inteira tinha visto.</p><p>🤔 Era só brincadeira? O Caio tinha algum direito?</p>"},"m3":{"html":"<p>🌊 Rodou no grupo: “Enchente agora no centro de Curionópolis!”, com uma foto de ruas alagadas. Mas a foto era de outra cidade, de 5 anos atrás.</p><p>🤔 A foto era verdadeira ou falsa? Como descobrir antes de repassar?</p>"},"m4":{"html":"<p>🎥 Apareceu um vídeo de um jogador famoso dizendo: “Estou dando 100 celulares! Clique no link”. A voz era igualzinha… mas a boca não acompanhava a fala.</p><p>🤔 Era ele mesmo? Como um vídeo assim é feito?</p>"},"m5":{"html":"<p>📅 Faltando 1 dia para a apresentação, uma equipe descobriu que ninguém tinha feito os slides: cada um achou que era tarefa do outro.</p><p>🤔 O que faltou no começo do projeto?</p>"},"m6":{"html":"<p>🖥️ Um aluno leu 4 slides cheios de texto, de costas para a turma, por 10 minutos. Metade da sala dormiu.</p><p>🤔 Como apresentar para o 6º ano prestar atenção?</p>"},"m7":{"html":"<p>📰 “VOCÊ NÃO VAI ACREDITAR no que aconteceu com esse aluno!”. A Mia clicou e caiu num site cheio de anúncios, sem notícia nenhuma.</p><p>🤔 Quem ganhou com esse clique? Por que alguém inventa uma coisa dessas?</p>"},"m8":{"html":"<p>🎓 No 1º ano do Ensino Médio, a professora pediu: “Mostre um trabalho de que você se orgulha”. A Júlia procurou… e não achou nenhum: tinham ficado espalhados e com nomes como “documento1”.</p><p>🤔 Como guardar os melhores trabalhos para mostrar quando precisar?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  const LEMBRA = (...ps) => { A.m1.lembra = [perg("🔍 O que você já sabe?", ...ps)]; A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>"; };
  LEMBRA(["Copiar o trabalho de outro e dizer que é seu é…", ["Plágio", "Crédito"], "É <b>plágio</b>."],
    ["Quem cria uma música ou um texto é o…", ["Autor", "Mouse"], "É o <b>autor</b>."]);
  A.m1.aplicar = [
    msg("🛠️ Na vida real: posso usar?", "🎵 Obras para o vídeo", [["S", "✅ Sim, livre"], ["C", "📝 Sim, dando o crédito"], ["N", "🚫 Só com autorização"]], "Use a tabela do 💡 Para começar.",
      [["Música com “© Todos os direitos reservados”", "N", "Só com autorização."], ["Obra em domínio público", "S", "Livre."], ["Foto CC BY", "C", "Dando o crédito."]],
      "Mandou bem! 🎵", "©: só com autorização; domínio público: livre; CC BY: com crédito."),
    VIDA(["Dizer que o trabalho do outro é seu é…", ["Plágio", "Crédito"], "É <b>plágio</b>."], ["Para usar uma foto CC BY, você…", ["Dá o crédito", "Esconde o autor"], "<b>Dá o crédito</b>."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: pode postar?", "📸 Antes de postar", [["S", "✅ Pode"], ["N", "❌ Não pode"]], "Use a tabela do 💡 Para começar.",
      [["Todos disseram “pode postar”", "S", "Todos autorizaram."], ["Foto do colega dormindo", "N", "Ele não autorizou."], ["O colega disse “não posta”", "N", "Se disser não, não poste."]],
      "Respeito à imagem! 📸", "Antes de postar, pergunte."),
    VIDA(["A sua foto foi exposta. Você…", ["Guarda as provas e conta para um adulto", "Apaga tudo e fica quieto"], "<b>Guarde as provas</b> e conte para um adulto."], ["Antes de postar a foto de alguém, você…", ["Pergunta sempre", "Posta e pronto"], "<b>Pergunte sempre</b>."])
  ];
  A.m3.aplicar = [
    rota("🛠️ Na vida real: a pausa", "Coloque a pausa <b>na ordem</b>.",
      [["✋", "Pare"], ["🔎", "Pesquise"], ["✅", "Decida"]],
      "Pausa feita! ⏸️", "Pare, pesquise, decida."),
    VIDA(["Pesquisar em outras abas é a…", ["Leitura lateral", "Sátira"], "É a <b>leitura lateral</b>."], ["Sátira é…", ["Notícia de humor, não é verdade", "Uma notícia oficial"], "É <b>humor</b>, não é verdade."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: qual sinal?", "🎥 Vídeo suspeito", [["B", "👄 Boca"], ["V", "🤖 Voz"], ["P", "🎁 Promessa"]], "Use a tabela dos sinais.",
      [["A boca não acompanha a fala", "B", "Boca."], ["A voz parece de robô", "V", "Voz."], ["“Ganhe um celular, clique no link!”", "P", "Promessa: presente fácil por link."]],
      "Olho de detetive! 🎥", "Boca, voz e promessa fácil são sinais de deepfake."),
    VIDA(["Vídeo com presente fácil por link. Você…", ["Não clica", "Clica rápido"], "<b>Não clique</b>."], ["Deepfake de colega é…", ["Cyberbullying", "Brincadeira sem problema"], "É <b>cyberbullying</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: qual parte do plano?", "📋 Plano", [["T", "🎯 Tema"], ["P", "👥 Público"], ["K", "🧩 Tarefas"]], "Use a tabela do 💡 Para começar.",
      [["Senhas fortes", "T", "Sobre o que é: tema."], ["6º ano", "P", "Para quem: público."], ["Cada um faz uma parte", "K", "Quem faz o quê: tarefas."]],
      "Plano pronto! 📋", "Tema, público e tarefas."),
    VIDA(["Usar a foto de um colega no projeto…", ["Só com autorização", "Sem pedir"], "<b>Só com autorização</b>."], ["Para quem o projeto é feito é o…", ["Público", "Tema"], "É o <b>público</b>."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: qual critério?", "📏 Rubrica", [["C", "✅ Conteúdo"], ["L", "💬 Clareza"], ["K", "📚 Créditos"]], "Use a tabela da rubrica.",
      [["“Está certo”", "C", "Conteúdo."], ["“O 6º ano entende”", "L", "Clareza."], ["“Tem as fontes”", "K", "Créditos."]],
      "Avaliador justo! 📏", "Conteúdo, clareza e créditos."),
    VIDA(["Um bom feedback é…", ["Algo bom + uma sugestão", "Só “ficou chato”"], "<b>Algo bom + uma sugestão</b>."], ["“Tem as fontes?” é o critério…", ["Créditos", "Clareza"], "<b>Créditos</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: qual motivo?", "🤔 Quem ganha?", [["D", "💰 Dinheiro"], ["H", "😂 Humor"], ["E", "🤷 Engano"]], "Use a tabela dos motivos.",
      [["“Você não vai acreditar!” cheio de anúncios", "D", "Cliques e anúncios."], ["Notícia de site de humor", "H", "Piada."], ["A tia repassou sem checar", "E", "Ninguém ganha."]],
      "Mandou bem! 🤔", "Toda mentira tem um motivo."),
    VIDA(["A pergunta de ouro é…", ["Quem ganha se eu acreditar?", "Qual é a cor?"], "<b>Quem ganha se eu acreditar?</b>"], ["“Você não vai acreditar!” é um…", ["Caça-cliques", "Crédito"], "É um <b>caça-cliques</b>."])
  ];
  A.m8.aplicar = [
    rota("🛠️ Na vida real: o portfólio", "Coloque os passos <b>na ordem</b>.",
      [["1️⃣", "Escolher os melhores trabalhos"], ["2️⃣", "Guardar numa pasta"], ["3️⃣", "Conferir: nada de endereço nem telefone"]],
      "Portfólio pronto! 🎓", "Escolher, guardar numa pasta e não colocar dados pessoais."),
    VIDA(["No portfólio, o seu telefone…", ["Não entra", "Entra"], "Dado pessoal <b>não entra</b>."], ["Os trabalhos do portfólio ficam numa…", ["Pasta", "Mochila"], "Numa <b>pasta</b>."])
  ];
})();
