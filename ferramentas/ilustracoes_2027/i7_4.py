"""Ilustrações — 7º ano — 4º bimestre de 2027 (informatica-7ano-2027-4bim): Criar e cuidar.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_7_4.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


# ======================= MISSÃO 1 =======================
# O caminho de volta (logística reversa): consumidor → ponto de coleta → reciclagem → fábrica → loja → consumidor
etapas = [("🧑", "Consumidor", "leva o aparelho", 360, 50), ("📦", "Ponto de coleta", "recebe", 600, 150), ("♻️", "Reciclagem", "separa os materiais", 360, 250), ("🏭", "Fábrica", "faz aparelhos novos", 120, 150)]
c = []
for e, rot, sub, x, y in etapas:
    c.append(caixa(x - 95, y - 34, 190, 68, cor="verde", fundo="verde_c", rx=14, larg=2.5) + emoji(x - 66, y + 10, e, 28) + t(x + 14, y - 4, rot, 14, "verde", 900) + t(x + 14, y + 18, sub, 11, "tinta", 700))
c.append(seta(458, 70, 560, 112, "verde", 3) + seta(560, 190, 458, 236, "verde", 3) + seta(262, 236, 160, 190, "verde", 3) + seta(160, 112, 262, 70, "verde", 3))
c.append(t(360, 156, "🔁 logística reversa", 15, "verde", 900) + t(360, 176, "(Lei nº 12.305/2010)", 11, "suave", 700))
c.append(caixa(20, 300, 680, 40, cor="vermelho", fundo="vermelho_c", rx=10, larg=2) + t(360, 326, "🚫 lixo comum: contamina o solo e a água · 🔥 queimar: fumaça tóxica", 13, "vermelho", 800))
fig("m1", "Destino O que acontece",
    "Um ciclo de setas verdes: o consumidor leva o aparelho ao ponto de coleta, que manda para a reciclagem, que separa os materiais para a fábrica fazer aparelhos novos, que voltam ao consumidor. No meio: logística reversa (Lei nº 12.305/2010). Embaixo, em vermelho: lixo comum contamina o solo e a água; queimar solta fumaça tóxica.",
    720, 352, "".join(c), "O aparelho faz o caminho de volta e os materiais são reaproveitados.")

# ======================= MISSÃO 2 =======================
c = [caixa(250, 14, 220, 300, cor="tinta", fundo="#e5e7eb", rx=26, larg=3)]
pecas = [(270, 34, 180, 70, "📱 tela", "vidro + índio", "azul"), (270, 116, 180, 90, "🔋 bateria", "lítio + cobalto", "amarelo"), (270, 218, 180, 80, "🧩 placa", "cobre · ouro · prata", "verde")]
for x, y, w, h, rot, mat, cor in pecas:
    c.append(caixa(x, y, w, h, cor=cor, fundo=cor + "_c", rx=10, larg=2) + t(x + w / 2, y + h / 2 - 4, rot, 14, cor, 900) + t(x + w / 2, y + h / 2 + 16, mat, 12, "tinta", 800))
c.append(etiqueta(130, 70, "mostrar a imagem", "azul", 12) + seta(200, 70, 266, 70, "azul", 2))
c.append(etiqueta(130, 160, "guardar a energia", "amarelo", 12) + seta(204, 160, 266, 160, "amarelo", 2))
c.append(etiqueta(130, 258, "levar a eletricidade", "verde", 12) + seta(212, 258, 266, 258, "verde", 2))
c.append(caixa(500, 30, 200, 120, cor="vermelho", fundo="vermelho_c", rx=12, larg=2) + t(600, 58, "⚠️ bateria estufada", 13, "vermelho", 900)
         + t(600, 84, "pode pegar fogo", 12, "tinta", 800) + t(600, 106, "não fure · não use", 12, "tinta", 800) + t(600, 128, "→ ponto de coleta", 12, "tinta", 800))
c.append(caixa(500, 170, 200, 120, cor="roxo", fundo="roxo_c", rx=12, larg=2) + t(600, 198, "⛏️ mineração urbana", 13, "roxo", 900)
         + t(600, 224, "reciclar = tirar metais", 12, "tinta", 800) + t(600, 246, "do lixo, sem abrir", 12, "tinta", 800) + t(600, 268, "uma mina nova", 12, "tinta", 800))
fig("m2", "Parte do celular Material Para que serve",
    "Um celular aberto em três partes: tela (vidro e índio, mostra a imagem), bateria (lítio e cobalto, guarda a energia) e placa (cobre, ouro e prata, leva a eletricidade). Ao lado: bateria estufada pode pegar fogo (não fure, não use, leve ao ponto de coleta) e mineração urbana (reciclar é tirar metais do lixo sem abrir uma mina nova).",
    720, 330, "".join(c), "Pequeno por fora, cheio de metais por dentro.")

# ======================= MISSÃO 3 =======================
cenas = [("1 · Abertura", "📦📱", "“Você tem um desses?”", "10 s"), ("2 · Problema", "🗑️🏭", "“No lixo, ele polui.”", "20 s"), ("3 · Solução", "♻️📍", "“Leve ao ponto de coleta!”", "20 s"), ("4 · Fim", "🎬👥", "“Cuide do planeta!”", "10 s")]
c = [t(360, 26, "🎞️ Storyboard: um quadrinho por cena", 15, "tinta", 900)]
for i, (rot, em, fala, tempo) in enumerate(cenas):
    x = 20 + i * 172
    c.append(caixa(x, 44, 160, 150, cor="tinta", fundo="papel", rx=8, larg=2.5) + t(x + 80, 66, rot, 12, "roxo", 900) + t(x + 80, 128, em, 36, "tinta", 400)
             + caixa(x, 200, 160, 56, cor="linha", fundo="#f8fafc", rx=8, larg=1.5) + t(x + 80, 222, fala, 11, "tinta", 800) + t(x + 80, 244, "⏱️ " + tempo, 11, "suave", 800))
c.append(etiqueta(360, 280, "10 + 20 + 20 + 10 = 60 s (1 minuto)", "amarelo", 13))
fig("m3", "Cena O que aparece O que se fala ⏱️ Tempo",
    "Um storyboard com quatro quadrinhos: abertura (caixa e celular, “Você tem um desses?”, 10 s), problema (lixo e fábrica, “No lixo, ele polui.”, 20 s), solução (reciclagem e ponto de coleta, “Leve ao ponto de coleta!”, 20 s) e fim (créditos e equipe, “Cuide do planeta!”, 10 s). Total: 60 segundos.",
    720, 300, "".join(c), "O storyboard é o roteiro desenhado.")

# ======================= MISSÃO 4 =======================
c = [caixa(20, 14, 680, 270, cor="tinta", fundo="#1f2937", rx=10, larg=2), t(360, 40, "🎬 Editor de vídeo · linha do tempo", 14, "papel", 900)]
clipes = [("cena 1", 40, 90, "azul"), ("cena 2", 132, 170, "verde"), ("cena 3", 304, 170, "amarelo"), ("cena 4", 476, 90, "roxo")]
for rot, x, w, cor in clipes:
    c.append(caixa(x, 120, w - 4, 50, cor=cor, fundo=cor + "_c", rx=6, larg=2) + t(x + w / 2, 151, rot, 13, cor, 900))
c.append(caixa(40, 180, 520, 30, cor="ciano", fundo="ciano_c", rx=6, larg=1.5) + t(300, 200, "🎵 música livre, com crédito", 12, "tinta", 800))
c.append(caixa(40, 70, 520, 38, cor="linha", fundo="#374151", rx=6, larg=1) + t(300, 95, "T  “Celular no lixo? Não!”  (texto e legenda)", 12, "papel", 800))
c.append(f'<line x1="132" y1="64" x2="132" y2="216" stroke="{COR["vermelho"]}" stroke-width="3"/>' + t(132, 232, "✂️ cortar", 12, "vermelho", 900))
c.append(caixa(580, 110, 104, 70, cor="verde", fundo="verde_c", rx=10, larg=2.5) + t(632, 140, "💾 exportar", 12, "verde", 900) + t(632, 162, ".mp4", 13, "tinta", 900, fonte=MONO))
passos = "importar → ordenar → cortar → texto e som → exportar"
c.append(t(360, 266, passos, 13, "papel", 800))
fig("m4", "Dica Por quê",
    "A tela de um editor de vídeo: na linha do tempo, quatro clipes em ordem (cena 1 a 4), uma faixa de texto com o título e uma faixa de música livre com crédito. Uma linha vermelha marca onde cortar. À direita, o botão exportar para .mp4. Embaixo: importar → ordenar → cortar → texto e som → exportar.",
    720, 298, "".join(c), "A linha do tempo põe as cenas na ordem do roteiro.")

# ======================= MISSÃO 5 =======================
c = [caixa(20, 14, 330, 280, cor="tinta", fundo="papel", rx=10, larg=2.5), t(185, 42, "📒 Ficha técnica", 16, "tinta", 900)]
linhas_ = [("🎬", "Celular no lixo? Não!"), ("👥", "Ana (roteiro) · Léo (câmera)…"), ("🛠️", "celular + editor de vídeo"), ("📚", "Música: autor · site · licença"), ("💭", "Cortar deixa o vídeo melhor")]
for i, (e, txt) in enumerate(linhas_):
    y = 64 + i * 42
    c.append(caixa(36, y, 298, 34, cor="linha", fundo="#f8fafc", rx=6, larg=1.2) + emoji(56, y + 25, e, 18) + t(76, y + 23, txt, 12, "tinta", 800, "start"))
c.append(t(185, 280, "licença: CC BY (use com crédito)", 12, "roxo", 900))
chk = [("Todos autorizaram?", True), ("Nenhum dado pessoal?", True), ("Tudo com crédito?", True), ("Lugar seguro?", True)]
c.append(caixa(380, 14, 320, 280, cor="verde", fundo="verde_c", rx=12, larg=2.5) + t(540, 42, "✅ Antes de publicar", 15, "verde", 900))
for i, (p_, _) in enumerate(chk):
    y = 70 + i * 50
    c.append(caixa(400, y, 30, 30, cor="verde", fundo="papel", rx=6, larg=2) + t(415, y + 22, "✔", 18, "verde", 900) + t(444, y + 21, p_, 14, "tinta", 800, "start"))
c.append(t(540, 280, "um “não”? → resolva antes", 12, "vermelho", 900))
fig("m5", "Parte da ficha técnica Exemplo",
    "À esquerda, uma ficha técnica com título, equipe e funções (só o primeiro nome), ferramentas, créditos da música e o que aprenderam, com a licença CC BY. À direita, o checklist antes de publicar: todos autorizaram, nenhum dado pessoal, tudo com crédito e lugar seguro; se algum for não, resolva antes.",
    720, 308, "".join(c), "Documente o que fez e confira antes de publicar.")

# ======================= MISSÃO 6 =======================
c = [caixa(160, 14, 400, 170, cor="tinta", fundo="#0f172a", rx=8, larg=3), t(360, 92, "▶️", 48, "papel", 400), t(360, 150, "“Celular no lixo? Não!” · equipe Verde", 13, "papel", 800)]
for k in range(9):
    c.append(emoji(80 + k * 70, 230, "👏" if k % 3 == 0 else "🙂", 28))
c.append(t(360, 270, "🤫 silêncio no vídeo · 👏 aplausos no fim · 💬 algo bom + uma sugestão", 13, "verde", 900))
crit = ["🎯 mensagem", "🎬 qualidade", "⏱️ até 1 min", "📚 créditos", "🔒 segurança"]
for i, rot in enumerate(crit):
    c.append(etiqueta(60 + i * 150, 302, rot, "roxo", 12))
fig("m6", "Critério da rubrica Pergunta",
    "Uma tela de projeção com o vídeo da equipe Verde e, na frente, a plateia sorrindo e aplaudindo. Lembretes: silêncio no vídeo, aplausos no fim, feedback com algo bom + uma sugestão. Embaixo, os critérios da rubrica: mensagem, qualidade, até 1 minuto, créditos e segurança.",
    720, 320, "".join(c), "Na mostra, a plateia também faz a sua parte.")

# ======================= MISSÃO 7 =======================
grade = ["RRYY", "RRYY", "KKWW", "KKWW"]
cores = {"R": "#ef4444", "Y": "#facc15", "K": "#111827", "W": "#ffffff"}
c = []
for i, linha in enumerate(grade):
    for j, ch in enumerate(linha):
        c.append(f'<rect x="{30 + j * 50}" y="{30 + i * 50}" width="50" height="50" fill="{cores[ch]}" stroke="#94a3b8" stroke-width="1.5"/>')
c.append(t(130, 250, "🔍 zoom: cada quadradinho é um pixel", 12, "tinta", 800))
tab = [("🟥", "255, 0, 0"), ("🟨", "255, 255, 0"), ("⬛", "0, 0, 0"), ("⬜", "255, 255, 255")]
c.append(caixa(260, 30, 190, 200, cor="tinta", fundo="papel", rx=10, larg=2) + t(355, 54, "R · G · B", 14, "tinta", 900))
for i, (e, num) in enumerate(tab):
    c.append(emoji(290, 92 + i * 38, e, 20) + t(380, 90 + i * 38, num, 13, "tinta", 800, fonte=MONO))
import math
fy = lambda x: 130 - 46 * math.sin((x - 480) / 210 * 2 * math.pi * 3.5)
pts = " ".join(f"{x},{fy(x):.1f}" for x in range(480, 701, 2))
c.append(f'<polyline points="{pts}" fill="none" stroke="{COR["azul"]}" stroke-width="3"/>')
for k in range(16):
    x = 484 + k * 13.5
    c.append(f'<line x1="{x:.1f}" y1="130" x2="{x:.1f}" y2="{fy(x):.1f}" stroke="{COR["vermelho"]}" stroke-width="2"/><circle cx="{x:.1f}" cy="{fy(x):.1f}" r="3" fill="{COR["vermelho"]}"/>')
c.append(t(590, 214, "🔊 som → amostras (medidas)", 12, "tinta", 800) + t(590, 234, "44.100 por segundo", 12, "suave", 800))
fig("m7", "Cor R (vermelho) G (verde) B (azul)",
    "À esquerda, uma imagem ampliada em 16 quadradinhos coloridos (pixels): vermelho, amarelo, preto e branco. No meio, a tabela RGB: vermelho 255, 0, 0; amarelo 255, 255, 0; preto 0, 0, 0; branco 255, 255, 255. À direita, uma onda de som com linhas vermelhas marcando as amostras: 44.100 por segundo.",
    720, 262, "".join(c), "Foto e som viram números: pixels e amostras.")

# ======================= MISSÃO 8 =======================
cod = ['<h1>Cuide do planeta</h1>', '<p>Leve o celular velho', '   ao ponto de coleta.</p>', '<img src="reciclagem.png"', '     alt="Símbolo da reciclagem">', '<a href="pagina2.html">Saiba mais</a>']
c = [caixa(20, 14, 340, 270, cor="tinta", fundo="#0f172a", rx=10, larg=2), t(190, 38, "📝 pagina.html", 13, "papel", 900, fonte=MONO)]
for i, l in enumerate(cod):
    c.append(t(36, 72 + i * 32, l, 12, "papel", 700, "start", fonte=MONO))
c.append(seta(366, 150, 404, 150, "azul", 3))
c.append(caixa(410, 14, 290, 270, cor="tinta", fundo="papel", rx=10, larg=2) + caixa(410, 14, 290, 30, cor="tinta", fundo="#e5e7eb", rx=10, larg=2) + t(555, 35, "🌐 navegador", 12, "tinta", 900))
c.append(t(555, 80, "Cuide do planeta", 22, "tinta", 900) + t(555, 112, "Leve o celular velho ao ponto de coleta.", 11, "tinta", 600) + emoji(555, 186, "♻️", 60) + t(555, 254, "Saiba mais", 14, "azul", 800, extra='text-decoration="underline"'))
fig("m8", "Tag Para que serve Exemplo",
    "À esquerda, o código de uma página em HTML com as tags h1 (título), p (parágrafo), img com texto alternativo e a (link). À direita, o navegador mostra o resultado: o título grande “Cuide do planeta”, o texto, o símbolo da reciclagem e o link “Saiba mais”.",
    720, 298, "".join(c), "O navegador lê as tags e mostra a página.")

ICONES = {"m1": "♻️", "m2": "📱", "m3": "📝", "m4": "🎬", "m5": "📒", "m6": "🎪", "m7": "🖼️", "m8": "🌐", "rv": "🔁"}

try:
    from cenas_7_4 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-7ano-2027-4bim", F, ICONES))
