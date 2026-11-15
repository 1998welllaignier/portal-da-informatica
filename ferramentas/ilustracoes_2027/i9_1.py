"""Ilustrações — 9º ano — 1º bimestre de 2027 (informatica-9ano-2027-1bim): grafos, árvores, autômatos, eventos."""
from base import *
import math

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar"):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda)})


def grafo(V, E, caminho=(), cor_cam="verde", riscadas=(), destaque_v=None, r=30, size=13, peso_size=15):
    """V: {id: (x, y, rótulo)}; E: [(a, b, peso)]; caminho: lista de ids; riscadas: arestas (a, b) cortadas."""
    s = ""
    par = set()
    for i in range(len(caminho) - 1):
        par.add(frozenset((caminho[i], caminho[i + 1])))
    for a, b, p in E:
        (x1, y1, _), (x2, y2, _) = V[a], V[b]
        no = frozenset((a, b)) in par
        cort = (a, b) in riscadas or (b, a) in riscadas
        c = COR[cor_cam] if no else ("#cbd5e1" if cort else COR["suave"])
        s += f'<path d="M{x1} {y1} L{x2} {y2}" stroke="{c}" stroke-width="{7 if no else 3}" stroke-linecap="round"{" stroke-dasharray=\'8 6\'" if cort else ""}/>'
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        if cort:
            s += f'<path d="M{mx-12} {my-12} l24 24 M{mx+12} {my-12} l-24 24" stroke="{COR["vermelho"]}" stroke-width="4" stroke-linecap="round"/>'
        elif p != "":
            s += circulo(mx, my, 14, "amarelo" if not no else cor_cam, "papel", 2) + t(mx, my + 5, str(p), peso_size, "amarelo" if not no else cor_cam, 800)
    for vid, (x, y, rot) in V.items():
        d = destaque_v == vid
        no = vid in caminho
        s += circulo(x, y, r, "roxo" if d else ("verde" if no and cor_cam == "verde" else "azul"), "roxo_c" if d else ("verde_c" if no and cor_cam == "verde" else "azul_c"), 3)
        partes = rot.split("\n")
        s += linhas(x, y + 5 - (len(partes) - 1) * 7, partes, size, "tinta", 800, passo=14)
    return s


# ======================= M1 =======================
VB = {"C": (80, 160, "🏠 Casa"), "Pa": (300, 50, "🥖 Padaria"), "Pr": (300, 270, "🌳 Praça"), "E": (520, 160, "🏫 Escola")}
EB = [("C", "Pa", 3), ("Pa", "E", 2), ("C", "Pr", 4), ("Pr", "E", 4), ("C", "E", 9)]
c = [grafo(VB, EB, r=40, size=12)]
c.append(etiqueta(150, 34, "vértice (ponto)", "azul", 12) + seta(170, 42, 254, 46, "azul", 2.5))
c.append(etiqueta(110, 300, "aresta (ligação)", "suave", 12) + seta(140, 290, 180, 222, "suave", 2.5))
c.append(etiqueta(450, 300, "peso: 4 minutos", "amarelo", 12) + seta(440, 288, 418, 228, "amarelo", 2.5))
c.append(caixa(590, 60, 160, 120, cor="roxo", fundo="roxo_c", rx=12, larg=2) + t(670, 88, "grau da Casa = 3", 14, "roxo", 800) + linhas(670, 114, ["3 arestas saem", "dela: Padaria,", "Praça e Escola"], 12, "tinta", 600))
fig("m1", "Parte do grafo O que é No mapa da cidade", "O grafo do bairro: quatro vértices (Casa, Padaria, Praça, Escola) ligados por cinco arestas com pesos em minutos (3, 2, 4, 4 e 9). Etiquetas apontam um vértice, uma aresta e um peso; ao lado, o grau da Casa é 3.",
    770, 320, "".join(c), "Vértice = ponto · aresta = ligação · peso = número da aresta · grau = arestas que saem.")

