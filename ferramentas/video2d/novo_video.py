"""Monta a pasta de um vídeo novo a partir do motor v4 (25/11/2026).
uso: python3 novo_video.py <pasta> "<título da aba>" "<selo: série · bimestre ano>"
A pasta precisa ter cenas.js (constantes F0.. e const CENAS = [...];). Gera video.html e copia gravar.py/audio.py.
Também gera falas.txt (a partir de F0.. em ordem) se ainda não existir."""
import sys, re, shutil, os
pasta, titulo, selo = sys.argv[1:4]
base = open("modelo-v4.html", encoding="utf-8").read().split("\n")  # modelo fixo (antes era o vídeo do 6º M3, que foi refeito)
head = "\n".join(base[:191]); tail = "\n".join(base[260:])
head = re.sub(r"<title>.*?</title>", f"<title>{titulo}</title>", head, 1)
head = re.sub(r'window\.SELO_SERIE = "[^"]*"', f'window.SELO_SERIE = "{selo}"', head, 1)
cenas = open(f"{pasta}/cenas.js", encoding="utf-8").read()
open(f"{pasta}/video.html", "w", encoding="utf-8").write(head + "\n" + cenas + "\n" + tail)
for f in ["gravar.py", "audio.py"]: shutil.copy(f"modelo-v4-{f}", f"{pasta}/{f}")
if not os.path.exists(f"{pasta}/falas.txt"):
    fs = re.findall(r'\bF(\d+) = "((?:[^"\\]|\\.)*)"', cenas)
    open(f"{pasta}/falas.txt", "w", encoding="utf-8").write("\n\n".join(t for _, t in sorted(fs, key=lambda x: int(x[0]))) + "\n")
print("ok", pasta)
