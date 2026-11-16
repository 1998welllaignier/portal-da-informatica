"""16/11/2026 — pedido do professor: nas missões de 2026 que AINDA NÃO FORAM DADAS a nenhuma turma, os simuladores
viram obrigatórios: um logo na abertura (🎮 Mão na massa, primeiro da lista) e outro durante a aula (Básico).
Antes de mudar a ordem, os ids calculados pela posição são escritos (congelar_ids) para não perder progresso.
Missões já dadas a alguma turma (5º M1, 6º M1, 7º M1, 8º M3 no 8º A/B, 9º M2 no 9º D) continuam com o simulador opcional.
Rodar da raiz: python3 ferramentas/simuladores/obrigatorios_2026.py"""
import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import congelar_ids, mover, inserir_fim

D = "dados/atividades/informatica-%s.js"

# ---------- segundo simulador (durante a aula, no Básico) ----------
S5_M4 = '''      { id: "m4-sim-mensagens", tipo: "sim_pc", titulo: "📧 Simulador: mensagem de quem você não conhece",
        enunciado: "<p>Chegaram emails no computador de mentira. Descubra qual é perigoso. O <strong>Bit</strong> ajuda você.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }],
        emails: [
          { id: "estranho", nome: "Amigo_Secreto_10", de: "amigosecreto10@email.com", assunto: "manda uma foto sua?",
            html: "<p>oi! eu sou legal 😄 me manda uma <b>foto</b> sua e o <b>endereço</b> da sua casa? não conta pra ninguém!</p>" },
          { id: "prof", nome: "Prof. Welington Laignier", de: "professor@escola.edu.br", assunto: "Parabéns pela aula!",
            html: "<p>Você foi muito bem na aula de Informática. Continue assim! 🌟</p>" }
        ],
        passos: [
          { faca: "Abra o <b>Email</b> com <b>dois cliques rapidinhos</b> no ícone 📧.", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Leia a mensagem <b>manda uma foto sua?</b>.", ok: "email:abrir:estranho", onde: "email:estranho" },
          { faca: "Pessoa que você não conhece pedindo <b>foto e endereço</b>, e ainda pede segredo: perigo! Não responda. Clique em <b>🚩 Denunciar golpe</b> e conte a um adulto.", ok: ["email:denunciar:estranho", "email:excluir:estranho"], onde: "email:denunciar" },
          { faca: "Agora leia a mensagem do <b>Prof. Welington Laignier</b>: essa é do bem!", ok: "email:abrir:prof", onde: "email:prof" }
        ],
        fimMsg: "Você não respondeu ao desconhecido e leu a mensagem do professor. Internet com cuidado!",
        explicacao: "Nunca mande foto, endereço ou senha para quem você não conhece. Pedido de segredo é sinal de perigo: conte a um adulto." }'''

