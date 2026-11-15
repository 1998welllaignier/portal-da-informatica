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


def _fecha(s, i):
    """i aponta para '['; devolve o índice do ']' correspondente (ignora textos entre aspas)."""
    d = 0; q = None; k = i
    while k < len(s):
        c = s[k]
        if q:
            if c == "\\": k += 2; continue
            if c == q: q = None
        elif c in "\"'`": q = c
        elif c in "[{(": d += 1
        elif c in "]})":
            d -= 1
            if d == 0: return k
        k += 1
    raise ValueError("colchete sem par")


def inserir_fim(p, missao, secao, bloco, marcador):
    """Acrescenta a atividade NO FIM da seção (não muda os ids das atividades que já existem:
    o progresso dos alunos usa a posição). Use sempre em apostila que já está em uso."""
    s = open(p).read()
    if marcador in s: return "já tinha"
    m = re.search(r"\n  %s: \{" % re.escape(missao), s)
    assert m, (p, missao)
    fimM = _fecha(s, s.index("{", m.start()))
    k = s.find("    %s: [" % secao, m.end(), fimM)
    if k < 0:
        k2 = s.find("    basico: [", m.end(), fimM); assert k2 > 0, (p, missao, secao)
        s = s[:k2] + "    %s: [\n%s\n    ],\n" % (secao, bloco.rstrip().rstrip(",")) + s[k2:]
    else:
        a = s.index("[", k); f = _fecha(s, a)
        antes = s[:f].rstrip()
        sep = "" if antes.endswith("[") or antes.endswith(",") else ","
        s = antes + sep + "\n" + bloco.rstrip().rstrip(",") + "\n    " + s[f:]
    open(p, "w").write(s); return "ok"
