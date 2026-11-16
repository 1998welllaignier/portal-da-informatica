"""Gera window.FALA (início de cada palavra, no tempo local da cena) e injeta no video.html.
uso: python3 fala_sync.py <pasta> [PA=0.9]

Versão 2 (16/11/2026): o tempo de cada palavra vem dos NÚCLEOS DE SÍLABA detectados na própria voz
(picos de energia na faixa da fala). Assim a legenda e as placas acompanham a velocidade real do narrador,
inclusive quando ele acelera, desacelera ou soletra uma sigla (BNCC = bê-ene-cê-cê).
Cada parágrafo vai de um corte (voz/cortes.json) ao seguinte; dentro dele, a palavra começa no núcleo
correspondente à sua posição em sílabas, e o começo de cada frase gruda no fim da pausa mais próxima.
Relatório no fim: diferença entre o início previsto de cada frase e a pausa real (quanto menor, melhor)."""
import sys, re, json, os, subprocess
import numpy as np
from scipy.io import wavfile
from scipy.signal import find_peaks, butter, filtfilt
pasta = sys.argv[1]; PA = float(sys.argv[2]) if len(sys.argv) > 2 else .9
par = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
cortes = json.load(open(f"{pasta}/voz/cortes.json")); mids = [(a + b) / 2 for a, b in cortes]
VOG = r"[aeiouáéíóúâêôãõàüy]+"
def syl(w):
    lim = re.sub(r"[^\wÀ-ÿ]", "", w)
    if not lim: return 1
    if lim.isdigit(): return 2 * len(lim)
    if lim.isupper() and len(lim) >= 2 and not re.search(r"[AEIOUÁÉÍÓÚ]", lim):
        return len(lim)  # sigla sem vogal é soletrada (BNCC, TV, PC)
    n = len(re.findall(VOG, lim.lower()))
    n += len(re.findall(r"[aeo][íú]|[íú][aeo]|ea|eo|oa|ia(?=$|s)|io(?=$|s)", lim.lower()))  # hiatos comuns (conteúdo, saúde, ideia)
    return max(1, n)
# ---------- voz ----------
wav = f"{pasta}/voz/v44.wav"
if not os.path.exists(wav): subprocess.run(f"ffmpeg -loglevel error -y -i {pasta}/voz/voz.mp3 -ac 2 -ar 44100 {wav}", shell=True, check=True)
sr, x = wavfile.read(wav); x = (x.mean(1) if x.ndim > 1 else x).astype(float); END = len(x) / sr
b, a = butter(4, [300 / (sr / 2), 2500 / (sr / 2)], "band"); y = filtfilt(b, a, x)
H = int(sr * .01); fr = len(y) // H
env = np.sqrt(np.convolve((y[:fr * H].reshape(fr, H) ** 2).mean(1), np.ones(3) / 3, "same")); db = 20 * np.log10(env + 1e-6)
topo = np.percentile(db, 95)
pk, _ = find_peaks(db, prominence=2.5, distance=8, height=topo - 24); NUC = pk / 100.0
fala_on = db > topo - 30
def pausas(a0, b0, minimo=.12):  # trechos sem fala dentro de [a0,b0]
    out, i0 = [], None
    for i in range(int(a0 * 100), min(int(b0 * 100), len(fala_on))):
        if not fala_on[i]:
            if i0 is None: i0 = i
        elif i0 is not None:
            if (i - i0) / 100 >= minimo: out.append((i0 / 100, i / 100))
            i0 = None
    return out
