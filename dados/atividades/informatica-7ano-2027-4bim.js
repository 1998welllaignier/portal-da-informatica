/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 4º bimestre de 2027 (Criar e cuidar)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF07CO10, EF07CO11.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-7ano-2027-4bim", {

  m1: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: o que acontece em cada destino?",
        robo: BIT("🔎 A pergunta", [["O aparelho volta a ser <b>matéria-prima</b>? É o ponto de coleta.", "volta a ser usado → ponto de coleta"], ["Solta fumaça? É queimar. Contamina o solo? Lixo comum.", "fumaça → queimar", true]]),
        enunciado: "<p>Use a tabela <strong>Destino · O que acontece</strong>.</p>",
        colunaItem: "O que acontece", colunaResp: "Destino",
        categorias: [{ id: "L", rot: "🗑️ Lixo comum" }, { id: "Q", rot: "🔥 Queimar" }, { id: "G", rot: "📦 Guardar na gaveta" }, { id: "P", rot: "♻️ Ponto de coleta" }],
        itens: [{ t: "Metais e baterias podem contaminar o solo e a água", c: "L" }, { t: "Solta fumaça tóxica", c: "Q" }, { t: "Os materiais ficam parados sem serem reaproveitados", c: "G" }, { t: "Os materiais voltam a ser usados", c: "P" }],
        explicacao: "Lixo comum contamina, queimar solta fumaça, a gaveta deixa parado e o ponto de coleta recicla." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Certo ou errado?",
        enunciado: "<p>Use o 💡 Para começar.</p>",
        categorias: [{ id: "C", rot: "✅ Certo" }, { id: "E", rot: "❌ Errado" }],
        itens: [{ t: "Levar o celular quebrado a um ponto de coleta", c: "C" }, { t: "Jogar as pilhas no lixo do banheiro", c: "E" }, { t: "Queimar fios para tirar o cobre", c: "E" }, { t: "Doar o computador que ainda funciona", c: "C" }, { t: "Consertar o carregador em vez de comprar outro", c: "C" }],
        explicacao: "Ponto de coleta, doar e consertar são certos; lixo comum e queimar, errados." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Lixo eletrônico", b: "Aparelhos eletrônicos jogados fora" }, { a: "Reciclagem", b: "Transformar o material usado em matéria-prima de novo" }, { a: "Logística reversa", b: "O caminho de volta do produto, do consumidor para o fabricante" }, { a: "Contaminar", b: "Sujar com substâncias que fazem mal" }],
        explicacao: "Lixo eletrônico, reciclagem, logística reversa e contaminar." },
      { tipo: "ordenar", titulo: "Antes de descartar, em ordem",
        robo: BIT("🎧 Outro aparelho", [["O fone parou de funcionar. Dá para consertar? Não.", "consertar?"], ["Dá para doar? Não. Então: ponto de coleta.", "doar? → coleta", true]]),
        itens: ["Ver se dá para consertar", "Ver se dá para doar", "Apagar os seus dados e tirar o chip e o cartão", "Levar a um ponto de coleta"],
        explicacao: "Consertar → doar → apagar os dados → ponto de coleta." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 A gaveta de eletrônicos da família",
        enunciado: "<p>A família da Lara achou estes aparelhos na gaveta. Para cada um, escolha o melhor destino.</p>",
        app: "📦 Gaveta", botoes: [{ id: "D", rot: "🎁 Consertar ou doar" }, { id: "P", rot: "♻️ Ponto de coleta" }],
        itens: [{ de: "Tablet", t: "Funciona, mas ninguém usa mais", c: "D", why: "Ainda funciona: alguém pode usar." },
          { de: "Pilhas", t: "Gastas, não carregam mais", c: "P", why: "Pilha gasta vai para o ponto de coleta." },
          { de: "Celular antigo", t: "Tela quebrada, placa queimada, sem conserto", c: "P", why: "Sem conserto: reciclagem." },
          { de: "Fone de ouvido", t: "Só o fio soltou, dá para arrumar", c: "D", why: "Dá para consertar." }],
        okMsg: "Gaveta resolvida do jeito certo! ♻️",
        explicacao: "O que funciona ou tem conserto: consertar ou doar. O que não tem: ponto de coleta." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o descarte",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "Lixo eletrônico no lixo comum pode **contaminar** o solo e a água. O certo é o ponto de **coleta**. Pela logística **reversa**, o produto volta para a **reciclagem**. Antes de doar, **apagar** os dados.",
        explicacao: "Contaminar, coleta, reversa, reciclagem e apagar." }
    ],
    vf: [
      { v: true, why: "Metais e baterias contaminam." },
      { v: false, corrigir: { trecho: "é seguro", opcoes: ["é seguro", "solta fumaça tóxica"], certo: "solta fumaça tóxica" }, why: "Queimar faz mal à saúde." },
      { v: true, why: "É a definição." },
      { v: true, why: "Proteja os seus dados." },
      { v: false, corrigir: { trecho: "Quase todo o lixo eletrônico do mundo é reciclado", opcoes: ["Quase todo o lixo eletrônico do mundo é reciclado", "Menos de um quarto do lixo eletrônico do mundo é reciclado"], certo: "Menos de um quarto do lixo eletrônico do mundo é reciclado" }, why: "Menos de um quarto, segundo a ONU." }
    ]
  },

  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: em que parte do celular está?",
        robo: BIT("🔎 A pergunta", [["Guarda energia? É a bateria. Leva eletricidade? É a placa.", "energia → bateria"], ["Prende as peças? Soldas. Mostra a imagem? Tela.", "prende → soldas", true]]),
        enunciado: "<p>Use a tabela <strong>Parte do celular · Material · Para que serve</strong>.</p>",
        colunaItem: "Material", colunaResp: "Parte do celular",
        categorias: [{ id: "B", rot: "🔋 Bateria" }, { id: "P", rot: "🧩 Placa" }, { id: "S", rot: "🔩 Soldas" }, { id: "T", rot: "📱 Tela" }],
        itens: [{ t: "Lítio e cobalto", c: "B" }, { t: "Cobre, ouro e prata", c: "P" }, { t: "Estanho", c: "S" }, { t: "Vidro e um pouco de índio", c: "T" }],
        explicacao: "Lítio e cobalto: bateria; cobre, ouro e prata: placa; estanho: soldas; vidro e índio: tela." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada parte e o seu material",
        pares: [{ a: "🔋 Bateria", b: "Lítio e cobalto" }, { a: "🧩 Placa", b: "Cobre, ouro e prata" }, { a: "🔩 Soldas", b: "Estanho" }, { a: "🧱 Corpo", b: "Alumínio ou plástico" }],
        explicacao: "Bateria, placa, soldas e corpo." },
      { tipo: "classificar", titulo: "Bateria: seguro ou perigoso?",
        categorias: [{ id: "S", rot: "✅ Seguro" }, { id: "P", rot: "⚠️ Perigoso" }],
        itens: [{ t: "Levar a bateria estufada ao ponto de coleta", c: "S" }, { t: "Furar a bateria", c: "P" }, { t: "Continuar usando a bateria estufada", c: "P" }, { t: "Jogar a bateria no lixo comum", c: "P" }],
        explicacao: "Bateria estufada pode pegar fogo: não fure, não use e leve ao ponto de coleta." },
      { tipo: "escolha", titulo: "Mineração urbana",
        perguntas: [
          { p: "Mineração urbana é:", opcoes: ["Tirar metais do lixo eletrônico pela reciclagem", "Abrir uma mina no meio da cidade", "Jogar o celular no lixo"], certo: 0 },
          { p: "Os metais da placa servem para:", opcoes: ["Levar a eletricidade (conduzir)", "Guardar fotos", "Deixar o celular mais pesado"], certo: 0 },
          { p: "Serra Pelada, em Curionópolis, ficou famosa pelo garimpo de:", opcoes: ["Ouro", "Lítio", "Vidro"], certo: 0 }],
        explicacao: "Reciclar é mineração urbana; os metais conduzem; Serra Pelada: ouro." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 A bateria estufada do Pedro",
        perguntas: [
          { p: "O celular do Pedro ficou com a tampa levantando: a bateria está inchada. Isso é:", opcoes: ["Bateria estufada, sinal de perigo", "Normal, pode usar", "Sinal de que carregou demais e ficou mais forte"], certo: 0 },
          { p: "O que o Pedro deve fazer?", opcoes: ["Parar de usar e levar a um ponto de coleta ou a uma assistência", "Furar para sair o ar", "Jogar no lixo do quarto"], certo: 0 },
          { p: "Por que não furar?", opcoes: ["Porque pode pegar fogo", "Porque perde as fotos", "Porque fica feia"], certo: 0 }],
        explicacao: "Bateria estufada pode pegar fogo: não fure, pare de usar e leve a um lugar adequado." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos materiais",
        enunciado: "<p>Vire duas cartas e ache os pares: cada material e para que serve.</p>", dicas: ["Veja a coluna “Para que serve” da tabela do 💡 Para começar."],
        pares: [{ a: "Lítio", b: "Guardar a energia" }, { a: "Cobre", b: "Levar a eletricidade (conduzir)" }, { a: "Estanho", b: "Prender as peças na placa" }, { a: "Vidro", b: "Mostrar a imagem e sentir o toque" }],
        explicacao: "Lítio, cobre, estanho e vidro." }
    ],
    vf: [
      { v: true, why: "Lítio e cobalto." },
      { v: true, why: "Conduzem a eletricidade." },
      { v: false, corrigir: { trecho: "é segura para continuar usando", opcoes: ["é segura para continuar usando", "pode pegar fogo"], certo: "pode pegar fogo" }, why: "Sinal de perigo." },
      { v: true, why: "Tirar metais do lixo." },
      { v: false, corrigir: { trecho: "é um jeito seguro de descartar", opcoes: ["é um jeito seguro de descartar", "pode fazer a bateria pegar fogo"], certo: "pode fazer a bateria pegar fogo" }, why: "Não fure: leve ao ponto de coleta." }
    ]
  },

  m3: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: em que cena está?",
        robo: BIT("🔎 A pergunta", [["Começa chamando a atenção? Abertura. Mostra o que está errado? Problema.", "abertura · problema"], ["Mostra o que fazer? Solução. Créditos? Fim.", "solução · fim", true]]),
        enunciado: "<p>Use a tabela <strong>Cena · O que aparece · O que se fala · Tempo</strong>.</p>",
        colunaItem: "O que se fala", colunaResp: "Cena",
        categorias: [{ id: "A", rot: "1 – Abertura" }, { id: "P", rot: "2 – Problema" }, { id: "S", rot: "3 – Solução" }, { id: "F", rot: "4 – Fim" }],
        itens: [{ t: "“Você tem um desses em casa?”", c: "A" }, { t: "“No lixo comum, ele contamina o solo.”", c: "P" }, { t: "“Leve a um ponto de coleta!”", c: "S" }, { t: "“Cuide do planeta!”", c: "F" }],
        explicacao: "Abertura, problema, solução e fim." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "As cenas do roteiro, em ordem",
        itens: ["Abertura: chamar a atenção", "Problema: o que está errado", "Solução: o que fazer", "Fim: nome da equipe e créditos"],
        explicacao: "Abertura → problema → solução → fim." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Roteiro", b: "O plano do que aparece e do que se fala, cena por cena" }, { a: "Storyboard", b: "O roteiro desenhado em quadrinhos" }, { a: "Podcast", b: "Programa só de áudio, como um programa de rádio" }, { a: "Narrador", b: "Quem fala o texto" }],
        explicacao: "Roteiro, storyboard, podcast e narrador." },
      { tipo: "escolha", titulo: "As funções da equipe",
        perguntas: [
          { p: "Quem escreve o roteiro é o:", opcoes: ["Roteirista", "Editor", "Câmera"], certo: 0 },
          { p: "Quem junta e corta as partes no computador é o:", opcoes: ["Editor", "Narrador", "Roteirista"], certo: 0 },
          { p: "Para filmar o rosto de um colega, é preciso:", opcoes: ["Autorização", "Nada", "Só um filtro"], certo: 0 }],
        explicacao: "Roteirista escreve, editor junta e corta; rosto de colega só com autorização." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Conserte o roteiro da equipe Verde",
        enunciado: "<p>A equipe Verde escreveu o roteiro. Para cada linha, decida se está boa ou se precisa consertar.</p>",
        app: "📝 Roteiro", botoes: [{ id: "B", rot: "👍 Está boa" }, { id: "C", rot: "🔧 Precisa consertar" }],
        itens: [{ de: "Cena 1", t: "Celular velho na gaveta · “Você tem um desses em casa?” · 10 s", c: "B" },
          { de: "Cena 2", t: "Rosto do colega Lucas, que não foi perguntado", c: "C", why: "Precisa de autorização." },
          { de: "Cena 3", t: "Música famosa baixada da internet, sem crédito", c: "C", why: "Música própria ou livre, com crédito." },
          { de: "Cena 4", t: "Nome da equipe e créditos · “Cuide do planeta!” · 10 s", c: "B" }],
        okMsg: "Roteiro consertado! 📝",
        explicacao: "Rosto só com autorização; música livre e com crédito." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "🔴 Some o tempo das cenas",
        enunciado: "<p>Some os tempos da tabela do 💡 Para começar.</p>", dicas: ["10 + 20 + 20 + 10."],
        perguntas: [
          { p: "Quanto tempo tem o vídeo inteiro (10 s + 20 s + 20 s + 10 s)?", opcoes: ["60 segundos (1 minuto)", "40 segundos", "2 minutos"], certo: 0 },
          { p: "Se a cena 2 passar a ter 40 s, o vídeo fica com:", opcoes: ["80 segundos, mais que 1 minuto", "60 segundos", "30 segundos"], certo: 0 }],
        explicacao: "10 + 20 + 20 + 10 = 60 s. Com 40 s na cena 2: 80 s, passa do limite." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Um quadrinho por cena." },
      { v: true, why: "Só áudio." },
      { v: false, corrigir: { trecho: "Posso filmar o rosto de um colega sem perguntar", opcoes: ["Posso filmar o rosto de um colega sem perguntar", "Preciso de autorização para filmar o rosto de um colega"], certo: "Preciso de autorização para filmar o rosto de um colega" }, why: "Rosto só com autorização." },
      { v: false, corrigir: { trecho: "entra sem crédito", opcoes: ["entra sem crédito", "entra com crédito"], certo: "entra com crédito" }, why: "Música livre, com crédito." }
    ]
  },

  m4: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: ajuda ou atrapalha a gravação?",
        robo: BIT("🔎 A pergunta", [["O rosto aparece bem e a fala fica clara? Ajuda.", "claro → ajuda"], ["Escuro, barulho ou de pé? Atrapalha.", "escuro/barulho → atrapalha", true]]),
        enunciado: "<p>Use a tabela <strong>Dica · Por quê</strong>.</p>",
        colunaItem: "Na gravação", colunaResp: "Ajuda?",
        categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
        itens: [{ t: "Celular deitado (horizontal)", c: "A" }, { t: "Janela atrás de quem fala, rosto escuro", c: "T" }, { t: "Lugar silencioso", c: "A" }, { t: "Gravar na hora do recreio, com barulho", c: "T" }, { t: "Celular perto de quem fala", c: "A" }],
        explicacao: "Deitado, silencioso e perto ajudam; contraluz e barulho atrapalham." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada dica e o seu motivo",
        pares: [{ a: "📱 Celular deitado", b: "O vídeo ocupa a tela toda do computador" }, { a: "💡 Luz de frente", b: "O rosto não fica escuro" }, { a: "🤫 Lugar silencioso", b: "A fala fica clara, sem barulho" }, { a: "🔁 Cada cena separada", b: "Se errar, regrava só aquela" }],
        explicacao: "Cada dica tem um motivo." },
      { tipo: "ordenar", titulo: "Os passos no editor, em ordem",
        robo: BIT("🎙️ Outro projeto", [["Num podcast: primeiro trago os áudios para o editor.", "importar"], ["Depois coloco em ordem, corto o que sobra, ponho a música e salvo.", "ordenar → cortar → som → exportar", true]]),
        itens: ["Importar os arquivos gravados", "Ordenar os trechos na linha do tempo", "Cortar os pedaços que sobram", "Colocar texto, legenda e música", "Exportar o arquivo pronto"],
        explicacao: "Importar → ordenar → cortar → texto e som → exportar." },
      { tipo: "escolha", titulo: "Nomes e arquivos",
        perguntas: [
          { p: "Qual é o melhor nome de arquivo?", opcoes: ["2027-7A-equipe-verde-reciclagem.mp4", "video final final2.mp4", "aaaa.mp4"], certo: 0 },
          { p: "Um vídeo pronto costuma ser salvo em:", opcoes: [".mp4", ".mp3", ".txt"], certo: 0 },
          { p: "Um podcast pronto costuma ser salvo em:", opcoes: [".mp3", ".mp4", ".jpg"], certo: 0 }],
        explicacao: "Nome claro; vídeo em .mp4; áudio em .mp3." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O que deu errado na gravação?",
        perguntas: [
          { p: "No vídeo, o rosto do narrador ficou escuro. O que faltou?", opcoes: ["Luz de frente para quem fala", "Celular deitado", "Exportar"], certo: 0 },
          { p: "O vídeo ficou com faixas pretas dos lados no computador. O que faltou?", opcoes: ["Gravar com o celular deitado", "Lugar silencioso", "Legenda"], certo: 0 },
          { p: "No começo, tem 5 segundos de silêncio. O que fazer no editor?", opcoes: ["Cortar", "Importar", "Exportar de novo sem mudar nada"], certo: 0 },
          { p: "A fala ficou baixinha e com barulho. O que fazer na próxima?", opcoes: ["Lugar silencioso e celular perto de quem fala", "Gravar mais longe", "Gravar no recreio"], certo: 0 }],
        explicacao: "Luz de frente, celular deitado, cortar o silêncio e lugar silencioso com o celular perto." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do editor",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 📖 O que significa?."],
        palavras: ["EDITOR", "IMPORTAR", "CORTAR", "LEGENDA", "EXPORTAR"],
        pistas: ["Programa que junta, corta e arruma vídeos", "Trazer um arquivo para dentro do programa", "Tirar um pedaço que sobra", "Texto na tela com o que está sendo falado", "Salvar o trabalho pronto num arquivo"], tam: 10,
        explicacao: "Editor, importar, cortar, legenda e exportar." }
    ],
    vf: [
      { v: true, why: "Ocupa a tela toda." },
      { v: false, corrigir: { trecho: "Lugar barulhento deixa a fala mais clara", opcoes: ["Lugar barulhento deixa a fala mais clara", "Lugar silencioso deixa a fala mais clara"], certo: "Lugar silencioso deixa a fala mais clara" }, why: "O barulho atrapalha." },
      { v: true, why: "É a definição." },
      { v: true, why: "É para isso que serve." },
      { v: false, corrigir: { trecho: "é um bom nome de arquivo", opcoes: ["é um bom nome de arquivo", "é um nome que se perde"], certo: "é um nome que se perde" }, why: "Nome bom diz o que é." }
    ]
  },

  m5: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: pode publicar?",
        robo: BIT("🔎 As perguntas", [["Todos autorizaram? Não tem dado pessoal? Tudo tem crédito?", "3 perguntas"], ["Se alguma resposta for “não”, ainda não publica.", "um não → não publica", true]]),
        enunciado: "<p>Use a tabela <strong>Pergunta · Se a resposta for “não”…</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Pode publicar?",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "❌ Ainda não" }],
        itens: [{ t: "Todos autorizaram, tudo com crédito, no portal da turma", c: "S" }, { t: "Aparece o uniforme com o nome de um aluno", c: "N" }, { t: "A música não tem crédito", c: "N" }, { t: "Um colega aparece e não autorizou", c: "N" }],
        explicacao: "Só publica com autorização, sem dado pessoal, com créditos e em lugar seguro." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada parte da ficha técnica e o seu exemplo",
        pares: [{ a: "🎬 Título", b: "“Celular no lixo? Não!”" }, { a: "🛠️ Ferramentas", b: "Celular da escola e editor de vídeo" }, { a: "📚 Créditos", b: "Música: autor · site · licença" }, { a: "💭 O que aprendemos", b: "“Cortar as partes que sobram deixa o vídeo melhor.”" }],
        explicacao: "Título, ferramentas, créditos e o que aprendemos." },
      { tipo: "classificar", titulo: "Separe: pode publicar ou tire antes?",
        categorias: [{ id: "S", rot: "✅ Pode aparecer" }, { id: "N", rot: "✂️ Tire antes de publicar" }],
        itens: [{ t: "O primeiro nome da equipe", c: "S" }, { t: "O endereço de um colega", c: "N" }, { t: "Os créditos da música", c: "S" }, { t: "O telefone de alguém", c: "N" }],
        explicacao: "Primeiro nome e créditos podem; endereço e telefone, não." },
      { tipo: "escolha", titulo: "A licença",
        perguntas: [
          { p: "Com a licença CC BY, outros podem usar o nosso vídeo:", opcoes: ["Desde que deem o crédito à equipe", "Sem dizer nada", "Nunca"], certo: 0 },
          { p: "Documentar é:", opcoes: ["Registrar como o trabalho foi feito", "Apagar o trabalho", "Copiar o trabalho de outro"], certo: 0 }],
        explicacao: "CC BY: com crédito. Documentar: registrar como foi feito." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 O vídeo da equipe Azul está pronto para publicar?",
        enunciado: "<p>Confira cada item antes de publicar no portal da turma.</p>",
        app: "📒 Checklist", botoes: [{ id: "S", rot: "✅ Ok" }, { id: "N", rot: "🚫 Resolver antes" }],
        itens: [{ de: "Autorização", t: "As três pessoas que aparecem trouxeram a autorização dos responsáveis", c: "S" },
          { de: "Dados pessoais", t: "Aparece a fachada da casa da Bia com o número", c: "N", why: "Endereço é dado pessoal: corte a cena." },
          { de: "Créditos", t: "A ficha técnica tem a música: autor · site · licença", c: "S" },
          { de: "Lugar", t: "Vão publicar num perfil aberto de um desconhecido", c: "N", why: "Lugar seguro: o portal da turma ou a mostra." }],
        okMsg: "Checklist conferido! 📒",
        explicacao: "Autorização e créditos ok; endereço e lugar inseguro precisam ser resolvidos." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 Monte a ficha técnica em ordem",
        enunciado: "<p>Coloque as partes na ordem da tabela da ficha técnica.</p>", dicas: ["Siga a tabela do 💡 Para começar, de cima para baixo."],
        itens: ["🎬 Título", "👥 Equipe e funções", "🛠️ Ferramentas", "📚 Créditos", "💭 O que aprendemos"],
        explicacao: "Título → equipe → ferramentas → créditos → o que aprendemos." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Os créditos ficam na ficha." },
      { v: false, corrigir: { trecho: "Posso publicar o vídeo com o endereço de um colega", opcoes: ["Posso publicar o vídeo com o endereço de um colega", "Tiro o endereço do colega antes de publicar"], certo: "Tiro o endereço do colega antes de publicar" }, why: "Endereço é dado pessoal." },
      { v: true, why: "É a regra da CC BY." },
      { v: false, corrigir: { trecho: "não preciso de autorização", opcoes: ["não preciso de autorização", "preciso de autorização"], certo: "preciso de autorização" }, why: "Direito de imagem." }
    ]
  },

  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual critério?",
        robo: BIT("🔎 A pergunta", [["“Dá para ouvir bem?” fala de Qualidade.", "ouvir → qualidade"], ["“Ficou em até 1 minuto?” fala de Tempo.", "minuto → tempo", true]]),
        enunciado: "<p>Use a tabela <strong>Critério da rubrica · Pergunta</strong>.</p>",
        colunaItem: "Observação", colunaResp: "Critério",
        categorias: [{ id: "M", rot: "🎯 Mensagem" }, { id: "Q", rot: "🎬 Qualidade" }, { id: "T", rot: "⏱️ Tempo" }, { id: "C", rot: "📚 Créditos" }, { id: "S", rot: "🔒 Segurança" }],
        itens: [{ t: "A ideia de cuidar do planeta ficou clara", c: "M" }, { t: "A fala está alta e sem barulho", c: "Q" }, { t: "O vídeo tem 58 segundos", c: "T" }, { t: "A ficha técnica mostra a música e o autor", c: "C" }, { t: "Ninguém aparece sem autorização", c: "S" }],
        explicacao: "Mensagem, qualidade, tempo, créditos e segurança." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada critério e a sua pergunta",
        pares: [{ a: "🎯 Mensagem", b: "A ideia sobre cuidar do planeta ficou clara?" }, { a: "🎬 Qualidade", b: "Dá para ver e ouvir bem?" }, { a: "⏱️ Tempo", b: "Ficou em até 1 minuto?" }, { a: "📚 Créditos", b: "Tem a ficha técnica e os créditos?" }, { a: "🔒 Segurança", b: "Ninguém aparece sem autorização?" }],
        explicacao: "Os cinco critérios da rubrica." },
      { tipo: "classificar", titulo: "Plateia respeitosa?",
        categorias: [{ id: "R", rot: "👏 Respeitosa" }, { id: "D", rot: "🙉 Desrespeitosa" }],
        itens: [{ t: "Ficar em silêncio durante o vídeo", c: "R" }, { t: "Rir do trabalho do colega", c: "D" }, { t: "Aplaudir no fim", c: "R" }, { t: "Mexer no celular durante a apresentação", c: "D" }, { t: "Dar feedback com algo bom + uma sugestão", c: "R" }],
        explicacao: "Silêncio, aplausos e feedback respeitoso." },
      { tipo: "escolha", titulo: "O melhor feedback",
        perguntas: [
          { p: "Qual é o melhor feedback?", opcoes: ["“A mensagem ficou clara! Sugiro aumentar o volume da música só no fim.”", "“Ficou ruim.”", "“Sei lá.”"], certo: 0 },
          { p: "Na mostra, depois de mostrar o vídeo, a equipe conta:", opcoes: ["Uma coisa que aprenderam fazendo", "O telefone de cada um", "Nada"], certo: 0 }],
        explicacao: "Algo bom + uma sugestão; e uma coisa que aprenderam." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Avalie o vídeo da equipe Amarela",
        enunciado: "<p>Para cada critério, decida se a equipe Amarela cumpriu.</p>",
        app: "🎪 Rubrica", botoes: [{ id: "S", rot: "✅ Cumpriu" }, { id: "N", rot: "❌ Não cumpriu" }],
        itens: [{ de: "🎯 Mensagem", t: "O vídeo mostra onde levar as pilhas: a ideia ficou clara", c: "S" },
          { de: "⏱️ Tempo", t: "O vídeo tem 2 minutos e 30 segundos", c: "N", why: "O limite é até 1 minuto." },
          { de: "📚 Créditos", t: "Não tem ficha técnica nem crédito da música", c: "N", why: "Faltaram os créditos." },
          { de: "🔒 Segurança", t: "Só aparecem as mãos da equipe e desenhos", c: "S" }],
        okMsg: "Avaliação justa! 🎪",
        explicacao: "Mensagem e segurança cumpriram; tempo e créditos, não." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória da mostra",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Mostra", b: "Apresentação dos trabalhos para um público" }, { a: "Plateia", b: "As pessoas que assistem" }, { a: "Rubrica", b: "Lista do que vai ser avaliado" }, { a: "Feedback", b: "Comentário que ajuda a melhorar" }],
        explicacao: "Mostra, plateia, rubrica e feedback." }
    ],
    vf: [
      { v: true, why: "Cada equipe apresenta." },
      { v: true, why: "Respeito." },
      { v: false, corrigir: { trecho: "é só dizer “ficou ruim”", opcoes: ["é só dizer “ficou ruim”", "tem algo bom + uma sugestão"], certo: "tem algo bom + uma sugestão" }, why: "Feedback ajuda a melhorar." },
      { v: true, why: "É o critério Tempo." },
      { v: false, corrigir: { trecho: "é atitude de plateia respeitosa", opcoes: ["é atitude de plateia respeitosa", "é atitude de plateia desrespeitosa"], certo: "é atitude de plateia desrespeitosa" }, why: "Rir do colega desrespeita." }
    ]
  },

  m7: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada cor e os seus números",
        robo: BIT("🔎 Como pensar", [["Tudo apagado (0, 0, 0) é preto. Tudo no máximo (255, 255, 255) é branco.", "0 = apagado · 255 = máximo"], ["Só o vermelho no máximo: 255, 0, 0.", "vermelho", true]]),
        enunciado: "<p>Use a tabela <strong>Cor · R (vermelho) · G (verde) · B (azul)</strong>.</p>",
        pares: [{ a: "⬛ Preto", b: "0, 0, 0" }, { a: "⬜ Branco", b: "255, 255, 255" }, { a: "🟥 Vermelho", b: "255, 0, 0" }, { a: "🟨 Amarelo", b: "255, 255, 0" }],
        explicacao: "Preto 0,0,0; branco 255,255,255; vermelho 255,0,0; amarelo 255,255,0." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Pixel", b: "O menor ponto de cor de uma imagem digital" }, { a: "RGB", b: "Sistema que forma as cores misturando vermelho, verde e azul" }, { a: "Resolução", b: "A quantidade de pixels de uma imagem" }, { a: "Amostra", b: "Uma medida do som, feita muitas vezes por segundo" }],
        explicacao: "Pixel, RGB, resolução e amostra." },
      { tipo: "escolha", titulo: "Resolução e som",
        perguntas: [
          { p: "Uma foto de 4000 × 3000 pixels tem:", opcoes: ["12 milhões de pixels (12 megapixels)", "7 mil pixels", "12 pixels"], certo: 0 },
          { p: "Mais pixels deixam a foto:", opcoes: ["Com mais detalhes e arquivo maior", "Com menos detalhes", "Sem cor"], certo: 0 },
          { p: "Num arquivo de música comum, o som é medido:", opcoes: ["44.100 vezes por segundo", "Uma vez por minuto", "10 vezes por segundo"], certo: 0 }],
        explicacao: "4000 × 3000 = 12 megapixels; mais pixels, mais detalhes; música comum: 44.100 amostras por segundo." },
      { tipo: "classificar", titulo: "Foto ou som?",
        categorias: [{ id: "F", rot: "🖼️ Foto" }, { id: "S", rot: "🔊 Som" }],
        itens: [{ t: "Pixel", c: "F" }, { t: "Amostra", c: "S" }, { t: "RGB", c: "F" }, { t: "Microfone", c: "S" }, { t: "Megapixel", c: "F" }],
        explicacao: "Pixel, RGB e megapixel: foto. Amostra e microfone: som." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Qual arquivo é maior?",
        perguntas: [
          { p: "A mesma foto em 12 megapixels ou em 2 megapixels. Qual tem o arquivo maior?", opcoes: ["12 megapixels", "2 megapixels", "São iguais"], certo: 0 },
          { p: "Por que a foto de 12 megapixels é maior?", opcoes: ["Tem mais pixels para guardar", "Tem mais cores bonitas", "Foi tirada de dia"], certo: 0 },
          { p: "Você deu um zoom enorme numa foto e apareceram quadradinhos. Eles são:", opcoes: ["Os pixels", "Um vírus", "Uma amostra de som"], certo: 0 }],
        explicacao: "Mais pixels = arquivo maior; os quadradinhos do zoom são os pixels." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: fotos e sons viram dados",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "A foto é feita de **pixels**, e cada um guarda a cor em **RGB**. A quantidade de pixels é a **resolução**. O som vira **amostras**, medidas muitas vezes por segundo.",
        explicacao: "Pixels, RGB, resolução e amostras." }
    ],
    vf: [
      { v: true, why: "Quadradinhos de cor." },
      { v: false, corrigir: { trecho: "o preto é 255, 255, 255", opcoes: ["o preto é 255, 255, 255", "o preto é 0, 0, 0"], certo: "o preto é 0, 0, 0" }, why: "255, 255, 255 é o branco." },
      { v: true, why: "E o arquivo fica maior." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "Amostra é a cor de um pixel", opcoes: ["Amostra é a cor de um pixel", "Amostra é uma medida do som"], certo: "Amostra é uma medida do som" }, why: "Amostra é do som." }
    ]
  },

  m8: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada tag e para que serve",
        robo: BIT("🔎 Como pensar", [["h de <i>heading</i> (título). p de parágrafo.", "h1 → título · p → parágrafo"], ["img de <i>image</i> (imagem). a faz o link.", "img → imagem · a → link", true]]),
        enunciado: "<p>Use a tabela <strong>Tag · Para que serve · Exemplo</strong>.</p>",
        pares: [{ a: "&lt;h1&gt;", b: "Título grande" }, { a: "&lt;p&gt;", b: "Parágrafo de texto" }, { a: "&lt;img&gt;", b: "Imagem" }, { a: "&lt;a&gt;", b: "Link para outra página" }],
        explicacao: "h1 = título; p = parágrafo; img = imagem; a = link." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "HTML", b: "A linguagem usada para escrever páginas da internet" }, { a: "Tag", b: "A etiqueta do HTML, escrita entre < e >" }, { a: "Navegador", b: "O programa que abre as páginas" }, { a: "Texto alternativo", b: "A descrição da imagem para quem não enxerga" }],
        explicacao: "HTML, tag, navegador e texto alternativo." },
      { tipo: "ordenar", titulo: "Monte a página em ordem",
        enunciado: "<p>Coloque as linhas na ordem: primeiro o título, depois o texto, a imagem e, no fim, o link.</p>",
        itens: ["&lt;h1&gt;Cuide do planeta&lt;/h1&gt;", "&lt;p&gt;Leve o celular velho ao ponto de coleta.&lt;/p&gt;", "&lt;img src=\"reciclagem.png\"&gt;", "&lt;a href=\"pagina2.html\"&gt;Saiba mais&lt;/a&gt;"],
        explicacao: "Título, parágrafo, imagem e link." },
      { tipo: "escolha", titulo: "Abrir e fechar",
        perguntas: [
          { p: "Qual tag fecha um parágrafo?", opcoes: ["&lt;/p&gt;", "&lt;p&gt;", "&lt;h1&gt;"], certo: 0 },
          { p: "Quem lê o HTML e mostra a página é o:", opcoes: ["Navegador", "Editor de vídeo", "Microfone"], certo: 0 }],
        explicacao: "&lt;/p&gt; fecha; o navegador mostra a página." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Ache os erros no HTML",
        enunciado: "<p>A equipe escreveu a página. Para cada linha, decida se está certa ou com erro.</p>",
        app: "🌐 HTML", botoes: [{ id: "C", rot: "✅ Certa" }, { id: "E", rot: "🐞 Com erro" }],
        itens: [{ de: "Linha 1", t: "&lt;h1&gt;Pilhas no lugar certo&lt;/h1&gt;", c: "C" },
          { de: "Linha 2", t: "&lt;p&gt;Pilha não vai no lixo comum.", c: "E", why: "Faltou fechar com &lt;/p&gt;." },
          { de: "Linha 3", t: "&lt;img src=\"pilhas.png\" alt=\"Pilhas na caixa de coleta\"&gt;", c: "C" },
          { de: "Linha 4", t: "&lt;a&gt;Saiba mais&lt;/h1&gt;", c: "E", why: "Abre com &lt;a&gt; e fecha com &lt;/a&gt;." }],
        okMsg: "Bugs encontrados! 🌐",
        explicacao: "Toda tag que abre precisa fechar com a mesma tag." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do HTML",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["HTML", "TAG", "NAVEGADOR", "LINK", "IMAGEM"],
        pistas: ["Linguagem das páginas da internet", "Etiqueta escrita entre < e >", "Programa que abre as páginas", "Texto que abre outra página", "O que a tag img mostra"], tam: 10,
        explicacao: "HTML, tag, navegador, link e imagem." }
    ],
    vf: [
      { v: true, why: "É a linguagem das páginas." },
      { v: true, why: "h1 = título." },
      { v: false, corrigir: { trecho: "abre um parágrafo", opcoes: ["abre um parágrafo", "fecha um parágrafo"], certo: "fecha um parágrafo" }, why: "A barra fecha." },
      { v: true, why: "a = link." },
      { v: true, why: "Acessibilidade." }
    ]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "classificar", de: "m1", titulo: "M1 · Certo ou errado?", categorias: [{ id: "C", rot: "Certo" }, { id: "E", rot: "Errado" }], itens: [{ t: "Ponto de coleta", c: "C" }, { t: "Queimar fios", c: "E" }, { t: "Pilha no lixo comum", c: "E" }], explicacao: "Ponto de coleta é o certo." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Bateria", perguntas: [{ p: "Bateria estufada:", opcoes: ["Pode pegar fogo", "É segura"], certo: 0 }], explicacao: "Pode pegar fogo." },
      { tipo: "relembre", de: "m3" },
      { tipo: "ordenar", de: "m3", titulo: "M3 · O roteiro", itens: ["Abertura", "Problema", "Solução", "Fim"], explicacao: "Abertura, problema, solução, fim." },
      { tipo: "relembre", de: "m4" },
      { tipo: "ordenar", de: "m4", titulo: "M4 · O editor", itens: ["Importar", "Ordenar", "Cortar", "Exportar"], explicacao: "Importar, ordenar, cortar, exportar." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Publicar", perguntas: [{ p: "Para publicar a imagem de um colega:", opcoes: ["Preciso de autorização", "Não preciso de nada"], certo: 0 }], explicacao: "Autorização." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Rubrica", perguntas: [{ p: "O critério “Tempo” confere se o vídeo ficou em:", opcoes: ["Até 1 minuto", "Até 1 hora"], certo: 0 }], explicacao: "Até 1 minuto." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Pixel", perguntas: [{ p: "O menor ponto de cor da imagem é o:", opcoes: ["Pixel", "Bit de som"], certo: 0 }], explicacao: "Pixel." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · HTML", perguntas: [{ p: "A tag que faz um link é:", opcoes: ["&lt;a&gt;", "&lt;p&gt;"], certo: 0 }], explicacao: "&lt;a&gt;." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: cuida ou descuida?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "♻️ Criar e cuidar", botoes: [{ id: "C", rot: "✅ Cuida" }, { id: "D", rot: "🚩 Descuida" }],
        itens: [{ de: "", t: "Levar a pilha gasta ao ponto de coleta", c: "C" }, { de: "", t: "Furar a bateria estufada", c: "D" }, { de: "", t: "Colocar os créditos da música na ficha técnica", c: "C" },
          { de: "", t: "Publicar o vídeo com o endereço de um colega", c: "D" }, { de: "", t: "Gravar num lugar silencioso", c: "C" }],
        okMsg: "Você está pronto para a prova! ♻️",
        explicacao: "Ponto de coleta, créditos e lugar silencioso cuidam; furar bateria e expor endereço descuidam." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["RECICLAGEM", "LITIO", "ROTEIRO", "EXPORTAR", "RUBRICA", "PIXEL"],
        pistas: ["Transformar o material usado em matéria-prima de novo", "Metal da bateria (sem acento)", "O plano do vídeo, cena por cena", "Salvar o trabalho pronto num arquivo", "Lista do que vai ser avaliado", "O menor ponto de cor de uma imagem"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-4bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Descarte", [{ p: "O caminho de volta do produto, do consumidor para o fabricante, é a:", opcoes: ["Logística reversa", "Reciclagem de papel", "Linha do tempo"], certo: 0 }, { p: "O lugar certo para o celular sem conserto é:", opcoes: ["O ponto de coleta", "O lixo comum", "A fogueira"], certo: 0 }]), pega("m1"),
    Q("m2", "Dentro do celular", [{ p: "O metal leve usado nas baterias é o:", opcoes: ["Lítio", "Ouro", "Vidro"], certo: 0 }, { p: "Tirar metais do lixo eletrônico pela reciclagem é a:", opcoes: ["Mineração urbana", "Logística de vendas", "Exportação"], certo: 0 }]), pega("m2"),
    Q("m3", "Roteiro", [{ p: "O roteiro desenhado em quadrinhos é o:", opcoes: ["Storyboard", "Podcast", "Pixel"], certo: 0 }, { p: "Programa só de áudio é o:", opcoes: ["Podcast", "Storyboard", "HTML"], certo: 0 }]), pega("m3"),
    Q("m4", "Gravar e montar", [{ p: "Salvar o trabalho pronto num arquivo é:", opcoes: ["Exportar", "Importar", "Cortar"], certo: 0 }, { p: "Para o rosto não ficar escuro:", opcoes: ["Luz de frente para quem fala", "Janela atrás de quem fala", "Gravar no escuro"], certo: 0 }]), pega("m4"),
    Q("m5", "Documentar e publicar", [{ p: "A lista de quem fez, com o quê e com quais créditos é a:", opcoes: ["Ficha técnica", "Rubrica", "Licença"], certo: 0 }, { p: "Antes de publicar, o endereço de um colega:", opcoes: ["Sai do vídeo", "Fica em destaque", "Vai na legenda"], certo: 0 }]), pega("m5"),
    Q("m6", "Mostra", [{ p: "As pessoas que assistem são a:", opcoes: ["Plateia", "Rubrica", "Equipe"], certo: 0 }, { p: "Um bom feedback tem:", opcoes: ["Algo bom + uma sugestão", "Só críticas", "Risadas"], certo: 0 }]), pega("m6"),
    Q("m7", "Fotos e sons", [{ p: "No RGB, o branco é:", opcoes: ["255, 255, 255", "0, 0, 0", "255, 0, 0"], certo: 0 }, { p: "A quantidade de pixels de uma imagem é a:", opcoes: ["Resolução", "Amostra", "Legenda"], certo: 0 }]), pega("m7"),
    Q("m8", "Site simples", [{ p: "A tag que faz um título grande é:", opcoes: ["&lt;h1&gt;", "&lt;a&gt;", "&lt;img&gt;"], certo: 0 }, { p: "A descrição da imagem para quem não enxerga é o:", opcoes: ["Texto alternativo", "Link", "Título"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();
