"""Ilustrações — 9º ano — 3º bimestre de 2027 (informatica-9ano-2027-3bim): Tecnologia e sociedade.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_9_3.py, quando existirem."""
import math
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


# ======================= MISSÃO 1 =======================
passos = [("👀", "observar"), ("☝️", "escolher"), ("🧍", "quem sofre?"), ("📊", "que dados?"), ("💡", "que solução?"), ("🧪", "testar")]
c = [circulo(360, 150, 62, "azul", "azul_c"), t(360, 144, "🏙️ problema", 14, "azul", 800), t(360, 166, "da cidade", 13, "azul", 800)]
pts = []
for i, (e, rot) in enumerate(passos):
    ang = -math.pi / 2 + i * 2 * math.pi / 6
    x, y = 360 + 210 * math.cos(ang), 150 + 112 * math.sin(ang)
    pts.append((x, y))
    c.append(caixa(x - 70, y - 26, 140, 52, cor="verde" if i == 5 else "roxo", fundo="verde_c" if i == 5 else "roxo_c", rx=26, larg=2)
             + t(x - 44, y + 9, e, 22, "tinta", 400) + t(x + 14, y + 6, f"{i + 1}. {rot}", 12, "tinta", 800))
for i in range(6):
    (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % 6]
    dx, dy = x2 - x1, y2 - y1; d = math.hypot(dx, dy)
    c.append(seta(x1 + dx * 0.36, y1 + dy * 0.36, x1 + dx * 0.64, y1 + dy * 0.64, "suave", 2.5))
fig("m1", "Passo O que fazer Exemplo: lâmpadas queimadas",
    "Um ciclo de seis passos ao redor do “problema da cidade”: 1 observar, 2 escolher, 3 quem sofre, 4 que dados, 5 que solução, 6 testar, e volta a observar.",
    720, 300, "".join(c), "Pensar como quem resolve: um passo de cada vez, e testar no fim.")

# ======================= MISSÃO 2 =======================
dados = [("Flores", 12), ("Rio", 7), ("Novo", 15), ("Serra", 6)]
c = [f'<path d="M80 250 H520" stroke="{COR["tinta"]}" stroke-width="2"/>', f'<path d="M80 250 V30" stroke="{COR["tinta"]}" stroke-width="2"/>']
for k in range(0, 17, 5):
    y = 250 - k * 13
    c.append(f'<path d="M76 {y} H520" stroke="{COR["linha"]}" stroke-width="1"/>' + t(70, y + 4, str(k), 11, "suave", 700, "end"))
for i, (b, v) in enumerate(dados):
    x = 110 + i * 105; h = v * 13
    cor = "amarelo" if v == 15 else "azul"
    c.append(f'<rect x="{x}" y="{250 - h}" width="64" height="{h}" rx="6" fill="{COR[cor]}"/>' + t(x + 32, 244 - h, str(v), 14, cor, 900) + t(x + 32, 270, "Bairro " + b, 11, "tinta", 700))
c.append(t(300, 22, "Pedidos de conserto de lâmpada (dados inventados)", 13, "tinta", 800))
c.append(caixa(546, 60, 160, 70, cor="verde", fundo="verde_c", rx=12) + t(626, 88, "➕ total", 13, "verde", 800) + t(626, 116, "12+7+15+6 = 40", 13, "tinta", 900))
c.append(caixa(546, 150, 160, 70, cor="amarelo", fundo="amarelo_c", rx=12) + t(626, 178, "🔝 maior", 13, "amarelo", 800) + t(626, 206, "Bairro Novo (15)", 13, "tinta", 900))
fig("m2", "Bairro (inventado) Pedidos de conserto de lâmpada no mês",
    "Gráfico de barras dos pedidos de conserto de lâmpada em quatro bairros inventados: Flores 12, Rio 7, Novo 15 (destacado) e Serra 6. Ao lado: o total é 40 e o maior é o Bairro Novo.",
    720, 290, "".join(c), "Com uma tabela, dá para somar, achar o maior e decidir onde agir.")

# ======================= MISSÃO 3 =======================
camadas = [("🧠 HABILIDADE", "sabe usar com segurança?", "verde"), ("⚡ QUALIDADE", "conexão boa? aparelho só seu?", "amarelo"), ("📱 ACESSO", "tem aparelho e internet?", "azul")]
c = []
for i, (rot, perg, cor) in enumerate(camadas):
    y = 30 + i * 82; w = 300 + i * 120; x = 260 - w / 2 + 100
    c.append(caixa(x, y, w, 70, cor=cor, fundo=cor + "_c", rx=12) + t(x + w / 2, y + 30, rot, 15, cor, 900) + t(x + w / 2, y + 54, perg, 12, "tinta", 700))
