"""Alinha frases↔pausas (rápido) e devolve cortes de parágrafo + intervalos de fala por frase.
uso: python3 alinhar_frases.py <pasta>  → voz/cortes.json e voz/frases.json"""
import sys, re, json, math, subprocess
pasta = sys.argv[1]; mp3 = f"{pasta}/voz/voz.mp3"
END = float(subprocess.run(f"ffprobe -v error -show_entries format=duration -of csv=p=0 {mp3}", shell=True, capture_output=True, text=True).stdout)
err = subprocess.run(f"ffmpeg -i {mp3} -af silencedetect=noise=-35dB:d=0.15 -f null -", shell=True, capture_output=True, text=True).stderr
S, a = [], None
for k, v in re.findall(r"silence_(start|end): ([0-9.]+)", err):
    if k == "start": a = float(v)
    elif a is not None: S.append((a, float(v))); a = None
t0 = S[0][1] if S and S[0][0] < .05 else 0.0
S = [s for s in S if s[0] > .05 and s[1] < END - .05]
# pedaços de fala entre pausas
ch = []; ini = t0
for s0, s1 in S: ch.append((ini, s0)); ini = s1
ch.append((ini, END)); C = len(ch)
par = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
syl = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
fr, fp = [], []
for i, p in enumerate(par):
    for f in [x for x in re.split(r"(?<=[.,:;?!…])\s+", p) if x.strip()]: fr.append(syl(f)); fp.append(i)
P = len(fr); fala = sum(b - a for a, b in ch); R = sum(fr) / fala
cum = [0]
for x in fr: cum.append(cum[-1] + x)
scum = [0]
for a, b in ch: scum.append(scum[-1] + b - a)
import numpy as np
from scipy.io import wavfile
from scipy.signal import butter, sosfiltfilt, find_peaks
subprocess.run(f"ffmpeg -loglevel error -y -i {mp3} -ac 1 -ar 16000 {pasta}/voz/m16.wav", shell=True)
sr, x = wavfile.read(f"{pasta}/voz/m16.wav"); x = x.astype(float); y = sosfiltfilt(butter(4, [300, 2500], "band", fs=sr, output="sos"), x)
e = np.sqrt(np.convolve(y ** 2, np.ones(400) / 400, "same"))[::160]; e = np.convolve(np.log(e + 1e-3), np.ones(5) / 5, "same")
pk, _ = find_peaks(e, prominence=.5, distance=8, height=np.percentile(e, 40)); PK = pk * .01
ncum = [0]
for a, b in ch: ncum.append(ncum[-1] + int(((PK >= a) & (PK < b)).sum()))
KR = ncum[-1] / cum[-1]
def custo(j1, j2, c1, c2):  # frases j1..j2-1 nos pedaços c1..c2-1
    if fp[j1] != fp[j2 - 1]: return None
    d = scum[c2] - scum[c1]; e = (cum[j2] - cum[j1]) / R
    v = (math.log(max(d, .05) / e)) ** 2 * 2
    no = ncum[c2] - ncum[c1]; nt = KR * (cum[j2] - cum[j1]); v += (no - nt) ** 2 / (nt + 3) * .6
    v += .25 * (c2 - c1 - 1)  # pausa dentro do grupo (respiração sem pontuação): pouca penalidade
    v += .15 * (j2 - j1 - 1)  # pontuação sem pausa
    return v
INF = 1e18; dp = {(0, 0): (0.0, None)}
for j in range(1, P + 1):
    for c in range(1, C + 1):
        best = (INF, None)
        for j1 in range(max(0, j - 4), j):
            for c1 in range(max(0, c - 8), c):
                if (j1, c1) not in dp: continue
                v = custo(j1, j, c1, c)
                if v is None: continue
                v += dp[(j1, c1)][0]
                if j < P and fp[j] != fp[j - 1]: v -= 3 * (ch[c][0] - ch[c - 1][1]) if c < C else 0  # fronteira de parágrafo numa pausa longa
                if v < best[0]: best = (v, (j1, c1))
        if best[1] is not None: dp[(j, c)] = best
st = (P, C); assert st in dp, "sem solução"
grupos = []
while st != (0, 0): pr = dp[st][1]; grupos.append((pr[0], st[0], pr[1], st[1])); st = pr
grupos.reverse()
cortes = []; frases = []
for j1, j2, c1, c2 in grupos:
    frases.append({"par": fp[j1], "j": [j1, j2], "iv": [list(x) for x in ch[c1:c2]]})
    if j2 < P and fp[j2] != fp[j2 - 1]: cortes.append([ch[c2 - 1][1], ch[c2][0]])
json.dump(cortes, open(f"{pasta}/voz/cortes.json", "w")); json.dump(frases, open(f"{pasta}/voz/frases.json", "w"))
ini = t0
for k, p in enumerate(par):
    e = cortes[k][0] if k < len(cortes) else END
    print(f"{k:2d} {ini:6.2f}-{e:6.2f} ({e-ini:4.1f}s) {p[:45]} … {p[-25:]}"); ini = cortes[k][1] if k < len(cortes) else END
print("frases", P, "pedaços", C, "grupos", len(grupos), "custo", round(dp[(P, C)][0], 1))
# diagnóstico: núcleos por sílaba em cada parágrafo
ini = t0
for k, p in enumerate(par):
    e2 = cortes[k][0] if k < len(cortes) else END; n = int(((PK >= ini) & (PK < e2)).sum()); ts = sum(fr[j] for j in range(P) if fp[j] == k)
    print(f"{k:2d} núcleos {n:3d} sílabas {ts:3d} razão {n/ts:.2f}"); ini = cortes[k][1] if k < len(cortes) else END
