/* ============================================================
   ATIVIDADES — Informática 7º ano — 1º bimestre de 2027 · TRILHA PASSO A PASSO
   Mesmas missões da turma, um passo por vez. Nos programas de blocos,
   quase tudo já vem montado: o aluno muda só um pedacinho.
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
(function () {
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  PORTAL.registrarAtividades("informatica-7ano-2027-1bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "blocos", titulo: "Rode o programa",
        enunciado: "<p>O programa já está pronto. Aperte <strong>▶️ Rodar o programa</strong> e olhe a <strong>📺 Tela do programa</strong>.</p>",
        caixa: ["mostrar", "texto"],
        inicio: [["mostrar", "Olá!"], ["mostrar", "Eu sei programar!"]],
        esperado: ["Olá!", "Eu sei programar!"],
        solucao: [["mostrar", "Olá!"], ["mostrar", "Eu sei programar!"]],
        explicacao: "O computador fez os blocos <strong>de cima para baixo</strong>: primeiro “Olá!”, depois “Eu sei programar!”. Isso é <strong>sequência</strong>." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Passo 1 · O que cada bloco faz?",
        enunciado: "<p>Veja a tabela <strong>Bloco · O que faz</strong>.</p>",
        pares: [
          { a: "📺 mostrar na tela", b: "Escreve uma mensagem" },
          { a: "🔁 repita", b: "Faz várias vezes" },
          { a: "🔀 se … senão", b: "Escolhe um caminho" }],
        explicacao: "mostrar escreve, repita faz várias vezes e se escolhe o caminho." },

      { tipo: "blocos", titulo: "Passo 2 · Mude só o número",
        enunciado: "<p>O programa mostra “pulo” <strong>3</strong> vezes. Clique no número <strong>3</strong> do repita, troque por <strong>5</strong> e aperte <strong>▶️ Rodar</strong>.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 3, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        esperado: ["pulo", "pulo", "pulo", "pulo", "pulo", "fim"],
        solucao: [["repita", 5, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        dicas: ["Clique em cima do 3, apague e digite 5."],
        explicacao: "O <strong>repita 5 vezes</strong> faz o “pulo” 5 vezes. O “fim” está fora do repita: aparece uma vez." },

      { tipo: "escolha", titulo: "Passo 3 · Dentro ou fora?",
        enunciado: "<p>Programa: <em>repita 3 vezes: [mostrar “pulo”] · mostrar “fim”</em> (o “fim” está embaixo, fora do repita).</p>",
        perguntas: [
          { p: "Quantas vezes aparece “fim”?", opcoes: ["1 vez", "3 vezes"], certo: 0 }],
        explicacao: "Fora (embaixo) do repita, o bloco aparece <strong>1 vez</strong>. Dentro, apareceria 3 vezes." },

      { tipo: "classificar", titulo: "Passo 4 · Qual é a ideia?",
        categorias: [{ id: "R", rot: "Repetição", ic: "🔁", desc: "faz várias vezes" }, { id: "S", rot: "Seleção", ic: "🔀", desc: "escolhe um caminho" }],
        itens: [
          { t: "Fazer 10 polichinelos", ic: "🤸", c: "R" },
          { t: "Se chover, levar guarda-chuva", ic: "☔", c: "S" },
          { t: "Se a nota for 5 ou mais, passou", ic: "📝", c: "S" }],
        explicacao: "Fazer várias vezes é <strong>repetição</strong>. “Se …” é <strong>seleção</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "O repita <strong>faz várias vezes</strong>. Quem escolhe o caminho é o <strong>se</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "blocos", titulo: "Rode a lista de frutas",
        enunciado: "<p>Aperte <strong>▶️ Rodar o programa</strong>. O <strong>para cada</strong> mostra todas as frutas da lista.</p>",
        caixa: ["mostrar", "lista", "variavel", "paracada"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["paracada", "f", v("frutas"), [["mostrar", v("f")]]]],
        esperado: ["maçã", "uva", "caju", "açaí"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["paracada", "f", v("frutas"), [["mostrar", v("f")]]]],
        explicacao: "O <strong>para cada</strong> passa por todos os itens da lista, um de cada vez." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Qual é o item?",
        enunciado: "<p>Lista <strong>frutas</strong>: 1 maçã · 2 uva · 3 caju · 4 açaí</p>",
        perguntas: [
          { p: "Qual é o item da posição 3?", opcoes: ["caju", "uva", "açaí"], certo: 0 },
          { p: "Qual é o tamanho da lista?", opcoes: ["4", "3", "1"], certo: 0 }],
        explicacao: "Posição 3 é <strong>caju</strong>. São 4 itens: o tamanho é <strong>4</strong>." },

      { tipo: "blocos", titulo: "Passo 2 · Mude a posição",
        enunciado: "<p>O programa mostra o item da posição <strong>1</strong> (maçã). Troque o <strong>1</strong> por <strong>3</strong> para mostrar <strong>caju</strong> e rode.</p>",
        caixa: ["mostrar", "lista", "variavel", "numero"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 1]]],
        esperado: ["caju"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 3]]],
        dicas: ["Clique no número 1 do bloco “em lista frutas obter #” e digite 3."],
        explicacao: "“em lista frutas obter # 3” pega o item da posição 3: <strong>caju</strong>." },

      { tipo: "ligar", titulo: "Passo 3 · Cada bloco e o que faz",
        pares: [
          { a: "em lista … obter #", b: "Pega o item de uma posição" },
          { a: "tamanho de", b: "Conta quantos itens tem" },
          { a: "para cada", b: "Passa por todos os itens" }],
        explicacao: "obter # pega um item, tamanho conta, para cada passa por todos." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "🎵 A playlist de músicas é:", opcoes: ["Uma lista", "Um bloco mostrar na tela"], certo: 0 }],
        explicacao: "A playlist guarda várias músicas em ordem: é uma <strong>lista</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "A posição 2 é <strong>uva</strong>. Maçã é a posição 1." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "blocos", titulo: "Rode a ficha da Ana",
        enunciado: "<p>Aperte <strong>▶️ Rodar o programa</strong>. Ele mostra o campo <strong>nome</strong> e o campo <strong>idade</strong> da ficha.</p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "nome"]], ["mostrar", ["campo", v("aluno"), "idade"]]],
        esperado: ["Ana", "12"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "nome"]], ["mostrar", ["campo", v("aluno"), "idade"]]],
        explicacao: "A ficha <strong>aluno</strong> tem o campo nome (Ana) e o campo idade (12)." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Lista ou registro?",
        categorias: [{ id: "L", rot: "Lista", ic: "📝", desc: "vários itens parecidos" }, { id: "R", rot: "Registro (ficha)", ic: "🗂️", desc: "informações de uma coisa só" }],
        itens: [
          { t: "Nomes da turma", ic: "👥", c: "L" },
          { t: "Os dados de um aluno", ic: "🧑", c: "R" },
          { t: "O contato do celular", ic: "📱", c: "R" }],
        explicacao: "Vários nomes parecidos: <strong>lista</strong>. Várias informações de uma coisa só: <strong>registro</strong>." },

      { tipo: "escolha", titulo: "Passo 2 · Nome e valor",
        perguntas: [
          { p: "No campo idade = 12, qual é o valor?", opcoes: ["12", "idade"], certo: 0 },
          { p: "Num registro, acho a informação pelo:", opcoes: ["Nome do campo", "Número da posição"], certo: 0 }],
        explicacao: "“idade” é o nome do campo e <strong>12</strong> é o valor. No registro, achamos pelo <strong>nome do campo</strong>." },

      { tipo: "blocos", titulo: "Passo 3 · Mude o valor",
        enunciado: "<p>A ficha diz que a Ana tem 12 anos. Ela fez aniversário! Troque o <strong>12</strong> por <strong>13</strong> e rode.</p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "nome"]], ["mostrar", ["campo", v("aluno"), "idade"]]],
        esperado: ["Ana", "13"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "nome", "Ana"], ["ficha_por", "aluno", "idade", 13], ["mostrar", ["campo", v("aluno"), "nome"]], ["mostrar", ["campo", v("aluno"), "idade"]]],
        dicas: ["Clique no 12 do bloco “na ficha aluno o campo idade vale” e digite 13."],
        explicacao: "O campo <strong>idade</strong> agora vale <strong>13</strong>. O nome do campo continua o mesmo; só o valor mudou." },

      { tipo: "ligar", titulo: "Passo 4 · Fichas do dia a dia",
        pares: [
          { a: "Contato do celular", b: "nome, telefone, aniversário" },
          { a: "Personagem do jogo", b: "nome, vida, força" }],
        explicacao: "Cada ficha tem os seus <strong>campos</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "No registro, achamos pelo <strong>nome do campo</strong>. Pela posição é na lista." }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "rota", titulo: "O método do detetive 🕵️",
        enunciado: "<p>Clique nos passos <strong>na ordem</strong>.</p>",
        etapas: [
          { ic: "▶️", t: "Rodar" },
          { ic: "🔎", t: "Comparar com o que devia aparecer" },
          { ic: "🧱", t: "Achar o bloco do erro" },
          { ic: "🔧", t: "Mudar uma coisa só e testar de novo", dica: "Uma mudança por vez." }],
        okMsg: "Detetive aprovado! 🕵️",
        explicacao: "Rodar → comparar → achar → mudar uma coisa só." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · O que é bug?",
        perguntas: [
          { p: "🐞 Bug é:", opcoes: ["Um erro no programa", "Um jogo novo"], certo: 0 },
          { p: "🔧 Depurar é:", opcoes: ["Achar e consertar o erro", "Apagar o programa"], certo: 0 }],
        explicacao: "<strong>Bug</strong> é o erro; <strong>depurar</strong> é achar e consertar." },

      { tipo: "blocos", titulo: "Passo 2 · Conserte: número errado",
        enunciado: "<p>Devia mostrar <strong>Vai!</strong> 3 vezes, mas mostra 4. Troque o número do repita e rode.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["repita", 4, [["mostrar", "Vai!"]]]],
        esperado: ["Vai!", "Vai!", "Vai!"],
        solucao: [["repita", 3, [["mostrar", "Vai!"]]]],
        dicas: ["Troque o 4 por 3."],
        explicacao: "Era o erro <strong>número errado</strong>: repita 4 em vez de 3." },

      { tipo: "blocos", titulo: "Passo 3 · Conserte: ordem trocada",
        enunciado: "<p>Devia mostrar <strong>pulo, pulo, pulo</strong> e depois <strong>fim</strong>. Arraste o “mostrar fim” para <strong>baixo</strong> do repita e rode.</p>",
        caixa: ["mostrar", "texto", "numero", "repita"],
        inicio: [["mostrar", "fim"], ["repita", 3, [["mostrar", "pulo"]]]],
        esperado: ["pulo", "pulo", "pulo", "fim"],
        solucao: [["repita", 3, [["mostrar", "pulo"]]], ["mostrar", "fim"]],
        dicas: ["Segure o bloco “mostrar fim” e solte embaixo do repita, encaixado."],
        explicacao: "Era a <strong>ordem trocada</strong>: o computador lê de cima para baixo." },

      { tipo: "escolha", titulo: "Passo 4 · Uma coisa só",
        perguntas: [
          { p: "Por que mudar uma coisa de cada vez?", opcoes: ["Para saber o que resolveu", "Para terminar mais rápido"], certo: 0 }],
        explicacao: "Mudando uma coisa só, você sabe <strong>o que resolveu</strong> o erro." }
    ],
    vf: [{ v: true }, { v: false, why: "Mude <strong>uma coisa de cada vez</strong>, para saber o que resolveu." }, { v: true }]
  },

  /* ======================= MISSÃO 5 ======================= */
  m5: {
    pratica: [
      { tipo: "blocos", titulo: "Rode o refrão",
        enunciado: "<p>O bloco <strong>refrão</strong> foi criado uma vez só (o bloco roxo) e é <strong>chamado</strong> duas vezes. Aperte <strong>▶️ Rodar</strong>.</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        esperado: ["verso 1", "la la la", "verso 2", "la la la"],
        solucao: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        explicacao: "O refrão foi escrito uma vez e <strong>chamado</strong> duas: isso é reaproveitar." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Decomponha a festa",
        categorias: [{ id: "D", rot: "Decoração", ic: "🎈", desc: "enfeitar" }, { id: "C", rot: "Comida", ic: "🍰", desc: "comer" }],
        itens: [
          { t: "Encher os balões", ic: "🎈", c: "D" },
          { t: "Comprar o bolo", ic: "🎂", c: "C" },
          { t: "Pendurar a faixa", ic: "🎉", c: "D" },
          { t: "Fazer o suco", ic: "🧃", c: "C" }],
        explicacao: "Decompor: a festa vira partes menores, e cada grupo cuida de uma." },

      { tipo: "blocos", titulo: "Passo 2 · Mude o refrão",
        enunciado: "<p>Mude o texto <strong>la la la</strong> dentro do bloco roxo para <strong>lê lê lê</strong> e rode. Mudou nos dois lugares!</p>",
        caixa: ["mostrar", "texto", "funcao"],
        inicio: [["funcao", "refrão", [["mostrar", "la la la"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        esperado: ["verso 1", "lê lê lê", "verso 2", "lê lê lê"],
        solucao: [["funcao", "refrão", [["mostrar", "lê lê lê"]]], ["mostrar", "verso 1"], ["chamar", "refrão"], ["mostrar", "verso 2"], ["chamar", "refrão"]],
        dicas: ["Clique no texto la la la, dentro do bloco roxo “para refrão”, e escreva lê lê lê."],
        explicacao: "Mudou <strong>dentro do bloco</strong>, uma vez só, e valeu em todos os lugares onde ele é chamado." },

      { tipo: "escolha", titulo: "Passo 3 · Chamar",
        perguntas: [
          { p: "Chamar o bloco é:", opcoes: ["Usar o bloco no programa", "Apagar o bloco"], certo: 0 }],
        explicacao: "<strong>Chamar</strong> é usar o bloco próprio no programa." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "No trabalho em grupo, cada um faz uma parte. Isso é:", opcoes: ["Decompor", "Apagar"], certo: 0 }],
        explicacao: "Dividir o trabalho em partes é <strong>decompor</strong>." }
    ],
    vf: [{ v: true }, { v: false, why: "O bloco próprio é escrito <strong>uma vez só</strong> e chamado quando precisar." }, { v: true }]
  },

  /* ======================= MISSÃO 6 ======================= */
  m6: {
    pratica: [
      { tipo: "mensagens", titulo: "Na dupla: com respeito ou não?", app: "👥 Dupla na sala",
        botoes: [{ id: "R", rot: "🙂 Com respeito" }, { id: "N", rot: "🚫 Sem respeito" }],
        enunciado: "<p>Leia cada fala e clique na resposta.</p>",
        itens: [
          { de: "Navegador", t: "Acho que esse bloco vai dentro do repita.", c: "R" },
          { de: "Piloto", t: "Você é burro, sai daqui!", c: "N", why: "O erro é da dupla, não de um só. Fale com respeito." },
          { de: "Navegador", t: "Vamos rodar para testar?", c: "R" }],
        okMsg: "Dupla boa fala com respeito! 👥",
        explicacao: "Sugerir e testar juntos é respeito. Ofender não ajuda: o erro é da dupla." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Piloto ou navegador?",
        categorias: [{ id: "P", rot: "Piloto", ic: "🕹️", desc: "monta os blocos" }, { id: "N", rot: "Navegador", ic: "🧭", desc: "lê e confere" }],
        itens: [
          { t: "Fica com o mouse", ic: "🖱️", c: "P" },
          { t: "Lê o enunciado", ic: "📖", c: "N" },
          { t: "Confere cada bloco", ic: "🔎", c: "N" },
          { t: "Monta os blocos", ic: "🧱", c: "P" }],
        explicacao: "O <strong>piloto</strong> fica com o mouse e monta. O <strong>navegador</strong> lê e confere." },

      { tipo: "ordenar", titulo: "Passo 2 · O jeito da dupla",
        itens: ["📝 Planejar", "🧱 Montar", "▶️ Testar", "🔄 Trocar"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>.</p>",
        explicacao: "Planejar → montar → testar → trocar." },

      { tipo: "escolha", titulo: "Passo 3 · Trocar de papel",
        perguntas: [
          { p: "De quanto em quanto tempo a dupla troca de papel?", opcoes: ["A cada 10 minutos", "Nunca"], certo: 0 }],
        explicacao: "A cada <strong>10 minutos</strong>: assim os dois aprendem tudo." },

      { tipo: "escolha", titulo: "Passo 4 · Deu erro!",
        perguntas: [
          { p: "O programa da dupla deu erro. De quem é o erro?", opcoes: ["Da dupla", "Só do piloto"], certo: 0 }],
        explicacao: "O erro é <strong>da dupla</strong>: os dois consertam juntos." }
    ],
    vf: [{ v: true }, { v: false, why: "O navegador <strong>não pega o mouse</strong>: ele lê e confere." }, { v: true }]
  },

  /* ======================= MISSÃO 7 (extra) ======================= */
  m7: {
    pratica: [
      { tipo: "ligar", titulo: "Pista e erro",
        pares: [
          { a: "Apareceu o item errado da lista", b: "Posição errada" },
          { a: "Apareceu “(sem idade)”", b: "Nome do campo diferente" }],
        explicacao: "Item errado = posição errada. “(sem idade)” = o nome do campo está escrito diferente." }
    ],
    basico: [
      { tipo: "blocos", titulo: "Passo 1 · Conserte a posição",
        enunciado: "<p>Devia mostrar <strong>uva</strong> (posição 2), mas mostra caju. Troque o número e rode.</p>",
        caixa: ["mostrar", "lista", "variavel", "numero"],
        inicio: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 3]]],
        esperado: ["uva"],
        solucao: [["definir", "frutas", L("maçã", "uva", "caju", "açaí")], ["mostrar", ["item", v("frutas"), 2]]],
        dicas: ["Uva é a posição 2. Troque o 3 por 2."],
        explicacao: "Pista: item errado. Erro: <strong>posição</strong>. Uva é a posição 2." },

      { tipo: "blocos", titulo: "Passo 2 · Conserte o nome do campo",
        enunciado: "<p>Devia mostrar <strong>12</strong>, mas aparece “(sem idadee)”. O nome do campo está escrito errado no bloco de mostrar. Troque <strong>idadee</strong> por <strong>idade</strong> e rode.</p>",
        caixa: ["mostrar", "ficha", "variavel", "texto", "numero"],
        inicio: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "idadee"]]],
        esperado: ["12"],
        solucao: [["definir", "aluno", ["ficha"]], ["ficha_por", "aluno", "idade", 12], ["mostrar", ["campo", v("aluno"), "idade"]]],
        dicas: ["Clique em idadee no bloco “campo … da ficha” e apague o e do final."],
        explicacao: "O nome do campo precisa ser <strong>igualzinho</strong>: idade, não idadee." },

      { tipo: "escolha", titulo: "Passo 3 · Hipótese",
        perguntas: [
          { p: "Hipótese é:", opcoes: ["Um palpite sobre onde está o erro", "O nome de um bloco da gaveta"], certo: 0 }],
        explicacao: "A <strong>hipótese</strong> é o palpite que você testa, mudando uma coisa." },

      { tipo: "escolha", titulo: "Passo 4 · O método",
        perguntas: [
          { p: "O que fazer primeiro?", opcoes: ["Rodar e ver o que aparece", "Apagar tudo"], certo: 0 }],
        explicacao: "Primeiro <strong>rodar</strong>, depois comparar, achar e mudar uma coisa só." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Mude <strong>uma coisa de cada vez</strong>." }]
  },

  /* ======================= MISSÃO 8 (extra) ======================= */
  m8: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Confira o quiz", colunaItem: "Posição (gabarito × resposta)", colunaResp: "Acertou?",
        categorias: [{ id: "S", rot: "✅ Acertou" }, { id: "N", rot: "❌ Errou" }],
        itens: [
          { t: "1: B × B", c: "S" },
          { t: "2: A × C", c: "N", why: "A resposta certa era A; o jogador marcou C." },
          { t: "3: D × D", c: "S" },
          { t: "4: C × C", c: "S" }],
        explicacao: "Compare posição por posição: igual é acerto. Foram <strong>3 acertos</strong>." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Gabarito",
        perguntas: [
          { p: "O gabarito é:", opcoes: ["A lista das respostas certas", "A lista dos jogadores"], certo: 0 }],
        explicacao: "O <strong>gabarito</strong> é a lista das respostas certas." },

      { tipo: "escolha", titulo: "Passo 2 · Contador",
        perguntas: [
          { p: "O contador começa em:", opcoes: ["0", "10"], certo: 0 },
          { p: "A cada acerto, o contador:", opcoes: ["Aumenta 1", "Volta para 0"], certo: 0 }],
        explicacao: "O <strong>contador</strong> começa em 0 e aumenta 1 a cada acerto." },

      { tipo: "blocos", titulo: "Passo 3 · Mostre o placar",
        enunciado: "<p>O contador começa em 0 e aumenta 1 a cada acerto. Este jogador acertou <strong>4</strong> perguntas: troque o <strong>3</strong> do repita por <strong>4</strong> e rode para ver o placar.</p>",
        caixa: ["mostrar", "variavel", "numero", "repita"],
        inicio: [["definir", "acertos", 0], ["repita", 3, [["mudar", "acertos", 1]]], ["mostrar", v("acertos")]],
        esperado: ["4"],
        solucao: [["definir", "acertos", 0], ["repita", 4, [["mudar", "acertos", 1]]], ["mostrar", v("acertos")]],
        dicas: ["Clique no 3 do repita e digite 4."],
        explicacao: "Começou em 0 e somou 1 quatro vezes: o placar é <strong>4</strong>." },

      { tipo: "escolha", titulo: "Passo 4 · No dia a dia",
        perguntas: [
          { p: "👣 O contador de passos do celular:", opcoes: ["Soma 1 a cada passo", "Apaga os passos"], certo: 0 }],
        explicacao: "O contador de passos <strong>soma 1</strong> a cada passo, como o placar do quiz." }
    ],
    vf: [{ v: true }, { v: true }, { v: false, why: "Para corrigir, o programa <strong>compara</strong> as duas listas, posição por posição." }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "O computador lê os blocos:", opcoes: ["De cima para baixo", "De baixo para cima"], certo: 0 }], explicacao: "O computador lê os blocos de cima para baixo." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Na lista maçã, uva, caju, a posição 1 é:", opcoes: ["maçã", "caju"], certo: 0 }], explicacao: "A posição 1 é o primeiro item: maçã." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "No registro, acho a informação pelo:", opcoes: ["Nome do campo", "Número da posição"], certo: 0 }], explicacao: "No registro, pelo nome do campo." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "Bug é:", opcoes: ["Um erro no programa", "Um bloco novo"], certo: 0 }], explicacao: "Bug é um erro no programa." },
      { tipo: "relembre", de: "m5" },
      { tipo: "escolha", de: "m5", titulo: "M5 · Responda", perguntas: [{ p: "Dividir um problema em partes é:", opcoes: ["Decompor", "Depurar"], certo: 0 }], explicacao: "Dividir em partes é decompor." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Responda", perguntas: [{ p: "Quem fica com o mouse?", opcoes: ["O piloto", "O navegador"], certo: 0 }], explicacao: "O piloto fica com o mouse." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Responda", perguntas: [{ p: "Apareceu o item errado da lista. O erro provável é:", opcoes: ["Posição errada", "Falta de luz"], certo: 0 }], explicacao: "Item errado = posição errada." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Responda", perguntas: [{ p: "O contador começa em:", opcoes: ["0", "100"], certo: 0 }], explicacao: "O contador começa em 0." }
    ]
  }
  });
})();

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-1bim-trilha"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Programar com blocos", perguntas: [{"p": "O bloco repita serve para:", "opcoes": ["Fazer várias vezes", "Escolher um caminho"], "certo": 0}, {"p": "O computador lê os blocos:", "opcoes": ["De baixo para cima", "De cima para baixo"], "certo": 1}],
      explicacao: "O bloco repita serve para: → <strong>Fazer várias vezes</strong> · O computador lê os blocos: → <strong>De cima para baixo</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Listas", perguntas: [{"p": "Lista maçã, uva, caju, açaí. O item da posição 3 é:", "opcoes": ["caju", "uva"], "certo": 0}, {"p": "O tamanho dessa lista é:", "opcoes": ["3", "4"], "certo": 1}],
      explicacao: "Lista maçã, uva, caju, açaí. O item da posição 3 é: → <strong>caju</strong> · O tamanho dessa lista é: → <strong>4</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Registros", perguntas: [{"p": "No campo idade = 12, o valor é:", "opcoes": ["12", "idade"], "certo": 0}, {"p": "O contato do celular é:", "opcoes": ["Um bloco repita", "Uma ficha (registro)"], "certo": 1}],
      explicacao: "No campo idade = 12, o valor é: → <strong>12</strong> · O contato do celular é: → <strong>Uma ficha (registro)</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Depurar", perguntas: [{"p": "Depurar é:", "opcoes": ["Achar e consertar o erro", "Apagar o programa"], "certo": 0}, {"p": "O método do detetive começa por:", "opcoes": ["Apagar tudo", "Rodar"], "certo": 1}],
      explicacao: "Depurar é: → <strong>Achar e consertar o erro</strong> · O método do detetive começa por: → <strong>Rodar</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Decompor e reaproveitar", perguntas: [{"p": "Dividir um problema em partes é:", "opcoes": ["Decompor", "Depurar"], "certo": 0}, {"p": "Usar o bloco próprio no programa é:", "opcoes": ["Apagar", "Chamar"], "certo": 1}],
      explicacao: "Dividir um problema em partes é: → <strong>Decompor</strong> · Usar o bloco próprio no programa é: → <strong>Chamar</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Programar em dupla", perguntas: [{"p": "Quem monta os blocos?", "opcoes": ["O piloto", "O navegador"], "certo": 0}, {"p": "O erro do programa é:", "opcoes": ["Só do piloto", "Da dupla"], "certo": 1}],
      explicacao: "Quem monta os blocos? → <strong>O piloto</strong> · O erro do programa é: → <strong>Da dupla</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Desafios de depuração", perguntas: [{"p": "Apareceu o item errado da lista. O erro provável é:", "opcoes": ["Posição errada", "Nome do campo"], "certo": 0}, {"p": "Apareceu “(sem idade)”. O erro provável é:", "opcoes": ["Posição errada", "Nome do campo diferente"], "certo": 1}],
      explicacao: "Apareceu o item errado da lista. O erro provável é: → <strong>Posição errada</strong> · Apareceu “(sem idade)”. O erro provável é: → <strong>Nome do campo diferente</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · O placar do quiz", perguntas: [{"p": "O gabarito é:", "opcoes": ["A lista das respostas certas", "A lista dos jogadores"], "certo": 0}, {"p": "O contador começa em:", "opcoes": ["10", "0"], "certo": 1}],
      explicacao: "O gabarito é: → <strong>A lista das respostas certas</strong> · O contador começa em: → <strong>0</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL NA TRILHA (21/11/2026): o mesmo ❓ gancho da turma, "O que você já sabe?" na M1
   e o 🛠️ "Onde eu uso isso?" prático em versão calma: o programa já vem quase pronto e o aluno muda
   só um pedacinho; depois, 2 perguntas. Tudo cobra só o que o Para começar da Trilha explica.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-7ano-2027-1bim-trilha"]; if (!A) return;
  const L = (...x) => ["lista", ...x];
  const v = n => ({ v: n });
  /* ❓ o mesmo gancho da apostila da turma */
  const GANCHO = {"m1":{"html":"<p>🎮 No jogo do celular do Caio, o personagem começa com <b>3 vidas</b>. Cada vez que ele bate num obstáculo, perde uma. Quando chega a <b>0</b>, aparece <b>“Fim de jogo”</b>.</p><p>🤔 Como o jogo <b>guarda</b> quantas vidas ainda restam? E como ele <b>decide</b> a hora de mostrar “Fim de jogo”?</p>"},"m2":{"html":"<p>🎵 A playlist da Duda tem <b>4 músicas</b>. Ela aperta ▶️ uma vez só, e o aplicativo toca uma música depois da outra, do começo ao fim, e <b>para</b> quando acaba.</p><p>🤔 Como o aplicativo guarda as 4 músicas juntas? E como ele <b>sabe</b> que a playlist acabou?</p>"},"m3":{"html":"<p>📱 No celular da tia Rosa, o contato do Pedro tem <b>nome</b>, <b>telefone</b> e <b>aniversário</b>. Quando ela toca em “Pedro”, aparece tudo junto.</p><p>🤔 Isso é uma lista? Como o celular guarda <b>informações diferentes</b> de uma pessoa só e acha o telefone sem procurar por posição?</p>"},"m4":{"html":"<p>🤖 O Léo programou o robô da feira de ciências para dar <b>3 pulinhos</b> e depois dizer <b>“Tchau!”</b>. Na hora da apresentação, o robô disse “Tchau!” <b>três vezes</b>!</p><p>🤔 Onde está o erro? O Léo precisa apagar tudo e começar de novo, ou existe um jeito de detetive para achar o problema?</p>"},"m5":{"html":"<p>🎉 A professora disse: “A turma vai organizar a festa de fim de ano. Organizem tudo!”. Todo mundo ficou perdido, falando ao mesmo tempo.</p><p>🤔 Por onde começar um problema tão grande? E se uma tarefa (como arrumar as cadeiras) se repete várias vezes, é preciso explicar tudo de novo toda vez?</p>"},"m6":{"html":"<p>👫 A Carla e o Davi programaram juntos. A Carla ficou com o mouse <b>a aula inteira</b> e o Davi só olhou. No fim, o programa tinha erros, a Carla disse “a culpa é sua!”, e o Davi não sabia explicar nada.</p><p>🤔 O que deu errado nessa dupla? Como seria uma dupla que funciona?</p>"},"m7":{"html":"<p>🕵️ O programa da secretaria mostrou <b>“Caio — (sem turma)”</b>, e a lista de chamada <b>pulou</b> o nome da Bia.</p><p>🤔 Que <b>pistas</b> esses erros dão? Por onde você começaria a procurar o bug?</p>"},"m8":{"html":"<p>🧠 No fim do quiz da sala, a tela mostra na hora: <b>“Você acertou 3 de 4!”</b>.</p><p>🤔 Como o programa confere cada resposta? E onde ele vai <b>contando</b> os acertos?</p>"}};
  Object.keys(GANCHO).forEach(m => { A[m].gancho = GANCHO[m]; });
  const perg = (titulo, ...ps) => ({ tipo: "escolha", titulo, enunciado: "<p>Use o que você aprendeu hoje. Leia com calma. 😉</p>", perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real?", ...ps);

  A.m1.lembra = [perg("🔍 O que você já sabe?",
    ["No 6º ano você escreveu <b>algoritmos</b>. Um algoritmo é…", ["Passos em ordem para resolver um problema", "Um tipo de computador"], "Algoritmo = <b>passos em ordem</b>."],
    ["“Fazer 10 polichinelos” é um exemplo de…", ["🔁 Repetição", "🔀 Seleção"], "Fazer a mesma coisa várias vezes é <b>repetição</b>."])];
  A.m1.lembra[0].enunciado = "<p>Responda o que você lembra do 6º ano. Se não souber, tudo bem: o portal mostra onde está a resposta. 😉</p>";

  A.m1.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: as 3 vidas do jogo",
      enunciado: "<p>O personagem do jogo bate em <b>3 obstáculos</b>, mas o programa está contando só 2. Troque o número do <b>repita</b> para <b>3</b> e rode. A tela deve mostrar:</p><p><b>Vidas: 2</b><br><b>Vidas: 1</b><br><b>Vidas: 0</b><br><b>Fim de jogo</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "repita", "se", "comparar"],
      inicio: [["definir", "vidas", 3], ["repita", 2, [["mudar", "vidas", -1], ["mostrar", ["juntar", "Vidas: ", v("vidas")]]]], ["se", ["=", v("vidas"), 0], [["mostrar", "Fim de jogo"]]]],
      esperado: ["Vidas: 2", "Vidas: 1", "Vidas: 0", "Fim de jogo"],
      solucao: [["definir", "vidas", 3], ["repita", 3, [["mudar", "vidas", -1], ["mostrar", ["juntar", "Vidas: ", v("vidas")]]]], ["se", ["=", v("vidas"), 0], [["mostrar", "Fim de jogo"]]]],
      dicas: ["Clique no número 2 do repita e digite 3."],
      explicacao: "A variável vidas guarda quanto falta, o repita tira 1 vida 3 vezes e o se mostra “Fim de jogo” quando chega a 0." },
    perg("🛠️ E na vida real?",
      ["No jogo, a <b>vida</b> do personagem fica guardada numa…", ["Variável (caixinha com nome)", "Repetição"], "A vida é uma <b>variável</b>: uma caixinha com nome que guarda um valor."],
      ["“Se chover, levar guarda-chuva” é um exemplo de…", ["🔀 Seleção", "🔁 Repetição"], "Escolher um caminho conforme a condição é <b>seleção</b>."])
  ];
  A.m2.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: a playlist da festa",
      enunciado: "<p>A playlist é uma <b>lista</b> de músicas. Falta o nome da 3ª música: troque o <b>???</b> por <b>funk</b> e rode. O <b>para cada</b> mostra uma música por linha:</p><p><b>forró</b><br><b>samba</b><br><b>funk</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
      inicio: [["definir", "musicas", L("forró", "samba", "???")], ["paracada", "m", v("musicas"), [["mostrar", v("m")]]]],
      esperado: ["forró", "samba", "funk"],
      solucao: [["definir", "musicas", L("forró", "samba", "funk")], ["paracada", "m", v("musicas"), [["mostrar", v("m")]]]],
      dicas: ["Clique no ??? (o 3º item da lista) e digite funk."],
      explicacao: "A playlist é uma lista com 3 itens; o para cada repete o mostrar uma vez para cada música." },
    VIDA(["A playlist de músicas é…", ["Uma lista", "Um bloco mostrar na tela"], "A playlist é uma <b>lista</b>: vários itens em ordem."],
      ["Na lista frutas (maçã, uva, caju, açaí), qual item está na <b>posição 3</b>?", ["caju", "uva"], "Contando a partir do 1: maçã (1), uva (2), <b>caju (3)</b>."])
  ];
  A.m3.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o contato do celular",
      enunciado: "<p>A ficha do contato tem o campo <b>nome</b> e o campo <b>aniversario</b>. Troque o <b>???</b> por <b>12/05</b> e rode. A tela deve mostrar:</p><p><b>Pedro</b><br><b>12/05</b></p>",
      caixa: ["mostrar", "texto", "variavel", "ficha"],
      inicio: [["definir", "contato", ["ficha"]], ["ficha_por", "contato", "nome", "Pedro"], ["ficha_por", "contato", "aniversario", "???"], ["mostrar", ["campo", v("contato"), "nome"]], ["mostrar", ["campo", v("contato"), "aniversario"]]],
      esperado: ["Pedro", "12/05"],
      solucao: [["definir", "contato", ["ficha"]], ["ficha_por", "contato", "nome", "Pedro"], ["ficha_por", "contato", "aniversario", "12/05"], ["mostrar", ["campo", v("contato"), "nome"]], ["mostrar", ["campo", v("contato"), "aniversario"]]],
      dicas: ["Clique no ??? do campo aniversario e digite 12/05."],
      explicacao: "O contato é uma ficha (registro): cada informação fica num campo com nome." },
    perg("🛠️ E na vida real?",
      ["Nome, telefone e aniversário de <b>um</b> contato: o melhor jeito de guardar é…", ["Uma ficha (registro)", "Uma lista de nomes"], "Informações <b>diferentes</b> de uma coisa só = <b>registro</b> (ficha)."],
      ["Na ficha, em “telefone: 0000-0000”, a palavra <b>telefone</b> é o…", ["Nome do campo", "Valor"], "Cada campo tem um <b>nome</b> (telefone) e um <b>valor</b> (o número)."])
  ];
  A.m4.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o aviso do termômetro",
      enunciado: "<p>Hoje está <b>35 graus</b>. O aplicativo devia mostrar <b>Beba bastante água!</b>, mas mostrou “Clima agradável”. O erro está no sinal da condição: troque o <b>&lt;</b> por <b>≥</b> e rode. A tela deve mostrar:</p><p><b>Beba bastante água!</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "se", "comparar"],
      inicio: [["definir", "temperatura", 35], ["se", ["<", v("temperatura"), 30], [["mostrar", "Beba bastante água!"]], [["mostrar", "Clima agradável"]]]],
      esperado: ["Beba bastante água!"],
      solucao: [["definir", "temperatura", 35], ["se", [">=", v("temperatura"), 30], [["mostrar", "Beba bastante água!"]], [["mostrar", "Clima agradável"]]]],
      dicas: ["Clique no sinal &lt; do bloco de comparar e escolha ≥."],
      explicacao: "Era uma condição trocada. Uma mudança só consertou o programa: isso é depurar." },
    perg("🛠️ E na vida real?",
      ["O aplicativo foi atualizado “com correções de erros”. Alguém…", ["Depurou o programa", "Apagou o aplicativo"], "Achar e consertar erros (bugs) é <b>depurar</b>."],
      ["Por que mudar <b>uma coisa só</b> de cada vez?", ["Para saber o que resolveu", "Para o programa ficar maior"], "Mudando uma coisa por vez, você sabe <b>o que</b> resolveu."])
  ];
  A.m5.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o aquecimento da Educação Física",
      enunciado: "<p>O bloco próprio <b>alongar</b> já está pronto. Falta chamar ele <b>de novo</b> no final: pegue o bloco <b>alongar</b> na gaveta 🧩 Meus blocos, encaixe embaixo de <b>polichinelos</b> e rode. A tela deve mostrar:</p><p><b>corrida</b><br><b>alongar os braços</b><br><b>polichinelos</b><br><b>alongar os braços</b></p>",
      caixa: ["mostrar", "texto", "funcao"],
      inicio: [["funcao", "alongar", [["mostrar", "alongar os braços"]]], ["mostrar", "corrida"], ["chamar", "alongar"], ["mostrar", "polichinelos"]],
      esperado: ["corrida", "alongar os braços", "polichinelos", "alongar os braços"],
      solucao: [["funcao", "alongar", [["mostrar", "alongar os braços"]]], ["mostrar", "corrida"], ["chamar", "alongar"], ["mostrar", "polichinelos"], ["chamar", "alongar"]],
      dicas: ["O bloco “alongar” aparece na gaveta 🧩 Meus blocos. Encaixe embaixo do último bloco."],
      explicacao: "O alongamento foi escrito uma vez só e chamado duas vezes: isso é reaproveitar." },
    perg("🛠️ E na vida real?",
      ["No trabalho em grupo, cada um faz uma parte. Isso é…", ["Decompor (dividir em partes)", "Depurar"], "Dividir um problema grande em partes menores é <b>decompor</b>."],
      ["O refrão da música está num bloco próprio. O refrão mudou. Onde você conserta?", ["Só no bloco refrão", "Em todos os lugares, um por um"], "Mudou no bloco, muda em todos os lugares onde ele é chamado."])
  ];
  A.m6.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: você é o navegador",
      enunciado: "<p>Você é o 🧭 <b>navegador</b>. O título “Cardápio de hoje:” apareceu repetido porque está <b>dentro</b> do para cada. Arraste ele para <b>cima</b> do para cada e rode. A tela deve mostrar:</p><p><b>Cardápio de hoje:</b><br><b>arroz</b><br><b>feijão</b></p>",
      caixa: ["mostrar", "texto", "variavel", "lista", "paracada"],
      inicio: [["definir", "cardapio", L("arroz", "feijão")], ["paracada", "c", v("cardapio"), [["mostrar", "Cardápio de hoje:"], ["mostrar", v("c")]]]],
      esperado: ["Cardápio de hoje:", "arroz", "feijão"],
      solucao: [["definir", "cardapio", L("arroz", "feijão")], ["mostrar", "Cardápio de hoje:"], ["paracada", "c", v("cardapio"), [["mostrar", v("c")]]]],
      dicas: ["Arraste o bloco “mostrar Cardápio de hoje:” para fora do para cada, logo acima dele."],
      explicacao: "Dentro do para cada, o título se repetia. O navegador conferiu e a dupla consertou junta." },
    perg("🛠️ E na vida real?",
      ["Na dupla, quem fica com o <b>mouse e o teclado</b>?", ["🕹️ O piloto", "🧭 O navegador"], "O <b>piloto</b> monta; o navegador lê, pensa e confere."],
      ["O programa da dupla deu erro. O erro é…", ["Da dupla", "Só de quem estava com o mouse"], "O erro é <b>da dupla</b>: os dois procuram juntos."])
  ];
  A.m7.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: o pódio da corrida",
      enunciado: "<p>A lista <b>chegada</b> é <b>Lia, Rafa, Gui</b>. O 1º lugar saiu errado: troque a posição <b>2</b> da primeira linha por <b>1</b> e rode. A tela deve mostrar:</p><p><b>1º lugar: Lia</b><br><b>2º lugar: Rafa</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista"],
      inicio: [["definir", "chegada", L("Lia", "Rafa", "Gui")], ["mostrar", ["juntar", "1º lugar: ", ["item", v("chegada"), 2]]], ["mostrar", ["juntar", "2º lugar: ", ["item", v("chegada"), 2]]]],
      esperado: ["1º lugar: Lia", "2º lugar: Rafa"],
      solucao: [["definir", "chegada", L("Lia", "Rafa", "Gui")], ["mostrar", ["juntar", "1º lugar: ", ["item", v("chegada"), 1]]], ["mostrar", ["juntar", "2º lugar: ", ["item", v("chegada"), 2]]]],
      dicas: ["Clique no número 2 da primeira linha e digite 1."],
      explicacao: "Apareceu o item errado: era a posição errada. A primeira posição da lista é a 1." },
    perg("🛠️ E na vida real?",
      ["Apareceu o item errado da lista. A primeira posição é a…", ["1", "0"], "A lista começa na posição <b>1</b>."],
      ["Para achar um bug, o detetive muda…", ["Uma coisa de cada vez", "Tudo de uma vez"], "Uma mudança por vez, e testa de novo."])
  ];
  A.m8.aplicar = [
    { tipo: "blocos", titulo: "🛠️ Na vida real: corrigir a prova de V ou F",
      enunciado: "<p>A prova tem <b>3 questões</b>, mas o programa confere só 2. Troque o número do <b>repita</b> para <b>3</b> e rode. A tela deve mostrar:</p><p><b>Acertos: 2</b></p>",
      caixa: ["mostrar", "texto", "numero", "variavel", "lista", "repita", "se", "comparar"],
      inicio: [["definir", "gabarito", L("V", "F", "V")], ["definir", "respostas", L("V", "V", "V")], ["definir", "acertos", 0], ["definir", "i", 1],
        ["repita", 2, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Acertos: ", v("acertos")]]],
      esperado: ["Acertos: 2"],
      solucao: [["definir", "gabarito", L("V", "F", "V")], ["definir", "respostas", L("V", "V", "V")], ["definir", "acertos", 0], ["definir", "i", 1],
        ["repita", 3, [["se", ["=", ["item", v("gabarito"), v("i")], ["item", v("respostas"), v("i")]], [["mudar", "acertos", 1]]], ["mudar", "i", 1]]], ["mostrar", ["juntar", "Acertos: ", v("acertos")]]],
      dicas: ["Clique no 2 do repita e digite 3."],
      explicacao: "Questão 1: V = V ✅; 2: F × V ❌; 3: V = V ✅. O contador terminou em 2." },
    perg("🛠️ E na vida real?",
      ["Antes de contar, o contador começa em…", ["0", "10"], "O <b>contador</b> começa em <b>0</b> e soma 1 a cada acerto."],
      ["Gabarito <b>B, A</b> e respostas <b>B, C</b>. Quantos acertos?", ["1", "2"], "Só a posição 1 bate (B = B). É <b>1</b> acerto."])
  ];
})();