import math
W, rel = [[] for _ in par], []
for k, p in enumerate(par):
    a0 = cortes[k - 1][1] if k > 0 else 0.0; b0 = cortes[k][0] if k < len(cortes) else END
    # trechos de fala (entre pausas) dentro do parágrafo
    ps = pausas(a0, b0); seg, ini = [], a0
    for q in ps:
        if q[0] - ini > .08: seg.append((ini, q[0]))
        ini = q[1]
    if b0 - ini > .08: seg.append((ini, b0))
    if not seg: seg = [(a0, b0)]
    if seg[0][0] == a0:  # o parágrafo começa depois do primeiro núcleo, não no corte
        nz = NUC[(NUC >= a0) & (NUC <= seg[0][1])]
        if len(nz): seg[0] = (max(a0, nz[0] - .12), seg[0][1])
    ws = p.split(); fr, fw = [], []   # frases (sílabas) e o índice da 1ª palavra de cada uma
    for i, w in enumerate(ws):
        if i == 0 or re.search(r"[.,:;?!…]$", ws[i - 1]): fr.append(0); fw.append(i)
        fr[-1] += syl(w)
    nF, nS = len(fr), len(seg); cumF = [0]
    for x in fr: cumF.append(cumF[-1] + x)
    fala = sum(b - a for a, b in seg); R = cumF[-1] / fala
    INF = 1e9; D = {(0, 0): 0.0}; B = {}
    for si in range(nS + 1):
        for fj in range(nF + 1):
            if (si, fj) not in D: continue
            for s2 in range(si + 1, min(nS, si + 6) + 1):
                for f2 in range(fj + 1, min(nF, fj + 6) + 1):
                    dur = seg[s2 - 1][1] - seg[si][0]; esp = (cumF[f2] - cumF[fj]) / R
                    pen_p = sum(min(1.5, (seg[z + 1][0] - seg[z][1]) * 5) for z in range(si, s2 - 1))  # pausa no meio de uma frase
                    c = D[(si, fj)] + math.log(max(dur, .05) / esp) ** 2 * 4 + .15 * (f2 - fj - 1) + pen_p
                    if c < D.get((s2, f2), INF): D[(s2, f2)] = c; B[(s2, f2)] = (si, fj)
    grupos, st = [], (nS, nF)
    if st not in B: grupos = [(0, nS, 0, nF)]
    else:
        while st != (0, 0): pv = B[st]; grupos.append((pv[0], st[0], pv[1], st[1])); st = pv
        grupos.reverse()
    tw = [0.0] * len(ws)
    for s1, s2, f1, f2 in grupos:
        ga, gb = seg[s1][0], seg[s2 - 1][1]; w1 = fw[f1]; w2 = fw[f2] if f2 < nF else len(ws)
        nuc = NUC[(NUC >= ga) & (NUC <= gb)]; ss = [syl(w) for w in ws[w1:w2]]; S = sum(ss); n = len(nuc); acc = 0
        for i in range(w1, w2):
            t = ga if i == w1 else (nuc[min(n - 1, int(round(acc / S * n)))] - .07 if n >= 2 else ga + acc / S * (gb - ga))
            # frases dentro do grupo: se houver pausa perto, gruda no fim dela
            if i != w1 and i in fw:
                fins = [seg[z][0] for z in range(s1 + 1, s2)]
                if fins:
                    f = min(fins, key=lambda z: abs(z - t))
                    if abs(f - t) < .4: rel.append(round(f - t, 2)); t = f
            tw[i] = max(t, tw[i - 1] + .05) if i > 0 else t
            acc += ss[i - w1]
    W[k] = [round(t - (mids[k - 1] - PA / 2 if k > 0 else 0), 3) for t in tw]
for k, p in enumerate(par): assert len(W[k]) == len(p.split()), (k, len(W[k]), len(p.split()))
s = open(f"{pasta}/video.html").read(); s = re.sub(r"window\.FALA = .*?;\n", "", s)
s = s.replace("/* ================= tempo das cenas", "window.FALA = " + json.dumps([{"w": w} for w in W]) + ";\n/* ================= tempo das cenas", 1)
open(f"{pasta}/video.html", "w").write(s)
r = np.abs(np.array(rel)) if rel else np.array([0])
print(f"FALA ok · núcleos {len(NUC)} · frases ancoradas {len(rel)} · ajuste médio {r.mean():.2f}s, máx {r.max():.2f}s")
# conferência: toda pausa de 0,25 s ou mais dentro de um parágrafo deve cair numa troca de frase
ruins = []
for k, p in enumerate(par):
    a0 = cortes[k - 1][1] if k > 0 else 0.0; b0 = cortes[k][0] if k < len(cortes) else END
    off = (mids[k - 1] - PA / 2 if k > 0 else 0); ws = p.split(); tw = [t + off for t in W[k]]
    for q in pausas(a0, b0, .25):
        i = min(range(len(tw)), key=lambda z: abs(tw[z] - q[1]))
        if abs(tw[i] - q[1]) > .2 or (i > 0 and not re.search(r"[.,:;?!…]$", ws[i - 1])): ruins.append((k, round(q[1], 2), ws[i]))
print("pausas fora de troca de frase:", len(ruins), ruins[:12])
# conferência 2: núcleos de sílaba ÷ sílabas do texto, por parágrafo. Valores parecidos em todos = cortes certos;
# um parágrafo muito fora da média indica corte no lugar errado (ou o narrador pulou/acrescentou texto).
rz = []
for k, p in enumerate(par):
    a0 = cortes[k - 1][1] if k > 0 else 0.0; b0 = cortes[k][0] if k < len(cortes) else END
    rz.append(((NUC >= a0) & (NUC <= b0)).sum() / sum(syl(w) for w in p.split()))
med = float(np.median(rz)); fora = [(k, round(r / med, 2)) for k, r in enumerate(rz) if abs(r / med - 1) > .15]
print("parágrafos fora do ritmo:", fora if fora else "nenhum")
