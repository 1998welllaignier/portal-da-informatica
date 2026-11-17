def R(paineis, passos, fim, sem_numero=False):
    """passos: (fala, painel, linha, marca[, espera]) ou (fala, painel, "#titulo", ...)"""
    out = []
    for p in passos:
        fala, painel, linha = p[0], p[1], p[2]; marca = len(p) > 3 and p[3]; d = {"fala": fala, "painel": painel}
        if linha is not None:
            if linha.startswith("#"): d["titulo"] = linha[1:]
            else: d["linha"] = linha
        if marca: d["marca"] = True
        if len(p) > 4: d["espera"] = p[4]
        out.append(d)
    r = {"paineis": paineis, "passos": out, "fim": fim}
    if sem_numero: r["semNumero"] = True
    return r

FRASE_TEMA = R(["✍️ Exemplo com outra matéria"], [
  ("Olha como eu escrevo uma boa frase, sobre <b>outra</b> matéria (Matemática):", 0, "#🧮 Frações"),
  ("Começo com letra maiúscula, uso uma <b>palavra-chave</b> do tema e termino com ponto final:", 0, "Aprendi que a fração mostra partes de um inteiro.", True, 2600)],
  "Agora é a sua vez: uma frase para cada tema, com uma palavra-chave dele! 💪")
