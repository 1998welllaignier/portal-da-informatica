"""Peças comuns para refazer os desenhos das apostilas de 2026 no padrão colorido de 2027.
Usa a paleta e as peças de ferramentas/ilustracoes_2027/base.py (mesma ideia = mesma cor):
  azul = entrada / ação do usuário · amarelo = processamento / atenção · verde = saída / certo
  roxo = armazenamento / guardar · vermelho = perigo / errado · ciano = rede / internet
Cada script iN.py mantém as mesmas âncoras dos desenhos antigos (ancoras_originais.json),
para cada desenho continuar no mesmo lugar da apostila."""
import os, sys, json
AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(AQUI), "ilustracoes_2027"))
from base import *  # noqa
import base as _b

ORIG = json.load(open(os.path.join(AQUI, "ancoras_originais.json"), encoding="utf-8"))


class Apostila:
    def __init__(self, aid):
        self.aid = aid; self.orig = ORIG[aid]; self.F = [None] * len(self.orig)

    def fig(self, i, rotulo, w, h, corpo, legenda=None, pequena=False, vb=None):
        o = self.orig[i]
        html = figura(w, h, rotulo, corpo, legenda, pequena)
        if vb: html = html.replace(f'viewBox="0 0 {w} {h}"', f'viewBox="{vb}"')
        self.F[i] = {"missao": o["missao"], "pagina": o["pagina"], "ancora": o["ancora"], "rotulo": rotulo, "html": html}

    def gerar(self, icones):
        falta = [i for i, f in enumerate(self.F) if f is None]
        assert not falta, (self.aid, "faltam desenhos", falta)
        raiz = os.path.dirname(os.path.dirname(AQUI))
        # 🎬 cenas de abertura feitas por IA (20/11/2026): entram no topo das missões que ainda vão acontecer em 2026
        try:
            from cenas_2026 import CENAS
            extra = CENAS(self.aid)
        except ImportError:
            extra = []
        dados = {"defs": _b.defs(), "mascote": _b.mascote(), "icones": {k: _b.icone(v) for k, v in icones.items()}, "figuras": extra + self.F}
        js = ("/* Ilustrações coloridas (padrão de 2027) das apostilas de 2026 — gerado por ferramentas/ilustracoes_2026/ (não edite à mão).\n"
              "   Professor Welington Laignier. */\n"
              f"PORTAL.registrarIlustracoes({json.dumps(self.aid)}, {json.dumps(dados, ensure_ascii=False)});\n")
        open(os.path.join(raiz, "dados", "ilustracoes", self.aid + ".js"), "w", encoding="utf-8").write(js)
        return len(self.F)


# ---------------- objetos desenhados (fiéis ao objeto real) ----------------
def monitor(x, y, w=96, h=64, cor="verde", tela=None):
    c = COR[cor]
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="#fff" stroke="{c}" stroke-width="3"/>'
            f'<rect x="{x+7}" y="{y+7}" width="{w-14}" height="{h-14}" rx="3" fill="{tela or COR[cor+"_c"]}"/>'
            f'<path d="M{x+w/2} {y+h} v12 M{x+w/2-20} {y+h+13} h40" stroke="{c}" stroke-width="3.5" stroke-linecap="round"/>')


