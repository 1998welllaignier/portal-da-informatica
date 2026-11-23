"""Painel "Brincadeiras que viram arte" — releitura no estilo de Ivan Cruz (cenas NOVAS, desenhadas por código).
Linguagem visual: cores puras, casinhas coloridas ao fundo, chão em faixas, crianças em movimento SEM rosto, contorno escuro."""
import math, random

TINTA = "#1d1a1f"          # contorno escuro
PELES = ["#f1c9a0", "#d9a77a", "#b97d52", "#8d5634", "#6b3f25", "#e7b98e"]
CABELOS = ["#2a1b14", "#3b2416", "#1a1412", "#5a3a1e"]
CORES = ["#e8312f", "#f6c518", "#1e9e4a", "#1f5fd1", "#8e3fbf", "#ec5fa4", "#f08a1c", "#17a7b8", "#7cc142"]
CASAS = ["#e8312f", "#f6c518", "#1e9e4a", "#1f5fd1", "#8e3fbf", "#ec5fa4", "#f08a1c", "#17a7b8"]
CEUS = ["#7ec8ef", "#8fd3f4", "#6fbde8", "#9ad8f2"]
CHAOS = [("#f3e3b5", "#e8b9a1", "#d66b4a"), ("#f1dfa8", "#d9a8b8", "#c8553d"), ("#efe2c0", "#e4b07a", "#b9493a"), ("#f5e9c8", "#e9c3c8", "#d96d3f")]


def P(a, b, ang, L):
    r = math.radians(ang)
    return (a + L * math.sin(r), b + L * math.cos(r))   # 0° = para baixo, 90° = para a direita, 180° = para cima


def membro(p0, a1, a2, L1, L2, w, cor, roupa=None, frac=0.0, rcor=None):
    p1 = P(*p0, a1, L1); p2 = P(*p1, a2, L2)
    d = f"M{p0[0]:.1f},{p0[1]:.1f} L{p1[0]:.1f},{p1[1]:.1f} L{p2[0]:.1f},{p2[1]:.1f}"
    s = f'<path d="{d}" stroke="{TINTA}" stroke-width="{w+5:.1f}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    s += f'<path d="{d}" stroke="{cor}" stroke-width="{w:.1f}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    if roupa:   # manga ou bermuda cobrindo o começo do membro
        q = P(*p0, a1, L1 * frac)
        s += f'<path d="M{p0[0]:.1f},{p0[1]:.1f} L{q[0]:.1f},{q[1]:.1f}" stroke="{TINTA}" stroke-width="{w+9:.1f}" stroke-linecap="round"/>'
        s += f'<path d="M{p0[0]:.1f},{p0[1]:.1f} L{q[0]:.1f},{q[1]:.1f}" stroke="{roupa}" stroke-width="{w+4:.1f}" stroke-linecap="round"/>'
    return s, p2


