"""Coloca o 🤖 Bit (robo: {...}) nas tarefas abertas e tabelas, a partir de specs/<apostila>.py.
uso: python3 ferramentas/bit/aplicar.py <apostila>   (ex.: informatica-7ano-4bim)
Cada spec: TITULO_DA_TAREFA -> R(paineis, passos, fim). O Bit mostra um exemplo DIFERENTE do pedido."""
import sys, json, os, importlib.util
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "specs")); aid = sys.argv[1]; raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
spec = importlib.util.spec_from_file_location("s", os.path.join(os.path.dirname(__file__), "specs", aid.replace("-", "_") + ".py")); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
p = os.path.join(raiz, "dados", "atividades", aid + ".js"); s = open(p, encoding="utf-8").read(); n = 0; falta = []
for tit, robos in m.BIT.items():
    chave = "titulo: " + json.dumps(tit, ensure_ascii=False) + ","
    if chave not in s: falta.append(tit); continue
    robos = robos if isinstance(robos, list) else [robos] * s.count(chave)   # lista = um Bit para cada ocorrência, em ordem
    pos = 0
    for robo in robos:
        i = s.find(chave, pos)
        if i == -1: break
        pos = i + len(chave); prox = s.find("titulo: ", pos)
        if "robo: {" in s[pos:pos + 12]: continue   # já tem Bit
        s = s[:pos] + " robo: " + json.dumps(robo, ensure_ascii=False) + "," + s[pos:]; n += 1; pos = s.find(chave, pos) if False else pos
open(p, "w", encoding="utf-8").write(s)
print(aid, "Bit colocado em", n, "tarefa(s)", "| não achei:", falta)
