"""Música de fundo e efeitos sonoros sintetizados (sem arquivos de terceiros).
uso: python3 audio.py eventos.json duracao saida.wav"""
import json, sys, numpy as np
from scipy.signal import butter, lfilter
from scipy.io import wavfile
SR = 44100
rng = np.random.default_rng(7)
def tt(d): return np.arange(int(SR * d)) / SR
def env(n, a=.01, r=.2):
    e = np.ones(n); na, nr = int(SR * a), int(SR * r)
    if na: e[:na] = np.linspace(0, 1, na)
    if nr: e[-nr:] *= np.linspace(1, 0, nr)
    return e
def lp(x, f): b, a = butter(2, f / (SR / 2)); return lfilter(b, a, x)
def bp(x, f1, f2): b, a = butter(2, [f1 / (SR / 2), f2 / (SR / 2)], "band"); return lfilter(b, a, x)
def nota(m): return 440 * 2 ** ((m - 69) / 12)

# ---------- música: progressão I–vi–IV–V em Dó, calma, 84 bpm ----------
def musica(dur):
    bpm = 84; beat = 60 / bpm; bar = 4 * beat
    acordes = [[60, 64, 67], [57, 60, 64], [53, 57, 60], [55, 59, 62]]
    out = np.zeros(int(SR * (dur + 3)))
    nb = int(dur / bar) + 2
    for b in range(nb):
        ac = acordes[b % 4]; t0 = int(b * bar * SR)
        # pad suave
        t = tt(bar); pad = sum(np.sin(2 * np.pi * nota(m) * t) * .5 + np.sin(2 * np.pi * nota(m) * 2 * t) * .08 for m in ac)
        pad *= env(len(t), .6, .6) * .09
        seg = out[t0:t0 + len(t)]; seg += pad[:len(seg)]
        # baixo
        tb = tt(beat * 2)
        for k in range(2):
            x = np.sin(2 * np.pi * nota(ac[0] - 12) * tb) * np.exp(-tb * 2.2) * .22
            s0 = t0 + int(k * 2 * beat * SR); sg = out[s0:s0 + len(x)]; sg += x[:len(sg)]
        # arpejo de “marimba”
        ta = tt(beat * .9)
        for k in range(8):
            m = (ac + [ac[0] + 12])[[0, 1, 2, 3, 2, 1, 2, 3][k]] + 12
            x = (np.sin(2 * np.pi * nota(m) * ta) + .3 * np.sin(2 * np.pi * nota(m) * 4 * ta)) * np.exp(-ta * 9) * .10
            s0 = t0 + int(k * beat / 2 * SR); sg = out[s0:s0 + len(x)]; sg += x[:len(sg)]
    out = lp(out, 5000)[:int(SR * dur)]
    out *= env(len(out), 1.5, 3)
    return out / (np.abs(out).max() + 1e-9)

# ---------- efeitos ----------
def ruido(d): return rng.standard_normal(int(SR * d))
def fx(tipo):
    if tipo in ("whoosh", "voa", "desce"):
        d = {"whoosh": .55, "voa": .32, "desce": .7}[tipo]; n = ruido(d); t = tt(d)
        f = np.linspace(400, 2600, len(t)) if tipo != "desce" else np.linspace(2600, 300, len(t))
        y = np.zeros_like(n); cut = 3
        for i in range(0, len(n), 512):  # filtro que varre a frequência
            y[i:i + 512] = bp(n[max(0, i - 2048):i + 512], max(100, f[i] * .6), min(18000, f[i] * 1.6))[-len(n[i:i + 512]):]
        return y * np.sin(np.pi * t / d) ** 2 * (.5 if tipo != "voa" else .35)
    if tipo == "pop":
        t = tt(.09); f = np.linspace(500, 1300, len(t)); return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 40) * .5
    if tipo in ("click", "toque"):
        n = ruido(.03); return bp(n, 1500, 6000) * np.exp(-tt(.03) * 180) * (.7 if tipo == "click" else .5)
    if tipo == "tec":
        out = np.zeros(int(SR * .45))
        for k in range(5):
            c = bp(ruido(.025), 2000, 7000) * np.exp(-tt(.025) * 200) * .35; s = int(k * .085 * SR); out[s:s + len(c)] += c
        return out
    if tipo == "ding":
        t = tt(1.0); return (np.sin(2 * np.pi * 1318 * t) + .5 * np.sin(2 * np.pi * 1976 * t)) * np.exp(-t * 4) * .32
    if tipo == "sino":
        t = tt(1.3); trem = .6 + .4 * np.sign(np.sin(2 * np.pi * 18 * t)); return (np.sin(2 * np.pi * 1760 * t) + .4 * np.sin(2 * np.pi * 2640 * t)) * trem * env(len(t), .01, .4) * .2
    if tipo == "sumiu":
        t = tt(.6); f = np.linspace(620, 180, len(t)); return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .01, .25) * .3
    if tipo == "desliga":
        t = tt(.7); f = np.linspace(500, 60, len(t)); return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .01, .3) * .3
    if tipo == "zum":
        t = tt(.9); return (np.sin(2 * np.pi * 110 * t) + .3 * np.sin(2 * np.pi * 220 * t)) * np.sin(np.pi * t / .9) * .25
    if tipo == "som":
        t = tt(.6); return sum(np.sin(2 * np.pi * nota(m) * t) for m in (72, 76, 79)) * np.exp(-t * 5) * .15
    if tipo == "impressora":
        t = tt(.9); return bp(ruido(.9), 300, 1500) * (.5 + .5 * np.sign(np.sin(2 * np.pi * 14 * t))) * env(len(t), .05, .2) * .25
    if tipo == "alerta":
        t = tt(.22); b = np.sin(2 * np.pi * 880 * t) * env(len(t), .005, .05) * .25; return np.concatenate([b, np.zeros(int(SR * .08)), b * .9])
    if tipo == "foto":
        c = bp(ruido(.04), 1000, 8000) * np.exp(-tt(.04) * 120) * .6; return np.concatenate([c, np.zeros(int(SR * .07)), c * .8])
    if tipo == "festa":
        out = np.zeros(int(SR * 1.2))
        for k, m in enumerate((72, 76, 79, 84)):
            t = tt(.5); x = np.sin(2 * np.pi * nota(m) * t) * np.exp(-t * 6) * .22; s = int(k * .09 * SR); out[s:s + len(x)] += x
        return out
    return np.zeros(10)

if __name__ == "__main__":
    ev = json.load(open(sys.argv[1])); dur = float(sys.argv[2])
    mus = musica(dur) * 10 ** (-24 / 20)          # música baixinha
    efe = np.zeros(int(SR * (dur + 2)))
    for t0, tipo in ev:
        x = fx(tipo) * 10 ** (-9 / 20); s = int(t0 * SR); efe[s:s + len(x)] += x[:len(efe) - s]
    mix = mus + efe[:len(mus)]
    mix = np.clip(mix, -1, 1)
    wavfile.write(sys.argv[3], SR, (np.stack([mix, mix], 1) * 32767).astype(np.int16))
    print("ok", round(len(mix) / SR, 1), "s", len(ev), "efeitos")