S6_M3 = '''      { id: "m3-sim-senha", tipo: "sim_pc", titulo: "📧 Simulador: alguém pediu a sua senha",
        enunciado: "<p>No computador de mentira, chegou um pedido de senha. O que um cidadão digital faz? O <strong>Bit</strong> confere.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }],
        emails: [
          { id: "senha", nome: "Colega da turma?", de: "colega.turma6@email-gratis.net", assunto: "me empresta sua senha do jogo?",
            html: "<p>oi, é seu colega! me passa a sua <b>senha</b> do jogo rapidinho? prometo que devolvo hoje 😅</p>" },
          { id: "zoeira", nome: "Grupo da Zoeira", de: "zoeira@email-gratis.net", assunto: "vamos zoar o Pedro?",
            html: "<p>kkkk vamos mandar a foto do Pedro caindo para todo mundo? repassa!!</p>" },
          { id: "escola", nome: "Coordenação da Escola", de: "coordenacao@escola.edu.br", assunto: "Semana do respeito na internet",
            html: "<p>Nesta semana vamos falar de respeito na internet. Participe! 💬</p>" }
        ],
        passos: [
          { faca: "Abra o <b>Email</b> (dois cliques no 📧).", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Abra a mensagem <b>me empresta sua senha do jogo?</b>.", ok: "email:abrir:senha", onde: "email:senha" },
          { faca: "Senha não se empresta, nem para amigo! E você nem sabe se é mesmo o colega. Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:senha", "email:excluir:senha"], onde: "email:denunciar" },
          { faca: "Abra a mensagem <b>vamos zoar o Pedro?</b>.", ok: "email:abrir:zoeira", onde: "email:zoeira" },
          { faca: "Isso é <b>cyberbullying</b>: não repasse! Clique em <b>🚩 Denunciar</b> e conte a um adulto.", ok: "email:denunciar:zoeira", onde: "email:denunciar", erros: { "email:excluir:zoeira": "Só excluir deixa o Pedro sozinho. <b>Denunciar</b> ajuda a parar a zoeira. Clique em ↺ Recomeçar e denuncie." } },
          { faca: "Por fim, abra a mensagem da <b>Coordenação da Escola</b>.", ok: "email:abrir:escola", onde: "email:escola" }
        ],
        fimMsg: "Não emprestou a senha, não repassou a zoeira e denunciou. Isso é ser cidadão digital!",
        explicacao: "Senha é como escova de dente: cada um tem a sua e não se empresta. Diante de cyberbullying: não repasse, denuncie e conte a um adulto." }'''

S6_M4 = '''      { id: "m4-sim-espaco", tipo: "sim_pc", titulo: "💾 Simulador: o computador está sem espaço!",
        enunciado: "<p>O computador de mentira está cheio. Descubra quem ocupa mais espaço olhando a coluna <strong>Tamanho</strong> e libere espaço. O <strong>Bit</strong> ajuda.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "bilhete", ext: "txt", kb: 1 }, { nome: "foto-do-gato", ext: "jpg", kb: 2800, figura: "🐱" }, { nome: "filme-da-festa", ext: "mp4", kb: 2400000 }, { nome: "filme-da-festa (copia)", ext: "mp4", kb: 2400000 }, { nome: "musica", ext: "mp3", kb: 4200 }] },
        passos: [
          { faca: "Ligue as <b>Extensões</b> (botão lá em cima, à direita).", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Olhe a coluna <b>Tamanho</b>: KB é pequeno, MB é médio, GB é grande. Clique <b>uma vez</b> no arquivo <b>menor</b>.", ok: "clique:arq:bilhete*", onde: "arq:bilhete.txt", erros: { "clique:arq:*": "Esse não é o menor. O menor tem o tamanho em <b>KB</b> com número pequeno." } },
          { faca: "Tem um filme <b>repetido</b>, a <b>(copia)</b>, gastando 2,3 GB à toa! Clique nele com o <b>botão direito</b> e escolha <b>Excluir</b>.", ok: "excluir:arq:filme-da-festa (copia)*", onde: "arq:filme-da-festa (copia).mp4", erros: { "excluir:arq:*": "Ops! Esse não é a cópia. Abra a Lixeira, restaure o arquivo e exclua o que tem <b>(copia)</b> no nome." } }
        ],
        fimMsg: "Você liberou 2,3 GB apagando só a cópia repetida. Olhar o tamanho ajuda a cuidar do espaço!",
        explicacao: "Do menor para o maior: KB, MB, GB, TB. Vídeos ocupam muito espaço; arquivos repetidos gastam espaço à toa." }'''

