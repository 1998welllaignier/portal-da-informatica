#!/usr/bin/env python3
"""
Gera os arquivos de CONTEÚDO DE LEITURA do portal a partir das apostilas em
Markdown (pasta fontes/). Uso:  python3 ferramentas/gerar_conteudo.py

Para cada apostila fontes/<id>.md cria dados/conteudo/<id>.js com:
  - capa e "Como usar"
  - por missão: objetivo, Para começar, O que significa?, Onde eu uso isso?,
    avisos, Perguntas rápidas (frases), Resumo da Aula e palavras-chave,
    autoavaliação (projeto final)
As ATIVIDADES interativas ficam à parte, em dados/atividades/<id>.js
(escritas à mão), para que o conteúdo possa ser regenerado sem perdê-las.
"""
import html, json, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTES = os.path.join(RAIZ, "fontes")
SAIDA = os.path.join(RAIZ, "dados", "conteudo")

EMOJI_RE = re.compile(r"^([^\w\s(«“\"']+)\s*", re.U)


def inline(t):
    t = html.escape(t.strip(), quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    return t


def plain(t):
    return re.sub(r"\*+", "", t).strip()


def parse_blocks(lines):
    """Converte linhas de markdown simples em blocos."""
    blocks, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1
            continue
        if ln.lstrip().startswith("|"):
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                rows.append(cells)
                i += 1
            blocks.append({"t": "tabela", "cab": [inline(c) for c in rows[0]],
                           "linhas": [[inline(c) for c in r] for r in rows[1:]]})
            continue
        m = re.match(r"^(\s*)(- \[ \] |- |\d+\. )(.*)$", ln)
        if m:
            itens, ordenada = [], m.group(2)[0].isdigit()
            while i < len(lines):
                mm = re.match(r"^(\s*)(- \[ \] |- |\d+\. )(.*)$", lines[i])
                if not mm:
                    break
                itens.append({"nivel": len(mm.group(1)) // 2, "h": inline(mm.group(3))})
                i += 1
            blocks.append({"t": "lista", "ord": ordenada, "itens": itens})
            continue
        blocks.append({"t": "p", "h": inline(ln)})
        i += 1
    return blocks


def split_sections(lines, level):
    """Divide em seções pelo cabeçalho de nível dado (## ou ###)."""
    pref = "#" * level + " "
    secs, cur = [], None
    for ln in lines:
        if ln.startswith(pref):
            cur = {"titulo": ln[len(pref):].strip(), "linhas": []}
            secs.append(cur)
        elif cur is not None:
            cur["linhas"].append(ln)
    return secs


def parse_termos(lines):
    termos = []
    for ln in lines:
        m = re.match(r"^\s*- (.*)$", ln)
        if not m:
            continue
        txt = m.group(1).strip()
        # termo = do início até o primeiro ": " fora de parênteses
        depth, cut = 0, -1
        for k, ch in enumerate(txt):
            if ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1
            elif ch == ":" and depth == 0:
                cut = k
                break
        if cut < 0:
            continue
        termo, defin = txt[:cut], txt[cut + 1:]
        # casos em que o ':' ficou dentro do negrito: "**Cyberbullying***: ...*"
        termo_html = inline(termo.replace("***", "**"))
        nucleo = re.findall(r"\*\*(.+?)\*\*", termo)
        termos.append({
            "termo": plain(nucleo[0]) if nucleo else plain(termo),
            "rotulo": termo_html,
            "def": inline(defin.strip().replace("*", "", 1) if termo.endswith("***") else defin.strip()),
        })
    return termos


def parse_vf(lines):
    itens = []
    for ln in lines:
        m = re.match(r"^\s*(?:- |\d+\. )\(\s*\)\s*(.*)$", ln)
        if m:
            itens.append(m.group(1).strip())
    return itens


def parse_resumo(lines):
    texto, chaves = [], []
    for ln in lines:
        if not ln.strip():
            continue
        if ln.startswith("**Palavras-chave:**"):
            chaves = [c.strip() for c in ln.split("**", 2)[2].split("·")]
        else:
            texto.append(ln.strip())
    return {"texto": " ".join(texto), "chaves": chaves}


def missao_id(titulo, idx):
    m = re.search(r"Missão\s+(\d+)", titulo)
    if m:
        return "m" + m.group(1)
    if "Projeto final" in titulo:
        return "pf"
    return "s%d" % idx


def parse_apostila(path):
    lines = open(path, encoding="utf-8").read().splitlines()
    titulo = lines[0].lstrip("# ").strip()
    secs = split_sections(lines, 2)
    out = {"titulo": titulo, "comoUsar": [], "missoes": []}
    for idx, s in enumerate(secs):
        t = s["titulo"]
        if "Quadro de notas" in t:
            continue
        if "Como usar" in t:
            out["comoUsar"] = parse_blocks(s["linhas"])
            continue
        em = EMOJI_RE.match(t)
        icone = em.group(1).strip() if em else ""
        nome = t[em.end():] if em else t
        mis = {"id": missao_id(t, idx), "icone": icone, "titulo": nome,
               "objetivo": "", "comecar": [], "termos": [], "ondeUso": {"itens": [], "reflexao": ""},
               "alertas": [], "vf": [], "resumo": None, "autoavaliacao": []}
        pre = []
        for ln in s["linhas"]:
            if ln.startswith("### "):
                break
            pre.append(ln)
        for ln in pre:
            if ln.startswith("**Objetivo:**"):
                mis["objetivo"] = inline(ln.split("**", 2)[2])
        for ln in s["linhas"]:
            if ln.startswith("⚠️"):
                mis["alertas"].append(inline(ln[2:].strip()))
        for sub in split_sections(s["linhas"], 3):
            st = sub["titulo"]
            if "Para começar" in st:
                mis["comecar"] = parse_blocks(sub["linhas"])
            elif "O que significa" in st:
                mis["termos"] = parse_termos(sub["linhas"])
            elif "Onde eu uso" in st:
                for ln in sub["linhas"]:
                    m = re.match(r"^\s*- (.*)$", ln)
                    if m:
                        mis["ondeUso"]["itens"].append(inline(m.group(1)))
                    elif ln.startswith("| ✍️"):
                        mis["ondeUso"]["reflexao"] = inline(ln.strip("| ").replace("✍️", "").strip())
            elif "Perguntas rápidas" in st:
                mis["vf"] = parse_vf(sub["linhas"])
            elif "Resumo" in st:
                mis["resumo"] = parse_resumo(sub["linhas"])
            elif "Autoavaliação" in st:
                mis["autoavaliacao"] = [inline(re.sub(r"^\s*- (\[ \] )?", "", l))
                                        for l in sub["linhas"] if l.strip().startswith("-")]
        out["missoes"].append(mis)
    return out


def main():
    os.makedirs(SAIDA, exist_ok=True)
    for nome in sorted(os.listdir(FONTES)):
        if not nome.endswith(".md"):
            continue
        aid = nome[:-3]
        dados = parse_apostila(os.path.join(FONTES, nome))
        js = ("/* Gerado automaticamente por ferramentas/gerar_conteudo.py a partir de fontes/%s.\n"
              "   Para mudar o texto, edite a fonte e rode o script de novo. */\n"
              "PORTAL.registrarConteudo(%s, %s);\n") % (
            nome, json.dumps(aid), json.dumps(dados, ensure_ascii=False, indent=1))
        open(os.path.join(SAIDA, aid + ".js"), "w", encoding="utf-8").write(js)
        resumo = ", ".join("%s(%d termos, %d V/F)" % (m["id"], len(m["termos"]), len(m["vf"])) for m in dados["missoes"])
        print(aid, "→", resumo)


if __name__ == "__main__":
    main()
