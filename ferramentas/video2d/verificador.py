"""VERIFICADOR DO PADRÃO DOS VÍDEOS (25/11/2026).
Confere, de forma automática, as regras combinadas com o professor (docs/PADRAO-VIDEOS-2D.md e a lista de conferência):
  VISUAL (quadro a quadro, desenhando o vídeo de verdade e "espionando" cada texto e cada fundo pintado no canvas):
   - a legenda do rodapé nunca cobre texto da cena;
   - nenhum texto fica maior que o fundo/barra/contorno atrás dele (o "fundo menor que a frase");
   - nenhum texto cortado na borda da tela; nenhum texto em cima de outro; nada cobre o selo do professor;
   - cada cena tem movimento (os quadros mudam ao longo da cena).
  CENAS E ROTEIRO (lendo o cenas.js):
   - abertura "de Oscar" (abertura() + mini cena própria) e nome do professor; cartão final;
   - câmera que se mexe, personagens, palavra-conceito amarela, etiqueta/seta, balão, efeitos sonoros;
   - "Onde eu uso isso?" em cena própria; "Missão cumprida" (missões normais);
   - ortografia de todas as falas e legendas (dicionário pt-BR do LibreOffice);
   - número por extenso na fala sem legenda com algarismos;
   - conteúdo: as palavras-chave do resumo da missão na apostila aparecem nas falas.
uso: python3 verificador.py <pasta> [<pasta> ...]   (ou "todos" para todas as pastas 2027-*)
Sai com código 1 se houver ERRO. Avisos não reprovam, mas aparecem no relatório."""
import asyncio, json, os, re, subprocess, sys, glob
from playwright.async_api import async_playwright

