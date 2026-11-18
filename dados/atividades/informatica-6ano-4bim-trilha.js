/* ============================================================
   ATIVIDADES — Informática 6º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique", robo: {"paineis": ["🖱️ O duplo clique"], "passos": [{"fala": "Olha como eu abro uma pasta <b>diferente</b>, a pasta Fotos:", "painel": 0, "titulo": "Duplo clique"}, {"fala": "Levo a setinha até a pasta e paro em cima dela.", "painel": 0, "linha": "1. Setinha em cima da pasta"}, {"fala": "Aperto o botão <b>esquerdo</b> duas vezes, <b>bem rapidinho</b>: tec-tec!", "painel": 0, "linha": "2. Clique-clique rápido", "marca": true}, {"fala": "Se eu demorar entre os dois cliques, o computador entende como dois cliques separados e não abre. Tem que ser rápido!", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: abra a pasta Trabalhos com um duplo clique. 💪"},
        alvo: "Trabalhos", itens: ["Fotos", "Músicas", "Trabalhos"],
        enunciado: "<p>Dê <strong>dois cliques rapidinhos</strong> na pasta <strong>Trabalhos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas e arquivos." },
      { tipo: "explorador_pastas", titulo: "Guarde cada arquivo na pasta certa", robo: {"paineis": ["📂 Como eu escolho a pasta"], "passos": [{"fala": "Olha o desenho do arquivo e o final do nome:", "painel": 0, "titulo": "Foto ou música?"}, {"fala": "🖼️ passeio.jpg tem desenho de foto → vai para Fotos.", "painel": 0, "linha": "🖼️ passeio.jpg → Fotos"}, {"fala": "🎵 parabens.mp3 tem desenho de música → vai para Músicas.", "painel": 0, "linha": "🎵 parabens.mp3 → Músicas", "marca": true}, {"fala": "Clico no arquivo e depois na pasta certa.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez! 💪"},
        enunciado: "<p>Clique no arquivo e depois na pasta certa. A 🖼️ foto vai para <strong>Fotos</strong>. A 🎵 música vai para <strong>Músicas</strong>.</p>",
        pastas: [{ id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }],
        arquivos: [{ nome: "🖼️ foto-da-escola.jpg", p: "fotos" }, { nome: "🎵 forro.mp3", p: "musicas" }, { nome: "🖼️ meu-time.jpg", p: "fotos" }, { nome: "🎵 hino.mp3", p: "musicas" }],
        explicacao: "Cada arquivo na sua pasta: assim você acha rapidinho!" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Entrada ou saída?",
        categorias: [{ id: "E", rot: "Entrada", ic: "⌨️", desc: "manda para o computador" }, { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" },
          { t: "Mouse", ic: "🖱️", c: "E" },
          { t: "Monitor (a tela)", ic: "🖥️", c: "S" },
          { t: "Caixa de som", ic: "🔊", c: "S" }],
        explicacao: "Teclado e mouse <strong>mandam</strong> (entrada). Monitor e caixa de som <strong>mostram</strong> (saída)." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🗂️ Para que serve a pasta?", opcoes: ["Guardar e organizar os arquivos", "Ligar o computador", "Imprimir"], certo: 0 },
          { p: "📄 O que é um arquivo?", opcoes: ["Um trabalho guardado no computador", "Um cabo", "Uma tecla"], certo: 0 }],
        explicacao: "O arquivo é o trabalho guardado. A pasta é a gaveta que guarda os arquivos." },

      { tipo: "ordenar", titulo: "Passo 3 · Arrume os passos para salvar",
        itens: ["📂 Escolher onde guardar", "✏️ Dar um nome", "💾 Clicar em Salvar"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer). Primeiro escolha <strong>onde</strong> guardar.</p>",
        explicacao: "Onde guardar → nome → Salvar." },

      { tipo: "pc", titulo: "Passo 4 · No computador: Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Clique no botão <strong>Iniciar</strong> e digite <strong>bloco</strong>. Clique em <strong>Bloco de Notas</strong>.", "Digite o seu <strong>primeiro nome</strong>.", "Aperte <strong>Ctrl</strong> e <strong>S</strong> juntos. No nome do arquivo, digite <strong>EU</strong> e clique em <strong>Salvar</strong>."],
        conferir: [{ rot: "Que nome você deu ao arquivo?", opcoes: ["CASA", "EU", "JOGO"], gab: "EU", re: "^EU$", dica: "O nome do arquivo é <strong>EU</strong>." }],
        okMsg: "Muito bem! Seu trabalho está salvo." },
      { id: "m1-sim-pasta", opcional: true, tipo: "sim_pc", titulo: "🖥️ Simulador: crie a sua pasta e salve o seu primeiro arquivo",
        enunciado: "<p>Treine no <strong>computador de mentira</strong> o caminho completo: criar uma pasta, escrever no Bloco de Notas e salvar o arquivo dentro da pasta. O <strong>Bit</strong>, o seu ajudante, diz o que fazer e corrige na hora. Depois faça igualzinho no computador de verdade!</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        pastas: { "Documentos": [{ nome: "lista-de-chamada", ext: "txt" }] },
        passos: [
          { faca: "Abra o <b>Explorador de Arquivos</b>: clique na pastinha amarela 📁 da <b>barra de tarefas</b>, lá embaixo.", ok: ["clique:bar:exp", "abrir:app:exp"], onde: "bar:exp" },
          { faca: "No painel da esquerda, clique em <b>Documentos</b>.", ok: "abrir:pasta:Documentos", onde: "nav:Documentos" },
          { faca: "Clique com o <b>botão direito</b> num espaço vazio (a parte branca embaixo dos arquivos) e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito na parte branca, onde não tem nenhum arquivo. No menu: Novo › Pasta." },
          { faca: "Digite o nome <b>Meus trabalhos</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>meus trabalhos$/", dica: "Se o nome saiu errado: botão direito na pasta › Renomear." },
          { faca: "Agora abra o <b>Bloco de Notas</b>: clique no botão <b>Iniciar ⊞</b> e depois em <b>Bloco de Notas</b> 📝.", ok: "abrir:app:notas", onde: "bar:iniciar", dica: "O Iniciar é o ⊞ da barra de tarefas. Ele abre a lista de programas." },
          { faca: "Escreva uma frase sobre você começando com <b>Sobre mim:</b> (exemplo: <i>Sobre mim: eu gosto de futebol.</i>)", ok: { estado: "notas", texto: "Sobre mim:", contem: true }, onde: "notas:texto" },
          { faca: "Salve com <b>Ctrl + S</b>. Na janela <b>Salvar como</b>, escolha a pasta <b>Meus trabalhos</b>, dê o nome <b>sobre-mim</b> e clique em <b>Salvar</b>.", ok: { estado: "salvo", nome: "sobre-mim", pasta: "Meus trabalhos" }, erros: { "salvar:*": "Quase! Confira: o nome é <b>sobre-mim</b> e a pasta é <b>Meus trabalhos</b>. Aperte <b>Ctrl + S</b> e salve de novo." }, dica: "Ctrl + S abre a janela Salvar como. Em Pasta, escolha Meus trabalhos. Em Nome, digite sobre-mim." },
        ],
        fimMsg: "Pasta criada, texto escrito e arquivo salvo no lugar certo. Agora faça o mesmo no computador da sala!",
        explicacao: "Para salvar um arquivo no lugar certo: crie a pasta (botão direito › Novo › Pasta), escreva no programa e use Ctrl + S (Salvar como), escolhendo a pasta e o nome." }
    ],
    vf: [{ v: true }, { v: false, why: "O monitor <strong>mostra</strong>: é de saída." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "Monte o algoritmo: plantar uma muda", robo: {"paineis": ["➡️ fazer um sanduíche"], "passos": [{"fala": "Olha como eu monto a ordem de <b>outra</b> coisa: fazer um sanduíche. Eu pergunto: “o que tem que acontecer <b>primeiro</b>?”", "painel": 0, "titulo": "fazer um sanduíche"}, {"fala": "Clico no que vem primeiro.", "painel": 0, "linha": "1. Pegar o pão", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "2. Abrir o pão", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "3. Colocar o recheio", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "4. Fechar o pão", "marca": true, "espera": 1700}, {"fala": "Se eu clicar errado, apago e tento de novo. A ordem tem que fazer sentido do começo ao fim.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: pense no que acontece primeiro ao plantar a muda. 💪"},
        enunciado: "<p>Clique nos passos <strong>na ordem</strong> certa.</p>",
        etapas: [
          { ic: "🧤", t: "Pegar a pá e a muda", dica: "Primeiro, separe o material." },
          { ic: "⛏️", t: "Cavar um buraco" },
          { ic: "🌱", t: "Colocar a muda no buraco" },
          { ic: "💧", t: "Regar a planta", dica: "A água vem por último." }],
        okMsg: "Algoritmo na ordem certa! 🌳",
        explicacao: "Os passos de um <strong>algoritmo</strong> precisam estar na <strong>ordem</strong> certa." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Arrume os passos para escovar os dentes",
        itens: ["🪥 Colocar pasta na escova", "😁 Escovar os dentes", "💧 Enxaguar a boca", "🧺 Guardar a escova"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong> para deixar os passos <strong>em ordem</strong>.</p>",
        explicacao: "Pasta → escovar → enxaguar → guardar. Isso é um algoritmo!" },

      { tipo: "robo", titulo: "Passo 2 · Leve o robô 🤖 até a estrela ⭐", robo: {"paineis": ["🗺️ Outro labirinto: robô em A1, estrela em B2"], "passos": [{"fala": "Cada seta anda <b>uma casa</b>.", "painel": 0, "titulo": "Robô A1 → estrela B2"}, {"fala": "➡️: o robô vai de A1 para B1.", "painel": 0, "linha": "➡️"}, {"fala": "⬇️: desce de B1 para B2, a estrela!", "painel": 0, "linha": "⬇️ ⭐", "marca": true}, {"fala": "Depois clico em ▶ Executar para ver se deu certo.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez! 💪"},
        enunciado: "<p>Use as setas, uma por casa. Não passe pela parede 🧱. Depois clique em <strong>Executar</strong>.</p>",
        grade: ["R..", "##.", "..*"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1]],
        dicas: ["Embaixo do robô tem parede: vá primeiro para a direita ➡️."],
        explicacao: "Um caminho certo: ➡️ ➡️ ⬇️ ⬇️." },

      { tipo: "classificar", titulo: "Passo 3 · Repetição ou escolha?",
        categorias: [{ id: "R", rot: "Repetição", ic: "🔁", desc: "o mesmo passo várias vezes" }, { id: "S", rot: "Escolha (se… então)", ic: "🔀", desc: "depende de uma condição" }],
        itens: [
          { t: "Repita 3 vezes: pule", ic: "🦘", c: "R" },
          { t: "Se chover, então levo guarda-chuva", ic: "☔", c: "S" },
          { t: "O despertador toca todo dia", ic: "⏰", c: "R" },
          { t: "Se a senha estiver certa, então o celular abre", ic: "📱", c: "S" }],
        explicacao: "<strong>Repetição</strong> faz várias vezes. <strong>Escolha</strong> usa <strong>se… então</strong>." },

      { tipo: "pintura", titulo: "Passo 4 · Siga o algoritmo de pintar", robo: {"paineis": ["🎨 Meu algoritmo: se for o 2º, pinte de preto; senão, deixe branco."], "passos": [{"fala": "Olha como eu sigo <b>outro</b> algoritmo. Primeiro eu leio a regra inteira: se for o 2º, pinte de preto; senão, deixe branco.", "painel": 0, "titulo": "3 quadrados"}, {"fala": "1º quadrado: a regra manda pintar? <b>Não</b> → deixo branco.", "painel": 0, "linha": "1º → ⬜ branco", "espera": 1500}, {"fala": "2º quadrado: a regra manda pintar? <b>Sim</b> → pinto de preto.", "painel": 0, "linha": "2º → ⬛ preto", "marca": true, "espera": 1500}, {"fala": "3º quadrado: a regra manda pintar? <b>Não</b> → deixo branco.", "painel": 0, "linha": "3º → ⬜ branco", "espera": 1500}, {"fala": "Viu? Eu olho <b>um de cada vez</b> e faço a pergunta da regra para cada um.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: leia a sua regra e faça um quadrado de cada vez. 💪"}, forma: "quadrado", n: 3, pretos: [1, 3],
        regra: "<strong>Repita 3 vezes:</strong> desenhe um quadrado. Depois: <strong>se</strong> for o 1º ou o 3º, pinte de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["Só o 1º e o 3º ficam pretos. O do meio fica branco."],
        explicacao: "Você usou <strong>repetição</strong> (repita 3 vezes) e <strong>escolha</strong> (se… senão)." }
    ],
    vf: [{ v: true }, { v: false, why: "A ordem importa: não dá para regar antes de plantar." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "mensagens", titulo: "No grupo da turma: respeito ou cyberbullying?", robo: {"paineis": ["💬 Outras mensagens"], "passos": [{"fala": "Olha como eu decido com <b>outros</b> exemplos. Eu faço sempre as mesmas perguntas: Essa mensagem humilha, zomba ou expõe alguém? Ou ajuda e respeita?", "painel": 0, "titulo": "Meus exemplos"}, {"fala": "“Kkkk olha o cabelo do Caio, que ridículo! Manda pra todo mundo” → zomba de alguém e pede para espalhar: humilha.", "painel": 0, "linha": "Kkkk olha o cabelo do Caio, que ridículo! Mand… → 🚫 Cyberbullying", "marca": true, "espera": 2600}, {"fala": "“Gente, a prova de Ciências é sexta. Bons estudos!” → ajuda a turma e não ofende ninguém.", "painel": 0, "linha": "Gente, a prova de Ciências é sexta. Bons estud… → 😊 Respeito", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: leia cada mensagem e faça a mesma pergunta. 💪"}, app: "💬 Grupo do 6º ano",
        botoes: [{ id: "R", rot: "😊 Respeito" }, { id: "B", rot: "🚫 Cyberbullying" }],
        enunciado: "<p>Leia cada mensagem e clique na resposta.</p>",
        itens: [
          { de: "Lucas", t: "Parabéns, Maria, seu trabalho ficou lindo! 👏", c: "R" },
          { de: "Anônimo", t: "Olha a foto do João dormindo kkkk espalhem 😂", c: "B", why: "Espalhar a foto de alguém para rirem dele é cyberbullying." },
          { de: "Bia", t: "Alguém me ajuda na tarefa?", c: "R" }],
        okMsg: "Você reconhece o cyberbullying. Se acontecer, conte a um adulto." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Mensagem com respeito ou ofensa?",
        categorias: [{ id: "R", rot: "Com respeito", ic: "😊", desc: "trata bem" }, { id: "O", rot: "Ofensa", ic: "🚫", desc: "machuca o colega" }],
        itens: [
          { t: "Seu desenho ficou bonito!", ic: "🎨", c: "R" },
          { t: "Você é burro, errou tudo", ic: "😠", c: "O" },
          { t: "Posso te ajudar?", ic: "🤝", c: "R" },
          { t: "Sai do grupo, ninguém gosta de você", ic: "🚪", c: "O" }],
        explicacao: "Na internet, escreva como se a pessoa estivesse na sua frente." },

      { tipo: "escolha", titulo: "Passo 2 · Responda",
        perguntas: [
          { p: "🔐 Qual senha é a mais forte?", opcoes: ["123456", "Gato#2026!Azul", "maria"], certo: 1 },
          { p: "😟 Algo me assustou na internet. O que eu faço?", opcoes: ["Conto a um adulto de confiança", "Guardo segredo", "Respondo com ofensa"], certo: 0 }],
        explicacao: "Senha forte é comprida e mistura letras, números e símbolos. Se algo assustar, conte a um adulto." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 3 · Celular velho: certo ou errado?", colunaItem: "O que fazer com o celular que não funciona mais", colunaResp: "Certo?",
        categorias: [{ id: "C", rot: "Certo" }, { id: "E", rot: "Errado" }],
        itens: [
          { t: "🗑️ Jogar no lixo comum", c: "E", why: "Ele tem metais que sujam a terra e a água." },
          { t: "♻️ Levar a um ponto de coleta", c: "C" },
          { t: "🔧 Tentar consertar", c: "C" },
          { t: "🌊 Jogar no rio", c: "E" }],
        explicacao: "Consertar, doar ou levar ao ponto de coleta. Nunca no lixo comum." },

      { tipo: "cartaz", titulo: "Passo 4 · Monte o seu cartaz da natureza", robo: {"paineis": ["🖼️ Meu cartaz de exemplo: Eu cuido da escola"], "passos": [{"fala": "Olha como eu monto um cartaz de <b>outro</b> tema, em 3 passos:", "painel": 0, "titulo": "Eu cuido da escola"}, {"fala": "1. Escolho desenhos que <b>combinam com o tema</b>: clico em cada um (clicando de novo, ele sai).", "painel": 0, "linha": "1. Desenhos: 📚 🤝"}, {"fala": "2. Clico numa cor de fundo.", "painel": 0, "linha": "2. Cor: azul"}, {"fala": "3. Escrevo a frase no campo de texto, completa, com letra maiúscula e ponto final.", "painel": 0, "linha": "3. Frase: Eu cuido da minha escola.", "marca": true, "espera": 3000}], "fim": "Agora é a sua vez: siga o que o cartaz pede (desenhos da natureza e a cor verde). 💪"}, tituloCartaz: "Eu cuido da natureza",
        desenhos: ["🌳", "🌎", "♻️", "🌻", "🐦", "🐟", "☀️", "💧"], cor: "verde", dicaCor: "Clique na cor <strong>verde</strong>, a cor da natureza.",
        campos: [{ rot: "De que cor é o seu cartaz?", opcoes: ["Vermelho", "Verde", "Azul"], gab: "Verde", re: "^Verde$", dica: "A cor pedida é <strong>verde</strong>, a cor da natureza." }],
        okMsg: "Cartaz pronto! Verde, como a natureza que a gente protege. 🌳" }
    ],
    vf: [{ v: false, why: "Cyberbullying machuca de verdade." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { id: "m4-sim-zip", tipo: "sim_pc", titulo: "🗜️ Simulador: compacte, descompacte e ache arquivos",
        enunciado: "<p>No <strong>computador de mentira</strong>, compacte uma pasta em <strong>.zip</strong>, descompacte o .zip que um colega mandou e ache um arquivo pela pesquisa. O <strong>Bit</strong> confere cada passo.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: {
          "Downloads": [{ nome: "Trabalho de Ciências", tipo: "pasta" }, { nome: "video-da-festa", ext: "mp4", kb: 48600 }, { nome: "foto-da-turma", ext: "jpg", kb: 3200, figura: "🧑‍🤝‍🧑" }, { nome: "fotos-da-excursao", ext: "zip", kb: 9800, tem: [{ nome: "cachoeira", ext: "jpg", kb: 4100, figura: "🏞️" }, { nome: "onibus", ext: "jpg", kb: 3900, figura: "🚌" }, { nome: "lanche", ext: "jpg", kb: 3500, figura: "🥪" }] }],
          "Trabalho de Ciências": [{ nome: "capa", ext: "docx", kb: 820 }, { nome: "pesquisa-planetas", ext: "docx", kb: 1450 }, { nome: "cartaz", ext: "pptx", kb: 2600 }],
          "Documentos": [{ nome: "receita-de-bolo", ext: "txt", kb: 2, texto: "Bolo de cenoura\n- 3 cenouras\n- 3 ovos\n- 2 xícaras de farinha\n- 1 xícara de açúcar" }]
        },
        passos: [
          { faca: "Primeiro ligue as <b>Extensões</b> (botão lá em cima, à direita): assim você vê o <b>.zip</b> no fim do nome.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "A pasta <b>Trabalho de Ciências</b> é grande para mandar ao professor. Clique nela com o <b>botão direito</b> e escolha <b>Compactar</b> (no Windows 10: Enviar para › Pasta compactada).", ok: "compactar:arq:Trabalho de Ciências", onde: "arq:Trabalho de Ciências", dica: "No Windows 11 o menu diz <b>Compactar para arquivo ZIP</b>; no Windows 10, <b>Enviar para › Pasta compactada</b>." },
          { faca: "Apareceu o <b>Trabalho de Ciências.zip</b> 🗜️: compare o tamanho dele com os arquivos lá de dentro (2,6 MB + 1,4 MB + 820 KB). Dê <b>duplo clique</b> no .zip para ver o que tem dentro.", ok: "/^abrir:arq:trabalho de ci.ncias(\\.zip)?$/", onde: "arq:Trabalho de Ciências.zip" },
          { faca: "Feche essa janela no <b>X</b>.", ok: "fechar:jan:ver", onde: "jan:ver:fechar" },
          { faca: "Um colega mandou <b>fotos-da-excursao.zip</b>. Para usar as fotos, descompacte: <b>botão direito</b> nele › <b>Extrair Tudo...</b>", ok: "extrair:arq:fotos-da-excursao*", onde: "arq:fotos-da-excursao.zip" },
          { faca: "Agora ache a <b>receita-de-bolo</b> pela <b>pesquisa</b> 🔍: digite <b>bolo</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*bolo/", onde: "exp:busca" }
        ],
        fimMsg: "Você compactou uma pasta (o .zip ficou menor), descompactou outro .zip e achou um arquivo pela pesquisa!",
        explicacao: "Compactar junta arquivos num só .zip e diminui o tamanho, bom para mandar pela internet. Descompactar (Extrair Tudo) tira os arquivos do .zip. A pesquisa 🔍 do Explorador acha um arquivo pelo nome." },
      { id: "m4-pratica-1", tipo: "bits", titulo: "Acenda as lâmpadas", robo: {"paineis": ["💡 Outro número: o 3"], "passos": [{"fala": "As lâmpadas valem 4, 2 e 1. Quero o <b>3</b>:", "painel": 0, "titulo": "Quero o 3"}, {"fala": "A de 4 é grande demais: fica apagada.", "painel": 0, "linha": "4 → apagada"}, {"fala": "Acendo a de 2 e a de 1: 2 + 1 = 3!", "painel": 0, "linha": "2 + 1 = 3 ✔", "marca": true}], "fim": "Agora é a sua vez: acenda as lâmpadas que somam o número pedido. 💪"},
        enunciado: "<p>Clique nas lâmpadas para <strong>acender (1)</strong> ou <strong>apagar (0)</strong>. A soma das acesas tem que dar o número pedido.</p>",
        valores: [4, 2, 1],
        fases: [{ alvo: 1, pede: "Faça o número **1**.", dica: "Acenda só a lâmpada que vale 1." }, { alvo: 3, pede: "Faça o número **3**.", dica: "3 = 2 + 1." }],
        explicacao: "1 = 001 e 3 = 011. Acesa é 1, apagada é 0." }
    ],
    basico: [
      { id: "m4-basico-1", tipo: "classificar", titulo: "Passo 1 · Pequeno, médio ou grande?",
        categorias: [{ id: "K", rot: "KB", ic: "📄", desc: "pequeno" }, { id: "M", rot: "MB", ic: "🖼️", desc: "médio" }, { id: "G", rot: "GB", ic: "🎬", desc: "grande" }],
        itens: [{ t: "Um texto", ic: "📄", c: "K" }, { t: "Uma foto", ic: "🖼️", c: "M" }, { t: "Um filme", ic: "🎬", c: "G" }],
        explicacao: "Texto = KB (pequeno). Foto = MB (médio). Filme = GB (grande)." },
      { id: "m4-basico-2", tipo: "ordenar", titulo: "Passo 2 · Do menor para o maior",
        enunciado: "<p>Use as setas ▲▼ até ficar do <strong>menor</strong> para o <strong>maior</strong>.</p>",
        itens: ["KB", "MB", "GB"], explicacao: "KB → MB → GB." },
      { id: "m4-basico-3", tipo: "escolha", titulo: "Passo 3 · Achar e compactar",
        perguntas: [{ p: "🔍 Como acho o meu trabalho?", opcoes: ["Digito o nome dele na lupa", "Desligo o computador"], certo: 0 },
          { p: "🗜️ Compactar é:", opcoes: ["Juntar arquivos em um só, menor", "Apagar os arquivos"], certo: 0 }],
        explicacao: "A lupa 🔍 acha o arquivo pelo nome. Compactar junta tudo num .zip menor." },
      { id: "m4-basico-4", tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal", robo: {"paineis": ["⌨️ Como eu digito"], "passos": [{"fala": "Olha como eu faço com <b>outra</b> frase. Clico na caixa. Para as letras grandes, aperto uma vez o <b>Caps Lock</b> (a luzinha acende):", "painel": 0, "linha": "Caps Lock ligado 💡"}, {"fala": "Digito letra por letra. Entre uma palavra e outra, aperto a <b>barra de espaço</b>, a tecla comprida:", "painel": 0, "linha": "EU GOSTO DE APRENDER", "marca": true}, {"fala": "No fim, confiro se ficou igualzinho e aperto <b>Verificar</b>.", "painel": null, "espera": 2400}], "fim": "Agora é a sua vez: digite a frase da tarefa, igualzinho! 💪"},
        enunciado: "<p>Digite na caixa: <strong>0 E 1</strong></p>",
        linhas: [["Digite aqui:", { r: "0 E 1", tipo: "letras", w: 10, ph: "0 E 1", dica: "Digite: 0 E 1." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "O filme é MUITO maior que o texto." }, { v: true }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "O teclado é de:", opcoes: ["Entrada", "Saída"], certo: 0 }], explicacao: "O teclado é de: Entrada." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Repetir um passo várias vezes é:", opcoes: ["Repetição", "Seleção"], certo: 0 }], explicacao: "Repetir um passo várias vezes é: Repetição." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "Celular quebrado vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }], explicacao: "Celular quebrado vai para: O ponto de coleta." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "O computador guarda tudo com:", opcoes: ["0 e 1", "Desenhos"], certo: 0 }], explicacao: "O computador guarda tudo com: 0 e 1." },
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🌐 O computador e meus arquivos", "⚙️ Algoritmos", "🤝 Cidadão digital"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
