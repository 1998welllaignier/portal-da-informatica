"""🧪 TESTE (27/11/2026): 10 s do 7º ano M3 (cena "E para ler?") imitando o estilo do reel de pixel art da fiação da casa.
Fonte pixel estreita (VT323), tarja escura atrás dos títulos, brilho (glow), faísca-mascote viajando e câmera que segue.
Voz: o trecho exato do vídeo atual (voz/voz_pausas.wav).   uso: python3 estilo_cosmos.py [quadros de prévia…]"""
import json, math, os, runpy, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

AQ = os.path.dirname(os.path.abspath(__file__)); os.chdir(AQ)
ARGV = list(sys.argv); sys.argv = ["render.py", "--lib"]
G = runpy.run_path("render.py", run_name="lib")
K = 6                                            # cena 6 do vídeo
T0, T1 = G["slot"][K], G["slot"][K + 1]; D = T1 - T0
B = [G["beat"](K, j) for j in range(4)]           # 0 "E para ler?" · 1 "O bloco…" · 2 "Mande mostrar…" · 3 "cem."
LEG = [(a - T0, b - T0, q) for a, b, q in G["LEG"] if T0 - .01 <= a < T1]
W, H, ESC, FPS = 640, 360, 2, 30
VT = os.path.join(AQ, "..", "fontes", "VT323.ttf")
C = G["C"]; ease, cl, lerp = G["ease"], G["cl"], G["lerp"]

class Cam(G["Cam"]):
    def P(s, x, y): return (round(W / 2 + (x - s.cx) * s.z), round(H / 2 + (y - s.cy) * s.z))

# ---------- mundo (coordenadas do mundo; a câmera anda) ----------
FIO_Y = 214
def caminho(t):
    """onde a faísca está no tempo t (x, y no mundo) e se carrega o 100."""
    if t < B[1] + .3: return 150 + math.sin(t * 5) * 2, 168 + math.sin(t * 3) * 3, False
    a = ease(cl((t - B[1] - .3) / 2.4))
    if t < B[1] + 2.7: return lerp(150, 820, a), lerp(168, FIO_Y, cl(a * 4)), False
    if t < B[2] - .4:   # entra no armário e sobe até a gaveta VIDA
        u = ease(cl((t - B[1] - 2.7) / 1.0)); return lerp(820, 900, u), lerp(FIO_Y, 196, u), t > B[2] - 1.4
    u = ease(cl((t - B[2] + .4) / 2.6)); return lerp(900, 1410, u), lerp(196, 190, u) - math.sin(u * math.pi) * 26, t < B[3] - .15

def T(cam, x, y, s, cor, tam, centro=False):
    return (cam.P(x, y), s, cor, tam * cam.z * ESC) + (("c",) if centro else ())
def fundo(d, cam, t):
    for y in range(H): d.line([(0, y), (W, y)], fill=tuple(int(lerp(a, b, y / H)) for a, b in zip((8, 10, 30), (20, 22, 58))))
    rng = np.random.default_rng(4)   # "poeira de dados" ao fundo, com paralaxe lenta
    for x, y in zip(rng.integers(0, 2400, 160), rng.integers(0, 300, 160)):
        sx = (x - cam.cx * .3) % (W + 40) - 20
        if int(t * 4 + x) % 11: d.point((sx, y), fill=(120, 140, 220))
    for i in range(0, 2400, 64):   # prédio de circuitos bem ao fundo
        sx = i - cam.cx * .5
        if -60 < sx < W + 60: d.rectangle([sx, 210 - (i * 37 % 90), sx + 40, H], fill=(16, 18, 48)); [d.point((sx + 6 + (j * 13) % 30, 230 - (i * 37 % 90) + j * 9), fill=(60, 80, 160)) for j in range(6)]
    cam.ret(-400, 250, 2600, 520, (26, 24, 40), None); cam.linha([(-400, 250), (2600, 250)], (60, 60, 90), 1)