def teclado(x, y, w=110, h=40, cor="azul"):
    c = COR[cor]; s = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
    n = int((w - 12) // 15)
    for r in range(2):
        for k in range(n):
            s += f'<rect x="{x+7+k*15}" y="{y+6+r*11}" width="11" height="8" rx="2" fill="#fff" stroke="{c}" stroke-width="1.2"/>'
    s += f'<rect x="{x+w*0.25}" y="{y+29}" width="{w*0.5}" height="7" rx="2" fill="#fff" stroke="{c}" stroke-width="1.2"/>'
    return s


def mouse(x, y, cor="azul", esc=1.0):
    c = COR[cor]; s = esc
    return (f'<rect x="{x}" y="{y}" width="{30*s}" height="{44*s}" rx="{15*s}" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<path d="M{x} {y+18*s} h{30*s} M{x+15*s} {y} v{18*s}" stroke="{c}" stroke-width="2"/>'
            f'<rect x="{x+12*s}" y="{y+5*s}" width="{6*s}" height="{9*s}" rx="{3*s}" fill="#fff" stroke="{c}" stroke-width="1.5"/>')


def microfone(x, y, cor="azul"):
    c = COR[cor]
    return (f'<rect x="{x-9}" y="{y}" width="18" height="30" rx="9" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<path d="M{x-16} {y+18} a16 16 0 0 0 32 0 M{x} {y+34} v10 M{x-12} {y+45} h24" fill="none" stroke="{c}" stroke-width="3" stroke-linecap="round"/>')


def chip(x, y, w=64, cor="amarelo", rotulo="CPU"):
    c = COR[cor]; s = ""
    for k in range(4):
        d = 10 + k * (w - 20) / 3
        s += (f'<path d="M{x+d} {y-8} v8 M{x+d} {y+w} v8 M{x-8} {y+d} h8 M{x+w} {y+d} h8" stroke="{c}" stroke-width="2.5" stroke-linecap="round"/>')
    return (s + f'<rect x="{x}" y="{y}" width="{w}" height="{w}" rx="8" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            + t(x + w / 2, y + w / 2 + 5, rotulo, 14, cor, 800, fonte=MONO))


def gabinete(x, y, w=70, h=110, cor="amarelo"):
    c = COR[cor]
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="#fff" stroke="{c}" stroke-width="3"/>'
            f'<path d="M{x+12} {y+18} h{w-24} M{x+12} {y+30} h{w-24}" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
            f'<circle cx="{x+w/2}" cy="{y+h-20}" r="7" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5"/>')


def hd(x, y, w=120, h=44, cor="roxo", rotulo="HD / SSD"):
    c = COR[cor]
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="{x+24}" cy="{y+h/2}" r="12" fill="#fff" stroke="{c}" stroke-width="2.5"/><circle cx="{x+24}" cy="{y+h/2}" r="3" fill="{c}"/>'
            + t(x + w / 2 + 14, y + h / 2 + 5, rotulo, 13, cor, 800))


def caixa_som(x, y, cor="verde"):
    c = COR[cor]
    return (f'<rect x="{x}" y="{y}" width="40" height="62" rx="6" fill="#fff" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="{x+20}" cy="{y+16}" r="6" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2"/>'
            f'<circle cx="{x+20}" cy="{y+40}" r="12" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5"/>')


def impressora(x, y, cor="verde"):
    c = COR[cor]
    return (f'<rect x="{x+14}" y="{y}" width="56" height="18" fill="#fff" stroke="{c}" stroke-width="2.5"/>'
            f'<rect x="{x}" y="{y+16}" width="84" height="34" rx="7" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<rect x="{x+14}" y="{y+40}" width="56" height="26" fill="#fff" stroke="{c}" stroke-width="2.5"/>'
            f'<path d="M{x+22} {y+50} h40 M{x+22} {y+58} h28" stroke="{c}" stroke-width="2"/>')


def celular(x, y, w=70, h=120, cor="tinta", tela="#fff"):
    c = COR.get(cor, cor)
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#fff" stroke="{c}" stroke-width="3.5"/>'
            f'<rect x="{x+7}" y="{y+14}" width="{w-14}" height="{h-28}" rx="4" fill="{tela}"/>'
            f'<path d="M{x+w/2-10} {y+7} h20" stroke="{c}" stroke-width="3" stroke-linecap="round"/>')


def nuvem(x, y, esc=1.0, cor="ciano"):
    c = COR[cor]; s = esc
    return (f'<path d="M{x+20*s} {y+60*s} a22 22 0 0 1 4 -43 a30 30 0 0 1 56 -8 a24 24 0 0 1 38 22 a20 20 0 0 1 -6 29z" '
            f'fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3" stroke-linejoin="round" transform="translate({x*(1-s)} {y*(1-s)}) scale({s})"/>')


