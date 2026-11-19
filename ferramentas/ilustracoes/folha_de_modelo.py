"""Gera a folha de modelo (model sheet) da turma e do professor: python3 folha_de_modelo.py saida.html"""
import sys
from biblioteca import *

def folha():
    W, H = 1100, 1060
    o = [f'<rect width="{W}" height="{H}" fill="#fffaf2"/>']
    o.append(f'<text x="{W/2}" y="40" font-size="26" font-weight="800" text-anchor="middle" fill="{TINTA}">Turma fixa do Portal da Informática — folha de modelo (Estilo B)</text>')
    # linha 1: a turma de frente, feliz
    for i, k in enumerate(TURMA):
        x = 110 + i * 190
        o.append(aluno(k, x, 330))
        o.append(f'<text x="{x}" y="362" font-size="18" font-weight="800" text-anchor="middle" fill="{TINTA}">{TURMA[k]["nome"]}</text>')
    o.append(professor(1030 - 20, 330, .95))
    o.append(f'<text x="1010" y="362" font-size="18" font-weight="800" text-anchor="middle" fill="{TINTA}">Professor</text>')
    # linha 2: expressões e poses
    poses = [("bia", "feliz", ("acima", "acima"), "comemorando"), ("davi", "pensando", ("normal", "queixo"), "pensando"),
             ("lara", "surpreso", ("normal", "normal"), "surpresa"), ("kaua", "piscando", ("normal", "apontar"), "apontando"),
             ("yara", "preocupado", ("normal", "normal"), "preocupada")]
    o.append(f'<text x="30" y="420" font-size="18" font-weight="800" fill="{COR["azul"]}">Expressões e poses (o boneco reage ao conteúdo)</text>')
    for i, (k, e, b, rot) in enumerate(poses):
        x = 110 + i * 190
        o.append(aluno(k, x, 720, expr=e, bracos=b))
        o.append(f'<text x="{x}" y="752" font-size="15" text-anchor="middle" fill="{TINTA}">{rot}</text>')
    o.append(professor(1010, 720, .95, bracos=("normal", "apontar"), espelhar=True))
    o.append(f'<text x="1010" y="752" font-size="15" text-anchor="middle" fill="{TINTA}">explicando</text>')
    # linha 3: objetos
    o.append(f'<text x="30" y="800" font-size="18" font-weight="800" fill="{COR["azul"]}">Objetos de informática</text>')
    o.append(monitor(30, 820, .8) + gabinete(230, 836, .9) + caixa_som(310, 900) + teclado(360, 960) + mouse(560, 966, 1.2) + impressora(610, 890)
             + microfone(760, 920) + processador(810, 900, 1.2) + ssd(890, 910, 1.2) + certo(1010, 920, 20) + errado(1060, 920, 20))
    return cena_svg(W, H, "".join(o), marcadores())

open(sys.argv[1] if len(sys.argv) > 1 else "folha.html", "w").write(f'<!doctype html><meta charset=utf-8><body style="margin:0"><div style="width:1100px">{folha()}</div>')
