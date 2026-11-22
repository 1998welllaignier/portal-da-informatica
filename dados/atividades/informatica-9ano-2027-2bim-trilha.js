/* ============================================================
   ATIVIDADES — Informática 9º ano — 2º bimestre de 2027 (Segurança) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
PORTAL.registrarAtividades("informatica-9ano-2027-2bim-trilha", {

  m1: {
    pratica: [
      { tipo: "mensagens", titulo: "Baixar ou não?",
        enunciado: "<p>Veja a tabela <strong>Atitude · Por quê</strong>. Só baixe da <strong>loja oficial</strong>.</p>",
        app: "📲 Downloads", botoes: [{ id: "N", rot: "🚫 Não baixe" }, { id: "S", rot: "✅ Pode baixar" }],
        itens: [{ de: "Loja oficial", t: "Atualização do aplicativo da escola", c: "S" }, { de: "Site desconhecido", t: "Jogo pago de graça", c: "N", why: "Pode ser um cavalo de Troia." }, { de: "Número desconhecido", t: "Link estranho com um arquivo", c: "N" }],
        okMsg: "Você se protegeu! 🛡️", explicacao: "Só baixe da loja oficial." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que cada um faz?",
        enunciado: "<p>Veja a tabela <strong>Tipo · O que faz</strong>.</p>",
        pares: [{ a: "🦠 Vírus", b: "Gruda nos arquivos" }, { a: "🐴 Cavalo de Troia", b: "Finge ser um programa bom" }, { a: "📢 Adware", b: "Enche a tela de propagandas" }],
        explicacao: "Vírus gruda; cavalo de Troia finge; adware enche de propaganda." },
      { tipo: "sinais", titulo: "Passo 2 · O que protege?",
        enunciado: "<p>Marque <strong>só</strong> o que protege.</p>",
        opcoes: [{ t: "Atualizar o celular", certo: true }, { t: "Usar antivírus", certo: true }, { t: "Baixar de qualquer site", certo: false, why: "Pode trazer malware." }],
        explicacao: "Atualizar e usar antivírus protegem." },
      { tipo: "escolha", titulo: "Passo 3 · O que é malware?",
        perguntas: [{ p: "Malware é:", opcoes: ["Um programa feito para prejudicar", "Um jogo novo"], certo: 0 }],
        explicacao: "Malware é programa do mal." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é seguro", opcoes: ["é seguro", "é perigoso"], certo: "é perigoso" } }]
  },

  m2: {
    pratica: [
      { tipo: "mensagens", titulo: "Golpe ou normal?",
        enunciado: "<p>Veja a tabela <strong>Sinal de golpe · Exemplo</strong>.</p>",
        app: "💬 Mensagens", botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "Número estranho", t: "URGENTE! Mande a sua senha em 1 hora!", c: "G", why: "Pressa e pedido de senha." }, { de: "Professor", t: "Amanhã tem aula no laboratório.", c: "N" }, { de: "Loja", t: "Você ganhou um celular! Pague só a taxa.", c: "G", why: "Prêmio fácil." }],
        okMsg: "Você reconhece um golpe! 🎣", explicacao: "Pressa, prêmio e pedido de senha são golpe." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · Quais são sinais de golpe?",
        enunciado: "<p>Marque <strong>só</strong> os sinais de golpe.</p>",
        opcoes: [{ t: "Pressa", certo: true }, { t: "Pede a senha", certo: true }, { t: "Prêmio fácil", certo: true }, { t: "Aviso do professor sobre a aula", certo: false }],
        explicacao: "Pressa, pedido de senha e prêmio fácil." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Engenharia social", b: "Enganar a pessoa" }, { a: "Força bruta", b: "Testar todas as senhas" }, { a: "DDoS", b: "Derrubar um site" }],
        explicacao: "Enganar, testar senhas e derrubar o site." },
      { tipo: "escolha", titulo: "Passo 3 · O banco pede a senha?",
        perguntas: [{ p: "Por mensagem, o banco:", opcoes: ["Nunca pede a senha", "Sempre pede a senha"], certo: 0 }],
        explicacao: "Banco nunca pede a senha por mensagem." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "pede a senha", opcoes: ["pede a senha", "nunca pede a senha"], certo: "nunca pede a senha" } }, { v: true }]
  },

  m3: {
    pratica: [
      { tipo: "cesar", titulo: "Cifre com a chave 3",
        chaveInicial: 3,
        enunciado: "<p>Use a tira: troque a letra de cima pela de baixo.</p>",
        tarefas: [{ tipo: "cifrar", claro: "SOL", cifrado: "VRO" }],
        explicacao: "S → V, O → R, L → O: VRO." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Passo 1 · Complete a tabela",
        enunciado: "<p>Com a <strong>chave 3</strong>, cada letra anda 3 casas. Veja a tabela da apostila.</p>",
        dicas: ["A → D, B → E…"],
        colunas: ["Letra normal", "Letra cifrada"],
        linhas: [["A", { op: ["D", "B"], r: "D" }], ["B", { op: ["E", "C"], r: "E" }], ["Z", { op: ["C", "A"], r: "C" }]],
        explicacao: "A → D; B → E; Z → C." },
      { tipo: "escolha", titulo: "Passo 2 · LUA cifrada",
        perguntas: [{ p: "Com a chave 3, LUA vira:", opcoes: ["OXD", "MVB"], certo: 0 }],
        explicacao: "LUA → OXD." },
      { tipo: "ligar", titulo: "Passo 3 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Cifrar", b: "Esconder a mensagem" }, { a: "Decifrar", b: "Voltar para a mensagem normal" }, { a: "Chave", b: "O número de casas" }],
        explicacao: "Cifrar esconde; decifrar volta; a chave é o número de casas." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "andam mais casas para a frente", opcoes: ["andam mais casas para a frente", "voltam as casas"], certo: "voltam as casas" } }, { v: true }]
  },

  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Chave pública ou privada?",
        enunciado: "<p>Veja a tabela <strong>Chave · Como é</strong>.</p>",
        categorias: [{ id: "U", rot: "🔓 Pública" }, { id: "R", rot: "🗝️ Privada" }],
        itens: [{ t: "Todo mundo pode ter", c: "U" }, { t: "É secreta", c: "R" }, { t: "Serve para fechar", c: "U" }, { t: "Serve para abrir", c: "R" }],
        explicacao: "Pública: todos têm e fecha. Privada: secreta e abre." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · O endereço é cifrado?",
        categorias: [{ id: "C", rot: "🔒 Cifrado" }, { id: "S", rot: "⚠️ Sem criptografia" }],
        itens: [{ t: "https:// com cadeado", c: "C" }, { t: "http:// sem S", c: "S" }],
        explicacao: "https e cadeado = cifrado." },
      { tipo: "escolha", titulo: "Passo 2 · O cadeado prova que o site é honesto?",
        perguntas: [{ p: "O 🔒 prova que o site é honesto?", opcoes: ["Não: confira o nome do site", "Sim, sempre"], certo: 0 }],
        explicacao: "O cadeado não prova honestidade." },
      { tipo: "memoria", titulo: "Passo 3 · Jogo da memória",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>",
        dicas: ["Releia a tabela Chave · Como é."],
        pares: [{ a: "Chave pública", b: "Cadeado aberto" }, { a: "Chave privada", b: "Secreta" }, { a: "HTTPS", b: "Conversa cifrada" }],
        explicacao: "Pública = cadeado aberto. Privada = secreta. HTTPS = cifrada." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "é de todo mundo", opcoes: ["é de todo mundo", "é secreta"], certo: "é secreta" } }, { v: false, corrigir: { trecho: "prova que o site é honesto", opcoes: ["prova que o site é honesto", "não prova que o site é honesto"], certo: "não prova que o site é honesto" } }]
  },

  m5: {
    pratica: [
      { tipo: "classificar", titulo: "Senha forte ou fraca?",
        enunciado: "<p>Veja a tabela <strong>Senha fraca · Senha forte</strong>. As senhas são inventadas.</p>",
        categorias: [{ id: "F", rot: "💪 Forte" }, { id: "R", rot: "⚠️ Fraca" }],
        itens: [{ t: "123456", c: "R" }, { t: "Gato!Azul7Pula", c: "F" }, { t: "ana2012", c: "R", why: "Tem nome e ano." }],
        explicacao: "Forte é comprida e misturada." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · O que deixa a senha forte?",
        enunciado: "<p>Marque <strong>só</strong> o que deixa a senha forte.</p>",
        opcoes: [{ t: "Ser comprida", certo: true }, { t: "Misturar letras, números e símbolos", certo: true }, { t: "Ter o seu aniversário", certo: false, why: "Nada pessoal." }],
        explicacao: "Comprida e misturada." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Hash", b: "Resumo embaralhado" }, { a: "Duas etapas", b: "Senha + código no celular" }, { a: "Senha forte", b: "Comprida e misturada" }],
        explicacao: "Hash = resumo; duas etapas = código; senha forte = comprida e misturada." },
      { tipo: "escolha", titulo: "Passo 3 · Posso contar a senha?",
        perguntas: [{ p: "A senha é:", opcoes: ["Pessoal: não conto para ninguém", "Para contar aos amigos"], certo: 0 }],
        explicacao: "Senha é pessoal." }
    ],
    vf: [{ v: false, corrigir: { trecho: "é uma senha forte", opcoes: ["é uma senha forte", "é uma senha fraca"], certo: "é uma senha fraca" } }, { v: true }, { v: true }]
  },

  m6: {
    pratica: [
      { tipo: "ligar", titulo: "QUANDO… FAÇA…",
        enunciado: "<p>Ligue cada <strong>evento</strong> à sua <strong>ação</strong>. Veja a tabela da apostila.</p>",
        pares: [{ a: "A porta abre depois das 18h", b: "Tocar a sirene" }, { a: "Alguém digita o código certo", b: "Desligar a sirene" }, { a: "O código é errado 3 vezes", b: "Mandar aviso ao celular do professor" }],
        explicacao: "Porta → sirene; código certo → desligar; 3 erros → aviso." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Evento ou ação?",
        enunciado: "<p>Evento = o que <strong>acontece</strong>. Ação = o que o programa <strong>faz</strong>.</p>",
        categorias: [{ id: "E", rot: "⚡ Evento" }, { id: "A", rot: "🎬 Ação" }],
        itens: [{ t: "A porta abre", c: "E" }, { t: "Tocar a sirene", c: "A" }, { t: "Apertar a tecla", c: "E" }],
        explicacao: "Acontece = evento; faz = ação." },
      { tipo: "escolha", titulo: "Passo 2 · O celular vibra",
        perguntas: [{ p: "Quando chega mensagem, o celular vibra. Vibrar é:", opcoes: ["A ação", "O evento"], certo: 0 }],
        explicacao: "Chegar a mensagem é o evento; vibrar é a ação." },
      { tipo: "escolha", titulo: "Passo 3 · Teste a regra",
        perguntas: [{ p: "São 20h e a porta abre. O alarme:", opcoes: ["Toca a sirene", "Fica quieto"], certo: 0 }],
        explicacao: "Depois das 18h, porta aberta = sirene." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "antes do evento", opcoes: ["antes do evento", "depois do evento"], certo: "depois do evento" } }]
  },

  m7: {
    pratica: [
      { tipo: "tabela", titulo: "A regra 3-2-1",
        enunciado: "<p>Veja a tabela <strong>Número · Regra</strong>.</p>",
        dicas: ["Releia a tabela da regra 3-2-1."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantas cópias?", { op: ["3", "1"], r: "3" }], ["Quantas cópias fora de casa?", { op: ["1", "3"], r: "1" }]],
        explicacao: "3 cópias; 1 fora de casa." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Ransomware", b: "Tranca os arquivos e pede resgate" }, { a: "Backup", b: "Cópia de segurança" }, { a: "Nuvem", b: "Guardar pela internet" }],
        explicacao: "Ransomware tranca; backup é cópia; nuvem é pela internet." },
      { tipo: "escolha", titulo: "Passo 2 · Pagar resolve?",
        perguntas: [{ p: "Pagar o resgate:", opcoes: ["Não garante nada", "Garante os arquivos de volta"], certo: 0 }],
        explicacao: "Pagar não garante nada." },
      { tipo: "sinais", titulo: "Passo 3 · O que protege?",
        enunciado: "<p>Marque <strong>só</strong> o que protege.</p>",
        opcoes: [{ t: "Fazer backup", certo: true }, { t: "Ter uma cópia na nuvem", certo: true }, { t: "Não ter nenhuma cópia", certo: false }],
        explicacao: "Backup e cópia na nuvem protegem." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "garante que os arquivos voltam", opcoes: ["garante que os arquivos voltam", "não garante nada"], certo: "não garante nada" } }, { v: true }]
  },

  m8: {
    pratica: [
      { tipo: "escolha", titulo: "Ache a palavra escondida",
        enunciado: "<p>Leia as <strong>primeiras letras</strong>:<br><strong>R</strong>ecebi o livro.<br><strong>E</strong>stá ótimo.<br><strong>D</strong>evolvo amanhã.<br><strong>E</strong>nvio um abraço.</p>",
        perguntas: [{ p: "A palavra escondida é:", opcoes: ["REDE", "LIVRO"], certo: 0 }],
        explicacao: "R-E-D-E = REDE." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O bilhete da apostila",
        perguntas: [{ p: "No bilhete da apostila, as primeiras letras formam:", opcoes: ["SOL", "LUA"], certo: 0 }],
        explicacao: "S-O-L." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Esteganografia", b: "Escrita escondida" }, { a: "Acróstico", b: "As primeiras letras formam uma palavra" }],
        explicacao: "Esteganografia = escrita escondida; acróstico = primeiras letras." },
      { tipo: "escolha", titulo: "Passo 3 · Alguém percebe?",
        perguntas: [{ p: "Na esteganografia, a mensagem fica escondida:", opcoes: ["Dentro de outra coisa", "Num cartaz, à vista de todos"], certo: 0 }],
        explicacao: "Dentro de outra coisa: ninguém percebe." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "todo mundo percebe o segredo", opcoes: ["todo mundo percebe o segredo", "ninguém percebe o segredo"], certo: "ninguém percebe o segredo" } }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Malware", perguntas: [{ p: "Malware é:", opcoes: ["Programa do mal", "Um jogo"], certo: 0 }], explicacao: "Programa do mal." },
      { tipo: "relembre", de: "m2" },
      { tipo: "sinais", de: "m2", titulo: "M2 · Golpe", enunciado: "<p>Marque os sinais de golpe.</p>", opcoes: [{ t: "Pressa", certo: true }, { t: "Pede a senha", certo: true }, { t: "Aviso da aula", certo: false }], explicacao: "Pressa e pedido de senha." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · César", perguntas: [{ p: "Com a chave 3, A vira:", opcoes: ["D", "B"], certo: 0 }], explicacao: "A → D." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Chaves", perguntas: [{ p: "Quem abre é a chave:", opcoes: ["Privada", "Pública"], certo: 0 }], explicacao: "Privada abre." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Senhas", categorias: [{ id: "F", rot: "Senha forte" }, { id: "R", rot: "Senha fraca" }], itens: [{ t: "Gato!Azul7Pula", c: "F" }, { t: "123456", c: "R" }], explicacao: "Comprida e misturada = forte." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", de: "m6", titulo: "M6 · Eventos", categorias: [{ id: "E", rot: "Evento" }, { id: "A", rot: "Ação" }], itens: [{ t: "A porta abre", c: "E" }, { t: "Tocar a sirene", c: "A" }], explicacao: "Acontece = evento; faz = ação." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Backup", perguntas: [{ p: "Backup é:", opcoes: ["Cópia de segurança", "Um vírus"], certo: 0 }], explicacao: "Cópia de segurança." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Escondida", perguntas: [{ p: "Esteganografia é:", opcoes: ["Escrita escondida", "Escrita rápida"], certo: 0 }], explicacao: "Escrita escondida." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-2bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Malware", [{ p: "Malware é:", opcoes: ["Programa do mal", "Um mouse"], certo: 0 }, { p: "O mais seguro é baixar:", opcoes: ["De qualquer site", "Da loja oficial"], certo: 1 }]), pega("m1"),
    Q("m2", "Golpe", [{ p: "Pressa numa mensagem é:", opcoes: ["Sinal de golpe", "Sinal de amizade"], certo: 0 }, { p: "Testar todas as senhas é:", opcoes: ["DDoS", "Força bruta"], certo: 1 }]), pega("m2"),
    Q("m3", "César", [{ p: "Com a chave 3, B vira:", opcoes: ["E", "C"], certo: 0 }, { p: "Para decifrar, a letra:", opcoes: ["Anda mais", "Volta"], certo: 1 }]), pega("m3"),
    Q("m4", "Chaves", [{ p: "O cadeado aberto é a chave:", opcoes: ["Pública", "Privada"], certo: 0 }, { p: "O 🔒 prova que o site é honesto?", opcoes: ["Sim", "Não"], certo: 1 }]), pega("m4"),
    Q("m5", "Senhas", [{ p: "Senha forte é:", opcoes: ["Comprida e misturada", "Curta"], certo: 0 }, { p: "Duas etapas pede:", opcoes: ["Uma foto", "Um código no celular"], certo: 1 }]), pega("m5"),
    Q("m6", "Eventos", [{ p: "A porta abrir é:", opcoes: ["Um evento", "Uma ação"], certo: 0 }, { p: "Código certo:", opcoes: ["Toca a sirene", "Desliga a sirene"], certo: 1 }]), pega("m6"),
    Q("m7", "Backup", [{ p: "O ransomware pede:", opcoes: ["Resgate", "Senha forte"], certo: 0 }, { p: "Na regra 3-2-1, fora de casa fica:", opcoes: ["3 cópias", "1 cópia"], certo: 1 }]), pega("m7"),
    Q("m8", "Escondida", [{ p: "No acróstico, a palavra está:", opcoes: ["Nas primeiras letras", "No título"], certo: 0 }, { p: "O bilhete da apostila esconde:", opcoes: ["LUA", "SOL"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 2: 2º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-2bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>📲 O celular da tia Nena começou a abrir <b>propagandas sozinho</b> e ficou lento, logo depois que ela baixou um “jogo grátis” de um site desconhecido.</p><p>🤔 O que entrou no celular dela? Por onde entrou? E como evitar?</p>"},"m2":{"html":"<p>💬 A mãe do Gui recebeu: “Oi, mãe, troquei de número. Me manda um Pix urgente? Depois te explico!”. Ela quase mandou… mas o Gui estava ao lado dela!</p><p>🤔 Como o golpista tentou parecer o filho? Que sinais mostravam que era golpe?</p>"},"m3":{"html":"<p>🕵️ Na caça ao tesouro da escola, a primeira pista estava num papel: <b>SDWLR</b>. Ninguém entendeu nada!</p><p>🤔 Como ler uma mensagem secreta? E se cada letra tivesse andado 3 casas no alfabeto?</p>"},"m4":{"html":"<p>🔒 A Bia vai comprar um fone numa loja on-line e viu um <b>cadeadinho</b> do lado do endereço.</p><p>🤔 O cadeado quer dizer que a loja é honesta? Ou ele protege outra coisa?</p>"},"m5":{"html":"<p>😱 A senha do Davi era <b>davi2011</b> em tudo: no jogo, na rede social e no e-mail. Um dia, o site do jogo avisou: “houve um <b>vazamento de dados</b>”.</p><p>🤔 O que pode acontecer com as outras contas do Davi? O que ele deve fazer agora?</p>"},"m6":{"html":"<p>🚪 O portão eletrônico do prédio do Rafa abre quando ele aperta o controle. À noite, a luz da garagem acende quando alguém passa.</p><p>🤔 O programa do portão fica perguntando o tempo todo “apertaram? apertaram?”, ou ele <b>espera</b> algo acontecer para agir?</p>"},"m7":{"html":"<p>🏥 Num hospital, os computadores amanheceram com todos os arquivos virando letras sem sentido. Na tela, uma mensagem: “pague para ter os arquivos de volta”.</p><p>🤔 O que aconteceu? Pagar resolve? O que teria salvado o hospital?</p>"},"m8":{"html":"<p>📜 O Caio recebeu um bilhete normalzinho do primo: “Saí cedo hoje. Ontem choveu muito. Levei o guarda-chuva.”. Só depois ele percebeu que as primeiras letras formavam uma palavra!</p><p>🤔 Como esconder uma mensagem sem ninguém nem perceber que ela existe?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["O programa que protege o celular de programas do mal é o…", ["Antivírus", "Navegador"], "É o <b>antivírus</b>."],
    ["O lugar seguro para baixar aplicativos é…", ["A loja oficial", "Um site desconhecido"], "Baixe só da <b>loja oficial</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    msg("🛠️ Na vida real: baixar ou não?", "📲 Downloads", [["S", "✅ Pode baixar"], ["N", "🚫 Não baixe"]], "Para cada oferta, decida.",
      [["Jogo da loja oficial", "S", "Loja oficial: pode."], ["“Jogo pago de graça” num site desconhecido", "N", "Pode ser um cavalo de Troia."], ["Link estranho de um número que você não conhece", "N", "Pode trazer malware."]],
      "Celular protegido! 🛡️", "Baixe só da loja oficial; desconfie de grátis demais e de links estranhos."),
    VIDA(["Um programa que finge ser bom e esconde um malware é o…", ["Cavalo de Troia", "Antivírus"], "É o <b>cavalo de Troia</b>."], ["Propaganda demais na tela pode ser…", ["Adware", "Vírus da gripe"], "Pode ser um <b>adware</b>."])
  ];
  A.m2.aplicar = [
    msg("🛠️ Na vida real: golpe ou não?", "💬 Mensagens", [["G", "⚠️ Golpe"], ["O", "✅ Confiável"]], "Procure os sinais: pressa, prêmio fácil, pedido de senha ou de dinheiro.",
      [["URGENTE! Me manda um Pix agora!", "G", "Pressa e pedido de dinheiro."], ["Você ganhou um celular! Mande a sua senha", "G", "Prêmio fácil e pedido de senha."], ["A aula amanhã começa às 14h", "O", "Não pede nada."]],
      "Golpe nenhum passa! 🛡️", "Pressa, prêmio fácil e pedido de senha ou dinheiro são sinais de golpe."),
    VIDA(["Banco pede a senha por mensagem?", ["Nunca", "Sempre"], "Banco <b>nunca</b> pede a senha por mensagem."], ["Enganar a pessoa para ela entregar os dados é…", ["Engenharia social", "DDoS"], "Isso é <b>engenharia social</b>."])
  ];
  A.m3.aplicar = [
    { tipo: "cesar", titulo: "🛠️ Na vida real: a pista da caça ao tesouro", chaveInicial: 3,
      enunciado: "<p>A pista foi cifrada com a <b>chave 3</b>. Use a tira para decifrar: cada letra volta 3 casas.</p>",
      tarefas: [{ tipo: "decifrar", claro: "PATIO", cifrado: "SDWLR" }],
      dicas: ["S volta 3 casas: R, Q, P. Então S → P."], explicacao: "SDWLR → PATIO: o tesouro está no pátio!" },
    VIDA(["O número de casas que a letra anda é a…", ["Chave", "Senha"], "É a <b>chave</b>."], ["LUA com a chave 3 vira…", ["OXD", "LUA"], "L → O, U → X, A → D: <b>OXD</b>."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: tem cadeado?", "🌐 Navegador", [["S", "🔒 Conversa cifrada"], ["N", "⚠️ Sem criptografia"]], "Olhe o começo do endereço.",
      [["🔒 https://www.lojafone.com.br", "S", "https e cadeado: cifrada."], ["http://www.lojafone.com.br", "N", "Sem o S e sem cadeado."], ["🔒 https://portal.professorwell.com.br", "S", "https e cadeado."]],
      "Mandou bem! 🔒", "https com cadeado: a conversa com o site é cifrada."),
    VIDA(["Quem abre o cadeado fechado com a chave pública?", ["Só o dono da chave privada", "Todo mundo"], "Só o dono da <b>chave privada</b>."], ["O cadeado prova que o site é honesto?", ["Não: confira o nome do site", "Sim, sempre"], "O cadeado <b>não</b> prova isso."])
  ];
  A.m5.aplicar = [
    msg("🛠️ Na vida real: forte ou fraca?", "🔐 Senhas inventadas", [["F", "💪 Forte"], ["X", "😟 Fraca"]], "Todas são senhas <b>inventadas</b>, só para treinar.",
      [["Gato!Azul7Pula", "F", "Comprida e misturada."], ["123456", "X", "Curta e só números."], ["ana2011", "X", "Tem nome e aniversário."]],
      "Mandou bem! 🔐", "Senha forte é comprida, mistura letras, números e símbolos, e não tem nada pessoal."),
    VIDA(["O site guarda a sua senha escrita?", ["Não: guarda um hash", "Sim"], "Ele guarda um <b>hash</b>, um resumo embaralhado."], ["Senha forte tem…", ["Letras, números e símbolos misturados", "Só o seu nome"], "Mistura letras, números e símbolos."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: evento ou ação?", "⚡ Alarme da sala", [["E", "⚡ Evento (QUANDO)"], ["A", "🎬 Ação (FAÇA)"]], "Cada parte da regra é o evento ou a ação?",
      [["A porta abre depois das 18h", "E", "É o que acontece."], ["Tocar a sirene", "A", "É o que o programa faz."], ["Alguém digita o código certo", "E", "É o que acontece."], ["Desligar a sirene", "A", "É o que o programa faz."]],
      "Mandou bem! ⚡", "QUANDO acontece algo (evento), FAÇA uma ação."),
    VIDA(["O celular vibra quando chega mensagem. O evento é…", ["Chegar a mensagem", "Vibrar"], "O <b>evento</b> é chegar a mensagem."], ["E a ação é…", ["Vibrar", "Chegar a mensagem"], "A <b>ação</b> é vibrar."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: o backup da Lara", "💾 Backup", [["S", "✅ Certo"], ["N", "⚠️ Errado"]], "Cada parte do plano segue a regra 3-2-1?",
      [["Ter o original e mais 2 cópias", "S", "São 3 cópias."], ["Guardar no computador e num HD externo", "S", "São 2 tipos de lugar."], ["Uma cópia na nuvem, fora de casa", "S", "É a 1 cópia fora de casa."], ["Pagar o resgate do ransomware", "N", "Pagar não garante nada."]],
      "Backup de respeito! 💾", "Regra 3-2-1: 3 cópias, 2 tipos de lugar, 1 fora de casa."),
    VIDA(["O ransomware tranca os arquivos e pede…", ["Dinheiro (o resgate)", "Uma foto"], "Pede o <b>resgate</b>."], ["A proteção contra o ransomware é o…", ["Backup", "Adware"], "É o <b>backup</b>, a cópia de segurança."])
  ];
  A.m8.aplicar = [
    { tipo: "tabela", titulo: "🛠️ Na vida real: o bilhete secreto do primo",
      enunciado: "<p>Leia a primeira letra de cada linha, de cima para baixo, e escreva a palavra escondida.</p>",
      colunas: ["Bilhete", "Palavra escondida"],
      linhas: [["Mais tarde eu ligo. / Amanhã tem prova. / Remédio na mesa.", { r: "MAR", tipo: "letras" }]],
      explicacao: "M-A-R: as primeiras letras escondem a palavra MAR." },
    VIDA(["Esconder uma mensagem sem ninguém perceber é…", ["Esteganografia", "DDoS"], "É a <b>esteganografia</b>."], ["No acróstico, a mensagem está…", ["Nas primeiras letras de cada linha", "No fim do bilhete"], "Nas <b>primeiras letras</b>."])
  ];
})();