def bloco_editor(d, cam, t, txts, gl):
    on = t > B[1] - .1
    cam.ret(40, 122, 230, 158, C["bloco_a"] if on else (40, 80, 170), r=3); cam.ret(56, 158, 76, 163, C["bloco_a"] if on else (40, 80, 170), None)
    for x0, x1 in ((82, 116), (174, 222)): cam.ret(x0, 128, x1, 152, C["branco"], r=5)
    txts += [T(cam, 46, 132, "CAMPO", C["branco"], 14), T(cam, 99, 132, "VIDA", C["preto"], 14, True), T(cam, 120, 132, "DA FICHA", C["branco"], 14), T(cam, 198, 132, "DRAGÃO", C["preto"], 14, True)]
    if on: gl.append((cam.P(135, 140), 70 * cam.z / 2, (90, 150, 255), .45))
    cam.linha([(230, 140), (300, 140), (300, FIO_Y), (2000, FIO_Y)], (80, 80, 130), 3)

def armario(d, cam, t, txts, gl):
    x0, x1, y0, y1 = 760, 1010, 110, 250
    cam.ret(x0, y0, x1, y1, (110, 70, 40)); cam.ret(x0 + 8, y0 + 8, x1 - 8, y1 - 6, (90, 56, 30), None)
    cam.ret(x0 - 6, y0 - 26, x1 + 6, y0, (60, 120, 220)); txts.append(T(cam, 900, y0 - 23, "FICHA: DRAGÃO", C["branco"], 18, True))
    G["dragao"](cam, 790, y0 - 14, t)
    sai = ease(cl((t - B[1] - 3.0) / .6))
    for i, (nome, val) in enumerate((("NOME", "DRAGÃO"), ("VIDA", "100"), ("FORÇA", "80"))):
        y = y0 + 18 + i * 42; dx = 46 * sai if i == 1 else 0
        cam.ret(x0 + 20 + dx, y, x1 - 20 + dx, y + 32, (150, 96, 54) if i != 1 else ((200, 140, 70) if sai > 0 else (150, 96, 54)))
        cam.ret(x0 + 40 + dx, y + 10, x0 + 110 + dx, y + 22, C["papel"], None); cam.ret(x1 - 60 + dx, y + 12, x1 - 40 + dx, y + 20, (220, 200, 120))
        txts.append(T(cam, x0 + 44 + dx, y + 8, nome, C["preto"], 14))
        if i == 1 and sai > .3:   # o 100 continua na gaveta: ler faz uma CÓPIA
            yy = y - 4 - 16 * ease(cl((t - B[1] - 3.4) / .5)); txts.append(T(cam, x0 + 140 + dx, yy, "100", C["amar"], 22, True)); gl.append((cam.P(x0 + 140 + dx, yy + 10), 20 * cam.z, C["amar"], .9))

def monitor(d, cam, t, txts, gl):
    x0 = 1440; cam.ret(x0 - 10, 238, x0 + 200, 250, C["madeira2"]); cam.ret(x0 + 80, 214, x0 + 110, 238, C["cinza2"], None)
    cam.ret(x0, 110, x0 + 190, 214, C["preto"], r=4); scr = (x0 + 8, 118, x0 + 182, 206)
    liga = cl((t - B[3] + .15) / .25)
    cam.ret(*scr, (20, 40, 70) if liga <= 0 else (230, 240, 255), None)
    if liga > 0:
        s = 1 + .6 * (1 - ease(liga)); txts.append(T(cam, x0 + 95, 162 - 32 * s, "100", C["verm2"], 60 * s, True))
        gl.append((cam.P(x0 + 95, 162), 60 * cam.z, (180, 210, 255), .5 * liga))
        if t < B[3] + .25: gl.append((cam.P(x0 + 95, 162), 110 * cam.z, C["branco"], .8))
    cam.linha([(1380, FIO_Y), (1380, 230), (x0, 230)], (70, 70, 110), 3)

