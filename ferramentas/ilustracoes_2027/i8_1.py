"""Ilustrações — 8º ano — 1º bimestre de 2027 (informatica-8ano-2027-1bim): listas, buscas, ordenação, recursão."""
from base import *
import math

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar"):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda)})


def fila(x, y, itens, w=70, h=44, cor="roxo", marca=None, apagados=(), indices=True, gap=8, size=16):
    """Desenha uma lista em caixinhas. marca: {indice: cor} para destacar; apagados: índices cinzas."""
    s = ""
    marca = marca or {}
    for i, it in enumerate(itens):
        cx = x + i * (w + gap)
        if i in apagados:
            s += caixa(cx, y, w, h, cor="linha", fundo="fundo", rx=8, larg=1.5) + t(cx + w / 2, y + h / 2 + 6, str(it), size, "#94a3b8", 700)
        else:
            c = marca.get(i, cor)
            s += caixa(cx, y, w, h, cor=c, fundo=c + "_c", rx=8, larg=3 if i in marca else 2) + t(cx + w / 2, y + h / 2 + 6, str(it), size, "tinta", 800)
        if indices:
            s += t(cx + w / 2, y - 8, str(i + 1), 12, "suave", 800)
    return s


# ======================= M1 =======================
c = []
c.append(t(20, 80, "CHAMADA =", 15, "roxo", 800, "start", fonte=MONO))
c.append(fila(130, 56, ["Ana", "Bruno", "Carla", "Davi", "Elisa"], w=96, marca={2: "amarelo"}))
c.append(etiqueta(110, 30, "posição (índice) →", "suave", 11))
c.append(caixa(130, 140, 190, 36, cor="amarelo", fundo="amarelo_c", rx=8, larg=2) + t(225, 164, "CHAMADA[3] = Carla", 14, "amarelo", 800, fonte=MONO))
c.append(seta(270, 140, 360, 104, "amarelo", 2.5))
c.append(f'<path d="M130 196 v10 h512 v-10" fill="none" stroke="{COR["verde"]}" stroke-width="3"/>')
c.append(t(386, 230, "tamanho = 5 itens · a última posição (5) é igual ao tamanho", 14, "verde", 800))
fig("m1", "Posição 1 2 3 4 5 Lista CHAMADA", "A lista CHAMADA em cinco caixas com as posições 1 a 5 em cima (Ana, Bruno, Carla, Davi, Elisa). CHAMADA[3] aponta para Carla, destacada em amarelo; uma chave verde embaixo mostra que o tamanho é 5.",
    680, 246, "".join(c), "Cada item tem uma posição; o tamanho é quantos itens a lista tem.")

