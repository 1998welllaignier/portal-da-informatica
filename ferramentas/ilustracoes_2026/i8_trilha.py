"""Trilha do 8º ano 2026: os desenhos próprios da trilha, agora coloridos (cada desenho ganha a cor da sua ideia:
   partes cinza viram o tom claro da cor; destaques pretos viram a cor forte). Fonte: trilha8_original.js."""
import re, json, os
from comum import COR, AQUI, _b
raiz = os.path.dirname(os.path.dirname(AQUI))
src = open(os.path.join(AQUI, "trilha8_original.js"), encoding="utf-8").read()
d = json.loads(src[src.index("{", src.index("registrarIlustracoes")):src.rindex(")")])
TEMA = ["azul", "verde", "amarelo", "ciano", "ciano", "roxo", "roxo", "verde", "vermelho", "verde"]
def recolor(h, cor):
    h = h.replace('fill="#d6dade"', f'fill="{COR[cor+"_c"]}"').replace('stroke="#d6dade"', f'stroke="{COR[cor+"_c"]}"')
    h = h.replace('fill="#9aa1a8"', f'fill="{COR[cor]}"').replace('stroke="#9aa1a8"', f'stroke="{COR[cor]}"')
    h = re.sub(r'<(rect|circle|ellipse|polygon)([^>]*?)fill="#1c1f22"', lambda m: f'<{m.group(1)}{m.group(2)}fill="{COR[cor]}"', h)
    h = re.sub(r'(<g[^>]*?)stroke="#1c1f22"', lambda m: m.group(1) + f'stroke="{COR[cor]}"', h)
    h = h.replace('fill="#1c1f22"/></marker>', f'fill="{COR[cor]}"/></marker>')
    return h
for i, f in enumerate(d["figuras"]): f["html"] = recolor(f["html"], TEMA[i])
from cenas_2026 import CENAS  # 🎬 cena de abertura da Missão 4 (20/11/2026), a mesma da apostila regular
d["figuras"] = CENAS("informatica-8ano-4bim-trilha") + d["figuras"]
d["defs"] = _b.defs(); d["mascote"] = _b.mascote()
d["icones"] = {k: _b.icone(v) for k, v in {"m1": "🔎", "m2": "☁️", "m3": "🕵️", "m4": "📜", "pf": "🏁"}.items()}
open(os.path.join(raiz, "dados", "ilustracoes", "informatica-8ano-4bim-trilha.js"), "w", encoding="utf-8").write(
    "/* Ilustrações coloridas da trilha do 8º ano 2026 — gerado por ferramentas/ilustracoes_2026/i8_trilha.py (não edite à mão). */\n"
    f"PORTAL.registrarIlustracoes(\"informatica-8ano-4bim-trilha\", {json.dumps(d, ensure_ascii=False)});\n")
print("8º trilha:", len(d["figuras"]))