def crianca(x, y, s=1.0, pose=None, roupa=None, pele=None, cabelo="curto", ccab=None, lean=0, menina=False, extra_mao=None):
    """x,y = ponto entre os pés (chão). pose: pernas e braços em graus (0 baixo, 90 direita, 180 cima)."""
    pose = pose or {}
    pe = pele or random.choice(PELES); cc = ccab or random.choice(CABELOS)
    ro = roupa or {}
    blusa = ro.get("blusa", random.choice(CORES)); baixo = ro.get("baixo", random.choice(CORES)); vestido = ro.get("vestido")
    hip = (x + lean * 0.3 * s, y - 70 * s + pose.get("agacha", 0) * s)
    ombro = (hip[0] + lean * s, hip[1] - 46 * s)
    ll = pose.get("pe", [(-12, -6), (12, 6)]); aa = pose.get("br", [(-30, -20), (30, 20)])
    w_l, w_a = 11 * s, 8.5 * s
    out = []
    # trás: braço e perna de trás
    sb, mb = membro((ombro[0] + 9 * s, ombro[1] + 3 * s), *aa[1], 24 * s, 22 * s, w_a, pe, blusa, .45)
    sp, pp = membro((hip[0] + 6 * s, hip[1]), *ll[1], 37 * s, 35 * s, w_l, pe, None if vestido else baixo, .5)
    out += [sb, sp]
    # pé de trás
    out.append(f'<ellipse cx="{pp[0]+4*s:.1f}" cy="{pp[1]:.1f}" rx="{8*s:.1f}" ry="{4.5*s:.1f}" fill="{TINTA}"/>')
    sp2, pp2 = membro((hip[0] - 6 * s, hip[1]), *ll[0], 37 * s, 35 * s, w_l, pe, None if vestido else baixo, .5)
    # tronco
    tl = (ombro[0] - 14 * s, ombro[1]); tr = (ombro[0] + 14 * s, ombro[1])
    if vestido:
        bl = (hip[0] - 22 * s, hip[1] + 20 * s); br = (hip[0] + 22 * s, hip[1] + 20 * s)
        out.append(f'<path d="M{tl[0]:.1f},{tl[1]:.1f} Q{ombro[0]:.1f},{ombro[1]-5*s:.1f} {tr[0]:.1f},{tr[1]:.1f} L{br[0]:.1f},{br[1]:.1f} Q{hip[0]:.1f},{hip[1]+26*s:.1f} {bl[0]:.1f},{bl[1]:.1f} Z" fill="{vestido}" stroke="{TINTA}" stroke-width="{3*s:.1f}" stroke-linejoin="round"/>')
        if ro.get("bolinhas"):
            for i in range(9):
                bx = hip[0] + random.uniform(-15, 15) * s; by = hip[1] + random.uniform(-35, 15) * s
                out.append(f'<circle cx="{bx:.1f}" cy="{by:.1f}" r="{2.4*s:.1f}" fill="#fff" opacity=".85"/>')
    else:
        bl = (hip[0] - 12 * s, hip[1] + 4 * s); br = (hip[0] + 12 * s, hip[1] + 4 * s)
        out.append(f'<path d="M{hip[0]-13*s:.1f},{hip[1]-4*s:.1f} L{hip[0]+13*s:.1f},{hip[1]-4*s:.1f} L{hip[0]+14*s:.1f},{hip[1]+10*s:.1f} L{hip[0]-14*s:.1f},{hip[1]+10*s:.1f} Z" fill="{baixo}" stroke="{TINTA}" stroke-width="{3*s:.1f}"/>')
        out.append(f'<path d="M{tl[0]:.1f},{tl[1]:.1f} Q{ombro[0]:.1f},{ombro[1]-5*s:.1f} {tr[0]:.1f},{tr[1]:.1f} L{br[0]+1*s:.1f},{br[1]:.1f} L{bl[0]-1*s:.1f},{bl[1]:.1f} Z" fill="{blusa}" stroke="{TINTA}" stroke-width="{3*s:.1f}" stroke-linejoin="round"/>')
        if ro.get("numero"):
            out.append(f'<text x="{ombro[0]:.1f}" y="{ombro[1]+26*s:.1f}" font-size="{14*s:.1f}" font-family="Lilita" fill="#fff" text-anchor="middle">{ro["numero"]}</text>')
    out.append(sp2)
    out.append(f'<ellipse cx="{pp2[0]-3*s:.1f}" cy="{pp2[1]:.1f}" rx="{8*s:.1f}" ry="{4.5*s:.1f}" fill="{TINTA}"/>')
    sf, mf = membro((ombro[0] - 9 * s, ombro[1] + 3 * s), *aa[0], 24 * s, 22 * s, w_a, pe, blusa, .45)
    # cabeça sem rosto (marca do estilo)
    hx, hy = ombro[0] + lean * .25 * s, ombro[1] - 19 * s
    out.append(f'<rect x="{ombro[0]-4*s:.1f}" y="{ombro[1]-8*s:.1f}" width="{8*s:.1f}" height="{9*s:.1f}" fill="{pe}" stroke="{TINTA}" stroke-width="{2*s:.1f}"/>')
    if cabelo in ("rabo", "lacos", "trancas"):
        lado = 1 if cabelo == "rabo" else 0
        if cabelo == "rabo":
            out.append(f'<path d="M{hx+10*s:.1f},{hy-6*s:.1f} q{16*s:.1f},{2*s:.1f} {14*s:.1f},{20*s:.1f} q{-8*s:.1f},{-6*s:.1f} {-12*s:.1f},{-12*s:.1f} z" fill="{cc}" stroke="{TINTA}" stroke-width="{2*s:.1f}"/>')
        if cabelo == "trancas":
            for sx in (-1, 1):
                out.append(f'<path d="M{hx+sx*11*s:.1f},{hy-2*s:.1f} q{sx*6*s:.1f},{10*s:.1f} {sx*3*s:.1f},{22*s:.1f}" stroke="{TINTA}" stroke-width="{7*s:.1f}" fill="none" stroke-linecap="round"/>'
                           f'<path d="M{hx+sx*11*s:.1f},{hy-2*s:.1f} q{sx*6*s:.1f},{10*s:.1f} {sx*3*s:.1f},{22*s:.1f}" stroke="{cc}" stroke-width="{4.5*s:.1f}" fill="none" stroke-linecap="round"/>')
    out.append(f'<ellipse cx="{hx:.1f}" cy="{hy:.1f}" rx="{12.5*s:.1f}" ry="{14.5*s:.1f}" fill="{pe}" stroke="{TINTA}" stroke-width="{3*s:.1f}"/>')
    # cabelo (só a parte de cima: o rosto fica liso)
    out.append(f'<path d="M{hx-13*s:.1f},{hy-1*s:.1f} Q{hx-12*s:.1f},{hy-17*s:.1f} {hx:.1f},{hy-15.5*s:.1f} Q{hx+12*s:.1f},{hy-17*s:.1f} {hx+13*s:.1f},{hy-1*s:.1f} Q{hx+6*s:.1f},{hy-9*s:.1f} {hx:.1f},{hy-9*s:.1f} Q{hx-7*s:.1f},{hy-9*s:.1f} {hx-13*s:.1f},{hy-1*s:.1f} Z" fill="{cc}" stroke="{TINTA}" stroke-width="{2*s:.1f}"/>')
    if cabelo == "lacos" or ro.get("laco"):
        lc = ro.get("laco", "#e8312f")
        for sx in ((-1, 1) if cabelo == "lacos" else (1,)):
            cx_, cy_ = hx + sx * 12 * s, hy - 12 * s
            out.append(f'<path d="M{cx_:.1f},{cy_:.1f} l{-8*s:.1f},{-6*s:.1f} l0,{12*s:.1f} z M{cx_:.1f},{cy_:.1f} l{8*s:.1f},{-6*s:.1f} l0,{12*s:.1f} z" fill="{lc}" stroke="{TINTA}" stroke-width="{1.6*s:.1f}"/>')
    if ro.get("bone"):
        out.append(f'<path d="M{hx-13*s:.1f},{hy-5*s:.1f} Q{hx:.1f},{hy-26*s:.1f} {hx+13*s:.1f},{hy-5*s:.1f} Z" fill="{ro["bone"]}" stroke="{TINTA}" stroke-width="{2.2*s:.1f}"/>'
                   f'<path d="M{hx+8*s:.1f},{hy-6*s:.1f} l{14*s:.1f},{2*s:.1f}" stroke="{TINTA}" stroke-width="{4*s:.1f}" stroke-linecap="round"/>')
    out.append(sf)
    return "".join(out), {"mao_f": mf, "mao_t": mb, "pe_f": pp2, "pe_t": pp, "cabeca": (hx, hy), "quadril": hip, "ombro": ombro}


