"""Biblioteca de ilustrações — Estilo B ("linha clara"), aprovado pelo professor em 19/11/2026.

Leia ferramentas/ilustracoes/README.md antes de usar. Tudo devolve trechos de SVG (texto) que se
encaixam em qualquer cena: cada função recebe a posição (x, y) e a escala (s).

    from biblioteca import *
    svg = cena_svg(900, 470, sala() + mesa(60, 250, 580) + monitor(314, 86) + aluno("bia", 700, 420))
"""

TINTA = "#1c1f22"
LW = 2.6

def escurecer(h, f=0.78):
    h = h.lstrip('#'); r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return '#%02x%02x%02x' % tuple(int(c * f) for c in (r, g, b))

def clarear(h, f=0.5):
    h = h.lstrip('#'); r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return '#%02x%02x%02x' % tuple(int(c + (255 - c) * f) for c in (r, g, b))

# ---------- paleta oficial ----------
COR = dict(parede="#fde9c8", parede2="#f8d9a8", piso="#c98b55", piso2="#b07440", ceu="#7cc8ff", ceu2="#bfe6ff", grama="#5dbb63",
           mesa="#d9a066", mesa2="#b97f45", plastico="#f4f6f8", plastico2="#cfd6de", escuro="#2b3440", escuro2="#1d242d", metal="#9aa5b1",
           tela="#2f80ed", tela2="#5aa0ff", led="#58b4ff", azul="#1d6fe0", amarelo="#e09a00", verde="#159a4a", roxo="#7c3aed",
           vermelho="#e5484d", laranja="#ff7a45", rosa="#ff8a8a", branco="#ffffff")

def a(fill, lw=LW, cor=TINTA):
    """preenchimento + contorno preto do Estilo B"""
    return f'fill="{fill}" stroke="{cor}" stroke-width="{lw}" stroke-linejoin="round" stroke-linecap="round"'

def g(x, y, s, corpo, espelhar=False):
    return f'<g transform="translate({x} {y}) scale({-s if espelhar else s} {s})">{corpo}</g>'

def sombra_chao(x, y, rx, ry=8, op=.14):
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="#000" opacity="{op}"/>'

def cena_svg(w, h, corpo, defs=""):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" font-family="DejaVu Sans, sans-serif"><defs>{defs}</defs>{corpo}</svg>'

# =====================================================================
# PERSONAGENS — a turma fixa e o professor (mesmas cores em todo material)
# =====================================================================
TURMA = {
    "bia":   dict(nome="Bia",   pele="#c68642", cabelo="#2a1a12", estilo="coque",    camisa="#ff7a45", calca="#3a5bd9", tenis="#ffffff", detalhe="#ff7a45"),
    "davi":  dict(nome="Davi",  pele="#7a4a2a", cabelo="#1a1110", estilo="afro",     camisa="#1d6fe0", calca="#2b3440", tenis="#e5484d", detalhe="#ffd34d"),
    "lara":  dict(nome="Lara",  pele="#f1c9a5", cabelo="#a0612c", estilo="longo",    camisa="#159a4a", calca="#5b6b8c", tenis="#ffffff", detalhe="#ffd34d"),
    "kaua":  dict(nome="Kauã",  pele="#b07850", cabelo="#1c1410", estilo="espetado", camisa="#ffd34d", calca="#3a5bd9", tenis="#2b3440", detalhe="#1d6fe0"),
    "yara":  dict(nome="Yara",  pele="#a8714a", cabelo="#120c0a", estilo="franja",   camisa="#7c3aed", calca="#2b3440", tenis="#ffffff", detalhe="#ff8a8a"),
}
PROFESSOR = dict(nome="Professor", pele="#c99064", cabelo="#2a1a12", estilo="social", camisa="#1f3c88", calca="#3b3f46", tenis="#3b2a20", detalhe="#ffffff", adulto=True)

