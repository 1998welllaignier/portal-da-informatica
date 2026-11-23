/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 4º bimestre de 2027 (Rede, arquivos e planeta)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   A Missão 3 (Bits e bytes) reaproveita a Missão 4 do 6º ano de 2026 (outra turma), com o simulador do computador.
   BNCC Computação: EF06CO07, EF06CO08, EF06CO09, EF06CO10.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-6ano-2027-4bim", {

  m1: {
    pratica: [
      { tipo: "ordenar", titulo: "Mão na massa: remonte a mensagem",
        robo: BIT("📦 Outra mensagem", [["Chegaram: [3] “amanhã”, [1] “Te vejo”, [2] “na escola”.", "fora de ordem"], ["Pelo número: 1 “Te vejo”, 2 “na escola”, 3 “amanhã”.", "1 → 2 → 3", true]]),
        enunciado: "<p>Os pacotes chegaram <strong>fora de ordem</strong>. Use o <strong>número de ordem</strong> de cada um para remontar a mensagem.</p>",
        itens: ["[1] A aula de", "[2] Informática", "[3] começa às", "[4] 7 horas!"],
        explicacao: "1 → 2 → 3 → 4: “A aula de Informática começa às 7 horas!”" }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada etiqueta do pacote e a sua função",
        pares: [{ a: "📬 Endereço de destino", b: "Diz para onde o pacote vai" }, { a: "📮 Endereço de origem", b: "Diz de onde ele saiu" }, { a: "🔢 Número de ordem", b: "Diz a posição do pedaço" }, { a: "🧩 Dados", b: "O pedaço da foto, da mensagem ou do vídeo" }],
        explicacao: "Destino, origem, número de ordem e dados." },
      { tipo: "ordenar", titulo: "A viagem de uma foto, em ordem",
        itens: ["O celular divide a foto em pacotes", "Os pacotes viajam pela internet", "Os pacotes chegam (às vezes fora de ordem)", "O número de ordem ajuda a remontar a foto"],
        explicacao: "Dividir → viajar → chegar → remontar." },
      { tipo: "escolha", titulo: "Pacotes",
        perguntas: [
          { p: "Um pacote se perdeu na viagem. O que acontece?", opcoes: ["É reenviado só aquele pedaço", "A foto inteira é apagada", "A internet desliga"], certo: 0 },
          { p: "Por que dividir em pedaços pequenos?", opcoes: ["Os pedaços dividem a estrada com os de outras pessoas e um erro reenvia só um pedaço", "Para a foto ficar menor para sempre", "Para esconder a foto"], certo: 0 }],
        explicacao: "Pacote perdido é reenviado; pedaços pequenos dividem a estrada e facilitam corrigir erros." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "🟡 Remonte o recado do quebra-cabeça",
        enunciado: "<p>Seis pacotes chegaram embaralhados. Coloque pelo número de ordem.</p>", dicas: ["Comece pelo [1]."],
        itens: ["[1] Pessoal,", "[2] amanhã", "[3] tem", "[4] aula", "[5] no laboratório", "[6] de Informática."],
        explicacao: "“Pessoal, amanhã tem aula no laboratório de Informática.”" }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos pacotes",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Pacote", b: "Um pedaço pequeno da informação" }, { a: "Destino", b: "O lugar para onde algo vai" }, { a: "Remontar", b: "Juntar os pedaços na ordem certa de novo" }, { a: "Reenviar", b: "Mandar outra vez" }],
        explicacao: "Pacote, destino, remontar e reenviar." }
    ],
    vf: [
      { v: true, why: "Ela é dividida em pacotes." },
      { v: true, why: "Para saber para onde ir." },
      { v: false, corrigir: { trecho: "sempre chegam na ordem certa", opcoes: ["sempre chegam na ordem certa", "podem chegar fora de ordem"], certo: "podem chegar fora de ordem" }, why: "O número de ordem ajuda a remontar." },
      { v: true, why: "Só o pedaço perdido." },
      { v: true, why: "Mostra a posição." }
    ]
  },

  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual parada faz isso?",
        robo: BIT("🔎 A pergunta", [["Escolhe o caminho? Roteador. Guarda o site? Servidor.", "caminho → roteador"], ["Atravessa o oceano? Cabo submarino.", "oceano → cabo", true]]),
        enunciado: "<p>Use a tabela <strong>Parada · O que faz</strong>.</p>",
        colunaItem: "O que faz", colunaResp: "Parada",
        categorias: [{ id: "A", rot: "📱 Seu aparelho" }, { id: "P", rot: "🏢 Provedor" }, { id: "R", rot: "🔀 Roteadores da internet" }, { id: "C", rot: "🌊 Cabos submarinos" }, { id: "S", rot: "🖥️ Servidor" }],
        itens: [{ t: "Divide a informação em pacotes", c: "A" }, { t: "A empresa que liga a sua casa à internet", c: "P" }, { t: "Escolhem, a cada parada, o melhor caminho", c: "R" }, { t: "Levam os pacotes pelo fundo do mar", c: "C" }, { t: "O computador onde o site fica guardado", c: "S" }],
        explicacao: "Aparelho, provedor, roteadores, cabos submarinos e servidor." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "As paradas do pacote, em ordem",
        itens: ["📱 Seu aparelho", "📶 Roteador de casa (Wi-Fi)", "🏢 Provedor", "🔀 Roteadores da internet", "🖥️ Servidor"],
        explicacao: "Aparelho → roteador → provedor → roteadores da internet → servidor." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Roteador", b: "Aparelho que escolhe o caminho dos pacotes" }, { a: "Servidor", b: "Computador que guarda sites e serviços e responde aos pedidos" }, { a: "Endereço IP", b: "O número que identifica cada aparelho na rede" }, { a: "Fibra óptica", b: "Fio fino de vidro que leva os dados como luz" }],
        explicacao: "Roteador, servidor, endereço IP e fibra óptica." },
      { tipo: "escolha", titulo: "O caminho",
        perguntas: [
          { p: "Todos os pacotes da mesma foto vão pelo mesmo caminho?", opcoes: ["Não: cada pacote pode ir por um caminho diferente", "Sim, sempre", "Só se chover"], certo: 0 },
          { p: "Como os continentes se ligam pela internet?", opcoes: ["Por cabos de fibra óptica no fundo do mar", "Só por satélites", "Por fios de telefone no céu"], certo: 0 },
          { p: "O cabo EllaLink liga Fortaleza a:", opcoes: ["Portugal", "Japão", "Austrália"], certo: 0 }],
        explicacao: "Cada pacote pode ir por um caminho; os continentes se ligam por cabos submarinos; o EllaLink liga Fortaleza a Portugal." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 A estrada quebrou! Por onde o pacote vai?",
        enunciado: "<p>O pacote está no roteador A e quer chegar ao servidor. Caminhos: <strong>A → B → servidor</strong> e <strong>A → C → D → servidor</strong>.</p>", dicas: ["Se uma estrada estiver quebrada, o roteador manda o pacote por outra."],
        perguntas: [
          { p: "A estrada entre B e o servidor quebrou. Por onde o pacote vai?", opcoes: ["A → C → D → servidor", "Fica parado para sempre", "Volta para o celular e desiste"], certo: 0 },
          { p: "Quem decide desviar o pacote?", opcoes: ["O roteador", "O servidor", "O pacote sozinho"], certo: 0 },
          { p: "No destino, os pacotes que vieram por caminhos diferentes:", opcoes: ["São remontados pelo número de ordem", "Viram outra foto", "São jogados fora"], certo: 0 }],
        explicacao: "O roteador desvia pelo outro caminho e, no destino, os pacotes são remontados." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o caminho dos pacotes",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O **roteador** escolhe o caminho dos pacotes. A empresa que liga a casa à internet é o **provedor**. O site fica guardado num **servidor**. Cada aparelho tem um endereço **IP**. A fibra **óptica** leva os dados como luz.",
        explicacao: "Roteador, provedor, servidor, IP e óptica." }
    ],
    vf: [
      { v: true, why: "É a função dele." },
      { v: false, corrigir: { trecho: "precisam ir pelo mesmo caminho", opcoes: ["precisam ir pelo mesmo caminho", "podem ir por caminhos diferentes"], certo: "podem ir por caminhos diferentes" }, why: "O roteador escolhe o melhor caminho para cada um." },
      { v: true, why: "O servidor responde aos pedidos." },
      { v: true, why: "Pelo fundo do mar." },
      { v: false, corrigir: { trecho: "é o cabo que deixa a internet lenta", opcoes: ["é o cabo que deixa a internet lenta", "é a empresa que liga a sua casa à internet"], certo: "é a empresa que liga a sua casa à internet" }, why: "O provedor é a empresa que liga a casa à internet." }
    ]
  },

  m3: {
    pratica: [
      { id: "m3-sim-zip", tipo: "sim_pc", titulo: "🗜️ Simulador: compacte, descompacte e ache arquivos",
        enunciado: "<p>No <strong>computador de mentira</strong>, compacte uma pasta em <strong>.zip</strong>, descompacte o .zip que um colega mandou e ache um arquivo pela pesquisa. O <strong>Bit</strong> confere cada passo.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: {
          "Downloads": [{ nome: "Trabalho de Ciências", tipo: "pasta" }, { nome: "video-da-festa", ext: "mp4", kb: 48600 }, { nome: "foto-da-turma", ext: "jpg", kb: 3200, figura: "🧑‍🤝‍🧑" }, { nome: "fotos-da-excursao", ext: "zip", kb: 9800, tem: [{ nome: "cachoeira", ext: "jpg", kb: 4100, figura: "🏞️" }, { nome: "onibus", ext: "jpg", kb: 3900, figura: "🚌" }, { nome: "lanche", ext: "jpg", kb: 3500, figura: "🥪" }] }],
          "Trabalho de Ciências": [{ nome: "capa", ext: "docx", kb: 820 }, { nome: "pesquisa-planetas", ext: "docx", kb: 1450 }, { nome: "cartaz", ext: "pptx", kb: 2600 }],
          "Documentos": [{ nome: "receita-de-bolo", ext: "txt", kb: 2, texto: "Bolo de cenoura\n- 3 cenouras\n- 3 ovos\n- 2 xícaras de farinha\n- 1 xícara de açúcar" }]
        },
        passos: [
          { faca: "Ative as <b>Extensões</b> e olhe a coluna <b>Tamanho</b>. Clique <b>uma vez</b> no arquivo <b>maior</b> da pasta.", ok: "clique:arq:video-da-festa*", onde: "exp:ext", erros: { "clique:arq:*": "Esse não é o maior. Compare a coluna Tamanho: MB é maior que KB!" } },
          { faca: "A pasta <b>Trabalho de Ciências</b> é grande para mandar ao professor. Clique nela com o <b>botão direito</b> e escolha <b>Compactar</b> (no Windows 10: Enviar para › Pasta compactada).", ok: "compactar:arq:Trabalho de Ciências", onde: "arq:Trabalho de Ciências", dica: "No Windows 11 o menu diz <b>Compactar para arquivo ZIP</b>; no Windows 10, <b>Enviar para › Pasta compactada</b>." },
          { faca: "Apareceu o <b>Trabalho de Ciências.zip</b> 🗜️: compare o tamanho dele com os arquivos lá de dentro (2,6 MB + 1,4 MB + 820 KB). Dê <b>duplo clique</b> no .zip para ver o que tem dentro.", ok: "/^abrir:arq:trabalho de ci.ncias(\\.zip)?$/", onde: "arq:Trabalho de Ciências.zip" },
          { faca: "Feche essa janela no <b>X</b>.", ok: "fechar:jan:ver", onde: "jan:ver:fechar" },
          { faca: "Um colega mandou <b>fotos-da-excursao.zip</b>. Para usar as fotos, descompacte: <b>botão direito</b> nele › <b>Extrair Tudo...</b>", ok: "extrair:arq:fotos-da-excursao*", onde: "arq:fotos-da-excursao.zip" },
          { faca: "Onde está a <b>receita-de-bolo</b>? Use a <b>pesquisa</b> 🔍 do Explorador: digite <b>bolo</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*bolo/", onde: "exp:busca" },
          { faca: "Achou! Abra a <b>receita-de-bolo</b> com <b>duplo clique</b>.", ok: "/^abrir:arq:receita-de-bolo/", onde: "arq:receita-de-bolo.txt" }
        ],
        fimMsg: "Você compactou uma pasta (o .zip ficou menor), descompactou outro .zip e achou um arquivo pela pesquisa!",
        explicacao: "Compactar junta arquivos num só .zip e diminui o tamanho, bom para mandar pela internet. Descompactar (Extrair Tudo) tira os arquivos do .zip. A pesquisa 🔍 do Explorador acha um arquivo pelo nome." },
      { id: "m3-pratica-1", tipo: "bits", titulo: "Fale a língua do computador: números com lâmpadas", robo: {"paineis": ["💡 Outro número: o 6"], "passos": [{"fala": "Olha como eu escrevo o número <b>6</b> com as lâmpadas que valem 8, 4, 2 e 1:", "painel": 0, "titulo": "Quero o 6"}, {"fala": "A de 8 é maior que 6: fica <b>apagada</b> (0).", "painel": 0, "linha": "8 → apagada (0)"}, {"fala": "A de 4 cabe: acendo (1). Falta 6 − 4 = 2.", "painel": 0, "linha": "4 → acesa (1) · falta 2"}, {"fala": "A de 2 completa: acendo (1). Falta 0.", "painel": 0, "linha": "2 → acesa (1) · falta 0"}, {"fala": "A de 1 fica apagada (0). Soma: 4 + 2 = 6!", "painel": 0, "linha": "1 → apagada (0) · bits 0110", "marca": true, "espera": 3000}], "fim": "Agora é a sua vez: comece pela lâmpada maior e veja quanto falta. 💪"},
        enunciado: "<p>Cada lâmpada é um <strong>bit</strong>: <strong>acesa = 1</strong>, <strong>apagada = 0</strong>. Cada lâmpada vale um número (8, 4, 2 e 1). Acenda as lâmpadas certas para a <strong>soma</strong> dar o número pedido e clique em <strong>Pronto!</strong></p>",
        valores: [8, 4, 2, 1],
        fases: [
          { alvo: 3, pede: "Escreva o número **3**.", dica: "3 = 2 + 1. Acenda as lâmpadas que valem 2 e 1." },
          { alvo: 5, pede: "Escreva o número **5**.", dica: "5 = 4 + 1." },
          { alvo: 10, pede: "Escreva o número **10**.", dica: "10 = 8 + 2." },
          { alvo: 15, pede: "Escreva o número **15**: o maior que dá com 4 lâmpadas.", dica: "Acenda todas: 8 + 4 + 2 + 1." }],
        okMsg: "Você escreveu números só com 0 e 1, como o computador faz!",
        explicacao: "3 = 0011 · 5 = 0101 · 10 = 1010 · 15 = 1111. O computador guarda tudo assim, em bits (0 e 1)." }
    ],
    bonus: [
      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: bits e bytes relâmpago",
        perguntas: [
          { p: "Lâmpadas que valem 8, 4, 2 e 1. Acesas: a de <b>8</b> e a de <b>1</b>. Que número é?", opcoes: ["9", "81", "5"], certo: 0, why: "8 + 1 = 9." },
          { p: "O que é maior?", opcoes: ["1 GB", "1 MB", "1 KB"], certo: 0, why: "KB < MB < GB: o GB é o maior." },
          { p: "Qual extensão é de <b>vídeo</b>?", opcoes: [".mp4", ".txt", ".jpg"], certo: 0, why: ".mp4 é vídeo; .txt é texto e .jpg é foto." }
        ] }
    ],
    basico: [
      { id: "m3-basico-1", tipo: "ordenar", titulo: "Do menor para o maior: as medidas",
        enunciado: "<p>Arraste (ou use as setas ▲▼) até ficar do <strong>menor</strong> para o <strong>maior</strong>.</p>",
        itens: ["bit", "byte", "KB (quilobyte)", "MB (megabyte)", "GB (gigabyte)", "TB (terabyte)"],
        dicas: ["O menor de todos é o bit, que vale 0 ou 1.", "Depois do byte, as medidas crescem de mil em mil: KB, MB, GB, TB."],
        explicacao: "bit → byte (8 bits) → KB → MB → GB → TB. Cada medida, a partir do byte, é cerca de mil vezes maior que a anterior." },
      { id: "m3-sim-espaco", tipo: "sim_pc", titulo: "💾 Simulador: o computador está sem espaço!",
        enunciado: "<p>O computador de mentira está cheio. Descubra quem ocupa mais espaço olhando a coluna <strong>Tamanho</strong> e libere espaço. O <strong>Bit</strong> ajuda.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "bilhete", ext: "txt", kb: 1 }, { nome: "foto-do-gato", ext: "jpg", kb: 2800, figura: "🐱" }, { nome: "filme-da-festa", ext: "mp4", kb: 2400000 }, { nome: "filme-da-festa (copia)", ext: "mp4", kb: 2400000 }, { nome: "musica", ext: "mp3", kb: 4200 }] },
        passos: [
          { faca: "Ligue as <b>Extensões</b> (botão lá em cima, à direita).", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Olhe a coluna <b>Tamanho</b>: KB é pequeno, MB é médio, GB é grande. Clique <b>uma vez</b> no arquivo <b>menor</b>.", ok: "clique:arq:bilhete*", onde: "arq:bilhete.txt", erros: { "clique:arq:*": "Esse não é o menor. O menor tem o tamanho em <b>KB</b> com número pequeno." } },
          { faca: "Tem um filme <b>repetido</b>, a <b>(copia)</b>, gastando 2,3 GB à toa! Clique nele com o <b>botão direito</b> e escolha <b>Excluir</b>.", ok: "excluir:arq:filme-da-festa (copia)*", onde: "arq:filme-da-festa (copia).mp4", erros: { "excluir:arq:*": "Ops! Esse não é a cópia. Abra a Lixeira, restaure o arquivo e exclua o que tem <b>(copia)</b> no nome." } }
        ],
        fimMsg: "Você liberou 2,3 GB apagando só a cópia repetida. Olhar o tamanho ajuda a cuidar do espaço!",
        explicacao: "Do menor para o maior: KB, MB, GB, TB. Vídeos ocupam muito espaço; arquivos repetidos gastam espaço à toa." },
      { id: "m3-basico-2", tipo: "ordenar", titulo: "Do menor para o maior: os arquivos",
        enunciado: "<p>Coloque os arquivos do <strong>menor</strong> para o <strong>maior</strong>. Olhe o tamanho entre parênteses.</p>",
        itens: ["📄 bilhete.txt (2 KB)", "🖼️ foto-da-turma.jpg (3 MB)", "🎵 musica.mp3 (4 MB)", "🎬 video-da-festa.mp4 (200 MB)", "🍿 filme.mp4 (2 GB)"],
        dicas: ["KB é menor que MB, e MB é menor que GB.", "Entre a foto (3 MB) e a música (4 MB), qual número é menor?"],
        explicacao: "2 KB < 3 MB < 4 MB < 200 MB < 2 GB. Texto ocupa pouco; vídeo e filme ocupam muito." },
      { id: "m3-basico-3", tipo: "tabela", titulo: "Contas de quanto cabe", enunciado: "<p>Lembre: <strong>1 byte = 8 bits</strong> e <strong>1 GB ≈ 1000 MB</strong>. Para saber quantos arquivos cabem, <strong>divida</strong> o espaço livre pelo tamanho de um arquivo (os dois na mesma medida, em MB).</p>", robo: {"paineis": ["🧮 Quanto cabe?"], "passos": [{"fala": "Olha como eu calculo com <b>outro</b> exemplo: um cartão de memória de 2 GB.", "painel": 0, "linha": "2 GB ≈ 2000 MB"}, {"fala": "Quantas músicas de 4 MB cabem? Eu <b>divido</b> o espaço pelo tamanho de uma música:", "painel": 0, "linha": "2000 ÷ 4 = 500 músicas", "marca": true}, {"fala": "Lembre: 1 byte = 8 bits, e cada medida (KB → MB → GB) é cerca de <b>mil vezes</b> a anterior.", "painel": 0, "linha": "1 GB ≈ 1000 MB", "espera": 2600}], "fim": "Agora é a sua vez: faça as contas da tarefa dividindo o espaço pelo tamanho de cada arquivo! 💪"},
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantos bits formam 1 byte?", { r: "8", tipo: "num", w: 4 }],
          ["1 GB é cerca de quantos MB?", { r: "1000", tipo: "num", w: 6, dica: "Cada medida é cerca de mil vezes a anterior." }],
          ["Um pen drive de 1 GB (cerca de 1000 MB) guarda quantas fotos de 5 MB?", { r: "200", tipo: "num", w: 5, dica: "1000 ÷ 5" }],
          ["O que ocupa MAIS espaço?", { op: ["Um vídeo de 200 MB", "Um texto de 2 KB", "Uma foto de 3 MB"], r: "Um vídeo de 200 MB" }]],
        explicacao: "1 byte = 8 bits. 1 GB ≈ 1000 MB. 1000 ÷ 5 = 200 fotos. O vídeo de 200 MB é o maior." },
      { id: "m3-basico-4", tipo: "escolha", titulo: "Compactar e descompactar",
        perguntas: [
          { p: "O que acontece quando eu compacto 10 arquivos de texto?", opcoes: ["Viram um arquivo .zip só, menor que os 10 juntos", "Os arquivos são apagados", "Os arquivos ficam maiores"], certo: 0, why: "Compactar junta tudo em um .zip e diminui o tamanho." },
          { p: "Recebi um arquivo .zip. O que faço para usar os arquivos de dentro?", opcoes: ["Descompacto (extraio) o .zip", "Apago o .zip", "Mudo o nome para .jpg"], certo: 0 },
          { p: "Por que compactar fotos quase não diminui o tamanho?", opcoes: ["Porque as fotos já vêm compactadas", "Porque foto não pode ir para .zip", "Porque o .zip só aceita texto"], certo: 0, why: "Fotos (.jpg) e vídeos (.mp4) já são compactados quando são criados." }],
        explicacao: "Compactar junta e diminui; para usar, descompactamos (extraímos). Texto diminui bastante; foto e vídeo, quase nada, porque já vêm compactados." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Que tipo de arquivo é? Olhe a extensão", colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "F", rot: "🖼️ Foto" }, { id: "V", rot: "🎬 Vídeo" }, { id: "T", rot: "📄 Texto" }, { id: "Z", rot: "🗜️ Compactado" }],
        itens: [
          { t: "passeio.jpg", c: "F", why: ".jpg é foto." }, { t: "apresentacao.mp4", c: "V", why: ".mp4 é vídeo." },
          { t: "resumo.txt", c: "T", why: ".txt é texto." }, { t: "trabalhos-6A.zip", c: "Z", why: ".zip é compactado." },
          { t: "selfie.png", c: "F", why: ".png também é imagem." }],
        explicacao: "A extensão, depois do ponto, mostra o tipo: .jpg e .png = imagem · .mp4 = vídeo · .txt = texto · .zip = compactado." },
      { tipo: "escolha", titulo: "Ajude o colega a achar e organizar",
        perguntas: [
          { p: "O colega salvou o trabalho ontem e não lembra onde. Qual é o jeito mais rápido de achar?", opcoes: ["Digitar parte do nome na busca 🔍", "Abrir todas as pastas, uma por uma", "Desligar e ligar o computador"], certo: 0 },
          { p: "Ele quer ver primeiro os arquivos mais novos. Como ordenar?", opcoes: ["Por data, do mais recente para o mais antigo", "Por nome, de A a Z", "Pela cor da pasta"], certo: 0 },
          { p: "Qual nome é melhor para achar depois?", opcoes: ["trabalho-ciencias-6A.docx", "documento1.docx", "aaaaa.docx"], certo: 0, why: "Um nome que diz o que é, a matéria e a turma se acha fácil na busca." },
          { p: "O pen drive está cheio. O que libera MAIS espaço?", opcoes: ["Apagar 1 vídeo de 500 MB que já está salvo em outro lugar", "Apagar 1 texto de 2 KB", "Mudar o nome dos arquivos"], certo: 0 }],
        explicacao: "Busca 🔍 pelo nome; ordenar por data para ver os mais novos; nomes que dizem o que o arquivo é; e, para liberar espaço, apagar o que é grande (vídeo), depois de guardar uma cópia." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "O celular com 10 GB livres", robo: {"paineis": ["📱 Outro celular: 4 GB livres"], "passos": [{"fala": "Primeiro eu passo para MB:", "painel": 0, "linha": "4 GB ≈ 4000 MB"}, {"fala": "Músicas de 8 MB? Divido:", "painel": 0, "linha": "4000 ÷ 8 = 500 músicas", "marca": true}, {"fala": "Vídeos de 400 MB? Divido de novo:", "painel": 0, "linha": "4000 ÷ 400 = 10 vídeos", "marca": true}, {"fala": "O arquivo menor cabe <b>muito mais</b> vezes!", "painel": null, "espera": 2400}], "fim": "Agora é a sua vez: passe 10 GB para MB e divida! 💪"},
        enunciado: "<p>Use: <strong>1 GB ≈ 1000 MB</strong>. Então <strong>10 GB ≈ 10 000 MB</strong>. Para saber quantos arquivos cabem, <strong>divida</strong> o espaço (em MB) pelo tamanho de um arquivo.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantos vídeos de 500 MB cabem em 10 GB?", { r: "20", tipo: "num", w: 5, dica: "10 000 ÷ 500" }],
          ["Quantas fotos de 5 MB cabem em 10 GB?", { r: "2000", tipo: "num", w: 6, dica: "10 000 ÷ 5" }],
          ["Para guardar mais lembranças, o que ocupa menos espaço?", { op: ["Fotos", "Vídeos"], r: "Fotos" }]],
        explicacao: "10 000 ÷ 500 = 20 vídeos. 10 000 ÷ 5 = 2000 fotos. Cada vídeo de 500 MB ocupa o espaço de 100 fotos de 5 MB." }
    ],
    vf: [
      { v: true, why: "Como uma lâmpada apagada ou acesa." },
      { v: true, why: "8 bits = 1 byte." },
      { v: false, corrigir: { trecho: "menor", opcoes: ["menor", "maior"], certo: "maior" }, why: "GB é cerca de um milhão de KB: muito maior." },
      { v: true, why: "É o .zip." },
      { v: false, corrigir: { trecho: "um texto", opcoes: ["um texto", "um vídeo", "uma foto"], certo: "um vídeo" }, why: ".mp4 é vídeo." }
    ]
  },


  m4: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada metadado e o seu exemplo",
        robo: BIT("🔎 Como pensar", [["“4 MB” fala de tamanho. “10/03/2027” é uma data.", "MB → tamanho"], ["“Onde a foto foi tirada” é o local.", "onde → local", true]]),
        enunciado: "<p>Use a tabela <strong>Metadado · Exemplo</strong>.</p>",
        pares: [{ a: "📛 Nome e extensão", b: "passeio.jpg" }, { a: "📏 Tamanho", b: "3 MB" }, { a: "📅 Data de criação", b: "12/09/2027" }, { a: "📍 Local (em fotos)", b: "Onde a foto foi tirada" }],
        explicacao: "Nome, tamanho, data e local." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Metadados", b: "Informações sobre o arquivo, como data, tamanho e tipo" }, { a: "Propriedades", b: "A janela que mostra os metadados do arquivo" }, { a: "Subpasta", b: "Uma pasta dentro de outra pasta" }, { a: "Data de modificação", b: "O dia em que o arquivo foi mudado pela última vez" }],
        explicacao: "Metadados, propriedades, subpasta e data de modificação." },
      { tipo: "classificar", titulo: "Organização boa ou ruim?",
        categorias: [{ id: "B", rot: "👍 Boa" }, { id: "R", rot: "👎 Ruim" }],
        itens: [{ t: "Uma pasta para cada matéria", c: "B" }, { t: "Tudo solto na Área de Trabalho", c: "R" }, { t: "2027-ciencias-planetas", c: "B" }, { t: "documento1, documento2…", c: "R" }, { t: "Pasta Fotos › 2027 › Passeio", c: "B" }],
        explicacao: "Pastas por matéria, nomes que dizem o que é e subpastas organizam." },
      { tipo: "ordenar", titulo: "Da pasta maior para a menor",
        robo: BIT("🗂️ Outro exemplo", [["Escola › 2027 › Matemática › frações.docx", "maior → menor"], ["A pasta de fora guarda as de dentro.", "fora → dentro", true]]),
        enunciado: "<p>Coloque do <strong>mais de fora</strong> para o <strong>mais de dentro</strong>.</p>",
        itens: ["📁 Fotos", "📁 2027", "📁 Passeio", "🖼️ cachoeira.jpg"],
        explicacao: "Fotos › 2027 › Passeio › cachoeira.jpg." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Arrume a Área de Trabalho da Lia",
        enunciado: "<p>A Área de Trabalho da Lia está bagunçada. Para cada arquivo, escolha a pasta certa.</p>",
        app: "🗂️ Área de Trabalho", botoes: [{ id: "E", rot: "📁 Escola" }, { id: "F", rot: "📁 Fotos" }, { id: "M", rot: "📁 Músicas" }],
        itens: [{ de: "Arquivo", t: "2027-portugues-redacao.docx", c: "E" }, { de: "Arquivo", t: "aniversario-vovo.jpg", c: "F" }, { de: "Arquivo", t: "forro-da-festa.mp3", c: "M", why: ".mp3 é música." },
          { de: "Arquivo", t: "2027-ciencias-planetas.pptx", c: "E" }, { de: "Arquivo", t: "praia.png", c: "F", why: ".png é imagem." }],
        okMsg: "Área de Trabalho organizada! 🗂️",
        explicacao: "Trabalhos na pasta Escola, imagens em Fotos e músicas em Músicas." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da organização",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 📖 O que significa?."],
        palavras: ["METADADOS", "PASTA", "SUBPASTA", "TAMANHO", "DATA"],
        pistas: ["Informações sobre o arquivo", "Lugar que guarda arquivos, como uma gaveta", "Uma pasta dentro de outra pasta", "3 MB é o… do arquivo", "12/09/2027 é uma…"], tam: 10,
        explicacao: "Metadados, pasta, subpasta, tamanho e data." }
    ],
    vf: [
      { v: true, why: "Dados sobre os dados." },
      { v: true, why: "É a definição." },
      { v: true, why: "Como gaveta dentro de gaveta." },
      { v: false, corrigir: { trecho: "é um ótimo nome de arquivo", opcoes: ["é um ótimo nome de arquivo", "é um nome que se perde"], certo: "é um nome que se perde" }, why: "O nome deve dizer o que é." },
      { v: true, why: "Botão direito › Propriedades." }
    ]
  },

  m5: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: que tipo de obsolescência?",
        robo: BIT("🔎 A pergunta", [["Trocou só porque saiu outro? Moda.", "moda"], ["Parou de atualizar? Atualização. Peça cara? Conserto.", "atualização · conserto", true]]),
        enunciado: "<p>Use a tabela <strong>Tipo de obsolescência · Exemplo</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Tipo",
        categorias: [{ id: "M", rot: "📉 Pela moda" }, { id: "A", rot: "🔄 Falta de atualização" }, { id: "C", rot: "🔧 Dificuldade de conserto" }],
        itens: [{ t: "Trocar o celular só porque saiu um modelo novo", c: "M" }, { t: "O aparelho para de receber atualizações e alguns aplicativos deixam de funcionar", c: "A" }, { t: "A peça é cara ou difícil de achar, e fica mais fácil comprar outro", c: "C" }],
        explicacao: "Moda, falta de atualização e dificuldade de conserto." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Necessidade ou desejo?",
        categorias: [{ id: "N", rot: "✅ Necessidade" }, { id: "D", rot: "💭 Desejo" }],
        itens: [{ t: "Trocar o celular que quebrou e não tem conserto", c: "N" }, { t: "Trocar o celular só pela cor nova", c: "D" }, { t: "Comprar um carregador porque o seu estragou", c: "N" }, { t: "Comprar o terceiro fone, igual aos outros dois", c: "D" }],
        explicacao: "Necessidade: o que precisa de verdade. Desejo: o que quer, mas não precisa." },
      { tipo: "ligar", titulo: "Cada cuidado e o seu motivo",
        pares: [{ a: "🛡️ Capa e película", b: "Protegem de quedas e arranhões" }, { a: "🌡️ Longe do calor", b: "O calor estraga a bateria" }, { a: "🧹 Apagar o que não usa", b: "Libera espaço e o aparelho fica mais rápido" }, { a: "🔌 Carregador adequado", b: "Carregador ruim pode estragar a bateria" }],
        explicacao: "Cuidados que fazem o aparelho durar." },
      { tipo: "ordenar", titulo: "Antes de trocar, as perguntas em ordem",
        itens: ["Ele ainda funciona?", "Dá para consertar?", "Eu preciso mesmo de um novo, ou só quero?"],
        explicacao: "Funciona? → dá para consertar? → preciso ou só quero?" }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O Davi quer trocar de celular",
        perguntas: [
          { p: "O celular do Davi funciona bem, mas saiu um modelo novo. Isso é:", opcoes: ["Desejo, pela moda", "Necessidade", "Atualização"], certo: 0 },
          { p: "A tela trincou num canto, mas tudo funciona. O melhor é:", opcoes: ["Ver se dá para consertar e usar película", "Jogar fora", "Comprar dois novos"], certo: 0 },
          { p: "O Davi deixa o celular no painel do carro, no sol. O que acontece?", opcoes: ["O calor estraga a bateria", "A bateria dura mais", "Nada"], certo: 0 }],
        explicacao: "Moda é desejo; consertar e proteger fazem durar; o calor estraga a bateria." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: consumo consciente",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "Trocar o aparelho antes da hora é **obsolescência**. Antes de trocar, veja se dá para **consertar**. Para durar, use capa e **película** e deixe longe do **calor**. Consumo **consciente** é pensar no que precisa e no planeta.",
        explicacao: "Obsolescência, consertar, película, calor e consciente." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "É a perceptiva." },
      { v: false, corrigir: { trecho: "ajuda a bateria a durar mais", opcoes: ["ajuda a bateria a durar mais", "estraga a bateria"], certo: "estraga a bateria" }, why: "O calor estraga a bateria." },
      { v: true, why: "Funciona? Dá para consertar?" },
      { v: false, corrigir: { trecho: "é comprar tudo o que aparece na propaganda", opcoes: ["é comprar tudo o que aparece na propaganda", "é comprar pensando no que precisa e no planeta"], certo: "é comprar pensando no que precisa e no planeta" }, why: "Pensar antes de comprar." }
    ]
  },

  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: o que acontece?",
        robo: BIT("🔎 A pergunta", [["Vai para a reciclagem? Ponto de coleta.", "reciclagem → coleta"], ["Contamina? Lixo comum. Fumaça? Fogo.", "contamina · fumaça", true]]),
        enunciado: "<p>Use a tabela <strong>Onde jogar · O que acontece</strong>.</p>",
        colunaItem: "O que acontece", colunaResp: "Onde jogaram",
        categorias: [{ id: "L", rot: "🗑️ Lixo comum" }, { id: "F", rot: "🔥 Fogo" }, { id: "P", rot: "♻️ Ponto de coleta" }],
        itens: [{ t: "Metais e pilhas podem contaminar o solo e a água", c: "L" }, { t: "Solta fumaça tóxica", c: "F" }, { t: "Os materiais voltam a ser usados", c: "P" }],
        explicacao: "Lixo comum contamina, fogo solta fumaça tóxica e o ponto de coleta recicla." }
    ],
    basico: [
      { tipo: "classificar", titulo: "É lixo eletrônico?",
        categorias: [{ id: "S", rot: "🔌 Lixo eletrônico" }, { id: "N", rot: "🍌 Não é" }],
        itens: [{ t: "Pilha gasta", c: "S" }, { t: "Carregador estragado", c: "S" }, { t: "Casca de banana", c: "N" }, { t: "Controle remoto quebrado", c: "S" }, { t: "Folha de papel", c: "N" }],
        explicacao: "Pilha, carregador e controle são eletrônicos; casca e papel, não." },
      { tipo: "ligar", titulo: "Cada R e o que fazer",
        pares: [{ a: "🤔 Repensar", b: "Pensar antes de comprar" }, { a: "🙅 Recusar", b: "Dizer não ao que não precisa" }, { a: "📉 Reduzir", b: "Usar menos e fazer durar" }, { a: "🔁 Reutilizar", b: "Doar, consertar, usar de outro jeito" }, { a: "♻️ Reciclar", b: "Levar ao ponto de coleta" }],
        explicacao: "Os 5 Rs." },
      { tipo: "escolha", titulo: "O destino certo",
        perguntas: [
          { p: "As pilhas do controle acabaram. Onde jogar?", opcoes: ["Na caixa de coleta de pilhas", "No lixo do banheiro", "No rio"], certo: 0 },
          { p: "O que o ponto de coleta faz?", opcoes: ["Manda os aparelhos para a reciclagem", "Queima os aparelhos", "Joga no lixão"], certo: 0 }],
        explicacao: "Pilhas na caixa de coleta; o ponto de coleta manda para a reciclagem." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 A campanha de coleta da escola",
        enunciado: "<p>A escola faz uma campanha de coleta. Para cada item que os alunos trouxeram, decida.</p>",
        app: "♻️ Campanha", botoes: [{ id: "S", rot: "✅ Vai para a coleta" }, { id: "N", rot: "🚫 Não é eletrônico" }],
        itens: [{ de: "Ana", t: "Celular antigo quebrado", c: "S" }, { de: "Léo", t: "Garrafa PET", c: "N", why: "É plástico comum, vai para a reciclagem de plástico." },
          { de: "Bia", t: "Pilhas gastas do relógio", c: "S" }, { de: "Caio", t: "Mouse estragado", c: "S" }, { de: "Duda", t: "Caderno velho", c: "N", why: "É papel." }],
        okMsg: "Campanha separada do jeito certo! ♻️",
        explicacao: "Celular, pilhas e mouse são eletrônicos; PET e caderno vão para outra reciclagem." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Os 5 Rs em ordem",
        enunciado: "<p>Coloque os 5 Rs na ordem da tabela: do que vem <strong>antes de comprar</strong> até o <strong>fim da vida</strong> do aparelho.</p>", dicas: ["Primeiro se pensa; por último, recicla."],
        itens: ["🤔 Repensar", "🙅 Recusar", "📉 Reduzir", "🔁 Reutilizar", "♻️ Reciclar"],
        explicacao: "Repensar → recusar → reduzir → reutilizar → reciclar." }
    ],
    vf: [
      { v: true, why: "Pilha é eletrônico." },
      { v: false, corrigir: { trecho: "pode ir no lixo comum", opcoes: ["pode ir no lixo comum", "vai para o ponto de coleta"], certo: "vai para o ponto de coleta" }, why: "Pilha contamina." },
      { v: true, why: "É a função dele." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "é seguro", opcoes: ["é seguro", "solta fumaça tóxica"], certo: "solta fumaça tóxica" }, why: "Faz mal à saúde." }
    ]
  },

  m7: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: respeita ou desrespeita o combinado?",
        robo: BIT("🔎 A pergunta", [["Eu falaria isso olhando para a pessoa? Respeita.", "na frente → respeita"], ["Expõe, ofende ou atrapalha? Desrespeita.", "expõe → desrespeita", true]]),
        enunciado: "<p>Use a tabela <strong>Combinado · Por quê</strong>.</p>",
        colunaItem: "Mensagem no grupo", colunaResp: "Combinado",
        categorias: [{ id: "R", rot: "👍 Respeita" }, { id: "D", rot: "👎 Desrespeita" }],
        itens: [{ t: "“Alguém sabe a página do dever de Matemática?”", c: "R" }, { t: "Foto do colega dormindo, sem pedir", c: "D" }, { t: "Mensagem às 3h da madrugada", c: "D" }, { t: "“Parabéns pela apresentação, Ana!”", c: "R" }, { t: "Print da conversa de outro grupo", c: "D" }],
        explicacao: "Assunto do grupo e elogios respeitam; foto sem pedir, madrugada e print desrespeitam." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada combinado e o seu motivo",
        pares: [{ a: "🙂 Escrever como se a pessoa estivesse na frente", b: "Evita ofensas" }, { a: "🌙 Respeitar o horário", b: "As pessoas descansam" }, { a: "📸 Não postar foto de colega sem pedir", b: "Respeita a imagem do colega" }, { a: "🧐 Conferir antes de repassar notícia", b: "Evita espalhar mentira" }],
        explicacao: "Cada combinado tem um motivo." },
      { tipo: "classificar", titulo: "Separe as mensagens",
        categorias: [{ id: "R", rot: "👍 Respeita" }, { id: "D", rot: "👎 Desrespeita" }],
        itens: [{ t: "Avisar a data da prova", c: "R" }, { t: "Dez áudios seguidos sobre outro assunto", c: "D" }, { t: "Apelido que ofende um colega", c: "D" }, { t: "Agradecer a ajuda de um colega", c: "R" }],
        explicacao: "Avisos e agradecimentos respeitam; áudios demais e apelidos que ofendem, não." },
      { tipo: "escolha", titulo: "Alguém foi ofendido no grupo",
        perguntas: [
          { p: "Um colega foi ofendido no grupo. O que você faz?", opcoes: ["Não ri, não repassa, apoia o colega e conta a um adulto", "Ri e repassa", "Ofende também"], certo: 0 },
          { p: "Ética é:", opcoes: ["Agir com respeito e de forma justa com os outros", "Mandar muitas figurinhas", "Sair de todos os grupos"], certo: 0 }],
        explicacao: "Apoiar e contar a um adulto; ética é respeito e justiça." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 O grupo da turma do 6º B",
        enunciado: "<p>Leia as mensagens do grupo e decida.</p>",
        app: "💬 6º B", botoes: [{ id: "R", rot: "👍 Respeita" }, { id: "D", rot: "🚩 Desrespeita" }],
        itens: [{ de: "Rafa", t: "“Gente, amanhã tem educação física, tragam tênis!”", c: "R" },
          { de: "Gui", t: "“Olha a foto da Mari com a boca aberta kkkk” (sem pedir)", c: "D", why: "Foto de colega sem pedir." },
          { de: "Sofia", t: "“Gui, apaga, por favor. Isso não é legal.”", c: "R" },
          { de: "Teo", t: "“URGENTE: as aulas vão acabar amanhã, repassem!” (sem dizer de onde veio)", c: "D", why: "Confira antes de repassar." }],
        okMsg: "Grupo com ética! 💬",
        explicacao: "Avisos úteis e defender o colega respeitam; foto sem pedir e notícia sem fonte desrespeitam." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos combinados",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Ética", b: "Agir com respeito e de forma justa" }, { a: "Combinado", b: "Regra que o grupo decide junto" }, { a: "Print", b: "A foto da tela" }, { a: "Moderação", b: "Sem exagero" }],
        explicacao: "Ética, combinado, print e moderação." }
    ],
    vf: [
      { v: true, why: "Evita ofensas." },
      { v: false, corrigir: { trecho: "Posso postar foto de colega sem pedir", opcoes: ["Posso postar foto de colega sem pedir", "Peço antes de postar foto de colega"], certo: "Peço antes de postar foto de colega" }, why: "Respeite a imagem do colega." },
      { v: true, why: "Evita espalhar mentira." },
      { v: true, why: "Um adulto ajuda." },
      { v: false, corrigir: { trecho: "respeita o horário de todos", opcoes: ["respeita o horário de todos", "atrapalha o descanso de todos"], certo: "atrapalha o descanso de todos" }, why: "Nada de madrugada." }
    ]
  },

  m8: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada lugar e a sua vantagem",
        robo: BIT("🔎 Como pensar", [["Não precisa de internet? Pen drive ou HD externo.", "sem internet → pen drive"], ["Acessa de qualquer lugar? Nuvem.", "qualquer lugar → nuvem", true]]),
        enunciado: "<p>Use a tabela <strong>Onde guardar a cópia · Vantagem · Cuidado</strong>.</p>",
        pares: [{ a: "💾 Pen drive ou HD externo", b: "Não precisa de internet" }, { a: "☁️ Nuvem", b: "Acessa de qualquer lugar" }, { a: "🖥️ Outro computador", b: "Fica longe do original" }],
        explicacao: "Pen drive sem internet; nuvem de qualquer lugar; outro computador longe do original." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Backup", b: "Cópia de segurança dos arquivos" }, { a: "Nuvem", b: "Guardar arquivos em servidores na internet" }, { a: "Pen drive", b: "Pequeno aparelho que guarda arquivos e se liga na porta USB" }, { a: "Original", b: "O arquivo de onde a cópia foi feita" }],
        explicacao: "Backup, nuvem, pen drive e original." },
      { tipo: "ordenar", titulo: "Fazendo o backup, em ordem",
        itens: ["Escolher os arquivos importantes", "Copiar para outro lugar (pen drive ou nuvem)", "Conferir se a cópia abre", "Repetir quando tiver arquivos novos"],
        explicacao: "Escolher → copiar → conferir → repetir." },
      { tipo: "escolha", titulo: "A regra 3-2-1",
        perguntas: [
          { p: "Na regra 3-2-1, quantas cópias dos arquivos importantes?", opcoes: ["3", "1", "10"], certo: 0 },
          { p: "E uma cópia fica:", opcoes: ["Longe de casa (por exemplo, na nuvem)", "No mesmo pen drive", "Em lugar nenhum"], certo: 0 }],
        explicacao: "3 cópias, 2 tipos de lugar, 1 longe de casa." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Quem perdeu e quem não perdeu os arquivos?",
        enunciado: "<p>Para cada história, decida se a pessoa perdeu os arquivos.</p>",
        app: "💾 Histórias", botoes: [{ id: "S", rot: "😌 Não perdeu" }, { id: "P", rot: "😢 Perdeu" }],
        itens: [{ de: "Ana", t: "O celular quebrou, mas as fotos estavam também na nuvem", c: "S" },
          { de: "Léo", t: "O trabalho estava só no pen drive, e o pen drive sumiu", c: "P", why: "Sem backup, só tinha uma cópia." },
          { de: "Bia", t: "O computador queimou; ela tinha cópia no pen drive e na nuvem", c: "S" },
          { de: "Caio", t: "Fez a cópia no mesmo pen drive do original, e o pen drive estragou", c: "P", why: "A cópia precisa ficar em outro lugar." }],
        okMsg: "Você entendeu o backup! 💾",
        explicacao: "Quem tinha cópia em outro lugar não perdeu nada." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do backup",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["BACKUP", "NUVEM", "COPIA", "PENDRIVE", "ORIGINAL"],
        pistas: ["Cópia de segurança", "Guarda arquivos em servidores na internet", "O backup é uma… de segurança (sem acento)", "Pequeno aparelho que se liga na porta USB (sem espaço)", "O arquivo de onde a cópia foi feita"], tam: 10,
        explicacao: "Backup, nuvem, cópia, pen drive e original." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "deve ficar no mesmo pen drive do original", opcoes: ["deve ficar no mesmo pen drive do original", "deve ficar em outro lugar"], certo: "deve ficar em outro lugar" }, why: "Se o pen drive estragar, perde os dois." },
      { v: true, why: "É a definição." },
      { v: true, why: "É o 1 da regra." },
      { v: false, corrigir: { trecho: "perde tudo", opcoes: ["perde tudo", "não perde os arquivos"], certo: "não perde os arquivos" }, why: "A cópia está em outro lugar." }
    ]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ordenar", de: "m1", titulo: "M1 · Remonte", itens: ["[1] Bom", "[2] dia,", "[3] turma!"], explicacao: "Bom dia, turma!" },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Roteador", perguntas: [{ p: "Quem escolhe o caminho dos pacotes?", opcoes: ["O roteador", "O mouse"], certo: 0 }], explicacao: "O roteador." },
      { tipo: "relembre", de: "m3" },
      { tipo: "ordenar", de: "m3", titulo: "M3 · Medidas", itens: ["bit", "byte", "KB", "MB", "GB"], explicacao: "bit → byte → KB → MB → GB." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Metadados", perguntas: [{ p: "Data, tamanho e tipo do arquivo são:", opcoes: ["Metadados", "Pacotes"], certo: 0 }], explicacao: "Metadados." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Obsolescência", perguntas: [{ p: "Trocar o celular só porque saiu outro é:", opcoes: ["Obsolescência pela moda", "Backup"], certo: 0 }], explicacao: "Pela moda." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Lixo eletrônico", perguntas: [{ p: "Pilha gasta vai para:", opcoes: ["O ponto de coleta", "O lixo comum"], certo: 0 }], explicacao: "Ponto de coleta." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Grupo", perguntas: [{ p: "Foto de colega no grupo:", opcoes: ["Só pedindo antes", "Sem pedir"], certo: 0 }], explicacao: "Pedindo antes." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Backup", perguntas: [{ p: "Backup é:", opcoes: ["Cópia de segurança", "Um jogo"], certo: 0 }], explicacao: "Cópia de segurança." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: certo ou errado?",
        enunciado: "<p>Para cada frase, decida.</p>",
        app: "🌐 Rede, arquivos e planeta", botoes: [{ id: "C", rot: "✅ Certo" }, { id: "E", rot: "❌ Errado" }],
        itens: [{ de: "", t: "Os pacotes podem chegar fora de ordem", c: "C" }, { de: "", t: "1 GB é menor que 1 KB", c: "E" }, { de: "", t: "Metadados mostram a data do arquivo", c: "C" },
          { de: "", t: "Pilha pode ir no lixo comum", c: "E" }, { de: "", t: "Backup fica em outro lugar", c: "C" }],
        okMsg: "Você está pronto para a prova! 🌐",
        explicacao: "Pacotes fora de ordem, metadados com data e backup em outro lugar estão certos." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["PACOTE", "ROTEADOR", "BYTE", "METADADOS", "RECICLAGEM", "BACKUP"],
        pistas: ["Pedaço da informação que viaja", "Escolhe o caminho dos pacotes", "8 bits", "Informações sobre o arquivo", "Transformar o material usado em matéria-prima", "Cópia de segurança"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-4bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Pacotes", [{ p: "Na internet, a informação viaja em:", opcoes: ["Pacotes", "Caixas de papelão", "Um pedaço só"], certo: 0 }, { p: "O que ajuda a remontar a informação?", opcoes: ["O número de ordem", "A cor do pacote", "O tamanho da tela"], certo: 0 }]), pega("m1"),
    Q("m2", "O caminho", [{ p: "O computador onde o site fica guardado é o:", opcoes: ["Servidor", "Roteador", "Provedor"], certo: 0 }, { p: "Os continentes se ligam pela internet por:", opcoes: ["Cabos submarinos", "Cartas", "Rádio de pilha"], certo: 0 }]), pega("m2"),
    Q("m3", "Bits e bytes", [{ p: "Um byte tem:", opcoes: ["8 bits", "2 bits", "1000 bits"], certo: 0 }, { p: "Juntar vários arquivos num .zip menor é:", opcoes: ["Compactar", "Excluir", "Imprimir"], certo: 0 }]), pega("m3"),
    Q("m4", "Metadados", [{ p: "Informações sobre o arquivo (data, tamanho, tipo) são os:", opcoes: ["Metadados", "Pacotes", "Bits"], certo: 0 }, { p: "Uma pasta dentro de outra é uma:", opcoes: ["Subpasta", "Extensão", "Película"], certo: 0 }]), pega("m4"),
    Q("m5", "Consumo consciente", [{ p: "Trocar um aparelho que ainda funciona, só porque ficou velho, é:", opcoes: ["Obsolescência", "Backup", "Reciclagem"], certo: 0 }, { p: "O calor faz com a bateria:", opcoes: ["Estraga", "Melhora", "Nada"], certo: 0 }]), pega("m5"),
    Q("m6", "Lixo eletrônico", [{ p: "O lugar certo para pilhas gastas é:", opcoes: ["O ponto de coleta", "O lixo comum", "O fogo"], certo: 0 }, { p: "Usar de novo é:", opcoes: ["Reutilizar", "Recusar", "Repensar"], certo: 0 }]), pega("m6"),
    Q("m7", "Ética no grupo", [{ p: "A foto da tela é o:", opcoes: ["Print", "Backup", "Pacote"], certo: 0 }, { p: "Se alguém for ofendido no grupo:", opcoes: ["Apoio e conto a um adulto", "Rio e repasso", "Ofendo também"], certo: 0 }]), pega("m7"),
    Q("m8", "Backup", [{ p: "A cópia de segurança dos arquivos é o:", opcoes: ["Backup", "Print", "Provedor"], certo: 0 }, { p: "Na regra 3-2-1, uma cópia fica:", opcoes: ["Longe de casa", "No mesmo pen drive", "Em lugar nenhum"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 4: 4º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-4bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why, de]) => ({ de: de || "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });
  const mem = (titulo, pares, expl) => ({ tipo: "memoria", titulo, enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>", pares: pares.map(([a, b]) => ({ a, b })), porRodada: 3, explicacao: expl });
  const sin = (titulo, enun, certos, errados, expl) => ({ tipo: "sinais", titulo, enunciado: `<p>${enun}</p>`, opcoes: [...certos.map(t => ({ t, certo: true })), ...errados.map(([t, why]) => ({ t, certo: false, why }))], explicacao: expl });
  const LEMBRA = "Começou o 4º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉";
  /* ---------- M1 · pacotes ---------- */
  A.m1.gancho = { html: "<p>📸 A Duda mandou para a avó uma foto do aniversário. Por alguns segundos apareceu o reloginho, e depois a foto chegou inteirinha, do outro lado da cidade.</p><p>🤔 Como uma foto “viaja” pelo ar e pelos fios? Ela vai inteira, de uma vez?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", LEMBRA,
    ["Uma foto, um texto ou uma música guardados no computador são um…", ["Arquivo", "Teclado", "Mouse"], "São <b>arquivos</b>."],
    ["Para mandar uma carta, o envelope precisa do…", ["Endereço de quem vai receber", "Nome do cachorro", "Preço do pão"], "Do <b>endereço</b> de quem vai receber."],
    ["Montar de novo as peças de um quebra-cabeça é…", ["Remontar", "Apagar", "Desligar"], "É <b>remontar</b>."])];
  A.m1.aplicar = [
    msg("🛠️ Na vida real: qual etiqueta do pacote?", "📦 Pacote da foto", [["D", "📬 Destino"], ["O", "📮 Origem"], ["N", "🔢 Número de ordem"], ["X", "🧩 Dados"]],
      "A foto da Duda virou pacotes. Cada informação é qual etiqueta do pacote?",
      [["O celular da avó, para onde a foto vai", "D", "Diz para onde o pacote vai."], ["O celular da Duda, de onde a foto saiu", "O", "Diz de onde saiu, para a resposta voltar."],
        ["“Pedaço 3”", "N", "A posição do pedaço."], ["Um pedacinho do bolo da foto", "X", "É o pedaço da foto: os dados."], ["“Pedaço 1”", "N", "A posição do pedaço."]],
      "Pacote etiquetado! 📦", "Cada pacote leva destino, origem, número de ordem e os dados."),
    VIDA(
      ["Os pacotes da foto chegaram fora de ordem. O que ajuda a montar de novo?", ["O número de ordem de cada pacote", "A cor do pacote", "Nada: a foto se perde"], "O <b>número de ordem</b>."],
      ["Um pacote se perdeu na viagem. O que acontece?", ["É pedido só aquele pedaço outra vez", "A foto inteira some para sempre", "O celular desliga"], "Só aquele pedaço é <b>reenviado</b>."],
      ["Por que a foto vai em pedaços pequenos?", ["Os pedaços dividem a estrada com os pacotes de outras pessoas", "Para a foto ficar feia", "Porque o celular é pequeno"], "Pedaços pequenos <b>dividem a estrada</b>; um erro reenvia só um pedaço."])
  ];
  mais("m1", "desafio",
    rota("🧩 Remonte a mensagem", "Os pacotes chegaram fora de ordem. Coloque <b>na ordem do número</b> para remontar a mensagem.",
      [["1️⃣", "Pacote 1: “Vovó,”"], ["2️⃣", "Pacote 2: “olha a foto”"], ["3️⃣", "Pacote 3: “do meu”"], ["4️⃣", "Pacote 4: “aniversário!”"]],
      "Mensagem remontada! 🧩", "O número de ordem diz a posição de cada pedaço."));
  mais("m1", "turbo",
    mem("🧩 Jogo da memória do pacote", [["📬 Destino", "Para onde o pacote vai"], ["📮 Origem", "De onde ele saiu"], ["🔢 Número de ordem", "A posição do pedaço"],
      ["🧩 Dados", "O pedaço da foto"], ["Remontar", "Juntar os pedaços de novo"], ["Reenviar", "Mandar de novo só o pedaço perdido"]],
      "A informação viaja em pacotes etiquetados."));

  /* ---------- M2 · caminho dos pacotes ---------- */
  A.m2.gancho = { html: "<p>🎬 O Theo assistiu a um vídeo de um youtuber de Portugal. O vídeo atravessou o oceano Atlântico em menos de um segundo!</p><p>🤔 Por onde ele passou? Voou pelo céu ou foi pelo fundo do mar?</p>" };
  A.m2.aplicar = [
    rota("🛠️ Na vida real: a viagem do vídeo", "O Theo pediu o vídeo. Coloque as paradas do caminho dos pacotes <b>na ordem</b>, do celular dele até o site.",
      [["📱", "Seu aparelho divide o pedido em pacotes"], ["📶", "O roteador de casa (Wi-Fi) manda para a internet"], ["🏢", "O provedor liga a casa à internet"],
        ["🔀", "Os roteadores da internet escolhem o caminho"], ["🌊", "Os cabos submarinos atravessam o oceano"], ["🖥️", "O servidor, onde o site fica guardado"]],
      "Viagem completa! 🌍", "Aparelho, roteador de casa, provedor, roteadores da internet, cabos submarinos e servidor."),
    VIDA(
      ["Um caminho da internet ficou congestionado. O que o roteador faz?", ["Manda o pacote por outra estrada", "Joga o pacote fora", "Desliga a internet"], "Manda por <b>outro caminho</b>."],
      ["Os pacotes sabem para onde ir pelo…", ["Endereço IP", "Nome do bairro", "Número do sapato"], "Pelo <b>endereço IP</b>."],
      ["Entre os continentes, a maior parte da internet passa…", ["Por cabos de fibra óptica no fundo do oceano", "Por pombos-correio", "Por um fio de varal"], "Por <b>cabos submarinos</b> de fibra óptica."])
  ];
  mais("m2", "desafio",
    msg("🔀 Quem faz isso?", "🌐 Caminho dos pacotes", [["R", "📶 Roteador de casa"], ["P", "🏢 Provedor"], ["C", "🌊 Cabo submarino"], ["S", "🖥️ Servidor"]],
      "Use a tabela das paradas do 💡 Para começar.",
      [["A empresa que liga a sua casa à internet", "P", "É o provedor."], ["Guarda o site", "S", "É o servidor."], ["Leva os pacotes de um continente para outro", "C", "Pelo fundo do mar."],
        ["Recebe os pacotes do celular pelo Wi-Fi", "R", "É o roteador de casa."], ["O EllaLink, que liga Fortaleza a Portugal", "C", "É um cabo submarino."]],
      "Você conhece o caminho! 🔀", "Cada parada tem a sua função."));
  mais("m2", "turbo",
    mem("🧩 Jogo da memória do caminho", [["Roteador", "Escolhe o caminho do pacote"], ["Provedor", "Liga a casa à internet"], ["Servidor", "Onde o site fica guardado"],
      ["Endereço IP", "O número do aparelho na rede"], ["Cabo submarino", "Fibra óptica no fundo do mar"], ["EllaLink", "Liga Fortaleza a Portugal desde 2021"]],
      "Cada pacote pode ir por um caminho diferente."));

  /* ---------- M3 · bits e bytes ---------- */
  A.m3.gancho = { html: "<p>📱 Na hora de gravar a apresentação da escola, o celular da Lia avisou: <b>“Armazenamento cheio”</b>. Ela tinha 300 fotos e 40 vídeos.</p><p>🤔 O que ocupa mais espaço: as fotos ou os vídeos? Como se mede esse espaço?</p>" };
  A.m3.aplicar = [
    msg("🛠️ Na vida real: qual medida combina?", "💾 Armazenamento", [["K", "📄 KB"], ["M", "🖼️ MB"], ["G", "🎬 GB"], ["T", "🗄️ TB"]],
      "Use a tabela das medidas: qual medida combina com cada coisa?",
      [["Uma foto do celular (3)", "M", "Foto: 2 a 5 MB."], ["Um filme (2)", "G", "Filme: 1 a 3 GB."], ["Um texto curto (alguns)", "K", "Texto curto: alguns KB."],
        ["Um HD grande (1)", "T", "HD grande: 1 ou 2 TB."], ["Um pen drive (32)", "G", "Pen drive: 16, 32 ou 64 GB."]],
      "Medidas no lugar! 💾", "Do menor para o maior: bit, byte, KB, MB, GB, TB."),
    VIDA(
      ["O celular da Lia está cheio. O que libera mais espaço?", ["Apagar vídeos que ela não usa", "Apagar uma mensagem curta", "Mudar o papel de parede"], "Vídeos ocupam <b>muito mais</b> que fotos e mensagens."],
      ["Ela quer mandar 10 fotos de uma vez por e-mail. Pode…", ["Juntar tudo num arquivo .zip", "Imprimir as fotos", "Desenhar as fotos"], "Compacte num <b>.zip</b>."],
      ["Ela recebeu um .zip com os trabalhos. Para usar os arquivos, ela…", ["Descompacta (extrai) o .zip", "Apaga o .zip", "Renomeia para .mp4"], "<b>Descompacta</b> (extrai)."])
  ];
  mais("m3", "desafio",
    msg("🗂️ Que tipo de arquivo é?", "📁 Pasta", [["I", "🖼️ Foto ou imagem"], ["V", "🎬 Vídeo"], ["T", "📄 Texto"], ["Z", "🗜️ Compactado"]],
      "Olhe a extensão (o fim do nome do arquivo).",
      [["passeio.jpg", "I", ".jpg é foto ou imagem."], ["apresentacao.mp4", "V", ".mp4 é vídeo."], ["recado.txt", "T", ".txt é texto."], ["trabalhos.zip", "Z", ".zip é compactado."], ["desenho.png", "I", ".png é imagem."]],
      "Detetive de extensões! 🗂️", "A extensão mostra o tipo do arquivo."));
  mais("m3", "turbo",
    perg("🧮 Contas com bits e bytes", "Use o 💡 Para começar.",
      ["Quantos bits tem 1 byte?", ["8", "2", "100"], "1 byte = <b>8 bits</b>."],
      ["Cerca de mil MB formam…", ["1 GB", "1 KB", "1 bit"], "Cerca de mil MB = <b>1 GB</b>."],
      ["Qual é a ordem certa, do menor para o maior?", ["bit → byte → KB → MB → GB → TB", "GB → MB → bit → TB", "TB → byte → KB"], "<b>bit → byte → KB → MB → GB → TB</b>."]));

  /* ---------- M4 · metadados ---------- */
  A.m4.gancho = { html: "<p>🖼️ Uma foto antiga apareceu no computador da escola. Ninguém lembrava quando nem onde ela tinha sido tirada… até a professora clicar com o botão direito e abrir as Propriedades.</p><p>🤔 Como o computador “sabia” a data e o aparelho daquela foto?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: nome bom ou ruim?", "📁 Meus arquivos", [["B", "👍 Nome bom"], ["R", "👎 Nome ruim"]],
      "Qual nome de arquivo ajuda a achar depois?",
      [["2027-ciencias-planetas", "B", "Começa com o ano e diz o assunto."], ["documento1", "R", "Não diz nada: se perde."], ["2027-historia-trabalho-grupo", "B", "Ano e assunto."],
        ["sem nome", "R", "Não diz nada."], ["foto123", "R", "Não diz o que é."]],
      "Organizador nota 10! 📁", "Começar o nome com o ano deixa os arquivos em ordem sozinhos."),
    VIDA(
      ["Para descobrir quando uma foto foi tirada, você…", ["Clica com o botão direito e abre Propriedades", "Apaga a foto", "Pergunta ao mouse"], "Abra as <b>Propriedades</b>."],
      ["Uma pasta dentro de outra pasta é uma…", ["Subpasta", "Extensão", "Janela"], "É uma <b>subpasta</b>."],
      ["A foto pode guardar o local onde foi tirada se…", ["A localização estava ligada", "A foto for colorida", "O celular for novo"], "Só se a <b>localização estava ligada</b>."])
  ];
  mais("m4", "desafio",
    msg("🏷️ Qual metadado é?", "📄 Propriedades de passeio.jpg", [["N", "📛 Nome e extensão"], ["T", "📏 Tamanho"], ["C", "📅 Data de criação"], ["M", "✏️ Data de modificação"], ["L", "📍 Local"]],
      "Cada informação das Propriedades é qual metadado?",
      [["passeio.jpg", "N", "Nome e extensão."], ["3 MB", "T", "Tamanho."], ["Criado em 12/09/2027", "C", "Data de criação."], ["Modificado em 15/09/2027", "M", "Data de modificação."], ["Curionópolis, PA", "L", "Local onde a foto foi tirada."]],
      "Metadados descobertos! 🏷️", "Metadados são dados sobre os dados."));
  mais("m4", "turbo",
    rota("🗂️ Monte o caminho da pasta", "A foto do passeio fica em <b>Fotos › 2027 › Passeio</b>. Coloque as pastas na ordem, da maior para a menor.",
      [["📁", "Fotos"], ["📁", "2027"], ["📁", "Passeio"], ["🖼️", "passeio.jpg"]],
      "Arquivo encontrado! 🗂️", "Pastas são como gavetas: dentro da pasta Fotos fica a subpasta 2027, e dentro dela a subpasta Passeio."));

  /* ---------- M5 · obsolescência ---------- */
  A.m5.gancho = { html: "<p>📱 O celular do Gabriel funciona direitinho. Mas saiu um modelo novo, e metade da sala diz que o dele é “velho”.</p><p>🤔 Ele precisa mesmo de um novo, ou só quer? Quem ganha quando a gente troca o aparelho sem precisar?</p>" };
  A.m5.aplicar = [
    msg("🛠️ Na vida real: que tipo de obsolescência?", "📱 Aparelhos “velhos”", [["P", "📉 Pela moda"], ["A", "🔄 Falta de atualização"], ["C", "🔧 Difícil de consertar"]],
      "Por que cada aparelho ficou “velho” antes da hora?",
      [["Trocar o celular só porque saiu um modelo novo", "P", "É pela moda (perceptiva)."], ["O tablet parou de receber atualizações e o jogo não abre mais", "A", "Falta de atualização."],
        ["A peça da tela é tão cara que sai mais em conta comprar outro", "C", "Difícil de consertar."], ["“Todo mundo tem o novo, o meu é feio”", "P", "Pela moda."]],
      "Mandou bem! 📱", "Obsolescência: o aparelho fica “velho” antes da hora."),
    VIDA(
      ["Antes de trocar o celular, a 1ª pergunta é…", ["Ele ainda funciona?", "Qual é a cor nova?", "Quem tem o mais caro?"], "1) <b>Ainda funciona?</b> 2) Dá para consertar? 3) Preciso ou só quero?"],
      ["Deixar o celular no carro fechado, no sol…", ["Estraga a bateria", "Faz o celular durar mais", "Não faz nada"], "O <b>calor estraga a bateria</b>."],
      ["Consumo consciente é comprar pensando…", ["No bolso, no planeta e no que você precisa", "Só na propaganda", "No que os colegas têm"], "No <b>bolso</b>, no <b>planeta</b> e na <b>necessidade</b>."])
  ];
  mais("m5", "desafio",
    rota("🤔 Antes de trocar", "Coloque <b>na ordem</b> as 3 perguntas do 💡 Para começar.",
      [["1️⃣", "Ele ainda funciona?"], ["2️⃣", "Dá para consertar?"], ["3️⃣", "Eu preciso mesmo de um novo, ou só quero?"]],
      "Consumidor consciente! 🤔", "Funciona? Dá para consertar? Preciso ou só quero?"));
  mais("m5", "turbo",
    sin("🛡️ Para o aparelho durar mais", "Marque só os cuidados que fazem o aparelho <b>durar mais</b>.",
      ["Usar capa e película", "Deixar longe do calor", "Apagar o que não usa", "Usar o carregador adequado"],
      [["Usar qualquer carregador barato", "Carregador ruim pode estragar a bateria."], ["Deixar no sol dentro do carro", "O calor estraga a bateria."]],
      "Capa, película, longe do calor, apagar o que não usa e carregador adequado."));

  /* ---------- M6 · lixo eletrônico ---------- */
  A.m6.gancho = { html: "<p>🔋 As pilhas do controle da TV acabaram. O irmão do Rafa já ia jogar tudo no lixo da cozinha, junto com o fone quebrado.</p><p>🤔 Qual é o problema? Para onde vai esse lixo depois?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: qual R?", "♻️ Os 5 Rs", [["P", "🤔 Repensar"], ["C", "🙅 Recusar"], ["D", "📉 Reduzir"], ["U", "🔁 Reutilizar"], ["R", "♻️ Reciclar"]],
      "Cada atitude é qual dos 5 Rs?",
      [["Pensar antes de comprar um fone novo", "P", "Repensar."], ["Levar as pilhas gastas ao ponto de coleta", "R", "Reciclar."], ["Doar o celular antigo que ainda funciona", "U", "Reutilizar."],
        ["Dizer não ao brinde de plástico que você não vai usar", "C", "Recusar."], ["Fazer o carregador durar mais, usando com cuidado", "D", "Reduzir."]],
      "Os 5 Rs na prática! ♻️", "Repensar, recusar, reduzir, reutilizar e reciclar."),
    VIDA(
      ["Pilhas e baterias gastas vão para…", ["O ponto de coleta (muitas lojas têm caixas)", "O lixo comum", "O fogo"], "<b>Ponto de coleta</b>: nunca no lixo comum."],
      ["Queimar lixo eletrônico…", ["Solta fumaça tóxica", "É o jeito certo", "Faz ele virar celular novo"], "Solta <b>fumaça tóxica</b>."],
      ["No lixo comum, os metais e as pilhas podem…", ["Contaminar o solo e a água", "Virar adubo", "Sumir sozinhos"], "Podem <b>contaminar</b> o solo e a água."])
  ];
  mais("m6", "desafio",
    msg("🗑️ Para onde vai?", "♻️ Separando o lixo", [["E", "♻️ Ponto de coleta (lixo eletrônico)"], ["L", "🗑️ Lixo comum"]],
      "Lixo eletrônico é todo aparelho eletrônico jogado fora. Para onde vai cada coisa?",
      [["Pilha gasta", "E", "Pilha é lixo eletrônico."], ["Casca de banana", "L", "Não é eletrônico."], ["Carregador quebrado", "E", "É eletrônico."], ["Fone estragado", "E", "É eletrônico."], ["Papel de bala", "L", "Não é eletrônico."]],
      "Lixo bem separado! ♻️", "Aparelhos, pilhas e baterias vão para o ponto de coleta."));
  mais("m6", "turbo",
    mem("🧩 Jogo da memória dos 5 Rs", [["🤔 Repensar", "Pensar antes de comprar"], ["🙅 Recusar", "Dizer não ao que não precisa"], ["📉 Reduzir", "Usar menos e fazer durar"],
      ["🔁 Reutilizar", "Doar, consertar, usar de outro jeito"], ["♻️ Reciclar", "Levar ao ponto de coleta"], ["🔥 Queimar", "Solta fumaça tóxica"]],
      "Os 5 Rs cuidam do planeta."));

  /* ---------- M7 · ética no grupo ---------- */
  A.m7.gancho = { html: "<p>📲 Às 2 da manhã, o celular da Bia apitou 30 vezes: era o grupo da turma, cheio de figurinhas e um print de uma conversa particular de um colega.</p><p>🤔 O que deu errado nesse grupo? Que combinados fariam falta?</p>" };
  A.m7.aplicar = [
    msg("🛠️ Na vida real: respeita o combinado?", "💬 Grupo da turma", [["S", "✅ Respeita"], ["N", "🚫 Desrespeita"]],
      "Cada atitude no grupo respeita ou desrespeita os combinados?",
      [["Mandar o recado da prova às 19h", "S", "Assunto do grupo e no horário."], ["Postar a foto de um colega sem pedir", "N", "Só pedindo antes."], ["Repassar o print da conversa de outro grupo", "N", "A conversa era só daquele grupo."],
        ["Conferir a notícia antes de repassar", "S", "Evita espalhar mentira."], ["Mandar 100 figurinhas seguidas", "N", "Com moderação."]],
      "Grupo em paz! 💬", "Escreva como se a pessoa estivesse na frente, fale do assunto, respeite o horário e peça antes de postar foto."),
    VIDA(
      ["Alguém foi ofendido no grupo. Quem é ético…", ["Não ri, não repassa, apoia o colega e conta a um adulto", "Ri junto", "Repassa para outro grupo"], "<b>Apoio e conto a um adulto.</b>"],
      ["Escrever no grupo como se a pessoa estivesse na sua frente…", ["Evita ofensas", "Deixa a mensagem mais grossa", "Não muda nada"], "<b>Evita ofensas</b>."],
      ["Áudios e figurinhas no grupo:", ["Com moderação", "Quanto mais, melhor", "Só de madrugada"], "<b>Com moderação</b>."])
  ];
  mais("m7", "desafio",
    sin("🤝 Alguém foi ofendido. O que fazer?", "Marque só as atitudes <b>éticas</b>.",
      ["Não rir", "Não repassar", "Apoiar o colega", "Contar a um adulto (professor, família)"],
      [["Mandar risadas no grupo", "Ajuda a ofensa a crescer."], ["Tirar print e mandar para outro grupo", "Espalha a ofensa."]],
      "Apoio e conto a um adulto."));
  mais("m7", "turbo",
    mem("🧩 Jogo da memória dos combinados", [["🙂 Escrever como se estivesse na frente", "Evita ofensas"], ["🎯 Falar do assunto", "O grupo não vira bagunça"], ["🌙 Respeitar o horário", "As pessoas descansam"],
      ["📸 Pedir antes de postar foto", "Respeita a imagem do colega"], ["🔁 Não repassar print", "A conversa era só daquele grupo"], ["🧐 Conferir antes de repassar", "Evita espalhar mentira"]],
      "Ética é respeitar os combinados também na internet."));

  /* ---------- M8 · backup ---------- */
  A.m8.gancho = { html: "<p>💧 O celular da Carol caiu na piscina e não ligou mais. Todas as fotos da viagem estavam só nele.</p><p>🤔 Dava para ter salvado as fotos antes? Onde elas deveriam estar também?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: onde guardar a cópia?", "💾 Backup", [["P", "💾 Pen drive ou HD externo"], ["N", "☁️ Nuvem"], ["O", "🖥️ Outro computador"]],
      "Use a tabela do 💡 Para começar: qual lugar combina com cada situação?",
      [["Quero acessar as fotos de qualquer lugar", "N", "A nuvem acessa de qualquer lugar."], ["Na casa não tem internet", "P", "Pen drive ou HD externo não precisa de internet."],
        ["Quero a cópia longe de casa", "N", "A nuvem fica longe de casa."], ["Tenho o computador da casa da tia", "O", "Fica longe do original."]],
      "Cópia segura! 💾", "Backup é uma cópia guardada em outro lugar, nunca no mesmo pen drive do original."),
    VIDA(
      ["A Carol fez uma viagem com muitas fotos. Quando fazer o backup?", ["Logo depois da viagem", "Só quando o celular quebrar", "Nunca"], "Sempre que tiver <b>arquivos novos importantes</b>."],
      ["Ela copiou as fotos para outra pasta do mesmo pen drive. É backup?", ["Não: a cópia deve ficar em outro lugar", "Sim, perfeito", "Só se for de manhã"], "A cópia fica em <b>outro lugar</b>."],
      ["Para usar a nuvem, é preciso…", ["Internet e uma senha forte", "Um mouse novo", "Um pen drive"], "<b>Internet</b> e <b>senha forte</b>."])
  ];
  mais("m8", "desafio",
    perg("3️⃣2️⃣1️⃣ A regra 3-2-1", "Use o 💡 Para começar.",
      ["Na regra 3-2-1, quantas cópias dos arquivos importantes?", ["3", "1", "10"], "<b>3</b> cópias."],
      ["Em quantos tipos de lugar diferentes?", ["2", "1", "5"], "Em <b>2</b> tipos de lugar."],
      ["Quantas cópias longe de casa?", ["1 (por exemplo, na nuvem)", "Nenhuma", "Todas"], "<b>1</b> longe de casa."]));
  mais("m8", "turbo",
    sin("💾 Backup bem feito", "Marque só o que é um <b>backup bem feito</b>.",
      ["Copiar as fotos para a nuvem", "Copiar o trabalho para um HD externo", "Guardar uma cópia em outro computador"],
      [["Copiar para outra pasta do mesmo pen drive", "Se o pen drive se perder, perde tudo."], ["Deixar tudo só no celular", "Se o celular quebrar, perde tudo."]],
      "Backup: cópia em outro lugar."));
})();
