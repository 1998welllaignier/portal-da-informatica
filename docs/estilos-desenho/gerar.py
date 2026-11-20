"""Folha com 10 estilos de desenho do mesmo assunto (computador na mesa), para o professor escolher o padrão."""
W, H = 480, 300

# geometria comum: (tipo, x, y, w, h, rx, cor)
CORES = dict(parede="#dbeafe", chao="#bfdbfe", mesa="#c2410c", mesa2="#9a3412", monitor="#1e293b", tela="#38bdf8",
             pasta="#facc15", gab="#475569", led="#22c55e", tecla="#e2e8f0", teclado="#334155", mouse="#64748b", plant="#16a34a", vaso="#f97316")
PARTES = [
    ("rect", 0, 0, 480, 300, 0, "parede"),
    ("rect", 0, 236, 480, 64, 0, "chao"),
    ("rect", 30, 214, 420, 16, 4, "mesa"), ("rect", 50, 230, 14, 60, 2, "mesa2"), ("rect", 416, 230, 14, 60, 2, "mesa2"),
    ("rect", 96, 62, 200, 132, 12, "monitor"), ("rect", 108, 74, 176, 104, 5, "tela"),
    ("rect", 146, 108, 52, 38, 4, "pasta"), ("rect", 146, 100, 24, 12, 3, "pasta"),
    ("rect", 212, 112, 50, 6, 3, "tecla"), ("rect", 212, 126, 38, 6, 3, "tecla"),
    ("rect", 187, 194, 18, 14, 0, "teclado"), ("rect", 156, 205, 80, 9, 4, "teclado"),
    ("rect", 320, 90, 64, 124, 9, "gab"), ("circle", 352, 112, 7, 0, 0, "led"), ("rect", 334, 132, 36, 5, 2, "tecla"), ("rect", 334, 142, 36, 5, 2, "tecla"),
    ("rect", 110, 200, 0, 0, 0, "teclado"),
    ("rect", 252, 200, 0, 0, 0, "teclado"),
    ("rect", 396, 160, 34, 54, 6, "vaso"), ("circle", 413, 146, 22, 0, 0, "plant"),
]
TECLADO = ("rect", 120, 196, 0, 0, 0, "teclado")
EXTRAS = [("rect", 248, 198, 120, 18, 5, "teclado"), ("rect", 382, 202, 20, 13, 7, "mouse")]


def parte_svg(p, fill=True, stroke=None, sw=0, cores=CORES, extra=""):
    t, x, y, w, h, rx, c = p
    if t == "rect" and (w == 0 or h == 0):
        return ""
    f = cores.get(c, c) if fill else "none"
    st = f' stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"' if stroke else ""
    if t == "circle":
        return f'<circle cx="{x}" cy="{y}" r="{w}" fill="{f}"{st}{extra}/>'
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{f}"{st}{extra}/>'


def cena(fill=True, stroke=None, sw=0, cores=CORES, sem_fundo=False, extra=""):
    ps = [p for p in PARTES if not (sem_fundo and p[6] in ("parede", "chao"))] + EXTRAS
    return "".join(parte_svg(p, fill, stroke, sw, cores, extra) for p in ps)


def pergunta(cor_bg="#fff", cor_txt="#1e3a8a", borda="#1e3a8a", fonte="Arial"):
    return (f'<rect x="282" y="18" width="190" height="50" rx="14" fill="{cor_bg}" stroke="{borda}" stroke-width="3"/>'
            f'<path d="M330 66 L322 84 L346 66" fill="{cor_bg}" stroke="{borda}" stroke-width="3" stroke-linejoin="round"/>'
            f'<text x="377" y="50" text-anchor="middle" font-family="{fonte}" font-size="19" font-weight="800" fill="{cor_txt}">Onde fica a pasta?</text>')


E = []

# 1 Flat colorido
E.append((1, "Flat colorido", "Formas simples e cores vivas, sem contorno. Limpo, moderno, carrega rápido.",
          cena() + pergunta()))

# 2 Linha clara (contorno preto + cores chapadas)
E.append((2, "Linha clara (contorno preto)", "Contorno preto grosso e cores chapadas, como nos quadrinhos. Ótimo contraste.",
          cena(stroke="#111", sw=4) + pergunta(borda="#111", cor_txt="#111")))

# 3 Adesivo (borda branca + sombra)
fsh = '<filter id="sh3"><feDropShadow dx="3" dy="5" stdDeviation="2" flood-opacity=".35"/></filter>'
E.append((3, "Adesivo (sticker)", "Cada objeto com borda branca e sombrinha, como figurinha colada. Bem lúdico.",
          f'<defs>{fsh}</defs><rect width="480" height="300" fill="#fde68a"/>' + '<g filter="url(#sh3)">'
          + cena(stroke="#fff", sw=6, sem_fundo=True) + '</g>' + pergunta()))

