/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 9º ano — 2º bimestre de 2027 (Segurança)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF09CO02, EF09CO03, EF09CO04, EF09CO05.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });
  const SEM = ' dicas: ["A resposta está no 💡 Para começar da missão: releia a tabela."]';

PORTAL.registrarAtividades("informatica-9ano-2027-2bim", {

  /* ============ MISSÃO 1 — Malwares ============ */
  m1: {
    pratica: [
      { tipo: "mensagens", titulo: "Mão na massa: o celular da Lara está estranho. Baixar ou não?",
        robo: BIT("📲 Outros pedidos", [["“Calculadora da loja oficial, com muitas avaliações” → loja oficial: pode baixar.", "loja oficial → ✅ Pode"], ["“Jogo pago, grátis num site desconhecido” → grátis demais: pode ser cavalo de Troia.", "grátis demais → 🚫 Não baixe", true]]),
        enunciado: "<p>Para cada oferta, decida. Pense: <strong>vem da loja oficial?</strong> É <strong>grátis demais</strong>? Veio de um <strong>link estranho</strong>?</p>",
        app: "📲 Downloads", botoes: [{ id: "N", rot: "🚫 Não baixe" }, { id: "S", rot: "✅ Pode baixar" }],
        itens: [{ de: "Site desconhecido", t: "Jogo pago de graça: baixe o arquivo jogo_completo.exe", c: "N", why: "Grátis demais e fora da loja oficial: isca de cavalo de Troia." },
          { de: "Loja oficial", t: "Atualização do aplicativo da escola", c: "S", why: "Atualização da loja oficial fecha falhas." },
          { de: "Número desconhecido", t: "Veja as fotos da festa: link.estranho.xyz/fotos.apk", c: "N", why: "Link estranho com instalador." },
          { de: "Loja oficial", t: "Antivírus com milhões de downloads e boas avaliações", c: "S" }],
        okMsg: "Você escapou das iscas! 🛡️",
        explicacao: "Só baixe da loja oficial; desconfie do grátis demais e de links estranhos." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada malware e o que ele faz",
        robo: BIT("🔗 Outro exemplo", [["“Ladrão de bicicleta” → leva a bicicleta.", "ladrão → leva"], ["Eu leio a coluna <b>O que faz</b> da tabela e ligo.", "malware → o que faz ✔", true]]),
        pares: [{ a: "🦠 Vírus", b: "Gruda em arquivos e se espalha quando são abertos" }, { a: "🐛 Worm", b: "Se espalha sozinho pela rede" },
          { a: "🐴 Cavalo de Troia", b: "Finge ser um programa bom" }, { a: "👀 Spyware", b: "Espiona o que você digita" }, { a: "📢 Adware", b: "Enche a tela de propagandas" }],
        explicacao: "Vírus gruda; worm anda sozinho; cavalo de Troia se disfarça; spyware espiona; adware enche de anúncios." },
      { tipo: "sinais", titulo: "Quais atitudes protegem contra malware?",
        enunciado: "<p>Marque <strong>só</strong> as atitudes que protegem.</p>",
        opcoes: [{ t: "Manter o sistema atualizado", certo: true }, { t: "Usar antivírus", certo: true }, { t: "Baixar só da loja oficial", certo: true },
          { t: "Abrir o pen drive de qualquer pessoa", certo: false, why: "Pen drive de outros pode trazer malware." }, { t: "Instalar o “jogo pago grátis” do site desconhecido", certo: false, why: "É a isca do cavalo de Troia." }],
        explicacao: "Atualizar, antivírus e loja oficial protegem." },
      { tipo: "classificar", modo: "tabela", titulo: "Qual é o malware?",
        colunaItem: "Caso", colunaResp: "Malware",
        categorias: [{ id: "V", rot: "🦠 Vírus" }, { id: "W", rot: "🐛 Worm" }, { id: "T", rot: "🐴 Cavalo de Troia" }, { id: "S", rot: "👀 Spyware" }, { id: "A", rot: "📢 Adware" }],
        itens: [{ t: "Propagandas aparecem sem parar no celular", c: "A" }, { t: "Um “jogo grátis” instalou um programa escondido", c: "T" },
          { t: "Alguém descobriu o que a Yara digitava", c: "S" }, { t: "Passou sozinho de computador em computador da rede", c: "W" }, { t: "Se espalhou quando abriram o arquivo infectado", c: "V" }],
        explicacao: "Propaganda = adware; disfarce = cavalo de Troia; espião = spyware; sozinho pela rede = worm; ao abrir o arquivo = vírus." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Investigue: o que deixou o celular assim?",
        perguntas: [
          { p: "Depois de instalar um papel de parede “grátis” fora da loja, o celular encheu de anúncios. O provável culpado:", opcoes: ["Um adware que veio escondido (cavalo de Troia)", "A bateria fraca", "A tela suja"], certo: 0 },
          { p: "O que fazer primeiro?", opcoes: ["Desinstalar o aplicativo suspeito e passar o antivírus", "Comprar outro celular", "Mandar o aplicativo para os amigos"], certo: 0 }],
        explicacao: "O “grátis” trouxe um adware disfarçado; desinstale e passe o antivírus." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras dos malwares",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["MALWARE", "VIRUS", "WORM", "SPYWARE", "ANTIVIRUS"],
        pistas: ["Programa feito para prejudicar", "Gruda em arquivos (sem acento)", "Se espalha sozinho", "Espiona o que você digita", "Procura e bloqueia malwares (sem acento)"], tam: 11,
        explicacao: "Malware, vírus, worm, spyware e antivírus." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "só se espalha quando alguém abre o arquivo", opcoes: ["só se espalha quando alguém abre o arquivo", "se espalha sozinho pela rede"], certo: "se espalha sozinho pela rede" }, why: "Quem precisa do arquivo aberto é o vírus." },
      { v: true, why: "Como o presente da lenda." },
      { v: true, why: "Atualizações fecham as falhas." },
      { v: false, corrigir: { trecho: "é tão seguro quanto", opcoes: ["é tão seguro quanto", "é menos seguro que"], certo: "é menos seguro que" }, why: "A loja oficial verifica os aplicativos." }
    ]
  },

  /* ============ MISSÃO 2 — Engenharia social, força bruta e DDoS ============ */
  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual é o ataque?",
        robo: BIT("🔎 As perguntas", [["Alguém <b>engana a pessoa</b>? Engenharia social.", "engana → engenharia social"], ["Um programa <b>testa todas as senhas</b>? Força bruta. <b>Milhares de acessos</b> derrubam o site? DDoS.", "testa senhas → força bruta · acessos → DDoS", true]]),
        colunaItem: "Situação", colunaResp: "Ataque",
        categorias: [{ id: "E", rot: "🎭 Engenharia social" }, { id: "F", rot: "🔢 Força bruta" }, { id: "D", rot: "🌊 DDoS" }],
        itens: [{ t: "“Oi, mãe, troquei de número, me manda um Pix”", c: "E" }, { t: "Um programa tenta 0000, 0001, 0002… no celular", c: "F" },
          { t: "Milhares de computadores acessam o site da loja ao mesmo tempo e ele cai", c: "D" }, { t: "Alguém liga “do banco” e pede o código do SMS", c: "E" }],
        explicacao: "Enganar a pessoa = engenharia social; testar todas as senhas = força bruta; milhares de acessos para derrubar = DDoS." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Quais são sinais de golpe nesta mensagem?",
        robo: BIT("📩 Outra mensagem", [["“Parabéns! Você ganhou um celular! Pague só o frete HOJE.” Tem <b>prêmio fácil</b>? Sim.", "✔ prêmio fácil"], ["Tem <b>pressa</b>? Sim: “HOJE”.", "✔ pressa", true]]),
        enunciado: "<p>“<strong>URGENTE!</strong> Sua conta da escola será bloqueada em 1 hora. Mande a sua senha e o código que chegou no celular para este número: (00) 0000-0000.”</p><p>Marque <strong>só</strong> os sinais de golpe.</p>",
        opcoes: [{ t: "Pressa (“urgente”, “em 1 hora”)", certo: true }, { t: "Pede a senha", certo: true }, { t: "Pede o código que chegou no celular", certo: true }, { t: "Número estranho", certo: true },
          { t: "Fala da escola", certo: false, why: "Falar da escola não prova nada: o golpista usa nomes conhecidos." }],
        explicacao: "Pressa, pedido de senha e de código e número estranho são sinais de golpe." },
      { tipo: "tabela", titulo: "Quantas combinações tem a senha?",
        enunciado: "<p>Com só números, cada posição tem 10 opções (0 a 9). Uma senha de 4 números vai de 0000 a 9999.</p><p><strong>Como calcular:</strong> multiplique as opções de cada posição: 10 × 10 × 10 × 10. Para o tempo, divida o total pela quantidade testada por segundo.</p>",
        dicas: ["Releia o 💡 Para começar: “Contra a força bruta”."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantas combinações tem uma senha de 4 números?", { r: "10000", tipo: "num", dica: "De 0000 a 9999." }],
          ["Um programa testa 100 senhas por segundo. Em quantos segundos testa todas?", { r: "100", tipo: "num", dica: "10.000 ÷ 100." }]],
        explicacao: "10.000 combinações; a 100 por segundo, 10.000 ÷ 100 = 100 segundos: menos de 2 minutos!" },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Phishing", b: "Mensagem ou site falso que serve de isca" }, { a: "Força bruta", b: "Tentar todas as senhas até acertar" }, { a: "DDoS", b: "Milhares de acessos para derrubar um site" }, { a: "Golpe", b: "Enganar alguém para tirar vantagem" }],
        explicacao: "Phishing = isca; força bruta = todas as senhas; DDoS = derrubar; golpe = enganar." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Caixa de entrada: golpe ou normal?",
        enunciado: "<p>Para cada mensagem, decida. Lembre os sinais: pressa, prêmio, pedido de senha, código ou dinheiro.</p>",
        app: "📧 E-mail", botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "N", rot: "✅ Normal" }],
        itens: [{ de: "Banco", t: "Sua conta será bloqueada! Clique aqui e digite a senha.", c: "G", why: "Banco não pede senha por mensagem." },
          { de: "Professor", t: "A prova é na quinta. Revisem a Missão 3.", c: "N" },
          { de: "Loja", t: "Você ganhou um prêmio! Pague só a taxa hoje.", c: "G", why: "Prêmio fácil e pressa." },
          { de: "Tia Ana", t: "Chego aí no domingo para o almoço.", c: "N" }],
        okMsg: "Você reconhece um golpe de longe! 🎣",
        explicacao: "Pedido de senha, prêmio e pressa = golpe; avisos sem pedido de dados = normal." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Caí num golpe: o que fazer, em ordem?",
        enunciado: "<p>Coloque as atitudes na ordem certa. A primeira é parar de responder ao golpista.</p>",
        itens: ["Parar de responder ao golpista", "Trocar a senha da conta", "Ativar a verificação em duas etapas", "Avisar um adulto ou o responsável", "Avisar os contatos para não caírem também"],
        explicacao: "Parar de responder → trocar a senha → ativar duas etapas → avisar um adulto → avisar os contatos." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "pode pedir", opcoes: ["pode pedir", "nunca pede"], certo: "nunca pede" }, why: "Banco nunca pede senha por mensagem." },
      { v: true, why: "De 0000 a 9999." },
      { v: false, corrigir: { trecho: "um computador só", opcoes: ["um computador só", "milhares de computadores"], certo: "milhares de computadores" }, why: "D de distribuído." },
      { v: true, why: "São os sinais clássicos." }
    ]
  },

  /* ============ MISSÃO 3 — Cifra de César ============ */
  m3: {
    pratica: [
      { tipo: "cesar", titulo: "Mão na massa: cifre e decifre com a chave 3",
        robo: BIT("🔐 Outra palavra: LUA", [["L anda 3 casas: M, N, <b>O</b>.", "L → O"], ["U → <b>X</b>; A → <b>D</b>. LUA cifrada é <b>OXD</b>.", "LUA → OXD ✔", true]]),
        chaveInicial: 3,
        enunciado: "<p>Use a tira: para <strong>cifrar</strong>, troque a letra de cima pela de baixo; para <strong>decifrar</strong>, faça o caminho inverso.</p>",
        tarefas: [{ tipo: "cifrar", claro: "SOL", cifrado: "VRO" }, { tipo: "decifrar", claro: "ESCOLA", cifrado: "HVFROD" }],
        dicas: ["S → V, O → R, L → O.", "Para decifrar, volte 3 casas: H → E, V → S…"],
        explicacao: "SOL → VRO · HVFROD → ESCOLA." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Complete a tabela da chave 3",
        robo: BIT("🔤 Com a chave 2", [["Com a chave 2, A anda 2 casas: B, <b>C</b>.", "A → C"], ["E o Z? Volta ao começo: A, <b>B</b>.", "Z → B ✔", true]]),
        enunciado: "<p>Com a <strong>chave 3</strong>, cada letra anda 3 casas. Depois do Z, volta para o A.</p>",
        dicas: ["Releia a tabela da chave 3 no 💡 Para começar."],
        colunas: ["Letra normal", "Letra cifrada"],
        linhas: [["B", { r: "E" }], ["M", { r: "P" }], ["X", { r: "A" }], ["Z", { r: "C" }]],
        explicacao: "B → E; M → P; X → A; Z → C." },
      { tipo: "cesar", titulo: "Decifre a mensagem do colega (chave 3)",
        chaveInicial: 3,
        enunciado: "<p>Decifre: cada letra <strong>volta</strong> 3 casas.</p>",
        dicas: ["F → C, R → O…"],
        tarefas: [{ tipo: "decifrar", claro: "CODIGO", cifrado: "FRGLJR" }],
        explicacao: "FRGLJR → CODIGO." },
      { tipo: "escolha", titulo: "Criptografia e César",
        perguntas: [
          { p: "Na cifra de César, a chave é:", opcoes: ["O número de casas que cada letra anda", "O nome do site", "Uma letra qualquer"], certo: 0 },
          { p: "Quantas chaves úteis a cifra de César tem?", opcoes: ["25", "Milhões", "Só 1"], certo: 0, why: "Andar 26 casas volta à mesma letra." },
          { p: "Transformar a mensagem secreta de volta na normal é:", opcoes: ["Decifrar", "Cifrar", "Apagar"], certo: 0 }],
        explicacao: "Chave = número de casas; 25 chaves úteis; decifrar = voltar ao texto claro." }
    ],
    desafio: [
      { tipo: "cesar", titulo: "🟡 Força bruta: descubra a chave de VHJXUR",
        chaveInicial: 1,
        enunciado: "<p>Digite <strong>VHJXUR</strong> no campo “Experimente” e mude a chave com − e + até o <strong>Decifrado</strong> virar uma palavra.</p>",
        dicas: ["Teste as chaves uma por uma: é a força bruta.", "A palavra tem a ver com esta missão."],
        tarefas: [{ tipo: "chave", cifrado: "VHJXUR", chave: 3, palavra: "SEGURO" }],
        explicacao: "Com a chave 3, VHJXUR vira SEGURO." }
    ],
    turbo: [
      { tipo: "cesar_livre", titulo: "🔴 Cifre a sua própria frase (chave 3)",
        enunciado: "<p>Escreva uma frase de pelo menos 3 palavras e cifre com a chave 3 (o espaço fica igual).</p>",
        dicas: ["Troque letra por letra, usando a tira."],
        chave: 3, minPalavras: 3,
        explicacao: "Cada letra andou 3 casas; os espaços ficaram iguais." }
    ],
    vf: [
      { v: true, why: "O número de casas é a chave." },
      { v: true, why: "A, B, C, D." },
      { v: false, corrigir: { trecho: "andam mais casas para a frente", opcoes: ["andam mais casas para a frente", "voltam as casas"], certo: "voltam as casas" }, why: "Decifrar é o caminho inverso." },
      { v: true, why: "26 casas volta à mesma letra." },
      { v: false, corrigir: { trecho: "é forte demais para ser quebrada", opcoes: ["é forte demais para ser quebrada", "é fácil de quebrar"], certo: "é fácil de quebrar" }, why: "Só 25 chaves para testar." }
    ]
  },

  /* ============ MISSÃO 4 — Criptografia hoje: chaves e HTTPS ============ */
  m4: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o cadeado aberto, passo a passo",
        robo: BIT("📦 Outra ideia: a caixa de correio", [["Qualquer um pode <b>pôr</b> uma carta pela fresta.", "colocar = todos"], ["Só o dono, com a chave, <b>abre</b> a caixa.", "abrir = só o dono ✔", true]]),
        enunciado: "<p>Clique nos passos <strong>na ordem</strong>. A resposta está na tabela do <strong>cadeado aberto</strong>.</p>",
        etapas: [
          { ic: "🔓", t: "O site distribui cadeados abertos (chave pública)" },
          { ic: "📦", t: "Você fecha a caixa com o cadeado do site" },
          { ic: "🌐", t: "A caixa viaja pela internet: ninguém abre no caminho" },
          { ic: "🗝️", t: "Só o site, com a chave privada, abre o cadeado" }],
        okMsg: "A mensagem chegou protegida! 🔐",
        explicacao: "Cadeado aberto (pública) → fechar → viajar → abrir com a chave privada." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Chave pública ou chave privada?",
        robo: BIT("🔎 A pergunta", [["Todo mundo pode ter? É a <b>pública</b>.", "todos → pública"], ["É secreta, só do dono? É a <b>privada</b>.", "secreta → privada", true]]),
        colunaItem: "Característica", colunaResp: "É a chave…",
        categorias: [{ id: "U", rot: "🔓 Pública" }, { id: "R", rot: "🗝️ Privada" }],
        itens: [{ t: "Todo mundo pode ter", c: "U" }, { t: "Serve para fechar (cifrar)", c: "U" }, { t: "É secreta, só do dono", c: "R" }, { t: "Serve para abrir (decifrar)", c: "R" }],
        explicacao: "Pública: todos têm e serve para fechar. Privada: secreta e serve para abrir." },
      { tipo: "classificar", modo: "tabela", titulo: "O endereço é seguro?",
        colunaItem: "Endereço", colunaResp: "Os dados viajam…",
        categorias: [{ id: "C", rot: "🔒 Cifrados" }, { id: "S", rot: "⚠️ Sem criptografia" }],
        itens: [{ t: "https://portal.professorwell.com.br", c: "C" }, { t: "http://site-antigo.exemplo", c: "S" }, { t: "https://loja.exemplo (com o 🔒)", c: "C" }],
        explicacao: "https e cadeado = cifrado; http sem S = sem criptografia." },
      { tipo: "escolha", titulo: "Criptografia de hoje",
        perguntas: [
          { p: "O S do HTTPS quer dizer:", opcoes: ["Secure (seguro)", "Site", "Super"], certo: 0 },
          { p: "Quem intercepta uma mensagem cifrada no caminho vê:", opcoes: ["Uma bagunça de letras", "A mensagem inteira", "A senha escrita"], certo: 0 },
          { p: "Na criptografia de ponta a ponta, leem a mensagem:", opcoes: ["Só quem manda e quem recebe", "A empresa do aplicativo", "Qualquer pessoa"], certo: 0 }],
        explicacao: "S = secure; interceptada = bagunça de letras; ponta a ponta = só os dois." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O cadeado garante que o site é honesto?",
        perguntas: [
          { p: "Um site com 🔒 e o nome “banco-premio-gratis.exemplo” pede a sua senha. O cadeado prova que ele é do banco?", opcoes: ["Não: o cadeado só mostra que a conversa é cifrada", "Sim: todo site com cadeado é honesto", "Sim, se tiver cores bonitas"], certo: 0 },
          { p: "Além do cadeado, o que conferir?", opcoes: ["O nome do site, letra por letra", "A cor do botão", "O tamanho da letra"], certo: 0 }],
        explicacao: "Site falso também pode ter cadeado: confira sempre o nome." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a criptografia de hoje",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "A chave **pública** é como um cadeado aberto: qualquer um fecha. Só a chave **privada**, que é secreta, abre. O **HTTPS** mostra que a conversa com o site é cifrada, mas não prova que o site é **honesto**. Na criptografia de ponta a **ponta**, só quem manda e quem recebe leem.",
        explicacao: "Pública, privada, HTTPS, honesto e ponta a ponta." }
    ],
    vf: [
      { v: true, why: "É para isso que serve o HTTPS." },
      { v: false, corrigir: { trecho: "pode ser distribuída para todo mundo", opcoes: ["pode ser distribuída para todo mundo", "é secreta, só do dono"], certo: "é secreta, só do dono" }, why: "Quem é distribuída é a pública." },
      { v: false, corrigir: { trecho: "garante que o site é honesto", opcoes: ["garante que o site é honesto", "mostra que a conversa é cifrada"], certo: "mostra que a conversa é cifrada" }, why: "Site falso também pode ter cadeado." },
      { v: true, why: "Sem a chave, não dá para ler." },
      { v: true, why: "Fechar é com a pública." }
    ]
  },

  /* ============ MISSÃO 5 — Senhas e armazenamento seguro ============ */
  m5: {
    pratica: [
      { tipo: "medidor_senha", titulo: "Mão na massa: laboratório de senhas",
        robo: BIT("🔐 Montando uma senha de mentira", [["Começo com palavras que eu lembro: <b>Gato Azul Pula</b>.", "GatoAzulPula"], ["Misturo número e símbolo: <b>Gato!Azul7Pula</b> → muito forte.", "Gato!Azul7Pula ✔", true]]),
        enunciado: "<p>Digite uma senha <strong>inventada</strong> e veja o medidor mudar. Complete todos os itens da lista para chegar em <strong>Muito forte</strong>.</p>",
        explicacao: "Senha forte: comprida, com maiúscula, minúscula, número e símbolo, e sem sequências fáceis. E nunca conte para ninguém!" }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Senha forte ou fraca?",
        robo: BIT("🔎 As perguntas", [["É <b>comprida</b>? Tem <b>mistura</b>? Não tem nada <b>pessoal</b>? Então é forte.", "Lua#Verde42Mar → forte"], ["Tem data de nascimento ou só números? Fraca.", "lara2012 → fraca", true]]),
        colunaItem: "Senha (de mentira)", colunaResp: "É…",
        categorias: [{ id: "F", rot: "💪 Forte" }, { id: "R", rot: "⚠️ Fraca" }],
        itens: [{ t: "123456", c: "R", why: "Curta e sequência." }, { t: "davi2011", c: "R", why: "Nome e ano." }, { t: "Gato!Azul7Pula", c: "F" }, { t: "Rio#Tocantins55Peixe", c: "F" }, { t: "senha", c: "R" }],
        explicacao: "Forte = longa, misturada e sem nada pessoal." },
      { tipo: "ligar", titulo: "Cada proteção e o que ela faz",
        pares: [{ a: "Hash", b: "Resumo embaralhado que não dá para desfazer" }, { a: "Verificação em duas etapas", b: "Código no celular além da senha" },
          { a: "Gerenciador de senhas", b: "Guarda as senhas com segurança" }, { a: "Frase-senha", b: "Várias palavras misturadas, longa e fácil de lembrar" }],
        explicacao: "Hash = resumo; duas etapas = código; gerenciador = guarda; frase-senha = palavras misturadas." },
      { tipo: "escolha", titulo: "Como o site guarda a senha?",
        perguntas: [
          { p: "Um site sério guarda:", opcoes: ["O hash da senha", "A senha escrita, como você digitou", "A senha num papel"], certo: 0 },
          { p: "O site da sua conta de jogo avisou de um vazamento. Você:", opcoes: ["Troca a senha dele e de onde ela se repetia", "Não faz nada", "Publica a senha para todos verem"], certo: 0 }],
        explicacao: "O site guarda o hash; vazamento = trocar a senha em todo lugar onde ela se repetia." }
    ],
    desafio: [
      { tipo: "senha", titulo: "🟡 Invente 2 senhas fortes (que você NÃO vai usar de verdade)", n: 2,
        enunciado: "<p>Use a dica da frase-senha: palavras misturadas com número e símbolo.</p>",
        dicas: ["Exemplo do jeito: Gato!Azul7Pula. Invente outras, sem nada pessoal."],
        explicacao: "Senha forte é longa e mistura letras maiúsculas e minúsculas, números e símbolos. Nada de 123456, nome ou data de nascimento." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 O que o site faz quando você entra, em ordem",
        enunciado: "<p>Coloque em ordem. A resposta está no texto “Como um site sério guarda a sua senha”.</p>",
        itens: ["Você digita a senha", "O site faz a conta do hash com o que você digitou", "O site compara com o hash guardado", "Se os resumos forem iguais, você entra"],
        explicacao: "Digitar → calcular o hash → comparar com o guardado → entrar se forem iguais." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "é uma senha forte", opcoes: ["é uma senha forte", "é uma senha fraca"], certo: "é uma senha fraca" }, why: "Nada pessoal na senha." },
      { v: true, why: "Guarda o resumo." },
      { v: false, corrigir: { trecho: "pode ser desfeito facilmente", opcoes: ["pode ser desfeito facilmente", "não pode ser desfeito"], certo: "não pode ser desfeito" }, why: "É uma conta de mão única." },
      { v: true, why: "Senha + código." },
      { v: true, why: "Um vazamento abre todas as contas." }
    ]
  },

  /* ============ MISSÃO 6 — Projeto: programa por eventos ============ */
  m6: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: QUANDO… FAÇA…",
        robo: BIT("🎮 Outro exemplo: o jogo", [["QUANDO apertar a seta para cima…", "evento: tecla"], ["…FAÇA o personagem pular.", "ação: pular ✔", true]]),
        enunciado: "<p>Ligue cada <strong>evento</strong> à sua <strong>ação</strong>. A resposta está na tabela Evento · Ação.</p>",
        pares: [{ a: "Clicar no botão “Entrar”", b: "Conferir a senha" }, { a: "Errar a senha 3 vezes", b: "Bloquear a conta por 5 minutos" },
          { a: "O sensor perceber movimento à noite", b: "Tocar o alarme e avisar no celular" }, { a: "O relógio marcar 7h", b: "Desligar o alarme da porta" }],
        explicacao: "Cada evento dispara uma ação: clicar → conferir; errar 3 vezes → bloquear; movimento → alarme; 7h → desligar." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "É evento ou ação?",
        robo: BIT("🔎 A pergunta", [["É algo que <b>acontece</b> e o programa percebe? <b>Evento</b>.", "acontece → evento"], ["É o que o programa <b>faz</b> em resposta? <b>Ação</b>.", "faz → ação", true]]),
        colunaItem: "Item", colunaResp: "É…",
        categorias: [{ id: "E", rot: "⚡ Evento" }, { id: "A", rot: "🎬 Ação" }],
        itens: [{ t: "A porta abre", c: "E" }, { t: "Tocar a sirene", c: "A" }, { t: "Apertar uma tecla", c: "E" }, { t: "Mandar aviso ao celular", c: "A" }, { t: "O sensor percebe movimento", c: "E" }],
        explicacao: "Evento = o que acontece; ação = o que o programa faz." },
      { tipo: "ordenar", titulo: "As etapas do projeto, em ordem",
        itens: ["Listar os eventos", "Decidir a ação de cada um", "Escrever as regras “quando… faça…”", "Testar cada regra", "Apresentar"],
        explicacao: "Listar eventos → decidir ações → escrever regras → testar → apresentar." },
      { tipo: "escolha", titulo: "Programa por eventos",
        perguntas: [
          { p: "Num programa por eventos, a ação acontece:", opcoes: ["Depois que o evento acontece", "Antes do evento", "Nunca"], certo: 0 },
          { p: "O celular vibra quando chega mensagem. O evento é:", opcoes: ["Chegar a mensagem", "Vibrar", "A bateria"], certo: 0 }],
        explicacao: "A ação vem depois do evento; chegar a mensagem é o evento, vibrar é a ação." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Complete as regras do alarme da sala",
        enunciado: "<p>Use a tabela do <strong>projeto do alarme</strong> no 💡 Para começar.</p>",
        dicas: ["Releia a tabela Regra · Evento · Ação."],
        colunas: ["Evento", "Ação"],
        linhas: [["A porta abre depois das 18h", { op: ["Tocar a sirene", "Desligar a sirene", "Mandar aviso ao celular do professor"], r: "Tocar a sirene" }],
          ["Alguém digita o código certo", { op: ["Tocar a sirene", "Desligar a sirene", "Mandar aviso ao celular do professor"], r: "Desligar a sirene" }],
          ["O código é errado 3 vezes", { op: ["Tocar a sirene", "Desligar a sirene", "Mandar aviso ao celular do professor"], r: "Mandar aviso ao celular do professor" }]],
        explicacao: "Regra 1: tocar a sirene; regra 2: desligar; regra 3: avisar o professor." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "🔴 Teste as regras: o que o alarme faz?",
        perguntas: [
          { p: "São 20h. A porta abre. O alarme:", opcoes: ["Toca a sirene", "Fica quieto", "Desliga"], certo: 0, why: "Regra 1: depois das 18h." },
          { p: "A sirene está tocando e o professor digita o código certo. O alarme:", opcoes: ["Desliga a sirene", "Toca mais alto", "Bloqueia o professor"], certo: 0, why: "Regra 2." },
          { p: "Alguém erra o código 3 vezes. O alarme:", opcoes: ["Manda aviso ao celular do professor", "Desliga a sirene", "Não faz nada"], certo: 0, why: "Regra 3." }],
        explicacao: "Testar é conferir cada regra: 1) toca; 2) desliga; 3) avisa o professor." }
    ],
    vf: [
      { v: true, why: "É a definição de evento." },
      { v: true, why: "O programa percebe o clique." },
      { v: false, corrigir: { trecho: "antes do evento", opcoes: ["antes do evento", "depois do evento"], certo: "depois do evento" }, why: "Quando acontecer, faça." },
      { v: true, why: "O sensor percebe e gera o evento." },
      { v: true, why: "Listar, decidir, escrever, testar e apresentar." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Ransomware e backup ============ */
  m7: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: monte a regra 3-2-1",
        robo: BIT("📚 Outro exemplo: as fotos da família", [["<b>3</b> cópias: o original no celular + 2 cópias.", "3 cópias"], ["<b>2</b> tipos: celular e HD externo. <b>1</b> fora de casa: a nuvem.", "2 tipos · 1 fora ✔", true]]),
        enunciado: "<p>Complete a regra do backup. A resposta está na tabela <strong>A regra 3-2-1</strong>.</p>",
        dicas: ["Releia a tabela A regra 3-2-1."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantas cópias dos arquivos importantes?", { r: "3", tipo: "num" }], ["Em quantos tipos diferentes de armazenamento?", { r: "2", tipo: "num" }], ["Quantas cópias fora de casa?", { r: "1", tipo: "num" }]],
        explicacao: "3 cópias, 2 tipos, 1 fora do local." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que protege contra o ransomware?",
        robo: BIT("🔎 A pergunta", [["Isso deixa uma <b>cópia</b> que o ransomware não alcança? Então protege.", "cópia segura → protege"], ["Isso depende do criminoso cumprir a palavra? Não protege.", "depende do criminoso → não", true]]),
        enunciado: "<p>Marque <strong>só</strong> o que protege.</p>",
        opcoes: [{ t: "Fazer backup seguindo a regra 3-2-1", certo: true }, { t: "Desligar o HD externo depois do backup", certo: true }, { t: "Ter uma cópia na nuvem", certo: true },
          { t: "Pagar o resgate", certo: false, why: "Não é garantia: o criminoso pode não devolver." }, { t: "Deixar o HD de backup sempre ligado", certo: false, why: "O ransomware pode cifrar a cópia também." }],
        explicacao: "Backup 3-2-1, HD desligado e cópia na nuvem protegem; pagar e deixar o HD ligado, não." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Ransomware", b: "Cifra os arquivos e pede resgate" }, { a: "Resgate", b: "O dinheiro que o criminoso pede" }, { a: "Backup", b: "Cópia de segurança" }, { a: "HD externo", b: "Disco ligado pelo cabo USB" }],
        explicacao: "Ransomware, resgate, backup e HD externo." },
      { tipo: "escolha", titulo: "Ransomware",
        perguntas: [
          { p: "O ransomware “sequestra” os arquivos:", opcoes: ["Cifrando todos eles", "Apagando a internet", "Quebrando o monitor"], certo: 0 },
          { p: "Especialistas em segurança recomendam:", opcoes: ["Não pagar e ter backup", "Pagar logo", "Desligar a luz da escola"], certo: 0 }],
        explicacao: "Ele cifra os arquivos; o certo é não pagar e ter backup." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "🟡 A sala de informática foi atacada: em que ordem agir?",
        enunciado: "<p>Os arquivos de um computador foram cifrados. Coloque as ações em ordem.</p>",
        itens: ["Tirar o computador da rede", "Avisar o responsável", "Apagar o sistema infectado", "Recuperar os arquivos do backup", "Conferir se tudo voltou"],
        explicacao: "Isolar (tirar da rede) → avisar → apagar o sistema → recuperar do backup → conferir." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o ransomware",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O **ransomware** cifra os arquivos e pede **resgate**. Pagar não garante nada. A proteção é o **backup**, seguindo a regra 3-2-1: três cópias, dois tipos de armazenamento e uma cópia **fora** do local. O HD de backup fica **desligado** do computador depois da cópia.",
        explicacao: "Ransomware, resgate, backup, fora e desligado." }
    ],
    vf: [
      { v: true, why: "É o que ele faz." },
      { v: false, corrigir: { trecho: "garante que os arquivos voltam", opcoes: ["garante que os arquivos voltam", "não garante que os arquivos voltam"], certo: "não garante que os arquivos voltam" }, why: "O criminoso pode não devolver." },
      { v: true, why: "É o 1 da regra." },
      { v: false, corrigir: { trecho: "deve ficar sempre ligado", opcoes: ["deve ficar sempre ligado", "deve ficar desligado depois do backup"], certo: "deve ficar desligado depois do backup" }, why: "Ligado, ele pode ser cifrado também." },
      { v: true, why: "Recupera da cópia." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Esteganografia ============ */
  m8: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: ache a palavra escondida",
        robo: BIT("📝 Outro bilhete", [["“<b>M</b>orango é bom. <b>A</b>bacaxi também. <b>R</b>ecomendo.”", "M · A · R"], ["As primeiras letras formam <b>MAR</b>.", "MAR ✔", true]]),
        enunciado: "<p>Leia as <strong>primeiras letras</strong> de cada linha, de cima para baixo.</p><p>Bilhete 1:<br><strong>R</strong>ecebi o livro.<br><strong>E</strong>stá ótimo.<br><strong>D</strong>evolvo amanhã.<br><strong>E</strong>nvio um abraço.</p><p>Bilhete 2:<br><strong>C</strong>hegamos bem.<br><strong>H</strong>oje faz calor.<br><strong>A</strong>té breve!<br><strong>V</strong>olto domingo.<br><strong>E</strong>screvo depois.</p>",
        dicas: ["Releia o Exemplo 1 do 💡 Para começar: o bilhete do SOL."],
        colunas: ["Bilhete", "Palavra escondida"],
        linhas: [["Bilhete 1", { r: "REDE", tipo: "letras" }], ["Bilhete 2", { r: "CHAVE", tipo: "letras" }]],
        explicacao: "R-E-D-E = REDE; C-H-A-V-E = CHAVE." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Criptografia ou esteganografia?",
        robo: BIT("🔎 A pergunta", [["Dá para <b>ver</b> que existe um segredo, mas não ler? <b>Criptografia</b>.", "vê, mas não lê → criptografia"], ["O segredo está <b>escondido</b> e ninguém percebe? <b>Esteganografia</b>.", "escondido → esteganografia", true]]),
        colunaItem: "Situação", colunaResp: "É…",
        categorias: [{ id: "C", rot: "🔐 Criptografia" }, { id: "E", rot: "🕵️ Esteganografia" }],
        itens: [{ t: "A mensagem “XOD”, embaralhada", c: "C" }, { t: "Um bilhete normal com uma palavra nas primeiras letras", c: "E" },
          { t: "Letras escondidas nos pixels de uma foto", c: "E" }, { t: "A conversa cifrada do aplicativo de mensagens", c: "C" }],
        explicacao: "Embaralhada e visível = criptografia; escondida sem ninguém perceber = esteganografia." },
      { tipo: "memoria", titulo: "Jogo da memória da esteganografia",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Esteganografia", b: "Escrita escondida" }, { a: "Acróstico", b: "Primeiras letras formam uma palavra" }, { a: "Pixel", b: "Pontinho da imagem" }],
        explicacao: "Esteganografia = escrita escondida; acróstico = primeiras letras; pixel = pontinho." },
      { tipo: "escolha", titulo: "Escrita escondida",
        perguntas: [
          { p: "A palavra esteganografia vem do grego e quer dizer:", opcoes: ["Escrita escondida", "Escrita rápida", "Escrita bonita"], certo: 0 },
          { p: "As marcas d’água invisíveis em filmes servem para:", opcoes: ["Mostrar quem é o dono", "Deixar o filme colorido", "Deixar o filme mais curto"], certo: 0 }],
        explicacao: "Escrita escondida; a marca d’água mostra o dono." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Agora a palavra está na ÚLTIMA letra de cada linha",
        enunciado: "<p>Agora o segredo está no <strong>fim</strong>. Leia a <strong>última letra</strong> de cada linha, de cima para baixo:</p><p>Ontem andei de tre<strong>m</strong>.<br>Comi bolo de banan<strong>a</strong>.<br>Voltei antes do janta<strong>r</strong>.</p>",
        dicas: ["Olhe só a letra em negrito do fim de cada linha."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Que palavra as últimas letras formam?", { r: "MAR", tipo: "letras", ph: "3 letras" }]],
        explicacao: "trem → M, banana → A, jantar → R: a palavra escondida é MAR." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória da segurança",
        enunciado: "<p>Vire duas cartas e ache os pares: um termo de cada missão do bimestre.</p>", dicas: ["Releia os 📖 O que significa? das missões."],
        pares: [{ a: "Malware", b: "Programa do mal" }, { a: "Phishing", b: "Isca falsa" }, { a: "Chave", b: "Abre a mensagem secreta" }, { a: "Hash", b: "Resumo da senha" }, { a: "Backup", b: "Cópia de segurança" }],
        explicacao: "Um termo de cada missão: malware, phishing, chave, hash e backup." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Do grego." },
      { v: false, corrigir: { trecho: "ninguém percebe que existe uma mensagem", opcoes: ["ninguém percebe que existe uma mensagem", "dá para ver que existe uma mensagem, mas não ler"], certo: "dá para ver que existe uma mensagem, mas não ler" }, why: "Quem esconde a existência é a esteganografia." },
      { v: true, why: "O olho não percebe a diferença." },
      { v: true, why: "S-O-L." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Malwares", enunciado: "<p>Ligue cada malware ao que ele faz.</p>", pares: [{ a: "Worm", b: "Se espalha sozinho" }, { a: "Cavalo de Troia", b: "Finge ser bom" }, { a: "Spyware", b: "Espiona" }], explicacao: "Worm, cavalo de Troia e spyware." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", de: "m2", titulo: "M2 · Qual ataque?", enunciado: "<p>Separe cada caso.</p>", categorias: [{ id: "E", rot: "Engenharia social" }, { id: "F", rot: "Força bruta" }, { id: "D", rot: "DDoS" }],
        itens: [{ t: "Falso parente pede Pix", c: "E" }, { t: "Testa 0000 a 9999", c: "F" }, { t: "Milhares de acessos derrubam o site", c: "D" }], explicacao: "Enganar, testar senhas e derrubar." },
      { tipo: "relembre", de: "m3" },
      { tipo: "cesar", de: "m3", titulo: "M3 · Decifre (chave 3)", chaveInicial: 3, enunciado: "<p>Decifre: cada letra volta 3 casas.</p>", tarefas: [{ tipo: "decifrar", claro: "AULA", cifrado: "DXOD" }], explicacao: "DXOD → AULA." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Chaves", perguntas: [{ p: "Quem abre o cadeado é a chave:", opcoes: ["Privada", "Pública"], certo: 0 }, { p: "O 🔒 do HTTPS prova que o site é honesto?", opcoes: ["Não", "Sim"], certo: 0 }], explicacao: "Privada abre; o cadeado não prova honestidade." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Senhas", enunciado: "<p>Forte ou fraca?</p>", categorias: [{ id: "F", rot: "Forte" }, { id: "R", rot: "Fraca" }], itens: [{ t: "Lua#Verde42Mar", c: "F" }, { t: "bia2010", c: "R" }], explicacao: "Longa e misturada = forte." },
      { tipo: "relembre", de: "m6" },
      { tipo: "ordenar", de: "m6", titulo: "M6 · O projeto", enunciado: "<p>Coloque as etapas em ordem.</p>", itens: ["Listar os eventos", "Decidir as ações", "Escrever as regras", "Testar"], explicacao: "Listar, decidir, escrever, testar." },
      { tipo: "relembre", de: "m7" },
      { tipo: "tabela", de: "m7", titulo: "M7 · Regra 3-2-1", dicas: ["Releia a tabela A regra 3-2-1."], colunas: ["Pergunta", "Resposta"], linhas: [["Quantas cópias?", { r: "3", tipo: "num" }], ["Quantas fora do local?", { r: "1", tipo: "num" }]], explicacao: "3 cópias, 1 fora." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Escondida", perguntas: [{ p: "Esconder a mensagem sem ninguém perceber é:", opcoes: ["Esteganografia", "Criptografia"], certo: 0 }], explicacao: "Esteganografia." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: proteger ou arriscar?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "🛡️ Segurança", botoes: [{ id: "P", rot: "✅ Protege" }, { id: "R", rot: "🚩 Arrisca" }],
        itens: [{ de: "", t: "Atualizar o celular", c: "P" }, { de: "", t: "Mandar o código do SMS para quem pediu", c: "R" }, { de: "", t: "Senha Gato!Azul7Pula", c: "P" }, { de: "", t: "Pagar o resgate do ransomware", c: "R" }, { de: "", t: "Conferir o nome do site, além do 🔒", c: "P" }],
        okMsg: "Você está pronto para a prova! 🛡️",
        explicacao: "Atualizar, senha forte e conferir o nome protegem; passar código e pagar resgate arriscam." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["MALWARE", "PHISHING", "CHAVE", "HASH", "BACKUP", "EVENTO"],
        pistas: ["Programa feito para prejudicar", "Golpe da isca falsa", "Abre a mensagem secreta", "Resumo da senha", "Cópia de segurança", "Algo que acontece e o programa percebe"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-2bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria", "cesar"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Malwares", [{ p: "O malware que finge ser um programa bom é o:", opcoes: ["Cavalo de Troia", "Adware", "Worm"], certo: 0 }, { p: "As atualizações protegem porque:", opcoes: ["Fecham as falhas que os malwares usam", "Deixam a tela bonita", "Apagam as fotos"], certo: 0 }]), pega("m1"),
    Q("m2", "Ataques", [{ p: "O golpe com site ou mensagem falsa que serve de isca é o:", opcoes: ["Phishing", "DDoS", "Hash"], certo: 0 }, { p: "Uma senha de 4 números tem:", opcoes: ["10.000 combinações", "4 combinações", "100 combinações"], certo: 0 }]), pega("m2"),
    Q("m3", "Cifra de César", [{ p: "Com a chave 3, a letra C vira:", opcoes: ["F", "D", "Z"], certo: 0 }, { p: "A cifra de César é fácil de quebrar porque:", opcoes: ["Só tem 25 chaves", "É escrita à mão", "Não usa letras"], certo: 0 }]), pega("m3"),
    Q("m4", "Chaves e HTTPS", [{ p: "A chave que todos podem ter é a:", opcoes: ["Pública", "Privada", "Mestra"], certo: 0 }, { p: "Endereço com https e 🔒 quer dizer que os dados viajam:", opcoes: ["Cifrados", "Sem proteção", "Mais devagar"], certo: 0 }]), pega("m4"),
    Q("m5", "Senhas", [{ p: "Um site sério guarda a sua senha como:", opcoes: ["Hash", "Texto escrito", "Foto"], certo: 0 }, { p: "Qual destas é a senha mais forte?", opcoes: ["Rio#Tocantins55Peixe", "123456", "maria2010"], certo: 0 }]), pega("m5"),
    Q("m6", "Eventos", [{ p: "Clicar num botão é um exemplo de:", opcoes: ["Evento", "Ação", "Hash"], certo: 0 }, { p: "O celular vibra quando chega mensagem. Vibrar é a:", opcoes: ["Ação", "Evento", "Chave"], certo: 0 }]), pega("m6"),
    Q("m7", "Ransomware", [{ p: "Na regra 3-2-1, o 1 quer dizer:", opcoes: ["Uma cópia fora do local", "Um computador só", "Uma senha"], certo: 0 }, { p: "Contra o ransomware, o melhor é:", opcoes: ["Ter backup", "Pagar o resgate", "Desligar o antivírus"], certo: 0 }]), pega("m7"),
    Q("m8", "Esteganografia", [{ p: "O bilhete com uma palavra nas primeiras letras é um:", opcoes: ["Acróstico", "Hash", "Worm"], certo: 0 }, { p: "Na esteganografia, a mensagem fica:", opcoes: ["Escondida dentro de outra coisa", "Embaralhada à vista", "Apagada"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 2: 2º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-2bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why, de]) => ({ de: de || "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });
  const mem = (titulo, pares, expl) => ({ tipo: "memoria", titulo, enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>", pares: pares.map(([a, b]) => ({ a, b })), porRodada: 3, explicacao: expl });
  const sin = (titulo, enun, certos, errados, expl) => ({ tipo: "sinais", titulo, enunciado: `<p>${enun}</p>`, opcoes: [...certos.map(t => ({ t, certo: true })), ...errados.map(([t, why]) => ({ t, certo: false, why }))], explicacao: expl });
  const v = n => ({ v: n });

  /* ---------- M1 · malwares ---------- */
  A.m1.gancho = { html: "<p>📲 O celular da tia Nena começou a abrir <b>propagandas sozinho</b> e ficou lento, logo depois que ela baixou um “jogo grátis” de um site desconhecido.</p><p>🤔 O que entrou no celular dela? Por onde entrou? E como evitar?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 2º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Um programa que procura e bloqueia programas maliciosos é o…", ["Antivírus", "Navegador", "Roteador"], "É o <b>antivírus</b>."],
    ["O celular pede para atualizar. Aceitar a atualização…", ["Ajuda a proteger: fecha as “portas” que os malwares usam", "Deixa o celular sem proteção", "Apaga as fotos"], "As <b>atualizações</b> fecham as portas que os malwares usam."],
    ["O lugar mais seguro para baixar aplicativos é…", ["A loja oficial", "Um site desconhecido", "Um link de mensagem estranha"], "Baixar só da <b>loja oficial</b>."])];
  A.m1.aplicar = [
    msg("🛠️ Na vida real: que malware é esse?", "🛡️ Antivírus", [["V", "🦠 Vírus"], ["W", "🐛 Worm"], ["T", "🐴 Cavalo de Troia"], ["S", "👀 Spyware"], ["A", "📢 Adware"]],
      "O antivírus achou estes problemas nos celulares da família. Qual tipo de malware é cada um?",
      [["Um “jogo grátis” que escondia um programa malicioso dentro", "T", "Finge ser bom e esconde o malware: cavalo de Troia."], ["Propagandas abrindo sem parar na tela", "A", "Enche a tela de propagandas: adware."],
        ["Um programa que guardava tudo o que a pessoa digitava e mandava para o criminoso", "S", "Espiona: spyware."], ["Um malware que passou sozinho de computador em computador pela rede da empresa", "W", "Se espalha sozinho pela rede: worm."],
        ["Um malware que grudou nos arquivos e se espalhou quando eles foram abertos", "V", "Gruda em arquivos: vírus."]],
      "Detetive de malwares! 🛡️", "Vírus gruda em arquivos; worm anda sozinho pela rede; cavalo de Troia finge ser bom; spyware espiona; adware enche de propaganda."),
    VIDA(
      ["Antes de baixar um jogo, você deve conferir se ele é…", ["Da loja oficial", "Grátis", "Bonito"], "Confira se é da <b>loja oficial</b>."],
      ["Aparecem propagandas do nada no celular. Pode ser um…", ["Adware", "Antivírus", "Worm"], "Propaganda sem parar pode ser um <b>adware</b>."],
      ["Por onde um malware costuma entrar?", ["Por links de mensagens estranhas e arquivos de sites desconhecidos", "Pela tela limpa", "Pelo carregador original"], "Links estranhos, sites desconhecidos, aplicativos fora da loja e pen drives de outras pessoas."])
  ];
  mais("m1", "desafio",
    sin("🛡️ Marque as atitudes que protegem", "Marque só as atitudes que <b>protegem</b> contra malwares.",
      ["Manter o sistema e os aplicativos atualizados", "Usar antivírus", "Baixar aplicativos só da loja oficial"],
      [["Clicar em link de mensagem de número desconhecido", "É uma das portas de entrada."], ["Baixar o jogo pago “de graça” num site qualquer", "Pode ser um cavalo de Troia."], ["Usar o pen drive de um desconhecido", "Pode trazer malware."]],
      "Atualizar, usar antivírus e baixar da loja oficial fecham as portas dos malwares."));
  mais("m1", "turbo",
    mem("🧩 Jogo da memória dos malwares", [["🦠 Vírus", "Gruda em arquivos e se espalha quando são abertos"], ["🐛 Worm", "Anda sozinho pela rede"], ["🐴 Cavalo de Troia", "Finge ser um programa bom"],
      ["👀 Spyware", "Espiona o que você digita"], ["📢 Adware", "Enche a tela de propagandas"], ["Malware", "Malicious + software: programa do mal"]],
      "Cada malware tem o seu jeito de prejudicar."));

  /* ---------- M2 · engenharia social, força bruta e DDoS ---------- */
  A.m2.gancho = { html: "<p>💬 A mãe do Gui recebeu: “Oi, mãe, troquei de número. Me manda um Pix urgente? Depois te explico!”. Ela quase mandou… mas o Gui estava ao lado dela!</p><p>🤔 Como o golpista tentou parecer o filho? Que sinais mostravam que era golpe?</p>" };
  A.m2.aplicar = [
    msg("🛠️ Na vida real: golpe ou mensagem de verdade?", "💬 Mensagens do celular", [["G", "⚠️ É golpe"], ["O", "✅ Parece confiável"]],
      "Leia cada mensagem. Procure os sinais: pressa, prêmio fácil, pedido de código, senha ou dinheiro, número estranho, erros de português.",
      [["Oi, mãe, troquei de número, me manda um Pix urgente!", "G", "Pedido de dinheiro com pressa, de número novo: engenharia social.", "Número desconhecido"],
        ["Sua conta será bloqueada HOJE! Clique aqui e digite a sua senha", "G", "Pressa e pedido de senha: phishing.", "“Banco”"],
        ["Parabéns! Você ganhou um celular. Mande o código que chegou por SMS", "G", "Prêmio fácil e pedido de código.", "Número estranho"],
        ["Amanhã a aula de Informática começa às 14h", "O", "Não pede senha, código nem dinheiro.", "Grupo da turma (professor)"]],
      "Golpe nenhum passa por você! 🛡️", "Banco, escola e empresas sérias nunca pedem senha ou código por mensagem."),
    VIDA(
      ["Banco, escola e empresas sérias pedem senha ou código por mensagem?", ["Nunca", "Sempre", "Só no fim de semana"], "Regra de ouro: <b>nunca</b> pedem senha ou código por mensagem."],
      ["Uma senha de 4 números tem quantas combinações?", ["10.000 (de 0000 a 9999)", "4", "100"], "De 0000 a 9999 são <b>10.000</b>; um programa testa todas rapidinho (força bruta)."],
      ["O site da loja caiu na promoção porque milhares de computadores acessaram ao mesmo tempo, de propósito. Isso é…", ["DDoS", "Phishing", "Força bruta"], "Muitos acessos ao mesmo tempo para derrubar o site: <b>DDoS</b>."])
  ];
  mais("m2", "desafio",
    msg("🎭 Qual é o ataque?", "🛡️ Central de segurança", [["E", "🎭 Engenharia social"], ["P", "🎣 Phishing"], ["F", "🔢 Força bruta"], ["D", "🌊 DDoS"]],
      "Cada situação é qual ataque?",
      [["Um programa testa 0000, 0001, 0002… até achar o PIN", "F", "Tenta todas as senhas: força bruta."], ["Um site falso imita a página do banco", "P", "Site falso como isca: phishing."],
        ["Alguém liga dizendo ser do suporte e pede o código que chegou no seu celular", "E", "Engana a pessoa para ela entregar o código."], ["Milhares de computadores acessam o site da escola ao mesmo tempo para derrubá-lo", "D", "Para o site cair: DDoS."]],
      "Mandou bem! 🛡️", "Engenharia social engana a pessoa; phishing usa iscas falsas; força bruta testa senhas; DDoS derruba sites."));
  mais("m2", "turbo",
    sin("🚩 Os sinais do golpe", "Marque só os <b>sinais de golpe</b>.",
      ["Pressa: “agora!”, “só hoje!”", "Prêmio fácil", "Pedido de código, senha ou dinheiro", "Número ou endereço estranho"],
      [["Uma mensagem do professor com o horário da aula", "Não pede nada: é só um aviso."], ["A atualização que aparece na loja oficial", "Vem da loja oficial."]],
      "Pressa, prêmio fácil, pedido de código, senha ou dinheiro, número estranho e erros de português são sinais de golpe."));

  /* ---------- M3 · cifra de César ---------- */
  A.m3.gancho = { html: "<p>🕵️ Na caça ao tesouro da escola, a primeira pista estava num papel: <b>SDWLR</b>. Ninguém entendeu nada!</p><p>🤔 Como ler uma mensagem secreta? E se cada letra tivesse andado 3 casas no alfabeto?</p>" };
  A.m3.aplicar = [
    { tipo: "cesar", titulo: "🛠️ Na vida real: a pista da caça ao tesouro", chaveInicial: 3,
      enunciado: "<p>A pista da caça ao tesouro foi cifrada com a <b>chave 3</b>. Decifre a pista para saber onde está o tesouro e depois cifre a resposta para o próximo grupo.</p>",
      tarefas: [{ tipo: "decifrar", claro: "PATIO", cifrado: "SDWLR" }, { tipo: "cifrar", claro: "BOLA", cifrado: "EROD" }],
      dicas: ["Para decifrar, volte 3 casas: S → P, D → A…", "Para cifrar, ande 3 casas: B → E, O → R…"],
      explicacao: "SDWLR → PATIO (o tesouro está no pátio!). BOLA → EROD." },
    VIDA(
      ["Na cifra de César, o número de casas que cada letra anda é a…", ["Chave", "Nome do site", "Letra"], "O número de casas é a <b>chave</b>."],
      ["Quantas chaves úteis a cifra de César tem?", ["25", "26", "1.000"], "O alfabeto tem 26 letras; andar 26 casas volta à mesma letra: só <b>25</b> chaves úteis."],
      ["Os aplicativos de mensagens protegem as conversas com…", ["Criptografia muito mais forte que a de César", "A cifra de César com chave 3", "Nenhuma proteção"], "Usam criptografia <b>muito mais forte</b> que a de César."])
  ];
  mais("m3", "desafio",
    { tipo: "cesar", titulo: "🟡 Outra chave: a chave 2", chaveInicial: 2,
      enunciado: "<p>Agora a chave é <b>2</b>: cada letra anda 2 casas.</p>",
      tarefas: [{ tipo: "cifrar", claro: "PEIXE", cifrado: "RGKZG" }, { tipo: "decifrar", claro: "VIDA", cifrado: "XKFC" }],
      dicas: ["P → R, E → G, I → K…", "Para decifrar, volte 2 casas: X → V…"],
      explicacao: "PEIXE → RGKZG · XKFC → VIDA." });
  mais("m3", "turbo",
    { tipo: "cesar", titulo: "🔴 O fim do alfabeto e a força bruta", chaveInicial: 3,
      enunciado: "<p>Cuidado com o fim do alfabeto: depois do Z, volta para o A. Na última, descubra a <b>chave</b> testando (força bruta).</p>",
      tarefas: [{ tipo: "decifrar", claro: "ZERO", cifrado: "CHUR" }, { tipo: "cifrar", claro: "XIS", cifrado: "ALV" }, { tipo: "chave", cifrado: "FDVD", palavra: "CASA", chave: 3 }],
      dicas: ["C voltando 3 casas: B, A, Z.", "X andando 3 casas: Y, Z, A.", "Mude a chave com − e + até aparecer uma palavra que faça sentido."],
      explicacao: "CHUR → ZERO · XIS → ALV · FDVD com a chave 3 é CASA. Testar as chaves uma por uma é a força bruta." });

  /* ---------- M4 · criptografia hoje e HTTPS ---------- */
  A.m4.gancho = { html: "<p>🔒 A Bia vai comprar um fone numa loja on-line e viu um <b>cadeadinho</b> do lado do endereço.</p><p>🤔 O cadeado quer dizer que a loja é honesta? Ou ele protege outra coisa?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: digitar a senha ou não?", "🌐 Navegador", [["S", "✅ Pode digitar a senha"], ["N", "🚫 Não digite"]],
      "A loja verdadeira é <b>www.lojafone.com.br</b>. Olhe o endereço de cada página: tem <b>https e cadeado</b>? O <b>nome</b> está certo?",
      [["🔒 https://www.lojafone.com.br/entrar", "S", "https com cadeado e o nome certo."], ["http://www.lojafone.com.br/entrar (sem cadeado)", "N", "http: os dados viajam sem criptografia."],
        ["🔒 https://www.l0jafone.com.br/entrar", "N", "Tem cadeado, mas o nome é falso (zero no lugar do O). Site falso também pode ter cadeado."], ["🔒 https://www.lojafone.com.br/pagamento", "S", "https, cadeado e nome certo."]],
      "Compra segura! 🔒", "O cadeado diz que a conversa é cifrada, mas não garante que o site é honesto: confira sempre o nome."),
    VIDA(
      ["No “cadeado aberto”, quem consegue <b>abrir</b> a caixa fechada?", ["Só quem tem a chave privada (o site)", "Qualquer pessoa", "Quem tem a chave pública"], "Qualquer um fecha com a chave pública; só o dono da <b>chave privada</b> abre."],
      ["Alguém interceptou os seus dados no caminho de um site com https. O que ele vê?", ["Uma bagunça de letras", "A sua senha", "As suas fotos"], "Os dados viajam cifrados: quem interceptar só vê <b>bagunça</b>."],
      ["O S do https quer dizer…", ["Secure, seguro: os dados viajam cifrados", "Site", "Super rápido"], "O S é de <b>secure</b>: os dados viajam cifrados."])
  ];
  mais("m4", "desafio",
    rota("📦 A caixa com o cadeado do site", "Coloque <b>na ordem</b> como a sua mensagem viaja protegida até o site.",
      [["🔓", "O site distribui cadeados abertos (chave pública)"], ["📦", "Você põe a mensagem na caixa e fecha com o cadeado do site"], ["🌐", "A caixa viaja pela internet: ninguém abre no caminho"], ["🗝️", "O site abre com a chave privada, que só ele tem"]],
      "Mensagem entregue em segurança! 📦", "Qualquer pessoa pode fechar o cadeado, mas só o dono da chave privada consegue abrir."));
  mais("m4", "turbo",
    mem("🧩 Jogo da memória da criptografia", [["Chave pública", "O cadeado aberto que todos podem usar"], ["Chave privada", "Só o site tem: abre o cadeado"], ["http://", "Dados sem criptografia"],
      ["https:// 🔒", "Dados viajando cifrados"], ["Interceptar", "Pegar os dados no caminho"], ["Ponta a ponta", "Só quem manda e quem recebe leem a conversa"]],
      "O cadeado protege a viagem dos dados; o nome do site você confere."));

  /* ---------- M5 · senhas ---------- */
  A.m5.gancho = { html: "<p>😱 A senha do Davi era <b>davi2011</b> em tudo: no jogo, na rede social e no e-mail. Um dia, o site do jogo avisou: “houve um <b>vazamento de dados</b>”.</p><p>🤔 O que pode acontecer com as outras contas do Davi? O que ele deve fazer agora?</p>" };
  A.m5.aplicar = [
    msg("🛠️ Na vida real: o vazamento do site do jogo", "🔐 Conta do Davi", [["S", "✅ Faça agora"], ["N", "🚫 Não faça"]],
      "O site do jogo do Davi teve vazamento de dados. Para cada ideia, ele deve fazer ou não?",
      [["Trocar a senha do site do jogo", "S", "A senha que vazou não serve mais."], ["Trocar a senha de todas as contas onde ela se repetia", "S", "Com a mesma senha, as outras contas também estão em risco."],
        ["Ativar a verificação em duas etapas", "S", "Mesmo com a senha, o criminoso precisaria do código no celular."], ["Usar davi2012 como senha nova", "N", "Tem nome e data: continua fraca."],
        ["Mandar a senha nova para o melhor amigo guardar", "N", "Senha é pessoal, nem para o melhor amigo."]],
      "Contas protegidas! 🔐", "Depois de um vazamento: troque a senha do site e de onde ela se repetia, e use senha forte e verificação em duas etapas."),
    VIDA(
      ["Um site sério guarda a sua senha escrita?", ["Não: guarda um hash, um resumo embaralhado", "Sim, num caderno", "Sim, num arquivo aberto"], "O site guarda um <b>hash</b>: um resumo que não dá para desfazer."],
      ["Na verificação em duas etapas, além da senha, a conta pede…", ["Um código no celular", "O nome da sua mãe", "A sua idade"], "Além da senha, um <b>código no celular</b>."],
      ["O programa que guarda todas as senhas com segurança, e você decora só uma, é o…", ["Gerenciador de senhas", "Antivírus", "Navegador"], "É o <b>gerenciador de senhas</b>."])
  ];
  mais("m5", "desafio",
    sin("💪 Marque só as senhas fortes (inventadas)", "Todas são senhas <b>inventadas</b>, só para treinar. Marque só as <b>fortes</b>.",
      ["Gato!Azul7Pula", "Rio#Tocantins55Peixe", "Lua#Verde42Mar"],
      [["123456", "Curta e só números."], ["davi2011", "Tem nome e data."], ["futebol", "Só letras, curta e fácil de adivinhar."]],
      "Senha forte: comprida, misturando maiúsculas, minúsculas, números e símbolos, sem nada pessoal."));
  mais("m5", "turbo",
    mem("🧩 Jogo da memória das senhas", [["Frase-senha", "Palavras misturadas: Gato!Azul7Pula"], ["Hash", "Resumo embaralhado que não dá para desfazer"], ["Verificação em duas etapas", "Senha + código no celular"],
      ["Gerenciador de senhas", "Guarda todas; você decora só uma"], ["Vazamento de dados", "Dados de um site roubados"], ["Senha pessoal", "Nem para o melhor amigo"]],
      "Senha forte, uma para cada conta importante, e proteções extras."));

  /* ---------- M6 · programa por eventos ---------- */
  A.m6.gancho = { html: "<p>🚪 O portão eletrônico do prédio do Rafa abre quando ele aperta o controle. À noite, a luz da garagem acende quando alguém passa.</p><p>🤔 O programa do portão fica perguntando o tempo todo “apertaram? apertaram?”, ou ele <b>espera</b> algo acontecer para agir?</p>" };
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o alarme da sala de informática",
      enunciado: "<p>Programe duas regras do alarme. Use dois blocos <b>quando acontecer</b> (gaveta ⚡ Eventos): <b>quando 🚪 a porta abrir</b>, mostrar <b>Sirene tocando!</b>; <b>quando 🔢 digitarem o código certo</b>, mostrar <b>Sirene desligada</b>. O portal vai fazer: porta abre → código certo.</p>",
      caixa: ["mostrar", "texto", "evento"],
      eventos: [["🚪 porta abre", "porta"], ["🔢 código certo", "codigo"]], disparos: ["porta", "codigo"],
      esperado: ["Sirene tocando!", "Sirene desligada"], exige: ["evento"],
      solucao: [["quando", "porta", [["mostrar", "Sirene tocando!"]]], ["quando", "codigo", [["mostrar", "Sirene desligada"]]]],
      dicas: ["Arraste dois “quando acontecer” e escolha um evento em cada.", "Dentro de cada um, um “mostrar na tela” com a ação."],
      explicacao: "Cada regra é “quando… faça…”: o evento (a porta, o código) dispara a ação (tocar ou desligar a sirene)." },
    VIDA(
      ["Na regra “quando o sensor perceber movimento, tocar o alarme”, o <b>evento</b> é…", ["O sensor perceber movimento", "Tocar o alarme", "O celular"], "O evento é o que acontece: o <b>sensor perceber movimento</b>. Tocar o alarme é a ação."],
      ["No jogo, “quando aperto a tecla, o personagem pula”. A <b>ação</b> é…", ["O personagem pular", "Apertar a tecla", "Ligar o computador"], "A ação é o que o programa faz: <b>pular</b>."],
      ["Depois de escrever as regras “quando… faça…”, o próximo passo do projeto é…", ["Testar cada regra", "Apagar as regras", "Apresentar sem testar"], "1) eventos; 2) ações; 3) regras; 4) <b>testar</b>; 5) apresentar."])
  ];
  mais("m6", "desafio",
    msg("⚡ Evento ou ação?", "⚡ Programa por eventos", [["E", "⚡ Evento (QUANDO…)"], ["A", "🎬 Ação (FAÇA…)"]],
      "Cada parte das regras é o evento (o que acontece) ou a ação (o que o programa faz)?",
      [["Clicar no botão “Entrar”", "E", "É o que acontece."], ["Conferir a senha", "A", "É o que o programa faz."], ["Errar a senha 3 vezes", "E", "É o que acontece."],
        ["Bloquear a conta por 5 minutos", "A", "É o que o programa faz."], ["O relógio marcar 7h", "E", "É o que acontece."], ["Desligar o alarme da porta", "A", "É o que o programa faz."]],
      "Mandou bem! ⚡", "QUANDO (evento) acontece algo, o programa FAZ (ação) alguma coisa."));
  mais("m6", "turbo",
    { tipo: "blocos", titulo: "🔴 A regra 3: código errado 3 vezes",
      enunciado: "<p>A variável <b>erros</b> começa em 0. No tratador de <b>❌ código errado</b>: alterar erros por 1, mostrar <b>Código errado</b> e, <b>se erros = 3</b>, mostrar <b>Aviso enviado ao professor</b>. O portal vai errar o código 3 vezes:</p><p><b>Código errado</b><br><b>Código errado</b><br><b>Código errado</b><br><b>Aviso enviado ao professor</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar", "evento"],
      eventos: [["❌ código errado", "errado"]], disparos: ["errado", "errado", "errado"],
      inicio: [["definir", "erros", 0]],
      esperado: ["Código errado", "Código errado", "Código errado", "Aviso enviado ao professor"], exige: ["evento", "se"],
      solucao: [["definir", "erros", 0], ["quando", "errado", [["mudar", "erros", 1], ["mostrar", "Código errado"], ["se", ["=", v("erros"), 3], [["mostrar", "Aviso enviado ao professor"]]]]]],
      dicas: ["Dentro do “quando acontecer ❌”: alterar erros por 1, mostrar e depois o se.", "O se fica dentro do quando, embaixo do mostrar."],
      explicacao: "O tratador roda a cada erro; a variável conta os erros, e na 3ª vez a condição fica verdadeira: o aviso vai para o professor." });

  /* ---------- M7 · ransomware e backup ---------- */
  A.m7.gancho = { html: "<p>🏥 Num hospital, os computadores amanheceram com todos os arquivos virando letras sem sentido. Na tela, uma mensagem: “pague para ter os arquivos de volta”.</p><p>🤔 O que aconteceu? Pagar resolve? O que teria salvado o hospital?</p>" };
  A.m7.aplicar = [
    msg("🛠️ Na vida real: o plano de backup da Lara segue a regra 3-2-1?", "💾 Backup da Lara", [["S", "✅ Está certo"], ["N", "⚠️ Está errado"]],
      "A Lara fez um plano de backup para os trabalhos da escola. Cada parte do plano está certa?",
      [["Ter o original e mais 2 cópias (3 cópias ao todo)", "S", "É o 3 da regra 3-2-1."], ["Guardar no computador e num HD externo (2 tipos diferentes)", "S", "É o 2 da regra."],
        ["Uma cópia na nuvem, fora de casa", "S", "É o 1 da regra."], ["Deixar o HD externo sempre ligado no computador", "N", "Ligado, o ransomware pode cifrar a cópia também."],
        ["Guardar as 3 cópias no mesmo computador", "N", "Precisa de 2 tipos diferentes e 1 cópia fora de casa."]],
      "Backup de respeito! 💾", "Regra 3-2-1: 3 cópias, 2 tipos de armazenamento, 1 fora de casa. E o HD externo fica desligado depois do backup."),
    VIDA(
      ["Pagar o resgate garante os arquivos de volta?", ["Não: o criminoso pode não devolver nada", "Sim, sempre", "Só se pagar rápido"], "Pagar <b>não é garantia</b>; especialistas recomendam não pagar e ter backup."],
      ["Quem tem backup e foi atacado por ransomware…", ["Apaga o computador infectado e recupera tudo da cópia", "Perde tudo", "Paga o resgate"], "O backup é o <b>remédio</b>: recupera tudo da cópia."],
      ["Depois do backup, o HD externo deve ficar…", ["Desligado do computador", "Sempre ligado", "Na tomada da cozinha"], "Ligado, o ransomware pode cifrar a cópia também: deixe <b>desligado</b>."])
  ];
  mais("m7", "desafio",
    rota("🧯 Fui atacado por ransomware: e agora?", "O computador foi atacado, mas a Lara tinha backup. Coloque os passos <b>na ordem</b>.",
      [["🚫", "Não pagar o resgate"], ["🧹", "Apagar o computador infectado"], ["💾", "Ligar o HD externo e recuperar os arquivos da cópia"], ["🔌", "Desligar de novo o HD externo depois de usar"]],
      "Arquivos recuperados! 🎉", "Com backup, não precisa pagar: apaga o computador infectado e recupera tudo da cópia."));
  mais("m7", "turbo",
    mem("🧩 Jogo da memória do backup", [["Ransomware", "Sequestra os arquivos e pede resgate"], ["Resgate", "O dinheiro que o criminoso pede"], ["Backup", "Cópia dos arquivos: o remédio"],
      ["3", "Ter 3 cópias"], ["2", "Em 2 tipos de armazenamento"], ["1", "1 cópia fora de casa"]],
      "Regra 3-2-1: 3 cópias, 2 tipos, 1 fora de casa."));

  /* ---------- M8 · esteganografia ---------- */
  A.m8.gancho = { html: "<p>📜 O Caio recebeu um bilhete normalzinho do primo: “Saí cedo hoje. Ontem choveu muito. Levei o guarda-chuva.”. Só depois ele percebeu que as primeiras letras formavam uma palavra!</p><p>🤔 Como esconder uma mensagem sem ninguém nem perceber que ela existe?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: criptografia ou esteganografia?", "🔍 Segredos", [["C", "🔐 Criptografia"], ["E", "🙈 Esteganografia"]],
      "Na criptografia, todo mundo vê que existe um segredo, mas não consegue ler. Na esteganografia, ninguém nem percebe que ele está lá. Qual é cada caso?",
      [["Um papel escrito “XOD”", "C", "Dá para ver que é um segredo, mas está embaralhado."], ["Um bilhete normal em que as primeiras letras formam uma palavra", "E", "A mensagem está escondida (acróstico)."],
        ["Uma foto que guarda letras em pequenas mudanças dos pixels", "E", "O olho não percebe a diferença na foto."], ["Uma conversa protegida com criptografia de ponta a ponta", "C", "A mensagem existe, mas está cifrada."],
        ["A marca d’água invisível num filme", "E", "Fica escondida para mostrar quem é o dono."]],
      "Olhar de espião! 🔍", "Criptografia embaralha; esteganografia esconde."),
    VIDA(
      ["No bilhete “Saí cedo hoje. Ontem choveu muito. Levei o guarda-chuva.”, a palavra escondida é…", ["SOL", "SIM", "LUZ"], "As primeiras letras: <b>S</b>aí, <b>O</b>ntem, <b>L</b>evei = SOL."],
      ["Esteganografia quer dizer…", ["Escrita escondida", "Escrita rápida", "Escrita bonita"], "Vem do grego: <b>escrita escondida</b>."],
      ["Como esconder letras numa foto digital?", ["Mudando bem pouquinho os números de alguns pixels", "Escrevendo por cima com caneta", "Apagando a foto"], "Cada <b>pixel</b> é guardado em números; mudando pouquinho, o olho não percebe."])
  ];
  mais("m8", "desafio",
    { tipo: "tabela", titulo: "🟡 Ache a palavra escondida (acróstico)",
      enunciado: "<p>Leia a primeira letra de cada linha, de cima para baixo, e escreva a palavra escondida.</p>",
      colunas: ["Bilhete", "Palavra escondida"],
      linhas: [["Mais tarde eu ligo. / Amanhã tem prova. / Remédio na mesa.", { r: "MAR", tipo: "letras" }], ["Pão na cesta. / Arroz no fogão. / Tem suco na geladeira. / Ovo cozido. / Sobremesa depois.", { r: "PATOS", tipo: "letras" }],
        ["Vou sair às 7. / Irmão vem junto. / Dorme cedo. / Amanhã eu volto.", { r: "VIDA", tipo: "letras" }]],
      explicacao: "M-A-R · P-A-T-O-S · V-I-D-A: as primeiras letras escondem a mensagem." });
  mais("m8", "turbo",
    mem("🧩 Jogo da memória: esconder ou embaralhar?", [["Criptografia", "A mensagem aparece, mas embaralhada"], ["Esteganografia", "A mensagem fica escondida dentro de outra coisa"], ["Acróstico", "As primeiras letras formam a palavra"],
      ["Pixel", "Cada ponto da foto, guardado em números"], ["Marca d’água invisível", "Mostra quem é o dono da foto"], ["Mensageiro da Grécia antiga", "Recado escrito na cabeça raspada"]],
      "Esteganografia esconde a mensagem; criptografia embaralha."));
})();