def _cabelo_atras(p):
    c, e = p["cabelo"], p["estilo"]
    if e == "afro":  # nuvem redonda e simétrica de cachos
        import math
        pts, n, cx, cy = [], 14, 0, -192
        for i in range(n + 1):
            ang = math.pi * (0.92 + 1.16 * i / n)  # da esquerda, por cima, até a direita
            pts.append((cx + 50 * math.cos(ang), cy + 46 * math.sin(ang)))
        d = f"M{pts[0][0]:.1f} {pts[0][1]:.1f}"
        for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
            mx, my = (x0 + x1) / 2, (y0 + y1) / 2
            d += f" Q{cx + (mx - cx) * 1.16:.1f} {cy + (my - cy) * 1.16:.1f} {x1:.1f} {y1:.1f}"
        d += " L40 -150 Q0 -140 -40 -150 Z"
        return f'<path d="{d}" {a(c)}/>'
    if e == "longo":
        return f'<path d="M-40 -186 q0 -44 40 -46 q40 2 40 46 L44 -122 q-12 8 -24 0 L-20 -122 q-12 8 -24 0 Z" {a(c)}/>'
    if e == "franja":
        return f'<path d="M-40 -186 q0 -44 40 -46 q40 2 40 46 L42 -112 H-42 Z" {a(c)}/>'
    if e == "coque":
        return f'<circle cx="0" cy="-232" r="15" {a(c)}/><path d="M-10 -222 q10 6 20 0" stroke="{p["detalhe"]}" stroke-width="5" fill="none"/>'
    return ""

def _cabelo_frente(p):
    c, e = p["cabelo"], p["estilo"]
    if e == "afro":
        return f'<path d="M-34 -194 q8 -26 34 -26 q26 0 34 26 q-14 -10 -34 -8 q-20 -2 -34 8 Z" {a(c)}/>'
    if e == "espetado":
        return (f'<path d="M-36 -186 l-4 -22 l12 6 l2 -20 l12 12 l8 -20 l8 18 l12 -14 l2 20 l12 -6 l-4 26 q-16 -14 -32 -12 q-14 -2 -30 12 Z" {a(c)}/>')
    if e == "social":
        return f'<path d="M-36 -184 q-2 -36 36 -38 q38 2 36 36 q-4 -10 -10 -14 q-24 10 -56 4 q-4 6 -6 12 Z" {a(c)}/>'
    if e == "franja":
        return f'<path d="M-37 -180 q0 -40 37 -40 q37 0 37 40 q-6 -6 -10 -14 h-54 q-4 8 -10 14 Z" {a(c)}/>'
    if e == "longo":
        return f'<path d="M-37 -182 q2 -38 37 -38 q36 0 37 38 q-26 -2 -40 -22 q-12 18 -34 22 Z" {a(c)}/>'
    # coque e padrão: cabelo puxado para trás
    return f'<path d="M-37 -184 q2 -38 37 -38 q36 0 37 38 q-8 -14 -18 -18 q-18 8 -38 2 q-12 4 -18 16 Z" {a(c)}/>'

def _rosto(p, expr):
    s = []
    olhos = {"feliz": (0, 0), "pensando": (4, -3), "surpreso": (0, 0), "piscando": (0, 0), "preocupado": (0, 1)}[expr]
    for lado in (-1, 1):
        x = lado * 13
        if expr == "piscando" and lado == 1:
            s.append(f'<path d="M{x - 6} -182 q6 5 12 0" stroke="{TINTA}" stroke-width="2.6" fill="none" stroke-linecap="round"/>')
        else:
            ry = 9 if expr == "surpreso" else 7.5
            s.append(f'<ellipse cx="{x}" cy="-182" rx="6.2" ry="{ry}" fill="#fff" stroke="{TINTA}" stroke-width="2"/>')
            s.append(f'<circle cx="{x + olhos[0]}" cy="{-181 + olhos[1]}" r="3.8" fill="{TINTA}"/><circle cx="{x + olhos[0] - 1.3}" cy="{-183 + olhos[1]}" r="1.3" fill="#fff"/>')
        # sobrancelhas
        if expr == "pensando" and lado == 1: sb = f'M{x - 6} -197 q6 -6 12 -2'
        elif expr == "surpreso": sb = f'M{x - 6} -198 q6 -5 12 0'
        elif expr == "preocupado": sb = f'M{x - 6} {-194 if lado == -1 else -196} L{x + 6} {-196 if lado == -1 else -194}'
        else: sb = f'M{x - 6} -194 q6 -4 12 0'
        s.append(f'<path d="{sb}" stroke="{TINTA}" stroke-width="2.6" fill="none" stroke-linecap="round"/>')
    s.append(f'<ellipse cx="-21" cy="-170" rx="6" ry="3.5" fill="{COR["rosa"]}" opacity=".55"/><ellipse cx="21" cy="-170" rx="6" ry="3.5" fill="{COR["rosa"]}" opacity=".55"/>')
    s.append(f'<path d="M-2 -176 q2 3 4 0" stroke="{escurecer(p["pele"], .7)}" stroke-width="2" fill="none" stroke-linecap="round"/>')  # nariz
    boca = {"feliz": f'<path d="M-9 -166 q9 9 18 0 q-9 4 -18 0 Z" {a("#7a2a2a", 2)}/>',
            "piscando": f'<path d="M-9 -166 q9 9 18 0 q-9 4 -18 0 Z" {a("#7a2a2a", 2)}/>',
            "surpreso": f'<ellipse cx="0" cy="-163" rx="5" ry="6" {a("#7a2a2a", 2)}/>',
            "pensando": f'<path d="M-6 -164 q6 -2 12 1" stroke="{TINTA}" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
            "preocupado": f'<path d="M-7 -162 q7 -6 14 0" stroke="{TINTA}" stroke-width="2.4" fill="none" stroke-linecap="round"/>'}[expr]
    s.append(boca)
    return "".join(s)

