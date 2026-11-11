"""Gera window.FALA (início de cada palavra, no tempo local da cena) a partir de voz/frases.json e voz/cortes.json
e injeta no video.html. uso: python3 fala_sync.py <pasta> [PA=0.9]"""
import sys, re, json
pasta = sys.argv[1]; PA = float(sys.argv[2]) if len(sys.argv) > 2 else .9
par = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
syl = lambda s: max(1, len(re.findall(r"[aeiouáéíóúâêôãõàü]+", s.lower())))
frs, fp = [], []
for i, p in enumerate(par):
    for f in [x for x in re.split(r"(?<=[.,:;?!…])\s+", p) if x.strip()]: frs.append(f); fp.append(i)
grupos = json.load(open(f"{pasta}/voz/frases.json")); cortes = json.load(open(f"{pasta}/voz/cortes.json")); mids = [(a + b) / 2 for a, b in cortes]
W = [[] for _ in par]
for gr in grupos:
    j1, j2 = gr["j"]; k = gr["par"]; words = " ".join(frs[j1:j2]).split(); sy = [syl(w) for w in words]; tot = sum(sy); iv = gr["iv"]; S = sum(b - a for a, b in iv)
    acc = 0
    for w, s in zip(words, sy):
        alvo = acc / tot * S; t = iv[-1][1]
        for a, b in iv:
            if alvo <= b - a: t = a + alvo; break
            alvo -= b - a
        W[k].append(round(t - (mids[k - 1] - PA / 2 if k > 0 else 0), 3)); acc += s
for k, p in enumerate(par): assert len(W[k]) == len(p.split()), (k, len(W[k]), len(p.split()))
s = open(f"{pasta}/video.html").read(); s = re.sub(r"window\.FALA = .*?;\n", "", s)
s = s.replace("/* ================= tempo das cenas", "window.FALA = " + json.dumps([{"w": w} for w in W]) + ";\n/* ================= tempo das cenas", 1)
open(f"{pasta}/video.html", "w").write(s); print("FALA ok", [w[0] for w in W][:5])
