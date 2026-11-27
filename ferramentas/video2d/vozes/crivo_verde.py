"""🟢🔴 Crivo em duas cores (27/11/2026, combinado com o professor).
Quando a voz Gemini fala uma ou duas palavras diferentes do roteiro, em vez de gerar a voz de novo:
  🟢 VERDE  (aceita): palavrinha de ligação a mais ("então", "aí", "bem"…), palavrinha de ligação a menos,
           ou grafia/forma muito parecida ("esse"/"este", "pra"/"para") — o texto do vídeo e a legenda
           passam a mostrar exatamente o que a voz falou;
  🔴 VERMELHO (gera de novo): qualquer coisa que mude o sentido, termo técnico, número, nome,
           palavra que dispara efeito/placa no vídeo (gatilho), começo de frase, ou mais de 2 palavras.
Na dúvida, é VERMELHO. Nada é aceito se a escuta não for confirmada pelas duas transcrições (small e turbo)."""
import re, difflib, unicodedata, os

FILLER_MAIS = {"e", "entao", "ai", "agora", "bem", "ne", "olha", "la", "tambem", "mesmo", "ja", "assim", "pois"}
FILLER_MENOS = {"entao", "bem", "ai", "ne", "olha"}
IGNORAR = {"e", "o", "a", "as", "os", "ao", "aos", "de", "da", "do", "das", "dos", "no", "na", "em", "um", "uma", "1"}   # o mesmo do narrar.py
NUMEROS = {"zero", "um", "uma", "dois", "duas", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quatorze",
           "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa",
           "cem", "cento", "duzentos", "trezentos", "mil", "primeiro", "segundo", "terceiro"}
NEGACAO = {"nao", "nunca", "nem", "nada", "ninguem", "jamais", "sem", "so", "apenas"}   # mudam o sentido: nunca são verdes
MAX_PALAVRAS = 2
AQUI = os.path.dirname(os.path.abspath(__file__))

def sem_acento(s): return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
def norm(w): return sem_acento(w.lower())
def palavras(s):
    s = re.sub(r"\[[^\]]*\]", lambda m: " " * len(m.group(0)), s)   # tira as direções de emoção sem mudar as posições
    return [(m.group(0), m.start(), m.end()) for m in re.finditer(r"[0-9A-Za-zÀ-ÖØ-öø-ÿ]+(?:-[0-9A-Za-zÀ-ÖØ-öø-ÿ]+)*", s)]
def protegidas():
    f = os.path.join(AQUI, "protegidas.txt")
    return {norm(l.strip()) for l in open(f, encoding="utf-8") if l.strip() and not l.startswith("#")} if os.path.exists(f) else set()

def inicio_de_frase(texto, pos):
    antes = re.sub(r"\[[^\]]*\]", "", texto[:pos]).rstrip()
    return not antes or antes[-1] in ".!?:…"

