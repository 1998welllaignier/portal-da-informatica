"""Grava um vídeo v4 (motor do 7º M1 + cenas.js) com as durações reais da voz.
uso (dentro da pasta do vídeo): python3 gravar_v4.py <saida.mp4> <durs.json>
Gera também eventos.json (efeitos sonoros: [tempo, tipo]) e duracao.txt, usados por audio.py."""
import asyncio, base64, subprocess, os, sys, json
from playwright.async_api import async_playwright
FPS = 30
saida, durs = sys.argv[1], sys.argv[2]
async def m():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        await pg.goto("file://" + os.path.abspath("video.html")); await pg.wait_for_function("window.pronto===true")
        await pg.evaluate(f"definirDuracoes({open(durs).read()})")
        T = await pg.evaluate("window.T"); n = int(T * FPS)
        json.dump(await pg.evaluate("listaSfx()"), open("eventos.json", "w")); open("duracao.txt", "w").write(str(round(T, 3)))
        ff = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-crf", "18", "-preset", "veryfast", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "tmp_grav.mp4"], stdin=subprocess.PIPE)
        for i in range(n):
            d = await pg.evaluate(f"(render({i / FPS}), document.getElementById('c').toDataURL('image/jpeg',.92))")
            ff.stdin.write(base64.b64decode(d.split(",")[1]))
        ff.stdin.close(); rc = ff.wait(); await b.close()
        if rc == 0: os.replace("tmp_grav.mp4", saida)
        print("rc", rc, "frames", n); sys.exit(rc)
asyncio.run(m())
