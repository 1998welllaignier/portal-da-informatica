"""Ilustrações — 7º ano — 1º bimestre de 2027 (informatica-7ano-2027-1bim): programação em blocos."""
from base import *

F = []
# cores dos blocos iguais às do editor
BL = {"mostrar": "#c2410c", "repita": "#16a34a", "se": "#2563eb", "var": "#be185d", "lista": "#7c3aed", "ficha": "#9333ea", "func": "#9333ea", "texto": "#0d9488"}


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar"):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda)})


def bloco(x, y, texto, cor="mostrar", w=None, h=30):
    c = BL.get(cor, cor); w = w or max(90, int(len(texto) * 7.6) + 24)
    return (f'<path d="M{x} {y} h12 l5 5 h10 l5 -5 h{w-32} v{h} h{-(w-32)} l-5 5 h-10 l-5 -5 h-12 z" fill="{c}" stroke="#0f172a" stroke-width="1" stroke-opacity=".3"/>'
            + t(x + 10, y + h / 2 + 5, texto, 13, "#fff", 700, "start"))


def bloco_c(x, y, topo, filhos_h, cor="repita", w=200, rodape=""):
    """Bloco em forma de C (repita, se, para cada): topo, boca de altura filhos_h e base."""
    c = BL.get(cor, cor)
    return (f'<path d="M{x} {y} h{w} v30 h{-(w-18)} v{filhos_h} h{w-18} v18 h{-w} z" fill="{c}" stroke="#0f172a" stroke-width="1" stroke-opacity=".3"/>'
            + t(x + 10, y + 20, topo, 13, "#fff", 700, "start") + (t(x + 10, y + 30 + filhos_h + 14, rodape, 12, "#fff", 700, "start") if rodape else ""))


def tela(x, y, w, linhas_, cor_borda="tinta", titulo="📺 Tela do programa", h=None):
    h = h or 34 + len(linhas_) * 20
    return (caixa(x, y, w, h, cor=cor_borda, fundo="#0f172a", rx=10, larg=2)
            + t(x + 12, y + 20, titulo, 12, "#fbbf24", 700, "start")
            + "".join(t(x + 14, y + 42 + i * 20, s, 14, "#e2e8f0", 700, "start", fonte=MONO) for i, s in enumerate(linhas_)))


# ======================= M1 =======================
c = []
c.append(t(130, 22, "➡️ SEQUÊNCIA", 15, "tinta", 800))
c.append(bloco(30, 36, "mostrar “Acordei”", "mostrar") + bloco(30, 71, "mostrar “Escovei”", "mostrar") + bloco(30, 106, "mostrar “Café!”", "mostrar"))
c.append(seta(190, 90, 190, 150, "tinta", 2) + t(212, 124, "de cima", 11, "suave", 700, "start") + t(212, 138, "para baixo", 11, "suave", 700, "start"))
c.append(tela(20, 180, 220, ["Acordei", "Escovei", "Café!"]))
c.append(t(380, 22, "🔁 REPETIÇÃO", 15, "repita", 800))
c.append(bloco_c(280, 36, "repita 3 vezes", 36, "repita", 200) + bloco(298, 66, "mostrar “pulo”", "mostrar"))
c.append(t(380, 150, "o de dentro roda 3 vezes", 12, "repita", 800))
c.append(tela(270, 180, 220, ["pulo", "pulo", "pulo"]))
c.append(t(624, 22, "🔀 SELEÇÃO", 15, "se", 800))
c.append(bloco_c(530, 36, "se nota ≥ 5  faça", 36, "se", 200) + bloco(548, 66, "mostrar “passou”", "mostrar"))
c.append(f'<path d="M530 120 h200 v30 h-182 v36 h182 v18 h-200 z" fill="{BL["se"]}" fill-opacity=".55"/>' + t(540, 140, "senão", 13, "#fff", 700, "start") + bloco(548, 150, "mostrar “recuperação”", "mostrar"))
c.append(tela(520, 220, 220, ["passou   (se nota = 7)"]))
c.append(t(624, 300, "escolhe UM dos caminhos", 12, "se", 800))
fig("m1", "Bloco O que faz Exemplo 📺 mostrar na tela", "Três programas em blocos com a tela do lado: sequência (três blocos mostrar, executados de cima para baixo), repetição (repita 3 vezes com mostrar pulo dentro, que aparece 3 vezes) e seleção (se nota maior ou igual a 5 mostra passou, senão mostra recuperação).",
    760, 312, "".join(c), "Laranja = mostrar · verde = repetição · azul = seleção (as mesmas cores do editor).")

