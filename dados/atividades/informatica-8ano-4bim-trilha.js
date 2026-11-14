/* ============================================================
   ATIVIDADES — Informática 8º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-8ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "sim_adivinhe", titulo: "Jogo: adivinhe o número", max: 10, meta: 4, botoes: true,
        enunciado: "<p>Pensei num número de <strong>1 a 10</strong>. Clique no <strong>5</strong> (o meio). Eu digo se é maior ⬆️ ou menor ⬇️.</p>",
        explicacao: "Chutar o meio sempre é a <strong>busca binária</strong>: muito mais rápido que tentar 1, 2, 3…" },
      { tipo: "sim_bolha", titulo: "Arrume os números do menor para o maior",
        enunciado: "<p>Clique em <strong>⇄</strong> para trocar dois vizinhos de lugar, até ficar em <strong>ordem crescente</strong>.</p>",
        valores: [9, 2, 6, 4],
        explicacao: "Trocar vizinhos até ficar em ordem é o <strong>método da bolha</strong>." }
    ],
    basico: [
      { tipo: "sequencial", titulo: "Passo 1 · Procure o 9 olhando um por um",
        lista: [5, 8, 2, 9, 4], alvo: 9,
        enunciado: "<p>As cartas estão viradas. Clique na <strong>1ª carta</strong>, depois na <strong>2ª</strong>, depois na <strong>3ª</strong>… até achar o <strong>9</strong>.</p>",
        explicacao: "Você olhou 4 cartas: o 9 estava na 4ª posição. Isso é a <strong>busca sequencial</strong>: olhar um por um." },

      { tipo: "busca_binaria", titulo: "Passo 2 · Procure o 8 pelo meio", ajudaMeio: true,
        lista: [2, 4, 6, 8, 10], alvo: 8,
        enunciado: "<p>Esta lista está <strong>em ordem</strong>. Clique na carta do <strong>meio</strong> (ela tem a mãozinha 👆).</p>",
        explicacao: "1ª vez: o meio era o 6, e o 8 é maior, então a metade da esquerda foi jogada fora. 2ª vez: achou o 8! Procurar pelo meio é a <strong>busca binária</strong>." },

      { tipo: "bolha", titulo: "Passo 3 · Arrume [3, 1, 2] do menor para o maior", lista: [3, 1, 2],
        enunciado: "<p>Olhe os <strong>dois vizinhos</strong> destacados. Se o da esquerda for <strong>maior</strong>, clique em <strong>Trocar</strong>. Se já estão em ordem, clique em <strong>Manter</strong>.</p>",
        explicacao: "A lista ficou [1, 2, 3]: do menor para o maior. Isso é o <strong>método da bolha</strong>." },

      { tipo: "ordenar", titulo: "Passo 4 · Arrume os nomes de A até Z",
        itens: ["Ana", "Bia", "Caio", "Davi"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer) para arrumar os nomes em <strong>ordem alfabética</strong>, como nos contatos do celular.</p>",
        explicacao: "Ana, Bia, Caio, Davi: de A até Z, como na lista de chamada." },

      { tipo: "tabela", titulo: "Passo 5 · Digite aqui no portal",
        enunciado: "<p>Digite os números em ordem, do menor para o maior: <strong>1 2 3 4</strong></p>",
        linhas: [["Digite aqui:", { r: "1 2 3 4", tipo: "letras", w: 12, ph: "1 2 3 4", dica: "Do menor para o maior: 1, 2, 3, 4." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Ordem crescente é do <strong>menor</strong> para o <strong>maior</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "O caminho do vídeo até o seu celular",
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>: de onde o vídeo está guardado até a sua tela.</p>",
        etapas: [
          { ic: "🏭", t: "Data center", dica: "Comece de onde o vídeo está guardado." },
          { ic: "🌊", t: "Cabo submarino" },
          { ic: "🏢", t: "Provedor de internet" },
          { ic: "📶", t: "Roteador Wi-Fi" },
          { ic: "📱", t: "Seu celular", dica: "Essa é a última etapa." }],
        okMsg: "Isso! O vídeo viaja por cabos até chegar em você.",
        explicacao: "A <strong>nuvem</strong> são computadores em <strong>data centers</strong>, ligados por cabos." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Arrume o caminho do vídeo",
        itens: ["📱 Celular", "📶 Roteador (caixinha do Wi-Fi)", "🏢 Provedor (empresa da internet)", "🌊 Cabos no fundo do mar", "🏭 Data center"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>. O caminho começa no <strong>celular</strong> e termina no <strong>data center</strong>.</p>",
        explicacao: "Celular → roteador → provedor → cabos → data center. Depois, o vídeo volta pelo mesmo caminho." },

      { tipo: "classificar", titulo: "Passo 2 · Fila ou dividir o trabalho?",
        categorias: [{ id: "F", rot: "Fila", ic: "🧍🧍🧍", desc: "um de cada vez" }, { id: "D", rot: "Dividir o trabalho", ic: "👥", desc: "todos ao mesmo tempo" }],
        itens: [
          { t: "19 alunos mandam imprimir", ic: "🖨️", c: "F" },
          { t: "A fila do lanche", ic: "🍞", c: "F" },
          { t: "4 colegas dividem os exercícios", ic: "📚", c: "D" },
          { t: "O celular toca música e abre o jogo ao mesmo tempo", ic: "🎵", c: "D" }],
        explicacao: "Na <strong>fila</strong>, cada um espera a vez. Ao <strong>dividir o trabalho</strong>, cada parte é feita ao mesmo tempo." },

      { tipo: "escolha", titulo: "Passo 3 · Responda",
        perguntas: [
          { p: "📶 Qual é a caixinha do Wi-Fi?", opcoes: ["Roteador", "Impressora", "Teclado"], certo: 0 },
          { p: "☁️ Onde fica guardada a foto na nuvem?", opcoes: ["No data center, pela internet", "Numa nuvem de chuva", "Dentro do teclado"], certo: 0 }],
        explicacao: "O roteador espalha o Wi-Fi. A nuvem guarda a foto nos computadores do data center." },

      { tipo: "cartaz", titulo: "Passo 4 · Monte o cartaz do caminho da internet", tituloCartaz: "O caminho da internet",
        desenhos: ["📱", "📶", "☁️", "🐟", "🍕", "⚽"], minDesenhos: 3, maxDesenhos: 3, exigirDesenhos: ["📱", "📶", "☁️"],
        dicaDesenhos: "Clique nos 3 desenhos do caminho: o <strong>celular</strong> 📱, o <strong>roteador</strong> 📶 e a <strong>nuvem</strong> ☁️.",
        campos: [{ rot: "Quantos desenhos tem o caminho?", opcoes: ["2", "3", "4"], gab: "3", re: "^3$", dica: "São <strong>3</strong>: celular, roteador e nuvem." }],
        okMsg: "Cartaz pronto! Celular → roteador → nuvem. Ficou registrado para o professor." }
    ],
    vf: [{ v: true }, { v: false, why: "A nuvem é guardar no <strong>data center</strong>, pela internet." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "permissoes", titulo: "Permitir ou negar?",
        enunciado: "<p>O aplicativo <strong>precisa mesmo</strong> disso para funcionar?</p>",
        itens: [
          { ic: "🔦", app: "Lanterna", pede: "seus contatos", c: "N", why: "Lanterna só precisa do flash." },
          { ic: "🗺️", app: "Mapas", pede: "sua localização", c: "S", why: "O mapa precisa saber onde você está." },
          { ic: "🃏", app: "Jogo de cartas", pede: "o microfone", c: "N" },
          { ic: "📷", app: "Câmera", pede: "a câmera", c: "S" }],
        explicacao: "Só permita o que o aplicativo <strong>precisa</strong>. Seus dados são seus!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Guardo comigo ou posso mostrar?",
        categorias: [{ id: "G", rot: "Guardo comigo", ic: "🔒", desc: "é meu dado pessoal" }, { id: "P", rot: "Posso mostrar", ic: "👍", desc: "não mostra quem eu sou" }],
        itens: [
          { t: "Minha senha", ic: "🔑", c: "G" },
          { t: "Endereço da minha casa", ic: "🏠", c: "G" },
          { t: "Meu telefone", ic: "📞", c: "G" },
          { t: "Minha cor favorita", ic: "🎨", c: "P" },
          { t: "Um desenho que eu fiz", ic: "🖍️", c: "P" }],
        explicacao: "Senha, endereço e telefone são <strong>dados pessoais</strong>: proteja. A cor favorita e um desenho podem ser mostrados." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 2 · O aplicativo precisa disso?", colunaItem: "Aplicativo e o que ele pede", colunaResp: "Precisa?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "🔦 Lanterna pede os seus contatos", c: "N", why: "Lanterna não precisa de contatos: desconfie." },
          { t: "🗺️ Mapa pede o lugar onde você está", c: "S", why: "O mapa precisa saber onde você está." },
          { t: "📷 Câmera pede para usar a câmera", c: "S" },
          { t: "🧮 Calculadora pede o microfone", c: "N" }],
        explicacao: "Antes de clicar em “Permitir”, pergunte: o aplicativo precisa disso para funcionar?" },

      { tipo: "sinais", titulo: "Passo 3 · Marque os sinais de notícia falsa",
        enunciado: "<p class=\"regra\">“<strong>URGENTE!!!</strong> Celular carregando explode à noite. <strong>Compartilhe antes que apaguem!</strong>” <em>(sem nome de quem escreveu)</em></p>",
        opcoes: [
          { t: "❓ Não tem o nome de quem escreveu", certo: true },
          { t: "❗ Tem URGENTE!!! e muitos pontos de exclamação", certo: true },
          { t: "📤 Pede para compartilhar rápido", certo: true },
          { t: "📰 Tem o nome de um jornal e a data", certo: false, why: "A mensagem não tem jornal nem data." }],
        explicacao: "Três sinais de alerta: é melhor <strong>não compartilhar</strong>." },

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa: <strong>MEUS DADOS</strong></p>",
        linhas: [["Digite aqui:", { r: "MEUS DADOS", tipo: "letras", w: 16, ph: "MEUS DADOS", dica: "Digite: MEUS DADOS." }]] }
    ],
    vf: [{ v: false, why: "A senha é segredo: não conte para ninguém." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "escolha", titulo: "Apareceu o botão “Li e aceito”",
        enunciado: "<p>Você vai criar uma conta num jogo novo e aparece um texto comprido com o botão <strong>Li e aceito</strong>.</p>",
        perguntas: [{ p: "Clicar em “Li e aceito” é:", opcoes: ["Aceitar um contrato", "Só fechar a janela"], certo: 0, why: "Os termos de uso são um contrato." }],
        explicacao: "Clicar em <strong>Li e aceito</strong> é aceitar o <strong>contrato</strong> (os termos de uso)." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Bom para mim ou atenção?",
        categorias: [{ id: "B", rot: "Bom para mim", ic: "👍", desc: "protege você" }, { id: "A", rot: "Atenção", ic: "⚠️", desc: "pode prejudicar" }],
        itens: [{ t: "Dá para apagar a conta", ic: "🗑️", c: "B" }, { t: "Passa os seus dados para outras empresas", ic: "🤝", c: "A" },
          { t: "Pega a sua localização o tempo todo", ic: "📍", c: "A" }, { t: "Pede só o e-mail", ic: "📧", c: "B" }],
        explicacao: "👍 Apagar a conta e pedir só o necessário. ⚠️ Passar dados para outras empresas e pegar a localização o tempo todo." },
      { tipo: "escolha", titulo: "Passo 2 · Grátis mesmo?",
        perguntas: [{ p: "Como o aplicativo grátis costuma ganhar dinheiro?", opcoes: ["Com propaganda", "Com nada"], certo: 0 }],
        explicacao: "Aplicativo grátis costuma ganhar dinheiro com <strong>propaganda</strong>." },
      { tipo: "sinais", titulo: "Passo 3 · As 3 perguntas antes de aceitar",
        enunciado: "<p>Marque as <strong>3 perguntas</strong> que eu faço antes de aceitar os termos.</p>",
        opcoes: [{ t: "📋 Que dados ele pega?", certo: true }, { t: "🤝 Com quem ele compartilha?", certo: true }, { t: "🗑️ Consigo apagar a minha conta?", certo: true },
          { t: "🎨 De que cor é o botão?", certo: false, why: "A cor do botão não protege os seus dados." }],
        explicacao: "As 3 perguntas: que dados pega, com quem compartilha e se dá para apagar a conta." },
      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa: <strong>LEIO ANTES DE ACEITAR</strong></p>",
        linhas: [["Digite aqui:", { r: "LEIO ANTES DE ACEITAR", tipo: "letras", w: 24, ph: "LEIO ANTES DE ACEITAR", dica: "Digite: LEIO ANTES DE ACEITAR." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Aplicativo grátis costuma ganhar dinheiro com propaganda." }, { v: true }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "A busca binária precisa da lista:", opcoes: ["Em ordem", "Bagunçada"], certo: 0 }], explicacao: "A busca binária precisa da lista: Em ordem." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Guardar fotos na nuvem é guardar:", opcoes: ["Em servidores, pela internet", "No céu"], certo: 0 }], explicacao: "Guardar fotos na nuvem é guardar: Em servidores, pela internet." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "Meu telefone é um:", opcoes: ["Dado pessoal", "Dado de ninguém"], certo: 0 }], explicacao: "Meu telefone é um: Dado pessoal." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "“Li e aceito” é:", opcoes: ["Um contrato", "Nada"], certo: 0 }], explicacao: "“Li e aceito” é: Um contrato." },
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🗂️ Listas", "☁️ Internet e nuvem", "🔍 Meus dados"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
