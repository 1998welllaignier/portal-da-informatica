"""🧪 TESTE (27/11/2026) — vídeo da Missão 3 do 7º ano (Registros) no estilo PIXEL ART, com zoom e vista explodida.
Usa a VOZ do vídeo atual exatamente como está (voz/voz_pausas.wav, sem gerar voz nova). Só para o professor comparar.
uso: python3 render.py  → imagem.mp4, eventos.json, duracao.txt, legenda.json   (prévia: python3 render.py 300 900 …)"""
import json, math, os, re, subprocess, sys, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont

AQ = os.path.dirname(os.path.abspath(__file__)); os.chdir(AQ)
W, H, ESC, FPS = 320, 180, 4, 30
FONTE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fontes", "PressStart2P.ttf")
F8, F16, F24 = (ImageFont.truetype(FONTE, s) for s in (8, 16, 24))
C = dict(noite=(10, 12, 34), noite2=(22, 26, 64), preto=(12, 12, 20), branco=(245, 245, 245), cinza=(120, 128, 150), cinza2=(70, 76, 96),
         amar=(255, 214, 40), lar=(255, 140, 30), verm=(230, 50, 50), verm2=(150, 20, 30), verde=(40, 190, 90), verde2=(20, 110, 50),
         azul=(60, 120, 240), azul2=(30, 60, 160), roxo=(140, 80, 220), roxo2=(80, 40, 140), pele=(232, 176, 132), pele2=(196, 132, 96),
         cabelo=(40, 26, 20), tela=(225, 238, 255), rosa=(240, 90, 160), madeira=(120, 72, 40), madeira2=(80, 46, 24),
         parede=(64, 72, 120), parede2=(48, 54, 96), grama=(60, 160, 70), grama2=(36, 110, 48), ceu=(110, 170, 255), ceu2=(170, 210, 255),
         papel=(250, 244, 220), papel2=(222, 210, 170), ciano=(40, 200, 220), mar3=(5, 16, 46), mar2=(8, 26, 70), lua=(250, 240, 200),
         bloco_l=(255, 150, 40), bloco_a=(70, 140, 255), bloco_v=(150, 90, 230), bloco_r=(230, 70, 140))
ease = lambda u: u * u * (3 - 2 * u)
cl = lambda u: max(0.0, min(1.0, u))
lerp = lambda a, b, u: a + (b - a) * u

# ---------------- tempos: a voz do vídeo atual, intacta ----------------
par = [p.strip() for p in open("falas.txt").read().split("\n\n") if p.strip()]
wavs = sorted(f for f in os.listdir("voz/cenas") if re.fullmatch(r"\d\d\.wav", f)); assert len(wavs) == len(par)
def ler(f):
    with wave.open(f) as w: return w.getnframes() / w.getframerate()
lens = [ler("voz/cenas/" + f) for f in wavs]
def pausas(f, d=0.12):
    e = subprocess.run(["ffmpeg", "-i", f, "-af", f"silencedetect=noise=-35dB:d={d}", "-f", "null", "-"], capture_output=True, text=True).stderr
    S, a = [], None
    for k, v in re.findall(r"silence_(start|end): ([0-9.]+)", e):
        if k == "start": a = float(v)
        elif a is not None: S.append((a, float(v))); a = None
    return S
GAPS = pausas("voz/voz_pausas.wav", 0.9); assert len(GAPS) == len(par) - 1, GAPS
lead = []
for f in wavs:
    S = pausas("voz/cenas/" + f); lead.append(S[0][1] if S and S[0][0] < .05 else 0.0)
ini = [0.0] + [GAPS[k - 1][1] - lead[k] for k in range(1, len(par))]       # onde cada cena começa dentro da voz atual
TOTAL = 166.867                                                            # mesma duração da imagem do vídeo atual
slot = [0.0] + [(GAPS[k - 1][0] + GAPS[k - 1][1]) / 2 for k in range(1, len(par))] + [TOTAL]

sil = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
FR = []
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
def beat(k, j):
    j = min(j, len(FR[k]) - 1); return FR[k][j][0] - slot[k]
def dentro(k, j, frac):   # tempo local de um ponto dentro da frase j (fração das sílabas)
    a, b, _ = FR[k][min(j, len(FR[k]) - 1)]; return a + (b - a) * frac - slot[k]
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

# ---------------- desenho (peças do teste pixel da M4) ----------------
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