def _braco(p, lado, pose):
    """lado -1 = esquerda de quem olha; devolve manga + mão"""
    cam, pele = p["camisa"], p["pele"]
    sx = lado * 30
    if pose == "normal":
        return (f'<path d="M{sx} -132 q{lado*12} 24 {lado*10} 56" stroke="{TINTA}" stroke-width="{LW + 15}" stroke-linecap="round" fill="none"/>'
                f'<path d="M{sx} -132 q{lado*12} 24 {lado*10} 56" stroke="{cam}" stroke-width="15" stroke-linecap="round" fill="none"/>'
                f'<circle cx="{sx + lado*10}" cy="-72" r="8" {a(pele)}/>')
    if pose == "acima":   # comemorando: braço em V
        return (f'<path d="M{sx} -132 q{lado*14} -24 {lado*26} -62" stroke="{TINTA}" stroke-width="{LW + 15}" stroke-linecap="round" fill="none"/>'
                f'<path d="M{sx} -132 q{lado*14} -24 {lado*26} -62" stroke="{cam}" stroke-width="15" stroke-linecap="round" fill="none"/>'
                f'<circle cx="{sx + lado*27}" cy="-198" r="9" {a(pele)}/>')
    if pose == "apontar":  # braço esticado para o lado, dedo apontando
        return (f'<path d="M{sx} -130 L{sx + lado*58} -140" stroke="{TINTA}" stroke-width="{LW + 15}" stroke-linecap="round" fill="none"/>'
                f'<path d="M{sx} -130 L{sx + lado*58} -140" stroke="{cam}" stroke-width="15" stroke-linecap="round" fill="none"/>'
                f'<circle cx="{sx + lado*64}" cy="-141" r="8" {a(pele)}/><path d="M{sx + lado*68} -144 l{lado*14} -2" stroke="{TINTA}" stroke-width="{LW + 5}" stroke-linecap="round"/>'
                f'<path d="M{sx + lado*68} -144 l{lado*14} -2" stroke="{pele}" stroke-width="5" stroke-linecap="round"/>')
    if pose == "queixo":  # pensando: cotovelo para fora e mão no queixo
        d = f"M{sx} -132 L{sx + lado*12} -100 L{lado*14} -150"
        return (f'<path d="{d}" stroke="{TINTA}" stroke-width="{LW + 15}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
                f'<path d="{d}" stroke="{cam}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
                f'<circle cx="{lado*14}" cy="-152" r="8.5" {a(pele)}/>')
    raise ValueError(pose)

