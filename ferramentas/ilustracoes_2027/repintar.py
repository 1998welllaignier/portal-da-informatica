"""Passa o pincel LINHA CLARA (base.estilizar) num arquivo dados/ilustracoes/<aid>.js já gerado, sem regerar as figuras.
Uso: python3 repintar.py <aid> [<aid> ...]"""
import sys, os, json, re
from base import estilizar_fig
raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
for aid in sys.argv[1:]:
    p = os.path.join(raiz, "dados", "ilustracoes", aid + ".js"); s = open(p, encoding="utf-8").read()
    m = re.search(r'PORTAL\.registrarIlustracoes\(("[^"]+"), (.*)\);\s*$', s, re.S)
    d = json.loads(m.group(2)); d["figuras"] = [estilizar_fig(f) for f in d["figuras"]]
    open(p, "w", encoding="utf-8").write(s[:m.start()] + f"PORTAL.registrarIlustracoes({m.group(1)}, {json.dumps(d, ensure_ascii=False)});\n")
    print(aid, len(d["figuras"]))