def servidor(x, y, cor="roxo", n=3):
    c = COR[cor]; s = ""
    for k in range(n):
        s += (f'<rect x="{x}" y="{y+k*30}" width="90" height="26" rx="5" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5"/>'
              f'<circle cx="{x+14}" cy="{y+13+k*30}" r="4" fill="{COR["verde"]}"/><path d="M{x+30} {y+13+k*30} h46" stroke="{c}" stroke-width="2.5" stroke-linecap="round"/>')
    return s


def roteador(x, y, cor="amarelo"):
    c = COR[cor]
    return (f'<path d="M{x+20} {y} v-18 M{x+80} {y} v-18" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
            f'<path d="M{x+36} {y-16} a20 20 0 0 1 28 0 M{x+30} {y-24} a28 28 0 0 1 40 0" fill="none" stroke="{COR["ciano"]}" stroke-width="2.5" stroke-linecap="round"/>'
            f'<rect x="{x}" y="{y}" width="100" height="32" rx="8" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="{x+30}" cy="{y+16}" r="4" fill="{COR["verde"]}"/><circle cx="{x+46}" cy="{y+16}" r="4" fill="{COR["verde"]}"/><circle cx="{x+62}" cy="{y+16}" r="4" fill="{COR["verde"]}"/>')


def cadeado(x, y, cor="verde", aberto=False, esc=1.0):
    c = COR[cor]; s = esc
    arco = (f'<path d="M{x+8*s} {y+20*s} v-8 a12 12 0 0 1 24 0" fill="none" stroke="{c}" stroke-width="{4*s}" transform="translate({-14*s} {-6*s})"/>' if aberto else
            f'<path d="M{x+8*s} {y+20*s} v-8 a12 12 0 0 1 {24*s} 0 v8" fill="none" stroke="{c}" stroke-width="{4*s}"/>')
    return (arco + f'<rect x="{x}" y="{y+18*s}" width="{40*s}" height="{30*s}" rx="{6*s}" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="{x+20*s}" cy="{y+31*s}" r="{4*s}" fill="{c}"/><path d="M{x+20*s} {y+33*s} v{7*s}" stroke="{c}" stroke-width="{3*s}" stroke-linecap="round"/>')


def pasta(x, y, w=80, nome=None, cor="amarelo", size=13):
    c = COR[cor]
    return (f'<path d="M{x} {y+8} h{w*0.38} l8 -8 h{w*0.62-8} v{w*0.62} h{-w} z" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5" stroke-linejoin="round"/>'
            + (t(x + w / 2, y + w * 0.45, nome, size, "tinta", 700) if nome else ""))


def arquivo(x, y, ext, cor="azul", nome=None, w=46):
    c = COR[cor]
    return (f'<path d="M{x} {y} h{w-12} l12 12 v{w*1.05} h{-w} z" fill="#fff" stroke="{c}" stroke-width="2.5" stroke-linejoin="round"/>'
            f'<path d="M{x+w-12} {y} v12 h12" fill="none" stroke="{c}" stroke-width="2"/>'
            + caixa(x - 5, y + w * 0.55, w + 10, 18, cor=cor, fundo=cor, rx=5, larg=0)
            + t(x + w / 2, y + w * 0.55 + 13, ext, 11, "#fff", 800)
            + (t(x + w / 2, y + w * 1.05 + 26, nome, 12, "tinta", 600) if nome else ""))


def lampada(x, y, acesa=True, r=26):
    f = "#fde047" if acesa else "#fff"; c = COR["amarelo"] if acesa else COR["suave"]
    brilho = "".join(f'<path d="M{x+(r+6)*a} {y+(r+6)*b} l{8*a} {8*b}" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>'
                     for a, b in [(-0.7, -0.7), (0.7, -0.7), (0, -1), (-1, 0), (1, 0)]) if acesa else ""
    return (brilho + f'<circle cx="{x}" cy="{y}" r="{r}" fill="{f}" stroke="{c}" stroke-width="3"/>'
            f'<rect x="{x-12}" y="{y+r-4}" width="24" height="16" rx="3" fill="#cbd5e1" stroke="{COR["suave"]}" stroke-width="2"/>')


