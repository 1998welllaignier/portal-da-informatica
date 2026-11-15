import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir
A = "dados/atividades/informatica-6ano-2027-1bim.js"
M2 = r'''      { tipo: "sim_pc", titulo: "🧮 No computador: entrada, processamento e saída na Calculadora",
        enunciado: "<p>Faça a conta na Calculadora do computador de treino e observe as três etapas. O <strong>Bit</strong> guia você.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Calculadora", app: "calc" }],
        passos: [
          { faca: "Abra a <b>Calculadora</b>: dê um <b>duplo clique</b> no ícone 🧮 dela, na área de trabalho.", ok: "duplo:ic:Calculadora", onde: "ic:Calculadora" },
          { faca: "<b>ENTRADA</b>: clique nos botões para digitar <b>2 + 3</b> (o 2, depois o +, depois o 3).", ok: "calc:3", onde: "calc:2", erros: { "calc:=*": "Calma! Antes do =, digite a conta toda: 2, depois +, depois 3." } },
          { faca: "<b>PROCESSAMENTO</b>: clique em <b>=</b> para o processador fazer a conta. Veja a <b>SAÍDA</b> aparecer na tela: <b>5</b>.", ok: { estado: "calc", resultado: "5" }, onde: "calc:=", erros: { "calc:=*": "O resultado não deu 5. Clique em C para limpar e digite de novo: 2 + 3 =" } },
          { faca: "Agora a conta da merenda: <b>4 × 6</b> e <b>=</b>. Clique em <b>C</b> antes, para limpar.", ok: { estado: "calc", resultado: "24" }, onde: "calc:×", dica: "O sinal de vezes é o ×. Clique: C, 4, ×, 6, =." },
          { faca: "Para terminar, feche a Calculadora no <b>X</b>.", ok: "fechar:jan:calc", onde: "jan:calc:fechar" }
        ],
        fimMsg: "Entrada (os botões), processamento (o =, feito pelo processador) e saída (o resultado na tela). Você viu as três etapas!",
        explicacao: "Entrada: você digita a conta. Processamento: o processador (CPU) calcula. Saída: o resultado aparece na tela (monitor)." }'''
M4a = r'''      { tipo: "sim_pc", titulo: "📁 No computador: crie a sua pasta e organize os arquivos",
        enunciado: "<p>No Explorador de Arquivos do computador de treino, você vai criar uma pasta, dar nome, guardar arquivos nela e usar a Lixeira. O <strong>Bit</strong> confere cada passo.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }], abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "redacao", ext: "docx" }, { nome: "desenho-da-escola", ext: "png" }, { nome: "rascunho", ext: "txt" }, { nome: "pesquisa-animais", ext: "pdf" }] },
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
        explicacao: "Botão direito › Novo › Pasta cria uma pasta. Arrastar um arquivo até a pasta guarda o arquivo nela. Excluir manda para a Lixeira, de onde ainda dá para Restaurar." }'''
