/* ============================================================
   MODO EXPLORADOR — missões rápidas e independentes
   Para escolas com poucos computadores e alunos que mudam a cada
   visita (ex.: Escola Santos Dumont, Prof. Vinícius).
   Cada missão: leitura curta + atividades com correção automática.
   As respostas estão na própria leitura: o aluno procura e responde.
   ============================================================ */
PORTAL.explorador = PORTAL.explorador || {};
PORTAL.explorador.escolas = {
  "santos-dumont": { nome: "Escola Santos Dumont", cidade: "Curionópolis · PA", professor: "Prof. Vinícius Mateus", series: ["6º ano", "7º ano", "8º ano", "9º ano"] }
};

PORTAL.explorador.missoes = [
  /* ======================= MOUSE ======================= */
  {
    id: "mouse", icone: "🖱️", cor: "#2563eb", titulo: "Mestre do mouse", tempo: "15 min",
    resumo: "Clicar, dar duplo clique e arrastar como um profissional.",
    leitura: `
      <p>O <strong>mouse</strong> é a peça que a gente segura com a mão para mexer a <strong>setinha</strong> na tela. A setinha também se chama <strong>cursor</strong> (palavra que vem do latim e quer dizer "aquele que corre").</p>
      <div class="ex-fig">
        <svg viewBox="0 0 300 160" aria-hidden="true"><rect x="110" y="10" width="80" height="140" rx="40" fill="#e0f2fe" stroke="#1e3a8a" stroke-width="4"/><path d="M150 10v58M110 68h80" stroke="#1e3a8a" stroke-width="4"/><rect x="143" y="26" width="14" height="26" rx="7" fill="#f97316"/><path d="M128 40H60" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="4 3"/><text x="4" y="45" font-size="15" fill="#1e3a8a" font-weight="700">esquerdo</text><path d="M172 40h56" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="4 3"/><text x="232" y="45" font-size="15" fill="#1e3a8a" font-weight="700">direito</text><path d="M157 30q40-24 70-24" stroke="#c2410c" stroke-width="2" fill="none" stroke-dasharray="4 3"/><text x="230" y="12" font-size="14" fill="#c2410c" font-weight="700">rodinha</text></svg>
      </div>
      <ul class="ex-lista">
        <li>👆 <strong>Clique</strong>: apertar <strong>uma vez</strong> o botão <strong>esquerdo</strong>. Serve para <strong>escolher</strong> ou apertar um botão na tela.</li>
        <li>✌️ <strong>Duplo clique</strong>: apertar o botão esquerdo <strong>duas vezes bem rápido</strong>. Serve para <strong>abrir</strong> pastas, arquivos e programas.</li>
        <li>🫳 <strong>Arrastar</strong>: apertar o botão esquerdo, <strong>segurar</strong> e mover o mouse. Serve para <strong>mudar coisas de lugar</strong>.</li>
        <li>📋 <strong>Botão direito</strong>: abre um <strong>menu de opções</strong>, como copiar, colar, renomear e excluir.</li>
        <li>🛞 <strong>Rodinha</strong>: fica no meio e serve para <strong>rolar</strong> a página para cima e para baixo.</li>
      </ul>
      <p class="ex-dica">💡 Dica de mestre: segure o mouse com a mão relaxada, com o dedo indicador no botão esquerdo e o dedo médio no direito.</p>`,
    atividades: [
      { id: "mo1", tipo: "baloes", titulo: "Estoure os balões com cliques", quantidade: 10,
        enunciado: "<p>Clique em cada balão para estourar. Eles mudam de lugar, então mire bem! 🎈</p>",
        explicacao: "Isso é o <strong>clique</strong>: apertar uma vez o botão esquerdo." },
      { id: "mo2", tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Jogos", itens: ["Fotos", "Jogos", "Músicas", "Trabalhos"],
        enunciado: "<p>Na área de trabalho de mentira, dê um <strong>duplo clique</strong> (dois cliques rapidinhos) na pasta <strong>Jogos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> serve para <strong>abrir</strong> pastas, arquivos e programas." },
      { id: "mo3", tipo: "classificar", titulo: "Arraste cada tarefa para o movimento certo",
        enunciado: "<p>Arraste (ou clique na tarefa e depois na caixa). A resposta está no texto lá em cima!</p>",
        categorias: [{ id: "C", rot: "Clique", ic: "👆" }, { id: "D", rot: "Duplo clique", ic: "✌️" }, { id: "A", rot: "Arrastar", ic: "🫳" }, { id: "R", rot: "Botão direito", ic: "📋" }],
        itens: [{ t: "Apertar o botão OK", ic: "🆗", c: "C" }, { t: "Abrir a pasta Fotos", ic: "📁", c: "D" }, { t: "Mudar um arquivo de lugar", ic: "📄", c: "A" }, { t: "Ver as opções copiar e colar", ic: "📋", c: "R" }, { t: "Abrir um jogo", ic: "🎮", c: "D" }, { t: "Escolher uma cor no Paint", ic: "🎨", c: "C" }],
        explicacao: "Clique escolhe, duplo clique abre, arrastar muda de lugar e o botão direito mostra as opções." },
      { id: "mo4", tipo: "vf", titulo: "Verdadeiro ou falso?",
        itens: [{ t: "O duplo clique é feito com o botão direito.", v: false, why: "É com o botão **esquerdo**, duas vezes rápido." },
          { t: "A rodinha do mouse serve para rolar a página.", v: true },
          { t: "A setinha da tela também se chama cursor.", v: true },
          { t: "Para arrastar, é preciso segurar o botão apertado.", v: true },
          { t: "O botão direito serve para abrir programas.", v: false, why: "Para abrir é o **duplo clique**. O direito mostra um **menu de opções**." }] }
    ]
  },

  /* ======================= PASTAS ======================= */
  {
    id: "pastas", icone: "📁", cor: "#f59e0b", titulo: "Organizador de pastas", tempo: "20 min",
    resumo: "Arquivos, pastas e como deixar tudo no lugar certo.",
    leitura: `
      <p>Tudo o que a gente salva no computador vira um <strong>arquivo</strong>: uma foto, uma música, um texto, um vídeo. Para não virar bagunça, guardamos os arquivos dentro de <strong>pastas</strong>, como numa gaveta com etiquetas.</p>
      <div class="ex-fig ex-icones">
        <span>📁<b>Pasta</b><small>guarda arquivos</small></span>
        <span>🖼️<b>.jpg</b><small>foto ou imagem</small></span>
        <span>🎵<b>.mp3</b><small>música</small></span>
        <span>📝<b>.docx</b><small>texto do Word</small></span>
        <span>🎬<b>.mp4</b><small>vídeo</small></span>
      </div>
      <p>As letras depois do ponto no nome do arquivo se chamam <strong>extensão</strong>. Ela conta <strong>que tipo de arquivo</strong> é. Por exemplo: <em>praia<strong>.jpg</strong></em> é uma foto e <em>funk<strong>.mp3</strong></em> é uma música.</p>
      <ul class="ex-lista">
        <li>📂 O programa que mostra as pastas do Windows se chama <strong>Explorador de Arquivos</strong>. O ícone dele é uma <strong>pastinha amarela</strong>.</li>
        <li>🧹 Arquivo que a gente apaga vai para a <strong>Lixeira</strong>. Dá para recuperar de lá, até alguém esvaziar a lixeira.</li>
        <li>✏️ Para mudar o nome de um arquivo: botão direito → <strong>Renomear</strong>.</li>
      </ul>
      <p class="ex-dica">💡 Dica de organizador: dê nomes que expliquem o que é o arquivo. "trabalho-ciencias" é muito melhor que "asdfg".</p>`,
    atividades: [
      { id: "pa1", tipo: "explorador_pastas", titulo: "Arrume a bagunça: cada arquivo na pasta certa",
        enunciado: "<p>Arraste cada arquivo para a pasta certa (ou clique no arquivo e depois na pasta). Olhe a <strong>extensão</strong>!</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "textos", nome: "Textos", ic: "📝" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "praia.jpg", p: "fotos" }, { nome: "aniversario.jpg", p: "fotos" }, { nome: "forro.mp3", p: "musicas" }, { nome: "hino.mp3", p: "musicas" }, { nome: "redacao.docx", p: "textos" }, { nome: "receita.docx", p: "textos" }, { nome: "gol.mp4", p: "videos" }, { nome: "festa.mp4", p: "videos" }],
        explicacao: "A extensão (.jpg, .mp3, .docx, .mp4) diz que tipo de arquivo é. Assim fica fácil organizar!" },
      { id: "pa2", tipo: "ligar", titulo: "Ligue a extensão ao tipo de arquivo",
        enunciado: "<p>Clique na extensão e depois no que ela é.</p>",
        pares: [{ a: ".jpg", b: "Foto ou imagem" }, { a: ".mp3", b: "Música" }, { a: ".docx", b: "Texto do Word" }, { a: ".mp4", b: "Vídeo" }] },
      { id: "pa3", tipo: "escolha", titulo: "Procure no texto e responda",
        perguntas: [
          { p: "Como se chama o programa que mostra as pastas no Windows?", opcoes: ["Explorador de Arquivos", "Paint", "Calculadora"], certo: 0 },
          { p: "Para onde vai o arquivo que a gente apaga?", opcoes: ["Impressora", "Lixeira", "Internet"], certo: 1 },
          { p: "Como mudar o nome de um arquivo?", opcoes: ["Desligar o computador", "Apertar a rodinha", "Botão direito → Renomear"], certo: 2 },
          { p: "Qual nome de arquivo é melhor?", opcoes: ["asdfg", "trabalho-ciencias", "aaaa"], certo: 1 }] },
      { id: "pa4", tipo: "vf", titulo: "Verdadeiro ou falso?",
        itens: [{ t: "Pasta serve para guardar arquivos.", v: true },
          { t: "musica.mp3 é um vídeo.", v: false, why: ".mp3 é **música**. Vídeo é **.mp4**." },
          { t: "A extensão são as letras depois do ponto no nome do arquivo.", v: true },
          { t: "Um arquivo apagado nunca pode ser recuperado.", v: false, why: "Ele vai para a **Lixeira** e dá para recuperar, até alguém esvaziar a lixeira." }] }
    ]
  },

  /* ======================= INTERNET SEGURA ======================= */
  {
    id: "internet", icone: "🛡️", cor: "#16a34a", titulo: "Internet segura", tempo: "20 min",
    resumo: "Senha forte, dados pessoais e como fugir de golpes.",
    leitura: `
      <p>A <strong>internet</strong> é uma rede enorme que liga computadores e celulares do mundo inteiro. Ela é ótima para aprender e se divertir, mas precisa de cuidado, como atravessar a rua.</p>
      <ul class="ex-lista">
        <li>🔐 <strong>Senha forte</strong> tem pelo menos <strong>8 caracteres</strong> e mistura letras, números e símbolos. Senha é <strong>segredo</strong>: não se conta nem para o melhor amigo.</li>
        <li>🏠 <strong>Dados pessoais</strong> são informações que mostram quem você é ou onde você está: nome completo, endereço, telefone, escola e foto. <strong>Não compartilhe</strong> com desconhecidos.</li>
        <li>🎣 <strong>Golpe</strong> (também chamado de <em>phishing</em>, que vem do inglês <em>fishing</em>, "pescar") é quando alguém tenta te enganar para pegar seus dados ou dinheiro. Sinais: <strong>prêmio fácil</strong>, <strong>pressa</strong> ("só hoje!"), <strong>link estranho</strong> e pedido de <strong>senha ou código</strong>.</li>
        <li>💬 <strong>Cyberbullying</strong> é ofender, zombar ou espalhar foto de alguém pela internet. Machuca de verdade. Se acontecer, <strong>tire print, bloqueie</strong> e <strong>conte para um adulto</strong> de confiança.</li>
        <li>🔒 O <strong>cadeado</strong> e o <strong>https</strong> no começo do endereço do site mostram que a conexão é protegida.</li>
      </ul>
      <p class="ex-dica">💡 Regra de ouro: na dúvida, <strong>não clique</strong> e pergunte a um adulto.</p>`,
    atividades: [
      { id: "in1", tipo: "sinais", titulo: "Detetive: marque os sinais de golpe",
        enunciado: "<p class=\"regra\">“🎁 <strong>PARABÉNS!!!</strong> Você ganhou um celular novo! Clique em <u>premio-gratis.xyz</u> e digite sua senha. <strong>Só até hoje!</strong>”</p><p>Marque <strong>todos</strong> os sinais de golpe que aparecem na mensagem.</p>",
        opcoes: [{ t: "🎁 Prêmio fácil, sem você ter participado de nada", certo: true }, { t: "⏰ Pressa: “só até hoje”", certo: true }, { t: "🔗 Link estranho", certo: true }, { t: "🔐 Pede a sua senha", certo: true }, { t: "🏫 Foi enviada pela diretora da escola", certo: false, why: "A mensagem não diz quem enviou." }],
        explicacao: "Prêmio fácil, pressa, link estranho e pedido de senha: quatro sinais de golpe na mesma mensagem!" },
      { id: "in2", tipo: "classificar", titulo: "Posso compartilhar com desconhecidos?",
        enunciado: "<p>Arraste cada informação para a caixa certa. Lembre o que são <strong>dados pessoais</strong>.</p>",
        categorias: [{ id: "S", rot: "Pode", ic: "✅" }, { id: "N", rot: "Não pode", ic: "⛔" }],
        itens: [{ t: "Meu time favorito", ic: "⚽", c: "S" }, { t: "Meu endereço", ic: "🏠", c: "N" }, { t: "Minha senha", ic: "🔐", c: "N" }, { t: "Minha cor preferida", ic: "🎨", c: "S" }, { t: "Meu telefone", ic: "📱", c: "N" }, { t: "O nome do meu desenho favorito", ic: "📺", c: "S" }] },
      { id: "in3", tipo: "escolha", titulo: "Qual é a senha mais forte?",
        perguntas: [
          { p: "Escolha a senha mais forte:", opcoes: ["123456", "maria", "Gat0$Azul#27"], certo: 2, why: "Tem mais de 8 caracteres e mistura letras, números e símbolos." },
          { p: "Um colega te pede a sua senha do jogo. O que fazer?", opcoes: ["Postar no grupo da turma", "Não contar: senha é segredo", "Contar, porque é amigo"], certo: 1 },
          { p: "Estão te ofendendo na internet. O que fazer?", opcoes: ["Responder com ofensa", "Apagar tudo e não contar a ninguém", "Tirar print, bloquear e contar a um adulto"], certo: 2 }] },
      { id: "in4", tipo: "vf", titulo: "Verdadeiro ou falso?",
        itens: [{ t: "O cadeado e o https mostram que a conexão do site é protegida.", v: true },
          { t: "Foto e endereço são dados pessoais.", v: true },
          { t: "Mensagem com prêmio fácil e pressa é sempre verdade.", v: false, why: "Prêmio fácil e pressa são **sinais de golpe**." },
          { t: "Na dúvida, o melhor é não clicar e perguntar a um adulto.", v: true }] }
    ]
  }
];

