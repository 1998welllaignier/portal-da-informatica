/* ============================================================
   ATIVIDADES — Informática 9º ano — 3º bimestre de 2027 (Tecnologia e sociedade) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
PORTAL.registrarAtividades("informatica-9ano-2027-3bim-trilha", {

  m1: {
    pratica: [
      { tipo: "rota", titulo: "Os passos para pensar num problema",
        enunciado: "<p>Clique na ordem. Veja a tabela <strong>Passo · O que fazer</strong>.</p>",
        etapas: [{ ic: "👀", t: "Observar" }, { ic: "☝️", t: "Escolher um problema" }, { ic: "🧍", t: "Ver quem sofre" }, { ic: "💡", t: "Imaginar a solução" }],
        okMsg: "Você pensou como quem resolve! 🏙️", explicacao: "Observar → escolher → quem sofre → solução." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Qual solução?",
        pares: [{ a: "Marcar onde estão os problemas", b: "🗺️ Mapa" }, { a: "Medir sozinho a chuva", b: "📡 Sensor" }, { a: "Avisar muita gente", b: "💬 Mensagem" }],
        explicacao: "Marcar = mapa; medir = sensor; avisar = mensagem." },
      { tipo: "escolha", titulo: "Passo 2 · O primeiro passo",
        perguntas: [{ p: "O primeiro passo é:", opcoes: ["Observar", "Testar"], certo: 0 }],
        explicacao: "Observar." },
      { tipo: "escolha", titulo: "Passo 3 · Quem sofre?",
        perguntas: [{ p: "Nas ruas escuras, quem sofre?", opcoes: ["Quem anda à noite", "Ninguém"], certo: 0 }],
        explicacao: "Quem anda à noite." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Não importa", opcoes: ["Não importa", "Importa"], certo: "Importa" } }]
  },

  m2: {
    pratica: [
      { tipo: "tabela", titulo: "Leia a tabela dos bairros",
        enunciado: "<p>Veja a tabela <strong>Bairro (inventado) · Pedidos</strong>.</p>",
        dicas: ["Releia a tabela dos bairros."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Pedidos no Bairro das Flores:", { op: ["12", "7", "15"], r: "12" }], ["Bairro com mais pedidos:", { op: ["Bairro Novo", "Bairro do Rio"], r: "Bairro Novo" }]],
        explicacao: "Flores = 12; o maior é o Bairro Novo (15)." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Aberto ou pessoal?",
        categorias: [{ id: "A", rot: "📂 Dado aberto" }, { id: "P", rot: "🔒 Dado pessoal" }],
        itens: [{ t: "Pedidos de conserto por bairro", c: "A" }, { t: "A nota de um aluno", c: "P" }, { t: "O nome de um aluno", c: "P" }],
        explicacao: "Números gerais = aberto; nome e nota = pessoal." },
      { tipo: "escolha", titulo: "Passo 2 · Dados abertos",
        perguntas: [{ p: "Dados abertos são:", opcoes: ["Públicos", "Secretos"], certo: 0 }],
        explicacao: "Públicos." },
      { tipo: "escolha", titulo: "Passo 3 · O maior",
        perguntas: [{ p: "Na tabela, o Bairro Novo tem:", opcoes: ["15 pedidos", "6 pedidos"], certo: 0 }],
        explicacao: "15 pedidos." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é dado aberto", opcoes: ["é dado aberto", "é dado pessoal"], certo: "é dado pessoal" } }, { v: true }]
  },

  m3: {
    pratica: [
      { tipo: "classificar", titulo: "Acesso, qualidade ou habilidade?",
        enunciado: "<p>Veja a tabela <strong>Parte · Pergunta · Exemplo</strong>.</p>",
        categorias: [{ id: "A", rot: "📱 Acesso" }, { id: "Q", rot: "⚡ Qualidade" }, { id: "H", rot: "🧠 Habilidade" }],
        itens: [{ t: "Família sem internet", c: "A" }, { t: "Celular dividido por 4 irmãos", c: "Q" }, { t: "O avô não sabe usar o aplicativo", c: "H" }],
        explicacao: "Sem internet = acesso; dividido = qualidade; não sabe usar = habilidade." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · O que ajuda?",
        enunciado: "<p>Marque <strong>só</strong> o que ajuda.</p>",
        opcoes: [{ t: "Laboratório na escola", certo: true }, { t: "Wi-Fi gratuito na praça", certo: true }, { t: "Fechar o laboratório", certo: false }],
        explicacao: "Laboratório e Wi-Fi gratuito ajudam." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Acesso", b: "Ter aparelho e internet" }, { a: "Wi-Fi", b: "Internet sem fio" }, { a: "Desigualdade digital", b: "Nem todos têm o mesmo acesso" }],
        explicacao: "Acesso, Wi-Fi e desigualdade digital." },
      { tipo: "escolha", titulo: "Passo 3 · Todos iguais?",
        perguntas: [{ p: "Todo mundo tem o mesmo acesso à tecnologia?", opcoes: ["Não", "Sim"], certo: 0 }],
        explicacao: "Não: por isso existe a desigualdade digital." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Todo mundo tem o mesmo acesso", opcoes: ["Todo mundo tem o mesmo acesso", "Nem todos têm o mesmo acesso"], certo: "Nem todos têm o mesmo acesso" } }]
  },

  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Máquina ou humano?",
        enunciado: "<p>Tarefa que se repete = máquina. Cuidar e criar = humano.</p>",
        categorias: [{ id: "M", rot: "🤖 Máquina faz bem" }, { id: "H", rot: "🧑 Muito humano" }],
        itens: [{ t: "Somar mil números", c: "M" }, { t: "Consolar um amigo triste", c: "H" }, { t: "Inventar uma história", c: "H" }],
        explicacao: "Somar = máquina; consolar e inventar = humano." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Automação", b: "A máquina faz sozinha" }, { a: "Repetitiva", b: "Se repete sempre igual" }, { a: "Empatia", b: "Se colocar no lugar do outro" }],
        explicacao: "Automação, repetitiva e empatia." },
      { tipo: "escolha", titulo: "Passo 2 · Profissão nova",
        perguntas: [{ p: "Uma profissão nova é:", opcoes: ["Piloto de drone", "Nenhuma"], certo: 0 }],
        explicacao: "Piloto de drone." },
      { tipo: "escolha", titulo: "Passo 3 · Muito humano",
        perguntas: [{ p: "Uma habilidade muito humana é a:", opcoes: ["Empatia", "Conta repetida"], certo: 0 }],
        explicacao: "Empatia." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "nunca cria profissões novas", opcoes: ["nunca cria profissões novas", "também cria profissões novas"], certo: "também cria profissões novas" } }]
  },

  m5: {
    pratica: [
      { tipo: "mensagens", titulo: "Seja a IA: spam ou normal?",
        enunciado: "<p>No spam aparecem as palavras <strong>grátis</strong>, <strong>prêmio</strong> e <strong>clique já</strong>.</p>",
        app: "📧 E-mail", botoes: [{ id: "S", rot: "🚫 Spam" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "promo@sorteio.xyz", t: "Prêmio GRÁTIS! Clique já!", c: "S" }, { de: "Escola", t: "A prova é na semana que vem.", c: "N" }, { de: "ofertas@ganhe.com", t: "Clique já e ganhe um prêmio", c: "S" }],
        okMsg: "Você aprendeu como uma IA! 🤖", explicacao: "Grátis, prêmio e clique já = spam." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Como a IA aprende",
        enunciado: "<p>Coloque na ordem da tabela <strong>Etapa · O que acontece</strong>.</p>",
        itens: ["Coletar exemplos", "Treinar", "Usar"],
        explicacao: "Coletar → treinar → usar." },
      { tipo: "escolha", titulo: "Passo 2 · A IA erra?",
        perguntas: [{ p: "O chatbot respondeu. Eu:", opcoes: ["Confiro em outra fonte", "Copio sem conferir"], certo: 0 }],
        explicacao: "Confira: a IA também erra." },
      { tipo: "escolha", titulo: "Passo 3 · Dados pessoais",
        perguntas: [{ p: "No chatbot, eu:", opcoes: ["Não coloco dados pessoais", "Coloco o endereço dos colegas"], certo: 0 }],
        explicacao: "Sem dados pessoais." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "nunca erra", opcoes: ["nunca erra", "também erra"], certo: "também erra" } }, { v: true }]
  },

  m6: {
    pratica: [
      { tipo: "classificar", titulo: "Prejudica ou ajuda?",
        enunciado: "<p>Veja a tabela <strong>Pode prejudicar · Pode ajudar</strong>.</p>",
        categorias: [{ id: "P", rot: "⚠️ Prejudica" }, { id: "A", rot: "🌱 Ajuda" }],
        itens: [{ t: "Lixo eletrônico no lixo comum", c: "P" }, { t: "Satélites vigiando a Amazônia", c: "A" }, { t: "Sensores que economizam água", c: "A" }],
        explicacao: "Lixo eletrônico prejudica; satélites e sensores ajudam." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Lixo eletrônico", b: "Aparelhos velhos jogados fora" }, { a: "Satélite", b: "Fotografa a Terra lá de cima" }, { a: "Ponto de coleta", b: "Recebe o lixo eletrônico" }],
        explicacao: "Lixo eletrônico, satélite e ponto de coleta." },
      { tipo: "escolha", titulo: "Passo 2 · A pilha velha",
        perguntas: [{ p: "A pilha velha vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }],
        explicacao: "Ponto de coleta." },
      { tipo: "escolha", titulo: "Passo 3 · Os satélites",
        perguntas: [{ p: "Os satélites ajudam a vigiar:", opcoes: ["A Amazônia", "A merenda"], certo: 0 }],
        explicacao: "A Amazônia." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "vai para o lixo comum", opcoes: ["vai para o lixo comum", "vai para o ponto de coleta"], certo: "vai para o ponto de coleta" } }, { v: true }]
  },

  m7: {
    pratica: [
      { tipo: "ligar", titulo: "Cada recurso e quem ajuda",
        enunciado: "<p>Veja a tabela <strong>Recurso · Como funciona · Quem ajuda</strong>.</p>",
        pares: [{ a: "🔊 Leitor de tela", b: "Pessoas cegas" }, { a: "💬 Legenda", b: "Pessoas surdas" }, { a: "🤟 VLibras", b: "Quem usa a Libras" }],
        explicacao: "Leitor de tela, legenda e VLibras." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O leitor de tela",
        perguntas: [{ p: "O leitor de tela:", opcoes: ["Lê a tela em voz alta", "Apaga a tela"], certo: 0 }],
        explicacao: "Lê em voz alta." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Libras", b: "Língua Brasileira de Sinais" }, { a: "Legenda", b: "O texto do que é falado" }, { a: "Acessibilidade", b: "Todas as pessoas conseguirem usar" }],
        explicacao: "Libras, legenda e acessibilidade." },
      { tipo: "escolha", titulo: "Passo 3 · A Libras",
        perguntas: [{ p: "A Libras é a língua de sinais:", opcoes: ["Do Brasil", "De outro país"], certo: 0 }],
        explicacao: "Língua Brasileira de Sinais." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é uma língua de outro país", opcoes: ["é uma língua de outro país", "é a Língua Brasileira de Sinais"], certo: "é a Língua Brasileira de Sinais" } }]
  },

  m8: {
    pratica: [
      { tipo: "ligar", titulo: "Cada fato e o que ele diz",
        enunciado: "<p>Veja a tabela <strong>Fato · O que diz</strong>.</p>",
        pares: [{ a: "🗳️ Urna eletrônica", b: "Usada no Brasil desde 1996" }, { a: "🎂 Voto aos 16 e 17 anos", b: "Facultativo (opcional)" }, { a: "🎭 Deepfake", b: "Proibido pelo TSE na propaganda" }],
        explicacao: "Urna desde 1996; voto facultativo aos 16 e 17; deepfake proibido." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Contra boatos",
        enunciado: "<p>Marque <strong>só</strong> o que protege contra boatos.</p>",
        opcoes: [{ t: "Conferir", certo: true }, { t: "Não repassar sem conferir", certo: true }, { t: "Repassar logo", certo: false }],
        explicacao: "Conferir e não repassar." },
      { tipo: "escolha", titulo: "Passo 2 · Facultativo",
        perguntas: [{ p: "Facultativo quer dizer:", opcoes: ["Opcional", "Obrigatório"], certo: 0 }],
        explicacao: "Opcional." },
      { tipo: "escolha", titulo: "Passo 3 · A urna",
        perguntas: [{ p: "A urna eletrônica é usada desde:", opcoes: ["1996", "2025"], certo: 0 }],
        explicacao: "1996." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "o voto é obrigatório", opcoes: ["o voto é obrigatório", "o voto é facultativo"], certo: "o voto é facultativo" } }, { v: true }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Problemas", perguntas: [{ p: "O primeiro passo é:", opcoes: ["Observar", "Testar"], certo: 0 }], explicacao: "Observar." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", de: "m2", titulo: "M2 · Dados", categorias: [{ id: "A", rot: "Dado aberto" }, { id: "P", rot: "Dado pessoal" }], itens: [{ t: "Pedidos por bairro", c: "A" }, { t: "Nota de um aluno", c: "P" }], explicacao: "Geral = aberto; nota = pessoal." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Desigualdade", perguntas: [{ p: "Família sem internet é problema de:", opcoes: ["Acesso", "Habilidade"], certo: 0 }], explicacao: "Acesso." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Trabalho", perguntas: [{ p: "A máquina faz bem tarefas:", opcoes: ["Repetitivas", "De cuidar de pessoas"], certo: 0 }], explicacao: "Repetitivas." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · IA", perguntas: [{ p: "A IA aprende com:", opcoes: ["Exemplos", "Mágica"], certo: 0 }], explicacao: "Exemplos." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Meio ambiente", perguntas: [{ p: "Pilha velha vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }], explicacao: "Ponto de coleta." },
      { tipo: "relembre", de: "m7" },
      { tipo: "ligar", de: "m7", titulo: "M7 · Acessibilidade", pares: [{ a: "Leitor de tela", b: "Pessoas cegas" }, { a: "Legenda", b: "Pessoas surdas" }], explicacao: "Leitor de tela e legenda." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Eleições", perguntas: [{ p: "Aos 16 anos, o voto é:", opcoes: ["Facultativo", "Obrigatório"], certo: 0 }], explicacao: "Facultativo." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-3bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Problemas", [{ p: "O primeiro passo é:", opcoes: ["Observar", "Testar"], certo: 0 }, { p: "Para medir sozinho, uso um:", opcoes: ["Mapa", "Sensor"], certo: 1 }]), pega("m1"),
    Q("m2", "Dados", [{ p: "Dados abertos são:", opcoes: ["Públicos", "Secretos"], certo: 0 }, { p: "A nota de um aluno é dado:", opcoes: ["Aberto", "Pessoal"], certo: 1 }]), pega("m2"),
    Q("m3", "Desigualdade", [{ p: "Família sem internet: problema de", opcoes: ["Acesso", "Habilidade"], certo: 0 }, { p: "O que ajuda?", opcoes: ["Fechar o laboratório", "Wi-Fi gratuito na praça"], certo: 1 }]), pega("m3"),
    Q("m4", "Trabalho", [{ p: "Automação é:", opcoes: ["A máquina fazer sozinha", "A pessoa fazer à mão"], certo: 0 }, { p: "Muito humana é a:", opcoes: ["Conta repetida", "Empatia"], certo: 1 }]), pega("m4"),
    Q("m5", "IA", [{ p: "A IA aprende com:", opcoes: ["Exemplos", "Mágica"], certo: 0 }, { p: "O chatbot respondeu. Eu:", opcoes: ["Copio", "Confiro"], certo: 1 }]), pega("m5"),
    Q("m6", "Meio ambiente", [{ p: "Satélites vigiam:", opcoes: ["A Amazônia", "A merenda"], certo: 0 }, { p: "A pilha velha vai para:", opcoes: ["O lixo comum", "O ponto de coleta"], certo: 1 }]), pega("m6"),
    Q("m7", "Acessibilidade", [{ p: "O leitor de tela:", opcoes: ["Lê em voz alta", "Apaga a tela"], certo: 0 }, { p: "A Libras é a língua de sinais:", opcoes: ["De outro país", "Do Brasil"], certo: 1 }]), pega("m7"),
    Q("m8", "Eleições", [{ p: "A urna é usada desde:", opcoes: ["1996", "2025"], certo: 0 }, { p: "Aos 16 anos, o voto é:", opcoes: ["Obrigatório", "Facultativo"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL — 🧭 Trilha (21/11/2026, Etapa 3: 3º bimestre de 2027)
   Mesmo ❓ gancho da turma, "O que você já sabe?" na M1 e 🛠️ "Onde eu uso isso?" calmo
   (3 itens + 2 perguntas). Sem Desafio/Turbo na Trilha.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-3bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🌧️ Toda vez que chove forte, a rua da escola alaga e metade da turma falta. Todo mundo reclama, mas nada muda.</p><p>🤔 Por onde começar para resolver um problema assim? Um aplicativo resolveria, ou a solução é outra?</p>"},"m2":{"html":"<p>🍲 A turma queria saber quanto a prefeitura gastou com a merenda no ano passado. Alguém disse: “isso é segredo, ninguém pode saber”.</p><p>🤔 Será? Onde um estudante pode encontrar essa informação?</p>"},"m3":{"html":"<p>📱 O professor mandou a tarefa pelo celular. O Pedro tem celular, mas divide com 3 irmãos e o pacote de dados acabou no dia 10.</p><p>🤔 Ter celular é o mesmo que estar conectado? O que mais faz diferença?</p>"},"m4":{"html":"<p>🛒 No supermercado da cidade abriram 4 caixas de autoatendimento. A tia da Ana, que era operadora de caixa, agora ajuda os clientes a usarem as máquinas.</p><p>🤔 A máquina “roubou” o emprego ou o trabalho mudou? Que profissões vão existir quando você crescer?</p>"},"m5":{"html":"<p>📧 Um e-mail dizendo “Você ganhou um PRÊMIO GRÁTIS, clique já!” foi direto para a pasta Spam. Ninguém mexeu em nada.</p><p>🤔 Como o programa “sabia” que era spam? E se ele errar e esconder um e-mail importante?</p>"},"m6":{"html":"<p>🗑️ A gaveta da casa do João tem 3 celulares velhos, um carregador quebrado e uma bateria estufada. A mãe dele quer jogar tudo no lixo da cozinha.</p><p>🤔 Pode? O que acontece com esse lixo? E a tecnologia só faz mal ao meio ambiente?</p>"},"m7":{"html":"<p>👵 A avó da Clara não consegue ler as mensagens no celular porque a letra é pequena. E o primo dela, que é cego, usa o celular sozinho todos os dias.</p><p>🤔 Como uma pessoa cega usa o celular? O que a tecnologia faz para que todo mundo consiga usar?</p>"},"m8":{"html":"<p>📲 Perto da eleição, chegou no grupo um vídeo chocante com um candidato dizendo algo absurdo. O tio repassou na hora: “olha que vergonha!”.</p><p>🤔 E se o vídeo for uma montagem? Quem pode confirmar? Como agir antes de repassar?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["Um programa do celular é um…", ["Aplicativo", "Satélite"], "É um <b>aplicativo</b>."],
    ["Um aparelho que mede sozinho a chuva é um…", ["Sensor", "Cartaz"], "É um <b>sensor</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    rota("🛠️ Na vida real: a rua que alaga", "Coloque os passos <b>na ordem</b>.",
      [["1️⃣", "Observar: a rua da escola alaga"], ["2️⃣", "Escolher esse problema"], ["3️⃣", "Ver quem sofre: os alunos"], ["4️⃣", "Imaginar a solução: um sensor que avisa"]],
      "Método completo! 🏙️", "Observar, escolher, ver quem sofre e imaginar a solução."),
    VIDA(["Para avisar muita gente ao mesmo tempo, use…", ["Uma mensagem", "Um sensor"], "Uma <b>mensagem</b> avisa muita gente."], ["Para marcar onde estão os problemas, use…", ["Um mapa", "Uma calculadora"], "Um <b>mapa</b>."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: aberto ou pessoal?", "🗂️ Dados", [["A", "🔓 Dado aberto"], ["P", "🔒 Dado pessoal"]], "Pode ser publicado?",
      [["Quantos pedidos de conserto teve o bairro", "A", "Informação pública."], ["O nome e a nota de um aluno", "P", "Dado pessoal: não é publicado."], ["Quantas lâmpadas foram consertadas", "A", "Informação pública."]],
      "Mandou bem! 🗂️", "Dados abertos qualquer pessoa pode ver; dados pessoais não são publicados."),
    VIDA(["Na tabela, qual bairro teve mais pedidos?", ["Bairro Novo (15)", "Bairro da Serra (6)"], "O maior número é <b>15</b>, do Bairro Novo."], ["Onde começar o conserto?", ["Onde tem mais pedidos", "Onde tem menos pedidos"], "Onde tem <b>mais pedidos</b>."])
  ];
  A.m3.aplicar = [
    msg("🛠️ Na vida real: que parte?", "📶 Desigualdade digital", [["A", "📱 Acesso"], ["Q", "⚡ Qualidade"], ["H", "🧠 Habilidade"]], "Use a tabela do 💡 Para começar.",
      [["Família sem internet", "A", "Não tem acesso."], ["Celular dividido por 4 irmãos", "Q", "A conexão e o aparelho não são bons para todos."], ["O avô não sabe usar o aplicativo", "H", "Falta saber usar."]],
      "Mandou bem! 📶", "Acesso, qualidade e habilidade."),
    VIDA(["O que ajuda a diminuir a desigualdade digital?", ["Wi-Fi gratuito na praça", "Desligar a internet da escola"], "<b>Wi-Fi gratuito</b> ajuda."], ["Um curso ajuda na…", ["Habilidade", "Qualidade"], "Desenvolve a <b>habilidade</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: máquina ou humano?", "💼 Trabalho", [["M", "🤖 Máquina"], ["H", "🧑 Muito humano"]], "Quem faz melhor?",
      [["Fazer a mesma tarefa repetitiva o dia todo", "M", "Tarefa repetitiva: máquina."], ["Cuidar de uma pessoa doente", "H", "Empatia: humano."], ["Inventar uma ideia nova", "H", "Criatividade: humano."]],
      "Mandou bem! 💼", "A máquina faz tarefas repetitivas; criatividade e empatia são muito humanas."),
    VIDA(["Automação é quando…", ["A máquina faz sozinha uma tarefa", "A pessoa faz tudo à mão"], "A máquina faz <b>sozinha</b>."], ["Piloto de drone é uma…", ["Profissão nova", "Tarefa repetitiva"], "É uma <b>profissão nova</b>."])
  ];
  A.m5.aplicar = [
    rota("🛠️ Na vida real: o filtro de spam", "Coloque as etapas da IA <b>na ordem</b>.",
      [["1️⃣", "Coletar exemplos: e-mails marcados como spam"], ["2️⃣", "Treinar: achar as palavras do spam"], ["3️⃣", "Usar: separar os e-mails novos"]],
      "A IA aprendeu! 🤖", "Coletar exemplos, treinar e usar."),
    VIDA(["O chatbot respondeu. Você…", ["Confere em outra fonte", "Copia sem ler"], "<b>Confira em outra fonte</b>: a IA também erra."], ["Na escola, use a IA para…", ["Estudar, não para copiar", "Copiar o trabalho todo"], "Para <b>estudar</b>, não para copiar."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: prejudica ou ajuda?", "🌱 Meio ambiente", [["P", "⚠️ Prejudica"], ["A", "🌱 Ajuda"]], "Use a tabela do 💡 Para começar.",
      [["Satélites vigiando a Amazônia", "A", "Ajuda a proteger a floresta."], ["Pilha jogada no lixo comum", "P", "Lixo eletrônico no lixo comum prejudica."], ["Sensores economizando água", "A", "Ajuda."]],
      "Mandou bem! 🌱", "A tecnologia pode prejudicar ou ajudar."),
    VIDA(["O celular velho vai para…", ["O ponto de coleta", "O lixo comum"], "Para o <b>ponto de coleta</b>."], ["Gastar energia à toa…", ["Prejudica o meio ambiente", "Ajuda o meio ambiente"], "<b>Prejudica</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: qual recurso?", "♿ Acessibilidade", [["L", "🔊 Leitor de tela"], ["G", "💬 Legenda"], ["V", "🤟 VLibras"]], "Qual recurso ajuda cada pessoa?",
      [["Uma pessoa cega quer ouvir a tela", "L", "Lê a tela em voz alta."], ["Uma pessoa surda quer entender o vídeo", "G", "Escreve o que é falado."], ["Quem usa a Libras quer ler um texto", "V", "Traduz para a Libras."]],
      "Tecnologia para todos! ♿", "Acessibilidade: todas as pessoas conseguem usar."),
    VIDA(["O leitor de tela ajuda…", ["Pessoas cegas", "Só quem enxerga bem"], "Ajuda <b>pessoas cegas</b>."], ["O VLibras traduz para a…", ["Libras", "Língua inglesa"], "Para a <b>Libras</b>."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: protege ou espalha?", "🗳️ Grupo da família", [["P", "🛡️ Protege"], ["E", "📢 Espalha o boato"]], "Desconfiar, conferir e não repassar sem conferir.",
      [["Conferir antes de repassar", "P", "Protege."], ["Repassar na hora o vídeo chocante", "E", "Ajuda o boato a crescer."], ["Desconfiar do vídeo chocante", "P", "Protege."]],
      "Mandou bem! 🗳️", "Contra boatos: desconfiar, conferir e não repassar sem conferir."),
    VIDA(["Aos 16 e 17 anos, o voto é…", ["Facultativo (opcional)", "Proibido"], "É <b>facultativo</b>."], ["O TSE proíbe na propaganda…", ["O deepfake", "A urna eletrônica"], "Proíbe o <b>deepfake</b>."])
  ];
})();