# 4 Lousa / giz
fz = '<filter id="giz"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="3"/></filter>'
giz = {k: "none" for k in CORES}
E.append((4, "Lousa com giz", "Fundo de quadro verde e traço de giz branco e colorido. Parece aula no quadro.",
          f'<defs>{fz}</defs><rect width="480" height="300" fill="#1f4d3a"/><rect x="6" y="6" width="468" height="288" rx="6" fill="none" stroke="#8b5a2b" stroke-width="10"/>'
          '<g filter="url(#giz)">' + cena(fill=False, stroke="#f8fafc", sw=3, sem_fundo=True)
          + '<rect x="146" y="108" width="52" height="38" rx="4" fill="none" stroke="#fde047" stroke-width="4"/>'
          + '<circle cx="352" cy="112" r="7" fill="none" stroke="#86efac" stroke-width="3"/>'
          + '<text x="382" y="52" text-anchor="middle" font-family="Comic Sans MS, cursive" font-size="21" fill="#fef9c3">Onde fica a pasta?</text></g>'))

# 5 Caderno / rabisco a lápis
fr = '<filter id="lap"><feTurbulence type="turbulence" baseFrequency=".05" numOctaves="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="4"/></filter>'
linhas = "".join(f'<line x1="0" y1="{y}" x2="480" y2="{y}" stroke="#bfdbfe" stroke-width="1.5"/>' for y in range(30, 300, 24))
leves = {k: v + "88" for k, v in CORES.items()}
E.append((5, "Caderno rabiscado", "Folha pautada, traço de lápis tremidinho e pintura de lápis de cor. Parece feito à mão.",
          f'<defs>{fr}</defs><rect width="480" height="300" fill="#fffef5"/>{linhas}<line x1="40" y1="0" x2="40" y2="300" stroke="#fca5a5" stroke-width="2"/>'
          '<g filter="url(#lap)">' + cena(cores=leves, stroke="#334155", sw=2.2, sem_fundo=True) + '</g>'
          '<text x="382" y="50" text-anchor="middle" font-family="Comic Sans MS, cursive" font-size="20" fill="#1e3a8a">Onde fica a pasta?</text>'))


# 6 Pixel art
def pix():
    s = 10; out = ['<rect width="480" height="300" fill="#dbeafe"/><rect y="240" width="480" height="60" fill="#93c5fd"/>']
    for p in PARTES + EXTRAS:
        t, x, y, w, h, rx, c = p
        if c in ("parede", "chao") or (t == "rect" and (w == 0 or h == 0)):
            continue
        if t == "circle":
            x, y, w, h = x - w, y - w, 2 * w, 2 * w
        x0, y0 = round(x / s) * s, round(y / s) * s
        w0, h0 = max(s, round(w / s) * s), max(s, round(h / s) * s)
        out.append(f'<rect x="{x0}" y="{y0}" width="{w0}" height="{h0}" fill="{CORES[c]}"/>')
    grade = "".join(f'<line x1="{x}" y1="0" x2="{x}" y2="300" stroke="#0001"/>' for x in range(0, 480, 10))
    grade += "".join(f'<line x1="0" y1="{y}" x2="480" y2="{y}" stroke="#0001"/>' for y in range(0, 300, 10))
    out.append(grade)
    out.append('<rect x="280" y="20" width="190" height="40" fill="#fff"/><rect x="280" y="20" width="190" height="40" fill="none" stroke="#1e3a8a" stroke-width="4"/>'
               '<text x="375" y="46" text-anchor="middle" font-family="Courier New, monospace" font-size="16" font-weight="700" fill="#1e3a8a">ONDE FICA A PASTA?</text>')
    return "".join(out)


E.append((6, "Pixel art (videogame)", "Quadradinhos como jogo antigo. Os alunos adoram, mas tem menos detalhe.", pix()))


# 7 Isométrico
def caixa(x, y, w, d, h, c1, c2, c3):
    # canto de baixo na frente em (x, y)
    a = (x, y); b = (x + w * .87, y - w * .5); c_ = (x - d * .87, y - d * .5)
    def pt(p, dz=0): return f"{p[0]},{p[1] - dz}"
    topo = f'{pt(a, h)} {pt(b, h)} {b[0] - d * .87},{b[1] - d * .5 - h} {pt(c_, h)}'
    fr = f'{pt(a)} {pt(b)} {pt(b, h)} {pt(a, h)}'
    lt = f'{pt(a)} {pt(c_)} {pt(c_, h)} {pt(a, h)}'
    return (f'<polygon points="{fr}" fill="{c2}" stroke="#0f172a" stroke-width="1.5"/>'
            f'<polygon points="{lt}" fill="{c3}" stroke="#0f172a" stroke-width="1.5"/>'
            f'<polygon points="{topo}" fill="{c1}" stroke="#0f172a" stroke-width="1.5"/>')