c = []
c.append(t(185, 22, "“fim” DENTRO do repita", 15, "vermelho", 800))
c.append(bloco_c(40, 36, "repita 3 vezes", 72, "repita", 210) + bloco(58, 66, "mostrar “pulo”", "mostrar") + bloco(58, 100, "mostrar “fim”", "#dc2626"))
c.append(tela(40, 176, 260, ["pulo", "fim", "pulo", "fim", "pulo", "fim"]))
c.append(t(170, 372, "✖ “fim” apareceu 3 vezes", 13, "vermelho", 800))
c.append(t(560, 22, "“fim” EMBAIXO do repita (fora)", 15, "verde", 800))
c.append(bloco_c(440, 36, "repita 3 vezes", 36, "repita", 210) + bloco(458, 66, "mostrar “pulo”", "mostrar") + bloco(440, 120, "mostrar “fim”", "#16a34a"))
c.append(tela(440, 176, 260, ["pulo", "pulo", "pulo", "fim"]))
c.append(t(570, 372, "✔ “fim” aparece 1 vez, no final", 13, "verde", 800))
fig("m1", "Atenção à ordem: se o", "Comparação: com o bloco mostrar fim dentro do repita, a tela mostra pulo e fim três vezes; com o bloco mostrar fim embaixo do repita, do lado de fora, a tela mostra três pulos e fim uma vez só.",
    760, 386, "".join(c), "A posição do bloco muda o resultado.")

c = []
c.append(bloco(20, 40, "definir nota para 7", "var", 200))
c.append(seta(226, 55, 300, 80, "rosa", 3))
c.append(f'<path d="M310 70 l40 -26 h120 l-40 26 z" fill="{COR["rosa_c"]}" stroke="{COR["rosa"]}" stroke-width="2.5"/>'
         + caixa(310, 70, 120, 80, cor="rosa", fundo="rosa_c", rx=4, larg=2.5) + t(370, 122, "7", 34, "rosa", 800))
c.append(etiqueta(370, 178, "caixinha “nota”", "rosa", 13))
c.append(seta(440, 110, 520, 110, "rosa", 3))
c.append(bloco_c(530, 80, "se nota ≥ 5", 34, "se", 200) + bloco(548, 110, "mostrar “passou”", "mostrar"))
c.append(t(370, 214, "A variável guarda o valor; depois o programa usa o que está na caixinha.", 13, "tinta", 600))
fig("m1", "Uma variável é uma caixinha com nome", "O bloco definir nota para 7 guarda o número 7 numa caixinha chamada nota; depois, o bloco se nota maior ou igual a 5 lê o valor da caixinha para decidir.",
    760, 228, "".join(c), "Variável = caixinha com nome que guarda um valor.")

# ======================= M2 =======================
def lista_fila(x, y, itens, cor="lista", destaque=None, w=96):
    s = ""
    for i, it in enumerate(itens):
        d = destaque == i + 1
        s += caixa(x + i * (w + 8), y, w, 46, cor="amarelo" if d else "roxo", fundo="amarelo_c" if d else "roxo_c", rx=8, larg=3 if d else 2)
        s += t(x + i * (w + 8) + w / 2, y + 29, it, 15, "tinta", 700)
        s += circulo(x + i * (w + 8) + w / 2, y - 16, 13, "roxo", "roxo", 0) + t(x + i * (w + 8) + w / 2, y - 11, str(i + 1), 13, "#fff", 800)
    return s


c = []
c.append(t(20, 82, "frutas =", 16, "roxo", 800, "start", fonte=MONO))
c.append(lista_fila(150, 52, ["maçã", "uva", "caju", "açaí"], destaque=3))
c.append(etiqueta(80, 30, "posição →", "roxo", 11))
c.append(bloco(150, 140, "em lista frutas obter # 3", "lista", 230))
c.append(seta(266, 140, 368, 104, "amarelo", 3))
c.append(t(470, 166, "→ caju", 16, "amarelo", 800, "start"))
c.append(f'<path d="M150 214 v10 h408 v-10" fill="none" stroke="{COR["verde"]}" stroke-width="3"/>')
c.append(bloco(150, 236, "tamanho de frutas", "lista", 180) + t(350, 258, "→ 4 (quantos itens)", 15, "verde", 800, "start"))
fig("m2", "Posição 1 2 3 4 Item da lista frutas", "A lista frutas desenhada como quatro caixas numeradas de 1 a 4 (maçã, uva, caju, açaí). O bloco obter item 3 aponta para caju; a chave embaixo mostra que o tamanho da lista é 4.",
    600, 280, "".join(c), "As posições começam no 1; o tamanho é quantos itens a lista tem.")

