"""🧪 TESTE (27/11/2026) — vídeo da Missão 4 do 7º ano (3º bim. 2027) no estilo PIXEL ART com zoom,
câmera lenta e vista explodida. Só para o professor ver: NÃO é vídeo oficial e NÃO muda o padrão.
uso: python3 render.py  → imagem.mp4, eventos.json, duracao.txt, voz_final.wav, legenda.json
Cada quadro é desenhado de novo numa tela de 320×180 (pixels grandes) e ampliado 4× sem suavizar:
assim o zoom continua com pixels do mesmo tamanho, como nos vídeos de "como funciona"."""
import json, math, os, re, subprocess, sys, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont

AQ = os.path.dirname(os.path.abspath(__file__)); os.chdir(AQ)
W, H, ESC, FPS = 320, 180, 4, 30
FONTE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fontes", "PressStart2P.ttf")
F8, F16, F24 = (ImageFont.truetype(FONTE, s) for s in (8, 16, 24))
FL = ImageFont.truetype(FONTE, 16)          # legenda (na tela grande)
PRE, GAP, FIM = 2.8, 1.2, 2.6                # abertura antes da voz · respiro entre cenas · cauda
C = dict(noite=(10, 12, 34), noite2=(22, 26, 64), mar=(12, 40, 96), mar2=(8, 26, 70), mar3=(5, 16, 46), lua=(250, 240, 200), espuma=(170, 210, 255),
         preto=(12, 12, 20), branco=(245, 245, 245), cinza=(120, 128, 150), cinza2=(70, 76, 96), amar=(255, 214, 40), lar=(255, 140, 30),
         verm=(230, 50, 50), verm2=(150, 20, 30), verde=(40, 190, 90), verde2=(20, 110, 50), azul=(60, 120, 240), azul2=(30, 60, 160),
         roxo=(140, 80, 220), roxo2=(80, 40, 140), pele=(232, 176, 132), pele2=(196, 132, 96), cabelo=(60, 34, 24), tela=(225, 238, 255),
         rosa=(240, 90, 160), madeira=(120, 72, 40), madeira2=(80, 46, 24), parede=(64, 72, 120), parede2=(48, 54, 96))
ease = lambda u: u * u * (3 - 2 * u)
cl = lambda u: max(0.0, min(1.0, u))
lerp = lambda a, b, u: a + (b - a) * u

# ---------------- tempos da voz ----------------
par = [p.strip() for p in open("falas.txt").read().split("\n\n") if p.strip()]
wavs = sorted(f for f in os.listdir("voz/cenas") if re.fullmatch(r"\d\d\.wav", f))
assert len(wavs) == len(par)
def ler(f):
    with wave.open(f) as w: return np.frombuffer(w.readframes(w.getnframes()), np.int16).reshape(-1, w.getnchannels())[:, 0], w.getframerate()
