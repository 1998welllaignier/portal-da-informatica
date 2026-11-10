import asyncio, base64, subprocess, os, sys
from playwright.async_api import async_playwright
FPS=30
async def m():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        pg=await b.new_page(viewport={"width":1280,"height":720})
        await pg.goto("file://"+os.path.abspath(sys.argv[1] if len(sys.argv)>1 else "modelo-cabo-submarino.html")); await pg.wait_for_function("window.pronto===true")
        T=await pg.evaluate("window.T"); n=int(T*FPS)
        ff=subprocess.Popen(["ffmpeg","-loglevel","error","-y","-f","image2pipe","-framerate",str(FPS),"-c:v","mjpeg","-i","-","-c:v","libx264","-crf","18","-preset","veryfast","-pix_fmt","yuv420p","-movflags","+faststart","tmp_teste.mp4"],stdin=subprocess.PIPE)
        for i in range(n):
            d=await pg.evaluate(f"(render({i/FPS}), document.getElementById('c').toDataURL('image/jpeg',.92))")
            ff.stdin.write(base64.b64decode(d.split(",")[1]))
        ff.stdin.close(); rc=ff.wait(); await b.close()
        if rc==0: os.replace("tmp_teste.mp4",(sys.argv[2] if len(sys.argv)>2 else "video.mp4"))
        print("rc",rc,"frames",n)
asyncio.run(m())
