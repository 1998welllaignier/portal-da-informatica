"""uso: python3 previa.py <pasta>  → folha com um quadro de cada cena (a 80%) + verificador de legenda, com tempos estimados."""
import asyncio, base64, os, sys, io
from playwright.async_api import async_playwright
from PIL import Image
pasta = sys.argv[1]; frac = float(sys.argv[2]) if len(sys.argv) > 2 else .8
async def m():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"]); pg = await b.new_page(viewport={"width": 1280, "height": 720})
        erros = []; pg.on("pageerror", lambda e: erros.append(str(e)))
        await pg.goto("file://" + os.path.abspath(pasta) + "/video.html"); await pg.wait_for_function("window.pronto===true", timeout=15000)
        ts = await pg.evaluate(f"(()=>{{const o=[];let s=0;for(const c of CENAS){{const d=Math.max(4.2,c.fala.split(/\\s+/).length/2.55+1.3);o.push(s+d*{frac});s+=d;}}return o;}})()")
        ims = []
        for t in ts:
            d = await pg.evaluate(f"(render({t}), document.getElementById('c').toDataURL('image/jpeg',.8))"); ims.append(Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))).resize((640, 360)))
        await b.close()
        if erros: print("ERROS:", erros[:3])
        cols = 3; rows = (len(ims) + cols - 1) // cols; f = Image.new("RGB", (cols * 640, rows * 360), "#888")
        for k, im in enumerate(ims): f.paste(im, ((k % cols) * 640, (k // cols) * 360))
        f.save(f"{pasta}/folha.jpg", quality=80); print("folha", len(ims), "cenas")
asyncio.run(m())
