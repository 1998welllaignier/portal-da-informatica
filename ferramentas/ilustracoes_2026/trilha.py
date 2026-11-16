"""Desenhos das 👣 Trilhas Passo a Passo de 2026: reaproveita os desenhos coloridos da apostila da turma
   cuja âncora também aparece no texto da trilha. Uso: python3 trilha.py 6"""
import sys, re, unicodedata, os, json, subprocess
import comum
serie = sys.argv[1]
raiz = os.path.dirname(os.path.dirname(AQUI)) if (AQUI := comum.AQUI) else ""
base, aid = f"informatica-{serie}ano-4bim", f"informatica-{serie}ano-4bim-trilha"
js = subprocess.run(["node", "-e", f'global.window=global;const I={{}};global.PORTAL={{registrarIlustracoes:(i,d)=>I[i]=d}};require("{raiz}/dados/ilustracoes/{base}.js");console.log(JSON.stringify(I["{base}"]))'], capture_output=True, text=True).stdout
d = json.loads(js)
def so(s):
    s = unicodedata.normalize("NFD", re.sub(r"<[^>]+>", " ", s)).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z]", "", s)
txt = open(os.path.join(raiz, "dados", "conteudo", aid + ".js"), encoding="utf-8").read()
txt = so(re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), re.sub(r'"[a-zA-Z]+":', " ", txt)))
F = [f for f in d["figuras"] if f["ancora"] and so(f["ancora"])[:40] in txt]
F += [f for f in d["figuras"] if f["pagina"] == "resumo" and f["missao"] == "pf"]
fora = [f["ancora"][:50] for f in d["figuras"] if f not in F]
d["figuras"] = F
open(os.path.join(raiz, "dados", "ilustracoes", aid + ".js"), "w", encoding="utf-8").write(
    "/* Ilustrações coloridas da trilha de 2026 — gerado por ferramentas/ilustracoes_2026/trilha.py (não edite à mão). */\n"
    f"PORTAL.registrarIlustracoes({json.dumps(aid)}, {json.dumps(d, ensure_ascii=False)});\n")
print(aid, "figuras:", len(F), "| de fora:", fora)
