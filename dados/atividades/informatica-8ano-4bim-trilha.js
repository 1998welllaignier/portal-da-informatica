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
      { tipo: "adivinhe", titulo: "Jogo: adivinhe o número", max: 50, meta: 6,
        enunciado: "<p>Pensei num número de <strong>1 a 50</strong>. Comece chutando <strong>25</strong> (o meio). Eu digo se é maior ou menor.</p>",
        explicacao: "Chutar o meio sempre é a <strong>busca binária</strong>: muito mais rápido que tentar 1, 2, 3…" },
      { tipo: "bolha", titulo: "Arrume os números do menor para o maior",
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

      { tipo: "pc", titulo: "Passo 5 · No computador: Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>bloco</strong>.", "Clique em <strong>Bloco de Notas</strong>.", "Digite os números em ordem: <strong>1 2 3 4</strong>"],
        conferir: [{ rot: "Agora digite aqui os números que você escreveu no Bloco de Notas:", ph: "1 2 3 4", gab: "1 2 3 4", re: "^\\D*1\\D+2\\D+3\\D+4\\D*$", dica: "Do menor para o maior: 1, 2, 3, 4." }],
        okMsg: "Muito bem! Os números estão em ordem crescente." }
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

      { tipo: "pc", titulo: "Passo 4 · No computador: desenhe no Paint", programa: "Paint",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>paint</strong>. Clique em <strong>Paint</strong>.", "Clique no <strong>retângulo</strong> ▭ e desenhe <strong>3 quadrados</strong>, um ao lado do outro.", "Clique no <strong>A</strong> (texto) e escreva: <strong>CELULAR</strong>, <strong>ROTEADOR</strong> e <strong>NUVEM</strong>.", "Chame o professor para ver o seu desenho."] }
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

      { tipo: "pc", titulo: "Passo 4 · No computador: Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>bloco</strong>. Clique em <strong>Bloco de Notas</strong>.", "Digite a frase: <strong>Eu protejo meus dados</strong>"],
        conferir: [{ rot: "Agora digite aqui a frase que você escreveu no Bloco de Notas:", ph: "Eu protejo meus dados", gab: "Eu protejo meus dados", re: "eu\\s+protejo\\s+(os\\s+)?meus\\s+dados", dica: "A frase é: Eu protejo meus dados." }],
        okMsg: "Muito bem! Você protege os seus dados." }
    ],
    vf: [{ v: false, why: "A senha é segredo: não conte para ninguém." }, { v: true }, { v: true }]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🗂️ Listas", "☁️ Internet e nuvem", "🔍 Meus dados"], certo: -1 }],
        explicacao: "Conte para o professor por que você gostou dessa missão!" }
    ]
  }
});