iso = ('<rect width="480" height="300" fill="#e0f2fe"/>'
       + caixa(200, 270, 220, 110, 14, "#fb923c", "#c2410c", "#9a3412")
       + caixa(330, 205, 40, 70, 95, "#94a3b8", "#475569", "#334155")
       + '<polygon points="180,190 300,120 300,40 180,110" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>'
       + '<polygon points="188,182 292,122 292,50 188,110" fill="#38bdf8"/>'
       + '<polygon points="215,150 245,133 245,113 215,130" fill="#facc15"/>'
       + caixa(150, 240, 70, 26, 5, "#e2e8f0", "#334155", "#1e293b")
       + caixa(250, 196, 14, 18, 6, "#cbd5e1", "#64748b", "#475569")
       + '<text x="40" y="44" font-family="Arial" font-size="19" font-weight="800" fill="#1e3a8a">Onde fica a pasta?</text>')
E.append((7, "Isométrico (3D de jogo)", "Objetos em 3D inclinado, como em jogos de construir. Bom para mostrar peças e montagem.", iso))

# 8 Planta técnica (blueprint)
grid = "".join(f'<line x1="{x}" y1="0" x2="{x}" y2="300" stroke="#ffffff22"/>' for x in range(0, 480, 20)) + "".join(
    f'<line x1="0" y1="{y}" x2="480" y2="{y}" stroke="#ffffff22"/>' for y in range(0, 300, 20))
bp = ('<rect width="480" height="300" fill="#1d4ed8"/>' + grid + cena(fill=False, stroke="#e0f2fe", sw=2, sem_fundo=True)
      + '<line x1="96" y1="44" x2="296" y2="44" stroke="#fde047" stroke-width="1.5"/><text x="196" y="38" text-anchor="middle" font-family="Courier New" font-size="13" fill="#fde047">monitor</text>'
      + '<line x1="320" y1="80" x2="384" y2="80" stroke="#fde047" stroke-width="1.5"/><text x="352" y="74" text-anchor="middle" font-family="Courier New" font-size="13" fill="#fde047">gabinete</text>'
      + '<text x="470" y="30" text-anchor="end" font-family="Courier New" font-size="15" font-weight="700" fill="#fff">ONDE FICA A PASTA?</text>')
E.append((8, "Planta técnica (blueprint)", "Fundo azul quadriculado e linhas brancas com medidas, como projeto de engenheiro. Bom para hardware e redes.", bp))

# 9 Recorte de papel
fp = '<filter id="pap"><feDropShadow dx="2" dy="3" stdDeviation="1.5" flood-opacity=".3"/></filter>'
pap = {**CORES, "parede": "#fef3c7", "chao": "#fde68a"}
E.append((9, "Recorte de papel", "Camadas de papel colorido recortado, com sombra entre elas. Aconchegante e caprichado.",
          f'<defs>{fp}</defs><g filter="url(#pap)">' + cena(cores=pap) + '</g>'
          + '<g filter="url(#pap)">' + pergunta(cor_bg="#fff7ed", borda="#fb923c", cor_txt="#9a3412") + '</g>'))

# 10 Monoline (linha única, ícone)
E.append((10, "Linha fina (ícone)", "Traço fino de uma cor só, estilo ícone. Imprime perfeito em preto e branco.",
          '<rect width="480" height="300" fill="#fff"/>' + cena(fill=False, stroke="#1e3a8a", sw=2.5, sem_fundo=True)
          + '<line x1="20" y1="236" x2="460" y2="236" stroke="#1e3a8a" stroke-width="2.5"/>'
          + '<rect x="146" y="108" width="52" height="38" rx="4" fill="#facc1555" stroke="#1e3a8a" stroke-width="2.5"/>'
          + pergunta(borda="#1e3a8a")))

cards = "".join(f'<div class="c"><h2><b>{n}</b>{nome}</h2><svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">{svg}</svg><small>{d}</small></div>'
                for n, nome, d, svg in E)
html = f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>10 estilos de desenho</title><style>
body{{margin:0;padding:24px;background:#eef1f6;font:16px system-ui,Arial,sans-serif;color:#1b1f2a}}h1{{margin:0 0 4px;font-size:26px}}p.s{{margin:0 0 18px;color:#555}}
.g{{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}}.c{{background:#fff;border-radius:14px;padding:12px;box-shadow:0 2px 8px #0001}}
.c h2{{margin:0 0 8px;font-size:18px}}.c h2 b{{display:inline-block;width:30px;height:30px;line-height:30px;text-align:center;border-radius:50%;background:#1e3a8a;color:#fff;margin-right:8px}}
.c small{{display:block;color:#555;margin-top:6px;font-size:13.5px}}svg{{display:block;width:100%;height:auto;border-radius:8px}}</style></head><body>
<h1>🎨 10 estilos de desenho · Prof. Welington Laignier</h1><p class="s">O mesmo assunto (o computador na mesa, com uma pergunta de prova) desenhado de 10 jeitos. Escolha o número do estilo padrão.</p>
<div class="g">{cards}</div></body></html>'''
open(__file__.replace("gerar.py", "estilos.html"), "w").write(html)
print(len(E))
