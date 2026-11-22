/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 1º bimestre de 2027
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv).
   Programação em blocos no portal (tipo "blocos", js/blocos.js).
   BNCC Computação: EF07CO01, EF07CO02, EF07CO03, EF07CO05.
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  PORTAL.registrarAtividades("informatica-7ano-2027-1bim", {

  /* ============ MISSÃO 1 — Programar com blocos ============ */
  m1: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: rode o programa e veja o que acontece",
        enunciado: "<p>Este programa já está montado. Aperte <strong>▶️ Rodar o programa</strong> e olhe a <strong>📺 Tela do programa</strong>. Depois mude o “3” do <strong>repita</strong> para 5 e rode de novo: o que mudou?</p><p>Para terminar, deixe o programa mostrando <strong>5 vezes “pulo”</strong> e depois <strong>“fim”</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 3, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        esperado: ["pulo", "pulo", "pulo", "pulo", "pulo", "fim"],
        solucao: [["repita", 5, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        dicas: ["Clique no número 3 dentro do bloco repita e digite 5."],
        explicacao: "O <strong>repita</strong> faz os blocos de dentro várias vezes. Trocando 3 por 5, “pulo” aparece 5 vezes. O “fim” está fora (embaixo) do repita, por isso aparece uma vez só." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Meu primeiro programa",
        enunciado: "<p>Monte um programa que mostre na tela, nesta ordem:</p><p><strong>Olá, 7º ano!</strong><br><strong>Eu sei programar!</strong></p><p>Abra a gaveta <strong>📺 Mostrar</strong>, arraste o bloco para a área branca, clique no texto e escreva. Encaixe o segundo bloco embaixo do primeiro.</p>",
        caixa: ["mostrar", "texto"],
        esperado: ["Olá, 7º ano!", "Eu sei programar!"],
        solucao: [["mostrar", "Olá, 7º ano!"], ["mostrar", "Eu sei programar!"]],
        dicas: ["Os blocos precisam estar encaixados (grudados) um embaixo do outro.", "O computador executa de cima para baixo: o primeiro bloco é o “Olá, 7º ano!”."],
        explicacao: "<strong>Sequência</strong>: dois blocos “mostrar na tela”, um embaixo do outro. O computador executa de cima para baixo." },

      { tipo: "blocos", titulo: "Encurte com o repita",
        enunciado: "<p>O narrador do jogo grita <strong>“Vai!” 4 vezes</strong> e depois <strong>“Gol!”</strong>. Monte o programa usando o <strong>🔁 repita</strong> (em vez de 4 blocos iguais).</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        esperado: ["Vai!", "Vai!", "Vai!", "Vai!", "Gol!"], exige: ["repita"],
        solucao: [["repita", 4, [["mostrar", "Vai!"]]], ["mostrar", "Gol!"]],
        dicas: ["Coloque o “mostrar Vai!” DENTRO do repita e mude o número para 4.", "O “Gol!” fica EMBAIXO do repita, do lado de fora, para aparecer uma vez só."],
        explicacao: "repita 4 vezes: mostrar “Vai!”. Embaixo, fora do repita: mostrar “Gol!”. A repetição deixa o programa mais curto." },

      { tipo: "classificar", modo: "tabela", titulo: "Sequência, repetição ou seleção?",
        colunaItem: "Programa", colunaResp: "Ideia principal",
        categorias: [{ id: "Q", rot: "➡️ Sequência" }, { id: "R", rot: "🔁 Repetição" }, { id: "S", rot: "🔀 Seleção" }],
        itens: [
          { t: "mostrar “Bom dia” · mostrar “Vamos começar”", c: "Q", why: "Um bloco embaixo do outro." },
          { t: "repita 10 vezes: mostrar “polichinelo”", c: "R", why: "O repita faz o bloco várias vezes." },
          { t: "se chover: mostrar “guarda-chuva” · senão: mostrar “boné”", c: "S", why: "O se escolhe um caminho." },
          { t: "se o sinal estiver verde: mostrar “Atravesse” · senão: mostrar “Espere”", c: "S", why: "Escolhe o caminho pelo resultado da condição." },
          { t: "repita 3 vezes: mostrar “hip” · depois mostrar “hurra!”", c: "R", why: "A ideia principal é repetir “hip”." }],
        explicacao: "Sequência: blocos em ordem. Repetição: o repita. Seleção: o se … faça … senão." },

      { tipo: "escolha", titulo: "Dentro ou fora do repita?",
        enunciado: "<p>Programa: <em>repita 3 vezes: [mostrar “pulo”] · mostrar “fim”</em>.</p>",
        perguntas: [
          { p: "Se o “mostrar fim” estiver EMBAIXO do repita (fora dele), quantas vezes aparece “fim”?", opcoes: ["1 vez", "3 vezes", "Nenhuma"], certo: 0, why: "Fora do repita, o bloco é executado uma vez só, no final." },
          { p: "Se eu arrastar o “mostrar fim” para DENTRO do repita, quantas vezes aparece “fim”?", opcoes: ["3 vezes", "1 vez", "4 vezes"], certo: 0, why: "Dentro do repita, tudo se repete 3 vezes." },
          { p: "Qual é a regra?", opcoes: ["A posição do bloco (dentro ou fora) muda o resultado", "A posição não importa", "O computador escolhe a ordem"], certo: 0, why: "O computador segue exatamente onde o bloco está." }],
        explicacao: "Dentro do repita = repete; fora (embaixo) = uma vez só. A posição do bloco muda o resultado." },

      { tipo: "blocos", titulo: "Passou ou recuperação?",
        enunciado: "<p>O programa já guarda a <strong>nota 7</strong> na variável <strong>nota</strong>. Complete com o <strong>🔀 se … faça … senão</strong> (gaveta Se, o segundo bloco): <strong>se nota ≥ 5</strong>, mostrar <strong>passou</strong>; <strong>senão</strong>, mostrar <strong>recuperação</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
        inicio: [["definir", "nota", 7]],
        esperado: ["passou"], exige: ["se", "comparar"],
        solucao: [["definir", "nota", 7], ["se", [">=", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        dicas: ["Pegue o “se … faça … senão” na gaveta 🔀 Se e encaixe embaixo do “definir nota”.", "Na gaveta ⚖️ Comparar, use o bloco de comparar com ≥; de um lado a variável nota (gaveta 📦 Variáveis), do outro o número 5."],
        explicacao: "se nota ≥ 5: mostrar “passou”; senão: mostrar “recuperação”. Com nota 7, a condição é verdadeira e aparece “passou”." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "Nota 4: o programa decide sozinho",
        enunciado: "<p>Agora a nota é <strong>4</strong>. Monte o programa para mostrar:</p><p><strong>Nota: 4</strong><br><strong>recuperação</strong></p><p>Use a variável <strong>nota</strong>, o bloco <strong>criar texto com</strong> (gaveta 🔤 Texto) para juntar “Nota: ” com a variável, e o <strong>se … senão</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
        inicio: [["definir", "nota", 4]],
        esperado: ["Nota: 4", "recuperação"], exige: ["se", "variavel"],
        solucao: [["definir", "nota", 4], ["mostrar", ["juntar", "Nota: ", v("nota")]], ["se", [">=", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        dicas: ["“criar texto com” junta dois pedaços: “Nota: ” (com espaço) e a variável nota.", "A mesma seleção da atividade anterior funciona: com nota 4, cai no senão."],
        explicacao: "O mesmo programa serve para qualquer nota: a variável guarda o valor e o se escolhe o caminho. Com 4, a condição nota ≥ 5 é falsa e vai para o senão." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Contagem regressiva do foguete 🚀",
        enunciado: "<p>Mostre <strong>3, 2, 1</strong> (um por linha) e depois <strong>Decolar!</strong></p><p>Use uma variável <strong>n</strong> que começa em 3, o <strong>repita 3 vezes</strong> e, dentro dele, mostre n e depois <strong>altere n por -1</strong> (gaveta 📦 Variáveis).</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita"],
        esperado: ["3", "2", "1", "Decolar!"], exige: ["repita", "variavel"],
        solucao: [["definir", "n", 3], ["repita", 3, [["mostrar", v("n")], ["mudar", "n", -1]]], ["mostrar", "Decolar!"]],
        dicas: ["Comece com “definir n para 3”.", "Dentro do repita: primeiro mostrar n, depois alterar n por -1 (assim diminui 1).", "“Decolar!” fica fora do repita, embaixo."],
        explicacao: "A variável n muda a cada volta: 3 → 2 → 1. O “alterar n por -1” diminui 1. É assim que os jogos fazem cronômetros." }
    ],
    vf: [
      { v: true, why: "De cima para baixo, um bloco por vez." },
      { v: false, corrigir: { trecho: "escolher um caminho conforme uma condição", opcoes: ["escolher um caminho conforme uma condição", "fazer os blocos de dentro várias vezes"], certo: "fazer os blocos de dentro várias vezes" }, why: "Quem escolhe é o se; o repita repete." },
      { v: true, why: "Dentro do repita, tudo se repete." },
      { v: true, why: "Variável = caixinha com nome." },
      { v: true, why: "Programa é um algoritmo para o computador." }
    ]
  },

  /* ============ MISSÃO 2 — Listas no programa ============ */
  m2: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: a lista de frutas",
        enunciado: "<p>Rode o programa. Ele cria a lista <strong>frutas</strong> e mostra o item da <strong>posição 1</strong>. Troque o 1 por 4 e rode de novo: qual fruta aparece? Deixe mostrando a fruta da posição 4.</p>",
        caixa: ["mostrar", "lista", "variavel", "numero"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 1]]],
        esperado: ["açaí"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 4]]],
        dicas: ["No bloco “em lista frutas obter #”, troque o número 1 por 4."],
        explicacao: "As posições começam no 1: maçã (1), uva (2), caju (3), açaí (4)." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Leia a lista", robo: {"paineis": ["📋 Outra lista: cores"], "passos": [{"fala": "Olha como eu leio uma lista <b>diferente</b>. A posição começa no <b>1</b>:", "painel": 0, "linha": "1 azul"}, {"fala": "", "painel": 0, "linha": "2 verde", "espera": 600}, {"fala": "", "painel": 0, "linha": "3 roxo", "espera": 1000}, {"fala": "Item da posição 2? Desço até o número 2: <b>verde</b>. Tamanho? Conto os itens: <b>3</b>.", "painel": 0, "linha": "Posição 2 = verde · Tamanho = 3", "marca": true}, {"fala": "Se eu <b>adicionar no fim</b> o amarelo, ele vira o item 4, e o tamanho passa a ser 4.", "painel": 0, "linha": "4 amarelo (novo, no fim)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: numere a lista da tarefa e responda! 💪"},
        enunciado: "<p>Lista <strong>frutas</strong>: 1 maçã · 2 uva · 3 caju · 4 açaí</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Qual é o item da posição 3?", { r: "caju", dica: "Conte a partir do 1." }],
          ["Qual é a posição da uva?", { r: "2", tipo: "num" }],
          ["Qual é o tamanho da lista?", { r: "4", tipo: "num", dica: "Tamanho = quantos itens." }],
          ["Depois de adicionar “banana” no fim, qual é o tamanho?", { r: "5", tipo: "num" }],
          ["E qual é a posição da banana?", { r: "5", tipo: "num", dica: "Adicionar coloca no fim." }]],
        explicacao: "Posições começam no 1. Tamanho é quantos itens. Adicionar coloca o item no fim, e o tamanho aumenta 1." },

      { tipo: "blocos", titulo: "Item e tamanho",
        enunciado: "<p>A lista <strong>frutas</strong> já está criada. Mostre na tela:</p><p><strong>caju</strong> (o item da posição 3)<br><strong>4</strong> (o tamanho da lista)</p>",
        caixa: ["mostrar", "lista", "variavel", "numero"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")]],
        esperado: ["caju", "4"], exige: ["lista"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 3]], ["mostrar", ["tamanho", v("frutas")]]],
        dicas: ["Gaveta 📝 Listas: “em lista … obter # …” pega um item; “tamanho de …” conta os itens.", "Dentro deles, coloque a variável frutas (gaveta 📦 Variáveis)."],
        explicacao: "“em lista frutas obter # 3” → caju. “tamanho de frutas” → 4." },

      { tipo: "blocos", titulo: "Percorra a lista com o para cada",
        enunciado: "<p>Mostre todas as frutas, uma por linha, usando o bloco <strong>👉 para cada item … na lista</strong> (só um bloco “mostrar”!).</p>",
        caixa: ["mostrar", "lista", "variavel", "paracada"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")]],
        esperado: ["maçã", "uva", "caju", "açaí"], exige: ["paracada"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["paracada", "f", v("frutas"), [["mostrar", v("f")]]]],
        dicas: ["No “para cada item j na lista …”, coloque a variável frutas.", "Dentro dele: mostrar na tela a variável do item (o j)."],
        explicacao: "O para cada repete uma vez para cada item: na 1ª volta j = maçã, na 2ª j = uva, e assim por diante." },

      { tipo: "escolha", titulo: "Lista: confira",
        perguntas: [
          { p: "Por que usar uma lista em vez de 19 variáveis?", opcoes: ["Uma variável só guarda todos os itens, em ordem", "Porque lista é mais bonita", "Porque o computador não aceita variáveis"], certo: 0, why: "A lista junta vários itens numa variável só." },
          { p: "Lista com 4 itens. Pedir o item da posição 5:", opcoes: ["Dá problema: a posição não existe", "Mostra o item 1", "Cria um item novo"], certo: 0, why: "Só existem as posições 1 a 4." },
          { p: "O para cada é bom porque:", opcoes: ["Percorre a lista toda sem eu precisar saber quantos itens ela tem", "Apaga a lista", "Só mostra o primeiro item"], certo: 0, why: "Se a lista crescer, ele percorre os novos itens também." }],
        explicacao: "Lista = vários itens numa variável. Posição que não existe dá problema. O para cada percorre todos, do primeiro ao último." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "A soma dos preços",
        enunciado: "<p>A lista <strong>precos</strong> tem 5, 3 e 2 reais. Faça o programa mostrar <strong>Total: 10</strong>.</p><p>Crie a variável <strong>total</strong> com 0; com o <strong>para cada</strong>, some cada preço no total (“alterar total por” o item); no fim, mostre “Total: ” junto com o total.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada"],
        inicio: [["definir", "precos", L(5, 3, 2)]],
        esperado: ["Total: 10"], exige: ["paracada"],
        solucao: [["definir", "precos", L(5, 3, 2)], ["definir", "total", 0], ["paracada", "p", v("precos"), [["mudar", "total", v("p")]]], ["mostrar", ["juntar", "Total: ", v("total")]]],
        dicas: ["“alterar total por” aceita a variável do item no lugar do número.", "O “mostrar” fica fora do para cada, embaixo, para aparecer uma vez só."],
        explicacao: "total começa em 0 e recebe cada preço: 0 + 5 + 3 + 2 = 10. É assim que o carrinho da loja soma a compra." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Só as notas azuis",
        enunciado: "<p>A lista <strong>notas</strong> tem 8, 4, 6, 3 e 9. Mostre <strong>só as notas maiores ou iguais a 5</strong>, uma por linha.</p>",
        caixa: ["mostrar", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "notas", L(8, 4, 6, 3, 9)]],
        esperado: ["8", "6", "9"], exige: ["paracada", "se"],
        solucao: [["definir", "notas", L(8, 4, 6, 3, 9)], ["paracada", "n", v("notas"), [["se", [">=", v("n"), 5], [["mostrar", v("n")]]]]]],
        dicas: ["Dentro do para cada, coloque um “se” (o primeiro bloco da gaveta Se, sem senão).", "Condição: o item ≥ 5. Só então mostrar o item."],
        explicacao: "Repetição + seleção: o para cada passa por todas as notas e o se deixa passar só as ≥ 5 (8, 6 e 9)." }
    ],
    vf: [
      { v: true, why: "Lista = vários itens numa variável." },
      { v: false, corrigir: { trecho: "maçã", opcoes: ["maçã", "uva"], certo: "uva" }, why: "Posição 1 = maçã, posição 2 = uva." },
      { v: true, why: "Tamanho = quantos itens." },
      { v: true, why: "Uma volta por item." },
      { v: false, corrigir: { trecho: "existe", opcoes: ["existe", "não existe"], certo: "não existe" }, why: "Só existem as posições 1 a 4." }
    ]
  },

  /* ============ MISSÃO 3 — Registros ============ */
  m3: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: a ficha da Ana",
        enunciado: "<p>Rode o programa e veja a ficha da Ana na tela. Depois troque o valor do campo <strong>idade</strong> para <strong>13</strong> e rode de novo.</p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", v("aluno")]],
        esperado: ["nome: Ana · idade: 13"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 13], ["mostrar", v("aluno")]],
        dicas: ["Clique no 12 do bloco “o campo idade vale” e digite 13."],
        explicacao: "A ficha tem dois campos: nome = Ana e idade = 13. Cada campo tem um nome e um valor." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Lista ou registro?",
        colunaItem: "O que guardar", colunaResp: "Melhor estrutura",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "R", rot: "🗂️ Registro (ficha)" }],
        itens: [
          { t: "Os nomes de todos os alunos da turma", c: "L", why: "Vários itens parecidos (nomes)." },
          { t: "Nome, telefone e aniversário de um contato", c: "R", why: "Várias informações diferentes de uma pessoa só." },
          { t: "As músicas de uma playlist", c: "L", why: "Vários itens do mesmo tipo, em ordem." },
          { t: "Nome, vida e força de um personagem", c: "R", why: "Informações diferentes de um personagem." },
          { t: "As notas de uma prova da turma", c: "L", why: "Vários números parecidos." }],
        explicacao: "Lista: vários itens parecidos, achados pela posição. Registro: várias informações diferentes de uma coisa, achadas pelo nome do campo." },

      { tipo: "tabela", titulo: "Campos e valores do contato", robo: {"paineis": ["🗂️ Outra ficha: um livro"], "passos": [{"fala": "Olha uma ficha <b>diferente</b>. Cada linha tem um <b>campo</b> (o nome da informação) e um <b>valor</b> (o que está guardado):", "painel": 0, "linha": "título = Receitas da Vovó"}, {"fala": "", "painel": 0, "linha": "páginas = 40", "espera": 700}, {"fala": "", "painel": 0, "linha": "ano = 2025", "espera": 900}, {"fala": "O valor do campo páginas é <b>40</b>. E a ficha tem <b>3 campos</b>: título, páginas e ano.", "painel": 0, "linha": "páginas → 40 · 3 campos", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: leia a ficha do contato! 💪"},
        enunciado: "<p>Ficha do contato: <strong>nome</strong> = Davi · <strong>telefone</strong> = 94 98888-1234 · <strong>aniversário</strong> = 10/05</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Qual é o valor do campo nome?", { r: "Davi" }],
          ["Qual campo tem o valor 10/05?", { r: ["aniversário", "aniversario"] }],
          ["Quantos campos tem essa ficha?", { r: "3", tipo: "num" }]],
        explicacao: "Cada campo tem nome (à esquerda) e valor (à direita): nome = Davi, telefone = 94 98888-1234, aniversário = 10/05. São 3 campos." },

      { tipo: "blocos", titulo: "Complete a ficha do aluno",
        enunciado: "<p>A ficha <strong>aluno</strong> já tem nome e idade. Acrescente o campo <strong>turma</strong> com o valor <strong>7º A</strong> e mostre os três campos, um por linha:</p><p><strong>Ana</strong><br><strong>12</strong><br><strong>7º A</strong></p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12]],
        esperado: ["Ana", "12", "7º A"], exige: ["ficha"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["ficha_por", "aluno", "turma", "7º A"],
          ["mostrar", ["campo", v("aluno"), "nome"]], ["mostrar", ["campo", v("aluno"), "idade"]], ["mostrar", ["campo", v("aluno"), "turma"]]],
        dicas: ["Use “na ficha aluno o campo … vale …” e escreva turma no lugar do nome do campo.", "Para mostrar um campo: “mostrar na tela” + “campo … da ficha” + a variável aluno."],
        explicacao: "Escrever: na ficha aluno o campo turma vale “7º A”. Ler: campo nome da ficha aluno → Ana (e o mesmo para idade e turma)." },

      { tipo: "escolha", titulo: "Registro: confira",
        perguntas: [
          { p: "Num registro, como acho a informação?", opcoes: ["Pelo nome do campo", "Pela posição 1, 2, 3", "Pela cor"], certo: 0, why: "Na lista é pela posição; no registro, pelo nome do campo." },
          { p: "Uma lista de fichas de alunos funciona como:", opcoes: ["Uma tabela: cada ficha é uma linha e cada campo, uma coluna", "Uma imagem", "Um único número"], certo: 0, why: "Lista de fichas = tabela." },
          { p: "No campo força = 80, o valor é:", opcoes: ["80", "força", "campo"], certo: 0, why: "força é o nome do campo; 80 é o valor." }],
        explicacao: "Registro: achamos pelo nome do campo. Lista de fichas = tabela. Cada campo tem nome e valor." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "O herói levou dano!",
        enunciado: "<p>A ficha <strong>heroi</strong> tem nome = Raio e vida = 3. Ele levou um golpe: a vida precisa ficar <strong>1 a menos</strong>. Depois mostre:</p><p><strong>Raio tem 2 vidas</strong></p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero", "conta"],
        inicio: [["definir", "heroi", ["ficha"]], ["ficha_por", "heroi", "nome", "Raio"], ["ficha_por", "heroi", "vida", 3]],
        esperado: ["Raio tem 2 vidas"], exige: ["ficha", "conta"],
        solucao: [["definir", "heroi", ["ficha"]], ["ficha_por", "heroi", "nome", "Raio"], ["ficha_por", "heroi", "vida", 3],
          ["ficha_por", "heroi", "vida", ["-", ["campo", v("heroi"), "vida"], 1]],
          ["mostrar", ["juntar", ["campo", v("heroi"), "nome"], " tem ", ["campo", v("heroi"), "vida"], " vidas"]]],
        dicas: ["Nova vida = campo vida da ficha heroi − 1 (gaveta ➕ Contas).", "Para a frase, use “criar texto com” com 4 pedaços: o nome, “ tem ”, a vida e “ vidas”."],
        explicacao: "na ficha heroi o campo vida vale (campo vida da ficha heroi − 1) → 3 − 1 = 2. Os jogos guardam assim a vida de cada personagem." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "A tabela da turma (lista de fichas)",
        enunciado: "<p>As fichas <strong>a1</strong> (Ana, nota 8) e <strong>a2</strong> (Bia, nota 6) estão na lista <strong>turma</strong>. Com o <strong>para cada</strong>, mostre uma linha por aluno:</p><p><strong>Ana: 8</strong><br><strong>Bia: 6</strong></p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "lista", "paracada"],
        inicio: [["definir", "a1", ["ficha"]], ["ficha_por", "a1", "nome", "Ana"], ["ficha_por", "a1", "nota", 8], ["definir", "a2", ["ficha"]], ["ficha_por", "a2", "nome", "Bia"], ["ficha_por", "a2", "nota", 6], ["definir", "turma", L(v("a1"), v("a2"))]],
        esperado: ["Ana: 8", "Bia: 6"], exige: ["paracada", "ficha"],
        solucao: [["definir", "a1", ["ficha"]], ["ficha_por", "a1", "nome", "Ana"], ["ficha_por", "a1", "nota", 8], ["definir", "a2", ["ficha"]], ["ficha_por", "a2", "nome", "Bia"], ["ficha_por", "a2", "nota", 6], ["definir", "turma", L(v("a1"), v("a2"))],
          ["paracada", "al", v("turma"), [["mostrar", ["juntar", ["campo", v("al"), "nome"], ": ", ["campo", v("al"), "nota"]]]]]],
        dicas: ["No para cada, cada item da lista turma é uma ficha inteira.", "Dentro: mostrar (criar texto com: campo nome do item, “: ”, campo nota do item)."],
        explicacao: "Lista de fichas = tabela: cada volta do para cada pega uma ficha (uma linha) e mostra os campos nome e nota (as colunas)." }
    ],
    vf: [
      { v: true, why: "Registro = ficha com várias informações de uma coisa." },
      { v: false, corrigir: { trecho: "pela posição 1, 2, 3", opcoes: ["pela posição 1, 2, 3", "pelo nome do campo"], certo: "pelo nome do campo" }, why: "Posição é na lista." },
      { v: true, why: "Nome do campo e valor." },
      { v: true, why: "Cada ficha é uma linha." },
      { v: true, why: "Nome, telefone, foto…" }
    ]
  },

  /* ============ MISSÃO 4 — Depurar ============ */
  m4: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: ache o bug",
        enunciado: "<p>Este programa devia mostrar <strong>Olá!</strong>, mas tem um erro de digitação. Rode, compare e conserte.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Oal!"]],
        esperado: ["Olá!"],
        solucao: [["mostrar", "Olá!"]],
        dicas: ["Compare letra por letra: as letras estão na ordem certa?"],
        explicacao: "O bug era o valor errado: “Oal!” (letras trocadas) em vez de “Olá!”. Rodar e comparar mostrou o erro." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada bug e o seu tipo",
        pares: [
          { a: "“fim” aparece antes dos pulos", b: "Ordem trocada" },
          { a: "“fim” aparece 3 vezes", b: "Bloco no lugar errado (dentro do repita)" },
          { a: "Aparecem 4 pulos em vez de 3", b: "Número errado" },
          { a: "Quem tirou 8 aparece como recuperação", b: "Condição trocada" },
          { a: "O programa não para de mostrar", b: "Repetição sem fim" }],
        explicacao: "Releia a tabela dos erros comuns: cada sintoma aponta um tipo de erro." },

      { tipo: "ordenar", titulo: "O método do detetive 🕵️",
        itens: ["Rodar o programa", "Comparar com o resultado esperado", "Achar o bloco responsável", "Mudar uma coisa só e testar de novo"],
        explicacao: "Rodar → comparar → achar → mudar uma coisa só e testar." },

      { tipo: "blocos", titulo: "Conserte: ordem trocada",
        enunciado: "<p>Devia mostrar <strong>pulo, pulo, pulo</strong> e depois <strong>fim</strong>. Rode, compare e conserte.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["mostrar", "fim"], ["repita", 3, [["mostrar", "pulo"]]]],
        esperado: ["pulo", "pulo", "pulo", "fim"],
        solucao: [["repita", 3, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        dicas: ["Arraste o “mostrar fim” para baixo do repita."],
        explicacao: "Ordem trocada: o “fim” estava antes do repita. Os blocos são executados de cima para baixo." },

      { tipo: "blocos", titulo: "Conserte: bloco dentro do repita",
        enunciado: "<p>Devia mostrar <strong>pulo</strong> 3 vezes e <strong>fim</strong> uma vez só.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 3, [["mostrar", "pulo"], ["mostrar", "fim"]]]],
        esperado: ["pulo", "pulo", "pulo", "fim"],
        solucao: [["repita", 3, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        dicas: ["O “fim” aparece 3 vezes porque está dentro do repita. Tire ele de lá e encaixe embaixo do repita."],
        explicacao: "Bloco no lugar errado: dentro do repita, o “fim” se repetia. Fora dele, aparece uma vez." },

      { tipo: "blocos", titulo: "Conserte: condição trocada",
        enunciado: "<p>Quem tirou <strong>8</strong> devia ver <strong>passou</strong>. Rode, compare e conserte a condição.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
        inicio: [["definir", "nota", 8], ["se", ["<", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        esperado: ["passou"],
        solucao: [["definir", "nota", 8], ["se", [">=", v("nota"), 5], [["mostrar", "passou"]], [["mostrar", "recuperação"]]]],
        dicas: ["A condição diz “nota < 5”. Para passar, a nota precisa ser ≥ 5: troque o sinal."],
        explicacao: "Condição trocada: “nota < 5” mandava quem tirou 8 para o senão. Com “nota ≥ 5”, aparece “passou”." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "Dois bugs de uma vez",
        enunciado: "<p>Devia mostrar <strong>Olá</strong> 3 vezes e depois <strong>Tchau</strong>. Tem <strong>dois</strong> erros. Conserte um de cada vez, testando entre eles.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 4, [["mostrar", "Oi"]]], ["mostrar", "Tchau"]],
        esperado: ["Olá", "Olá", "Olá", "Tchau"],
        solucao: [["repita", 3, [["mostrar", "Olá"]]], ["mostrar", "Tchau"]],
        dicas: ["Erro 1: o texto (Oi × Olá).", "Erro 2: o número de repetições (4 × 3)."],
        explicacao: "Valor errado (“Oi” → “Olá”) e número errado (4 → 3). Mudando uma coisa por vez, dá para ver o que cada mudança resolveu." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Conserte a repetição sem fim",
        enunciado: "<p>Devia mostrar <strong>1, 2, 3</strong>. Mas o programa não para! Descubra por quê e conserte. (O portal interrompe o programa sozinho.)</p>",
        caixa: ["mostrar", "numero", "variavel", "enquanto", "comparar"],
        inicio: [["definir", "n", 1], ["enquanto", ["<=", v("n"), 3], [["mostrar", v("n")]]]],
        esperado: ["1", "2", "3"], exige: ["enquanto"],
        solucao: [["definir", "n", 1], ["enquanto", ["<=", v("n"), 3], [["mostrar", v("n")], ["mudar", "n", 1]]]],
        dicas: ["O n nunca muda: continua 1 para sempre, e 1 ≤ 3 é sempre verdade.", "Dentro do enquanto, depois do mostrar, coloque “alterar n por 1”."],
        explicacao: "Repetição sem fim: a condição de parar nunca acontecia porque n não mudava. Com “alterar n por 1”, n vira 2, 3, 4 e para." }
    ],
    vf: [
      { v: true, why: "Bug = erro." },
      { v: true, why: "Depurar = achar e consertar." },
      { v: false, corrigir: { trecho: "mudar tudo de uma vez", opcoes: ["mudar tudo de uma vez", "mudar uma coisa de cada vez"], certo: "mudar uma coisa de cada vez" }, why: "Assim você sabe o que resolveu." },
      { v: true, why: "É o passo 2 do método." },
      { v: true, why: "A condição de parar nunca acontece." }
    ]
  },

  /* ============ MISSÃO 5 — Decompor e reaproveitar ============ */
  m5: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: o bloco “refrão”",
        enunciado: "<p>Rode o programa. O bloco <strong>refrão</strong> foi criado uma vez só (o bloco roxo “para refrão”) e é <strong>chamado</strong> duas vezes. Agora coloque mais um <strong>la la la</strong> dentro do refrão e rode: mudou nos dois lugares!</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        esperado: ["verso 1", "la la la", "la la la", "verso 2", "la la la", "la la la"],
        solucao: [["funcao", "refrão", [["mostrar", "la la la"], ["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        dicas: ["Arraste um “mostrar na tela” para dentro do bloco roxo “para refrão” e escreva la la la."],
        explicacao: "Mudou no bloco próprio, mudou em todo lugar onde ele é chamado: é a vantagem de reaproveitar." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Decomponha a festa da turma",
        enunciado: "<p>Cada tarefa pertence a uma parte do problema. Separe.</p>",
        categorias: [{ id: "D", rot: "🎈 Decoração" }, { id: "C", rot: "🍰 Comida" }, { id: "M", rot: "🎵 Música" }, { id: "B", rot: "🎮 Brincadeiras" }],
        itens: [{ t: "Encher os balões", c: "D" }, { t: "Pendurar a faixa", c: "D" }, { t: "Comprar o bolo", c: "C" }, { t: "Fazer o suco", c: "C" }, { t: "Montar a playlist", c: "M" }, { t: "Testar a caixa de som", c: "M" }, { t: "Organizar a dança das cadeiras", c: "B" }, { t: "Separar os prêmios da gincana", c: "B" }],
        explicacao: "Decompor: o problema grande (a festa) vira 4 partes menores, e cada grupo cuida de uma." },

      { tipo: "escolha", titulo: "Por que criar o meu bloco?",
        perguntas: [
          { p: "O refrão mudou. Com o bloco próprio, eu:", opcoes: ["Mudo dentro do bloco, uma vez só, e vale em todos os lugares", "Mudo em cada lugar do programa", "Apago o programa"], certo: 0, why: "Conserta num lugar só." },
          { p: "Chamar o bloco é:", opcoes: ["Usar o bloco no programa", "Apagar o bloco", "Dar nome à variável"], certo: 0, why: "Cada chamada executa os blocos de dentro." },
          { p: "Criar blocos próprios ajuda o trabalho em equipe porque:", opcoes: ["Cada colega pode criar um bloco", "Ninguém precisa trabalhar", "O computador faz sozinho"], certo: 0, why: "Decompor permite dividir o trabalho." }],
        explicacao: "Bloco próprio: escrito uma vez, chamado quando precisar, consertado num lugar só, e permite dividir o trabalho." },

      { tipo: "blocos", titulo: "Crie o bloco e chame duas vezes",
        enunciado: "<p>O bloco <strong>refrão</strong> já existe, mas ninguém chama ele. Complete para mostrar:</p><p><strong>verso 1 · la la la · verso 2 · la la la</strong> (um por linha)</p><p>Na gaveta 🧩 Meus blocos aparece o bloco <strong>refrão</strong> para chamar.</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["mostrar", "verso 2"]],
        esperado: ["verso 1", "la la la", "verso 2", "la la la"], exige: ["funcao"],
        solucao: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        dicas: ["Pegue o bloco “refrão” na gaveta 🧩 Meus blocos e encaixe embaixo do “verso 1”.", "Faça o mesmo embaixo do “verso 2”."],
        explicacao: "Programa: verso 1 · refrão · verso 2 · refrão. Cada chamada executa o “la la la”." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "O treino de polichinelos",
        enunciado: "<p>O bloco <strong>polichinelo</strong> mostra “pula” e “bate palma”. Monte o treino: <strong>3 polichinelos</strong> e depois <strong>descansa</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "repita", "funcao"],
        inicio: [["funcao", "polichinelo", [["mostrar", "pula"], ["mostrar", "bate palma"]]]],
        esperado: ["pula", "bate palma", "pula", "bate palma", "pula", "bate palma", "descansa"], exige: ["repita", "funcao"],
        solucao: [["funcao", "polichinelo", [["mostrar", "pula"], ["mostrar", "bate palma"]]], ["repita", 3, [["chamar", "polichinelo"]]], ["mostrar", "descansa"]],
        dicas: ["repita 3 vezes: chamar polichinelo.", "“descansa” fica embaixo do repita."],
        explicacao: "Bloco próprio dentro da repetição: o programa principal fica curto e fácil de ler." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "O refrão mudou!",
        enunciado: "<p>A música tem o refrão chamado 3 vezes. O refrão agora é <strong>oba, oba</strong>. Mude <strong>num lugar só</strong> para o programa mostrar:</p><p>verso 1 · oba, oba · verso 2 · oba, oba · verso 3 · oba, oba</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"], ["mostrar", "verso 3"], ["chamar", "refrão"]],
        esperado: ["verso 1", "oba, oba", "verso 2", "oba, oba", "verso 3", "oba, oba"],
        solucao: [["funcao", "refrão", [["mostrar", "oba, oba"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"], ["mostrar", "verso 3"], ["chamar", "refrão"]],
        dicas: ["Não mexa no programa principal: mude só o texto dentro do bloco “para refrão”."],
        explicacao: "Mudando dentro do bloco próprio, as 3 chamadas mudam juntas: conserto num lugar só." }
    ],
    vf: [
      { v: true, why: "Decompor = dividir em partes menores." },
      { v: false, corrigir: { trecho: "precisa ser escrito de novo cada vez que é usado", opcoes: ["precisa ser escrito de novo cada vez que é usado", "é escrito uma vez só e chamado quando precisar"], certo: "é escrito uma vez só e chamado quando precisar" }, why: "Essa é a vantagem de reaproveitar." },
      { v: true, why: "Conserta num lugar só." },
      { v: true, why: "Chamar = usar o bloco." },
      { v: true, why: "Cada um faz uma parte." }
    ]
  },

  /* ============ MISSÃO 6 — Programar em dupla ============ */
  m6: {
    pratica: [
      { tipo: "mensagens", titulo: "Piloto ou navegador?", app: "👥 A dupla",
        botoes: [{ id: "P", rot: "🕹️ Piloto" }, { id: "N", rot: "🧭 Navegador" }],
        enunciado: "<p>Quem está fazendo cada coisa?</p>",
        itens: [
          { de: "", t: "Arrasta o bloco repita para a área branca", c: "P", why: "Quem mexe no mouse é o piloto." },
          { de: "", t: "Lê o enunciado em voz alta", c: "N", why: "O navegador lê e planeja." },
          { de: "", t: "Avisa: “esse bloco tem que ficar fora do repita”", c: "N", why: "O navegador confere e procura erros." },
          { de: "", t: "Digita o texto dentro do bloco mostrar", c: "P", why: "Teclado é com o piloto." }],
        okMsg: "Papéis certinhos!",
        explicacao: "Piloto: mouse e teclado, monta os blocos. Navegador: lê, planeja, confere e procura erros, sem pegar o mouse." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "O jeito de trabalhar em dupla",
        itens: ["Planejar: ler o problema juntos e decompor", "Montar uma parte (o navegador confere)", "Testar logo com ▶️ Rodar", "Trocar de papel e seguir para a próxima parte"],
        explicacao: "Planejar → montar → testar → trocar. Testar depois de cada parte evita juntar muitos erros." },

      { tipo: "classificar", modo: "tabela", titulo: "Combinado da dupla ou não?",
        colunaItem: "Atitude", colunaResp: "Combinado?",
        categorias: [{ id: "S", rot: "👍 Sim" }, { id: "N", rot: "👎 Não" }],
        itens: [
          { t: "Trocar de papel a cada 10 minutos", c: "S", why: "Assim os dois aprendem tudo." },
          { t: "O piloto decide tudo sozinho e não ouve o navegador", c: "N", why: "A dupla decide junta." },
          { t: "Dizer “acho que esse bloco vai dentro do repita”", c: "S", why: "Sugestão respeitosa." },
          { t: "Culpar o colega quando dá erro", c: "N", why: "O erro é da dupla." },
          { t: "Testar depois de cada parte", c: "S", why: "Acha o erro cedo." }],
        explicacao: "Revezar, ouvir, falar com respeito e testar sempre. O erro é da dupla." },

      { tipo: "blocos", titulo: "Em dupla: o cardápio da cantina",
        enunciado: "<p>Planejem juntos, montem e testem. O programa deve mostrar:</p><p><strong>Cardápio de hoje:</strong><br>arroz<br>feijão<br>frango<br>suco</p><p>Use uma lista <strong>cardapio</strong> e o <strong>para cada</strong>. Troquem de papel na metade!</p>",
        caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
        esperado: ["Cardápio de hoje:", "arroz", "feijão", "frango", "suco"], exige: ["lista", "paracada"],
        solucao: [["definir", "cardapio", L("arroz", "feijão", "frango", "suco")], ["mostrar", "Cardápio de hoje:"], ["paracada", "c", v("cardapio"), [["mostrar", v("c")]]]],
        dicas: ["Parte 1: criar a lista (definir cardapio para criar lista com 4 itens; use a engrenagem para mudar a quantidade de itens).", "Parte 2: mostrar o título. Parte 3: para cada item na lista, mostrar o item."],
        explicacao: "Decomposição em 3 partes: criar a lista, mostrar o título, percorrer a lista. Cada parte testada antes da próxima." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "Em dupla: tem sobremesa?",
        enunciado: "<p>O cardápio já funciona. Acrescentem a variável <strong>dia</strong> com o valor <strong>sexta</strong> e, no final: <strong>se dia = sexta</strong>, mostrar <strong>Tem sobremesa!</strong>; senão, mostrar <strong>Sem sobremesa</strong>.</p>",
        caixa: ["mostrar", "texto", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "cardapio", L("arroz", "feijão", "frango", "suco")], ["mostrar", "Cardápio de hoje:"], ["paracada", "c", v("cardapio"), [["mostrar", v("c")]]]],
        esperado: ["Cardápio de hoje:", "arroz", "feijão", "frango", "suco", "Tem sobremesa!"], exige: ["se"],
        solucao: [["definir", "cardapio", L("arroz", "feijão", "frango", "suco")], ["definir", "dia", "sexta"], ["mostrar", "Cardápio de hoje:"], ["paracada", "c", v("cardapio"), [["mostrar", v("c")]]],
          ["se", ["=", v("dia"), "sexta"], [["mostrar", "Tem sobremesa!"]], [["mostrar", "Sem sobremesa"]]]],
        dicas: ["Coloquem o “definir dia para sexta” no começo.", "O se … senão vai no fim, fora do para cada."],
        explicacao: "A seleção compara a variável dia com o texto “sexta”. Como é igual, aparece “Tem sobremesa!”." }
    ],
    turbo: [
      {tipo:  "ordenar", titulo:  "Em dupla: coloquem em ordem o plano do programa “Placar do jogo”", itens:  ["Escolher o nome do programa e o que ele vai mostrar na tela", "Dividir o programa em partes (decomposição)", "Escolher os blocos de cada parte (variável, se, repita…)", "Montar parte por parte e rodar para testar"], explicacao:  "Planejar antes de montar: <b>objetivo</b> → <b>partes</b> → <b>blocos</b> → <b>montar e testar</b>."}
    ],
    vf: [
      { v: true, why: "Mouse e teclado com o piloto." },
      { v: false, corrigir: { trecho: "pega o mouse sempre que quiser", opcoes: ["pega o mouse sempre que quiser", "não pega o mouse"], certo: "não pega o mouse" }, why: "O navegador lê, planeja e confere." },
      { v: true, why: "A cada 10 minutos." },
      { v: false, corrigir: { trecho: "testar só no final, quando o programa inteiro estiver pronto", opcoes: ["testar só no final, quando o programa inteiro estiver pronto", "testar depois de cada parte"], certo: "testar depois de cada parte" }, why: "Testar cedo acha o erro cedo." },
      { v: true, why: "Responsabilidade da dupla." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Desafios de depuração ============ */
  m7: {
    pratica: [
      { tipo: "info", titulo: "Dia de detetive 🕵️",
        html: "<p>Cada programa desta missão chega <strong>quebrado</strong>. Use as pistas: <strong>item errado</strong> = posição errada; <strong>“(sem …)”</strong> = nome do campo diferente; <strong>item repetido ou faltando</strong> = bloco fora do lugar; <strong>erro em vários lugares</strong> = conserte dentro do bloco próprio.</p>" }
    ],
    basico: [
      { tipo: "blocos", titulo: "Pista: apareceu o item errado",
        enunciado: "<p>Devia mostrar <strong>uva</strong>.</p>",
        caixa: ["mostrar", "lista", "variavel", "numero"],
        inicio: [["definir", "frutas", L("caju", "uva", "açaí")], ["mostrar", ["item", v("frutas"), 3]]],
        esperado: ["uva"],
        solucao: [["definir", "frutas", L("caju", "uva", "açaí")], ["mostrar", ["item", v("frutas"), 2]]],
        dicas: ["Conte as posições: caju 1, uva 2, açaí 3."],
        explicacao: "Posição errada: a uva está na posição 2, não na 3." },
      { tipo: "blocos", titulo: "Pista: apareceu “(sem idade)”",
        enunciado: "<p>Devia mostrar <strong>12</strong>.</p>",
        caixa: ["mostrar", "ficha", "variavel"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "idadee"]]],
        esperado: ["12"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "idade"]]],
        dicas: ["Compare o nome do campo no bloco de mostrar com o nome usado quando a ficha foi preenchida."],
        explicacao: "Nome do campo diferente: “idadee” não existe na ficha; o certo é “idade”." },
      { tipo: "blocos", titulo: "Pista: só apareceu uma fruta",
        enunciado: "<p>Devia mostrar as três frutas, uma por linha.</p>",
        caixa: ["mostrar", "lista", "variavel", "paracada"],
        inicio: [["definir", "frutas", L("caju", "uva", "açaí")], ["paracada", "f", v("frutas"), []], ["mostrar", v("f")]],
        esperado: ["caju", "uva", "açaí"],
        solucao: [["definir", "frutas", L("caju", "uva", "açaí")], ["paracada", "f", v("frutas"), [["mostrar", v("f")]]]],
        dicas: ["O mostrar está embaixo do para cada, fora dele. Coloque dentro."],
        explicacao: "Bloco fora do lugar: fora do para cada, o mostrar roda uma vez só, com a última fruta." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "O erro escondido no bloco próprio",
        enunciado: "<p>Devia mostrar:</p><p>Bom dia!<br>Ana<br>Bom dia!<br>Bia</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "saudacao", [["mostrar", "Bom dai!"]]], ["chamar", "saudacao"], ["mostrar", "Ana"], ["chamar", "saudacao"], ["mostrar", "Bia"]],
        esperado: ["Bom dia!", "Ana", "Bom dia!", "Bia"],
        solucao: [["funcao", "saudacao", [["mostrar", "Bom dia!"]]], ["chamar", "saudacao"], ["mostrar", "Ana"], ["chamar", "saudacao"], ["mostrar", "Bia"]],
        dicas: ["O erro aparece em dois lugares: ele está dentro do bloco próprio. Conserte lá, uma vez só."],
        explicacao: "“Bom dai!” estava dentro do bloco saudacao; consertando lá, as duas chamadas ficam certas." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Três bugs: o contador de aprovados",
        enunciado: "<p>Notas: 8, 4 e 6. Devia mostrar <strong>Aprovados: 2</strong> (uma linha só). Tem <strong>três</strong> erros!</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada", "se", "comparar"],
        inicio: [["definir", "notas", L(8, 4, 6)], ["definir", "aprovados", 1], ["paracada", "n", v("notas"), [["se", ["<", v("n"), 5], [["mudar", "aprovados", 1]]], ["mostrar", ["juntar", "Aprovados: ", v("aprovados")]]]]],
        esperado: ["Aprovados: 2"],
        solucao: [["definir", "notas", L(8, 4, 6)], ["definir", "aprovados", 0], ["paracada", "n", v("notas"), [["se", [">=", v("n"), 5], [["mudar", "aprovados", 1]]]]], ["mostrar", ["juntar", "Aprovados: ", v("aprovados")]]],
        dicas: ["Erro 1: um contador começa em 0.", "Erro 2: aprovado é nota ≥ 5, não < 5.", "Erro 3: o mostrar está dentro do para cada; tire para baixo dele."],
        explicacao: "Valor inicial errado (1 → 0), condição trocada (< 5 → ≥ 5) e bloco no lugar errado (mostrar fora do para cada)." }
    ],
    vf: [
      { v: true, why: "Item errado = posição errada." },
      { v: true, why: "Hipótese = palpite testado." },
      { v: false, corrigir: { trecho: "preciso consertar em cada lugar onde ele é chamado", opcoes: ["preciso consertar em cada lugar onde ele é chamado", "basta consertar dentro do bloco, uma vez só"], certo: "basta consertar dentro do bloco, uma vez só" }, why: "Conserto num lugar só." },
      { v: true, why: "Uma mudança por vez." },
      { v: true, why: "O campo pode estar com outro nome." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: O placar do quiz ============ */
  m8: {
    pratica: [
      { tipo: "blocos", titulo: "Mão na massa: o contador",
        enunciado: "<p>Rode: o contador <strong>moedas</strong> começa em 0 e o personagem pega 3 moedas. Mude para ele pegar <strong>5</strong> moedas.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "repita"],
        inicio: [["definir", "moedas", 0], ["repita", 3, [["mudar", "moedas", 1]]], ["mostrar", ["juntar", "Moedas: ", v("moedas")]]],
        esperado: ["Moedas: 5"],
        solucao: [["definir", "moedas", 0], ["repita", 5, [["mudar", "moedas", 1]]], ["mostrar", ["juntar", "Moedas: ", v("moedas")]]],
        dicas: ["Mude o 3 do repita para 5."],
        explicacao: "Contador: começa em 0 e o “alterar moedas por 1” soma 1 a cada volta." }
    ],
    basico: [
      { tipo: "tabela", titulo: "Corrija o quiz à mão", robo: {"paineis": ["✅ Outro quiz"], "passos": [{"fala": "Olha como eu corrijo um quiz <b>diferente</b>, comparando <b>posição por posição</b>:", "painel": 0, "linha": "Gabarito: A · C · B"}, {"fala": "", "painel": 0, "linha": "Jogador:  A · B · B", "espera": 1200}, {"fala": "1ª: A e A, certa. 2ª: C e B, <b>errada</b>. 3ª: B e B, certa.", "painel": 0, "linha": "Acertos: 2 · Erros: 1", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: compare o gabarito com as respostas do jogador! 💪"},
        enunciado: "<p>Gabarito: <strong>B · A · D · C</strong> &nbsp; Respostas do jogador: <strong>B · C · D · C</strong></p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["A questão 2 está certa? (sim/não)", { r: ["não", "nao"] }],
          ["Quantos acertos?", { r: "3", tipo: "num", dica: "Compare posição por posição." }],
          ["Quantos erros?", { r: "1", tipo: "num" }]],
        explicacao: "Posição 1: B = B ✅; 2: A × C ❌; 3: D = D ✅; 4: C = C ✅. 3 acertos e 1 erro." },
      { tipo: "escolha", titulo: "Contador: confira",
        perguntas: [
          { p: "Um contador de acertos começa em:", opcoes: ["0", "1", "10"], certo: 0, why: "Antes de conferir, ninguém acertou nada." },
          { p: "O bloco “alterar acertos por 1”:", opcoes: ["Soma 1 à variável acertos", "Apaga a variável", "Mostra na tela"], certo: 0, why: "Soma 1 ao valor." },
          { p: "Para corrigir o quiz, comparamos:", opcoes: ["O gabarito e as respostas, posição por posição", "Só a primeira resposta", "O tamanho das listas"], certo: 0, why: "Item i do gabarito com o item i das respostas." }],
        explicacao: "Contador começa em 0; alterar por 1 soma 1; o quiz compara as listas posição por posição." },
      { tipo: "blocos", titulo: "Monte o contador de acertos",
        enunciado: "<p>As listas <strong>gabarito</strong> e <strong>respostas</strong>, o contador <strong>acertos</strong> (0) e a posição <strong>i</strong> (1) já estão prontos. Complete:</p><p><strong>repita 4 vezes:</strong> se item i do gabarito = item i das respostas, alterar acertos por 1; depois alterar i por 1.<br>No fim: mostrar acertos → <strong>3</strong></p>",
        caixa: ["mostrar", "numero", "variavel", "lista", "repita", "se", "comparar"],
        inicio: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1]],
        esperado: ["3"], exige: ["repita", "se"],
        solucao: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1],
          ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", v("acertos")]],
        dicas: ["No “em lista … obter #”, coloque a variável i no lugar do número.", "O “alterar i por 1” fica dentro do repita, mas fora do se (a posição avança sempre).", "O mostrar fica no fim, fora do repita."],
        explicacao: "Repetição + seleção + contador: a cada volta compara a posição i das duas listas; se forem iguais, soma 1 em acertos; depois i avança." }
    ],
    desafio: [
      { tipo: "blocos", titulo: "Placar com mensagem final",
        enunciado: "<p>Depois de mostrar os acertos, acrescente: <strong>se acertos = 4</strong>, mostrar <strong>Parabéns!</strong>; senão, mostrar <strong>Continue treinando!</strong></p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
        inicio: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1],
          ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", v("acertos")]],
        esperado: ["3", "Continue treinando!"], exige: ["se"],
        solucao: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1],
          ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", v("acertos")],
          ["se", ["=", v("acertos"), 4], [["mostrar", "Parabéns!"]], [["mostrar", "Continue treinando!"]]]],
        dicas: ["O novo se … senão vai no fim, embaixo do mostrar acertos."],
        explicacao: "Com 3 acertos, a condição acertos = 4 é falsa: aparece “Continue treinando!”." }
    ],
    turbo: [
      { tipo: "blocos", titulo: "Conte também os erros",
        enunciado: "<p>Mostre <strong>Acertos: 3</strong> e <strong>Erros: 1</strong>. Crie o contador <strong>erros</strong> e use o <strong>senão</strong> do se.</p>",
        caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
        inicio: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1]],
        esperado: ["Acertos: 3", "Erros: 1"], exige: ["repita", "se"],
        solucao: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "erros", 0], ["definir", "i", 1],
          ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]], [["mudar", "erros", 1]]], ["mudar", "i", 1]]],
          ["mostrar", ["juntar", "Acertos: ", v("acertos")]], ["mostrar", ["juntar", "Erros: ", v("erros")]]],
        dicas: ["definir erros para 0 no começo.", "Use o se … faça … senão: no senão, alterar erros por 1."],
        explicacao: "Dois contadores: o se soma nos acertos e o senão soma nos erros. Acertos + erros = 4 perguntas." }
    ],
    vf: [
      { v: true, why: "Gabarito = respostas certas." },
      { v: true, why: "Começa em 0, soma 1 a cada vez." },
      { v: true, why: "Posição por posição." },
      { v: false, corrigir: { trecho: "apaga a variável acertos", opcoes: ["apaga a variável acertos", "soma 1 à variável acertos"], certo: "soma 1 à variável acertos" }, why: "Alterar por 1 soma 1." },
      { v: true, why: "Placar = contador." }
    ]
  },

  /* ============ 🔁 REVISÃO PARA A PROVA ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "blocos", de: "m1", titulo: "M1 · Repita e se",
        enunciado: "<p>Mostre <strong>hip</strong> 2 vezes e depois <strong>hurra!</strong></p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        esperado: ["hip", "hip", "hurra!"], exige: ["repita"],
        solucao: [["repita", 2, [["mostrar", "hip"]]], ["mostrar", "hurra!"]],
        explicacao: "repita 2 vezes: mostrar hip; fora do repita: mostrar hurra!" },
      { tipo: "relembre", de: "m2" },
      { tipo: "tabela", de: "m2", titulo: "M2 · Lista", robo: {"paineis": ["📋 Outra lista: cores"], "passos": [{"fala": "Olha como eu leio uma lista <b>diferente</b>. A posição começa no <b>1</b>:", "painel": 0, "linha": "1 azul"}, {"fala": "", "painel": 0, "linha": "2 verde", "espera": 600}, {"fala": "", "painel": 0, "linha": "3 roxo", "espera": 1000}, {"fala": "Item da posição 2? Desço até o número 2: <b>verde</b>. Tamanho? Conto os itens: <b>3</b>.", "painel": 0, "linha": "Posição 2 = verde · Tamanho = 3", "marca": true}, {"fala": "Se eu <b>adicionar no fim</b> o amarelo, ele vira o item 4, e o tamanho passa a ser 4.", "painel": 0, "linha": "4 amarelo (novo, no fim)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: numere a lista da tarefa e responda! 💪"}, enunciado: "<p>Lista <strong>jogos</strong>: 1 futebol · 2 vôlei · 3 queimada</p>", colunas: ["Pergunta", "Resposta"],
        linhas: [["Item da posição 2", { r: ["vôlei", "volei"] }], ["Tamanho da lista", { r: "3", tipo: "num" }]],
        explicacao: "Posição 2 = vôlei. Tamanho = 3 itens." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Registro",
        perguntas: [{ p: "Nome, vida e força de um personagem ficam melhor num:", opcoes: ["Registro (ficha)", "Lista", "Repita"], certo: 0, why: "Informações diferentes de uma coisa só." }, { p: "No campo vida = 3, o nome do campo é:", opcoes: ["vida", "3", "ficha"], certo: 0 }],
        explicacao: "Registro: informações diferentes de uma coisa, achadas pelo nome do campo." },
      { tipo: "relembre", de: "m4" },
      { tipo: "blocos", de: "m4", titulo: "M4 · Depure",
        enunciado: "<p>Devia mostrar <strong>a, b, c</strong> e depois <strong>fim</strong>.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "a"], ["mostrar", "c"], ["mostrar", "b"], ["mostrar", "fim"]],
        esperado: ["a", "b", "c", "fim"],
        solucao: [["mostrar", "a"], ["mostrar", "b"], ["mostrar", "c"], ["mostrar", "fim"]],
        explicacao: "Ordem trocada: o b e o c estavam invertidos." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Decompor e reaproveitar",
        perguntas: [{ p: "Dividir um problema grande em partes menores é:", opcoes: ["Decompor", "Depurar", "Percorrer"], certo: 0 }, { p: "Mudei o bloco próprio. A mudança vale:", opcoes: ["Em todos os lugares onde ele é chamado", "Só no primeiro", "Em nenhum"], certo: 0 }],
        explicacao: "Decompor = dividir. Bloco próprio: muda num lugar só e vale em todos." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Dupla",
        perguntas: [{ p: "Quem fica com o mouse?", opcoes: ["O piloto", "O navegador", "Ninguém"], certo: 0 }, { p: "Quando testar?", opcoes: ["Depois de cada parte", "Só no final", "Nunca"], certo: 0 }],
        explicacao: "Piloto: mouse. Navegador: lê e confere. Testar depois de cada parte." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Pistas",
        perguntas: [{ p: "Apareceu “(sem nota)”. Provável erro:", opcoes: ["Nome do campo diferente", "Repetição sem fim", "Posição da lista"], certo: 0 }],
        explicacao: "“(sem …)” = o campo pedido não existe com esse nome." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Contador",
        perguntas: [{ p: "Um contador começa em:", opcoes: ["0", "1", "100"], certo: 0 }, { p: "“alterar pontos por 1”:", opcoes: ["Soma 1 aos pontos", "Zera os pontos", "Mostra os pontos"], certo: 0 }],
        explicacao: "Contador começa em 0 e soma 1 a cada vez." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1", perguntas: [{ p: "repita 3: [mostrar oi] · mostrar tchau. Quantas linhas aparecem?", opcoes: ["4", "3", "6"], certo: 0, why: "3 oi + 1 tchau." }], explicacao: "3 vezes “oi” (dentro) + 1 “tchau” (fora) = 4 linhas." },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2", perguntas: [{ p: "O bloco que percorre a lista toda é o:", opcoes: ["Para cada", "Se", "Mostrar"], certo: 0 }], explicacao: "O para cada repete uma vez para cada item." },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3", perguntas: [{ p: "Uma lista de fichas é como uma:", opcoes: ["Tabela", "Variável vazia", "Repetição"], certo: 0 }], explicacao: "Cada ficha é uma linha; cada campo, uma coluna." },
      { tipo: "escolha", de: "m4", titulo: "Desafio M4", perguntas: [{ p: "O programa não para. Erro provável:", opcoes: ["Repetição sem fim", "Ordem trocada", "Valor errado"], certo: 0 }], explicacao: "A condição de parar nunca acontece." },
      { tipo: "escolha", de: "m5", titulo: "Desafio M5", perguntas: [{ p: "Usar o bloco próprio no programa é:", opcoes: ["Chamar", "Decompor", "Percorrer"], certo: 0 }], explicacao: "Chamar = usar o bloco próprio." },
      { tipo: "escolha", de: "m6", titulo: "Desafio M6", perguntas: [{ p: "De quanto em quanto tempo a dupla reveza os papéis?", opcoes: ["10 minutos", "Nunca", "1 minuto"], certo: 0 }], explicacao: "Revezar a cada 10 minutos." },
      { tipo: "escolha", de: "m7", titulo: "Desafio M7", perguntas: [{ p: "O mesmo erro aparece em 3 lugares. Onde consertar?", opcoes: ["Dentro do bloco próprio", "Em cada lugar", "Apagar o programa"], certo: 0 }], explicacao: "Conserto num lugar só, dentro do bloco." },
      { tipo: "escolha", de: "m8", titulo: "Desafio M8", perguntas: [{ p: "Gabarito A B C, respostas A C C. Acertos:", opcoes: ["2", "1", "3"], certo: 0 }], explicacao: "Posições 1 e 3 iguais: 2 acertos." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "Caixinha com nome que guarda um valor:", opcoes: ["Variável", "Lista", "Bloco"], certo: 0 }, { p: "se … faça … senão é:", opcoes: ["Seleção", "Repetição", "Sequência"], certo: 0 }], explicacao: "Variável guarda um valor; se … senão é seleção." },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "Lista com 3 itens: o tamanho é:", opcoes: ["3", "2", "4"], certo: 0 }, { p: "As posições da lista começam no:", opcoes: ["1", "0", "10"], certo: 0 }], explicacao: "Tamanho = quantos itens. Aqui, as posições começam no 1." },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Cada informação da ficha é um:", opcoes: ["Campo", "Item", "Bug"], certo: 0 }], explicacao: "Ficha = campos com nome e valor." },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "Achar e consertar erros é:", opcoes: ["Depurar", "Decompor", "Chamar"], certo: 0 }, { p: "Bug quer dizer:", opcoes: ["Inseto (um erro no programa)", "Bloco", "Lista"], certo: 0 }], explicacao: "Depurar (debug) = tirar os bugs (erros)." },
      { tipo: "escolha", de: "m5", titulo: "Turbo · Simulado M5", perguntas: [{ p: "Vantagem do bloco próprio:", opcoes: ["Programa mais curto e conserto num lugar só", "Programa mais lento", "Nenhuma"], certo: 0 }], explicacao: "Curto, fácil de ler e de consertar." },
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6", perguntas: [{ p: "O navegador:", opcoes: ["Lê, planeja e confere, sem pegar o mouse", "Monta os blocos", "Desliga o computador"], certo: 0 }], explicacao: "Navegador pensa e confere; piloto monta." },
      { tipo: "escolha", de: "m7", titulo: "Turbo · Simulado M7", perguntas: [{ p: "Um palpite sobre onde está o erro é uma:", opcoes: ["Hipótese", "Lista", "Ficha"], certo: 0 }], explicacao: "Hipótese = palpite que você testa." },
      { tipo: "escolha", de: "m8", titulo: "Turbo · Simulado M8", perguntas: [{ p: "A lista das respostas certas do quiz é o:", opcoes: ["Gabarito", "Contador", "Placar"], certo: 0 }], explicacao: "Gabarito = respostas certas." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-1bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Programar com blocos", perguntas: [{"p": "Em que ordem o computador executa os blocos?", "opcoes": ["De cima para baixo", "De baixo para cima", "Em qualquer ordem"], "certo": 0}, {"p": "“Se chover, levar guarda-chuva; senão, levar boné” é:", "opcoes": ["Repetição", "Seleção", "Sequência"], "certo": 1}, {"p": "“definir nota para 7” guarda 7 numa:", "opcoes": ["Lista", "Repetição", "Variável"], "certo": 2}],
      explicacao: "Em que ordem o computador executa os blocos? → <strong>De cima para baixo</strong> · “Se chover, levar guarda-chuva; senão, levar boné” é: → <strong>Seleção</strong> · “definir nota para 7” guarda 7 numa: → <strong>Variável</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Listas no programa", perguntas: [{"p": "Lista frutas = maçã, uva, caju, açaí. O tamanho é:", "opcoes": ["4", "3", "5"], "certo": 0}, {"p": "Qual bloco passa por todos os itens da lista, um de cada vez?", "opcoes": ["tamanho de", "para cada item … na lista", "mostrar na tela"], "certo": 1}, {"p": "Pedir o item nº 5 de uma lista com 4 itens:", "opcoes": ["Mostra o 1º item", "Mostra o tamanho", "Dá problema: a posição não existe"], "certo": 2}],
      explicacao: "Lista frutas = maçã, uva, caju, açaí. O tamanho é: → <strong>4</strong> · Qual bloco passa por todos os itens da lista, um de cada vez? → <strong>para cada item … na lista</strong> · Pedir o item nº 5 de uma lista com 4 itens: → <strong>Dá problema: a posição não existe</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Registros", perguntas: [{"p": "Os dados de um aluno (nome, idade, turma) ficam melhor num:", "opcoes": ["Registro (ficha)", "Repita", "Número só"], "certo": 0}, {"p": "No campo turma = 7º A, o nome do campo é:", "opcoes": ["7º A", "turma", "ficha"], "certo": 1}, {"p": "Uma lista de fichas funciona como:", "opcoes": ["Um bloco repita", "Uma imagem", "Uma tabela"], "certo": 2}],
      explicacao: "Os dados de um aluno (nome, idade, turma) ficam melhor num: → <strong>Registro (ficha)</strong> · No campo turma = 7º A, o nome do campo é: → <strong>turma</strong> · Uma lista de fichas funciona como: → <strong>Uma tabela</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Depurar", perguntas: [{"p": "Bug é:", "opcoes": ["Um erro no programa", "Um bloco de repetição", "Um tipo de lista"], "certo": 0}, {"p": "“fim” apareceu 3 vezes, mas devia aparecer 1. O erro provável é:", "opcoes": ["Falta de luz", "O bloco está dentro do repita", "A lista está vazia"], "certo": 1}, {"p": "No método do detetive, depois de rodar eu:", "opcoes": ["Apago tudo", "Desligo o computador", "Comparo com o que devia aparecer"], "certo": 2}],
      explicacao: "Bug é: → <strong>Um erro no programa</strong> · “fim” apareceu 3 vezes, mas devia aparecer 1. O erro provável é: → <strong>O bloco está dentro do repita</strong> · No método do detetive, depois de rodar eu: → <strong>Comparo com o que devia aparecer</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Decompor e reaproveitar", perguntas: [{"p": "Dividir a festa em decoração, comida, música e brincadeiras é:", "opcoes": ["Decompor", "Depurar", "Recortar"], "certo": 0}, {"p": "Mudei o bloco refrão. A mudança vale:", "opcoes": ["Só no primeiro lugar", "Em todos os lugares onde ele é chamado", "Em nenhum lugar"], "certo": 1}, {"p": "Onde fica o bloco próprio no editor?", "opcoes": ["Na lixeira", "Na Tela do programa", "Na gaveta 🧩 Meus blocos"], "certo": 2}],
      explicacao: "Dividir a festa em decoração, comida, música e brincadeiras é: → <strong>Decompor</strong> · Mudei o bloco refrão. A mudança vale: → <strong>Em todos os lugares onde ele é chamado</strong> · Onde fica o bloco próprio no editor? → <strong>Na gaveta 🧩 Meus blocos</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Programar em dupla", perguntas: [{"p": "Quem lê o enunciado e confere cada bloco?", "opcoes": ["O navegador", "O piloto", "Ninguém"], "certo": 0}, {"p": "De quanto em quanto tempo a dupla troca de papel?", "opcoes": ["Nunca", "A cada 10 minutos", "Só no fim do ano"], "certo": 1}, {"p": "Quando a dupla deve testar o programa?", "opcoes": ["Só no final", "Nunca", "Depois de cada parte"], "certo": 2}],
      explicacao: "Quem lê o enunciado e confere cada bloco? → <strong>O navegador</strong> · De quanto em quanto tempo a dupla troca de papel? → <strong>A cada 10 minutos</strong> · Quando a dupla deve testar o programa? → <strong>Depois de cada parte</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Desafios de depuração", perguntas: [{"p": "Apareceu “(sem idade)”. O erro provável é:", "opcoes": ["O nome do campo está diferente", "A posição da lista", "O número do repita"], "certo": 0}, {"p": "O erro está dentro do bloco próprio. Onde conserto?", "opcoes": ["Em cada lugar onde ele é chamado", "Dentro do bloco, uma vez só", "Na lixeira"], "certo": 1}, {"p": "Hipótese é:", "opcoes": ["A resposta do gabarito", "Um bloco de repetição", "Um palpite sobre onde está o erro"], "certo": 2}],
      explicacao: "Apareceu “(sem idade)”. O erro provável é: → <strong>O nome do campo está diferente</strong> · O erro está dentro do bloco próprio. Onde conserto? → <strong>Dentro do bloco, uma vez só</strong> · Hipótese é: → <strong>Um palpite sobre onde está o erro</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · O placar do quiz", perguntas: [{"p": "Gabarito B, A, D, C e respostas B, C, D, C. Quantos acertos?", "opcoes": ["3", "2", "4"], "certo": 0}, {"p": "O bloco “alterar acertos por 1”:", "opcoes": ["Apaga a variável", "Soma 1 à variável acertos", "Mostra a lista"], "certo": 1}, {"p": "A variável contadora começa em:", "opcoes": ["1", "10", "0"], "certo": 2}],
      explicacao: "Gabarito B, A, D, C e respostas B, C, D, C. Quantos acertos? → <strong>3</strong> · O bloco “alterar acertos por 1”: → <strong>Soma 1 à variável acertos</strong> · A variável contadora começa em: → <strong>0</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, piloto aprovado pelo professor e levado ao ano todo)
   Por missão: ❓ gancho do Para começar, 🛠️ "Onde eu uso isso?" prático (aplicar = desafio de blocos
   numa situação da vida real + 3 perguntas), "O que você já sabe?" na M1 e ⏱️ +25% de tempo de aula
   com tarefas de jogo no 🟡 Desafio e no 🔴 Turbo. Tudo cobra só o que o Para começar explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-1bim"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  const TAG = "⏱️ +25%";
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: TAG }))); };

  /* ---------- M1 · sequência, repetição, seleção e variável ---------- */
  A.m1.gancho = { html: "<p>🎮 No jogo do celular do Caio, o personagem começa com <b>3 vidas</b>. Cada vez que ele bate num obstáculo, perde uma. Quando chega a <b>0</b>, aparece <b>“Fim de jogo”</b>.</p><p>🤔 Como o jogo <b>guarda</b> quantas vidas ainda restam? E como ele <b>decide</b> a hora de mostrar “Fim de jogo”?</p>" };
  A.m1.lembra = [
    { tipo: "escolha", titulo: "🔍 O que você já sabe?",
      enunciado: "<p>Primeiro dia de Informática do 7º ano! Responda o que você lembra do 6º ano. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉</p>",
      perguntas: [
        { p: "No 6º ano você escreveu <b>algoritmos</b>. Um algoritmo é…", opcoes: ["Passos em ordem para resolver um problema", "Um tipo de computador", "Um jogo de celular"], certo: 0, why: "Algoritmo = <b>passos em ordem</b> para resolver um problema. Um programa é um algoritmo numa linguagem que o computador entende." },
        { p: "“Fazer 10 polichinelos” é um exemplo de qual ideia?", opcoes: ["🔁 Repetição", "🔀 Seleção", "➡️ Sequência"], certo: 0, why: "Fazer a mesma coisa várias vezes é <b>repetição</b>." },
        { p: "“Se chover, levar guarda-chuva; senão, levar boné” é um exemplo de qual ideia?", opcoes: ["🔀 Seleção", "🔁 Repetição", "➡️ Sequência"], certo: 0, why: "Escolher um caminho conforme uma condição é <b>seleção</b>." }
      ] }
  ];
  A.m1.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: as 3 vidas do jogo do Caio",
      enunciado: "<p>Monte o programa das vidas do jogo do Caio. O personagem bate em <b>3 obstáculos</b>, e a tela deve mostrar:</p><p><b>Vidas: 2</b><br><b>Vidas: 1</b><br><b>Vidas: 0</b><br><b>Fim de jogo</b></p><p>A variável <b>vidas</b> já começa em 3. Use o <b>repita 3 vezes</b> com <b>alterar vidas por -1</b> e <b>mostrar</b> (com “criar texto com”) dentro dele. Depois, <b>fora</b> do repita: <b>se vidas = 0</b>, mostrar <b>Fim de jogo</b>.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
      inicio: [["definir", "vidas", 3]],
      esperado: ["Vidas: 2", "Vidas: 1", "Vidas: 0", "Fim de jogo"], exige: ["repita", "se", "variavel"],
      solucao: [["definir", "vidas", 3], ["repita", 3, [["mudar", "vidas", -1], ["mostrar", ["juntar", "Vidas: ", v("vidas")]]]], ["se", ["=", v("vidas"), 0], [["mostrar", "Fim de jogo"]]]],
      dicas: ["Dentro do repita: primeiro “alterar vidas por -1”, depois “mostrar criar texto com ‘Vidas: ’ e vidas”.", "O “se vidas = 0” fica embaixo do repita, fora dele: senão ele seria testado 3 vezes."],
      explicacao: "A <b>variável</b> vidas guarda quanto falta; o <b>repita</b> faz o dano 3 vezes; a <b>seleção</b> (se) decide a hora do “Fim de jogo”. Todo jogo usa essas três ideias juntas." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "No jogo, a <b>vida</b> do personagem começa em 3 e diminui quando ele leva dano. O jogo guarda a vida numa…", opcoes: ["Variável", "Repetição", "Sequência"], certo: 0, why: "A vida é uma <b>variável</b>: uma caixinha com nome que guarda um valor que pode mudar." },
        { p: "O <b>despertador</b> do celular toca só <b>se</b> for 6h. Que ideia ele usa?", opcoes: ["🔀 Seleção", "🔁 Repetição", "➡️ Sequência"], certo: 0, why: "“Se for 6h, então toca” é uma <b>seleção</b>: escolhe o caminho conforme a condição." },
        { p: "No programa, o “mostrar ‘fim’” está <b>embaixo</b> do “repita 3 vezes” (fora dele). Quantas vezes aparece “fim”?", opcoes: ["1 vez, no final", "3 vezes", "Nenhuma"], certo: 0, why: "Fora do repita, o bloco roda <b>uma vez só</b>, depois que as repetições acabam. A posição do bloco muda o resultado!" }
      ] }
  ];
  mais("m1", "desafio",
    { tipo: "blocos", titulo: "🏆 Fase liberada? Os pontos do videogame",
      enunciado: "<p>No jogo, cada moeda vale <b>10 pontos</b>. O jogador pegou <b>4 moedas</b>. Se tiver <b>30 pontos ou mais</b>, a próxima fase é liberada. A tela deve mostrar:</p><p><b>Pontos: 40</b><br><b>Fase liberada!</b></p><p>A variável <b>pontos</b> já começa em 0. Use o <b>repita</b> com <b>alterar pontos por 10</b>; depois mostre os pontos e use o <b>se … senão</b> (senão: <b>Tente de novo</b>).</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
      inicio: [["definir", "pontos", 0]],
      esperado: ["Pontos: 40", "Fase liberada!"], exige: ["repita", "se", "variavel"],
      solucao: [["definir", "pontos", 0], ["repita", 4, [["mudar", "pontos", 10]]], ["mostrar", ["juntar", "Pontos: ", v("pontos")]], ["se", [">=", v("pontos"), 30], [["mostrar", "Fase liberada!"]], [["mostrar", "Tente de novo"]]]],
      dicas: ["4 moedas = repita 4 vezes, com “alterar pontos por 10” dentro.", "Mostrar e se ficam embaixo do repita (fora dele).", "A condição é pontos ≥ 30."],
      explicacao: "0 + 10 + 10 + 10 + 10 = 40. Como 40 ≥ 30, a seleção escolhe “Fase liberada!”. Se fossem só 2 moedas (20 pontos), apareceria “Tente de novo”." });
  mais("m1", "turbo",
    { tipo: "blocos", titulo: "🏃 Corrida de obstáculos: o se dentro do repita",
      enunciado: "<p>O corredor passa por <b>4 trechos</b>. No trecho <b>3</b> tem um buraco. A tela deve mostrar:</p><p><b>Correr</b><br><b>Correr</b><br><b>Pular o buraco!</b><br><b>Correr</b></p><p>Use a variável <b>trecho</b> começando em 1 e o <b>repita 4 vezes</b>. Dentro dele: <b>se trecho = 3</b>, mostrar <b>Pular o buraco!</b>; <b>senão</b>, mostrar <b>Correr</b>. No fim de cada volta, <b>alterar trecho por 1</b>.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
      esperado: ["Correr", "Correr", "Pular o buraco!", "Correr"], exige: ["repita", "se", "variavel"],
      solucao: [["definir", "trecho", 1], ["repita", 4, [["se", ["=", v("trecho"), 3], [["mostrar", "Pular o buraco!"]], [["mostrar", "Correr"]]], ["mudar", "trecho", 1]]]],
      dicas: ["Comece com “definir trecho para 1”, em cima de tudo.", "Dentro do repita vão dois blocos: o se … senão e, embaixo dele, o “alterar trecho por 1”.", "Se o alterar ficar fora do repita, o trecho nunca chega a 3!"],
      explicacao: "A cada volta o programa testa a condição de novo: trecho 1 e 2 → Correr; trecho 3 → Pular; trecho 4 → Correr. Seleção dentro da repetição: é assim que os jogos reagem a cada obstáculo." });

  /* ---------- M2 · listas ---------- */
  A.m2.gancho = { html: "<p>🎵 A playlist da Duda tem <b>4 músicas</b>. Ela aperta ▶️ uma vez só, e o aplicativo toca uma música depois da outra, do começo ao fim, e <b>para</b> quando acaba.</p><p>🤔 Como o aplicativo guarda as 4 músicas juntas? E como ele <b>sabe</b> que a playlist acabou?</p>" };
  A.m2.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o carrinho da loja on-line",
      enunciado: "<p>A mãe do Léo está comprando o material escolar numa loja on-line. O carrinho já tem <b>caderno, lápis e borracha</b>. Ela vai colocar uma <b>mochila</b>. A tela deve mostrar:</p><p><b>caderno</b><br><b>lápis</b><br><b>borracha</b><br><b>mochila</b><br><b>Itens no carrinho: 4</b></p><p>Use <b>na lista … adicionar no fim</b>, o <b>para cada</b> e o <b>tamanho de</b>.</p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
      inicio: [["definir", "carrinho", L("caderno", "lápis", "borracha")]],
      esperado: ["caderno", "lápis", "borracha", "mochila", "Itens no carrinho: 4"], exige: ["lista", "paracada"],
      solucao: [["definir", "carrinho", L("caderno", "lápis", "borracha")], ["adicionar", "carrinho", "mochila"], ["paracada", "p", v("carrinho"), [["mostrar", v("p")]]], ["mostrar", ["juntar", "Itens no carrinho: ", ["tamanho", v("carrinho")]]]],
      dicas: ["Primeiro adicione a mochila; depois percorra a lista com o para cada.", "“Itens no carrinho: ” vai num “criar texto com”, junto com o “tamanho de carrinho”, fora do para cada."],
      explicacao: "O carrinho é uma <b>lista</b>: o produto novo entra no fim, o <b>para cada</b> percorre todos e o <b>tamanho</b> conta quantos são. É exatamente o que o aplicativo da loja faz." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "O aplicativo toca as músicas da playlist uma por vez, do começo ao fim. Na programação, isso se chama…", opcoes: ["Percorrer a lista", "Apagar a lista", "Criar uma variável"], certo: 0, why: "Passar por todos os itens, um de cada vez, é <b>percorrer</b> a lista (o bloco <b>para cada</b> faz isso)." },
        { p: "A lista frutas tem maçã, uva, caju e açaí. Você <b>adiciona no fim</b> “banana”. Quantos itens a lista passa a ter?", opcoes: ["5", "4", "1"], certo: 0, why: "O item novo entra no fim: agora são <b>5</b> (o tamanho aumentou)." },
        { p: "Uma lista tem <b>4 itens</b> e o programa pede o <b>item nº 5</b>. O que acontece?", opcoes: ["Dá problema: a posição 5 não existe", "Aparece o item nº 1", "A lista ganha um item novo"], certo: 0, why: "As posições vão de 1 até o tamanho. Pedir uma posição que não existe <b>dá problema</b>." }
      ] }
  ];
  mais("m2", "desafio",
    { tipo: "blocos", titulo: "🚌 A fila do ônibus da excursão",
      enunciado: "<p>A fila do ônibus é uma lista: <b>Ana, Caio, Duda, Léo</b>. A tela deve mostrar:</p><p><b>Primeiro: Ana</b><br><b>Último: Léo</b><br><b>Pessoas na fila: 4</b></p><p>Use <b>em lista … obter #</b> e <b>tamanho de</b>, cada um dentro de um “criar texto com”.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista"],
      inicio: [["definir", "fila", L("Ana", "Caio", "Duda", "Léo")]],
      esperado: ["Primeiro: Ana", "Último: Léo", "Pessoas na fila: 4"], exige: ["lista"],
      solucao: [["definir", "fila", L("Ana", "Caio", "Duda", "Léo")], ["mostrar", ["juntar", "Primeiro: ", ["item", v("fila"), 1]]], ["mostrar", ["juntar", "Último: ", ["item", v("fila"), 4]]], ["mostrar", ["juntar", "Pessoas na fila: ", ["tamanho", v("fila")]]]],
      dicas: ["O primeiro está na posição 1. Quem está na última posição de uma lista com 4 itens?", "Lembre: as posições começam no 1, não no 0."],
      explicacao: "Posição 1 = Ana, posição 4 = Léo, e o tamanho da lista é 4. Cada item é achado pela <b>posição</b>." });
  mais("m2", "turbo",
    { tipo: "blocos", titulo: "🎧 A playlist numerada",
      enunciado: "<p>A playlist tem <b>forró, samba e funk</b>. Mostre cada música com o número dela na frente:</p><p><b>1. forró</b><br><b>2. samba</b><br><b>3. funk</b></p><p>Use o <b>para cada</b> e uma variável <b>n</b> que começa em 1. Dentro do para cada: mostre n, “. ” e a música (num “criar texto com” de 3 pedaços) e depois <b>alterar n por 1</b>.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada"],
      inicio: [["definir", "musicas", L("forró", "samba", "funk")]],
      esperado: ["1. forró", "2. samba", "3. funk"], exige: ["paracada", "variavel"],
      solucao: [["definir", "musicas", L("forró", "samba", "funk")], ["definir", "n", 1], ["paracada", "m", v("musicas"), [["mostrar", ["juntar", v("n"), ". ", v("m")]], ["mudar", "n", 1]]]],
      dicas: ["“definir n para 1” fica antes do para cada.", "No “criar texto com”, use a engrenagem para ter 3 pedaços: n, “. ” e a música.", "O “alterar n por 1” fica dentro do para cada, depois do mostrar."],
      explicacao: "O <b>para cada</b> percorre as músicas e a variável <b>n</b> conta a posição: 1, 2, 3. Se a playlist crescer, o programa continua certo." });

  /* ---------- M3 · registros (fichas) ---------- */
  A.m3.gancho = { html: "<p>📱 No celular da tia Rosa, o contato do Pedro tem <b>nome</b>, <b>telefone</b> e <b>aniversário</b>. Quando ela toca em “Pedro”, aparece tudo junto.</p><p>🤔 Isso é uma lista? Como o celular guarda <b>informações diferentes</b> de uma pessoa só e acha o telefone sem procurar por posição?</p>" };
  A.m3.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o contato do celular",
      enunciado: "<p>Crie a ficha do contato do Pedro, com os campos <b>nome</b> = Pedro e <b>aniversario</b> = 12/05. A tela deve mostrar:</p><p><b>Ligar para Pedro</b><br><b>Aniversário: 12/05</b></p><p>A variável <b>contato</b> já tem uma ficha nova. Use <b>na ficha … o campo … vale …</b> e, para mostrar, <b>campo … da ficha …</b> dentro de um “criar texto com”.</p>",
      caixa: ["mostrar", "texto", "variavel", "ficha"],
      inicio: [["definir", "contato", ["ficha"]]],
      esperado: ["Ligar para Pedro", "Aniversário: 12/05"], exige: ["ficha"],
      solucao: [["definir", "contato", ["ficha"]], ["ficha_por", "contato", "nome", "Pedro"], ["ficha_por", "contato", "aniversario", "12/05"], ["mostrar", ["juntar", "Ligar para ", ["campo", v("contato"), "nome"]]], ["mostrar", ["juntar", "Aniversário: ", ["campo", v("contato"), "aniversario"]]]],
      dicas: ["Escreva os nomes dos campos sempre do mesmo jeito: nome e aniversario (sem acento, igual nos dois blocos).", "Primeiro preencha os campos; depois mostre."],
      explicacao: "O contato é um <b>registro</b>: cada informação está num <b>campo</b> com nome. O celular acha o aniversário pelo nome do campo, não por posição." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "Nome, telefone e aniversário de <b>um</b> contato: para guardar isso, o melhor é…", opcoes: ["Um registro (ficha)", "Uma lista de nomes", "Um repita"], certo: 0, why: "Várias informações <b>diferentes</b> de uma coisa só = <b>registro</b>. Lista é para vários itens parecidos." },
        { p: "Na ficha do contato, em “telefone: (94) 0000-0000”, a palavra <b>telefone</b> é o…", opcoes: ["Nome do campo", "Valor do campo", "Tamanho da lista"], certo: 0, why: "Cada campo tem um <b>nome</b> (telefone) e um <b>valor</b> (o número)." },
        { p: "Na secretaria, juntaram as fichas de todos os alunos numa lista. Isso forma…", opcoes: ["Uma tabela (cada ficha é uma linha)", "Uma variável só com um número", "Um bloco mostrar na tela"], certo: 0, why: "Uma lista de fichas é uma <b>tabela</b>: cada ficha é uma linha e cada campo é uma coluna." }
      ] }
  ];
  mais("m3", "desafio",
    { tipo: "blocos", titulo: "⚽ A ficha da artilheira",
      enunciado: "<p>No campeonato da escola, a ficha da jogadora tem <b>nome</b> = Lia e <b>gols</b> = 5. A tela deve mostrar:</p><p><b>Lia fez 5 gols</b></p><p>Preencha os dois campos da ficha <b>jogadora</b> e mostre tudo num <b>criar texto com</b> de 4 pedaços: nome, “ fez ”, gols e “ gols”.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "ficha"],
      inicio: [["definir", "jogadora", ["ficha"]]],
      esperado: ["Lia fez 5 gols"], exige: ["ficha"],
      solucao: [["definir", "jogadora", ["ficha"]], ["ficha_por", "jogadora", "nome", "Lia"], ["ficha_por", "jogadora", "gols", 5], ["mostrar", ["juntar", ["campo", v("jogadora"), "nome"], " fez ", ["campo", v("jogadora"), "gols"], " gols"]]],
      dicas: ["Use a engrenagem do “criar texto com” para ter 4 pedaços.", "Os espaços contam: “ fez ” tem espaço antes e depois."],
      explicacao: "Os dois valores vêm da ficha, pelo nome do campo. Se a Lia fizer mais um gol, basta mudar o campo gols." });
  mais("m3", "turbo",
    { tipo: "blocos", titulo: "🐾 O bichinho virtual: ficha + seleção",
      enunciado: "<p>No jogo do bichinho virtual, a ficha do pet tem <b>nome</b> = Bolinha e <b>fome</b> = 8. Se a fome for <b>5 ou mais</b>, o jogo avisa. A tela deve mostrar:</p><p><b>Hora de dar comida para Bolinha!</b></p><p>Senão, mostraria <b>Bolinha está alimentado</b>. Use a ficha <b>pet</b>, o <b>se … senão</b> e o <b>campo … da ficha</b> na condição e nas mensagens.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "ficha", "se", "comparar"],
      inicio: [["definir", "pet", ["ficha"]]],
      esperado: ["Hora de dar comida para Bolinha!"], exige: ["ficha", "se"],
      solucao: [["definir", "pet", ["ficha"]], ["ficha_por", "pet", "nome", "Bolinha"], ["ficha_por", "pet", "fome", 8],
        ["se", [">=", ["campo", v("pet"), "fome"], 5], [["mostrar", ["juntar", "Hora de dar comida para ", ["campo", v("pet"), "nome"], "!"]]], [["mostrar", ["juntar", ["campo", v("pet"), "nome"], " está alimentado"]]]]],
      dicas: ["Na condição: campo fome da ficha pet ≥ 5.", "A mensagem tem 3 pedaços: “Hora de dar comida para ”, o campo nome e “!”."],
      explicacao: "O programa lê o campo <b>fome</b> e decide o caminho com a <b>seleção</b>. Os jogos de bichinho virtual fazem isso o tempo todo com a ficha de cada pet." });

  /* ---------- M4 · depurar ---------- */
  A.m4.gancho = { html: "<p>🤖 O Léo programou o robô da feira de ciências para dar <b>3 pulinhos</b> e depois dizer <b>“Tchau!”</b>. Na hora da apresentação, o robô disse “Tchau!” <b>três vezes</b>!</p><p>🤔 Onde está o erro? O Léo precisa apagar tudo e começar de novo, ou existe um jeito de detetive para achar o problema?</p>" };
  A.m4.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o aviso do termômetro",
      enunciado: "<p>O aplicativo de clima devia mostrar <b>Beba bastante água!</b> quando a temperatura é <b>30 graus ou mais</b>. Hoje está <b>35 graus</b>, mas ele mostrou “Clima agradável”. A tela deve mostrar:</p><p><b>Temperatura: 35</b><br><b>Beba bastante água!</b></p><p>Use o método do detetive: <b>rode</b>, <b>compare</b>, <b>ache</b> o bloco e <b>mude uma coisa só</b>.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
      inicio: [["definir", "temperatura", 35], ["mostrar", ["juntar", "Temperatura: ", v("temperatura")]], ["se", ["<", v("temperatura"), 30], [["mostrar", "Beba bastante água!"]], [["mostrar", "Clima agradável"]]]],
      esperado: ["Temperatura: 35", "Beba bastante água!"], exige: ["se"],
      solucao: [["definir", "temperatura", 35], ["mostrar", ["juntar", "Temperatura: ", v("temperatura")]], ["se", [">=", v("temperatura"), 30], [["mostrar", "Beba bastante água!"]], [["mostrar", "Clima agradável"]]]],
      dicas: ["A 1ª linha saiu certa; a diferença começou na 2ª. Ela vem do bloco se.", "Olhe o sinal da condição: “menor que 30” está certo para um dia de 35 graus?"],
      explicacao: "Era uma <b>condição trocada</b>: com “temperatura &lt; 30”, o dia quente caía no senão. Trocando para “≥ 30”, o aviso aparece. Uma mudança só resolveu." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "O aplicativo foi atualizado “com correções de erros”. Isso quer dizer que alguém…", opcoes: ["Depurou o programa (achou e consertou bugs)", "Apagou o aplicativo", "Comprou um celular novo"], certo: 0, why: "Achar e consertar erros (bugs) é <b>depurar</b>. As atualizações trazem essas correções." },
        { p: "Você rodou o programa e viu que a <b>3ª linha</b> saiu diferente do esperado. Pelo método do detetive, o próximo passo é…", opcoes: ["Achar o bloco responsável por aquela linha", "Apagar o programa todo", "Mudar vários blocos de uma vez"], certo: 0, why: "Rodar → comparar → <b>achar</b> o bloco daquela linha → mudar uma coisa só e testar." },
        { p: "Por que o detetive muda <b>uma coisa só</b> de cada vez e testa de novo?", opcoes: ["Para saber o que resolveu o problema", "Porque o computador só deixa mudar um bloco", "Para o programa ficar mais comprido"], certo: 0, why: "Se você muda tudo de uma vez, não sabe <b>o que</b> resolveu (ou o que estragou)." }
      ] }
  ];
  mais("m4", "desafio",
    { tipo: "blocos", titulo: "🎂 Conserte o parabéns",
      enunciado: "<p>No aniversário da turma, o programa devia mostrar <b>É pique!</b> 3 vezes e depois <b>É hora!</b>. Rode, compare e conserte:</p><p><b>É pique!</b><br><b>É pique!</b><br><b>É pique!</b><br><b>É hora!</b></p>",
      caixa: ["mostrar", "texto", "numero", "repita"],
      inicio: [["repita", 4, [["mostrar", "É pique!"]]], ["mostrar", "É hora!"]],
      esperado: ["É pique!", "É pique!", "É pique!", "É hora!"], exige: ["repita"],
      solucao: [["repita", 3, [["mostrar", "É pique!"]]], ["mostrar", "É hora!"]],
      dicas: ["Conte quantas vezes apareceu “É pique!”. Era para ser 3.", "Que número está no repita?"],
      explicacao: "Era um <b>número errado</b>: repita 4 em vez de 3. Mudando só o número, o resto do programa continua certo." });
  mais("m4", "turbo",
    { tipo: "blocos", titulo: "📢 Três bugs no aviso da escola",
      enunciado: "<p>O aviso da escola devia aparecer assim:</p><p><b>Olá, turma!</b><br><b>Amanhã tem Informática</b><br><b>Amanhã tem Informática</b><br><b>Tchau!</b></p><p>Mas o programa tem <b>3 bugs</b>: um de ordem, um de valor e um de número. Ache um de cada vez, conserte e rode de novo depois de cada conserto.</p>",
      caixa: ["mostrar", "texto", "numero", "repita"],
      inicio: [["mostrar", "Tchau!"], ["mostrar", "Óla, turma!"], ["repita", 3, [["mostrar", "Amanhã tem Informática"]]]],
      esperado: ["Olá, turma!", "Amanhã tem Informática", "Amanhã tem Informática", "Tchau!"], exige: ["repita"],
      solucao: [["mostrar", "Olá, turma!"], ["repita", 2, [["mostrar", "Amanhã tem Informática"]]], ["mostrar", "Tchau!"]],
      dicas: ["Bug de ordem: o “Tchau!” tem que ser o último bloco.", "Bug de valor: confira a escrita do “Olá” (o acento fica no a).", "Bug de número: quantas vezes o aviso deve aparecer?"],
      explicacao: "Ordem trocada (Tchau! no começo), valor errado (Óla) e número errado (repita 3). Consertando um de cada vez e testando, você sabe exatamente o que cada mudança resolveu." });

  /* ---------- M5 · decompor e reaproveitar ---------- */
  A.m5.gancho = { html: "<p>🎉 A professora disse: “A turma vai organizar a festa de fim de ano. Organizem tudo!”. Todo mundo ficou perdido, falando ao mesmo tempo.</p><p>🤔 Por onde começar um problema tão grande? E se uma tarefa (como arrumar as cadeiras) se repete várias vezes, é preciso explicar tudo de novo toda vez?</p>" };
  A.m5.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o aquecimento da Educação Física",
      enunciado: "<p>O professor de Educação Física repete o mesmo alongamento entre os exercícios. Crie o bloco próprio <b>alongar</b> (gaveta 🧩 Meus blocos) com <b>braços para cima</b> e <b>toca o pé</b>, e chame-o duas vezes. A tela deve mostrar:</p><p><b>corrida</b><br><b>braços para cima</b><br><b>toca o pé</b><br><b>polichinelos</b><br><b>braços para cima</b><br><b>toca o pé</b></p>",
      caixa: ["mostrar", "texto", "funcao"],
      esperado: ["corrida", "braços para cima", "toca o pé", "polichinelos", "braços para cima", "toca o pé"], exige: ["funcao"],
      solucao: [["funcao", "alongar", [["mostrar", "braços para cima"], ["mostrar", "toca o pé"]]], ["mostrar", "corrida"], ["chamar", "alongar"], ["mostrar", "polichinelos"], ["chamar", "alongar"]],
      dicas: ["Pegue o “para fazer algo” na gaveta 🧩 Meus blocos e troque o nome para alongar.", "Coloque os dois “mostrar” do alongamento dentro dele. Depois o bloco “alongar” aparece na gaveta para ser chamado."],
      explicacao: "O alongamento foi escrito <b>uma vez só</b> e <b>chamado</b> duas vezes. Se o professor mudar o alongamento, muda num lugar só." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "No trabalho em grupo, um faz a introdução, outro a pesquisa e outro o cartaz. Isso é…", opcoes: ["Decompor o problema em partes", "Cada um fazer tudo sozinho", "Depurar o trabalho"], certo: 0, why: "Dividir um problema grande em partes menores é <b>decompor</b>." },
        { p: "A música tem o bloco próprio <b>refrão</b>, chamado 3 vezes. O refrão mudou. Onde você conserta?", opcoes: ["Só dentro do bloco refrão, uma vez", "Nos 3 lugares, um por um", "Precisa montar o programa de novo"], certo: 0, why: "Mudou no bloco, <b>vale em todos os lugares</b> onde ele é chamado." },
        { p: "O botão “compartilhar” aparece igualzinho em muitos aplicativos. Ele é um exemplo de…", opcoes: ["Reaproveitar um bloco pronto", "Repetição sem fim", "Condição trocada"], certo: 0, why: "É um bloco pronto que todo aplicativo <b>reaproveita</b>, sem escrever de novo." }
      ] }
  ];
  mais("m5", "desafio",
    { tipo: "blocos", titulo: "🧹 O robô faxineiro: dois blocos próprios",
      enunciado: "<p>Decomponha a faxina do robô em dois blocos próprios: <b>varrer</b> (mostra <b>varre o chão</b>) e <b>guardar</b> (mostra <b>guarda os livros</b>). O programa chama o varrer <b>2 vezes</b> (com o repita) e depois o guardar. A tela deve mostrar:</p><p><b>varre o chão</b><br><b>varre o chão</b><br><b>guarda os livros</b></p>",
      caixa: ["mostrar", "texto", "numero", "repita", "funcao"],
      esperado: ["varre o chão", "varre o chão", "guarda os livros"], exige: ["funcao", "repita"],
      solucao: [["funcao", "varrer", [["mostrar", "varre o chão"]]], ["funcao", "guardar", [["mostrar", "guarda os livros"]]], ["repita", 2, [["chamar", "varrer"]]], ["chamar", "guardar"]],
      dicas: ["Crie os dois blocos roxos “para fazer algo”, um chamado varrer e outro guardar.", "O programa principal: repita 2 vezes (chamar varrer) e, embaixo, chamar guardar."],
      explicacao: "Cada parte da faxina virou um bloco com nome: o programa principal fica curto e fácil de ler, quase como uma lista de tarefas." });
  mais("m5", "turbo",
    { tipo: "blocos", titulo: "🎶 A música da festa: refrão dentro do repita",
      enunciado: "<p>A música da festa tem 3 versos, e depois de cada verso vem o refrão <b>é festa!</b>. A tela deve mostrar:</p><p><b>verso 1</b><br><b>é festa!</b><br><b>verso 2</b><br><b>é festa!</b><br><b>verso 3</b><br><b>é festa!</b></p><p>Crie o bloco próprio <b>refrão</b>. No programa: variável <b>n</b> começando em 1 e <b>repita 3 vezes</b>: mostrar “verso ” com n (num “criar texto com”), chamar refrão e <b>alterar n por 1</b>.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "funcao"],
      esperado: ["verso 1", "é festa!", "verso 2", "é festa!", "verso 3", "é festa!"], exige: ["funcao", "repita", "variavel"],
      solucao: [["funcao", "refrão", [["mostrar", "é festa!"]]], ["definir", "n", 1], ["repita", 3, [["mostrar", ["juntar", "verso ", v("n")]], ["chamar", "refrão"], ["mudar", "n", 1]]]],
      dicas: ["“verso ” tem um espaço no fim, antes do número.", "Dentro do repita vão 3 blocos: mostrar, chamar refrão e alterar n por 1."],
      explicacao: "Juntando repetição, variável e bloco próprio, 6 linhas saem de um programa bem curto. Mudou o refrão? Muda num lugar só." });

  /* ---------- M6 · programar em dupla ---------- */
  A.m6.gancho = { html: "<p>👫 A Carla e o Davi programaram juntos. A Carla ficou com o mouse <b>a aula inteira</b> e o Davi só olhou. No fim, o programa tinha erros, a Carla disse “a culpa é sua!”, e o Davi não sabia explicar nada.</p><p>🤔 O que deu errado nessa dupla? Como seria uma dupla que funciona?</p>" };
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: você é o navegador da dupla",
      enunciado: "<p>Você é o 🧭 <b>navegador</b>. O piloto montou o cardápio da cantina, mas o título apareceu repetido. Confira o programa com ele e consertem juntos. A tela deve mostrar:</p><p><b>Cardápio de hoje:</b><br><b>arroz</b><br><b>feijão</b><br><b>suco</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
      inicio: [["definir", "cardapio", L("arroz", "feijão", "suco")], ["paracada", "c", v("cardapio"), [["mostrar", "Cardápio de hoje:"], ["mostrar", v("c")]]]],
      esperado: ["Cardápio de hoje:", "arroz", "feijão", "suco"], exige: ["paracada"],
      solucao: [["definir", "cardapio", L("arroz", "feijão", "suco")], ["mostrar", "Cardápio de hoje:"], ["paracada", "c", v("cardapio"), [["mostrar", v("c")]]]],
      dicas: ["O navegador avisa com respeito: “acho que o título está dentro do para cada”.", "Tire o “mostrar Cardápio de hoje:” de dentro do para cada e coloque antes dele."],
      explicacao: "Era um <b>bloco no lugar errado</b>: dentro do para cada, o título se repetia a cada item. O navegador conferiu, a dupla consertou junta." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "Na programação em dupla, quem fica com o <b>mouse e o teclado</b>?", opcoes: ["🕹️ O piloto", "🧭 O navegador", "Os dois ao mesmo tempo"], certo: 0, why: "O <b>piloto</b> monta os blocos; o navegador lê, planeja e confere, sem pegar o mouse." },
        { p: "De quanto em quanto tempo a dupla <b>reveza</b> os papéis?", opcoes: ["A cada 10 minutos", "Só no fim do ano", "Nunca: cada um tem um papel fixo"], certo: 0, why: "A cada <b>10 minutos</b>: assim os dois aprendem tudo." },
        { p: "O programa da dupla deu erro. Pelos combinados, o erro é…", opcoes: ["Da dupla, não de um só", "De quem estava com o mouse", "Do navegador"], certo: 0, why: "O erro é <b>da dupla</b>: os dois procuram e consertam juntos." }
      ] }
  ];
  mais("m6", "desafio",
    { tipo: "mensagens", titulo: "💬 Como falar com a sua dupla?", app: "👥 A dupla",
      botoes: [{ id: "S", rot: "👍 Segue os combinados" }, { id: "N", rot: "👎 Fere os combinados" }],
      enunciado: "<p>Leia cada frase dita na dupla. Ela segue os combinados ou não?</p>",
      itens: [
        { de: "", t: "Acho que esse bloco vai dentro do repita. Vamos testar?", c: "S", why: "Sugestão com respeito, e testa para conferir." },
        { de: "", t: "Você é burro, isso tá tudo errado!", c: "N", why: "Ofende o colega. O combinado é falar com respeito." },
        { de: "", t: "Testa a sua ideia primeiro, depois a gente testa a minha.", c: "S", why: "Ouve a ideia do outro antes de testar a sua." },
        { de: "", t: "Deu erro por sua culpa.", c: "N", why: "O erro é da dupla, não de um só." },
        { de: "", t: "Deu erro. Vamos rodar de novo e comparar juntos?", c: "S", why: "A dupla procura o erro junta." },
        { de: "", t: "Me dá o mouse, eu faço tudo sozinho.", c: "N", why: "Os papéis se revezam, e o piloto não decide tudo sozinho." }],
      okMsg: "Dupla nota 10!",
      explicacao: "Falar com respeito, ouvir a ideia do outro e lembrar que o erro é da dupla: é isso que faz a dupla funcionar." });
  mais("m6", "turbo",
    { tipo: "blocos", titulo: "🏅 Em dupla: o placar do jogo",
      enunciado: "<p>Agora a dupla vai montar o programa “Placar do jogo” que vocês planejaram. Cada acerto vale <b>10 pontos</b> e foram <b>3 acertos</b>. A tela deve mostrar:</p><p><b>Placar: 30</b><br><b>Vitória!</b></p><p>Se o placar fosse menor que 30, mostraria <b>Tente de novo</b>. Troquem de papel na metade!</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
      esperado: ["Placar: 30", "Vitória!"], exige: ["repita", "se", "variavel"],
      solucao: [["definir", "placar", 0], ["repita", 3, [["mudar", "placar", 10]]], ["mostrar", ["juntar", "Placar: ", v("placar")]], ["se", [">=", v("placar"), 30], [["mostrar", "Vitória!"]], [["mostrar", "Tente de novo"]]]],
      dicas: ["Parte 1 (piloto A): definir placar para 0 e repita 3 vezes com alterar placar por 10.", "Parte 2 (piloto B): mostrar o placar e o se … senão, fora do repita."],
      explicacao: "Planejar, montar em partes, testar e trocar: a dupla decompôs o placar em duas partes e cada um montou uma." });

  /* ---------- M7 · desafios de depuração ---------- */
  A.m7.gancho = { html: "<p>🕵️ O programa da secretaria mostrou <b>“Caio — (sem turma)”</b>, e a lista de chamada <b>pulou</b> o nome da Bia.</p><p>🤔 Que <b>pistas</b> esses erros dão? Por onde você começaria a procurar o bug?</p>" };
  A.m7.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o pódio da corrida",
      enunciado: "<p>Na corrida da escola, a lista <b>chegada</b> guarda quem chegou: <b>Lia, Rafa, Gui</b> (nessa ordem). O programa do pódio saiu com os nomes trocados. Conserte para mostrar:</p><p><b>1º lugar: Lia</b><br><b>2º lugar: Rafa</b><br><b>3º lugar: Gui</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista"],
      inicio: [["definir", "chegada", L("Lia", "Rafa", "Gui")], ["mostrar", ["juntar", "1º lugar: ", ["item", v("chegada"), 2]]], ["mostrar", ["juntar", "2º lugar: ", ["item", v("chegada"), 1]]], ["mostrar", ["juntar", "3º lugar: ", ["item", v("chegada"), 3]]]],
      esperado: ["1º lugar: Lia", "2º lugar: Rafa", "3º lugar: Gui"], exige: ["lista"],
      solucao: [["definir", "chegada", L("Lia", "Rafa", "Gui")], ["mostrar", ["juntar", "1º lugar: ", ["item", v("chegada"), 1]]], ["mostrar", ["juntar", "2º lugar: ", ["item", v("chegada"), 2]]], ["mostrar", ["juntar", "3º lugar: ", ["item", v("chegada"), 3]]]],
      dicas: ["Pista: apareceu o item errado da lista → posição errada.", "Quem chegou em 1º está na posição 1 da lista."],
      explicacao: "As posições estavam trocadas nas duas primeiras linhas. Lembre: a posição começa no 1, e a 3ª linha já estava certa." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use as pistas para responder.</p>",
      perguntas: [
        { p: "Apareceu <b>“(sem idade)”</b> na tela. Qual é o erro provável?", opcoes: ["O nome do campo está diferente (idade × idadee)", "A lista está vazia", "O repita tem o número errado"], certo: 0, why: "“(sem idade)” quer dizer que a ficha não tem um campo com esse nome: ele foi escrito diferente." },
        { p: "Apareceu o item errado da lista. Lembre: as posições da lista começam no…", opcoes: ["1", "0", "10"], certo: 0, why: "A primeira posição é a <b>1</b>." },
        { p: "A parte repetida saiu errada em <b>vários lugares</b> do programa. Onde está o erro provável?", opcoes: ["Dentro do bloco próprio: conserte lá, uma vez só", "Em cada lugar, um por um", "No botão ▶️ Rodar"], certo: 0, why: "Se o erro aparece em todos os lugares onde o bloco é chamado, ele está <b>dentro do bloco próprio</b>." }
      ] }
  ];
  mais("m7", "desafio",
    { tipo: "blocos", titulo: "🎒 Pista: faltou o material!",
      enunciado: "<p>O programa devia mostrar o <b>material</b> da mochila, mas mostrou o lanche! A tela deve mostrar:</p><p><b>caderno</b><br><b>estojo</b><br><b>régua</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
      inicio: [["definir", "material", L("caderno", "estojo", "régua")], ["definir", "lanche", L("pão", "suco")], ["paracada", "x", v("lanche"), [["mostrar", v("x")]]]],
      esperado: ["caderno", "estojo", "régua"], exige: ["paracada"],
      solucao: [["definir", "material", L("caderno", "estojo", "régua")], ["definir", "lanche", L("pão", "suco")], ["paracada", "x", v("material"), [["mostrar", v("x")]]]],
      dicas: ["Pista: apareceram os itens errados → o para cada está percorrendo a lista errada.", "Troque a lista do para cada: de lanche para material."],
      explicacao: "O para cada percorria a lista <b>lanche</b>. Trocando para <b>material</b>, uma mudança só, apareceram os 3 itens certos." });
  mais("m7", "turbo",
    { tipo: "blocos", titulo: "🧾 Dois bugs na conta do lanche",
      enunciado: "<p>Os preços do lanche são <b>4, 3 e 5</b> reais. O programa devia mostrar só uma linha:</p><p><b>Total: 12</b></p><p>Mas tem <b>2 bugs</b>: um de valor e um de bloco no lugar errado. Rode, compare e conserte um de cada vez.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "paracada"],
      inicio: [["definir", "precos", L(4, 3, 5)], ["definir", "total", 10], ["paracada", "p", v("precos"), [["mudar", "total", v("p")], ["mostrar", ["juntar", "Total: ", v("total")]]]]],
      esperado: ["Total: 12"], exige: ["paracada", "variavel"],
      solucao: [["definir", "precos", L(4, 3, 5)], ["definir", "total", 0], ["paracada", "p", v("precos"), [["mudar", "total", v("p")]]], ["mostrar", ["juntar", "Total: ", v("total")]]],
      dicas: ["Pista: apareceram 3 linhas de total → o mostrar está dentro do para cada.", "Pista: o total deu 10 a mais → a soma tem que começar do 0."],
      explicacao: "O total começava em 10 (valor errado) e o mostrar estava dentro do para cada (aparecia a cada volta). 4 + 3 + 5 = 12." });

  /* ---------- M8 · o placar do quiz ---------- */
  A.m8.gancho = { html: "<p>🧠 No fim do quiz da sala, a tela mostra na hora: <b>“Você acertou 3 de 4!”</b>.</p><p>🤔 Como o programa confere cada resposta? E onde ele vai <b>contando</b> os acertos?</p>" };
  A.m8.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: corrigir a prova de V ou F",
      enunciado: "<p>A prova tem 3 questões de verdadeiro ou falso. O <b>gabarito</b> é <b>V, F, V</b> e o aluno respondeu <b>V, V, V</b>. A tela deve mostrar:</p><p><b>Acertos: 2</b></p><p>As listas e as variáveis <b>acertos</b> (0) e <b>i</b> (1) já estão prontas. Monte o <b>repita 3 vezes</b>: <b>se</b> item i do gabarito = item i das respostas, <b>alterar acertos por 1</b>; depois, <b>alterar i por 1</b>. No fim, mostre os acertos.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
      inicio: [["definir", "gabarito", L("V", "F", "V")], ["definir", "respostas", L("V", "V", "V")], ["definir", "acertos", 0], ["definir", "i", 1]],
      esperado: ["Acertos: 2"], exige: ["repita", "se"],
      solucao: [["definir", "gabarito", L("V", "F", "V")], ["definir", "respostas", L("V", "V", "V")], ["definir", "acertos", 0], ["definir", "i", 1],
        ["repita", 3, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Acertos: ", v("acertos")]]],
      dicas: ["No “em lista … obter #”, coloque a variável i no lugar do número da posição.", "O “alterar i por 1” fica dentro do repita, mas fora do se.", "O mostrar fica embaixo do repita."],
      explicacao: "Posição 1: V = V ✅; posição 2: F ≠ V ❌; posição 3: V = V ✅. O <b>contador</b> acertos terminou em 2." },
    { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
      enunciado: "<p>Use o que você aprendeu hoje para responder.</p>",
      perguntas: [
        { p: "O contador de passos do celular soma 1 a cada passo. No programa, isso é feito com…", opcoes: ["alterar passos por 1", "definir passos para 0, a cada passo", "mostrar na tela"], certo: 0, why: "O bloco <b>alterar … por 1</b> soma 1 ao valor da variável contadora." },
        { p: "Antes de começar a contar, a variável contadora deve valer…", opcoes: ["0", "1", "10"], certo: 0, why: "O <b>contador</b> começa em <b>0</b> e aumenta 1 a cada acerto." },
        { p: "Gabarito <b>B, A, D, C</b> e respostas <b>B, A, A, C</b>. Quantos acertos?", opcoes: ["3", "2", "4"], certo: 0, why: "Posições 1, 2 e 4 batem; a 3 (D × A) não. São <b>3</b> acertos." }
      ] }
  ];
  mais("m8", "desafio",
    { tipo: "blocos", titulo: "🎉 O placar dá parabéns",
      enunciado: "<p>O programa do quiz já conta os acertos (gabarito <b>B, A, D, C</b> e respostas <b>B, C, D, C</b>). Acrescente no fim: <b>se acertos ≥ 3</b>, mostrar <b>Parabéns!</b>; senão, mostrar <b>Estude mais um pouco</b>. A tela deve mostrar:</p><p><b>Acertos: 3</b><br><b>Parabéns!</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
      inicio: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1],
        ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Acertos: ", v("acertos")]]],
      esperado: ["Acertos: 3", "Parabéns!"], exige: ["se"],
      solucao: [["definir", "gabarito", L("B", "A", "D", "C")], ["definir", "respostas", L("B", "C", "D", "C")], ["definir", "acertos", 0], ["definir", "i", 1],
        ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Acertos: ", v("acertos")]],
        ["se", [">=", v("acertos"), 3], [["mostrar", "Parabéns!"]], [["mostrar", "Estude mais um pouco"]]]],
      dicas: ["O novo se … senão vai no fim, embaixo do mostrar (fora do repita).", "Use a engrenagem do “se” para ganhar o senão."],
      explicacao: "Depois de contar, o programa <b>decide</b> a mensagem com uma seleção. É assim que o jogo escolhe entre “Parabéns!” e “Tente de novo”." });
  mais("m8", "turbo",
    { tipo: "blocos", titulo: "💯 Cada acerto vale 10 pontos",
      enunciado: "<p>No quiz da gincana, cada acerto vale <b>10 pontos</b>. Gabarito <b>A, B, B, D</b> e respostas <b>A, B, C, D</b>. A tela deve mostrar:</p><p><b>Pontos: 30</b></p><p>Monte o programa inteiro: as duas listas, a variável <b>pontos</b> (começa em 0), a variável <b>i</b> (começa em 1) e o repita que confere posição por posição.</p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
      esperado: ["Pontos: 30"], exige: ["repita", "se", "lista"],
      solucao: [["definir", "gabarito", L("A", "B", "B", "D")], ["definir", "respostas", L("A", "B", "C", "D")], ["definir", "pontos", 0], ["definir", "i", 1],
        ["repita", 4, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "pontos", 10]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Pontos: ", v("pontos")]]],
      dicas: ["É o mesmo programa do contador de acertos; só muda o “alterar pontos por 10”.", "As listas precisam ter 4 itens cada (use a engrenagem)."],
      explicacao: "3 acertos (posições 1, 2 e 4) × 10 = 30 pontos. Trocando o “por 1” por “por 10”, o contador vira placar de pontos." });
})();