c = []
c.append(lista_fila(40, 40, ["maçã", "uva", "caju", "açaí"], w=110))
for i in range(4):
    x = 40 + i * 118 + 55
    c.append(emoji(x, 122, "👉", 26) + t(x, 148, f"{i+1}ª volta", 12, "verde", 800))
c.append(seta(80, 168, 440, 168, "verde", 3))
c.append(bloco_c(40, 186, "para cada item f na lista frutas", 34, "repita", 300) + bloco(58, 216, "mostrar f", "mostrar"))
c.append(tela(380, 186, 200, ["maçã", "uva", "caju", "açaí"]))
fig("m2", "Bloco O que faz Com a lista frutas", "O para cada passa por cada item da lista, um de cada vez: na 1ª volta f é maçã, na 2ª uva, na 3ª caju, na 4ª açaí; o bloco mostrar f de dentro escreve cada fruta numa linha da tela.",
    600, 316, "".join(c), "O para cada dá uma volta para cada item, sem você contar quantos são.")

# ======================= M3 =======================
c = []
c.append(caixa(150, 20, 320, 200, cor="roxo", fundo="papel", rx=16, larg=3))
c.append(caixa(150, 20, 320, 44, cor="roxo", fundo="roxo", rx=16, larg=0) + t(310, 50, "🗂️ ficha aluno", 17, "#fff", 800))
for i, (k, v) in enumerate([("nome", "Ana"), ("idade", "12"), ("turma", "7º A")]):
    y = 82 + i * 44
    c.append(caixa(170, y, 110, 34, cor="roxo", fundo="roxo_c", rx=8, larg=2) + t(225, y + 23, k, 14, "roxo", 800))
    c.append(caixa(300, y, 150, 34, cor="tinta", fundo="papel", rx=8, larg=2) + t(375, y + 23, v, 15, "tinta", 700))
c.append(etiqueta(70, 104, "nome do campo", "roxo", 12) + seta(70, 112, 166, 146, "roxo", 2.5))
c.append(etiqueta(560, 104, "valor", "tinta", 12) + seta(560, 112, 454, 146, "tinta", 2.5))
c.append(t(310, 246, "Na ficha, achamos a informação pelo NOME do campo (na lista, era pela posição).", 13, "tinta", 600))
fig("m3", "Ficha (registro) do aluno", "Uma ficha chamada aluno com três campos: à esquerda o nome de cada campo (nome, idade, turma) e à direita o valor (Ana, 12, 7º A). Etiquetas apontam o nome do campo e o valor.",
    640, 260, "".join(c), "Registro = ficha com campos: cada campo tem nome e valor.")

c = []
for i, (n, ida, tu) in enumerate([("Ana", "12", "7º A"), ("Bia", "13", "7º B"), ("Caio", "12", "7º A")]):
    x = 20 + i * 70; y = 30 + i * 18
    c.append(caixa(x, y, 150, 104, cor="roxo", fundo="roxo_c", rx=10, larg=2) + t(x + 75, y + 24, "🗂️ ficha", 13, "roxo", 800)
             + t(x + 75, y + 50, f"nome: {n}", 12, "tinta", 700) + t(x + 75, y + 70, f"idade: {ida}", 12, "tinta", 700) + t(x + 75, y + 90, f"turma: {tu}", 12, "tinta", 700))
c.append(seta(320, 110, 380, 110, "tinta", 4) + t(350, 96, "vira", 12, "suave", 800))
cab = ["nome", "idade", "turma"]
for j, s_ in enumerate(cab):
    c.append(caixa(392 + j * 100, 40, 100, 34, cor="roxo", fundo="roxo", rx=0, larg=1) + t(442 + j * 100, 62, s_, 14, "#fff", 800))
for r, ln in enumerate([("Ana", "12", "7º A"), ("Bia", "13", "7º B"), ("Caio", "12", "7º A")]):
    for j, s_ in enumerate(ln):
        c.append(caixa(392 + j * 100, 74 + r * 34, 100, 34, cor="roxo", fundo="papel" if r % 2 else "roxo_c", rx=0, larg=1) + t(442 + j * 100, 96 + r * 34, s_, 14, "tinta", 700))