au = [ler("voz/cenas/" + f) for f in wavs]; SRV = au[0][1]
lens = [len(a) / sr for a, sr in au]
ini = []; t = PRE
for L in lens: ini.append(t); t += L + GAP
TOTAL = ini[-1] + lens[-1] + FIM
slot = [0.0] + [ini[k] - GAP / 2 for k in range(1, len(par))] + [TOTAL]
# voz final: abertura em silêncio + cenas com respiro
voz = np.zeros(int(TOTAL * SRV), np.int16)
for k, (a, sr) in enumerate(au): i0 = int(ini[k] * SRV); voz[i0:i0 + len(a)] = a[:len(voz) - i0]
with wave.open("voz_final.wav", "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(SRV); w.writeframes(voz.tobytes())

# frases de cada cena com o tempo em que começam (sílabas + encaixe nas pausas reais da voz)
def pausas(f):
    e = subprocess.run(["ffmpeg", "-i", f, "-af", "silencedetect=noise=-35dB:d=0.12", "-f", "null", "-"], capture_output=True, text=True).stderr
    S, a = [], None
    for k, v in re.findall(r"silence_(start|end): ([0-9.]+)", e):
        if k == "start": a = float(v)
        elif a is not None: S.append((a, float(v))); a = None
    return S
sil = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
FR = []   # por cena: [(t_ini_global, t_fim_global, frase)]
for k, p in enumerate(par):
    fr = [x.strip() for x in re.split(r"(?<=[.!?:])\s+", p) if x.strip()]
    S = pausas("voz/cenas/" + wavs[k]); L = lens[k]
    t0 = S[0][1] if S and S[0][0] < .05 else 0.0; S = [s for s in S if s[0] > .05 and s[1] < L - .05]
    fala = L - t0; tot = sum(sil(x) for x in fr); acc = 0; ts = []
    for x in fr:
        est = t0 + fala * acc / tot
        cand = [s[1] for s in S if abs(s[1] - est) < .6]
        ts.append(min(cand, key=lambda c: abs(c - est)) if (cand and acc) else (t0 if not acc else est)); acc += sil(x)
    out = []
    for j, x in enumerate(fr):
        a = ini[k] + ts[j]; b = ini[k] + (ts[j + 1] if j + 1 < len(fr) else L) + .15; out.append((a, b, x))
    FR.append(out)
def beat(k, j):   # tempo local (na cena k) do começo da frase j
    j = min(j, len(FR[k]) - 1); return FR[k][j][0] - slot[k]
# legenda: uma linha por vez (frases longas são quebradas nas vírgulas)
LEG = []
for k in range(len(par)):
    for a, b, x in FR[k]:
        partes = [x]
        while any(len(q) > 44 for q in partes):
            q = max(partes, key=len); i = partes.index(q); cut = [m.end() for m in re.finditer(r",\s", q)]
            c = min(cut, key=lambda c: abs(c - len(q) / 2)) if cut else q.rfind(" ", 0, len(q) // 2 + 8) + 1
            partes[i:i + 1] = [q[:c].strip(), q[c:].strip()]
        tot = sum(sil(q) for q in partes); acc = 0
        for q in partes: LEG.append((a + (b - a) * acc / tot, a + (b - a) * (acc + sil(q)) / tot, q)); acc += sil(q)
json.dump(LEG, open("legenda.json", "w"), ensure_ascii=False)

# ---------------- desenho ----------------
class Cam:
    def __init__(s, d, cx=160, cy=90, z=1.0): s.d, s.cx, s.cy, s.z = d, cx, cy, z
    def P(s, x, y): return (round(W / 2 + (x - s.cx) * s.z), round(H / 2 + (y - s.cy) * s.z))
    def ret(s, x0, y0, x1, y1, cor, borda=C["preto"], r=0, esp=0, sombra=None):
        a, b = s.P(x0, y0), s.P(x1, y1); lw = max(1, round(s.z * .7))
        if esp and sombra: s.d.rounded_rectangle([a[0], a[1] + esp * s.z, b[0], b[1] + esp * s.z], radius=r * s.z, fill=sombra, outline=borda, width=lw)
        s.d.rounded_rectangle([a[0], a[1], b[0], b[1]], radius=r * s.z, fill=cor, outline=borda, width=lw if borda else 0)
    def elip(s, x, y, rx, ry, cor, borda=C["preto"]):
        a, b = s.P(x - rx, y - ry), s.P(x + rx, y + ry); s.d.ellipse([a[0], a[1], b[0], b[1]], fill=cor, outline=borda, width=max(1, round(s.z * .7)) if borda else 0)
    def linha(s, pts, cor, w=1): s.d.line([s.P(*p) for p in pts], fill=cor, width=max(1, round(w * s.z)))
    def poli(s, pts, cor, borda=C["preto"]): s.d.polygon([s.P(*p) for p in pts], fill=cor, outline=borda)
    def texto(s, x, y, txt, cor=C["branco"], tam=8, centro=True, sombra=True):
        f = ImageFont.truetype(FONTE, max(8, int(tam * s.z) // 8 * 8)); X, Y = s.P(x, y); w = s.d.textlength(txt, font=f)
        if centro: X -= w / 2
        if sombra: s.d.text((X + max(1, f.size // 8), Y + max(1, f.size // 8)), txt, font=f, fill=C["preto"])
        s.d.text((X, Y), txt, font=f, fill=cor)

def tx(d, x, y, txt, f=F8, cor=C["branco"], centro=True, sombra=True, fundo=None, bcor=C["preto"]):
    w = d.textlength(txt, font=f); X = x - w / 2 if centro else x; s = max(1, f.size // 8)
    if fundo: d.rectangle([X - 3 * s, y - 2 * s, X + w + 2 * s, y + f.size + 2 * s], fill=fundo, outline=bcor)
    if sombra: d.text((X + s, y + s), txt, font=f, fill=C["preto"])
    d.text((X, y), txt, font=f, fill=cor)
    return w

def ceu_noite(d, t, oy=0):
    for y in range(H): d.line([(0, y), (W, y)], fill=tuple(int(lerp(C["noite"][i], C["noite2"][i], y / H)) for i in range(3)))
    rng = np.random.default_rng(11)
    for x, y in zip(rng.integers(0, W, 70), rng.integers(0, 150, 70)):
        yy = y + oy
        if 0 <= yy < H and (int(t * 3 + x) % 9): d.point((int(x), int(yy)), fill=(200, 210, 255))
def mar_fundo(d, t, cam, nivel=110):
    # água abaixo do nível (em coordenadas do mundo)
    _, sy = cam.P(0, nivel); sy = max(-1, sy)
    for y in range(max(0, sy), H):
        u = cl((y - sy) / 160); d.line([(0, y), (W, y)], fill=tuple(int(lerp(C["mar"][i], C["mar3"][i], u)) for i in range(3)))
    if 0 <= sy < H:
        for x in range(0, W, 2):
            yy = sy + round(math.sin(x / 9 + t * 3) * 1.5 * cam.z); d.point((x, yy), fill=C["espuma"]); d.point((x + 1, yy), fill=C["espuma"])
    # raios de luz na água
    for k in range(5):
        x0 = (k * 70 + t * 6) % (W + 60) - 30
        if sy + 4 < H: d.polygon([(x0, max(sy, 0)), (x0 + 14, max(sy, 0)), (x0 + 40, H), (x0 + 22, H)], fill=(18, 52, 112))
def bolhas(d, t, n=14, semente=3):
    rng = np.random.default_rng(semente)
    for i in range(n):
        x = rng.integers(0, W); v = rng.uniform(8, 20); y = H - ((t * v + rng.integers(0, H)) % (H + 10))
        d.ellipse([x - 1, y - 1, x + 1, y + 1], outline=(120, 170, 230))
def peixe(cam, x, y, cor=C["lar"], dirr=1, t=0):
    k = dirr; cam.elip(x, y, 7, 4, cor); cam.poli([(x - 6 * k, y), (x - 11 * k, y - 4), (x - 11 * k, y + 4)], cor)
    cam.elip(x + 3 * k, y - 1, 1, 1, C["branco"], None); cam.d.point(cam.P(x + 3 * k, y - 1), fill=C["preto"])
def isca_msg(cam, x, y, brilho=0.0, z0=1.0):
    # envelope que brilha (a isca)
    if brilho > 0:
        for r, a in ((16, 40), (12, 70)):
            c = tuple(int(lerp(C["mar"][i], C["amar"][i], brilho * a / 100)) for i in range(3)); cam.elip(x, y, r, r * .8, c, None)
    cam.ret(x - 10, y - 7, x + 10, y + 7, C["branco"], r=1); cam.linha([(x - 10, y - 7), (x, y + 1), (x + 10, y - 7)], C["cinza"], .8)
    cam.elip(x + 8, y - 6, 3, 3, C["verm"]);
def anzol(cam, x, y, topo=-400, cor=C["cinza"]):
    cam.linha([(x, topo), (x, y - 10)], (200, 210, 230), .6)
    cam.linha([(x, y - 10), (x, y), (x - 2, y + 4), (x - 6, y + 4), (x - 7, y)], cor, 1.2)
def golpista(cam, x, y, t=0, vara=True):
    # barquinho + vulto de capuz com máscara (silhueta)
    cam.poli([(x - 26, y), (x + 26, y), (x + 18, y + 9), (x - 18, y + 9)], C["madeira"]); cam.linha([(x - 24, y + 3), (x + 24, y + 3)], C["madeira2"], 1)
    cam.ret(x - 7, y - 20, x + 7, y, (24, 24, 40), r=2); cam.elip(x, y - 25, 7, 7, (24, 24, 40))
    cam.ret(x - 5, y - 28, x + 5, y - 23, C["preto"], None); cam.elip(x - 2, y - 26, 1.2, 1.2, C["amar"], None); cam.elip(x + 2, y - 26, 1.2, 1.2, C["amar"], None)
    if vara: cam.linha([(x + 6, y - 12), (x + 46, y - 46)], C["madeira2"], 1.4)
    return (x + 46, y - 46)

def lia(cam, x, y, t=0, celular=True, feliz=0):
    # menina de 7º ano, rabo de cavalo, blusa roxa, segurando o celular
    cam.ret(x - 9, y - 4, x + 9, y + 22, C["roxo"], r=3); cam.ret(x - 7, y + 22, x - 2, y + 34, C["azul2"]); cam.ret(x + 2, y + 22, x + 7, y + 34, C["azul2"])
    cam.elip(x, y - 13, 10, 10, C["pele"]); cam.poli([(x - 10, y - 14), (x - 8, y - 23), (x + 8, y - 23), (x + 10, y - 14), (x + 6, y - 19), (x - 6, y - 19)], C["cabelo"])
    cam.elip(x + 12, y - 16 + math.sin(t * 4) * 1, 3, 6, C["cabelo"])
    pisca = (int(t * 10) % 37) == 0
    for dx in (-4, 4):
        if pisca: cam.linha([(x + dx - 1, y - 12), (x + dx + 1, y - 12)], C["preto"], .6)
        else: cam.elip(x + dx, y - 12, 1.2, 1.6, C["preto"], None)
    if feliz: cam.linha([(x - 3, y - 7), (x, y - 5), (x + 3, y - 7)], C["preto"], .6)
    else: cam.linha([(x - 2, y - 7), (x + 2, y - 7)], C["preto"], .6)
    if celular: cam.ret(x + 6, y + 2, x + 13, y + 14, C["preto"], r=1); cam.ret(x + 7, y + 3, x + 12, y + 12, C["tela"], None); cam.elip(x + 6, y + 9, 3, 3, C["pele"])

def quarto(cam):
    cam.ret(-200, -100, 520, 160, C["parede"], None); cam.ret(-200, 130, 520, 260, C["madeira"], None)
    cam.ret(40, 20, 100, 70, C["noite2"]); cam.linha([(70, 20), (70, 70)], C["madeira2"], 1.5); cam.linha([(40, 45), (100, 45)], C["madeira2"], 1.5)
    cam.elip(88, 32, 5, 5, C["lua"], None)
    cam.ret(200, 96, 300, 130, C["azul2"], r=2); cam.ret(196, 88, 222, 104, C["branco"], r=3)

def celular_grande(d, x, y, w, h, u_msg=1.0, dedo=None, tremor=0.0, dest=None, lento=False):
    """celular em tamanho de tela (coordenadas de tela, desenhado já ampliado) com a mensagem da isca."""
    x += round(math.sin(tremor * 50) * 2 * (tremor > 0)); d.rounded_rectangle([x, y, x + w, y + h], radius=10, fill=C["preto"], outline=(60, 60, 80), width=2)
    sx0, sy0, sx1, sy1 = x + 6, y + 14, x + w - 6, y + h - 12; d.rectangle([sx0, sy0, sx1, sy1], fill=C["tela"])
    d.rectangle([sx0, sy0, sx1, sy0 + 12], fill=C["azul2"]); tx(d, sx0 + 4, sy0 + 2, "MENSAGENS", F8, C["branco"], centro=False, sombra=False)
    if u_msg <= 0: return None
    by = sy0 + 18; bw = sx1 - sx0 - 10
    partes = [("bloco", "banc0-oficial.xyz", 5), ("txt", "VOCÊ GANHOU", 2), ("txt", "UM CELULAR!", 2), ("txt", "PROMOSSÃO SÓ HOJE!", 1), ("txt", "PAGUE SÓ O FRETE", 4), ("btn", "CLIQUE AQUI", 3)]
    yy = by; caixas = {}
    for tipo, s, sinal in partes:
        if tipo == "bloco":
            tx(d, sx0 + 5, yy, s, F8, C["cinza2"], centro=False, sombra=False); caixas[sinal] = (sx0 + 3, yy - 2, sx1 - 3, yy + 9); yy += 13
        elif tipo == "txt":
            tx(d, (sx0 + sx1) / 2, yy, s, F8, C["preto"], sombra=False); caixas.setdefault(sinal, (sx0 + 3, yy - 2, sx1 - 3, yy + 9)); yy += 11
        else:
            yy += 3; d.rectangle([sx0 + 12, yy, sx1 - 12, yy + 13], fill=C["verde"], outline=C["preto"]); tx(d, (sx0 + sx1) / 2, yy + 3, s, F8, C["branco"]); caixas[sinal] = (sx0 + 12, yy, sx1 - 12, yy + 13); yy += 18
    if dest:
        for s in dest:
            b = caixas.get(s)
            if b: d.rectangle([b[0] - 2, b[1] - 1, b[2] + 2, b[3] + 1], outline=C["verm"], width=2)
    if dedo is not None:   # dedo indo para o botão
        bx, byy = (caixas[3][0] + caixas[3][2]) / 2, caixas[3][3]
        fx, fy = bx + 30 * (1 - dedo) + 6, byy + 50 * (1 - dedo) + 2
        d.rounded_rectangle([fx - 6, fy, fx + 6, fy + 60], radius=6, fill=C["pele"], outline=C["preto"]); d.rounded_rectangle([fx - 4, fy + 2, fx + 4, fy + 10], radius=3, fill=(250, 210, 190))
    return caixas

def icone(d, x, y, tipo, s=1):
    """ícones de 16×16 desenhados em pixel (sem emoji)."""
    R = lambda a, b, c, e, cor: d.rectangle([x + a * s, y + b * s, x + c * s, y + e * s], fill=cor)
    if tipo == "relogio": d.ellipse([x, y, x + 15 * s, y + 15 * s], fill=C["branco"], outline=C["preto"], width=s); R(7, 3, 8, 8, C["preto"]); R(8, 7, 11, 8, C["verm"])
    elif tipo == "presente": R(1, 6, 14, 15, C["verm"]); R(0, 3, 15, 6, C["verm2"]); R(7, 3, 8, 15, C["amar"]); R(4, 0, 6, 3, C["amar"]); R(9, 0, 11, 3, C["amar"])
    elif tipo == "chave": d.ellipse([x, y + 4 * s, x + 7 * s, y + 11 * s], fill=C["amar"], outline=C["preto"]); R(6, 7, 15, 8, C["amar"]); R(12, 8, 13, 11, C["amar"]); R(10, 8, 11, 10, C["amar"])
    elif tipo == "dinheiro": R(0, 3, 15, 12, C["verde"]); d.ellipse([x + 5 * s, y + 5 * s, x + 10 * s, y + 10 * s], fill=C["verde2"]); R(1, 4, 2, 5, C["verde2"]); R(13, 10, 14, 11, C["verde2"])
    elif tipo == "lapis": d.polygon([(x + 2 * s, y + 13 * s), (x + 12 * s, y + 3 * s), (x + 14 * s, y + 5 * s), (x + 4 * s, y + 15 * s)], fill=C["amar"], outline=C["preto"]); R(1, 14, 2, 15, C["preto"])
    elif tipo == "banco": d.polygon([(x, y + 5 * s), (x + 8 * s, y), (x + 15 * s, y + 5 * s)], fill=C["cinza"], outline=C["preto"]); [R(2 + i * 4, 6, 3 + i * 4, 13, C["cinza"]) for i in range(4)]; R(0, 13, 15, 15, C["cinza2"])
    elif tipo == "loja": R(1, 6, 14, 15, C["lar"]); [R(i * 3, 2, i * 3 + 2, 6, C["verm"] if i % 2 else C["branco"]) for i in range(5)]; R(6, 10, 9, 15, C["madeira2"])
    elif tipo == "jogo": d.rounded_rectangle([x, y + 4 * s, x + 15 * s, y + 12 * s], radius=3 * s, fill=C["roxo"], outline=C["preto"]); R(3, 7, 6, 8, C["branco"]); R(4, 6, 5, 9, C["branco"]); R(10, 6, 11, 7, C["amar"]); R(12, 8, 13, 9, C["verde"])
    elif tipo == "escola": d.polygon([(x, y + 6 * s), (x + 8 * s, y), (x + 15 * s, y + 6 * s)], fill=C["verm"], outline=C["preto"]); R(1, 6, 14, 15, C["amar"]); R(6, 10, 9, 15, C["madeira2"]); R(3, 8, 5, 10, C["azul"]); R(10, 8, 12, 10, C["azul"])
    elif tipo == "moeda": d.ellipse([x, y, x + 15 * s, y + 15 * s], fill=C["amar"], outline=C["preto"]); R(7, 3, 8, 12, C["lar"])
    elif tipo == "pessoas": d.ellipse([x + 1 * s, y + 1 * s, x + 6 * s, y + 6 * s], fill=C["pele"]); R(0, 7, 7, 15, C["azul"]); d.ellipse([x + 9 * s, y + 1 * s, x + 14 * s, y + 6 * s], fill=C["pele"]); R(8, 7, 15, 15, C["rosa"])
    elif tipo == "envelope": R(0, 3, 15, 13, C["branco"]); d.line([(x, y + 3 * s), (x + 7 * s, y + 9 * s), (x + 15 * s, y + 3 * s)], fill=C["cinza"], width=s); d.rectangle([x, y + 3 * s, x + 15 * s, y + 13 * s], outline=C["preto"])
    elif tipo == "celular": d.rounded_rectangle([x + 3 * s, y, x + 12 * s, y + 15 * s], radius=2 * s, fill=C["preto"]); R(4, 2, 11, 12, C["tela"])
    elif tipo == "coracao": d.polygon([(x + 8 * s, y + 14 * s), (x, y + 6 * s), (x + 2 * s, y + 1 * s), (x + 8 * s, y + 4 * s), (x + 13 * s, y + 1 * s), (x + 15 * s, y + 6 * s)], fill=C["rosa"], outline=C["preto"])
    elif tipo == "lixo": R(2, 4, 13, 15, C["cinza"]); R(0, 2, 15, 4, C["cinza2"]); R(6, 0, 9, 2, C["cinza2"]); [R(4 + i * 3, 6, 5 + i * 3, 13, C["cinza2"]) for i in range(3)]
    elif tipo == "cadeado": d.arc([x + 3 * s, y, x + 12 * s, y + 10 * s], 180, 360, fill=C["cinza"], width=2 * s); R(1, 6, 14, 15, C["amar"]); R(7, 9, 8, 12, C["preto"])
    elif tipo == "adulto": d.ellipse([x + 4 * s, y, x + 11 * s, y + 7 * s], fill=C["pele"]); R(2, 8, 13, 15, C["verde"])
    elif tipo == "megafone": d.polygon([(x + 2 * s, y + 6 * s), (x + 12 * s, y + 1 * s), (x + 12 * s, y + 14 * s), (x + 2 * s, y + 10 * s)], fill=C["lar"], outline=C["preto"]); R(0, 6, 2, 10, C["cinza"])
    elif tipo == "pare": d.polygon([(x + 4 * s, y), (x + 11 * s, y), (x + 15 * s, y + 4 * s), (x + 15 * s, y + 11 * s), (x + 11 * s, y + 15 * s), (x + 4 * s, y + 15 * s), (x, y + 11 * s), (x, y + 4 * s)], fill=C["verm"], outline=C["branco"])

def medidor(d, nivel, t, x=242, y=6, titulo="PERIGO"):
    d.rectangle([x, y, x + 74, y + 22], fill=(30, 14, 20), outline=C["preto"]); tx(d, x + 4, y + 3, titulo, F8, (255, 150, 150), centro=False, sombra=False)
    for i in range(5):
        on = i < nivel; cor = [C["verde"], C["amar"], C["lar"], C["verm"], C["verm"]][i]
        if not on: cor = (60, 40, 46)
        if on and nivel >= 5 and int(t * 6) % 2: cor = C["branco"]
        d.rectangle([x + 4 + i * 14, y + 13, x + 15 + i * 14, y + 19], fill=cor, outline=C["preto"])
def selo(d):
    tx(d, 4, 4, "PROF. WELINGTON LAIGNIER", F8, C["amar"], centro=False)
def carimbo(d, txt, u, cor=C["verm"], y=70, f=F24):
    if u <= 0: return
    s = 1 + 1.4 * (1 - ease(cl(u * 3))); ff = ImageFont.truetype(FONTE, max(8, int(f.size * s) // 8 * 8)); w = d.textlength(txt, font=ff)
    x = W / 2 - w / 2; d.rectangle([x - 8, y - 6, x + w + 6, y + ff.size + 5], fill=cor, outline=C["branco"], width=2); d.text((x + 2, y + 2), txt, font=ff, fill=C["preto"]); d.text((x, y), txt, font=ff, fill=C["branco"])
def faixa(d, txt, y, u=1.0, cor=C["amar"], tcor=C["preto"], f=F8):
    if u <= 0: return
    w = d.textlength(txt, font=f); x0 = W / 2 - w / 2 - 6; x1 = x0 + (w + 12) * ease(cl(u * 2.5))
    d.rectangle([x0, y - 4, x1, y + f.size + 3], fill=cor, outline=C["preto"])
    if u > .35: d.text((W / 2 - w / 2, y), txt, font=f, fill=tcor)

EV = []   # (tempo, efeito)
def ev(t, tipo):
    EV.append((round(t, 3), tipo))

# ---------------- cenas ----------------
def c0(d, t, D, T0):   # ABERTURA: céu da internet → a linha desce → mergulho → título
    u = t / D; mergulho = ease(cl((t - 1.4) / 1.6)); cam = Cam(d, 160, lerp(40, 170, mergulho), lerp(1.0, 1.15, mergulho))
    ceu_noite(d, t, oy=-int(mergulho * 120)); a, b = cam.P(250, 20); d.ellipse([a - 14, b - 14, a + 14, b + 14], fill=C["lua"])
    mar_fundo(d, t, cam, 110); bolhas(d, t) if mergulho > .5 else None
    ponta = golpista(cam, 110, 108, t)
    yh = lerp(ponta[1], 190, ease(cl(t / 1.8))); anzol(cam, ponta[0], yh, topo=ponta[1]); isca_msg(cam, ponta[0] - 4, yh + 12, brilho=.5 + .5 * math.sin(t * 6))
    for i, (px, py) in enumerate(((60, 200), (230, 215), (150, 240))): peixe(cam, px + math.sin(t * 2 + i) * 20, py, [C["lar"], C["verde"], C["rosa"]][i], 1 if i % 2 else -1)
    if t > 2.0:
        v = cl((t - 2.0) / .5); tx(d, W / 2, 40, "MISSÃO 4", F16, C["amar"]) if v > .2 else None
        if t > 2.4: carimbo(d, "GOLPES E", t - 2.4, C["azul2"], 64, F24)
        if t > 2.8: carimbo(d, "PHISHING", t - 2.8, C["verm2"], 98, F24)
        if t > 3.3: tx(d, W / 2, 136, "PROF. WELINGTON LAIGNIER", F8, C["amar"])
def c1(d, t, D, T0):   # A LIA E A MENSAGEM
    zoom = ease(cl((t - beat(1, 1) + .2) / 1.4)); cam = Cam(d, lerp(160, 168, zoom), lerp(90, 98, zoom), lerp(1.0, 2.2, zoom))
    quarto(cam); lia(cam, 160, 92, t)
    vib = beat(1, 1) - .1 < t < beat(1, 1) + 1.1
    if vib: cam.texto(176, 70 + (int(t * 20) % 2), "BZZ!", C["amar"], 8)
    if t > beat(1, 2) - .3:   # o celular cresce e ocupa a tela
        u = ease(cl((t - beat(1, 2) + .3) / .8)); w, h = int(lerp(20, 150, u)), int(lerp(36, 156, u)); x, y = int(W / 2 - w / 2 + 40 * (1 - u)), int(H / 2 - h / 2 + 10 * (1 - u))
        dedo = ease(cl((t - beat(1, 4)) / (D - beat(1, 4) - .3))) * .85 if t > beat(1, 4) else None
        if u > .9: celular_grande(d, x, y - 4, w, h, dedo=dedo)
        else: d.rounded_rectangle([x, y, x + w, y + h], radius=6, fill=C["preto"])
    if t > beat(1, 5) - .1: tx(d, 270, 70, "?", F24, C["amar"]) if int(t * 4) % 2 else None
def c2(d, t, D, T0):   # PAUSA! câmera lenta
    celular_grande(d, 85, 8, 150, 156, dedo=.86 + .02 * ease(cl(t / D)))
    # tela "congela": vinheta azul + listras
    for y in range(0, H, 3): d.line([(0, y), (W, y)], fill=(30, 60, 140))
    u = ease(cl(t / 2.2)); vel = lerp(1.0, 1 / 32, u)
    d.rectangle([236, 26, 316, 50], fill=(14, 30, 60), outline=C["preto"]); tx(d, 240, 29, "TEMPO", F8, (150, 200, 255), centro=False, sombra=False)
    tx(d, 312, 39, f"{vel:.2f}x", F8, C["branco"], centro=False, sombra=False) if False else tx(d, 276, 39, f"{vel:.2f}x", F8, C["branco"])
    carimbo(d, "PAUSA!", t - .05, C["azul2"], 62, F24)
    if t > 1.6: faixa(d, "32x MAIS LENTO", 104, (t - 1.6) / 1.2, C["azul"], C["branco"])
def c3(d, t, D, T0):   # PHISHING: a mensagem estava num anzol!
    ze = ease(cl(t / 3.0)); cam = Cam(d, 160, lerp(120, 70, ze), lerp(3.0, 1.0, ze))
    ceu_noite(d, t); mar_fundo(d, t, cam, 60); bolhas(d, t, 10, 5)
    ponta = golpista(cam, 120, 58, t); anzol(cam, ponta[0], 120, topo=ponta[1]); isca_msg(cam, ponta[0] - 4, 132, brilho=.6 + .4 * math.sin(t * 5))
    b1, b2, b3 = beat(3, 2) + 1.0, beat(3, 3) + 1.2, beat(3, 5)
    if t > beat(3, 1) - .5: faixa(d, "PHISHING", 30, (t - beat(3, 1) + .5), C["verm"], C["branco"], F16)
    if t > b1 - .2: faixa(d, "FISHING = PESCARIA", 52, (t - b1 + .2), C["amar"])
    if t > b2:
        a, b = cam.P(ponta[0] - 4, 132); tx(d, a + 46, b - 4, "ISCA", F8, C["amar"]); d.line([(a + 30, b), (a + 14, b)], fill=C["amar"])
    if t > beat(3, 4) + 1.4:
        for i, (ic, nome) in enumerate((("banco", "BANCO"), ("loja", "LOJA"), ("jogo", "JOGO"), ("escola", "ESCOLA"))):
            v = cl((t - beat(3, 4) - 1.4 - i * 1.1) / .4)
            if v > 0: x = 26 + i * 72; y = 70 + int(6 * (1 - ease(v))); icone(d, x, y, ic, 2); tx(d, x + 16, y + 36, nome, F8, C["branco"])
    if t > b3:
        px = lerp(-20, ponta[0] - 22, ease(cl((t - b3) / 1.8))); peixe(cam, px, 132, C["lar"], 1)
def explodida(d, t, n_ativos, focado, nunca=0.0, rejunta=0.0, erros=0.0):
    """vista explodida da mensagem: as 5 partes se separam em camadas (perspectiva falsa) com número."""
    sep = ease(cl(t / 1.4)) * (1 - ease(rejunta))
    CAM = [(1, "banc0-oficial.xyz", "ENDEREÇO", "lapis", 5), (2, "VOCÊ GANHOU!", "PRÊMIO FÁCIL", "presente", 2), (3, "PROMOSSÃO SÓ HOJE", "PRESSA", "relogio", 1),
           (4, "PAGUE O FRETE", "DINHEIRO", "dinheiro", 4), (5, "SENHA E CÓDIGO", "SENHA/CÓDIGO", "chave", 3)]
    if rejunta > .9:   # a isca inteira de novo, com o X vermelho
        d.rectangle([20, 52, 184, 136], fill=C["branco"], outline=C["preto"], width=2)
        for j, l in enumerate(("banc0-oficial.xyz", "VOCÊ GANHOU!", "PROMOSSÃO SÓ HOJE", "PAGUE O FRETE", "SENHA E CÓDIGO")): tx(d, 102, 60 + j * 14, l, F8, C["verm2"], sombra=False)
        d.line([(24, 56), (180, 132)], fill=C["verm"], width=4); d.line([(180, 56), (24, 132)], fill=C["verm"], width=4); return
    base_y = 100
    for i, (k, txt, rot, ic, sinal) in enumerate(CAM):
        y = base_y + (i - 2) * lerp(7, 21, sep); x = 92 + (i - 2) * lerp(1, 8, sep)
        on = sinal in n_ativos; foc = sinal == focado
        cor = C["branco"] if not on else (255, 236, 236)
        d.polygon([(x - 74, y - 8), (x + 64, y - 8), (x + 72, y + 8), (x - 66, y + 8)], fill=cor, outline=C["verm"] if foc else C["preto"])
        d.polygon([(x - 66, y + 8), (x + 72, y + 8), (x + 72, y + 11), (x - 66, y + 11)], fill=C["cinza2"], outline=C["preto"])
        tx(d, x + 1, y - 3, txt, F8, C["verm2"] if on else C["preto"], sombra=False)
        if erros > 0 and txt in ("banc0-oficial.xyz", "PROMOSSÃO SÓ HOJE"):   # marca os erros na própria isca
            x0 = x + 1 - d.textlength(txt, font=F8) / 2
            if txt.startswith("banc0"): a = x0 + d.textlength("banc", font=F8); d.ellipse([a - 3, y - 6, a + 10, y + 7], outline=C["verm"], width=2)
            else: a = x0 + d.textlength("PROMO", font=F8); b = a + d.textlength("SS", font=F8)
            if not txt.startswith("banc0"):
                for xx in range(int(a), int(b), 2): d.point((xx, y + 6 + (xx // 2) % 2), fill=C["verm"]); d.point((xx + 1, y + 6 + (xx // 2) % 2), fill=C["verm"])
        if sep > .7 and on:
            bx = x + 80; d.ellipse([bx, y - 7, bx + 13, y + 6], fill=C["verm"], outline=C["branco"]); tx(d, bx + 7, y - 3, str(sinal), F8, C["branco"], sombra=False)
            icone(d, bx + 17, y - 8, ic, 1); tx(d, bx + 36, y - 3, rot, F8, C["amar"] if foc else C["branco"], centro=False)
    if nunca > 0: carimbo(d, "NUNCA!", nunca, C["verm"], 118, F24)
def c4(d, t, D, T0):
    d.rectangle([0, 0, W, H], fill=C["mar3"]); bolhas(d, t, 12, 7)
    b = [beat(4, j) for j in range(6)]   # 0 desmontar · 1 sinal 1 · 2 só hoje · 3 em 1 hora · 4 golpista quer · 5 sinal 2 …
    ativos = []; foco = None
    if t > beat(4, 1): ativos.append(1); foco = 1
    if t > beat(4, 6): ativos.append(2); foco = 2
    explodida(d, t, ativos, foco); faixa(d, "DESMONTANDO A ISCA", 30, t * .8, C["amar"])
    medidor(d, len(ativos), t)
    if beat(4, 3) - .1 < t < beat(4, 6): tx(d, 92, 152, "SÓ HOJE! EM 1 HORA!", F8, C["verm"], fundo=C["branco"])
def c5(d, t, D, T0):
    d.rectangle([0, 0, W, H], fill=C["mar3"]); bolhas(d, t, 12, 8)
    ativos = [1, 2]; foco = None
    if t > beat(5, 0): ativos.append(3); foco = 3
    if t > beat(5, 4): ativos.append(4); foco = 4
    if t > beat(5, 6): ativos.append(5); foco = 5
    nunca = (t - beat(5, 3) + .1) if beat(5, 3) - .1 < t < beat(5, 4) else 0
    explodida(d, D, ativos, foco, nunca, erros=cl((t - beat(5, 7) - .8) / .4)); faixa(d, "DESMONTANDO A ISCA", 30, 1, C["amar"]); medidor(d, len(ativos), t)

def c6(d, t, D, T0):
    d.rectangle([0, 0, W, H], fill=(40, 6, 14) if int(t * 6) % 2 else C["mar3"])
    explodida(d, 1.4, [1, 2, 3, 4, 5], None, 0, rejunta=cl(t / .9)); medidor(d, 5, t)
    if t > beat(6, 2) - .2: carimbo(d, "É GOLPE!", t - beat(6, 2) + .2, C["verm"], 120, F24)
def c7(d, t, D, T0):   # as iscas mudam de forma: travelling lateral
    KF = [(0, 0), (beat(7, 1) - .3, 60), (beat(7, 3) - .3, 200), (beat(7, 4) - .3, 340), (beat(7, 6) - .3, 480), (D, 500)]
    for (ta, xa), (tb, xb) in zip(KF, KF[1:]):
        if ta <= t <= tb: px = lerp(xa, xb, ease(cl((t - (tb - min(.9, tb - ta))) / min(.9, tb - ta)))); break
    else: px = 500
    pan = cl(px / 520); cam = Cam(d, px, 90, 1.4)
    d.rectangle([0, 0, W, H], fill=C["mar2"]); bolhas(d, t, 16, 9)
    for x in range(-40, 640, 40): cam.poli([(x, 160), (x + 20, 150), (x + 40, 160)], C["mar3"], None)
    ISCAS = [(60, "FALSO PARENTE", "OI, TROQUEI DE NÚMERO. ME MANDA UM PIX?", "pessoas"), (200, "PRÊMIO FALSO", "VOCÊ GANHOU! PAGUE SÓ O FRETE.", "presente"),
             (340, "LINK FALSO", "SUA CONTA SERÁ BLOQUEADA. CLIQUE AQUI!", "cadeado"), (480, "MOEDAS GRÁTIS", "ENTRE COM A SUA SENHA AQUI.", "moeda")]
    for i, (x, nome, fala, ic) in enumerate(ISCAS):
        y = 84 + math.sin(t * 2 + i) * 3; anzol(cam, x, y, topo=-300); a, b = cam.P(x - 2, y + 14); icone(d, a - 16, b - 6, ic, 2)
        if abs(cam.P(x, 0)[0] - W / 2) < 70:
            cx = min(W - 70, max(70, cam.P(x, 0)[0])); tx(d, cx, 30, nome, F8, C["preto"], fundo=C["amar"])
            for j, lin in enumerate(re.findall(r".{1,18}(?:\s|$)", fala)): tx(d, cx, 134 + j * 10, lin.strip(), F8, C["branco"])
    peixe(cam, px - 48 + math.sin(t * 3) * 6, 66, C["lar"], 1)
def c8(d, t, D, T0):   # o golpista e o perfil falso
    tilt = ease(cl(t / 1.6)); cam = Cam(d, 150, lerp(160, 70, tilt), lerp(1.2, 2.0, tilt))
    ceu_noite(d, t); mar_fundo(d, t, cam, 92); golpista(cam, 130, 90, t, vara=True)
    if t > beat(8, 1) - .2:
        u = cl((t - beat(8, 1) + .2) / .5); vira = cl((t - beat(8, 1) - 2.2) / .5)
        x0, y0 = 200, 40; w = int(86 * abs(math.cos(vira * math.pi))) if vira < 1 else 86
        frente = vira < .5
        d.rectangle([x0 + 43 - w // 2, y0, x0 + 43 + w // 2, y0 + 70], fill=C["branco"] if frente else (40, 40, 60), outline=C["preto"])
        if w > 60:
            if frente: d.ellipse([x0 + 31, y0 + 6, x0 + 55, y0 + 30], fill=C["rosa"], outline=C["preto"]); tx(d, x0 + 43, y0 + 36, "LOJA", F8, C["preto"], sombra=False); tx(d, x0 + 43, y0 + 48, "OFICIAL", F8, C["azul2"], sombra=False)
            else: tx(d, x0 + 43, y0 + 26, "PERFIL", F8, C["verm"]); tx(d, x0 + 43, y0 + 38, "FALSO", F8, C["verm"])
    faixa(d, "O GOLPISTA", 30, t * .8, C["verm"], C["branco"])
def c9(d, t, D, T0):   # a Lia não morde a isca
    cam = Cam(d, 160, 92, 1.6); quarto(cam); lia(cam, 160, 92, t, feliz=t > beat(9, 1))
    if t > beat(9, 1):
        u = ease(cl((t - beat(9, 1)) / 1.0)); icone(d, 230, 100, "lixo", 2); x = lerp(176, 238, u); y = lerp(80, 104, u) - math.sin(u * math.pi) * 30
        if u < 1: icone(d, x, y, "envelope", 1)
        carimbo(d, "NÃO MORDEU A ISCA!", t - beat(9, 1) - .3, C["verde2"], 34, F16)
def c10(d, t, D, T0):   # caiu num golpe? checklist
    d.rectangle([0, 0, W, H], fill=C["noite"]); faixa(d, "CAIU NUM GOLPE? TEM SAÍDA!", 24, t, C["amar"])
    ITENS = [("pare", "PARE DE RESPONDER", 2), ("chave", "TROQUE A SENHA", 3), ("cadeado", "ATIVE AS DUAS ETAPAS", 4), ("adulto", "CONTE PARA UM ADULTO", 5), ("megafone", "AVISE OS SEUS CONTATOS", 6)]
    for i, (ic, txt, bj) in enumerate(ITENS):
        tb = beat(10, bj); v = cl((t - tb + .1) / .35)
        if v <= 0: continue
        y = 42 + i * 21; x = 50 + int(30 * (1 - ease(v)))
        d.rectangle([x, y, x + 232, y + 17], fill=C["noite2"], outline=C["azul"]); icone(d, x + 3, y + 1, ic, 1); tx(d, x + 24, y + 5, txt, F8, C["branco"], centro=False)
        if t > tb + .6: d.rectangle([x + 216, y + 3, x + 227, y + 14], fill=C["verde"], outline=C["preto"]); d.line([(x + 218, y + 9), (x + 221, y + 12), (x + 226, y + 5)], fill=C["branco"], width=2)
def c11(d, t, D, T0):   # onde eu uso isso?
    d.rectangle([0, 0, W, H], fill=C["roxo2"]); faixa(d, "ONDE EU USO ISSO?", 24, t, C["amar"], C["preto"], F16)
    CARDS = [(("celular", "envelope"), "CELULAR E E-MAIL", 1), (("jogo", "moeda"), "JOGOS ON-LINE", 2), (("pessoas", "loja"), "REDES SOCIAIS", 3)]
    for i, (ics, txt, bj) in enumerate(CARDS):
        v = cl((t - beat(11, bj) + .2) / .4)
        if v <= 0: continue
        s = .6 + .4 * ease(v); x = 12 + i * 102; y = 52
        d.rectangle([x, y, x + 94, y + 84], fill=C["branco"], outline=C["preto"], width=2)
        icone(d, x + 12, y + 10, ics[0], 2); icone(d, x + 50, y + 10, ics[1], 2)
        for j, lin in enumerate(txt.split(" ", 1) if len(txt) > 11 else [txt]): tx(d, x + 47, y + 52 + j * 12, lin, F8, C["preto"], sombra=False)
def c12(d, t, D, T0):   # missão cumprida
    d.rectangle([0, 0, W, H], fill=C["noite"]); rng = np.random.default_rng(int(t * 8))
    for _ in range(40): x, y = rng.integers(0, W), rng.integers(0, H); d.rectangle([x, y, x + 1, y + 1], fill=[C["amar"], C["rosa"], C["verde"], C["azul"]][rng.integers(0, 4)])
    carimbo(d, "MISSÃO CUMPRIDA!", t, C["verde2"], 22, F16)
    CH = ["PRESSA", "PRÊMIO FÁCIL", "SENHA, CÓDIGO OU DINHEIRO", "ERROS", "ENDEREÇO ESTRANHO"]
    for i, c in enumerate(CH):
        if t > beat(12, 2) + i * 1.35: tx(d, W / 2, 50 + i * 15, c, F8, C["preto"], fundo=C["amar"])
    if t > beat(12, 3) - .2:
        tx(d, W / 2, 132, "NA DÚVIDA, NÃO MORDA A ISCA!", F8, C["branco"], fundo=C["verm2"])
def c13(d, t, D, T0):
    d.rectangle([0, 0, W, H], fill=C["noite"]); ceu_noite(d, t)
    carimbo(d, "MISSÃO 4", t, C["azul2"], 40, F24); tx(d, W / 2, 86, "ABRAM NO PORTAL!", F16, C["amar"]); tx(d, W / 2, 118, "PROF. WELINGTON LAIGNIER", F8, C["branco"])
CENAS = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13]

# efeitos sonoros (no tempo da cena)
def eventos():
    S = slot
    ev(.2, "misterio"); ev(1.2, "desce"); ev(2.4, "sino"); ev(2.8, "pop")
    ev(S[1] + beat(1, 1), "toque"); ev(S[1] + beat(1, 2), "pop")
    ev(S[2] + .05, "desliga"); ev(S[2] + 1.6, "zum")
    ev(S[3] + .3, "whoosh"); ev(S[3] + beat(3, 3) + 1.2, "ding"); ev(S[3] + beat(3, 5), "misterio")
    ev(S[4] + .2, "whoosh"); ev(S[4] + beat(4, 1), "ding"); ev(S[4] + beat(4, 6), "ding")
    ev(S[5] + beat(5, 0), "ding"); ev(S[5] + beat(5, 3), "alerta"); ev(S[5] + beat(5, 4), "ding"); ev(S[5] + beat(5, 6), "ding")
    ev(S[6] + beat(6, 2), "alerta")
    for j in (1, 3, 4, 6): ev(S[7] + beat(7, j) - .3, "whoosh")
    ev(S[8] + .2, "misterio"); ev(S[8] + beat(8, 1) + 2.2, "voa")
    ev(S[9] + beat(9, 1), "sumiu"); ev(S[9] + beat(9, 1) + .4, "ok")
    for j in range(2, 7): ev(S[10] + beat(10, j) + .6, "ok")
    ev(S[11] + .1, "pop"); [ev(S[11] + beat(11, j), "pop") for j in (1, 2, 3)]
    ev(S[12] + .05, "festa"); ev(S[13] + .05, "sino")

if __name__ == "__main__":
    so = [int(x) for x in sys.argv[1:] if x.isdigit()]   # só alguns quadros (prévia): python3 render.py 30 400 …
    eventos(); json.dump(EV, open("eventos.json", "w")); open("duracao.txt", "w").write(str(round(TOTAL, 3)))
    N = int(TOTAL * FPS); FL2 = ImageFont.truetype(FONTE, 24)
    def quadro(i):
        tg = i / FPS; k = max(j for j in range(len(par)) if slot[j] <= tg); tl = tg - slot[k]; D = slot[k + 1] - slot[k]
        im = Image.new("RGB", (W, H), C["noite"]); d = ImageDraw.Draw(im); CENAS[k](d, tl, D, slot[k])
        if k not in (0, 12, 13): selo(d)
        big = im.resize((W * ESC, H * ESC), Image.NEAREST); g = ImageDraw.Draw(big)
        L = next((q for a, b, q in LEG if a <= tg < b), None)
        if L:
            w = g.textlength(L, font=FL2); x = (W * ESC - w) / 2; y = H * ESC - 50
            g.rectangle([x - 14, y - 12, x + w + 12, y + 36], fill=(0, 0, 0)); g.text((x + 2, y + 2), L, font=FL2, fill=(60, 60, 60)); g.text((x, y), L, font=FL2, fill=(255, 255, 255))
        return big
    if so:
        for i in so: quadro(i).save(f"prev_{i:05d}.png")
        print("prévias", so); sys.exit()
    ff = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W*ESC}x{H*ESC}", "-r", str(FPS), "-i", "-",
                           "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "imagem.mp4"], stdin=subprocess.PIPE)
    for i in range(N): ff.stdin.write(quadro(i).tobytes())
    ff.stdin.close(); print("rc", ff.wait(), "quadros", N, "dur", round(TOTAL, 1))