def casinhas(seed, y0=150, h=95, larg=400):
    random.seed(seed); out = []; x = -random.randint(10, 40)
    cores = CASAS[:]; random.shuffle(cores); i = 0
    while x < larg:
        w = random.randint(70, 95); hh = h + random.randint(-10, 12); cor = cores[i % len(cores)]; i += 1
        top = y0 - hh; tel = random.choice([22, 28, 34])
        out.append(f'<path d="M{x},{y0} L{x},{top} L{x+w/2},{top-tel} L{x+w},{top} L{x+w},{y0} Z" fill="{cor}" stroke="{TINTA}" stroke-width="2.5" stroke-linejoin="round"/>')
        out.append(f'<path d="M{x-3},{top+1} L{x+w/2},{top-tel-1} L{x+w+3},{top+1}" fill="none" stroke="{TINTA}" stroke-width="5" stroke-linecap="round"/>')
        # porta e janela com cores contrastantes
        pc = random.choice([c for c in CASAS if c != cor]); jc = random.choice(["#fff3c4", "#bfe7ff", "#ffffff"])
        dx = x + w * random.choice([.18, .55]); out.append(f'<rect x="{dx:.0f}" y="{y0-34}" width="{w*.22:.0f}" height="34" fill="{pc}" stroke="{TINTA}" stroke-width="2"/>')
        jx = x + (w * .62 if dx < x + w * .4 else w * .14)
        out.append(f'<rect x="{jx:.0f}" y="{top+16}" width="{w*.22:.0f}" height="{w*.2:.0f}" fill="{jc}" stroke="{TINTA}" stroke-width="2"/>'
                   f'<path d="M{jx+w*.11:.0f},{top+16} v{w*.2:.0f} M{jx:.0f},{top+16+w*.1:.0f} h{w*.22:.0f}" stroke="{TINTA}" stroke-width="1.4"/>')
        x += w + random.randint(4, 14)
    return "".join(out)


