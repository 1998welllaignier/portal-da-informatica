"""Ilustrações — 6º ano — 3º bimestre de 2027 (informatica-6ano-2027-3bim): Programação em blocos.
Esquemas por código (exatos e editáveis), com blocos desenhados nas mesmas cores do editor do portal.
As cenas de abertura (IA) ficam em cenas_6_3.py, quando existirem."""
from base import *

F = []

# cores parecidas com as gavetas do editor (Blockly)
BL = {"mostrar": "#a55b5b", "repita": "#5ba55b", "se": "#5b80a5", "var": "#a55b80", "texto": "#5ba58c", "lista": "#745ba5", "funcao": "#995ba5", "evento": "#a5a55b", "numero": "#5b67a5"}


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def bloco(x, y, w, txt, cor, h=34, size=13):
    c = BL.get(cor, cor)
    return (f'<path d="M{x} {y + 6} q0 -6 6 -6 h14 l6 6 h12 l6 -6 h{w - 50} q6 0 6 6 v{h - 12} q0 6 -6 6 h{-(w - 50)} l-6 6 h-12 l-6 -6 h-14 q-6 0 -6 -6z" fill="{c}"/>'
            + f'<text x="{x + 12}" y="{y + h / 2 + 5}" font-size="{size}" font-weight="700" fill="#fff" font-family="{FONTE}">{esc(txt)}</text>')


def boca(x, y, w, h, txt, cor, rodape=12):
    """Bloco em C (repita, se, para): topo com texto, boca para blocos de dentro."""
    c = BL.get(cor, cor)
    return (f'<path d="M{x} {y} h{w} v34 h{-(w - 24)} v{h} h{w - 24} v{rodape + 6} h{-w}z" fill="{c}"/>'
            + f'<text x="{x + 12}" y="{y + 22}" font-size="13" font-weight="700" fill="#fff" font-family="{FONTE}">{esc(txt)}</text>')


def tela(x, y, w, h, linhas_):
    return (caixa(x, y, w, h, cor="tinta", fundo="#0f172a", rx=10, larg=2) + t(x + w / 2, y - 8, "📺 Tela do programa", 12, "tinta", 800)
            + "".join(f'<text x="{x + 14}" y="{y + 26 + i * 22}" font-size="15" font-weight="700" fill="#a7f3d0" font-family="{MONO}">{esc(l)}</text>' for i, l in enumerate(linhas_)))


# ======================= MISSÃO 1 =======================
c = [caixa(14, 30, 140, 230, cor="linha", fundo="#f1f5f9", rx=10, larg=2), t(84, 22, "1 · gavetas", 12, "roxo", 800)]
for i, (rot, cor) in enumerate([("📺 Mostrar", "mostrar"), ("🔤 Texto", "texto"), ("🔁 Repita", "repita"), ("🔀 Se", "se"), ("📦 Variáveis", "var")]):
    c.append(f'<rect x="24" y="{44 + i * 40}" width="8" height="26" fill="{BL[cor]}"/>' + t(40, 62 + i * 40, rot, 12, "tinta", 700, "start"))
c.append(caixa(170, 30, 330, 230, cor="linha", fundo="papel", rx=10, larg=2) + t(335, 22, "2 · arraste e 3 · encaixe aqui", 12, "roxo", 800))
c.append(bloco(196, 66, 220, "mostrar na tela “Olá!”", "mostrar") + bloco(196, 100, 260, "mostrar na tela “Eu programo!”", "mostrar"))
c.append(seta(154, 62, 192, 82, "roxo", 2.5))
c.append(etiqueta(330, 170, "⬇️ de cima para baixo", "azul", 12) + etiqueta(330, 214, "🧲 os blocos grudam", "verde", 12))
c.append(caixa(520, 30, 186, 44, cor="verde", fundo="verde", rx=10) + t(613, 58, "▶️ Rodar o programa", 13, "papel", 800) + t(613, 92, "4 · aperte", 12, "roxo", 800))
c.append(tela(520, 120, 186, 80, ["Olá!", "Eu programo!"]) + t(613, 226, "5 · veja o resultado", 12, "roxo", 800))
fig("m1", "Passo O que fazer",
    "O editor de blocos: à esquerda, as gavetas; no meio, dois blocos “mostrar na tela” encaixados, Olá! e Eu programo!; à direita, o botão Rodar o programa e a Tela do programa mostrando as duas linhas na ordem.",
    720, 280, "".join(c), "Gaveta → arrastar → encaixar → ▶️ Rodar → ver na tela.")

