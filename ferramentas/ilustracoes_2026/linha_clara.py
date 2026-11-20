"""
🎨 Peças no estilo LINHA CLARA (Estilo B, escolhido pelo professor em 19/11/2026):
contorno preto grosso em tudo, cores vivas e chapadas, sombra sólida deslocada
(como nos quadrinhos), objetos desenhados como de verdade (não ícones soltos).
Desenhado por código pelo Claude — sem ChatGPT (pedido do professor em 20/11/2026).
Mesma regra de cores do portal: azul = entrada · amarelo = processamento ·
verde = saída · roxo = armazenamento · vermelho = perigo · ciano = rede.
"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "ilustracoes_2027"))
from base import FONTE, MONO, esc  # noqa

K = "#1c1f22"            # contorno (tinta)
SOMBRA = "#1c1f22"
V = {   # cores vivas (preenchimento) e claras (fundo de painel)
    "azul": ("#3b82f6", "#dbeafe"), "amarelo": ("#f59e0b", "#fef3c7"), "verde": ("#22c55e", "#dcfce7"),
    "roxo": ("#8b5cf6", "#ede9fe"), "vermelho": ("#ef4444", "#fee2e2"), "ciano": ("#06b6d4", "#cffafe"),
    "rosa": ("#ec4899", "#fce7f3"), "cinza": ("#94a3b8", "#f1f5f9"),
}
ESC = {"azul": "#1d4ed8", "amarelo": "#b45309", "verde": "#15803d", "roxo": "#6d28d9", "vermelho": "#b91c1c", "ciano": "#0e7490", "rosa": "#be185d", "cinza": "#475569"}
LW = 3.5


def t(x, y, s, size=16, cor=K, peso=800, ancora="middle", fonte=None, contorno=None):
    c = ESC.get(cor, cor)
    st = f' paint-order="stroke" stroke="{contorno}" stroke-width="{size*0.28:.1f}" stroke-linejoin="round"' if contorno else ""
    return f'<text x="{x}" y="{y}" font-family="{fonte or FONTE}" font-size="{size}" font-weight="{peso}" fill="{c}" text-anchor="{ancora}"{st}>{esc(s)}</text>'


def r(x, y, w, h, fill, rx=8, lw=LW, sombra=0):
    s = f'<rect x="{x+sombra}" y="{y+sombra}" width="{w}" height="{h}" rx="{rx}" fill="{SOMBRA}"/>' if sombra else ""
    return s + f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{K}" stroke-width="{lw}"/>'


def c(cx, cy, rr, fill, lw=LW):
    return f'<circle cx="{cx}" cy="{cy}" r="{rr}" fill="{fill}" stroke="{K}" stroke-width="{lw}"/>'


def p(d, fill, lw=LW, extra=""):
    return f'<path d="{d}" fill="{fill}" stroke="{K}" stroke-width="{lw}" stroke-linejoin="round" stroke-linecap="round"{extra}/>'


def painel(x, y, w, h, cor, titulo=None, num=None):
    """Painel com fundo claro, contorno preto, sombra sólida e plaquinha do título."""
    viva, clara = V[cor]
    s = r(x, y, w, h, clara, rx=18, lw=LW, sombra=6)
    if titulo:
        tw = len(titulo) * 12.6 + (48 if num else 28)
        s += r(x + 14, y - 16, tw, 32, viva, rx=10, lw=3, sombra=3)
        if num:
            s += c(x + 32, y, 11, "#fff", 2.5) + t(x + 32, y + 5, str(num), 14, K, 900)
        s += t(x + 14 + (44 if num else 13), y + 6, titulo, 16, "#fff", 900, "start", contorno=K)
    return s


def seta_grossa(x1, y, x2, cor, h=30):
    """Seta larga e chapada com contorno preto (vai da esquerda para a direita)."""
    viva = V[cor][0]; m = h / 2; ponta = min(26, (x2 - x1) * 0.5)
    d = f"M{x1} {y-m*0.5} H{x2-ponta} V{y-m} L{x2} {y} L{x2-ponta} {y+m} V{y+m*0.5} H{x1} Z"
    return p(d, viva, 3)


def seta_baixo(x, y1, y2, cor, w=26):
    viva = V[cor][0]; m = w / 2; ponta = min(20, (y2 - y1) * 0.5)
    d = f"M{x-m*0.5} {y1} V{y2-ponta} H{x-m} L{x} {y2} L{x+m} {y2-ponta} H{x+m*0.5} V{y1} Z"
    return p(d, viva, 3)


def etiqueta(x, y, s, cor="azul", size=13):
    w = len(s) * size * 0.6 + 18
    return r(x - w / 2, y - size - 3, w, size + 11, "#fff", rx=8, lw=2.5, sombra=2) + t(x, y + 2, s, size, cor, 800)


# ---------------- objetos (como de verdade) ----------------
def teclado(x, y, w=130):
    h = w * 0.36; s = r(x, y, w, h, "#e2e8f0", rx=8, sombra=4)
    cols = 9; kw = (w - 16) / cols
    for lin in range(3):
        for k in range(cols - (1 if lin == 2 else 0)):
            s += f'<rect x="{x+8+k*kw+(kw/2 if lin==2 else 0):.1f}" y="{y+7+lin*(h-14)/3.3:.1f}" width="{kw-3:.1f}" height="{(h-14)/3.3-3:.1f}" rx="2" fill="#fff" stroke="{K}" stroke-width="1.6"/>'
    s += f'<rect x="{x+w*0.28:.1f}" y="{y+h-11:.1f}" width="{w*0.44:.1f}" height="6" rx="2" fill="#fff" stroke="{K}" stroke-width="1.6"/>'
    return s


def mouse(x, y, esc_=1.0, cor="azul"):
    s_ = esc_; viva = V[cor][0]
    return (f'<path d="M{x+18*s_} {y-2*s_} C{x+18*s_} {y-18*s_} {x-6*s_} {y-14*s_} {x-14*s_} {y-24*s_}" fill="none" stroke="{K}" stroke-width="3"/>'
            + r(x, y, 36 * s_, 52 * s_, "#f8fafc", rx=18 * s_, sombra=3)
            + p(f"M{x} {y+20*s_} H{x+36*s_} M{x+18*s_} {y} V{y+20*s_}", "none", 2.5)
            + r(x + 13 * s_, y + 5 * s_, 10 * s_, 11 * s_, viva, rx=5 * s_, lw=2))


def microfone(x, y, cor="azul"):
    viva = V[cor][0]
    return (r(x - 11, y, 22, 36, "#cbd5e1", rx=11, sombra=3)
            + "".join(f'<path d="M{x-8} {y+8+k*7} h16" stroke="{K}" stroke-width="1.5"/>' for k in range(4))
            + p(f"M{x-19} {y+20} a19 19 0 0 0 38 0", "none", 3.5) + p(f"M{x} {y+40} v12 M{x-14} {y+53} h28", "none", 4)
            + c(x, y - 2, 4, viva, 2))


def monitor(x, y, w=110, h=72, tela="azul", conteudo="pasta"):
    s = r(x, y, w, h, "#334155", rx=8, sombra=5) + r(x + 7, y + 7, w - 14, h - 14, V[tela][0], rx=4, lw=2.5)
    if conteudo == "pasta":
        s += p(f"M{x+20} {y+24} h14 l4 5 h18 v20 h-36 z", "#facc15", 2.5) + f'<path d="M{x+64} {y+30} h28 M{x+64} {y+38} h22 M{x+64} {y+46} h26" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
    elif conteudo == "texto":
        s += "".join(f'<path d="M{x+18} {y+22+k*9} h{w-40-(k%2)*18}" stroke="#fff" stroke-width="4" stroke-linecap="round"/>' for k in range(4))
    s += p(f"M{x+w/2-8} {y+h} h16 l4 14 h-24 z", "#64748b", 3) + r(x + w / 2 - 26, y + h + 12, 52, 8, "#64748b", rx=4, lw=3)
    return s


def gabinete(x, y, w=74, h=124, janela=True, cor_chip="amarelo"):
    s = r(x, y, w, h, "#475569", rx=8, sombra=5)
    s += f'<path d="M{x+10} {y+14} h{w-20} M{x+10} {y+24} h{w-20}" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>'
    if janela:
        s += r(x + 9, y + 36, w - 18, h - 66, "#0f172a", rx=5, lw=2.5)
        cx, cy, cw = x + w / 2 - 15, y + 46, 30
        for k in range(4):
            d = 5 + k * 7
            s += f'<path d="M{cx+d} {cy-5} v5 M{cx+d} {cy+cw} v5 M{cx-5} {cy+d} h5 M{cx+cw} {cy+d} h5" stroke="#fde68a" stroke-width="2"/>'
        s += r(cx, cy, cw, cw, V[cor_chip][0], rx=4, lw=2.5) + t(cx + cw / 2, cy + cw / 2 + 4, "CPU", 10, K, 900, fonte=MONO)
    s += c(x + w / 2, y + h - 16, 7, "#22c55e", 2.5)
    return s


def chip(x, y, w=64, cor="amarelo", rotulo="CPU"):
    s = ""
    for k in range(5):
        d = 8 + k * (w - 16) / 4
        s += f'<path d="M{x+d} {y-10} v10 M{x+d} {y+w} v10 M{x-10} {y+d} h10 M{x+w} {y+d} h10" stroke="{K}" stroke-width="3.5" stroke-linecap="round"/>'
    return s + r(x, y, w, w, V[cor][0], rx=8, sombra=4) + r(x + 10, y + 10, w - 20, w - 20, "#fde68a", rx=4, lw=2.5) + t(x + w / 2, y + w / 2 + 6, rotulo, 15, K, 900, fonte=MONO)


def caixa_som(x, y, w=42, h=68):
    return (r(x, y, w, h, "#334155", rx=8, sombra=4) + c(x + w / 2, y + 17, 7, "#94a3b8", 2.5) + c(x + w / 2, y + 44, 14, "#94a3b8", 3) + c(x + w / 2, y + 44, 5, K, 1)
            + f'<path d="M{x+w+8} {y+30} q8 12 0 24 M{x+w+16} {y+24} q12 18 0 36" fill="none" stroke="{K}" stroke-width="3" stroke-linecap="round"/>')


def impressora(x, y, w=96):
    return (r(x + 16, y, w - 32, 22, "#fff", rx=3, lw=3)
            + r(x, y + 18, w, 40, "#cbd5e1", rx=9, sombra=4) + c(x + w - 14, y + 30, 4, "#22c55e", 2)
            + r(x + 16, y + 46, w - 32, 32, "#fff", rx=2, lw=3)
            + f'<path d="M{x+26} {y+58} h{w-56} M{x+26} {y+66} h{w-70}" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>')


def ssd(x, y, w=140, h=46, cor="roxo", rotulo="SSD"):
    viva = V[cor][0]
    s = r(x, y, w, h, viva, rx=7, sombra=4) + r(x + 10, y + 9, w * 0.5, h - 18, "#fff", rx=3, lw=2.5) + t(x + 10 + w * 0.25, y + h / 2 + 5, rotulo, 13, K, 900, fonte=MONO)
    s += "".join(f'<rect x="{x+w*0.62+k*9:.1f}" y="{y+h-10}" width="5" height="10" fill="#fde68a" stroke="{K}" stroke-width="1.5"/>' for k in range(5))
    return s


def hd(x, y, w=120, h=80, cor="roxo"):
    viva = V[cor][0]
    return (r(x, y, w, h, "#cbd5e1", rx=8, sombra=4) + c(x + w * 0.42, y + h / 2, h * 0.36, "#e2e8f0", 3) + c(x + w * 0.42, y + h / 2, 6, viva, 2)
            + p(f"M{x+w-14} {y+12} L{x+w*0.5} {y+h/2-2}", "none", 4) + c(x + w - 14, y + 12, 6, viva, 2.5))


def figura(w, h, rotulo, corpo, legenda=None):
    leg = f"<figcaption>{esc(legenda)}</figcaption>" if legenda else ""
    return (f'<figure class="lc"><svg role="img" aria-label="{esc(rotulo)}" viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg">{corpo}</svg>{leg}</figure>')


# ---------------- figuras prontas ----------------
def eps(com_armazenamento=True):
    """As três etapas (entrada → processamento → saída) + armazenamento, em linha clara."""
    s = ""
    s += painel(14, 34, 232, 206, "azul", "ENTRADA", 1)
    s += teclado(30, 62, 128) + etiqueta(94, 128, "teclado", "azul", 12)
    s += mouse(190, 66, 0.95) + etiqueta(207, 140, "mouse", "azul", 12)
    s += microfone(70, 150) + etiqueta(160, 186, "microfone", "azul", 12)
    s += seta_grossa(252, 137, 298, "azul")
    s += painel(304, 34, 232, 206, "amarelo", "PROCESSAMENTO", 2)
    s += gabinete(320, 62, 76, 132) + etiqueta(358, 224, "gabinete", "amarelo", 12)
    s += p("M398 112 C412 112 412 106 428 106", "none", 3, ' stroke-dasharray="5 5"')
    s += chip(438, 80, 62) + etiqueta(469, 176, "processador", "amarelo", 12) + t(469, 200, "faz as contas", 13, "amarelo", 800)
    s += seta_grossa(542, 137, 588, "verde")
    s += painel(594, 34, 232, 206, "verde", "SAÍDA", 3)
    s += monitor(610, 56, 112, 70, "azul", "pasta") + etiqueta(666, 172, "imagem", "verde", 12)
    s += caixa_som(744, 64) + etiqueta(766, 150, "som", "verde", 12)
    s += impressora(722, 168, 84) + etiqueta(680, 226, "papel", "verde", 12) + p("M704 222 L724 214", "none", 2.5)
    if com_armazenamento:
        s += seta_baixo(420, 246, 272, "roxo")
        s += painel(256, 276, 328, 84, "roxo")
        s += ssd(276, 294, 132, 46) + hd(434, 286, 100, 64)
        s += t(420, 382, "ARMAZENAMENTO: guarda os arquivos (SSD ou HD)", 15, "roxo", 900)
    return s


if __name__ == "__main__":
    # amostra lado a lado (antes × depois) para o professor aprovar
    import base as B
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import comum
    antes = B.figura(744, 262, "antes", comum.eps())
    depois = figura(840, 392, "depois", eps())
    html = f"""<!doctype html><meta charset=utf-8><style>body{{margin:0;font-family:Inter,Arial;background:#f1f5f9}}.l{{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:24px}}
    .c{{background:#fff;border-radius:16px;padding:16px;box-shadow:0 4px 16px rgba(0,0,0,.08)}}h2{{margin:0 0 10px}}figure{{margin:0}}svg{{width:100%;height:auto}}</style>
    {B.defs()}<div class=l><div class=c><h2>Antes (16/11)</h2>{antes}</div><div class=c><h2>Depois: linha clara (desenhado pelo Claude)</h2>{depois}</div></div>"""
    open(sys.argv[1] if len(sys.argv) > 1 else "/tmp/amostra.html", "w").write(html)