/* Desafio relâmpago: perguntas sorteadas (5 por vez) */
PORTAL.explorador.relampago = [
  { p: "Para ABRIR uma pasta, eu uso…", opcoes: ["Duplo clique", "Botão direito", "Rodinha"], certo: 0 },
  { p: "A rodinha do mouse serve para…", opcoes: ["Rolar a página", "Desligar o computador", "Apagar arquivos"], certo: 0 },
  { p: "Para mudar um arquivo de lugar, eu…", opcoes: ["Arrasto", "Dou duplo clique", "Aperto Enter"], certo: 0 },
  { p: "O botão direito do mouse mostra…", opcoes: ["Um menu de opções", "A internet", "A Lixeira"], certo: 0 },
  { p: "Qual arquivo é uma música?", opcoes: ["forro.mp3", "praia.jpg", "redacao.docx"], certo: 0 },
  { p: "Qual arquivo é uma foto?", opcoes: ["praia.jpg", "gol.mp4", "hino.mp3"], certo: 0 },
  { p: "Arquivo apagado vai para…", opcoes: ["A Lixeira", "O teclado", "A impressora"], certo: 0 },
  { p: "As letras depois do ponto no nome do arquivo são a…", opcoes: ["Extensão", "Senha", "Pasta"], certo: 0 },
  { p: "Qual é a senha mais forte?", opcoes: ["Sol#2026!Lua", "abc123", "senha"], certo: 0 },
  { p: "Qual destes é um dado pessoal?", opcoes: ["Meu endereço", "Minha cor preferida", "Meu time"], certo: 0 },
  { p: "Prêmio fácil + pressa + link estranho é sinal de…", opcoes: ["Golpe", "Promoção de verdade", "Atualização"], certo: 0 },
  { p: "O cadeado no endereço do site indica…", opcoes: ["Conexão protegida", "Site fechado", "Internet lenta"], certo: 0 },
  { p: "Se alguém te ofender na internet, você deve…", opcoes: ["Tirar print, bloquear e contar a um adulto", "Ofender de volta", "Ficar calado"], certo: 0 },
  { p: "O programa que mostra as pastas do Windows é o…", opcoes: ["Explorador de Arquivos", "Paint", "Bloco de Notas"], certo: 0 },
  { p: "A setinha que anda na tela se chama…", opcoes: ["Cursor", "Teclado", "Monitor"], certo: 0 }
];
