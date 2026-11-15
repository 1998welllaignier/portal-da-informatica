"""
Peças de desenho das ilustrações de 2027 (coloridas, pedagógicas).
Professor Welington Laignier · Portal da Informática.

Regra (docs/PADRAO-DE-QUALIDADE.md, 14/11/2026): nenhum desenho é enfeite.
Cada figura mostra o conceito funcionando, com setas e etiquetas usando as
mesmas palavras da apostila, e a mesma cor para a mesma ideia em toda a apostila.
"""
import html as _h

# Paleta fixa (mesma ideia = mesma cor em toda a apostila)
COR = {
    "tinta": "#1c1f22", "suave": "#64748b", "linha": "#cbd5e1", "papel": "#ffffff", "fundo": "#f8fafc",
    "azul": "#2563eb", "azul_c": "#dbeafe",        # entrada / ação do usuário
    "amarelo": "#d97706", "amarelo_c": "#fef3c7",  # processamento / atenção
    "verde": "#16a34a", "verde_c": "#dcfce7",      # saída / certo / pode
    "roxo": "#7c3aed", "roxo_c": "#ede9fe",        # armazenamento / guardar
    "vermelho": "#dc2626", "vermelho_c": "#fee2e2",  # perigo / errado / não pode
    "rosa": "#db2777", "rosa_c": "#fce7f3",
    "ciano": "#0891b2", "ciano_c": "#cffafe",
}
FONTE = "Inter, 'Segoe UI', Arial, sans-serif"
MONO = "'JetBrains Mono', Consolas, monospace"


def esc(s):
    return _h.escape(str(s), quote=True)


def defs():
    """Pontas de seta de cada cor (usadas por seta())."""
    m = []
    for nome in ["tinta", "azul", "amarelo", "verde", "roxo", "vermelho", "suave", "rosa", "ciano"]:
        m.append(f'<marker id="p27-{nome}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
                 f'<path d="M0 0 10 5 0 10z" fill="{COR[nome]}"/></marker>')
    return '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' + "".join(m) + "</defs></svg>"


def t(x, y, s, size=16, cor="tinta", peso=700, ancora="middle", fonte=None, extra=""):
    c = COR.get(cor, cor)
    return (f'<text x="{x}" y="{y}" font-family="{fonte or FONTE}" font-size="{size}" font-weight="{peso}" '
            f'fill="{c}" text-anchor="{ancora}"{extra}>{esc(s)}</text>')


def linhas(x, y, lista, size=14, cor="tinta", peso=600, ancora="middle", passo=None):
    passo = passo or round(size * 1.25)
    return "".join(t(x, y + i * passo, s, size, cor, peso, ancora) for i, s in enumerate(lista))


def caixa(x, y, w, h, cor="linha", fundo="papel", rx=12, larg=2.5, tracejada=False, extra=""):
    c = COR.get(cor, cor); f = COR.get(fundo, fundo)
    d = ' stroke-dasharray="7 5"' if tracejada else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{f}" stroke="{c}" stroke-width="{larg}"{d}{extra}/>'


def circulo(cx, cy, r, cor="tinta", fundo="papel", larg=2.5):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{COR.get(fundo, fundo)}" stroke="{COR.get(cor, cor)}" stroke-width="{larg}"/>'


def seta(x1, y1, x2, y2, cor="tinta", larg=3, tracejada=False, curva=None):
    c = COR.get(cor, cor); d = ' stroke-dasharray="6 5"' if tracejada else ""
    if curva is not None:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2 + curva
        caminho = f"M{x1} {y1} Q{mx} {my} {x2} {y2}"
    else:
        caminho = f"M{x1} {y1} L{x2} {y2}"
    return f'<path d="{caminho}" fill="none" stroke="{c}" stroke-width="{larg}" stroke-linecap="round"{d} marker-end="url(#p27-{cor})"/>'


