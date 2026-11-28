"""Desenho (quadros-chave) das vinhetinhas de etapa no estilo Pixel Neon — só para aprovação."""
import math, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont
sys.path.insert(0, "/home/claude/portal-da-informatica/ferramentas/video2d")
VT = "/home/claude/portal-da-informatica/ferramentas/video2d/fontes/VT323.ttf"
W, H = 640, 360
AM, AZ, BR, VM, VD = (255, 196, 60), (90, 190, 255), (240, 240, 240), (230, 60, 70), (120, 220, 140)

def fundo(d, t=0):
    for y in range(H): d.line([(0, y), (W, y)], fill=(int(8 + 12 * y / H), int(10 + 12 * y / H), int(30 + 28 * y / H)))
    rng = np.random.default_rng(3)
    for x, y in zip(rng.integers(0, W, 90), rng.integers(0, 260, 90)): d.point((int(x), int(y)), fill=(120, 140, 220))
def glow(im, x, y, r, cor, f=.8):
    a = np.asarray(im).astype(np.float32); r = int(r); x0, x1, y0, y1 = max(0, x - 2 * r), min(a.shape[1], x + 2 * r), max(0, y - 2 * r), min(a.shape[0], y + 2 * r)
    yy, xx = np.mgrid[y0:y1, x0:x1]; g = np.exp(-((xx - x) ** 2 + (yy - y) ** 2) / (2 * (r * .6) ** 2)) * f
    a[y0:y1, x0:x1] += g[..., None] * np.array(cor, np.float32)[None, None, :] * .5
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
def tarja(g, cx, y, partes, tam):
    f = ImageFont.truetype(VT, tam); w = sum(g.textlength(s, font=f) for s, _ in partes); x = cx - w / 2
    g.rectangle([x - 16, y - 6, x + w + 16, y + tam - 4], fill=(6, 8, 20))
    for s, c in partes: g.text((x, y - tam * .12), s, font=f, fill=c); x += g.textlength(s, font=f)
def nome(g):
    f = ImageFont.truetype(VT, 40); s = "PROF. WELINGTON LAIGNIER"; w = g.textlength(s, font=f); x = 640 - w / 2; y = 660
    for dx in (-3, 0, 3):
        for dy in (-3, 0, 3): g.text((x + dx, y + dy), s, font=f, fill=(0, 0, 0))
    g.text((x, y), s, font=f, fill=(255, 214, 40))
def rotulo(g, s):
    f = ImageFont.truetype("/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf", 26); w = g.textlength(s, font=f)
    g.rectangle([1280 - w - 34, 10, 1270, 52], fill=(220, 30, 60)); g.text((1280 - w - 22, 12), s, font=f, fill="white")

def cinema(d, abre):
    d.rectangle([150, 60, 490, 250], fill=(230, 238, 255) if abre > .5 else (20, 30, 60))   # tela
    for lado in (0, 1):
        larg = int(170 * (1 - abre))
        x0, x1 = (150, 150 + larg) if lado == 0 else (490 - larg, 490)
        if larg > 0:
            d.rectangle([x0, 56, x1, 254], fill=(170, 30, 40))
            for x in range(x0 + 6, x1, 12): d.line([(x, 56), (x, 254)], fill=(120, 16, 26), width=3)
    d.rectangle([140, 46, 500, 58], fill=(120, 16, 26))
    for i in range(14): d.rectangle([60 + i * 38, 290, 88 + i * 38, 320], fill=(30, 30, 50)); d.rectangle([60 + i * 38, 284, 88 + i * 38, 292], fill=(60, 50, 90))
def olho(d, x, y):
    d.ellipse([x - 18, y - 10, x + 18, y + 10], fill=BR, outline=(0, 0, 0)); d.ellipse([x - 7, y - 7, x + 7, y + 7], fill=(60, 120, 240)); d.ellipse([x - 3, y - 3, x + 3, y + 3], fill=(0, 0, 0))
def mudo(d, x, y):
    d.rectangle([x - 16, y - 6, x - 8, y + 6], fill=(40, 50, 80)); d.polygon([(x - 8, y - 6), (x + 2, y - 14), (x + 2, y + 14), (x - 8, y + 6)], fill=(40, 50, 80))
    d.line([(x + 8, y - 8), (x + 20, y + 8)], fill=VM, width=3); d.line([(x + 20, y - 8), (x + 8, y + 8)], fill=VM, width=3)
def contagem(d, n, u):
    d.ellipse([220, 70, 420, 270], outline=(200, 200, 220), width=3); d.ellipse([240, 90, 400, 250], outline=(120, 120, 150), width=2)
    d.line([(320, 60), (320, 280)], fill=(120, 120, 150)); d.line([(210, 170), (430, 170)], fill=(120, 120, 150))
    a = -90 + 360 * u; d.pieslice([240, 90, 400, 250], -90, a, fill=(60, 70, 110))
def livro(d, x, y, abre):
    d.polygon([(x, y), (x - 90 * abre, y - 10), (x - 90 * abre, y + 90), (x, y + 100)], fill=(250, 244, 220), outline=(0, 0, 0))
    d.polygon([(x, y), (x + 90 * abre, y - 10), (x + 90 * abre, y + 90), (x, y + 100)], fill=(250, 244, 220), outline=(0, 0, 0))
    for i in range(5):
        d.line([(x - 78 * abre, y + 10 + i * 14), (x - 12, y + 12 + i * 14)], fill=(180, 170, 140), width=2); d.line([(x + 12, y + 12 + i * 14), (x + 78 * abre, y + 10 + i * 14)], fill=(180, 170, 140), width=2)
