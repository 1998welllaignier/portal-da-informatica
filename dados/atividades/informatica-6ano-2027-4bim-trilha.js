/* ============================================================
   ATIVIDADES — Informática 6º ano — 4º bimestre de 2027 (Rede, arquivos e planeta) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande, quase tudo por clique.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const E = (titulo, p, opcoes, explicacao) => ({ tipo: "escolha", titulo, perguntas: [{ p, opcoes, certo: 0 }], explicacao });
  const SIGNIF = "<p>Veja o <strong>📖 O que significa?</strong>.</p>";
PORTAL.registrarAtividades("informatica-6ano-2027-4bim-trilha", {
  m1: {
    pratica: [{ tipo: "ordenar", titulo: "Monte a mensagem", enunciado: "<p>Veja a tabela <strong>Etiqueta do pacote · Para que serve</strong>. Use o número de cada pacote.</p>",
      itens: ["[1] Bom", "[2] dia,", "[3] turma!"], explicacao: "1 → 2 → 3: “Bom dia, turma!”" }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Pacote", b: "Um pedaço da informação" }, { a: "Destino", b: "Para onde vai" }], explicacao: "Pacote e destino." },
      E("Passo 2 · A foto", "Na internet, a foto viaja:", ["Em pacotes", "Inteira, de uma vez"], "Em pacotes."),
      E("Passo 3 · Fora de ordem", "Os pacotes chegaram fora de ordem. O que ajuda a montar?", ["O número de ordem", "A cor"], "O número de ordem.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "sempre chegam em ordem", opcoes: ["sempre chegam em ordem", "podem chegar fora de ordem"], certo: "podem chegar fora de ordem" } }]
  },
  m2: {
    pratica: [{ tipo: "ordenar", titulo: "O caminho em ordem", enunciado: "<p>Veja a tabela <strong>Parada · O que faz</strong>.</p>",
      itens: ["📱 Seu aparelho", "📶 Roteador de casa (Wi-Fi)", "🖥️ Servidor"], explicacao: "Aparelho → roteador → servidor." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Roteador", b: "Escolhe o caminho dos pacotes" }, { a: "Servidor", b: "Computador que guarda o site" }, { a: "Wi-Fi", b: "Internet sem fio" }], explicacao: "Roteador, servidor e Wi-Fi." },
      E("Passo 2 · O site", "O site fica guardado num:", ["Servidor", "Mouse da escola"], "Servidor."),
      E("Passo 3 · Outro continente", "Os continentes se ligam por:", ["Cabos no fundo do mar", "Uma corda no céu"], "Cabos no fundo do mar.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "passa pelo céu numa corda", opcoes: ["passa pelo céu numa corda", "passa por cabos no fundo do mar"], certo: "passa por cabos no fundo do mar" } }]
  },
  m3: {
    pratica: [{ tipo: "ordenar", titulo: "Do menor para o maior", enunciado: "<p>Veja a tabela <strong>Medida · Quanto é · Exemplo do que cabe</strong>.</p>",
      itens: ["Byte", "KB", "MB", "GB"], explicacao: "Byte → KB → MB → GB." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Bit", b: "0 ou 1" }, { a: "Byte", b: "8 bits" }, { a: "Compactar", b: "Juntar arquivos num .zip menor" }], explicacao: "Bit, byte e compactar." },
      E("Passo 2 · O maior", "O que é maior?", ["Um filme (GB)", "Uma foto (MB)"], "O filme."),
      E("Passo 3 · Muitas fotos", "Para mandar muitas fotos juntas, eu:", ["Compacto num .zip", "Apago as fotos"], "Compacto num .zip.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Uma foto é maior que um filme", opcoes: ["Uma foto é maior que um filme", "Um filme é maior que uma foto"], certo: "Um filme é maior que uma foto" } }]
  },
  m4: {
    pratica: [{ tipo: "ligar", titulo: "Metadado e exemplo", enunciado: "<p>Veja a tabela <strong>Metadado · Exemplo</strong>.</p>",
      pares: [{ a: "📏 Tamanho", b: "3 MB" }, { a: "📅 Data de criação", b: "12/09/2027" }], explicacao: "Tamanho e data." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Metadados", b: "Informações do arquivo (data, tamanho)" }, { a: "Pasta", b: "Lugar que guarda arquivos, como uma gaveta" }], explicacao: "Metadados e pasta." },
      E("Passo 2 · O melhor nome", "Qual nome é melhor?", ["2027-ciencias-planetas", "documento1"], "2027-ciencias-planetas."),
      { tipo: "classificar", titulo: "Passo 3 · Qual pasta?", categorias: [{ id: "E", rot: "📁 Escola" }, { id: "F", rot: "📁 Fotos" }], itens: [{ t: "trabalho-ciencias.docx", c: "E" }, { t: "praia.jpg", c: "F" }], explicacao: "Trabalho na Escola; foto em Fotos." }],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é um bom nome", opcoes: ["é um bom nome", "é um nome que se perde"], certo: "é um nome que se perde" } }]
  },
  m5: {
    pratica: [{ tipo: "classificar", titulo: "Preciso ou só quero?", enunciado: "<p>Veja a tabela <strong>Tipo de obsolescência · Exemplo</strong>.</p>",
      categorias: [{ id: "N", rot: "✅ Preciso" }, { id: "D", rot: "💭 Só quero" }],
      itens: [{ t: "Trocar só porque saiu um novo", c: "D" }, { t: "Trocar o que quebrou e não tem conserto", c: "N" }], explicacao: "Moda é só querer; sem conserto é precisar." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Obsolescência", b: "Trocar o aparelho antes da hora" }, { a: "Consertar", b: "Arrumar o que quebrou" }], explicacao: "Obsolescência e consertar." },
      E("Passo 2 · Antes de trocar", "Antes de trocar, eu vejo se dá para:", ["Consertar", "Jogar fora"], "Consertar."),
      E("Passo 3 · O calor", "Para a bateria durar, deixo o celular:", ["Longe do calor", "No sol"], "Longe do calor.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "O sol faz bem para a bateria", opcoes: ["O sol faz bem para a bateria", "O calor estraga a bateria"], certo: "O calor estraga a bateria" } }]
  },
  m6: {
    pratica: [{ tipo: "classificar", titulo: "Onde jogar?", enunciado: "<p>Veja a tabela <strong>Onde jogar · O que acontece</strong>.</p>",
      categorias: [{ id: "C", rot: "♻️ Ponto de coleta" }, { id: "L", rot: "🗑️ Lixo comum" }],
      itens: [{ t: "Pilha gasta", c: "C" }, { t: "Carregador estragado", c: "C" }, { t: "Casca de banana", c: "L" }], explicacao: "Eletrônicos no ponto de coleta." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Lixo eletrônico", b: "Aparelhos e pilhas jogados fora" }, { a: "Ponto de coleta", b: "Lugar que recebe para reciclar" }], explicacao: "Lixo eletrônico e ponto de coleta." },
      E("Passo 2 · A pilha", "A pilha gasta vai para:", ["O ponto de coleta", "O lixo comum"], "O ponto de coleta."),
      E("Passo 3 · No lixo comum", "No lixo comum, o lixo eletrônico:", ["Contamina a terra e a água", "Vira flor"], "Contamina.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Pilha vai no lixo comum", opcoes: ["Pilha vai no lixo comum", "Pilha vai para o ponto de coleta"], certo: "Pilha vai para o ponto de coleta" } }]
  },
  m7: {
    pratica: [{ tipo: "classificar", titulo: "Respeita ou não?", enunciado: "<p>Veja a tabela <strong>Combinado · Por quê</strong>.</p>",
      categorias: [{ id: "R", rot: "👍 Respeita" }, { id: "D", rot: "👎 Não respeita" }],
      itens: [{ t: "Escrever com respeito", c: "R" }, { t: "Foto de colega sem pedir", c: "D" }, { t: "Mensagem de madrugada", c: "D" }], explicacao: "Respeito, sim; foto sem pedir e madrugada, não." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Ética", b: "Agir com respeito" }, { a: "Combinado", b: "Regra do grupo" }], explicacao: "Ética e combinado." },
      E("Passo 2 · Ofensa", "Alguém foi ofendido no grupo. Eu:", ["Conto a um adulto", "Rio junto"], "Conto a um adulto."),
      E("Passo 3 · Foto", "Foto de colega no grupo:", ["Só pedindo antes", "Sem pedir"], "Só pedindo antes.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Posto foto de colega sem pedir", opcoes: ["Posto foto de colega sem pedir", "Peço antes de postar foto de colega"], certo: "Peço antes de postar foto de colega" } }]
  },
  m8: {
    pratica: [{ tipo: "ligar", titulo: "Lugar e vantagem", enunciado: "<p>Veja a tabela <strong>Onde guardar a cópia · Vantagem · Cuidado</strong>.</p>",
      pares: [{ a: "💾 Pen drive", b: "Não precisa de internet" }, { a: "☁️ Nuvem", b: "Acessa de qualquer lugar" }], explicacao: "Pen drive e nuvem." }],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?", enunciado: SIGNIF, pares: [{ a: "Backup", b: "Cópia de segurança" }, { a: "Nuvem", b: "Guardar arquivos na internet" }], explicacao: "Backup e nuvem." },
      E("Passo 2 · Onde fica a cópia", "A cópia fica:", ["Em outro lugar", "No mesmo lugar do original"], "Em outro lugar."),
      E("Passo 3 · Celular quebrou", "Celular quebrou. Quem tem backup:", ["Não perde as fotos", "Perde tudo"], "Não perde.")],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "fica no mesmo lugar do original", opcoes: ["fica no mesmo lugar do original", "fica em outro lugar"], certo: "fica em outro lugar" } }]
  },
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" }, Object.assign(E("M1 · Pacotes", "A foto viaja:", ["Em pacotes", "Inteira"], "Em pacotes."), { de: "m1" }),
      { tipo: "relembre", de: "m2" }, Object.assign(E("M2 · Caminho", "O site fica num:", ["Servidor", "Roteador"], "Servidor."), { de: "m2" }),
      { tipo: "relembre", de: "m3" }, Object.assign(E("M3 · Byte", "Um byte tem:", ["8 bits", "2 bits"], "8 bits."), { de: "m3" }),
      { tipo: "relembre", de: "m4" }, Object.assign(E("M4 · Pastas", "A pasta guarda:", ["Arquivos", "Pilhas"], "Arquivos."), { de: "m4" }),
      { tipo: "relembre", de: "m5" }, Object.assign(E("M5 · Trocar", "Antes de trocar, eu vejo se dá para:", ["Consertar", "Jogar fora"], "Consertar."), { de: "m5" }),
      { tipo: "relembre", de: "m6" }, Object.assign(E("M6 · Pilha", "A pilha vai para:", ["O ponto de coleta", "O lixo comum"], "Ponto de coleta."), { de: "m6" }),
      { tipo: "relembre", de: "m7" }, Object.assign(E("M7 · Grupo", "Ofensa no grupo:", ["Conto a um adulto", "Rio junto"], "Conto a um adulto."), { de: "m7" }),
      { tipo: "relembre", de: "m8" }, Object.assign(E("M8 · Backup", "Backup é:", ["Cópia de segurança", "Um jogo"], "Cópia de segurança."), { de: "m8" })
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-4bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Pacotes", [{ p: "A foto viaja:", opcoes: ["Em pacotes", "Inteira"], certo: 0 }, { p: "Os pacotes:", opcoes: ["Sempre chegam em ordem", "Podem chegar fora de ordem"], certo: 1 }]), pega("m1"),
    Q("m2", "Caminho", [{ p: "Quem escolhe o caminho:", opcoes: ["O roteador", "O servidor"], certo: 0 }, { p: "O site fica num:", opcoes: ["Roteador", "Servidor"], certo: 1 }]), pega("m2"),
    Q("m3", "Bits", [{ p: "Um byte tem:", opcoes: ["8 bits", "2 bits"], certo: 0 }, { p: "O maior é:", opcoes: ["Uma foto", "Um filme"], certo: 1 }]), pega("m3"),
    Q("m4", "Pastas", [{ p: "Data e tamanho são:", opcoes: ["Metadados", "Pacotes"], certo: 0 }, { p: "O melhor nome:", opcoes: ["documento1", "2027-ciencias-planetas"], certo: 1 }]), pega("m4"),
    Q("m5", "Consumo", [{ p: "Antes de trocar:", opcoes: ["Vejo se dá para consertar", "Jogo fora"], certo: 0 }, { p: "O calor:", opcoes: ["Faz bem para a bateria", "Estraga a bateria"], certo: 1 }]), pega("m5"),
    Q("m6", "Lixo eletrônico", [{ p: "A pilha vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }, { p: "Pilha é:", opcoes: ["Lixo comum", "Lixo eletrônico"], certo: 1 }]), pega("m6"),
    Q("m7", "Grupo", [{ p: "Ofensa no grupo:", opcoes: ["Conto a um adulto", "Rio junto"], certo: 0 }, { p: "Foto de colega:", opcoes: ["Sem pedir", "Só pedindo antes"], certo: 1 }]), pega("m7"),
    Q("m8", "Backup", [{ p: "Backup é:", opcoes: ["Cópia de segurança", "Vírus"], certo: 0 }, { p: "A cópia fica:", opcoes: ["No mesmo lugar", "Em outro lugar"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL — 🧭 Trilha (21/11/2026, Etapa 4: 4º bimestre de 2027)
   Mesmo ❓ gancho da turma, "O que você já sabe?" na M1 e 🛠️ "Onde eu uso isso?" calmo
   (3 itens + 2 perguntas). Sem Desafio/Turbo na Trilha.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-4bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>📸 A Duda mandou para a avó uma foto do aniversário. Por alguns segundos apareceu o reloginho, e depois a foto chegou inteirinha, do outro lado da cidade.</p><p>🤔 Como uma foto “viaja” pelo ar e pelos fios? Ela vai inteira, de uma vez?</p>"},"m2":{"html":"<p>🎬 O Theo assistiu a um vídeo de um youtuber de Portugal. O vídeo atravessou o oceano Atlântico em menos de um segundo!</p><p>🤔 Por onde ele passou? Voou pelo céu ou foi pelo fundo do mar?</p>"},"m3":{"html":"<p>📱 Na hora de gravar a apresentação da escola, o celular da Lia avisou: <b>“Armazenamento cheio”</b>. Ela tinha 300 fotos e 40 vídeos.</p><p>🤔 O que ocupa mais espaço: as fotos ou os vídeos? Como se mede esse espaço?</p>"},"m4":{"html":"<p>🖼️ Uma foto antiga apareceu no computador da escola. Ninguém lembrava quando nem onde ela tinha sido tirada… até a professora clicar com o botão direito e abrir as Propriedades.</p><p>🤔 Como o computador “sabia” a data e o aparelho daquela foto?</p>"},"m5":{"html":"<p>📱 O celular do Gabriel funciona direitinho. Mas saiu um modelo novo, e metade da sala diz que o dele é “velho”.</p><p>🤔 Ele precisa mesmo de um novo, ou só quer? Quem ganha quando a gente troca o aparelho sem precisar?</p>"},"m6":{"html":"<p>🔋 As pilhas do controle da TV acabaram. O irmão do Rafa já ia jogar tudo no lixo da cozinha, junto com o fone quebrado.</p><p>🤔 Qual é o problema? Para onde vai esse lixo depois?</p>"},"m7":{"html":"<p>📲 Às 2 da manhã, o celular da Bia apitou 30 vezes: era o grupo da turma, cheio de figurinhas e um print de uma conversa particular de um colega.</p><p>🤔 O que deu errado nesse grupo? Que combinados fariam falta?</p>"},"m8":{"html":"<p>💧 O celular da Carol caiu na piscina e não ligou mais. Todas as fotos da viagem estavam só nele.</p><p>🤔 Dava para ter salvado as fotos antes? Onde elas deveriam estar também?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  const LEMBRA = (...ps) => { A.m1.lembra = [perg("🔍 O que você já sabe?", ...ps)]; A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>"; };
  LEMBRA(["Uma foto guardada no computador é um…", ["Arquivo", "Teclado"], "É um <b>arquivo</b>."],
    ["Para a carta chegar, o envelope precisa do…", ["Endereço de quem vai receber", "Preço do pão"], "Do <b>endereço</b>."]);
  A.m1.aplicar = [
    msg("🛠️ Na vida real: qual etiqueta?", "📦 Pacote da foto", [["D", "📬 Destino"], ["N", "🔢 Número de ordem"]], "A foto virou pacotes. Qual etiqueta é cada uma?",
      [["O celular da avó, para onde a foto vai", "D", "Para onde vai."], ["“Pedaço 2”", "N", "A posição do pedaço."], ["“Pedaço 1”", "N", "A posição do pedaço."]],
      "Mandou bem! 📦", "Destino: para onde vai. Número de ordem: a posição do pedaço."),
    VIDA(["Na internet, a foto viaja…", ["Dividida em pacotes", "Inteira, de uma vez"], "Em <b>pacotes</b> (pedaços)."], ["Os pacotes chegaram fora de ordem. O que ajuda?", ["O número de ordem", "A cor"], "O <b>número</b> ajuda a montar de novo."])
  ];
  A.m2.aplicar = [
    rota("🛠️ Na vida real: a viagem do vídeo", "Coloque as paradas <b>na ordem</b>, do celular até o site.",
      [["📱", "Seu aparelho divide em pacotes"], ["📶", "O roteador de casa manda para a internet"], ["🖥️", "O servidor guarda o site"]],
      "Viagem completa! 🌍", "Aparelho, roteador de casa e servidor."),
    VIDA(["Quem guarda o site é o…", ["Servidor", "Mouse"], "O <b>servidor</b>."], ["Os continentes se ligam por…", ["Cabos no fundo do mar", "Cordas no céu"], "Por <b>cabos no fundo do mar</b>."])
  ];
  A.m3.aplicar = [
    msg("🛠️ Na vida real: qual medida?", "💾 Armazenamento", [["B", "🔹 Byte"], ["M", "🖼️ MB"], ["G", "🎬 GB"]], "Use a tabela das medidas.",
      [["Uma letra", "B", "Uma letra: 1 byte."], ["Uma foto", "M", "Uma foto: MB."], ["Um filme", "G", "Um filme: GB."]],
      "Mandou bem! 💾", "Do menor para o maior: byte, KB, MB, GB."),
    VIDA(["Muitas fotos para mandar de uma vez? Você…", ["Compacta num .zip", "Desenha as fotos"], "<b>Compacte</b> num .zip."], ["Do menor para o maior, qual vem por último?", ["GB", "MB"], "Do menor para o maior: byte → KB → MB → <b>GB</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: nome bom ou ruim?", "📁 Meus arquivos", [["B", "👍 Bom"], ["R", "👎 Ruim"]], "Qual nome ajuda a achar depois?",
      [["2027-ciencias-planetas", "B", "Ano e assunto."], ["documento1", "R", "Não diz nada."], ["2027-historia-trabalho", "B", "Ano e assunto."]],
      "Mandou bem! 📁", "Bom nome: o ano e o assunto."),
    VIDA(["Tamanho e data de criação são…", ["Metadados", "Pastas"], "São <b>metadados</b>."], ["Para guardar os trabalhos, use…", ["Uma pasta para cada matéria", "Tudo misturado"], "<b>Uma pasta para cada matéria</b>."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: troca ou não troca?", "📱 Celular", [["F", "✋ Não troca ainda"], ["T", "🔁 Pode pensar em trocar"]], "Antes de trocar: ele funciona? Dá para consertar?",
      [["Funciona bem, mas saiu um modelo novo", "F", "Trocar só pela moda é obsolescência."], ["A tela quebrou, mas dá para consertar", "F", "Dá para consertar."], ["Quebrou e não tem conserto", "T", "Não funciona e não dá para consertar."]],
      "Consumidor consciente! 📱", "Antes de trocar: ele funciona? Dá para consertar?"),
    VIDA(["O que estraga a bateria?", ["O calor", "A capa"], "O <b>calor</b>."], ["Para o celular durar, use…", ["Capa", "Martelo"], "<b>Capa</b> e longe do calor."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: para onde vai?", "♻️ Separando o lixo", [["E", "♻️ Ponto de coleta"], ["L", "🗑️ Lixo comum"]], "Pilha, carregador e celular velho vão para o ponto de coleta.",
      [["Pilha gasta", "E", "Ponto de coleta."], ["Casca de banana", "L", "Não é eletrônico."], ["Carregador quebrado", "E", "Ponto de coleta."]],
      "Lixo bem separado! ♻️", "Lixo eletrônico vai para o ponto de coleta."),
    VIDA(["No lixo comum, a pilha…", ["Contamina a terra e a água", "Vira flor"], "<b>Contamina</b> a terra e a água."], ["No ponto de coleta, o lixo vai para a…", ["Reciclagem", "Rua"], "Vai para a <b>reciclagem</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: respeita o combinado?", "💬 Grupo da turma", [["S", "✅ Respeita"], ["N", "🚫 Desrespeita"]], "Use os combinados do grupo.",
      [["Escrever com respeito", "S", "Evita ofensas."], ["Postar foto de colega sem pedir", "N", "Só pedindo antes."], ["Mandar mensagem de madrugada", "N", "As pessoas descansam."]],
      "Grupo em paz! 💬", "Respeito, pedir antes de postar foto e nada de madrugada."),
    VIDA(["Alguém foi ofendido no grupo. Você…", ["Conta a um adulto", "Ri junto"], "<b>Conte a um adulto</b>."], ["Foto de colega no grupo:", ["Só pedindo antes", "Sem perguntar"], "<b>Só pedindo antes</b>."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: onde guardar a cópia?", "💾 Backup", [["P", "💾 Pen drive"], ["N", "☁️ Nuvem"]], "Use a tabela do 💡 Para começar.",
      [["Quero ver as fotos de qualquer lugar", "N", "A nuvem acessa de qualquer lugar."], ["Em casa não tem internet", "P", "O pen drive não precisa de internet."], ["Quero a cópia na internet, com senha forte", "N", "A nuvem precisa de senha forte."]],
      "Cópia segura! 💾", "Backup é uma cópia dos arquivos em outro lugar."),
    VIDA(["Backup é…", ["Uma cópia dos arquivos em outro lugar", "Um jogo"], "Uma <b>cópia</b> em outro lugar."], ["O celular quebrou. Quem tem backup…", ["Não perde as fotos", "Perde tudo"], "<b>Não perde</b> as fotos."])
  ];
})();
