import asyncio, os, sys, base64
from playwright.async_api import async_playwright
pasta, durs, *ts = sys.argv[1:]
async def m():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        await pg.goto("file://" + os.path.abspath(os.path.join(pasta, "video.html"))); await pg.wait_for_function("window.pronto===true")
        if durs != "-": await pg.evaluate(f"definirDuracoes({open(durs).read()})")
        for t in ts:
            d = await pg.evaluate(f"(render({t}), document.getElementById('c').toDataURL('image/jpeg',.85))")
            open(os.path.join(pasta, f"q_{t}.jpg"), "wb").write(base64.b64decode(d.split(",")[1]))
        await b.close()
asyncio.run(m())