c = []
caminhos = [(["C", "E"], "vermelho", "Casa → Escola (direto)", "9"), (["C", "Pr", "E"], "amarelo", "Casa → Praça → Escola", "4 + 4 = 8"), (["C", "Pa", "E"], "verde", "Casa → Padaria → Escola", "3 + 2 = 5 ✔")]
for i, (cam, cor, nome, soma) in enumerate(caminhos):
    ox = i * 250
    Vm = {k: (ox + 20 + (x - 80) * 0.42 + 20, 40 + (y - 50) * 0.5 + 20, "") for k, (x, y, _) in VB.items()}
    c.append(grafo(Vm, EB, caminho=cam, cor_cam=cor, r=13, peso_size=11))
    c.append(t(ox + 120, 210, nome, 13, cor, 800) + t(ox + 120, 234, soma, 17, cor, 800))
c.append(t(372, 268, "O mais curto é o de MENOR SOMA, não o de menos paradas.", 14, "tinta", 700))
fig("m1", "Caminho da Casa até a Escola Soma", "Três cópias do grafo do bairro, cada uma com um caminho destacado: a rua direta em vermelho soma 9; Casa, Praça, Escola em amarelo soma 8; Casa, Padaria, Escola em verde soma 5, o mais curto.",
    744, 284, "".join(c), "Três caminhos, três somas: ganha a menor.")

# ======================= M2 =======================
def no_arv(x, y, txt, cor="azul", w=128):
    return caixa(x - w / 2, y - 18, w, 36, cor=cor, fundo=cor + "_c", rx=10, larg=2.5) + t(x, y + 5, txt, 13, "tinta", 800)


c = []
pos = {"D": (360, 50), "E": (230, 140), "Fo": (500, 140), "r": (160, 230), "m": (310, 230), "a": (500, 230)}
for a, b in [("D", "E"), ("D", "Fo"), ("E", "r"), ("E", "m"), ("Fo", "a")]:
    (x1, y1), (x2, y2) = pos[a], pos[b]
    c.append(f'<path d="M{x1} {y1+18} L{x2} {y2-18}" stroke="{COR["suave"]}" stroke-width="3"/>')
c.append(no_arv(*pos["D"], "📁 Documentos", "roxo") + no_arv(*pos["E"], "📁 Escola", "azul") + no_arv(*pos["Fo"], "📁 Fotos", "azul"))
c.append(no_arv(*pos["r"], "📄 redação.txt", "verde", 140) + no_arv(*pos["m"], "📄 mapa.png", "verde", 128) + no_arv(*pos["a"], "📄 aniversário.jpg", "verde", 160))
for y, n in [(55, 0), (145, 1), (235, 2)]:
    c.append(t(14, y, f"nível {n}", 12, "suave", 800, "start"))
c.append(etiqueta(650, 40, "🌱 raiz (em cima)", "roxo", 12) + seta(590, 46, 428, 50, "roxo", 2.5))
c.append(etiqueta(660, 110, "pai de redação e mapa", "azul", 12) + seta(580, 114, 296, 132, "azul", 2.5, curva=-30))
c.append(etiqueta(420, 292, "🍃 folhas: sem filhos (no fim dos galhos)", "verde", 12))
c.append(seta(330, 280, 310, 252, "verde", 2) + seta(520, 280, 500, 252, "verde", 2))
fig("m2", "Parte O que é Nas pastas do computador", "A árvore de pastas desenhada de cabeça para baixo: a raiz Documentos em cima (nível 0); Escola e Fotos no nível 1; os arquivos redação.txt, mapa.png e aniversário.jpg são as folhas, no nível 2. Escola é pai de redação e mapa.",
    760, 310, "".join(c), "Raiz em cima, folhas embaixo: a árvore da computação é de cabeça para baixo.")