def etiqueta(x, y, s, cor="azul", size=13, ancora="middle", w=None):
    """Plaquinha colorida com texto (rótulo de uma parte do desenho)."""
    largura = w or max(40, int(len(s) * size * 0.58) + 18)
    x0 = x - largura / 2 if ancora == "middle" else (x if ancora == "start" else x - largura)
    return (caixa(x0, y - size - 4, largura, size + 12, cor=cor, fundo=cor + "_c" if cor + "_c" in COR else "papel", rx=8, larg=2)
            + t(x0 + largura / 2, y + 2, s, size, cor, 700))


def emoji(x, y, ch, size=28):
    return (f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="middle" '
            f'font-family="\'Segoe UI Emoji\',\'Apple Color Emoji\',\'Noto Color Emoji\',sans-serif">{ch}</text>')


def tecla(x, y, rotulo, w=44, h=40, cor="tinta", fundo="papel", size=14, destaque=None):
    c = destaque or cor
    f = (destaque + "_c") if destaque else fundo
    return (caixa(x, y, w, h, cor=c, fundo=f, rx=7, larg=2.5 if destaque else 1.8)
            + t(x + w / 2, y + h / 2 + size * 0.36, rotulo, size, c if destaque else "tinta", 700))


def boneco(x, y, cor="azul", escala=1.0, braco=None, rosto="feliz"):
    """Bonequinho simples (cabeça, corpo, braços). braco: 'aponta' (braço direito para a direita) ou None."""
    s = escala; c = COR.get(cor, cor)
    pele = "#f1c27d"
    boca = (f'<path d="M{x-6*s} {y-30*s} q{6*s} {6*s} {12*s} 0" fill="none" stroke="#1c1f22" stroke-width="{2*s}" stroke-linecap="round"/>'
            if rosto == "feliz" else
            f'<path d="M{x-6*s} {y-26*s} q{6*s} {-6*s} {12*s} 0" fill="none" stroke="#1c1f22" stroke-width="{2*s}" stroke-linecap="round"/>'
            if rosto == "triste" else
            f'<ellipse cx="{x}" cy="{y-28*s}" rx="{4*s}" ry="{5*s}" fill="#1c1f22"/>')
    br = (f'<path d="M{x+14*s} {y-4*s} l{26*s} {-12*s}" stroke="{c}" stroke-width="{7*s}" stroke-linecap="round"/>'
          if braco == "aponta" else
          f'<path d="M{x+14*s} {y-4*s} l{10*s} {22*s}" stroke="{c}" stroke-width="{7*s}" stroke-linecap="round"/>')
    return (f'<g>'
            f'<path d="M{x-14*s} {y-4*s} l{-10*s} {22*s}" stroke="{c}" stroke-width="{7*s}" stroke-linecap="round"/>{br}'
            f'<rect x="{x-15*s}" y="{y-12*s}" width="{30*s}" height="{40*s}" rx="{12*s}" fill="{c}"/>'
            f'<path d="M{x-8*s} {y+28*s} v{18*s} M{x+8*s} {y+28*s} v{18*s}" stroke="#334155" stroke-width="{7*s}" stroke-linecap="round"/>'
            f'<circle cx="{x}" cy="{y-34*s}" r="{18*s}" fill="{pele}" stroke="#1c1f22" stroke-width="{1.5*s}"/>'
            f'<circle cx="{x-6*s}" cy="{y-38*s}" r="{2.4*s}" fill="#1c1f22"/><circle cx="{x+6*s}" cy="{y-38*s}" r="{2.4*s}" fill="#1c1f22"/>'
            f'{boca}</g>')