def no_grafo(x, y, nome, cor="ciano", r=26, size=15):
    return circulo(x, y, r, cor, cor + "_c", 3) + t(x, y + size * 0.35, nome, size, "tinta", 800)


def aresta(x1, y1, x2, y2, cor="suave", larg=4, tracejada=False):
    d = ' stroke-dasharray="9 7"' if tracejada else ""
    return f'<path d="M{x1} {y1} L{x2} {y2}" stroke="{COR.get(cor, cor)}" stroke-width="{larg}" stroke-linecap="round"{d}/>'


def peso(x, y, n, cor="amarelo"):
    return caixa(x - 14, y - 13, 28, 26, cor=cor, fundo=cor + "_c", rx=7, larg=2) + t(x, y + 5, str(n), 14, cor, 800)


def cartao(x, y, w, h, cor, titulo=None, sub=None, ch=None, size=15):
    s = caixa(x, y, w, h, cor=cor, fundo=cor + "_c", rx=12, larg=2.5)
    if ch: s += emoji(x + w / 2, y + 44, ch, 32)
    yy = y + (70 if ch else h / 2 + (0 if sub else 5))
    if titulo:
        for k, ln in enumerate(titulo if isinstance(titulo, list) else [titulo]):
            s += t(x + w / 2, yy + k * 18, ln, size, cor, 800)
        yy += 18 * (len(titulo) if isinstance(titulo, list) else 1)
    if sub:
        for k, ln in enumerate(sub if isinstance(sub, list) else [sub]):
            s += t(x + w / 2, yy + 2 + k * 15, ln, 12, "tinta", 600)
    return s


def mapa_bimestre(missoes, titulo="O que você conquistou no bimestre"):
    """Resumo do bimestre: trilha colorida com as missões (emoji, título, palavras-chave) e a chegada."""
    cores = ["azul", "amarelo", "verde", "roxo", "ciano"]
    n = len(missoes); W = 744; larg = (W - 40 - 20 * (n - 1) - 96) / n
    s = t(W / 2, 18, titulo, 16, "tinta", 800)
    s += f'<path d="M30 206 H{W-40}" stroke="{COR["linha"]}" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 16"/>'
    for i, (ch, tit, palavras) in enumerate(missoes):
        x = 20 + i * (larg + 20); cor = cores[i % len(cores)]
        s += caixa(x, 50, larg, 136, cor=cor, fundo=cor + "_c", rx=14, larg=2.5)
        s += circulo(x + 22, 50, 15, cor, "papel", 2.5) + t(x + 22, 55, f"M{i+1}", 12, cor, 800)
        s += emoji(x + larg / 2, 92, ch, 32)
        s += linhas(x + larg / 2, 120, tit, 13, cor, 800, passo=16)
        s += linhas(x + larg / 2, 120 + 16 * len(tit) + 4, palavras, 11.5, "tinta", 600, passo=14)
        s += circulo(x + larg / 2, 206, 9, cor, cor, 2)
    xf = W - 96
    s += caixa(xf, 72, 84, 96, cor="verde", fundo="verde_c", rx=14, larg=3) + emoji(xf + 42, 112, "🏁", 30) + linhas(xf + 42, 138, ["Missão", "cumprida!"], 12, "verde", 800, passo=14)
    return s


