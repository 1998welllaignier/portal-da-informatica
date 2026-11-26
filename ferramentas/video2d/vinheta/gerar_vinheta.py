"""Gera a vinheta de entrada de uma missão (vídeo + som de videogame) e, se pedido, cola antes de um vídeo pronto.
uso: python3 gerar_vinheta.py "<MISSÃO 6>" "<TÍTULO>" "<8º ANO · 1º BIM.>" saida.mp4 [video_da_missao.mp4 final.mp4]
A vinheta é um pedaço separado colado ANTES do vídeo: a voz, as cenas e a legenda do vídeo não mudam (a sincronia fica intacta)."""
import asyncio, json, os, subprocess, sys, wave, tempfile
import numpy as np
from playwright.async_api import async_playwright
AQUI = os.path.dirname(os.path.abspath(__file__)); FPS = 30; SR = 44100; DUR = float(os.environ.get("VINHETA_MODO", "10"))  # 10 s aprovado pelo professor (25/11/2026); 8 = versão curta
hz = lambda m: 440 * 2 ** ((m - 69) / 12)

def onda(f, d, vol, tipo="square"):
    t = np.arange(int(SR * d)) / SR
    if tipo == "square": s = np.sign(np.sin(2 * np.pi * f * t))
    elif tipo == "triangle": s = 2 / np.pi * np.arcsin(np.sin(2 * np.pi * f * t))
    else: s = np.random.default_rng(1).uniform(-1, 1, len(t))
    env = np.exp(-t / max(.02, d * .5)) * np.minimum(1, t / .004)
    return s * env * vol

def som(titulo_len, saida):
    a = np.zeros(int(SR * (DUR + .2)))
    M10 = DUR == 10
    def add(t0, x, cru=False):
        if M10 and not cru and t0 >= 1.6: t0 += 2   # versão de 10 s: tudo depois da entrada anda 2 s
        i = int(t0 * SR); a[i:i + len(x)] += x[: max(0, len(a) - i)]
    def jingle(t0, notas, vol=.16):
        for m, d in notas:
            if m: add(t0, onda(hz(m), d * .95, vol))
            t0 += d
    # música do jogo (mapa e história), baixinha, com baixo em onda triangular (toca até a tela se desfazer)
    mus = [67, 0, 72, 0, 76, 0, 72, 0, 74, 0, 77, 0, 81, 79, 77, 0, 76, 0, 72, 0, 67, 0, 69, 71, 72, 0, 0, 0, 0, 0, 0, 0]; baixo = [48, 50, 53, 55]
    for i in range(200):
        t0 = i * .13
        fim = DUR - .7
        if t0 > fim: break
        m = mus[i % len(mus)]; vol = .06 * (1 if t0 < fim - .4 else (fim - t0) / .4)
        if m: add(t0, onda(hz(m), .12, vol), True)
        if i % 8 == 0: add(t0, onda(hz(baixo[(i // 8) % 4]), .45, vol * 1.5, "triangle"), True)
    if M10:  # mini fase: passinhos rápidos, 3 pulos e 6 chips
        for k in range(14): add(1.6 + k * .14, onda(hz(40), .025, .045), True)
        for a_ in (.3, .8, 1.3):
            t0 = 1.6 + a_
            for m, d in [[62, .05], [69, .07]]: add(t0, onda(hz(m), d * .95, .16), True); t0 += d
        for k in range(3):
            t0 = 1.6 + .49 + k * .5
            for m, d in [[83, .05], [88, .14]]: add(t0, onda(hz(m), d * .95, .14), True); t0 += d
    for k in range(11): add(.05 + k * .15, onda(hz(40), .03, .05))                    # passinhos do professor
    jingle(1.75, [[62, .05], [69, .07]])                                               # pulo
    jingle(1.97, [[55, .04]], .12)                                                     # cabeçada no bloco
    jingle(2.02, [[83, .05], [88, .14]])                                               # chip!
    for k in range(10): add(2.6 + k * .13, onda(hz(84), .02, .05))                    # letras do balão
    jingle(3.6, [[76, .04], [81, .06]])                                                # aparece a missão
    for k in range(max(1, titulo_len // 2)): add(3.9 + k * 1.1 / max(1, titulo_len // 2), onda(hz(88), .02, .05))
    for k in range(7): add(4.6 + k * .14, onda(hz(47), .025, .05))                     # passinhos do Byte
    jingle(5.7, [[62, .05], [69, .07]]); jingle(5.75, [[67, .06], [71, .06], [74, .06], [79, .14]], .12)  # pulo juntos + comemoração
    jingle(5.9, [[72, .06], [76, .06], [79, .06], [84, .06], [88, .16]])              # START!
    t = np.arange(int(SR * .55)) / SR; f = 900 * np.exp(-t * 3); add(7.3, np.sign(np.sin(2 * np.pi * np.cumsum(f) / SR)) * .05 * (1 - t / .55))  # quadradinhos
    a = a / max(1, np.abs(a).max() / .7)
    with wave.open(saida, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((a * 32767).astype(np.int16).tobytes())

async def quadros(missao, titulo, serie, pasta):
    px = json.load(open(f"{AQUI}/pixel.json"))
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--allow-file-access-from-files"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720}); await pg.goto(f"file://{AQUI}/vinheta.html")
        await pg.evaluate("([px,m,t,s,md]) => window.iniciar(px,m,t,s,md)", [px, missao, titulo, serie, int(DUR)]); await pg.wait_for_timeout(300)
        for i in range(int(DUR * FPS)):
            await pg.evaluate(f"frame({i / FPS})"); await pg.screenshot(path=f"{pasta}/q{i:04d}.png")
        await b.close()

def main():
    missao, titulo, serie, saida = sys.argv[1:5]
    tmp = tempfile.mkdtemp(); asyncio.run(quadros(missao, titulo, serie, tmp)); som(len(titulo), f"{tmp}/som.wav")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-framerate", str(FPS), "-i", f"{tmp}/q%04d.png", "-i", f"{tmp}/som.wav", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18",
                    "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-ar", "44100", "-ac", "2", "-shortest", saida], check=True)
    if len(sys.argv) >= 7:  # colar antes do vídeo pronto (re-encode para juntar com segurança; a sincronia interna do vídeo não muda)
        video, final = sys.argv[5:7]
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", saida, "-i", video, "-filter_complex",
                        "[0:v]fps=30,scale=1280:720,setsar=1[v0];[1:v]fps=30,scale=1280:720,setsar=1[v1];[0:a]aresample=44100,aformat=channel_layouts=stereo[a0];[1:a]aresample=44100,aformat=channel_layouts=stereo[a1];[v0][a0][v1][a1]concat=n=2:v=1:a=1[v][a]",
                        "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", final], check=True)
    print("ok", saida)

if __name__ == "__main__": main()
