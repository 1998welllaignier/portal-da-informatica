"""Simuladores-ajudante (sim_pc) do 8º, 9º e 5º ano, 4º bimestre de 2026 (apostilas em uso: no fim, opcionais).
Rodar da raiz: python3 ferramentas/simuladores/sim_8_9_5ano_2026.py"""
import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir_fim

A8, T8 = "dados/atividades/informatica-8ano-4bim.js", "dados/atividades/informatica-8ano-4bim-trilha.js"
A9, T9 = "dados/atividades/informatica-9ano-4bim.js", "dados/atividades/informatica-9ano-4bim-trilha.js"
A5 = "dados/atividades/informatica-5ano-4bim.js"

# ---------------- 8º M3: conferir a notícia ----------------
FALSA = ("<p style='color:#c5221f;font-weight:800;font-size:18px'>🚨 URGENTE!!! TODAS AS ESCOLAS VÃO FECHAR EM DEZEMBRO!!!</p>"
         "<p>Fiquei sabendo por um amigo de um primo que o governo vai fechar todas as escolas já no mês que vem. "
         "A mídia está escondendo isso de você!!! COMPARTILHE COM TODOS OS GRUPOS ANTES QUE APAGUEM!!!</p>"
         + "".join("<p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p>" for _ in range(12))
         + "<p style='color:#777'>Sem autor · sem data · sem fonte</p>")