def poste(x, y0=150):
    return (f'<path d="M{x},{y0} L{x+4},{y0-120}" stroke="{TINTA}" stroke-width="5"/><path d="M{x-14},{y0-104} L{x+20},{y0-108}" stroke="{TINTA}" stroke-width="4"/>'
            f'<path d="M{x-14},{y0-104} Q{x-120},{y0-80} {-30},{y0-95} M{x+20},{y0-108} Q{x+150},{y0-88} {460},{y0-100}" stroke="{TINTA}" stroke-width="1.6" fill="none"/>')


def chao(seed, y0=150):
    random.seed(seed + 99); c = random.choice(CHAOS)
    a, b = random.randint(-14, 14), random.randint(-14, 14)
    return (f'<rect x="-10" y="{y0}" width="420" height="170" fill="{c[0]}"/>'
            f'<path d="M-10,{y0+58+a} L410,{y0+40+b} L410,{y0+90+b} L-10,{y0+118+a} Z" fill="{c[1]}"/>'
            f'<path d="M-10,{y0+118+a} L410,{y0+90+b} L410,330 L-10,330 Z" fill="{c[2]}"/>'
            f'<path d="M-10,{y0} L410,{y0}" stroke="{TINTA}" stroke-width="2.5"/>')


def ceu(seed):
    random.seed(seed + 7); c = random.choice(CEUS)
    nuv = "".join(f'<ellipse cx="{random.randint(20,380)}" cy="{random.randint(14,40)}" rx="{random.randint(18,30)}" ry="7" fill="#fff" opacity=".75"/>' for _ in range(2))
    return f'<rect x="-10" y="-10" width="420" height="200" fill="{c}"/>{nuv}'


def cena(seed, corpo, postes=False, yh=150):
    return ceu(seed) + casinhas(seed, yh) + (poste(random.randint(250, 350), yh) if postes else "") + chao(seed, yh) + corpo


# ---------------- as 12 brincadeiras ----------------
def c_piao():
    random.seed(1)
    a, m = crianca(120, 262, 1.3, {"pe": [(-20, -8), (16, 10)], "br": [(30, 70), (-40, -10)]}, {"blusa": "#1f5fd1", "baixo": "#f6c518"}, lean=10)
    b, m2 = crianca(300, 266, 1.25, {"pe": [(-6, -4), (10, 4)], "br": [(-60, -90), (40, 20)], "agacha": 6}, {"blusa": "#e8312f", "baixo": "#1e9e4a", "bone": "#f6c518"}, lean=-6)
    px, py = 210, 268
    pi = (f'<path d="M{px-14},{py-22} L{px+14},{py-22} L{px},{py} Z" fill="#f08a1c" stroke="{TINTA}" stroke-width="2.5"/>'
          f'<path d="M{px-14},{py-22} Q{px},{py-30} {px+14},{py-22}" fill="#e8312f" stroke="{TINTA}" stroke-width="2.5"/>'
          f'<path d="M{px-9},{py-15} L{px+9},{py-15}" stroke="#1f5fd1" stroke-width="3"/><path d="M{px-30},{py-12} q8,-4 16,0 M{px+16},{py-10} q8,-4 16,0" stroke="{TINTA}" stroke-width="1.6" fill="none"/>')
    corda = f'<path d="M{m[0]:.0f},{m[1]:.0f} Q{(m[0]+px)/2:.0f},{py-50} {px},{py-26}" stroke="#fff" stroke-width="2.5" fill="none"/>'
    return cena(1, a + b + pi + corda)