M4b = r'''      { tipo: "sim_pc", titulo: "🔎 No computador: extensões, renomear e pesquisar",
        enunciado: "<p>Mais um treino no Explorador de Arquivos. Siga o <strong>Bit</strong>.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "IMG_20270310_0932", ext: "jpg" }, { nome: "musica-da-festa", ext: "mp3" }, { nome: "trabalho", ext: "docx" }, { nome: "video-da-turma", ext: "mp4" }], "Documentos": [{ nome: "lista-de-compras", ext: "txt" }] },
        passos: [
          { faca: "Os nomes estão sem o final. Ligue as <b>extensões</b>: clique no botão <b>☐ Extensões</b>, lá em cima, à direita.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Agora aparece o tipo depois do ponto. Qual é a foto? Clique com o <b>botão direito</b> no arquivo <b>.jpg</b> e escolha <b>Renomear</b>.", ok: "direito:arq:IMG_20270310_0932.jpg", onde: "arq:IMG_20270310_0932.jpg", erros: { "direito:arq:*": "Esse não é a foto. Procure o arquivo que termina em .jpg." } },
          { faca: "Escolha <b>Renomear</b> no menu, apague o nome e digite <b>passeio-da-escola</b>. Aperte <b>Enter</b>.", ok: "/^renomear:arq:img_20270310_0932>passeio-da-escola$/", dica: "Se o menu fechou: botão direito no arquivo .jpg › Renomear. Digite o nome novo e aperte Enter." },
          { faca: "Onde está a <b>lista-de-compras</b>? Use a <b>pesquisa</b> 🔍: clique na caixa <b>Pesquisar</b>, digite <b>lista</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*lista/", onde: "exp:busca" },
          { faca: "Achou! Abra a <b>lista-de-compras</b> com um <b>duplo clique</b>.", ok: "/^abrir:arq:lista-de-compras/", onde: "arq:lista-de-compras.txt" }
        ],
        fimMsg: "Você ligou as extensões, renomeou a foto com um nome bom e achou um arquivo pela pesquisa!",
        explicacao: "A extensão (o final depois do ponto) mostra o tipo: .jpg foto, .mp3 música, .docx texto do Word, .mp4 vídeo. Renomear dá um nome que ajuda a achar. A pesquisa 🔍 procura em todas as pastas." }'''
M7 = r'''      { tipo: "sim_pc", titulo: "⌨️ No computador: digite com acento no Bloco de Notas",
        enunciado: "<p>Digite de verdade no Bloco de Notas. O <strong>Bit</strong> confere letra por letra, com acento e maiúscula.</p>",
        abertas: ["notas"],
        passos: [
          { faca: "Digite: <b>A escola é nossa.</b> (O <b>é</b>: aperte a tecla do acento agudo <b>´</b>, solte e aperte <b>e</b>.)", ok: { estado: "notas", texto: "A escola é nossa." }, onde: "notas:texto", dica: "O acento agudo ´ fica do lado direito do P, no teclado brasileiro. Aperte o acento, solte, depois a letra." },
          { faca: "Aperte <b>Enter</b> e escreva na linha de baixo: <b>Você está aqui?</b> (o <b>ê</b>: segure <b>Shift</b> e aperte a tecla <b>~</b>, solte e aperte <b>e</b>; o <b>?</b>: Shift + a tecla do <b>/</b>.)", ok: { estado: "notas", texto: "A escola é nossa.\nVocê está aqui?" }, dica: "Você: V maiúsculo (Shift + V), o, c, ê. O circunflexo ^ é Shift + a tecla do ~." },
          { faca: "Mais uma linha (Enter): <b>Ação, coração e pão.</b> (o <b>ç</b> tem tecla própria, ao lado do L; o <b>ã</b>: tecla <b>~</b>, solte, <b>a</b>.)", ok: { estado: "notas", texto: "A escola é nossa.\nVocê está aqui?\nAção, coração e pão." } }
        ],
        fimMsg: "Agudo, circunflexo, til e cedilha: tudo certinho no teclado!",
        explicacao: "No teclado brasileiro (ABNT2): acento agudo ´ e til ~ têm teclas próprias; o circunflexo ^ é Shift + ~; a crase ` é Shift + ´; o Ç tem tecla própria. Primeiro o acento, depois a letra." }'''
M8 = r'''      { tipo: "sim_pc", titulo: "⚡ No computador: copiar, colar, recortar e desfazer com atalhos",
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
        explicacao: "Ctrl + A: selecionar tudo · Ctrl + C: copiar · Ctrl + X: recortar · Ctrl + V: colar · Ctrl + Z: desfazer · Ctrl + S: salvar." }'''
for m, sec, b, mk in [("m2", "pratica", M2, "entrada, processamento e saída na Calculadora"), ("m4", "pratica", M4a, "crie a sua pasta e organize"), ("m4", "pratica", M4b, "extensões, renomear e pesquisar"), ("m7", "pratica", M7, "digite com acento no Bloco de Notas"), ("m8", "pratica", M8, "copiar, colar, recortar e desfazer com atalhos")]:
    print(m, inserir(A, m, sec, b, mk))
