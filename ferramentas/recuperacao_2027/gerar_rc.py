"""📝 Atividade de recuperação de 2027 (1º bimestre): acrescenta a seção nas fontes e o bloco rc nas atividades.
   q<N>.py = perguntas da apostila da turma; t<N>.py = da Trilha Passo a Passo. Uso: python3 gerar_rc.py
   Depois: python3 ferramentas/gerar_conteudo.py e node ferramentas/verificar_autonomia.js <aid>."""
import json, runpy, sys, re
import os
AQUI = os.path.dirname(os.path.abspath(__file__))
R = os.path.dirname(os.path.dirname(AQUI))
D = AQUI
MD_BASE='''
## 📝 Atividade de recuperação
**Objetivo:** mostrar o que você aprendeu nas missões que a sua turma estudou e recuperar a nota do bimestre.
### 💡 Para começar
Esta atividade só aparece para quem o professor **liberou**. Ela vale **nota de 0 a 10**, que entra sozinha no boletim, no lugar da recuperação (quando for maior que a sua nota).
| Como funciona | O que quer dizer |
| 📚 Só as missões estudadas | O portal mostra só as missões que a sua turma estudou |
| 🎯 Vale nota | Atividade certa de primeira vale o ponto inteiro; cada erro tira um pouco |
| 🚫 Sem dica | Aqui não tem 💡 Dica nem 📘 resolução comentada: é a hora de mostrar o que você sabe |
| 🔎 Pode consultar | Antes de responder, abra a missão e releia o 💡 Para começar e o 🧠 Resumo da Aula |

**Dica de ouro:** leia com calma e só clique em **Verificar** quando tiver certeza.
'''
MD_TRILHA='''
## 📝 Atividade de recuperação
**Objetivo:** mostrar o que você aprendeu e recuperar a nota do bimestre.
### 💡 Para começar
Esta atividade só aparece quando o professor **libera** para você. Ela vale **nota de 0 a 10**.
- 📚 Tem só as missões que a sua turma estudou.
- 🎯 Certa de primeira vale o ponto inteiro; cada erro tira um pouco.
- 🚫 Aqui **não tem dica**: é a hora de mostrar o que você sabe.
- 🔎 Antes de responder, pode reler o 🧠 Resumo da Aula da missão.

**Dica de ouro:** leia com calma e só clique em **Verificar** quando tiver certeza.
'''
OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "lista_ops", "sequencial", "busca_binaria", "bolha", "arvore", "grafo_montar", "mensagens", "explorador_pastas", "rota"]
def js_str(x): return json.dumps(x, ensure_ascii=False)
for serie in "6789":
  for trilha in (False, True):
    aid=f"informatica-{serie}ano-2027-1bim"+("-trilha" if trilha else "")
    Q=runpy.run_path(f"{D}/{'t' if trilha else 'q'}{serie}.py")["Q"]
    md=f"{R}/fontes/{aid}.md"; s=open(md,encoding="utf-8").read()
    s=re.sub(r"\n## 📝 Atividade de recuperação.*\Z","",s,flags=re.S).rstrip("\n")+"\n"
    s+=MD_TRILHA if trilha else MD_BASE
    open(md,"w",encoding="utf-8").write(s)
    itens=[]; k=0
    for mid,(tema,qs) in Q.items():
      pergs=[]
      for (p,certo,err) in qs:
        ops=err[:]; pos=k % (len(err)+1); ops.insert(pos,certo); k+=1
        pergs.append({"p":p,"opcoes":ops,"certo":pos})
      expl=" · ".join(f"{p} → <strong>{c}</strong>" for (p,c,_) in qs)
      itens.append(f'    {{ tipo: "escolha", de: {js_str(mid)}, titulo: {js_str(mid.upper()+" · "+tema)}, perguntas: {js_str(pergs)},\n      explicacao: {js_str(expl)} }},\n    pega({js_str(mid)})')
    bloco=f'''
/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) — 15/11/2026 =====
   Liberada por aluno no painel (📝 Prova › Atividade de recuperação). Entram só as missões que a turma estudou (de: "mN").
   Por missão: perguntas novas + 1 atividade interativa do Básico da própria missão. Sem dica, sem resolução e sem refazer;
   a nota (0 a 10) vai sozinha para o Boletim. Gerado por ferramentas/recuperacao_2027/gerar_rc.py; para mudar, edite aqui mesmo. */
(function () {{
  const A = PORTAL.atividades[{js_str(aid)}]; if (!A) return;
  const OK = {js_str(OK)};
  const pega = mid => {{ const x = ((A[mid] || {{}}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({{}}, x, {{ de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "").replace(/^Passo \\d+ · /, "") }}) : null; }};
  A.rc = {{ basico: [
{(","+chr(10)).join(itens)}
  ].filter(Boolean) }};
}})();
'''
    p=f"{R}/dados/atividades/{aid}.js"; t=open(p,encoding="utf-8").read()
    t=re.sub(r"\n/\* ===== 📝 ATIVIDADE DE RECUPERAÇÃO.*\Z","",t,flags=re.S).rstrip("\n")+"\n"
    open(p,"w",encoding="utf-8").write(t+bloco)
    print(aid, len(Q))