def roleta(d, x, y, r, ang):
    cores = [(230, 70, 80), (255, 196, 60), (90, 190, 255), (120, 220, 140), (190, 120, 255), (255, 140, 60)]
    for i, c in enumerate(cores): d.pieslice([x - r, y - r, x + r, y + r], ang + i * 60, ang + (i + 1) * 60, fill=c, outline=(0, 0, 0))
    d.ellipse([x - 6, y - 6, x + 6, y + 6], fill=BR); d.polygon([(x - 8, y - r - 14), (x + 8, y - r - 14), (x, y - r + 4)], fill=BR, outline=(0, 0, 0))
def interrog(d, x, y):
    d.rectangle([x - 22, y - 22, x + 22, y + 22], fill=(140, 80, 220), outline=(0, 0, 0))
def quadro(desenho, textos, rot, brilhos=()):
    im = Image.new("RGB", (W, H)); d = ImageDraw.Draw(im); fundo(d); desenho(d)
    big = im.resize((1280, 720), Image.NEAREST)
    for x, y, r, c, f in brilhos: big = glow(big, x, y, r, c, f)
    g = ImageDraw.Draw(big)
    for args in textos: args(g)
    nome(g); rotulo(g, rot); return big

# ---- VINHETA DO VÍDEO ----
V = [
 quadro(lambda d: cinema(d, 0), [lambda g: tarja(g, 640, 40, [("HORA DO ", BR), ("VÍDEO", AM), (" DA MISSÃO", BR)], 72)], "VÍDEO · 1/3 (0–1,5 s): cortina fechada"),
 quadro(lambda d: (cinema(d, 1), olho(d, 250, 150), mudo(d, 390, 150)), [lambda g: tarja(g, 640, 40, [("ATENÇÃO E ", BR), ("SILÊNCIO", AM)], 72), lambda g: tarja(g, 640, 520, [("JÁ VAI COMEÇAR!", AZ)], 64),
        lambda g: g.text((430, 340), "OLHOS NA TELA", font=ImageFont.truetype(VT, 34), fill=(20, 30, 60)), lambda g: g.text((700, 340), "SEM CONVERSA", font=ImageFont.truetype(VT, 34), fill=(20, 30, 60))],
        "VÍDEO · 2/3 (1,5–3,5 s): cortina abre", [(640, 300, 260, (200, 220, 255), .5)]),
 quadro(lambda d: contagem(d, 2, .65), [lambda g: g.text((640 - 50, 200), "2", font=ImageFont.truetype(VT, 260), fill=BR), lambda g: tarja(g, 640, 40, [("JÁ VAI COMEÇAR!", AZ)], 64)],
        "VÍDEO · 3/3 (3,5–5 s): contagem 3, 2, 1", [(640, 340, 160, (255, 230, 150), .6)]),
]
# ---- VINHETA DA LEITURA GUIADA ----
L = [
 quadro(lambda d: livro(d, 320, 110, 1), [lambda g: tarja(g, 640, 40, [("LEITURA ", BR), ("GUIADA", AM)], 80)], "LEITURA · 1/3 (0–1,5 s): o livro abre", [(640, 330, 240, (255, 230, 150), .55)]),
 quadro(lambda d: (livro(d, 110, 120, .45), roleta(d, 320, 165, 46, 20), interrog(d, 530, 165)),
        [lambda g: tarja(g, 640, 40, [("COMO ", BR), ("FUNCIONA", AM)], 64),
         lambda g: tarja(g, 220, 470, [("1. TODOS LEEM", BR)], 40), lambda g: tarja(g, 220, 516, [("O MESMO TRECHO", BR)], 40),
         lambda g: tarja(g, 640, 470, [("2. A ", BR), ("ROLETA", AM)], 40), lambda g: tarja(g, 640, 516, [("SORTEIA QUEM LÊ", BR)], 40),
         lambda g: tarja(g, 1060, 470, [("3. PRESTE ", BR), ("ATENÇÃO", AM)], 40), lambda g: tarja(g, 1060, 516, [("DEPOIS TEM PERGUNTA", BR)], 40),
         lambda g: g.text((1046, 290), "?", font=ImageFont.truetype(VT, 90), fill=BR)],
        "LEITURA · 2/3 (1,5–4 s): os 3 combinados", [(640, 330, 120, (255, 230, 150), .45)]),
 quadro(lambda d: roleta(d, 320, 170, 80, 140), [lambda g: tarja(g, 640, 40, [("QUEM SERÁ O ", BR), ("PRIMEIRO", AM), ("?", BR)], 64)],
        "LEITURA · 3/3 (4–5 s): a roleta gira e entra na leitura", [(640, 340, 220, (255, 255, 255), .35)]),
]
for nomearq, Q in (("Vinheta do VIDEO - desenho.png", V), ("Vinheta da LEITURA GUIADA - desenho.png", L)):
    s = Image.new("RGB", (1280, 720 * 3 + 20), (255, 255, 255))
    for i, q in enumerate(Q): s.paste(q, (0, i * 730))
    s.resize((960, int((720 * 3 + 20) * .75))).save("/tmp/" + nomearq)
print("ok")