c = []
c.append(caixa(20, 20, 330, 220, cor="vermelho", fundo="vermelho_c", rx=16, larg=3) + t(185, 48, "✖ SEM LISTA: 19 variáveis soltas", 14, "vermelho", 800))
import random
random.seed(4)
for i in range(12):
    x = 40 + (i % 4) * 74 + random.randint(-6, 6); y = 64 + (i // 4) * 50 + random.randint(-5, 5)
    c.append(caixa(x, y, 66, 34, cor="vermelho", fundo="papel", rx=6, larg=1.5) + t(x + 33, y + 22, f"aluno{i+1}", 11, "tinta", 700))
c.append(t(185, 226, "…e mais 7. Mostrar todos = 19 comandos", 12, "vermelho", 700))
c.append(caixa(380, 20, 360, 220, cor="verde", fundo="verde_c", rx=16, larg=3) + t(560, 48, "✔ COM LISTA: 1 nome só", 14, "verde", 800))
c.append(t(400, 84, "CHAMADA =", 13, "verde", 800, "start", fonte=MONO))
for i in range(7):
    c.append(caixa(400 + i * 40, 96, 36, 34, cor="verde", fundo="papel", rx=5, larg=1.5) + t(418 + i * 40, 118, str(i + 1), 11, "tinta", 800))
c.append(t(684, 118, "… até 19", 12, "verde", 800, "start"))
c.append(caixa(410, 152, 300, 34, cor="azul", fundo="azul_c", rx=8, larg=2) + t(560, 174, "🔁 percorrer: 1 repetição mostra todos", 13, "azul", 800))
c.append(caixa(410, 196, 300, 34, cor="roxo", fundo="roxo_c", rx=8, larg=2) + t(560, 218, "➕ aluno novo? inserir na lista", 13, "roxo", 800))
fig("m1", "Sem lista Com lista 19 variáveis", "Comparação: sem lista, 19 variáveis soltas e bagunçadas (aluno1, aluno2…), em vermelho; com lista, uma fileira só chamada CHAMADA, em verde, que se percorre com uma repetição e recebe alunos novos.",
    760, 256, "".join(c), "A lista organiza muitos dados com um nome só.")

# ======================= M2 =======================
c = []
c.append(t(20, 30, "➖ Remover Bia", 15, "vermelho", 800, "start"))
c.append(fila(180, 34, ["Ana", "Bia", "Caio", "Duda"], w=80, marca={1: "vermelho"}))
c.append(t(560, 62, "tamanho 4", 13, "suave", 800, "start"))
c.append(f'<path d="M{180+88+6} {40} l68 32 M{180+88+68+6} {40} l-68 32" stroke="{COR["vermelho"]}" stroke-width="4"/>')
c.append(fila(180, 112, ["Ana", "Caio", "Duda"], w=80, marca={1: "verde", 2: "verde"}))
c.append(seta(396, 170, 316, 170, "verde", 2.5) + seta(484, 170, 404, 170, "verde", 2.5) + t(400, 188, "andaram para a frente", 11, "verde", 800))
c.append(t(560, 140, "tamanho 3 · Caio: 3 → 2", 13, "verde", 800, "start"))
c.append(t(20, 230, "➕ Inserir Gabi", 15, "azul", 800, "start") + t(20, 248, "na posição 1", 15, "azul", 800, "start"))
c.append(fila(180, 224, ["Ana", "Caio", "Duda"], w=80))
c.append(fila(180, 302, ["Gabi", "Ana", "Caio", "Duda"], w=80, marca={0: "azul"}, indices=False))
for i in range(3):
    c.append(seta(220 + i * 88, 272, 220 + (i + 1) * 88, 298, "azul", 2.5))
c.append(t(560, 330, "tamanho 4 · todos +1 posição", 13, "azul", 800, "start"))
fig("m2", "Operação O que faz O que acontece com as posições", "Duas operações na fila: ao remover Bia, Caio e Duda andam uma posição para a frente e o tamanho vai de 4 para 3; ao inserir Gabi na posição 1, Ana, Caio e Duda andam uma posição para trás e o tamanho vai para 4.",
    760, 362, "".join(c), "Remover: os de trás andam para a frente. Inserir no começo: todos andam para trás.")

c = []
notas = [8, 4, 6, 3, 9]
cont = 0
c.append(t(20, 62, "NOTAS", 14, "roxo", 800, "start", fonte=MONO))
c.append(fila(110, 38, notas, w=86, marca={0: "verde", 2: "verde", 4: "verde"}, cor="vermelho"))
for i, n in enumerate(notas):
    x = 110 + i * 94 + 43
    ok = n >= 5
    if ok:
        cont += 1
    c.append(t(x, 112, "≥ 5? ✔" if ok else "≥ 5? ✖", 13, "verde" if ok else "vermelho", 800))
    c.append(caixa(x - 26, 124, 52, 40, cor="rosa", fundo="rosa_c", rx=8, larg=2.5) + t(x, 151, str(cont), 18, "rosa", 800))
    c.append(t(x, 182, "+1" if ok else "fica", 12, "rosa" if ok else "suave", 800))
c.append(t(96, 150, "contador", 13, "rosa", 800, "end") + t(96, 166, "(era 0)", 11, "suave", 700, "end"))
c.append(t(380, 214, "Resposta: 3 notas azuis. O contador só soma quando o item passa no teste.", 13, "tinta", 600))
fig("m2", "Contar é percorrer a lista com uma variável contadora", "A lista de notas 8, 4, 6, 3, 9 percorrida da esquerda para a direita: a cada nota maior ou igual a 5 (em verde) o contador rosa soma 1; nas outras (em vermelho), fica. O contador termina em 3.",
    760, 230, "".join(c), "O contador começa em 0 e soma 1 a cada item que passa no teste.")

# ======================= M3 =======================
c = []
lista = [5, 8, 2, 9, 4]
for i, n in enumerate(lista):
    x = 40 + i * 120
    achou = n == 9
    olhou = i <= 3
    c.append(caixa(x, 40, 90, 110, cor="verde" if achou else ("azul" if olhou else "linha"), fundo="verde_c" if achou else ("azul_c" if olhou else "fundo"), rx=10, larg=3))
    c.append(t(x + 45, 108, str(n) if olhou else "?", 34, "tinta" if olhou else "suave", 800))
    c.append(t(x + 45, 30, f"posição {i+1}", 12, "suave", 800))
    if olhou:
        c.append(t(x + 45, 178, f"{i+1}ª comparação", 12, "verde" if achou else "azul", 800))
        c.append(t(x + 45, 198, "é o 9? " + ("SIM!" if achou else "não"), 12, "verde" if achou else "azul", 800))
c.append(emoji(40 + 3 * 120 + 45, 240, "👆", 30))
c.append(seta(60, 218, 380, 218, "azul", 2.5))
c.append(t(565, 178, "não precisou", 12, "suave", 700) + t(565, 194, "olhar", 12, "suave", 700))
c.append(t(320, 270, "Procurando o 9: olhou um por um, 4 comparações, achou na posição 4.", 13, "tinta", 600))
fig("m3", "Comparação Posição Item É o 9?", "Busca sequencial do 9 na lista 5, 8, 2, 9, 4: as cartas são viradas da posição 1 em diante; na 4ª comparação aparece o 9 (em verde). A carta da posição 5 nem precisou ser olhada.",
    640, 284, "".join(c), "Busca sequencial: uma comparação por item, do primeiro em diante.")

c = []
c.append(t(20, 40, "Lista com 1.000 itens", 15, "tinta", 800, "start"))
c.append(t(20, 80, "melhor caso", 13, "verde", 800, "start") + caixa(160, 64, 6, 24, cor="verde", fundo="verde", rx=2, larg=0) + t(176, 82, "1 comparação (era o 1º)", 13, "verde", 800, "start"))
c.append(t(20, 130, "pior caso", 13, "vermelho", 800, "start") + caixa(160, 114, 560, 24, cor="vermelho", fundo="vermelho", rx=4, larg=0) + t(440, 132, "1.000 comparações (era o último ou não estava)", 13, "#fff", 800))
c.append(t(380, 176, "Em listas grandes, a busca sequencial pode ficar lenta.", 13, "tinta", 600))
fig("m3", "Situação Comparações numa lista de 1.000 itens", "Duas barras: no melhor caso, a barra verde é minúscula (1 comparação); no pior caso, a barra vermelha atravessa tudo (1.000 comparações).",
    740, 190, "".join(c))

# ======================= M4 =======================
c = []
L = [3, 7, 12, 18, 25, 31, 40, 52]
c.append(t(20, 30, "1ª tentativa: posições 1 a 8 · meio = posição 4", 14, "tinta", 800, "start"))
c.append(fila(20, 52, L, w=70, marca={3: "amarelo"}))
c.append(t(330, 124, "18 · o 31 é MAIOR → joga fora a esquerda", 13, "amarelo", 800))
c.append(f'<path d="M16 46 h314 v56 h-314 z" fill="#94a3b8" fill-opacity=".18"/>')
c.append(f'<path d="M22 60 l300 30 M22 90 l300 -30" stroke="{COR["vermelho"]}" stroke-width="2.5" stroke-opacity=".7"/>')
c.append(t(20, 166, "2ª tentativa: posições 5 a 8 · meio = posição 6", 14, "tinta", 800, "start"))
c.append(fila(20, 188, L, w=70, marca={5: "verde"}, apagados=(0, 1, 2, 3)))
c.append(t(430, 256, "31 · ACHOU! (2 comparações)", 14, "verde", 800))
c.append(t(354, 290, "A sequencial olharia 6 cartas; a binária olhou 2.", 13, "suave", 700))
fig("m4", "Tentativa Parte que sobrou Meio Comparação", "Busca binária do 31 na lista ordenada: na 1ª tentativa o meio é a posição 4 (18, em amarelo); como 31 é maior, a metade da esquerda é riscada. Na 2ª tentativa, entre as posições 5 e 8, o meio é a posição 6: o 31, em verde, achado em 2 comparações.",
    680, 306, "".join(c), "Busca binária: sempre pelo meio, jogando fora metade.")

c = []
vals = [1000, 500, 250, 125, 63, 32, 16, 8, 4, 2, 1]
for i, v in enumerate(vals):
    w = max(6, v * 0.56)
    y = 20 + i * 24
    c.append(caixa(150, y, w, 18, cor="azul", fundo="azul", rx=3, larg=0) + t(144, y + 14, f"{v}", 12, "tinta", 700, "end"))
    if i:
        c.append(t(160 + w, y + 14, f"{i}ª comparação", 11, "azul", 700, "start"))
c.append(t(40, 14, "sobram:", 11, "suave", 800, "start"))
c.append(t(560, 200, "1.000 itens → no máximo", 14, "tinta", 700) + t(560, 226, "10 comparações", 20, "verde", 800))
fig("m4", "Itens na lista Comparações no pior caso (binária)", "Barras que encolhem pela metade a cada comparação da busca binária: 1.000, 500, 250, 125, 63, 32, 16, 8, 4, 2 e 1. Bastam 10 comparações para uma lista de 1.000 itens.",
    740, 290, "".join(c), "Cada comparação corta a lista pela metade.")

# ======================= M5 =======================
c = []
passadas = [([6, 3, 9, 1], [(0, True), (1, False), (2, True)], [3, 6, 1, 9]),
            ([3, 6, 1, 9], [(0, False), (1, True)], [3, 1, 6, 9]),
            ([3, 1, 6, 9], [(0, True)], [1, 3, 6, 9])]
for p, (antes, comps, depois) in enumerate(passadas):
    y = 30 + p * 110
    c.append(t(20, y + 30, f"{p+1}ª passada", 14, "tinta", 800, "start"))
    c.append(fila(130, y, antes, w=56, indices=False, cor="azul", apagados=tuple(range(4 - p, 4)) if p else ()))
    for (i, troca) in comps:
        xm = 130 + i * 64 + 60
        c.append(t(xm, y + 70, "⇄ troca" if troca else "= mantém", 11, "vermelho" if troca else "verde", 800))
    c.append(seta(390, y + 22, 440, y + 22, "tinta", 3))
    c.append(fila(452, y, depois, w=56, indices=False, cor="azul", marca={3 - p: "roxo"}))
    c.append(emoji(452 + (3 - p) * 64 + 28, y - 6, "🫧", 18))
c.append(t(380, 362, "A cada passada, o maior que falta sobe para o final (em roxo), como uma bolha.", 13, "tinta", 600))
fig("m5", "Passada Comparações e trocas Lista no fim da passada", "O método da bolha ordenando 6, 3, 9, 1 em três passadas: em cada passada os vizinhos são comparados (troca ou mantém) e o maior que falta vai para o final, marcado em roxo com uma bolha: 3, 6, 1, 9; depois 3, 1, 6, 9; depois 1, 3, 6, 9.",
    760, 380, "".join(c), "Compara vizinhos, troca os fora de ordem; o maior sobe como bolha.")

# ======================= M6 =======================
c = []
def boneca(cx, base, h, cor):
    r = h * 0.36
    return (f'<ellipse cx="{cx}" cy="{base - h*0.36}" rx="{r}" ry="{h*0.36}" fill="{COR[cor+"_c"]}" stroke="{COR[cor]}" stroke-width="3"/>'
            f'<circle cx="{cx}" cy="{base - h*0.78}" r="{h*0.22}" fill="{COR[cor+"_c"]}" stroke="{COR[cor]}" stroke-width="3"/>'
            f'<circle cx="{cx}" cy="{base - h*0.78}" r="{h*0.14}" fill="#f1c27d"/>'
            f'<circle cx="{cx - h*0.05}" cy="{base - h*0.8}" r="{max(1.2,h*0.018)}" fill="#1c1f22"/><circle cx="{cx + h*0.05}" cy="{base - h*0.8}" r="{max(1.2,h*0.018)}" fill="#1c1f22"/>'
            f'<path d="M{cx - r*0.8} {base - h*0.45} q{r*0.8} {h*0.12} {r*1.6} 0" fill="none" stroke="{COR[cor]}" stroke-width="2"/>')
alturas = [180, 130, 90, 56]; xs = [90, 270, 420, 540]
for i, (hh, x, cor) in enumerate(zip(alturas, xs, ["vermelho", "amarelo", "verde", "azul"])):
    c.append(boneca(x, 230, hh, cor))
    if i < 3:
        c.append(seta(x + hh * 0.42, 150, xs[i+1] - alturas[i+1] * 0.42 - 6, 150 + (180-alturas[i+1])*0.25, "azul", 2.5) + t((x + xs[i+1]) / 2, 122, "abre: dentro tem", 11, "azul", 800))
c.append(etiqueta(250, 270, "🔁 passo recursivo: abrir e repetir com a de dentro (menor)", "azul", 12))
c.append(etiqueta(620, 120, "🛑 caso base:", "vermelho", 12) + t(620, 146, "a menor não abre", 12, "vermelho", 800) + t(620, 162, "→ PARA", 12, "vermelho", 800))
c.append(seta(610, 172, 560, 196, "vermelho", 2.5))
fig("m6", "Parte O que é Na matrioska", "Quatro matrioskas lado a lado, cada uma menor: setas azuis mostram que ao abrir uma, dentro tem outra igual e menor (passo recursivo); a menor, apontada em vermelho, não abre e faz parar (caso base).",
    720, 290, "".join(c), "Recursão: o mesmo problema, cada vez menor, até o caso base.")

c = []
for i in range(4):
    x = 620 - i * 170
    c.append(boneco(x, 110, ["azul", "verde", "amarelo", "rosa"][i], 0.9))
    c.append(t(x, 168, "1º da fila" if i == 0 else ("você (4º)" if i == 3 else f"{i+1}º"), 13, "rosa" if i == 3 else "tinta", 800))
for i in range(3):
    xa = 110 + i * 170
    c.append(seta(xa + 30, 46, xa + 140, 46, "azul", 2.5) + t(xa + 85, 34, "“qual a sua posição?”", 11, "azul", 800))
    c.append(seta(xa + 140, 200, xa + 30, 200, "verde", 2.5) + t(xa + 85, 222, ["“sou o 3” → você: 4", "“sou o 2” → soma 1", "“sou o 1” → soma 1"][i], 11, "verde", 800))
c.append(etiqueta(620, 254, "caso base: “sou o 1”", "vermelho", 12))
fig("m6", "Exemplo: a fila do cinema", "A fila do cinema: cada pessoa pergunta a posição para quem está na frente (setas azuis), até o primeiro, que responde sou o 1 (caso base). As respostas voltam para trás (setas verdes), cada uma somando 1, até você saber que é o 4º.",
    740, 272, "".join(c), "As perguntas vão para a frente; as respostas voltam somando 1.")

c = []
chamadas = [("contar(3)", "mostra 3", "azul"), ("contar(2)", "mostra 2", "azul"), ("contar(1)", "mostra 1", "azul"), ("contar(0)", "“Fogo!” e PARA", "vermelho")]
for i, (ch, s_, cor) in enumerate(chamadas):
    x = 20 + i * 40; y = 20 + i * 56
    c.append(caixa(x, y, 300, 46, cor=cor, fundo=cor + "_c", rx=10, larg=2.5) + t(x + 16, y + 29, ch, 15, cor, 800, "start", fonte=MONO) + t(x + 280, y + 29, s_, 13, "tinta", 700, "end"))
    if i < 3:
        c.append(seta(x + 150, y + 48, x + 190, y + 54, "azul", 2.5))
c.append(etiqueta(540, 196, "caso base (n = 0)", "vermelho", 12))
c.append(caixa(500, 30, 200, 120, cor="tinta", fundo="#0f172a", rx=10, larg=2) + t(512, 50, "📺 Tela", 12, "#fbbf24", 700, "start")
         + "".join(t(516, 74 + k * 20, s_, 14, "#e2e8f0", 700, "start", fonte=MONO) for k, s_ in enumerate(["3", "2", "1", "Fogo!"])))
fig("m6", "Se… Então… n = 0", "A contagem recursiva como escada de chamadas: contar(3) mostra 3 e chama contar(2), que mostra 2 e chama contar(1), que mostra 1 e chama contar(0), o caso base, que mostra Fogo! e para. Ao lado, a tela com 3, 2, 1, Fogo!.",
    740, 250, "".join(c), "Cada chamada usa um número menor, até o caso base.")

# ======================= M7 =======================
c = []
rodadas = [([7, 2, 9, 4], 1, 0, [2, 7, 9, 4]), ([2, 7, 9, 4], 3, 1, [2, 4, 9, 7]), ([2, 4, 9, 7], 3, 2, [2, 4, 7, 9])]
for r, (antes, imin, alvo, depois) in enumerate(rodadas):
    y = 40 + r * 100
    c.append(t(20, y + 28, f"{r+1}ª rodada", 14, "tinta", 800, "start"))
    marca = {imin: "amarelo"}
    c.append(fila(120, y, antes, w=56, indices=False, cor="azul", marca=marca))
    for k in range(alvo):
        c.append(f'<rect x="{120 + k*64 - 3}" y="{y-3}" width="62" height="50" rx="9" fill="none" stroke="{COR["verde"]}" stroke-width="3"/>')
    c.append(t(120 + imin * 64 + 28, y + 64, "menor", 11, "amarelo", 800))
    if imin != alvo:
        xa, xb = 120 + alvo * 64 + 28, 120 + imin * 64 + 28
        c.append(f'<path d="M{xa} {y-6} Q{(xa+xb)/2} {y-30} {xb} {y-6}" fill="none" stroke="{COR["vermelho"]}" stroke-width="2.5" marker-end="url(#p27-vermelho)" marker-start="url(#p27-vermelho)"/>')
    c.append(seta(380, y + 22, 430, y + 22, "tinta", 3))
    c.append(fila(440, y, depois, w=56, indices=False, cor="azul", marca={k: "verde" for k in range(alvo + 1)}))
c.append(t(380, 340, "O menor do que sobrou (amarelo) troca com a próxima posição; a parte pronta fica em verde.", 13, "tinta", 600))
fig("m7", "Rodada Menor do que sobrou Troca Lista", "Ordenação por seleção de 7, 2, 9, 4 em três rodadas: em cada uma, o menor do que sobrou (em amarelo) troca de lugar com a próxima posição (seta vermelha de ida e volta), e o começo já ordenado fica em verde: 2, 7, 9, 4; 2, 4, 9, 7; 2, 4, 7, 9.",
    760, 356, "".join(c), "Seleção: escolhe o menor e coloca no começo, rodada após rodada.")

# ======================= M8 =======================
def sierpinski(x, y, lado, nivel, cor):
    if nivel == 0:
        h = lado * math.sqrt(3) / 2
        return f'<path d="M{x:.1f} {y:.1f} l{lado/2:.1f} {-h:.1f} l{lado/2:.1f} {h:.1f} z" fill="{cor}"/>'
    m = lado / 2; h = m * math.sqrt(3) / 2
    return sierpinski(x, y, m, nivel - 1, cor) + sierpinski(x + m, y, m, nivel - 1, cor) + sierpinski(x + m / 2, y - h, m, nivel - 1, cor)


c = []
for n, cor in zip(range(4), ["vermelho", "amarelo", "verde", "azul"]):
    x = 20 + n * 186
    c.append(sierpinski(x, 180, 160, n, COR[cor]))
    c.append(t(x + 80, 210, f"nível {n}", 14, cor, 800) + t(x + 80, 232, f"{3**n} triângulo" + ("s" if n else ""), 14, "tinta", 800))
    if n < 3:
        c.append(seta(x + 166, 120, x + 184, 120, "tinta", 2.5) + t(x + 176, 106, "×3", 12, "tinta", 800))
fig("m8", "Nível Regra Triângulos pintados", "O triângulo de Sierpinski nos níveis 0, 1, 2 e 3: cada triângulo vira 3 menores, com 1, 3, 9 e 27 triângulos pintados (cada nível multiplica por 3).",
    760, 250, "".join(c), "A mesma regra, repetida dentro de si: um fractal.")


def arvore(x, y, comp, ang, nivel, cor):
    if nivel == 0:
        return ""
    x2 = x + comp * math.cos(ang); y2 = y - comp * math.sin(ang)
    s = f'<path d="M{x:.1f} {y:.1f} L{x2:.1f} {y2:.1f}" stroke="{cor}" stroke-width="{max(1.5, nivel*1.4):.1f}" stroke-linecap="round"/>'
    return s + arvore(x2, y2, comp * 0.68, ang + 0.5, nivel - 1, cor) + arvore(x2, y2, comp * 0.68, ang - 0.5, nivel - 1, cor)


c = []
cores = ["#92400e", COR["verde"], COR["verde"], COR["verde"], COR["verde"], COR["verde"]]
c.append(arvore(230, 290, 80, math.pi / 2, 6, COR["verde"]))
c.append(f'<path d="M230 290 L230 210" stroke="#92400e" stroke-width="10" stroke-linecap="round"/>')
for i, (n, g) in enumerate([(1, 2), (2, 4), (3, 8), (4, 16), (5, 32)]):
    c.append(caixa(470, 30 + i * 50, 250, 40, cor="verde", fundo="verde_c", rx=10, larg=2) + t(595, 56 + i * 50, f"nível {n}: {g} galhos novos", 14, "verde", 800))
c.append(t(595, 290, "cada galho vira 2 → dobra a cada nível", 13, "tinta", 700))
fig("m8", "Nível Galhos novos", "Árvore fractal desenhada com recursão: o tronco se divide em 2 galhos, cada galho em 2 menores, e assim por diante. Ao lado, a tabela: nível 1, 2 galhos; nível 2, 4; nível 3, 8; nível 4, 16; nível 5, 32.",
    740, 306, "".join(c), "Cada galho é uma árvore menor: dobra a cada nível.")

ICONES = {"m1": "📝", "m2": "➕", "m3": "🔎", "m4": "🎯", "m5": "🫧", "m6": "🪆", "m7": "🏅", "m8": "❄️", "rv": "🔁"}

if __name__ == "__main__":
    print("figuras:", gerar("informatica-8ano-2027-1bim", F, ICONES))
