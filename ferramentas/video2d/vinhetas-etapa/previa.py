"""Prévia em vídeo das vinhetinhas de etapa (Pixel Neon), sincronizadas com a voz — só para o professor ver.
No portal, a mesma animação será desenhada pelo navegador; isto é só a amostra.  uso: python3 previa.py"""
import json, math, os, subprocess, sys
from PIL import Image, ImageDraw, ImageFont
AQ = os.path.dirname(os.path.abspath(__file__)); os.chdir(AQ)
src = open(os.path.join(AQ, "desenho.py")).read().split("# ---- VINHETA DO VÍDEO ----")[0]
M = {"__file__": os.path.join(AQ, "desenho.py")}; exec(src, M)
VT, AM, AZ, BR, VM = M["VT"], M["AM"], M["AZ"], M["BR"], M["VM"]
ease = lambda u: u * u * (3 - 2 * u); cl = lambda u: max(0.0, min(1.0, u))
def dur(f): return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f], capture_output=True, text=True).stdout)

def montar(f_quadro, D, voz, ev, saida):
    N = int((D + .6) * 30)
    ff = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "1280x720", "-r", "30", "-i", "-",
                           "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "/tmp/vin_img.mp4"], stdin=subprocess.PIPE)
    for i in range(N): ff.stdin.write(f_quadro(i / 30).tobytes())
    ff.stdin.close(); ff.wait()
    json.dump(ev, open("/tmp/vin_ev.json", "w"))
    subprocess.run(["python3", "../pixel-neon-7ano-m3/audio.py", "/tmp/vin_ev.json", str(N / 30), "/tmp/vin_tri.wav"], check=True, capture_output=True)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "/tmp/vin_img.mp4", "-i", voz, "-i", "/tmp/vin_tri.wav", "-i", "bips.wav", "-filter_complex",
                    "[2:a]aresample=44100,volume=0.6[t];[1:a]aresample=44100,apad[v];[3:a]aresample=44100,apad[b];[t][v][b]amix=inputs=3:duration=first:normalize=0[a]",
                    "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", saida], check=True)

def base(desenho, textos, brilhos=()):
    im = Image.new("RGB", (640, 360)); d = ImageDraw.Draw(im); M["fundo"](d); desenho(d)
    big = im.resize((1280, 720), Image.NEAREST)
    for b in brilhos: big = M["glow"](big, *b)
    g = ImageDraw.Draw(big)
    for f in textos: f(g)
    M["nome"](g); return big
def sobe(t, t0): return int(18 * (1 - ease(cl((t - t0) / .3))))

# ---------- 🎬 VÍDEO (voz: 0,24 "Hora do vídeo…" · 1,95 "Atenção e silêncio…" · 4,76 três · 5,79 dois · 6,87 um) ----------
CONT = [(4.6, "3"), (5.6, "2"), (6.6, "1")]   # 3, 2, 1 só na tela (sem voz)
def q_video(t):
    if t < 4.6:
        abre = ease(cl((t - 1.9) / .7))
        def des(d):
            M["cinema"](d, abre)
            if abre > .6: M["olho"](d, 250, 150); M["mudo"](d, 390, 150)
        tx = [lambda g: M["tarja"](g, 640, 40 + sobe(t, .2), [("HORA DO ", BR), ("VÍDEO", AM), (" DA MISSÃO", BR)] if t < 1.9 else [("ATENÇÃO E ", BR), ("SILÊNCIO", AM)], 72)]
        if abre > .6:
            f = ImageFont.truetype(VT, 34); tx += [lambda g: g.text((430, 340), "OLHOS NA TELA", font=f, fill=(20, 30, 60)), lambda g: g.text((700, 340), "SEM CONVERSA", font=f, fill=(20, 30, 60))]
        if t > 3.0: tx.append(lambda g: M["tarja"](g, 640, 520 + sobe(t, 3.0), [("JÁ VAI COMEÇAR!", AZ)], 64))
        return base(des, tx, [(640, 300, 260 * abre + 1, (200, 220, 255), .5 * abre)] if abre > 0 else [])
    n = [s for a, s in CONT + [(7.6, "VAI!")] if t >= a - .1]; n = n[-1] if n else "3"
    a0 = [a for a, s in CONT + [(7.6, "VAI!")] if s == n][0]; u = cl((t - a0 + .1) / 1.0)
    s = 1 + .5 * (1 - ease(cl((t - a0 + .1) / .25)))
    f = ImageFont.truetype(VT, int((200 if n == "VAI!" else 260) * s))
    fim = cl((t - 7.85) / .25)
    img = base(lambda d: M["contagem"](d, 0, u), [lambda g: M["tarja"](g, 640, 40, [("JÁ VAI COMEÇAR!", AZ)], 64),
               lambda g: g.text((640 - g.textlength(n, font=f) / 2, 340 - f.size * .62), n, font=f, fill=AM if n == "VAI!" else BR)], [(640, 340, 160, (255, 230, 150), .6)])
    if fim > 0: img = Image.blend(img, Image.new("RGB", img.size, (255, 255, 255)), fim)
    return img

