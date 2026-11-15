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
          { p: "🎵 A playlist de músicas é:", opcoes: ["Uma lista", "Um bloco de repetir"], certo: 0 }],
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
          { p: "Hipótese é:", opcoes: ["Um palpite sobre onde está o erro", "A resposta certa do gabarito"], certo: 0 }],
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