c.append(etiqueta(360, 288, "faltar qualquer camada = ficar de fora (estudar, trabalhar, pedir documentos)", "vermelho", 12))
fig("m3", "Parte Pergunta Exemplo",
    "Três camadas empilhadas: embaixo, acesso (tem aparelho e internet?); no meio, qualidade (conexão boa, aparelho só seu?); no topo, habilidade (sabe usar com segurança?). Aviso: faltar qualquer camada é ficar de fora.",
    720, 300, "".join(c), "A desigualdade digital tem três partes.")

# ======================= MISSÃO 4 =======================
c = [caixa(20, 20, 330, 250, cor="azul", fundo="azul_c", rx=16), emoji(80, 92, "🤖", 50), t(220, 70, "a máquina faz bem", 15, "azul", 900)]
for i, e in enumerate(["🔁 tarefas repetitivas", "🧮 contas rápidas", "🗂️ organizar muitos dados"]):
    c.append(t(185, 140 + i * 36, e, 14, "tinta", 700))
c.append(caixa(370, 20, 330, 250, cor="verde", fundo="verde_c", rx=16) + emoji(430, 92, "🧑", 50) + t(570, 70, "muito humano", 15, "verde", 900))
for i, e in enumerate(["🎨 criatividade", "💛 empatia", "🗣️ comunicação", "🤝 trabalho em equipe"]):
    c.append(t(535, 132 + i * 32, e, 14, "tinta", 700))
c.append(etiqueta(360, 290, "🔄 profissões mudam · 🆕 novas surgem · 🏠 teletrabalho cresce", "roxo", 12))
fig("m4", "O que acontece Exemplo",
    "À esquerda, o robô: a máquina faz bem tarefas repetitivas, contas rápidas e organizar dados. À direita, a pessoa: criatividade, empatia, comunicação e trabalho em equipe. Embaixo: profissões mudam, novas surgem e o teletrabalho cresce.",
    720, 300, "".join(c), "Usar a tecnologia e desenvolver as habilidades humanas.")

# ======================= MISSÃO 5 =======================
etapas = [("📥", "1. coletar", "e-mails já marcados"), ("🏋️", "2. treinar", "acha o padrão"), ("🧪", "3. testar", "e-mails novos"), ("📬", "4. usar", "pasta Spam sozinha")]
c = []
for i, (e, rot, ex) in enumerate(etapas):
    x = 20 + i * 176
    c.append(caixa(x, 60, 150, 130, cor="roxo", fundo="roxo_c", rx=14) + emoji(x + 75, 112, e, 40) + t(x + 75, 146, rot, 14, "roxo", 900) + t(x + 75, 170, ex, 11, "tinta", 700))
    if i < 3:
        c.append(seta(x + 152, 125, x + 172, 125, "roxo", 3))
c.append(caixa(20, 210, 330, 70, cor="amarelo", fundo="amarelo_c", rx=12) + t(185, 238, "🎯 padrão do spam:", 13, "amarelo", 800) + t(185, 262, "“grátis”, “prêmio”, “clique já”", 13, "tinta", 700))
c.append(caixa(370, 210, 330, 70, cor="vermelho", fundo="vermelho_c", rx=12) + t(535, 238, "⚠️ exemplos de um tipo só = viés", 13, "vermelho", 800) + t(535, 262, "e o chatbot pode inventar: confira!", 12, "tinta", 700))
c.append(t(360, 34, "Como a IA aprende (exemplo: filtro de spam)", 15, "tinta", 800))
fig("m5", "Etapa O que acontece Exemplo: filtro de spam do e-mail",
    "Quatro etapas em sequência: coletar e-mails já marcados, treinar achando o padrão, testar com e-mails novos e usar mandando para a pasta Spam. Embaixo: o padrão do spam e o aviso sobre o viés e o chatbot que inventa.",
    720, 296, "".join(c), "A IA aprende com exemplos; com exemplos ruins, aprende errado.")

# ======================= MISSÃO 6 =======================
c = [f'<path d="M360 60 L360 250" stroke="{COR["tinta"]}" stroke-width="4"/>', f'<path d="M300 260 H420" stroke="{COR["tinta"]}" stroke-width="6" stroke-linecap="round"/>',
     f'<path d="M150 90 L570 70" stroke="{COR["tinta"]}" stroke-width="4"/>', circulo(360, 80, 8, "tinta", "tinta")]
c.append(caixa(30, 100, 250, 150, cor="vermelho", fundo="vermelho_c", rx=14) + t(155, 126, "⚠️ pode prejudicar", 14, "vermelho", 900))
for i, e in enumerate(["🗑️ lixo eletrônico", "⚡ data centers: energia", "📱 trocar sem precisar"]):
    c.append(t(155, 160 + i * 30, e, 13, "tinta", 700))