def carimbo(d, txt, u, cor=C["verm"], y=70, f=F24):
    if u <= 0: return
    s = 1 + 1.4 * (1 - ease(cl(u * 3))); ff = ImageFont.truetype(FONTE, max(8, int(f.size * s) // 8 * 8)); w = d.textlength(txt, font=ff)
    x = W / 2 - w / 2; d.rectangle([x - 8, y - 6, x + w + 6, y + ff.size + 5], fill=cor, outline=C["branco"], width=2); d.text((x + 2, y + 2), txt, font=ff, fill=C["preto"]); d.text((x, y), txt, font=ff, fill=C["branco"])
def faixa(d, txt, y, u=1.0, cor=C["amar"], tcor=C["preto"], f=F8):
    if u <= 0: return
    w = d.textlength(txt, font=f); x0 = W / 2 - w / 2 - 6; x1 = x0 + (w + 12) * ease(cl(u * 2.5))
    d.rectangle([x0, y - 4, x1, y + f.size + 3], fill=cor, outline=C["preto"])
    if u > .35: d.text((W / 2 - w / 2, y), txt, font=f, fill=tcor)


# ---------------- peças novas desta missão ----------------
def selo(d):
    """nome do professor com contorno escuro (lê em qualquer fundo); fica sozinho no canto de cima."""
    s = "PROF. WELINGTON LAIGNIER"
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            if dx or dy: d.text((4 + dx, 4 + dy), s, font=F8, fill=C["preto"])
    d.text((5, 5), s, font=F8, fill=C["preto"]); d.text((4, 4), s, font=F8, fill=C["amar"])
def nome_contorno(d, x, y, txt, f=F8, cor=C["amar"]):
    w = d.textlength(txt, font=f); X = x - w / 2; s = max(1, f.size // 8)
    for dx in (-s, 0, s):
        for dy in (-s, 0, s):
            if dx or dy: d.text((X + dx, y + dy), txt, font=f, fill=C["preto"])
    d.text((X, y), txt, font=f, fill=cor)
def at(d, sx, sy, z):   # câmera que põe o ponto (0,0) do mundo no ponto (sx,sy) da tela, com zoom z
    return Cam(d, -(sx - W / 2) / z, -(sy - H / 2) / z, z)

def dragao(cam, x, y, t=0, cor=None):
    v, v2 = cor or (60, 180, 80), (30, 110, 50); asa = math.sin(t * 7) * 5
    cam.poli([(x - 4, y - 8), (x - 22, y - 22 - asa), (x - 12, y - 4)], (90, 210, 110)); cam.poli([(x + 4, y - 8), (x + 20, y - 24 - asa), (x + 12, y - 4)], (90, 210, 110))
    cam.elip(x, y, 14, 10, v); cam.elip(x + 2, y + 3, 8, 5, (230, 220, 140), None)
    cam.poli([(x - 13, y + 2), (x - 26, y + 8), (x - 22, y + 2)], v2)
    cam.elip(x + 14, y - 10, 8, 7, v); cam.poli([(x + 11, y - 16), (x + 13, y - 22), (x + 16, y - 16)], C["branco"])
    cam.elip(x + 17, y - 11, 1.5, 1.8, C["preto"], None); cam.ret(x + 18, y - 7, x + 23, y - 5, v2, None)
    cam.ret(x - 8, y + 8, x - 4, y + 13, v2, None); cam.ret(x + 4, y + 8, x + 8, y + 13, v2, None)
def fada(cam, x, y, t=0):
    b = math.sin(t * 3) * 2; y += b
    for s in (-1, 1): cam.elip(x + 7 * s, y - 4, 6, 8, (190, 230, 255), (120, 170, 230))
    cam.poli([(x - 6, y + 12), (x + 6, y + 12), (x + 3, y - 2), (x - 3, y - 2)], C["rosa"])
    cam.elip(x, y - 8, 6, 6, C["pele"]); cam.poli([(x - 6, y - 9), (x - 4, y - 15), (x + 4, y - 15), (x + 6, y - 9)], (250, 200, 60))
    cam.elip(x - 2, y - 8, .9, 1.2, C["preto"], None); cam.elip(x + 2, y - 8, .9, 1.2, C["preto"], None)
    cam.linha([(x + 6, y + 2), (x + 13, y - 6)], C["madeira2"], .8); cam.elip(x + 13, y - 7, 2, 2, C["amar"], None)
def cavaleiro(cam, x, y, t=0):
    cam.ret(x - 8, y - 4, x + 8, y + 14, C["cinza"], r=2); cam.ret(x - 7, y + 14, x - 2, y + 22, C["cinza2"]); cam.ret(x + 2, y + 14, x + 7, y + 22, C["cinza2"])
    cam.elip(x, y - 11, 8, 8, C["cinza"]); cam.ret(x - 6, y - 12, x + 6, y - 9, C["preto"], None); cam.poli([(x - 2, y - 19), (x + 2, y - 19), (x, y - 26)], C["verm"])
    cam.linha([(x + 11, y + 10), (x + 11, y - 14)], C["branco"], 1.4); cam.linha([(x + 7, y + 6), (x + 15, y + 6)], C["madeira2"], 1.2)
    cam.ret(x - 15, y - 2, x - 7, y + 10, C["azul2"], r=2)
def caio(cam, x, y, t=0, feliz=0):
    cam.ret(x - 9, y - 4, x + 9, y + 22, C["verde"], r=3); cam.ret(x - 7, y + 22, x - 2, y + 34, C["azul2"]); cam.ret(x + 2, y + 22, x + 7, y + 34, C["azul2"])
    cam.elip(x, y - 13, 10, 10, C["pele2"]); cam.poli([(x - 10, y - 15), (x - 9, y - 23), (x + 9, y - 23), (x + 10, y - 15), (x + 4, y - 19), (x - 4, y - 19)], C["cabelo"])
    pisca = (int(t * 10) % 41) == 0
    for dx in (-4, 4):
        if pisca: cam.linha([(x + dx - 1, y - 12), (x + dx + 1, y - 12)], C["preto"], .6)
        else: cam.elip(x + dx, y - 12, 1.2, 1.6, C["preto"], None)
    if feliz: cam.linha([(x - 3, y - 7), (x, y - 5), (x + 3, y - 7)], C["preto"], .6)
    else: cam.linha([(x - 2, y - 7), (x + 2, y - 7)], C["preto"], .6)
SPR = {"DRAGÃO": dragao, "FADA": fada, "HERÓI": cavaleiro}

def quarto(cam, t):
    cam.ret(-300, -200, 620, 150, C["parede"], None); cam.ret(-300, 150, 620, 300, C["madeira"], None)
    cam.ret(20, 18, 80, 64, C["noite2"]); cam.linha([(50, 18), (50, 64)], C["madeira2"], 1.5); cam.linha([(20, 41), (80, 41)], C["madeira2"], 1.5); cam.elip(66, 30, 5, 5, C["lua"], None)
    cam.ret(150, 104, 300, 112, C["madeira2"]); cam.ret(160, 112, 166, 150, C["madeira2"], None); cam.ret(284, 112, 290, 150, C["madeira2"], None)
    cam.ret(196, 54, 268, 100, C["preto"], r=2); cam.ret(228, 100, 236, 106, C["cinza2"], None)
def mundo_jogo(d, cam, t, so_tela=None):
    """mundo do jogo (céu, morros, castelo e os 3 personagens) desenhado no mundo da câmera."""
    cam.ret(-400, -300, 720, 110, C["ceu"], None); cam.ret(-400, 40, 720, 110, C["ceu2"], None)
    for x0, cor in ((-60, C["grama2"]), (120, C["grama2"]), (240, C["grama2"])): cam.elip(x0 + 50, 112, 90, 30, cor, None)
    cam.ret(-400, 110, 720, 300, C["grama"], None)
    cam.ret(230, 40, 290, 110, C["cinza"]); [cam.ret(230 + i * 15, 32, 238 + i * 15, 40, C["cinza"]) for i in range(4)]; cam.ret(252, 80, 268, 110, C["madeira2"])
    dragao(cam, 70, 70 + math.sin(t * 2) * 4, t); fada(cam, 150, 92, t); cavaleiro(cam, 200, 96, t)

def caixinha(d, x, y, w, txt, fundo=C["branco"], tcor=C["preto"], borda=C["preto"], h=16, larg=1):
    d.rectangle([x - w / 2, y, x + w / 2, y + h], fill=fundo, outline=borda, width=larg); tx(d, x, y + h / 2 - 4, txt, F8, tcor, sombra=False)
LIS = [("NOMES", ["DRAGÃO", "FADA", "HERÓI"], C["azul2"]), ("VIDAS", ["100", "60", "90"], C["verm2"]), ("FORÇAS", ["80", "30", "70"], C["lar"])]
def listas(d, t_in=99, sobe=0.0, apaga=0.0, xs=(80, 180, 262), y0=62, mostra=(1, 1, 1), marca=None, fios=0.0, fio_cor=C["amar"]):
    """as três listas separadas. sobe: o quanto a lista de nomes andou (0→1); apaga: o dragão sumindo; marca: linha destacada."""
    dy = 22
    if fios > 0:
        for i in range(3):
            y = y0 + 8 + i * dy; x1 = xs[0] + 41 + (xs[2] - xs[0] - 82) * ease(cl(fios))
            d.line([(xs[0] + 41, y), (x1, y)], fill=fio_cor if not isinstance(fio_cor, list) else fio_cor[i], width=2)
    for j, (tit, itens, cor) in enumerate(LIS):
        v = cl(mostra[j]);
        if v <= 0: continue
        x = xs[j]; yo = int(8 * (1 - ease(v)))
        caixinha(d, x, y0 - 22 + yo, 82, tit, cor, C["branco"])
        for i, it in enumerate(itens):
            y = y0 + i * dy + yo
            if j == 0:
                if i == 0 and apaga >= 1: continue
                if i == 0 and apaga > 0:
                    if int(apaga * 12) % 2: caixinha(d, x, y, 82, it, (255, 210, 210), C["verm2"])
                    continue
                if i > 0: y -= int(dy * ease(cl(sobe)))
            hl = marca is not None and ((j == 0 and i - (1 if sobe >= 1 else 0) == marca) or (j > 0 and i == marca))
            caixinha(d, x, y, 82, it, (255, 236, 150) if hl else C["branco"], C["preto"], C["verm"] if hl else C["preto"], larg=2 if hl else 1)
    for i in range(3): tx(d, 18, y0 + 4 + i * dy, f"{i + 1}º", F8, C["amar"], centro=False)

def ficha(d, x, y, campos, titulo=None, w=120, sprite=None, t=0, hl=None, vazio=False, tit_cor=C["azul2"], esc=1.0, spr_pos="cima"):
    """a ficha (registro): um cartão com campos nome → valor."""
    h = 16 + 18 * len(campos) + (14 if titulo else 0); x0, y0 = x - w / 2, y - h / 2
    d.rectangle([x0 + 2, y0 + 2, x0 + w + 2, y0 + h + 2], fill=C["preto"]); d.rectangle([x0, y0, x0 + w, y0 + h], fill=C["papel"], outline=C["preto"], width=2)
    yy = y0 + 6
    if titulo: d.rectangle([x0, y0, x0 + w, y0 + 14], fill=tit_cor, outline=C["preto"]); tx(d, x, y0 + 3, titulo, F8, C["branco"]); yy += 14
    for i, (c, v) in enumerate(campos):
        if hl == i: d.rectangle([x0 + 3, yy - 2, x0 + w - 3, yy + 12], fill=(255, 225, 120))
        tx(d, x0 + 6, yy + 1, c.upper(), F8, C["cinza2"], centro=False, sombra=False)
        if not vazio and v: tx(d, x0 + w - 6 - d.textlength(v, font=F8), yy + 1, v, F8, C["preto"], centro=False, sombra=False)
        elif vazio: d.line([(x0 + w - 40, yy + 9), (x0 + w - 8, yy + 9)], fill=C["papel2"], width=1)
        yy += 18
    if sprite: SPR[sprite](at(d, x0 - 14, y0 + 16, .8) if spr_pos == "lado" else at(d, x, y0 - 17, .8), 0, 0, t)
    return (x0, y0, w, h)
CAMPOS = {"DRAGÃO": [("nome", "DRAGÃO"), ("vida", "100"), ("força", "80")], "FADA": [("nome", "FADA"), ("vida", "60"), ("força", "30")],
          "HERÓI": [("nome", "HERÓI"), ("vida", "90"), ("força", "70")]}
def bloco(d, x, y, partes, cor, u=1.0, chapeu=False):
    """bloco de programação (estilo editor de blocos): partes = textos e [entradas]."""
    if u <= 0: return None
    xo = x - int(40 * (1 - ease(cl(u)))); w = sum(d.textlength(p.strip("[]"), font=F8) + (10 if p.startswith("[") else 6) for p in partes) + 10
    if chapeu: d.chord([xo, y - 8, xo + 40, y + 10], 180, 360, fill=cor, outline=C["preto"])
    d.rectangle([xo, y, xo + w, y + 18], fill=cor, outline=C["preto"]); d.rectangle([xo + 10, y + 18, xo + 22, y + 21], fill=cor, outline=C["preto"])
    cx = xo + 6
    for p in partes:
        if p.startswith("["):
            s = p.strip("[]"); ww = d.textlength(s, font=F8) + 6; d.rounded_rectangle([cx, y + 3, cx + ww, y + 15], radius=4, fill=C["branco"], outline=C["preto"])
            tx(d, cx + 3, y + 5, s, F8, C["preto"], centro=False, sombra=False); cx += ww + 4
        else: tx(d, cx, y + 5, p, F8, C["branco"], centro=False); cx += d.textlength(p, font=F8) + 6
    return (xo, y, w)
def seta(d, x0, y0, x1, y1, cor=C["amar"]):
    d.line([(x0, y0), (x1, y1)], fill=cor, width=2); a = math.atan2(y1 - y0, x1 - x0)
    d.polygon([(x1, y1), (x1 - 6 * math.cos(a - .5), y1 - 6 * math.sin(a - .5)), (x1 - 6 * math.cos(a + .5), y1 - 6 * math.sin(a + .5))], fill=cor)
def fundo_grade(d, t, c1=C["noite"], c2=C["noite2"]):
    d.rectangle([0, 0, W, H], fill=c1)
    off = int(t * 6) % 16
    for x in range(-16 + off, W, 16): d.line([(x, 0), (x, H)], fill=c2)
    for y in range(-16 + off, H, 16): d.line([(0, y), (W, y)], fill=c2)
def confete(d, t, n=40):
    rng = np.random.default_rng(int(t * 8))
    for _ in range(n): x, y = rng.integers(0, W), rng.integers(0, H); d.rectangle([x, y, x + 1, y + 1], fill=[C["amar"], C["rosa"], C["verde"], C["azul"]][rng.integers(0, 4)])

EV = []
def ev(t, tipo): EV.append((round(t, 3), tipo))

# ---------------- cenas ----------------
def c0(d, t, D, T0):   # ABERTURA: mundo do jogo → a ficha voa até a câmera → título
    z = lerp(1.0, 1.25, ease(cl(t / D))); cam = Cam(d, 150, 80, z); mundo_jogo(d, cam, t)
    u = ease(cl((t - .3) / 1.0)); fx, fy = lerp(70, 160, u), lerp(60, 74, u); s = lerp(.2, 1.0, u)
    if u < 1: d.rectangle([fx - 30 * s, fy - 22 * s, fx + 30 * s, fy + 22 * s], fill=C["papel"], outline=C["preto"])
    if t > .5: tx(d, W / 2, 18, "MISSÃO 3", F16, C["amar"])
    if t > .8: carimbo(d, "REGISTROS", t - .8, C["azul2"], 46, F24)
    if t > 1.5:
        v = cl((t - 1.5) / .4); ficha(d, 160, 112 + int(10 * (1 - ease(v))), [("nome", "DRAGÃO"), ("vida", "100")], "A FICHA DE CADA PERSONAGEM", w=230)
    if t > 2.0: nome_contorno(d, W / 2, 148, "PROF. WELINGTON LAIGNIER")
def c1(d, t, D, T0):   # o jogo do Caio e as três listas que se misturam
    b1, b2, b3, b4 = beat(1, 1), beat(1, 2), beat(1, 3), beat(1, 4)
    if t < b1 + .6:   # quarto → zoom na tela do computador
        z = ease(cl((t - 1.2) / (b1 - 1.0))); cam = Cam(d, lerp(170, 232, z), lerp(90, 78, z), lerp(1.0, 6.5, z))
        quarto(cam, t); caio(cam, 180, 116, t)
        jogo = Cam(d, 0, 0, 1)   # mundo do jogo dentro do monitor
        a, b = cam.P(198, 56), cam.P(266, 98)
        if b[0] - a[0] > 8:
            sub = Image.new("RGB", (W, H)); sd = ImageDraw.Draw(sub); mundo_jogo(sd, Cam(sd, 150, 80, 1.0), t)
            sub = sub.resize((max(1, b[0] - a[0]), max(1, b[1] - a[1])), Image.NEAREST); d._image.paste(sub, (a[0], a[1]))
        faixa(d, "O JOGO DO CAIO", 26, (t - .4) * .8, C["amar"])
        if t > b1 - .2: d.rectangle([0, 0, W, H], fill=C["branco"]) if t < b1 + .1 else None
        return
    fundo_grade(d, t)
    apaga = cl((t - b3 - 1.2) / 1.0); sobe = cl((t - b3 - 2.3) / .6)
    mostra = tuple(cl((t - b2 - .2 - i * .9) / .4) for i in range(3))
    listas(d, mostra=mostra, apaga=apaga, sobe=sobe, marca=0 if t > b4 else None)
    if b3 < t < b3 + 2.3:   # cursor com borracha indo até o dragão
        u = ease(cl((t - b3) / 1.0)); x, y = lerp(300, 118, u), lerp(150, 60, u); icone(d, int(x), int(y), "lixo", 1)
    if t > b4:
        f = at(d, 30, 146, .9); fada(f, 0, 0, t)
        tx(d, 50, 136, "FADA: VIDA 100? FORÇA 80?", F8, C["verm"], centro=False)
        if int(t * 4) % 2: tx(d, 270, 134, "?!", F16, C["amar"])
    faixa(d, "3 LISTAS SEPARADAS", 12 + 12, cl((t - b1) * .8), C["amar"]) if t < b3 else faixa(d, "APAGOU O DRAGÃO SÓ DOS NOMES", 24, 1, C["verm"], C["branco"])
def c2(d, t, D, T0):   # por que? só a posição liga
    fundo_grade(d, t); b1, b2 = beat(2, 1), beat(2, 2)
    if t < b1 - .2:
        u = ease(cl(t / .5)); tx(d, W / 2, 70, "POR QUÊ?", F24, C["amar"]); return
    sobe = cl((t - b2 - .8) / .8)
    if sobe <= 0: listas(d, fios=cl((t - b1 - .6) / 1.2), fio_cor=C["amar"])
    else:
        listas(d, apaga=1, sobe=sobe, fios=1 if sobe >= 1 else 0, fio_cor=C["verm"])
        if sobe >= 1:
            for i in range(2): tx(d, 296, 60 + i * 22, "X", F8, C["verm"])
    faixa(d, "SÓ A POSIÇÃO LIGA" if t < b2 + .8 else "NOME NO NÚMERO ERRADO", 24, (t - b1) if t < b2 + .8 else (t - b2 - .8), C["amar"] if t < b2 + .8 else C["verm"], C["preto"] if t < b2 + .8 else C["branco"])
def c3(d, t, D, T0):   # lista x registro (ficha)
    fundo_grade(d, t, C["mar3"], C["mar2"]); b1, b2 = beat(3, 1), beat(3, 2)
    v = cl(t / .5)
    caixinha(d, 74, 38, 110, "LISTA", C["azul2"], C["branco"])
    for i, n in enumerate(["ANA", "BETO", "CAIO", "DUDA"]):
        if t > .3 + i * .5: caixinha(d, 74, 60 + i * 20, 90, n); tx(d, 18, 64 + i * 20, f"{i + 1}º", F8, C["amar"], centro=False)
    if t > 2.2: tx(d, 74, 142, "ITENS PARECIDOS", F8, C["ciano"])
    if t > b1 - .2:
        u = ease(cl((t - b1 + .2) / .6)); ficha(d, 232, 96 + int(20 * (1 - u)), [("nome", "DRAGÃO"), ("vida", "100"), ("força", "80")], "REGISTRO", w=126, sprite="DRAGÃO", t=t, spr_pos="lado")
        if t > b1 + 1.6: tx(d, 232, 142, "UMA COISA SÓ", F8, C["ciano"])
    if t > b2: carimbo(d, "= FICHA", t - b2, C["verde2"], 26, F16)
def c4(d, t, D, T0):   # vista explodida da ficha: campo → valor
    fundo_grade(d, t); b1, b2, b3 = beat(4, 1), beat(4, 2), beat(4, 3)
    sep = ease(cl((t - .3) / 1.4)); camp = CAMPOS["DRAGÃO"]
    tit = cl(t / .4)
    for i, (c, vv) in enumerate(camp):
        y = 94 + (i - 1) * lerp(16, 30, sep); x = 150 + (i - 1) * lerp(0, 10, sep)
        d.polygon([(x - 80, y - 10), (x + 70, y - 10), (x + 80, y + 10), (x - 70, y + 10)], fill=C["papel"], outline=C["preto"])
        d.polygon([(x - 70, y + 10), (x + 80, y + 10), (x + 80, y + 13), (x - 70, y + 13)], fill=C["papel2"], outline=C["preto"])
        d.line([(x - 4, y - 9), (x + 4, y + 9)], fill=C["papel2"])
        tx(d, x - 38, y - 4, c.upper(), F8, C["cinza2"], sombra=False)
        lig = t > dentro(4, 2, [0.0, .34, .68][i]) + .2
        if lig or t > b3: tx(d, x + 42, y - 4, vv, F8, C["verm2"] if lig else C["preto"], sombra=False)
        if t > b3 + .6 and sep > .9:
            tipo = "TEXTO" if i == 0 else "NÚMERO"; tx(d, x + 92, y - 4, tipo, F8, C["ciano"] if i == 0 else C["lar"], centro=False)
    if t > b1 + .3:
        seta(d, 70, 36, 96, 52); tx(d, 60, 26, "CAMPO", F8, C["amar"]); seta(d, 214, 36, 196, 52); tx(d, 222, 26, "VALOR", F8, C["amar"])
    if t < b1 + .3: faixa(d, "A FICHA TEM CAMPOS", 26, t, C["amar"])
    sx = at(d, 30, 150, .9); dragao(sx, 0, 0, t)
def c5(d, t, D, T0):   # editor de blocos: nova ficha e escrever no campo
    d.rectangle([0, 0, W, H], fill=(236, 240, 248)); d.rectangle([0, 18, 38, H], fill=(210, 218, 232))
    for i, cor in enumerate((C["bloco_l"], C["bloco_a"], C["bloco_v"], C["bloco_r"])): d.rectangle([6, 26 + i * 18, 32, 38 + i * 18], fill=cor, outline=C["preto"])
    b0, b1 = .2, beat(5, 1)
    bloco(d, 48, 34, ["NOVA FICHA"], C["bloco_l"], (t - b0) / .5, chapeu=True)
    if t > dentro(5, 0, .55):   # guardada numa variável
        u = ease(cl((t - dentro(5, 0, .55)) / .6))
        d.rectangle([222, 22, 310, 40], fill=C["bloco_r"], outline=C["preto"]); tx(d, 266, 27, "DRAGÃO", F8, C["branco"])
        tx(d, 180, 27, "VARIÁVEL", F8, C["cinza2"], sombra=False)
    if t > dentro(5, 0, .3):
        ficha(d, 266, 104, CAMPOS["DRAGÃO"], "DRAGÃO", w=96, vazio=True, hl=1 if t > b1 + 1.6 else None)
        seta(d, 140, 43, 216, 64, C["preto"])
    if t > b1:
        bloco(d, 48, 70, ["NA FICHA", "[DRAGÃO]"], C["bloco_v"], (t - b1) / .5)
        bloco(d, 48, 92, ["CAMPO", "[VIDA]", "VALE", "[100]"], C["bloco_v"], (t - b1 - .6) / .5)
        u = ease(cl((t - b1 - 2.6) / 1.0))
        if 0 < u < 1: x, y = lerp(186, 296, u), lerp(98, 108, u) - math.sin(u * math.pi) * 30; tx(d, x, y, "100", F8, C["verm2"], fundo=C["amar"])
        if u >= 1: tx(d, 296, 107, "100", F8, C["verm2"], sombra=False); faixa(d, "ESCREVEU!", 140, (t - b1 - 3.6), C["verde2"], C["branco"])
def c6(d, t, D, T0):   # ler o campo e mostrar na tela
    d.rectangle([0, 0, W, H], fill=(236, 240, 248)); b1, b2, b3 = beat(6, 1), beat(6, 2), beat(6, 3)
    faixa(d, "E PARA LER?", 26, t, C["azul2"], C["branco"])
    ficha(d, 262, 112, CAMPOS["DRAGÃO"], "DRAGÃO", w=96, hl=1 if t > b1 + .8 else None)
    if t > b1:
        bloco(d, 16, 46, ["CAMPO", "[VIDA]", "DA FICHA", "[DRAGÃO]"], C["bloco_a"], (t - b1) / .5)
        if t > b1 + 1.4:
            u = ease(cl((t - b1 - 1.4) / 1.0)); x = lerp(290, 120, u); tx(d, x, 84, "100", F8, C["verm2"], fundo=C["amar"])
    if t > b2:
        bloco(d, 16, 108, ["MOSTRAR", "[...]"], C["bloco_l"], (t - b2) / .5)
        d.rectangle([128, 104, 196, 150], fill=C["preto"], outline=C["cinza"], width=2); d.rectangle([132, 108, 192, 140], fill=C["tela"])
    if t > b3 - .1:
        s = 1 + 1.2 * (1 - ease(cl((t - b3 + .1) / .4))); f = ImageFont.truetype(FONTE, max(8, int(16 * s) // 8 * 8)); w = d.textlength("100", font=f); d.text((162 - w / 2, 116 - (f.size - 16) / 2), "100", font=f, fill=C["verm2"])
def c7(d, t, D, T0):   # lista acha pela posição · ficha acha pelo nome do campo
    fundo_grade(d, t); b1, b2, b3, b4 = beat(7, 1), beat(7, 2), beat(7, 3), beat(7, 4)
    d.line([(160, 22), (160, 158)], fill=C["cinza2"], width=1)
    caixinha(d, 80, 28, 100, "LISTA", C["azul2"], C["branco"])
    for i, n in enumerate(["DRAGÃO", "FADA", "HERÓI"]):
        lig = b1 + i * .7 < t < b1 + i * .7 + 1.4 + (9 if i == 2 else 0) and t > b1 + i * .7
        caixinha(d, 90, 52 + i * 24, 96, n, (255, 225, 120) if lig else C["branco"]); tx(d, 22, 56 + i * 24, ["1º", "2º", "3º"][i], F8, C["amar"] if lig else C["cinza"], centro=False)
    caixinha(d, 240, 28, 100, "FICHA", C["verde2"], C["branco"])
    ordem = [0, 1, 2]
    if t > b3: k = ease(cl((t - b3) / .9)); pos = [lerp(0, 2, k), lerp(1, 0, k), lerp(2, 1, k)]
    else: pos = [0, 1, 2]
    for i, (c, v) in enumerate(CAMPOS["DRAGÃO"]):
        y = 52 + pos[i] * 24; hl = i == 1 and t > b2 + .6
        d.rectangle([186, y, 296, y + 16], fill=(255, 225, 120) if hl else C["papel"], outline=C["preto"])
        tx(d, 190, y + 4, c.upper(), F8, C["cinza2"], centro=False, sombra=False); tx(d, 292 - d.textlength(v, font=F8), y + 4, v, F8, C["preto"], centro=False, sombra=False)
    if b2 < t < b4: tx(d, 240, 128, "PROCURA: VIDA", F8, C["amar"])
    if t > b4: carimbo(d, "VIDA É SEMPRE VIDA", t - b4, C["verde2"], 142, F8)
def c8(d, t, D, T0):   # lista de fichas = tabela · linha e coluna · cadastro
    fundo_grade(d, t, C["mar3"], C["mar2"]); b1, b2, b3 = beat(8, 1), beat(8, 2), beat(8, 3)
    nomes = ["DRAGÃO", "FADA", "HERÓI"]; u = ease(cl((t - b1) / 1.4))
    x0, y0, cw, lh = 58, 46, 72, 20
    if u < 1:
        for i, n in enumerate(nomes):
            fx, fy = lerp(54 + i * 104, x0 + 108, u), lerp(96, y0 + 30 + i * lh, u)
            if u < .5: ficha(d, fx, fy, CAMPOS[n], n, w=100)
            else: d.rectangle([x0, y0 + 20 + i * lh, x0 + 3 * cw, y0 + 20 + (i + 1) * lh], fill=C["papel"], outline=C["preto"])
        faixa(d, "LISTA + FICHA", 24, t, C["amar"]); return
    for j, c in enumerate(["NOME", "VIDA", "FORÇA"]):
        col = b2 + 1.6 < t < b3 and j == 1
        d.rectangle([x0 + j * cw, y0, x0 + (j + 1) * cw, y0 + lh], fill=C["azul2"], outline=C["preto"]); tx(d, x0 + j * cw + cw / 2, y0 + 6, c, F8, C["branco"])
        for i, n in enumerate(nomes):
            lin = b2 < t < b3 and i == 0
            v = CAMPOS[n][j][1]; cor = (255, 225, 120) if lin else ((190, 240, 200) if col else C["papel"])
            d.rectangle([x0 + j * cw, y0 + (i + 1) * lh, x0 + (j + 1) * cw, y0 + (i + 2) * lh], fill=cor, outline=C["preto"]); tx(d, x0 + j * cw + cw / 2, y0 + (i + 1) * lh + 6, v, F8, C["preto"], sombra=False)
    if b2 < t < b3: tx(d, 18, y0 + lh + 6, "LINHA", F8, C["amar"], centro=False) if True else None
    if b2 + 1.6 < t < b3: tx(d, x0 + 1.5 * cw, y0 + 4 * lh + 6, "COLUNA", F8, (190, 240, 200))
    faixa(d, "UMA TABELA!", 24, (t - b1 - 1.4), C["amar"]) if t < b3 else None
    if t > b3:
        d.rectangle([x0 - 4, y0 - 4, x0 + 3 * cw + 4, y0 + 4 * lh + 4], outline=C["amar"], width=2); carimbo(d, "CADASTRO", t - b3, C["verde2"], 134, F16)
def c9(d, t, D, T0):   # o Caio resolve: uma ficha para cada personagem
    fundo_grade(d, t); b1, b2, b3 = beat(9, 1), beat(9, 2), beat(9, 3)
    sai = ease(cl((t - dentro(9, 1, .1)) / 1.4))
    for i, n in enumerate(["DRAGÃO", "FADA", "HERÓI"]):
        v = cl((t - .3 - i * .6) / .4)
        if v <= 0: continue
        x, y = 54 + i * 104, 104 + int(12 * (1 - ease(v)))
        if n == "DRAGÃO": x += int(sai * 10) ; y -= int(sai * 160)
        else: x -= int(sai * 50)
        hl = 2 if (n == "FADA" and t > dentro(9, 1, .65)) else None
        ficha(d, x, y, CAMPOS[n], n, w=100, hl=hl, sprite=n if n != "DRAGÃO" or sai < .9 else None, t=t)
    if t < b1: faixa(d, "UMA FICHA PARA CADA UM", 24, t, C["amar"])
    elif t < b2: faixa(d, "SAIU A FICHA INTEIRA", 24, (t - b1), C["amar"])
    if b2 < t < b3: faixa(d, "NADA SE MISTURA", 24, (t - b2), C["verde2"], C["branco"])
    if t > b3:
        confete(d, t); carimbo(d, "MISSÃO CUMPRIDA!", t - b3, C["verde2"], 20, F16)
def c10(d, t, D, T0):   # onde eu uso isso?
    d.rectangle([0, 0, W, H], fill=C["roxo2"]); faixa(d, "ONDE EU USO ISSO?", 24, t, C["amar"], C["preto"], F16)
    CARDS = [("celular", "CONTATO", [("nome", "ANA"), ("tel.", "9999"), ("aniv.", "3/5")], 1), ("jogo", "PERSONAGEM", [("nome", "FADA"), ("vida", "60"), ("força", "30")], 2),
             ("escola", "MATRÍCULA", [("nome", "CAIO"), ("ano", "7º"), ("turma", "B")], 3)]
    for i, (ic, tit, campos, bj) in enumerate(CARDS):
        v = cl((t - beat(10, bj) + .2) / .4)
        if v <= 0: continue
        x = 56 + i * 104; y = 110 + int(10 * (1 - ease(v)))
        icone(d, x - 8, 48, ic, 1); ficha(d, x, y, campos, tit, w=96)
    if t > beat(10, 4): faixa(d, "CONJUNTO = CADASTRO", 158, (t - beat(10, 4)), C["amar"])
def c11(d, t, D, T0):   # fim
    fundo_grade(d, t); confete(d, t, 20)
    carimbo(d, "MISSÃO 3", t, C["azul2"], 34, F24); tx(d, W / 2, 76, "ABRAM NO PORTAL!", F16, C["amar"])
    if t > beat(11, 1) + 1.2: tx(d, W / 2, 104, "E MONTEM AS SUAS FICHAS!", F8, C["branco"])
    nome_contorno(d, W / 2, 126, "PROF. WELINGTON LAIGNIER")
CENAS = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11]

def eventos():
    S = slot
    ev(.1, "whoosh"); ev(.8, "pop"); ev(1.5, "sino")
    ev(S[1] + 1.2, "desce"); ev(S[1] + beat(1, 1), "whoosh")
    for i in range(3): ev(S[1] + beat(1, 2) + .2 + i * .9, "pop")
    ev(S[1] + beat(1, 3) + 1.2, "sumiu"); ev(S[1] + beat(1, 3) + 2.3, "whoosh"); ev(S[1] + beat(1, 4), "alerta")
    ev(S[2] + .1, "misterio"); ev(S[2] + beat(2, 1) + .6, "ding"); ev(S[2] + beat(2, 2) + .8, "whoosh"); ev(S[2] + beat(2, 2) + 1.7, "alerta")
    ev(S[3] + beat(3, 1), "pop"); ev(S[3] + beat(3, 2), "sino")
    ev(S[4] + .3, "whoosh"); [ev(S[4] + dentro(4, 2, f) + .2, "ding") for f in (0, .34, .68)]
    ev(S[5] + .2, "click"); ev(S[5] + dentro(5, 0, .55), "pop"); ev(S[5] + beat(5, 1), "click"); ev(S[5] + beat(5, 1) + 2.6, "voa"); ev(S[5] + beat(5, 1) + 3.6, "ding")
    ev(S[6] + beat(6, 1), "click"); ev(S[6] + beat(6, 1) + 1.4, "voa"); ev(S[6] + beat(6, 2), "click"); ev(S[6] + beat(6, 3), "sino")
    for i in range(3): ev(S[7] + beat(7, 1) + i * .7, "tec")
    ev(S[7] + beat(7, 2) + .6, "ding"); ev(S[7] + beat(7, 3), "whoosh"); ev(S[7] + beat(7, 4), "ding")
    ev(S[8] + beat(8, 1), "whoosh"); ev(S[8] + beat(8, 2), "pop"); ev(S[8] + beat(8, 2) + 1.6, "pop"); ev(S[8] + beat(8, 3), "sino")
    ev(S[9] + dentro(9, 1, .1), "voa"); ev(S[9] + beat(9, 2), "ding"); ev(S[9] + beat(9, 3), "festa")
    ev(S[10] + .1, "pop"); [ev(S[10] + beat(10, j), "pop") for j in (1, 2, 3)]; ev(S[10] + beat(10, 4), "ding")
    ev(S[11] + .05, "sino")

if __name__ == "__main__":
    so = [int(x) for x in sys.argv[1:] if x.isdigit()]
    eventos(); json.dump(EV, open("eventos.json", "w")); open("duracao.txt", "w").write(str(round(TOTAL, 3)))
    N = int(TOTAL * FPS); FL2 = ImageFont.truetype(FONTE, 24)
    def quadro(i):
        tg = i / FPS; k = max(j for j in range(len(par)) if slot[j] <= tg); tl = tg - slot[k]; D = slot[k + 1] - slot[k]
        im = Image.new("RGB", (W, H), C["noite"]); d = ImageDraw.Draw(im); CENAS[k](d, tl, D, slot[k])
        if k not in (0, 11): selo(d)
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
