"""Alinhamento rápido por FRASE (respeitando os parágrafos) (para narrações longas, em que o alinhamento por frase do finalizar.py fica lento).
uso: python3 alinhar_paragrafos.py <pasta>   → grava <pasta>/voz/cortes.json; depois: finalizar.py <pasta> <mp3> <saida> --usar-cortes
Escolhe, em ordem, uma pausa da voz para cada troca de parágrafo: duração de cada parágrafo ≈ proporcional às sílabas,
com preferência pelas pausas mais longas (o prompt pede ~2 s entre parágrafos)."""
import sys, re, json, math, subprocess
pasta = sys.argv[1]; mp3 = f"{pasta}/voz/voz.mp3"
END = float(subprocess.run(f"ffprobe -v error -show_entries format=duration -of csv=p=0 {mp3}", shell=True, capture_output=True, text=True).stdout)
txt = subprocess.run(f"ffmpeg -i {mp3} -af silencedetect=noise=-35dB:d=0.25 -f null -", shell=True, capture_output=True, text=True).stderr
S, a = [], None
for k, v in re.findall(r"silence_(start|end): ([0-9.]+)", txt):
    if k == "start": a = float(v)
    elif a is not None: S.append((a, float(v))); a = None
t0 = S[0][1] if S and S[0][0] < .05 else 0.0
S = [s for s in S if s[0] > .05 and s[1] < END - .05]
par = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
syl = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
fr, pb = [], set()   # sílabas de cada frase; fronteiras de parágrafo (índice da frase seguinte)
for p in par:
    for f in [x for x in re.split(r"(?<=[.,:;?!…])\s+", p) if x.strip()]: fr.append(syl(f))
    pb.add(len(fr))
pb.discard(len(fr)); NB = len(fr); M = len(S)
fala = END - t0 - sum(b - a for a, b in S); R = sum(fr) / fala
cum = [0]
for x in fr: cum.append(cum[-1] + x)
pen = [min(2.0, (b - a) * 4) for a, b in S]   # pular uma pausa longa dentro de um trecho custa caro
def custo(j1, j2, dur): e = (cum[j2] - cum[j1]) / R; return (math.log(max(dur, .05) / e)) ** 2 * (1 + .02 * (j2 - j1))
INF = 1e18; MAXF, MAXP = 4, 6
D = {(-1, 0): 0.0}; B = {}
for i in range(M):
    for j in range(1, NB):
        best, arg = INF, None
        for ii in range(max(-1, i - MAXP), i):
            pul = sum(pen[q] for q in range(ii + 1, i)); tini = t0 if ii < 0 else S[ii][1]
            for jj in range(max(0, j - MAXF), j):
                if (ii, jj) not in D or any(jj < b < j for b in pb): continue
                c = D[(ii, jj)] + pul + custo(jj, j, S[i][0] - tini)
                if c < best: best, arg = c, (ii, jj)
        if arg: D[(i, j)] = best; B[(i, j)] = arg
fc, fim = INF, None
for (i, j), c in D.items():
    if NB - j > MAXF or any(j < b < NB for b in pb): continue
    tini = t0 if i < 0 else S[i][1]; cc = c + sum(pen[q] for q in range(i + 1, M)) + custo(j, NB, END - tini)
    if cc < fc: fc, fim = cc, (i, j)
mapa = {}; st = fim
segs = []   # trechos falados: frases j1..j2-1, da pausa ii até a pausa i (para fala_sync.py)
par_de = []
for k, p in enumerate(par):
    for f in [x for x in re.split(r"(?<=[.,:;?!…])\s+", p) if x.strip()]: par_de.append(k)
def trecho(ii, i, j1, j2):
    a = t0 if ii < 0 else S[ii][1]; b = END if i is None else S[i][0]
    iv, cur = [], a
    for q in range((ii + 1) if ii >= 0 else 0, (i if i is not None else M)):
        if S[q][0] > a and S[q][1] < b: iv.append([cur, S[q][0]]); cur = S[q][1]
    iv.append([cur, b]); segs.append({"j": [j1, j2], "par": par_de[j1], "iv": [[round(x, 3), round(y, 3)] for x, y in iv]})
trecho(fim[0], None, fim[1], NB)
while st and st[0] >= 0: mapa[st[1]] = st[0]; ant = B[st]; trecho(ant[0], st[0], ant[1], st[1]); st = ant
segs.sort(key=lambda g: g["j"][0])
falt = [b for b in sorted(pb) if b not in mapa]; print("custo", round(fc, 2), "faltando", falt)
cortes = [list(S[mapa[b]]) for b in sorted(pb)]
json.dump(cortes, open(f"{pasta}/voz/cortes.json", "w"))
json.dump(segs, open(f"{pasta}/voz/frases.json", "w"))   # para fala_sync.py (início real de cada palavra)
ini = t0
for k, p in enumerate(par):
    e = cortes[k][0] if k < len(cortes) else END; print(f"{k:2d} {ini:6.1f}-{e:6.1f} ({e-ini:4.1f}s) pausa {(cortes[k][1]-cortes[k][0]) if k < len(cortes) else 0:.2f} | {p[:50]}"); ini = cortes[k][1] if k < len(cortes) else END
