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
