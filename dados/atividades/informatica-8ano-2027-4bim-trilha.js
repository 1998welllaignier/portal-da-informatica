/* ============================================================
   ATIVIDADES — Informática 8º ano — 4º bimestre de 2027 (Privacidade) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande, quase tudo por clique.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const E = (titulo, p, opcoes, explicacao) => ({ tipo: "escolha", titulo, perguntas: [{ p, opcoes, certo: 0 }], explicacao });
  const SIGNIF = "<p>Veja o <strong>📖 O que significa?</strong>.</p>";
PORTAL.registrarAtividades("informatica-8ano-2027-4bim-trilha", {
  m1: {
    pratica: [{ tipo: "classificar", titulo: "É dado pessoal?", enunciado: "<p>Veja a tabela <strong>Dado pessoal · Exemplo</strong>.</p>",
      categorias: [{ id: "S", rot: "🪪 É dado pessoal" }, { id: "N", rot: "🌤️ Não é" }],
      itens: [{ t: "Ana Souza Lima", c: "S" }, { t: "Rua das Flores, 10", c: "S" }, { t: "A cor do céu", c: "N" }], explicacao: "Nome e endereço dizem quem você é." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Dado pessoal", b: "Informação que diz quem você é" }, { a: "Privacidade", b: "Decidir o que os outros sabem de você" }], explicacao: "Dado pessoal e privacidade." },
      E("Passo 2 · Localização", "A localização é:", ["Um dado pessoal", "Não é dado pessoal"], "Um dado pessoal."),
      E("Passo 3 · Antes de dar", "Antes de dar um dado, eu pergunto:", ["Quem está pedindo? Para quê?", "Nada"], "Quem pede? Para quê?")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Dou o meu telefone para qualquer pessoa", opcoes: ["Dou o meu telefone para qualquer pessoa", "Não dou o meu telefone para qualquer pessoa"], certo: "Não dou o meu telefone para qualquer pessoa" } }]
  },
  m2: {
    pratica: [{ tipo: "classificar", titulo: "Comum ou sensível?", enunciado: "<p>Veja a tabela <strong>Dado sensível (exemplos da lei) · Exemplo</strong>.</p>",
      categorias: [{ id: "S", rot: "🔐 Sensível" }, { id: "C", rot: "🪪 Comum" }],
      itens: [{ t: "Uma doença", c: "S" }, { t: "A digital", c: "S" }, { t: "O endereço", c: "C" }], explicacao: "Doença e digital são sensíveis." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Dado sensível", b: "Dado mais delicado, como a saúde" }, { a: "Biometria", b: "Partes do corpo que identificam" }, { a: "LGPD", b: "A lei que protege os dados" }], explicacao: "Dado sensível, biometria e LGPD." },
      E("Passo 2 · A digital", "A digital usada no celular é:", ["Biometria", "Religião"], "Biometria."),
      E("Passo 3 · LGPD", "Pela LGPD, posso pedir para:", ["Apagar os meus dados", "Nada"], "Apagar.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "A LGPD não protege os dados", opcoes: ["A LGPD não protege os dados", "A LGPD protege os dados"], certo: "A LGPD protege os dados" } }]
  },
  m3: {
    pratica: [{ tipo: "classificar", titulo: "Protege ou arrisca?", enunciado: "<p>Veja a tabela <strong>Hábito · Por quê</strong>.</p>",
      categorias: [{ id: "P", rot: "🛡️ Protege" }, { id: "R", rot: "⚠️ Arrisca" }],
      itens: [{ t: "Duas etapas", c: "P" }, { t: "Sair da conta na escola", c: "P" }, { t: "Passar o código para o amigo", c: "R" }], explicacao: "Duas etapas e sair da conta protegem." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Conta", b: "O seu cadastro num jogo, e-mail ou rede social" }, { a: "Código", b: "O número que chega no celular para entrar na conta" }], explicacao: "Conta e código." },
      E("Passo 2 · Na escola", "No fim da aula, eu:", ["Saio da conta", "Deixo a conta aberta"], "Saio da conta."),
      E("Passo 3 · O código", "O amigo pede o código. Eu:", ["Não passo", "Passo"], "Não passo.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Passo o código", opcoes: ["Passo o código", "Não passo o código"], certo: "Não passo o código" } }]
  },
  m4: {
    pratica: [{ tipo: "classificar", titulo: "Mais protegida?", enunciado: "<p>Veja a tabela <strong>Configuração · Opção mais protegida</strong>.</p>",
      categorias: [{ id: "S", rot: "🔒 Mais protegida" }, { id: "N", rot: "🔓 Menos protegida" }],
      itens: [{ t: "Conta privada", c: "S" }, { t: "Localização desligada", c: "S" }, { t: "Mensagem de qualquer pessoa", c: "N" }], explicacao: "Privada e localização desligada protegem." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Conta privada", b: "Só quem você aceita vê" }, { a: "Bloquear", b: "A pessoa não consegue mais falar com você" }], explicacao: "Conta privada e bloquear." },
      E("Passo 2 · Onde fica", "Para mudar a privacidade, eu abro:", ["Configurações", "A calculadora"], "Configurações."),
      E("Passo 3 · Desconhecido", "Um desconhecido manda mensagens chatas. Eu:", ["Bloqueio", "Respondo"], "Bloqueio.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "deixa a pessoa mandar mais mensagens", opcoes: ["deixa a pessoa mandar mais mensagens", "impede a pessoa de falar com você"], certo: "impede a pessoa de falar com você" } }]
  },
  m5: {
    pratica: [{ tipo: "ligar", titulo: "O plano do guia", enunciado: "<p>Veja a tabela <strong>Parte · Pergunta · Exemplo</strong>.</p>",
      pares: [{ a: "🎯 Tema", b: "Qual assunto?" }, { a: "👥 Público", b: "Para quem?" }, { a: "🧩 Tarefas", b: "Quem faz o quê?" }], explicacao: "Tema, público e tarefas." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Guia", b: "Material com dicas" }, { a: "Público", b: "Para quem é o guia" }], explicacao: "Guia e público." },
      E("Passo 2 · Exemplos", "No guia, eu uso:", ["Exemplos inventados", "O telefone real de um colega"], "Exemplos inventados."),
      { tipo: "classificar", titulo: "Passo 3 · Entra no guia?", categorias: [{ id: "S", rot: "✅ Entra" }, { id: "N", rot: "❌ Não entra" }], itens: [{ t: "Exemplo inventado", c: "S" }, { t: "Endereço real de um colega", c: "N" }], explicacao: "Exemplo inventado entra; dado real não." }],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Coloco o telefone real de um colega no guia", opcoes: ["Coloco o telefone real de um colega no guia", "Uso exemplos inventados no guia"], certo: "Uso exemplos inventados no guia" } }]
  },
  m6: {
    pratica: [{ tipo: "classificar", titulo: "Ajuda ou atrapalha?", enunciado: "<p>Veja a tabela <strong>Dica · Por quê</strong>.</p>",
      categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
      itens: [{ t: "Uma dica por slide", c: "A" }, { t: "Imagem em cada dica", c: "A" }, { t: "Passar muito do tempo", c: "T" }], explicacao: "Uma dica por slide e imagens ajudam." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Feedback", b: "Comentário que ajuda a melhorar" }, { a: "Rubrica", b: "Lista do que vai ser avaliado" }], explicacao: "Feedback e rubrica." },
      E("Passo 2 · Feedback", "O melhor feedback é:", ["“Gostei! Sugestão: mais imagens.”", "“Ficou ruim.”"], "Algo bom + sugestão."),
      E("Passo 3 · O tempo", "Respeitar o tempo serve para:", ["Todas as equipes apresentarem", "Nada"], "Todas apresentam.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Passo do tempo à vontade", opcoes: ["Passo do tempo à vontade", "Respeito o tempo"], certo: "Respeito o tempo" } }]
  },
  m7: {
    pratica: [{ tipo: "ligar", titulo: "Onde aparece e o risco", enunciado: "<p>Veja a tabela <strong>Onde aparece · Risco · Como proteger</strong>.</p>",
      pares: [{ a: "📸 Dentro da foto", b: "Mostra onde foi tirada" }, { a: "📍 Localização em tempo real", b: "Mostra onde você está agora" }, { a: "🏷️ Check-in num post", b: "Diz que você não está em casa" }], explicacao: "Foto, tempo real e check-in." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Localização", b: "O lugar onde você está" }, { a: "Check-in", b: "Marcar no post onde você está" }], explicacao: "Localização e check-in." },
      E("Passo 2 · Tempo real", "A localização em tempo real eu compartilho:", ["Só com a família", "Com todo mundo"], "Só com a família."),
      E("Passo 3 · O passeio", "A foto do passeio eu posto:", ["Depois de sair", "Com check-in na hora"], "Depois de sair.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Faço check-in de casa para todo mundo ver", opcoes: ["Faço check-in de casa para todo mundo ver", "Não faço check-in de casa"], certo: "Não faço check-in de casa" } }]
  },
  m8: {
    pratica: [{ tipo: "classificar", titulo: "Qual é o golpe?", enunciado: "<p>Veja a tabela <strong>Golpe · Como é</strong>.</p>",
      categorias: [{ id: "C", rot: "📞 Falsa central" }, { id: "E", rot: "📦 Falsa entrega" }],
      itens: [{ t: "“Sou do banco, confirme o código”", c: "C" }, { t: "“Pague a taxa neste link”", c: "E" }], explicacao: "Banco e código: falsa central; taxa por link: falsa entrega." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Vazamento", b: "Dados que escapam e caem com criminosos" }, { a: "Golpe", b: "Engano para tirar vantagem" }], explicacao: "Vazamento e golpe." },
      E("Passo 2 · Regra de ouro", "A pessoa sabe o meu nome. Isso prova que é de confiança?", ["Não prova", "Prova"], "Não prova."),
      E("Passo 3 · Empresa séria", "Empresa séria pede o código?", ["Não pede", "Pede"], "Não pede.")],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é de confiança", opcoes: ["é de confiança", "não prova que é de confiança"], certo: "não prova que é de confiança" } }, { v: true }]
  },
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" }, Object.assign(E("M1 · Dado pessoal", "O endereço é:", ["Dado pessoal", "Não é"], "Dado pessoal."), { de: "m1" }),
      { tipo: "relembre", de: "m2" }, Object.assign(E("M2 · Sensível", "Dado de saúde é:", ["Sensível", "Comum"], "Sensível."), { de: "m2" }),
      { tipo: "relembre", de: "m3" }, Object.assign(E("M3 · Conta", "Na escola, no fim da aula:", ["Saio da conta", "Deixo aberta"], "Saio."), { de: "m3" }),
      { tipo: "relembre", de: "m4" }, Object.assign(E("M4 · Configurar", "A opção mais protegida é a conta:", ["Privada", "Pública"], "Privada."), { de: "m4" }),
      { tipo: "relembre", de: "m5" }, Object.assign(E("M5 · Guia", "No guia, uso:", ["Exemplos inventados", "Dados reais"], "Inventados."), { de: "m5" }),
      { tipo: "relembre", de: "m6" }, Object.assign(E("M6 · Feedback", "Feedback é:", ["Algo bom + sugestão", "Só crítica"], "Algo bom + sugestão."), { de: "m6" }),
      { tipo: "relembre", de: "m7" }, Object.assign(E("M7 · Passeio", "Posto a foto do passeio:", ["Depois de sair", "Com check-in na hora"], "Depois."), { de: "m7" }),
      { tipo: "relembre", de: "m8" }, Object.assign(E("M8 · Golpe", "Empresa séria pede o código?", ["Não", "Sim"], "Não."), { de: "m8" })
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-4bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Dados pessoais", [{ p: "O endereço é:", opcoes: ["Dado pessoal", "Não é"], certo: 0 }, { p: "Antes de dar um dado, pergunto:", opcoes: ["Nada", "Quem pede? Para quê?"], certo: 1 }]), pega("m1"),
    Q("m2", "Dados sensíveis", [{ p: "A digital é:", opcoes: ["Biometria", "Senha"], certo: 0 }, { p: "A LGPD:", opcoes: ["Não protege", "Protege os dados"], certo: 1 }]), pega("m2"),
    Q("m3", "Contas", [{ p: "Duas etapas:", opcoes: ["Protegem a conta", "Abrem a conta"], certo: 0 }, { p: "O código eu:", opcoes: ["Passo para o amigo", "Não passo"], certo: 1 }]), pega("m3"),
    Q("m4", "Configurar", [{ p: "Mais protegida é a conta:", opcoes: ["Privada", "Pública"], certo: 0 }, { p: "Localização nos posts:", opcoes: ["Ligada", "Desligada"], certo: 1 }]), pega("m4"),
    Q("m5", "Guia", [{ p: "Para quem é o guia:", opcoes: ["Público", "Tema"], certo: 0 }, { p: "No guia, uso:", opcoes: ["Dados reais", "Exemplos inventados"], certo: 1 }]), pega("m5"),
    Q("m6", "Apresentar", [{ p: "Feedback é:", opcoes: ["Algo bom + sugestão", "Só crítica"], certo: 0 }, { p: "Em cada slide:", opcoes: ["Dez dicas", "Uma dica"], certo: 1 }]), pega("m6"),
    Q("m7", "Localização", [{ p: "Tempo real, só com:", opcoes: ["A família", "Desconhecidos"], certo: 0 }, { p: "Posto a foto do passeio:", opcoes: ["Com check-in na hora", "Depois de sair"], certo: 1 }]), pega("m7"),
    Q("m8", "Golpes", [{ p: "Empresa séria pede o código?", opcoes: ["Não", "Sim"], certo: 0 }, { p: "Sabe o meu nome:", opcoes: ["Prova que é de confiança", "Não prova nada"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL — 🧭 Trilha (21/11/2026, Etapa 4: 4º bimestre de 2027)
   Mesmo ❓ gancho da turma, "O que você já sabe?" na M1 e 🛠️ "Onde eu uso isso?" calmo
   (3 itens + 2 perguntas). Sem Desafio/Turbo na Trilha.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-4bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🎁 Um site prometeu um tênis de graça. Para participar, era só preencher: nome completo, endereço, data de nascimento, CPF e uma selfie.</p><p>🤔 Por que um sorteio precisaria de tudo isso? O que alguém pode fazer com esses dados?</p>"},"m2":{"html":"<p>🏥 A Bia descobriu que um aplicativo de jogo guardava se ela tomava algum remédio e qual era a religião da família dela. Ela nunca entendeu para que o jogo precisava disso.</p><p>🤔 Esses dados são mais delicados que o nome? A Bia tem algum direito?</p>"},"m3":{"html":"<p>🔔 Às 3 da manhã, o e-mail do Davi recebeu: <b>“Novo acesso à sua conta de outro aparelho”</b>. Ele estava dormindo.</p><p>🤔 Quem entrou? O que ele deve fazer primeiro?</p>"},"m4":{"html":"<p>📱 Um desconhecido mandou mensagem para a Lia: “Vi que você está na pracinha agora!”. Ela nunca tinha falado com ele.</p><p>🤔 Como ele sabia? Que configurações da conta deixaram isso acontecer?</p>"},"m5":{"html":"<p>👵 A avó do Pedro ganhou um celular e já respondeu a três mensagens estranhas pedindo código. Ela diz que “ninguém explica direito”.</p><p>🤔 Como explicar privacidade para os avós? E para o 6º ano, seria do mesmo jeito?</p>"},"m6":{"html":"<p>🖼️ O cartaz de uma equipe tinha 12 dicas num parágrafo só, sem nenhuma imagem. Ninguém conseguiu ler até o fim.</p><p>🤔 Como deixar o guia fácil de lembrar e com vontade de ler?</p>"},"m7":{"html":"<p>📸 O Gabriel mandou uma foto do quarto novo para um “amigo” do jogo on-line. No dia seguinte, o tal amigo disse o nome da rua dele.</p><p>🤔 A foto não mostrava a rua. Como ele descobriu?</p>"},"m8":{"html":"<p>📞 A mãe da Carol recebeu uma ligação: “Senhora Maria, CPF terminado em 45, aqui é do banco. Confirme o código que chegou por SMS”. Ela pensou: “se sabem o meu CPF, devem ser do banco”.</p><p>🤔 Saber o CPF prova que é o banco? Como eles conseguiram esses dados?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  const LEMBRA = (...ps) => { A.m1.lembra = [perg("🔍 O que você já sabe?", ...ps)]; A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>"; };
  LEMBRA(["Quem engana para pegar dados é um…", ["Golpista", "Professor"], "Um <b>golpista</b>."],
    ["Antes de postar a foto de um colega, você…", ["Pede permissão", "Posta sem perguntar"], "<b>Peça permissão</b>."]);
  A.m1.aplicar = [
    msg("🛠️ Na vida real: é dado pessoal?", "🎁 Formulário", [["S", "🪪 Dado pessoal"], ["N", "🙂 Não diz quem você é"]], "Dado pessoal diz quem você é.",
      [["Nome completo", "S", "Diz quem você é."], ["Endereço", "S", "Diz onde você mora."], ["“Gosto de azul”", "N", "Sozinho, não diz quem você é."]],
      "Mandou bem! 🪪", "Nome, endereço e localização são dados pessoais."),
    VIDA(["Um site pede o seu telefone. Você pergunta…", ["Quem está pedindo? Para quê?", "Qual é a cor do site?"], "<b>Quem? Para quê?</b>"], ["Dar o telefone para qualquer pessoa…", ["Não: eu não dou", "Sim, sempre"], "<b>Não dou</b> para qualquer pessoa."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: sensível ou não?", "🗂️ Dados", [["S", "🔴 Dado sensível"], ["N", "🪪 Dado pessoal comum"]], "Dados sensíveis são ainda mais delicados.",
      [["Uma doença", "S", "Saúde: sensível."], ["A digital", "S", "Biometria: sensível."], ["O endereço", "N", "Pessoal comum."]],
      "Mandou bem! 🔒", "Saúde, religião e biometria são dados sensíveis."),
    VIDA(["A lei que protege os seus dados é a…", ["LGPD", "Um jogo"], "A <b>LGPD</b>."], ["Pela LGPD, você pode…", ["Pedir para apagar os seus dados", "Nunca pedir nada"], "Pedir para <b>apagar</b> os seus dados."])
  ];
  A.m3.aplicar = [
    msg("🛠️ Na vida real: seguro ou arriscado?", "🔐 Contas", [["S", "✅ Seguro"], ["R", "⚠️ Arriscado"]], "Use a tabela dos hábitos.",
      [["Senha diferente em cada conta", "S", "Se uma vazar, as outras ficam seguras."], ["Passar o código para o amigo", "R", "Nunca passe o código."], ["Sair da conta na escola", "S", "O próximo não entra."]],
      "Conta protegida! 🔐", "Senha diferente, duas etapas e sair da conta."),
    VIDA(["Pediram o código que chegou no seu celular. Você…", ["Não passa", "Passa rapidinho"], "<b>Não passe</b>."], ["Com duas etapas, sem o código…", ["Ninguém entra", "Todo mundo entra"], "<b>Ninguém entra</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: protegida ou exposta?", "⚙️ Configurações", [["P", "🔒 Protegida"], ["E", "⚠️ Exposta"]], "Use a tabela da opção mais protegida.",
      [["Conta privada", "P", "Protegida."], ["Localização nos posts ligada", "E", "O mais protegido é desligada."], ["Mensagem só de amigos", "P", "Protegida."]],
      "Mandou bem! ⚙️", "Conta privada, localização desligada e mensagem só de amigos."),
    VIDA(["Um desconhecido chato manda mensagens. Você…", ["Bloqueia", "Manda o seu endereço"], "<b>Bloqueie</b>."], ["Onde escolher quem vê o quê?", ["Em Configurações", "No papel de parede"], "Em <b>Configurações</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: qual parte do plano?", "📋 Plano do guia", [["T", "🎯 Tema"], ["P", "👥 Público"], ["K", "🧩 Tarefas"]], "Use a tabela do 💡 Para começar.",
      [["Proteger a conta", "T", "Qual assunto: tema."], ["Os avós", "P", "Para quem: público."], ["Escrever e desenhar", "K", "Quem faz o quê: tarefas."]],
      "Plano pronto! 📋", "Tema, público e tarefas."),
    VIDA(["No guia, use…", ["Exemplos inventados", "Dados reais dos colegas"], "<b>Exemplos inventados</b>."], ["Para quem o guia é feito é o…", ["Público", "Tema"], "É o <b>público</b>."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: ajuda ou atrapalha?", "🎤 Apresentação", [["A", "👍 Ajuda"], ["X", "👎 Atrapalha"]], "Use as dicas para apresentar.",
      [["Uma dica por slide", "A", "Fica fácil de lembrar."], ["Uma imagem em cada dica", "A", "Ajuda a entender."], ["Passar muito do tempo", "X", "Todas as equipes precisam apresentar."]],
      "Mandou bem! 🎤", "Uma dica por slide, imagem e tempo respeitado."),
    VIDA(["Um bom feedback é…", ["Algo bom + uma sugestão", "Só “ficou ruim”"], "<b>Algo bom + uma sugestão</b>."], ["Por que uma imagem em cada dica?", ["Ajuda a entender", "Gasta tinta"], "<b>Ajuda a entender</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: como proteger?", "📍 Localização", [["C", "📷 Desligar a localização da câmera"], ["F", "👨‍👩‍👧 Só com a família"], ["D", "🏷️ Postar depois de sair"]], "Use a tabela do 💡 Para começar.",
      [["A foto mostra onde foi tirada", "C", "Desligue a localização da câmera."], ["Todos veem onde você está agora", "F", "Só com a família."], ["O check-in diz que você não está em casa", "D", "Poste depois de sair."]],
      "Mandou bem! 📍", "Você decide quem sabe onde você está."),
    VIDA(["O check-in num post diz que…", ["Você não está em casa", "Você está dormindo"], "Diz que você <b>não está em casa</b>."], ["A localização em tempo real, compartilhe…", ["Só com a família", "Com todo mundo"], "<b>Só com a família</b>."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: qual golpe?", "📲 Mensagens", [["C", "📞 Falsa central"], ["E", "📦 Falsa entrega"]], "Use a tabela dos golpes.",
      [["“Sou do banco, confirme o código”", "C", "Falsa central."], ["“Pague a taxa neste link”", "E", "Falsa entrega."], ["“Aqui é do banco, diga o código do SMS”", "C", "Falsa central."]],
      "Nenhum golpe passou! 🛡️", "Empresa séria não pede senha nem código."),
    VIDA(["Sabem o seu nome. Isso prova que é de confiança?", ["Não", "Sim"], "<b>Não prova</b>."], ["Empresa séria pede o código?", ["Não, nunca", "Sim"], "Empresa séria <b>não pede</b>."])
  ];
})();
