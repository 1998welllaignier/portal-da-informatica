/* ============================================================
   ATIVIDADES — Informática 8º ano — 2º bimestre de 2027 (Internet por dentro) · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e nenhuma digitação.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
PORTAL.registrarAtividades("informatica-8ano-2027-2bim-trilha", {

  m1: {
    pratica: [
      { tipo: "rota", titulo: "O caminho do pacote",
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>. Veja a tabela <strong>Passo · Onde o pacote está</strong>.</p>",
        etapas: [{ ic: "📱", t: "O seu celular" }, { ic: "📶", t: "O roteador da casa" }, { ic: "🏢", t: "O provedor" }, { ic: "📱", t: "O celular do amigo" }],
        okMsg: "O pacote chegou! 📦", explicacao: "Celular → roteador → provedor → celular do amigo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que é cada um?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Pacote", b: "Pedacinho dos dados" }, { a: "Roteador", b: "Manda os pacotes pelo caminho" }, { a: "Provedor", b: "Empresa da internet" }],
        explicacao: "Pacote = pedacinho. Roteador = manda pelo caminho. Provedor = empresa da internet." },
      { tipo: "escolha", titulo: "Passo 2 · Para que serve o número do pacote?",
        perguntas: [{ p: "O número de cada pacote serve para:", opcoes: ["Juntar os pacotes na ordem certa", "Deixar a foto colorida"], certo: 0 }],
        explicacao: "Com o número, o celular junta os pacotes na ordem." },
      { tipo: "memoria", titulo: "Passo 3 · Jogo da memória",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>",
        pares: [{ a: "Internet", b: "Muitas redes ligadas" }, { a: "Pacote", b: "Pedacinho" }, { a: "Roteador", b: "Aparelho do Wi-Fi" }],
        explicacao: "Internet = redes ligadas. Pacote = pedacinho. Roteador = aparelho do Wi-Fi." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "não têm número", opcoes: ["não têm número", "têm um número"], certo: "têm um número" } }, { v: true }]
  },

  m2: {
    pratica: [
      { tipo: "classificar", titulo: "Agenda do celular ou internet?",
        enunciado: "<p>Veja a tabela <strong>Agenda do celular · Internet</strong>.</p>",
        categorias: [{ id: "A", rot: "📒 Agenda do celular" }, { id: "I", rot: "🌐 Internet" }],
        itens: [{ t: "Nome: Mãe", c: "A" }, { t: "Endereço IP", c: "I" }, { t: "Número do telefone", c: "A" }, { t: "O DNS acha o IP", c: "I" }],
        explicacao: "Agenda: nome e telefone. Internet: endereço IP e DNS." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Agenda × internet",
        enunciado: "<p>Ligue cada coisa da agenda ao que ela é na internet.</p>",
        pares: [{ a: "Nome do contato", b: "Nome do site" }, { a: "Número do telefone", b: "Endereço IP" }, { a: "A agenda", b: "O DNS" }],
        explicacao: "Nome = nome do site. Telefone = IP. Agenda = DNS." },
      { tipo: "escolha", titulo: "Passo 2 · O que o DNS faz?",
        perguntas: [{ p: "O DNS:", opcoes: ["Acha o número do site pelo nome", "Liga o computador"], certo: 0 }],
        explicacao: "O DNS acha o IP pelo nome." },
      { tipo: "escolha", titulo: "Passo 3 · O que nós digitamos?",
        perguntas: [{ p: "Para abrir um site, nós digitamos:", opcoes: ["O nome do site", "Só números"], certo: 0 }],
        explicacao: "Digitamos o nome; o DNS acha o número." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "o número do site, nunca o nome", opcoes: ["o número do site, nunca o nome", "o nome do site"], certo: "o nome do site" } }]
  },

  m3: {
    pratica: [
      { tipo: "rota", titulo: "O caminho do vídeo",
        enunciado: "<p>Clique na ordem: do data center até a sua tela.</p>",
        etapas: [{ ic: "🏭", t: "Data center" }, { ic: "🌊", t: "Cabo no fundo do mar" }, { ic: "🏖️", t: "Fortaleza (CE)" }, { ic: "📱", t: "A sua tela" }],
        okMsg: "O vídeo atravessou o mar! 🌊", explicacao: "Data center → cabo submarino → Fortaleza → sua tela." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que é cada um?",
        enunciado: "<p>Veja a tabela <strong>Parte · O que é</strong>.</p>",
        pares: [{ a: "Cabo submarino", b: "Cabo no fundo do mar" }, { a: "Data center", b: "Prédio cheio de computadores" }, { a: "Fibra óptica", b: "Fio de vidro que leva luz" }],
        explicacao: "Cabo submarino = fundo do mar. Data center = prédio. Fibra = luz." },
      { tipo: "escolha", titulo: "Passo 2 · Onde chegam os cabos?",
        perguntas: [{ p: "A cidade do Brasil onde chegam mais cabos submarinos é:", opcoes: ["Fortaleza (CE)", "Curionópolis (PA)"], certo: 0 }],
        explicacao: "Fortaleza, no Ceará." },
      { tipo: "sinais", titulo: "Passo 3 · O que o data center precisa?",
        enunciado: "<p>Marque só o que está na apostila.</p>",
        opcoes: [{ t: "Ficar ligado o tempo todo", certo: true }, { t: "Ar frio", certo: true }, { t: "Desligar toda noite", certo: false }],
        explicacao: "Os computadores ficam ligados o tempo todo e precisam de ar frio." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "desligam toda noite", opcoes: ["desligam toda noite", "ficam ligados o tempo todo"], certo: "ficam ligados o tempo todo" } }]
  },

  m4: {
    pratica: [
      { tipo: "classificar", titulo: "Só no celular ou na nuvem?",
        enunciado: "<p>Veja a tabela <strong>Só no celular · Na nuvem</strong>.</p>",
        categorias: [{ id: "C", rot: "📱 Só no celular" }, { id: "N", rot: "☁️ Na nuvem" }],
        itens: [{ t: "Celular quebrou: o arquivo some", c: "C" }, { t: "Celular quebrou: o arquivo continua lá", c: "N" }, { t: "Fica no computador de uma empresa", c: "N" }],
        explicacao: "Na nuvem, o arquivo continua lá mesmo se o celular quebrar." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Passo 1 · O que protege a minha conta?",
        enunciado: "<p>Marque só o que protege.</p>",
        opcoes: [{ t: "Senha forte", certo: true }, { t: "Sair da conta no computador da escola", certo: true }, { t: "Deixar a conta aberta", certo: false }],
        explicacao: "Senha forte e sair da conta protegem." },
      { tipo: "ligar", titulo: "Passo 2 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Nuvem", b: "Computadores de empresas que guardam arquivos" }, { a: "Backup", b: "Cópia de segurança" }],
        explicacao: "Nuvem = computadores de empresas. Backup = cópia." },
      { tipo: "escolha", titulo: "Passo 3 · Celular quebrou",
        perguntas: [{ p: "As fotos estavam na nuvem. O celular quebrou. As fotos:", opcoes: ["Continuam lá", "Sumiram"], certo: 0 }],
        explicacao: "Na nuvem, as fotos continuam lá." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "some", opcoes: ["some", "continua lá"], certo: "continua lá" } }]
  },

  m5: {
    pratica: [
      { tipo: "escolha", titulo: "Arrumar a sala",
        enunciado: "<p>Veja a tabela do tempo.</p>",
        perguntas: [{ p: "4 tarefas de 10 minutos, com 4 pessoas ao mesmo tempo, levam:", opcoes: ["10 minutos", "40 minutos"], certo: 0 }],
        explicacao: "Cada pessoa faz 1 tarefa ao mesmo tempo: 10 minutos." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Paralelismo", b: "Várias tarefas ao mesmo tempo" }, { a: "Concorrência", b: "Várias tarefas querendo a mesma coisa" }, { a: "Fila", b: "Um de cada vez" }],
        explicacao: "Paralelismo = ao mesmo tempo. Concorrência = querendo a mesma coisa. Fila = um de cada vez." },
      { tipo: "classificar", titulo: "Passo 2 · Paralelismo ou concorrência?",
        categorias: [{ id: "P", rot: "⚙️ Paralelismo" }, { id: "C", rot: "🚦 Concorrência" }],
        itens: [{ t: "4 colegas arrumam a sala ao mesmo tempo", c: "P" }, { t: "Todos querem a mesma impressora", c: "C" }],
        explicacao: "Dividir o trabalho = paralelismo. Querer a mesma coisa = concorrência." },
      { tipo: "escolha", titulo: "Passo 3 · A impressora",
        perguntas: [{ p: "Muita gente mandou imprimir. A impressora:", opcoes: ["Faz uma fila", "Imprime tudo na mesma folha"], certo: 0 }],
        explicacao: "Ela atende um de cada vez, em fila." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "uma tarefa de cada vez", opcoes: ["uma tarefa de cada vez", "várias tarefas ao mesmo tempo"], certo: "várias tarefas ao mesmo tempo" } }, { v: true }]
  },

  m6: {
    pratica: [
      { tipo: "classificar", titulo: "Qual estrutura?",
        enunciado: "<p>Veja a tabela <strong>Estrutura · Como guarda · Exemplo</strong>.</p>",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "F", rot: "🚶 Fila" }, { id: "T", rot: "📋 Tabela" }, { id: "G", rot: "🕸️ Grafo" }],
        itens: [{ t: "A chamada da turma", c: "L" }, { t: "A fila da impressora", c: "F" }, { t: "O boletim", c: "T" }, { t: "O mapa das ruas", c: "G" }],
        explicacao: "Chamada = lista. Impressora = fila. Boletim = tabela. Mapa = grafo." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · Como cada uma guarda?",
        enunciado: "<p>Veja a coluna <strong>Como guarda</strong>.</p>",
        pares: [{ a: "Lista", b: "Itens em ordem" }, { a: "Tabela", b: "Linhas e colunas" }, { a: "Grafo", b: "Pontos e linhas" }],
        explicacao: "Lista = ordem. Tabela = linhas e colunas. Grafo = pontos e linhas." },
      { tipo: "escolha", titulo: "Passo 2 · A fila",
        perguntas: [{ p: "Na fila, quem sai primeiro?", opcoes: ["Quem chegou primeiro", "Quem chegou por último"], certo: 0 }],
        explicacao: "Quem chega primeiro sai primeiro." },
      { tipo: "memoria", titulo: "Passo 3 · Jogo da memória",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>",
        pares: [{ a: "Playlist", b: "Lista" }, { a: "Mapa", b: "Grafo" }, { a: "Boletim", b: "Tabela" }],
        explicacao: "Playlist = lista. Mapa = grafo. Boletim = tabela." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "é uma tabela", opcoes: ["é uma tabela", "é um grafo"], certo: "é um grafo" } }]
  },

  m7: {
    pratica: [
      { tipo: "escolha", titulo: "Muitos computadores juntos",
        enunciado: "<p>Leia o <strong>💡 Para começar</strong>.</p>",
        perguntas: [{ p: "Quando eu pesquiso na internet, quem responde?", opcoes: ["Muitos computadores juntos", "Um computador só"], certo: 0 }],
        explicacao: "Muitos computadores trabalham juntos: é um sistema distribuído." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Sistema distribuído", b: "Muitos computadores juntos" }, { a: "Servidor", b: "Computador sempre ligado" }, { a: "Reserva", b: "Assume se um quebrar" }],
        explicacao: "Sistema distribuído = juntos. Servidor = sempre ligado. Reserva = assume." },
      { tipo: "escolha", titulo: "Passo 2 · Um computador quebrou",
        perguntas: [{ p: "Um computador quebrou. O que acontece?", opcoes: ["Outro computador assume", "Tudo para para sempre"], certo: 0 }],
        explicacao: "Como no time: entra o reserva." },
      { tipo: "sinais", titulo: "Passo 3 · Onde tem sistema distribuído?",
        enunciado: "<p>Marque só o que está na apostila.</p>",
        opcoes: [{ t: "O buscador da internet", certo: true }, { t: "Os jogos on-line", certo: true }, { t: "Uma calculadora de papel", certo: false }],
        explicacao: "Buscador e jogos on-line usam muitos computadores." }
    ],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "tudo para para sempre", opcoes: ["tudo para para sempre", "outro computador assume"], certo: "outro computador assume" } }, { v: true }]
  },

  m8: {
    pratica: [
      { tipo: "classificar", titulo: "Baixar ou enviar?",
        enunciado: "<p>Veja a tabela <strong>Palavra · O que quer dizer · Exemplo</strong>.</p>",
        categorias: [{ id: "D", rot: "⬇️ Download (baixar)" }, { id: "U", rot: "⬆️ Upload (enviar)" }],
        itens: [{ t: "Baixar um jogo", c: "D" }, { t: "Postar um vídeo", c: "U" }, { t: "Assistir a um filme", c: "D" }],
        explicacao: "Baixar = download. Enviar = upload." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que significa?",
        enunciado: "<p>Veja o <strong>📖 O que significa?</strong>.</p>",
        pares: [{ a: "Download", b: "Baixar" }, { a: "Upload", b: "Enviar" }, { a: "Ping", b: "Tempo de ida e volta" }],
        explicacao: "Download = baixar. Upload = enviar. Ping = ida e volta." },
      { tipo: "escolha", titulo: "Passo 2 · Qual ping é melhor?",
        perguntas: [{ p: "Para jogar, o melhor ping é:", opcoes: ["Baixo", "Alto"], certo: 0 }],
        explicacao: "Ping baixo = jogo rápido." },
      { tipo: "escolha", titulo: "Passo 3 · Divida por 8",
        perguntas: [{ p: "80 Mbps ÷ 8 =", opcoes: ["10 MB por segundo", "80 MB por segundo"], certo: 0 }],
        explicacao: "80 ÷ 8 = 10." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, corrigir: { trecho: "mais rápido", opcoes: ["mais rápido", "mais lento"], certo: "mais lento" } }]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Internet", pares: [{ a: "Pacote", b: "Pedacinho" }, { a: "Roteador", b: "Aparelho do Wi-Fi" }], explicacao: "Pacote = pedacinho. Roteador = Wi-Fi." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · DNS", perguntas: [{ p: "O DNS acha:", opcoes: ["O número do site", "A senha"], certo: 0 }], explicacao: "O número (IP) pelo nome." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Cabos", perguntas: [{ p: "A internet atravessa o mar por:", opcoes: ["Cabos no fundo do mar", "Barcos"], certo: 0 }], explicacao: "Cabos submarinos." },
      { tipo: "relembre", de: "m4" },
      { tipo: "sinais", de: "m4", titulo: "M4 · Proteger a conta", enunciado: "<p>Marque o que protege.</p>", opcoes: [{ t: "Senha forte", certo: true }, { t: "Conta aberta", certo: false }], explicacao: "Senha forte." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Ao mesmo tempo", perguntas: [{ p: "Com mais pessoas ao mesmo tempo, o trabalho fica:", opcoes: ["Mais rápido", "Mais lento"], certo: 0 }], explicacao: "Mais rápido." },
      { tipo: "relembre", de: "m6" },
      { tipo: "classificar", de: "m6", titulo: "M6 · Estruturas", categorias: [{ id: "L", rot: "Lista" }, { id: "G", rot: "Grafo" }], itens: [{ t: "Chamada", c: "L" }, { t: "Mapa", c: "G" }], explicacao: "Chamada = lista. Mapa = grafo." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Juntos", perguntas: [{ p: "Se um computador quebra:", opcoes: ["Outro assume", "Tudo para"], certo: 0 }], explicacao: "Outro assume." },
      { tipo: "relembre", de: "m8" },
      { tipo: "ligar", de: "m8", titulo: "M8 · Baixar e enviar", pares: [{ a: "Download", b: "Baixar" }, { a: "Upload", b: "Enviar" }], explicacao: "Download = baixar. Upload = enviar." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — sem dica; nota de 0 a 10 no Boletim ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-2bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Internet", [{ p: "A foto viaja cortada em:", opcoes: ["Pacotes", "Folhas"], certo: 0 }, { p: "O número do pacote serve para:", opcoes: ["Pintar", "Juntar na ordem"], certo: 1 }]), pega("m1"),
    Q("m2", "DNS", [{ p: "O DNS é como:", opcoes: ["A agenda do celular", "A câmera"], certo: 0 }, { p: "O número do site é o:", opcoes: ["Ping", "Endereço IP"], certo: 1 }]), pega("m2"),
    Q("m3", "Cabos", [{ p: "O cabo submarino fica:", opcoes: ["No fundo do mar", "No céu"], certo: 0 }, { p: "Os vídeos ficam guardados no:", opcoes: ["Mouse", "Data center"], certo: 1 }]), pega("m3"),
    Q("m4", "Nuvem", [{ p: "Backup é:", opcoes: ["Cópia de segurança", "Um jogo"], certo: 0 }, { p: "No computador da escola, eu:", opcoes: ["Deixo a conta aberta", "Saio da conta"], certo: 1 }]), pega("m4"),
    Q("m5", "Ao mesmo tempo", [{ p: "Várias tarefas ao mesmo tempo é:", opcoes: ["Paralelismo", "Backup"], certo: 0 }, { p: "Todos querem a mesma impressora:", opcoes: ["Paralelismo", "Concorrência"], certo: 1 }]), pega("m5"),
    Q("m6", "Estruturas", [{ p: "O boletim é:", opcoes: ["Uma tabela", "Um grafo"], certo: 0 }, { p: "Na fila, sai primeiro:", opcoes: ["Quem chegou por último", "Quem chegou primeiro"], certo: 1 }]), pega("m6"),
    Q("m7", "Juntos", [{ p: "Muitos computadores juntos é um:", opcoes: ["Sistema distribuído", "Pen drive"], certo: 0 }, { p: "Se um quebra:", opcoes: ["Tudo para", "Outro assume"], certo: 1 }]), pega("m7"),
    Q("m8", "Velocidade", [{ p: "Postar um vídeo é:", opcoes: ["Upload", "Download"], certo: 0 }, { p: "O melhor ping é:", opcoes: ["Alto", "Baixo"], certo: 1 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026 — Etapa 2: 2º bimestre de 2027): o mesmo ❓ gancho da turma,
   "O que você já sabe?" na M1 e o 🛠️ "Onde eu uso isso?" prático em versão calma (jogo curto + 2 perguntas).
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-2bim-trilha"]; if (!A) return;
  const GANCHO = {"m1":{"html":"<p>📸 A Júlia mandou uma foto do aniversário para a avó, que mora em outro estado. Em 2 segundos, a avó respondeu: “que linda!”.</p><p>🤔 A foto viajou <b>inteira</b>? Por onde ela passou para chegar tão rápido?</p>"},"m2":{"html":"<p>🔤 Você digita <b>portal.professorwell.com.br</b> e a página aparece. Mas os computadores só se encontram por <b>números</b>, como 203.0.113.25.</p><p>🤔 Quem faz a “tradução” do nome para o número? E o que acontece se essa tradução parar de funcionar?</p>"},"m3":{"html":"<p>🛰️ O Léo jura que a internet vem do <b>satélite</b>. A Mia diz que vem do <b>fundo do mar</b>.</p><p>🤔 Quem tem razão? Como um vídeo de outro país chega até o seu celular?</p>"},"m4":{"html":"<p>📱 A Duda perdeu o celular com todas as fotos do aniversário. Ela chorou, mas a mãe disse: “calma, estão na <b>nuvem</b>”.</p><p>🤔 Como as fotos podem estar num celular perdido e, ao mesmo tempo, guardadas? E a nuvem fica no céu?</p>"},"m5":{"html":"<p>🧹 Arrumar a sala sozinho leva <b>40 minutos</b>: varrer, organizar as cadeiras, limpar o quadro e recolher o lixo. Com 4 colegas, cada um com uma parte…</p><p>🤔 Quanto tempo leva agora? E se os 19 alunos mandarem imprimir ao mesmo tempo, na única impressora da escola?</p>"},"m6":{"html":"<p>📲 A escola quer um aplicativo com a chamada, os pedidos de impressão, o boletim e as rotas do ônibus escolar.</p><p>🤔 Dá para guardar tudo do mesmo jeito? Ou cada parte precisa de uma <b>estrutura</b> diferente?</p>"},"m7":{"html":"<p>🔎 Você digita uma pergunta no buscador e, em menos de 1 segundo, aparecem respostas tiradas de bilhões de páginas.</p><p>🤔 Um computador só conseguiria fazer isso tão rápido? E se esse computador quebrasse?</p>"},"m8":{"html":"<p>🎮 O plano da casa do Caio é de <b>80 mega</b>. Ele achou que o jogo de 300 MB ia baixar em 4 segundos… e demorou bem mais!</p><p>🤔 “80 mega” é 80 o quê? Megabit e megabyte são a mesma coisa?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["O aparelho do Wi-Fi da sua casa é o…", ["Roteador", "Monitor"], "É o <b>roteador</b>."],
    ["A empresa que leva a internet até a sua casa é o…", ["Provedor", "Aplicativo"], "É o <b>provedor</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você já sabe. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";
  A.m1.aplicar = [
    rota("🛠️ Na vida real: a foto até a avó", "Clique por onde os pacotes da foto passam, <b>na ordem</b>.",
      [["📱", "No seu celular"], ["📶", "No roteador da sua casa"], ["🏢", "No provedor"], ["👵", "No celular da avó, que junta os pacotes"]], "A foto chegou! 📸", "A foto vai cortada em pacotes e é juntada no fim."),
    VIDA(["Cada pedacinho da foto se chama…", ["Pacote", "Pasta"], "Cada pedacinho é um <b>pacote</b>."], ["Para que serve o número do pacote?", ["Para juntar na ordem certa", "Para ligar o celular"], "O número ajuda a <b>juntar</b> os pacotes na ordem."])
  ];
  A.m2.aplicar = [
    rota("🛠️ Na vida real: abrir um site", "Clique no que acontece <b>na ordem</b>.",
      [["⌨️", "Você digita o nome do site"], ["📇", "O DNS acha o endereço IP pelo nome"], ["🖥️", "A página aparece na tela"]], "Site aberto! 🖥️", "O DNS acha o número (IP) pelo nome do site."),
    VIDA(["O DNS é como…", ["A agenda do celular", "Um cabo"], "O DNS é a <b>agenda</b> da internet."], ["O número de cada site se chama…", ["Endereço IP", "Nome do site"], "É o <b>endereço IP</b>."])
  ];
  A.m3.aplicar = [
    rota("🛠️ Na vida real: o vídeo de outro país", "Clique no caminho do vídeo <b>na ordem</b>.",
      [["🏭", "Data center lá fora"], ["🌊", "Cabo submarino, no fundo do mar"], ["🏖️", "Fortaleza (CE)"], ["📱", "A sua tela"]], "Vídeo carregado! 🎬", "O vídeo atravessa o mar por um cabo submarino."),
    VIDA(["A internet de outros países chega ao Brasil por…", ["Cabos no fundo do mar", "Cartas"], "Pelos <b>cabos submarinos</b>."], ["Um data center é…", ["Um prédio cheio de computadores", "Um cabo"], "É um prédio cheio de computadores que guardam vídeos e sites."])
  ];
  A.m4.aplicar = [
    msg("🛠️ Na vida real: só no celular ou na nuvem?", "☁️ Onde está?", [["C", "📱 Só no celular"], ["N", "☁️ Na nuvem"]], "O celular quebrou. Onde o arquivo estava?",
      [["As fotos sumiram para sempre", "C", "Só no celular: o arquivo some."], ["As fotos continuaram guardadas", "N", "Na nuvem, continuam lá."], ["Abriu a foto no computador da escola", "N", "Para ver em outro aparelho, estava na nuvem."]],
      "Mandou bem! ☁️", "Na nuvem, o arquivo não some se o celular quebrar."),
    VIDA(["Para proteger a nuvem, use…", ["Senha forte", "A senha 1234"], "Use <b>senha forte</b>."], ["No computador da escola, no fim, você…", ["Sai da conta", "Deixa a conta aberta"], "<b>Saia da conta</b>."])
  ];
  A.m5.aplicar = [
    { tipo: "lista_ops", titulo: "🛠️ Na vida real: a fila da impressora", nome: "FILA",
      enunciado: "<p>Muita gente quer usar a mesma impressora: forma uma fila.</p>",
      inicial: ["Ana", "Bia"],
      passos: [{ tipo: "inserir", instr: "O Caio mandou imprimir: insira Caio no fim.", esperado: ["Ana", "Bia", "Caio"], dica: "Digite Caio e clique em Inserir no fim." },
        { tipo: "pergunta", instr: "Quem imprime primeiro?", r: "Ana" }],
      explicacao: "Quem chegou primeiro imprime primeiro: é a fila." },
    VIDA(["4 colegas, cada um com uma parte, ao mesmo tempo: isso é…", ["Paralelismo", "Concorrência"], "Dividir ao mesmo tempo é <b>paralelismo</b>."], ["Muita gente querendo a mesma impressora é…", ["Concorrência", "Paralelismo"], "Disputar a mesma coisa é <b>concorrência</b>."])
  ];
  A.m6.aplicar = [
    msg("🛠️ Na vida real: qual estrutura?", "📲 Aplicativo da escola", [["L", "📝 Lista"], ["F", "🚶 Fila"], ["T", "📋 Tabela"], ["G", "🕸️ Grafo"]], "Para cada parte, qual estrutura?",
      [["A chamada da turma", "L", "Nomes em ordem: lista."], ["A fila da impressora", "F", "Quem chega primeiro sai primeiro: fila."], ["O boletim", "T", "Linhas e colunas: tabela."], ["O mapa das ruas", "G", "Pontos ligados: grafo."]],
      "Mandou bem! 📲", "Cada parte com a sua estrutura."),
    VIDA(["Na fila, quem sai primeiro?", ["Quem chegou primeiro", "Quem chegou por último"], "Na <b>fila</b>, quem chega primeiro sai primeiro."], ["A playlist é uma…", ["Lista", "Tabela"], "Músicas em ordem: <b>lista</b>."])
  ];
  A.m7.aplicar = [
    msg("🛠️ Na vida real: o sistema distribuído", "🌐 Servidores", [["D", "🧩 Dividir o trabalho"], ["N", "🛟 Não parar se um quebrar"]], "Qual ideia aparece em cada situação?",
      [["Cada computador procura uma parte da resposta", "D", "Dividir o trabalho."], ["Um computador quebrou e outro assumiu", "N", "Não parar se um quebrar."], ["O reserva entrou no lugar do jogador", "N", "Como no time: o jogo continua."]],
      "Mandou bem! 🌐", "Dividir o trabalho e não parar se um quebrar."),
    VIDA(["Quando você pesquisa na internet, quem responde?", ["Muitos computadores juntos", "Um computador só"], "Muitos computadores trabalham juntos: <b>sistema distribuído</b>."], ["Se um computador quebra…", ["Outro assume", "Tudo para"], "<b>Outro assume</b>, como o reserva no time."])
  ];
  A.m8.aplicar = [
    msg("🛠️ Na vida real: download ou upload?", "🌐 Internet", [["D", "⬇️ Download"], ["U", "⬆️ Upload"]], "Os dados chegam até você (download) ou você envia (upload)?",
      [["Baixar um jogo", "D", "Chega até você."], ["Postar um vídeo", "U", "Você envia."], ["Assistir a um filme", "D", "O filme chega até você."]],
      "Mandou bem! 🌐", "Download é baixar; upload é enviar."),
    VIDA(["No jogo on-line, o melhor é ping…", ["Baixo", "Alto"], "<b>Ping baixo</b>: o jogo responde rápido."], ["Ping alto deixa o jogo…", ["Lento (lag)", "Mais bonito"], "Ping alto dá <b>lag</b>."])
  ];
})();
