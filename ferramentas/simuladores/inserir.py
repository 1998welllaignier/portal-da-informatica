"""Insere uma atividade (texto JS) no começo de uma seção de uma missão de um arquivo de atividades.
uso como módulo: inserir(caminho, "m4", "pratica", bloco_js, marcador)  — não insere de novo se o marcador já existir."""
import re
def inserir(p, missao, secao, bloco, marcador):
    s = open(p).read()
    if marcador in s: return "já tinha"
    m = re.search(r"\n  %s: \{" % re.escape(missao), s)
    assert m, (p, missao)
    fim = s.find("\n  m", m.end()); fim = len(s) if fim < 0 else fim
    k = s.find("    %s: [" % secao, m.end(), fim)
    if k < 0:  # seção não existe: cria antes de basico
        k2 = s.find("    basico: [", m.end(), fim); assert k2 > 0, (p, missao, secao)
        s = s[:k2] + "    %s: [\n%s\n    ],\n" % (secao, bloco.rstrip().rstrip(",")) + s[k2:]
    else:
        k = s.find("[", k) + 1
        s = s[:k] + "\n" + bloco.rstrip().rstrip(",") + "," + s[k:]
    open(p, "w").write(s); return "ok"
