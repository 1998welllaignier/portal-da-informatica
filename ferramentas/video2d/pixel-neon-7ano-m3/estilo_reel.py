"""🧪 TESTE (27/11/2026): Missão 3 do 7º ano (Registros) INTEIRA no estilo do reel de pixel art da energia.
- câmera mais aberta (a cena ocupa 85% da tela, pixels menores: tela 640×360 ampliada 2×)
- letra pixel estreita (VT323), títulos em tarja escura, brilho (glow) nos destaques
- a faísca-mascote só onde o assunto tem caminho (cena "E para ler?": estilo_cosmos.py)
- voz: a do vídeo atual, intacta (voz/voz_pausas.wav)
uso: python3 estilo_reel.py [segundos de prévia…]   → /tmp/7º ano M3 Registros - ESTILO REEL (teste).mp4"""
import json, math, os, runpy, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

AQ = os.path.dirname(os.path.abspath(__file__)); os.chdir(AQ)
ARGV = list(sys.argv); sys.argv = ["render.py", "--lib"]
COS = runpy.run_path("estilo_cosmos.py", run_name="lib")          # cena 6 (faísca) — já traz o render.py dentro
G = COS["G"]; Gg = G["c0"].__globals__                            # globais reais das cenas (para trocar peças)
slot, par, CENAS, LEG, C = G["slot"], G["par"], G["CENAS"], G["LEG"], G["C"]
ease, cl = G["ease"], G["cl"]
VT = os.path.join(AQ, "..", "fontes", "VT323.ttf")
CW, CH, ESC = 640, 360, 2
K, OX, OY = 1.7, 48, 27            # câmera aberta: 320×180 → 544×306 centrado
FV = 2.31                          # tamanho VT323 para a mesma "altura de maiúscula" × 1,3

class Img:
    def __init__(s, im): s.im = im
    def paste(s, img, xy):
        w, h = img.size; s.im.paste(img.resize((max(1, round(w * K)), max(1, round(h * K))), Image.NEAREST), (round(xy[0] * K + OX), round(xy[1] * K + OY)))
class Esc:
    """desenha as cenas de 320×180 numa tela maior, com câmera mais aberta e letra VT323."""
    def __init__(s, d): s.d = d; s._image = Img(d._image); s.GL = []
    def _p(s, xy):
        if isinstance(xy, (list, tuple)) and xy and isinstance(xy[0], (list, tuple)): return [(a * K + OX, b * K + OY) for a, b in xy]
        return [v * K + (OX if i % 2 == 0 else OY) for i, v in enumerate(xy)]
    def _full(s, xy):
        try: return [round(v) for v in xy] == [0, 0, 320, 180]
        except Exception: return False
    def _f(s, f): return ImageFont.truetype(VT, max(10, round(f.size * K * FV)))
    def rectangle(s, xy, **kw):
        if s._full(xy): s.d.rectangle([0, 0, CW, CH], **kw)
        else: s.d.rectangle(s._p(xy), **kw)
    def rounded_rectangle(s, xy, **kw): kw["radius"] = max(1, round(kw.get("radius", 2) * K)); s.d.rounded_rectangle(s._p(xy), **kw)
    def ellipse(s, xy, **kw): s.d.ellipse(s._p(xy), **kw)
    def line(s, xy, **kw):
        if "width" in kw: kw["width"] = max(1, round(kw["width"] * K * .8))
        s.d.line(s._p(xy), **kw)
    def polygon(s, xy, **kw): s.d.polygon(s._p(xy), **kw)
    def chord(s, xy, a, b, **kw): s.d.chord(s._p(xy), a, b, **kw)
    def arc(s, xy, a, b, **kw): s.d.arc(s._p(xy), a, b, **kw)
    def point(s, xy, **kw): x, y = s._p(xy); s.d.rectangle([x, y, x + 1, y + 1], fill=kw.get("fill"))
    def textlength(s, txt, font=None): return s.d.textlength(txt, font=s._f(font)) / K
    def text(s, xy, txt, font=None, fill=None):
        f = s._f(font); x, y = xy; sz = font.size * K
        s.d.text((x * K + OX, y * K + OY + (sz - .5625 * f.size) / 2 - .25 * f.size), txt, font=f, fill=fill)
    def brilho(s, x, y, r, cor, forca=.8): s.GL.append((x * K + OX, y * K + OY, r * K, cor, forca))

# ---------- peças trocadas para o estilo do reel ----------
def faixa(d, txt, y, u=1.0, cor=C["amar"], tcor=C["preto"], f=Gg["F8"]):
    """título em tarja escura, com a cor da faixa antiga na letra."""
    if u <= 0: return
    claro = sum(cor) > 380; letra = cor if (claro or cor == C["verm"]) else (C["ciano"] if cor in (C["azul2"],) else (140, 230, 160) if cor == C["verde2"] else C["branco"])
    v = ease(cl(u * 3)); w = d.textlength(txt, font=f); x = 160 - w / 2
    d.rectangle([x - 5, y - 3 + 3 * (1 - v), x + w + 5, y + f.size + 3 + 3 * (1 - v)], fill=(6, 8, 20))
    if u > .15: d.text((x, y + 3 * (1 - v)), txt, font=f, fill=letra)