def c_corda():
    random.seed(2)
    a, ma = crianca(55, 262, 1.15, {"br": [(150, 120), (60, 40)]}, {"blusa": "#f6c518", "baixo": "#1f5fd1"}, lean=-4)
    c, mc = crianca(345, 262, 1.15, {"br": [(-60, -40), (-150, -120)]}, {"blusa": "#1e9e4a", "baixo": "#e8312f"}, lean=4)
    b, mb = crianca(200, 240, 1.3, {"pe": [(-40, 20), (30, -20)], "br": [(-120, -150), (120, 150)]}, {"vestido": "#e8312f", "bolinhas": True}, cabelo="lacos", menina=True, ccab="#2a1b14")
    corda = f'<path d="M{ma[0]:.0f},{ma[1]:.0f} Q200,330 {mc[0]:.0f},{mc[1]:.0f}" stroke="{TINTA}" stroke-width="5" fill="none"/><path d="M{ma[0]:.0f},{ma[1]:.0f} Q200,330 {mc[0]:.0f},{mc[1]:.0f}" stroke="#fff" stroke-width="2.5" fill="none"/>'
    return cena(2, a + c + corda + b)


def c_pipa():
    random.seed(3)
    a, m = crianca(140, 268, 1.35, {"pe": [(-25, -10), (20, 30)], "br": [(150, 140), (40, 20)]}, {"blusa": "#e8312f", "baixo": "#1f5fd1"}, lean=-8)
    b, m2 = crianca(290, 266, 1.1, {"br": [(140, 130), (-30, -20)]}, {"vestido": "#f6c518"}, cabelo="rabo", menina=True)
    kx, ky = 320, 40
    pipa = (f'<path d="M{kx},{ky-26} L{kx+20},{ky} L{kx},{ky+30} L{kx-20},{ky} Z" fill="#ec5fa4" stroke="{TINTA}" stroke-width="2.5"/>'
            f'<path d="M{kx},{ky-26} L{kx},{ky+30} M{kx-20},{ky} L{kx+20},{ky}" stroke="{TINTA}" stroke-width="1.5"/>'
            f'<path d="M{kx},{ky+30} q-10,15 0,25 q10,10 -4,22" stroke="{TINTA}" stroke-width="1.6" fill="none"/>'
            + "".join(f'<path d="M{kx-6+(i%2)*4},{ky+40+i*12} l6,-4 l6,4 l-6,4 z" fill="{CORES[i]}" stroke="{TINTA}" stroke-width="1"/>' for i in range(3))
            + f'<path d="M{m[0]:.0f},{m[1]:.0f} Q{kx-80},{ky+60} {kx},{ky+2}" stroke="#fff" stroke-width="1.6" fill="none"/>')
    return cena(3, pipa + b + a, postes=True)


def c_amarelinha():
    random.seed(4)
    q = ""
    xs = [(120, 290), (170, 270), (200, 250), (240, 232), (262, 214), (300, 198)]
    for i, (x, y) in enumerate(xs):
        q += f'<path d="M{x},{y} l44,-6 l10,-18 l-44,6 z" fill="none" stroke="#fff" stroke-width="3"/><text x="{x+25}" y="{y-6}" font-family="Lilita" font-size="12" fill="#fff" text-anchor="middle">{i+1}</text>'
    a, _ = crianca(210, 236, 1.2, {"pe": [(-10, -4), (60, 120)], "br": [(-100, -80), (100, 80)]}, {"vestido": "#1f5fd1", "bolinhas": True}, cabelo="trancas", menina=True)
    b, _ = crianca(70, 272, 1.15, {"br": [(-20, -10), (60, 120)]}, {"blusa": "#f08a1c", "baixo": "#8e3fbf"})
    return cena(4, q + b + a)


def c_gude():
    random.seed(5)
    a, m = crianca(140, 272, 1.25, {"pe": [(-80, -10), (60, 10)], "br": [(30, 10), (-40, -10)], "agacha": 34}, {"blusa": "#1e9e4a", "baixo": "#f6c518"}, lean=14)
    b, _ = crianca(290, 274, 1.2, {"pe": [(-70, 10), (70, -10)], "br": [(-30, -10), (30, 20)], "agacha": 34}, {"vestido": "#ec5fa4"}, cabelo="lacos", menina=True)
    bol = "".join(f'<circle cx="{x}" cy="{y}" r="6" fill="{c}" stroke="{TINTA}" stroke-width="1.6"/><circle cx="{x-2}" cy="{y-2}" r="2" fill="#fff"/>' for x, y, c in [(205, 286), (220, 278), (238, 290), (190, 294), (230, 300)])
    bol += '<ellipse cx="220" cy="290" rx="48" ry="16" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="6 5"/>'
    return cena(5, bol + a + b)