# ======================= MISSÃO 2 =======================
c = [t(150, 22, "🔁 fim FORA do repita", 14, "verde", 900)]
c.append(boca(30, 40, 230, 40, "repita 3 vezes", "repita") + bloco(54, 76, 190, "mostrar “pula”", "mostrar") + bloco(30, 132, 190, "mostrar “fim”", "mostrar"))
c.append(tela(40, 190, 200, 150, ["pula", "pula", "pula", "fim"]))
c.append(t(540, 22, "🔁 fim DENTRO do repita", 14, "vermelho", 900))
c.append(boca(420, 40, 230, 74, "repita 3 vezes", "repita") + bloco(444, 76, 190, "mostrar “pula”", "mostrar") + bloco(444, 110, 190, "mostrar “fim”", "mostrar"))
c.append(tela(420, 190, 230, 150, ["pula", "fim", "pula", "fim", "pula", "fim"]))
c.append(etiqueta(360, 160, "a posição muda o resultado", "amarelo", 12))
fig("m2", "Bloco O que faz Exemplo",
    "Dois programas lado a lado. À esquerda, o “mostrar fim” está fora (embaixo) do repita 3 vezes: a tela mostra pula, pula, pula, fim. À direita, o “fim” está dentro: a tela mostra pula, fim, pula, fim, pula, fim, um por linha.",
    720, 352, "".join(c), "Dentro do repita repete; fora, aparece uma vez só.")

# ======================= MISSÃO 3 =======================
passos3 = [("definir pontos para 0", "0"), ("alterar pontos por 5", "5"), ("alterar pontos por 3", "8")]
c = []
for i, (bl, val) in enumerate(passos3):
    y = 30 + i * 74
    c.append(bloco(20, y, 250, bl, "var") + seta(282, y + 17, 340, y + 17, "roxo", 2.5))
    c.append(f'<path d="M360 {y - 6} h90 v52 h-90z" fill="#fef3c7" stroke="{COR["amarelo"]}" stroke-width="2.5"/>'
             + f'<path d="M360 {y - 6} l12 -12 h90 l-12 12" fill="#fde68a" stroke="{COR["amarelo"]}" stroke-width="2.5"/>'
             + t(405, y + 30, val, 24, "amarelo", 900) + t(462, y + 46, "📦 pontos", 11, "tinta", 700, "start"))
c.append(bloco(510, 60, 200, "mostrar “Pontos: ” + pontos", "mostrar", size=12) + tela(510, 126, 200, 50, ["Pontos: 8"]))
fig("m3", "Bloco Valor de pontos depois do bloco",
    "Três blocos de variável, um abaixo do outro: definir pontos para 0, alterar pontos por 5, alterar pontos por 3. Ao lado de cada um, a caixinha “pontos” com o valor: 0, 5 e 8. À direita, o mostrar e a tela com Pontos: 8.",
    720, 260, "".join(c), "Definir coloca o valor; alterar por soma ao que já estava.")

# ======================= MISSÃO 4 =======================
c = [boca(20, 30, 280, 40, "para saudar", "funcao") + bloco(44, 66, 250, "mostrar “Olá, ” + nome", "mostrar"), t(160, 20, "🧩 o meu bloco (feito uma vez)", 12, "roxo", 800)]
prog = [("definir nome para “Ana”", "var"), ("saudar", "funcao"), ("definir nome para “Leo”", "var"), ("saudar", "funcao")]
for i, (txt_, cor) in enumerate(prog):
    c.append(bloco(360, 30 + i * 36, 230 if cor == "var" else 110, txt_, cor))
