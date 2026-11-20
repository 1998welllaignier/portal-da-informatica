"""Ilustrações — 6º ano — 4º bimestre de 2027 (informatica-6ano-2027-4bim): Rede, arquivos e planeta.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) e as fotos reais (com crédito) ficam em cenas_6_4.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


# ======================= MISSÃO 1 =======================
c = [caixa(20, 60, 130, 130, cor="azul", fundo="azul_c", rx=10) + emoji(85, 138, "🏞️", 64) + t(85, 212, "foto inteira", 12, "azul", 900)]
c.append(seta(156, 125, 206, 125, "tinta", 3) + t(181, 112, "divide", 11, "suave", 800))
ordem = [3, 1, 4, 2]
for k, n in enumerate(ordem):
    x = 220 + k * 66; y = 60 + (k % 2) * 70
    c.append(caixa(x, y, 58, 58, cor="amarelo", fundo="amarelo_c", rx=6, larg=2) + t(x + 29, y + 24, f"#{n}", 14, "tinta", 900) + t(x + 29, y + 46, "📬 →", 11, "suave", 800))
c.append(t(350, 222, "chegam fora de ordem", 12, "amarelo", 900))
c.append(seta(488, 125, 538, 125, "tinta", 3) + t(513, 112, "remonta", 11, "suave", 800))
for k in range(4):
    c.append(caixa(552 + (k % 2) * 66, 60 + (k // 2) * 66, 62, 62, cor="verde", fundo="verde_c", rx=4, larg=2) + t(583 + (k % 2) * 66, 96 + (k // 2) * 66, f"#{k + 1}", 14, "verde", 900))
c.append(t(617, 212, "1 · 2 · 3 · 4", 12, "verde", 900))
c.append(etiqueta(360, 262, "cada pacote leva: 📬 destino · 📮 origem · 🔢 número de ordem · 🧩 um pedaço", "roxo", 12))
fig("m1", "Etiqueta do pacote Para que serve",
    "Uma foto inteira é dividida em quatro pacotes numerados. Eles viajam e chegam fora de ordem (3, 1, 4, 2) e, no destino, são remontados pela ordem 1, 2, 3, 4. Embaixo: cada pacote leva destino, origem, número de ordem e um pedaço dos dados.",
    720, 282, "".join(c), "Pedaços numerados viajam e são remontados no destino.")

# ======================= MISSÃO 2 =======================
nos = [("📱", "aparelho", 60, 140), ("📶", "roteador", 170, 140), ("🏢", "provedor", 280, 140), ("🔀", "roteador A", 400, 70), ("🔀", "roteador B", 400, 210), ("🖥️", "servidor", 640, 140)]
c = []
for e, rot, x, y in nos:
    c.append(circulo(x, y, 36, "azul", "azul_c") + emoji(x, y + 10, e, 28) + t(x, y + 54, rot, 11, "tinta", 800))
c.append(seta(98, 140, 132, 140, "tinta", 3) + seta(208, 140, 242, 140, "tinta", 3) + seta(310, 120, 368, 84, "verde", 3) + seta(310, 160, 368, 196, "roxo", 3))
c.append(f'<path d="M436 70 C 500 40, 560 40, 604 120" fill="none" stroke="{COR["verde"]}" stroke-width="3" marker-end="url(#p27-verde)"/>')
c.append(f'<path d="M436 210 C 500 290, 540 260, 520 220 S 560 150, 604 160" fill="none" stroke="{COR["roxo"]}" stroke-width="3" stroke-dasharray="8 5"/>')
c.append(t(520, 300, "🌊 cabo submarino (fibra óptica)", 12, "ciano", 900) + t(520, 40, "caminho 1", 11, "verde", 800) + t(470, 274, "caminho 2", 11, "roxo", 800))
fig("m2", "Parada O que faz",
    "O caminho dos pacotes: aparelho, roteador de casa, provedor e, depois, dois caminhos diferentes pelos roteadores da internet (um deles por um cabo submarino de fibra óptica) até chegar ao servidor do site.",
    720, 316, "".join(c), "Cada pacote pode ir por um caminho diferente até o servidor.")

# ======================= MISSÃO 3 =======================
med = [("bit", "0 ou 1", 40), ("byte", "8 bits · uma letra", 60), ("KB", "texto curto", 84), ("MB", "foto · música", 112), ("GB", "filme", 144), ("TB", "HD grande", 180)]
c = []
x = 20
for i, (rot, ex, w) in enumerate(med):
    cor = ["suave", "azul", "verde", "amarelo", "roxo", "vermelho"][i]
    c.append(caixa(x, 200 - w, w, w, cor=cor, fundo=(cor + "_c") if cor != "suave" else "#f1f5f9", rx=8, larg=2.5) + t(x + w / 2, 200 - w / 2 + 6, rot, 15 if w > 50 else 12, cor, 900) + t(x + w / 2, 222, ex, 10, "tinta", 700))
    if i < len(med) - 1:
        c.append(t(x + w + 7, 200 - w / 2, "→", 14, "suave", 900))
    x += w + 14
c.append(etiqueta(360, 260, "a partir do byte, cada medida é cerca de mil vezes a anterior · .zip junta e diminui", "amarelo", 12))
fig("m3", "Medida Quanto é Exemplo do que cabe",
    "Seis quadrados que vão crescendo da esquerda para a direita: bit (0 ou 1), byte (8 bits, uma letra), KB (texto curto), MB (foto, música), GB (filme) e TB (HD grande). Embaixo: a partir do byte, cada medida é cerca de mil vezes a anterior; o .zip junta e diminui os arquivos.",
    720, 280, "".join(c), "Do menor para o maior: bit, byte, KB, MB, GB, TB.")

# ======================= MISSÃO 4 =======================
c = [caixa(20, 14, 320, 270, cor="tinta", fundo="#f8fafc", rx=10, larg=2), caixa(20, 14, 320, 34, cor="tinta", fundo="#e5e7eb", rx=10, larg=2), t(180, 37, "Propriedades de passeio.jpg", 12, "tinta", 900)]
props = [("📛", "Nome", "passeio.jpg"), ("📏", "Tamanho", "3 MB"), ("📅", "Criado em", "12/09/2027"), ("✏️", "Modificado em", "15/09/2027"), ("📷", "Aparelho", "câmera do celular")]
for i, (e, k, v) in enumerate(props):
    y = 64 + i * 42
    c.append(emoji(46, y + 22, e, 18) + t(66, y + 20, k + ":", 12, "suave", 800, "start") + t(176, y + 20, v, 12, "tinta", 900, "start"))
arv = [(0, "📁 Escola"), (1, "📁 2027"), (2, "📁 Ciências"), (3, "📄 2027-ciencias-planetas.pptx"), (1, "📁 Fotos"), (2, "📁 2027"), (3, "🖼️ passeio.jpg")]
c.append(caixa(370, 14, 330, 270, cor="amarelo", fundo="#fffbeb", rx=10, larg=2) + t(535, 40, "🗂️ pastas e subpastas", 13, "amarelo", 900))
for i, (nivel, rot) in enumerate(arv):
    y = 68 + i * 30
    c.append(t(390 + nivel * 26, y, rot, 12, "tinta", 800, "start"))
    if nivel:
        c.append(f'<path d="M{380 + nivel * 26} {y - 16} v12 h6" fill="none" stroke="#94a3b8" stroke-width="1.5"/>')
fig("m4", "Metadado Exemplo",
    "À esquerda, a janela de Propriedades de passeio.jpg com os metadados: nome, tamanho (3 MB), criado em 12/09/2027, modificado em 15/09/2027 e aparelho. À direita, uma árvore de pastas e subpastas: Escola › 2027 › Ciências › 2027-ciencias-planetas.pptx e Fotos › 2027 › passeio.jpg.",
    720, 298, "".join(c), "Metadados contam a história do arquivo; pastas guardam tudo no lugar.")

# ======================= MISSÃO 5 =======================
c = [t(360, 28, "Antes de trocar o aparelho:", 15, "tinta", 900)]
perg = [("1", "Ele ainda funciona?", "azul"), ("2", "Dá para consertar?", "verde"), ("3", "Preciso ou só quero?", "roxo")]
for i, (n, p_, cor) in enumerate(perg):
    x = 20 + i * 232
    c.append(caixa(x, 46, 216, 70, cor=cor, fundo=cor + "_c", rx=14, larg=2.5) + circulo(x + 34, 81, 20, cor, "papel") + t(x + 34, 88, n, 16, cor, 900) + t(x + 130, 87, p_, 13, "tinta", 900))
cuid = [("🛡️", "capa e película"), ("🌡️", "longe do calor"), ("🧹", "apagar o que não usa"), ("🔌", "carregador adequado")]
c.append(t(360, 154, "Para durar mais:", 14, "verde", 900))
for i, (e, rot) in enumerate(cuid):
    x = 20 + i * 172
    c.append(caixa(x, 170, 160, 80, cor="verde", fundo="papel", rx=12, larg=2) + emoji(x + 80, 210, e, 30) + t(x + 80, 238, rot, 11, "tinta", 800))
c.append(etiqueta(360, 278, "📉 trocar só pela moda = obsolescência perceptiva", "vermelho", 12))
fig("m5", "Tipo de obsolescência Exemplo",
    "Três perguntas antes de trocar o aparelho: ele ainda funciona? Dá para consertar? Preciso ou só quero? Embaixo, quatro cuidados para durar mais: capa e película, longe do calor, apagar o que não usa e carregador adequado. Aviso: trocar só pela moda é obsolescência perceptiva.",
    720, 296, "".join(c), "Pensar antes de trocar faz o aparelho durar e poupa o planeta.")

# ======================= MISSÃO 6 =======================
rs = [("🤔", "Repensar", "roxo"), ("🙅", "Recusar", "vermelho"), ("📉", "Reduzir", "amarelo"), ("🔁", "Reutilizar", "azul"), ("♻️", "Reciclar", "verde")]
c = []
for i, (e, rot, cor) in enumerate(rs):
    x = 20 + i * 138
    c.append(caixa(x, 20, 126, 96, cor=cor, fundo=cor + "_c", rx=14, larg=2.5) + emoji(x + 63, 64, e, 32) + t(x + 63, 102, rot, 13, cor, 900))
    if i < 4:
        c.append(t(x + 132, 70, "→", 14, "suave", 900))
c.append(caixa(20, 140, 330, 120, cor="vermelho", fundo="vermelho_c", rx=12, larg=2) + t(185, 168, "🚫 lixo comum ou fogo", 14, "vermelho", 900)
         + t(185, 196, "contamina o solo e a água", 12, "tinta", 800) + t(185, 218, "solta fumaça tóxica", 12, "tinta", 800) + emoji(185, 248, "🔋📱🔌", 22))
c.append(caixa(370, 140, 330, 120, cor="verde", fundo="verde_c", rx=12, larg=2) + t(535, 168, "✅ ponto de coleta", 14, "verde", 900)
         + t(535, 196, "caixas em lojas de pilhas e celulares", 12, "tinta", 800) + t(535, 218, "→ reciclagem", 12, "tinta", 800) + emoji(535, 248, "📦♻️", 22))
fig("m6", "Onde jogar O que acontece",
    "Os 5 Rs em sequência: repensar, recusar, reduzir, reutilizar e reciclar. Embaixo, à esquerda, em vermelho: lixo comum ou fogo contaminam o solo e a água e soltam fumaça tóxica; à direita, em verde: ponto de coleta, com caixas em lojas de pilhas e celulares, que leva à reciclagem.",
    720, 276, "".join(c), "Pilha, carregador e celular velho: ponto de coleta.")

# ======================= MISSÃO 7 =======================
c = [caixa(20, 14, 300, 280, cor="tinta", fundo="#f1f5f9", rx=24, larg=3), caixa(32, 40, 276, 228, cor="linha", fundo="#ecfdf5", rx=8, larg=1.5), t(170, 32, "💬 Grupo do 6º ano", 12, "tinta", 900)]
msgs = [("Rafa", "Amanhã tem ed. física, tragam tênis!", "verde", "✅"), ("Gui", "olha a foto da Mari kkkk", "vermelho", "🚩"), ("Sofia", "Gui, apaga, por favor.", "verde", "✅"), ("Teo", "URGENTE! repassem!! (sem fonte)", "vermelho", "🚩")]
for i, (de, txt, cor, sinal) in enumerate(msgs):
    y = 52 + i * 52
    c.append(caixa(42, y, 230, 44, cor=cor, fundo="papel", rx=10, larg=2) + t(54, y + 17, de, 10, cor, 900, "start") + t(54, y + 35, txt, 11, "tinta", 700, "start") + t(290, y + 30, sinal, 16, cor, 900))
comb = ["🙂 escrever com respeito", "🎯 falar do assunto", "🌙 nada de madrugada", "📸 foto só pedindo antes", "🔁 não repassar print", "🧐 conferir notícias"]
c.append(caixa(350, 14, 350, 280, cor="roxo", fundo="roxo_c", rx=12, larg=2) + t(525, 42, "📋 Combinados da turma", 14, "roxo", 900))
for i, rot in enumerate(comb):
    c.append(t(372, 78 + i * 32, rot, 13, "tinta", 800, "start"))
c.append(t(525, 280, "ofensa? apoie e conte a um adulto", 12, "vermelho", 900))
fig("m7", "Combinado Por quê",
    "À esquerda, um grupo de mensagens: um aviso útil e um pedido para apagar foto estão marcados como certos; uma foto de colega sem pedir e uma notícia urgente sem fonte estão marcadas com bandeira vermelha. À direita, os combinados: respeito, assunto, nada de madrugada, foto só pedindo antes, não repassar print e conferir notícias.",
    720, 308, "".join(c), "Combinados feitos juntos deixam o grupo bom para todos.")

# ======================= MISSÃO 8 =======================
c = [caixa(260, 90, 200, 110, cor="azul", fundo="azul_c", rx=14, larg=3) + emoji(320, 150, "🖥️", 40) + t(400, 140, "original", 13, "azul", 900) + t(400, 162, "fotos e trabalhos", 11, "tinta", 700)]
copias = [("💾", "pen drive", "sem internet", 100, 60), ("☁️", "nuvem", "longe de casa", 620, 60), ("🖥️", "outro computador", "outro lugar", 360, 270)]
for e, rot, sub, x, y in copias:
    c.append(circulo(x, y + 20, 46, "verde", "verde_c") + emoji(x, y + 30, e, 32) + t(x, y + 84, rot, 12, "verde", 900) + t(x, y + 102, sub, 10, "suave", 800))
c.append(seta(258, 120, 150, 90, "verde", 3) + seta(462, 120, 570, 90, "verde", 3) + seta(360, 204, 360, 238, "verde", 3))
c.append(caixa(500, 220, 200, 80, cor="amarelo", fundo="amarelo_c", rx=12, larg=2.5) + t(600, 246, "regra 3-2-1", 14, "tinta", 900) + t(600, 268, "3 cópias · 2 tipos", 11, "tinta", 800) + t(600, 286, "1 longe de casa", 11, "tinta", 800))
fig("m8", "Onde guardar a cópia Vantagem Cuidado",
    "No meio, o computador com os arquivos originais. Setas verdes levam cópias para três lugares: pen drive (sem internet), nuvem (longe de casa) e outro computador. No canto, a regra 3-2-1: 3 cópias, 2 tipos de lugar, 1 longe de casa.",
    720, 390, "".join(c), "Backup é cópia em outro lugar.")

ICONES = {"m1": "📦", "m2": "🗺️", "m3": "💾", "m4": "🗂️", "m5": "🛒", "m6": "♻️", "m7": "💬", "m8": "🛟", "rv": "🔁"}

try:
    from cenas_6_4 import F as CENAS   # 🎬 cenas de abertura (IA) e fotos reais com crédito, quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-6ano-2027-4bim", F, ICONES))
