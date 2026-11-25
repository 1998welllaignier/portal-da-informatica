"""Remonta o video.html de uma pasta a partir do cenas.js, mantendo o título e o selo que já estavam (ou os do git).
uso: python3 reconstruir.py <pasta> [<pasta>...]"""
import re, subprocess, sys
for pasta in sys.argv[1:]:
    try: h = subprocess.run(["git", "show", f"HEAD:ferramentas/video2d/{pasta}/video.html"], capture_output=True, text=True, check=True).stdout
    except Exception: h = open(f"{pasta}/video.html", encoding="utf-8").read()
    tit = re.search(r"<title>(.*?)</title>", h).group(1); selo = re.search(r'SELO_SERIE = "([^"]*)"', h).group(1)
    subprocess.run([sys.executable, "novo_video.py", pasta, tit, selo], check=True, capture_output=True)
    print("ok", pasta, "|", tit, "|", selo)