def eps(com_armazenamento=True):
    """Entrada (azul) → processamento (amarelo) → saída (verde); armazenamento (roxo) guarda e devolve."""
    s = ""
    s += caixa(10, 30, 200, 160, cor="azul", fundo="azul_c", rx=16) + etiqueta(110, 22, "1. ENTRADA", "azul", 14)
    s += teclado(24, 50, 120, 40) + mouse(158, 48) + microfone(70, 112) + t(140, 150, "teclado, mouse", 12, "azul", 700) + t(140, 166, "e microfone", 12, "azul", 700)
    s += seta(214, 110, 268, 110, "azul", 4)
    s += caixa(272, 30, 196, 160, cor="amarelo", fundo="amarelo_c", rx=16) + etiqueta(370, 22, "2. PROCESSAMENTO", "amarelo", 14)
    s += gabinete(292, 52, 66, 112) + chip(386, 70, 58) + t(415, 162, "o processador", 12, "amarelo", 700) + t(415, 178, "faz as contas", 12, "amarelo", 700)
    s += seta(472, 110, 526, 110, "verde", 4)
    s += caixa(530, 30, 204, 160, cor="verde", fundo="verde_c", rx=16) + etiqueta(632, 22, "3. SAÍDA", "verde", 14)
    s += monitor(544, 46, 92, 60) + caixa_som(652, 44) + impressora(560, 122) + t(690, 140, "tela, som", 12, "verde", 700) + t(690, 156, "e papel", 12, "verde", 700)
    if com_armazenamento:
        s += f'<path d="M370 192 V214" stroke="{COR["roxo"]}" stroke-width="3" stroke-dasharray="5 4"/>'
        s += hd(270, 214, 200, 40, rotulo="ARMAZENAMENTO") + t(590, 240, "guarda os arquivos (HD ou SSD)", 13, "roxo", 700)
    return s


def escada_cabos(w=744):
    """Escada das categorias de cabo de rede (17/11/2026): cada degrau, um cabo em corte, cada vez mais protegido."""
    degraus = [("CAT5e", "1 Gbps", "100 m", "azul", 0), ("CAT6", "até 10 Gbps", "55 m (10 Gbps)", "amarelo", 1),
               ("CAT6a", "10 Gbps", "100 m", "verde", 2), ("CAT7", "10 Gbps", "100 m", "ciano", 3), ("CAT8", "40 Gbps", "30 m", "roxo", 4)]
    pares = ["#ea580c", "#16a34a", "#2563eb", "#92400e"]
    s = ""; n = len(degraus); larg = (w - 20) / n
    for k, (nome, vel, dist, cor, nivel) in enumerate(degraus):
        x = 10 + k * larg; topo = 250 - k * 34
        s += f'<rect x="{x}" y="{topo}" width="{larg - 6}" height="{322 - topo}" rx="8" fill="{COR[cor + "_c"]}" stroke="{COR[cor]}" stroke-width="2.5"/>'
        cx, cy, r = x + (larg - 6) / 2, topo - 52, 30 + nivel * 3
        s += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{"#94a3b8" if nivel >= 4 else "#60a5fa"}" stroke="#1c1f22" stroke-width="2.5"/>'
        if nivel >= 3: s += f'<circle cx="{cx}" cy="{cy}" r="{r - 5}" fill="#cbd5e1" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>'
        s += f'<circle cx="{cx}" cy="{cy}" r="{r - (9 if nivel >= 3 else 5)}" fill="#eff6ff" stroke="#1c1f22" stroke-width="1.5"/>'
        if nivel >= 1: s += f'<path d="M{cx - r + 12} {cy} H{cx + r - 12} M{cx} {cy - r + 12} V{cy + r - 12}" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>'
        for j, (dx, dy) in enumerate([(-1, -1), (1, -1), (-1, 1), (1, 1)]):
            px, py = cx + dx * r * 0.36, cy + dy * r * 0.36
            if nivel >= 3: s += f'<circle cx="{px}" cy="{py}" r="{r * 0.3}" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>'
            s += f'<circle cx="{px - 4}" cy="{py}" r="4.5" fill="{pares[j]}" stroke="#1c1f22" stroke-width="1"/><circle cx="{px + 4}" cy="{py}" r="4.5" fill="#fff" stroke="#1c1f22" stroke-width="1"/>'
        s += t(cx, topo + 26, nome, 17, cor, 800) + t(cx, topo + 48, vel, 14, "tinta", 800) + t(cx, topo + 66, "até " + dist, 12, "suave", 600)
    s += etiqueta(170, 34, "mais rápido e mais protegido ↗", "roxo", 13)
    s += t(w / 2, 344, "Anéis cinza = blindagem de metal (CAT7 e CAT8) · cruz = separador dos pares", 12, "suave", 600)
    return s