def faisca(d, cam, t, gl, txts):
    x, y, leva = caminho(t); vel = abs(caminho(t)[0] - caminho(t - .05)[0])
    for k in range(1, 9):   # rastro
        px, py, _ = caminho(t - k * .025); a, b = cam.P(px, py); s = max(1, 4 - k // 2)
        d.rectangle([a - s, b - s, a + s, b + s], fill=(255, 220 - k * 12, 80 + k * 10)) if vel > .5 else None
    a, b = cam.P(x, y); r = round(8 * cam.z)
    d.ellipse([a - r, b - r, a + r, b + r], fill=(255, 236, 140), outline=(255, 200, 60))
    pisca = int(t * 10) % 31 == 0
    for dx in (-3, 3): d.rectangle([a + dx * cam.z - 1, b - 2 * cam.z - (0 if pisca else 2), a + dx * cam.z + 1, b - 2 * cam.z], fill=C["preto"])
    d.line([(a - 3 * cam.z, b + 2 * cam.z), (a, b + 4 * cam.z), (a + 3 * cam.z, b + 2 * cam.z)], fill=C["preto"], width=2)
    gl.append(((a, b), 24 * cam.z, (255, 210, 90), 1.0))
    if leva: txts.append(T(cam, x, y - 30, "100", C["amar"], 20, True)); gl.append((cam.P(x, y - 20), 14 * cam.z, C["amar"], .7))
    # faíscas do fio
    if t > B[1] and vel > .5:
        rng = np.random.default_rng(int(t * 30))
        for _ in range(4): ex, ey = a - rng.integers(4, 30), b + rng.integers(-6, 7); d.point((int(ex), int(ey)), fill=C["amar"])

KZ = [(135, 2.4, 122), (480, 1.4, 196), (885, 1.2, 140), (1190, 1.4, 196), (1535, 1.3, 150)]
def camera(t):
    xs = [caminho(t - k * .05)[0] for k in range(10)]; cx = max(135, sum(xs) / len(xs))
    if t > B[2] + 2.0: cx = lerp(cx, 1535, ease(cl((t - B[2] - 2.0) / .9)))
    z, cy = KZ[-1][1:]
    for (xa, za, ya), (xb, zb, yb) in zip(KZ, KZ[1:]):
        if xa <= cx <= xb: u = ease((cx - xa) / (xb - xa)); z, cy = lerp(za, zb, u), lerp(ya, yb, u); break
    if t > B[3] - .2: z *= lerp(1, 1.12, ease(cl((t - B[3] + .2) / 1.0)))
    return Cam(None, cx, cy, z)

TIT = [(0, B[1] - .1, [("E PARA ", None), ("LER?", "amar")], None),
       (B[1] - .1, B[2] - .1, [("CAMPO ", None), ("VIDA", "amar")], [("FICHA ", "azul"), ("DRAGÃO", "azul")]),
       (B[2] - .1, B[3] - .1, [("MOSTRAR NA ", None), ("TELA", "amar")], None),
       (B[3] - .1, 99, [("A VIDA DO DRAGÃO", None)], [("100", "azul")])]
COR = {None: (240, 240, 240), "amar": (255, 196, 60), "azul": (90, 190, 255)}

def glow(arr, x, y, r, cor, forca):
    r = int(r); x0, x1, y0, y1 = max(0, x - 2 * r), min(arr.shape[1], x + 2 * r), max(0, y - 2 * r), min(arr.shape[0], y + 2 * r)
    if x0 >= x1 or y0 >= y1: return
    yy, xx = np.mgrid[y0:y1, x0:x1]; g = np.exp(-((xx - x) ** 2 + (yy - y) ** 2) / (2 * (r * .6) ** 2)) * forca
    arr[y0:y1, x0:x1] += g[..., None] * np.array(cor, np.float32)[None, None, :] * .55

def quadro(i):
    t = i / FPS; cam = camera(t); im = Image.new("RGB", (W, H)); d = ImageDraw.Draw(im); cam.d = d
    txts, gl = [], []
    fundo(d, cam, t); bloco_editor(d, cam, t, txts, gl); armario(d, cam, t, txts, gl); monitor(d, cam, t, txts, gl); faisca(d, cam, t, gl, txts)
    # poste de circuito passando NA FRENTE, desfocado (profundidade falsa)
    big = im.resize((W * ESC, H * ESC), Image.NEAREST)
    fr = Image.new("RGBA", big.size, (0, 0, 0, 0)); fd = ImageDraw.Draw(fr)
    for xm in (520, 1180):
        sx = (W / 2 + (xm - cam.cx) * 1.8) * ESC
        if -200 < sx < W * ESC + 200: fd.rectangle([sx, 0, sx + 70, H * ESC], fill=(14, 10, 24, 235)); fd.rectangle([sx + 26, 0, sx + 34, H * ESC], fill=(60, 50, 90, 235))
    big.paste(fr.filter(ImageFilter.GaussianBlur(9)), (0, 0), fr.filter(ImageFilter.GaussianBlur(9)))
    arr = np.asarray(big).astype(np.float32)
    for (x, y), r, cor, f in gl: glow(arr, int(x * ESC), int(y * ESC), r * ESC / 2, cor, f)
    big = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8)); g = ImageDraw.Draw(big)
    for it in txts:
        (x, y), s, cor, tam = it[:4]; f = ImageFont.truetype(VT, max(10, int(tam))); w = g.textlength(s, font=f)
        X = x * ESC - (w / 2 if len(it) > 4 else 0); g.text((X + 2, y * ESC + 2), s, font=f, fill=(0, 0, 0)); g.text((X, y * ESC), s, font=f, fill=cor)
    # títulos com tarja escura (estilo do reel)
    for a, b, l1, l2 in TIT:
        if not (a <= t < b): continue
        u = ease(cl((t - a) / .25))
        for n, linha in enumerate([l1] + ([l2] if l2 else [])):
            tam = 64 if n == 0 else (96 if linha[0][0] == "100" else 58); f = ImageFont.truetype(VT, tam)
            w = sum(g.textlength(s, font=f) for s, _ in linha); y = 64 + n * 78 + int(14 * (1 - u)); x = 640 - w / 2
            g.rectangle([x - 14, y - 6, x + w + 14, y + tam - 2], fill=(6, 8, 20))
            for s, c in linha: g.text((x, y - tam * .12), s, font=f, fill=COR[c]); x += g.textlength(s, font=f)
    # nome do professor com contorno, no canto
    f = ImageFont.truetype(VT, 46); s = "PROF. WELINGTON LAIGNIER"
    for dx in (-3, 0, 3):
        for dy in (-3, 0, 3): g.text((18 + dx, 8 + dy), s, font=f, fill=(0, 0, 0))
    g.text((18, 8), s, font=f, fill=(255, 214, 40))
    L = next((q for a, b, q in LEG if a <= t < b), None)
    if L:
        f = ImageFont.truetype(VT, 44); w = g.textlength(L, font=f); x = 640 - w / 2
        g.rectangle([x - 14, 652, x + w + 14, 700], fill=(0, 0, 0)); g.text((x, 650), L, font=f, fill=(255, 255, 255))
    return big