# ---------- 📖 LEITURA (voz: 0,23 título · 2,52 "Todos leem…" · 4,48 "a roleta…" · 6,57 "e depois tem pergunta" · 8,50 "Prestem atenção!" · 10,12 "Quem será o primeiro?") ----------
def q_leitura(t):
    if t < 2.45:
        ab = ease(cl((t - .2) / .8))
        return base(lambda d: M["livro"](d, 320, 110, max(.05, ab)), [lambda g: M["tarja"](g, 640, 40 + sobe(t, .2), [("LEITURA ", BR), ("GUIADA", AM)], 80)], [(640, 330, 240 * ab + 1, (255, 230, 150), .55 * ab)])
    if t < 10.0:
        v1, v2, v3 = (cl((t - a) / .35) for a in (2.5, 4.45, 6.55))
        pisca = 8.5 < t < 9.6 and int(t * 6) % 2 == 0
        def des(d):
            if v1: M["livro"](d, 110, 120 + sobe(t, 2.5) / 2, .45)
            if v2: M["roleta"](d, 320, 165 + sobe(t, 4.45) / 2, 46, 20 + (t - 4.45) * 120)
            if v3: M["interrog"](d, 530, 165 + sobe(t, 6.55) / 2)
        tx = [lambda g: M["tarja"](g, 640, 40, [("COMO ", BR), ("FUNCIONA", AM)], 64)]
        if v1: tx += [lambda g: M["tarja"](g, 220, 470, [("1. TODOS LEEM", BR)], 40), lambda g: M["tarja"](g, 220, 516, [("O MESMO TRECHO", BR)], 40)]
        if v2: tx += [lambda g: M["tarja"](g, 640, 470, [("2. A ", BR), ("ROLETA", AM)], 40), lambda g: M["tarja"](g, 640, 516, [("SORTEIA QUEM LÊ", BR)], 40)]
        if v3: tx += [lambda g: M["tarja"](g, 1060, 470, [("3. PRESTE ", BR), ("ATENÇÃO", VM if pisca else AM)], 40), lambda g: M["tarja"](g, 1060, 516, [("DEPOIS TEM PERGUNTA", BR)], 40),
                      lambda g: g.text((1046, 290), "?", font=ImageFont.truetype(VT, 90), fill=BR)]
        gl = [(220, 330, 90, (255, 230, 150), .35 * v1), (640, 330, 90, (255, 230, 150), .35 * v2), (1060, 330, 120 if pisca else 90, (190, 140, 255), (.7 if pisca else .35) * v3)]
        return base(des, tx, [b for b in gl if b[4] > 0])
    ang = 140 + (t - 10.0) * 900 * max(0.05, 1 - (t - 10.0) / 2.2)
    fim = cl((t - 11.45) / .4)
    img = base(lambda d: M["roleta"](d, 320, 170, 80, ang), [lambda g: M["tarja"](g, 640, 40 + sobe(t, 10.0), [("QUEM SERÁ O ", BR), ("PRIMEIRO", AM), ("?", BR)], 64)], [(640, 340, 220, (255, 255, 255), .35)])
    if fim > 0: img = Image.blend(img, Image.new("RGB", img.size, (255, 255, 255)), fim)
    return img

if __name__ == "__main__":
    vv, vl = "voz/cenas/00.wav", "voz/cenas/01.wav"
    vv = "voz/video_sem_contagem.wav"
    montar(q_video, 7.6, vv, [(.1, "whoosh"), (1.9, "desce")], "/tmp/Vinheta do VIDEO - previa v3.mp4")
    if "--leitura" in sys.argv: montar(q_leitura, dur(vl), vl, [(.2, "whoosh"), (2.5, "pop"), (4.45, "pop"), (6.55, "pop"), (8.5, "ding"), (10.0, "whoosh"), (11.4, "sino")], "/tmp/Vinheta da LEITURA GUIADA - previa.mp4")
    print("ok")