c = []
c.append(caixa(20, 20, 340, 230, cor="verde", fundo="verde_c", rx=16, larg=3) + t(190, 48, "✔ É ÁRVORE", 16, "verde", 800))
Va = {"A": (190, 80, "A"), "B": (110, 160, "B"), "C": (270, 160, "C"), "D": (70, 220, "D"), "E": (150, 220, "E")}
c.append(grafo(Va, [("A", "B", ""), ("A", "C", ""), ("B", "D", ""), ("B", "E", "")], r=18))
c.append(t(290, 222, "sem voltas", 12, "verde", 800))
c.append(caixa(384, 20, 340, 230, cor="vermelho", fundo="vermelho_c", rx=16, larg=3) + t(554, 48, "✖ NÃO É ÁRVORE: tem ciclo", 16, "vermelho", 800))
Vb = {"A": (554, 80, "A"), "B": (474, 170, "B"), "C": (634, 170, "C")}
c.append(grafo(Vb, [("A", "B", ""), ("B", "C", ""), ("A", "C", "")], r=18))
c.append(seta(600, 220, 510, 220, "vermelho", 3, curva=30) + t(554, 244, "A → B → C → A: volta ao começo", 12, "vermelho", 800))
fig("m2", "Regra Por quê Tem uma raiz", "À esquerda, em verde, uma árvore: A em cima, ligada a B e C; B ligada a D e E; sem voltas. À direita, em vermelho, um grafo com ciclo: A, B e C ligados em triângulo, dá para sair de A e voltar a A; por isso não é árvore.",
    744, 264, "".join(c), "Árvore não tem voltas: entre dois vértices há um só caminho.")

# ======================= M3 =======================
def pergunta(x, y, txt, w=190):
    return (f'<path d="M{x} {y-28} L{x+w/2} {y} L{x} {y+28} L{x-w/2} {y} Z" fill="{COR["amarelo_c"]}" stroke="{COR["amarelo"]}" stroke-width="2.5"/>'
            + t(x, y + 5, txt, 13, "tinta", 800))


c = []
c.append(pergunta(370, 46, "É eletrônico?", 200))
c.append(pergunta(190, 150, "Tem tela?", 170) + pergunta(550, 150, "Serve para escrever?", 210))
c.append(seta(300, 60, 220, 120, "verde", 3) + t(240, 84, "sim", 13, "verde", 800) + seta(440, 60, 520, 120, "vermelho", 3) + t(500, 84, "não", 13, "vermelho", 800))
folhas = [(100, "🖥️ Monitor", "verde"), (280, "⌨️ Teclado", "vermelho"), (460, "✏️ Lápis", "verde"), (640, "🪑 Cadeira", "vermelho")]
for i, (x, txt, cor) in enumerate(folhas):
    px = 190 if i < 2 else 550
    c.append(seta(px + (-40 if i % 2 == 0 else 40), 172, x, 222, cor, 2.5) + t((px + x) / 2 + (-30 if i % 2 == 0 else 30), 192, "sim" if i % 2 == 0 else "não", 12, cor, 800))
    c.append(caixa(x - 66, 228, 132, 40, cor="roxo", fundo="roxo_c", rx=20, larg=2.5) + t(x, 254, txt, 14, "tinta", 800))
c.append(t(370, 300, "◆ amarelo = pergunta · roxo = decisão (folha) · 4 folhas · profundidade 2", 13, "tinta", 700))
fig("m3", "Pergunta 1 Pergunta 2 Folha (resposta)", "Árvore de decisão: a pergunta da raiz é eletrônico? Pelo galho sim vem tem tela? (monitor ou teclado); pelo galho não vem serve para escrever? (lápis ou cadeira). As perguntas são losangos amarelos, os galhos sim são verdes, os não são vermelhos e as folhas roxas são as decisões.",
    760, 316, "".join(c), "Perguntas nos losangos, respostas nos galhos, decisões nas folhas.")