if __name__ == "__main__":
    so = [int(x) for x in ARGV[1:] if x.isdigit()]
    if so:
        for i in so: quadro(i).save(f"/tmp/cos_{i:04d}.png")
        sys.exit()
    N = int(D * FPS)
    ff = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "1280x720", "-r", str(FPS), "-i", "-",
                           "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "/tmp/cos_img.mp4"], stdin=subprocess.PIPE)
    for i in range(N): ff.stdin.write(quadro(i).tobytes())
    ff.stdin.close(); ff.wait()
    ev = [(.1, "misterio"), (B[1], "click"), (B[1] + .3, "whoosh"), (B[1] + 3.0, "pop"), (B[1] + 3.4, "ding"), (B[2] - .4, "whoosh"), (B[3] - .1, "sino")]
    json.dump(ev, open("/tmp/cos_ev.json", "w")); subprocess.run(["python3", "audio.py", "/tmp/cos_ev.json", str(D), "/tmp/cos_tri.wav"], check=True)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "/tmp/cos_img.mp4", "-ss", str(T0), "-t", str(D), "-i", "voz/voz_pausas.wav", "-i", "/tmp/cos_tri.wav",
                    "-filter_complex", "[2:a]aresample=44100[t];[1:a]aresample=44100,apad[v];[t][v]amix=inputs=2:duration=first:normalize=0[a]",
                    "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", "/tmp/TESTE estilo reel - 7º ano M3 (10s).mp4"], check=True)
    print("ok", round(D, 2))