def carimbo(d, txt, u, cor=C["verm"], y=70, f=Gg["F24"]):
    if u <= 0: return
    s = 1 + .9 * (1 - ease(cl(u * 3))); ff = ImageFont.truetype(Gg["FONTE"], max(8, int(f.size * s))); w = d.textlength(txt, font=ff)
    x = 160 - w / 2; d.rectangle([x - 6, y - 4, x + w + 6, y + ff.size + 4], fill=(6, 8, 20), outline=cor, width=1)
    d.text((x, y), txt, font=ff, fill=C["amar"] if cor not in (C["verm"],) else (255, 120, 120))
    if hasattr(d, "brilho"): d.brilho(160, y + ff.size / 2, max(30, w * .6), cor if sum(cor) > 200 else C["amar"], .45 * ease(cl(u * 2)))
def fundo_grade(d, t, c1=C["noite"], c2=C["noite2"]):
    d.rectangle([0, 0, 320, 180], fill=c1); off = int(t * 6) % 16
    for x in range(-48 + off, 368, 16): d.line([(x, -40), (x, 220)], fill=c2)
    for y in range(-32 + off, 212, 16): d.line([(-48, y), (368, y)], fill=c2)
Gg["faixa"], Gg["carimbo"], Gg["fundo_grade"] = faixa, carimbo, fundo_grade

def glow(arr, x, y, r, cor, forca):
    r = max(4, int(r)); x0, x1, y0, y1 = max(0, x - 2 * r), min(arr.shape[1], x + 2 * r), max(0, y - 2 * r), min(arr.shape[0], y + 2 * r)
    if x0 >= x1 or y0 >= y1: return
    yy, xx = np.mgrid[y0:y1, x0:x1]; g = np.exp(-((xx - x) ** 2 + (yy - y) ** 2) / (2 * (r * .6) ** 2)) * forca
    arr[y0:y1, x0:x1] += g[..., None] * np.array(cor, np.float32)[None, None, :] * .5

FL = ImageFont.truetype(VT, 44); FS = ImageFont.truetype(VT, 46)
def quadro(i, FPS=30):
    tg = i / FPS; k = max(j for j in range(len(par)) if slot[j] <= tg); tl = tg - slot[k]; D = slot[k + 1] - slot[k]
    if k == 6: return COS["quadro"](int(round(tl * FPS)))      # cena da faísca (já tem nome, legenda e brilho)
    im = Image.new("RGB", (CW, CH), C["noite"]); d = Esc(ImageDraw.Draw(im)); CENAS[k](d, tl, D, slot[k])
    big = im.resize((CW * ESC, CH * ESC), Image.NEAREST)
    if d.GL:
        arr = np.asarray(big).astype(np.float32)
        for x, y, r, cor, f in d.GL: glow(arr, int(x * ESC), int(y * ESC), r * ESC, cor, f)
        big = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    g = ImageDraw.Draw(big)
    if k not in (0, 11):
        s = "PROF. WELINGTON LAIGNIER"
        for dx in (-3, 0, 3):
            for dy in (-3, 0, 3): g.text((18 + dx, 6 + dy), s, font=FS, fill=(0, 0, 0))
        g.text((18, 6), s, font=FS, fill=(255, 214, 40))
    L = next((q for a, b, q in LEG if a <= tg < b), None)
    if L:
        w = g.textlength(L, font=FL); x = 640 - w / 2
        g.rectangle([x - 14, 652, x + w + 14, 700], fill=(0, 0, 0)); g.text((x, 650), L, font=FL, fill=(255, 255, 255))
    return big

if __name__ == "__main__":
    so = [float(x) for x in ARGV[1:]]
    if so:
        for t in so: quadro(int(t * 30)).save(f"/tmp/reel_{t:07.2f}.png")
        sys.exit()
    TOTAL = G["TOTAL"]; N = int(TOTAL * 30)
    ff = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "1280x720", "-r", "30", "-i", "-",
                           "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "/tmp/reel_img.mp4"], stdin=subprocess.PIPE)
    for i in range(N): ff.stdin.write(quadro(i).tobytes())
    ff.stdin.close(); ff.wait()
    Gg["EV"].clear(); Gg["eventos"](); json.dump(Gg["EV"], open("/tmp/reel_ev.json", "w"))
    subprocess.run(["python3", "audio.py", "/tmp/reel_ev.json", str(TOTAL), "/tmp/reel_tri.wav"], check=True)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "/tmp/reel_img.mp4", "-i", "voz/voz_pausas.wav", "-i", "/tmp/reel_tri.wav", "-filter_complex",
                    "[2:a]aresample=44100[t];[1:a]aresample=44100,apad[v];[t][v]amix=inputs=2:duration=first:normalize=0[a]",
                    "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "/tmp/reel_sem.mp4"], check=True)
    subprocess.run(["python3", "../vinheta/gerar_vinheta.py", "MISSÃO 3", "REGISTROS", "7º ANO", "vinheta.mp4", "/tmp/reel_sem.mp4",
                    "/tmp/7º ano M3 Registros - ESTILO REEL (teste).mp4"], check=True)
    print("ok", round(TOTAL, 1))