def c_perna_de_pau():
    random.seed(6)
    a, m = crianca(150, 200, 1.25, {"pe": [(-12, -4), (14, 4)], "br": [(150, 175), (-150, -175)]}, {"blusa": "#e8312f", "baixo": "#fff"}, lean=0)
    paus = f'<path d="M{m[0]-4:.0f},{m[1]-20:.0f} L{m[0]-12:.0f},300" stroke="{TINTA}" stroke-width="9"/><path d="M{m[0]-4:.0f},{m[1]-20:.0f} L{m[0]-12:.0f},300" stroke="#8b5a2b" stroke-width="5"/>'
    paus2 = f'<path d="M{150+34},{200-150:.0f} L{150+36},300" stroke="{TINTA}" stroke-width="9"/><path d="M{150+34},{200-150:.0f} L{150+36},300" stroke="#8b5a2b" stroke-width="5"/>'
    b, mb = crianca(300, 268, 1.05, {"pe": [(-10, -10), (20, 30)], "br": [(10, 0), (-10, 0)]}, {"vestido": "#8e3fbf"}, cabelo="rabo", menina=True)
    latas = f'<rect x="{mb[0]-14:.0f}" y="270" width="18" height="16" fill="#cfd8dc" stroke="{TINTA}" stroke-width="2"/><rect x="{mb[0]+8:.0f}" y="272" width="18" height="16" fill="#cfd8dc" stroke="{TINTA}" stroke-width="2"/>'
    return cena(6, paus + paus2 + a + b + latas)


def c_bambole():
    random.seed(7)
    a, _ = crianca(130, 266, 1.3, {"pe": [(-10, -4), (14, 4)], "br": [(-150, -170), (130, 160)]}, {"vestido": "#f08a1c"}, cabelo="lacos", menina=True, lean=6)
    b, _ = crianca(290, 266, 1.2, {"br": [(-110, -130), (110, 130)]}, {"blusa": "#17a7b8", "baixo": "#e8312f"}, lean=-6)
    ar = (f'<ellipse cx="135" cy="196" rx="40" ry="10" fill="none" stroke="{TINTA}" stroke-width="7" transform="rotate(-10 135 196)"/>'
          f'<ellipse cx="135" cy="196" rx="40" ry="10" fill="none" stroke="#f6c518" stroke-width="4" transform="rotate(-10 135 196)"/>'
          f'<ellipse cx="292" cy="200" rx="38" ry="9" fill="none" stroke="{TINTA}" stroke-width="7" transform="rotate(8 292 200)"/>'
          f'<ellipse cx="292" cy="200" rx="38" ry="9" fill="none" stroke="#ec5fa4" stroke-width="4" transform="rotate(8 292 200)"/>')
    return cena(7, a + b + ar)


def c_balanco():
    random.seed(8)
    a, m = crianca(230, 215, 1.2, {"pe": [(60, 20), (70, 30)], "br": [(170, 175), (-170, -175)], "agacha": 14}, {"blusa": "#1e9e4a", "baixo": "#1f5fd1"}, lean=-10)
    galho = f'<path d="M150,10 L380,10" stroke="{TINTA}" stroke-width="12"/><path d="M150,10 L380,10" stroke="#8b5a2b" stroke-width="8"/>'
    cordas = f'<path d="M205,10 L{m[0]:.0f},{m[1]:.0f} M262,10 L262,170" stroke="{TINTA}" stroke-width="3"/>'
    banco = '<rect x="198" y="172" width="70" height="8" fill="#e8312f" stroke="#1d1a1f" stroke-width="2"/>'
    b, _ = crianca(110, 266, 1.15, {"br": [(-100, -80), (100, 60)]}, {"vestido": "#f6c518"}, cabelo="trancas", menina=True, lean=8)
    return cena(8, b + galho + cordas + banco + a)