# ======================= M4 =======================
VE = {"Po": (60, 170, "Portão"), "Pt": (210, 170, "Pátio"), "Ca": (210, 290, "Cantina"), "In": (360, 70, "Informática"), "Bi": (360, 270, "Biblioteca")}
EE = [("Po", "Pt", 1), ("Pt", "Ca", 1), ("Pt", "In", 2), ("Pt", "Bi", 2), ("In", "Bi", 1)]
c = [grafo(VE, EE, destaque_v="Pt", r=38, size=11)]
tab = [("Pátio", "Portão, Cantina, Informática, Biblioteca", "4"), ("Portão", "Pátio", "1"), ("Informática", "Pátio, Biblioteca", "2")]
c.append(caixa(440, 40, 320, 34, cor="roxo", fundo="roxo", rx=0, larg=1) + t(500, 62, "vértice", 13, "#fff", 800) + t(640, 62, "vizinhos", 13, "#fff", 800) + t(740, 62, "grau", 13, "#fff", 800))
for i, (v_, viz, g) in enumerate(tab):
    y = 74 + i * 58
    c.append(caixa(440, y, 320, 58, cor="roxo", fundo="roxo_c" if i == 0 else "papel", rx=0, larg=1))
    c.append(t(500, y + 34, v_, 13, "tinta", 800))
    partes = viz.split(", ")
    c.append(linhas(640, y + 22 + (0 if len(partes) > 2 else 10), [", ".join(partes[:2]) + ("," if len(partes) > 2 else ""), ", ".join(partes[2:])] if len(partes) > 2 else [viz], 11, "tinta", 600, passo=16))
    c.append(t(740, y + 34, g, 16, "roxo", 800))
c.append(seta(248, 170, 436, 104, "roxo", 2.5, tracejada=True))
c.append(t(600, 280, "grau = tamanho da lista de vizinhos", 13, "roxo", 800))
fig("m4", "Vértice Vizinhos Pátio", "O grafo da escola ao lado da lista de vizinhos: o Pátio, destacado em roxo, tem os vizinhos Portão, Cantina, Informática e Biblioteca (grau 4); o Portão só tem o Pátio (grau 1); a Informática tem Pátio e Biblioteca (grau 2).",
    780, 344, "".join(c), "Para cada vértice, a lista dos vizinhos; o tamanho dela é o grau.")

c = ["<g transform=\"translate(24,0)\">"]
c.append(pergunta(150, 44, "É eletrônico?", 180))
c.append(pergunta(70, 140, "Tem tela?", 130) + pergunta(240, 140, "Escreve?", 130))
c.append(seta(110, 60, 80, 112, "verde", 2) + seta(190, 60, 230, 112, "vermelho", 2))
for x, txt in [(30, "Monitor"), (110, "Teclado"), (200, "Lápis"), (284, "Cadeira")]:
    c.append(caixa(x - 34, 196, 72, 30, cor="roxo", fundo="roxo_c", rx=15, larg=2) + t(x + 2, 216, txt, 11, "tinta", 800))
c.append(seta(70, 162, 34, 192, "verde", 2) + seta(70, 162, 110, 192, "vermelho", 2) + seta(240, 162, 200, 192, "verde", 2) + seta(240, 162, 284, 192, "vermelho", 2))
c.append("</g>")
c.append(seta(350, 130, 396, 130, "tinta", 4) + t(372, 116, "vira", 12, "suave", 800))
BLs = "#2563eb"
def lin_bloco(x, y, txt, cor):
    return f'<rect x="{x}" y="{y}" width="{330 - (x-400)}" height="26" rx="4" fill="{cor}"/>' + t(x + 8, y + 18, txt, 12, "#fff", 700, "start")
