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