def personagem(p, x, y, s=1.0, expr="feliz", bracos=("normal", "normal"), espelhar=False, sombra=True):
    """Personagem de frente, em pé. (x, y) = ponto entre os pés. Altura ~250 * s (adulto ~290 * s)."""
    k = 1.16 if p.get("adulto") else 1.0
    c = []
    if sombra: c.append(sombra_chao(0, 0, 40, 7))
    # pernas e tênis
    for lado in (-1, 1):
        c.append(f'<path d="M{lado*16 - 9} -66 L{lado*16 - 8} -8 H{lado*16 + 9} L{lado*16 + 9} -66 Z" {a(p["calca"])}/>')
        c.append(f'<path d="M{lado*16 - 12} -10 q0 -8 10 -8 h6 q{8 + lado*4} 0 {10 + lado*4} 10 v4 h-{30 + lado*4} Z" {a(p["tenis"])}/>')
    c.append(f'<path d="M-28 -78 L-26 -60 H26 L28 -78 Z" {a(p["calca"])}/>')
    # cabelo de trás, braços de trás
    c.append(_cabelo_atras(p))
    for lado, pose in ((-1, bracos[0]), (1, bracos[1])):
        if pose != "queixo": c.append(_braco(p, lado, pose))
    # tronco
    c.append(f'<path d="M-30 -138 q30 -12 60 0 L32 -74 q-32 6 -64 0 Z" {a(p["camisa"])}/>')
    c.append(f'<path d="M14 -136 q14 4 16 2 L32 -76 q-8 2 -14 2 Z" fill="{escurecer(p["camisa"], .85)}"/>')
    if p.get("adulto"):
        c.append(f'<path d="M-10 -144 L0 -126 L10 -144" {a("#ffffff", 2)}/><rect x="10" y="-122" width="16" height="11" rx="2" {a("#ffffff", 1.8)}/>')
    else:
        c.append(f'<path d="M-12 -144 q12 10 24 0" {a(p["detalhe"], 2)}/>')
    # pescoço e cabeça
    c.append(f'<rect x="-8" y="-152" width="16" height="16" {a(p["pele"])}/>')
    c.append(f'<ellipse cx="-38" cy="-178" rx="6" ry="9" {a(p["pele"])}/><ellipse cx="38" cy="-178" rx="6" ry="9" {a(p["pele"])}/>')
    c.append(f'<path d="M-37 -186 q0 -38 37 -38 q37 0 37 38 q0 34 -37 38 q-37 -4 -37 -38 Z" {a(p["pele"])}/>')
    c.append(_cabelo_frente(p))
    c.append(_rosto(p, expr))
    for lado, pose in ((-1, bracos[0]), (1, bracos[1])):  # mão no queixo fica na frente do corpo
        if pose == "queixo": c.append(_braco(p, lado, pose))
    return g(x, y, s * k, "".join(c), espelhar)

def aluno(chave, x, y, s=1.0, **kw):
    return personagem(TURMA[chave], x, y, s, **kw)

def professor(x, y, s=1.0, **kw):
    return personagem(PROFESSOR, x, y, s, **kw)

# =====================================================================
# OBJETOS DE INFORMÁTICA (coordenadas locais; posicione com x, y, s)
# =====================================================================
def monitor(x, y, s=1.0, tela_html=None):
    """Monitor de 220 x 168 (com base). tela_html: SVG desenhado dentro da área 204 x 122 (origem no canto da tela)."""
    c = COR; o = []
    o.append(f'<path d="M94 136 H126 L132 158 H88 Z" {a(c["escuro"])}/><ellipse cx="110" cy="161" rx="40" ry="5" {a(c["escuro"])}/>')
    o.append(f'<rect x="0" y="0" width="220" height="140" rx="7" {a(c["escuro"])}/>')
    o.append(f'<rect x="8" y="8" width="204" height="122" fill="{c["tela"]}"/><path d="M8 8 h204 v40 q-102 22 -204 0z" fill="{c["tela2"]}" opacity=".55"/>')
    if tela_html: o.append(f'<g transform="translate(8 8)">{tela_html}</g>')
    o.append(f'<path d="M176 10 L156 128" stroke="#fff" stroke-width="10" opacity=".08"/><circle cx="110" cy="135" r="2" fill="{c["led"]}"/>')
    return g(x, y, s, "".join(o))

def teclado(x, y, s=1.0):
    """Teclado visto de cima em perspectiva, 162 x 12."""
    o = [f'<path d="M8 0 H162 L154 12 H0 Z" {a(COR["plastico2"])}/>']
    for row in range(3):
        for k in range(14 - row):
            o.append(f'<rect x="{12 - row*2.4 + k*10.4 + row*3}" y="{2 + row*3.2}" width="8" height="2.4" rx=".6" fill="#fff"/>')
    o.append('<rect x="42" y="11.2" width="56" height="2.2" rx=".6" fill="#fff"/>')
    return g(x, y, s, "".join(o))

def mouse(x, y, s=1.0, mousepad=True):
    o = [f'<ellipse cx="0" cy="3" rx="22" ry="5" fill="#33405a"/>'] if mousepad else []
    o.append(f'<ellipse cx="0" cy="0" rx="8" ry="5" {a(COR["plastico"])}/><path d="M0 -4.5 V-1" stroke="{COR["metal"]}" stroke-width="1.2"/>')
    return g(x, y, s, "".join(o))

