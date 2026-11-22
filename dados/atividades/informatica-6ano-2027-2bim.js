/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 2º bimestre de 2027 (Algoritmos)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF06CO02, EF06CO03, EF06CO04, EF06CO05.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   Bit ("Me ajuda, robô!") nas práticas; respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  // 🤖 Bit no labirinto: mostra o MÉTODO num labirinto diferente (nunca a resposta)
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num labirinto <b>diferente</b> do seu. Cada seta anda <b>uma casa</b>.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Antes de cada seta, eu olho se a próxima casa é parede 🧱. No fim, aperto ▶ Executar para testar.", painel: null, espera: 2600 }],
    fim: fim || "Agora é a sua vez: monte o caminho do seu labirinto. 💪" });

PORTAL.registrarAtividades("informatica-6ano-2027-2bim", {

  /* ============ MISSÃO 1 — Algoritmos do dia a dia ============ */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "Monte o algoritmo: um copo de suco",
        enunciado: "<p>Um <strong>algoritmo</strong> é uma sequência de passos, em ordem. Clique nos passos <strong>na ordem</strong> em que eles acontecem.</p>",
        etapas: [
          { ic: "🥤", t: "Pegar um copo", dica: "Primeiro, o copo: sem ele não dá para fazer nada." },
          { ic: "🥄", t: "Colocar 2 colheres de suco em pó no copo" },
          { ic: "🚰", t: "Encher o copo com água", dica: "A água vem depois do pó, para dar para mexer." },
          { ic: "🌀", t: "Mexer com a colher" },
          { ic: "😋", t: "Beber o suco", dica: "Beber é o resultado: fica no fim." }],
        okMsg: "Algoritmo na ordem certa! Começo, meio e fim, e o resultado é o copo de suco. 🥤",
        explicacao: "Um algoritmo tem começo, meio e fim. Cada passo é uma <strong>instrução</strong> clara e precisa (“2 colheres”, e não “um pouco”)." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Instrução clara e precisa ou vaga?",
        enunciado: "<p>O computador não adivinha nada. Separe as instruções <strong>precisas</strong> (dizem exatamente o que fazer) das <strong>vagas</strong> (deixam dúvida).</p>",
        categorias: [{ id: "P", rot: "✅ Clara e precisa" }, { id: "V", rot: "❓ Vaga" }],
        itens: [{ t: "Coloque 2 colheres de açúcar", c: "P" }, { t: "Coloque um pouco de açúcar", c: "V" }, { t: "Ande 3 passos para a frente", c: "P" },
          { t: "Vai por ali", c: "V" }, { t: "Encha o copo com água até a metade", c: "P" }, { t: "Faz o suco aí", c: "V" }],
        dicas: ["Pergunte: dá para fazer sem perguntar nada? Se sim, é precisa.", "“Um pouco”, “por ali” e “aí” deixam dúvida."],
        explicacao: "Instrução <strong>precisa</strong> diz exatamente o que fazer (números, quantidades, direções). A vaga deixa dúvida, e o computador não sabe adivinhar." },
      { tipo: "memoria", titulo: "Jogo da memória: as palavras novas",
        pares: [{ a: "Algoritmo", b: "Sequência de passos, em ordem, para resolver um problema" }, { a: "Instrução", b: "Cada passo do algoritmo, uma ordem clara" },
          { a: "Programa", b: "Algoritmo escrito na linguagem do computador" }, { a: "Resultado", b: "O que se consegue no fim do algoritmo" }],
        explicacao: "Algoritmo = passos em ordem · instrução = cada passo · programa = algoritmo para o computador · resultado = o que se consegue no fim." },
      { tipo: "escolha", titulo: "O que você sabe sobre algoritmos?",
        perguntas: [
          { p: "Qual destes é um algoritmo?", opcoes: ["A receita de um bolo, com os passos numerados", "Uma foto de um bolo", "O nome de um bolo"], certo: 0, why: "A receita tem passos em ordem que levam a um resultado: o bolo." },
          { p: "Por que as instruções para o computador precisam ser precisas?", opcoes: ["Porque o computador faz exatamente o que mandamos e não adivinha", "Porque o computador fica bravo", "Porque assim o computador fica mais bonito"], certo: 0, why: "O computador não entende “um pouco” nem “por ali”." },
          { p: "De onde vem a palavra algoritmo?", opcoes: ["Do nome do matemático persa al-Khwarizmi", "De um jogo de videogame", "Do nome de um robô"], certo: 0, why: "al-Khwarizmi viveu há mais de mil anos." }],
        explicacao: "Algoritmo = passos em ordem; instruções precisas, porque o computador não adivinha; o nome vem de al-Khwarizmi." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "Coloque em ordem: fazer um sanduíche",
        itens: ["Pegar duas fatias de pão", "Passar a manteiga numa fatia", "Colocar o queijo por cima da manteiga", "Fechar com a outra fatia", "Comer o sanduíche"],
        explicacao: "Se trocar a ordem, não dá certo: não tem como fechar o sanduíche antes de colocar o recheio!" }
    ],
    turbo: [
      { tipo: "caca", titulo: "Caça-palavras do algoritmo",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>",
        palavras: ["ALGORITMO", "PASSO", "ORDEM", "PROGRAMA", "PRECISO"],
        pistas: ["Sequência de passos para resolver um problema", "Cada parte de um algoritmo", "A posição de cada passo: 1º, 2º, 3º…", "Algoritmo escrito para o computador", "Que diz exatamente o que fazer"], tam: 10,
        explicacao: "Você achou as palavras principais da Missão 1!" }
    ],
    vf: [
      { v: true, why: "É a definição de algoritmo." },
      { v: false, corrigir: { trecho: "adivinha o que queremos", opcoes: ["adivinha o que queremos", "não adivinha nada"], certo: "não adivinha nada" }, why: "O computador faz exatamente o que mandamos." },
      { v: false, corrigir: { trecho: "é uma instrução precisa", opcoes: ["é uma instrução precisa", "é uma instrução vaga"], certo: "é uma instrução vaga" }, why: "“Um pouco” deixa dúvida." },
      { v: true, why: "Tem passos em ordem e um resultado." },
      { v: true, why: "Programa é um algoritmo na linguagem do computador." }
    ]
  },

  /* ============ MISSÃO 2 — Sequência ============ */
  m2: {
    pratica: [
      { tipo: "robo", titulo: "Leve o robô 🤖 até a estrela ⭐ com setas",
        robo: BIT("🗺️ Outro labirinto: o robô em A1, a estrela em C2", [["Da casa A1, ➡️ vai para B1.", "➡️ (A1 → B1)"], ["De B1, ➡️ vai para C1.", "➡️ (B1 → C1)"], ["De C1, ⬇️ desce para C2: estrela!", "⬇️ (C1 → C2) ⭐", true]]),
        enunciado: "<p>Clique nas setas para montar o programa, <strong>uma seta por casa</strong>, sem passar pelas paredes 🧱. Depois clique em <strong>▶ Executar</strong>.</p>",
        grade: ["R..#.", ".#.#.", ".#...", ".###.", "....*"],
        solucao: [["D", 1], ["D", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1], ["R", 1], ["R", 1]],
        dicas: ["Pela coluna A dá para descer até a linha 5.", "Depois, é só ir para a direita até a estrela."],
        explicacao: "Um caminho certo: ⬇️ ⬇️ ⬇️ ⬇️ ➡️ ➡️ ➡️ ➡️. O robô faz as setas uma depois da outra: é a sequência." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Algoritmo para atravessar a rua com segurança",
        itens: ["Parar na calçada", "Olhar para os dois lados", "Esperar o sinal de pedestre ficar verde", "Atravessar na faixa, sem correr"],
        alternativas: [[0, 2, 1, 3]],
        explicacao: "Primeiro parar, depois olhar e esperar o sinal, e só então atravessar na faixa. A ordem protege você!" },
      { tipo: "ligar", titulo: "O que dá errado quando a ordem é trocada?",
        pares: [{ a: "Calçar o tênis antes da meia", b: "A meia fica por cima do tênis" }, { a: "Entrar na sala antes de abrir a porta", b: "Você bate na porta fechada" },
          { a: "Escovar os dentes antes de pôr o creme dental", b: "Escova sem creme" }, { a: "Apertar Iniciar no micro-ondas antes de pôr a comida", b: "O micro-ondas esquenta vazio" }],
        explicacao: "Trocar a ordem dos passos <strong>muda o resultado</strong>. Por isso, na sequência, a ordem importa." },
      { tipo: "robo", titulo: "Labirinto 2: o caminho com curva",
        robo: BIT("🗺️ Outro labirinto: o robô em A1, a estrela em B3", [["De A1, ⬇️ desce para A2.", "⬇️ (A1 → A2)"], ["De A2, ⬇️ desce para A3.", "⬇️ (A2 → A3)"], ["De A3, ➡️ vai para B3: estrela!", "➡️ (A3 → B3) ⭐", true]]),
        enunciado: "<p>Uma seta por casa. Atenção às paredes 🧱!</p>",
        grade: ["R.#..", "#.#.#", "#....", "####.", "....*"],
        solucao: [["R", 1], ["D", 1], ["D", 1], ["R", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1]],
        dicas: ["De A1, só dá para ir para a direita.", "Desça pela coluna B até a linha 3.", "Depois vá para a direita até a coluna E e desça até a estrela."],
        explicacao: "Um caminho certo: ➡️ ⬇️ ⬇️ ➡️ ➡️ ➡️ ⬇️ ⬇️." }
    ],
    desafio: [
      { tipo: "robo", titulo: "🟡 O labirinto grande",
        robo: BIT("🗺️ Outro labirinto: subir e descer", [["Às vezes o caminho precisa <b>subir</b> ⬆️ antes de chegar.", "⬆️ também vale!"], ["Eu sigo o corredor livre, casa por casa.", "casa por casa", true]]),
        enunciado: "<p>Agora o labirinto tem 6 colunas. Planeje antes de clicar!</p>",
        grade: ["R.#...", ".##.#.", "....#.", "#.#...", "..#.#.", "#...#*"],
        solucao: [["D", 1], ["D", 1], ["R", 1], ["R", 1], ["R", 1], ["U", 1], ["U", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1], ["D", 1], ["D", 1], ["D", 1]],
        dicas: ["Desça até A3 e vá para a direita até D3.", "De D3 suba até D1 e vá para a direita até F1.", "Pela coluna F dá para descer até a estrela."],
        explicacao: "Um caminho certo: ⬇️ ⬇️ ➡️ ➡️ ➡️ ⬆️ ⬆️ ➡️ ➡️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ (14 passos)." }
    ],
    turbo: [
      { tipo: "completar", titulo: "Complete: o que é sequência",
        texto: "Na **sequência**, o computador faz as instruções uma depois da outra, na **ordem** em que estão escritas, sem **pular** nenhuma. Trocar a ordem muda o **resultado**. No labirinto, cada **comando** anda uma casa.",
        explicacao: "Sequência = uma instrução depois da outra, sem pular e sem mudar a ordem." }
    ],
    vf: [
      { v: true, why: "É a ideia de sequência." },
      { v: false, corrigir: { trecho: "nunca muda o resultado", opcoes: ["nunca muda o resultado", "pode mudar o resultado"], certo: "pode mudar o resultado" }, why: "Calçar o tênis antes da meia não dá certo." },
      { v: true, why: "Cada seta é um passo de uma casa." },
      { v: false, corrigir: { trecho: "pode pular um passo do algoritmo quando quiser", opcoes: ["pode pular um passo do algoritmo quando quiser", "faz todos os passos, na ordem"], certo: "faz todos os passos, na ordem" }, why: "O computador nunca pula passos." },
      { v: true, why: "É a dica para montar a sequência." }
    ]
  },

  /* ============ MISSÃO 3 — Repetição ============ */
  m3: {
    pratica: [
      { tipo: "robo", titulo: "Caminho em zigue-zague usando “repita”", compacto: 5,
        robo: BIT("🔁 Juntando setas iguais: ➡️ ➡️ ➡️ ⬇️ ⬇️", [["Três ➡️ seguidas viram <b>um bloco só</b>: repita 3× ➡️ (uso o + para aumentar).", "repita 3× ➡️"], ["Duas ⬇️ seguidas: repita 2× ⬇️.", "repita 2× ⬇️", true], ["Em vez de 5 blocos, ficaram 2!", "5 → 2 blocos"]],
          "Agora é a sua vez: junte as setas iguais com o + e o −. 💪"),
        enunciado: "<p>Clique numa seta e use o <strong>+</strong> para dizer quantas vezes ela se repete. A meta é chegar com <strong>no máximo 5 blocos</strong>.</p>",
        grade: ["R....", "####.", ".....", ".####", "....*"],
        solucao: [["R", 4], ["D", 2], ["L", 4], ["D", 2], ["R", 4]],
        dicas: ["Primeiro: repita 4× ➡️.", "Depois desça 2 casas, volte 4 para a esquerda, desça 2 e vá 4 para a direita."],
        explicacao: "repita 4× ➡️ · repita 2× ⬇️ · repita 4× ⬅️ · repita 2× ⬇️ · repita 4× ➡️ = 16 passos em só 5 blocos!" }
    ],
    basico: [
      { tipo: "pintura", titulo: "Siga o algoritmo de pintura com repetição",
        forma: "quadrado", n: 6, pretos: [2, 4, 6],
        regra: "<strong>Repita 6 vezes:</strong> desenhe um quadrado. O 2º, o 4º e o 6º quadrado ficam pretos; os outros ficam brancos.",
        dicas: ["São 6 quadrados. Pinte só o 2º, o 4º e o 6º."],
        explicacao: "A repetição desenhou os 6 quadrados; o padrão (branco, preto, branco, preto…) decide a cor." },
      { tipo: "tabela", titulo: "Quantas vezes repetir?",
        enunciado: "<p>Escolha quantas vezes cada comando precisa ser repetido para fazer o mesmo que a sequência.</p>",
        colunas: ["Sequência", "Com repetição"],
        linhas: [["➡️ ➡️ ➡️", { op: ["repita 2× ➡️", "repita 3× ➡️", "repita 4× ➡️"], r: "repita 3× ➡️" }],
          ["👏 👏 👏 👏 👏", { op: ["repita 4× 👏", "repita 5× 👏", "repita 6× 👏"], r: "repita 5× 👏" }],
          ["⬇️ ⬇️", { op: ["repita 1× ⬇️", "repita 2× ⬇️", "repita 3× ⬇️"], r: "repita 2× ⬇️" }],
          ["🦘 🦘 🦘 🦘", { op: ["repita 3× 🦘", "repita 4× 🦘", "repita 5× 🦘"], r: "repita 4× 🦘" }]],
        explicacao: "Conte quantas vezes o passo aparece: esse é o número do “repita”." },
      { tipo: "ligar", titulo: "Ligue cada repetição ao que ela faz",
        pares: [{ a: "Repita 3 vezes: bater palma", b: "👏 👏 👏" }, { a: "Repita 2 vezes: pular", b: "🦘 🦘" },
          { a: "Repita 4 vezes: ande 1 casa e vire", b: "Desenha um quadrado" }, { a: "Repetição que nunca para", b: "Laço infinito" }],
        explicacao: "A repetição faz o mesmo passo (ou grupo de passos) várias vezes. A que nunca para é o laço infinito." }
    ],
    desafio: [
      { tipo: "robo", titulo: "🟡 Só 3 blocos!", compacto: 3,
        robo: BIT("🔁 Outro caminho: repita 5× ⬇️ · repita 2× ➡️", [["Conto quantas casas iguais seguidas: 5 para baixo.", "repita 5× ⬇️"], ["Depois, 2 para a direita.", "repita 2× ➡️", true]]),
        enunciado: "<p>Leve o robô até a estrela usando <strong>no máximo 3 blocos</strong>.</p>",
        grade: ["R.....", "#####.", "#####.", "#####.", "#####.", "*....."],
        solucao: [["R", 5], ["D", 5], ["L", 5]],
        dicas: ["Conte as casas livres na primeira linha.", "Depois desça pela coluna F e volte pela última linha."],
        explicacao: "repita 5× ➡️ · repita 5× ⬇️ · repita 5× ⬅️: 15 passos em 3 blocos." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Quando a repetição para?",
        perguntas: [
          { p: "“Repita 3 vezes: tocar o sino.” Quantas vezes o sino toca?", opcoes: ["3 vezes", "1 vez", "Para sempre"], certo: 0, why: "A repetição para depois da 3ª vez." },
          { p: "Um programa ficou travado repetindo o mesmo passo sem parar. Isso é:", opcoes: ["Um laço infinito", "Uma sequência", "Um padrão bonito"], certo: 0, why: "Laço infinito é a repetição que nunca termina." },
          { p: "Por que a repetição ajuda a corrigir um algoritmo?", opcoes: ["Porque basta mudar um número, em vez de vários passos", "Porque ela apaga os erros sozinha", "Porque ela deixa o algoritmo mais comprido"], certo: 0, why: "De 4 para 5 passos, muda só o número." }],
        explicacao: "Toda repetição precisa saber quando parar; a que não para é o laço infinito." }
    ],
    vf: [
      { v: true, why: "Junta passos iguais num bloco só." },
      { v: true, why: "As duas formas fazem 3 passos para a direita." },
      { v: false, corrigir: { trecho: "que para depois de 3 vezes", opcoes: ["que para depois de 3 vezes", "que nunca para"], certo: "que nunca para" }, why: "O laço infinito nunca termina." },
      { v: true, why: "Laço é outro nome da repetição." },
      { v: false, corrigir: { trecho: "Não dá para repetir um grupo de passos", opcoes: ["Não dá para repetir um grupo de passos", "Dá para repetir um grupo de passos"], certo: "Dá para repetir um grupo de passos" }, why: "“Repita 4 vezes: ande e vire” repete um grupo." }
    ]
  },

  /* ============ MISSÃO 4 — Seleção ============ */
  m4: {
    pratica: [
      { tipo: "pintura", titulo: "Algoritmo de pintura com se… senão",
        forma: "quadrado", n: 5, pretos: [1, 5],
        regra: "<strong>Repita 5 vezes:</strong> desenhe um quadrado. <strong>Se</strong> for o 1º ou o último, pinte de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["A condição é: “é o 1º ou o último?”. Só esses dois ficam pretos."],
        explicacao: "Para cada quadrado o algoritmo pergunta a condição: se sim (verdadeiro) pinta; senão (falso) deixa branco." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Monte as instruções de seleção",
        enunciado: "<p>Cada linha tem uma <strong>condição</strong> (Se…). Escolha o que acontece no <strong>então</strong> (verdadeiro) e no <strong>senão</strong> (falso).</p>",
        colunas: ["Se…", "então…", "senão…"],
        linhas: [["o sinal estiver verde", { op: ["atravesso", "espero"], r: "atravesso" }, { op: ["atravesso", "espero"], r: "espero" }],
          ["a senha estiver certa", { op: ["o celular abre", "aparece “senha incorreta”"], r: "o celular abre" }, { op: ["o celular abre", "aparece “senha incorreta”"], r: "aparece “senha incorreta”" }],
          ["a bateria estiver abaixo de 20%", { op: ["aparece o aviso de bateria fraca", "nada acontece"], r: "aparece o aviso de bateria fraca" }, { op: ["aparece o aviso de bateria fraca", "nada acontece"], r: "nada acontece" }]],
        explicacao: "Então = o que acontece quando a condição é verdadeira; senão = quando é falsa." },
      { tipo: "classificar", modo: "tabela", titulo: "Hoje, a condição é verdadeira ou falsa?",
        enunciado: "<p>Imagine este dia: <strong>está chovendo</strong>, <strong>são 8 horas da manhã</strong> e <strong>hoje é quarta-feira</strong>. Responda cada condição.</p>",
        colunaItem: "Condição", colunaResp: "V ou F",
        categorias: [{ id: "V", rot: "V" }, { id: "F", rot: "F" }],
        itens: [{ t: "Está chovendo?", c: "V", why: "O dia descrito tem chuva." }, { t: "É de noite?", c: "F", why: "São 8 horas da manhã." },
          { t: "Hoje é quarta-feira?", c: "V", why: "O dia descrito é quarta-feira." }, { t: "Hoje é sábado?", c: "F", why: "Hoje é quarta-feira." }],
        explicacao: "A condição só tem duas respostas: <strong>verdadeiro</strong> (sim) ou <strong>falso</strong> (não)." },
      { tipo: "memoria", titulo: "Jogo da memória da seleção",
        pares: [{ a: "Se", b: "Começa a condição" }, { a: "Então", b: "O que faz quando a condição é verdadeira" }, { a: "Senão", b: "O que faz quando a condição é falsa" }, { a: "Condição", b: "Pergunta de sim ou não" }],
        explicacao: "Se (condição) → então (verdadeiro) → senão (falso)." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "O que o algoritmo faz?",
        enunciado: "<p>Algoritmo do jogo: <strong>se</strong> o personagem pegar a moeda, <strong>então</strong> ganha 10 pontos; <strong>senão</strong>, continua com os mesmos pontos.</p>",
        perguntas: [
          { p: "O personagem pegou a moeda. O que acontece?", opcoes: ["Ganha 10 pontos", "Continua com os mesmos pontos", "O jogo acaba"], certo: 0, why: "A condição é verdadeira: vale o então." },
          { p: "O personagem passou longe da moeda. O que acontece?", opcoes: ["Continua com os mesmos pontos", "Ganha 10 pontos", "Perde 10 pontos"], certo: 0, why: "A condição é falsa: vale o senão." },
          { p: "Qual é a condição desse algoritmo?", opcoes: ["Pegou a moeda?", "Ganhar 10 pontos", "Continuar com os mesmos pontos"], certo: 0, why: "A condição é a pergunta de sim ou não." }],
        explicacao: "Primeiro responda a condição; depois siga o então (sim) ou o senão (não)." }
    ],
    turbo: [
      { tipo: "sinais", titulo: "Marque as boas condições",
        enunciado: "<p>Uma boa condição só pode ser respondida com <strong>sim ou não</strong>. Marque todas as boas condições.</p>",
        opcoes: [{ t: "Está chovendo?", certo: true }, { t: "O sinal está verde?", certo: true }, { t: "A nota é 5,0 ou mais?", certo: true }, { t: "A porta está aberta?", certo: true },
          { t: "Que horas são?", certo: false }, { t: "Qual é o seu nome?", certo: false }, { t: "Quantos alunos vieram hoje?", certo: false }],
        explicacao: "“Que horas são?” e “Qual é o seu nome?” não têm resposta sim ou não, então não servem como condição." }
    ],
    vf: [
      { v: true, why: "É a definição de seleção." },
      { v: false, corrigir: { trecho: "é uma boa condição", opcoes: ["é uma boa condição", "não é uma boa condição"], certo: "não é uma boa condição" }, why: "A resposta não é sim nem não." },
      { v: true, why: "O senão é o caminho do falso." },
      { v: true, why: "Sim (verdadeiro) ou não (falso)." },
      { v: false, corrigir: { trecho: "Não dá para usar", opcoes: ["Não dá para usar", "Dá para usar"], certo: "Dá para usar" }, why: "O algoritmo de pintura usa as duas." }
    ]
  },

  /* ============ MISSÃO 5 — Entradas e saídas ============ */
  m5: {
    pratica: [
      { tipo: "classificar", titulo: "Fazer um bolo: entrada, processamento ou saída?",
        categorias: [{ id: "E", rot: "📥 Entrada (do que eu preciso)" }, { id: "P", rot: "⚙️ Processamento (os passos)" }, { id: "S", rot: "📤 Saída (o resultado)" }],
        itens: [{ t: "Farinha", c: "E" }, { t: "Ovos", c: "E" }, { t: "Leite", c: "E" }, { t: "Misturar tudo", c: "P" }, { t: "Assar no forno", c: "P" }, { t: "O bolo pronto", c: "S" }],
        explicacao: "Entradas = ingredientes; processamento = misturar e assar; saída = o bolo pronto." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Ligue cada problema à saída esperada",
        pares: [{ a: "Calcular a média da prova", b: "A média" }, { a: "Mandar um áudio", b: "O áudio enviado" },
          { a: "Achar o caminho no mapa", b: "O caminho na tela" }, { a: "Somar 2 + 3 na calculadora", b: "O número 5 na tela" }],
        explicacao: "A <strong>saída</strong> é o resultado que o algoritmo entrega no fim." },
      { tipo: "tabela", titulo: "A calculadora: entrada ou saída?",
        colunas: ["O que acontece", "É…"],
        linhas: [["Você digita o número 2", { op: ["entrada", "saída"], r: "entrada" }], ["Você aperta o sinal de +", { op: ["entrada", "saída"], r: "entrada" }],
          ["Você digita o número 3", { op: ["entrada", "saída"], r: "entrada" }], ["Aparece 5 na tela", { op: ["entrada", "saída"], r: "saída" }]],
        explicacao: "Os números e a conta são as entradas; o resultado na tela é a saída." },
      { tipo: "escolha", titulo: "Pense nas entradas e nas saídas",
        perguntas: [
          { p: "Para mandar um áudio pelo celular, qual é a entrada?", opcoes: ["A sua voz, pelo microfone", "O áudio enviado", "A tela do celular"], certo: 0, why: "A voz entra pelo microfone." },
          { p: "Se faltar uma entrada (por exemplo, os ovos do bolo), o que acontece?", opcoes: ["O algoritmo pode não funcionar", "Nada muda", "O bolo fica maior"], certo: 0, why: "Sem as entradas certas, não sai o resultado." },
          { p: "Para que serve saber a saída esperada?", opcoes: ["Para conferir se o algoritmo deu certo", "Para não precisar das entradas", "Para o algoritmo ficar mais lento"], certo: 0, why: "Comparando com o esperado, dá para conferir." }],
        explicacao: "Entrada = o que o algoritmo recebe; saída = o que ele entrega; a saída esperada serve para conferir." }
    ],
    desafio: [
      { tipo: "completar", titulo: "Complete: entradas e saídas",
        texto: "Antes de resolver um problema, pergunto do que eu preciso: são as **entradas**. Depois, o que quero conseguir no fim: é a **saída**. Os passos que transformam uma na outra são o **processamento**. Na calculadora, os números digitados são **entradas** e o resultado na tela é a **saída**.",
        explicacao: "Entradas → processamento → saída." }
    ],
    turbo: [
      { tipo: "caca", titulo: "Caça-palavras das entradas e saídas",
        palavras: ["ENTRADA", "SAIDA", "PROBLEMA", "RESULTADO"],
        pistas: ["Do que o algoritmo precisa para começar", "O que o algoritmo entrega no fim (sem acento)", "A situação que queremos resolver", "O que se consegue no fim"], tam: 10,
        explicacao: "Entrada, saída, problema e resultado: as palavras da Missão 5." }
    ],
    vf: [
      { v: true, why: "É a definição de entrada." },
      { v: false, corrigir: { trecho: "é uma entrada", opcoes: ["é uma entrada", "é uma saída"], certo: "é uma saída" }, why: "O resultado na tela é a saída." },
      { v: true, why: "Sem ovos, não sai o bolo." },
      { v: true, why: "Comparando, dá para conferir." },
      { v: true, why: "É a definição de processamento." }
    ]
  },

  /* ============ MISSÃO 6 — Decompor ============ */
  m6: {
    pratica: [
      { tipo: "classificar", titulo: "Organizar o aniversário da turma: cada tarefa em uma parte",
        categorias: [{ id: "D", rot: "🎈 Decoração" }, { id: "C", rot: "🍰 Comida" }, { id: "L", rot: "🧹 Limpeza" }],
        itens: [{ t: "Encher os balões", c: "D" }, { t: "Pendurar a faixa", c: "D" }, { t: "Comprar o bolo", c: "C" }, { t: "Fazer o suco", c: "C" },
          { t: "Recolher o lixo", c: "L" }, { t: "Arrumar as cadeiras no fim", c: "L" }],
        explicacao: "Dividindo em partes (subproblemas), cada grupo cuida de uma, e o problema grande fica fácil." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Quais são partes do problema “fazer um trabalho em grupo”?",
        enunciado: "<p>Marque todas as <strong>partes menores</strong> que, juntas, resolvem o problema.</p>",
        opcoes: [{ t: "Pesquisar o assunto", certo: true }, { t: "Fazer o cartaz", certo: true }, { t: "Ensaiar a apresentação", certo: true }, { t: "Apresentar para a turma", certo: true },
          { t: "Jogar videogame", certo: false }, { t: "Dormir até tarde", certo: false }],
        explicacao: "Cada parte é um subproblema; juntas, resolvem o trabalho inteiro." },
      { tipo: "memoria", titulo: "Jogo da memória da decomposição",
        pares: [{ a: "Decompor", b: "Dividir um problema grande em partes menores" }, { a: "Subproblema", b: "Cada parte menor do problema" },
          { a: "Equipe", b: "Grupo que divide as partes do trabalho" }, { a: "Juntar e conferir", b: "O último passo, quando as partes ficam prontas" }],
        explicacao: "Decompor = dividir; subproblema = cada parte; no fim, juntar tudo e conferir." },
      { tipo: "ordenar", titulo: "Coloque em ordem os passos para decompor",
        itens: ["Dizer qual é o problema grande", "Perguntar: de que partes ele é feito?", "Resolver uma parte de cada vez", "Juntar tudo e conferir"],
        explicacao: "1. o problema; 2. as partes; 3. uma parte de cada vez; 4. juntar e conferir." }
    ],
    desafio: [
      { tipo: "ligar", titulo: "Ligue cada problema grande a uma das suas partes",
        pares: [{ a: "Arrumar o quarto", b: "Arrumar a cama" }, { a: "Fazer um jogo de celular", b: "Desenhar os personagens" },
          { a: "Estudar para a prova", b: "Revisar um assunto por dia" }, { a: "Jogar uma partida de futebol", b: "Defender o gol" }],
        explicacao: "Todo problema grande pode ser dividido em partes menores." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Por que decompor?",
        perguntas: [
          { p: "O que acontece com um problema grande quando ele é decomposto?", opcoes: ["Vira partes menores e mais fáceis", "Fica mais difícil", "Desaparece"], certo: 0, why: "Cada parte é mais fácil de resolver." },
          { p: "Como os programadores fazem um jogo de celular?", opcoes: ["Dividem em partes, e cada equipe cuida de uma", "Uma pessoa faz tudo de uma vez", "Copiam outro jogo"], certo: 0, why: "Personagens, cenário, pontos e sons são partes." },
          { p: "Quando o problema grande está resolvido?", opcoes: ["Quando todas as partes ficam prontas e são juntadas", "Quando a primeira parte fica pronta", "Antes de começar"], certo: 0, why: "Só com todas as partes juntas." }],
        explicacao: "Decompor deixa cada parte fácil; no fim, junta-se tudo." }
    ],
    vf: [
      { v: true, why: "É a definição de decompor." },
      { v: true, why: "É o nome de cada parte." },
      { v: false, corrigir: { trecho: "resolver todas as partes ao mesmo tempo, sozinho", opcoes: ["resolver todas as partes ao mesmo tempo, sozinho", "resolver uma parte de cada vez"], certo: "resolver uma parte de cada vez" }, why: "Uma parte de cada vez, ou dividindo com a equipe." },
      { v: true, why: "Cada equipe cuida de uma parte." },
      { v: false, corrigir: { trecho: "mais difícil", opcoes: ["mais difícil", "mais fácil"], certo: "mais fácil" }, why: "Partes menores são mais fáceis." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Caça ao erro ============ */
  m7: {
    pratica: [
      { tipo: "robo", titulo: "Conserte o programa do robô 🐞",
        robo: BIT("🐞 Como eu acho um bug", [["1. Aperto ▶ Executar e vejo onde o robô para ou bate.", "1. testar"], ["2. Comparo com o caminho certo e acho o <b>primeiro</b> passo errado.", "2. achar o primeiro erro", true], ["3. Mudo só esse passo (✕ apaga uma seta) e testo de novo.", "3. corrigir e testar"]],
          "Agora é a sua vez: teste, ache o passo errado e conserte. 💪"),
        enunciado: "<p>Este programa já vem pronto, mas tem um <strong>bug</strong>! Aperte <strong>▶ Executar</strong>, veja onde o robô erra e conserte (o ✕ apaga uma seta).</p>",
        grade: ["R..#", "##.#", "....", "*##."],
        inicial: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["L", 1], ["D", 1]],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["D", 1]],
        dicas: ["Execute e conte: o robô anda uma casa a mais para a esquerda.", "Apague um dos ⬅️."],
        explicacao: "O bug era um ⬅️ a mais. Certo: ➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬇️." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Ache o passo errado",
        perguntas: [
          { p: "Algoritmo: 1. Pegar o copo. 2. Beber o suco. 3. Colocar o suco no copo. Qual passo está fora de ordem?", opcoes: ["O passo 2 (beber antes de colocar o suco)", "O passo 1", "Nenhum"], certo: 0, why: "Não dá para beber antes de colocar o suco." },
          { p: "Algoritmo: 1. Abrir a porta. 2. Entrar. Faltou fechar a porta. Que tipo de erro é esse?", opcoes: ["Um passo que falta", "Um passo a mais", "Um passo fora de ordem"], certo: 0, why: "O passo “fechar a porta” não está lá." },
          { p: "Qual é o jeito certo de caçar o erro?", opcoes: ["Testar, comparar, achar o primeiro passo errado e corrigir só ele", "Apagar tudo e começar de novo", "Mudar todos os passos de uma vez"], certo: 0, why: "É o passo a passo da depuração." }],
        explicacao: "Erros comuns: passo fora de ordem, que falta, a mais, ou número errado na repetição." },
      { tipo: "ordenar", titulo: "Depure: coloque o algoritmo na ordem certa",
        enunciado: "<p>Este algoritmo de lavar as mãos tem um bug: os passos estão fora de ordem. Coloque-os na ordem certa.</p>",
        itens: ["Molhar as mãos", "Passar sabonete", "Esfregar as mãos por 20 segundos", "Enxaguar com água", "Secar com a toalha"],
        explicacao: "Corrigido: molhar, ensaboar, esfregar, enxaguar e secar." }
    ],
    desafio: [
      { tipo: "classificar", titulo: "Algoritmo certo ou com bug?",
        categorias: [{ id: "C", rot: "✅ Certo" }, { id: "B", rot: "🐞 Tem bug" }],
        itens: [{ t: "Pegar o copo, colocar água, beber", c: "C" }, { t: "Beber, pegar o copo, colocar água", c: "B" },
          { t: "Calçar a meia, calçar o tênis", c: "C" }, { t: "Calçar o tênis, calçar a meia", c: "B" },
          { t: "Repita 3 vezes: bater palma (para fazer 3 palmas)", c: "C" }, { t: "Repita 5 vezes: bater palma (para fazer 3 palmas)", c: "B" }],
        explicacao: "O bug pode ser a ordem trocada ou o número errado na repetição." }
    ],
    turbo: [
      { tipo: "robo", titulo: "🔴 O robô que repete demais", compacto: 1,
        robo: BIT("🔁 Um repita com número errado", [["Execute: se o robô passa da estrela, o número do repita está grande.", "número grande → passa"], ["Conto as casas até a estrela e ajusto com o −.", "ajustar com −", true]]),
        enunciado: "<p>O programa <strong>repita 5× ➡️</strong> faz o robô sair do tabuleiro! Conserte usando o <strong>−</strong>, com 1 bloco só.</p>",
        grade: ["R...*", "....."],
        inicial: [["R", 5]],
        solucao: [["R", 4]],
        dicas: ["Conte as casas de A1 até a estrela."],
        explicacao: "São 4 casas até a estrela: repita 4× ➡️. O bug era o número da repetição." }
    ],
    vf: [
      { v: true, why: "É a definição de bug." },
      { v: true, why: "Depurar = achar e corrigir." },
      { v: false, corrigir: { trecho: "mudar todos os passos de uma vez", opcoes: ["mudar todos os passos de uma vez", "mudar só o passo errado e testar de novo"], certo: "mudar só o passo errado e testar de novo" }, why: "Muda-se um passo de cada vez." },
      { v: true, why: "É um dos erros mais comuns." },
      { v: false, corrigir: { trecho: "nunca erram", opcoes: ["nunca erram", "também erram"], certo: "também erram" }, why: "Até os melhores erram; por isso existe a depuração." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Desenho com a tartaruga ============ */
  m8: {
    pratica: [
      { tipo: "robo", titulo: "🐢 Desenhe um quadrado com a tartaruga", icone: "🐢",
        robo: BIT("🐢 Outro desenho: uma linha em L", [["A tartaruga deixa rastro: o caminho vira desenho.", "rastro = desenho"], ["Eu passo por todos os pontos ⚪, que viram 🟩.", "⚪ → 🟩", true], ["No fim, ela para na estrela.", "fim na ⭐"]],
          "Agora é a sua vez: passe por todos os pontos ⚪ e termine na estrela. 💪"),
        enunciado: "<p>Faça a tartaruga passar por <strong>todos os pontos ⚪</strong> (eles viram 🟩) e terminar na <strong>estrela</strong>. O caminho forma um quadrado!</p>",
        grade: ["Roo", "*.o", "ooo"],
        solucao: [["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["U", 1]],
        dicas: ["Vá para a direita até o canto, desça até embaixo, volte para a esquerda e suba uma casa."],
        explicacao: "➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬆️: os 4 lados do quadrado." }
    ],
    basico: [
      { tipo: "robo", titulo: "🐢 Agora um retângulo", icone: "🐢",
        robo: BIT("🐢 Lados compridos e curtos", [["O retângulo tem 2 lados compridos e 2 curtos.", "2 compridos + 2 curtos"], ["Conto quantas casas tem cada lado antes de clicar.", "contar os lados", true]]),
        enunciado: "<p>Passe por todos os pontos ⚪ e termine na estrela. Este desenho é um <strong>retângulo</strong>: 2 lados compridos e 2 curtos.</p>",
        grade: ["Rooo", "*..o", "oooo"],
        solucao: [["R", 1], ["R", 1], ["R", 1], ["D", 1], ["D", 1], ["L", 1], ["L", 1], ["L", 1], ["U", 1]],
        dicas: ["O lado de cima tem 3 casas para a direita.", "Depois desça 2, volte 3 e suba 1."],
        explicacao: "➡️ ➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬅️ ⬆️: lados compridos de 3 casas e curtos de 2." },
      { tipo: "ligar", titulo: "Ligue cada desenho ao seu padrão",
        pares: [{ a: "Quadrado", b: "4 lados iguais" }, { a: "Retângulo", b: "2 lados compridos e 2 curtos" },
          { a: "Escada", b: "➡️ ⬇️ ➡️ ⬇️ ➡️ ⬇️" }, { a: "Linha reta", b: "Repita várias vezes a mesma seta" }],
        explicacao: "Achar o padrão do desenho ajuda a montar o algoritmo." }
    ],
    desafio: [
      { tipo: "robo", titulo: "🟡 O quadrado com só 4 blocos", icone: "🐢", compacto: 4,
        robo: BIT("🔁 Juntando os lados", [["Cada lado do quadrado é uma seta repetida.", "lado = repita"], ["repita 2× ➡️ · repita 2× ⬇️ · …", "4 lados, poucos blocos", true]]),
        enunciado: "<p>Desenhe o quadrado de novo, agora usando <strong>“repita”</strong>: no máximo <strong>4 blocos</strong>.</p>",
        grade: ["Roo", "*.o", "ooo"],
        solucao: [["R", 2], ["D", 2], ["L", 2], ["U", 1]],
        dicas: ["Use o + para repetir cada lado: 2 para a direita, 2 para baixo, 2 para a esquerda e 1 para cima."],
        explicacao: "repita 2× ➡️ · repita 2× ⬇️ · repita 2× ⬅️ · ⬆️ = o quadrado em 4 blocos." }
    ],
    turbo: [
      { tipo: "robo", titulo: "🔴 Desenhe uma escada", icone: "🐢",
        robo: BIT("🐢 O padrão da escada", [["Um degrau é: ➡️ uma casa e ⬇️ uma casa.", "degrau = ➡️ ⬇️"], ["A escada repete o degrau várias vezes.", "repetir o degrau", true]]),
        enunciado: "<p>Passe por todos os pontos ⚪ e termine na estrela: o desenho é uma <strong>escada</strong>.</p>",
        grade: ["Ro..", ".oo.", "..oo", "...*"],
        solucao: [["R", 1], ["D", 1], ["R", 1], ["D", 1], ["R", 1], ["D", 1]],
        dicas: ["Cada degrau: uma casa para a direita e uma para baixo."],
        explicacao: "➡️ ⬇️ ➡️ ⬇️ ➡️ ⬇️: o degrau (➡️ ⬇️) repetido 3 vezes." }
    ],
    vf: [
      { v: true, why: "O rastro da tartaruga vira desenho." },
      { v: true, why: "É a definição de quadrado." },
      { v: false, corrigir: { trecho: "não ajuda a desenhar figuras", opcoes: ["não ajuda a desenhar figuras", "ajuda a desenhar figuras"], certo: "ajuda a desenhar figuras" }, why: "O quadrado é “ande e vire” repetido 4 vezes." },
      { v: true, why: "É a definição de retângulo." },
      { v: true, why: "Logo foi criada para crianças aprenderem a programar." }
    ]
  },

  /* ============ 🔁 REVISÃO (o portal mostra só as missões que a turma estudou) ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Algoritmos",
        pares: [{ a: "Algoritmo", b: "Passos em ordem para resolver um problema" }, { a: "Instrução", b: "Cada passo do algoritmo" }, { a: "Programa", b: "Algoritmo para o computador" }],
        explicacao: "Algoritmo = passos em ordem; instrução = cada passo; programa = algoritmo para o computador." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ordenar", de: "m2", titulo: "M2 · Sequência: escovar os dentes",
        itens: ["Pegar a escova", "Colocar o creme dental", "Escovar os dentes", "Enxaguar a boca"],
        explicacao: "Na sequência, a ordem importa: creme antes de escovar." },
      { tipo: "relembre", de: "m3" },
      { tipo: "tabela", de: "m3", titulo: "M3 · Repetição",
        colunas: ["Sequência", "Com repetição"],
        linhas: [["⬆️ ⬆️ ⬆️ ⬆️", { op: ["repita 3× ⬆️", "repita 4× ⬆️"], r: "repita 4× ⬆️" }], ["🎵 🎵", { op: ["repita 2× 🎵", "repita 3× 🎵"], r: "repita 2× 🎵" }]],
        explicacao: "Conte quantas vezes o passo aparece." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", modo: "tabela", de: "m4", titulo: "M4 · Então ou senão?",
        enunciado: "<p>Regra: <strong>se</strong> a nota for 5,0 ou mais, <strong>então</strong> aprovado; <strong>senão</strong>, recuperação.</p>",
        colunaItem: "Nota", colunaResp: "Caminho",
        categorias: [{ id: "E", rot: "então (aprovado)" }, { id: "S", rot: "senão (recuperação)" }],
        itens: [{ t: "Nota 7,0", c: "E", why: "7,0 é 5,0 ou mais." }, { t: "Nota 4,5", c: "S", why: "4,5 é menos que 5,0." }, { t: "Nota 5,0", c: "E", why: "5,0 entra no “5,0 ou mais”." }],
        explicacao: "Condição verdadeira → então; falsa → senão." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Entrada ou saída?",
        categorias: [{ id: "E", rot: "📥 Entrada" }, { id: "S", rot: "📤 Saída" }],
        itens: [{ t: "Os números digitados na calculadora", c: "E" }, { t: "O resultado na tela", c: "S" }, { t: "Aonde eu quero ir, no mapa", c: "E" }, { t: "O caminho que aparece no mapa", c: "S" }],
        explicacao: "Entrada = o que o algoritmo recebe; saída = o que ele entrega." },
      { tipo: "relembre", de: "m6" },
      { tipo: "sinais", de: "m6", titulo: "M6 · Partes de “arrumar o quarto”",
        opcoes: [{ t: "Arrumar a cama", certo: true }, { t: "Guardar as roupas", certo: true }, { t: "Recolher os brinquedos", certo: true }, { t: "Assistir à TV", certo: false }],
        explicacao: "Decompor = dividir em partes menores." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Caça ao erro",
        perguntas: [{ p: "Bug é:", opcoes: ["Um erro no algoritmo", "Um tipo de robô", "Uma repetição"], certo: 0, why: "Bug = erro." }, { p: "Depurar é:", opcoes: ["Achar e corrigir o erro", "Apagar o programa", "Repetir um passo"], certo: 0, why: "Debug = tirar o inseto." }],
        explicacao: "Bug = erro; depurar = achar e corrigir." },
      { tipo: "relembre", de: "m8" },
      { tipo: "memoria", de: "m8", titulo: "M8 · Desenho com a tartaruga",
        pares: [{ a: "Tartaruga", b: "Anda e deixa o rastro do desenho" }, { a: "Quadrado", b: "4 lados iguais" }, { a: "Logo", b: "Linguagem criada para crianças" }, { a: "Padrão", b: "O que se repete no desenho" }],
        explicacao: "Tartaruga + rastro = desenho; o padrão vira repetição." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Revisão misturada",
        perguntas: [
          { p: "“Repita 4 vezes: ande 1 casa e vire à direita” desenha:", opcoes: ["Um quadrado", "Uma linha reta", "Um triângulo"], certo: 0, why: "4 lados iguais." },
          { p: "Qual destas é uma condição?", opcoes: ["A porta está aberta?", "Abrir a porta", "Porta"], certo: 0, why: "Só ela tem resposta sim ou não." },
          { p: "Trocar a ordem dos passos de um algoritmo:", opcoes: ["Pode mudar o resultado", "Nunca muda nada", "Deixa o algoritmo mais rápido"], certo: 0, why: "Na sequência, a ordem importa." }],
        explicacao: "Repetição desenha; condição é sim ou não; a ordem importa." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        palavras: ["SEQUENCIA", "REPITA", "CONDICAO", "ENTRADA", "BUG"],
        pistas: ["Uma instrução depois da outra (sem acento)", "O comando que diz quantas vezes", "Pergunta de sim ou não (sem acento)", "Do que o algoritmo precisa para começar", "Erro no programa"], tam: 10,
        explicacao: "As palavras principais do bimestre de Algoritmos!" }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-2bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Algoritmos do dia a dia", perguntas: [
      { p: "Algoritmo é:", opcoes: ["Uma sequência de passos, em ordem, para resolver um problema", "Um tipo de computador", "Um jogo de celular"], certo: 0 },
      { p: "Qual instrução é precisa?", opcoes: ["Coloque 2 colheres de açúcar", "Coloque um pouco de açúcar", "Faz aí"], certo: 0 }],
      explicacao: "Algoritmo = passos em ordem; instrução precisa diz exatamente o que fazer." },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Sequência", perguntas: [
      { p: "Na sequência, as instruções são feitas:", opcoes: ["Uma depois da outra, na ordem escrita", "Todas ao mesmo tempo", "Na ordem que o computador quiser"], certo: 0 },
      { p: "Calçar o tênis antes da meia mostra que:", opcoes: ["A ordem dos passos importa", "A ordem não importa", "O algoritmo está certo"], certo: 0 }],
      explicacao: "Sequência = uma depois da outra; a ordem importa." },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Repetição", perguntas: [
      { p: "➡️ ➡️ ➡️ ➡️ é o mesmo que:", opcoes: ["repita 4× ➡️", "repita 3× ➡️", "repita 5× ➡️"], certo: 0 },
      { p: "Uma repetição que nunca para é:", opcoes: ["Um laço infinito", "Uma sequência", "Uma condição"], certo: 0 }],
      explicacao: "Repita = quantas vezes; laço infinito nunca para." },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Seleção", perguntas: [
      { p: "“Se estiver chovendo, então levo o guarda-chuva.” A condição é:", opcoes: ["Está chovendo?", "Levar o guarda-chuva", "O guarda-chuva"], certo: 0 },
      { p: "O senão acontece quando a condição é:", opcoes: ["Falsa", "Verdadeira", "Repetida"], certo: 0 }],
      explicacao: "Condição = pergunta de sim ou não; senão = falsa." },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Entradas e saídas", perguntas: [
      { p: "Na calculadora, os números que você digita são:", opcoes: ["Entradas", "Saídas", "Bugs"], certo: 0 },
      { p: "O bolo pronto, na receita, é:", opcoes: ["A saída", "Uma entrada", "Um subproblema"], certo: 0 }],
      explicacao: "Entrada = o que o algoritmo recebe; saída = o resultado." },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Decompor", perguntas: [
      { p: "Decompor é:", opcoes: ["Dividir um problema grande em partes menores", "Apagar o problema", "Repetir um passo"], certo: 0 },
      { p: "Cada parte menor de um problema se chama:", opcoes: ["Subproblema", "Laço", "Condição"], certo: 0 }],
      explicacao: "Decompor = dividir; subproblema = cada parte." },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Caça ao erro", perguntas: [
      { p: "Bug é:", opcoes: ["Um erro no algoritmo ou no programa", "Um computador novo", "Um tipo de repetição"], certo: 0 },
      { p: "Para depurar, eu:", opcoes: ["Testo, acho o primeiro passo errado e corrijo só ele", "Mudo todos os passos", "Desligo o computador"], certo: 0 }],
      explicacao: "Bug = erro; depurar = achar e corrigir." },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Desenho com a tartaruga", perguntas: [
      { p: "Na linguagem Logo, a tartaruga:", opcoes: ["Anda e deixa um rastro que vira desenho", "Apaga o desenho", "Toca música"], certo: 0 },
      { p: "Um quadrado tem:", opcoes: ["4 lados iguais", "3 lados", "2 lados compridos e 2 curtos"], certo: 0 }],
      explicacao: "Tartaruga + rastro = desenho; quadrado = 4 lados iguais." },
    pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 2: 2º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas)
   e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo. Só cobra o que o Para começar explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-2bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const D1 = n => Array.from({ length: n }, () => null);
  const passos = s => s.split(" ").map(x => [x[0], 1]);   // "R R D" → [["R",1],["R",1],["D",1]]

  /* ---------- M1 · algoritmos do dia a dia ---------- */
  A.m1.gancho = { html: "<p>🧁 A vó da Lia mandou a receita do bolo por áudio: “bota a farinha, os ovos, mistura e assa”. A Lia fez tudo… e o bolo saiu <b>solado</b>, duro e baixinho.</p><p>🤔 O que faltou na receita da vó? Uma receita pode ser “vaga” demais?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 2º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Uma <b>receita de bolo</b>, com os passos numerados, é um exemplo de…", ["Algoritmo", "Hardware", "Pasta"], "A receita tem passos em ordem para chegar ao bolo: é um <b>algoritmo</b>."],
    ["O computador <b>adivinha</b> o que você quer?", ["Não: ele faz exatamente o que mandamos", "Sim, sempre", "Só se estiver ligado na internet"], "O computador não adivinha nada: faz <b>exatamente</b> o que mandamos, do jeito que mandamos."],
    ["Cada passo de um algoritmo se chama…", ["Instrução", "Arquivo", "Janela"], "Cada passo é uma <b>instrução</b>."])];
  A.m1.aplicar = [
    { tipo: "rota", titulo: "🛠️ Na vida real: ensine o primo a chegar à escola",
      enunciado: "<p>O seu primo chegou de outra cidade e vai sozinho para a escola amanhã. Monte o algoritmo do caminho: clique nos passos <b>na ordem</b>.</p>",
      etapas: [
        { ic: "🏠", t: "Sair de casa e fechar o portão" },
        { ic: "➡️", t: "Virar à direita na calçada", dica: "Primeiro ele sai de casa; depois escolhe para que lado ir." },
        { ic: "🚶", t: "Andar até a padaria da esquina" },
        { ic: "⬅️", t: "Virar à esquerda na padaria" },
        { ic: "🏫", t: "Andar até o portão da escola e entrar", dica: "Chegar à escola é o resultado: fica no fim." }],
      okMsg: "Algoritmo claro e preciso: qualquer pessoa que seguir chega à escola! 🏫",
      explicacao: "Começo (sair de casa), meio (virar e andar) e fim (chegar à escola). Cada passo diz exatamente o que fazer: é um algoritmo bom." },
    VIDA(
      ["O manual de montagem de um brinquedo, com os passos numerados, é…", ["Um algoritmo", "Um desenho", "Um jogo"], "Passos em ordem para montar o brinquedo: é um <b>algoritmo</b>."],
      ["“Faz o suco aí.” Por que essa instrução é ruim?", ["É vaga: não diz exatamente o que fazer", "É comprida demais", "Fala de suco"], "Uma boa instrução é <b>clara e precisa</b>: diz exatamente o que fazer."],
      ["O GPS diz “siga em frente” e “vire à direita”. Cada frase dessas é uma…", ["Instrução", "Foto", "Música"], "Cada passo do algoritmo é uma <b>instrução</b>."])
  ];
  mais("m1", "desafio",
    { tipo: "rota", titulo: "🦷 O algoritmo de escovar os dentes",
      enunciado: "<p>Monte o algoritmo de escovar os dentes. Clique nos passos <b>na ordem</b>.</p>",
      etapas: [{ ic: "🪥", t: "Pegar a escova" }, { ic: "🧴", t: "Colocar o creme dental na escova" }, { ic: "😁", t: "Escovar todos os dentes" }, { ic: "💧", t: "Enxaguar a boca" }, { ic: "🧼", t: "Lavar e guardar a escova" }],
      okMsg: "Dentes limpinhos! 😁",
      explicacao: "Começo, meio e fim: cada passo depende do anterior. Sem creme na escova, escovar não adianta tanto." });
  mais("m1", "turbo",
    { tipo: "sinais", titulo: "✅ Claras e precisas ou vagas?",
      enunciado: "<p>Para o computador, toda instrução tem de ser <b>clara e precisa</b>. Marque só as instruções claras e precisas.</p>",
      opcoes: [{ t: "Colocar 2 colheres de suco em pó no copo", certo: true }, { t: "Andar 3 passos para a frente", certo: true }, { t: "Virar à direita na padaria", certo: true },
        { t: "Faz o suco aí", certo: false, why: "Vaga: não diz como." }, { t: "Vai até a cozinha", certo: false, why: "Vaga: não diz o caminho." }, { t: "Coloca um pouco de água", certo: false, why: "“Um pouco” não é preciso." }],
      explicacao: "Instrução boa diz exatamente o que fazer (quanto, para onde, o quê). O computador não adivinha nada." });

  /* ---------- M2 · sequência ---------- */
  A.m2.gancho = { html: "<p>🔐 O Davi sabe os 4 números da senha do celular da mãe: <b>1, 9, 7, 3</b>. Ele digitou <b>3, 7, 9, 1</b>… e o celular não abriu!</p><p>🤔 Se os números estão certos, por que não abriu? A <b>ordem</b> faz diferença?</p>" };
  A.m2.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: o robô do mercado leva as compras ao caixa", icone: "🛒",
      enunciado: "<p>O robô do mercado leva o carrinho 🛒 até o caixa ⭐. Clique nas setas, <b>uma por casa</b>, sem bater nas prateleiras 🧱, e depois em <b>▶ Executar</b>.</p>",
      grade: ["R...#", "###.#", "*...#"],
      solucao: passos("R R R D D L L L"),
      dicas: ["Siga o corredor de cima até onde dá para descer.", "Depois de descer, volte para a esquerda até o caixa."],
      explicacao: "➡️ ➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬅️: cada seta na ordem certa. Uma seta fora do lugar e o carrinho bate na prateleira." },
    VIDA(
      ["No micro-ondas, qual é a ordem certa?", ["Pôr a comida, fechar a porta, escolher o tempo, apertar Iniciar", "Apertar Iniciar, pôr a comida, fechar a porta", "Escolher o tempo, abrir a porta, apertar Iniciar"], "Na sequência, cada passo vem na ordem certa: a comida entra antes de apertar Iniciar."],
      ["Na senha do celular, os números certos na ordem <b>errada</b>…", ["Não abrem o aparelho", "Abrem do mesmo jeito", "Mudam a senha"], "A ordem importa: números certos fora de ordem <b>não abrem</b> o celular."],
      ["O que faz o comando ⬅️ no labirinto?", ["Anda uma casa para a esquerda", "Anda até a parede", "Volta ao começo"], "Cada seta anda <b>uma casa</b>; ⬅️ vai para a esquerda."])
  ];
  mais("m2", "desafio",
    { tipo: "robo", titulo: "🧀 O ratinho e o queijo",
      icone: "🐭",
      enunciado: "<p>Leve o ratinho 🐭 até o queijo ⭐ pelo labirinto. Uma seta por casa!</p>",
      grade: ["R.#..", ".##.#", "...#.", "#.#..", "#...*"],
      solucao: passos("D D R D D R R R"),
      dicas: ["Comece descendo pela coluna A.", "Na linha 3, passe para a coluna B e desça até o fim."],
      explicacao: "⬇️ ⬇️ ➡️ ⬇️ ⬇️ ➡️ ➡️ ➡️. Cada seta é uma instrução, feita na ordem." });
  mais("m2", "turbo",
    { tipo: "rota", titulo: "📱 A sequência de mandar uma mensagem",
      enunciado: "<p>Coloque na ordem certa os passos para mandar uma mensagem no celular.</p>",
      etapas: [{ ic: "🔓", t: "Desbloquear o celular" }, { ic: "💬", t: "Abrir o aplicativo de mensagens" }, { ic: "👤", t: "Escolher a pessoa" }, { ic: "⌨️", t: "Digitar a mensagem" }, { ic: "📤", t: "Enviar", dica: "Enviar é sempre o último: só depois de digitar." }],
      okMsg: "Mensagem enviada! 📤",
      explicacao: "Se enviar vier antes de digitar, vai uma mensagem vazia. Na sequência, a ordem importa." });

  /* ---------- M3 · repetição ---------- */
  A.m3.gancho = { html: "<p>⏰ O despertador da Bia toca às 6h. Ela aperta “soneca” e, 5 minutos depois, ele toca <b>de novo</b>… e de novo…</p><p>🤔 Como o celular sabe tocar de novo? E se um programa repetisse uma coisa <b>para sempre</b>, o que aconteceria?</p>" };
  A.m3.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: a volta na quadra", icone: "🏃", compacto: 3,
      enunciado: "<p>Na Educação Física, o professor mandou dar a volta na quadra até a bandeira ⭐. Em vez de clicar muitas setas iguais, use o <b>repita</b> (botões + e −): chegue com <b>no máximo 3 blocos</b>.</p>",
      grade: ["R.....", "#####.", "*....."],
      solucao: [["R", 5], ["D", 2], ["L", 5]],
      dicas: ["São 5 casas para a direita: um bloco “repita 5× ➡️”.", "Depois desça 2 e volte 5 para a esquerda."],
      explicacao: "repita 5× ➡️ · repita 2× ⬇️ · repita 5× ⬅️: 12 passos com só 3 blocos. É a repetição deixando o algoritmo curto." },
    VIDA(
      ["O semáforo faz sempre verde, amarelo, vermelho, verde… Isso é uma…", ["Repetição", "Música", "Pasta"], "O semáforo <b>repete</b> sempre as mesmas cores."],
      ["Um programa que repete uma coisa e <b>nunca para</b>…", ["Trava: é o laço infinito", "Fica mais rápido", "Desliga o computador"], "Uma repetição que nunca para é o <b>laço infinito</b>, um erro que trava o programa."],
      ["O algoritmo diz “repita 4 vezes: pular”, mas agora são 5 pulos. O que você muda?", ["Só o número: de 4 para 5", "O algoritmo inteiro", "Nada"], "Com repetição, muda <b>só um número</b>: é mais fácil de corrigir."])
  ];
  mais("m3", "desafio",
    { tipo: "robo", titulo: "🚀 O caminho do foguete com repita", icone: "🚀", compacto: 4,
      enunciado: "<p>Leve o foguete 🚀 até a estrela ⭐ usando o <b>repita</b>: no máximo <b>4 blocos</b>.</p>",
      grade: ["R...##", "###.##", "###...", "#####*"],
      solucao: [["R", 3], ["D", 2], ["R", 2], ["D", 1]],
      dicas: ["Conte quantas casas iguais seguidas: cada grupo vira um bloco com repita."],
      explicacao: "repita 3× ➡️ · repita 2× ⬇️ · repita 2× ➡️ · ⬇️: 8 passos em 4 blocos." });
  mais("m3", "turbo",
    { tipo: "pintura", titulo: "🎨 O padrão da faixa da festa",
      forma: "circulo", n: 9, pretos: [3, 6, 9],
      regra: "<strong>Repita 3 vezes:</strong> desenhe 2 círculos brancos e depois 1 círculo preto.",
      dicas: ["O grupo é: branco, branco, preto. Repita o grupo 3 vezes."],
      explicacao: "Repetir um grupo de passos cria um padrão: ⚪⚪⚫ ⚪⚪⚫ ⚪⚪⚫. Os pretos são o 3º, o 6º e o 9º." });

  /* ---------- M4 · seleção ---------- */
  A.m4.gancho = { html: "<p>🔋 O celular da Ana mostrou o aviso <b>“bateria fraca”</b> quando estava com 19%. Com 50%, não mostrou nada.</p><p>🤔 Como o celular <b>decide</b> quando mostrar o aviso? Ele está fazendo uma pergunta?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: a porta automática do mercado", "🚪 Porta automática",
      [["A", "🚪 Abre (então)"], ["F", "🚪 Fica fechada (senão)"]],
      "O algoritmo da porta é: <b>se</b> alguém chegar perto, <b>então</b> abre; <b>senão</b>, fica fechada. O que a porta faz em cada situação?",
      [["Uma moça com o carrinho chega perto da porta", "A", "Alguém chegou perto: a condição é verdadeira, vale o então."],
        ["Ninguém está perto da porta", "F", "Ninguém perto: a condição é falsa, vale o senão."],
        ["Um menino corre em direção à porta", "A", "Chegou perto: abre."],
        ["Todo mundo está lá dentro, longe da porta", "F", "Ninguém perto: fica fechada."]],
      "Você pensou como a porta automática! 🚪", "A porta faz a mesma pergunta o tempo todo (alguém está perto?) e escolhe o caminho pela resposta: é a seleção."),
    VIDA(
      ["No celular: <b>se</b> a bateria estiver abaixo de 20%, <b>então</b> aparece o aviso. Com 19%, aparece?", ["Sim: a condição é verdadeira", "Não", "Só se estiver carregando"], "19% é abaixo de 20%: a condição é <b>verdadeira</b>, vale o então."],
      ["Qual destas é uma <b>boa condição</b>?", ["Está chovendo?", "Que horas são?", "Qual é o seu nome?"], "Uma boa condição só tem duas respostas: <b>sim ou não</b>."],
      ["No jogo: <b>se</b> pegar a moeda, ganha pontos; <b>senão</b>, continua igual. Você passou longe da moeda. O que acontece?", ["Continua com os mesmos pontos", "Ganha pontos", "O jogo acaba"], "A condição é falsa: vale o <b>senão</b>."])
  ];
  mais("m4", "desafio",
    { tipo: "pintura", titulo: "🎨 Repetição com seleção: o tapete da sala",
      forma: "quadrado", n: 8, pretos: [1, 4, 7],
      regra: "<strong>Repita 8 vezes:</strong> desenhe um quadrado; <strong>se</strong> for o 1º, o 4º ou o 7º, pinte de preto; <strong>senão</strong>, deixe branco.",
      dicas: ["Conte os quadrados da esquerda para a direita: 1º, 2º, 3º…"],
      explicacao: "A repetição desenha os 8 quadrados e a seleção decide a cor de cada um: preto no 1º, 4º e 7º." });
  mais("m4", "turbo",
    msg("🚦 Atravesso ou espero?", "🚦 Semáforo do pedestre",
      [["T", "🚶 Atravesso (então)"], ["E", "✋ Espero (senão)"]],
      "Algoritmo do pedestre: <b>se</b> o sinal estiver verde para o pedestre, <b>então</b> atravesso; <b>senão</b>, espero.",
      [["O bonequinho do sinal está verde", "T", "Verdadeiro: atravessa."], ["O bonequinho do sinal está vermelho", "E", "Falso: espera."],
        ["O sinal acabou de ficar vermelho", "E", "Vermelho: espera."], ["O sinal acabou de ficar verde", "T", "Verde: atravessa."]],
      "Travessia segura! 🚦", "A condição (o sinal está verde?) só tem sim ou não. Sim → então; não → senão."));

  /* ---------- M5 · entradas e saídas ---------- */
  A.m5.gancho = { html: "<p>🧮 Na cantina, a tia digita na calculadora o preço do suco e o do pão de queijo e mostra o total para o aluno.</p><p>🤔 O que <b>entrou</b> na calculadora, o que ela <b>fez</b> com isso e o que <b>saiu</b> no fim?</p>" };
  A.m5.aplicar = [
    msg("🛠️ Na vida real: a máquina de refrigerante", "🥤 Máquina de refrigerante",
      [["E", "📥 Entrada"], ["P", "⚙️ Processamento"], ["S", "📤 Saída"]],
      "Na máquina de refrigerante, cada coisa é entrada, processamento ou saída?",
      [["Você coloca o dinheiro", "E", "É do que a máquina precisa para começar: entrada."], ["Você escolhe a bebida no botão", "E", "A escolha também é uma entrada."],
        ["A máquina confere o dinheiro e separa a lata", "P", "O que ela faz com as entradas: processamento."], ["A lata cai na portinha", "S", "O resultado no fim: saída."]],
      "Você entendeu a máquina! 🥤", "Entradas: dinheiro e escolha. Processamento: conferir e separar. Saída: a bebida."),
    VIDA(
      ["No aplicativo de mapa, “aonde eu quero ir” é…", ["Uma entrada", "Uma saída", "Um defeito"], "É o que você informa ao aplicativo: <b>entrada</b>. O caminho na tela é a saída."],
      ["Sem ovos, o bolo não sai. Isso mostra que, se faltar uma ___, o algoritmo não funciona.", ["Entrada", "Saída", "Tela"], "Faltou uma <b>entrada</b>: o algoritmo não funciona."],
      ["Para que serve saber a <b>saída esperada</b>?", ["Para conferir se o algoritmo deu certo", "Para apagar o algoritmo", "Para não precisar de entradas"], "Sabendo a saída esperada, dá para <b>conferir</b> se deu certo."])
  ];
  mais("m5", "desafio",
    msg("🎤 Mandar um áudio: entrada, processamento ou saída?", "📱 Aplicativo de mensagens",
      [["E", "📥 Entrada"], ["P", "⚙️ Processamento"], ["S", "📤 Saída"]],
      "Para mandar um áudio pelo celular, cada coisa é o quê?",
      [["A sua voz entrando pelo microfone", "E", "É do que o aplicativo precisa: entrada."], ["O celular grava e prepara o áudio", "P", "É o que ele faz com a voz: processamento."],
        ["O áudio chega enviado na conversa", "S", "É o resultado: saída."], ["Você escolhe para quem enviar", "E", "Também é uma entrada."]],
      "Áudio enviado! 🎤", "Entrada: a voz e a pessoa escolhida. Processamento: gravar e preparar. Saída: o áudio enviado."));
  mais("m5", "turbo",
    { tipo: "memoria", titulo: "🧩 Jogo da memória: problema e saída esperada",
      enunciado: "<p>Vire duas cartas e ache o <b>problema</b> e a <b>saída esperada</b> que combinam.</p>",
      pares: [{ a: "Calcular a média da prova", b: "A média" }, { a: "Mandar um áudio", b: "O áudio enviado" }, { a: "Achar o caminho no mapa", b: "O caminho na tela" },
        { a: "Fazer um bolo", b: "O bolo pronto" }, { a: "Somar 2 + 3 na calculadora", b: "O resultado 5 na tela" }, { a: "Comprar na máquina de refrigerante", b: "A bebida na portinha" }],
      porRodada: 3,
      explicacao: "Antes de montar o algoritmo, pense: o que eu quero conseguir no fim? Essa é a saída esperada." });

  /* ---------- M6 · decompor ---------- */
  A.m6.gancho = { html: "<p>🎒 A turma vai fazer um passeio ao parque, e a professora disse: “Organizem tudo!”. Todo mundo começou a falar ao mesmo tempo.</p><p>🤔 Por onde começar? Dá para uma pessoa só fazer tudo? E se o problema grande virasse vários <b>problemas pequenos</b>?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: organizar o passeio da turma", "🎒 Passeio ao parque",
      [["T", "🚌 Transporte"], ["L", "🥪 Lanche"], ["B", "⚽ Brincadeiras"]],
      "O passeio foi dividido em 3 partes (subproblemas). Em qual parte entra cada tarefa?",
      [["Combinar o horário do ônibus", "T", "É sobre como chegar ao parque."], ["Levar sanduíches e suco", "L", "É comida: lanche."],
        ["Levar a bola e a corda", "B", "Para brincar."], ["Contar quantos alunos vão no ônibus", "T", "Também é transporte."], ["Separar os guardanapos", "L", "Faz parte do lanche."]],
      "Passeio organizado! 🎒", "Dividindo em partes (transporte, lanche, brincadeiras), cada grupo resolve uma e o problema grande fica resolvido."),
    VIDA(
      ["Arrumar o quarto: arrumar a cama, guardar as roupas, recolher os brinquedos. Isso é…", ["Decompor o problema em partes", "Uma música", "Um desenho"], "Dividir o problema grande em partes menores é <b>decompor</b>."],
      ["Cada parte menor de um problema grande se chama…", ["Subproblema", "Saída", "Laço"], "Cada parte é um <b>subproblema</b>."],
      ["Como os programadores fazem um jogo de celular?", ["Dividem em partes, e cada equipe cuida de uma", "Uma pessoa faz tudo de uma vez", "Copiam outro jogo"], "Personagens, cenário, pontos e sons: cada <b>equipe</b> cuida de uma parte."])
  ];
  mais("m6", "desafio",
    { tipo: "rota", titulo: "🧩 Os 4 passos para decompor",
      enunciado: "<p>Coloque na ordem os passos para decompor um problema grande.</p>",
      etapas: [{ ic: "🎯", t: "Dizer qual é o problema grande" }, { ic: "❓", t: "Perguntar: de que partes ele é feito?" }, { ic: "🔧", t: "Resolver uma parte de cada vez" }, { ic: "✅", t: "Juntar tudo e conferir" }],
      okMsg: "Problema decomposto! 🧩",
      explicacao: "1. o problema grande; 2. as partes; 3. uma parte de cada vez; 4. juntar e conferir." });
  mais("m6", "turbo",
    msg("🎮 As equipes do jogo de celular", "🎮 Fábrica de jogos",
      [["P", "🧍 Personagens"], ["C", "🏞️ Cenário"], ["N", "🏆 Pontos"], ["S", "🔊 Sons"]],
      "Um jogo foi dividido em partes, e cada equipe cuida de uma. Para qual equipe vai cada tarefa?",
      [["Desenhar o herói e o vilão", "P", "Quem aparece no jogo: personagens."], ["Fazer a floresta e o castelo", "C", "Onde a história acontece: cenário."],
        ["Contar 10 a cada moeda", "N", "Placar: pontos."], ["Criar a musiquinha e o barulho do pulo", "S", "Sons."], ["Fazer o herói piscar e pular", "P", "Movimento do personagem."]],
      "Jogo pronto para lançar! 🎮", "Cada parte é um subproblema; com equipes cuidando de cada uma, o jogo grande fica pronto."));

  /* ---------- M7 · caça ao erro ---------- */
  A.m7.gancho = { html: "<p>🤖 O Léo montou as setas do robô até a estrela, apertou ▶ Executar e… o robô <b>bateu na parede</b>!</p><p>🤔 O Léo precisa apagar tudo e começar de novo? Ou dá para <b>achar o passo errado</b> e corrigir só ele?</p>" };
  A.m7.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: o robô entregador de pizza", icone: "🍕",
      enunciado: "<p>O robô entregador já tem um programa, mas ele bate na parede. Clique em <b>▶ Executar</b> para testar, compare, ache o primeiro passo errado e corrija só ele (você pode apagar e montar de novo).</p>",
      grade: ["R..#", "#.##", "#..*"],
      inicial: passos("R R D D R"),
      solucao: passos("R D D R R"),
      dicas: ["Teste: o robô bate na parede logo ao descer.", "Ele precisa descer pela coluna B, então vai só uma casa para a direita antes de descer."],
      explicacao: "O primeiro passo errado era o 2º ➡️ (um passo a mais antes de descer). Programa certo: ➡️ ⬇️ ⬇️ ➡️ ➡️." },
    VIDA(
      ["O aplicativo pede para atualizar. Muitas vezes é para…", ["Corrigir bugs", "Apagar suas fotos", "Mudar a sua senha"], "As atualizações costumam <b>corrigir bugs</b> (erros do programa)."],
      ["O que é <b>depurar</b>?", ["Achar e corrigir o erro", "Desligar o computador", "Escrever o programa mais rápido"], "Depurar (em inglês, debug) é <b>achar e corrigir</b> o erro."],
      ["Depois de achar o passo errado, o que você faz?", ["Muda só esse passo e testa de novo", "Apaga tudo", "Muda todos os passos"], "Corrigir: mude <b>só esse passo</b> e teste de novo."])
  ];
  mais("m7", "desafio",
    { tipo: "robo", titulo: "🔍 Bug: falta um passo",
      enunciado: "<p>Este programa tem um <b>passo faltando</b>. Teste, ache onde ele se perde e corrija.</p>",
      grade: ["R...", "###.", "*..."],
      inicial: passos("R R R D L L L"),
      solucao: passos("R R R D D L L L"),
      dicas: ["Conte: para chegar à linha 3, quantas vezes precisa descer?"],
      explicacao: "Faltava um ⬇️: o robô tentava ir para a esquerda na linha 2 e batia. Com ➡️ ➡️ ➡️ ⬇️ ⬇️ ⬅️ ⬅️ ⬅️ ele chega." });
  mais("m7", "turbo",
    { tipo: "robo", titulo: "🕵️ Bug: passo fora de ordem",
      icone: "🐭",
      enunciado: "<p>O ratinho tem um programa quase certo, mas um passo está <b>fora de ordem</b>. Teste, ache o primeiro passo errado e corrija.</p>",
      grade: ["R.#..", ".##.#", "...#.", "#.#..", "#...*"],
      inicial: passos("D D D R D R R R"),
      solucao: passos("D D R D D R R R"),
      dicas: ["O 3º passo leva o ratinho para uma parede: o ➡️ tinha de vir antes."],
      explicacao: "O ➡️ estava depois do 3º ⬇️. Trocando a ordem (⬇️ ⬇️ ➡️ ⬇️ ⬇️ ➡️ ➡️ ➡️), o ratinho chega ao queijo." });

  /* ---------- M8 · desenho com a tartaruga ---------- */
  A.m8.gancho = { html: "<p>🖨️ Na feira de ciências, uma <b>impressora 3D</b> desenhou sozinha um quadrado perfeitinho, andando e virando.</p><p>🤔 Como a máquina sabe para onde andar e quando virar? Alguém precisou escrever o caminho para ela?</p>" };
  A.m8.aplicar = [
    { tipo: "robo", titulo: "🛠️ Na vida real: a máquina de corte desenha a placa", icone: "🐢", compacto: 4,
      enunciado: "<p>A máquina de corte vai recortar a placa retangular da sala. Faça a tartaruga passar por <b>todos os pontos ⚪</b> e terminar na estrela, com <b>no máximo 4 blocos</b> (use o repita).</p>",
      grade: ["Rooo", "*..o", "oooo"],
      solucao: [["R", 3], ["D", 2], ["L", 3], ["U", 1]],
      dicas: ["Lado de cima: 3 casas para a direita. Depois desça 2, volte 3 e suba 1."],
      explicacao: "repita 3× ➡️ · repita 2× ⬇️ · repita 3× ⬅️ · ⬆️: os lados do retângulo, como a máquina de corte faz." },
    VIDA(
      ["O robô aspirador anda pela casa…", ["Seguindo um caminho programado", "Adivinhando onde está a sujeira", "Sem nenhuma instrução"], "Ele segue um <b>caminho programado</b>, como a tartaruga."],
      ["Um quadrado tem…", ["4 lados iguais", "3 lados", "2 lados compridos e 2 curtos"], "O <b>quadrado</b> tem 4 lados iguais; o retângulo tem 2 compridos e 2 curtos."],
      ["A escada ➡️ ⬇️ ➡️ ⬇️ ➡️ ⬇️ é o degrau ➡️ ⬇️…", ["Repetido 3 vezes", "Feito uma vez só", "Ao contrário"], "O segredo é achar o <b>padrão</b>: o degrau repetido."])
  ];
  mais("m8", "desafio",
    { tipo: "robo", titulo: "🐢 A escada", icone: "🐢",
      enunciado: "<p>Desenhe uma <b>escada</b>: passe por todos os pontos ⚪ e termine na estrela.</p>",
      grade: ["Ro..", ".oo.", "..oo", "...*"],
      solucao: passos("R D R D R D"),
      dicas: ["O degrau é: ➡️ e depois ⬇️."],
      explicacao: "O degrau ➡️ ⬇️ repetido 3 vezes: ➡️ ⬇️ ➡️ ⬇️ ➡️ ⬇️." });
  mais("m8", "turbo",
    { tipo: "robo", titulo: "🐢 O quadrado grande em 4 blocos", icone: "🐢", compacto: 4,
      enunciado: "<p>Desenhe um <b>quadrado de 3 casas de lado</b>: passe por todos os pontos ⚪ e termine na estrela, com <b>no máximo 4 blocos</b>.</p>",
      grade: ["Rooo", "*..o", "o..o", "oooo"],
      solucao: [["R", 3], ["D", 3], ["L", 3], ["U", 2]],
      dicas: ["Cada lado é um bloco com repita: 3 para a direita, 3 para baixo, 3 para a esquerda e 2 para cima."],
      explicacao: "repita 3× ➡️ · repita 3× ⬇️ · repita 3× ⬅️ · repita 2× ⬆️: o quadrado grande com só 4 blocos." });
  void D1;
})();