c.append(lin_bloco(400, 20, "se eletronico = verdadeiro  faça", BLs))
c.append(lin_bloco(420, 50, "se tela = verdadeiro  faça", "#3b82f6") + lin_bloco(440, 78, "mostrar “Monitor”", "#c2410c") + lin_bloco(420, 106, "senão", "#3b82f6") + lin_bloco(440, 134, "mostrar “Teclado”", "#c2410c"))
c.append(lin_bloco(400, 164, "senão", BLs))
c.append(lin_bloco(420, 194, "se escreve = verdadeiro  faça", "#3b82f6") + lin_bloco(440, 222, "mostrar “Lápis”", "#c2410c") + lin_bloco(420, 250, "senão", "#3b82f6") + lin_bloco(440, 278, "mostrar “Cadeira”", "#c2410c"))
c.append(t(150, 270, "pergunta = se · galho = faça/senão", 12, "tinta", 700) + t(150, 290, "folha = mostrar", 12, "tinta", 700))
fig("m4", "Árvore Blocos É eletrônico?", "À esquerda, a árvore de decisão dos objetos; à direita, os mesmos galhos em blocos: um se eletrônico com outro se tela dentro do faça e outro se escreve dentro do senão; as folhas viram blocos mostrar Monitor, Teclado, Lápis e Cadeira.",
    740, 314, "".join(c), "A árvore de decisão vira se dentro de se.")

# ======================= M5 =======================
def estado(x, y, txt, cor, r=56):
    return circulo(x, y, r, cor, cor + "_c", 4) + linhas(x, y + 6 - (len(txt) - 1) * 9, txt, 16, cor, 800, passo=20)


c = []
c.append(estado(200, 170, ["🔒", "Travada"], "vermelho") + estado(560, 170, ["🔓", "Liberada"], "verde"))
c.append(seta(255, 150, 505, 150, "azul", 3.5, curva=-50) + etiqueta(380, 92, "💳 cartão", "azul", 13))
c.append(seta(505, 192, 255, 192, "amarelo", 3.5, curva=50) + etiqueta(380, 270, "🚶 empurrar (gira, 1 passa)", "amarelo", 13))
c.append(f'<path d="M160 120 C 110 40, 250 40, 214 116" fill="none" stroke="{COR["amarelo"]}" stroke-width="3" marker-end="url(#p27-amarelo)"/>' + t(150, 52, "🚶 empurrar: não gira", 12, "amarelo", 800))
c.append(f'<path d="M546 116 C 520 40, 650 40, 604 124" fill="none" stroke="{COR["azul"]}" stroke-width="3" marker-end="url(#p27-azul)"/>' + t(620, 52, "💳 cartão: continua", 12, "azul", 800))
c.append(seta(40, 170, 140, 170, "tinta", 3) + t(60, 158, "início", 12, "tinta", 800, "start"))
fig("m5", "Estado atual Entrada Próximo estado O que acontece", "O autômato da catraca: dois estados em círculos, travada (vermelho, estado inicial) e liberada (verde). A seta cartão vai de travada para liberada; a seta empurrar vai de liberada para travada (uma pessoa passa). Empurrar com a catraca travada e passar o cartão com ela liberada voltam para o mesmo estado.",
    740, 300, "".join(c), "Círculos = estados · setas = transições, com a entrada escrita.")

# ======================= M6 =======================
c = []
c.append(t(20, 30, "tempo →", 13, "suave", 800, "start"))
c.append(seta(90, 26, 720, 26, "suave", 2.5))
ys = 70
c.append(caixa(20, ys, 150, 50, cor="rosa", fundo="rosa_c", rx=10, larg=2.5) + t(95, ys + 22, "começo:", 12, "rosa", 800) + t(95, ys + 40, "cliques = 0", 13, "tinta", 800, fonte=MONO))
for i in range(3):
    x = 230 + i * 170
    c.append(caixa(x, ys - 6, 120, 30, cor="suave", fundo="fundo", rx=15, larg=1.5, tracejada=True) + t(x + 60, ys + 14, "⏳ esperando…", 12, "suave", 700))
    c.append(emoji(x + 60, ys + 70, "🟢", 34) + t(x + 60, ys + 98, "👆 clique!", 13, "verde", 800))
    c.append(seta(x + 60, ys + 104, x + 60, ys + 132, "verde", 2.5))
    c.append(caixa(x, ys + 136, 120, 56, cor="amarelo", fundo="amarelo_c", rx=10, larg=2.5) + t(x + 60, ys + 158, "tratador roda:", 11, "amarelo", 800) + t(x + 60, ys + 178, f"cliques = {i+1}", 13, "tinta", 800, fonte=MONO))
    c.append(caixa(x + 30, ys + 202, 60, 30, cor="tinta", fundo="#0f172a", rx=6, larg=1) + t(x + 60, ys + 223, str(i + 1), 15, "#e2e8f0", 800, fonte=MONO))