def gabinete(x, y, s=1.0):
    """Gabinete (torre) de 66 x 134, com frente e lateral."""
    c = COR; o = []
    o.append(f'<path d="M54 8 L66 0 V126 L54 134 Z" {a(c["escuro2"])}/>')
    o.append(f'<rect x="0" y="8" width="54" height="126" rx="4" {a(c["escuro"])}/>')
    o.append(f'<path d="M8 20 H46 M8 30 H46" stroke="#6b7685" stroke-width="2"/>')
    o.append(f'<circle cx="27" cy="50" r="7" fill="{c["escuro2"]}" stroke="{c["led"]}" stroke-width="2.5"/>')
    o.append(f'<rect x="13" y="68" width="10" height="5" rx="1" fill="{c["metal"]}"/><rect x="31" y="68" width="10" height="5" rx="1" fill="{c["metal"]}"/>')
    for k in range(5): o.append(f'<path d="M10 {88 + k*8} H44" stroke="#56606d" stroke-width="2"/>')
    return g(x, y, s, "".join(o))

def caixa_som(x, y, s=1.0):
    c = COR
    return g(x, y, s, f'<rect x="0" y="0" width="32" height="62" rx="5" {a(c["escuro"])}/><circle cx="16" cy="18" r="6" fill="#56606d"/><circle cx="16" cy="42" r="10" fill="#56606d"/><circle cx="16" cy="42" r="4" fill="{c["escuro2"]}"/>')

def impressora(x, y, s=1.0, papel=True):
    c = COR; o = []
    o.append(f'<path d="M14 30 L18 0 H86 L90 30 Z" {a(c["plastico2"])}/>')
    o.append(f'<rect x="0" y="30" width="104" height="42" rx="6" {a(c["plastico"])}/><rect x="0" y="58" width="104" height="14" rx="3" {a(c["plastico2"])}/>')
    if papel: o.append(f'<path d="M22 58 L18 78 H86 L82 58 Z" {a("#fff")}/><path d="M28 66 H76 M30 72 H68" stroke="#9aa5b1" stroke-width="2"/>')
    o.append(f'<circle cx="92" cy="44" r="3.5" fill="{c["verde"]}"/>')
    return g(x, y, s, "".join(o))

def microfone(x, y, s=1.0):
    c = COR
    return g(x, y, s, f'<ellipse cx="0" cy="46" rx="12" ry="3.5" {a(c["escuro"])}/><path d="M0 44 V22" stroke="{c["escuro"]}" stroke-width="3"/><rect x="-7" y="0" width="14" height="24" rx="7" {a(c["metal"])}/><path d="M-5 8 H5 M-5 14 H5" stroke="#6b7685" stroke-width="1.4"/>')

def processador(x, y, s=1.0):
    o = [f'<rect x="0" y="0" width="40" height="40" rx="3" fill="#cbd2db" stroke="#6b7685" stroke-width="1.5"/><rect x="8" y="8" width="24" height="24" rx="2" fill="{COR["metal"]}"/>']
    for k in range(5): o.append(f'<path d="M{4 + k*8} 0 v-4 M{4 + k*8} 40 v4 M0 {4 + k*8} h-4 M40 {4 + k*8} h4" stroke="#c9a227" stroke-width="1.6"/>')
    return g(x, y, s, "".join(o))

def ssd(x, y, s=1.0):
    o = [f'<rect x="0" y="0" width="66" height="22" rx="2" fill="#2f6b3a" stroke="#1c3d22" stroke-width="1.2"/><rect x="6" y="4" width="18" height="14" fill="{TINTA}"/><rect x="30" y="4" width="18" height="14" fill="{TINTA}"/><circle cx="59" cy="11" r="3" fill="none" stroke="#c9a227" stroke-width="1.5"/>']
    for k in range(8): o.append(f'<rect x="{2 + k*3.2}" y="22" width="2" height="4" fill="#c9a227"/>')
    return g(x, y, s, "".join(o))

