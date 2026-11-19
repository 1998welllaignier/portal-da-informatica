"""Ilustrações — 7º ano — 2º bimestre de 2027 (informatica-7ano-2027-2bim): Grafos e projetos."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def grafo(V, A, cam=(), destaque=(), r=30, cor_cam="verde", tracejadas=()):
    """V: {id: (x, y, rótulo, emoji)}; A: [(a, b, peso)]; cam: arestas destacadas [(a, b)]."""
    s = []
    no = lambda a, b, L: (a, b) in L or (b, a) in L
    for a, b, p in A:
        (x1, y1), (x2, y2) = V[a][:2], V[b][:2]
        c = COR[cor_cam] if no(a, b, cam) else COR["suave"]
        larg = 6 if no(a, b, cam) else 3
        s.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="{larg}" stroke-linecap="round"/>')
        if p is not None:
            mx, my = (x1 + x2) / 2, (y1 + y2) / 2
            s.append(caixa(mx - 17, my - 14, 34, 26, cor="amarelo", fundo="amarelo_c", rx=8, larg=2) + t(mx, my + 5, str(p), 14, "amarelo", 800))
    for a, b in tracejadas:
        (x1, y1), (x2, y2) = V[a][:2], V[b][:2]
        s.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{COR["roxo"]}" stroke-width="3" stroke-dasharray="8 7"/>')
    for k, (x, y, rot, em) in V.items():
        cor = "verde" if k in destaque else "azul"
        s.append(circulo(x, y, r, cor=cor, fundo=cor + "_c", larg=3) + emoji(x, y + 10, em, r * 0.95) + t(x, y + r + 20, rot, 14, "tinta", 800))
    return "".join(s)


# ======================= MISSÃO 1 =======================
V = {"E": (90, 210, "Escola", "🏫"), "P": (300, 70, "Praça", "🌳"), "M": (510, 210, "Mercado", "🛒")}
c = [grafo(V, [("E", "P", 5), ("P", "M", 4), ("E", "M", 12)])]
c.append(etiqueta(300, 22, "⚪ vértice = um lugar", "azul", 13))
c.append(etiqueta(300, 236, "➖ aresta = a rua (a linha)", "suave", 13))
c.append(etiqueta(190, 112, "🔢 peso = 5 minutos", "amarelo", 13))
c.append(etiqueta(300, 296, "🔗 grau da Praça = 2 (duas arestas chegam nela)", "verde", 13))
fig("m1", "Parte do grafo O que é Exemplo no mapa da cidade",
    "Grafo do bairro: Escola, Praça e Mercado são vértices; as linhas são arestas com os pesos 5, 4 e 12 minutos; etiquetas explicam vértice, aresta, peso e grau.",
    600, 310, "".join(c), "Vértices (pontos), arestas (linhas), pesos (números) e grau (quantas linhas chegam).")

# ======================= MISSÃO 2 =======================
V = {"C": (70, 170, "Casa", "🏠"), "Pa": (300, 50, "Padaria", "🥖"), "Pr": (300, 290, "Praça", "🌳"), "E": (530, 170, "Escola", "🏫")}
c = [grafo(V, [("C", "Pa", 3), ("Pa", "E", 2), ("C", "Pr", 4), ("Pr", "E", 4), ("C", "E", 9)], cam=[("C", "Pa"), ("Pa", "E")], destaque=("C", "E"))]
c.append(etiqueta(470, 70, "✅ 3 + 2 = 5 min", "verde", 14))
c.append(etiqueta(300, 200, "9 min (direto)", "suave", 12))
c.append(etiqueta(470, 280, "4 + 4 = 8 min", "suave", 13))
fig("m2", "Caminho Conta Total Casa → Escola (rua direta)",
    "Grafo do bairro com Casa, Padaria, Praça e Escola. O caminho Casa → Padaria → Escola aparece em verde, com 3 + 2 = 5 minutos; a rua direta leva 9 e o caminho pela Praça, 8.",
    600, 350, "".join(c), "O mais curto é o de menor soma, não o de menos paradas.")

# ======================= MISSÃO 3 =======================
V = {"A": (240, 160, "Ana", "👧"), "B": (80, 60, "Bia", "👩"), "C": (80, 270, "Caio", "👦"), "D": (400, 160, "Davi", "🧑"), "E": (540, 270, "Eva", "👱‍♀️")}
c = [grafo(V, [("A", "B", None), ("A", "C", None), ("A", "D", None), ("B", "C", None), ("D", "E", None)], destaque=("A",), tracejadas=[("A", "E")])]
c.append(etiqueta(240, 80, "grau 3: mais conexões", "verde", 13))
c.append(etiqueta(460, 70, "💡 sugestão: Eva? (amiga do Davi)", "roxo", 13))
fig("m3", "Pessoa Amigos Grau Ana",
    "Grafo de amizades: Ana ligada a Bia, Caio e Davi (grau 3, em destaque); Bia ligada a Caio; Davi ligado a Eva. Uma linha tracejada roxa entre Ana e Eva mostra a sugestão de amizade pelo amigo em comum, Davi.",
    620, 330, "".join(c), "A rede social sugere os amigos dos seus amigos.")

# ======================= MISSÃO 4 =======================
c = []
c.append(caixa(10, 10, 190, 230, cor="azul", fundo="azul_c", rx=14, larg=2.5) + t(105, 40, "📝 Lista", 17, "azul", 800))
for i, m in enumerate(["1. Música A", "2. Música B", "3. Música C", "4. Música D"]):
    c.append(caixa(30, 58 + i * 40, 150, 32, cor="azul", fundo="papel", rx=6, larg=1.5) + t(105, 79 + i * 40, m, 13, "tinta", 700))
c.append(t(105, 230, "ordem importa", 12, "azul", 700))
c.append(caixa(215, 10, 220, 230, cor="amarelo", fundo="amarelo_c", rx=14, larg=2.5) + t(325, 40, "🗂️ Tabela", 17, "amarelo", 800))
cols = ["Nome", "Turma", "Nota"]
linhas_ = [["Ana", "7º A", "8,5"], ["Caio", "7º A", "7,0"], ["Eva", "7º B", "9,0"]]
for j, cc in enumerate(cols):
    c.append(caixa(230 + j * 64, 58, 62, 30, cor="amarelo", fundo="amarelo", rx=4, larg=0) + t(261 + j * 64, 78, cc, 12, "#fff", 800))
for i, ln in enumerate(linhas_):
    for j, v in enumerate(ln):
        c.append(caixa(230 + j * 64, 92 + i * 34, 62, 30, cor="amarelo", fundo="papel", rx=4, larg=1.5) + t(261 + j * 64, 112 + i * 34, v, 12, "tinta", 600))
c.append(t(325, 212, "cada linha = um registro", 12, "amarelo", 700))
c.append(t(325, 230, "cada coluna = um campo", 12, "amarelo", 700))
c.append(caixa(450, 10, 200, 230, cor="verde", fundo="verde_c", rx=14, larg=2.5) + t(550, 40, "🕸️ Grafo", 17, "verde", 800))
pts = {"a": (500, 90), "b": (610, 90), "c": (500, 180), "d": (610, 180)}
for a, b in [("a", "b"), ("a", "c"), ("b", "d"), ("c", "d"), ("a", "d")]:
    c.append(f'<line x1="{pts[a][0]}" y1="{pts[a][1]}" x2="{pts[b][0]}" y2="{pts[b][1]}" stroke="{COR["verde"]}" stroke-width="3"/>')
for x, y in pts.values():
    c.append(circulo(x, y, 16, cor="verde", fundo="papel", larg=3))
c.append(t(550, 230, "ligações importam", 12, "verde", 700))
fig("m4", "Estrutura Como é Serve para Exemplo",
    "Três painéis: uma lista de músicas numeradas em ordem; uma tabela com as colunas Nome, Turma e Nota, em que cada linha é um registro; e um grafo com quatro pontos ligados.",
    660, 250, "".join(c), "Ordem → lista · várias informações → tabela · ligações → grafo.")

# ======================= MISSÃO 5 =======================
c = []
papeis = [("🧭", "Organizador", "cuida do tempo", "azul"), ("🔎", "Pesquisador", "junta os dados", "roxo"), ("🛠️", "Construtor", "monta o grafo", "amarelo"), ("🧪", "Testador", "confere", "verde")]
for i, (ic, nome, faz, cor) in enumerate(papeis):
    x = 14 + i * 162
    c.append(caixa(x, 14, 148, 170, cor=cor, fundo=cor + "_c", rx=14, larg=2.5) + emoji(x + 74, 80, ic, 44) + t(x + 74, 130, nome, 15, cor, 800) + t(x + 74, 158, faz, 13, "tinta", 600))
c.append(t(330, 214, "Cada pessoa tem um papel, e todos são importantes.", 14, "suave", 700))
fig("m5", "Papel O que faz Organizador",
    "Quatro cartões de papéis da equipe: organizador (cuida do tempo), pesquisador (junta os dados), construtor (monta o grafo) e testador (confere).",
    660, 226, "".join(c), "Os papéis da equipe.")

# ======================= MISSÃO 6 =======================
c = []
cx, cy, R = 330, 150, 105
etapas = [("🛠️", "Construir", "amarelo", -90), ("🧪", "Testar", "verde", 0), ("💬", "Ouvir", "roxo", 90), ("🔁", "Melhorar", "azul", 180)]
import math
pos = []
for ic, nome, cor, ang in etapas:
    a = math.radians(ang)
    x, y = cx + R * 1.6 * math.cos(a), cy + R * math.sin(a)
    pos.append((x, y))
for i in range(4):
    (x1, y1), (x2, y2) = pos[i], pos[(i + 1) % 4]
    sx, sy = x1 + (x2 - x1) * 0.3, y1 + (y2 - y1) * 0.3
    ex, ey = x1 + (x2 - x1) * 0.7, y1 + (y2 - y1) * 0.7
    c.append(seta(sx, sy, ex, ey, "suave", 3))
for (ic, nome, cor, ang), (x, y) in zip(etapas, pos):
    c.append(circulo(x, y, 40, cor=cor, fundo=cor + "_c", larg=3) + emoji(x, y + 12, ic, 34) + t(x, y + 60, nome, 14, cor, 800))
c.append(t(cx, cy - 4, "cada volta =", 13, "suave", 700) + t(cx, cy + 16, "uma versão nova", 13, "suave", 800))
fig("m6", "Passo O que fazer 🛠️ 1. Construir",
    "Ciclo do projeto em quatro círculos ligados por setas: construir, testar, ouvir e melhorar; no centro, a frase: cada volta é uma versão nova.",
    660, 320, "".join(c), "Construir, testar, ouvir e melhorar.")

# ======================= MISSÃO 7 =======================
V = {"Es": (70, 170, "Escola", "🏫"), "Pr": (260, 50, "Praça", "🌳"), "Ig": (500, 50, "Igreja", "⛪"), "Fe": (260, 290, "Feira", "🍉"), "Ro": (510, 290, "Rodoviária", "🚌")}
c = [grafo(V, [("Es", "Pr", 6), ("Pr", "Ig", 2), ("Pr", "Fe", 4), ("Es", "Fe", 9), ("Fe", "Ro", 5), ("Ig", "Ro", 8)], cam=[("Es", "Fe"), ("Fe", "Ro")], destaque=("Es", "Ro"))]
c.append(etiqueta(380, 372, "✅ Escola → Feira → Rodoviária = 9 + 5 = 14 min", "verde", 13))
fig("m7", "Aresta Peso (minutos de caminhada) Escola – Praça",
    "Grafo com Escola, Praça, Igreja, Feira e Rodoviária e os tempos inventados de caminhada. O caminho mais curto da Escola até a Rodoviária, pela Feira, aparece em verde: 14 minutos.",
    620, 392, "".join(c), "Tempos inventados para o exercício: o importante é o jeito de pensar.")

# ======================= MISSÃO 8 =======================
c = []
lab = ["E..#", ".#..", "...#", "#..S"]
L = 50
for r, ln in enumerate(lab):
    for k, ch in enumerate(ln):
        x, y = 20 + k * L, 30 + r * L
        c.append(caixa(x, y, L, L, cor="linha", fundo="tinta" if ch == "#" else "papel", rx=2, larg=1.5))
        if ch == "E":
            c.append(t(x + 25, y + 32, "🚪", 22))
        if ch == "S":
            c.append(t(x + 25, y + 32, "🏁", 22))
c.append(t(120, 254, "Labirinto", 15, "tinta", 800))
c.append(seta(240, 130, 300, 130, "amarelo", 4) + t(270, 108, "vira", 12, "amarelo", 800))
V = {"en": (340, 50, "entrada", "🚪"), "x1": (340, 200, "cruzamento", "✳️"), "b1": (500, 60, "beco", "🚫"), "x2": (500, 200, "cruzamento", "✳️"), "sa": (590, 300, "saída", "🏁")}
c.append(grafo(V, [("en", "x1", None), ("x1", "x2", None), ("x2", "b1", None), ("x2", "sa", None)], r=24))
c.append(t(470, 360, "Grafo", 15, "tinta", 800))
fig("m8", "No labirinto No grafo Entrada e saída",
    "À esquerda, um labirinto quadriculado com entrada e saída; à direita, o mesmo labirinto como grafo: entrada, dois cruzamentos, um beco sem saída e a saída, ligados por arestas (os corredores).",
    660, 380, "".join(c), "Cruzamentos e becos viram vértices; corredores viram arestas.")

ICONES = {"m1": "🕸️", "m2": "🧭", "m3": "🤝", "m4": "🗂️", "m5": "📋", "m6": "🛠️", "m7": "🗺️", "m8": "🌀", "rv": "🔁"}

if __name__ == "__main__":
    print("figuras:", gerar("informatica-7ano-2027-2bim", F, ICONES))
