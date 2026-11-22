/* ============================================================
   ATIVIDADES — Informática 6º ano — 3º bimestre de 2027 (Programação em blocos) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez e programas curtos (quase tudo já vem montado).
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const saudar = ["funcao", "saudar", [["mostrar", ["juntar", "Olá, ", v("nome")]]]];
PORTAL.registrarAtividades("informatica-6ano-2027-3bim-trilha", {

  m1: {
    pratica: [
      { tipo: "blocos", titulo: "Rode o programa",
        enunciado: "<p>O programa já está pronto. Aperte <strong>▶️ Rodar o programa</strong> e veja a tela.</p><p>Depois troque o texto <strong>Oi</strong> por <strong>Olá!</strong> e rode de novo.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Oi"]],
        esperado: ["Olá!"],
        solucao: [["mostrar", "Olá!"]],
        dicas: ["Clique no texto Oi do bloco e escreva Olá!"],
        explicacao: "O bloco mostrar na tela escreve o texto na tela." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Passo 1 · Encaixe um bloco",
        enunciado: "<p>Encaixe embaixo do “Olá!” um bloco <strong>mostrar</strong> com <strong>Tchau!</strong>.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Olá!"]],
        esperado: ["Olá!", "Tchau!"],
        solucao: [["mostrar", "Olá!"], ["mostrar", "Tchau!"]],
        dicas: ["Abra a gaveta 📺 Mostrar e arraste o bloco até grudar embaixo."],
        explicacao: "Um bloco embaixo do outro: de cima para baixo." },
      { tipo: "ordenar", titulo: "Passo 2 · Os passos do editor",
        enunciado: "<p>Veja a tabela <strong>Passo · O que fazer</strong>.</p>",
        itens: ["Abrir a gaveta", "Arrastar o bloco", "Encaixar", "Apertar ▶️ Rodar"],
        explicacao: "Gaveta → arrastar → encaixar → rodar." },
      { tipo: "escolha", titulo: "Passo 3 · De onde para onde?",
        perguntas: [{ p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima"], certo: 0 }],
        explicacao: "De cima para baixo." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "não importa", opcoes: ["não importa", "importa"], certo: "importa" } }]
  },

  m2: {
    pratica: [
      { tipo: "blocos", titulo: "Mude o número do repita",
        enunciado: "<p>Mude o <strong>2</strong> do repita para <strong>3</strong> e rode.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 2, [["mostrar", "pula"]]]],
        esperado: ["pula", "pula", "pula"],
        solucao: [["repita", 3, [["mostrar", "pula"]]]],
        dicas: ["Clique no número 2 e escreva 3."],
        explicacao: "repita 3 vezes: pula, pula, pula." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Passo 1 · Coloque dentro do repita",
        enunciado: "<p>Arraste o bloco <strong>mostrar “palma”</strong> para <strong>dentro</strong> do repita.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 3, []], ["mostrar", "palma"]],
        esperado: ["palma", "palma", "palma"], exige: ["repita"],
        solucao: [["repita", 3, [["mostrar", "palma"]]]],
        dicas: ["Solte o bloco na “boca” do repita, onde está escrito faça."],
        explicacao: "Dentro do repita, o bloco se repete." },
      { tipo: "ligar", titulo: "Passo 2 · O que faz?",
        enunciado: "<p>Veja a tabela <strong>Bloco · O que faz</strong>.</p>",
        pares: [{ a: "🔁 repita", b: "Faz várias vezes" }, { a: "🔀 se … senão", b: "Escolhe um caminho" }],
        explicacao: "Repita repete; se escolhe." },
      { tipo: "escolha", titulo: "Passo 3 · Se chover",
        perguntas: [{ p: "Se chover, eu levo:", opcoes: ["Guarda-chuva", "Boné"], certo: 0 }],
        explicacao: "Se chover: guarda-chuva." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "O repita escolhe um caminho", opcoes: ["O repita escolhe um caminho", "O se escolhe um caminho"], certo: "O se escolhe um caminho" } }]
  },

  m3: {
    pratica: [
      { tipo: "blocos", titulo: "Altere os pontos",
        enunciado: "<p>Mude o número do <strong>alterar pontos por</strong> de 1 para <strong>5</strong> e rode.</p>",
        caixa: ["mostrar", "numero", "variavel"],
        inicio: [["definir", "pontos", 0], ["mudar", "pontos", 1], ["mostrar", v("pontos")]],
        esperado: ["5"],
        solucao: [["definir", "pontos", 0], ["mudar", "pontos", 5], ["mostrar", v("pontos")]],
        dicas: ["Clique no 1 do bloco alterar e escreva 5."],
        explicacao: "0 + 5 = 5." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Siga a caixinha",
        enunciado: "<p>Veja a tabela <strong>Bloco · Valor de pontos</strong>.</p>",
        dicas: ["Releia a tabela da apostila."],
        colunas: ["Bloco", "Valor de pontos"],
        linhas: [["definir pontos para 0", { op: ["0", "5", "8"], r: "0" }], ["alterar pontos por 5", { op: ["0", "5", "8"], r: "5" }], ["alterar pontos por 3", { op: ["0", "5", "8"], r: "8" }]],
        explicacao: "0 → 5 → 8." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Variável", b: "Caixinha com nome" }, { a: "Valor", b: "O que está guardado" }, { a: "Alterar por", b: "Somar ao valor" }],
        explicacao: "Variável, valor e alterar por." },
      { tipo: "escolha", titulo: "Passo 3 · O placar",
        perguntas: [{ p: "O placar do jogo é uma:", opcoes: ["Variável", "Gaveta"], certo: 0 }],
        explicacao: "Variável." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "não guarda nada", opcoes: ["não guarda nada", "guarda um valor"], certo: "guarda um valor" } }]
  },

  m4: {
    pratica: [
      { tipo: "blocos", titulo: "Chame o bloco saudar",
        enunciado: "<p>Pegue o bloco <strong>saudar</strong> na gaveta <strong>🧩 Meus blocos</strong> e encaixe embaixo do “definir nome”.</p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [saudar, ["definir", "nome", "Ana"]],
        esperado: ["Olá, Ana"],
        solucao: [saudar, ["definir", "nome", "Ana"], ["chamar", "saudar"]],
        dicas: ["O bloco para chamar se chama só saudar."],
        explicacao: "Chamar faz o bloco funcionar." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Passo 1 · Troque o nome",
        enunciado: "<p>Troque <strong>Ana</strong> por <strong>Leo</strong> no definir nome e rode.</p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [saudar, ["definir", "nome", "Ana"], ["chamar", "saudar"]],
        esperado: ["Olá, Leo"],
        solucao: [saudar, ["definir", "nome", "Leo"], ["chamar", "saudar"]],
        dicas: ["Clique no texto Ana e escreva Leo."],
        explicacao: "O bloco é o mesmo; só o nome (o parâmetro) mudou." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Chamar", b: "Mandar o bloco fazer o que tem dentro" }, { a: "Parâmetro", b: "O valor que muda" }],
        explicacao: "Chamar e parâmetro." },
      { tipo: "escolha", titulo: "Passo 3 · Um bloco",
        perguntas: [{ p: "Para dois nomes, eu uso:", opcoes: ["O mesmo bloco", "Dois blocos novos"], certo: 0 }],
        explicacao: "O mesmo bloco." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "preciso de um bloco novo", opcoes: ["preciso de um bloco novo", "uso o mesmo bloco"], certo: "uso o mesmo bloco" } }]
  },

  m5: {
    pratica: [
      { tipo: "blocos", titulo: "Pegue o item 3",
        enunciado: "<p>Mude o número <strong>1</strong> para <strong>3</strong> e rode.</p>",
        caixa: ["mostrar", "numero", "variavel", "lista"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju")], ["mostrar", ["item", v("frutas"), 1]]],
        esperado: ["caju"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju")], ["mostrar", ["item", v("frutas"), 3]]],
        dicas: ["O item 3 é caju."],
        explicacao: "Posição 3 = caju." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Qual item?",
        enunciado: "<p>Lista frutas = [maçã, uva, caju].</p>",
        pares: [{ a: "Item 1", b: "maçã" }, { a: "Item 2", b: "uva" }, { a: "Item 3", b: "caju" }],
        explicacao: "1 = maçã; 2 = uva; 3 = caju." },
      { tipo: "classificar", titulo: "Passo 2 · Número ou texto?",
        categorias: [{ id: "N", rot: "🔢 Número" }, { id: "T", rot: "🔤 Texto" }],
        itens: [{ t: "7", c: "N" }, { t: "“Ana”", c: "T" }, { t: "15", c: "N" }],
        explicacao: "7 e 15 são números; “Ana” é texto." },
      { tipo: "escolha", titulo: "Passo 3 · A lista",
        perguntas: [{ p: "A lista guarda:", opcoes: ["Vários valores", "Um valor só"], certo: 0 }],
        explicacao: "Vários valores." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é um número", opcoes: ["é um número", "é um texto"], certo: "é um texto" } }]
  },

  m6: {
    pratica: [
      { tipo: "blocos", titulo: "O botão verde",
        enunciado: "<p>Dentro do <strong>⚡ quando</strong> do botão verde, mude o número de <strong>0</strong> para <strong>1</strong>. Ao rodar, o portal aperta o botão verde 2 vezes.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🟢 botão verde (moeda)", "verde"]], disparos: ["verde", "verde"],
        inicio: [["definir", "pontos", 0], ["quando", "verde", [["mudar", "pontos", 0], ["mostrar", v("pontos")]]]],
        esperado: ["1", "2"],
        solucao: [["definir", "pontos", 0], ["quando", "verde", [["mudar", "pontos", 1], ["mostrar", v("pontos")]]]],
        dicas: ["Clique no 0 do alterar pontos por e escreva 1."],
        explicacao: "Cada botão verde dá mais 1 ponto: 1, 2." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Evento ou ação?",
        categorias: [{ id: "E", rot: "⚡ Evento" }, { id: "A", rot: "🎬 Ação" }],
        itens: [{ t: "Apertar o botão", c: "E" }, { t: "Somar 1 ponto", c: "A" }],
        explicacao: "Apertar = evento; somar = ação." },
      { tipo: "escolha", titulo: "Passo 2 · O botão verde",
        perguntas: [{ p: "O botão verde dá:", opcoes: ["Mais 1 ponto", "Menos 1 ponto"], certo: 0 }],
        explicacao: "Mais 1 ponto." },
      { tipo: "escolha", titulo: "Passo 3 · O começo",
        perguntas: [{ p: "No começo do jogo, pontos vale:", opcoes: ["0", "10"], certo: 0 }],
        explicacao: "0." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é um erro do programa", opcoes: ["é um erro do programa", "é algo que acontece"], certo: "é algo que acontece" } }]
  },

  m7: {
    pratica: [
      { tipo: "blocos", titulo: "Ache o bug",
        enunciado: "<p>Devia aparecer <strong>hip</strong> 3 vezes, mas aparece 2. Conserte o número.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 2, [["mostrar", "hip"]]]],
        esperado: ["hip", "hip", "hip"],
        solucao: [["repita", 3, [["mostrar", "hip"]]]],
        dicas: ["O bug é o número do repita."],
        explicacao: "2 → 3: bug consertado." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Siga o x",
        enunciado: "<p>Veja a tabela <strong>Bloco · x</strong>.</p>",
        dicas: ["Releia a tabela da apostila."],
        colunas: ["Bloco", "x"],
        linhas: [["definir x para 2", { op: ["2", "4"], r: "2" }], ["alterar x por 2", { op: ["2", "4"], r: "4" }]],
        explicacao: "2 → 4." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Bug", b: "Erro no programa" }, { a: "Depurar", b: "Achar e consertar o erro" }],
        explicacao: "Bug e depurar." },
      { tipo: "escolha", titulo: "Passo 3 · O que aparece?",
        perguntas: [{ p: "definir x para 2 · alterar x por 2 · mostrar x. Aparece:", opcoes: ["4", "2"], certo: 0 }],
        explicacao: "4." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "deixa x com 2", opcoes: ["deixa x com 2", "deixa x com 4"], certo: "deixa x com 4" } }]
  },

  m8: {
    pratica: [
      { tipo: "blocos", titulo: "Toc, toc, toc",
        enunciado: "<p>Mude o repita para <strong>3</strong> vezes, para o “toc” aparecer 3 vezes.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["mostrar", "Era uma vez Tito"], ["repita", 1, [["mostrar", "toc"]]], ["mostrar", "Tito abriu a porta"]],
        esperado: ["Era uma vez Tito", "toc", "toc", "toc", "Tito abriu a porta"],
        solucao: [["mostrar", "Era uma vez Tito"], ["repita", 3, [["mostrar", "toc"]]], ["mostrar", "Tito abriu a porta"]],
        dicas: ["Clique no 1 do repita e escreva 3."],
        explicacao: "Três toc: o repita faz a parte que se repete." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Ideia e bloco",
        enunciado: "<p>Veja a tabela <strong>Ideia da história · Bloco</strong>.</p>",
        pares: [{ a: "Uma cena depois da outra", b: "mostrar, mostrar" }, { a: "O que se repete", b: "repita" }],
        explicacao: "Sequência e repita." },
      { tipo: "escolha", titulo: "Passo 2 · Cena",
        perguntas: [{ p: "Cada linha da tela é uma:", opcoes: ["Cena", "Lista"], certo: 0 }],
        explicacao: "Cena." },
      { tipo: "escolha", titulo: "Passo 3 · Personagem",
        perguntas: [{ p: "Quem vive a história é o:", opcoes: ["Personagem", "Bug"], certo: 0 }],
        explicacao: "Personagem." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "não tem começo", opcoes: ["não tem começo", "tem começo, meio e fim"], certo: "tem começo, meio e fim" } }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Programa", perguntas: [{ p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima"], certo: 0 }], explicacao: "De cima para baixo." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ligar", de: "m2", titulo: "M2 · Repita e se", pares: [{ a: "repita", b: "Faz várias vezes" }, { a: "se", b: "Escolhe um caminho" }], explicacao: "Repita e se." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Variável", perguntas: [{ p: "Variável é uma:", opcoes: ["Caixinha com nome", "Gaveta"], certo: 0 }], explicacao: "Caixinha com nome." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Meu bloco", perguntas: [{ p: "O valor que muda é o:", opcoes: ["Parâmetro", "Bug"], certo: 0 }], explicacao: "Parâmetro." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Lista", perguntas: [{ p: "Na lista [maçã, uva, caju], o item 1 é:", opcoes: ["maçã", "caju"], certo: 0 }], explicacao: "maçã." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Evento", perguntas: [{ p: "Apertar um botão é um:", opcoes: ["Evento", "Bug"], certo: 0 }], explicacao: "Evento." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Bug", perguntas: [{ p: "Bug é:", opcoes: ["Um erro", "Um bloco"], certo: 0 }], explicacao: "Um erro." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · História", perguntas: [{ p: "Cada linha da tela é uma:", opcoes: ["Cena", "Lista"], certo: 0 }], explicacao: "Cena." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-3bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Programa", [{ p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima"], certo: 0 }, { p: "Para ver o resultado, aperto:", opcoes: ["🧹 Limpar", "▶️ Rodar"], certo: 1 }]), pega("m1"),
    Q("m2", "Repita e se", [{ p: "O repita:", opcoes: ["Faz várias vezes", "Escolhe um caminho"], certo: 0 }, { p: "O se:", opcoes: ["Repete", "Escolhe um caminho"], certo: 1 }]), pega("m2"),
    Q("m3", "Variável", [{ p: "Variável é uma:", opcoes: ["Caixinha com nome", "Gaveta"], certo: 0 }, { p: "definir 0 · alterar por 5. O valor é:", opcoes: ["0", "5"], certo: 1 }]), pega("m3"),
    Q("m4", "Meu bloco", [{ p: "O valor que muda é o:", opcoes: ["Parâmetro", "Bug"], certo: 0 }, { p: "Para o bloco funcionar, eu:", opcoes: ["Apago", "Chamo"], certo: 1 }]), pega("m4"),
    Q("m5", "Lista", [{ p: "O item 2 de [maçã, uva, caju] é:", opcoes: ["uva", "caju"], certo: 0 }, { p: "“Ana” é:", opcoes: ["Número", "Texto"], certo: 1 }]), pega("m5"),
    Q("m6", "Joguinho", [{ p: "Apertar o botão é um:", opcoes: ["Evento", "Bug"], certo: 0 }, { p: "O botão verde dá:", opcoes: ["Menos 1", "Mais 1"], certo: 1 }]), pega("m6"),
    Q("m7", "Bug", [{ p: "Bug é:", opcoes: ["Um erro", "Um bloco"], certo: 0 }, { p: "Consertar o erro é:", opcoes: ["Planejar", "Depurar"], certo: 1 }]), pega("m7"),
    Q("m8", "História", [{ p: "Cada linha da tela é uma:", opcoes: ["Cena", "Lista"], certo: 0 }, { p: "O que se repete usa o:", opcoes: ["se", "repita"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 3: 3º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma: o programa já vem quase pronto
   e o aluno muda só um pedacinho; depois, 2 perguntas.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-3bim-trilha"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const GANCHO = {"m1":{"html":"<p>🎂 O robô da festa devia dizer <b>“Parabéns!”</b> e depois <b>“Hora do bolo!”</b>. Mas ele disse ao contrário, e todo mundo riu.</p><p>🤔 Por que o robô trocou? Ele entende o que a gente quer, ou só faz exatamente o que está escrito?</p>"},"m2":{"html":"<p>⚽ O professor de Educação Física disse: “Façam <b>3 polichinelos</b>! E, <b>se</b> estiver chovendo, o treino é na sala; <b>senão</b>, é na quadra.”</p><p>🤔 Como mandar o computador <b>repetir</b> sem escrever 3 vezes? E como ele <b>escolhe</b> entre a sala e a quadra?</p>"},"m3":{"html":"<p>🚌 O cartão do ônibus da Bia começa com <b>10 viagens</b>. A cada viagem, o leitor do ônibus tira 1.</p><p>🤔 Como o leitor “lembra” quantas viagens ainda restam? Onde esse número fica guardado?</p>"},"m4":{"html":"<p>🎤 Na festa junina, o apresentador anuncia cada quadrilha com a mesma frase: “Palmas para a turma 6º A!”, “Palmas para a turma 6º B!”…</p><p>🤔 Se fosse um programa, seria preciso montar a frase de novo a cada turma? Ou dá para criar um bloco só e mudar só a turma?</p>"},"m5":{"html":"<p>🎵 A playlist do Davi tem 3 músicas. Ele quer saber qual é a <b>2ª</b> e quantas músicas tem ao todo.</p><p>🤔 Como um programa guarda várias músicas numa variável só? E como ele acha a música pela posição?</p>"},"m6":{"html":"<p>🎮 No joguinho do celular, cada vez que você toca na moeda, ganha ponto. Se tocar na bomba, perde.</p><p>🤔 Como o jogo sabe a <b>hora</b> de mudar os pontos? Ele fica esperando você tocar?</p>"},"m7":{"html":"<p>🔍 Antes de rodar o programa, a Ana disse: “vai aparecer 8!”. O Leo disse: “vai aparecer 6!”. Só um acertou.</p><p>🤔 Dá para saber o resultado <b>sem rodar</b>? E, se o programa estiver errado, como achar o bug?</p>"},"m8":{"html":"<p>📚 O Caio escreveu uma história com o nome do personagem, <b>Tito</b>, em 10 cenas. No fim, resolveu trocar o nome para <b>Nina</b>.</p><p>🤔 Ele vai ter que trocar o nome 10 vezes? Ou existe um jeito de trocar em um lugar só?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const blk = (titulo, enun, caixa, inicio, esperado, solucao, dica, explicacao, extra) => Object.assign({ tipo: "blocos", titulo, enunciado: enun, caixa, inicio, esperado, solucao, dicas: [dica], explicacao }, extra || {});

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["O computador lê os blocos…", ["De cima para baixo", "De baixo para cima"], "De <b>cima para baixo</b>."],
    ["Para ver o programa funcionar, você aperta…", ["▶️ Rodar o programa", "O botão de desligar"], "Aperte <b>▶️ Rodar o programa</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    blk("🛠️ Na vida real: o aviso no telão", "<p>O aviso tem 2 linhas, mas a segunda está vazia. Clique no <b>???</b> e escreva <b>Amanhã tem passeio.</b> Depois aperte ▶️ Rodar.</p>",
      ["mostrar", "texto"], [["mostrar", "Atenção, turma!"], ["mostrar", "???"]], ["Atenção, turma!", "Amanhã tem passeio."], [["mostrar", "Atenção, turma!"], ["mostrar", "Amanhã tem passeio."]],
      "Clique no ??? do segundo bloco e digite a frase.", "Os blocos aparecem na tela de cima para baixo."),
    VIDA(["O bloco de cima aparece…", ["Primeiro", "Por último"], "De cima para baixo: o de cima aparece <b>primeiro</b>."], ["Onde ficam os blocos para escolher?", ["Nas gavetas", "Na lixeira"], "Os blocos ficam nas <b>gavetas</b>."])
  ];
  A.m2.aplicar = [
    blk("🛠️ Na vida real: os polichinelos", "<p>O professor pediu <b>3 polichinelos</b>, mas o programa faz só 2. Troque o número do <b>repita</b> para <b>3</b> e rode.</p>",
      ["mostrar", "texto", "numero", "repita"], [["repita", 2, [["mostrar", "polichinelo"]]]], ["polichinelo", "polichinelo", "polichinelo"], [["repita", 3, [["mostrar", "polichinelo"]]]],
      "Clique no 2 do repita e digite 3.", "O repita faz o bloco de dentro várias vezes."),
    VIDA(["“Fazer 10 polichinelos” é uma…", ["Repetição", "Seleção"], "Fazer várias vezes é <b>repetição</b>."], ["“Se chover, guarda-chuva; senão, boné” é uma…", ["Seleção", "Repetição"], "Escolher um caminho é <b>seleção</b>."])
  ];
  A.m3.aplicar = [
    blk("🛠️ Na vida real: o placar do jogo", "<p>O placar começa em 0. O time fez um gol de <b>5</b> pontos e outro de <b>3</b>. Falta o segundo número: troque o <b>0</b> do segundo “alterar” por <b>3</b> e rode.</p>",
      ["mostrar", "texto", "numero", "variavel"], [["definir", "pontos", 0], ["mudar", "pontos", 5], ["mudar", "pontos", 0], ["mostrar", v("pontos")]], ["8"], [["definir", "pontos", 0], ["mudar", "pontos", 5], ["mudar", "pontos", 3], ["mostrar", v("pontos")]],
      "Clique no 0 do segundo “alterar pontos por” e digite 3.", "0 + 5 + 3 = 8: a variável pontos guardou o placar."),
    VIDA(["Variável é…", ["Uma caixinha com nome que guarda um valor", "Um botão"], "É uma <b>caixinha com nome</b>."], ["“alterar pontos por 5” faz…", ["Somar 5 aos pontos", "Apagar os pontos"], "<b>Soma</b> 5 ao valor."])
  ];
  A.m4.aplicar = [
    blk("🛠️ Na vida real: chamar a turma", "<p>O bloco <b>saudar</b> já está pronto e já foi chamado para a Ana. Agora chame para o <b>Leo</b>: troque o <b>???</b> por <b>Leo</b> e rode.</p>",
      ["mostrar", "texto", "variavel", "funcao"], [["funcao", "saudar", [["mostrar", ["juntar", "Olá, ", v("nome")]]]], ["definir", "nome", "Ana"], ["chamar", "saudar"], ["definir", "nome", "???"], ["chamar", "saudar"]], ["Olá, Ana", "Olá, Leo"],
      [["funcao", "saudar", [["mostrar", ["juntar", "Olá, ", v("nome")]]]], ["definir", "nome", "Ana"], ["chamar", "saudar"], ["definir", "nome", "Leo"], ["chamar", "saudar"]],
      "Clique no ??? e digite Leo.", "O bloco saudar é o mesmo; só o parâmetro (nome) mudou."),
    VIDA(["Para o bloco funcionar, eu…", ["Chamo o bloco", "Apago o bloco"], "Eu <b>chamo</b> o bloco."], ["O valor que muda (o nome) é o…", ["Parâmetro", "Bloco solto"], "É o <b>parâmetro</b>."])
  ];
  A.m5.aplicar = [
    blk("🛠️ Na vida real: o lanche da cantina", "<p>A lista <b>lanches</b> é [pão de queijo, bolo, suco]. Queremos o <b>item 2</b>, mas o programa pede o 1. Troque o número para <b>2</b> e rode.</p>",
      ["mostrar", "texto", "numero", "variavel", "lista"], [["definir", "lanches", L("pão de queijo", "bolo", "suco")], ["mostrar", ["item", v("lanches"), 1]]], ["bolo"], [["definir", "lanches", L("pão de queijo", "bolo", "suco")], ["mostrar", ["item", v("lanches"), 2]]],
      "Clique no 1 do “obter nº” e digite 2.", "O item da posição 2 é bolo."),
    VIDA(["Na lista [maçã, uva, caju], o item 1 é…", ["maçã", "caju"], "A posição 1 é <b>maçã</b>."], ["Uma lista guarda…", ["Vários valores", "Um valor só"], "A lista guarda <b>vários valores</b>."])
  ];
  A.m6.aplicar = [
    blk("🛠️ Na vida real: o placar do basquete", "<p>Cada <b>🏀 cesta</b> vale 2 pontos, mas o programa está somando 1. Troque o <b>1</b> por <b>2</b> e rode. O portal vai apertar a cesta 2 vezes.</p>",
      ["mostrar", "texto", "numero", "variavel", "evento"], [["definir", "pontos", 0], ["quando", "cesta", [["mudar", "pontos", 1], ["mostrar", v("pontos")]]]], ["2", "4"],
      [["definir", "pontos", 0], ["quando", "cesta", [["mudar", "pontos", 2], ["mostrar", v("pontos")]]]],
      "Clique no 1 do “alterar pontos por” e digite 2.", "A cesta é o evento; o “quando” diz o que fazer.", { eventos: [["🏀 cesta", "cesta"]], disparos: ["cesta", "cesta"] }),
    VIDA(["Apertar um botão é um…", ["Evento", "Gaveta"], "É um <b>evento</b>."], ["O bloco ⚡ quando diz…", ["O que fazer quando o evento acontece", "A cor do botão"], "Diz <b>o que fazer</b> quando o evento acontece."])
  ];
  A.m7.aplicar = [
    blk("🛠️ Na vida real: o bug do recado", "<p>O recado devia ser <b>Oi!</b> e depois <b>Tchau!</b>, mas saiu ao contrário. Arraste o “mostrar Oi!” para <b>cima</b> e rode.</p>",
      ["mostrar", "texto"], [["mostrar", "Tchau!"], ["mostrar", "Oi!"]], ["Oi!", "Tchau!"], [["mostrar", "Oi!"], ["mostrar", "Tchau!"]],
      "Puxe o bloco “mostrar Oi!” para cima do outro.", "Era a ordem trocada. Achar e consertar o erro é depurar."),
    VIDA(["Bug é…", ["Um erro no programa", "Um bloco novo"], "<b>Bug</b> é um erro."], ["Achar e consertar o erro é…", ["Depurar", "Rodar"], "É <b>depurar</b>."])
  ];
  A.m8.aplicar = [
    blk("🛠️ Na vida real: as batidas na porta", "<p>Na história, o Tito bate <b>3 vezes</b> na porta, mas o programa bate só 1. Troque o número do <b>repita</b> para <b>3</b> e rode.</p>",
      ["mostrar", "texto", "numero", "repita"], [["mostrar", "Era uma vez Tito"], ["repita", 1, [["mostrar", "toc"]]], ["mostrar", "Tito abriu a porta"]], ["Era uma vez Tito", "toc", "toc", "toc", "Tito abriu a porta"],
      [["mostrar", "Era uma vez Tito"], ["repita", 3, [["mostrar", "toc"]]], ["mostrar", "Tito abriu a porta"]], "Clique no 1 do repita e digite 3.", "Cada linha é uma cena; o repita fez as 3 batidas."),
    VIDA(["Cada linha da tela é uma…", ["Cena", "Lista"], "Cada linha é uma <b>cena</b>."], ["O que se repete na história (toc, toc, toc) usa o…", ["Repita", "Se"], "Usa o <b>repita</b>."])
  ];
})();
