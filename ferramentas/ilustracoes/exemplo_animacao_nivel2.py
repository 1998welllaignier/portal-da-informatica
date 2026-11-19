"""Exemplo de animação no NÍVEL 2: a Bia levanta o braço, acena (ombro, cotovelo e punho), inclina a cabeça,
pisca e fala "Oi, turma!". Gera quadros.json (um SVG por quadro, 24 por segundo) e rig.html (articulações marcadas).
Uso: python3 exemplo_animacao_nivel2.py <pasta de saída>"""
import sys, os, math, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from biblioteca import COR, cena_svg, g
from personagem_nivel2 import bia_n2, OMBRO, REPOUSO, BRACO, ANTEBRACO

X, Y, S = 220, 470, 1.55
def fundo():
    return f'<rect width="460" height="500" fill="{COR["parede"]}"/><rect y="410" width="460" height="90" fill="{COR["piso"]}"/>'
def balao(txt):
    return (f'<path d="M24 40 h170 q14 0 14 14 v40 q0 14 -14 14 h-42 l18 24 l-40 -24 h-108 q-14 0 -14 -14 v-40 q0 -14 14 -14 Z" fill="#fff" stroke="#1c1f22" stroke-width="3"/>'
            f'<text x="109" y="84" font-size="26" font-weight="800" text-anchor="middle" fill="#1c1f22">{txt}</text>')
def quadro(om, co, mao, olhos, inc, boca, sobe, fala=False, rig=False):
    c = fundo() + g(X, Y, S, bia_n2(om, co, mao, olhos, inc, boca, sobe))
    if fala: c += balao("Oi, turma!")
    if rig:
        ox, oy = OMBRO
        def gira(px, py, cx, cy, ang):
            r = math.radians(ang); return cx + (px - cx) * math.cos(r) - (py - cy) * math.sin(r), cy + (px - cx) * math.sin(r) + (py - cy) * math.cos(r)
        ex, ey = gira(ox, oy + BRACO, ox, oy, om + REPOUSO)
        px, py = gira(ox, oy + BRACO + ANTEBRACO, ox, oy, om + REPOUSO); px, py = gira(px, py, ex, ey, co)
        pin = lambda x, y, t, dx=14: (f'<circle cx="{X + x*S}" cy="{Y + y*S}" r="8" fill="#fff" stroke="{COR["vermelho"]}" stroke-width="4"/>'
                                     f'<text x="{X + x*S + dx}" y="{Y + y*S + 5}" font-size="15" font-weight="800" fill="{COR["vermelho"]}">{t}</text>')
        c += pin(ox, oy, "1 ombro") + pin(ex, ey, "2 cotovelo") + pin(px, py, "3 punho") + pin(0, -166, "4 pescoço", -100)
    return cena_svg(460, 500, c)

def quadros():
    fr, N = [], 84
    for i in range(N):
        t = i / N
        if t < .2: k = t / .2; e = 1 - (1 - k) ** 2; om, co, mao = -150 * e, 20 * e, 0
        elif t < .7: k = (t - .2) / .5; w = math.sin(k * 2 * math.pi * 3); om, co, mao = -150, 20 + 22 * w, 12 * w
        else: om, co, mao = -150, 20, 0
        inc = 5 * math.sin(i / N * 2 * math.pi * 2) if .2 <= t < .7 else 0
        olhos = "fechados" if i in (44, 45, 46) else "abertos"
        fala = t >= .72
        boca = ("fala" if (i // 3) % 2 == 0 else "sorriso") if fala and i < N - 6 else "sorriso"
        sobe = -2 * abs(math.sin(i / 3)) if .2 <= t < .7 else 0
        fr.append(quadro(round(om, 1), round(co, 1), round(mao, 1), olhos, round(inc, 1), boca, round(sobe, 1), fala))
    return fr

if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "."
    json.dump(quadros(), open(os.path.join(out, "quadros.json"), "w"))
    open(os.path.join(out, "rig.html"), "w").write('<!doctype html><body style="margin:0">' + quadro(-150, 20, 0, "abertos", 0, "sorriso", 0, rig=True))