def classificar(fala, ouvido, gatilhos=(), prot=None):
    """fala: texto do roteiro (sem direções). ouvido: transcrição (turbo).
    Devolve (verdes, vermelhos): verdes = lista de edições {"ini","fim","novo","de","para"} na fala."""
    prot = protegidas() if prot is None else prot
    A, B = palavras(fala), palavras(ouvido)
    a, b = [norm(w) for w, _, _ in A], [norm(w) for w, _, _ in B]
    verdes, vermelhos, total = [], [], 0
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op == "equal": continue
        x, y = a[i1:i2], b[j1:j2]
        if set(x) | set(y) <= IGNORAR: continue                                         # artigos/preposições que a escuta come ou acrescenta: fica o texto do roteiro
        if "".join(x) == "".join(y): continue                                           # sigla soletrada × junta
        if op == "replace" and len(x) == len(y) and all(difflib.SequenceMatcher(None, p, q).ratio() > .7 for p, q in zip(x, y)) and not (set(x) | set(y)) & (NEGACAO | NUMEROS): continue   # grafia parecida: fica o texto do roteiro
        de, para = " ".join(w for w, _, _ in A[i1:i2]), " ".join(w for w, _, _ in B[j1:j2])
        motivo = None
        sens = set(x) | set(y)
        if any(re.search(r"\d", w) for w in sens) or sens & NUMEROS: motivo = "número"
        elif sens & NEGACAO: motivo = "muda o sentido (negação/só)"
        elif sens & prot: motivo = "termo protegido"
        elif any(A[k][0][:1].isupper() and not inicio_de_frase(fala, A[k][1]) for k in range(i1, i2)) or any(B[k][0][:1].isupper() and not (k == 0 or inicio_de_frase(ouvido, B[k][1])) for k in range(j1, j2)): motivo = "nome próprio"
        elif op == "insert":
            if not set(y) <= FILLER_MAIS: motivo = "palavra nova que não é de ligação"
            elif i1 < len(A) and inicio_de_frase(fala, A[i1][1]) or i1 == 0: motivo = "começo de frase"
        elif op == "delete":
            if not set(x) <= FILLER_MENOS: motivo = "palavra importante faltando"
            elif inicio_de_frase(fala, A[i1][1]): motivo = "começo de frase"
        else:  # replace
            if not (len(x) == len(y) and len(x) <= MAX_PALAVRAS and all(difflib.SequenceMatcher(None, p, q).ratio() >= .6 for p, q in zip(x, y))): motivo = "troca de palavra"
        if motivo is None:
            n = max(len(x), len(y)); total += n
            if total > MAX_PALAVRAS: motivo = "mais de 2 palavras diferentes na cena"
        if motivo: vermelhos.append({"op": op, "texto": de, "ouvido": para, "motivo": motivo}); continue
        if op == "insert":
            p = A[i1][1] if i1 < len(A) else len(fala.rstrip(" .!?…"))
            novo = para + " " if i1 < len(A) else " " + para
            verdes.append({"ini": p, "fim": p, "novo": novo, "de": "", "para": para})
        elif op == "delete":
            ini, fim = A[i1][1], A[i2 - 1][2]
            while fim < len(fala) and fala[fim] == " ": fim += 1
            verdes.append({"ini": ini, "fim": fim, "novo": "", "de": de, "para": ""})
        else:
            novo = para[0].upper() + para[1:] if A[i1][0][:1].isupper() else para.lower()
            verdes.append({"ini": A[i1][1], "fim": A[i2 - 1][2], "novo": novo, "de": de, "para": novo})
    if verdes and not vermelhos:
        nova = aplicar(fala, verdes); nn = " " + " ".join(norm(w) for w, _, _ in palavras(nova)) + " "
        for g in gatilhos:   # palavra que dispara efeito/placa precisa continuar igual
            gg = " ".join(norm(w) for w, _, _ in palavras(g))
            if gg and (" " + gg + " ") not in nn and gg not in nn: vermelhos.append({"op": "gatilho", "texto": g, "ouvido": "", "motivo": "gatilho de efeito/placa mudou"})
        de_toc = {norm(w) for v in verdes for w, _, _ in palavras(v["de"])}
        for g in gatilhos:
            if de_toc & {norm(w) for w, _, _ in palavras(g)}: vermelhos.append({"op": "gatilho", "texto": g, "ouvido": "", "motivo": "palavra de gatilho trocada"})
    return verdes, vermelhos

def aplicar(texto, verdes):
    for v in sorted(verdes, key=lambda v: v["ini"], reverse=True): texto = texto[:v["ini"]] + v["novo"] + texto[v["fim"]:]
    texto = re.sub(r",\s*,", ",", texto); texto = re.sub(r"\s+([,.!?:;…])", r"\1", texto); texto = re.sub(r"([.!?:])\s*,", r"\1", texto)
    return re.sub(r"  +", " ", texto).strip()

def gatilhos_da_cena(html, i):
    """palavras usadas em em(Fi, "…") no cenas.js/video.html (disparam efeitos, placas e destaques)."""
    return re.findall(r'\bem\(\s*F%d\s*,\s*"((?:[^"\\]|\\.)*)"' % i, html)

def aplicar_em(outro, fala_antiga, verdes, ctx=18):
    """aplica as mesmas edições num outro texto parecido (legenda própria, ou texto com direções de emoção [..]).
    Procura cada trecho (com um pouco de contexto) no texto SEM as direções; precisa aparecer UMA vez só.
    Se não achar com certeza, devolve None (aí a cena vira vermelha e a voz é gerada de novo)."""
    for v in sorted(verdes, key=lambda v: v["ini"], reverse=True):
        mapa, limpo = [], []
        k = 0
        while k < len(outro):
            m = re.match(r"\[[^\]]*\]\s*", outro[k:])
            if m: k += m.end(); continue
            mapa.append(k); limpo.append(outro[k]); k += 1
        limpo = "".join(limpo)
        esq, ant, dir_ = fala_antiga[max(0, v["ini"] - ctx):v["ini"]], fala_antiga[v["ini"]:v["fim"]], fala_antiga[v["fim"]:v["fim"] + ctx]
        chave = esq + ant + dir_
        if limpo.count(chave) != 1: return None
        p = limpo.index(chave) + len(esq); q = p + len(ant)
        o_ini = mapa[p] if p < len(mapa) else len(outro)
        o_fim = (mapa[q - 1] + 1) if ant else o_ini
        outro = outro[:o_ini] + v["novo"] + outro[o_fim:]
    return aplicar(outro, [])
