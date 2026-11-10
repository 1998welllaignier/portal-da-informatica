"""Verifica se a legenda (rodapé) cobre algum texto da cena.
uso: python3 verificar_legenda.py pasta_do_video [durs.json]
Percorre o vídeo a cada 0,1 s, registra todo texto desenhado pela cena (com a posição real na tela)
e compara com o retângulo da legenda naquele instante. Lista os conflitos por cena."""
import asyncio, os, sys, json
from playwright.async_api import async_playwright
JS = r"""
(() => {
  const g = document.getElementById('c').getContext('2d');
  window.__log = []; window.__modo = 'cena'; window.__leg = null;
  const orig = g.fillText.bind(g);
  g.fillText = function (txt, x, y, mw) {
    if (window.__modo === 'cena' && String(txt).trim()) {
      const m = g.getTransform(), fs = parseFloat((g.font.match(/(\d+(\.\d+)?)px/) || [0, 20])[1]);
      const w = g.measureText(txt).width; let x0 = x;
      if (g.textAlign === 'center') x0 = x - w / 2; else if (g.textAlign === 'right' || g.textAlign === 'end') x0 = x - w;
      let yt = y - fs * .78, yb = y + fs * .22; if (g.textBaseline === 'middle') { yt = y - fs * .5; yb = y + fs * .5; } else if (g.textBaseline === 'top') { yt = y; yb = y + fs; }
      const pts = [[x0, yt], [x0 + w, yt], [x0, yb], [x0 + w, yb]].map(([a, b]) => [m.a * a + m.c * b + m.e, m.b * a + m.d * b + m.f]);
      const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
      if (g.globalAlpha > .3) window.__log.push({ txt: String(txt), x1: Math.min(...xs), x2: Math.max(...xs), y1: Math.min(...ys), y2: Math.max(...ys) });
    }
    if (window.__modo === 'leg') window.__legY = Math.min(window.__legY, y - 30);
    return orig(txt, x, y, mw);
  };
  const wrap = (nome, modo) => { const f = window[nome]; window[nome] = function () { const a = window.__modo; window.__modo = modo; try { return f.apply(this, arguments); } finally { window.__modo = a; } }; };
  wrap('selo', 'fixo'); wrap('chip', 'fixo'); wrap('legenda', 'leg');
})();
"""
async def m(pasta, durs):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        await pg.goto("file://" + os.path.abspath(os.path.join(pasta, "video.html"))); await pg.wait_for_function("window.pronto===true")
        if durs: await pg.evaluate(f"definirDuracoes({open(durs).read()})")
        await pg.evaluate(JS)
        T = await pg.evaluate("window.T")
        res = await pg.evaluate("""(T) => { const out = {}; const n = Math.floor(T * 10);
          for (let i = 0; i < n; i++) { const t = i / 10; window.__log = []; window.__legY = 9999; render(t);
            if (window.__legY > 2000) continue; const top = window.__legY;
            const ini = (() => { let k = 0, s = 0; const D = window.CENAS.map((c, j) => 0); return 0; })();
            window.__log.forEach(r => { if (r.y2 > top && r.y1 < 712 && r.x2 > 70 && r.x1 < 1210) { const k = r.txt; (out[k] = out[k] || []).push(t); } }); }
          return out; }""", T)
        await b.close()
        return res
pasta = sys.argv[1]; durs = sys.argv[2] if len(sys.argv) > 2 else None
r = asyncio.run(m(pasta, durs))
if not r: print("OK: a legenda não cobre nenhum texto.")
for k, ts in r.items(): print(f"COBRE: {k!r}  de {ts[0]:.1f}s a {ts[-1]:.1f}s ({len(ts)} amostras)")
