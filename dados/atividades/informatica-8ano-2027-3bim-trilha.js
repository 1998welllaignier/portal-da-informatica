/* ============================================================
   ATIVIDADES — Informática 8º ano — 3º bimestre de 2027 (Redes sociais) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
PORTAL.registrarAtividades("informatica-8ano-2027-3bim-trilha", {

  m1: {
    pratica: [
      { tipo: "sinais", titulo: "O que a foto revela?",
        enunciado: "<p>A foto tem: <strong>uniforme da escola</strong>, <strong>número da casa</strong>, <strong>localização ligada</strong> e um <strong>cachorro</strong>.</p><p>Marque <strong>só</strong> o que pode expor você. Veja a tabela <strong>Na foto ou no post · O que revela</strong>.</p>",
        opcoes: [{ t: "Uniforme da escola", certo: true }, { t: "Número da casa", certo: true }, { t: "Localização ligada", certo: true }, { t: "O cachorro", certo: false }],
        explicacao: "Uniforme, número da casa e localização expõem você." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que revela?",
        pares: [{ a: "🏫 Uniforme da escola", b: "Onde você estuda" }, { a: "🏠 Número da casa", b: "Onde você mora" }, { a: "📍 Localização ligada", b: "Onde você está agora" }],
        explicacao: "Uniforme = escola; número = casa; localização = agora." },
      { tipo: "escolha", titulo: "Passo 2 · A foto do colega",
        perguntas: [{ p: "Antes de postar a foto de um colega, eu:", opcoes: ["Peço permissão", "Posto logo"], certo: 0 }],
        explicacao: "Peça permissão." },
      { tipo: "escolha", titulo: "Passo 3 · Dá para desfazer?",
        perguntas: [{ p: "Depois de compartilhar, alguém pode ter tirado:", opcoes: ["Print", "Férias"], certo: 0 }],
        explicacao: "Print: por isso desfazer pode ser impossível." }
    ],
    vf: [{ v: false, corrigir: { trecho: "sempre dá para desfazer", opcoes: ["sempre dá para desfazer", "pode ser impossível desfazer"], certo: "pode ser impossível desfazer" } }, { v: true }, { v: true }]
  },

  m2: {
    pratica: [
      { tipo: "classificar", titulo: "Confiável ou alerta?",
        enunciado: "<p>Veja a tabela <strong>Pergunta · O que procurar</strong> e os sinais de alerta.</p>",
        categorias: [{ id: "C", rot: "👍 Confiável" }, { id: "A", rot: "⚠️ Alerta" }],
        itens: [{ t: "Notícia com autor e data", c: "C" }, { t: "“COMPARTILHE ANTES QUE APAGUEM!!!”", c: "A" }, { t: "Mensagem sem autor", c: "A" }],
        explicacao: "Autor e data = confiável; “!!!” e sem autor = alerta." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que procurar?",
        pares: [{ a: "👤 Quem escreveu?", b: "Um nome, um jornalista" }, { a: "📅 Quando?", b: "A data" }, { a: "🔁 Outras fontes confirmam?", b: "A mesma notícia em outros lugares" }],
        explicacao: "Quem, quando e outras fontes." },
      { tipo: "escolha", titulo: "Passo 2 · O que é fonte?",
        perguntas: [{ p: "Fonte é:", opcoes: ["De onde vem a informação", "O tamanho da letra"], certo: 0 }],
        explicacao: "De onde vem a informação." },
      { tipo: "escolha", titulo: "Passo 3 · Sinal de alerta",
        perguntas: [{ p: "Qual é sinal de alerta?", opcoes: ["Sem autor e sem data", "Ter autor e data"], certo: 0 }],
        explicacao: "Sem autor e sem data." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "A data não importa", opcoes: ["A data não importa", "A data importa"], certo: "A data importa" } }, { v: true }]
  },

  m3: {
    pratica: [
      { tipo: "classificar", titulo: "Na bolha ou fora?",
        enunciado: "<p>Veja a tabela <strong>Na bolha · Fora da bolha</strong>.</p>",
        categorias: [{ id: "D", rot: "🫧 Na bolha" }, { id: "F", rot: "🌍 Fora da bolha" }],
        itens: [{ t: "Só vejo opiniões iguais", c: "D" }, { t: "Vejo opiniões diferentes", c: "F" }, { t: "Acho que todos concordam", c: "D" }],
        explicacao: "Só o igual = bolha; o diferente = fora." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · O que fura a bolha?",
        enunciado: "<p>Marque <strong>só</strong> o que fura a bolha.</p>",
        opcoes: [{ t: "Seguir fontes diferentes", certo: true }, { t: "Procurar o outro lado", certo: true }, { t: "Curtir só o que concorda", certo: false }],
        explicacao: "Fontes diferentes e o outro lado." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Bolha", b: "Só mostra o parecido" }, { a: "Viés", b: "Acreditar mais no que já pensamos" }, { a: "Feed", b: "Lista de posts" }],
        explicacao: "Bolha, viés e feed." },
      { tipo: "escolha", titulo: "Passo 3 · Na bolha parece que…",
        perguntas: [{ p: "Na bolha, parece que:", opcoes: ["Todo mundo pensa igual", "Ninguém concorda"], certo: 0 }],
        explicacao: "Todo mundo pensa igual." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Fora da bolha, todos pensam igual", opcoes: ["Fora da bolha, todos pensam igual", "Fora da bolha, vejo opiniões diferentes"], certo: "Fora da bolha, vejo opiniões diferentes" } }]
  },

  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Tranquila ou atenção?",
        enunciado: "<p>Veja a tabela <strong>O que procurar · Exemplo de frase</strong>.</p>",
        categorias: [{ id: "T", rot: "👍 Tranquila" }, { id: "A", rot: "⚠️ Atenção" }],
        itens: [{ t: "“Você pode excluir sua conta.”", c: "T" }, { t: "“Podemos compartilhar com parceiros.”", c: "A" }, { t: "“Coletamos nome e localização.”", c: "A" }],
        explicacao: "Apagar a conta é bom; compartilhar e coletar localização pedem atenção." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · “Li e aceito”",
        perguntas: [{ p: "Clicar em “Li e aceito” é aceitar:", opcoes: ["Um contrato", "Um presente"], certo: 0 }],
        explicacao: "Um contrato." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Termos de uso", b: "O contrato do aplicativo" }, { a: "LGPD", b: "Lei que protege os seus dados" }, { a: "Contrato", b: "Acordo com regras" }],
        explicacao: "Termos, LGPD e contrato." },
      { tipo: "escolha", titulo: "Passo 3 · A LGPD",
        perguntas: [{ p: "Pela LGPD, posso pedir para a empresa:", opcoes: ["Apagar os meus dados", "Apagar a internet"], certo: 0 }],
        explicacao: "Apagar os meus dados." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "nunca falam dos meus dados", opcoes: ["nunca falam dos meus dados", "falam dos meus dados"], certo: "falam dos meus dados" } }]
  },

  m5: {
    pratica: [
      { tipo: "classificar", titulo: "Faz sentido?",
        enunciado: "<p>Veja a tabela <strong>Aplicativo · Pede · Faz sentido?</strong>.</p>",
        categorias: [{ id: "S", rot: "✅ Faz sentido" }, { id: "N", rot: "❌ Não faz" }],
        itens: [{ t: "🗺️ Mapa pede a localização", c: "S" }, { t: "🔦 Lanterna pede os contatos", c: "N" }, { t: "🧮 Calculadora pede o microfone", c: "N" }],
        explicacao: "Mapa precisa da localização; lanterna e calculadora não precisam." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Localização", b: "Onde você está" }, { a: "Contatos", b: "A agenda de telefones" }, { a: "Permissão", b: "Deixar o aplicativo usar uma parte do celular" }],
        explicacao: "Localização, contatos e permissão." },
      { tipo: "escolha", titulo: "Passo 2 · A pergunta de ouro",
        perguntas: [{ p: "A pergunta de ouro é:", opcoes: ["Faz sentido para o que o aplicativo faz?", "O aplicativo é colorido?"], certo: 0 }],
        explicacao: "Faz sentido?" },
      { tipo: "escolha", titulo: "Passo 3 · Posso negar?",
        perguntas: [{ p: "Uma permissão que não faz sentido, eu posso:", opcoes: ["Negar", "Só aceitar"], certo: 0 }],
        explicacao: "Pode negar." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "precisa dos contatos", opcoes: ["precisa dos contatos", "não precisa dos contatos"], certo: "não precisa dos contatos" } }, { v: true }]
  },

  m6: {
    pratica: [
      { tipo: "classificar", titulo: "Ativa ou passiva?",
        enunciado: "<p>Veja a tabela <strong>Tipo · O que é · Exemplos</strong>.</p>",
        categorias: [{ id: "A", rot: "✍️ Ativa" }, { id: "P", rot: "👀 Passiva" }],
        itens: [{ t: "O comentário que você escreveu", c: "A" }, { t: "O histórico de pesquisa", c: "P" }, { t: "A curtida", c: "A" }, { t: "A localização", c: "P" }],
        explicacao: "Ativa: comentário e curtida. Passiva: histórico e localização." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Pegada digital", b: "Os rastros na internet" }, { a: "Rastro", b: "Marca de por onde você passou" }, { a: "Histórico", b: "O que você pesquisou" }],
        explicacao: "Pegada, rastro e histórico." },
      { tipo: "escolha", titulo: "Passo 2 · Quanto tempo fica?",
        perguntas: [{ p: "A pegada digital fica:", opcoes: ["Por muito tempo", "Um dia"], certo: 0 }],
        explicacao: "Por muito tempo." },
      { tipo: "escolha", titulo: "Passo 3 · A pergunta",
        perguntas: [{ p: "Antes de postar, pergunte:", opcoes: ["Eu teria orgulho disso daqui a 10 anos?", "Vai ter curtida?"], certo: 0 }],
        explicacao: "Teria orgulho daqui a 10 anos?" }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "some em um dia", opcoes: ["some em um dia", "fica por muito tempo"], certo: "fica por muito tempo" } }]
  },

  m7: {
    pratica: [
      { tipo: "ordenar", titulo: "Os passos da checagem",
        enunciado: "<p>Coloque na ordem da tabela <strong>Passo · O que fazer</strong>.</p>",
        itens: ["Desconfiar", "Ler além do título", "Ver a data", "Procurar em outras fontes"],
        explicacao: "Desconfiar → ler além do título → data → outras fontes." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Checagem", b: "Conferir se é verdade" }, { a: "Título", b: "A frase grande da notícia" }, { a: "Agência de checagem", b: "Jornalistas que conferem notícias" }],
        explicacao: "Checagem, título e agência." },
      { tipo: "escolha", titulo: "Passo 2 · O primeiro passo",
        perguntas: [{ p: "O primeiro passo é:", opcoes: ["Desconfiar", "Repassar"], certo: 0 }],
        explicacao: "Desconfiar." },
      { tipo: "escolha", titulo: "Passo 3 · Agência",
        perguntas: [{ p: "Uma agência de checagem é:", opcoes: ["Aos Fatos", "Corrente do grupo"], certo: 0 }],
        explicacao: "Aos Fatos." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "Basta ler o título", opcoes: ["Basta ler o título", "É preciso ler além do título"], certo: "É preciso ler além do título" } }, { v: true }]
  },

  m8: {
    pratica: [
      { tipo: "ligar", titulo: "O que o algoritmo entende?",
        enunciado: "<p>Veja a tabela <strong>O que você faz · O que o algoritmo entende</strong>.</p>",
        pares: [{ a: "❤️ Curtir", b: "Mostre mais disso" }, { a: "🙅 “Não tenho interesse”", b: "Mostre menos disso" }],
        explicacao: "Curtir = mais; “Não tenho interesse” = menos." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Mais ou menos?",
        categorias: [{ id: "M", rot: "➕ Mais disso" }, { id: "N", rot: "➖ Menos disso" }],
        itens: [{ t: "Assistir até o fim", c: "M" }, { t: "“Não tenho interesse”", c: "N" }, { t: "Curtir", c: "M" }],
        explicacao: "Assistir e curtir = mais; “Não tenho interesse” = menos." },
      { tipo: "escolha", titulo: "Passo 2 · Quem escolhe?",
        perguntas: [{ p: "Quem escolhe o que aparece no feed é o:", opcoes: ["Algoritmo", "Teclado"], certo: 0 }],
        explicacao: "O algoritmo." },
      { tipo: "escolha", titulo: "Passo 3 · O que ele quer?",
        perguntas: [{ p: "O algoritmo quer que você:", opcoes: ["Fique mais tempo", "Saia logo"], certo: 0 }],
        explicacao: "Fique mais tempo." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "quer que você saia logo do aplicativo", opcoes: ["quer que você saia logo do aplicativo", "quer que você fique mais tempo"], certo: "quer que você fique mais tempo" } }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Compartilhar", perguntas: [{ p: "Foto do colega: eu", opcoes: ["Peço permissão", "Posto logo"], certo: 0 }], explicacao: "Peço permissão." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Fontes", perguntas: [{ p: "Sinal de alerta:", opcoes: ["Sem autor e sem data", "Com autor e data"], certo: 0 }], explicacao: "Sem autor e sem data." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Bolha", perguntas: [{ p: "Para furar a bolha:", opcoes: ["Fontes diferentes", "Curtir só o igual"], certo: 0 }], explicacao: "Fontes diferentes." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Termos", perguntas: [{ p: "“Li e aceito” é aceitar:", opcoes: ["Um contrato", "Um presente"], certo: 0 }], explicacao: "Um contrato." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Permissões", categorias: [{ id: "S", rot: "Faz sentido" }, { id: "N", rot: "Não faz" }], itens: [{ t: "Mapa pede a localização", c: "S" }, { t: "Lanterna pede os contatos", c: "N" }], explicacao: "Só o que faz sentido." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", de: "m6", titulo: "M6 · Pegada", categorias: [{ id: "A", rot: "Ativa" }, { id: "P", rot: "Passiva" }], itens: [{ t: "Comentário", c: "A" }, { t: "Histórico", c: "P" }], explicacao: "Comentário = ativa; histórico = passiva." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Checagem", perguntas: [{ p: "O primeiro passo é:", opcoes: ["Desconfiar", "Repassar"], certo: 0 }], explicacao: "Desconfiar." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Algoritmo", perguntas: [{ p: "Curtir faz aparecer:", opcoes: ["Mais disso", "Menos disso"], certo: 0 }], explicacao: "Mais disso." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-3bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Compartilhar", [{ p: "O uniforme da escola mostra:", opcoes: ["Onde você estuda", "A sua idade"], certo: 0 }, { p: "Foto do colega: eu", opcoes: ["Posto logo", "Peço permissão"], certo: 1 }]), pega("m1"),
    Q("m2", "Fontes", [{ p: "Fonte é:", opcoes: ["De onde vem a informação", "A cor do site"], certo: 0 }, { p: "Mensagem sem autor e com “!!!” é:", opcoes: ["Confiável", "Sinal de alerta"], certo: 1 }]), pega("m2"),
    Q("m3", "Bolha", [{ p: "Na bolha, parece que:", opcoes: ["Todos pensam igual", "Ninguém concorda"], certo: 0 }, { p: "Para furar a bolha:", opcoes: ["Curtir só o igual", "Seguir fontes diferentes"], certo: 1 }]), pega("m3"),
    Q("m4", "Termos", [{ p: "“Li e aceito” é aceitar:", opcoes: ["Um contrato", "Um jogo"], certo: 0 }, { p: "Pela LGPD, posso pedir para:", opcoes: ["Apagar a internet", "Apagar os meus dados"], certo: 1 }]), pega("m4"),
    Q("m5", "Permissões", [{ p: "O mapa pedir a localização:", opcoes: ["Faz sentido", "Não faz sentido"], certo: 0 }, { p: "A lanterna pedir os contatos:", opcoes: ["Faz sentido", "Não faz sentido"], certo: 1 }]), pega("m5"),
    Q("m6", "Pegada", [{ p: "Comentário é pegada:", opcoes: ["Ativa", "Passiva"], certo: 0 }, { p: "A pegada fica:", opcoes: ["Um dia", "Por muito tempo"], certo: 1 }]), pega("m6"),
    Q("m7", "Checagem", [{ p: "O primeiro passo é:", opcoes: ["Desconfiar", "Repassar"], certo: 0 }, { p: "Basta ler o título?", opcoes: ["Sim", "Não"], certo: 1 }]), pega("m7"),
    Q("m8", "Algoritmo", [{ p: "Quem escolhe o feed é o:", opcoes: ["Algoritmo", "Mouse"], certo: 0 }, { p: "“Não tenho interesse” mostra:", opcoes: ["Mais disso", "Menos disso"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();