c.append(caixa(440, 80, 250, 150, cor="verde", fundo="verde_c", rx=14) + t(565, 106, "🌱 pode ajudar", 14, "verde", 900))
for i, e in enumerate(["🛰️ satélites (INPE)", "💧 sensores no campo", "🚗 carona e rotas"]):
    c.append(t(565, 140 + i * 30, e, 13, "tinta", 700))
c.append(etiqueta(360, 288, "você pesa a balança: usar mais tempo · consertar · doar · ponto de coleta", "verde", 12))
fig("m6", "⚠️ Pode prejudicar 🌱 Pode ajudar",
    "Uma balança: no prato vermelho, o que prejudica (lixo eletrônico, energia dos data centers, trocar sem precisar); no prato verde, o que ajuda (satélites do INPE, sensores no campo, carona e rotas). Embaixo: atitudes que pesam para o lado bom.",
    720, 300, "".join(c), "A tecnologia tem dois lados para o meio ambiente.")

# ======================= MISSÃO 7 =======================
recs = [("🔊", "leitor de tela", "pessoas cegas", "azul"), ("💬", "legenda", "pessoas surdas", "roxo"), ("🤟", "VLibras", "quem usa a Libras", "verde"), ("🌗", "alto contraste", "baixa visão", "amarelo")]
c = []
for i, (e, rot, quem, cor) in enumerate(recs):
    x = 20 + i * 176
    c.append(caixa(x, 30, 160, 200, cor=cor, fundo=cor + "_c", rx=16) + emoji(x + 80, 96, e, 46) + t(x + 80, 140, rot, 15, cor, 900)
             + t(x + 80, 176, "ajuda:", 11, "suave", 700) + t(x + 80, 198, quem, 13, "tinta", 800))
c.append(etiqueta(360, 270, "✨ e ajuda todo mundo: legenda no lugar barulhento, letra grande para os avós", "roxo", 12))
fig("m7", "Recurso Como funciona Quem ajuda",
    "Quatro cartões: leitor de tela (ajuda pessoas cegas), legenda (pessoas surdas), VLibras (quem usa a Libras) e alto contraste (baixa visão). Embaixo: a acessibilidade ajuda todo mundo.",
    720, 290, "".join(c), "Cada recurso abre a porta para alguém.")

# ======================= MISSÃO 8 =======================
c = [caixa(40, 70, 170, 150, cor="tinta", fundo="#e2e8f0", rx=12, larg=2.5), caixa(60, 90, 90, 60, cor="tinta", fundo="#bbf7d0", rx=4, larg=1.5)]
for r in range(3):
    for k in range(3):
        c.append(caixa(160 + k * 14, 92 + r * 18, 10, 12, cor="tinta", fundo="papel", rx=2, larg=1))
c.append(t(125, 240, "🗳️ urna eletrônica", 13, "tinta", 800) + t(125, 260, "(desde 1996)", 12, "suave", 700))
c.append(seta(214, 140, 284, 140, "azul", 3) + caixa(290, 60, 140, 170, cor="tinta", fundo="papel", rx=4, larg=2) + t(360, 88, "BOLETIM", 12, "tinta", 900) + t(360, 104, "DE URNA", 12, "tinta", 900))
for i in range(5):
    c.append(f'<path d="M306 {124 + i * 18} h108" stroke="{COR["linha"]}" stroke-width="5" stroke-linecap="round"/>')
c.append(t(360, 250, "total de votos da urna", 12, "azul", 800))
c.append(caixa(470, 50, 230, 200, cor="vermelho", fundo="vermelho_c", rx=14) + t(585, 76, "🛡️ contra a desinformação", 13, "vermelho", 900))
for i, e in enumerate(["🔎 conferir na Justiça Eleitoral", "⏸️ desconfiar de raiva e medo", "🙅 não repassar sem conferir", "🎭 deepfake: proibido pelo TSE", "🤝 respeitar quem pensa diferente"]):
    c.append(t(585, 110 + i * 28, e, 12, "tinta", 700))
fig("m8", "Fato O que diz",
    "A urna eletrônica, usada desde 1996, imprime o boletim de urna com o total de votos. Ao lado, um quadro vermelho com as atitudes contra a desinformação: conferir na Justiça Eleitoral, desconfiar de raiva e medo, não repassar sem conferir, deepfake proibido pelo TSE e respeitar quem pensa diferente.",
    720, 290, "".join(c), "Tecnologia nas eleições e cuidado com a informação.")

ICONES = {"m1": "🏙️", "m2": "📊", "m3": "📶", "m4": "💼", "m5": "🤖", "m6": "🌱", "m7": "♿", "m8": "🗳️", "rv": "🔁"}

try:
    from cenas_9_3 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-9ano-2027-3bim", F, ICONES))