c.append(t(470, 20, "📞 o programa chama 2 vezes", 12, "roxo", 800))
c.append(tela(360, 200, 230, 66, ["Olá, Ana", "Olá, Leo"]))
c.append(etiqueta(160, 190, "🎛️ parâmetro: nome (o que muda)", "amarelo", 12))
c.append(seta(470, 102, 300, 70, "roxo", 2, tracejada=True) + seta(470, 174, 300, 74, "roxo", 2, tracejada=True))
fig("m4", "Blocos do programa Tela",
    "À esquerda, o bloco criado “para saudar”, que mostra Olá, + nome. À direita, o programa: definir nome Ana, saudar, definir nome Leo, saudar. Setas tracejadas mostram que cada saudar usa o mesmo bloco. A tela mostra Olá, Ana e Olá, Leo.",
    720, 290, "".join(c), "Um bloco para muitos casos: só o parâmetro muda.")

# ======================= MISSÃO 5 =======================
c = [t(36, 46, "frutas =", 16, "roxo", 900, "start")]
for i, f_ in enumerate(["maçã", "uva", "caju"]):
    x = 130 + i * 120
    c.append(caixa(x, 22, 110, 50, cor="roxo", fundo="roxo_c", rx=8) + t(x + 55, 54, f_, 16, "tinta", 800) + circulo(x + 55, 92, 14, "roxo", "papel") + t(x + 55, 97, str(i + 1), 13, "roxo", 900))
c.append(t(130, 128, "posição", 12, "roxo", 800, "start") + etiqueta(580, 50, "tamanho = 3", "verde", 14))
tipos_ = [("🔢 número", "7, 15", "azul"), ("🔤 texto", "“Ana”", "verde"), ("✅ lógico", "verdadeiro", "amarelo"), ("📝 lista", "[maçã, uva]", "roxo")]
for i, (rot, ex, cor) in enumerate(tipos_):
    x = 20 + i * 176
    c.append(caixa(x, 170, 160, 90, cor=cor, fundo=cor + "_c", rx=12) + t(x + 80, 204, rot, 15, cor, 900) + t(x + 80, 238, ex, 14, "tinta", 700))
c.append(t(360, 158, "tipos de dados", 13, "tinta", 800))
fig("m5", "Tipo Exemplos Dá para…",
    "No alto, a lista frutas com três caixas, maçã, uva e caju, numeradas 1, 2 e 3 (as posições), e a etiqueta tamanho = 3. Embaixo, quatro cartões de tipos de dados: número (7, 15), texto (“Ana”), lógico (verdadeiro) e lista.",
    720, 280, "".join(c), "Cada item tem uma posição; cada valor tem um tipo.")

# ======================= MISSÃO 6 =======================
c = [bloco(20, 20, 200, "definir pontos para 0", "var"), t(240, 42, "← começo do jogo", 12, "suave", 700, "start")]
regras6 = [("🟢", "verde", "+1 ponto", "verde"), ("🔴", "vermelho", "−1 ponto", "vermelho")]
for i, (e, rot, efeito, cor) in enumerate(regras6):
    y = 80 + i * 96
    c.append(circulo(56, y + 34, 30, cor, cor + "_c") + emoji(56, y + 44, e, 28))
    c.append(seta(92, y + 34, 140, y + 34, "tinta", 3))
    c.append(boca(146, y, 300, 40, f"⚡ quando acontecer {rot}", "evento") + bloco(170, y + 36, 270, f"alterar pontos por {'1' if cor == 'verde' else '-1'} · mostrar", "var", size=12))
    c.append(etiqueta(530, y + 40, efeito, cor, 14))
