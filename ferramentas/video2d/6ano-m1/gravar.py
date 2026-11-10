import asyncio, base64, subprocess, os, sys, json
from playwright.async_api import async_playwright
FPS=30; saida=sys.argv[1]; durs=sys.argv[2] if len(sys.argv)>2 else None
async def m():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        pg=await b.new_page(viewport={"width":1280,"height":720})
        await pg.goto("file://"+os.path.abspath("video.html")); await pg.wait_for_function("window.pronto===true")
        if durs: await pg.evaluate(f"definirDuracoes({open(durs).read()})")
        T=await pg.evaluate("window.T"); n=int(T*FPS)
        json.dump(await pg.evaluate("listaSfx()"),open("eventos.json","w")); open("duracao.txt","w").write(str(T))
        ff=subprocess.Popen(["ffmpeg","-loglevel","error","-y","-f","image2pipe","-framerate",str(FPS),"-c:v","mjpeg","-i","-","-c:v","libx264","-crf","18","-preset","veryfast","-pix_fmt","yuv420p","tmp_video.mp4"],stdin=subprocess.PIPE)
        for i in range(n):
            d=await pg.evaluate(f"(render({i/FPS}), document.getElementById('c').toDataURL('image/jpeg',.92))")
            ff.stdin.write(base64.b64decode(d.split(",")[1]))
        ff.stdin.close(); rc=ff.wait(); await b.close()
        if rc==0: os.replace("tmp_video.mp4",saida)
        print("rc",rc,"frames",n,"T",round(T,1))
asyncio.run(m())