def c_carnica():
    random.seed(9)
    a, _ = crianca(240, 272, 1.15, {"pe": [(-14, -4), (14, 4)], "br": [(-20, -10), (20, 10)], "agacha": 30}, {"blusa": "#f6c518", "baixo": "#8e3fbf"}, lean=26)
    b, _ = crianca(200, 205, 1.25, {"pe": [(-110, -60), (110, 60)], "br": [(-170, -150), (170, 150)]}, {"blusa": "#e8312f", "baixo": "#1e9e4a"}, lean=10)
    c, _ = crianca(70, 268, 1.05, {"br": [(150, 175), (-40, -20)]}, {"vestido": "#17a7b8"}, cabelo="rabo", menina=True)
    return cena(9, c + a + b, postes=True)


def c_ciranda():
    random.seed(10)
    out = ""
    pos = [(110, 250, 1.0, "vestido"), (200, 236, .92, "b"), (290, 250, 1.0, "vestido"), (200, 282, 1.15, "b")]
    cores = ["#e8312f", "#1f5fd1", "#f6c518", "#1e9e4a"]
    for i, (x, y, s, t) in enumerate(pos):
        ro = {"vestido": cores[i]} if t == "vestido" else {"blusa": cores[i], "baixo": "#fff"}
        g, _ = crianca(x, y, s * 1.1, {"pe": [(-14, -4), (14, 4)], "br": [(-80, -100), (80, 100)]}, ro, cabelo=("lacos" if t == "vestido" else "curto"), menina=t == "vestido")
        out += g
    return cena(10, out)


def c_bolhas():
    random.seed(11)
    a, m = crianca(140, 266, 1.3, {"br": [(140, 110), (40, 20)]}, {"vestido": "#8e3fbf"}, cabelo="rabo", menina=True, lean=4)
    b, m2 = crianca(300, 266, 1.15, {"br": [(-150, -170), (150, 170)], "pe": [(-20, -10), (20, 10)]}, {"blusa": "#f08a1c", "baixo": "#1f5fd1"}, lean=-4)
    bol = f'<path d="M{m[0]:.0f},{m[1]:.0f} l14,-14" stroke="{TINTA}" stroke-width="3"/><circle cx="{m[0]+18:.0f}" cy="{m[1]-18:.0f}" r="6" fill="none" stroke="{TINTA}" stroke-width="2"/>'
    for i in range(9):
        x, y, r = 200 + i * 20 + random.randint(-10, 10), 120 - i * 10 + random.randint(-20, 20), random.randint(7, 16)
        bol += f'<circle cx="{x}" cy="{y}" r="{r}" fill="#ffffff" fill-opacity=".35" stroke="#ffffff" stroke-width="2"/><circle cx="{x-r*.35:.0f}" cy="{y-r*.35:.0f}" r="{r*.2:.1f}" fill="#fff"/>'
    return cena(11, a + b + bol)


def c_pega():
    random.seed(12)
    a, _ = crianca(130, 266, 1.2, {"pe": [(-60, -20), (60, 110)], "br": [(60, 80), (-60, -80)]}, {"blusa": "#1f5fd1", "baixo": "#f6c518", "bone": "#e8312f"}, lean=-14)
    b, _ = crianca(290, 262, 1.2, {"pe": [(-60, -20), (60, 110)], "br": [(100, 130), (-60, -90)]}, {"vestido": "#e8312f"}, cabelo="lacos", menina=True, lean=-10)
    tr = "".join(f'<path d="M{x},{y} q10,-3 20,0" stroke="{TINTA}" stroke-width="2" fill="none"/>' for x, y in [(170, 200), (175, 214), (330, 196), (335, 210)])
    return cena(12, a + b + tr)


CENAS = [("Pião", c_piao), ("Pular corda", c_corda), ("Pipa", c_pipa), ("Amarelinha", c_amarelinha),
         ("Bola de gude", c_gude), ("Perna de pau", c_perna_de_pau), ("Bambolê", c_bambole), ("Balanço", c_balanco),
         ("Pular carniça", c_carnica), ("Ciranda", c_ciranda), ("Bolha de sabão", c_bolhas), ("Pega-pega", c_pega)]


def svg_cena(fn, w=400, h=300):
    return (f'<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'
            f'<defs><filter id="pinc" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="3"/>'
            f'<feDisplacementMap in="SourceGraphic" scale="3.2"/></filter></defs><g filter="url(#pinc)">{fn()}</g></svg>')