S7_M3 = '''      { id: "m3-sim-2etapas", tipo: "sim_pc", titulo: "🔐 Simulador: senha forte e verificação em duas etapas",
        enunciado: "<p>Proteja a conta do jogo no navegador de mentira: troque a senha por uma forte e ligue a verificação em duas etapas. O <strong>Bit</strong> confere.</p>",
        abertas: ["web"], inicioWeb: "conta.jogodaescola.com.br",
        web: { "conta.jogodaescola.com.br": { titulo: "Minha conta: segurança", html: "<p>🎮 <b>Segurança da conta</b></p><label class='campo'>Nova senha<input data-campo='senha' data-k='pg:senha' placeholder='8 ou mais: letras, números e símbolos'></label><p><label><input type='checkbox' data-ev='2fa' data-k='pg:2fa'> Ativar verificação em duas etapas (código no celular)</label></p><button data-ev='salvar' data-k='pg:salvar' class='pri'>Salvar</button>" } },
        passos: [
          { faca: "Confira o <b>cadeado 🔒</b> ao lado do endereço antes de mexer na senha: clique nele.", ok: "cadeado:conta.jogodaescola.com.br", onde: "web:cadeado" },
          { faca: "Crie uma <b>senha forte</b> na caixa <b>Nova senha</b>: 8 ou mais caracteres, com maiúscula, minúscula, número e símbolo.", ok: { estado: "senhaForte", campo: "senha" }, onde: "pg:senha", dica: "Exemplo (invente a sua!): Pipa#Azul27" },
          { faca: "Marque <b>Ativar verificação em duas etapas</b>.", ok: { estado: "marcado", nome: "2fa" }, onde: "pg:2fa" },
          { faca: "Clique em <b>Salvar</b>.", ok: "pagina:salvar", onde: "pg:salvar" }
        ],
        fimMsg: "Conta blindada: senha forte + código no celular. Mesmo que alguém descubra a senha, não entra!",
        explicacao: "Verificação em duas etapas = senha + um código que chega no seu celular. Senha forte mistura maiúsculas, minúsculas, números e símbolos." }'''

S8_M4 = '''      { id: "m4-sim-direitos", tipo: "sim_pc", titulo: "⚖️ Simulador: use os seus direitos da LGPD",
        enunciado: "<p>Na conta do aplicativo inventado <strong>FotoTop</strong>, use os seus direitos: saber, corrigir e apagar. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app/conta",
        web: {
          "fototop.app/conta": { titulo: "FotoTop: minha conta", html: "<p>👤 <b>Minha conta</b></p><button data-ev='ver' data-k='pg:ver' data-ir='fototop.app/meus-dados'>👁️ Ver meus dados</button><button data-ev='apagar' data-k='pg:apagar' data-ir='fototop.app/apagar'>🗑️ Apagar minha conta</button>" },
          "fototop.app/meus-dados": { titulo: "FotoTop: meus dados", html: "<p><b>Dados que guardamos sobre você:</b></p><p>Nome: Ana Souza</p><p>Data de nascimento: <b>01/01/1990</b> (errada!)</p><label class='campo'>Corrigir data de nascimento<input data-campo='nasc' data-k='pg:nasc' placeholder='dd/mm/aaaa'></label><button data-ev='corrigir' data-k='pg:corrigir' data-ir='fototop.app/conta' class='pri'>Salvar correção</button>" },
          "fototop.app/apagar": { titulo: "FotoTop: apagar conta", html: "<p>Tem certeza? Suas fotos e dados serão apagados.</p><button data-ev='confirmar' data-k='pg:confirmar' class='pri'>Sim, apagar meus dados</button>" }
        },
        passos: [
          { faca: "Direito de <b>SABER</b>: clique em <b>👁️ Ver meus dados</b>.", ok: "pagina:ver", onde: "pg:ver" },
          { faca: "A data de nascimento está errada! Direito de <b>CORRIGIR</b>: digite uma data no formato <b>dd/mm/aaaa</b> (ex.: 15/03/2013).", ok: { estado: "campo", nome: "nasc", regex: "^\\\\d{2}/\\\\d{2}/\\\\d{4}$" }, onde: "pg:nasc" },
          { faca: "Clique em <b>Salvar correção</b>.", ok: "pagina:corrigir", onde: "pg:corrigir" },
          { faca: "Você desistiu do FotoTop. Direito de <b>APAGAR</b>: clique em <b>🗑️ Apagar minha conta</b>.", ok: "pagina:apagar", onde: "pg:apagar" },
          { faca: "Confirme: <b>Sim, apagar meus dados</b>.", ok: "pagina:confirmar", onde: "pg:confirmar" }
        ],
        fimMsg: "Você usou três direitos da LGPD: saber, corrigir e apagar os seus dados!",
        explicacao: "Pela LGPD (Lei Geral de Proteção de Dados), você tem direito de saber quais dados guardam, corrigir, apagar e retirar o consentimento." }'''