c.append(etiqueta(500, 214, "cada ficha = uma linha · cada campo = uma coluna", "roxo", 12))
fig("m3", "E dá para juntar os dois", "Três fichas de alunos empilhadas (Ana, Bia, Caio) viram uma tabela: cada ficha é uma linha e cada campo (nome, idade, turma) é uma coluna.",
    720, 236, "".join(c), "Uma lista de fichas é uma tabela.")

# ======================= M4 =======================
c = []
c.append(t(140, 24, "🎯 ESPERADO", 15, "verde", 800) + t(420, 24, "📺 OBTIDO", 15, "vermelho", 800))
esp = ["pulo", "pulo", "pulo", "fim"]; obt = ["pulo", "fim", "pulo", "fim"]
for i in range(4):
    y = 40 + i * 34
    c.append(caixa(40, y, 200, 30, cor="verde", fundo="verde_c", rx=6, larg=1.5) + t(60, y + 21, f"{i+1}  {esp[i]}", 14, "tinta", 700, "start", fonte=MONO))
    bad = esp[i] != obt[i]
    c.append(caixa(320, y, 200, 30, cor="vermelho" if bad else "linha", fundo="vermelho_c" if bad else "papel", rx=6, larg=2.5 if bad else 1.5) + t(340, y + 21, f"{i+1}  {obt[i]}", 14, "tinta", 700, "start", fonte=MONO))
c.append(emoji(280, 104, "🔍", 34))
c.append(etiqueta(560, 132, "começa na linha 2", "vermelho", 12, ancora="start") + seta(600, 118, 528, 92, "vermelho", 2.5))
c.append(t(280, 196, "O portal avisa: “A linha 2 mostrou fim, mas devia mostrar pulo”.", 13, "tinta", 600))
fig("m4", "Erro O que acontece Exemplo", "Comparação entre o resultado esperado (pulo, pulo, pulo, fim, em verde) e o obtido (pulo, fim, pulo, fim). A lupa e a etiqueta vermelha mostram que a diferença começa na linha 2.",
    760, 214, "".join(c), "Comparar o obtido com o esperado mostra onde está o bug.")

c = []
passos = [("▶️", "1. Rodar", "azul"), ("⚖️", "2. Comparar", "amarelo"), ("🔍", "3. Achar o bloco", "roxo"), ("🔧", "4. Mudar UMA coisa", "verde")]
for i, (ch, s_, cor) in enumerate(passos):
    x = 20 + i * 184
    c.append(caixa(x, 20, 164, 110, cor=cor, fundo=cor + "_c", rx=16, larg=3) + emoji(x + 82, 72, ch, 36) + t(x + 82, 110, s_, 14, cor, 800))
    if i < 3:
        c.append(seta(x + 166, 75, x + 182, 75, "tinta", 2.5))
c.append(seta(680, 134, 100, 134, "suave", 2.5, tracejada=True, curva=40))
c.append(t(390, 182, "e testa de novo, até o resultado ficar igual ao esperado", 13, "suave", 700))
fig("m4", "Passo O que fazer 1. Rodar Aperte", "O método do detetive em quatro passos coloridos: rodar, comparar, achar o bloco e mudar uma coisa só; uma seta tracejada volta ao começo para testar de novo.",
    760, 196, "".join(c))

# ======================= M5 =======================
c = []
c.append(caixa(270, 14, 220, 56, cor="tinta", fundo="amarelo_c", rx=14, larg=3) + t(380, 50, "🎉 FESTA DA TURMA", 17, "tinta", 800))
partes = [("🎈", "Decoração", "Grupo 1", "rosa"), ("🍰", "Comida", "Grupo 2", "amarelo"), ("🎵", "Música", "Grupo 3", "roxo"), ("🎮", "Brincadeiras", "Grupo 4", "azul")]
for i, (ch, n, g, cor) in enumerate(partes):
    x = 20 + i * 186
    c.append(seta(380, 72, x + 83, 116, "tinta", 2.5))
    c.append(caixa(x, 120, 166, 104, cor=cor, fundo=cor + "_c", rx=14, larg=2.5) + emoji(x + 83, 162, ch, 32) + t(x + 83, 192, n, 15, cor, 800) + t(x + 83, 212, g, 12, "tinta", 600))
c.append(t(380, 252, "Um problema grande vira partes pequenas: cada grupo resolve uma.", 13, "tinta", 600))
fig("m5", "Parte Quem resolve", "O problema grande, a festa da turma, se divide em quatro partes menores, cada uma com um grupo: decoração, comida, música e brincadeiras.",
    760, 266, "".join(c), "Decompor = dividir o problema em partes.")

