"""Finaliza um vídeo v4 quando chega o MP3.
uso: python3 finalizar.py <pasta> <voz.mp3> <saida.mp4> [--so-alinhar]
1) acha as pausas da voz; 2) alinha frases↔pausas (programação dinâmica por sílabas); 3) insere 0,9 s de respiro
em cada troca de parágrafo (sem esticar a voz); 4) grava, gera música/efeitos e mistura."""
import sys, os, re, json, math, subprocess, shutil
import numpy as np
from scipy.io import wavfile
pasta, mp3, saida = sys.argv[1:4]; so = "--so-alinhar" in sys.argv
os.makedirs(f"{pasta}/voz", exist_ok=True); shutil.copy(mp3, f"{pasta}/voz/voz.mp3")
run = lambda c: subprocess.run(c, shell=True, check=True, capture_output=True, text=True)
END = float(run(f"ffprobe -v error -show_entries format=duration -of csv=p=0 {pasta}/voz/voz.mp3").stdout)
sil = re.findall(r"silence_(start|end): ([0-9.]+)", run(f"ffmpeg -i {pasta}/voz/voz.mp3 -af silencedetect=noise=-35dB:d=0.25 -f null - 2>&1 || true").stdout + "")
if not sil: sil = re.findall(r"silence_(start|end): ([0-9.]+)", subprocess.run(f"ffmpeg -i {pasta}/voz/voz.mp3 -af silencedetect=noise=-35dB:d=0.25 -f null -", shell=True, capture_output=True, text=True).stderr)
S = []; a = None
for k, v in sil:
    if k == "start": a = float(v)
    elif a is not None: S.append((a, float(v))); a = None
t0 = S[0][1] if S and S[0][0] < .05 else 0.0
S = [s for s in S if s[0] > .05 and s[1] < END - .05]
par = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
syl = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
fr, pb = [], set()  # frases e índices de fronteira de parágrafo
for i, p in enumerate(par):
    for f in [x for x in re.split(r"(?<=[.,:;?!…])\s+", p) if x.strip()]: fr.append(syl(f))
    pb.add(len(fr))  # fronteira depois da última frase do parágrafo
pb.discard(len(fr))
NB = len(fr); fala = END - t0 - sum(b - a for a, b in S); R = sum(fr) / fala
cum = [0]
for x in fr: cum.append(cum[-1] + x)
def custo(j1, j2, dur):  # frases j1..j2-1 faladas em dur segundos
    if any(j1 < b < j2 for b in pb): return 1e9
    e = (cum[j2] - cum[j1]) / R; return (math.log(max(dur, .05) / e)) ** 2 * (1 + .02 * (j2 - j1))
M = len(S); INF = 1e18
best = {(-1, 0): (0.0, None)}  # estado: (última pausa usada, fronteira) -> (custo, anterior)
ordem = [(-1, 0)]
for i in range(M):
    for (pi, pj) in list(best.keys()):
        if pi >= i: continue
        c0, _ = best[(pi, pj)]; tini = t0 if pi < 0 else S[pi][1]
        pul = sum(min(2.0, (S[q][1] - S[q][0]) * 4) for q in range(pi + 1, i))
        for j in range(pj + 1, NB):
            c = c0 + pul + custo(pj, j, S[i][0] - tini)
            if c < best.get((i, j), (INF,))[0]: best[(i, j)] = (c, (pi, pj))
fim = None; fc = INF
for (i, j), (c, _) in best.items():
    tini = t0 if i < 0 else S[i][1]; pul = sum(min(2.0, (S[q][1] - S[q][0]) * 4) for q in range(i + 1, M))
    cc = c + pul + custo(j, NB, END - tini)
    if cc < fc: fc, fim = cc, (i, j)
mapa = {}; st = fim
while st and st[0] >= 0: mapa[st[1]] = st[0]; st = best[st][1]
faltam = [b for b in sorted(pb) if b not in mapa]
cortes = [list(S[mapa[b]]) for b in sorted(pb) if b in mapa]
print("parágrafos", len(par), "cortes", len(cortes), "faltando", faltam, "custo", round(fc, 2))
ini = t0
for k, p in enumerate(par):
    e = cortes[k][0] if k < len(cortes) else END; print(f"{k:2d} {ini:6.2f}-{e:6.2f} ({e-ini:4.1f}s) {p[:60]}"); ini = cortes[k][1] if k < len(cortes) else END
if "--usar-cortes" in sys.argv: cortes = json.load(open(f"{pasta}/voz/cortes.json")); faltam = []; print("usando cortes.json", cortes)
else: json.dump(cortes, open(f"{pasta}/voz/cortes.json", "w"))
if faltam or so: sys.exit(0 if so else 1)
# respiros e durações
run(f"ffmpeg -loglevel error -y -i {pasta}/voz/voz.mp3 -ac 2 -ar 44100 {pasta}/voz/v44.wav")
sr, x = wavfile.read(f"{pasta}/voz/v44.wav"); PA = .9; mids = [(a + b) / 2 for a, b in cortes]; E2 = len(x) / sr
partes, prev = [], 0
for m in mids: partes += [x[int(prev * sr):int(m * sr)], np.zeros((int(PA * sr), 2), x.dtype)]; prev = m
partes.append(x[int(prev * sr):]); wavfile.write(f"{pasta}/voz/voz_pausas.wav", sr, np.concatenate(partes))
b = [0] + mids + [E2]; d = [round(b[i + 1] - b[i] + (PA / 2 if i > 0 else 0) + (PA / 2 if i < len(b) - 2 else 2.2), 3) for i in range(len(b) - 1)]
json.dump(d, open(f"{pasta}/voz/durs.json", "w"))
chk = subprocess.run(f"python3 {os.path.dirname(os.path.abspath(__file__))}/verificar_legenda.py {pasta} {pasta}/voz/durs.json", shell=True, capture_output=True, text=True).stdout.strip(); print(chk)
if not chk.startswith("OK"): sys.exit(2)
cwd = os.getcwd(); os.chdir(pasta)
run("python3 gravar.py imagem_voz.mp4 voz/durs.json"); run(f"python3 audio.py eventos.json $(cat duracao.txt) trilha_voz.wav")
run('ffmpeg -loglevel error -y -i imagem_voz.mp4 -i voz/voz_pausas.wav -i trilha_voz.wav -filter_complex "[1:a]aresample=44100,apad[v];[2:a][v]amix=inputs=2:duration=first:normalize=0[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -movflags +faststart tmp_final.mp4')
os.replace("tmp_final.mp4", saida); os.chdir(cwd); print("FEITO", os.path.join(pasta, saida))
