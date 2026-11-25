"""Prévia: tira um quadro do meio de cada cena (sem voz, tempo estimado). uso: python3 prever.py <pasta>"""
import asyncio, os, sys
from playwright.async_api import async_playwright
pasta = sys.argv[1]
async def m():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720}); erros = []
        pg.on("pageerror", lambda e: erros.append(str(e)))
        await pg.goto("file://" + os.path.abspath(f"{pasta}/video.html")); await pg.wait_for_function("window.pronto===true")
        ini = await pg.evaluate("(()=>{const a=[0];DUR.forEach(d=>a.push(a[a.length-1]+d));return a})()")
        for i in range(len(ini) - 1):
            for fr, nome in [(.75, "")]:
                t = ini[i] + (ini[i + 1] - ini[i]) * fr
                await pg.evaluate(f"render({t})"); await pg.screenshot(path=f"/tmp/prev-{os.path.basename(pasta)}-{i:02d}.png")
        print("cenas", len(ini) - 1, "duração", round(ini[-1], 1), "erros", erros); await b.close()
asyncio.run(m())
