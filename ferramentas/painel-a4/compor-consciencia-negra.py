"""Painel da Consciência Negra: compõe o painel inteiro (1770 × 1704 mm) em alta resolução.
uso: python3 compor.py [dpi]  → painel.png (e previa.jpg)"""
import sys, random, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
DPI = int(sys.argv[1]) if len(sys.argv) > 1 else 120
K = DPI / 25.4
W_MM, H_MM = 1770, 1704
W, H = round(W_MM * K), round(H_MM * K)
mm = lambda v: round(v * K)
BG = (248, 230, 200)
FT = "fontes/"
random.seed(20)

img = Image.new("RGB", (W, H), BG)
# textura leve de papel
ruido = Image.effect_noise((W // 4, H // 4), 18).resize((W, H), Image.BICUBIC).convert("L")
img = Image.composite(img, Image.new("RGB", (W, H), (236, 214, 180)), ruido.point(lambda v: 255 - int(max(0, v - 128) * .35)))
d = ImageDraw.Draw(img)

VM, LJ, AM, VD, AZ, MR, PT = (200, 38, 30), (232, 100, 27), (242, 169, 0), (30, 138, 60), (35, 92, 170), (120, 52, 20), (40, 24, 14)

# ---------- estampas africanas nos cantos de cima (faixas com triângulos, losangos e zigue-zague) ----------
def estampa(w, h, seed):
    e = Image.new("RGB", (w, h), PT); de = ImageDraw.Draw(e); cores = [VM, AM, VD, LJ, AZ]
    s = mm(26); k = 0
    for x in range(-h - s, w + h + s, s):
        de.polygon([(x, h), (x + s * .62, h), (x + s * .62 + h, 0), (x + h, 0)], fill=cores[(k + seed) % len(cores)]); k += 1
    m = mm(5); de.rectangle([0, 0, w, m], fill=PT); de.rectangle([0, h - m, w, h], fill=PT)
    return e
def estampa_velha(w, h, seed):
    random.seed(seed)
    e = Image.new("RGB", (w, h), (0, 0, 0)); de = ImageDraw.Draw(e)
    y, cores = 0, [VM, AM, VD, LJ, PT, AZ]
    while y < h:
        fh = mm(random.choice([38, 46, 54])); c1, c2 = random.sample(cores, 2)
        de.rectangle([0, y, w, y + fh], fill=c1); tipo = random.randint(0, 2); s = fh
        for x in range(-s, w + s, s):
            if tipo == 0: de.polygon([(x, y + fh), (x + s / 2, y + 4), (x + s, y + fh)], fill=c2)
            elif tipo == 1: de.polygon([(x + s / 2, y + 4), (x + s, y + fh / 2), (x + s / 2, y + fh - 4), (x, y + fh / 2)], fill=c2); de.ellipse([x + s / 2 - 6, y + fh / 2 - 6, x + s / 2 + 6, y + fh / 2 + 6], fill=(250, 240, 220))
            else: de.line([(x, y + fh - 8), (x + s / 2, y + 8), (x + s, y + fh - 8)], fill=c2, width=mm(6))
        de.rectangle([0, y + fh, w, y + fh + mm(5)], fill=PT); y += fh + mm(5)
    return e
# moldura completa (alto, laterais e base), desenhada no fim, por cima de tudo
def faixa(w, h, seed, rot=False):
    e = estampa(h, w, seed) if rot else estampa(w, h, seed)
    return e.rotate(90, expand=True) if rot else e
TOPO, LADO, BASE = mm(62), mm(66), mm(62)
def moldura():
    img.paste(faixa(W, TOPO, 7), (0, 0)); img.paste(faixa(W, BASE, 9), (0, H - BASE))
    img.paste(faixa(LADO, H, 11, rot=True), (0, 0)); img.paste(faixa(LADO, H, 12, rot=True), (W - LADO, 0))
    dd = ImageDraw.Draw(img); f = mm(4)
    dd.rectangle([LADO - f, TOPO - f, W - LADO + f, H - BASE + f], outline=PT, width=f)   # filete marrom por dentro
    for cx, cy in ((0, 0), (W - LADO, 0), (0, H - BASE), (W - LADO, H - BASE)):           # cantos com medalhinha
        dd.rectangle([cx, cy, cx + LADO, cy + TOPO], fill=PT)
        r = min(LADO, TOPO) * .32; mx, my = cx + LADO / 2, cy + TOPO / 2
        dd.ellipse([mx - r, my - r, mx + r, my + r], fill=AM); dd.ellipse([mx - r * .45, my - r * .45, mx + r * .45, my + r * .45], fill=VM)


# ---------- respingos de tinta ----------
def respingo(cx, cy, r, cor, seed):
    random.seed(seed)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=cor)
    for _ in range(14):
        a = random.uniform(0, 6.28); dist = r * random.uniform(1.1, 2.0); rr = r * random.uniform(.06, .22)
        x, y = cx + dist * math.cos(a), cy + dist * math.sin(a); d.ellipse([x - rr, y - rr, x + rr, y + rr], fill=cor)
    for _ in range(3):
        a = random.uniform(.3, 2.8); x = cx + r * .8 * math.cos(a); y0 = cy + r * .5; L = r * random.uniform(.6, 1.4); ww = r * .12
        d.rounded_rectangle([x - ww, y0, x + ww, y0 + L], radius=int(ww), fill=cor); d.ellipse([x - ww * 1.6, y0 + L - ww, x + ww * 1.6, y0 + L + ww * 2], fill=cor)
respingo(mm(1560), mm(880), mm(24), (226, 120, 40), 3)
respingo(mm(1630), mm(830), mm(14), (242, 169, 0), 4)
respingo(mm(200), mm(860), mm(22), (200, 60, 30), 5)
respingo(mm(250), mm(820), mm(12), (30, 138, 60), 6)

# ---------- título ----------
def fonte(nome, tam_mm, peso=None):
    f = ImageFont.truetype(FT + nome, mm(tam_mm))
    if peso:
        try: f.set_variation_by_axes([peso])
        except Exception: pass
    return f
def texto_colorido(txt, cy, tam, cores, contorno=PT, sombra=True):
    f = fonte("LilitaOne-Regular.ttf.ttf", tam)
    larg = sum(f.getlength(c) for c in txt); x = (W - larg) / 2
    sw = mm(tam * .055)
    for i, c in enumerate(txt):
        cor = cores[i % len(cores)] if isinstance(cores, list) else cores
        if sombra: d.text((x + mm(tam * .035), cy + mm(tam * .045)), c, font=f, fill=(150, 80, 40), anchor="lm", stroke_width=sw, stroke_fill=(150, 80, 40))
        d.text((x, cy), c, font=f, fill=cor, anchor="lm", stroke_width=sw, stroke_fill=contorno)
        x += f.getlength(c)
    return larg
grad = lambda a, b, n: [tuple(round(a[k] + (b[k] - a[k]) * i / max(1, n - 1)) for k in range(3)) for i in range(n)]
c1 = grad(VM, LJ, 6) + grad(LJ, AM, 5)
texto_colorido("Consciência Negra", mm(215), 158, c1 + [c1[-1]] + grad(VD, (20, 110, 150), 5))
# frase
f_sub = fonte("Baloo2.ttf", 74, 800)
d.text((W / 2, mm(352)), "A história negra é a história do Brasil", font=f_sub, fill=PT, anchor="mm")
# faixa com a data
f_fx = fonte("Baloo2.ttf", 46, 700)
t_fx = "20 de novembro · Dia Nacional de Zumbi e da Consciência Negra"
lw = f_fx.getlength(t_fx) + mm(90); cx, cy, fh = W / 2, mm(568), mm(78)
x0, x1 = cx - lw / 2, cx + lw / 2
dz, ext, ent = mm(20), mm(85), mm(30)   # desce, sai para fora, entra por baixo
for sg in (-1, 1):  # pontas dobradas, atrás da faixa
    xa = x0 if sg < 0 else x1
    xin, xout = xa - sg * ent, xa + sg * ext
    yt, yb = cy - fh / 2 + dz, cy + fh / 2 + dz
    d.polygon([(xin, yt), (xout, yt), (xout - sg * mm(28), (yt + yb) / 2), (xout, yb), (xin, yb)], fill=(165, 28, 22))
    d.polygon([(xa, cy + fh / 2), (xa - sg * ent, cy + fh / 2), (xa - sg * ent, yb)], fill=(95, 12, 10))  # dobra
d.rectangle([x0, cy - fh / 2, x1, cy + fh / 2], fill=VM)
d.rectangle([x0, cy - fh / 2 + mm(6), x1, cy - fh / 2 + mm(9)], fill=AM); d.rectangle([x0, cy + fh / 2 - mm(9), x1, cy + fh / 2 - mm(6)], fill=AM)
d.text((cx, cy + mm(2)), t_fx, font=f_fx, fill=(255, 248, 235), anchor="mm")

# ---------- placa com o nome da escola ----------
t_esc = "Escola Municipal de Ensino Fundamental Juscelino Kubitschek · Curionópolis (PA)"   # nome oficial completo
_t = 62
while fonte("Baloo2.ttf", _t, 800).getlength(t_esc) > mm(1450): _t -= 1
f_esc = fonte("Baloo2.ttf", _t, 800); print("fonte do nome da escola:", _t)
ew = f_esc.getlength(t_esc) + mm(130); ey, eh = mm(452), mm(92)
d.rounded_rectangle([W / 2 - ew / 2 + mm(5), ey - eh / 2 + mm(6), W / 2 + ew / 2 + mm(5), ey + eh / 2 + mm(6)], radius=mm(18), fill=(200, 160, 110))
d.rounded_rectangle([W / 2 - ew / 2, ey - eh / 2, W / 2 + ew / 2, ey + eh / 2], radius=mm(18), fill=(255, 247, 232), outline=MR, width=mm(4))
for k, x in enumerate((W / 2 - ew / 2 + mm(34), W / 2 + ew / 2 - mm(34))):
    d.ellipse([x - mm(9), ey - mm(9), x + mm(9), ey + mm(9)], fill=[VM, VD][k])
d.text((W / 2, ey + mm(2)), t_esc, font=f_esc, fill=PT, anchor="mm")
# ---------- ilustrações (ChatGPT): fileira de trás + fileira da frente (fundo creme recortado) ----------
import os
from recorte import recorta
CORTE = .17
OV = 14
inner = W_MM - 2 * 66
w_mm = (inner + 2 * OV) / 3
def prep(i, corte, larg_mm, chao):
    if not os.path.exists(f"img{i}_rgba.png"): recorta(f"img{i}.png", f"img{i}_rgba.png", chao=chao)
    im = Image.open(f"img{i}_rgba.png"); iw, ih = im.size
    im = im.crop((0, int(ih * corte), iw, ih)); nw = mm(larg_mm); nh = round(nw * im.size[1] / iw)
    return im.resize((nw, nh), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
frente = [prep(i, CORTE, w_mm, .89) for i in (1, 2, 3)]
# chão: tira o chão amarelo de cada ilustração da frente e pinta um chão único e contínuo por baixo
import numpy as _np
from scipy import ndimage as _nd
CHAO_COR = (253, 167, 12)
def sem_chao(im, tol=42, desde=.70):
    a = _np.asarray(im).astype(int); h = a.shape[0]
    perto = _np.sqrt(((a[..., :3] - CHAO_COR) ** 2).sum(2)) < tol
    perto[:int(h * desde)] = False
    lab, n = _nd.label(perto); base = (set(_np.unique(lab[-3:])) | set(_np.unique(lab[:, :3])) | set(_np.unique(lab[:, -3:]))) - {0}
    m = _np.isin(lab, list(base)); m = _nd.binary_closing(m, iterations=2)
    al = a[..., 3].astype(float); al[m] = 0
    im.putalpha(Image.fromarray(_nd.gaussian_filter(al, .8).clip(0, 255).astype("uint8"))); return im
frente = [sem_chao(f, desde=.50) for f in frente]
def esfuma_esq(im, frac=.04):   # a saia do carimbó encosta na borda da ilustração: some suave, sem corte reto
    w, h = im.size; n = int(w * frac); r = _np.ones(w); r[:n] = _np.linspace(0, 1, n) ** 1.2
    a = _np.asarray(im.getchannel("A")).astype(float) * r[None, :]
    im.putalpha(Image.fromarray(a.astype("uint8"))); return im
frente[2] = esfuma_esq(frente[2])
frente[1] = esfuma_esq(frente[1], .025)
frente[1] = esfuma_esq(frente[1].transpose(Image.FLIP_LEFT_RIGHT), .025).transpose(Image.FLIP_LEFT_RIGHT)
frente[0] = esfuma_esq(frente[0].transpose(Image.FLIP_LEFT_RIGHT)).transpose(Image.FLIP_LEFT_RIGHT)   # borda direita do 1º
fh_ = frente[0].size[1]; y_frente = H - BASE - fh_
# fileira de trás (imagens 4, 5, 6), um pouco menor e mais alta, sumindo suavemente embaixo
tras = [i for i in (4, 5, 6) if os.path.exists(f"img{i}.png")]
if tras:
    bw = inner / 3 + 2 * OV
    for k, i in enumerate(tras):
        im = prep(i, .25, bw, None); bh = im.size[1]
        base = y_frente + round(fh_ * .55)              # onde a fileira de trás "some" atrás da da frente
        y = base - bh
        a = im.getchannel("A"); g = Image.new("L", im.size, 255); dg = ImageDraw.Draw(g); fd = round(bh * .42)
        for t in range(fd): dg.line([(0, bh - fd + t), (im.size[0], bh - fd + t)], fill=int(255 * (1 - t / fd)))
        im.putalpha(ImageChops.multiply(a, g))
        img.paste(im, (LADO + round(k * (mm(bw) - mm(2 * OV)) - mm(OV)), y), im)
        topo_tras = y; bh_tras = bh
    print("topo da fileira de trás:", round((base - bh) / K), "mm")
y_chao = y_frente + round(fh_ * .80)
chao = Image.new("RGB", (W - 2 * LADO, H - BASE - y_chao), CHAO_COR)
tex = Image.effect_noise(chao.size, 22).convert("L")
chao = Image.composite(chao, Image.new("RGB", chao.size, (236, 150, 8)), tex.point(lambda v: 255 - int(max(0, v - 128) * .5)))
mask = Image.new("L", chao.size, 255); dm = ImageDraw.Draw(mask)
for t in range(mm(10)): dm.line([(0, t), (chao.size[0], t)], fill=int(255 * t / mm(10)))
img.paste(chao, (LADO, y_chao), mask)
for i in (0, 2, 1):   # Zumbi e Dandara por último: cobre as bordas dos vizinhos
    im = frente[i]
    x = LADO + round(i * (mm(w_mm) - mm(OV)))
    img.paste(im, (x, y_frente), im)
y0 = y_frente
# ---------- etiquetas das cenas ----------
f_et = fonte("Baloo2.ttf", 30, 800)
def etiqueta(cx, cy, txt, cor):
    w = f_et.getlength(txt) + mm(36); h = mm(46)
    d2 = ImageDraw.Draw(img)
    d2.rounded_rectangle([cx - w / 2 + mm(3), cy - h / 2 + mm(4), cx + w / 2 + mm(3), cy + h / 2 + mm(4)], radius=mm(12), fill=(120, 80, 40))
    d2.rounded_rectangle([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2], radius=mm(12), fill=cor, outline=PT, width=mm(2.5))
    d2.text((cx, cy + mm(1)), txt, font=f_et, fill=(255, 250, 238), anchor="mm")
larg = mm(w_mm) - mm(OV)
yf = H - BASE - mm(30)
for i, (t, c) in enumerate([("Capoeira", AZ), ("Zumbi e Dandara · Quilombo dos Palmares", VM), ("Carimbó do Pará", VD)]):
    etiqueta(LADO + i * larg + mm(w_mm) / 2, yf, t, c)
if tras:
    yt = topo_tras + round(bh_tras * .07)
    for k, (t, c) in enumerate([("Quilombolas do Pará", LJ), ("Em todas as profissões", AZ), ("Samba de roda e maracatu", VD)]):
        etiqueta(LADO + round(k * (mm(bw) - mm(2 * OV)) - mm(OV)) + mm(bw) / 2, yt, t, c)

moldura()
img.save("painel.png", optimize=False)
img.resize((W // 8, H // 8), Image.LANCZOS).save("previa.jpg", quality=88)
print("ok", W, H, "topo das ilustrações:", round(y0 / K), "mm")
