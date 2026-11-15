"""Folha de conferência: um quadro em 75% de cada cena do vídeo final. uso: python3 qc_folha.py <pasta> <video.mp4>"""
import sys, json, subprocess, os
from PIL import Image
pasta, v = sys.argv[1:3]; d = json.load(open(f"{pasta}/voz/durs.json")); ini = [0]
for x in d: ini.append(ini[-1] + x)
ts = [ini[i] + d[i] * .75 for i in range(len(d))]; ims = []
for i, t in enumerate(ts):
    f = f"/tmp/qc_{i}.jpg"; subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(t), "-i", f"{pasta}/{v}", "-frames:v", "1", "-vf", "scale=480:-1", f]); ims.append(Image.open(f))
c = Image.new("RGB", (1440, 270 * ((len(ims) + 2) // 3)), "white")
for i, im in enumerate(ims): c.paste(im, ((i % 3) * 480, (i // 3) * 270))
c.save(f"{pasta}/qc.jpg", quality=80); print("ok", [round(t, 1) for t in ts])
