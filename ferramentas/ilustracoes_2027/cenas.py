"""
🎬 Cenas de abertura das missões (desenho feito por IA + camada que ensina feita por código).
Professor Welington Laignier · Portal da Informática.

Caminho escolhido pelo professor em 19/11/2026 (teste "opção 3"):
  • a IMAGEM da cena (turma vivendo a situação-problema da missão) é gerada no ChatGPT, sempre com a
    ficha da turma como referência (ferramentas/ilustracoes/referencia/ia/ficha_da_turma_IA.png),
    SEM NENHUM TEXTO dentro da imagem;
  • as ETIQUETAS, números, setas e contornos tracejados ficam aqui, por código, por cima da imagem:
    nunca saem com erro de português, dá para mudar o texto sem refazer o desenho.
A imagem fica em img/cenas/<apostila>/<missão>.webp (1536 × 1024, leve). A cena entra no TOPO da
primeira página da missão (âncora vazia → "ilu-topo").
"""
from base import COR, esc, FONTE

W, H = 1536, 1024


def _num(x, y, n, cor, r=30):
    c = COR[cor]
    return (f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}" stroke="#fff" stroke-width="5"/>'
            f'<text x="{x}" y="{y + r * 0.42}" font-family="{FONTE}" font-size="{r * 1.25:.0f}" font-weight="900" '
            f'text-anchor="middle" fill="#fff">{esc(n)}</text>')


def etiqueta(x, y, w, cor, titulo, linhas=(), n=None):
    """Cartão branco com borda colorida: número (opcional), título em negrito e até 2 linhas curtas."""
    h = 74 + 44 * len(linhas)
    c = COR[cor]
    s = [f'<rect x="{x + 6}" y="{y + 8}" width="{w}" height="{h}" rx="20" fill="#000" opacity=".2"/>',
         f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="20" fill="#fff" stroke="{c}" stroke-width="6"/>']
    tx = x + 28
    if n is not None:
        s.append(_num(x + 50, y + 42, n, cor))
        tx = x + 96
    s.append(f'<text x="{tx}" y="{y + 56}" font-family="{FONTE}" font-size="42" font-weight="900" fill="{COR["tinta"]}">{esc(titulo)}</text>')
    for i, l in enumerate(linhas):
        s.append(f'<text x="{x + 28}" y="{y + 104 + 44 * i}" font-family="{FONTE}" font-size="34" font-weight="600" fill="{COR["tinta"]}">{esc(l)}</text>')
    return "".join(s)


def seta(x1, y1, x2, y2, cor, curva=0):
    c = COR[cor]
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    d = f"M{x1} {y1} Q{mx + curva} {my} {x2} {y2}" if curva else f"M{x1} {y1} L{x2} {y2}"
    return (f'<path d="{d}" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity=".85"/>'
            f'<path d="{d}" fill="none" stroke="{c}" stroke-width="8" stroke-linecap="round" marker-end="url(#p27-{cor})"/>')


def contorno(x, y, w, h, cor, rx=22):
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="none" stroke="#fff" stroke-width="12" opacity=".8"/>'
            f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="none" stroke="{COR[cor]}" stroke-width="7" stroke-dasharray="22 14"/>')


def balao(x, y, w, texto, cor="tinta", ponta=None):
    """Balão de fala com UMA linha curta (o desenho da IA não tem texto; a fala vem daqui)."""
    h = 78
    s = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="38" fill="#fff" stroke="{COR[cor]}" stroke-width="6"/>'
    if ponta:
        px, py = ponta
        bx = min(max(px, x + 40), x + w - 40)
        s = (f'<path d="M{bx - 22} {y + h - 4} L{px} {py} L{bx + 22} {y + h - 4} Z" fill="#fff" stroke="{COR[cor]}" stroke-width="6" stroke-linejoin="round"/>'
             + s + f'<rect x="{bx - 26}" y="{y + h - 12}" width="52" height="12" fill="#fff"/>')
    s += (f'<text x="{x + w / 2}" y="{y + 52}" font-family="{FONTE}" font-size="36" font-weight="800" '
          f'text-anchor="middle" fill="{COR["tinta"]}">{esc(texto)}</text>')
    return s


def figura_cena(aid, missao, rotulo, camada, legenda):
    img = f"img/cenas/{aid}/{missao}.webp"
    return (f'<figure class="cena-ia"><svg role="img" aria-label="{esc(rotulo)}" viewBox="0 0 {W} {H}" '
            f'xmlns="http://www.w3.org/2000/svg"><image href="{img}" width="{W}" height="{H}"/>'
            f'{camada}</svg><figcaption>{esc(legenda)}</figcaption></figure>')


def cenas(aid, lista):
    """lista: [(missao, rotulo, camada_svg, legenda)] → figuras com âncora vazia (vão para o topo da missão)."""
    return [{"missao": m, "pagina": "comecar", "ancora": "", "rotulo": r, "html": figura_cena(aid, m, r, c, l)}
            for (m, r, c, l) in lista]


def figura_foto(src, w, h, rotulo, camada, legenda, credito):
    """📷 Foto real com licença livre (19/11/2026, ideia do professor): a foto vem do Wikimedia Commons (ou é do
    professor), a camada que ensina é feita por código e o crédito (autor · site · licença) fica sempre embaixo."""
    return (f'<figure class="cena-ia foto-real"><svg role="img" aria-label="{esc(rotulo)}" viewBox="0 0 {w} {h}" '
            f'xmlns="http://www.w3.org/2000/svg"><image href="{src}" width="{w}" height="{h}"/>'
            f'{camada}</svg><figcaption>{esc(legenda)}<br><small>📷 {esc(credito)}</small></figcaption></figure>')


def foto_cabo_submarino(missao):
    """Cabo submarino saindo do mar e chegando à praia (Ilhas Crozet). Usada no 8º 2º bim M3 e no 6º 4º bim M2."""
    camada = (contorno(470, 500, 1060, 230, "amarelo", 60)
              + etiqueta(520, 880, 640, "amarelo", "Cabo submarino", ["sai do mar e chega à terra"])
              + seta(840, 874, 940, 740, "amarelo")
              + etiqueta(40, 150, 300, "azul", "🌊 Mar")
              + seta(190, 230, 440, 560, "azul", curva=-60)
              + etiqueta(1200, 1010, 300, "verde", "🏖️ Praia"))
    return {"missao": missao, "pagina": "comecar", "ancora": "",
            "rotulo": "Foto real: um cabo grosso e escuro sai do mar e atravessa a praia de areia preta, entre pinguins, nas Ilhas Crozet. Etiquetas mostram o mar, a praia e o cabo submarino.",
            "html": figura_foto("img/fotos/cabo-submarino-praia-crozet.webp", 1536, 1152,
                                "Foto real de um cabo submarino chegando à praia",
                                camada,
                                "Um cabo submarino de verdade saindo do mar e chegando à praia, nas Ilhas Crozet (no Oceano Índico). Este leva os dados de uma estação de pesquisa; os cabos da internet chegam à terra de um jeito parecido.",
                                "Foto: CTBTO Preparatory Commission (The Official CTBTO Photostream) · Wikimedia Commons · licença CC BY 2.0")}
