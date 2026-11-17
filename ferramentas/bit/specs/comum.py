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
