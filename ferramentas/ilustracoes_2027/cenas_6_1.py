"""🎬 Cenas de abertura — 6º ano — 1º bimestre de 2027 (piloto das cenas feitas por IA, 19/11/2026).
Imagens em img/cenas/informatica-6ano-2027-1bim/m1..m8.webp (geradas no ChatGPT com a ficha da turma).
Cada cena mostra a SITUAÇÃO-PROBLEMA da missão; a camada que ensina (por código) faz a pergunta e aponta
o que importa, sem entregar a resposta das atividades."""
from cenas import cenas, etiqueta, seta, contorno

AID = "informatica-6ano-2027-1bim"

L = []

# Missão 1 — Primeiros passos: mouse, teclado e janelas
L.append(("m1",
    "A Bia no primeiro dia na sala de informática, com a mão no mouse e cara de dúvida; o professor aponta a janela aberta na tela, que tem os botões minimizar, maximizar e fechar.",
    etiqueta(430, 36, 600, "roxo", "Por onde eu começo?", ["Mouse, teclado e janelas:", "hoje você domina os três."])
    + contorno(1048, 520, 140, 52, "azul", 14)
    + etiqueta(1060, 36, 450, "azul", "Os 3 botões", ["de toda janela"])
    + seta(1240, 158, 1150, 512, "azul")
    + contorno(642, 880, 140, 88, "amarelo", 18)
    + etiqueta(1120, 880, 400, "amarelo", "O mouse")
    + seta(1118, 920, 800, 926, "amarelo"),
    "Primeiro dia: o professor mostra à Bia a janela, os botões e o mouse."))

# Missão 2 — Entrada, processamento e saída (a cena do teste aprovado)
L.append(("m2",
    "A Bia digita no teclado. Em azul, a entrada (teclado e mouse); em amarelo, o processamento (o gabinete); em verde, a saída (monitor, caixa de som e impressora).",
    contorno(568, 608, 258, 98, "azul") + contorno(818, 624, 116, 84, "azul")
    + contorno(1003, 352, 226, 330, "amarelo")
    + contorno(553, 314, 402, 298, "verde") + contorno(922, 512, 84, 152, "verde") + contorno(1168, 478, 360, 262, "verde")
    + etiqueta(470, 30, 500, "verde", "SAÍDA", ["mostra o resultado:", "tela, som e papel"], n=3)
    + seta(720, 196, 720, 304, "verde")
    + etiqueta(990, 30, 530, "amarelo", "PROCESSAMENTO", ["o processador, dentro", "do gabinete, faz as contas"], n=2)
    + seta(1120, 196, 1116, 340, "amarelo")
    + etiqueta(560, 870, 640, "azul", "ENTRADA", ["você manda: teclado e mouse"], n=1)
    + seta(720, 866, 700, 716, "azul"),
    "Entrada → processamento → saída: o caminho de tudo o que você faz no computador."))

# Missão 3 — Hardware e software
L.append(("m3",
    "O Davi segura um pen drive com cara de dúvida; o Kauã aponta um jogo na tela do computador. O pen drive é hardware (dá para tocar); o jogo é software (programa).",
    contorno(368, 392, 76, 104, "amarelo", 16)
    + contorno(852, 410, 428, 300, "azul")
    + etiqueta(420, 36, 470, "amarelo", "Dá para tocar?", ["o pen drive, o teclado…"])
    + seta(560, 158, 420, 384, "amarelo")
    + etiqueta(960, 36, 540, "azul", "E o jogo na tela?", ["dá para tocar nele?"])
    + seta(1160, 158, 1080, 400, "azul"),
    "Davi e Kauã: o que é peça e o que é programa no computador?"))

# Missão 4 — Pastas e arquivos
L.append(("m4",
    "A Lara, desesperada, com as mãos na cabeça diante de uma tela lotada de arquivos bagunçados; ao lado, uma pasta amarela bem organizada.",
    contorno(640, 360, 476, 330, "vermelho")
    + contorno(1092, 728, 392, 196, "verde")
    + etiqueta(620, 40, 760, "vermelho", "Cadê o meu trabalho?", ["Tudo jogado na área de trabalho:", "ninguém acha nada!"])
    + seta(860, 206, 870, 352, "vermelho")
    + etiqueta(1010, 936, 510, "verde", "Pasta: tudo no lugar"),
    "A Lara salvou o trabalho, mas não acha mais: é hora de aprender a usar pastas."))

# Missão 5 — Tipos de dados
L.append(("m5",
    "A Yara preenche uma ficha de cadastro na tela e pensa numa data, num telefone e num endereço; o Kauã segura um caderno ao lado.",
    contorno(836, 432, 414, 274, "azul")
    + etiqueta(910, 36, 600, "azul", "Cada campo, um tipo", ["data, telefone, endereço…", "o computador quer saber!"])
    + seta(1140, 202, 1060, 424, "azul"),
    "A Yara preenche um cadastro: cada informação é um tipo de dado diferente."))

# Missão 6 — Boa convivência na rede
L.append(("m6",
    "No pátio da escola, o Davi olha triste para uma mensagem ofensiva no celular; a Bia coloca a mão no ombro dele para apoiar e a Lara chega preocupada.",
    contorno(1062, 606, 222, 290, "vermelho")
    + etiqueta(620, 40, 680, "roxo", "E agora, o que fazer?", ["O Davi recebeu uma ofensa", "no grupo. A Bia quer ajudar."])
    + seta(1180, 206, 1170, 596, "vermelho"),
    "Uma ofensa no grupo machuca de verdade. Como agir com respeito na rede?"))

# Missão 7 — Digitação sem medo
L.append(("m7",
    "Dois alunos digitando: o Kauã cata as letras com um dedo só, suando; a Bia digita com as duas mãos posicionadas, tranquila, olhando para a tela.",
    contorno(236, 830, 430, 136, "vermelho")
    + contorno(866, 800, 486, 150, "verde")
    + etiqueta(150, 40, 520, "vermelho", "Um dedo só", ["lento e cansativo"])
    + etiqueta(890, 40, 600, "verde", "As duas mãos", ["cada dedo na sua tecla"]),
    "Kauã cata milho, Bia digita sem medo: qual dos dois termina primeiro?"))

# Missão 8 — Atalhos do teclado e do mouse
L.append(("m8",
    "A Lara copia à mão, cansada, um texto enorme da tela para o caderno; o Kauã mostra no teclado duas teclas apertadas juntas: um atalho.",
    contorno(0, 780, 760, 244, "vermelho")
    + contorno(714, 730, 524, 250, "verde")
    + etiqueta(200, 40, 600, "vermelho", "Copiar à mão?", ["demora e cansa…"])
    + etiqueta(860, 40, 650, "verde", "Duas teclas juntas", ["e o texto se copia sozinho!"])
    + seta(1180, 158, 1060, 720, "verde", curva=60),
    "A Lara copia tudo à mão; o Kauã mostra um atalho que faz isso num instante."))

F = cenas(AID, L)

# 📷 Foto real (20/11/2026): o gabinete aberto, depois da tabela de hardware e software
from fotos_reais import gabinete_aberto
F.append(gabinete_aberto("m3", "Parte O que é Exemplos"))
