/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 6º ano — 1º bimestre de 2027
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv).
   BNCC Computação: EF06CO05, EF06CO08, EF06CO01, EF06CO09.
   ============================================================ */
PORTAL.registrarAtividades("informatica-6ano-2027-1bim", {

  /* ============ MISSÃO 1 — Primeiros passos: mouse, teclado e janelas ============ */
  m1: {
    /* 🌀 PILOTO DO MODELO EM ESPIRAL (20/11/2026): gancho, "O que você já sabe?" (1ª missão do ano) e "Onde eu uso isso?" prático */
    gancho: { html: "<p>😱 A Bia estava fazendo um trabalho no computador, clicou num botão no cantinho da janela e… <b>o trabalho sumiu da tela!</b></p><p>🤔 Será que ela apagou tudo? <b>Onde o trabalho foi parar</b> e <b>como ela faz para ele voltar?</b></p>" },
    lembra: [
      { tipo: "escolha", titulo: "🔍 O que você já sabe?",
        enunciado: "<p>Primeiro dia de Informática! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉</p>",
        perguntas: [
          { p: "Para escrever uma letra <b>maiúscula</b>, qual tecla você segura?", opcoes: ["Shift (⇧)", "Enter", "Barra de espaço"], certo: 0, why: "É o <b>Shift</b>: segurando ele, a letra sai maiúscula." },
          { p: "Para <b>abrir</b> uma pasta no computador, o que fazemos com o mouse?", opcoes: ["Duplo clique (2 cliques rapidinhos)", "Clique com o botão direito", "Giramos a rodinha"], certo: 0, why: "O <b>duplo clique</b> abre pastas, arquivos e programas." },
          { p: "No <b>celular</b>, tocar uma vez na tela faz o papel de qual ação do mouse?", opcoes: ["Clique", "Rolar a rodinha", "Arrastar"], certo: 0, why: "O toque na tela é o <b>clique</b> do celular." }
        ] }
    ],
    aplicar: [
      {"tipo": "sim_pc", "titulo": "🛠️ Na vida real: ajude a Bia com o trabalho e o vídeo", "enunciado": "<p>A Bia vai fazer a redação no computador, mas a professora pediu para ela ver um vídeo antes. Use o que você aprendeu hoje para ajudar a Bia <b>sem perder o trabalho</b>.</p>", "area": [{"nome": "Lixeira", "app": "lixeira"}, {"nome": "Trabalhos", "tipo": "pasta"}], "pastas": {"Trabalhos": [{"nome": "redacao", "ext": "txt"}]}, "passos": [{"faca": "📝 A Bia vai começar a redação: abra o <b>Bloco de Notas</b> pelo <b>menu Iniciar</b>.", "ok": "abrir:app:notas", "dica": "O botão ⊞ fica no canto da barra de tarefas, lá embaixo."}, {"faca": "📺 Hora do vídeo! <b>Esconda</b> o Bloco de Notas <b>sem fechar</b>.", "ok": "min:jan:notas", "dica": "É o botão do tracinho —, no canto de cima da janela."}, {"faca": "✅ Vídeo visto! Traga o Bloco de Notas de volta pela <b>barra de tarefas</b>.", "ok": "restaurar:jan:notas", "dica": "O ícone dele está lá embaixo, na barra de tarefas."}, {"faca": "🖥️ Deixe a janela <b>grande</b>, ocupando a tela toda, para escrever melhor.", "ok": "max:jan:notas", "dica": "É o quadradinho ☐."}], "fimMsg": "Você ajudou a Bia: escondeu o trabalho sem fechar, trouxe de volta pela barra de tarefas e deixou a janela grande. É assim que se faz na vida real!", "explicacao": "Minimizar (—) esconde a janela na barra de tarefas sem fechar o programa; clicando no ícone, ela volta. ☐ deixa a janela grande."},
      { tipo: "escolha", titulo: "🛠️ E na vida real, o que você faria?",
        enunciado: "<p>Use o que você aprendeu hoje para resolver cada situação.</p>",
        perguntas: [
          { p: "Você está fazendo um trabalho e quer ver um vídeo <b>sem fechar</b> o trabalho. Qual botão da janela do trabalho você usa?", opcoes: ["➖ Minimizar", "❌ Fechar", "⬜ Maximizar"], certo: 0, why: "<b>Minimizar</b> esconde a janela na barra de tarefas sem fechar: o trabalho continua lá, é só clicar no ícone dele para voltar. (Foi isso que aconteceu com a Bia!)" },
          { p: "Você digitou <b>Brasiu</b> em vez de <b>Brasil</b>, e o cursor está logo depois do <b>u</b>. Qual tecla apaga essa letra errada?", opcoes: ["Backspace (⟵)", "Enter", "Caps Lock"], certo: 0, why: "O <b>Backspace</b> apaga a letra que está antes do cursor." },
          { p: "No <b>caixa eletrônico</b>, você toca no botão “Saldo” na tela. No computador, essa ação seria um…", opcoes: ["Clique", "Clique direito", "Duplo clique"], certo: 0, why: "Tocar uma vez num botão é como dar um <b>clique</b>: escolhe e aperta o botão." }
        ] }
    ],
    pratica: [
      { tipo: "baloes", titulo: "Aquecimento: estoure os balões com o mouse", quantidade: 8,
        enunciado: "<p>Mexa o <strong>mouse</strong> para levar o ponteiro até cada balão e dê um <strong>clique</strong>. Eles mudam de lugar! 🎈</p>",
        explicacao: "O <strong>clique</strong> (apertar 1 vez o botão esquerdo) serve para escolher e apertar botões. É a ação do mouse que mais usamos." },
      { tipo: "duplo_clique", titulo: "Abra a pasta com duplo clique",
        alvo: "Jogos", itens: ["Fotos", "Jogos", "Músicas", "Trabalhos"],
        enunciado: "<p>Agora dê um <strong>duplo clique</strong> (dois cliques rapidinhos, sem mexer o mouse) na pasta <strong>Jogos</strong>.</p>",
        explicacao: "O <strong>duplo clique</strong> abre pastas, arquivos e programas. Um clique só apenas seleciona (escolhe)." },
      { tipo: "sim_pc", titulo: "🖥️ No computador: abra a pasta e cuide da janela",
        enunciado: "<p>Este é um computador de treino, igualzinho ao de verdade. O <strong>Bit</strong>, o seu ajudante, diz o que fazer, um passo de cada vez, e avisa se algo sair diferente. Se ficar em dúvida, toque em <strong>💡 Mostre onde</strong>.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Jogos", tipo: "pasta" }, { nome: "Fotos", tipo: "pasta" }, { nome: "Músicas", tipo: "pasta" }, { nome: "Navegador", app: "web" }],
        pastas: { "Jogos": [{ nome: "jogo-da-velha", ext: "exe" }, { nome: "quebra-cabeca", ext: "exe" }, { nome: "corrida", ext: "exe" }], "Fotos": [{ nome: "passeio", ext: "jpg" }] },
        passos: [
          { faca: "Dê <b>um clique</b> no ícone da pasta <b>Jogos</b>, na área de trabalho. Um clique só <b>seleciona</b> (ele fica marcado).", ok: "clique:ic:Jogos", onde: "ic:Jogos", dica: "A pasta Jogos é a amarela com o nome Jogos embaixo." },
          { faca: "Agora <b>abra</b> a pasta <b>Jogos</b> com um <b>duplo clique</b>: dois cliques rapidinhos, sem mexer o mouse.", ok: "duplo:ic:Jogos", onde: "ic:Jogos" },
          { faca: "A pasta abriu numa <b>janela</b>! Faça a janela ocupar a tela toda: clique em <b>Maximizar</b> (o quadradinho ☐ no canto de cima, à direita).", ok: "max:jan:exp", onde: "jan:exp:max" },
          { faca: "Agora volte a janela ao tamanho de antes: clique em <b>Restaurar</b> (os dois quadradinhos ❐, no mesmo lugar).", ok: "restaurarTam:jan:exp", onde: "jan:exp:max", erros: { "max:jan:exp": "Esse é o mesmo botão, mas agora ele se chama Restaurar. Clique nele de novo." } },
          { faca: "<b>Arraste</b> a janela para outro lugar: segure o botão esquerdo na <b>barra de cima</b> da janela (onde está escrito Jogos), mova o mouse e solte.", ok: "arrastar:jan:exp", dica: "Segure em cima do nome Jogos, na faixa de cima da janela, e mova sem soltar." },
          { faca: "Esconda a janela sem fechar: clique em <b>Minimizar</b> (o tracinho —).", ok: "min:jan:exp", onde: "jan:exp:min" },
          { faca: "Cadê a janela? Ela foi para a <b>barra de tarefas</b>, lá embaixo. Clique no ícone 📁 dela para ela voltar.", ok: "restaurar:jan:exp", onde: "bar:exp", dica: "A barra de tarefas é a faixa no pé da tela. O ícone da pasta tem um risquinho embaixo: é a janela aberta." },
          { faca: "Terminamos! Agora <b>feche</b> a janela no <b>X</b>, no canto de cima, à direita.", ok: "fechar:jan:exp", onde: "jan:exp:fechar" }
        ],
        fimMsg: "Você abriu a pasta com duplo clique, maximizou, restaurou, arrastou, minimizou, trouxe de volta pela barra de tarefas e fechou a janela. Igualzinho ao computador de verdade!",
        explicacao: "Clique seleciona; duplo clique abre. Na janela: ➖ Minimizar esconde na barra de tarefas, ☐ Maximizar ocupa a tela toda (e vira ❐ Restaurar), ❌ Fechar fecha. Para mudar a janela de lugar, arraste pela barra de cima." },
      { tipo: "sim_pc", titulo: "🖱️ No computador: botão direito, menu Iniciar e rodinha",
        enunciado: "<p>Mais um treino no computador de mentira. Siga o <strong>Bit</strong>!</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Trabalhos", tipo: "pasta" }],
        web: { "historia.com": { titulo: "A história do mouse", palavras: "mouse historia computador", resumo: "Quem inventou o mouse?", html: "<p>O primeiro <b>mouse</b> foi feito de madeira, em 1964, pelo americano Douglas Engelbart. Ele tinha duas rodinhas por baixo e um botão só.</p>" + "<p>Com o tempo, o mouse ganhou dois botões: o <b>esquerdo</b>, para escolher e abrir, e o <b>direito</b>, para ver mais opções.</p>".repeat(1) + "<p>Depois veio a <b>rodinha</b> do meio, que serve para rolar a página para cima e para baixo, como você está fazendo agora.</p><p>Hoje existem mouses sem fio, que funcionam com pilha ou bateria, e o <b>touchpad</b> dos notebooks, em que o dedo faz o papel do mouse.</p><p>No celular, a tela de toque substitui o mouse: tocar é como clicar, e segurar o dedo é como o botão direito.</p><p>Continue rolando...</p><p style='margin-top:300px'>🏁 <b>Você chegou ao fim da página!</b></p>" } },
        passos: [
          { faca: "Clique com o <b>botão direito</b> do mouse num lugar vazio da <b>área de trabalho</b> (o fundo da tela). Vai aparecer um menu de opções.", ok: "direito:area", dica: "O botão direito é o do lado direito do mouse. Clique no fundo azul, longe dos ícones." },
          { faca: "No menu que abriu, clique em <b>Atualizar</b>.", ok: "menu:Atualizar", onde: "menu:Atualizar" },
          { faca: "Agora abra o <b>menu Iniciar</b>: clique no botão <b>⊞</b> na barra de tarefas.", ok: "clique:bar:iniciar", onde: "bar:iniciar" },
          { faca: "No menu Iniciar, clique em <b>Navegador</b> 🌐 para abrir.", ok: "abrir:app:web", onde: "start:web" },
          { faca: "No navegador, clique na <b>barra de endereço</b> (lá em cima), digite <b>historia.com</b> e aperte <b>Enter</b>.", ok: "url:historia.com", onde: "web:url", dica: "A barra de endereço é a faixa comprida em cima da página. Digite historia.com (sem espaço) e aperte Enter." },
          { faca: "Use a <b>rodinha do mouse</b> para <b>rolar</b> a página até o fim, até aparecer 🏁.", ok: "rolar:fim:historia.com", dica: "Deixe o ponteiro em cima do texto da página e gire a rodinha do meio do mouse para baixo." }
        ],
        fimMsg: "Botão direito abriu o menu, o ⊞ abriu o Iniciar, você digitou um endereço e rolou a página com a rodinha!",
        explicacao: "Botão direito = menu de opções. ⊞ Iniciar = lista dos programas. A rodinha rola a página para cima e para baixo." }
    ],
    basico: [
      { tipo: "sim_pc", titulo: "⌨️ No computador: Enter, espaço, Backspace e Shift no Bloco de Notas",
        enunciado: "<p>O Bloco de Notas é um programa de escrever. Digite de verdade e siga o <strong>Bit</strong>: ele confere cada passo.</p>",
        so: undefined, area: [{ nome: "Lixeira", app: "lixeira" }], abertas: ["notas"],
        passos: [
          { faca: "Clique dentro da folha branca do Bloco de Notas e digite <b>oi</b> (tudo minúsculo).", ok: { estado: "notas", texto: "oi" }, onde: "notas:texto" },
          { faca: "Aperte a <b>barra de espaço</b> e digite <b>pedro</b>. A folha deve ficar: <b>oi pedro</b>", ok: { estado: "notas", texto: "oi pedro" }, dica: "A barra de espaço é a tecla comprida, embaixo das letras." },
          { faca: "Ops, faltou a vírgula! Aperte <b>Backspace ⟵</b> até apagar a palavra <b>pedro</b> (o Backspace apaga a letra <b>antes</b> do cursor).", ok: ["/^texto:oi ?$/"], dica: "O Backspace fica em cima do Enter, com uma seta para a esquerda. Aperte 5 ou 6 vezes." },
          { faca: "Agora deixe assim: <b>Oi, Pedro</b> — com <b>O</b> e <b>P</b> maiúsculos. Para a maiúscula, <b>segure Shift ⇧</b> e aperte a letra.", ok: { estado: "notas", texto: "Oi, Pedro" }, dica: "Apague tudo com Backspace. Depois: segure Shift e aperte O, solte, digite i e a vírgula, espaço, segure Shift e aperte P, solte e digite edro." },
          { faca: "Aperte <b>Enter ↵</b> para pular de linha e escreva <b>Tchau!</b> na linha de baixo.", ok: { estado: "notas", texto: "Oi, Pedro\nTchau!" }, dica: "O ponto de exclamação: segure Shift e aperte a tecla do número 1." },
          { faca: "Salve! Aperte <b>Ctrl + S</b> (segure Ctrl e aperte S). Na janela <b>Salvar como</b>, escreva o nome <b>bilhete</b> e clique em <b>Salvar</b>.", ok: { estado: "salvo", nome: "bilhete" }, dica: "Ctrl fica no canto de baixo, à esquerda do teclado. Ou clique em Arquivo, no Bloco de Notas." }
        ],
        fimMsg: "Você usou espaço, Backspace, Shift e Enter e salvou o arquivo bilhete. Agora é só usar isso nos seus trabalhos!",
        explicacao: "Espaço separa palavras; Backspace apaga a letra antes do cursor; segurando Shift a letra sai maiúscula (e o 1 vira !); Enter pula de linha; Ctrl + S salva." },
      /* ===== ESPECIAL TECLADO (vídeo "A caça ao tesouro na Cidade Teclado") — jogos com o Bit, o robozinho assistente ===== */
      { tipo: "teclado", modo: "cacar", titulo: "🧰 Caça aos símbolos: encha o baú do tesouro",
        enunciado: "<p>O Pedro precisava do <b>@</b> e não achava! Digite cada símbolo que aparecer na caixinha. Olhe o <b>teclado espelho</b>: ele acende a tecla que você aperta. Travou? Clique em <b>🤖 Me ajuda, robô!</b> e o <b>Bit</b> mostra como faz.</p>",
        alvos: ["@", "#", "%", "&", "°", "!", "?", "$", "*", "(", ")", "_", "+", ":", "²"],
        dicas: ["Os símbolos de cima das teclas de número saem segurando o <b>Shift ⇧</b>: Shift + 2 = @, Shift + 3 = #, Shift + 5 = %, Shift + 7 = &.", "O desenho do <b>cantinho</b> da tecla sai com o <b>AltGr</b> (à direita da barra de espaço): AltGr + E = °, AltGr + 2 = ²."],
        explicacao: "No teclado ABNT2, cada tecla é um prédio: <b>térreo</b> (aperta direto), <b>andar de cima</b> (Shift + tecla: @ # % & ! $ * ( ) _ + ? :) e <b>terceiro andar</b> (AltGr + tecla: ° ²)." },
      
      { tipo: "teclado", modo: "teclas", titulo: "🎛️ Teclas especiais: Caps Lock, Num Lock, Delete, Home e setas",
        enunciado: "<p>Agora o portal confere <b>qual tecla</b> você usou. Olhe as <b>luzinhas</b> do teclado espelho (Num e Caps): elas mostram o que está ligado.</p>",
        tarefas: [
          { tipo: "caps", pede: "Ligue o <b>Caps Lock</b> (a luzinha <b>Caps</b> acende) e digite <b>ESCOLA</b> — sem usar o Shift!", fim: "ESCOLA", ledsIni: { num: true, caps: false },
            robo: [{ teclas: ["CapsLock"], txt: "Aperte <b>uma vez</b> o Caps Lock: a luzinha <b>Caps</b> acende. É o cadeado das maiúsculas.", leds: { caps: true } }, { teclas: ["KeyE"], txt: "Agora toda letra sai maiúscula: E…", mostra: "E" }, { teclas: ["KeyA"], txt: "…S, C, O, L, A!", mostra: "ESCOLA" }] },
          { tipo: "capsOff", pede: "Agora <b>desligue</b> o Caps Lock (a luzinha apaga) e digite <b>escola</b>, tudo minúsculo.", fim: "escola", ledsIni: { num: true, caps: true },
            robo: [{ teclas: ["CapsLock"], txt: "Aperte o Caps Lock <b>de novo</b>: o cadeado abre e a luzinha apaga.", leds: { caps: false } }, { teclas: ["KeyE"], txt: "Pronto: minúsculas de novo. e, s, c, o, l, a.", mostra: "escola" }] },
          { tipo: "numpad", pede: "Digite <b>2027</b> usando o <b>teclado numérico da direita</b> (a calculadora). A luzinha <b>Num</b> precisa estar acesa!", fim: "2027", ledsIni: { num: false },
            robo: [{ teclas: ["NumLock"], txt: "Olhe a luzinha <b>Num</b>. Apagada? Aperte o <b>Num Lock</b>: ela acende e os números funcionam.", leds: { num: true } }, { teclas: ["Numpad2"], txt: "Agora use as teclas da <b>direita</b>: 2…", mostra: "2" }, { teclas: ["Numpad0"], txt: "…0…", mostra: "20" }, { teclas: ["Numpad2"], txt: "…2…", mostra: "202" }, { teclas: ["Numpad7"], txt: "…7!", mostra: "2027" }] },
          { tipo: "tecla", tecla: "Backspace", pede: "A palavra <b>bolaa</b> tem um <b>a</b> sobrando. O cursor está no fim: apague com o <b>Backspace ⟵</b> para ficar <b>bola</b>.", ini: "bolaa", fim: "bola", okMsg: "O Backspace apagou a letra ANTES do cursor.",
            dicaErro: "Era só apagar <b>uma</b> letra com o <b>Backspace ⟵</b> (em cima do Enter).", robo: [{ teclas: ["Backspace"], txt: "O <b>Backspace</b> olha para trás: apaga a letra <b>antes</b> do cursor.", mostra: "bola" }] },
          { tipo: "tecla", tecla: "Delete", pede: "Em <b>xcasa</b>, o <b>x</b> está sobrando. O cursor está no <b>começo</b>, antes do x: apague com o <b>Delete</b>.", ini: "xcasa", fim: "casa", cursor: 0, okMsg: "O Delete apagou a letra DEPOIS do cursor.",
            dicaErro: "O x está <b>depois</b> do cursor. Quem apaga para a frente é o <b>Delete</b> (Del), no bloco ao lado do Enter. Não clique na caixa: o cursor já está no lugar certo.", robo: [{ teclas: ["Delete"], txt: "O <b>Delete</b> olha para frente: apaga a letra <b>depois</b> do cursor.", mostra: "casa" }] },
          { tipo: "tecla", tecla: "Home", pede: "Falta o <b>A</b> no começo de <b>mor</b>. O cursor está no fim: aperte <b>Home</b> para pular para o começo e digite <b>A</b> maiúsculo. Fica: <b>Amor</b>.", ini: "mor", fim: "Amor", okMsg: "O Home levou o cursor para o começo da linha.",
            dicaErro: "O A foi parar no lugar errado. Primeiro aperte <b>Home</b> (o cursor pula para o começo), depois Shift + A.", robo: [{ teclas: ["Home"], txt: "O <b>Home</b> leva o cursor para o <b>começo</b> da linha." }, { teclas: ["ShiftRight", "KeyA"], txt: "Agora Shift + A: <b>A</b> maiúsculo no começo.", mostra: "Amor" }] },
          { tipo: "tecla", tecla: "ArrowLeft", pede: "Em <b>gto</b> falta o <b>a</b> depois do g. Use a <b>seta para a esquerda ◀</b> para levar o cursor até depois do g e digite <b>a</b>. Fica: <b>gato</b>.", ini: "gto", fim: "gato", okMsg: "As setas passeiam com o cursor sem apagar nada.",
            dicaErro: "Leve o cursor com a <b>seta ◀</b> (2 vezes) até ficar entre o g e o t. Depois digite a.", robo: [{ teclas: ["ArrowLeft"], txt: "Seta ◀ uma vez: o cursor anda para a esquerda, sem apagar." }, { teclas: ["ArrowLeft"], txt: "Seta ◀ de novo: agora ele está entre o <b>g</b> e o <b>t</b>." }, { teclas: ["KeyA"], txt: "Digite <b>a</b>: gato!", mostra: "gato" }] }],
        explicacao: "Caps Lock tranca as maiúsculas (luzinha Caps). Num Lock liga os números da direita (luzinha Num). Backspace apaga para trás; Delete apaga para frente. Home vai ao começo da linha; as setas movem o cursor sem apagar." },
      { tipo: "teclado", modo: "mouse", titulo: "🖱️ Mouse certeiro: clique, duplo clique e botão direito",
        enunciado: "<p>O teclado e o mouse são uma dupla! Faça o que cada desafio pede. Se travar, o <b>Bit</b> mostra como faz.</p>",
        explicacao: "1 clique (esquerdo) escolhe; duplo clique abre; o botão direito mostra o menu de opções (e a tecla do menu, perto do Ctrl da direita, faz o mesmo)." }
    ],
    desafio: [
      {"tipo": "classificar", "modo": "tabela", "titulo": "🟡 Desafio: qual ação do mouse resolve?", "colunaItem": "O que você quer fazer", "colunaResp": "Ação", "enunciado": "<p>Situações novas! Para cada uma, escolha a ação do mouse que resolve.</p>", "categorias": [{"id": "C", "rot": "Clique"}, {"id": "D", "rot": "Duplo clique"}, {"id": "B", "rot": "Clique direito"}, {"id": "A", "rot": "Arrastar"}, {"id": "R", "rot": "Rolar"}], "itens": [{"t": "Apertar o botão OK de um aviso", "c": "C", "why": "Apertar um botão é um clique."}, {"t": "Abrir a pasta Fotos", "c": "D", "why": "Pastas abrem com duplo clique."}, {"t": "Ver mais opções de um arquivo (como Renomear)", "c": "B", "why": "O clique direito mostra o menu com mais opções."}, {"t": "Levar um ícone para o outro canto da tela", "c": "A", "why": "Mudar de lugar é arrastar."}, {"t": "Descer a página de um site comprido", "c": "R", "why": "A rodinha rola a página."}], "explicacao": "Cada jeito de usar o mouse serve para uma coisa: clique escolhe, duplo clique abre, clique direito mostra opções, arrastar muda de lugar e a rodinha rola."},
      { tipo: "teclado", modo: "copiar", titulo: "✍️ Copie igualzinho: maiúsculas, acentos e símbolos",
        enunciado: "<p>Copie cada frase <b>igualzinho</b>. O portal confere letra por letra: <span style='color:#15803d'>verde</span> = certo, <span style='color:#b91c1c'>vermelho</span> = apague com o Backspace e corrija. Acento: aperte a tecla do acento, <b>solte</b>, e depois a vogal.</p>",
        frases: ["Meu e-mail é pedro@escola.com", "Ação! 50% de desconto & frete grátis.", "Hoje fez 30°C em Curionópolis.", "Você já viu a #CampanhaDoLixo?", "Pão, maçã e café: R$ 12,00 (doze reais)."],
        dicas: ["Maiúscula: segure o Shift e aperte a letra. Ç: a tecla ao lado do L.", "ã e õ: til ( ~, ao lado do Ç ) e depois a vogal. é, á: agudo ( ´, ao lado do P ) e depois a vogal. ê, â: Shift + til e depois a vogal."],
        explicacao: "O computador entende cada detalhe: <b>A</b> e <b>a</b> são diferentes, <b>e</b> e <b>é</b> também. Por isso a senha, o e-mail e o nome do arquivo precisam ser digitados igualzinho." }
    ],
    turbo: [
      {"tipo": "ordenar", "titulo": "🔴 Turbo: ajude a Bia a terminar o trabalho", "enunciado": "<p>A Bia minimizou o trabalho sem querer. Coloque em ordem o que ela faz para continuar e terminar.</p>", "itens": ["Olhar a barra de tarefas, lá embaixo da tela", "Clicar no ícone do trabalho na barra de tarefas", "Clicar em ⬜ Maximizar para a janela ocupar a tela toda", "Terminar de digitar o trabalho", "Clicar em ❌ Fechar quando acabar"], "dicas": ["A janela minimizada continua aberta: ela fica escondida na barra de tarefas."], "explicacao": "Minimizar só esconde a janela na barra de tarefas. Clicando no ícone, ela volta; Maximizar deixa grande; Fechar é só no fim."},
      { tipo: "sim_pc", titulo: "🔴 Turbo no computador: socorro, a janela sumiu!",
        enunciado: "<p>Desafio de verdade: agora o <strong>Bit</strong> dá menos pistas. Lembre-se do que você treinou: duplo clique abre, o tracinho esconde, a barra de tarefas traz de volta.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Jogos", tipo: "pasta" }, { nome: "Trabalhos", tipo: "pasta" }],
        pastas: { "Jogos": [{ nome: "jogo-da-velha", ext: "exe" }, { nome: "corrida", ext: "exe" }], "Trabalhos": [{ nome: "redacao", ext: "txt" }] },
        passos: [
          { faca: "Abra a pasta <b>Jogos</b>.", ok: "duplo:ic:Jogos", dica: "Lembra? Dois cliques rapidinhos." },
          { faca: "Esconda a janela <b>sem fechar</b>.", ok: "min:jan:exp", dica: "É o botão do tracinho —, no canto de cima." },
          { faca: "Ops! A janela sumiu. Traga a pasta <b>Jogos</b> de volta.", ok: "restaurar:jan:exp", dica: "Ela está na barra de tarefas, lá embaixo, com um risquinho embaixo do ícone." },
          { faca: "Faça a janela ocupar a <b>tela toda</b>.", ok: "max:jan:exp", dica: "É o quadradinho ☐." },
          { faca: "Pelo <b>menu Iniciar</b>, abra a <b>Calculadora</b>.", ok: "abrir:app:calc", dica: "O botão ⊞ fica no canto da barra de tarefas." },
          { faca: "Terminou: <b>feche</b> as duas janelas (a Calculadora e a pasta Jogos).", ok: { estado: "fechadas", ids: ["calc", "exp"] }, dica: "O X fica no canto de cima, à direita, de cada janela." }
        ],
        fimMsg: "Você abriu, escondeu, achou na barra de tarefas, maximizou, abriu um programa pelo Iniciar e fechou tudo, quase sem pistas. Turbo completo!",
        explicacao: "Janela minimizada continua aberta na barra de tarefas: é só clicar no ícone para ela voltar. ☐ ocupa a tela toda; ⊞ abre o Iniciar; X fecha." }
    ],
    vf: [
      { v: true, why: "Duplo clique abre pastas, arquivos e programas." },
      { v: false, corrigir: { trecho: "apenas esconde o programa na barra de tarefas", opcoes: ["apenas esconde o programa na barra de tarefas", "fecha a janela e o programa"], certo: "fecha a janela e o programa" }, why: "Quem esconde é o ➖ Minimizar; o ❌ fecha." },
      { v: true, why: "Backspace apaga a letra antes do cursor." },
      { v: true, why: "Shift segurado faz maiúscula." },
      { v: true, why: "A rodinha rola a página." }
    ]
  },

  /* ============ MISSÃO 2 — Entrada, processamento e saída ============ */
  m2: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>🛒 No caixa do mercado, a moça passa o pacote de arroz no <b>leitor de código de barras</b>, ouve um “bip” e o preço aparece na tela.</p><p>🤔 O que aconteceu <b>dentro</b> do computador do caixa entre o “bip” e o preço aparecer? Quem <b>recebeu</b>, quem <b>pensou</b> e quem <b>mostrou</b>?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Na calculadora do celular, você digita <b>7 + 8</b>. Essa parte é…", "opcoes": ["Entrada", "Processamento", "Saída"], "certo": 0, "why": "Digitar é dar informação ao aparelho: é a <b>entrada</b>."}, {"p": "Você fala “Ok, Google” e a resposta aparece na tela. Quem <b>entende</b> o pedido?", "opcoes": ["O processador (processamento)", "O microfone (entrada)", "A tela (saída)"], "certo": 0, "why": "Quem entende e faz as contas é o <b>processador</b>: é o processamento."}, {"p": "Você quer levar o trabalho da escola para imprimir em casa. Onde ele pode ir guardado?", "opcoes": ["No pen drive (armazenamento)", "Na caixa de som (saída)", "No mouse (entrada)"], "certo": 0, "why": "O <b>pen drive</b> guarda arquivos para depois: é armazenamento."}]}],
    pratica: [
      { tipo: "sim_pc", titulo: "🧮 No computador: entrada, processamento e saída na Calculadora",
        enunciado: "<p>Faça a conta na Calculadora do computador de treino e observe as três etapas. O <strong>Bit</strong> guia você.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Calculadora", app: "calc" }],
        passos: [
          { faca: "Abra a <b>Calculadora</b>: dê um <b>duplo clique</b> no ícone 🧮 dela, na área de trabalho.", ok: "duplo:ic:Calculadora", onde: "ic:Calculadora" },
          { faca: "<b>ENTRADA</b>: clique nos botões para digitar <b>2 + 3</b> (o 2, depois o +, depois o 3).", ok: "calc:3", onde: "calc:2", demo: [["clique", "calc:2"], ["clique", "calc:+"], ["clique", "calc:3"]], erros: { "calc:=*": "Calma! Antes do =, digite a conta toda: 2, depois +, depois 3." } },
          { faca: "<b>PROCESSAMENTO</b>: clique em <b>=</b> para o processador fazer a conta. Veja a <b>SAÍDA</b> aparecer na tela: <b>5</b>.", ok: { estado: "calc", resultado: "5" }, onde: "calc:=", demo: [["clique", "calc:="]], erros: { "calc:=*": "O resultado não deu 5. Clique em C para limpar e digite de novo: 2 + 3 =" } },
          { faca: "Agora a conta da merenda: <b>4 × 6</b> e <b>=</b>. Clique em <b>C</b> antes, para limpar.", ok: { estado: "calc", resultado: "24" }, onde: "calc:×", demo: [["clique", "calc:C"], ["clique", "calc:4"], ["clique", "calc:×"], ["clique", "calc:6"], ["clique", "calc:="]], dica: "O sinal de vezes é o ×. Clique: C, 4, ×, 6, =." },
          { faca: "Para terminar, feche a Calculadora no <b>X</b>.", ok: "fechar:jan:calc", onde: "jan:calc:fechar" }
        ],
        fimMsg: "Entrada (os botões), processamento (o =, feito pelo processador) e saída (o resultado na tela). Você viu as três etapas!",
        explicacao: "Entrada: você digita a conta. Processamento: o processador (CPU) calcula. Saída: o resultado aparece na tela (monitor)." },
      { tipo: "rota", titulo: "A calculadora por dentro",
        enunciado: "<p>Você vai fazer <strong>2 + 3</strong> na calculadora. Clique nas etapas <strong>na ordem</strong> em que acontecem.</p>",
        etapas: [
          { ic: "⌨️", t: "Entrada: digito 2 + 3", dica: "Primeiro a informação entra." },
          { ic: "🧠", t: "Processamento: o processador faz a conta", dica: "Depois o computador trabalha com a informação." },
          { ic: "🖥️", t: "Saída: aparece 5 na tela", dica: "Por último o resultado sai." }],
        okMsg: "Isso! Entrada → processamento → saída.",
        explicacao: "Todo computador trabalha assim: a informação <strong>entra</strong>, é <strong>processada</strong> e o resultado <strong>sai</strong>." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Cada peça na sua etapa",
        enunciado: "<p>Organize as peças nas 4 etapas da tabela do 💡 Para começar.</p>",
        categorias: [
          { id: "E", rot: "Entrada", ic: "⌨️", desc: "recebe informações" },
          { id: "P", rot: "Processamento", ic: "🧠", desc: "faz os cálculos" },
          { id: "S", rot: "Saída", ic: "🖥️", desc: "mostra o resultado" },
          { id: "A", rot: "Armazenamento", ic: "💾", desc: "guarda para depois" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "E" }, { t: "Microfone", ic: "🎙️", c: "E" }, { t: "Câmera", ic: "📷", c: "E" }, { t: "Leitor de código de barras", ic: "🏷️", c: "E" },
          { t: "Processador (CPU)", ic: "🧠", c: "P", dica: "a CPU é o “cérebro”." },
          { t: "Monitor", ic: "🖥️", c: "S" }, { t: "Impressora", ic: "🖨️", c: "S" }, { t: "Fone de ouvido", ic: "🎧", c: "S" },
          { t: "HD", ic: "🗄️", c: "A" }, { t: "Pen drive", ic: "💾", c: "A" }, { t: "Cartão de memória", ic: "🗂️", c: "A" }],
        dicas: ["Pergunte: a informação entra, é trabalhada, sai ou fica guardada?"],
        explicacao: "Entrada: teclado, microfone, câmera, leitor de código de barras. Processamento: CPU. Saída: monitor, impressora, fone. Armazenamento: HD, pen drive, cartão de memória." },

      { tipo: "ordenar", titulo: "No caixa do mercado",
        enunciado: "<p>Coloque em ordem o que acontece quando o caixa passa um produto.</p>",
        itens: ["O leitor lê o código de barras (entrada)", "O computador procura o preço e soma (processamento)", "O preço aparece na tela (saída)", "O cupom sai na impressora (saída)"],
        alternativas: [[0, 1, 3, 2]],
        dicas: ["Primeiro a informação entra; depois é processada; por último sai."],
        explicacao: "Entrada (leitor) → processamento (procura e soma) → saída (tela e cupom)." },

      { tipo: "escolha", titulo: "RAM, armazenamento e touchscreen",
        perguntas: [
          { p: "A luz acabou e o trabalho que não estava salvo sumiu. Ele estava só na:", opcoes: ["Memória RAM", "HD", "Pen drive"], certo: 0, why: "A RAM apaga tudo quando o computador desliga." },
          { p: "Onde os arquivos ficam guardados mesmo com o computador desligado?", opcoes: ["No armazenamento (HD ou SSD)", "Na memória RAM", "No monitor"], certo: 0, why: "Armazenamento guarda para depois." },
          { p: "A tela touchscreen do celular é:", opcoes: ["De entrada e de saída", "Só de entrada", "Só de saída"], certo: 0, why: "Recebe o toque (entrada) e mostra a imagem (saída)." },
          { p: "O SSD é mais rápido que o HD porque:", opcoes: ["Não tem disco girando", "É maior", "Fica fora do computador"], certo: 0, why: "SSD = unidade de estado sólido, sem disco girando." }],
        explicacao: "RAM = o que está aberto agora (apaga ao desligar). HD e SSD = armazenamento (guardam). Touchscreen = entrada e saída. SSD não tem disco girando, por isso é mais rápido." },

      { tipo: "ligar", titulo: "Ligue o termo ao significado",
        pares: [
          { a: "CPU", b: "Processador: faz os cálculos" },
          { a: "Gabinete", b: "Caixa do computador de mesa" },
          { a: "Entrada", b: "Leva informação para dentro do computador" },
          { a: "Saída", b: "Mostra ou entrega o resultado" },
          { a: "Memória RAM", b: "Guarda o que está aberto agora" }],
        explicacao: "CPU processa; o gabinete é a caixa; entrada leva para dentro; saída mostra; RAM guarda o que está aberto." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Entrada, processamento ou saída na vida real",
        colunaItem: "O que acontece", colunaResp: "Etapa",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "P", rot: "Processamento" }, { id: "S", rot: "Saída" }],
        itens: [
          { t: "Falo “Ok, Google” no microfone do celular", c: "E", why: "A voz entra pelo microfone." },
          { t: "O celular entende o que eu disse", c: "P", why: "Entender é trabalho do processador." },
          { t: "A resposta aparece na tela", c: "S", why: "A tela mostra o resultado." },
          { t: "Digito o número na urna eletrônica", c: "E", why: "O número entra pelo teclado da urna." },
          { t: "A urna confere o número", c: "P", why: "Conferir é processar." },
          { t: "A foto do candidato aparece", c: "S", why: "A tela mostra o resultado." }],
        explicacao: "Em todo aparelho: a informação entra (microfone, teclado), é processada (entender, conferir) e sai (tela)." },
      {tipo:  "classificar", titulo:  "Aparelhos da casa: entrada, processamento ou saída?", categorias:  [{id:  "E", rot:  "⌨️ Entrada (o que recebe)"}, {id:  "P", rot:  "⚙️ Processamento (o que faz por dentro)"}, {id:  "S", rot:  "📺 Saída (o que mostra ou entrega)"}], itens:  [{t:  "Micro-ondas: aperto os botões do tempo", c:  "E"}, {t:  "Micro-ondas: o chip conta o tempo", c:  "P"}, {t:  "Micro-ondas: o visor mostra o tempo e o apito toca", c:  "S"}, {t:  "Celular: toco na tela", c:  "E"}, {t:  "Celular: o processador abre o aplicativo", c:  "P"}, {t:  "Celular: o alto-falante toca a música", c:  "S"}], explicacao:  "Todo aparelho digital <b>recebe</b> (entrada), <b>processa</b> e <b>entrega</b> (saída)."}
    ],
    turbo: [
      { tipo: "escolha", titulo: "Por que salvar?",
        perguntas: [
          { p: "Por que a RAM perde tudo quando falta energia e o HD não?", opcoes: ["A RAM só guarda o que está aberto agora e precisa de energia; o HD guarda para depois", "O HD é maior que a RAM", "A RAM fica fora do gabinete"], certo: 0, why: "RAM = memória do momento; armazenamento = memória que fica." },
          { p: "Qual é o jeito de não perder o trabalho se a luz acabar?", opcoes: ["Salvar sempre (Ctrl + S)", "Deixar o monitor ligado", "Aumentar o volume"], certo: 0, why: "Salvar leva o trabalho da RAM para o armazenamento." }],
        explicacao: "Quem está só na RAM se apaga ao desligar. Salvar guarda no armazenamento (HD/SSD), que não precisa de energia para manter os arquivos." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "saída", opcoes: ["saída", "entrada"], certo: "entrada" }, why: "O microfone recebe a voz: é entrada." },
      { v: true, why: "A CPU faz os cálculos." },
      { v: true, why: "A impressora entrega o resultado no papel." },
      { v: true, why: "Recebe o toque e mostra a imagem." },
      { v: false, corrigir: { trecho: "A memória RAM", opcoes: ["A memória RAM", "O HD"], certo: "O HD" }, why: "A RAM apaga tudo ao desligar; quem guarda é o armazenamento (HD, SSD)." }
    ]
  },

  /* ============ MISSÃO 3 — Hardware e software ============ */
  m3: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>📱 O celular do Davi está com dois problemas: o <b>jogo fecha sozinho</b> toda hora, e a <b>tela está rachada</b>.</p><p>🤔 Um desses problemas é de <b>hardware</b> e o outro é de <b>software</b>. Qual é qual? E quem resolve cada um?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "O aplicativo de mensagens travou e fechou sozinho. Esse problema é de…", "opcoes": ["Software", "Hardware", "Os dois ao mesmo tempo"], "certo": 0, "why": "O aplicativo é um programa: é <b>software</b>."}, {"p": "O cabo do carregador rompeu. Esse problema é de…", "opcoes": ["Hardware", "Software", "Sistema operacional"], "certo": 0, "why": "O cabo é uma peça física, dá para tocar: é <b>hardware</b>."}, {"p": "Você abriu o computador e apareceu a área de trabalho com as janelas. Quem comanda isso?", "opcoes": ["O sistema operacional (como o Windows)", "O mouse", "O navegador"], "certo": 0, "why": "O <b>sistema operacional</b> é o primeiro a ligar e comanda o resto."}]}],
    pratica: [
      { tipo: "mensagens", titulo: "Hardware ou software?", app: "🧐 O que é isso?",
        botoes: [{ id: "H", rot: "🔧 Hardware" }, { id: "S", rot: "💿 Software" }],
        enunciado: "<p>Para cada item, escolha: é <strong>hardware</strong> (peça que dá para tocar) ou <strong>software</strong> (programa)?</p>",
        itens: [
          { de: "", t: "🖱️ Mouse", c: "H", why: "Dá para pegar com a mão." },
          { de: "", t: "🪟 Windows", c: "S", why: "É o sistema operacional, um programa." },
          { de: "", t: "🔌 Cabo de energia", c: "H", why: "É uma peça física." },
          { de: "", t: "🎮 Um jogo de corrida", c: "S", why: "Jogo é programa." },
          { de: "", t: "🖥️ Monitor", c: "H", why: "É uma peça física." },
          { de: "", t: "🌐 Navegador de internet", c: "S", why: "Navegador é aplicativo." }],
        okMsg: "Você separou hardware e software!",
        explicacao: "Hardware é o que dá para tocar (mouse, cabo, monitor). Software é programa: Windows (sistema operacional), jogo e navegador." },
      { id: "m3-sim-programas", tipo: "sim_pc", titulo: "🧩 No computador: abra os softwares (programas)",
        enunciado: "<p>O computador (hardware) só faz alguma coisa com os <strong>softwares</strong>. Abra e feche alguns programas no computador de treino. O <strong>Bit</strong> guia você.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        passos: [
          { faca: "Clique no botão <b>Iniciar ⊞</b>: ele mostra os <b>programas</b> instalados.", ok: "clique:bar:iniciar", onde: "bar:iniciar" },
          { faca: "Abra a <b>Calculadora</b> 🧮: ela é um <b>software</b> (aplicativo).", ok: "abrir:app:calc", onde: "start:calc" },
          { faca: "Abra também o <b>Bloco de Notas</b> 📝 pelo Iniciar.", ok: "abrir:app:notas", onde: "bar:iniciar" },
          { faca: "Agora o <b>Navegador</b> 🌐: clique no ícone dele na <b>barra de tarefas</b>.", ok: "abrir:app:web", onde: "bar:web" },
          { faca: "Três softwares abertos ao mesmo tempo, todos funcionando no mesmo hardware! Feche o <b>Navegador</b> no <b>X</b>.", ok: "fechar:jan:web", onde: "jan:web:fechar" },
          { faca: "Feche o <b>Bloco de Notas</b> e a <b>Calculadora</b> também (no X de cada um).", ok: { estado: "fechadas", ids: ["notas", "calc"] }, onde: "jan:notas:fechar" }
        ],
        fimMsg: "Você abriu e fechou 3 softwares. Quem organiza tudo isso é outro software especial: o sistema operacional (o Windows)!",
        explicacao: "Hardware é a parte física (monitor, teclado, gabinete). Software são os programas: a Calculadora, o Bloco de Notas e o Navegador são aplicativos; o Windows é o sistema operacional, que comanda o hardware e os aplicativos." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Separe hardware e software",
        categorias: [{ id: "H", rot: "Hardware", ic: "🔧", desc: "peças que dá para tocar" }, { id: "S", rot: "Software", ic: "💿", desc: "programas" }],
        itens: [
          { t: "Teclado", ic: "⌨️", c: "H" }, { t: "Processador", ic: "🧠", c: "H" }, { t: "Pen drive", ic: "💾", c: "H" }, { t: "Impressora", ic: "🖨️", c: "H" },
          { t: "Calculadora do computador", ic: "🧮", c: "S" }, { t: "Android", ic: "🤖", c: "S" }, { t: "Editor de texto", ic: "📝", c: "S" }, { t: "Aplicativo de mensagens", ic: "💬", c: "S" }],
        dicas: ["Dá para pegar com a mão? Hardware. Aparece na tela? Software."],
        explicacao: "Hardware: teclado, processador, pen drive, impressora. Software: calculadora, Android, editor de texto, aplicativo de mensagens." },

      { tipo: "classificar", modo: "tabela", titulo: "Sistema operacional ou aplicativo?",
        colunaItem: "Software", colunaResp: "Tipo",
        categorias: [{ id: "SO", rot: "⚙️ Sistema operacional" }, { id: "AP", rot: "📱 Aplicativo" }],
        itens: [
          { t: "Windows", c: "SO", why: "Comanda o computador." },
          { t: "Navegador Chrome", c: "AP", why: "Faz uma tarefa: abrir sites." },
          { t: "Android", c: "SO", why: "Sistema operacional de celular." },
          { t: "Jogo de futebol", c: "AP", why: "Faz uma tarefa para o usuário: divertir." },
          { t: "iOS (iPhone)", c: "SO", why: "Sistema operacional do iPhone." },
          { t: "Calculadora", c: "AP", why: "Faz uma tarefa: contas." }],
        explicacao: "Sistema operacional comanda o aparelho (Windows, Linux, Android, iOS). Aplicativo faz uma tarefa para o usuário." },

      { tipo: "ligar", titulo: "Cada aplicativo e a sua tarefa",
        pares: [
          { a: "Navegador", b: "Abrir sites da internet" },
          { a: "Editor de texto", b: "Escrever trabalhos" },
          { a: "Calculadora", b: "Fazer contas" },
          { a: "Tocador de música", b: "Ouvir músicas" }],
        explicacao: "Cada aplicativo faz uma tarefa: navegador abre sites; editor de texto escreve; calculadora faz contas; tocador toca músicas." },

      { tipo: "escolha", titulo: "Um precisa do outro",
        perguntas: [
          { p: "O computador sem nenhum software:", opcoes: ["Não faz nada", "Funciona normalmente", "Fica mais rápido"], certo: 0, why: "O hardware precisa dos programas para saber o que fazer." },
          { p: "Qual é o primeiro programa a ligar e comanda o resto?", opcoes: ["O sistema operacional", "O navegador", "O jogo"], certo: 0, why: "O sistema operacional liga primeiro." },
          { p: "O aviso “atualizar agora” no celular serve para:", opcoes: ["Melhorar o software, corrigir erros e aumentar a segurança", "Trocar a tela", "Apagar as fotos"], certo: 0, why: "Atualização melhora o software." }],
        explicacao: "Hardware e software trabalham juntos. O sistema operacional comanda tudo. Atualizações melhoram e protegem o software." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "O problema é de hardware ou de software?",
        colunaItem: "Problema", colunaResp: "De quê?",
        categorias: [{ id: "H", rot: "🔧 Hardware" }, { id: "S", rot: "💿 Software" }],
        itens: [
          { t: "A tela do celular trincou", c: "H", why: "Peça física quebrada." },
          { t: "O aplicativo fecha sozinho", c: "S", why: "Programa com erro." },
          { t: "O fio do fone rompeu", c: "H", why: "Peça física." },
          { t: "O jogo travou na fase 3", c: "S", why: "Programa travado." },
          { t: "A tecla A do teclado não funciona", c: "H", why: "Peça física com defeito." }],
        explicacao: "Peça quebrada = hardware (troca a peça). Programa travando = software (fecha, atualiza ou reinstala)." },
      { tipo: "escolha", titulo: "O que fazer?",
        perguntas: [{ p: "O aplicativo de mensagens vive travando. O que tentar primeiro?", opcoes: ["Atualizar o aplicativo", "Trocar a tela", "Comprar um celular novo"], certo: 0, why: "Problema de software se resolve no software: atualizar costuma corrigir erros." }],
        explicacao: "A atualização corrige erros do software." }
    ],
    turbo: [
      { tipo: "sim_pc", titulo: "🖥️ Investigue o computador de treino",
        enunciado: "<p>Descubra no <strong>computador de treino</strong> qual é o <strong>sistema operacional</strong> e qual é o <strong>navegador</strong>, igual aos computadores da sala. O <strong>Bit</strong> confere cada passo.</p>",
        web: { "professorwell.com.br": { titulo: "Portal da Informática · Prof. Welington Laignier", palavras: "portal informatica professor welington", html: "<p>💻 <b>Portal da Informática</b> · Professor Welington Laignier</p><p>Escolha a sua série para começar a missão de hoje.</p>" } },
        passos: [
          { faca: "Olhe a barra de tarefas, lá embaixo, e clique no botão <b>Iniciar</b> (o logotipo de janelinha).", ok: "clique:bar:iniciar", onde: "bar:iniciar", msgOk: "Esse logotipo de janelinha é do sistema operacional <b>Windows</b>: o programa principal, que comanda o computador." },
          { faca: "Agora abra o <b>navegador</b>: clique no 🌐 da barra de tarefas.", ok: ["clique:bar:web", "abrir:app:web"], onde: "bar:web", msgOk: "O navegador é o programa que abre os sites. Nos computadores da sala, é o Chrome ou o Edge." },
          { faca: "Na <b>barra de endereço</b>, lá em cima, digite <b>professorwell.com.br</b> e aperte <b>Enter</b>.", ok: "/^url:(https?:\\/\\/)?professorwell\\.com\\.br/", onde: "web:url", dica: "Clique na barra de endereço, apague o que tem lá e digite professorwell.com.br." }
        ],
        fimMsg: "Você descobriu o sistema operacional (Windows) e abriu o portal no navegador!",
        explicacao: "Nos computadores da sala, o sistema operacional é o Windows (logotipo de janelinha no Iniciar). O navegador é o programa que abre o portal: Chrome ou Edge." }
    ],
    vf: [
      { v: true, why: "O mouse é uma peça física." },
      { v: false, corrigir: { trecho: "hardware", opcoes: ["hardware", "software"], certo: "software" }, why: "Navegador é programa (aplicativo)." },
      { v: true, why: "Ele liga primeiro e comanda tudo." },
      { v: true, why: "Android (celular) e Windows (computador)." },
      { v: false, corrigir: { trecho: "funciona sozinho, sem nenhum software", opcoes: ["funciona sozinho, sem nenhum software", "precisa de software para funcionar"], certo: "precisa de software para funcionar" }, why: "Sem software o hardware não faz nada." }
    ]
  },

  /* ============ MISSÃO 4 — Pastas e arquivos ============ */
  m4: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>📂 A Lara salvou o trabalho de Ciências, mas agora <b>não acha</b> o arquivo. Ela lembra só que era uma <b>foto</b> e que estava escrito “ciencias” no nome.</p><p>🤔 Como ela pode descobrir <b>onde</b> o arquivo foi parar e <b>que tipo</b> de arquivo ele é?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você baixou o boletim em PDF pelo navegador. Em que pasta ele costuma ir parar?", "opcoes": ["Downloads", "Área de trabalho", "Lixeira"], "certo": 0, "why": "O que você baixa da internet vai para a pasta <b>Downloads</b>."}, {"p": "O arquivo se chama <b>festa.jpg</b>. Que tipo de arquivo ele é?", "opcoes": ["Imagem (foto)", "Música", "Texto"], "certo": 0, "why": "A extensão <b>.jpg</b> mostra que é uma imagem."}, {"p": "Você está fazendo um trabalho e quer guardar o que já fez sem fechar nada. Qual atalho usa?", "opcoes": ["Ctrl + S", "Ctrl + Z", "Alt + Tab"], "certo": 0, "why": "<b>Ctrl + S</b> salva o trabalho na hora."}]}],
    pratica: [
      { tipo: "sim_pc", titulo: "📁 No computador: crie a sua pasta e organize os arquivos",
        enunciado: "<p>No Explorador de Arquivos do computador de treino, você vai criar uma pasta, dar nome, guardar arquivos nela e usar a Lixeira. O <strong>Bit</strong> confere cada passo.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }], abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "redacao", ext: "docx" }, { nome: "desenho-da-escola", ext: "png" }, { nome: "rascunho", ext: "txt", texto: "Ideias para a redação:\n- a escola\n- os amigos" }, { nome: "pesquisa-animais", ext: "pdf" }] },
        passos: [
          { faca: "Clique com o <b>botão direito</b> num espaço vazio da lista de arquivos (a parte branca) e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Clique com o botão direito embaixo dos arquivos, onde não tem nada. No menu, clique em Novo › Pasta." },
          { faca: "A pasta nova está com o nome selecionado. Digite <b>Escola</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>escola$/", dica: "Se o nome não estiver selecionado: botão direito na Nova pasta › Renomear." },
          { faca: "<b>Arraste</b> o arquivo <b>redacao</b> para dentro da pasta <b>Escola</b>: segure o botão esquerdo nele, leve até a pasta e solte.", ok: "mover:arq:redacao*>Escola", onde: "arq:redacao", dica: "Segure em cima de redacao, mova até a linha da pasta Escola (ela fica azul) e solte." },
          { faca: "Arraste também a <b>pesquisa-animais</b> para a pasta <b>Escola</b>.", ok: "mover:arq:pesquisa-animais*>Escola", onde: "arq:pesquisa-animais" },
          { faca: "O <b>rascunho</b> não serve mais. Clique com o <b>botão direito</b> nele e escolha <b>Excluir</b>.", ok: "excluir:arq:rascunho*", onde: "arq:rascunho" },
          { faca: "Ops, você precisava do rascunho! Abra a <b>Lixeira</b> 🗑️ (duplo clique no ícone da área de trabalho).", ok: ["duplo:ic:Lixeira", "abrir:app:lixeira"], onde: "ic:Lixeira", dica: "Minimize o Explorador (—) para ver a área de trabalho e dê duplo clique na Lixeira." },
          { faca: "Na Lixeira, clique com o <b>botão direito</b> no <b>rascunho</b> e escolha <b>Restaurar</b>. Ele volta para a pasta de antes!", ok: "restaurar:arq:rascunho*", onde: "lix:rascunho" }
        ],
        fimMsg: "Você criou a pasta Escola, guardou os trabalhos dentro dela, excluiu e depois restaurou um arquivo da Lixeira!",
        explicacao: "Botão direito › Novo › Pasta cria uma pasta. Arrastar um arquivo até a pasta guarda o arquivo nela. Excluir manda para a Lixeira, de onde ainda dá para Restaurar." },
      { tipo: "sim_pc", titulo: "🔎 No computador: extensões, renomear e pesquisar",
        enunciado: "<p>Mais um treino no Explorador de Arquivos. Siga o <strong>Bit</strong>.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "IMG_20270310_0932", ext: "jpg", figura: "🏫" }, { nome: "musica-da-festa", ext: "mp3" }, { nome: "trabalho", ext: "docx" }, { nome: "video-da-turma", ext: "mp4" }], "Documentos": [{ nome: "lista-de-compras", ext: "txt", texto: "Lista de compras\n- arroz\n- feijão\n- banana\n- caderno" }] },
        passos: [
          { faca: "Os nomes estão sem o final. Ligue as <b>extensões</b>: clique no botão <b>☐ Extensões</b>, lá em cima, à direita.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Agora aparece o tipo depois do ponto. Qual é a foto? Clique com o <b>botão direito</b> no arquivo <b>.jpg</b> e escolha <b>Renomear</b>.", ok: "direito:arq:IMG_20270310_0932*", onde: "arq:IMG_20270310_0932.jpg", erros: { "direito:arq:*": "Esse não é a foto. Procure o arquivo que termina em .jpg." } },
          { faca: "Escolha <b>Renomear</b> no menu, apague o nome e digite <b>passeio-da-escola</b>. Aperte <b>Enter</b>.", ok: "/^renomear:arq:img_20270310_0932[^>]*>passeio-da-escola(\\.jpg)?$/", dica: "Se o menu fechou: botão direito no arquivo .jpg › Renomear. Digite o nome novo e aperte Enter." },
          { faca: "Onde está a <b>lista-de-compras</b>? Use a <b>pesquisa</b> 🔍: clique na caixa <b>Pesquisar</b>, digite <b>lista</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*lista/", onde: "exp:busca" },
          { faca: "Achou! Abra a <b>lista-de-compras</b> com um <b>duplo clique</b>.", ok: "/^abrir:arq:lista-de-compras/", onde: "arq:lista-de-compras.txt" }
        ],
        fimMsg: "Você ligou as extensões, renomeou a foto com um nome bom e achou um arquivo pela pesquisa!",
        explicacao: "A extensão (o final depois do ponto) mostra o tipo: .jpg foto, .mp3 música, .docx texto do Word, .mp4 vídeo. Renomear dá um nome que ajuda a achar. A pesquisa 🔍 procura em todas as pastas." },
      { tipo: "explorador_pastas", titulo: "Organize os arquivos pela extensão",
        enunciado: "<p>Arraste cada arquivo para a pasta certa (ou clique no arquivo e depois na pasta). Olhe a <strong>extensão</strong>: o final depois do ponto.</p>",
        pastas: [{ id: "fotos", nome: "Imagens", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "textos", nome: "Trabalhos", ic: "📝" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "festa-junina.jpg", p: "fotos" }, { nome: "desenho.png", p: "fotos" }, { nome: "brega.mp3", p: "musicas" }, { nome: "hino.mp3", p: "musicas" }, { nome: "redacao.docx", p: "textos" }, { nome: "lista.txt", p: "textos" }, { nome: "gol.mp4", p: "videos" }, { nome: "aula-gravada.mp4", p: "videos" }],
        explicacao: ".jpg e .png = imagem; .mp3 = áudio; .docx e .txt = texto; .mp4 = vídeo." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Que tipo de arquivo é?",
        colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "📝 Texto" }, { id: "I", rot: "🖼️ Imagem" }, { id: "A", rot: "🎵 Áudio" }, { id: "V", rot: "🎬 Vídeo" }, { id: "P", rot: "📄 PDF" }],
        itens: [
          { t: "boletim.pdf", c: "P", why: ".pdf = documento para ler e imprimir." },
          { t: "selfie.jpg", c: "I", why: ".jpg = imagem." },
          { t: "pesquisa.docx", c: "T", why: ".docx = documento de texto." },
          { t: "podcast.mp3", c: "A", why: ".mp3 = áudio." },
          { t: "tutorial.mp4", c: "V", why: ".mp4 = vídeo." },
          { t: "logo.png", c: "I", why: ".png = imagem." }],
        dicas: ["Releia a tabela das extensões no 💡 Para começar."],
        explicacao: "A extensão diz o tipo: .txt/.docx texto, .jpg/.png imagem, .mp3 áudio, .mp4 vídeo, .pdf documento." },

      { tipo: "ordenar", titulo: "Monte o caminho do arquivo",
        enunciado: "<p>O arquivo <strong>trabalho.docx</strong> está na pasta Informática, que está dentro de Escola, que está dentro de Documentos. Coloque do começo do caminho até o arquivo.</p>",
        itens: ["Documentos", "Escola", "Informática", "trabalho.docx"],
        dicas: ["O caminho começa pela pasta de fora e termina no arquivo."],
        explicacao: "Documentos › Escola › Informática › trabalho.docx: da pasta de fora até o arquivo." },

      { tipo: "ordenar", titulo: "Como salvar um trabalho",
        itens: ["Escrever o trabalho", "Clicar em Arquivo → Salvar como", "Escolher a pasta onde vou guardar", "Digitar um nome bom", "Clicar em Salvar"],
        alternativas: [[0, 1, 3, 2, 4]],
        dicas: ["Para salvar: escolher onde, dar um nome e clicar em Salvar."],
        explicacao: "Salvar como → onde → nome → Salvar. O atalho Ctrl + S salva de novo no mesmo lugar." },

      { tipo: "sim_pc", titulo: "🖥️ No computador: a minha pasta e o meu primeiro arquivo",
        enunciado: "<p>No <strong>computador de treino</strong>, crie a <strong>sua pasta</strong> e, dentro dela, o seu primeiro arquivo. O <strong>Bit</strong> diz o que fazer e confere cada passo.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        pastas: { "Documentos": [{ nome: "lista-de-chamada", ext: "txt" }] },
        passos: [
          { faca: "Abra o <b>Explorador de Arquivos</b>: clique na pastinha amarela 📁 da <b>barra de tarefas</b>, lá embaixo.", ok: ["clique:bar:exp", "abrir:app:exp"], onde: "bar:exp" },
          { faca: "No painel da esquerda, clique em <b>Documentos</b>.", ok: "abrir:pasta:Documentos", onde: "nav:Documentos" },
          { faca: "Clique com o <b>botão direito</b> num espaço vazio (a parte branca) e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito na parte branca, onde não tem arquivo. No menu: Novo › Pasta." },
          { faca: "Digite o seu <b>primeiro nome</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:nova pasta.*>.+$/", dica: "Se o nome saiu errado: botão direito na pasta › Renomear." },
          { faca: "Dê <b>duplo clique</b> na sua pasta para entrar nela.", ok: "/^abrir:pasta:(?!documentos$).+/", demo: [["duplo", "arq:Minha pasta"]], dica: "Dois cliques rapidinhos em cima da pasta com o seu nome." },
          { faca: "Clique com o <b>botão direito</b> na parte branca e escolha <b>Novo › Documento de Texto</b>.", ok: "/^criar:txt:(?!documentos$).+/", demo: [["direito", "fundoexp"], ["menu", "Novo › Documento de Texto"]], dica: "Botão direito na parte branca. No menu: Novo › Documento de Texto." },
          { faca: "Dê o nome <b>minha-primeira-nota</b> e aperte <b>Enter</b>.", ok: "/^renomear:arq:.*>minha-primeira-nota(\\.txt)?$/", dica: "Se o nome saiu errado: botão direito no arquivo › Renomear." }
        ],
        fimMsg: "Pasta e arquivo criados! Você sabe organizar o seu espaço.",
        explicacao: "Clique direito → Novo → Pasta cria a pasta; dentro dela, clique direito → Novo → Documento de Texto cria um arquivo .txt (tipo Documento de Texto). Renomear: clique direito → Renomear." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "Qual é o melhor nome?",
        perguntas: [
          { p: "Uma redação sobre o meio ambiente:", opcoes: ["redacao-meio-ambiente.docx", "sem título 3.docx", "aaaaa.docx"], certo: 0, why: "Nome bom diz o que tem dentro." },
          { p: "Fotos do passeio da turma em 2027:", opcoes: ["passeio-turma-2027.jpg", "IMG_0001.jpg", "foto.jpg"], certo: 0, why: "Assunto e ano ajudam a achar." },
          { p: "Por que nomes bons ajudam?", opcoes: ["Porque acho o arquivo rápido só de ler o nome", "Porque o arquivo fica menor", "Porque o computador fica mais rápido"], certo: 0, why: "Nome bom = achar rápido." }],
        explicacao: "Um nome bom diz o assunto (e, se precisar, a data): redacao-meio-ambiente é melhor que sem título 3." },
      { tipo: "tabela", titulo: "Em que pasta está?", robo: {"paineis": ["📁 Outro caminho"], "passos": [{"fala": "Olha como eu leio um caminho <b>diferente</b>. As setas › mostram uma pasta <b>dentro</b> da outra:", "painel": 0, "linha": "Imagens › Viagem › Praia › mar.jpg"}, {"fala": "O arquivo é o último (tem a extensão .jpg). A pasta onde ele está é a que vem <b>logo antes</b>:", "painel": 0, "linha": "Pasta do arquivo: Praia", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ache a pasta logo antes de cada arquivo! 💪"},
        enunciado: "<p>Leia o caminho e escreva o nome da pasta onde o arquivo está guardado (a última pasta antes do arquivo).</p>",
        colunas: ["Caminho", "Pasta onde o arquivo está"],
        linhas: [
          ["Documentos › Escola › Matemática › tabuada.pdf", { r: ["Matemática", "Matematica"], dica: "É a pasta logo antes do nome do arquivo." }],
          ["Imagens › Família › Natal › ceia.jpg", { r: "Natal", dica: "A última pasta antes de ceia.jpg." }],
          ["Downloads › boletim.pdf", { r: "Downloads", dica: "Só tem uma pasta antes do arquivo." }]],
        explicacao: "No caminho, o arquivo fica dentro da última pasta antes do nome dele." }
    ],
    turbo: [
      {"tipo": "classificar", "modo": "tabela", "titulo": "🔴 Turbo: peça, programa ou arquivo? (com as Missões 2 e 3 🔁)", "colunaItem": "Coisa", "colunaResp": "É um…", "enunciado": "<p>Junte o que você aprendeu nas missões passadas com o de hoje: cada coisa é uma <b>peça</b> (hardware), um <b>programa</b> (software) ou um <b>arquivo</b>?</p>", "categorias": [{"id": "H", "rot": "Peça (hardware)"}, {"id": "S", "rot": "Programa (software)"}, {"id": "A", "rot": "Arquivo"}], "itens": [{"t": "Pen drive", "c": "H", "why": "Dá para pegar com a mão: é hardware."}, {"t": "Explorador de Arquivos", "c": "S", "why": "É o programa que mostra as pastas: software."}, {"t": "festa.jpg", "c": "A", "why": "Tem nome e extensão (.jpg): é um arquivo de foto."}, {"t": "Navegador", "c": "S", "why": "Programa que abre sites: software."}, {"t": "HD", "c": "H", "why": "Peça que guarda os arquivos: hardware."}, {"t": "trabalho.docx", "c": "A", "why": "Tem nome e extensão (.docx): é um arquivo de texto."}], "explicacao": "O hardware (peça) guarda e roda os programas (software), e os programas abrem os arquivos."},
      { tipo: "explorador_pastas", titulo: "A área de trabalho bagunçada",
        enunciado: "<p>A área de trabalho do Pedro está uma bagunça! Organize os 10 arquivos nas pastas certas.</p>",
        pastas: [{ id: "escola", nome: "Escola", ic: "📚" }, { id: "fotos", nome: "Fotos", ic: "🖼️" }, { id: "musicas", nome: "Músicas", ic: "🎵" }, { id: "videos", nome: "Vídeos", ic: "🎬" }],
        arquivos: [{ nome: "trabalho-ciencias.docx", p: "escola" }, { nome: "prova-historia.pdf", p: "escola" }, { nome: "resumo.txt", p: "escola" }, { nome: "aniversario.jpg", p: "fotos" }, { nome: "praia.png", p: "fotos" }, { nome: "forro.mp3", p: "musicas" }, { nome: "rap.mp3", p: "musicas" }, { nome: "jogo-final.mp4", p: "videos" }, { nome: "receita.mp4", p: "videos" }, { nome: "pesquisa-geografia.docx", p: "escola" }],
        explicacao: "Trabalhos (.docx, .pdf, .txt) na pasta Escola; .jpg e .png em Fotos; .mp3 em Músicas; .mp4 em Vídeos." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "imagem", opcoes: ["imagem", "áudio (música)"], certo: "áudio (música)" }, why: ".mp3 é áudio; imagem é .jpg ou .png." },
      { v: true, why: "Pastas podem ter pastas dentro." },
      { v: true, why: "O caminho é o endereço do arquivo." },
      { v: true, why: "S de save (salvar)." },
      { v: false, corrigir: { trecho: "um ótimo nome", opcoes: ["um ótimo nome", "um nome ruim"], certo: "um nome ruim" }, why: "Nome bom diz o assunto do arquivo." }
    ]
  },

  /* ============ MISSÃO 5 — Tipos de dados ============ */
  m5: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>📝 Na ficha de cadastro do clube de futebol, a Yara escreveu o <b>telefone</b> na caixinha de “idade” e a <b>idade</b> na caixinha de “telefone”.</p><p>🤔 Por que o computador <b>reclamou</b>? Telefone não é número?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "No cadastro da loja, o campo “Aceita receber ofertas?” só pode ser sim ou não. Que tipo de dado é?", "opcoes": ["Lógico (verdadeiro ou falso)", "Texto", "Data"], "certo": 0, "why": "Sim ou não é o tipo <b>lógico</b> (verdadeiro ou falso)."}, {"p": "O CEP <b>68505-000</b> é feito de algarismos. Que tipo de dado ele é?", "opcoes": ["Texto", "Número", "Lógico"], "certo": 0, "why": "Ninguém faz contas com CEP: ele é um nome feito de algarismos, então é <b>texto</b>."}, {"p": "A playlist com as músicas, uma depois da outra, em ordem, é um exemplo de…", "opcoes": ["Lista", "Tabela", "Dado lógico"], "certo": 0, "why": "Vários dados em ordem, um depois do outro, formam uma <b>lista</b>."}]}],
    pratica: [
      { tipo: "mensagens", titulo: "Número ou texto?", app: "🔢 Que tipo é?",
        botoes: [{ id: "N", rot: "🔢 Número (faz conta)" }, { id: "T", rot: "🔤 Texto" }],
        enunciado: "<p>Lembre: se o dado é usado em contas, é <strong>número</strong>; se é só um “nome” feito de algarismos, é <strong>texto</strong>.</p>",
        itens: [
          { de: "", t: "📞 Telefone: 94 99999-0000", c: "T", why: "Ninguém soma telefones." },
          { de: "", t: "🎂 Idade: 12", c: "N", why: "Dá para fazer conta (daqui a 3 anos = 15)." },
          { de: "", t: "📮 CEP: 68523-000", c: "T", why: "CEP é um código, não serve para conta." },
          { de: "", t: "📝 Nota da prova: 8,5", c: "N", why: "Notas são somadas e viram média." },
          { de: "", t: "👥 Quantidade de alunos: 19", c: "N", why: "Quantidade é número." }],
        okMsg: "Você já sabe separar número de texto!",
        explicacao: "Idade, nota e quantidade servem para contas: número. Telefone e CEP são códigos feitos de algarismos: texto." },
      { id: "m5-sim-tipos", tipo: "sim_pc", titulo: "🗃️ No computador: cada arquivo, um tipo de dado",
        enunciado: "<p>Texto, imagem, som e vídeo: tudo vira dado no computador. Abra cada tipo de arquivo no computador de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "bilhete", ext: "txt", texto: "Amanhã tem prova de Matemática!" }, { nome: "foto-do-time", ext: "jpg", figura: "⚽" }, { nome: "hino-da-escola", ext: "mp3" }, { nome: "apresentacao-da-danca", ext: "mp4" }] },
        passos: [
          { faca: "Ligue as <b>Extensões</b> (botão lá em cima, à direita) para ver o tipo de cada arquivo.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Abra o arquivo de <b>TEXTO</b> (.txt) com duplo clique.", ok: "/^abrir:arq:.*\\.txt$/", onde: "arq:bilhete.txt", erros: { "abrir:arq:*": "Esse não é texto. O texto termina em <b>.txt</b>." } },
          { faca: "Volte ao Explorador (📁 na barra de tarefas) e abra a <b>IMAGEM</b> (.jpg).", ok: "/^abrir:arq:.*\\.jpg$/", onde: "bar:exp", erros: { "abrir:arq:*": "Imagem termina em <b>.jpg</b>." } },
          { faca: "Agora o <b>SOM</b> (.mp3).", ok: "/^abrir:arq:.*\\.mp3$/", onde: "bar:exp", erros: { "abrir:arq:*": "Som (música) termina em <b>.mp3</b>." } },
          { faca: "E por último o <b>VÍDEO</b> (.mp4).", ok: "/^abrir:arq:.*\\.mp4$/", onde: "bar:exp", erros: { "abrir:arq:*": "Vídeo termina em <b>.mp4</b>." } }
        ],
        fimMsg: "Texto, imagem, som e vídeo: quatro tipos de dados, cada um com a sua extensão e o seu programa!",
        explicacao: "Tipos de dados: texto (.txt, .docx), imagem (.jpg, .png), som (.mp3) e vídeo (.mp4). Para o computador, tudo é guardado como números (0 e 1)." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Cada dado no seu tipo",
        categorias: [
          { id: "T", rot: "Texto", ic: "🔤" }, { id: "N", rot: "Número", ic: "🔢" }, { id: "D", rot: "Data", ic: "📅" },
          { id: "L", rot: "Lógico", ic: "✅", desc: "verdadeiro ou falso" }, { id: "M", rot: "Imagem, som ou vídeo", ic: "🎞️" }],
        itens: [
          { t: "“Maria Clara”", c: "T" }, { t: "Rua das Flores", c: "T" },
          { t: "150 (preço em reais)", c: "N" }, { t: "3,5 (quilos)", c: "N" },
          { t: "10/05/2027", c: "D" }, { t: "Data de nascimento", c: "D" },
          { t: "Veio à aula? sim", c: "L" }, { t: "Aceita receber ofertas? não", c: "L" },
          { t: "Foto do perfil", c: "M" }, { t: "Áudio do zap", c: "M" }],
        dicas: ["Releia a tabela dos tipos de dado no 💡 Para começar.", "Sim e não são dados do tipo lógico."],
        explicacao: "Texto: nomes e endereços. Número: preço, peso. Data: dia/mês/ano. Lógico: sim ou não. Imagem, som e vídeo: foto, áudio, filme." },

      { tipo: "tabela", titulo: "O cadastro da loja", robo: {"paineis": ["🗂️ Outro cadastro: a biblioteca"], "passos": [{"fala": "Olha como eu escolho o tipo de dado de <b>outro</b> cadastro. Pergunto: é palavra, número, data ou sim/não?", "painel": 0, "linha": "Título do livro → Texto"}, {"fala": "", "painel": 0, "linha": "Número de páginas → Número", "espera": 900}, {"fala": "", "painel": 0, "linha": "Data da devolução → Data", "espera": 900}, {"fala": "", "painel": 0, "linha": "Já devolveu? → Lógico (sim ou não)", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: faça a mesma pergunta para cada campo da tarefa! 💪"},
        enunciado: "<p>Escolha o tipo de dado de cada campo do cadastro.</p>",
        colunas: ["Campo do cadastro", "Tipo de dado"],
        linhas: [
          ["Nome", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }],
          ["Idade", { op: ["Texto", "Número", "Data", "Lógico"], r: "Número" }],
          ["Nascimento", { op: ["Texto", "Número", "Data", "Lógico"], r: "Data" }],
          ["Aceita receber ofertas?", { op: ["Texto", "Número", "Data", "Lógico"], r: "Lógico" }],
          ["Telefone", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto", dica: "Telefone parece número, mas ninguém faz conta com ele." }]],
        explicacao: "Nome = texto; idade = número; nascimento = data; sim/não = lógico; telefone = texto (não serve para contas)." },

      { tipo: "escolha", titulo: "Coleções: lista e tabela",
        perguntas: [
          { p: "A lista de chamada é um exemplo de:", opcoes: ["Lista", "Imagem", "Dado lógico"], certo: 0, why: "Nomes um depois do outro, em ordem." },
          { p: "O boletim, com aluno, nota e faltas, é um exemplo de:", opcoes: ["Tabela", "Lista", "Som"], certo: 0, why: "Linhas (alunos) e colunas (nota, faltas)." },
          { p: "Numa tabela, as linhas são:", opcoes: ["Deitadas", "Em pé", "Apagadas"], certo: 0, why: "Linhas deitadas; colunas em pé." },
          { p: "O que o computador consegue fazer com dados do tipo número?", opcoes: ["Contas, como somar e tirar a média", "Tocar", "Recortar"], certo: 0, why: "Número serve para conta." }],
        explicacao: "Lista = dados em ordem, um depois do outro. Tabela = linhas (deitadas) e colunas (em pé). Números servem para contas." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Lista ou tabela?",
        colunaItem: "Dados", colunaResp: "Melhor jeito",
        categorias: [{ id: "L", rot: "📝 Lista" }, { id: "T", rot: "📊 Tabela" }],
        itens: [
          { t: "As compras do mercado", c: "L", why: "Só uma informação por item." },
          { t: "Os times do campeonato com pontos, vitórias e gols", c: "T", why: "Várias informações por time: colunas." },
          { t: "As músicas da playlist, em ordem", c: "L", why: "Uma depois da outra." },
          { t: "Os alunos com nota e faltas", c: "T", why: "Cada aluno tem várias informações." }],
        explicacao: "Uma informação por item = lista. Várias informações por item = tabela (cada uma numa coluna)." },
      { tipo: "tabela", titulo: "Leia a tabela do campeonato", robo: {"paineis": ["📊 Outra tabela: a feira de ciências"], "passos": [{"fala": "Olha como eu leio uma tabela <b>diferente</b>. Primeiro acho a <b>linha</b> (quem) e depois a <b>coluna</b> (o quê):", "painel": 0, "titulo": "Turma | Votos | Projetos"}, {"fala": "", "painel": 0, "linha": "6º A | 12 | 3", "espera": 700}, {"fala": "", "painel": 0, "linha": "6º B | 8 | 2", "espera": 900}, {"fala": "Quantos votos tem o 6º B? Desço até a linha do 6º B e vou até a coluna Votos:", "painel": 0, "linha": "6º B → Votos = 8", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ache a linha e a coluna de cada pergunta! 💪"},
        enunciado: "<table class='tab'><tr><th>Time</th><th>Pontos</th><th>Vitórias</th><th>Gols</th></tr><tr><td>Leões</td><td>9</td><td>3</td><td>8</td></tr><tr><td>Águias</td><td>6</td><td>2</td><td>5</td></tr><tr><td>Tubarões</td><td>3</td><td>1</td><td>4</td></tr></table>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [
          ["Quantos pontos têm as Águias?", { r: "6", tipo: "num", dica: "Ache a linha das Águias e a coluna Pontos." }],
          ["Quantos gols fizeram os Leões?", { r: "8", tipo: "num", dica: "Linha dos Leões, coluna Gols." }],
          ["Qual time tem 1 vitória?", { r: ["Tubarões", "Tubaroes"], dica: "Procure o 1 na coluna Vitórias." }],
          ["Quantos gols os três times fizeram juntos?", { r: "17", tipo: "num", dica: "8 + 5 + 4." }]],
        explicacao: "Para ler uma tabela: ache a linha (o time) e a coluna (a informação). Como gols são números, dá para somar: 8 + 5 + 4 = 17." }
    ],
    turbo: [
      { tipo: "classificar", modo: "tabela", titulo: "Monte a tabela da turma",
        enunciado: "<p>O professor quer uma tabela da turma com estas colunas. Escolha o tipo de dado de cada uma.</p>",
        colunaItem: "Coluna", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "Texto" }, { id: "N", rot: "Número" }, { id: "D", rot: "Data" }, { id: "L", rot: "Lógico" }, { id: "M", rot: "Imagem" }],
        itens: [
          { t: "Nome do aluno", c: "T", why: "Nome é texto." },
          { t: "Número do computador (só para identificar)", c: "T", why: "É um código, ninguém soma números de computador." },
          { t: "Pontos no placar", c: "N", why: "Pontos se somam." },
          { t: "Aniversário", c: "D", why: "Dia e mês." },
          { t: "Terminou o Básico?", c: "L", why: "Sim ou não." },
          { t: "Avatar", c: "M", why: "É uma imagem." }],
        explicacao: "Escolher o tipo certo de cada coluna é o primeiro passo para o computador saber o que pode fazer com cada dado." }
    ],
    vf: [
      { v: true, why: "Idade serve para contas." },
      { v: false, corrigir: { trecho: "um dado usado para fazer contas", opcoes: ["um dado usado para fazer contas", "um dado do tipo texto"], certo: "um dado do tipo texto" }, why: "Ninguém soma telefones: é texto." },
      { v: true, why: "Lógico = verdadeiro ou falso." },
      { v: true, why: "Linhas e colunas." },
      { v: true, why: "Uma música depois da outra, em ordem." }
    ]
  },

  /* ============ MISSÃO 6 — Boa convivência na rede ============ */
  m6: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>💬 No grupo da turma, alguém escreveu <b>“VOCÊS SÃO MUITO CHATOS!!!”</b>, e outro colega postou uma foto de um amigo <b>sem pedir</b>.</p><p>🤔 O que deu errado nessas duas mensagens? E o que fazer quando algo ruim acontece na internet?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Um desconhecido no chat do jogo pergunta o nome da sua escola. O que você faz?", "opcoes": ["Não responde e conta para um adulto de confiança", "Responde, porque é só o nome da escola", "Passa também o seu telefone"], "certo": 0, "why": "O nome da escola é <b>dado pessoal</b>: não se passa para desconhecidos. Conte para um adulto de confiança."}, {"p": "Você quer postar uma foto da festa em que aparecem os seus amigos. O que fazer antes?", "opcoes": ["Pedir permissão a eles", "Postar e avisar depois", "Postar só no grupo da escola"], "certo": 0, "why": "A imagem é da pessoa: <b>peça permissão</b> antes de postar."}, {"p": "Seu melhor amigo pede a sua senha do jogo emprestada. O que fazer?", "opcoes": ["Não passar: a senha é só sua", "Passar, porque ele é seu amigo", "Passar e trocar depois"], "certo": 0, "why": "A senha é como a chave de casa: <b>é só sua</b>, nem para o melhor amigo."}]}],
    pratica: [
      { tipo: "mensagens", titulo: "Chegou no chat do jogo", app: "🎮 Chat do jogo",
        botoes: [{ id: "OK", rot: "🙂 Pode responder" }, { id: "PE", rot: "🚨 Perigo: parar e contar a um adulto" }],
        enunciado: "<p>Você está num jogo on-line. Para cada mensagem, decida.</p>",
        itens: [
          { de: "Jogador123", t: "Boa partida! Quer jogar de novo?", c: "OK", why: "Mensagem educada sobre o jogo." },
          { de: "Desconhecido", t: "Me manda uma foto sua? É segredo nosso, não conta pra ninguém.", c: "PE", why: "Desconhecido pedindo foto e segredo é perigo." },
          { de: "Desconhecido", t: "Em que escola você estuda? Onde você mora?", c: "PE", why: "Escola e endereço são dados pessoais." },
          { de: "Amiga_da_turma", t: "Vamos fazer o trabalho juntas amanhã na escola?", c: "OK", why: "Colega conhecida falando da escola." }],
        okMsg: "Você reconheceu os sinais de perigo!",
        explicacao: "Mensagem educada de colega ou sobre o jogo: pode responder. Desconhecido pedindo foto, segredo, escola ou endereço: perigo, parar e contar a um adulto de confiança." },
      { id: "m6-sim-mensagens", tipo: "sim_pc", titulo: "💬 No computador: mensagens boas e mensagens perigosas",
        enunciado: "<p>Chegaram mensagens na caixa de email do computador de treino. Decida o que fazer com cada uma. O <strong>Bit</strong> ajuda.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }],
        emails: [
          { id: "estranho", nome: "Gamer_Pro_2010", de: "gamerpro2010@email.com", assunto: "oi, quer ganhar skins?",
            html: "<p>oi!! sou da sua idade 😎 me manda seu <b>endereço</b>, o nome da sua <b>escola</b> e uma <b>foto</b> que eu te dou skins grátis. não conta pra ninguém!</p>" },
          { id: "corrente", nome: "Tia Neide", de: "neide.souza@email.com", assunto: "REPASSE PARA 10 AMIGOS!!!",
            html: "<p>Se você não repassar esta mensagem para 10 amigos em 1 hora, vai ter azar o ano inteiro!!!</p>" },
          { id: "colega", nome: "Ana (7º ano)", de: "ana.setimo@escola.edu.br", assunto: "Convite: grupo de estudos",
            html: "<p>Oi! Vamos fazer um grupo de estudos na biblioteca na quinta, depois da aula? Leve o caderno. 😊</p>" }
        ],
        passos: [
          { faca: "Abra o <b>Email</b>: duplo clique no ícone 📧 da área de trabalho.", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Leia a mensagem de <b>Gamer_Pro_2010</b>.", ok: "email:abrir:estranho", onde: "email:estranho" },
          { faca: "Desconhecido pedindo <b>endereço, escola e foto</b>, e ainda pede segredo: perigo! Nunca responda. Clique em <b>🚩 Denunciar</b> e conte a um adulto.", ok: "email:denunciar:estranho", onde: "email:denunciar", erros: { "email:excluir:estranho": "Excluir tira da sua caixa, mas <b>denunciar</b> avisa e protege outras crianças. Clique em ↺ Recomeçar e denuncie." } },
          { faca: "Abra a mensagem <b>REPASSE PARA 10 AMIGOS!!!</b>.", ok: "email:abrir:corrente", onde: "email:corrente" },
          { faca: "Corrente com ameaça de azar é mentira e só enche a caixa dos amigos. Não repasse: clique em <b>🗑️ Excluir</b>.", ok: "email:excluir:corrente", onde: "email:excluir", erros: { "email:denunciar:corrente": "Não é golpe perigoso, é só uma corrente boba: aqui basta <b>Excluir</b>. Clique em ↺ Recomeçar." } },
          { faca: "Por fim, abra o convite da <b>Ana</b>: essa é uma mensagem do bem!", ok: "email:abrir:colega", onde: "email:colega" }
        ],
        fimMsg: "Denunciou o desconhecido, excluiu a corrente e leu o convite da colega. Você sabe conviver na rede!",
        explicacao: "Não passe dados pessoais (endereço, escola, foto, senha) para desconhecidos e conte a um adulto. Não repasse correntes. Responda os colegas com respeito." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "É netiqueta ou não?",
        colunaItem: "Atitude", colunaResp: "Netiqueta?",
        categorias: [{ id: "S", rot: "👍 Sim" }, { id: "N", rot: "👎 Não" }],
        itens: [
          { t: "Falar com respeito, como falaria pessoalmente", c: "S", why: "Do outro lado tem uma pessoa." },
          { t: "ESCREVER TUDO ASSIM NO GRUPO", c: "N", why: "Maiúsculas parecem grito." },
          { t: "Pedir permissão antes de postar a foto de um amigo", c: "S", why: "A imagem é da pessoa." },
          { t: "Postar sem pensar, porque depois é só apagar", c: "N", why: "O que vai para a internet pode ser copiado e ficar para sempre." },
          { t: "Contar para um adulto quando algo estranho acontece", c: "S", why: "Você não precisa resolver sozinho." }],
        explicacao: "Netiqueta: respeito, nada de tudo em maiúsculas, pensar antes de postar, pedir permissão para fotos e contar a um adulto quando algo estranho acontece." },

      { tipo: "sinais", titulo: "Marque o que NÃO se passa para desconhecidos",
        opcoes: [
          { t: "Endereço de casa", certo: true }, { t: "Senha", certo: true }, { t: "Nome da escola", certo: true },
          { t: "Onde estou agora", certo: true }, { t: "Telefone", certo: true },
          { t: "O meu time de futebol favorito", certo: false, why: "Gosto pessoal não mostra onde encontrar você." },
          { t: "A cor de que eu mais gosto", certo: false, why: "Não é dado pessoal perigoso." }],
        dicas: ["Dados pessoais mostram quem você é ou onde encontrar você."],
        explicacao: "Endereço, senha, escola, onde você está e telefone são dados pessoais: não se passam para quem você não conhece." },

      { tipo: "escolha", titulo: "O que fazer?",
        perguntas: [
          { p: "Um colega está sendo ofendido no grupo da turma. O que você faz?", opcoes: ["Não compartilhar, apoiar o colega, guardar o print e contar a um adulto", "Compartilho para todo mundo ver", "Entro na brincadeira"], certo: 0, why: "Apoiar, guardar a prova e denunciar." },
          { p: "O meu melhor amigo pediu a minha senha do jogo. Eu:", opcoes: ["Não passo a senha: ela é como a chave de casa", "Passo, porque ele é meu amigo", "Mudo a senha para 123456"], certo: 0, why: "A senha é como a chave de casa." },
          { p: "Para que serve o print de uma ofensa?", opcoes: ["Serve de prova para denunciar", "Para espalhar no grupo", "Para apagar a ofensa"], certo: 0, why: "Print = prova." }],
        explicacao: "Ofensa: não compartilhe, apoie, guarde o print e denuncie. Senha não se passa para ninguém." }
    ],
    desafio: [
      {"tipo": "escolha", "titulo": "🟡 Desafio: o que está errado nesta mensagem?", "enunciado": "<p>Leia cada situação e descubra qual regra da netiqueta foi quebrada.</p>", "perguntas": [{"p": "No grupo da turma: <b>“OI GENTE, ALGUÉM TEM A LIÇÃO???”</b>", "opcoes": ["Está tudo em maiúsculas: parece grito", "Faltou pedir permissão para postar", "Passou um dado pessoal"], "certo": 0, "why": "Na internet, maiúsculas parecem <b>grito</b>."}, {"p": "O Davi postou uma foto do grupo de amigos sem falar com ninguém.", "opcoes": ["Faltou pedir permissão a quem aparece na foto", "Ele escreveu tudo em maiúsculas", "Ele passou a senha"], "certo": 0, "why": "A imagem é da pessoa: <b>peça permissão</b> antes de postar."}, {"p": "Alguém escreveu no chat do jogo: “manda o seu endereço que eu te mando um presente”.", "opcoes": ["Pede dado pessoal: não responda e conte a um adulto de confiança", "Pode responder, porque é um presente", "Responda só com o nome da rua"], "certo": 0, "why": "Endereço é <b>dado pessoal</b>: nunca passe para desconhecidos."}]},
      {tipo:  "escolha", titulo:  "Escolha a versão respeitosa de cada mensagem", perguntas:  [{p:  "“QUE TRABALHO RUIM, VOCÊ NÃO SABE NADA”", opcoes:  ["“Acho que o trabalho pode melhorar. Quer ajuda?”", "“TRABALHO RUIM!!!”", "“Ninguém liga para o seu trabalho.”"], certo:  0, why:  "Mantém a ideia (dá para melhorar) sem gritar e oferece ajuda."}, {p:  "“Sai do grupo, ninguém te chamou”", opcoes:  ["“Vamos combinar juntos quem participa do grupo?”", "“Sai logo daqui.”", "“Ninguém quer você aqui.”"], certo:  0, why:  "Combinar as regras juntos resolve sem excluir ninguém."}, {p:  "“kkkk olha a foto dele, que feio”", opcoes:  ["“Melhor não postar a foto sem ele deixar.”", "“kkkk que foto feia”", "“Manda para todo mundo!”"], certo:  0, why:  "Foto de alguém só com a permissão da pessoa."}], explicacao:  "Dá para dizer a mesma coisa <b>sem ofender</b> e <b>sem gritar</b> (tudo em maiúsculas parece grito)."}
    ],
    turbo: [
      {"tipo": "classificar", "modo": "tabela", "titulo": "🔴 Turbo: pode passar para um desconhecido? (com a Missão 5 🔁)", "colunaItem": "Dado", "colunaResp": "No chat do jogo, com quem eu não conheço…", "enunciado": "<p>Lembra dos <b>tipos de dado</b> da Missão 5? Agora decida: este dado pode ir para alguém que você não conhece?</p>", "categorias": [{"id": "S", "rot": "Pode"}, {"id": "N", "rot": "Não pode"}], "itens": [{"t": "O apelido que eu uso no jogo", "c": "S", "why": "O apelido não mostra quem você é."}, {"t": "Meu nome completo", "c": "N", "why": "Nome completo é dado pessoal."}, {"t": "O nome da minha escola", "c": "N", "why": "Mostra onde você está todos os dias: é dado pessoal."}, {"t": "Meu personagem favorito do jogo", "c": "S", "why": "Gosto pessoal sem dado que identifique você."}, {"t": "Minha senha", "c": "N", "why": "A senha é só sua, nem para o melhor amigo."}, {"t": "Meu telefone", "c": "N", "why": "Telefone é dado pessoal (e, lembra?, é do tipo texto!)."}], "explicacao": "Dados pessoais (nome completo, escola, telefone, endereço, senha) ficam com você. Apelido e gostos podem ser compartilhados com cuidado."},
      {tipo:  "sinais", titulo:  "As regras do grupo da turma", enunciado:  "<p>Marque as boas regras de <b>netiqueta</b> para o grupo da sua turma.</p>", opcoes:  [{t:  "Falar com respeito, sem xingar e sem escrever tudo em maiúsculas", certo:  true}, {t:  "Não postar foto de ninguém sem permissão", certo:  true}, {t:  "Não passar senha nem endereço no grupo", certo:  true}, {t:  "Não espalhar mensagens sem saber se são verdade", certo:  true}, {t:  "Quem errar pode ser zoado", certo:  false}, {t:  "Mandar a senha para o melhor amigo guardar", certo:  false}, {t:  "Postar o print da conversa de outra pessoa sem pedir", certo:  false}], explicacao:  "Netiqueta é a etiqueta da internet: <b>respeito</b>, <b>cuidado com fotos</b> e <b>proteção dos dados</b>."}
    ],
    vf: [
      { v: true, why: "Maiúsculas parecem grito." },
      { v: false, corrigir: { trecho: "Posso", opcoes: ["Posso", "Não posso"], certo: "Não posso" }, why: "Senha é só sua, nem para o melhor amigo." },
      { v: true, why: "A imagem é da pessoa." },
      { v: true, why: "Pedir segredo é sinal de perigo." },
      { v: false, corrigir: { trecho: "ajuda a resolver", opcoes: ["ajuda a resolver", "piora"], certo: "piora" }, why: "Compartilhar espalha a ofensa." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Digitação sem medo ============ */
  m7: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>⌨️ O Kauã digita com <b>um dedo só</b>, olhando para o teclado o tempo todo. A Bia usa <b>as duas mãos</b> e quase não olha.</p><p>🤔 Por que a Bia termina antes? E como ela acha as teclas <b>sem olhar</b>?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você precisa escrever <b>São Paulo</b>. Como sai o <b>ã</b> no teclado brasileiro (ABNT2)?", "opcoes": ["Aperta o til (~) e depois a letra a", "Aperta a letra a e depois o til", "Segura o Shift e aperta a"], "certo": 0, "why": "No ABNT2, o acento vem primeiro: <b>til (~)</b> e depois a vogal."}, {"p": "Para achar a posição certa das mãos sem olhar, você procura…", "opcoes": ["O risquinho nas teclas F e J", "A tecla Enter", "A barra de espaço"], "certo": 0, "why": "As teclas <b>F e J</b> têm um risquinho em alto-relevo para guiar os indicadores."}, {"p": "Você vai preencher uma inscrição e precisa do seu nome com a primeira letra maiúscula. Como faz?", "opcoes": ["Segura o Shift e aperta a letra", "Aperta o Enter antes da letra", "Aperta a letra duas vezes"], "certo": 0, "why": "Segurando o <b>Shift</b>, a letra sai maiúscula."}]}],
    pratica: [
      { tipo: "sim_pc", titulo: "⌨️ No computador: digite com acento no Bloco de Notas",
        enunciado: "<p>Digite de verdade no Bloco de Notas. O <strong>Bit</strong> confere letra por letra, com acento e maiúscula.</p>",
        abertas: ["notas"],
        passos: [
          { faca: "Digite: <b>A escola é nossa.</b> (O <b>é</b>: aperte a tecla do acento agudo <b>´</b>, solte e aperte <b>e</b>.)", ok: { estado: "notas", texto: "A escola é nossa." }, onde: "notas:texto", dica: "O acento agudo ´ fica do lado direito do P, no teclado brasileiro. Aperte o acento, solte, depois a letra." },
          { faca: "Aperte <b>Enter</b> e escreva na linha de baixo: <b>Você está aqui?</b> (o <b>ê</b>: segure <b>Shift</b> e aperte a tecla <b>~</b>, solte e aperte <b>e</b>; o <b>?</b>: Shift + a tecla do <b>/</b>.)", ok: { estado: "notas", texto: "A escola é nossa.\nVocê está aqui?" }, dica: "Você: V maiúsculo (Shift + V), o, c, ê. O circunflexo ^ é Shift + a tecla do ~." },
          { faca: "Mais uma linha (Enter): <b>Ação, coração e pão.</b> (o <b>ç</b> tem tecla própria, ao lado do L; o <b>ã</b>: tecla <b>~</b>, solte, <b>a</b>.)", ok: { estado: "notas", texto: "A escola é nossa.\nVocê está aqui?\nAção, coração e pão." } }
        ],
        fimMsg: "Agudo, circunflexo, til e cedilha: tudo certinho no teclado!",
        explicacao: "No teclado brasileiro (ABNT2): acento agudo ´ e til ~ têm teclas próprias; o circunflexo ^ é Shift + ~; a crase ` é Shift + ´; o Ç tem tecla própria. Primeiro o acento, depois a letra." },
      { tipo: "info", titulo: "Posição das mãos",
        html: "<p>Coloque os dedos na <strong>fileira base</strong>: mão esquerda em <strong>A S D F</strong>, mão direita em <strong>J K L Ç</strong>. Sinta o <strong>risquinho</strong> no F e no J. Polegares na barra de espaço. Depois de cada letra, volte para a fileira base.</p>" }
    ],
    basico: [
      { tipo: "classificar", titulo: "Mão esquerda ou mão direita?",
        enunciado: "<p>Na fileira base, qual mão aperta cada tecla?</p>",
        categorias: [{ id: "E", rot: "Mão esquerda", ic: "✋" }, { id: "D", rot: "Mão direita", ic: "🤚" }],
        itens: [{ t: "A", c: "E" }, { t: "S", c: "E" }, { t: "D", c: "E" }, { t: "F", c: "E" }, { t: "J", c: "D" }, { t: "K", c: "D" }, { t: "L", c: "D" }, { t: "Ç", c: "D" }],
        dicas: ["Esquerda: A S D F. Direita: J K L Ç."],
        explicacao: "Mão esquerda: A S D F (o indicador no F). Mão direita: J K L Ç (o indicador no J)." },

      { tipo: "ordenar", titulo: "Como escrever “é”",
        itens: ["Apertar a tecla do acento agudo ( ´ )", "Soltar a tecla do acento (nada aparece ainda)", "Apertar a letra e", "Aparece é na tela"],
        explicacao: "No teclado ABNT2, o acento vem antes: ´ e depois a vogal." },

      { tipo: "escolha", titulo: "Acentos no teclado ABNT2",
        perguntas: [
          { p: "Para escrever “mãe”, aperto:", opcoes: ["A tecla do til ( ~ ) e depois a", "A letra a e depois o til", "Shift + a"], certo: 0, why: "O acento vem antes da vogal." },
          { p: "Para escrever “você” (ê), aperto:", opcoes: ["Shift + a tecla do til (^) e depois e", "A tecla do acento agudo e depois e", "Caps Lock e depois e"], certo: 0, why: "O circunflexo (^) é Shift + til." },
          { p: "Onde fica o Ç no teclado brasileiro?", opcoes: ["Ao lado do L", "Ao lado do A", "No lugar do espaço"], certo: 0, why: "Fileira base direita: J K L Ç." },
          { p: "Para que servem os risquinhos do F e do J?", opcoes: ["Achar a posição das mãos sem olhar", "Enfeitar", "Ligar o computador"], certo: 0, why: "São a referência dos indicadores." }],
        explicacao: "Til (~) para ã, õ; Shift + til (^) para â, ê, ô; Ç ao lado do L; os risquinhos do F e J guiam os indicadores." },

      { tipo: "tabela", titulo: "Digite as palavras com acento", robo: {"digitar": "pé mãe", "intro": "Olha como eu digito <b>outras</b> palavras com acento. O acento vem <b>antes</b> da letra!", "paineis": [], "passos": []},
        enunciado: "<p>Digite exatamente igual, com o acento certo. O portal confere o acento!</p>",
        colunas: ["Palavra", "Digite aqui"],
        linhas: [
          ["café", { r: "café", exato: true, dica: "´ e depois e." }],
          ["maçã", { r: "maçã", exato: true, dica: "Ç ao lado do L; ~ e depois a." }],
          ["você", { r: "você", exato: true, dica: "Shift + ~ (vira ^) e depois e." }],
          ["avó", { r: "avó", exato: true, dica: "´ e depois o." }],
          ["pão", { r: "pão", exato: true, dica: "~ e depois a." }]],
        explicacao: "Acento sempre antes da vogal: ´ (agudo), ~ (til), Shift + ~ (circunflexo)." }
    ],
    desafio: [
      {"tipo": "ordenar", "titulo": "🟡 Desafio: como se escreve “você” no teclado?", "enunciado": "<p>Coloque em ordem os toques para escrever <b>você</b> no teclado brasileiro (ABNT2).</p>", "itens": ["Aperte a letra v", "Aperte a letra o", "Aperte a letra c", "Segure o Shift e aperte a tecla do til (aparece o ^)", "Aperte a letra e: sai o ê"], "explicacao": "No ABNT2, o circunflexo é Shift + a tecla do til, e só depois a vogal: o acento vem antes da letra."},
      { tipo: "tabela", titulo: "Frases completas", robo: {"digitar": "Já é hora?", "intro": "Olha como eu digito uma frase <b>diferente</b>, com maiúscula, acento e pontuação.", "paineis": [], "passos": []},
        enunciado: "<p>Digite igualzinho: maiúscula, acento, cedilha e pontuação.</p>",
        colunas: ["Frase", "Digite aqui"],
        linhas: [
          ["A maçã está na mesa.", { r: "A maçã está na mesa.", exato: true, dica: "A maiúsculo (Shift + a), ç ao lado do L e ponto final." }],
          ["Você já almoçou?", { r: "Você já almoçou?", exato: true, dica: "? = Shift + a tecla da barra ( / )." }],
          ["Ótimo trabalho, João!", { r: "Ótimo trabalho, João!", exato: true, dica: "Ó maiúsculo: ´ e depois Shift + o." }]],
        explicacao: "Maiúscula com Shift, acento antes da vogal, ç ao lado do L, ? com Shift + barra e ! com Shift + 1." }
    ],
    turbo: [
      {"tipo": "escolha", "titulo": "🔴 Turbo: o revisor de texto (com a Missão 1 🔁)", "enunciado": "<p>Você é o revisor da turma! Use o que aprendeu hoje e na Missão 1.</p>", "perguntas": [{"p": "O colega digitou <b>sao paulo</b>. O que precisa corrigir?", "opcoes": ["Pôr as maiúsculas e o til: São Paulo", "Só trocar o espaço por um ponto", "Nada, está certo"], "certo": 0, "why": "Nome de cidade começa com <b>maiúscula</b> (Shift) e “São” tem <b>til</b> (~ e depois a)."}, {"p": "Ele digitou <b>Brasiu</b> e o cursor está logo depois do <b>u</b>. Qual tecla apaga a letra errada? 🔁", "opcoes": ["Backspace (⟵)", "Caps Lock", "Enter"], "certo": 0, "why": "O <b>Backspace</b> (Missão 1) apaga a letra antes do cursor."}, {"p": "Para escrever <b>coração</b>, quais teclas especiais ele vai usar?", "opcoes": ["A tecla Ç e o til antes do a", "Só o Shift", "O acento agudo e o Enter"], "certo": 0, "why": "<b>Ç</b> fica ao lado do L, e o <b>ã</b> é til + a."}]},
      { tipo: "tabela", titulo: "Um parágrafo sem erros", robo: {"digitar": "Eu gosto de ler.", "intro": "Olha como eu digito com calma, conferindo cada tecla. Depois de cada palavra, a barra de espaço!", "paineis": [], "passos": []},
        enunciado: "<p>Digite o parágrafo inteiro, igualzinho. Volte sempre os dedos para a fileira base.</p>",
        colunas: ["Parágrafo", "Digite aqui"],
        linhas: [
          ["Na Informática, aprendi a usar o teclado. Agora escrevo mais rápido e com menos erros!", { r: "Na Informática, aprendi a usar o teclado. Agora escrevo mais rápido e com menos erros!", exato: true, dica: "Confira: vírgula depois de Informática, ponto depois de teclado e exclamação no fim." }]],
        explicacao: "Treino é o segredo: com os dedos na fileira base, a velocidade aumenta sozinha." }
    ],
    vf: [
      { v: true, why: "Os risquinhos guiam os indicadores." },
      { v: false, corrigir: { trecho: "primeiro a letra e depois o acento", opcoes: ["primeiro a letra e depois o acento", "primeiro o acento e depois a letra"], certo: "primeiro o acento e depois a letra" }, why: "No ABNT2, o acento vem antes." },
      { v: true, why: "J K L Ç." },
      { v: true, why: "Shift + letra = maiúscula." },
      { v: true, why: "Os polegares apertam o espaço." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Atalhos do teclado e do mouse ============ */
  m8: {
    /* 🌀 piloto do modelo em espiral (20/11/2026): gancho e "Onde eu uso isso?" prático */
    gancho: {"html": "<p>⏳ A Lara está copiando <b>à mão</b>, letra por letra, um texto enorme da tela para o trabalho. O Kauã olha e diz: “Dá para fazer isso em <b>3 segundos</b>!”</p><p>🤔 Que mágica é essa? Quais teclas o Kauã vai apertar?</p>"},
    aplicar: [{"tipo": "escolha", "titulo": "🛠️ E na vida real, o que você faria?", "enunciado": "<p>Use o que você aprendeu hoje para resolver cada situação.</p>", "perguntas": [{"p": "Você vai pagar com PIX e precisa colocar um código enorme. O que evita erro de digitação?", "opcoes": ["Copiar (Ctrl + C) e colar (Ctrl + V)", "Digitar o código devagar", "Tirar um print"], "certo": 0, "why": "Copiar e colar não erra nenhuma letra: <b>Ctrl + C</b> e depois <b>Ctrl + V</b>."}, {"p": "Você apagou sem querer um parágrafo do trabalho. Qual atalho traz ele de volta?", "opcoes": ["Ctrl + Z", "Ctrl + S", "Ctrl + A"], "certo": 0, "why": "<b>Ctrl + Z</b> desfaz o último passo."}, {"p": "A letra do site está pequena demais para ler. Como aumentar?", "opcoes": ["Segurar Ctrl e girar a rodinha do mouse", "Clique triplo", "Alt + Tab"], "certo": 0, "why": "<b>Ctrl + rodinha do mouse</b> muda o tamanho (zoom) da página."}]}],
    pratica: [
      { tipo: "sim_pc", titulo: "⚡ No computador: copiar, colar, recortar e desfazer com atalhos",
        enunciado: "<p>No Bloco de Notas do computador de treino, use <strong>só atalhos</strong> do teclado. O <strong>Bit</strong> confere.</p>",
        abertas: ["notas"], notas: "Bom dia, turma!",
        passos: [
          { faca: "Selecione <b>todo</b> o texto: clique na folha e aperte <b>Ctrl + A</b> (segure Ctrl e aperte A).", ok: "atalho:Ctrl+A", onde: "notas:texto" },
          { faca: "Copie o texto: <b>Ctrl + C</b>.", ok: "atalho:Ctrl+C" },
          { faca: "Aperte a seta <b>→</b> (ou <b>End</b>) para ir para o fim, aperte <b>Enter</b> e cole: <b>Ctrl + V</b>. O texto deve aparecer duas vezes.", ok: { estado: "notas", texto: "Bom dia, turma!\nBom dia, turma!" }, dica: "Depois do Ctrl + A, o texto todo fica selecionado; uma seta → tira a seleção e leva o cursor para o fim." },
          { faca: "Ops! Desfaça a última coisa com <b>Ctrl + Z</b>.", ok: "atalho:Ctrl+Z" },
          { faca: "Por fim, salve com <b>Ctrl + S</b>, com o nome <b>atalhos</b>.", ok: { estado: "salvo", nome: "atalhos" } }
        ],
        fimMsg: "Ctrl + A seleciona tudo, Ctrl + C copia, Ctrl + V cola, Ctrl + Z desfaz e Ctrl + S salva. Você usou todos!",
        explicacao: "Ctrl + A: selecionar tudo · Ctrl + C: copiar · Ctrl + X: recortar · Ctrl + V: colar · Ctrl + Z: desfazer · Ctrl + S: salvar." },
      { tipo: "info", titulo: "Como apertar um atalho",
        html: "<p>Segure a primeira tecla (<strong>Ctrl</strong>, <strong>Alt</strong> ou <strong>Windows</strong>), aperte a segunda e solte as duas. Experimente agora: selecione esta frase arrastando o mouse e aperte <strong>Ctrl + C</strong>. Pronto, você copiou!</p>" }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada atalho e o que ele faz",
        pares: [
          { a: "Ctrl + C", b: "Copiar" }, { a: "Ctrl + V", b: "Colar" }, { a: "Ctrl + X", b: "Recortar" },
          { a: "Ctrl + Z", b: "Desfazer" }, { a: "Ctrl + S", b: "Salvar" }, { a: "Ctrl + A", b: "Selecionar tudo" }],
        explicacao: "C copia; V cola; X recorta (tesoura); Z desfaz; S salva (save); A seleciona tudo (all)." },

      { tipo: "classificar", modo: "tabela", titulo: "Qual atalho eu uso?",
        colunaItem: "Situação", colunaResp: "Atalho",
        categorias: [{ id: "Z", rot: "Ctrl + Z" }, { id: "S", rot: "Ctrl + S" }, { id: "T", rot: "Alt + Tab" }, { id: "E", rot: "Windows + E" }],
        itens: [
          { t: "Apaguei um parágrafo sem querer", c: "Z", why: "Desfaz o último passo." },
          { t: "Quero guardar o trabalho antes que a luz acabe", c: "S", why: "Salva." },
          { t: "Quero ir do navegador para o editor de texto", c: "T", why: "Troca de janela." },
          { t: "Quero abrir as minhas pastas", c: "E", why: "Abre o Explorador de Arquivos." }],
        explicacao: "Ctrl + Z desfaz; Ctrl + S salva; Alt + Tab troca de janela; Windows + E abre o Explorador de Arquivos." },

      { tipo: "escolha", titulo: "Copiar ou recortar?",
        perguntas: [
          { p: "Quero o mesmo texto em dois lugares. Uso:", opcoes: ["Copiar (Ctrl + C) e colar", "Recortar (Ctrl + X) e colar", "Desfazer"], certo: 0, why: "Copiar mantém o original." },
          { p: "Quero mudar o parágrafo de lugar. Uso:", opcoes: ["Recortar (Ctrl + X) e colar", "Copiar e colar", "Salvar"], certo: 0, why: "Recortar tira do lugar." },
          { p: "Onde fica guardado o que copiei, antes de colar?", opcoes: ["Na área de transferência", "Na lixeira", "No monitor"], certo: 0, why: "É o lugar escondido que guarda até colar." }],
        explicacao: "Copiar deixa o original; recortar tira do lugar. O que foi copiado ou recortado fica na área de transferência até colar." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "Mudar um texto de lugar só com atalhos",
        itens: ["Selecionar o texto (arrastar o mouse)", "Apertar Ctrl + X (recortar)", "Clicar no lugar novo", "Apertar Ctrl + V (colar)", "Apertar Ctrl + S (salvar)"],
        explicacao: "Selecionar → recortar → clicar no lugar novo → colar → salvar." },
      { tipo: "tabela", titulo: "Treine de verdade", robo: {"paineis": ["🖱️ Copiar e colar (outra palavra)"], "passos": [{"fala": "Olha como eu copio e colo <b>outra</b> palavra, ESCOLA. 1º: <b>duplo clique</b> na palavra, para selecionar:", "painel": 0, "linha": "Duplo clique em ESCOLA (ela fica azul)"}, {"fala": "2º: aperto <b>Ctrl + C</b> para copiar (parece que nada acontece, mas ela foi guardada).", "painel": 0, "linha": "Ctrl + C", "marca": true}, {"fala": "3º: clico dentro da caixa.", "painel": 0, "linha": "Clique na caixa"}, {"fala": "4º: aperto <b>Ctrl + V</b> para colar:", "painel": 0, "linha": "Ctrl + V → ESCOLA apareceu!", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: copie e cole a palavra INFORMÁTICA! 💪"},
        enunciado: "<p>Selecione a palavra <strong>INFORMÁTICA</strong> desta frase com duplo clique, copie com <strong>Ctrl + C</strong> e cole na caixa com <strong>Ctrl + V</strong>.</p>",
        colunas: ["O que fazer", "Cole aqui"],
        linhas: [["Copie e cole a palavra INFORMÁTICA", { r: "INFORMÁTICA", exato: true, dica: "Duplo clique na palavra, Ctrl + C, clique na caixa e Ctrl + V." }]],
        explicacao: "Duplo clique seleciona a palavra; Ctrl + C copia; Ctrl + V cola. Assim não tem erro de digitação!" }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Atalhos do mouse",
        perguntas: [
          { p: "Clique triplo num texto:", opcoes: ["Seleciona o parágrafo inteiro", "Apaga o texto", "Abre um programa"], certo: 0, why: "Duplo seleciona a palavra; triplo, o parágrafo." },
          { p: "Ctrl + rodinha do mouse:", opcoes: ["Aumenta ou diminui o tamanho da página (zoom)", "Fecha a janela", "Salva"], certo: 0, why: "Zoom." },
          { p: "Clico no 1º arquivo, seguro Shift e clico no 5º. O que acontece?", opcoes: ["Seleciona do 1º ao 5º", "Apaga os 5", "Abre só o 5º"], certo: 0, why: "Shift + clique seleciona tudo entre os dois." },
          { p: "No celular, tocar e segurar num texto mostra:", opcoes: ["Copiar e Colar", "Desligar", "Atualizar"], certo: 0, why: "É o mesmo atalho, em botão." }],
        explicacao: "Clique triplo = parágrafo; Ctrl + rodinha = zoom; Shift + clique = seleciona um intervalo; no celular, tocar e segurar mostra Copiar e Colar." }
    ],
    vf: [
      { v: true, why: "C copia, V cola." },
      { v: true, why: "Z desfaz." },
      { v: false, corrigir: { trecho: "deixa o original no lugar", opcoes: ["deixa o original no lugar", "tira o original do lugar"], certo: "tira o original do lugar" }, why: "Quem deixa o original é copiar." },
      { v: true, why: "Troca de janela." },
      { v: true, why: "A de all (tudo)." }
    ]
  },

  /* ============ 🔁 REVISÃO PARA A PROVA ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Mouse, teclado e janela",
        pares: [{ a: "Duplo clique", b: "Abrir pastas e programas" }, { a: "Clique direito", b: "Ver mais opções" }, { a: "Backspace", b: "Apagar a letra antes do cursor" }, { a: "➖ Minimizar", b: "Esconder a janela na barra de tarefas" }, { a: "❌ Fechar", b: "Fechar a janela e o programa" }],
        explicacao: "Duplo clique abre; clique direito mostra opções; Backspace apaga; ➖ esconde; ❌ fecha." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", modo: "tabela", de: "m2", titulo: "M2 · Em que etapa?", colunaItem: "Peça", colunaResp: "Etapa",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "P", rot: "Processamento" }, { id: "S", rot: "Saída" }, { id: "A", rot: "Armazenamento" }],
        itens: [{ t: "Microfone", c: "E" }, { t: "CPU", c: "P" }, { t: "Impressora", c: "S" }, { t: "SSD", c: "A" }, { t: "Câmera", c: "E" }, { t: "Monitor", c: "S" }],
        explicacao: "Entrada recebe; processamento calcula; saída mostra; armazenamento guarda." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Hardware e software",
        perguntas: [
          { p: "O teclado é:", opcoes: ["Hardware", "Software", "Sistema operacional"], certo: 0, why: "Dá para tocar." },
          { p: "Android e Windows são:", opcoes: ["Exemplos de sistema operacional", "Aplicativos", "Peças"], certo: 0, why: "Comandam o aparelho." },
          { p: "O aplicativo que abre sites é o:", opcoes: ["Navegador", "Processador", "Gabinete"], certo: 0, why: "Chrome, Edge, Firefox." }],
        explicacao: "Hardware = peça; software = programa; sistema operacional comanda; navegador abre sites." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", modo: "tabela", de: "m4", titulo: "M4 · Que tipo de arquivo?", colunaItem: "Arquivo", colunaResp: "Tipo",
        categorias: [{ id: "T", rot: "Texto" }, { id: "I", rot: "Imagem" }, { id: "A", rot: "Áudio" }, { id: "V", rot: "Vídeo" }],
        itens: [{ t: "carta.docx", c: "T" }, { t: "praia.jpg", c: "I" }, { t: "forro.mp3", c: "A" }, { t: "gol.mp4", c: "V" }, { t: "nota.txt", c: "T" }],
        explicacao: ".docx/.txt texto; .jpg imagem; .mp3 áudio; .mp4 vídeo." },
      { tipo: "relembre", de: "m5" },
      { tipo: "tabela", de: "m5", titulo: "M5 · Tipo de dado", robo: {"paineis": ["🗂️ Outro cadastro: a biblioteca"], "passos": [{"fala": "Olha como eu escolho o tipo de dado de <b>outro</b> cadastro. Pergunto: é palavra, número, data ou sim/não?", "painel": 0, "linha": "Título do livro → Texto"}, {"fala": "", "painel": 0, "linha": "Número de páginas → Número", "espera": 900}, {"fala": "", "painel": 0, "linha": "Data da devolução → Data", "espera": 900}, {"fala": "", "painel": 0, "linha": "Já devolveu? → Lógico (sim ou não)", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: faça a mesma pergunta para cada campo da tarefa! 💪"}, colunas: ["Dado", "Tipo"],
        linhas: [["Nome do aluno", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }], ["Nota 7,5", { op: ["Texto", "Número", "Data", "Lógico"], r: "Número" }], ["15/03/2027", { op: ["Texto", "Número", "Data", "Lógico"], r: "Data" }], ["Veio à aula? sim", { op: ["Texto", "Número", "Data", "Lógico"], r: "Lógico" }], ["CEP 68523-000", { op: ["Texto", "Número", "Data", "Lógico"], r: "Texto" }]],
        explicacao: "Nome e CEP = texto; nota = número; 15/03/2027 = data; sim/não = lógico." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Boa convivência",
        perguntas: [
          { p: "Escrever TUDO EM MAIÚSCULAS na internet parece:", opcoes: ["Grito", "Educação", "Elogio"], certo: 0 },
          { p: "Desconhecido pede foto e segredo. Eu:", opcoes: ["Parar a conversa e contar para um adulto de confiança", "Mando a foto", "Guardo segredo"], certo: 0 },
          { p: "As boas maneiras na internet se chamam:", opcoes: ["Netiqueta", "Navegador", "Atalho"], certo: 0 }],
        explicacao: "Maiúsculas = grito. Pedido de foto e segredo = perigo: parar e contar. Netiqueta = boas maneiras na rede." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Digitação",
        perguntas: [
          { p: "Os dedos descansam na:", opcoes: ["Fileira base (A S D F … J K L Ç)", "Fileira dos números", "Barra de espaço"], certo: 0 },
          { p: "Para “é”, aperto:", opcoes: ["´ e depois e", "e e depois ´", "Shift + e"], certo: 0 }],
        explicacao: "Fileira base: A S D F e J K L Ç. Acento antes da vogal." },
      { tipo: "relembre", de: "m8" },
      { tipo: "ligar", de: "m8", titulo: "M8 · Atalhos",
        pares: [{ a: "Ctrl + C", b: "Copiar" }, { a: "Ctrl + V", b: "Colar" }, { a: "Ctrl + Z", b: "Desfazer" }, { a: "Alt + Tab", b: "Trocar de janela" }],
        explicacao: "C copia; V cola; Z desfaz; Alt + Tab troca de janela." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1",
        perguntas: [{ p: "O programa está na barra de tarefas, mas a janela sumiu. Ela foi:", opcoes: ["Minimizada", "Fechada", "Apagada"], certo: 0, why: "Minimizada continua aberta." }],
        explicacao: "Resposta: Minimizada. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2",
        perguntas: [{ p: "Faltou luz e o trabalho não salvo sumiu. Ele estava só na:", opcoes: ["RAM", "SSD", "Pen drive"], certo: 0, why: "A RAM apaga ao desligar." }],
        explicacao: "Resposta: RAM. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3",
        perguntas: [{ p: "O jogo travou na fase 3. O problema é de:", opcoes: ["Software", "Hardware", "Monitor"], certo: 0, why: "Programa travado = software." }],
        explicacao: "Resposta: Software. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "tabela", de: "m4", titulo: "Desafio M4", robo: {"paineis": ["📁 Outro caminho"], "passos": [{"fala": "Olha como eu leio um caminho <b>diferente</b>. As setas › mostram uma pasta <b>dentro</b> da outra:", "painel": 0, "linha": "Imagens › Viagem › Praia › mar.jpg"}, {"fala": "O arquivo é o último (tem a extensão .jpg). A pasta onde ele está é a que vem <b>logo antes</b>:", "painel": 0, "linha": "Pasta do arquivo: Praia", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ache a pasta logo antes de cada arquivo! 💪"}, colunas: ["Caminho", "Pasta do arquivo"],
        linhas: [["Documentos › Escola › Ciências › planta.jpg", { r: ["Ciências", "Ciencias"], dica: "A última pasta antes do arquivo." }]],
        explicacao: "O arquivo está na última pasta antes do nome dele." },
      { tipo: "escolha", de: "m5", titulo: "Desafio M5",
        perguntas: [{ p: "Times com pontos, vitórias e gols ficam melhor numa:", opcoes: ["Tabela", "Lista", "Imagem"], certo: 0, why: "Várias informações por item = tabela." }],
        explicacao: "Resposta: Tabela. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m6", titulo: "Desafio M6",
        perguntas: [{ p: "Viram uma ofensa contra um colega. O certo é:", opcoes: ["Não compartilhar, apoiar o colega, guardar o print e denunciar", "Compartilhar", "Rir junto"], certo: 0 }],
        explicacao: "Resposta: Não compartilhar, apoiar o colega, guardar o print e denunciar. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "tabela", de: "m7", titulo: "Desafio M7", robo: {"digitar": "Oi, tudo bem?", "intro": "Olha como eu digito uma frase <b>diferente</b>: maiúscula no começo e pontuação no fim.", "paineis": [], "passos": []}, colunas: ["Frase", "Digite aqui"],
        linhas: [["Eu já sei digitar!", { r: "Eu já sei digitar!", exato: true, dica: "E maiúsculo, já com acento e ! no fim (Shift + 1)." }]],
        explicacao: "Shift para a maiúscula, acento antes da vogal, Shift + 1 para a exclamação." },
      { tipo: "escolha", de: "m8", titulo: "Desafio M8",
        perguntas: [{ p: "Quero mudar um parágrafo de lugar:", opcoes: ["Ctrl + X e depois Ctrl + V", "Ctrl + C e depois Ctrl + Z", "Ctrl + S"], certo: 0, why: "Recortar e colar." }],
        explicacao: "Resposta: Ctrl + X e depois Ctrl + V. Errou? Releia o 📚 Relembre da missão." }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1",
        perguntas: [{ p: "A barrinha que pisca onde a letra vai aparecer é o:", opcoes: ["Cursor", "Ponteiro", "Ícone"], certo: 0 }, { p: "Caps Lock ligado:", opcoes: ["Todas as letras maiúsculas", "Fecha a janela", "Apaga a letra"], certo: 0 }],
        explicacao: "Resposta: Cursor · Todas as letras maiúsculas. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2",
        perguntas: [{ p: "A tela touchscreen é:", opcoes: ["Entrada e saída", "Só saída", "Só armazenamento"], certo: 0 }, { p: "CPU significa:", opcoes: ["Unidade Central de Processamento", "Computador Pessoal Útil", "Cabo de Ponta Única"], certo: 0 }],
        explicacao: "Resposta: Entrada e saída · Unidade Central de Processamento. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3",
        perguntas: [{ p: "O programa principal, que liga primeiro, é o:", opcoes: ["Sistema operacional", "Aplicativo", "Navegador"], certo: 0 }, { p: "A tela trincou. O problema é de:", opcoes: ["Hardware", "Software", "Atualização"], certo: 0 }],
        explicacao: "Resposta: Sistema operacional · Hardware. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4",
        perguntas: [{ p: "O final .pdf é a:", opcoes: ["Extensão", "Pasta", "Senha"], certo: 0 }, { p: "Qual é o melhor nome?", opcoes: ["trabalho-historia.docx", "sem título 7.docx", "xxx.docx"], certo: 0 }],
        explicacao: "Resposta: Extensão · trabalho-historia.docx. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m5", titulo: "Turbo · Simulado M5",
        perguntas: [{ p: "Um dado que só pode ser verdadeiro ou falso é do tipo:", opcoes: ["Lógico", "Texto", "Vídeo"], certo: 0 }, { p: "A playlist é uma:", opcoes: ["Lista", "Tabela", "Data"], certo: 0 }],
        explicacao: "Resposta: Lógico · Lista. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m6", titulo: "Turbo · Simulado M6",
        perguntas: [{ p: "Antes de postar a foto de um amigo, eu:", opcoes: ["Peço permissão", "Posto e pronto", "Posto escondido"], certo: 0 }, { p: "O print serve como:", opcoes: ["Prova", "Senha", "Atalho"], certo: 0 }],
        explicacao: "Resposta: Peço permissão · Prova. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m7", titulo: "Turbo · Simulado M7",
        perguntas: [{ p: "O teclado brasileiro, com Ç, é o:", opcoes: ["ABNT2", "USB", "CPU"], certo: 0 }],
        explicacao: "Resposta: ABNT2. Errou? Releia o 📚 Relembre da missão." },
      { tipo: "escolha", de: "m8", titulo: "Turbo · Simulado M8",
        perguntas: [{ p: "Windows + E abre o:", opcoes: ["Explorador de Arquivos", "Navegador", "Bloco de Notas"], certo: 0 }, { p: "Ctrl + A:", opcoes: ["Seleciona tudo", "Apaga tudo", "Abre o arquivo"], certo: 0 }],
        explicacao: "Resposta: Explorador de Arquivos · Seleciona tudo. Errou? Releia o 📚 Relembre da missão." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {
  const A = PORTAL.atividades["informatica-6ano-2027-1bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \d+ · /, "") }) : null; };
  A.rc = { basico: [
    { tipo: "escolha", de: "m1", titulo: "M1 · Mouse, teclado e janelas", perguntas: [{"p": "Você quer ver mais opções de um ícone. Qual ação do mouse usa?", "opcoes": ["Clique direito", "Duplo clique", "Rolar a rodinha"], "certo": 0}, {"p": "Qual tecla confirma ou pula para a linha de baixo?", "opcoes": ["Shift", "Enter", "Backspace"], "certo": 1}, {"p": "Qual botão faz a janela ocupar a tela toda?", "opcoes": ["➖ Minimizar", "❌ Fechar", "⬜ Maximizar"], "certo": 2}],
      explicacao: "Você quer ver mais opções de um ícone. Qual ação do mouse usa? → <strong>Clique direito</strong> · Qual tecla confirma ou pula para a linha de baixo? → <strong>Enter</strong> · Qual botão faz a janela ocupar a tela toda? → <strong>⬜ Maximizar</strong>" },
    pega("m1"),
    { tipo: "escolha", de: "m2", titulo: "M2 · Entrada, processamento e saída", perguntas: [{"p": "A câmera do celular é uma peça de:", "opcoes": ["Entrada", "Saída", "Armazenamento"], "certo": 0}, {"p": "A caixa de som é uma peça de:", "opcoes": ["Entrada", "Saída", "Processamento"], "certo": 1}, {"p": "O pen drive serve para:", "opcoes": ["Fazer as contas", "Mostrar a imagem", "Guardar os arquivos para depois"], "certo": 2}],
      explicacao: "A câmera do celular é uma peça de: → <strong>Entrada</strong> · A caixa de som é uma peça de: → <strong>Saída</strong> · O pen drive serve para: → <strong>Guardar os arquivos para depois</strong>" },
    pega("m2"),
    { tipo: "escolha", de: "m3", titulo: "M3 · Hardware e software", perguntas: [{"p": "O monitor é:", "opcoes": ["Hardware", "Software", "Sistema operacional"], "certo": 0}, {"p": "O jogo instalado no celular é:", "opcoes": ["Hardware", "Software", "Uma peça"], "certo": 1}, {"p": "Qual destes é um sistema operacional de celular?", "opcoes": ["Navegador", "Calculadora", "Android"], "certo": 2}],
      explicacao: "O monitor é: → <strong>Hardware</strong> · O jogo instalado no celular é: → <strong>Software</strong> · Qual destes é um sistema operacional de celular? → <strong>Android</strong>" },
    pega("m3"),
    { tipo: "escolha", de: "m4", titulo: "M4 · Pastas e arquivos", perguntas: [{"p": "A extensão .mp4 é de:", "opcoes": ["Vídeo", "Foto", "Texto"], "certo": 0}, {"p": "Documentos › Escola › Informática › trabalho.docx. O trabalho está na pasta:", "opcoes": ["Documentos", "Informática", "Downloads"], "certo": 1}, {"p": "Qual é o melhor nome para um arquivo?", "opcoes": ["sem título 3", "IMG_0001", "redacao-meio-ambiente"], "certo": 2}],
      explicacao: "A extensão .mp4 é de: → <strong>Vídeo</strong> · Documentos › Escola › Informática › trabalho.docx. O trabalho está na pasta: → <strong>Informática</strong> · Qual é o melhor nome para um arquivo? → <strong>redacao-meio-ambiente</strong>" },
    pega("m4"),
    { tipo: "escolha", de: "m5", titulo: "M5 · Tipos de dados", perguntas: [{"p": "A data 10/05/2027 é um dado do tipo:", "opcoes": ["Data", "Imagem", "Lógico"], "certo": 0}, {"p": "O CEP é um dado do tipo:", "opcoes": ["Número para contas", "Texto", "Vídeo"], "certo": 1}, {"p": "O boletim (aluno, nota, faltas) é organizado como:", "opcoes": ["Uma lista só de nomes", "Uma imagem", "Uma tabela"], "certo": 2}],
      explicacao: "A data 10/05/2027 é um dado do tipo: → <strong>Data</strong> · O CEP é um dado do tipo: → <strong>Texto</strong> · O boletim (aluno, nota, faltas) é organizado como: → <strong>Uma tabela</strong>" },
    pega("m5"),
    { tipo: "escolha", de: "m6", titulo: "M6 · Boa convivência na rede", perguntas: [{"p": "Antes de postar a foto de um amigo, eu:", "opcoes": ["Peço permissão a ele", "Posto sem perguntar", "Mando para desconhecidos"], "certo": 0}, {"p": "Viu um colega sendo ofendido no grupo. O que fazer?", "opcoes": ["Compartilhar para todos verem", "Não compartilhar, apoiar e contar a um adulto", "Rir junto"], "certo": 1}, {"p": "Qual destes é um dado pessoal?", "opcoes": ["A cor favorita", "O nome do time favorito", "O endereço de casa"], "certo": 2}],
      explicacao: "Antes de postar a foto de um amigo, eu: → <strong>Peço permissão a ele</strong> · Viu um colega sendo ofendido no grupo. O que fazer? → <strong>Não compartilhar, apoiar e contar a um adulto</strong> · Qual destes é um dado pessoal? → <strong>O endereço de casa</strong>" },
    pega("m6"),
    { tipo: "escolha", de: "m7", titulo: "M7 · Digitação sem medo", perguntas: [{"p": "Em que fileira os dedos descansam?", "opcoes": ["Na fileira base (A S D F … J K L Ç)", "Na fileira dos números", "Na barra de espaço"], "certo": 0}, {"p": "Para escrever “ã”, aperto primeiro:", "opcoes": ["A letra a", "A tecla do til ( ~ )", "A tecla Enter"], "certo": 1}, {"p": "Para várias letras maiúsculas seguidas, uso:", "opcoes": ["Backspace", "Enter", "Caps Lock"], "certo": 2}],
      explicacao: "Em que fileira os dedos descansam? → <strong>Na fileira base (A S D F … J K L Ç)</strong> · Para escrever “ã”, aperto primeiro: → <strong>A tecla do til ( ~ )</strong> · Para várias letras maiúsculas seguidas, uso: → <strong>Caps Lock</strong>" },
    pega("m7"),
    { tipo: "escolha", de: "m8", titulo: "M8 · Atalhos do teclado e do mouse", perguntas: [{"p": "Qual atalho seleciona tudo?", "opcoes": ["Ctrl + A", "Ctrl + Z", "Ctrl + V"], "certo": 0}, {"p": "Qual atalho troca de janela?", "opcoes": ["Ctrl + S", "Alt + Tab", "Ctrl + C"], "certo": 1}, {"p": "Recortar um texto (Ctrl + X):", "opcoes": ["Deixa o original e faz uma cópia", "Salva o trabalho", "Tira do lugar para colar em outro"], "certo": 2}],
      explicacao: "Qual atalho seleciona tudo? → <strong>Ctrl + A</strong> · Qual atalho troca de janela? → <strong>Alt + Tab</strong> · Recortar um texto (Ctrl + X): → <strong>Tira do lugar para colar em outro</strong>" },
    pega("m8")
  ].filter(Boolean) };
})();
