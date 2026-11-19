"""Ilustrações — 6º ano — 1º bimestre de 2027 (informatica-6ano-2027-1bim)."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def pasta(x, y, nome, cor="amarelo", w=86):
    c = COR[cor]
    return (f'<path d="M{x} {y+8} h{w*0.38} l8 -8 h{w*0.62-8} v{w*0.62} h{-w} z" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5" stroke-linejoin="round"/>'
            + t(x + w / 2, y + w * 0.45, nome, 13, "tinta", 700))


def arquivo(x, y, ext, cor="azul", nome=None, w=54):
    c = COR[cor]
    return (f'<path d="M{x} {y} h{w-14} l14 14 v{w*1.05} h{-w} z" fill="#fff" stroke="{c}" stroke-width="2.5" stroke-linejoin="round"/>'
            f'<path d="M{x+w-14} {y} v14 h14" fill="none" stroke="{c}" stroke-width="2"/>'
            + caixa(x - 6, y + w * 0.55, w + 12, 20, cor=cor, fundo=cor, rx=5, larg=0)
            + t(x + w / 2, y + w * 0.55 + 15, ext, 12, "#fff", 800)
            + (t(x + w / 2, y + w * 1.05 + 30, nome, 12, "tinta", 600) if nome else ""))


# ======================= MISSÃO 1 =======================
def mouse_mini(x, y, lado=None):
    # lado: 'esq' destaca o botão esquerdo, 'dir' o direito, 'roda' a rodinha
    c = COR["tinta"]
    esq = COR["azul"] if lado == "esq" else "#fff"
    dir_ = COR["azul"] if lado == "dir" else "#fff"
    roda = COR["azul"] if lado == "roda" else COR["linha"]
    return (f'<path d="M{x} {y+18} a22 22 0 0 1 22 -22 v26 h-22z" fill="{esq}" stroke="{c}" stroke-width="2"/>'
            f'<path d="M{x+22} {y-4} a22 22 0 0 1 22 22 h-22z" fill="{dir_}" stroke="{c}" stroke-width="2"/>'
            f'<path d="M{x} {y+18} h44 v18 a22 22 0 0 1 -44 0z" fill="#fff" stroke="{c}" stroke-width="2"/>'
            f'<rect x="{x+18}" y="{y+2}" width="8" height="14" rx="4" fill="{roda}" stroke="{c}" stroke-width="1.5"/>')


corpo = []
paineis = [
    ("Clique", "1 vez no esquerdo", "esq", "escolhe"),
    ("Duplo clique", "2 vezes rapidinho", "esq", "abre"),
    ("Clique direito", "1 vez no direito", "dir", "mais opções"),
    ("Arrastar", "segura e move", "esq", "muda de lugar"),
    ("Rolar", "gira a rodinha", "roda", "sobe e desce"),
]
for i, (nome, como, lado, faz) in enumerate(paineis):
    x = 12 + i * 146
    corpo.append(caixa(x, 10, 136, 250, cor="azul", fundo="azul_c", rx=14, larg=2))
    corpo.append(t(x + 68, 36, nome, 16, "azul", 800))
    corpo.append(mouse_mini(x + 46, 60, lado))
    if nome == "Duplo clique":
        corpo.append(t(x + 104, 62, "2×", 18, "vermelho", 800))
    corpo.append(t(x + 68, 128, como, 12, "suave", 600))
    corpo.append(seta(x + 68, 136, x + 68, 158, "tinta", 2.5))
    # resultado desenhado
    if nome == "Clique":
        corpo.append(caixa(x + 38, 166, 60, 52, cor="azul", fundo="azul_c", rx=8, larg=3) + emoji(x + 68, 202, "📁", 28))
    elif nome == "Duplo clique":
        corpo.append(emoji(x + 68, 206, "📂", 40))
    elif nome == "Clique direito":
        corpo.append(caixa(x + 26, 162, 84, 62, cor="tinta", fundo="papel", rx=6, larg=1.5)
                     + linhas(x + 68, 180, ["Novo", "Renomear", "Excluir"], 11, "tinta", 600, passo=17))
    elif nome == "Arrastar":
        corpo.append(emoji(x + 34, 204, "📄", 26) + seta(x + 52, 196, x + 84, 196, "azul", 2.5, tracejada=True) + emoji(x + 104, 206, "📁", 30))
    else:
        corpo.append(caixa(x + 40, 162, 56, 64, cor="tinta", rx=4, larg=1.5)
                     + "".join(f'<path d="M{x+48} {170+k*12} h40" stroke="{COR["linha"]}" stroke-width="5"/>' for k in range(5))
                     + seta(x + 104, 176, x + 104, 212, "azul", 2.5) + seta(x + 104, 212, x + 104, 176, "azul", 2.5))
    corpo.append(etiqueta(x + 68, 250, faz, "verde", 13))
fig("m1", "Ação do mouse Como fazer Para que serve", "As cinco ações do mouse: clique escolhe, duplo clique abre, clique direito mostra mais opções, arrastar muda de lugar e rolar sobe e desce a página.",
    744, 270, "".join(corpo), "Cada jeito de apertar o mouse faz uma coisa diferente.")

# teclado com teclas destacadas (layout brasileiro ABNT2: Backspace no canto de cima à direita, acima do Enter)
corpo = []
K, G, X0, Y0 = 40, 4, 34, 70          # tamanho da tecla, espaço, início
def lin(y, x, teclas):
    s_ = ""
    for rot, w, cor in teclas:
        s_ += tecla(x, y, rot, w, 40, destaque=cor, size=13 if len(rot) < 3 else 11)
        x += w + G
    return s_
corpo.append(caixa(20, 56, 720, 268, cor="tinta", fundo="fundo", rx=16, larg=2))
corpo.append(lin(Y0, X0, [(k, K, None) for k in "'1234567890-="] + [("⟵", 102, "vermelho")]))
corpo.append(lin(Y0 + 44, X0, [("Tab", 62, None)] + [(k, K, None) for k in "QWERTYUIOP´["]))
corpo.append(lin(Y0 + 88, X0, [("Caps", 76, "roxo")] + [(k, K, None) for k in "ASDFGHJKLÇ~]"]))
corpo.append(lin(Y0 + 132, X0, [("⇧ Shift", 56, "amarelo"), ("\\", K, None)] + [(k, K, None) for k in "ZXCVBNM,.;/"] + [("⇧ Shift", 72, "amarelo")]))
# Enter em L (duas fileiras), no lado direito, logo abaixo do Backspace
ex = X0 + 62 + G + 12 * (K + G)
corpo.append(f'<path d="M{ex} {Y0+44} h{720+20-ex-14} v84 h-{720+20-ex-14-16} v-40 h-16 z" fill="{COR["verde_c"]}" stroke="{COR["verde"]}" stroke-width="2.5" stroke-linejoin="round"/>')
corpo.append(t(ex + (720 + 20 - ex - 14) / 2, Y0 + 70, "Enter ↵", 13, "verde", 800))
corpo.append(tecla(210, Y0 + 176, "", 300, 36, destaque="azul"))
corpo.append(tecla(612, Y0 + 176, "⬆", 36, 18, destaque="ciano", size=11))
corpo.append(tecla(572, Y0 + 196, "⬅", 36, 18, destaque="ciano", size=11) + tecla(612, Y0 + 196, "⬇", 36, 18, destaque="ciano", size=11) + tecla(652, Y0 + 196, "➡", 36, 18, destaque="ciano", size=11))
bx = X0 + 13 * (K + G)
corpo.append(etiqueta(560, 30, "⟵ Backspace: apaga a letra antes do cursor", "vermelho", 12))
corpo.append(seta(640, 38, bx + 51, 68, "vermelho", 2.5))
corpo.append(etiqueta(150, 352, "Caps Lock: liga/desliga AS MAIÚSCULAS", "roxo", 12))
corpo.append(seta(70, 338, 66, 200, "roxo", 2.5))
corpo.append(etiqueta(150, 388, "⇧ Shift: segure + letra = maiúscula", "amarelo", 12))
corpo.append(seta(26, 384, 40, 246, "amarelo", 2.5))
corpo.append(etiqueta(440, 352, "Barra de espaço: separa as palavras", "azul", 12))
corpo.append(seta(400, 338, 380, 284, "azul", 2.5))
corpo.append(etiqueta(640, 388, "Enter: confirma / pula de linha", "verde", 12))
corpo.append(seta(700, 374, 712, 196, "verde", 2.5))
corpo.append(etiqueta(560, 310, "Setas: movem o cursor", "ciano", 12) + seta(620, 296, 626, 288, "ciano", 2))
fig("m1", "Tecla O que faz Enter Confirma", "Teclado brasileiro com as teclas especiais coloridas e etiquetas: Backspace (no canto de cima, à direita, acima do Enter) apaga, Enter confirma, Caps Lock liga as maiúsculas, Shift faz maiúscula segurando, barra de espaço separa palavras e as setas movem o cursor.",
    760, 404, "".join(corpo), "Teclado brasileiro (ABNT2): cada cor é uma tecla especial; a seta mostra onde ela fica.")

# janela e barra de tarefas
corpo = []
corpo.append(caixa(30, 20, 400, 230, cor="tinta", fundo="papel", rx=10, larg=2.5))
corpo.append(caixa(30, 20, 400, 40, cor="tinta", fundo="azul_c", rx=10, larg=2.5))
corpo.append(t(46, 46, "📝 Meu trabalho", 14, "tinta", 700, "start"))
for i, (s, cor) in enumerate([("➖", "amarelo"), ("⬜", "verde"), ("✖", "vermelho")]):
    corpo.append(tecla(300 + i * 42, 26, s, 36, 28, destaque=cor, size=14))
corpo.append(linhas(70, 100, ["Era uma vez um computador…", "", ""], 14, "suave", 500, "start"))
corpo.append(f'<rect x="268" y="88" width="2" height="18" fill="{COR["tinta"]}"/>'.replace('x="268"', 'x="262"'))
corpo.append(etiqueta(590, 60, "➖ Minimizar: esconde (continua aberto)", "amarelo", 12))
corpo.append(seta(470, 64, 330, 52, "amarelo", 2.5, curva=10))
corpo.append(etiqueta(590, 110, "⬜ Maximizar: ocupa a tela toda", "verde", 12))
corpo.append(seta(484, 112, 362, 54, "verde", 2.5, curva=10))
corpo.append(etiqueta(590, 160, "✖ Fechar: fecha o programa", "vermelho", 12))
corpo.append(seta(500, 160, 404, 56, "vermelho", 2.5, curva=10))
# barra de tarefas
corpo.append(caixa(20, 280, 700, 46, cor="tinta", fundo="#1e293b", rx=8, larg=0))
corpo.append(caixa(30, 286, 70, 34, cor="azul", fundo="azul", rx=6, larg=0) + t(65, 308, "Iniciar", 13, "#fff", 700))
corpo.append(caixa(120, 286, 44, 34, cor="amarelo", fundo="amarelo_c", rx=6, larg=3) + emoji(142, 311, "📝", 20))
corpo.append(emoji(190, 311, "🌐", 20) + emoji(230, 311, "📁", 20))
corpo.append(t(680, 309, "10:30", 13, "#fff", 700))
corpo.append(seta(318, 64, 150, 280, "amarelo", 3, tracejada=True, curva=60))
corpo.append(etiqueta(330, 372, "Minimizou? Clique no ícone na barra de tarefas para voltar", "amarelo", 12))
corpo.append(seta(240, 360, 150, 326, "amarelo", 2.5))
fig("m1", "Botão Nome O que faz", "Janela de programa com os botões minimizar, maximizar e fechar explicados; a janela minimizada vai para a barra de tarefas e volta com um clique no ícone.",
    744, 390, "".join(corpo), "A janela minimizada não sumiu: ela está na barra de tarefas.")

# ======================= MISSÃO 2 =======================
corpo = []
etapas = [("ENTRADA", "azul", "⌨️", "digito 2 + 3", 20), ("PROCESSAMENTO", "amarelo", "🧠", "a CPU calcula", 270), ("SAÍDA", "verde", "🖥️", "aparece 5", 520)]
for nome, cor, ch, ex, x in etapas:
    corpo.append(caixa(x, 20, 200, 150, cor=cor, fundo=cor + "_c", rx=16, larg=3))
    corpo.append(t(x + 100, 48, nome, 17, cor, 800))
    corpo.append(emoji(x + 100, 104, ch, 46))
    corpo.append(t(x + 100, 150, ex, 15, "tinta", 700))
corpo.append(seta(224, 95, 266, 95, "tinta", 4) + seta(474, 95, 516, 95, "tinta", 4))
corpo.append(caixa(220, 210, 300, 90, cor="roxo", fundo="roxo_c", rx=16, larg=3))
corpo.append(t(370, 238, "ARMAZENAMENTO", 17, "roxo", 800) + t(370, 266, "💾 HD · SSD · pen drive", 15, "tinta", 700) + t(370, 288, "guarda para depois", 13, "suave", 600))
corpo.append(seta(370, 172, 370, 206, "roxo", 3) + seta(390, 206, 390, 172, "roxo", 3))
corpo.append(t(470, 192, "salvar / abrir", 13, "roxo", 700))
fig("m2", "Etapa O que faz Exemplos de peças", "As etapas do computador com a calculadora: entrada (digito 2 + 3, em azul), processamento (a CPU calcula, em amarelo), saída (aparece 5, em verde) e armazenamento (em roxo, guarda para depois).",
    744, 310, "".join(corpo), "Azul = entrada · amarelo = processamento · verde = saída · roxo = armazenamento.")

corpo = []
corpo.append(caixa(20, 20, 300, 200, cor="amarelo", fundo="amarelo_c", rx=16, larg=3))
corpo.append(t(170, 50, "🧠 MEMÓRIA RAM", 17, "amarelo", 800))
corpo.append(linhas(170, 80, ["guarda o que está aberto AGORA"], 13, "tinta", 700))
corpo.append(caixa(70, 96, 200, 60, cor="tinta", rx=8, larg=1.5) + t(170, 132, "📝 trabalho não salvo", 14, "tinta", 700))
corpo.append(t(170, 200, "⚡ faltou luz → apaga tudo!", 14, "vermelho", 800))
corpo.append(caixa(424, 20, 300, 200, cor="roxo", fundo="roxo_c", rx=16, larg=3))
corpo.append(t(574, 50, "💾 HD / SSD", 17, "roxo", 800))
corpo.append(linhas(574, 80, ["guarda para DEPOIS"], 13, "tinta", 700))
corpo.append(caixa(474, 96, 200, 60, cor="tinta", rx=8, larg=1.5) + t(574, 132, "📄 trabalho.docx", 14, "tinta", 700))
corpo.append(t(574, 200, "⚡ faltou luz → continua lá ✔", 14, "verde", 800))
corpo.append(seta(276, 126, 468, 126, "verde", 5))
corpo.append(etiqueta(372, 112, "Salvar (Ctrl + S)", "verde", 13))
fig("m2", "A memória RAM é diferente do armazenamento", "Comparação: a memória RAM guarda o trabalho aberto e apaga tudo quando falta luz; o HD ou SSD guarda o arquivo salvo, que continua lá. A seta Salvar (Ctrl + S) leva o trabalho da RAM para o HD.",
    744, 240, "".join(corpo), "Salvar é levar o trabalho da RAM (que apaga) para o HD (que guarda).")

# ======================= MISSÃO 3 =======================
corpo = []
corpo.append(caixa(20, 20, 340, 230, cor="amarelo", fundo="amarelo_c", rx=16, larg=3))
corpo.append(t(190, 52, "🔧 HARDWARE", 19, "amarelo", 800))
corpo.append(t(190, 76, "dá para TOCAR", 14, "tinta", 700))
corpo.append(emoji(80, 140, "⌨️", 40) + emoji(150, 140, "🖱️", 40) + emoji(220, 140, "🖥️", 40) + emoji(290, 140, "💾", 40))
corpo.append(emoji(190, 214, "✋", 40))
corpo.append(seta(170, 188, 120, 156, "amarelo", 2.5) + seta(210, 188, 260, 156, "amarelo", 2.5))
corpo.append(caixa(384, 20, 340, 230, cor="azul", fundo="azul_c", rx=16, larg=3))
corpo.append(t(554, 52, "💿 SOFTWARE", 19, "azul", 800))
corpo.append(t(554, 76, "são PROGRAMAS: aparecem na tela", 14, "tinta", 700))
corpo.append(caixa(434, 92, 240, 140, cor="tinta", fundo="papel", rx=10, larg=2.5))
for i, ch in enumerate(["🌐", "🧮", "📝", "🎮", "🎵", "💬"]):
    corpo.append(caixa(454 + (i % 3) * 72, 104 + (i // 3) * 62, 52, 52, cor="azul", fundo="azul_c", rx=12, larg=1.5) + emoji(480 + (i % 3) * 72, 140 + (i // 3) * 62, ch, 28))
corpo.append(seta(362, 134, 432, 134, "tinta", 3) + seta(432, 150, 362, 150, "tinta", 3))
corpo.append(t(372, 274, "⇄ um precisa do outro: o software diz o que fazer e o hardware faz", 13, "tinta", 700))
fig("m3", "Parte O que é Exemplos Hardware", "Hardware, em amarelo, são as peças que dá para tocar (teclado, mouse, monitor, pen drive); software, em azul, são os programas que aparecem na tela (navegador, calculadora, editor de texto, jogo). Setas mostram que um precisa do outro.",
    744, 288, "".join(corpo), "Hardware você toca; software aparece na tela.")

corpo = []
camadas = [("📱 APLICATIVOS", "azul", "navegador · calculadora · jogo · editor de texto", 20),
           ("⚙️ SISTEMA OPERACIONAL", "verde", "Windows · Linux · Android · iOS", 110),
           ("🔧 HARDWARE", "amarelo", "processador · memória · tela · teclado", 200)]
for nome, cor, ex, y in camadas:
    corpo.append(caixa(200, y, 400, 74, cor=cor, fundo=cor + "_c", rx=14, larg=3))
    corpo.append(t(400, y + 32, nome, 18, cor, 800) + t(400, y + 58, ex, 13, "tinta", 600))
corpo.append(seta(626, 228, 626, 140, "verde", 3) + t(676, 186, "comanda", 13, "verde", 800))
corpo.append(boneco(70, 76, "rosa", 0.9, braco="aponta"))
corpo.append(t(70, 140, "você usa", 13, "rosa", 800))
corpo.append(seta(176, 70, 176, 140, "azul", 3) + t(110, 196, "o aplicativo", 13, "azul", 800) + t(110, 212, "pede ao sistema", 13, "azul", 800))
fig("m3", "Tipo de software Para que serve Exemplos", "Três camadas: embaixo o hardware (amarelo), no meio o sistema operacional (verde), que comanda as peças, e em cima os aplicativos (azul), que você usa e que pedem as coisas ao sistema.",
    744, 290, "".join(corpo), "Você usa os aplicativos; o sistema operacional comanda o hardware.")

# ======================= MISSÃO 4 =======================
corpo = []
corpo.append(pasta(20, 40, "Documentos", w=120))
corpo.append(seta(146, 80, 196, 80, "tinta", 3))
corpo.append(pasta(200, 40, "Escola", w=120))
corpo.append(seta(326, 80, 376, 80, "tinta", 3))
corpo.append(pasta(380, 40, "Informática", w=120))
corpo.append(seta(506, 80, 566, 80, "tinta", 3))
corpo.append(arquivo(590, 30, ".docx", "azul", "trabalho.docx", 64))
corpo.append(t(171, 70, "tem dentro", 11, "suave", 700) + t(351, 70, "tem dentro", 11, "suave", 700) + t(536, 70, "tem dentro", 11, "suave", 700))
corpo.append(t(372, 150, "Escola fica dentro de Documentos; Informática fica dentro de Escola; o arquivo fica dentro de Informática.", 12, "tinta", 600))
corpo.append(caixa(20, 180, 704, 50, cor="roxo", fundo="roxo_c", rx=12, larg=2.5))
corpo.append(t(372, 212, "Caminho:  Documentos › Escola › Informática › trabalho.docx", 16, "roxo", 800, fonte=MONO))
corpo.append(t(372, 254, "como um endereço: rua › casa › quarto › gaveta", 13, "suave", 600))
fig("m4", "O lugar onde o arquivo está guardado é o caminho", "Pastas uma dentro da outra (Documentos, Escola, Informática) até o arquivo trabalho.docx; embaixo, o caminho escrito: Documentos › Escola › Informática › trabalho.docx.",
    744, 266, "".join(corpo), "O caminho é o endereço do arquivo: de fora para dentro.")

corpo = []
tipos = [(".txt", "azul", "📝", "Bloco de Notas"), (".docx", "azul", "📄", "Editor de texto"), (".jpg", "amarelo", "🖼️", "Fotos"),
         (".mp3", "roxo", "🎵", "Música"), (".mp4", "vermelho", "🎬", "Vídeo"), (".pdf", "rosa", "📕", "Leitor de PDF")]
for i, (ext, cor, ch, app) in enumerate(tipos):
    x = 26 + i * 120
    corpo.append(arquivo(x + 22, 20, ext, cor, None, 56))
    corpo.append(seta(x + 50, 100, x + 50, 132, cor, 2.5))
    corpo.append(emoji(x + 50, 170, ch, 34))
    corpo.append(t(x + 50, 200, app, 12, "tinta", 700))
corpo.append(t(372, 236, "A extensão (o final depois do ponto) diz o tipo e qual programa abre o arquivo.", 13, "suave", 600))
fig("m4", "Extensão Tipo de arquivo Abre com", "Seis arquivos coloridos pela extensão: .txt e .docx (texto, azul), .jpg (imagem, amarelo), .mp3 (música, roxo), .mp4 (vídeo, vermelho) e .pdf (rosa), cada um com uma seta para o programa que abre.",
    744, 250, "".join(corpo), "Mesma cor = mesmo tipo de arquivo.")

corpo = []
passos = [("1", "Arquivo → Salvar como", "azul"), ("2", "Escolher ONDE (a pasta)", "roxo"), ("3", "Dar um NOME bom", "verde"), ("4", "Clicar em Salvar", "amarelo")]
for i, (n, s, cor) in enumerate(passos):
    x = 14 + i * 182
    corpo.append(caixa(x, 20, 170, 70, cor=cor, fundo=cor + "_c", rx=14, larg=2.5))
    corpo.append(circulo(x + 24, 55, 15, cor, cor, 0) + t(x + 24, 61, n, 16, "#fff", 800))
    corpo.append(linhas(x + 102, 52, s.split(" ", 2)[:1] + [" ".join(s.split(" ")[1:])], 13, "tinta", 700))
    if i < 3:
        corpo.append(seta(x + 172, 55, x + 192, 55, "tinta", 2.5))
corpo.append(caixa(150, 116, 200, 46, cor="vermelho", fundo="vermelho_c", rx=10, larg=2) + t(250, 145, "✖ sem título 3.docx", 15, "vermelho", 800))
corpo.append(caixa(400, 116, 250, 46, cor="verde", fundo="verde_c", rx=10, larg=2) + t(525, 145, "✔ redacao-meio-ambiente.docx", 14, "verde", 800))
corpo.append(t(372, 186, "Nome bom diz o que tem dentro: fica fácil de achar depois.", 13, "suave", 600))
fig("m4", "Para salvar um trabalho", "Quatro passos para salvar: Arquivo, Salvar como; escolher a pasta; dar um nome bom; clicar em Salvar. Embaixo, um nome ruim (sem título 3, em vermelho) e um nome bom (redacao-meio-ambiente, em verde).",
    744, 200, "".join(corpo))

# ======================= MISSÃO 5 =======================
corpo = []
corpo.append(caixa(150, 14, 444, 300, cor="tinta", fundo="papel", rx=16, larg=2.5))
corpo.append(t(372, 44, "🛒 Cadastro da loja", 17, "tinta", 800))
campos = [("Nome:", "Maria Clara", "azul", "🔤 TEXTO"), ("Idade:", "12", "verde", "🔢 NÚMERO"), ("Nascimento:", "10/05/2014", "roxo", "📅 DATA"),
          ("Aceita ofertas?", "☑ sim", "amarelo", "✅ LÓGICO"), ("Foto:", "🙂", "rosa", "🖼️ IMAGEM")]
for i, (rot, val, cor, tipo) in enumerate(campos):
    y = 64 + i * 48
    corpo.append(t(176, y + 24, rot, 14, "tinta", 700, "start"))
    corpo.append(caixa(330, y, 160, 36, cor=cor, fundo=cor + "_c", rx=8, larg=2.5) + t(410, y + 24, val, 14, "tinta", 700))
    corpo.append(seta(494, y + 18, 600, y + 18, cor, 2.5))
    corpo.append(t(612, y + 24, tipo, 13, cor, 800, "start"))
fig("m5", "Tipo de dado Exemplo O computador consegue", "Ficha de cadastro com cada campo colorido pelo tipo de dado: nome (texto, azul), idade (número, verde), nascimento (data, roxo), aceita ofertas (lógico, amarelo) e foto (imagem, rosa).",
    760, 330, "".join(corpo), "Cada campo guarda um tipo de dado diferente.")

corpo = []
corpo.append(caixa(20, 20, 340, 150, cor="verde", fundo="verde_c", rx=16, larg=3))
corpo.append(t(190, 50, "🔢 NÚMERO: faz conta", 16, "verde", 800))
corpo.append(t(190, 100, "idade 12 + 3 anos = 15", 19, "tinta", 800, fonte=MONO))
corpo.append(t(190, 140, "✔ faz sentido", 16, "verde", 800))
corpo.append(caixa(384, 20, 340, 150, cor="vermelho", fundo="vermelho_c", rx=16, larg=3))
corpo.append(t(554, 50, "🔤 TEXTO: não faz conta", 16, "vermelho", 800))
corpo.append(t(554, 92, "94 99999-0000", 16, "tinta", 700, fonte=MONO) + t(554, 114, "+ 94 98888-1111 = ???", 16, "tinta", 700, fonte=MONO))
corpo.append(t(554, 148, "✖ somar telefones não existe", 15, "vermelho", 800))
fig("m5", "Cuidado: o número do telefone e o CEP parecem números", "Comparação: a idade é número e dá para somar (12 + 3 = 15); o telefone é texto feito de algarismos e somar telefones não faz sentido.",
    744, 190, "".join(corpo), "A pergunta é: eu faço conta com esse dado?")

corpo = []
corpo.append(t(150, 30, "📝 LISTA", 17, "azul", 800))
for i, s in enumerate(["Ana", "Bruno", "Carla", "Davi"]):
    corpo.append(caixa(90, 44 + i * 44, 120, 36, cor="azul", fundo="azul_c", rx=8, larg=2) + t(150, 68 + i * 44, s, 14, "tinta", 700))
    corpo.append(circulo(68, 62 + i * 44, 13, "azul", "azul", 0) + t(68, 67 + i * 44, str(i + 1), 13, "#fff", 800))
corpo.append(t(150, 236, "um item depois do outro, em ordem", 12, "suave", 600))
corpo.append(t(500, 30, "📊 TABELA", 17, "roxo", 800))
cab = ["Aluno", "Nota", "Faltas"]; dados = [["Ana", "8", "1"], ["Bruno", "7", "0"], ["Carla", "9", "2"]]
for c, s in enumerate(cab):
    corpo.append(caixa(340 + c * 110, 44, 110, 36, cor="roxo", fundo="roxo", rx=0, larg=1.5) + t(395 + c * 110, 68, s, 14, "#fff", 800))
for r, ln in enumerate(dados):
    for c, s in enumerate(ln):
        corpo.append(caixa(340 + c * 110, 80 + r * 36, 110, 36, cor="roxo", fundo="papel" if r % 2 else "roxo_c", rx=0, larg=1.5) + t(395 + c * 110, 104 + r * 36, s, 14, "tinta", 700))
corpo.append(f'<rect x="336" y="114" width="338" height="40" rx="6" fill="none" stroke="{COR["verde"]}" stroke-width="3.5"/>')
corpo.append(etiqueta(706, 132, "linha", "verde", 12) + seta(686, 136, 676, 136, "verde", 2))
corpo.append(f'<rect x="446" y="40" width="118" height="152" rx="6" fill="none" stroke="{COR["amarelo"]}" stroke-width="3.5"/>')
corpo.append(etiqueta(505, 222, "coluna", "amarelo", 12) + seta(505, 206, 505, 196, "amarelo", 2))
fig("m5", "Coleção Como é Exemplo Lista", "À esquerda, uma lista numerada (Ana, Bruno, Carla, Davi), um item depois do outro. À direita, uma tabela de alunos com notas e faltas, com uma linha destacada em verde (deitada) e uma coluna em amarelo (em pé).",
    760, 250, "".join(corpo), "Lista: um depois do outro. Tabela: linhas (deitadas) e colunas (em pé).")

# ======================= MISSÃO 6 =======================
corpo = []
corpo.append(caixa(20, 20, 340, 170, cor="vermelho", fundo="vermelho_c", rx=16, larg=3))
corpo.append(t(190, 48, "✖ SEM NETIQUETA", 16, "vermelho", 800))
corpo.append(balao(40, 64, 220, 50, ["VOCÊ NÃO SABE NADA!!!"], "vermelho", "papel", "baixo-esq", 14))
corpo.append(emoji(320, 150, "😢", 40) + t(190, 176, "maiúsculas = grito · ofende", 12, "vermelho", 700))
corpo.append(caixa(384, 20, 340, 170, cor="verde", fundo="verde_c", rx=16, larg=3))
corpo.append(t(554, 48, "✔ COM NETIQUETA", 16, "verde", 800))
corpo.append(balao(404, 64, 250, 50, ["Acho que dá para melhorar.", "Quer ajuda? 🙂"], "verde", "papel", "baixo-esq", 13))
corpo.append(emoji(684, 150, "😊", 40) + t(554, 176, "respeito · como falaria pessoalmente", 12, "verde", 700))
fig("m6", "Netiqueta Por quê", "Duas mensagens no grupo: à esquerda, em vermelho, uma ofensa em maiúsculas que parece grito e deixa o colega triste; à direita, em verde, uma mensagem respeitosa oferecendo ajuda, e o colega fica feliz.",
    744, 210, "".join(corpo), "Do outro lado da tela tem uma pessoa de verdade.")

corpo = []
corpo.append(caixa(20, 20, 330, 200, cor="vermelho", fundo="vermelho_c", rx=16, larg=3))
corpo.append(t(185, 48, "🔒 NÃO passe para desconhecidos", 15, "vermelho", 800))
for i, s in enumerate(["🏠 endereço", "🔑 senha", "🏫 escola", "📍 onde estou agora", "📞 telefone"]):
    corpo.append(t(60, 80 + i * 28, s, 14, "tinta", 700, "start"))
corpo.append(caixa(370, 20, 354, 200, cor="amarelo", fundo="amarelo_c", rx=16, larg=3))
corpo.append(t(547, 48, "🚨 Sinal de perigo", 15, "amarelo", 800))
corpo.append(balao(390, 62, 220, 54, ["Me manda uma foto?", "É segredo nosso…"], "tinta", "papel", "baixo-esq", 13))
corpo.append(emoji(660, 104, "👤", 40))
corpo.append(seta(450, 134, 450, 160, "vermelho", 3))
corpo.append(caixa(392, 164, 314, 44, cor="verde", fundo="verde_c", rx=10, larg=2) + t(549, 192, "✋ parar e 🙋 contar para um adulto", 14, "verde", 800))
fig("m6", "Dados pessoais (nome completo, endereço", "À esquerda, em vermelho, os dados pessoais que não se passam para desconhecidos: endereço, senha, escola, onde estou e telefone. À direita, um desconhecido pede foto e segredo: sinal de perigo, e a seta leva a parar e contar para um adulto de confiança.",
    744, 236, "".join(corpo), "Pedido de foto, endereço ou segredo: parar e contar para um adulto.")

corpo = []
passos = [("🚫", "Não compartilhar", "a ofensa", "vermelho"), ("🤝", "Apoiar", "o colega", "verde"), ("📸", "Guardar o print", "(a prova)", "azul"), ("🙋", "Contar a um adulto", "ou denunciar", "roxo")]
for i, (ch, a, b, cor) in enumerate(passos):
    x = 14 + i * 182
    corpo.append(caixa(x, 20, 168, 150, cor=cor, fundo=cor + "_c", rx=16, larg=3))
    corpo.append(emoji(x + 84, 78, ch, 44) + t(x + 84, 118, a, 15, cor, 800) + t(x + 84, 140, b, 13, "tinta", 600))
    if i < 3:
        corpo.append(seta(x + 170, 95, x + 180, 95, "tinta", 2.5))
fig("m6", "Se alguém for ofendido na rede", "Quatro atitudes quando alguém é ofendido na rede: não compartilhar a ofensa, apoiar o colega, guardar o print como prova e contar a um adulto ou denunciar.",
    744, 190, "".join(corpo), "O que fazer quando alguém é ofendido.")

# ======================= MISSÃO 7 =======================
corpo = []
corpo.append(caixa(20, 20, 704, 210, cor="tinta", fundo="fundo", rx=16, larg=2))
fil = list("QWERTYUIOP")
for c, k in enumerate(fil):
    corpo.append(tecla(70 + c * 58, 40, k, 52, 44, size=14))
base = list("ASDFGHJKLÇ")
for c, k in enumerate(base):
    cor = "azul" if c < 4 else ("verde" if c > 5 else None)
    corpo.append(tecla(84 + c * 58, 92, k, 52, 44, destaque=cor, size=15))
corpo.append(f'<path d="M{84+3*58+18} 128 h16 M{84+6*58+18} 128 h16" stroke="{COR["tinta"]}" stroke-width="3" stroke-linecap="round"/>')
corpo.append(tecla(322, 150, "", 100, 40, destaque="amarelo"))
corpo.append(etiqueta(170, 256, "✋ mão esquerda: A S D F", "azul", 13))
corpo.append(seta(170, 240, 170, 140, "azul", 2.5))
corpo.append(etiqueta(560, 256, "🤚 mão direita: J K L Ç", "verde", 13))
corpo.append(seta(560, 240, 520, 140, "verde", 2.5))
corpo.append(etiqueta(372, 300, "risquinho no F e no J: acha a posição sem olhar", "tinta", 12))
corpo.append(seta(250, 286, 278, 134, "tinta", 2) + seta(494, 286, 466, 134, "tinta", 2))
corpo.append(etiqueta(372, 214, "polegares na barra de espaço", "amarelo", 12))
fig("m7", "Mão Dedos na fileira base", "Teclado com a fileira base colorida: A S D F em azul para a mão esquerda e J K L Ç em verde para a mão direita; os risquinhos no F e no J estão apontados; os polegares ficam na barra de espaço, em amarelo.",
    744, 320, "".join(corpo), "Dedos na fileira base: volte sempre para ela.")

corpo = []
corpo.append(tecla(40, 40, "´", 70, 64, destaque="azul", size=30))
corpo.append(t(75, 130, "1º aperto o acento", 13, "azul", 800))
corpo.append(seta(120, 72, 190, 72, "tinta", 3))
corpo.append(caixa(200, 40, 150, 64, cor="suave", fundo="fundo", rx=10, larg=2, tracejada=True) + t(275, 78, "nada aparece…", 14, "suave", 700))
corpo.append(t(275, 130, "ele espera a vogal", 13, "suave", 800))
corpo.append(seta(360, 72, 430, 72, "tinta", 3))
corpo.append(tecla(440, 40, "e", 70, 64, destaque="verde", size=28))
corpo.append(t(475, 130, "2º aperto a vogal", 13, "verde", 800))
corpo.append(seta(520, 72, 590, 72, "tinta", 3))
corpo.append(caixa(600, 34, 110, 76, cor="roxo", fundo="roxo_c", rx=12, larg=3) + t(655, 88, "é", 40, "roxo", 800))
corpo.append(t(655, 130, "pronto!", 13, "roxo", 800))
corpo.append(t(372, 172, "O mesmo vale para ~ (ã, õ) e Shift + ~ (â, ê, ô): o acento vem ANTES da letra.", 13, "tinta", 600))
fig("m7", "Quero escrever Aperto Depois", "Acento em dois toques no teclado brasileiro: primeiro a tecla do acento agudo (nada aparece, ela espera), depois a vogal e, e aparece é.",
    744, 190, "".join(corpo), "O acento espera a vogal.")

# ======================= MISSÃO 8 =======================
corpo = []
corpo.append(tecla(40, 40, "Ctrl", 90, 60, destaque="azul", size=18))
corpo.append(t(85, 126, "1º SEGURE", 13, "azul", 800))
corpo.append(t(160, 80, "+", 28, "tinta", 800))
corpo.append(tecla(190, 40, "C", 70, 60, destaque="verde", size=22))
corpo.append(t(225, 126, "2º APERTE", 13, "verde", 800))
corpo.append(seta(280, 70, 340, 70, "tinta", 3))
corpo.append(caixa(350, 30, 360, 80, cor="roxo", fundo="roxo_c", rx=12, larg=2.5) + t(530, 64, "📋 copiou!", 17, "roxo", 800) + t(530, 92, "(sem procurar no menu)", 13, "tinta", 600))
fig("m8", "Atalho O que faz Para lembrar Ctrl + C", "Como fazer um atalho: primeiro segurar a tecla Ctrl, depois apertar a letra C; o texto é copiado sem precisar procurar no menu.",
    744, 140, "".join(corpo), "Segure a primeira tecla e aperte a segunda.", pequena=False)

corpo = []
def doc(x, y, titulo, txt_, cor="tinta", tem=True):
    s = caixa(x, y, 170, 120, cor="tinta", rx=8, larg=2) + t(x + 85, y + 22, titulo, 13, "tinta", 800)
    if tem:
        s += caixa(x + 16, y + 46, 138, 30, cor=cor, fundo=cor + "_c" if cor + "_c" in COR else "papel", rx=6, larg=2) + t(x + 85, y + 66, txt_, 13, cor, 800)
    else:
        s += caixa(x + 16, y + 46, 138, 30, cor="suave", fundo="fundo", rx=6, larg=1.5, tracejada=True) + t(x + 85, y + 66, "(vazio)", 12, "suave", 600)
    return s
# linha de cima: copiar
corpo.append(t(30, 36, "COPIAR", 16, "verde", 800, "start"))
corpo.append(doc(20, 46, "Lugar antigo", "Olá, turma!", "verde"))
corpo.append(seta(196, 106, 266, 106, "verde", 3) + t(231, 96, "Ctrl+C", 12, "verde", 800))
corpo.append(caixa(272, 70, 160, 72, cor="roxo", fundo="roxo_c", rx=10, larg=2) + t(352, 98, "📋 área de", 13, "roxo", 800) + t(352, 118, "transferência", 13, "roxo", 800))
corpo.append(seta(438, 106, 508, 106, "verde", 3) + t(473, 96, "Ctrl+V", 12, "verde", 800))
corpo.append(doc(514, 46, "Lugar novo", "Olá, turma!", "verde"))
corpo.append(t(105, 186, "✔ o original FICA", 13, "verde", 800))
# linha de baixo: recortar
corpo.append(t(30, 226, "RECORTAR ✂️", 16, "vermelho", 800, "start"))
corpo.append(doc(20, 236, "Lugar antigo", "", "vermelho", tem=False))
corpo.append(seta(196, 296, 266, 296, "vermelho", 3) + t(231, 286, "Ctrl+X", 12, "vermelho", 800))
corpo.append(caixa(272, 260, 160, 72, cor="roxo", fundo="roxo_c", rx=10, larg=2) + t(352, 288, "📋 área de", 13, "roxo", 800) + t(352, 308, "transferência", 13, "roxo", 800))
corpo.append(seta(438, 296, 508, 296, "vermelho", 3) + t(473, 286, "Ctrl+V", 12, "vermelho", 800))
corpo.append(doc(514, 236, "Lugar novo", "Olá, turma!", "vermelho"))
corpo.append(t(105, 376, "✖ o original SAI do lugar", 13, "vermelho", 800))
fig("m8", "Copiar × recortar: copiar deixa o original", "Comparação: copiar (Ctrl + C) guarda o texto na área de transferência e o original fica; recortar (Ctrl + X) tira o texto do lugar. Nos dois, Ctrl + V cola no lugar novo.",
    744, 392, "".join(corpo), "Copiar deixa o original; recortar tira do lugar.")

ICONES = {"m1": "🖱️", "m2": "🔄", "m3": "🧩", "m4": "📁", "m5": "🔢", "m6": "🤝", "m7": "⌨️", "m8": "⚡", "rv": "🔁"}

# 🎬 cenas de abertura (IA + camada que ensina) vão na frente: entram no topo de cada missão
from cenas_6_1 import F as CENAS
F[:0] = CENAS

if __name__ == "__main__":
    print("figuras:", gerar("informatica-6ano-2027-1bim", F, ICONES))