c = []
c.append(t(130, 22, "SEM bloco próprio", 15, "vermelho", 800))
for i, s_ in enumerate(["verso 1", "la la la", "la la la", "verso 2", "la la la", "la la la"]):
    c.append(bloco(30, 36 + i * 35, f"mostrar “{s_}”", "mostrar" if "verso" in s_ else "#dc2626", 190))
c.append(t(130, 266, "✖ repetido: errou o refrão? conserta 4 vezes", 12, "vermelho", 800))
c.append(t(520, 22, "COM o bloco “refrão”", 15, "verde", 800))
c.append(bloco(400, 36, "mostrar “verso 1”", "mostrar", 190) + bloco(400, 71, "refrão", "func", 190) + bloco(400, 106, "mostrar “verso 2”", "mostrar", 190) + bloco(400, 141, "refrão", "func", 190))
c.append(f'<path d="M560 186 h180 v30 h-162 v70 h162 v14 h-180 z" fill="{BL["func"]}"/>' + t(570, 206, "para refrão", 13, "#fff", 800, "start"))
c.append(bloco(578, 216, "mostrar “la la la”", "mostrar", 150) + bloco(578, 251, "mostrar “la la la”", "mostrar", 150))
c.append(seta(596, 86, 650, 184, "roxo", 2.5, tracejada=True) + seta(596, 156, 650, 184, "roxo", 2.5, tracejada=True))
c.append(etiqueta(470, 336, "escrito 1 vez · chamado 2 vezes", "verde", 12))
fig("m5", "Sem bloco próprio Com o bloco refrão", "À esquerda, o programa sem bloco próprio repete os blocos do refrão; à direita, o refrão é criado uma vez só num bloco roxo e o programa chama esse bloco duas vezes, com setas tracejadas ligando as chamadas à definição.",
    760, 350, "".join(c), "Bloco próprio: escreve uma vez, chama quando precisar, conserta num lugar só.")

# ======================= M6 =======================
c = []
c.append(caixa(250, 40, 240, 150, cor="tinta", fundo="papel", rx=10, larg=3) + caixa(264, 54, 212, 110, cor="linha", fundo="azul_c", rx=4, larg=1.5))
c.append(bloco(282, 70, "repita 3 vezes", "repita", 150) + bloco(296, 106, "mostrar “oi”", "mostrar", 130))
c.append(f'<path d="M340 192 h60 l10 18 h-80z" fill="#94a3b8"/>')
c.append(boneco(190, 190, "azul", 1.2, braco="aponta"))
c.append(emoji(250, 220, "🖱️", 26))
c.append(etiqueta(170, 290, "🕹️ PILOTO: mouse e teclado, monta", "azul", 12))
c.append(boneco(560, 190, "verde", 1.2))
c.append(balao(590, 40, 160, 56, ["“Esse bloco vai", "dentro do repita!”"], "verde", "papel", "baixo-esq", 12))
c.append(etiqueta(580, 290, "🧭 NAVEGADOR: lê, confere, procura erros", "verde", 12))
c.append(caixa(310, 236, 120, 40, cor="amarelo", fundo="amarelo_c", rx=20, larg=2.5) + t(370, 262, "⏱️ 10 min", 15, "amarelo", 800))
c.append(seta(306, 256, 240, 270, "amarelo", 2.5, curva=-10) + seta(434, 256, 500, 270, "amarelo", 2.5, curva=-10))
c.append(t(370, 300, "trocam de papel", 12, "amarelo", 800))
fig("m6", "Papel O que faz O que NÃO faz", "Dois alunos no mesmo computador: o piloto, de azul, com o mouse, monta os blocos; o navegador, de verde, lê e confere, dizendo que o bloco vai dentro do repita. No meio, um relógio de 10 minutos com setas indica que eles trocam de papel.",
    760, 316, "".join(c), "Um computador, duas cabeças, papéis que se revezam.")

c = []
import math
pos = [(380, 50, "📝 1. Planejar", "roxo"), (620, 140, "🧱 2. Montar", "azul"), (380, 230, "▶️ 3. Testar", "verde"), (140, 140, "🔄 4. Trocar", "amarelo")]
for (x, y, s_, cor) in pos:
    c.append(caixa(x - 100, y - 28, 200, 56, cor=cor, fundo=cor + "_c", rx=28, larg=3) + t(x, y + 6, s_, 16, cor, 800))
