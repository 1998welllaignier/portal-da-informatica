"""Ilustrações — 6º ano — 2º bimestre de 2027 (informatica-6ano-2027-2bim): Algoritmos."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def grade(x, y, linhas, lado=40, icone="🤖", rastro=()):
    """Tabuleiro do robô: '#' parede, 'R' robô, '*' estrela, 'o' ponto; rastro = casas (linha, coluna) pintadas."""
    s = []
    for r, ln in enumerate(linhas):
        for k, ch in enumerate(ln):
            cx, cy = x + k * lado, y + r * lado
            fundo = "verde_c" if (r, k) in rastro else ("fundo" if ch != "#" else "papel")
            s.append(caixa(cx, cy, lado, lado, cor="linha", fundo=fundo, rx=4, larg=1.5))
            ch2 = {"#": "🧱", "R": icone, "*": "⭐", "o": "🟩" if (r, k) in rastro else "⚪"}.get(ch)
            if ch2:
                s.append(emoji(cx + lado / 2, cy + lado * 0.72, ch2, lado * 0.6))
    return "".join(s)


# ======================= MISSÃO 1 =======================
c = []
c.append(caixa(10, 10, 300, 250, cor="vermelho", fundo="vermelho_c", rx=16, larg=2.5))
c.append(t(160, 40, "❓ Vago", 18, "vermelho", 800))
c.append(boneco(70, 150, "suave", 1.1, rosto="neutro"))
c.append(balao(120, 70, 170, 56, ["“Faz o suco aí.”"], cor="vermelho"))
c.append(emoji(205, 200, "🤖", 40) + t(205, 236, "Quanto? Onde? Como?", 13, "vermelho", 700))
c.append(caixa(330, 10, 340, 250, cor="verde", fundo="verde_c", rx=16, larg=2.5))
c.append(t(500, 40, "✅ Claro e preciso", 18, "verde", 800))
passos = [("🥤", "1. Pegar um copo"), ("🥄", "2. Colocar 2 colheres de pó"), ("🚰", "3. Encher com água"), ("🌀", "4. Mexer com a colher")]
for i, (ic, tx) in enumerate(passos):
    y = 62 + i * 46
    c.append(caixa(350, y, 300, 38, cor="verde", fundo="papel", rx=8, larg=2) + emoji(372, y + 28, ic, 22) + t(394, y + 25, tx, 14, "tinta", 700, "start"))
    if i < 3:
        c.append(seta(500, y + 38, 500, y + 46, "verde", 2))
fig("m1", "Algoritmo ruim (vago) Algoritmo bom (claro e preciso)",
    "Comparação: à esquerda, a instrução vaga “Faz o suco aí” deixa o robô em dúvida; à direita, o algoritmo claro e preciso do suco em 4 passos numerados.",
    680, 272, "".join(c), "O computador não adivinha: cada passo precisa ser claro e preciso.")

# ======================= MISSÃO 2 =======================
c = []
c.append(t(170, 30, "✅ Ordem certa", 17, "verde", 800))
c.append(t(510, 30, "❌ Ordem trocada", 17, "vermelho", 800))
for i, (ic, tx) in enumerate([("🧦", "1. Calçar a meia"), ("👟", "2. Calçar o tênis")]):
    c.append(caixa(40, 46 + i * 56, 260, 44, cor="verde", fundo="verde_c", rx=10, larg=2) + emoji(66, 76 + i * 56, ic, 24) + t(90, 74 + i * 56, tx, 15, "tinta", 700, "start"))
for i, (ic, tx) in enumerate([("👟", "1. Calçar o tênis"), ("🧦", "2. Calçar a meia")]):
    c.append(caixa(380, 46 + i * 56, 260, 44, cor="vermelho", fundo="vermelho_c", rx=10, larg=2) + emoji(406, 76 + i * 56, ic, 24) + t(430, 74 + i * 56, tx, 15, "tinta", 700, "start"))
c.append(seta(310, 96, 370, 96, "suave", 3) + t(340, 84, "troca", 12, "suave", 700))
c.append(t(170, 186, "Pé pronto para correr! 🏃", 15, "verde", 800))
c.append(t(510, 186, "A meia fica por cima do tênis! 🤭", 15, "vermelho", 800))
fig("m2", "Ordem certa Ordem trocada O que dá errado",
    "Comparação: na ordem certa, primeiro a meia e depois o tênis; trocando a ordem, a meia fica por cima do tênis.",
    680, 206, "".join(c), "Na sequência, trocar a ordem muda o resultado.")

c = []
c.append(grade(20, 20, ["R..", "#.#", "..*"], 54, rastro={(0, 0), (0, 1), (1, 1), (2, 1)}))
c.append(t(400, 44, "Programa:", 16, "tinta", 800, "start"))
for i, (s_, tx) in enumerate([("➡️", "anda 1 casa para a direita"), ("⬇️", "desce 1 casa"), ("⬇️", "desce 1 casa"), ("➡️", "chega na estrela ⭐")]):
    c.append(caixa(400, 58 + i * 40, 250, 34, cor="azul", fundo="azul_c", rx=8, larg=2) + emoji(420, 82 + i * 40, s_, 20) + t(440, 80 + i * 40, f"{i+1}. {tx}", 13, "tinta", 700, "start"))
fig("m2", "Comando O que o robô faz",
    "Labirinto 3 por 3: o robô sai de A1, vai para B1, desce até B3 e chega à estrela em C3. Ao lado, o programa com as 4 setas numeradas.",
    680, 226, "".join(c), "Cada seta anda uma casa, uma depois da outra.", pequena=True)

# ======================= MISSÃO 3 =======================
c = []
c.append(caixa(10, 10, 320, 170, cor="suave", fundo="fundo", rx=14, larg=2))
c.append(t(170, 38, "Sem repetição: 6 blocos", 16, "suave", 800))
for i, s_ in enumerate(["➡️", "➡️", "➡️", "➡️", "⬇️", "⬇️"]):
    c.append(caixa(26 + i * 49, 60, 42, 42, cor="linha", fundo="papel", rx=8, larg=2) + emoji(47 + i * 49, 90, s_, 24))
c.append(t(170, 140, "comprido e fácil de errar", 13, "suave", 600))
c.append(seta(340, 95, 390, 95, "amarelo", 4))
c.append(caixa(400, 10, 270, 170, cor="amarelo", fundo="amarelo_c", rx=14, larg=2.5))
c.append(t(535, 38, "Com repetição: 2 blocos", 16, "amarelo", 800))
c.append(caixa(420, 56, 230, 42, cor="amarelo", fundo="papel", rx=10, larg=2) + t(535, 83, "🔁 repita 4× ➡️", 16, "tinta", 800))
c.append(caixa(420, 106, 230, 42, cor="amarelo", fundo="papel", rx=10, larg=2) + t(535, 133, "🔁 repita 2× ⬇️", 16, "tinta", 800))
c.append(t(535, 168, "mudar 4 para 5? só um número!", 13, "amarelo", 700))
fig("m3", "Sem repetição Com repetição",
    "Comparação: seis setas soltas (quatro para a direita e duas para baixo) viram só dois blocos: repita 4 vezes direita e repita 2 vezes baixo.",
    680, 192, "".join(c), "A repetição junta os passos iguais num bloco só.")

# ======================= MISSÃO 4 =======================
c = []
c.append(caixa(250, 14, 180, 64, cor="amarelo", fundo="amarelo_c", rx=32, larg=3) + t(340, 42, "SE", 14, "amarelo", 800) + t(340, 64, "está chovendo? 🌧️", 15, "tinta", 800))
c.append(seta(270, 80, 150, 136, "verde", 3) + etiqueta(186, 104, "sim (verdadeiro)", "verde", 12))
c.append(seta(410, 80, 530, 136, "vermelho", 3) + etiqueta(494, 104, "não (falso)", "vermelho", 12))
c.append(caixa(40, 140, 220, 80, cor="verde", fundo="verde_c", rx=12, larg=2.5) + t(150, 166, "ENTÃO", 13, "verde", 800) + t(150, 196, "levo o guarda-chuva ☂️", 15, "tinta", 700))
c.append(caixa(420, 140, 220, 80, cor="vermelho", fundo="vermelho_c", rx=12, larg=2.5) + t(530, 166, "SENÃO", 13, "vermelho", 800) + t(530, 196, "vou sem ele 😎", 15, "tinta", 700))
fig("m4", "Se… (condição) então… (quando é verdade) senão… (quando é mentira)",
    "Fluxo da seleção: a condição “está chovendo?” no alto; se sim, o caminho verde leva a “levo o guarda-chuva”; se não, o caminho vermelho leva a “vou sem ele”.",
    680, 232, "".join(c), "A condição só tem duas respostas: sim ou não.")

# ======================= MISSÃO 5 =======================
c = []
c.append(caixa(14, 30, 190, 170, cor="azul", fundo="azul_c", rx=14, larg=2.5) + t(109, 58, "📥 ENTRADAS", 15, "azul", 800))
for i, ic in enumerate(["🌾 farinha", "🥚 ovos", "🥛 leite", "🍬 açúcar"]):
    c.append(t(109, 90 + i * 28, ic, 14, "tinta", 700))
c.append(seta(210, 115, 250, 115, "tinta", 3))
c.append(caixa(256, 30, 190, 170, cor="amarelo", fundo="amarelo_c", rx=14, larg=2.5) + t(351, 58, "⚙️ PROCESSAMENTO", 14, "amarelo", 800))
c.append(t(351, 100, "🥣 misturar", 14, "tinta", 700) + t(351, 132, "🍳 pôr na forma", 14, "tinta", 700) + t(351, 164, "🔥 assar", 14, "tinta", 700))
c.append(seta(452, 115, 492, 115, "tinta", 3))
c.append(caixa(498, 30, 170, 170, cor="verde", fundo="verde_c", rx=14, larg=2.5) + t(583, 58, "📤 SAÍDA", 15, "verde", 800))
c.append(emoji(583, 136, "🎂", 54) + t(583, 182, "o bolo pronto", 14, "tinta", 700))
fig("m5", "Pergunta Nome Exemplo: fazer um bolo",
    "Esquema em três caixas: entradas (farinha, ovos, leite, açúcar), seta para o processamento (misturar, pôr na forma, assar) e seta para a saída (o bolo pronto).",
    680, 214, "".join(c), "Entradas → processamento → saída.")

# ======================= MISSÃO 6 =======================
c = []
c.append(caixa(220, 12, 240, 56, cor="roxo", fundo="roxo_c", rx=14, larg=3) + t(340, 46, "🎉 Aniversário da turma", 16, "roxo", 800))
partes = [("🎈", "Decoração", "rosa"), ("🍰", "Comida", "amarelo"), ("🎵", "Diversão", "azul"), ("🧹", "Limpeza", "verde")]
for i, (ic, nome, cor) in enumerate(partes):
    x = 20 + i * 166
    c.append(seta(340, 70, x + 72, 118, "suave", 2))
    c.append(caixa(x, 122, 144, 92, cor=cor, fundo=cor + "_c", rx=12, larg=2.5) + emoji(x + 72, 164, ic, 30) + t(x + 72, 198, nome, 14, cor, 800))
c.append(t(340, 240, "Cada parte é um subproblema: menor e mais fácil.", 14, "suave", 700))
fig("m6", "Parte (subproblema) O que fazer",
    "Árvore da decomposição: o problema grande “aniversário da turma” no alto, ligado a quatro partes menores: decoração, comida, diversão e limpeza.",
    680, 254, "".join(c), "Decompor: dividir o problema grande em partes menores.")

# ======================= MISSÃO 7 =======================
c = []
etapas = [("🧪", "1. Testar", "azul"), ("🔍", "2. Comparar", "roxo"), ("🐞", "3. Achar", "vermelho"), ("🔧", "4. Corrigir", "verde")]
for i, (ic, tx, cor) in enumerate(etapas):
    x = 14 + i * 168
    c.append(circulo(x + 70, 76, 50, cor=cor, fundo=cor + "_c", larg=3) + emoji(x + 70, 90, ic, 36) + t(x + 70, 152, tx, 15, cor, 800))
    if i < 3:
        c.append(seta(x + 124, 76, x + 160, 76, "tinta", 3))
c.append(seta(600, 160, 84, 160, "suave", 2, tracejada=True, curva=60))
c.append(t(340, 210, "testa de novo até dar certo", 13, "suave", 700))
fig("m7", "Passo O que fazer 1. Testar",
    "Ciclo da depuração em quatro círculos: testar, comparar, achar o primeiro passo errado e corrigir, com uma seta tracejada voltando ao teste.",
    680, 224, "".join(c), "Depurar: testar, comparar, achar e corrigir.")

# ======================= MISSÃO 8 =======================
c = []
c.append(grade(20, 20, ["Roo", "*.o", "ooo"], 54, icone="🐢", rastro={(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (1, 0)}))
c.append(t(230, 44, "A tartaruga deixa rastro:", 15, "tinta", 800, "start"))
c.append(t(230, 72, "➡️ ➡️  ⬇️ ⬇️  ⬅️ ⬅️  ⬆️", 18, "tinta", 700, "start"))
c.append(t(230, 108, "Com repetição (4 blocos):", 15, "amarelo", 800, "start"))
c.append(caixa(230, 120, 420, 40, cor="amarelo", fundo="amarelo_c", rx=10, larg=2) + t(440, 146, "repita 2× ➡️ · repita 2× ⬇️ · repita 2× ⬅️ · ⬆️", 14, "tinta", 800))
c.append(t(230, 190, "4 lados = um quadrado 🟩", 15, "verde", 800, "start"))
fig("m8", "Sem repetição Com repetição ➡️ ➡️ ⬇️ ⬇️",
    "Quadriculado 3 por 3: a tartaruga sai de A1 e passa por todos os pontos da borda, que ficam verdes, formando um quadrado. Ao lado, o programa com setas e a versão com repetição em 4 blocos.",
    680, 212, "".join(c), "Sequência + repetição = desenho.")

ICONES = {"m1": "🧭", "m2": "➡️", "m3": "🔁", "m4": "🔀", "m5": "📥", "m6": "🧩", "m7": "🐞", "m8": "🐢", "rv": "🔁"}

if __name__ == "__main__":
    print("figuras:", gerar("informatica-6ano-2027-2bim", F, ICONES))
