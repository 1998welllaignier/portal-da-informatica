"""⭐ Aula especial "Meu papel de parede" (15/11/2026): a mesma aula para o 6º, 7º, 8º e 9º ano.
   Modelos: papel-de-parede.md (texto), atividades.js e roteiro.js (com {AID} e {SERIE}).
   Uso: python3 ferramentas/aula_especial/gerar.py  →  depois python3 ferramentas/gerar_conteudo.py"""
import os
AQUI = os.path.dirname(os.path.abspath(__file__)); R = os.path.dirname(os.path.dirname(AQUI))
md = open(os.path.join(AQUI, "papel-de-parede.md"), encoding="utf-8").read()
at = open(os.path.join(AQUI, "atividades.js"), encoding="utf-8").read()
ro = open(os.path.join(AQUI, "roteiro.js"), encoding="utf-8").read()
for s in "6789":
    aid = f"informatica-{s}ano-papel-de-parede"
    rep = lambda t: t.replace("{AID}", aid).replace("{SERIE}", f"{s}º Ano")
    open(os.path.join(R, "fontes", aid + ".md"), "w", encoding="utf-8").write(rep(md))
    open(os.path.join(R, "dados", "atividades", aid + ".js"), "w", encoding="utf-8").write(rep(at))
    open(os.path.join(R, "dados", "roteiros", aid + ".js"), "w", encoding="utf-8").write(rep(ro))
    print(aid)