c.append(seta(482, 60, 600, 108, "tinta", 3, curva=-20) + seta(600, 172, 482, 222, "tinta", 3, curva=-20) + seta(278, 222, 160, 172, "tinta", 3, curva=-20) + seta(160, 108, 278, 60, "tinta", 3, curva=-20))
c.append(t(380, 146, "a cada parte", 14, "suave", 800))
fig("m6", "Passo O que a dupla faz", "O jeito de trabalhar em dupla como um ciclo: planejar, montar uma parte, testar e trocar de papel, voltando a planejar a próxima parte.",
    760, 280, "".join(c), "Testar depois de cada parte: o erro aparece cedo.")

# ======================= M7 =======================
c = []
pistas = [("🍎 apareceu o item errado", "posição errada (começa no 1)", "roxo"), ("(sem idade)", "nome do campo diferente", "rosa"),
          ("item repetido ou faltando", "bloco fora do lugar", "amarelo"), ("erro em vários lugares", "conserte dentro do bloco próprio", "verde")]
for i, (p_, e_, cor) in enumerate(pistas):
    y = 20 + i * 66
    c.append(caixa(20, y, 300, 52, cor=cor, fundo=cor + "_c", rx=12, larg=2.5) + emoji(48, y + 36, "🔍", 24) + t(190, y + 32, p_, 14, "tinta", 700))
    c.append(seta(326, y + 26, 420, y + 26, cor, 3))
    c.append(caixa(426, y, 314, 52, cor=cor, fundo="papel", rx=12, larg=2.5) + t(583, y + 32, e_, 14, cor, 800))
c.append(t(170, 296, "PISTA (o que aparece)", 13, "suave", 800) + t(583, 296, "ERRO PROVÁVEL", 13, "suave", 800))
fig("m7", "Pista Erro provável", "Quatro pistas ligadas por setas ao erro provável: item errado indica posição errada; (sem idade) indica nome do campo diferente; item repetido ou faltando indica bloco fora do lugar; erro em vários lugares indica conserto dentro do bloco próprio.",
    760, 310, "".join(c), "Cada pista aponta para um tipo de erro.")

# ======================= M8 =======================
c = []
gab = ["B", "A", "D", "C"]; resp = ["B", "C", "D", "C"]; cont = [1, 1, 2, 3]
c.append(t(110, 74, "gabarito", 14, "verde", 800, "end") + t(110, 124, "respostas", 14, "azul", 800, "end"))
for i in range(4):
    x = 130 + i * 120
    c.append(circulo(x + 45, 30, 13, "tinta", "tinta", 0) + t(x + 45, 35, str(i + 1), 13, "#fff", 800))
    c.append(caixa(x, 50, 90, 38, cor="verde", fundo="verde_c", rx=8, larg=2) + t(x + 45, 75, gab[i], 18, "tinta", 800))
    c.append(caixa(x, 100, 90, 38, cor="azul", fundo="azul_c", rx=8, larg=2) + t(x + 45, 125, resp[i], 18, "tinta", 800))
    ok = gab[i] == resp[i]
    c.append(t(x + 45, 172, "✅" if ok else "❌", 22, "tinta", 700))
    c.append(caixa(x + 15, 188, 60, 40, cor="rosa", fundo="rosa_c", rx=8, larg=2.5) + t(x + 45, 215, str(cont[i]), 18, "rosa", 800))
    c.append(t(x + 45, 246, "+1" if ok else "fica", 12, "rosa" if ok else "suave", 800))
c.append(t(118, 210, "acertos", 13, "rosa", 800, "end") + t(118, 226, "(começa em 0)", 11, "suave", 600, "end"))
c.append(t(380, 280, "Compara posição por posição; o contador soma 1 a cada acerto: 3 acertos.", 13, "tinta", 600))
fig("m8", "Posição 1 2 3 4 Lista gabarito", "O gabarito (B, A, D, C, em verde) comparado com as respostas (B, C, D, C, em azul) posição por posição: acerto, erro, acerto, acerto. Embaixo, o contador de acertos em rosa vai de 1 para 1, 2 e 3.",
    760, 296, "".join(c), "O contador começa em 0 e soma 1 a cada acerto.")

ICONES = {"m1": "🧱", "m2": "📝", "m3": "🗂️", "m4": "🐞", "m5": "🧩", "m6": "👥", "m7": "🔍", "m8": "❓", "rv": "🔁"}

if __name__ == "__main__":
    print("figuras:", gerar("informatica-7ano-2027-1bim", F, ICONES))