def balao(x, y, w, h, texto_linhas, cor="tinta", fundo="papel", ponta="baixo-esq", size=14):
    c = COR.get(cor, cor); f = COR.get(fundo, fundo)
    if ponta == "baixo-esq":
        p = f'<path d="M{x+20} {y+h-1} l-6 16 l18 -16z" fill="{f}" stroke="{c}" stroke-width="2"/>'
    elif ponta == "baixo-dir":
        p = f'<path d="M{x+w-20} {y+h-1} l6 16 l-18 -16z" fill="{f}" stroke="{c}" stroke-width="2"/>'
    else:
        p = ""
    corpo = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="{f}" stroke="{c}" stroke-width="2"/>'
    cobre = (f'<path d="M{x+15} {y+h-1} h22" stroke="{f}" stroke-width="3"/>' if ponta == "baixo-esq" else
             f'<path d="M{x+w-37} {y+h-1} h22" stroke="{f}" stroke-width="3"/>' if ponta == "baixo-dir" else "")
    n = len(texto_linhas); passo = round(size * 1.3)
    y0 = y + h / 2 - (n - 1) * passo / 2 + size * 0.35
    return p + corpo + cobre + linhas(x + w / 2, y0, texto_linhas, size, cor if cor != "linha" else "tinta", 600, passo=passo)


def figura(w, h, rotulo, corpo, legenda=None, pequena=False):
    leg = f"<figcaption>{esc(legenda)}</figcaption>" if legenda else ""
    cls = "fig-s" if pequena else ""
    return (f'<figure class="{cls}"><svg role="img" aria-label="{esc(rotulo)}" viewBox="0 0 {w} {h}" '
            f'xmlns="http://www.w3.org/2000/svg">{corpo}</svg>{leg}</figure>')


def icone(ch):
    return f'<svg viewBox="0 0 48 48">{emoji(24, 35, ch, 32)}</svg>'


def mascote():
    """Mascote colorido: robozinho do Prof. Welington com o 'W' no peito."""
    return ('<svg class="mascot" role="img" aria-label="Robozinho mascote do Prof. Welington acenando" viewBox="0 0 240 250">'
            '<ellipse cx="120" cy="238" rx="80" ry="9" fill="#e2e8f0"/>'
            '<path d="M120 40V18" stroke="#1c1f22" stroke-width="5" stroke-linecap="round"/><circle cx="120" cy="14" r="9" fill="#f59e0b" stroke="#1c1f22" stroke-width="4"/>'
            '<rect x="62" y="40" width="116" height="84" rx="26" fill="#60a5fa" stroke="#1c1f22" stroke-width="5"/>'
            '<rect x="80" y="58" width="80" height="48" rx="16" fill="#e0f2fe" stroke="#1c1f22" stroke-width="4"/>'
            '<circle cx="104" cy="82" r="8" fill="#1c1f22"/><circle cx="136" cy="82" r="8" fill="#1c1f22"/>'
            '<path d="M106 98q14 10 28 0" fill="none" stroke="#1c1f22" stroke-width="4" stroke-linecap="round"/>'
            '<rect x="76" y="132" width="88" height="80" rx="20" fill="#2563eb" stroke="#1c1f22" stroke-width="5"/>'
            '<text x="120" y="186" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="40" font-weight="800" fill="#fbbf24">W</text>'
            '<path d="M76 150l-30-26" stroke="#1c1f22" stroke-width="9" stroke-linecap="round"/><circle cx="42" cy="120" r="11" fill="#fbbf24" stroke="#1c1f22" stroke-width="4"/>'
            '<path d="M164 152l26 22" stroke="#1c1f22" stroke-width="9" stroke-linecap="round"/>'
            '<path d="M100 212v20M140 212v20" stroke="#1c1f22" stroke-width="10" stroke-linecap="round"/></svg>')


def gerar(aid, figuras, icones):
    """figuras: lista de dicts {missao, pagina, ancora, rotulo, html}."""
    import json, os
    raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    dados = {"defs": defs(), "mascote": mascote(), "icones": {k: icone(v) for k, v in icones.items()}, "figuras": figuras}
    js = ("/* Ilustrações coloridas de 2027 — gerado por ferramentas/ilustracoes_2027/ (não edite à mão).\n"
          "   Professor Welington Laignier. */\n"
          f"PORTAL.registrarIlustracoes({json.dumps(aid)}, {json.dumps(dados, ensure_ascii=False)});\n")
    open(os.path.join(raiz, "dados", "ilustracoes", aid + ".js"), "w", encoding="utf-8").write(js)
    return len(figuras)