c.append(t(380, 330, "Cada vez que o evento acontece, o mesmo tratador roda de novo.", 13, "tinta", 700))
fig("m6", "Evento (o que acontece) Tratador", "Linha do tempo de um programa por eventos: no começo, cliques = 0; o programa fica esperando; a cada clique no botão verde, o tratador roda, soma 1 e mostra 1, depois 2, depois 3.",
    760, 346, "".join(c), "O programa espera; cada evento faz o tratador rodar.")

# ======================= M7 =======================
c = []
cx, cy, R = 220, 170, 110
estados = [("🟢", "Verde", "verde", -90), ("🟡", "Amarelo", "amarelo", 30), ("🔴", "Vermelho", "vermelho", 150)]
pts = []
for ch, nome, cor, ang in estados:
    x = cx + R * math.cos(math.radians(ang)); y = cy + R * math.sin(math.radians(ang)); pts.append((x, y))
    c.append(estado(x, y, [ch, nome], cor, 46))
for i in range(3):
    (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % 3]
    dx, dy = x2 - x1, y2 - y1; d = math.hypot(dx, dy)
    sx, sy = x1 + dx / d * 50, y1 + dy / d * 50; ex, ey = x2 - dx / d * 52, y2 - dy / d * 52
    c.append(seta(round(sx), round(sy), round(ex), round(ey), "tinta", 3, curva=-28 if i != 1 else 28))
c.append(t(cx, cy + 6, "⏱️ tique", 14, "tinta", 800))
# semáforo
c.append(caixa(470, 40, 90, 230, cor="tinta", fundo="#1e293b", rx=16, larg=0))
for i, cor in enumerate(["vermelho", "amarelo", "verde"]):
    c.append(circulo(515, 84 + i * 70, 28, "tinta", COR[cor] if i == 2 else "#475569", 2))
c.append(f'<rect x="508" y="270" width="14" height="50" fill="#475569"/>')
c.append(etiqueta(650, 100, "estado: verde", "verde", 12) + t(650, 140, "a cada tique,", 12, "tinta", 700) + t(650, 158, "o próximo estado", 12, "tinta", 700))
fig("m7", "Estado atual Entrada Próximo estado 🟢 Verde ⏱️ tique", "O ciclo do semáforo como autômato: três estados em círculo (verde, amarelo, vermelho) ligados por setas tique, que voltam ao verde. Ao lado, um semáforo com a luz verde acesa.",
    740, 330, "".join(c), "Um ciclo que se repete: verde → amarelo → vermelho → verde.")

