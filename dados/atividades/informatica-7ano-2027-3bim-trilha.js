/* ============================================================
   ATIVIDADES — Informática 7º ano — 3º bimestre de 2027 (Rede segura) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
PORTAL.registrarAtividades("informatica-7ano-2027-3bim-trilha", {

  m1: {
    pratica: [
      { tipo: "rota", titulo: "A conversa do navegador com o site",
        enunciado: "<p>Clique na ordem. Veja a tabela <strong>Passo · O que acontece</strong>.</p>",
        etapas: [{ ic: "📨", t: "O navegador pede a página" }, { ic: "🖥️", t: "O servidor responde mandando a página" }, { ic: "📄", t: "A página aparece na tela" }],
        okMsg: "A página abriu! 🌐", explicacao: "Pede → responde → aparece." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Para que serve?",
        enunciado: "<p>Veja a tabela <strong>Protocolo · Para que serve</strong>.</p>",
        pares: [{ a: "🌐 HTTP", b: "As páginas da internet" }, { a: "📶 Wi-Fi", b: "Internet sem fio" }, { a: "🎧 Bluetooth", b: "Ligar o fone sem fio" }],
        explicacao: "HTTP = páginas; Wi-Fi = sem fio; Bluetooth = fone." },
      { tipo: "escolha", titulo: "Passo 2 · O que é protocolo?",
        perguntas: [{ p: "Protocolo é:", opcoes: ["Um conjunto de regras", "Um tipo de mouse"], certo: 0 }],
        explicacao: "Protocolo = regras da conversa." },
      { tipo: "escolha", titulo: "Passo 3 · Erro 404",
        perguntas: [{ p: "O erro 404 quer dizer:", opcoes: ["Página não encontrada", "Página encontrada"], certo: 0 }],
        explicacao: "404 = página não encontrada." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "foi encontrada", opcoes: ["foi encontrada", "não foi encontrada"], certo: "não foi encontrada" } }, { v: true }]
  },

  m2: {
    pratica: [
      { tipo: "classificar", titulo: "Aberto ou cifrado?",
        enunciado: "<p>Veja a tabela <strong>Endereço · Parece com…</strong>.</p>",
        categorias: [{ id: "A", rot: "📮 Aberto (http)" }, { id: "C", rot: "✉️ Cifrado (https)" }],
        itens: [{ t: "http://jogos.exemplo", c: "A" }, { t: "https://portal.professorwell.com.br 🔒", c: "C" }, { t: "https://loja.exemplo 🔒", c: "C" }],
        explicacao: "http = aberto; https = cifrado." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Parece com…",
        pares: [{ a: "http://", b: "📮 Cartão-postal" }, { a: "https:// 🔒", b: "✉️ Carta lacrada" }],
        explicacao: "http = cartão-postal; https = carta lacrada." },
      { tipo: "escolha", titulo: "Passo 2 · O cadeado",
        perguntas: [{ p: "O cadeado 🔒 mostra que a conversa é:", opcoes: ["Cifrada", "Mais lenta"], certo: 0 }],
        explicacao: "Cifrada." },
      { tipo: "escolha", titulo: "Passo 3 · Site falso tem cadeado?",
        perguntas: [{ p: "Site falso também pode ter cadeado?", opcoes: ["Pode: confiro o nome do site", "Não, nunca"], certo: 0 }],
        explicacao: "Pode. Confira sempre o nome." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "Todo site com cadeado é honesto", opcoes: ["Todo site com cadeado é honesto", "Site falso também pode ter cadeado"], certo: "Site falso também pode ter cadeado" } }]
  },

  m3: {
    pratica: [
      { tipo: "classificar", titulo: "Senha forte ou fraca?",
        enunciado: "<p>Veja a tabela <strong>Senha fraca · Senha forte</strong>. As senhas são inventadas.</p>",
        categorias: [{ id: "F", rot: "💪 Senha forte" }, { id: "R", rot: "⚠️ Senha fraca" }],
        itens: [{ t: "123456", c: "R" }, { t: "Pipa!Verde8Voa", c: "F" }, { t: "pedro", c: "R", why: "Tem nome." }],
        explicacao: "Forte é comprida e misturada." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Sabe, tem ou é?",
        enunciado: "<p>Veja a tabela <strong>Tipo de prova · Exemplo</strong>.</p>",
        categorias: [{ id: "S", rot: "🧠 Sabe" }, { id: "T", rot: "📱 Tem" }, { id: "E", rot: "👆 É" }],
        itens: [{ t: "A senha", c: "S" }, { t: "O código no celular", c: "T" }, { t: "A digital", c: "E" }],
        explicacao: "Senha = sabe; código = tem; digital = é." },
      { tipo: "sinais", titulo: "Passo 2 · O que deixa a senha forte?",
        enunciado: "<p>Marque <strong>só</strong> o que deixa a senha forte.</p>",
        opcoes: [{ t: "Ser comprida", certo: true }, { t: "Misturar letras, números e símbolos", certo: true }, { t: "Ter o seu nome", certo: false }],
        explicacao: "Comprida e misturada." },
      { tipo: "escolha", titulo: "Passo 3 · Pediram o código",
        perguntas: [{ p: "Alguém pediu o código do seu celular. É:", opcoes: ["Golpista", "Normal"], certo: 0 }],
        explicacao: "O código é só seu." }
    ],
    vf: [{ v: false, corrigir: { trecho: "é uma senha forte", opcoes: ["é uma senha forte", "é uma senha fraca"], certo: "é uma senha fraca" } }, { v: true }, { v: false, corrigir: { trecho: "Posso passar", opcoes: ["Posso passar", "Não posso passar"], certo: "Não posso passar" } }]
  },

  m4: {
    pratica: [
      { tipo: "mensagens", titulo: "Golpe ou normal?",
        enunciado: "<p>Veja a tabela <strong>Sinal · Exemplo</strong>.</p>",
        app: "💬 Mensagens", botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "Número novo", t: "Me manda um Pix? Só hoje!", c: "G", why: "Pede dinheiro e tem pressa." }, { de: "Professor", t: "Amanhã a aula é no laboratório.", c: "N" }, { de: "Jogo", t: "Moedas grátis: mande a sua senha!", c: "G" }],
        okMsg: "Você reconhece um golpe! 🎣", explicacao: "Pedido de dinheiro ou senha = golpe." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Sinais de golpe",
        enunciado: "<p>Marque <strong>só</strong> os sinais de golpe.</p>",
        opcoes: [{ t: "Pressa", certo: true }, { t: "Prêmio fácil", certo: true }, { t: "Pede o código", certo: true }, { t: "Aviso da aula", certo: false }],
        explicacao: "Pressa, prêmio e pedido de código." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Golpe", b: "Enganar alguém" }, { a: "Phishing", b: "Mensagem ou site falso" }, { a: "Isca", b: "Chama a atenção" }],
        explicacao: "Golpe, phishing e isca." },
      { tipo: "escolha", titulo: "Passo 3 · Caí num golpe",
        perguntas: [{ p: "Caí num golpe. Eu:", opcoes: ["Paro de responder e conto para um adulto", "Fico quieto"], certo: 0 }],
        explicacao: "Contar para um adulto ajuda." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é normal", opcoes: ["é normal", "é sinal de golpe"], certo: "é sinal de golpe" } }, { v: true }]
  },

  m5: {
    pratica: [
      { tipo: "mensagens", titulo: "Gentil ou machuca?",
        enunciado: "<p>Como você se sentiria se a mensagem fosse para você?</p>",
        app: "💬 Grupo da turma", botoes: [{ id: "G", rot: "🙂 Gentil" }, { id: "M", rot: "😢 Machuca" }],
        itens: [{ de: "Colega", t: "Parabéns pelo trabalho! 👏", c: "G" }, { de: "Colega", t: "VOCÊ É CHATO", c: "M" }, { de: "Colega", t: "Quer ajuda?", c: "G" }],
        okMsg: "Você pensou no outro! 💛", explicacao: "Elogio e ajuda são gentis; ofensa machuca." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Ao vivo ou escrito?",
        enunciado: "<p>Veja a tabela <strong>Na conversa ao vivo · Na mensagem escrita</strong>.</p>",
        categorias: [{ id: "V", rot: "🗣️ Ao vivo" }, { id: "E", rot: "⌨️ Escrito" }],
        itens: [{ t: "Você vê o rosto", c: "V" }, { t: "A brincadeira pode parecer ofensa", c: "E" }],
        explicacao: "Ao vivo: rosto. Escrito: pode parecer ofensa." },
      { tipo: "escolha", titulo: "Passo 2 · Maiúsculas",
        perguntas: [{ p: "TUDO EM MAIÚSCULAS parece:", opcoes: ["Grito", "Elogio"], certo: 0 }],
        explicacao: "Parece grito." },
      { tipo: "escolha", titulo: "Passo 3 · Antes de postar",
        perguntas: [{ p: "Antes de postar, pergunte:", opcoes: ["É verdade? É gentil? É necessário?", "Vai ter curtida?"], certo: 0 }],
        explicacao: "Verdade, gentil e necessário." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é bom responder na hora", opcoes: ["é bom responder na hora", "é bom esperar passar"], certo: "é bom esperar passar" } }]
  },

  m6: {
    pratica: [
      { tipo: "classificar", titulo: "É cyberbullying?",
        enunciado: "<p>Cyberbullying é humilhar <strong>de propósito</strong> e <strong>várias vezes</strong>.</p>",
        categorias: [{ id: "S", rot: "🛑 É" }, { id: "N", rot: "✅ Não é" }],
        itens: [{ t: "Todo dia chamam o colega por um apelido que humilha", c: "S" }, { t: "Uma colega elogia o desenho do outro", c: "N" }, { t: "Fazem montagens com a foto do colega para rir", c: "S" }],
        explicacao: "Humilhar várias vezes é cyberbullying; elogiar não." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que cada um pode fazer?",
        enunciado: "<p>Veja a tabela <strong>Papel · Quem é · O que pode fazer</strong>.</p>",
        pares: [{ a: "🎯 Alvo", b: "Guardar prints e contar para um adulto" }, { a: "👀 Espectador", b: "Não repassar e apoiar o colega" }, { a: "😈 Autor", b: "Parar e pedir desculpas" }],
        explicacao: "Alvo pede ajuda; espectador apoia; autor para." },
      { tipo: "sinais", titulo: "Passo 2 · O que ajuda?",
        enunciado: "<p>Marque <strong>só</strong> o que ajuda.</p>",
        opcoes: [{ t: "Contar para um adulto", certo: true }, { t: "Guardar prints", certo: true }, { t: "Repassar a montagem", certo: false }],
        explicacao: "Contar e guardar prints ajudam; repassar piora." },
      { tipo: "escolha", titulo: "Passo 3 · É crime?",
        perguntas: [{ p: "Desde 2024, no Brasil, o cyberbullying:", opcoes: ["É crime", "É permitido"], certo: 0 }],
        explicacao: "É crime." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "ajuda", opcoes: ["ajuda", "piora"], certo: "piora" } }, { v: true }]
  },

  m7: {
    pratica: [
      { tipo: "mensagens", titulo: "Na rodoviária: pode ou evite?",
        enunciado: "<p>O nome certo da rede é <strong>Rodoviaria_Oficial</strong>.</p>",
        app: "📶 Wi-Fi", botoes: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "🚫 Evite" }],
        itens: [{ de: "Rodoviaria_Oficial", t: "Ver a previsão do tempo", c: "S" }, { de: "Rodoviaria_Gratis_Rapida", t: "Entrar nessa rede", c: "N", why: "Nome parecido: pode ser falsa." }, { de: "Rodoviaria_Oficial", t: "Entrar no banco", c: "N", why: "Banco pelos dados móveis." }],
        okMsg: "Viagem segura! 🚌", explicacao: "Nome certo para coisas simples; banco pelos dados móveis." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Rede aberta", b: "Rede sem senha" }, { a: "Dados móveis", b: "A internet do celular" }, { a: "Wi-Fi público", b: "Rede de um lugar aberto" }],
        explicacao: "Aberta = sem senha; dados móveis = celular; público = lugar aberto." },
      { tipo: "escolha", titulo: "Passo 2 · Rede falsa",
        perguntas: [{ p: "Uma rede com nome parecido pode ser:", opcoes: ["Falsa", "Mais rápida"], certo: 0 }],
        explicacao: "Pode ser falsa." },
      { tipo: "escolha", titulo: "Passo 3 · O banco",
        perguntas: [{ p: "Para entrar no banco, uso:", opcoes: ["Os dados móveis", "O Wi-Fi da praça"], certo: 0 }],
        explicacao: "Dados móveis." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "entro no banco sem problema", opcoes: ["entro no banco sem problema", "evito entrar no banco"], certo: "evito entrar no banco" } }]
  },

  m8: {
    pratica: [
      { tipo: "classificar", titulo: "Argumento ou ataque pessoal?",
        enunciado: "<p>Veja a tabela <strong>Argumento · Ataque pessoal</strong>.</p>",
        categorias: [{ id: "A", rot: "✅ Argumento" }, { id: "P", rot: "❌ Ataque pessoal" }],
        itens: [{ t: "“Eu discordo, porque é caro.”", c: "A" }, { t: "“Você não sabe nada.”", c: "P" }, { t: "“Entendi, mas penso diferente.”", c: "A" }],
        explicacao: "Argumento fala da ideia; ataque ofende a pessoa." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Debate", b: "Conversa com opiniões diferentes" }, { a: "Argumento", b: "O motivo da sua opinião" }, { a: "Ataque pessoal", b: "Ofender a pessoa" }],
        explicacao: "Debate, argumento e ataque pessoal." },
      { tipo: "escolha", titulo: "Passo 2 · O que a gente critica?",
        perguntas: [{ p: "No debate, a gente critica:", opcoes: ["A ideia", "A pessoa"], certo: 0 }],
        explicacao: "A ideia." },
      { tipo: "escolha", titulo: "Passo 3 · As regras",
        perguntas: [{ p: "Uma regra do debate é:", opcoes: ["Esperar a vez", "Falar mais alto"], certo: 0 }],
        explicacao: "Esperar a vez." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é um argumento", opcoes: ["é um argumento", "é um ataque pessoal"], certo: "é um ataque pessoal" } }, { v: true }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Protocolo", perguntas: [{ p: "Protocolo é:", opcoes: ["Um conjunto de regras", "Um mouse"], certo: 0 }], explicacao: "Regras." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ligar", de: "m2", titulo: "M2 · Endereços", pares: [{ a: "http://", b: "Cartão-postal" }, { a: "https:// 🔒", b: "Carta lacrada" }], explicacao: "http aberto; https cifrado." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", de: "m3", titulo: "M3 · Senhas", categorias: [{ id: "F", rot: "Senha forte" }, { id: "R", rot: "Senha fraca" }], itens: [{ t: "Pipa!Verde8Voa", c: "F" }, { t: "123456", c: "R" }], explicacao: "Comprida e misturada = forte." },
      { tipo: "relembre", de: "m4" },
      { tipo: "sinais", de: "m4", titulo: "M4 · Golpe", enunciado: "<p>Marque os sinais de golpe.</p>", opcoes: [{ t: "Pressa", certo: true }, { t: "Pede a senha", certo: true }, { t: "Aviso da aula", certo: false }], explicacao: "Pressa e pedido de senha." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Empatia", perguntas: [{ p: "Empatia é:", opcoes: ["Se colocar no lugar do outro", "Ter seguidores"], certo: 0 }], explicacao: "Lugar do outro." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Cyberbullying", perguntas: [{ p: "O espectador ajuda quando:", opcoes: ["Não repassa", "Repassa"], certo: 0 }], explicacao: "Não repassa." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Wi-Fi", perguntas: [{ p: "Para o banco, uso:", opcoes: ["Os dados móveis", "O Wi-Fi da praça"], certo: 0 }], explicacao: "Dados móveis." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Debate", perguntas: [{ p: "No debate, a gente critica:", opcoes: ["A ideia", "A pessoa"], certo: 0 }], explicacao: "A ideia." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-3bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Protocolo", [{ p: "Protocolo é:", opcoes: ["Um conjunto de regras", "Um cabo"], certo: 0 }, { p: "O erro 404 quer dizer:", opcoes: ["Página encontrada", "Página não encontrada"], certo: 1 }]), pega("m1"),
    Q("m2", "Cadeado", [{ p: "O https é como:", opcoes: ["Uma carta lacrada", "Um cartão-postal"], certo: 0 }, { p: "Site falso pode ter cadeado?", opcoes: ["Não", "Pode"], certo: 1 }]), pega("m2"),
    Q("m3", "Senhas", [{ p: "Senha forte é:", opcoes: ["Comprida e misturada", "Curta"], certo: 0 }, { p: "O código do celular é algo que você:", opcoes: ["Sabe", "Tem"], certo: 1 }]), pega("m3"),
    Q("m4", "Golpes", [{ p: "Pressa numa mensagem é:", opcoes: ["Sinal de golpe", "Sinal de amizade"], certo: 0 }, { p: "Caí num golpe. Eu:", opcoes: ["Fico quieto", "Conto para um adulto"], certo: 1 }]), pega("m4"),
    Q("m5", "Empatia", [{ p: "Maiúsculas parecem:", opcoes: ["Grito", "Elogio"], certo: 0 }, { p: "Com raiva, eu:", opcoes: ["Respondo na hora", "Espero passar"], certo: 1 }]), pega("m5"),
    Q("m6", "Cyberbullying", [{ p: "O print serve de:", opcoes: ["Prova", "Enfeite"], certo: 0 }, { p: "Repassar a montagem do colega:", opcoes: ["Ajuda", "Piora"], certo: 1 }]), pega("m6"),
    Q("m7", "Wi-Fi", [{ p: "Rede aberta é a rede:", opcoes: ["Sem senha", "Com senha"], certo: 0 }, { p: "Para o banco, uso:", opcoes: ["O Wi-Fi da praça", "Os dados móveis"], certo: 1 }]), pega("m7"),
    Q("m8", "Debate", [{ p: "O motivo da opinião é o:", opcoes: ["Argumento", "Ataque"], certo: 0 }, { p: "“Cala a boca” é:", opcoes: ["Argumento", "Ataque pessoal"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 3: 3º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-3bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>🎧 O fone sem fio do Rafa é de uma marca e funciona direitinho no celular da mãe dele, que é de outra marca.</p><p>🤔 Como aparelhos de marcas diferentes conseguem “conversar”? Quem combinou as regras?</p>"},"m2":{"html":"<p>🔒 A Lara ia digitar a senha do jogo e reparou que o endereço começava com <b>http://</b>, sem o S e sem o cadeado.</p><p>🤔 Faz diferença? O que pode acontecer com a senha dela no caminho?</p>"},"m3":{"html":"<p>📱 Chegou um SMS no celular da Bia com um código. Logo depois, um “amigo” mandou: “me passa esse código que chegou aí? É para um sorteio!”.</p><p>🤔 Por que alguém quer tanto esse código? O que ele protege?</p>"},"m4":{"html":"<p>🎮 No chat do jogo apareceu: “Ganhe <b>10.000 moedas grátis</b>! É só entrar com a sua senha neste site!”.</p><p>🤔 É um presente ou uma isca? Como saber?</p>"},"m5":{"html":"<p>💬 O Caio escreveu no grupo: “KKK VOCÊ É MUITO LENTO NO JOGO”. Ele estava brincando, mas o amigo ficou triste e saiu do grupo.</p><p>🤔 Por que a brincadeira machucou? O que a mensagem escrita não mostra?</p>"},"m6":{"html":"<p>🖼️ No grupo da turma, alguém postou uma montagem com a foto da Duda para zombar. Várias pessoas riram e repassaram. A Duda não quis mais ir à escola.</p><p>🤔 Isso é “só brincadeira”? O que cada pessoa do grupo poderia ter feito?</p>"},"m7":{"html":"<p>📶 Na rodoviária, o celular da Mia mostrou duas redes abertas: <b>Rodoviaria_Oficial</b> e <b>Wi-Fi Gratis Rodoviaria</b>.</p><p>🤔 Qual é a verdadeira? E é seguro entrar no aplicativo do banco ali?</p>"},"m8":{"html":"<p>📣 Nos comentários de um vídeo sobre o jogo novo, a conversa virou briga: “você é burro!”, “cala a boca!”. Ninguém mudou de ideia, e todo mundo saiu chateado.</p><p>🤔 Dá para discordar sem brigar? O que faz uma discussão virar debate?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["O programa que usamos para abrir sites é o…", ["Navegador", "Bluetooth"], "É o <b>navegador</b>."],
    ["O fone sem fio conversa com o celular pelo…", ["Bluetooth", "HTTP"], "Pelo <b>Bluetooth</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    msg("🛠️ Na vida real: qual protocolo?", "🌐 Protocolos", [["H", "🌐 HTTP"], ["W", "📶 Wi-Fi"], ["B", "🎧 Bluetooth"]], "Qual protocolo está trabalhando?",
      [["O fone sem fio toca a música do celular", "B", "Pertinho: Bluetooth."], ["O celular entra na rede sem fio da escola", "W", "Rede sem fio: Wi-Fi."], ["O navegador pede a página ao servidor", "H", "Pedir páginas: HTTP."]],
      "Mandou bem! 🌐", "Protocolo é um conjunto de regras para os aparelhos conversarem."),
    VIDA(["Protocolo é…", ["Um conjunto de regras para os aparelhos conversarem", "Um cabo"], "É um <b>conjunto de regras</b>."], ["Quem manda a página para o navegador é o…", ["Servidor", "Fone"], "O <b>servidor</b> responde mandando a página."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: aberto ou cifrado?", "🌐 Navegador", [["A", "📮 Aberto (http)"], ["C", "✉️ Cifrado (https 🔒)"]], "Olhe o começo do endereço.",
      [["http://www.jogoverde.com.br", "A", "Sem o S: aberto, como cartão-postal."], ["🔒 https://www.jogoverde.com.br", "C", "Com https e cadeado: cifrado."], ["🔒 https://portal.professorwell.com.br", "C", "Cifrado."]],
      "Mandou bem! 🔒", "http = aberto; https com cadeado = cifrado."),
    VIDA(["O https com cadeado é como…", ["Uma carta lacrada", "Um cartão-postal"], "É como uma <b>carta lacrada</b>."], ["Site falso pode ter cadeado?", ["Sim: confira o nome do site", "Não, nunca"], "Pode. Confira sempre o <b>nome</b>."])
  ];
  A.m3.aplicar = [
    msg("🛠️ Na vida real: forte ou fraca?", "🔐 Senhas inventadas", [["F", "💪 Forte"], ["X", "😟 Fraca"]], "São senhas <b>inventadas</b>, só para treinar.",
      [["Pipa!Verde8Voa", "F", "Comprida e misturada."], ["123456", "X", "Curta e só números."], ["bia2014", "X", "Tem o nome."]],
      "Mandou bem! 🔐", "Senha forte é comprida, misturada e sem nada pessoal."),
    VIDA(["Alguém pediu o código que chegou no seu celular. Você…", ["Não passa: o código é só seu", "Passa rapidinho"], "O código é só seu: <b>não passe</b>."], ["Senha forte mistura…", ["Letras, números e símbolos", "Só o seu nome"], "Mistura <b>letras, números e símbolos</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: golpe ou não?", "💬 Mensagens", [["G", "⚠️ Golpe"], ["O", "✅ Confiável"]], "Procure os sinais: pressa, prêmio fácil, pedido de senha, código ou dinheiro.",
      [["Ganhe moedas grátis! Entre com a sua senha aqui", "G", "Pede a senha: isca."], ["Você ganhou um celular! Só hoje!", "G", "Prêmio fácil e pressa."], ["A reunião de pais é sexta", "O", "Não pede nada."]],
      "Nenhuma isca te pegou! 🎣", "Pressa, prêmio fácil e pedido de senha são sinais de golpe."),
    VIDA(["Phishing é o golpe com…", ["Mensagem ou site falso, como uma isca", "Um celular novo"], "É como uma <b>isca</b> de pescaria."], ["“Só hoje!” é um sinal de…", ["Golpe (pressa)", "Amizade"], "A <b>pressa</b> é sinal de golpe."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: enviar ou reescrever?", "💬 Grupo da turma", [["E", "📤 Pode enviar"], ["R", "✏️ Reescreva"]], "Antes de enviar, pense: é gentil?",
      [["VOCÊ NUNCA ACERTA NADA!!!", "R", "Parece grito e machuca."], ["Valeu pela ajuda! 😊", "E", "Gentil."], ["Que roupa feia kkk", "R", "Não é gentil."]],
      "Grupo em paz! 🤝", "Na mensagem escrita, a brincadeira pode parecer ofensa."),
    VIDA(["Empatia é…", ["Se colocar no lugar do outro", "Escrever em maiúsculas"], "É se colocar <b>no lugar do outro</b>."], ["Na mensagem escrita, a brincadeira pode…", ["Parecer ofensa", "Ficar mais engraçada sempre"], "Pode <b>parecer ofensa</b>."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: você viu a montagem", "👀 Espectador", [["A", "✅ Ajuda"], ["P", "❌ Piora"]], "Você viu uma montagem zombando de um colega. Cada atitude ajuda ou piora?",
      [["Repassar a montagem", "P", "Espalha a humilhação."], ["Não repassar e apoiar o colega", "A", "É o que o espectador faz."], ["Contar para um adulto", "A", "Pedir ajuda."]],
      "Você fez a diferença! 💪", "O espectador não repassa e apoia o colega."),
    VIDA(["Quem sofre o cyberbullying deve…", ["Guardar prints, bloquear e contar a um adulto", "Responder com ofensas"], "Guardar <b>prints</b>, bloquear e contar a um adulto."], ["Cyberbullying é humilhar alguém…", ["De propósito e várias vezes", "Sem querer, uma vez"], "<b>De propósito e várias vezes</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: na rodoviária", "📶 Wi-Fi público", [["S", "✅ Pode"], ["N", "🚫 Não faça"]], "No Wi-Fi público, pode ou não?",
      [["Ver um vídeo de receita", "S", "Nada importante em risco."], ["Entrar no banco com a senha", "N", "Não use senhas importantes."], ["Perguntar o nome certo da rede", "S", "Evita a rede falsa."]],
      "Viagem segura! 📶", "Pergunte o nome certo da rede e não use senhas importantes."),
    VIDA(["Um golpista pode criar uma rede…", ["Com nome parecido, falsa", "Oficial da praça"], "Uma <b>rede falsa</b>."], ["Para o que é importante, use…", ["Os dados móveis", "Qualquer rede aberta"], "Use os <b>dados móveis</b>."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: argumento ou ataque?", "💬 Comentários", [["A", "✅ Argumento"], ["P", "❌ Ataque pessoal"]], "O comentário critica a ideia ou ataca a pessoa?",
      [["Eu discordo, porque é caro.", "A", "Dá um motivo."], ["Você não sabe nada.", "P", "Ataca a pessoa."], ["Entendi, mas penso diferente.", "A", "Respeita e discorda."]],
      "Debate de respeito! 🤝", "Critique a ideia, não a pessoa."),
    VIDA(["No debate, as regras são…", ["Ouvir até o fim, esperar a vez e dar um motivo", "Interromper e gritar"], "<b>Ouvir até o fim, esperar a vez, dar um motivo.</b>"], ["“Cala a boca” é…", ["Ataque pessoal", "Argumento"], "É <b>ataque pessoal</b>."])
  ];
})();