def m8_noticia(id_, curto=False):
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "📰 Simulador: confira a notícia antes de compartilhar",
        enunciado: "<p>Chegou uma notícia assustadora. Faça o que um <strong>checador</strong> faz, no navegador de mentira: leia até o fim, procure em outro site e confie na <strong>fonte oficial</strong>. O <strong>Bit</strong> acompanha.</p>",
        abertas: ["web"], inicioWeb: "zapnoticias-urgente.blog",
        web: {{
          "zapnoticias-urgente.blog": {{ titulo: "URGENTE!!! Escolas vão fechar", seguro: false, palavras: "escolas fechar dezembro urgente", resumo: "Fiquei sabendo por um amigo de um primo...", html: "{FALSA}" }},
          "noticias-bombasticas.com": {{ titulo: "BOMBA: escolas fechadas?", palavras: "escolas fechar dezembro bomba", resumo: "Veja o vídeo que estão tentando apagar!!!", html: "<p>Veja o vídeo que estão tentando apagar!!! (sem autor, sem data)</p>" }},
          "seduc.pa.gov.br/calendario": {{ titulo: "Secretaria de Educação: calendário escolar", palavras: "escolas calendario dezembro aulas secretaria educacao fechar", resumo: "Calendário oficial: as aulas seguem até o fim do ano letivo.", html: "<p><b>Calendário escolar oficial.</b> As aulas seguem normalmente até o fim do ano letivo, com férias em janeiro. Nenhuma escola será fechada.</p><p style='color:#555'>Publicado pela Secretaria de Educação · 10/11/2026</p>" }}
        }},
        passos: [
          {{ faca: "Leia a notícia <b>até o fim</b>: role a página com a <b>rodinha do mouse</b> (ou a barra de rolagem).", ok: "rolar:fim:zapnoticias-urgente.blog", dica: "Coloque o mouse em cima do texto e gire a rodinha para baixo." }},
          {{ faca: "Viu? Sem autor, sem data, sem fonte, cheia de pressa e <b>⚠️ Não seguro</b>. Antes de compartilhar, confira em outro lugar: abra uma <b>nova guia</b> no <b>+</b>.", ok: "novaAba", onde: "web:novaaba" }},
          {{ faca: "No Buscador, pesquise <b>escolas fechar dezembro</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*escola/", onde: "web:busca" }},
          {{ faca: "Entre no resultado da <b>fonte oficial</b>: o site do governo (termina em <b>.gov.br</b>).", ok: "link:seduc.pa.gov.br/calendario", erros: {{ "link:*": "Esse não é fonte oficial: sem autor nem data. Volte (←) e procure o site que termina em <b>.gov.br</b>." }} }},{'' if curto else '''
          { faca: "A fonte oficial diz que <b>nenhuma escola vai fechar</b>: a notícia era falsa! Feche a guia da notícia falsa no <b>✕</b> dela (a primeira guia), sem compartilhar.", ok: "fecharAba", onde: "aba:x:0" }'''}
        ],
        fimMsg: "Você checou como um profissional: leu até o fim, desconfiou da falta de autor e data, pesquisou e confiou na fonte oficial. Notícia falsa não passa por você!",
        explicacao: "Antes de compartilhar: leia até o fim, veja quem escreveu e quando, desconfie de pressa e letras maiúsculas, pesquise em outros sites e procure a fonte oficial." }}'''

# ---------------- 8º M4: cookies e termos de uso ----------------
TERMOS = ("<p data-ev='cl-conta' data-k='pg:cl-conta'>1. Você pode apagar a sua conta a qualquer momento em Configurações.</p>"
          "<p data-ev='cl-idade' data-k='pg:cl-idade'>2. Uso permitido a partir de 13 anos.</p>"
          "<p data-ev='cl-coleta' data-k='pg:cl-coleta'>3. Coletamos nome, email e data de nascimento para criar a sua conta.</p>"
          + "".join(f"<p style='color:#666'>{i}. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p>" for i in range(4, 9)) + "".join(f"<p style='color:#666'>Parágrafo {i}: a empresa pode atualizar estes termos e avisará por email.</p>" for i in range(1, 6))
          + "<p data-ev='cl-venda' data-k='pg:cl-venda'>9. Podemos <b>compartilhar suas fotos e sua localização com empresas parceiras de publicidade</b>.</p>"
          "<p style='margin-top:16px'><button data-ev='aceitar-termos' data-k='pg:aceitar-termos'>Li e aceito</button><button data-ev='recusar' data-k='pg:recusar' class='pri'>Não aceito</button></p>")
def m8_termos(id_, curto=False):
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "📜 Simulador: cookies e termos de uso do FotoTop",
        enunciado: "<p>Você vai baixar o aplicativo inventado <strong>FotoTop</strong>. Antes, decida os <strong>cookies</strong> e leia os <strong>termos de uso</strong> no navegador de mentira. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app",
        campos: {{ "ck:anuncios": true, "ck:parceiros": true, "ck:essenciais": true }},
        web: {{
          "fototop.app": {{ titulo: "FotoTop: baixe grátis", html: "<p style='font-size:40px'>📸✨</p><p>Edite e publique fotos com filtros incríveis!</p><div style='position:sticky;bottom:0;background:#fff;border:2px solid #1a73e8;border-radius:10px;padding:10px 12px;margin-top:30px'><b>🍪 Nós usamos cookies</b><br>Para anúncios personalizados e para compartilhar dados com parceiros.<br><button data-ev='aceitar' data-k='pg:aceitar' class='pri'>Aceitar tudo</button><button data-ev='personalizar' data-k='pg:personalizar' data-ir='fototop.app/cookies'>Personalizar</button></div>" }},
          "fototop.app/cookies": {{ titulo: "FotoTop: escolha os cookies", html: "<p><label><input type='checkbox' data-ev='essenciais' disabled> Essenciais (o site precisa para funcionar)</label></p><p><label><input type='checkbox' data-ev='anuncios' data-k='pg:anuncios'> Anúncios personalizados</label></p><p><label><input type='checkbox' data-ev='parceiros' data-k='pg:parceiros'> Compartilhar meus dados com parceiros</label></p><button data-ev='salvar' data-k='pg:salvar' data-ir='fototop.app/termos' class='pri'>Salvar escolhas</button>" }},
          "fototop.app/termos": {{ titulo: "FotoTop: termos de uso", html: "{TERMOS}" }}
        }},
        passos: [
          {{ faca: "Apareceu o aviso de <b>cookies</b>. Em vez de aceitar tudo sem pensar, clique em <b>Personalizar</b>.", ok: "pagina:personalizar", onde: "pg:personalizar", erros: {{ "pagina:aceitar": "Calma! <b>Aceitar tudo</b> libera anúncios e o envio dos seus dados para parceiros. Clique em <b>Personalizar</b> para escolher." }} }},
          {{ faca: "Desmarque <b>Anúncios personalizados</b> (clique na caixinha para tirar o ✔).", ok: {{ estado: "marcado", nome: "anuncios", valor: false }}, onde: "pg:anuncios" }},
          {{ faca: "Desmarque também <b>Compartilhar meus dados com parceiros</b>.", ok: {{ estado: "marcado", nome: "parceiros", valor: false }}, onde: "pg:parceiros" }},
          {{ faca: "Clique em <b>Salvar escolhas</b>. Os essenciais ficam: sem eles o site não funciona.", ok: "pagina:salvar", onde: "pg:salvar" }},
          {{ faca: "Agora os <b>termos de uso</b>. Role <b>até o fim</b> antes de decidir.", ok: "rolar:fim:fototop.app/termos" }},{'' if curto else '''
          { faca: "Clique na frase dos termos que pede <b>ATENÇÃO</b> (a que mais mexe com os seus dados).", ok: "pagina:cl-venda", onde: "pg:cl-venda", erros: { "pagina:cl-*": "Essa frase é tranquila. Procure a que fala de <b>compartilhar suas fotos e localização</b> com empresas." } },'''}
          {{ faca: "Os termos {'falam em ' if curto else ''}compartilhar suas fotos e localização com publicidade. Você não é obrigado a aceitar: clique em <b>Não aceito</b>.", ok: "pagina:recusar", onde: "pg:recusar", erros: {{ "pagina:aceitar-termos": "Você aceitou sem concordar com a frase 9! Neste treino, clique em <b>Não aceito</b>. Na vida real, converse com a família antes de aceitar." }} }}
        ],
        fimMsg: "Você personalizou os cookies, leu os termos até o fim, achou a frase perigosa e decidiu com consciência. Isso é cuidar dos seus dados!",
        explicacao: "Cookies: “Personalizar” deixa você escolher; só os essenciais são necessários. Termos de uso: leia até o fim, procure o que coletam e com quem compartilham. Pela LGPD, você tem direito de saber e de apagar os seus dados." }}'''