S9_M3 = '''      { id: "m3-sim-checagem", tipo: "sim_pc", titulo: "🎭 Simulador: o vídeo viral é verdade ou deepfake?",
        enunciado: "<p>Um vídeo estranho está circulando. No navegador de mentira, procure uma <strong>agência de checagem</strong> antes de compartilhar. O <strong>Bit</strong> confere.</p>",
        abertas: ["web"],
        web: {
          "checagem.org/video-cantor": { titulo: "Agência de checagem: vídeo do cantor é falso", palavras: "video cantor escola fechar viral deepfake", resumo: "FALSO: vídeo foi criado com inteligência artificial.", html: "<p><b style='color:#c5221f'>❌ FALSO</b></p><p>O vídeo em que o cantor diz que vai fechar escolas foi feito com <b>inteligência artificial (deepfake)</b>. A boca não acompanha a voz e as mãos aparecem deformadas.</p><p style='color:#555'>Checado por jornalistas · 15/11/2026</p>" },
          "viraliza-ja.net": { titulo: "VEJA O VÍDEO QUE ESTÃO ESCONDENDO!!!", seguro: false, palavras: "video cantor escola viral", resumo: "Compartilhe antes que apaguem!!!", html: "<p>COMPARTILHE ANTES QUE APAGUEM!!!</p>" }
        },
        passos: [
          { faca: "No Buscador, pesquise <b>video cantor escola</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*(video|v.deo)/", onde: "web:busca" },
          { faca: "Abra o resultado da <b>agência de checagem</b> (jornalistas que conferem notícias).", ok: "link:checagem.org/video-cantor", erros: { "link:viraliza*": "Site que grita “compartilhe antes que apaguem” não checa nada. Volte (←) e abra a agência de checagem." } },
          { faca: "Veredito: <b>FALSO</b>, era deepfake. Feche a guia no <b>✕</b> sem compartilhar.", ok: "fecharAba", onde: "aba:x:0" }
        ],
        fimMsg: "Você checou numa agência antes de compartilhar e descobriu o deepfake. Muito bem!",
        explicacao: "Deepfake é vídeo ou áudio falso feito com IA. Antes de compartilhar, procure em agências de checagem e em sites de notícias confiáveis." }'''

# missão: (arquivo, missao, sim da abertura (id), segundo sim (bloco, id) | None)
PLANO = [
    ("5ano-4bim", "m4", "m4-sim-confiavel", (S5_M4, "m4-sim-mensagens")),
    ("6ano-4bim", "m3", "m3-sim-conta", (S6_M3, "m3-sim-senha")),
    ("6ano-4bim", "m4", "m4-sim-zip", (S6_M4, "m4-sim-espaco")),
    ("6ano-4bim-trilha", "m4", "m4-sim-zip", None),
    ("7ano-4bim", "m3", "m3-sim-email", (S7_M3, "m3-sim-2etapas")),
    ("7ano-4bim-trilha", "m3", "m3-sim-email", None),
    ("8ano-4bim", "m4", "m4-sim-termos", (S8_M4, "m4-sim-direitos")),
    ("8ano-4bim-trilha", "m4", "m4-sim-termos", None),
    ("9ano-4bim", "m3", "m3-sim-credito", (S9_M3, "m3-sim-checagem")),
]

if __name__ == "__main__":
    for arq, m, sim, segundo in PLANO:
        p = D % arq
        print(arq, m, "ids pratica:", congelar_ids(p, m, "pratica"), "basico:", congelar_ids(p, m, "basico"))
        print("   abertura:", mover(p, m, "pratica", sim, 0))
        if segundo:
            bloco, sid = segundo
            print("   durante:", inserir_fim(p, m, "basico", bloco, '"%s"' % sid), mover(p, m, "basico", sid, 1))
