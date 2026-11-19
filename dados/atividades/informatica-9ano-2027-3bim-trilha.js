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
