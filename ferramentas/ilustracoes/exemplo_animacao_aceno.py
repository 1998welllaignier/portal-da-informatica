"""Exemplo de animação: a Bia levanta o braço, acena 3 vezes e pisca. Gera quadros.json (um SVG por quadro, 24 por segundo)
   e rig.html (as articulações marcadas). Uso: python3 exemplo_animacao_aceno.py <pasta de saída>"""
import sys, math, json
import os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from biblioteca import *
p = TURMA["bia"]; X, Y, S = 200, 380, 1.4
def quadro(ombro, cot, expr, esqueleto=False):
    c = f'<rect width="400" height="420" fill="{COR["parede"]}"/><rect y="330" width="400" height="90" fill="{COR["piso"]}"/>'
    c += personagem(p, X, Y, S, expr=expr, bracos=("normal", "nenhum")) + g(X, Y, S, braco_articulado(p, 1, ombro, cot))
    if esqueleto:
        ox, oy = 30, -132; rad = math.radians(-ombro)  # posição do cotovelo depois de girar o ombro
        ex0, ey0 = 34, -98
        ex = ox + (ex0 - ox) * math.cos(math.radians(ombro)) - (ey0 - oy) * math.sin(math.radians(ombro))
        ey = oy + (ex0 - ox) * math.sin(math.radians(ombro)) + (ey0 - oy) * math.cos(math.radians(ombro))
        pin = lambda x, y, t: f'<circle cx="{X + x*S}" cy="{Y + y*S}" r="9" fill="#fff" stroke="{COR["vermelho"]}" stroke-width="4"/><text x="{X + x*S + 16}" y="{Y + y*S + 5}" font-size="15" font-weight="800" fill="{COR["vermelho"]}">{t}</text>'
        c += pin(ox, oy, "ombro (gira)") + pin(ex, ey, "cotovelo (gira)")
    return cena_svg(400, 420, c)
fr = []
N = 72
for i in range(N):
    t = i / N
    if t < .25: k = t / .25; om = -155 * (1 - (1 - k) ** 2); co = 25 * k            # levanta o braço
    elif t < .8: k = (t - .25) / .55; om = -155; co = 20 + 25 * math.sin(k * 2 * math.pi * 3)  # acena 3 vezes
    else: k = (t - .8) / .2; om = -155 * (1 - k * k); co = 25 * (1 - k)              # abaixa
    expr = "fechados" if 40 <= i <= 42 else "feliz"
    fr.append(quadro(round(om, 1), round(co, 1), expr))
json.dump(fr, open(sys.argv[1] + "/quadros.json", "w"))
open(sys.argv[1] + "/rig.html", "w").write('<!doctype html><body style="margin:0">' + quadro(-155, 25, "feliz", True))