AQUI = os.path.dirname(os.path.abspath(__file__)); RAIZ = os.path.dirname(os.path.dirname(AQUI))
W, H = 1280, 720
GANCHO = r"""
(() => {
  const P = CanvasRenderingContext2D.prototype; window.__ops = []; window.__tag = [];
  let pts = [];
  const tp = (c, x, y) => { const m = c.getTransform(); return [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f]; };
  const add = (c, x, y) => pts.push(tp(c, x, y));
  const bb = ps => { if (!ps.length) return null; let a = 1e9, b = 1e9, cc = -1e9, d = -1e9; ps.forEach(([x, y]) => { a = Math.min(a, x); b = Math.min(b, y); cc = Math.max(cc, x); d = Math.max(d, y); }); return [a, b, cc, d]; };
  const tag = () => window.__tag.length ? window.__tag[window.__tag.length - 1] : "cena";
  const o = {};
  ["beginPath", "moveTo", "lineTo", "arcTo", "quadraticCurveTo", "bezierCurveTo", "rect", "arc", "ellipse", "fill", "fillRect", "fillText"].forEach(k => o[k] = P[k]);
  P.beginPath = function () { pts = []; return o.beginPath.apply(this, arguments); };
  P.moveTo = function (x, y) { add(this, x, y); return o.moveTo.apply(this, arguments); };
  P.lineTo = function (x, y) { add(this, x, y); return o.lineTo.apply(this, arguments); };
  P.arcTo = function (a, b, c2, d) { add(this, a, b); add(this, c2, d); return o.arcTo.apply(this, arguments); };
  P.quadraticCurveTo = function (a, b, c2, d) { add(this, c2, d); return o.quadraticCurveTo.apply(this, arguments); };
  P.bezierCurveTo = function (a, b, c2, d, e, f) { add(this, e, f); return o.bezierCurveTo.apply(this, arguments); };
  P.rect = function (x, y, w, h) { add(this, x, y); add(this, x + w, y + h); add(this, x + w, y); add(this, x, y + h); return o.rect.apply(this, arguments); };
  P.arc = function (x, y, r) { add(this, x - r, y - r); add(this, x + r, y + r); add(this, x + r, y - r); add(this, x - r, y + r); return o.arc.apply(this, arguments); };
  P.ellipse = function (x, y, rx, ry) { add(this, x - rx, y - ry); add(this, x + rx, y + ry); add(this, x + rx, y - ry); add(this, x - rx, y + ry); return o.ellipse.apply(this, arguments); };
  P.fill = function () { const b = bb(pts); if (b && this.canvas.id === "c") window.__ops.push({ k: "s", b, a: this.globalAlpha, t: tag() }); return o.fill.apply(this, arguments); };
  P.fillRect = function (x, y, w, h) { if (this.canvas.id === "c") window.__ops.push({ k: "s", b: bb([tp(this, x, y), tp(this, x + w, y + h), tp(this, x + w, y), tp(this, x, y + h)]), a: this.globalAlpha, t: tag() }); return o.fillRect.apply(this, arguments); };
  P.fillText = function (s, x, y) {
    if (this.canvas.id === "c" && String(s).trim()) {
      const w = this.measureText(s).width, m = /(\d+(?:\.\d+)?)px/.exec(this.font), fs = m ? +m[1] : 16;
      const al = this.textAlign, x0 = al === "center" ? x - w / 2 : (al === "right" || al === "end") ? x - w : x;
      const bl = this.textBaseline, y0 = bl === "middle" ? y - fs * .55 : bl === "top" ? y : y - fs * .78, y1 = bl === "middle" ? y + fs * .5 : bl === "top" ? y + fs * 1.05 : y + fs * .22;
      const tem = /[\p{L}\p{N}]/u.test(s) && !/^[\p{Extended_Pictographic}\s‍️]+$/u.test(s);
      window.__ops.push({ k: "t", s: String(s), b: bb([tp(this, x0, y0), tp(this, x0 + w, y1), tp(this, x0 + w, y0), tp(this, x0, y1)]), a: this.globalAlpha, t: tag(), fs: fs * Math.hypot(this.getTransform().a, this.getTransform().b), letra: tem });
    }
    return o.fillText.apply(this, arguments);
  };
})();
"""
EMBRULHA = r"""
(() => { const emb = (n, t) => { const f = window[n]; if (typeof f !== "function") return; window[n] = function () { window.__tag.push(t); try { return f.apply(this, arguments); } finally { window.__tag.pop(); } }; };
  emb("legenda", "legenda"); emb("selo", "selo"); emb("chip", "chip"); emb("abertura", "abertura");
  ["camera", "palavra", "etiqueta", "seta", "setaCurva", "balao", "cumprida", "fimCartao", "abertura"].forEach(n => { const f = window[n]; if (typeof f === "function") { const f2 = window[n]; window[n] = function () { window.__ch[n] = 1; return f2.apply(this, arguments); }; } });
  ["boneco", "robozinho", "pessoa"].forEach(n => { const f = window[n]; if (typeof f === "function") window[n] = function () { window.__np++; return f.apply(this, arguments); }; });
  const r = window.render; window.render = function (t) { window.__ops = []; window.__tag = []; window.__np = 0; window.__ch = {}; return r(t); }; return true; })()
"""

def inter(a, b): return max(0, min(a[2], b[2]) - max(a[0], b[0])) * max(0, min(a[3], b[3]) - max(a[1], b[1]))
def area(a): return max(0, a[2] - a[0]) * max(0, a[3] - a[1])

