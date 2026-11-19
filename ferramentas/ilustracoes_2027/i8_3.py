"""Ilustrações — 8º ano — 3º bimestre de 2027 (informatica-8ano-2027-3bim): Redes sociais.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_8_3.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


# ======================= MISSÃO 1 =======================
c = [caixa(30, 20, 330, 260, cor="tinta", fundo="#e0f2fe", rx=10, larg=3)]
c.append(caixa(60, 70, 140, 170, cor="tinta", fundo="#fef3c7", rx=4, larg=2) + t(130, 62, "🏠 casa", 12, "tinta", 700))
c.append(caixa(150, 90, 36, 26, cor="tinta", fundo="papel", rx=3, larg=1.5) + t(168, 109, "123", 12, "tinta", 900))
c.append(boneco(260, 200, "azul", 1.1) + caixa(244, 196, 32, 14, cor="papel", fundo="papel", rx=3, larg=0) + t(260, 207, "EMEF", 8, "azul", 900))
c.append(emoji(320, 60, "📍", 30) + emoji(300, 250, "🐶", 26))
notas = [(103, "🏠 número da casa → onde você mora", "vermelho", 190, 103), (160, "🏫 uniforme → onde você estuda", "vermelho", 280, 200),
         (52, "📍 localização ligada → onde você está agora", "vermelho", 336, 52), (240, "🐶 cachorro → não revela nada", "verde", 318, 244)]
for y, rot, cor, x0, y0 in notas:
    c.append(seta(390, y, x0 + 6, y0, cor, 2.2) + etiqueta(394, y + 4, rot, cor, 12, "start"))
fig("m1", "Na foto ou no post O que revela",
    "Uma foto de mentira: um aluno de uniforme na frente de uma casa com o número 123, com o símbolo de localização ligado e um cachorro. Setas vermelhas: número da casa, uniforme e localização expõem; seta verde: o cachorro não revela nada.",
    720, 300, "".join(c), "Antes de postar, procure o que a foto conta sobre você.")

# ======================= MISSÃO 2 =======================
c = [caixa(250, 70, 220, 150, cor="tinta", fundo="papel", rx=10, larg=2.5), t(360, 100, "📰 NOTÍCIA", 15, "tinta", 900)]
for i in range(4):
    c.append(f'<path d="M272 {124 + i * 20} h176" stroke="{COR["linha"]}" stroke-width="6" stroke-linecap="round"/>')
c.append(emoji(470, 230, "🔎", 44))
pergs = [(120, 40, "👤 Quem escreveu?", "azul"), (600, 40, "🏢 Onde foi publicado?", "azul"), (110, 150, "📅 Quando?", "amarelo"),
         (610, 150, "📚 Tem provas?", "amarelo"), (360, 280, "🔁 Outras fontes confirmam?", "verde")]
for x, y, rot, cor in pergs:
    c.append(etiqueta(x, y, rot, cor, 13))
c.append(seta(170, 52, 252, 86, "azul", 2) + seta(546, 52, 468, 86, "azul", 2) + seta(160, 150, 246, 150, "amarelo", 2)
         + seta(560, 150, 474, 150, "amarelo", 2) + seta(360, 262, 360, 224, "verde", 2))
fig("m2", "Pergunta O que procurar",
    "Uma notícia no centro, com uma lupa, e cinco perguntas ao redor apontando para ela: quem escreveu, onde foi publicado, quando, tem provas e outras fontes confirmam.",
    720, 300, "".join(c), "As 5 perguntas da fonte.")

# ======================= MISSÃO 3 =======================
c = [f'<circle cx="200" cy="150" r="118" fill="#e0f2fe" stroke="{COR["azul"]}" stroke-width="3" stroke-dasharray="4 4"/>', t(200, 20, "🫧 na bolha", 15, "azul", 800)]
for (x, y) in [(150, 100), (250, 100), (120, 170), (200, 150), (280, 170), (170, 220), (240, 225)]:
    c.append(emoji(x, y, "👍", 26))
c.append(t(200, 290, "só opiniões iguais: “todo mundo concorda”", 12, "azul", 800))
c.append(t(540, 20, "🌍 fora da bolha", 15, "verde", 800))
for (x, y, e) in [(450, 100, "👍"), (540, 80, "🤔"), (630, 110, "👎"), (470, 190, "💬"), (560, 170, "📰"), (640, 210, "🙋"), (520, 250, "👍")]:
    c.append(emoji(x, y, e, 28))
c.append(t(545, 290, "opiniões diferentes: dá para comparar", 12, "verde", 800))
c.append(seta(322, 150, 412, 150, "verde", 3) + etiqueta(366, 128, "furar", "verde", 12))
fig("m3", "Na bolha Fora da bolha",
    "À esquerda, uma bolha azul cheia de polegares para cima: só opiniões iguais. À direita, fora da bolha, muitos símbolos diferentes (dúvida, polegar para baixo, conversa, jornal). Uma seta verde “furar” liga os dois lados.",
    720, 300, "".join(c), "Na bolha parece que todos pensam igual.")

# ======================= MISSÃO 4 =======================
c = [caixa(40, 14, 380, 272, cor="tinta", fundo="papel", rx=8, larg=2.5), t(230, 42, "📜 Termos de uso (inventados)", 14, "tinta", 900)]
clausulas = [("Destinado a maiores de 13 anos.", "verde"), ("Coletamos nome, contatos e localização.", "vermelho"),
             ("Podemos compartilhar com parceiros.", "vermelho"), ("Anúncios personalizados com seus dados.", "amarelo"),
             ("Você pode excluir sua conta.", "verde")]
for i, (txt, cor) in enumerate(clausulas):
    y = 62 + i * 44
    c.append(caixa(56, y, 348, 34, cor=cor, fundo=cor + "_c", rx=6, larg=1.5) + t(66, y + 22, f"{i + 1}. {txt}", 12, "tinta", 700, "start"))
c.append(etiqueta(570, 70, "👍 tranquila", "verde", 14) + etiqueta(570, 120, "⚠️ atenção", "vermelho", 14) + etiqueta(570, 170, "📢 propaganda", "amarelo", 14))
c.append(caixa(450, 200, 250, 86, cor="roxo", fundo="roxo_c", rx=12) + t(575, 224, "Antes de aceitar:", 13, "roxo", 800)
         + t(575, 246, "1) que dados pega?", 12, "tinta", 700) + t(575, 264, "2) com quem compartilha?", 12, "tinta", 700) + t(575, 282, "3) dá para apagar a conta?", 12, "tinta", 700))
fig("m4", "O que procurar Exemplo de frase nos termos Por que importa",
    "Uma folha de termos de uso inventados com cinco frases coloridas: idade mínima e excluir a conta em verde (tranquila), coleta de contatos e localização e compartilhamento com parceiros em vermelho (atenção), anúncios personalizados em amarelo. Ao lado, as 3 perguntas antes de aceitar.",
    720, 300, "".join(c), "Leia os termos procurando o que importa.")

# ======================= MISSÃO 5 =======================
c = []
linhas_p = [("🗺️", "Mapa", "📍", "localização", True), ("📸", "Câmera de filtros", "📷", "câmera", True), ("🔦", "Lanterna", "👥", "contatos", False), ("🧮", "Calculadora", "🎤", "microfone", False)]
for i, (ea, app, ep, perm, ok) in enumerate(linhas_p):
    y = 20 + i * 68
    cor = "verde" if ok else "vermelho"
    c.append(caixa(30, y, 230, 54, cor="tinta", fundo="#f1f5f9", rx=12, larg=2) + emoji(62, y + 38, ea, 28) + t(90, y + 33, app, 14, "tinta", 800, "start"))
    c.append(seta(266, y + 27, 386, y + 27, cor, 3) + t(326, y + 18, "pede", 11, "suave", 700))
    c.append(caixa(392, y, 160, 54, cor=cor, fundo=cor + "_c", rx=12, larg=2) + emoji(420, y + 38, ep, 26) + t(444, y + 33, perm, 13, "tinta", 800, "start"))
    c.append(t(630, y + 34, "✅ faz sentido" if ok else "❌ não faz", 14, cor, 900))
fig("m5", "Aplicativo Pede Faz sentido?",
    "Quatro linhas: mapa pede localização (faz sentido), câmera de filtros pede câmera (faz sentido), lanterna pede contatos (não faz) e calculadora pede microfone (não faz).",
    720, 296, "".join(c), "A pergunta de ouro: faz sentido para o que o aplicativo faz?")

# ======================= MISSÃO 6 =======================
def pe(x, y, cor, s=1.0):
    return (f'<ellipse cx="{x}" cy="{y}" rx="{22 * s}" ry="{34 * s}" fill="{COR[cor]}"/>'
            + "".join(f'<circle cx="{x - 16 * s + k * 8 * s}" cy="{y - 40 * s - (k % 2) * 3}" r="{4.5 * s}" fill="{COR[cor]}"/>' for k in range(5)))


c = [caixa(20, 20, 330, 260, cor="azul", fundo="azul_c", rx=16), pe(90, 110, "azul"), t(220, 70, "✍️ pegada ATIVA", 15, "azul", 900), t(220, 94, "o que você publica", 12, "azul", 700)]
for i, e in enumerate(["📝 post", "💬 comentário", "🖼️ foto", "❤️ curtida"]):
    c.append(t(220, 140 + i * 30, e, 14, "tinta", 700))
c.append(caixa(370, 20, 330, 260, cor="roxo", fundo="roxo_c", rx=16) + pe(440, 110, "roxo") + t(570, 70, "👀 pegada PASSIVA", 15, "roxo", 900) + t(570, 94, "coletada sem você ver", 12, "roxo", 700))
for i, e in enumerate(["📍 localização", "🔎 histórico", "⏱️ tempo em cada vídeo"]):
    c.append(t(570, 140 + i * 30, e, 14, "tinta", 700))
c.append(etiqueta(360, 292, "👣 as duas ficam por muito tempo", "amarelo", 12))
fig("m6", "Tipo O que é Exemplos",
    "Duas pegadas: a azul é a pegada ativa (post, comentário, foto, curtida) e a roxa é a pegada passiva (localização, histórico, tempo em cada vídeo). Aviso: as duas ficam por muito tempo.",
    720, 300, "".join(c), "Ativa: você publica. Passiva: coletam sem você ver.")

# ======================= MISSÃO 7 =======================
passos7 = ["🤔 desconfiar", "📖 ler além|do título", "🔙 fonte|original", "📅 ver a data", "🔁 outras fontes|e agências"]
c = []
for i, p in enumerate(passos7):
    x = 20 + i * 136; y = 220 - i * 44
    c.append(caixa(x, y, 130, 290 - y, cor="verde", fundo="verde_c" if i % 2 == 0 else "#bbf7d0", rx=8, larg=2)
             + circulo(x + 22, y + 22, 14, "verde", "papel") + t(x + 22, y + 27, str(i + 1), 13, "verde", 900))
    c.append("".join(t(x + 65, y + 56 + k * 17, q, 12, "tinta", 800) for k, q in enumerate(p.split("|"))))
c.append(emoji(660, 30, "✅", 34) + t(560, 30, "checado!", 15, "verde", 900))
fig("m7", "Passo O que fazer",
    "Uma escada de cinco degraus verdes, subindo: 1 desconfiar, 2 ler além do título, 3 fonte original, 4 ver a data, 5 outras fontes e agências. No topo, checado.",
    720, 300, "".join(c), "Degrau por degrau, até ter certeza.")

# ======================= MISSÃO 8 =======================
c = [caixa(30, 100, 170, 100, cor="azul", fundo="azul_c", rx=14) + emoji(70, 162, "🧑", 40) + t(140, 140, "você", 15, "azul", 900) + t(140, 166, "❤️ ⏱️ 💬 ⏭️", 16, "tinta", 700)]
c.append(caixa(275, 100, 170, 100, cor="amarelo", fundo="amarelo_c", rx=14) + emoji(360, 150, "⚙️", 36) + t(360, 186, "algoritmo", 14, "amarelo", 900))
c.append(caixa(520, 100, 170, 100, cor="roxo", fundo="roxo_c", rx=14) + t(605, 130, "📱 feed", 15, "roxo", 900) + t(605, 160, "mais do que", 12, "tinta", 700) + t(605, 178, "prendeu você", 12, "tinta", 700))
c.append(seta(204, 140, 270, 140, "azul", 3) + t(237, 128, "observa", 10, "azul", 800))
c.append(seta(449, 140, 515, 140, "amarelo", 3) + t(482, 128, "escolhe", 10, "amarelo", 800))
c.append(seta(605, 206, 115, 206, "roxo", 3, curva=80) + t(360, 278, "🔁 você vê, reage… e o algoritmo aprende de novo", 13, "roxo", 800))
c.append(etiqueta(360, 40, "🎯 objetivo: você ficar mais tempo (mais propaganda)", "vermelho", 12))
fig("m8", "O que você faz O que o algoritmo entende",
    "Um ciclo: você curte, assiste, comenta ou pula; o algoritmo observa e escolhe; o feed mostra mais do que prendeu você; e o ciclo recomeça. No alto: o objetivo é você ficar mais tempo, vendo mais propaganda.",
    720, 300, "".join(c), "O feed aprende com o que você faz.")

ICONES = {"m1": "📤", "m2": "🔎", "m3": "🫧", "m4": "📜", "m5": "📲", "m6": "👣", "m7": "✅", "m8": "🎛️", "rv": "🔁"}

try:
    from cenas_8_3 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-8ano-2027-3bim", F, ICONES))
