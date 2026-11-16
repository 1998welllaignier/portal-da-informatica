"""Simuladores-ajudante (sim_pc) do 7º ano, 4º bimestre de 2026 (apostila em uso: entram no fim, opcionais).
Rodar da raiz: python3 ferramentas/simuladores/sim_7ano_2026.py"""
import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir_fim

A = "dados/atividades/informatica-7ano-4bim.js"
T = "dados/atividades/informatica-7ano-4bim-trilha.js"

WEB_M1 = '''{
          "portal.professorwell.com.br": { titulo: "Portal da Informática", palavras: "portal informatica professor well missões", html: "<p>🎮 Bem-vindo ao <b>Portal da Informática</b>! Escolha a sua turma para começar as missões.</p><p style='font-size:40px'>🏫 💻 🚀</p>" },
          "jogos-gratis-agora.net": { titulo: "JOGOS GRÁTIS AGORA", seguro: false, palavras: "jogos gratis", html: "<p style='color:#c5221f;font-weight:700'>🎁 BAIXE JÁ 500 JOGOS GRÁTIS!!!</p><p>Digite seu email e sua senha para liberar o download.</p>" }
        }'''

def m1_nav(id_, curto=False):
    resto = '''
          { faca: "Agora abra uma <b>nova guia</b>: clique no <b>+</b>, ao lado da guia do portal.", ok: "novaAba", onde: "web:novaaba" },
          { faca: "Na nova guia, digite <b>jogos-gratis-agora.net</b> na barra de endereço e aperte <b>Enter</b>.", ok: "url:jogos-gratis-agora.net", onde: "web:url" },
          { faca: "Olhe o aviso ao lado do endereço: <b>⚠️ Não seguro</b>. Clique nele para ler.", ok: "cadeado:jogos-gratis-agora.net", onde: "web:cadeado" },
          { faca: "Esse site pede senha sem conexão segura: <b>não digite nada</b>! Feche essa guia no <b>✕</b> dela.", ok: "fecharAba", onde: "aba:x:1", erros: { "campo:*": "Nada de digitar aqui! Site sem cadeado pedindo senha é perigo. Feche a guia no ✕." } }''' if not curto else ""
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "🌐 Simulador: endereço, cadeado e guias do navegador",
        enunciado: "<p>No <strong>navegador de mentira</strong>, digite um endereço, confira o cadeado e{'' if curto else ' compare com um site que não é seguro'}. O <strong>Bit</strong> ajuda você em cada passo.</p>",
        area: [{{ nome: "Lixeira", app: "lixeira" }}, {{ nome: "Navegador", app: "web" }}],
        web: {WEB_M1},
        passos: [
          {{ faca: "Abra o <b>Navegador</b>: dê <b>duplo clique</b> no ícone 🌐 da área de trabalho.", ok: "abrir:app:web", onde: "ic:Navegador" }},
          {{ faca: "Clique na <b>barra de endereço</b> (a caixa comprida lá em cima), digite <b>portal.professorwell.com.br</b> e aperte <b>Enter</b>.", ok: "url:portal.professorwell.com.br", onde: "web:url", dica: "Digite certinho, com os pontos: portal.professorwell.com.br" }},
          {{ faca: "O portal abriu! Clique no <b>cadeado 🔒</b> do lado do endereço para ver se a conexão é segura.", ok: "cadeado:portal.professorwell.com.br", onde: "web:cadeado" }},{resto}
        ],
        fimMsg: "Você digitou o endereço, conferiu o cadeado{'' if curto else ', viu um site Não seguro e fechou a guia sem digitar nada'}. Navegação segura!",
        explicacao: "O cadeado 🔒 (https) mostra que a conexão é protegida: os pacotes viajam embaralhados. “⚠️ Não seguro” (http) quer dizer que alguém no caminho pode ler o que você digita: nunca coloque senha ali." }}'''

EMAILS = '''[
          { id: "premio", nome: "Promoção Celular Grátis", de: "premios@ganhe-celular-ja.xyz", assunto: "PARABÉNS!!! Você ganhou um celular 📱",
            html: "<p>Você foi sorteado!!! Clique AGORA e informe seu nome, endereço e CPF para receber o prêmio.</p><p><b>Oferta válida só por 10 minutos!!!</b></p><p><a data-link='ganhe-celular-ja.xyz' data-k='pg:linkpremio'>👉 QUERO MEU CELULAR</a></p>" },
          { id: "conta", nome: "Suporte do Jogo", de: "suporte@frifire-seguranca.com", assunto: "Sua conta do jogo será apagada hoje",
            html: "<p>Detectamos problemas na sua conta. Para não perder suas skins, responda este email com o seu <b>usuário e senha</b> até meia-noite.</p>" },
          { id: "escola", nome: "Coordenação da Escola", de: "coordenacao@escola.edu.br", assunto: "Feira de Ciências: horário",
            html: "<p>Olá, turma! A Feira de Ciências será na sexta, às 8h. O mapa das bancas está no site da escola:</p><p><a data-link='escola.edu.br/feira' data-k='pg:linkfeira'>escola.edu.br/feira</a></p>" }
        ]'''
WEB_M3 = '''{
          "ganhe-celular-ja.xyz": { titulo: "Ganhe seu celular", seguro: false, html: "<p>Digite seu CPF e endereço:</p><label class='campo'>CPF<input data-campo='cpf'></label>" },
          "escola.edu.br/feira": { titulo: "Feira de Ciências", html: "<p>🗺️ Mapa das bancas: Sala 1 – Planetas · Sala 2 – Robótica · Pátio – Vulcão.</p>" }
        }'''

def m3_email(id_, curto=False):
    conta = '''
          { faca: "Abra o email <b>Sua conta do jogo será apagada hoje</b>.", ok: "email:abrir:conta", onde: "email:conta" },
          { faca: "Olhe o <b>remetente</b>: <i>frifire</i> está escrito errado e o email pede a sua <b>senha</b>. Nenhum site sério pede senha por email! Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:conta", "email:excluir:conta"], onde: "email:denunciar", erros: { "link:*": "Ops! Volte ao Email (📧 na barra de tarefas) e denuncie esse golpe." } },''' if not curto else ""
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "📧 Simulador: na caixa de email, golpe ou mensagem segura?",
        enunciado: "<p>Você tem emails novos no <strong>computador de mentira</strong>. Descubra quais são <strong>golpe</strong> e denuncie, sem clicar nos links perigosos. O <strong>Bit</strong> confere.</p>",
        area: [{{ nome: "Lixeira", app: "lixeira" }}, {{ nome: "Email", app: "email" }}, {{ nome: "Navegador", app: "web" }}],
        emails: {EMAILS},
        web: {WEB_M3},
        passos: [
          {{ faca: "Abra o <b>Email</b>: dê <b>duplo clique</b> no ícone 📧 da área de trabalho.", ok: "abrir:app:email", onde: "ic:Email" }},
          {{ faca: "Clique no email <b>PARABÉNS!!! Você ganhou um celular</b> para ler.", ok: "email:abrir:premio", onde: "email:premio" }},
          {{ faca: "Sinais de golpe: prêmio que você não pediu, <b>pressa</b> (10 minutos!), pede <b>CPF</b> e o remetente termina em <b>.xyz</b>. <b>Não clique no link!</b> Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:premio", "email:excluir:premio"], onde: "email:denunciar", erros: {{ "link:ganhe*": "Opa! Você clicou no link do golpe e caiu num site <b>Não seguro</b>. Na vida real, pare aqui: feche a guia, volte ao Email (📧 na barra de tarefas) e denuncie." }} }},{conta}
          {{ faca: "Agora abra o email da <b>Coordenação da Escola</b>.", ok: "email:abrir:escola", onde: "email:escola" }},
          {{ faca: "Esse é seguro: remetente da escola, sem pressa e sem pedir dados. Clique no link <b>escola.edu.br/feira</b> para ver o mapa.", ok: "link:escola.edu.br/feira", onde: "pg:linkfeira" }}
        ],
        fimMsg: "Você denunciou {'o golpe' if curto else 'os golpes'} sem clicar nos links perigosos e abriu só o link seguro da escola. Detetive de golpes!",
        explicacao: "Sinais de golpe: prêmio que você não pediu, pressa, pedido de senha ou documentos, remetente estranho ou escrito errado, links esquisitos. Na dúvida, não clique: denuncie e mostre a um adulto." }}'''

if __name__ == "__main__":
    print("7º m1", inserir_fim(A, "m1", "pratica", m1_nav("m1-sim-navegador"), '"m1-sim-navegador"'))
    print("7º m3", inserir_fim(A, "m3", "pratica", m3_email("m3-sim-email"), '"m3-sim-email"'))
    print("7º trilha m1", inserir_fim(T, "m1", "basico", m1_nav("m1-sim-navegador", True), '"m1-sim-navegador"'))
    print("7º trilha m3", inserir_fim(T, "m3", "pratica", m3_email("m3-sim-email", True), '"m3-sim-email"'))