def checar_quadro(ops, cena, t):
    """devolve lista de (nivel, msg)"""
    out = []; textos = [(i, o) for i, o in enumerate(ops) if o["k"] == "t"]
    leg = [o["b"] for o in ops if o["k"] == "s" and o["t"] == "legenda"]; legb = leg[0] if leg else None
    selob = [W - 372, 18, W - 20, 78]
    for i, o in textos:
        if o["t"] != "cena" or o["a"] < .35 or not o["letra"]: continue
        b = o["b"]; ar = area(b) or 1; s = o["s"][:40]
        if legb and inter(b, legb) / ar > .12: out.append(("ERRO", f"legenda cobre o texto “{s}”"))
        if inter(b, selob) / ar > .02 and inter(b, selob) > 120: out.append(("ERRO", f"texto “{s}” encostando/embaixo do selo do professor"))
        vis_ = area([max(0, b[0]), max(0, b[1]), min(W, b[2]), min(H, b[3])]) / ar
        if o["a"] > .6 and .35 < vis_ < .97 and o["fs"] >= 18: out.append(("AVISO", f"texto cortado na borda da tela: “{s}”"))
        # fundo (barra/contorno/cartão) atrás do texto: o desenho pintado logo antes, alinhado com ele
        th = b[3] - b[1]; cx, cy = (b[0] + b[2]) / 2, (b[1] + b[3]) / 2
        for j in range(i - 1, max(-1, i - 7), -1):
            p = ops[j]
            if p["k"] == "t" and p["s"] != o["s"]: break  # outro texto no meio: o desenho anterior não é o fundo deste
            if p["k"] != "s" or p["t"] != "cena" or p["a"] < .3: continue
            sb = p["b"]; sh = sb[3] - sb[1]
            if not (sb[0] <= cx <= sb[2] and sb[1] <= cy <= sb[3]): continue
            if area(sb) > .35 * W * H or sh > 3.6 * th or sh < .6 * th: continue
            if (sb[2] - sb[0]) < 1.2 * th: continue  # bolinha/ícone, não é fundo de texto
            sobra = max(sb[0] - b[0], b[2] - sb[2])
            if sobra > 4: out.append(("ERRO", f"texto “{s}” maior que o fundo atrás dele (passa {round(sobra)} px)"))
            break
    vis = [o for _, o in textos if o["t"] == "cena" and o["a"] > .6 and o["letra"]]
    for a_ in range(len(vis)):
        for b_ in range(a_ + 1, len(vis)):
            A, B = vis[a_], vis[b_]
            if A["s"] == B["s"]: continue
            m = min(area(A["b"]), area(B["b"])) or 1
            if inter(A["b"], B["b"]) / m > .3: out.append(("AVISO", f"textos sobrepostos: “{A['s'][:30]}” × “{B['s'][:30]}”"))
    return out

NUMS = r"\b(dois|duas|três|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|quinze|vinte|trinta|quarenta|cinquenta|sessenta|setenta|oitenta|noventa|cem|cento|mil|zero)\b"
NOMES = ["Bia", "Léo", "Ana", "Bit", "Duda", "Caio", "Byte", "robô", "robozinho"]

def dicionario():
    base = os.path.expanduser("~/dic/pt_BR")
    if not os.path.exists(base + ".dic"):
        os.makedirs(os.path.dirname(base), exist_ok=True)
        for e in ["dic", "aff"]: subprocess.run(["curl", "-sfL", "-o", f"{base}.{e}", f"https://raw.githubusercontent.com/LibreOffice/dictionaries/master/pt_BR/pt_BR.{e}"])
    from spylls.hunspell import Dictionary
    return Dictionary.from_files(base)

def apostila(pasta):
    m = re.match(r"2027-(\d)ano-(?:b(\d)-)?m(\d)", os.path.basename(pasta))
    if not m: return None
    serie, bim, mis = m.group(1), m.group(2) or "1", m.group(3)
    arq = f"{RAIZ}/dados/conteudo/informatica-{serie}ano-2027-{bim}bim.js"
    if not os.path.exists(arq): return None
    js = "global.PORTAL={registrarConteudo:(n,d)=>{const m=d.missoes||d.modulos||[];const x=(m.find?m:Object.values(m)).find(o=>o.id==='m%s');console.log(JSON.stringify(x||null))}};require(%s)" % (mis, json.dumps(arq))
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True)
    try: return json.loads(r.stdout.strip().splitlines()[-1])
    except Exception: return None

