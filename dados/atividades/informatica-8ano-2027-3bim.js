/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 3º bimestre de 2027 (Redes sociais)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF08CO07, EF08CO08, EF08CO09, EF08CO10, EF08CO11.
   ♻️ A Missão 4 reaproveita a M4 do 8º ano de 2026 (4º bimestre), já testada.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-8ano-2027-3bim", {

  /* ============ MISSÃO 1 — Compartilhar com responsabilidade ============ */
  m1: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: compartilhar, pedir antes ou não compartilhar?",
        robo: BIT("🔎 As 4 perguntas", [["É <b>verdade</b>? É <b>meu</b>? Protege as <b>pessoas</b>? Protege <b>você</b>?", "4 × sim → pode"], ["A foto é do colega? Então primeiro <b>peço permissão</b>.", "não é meu → peça antes", true]]),
        enunciado: "<p>Para cada caso, faça as <strong>4 perguntas</strong> da tabela do 💡 Para começar.</p>",
        colunaItem: "Caso", colunaResp: "O que fazer",
        categorias: [{ id: "S", rot: "✅ Pode compartilhar" }, { id: "P", rot: "🙋 Peça permissão antes" }, { id: "N", rot: "🚫 Não compartilhe" }],
        itens: [{ t: "O desenho que VOCÊ fez na aula de Arte", c: "S" }, { t: "A foto do grupo na festa, com os colegas", c: "P" },
          { t: "O vídeo do colega caindo, para todo mundo rir", c: "N", why: "Expõe e humilha o colega." }, { t: "“URGENTE: a escola vai fechar!” sem autor nem data", c: "N", why: "Pode ser boato." },
          { t: "O áudio que a amiga mandou só para você", c: "P" }],
        explicacao: "Seu e verdadeiro: pode. De outra pessoa: peça permissão. Humilha ou é boato: não compartilhe." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que esta foto revela?",
        robo: BIT("🔎 Como eu olho a foto", [["Procuro coisas que mostram <b>onde</b> eu moro, estudo ou estou agora.", "onde? → expõe"], ["Uma árvore qualquer não revela nada.", "árvore → não expõe", true]]),
        enunciado: "<p>A Lara vai postar uma foto <strong>no portão de casa</strong>, com o <strong>uniforme da escola</strong>, o <strong>número da casa</strong> aparecendo, a <strong>localização em tempo real</strong> ligada e um <strong>cachorro</strong> no colo.</p><p>Marque <strong>só</strong> o que pode expor a Lara.</p>",
        opcoes: [{ t: "O uniforme com o nome da escola", certo: true }, { t: "O número da casa", certo: true }, { t: "A localização em tempo real", certo: true },
          { t: "O cachorro no colo", certo: false, why: "O cachorro não mostra onde ela mora ou estuda." }],
        explicacao: "Uniforme, número da casa e localização em tempo real mostram onde ela estuda, mora e está." },
      { tipo: "ordenar", titulo: "As 4 perguntas antes de compartilhar",
        enunciado: "<p>Coloque na ordem da tabela do 💡 Para começar.</p>",
        itens: ["É verdade?", "É meu para compartilhar?", "Protege as pessoas?", "Protege você?"],
        explicacao: "Verdade → é meu → protege as pessoas → protege você." },
      { tipo: "escolha", titulo: "Compartilhar com responsabilidade",
        perguntas: [
          { p: "Você postou e apagou 1 minuto depois. Alguém ainda pode ter a foto?", opcoes: ["Sim: pode ter tirado print ou repassado", "Não: apagou, sumiu", "Só se a foto for colorida"], certo: 0 },
          { p: "Pelo ECA Digital, a conta de um adolescente de 14 anos numa rede social precisa:", opcoes: ["Estar ligada a um responsável", "Ter mais de mil seguidores", "Ser pública"], certo: 0 }],
        explicacao: "Prints ficam; pelo ECA Digital, contas de até 16 anos precisam estar ligadas a um responsável." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 O grupo da turma: compartilhar ou não?",
        enunciado: "<p>Chegaram estas coisas no grupo. Para cada uma, decida se você repassa.</p>",
        app: "💬 Grupo da turma", botoes: [{ id: "S", rot: "📤 Compartilho" }, { id: "N", rot: "✋ Não compartilho" }],
        itens: [{ de: "Professor", t: "Link do portal com a apostila da semana", c: "S" },
          { de: "Colega", t: "Print da conversa particular de outra aluna", c: "N", why: "Não é seu e expõe a colega." },
          { de: "Colega", t: "“Compartilhe antes que apaguem!!!” sem fonte", c: "N", why: "Sinal de boato." },
          { de: "Você", t: "Foto do seu desenho premiado, sem uniforme nem endereço", c: "S" }],
        okMsg: "Você pensou antes de compartilhar! 📤",
        explicacao: "Material da aula e o que é seu podem ir; o que expõe alguém ou é boato, não." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: compartilhar com responsabilidade",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "Desfazer pode ser impossível por causa dos **prints**. Antes de compartilhar, pergunte se é **verdade**, se é **meu**, se protege as pessoas e se protege você. Cuidado com o **uniforme**, a fachada da casa e a **localização** em tempo real.",
        explicacao: "Prints, verdade, meu, uniforme e localização." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "sempre dá para desfazer", opcoes: ["sempre dá para desfazer", "pode ser impossível desfazer"], certo: "pode ser impossível desfazer" }, why: "Prints e repasses ficam." },
      { v: true, why: "A foto não é só sua." },
      { v: true, why: "O nome da escola aparece." },
      { v: true, why: "É o que ela mostra." },
      { v: false, corrigir: { trecho: "o certo é compartilhar logo", opcoes: ["o certo é compartilhar logo", "o certo é conferir antes"], certo: "o certo é conferir antes" }, why: "Pode ser boato." }
    ]
  },

  /* ============ MISSÃO 2 — Fontes confiáveis ============ */
  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: mais ou menos confiável?",
        robo: BIT("🔎 As 5 perguntas", [["Tem <b>autor</b> e <b>data</b>? É de um lugar conhecido? Mais confiável.", "autor + data → mais"], ["Corrente sem autor, com “!!!”? Menos confiável.", "sem autor → menos", true]]),
        enunciado: "<p>Use as <strong>5 perguntas da fonte</strong> e a tabela <strong>Mais confiável · Menos confiável</strong>.</p>",
        colunaItem: "Fonte", colunaResp: "É…",
        categorias: [{ id: "M", rot: "👍 Mais confiável" }, { id: "N", rot: "⚠️ Menos confiável" }],
        itens: [{ t: "Notícia de jornal conhecido, com autor e data", c: "M" }, { t: "Corrente sem autor no aplicativo de mensagens", c: "N" },
          { t: "Página de um site que termina em .gov.br", c: "M" }, { t: "Perfil desconhecido: “EXCLUSIVO!!! Compartilhe!!!”", c: "N" }, { t: "Print sem link, de origem desconhecida", c: "N" }],
        explicacao: "Autor, data, site conhecido ou oficial = mais confiável; sem autor, “!!!” e print sem origem = menos." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada pergunta e o que procurar",
        robo: BIT("🔗 Como eu ligo", [["Eu leio a coluna <b>O que procurar</b> da tabela das 5 perguntas.", "pergunta → o que procurar"], ["“Quando?” → a data.", "quando → data ✔", true]]),
        pares: [{ a: "👤 Quem escreveu?", b: "Um nome, um jornalista, um especialista" }, { a: "📅 Quando?", b: "A data da publicação" }, { a: "📚 Tem provas?", b: "Números, documentos, pesquisas" }, { a: "🔁 Outras fontes confirmam?", b: "A mesma notícia em outros lugares" }],
        explicacao: "Quem = autor; quando = data; provas = documentos; outras fontes = confirmação." },
      { tipo: "sinais", titulo: "Quais são sinais de alerta?",
        enunciado: "<p>“<strong>URGENTE!!! A MERENDA VAI ACABAR!!!</strong> Compartilhe antes que apaguem. Quem me contou foi um amigo de um amigo.”</p><p>Marque <strong>só</strong> os sinais de alerta.</p>",
        opcoes: [{ t: "Título em maiúsculas com “!!!”", certo: true }, { t: "“Compartilhe antes que apaguem”", certo: true }, { t: "Sem autor nem data", certo: true }, { t: "“Um amigo de um amigo”", certo: true },
          { t: "Falar da merenda", certo: false, why: "O assunto não é o problema; a falta de fonte é." }],
        explicacao: "Maiúsculas e “!!!”, pedido de compartilhar, sem autor e sem data, e “amigo de um amigo”." },
      { tipo: "escolha", titulo: "Fontes",
        perguntas: [
          { p: "Fonte é:", opcoes: ["De onde vem a informação", "O tamanho da letra", "O número de curtidas"], certo: 0 },
          { p: "Uma notícia de 2019 circulando hoje como nova. Qual pergunta ajuda a perceber?", opcoes: ["Quando?", "Quem curtiu?", "De que cor é?"], certo: 0 }],
        explicacao: "Fonte = origem; a pergunta “Quando?” revela notícia velha." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Duas notícias sobre o mesmo assunto",
        enunciado: "<p><strong>Notícia A:</strong> “Vacinação contra a gripe começa na segunda”, no site da prefeitura (.gov.br), com data e o endereço dos postos.</p><p><strong>Notícia B:</strong> áudio no grupo: “VACINA SÓ PARA QUEM CHEGAR ÀS 5H, CORRE!!!”, sem data e sem dizer quem gravou.</p>",
        dicas: ["Use as 5 perguntas da fonte."],
        perguntas: [
          { p: "Qual é mais confiável?", opcoes: ["A notícia A", "A notícia B", "As duas iguais"], certo: 0 },
          { p: "Por quê?", opcoes: ["Tem fonte oficial, data e detalhes que dá para conferir", "Porque é mais curta", "Porque usa maiúsculas"], certo: 0 },
          { p: "O que fazer com o áudio B?", opcoes: ["Conferir no site oficial antes de repassar", "Repassar para todo mundo", "Acreditar porque é urgente"], certo: 0 }],
        explicacao: "A tem fonte oficial (.gov.br), data e detalhes; B tem pressa, maiúsculas e nenhuma fonte." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras das fontes",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 📖 O que significa?."],
        palavras: ["FONTE", "BOATO", "CORRENTE", "AUTOR", "DATA", "PROVA"],
        pistas: ["De onde vem a informação", "Informação que se espalha sem prova", "Mensagem que pede para ser repassada", "Quem escreveu", "Quando foi publicado", "Mostra que algo é verdade"], tam: 10,
        explicacao: "Fonte, boato, corrente, autor, data e prova." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "A data não importa", opcoes: ["A data não importa", "A data importa"], certo: "A data importa" }, why: "Notícia velha pode parecer nova." },
      { v: true, why: "É pressão para repassar sem pensar." },
      { v: true, why: "É o final dos sites do governo." },
      { v: true, why: "Confirmação deixa mais confiável." }
    ]
  },

  /* ============ MISSÃO 3 — Vieses e bolhas ============ */
  m3: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: dentro ou fora da bolha?",
        robo: BIT("🫧 A pergunta", [["Vejo <b>só</b> o que concordo? Estou dentro da bolha.", "só igual → dentro"], ["Vejo opiniões diferentes e confiro antes? Fora.", "diferente → fora", true]]),
        enunciado: "<p>Use a tabela <strong>Na bolha · Fora da bolha</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Está…",
        categorias: [{ id: "D", rot: "🫧 Na bolha" }, { id: "F", rot: "🌍 Fora da bolha" }],
        itens: [{ t: "Só vejo opiniões iguais às minhas", c: "D" }, { t: "Percebo que as pessoas pensam diferente", c: "F" },
          { t: "Acho que todo mundo concorda comigo", c: "D" }, { t: "Confiro antes, mesmo quando eu concordo", c: "F" }],
        explicacao: "Na bolha: só o igual e a sensação de que todos concordam. Fora: ver o diferente e conferir." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Viés", b: "Tendência que puxa o pensamento para um lado" }, { a: "Viés de confirmação", b: "Acreditar mais rápido no que já pensamos" },
          { a: "Bolha", b: "A rede só mostra o parecido com o que você curte" }, { a: "Ponto de vista", b: "O jeito de cada um enxergar um assunto" }],
        explicacao: "Viés, viés de confirmação, bolha e ponto de vista." },
      { tipo: "sinais", titulo: "O que fura a bolha?",
        robo: BIT("🔎 A pergunta", [["Isso me faz ver <b>outros pontos de vista</b>? Fura a bolha.", "outro lado → fura"], ["Isso me mostra mais do mesmo? Reforça.", "mais do mesmo → reforça", true]]),
        enunciado: "<p>Marque <strong>só</strong> as atitudes que ajudam a furar a bolha.</p>",
        opcoes: [{ t: "Seguir fontes diferentes", certo: true }, { t: "Procurar o outro lado", certo: true }, { t: "Desconfiar do que agrada demais", certo: true }, { t: "Conversar com quem pensa diferente", certo: true },
          { t: "Bloquear todo mundo que discorda", certo: false, why: "Isso deixa a bolha ainda mais fechada." }],
        explicacao: "Fontes diferentes, o outro lado, desconfiar do que agrada demais e conversar furam a bolha." },
      { tipo: "escolha", titulo: "Viés de confirmação",
        perguntas: [
          { p: "Quem tem viés de confirmação?", opcoes: ["Todo mundo", "Só quem usa rede social", "Ninguém"], certo: 0 },
          { p: "O torcedor só acredita nas notícias boas do seu time. Isso é:", opcoes: ["Viés de confirmação", "Ponto de vista diferente", "Permissão"], certo: 0 }],
        explicacao: "Todo mundo tem; acreditar só no que agrada é viés de confirmação." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Essa atitude fura a bolha ou reforça?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "🫧 Bolha", botoes: [{ id: "F", rot: "📌 Fura a bolha" }, { id: "R", rot: "🫧 Reforça a bolha" }],
        itens: [{ de: "Feed", t: "Curtir só vídeos que concordam comigo", c: "R" }, { de: "Pesquisa", t: "Pesquisar “quem discorda disso e por quê?”", c: "F" },
          { de: "Grupo", t: "Sair do grupo quando alguém pensa diferente", c: "R" }, { de: "Jornal", t: "Ler a mesma notícia em dois jornais diferentes", c: "F" }],
        okMsg: "Você furou a bolha! 📌",
        explicacao: "Buscar o outro lado e outras fontes fura; curtir só o igual e fugir do diferente reforça." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a bolha",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O **viés** de confirmação é acreditar mais rápido no que combina com o que já pensamos. Na **bolha**, a rede mostra mais do **mesmo** e parece que todos pensam igual. Para furar, siga **fontes** diferentes e procure o outro **lado**.",
        explicacao: "Viés, bolha, mesmo, fontes e lado." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "Só algumas pessoas têm", opcoes: ["Só algumas pessoas têm", "Todo mundo tem"], certo: "Todo mundo tem" }, why: "Saber disso já ajuda." },
      { v: true, why: "A rede mostra mais do mesmo." },
      { v: true, why: "Mostra outros pontos de vista." },
      { v: false, corrigir: { trecho: "não precisa ser conferida", opcoes: ["não precisa ser conferida", "precisa ser conferida duas vezes"], certo: "precisa ser conferida duas vezes" }, why: "É onde o viés mais engana." }
    ]
  },

  /* ============ MISSÃO 4 — Termos de uso (♻️ M4 do 8º ano de 2026) ============ */
  m4: {
    pratica: [
      { id: "m4-sim-termos", tipo: "sim_pc", titulo: "📜 Simulador: cookies e termos de uso do FotoTop",
        enunciado: "<p>Você vai baixar o aplicativo inventado <strong>FotoTop</strong>. Antes, decida os <strong>cookies</strong> e leia os <strong>termos de uso</strong> no navegador de mentira. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app",
        campos: { "ck:anuncios": true, "ck:parceiros": true, "ck:essenciais": true },
        web: {
          "fototop.app": { titulo: "FotoTop: baixe grátis", html: "<p style='font-size:40px'>📸✨</p><p>Edite e publique fotos com filtros incríveis!</p><div style='position:sticky;bottom:0;background:#fff;border:2px solid #1a73e8;border-radius:10px;padding:10px 12px;margin-top:30px'><b>🍪 Nós usamos cookies</b><br>Para anúncios personalizados e para compartilhar dados com parceiros.<br><button data-ev='aceitar' data-k='pg:aceitar' class='pri'>Aceitar tudo</button><button data-ev='personalizar' data-k='pg:personalizar' data-ir='fototop.app/cookies'>Personalizar</button></div>" },
          "fototop.app/cookies": { titulo: "FotoTop: escolha os cookies", html: "<p><label><input type='checkbox' data-ev='essenciais' disabled> Essenciais (o site precisa para funcionar)</label></p><p><label><input type='checkbox' data-ev='anuncios' data-k='pg:anuncios'> Anúncios personalizados</label></p><p><label><input type='checkbox' data-ev='parceiros' data-k='pg:parceiros'> Compartilhar meus dados com parceiros</label></p><button data-ev='salvar' data-k='pg:salvar' data-ir='fototop.app/termos' class='pri'>Salvar escolhas</button>" },
          "fototop.app/termos": { titulo: "FotoTop: termos de uso", html: "<p data-ev='cl-conta' data-k='pg:cl-conta'>1. Você pode apagar a sua conta a qualquer momento em Configurações.</p><p data-ev='cl-idade' data-k='pg:cl-idade'>2. Uso permitido a partir de 13 anos.</p><p data-ev='cl-coleta' data-k='pg:cl-coleta'>3. Coletamos nome, email e data de nascimento para criar a sua conta.</p><p style='color:#666'>4. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>5. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>6. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>7. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>8. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>Parágrafo 1: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 2: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 3: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 4: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 5: a empresa pode atualizar estes termos e avisará por email.</p><p data-ev='cl-venda' data-k='pg:cl-venda'>9. Podemos <b>compartilhar suas fotos e sua localização com empresas parceiras de publicidade</b>.</p><p style='margin-top:16px'><button data-ev='aceitar-termos' data-k='pg:aceitar-termos'>Li e aceito</button><button data-ev='recusar' data-k='pg:recusar' class='pri'>Não aceito</button></p>" }
        },
        passos: [
          { faca: "Apareceu o aviso de <b>cookies</b>. Em vez de aceitar tudo sem pensar, clique em <b>Personalizar</b>.", ok: "pagina:personalizar", onde: "pg:personalizar", erros: { "pagina:aceitar": "Calma! <b>Aceitar tudo</b> libera anúncios e o envio dos seus dados para parceiros. Clique em <b>Personalizar</b> para escolher." } },
          { faca: "Desmarque <b>Anúncios personalizados</b> (clique na caixinha para tirar o ✔).", ok: { estado: "marcado", nome: "anuncios", valor: false }, onde: "pg:anuncios" },
          { faca: "Desmarque também <b>Compartilhar meus dados com parceiros</b>.", ok: { estado: "marcado", nome: "parceiros", valor: false }, onde: "pg:parceiros" },
          { faca: "Clique em <b>Salvar escolhas</b>. Os essenciais ficam: sem eles o site não funciona.", ok: "pagina:salvar", onde: "pg:salvar" },
          { faca: "Agora os <b>termos de uso</b>. Role <b>até o fim</b> antes de decidir.", ok: "rolar:fim:fototop.app/termos" },
          { faca: "Clique na frase dos termos que pede <b>ATENÇÃO</b> (a que mais mexe com os seus dados).", ok: "pagina:cl-venda", onde: "pg:cl-venda", erros: { "pagina:cl-*": "Essa frase é tranquila. Procure a que fala de <b>compartilhar suas fotos e localização</b> com empresas." } },
          { faca: "Os termos compartilhar suas fotos e localização com publicidade. Você não é obrigado a aceitar: clique em <b>Não aceito</b>.", ok: "pagina:recusar", onde: "pg:recusar", erros: { "pagina:aceitar-termos": "Você aceitou sem concordar com a frase 9! Neste treino, clique em <b>Não aceito</b>. Na vida real, converse com a família antes de aceitar." } }
        ],
        fimMsg: "Você personalizou os cookies, leu os termos até o fim, achou a frase perigosa e decidiu com consciência. Isso é cuidar dos seus dados!",
        explicacao: "Cookies: “Personalizar” deixa você escolher; só os essenciais são necessários. Termos de uso: leia até o fim, procure o que coletam e com quem compartilham. Pela LGPD, você tem direito de saber e de apagar os seus dados." },
      { id: "m4-pratica-1", tipo: "sinais", titulo: "Antes de clicar em “Li e aceito”: o que o JogoMania faz?", robo: {"paineis": ["📜 Outro termo de uso inventado"], "passos": [{"fala": "Olha com <b>outra</b> situação: “O DesenhaJá é para maiores de 10 anos. Não compartilhamos seus dados. Você pode apagar sua conta em Ajustes.” Eu leio item por item e pergunto: “isso aparece aqui?”", "painel": 0, "titulo": "Minha situação"}, {"fala": "“É para maiores de 10 anos” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ É para maiores de 10 anos", "marca": true, "espera": 1800}, {"fala": "“Dá para apagar a conta em Ajustes” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ Dá para apagar a conta em Ajustes", "marca": true, "espera": 1800}, {"fala": "“Compartilha dados com parceiros” aparece? <b>Não</b> → deixo sem marcar.", "painel": 0, "linha": "☐ Compartilha dados com parceiros", "espera": 1800}], "fim": "Agora é a sua vez: marque só o que está escrito nos termos do JogoMania. 💪"},
        enunciado: `<div class="regra"><p><strong>📜 Termos de uso do JogoMania</strong> (jogo inventado, para treinar)</p><ol>
          <li>O JogoMania é <strong>gratuito</strong> e destinado a maiores de <strong>13 anos</strong>.</li>
          <li>Usamos o que você joga, curte e pesquisa para mostrar <strong>anúncios personalizados</strong>.</li>
          <li>Ao publicar fotos e vídeos no JogoMania, você nos concede <strong>licença para usar esse conteúdo</strong> na divulgação do jogo.</li>
          <li>Podemos <strong>compartilhar seus dados com parceiros</strong> de publicidade.</li>
          <li>Os termos podem <strong>mudar a qualquer momento</strong>; avisaremos por e-mail.</li>
          <li>Você pode <strong>excluir sua conta</strong> em Configurações → Conta.</li></ol></div>
          <p>Marque <strong>tudo o que é verdade</strong> sobre o JogoMania, segundo os termos.</p>`,
        opcoes: [
          { t: "Ele mostra propaganda escolhida pelo que eu jogo e pesquiso", certo: true },
          { t: "Ele pode usar as fotos e vídeos que eu publicar para divulgar o jogo", certo: true },
          { t: "Ele pode passar os meus dados para parceiros de publicidade", certo: true },
          { t: "As regras podem mudar depois que eu aceitar", certo: true },
          { t: "Ele nunca mostra propaganda, porque é grátis", certo: false, why: "O item 2 diz que ele mostra anúncios personalizados." },
          { t: "Não dá para apagar a conta", certo: false, why: "O item 6 diz que dá: Configurações → Conta." }],
        explicacao: "Itens 2, 3, 4 e 5: propaganda personalizada, licença sobre o que você publica, compartilhamento com parceiros e termos que mudam. O jogo é grátis, mas é pago com <strong>propaganda e dados</strong>." }
    ],
    bonus: [
      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: quem paga o grátis?",
        perguntas: [
          { p: "Um aplicativo é grátis. Como a empresa ganha dinheiro?", opcoes: ["Com anúncios e com os dados dos usuários", "Não ganha nada", "Com o dinheiro da escola"], certo: 0, why: "Quando é grátis, quem paga é a propaganda (feita com os seus dados)." },
          { p: "Qual direito da LGPD você usa ao pedir: “apaguem a minha conta”?", opcoes: ["Apagar (eliminação)", "Corrigir", "Saber"], certo: 0, why: "A LGPD garante o direito de pedir que apaguem os seus dados." }
        ] }
    ],
    basico: [
      { id: "m4-basico-1", tipo: "classificar", modo: "tabela", titulo: "Cada frase dos termos: tranquila ou atenção?", colunaItem: "Frase nos termos", colunaResp: "👍 ou ⚠️",
        categorias: [{ id: "T", rot: "👍 Tranquila" }, { id: "A", rot: "⚠️ Atenção" }],
        itens: [
          { t: "“Você pode excluir sua conta e seus dados em Configurações.”", c: "T", why: "Dá para sair e apagar os dados: bom para você." },
          { t: "“Podemos vender seus dados para outras empresas.”", c: "A", why: "Seus dados vão para empresas que você nem conhece." },
          { t: "“Usaremos sua localização o tempo todo, mesmo com o aplicativo fechado.”", c: "A", why: "Localização o tempo todo mostra onde você mora e anda." },
          { t: "“Avisaremos por e-mail antes de mudar estes termos.”", c: "T", why: "Você fica sabendo da mudança e pode decidir." },
          { t: "“Você nos concede licença para usar suas fotos em propagandas.”", c: "A", why: "A sua foto pode aparecer em propaganda." },
          { t: "“Coletamos apenas o seu e-mail para criar a conta.”", c: "T", why: "Pede só o necessário." }],
        explicacao: "⚠️ Atenção: vender dados, localização o tempo todo, licença para usar suas fotos. 👍 Tranquila: dá para excluir a conta, avisa antes de mudar, pede só o necessário." },
      { id: "m4-sim-direitos", tipo: "sim_pc", titulo: "⚖️ Simulador: use os seus direitos da LGPD",
        enunciado: "<p>Na conta do aplicativo inventado <strong>FotoTop</strong>, use os seus direitos: saber, corrigir e apagar. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app/conta",
        web: {
          "fototop.app/conta": { titulo: "FotoTop: minha conta", html: "<p>👤 <b>Minha conta</b></p><button data-ev='ver' data-k='pg:ver' data-ir='fototop.app/meus-dados'>👁️ Ver meus dados</button><button data-ev='apagar' data-k='pg:apagar' data-ir='fototop.app/apagar'>🗑️ Apagar minha conta</button>" },
          "fototop.app/meus-dados": { titulo: "FotoTop: meus dados", html: "<p><b>Dados que guardamos sobre você:</b></p><p>Nome: Ana Souza</p><p>Data de nascimento: <b>01/01/1990</b> (errada!)</p><label class='campo'>Corrigir data de nascimento<input data-campo='nasc' data-k='pg:nasc' placeholder='dd/mm/aaaa'></label><button data-ev='corrigir' data-k='pg:corrigir' data-ir='fototop.app/conta' class='pri'>Salvar correção</button>" },
          "fototop.app/apagar": { titulo: "FotoTop: apagar conta", html: "<p>Tem certeza? Suas fotos e dados serão apagados.</p><button data-ev='confirmar' data-k='pg:confirmar' class='pri'>Sim, apagar meus dados</button>" }
        },
        passos: [
          { faca: "Direito de <b>SABER</b>: clique em <b>👁️ Ver meus dados</b>.", ok: "pagina:ver", onde: "pg:ver" },
          { faca: "A data de nascimento está errada! Direito de <b>CORRIGIR</b>: digite uma data no formato <b>dd/mm/aaaa</b> (ex.: 15/03/2013).", ok: { estado: "campo", nome: "nasc", regex: "^\\d{2}/\\d{2}/\\d{4}$" }, onde: "pg:nasc" },
          { faca: "Clique em <b>Salvar correção</b>.", ok: "pagina:corrigir", onde: "pg:corrigir" },
          { faca: "Você desistiu do FotoTop. Direito de <b>APAGAR</b>: clique em <b>🗑️ Apagar minha conta</b>.", ok: "pagina:apagar", onde: "pg:apagar" },
          { faca: "Confirme: <b>Sim, apagar meus dados</b>.", ok: "pagina:confirmar", onde: "pg:confirmar" }
        ],
        fimMsg: "Você usou três direitos da LGPD: saber, corrigir e apagar os seus dados!",
        explicacao: "Pela LGPD (Lei Geral de Proteção de Dados), você tem direito de saber quais dados guardam, corrigir, apagar e retirar o consentimento." },
      { id: "m4-basico-2", tipo: "ligar", titulo: "Os seus direitos pela LGPD: ligue cada direito ao que ele permite",
        enunciado: "<p>Clique no direito e depois no que ele permite fazer.</p>",
        pares: [{ a: "Saber", b: "Perguntar quais dados a empresa tem sobre mim" }, { a: "Corrigir", b: "Pedir para arrumar um dado errado, como o endereço" },
          { a: "Apagar", b: "Pedir para a empresa excluir os meus dados" }, { a: "Retirar o consentimento", b: "Desistir da autorização que eu dei" }],
        explicacao: "A LGPD (Lei Geral de Proteção de Dados) garante: saber, corrigir, pedir para apagar e retirar o consentimento." },
      { id: "m4-basico-3", tipo: "escolha", titulo: "Grátis mesmo?",
        perguntas: [
          { p: "Se o aplicativo é grátis, como ele costuma ganhar dinheiro?", opcoes: ["Com propaganda, usando os meus dados para escolher os anúncios", "Ele nunca ganha dinheiro", "Cobrando da escola"], certo: 0, why: "Serviço grátis costuma ser pago com propaganda e dados." },
          { p: "Clicar em “Li e aceito” sem ler significa:", opcoes: ["Concordar com tudo o que está escrito, mesmo sem ter lido", "Não concordar com nada", "Que posso mudar as regras depois"], certo: 0, why: "É um contrato: o clique vale como concordância." },
          { p: "Chegou o aviso “Atualizamos nossos termos”. O que isso quer dizer?", opcoes: ["O contrato mudou; vale a pena ver o que mudou", "O aplicativo foi apagado", "Nada mudou"], certo: 0 },
          { p: "Para uma criança de 10 anos criar uma conta, o que a LGPD exige?", opcoes: ["A autorização de pelo menos um dos pais ou responsáveis", "Nada, basta clicar em Aceito", "Que ela mostre o CPF"], certo: 0, why: "Para crianças de até 12 anos, a lei exige o consentimento dos pais ou responsáveis." }],
        explicacao: "Grátis costuma ser pago com propaganda e dados; aceitar é concordar com o contrato; aviso de atualização = o contrato mudou; criança de até 12 anos precisa da autorização dos pais." }
    ],
    desafio: [
      { tipo: "info", titulo: "Dois jogos, dois termos de uso",
        html: `<div class="tabela-wrap"><table><thead><tr><th></th><th>🎮 Jogo A</th><th>🎮 Jogo B</th></tr></thead><tbody>
          <tr><td>Dados coletados</td><td>Apelido e e-mail</td><td>Nome, telefone, contatos e localização</td></tr>
          <tr><td>Compartilhamento</td><td>“Não compartilhamos seus dados.”</td><td>“Podemos compartilhar com parceiros.”</td></tr>
          <tr><td>Apagar a conta</td><td>Em Configurações, com os dados</td><td>Não informa</td></tr>
          <tr><td>Mudanças nos termos</td><td>Avisa antes, por e-mail</td><td>“Podem mudar sem aviso.”</td></tr></tbody></table></div>` },
      { tipo: "escolha", titulo: "Qual jogo protege melhor os seus dados?",
        perguntas: [
          { p: "Qual jogo protege melhor os seus dados?", opcoes: ["O Jogo A", "O Jogo B", "Os dois protegem igual"], certo: 0 },
          { p: "Qual é o principal motivo?", opcoes: ["Pede só apelido e e-mail, não compartilha e deixa apagar a conta", "Tem mais fases", "Pede o telefone para mandar prêmios"], certo: 0 },
          { p: "No Jogo B, qual parte é mais preocupante?", opcoes: ["Pega contatos e localização e pode compartilhar com parceiros", "Ter termos de uso", "Pedir um apelido"], certo: 0 }],
        explicacao: "O Jogo A pede só o necessário, não compartilha, deixa apagar a conta e avisa antes de mudar. O Jogo B pega contatos e localização, compartilha com parceiros, não diz como apagar e muda sem aviso." }
    ],
    turbo: [
      {tipo:  "memoria", titulo:  "Jogo da memória: as perguntas antes de aceitar os termos", enunciado: "<p>Vire duas cartas e ache os pares: cada pergunta e o motivo dela.</p>", dicas: ["Releia as 3 perguntas no fim do 💡 Para começar."], pares:  [{a:  "Que dados ele pega?", b:  "Para saber o que o aplicativo vai saber sobre mim"}, {a:  "Com quem ele compartilha?", b:  "Para saber se outras empresas vão receber os meus dados"}, {a:  "Consigo apagar a minha conta?", b:  "Para poder sair e apagar os meus dados quando quiser"}, {a:  "Vai mostrar propaganda?", b:  "Para saber se vão usar os meus gostos para vender coisas"}], explicacao:  "Antes de clicar em “Aceito”, pergunte: que <b>dados</b> ele pega, com quem <b>compartilha</b>, se dá para <b>apagar</b> a conta e se tem <b>propaganda</b>."}
    ],
    vf: [
      { v: true, why: "O clique vale como concordância." },
      { v: false, corrigir: { trecho: "nunca usa os meus dados para nada", opcoes: ["nunca usa os meus dados para nada", "costuma usar os meus dados para propaganda"], certo: "costuma usar os meus dados para propaganda" }, why: "Serviço grátis costuma ser pago com propaganda e dados." },
      { v: true, why: "É a parte do compartilhamento." },
      { v: true, why: "É um direito da LGPD." },
      { v: false, corrigir: { trecho: "nunca podem mudar", opcoes: ["nunca podem mudar", "podem mudar"], certo: "podem mudar" }, why: "Os termos podem ser atualizados; por isso vale ler o aviso." }
    ]
  },

  /* ============ MISSÃO 5 — Permissões dos aplicativos ============ */
  m5: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: o pedido faz sentido?",
        robo: BIT("🔎 A pergunta de ouro", [["O aplicativo <b>precisa</b> disso para fazer o que promete?", "precisa → faz sentido"], ["Jogo de cartas pedindo o microfone? Não precisa.", "não precisa → desconfie", true]]),
        enunciado: "<p>Use a <strong>pergunta de ouro</strong>: a permissão faz sentido para o que o aplicativo faz?</p>",
        colunaItem: "Aplicativo pede…", colunaResp: "Faz sentido?",
        categorias: [{ id: "S", rot: "✅ Faz sentido" }, { id: "N", rot: "❌ Não faz sentido" }],
        itens: [{ t: "🗺️ Mapa pede a localização", c: "S" }, { t: "🔦 Lanterna pede os contatos", c: "N" }, { t: "📸 Câmera de filtros pede a câmera", c: "S" },
          { t: "🧮 Calculadora pede o microfone", c: "N" }, { t: "🎙️ Gravador de áudio pede o microfone", c: "S" }],
        explicacao: "Faz sentido quando é a função do aplicativo; lanterna e calculadora não precisam de contatos nem de microfone." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada permissão e o que ela acessa",
        pares: [{ a: "📷 Câmera", b: "Tirar fotos e gravar vídeos" }, { a: "🎤 Microfone", b: "Ouvir e gravar o som" }, { a: "📍 Localização", b: "Saber onde você está" },
          { a: "👥 Contatos", b: "Ver os nomes e telefones da agenda" }, { a: "🖼️ Fotos e arquivos", b: "Ver as suas fotos e documentos" }],
        explicacao: "Câmera, microfone, localização, contatos e fotos." },
      { tipo: "escolha", titulo: "As escolhas",
        perguntas: [
          { p: "“Permitir só durante o uso” quer dizer que o aplicativo usa a permissão:", opcoes: ["Só enquanto está aberto na tela", "O tempo todo", "Nunca"], certo: 0 },
          { p: "Você permitiu a localização e se arrependeu. Dá para mudar?", opcoes: ["Dá: nas Configurações do celular", "Não: é para sempre", "Só trocando de celular"], certo: 0 },
          { p: "Um jogo novo pede acesso aos contatos sem motivo. O melhor:", opcoes: ["Não permitir", "Permitir tudo para jogar logo", "Mandar os contatos por mensagem"], certo: 0 }],
        explicacao: "Só durante o uso = com o aplicativo aberto; dá para mudar nas Configurações; sem motivo, não permita." },
      { tipo: "classificar", modo: "tabela", titulo: "Que escolha combina?",
        colunaItem: "Situação", colunaResp: "Escolha",
        categorias: [{ id: "U", rot: "⏱️ Só durante o uso" }, { id: "P", rot: "❓ Perguntar sempre" }, { id: "N", rot: "🚫 Não permitir" }],
        itens: [{ t: "O mapa precisa da localização enquanto você navega", c: "U" }, { t: "A lanterna quer os seus contatos", c: "N" }, { t: "Um aplicativo que usa a câmera de vez em quando, e você quer decidir cada vez", c: "P" }],
        explicacao: "Mapa: só durante o uso. Lanterna e contatos: não permitir. Quer decidir cada vez: perguntar sempre." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Configure as permissões de três aplicativos",
        enunciado: "<p>Para cada aplicativo e permissão, escolha a melhor opção. Use a pergunta de ouro.</p>",
        dicas: ["Faz sentido para o que o aplicativo faz? Se sim, “só durante o uso”; se não, “não permitir”."],
        colunas: ["Aplicativo · permissão", "Melhor escolha"],
        linhas: [["🗺️ Mapa · Localização", { op: ["Só durante o uso", "Não permitir"], r: "Só durante o uso" }],
          ["🔦 Lanterna · Localização", { op: ["Só durante o uso", "Não permitir"], r: "Não permitir" }],
          ["📸 Câmera de filtros · Câmera", { op: ["Só durante o uso", "Não permitir"], r: "Só durante o uso" }],
          ["📸 Câmera de filtros · Contatos", { op: ["Só durante o uso", "Não permitir"], r: "Não permitir" }]],
        explicacao: "Dê só o que a função do aplicativo precisa, e só durante o uso." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 O caminho para mudar uma permissão (Android)",
        enunciado: "<p>Coloque o caminho em ordem. Ele está no 💡 Para começar (em muitos celulares Android).</p>",
        itens: ["Abrir as Configurações", "Tocar em Aplicativos", "Escolher o aplicativo", "Tocar em Permissões", "Mudar a permissão"],
        explicacao: "Configurações → Aplicativos → (o aplicativo) → Permissões → mudar." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "precisa ver os seus contatos", opcoes: ["precisa ver os seus contatos", "não precisa ver os seus contatos"], certo: "não precisa ver os seus contatos" }, why: "Lanterna só precisa da luz." },
      { v: true, why: "É a função dele." },
      { v: false, corrigir: { trecho: "nunca dá para mudar", opcoes: ["nunca dá para mudar", "dá para mudar nas Configurações"], certo: "dá para mudar nas Configurações" }, why: "Dá para revisar sempre." },
      { v: true, why: "Só com o aplicativo aberto." }
    ]
  },

  /* ============ MISSÃO 6 — Pegada digital ============ */
  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: pegada ativa ou passiva?",
        robo: BIT("👣 A pergunta", [["Eu publiquei <b>de propósito</b>? Pegada ativa.", "publiquei → ativa"], ["Foi coletado <b>sem eu ver</b>? Pegada passiva.", "coletado → passiva", true]]),
        enunciado: "<p>Use a tabela <strong>Tipo · O que é · Exemplos</strong>.</p>",
        colunaItem: "Rastro", colunaResp: "Pegada…",
        categorias: [{ id: "A", rot: "✍️ Ativa" }, { id: "P", rot: "👀 Passiva" }],
        itens: [{ t: "O comentário no vídeo do youtuber", c: "A" }, { t: "O histórico de pesquisa", c: "P" }, { t: "A foto que você postou", c: "A" },
          { t: "A localização registrada pelo celular", c: "P" }, { t: "A curtida num post", c: "A" }, { t: "O tempo que você passou em cada vídeo", c: "P" }],
        explicacao: "Ativa: comentário, foto, curtida. Passiva: histórico, localização, tempo em cada vídeo." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que cuida bem da sua pegada?",
        robo: BIT("🔎 A pergunta", [["Eu teria <b>orgulho</b> disso daqui a 10 anos?", "orgulho → cuida"], ["Algo que expõe ou que eu não postaria de novo? Não cuida.", "arrependimento → não", true]]),
        enunciado: "<p>Marque <strong>só</strong> as atitudes que cuidam bem da pegada digital.</p>",
        opcoes: [{ t: "Pesquisar o próprio nome de vez em quando", certo: true }, { t: "Deixar a conta privada", certo: true }, { t: "Apagar posts antigos que não te representam", certo: true }, { t: "Postar os seus trabalhos e conquistas", certo: true },
          { t: "Xingar nos comentários, porque “ninguém vai lembrar”", certo: false, why: "O comentário fica, e alguém pode ter tirado print." }],
        explicacao: "Pesquisar o nome, conta privada, apagar o que não representa e postar coisas boas cuidam da pegada." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Pegada digital", b: "Os rastros que você deixa na internet" }, { a: "Rastro", b: "Marca de por onde alguém passou" }, { a: "Histórico", b: "Lista do que você pesquisou ou visitou" }, { a: "Conta privada", b: "Só as pessoas aceitas veem" }],
        explicacao: "Pegada digital, rastro, histórico e conta privada." },
      { tipo: "escolha", titulo: "Rastros",
        perguntas: [
          { p: "Por quanto tempo a pegada digital costuma ficar?", opcoes: ["Por muito tempo", "Só um dia", "Só enquanto o celular está ligado"], certo: 0 },
          { p: "No futuro, quem pode pesquisar o seu nome na internet?", opcoes: ["Uma escola, um curso ou uma empresa", "Ninguém", "Só a família"], certo: 0 }],
        explicacao: "Fica por muito tempo e pode ser vista por escolas, cursos e empresas." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 A pegada fica melhor ou pior?",
        enunciado: "<p>Para cada atitude, decida o que acontece com a pegada digital.</p>",
        app: "👣 Pegada", botoes: [{ id: "M", rot: "🌟 Melhor" }, { id: "P", rot: "⚠️ Pior" }],
        itens: [{ de: "Post", t: "Publicar o vídeo do projeto de Ciências da turma", c: "M" }, { de: "Comentário", t: "Zombar de alguém num vídeo famoso", c: "P", why: "Fica gravado e mostra desrespeito." },
          { de: "Conta", t: "Deixar a conta privada", c: "M" }, { de: "Post", t: "Postar a foto com o endereço de casa aparecendo", c: "P" }],
        okMsg: "Pegada caprichada! 👣",
        explicacao: "Projeto e conta privada melhoram; zombar e expor o endereço pioram." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória da pegada digital",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Pegada ativa", b: "O que você publica" }, { a: "Pegada passiva", b: "O que coletam sem você ver" }, { a: "Histórico", b: "O que você pesquisou" }, { a: "Conta privada", b: "Só aceitos veem" }],
        explicacao: "Ativa, passiva, histórico e conta privada." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "é pegada passiva", opcoes: ["é pegada passiva", "é pegada ativa"], certo: "é pegada ativa" }, why: "Você publicou de propósito." },
      { v: true, why: "É coletado sem você ver." },
      { v: false, corrigir: { trecho: "some depois de um dia", opcoes: ["some depois de um dia", "fica por muito tempo"], certo: "fica por muito tempo" }, why: "Rastros ficam." },
      { v: true, why: "Coisas boas também viram pegada." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Checagem de fatos ============ */
  m7: {
    pratica: [
      { tipo: "ordenar", titulo: "Mão na massa: os passos da checagem",
        robo: BIT("🔎 Outro exemplo: um boato de saúde", [["Primeiro eu <b>desconfio</b>: é bom demais para ser verdade?", "1 · desconfiar"], ["Depois leio tudo, procuro a fonte original, vejo a data e busco em outras fontes.", "2 · 3 · 4 · 5 ✔", true]]),
        enunciado: "<p>Coloque os passos na ordem da tabela <strong>Os passos da checagem</strong>.</p>",
        itens: ["Desconfiar", "Ler além do título", "Procurar a fonte original", "Ver a data", "Buscar em outras fontes e nas agências de checagem"],
        explicacao: "Desconfiar → ler além do título → fonte original → data → outras fontes e agências." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Checagem de fatos", b: "Conferir se uma informação é verdadeira" }, { a: "Agência de checagem", b: "Jornalismo que confere informações" }, { a: "Fonte original", b: "Quem deu a informação primeiro" }, { a: "Busca reversa de imagem", b: "Descobrir onde a foto já apareceu" }],
        explicacao: "Checagem, agência, fonte original e busca reversa." },
      { tipo: "sinais", titulo: "Como checar uma foto suspeita?",
        enunciado: "<p>Chegou a foto de uma “enchente de hoje” na cidade. Marque <strong>só</strong> o que ajuda a checar.</p>",
        opcoes: [{ t: "Fazer a busca reversa de imagem", certo: true }, { t: "Procurar a notícia em outras fontes", certo: true }, { t: "Ver se as agências de checagem falaram dela", certo: true },
          { t: "Repassar e perguntar no grupo se é verdade", certo: false, why: "Repassar espalha antes de checar." }],
        explicacao: "Busca reversa, outras fontes e agências de checagem ajudam." },
      { tipo: "escolha", titulo: "Checagem",
        perguntas: [
          { p: "Qual destas é uma agência de checagem brasileira?", opcoes: ["Aos Fatos", "Corrente do Zap", "Perfil Exclusivo!!!"], certo: 0 },
          { p: "Uma foto antiga pode aparecer como se fosse de hoje?", opcoes: ["Pode: por isso vejo a origem e a data", "Não, nunca", "Só se for preto e branco"], certo: 0 }],
        explicacao: "Aos Fatos é uma agência de checagem; fotos antigas podem circular como novas." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Cheque a notícia",
        enunciado: "<p>Circula no grupo: “<strong>Ponte da cidade desabou HOJE!</strong>”, com uma foto. A busca reversa mostra que a foto é de <strong>2015</strong>, de <strong>outro estado</strong>. Nenhum jornal da região fala do assunto.</p>",
        dicas: ["Use a data e a origem da foto."],
        perguntas: [
          { p: "A notícia é:", opcoes: ["Falsa: a foto é antiga e de outro lugar", "Verdadeira: tem foto", "Impossível de checar"], certo: 0 },
          { p: "Que passo revelou a verdade?", opcoes: ["A busca reversa de imagem e a data", "O número de compartilhamentos", "O título em maiúsculas"], certo: 0 },
          { p: "O que fazer agora?", opcoes: ["Não repassar e avisar o grupo, com calma, o que você descobriu", "Repassar mesmo assim", "Apagar o grupo"], certo: 0 }],
        explicacao: "Foto antiga e de outro lugar = falsa; a busca reversa e a data mostraram; não repasse e avise com calma." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da checagem",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["CHECAGEM", "AGENCIA", "ORIGINAL", "DATA", "TITULO"],
        pistas: ["Conferir se é verdade", "Lupa e Aos Fatos são… de checagem (sem acento)", "A fonte que deu a informação primeiro", "Mostra se a notícia é velha", "A frase grande da notícia (sem acento)"], tam: 10,
        explicacao: "Checagem, agência, original, data e título." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "Basta ler o título", opcoes: ["Basta ler o título", "É preciso ler além do título"], certo: "É preciso ler além do título" }, why: "O texto pode não confirmar o título." },
      { v: true, why: "Por isso se checa a origem." },
      { v: true, why: "É o trabalho delas." },
      { v: false, corrigir: { trecho: "não importa", opcoes: ["não importa", "importa muito"], certo: "importa muito" }, why: "Notícia velha pode parecer nova." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: O algoritmo do feed ============ */
  m8: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: o que o algoritmo entende?",
        robo: BIT("🎛️ Como eu ligo", [["Eu leio a coluna <b>O que o algoritmo entende</b> da tabela.", "ação → entende"], ["Curtiu → “mostre mais disso”.", "❤️ → mais disso ✔", true]]),
        enunciado: "<p>Ligue cada ação ao que o algoritmo entende.</p>",
        pares: [{ a: "❤️ Curtir", b: "Gostou: mostre mais disso" }, { a: "⏱️ Assistir até o fim", b: "Prendeu a atenção: mostre mais" }, { a: "⏭️ Passar rápido", b: "Não interessou tanto" }, { a: "🙅 “Não tenho interesse”", b: "Mostre menos disso" }],
        explicacao: "Curtir e assistir até o fim = mais; passar rápido = interessou pouco; “Não tenho interesse” = menos." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que você pode fazer para treinar o algoritmo?",
        enunciado: "<p>Marque <strong>só</strong> o que ajuda você a controlar o seu feed.</p>",
        opcoes: [{ t: "Seguir perfis diferentes", certo: true }, { t: "Usar o “Não tenho interesse”", certo: true }, { t: "Pesquisar outros assuntos", certo: true }, { t: "Fazer pausas", certo: true },
          { t: "Assistir até o fim tudo o que não gosta", certo: false, why: "Assistir até o fim faz aparecer mais disso." }],
        explicacao: "Seguir perfis diferentes, “Não tenho interesse”, pesquisar outros assuntos e fazer pausas." },
      { tipo: "escolha", titulo: "O objetivo do algoritmo",
        perguntas: [
          { p: "O algoritmo do feed costuma querer que você:", opcoes: ["Fique mais tempo no aplicativo", "Desligue o celular", "Leia um livro"], certo: 0 },
          { p: "Mais tempo no aplicativo significa:", opcoes: ["Mais propaganda vista", "Menos propaganda", "Nada"], certo: 0 }],
        explicacao: "Mais tempo = mais propaganda." },
      { tipo: "classificar", modo: "tabela", titulo: "Mais ou menos disso?",
        colunaItem: "Ação", colunaResp: "O feed vai mostrar…",
        categorias: [{ id: "M", rot: "➕ Mais disso" }, { id: "N", rot: "➖ Menos disso" }],
        itens: [{ t: "Assistir o vídeo de culinária duas vezes", c: "M" }, { t: "Tocar em “Não tenho interesse” num vídeo de terror", c: "N" }, { t: "Comentar e compartilhar o vídeo de futebol", c: "M" }, { t: "Passar rápido pelos vídeos de fofoca", c: "N" }],
        explicacao: "Assistir, comentar e compartilhar = mais; “Não tenho interesse” e passar rápido = menos." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O feed da Bia: por que apareceu isso?",
        enunciado: "<p>A Bia assistiu <strong>três vídeos de skate até o fim</strong> ontem e <strong>comentou</strong> em um deles. Hoje o feed dela está cheio de skate.</p>",
        perguntas: [
          { p: "Por que o feed mudou?", opcoes: ["O algoritmo entendeu que skate prendeu a atenção dela", "Foi sorte", "O celular quebrou"], certo: 0 },
          { p: "Se ela quiser ver menos skate, o que pode fazer?", opcoes: ["Tocar em “Não tenho interesse” e pesquisar outros assuntos", "Assistir mais skate até o fim", "Comentar em todos"], certo: 0 }],
        explicacao: "Assistir até o fim e comentar = mais disso; “Não tenho interesse” e outros assuntos mudam o feed." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o algoritmo do feed",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O **algoritmo** de recomendação escolhe o que aparece no **feed**, observando o que você curte e assiste até o fim. O objetivo costuma ser fazer você ficar mais **tempo**, vendo mais **propaganda**. Você treina o algoritmo com o “Não tenho **interesse**” e fazendo pausas.",
        explicacao: "Algoritmo, feed, tempo, propaganda e interesse." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "mostra tudo na ordem em que foi postado", opcoes: ["mostra tudo na ordem em que foi postado", "é escolhido por um algoritmo"], certo: "é escolhido por um algoritmo" }, why: "O algoritmo escolhe." },
      { v: true, why: "Prendeu a atenção." },
      { v: true, why: "Mostre menos disso." },
      { v: true, why: "Mais tempo, mais propaganda." },
      { v: false, corrigir: { trecho: "Não dá para influenciar", opcoes: ["Não dá para influenciar", "Dá para influenciar"], certo: "Dá para influenciar" }, why: "Você treina o algoritmo." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ordenar", de: "m1", titulo: "M1 · As 4 perguntas", enunciado: "<p>Coloque em ordem.</p>", itens: ["É verdade?", "É meu para compartilhar?", "Protege as pessoas?", "Protege você?"], explicacao: "Verdade, meu, pessoas, você." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", de: "m2", titulo: "M2 · Fontes", enunciado: "<p>Mais ou menos confiável?</p>", categorias: [{ id: "M", rot: "Mais confiável" }, { id: "N", rot: "Menos confiável" }], itens: [{ t: "Jornal conhecido, com autor e data", c: "M" }, { t: "Corrente sem autor", c: "N" }], explicacao: "Autor e data = mais confiável." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Bolha", perguntas: [{ p: "Para furar a bolha:", opcoes: ["Siga fontes diferentes", "Curta só o que concorda"], certo: 0 }], explicacao: "Fontes diferentes." },
      { tipo: "relembre", de: "m4" },
      { tipo: "ligar", de: "m4", titulo: "M4 · LGPD", enunciado: "<p>Ligue cada direito.</p>", pares: [{ a: "Saber", b: "Quais dados a empresa tem" }, { a: "Apagar", b: "Excluir os meus dados" }], explicacao: "Saber e apagar." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Permissões", enunciado: "<p>Faz sentido?</p>", categorias: [{ id: "S", rot: "Faz sentido" }, { id: "N", rot: "Não faz sentido" }], itens: [{ t: "Mapa pede a localização", c: "S" }, { t: "Lanterna pede os contatos", c: "N" }], explicacao: "Só o que a função precisa." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", de: "m6", titulo: "M6 · Pegada", enunciado: "<p>Ativa ou passiva?</p>", categorias: [{ id: "A", rot: "Ativa" }, { id: "P", rot: "Passiva" }], itens: [{ t: "A foto que você postou", c: "A" }, { t: "O histórico de pesquisa", c: "P" }], explicacao: "Postou = ativa; coletado = passiva." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Checagem", perguntas: [{ p: "Para descobrir de onde veio uma foto:", opcoes: ["Busca reversa de imagem", "Repassar no grupo"], certo: 0 }], explicacao: "Busca reversa." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Algoritmo", perguntas: [{ p: "Assistir até o fim faz o feed mostrar:", opcoes: ["Mais disso", "Menos disso"], certo: 0 }], explicacao: "Mais disso." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: cuida ou descuida?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "📱 Redes sociais", botoes: [{ id: "C", rot: "✅ Cuida" }, { id: "D", rot: "🚩 Descuida" }],
        itens: [{ de: "", t: "Conferir a data e o autor antes de repassar", c: "C" }, { de: "", t: "Dar acesso aos contatos para a lanterna", c: "D" }, { de: "", t: "Ler os termos antes de clicar em “Aceito”", c: "C" },
          { de: "", t: "Postar foto com o uniforme e a localização em tempo real", c: "D" }, { de: "", t: "Seguir fontes com pontos de vista diferentes", c: "C" }],
        okMsg: "Você está pronto para a prova! 📱",
        explicacao: "Conferir, ler os termos e seguir fontes diferentes cuidam; dar permissões sem sentido e expor a localização descuidam." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["PRINT", "FONTE", "BOLHA", "TERMOS", "PERMISSAO", "PEGADA"],
        pistas: ["Guarda o post mesmo se apagarem", "De onde vem a informação", "Só ver o parecido com o que curte", "O contrato do aplicativo", "Acesso à câmera ou à localização (sem acento)", "Os rastros que você deixa"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-3bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Compartilhar", [{ p: "Antes de postar a foto de um colega, é preciso:", opcoes: ["Pedir permissão", "Marcar todos", "Colocar filtro"], certo: 0 }, { p: "A localização em tempo real mostra:", opcoes: ["Onde você está agora", "A sua idade", "O seu nome"], certo: 0 }]), pega("m1"),
    Q("m2", "Fontes", [{ p: "Fonte é:", opcoes: ["De onde vem a informação", "O número de curtidas", "A cor do site"], certo: 0 }, { p: "Sites do governo brasileiro terminam em:", opcoes: [".gov.br", ".xyz", ".jogo"], certo: 0 }]), pega("m2"),
    Q("m3", "Bolhas", [{ p: "Acreditar mais rápido no que já pensamos é:", opcoes: ["Viés de confirmação", "Pegada passiva", "Permissão"], certo: 0 }, { p: "Para furar a bolha:", opcoes: ["Seguir fontes diferentes", "Bloquear quem discorda", "Curtir só o igual"], certo: 0 }]), pega("m3"),
    Q("m4", "Termos de uso", [{ p: "Clicar em “Li e aceito” é:", opcoes: ["Concordar com um contrato", "Não concordar com nada", "Apagar a conta"], certo: 0 }, { p: "A LGPD me dá o direito de:", opcoes: ["Pedir para apagar os meus dados", "Usar os dados dos outros", "Nunca ler os termos"], certo: 0 }]), pega("m4"),
    Q("m5", "Permissões", [{ p: "Um aplicativo de lanterna pedindo os contatos:", opcoes: ["Não faz sentido", "Faz sentido", "É obrigatório"], certo: 0 }, { p: "Dá para mudar as permissões depois?", opcoes: ["Dá, nas Configurações", "Não", "Só no computador"], certo: 0 }]), pega("m5"),
    Q("m6", "Pegada digital", [{ p: "O histórico de pesquisa é pegada:", opcoes: ["Passiva", "Ativa", "Nenhuma"], certo: 0 }, { p: "A pegada digital fica:", opcoes: ["Por muito tempo", "Só um dia", "Só uma hora"], certo: 0 }]), pega("m6"),
    Q("m7", "Checagem", [{ p: "Para descobrir onde uma foto já apareceu:", opcoes: ["Busca reversa de imagem", "Repassar no grupo", "Curtir"], certo: 0 }, { p: "Uma agência de checagem brasileira é:", opcoes: ["Agência Lupa", "Corrente do Zap", "Perfil Exclusivo"], certo: 0 }]), pega("m7"),
    Q("m8", "Algoritmo", [{ p: "Quem escolhe o que aparece no feed é o:", opcoes: ["Algoritmo de recomendação", "Professor", "Roteador"], certo: 0 }, { p: "Para ver menos de um assunto:", opcoes: ["“Não tenho interesse”", "Assistir até o fim", "Comentar"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 3: 3º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-3bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why, de]) => ({ de: de || "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });
  const mem = (titulo, pares, expl) => ({ tipo: "memoria", titulo, enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>", pares: pares.map(([a, b]) => ({ a, b })), porRodada: 3, explicacao: expl });
  const sin = (titulo, enun, certos, errados, expl) => ({ tipo: "sinais", titulo, enunciado: `<p>${enun}</p>`, opcoes: [...certos.map(t => ({ t, certo: true })), ...errados.map(([t, why]) => ({ t, certo: false, why }))], explicacao: expl });
  const perm = (titulo, enun, itens, expl) => ({ tipo: "permissoes", titulo, enunciado: `<p>${enun}</p>`, itens: itens.map(([ic, app, pede, c, why]) => ({ ic, app, pede, c, why })), explicacao: expl });

  /* ---------- M1 · compartilhar com responsabilidade ---------- */
  A.m1.gancho = { html: "<p>📸 O Leo postou uma foto da turma na frente da escola, todos de uniforme, com a legenda “agora no pátio” e a localização ligada.</p><p>🤔 O que essa foto conta sobre ele e os amigos, sem ninguém perceber? Dá para apagar depois, se der problema?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 3º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Uma foto da tela do celular, que pode ser guardada e espalhada, é um…", ["Print", "Boleto", "Uniforme"], "É o <b>print</b>."],
    ["Postar a foto de um colega sem pedir…", ["Não é certo: peça permissão a quem aparece", "É sempre permitido", "Só é errado de noite"], "Peça <b>permissão</b> a quem aparece."],
    ["Uma foto com o uniforme da escola revela…", ["Onde você estuda", "A sua senha", "O seu signo"], "O uniforme mostra <b>onde você estuda</b>."])];
  A.m1.aplicar = [
    msg("🛠️ Na vida real: compartilhar ou não?", "📲 Grupo da turma", [["S", "✅ Pode compartilhar"], ["N", "🚫 Não compartilhe"]],
      "Use as 4 perguntas: é verdade? É meu para compartilhar? Protege as pessoas? Protege você?",
      [["O vídeo de um colega caindo da bicicleta, sem ele saber", "N", "Não é seu e pode humilhar."], ["A foto do cartaz da feira de ciências que a sua equipe fez", "S", "É seu e não expõe ninguém."],
        ["Uma notícia chocante sem autor nem data", "N", "Pode ser boato."], ["Uma selfie com o número da sua casa aparecendo", "N", "Mostra onde você mora: corte essa parte ou não poste."], ["A foto do bolo que você fez", "S", "É seu e não expõe ninguém."]],
      "Compartilhou com responsabilidade! 📲", "Antes de compartilhar: é verdade? É meu? Protege as pessoas? Protege você?"),
    VIDA(
      ["Você postou e apagou 1 minuto depois. Está resolvido?", ["Talvez não: alguém pode ter tirado print ou repassado", "Sim, sempre", "Só se ninguém curtiu"], "Desfazer pode ser impossível: alguém pode ter tirado <b>print</b>."],
      ["Postar a <b>localização em tempo real</b> revela…", ["Onde você está agora", "A sua idade", "Nada"], "Mostra <b>onde você está agora</b>."],
      ["Pelo ECA Digital (Lei nº 15.211/2025), as contas de quem tem até 16 anos nas redes sociais…", ["Precisam estar ligadas a um responsável", "São proibidas para sempre", "Não têm regra nenhuma"], "Precisam estar <b>ligadas a um responsável</b>."])
  ];
  mais("m1", "desafio",
    msg("🔍 O que a foto revela?", "📸 Detetive de fotos", [["E", "🏫 Onde estuda"], ["M", "🏠 Onde mora"], ["A", "📍 Onde está agora"], ["D", "🎫 Dados para golpistas"]],
      "Cada detalhe da foto revela o quê?",
      [["Camiseta do uniforme com o nome da escola", "E", "Mostra onde você estuda."], ["O número da casa no portão", "M", "Mostra onde você mora."],
        ["“Estou na praça agora!” com a localização", "A", "Mostra onde você está."], ["O boleto em cima da mesa", "D", "Golpistas usam esses dados."], ["A fachada da sua casa", "M", "Mostra onde você mora."]],
      "Olho de detetive! 🔍", "Detalhes pequenos expõem você: confira a foto antes de postar."));
  mais("m1", "turbo",
    rota("✅ As 4 perguntas antes de compartilhar", "Coloque as perguntas <b>na ordem</b> do 💡 Para começar.",
      [["✅", "É verdade?"], ["🙋", "É meu para compartilhar?"], ["🛡️", "Protege as pessoas?"], ["🏠", "Protege você?"]],
      "Pronto para compartilhar com cuidado! ✅", "Se a resposta for “não” para alguma, não compartilhe (ou corte o que mostra demais)."));

  /* ---------- M2 · fontes confiáveis ---------- */
  A.m2.gancho = { html: "<p>📲 No grupo da família chegou: “URGENTE!!! A ESCOLA VAI FECHAR AMANHÃ, COMPARTILHE ANTES QUE APAGUEM!!!”. Sem nome, sem data, sem link.</p><p>🤔 Acreditar? Repassar? Como saber se é verdade?</p>" };
  A.m2.aplicar = [
    msg("🛠️ Na vida real: confiável ou não?", "📰 Notícias recebidas", [["C", "✅ Mais confiável"], ["M", "⚠️ Menos confiável"]],
      "Use as 5 perguntas: quem escreveu? Onde foi publicado? Quando? Tem provas? Outras fontes confirmam?",
      [["Notícia no site de um jornal conhecido, com autor e data", "C", "Tem autor, data e lugar conhecido."], ["Corrente sem autor: “compartilhe antes que apaguem!!!”", "M", "Sem autor e com sinal de alerta."],
        ["Informação no site oficial do governo, terminado em .gov.br", "C", "Site oficial."], ["Print sem link, de origem desconhecida", "M", "Não dá para conferir a origem."], ["Áudio de “um amigo de um amigo”", "M", "Sem fonte que dê para conferir."]],
      "Detetive de fontes! 📰", "A fonte mais confiável tem autor, data, lugar oficial ou conhecido e detalhes que dá para conferir."),
    VIDA(
      ["“Compartilhe antes que apaguem!” é…", ["Um sinal de alerta", "Uma prova de que é verdade", "Uma fonte oficial"], "É um <b>sinal de alerta</b>."],
      ["Um site que termina em <b>.gov.br</b> é…", ["Um site oficial do governo", "Um site falso", "Um jogo"], "É <b>site oficial</b>."],
      ["Uma notícia velha pode parecer nova. Para conferir, você olha…", ["A data", "A cor do título", "O tamanho da letra"], "Olhe a <b>data</b>."])
  ];
  mais("m2", "desafio",
    sin("🚨 Os sinais de alerta", "Marque só os <b>sinais de alerta</b> de uma notícia.",
      ["Título em MAIÚSCULAS com muitos “!!!”", "“Compartilhe antes que apaguem”", "Nenhuma data", "Nenhum autor"],
      [["Autor com nome e data da publicação", "É bom sinal."], ["Link para a fonte oficial", "Ajuda a conferir."]],
      "Maiúsculas, “!!!”, pressa para compartilhar, sem data e sem autor: desconfie."));
  mais("m2", "turbo",
    rota("🔎 As 5 perguntas da fonte", "Coloque as perguntas <b>na ordem</b> do 💡 Para começar.",
      [["👤", "Quem escreveu?"], ["🏢", "Onde foi publicado?"], ["📅", "Quando?"], ["📚", "Tem provas?"], ["🔁", "Outras fontes confirmam?"]],
      "Fonte conferida! 🔎", "Quem, onde, quando, provas e outras fontes."));

  /* ---------- M3 · vieses e bolhas ---------- */
  A.m3.gancho = { html: "<p>⚽ Depois do clássico, cada torcida só acreditava nas notícias boas do próprio time e jurava que “todo mundo” concordava com ela.</p><p>🤔 Por que a gente acredita mais rápido no que combina com o que já pensa? E por que o celular parece mostrar só gente que concorda com a gente?</p>" };
  A.m3.aplicar = [
    msg("🛠️ Na vida real: dentro ou fora da bolha?", "📱 Rede social", [["D", "🫧 Dentro da bolha"], ["F", "🌍 Fura a bolha"]],
      "Cada atitude deixa a pessoa dentro da bolha ou ajuda a furar a bolha?",
      [["Seguir só perfis que pensam igual a mim", "D", "Só vejo mais do mesmo."], ["Procurar “quem discorda disso e por quê?”", "F", "Busca o outro lado."],
        ["Acreditar na hora porque a notícia combina comigo", "D", "É o viés de confirmação."], ["Conversar com respeito com quem pensa diferente", "F", "Ouve outros argumentos."], ["Conferir duas vezes a notícia que agrada demais", "F", "Desconfia do que é perfeito demais."]],
      "Bolha furada! 🌍", "Seguir fontes diferentes, procurar o outro lado, desconfiar do que agrada demais e conversar com quem pensa diferente."),
    VIDA(
      ["Acreditar mais rápido no que combina com o que a gente já pensa é…", ["Viés de confirmação", "Bolha de sabão", "Checagem"], "É o <b>viés de confirmação</b>."],
      ["Só ver nas redes conteúdos parecidos com os que você curte é estar…", ["Numa bolha (de filtro)", "Fora da internet", "Num site oficial"], "É a <b>bolha</b>."],
      ["A notícia é perfeita para o que eu penso. O que fazer?", ["Conferir duas vezes", "Compartilhar na hora", "Ignorar quem discorda"], "<b>Desconfie do que agrada demais</b>: confira duas vezes."])
  ];
  mais("m3", "desafio",
    mem("🧩 Jogo da memória das bolhas", [["Viés de confirmação", "Acreditar rápido no que combina comigo"], ["Bolha de filtro", "Ver só mais do mesmo"], ["Ponto de vista", "O jeito de cada um ver o assunto"],
      ["🔁 Seguir fontes diferentes", "Ver outros pontos de vista"], ["🔎 Procurar o outro lado", "Quem discorda e por quê?"], ["⏸️ Desconfiar do que agrada demais", "Conferir duas vezes"]],
      "Todo mundo tem viés: saber disso já ajuda."));
  mais("m3", "turbo",
    sin("🌍 Como furar a bolha?", "Marque só as atitudes que <b>furam a bolha</b>.",
      ["Seguir jornais e perfis com outros pontos de vista", "Pesquisar quem discorda e por quê", "Ouvir com respeito quem pensa diferente"],
      [["Bloquear todo mundo que discorda", "Aumenta a bolha."], ["Só ver vídeos do mesmo assunto o dia todo", "É mais do mesmo."]],
      "Ver outros pontos de vista fura a bolha."));

  /* ---------- M4 · termos de uso ---------- */
  A.m4.gancho = { html: "<p>📝 Para jogar o jogo novo, a Bia clicou em <b>“Li e aceito”</b> sem ler nada. Uma semana depois, começou a ver propagandas de tênis em todo lugar.</p><p>🤔 O que ela aceitou? Aquele clique vale como contrato?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: o que diz esta frase dos termos?", "📝 Termos de uso do jogo", [["I", "🎂 Idade mínima"], ["D", "📋 Dados coletados"], ["C", "🤝 Compartilhamento"], ["P", "📢 Publicidade"], ["X", "🗑️ Apagar a conta"]],
      "Cada frase dos termos de uso fala de qual assunto?",
      [["“O serviço é destinado a maiores de 13 anos.”", "I", "Fala da idade mínima."], ["“Coletamos nome, telefone, localização e contatos.”", "D", "Fala dos dados coletados."],
        ["“Podemos compartilhar seus dados com parceiros.”", "C", "Outras empresas podem receber os dados."], ["“Usamos seus dados para mostrar anúncios personalizados.”", "P", "Propaganda feita para você."],
        ["“Você pode excluir sua conta em Configurações.”", "X", "Mostra como sair e levar os dados embora."]],
      "Leitor de termos! 📝", "Antes de aceitar: que dados ele pega? Com quem compartilha? Consigo apagar a conta?"),
    VIDA(
      ["Clicar em “Li e aceito” sem ler…", ["Vale como contrato: você concorda com tudo", "Não vale nada", "Só vale para adultos"], "Aquele clique é um <b>contrato</b>."],
      ["Quando o aplicativo é grátis, muitas vezes quem paga é…", ["A propaganda, escolhida com os seus dados", "O professor", "Ninguém"], "É a <b>propaganda</b>; os seus dados ajudam a escolher qual mostrar."],
      ["Pela LGPD, você tem o direito de…", ["Pedir para apagar os seus dados", "Nunca saber quais dados a empresa tem", "Ser obrigado a aceitar tudo"], "A LGPD dá o direito de saber, corrigir, <b>apagar</b> e retirar o consentimento."])
  ];
  mais("m4", "desafio",
    rota("📝 As 3 perguntas antes de aceitar", "Coloque <b>na ordem</b> as 3 perguntas do 💡 Para começar.",
      [["📋", "Que dados ele pega?"], ["🤝", "Com quem ele compartilha?"], ["🗑️", "Consigo apagar a minha conta?"]],
      "Leitura esperta! 📝", "Dados, compartilhamento e apagar a conta: as 3 perguntas antes de aceitar."));
  mais("m4", "turbo",
    mem("🧩 Jogo da memória dos termos", [["Termos de uso", "O contrato do serviço"], ["Consentimento", "A autorização que você dá"], ["LGPD", "Lei Geral de Proteção de Dados"],
      ["Publicidade personalizada", "Propaganda feita com os seus dados"], ["Até 12 anos", "Precisa da autorização de um responsável"], ["“Atualizamos nossos termos”", "O contrato mudou"]],
      "Saber o que você aceitou protege os seus dados."));

  /* ---------- M5 · permissões ---------- */
  A.m5.gancho = { html: "<p>🔦 O Davi baixou um aplicativo de <b>lanterna</b>. Na hora de abrir, ele pediu acesso aos <b>contatos</b> e à <b>localização</b>.</p><p>🤔 Para que uma lanterna precisaria saber quem são os seus amigos e onde você está?</p>" };
  A.m5.aplicar = [
    perm("🛠️ Na vida real: permitir ou negar?", "Cada aplicativo pede uma permissão. Use a pergunta de ouro: <b>faz sentido para o que o aplicativo faz?</b>",
      [["🗺️", "Mapa do ônibus", "sua localização", "S", "Precisa saber onde você está para mostrar o caminho."], ["🔦", "Lanterna", "seus contatos", "N", "Lanterna só precisa da luz do celular."],
        ["📸", "Câmera de filtros", "a câmera", "S", "É a função dele."], ["🧮", "Calculadora", "o microfone", "N", "Calculadora não precisa ouvir você."], ["🎤", "Gravador de voz", "o microfone", "S", "Precisa ouvir para gravar."]],
      "Cada permissão é um acesso a uma parte do celular: só dê o que faz sentido."),
    VIDA(
      ["A pergunta de ouro das permissões é…", ["Essa permissão faz sentido para o que o aplicativo faz?", "O aplicativo é bonito?", "É grátis?"], "<b>Faz sentido</b> para o que o aplicativo faz?"],
      ["O jogo pede a localização, mas só precisa dela na hora de jogar. A melhor opção é…", ["Permitir só durante o uso", "Permitir sempre", "Mandar a localização para os amigos"], "<b>Permitir só durante o uso</b>."],
      ["Você deu uma permissão e se arrependeu. Dá para mudar?", ["Sim, em Configurações → Aplicativos → (o aplicativo) → Permissões", "Não, nunca", "Só comprando outro celular"], "Dá para mudar depois em <b>Configurações</b>."])
  ];
  mais("m5", "desafio",
    perm("🟡 Permitir ou negar? (mais difícil)", "Agora os pedidos são mais escondidos. Pense bem.",
      [["🎮", "Jogo de corrida", "suas fotos e arquivos", "N", "Um jogo de corrida não precisa das suas fotos."], ["💬", "Aplicativo de mensagens", "o microfone, para mandar áudio", "S", "Precisa para gravar o áudio."],
        ["🧾", "Leitor de boletos", "a câmera, para ler o código", "S", "Precisa para ler o código de barras."], ["📖", "Livro de receitas", "seus contatos", "N", "Receita não precisa da sua agenda."], ["🌦️", "Previsão do tempo", "sua localização", "S", "Precisa saber a cidade para mostrar o tempo."]],
      "Câmera, microfone, localização, contatos e fotos: só para quem precisa."));
  mais("m5", "turbo",
    mem("🧩 Jogo da memória das permissões", [["📷 Câmera", "Tirar fotos e gravar vídeos"], ["🎤 Microfone", "Ouvir e gravar o som"], ["📍 Localização", "Saber onde você está"],
      ["👥 Contatos", "Ver a sua agenda"], ["🖼️ Fotos e arquivos", "Ver as suas fotos e documentos"], ["Permitir só durante o uso", "Só quando o aplicativo está aberto"]],
      "Cada permissão abre uma parte do celular."));

  /* ---------- M6 · pegada digital ---------- */
  A.m6.gancho = { html: "<p>🔎 A prima da Júlia foi procurar um estágio. A empresa pesquisou o nome dela na internet e achou um comentário grosseiro que ela tinha escrito 5 anos antes.</p><p>🤔 Como um comentário tão velho ainda estava lá? O que mais fica guardado do que a gente faz na internet?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: pegada ativa ou passiva?", "👣 Pegada digital", [["A", "✍️ Ativa (você publica)"], ["P", "👀 Passiva (é coletado)"]],
      "Cada rastro é pegada ativa (você publicou de propósito) ou passiva (foi coletado sem você ver)?",
      [["Um comentário num vídeo", "A", "Você escreveu de propósito."], ["O histórico das suas pesquisas", "P", "É coletado sem você ver."], ["Uma foto que você postou", "A", "Você publicou."],
        ["O tempo que você passou em cada vídeo", "P", "O aplicativo anota sozinho."], ["A sua localização registrada pelo celular", "P", "Coletada sem você ver."]],
      "Pegada mapeada! 👣", "Pegada ativa é o que você publica; passiva é o que coletam sem você ver."),
    VIDA(
      ["Antes de postar, uma boa pergunta é…", ["“Eu teria orgulho disso daqui a 10 anos?”", "“Vai ter muita curtida?”", "“Está tarde?”"], "Pense: <b>teria orgulho disso daqui a 10 anos?</b>"],
      ["Deixar a conta privada faz com que…", ["Só quem você aceita veja os seus posts", "Ninguém veja nada, nem você", "Todo mundo veja tudo"], "Só <b>quem você aceita</b> vê os posts."],
      ["Postar os seus trabalhos e conquistas…", ["Também vira pegada, uma pegada boa", "Não deixa rastro", "É proibido"], "Coisas boas também viram <b>pegada</b>."])
  ];
  mais("m6", "desafio",
    sin("🧹 Como cuidar da pegada", "Marque só as atitudes que <b>cuidam</b> da sua pegada digital.",
      ["Pesquisar o seu nome de vez em quando", "Apagar posts antigos que não te representam", "Deixar a conta privada", "Postar trabalhos e conquistas"],
      [["Comentar com raiva e apagar depois", "Alguém pode ter visto ou tirado print."], ["Postar tudo sem pensar", "A pegada fica por muito tempo."]],
      "A pegada fica por muito tempo: cuide dela."));
  mais("m6", "turbo",
    msg("⏳ Daqui a 10 anos, você teria orgulho?", "📱 Antes de postar", [["S", "😊 Teria orgulho"], ["N", "😬 Melhor não postar"]],
      "Imagine uma escola ou empresa vendo isto daqui a 10 anos.",
      [["A foto da medalha da olimpíada de matemática", "S", "Uma conquista: pegada boa."], ["Um comentário xingando o juiz do jogo", "N", "Grosseria fica por muito tempo."],
        ["O vídeo do projeto de ciências da turma", "S", "Mostra o que você sabe fazer."], ["Uma piada que humilha um colega", "N", "Machuca e fica registrada."]],
      "Pegada de orgulho! ⏳", "Pense antes: a pegada fica."));

  /* ---------- M7 · checagem de fatos ---------- */
  A.m7.gancho = { html: "<p>🌊 Uma foto de “enchente de hoje em Curionópolis” rodou o grupo da família. Mas tinha algo estranho: as placas da rua estavam escritas em outra língua.</p><p>🤔 Como descobrir de onde veio essa foto? E se for falsa, o que fazer?</p>" };
  A.m7.aplicar = [
    rota("🛠️ Na vida real: checar a foto da enchente", "Coloque os passos da checagem <b>na ordem</b>.",
      [["🤨", "Desconfiar: a notícia é chocante ou boa demais?"], ["📖", "Ler além do título"], ["🔎", "Procurar a fonte original"], ["📅", "Ver a data"], ["🌐", "Buscar em outras fontes e nas agências de checagem"]],
      "Fato checado! ✅", "E para a foto: a busca reversa de imagem mostra onde ela já apareceu antes."),
    VIDA(
      ["Procurar a foto no buscador para ver onde ela já apareceu é a…", ["Busca reversa de imagem", "Bolha de filtro", "Pegada passiva"], "É a <b>busca reversa de imagem</b>."],
      ["Agências como a Agência Lupa, o Aos Fatos e o Fato ou Fake (do g1) fazem…", ["Checagem de fatos, como profissão", "Propaganda", "Jogos"], "São <b>agências de checagem</b>."],
      ["Você descobriu que a notícia é falsa. O certo é…", ["Não repassar e avisar o grupo, com calma", "Repassar com “kkk”", "Ficar quieto e repassar depois"], "<b>Não repassar</b> e avisar o grupo com calma."])
  ];
  mais("m7", "desafio",
    msg("🕵️ Qual passo da checagem?", "✅ Checagem", [["D", "🤨 Desconfiar"], ["T", "📖 Ler além do título"], ["F", "🔎 Fonte original"], ["A", "📅 Ver a data"], ["O", "🌐 Outras fontes"]],
      "Cada atitude é qual passo da checagem?",
      [["“Isso é bom demais para ser verdade…”", "D", "Primeiro passo: desconfiar."], ["Abrir a notícia e ler o texto inteiro", "T", "Ler além do título."], ["Descobrir quem disse isso primeiro", "F", "Fonte original."],
        ["Ver que a notícia é de 2019", "A", "Ver a data."], ["Procurar no site de uma agência de checagem", "O", "Buscar em outras fontes."]],
      "Checador profissional! 🕵️", "Desconfiar, ler além do título, fonte original, data e outras fontes."));
  mais("m7", "turbo",
    mem("🧩 Jogo da memória da checagem", [["Checagem de fatos", "Conferir antes de acreditar"], ["Agência de checagem", "Checa notícias como profissão"], ["Fonte original", "Quem disse primeiro"],
      ["Busca reversa de imagem", "Onde a foto já apareceu"], ["Título", "Pode exagerar o que o texto diz"], ["Notícia falsa", "Não repassar e avisar com calma"]],
      "Checar antes de compartilhar."));

  /* ---------- M8 · o algoritmo do feed ---------- */
  A.m8.gancho = { html: "<p>📱 O Davi assistiu a 3 vídeos de gatinhos até o fim. No dia seguinte, o feed dele estava cheio de gatos!</p><p>🤔 Como o aplicativo “sabe” o que mostrar? Quem escolhe o que aparece primeiro no feed?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: o que o algoritmo entende?", "📱 Feed", [["M", "➕ Mostre mais disso"], ["L", "➖ Mostre menos disso"]],
      "Para cada coisa que você faz, o algoritmo de recomendação entende “mais” ou “menos”?",
      [["Curtir o vídeo", "M", "“Gostou: mostre mais.”"], ["Assistir até o fim e assistir de novo", "M", "“Prendeu a atenção.”"], ["Passar rápido", "L", "“Não interessou tanto.”"],
        ["Tocar em “Não tenho interesse”", "L", "“Mostre menos disso.”"], ["Comentar e compartilhar", "M", "“Interessou muito.”"]],
      "Você entendeu o algoritmo! 📱", "O algoritmo observa o que você faz para escolher o que aparece primeiro."),
    VIDA(
      ["O objetivo do algoritmo do feed costuma ser…", ["Fazer você ficar mais tempo no aplicativo", "Te mandar dormir cedo", "Mostrar tudo em ordem de data"], "Mais tempo no aplicativo = <b>mais propaganda vista</b>."],
      ["Como você pode treinar o algoritmo?", ["Seguindo perfis diferentes e usando o “Não tenho interesse”", "Curtindo tudo", "Nunca saindo do aplicativo"], "Siga perfis diferentes, use o <b>“Não tenho interesse”</b>, pesquise outros assuntos e faça pausas."],
      ["O feed mostra os posts…", ["Na ordem que o algoritmo escolhe", "Sempre na ordem em que foram postados", "Ao acaso"], "Um <b>algoritmo de recomendação</b> escolhe a ordem."])
  ];
  mais("m8", "desafio",
    sin("🧠 Treinar o algoritmo", "Marque só as atitudes que ajudam a <b>treinar o algoritmo</b> a seu favor.",
      ["Seguir perfis diferentes", "Usar o “Não tenho interesse”", "Pesquisar outros assuntos", "Fazer pausas"],
      [["Assistir de novo tudo o que aparece", "Ensina o algoritmo a mostrar mais do mesmo."], ["Curtir vídeos que nem gostou", "Confunde o feed."]],
      "Você também treina o algoritmo."));
  mais("m8", "turbo",
    mem("🧩 Jogo da memória do feed", [["Algoritmo de recomendação", "Escolhe o que aparece no feed"], ["Engajamento", "Curtir, comentar, compartilhar"], ["❤️ Curtir", "Mostre mais disso"],
      ["⏭️ Passar rápido", "Não interessou tanto"], ["🙅 Não tenho interesse", "Mostre menos disso"], ["Mais tempo no aplicativo", "Mais propaganda vista"]],
      "Saber como o feed funciona ajuda a usar com equilíbrio."));
})();
