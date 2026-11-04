#!/usr/bin/env python3
"""
Extrai as ilustrações (SVG) das APOSTILAS ILUSTRADAS e gera
dados/ilustracoes/<id>.js para o portal.

Uso: python3 ferramentas/extrair_ilustracoes.py
Entrada: fontes/ilustradas/<serie>/index.html  (página da apostila ilustrada)
Precisa da biblioteca beautifulsoup4 (pip install beautifulsoup4).

Para cada figura, guarda: a missão, a página do portal onde ela entra
(comecar, termos, onde, basico, desafio, turbo, vf, resumo) e um
"âncora" (o texto que vem logo antes dela), para o portal colocá-la
no mesmo ponto da leitura ou junto da atividade correspondente.
"""
import json, os, re
from bs4 import BeautifulSoup

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERIES = {"5": "informatica-5ano-4bim", "6": "informatica-6ano-4bim", "7": "informatica-7ano-4bim",
          "8": "informatica-8ano-4bim", "9": "informatica-9ano-4bim"}


def texto(el, n=90):
    return re.sub(r"\s+", " ", el.get_text(" ", strip=True))[:n] if el else ""


def ancora(fig):
    """Texto do bloco que vem logo antes da figura."""
    el = fig
    while el is not None:
        prev = el.find_previous_sibling()
        while prev is not None and not texto(prev):
            prev = prev.find_previous_sibling()
        if prev is not None:
            if prev.name == "figure" or prev.find("figure"):
                return ""  # duas figuras seguidas: a segunda vai junto da primeira
            return texto(prev)
        el = el.parent
        if el is None or (el.get("class") and "sheet" in el.get("class")):
            return ""
    return ""


def processar(serie, aid):
    caminho = os.path.join(RAIZ, "fontes", "ilustradas", serie, "index.html")
    soup = BeautifulSoup(open(caminho, encoding="utf-8").read(), "html.parser")
    defs = soup.find("defs")
    defs_html = str(defs.parent) if defs else ""
    defs_html = re.sub(r'<svg[^>]*>', '<svg width="0" height="0" style="position:absolute" aria-hidden="true">', defs_html, count=1)
    masc = soup.select_one("svg.mascot")
    out = {"defs": defs_html, "mascote": str(masc) if masc else "", "icones": {}, "figuras": []}

    missao, fase, nivel = None, "capa", ""
    for el in soup.find_all(True):
        cls = el.get("class") or []
        if el.name == "div" and "mhead" in cls:
            eb = texto(el.select_one(".eyebrow"))
            m = re.search(r"Missão\s+(\d+)", eb)
            missao = "m" + m.group(1) if m else ("pf" if "Projeto" in eb or "Passaporte" in texto(el) else missao)
            fase, nivel = "inicio", ""
            ic = el.select_one(".mnum svg")
            if ic is not None and missao:
                out["icones"][missao] = str(ic)
        elif el.name == "h3":
            t = texto(el).lower()
            if "para começar" in t: fase = "comecar"
            elif "o que significa" in t: fase = "termos"
            elif "onde eu uso" in t and fase != "missao": fase = "onde"
            elif t.startswith("missão") or "missão final" in t: fase, nivel = "missao", ""
            elif "perguntas rápidas" in t: fase = "vf"
            elif "resumo" in t: fase = "resumo"
            elif "autoavalia" in t: fase = "auto"
            elif "carimbo" in t: pass
        elif el.name == "div" and "level" in cls:
            t = texto(el).lower()
            nivel = "turbo" if "turbo" in t else "desafio" if "desafio" in t else "basico"
        elif el.name == "figure" and missao:
            pagina = {"inicio": "comecar", "missao": nivel or "basico"}.get(fase, fase)
            if fase == "missao" and not nivel: pagina = "basico"
            svg = el.find("svg")
            out["figuras"].append({
                "missao": missao, "pagina": pagina, "ancora": ancora(el),
                "rotulo": (svg.get("aria-label") if svg else "") or texto(el.find("figcaption")),
                "html": str(el)})
    destino = os.path.join(RAIZ, "dados", "ilustracoes", aid + ".js")
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    js = ("/* Ilustrações da Apostila Ilustrada — gerado por ferramentas/extrair_ilustracoes.py.\n"
          "   Professor Welington Laignier. */\nPORTAL.registrarIlustracoes(%s, %s);\n") % (json.dumps(aid), json.dumps(out, ensure_ascii=False))
    open(destino, "w", encoding="utf-8").write(js)
    resumo = {}
    for f in out["figuras"]:
        resumo.setdefault(f["missao"] + "/" + f["pagina"], 0)
        resumo[f["missao"] + "/" + f["pagina"]] += 1
    print(aid, len(out["figuras"]), "figuras", resumo, "ícones:", sorted(out["icones"]))


if __name__ == "__main__":
    for s, aid in SERIES.items():
        if os.path.exists(os.path.join(RAIZ, "fontes", "ilustradas", s, "index.html")):
            processar(s, aid)