async def verificar(pg, pasta, dic, extra_ok):
    rel = []; nome = os.path.basename(pasta.rstrip("/"))
    await pg.goto("file://" + os.path.abspath(f"{pasta}/video.html")); await pg.wait_for_function("window.pronto===true")
    await pg.evaluate(EMBRULHA)
    info = await pg.evaluate("""(()=>{const a=[0];DUR.forEach(d=>a.push(a[a.length-1]+d));return {ini:a, cenas:CENAS.map(c=>({chip:c.chip||'', fala:c.fala||'', leg:c.legenda||'', sfx:(c.sfx||[]).length, src:c.draw.toString()}))}})()""")
    ini, cenas = info["ini"], info["cenas"]; n = len(cenas); extra = "extra" in nome
    # ---------- cenas e roteiro ----------
    c0 = cenas[0]["src"]
    meio = cenas[1:-1]
    def frac(rx): return sum(1 for c in meio if re.search(rx, c["src"])) / max(1, len(meio))
    if not any(re.search(r"onde eu uso", c["fala"], re.I) for c in cenas): rel.append(("ERRO", "falta a cena “Onde eu uso isso?”"))
    else:
        for c in cenas:
            if re.search(r"onde eu uso", c["fala"], re.I) and not re.match(r"\s*onde eu uso", c["fala"], re.I): rel.append(("ERRO", "“Onde eu uso isso?” não começa cena própria (falta a pausa de troca de assunto)"))
    sem_sfx = [i + 1 for i, c in enumerate(cenas) if c["sfx"] == 0]
    if sem_sfx: rel.append(("AVISO", f"cenas sem efeito sonoro: {sem_sfx}"))
    for i, c in enumerate(cenas):
        if re.search(NUMS, c["fala"], re.I) and not c["leg"] and 0 < i < n - 1:
            rel.append(("AVISO", f"cena {i+1}: número por extenso na fala sem legenda com algarismos"))
    palavras = len(" ".join(c["fala"] for c in cenas).split())
    if palavras < (550 if extra else 150): rel.append(("ERRO", f"roteiro curto demais ({palavras} palavras): conteúdo raso"))
    # ortografia
    ruins = set()
    for c in cenas:
        for w in re.findall(r"[A-Za-zÀ-ÿ]+(?:-[A-Za-zÀ-ÿ]+)*", c["fala"] + " " + c["leg"]):
            for p in w.split("-"):
                if len(p) > 2 and not dic.lookup(p) and not dic.lookup(p.lower()) and p.lower() not in extra_ok: ruins.add(p)
    if ruins: rel.append(("AVISO", "ortografia — conferir: " + ", ".join(sorted(ruins))))
    # conteúdo da apostila
    ap = apostila(pasta)
    if ap and ap.get("resumo"):
        txt = " ".join(c["fala"] + " " + c["leg"] for c in cenas).lower()   # a legenda mostra a forma escrita (ex.: fala "Control mais S", legenda "Ctrl + S")
        chaves = ap["resumo"].get("chaves", [])
        falta = [k for k in chaves if not all(p in txt for p in re.findall(r"\w+", k.lower()) if len(p) > 3)]
        if chaves and len(falta) / len(chaves) > .4: rel.append(("ERRO", f"conteúdo incompleto: faltam conceitos da apostila: {', '.join(falta)}"))
        elif falta: rel.append(("AVISO", f"conceitos da apostila não citados: {', '.join(falta)}"))
    # 🎮 vinheta de entrada (10 s): a ferramenta existe e o título da aba tem "Missão N" e um título para ela digitar
    if not os.path.exists(f"{AQUI}/vinheta/gerar_vinheta.py"): rel.append(("ERRO", "ferramenta da vinheta de entrada não encontrada"))
    tit_ = await pg.title()
    if not re.search(r"Missão \d", tit_) or len([x for x in tit_.split("·") if x.strip()]) < 2: rel.append(("ERRO", f"título da aba sem “Missão N · título” (a vinheta precisa dele): “{tit_}”"))
    # ---------- visual, quadro a quadro ----------
    vistos = set(); parado = []; borda = {}; com_pers = set(); usa = {}
    for i in range(n):
        d = ini[i + 1] - ini[i]; quadros = []
        for f in [.12, .3, .5, .7, .88, .97]:
            t = ini[i] + d * f
            ops, npers, ch = await pg.evaluate(f"(()=>{{render({t});return [window.__ops, window.__np, window.__ch]}})()")
            if npers: com_pers.add(i)
            for k_ in ch: usa.setdefault(k_, set()).add(i)
            if i == 0 and f == .7 and sum(1 for o in ops if o["t"] == "cena") < 25: rel.append(("ERRO", "abertura sem mini cena própria (só o título)"))
            for nv, msg in checar_quadro(ops, i, t):
                k = (i, msg)
                if msg.startswith("texto cortado na borda"): borda.setdefault(i, set()).add(msg.split(": ", 1)[1]); continue
                if k not in vistos: vistos.add(k); rel.append((nv, f"cena {i+1} ({cenas[i]['chip'] or '—'}): {msg}"))
            if f in (.3, .7): quadros.append(await pg.screenshot(type="jpeg", quality=40))
        if quadros[0] == quadros[1] and 0 < i < n - 1: parado.append(i + 1)
    if parado: rel.append(("ERRO", f"cenas sem movimento nenhum: {parado}"))
    meio_ = max(1, n - 2); fr = lambda k: len([i for i in usa.get(k, set()) if 0 < i < n - 1]) / meio_
    if 0 not in usa.get("abertura", set()): rel.append(("ERRO", "cena 1: sem abertura()"))
    if n - 1 not in usa.get("fimCartao", set()): rel.append(("ERRO", "última cena sem cartão final do professor"))
    if fr("camera") < .4: rel.append(("ERRO", f"câmera parada: só {round(fr('camera')*100)}% das cenas movem a câmera (mínimo 40%)"))
    if fr("palavra") < .25: rel.append(("ERRO", f"poucas palavras-conceito amarelas: {round(fr('palavra')*100)}% das cenas (mínimo 25%)"))
    if (len(usa.get("etiqueta", set()) | usa.get("seta", set()) | usa.get("setaCurva", set()))) / meio_ < .15: rel.append(("AVISO", "poucas etiquetas/setas apontando"))
    if not usa.get("balao"): rel.append(("AVISO", "nenhum balão de fala"))
    if not extra and not usa.get("cumprida"): rel.append(("AVISO", "sem “Missão cumprida”"))
    fp = len([i for i in com_pers if 0 < i < n - 1]) / max(1, n - 2)
    if not any(i in com_pers for i in (1, 2, 3)): rel.append(("AVISO", "o começo não apresenta personagem/história (cenas 2 a 4)"))
    if fp < .3: rel.append(("ERRO", f"poucos personagens (bonequinhos/robô) em cena: {round(fp*100)}% das cenas (mínimo 30%)"))
    for i, ts in borda.items(): rel.append(("AVISO", f"cena {i+1}: texto cortado na borda da tela (pode ser o enquadramento da câmera): {', '.join(sorted(ts))[:120]}"))
    return nome, n, round(ini[-1]), rel

async def main(pastas):
    dic = dicionario()
    extra_ok = set(open(f"{AQUI}/verificador-palavras.txt", encoding="utf-8").read().lower().split()) if os.path.exists(f"{AQUI}/verificador-palavras.txt") else set()
    falhou = 0
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": W, "height": H}); await pg.add_init_script(GANCHO)
        for pasta in pastas:
            nome, n, dur, rel = await verificar(pg, pasta, dic, extra_ok)
            e = [r for r in rel if r[0] == "ERRO"]; a = [r for r in rel if r[0] == "AVISO"]
            print(f"\n{'❌ REPROVADO' if e else '✅ APROVADO'}  {nome}  ({n} cenas, ~{dur}s)  erros: {len(e)}  avisos: {len(a)}")
            for nv, msg in e + a: print(f"   {'❌' if nv == 'ERRO' else '⚠️ '} {msg}")
            falhou += bool(e)
        await b.close()
    sys.exit(1 if falhou else 0)

if __name__ == "__main__":
    args = sys.argv[1:]
    if args == ["todos"]: args = sorted(d for d in glob.glob(f"{AQUI}/2027-*") if os.path.exists(f"{d}/video.html"))
    asyncio.run(main(args))