c = ["<g transform=\"translate(0,26)\">"]
c.append(estado(120, 110, ["🟢", "Verde"], "verde", 46) + estado(380, 110, ["🟡", "Amarelo"], "amarelo", 46) + estado(640, 110, ["🔴", "Vermelho"], "vermelho", 46))
c.append(seta(170, 96, 330, 96, "tinta", 3) + t(250, 84, "⏱️ tique", 12, "tinta", 800))
c.append(seta(430, 96, 590, 96, "tinta", 3) + t(510, 84, "⏱️ tique", 12, "tinta", 800))
c.append(seta(170, 130, 330, 130, "rosa", 4, curva=30) + etiqueta(250, 226, "🚶 botão: verde → amarelo", "rosa", 12) + seta(250, 210, 250, 154, "rosa", 2))
c.append(f'<path d="M352 66 C 330 0, 430 0, 408 66" fill="none" stroke="{COR["rosa"]}" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#p27-rosa)"/>' + t(380, -6, "🚶 botão: continua", 11, "rosa", 800))
c.append(f'<path d="M612 66 C 590 0, 690 0, 668 66" fill="none" stroke="{COR["rosa"]}" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#p27-rosa)"/>' + t(640, -6, "🚶 botão: continua", 11, "rosa", 800))
c.append(seta(640, 160, 120, 160, "suave", 2, tracejada=True, curva=60) + t(520, 226, "⏱️ tique: vermelho → verde", 11, "suave", 700) + "</g>")
fig("m7", "Estado atual Entrada Próximo estado 🟢 Verde 🚶 botão", "O semáforo com o botão de pedestre: além das setas tique (verde para amarelo, amarelo para vermelho), uma seta rosa grossa mostra que o botão leva o verde direto para o amarelo; no amarelo e no vermelho, o botão faz a seta voltar ao mesmo estado.",
    760, 276, "".join(c), "O botão só muda o semáforo quando ele está verde.")

# ======================= M8 =======================
VE2 = {"Po": (70, 170, "🚪 Portão"), "Pt": (250, 170, "Pátio"), "Ca": (250, 300, "🍽️ Cantina"), "In": (450, 60, "💻 Informática"), "Bi": (450, 280, "📚 Biblioteca")}
c = [grafo(VE2, EE, caminho=["Po", "Pt", "In"], cor_cam="verde", destaque_v="Pt", r=44, size=11)]
c.append(etiqueta(620, 120, "Pátio: grau 4 (mais conectado)", "roxo", 12) + seta(540, 128, 296, 166, "roxo", 2.5))
c.append(etiqueta(620, 220, "Portão → Pátio → Informática", "verde", 12) + t(620, 250, "1 + 2 = 3 minutos", 15, "verde", 800))
fig("m8", "Corredor (aresta) Minutos", "O grafo da escola: Portão, Pátio, Cantina, Sala de Informática e Biblioteca, com os minutos de cada corredor. O Pátio, em roxo, é o mais conectado (grau 4). O caminho mais curto do Portão à Informática está em verde: 1 + 2 = 3 minutos.",
    770, 360, "".join(c), "No grafo da escola, o Pátio liga tudo.")

c = [grafo(VE2, EE, caminho=["Po", "Pt", "Bi", "In"], cor_cam="amarelo", riscadas=[("Pt", "In")], destaque_v="Pt", r=44, size=11)]
c.append(etiqueta(630, 70, "🚧 corredor em reforma", "vermelho", 12) + seta(560, 76, 362, 112, "vermelho", 2.5))
c.append(etiqueta(630, 200, "novo caminho: Portão → Pátio →", "amarelo", 12) + t(630, 228, "Biblioteca → Informática", 13, "amarelo", 800) + t(630, 256, "1 + 2 + 1 = 4 minutos", 15, "amarelo", 800))
fig("m8", "Pergunta Como achar Resposta", "O mesmo grafo da escola com o corredor Pátio–Informática em reforma (aresta riscada em vermelho). O novo caminho mais curto, em amarelo, vai do Portão ao Pátio, à Biblioteca e à Informática: 1 + 2 + 1 = 4 minutos.",
    770, 360, "".join(c), "Tirou a aresta, o caminho mais curto muda.")

ICONES = {"m1": "🗺️", "m2": "🌳", "m3": "❓", "m4": "🧱", "m5": "🤖", "m6": "⚡", "m7": "🚦", "m8": "🏫", "rv": "🔁"}

if __name__ == "__main__":
    print("figuras:", gerar("informatica-9ano-2027-1bim", F, ICONES))