# ---------------- 9º M2: golpes por email + verificação em duas etapas ----------------
EMAILS9 = '''[
          { id: "pix", nome: "Banco do Brasil", de: "seguranca@banco-do-brasill.com.br", assunto: "⚠️ Seu Pix foi BLOQUEADO",
            html: "<p>Detectamos uma movimentação suspeita. Seu Pix será cancelado em 1 hora.</p><p>Para desbloquear, <a data-link='bb-desbloqueio-pix.xyz' data-k='pg:linkpix'>clique aqui e confirme sua senha</a>.</p>" },
          { id: "codigo", nome: "Primo Lucas", de: "lucas.primo2009@email.com", assunto: "me passa o código que chegou aí",
            html: "<p>Oi! Mandei sem querer um código de 6 números pro seu celular. Me passa ele rapidinho? 🙏</p>" },
          { id: "escola", nome: "Secretaria da Escola", de: "secretaria@escola.edu.br", assunto: "Ative a verificação em duas etapas",
            html: "<p>Turma, protejam a conta do portal da escola: ativem a verificação em duas etapas.</p><p><a data-link='conta.escola.edu.br/seguranca' data-k='pg:linkconta'>conta.escola.edu.br/seguranca</a></p>" }
        ]'''
def m9_golpes(id_, curto=False):
    codigo = '''
          { faca: "Abra o email do <b>Primo Lucas</b>.", ok: "email:abrir:codigo", onde: "email:codigo" },
          { faca: "Ninguém manda código “sem querer”: é golpe para <b>roubar a sua conta</b> (o código é a 2ª etapa da senha). Nunca passe o código! Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:codigo", "email:excluir:codigo"], onde: "email:denunciar" },''' if not curto else ""
    doisfa = '''
          { faca: "Na página de segurança, marque <b>Ativar verificação em duas etapas</b>.", ok: { estado: "marcado", nome: "2fa" }, onde: "pg:2fa" },
          { faca: "Clique em <b>Salvar</b>. Agora, mesmo quem descobrir a sua senha não entra sem o código do seu celular.", ok: "pagina:salvar2fa", onde: "pg:salvar2fa" }''' if not curto else ""
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "🎣 Simulador: pesque o golpe na caixa de email",
        enunciado: "<p>Na caixa de email do computador de mentira há <strong>golpes</strong> misturados com mensagem verdadeira. Olhe o <strong>remetente</strong>, desconfie da pressa e proteja a sua conta. O <strong>Bit</strong> confere.</p>",
        area: [{{ nome: "Lixeira", app: "lixeira" }}, {{ nome: "Email", app: "email" }}, {{ nome: "Navegador", app: "web" }}],
        emails: {EMAILS9},
        web: {{
          "bb-desbloqueio-pix.xyz": {{ titulo: "Desbloqueio Pix", seguro: false, html: "<p>Digite sua senha do banco:</p><label class='campo'>Senha<input data-campo='senhabanco'></label>" }},
          "conta.escola.edu.br/seguranca": {{ titulo: "Conta da escola: segurança", html: "<p>🔐 Segurança da conta</p><p><label><input type='checkbox' data-ev='2fa' data-k='pg:2fa'> Ativar verificação em duas etapas (senha + código no celular)</label></p><button data-ev='salvar2fa' data-k='pg:salvar2fa' class='pri'>Salvar</button>" }}
        }},
        passos: [
          {{ faca: "Abra o <b>Email</b> (duplo clique no 📧 da área de trabalho).", ok: "abrir:app:email", onde: "ic:Email" }},
          {{ faca: "Abra o email <b>⚠️ Seu Pix foi BLOQUEADO</b>.", ok: "email:abrir:pix", onde: "email:pix" }},
          {{ faca: "Olhe o <b>remetente</b> com lupa: <i>banco-do-brasil<b>l</b></i>, com dois L! Pressa (1 hora) e pedido de senha. Não clique no link: <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:pix", "email:excluir:pix"], onde: "email:denunciar", erros: {{ "link:bb*": "Você clicou no link do golpe (é <b>phishing</b>: “pescaria” de senha). Feche essa guia, volte ao Email (📧 na barra) e denuncie." }} }},{codigo}
          {{ faca: "Abra o email da <b>Secretaria da Escola</b> e clique no link <b>conta.escola.edu.br/seguranca</b>.", ok: "link:conta.escola.edu.br/seguranca", onde: "email:escola" }},{doisfa}
        ],
        fimMsg: "Você pescou {'o golpe' if curto else 'os dois golpes'} pelo remetente e pela pressa{'' if curto else ' e ativou a verificação em duas etapas'}. Conta protegida!",
        explicacao: "Phishing é o golpe que imita banco, loja ou amigo para pescar senha ou código. Confira o remetente letra por letra, desconfie de pressa e nunca passe senha ou código. A verificação em duas etapas protege mesmo se a senha vazar." }}'''

# ---------------- 9º M3: crédito da foto ----------------
M9_CREDITO = '''      { id: "m3-sim-credito", opcional: true, tipo: "sim_pc", titulo: "🖼️ Simulador: ache a autora da foto e escreva o crédito",
        enunciado: "<p>Você quer usar uma foto de castanheira num trabalho. No computador de mentira, ache a <strong>autora</strong>, o <strong>site</strong> e a <strong>licença</strong>, e escreva o crédito no Bloco de Notas. O <strong>Bit</strong> confere.</p>",
        abertas: ["web"],
        web: {
          "imagenslivres.org/castanheira": { titulo: "Banco de Imagens Livres: castanheira", palavras: "castanheira foto arvore imagem livre", resumo: "Foto de castanheira com licença CC BY.", html: "<p style='font-size:90px;text-align:center;margin:6px'>🌳</p><p style='text-align:center'>Castanheira no Pará</p><button data-ev='info' data-k='pg:info' data-ir='imagenslivres.org/castanheira/info'>ℹ️ Informações da imagem</button>" },
          "imagenslivres.org/castanheira/info": { titulo: "Banco de Imagens Livres: informações", html: "<p><b>Autora:</b> Maria Souza</p><p><b>Site:</b> Banco de Imagens Livres</p><p><b>Licença:</b> CC BY (pode usar, mas tem que dar o crédito)</p>" },
          "fotos-sem-dono.net": { titulo: "Fotos sem dono: baixe tudo!", palavras: "castanheira foto arvore baixe", resumo: "Baixe qualquer foto, sem crédito!!!", html: "<p>Baixe qualquer foto sem dar crédito!!! (sem autor, sem licença)</p>" }
        },
        passos: [
          { faca: "No Buscador, pesquise <b>foto castanheira</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*castanheira/", onde: "web:busca" },
          { faca: "Abra o resultado do <b>Banco de Imagens Livres</b> (site que mostra a licença).", ok: "link:imagenslivres.org/castanheira", erros: { "link:fotos*": "Site que diz “sem crédito” não respeita a autoria. Volte (←) e abra o Banco de Imagens Livres." } },
          { faca: "Clique em <b>ℹ️ Informações da imagem</b> para ver quem tirou a foto.", ok: "pagina:info", onde: "pg:info" },
          { faca: "Anote! Abra o <b>Bloco de Notas</b> pelo botão <b>Iniciar ⊞</b>.", ok: "abrir:app:notas", onde: "bar:iniciar" },
          { faca: "Escreva o crédito no modelo: <b>Foto: autora, site, licença.</b>", ok: { estado: "notas", texto: "Maria Souza", contem: true }, onde: "notas:texto", dica: "Fica assim: Foto: Maria Souza, Banco de Imagens Livres, CC BY." }
        ],
        fimMsg: "Crédito certo: Foto: Maria Souza, Banco de Imagens Livres, CC BY. Respeitar a autoria é lei e é educação!",
        explicacao: "Antes de usar uma imagem, veja a licença. CC BY deixa usar dando o crédito: autor, site e licença. “Todos os direitos reservados” precisa de autorização." }'''

# ---------------- 5º M1: onde o arquivo mora ----------------
M5_EXPLORADOR = '''      { id: "m1-sim-explorador", opcional: true, tipo: "sim_pc", titulo: "🖥️ Simulador: onde moram os arquivos?",
        enunciado: "<p>No <strong>computador de mentira</strong>, visite as pastas e abra os arquivos que moram nelas. O <strong>Bit</strong>, o robozinho ajudante, mostra o caminho.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        pastas: { "Imagens": [{ nome: "meu-desenho", ext: "png", figura: "🌈" }, { nome: "gatinho", ext: "jpg", figura: "🐱" }], "Documentos": [{ nome: "poema-da-turma", ext: "txt", texto: "O computador guarda\\nmeu desenho e meu poema\\nnas pastas certinhas,\\nsem nenhum problema!" }], "Músicas": [{ nome: "parabens", ext: "mp3" }] },
        passos: [
          { faca: "Abra o <b>Explorador de Arquivos</b>: clique na pastinha 📁 da <b>barra de tarefas</b>.", ok: ["clique:bar:exp", "abrir:app:exp"], onde: "bar:exp" },
          { faca: "Na lista da esquerda, clique em <b>Imagens</b> 🖼️.", ok: "abrir:pasta:Imagens", onde: "nav:Imagens" },
          { faca: "Abra o <b>meu-desenho</b> com <b>dois cliques rapidinhos</b>.", ok: "/^abrir:arq:meu-desenho/", onde: "arq:meu-desenho" },
          { faca: "Muito bem! Feche o desenho no <b>X</b> vermelho, lá em cima à direita.", ok: "fechar:jan:ver", onde: "jan:ver:fechar" },
          { faca: "Agora clique em <b>Documentos</b> 📄 e abra o <b>poema-da-turma</b> com dois cliques.", ok: "/^abrir:arq:poema-da-turma/", onde: "nav:Documentos" }
        ],
        fimMsg: "Você achou o desenho na pasta Imagens e o poema na pasta Documentos. Cada arquivo mora na sua pasta, guardada no armazenamento!",
        explicacao: "Os arquivos ficam guardados no armazenamento (HD ou SSD), organizados em pastas: Imagens, Documentos, Músicas... O Explorador de Arquivos mostra onde cada um mora." }'''

# ---------------- 5º M4: confiável ou não? ----------------
M5_CONFIAVEL = '''      { id: "m4-sim-confiavel", opcional: true, tipo: "sim_pc", titulo: "🔎 Simulador: pesquise num site confiável",
        enunciado: "<p>Para o trabalho de Ciências, pesquise <strong>quanto tempo vive uma tartaruga</strong>. Escolha o site confiável, no navegador de mentira. O <strong>Bit</strong> ajuda.</p>",
        abertas: ["web"],
        web: {
          "museu-goeldi.br/tartarugas": { titulo: "Museu Goeldi: as tartarugas da Amazônia", palavras: "tartaruga tartarugas vive anos amazonia", resumo: "Texto de cientistas do museu, com data e autores.", html: "<p>🐢 A tartaruga-da-amazônia pode viver <b>mais de 50 anos</b>.</p><p style='color:#555'>Texto da equipe de cientistas do museu · atualizado em 2026</p>" },
          "curiosidades-loucas.net": { titulo: "VOCÊ NÃO VAI ACREDITAR: tartaruga imortal!!!", seguro: false, palavras: "tartaruga tartarugas vive imortal", resumo: "Clique e ganhe um brinde!!!", html: "<p>TARTARUGAS VIVEM PARA SEMPRE!!! 🎁 Clique e ganhe um brinde!!!</p>" }
        },
        passos: [
          { faca: "No Buscador, digite <b>tartaruga vive quantos anos</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*tartaruga/", onde: "web:busca" },
          { faca: "Qual site é confiável? O que tem <b>cientistas, data e nada de brinde</b>. Clique nele.", ok: "link:museu-goeldi.br/tartarugas", erros: { "link:curiosidades*": "Hum! Muitas exclamações, brinde e “Não seguro”: não é confiável. Clique na seta ← para voltar e escolha o outro." } },
          { faca: "Confira o <b>cadeado 🔒</b> ao lado do endereço: clique nele.", ok: "cadeado:museu-goeldi.br/tartarugas", onde: "web:cadeado" }
        ],
        fimMsg: "Você escolheu o site com autores, data e cadeado. Resposta: a tartaruga-da-amazônia pode viver mais de 50 anos!",
        explicacao: "Site confiável mostra quem escreveu e quando, não promete brinde, não grita com exclamações e tem o cadeado 🔒. Na dúvida, pergunte a um adulto." }'''

if __name__ == "__main__":
    print("8º m3", inserir_fim(A8, "m3", "pratica", m8_noticia("m3-sim-noticia"), '"m3-sim-noticia"'))
    print("8º m4", inserir_fim(A8, "m4", "pratica", m8_termos("m4-sim-termos"), '"m4-sim-termos"'))
    print("8º trilha m3", inserir_fim(T8, "m3", "pratica", m8_noticia("m3-sim-noticia", True), '"m3-sim-noticia"'))
    print("8º trilha m4", inserir_fim(T8, "m4", "pratica", m8_termos("m4-sim-termos", True), '"m4-sim-termos"'))
    print("9º m2", inserir_fim(A9, "m2", "pratica", m9_golpes("m2-sim-golpes"), '"m2-sim-golpes"'))
    print("9º m3", inserir_fim(A9, "m3", "pratica", M9_CREDITO, '"m3-sim-credito"'))
    print("9º trilha m2", inserir_fim(T9, "m2", "pratica", m9_golpes("m2-sim-golpes", True), '"m2-sim-golpes"'))
    print("5º m1", inserir_fim(A5, "m1", "pratica", M5_EXPLORADOR, '"m1-sim-explorador"'))
    print("5º m4", inserir_fim(A5, "m4", "pratica", M5_CONFIAVEL, '"m4-sim-confiavel"'))
