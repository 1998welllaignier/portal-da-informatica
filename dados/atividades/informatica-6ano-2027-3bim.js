/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 3º bimestre de 2027 (Programação em blocos)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   Programação em blocos no portal (tipo "blocos", js/blocos.js).
   BNCC Computação: EF06CO01, EF06CO02, EF06CO03, EF06CO04, EF06CO06.
   Cada atividade de blocos foi testada: o programa inicial NÃO dá o esperado e a solução dá.
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });
  const saudar = ["funcao", "saudar", [["mostrar", ["juntar", "Olá, ", v("nome")]]]];
  const regraVerde = ["quando", "verde", [["mudar", "pontos", 1], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]]];
  const regraVermelho = ["quando", "vermelho", [["mudar", "pontos", -1], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]]];
  const BOTOES = [["🟢 botão verde (moeda)", "verde"], ["🔴 botão vermelho (bomba)", "vermelho"]];
  const historiaTito = h => [["definir", "heroi", h], ["mostrar", ["juntar", "Era uma vez ", v("heroi")]], ["repita", 3, [["mostrar", "toc"]]], ["mostrar", ["juntar", v("heroi"), " abriu a porta"]]];

PORTAL.registrarAtividades("informatica-6ano-2027-3bim", {

  /* ============ MISSÃO 1 — Meu primeiro programa ============ */
  m1: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: rode e acrescente um bloco",
        enunciado: "<p>Este programa já mostra <strong>Olá!</strong>. Aperte <strong>▶️ Rodar o programa</strong> e olhe a <strong>📺 Tela do programa</strong>.</p><p>Depois abra a gaveta <strong>📺 Mostrar</strong>, arraste outro bloco, <strong>encaixe embaixo</strong> do primeiro e escreva <strong>Eu programo!</strong>. Rode de novo.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Olá!"]],
        esperado: ["Olá!", "Eu programo!"],
        solucao: [["mostrar", "Olá!"], ["mostrar", "Eu programo!"]],
        dicas: ["O bloco novo precisa ficar grudado embaixo do primeiro.", "Clique no texto “Olá!” do bloco novo e troque por “Eu programo!”."],
        explicacao: "Dois blocos <strong>mostrar na tela</strong>, um embaixo do outro: o computador executa de cima para baixo." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Meu primeiro programa",
        robo: BIT("🤖 O meu programa", [["Eu quero mostrar duas linhas: “Oi, mundo!” e “Que dia lindo!”.", "1 · mostrar “Oi, mundo!”"], ["Encaixo o segundo bloco <b>embaixo</b> do primeiro.", "2 · mostrar “Que dia lindo!” ✔", true]]),
        enunciado: "<p>Monte um programa que mostre na tela, nesta ordem:</p><p><strong>Meu nome é Bit</strong><br><strong>Eu gosto de programar</strong></p>",
        caixa: ["mostrar", "texto"],
        esperado: ["Meu nome é Bit", "Eu gosto de programar"],
        solucao: [["mostrar", "Meu nome é Bit"], ["mostrar", "Eu gosto de programar"]],
        dicas: ["Use a tabela “Como usar o editor de blocos” do 💡 Para começar.", "O primeiro bloco fica em cima: o computador lê de cima para baixo."],
        explicacao: "<strong>Sequência</strong>: o primeiro bloco mostra a primeira linha; o de baixo, a segunda." },
      { tipo: "ordenar", titulo: "A ordem importa: escovar os dentes",
        enunciado: "<p>Coloque os passos na ordem certa, como blocos de um programa.</p>",
        itens: ["Pegar a escova", "Colocar a pasta", "Escovar os dentes", "Enxaguar a boca"],
        explicacao: "Sequência: pegar a escova → colocar a pasta → escovar → enxaguar. Em outra ordem, não funciona!" },
      { tipo: "escolha", titulo: "Como o computador lê os blocos?",
        perguntas: [
          { p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima", "Na ordem que quiser"], certo: 0 },
          { p: "Um bloco solto, que não está encaixado no programa:", opcoes: ["Não roda", "Roda primeiro", "Roda duas vezes"], certo: 0 },
          { p: "Para ver o resultado do programa, eu aperto:", opcoes: ["▶️ Rodar o programa", "🧹 Limpar tudo", "Nada"], certo: 0 }],
        explicacao: "De cima para baixo; bloco solto não roda; ▶️ Rodar mostra o resultado." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 O bom-dia do robô",
        enunciado: "<p>Monte o programa do robô, com <strong>4 linhas</strong> nesta ordem:</p><p><strong>Bom dia!</strong><br><strong>Hoje é dia de aula.</strong><br><strong>Vamos programar!</strong><br><strong>Tchau!</strong></p>",
        caixa: ["mostrar", "texto"],
        esperado: ["Bom dia!", "Hoje é dia de aula.", "Vamos programar!", "Tchau!"],
        solucao: [["mostrar", "Bom dia!"], ["mostrar", "Hoje é dia de aula."], ["mostrar", "Vamos programar!"], ["mostrar", "Tchau!"]],
        dicas: ["São 4 blocos mostrar, encaixados um embaixo do outro.", "Confira a pontuação: o ponto e a exclamação também contam."],
        explicacao: "Quatro blocos em sequência, na ordem pedida." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 Conserte a ordem",
        enunciado: "<p>Este programa está com a <strong>ordem errada</strong>. Ele devia mostrar:</p><p><strong>Oi!</strong><br><strong>Tudo bem?</strong><br><strong>Tchau!</strong></p><p>Arraste os blocos para a ordem certa.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Tchau!"], ["mostrar", "Oi!"], ["mostrar", "Tudo bem?"]],
        esperado: ["Oi!", "Tudo bem?", "Tchau!"],
        solucao: [["mostrar", "Oi!"], ["mostrar", "Tudo bem?"], ["mostrar", "Tchau!"]],
        dicas: ["Arraste o bloco “Tchau!” para o fim: ao arrastar um bloco, os de baixo vêm junto; vá com calma."],
        explicacao: "A ordem importa: “Oi!” primeiro, “Tchau!” por último." }
    ],
    vf: [
      { v: true, why: "É a sequência." },
      { v: false, corrigir: { trecho: "não muda o resultado", opcoes: ["não muda o resultado", "muda o resultado"], certo: "muda o resultado" }, why: "A ordem importa." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "também é executado", opcoes: ["também é executado", "não é executado"], certo: "não é executado" }, why: "Bloco solto não roda." },
      { v: true, why: "É o botão de rodar." }
    ]
  },

  /* ============ MISSÃO 2 — Repetição e seleção ============ */
  m2: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: mude o número do repita",
        enunciado: "<p>Rode o programa: “pula” aparece 3 vezes. Agora mude o <strong>3</strong> do repita para <strong>5</strong> e rode de novo.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 3, [["mostrar", "pula"]]], ["mostrar", "fim"]],
        esperado: ["pula", "pula", "pula", "pula", "pula", "fim"],
        solucao: [["repita", 5, [["mostrar", "pula"]]], ["mostrar", "fim"]],
        dicas: ["Clique no número 3 dentro do bloco repita e digite 5."],
        explicacao: "O repita faz os blocos de dentro várias vezes. O “fim” está fora (embaixo), por isso aparece uma vez só." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Encurte com o repita",
        robo: BIT("🔁 Outro exemplo", [["Quero mostrar “oba” 3 vezes e depois “acabou”.", "repita 3: mostrar “oba”"], ["O “acabou” fica <b>embaixo</b> do repita, fora dele.", "mostrar “acabou” ✔", true]]),
        enunciado: "<p>A torcida bate <strong>palma 4 vezes</strong> e depois grita <strong>Parabéns!</strong>. Monte o programa usando o <strong>🔁 repita</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        esperado: ["palma", "palma", "palma", "palma", "Parabéns!"], exige: ["repita"],
        solucao: [["repita", 4, [["mostrar", "palma"]]], ["mostrar", "Parabéns!"]],
        dicas: ["Coloque o “mostrar palma” DENTRO do repita e mude o número para 4.", "O “Parabéns!” fica embaixo do repita, do lado de fora."],
        explicacao: "repita 4 vezes: mostrar “palma”. Embaixo, fora: mostrar “Parabéns!”." },
      { tipo: "blocos", titulo: "Guarda-chuva ou boné?",
        robo: BIT("🔀 Outro exemplo", [["Se estiver frio, “casaco”; senão, “camiseta”.", "se frio: casaco"], ["O <b>senão</b> é o caminho quando a condição é falsa.", "senão: camiseta ✔", true]]),
        enunciado: "<p>O programa já guarda <strong>chovendo = verdadeiro</strong>. Use o <strong>🔀 se … faça … senão</strong> (gaveta Se, o segundo bloco): <strong>se chovendo</strong>, mostrar <strong>guarda-chuva</strong>; <strong>senão</strong>, mostrar <strong>boné</strong>.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar"],
        inicio: [["definir", "chovendo", true]],
        esperado: ["guarda-chuva"], exige: ["se"],
        solucao: [["definir", "chovendo", true], ["se", v("chovendo"), [["mostrar", "guarda-chuva"]], [["mostrar", "boné"]]]],
        dicas: ["Pegue o se … faça … senão e encaixe embaixo do “definir chovendo”.", "Na condição do se, encaixe o bloco redondo chovendo (gaveta 📦 Variáveis)."],
        explicacao: "Como chovendo é verdadeiro, o se escolhe o primeiro caminho: guarda-chuva." },
      { tipo: "escolha", titulo: "Dentro ou fora do repita?",
        enunciado: "<p>Programa: <em>repita 3 vezes: [mostrar “pula”] · mostrar “fim”</em>.</p>",
        perguntas: [
          { p: "Se o “mostrar fim” estiver EMBAIXO do repita (fora dele), “fim” aparece:", opcoes: ["1 vez", "3 vezes", "Nenhuma"], certo: 0 },
          { p: "Se o “mostrar fim” estiver DENTRO do repita, “fim” aparece:", opcoes: ["3 vezes", "1 vez", "4 vezes"], certo: 0 },
          { p: "A condição do se é:", opcoes: ["Uma pergunta de sim ou não", "Um número de vezes", "Um texto qualquer"], certo: 0 }],
        explicacao: "Fora = 1 vez; dentro = 3 vezes; a condição é uma pergunta de sim ou não." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 O semáforo decide sozinho",
        enunciado: "<p>O programa guarda <strong>cor = vermelho</strong>. Monte: <strong>se cor = vermelho</strong>, mostrar <strong>Pare!</strong>; <strong>senão</strong>, mostrar <strong>Siga!</strong>.</p>",
        caixa: ["mostrar", "texto", "variavel", "se", "comparar"],
        inicio: [["definir", "cor", "vermelho"]],
        esperado: ["Pare!"], exige: ["se", "comparar"],
        solucao: [["definir", "cor", "vermelho"], ["se", ["=", v("cor"), "vermelho"], [["mostrar", "Pare!"]], [["mostrar", "Siga!"]]]],
        dicas: ["Na gaveta ⚖️ Comparar, use o bloco com o sinal =.", "De um lado, a variável cor; do outro, um bloco de texto escrito vermelho."],
        explicacao: "cor = “vermelho” é verdadeiro, então aparece “Pare!”. Se a cor fosse verde, apareceria “Siga!”." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 Repita e se juntos",
        enunciado: "<p>O programa guarda <strong>energia = 7</strong>. Monte: <strong>repita 3 vezes</strong> mostrar <strong>pula</strong>; depois, <strong>se energia ≥ 5</strong>, mostrar <strong>mais uma!</strong>, <strong>senão</strong>, mostrar <strong>cansei</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
        inicio: [["definir", "energia", 7]],
        esperado: ["pula", "pula", "pula", "mais uma!"], exige: ["repita", "se"],
        solucao: [["definir", "energia", 7], ["repita", 3, [["mostrar", "pula"]]], ["se", [">=", v("energia"), 5], [["mostrar", "mais uma!"]], [["mostrar", "cansei"]]]],
        dicas: ["Primeiro o repita; o se fica embaixo dele, fora.", "No comparar, escolha o sinal ≥ e compare a energia com o número 5."],
        explicacao: "3 vezes “pula”; como 7 ≥ 5, aparece “mais uma!”." }
    ],
    vf: [
      { v: true, why: "É a repetição." },
      { v: false, corrigir: { trecho: "O se serve para repetir", opcoes: ["O se serve para repetir", "O se serve para escolher um caminho"], certo: "O se serve para escolher um caminho" }, why: "Quem repete é o repita." },
      { v: true, why: "Verdadeiro ou falso." },
      { v: true, why: "Fora do repita, uma vez." },
      { v: true, why: "10 é maior que 5." }
    ]
  },

  /* ============ MISSÃO 3 — Variáveis ============ */
  m3: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: altere o valor da caixinha",
        enunciado: "<p>O programa guarda <strong>pontos = 0</strong> e mostra o valor. Antes do “mostrar”, encaixe <strong>alterar pontos por 5</strong> (gaveta 📦 Variáveis). Rode: deve aparecer <strong>5</strong>.</p>",
        caixa: ["mostrar", "numero", "variavel"],
        inicio: [["definir", "pontos", 0], ["mostrar", v("pontos")]],
        esperado: ["5"],
        solucao: [["definir", "pontos", 0], ["mudar", "pontos", 5], ["mostrar", v("pontos")]],
        dicas: ["O bloco alterar … por fica entre o definir e o mostrar.", "Troque o 1 do bloco alterar por 5."],
        explicacao: "definir pontos para 0 → alterar pontos por 5 → mostrar pontos: aparece 5." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Pontos: 8",
        robo: BIT("📦 Outro exemplo", [["definir moedas para 0 · alterar moedas por 2 · alterar moedas por 4.", "moedas = 6"], ["Para mostrar com texto: criar texto com “Moedas: ” e a variável.", "Moedas: 6 ✔", true]]),
        enunciado: "<p>Faça como no exemplo da apostila: <strong>pontos = 0</strong>, altere por <strong>5</strong>, altere por <strong>3</strong> e mostre <strong>Pontos: 8</strong> usando o bloco <strong>criar texto com</strong> (gaveta 🔤 Texto).</p>",
        caixa: ["mostrar", "texto", "numero", "variavel"],
        inicio: [["definir", "pontos", 0]],
        esperado: ["Pontos: 8"], exige: ["variavel", "texto"],
        solucao: [["definir", "pontos", 0], ["mudar", "pontos", 5], ["mudar", "pontos", 3], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]],
        dicas: ["Use dois blocos alterar pontos por: um com 5 e outro com 3.", "No criar texto com, o primeiro pedaço é “Pontos: ” (com espaço) e o segundo é a variável pontos."],
        explicacao: "0 + 5 + 3 = 8; o criar texto com junta “Pontos: ” e 8." },
      { tipo: "tabela", titulo: "Acompanhe a caixinha passo a passo",
        enunciado: "<p>Use a tabela <strong>Exemplo passo a passo</strong> do 💡 Para começar.</p>",
        dicas: ["Releia a tabela Bloco · Valor de pontos depois do bloco."],
        colunas: ["Bloco", "Valor de pontos depois"],
        linhas: [["definir pontos para 0", { r: "0", tipo: "num" }], ["alterar pontos por 5", { r: "5", tipo: "num" }], ["alterar pontos por 3", { r: "8", tipo: "num" }]],
        explicacao: "0 → 5 → 8: cada “alterar por” soma ao valor que já estava." },
      { tipo: "ligar", titulo: "Cada bloco e o que ele faz",
        pares: [{ a: "definir pontos para 0", b: "Coloca um valor na caixinha" }, { a: "alterar pontos por 1", b: "Soma ao valor que já estava" }, { a: "pontos (bloco redondo)", b: "Pega o valor da caixinha" }, { a: "criar texto com", b: "Junta pedaços numa frase" }],
        explicacao: "Definir coloca; alterar soma; o redondo pega; criar texto com junta." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 O placar da partida",
        enunciado: "<p>O jogo começa com <strong>gols = 0</strong>. Saem <strong>dois gols</strong>. Depois de cada gol, mostre o placar:</p><p><strong>Gols: 1</strong><br><strong>Gols: 2</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel"],
        inicio: [["definir", "gols", 0]],
        esperado: ["Gols: 1", "Gols: 2"], exige: ["variavel"],
        solucao: [["definir", "gols", 0], ["mudar", "gols", 1], ["mostrar", ["juntar", "Gols: ", v("gols")]], ["mudar", "gols", 1], ["mostrar", ["juntar", "Gols: ", v("gols")]]],
        dicas: ["Gol = alterar gols por 1. Depois de cada gol, um mostrar com criar texto com."],
        explicacao: "alterar gols por 1 → mostrar “Gols: 1” → alterar de novo → mostrar “Gols: 2”." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 A variável dentro do repita",
        enunciado: "<p>Com <strong>contador = 0</strong>, use o <strong>repita 3 vezes</strong> para mostrar:</p><p><strong>1</strong><br><strong>2</strong><br><strong>3</strong></p>",
        caixa: ["mostrar", "numero", "variavel", "repita"],
        inicio: [["definir", "contador", 0]],
        esperado: ["1", "2", "3"], exige: ["repita", "variavel"],
        solucao: [["definir", "contador", 0], ["repita", 3, [["mudar", "contador", 1], ["mostrar", v("contador")]]]],
        dicas: ["Dentro do repita: primeiro alterar contador por 1, depois mostrar contador."],
        explicacao: "A cada volta, o contador aumenta 1 e é mostrado: 1, 2, 3." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "apaga o valor e coloca 1", opcoes: ["apaga o valor e coloca 1", "soma 1 ao valor que já estava"], certo: "soma 1 ao valor que já estava" }, why: "Alterar por soma." },
      { v: true, why: "Número ou texto." },
      { v: true, why: "0 + 5 + 3 = 8." },
      { v: true, why: "Junta texto e variável." }
    ]
  },

  /* ============ MISSÃO 4 — Um bloco para muitos casos ============ */
  m4: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: chame o bloco saudar",
        enunciado: "<p>O bloco <strong>saudar</strong> já existe (o bloco “para saudar”), e a variável <strong>nome</strong> já é “Ana”. Mas ninguém <strong>chamou</strong> o bloco! Abra a gaveta <strong>🧩 Meus blocos</strong>, pegue o bloco <strong>saudar</strong> e encaixe embaixo do “definir nome”.</p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [saudar, ["definir", "nome", "Ana"]],
        esperado: ["Olá, Ana"],
        solucao: [saudar, ["definir", "nome", "Ana"], ["chamar", "saudar"]],
        dicas: ["O bloco para chamar se chama apenas saudar e fica na gaveta 🧩 Meus blocos."],
        explicacao: "Chamar o bloco faz o computador executar o que está dentro dele: “Olá, ” + nome." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Um bloco, dois alunos",
        robo: BIT("🧩 Outro exemplo", [["O bloco <b>parabenizar</b> mostra “Parabéns, ” + nome.", "definir nome “Iara” · chamar"], ["Depois troco o nome e chamo de novo.", "definir nome “Davi” · chamar ✔", true]]),
        enunciado: "<p>Use o mesmo bloco <strong>saudar</strong> para dois alunos. A tela deve mostrar:</p><p><strong>Olá, Ana</strong><br><strong>Olá, Leo</strong></p><p>O <strong>parâmetro</strong> é a variável <strong>nome</strong>: troque o valor dela antes de cada chamada.</p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [saudar],
        esperado: ["Olá, Ana", "Olá, Leo"], exige: ["funcao", "variavel"],
        solucao: [saudar, ["definir", "nome", "Ana"], ["chamar", "saudar"], ["definir", "nome", "Leo"], ["chamar", "saudar"]],
        dicas: ["A ordem é: definir nome para “Ana” · saudar · definir nome para “Leo” · saudar.", "Veja a tabela “Um bloco para muitos casos” do 💡 Para começar."],
        explicacao: "O bloco saudar é o mesmo; só o parâmetro (nome) muda." },
      { tipo: "ligar", titulo: "Cada ideia e o seu significado",
        pares: [{ a: "🧩 Meu bloco", b: "Bloco criado por você, com outros blocos dentro" }, { a: "📞 Chamar", b: "Mandar executar o que está dentro do bloco" }, { a: "🎛️ Parâmetro", b: "O valor que muda a cada vez" }, { a: "♻️ Reaproveitar", b: "Usar de novo sem montar tudo outra vez" }],
        explicacao: "Meu bloco, chamar, parâmetro e reaproveitar." },
      { tipo: "escolha", titulo: "Para que serve o meu bloco?",
        perguntas: [
          { p: "Quero mudar a saudação de “Olá” para “Oi”. Com o bloco saudar, eu mudo:", opcoes: ["Em um lugar só", "Em todos os lugares do programa", "Não dá para mudar"], certo: 0 },
          { p: "Na receita de suco, a fruta é:", opcoes: ["O parâmetro", "O bloco", "O erro"], certo: 0 }],
        explicacao: "Mudar em um lugar só; o que muda (a fruta) é o parâmetro." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 O bloco aniversário",
        enunciado: "<p>O bloco <strong>parabens</strong> já existe. Use ele para três aniversariantes:</p><p><strong>Parabéns, Bia!</strong><br><strong>Parabéns, Caio!</strong><br><strong>Parabéns, Duda!</strong></p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [["funcao", "parabens", [["mostrar", ["juntar", "Parabéns, ", v("nome"), "!"]]]]],
        esperado: ["Parabéns, Bia!", "Parabéns, Caio!", "Parabéns, Duda!"], exige: ["funcao", "variavel"],
        solucao: [["funcao", "parabens", [["mostrar", ["juntar", "Parabéns, ", v("nome"), "!"]]]], ["definir", "nome", "Bia"], ["chamar", "parabens"], ["definir", "nome", "Caio"], ["chamar", "parabens"], ["definir", "nome", "Duda"], ["chamar", "parabens"]],
        dicas: ["Três vezes: definir nome · chamar parabens."],
        explicacao: "Um bloco, três casos: só o parâmetro nome muda." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 Mude em um lugar só",
        enunciado: "<p>A escola agora estuda à tarde! Troque “Bom dia, ” por <strong>“Boa tarde, ”</strong> mexendo <strong>só dentro do bloco cumprimentar</strong>. A tela deve mostrar:</p><p><strong>Boa tarde, Ana</strong><br><strong>Boa tarde, Leo</strong></p>",
        caixa: ["mostrar", "texto", "variavel", "funcao"],
        inicio: [["funcao", "cumprimentar", [["mostrar", ["juntar", "Bom dia, ", v("nome")]]]], ["definir", "nome", "Ana"], ["chamar", "cumprimentar"], ["definir", "nome", "Leo"], ["chamar", "cumprimentar"]],
        esperado: ["Boa tarde, Ana", "Boa tarde, Leo"],
        solucao: [["funcao", "cumprimentar", [["mostrar", ["juntar", "Boa tarde, ", v("nome")]]]], ["definir", "nome", "Ana"], ["chamar", "cumprimentar"], ["definir", "nome", "Leo"], ["chamar", "cumprimentar"]],
        dicas: ["Clique no texto “Bom dia, ” dentro do bloco para cumprimentar e escreva “Boa tarde, ” (com vírgula e espaço)."],
        explicacao: "Mudando dentro do bloco, as duas saudações mudam juntas: é a vantagem de reaproveitar." }
    ],
    vf: [
      { v: true, why: "Gaveta 🧩 Meus blocos." },
      { v: true, why: "É o que chamar faz." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "preciso criar um bloco diferente", opcoes: ["preciso criar um bloco diferente", "uso o mesmo bloco, mudando o parâmetro"], certo: "uso o mesmo bloco, mudando o parâmetro" }, why: "É um bloco para muitos casos." },
      { v: true, why: "Reaproveita." }
    ]
  },

  /* ============ MISSÃO 5 — Listas e tipos de dados ============ */
  m5: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: pegue o item certo",
        enunciado: "<p>A lista <strong>frutas</strong> é [maçã, uva, caju]. O programa mostra o <strong>item 1</strong> (maçã). Mude para mostrar o <strong>item 3</strong>.</p>",
        caixa: ["mostrar", "numero", "variavel", "lista"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju")], ["mostrar", ["item", v("frutas"), 1]]],
        esperado: ["caju"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju")], ["mostrar", ["item", v("frutas"), 3]]],
        dicas: ["Troque o número 1 do bloco obter nº por 3."],
        explicacao: "Posição 1 = maçã; 2 = uva; 3 = caju." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Item 2 e tamanho",
        robo: BIT("📝 Outra lista", [["cores = [azul, verde, roxo, rosa]. O item 2 é <b>verde</b>.", "obter nº 2 → verde"], ["O tamanho é <b>4</b>: são 4 itens.", "tamanho → 4 ✔", true]]),
        enunciado: "<p>Com a lista <strong>frutas</strong> = [maçã, uva, caju], mostre o <strong>item 2</strong> e, embaixo, o <strong>tamanho</strong> da lista.</p>",
        caixa: ["mostrar", "numero", "variavel", "lista"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju")]],
        esperado: ["uva", "3"], exige: ["lista"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju")], ["mostrar", ["item", v("frutas"), 2]], ["mostrar", ["tamanho", v("frutas")]]],
        dicas: ["Dois blocos mostrar: no primeiro, o obter nº 2; no segundo, o tamanho de frutas."],
        explicacao: "Item 2 = uva; tamanho = 3 itens." },
      { tipo: "blocos", titulo: "Todos os itens com o para cada",
        enunciado: "<p>Use o <strong>👉 para cada item na lista</strong> para mostrar todas as frutas, uma por linha.</p>",
        caixa: ["mostrar", "variavel", "lista", "paracada"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju")]],
        esperado: ["maçã", "uva", "caju"], exige: ["paracada"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju")], ["paracada", "f", v("frutas"), [["mostrar", v("f")]]]],
        dicas: ["No para cada, escolha a lista frutas; dentro, mostrar o item (a variável do para cada)."],
        explicacao: "O para cada passa por todos os itens, um de cada vez." },
      { tipo: "classificar", modo: "tabela", titulo: "Qual é o tipo de dado?",
        colunaItem: "Valor", colunaResp: "Tipo",
        categorias: [{ id: "N", rot: "🔢 Número" }, { id: "T", rot: "🔤 Texto" }, { id: "L", rot: "✅ Lógico" }, { id: "S", rot: "📝 Lista" }],
        itens: [{ t: "15", c: "N" }, { t: "“Ana”", c: "T" }, { t: "verdadeiro", c: "L" }, { t: "[“maçã”, “uva”, “caju”]", c: "S" }, { t: "falso", c: "L" }, { t: "“bom dia”", c: "T" }],
        explicacao: "Número faz conta; texto se junta e mostra; lógico é verdadeiro ou falso; lista guarda vários valores." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 A chamada da turma",
        enunciado: "<p>A lista <strong>turma</strong> é [Ana, Bia, Caio]. Use o <strong>para cada</strong> e o <strong>criar texto com</strong> para mostrar:</p><p><strong>Presente, Ana!</strong><br><strong>Presente, Bia!</strong><br><strong>Presente, Caio!</strong></p>",
        caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
        inicio: [["definir", "turma", L("Ana", "Bia", "Caio")]],
        esperado: ["Presente, Ana!", "Presente, Bia!", "Presente, Caio!"], exige: ["paracada"],
        solucao: [["definir", "turma", L("Ana", "Bia", "Caio")], ["paracada", "a", v("turma"), [["mostrar", ["juntar", "Presente, ", v("a"), "!"]]]]],
        dicas: ["O criar texto com precisa de 3 pedaços: “Presente, ”, o item e “!”. Clique na engrenagem do bloco para acrescentar pedaços."],
        explicacao: "Para cada aluno da lista, um “Presente, …!”." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 Some os pontos da lista",
        enunciado: "<p>A lista <strong>pontos</strong> é [3, 5, 2]. Some todos com o <strong>para cada</strong> e mostre <strong>Total: 10</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada"],
        inicio: [["definir", "pontos", L(3, 5, 2)]],
        esperado: ["Total: 10"], exige: ["paracada", "variavel"],
        solucao: [["definir", "pontos", L(3, 5, 2)], ["definir", "total", 0], ["paracada", "p", v("pontos"), [["mudar", "total", v("p")]]], ["mostrar", ["juntar", "Total: ", v("total")]]],
        dicas: ["Crie a variável total = 0 antes do para cada.", "Dentro do para cada: alterar total por (o item). Depois, fora, mostre o total."],
        explicacao: "total começa em 0; soma 3, 5 e 2: 10." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "o item 2 é “caju”", opcoes: ["o item 2 é “caju”", "o item 2 é “uva”"], certo: "o item 2 é “uva”" }, why: "Caju é o item 3." },
      { v: true, why: "São 3 itens." },
      { v: false, corrigir: { trecho: "é um dado do tipo número", opcoes: ["é um dado do tipo número", "é um dado do tipo texto"], certo: "é um dado do tipo texto" }, why: "Nome é texto." },
      { v: true, why: "Tipo lógico." }
    ]
  },

  /* ============ MISSÃO 6 — Projeto: meu joguinho ============ */
  m6: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: a regra do botão verde",
        enunciado: "<p>No <strong>Pega-Moeda</strong>, cada <strong>🟢 botão verde</strong> é uma moeda. O bloco <strong>⚡ quando</strong> já está lá, mas vazio. Coloque dentro dele: <strong>alterar pontos por 1</strong> e <strong>mostrar “Pontos: ” + pontos</strong>.</p><p>Ao rodar, o portal aperta o botão verde 3 vezes.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🟢 botão verde (moeda)", "verde"]], disparos: ["verde", "verde", "verde"],
        inicio: [["definir", "pontos", 0], ["quando", "verde", []]],
        esperado: ["Pontos: 1", "Pontos: 2", "Pontos: 3"], exige: ["evento", "variavel"],
        solucao: [["definir", "pontos", 0], regraVerde],
        dicas: ["Os blocos vão DENTRO do “⚡ quando acontecer … faça”.", "Use o criar texto com para juntar “Pontos: ” e a variável."],
        explicacao: "A cada botão verde, pontos aumenta 1 e aparece o placar." }
    ],
    basico: [
      { tipo: "blocos", titulo: "A regra do botão vermelho",
        robo: BIT("⚡ Outro exemplo", [["Num jogo de luz: quando apertar 🔵, alterar brilho por 1.", "quando azul: +1"], ["Quando apertar ⚫, alterar brilho por −1.", "quando preto: −1 ✔", true]]),
        enunciado: "<p>Acrescente a regra do <strong>🔴 botão vermelho</strong> (bomba): <strong>alterar pontos por −1</strong> e mostrar os pontos. O portal aperta: verde, verde, vermelho.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: BOTOES, disparos: ["verde", "verde", "vermelho"],
        inicio: [["definir", "pontos", 0], regraVerde],
        esperado: ["Pontos: 1", "Pontos: 2", "Pontos: 1"], exige: ["evento"],
        solucao: [["definir", "pontos", 0], regraVerde, regraVermelho],
        dicas: ["Pegue outro bloco ⚡ quando e escolha o botão vermelho na setinha.", "Para tirar 1 ponto, escreva −1 no alterar pontos por."],
        explicacao: "Verde soma 1; vermelho tira 1: 1, 2, 1." },
      { tipo: "ordenar", titulo: "As etapas do projeto",
        enunciado: "<p>Coloque na ordem da tabela <strong>As etapas do projeto</strong>.</p>",
        itens: ["Planejar: escrever as regras", "Montar: colocar os blocos", "Testar: rodar e conferir", "Melhorar: consertar e acrescentar"],
        explicacao: "Planejar → montar → testar → melhorar." },
      { tipo: "classificar", modo: "tabela", titulo: "Evento ou ação?",
        colunaItem: "Item", colunaResp: "É…",
        categorias: [{ id: "E", rot: "⚡ Evento" }, { id: "A", rot: "🎬 Ação" }],
        itens: [{ t: "Apertar o botão verde", c: "E" }, { t: "Alterar pontos por 1", c: "A" }, { t: "Apertar o botão vermelho", c: "E" }, { t: "Mostrar o placar", c: "A" }],
        explicacao: "Evento = o que acontece (apertar o botão); ação = o que o programa faz." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 Você venceu!",
        enunciado: "<p>Dentro da regra do botão verde, depois de mostrar os pontos, acrescente: <strong>se pontos = 3</strong>, mostrar <strong>Você venceu!</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento", "se", "comparar"],
        eventos: [["🟢 botão verde (moeda)", "verde"]], disparos: ["verde", "verde", "verde"],
        inicio: [["definir", "pontos", 0], regraVerde],
        esperado: ["Pontos: 1", "Pontos: 2", "Pontos: 3", "Você venceu!"], exige: ["se", "comparar"],
        solucao: [["definir", "pontos", 0], ["quando", "verde", [["mudar", "pontos", 1], ["mostrar", ["juntar", "Pontos: ", v("pontos")]], ["se", ["=", v("pontos"), 3], [["mostrar", "Você venceu!"]]]]]],
        dicas: ["Use o primeiro bloco da gaveta 🔀 Se (sem senão).", "A condição é pontos = 3 (gaveta ⚖️ Comparar)."],
        explicacao: "Só no terceiro botão a condição pontos = 3 é verdadeira." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 O botão azul vale 2",
        enunciado: "<p>Acrescente a regra do <strong>🔵 botão azul</strong> (moeda de ouro): <strong>alterar pontos por 2</strong> e mostrar os pontos. O portal aperta: azul, verde, vermelho.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "evento"],
        eventos: [["🟢 botão verde (moeda)", "verde"], ["🔴 botão vermelho (bomba)", "vermelho"], ["🔵 botão azul (moeda de ouro)", "azul"]], disparos: ["azul", "verde", "vermelho"],
        inicio: [["definir", "pontos", 0], regraVerde, regraVermelho],
        esperado: ["Pontos: 2", "Pontos: 3", "Pontos: 2"], exige: ["evento"],
        solucao: [["definir", "pontos", 0], regraVerde, regraVermelho, ["quando", "azul", [["mudar", "pontos", 2], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]]]],
        dicas: ["Mais um bloco ⚡ quando, com o botão azul escolhido na setinha."],
        explicacao: "Azul +2 = 2; verde +1 = 3; vermelho −1 = 2." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Quando acontecer, faça." },
      { v: false, corrigir: { trecho: "testar é a primeira etapa", opcoes: ["testar é a primeira etapa", "planejar é a primeira etapa"], certo: "planejar é a primeira etapa" }, why: "Primeiro se planeja." },
      { v: true, why: "Bomba tira 1." },
      { v: true, why: "É a definição." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Desafios de lógica ============ */
  m7: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: rastreie o x",
        robo: BIT("🔎 Outro programa", [["definir y para 1 · repita 2 vezes: alterar y por 3.", "y: 1 → 4 → 7"], ["Então mostrar y mostra <b>7</b>.", "aparece 7 ✔", true]]),
        enunciado: "<p>Use a tabela de rastrear do 💡 Para começar: <em>definir x para 2 · repita 3 vezes: alterar x por 2 · mostrar x</em>.</p>",
        dicas: ["Releia a tabela Bloco · x."],
        colunas: ["Momento", "Valor de x"],
        linhas: [["Depois do definir", { r: "2", tipo: "num" }], ["Depois da 1ª volta do repita", { r: "4", tipo: "num" }], ["O que aparece na tela", { r: "8", tipo: "num" }]],
        explicacao: "2 → 4 → 6 → 8: aparece 8." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Preveja antes de rodar",
        perguntas: [
          { p: "repita 2 vezes: mostrar “oi” · mostrar “tchau”. Quantas linhas aparecem?", opcoes: ["3", "2", "4"], certo: 0, why: "oi, oi, tchau." },
          { p: "definir n para 10 · alterar n por 5 · mostrar n. Aparece:", opcoes: ["15", "10", "5"], certo: 0 },
          { p: "definir nota para 5 · se nota ≥ 5: mostrar “passou”. Aparece:", opcoes: ["passou", "nada", "recuperação"], certo: 0, why: "5 ≥ 5 é verdadeiro." }],
        explicacao: "Siga de cima para baixo e anote os valores." },
      { tipo: "ligar", titulo: "Cada erro e o seu conserto",
        pares: [{ a: "🔀 Ordem trocada", b: "Trocar os blocos de lugar" }, { a: "🔢 Número errado no repita", b: "Mudar o número" }, { a: "📦 “fim” dentro do repita", b: "Arrastar para fora" }, { a: "⚖️ > em vez de ≥", b: "Trocar a comparação" }],
        explicacao: "Ordem, número, lugar e comparação: os erros mais comuns." },
      { tipo: "blocos", titulo: "Depure: hip, hip, hip, hurra!",
        enunciado: "<p>A torcida devia gritar <strong>hip</strong> 3 vezes e depois <strong>hurra!</strong>, mas o programa tem um bug. Rode, descubra e conserte.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 2, [["mostrar", "hip"]]], ["mostrar", "hurra!"]],
        esperado: ["hip", "hip", "hip", "hurra!"],
        solucao: [["repita", 3, [["mostrar", "hip"]]], ["mostrar", "hurra!"]],
        dicas: ["Conte quantos “hip” aparecem. O erro é um número."],
        explicacao: "Número errado: o repita era 2 e devia ser 3." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 Dois bugs no mesmo programa",
        enunciado: "<p>Devia mostrar <strong>pula</strong> 3 vezes e <strong>fim</strong> uma vez só. Tem <strong>dois bugs</strong>!</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 2, [["mostrar", "pula"], ["mostrar", "fim"]]]],
        esperado: ["pula", "pula", "pula", "fim"],
        solucao: [["repita", 3, [["mostrar", "pula"]]], ["mostrar", "fim"]],
        dicas: ["Bug 1: o número do repita.", "Bug 2: o “fim” está dentro do repita; arraste para fora, embaixo."],
        explicacao: "Número errado (2 → 3) e bloco fora do lugar (fim dentro do repita)." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 A comparação errada",
        enunciado: "<p>Na escola, a nota <strong>5</strong> já é aprovação. Mas este programa diz “recuperação” para a nota 5. Conserte a <strong>comparação</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
        inicio: [["definir", "nota", 5], ["se", [">", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        esperado: ["passou"],
        solucao: [["definir", "nota", 5], ["se", [">=", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        dicas: ["5 > 5 é falso. Qual sinal deixa 5 passar?"],
        explicacao: "Com ≥, 5 ≥ 5 é verdadeiro: “passou”." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Bug = erro." },
      { v: true, why: "2 → 4 → 6 → 8." },
      { v: false, corrigir: { trecho: "a comparação deve ser nota > 5", opcoes: ["a comparação deve ser nota > 5", "a comparação deve ser nota ≥ 5"], certo: "a comparação deve ser nota ≥ 5" }, why: "5 > 5 é falso." },
      { v: true, why: "É a definição." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Minha história animada ============ */
  m8: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: a história do Tito",
        enunciado: "<p>A história começa pronta: “Era uma vez Tito”. Complete: <strong>repita 3 vezes</strong> mostrar <strong>toc</strong> e, no fim, <strong>Tito abriu a porta</strong> (use a variável <strong>heroi</strong> no criar texto com).</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita"],
        inicio: [["definir", "heroi", "Tito"], ["mostrar", ["juntar", "Era uma vez ", v("heroi")]]],
        esperado: ["Era uma vez Tito", "toc", "toc", "toc", "Tito abriu a porta"], exige: ["repita", "variavel"],
        solucao: historiaTito("Tito"),
        dicas: ["O criar texto com da última cena: a variável heroi e “ abriu a porta” (com espaço no começo)."],
        explicacao: "Sequência de cenas, repita para o toc e a variável heroi para o nome." }
    ],
    basico: [
      { tipo: "blocos", titulo: "O dia da Lia",
        robo: BIT("🎬 Outra história", [["definir heroi para “Rui” · mostrar heroi + “ pulou da cama.”", "Rui pulou da cama."], ["Cada linha é uma cena; o nome vem da variável.", "cena 2, cena 3… ✔", true]]),
        enunciado: "<p>Com <strong>heroi = Lia</strong>, monte as 3 cenas usando a variável:</p><p><strong>Lia acordou cedo.</strong><br><strong>Lia foi para a escola.</strong><br><strong>Lia aprendeu a programar!</strong></p>",
        caixa: ["mostrar", "texto", "variavel"],
        inicio: [["definir", "heroi", "Lia"]],
        esperado: ["Lia acordou cedo.", "Lia foi para a escola.", "Lia aprendeu a programar!"], exige: ["variavel"],
        solucao: [["definir", "heroi", "Lia"], ["mostrar", ["juntar", v("heroi"), " acordou cedo."]], ["mostrar", ["juntar", v("heroi"), " foi para a escola."]], ["mostrar", ["juntar", v("heroi"), " aprendeu a programar!"]]],
        dicas: ["Em cada cena: criar texto com a variável heroi e o resto da frase (começando com espaço)."],
        explicacao: "Três cenas em sequência, todas com a variável heroi." },
      { tipo: "ordenar", titulo: "O roteiro da história",
        enunciado: "<p>Coloque as partes do roteiro em ordem.</p>",
        itens: ["Começo: quem é o personagem", "Meio: o que acontece", "Fim: como termina"],
        explicacao: "Começo → meio → fim." },
      { tipo: "escolha", titulo: "Histórias com blocos",
        perguntas: [
          { p: "Na Tela do programa, cada linha da história é uma:", opcoes: ["Cena", "Variável", "Lista"], certo: 0 },
          { p: "Para o “toc” aparecer 3 vezes, uso o:", opcoes: ["repita", "se", "senão"], certo: 0 },
          { p: "Mudando a variável heroi, o nome:", opcoes: ["Muda em todas as cenas", "Não muda", "Some"], certo: 0 }],
        explicacao: "Linha = cena; repita = repetir; variável = o nome em todas as cenas." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 Troque o herói",
        enunciado: "<p>A história do Tito está pronta. Faça a história ser da <strong>Nina</strong> mudando <strong>um bloco só</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita"],
        inicio: historiaTito("Tito"),
        esperado: ["Era uma vez Nina", "toc", "toc", "toc", "Nina abriu a porta"],
        solucao: historiaTito("Nina"),
        dicas: ["Só o primeiro bloco (definir heroi) precisa mudar."],
        explicacao: "A variável heroi aparece em todas as cenas: mudando ela, a história toda muda." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "🔴 A contagem do foguete",
        enunciado: "<p>Na história, o foguete decola. Com <strong>n = 3</strong> e o <strong>repita</strong>, mostre:</p><p><strong>3</strong><br><strong>2</strong><br><strong>1</strong><br><strong>Decolar!</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita"],
        inicio: [["definir", "n", 3]],
        esperado: ["3", "2", "1", "Decolar!"], exige: ["repita", "variavel"],
        solucao: [["definir", "n", 3], ["repita", 3, [["mostrar", v("n")], ["mudar", "n", -1]]], ["mostrar", "Decolar!"]],
        dicas: ["Dentro do repita: primeiro mostrar n, depois alterar n por −1.", "O “Decolar!” fica embaixo do repita, fora dele."],
        explicacao: "Mostra 3, 2, 1 (n diminui 1 a cada volta) e depois Decolar!." }
    ],
    vf: [
      { v: true, why: "Linha = cena." },
      { v: true, why: "É o que o repita faz." },
      { v: true, why: "É a vantagem da variável." },
      { v: true, why: "Começo, meio e fim." },
      { v: false, corrigir: { trecho: "não pode ter repetição", opcoes: ["não pode ter repetição", "pode ter repetição"], certo: "pode ter repetição" }, why: "Como o toc, toc, toc." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Sequência", perguntas: [{ p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima"], certo: 0 }, { p: "Bloco solto:", opcoes: ["Não roda", "Roda primeiro"], certo: 0 }], explicacao: "De cima para baixo; bloco solto não roda." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Repita e se", perguntas: [{ p: "repita 4 vezes: mostrar “oi” mostra “oi”:", opcoes: ["4 vezes", "1 vez"], certo: 0 }, { p: "O se escolhe o caminho pela:", opcoes: ["Condição", "Cor do bloco"], certo: 0 }], explicacao: "4 vezes; pela condição." },
      { tipo: "relembre", de: "m3" },
      { tipo: "tabela", de: "m3", titulo: "M3 · Variável", dicas: ["Releia a tabela Exemplo passo a passo."], colunas: ["Bloco", "pontos"], linhas: [["definir pontos para 0", { r: "0", tipo: "num" }], ["alterar pontos por 5", { r: "5", tipo: "num" }], ["alterar pontos por 3", { r: "8", tipo: "num" }]], explicacao: "0 → 5 → 8." },
      { tipo: "relembre", de: "m4" },
      { tipo: "ligar", de: "m4", titulo: "M4 · Meu bloco", pares: [{ a: "Chamar", b: "Executar o que está dentro do bloco" }, { a: "Parâmetro", b: "O valor que muda" }], explicacao: "Chamar e parâmetro." },
      { tipo: "relembre", de: "m5" },
      { tipo: "classificar", de: "m5", titulo: "M5 · Tipos de dados", categorias: [{ id: "N", rot: "Número" }, { id: "T", rot: "Texto" }, { id: "L", rot: "Lógico" }], itens: [{ t: "7", c: "N" }, { t: "“Leo”", c: "T" }, { t: "verdadeiro", c: "L" }], explicacao: "Número, texto e lógico." },
      { tipo: "relembre", de: "m6" },
      { tipo: "ordenar", de: "m6", titulo: "M6 · O projeto", itens: ["Planejar", "Montar", "Testar", "Melhorar"], explicacao: "Planejar, montar, testar, melhorar." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Depurar", perguntas: [{ p: "Bug é:", opcoes: ["Um erro no programa", "Um bloco novo"], certo: 0 }], explicacao: "Erro no programa." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · História", perguntas: [{ p: "Cada linha da tela é uma:", opcoes: ["Cena", "Lista"], certo: 0 }], explicacao: "Cena." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "🟡 Simulado: repita, variável e se",
        enunciado: "<p>Com <strong>vidas = 3</strong>: <strong>repita 2 vezes</strong> alterar vidas por −1 e mostrar vidas. Depois, <strong>se vidas = 1</strong>, mostrar <strong>Cuidado!</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
        inicio: [["definir", "vidas", 3]],
        esperado: ["2", "1", "Cuidado!"], exige: ["repita", "se"],
        solucao: [["definir", "vidas", 3], ["repita", 2, [["mudar", "vidas", -1], ["mostrar", v("vidas")]]], ["se", ["=", v("vidas"), 1], [["mostrar", "Cuidado!"]]]],
        dicas: ["Dentro do repita: alterar vidas por −1 e mostrar vidas. O se fica embaixo, fora."],
        explicacao: "3 → 2 → 1; como vidas = 1, aparece Cuidado!." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["BLOCO", "REPITA", "VARIAVEL", "LISTA", "EVENTO", "BUG"],
        pistas: ["Peça do editor", "Faz várias vezes", "Caixinha com nome (sem acento)", "Vários valores em ordem", "Algo que acontece, como apertar um botão", "Erro no programa"], tam: 10,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-3bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Programa", [{ p: "O computador executa os blocos:", opcoes: ["De cima para baixo", "De baixo para cima", "Em qualquer ordem"], certo: 0 }, { p: "Programa é:", opcoes: ["Um algoritmo numa linguagem que o computador entende", "Um mouse", "Um desenho"], certo: 0 }]), pega("m1"),
    Q("m2", "Repita e se", [{ p: "repita 3 vezes: mostrar “pula” · mostrar “fim”. “fim” aparece:", opcoes: ["1 vez", "3 vezes", "Nenhuma"], certo: 0 }, { p: "10 > 5 é:", opcoes: ["Verdadeiro", "Falso", "Um texto"], certo: 0 }]), pega("m2"),
    Q("m3", "Variáveis", [{ p: "definir pontos para 0 · alterar pontos por 5 · alterar pontos por 3. pontos vale:", opcoes: ["8", "3", "0"], certo: 0 }, { p: "Variável é:", opcoes: ["Uma caixinha com nome que guarda um valor", "Um erro", "Uma lista de cores"], certo: 0 }]), pega("m3"),
    Q("m4", "Meu bloco", [{ p: "O valor que muda a cada vez que o bloco é usado é o:", opcoes: ["Parâmetro", "Bug", "Evento"], certo: 0 }, { p: "Para executar o meu bloco, eu:", opcoes: ["Chamo o bloco", "Apago o bloco", "Desligo o computador"], certo: 0 }]), pega("m4"),
    Q("m5", "Listas", [{ p: "Na lista [maçã, uva, caju], o item 3 é:", opcoes: ["caju", "maçã", "uva"], certo: 0 }, { p: "verdadeiro e falso são do tipo:", opcoes: ["Lógico", "Texto", "Lista"], certo: 0 }]), pega("m5"),
    Q("m6", "Joguinho", [{ p: "Apertar um botão é um:", opcoes: ["Evento", "Bug", "Parâmetro"], certo: 0 }, { p: "A primeira etapa do projeto é:", opcoes: ["Planejar", "Testar", "Melhorar"], certo: 0 }]), pega("m6"),
    Q("m7", "Lógica", [{ p: "Achar e consertar o erro é:", opcoes: ["Depurar", "Planejar", "Juntar"], certo: 0 }, { p: "Para a nota 5 passar, a condição é:", opcoes: ["nota ≥ 5", "nota > 5", "nota < 5"], certo: 0 }]), pega("m7"),
    Q("m8", "História", [{ p: "O roteiro tem:", opcoes: ["Começo, meio e fim", "Só o fim", "Só números"], certo: 0 }, { p: "Para o nome mudar em todas as cenas, uso uma:", opcoes: ["Variável", "Lista vazia", "Comparação"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 3: 3º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (desafio de blocos de uma situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 desafios-jogo no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-3bim"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const blk = (titulo, enun, caixa, esperado, solucao, dicas, explicacao, extra) => Object.assign({ tipo: "blocos", titulo, enunciado: enun, caixa, esperado, solucao, dicas, explicacao }, extra || {});
  const tela = linhas => `<p>${linhas.map(x => `<b>${x}</b>`).join("<br>")}</p>`;

  /* ---------- M1 · meu primeiro programa ---------- */
  A.m1.gancho = { html: "<p>🎂 O robô da festa devia dizer <b>“Parabéns!”</b> e depois <b>“Hora do bolo!”</b>. Mas ele disse ao contrário, e todo mundo riu.</p><p>🤔 Por que o robô trocou? Ele entende o que a gente quer, ou só faz exatamente o que está escrito?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", "Começou o 3º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉",
    ["Um <b>programa</b> é…", ["Um algoritmo escrito numa linguagem que o computador entende", "Um computador novo", "Uma pasta de fotos"], "Programa = <b>algoritmo</b> numa linguagem que o computador entende."],
    ["O computador lê os blocos…", ["De cima para baixo, um de cada vez", "De baixo para cima", "Todos ao mesmo tempo, em qualquer ordem"], "De <b>cima para baixo</b>, um de cada vez: é a sequência."],
    ["A ordem dos passos importa?", ["Sim: trocar a ordem muda o resultado", "Não, nunca", "Só no celular"], "A ordem importa: “Bom dia” e depois “Tchau” é diferente do contrário."])];
  A.m1.aplicar = [
    blk("🛠️ Na vida real: o aviso no telão da escola", `<p>Monte o aviso que vai aparecer no telão da escola, nesta ordem:</p>${tela(["Atenção, turma!", "Amanhã tem passeio.", "Tragam lanche."])}<p>Arraste 3 blocos <b>mostrar na tela</b> e encaixe um embaixo do outro.</p>`,
      ["mostrar", "texto"], ["Atenção, turma!", "Amanhã tem passeio.", "Tragam lanche."], [["mostrar", "Atenção, turma!"], ["mostrar", "Amanhã tem passeio."], ["mostrar", "Tragam lanche."]],
      ["Encaixe os blocos: eles grudam um embaixo do outro.", "Clique no texto do bloco para escrever."], "O computador mostrou as frases na ordem dos blocos, de cima para baixo: é a sequência."),
    VIDA(
      ["Um bloco ficou <b>solto</b>, sem encaixar no programa. O que acontece com ele?", ["Não roda: o computador não executa ele", "Roda primeiro", "Roda duas vezes"], "O bloco solto <b>não roda</b>."],
      ["Para ver o resultado do programa, você aperta…", ["▶️ Rodar o programa", "O botão de desligar", "A gaveta 🔤 Texto"], "Aperte <b>▶️ Rodar o programa</b> e veja a 📺 Tela do programa."],
      ["Na receita de bolo, trocar a ordem dos passos…", ["Pode estragar o resultado", "Não muda nada", "Deixa o bolo maior"], "A <b>ordem importa</b>, na receita e no programa."])
  ];
  mais("m1", "desafio",
    blk("🥤 Conserte a receita do suco", `<p>Os passos da receita estão fora de ordem. Arraste os blocos para ficar assim:</p>${tela(["Pegar o copo", "Colocar o suco em pó", "Encher de água", "Mexer"])}`,
      ["mostrar", "texto"], ["Pegar o copo", "Colocar o suco em pó", "Encher de água", "Mexer"], [["mostrar", "Pegar o copo"], ["mostrar", "Colocar o suco em pó"], ["mostrar", "Encher de água"], ["mostrar", "Mexer"]],
      ["Puxe o “Pegar o copo” para cima de todos.", "Depois confira cada passo: o que vem antes do quê?"], "Na sequência, a ordem dos blocos é a ordem em que as coisas acontecem.",
      { inicio: [["mostrar", "Mexer"], ["mostrar", "Pegar o copo"], ["mostrar", "Encher de água"], ["mostrar", "Colocar o suco em pó"]] }));
  mais("m1", "turbo",
    blk("🌅 A rotina da manhã em 5 blocos", `<p>Monte a rotina da manhã do robô Bit, do jeito que ela acontece:</p>${tela(["Acordar", "Escovar os dentes", "Tomar café", "Pegar a mochila", "Ir para a escola"])}`,
      ["mostrar", "texto"], ["Acordar", "Escovar os dentes", "Tomar café", "Pegar a mochila", "Ir para a escola"],
      [["mostrar", "Acordar"], ["mostrar", "Escovar os dentes"], ["mostrar", "Tomar café"], ["mostrar", "Pegar a mochila"], ["mostrar", "Ir para a escola"]],
      ["São 5 blocos mostrar, um embaixo do outro.", "Escreva cada frase igualzinho, com as letras maiúsculas no lugar certo."], "5 blocos, 5 linhas na tela, na ordem certa: o seu programa contou a manhã do Bit."));

  /* ---------- M2 · repetição e seleção ---------- */
  A.m2.gancho = { html: "<p>⚽ O professor de Educação Física disse: “Façam <b>3 polichinelos</b>! E, <b>se</b> estiver chovendo, o treino é na sala; <b>senão</b>, é na quadra.”</p><p>🤔 Como mandar o computador <b>repetir</b> sem escrever 3 vezes? E como ele <b>escolhe</b> entre a sala e a quadra?</p>" };
  A.m2.aplicar = [
    blk("🛠️ Na vida real: o treino de hoje", `<p>Hoje <b>não</b> está chovendo (a variável <b>chovendo</b> já é <b>falso</b>). Monte: <b>repita 3 vezes</b> mostrar <b>polichinelo</b>; depois, <b>se chovendo</b>, mostrar <b>treino na sala</b>; <b>senão</b>, mostrar <b>treino na quadra</b>. A tela deve mostrar:</p>${tela(["polichinelo", "polichinelo", "polichinelo", "treino na quadra"])}`,
      ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"], ["polichinelo", "polichinelo", "polichinelo", "treino na quadra"],
      [["definir", "chovendo", false], ["repita", 3, [["mostrar", "polichinelo"]]], ["se", v("chovendo"), [["mostrar", "treino na sala"]], [["mostrar", "treino na quadra"]]]],
      ["O se fica embaixo do repita (fora dele).", "Na condição do se, encaixe o bloco redondo chovendo."], "O repita fez os polichinelos; o se escolheu o caminho: como chovendo é falso, foi o senão.",
      { inicio: [["definir", "chovendo", false]], exige: ["repita", "se"] }),
    VIDA(
      ["O “mostrar fim” está <b>dentro</b> do repita 3 vezes. Quantas vezes aparece “fim”?", ["3 vezes", "1 vez", "Nenhuma"], "Dentro do repita, aparece <b>3 vezes</b>; fora (embaixo), aparece 1 vez."],
      ["A comparação 10 &gt; 5 é…", ["Verdadeira: 10 é maior que 5", "Falsa", "Um texto"], "10 é maior que 5: <b>verdadeiro</b>."],
      ["No jogo: <b>se</b> a vida acabar, aparece “Fim de jogo”. Isso é uma…", ["Seleção", "Repetição", "Sequência só"], "Escolher um caminho pela condição é <b>seleção</b>."])
  ];
  mais("m2", "desafio",
    blk("🏀 Ganhou a medalha?", `<p>Quem fizer <b>10 pontos ou mais</b> ganha medalha. A Bia fez <b>8</b> (a variável <b>pontos</b> já vale 8). Use <b>se pontos ≥ 10</b>: mostrar <b>Ganhou a medalha!</b>; <b>senão</b>, mostrar <b>Quase lá!</b>.</p>${tela(["Quase lá!"])}`,
      ["mostrar", "texto", "numero", "variavel", "se", "comparar"], ["Quase lá!"],
      [["definir", "pontos", 8], ["se", [">=", v("pontos"), 10], [["mostrar", "Ganhou a medalha!"]], [["mostrar", "Quase lá!"]]]],
      ["Na gaveta ⚖️ Comparar, pegue o bloco de comparar e escolha ≥.", "Encaixe pontos de um lado e o número 10 do outro."], "8 ≥ 10 é falso: o programa foi para o senão. Teste trocando para 12: aparece “Ganhou a medalha!”.",
      { inicio: [["definir", "pontos", 8]], exige: ["se", "comparar"] }));
  mais("m2", "turbo",
    blk("🥁 A batida da bateria", `<p>A batida é <b>tum</b> e <b>tá</b>, repetida 3 vezes, e no fim <b>fim!</b> uma vez só:</p>${tela(["tum", "tá", "tum", "tá", "tum", "tá", "fim!"])}`,
      ["mostrar", "texto", "numero", "repita"], ["tum", "tá", "tum", "tá", "tum", "tá", "fim!"],
      [["repita", 3, [["mostrar", "tum"], ["mostrar", "tá"]]], ["mostrar", "fim!"]],
      ["Dentro do repita vão DOIS blocos: tum e tá.", "O fim! fica embaixo do repita, fora dele."], "Dá para repetir um grupo de blocos: o repita fez tum-tá 3 vezes e o fim! ficou fora.",
      { exige: ["repita"] }));

  /* ---------- M3 · variáveis ---------- */
  A.m3.gancho = { html: "<p>🚌 O cartão do ônibus da Bia começa com <b>10 viagens</b>. A cada viagem, o leitor do ônibus tira 1.</p><p>🤔 Como o leitor “lembra” quantas viagens ainda restam? Onde esse número fica guardado?</p>" };
  A.m3.aplicar = [
    blk("🛠️ Na vida real: o cartão do ônibus", `<p>A variável <b>viagens</b> começa em 10. A Bia viajou <b>3 vezes</b>. Use o <b>repita 3 vezes</b> com <b>alterar viagens por -1</b> e, no fim, mostre o saldo com “criar texto com”:</p>${tela(["Viagens: 7"])}`,
      ["mostrar", "texto", "numero", "variavel", "repita"], ["Viagens: 7"],
      [["definir", "viagens", 10], ["repita", 3, [["mudar", "viagens", -1]]], ["mostrar", ["juntar", "Viagens: ", v("viagens")]]],
      ["“alterar viagens por -1” tira 1 da caixinha.", "O mostrar fica embaixo do repita: só no fim."], "A variável guardou o saldo: 10 → 9 → 8 → 7. É assim que o leitor do ônibus funciona.",
      { inicio: [["definir", "viagens", 10]], exige: ["variavel", "repita"] }),
    VIDA(
      ["O placar de um jogo, que muda a cada gol, é uma…", ["Variável", "Repetição", "Gaveta"], "O placar é uma <b>variável</b>: uma caixinha com nome que guarda um valor que muda."],
      ["definir pontos para 0 → alterar pontos por 5 → alterar pontos por 3. Quanto vale pontos?", ["8", "5", "3"], "0 + 5 + 3 = <b>8</b>."],
      ["Uma variável pode guardar…", ["Um número ou um texto", "Só números", "Só fotos"], "Pode guardar um <b>número</b> (8) ou um <b>texto</b> (“Ana”)."])
  ];
  mais("m3", "desafio",
    blk("🐷 O cofrinho", `<p>O cofrinho tem <b>5</b> moedas. A Lia colocou <b>3</b> e depois tirou <b>2</b> para comprar um pirulito. Use <b>alterar moedas por</b> duas vezes e mostre:</p>${tela(["Moedas: 6"])}`,
      ["mostrar", "texto", "numero", "variavel"], ["Moedas: 6"],
      [["definir", "moedas", 5], ["mudar", "moedas", 3], ["mudar", "moedas", -2], ["mostrar", ["juntar", "Moedas: ", v("moedas")]]],
      ["Colocar 3 = alterar moedas por 3. Tirar 2 = alterar moedas por -2."], "5 + 3 − 2 = 6. O “alterar por” soma ao que já estava (com número negativo, tira).",
      { inicio: [["definir", "moedas", 5]], exige: ["variavel"] }));
  mais("m3", "turbo",
    blk("🎲 De quem é a vez?", `<p>Uma variável também guarda <b>texto</b>. Use a variável <b>jogador</b>: primeiro “Ana”, mostre a vez; depois troque para “Leo” e mostre de novo:</p>${tela(["Vez de Ana", "Vez de Leo"])}`,
      ["mostrar", "texto", "variavel"], ["Vez de Ana", "Vez de Leo"],
      [["definir", "jogador", "Ana"], ["mostrar", ["juntar", "Vez de ", v("jogador")]], ["definir", "jogador", "Leo"], ["mostrar", ["juntar", "Vez de ", v("jogador")]]],
      ["O mesmo bloco “mostrar criar texto com ‘Vez de ’ e jogador” aparece duas vezes.", "Entre eles, “definir jogador para Leo”."], "A caixinha jogador trocou de valor: primeiro Ana, depois Leo. O mesmo bloco mostrou nomes diferentes.",
      { exige: ["variavel"] }));

  /* ---------- M4 · um bloco para muitos casos ---------- */
  A.m4.gancho = { html: "<p>🎤 Na festa junina, o apresentador anuncia cada quadrilha com a mesma frase: “Palmas para a turma 6º A!”, “Palmas para a turma 6º B!”…</p><p>🤔 Se fosse um programa, seria preciso montar a frase de novo a cada turma? Ou dá para criar um bloco só e mudar só a turma?</p>" };
  A.m4.aplicar = [
    blk("🛠️ Na vida real: o apresentador da festa junina", `<p>Crie o seu bloco <b>anunciar</b> (gaveta 🧩 Meus blocos) que mostra “Palmas para a turma ” + <b>turma</b> + “!”. Depois: definir turma para “6º A” e chamar anunciar; definir turma para “6º B” e chamar anunciar.</p>${tela(["Palmas para a turma 6º A!", "Palmas para a turma 6º B!"])}`,
      ["mostrar", "texto", "variavel", "funcao"], ["Palmas para a turma 6º A!", "Palmas para a turma 6º B!"],
      [["funcao", "anunciar", [["mostrar", ["juntar", "Palmas para a turma ", v("turma"), "!"]]]], ["definir", "turma", "6º A"], ["chamar", "anunciar"], ["definir", "turma", "6º B"], ["chamar", "anunciar"]],
      ["No “criar texto com”, use a engrenagem para ter 3 pedaços.", "O parâmetro é a variável turma: ela muda antes de cada chamada."], "Um bloco só, chamado duas vezes; só o parâmetro (turma) mudou.",
      { exige: ["funcao"] }),
    VIDA(
      ["No bloco que mostra “Olá, ” + nome, o valor que muda a cada vez (nome) é o…", ["Parâmetro", "Gaveta", "Bloco solto"], "O valor que muda é o <b>parâmetro</b>."],
      ["O botão “curtir” é o mesmo em todos os posts; só muda o post. Isso lembra…", ["Um bloco para muitos casos", "Um bloco solto", "Uma sequência sem blocos"], "É a ideia de <b>reaproveitar</b> um bloco: o mesmo bloco, com parâmetros diferentes."],
      ["A saudação precisa mudar. Com o seu próprio bloco, você muda…", ["Em um lugar só", "Em todos os lugares, um por um", "Em nenhum lugar"], "Muda <b>em um lugar só</b>: dentro do bloco."])
  ];
  mais("m4", "desafio",
    blk("🍊 A receita de suco para muitas frutas", `<p>Crie o bloco <b>suco</b> que mostra “Suco de ” + <b>fruta</b>. Chame para <b>laranja</b>, <b>caju</b> e <b>açaí</b>:</p>${tela(["Suco de laranja", "Suco de caju", "Suco de açaí"])}`,
      ["mostrar", "texto", "variavel", "funcao"], ["Suco de laranja", "Suco de caju", "Suco de açaí"],
      [["funcao", "suco", [["mostrar", ["juntar", "Suco de ", v("fruta")]]]], ["definir", "fruta", "laranja"], ["chamar", "suco"], ["definir", "fruta", "caju"], ["chamar", "suco"], ["definir", "fruta", "açaí"], ["chamar", "suco"]],
      ["Antes de cada “suco”, defina a fruta."], "A receita é a mesma; a fruta é o parâmetro.", { exige: ["funcao"] }));
  mais("m4", "turbo",
    blk("🏅 O pódio com o seu bloco", `<p>Crie o bloco <b>medalha</b> que mostra duas linhas: “Parabéns, ” + <b>nome</b> + “!” e “Você subiu no pódio!”. Chame para <b>Lia</b> e <b>Rafa</b>:</p>${tela(["Parabéns, Lia!", "Você subiu no pódio!", "Parabéns, Rafa!", "Você subiu no pódio!"])}`,
      ["mostrar", "texto", "variavel", "funcao"], ["Parabéns, Lia!", "Você subiu no pódio!", "Parabéns, Rafa!", "Você subiu no pódio!"],
      [["funcao", "medalha", [["mostrar", ["juntar", "Parabéns, ", v("nome"), "!"]], ["mostrar", "Você subiu no pódio!"]]], ["definir", "nome", "Lia"], ["chamar", "medalha"], ["definir", "nome", "Rafa"], ["chamar", "medalha"]],
      ["Dentro do bloco medalha vão dois mostrar.", "Cada chamada mostra as duas linhas."], "Com o seu bloco, 4 linhas saíram de 2 chamadas. Se precisar mudar a frase, muda num lugar só.", { exige: ["funcao"] }));

  /* ---------- M5 · listas e tipos de dados ---------- */
  A.m5.gancho = { html: "<p>🎵 A playlist do Davi tem 3 músicas. Ele quer saber qual é a <b>2ª</b> e quantas músicas tem ao todo.</p><p>🤔 Como um programa guarda várias músicas numa variável só? E como ele acha a música pela posição?</p>" };
  A.m5.aplicar = [
    blk("🛠️ Na vida real: o cardápio da cantina", `<p>A lista <b>lanches</b> já tem pão de queijo, bolo e suco. Mostre o lanche da <b>posição 2</b> e, depois, quantas opções existem (com “criar texto com” e <b>tamanho de</b>):</p>${tela(["bolo", "Opções: 3"])}`,
      ["mostrar", "texto", "numero", "variavel", "lista"], ["bolo", "Opções: 3"],
      [["definir", "lanches", L("pão de queijo", "bolo", "suco")], ["mostrar", ["item", v("lanches"), 2]], ["mostrar", ["juntar", "Opções: ", ["tamanho", v("lanches")]]]],
      ["Use “em lista lanches obter nº 2”.", "Depois, “tamanho de lanches” dentro do criar texto com."], "O item 2 é bolo, e a lista tem 3 itens (tamanho 3).",
      { inicio: [["definir", "lanches", L("pão de queijo", "bolo", "suco")]], exige: ["lista"] }),
    VIDA(
      ["“verdadeiro” e “falso” são de qual tipo de dado?", ["Lógico", "Número", "Lista"], "Verdadeiro e falso são do tipo <b>lógico</b>: respondem condições."],
      ["Na lista frutas = [maçã, uva, caju], qual é o <b>item 1</b>?", ["maçã", "caju", "uva"], "A primeira posição é a 1: <b>maçã</b>."],
      ["O tamanho da lista [maçã, uva, caju] é…", ["3", "1", "5"], "Ela tem 3 itens: tamanho <b>3</b>."])
  ];
  mais("m5", "desafio",
    blk("🚌 A chamada da excursão", `<p>A lista <b>turma</b> já tem Ana, Bia, Caio e Davi. Use o <b>para cada</b> para mostrar uma linha por aluno:</p>${tela(["Ana está no ônibus", "Bia está no ônibus", "Caio está no ônibus", "Davi está no ônibus"])}`,
      ["mostrar", "texto", "variavel", "lista", "paracada"], ["Ana está no ônibus", "Bia está no ônibus", "Caio está no ônibus", "Davi está no ônibus"],
      [["definir", "turma", L("Ana", "Bia", "Caio", "Davi")], ["paracada", "a", v("turma"), [["mostrar", ["juntar", v("a"), " está no ônibus"]]]]],
      ["Dentro do para cada, um mostrar com “criar texto com”: o item e “ está no ônibus”."], "O para cada fez o mesmo bloco para cada item da lista, um de cada vez.",
      { inicio: [["definir", "turma", L("Ana", "Bia", "Caio", "Davi")]], exige: ["paracada"] }));
  mais("m5", "turbo",
    blk("🏆 Os pontos da gincana", `<p>A equipe fez <b>4</b>, <b>6</b> e <b>5</b> pontos nas 3 provas (lista <b>provas</b>). Some tudo com o <b>para cada</b> e a variável <b>total</b>:</p>${tela(["Total: 15"])}`,
      ["mostrar", "texto", "numero", "variavel", "lista", "paracada"], ["Total: 15"],
      [["definir", "provas", L(4, 6, 5)], ["definir", "total", 0], ["paracada", "p", v("provas"), [["mudar", "total", v("p")]]], ["mostrar", ["juntar", "Total: ", v("total")]]],
      ["total começa em 0.", "Dentro do para cada: alterar total pelo item.", "O mostrar fica fora do para cada, no fim."], "0 + 4 + 6 + 5 = 15. A lista e a variável trabalharam juntas.",
      { inicio: [["definir", "provas", L(4, 6, 5)]], exige: ["paracada", "variavel"] }));

  /* ---------- M6 · projeto: meu joguinho ---------- */
  A.m6.gancho = { html: "<p>🎮 No joguinho do celular, cada vez que você toca na moeda, ganha ponto. Se tocar na bomba, perde.</p><p>🤔 Como o jogo sabe a <b>hora</b> de mudar os pontos? Ele fica esperando você tocar?</p>" };
  A.m6.aplicar = [
    blk("🛠️ Na vida real: o placar do basquete", `<p>No placar eletrônico do basquete, a <b>🏀 cesta</b> vale 2 pontos e o <b>🎯 lance livre</b> vale 1. A variável <b>pontos</b> começa em 0. Faça um <b>⚡ quando</b> para cada botão: alterar pontos e mostrar “Pontos: ” + pontos. O portal vai apertar: cesta, lance livre, cesta.</p>${tela(["Pontos: 2", "Pontos: 3", "Pontos: 5"])}`,
      ["mostrar", "texto", "numero", "variavel", "evento"], ["Pontos: 2", "Pontos: 3", "Pontos: 5"],
      [["definir", "pontos", 0], ["quando", "cesta", [["mudar", "pontos", 2], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]]], ["quando", "livre", [["mudar", "pontos", 1], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]]]],
      ["Dois blocos “⚡ quando”: um para a cesta, outro para o lance livre.", "Cesta: alterar por 2. Lance livre: alterar por 1."], "Cada botão é um evento; o bloco “quando” diz o que fazer quando ele acontece.",
      { eventos: [["🏀 cesta", "cesta"], ["🎯 lance livre", "livre"]], disparos: ["cesta", "livre", "cesta"], inicio: [["definir", "pontos", 0]], exige: ["evento"] }),
    VIDA(
      ["Apertar um botão do controle remoto é um…", ["Evento", "Gaveta", "Item de lista"], "É algo que acontece e o programa percebe: um <b>evento</b>."],
      ["Qual é a <b>primeira</b> etapa do projeto?", ["Planejar: escrever as regras (evento → ação)", "Testar", "Melhorar"], "1. Planejar; 2. Montar; 3. Testar; 4. Melhorar."],
      ["Depois de montar, para conferir se os pontos estão certos, você…", ["Testa: roda e confere", "Apaga tudo", "Desliga o computador"], "Testar é <b>rodar e conferir</b>."])
  ];
  mais("m6", "desafio",
    blk("🦘 Pular e agachar", `<p>Faça o personagem reagir a dois botões: <b>⬆️ pular</b> mostra <b>Pulou!</b> e <b>⬇️ agachar</b> mostra <b>Agachou!</b>. O portal vai apertar: pular, agachar, pular.</p>${tela(["Pulou!", "Agachou!", "Pulou!"])}`,
      ["mostrar", "texto", "evento"], ["Pulou!", "Agachou!", "Pulou!"],
      [["quando", "pular", [["mostrar", "Pulou!"]]], ["quando", "agachar", [["mostrar", "Agachou!"]]]],
      ["Pegue dois “⚡ quando” e escolha um botão em cada."], "Cada evento tem a sua ação. O “quando pular” rodou duas vezes porque o botão foi apertado duas vezes.",
      { eventos: [["⬆️ pular", "pular"], ["⬇️ agachar", "agachar"]], disparos: ["pular", "agachar", "pular"], exige: ["evento"] }));
  mais("m6", "turbo",
    blk("💣 As vidas e o fim de jogo", `<p>A variável <b>vidas</b> começa em 3. No <b>⚡ quando 💣 bomba</b>: alterar vidas por -1, mostrar “Vidas: ” + vidas e, <b>se vidas = 0</b>, mostrar <b>Fim de jogo</b>. O portal vai apertar a bomba 3 vezes.</p>${tela(["Vidas: 2", "Vidas: 1", "Vidas: 0", "Fim de jogo"])}`,
      ["mostrar", "texto", "numero", "variavel", "se", "comparar", "evento"], ["Vidas: 2", "Vidas: 1", "Vidas: 0", "Fim de jogo"],
      [["definir", "vidas", 3], ["quando", "bomba", [["mudar", "vidas", -1], ["mostrar", ["juntar", "Vidas: ", v("vidas")]], ["se", ["=", v("vidas"), 0], [["mostrar", "Fim de jogo"]]]]]],
      ["Tudo vai dentro do “quando bomba”, nesta ordem: alterar, mostrar, se.", "No se, use a comparação vidas = 0."], "O evento, a variável e a seleção juntos: na 3ª bomba, as vidas chegam a 0 e o jogo acaba.",
      { eventos: [["💣 bomba", "bomba"]], disparos: ["bomba", "bomba", "bomba"], inicio: [["definir", "vidas", 3]], exige: ["evento", "se"] }));

  /* ---------- M7 · desafios de lógica ---------- */
  A.m7.gancho = { html: "<p>🔍 Antes de rodar o programa, a Ana disse: “vai aparecer 8!”. O Leo disse: “vai aparecer 6!”. Só um acertou.</p><p>🤔 Dá para saber o resultado <b>sem rodar</b>? E, se o programa estiver errado, como achar o bug?</p>" };
  A.m7.aplicar = [
    blk("🛠️ Na vida real: o brinde da loja", `<p>A loja dá brinde para compras de <b>100 reais ou mais</b>. A compra foi de <b>100</b>, mas o programa mostrou “Sem brinde”. Ache o bug (comparação errada) e conserte:</p>${tela(["Ganhou brinde!"])}`,
      ["mostrar", "texto", "numero", "variavel", "se", "comparar"], ["Ganhou brinde!"],
      [["definir", "compras", 100], ["se", [">=", v("compras"), 100], [["mostrar", "Ganhou brinde!"]], [["mostrar", "Sem brinde"]]]],
      ["“100 ou mais” inclui o 100. O sinal &gt; (maior que) deixa o 100 de fora.", "Troque para ≥."], "Era uma comparação errada: 100 &gt; 100 é falso, mas 100 ≥ 100 é verdadeiro.",
      { inicio: [["definir", "compras", 100], ["se", [">", v("compras"), 100], [["mostrar", "Ganhou brinde!"]], [["mostrar", "Sem brinde"]]]], exige: ["se"] }),
    VIDA(
      ["definir x para 2 → repita 3 vezes: alterar x por 2 → mostrar x. O que aparece?", ["8", "6", "2"], "Rastreando: 2 → 4 → 6 → <b>8</b>."],
      ["O “fim” apareceu 3 vezes, mas era para aparecer 1. Qual é o erro provável?", ["O “fim” está dentro do repita", "Falta um bloco mostrar", "A ordem está certa"], "Erro <b>fora do lugar</b>: arraste o “fim” para fora do repita."],
      ["Achar e consertar o erro do programa se chama…", ["Depurar", "Executar", "Encaixar"], "É <b>depurar</b>."])
  ];
  mais("m7", "desafio",
    blk("🐞 Dois bugs no recado", `<p>O recado devia ser: <b>Oi!</b>, depois <b>Vamos jogar?</b> 3 vezes e, por fim, <b>Tchau!</b>. Tem um erro de ordem e um de número. Conserte um de cada vez:</p>${tela(["Oi!", "Vamos jogar?", "Vamos jogar?", "Vamos jogar?", "Tchau!"])}`,
      ["mostrar", "texto", "numero", "repita"], ["Oi!", "Vamos jogar?", "Vamos jogar?", "Vamos jogar?", "Tchau!"],
      [["mostrar", "Oi!"], ["repita", 3, [["mostrar", "Vamos jogar?"]]], ["mostrar", "Tchau!"]],
      ["Ordem: o “Tchau!” tem de ser o último.", "Número: quantas vezes o repita deve repetir?"], "Ordem trocada e número errado: conserte uma coisa de cada vez e teste depois de cada conserto.",
      { inicio: [["mostrar", "Tchau!"], ["mostrar", "Oi!"], ["repita", 2, [["mostrar", "Vamos jogar?"]]]], exige: ["repita"] }));
  mais("m7", "turbo",
    blk("🔴 O bug da contagem", `<p>O programa devia contar <b>1, 2, 3</b> e mostrar <b>Pronto!</b> uma vez só. Rastreie o valor de <b>n</b>, ache o bloco fora do lugar e conserte:</p>${tela(["1", "2", "3", "Pronto!"])}`,
      ["mostrar", "texto", "numero", "variavel", "repita"], ["1", "2", "3", "Pronto!"],
      [["definir", "n", 0], ["repita", 3, [["mudar", "n", 1], ["mostrar", v("n")]]], ["mostrar", "Pronto!"]],
      ["“Pronto!” está aparecendo dentro da repetição.", "Arraste o mostrar Pronto! para fora, embaixo do repita."], "Bloco fora do lugar: dentro do repita, o Pronto! aparecia a cada volta.",
      { inicio: [["definir", "n", 0], ["repita", 3, [["mudar", "n", 1], ["mostrar", v("n")], ["mostrar", "Pronto!"]]]], exige: ["repita"] }));

  /* ---------- M8 · minha história animada ---------- */
  A.m8.gancho = { html: "<p>📚 O Caio escreveu uma história com o nome do personagem, <b>Tito</b>, em 10 cenas. No fim, resolveu trocar o nome para <b>Nina</b>.</p><p>🤔 Ele vai ter que trocar o nome 10 vezes? Ou existe um jeito de trocar em um lugar só?</p>" };
  A.m8.aplicar = [
    blk("🛠️ Na vida real: a história da Nina", `<p>Use a variável <b>heroi</b> com o valor <b>Nina</b> e monte a história: começo, meio (3 batidas na porta, com o repita) e fim:</p>${tela(["Era uma vez Nina", "toc", "toc", "toc", "Nina abriu a porta"])}`,
      ["mostrar", "texto", "numero", "variavel", "repita"], ["Era uma vez Nina", "toc", "toc", "toc", "Nina abriu a porta"],
      [["definir", "heroi", "Nina"], ["mostrar", ["juntar", "Era uma vez ", v("heroi")]], ["repita", 3, [["mostrar", "toc"]]], ["mostrar", ["juntar", v("heroi"), " abriu a porta"]]],
      ["Use “criar texto com” para juntar o nome com o resto da frase.", "As batidas vão num repita 3 vezes."], "A variável heroi aparece em várias cenas: para trocar o nome, basta trocar em um lugar só.",
      { exige: ["variavel", "repita"] }),
    VIDA(
      ["Toda história tem…", ["Começo, meio e fim", "Só fim", "Só começo"], "O roteiro tem <b>começo</b>, <b>meio</b> e <b>fim</b>."],
      ["O nome do herói aparece em várias cenas. Para trocar fácil, use…", ["Uma variável", "Um bloco solto", "Uma repetição"], "Com a <b>variável</b> heroi, troca em um lugar só."],
      ["Na Tela do programa, cada linha é uma…", ["Cena", "Variável", "Lista"], "Cada linha é uma <b>cena</b>."])
  ];
  mais("m8", "desafio",
    blk("🚶 O caminho da Bia até a escola", `<p>Monte a história com a variável <b>heroi</b> = Bia e 4 passos no meio (repita):</p>${tela(["Bia saiu de casa", "passo", "passo", "passo", "passo", "Bia chegou à escola"])}`,
      ["mostrar", "texto", "numero", "variavel", "repita"], ["Bia saiu de casa", "passo", "passo", "passo", "passo", "Bia chegou à escola"],
      [["definir", "heroi", "Bia"], ["mostrar", ["juntar", v("heroi"), " saiu de casa"]], ["repita", 4, [["mostrar", "passo"]]], ["mostrar", ["juntar", v("heroi"), " chegou à escola"]]],
      ["Começo: “heroi saiu de casa”. Meio: repita 4 vezes passo. Fim: “heroi chegou à escola”."], "Sequência, repetição e variável contaram a história.", { exige: ["variavel", "repita"] }));
  mais("m8", "turbo",
    blk("🦸 A história com dois personagens", `<p>Use duas variáveis: <b>heroi</b> = Tito e <b>amigo</b> = Lua. Monte:</p>${tela(["Tito encontrou Lua", "Lua disse: oi!", "Tito disse: oi!", "Tito e Lua foram brincar"])}`,
      ["mostrar", "texto", "variavel"], ["Tito encontrou Lua", "Lua disse: oi!", "Tito disse: oi!", "Tito e Lua foram brincar"],
      [["definir", "heroi", "Tito"], ["definir", "amigo", "Lua"], ["mostrar", ["juntar", v("heroi"), " encontrou ", v("amigo")]], ["mostrar", ["juntar", v("amigo"), " disse: oi!"]], ["mostrar", ["juntar", v("heroi"), " disse: oi!"]], ["mostrar", ["juntar", v("heroi"), " e ", v("amigo"), " foram brincar"]]],
      ["Use a engrenagem do “criar texto com” para ter 3 ou 4 pedaços.", "Cuidado com os espaços: “ encontrou ” tem espaço antes e depois."], "Duas variáveis, várias cenas: trocar um nome muda a história inteira.", { exige: ["variavel"] }));
})();
