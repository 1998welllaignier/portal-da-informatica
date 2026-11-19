"""Desenhos das 👣 Trilhas Passo a Passo de 2027: reaproveita as figuras da apostila da turma
   cuja âncora (tabela ou frase) também aparece no texto da trilha.
   Uso: python3 trilha.py 6 [bimestre]   (ex.: "trilha.py 6 2" gera dados/ilustracoes/informatica-6ano-2027-2bim-trilha.js; sem bimestre = 1)"""
import sys, importlib, re, unicodedata, os, json
from base import gerar
serie = sys.argv[1]
bim = sys.argv[2] if len(sys.argv) > 2 else "1"
mod = importlib.import_module(f"i{serie}_{bim}")
raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
aid = f"informatica-{serie}ano-2027-{bim}bim-trilha"
def so(s):
    s = unicodedata.normalize("NFD", re.sub(r"<[^>]+>", " ", s)).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z]", "", s)
txt = open(os.path.join(raiz, "dados", "conteudo", aid + ".js"), encoding="utf-8").read()
txt = re.sub(r'"[a-zA-Z]+":', " ", txt)
txt = so(re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), txt))
F = [f for f in mod.F if so(f["ancora"])[:40] in txt]
fora = [f["ancora"][:50] for f in mod.F if f not in F]
print("figuras:", gerar(aid, F, mod.ICONES), "| ficaram de fora:", fora)