c.append(caixa(452, 236, 262, 40, cor="tinta", fundo="#0f172a", rx=8, larg=2) + f'<text x="462" y="261" font-size="12" font-weight="700" fill="#a7f3d0" font-family="{MONO}">verde,verde,vermelho → 1, 2, 1</text>')
fig("m6", "Regra Evento Ação",
    "O joguinho Pega-Moeda: no começo, definir pontos para 0. O botão verde aciona o bloco “quando acontecer verde”, que soma 1 ponto e mostra; o botão vermelho aciona o “quando acontecer vermelho”, que tira 1 ponto. Embaixo: verde, verde, vermelho dá 1, 2, 1.",
    720, 290, "".join(c), "Cada evento (botão) dispara a sua ação.")

# ======================= MISSÃO 7 =======================
c = [bloco(20, 30, 200, "definir x para 2", "var"), boca(20, 74, 250, 40, "repita 3 vezes", "repita"), bloco(44, 110, 200, "alterar x por 2", "var"), bloco(20, 166, 140, "mostrar x", "mostrar")]
vals = ["2", "4", "6", "8"]
c.append(t(470, 30, "🔎 rastrear: o valor de x a cada passo", 13, "tinta", 800))
for i, val in enumerate(vals):
    x = 320 + i * 96
    c.append(caixa(x, 60, 80, 70, cor="amarelo", fundo="amarelo_c", rx=10) + t(x + 40, 106, val, 26, "amarelo", 900)
             + t(x + 40, 150, ["início", "1ª volta", "2ª volta", "3ª volta"][i], 11, "tinta", 700))
    if i < 3:
        c.append(seta(x + 82, 95, x + 94, 95, "amarelo", 2.5))
c.append(tela(320, 186, 368, 46, ["8"]) + etiqueta(170, 248, "🐞 errou a previsão? ache o bug", "vermelho", 12))
fig("m7", "Bloco x",
    "À esquerda, o programa: definir x para 2, repita 3 vezes alterar x por 2, mostrar x. À direita, a caixinha x em cada momento: 2 no início, 4, 6 e 8 a cada volta. A tela mostra 8.",
    720, 270, "".join(c), "Prever: seguir os blocos anotando cada valor.")

# ======================= MISSÃO 8 =======================
cenas_ = ["Era uma vez Tito", "toc", "toc", "toc", "Tito abriu a porta"]
c = [f'<rect x="10" y="40" width="700" height="150" rx="10" fill="#1f2937"/>']
for k in range(24):
    c.append(f'<rect x="{18 + k * 29}" y="48" width="16" height="10" rx="2" fill="#f8fafc"/><rect x="{18 + k * 29}" y="172" width="16" height="10" rx="2" fill="#f8fafc"/>')
for i, cena in enumerate(cenas_):
    x = 22 + i * 138
    c.append(caixa(x, 66, 128, 96, cor="papel", fundo="#fffbeb", rx=6, larg=1) + t(x + 64, 92, f"cena {i + 1}", 11, "suave", 800)
             + "".join(t(x + 64, 120 + k * 18, w_, 13, "tinta", 800) for k, w_ in enumerate(cena.replace("Tito abriu", "Tito|abriu").replace("uma vez", "uma vez|").split("|")) if w_))
c.append(etiqueta(98, 222, "➡️ sequência", "azul", 12) + etiqueta(360, 222, "🔁 repita 3: “toc”", "verde", 12) + etiqueta(624, 222, "📦 variável heroi", "roxo", 12))
c.append(t(360, 262, "começo → meio → fim: o roteiro", 13, "tinta", 800) + t(360, 24, "🎬 a história em cenas (cada linha da tela)", 13, "tinta", 800))
fig("m8", "Ideia da história Bloco",
    "Uma tira de filme com cinco cenas: Era uma vez Tito, toc, toc, toc, Tito abriu a porta. Embaixo, as etiquetas: sequência, repita 3 vezes o toc e a variável heroi. Por último: começo, meio e fim.",
    720, 280, "".join(c), "Cada linha da tela é uma cena da história.")

ICONES = {"m1": "🧱", "m2": "🔁", "m3": "📦", "m4": "🧩", "m5": "📝", "m6": "🎮", "m7": "🧠", "m8": "🎬", "rv": "🔁"}

try:
    from cenas_6_3 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-6ano-2027-3bim", F, ICONES))