# =====================================================================
# CENÁRIOS
# =====================================================================
def sala(w=900, h=470, chao=300, janela=True, relogio=True):
    """Parede, rodapé, piso de tábuas, janela com céu e relógio (plano de fundo)."""
    c = COR; o = [f'<rect width="{w}" height="{chao}" fill="{c["parede"]}"/>', f'<rect y="{chao - 18}" width="{w}" height="18" fill="{c["parede2"]}"/>',
                  f'<rect y="{chao}" width="{w}" height="{h - chao}" fill="{c["piso"]}"/>']
    for k in range(0, w + 90, 90): o.append(f'<path d="M{k} {chao} L{k - 60} {h}" stroke="{c["piso2"]}" stroke-width="2"/>')
    if janela:
        o.append(f'<rect x="36" y="36" width="150" height="150" rx="4" {a("#fff")}/><rect x="46" y="46" width="130" height="130" fill="{c["ceu"]}"/><rect x="46" y="120" width="130" height="56" fill="{c["ceu2"]}"/>')
        o.append(f'<circle cx="150" cy="74" r="14" fill="#ffd34d"/><path d="M62 104 q8-14 22-8 q6-12 20-4 q14 0 12 12 z" fill="#fff"/><path d="M46 160 q30-22 60-6 q30-20 70 2 v20 h-130z" fill="{c["grama"]}"/>')
        o.append(f'<path d="M111 46 V176 M46 111 H176" stroke="#fff" stroke-width="6"/><rect x="30" y="184" width="162" height="10" rx="3" {a("#fff")}/>')
    if relogio:
        o.append(f'<circle cx="{w - 70}" cy="70" r="26" {a("#fff")}/><path d="M{w - 70} 70 V54 M{w - 70} 70 L{w - 58} 76" stroke="{TINTA}" stroke-width="2.5" stroke-linecap="round"/>')
    return "".join(o)

def mesa(x, y, larg, alt=150):
    """Mesa de madeira: tampo em perspectiva em (x, y), pernas até y + alt."""
    c = COR
    return (f'<rect x="{x + 18}" y="{y + 20}" width="14" height="{alt - 20}" {a(c["mesa2"])}/><rect x="{x + larg - 32}" y="{y + 20}" width="14" height="{alt - 20}" {a(c["mesa2"])}/>'
            f'<path d="M{x + 12} {y} H{x + larg} L{x + larg - 12} {y + 12} H{x} Z" {a(c["mesa"])}/><rect x="{x}" y="{y + 12}" width="{larg}" height="14" {a(c["mesa2"])}/>'
            f'<path d="M{x + 30} {y + 5} H{x + larg * .4} M{x + larg * .5} {y + 8} H{x + larg * .85}" stroke="{c["mesa2"]}" stroke-width="1.2" opacity=".7"/>')

# =====================================================================
# CAMADA QUE ENSINA
# =====================================================================
def marcadores():
    return "".join(f'<marker id="seta-{n}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="{COR[n]}"/></marker>'
                   for n in ("azul", "amarelo", "verde", "roxo", "vermelho"))

def etiqueta(x, y, num, titulo, sub, cor):
    larg = max(len(titulo) * 10.2, len(sub) * 7.0) + 54
    return (f'<rect x="{x}" y="{y}" width="{larg}" height="46" rx="10" fill="#fff" stroke="{COR[cor]}" stroke-width="2.5"/>'
            f'<circle cx="{x + 22}" cy="{y + 23}" r="13" fill="{COR[cor]}"/><text x="{x + 22}" y="{y + 28}" font-size="14" font-weight="800" text-anchor="middle" fill="#fff">{num}</text>'
            f'<text x="{x + 42}" y="{y + 20}" font-size="14" font-weight="800" fill="{COR[cor]}">{titulo}</text><text x="{x + 42}" y="{y + 37}" font-size="11.5" fill="{TINTA}">{sub}</text>')

def destaque(x, y, w, h, cor):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="none" stroke="{COR[cor]}" stroke-width="2.5" stroke-dasharray="6 4"/>'

def seta(d, cor, tracejada=False, lw=3):
    return f'<path d="{d}" stroke="{COR[cor]}" stroke-width="{lw}" fill="none"{" stroke-dasharray=\"9 6\"" if tracejada else ""} marker-end="url(#seta-{cor})"/>'

def certo(x, y, r=16):
    return f'<circle cx="{x}" cy="{y}" r="{r}" {a(COR["verde"])}/><path d="M{x - r*.45} {y} l{r*.3} {r*.35} l{r*.55} -{r*.65}" stroke="#fff" stroke-width="{r*.28}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'

def errado(x, y, r=16):
    return f'<circle cx="{x}" cy="{y}" r="{r}" {a(COR["vermelho"])}/><path d="M{x - r*.4} {y - r*.4} l{r*.8} {r*.8} M{x + r*.4} {y - r*.4} l-{r*.8} {r*.8}" stroke="#fff" stroke-width="{r*.28}" stroke-linecap="round"/>'
