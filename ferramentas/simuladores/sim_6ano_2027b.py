"""Mais simuladores do 6º ano 2027 (M3, M5, M6) e as versões curtas da trilha (M1, M4, M7, M8).
2027 ainda não está em uso: entram no fim da seção Mão na massa / Praticar e contam no Básico.
Rodar da raiz: python3 ferramentas/simuladores/sim_6ano_2027b.py"""
import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir_fim

A = "dados/atividades/informatica-6ano-2027-1bim.js"
T = "dados/atividades/informatica-6ano-2027-1bim-trilha.js"

M3 = '''      { id: "m3-sim-programas", tipo: "sim_pc", titulo: "🧩 No computador: abra os softwares (programas)",
        enunciado: "<p>O computador (hardware) só faz alguma coisa com os <strong>softwares</strong>. Abra e feche alguns programas no computador de treino. O <strong>Bit</strong> guia você.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }],
        passos: [
          { faca: "Clique no botão <b>Iniciar ⊞</b>: ele mostra os <b>programas</b> instalados.", ok: "clique:bar:iniciar", onde: "bar:iniciar" },
          { faca: "Abra a <b>Calculadora</b> 🧮: ela é um <b>software</b> (aplicativo).", ok: "abrir:app:calc", onde: "start:calc" },
          { faca: "Abra também o <b>Bloco de Notas</b> 📝 pelo Iniciar.", ok: "abrir:app:notas", onde: "bar:iniciar" },
          { faca: "Agora o <b>Navegador</b> 🌐: clique no ícone dele na <b>barra de tarefas</b>.", ok: "abrir:app:web", onde: "bar:web" },
          { faca: "Três softwares abertos ao mesmo tempo, todos funcionando no mesmo hardware! Feche o <b>Navegador</b> no <b>X</b>.", ok: "fechar:jan:web", onde: "jan:web:fechar" },
          { faca: "Feche o <b>Bloco de Notas</b> e a <b>Calculadora</b> também (no X de cada um).", ok: { estado: "fechadas", ids: ["notas", "calc"] }, onde: "jan:notas:fechar" }
        ],
        fimMsg: "Você abriu e fechou 3 softwares. Quem organiza tudo isso é outro software especial: o sistema operacional (o Windows)!",
        explicacao: "Hardware é a parte física (monitor, teclado, gabinete). Software são os programas: a Calculadora, o Bloco de Notas e o Navegador são aplicativos; o Windows é o sistema operacional, que comanda o hardware e os aplicativos." }'''

M5 = '''      { id: "m5-sim-tipos", tipo: "sim_pc", titulo: "🗃️ No computador: cada arquivo, um tipo de dado",
        enunciado: "<p>Texto, imagem, som e vídeo: tudo vira dado no computador. Abra cada tipo de arquivo no computador de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "bilhete", ext: "txt", texto: "Amanhã tem prova de Matemática!" }, { nome: "foto-do-time", ext: "jpg", figura: "⚽" }, { nome: "hino-da-escola", ext: "mp3" }, { nome: "apresentacao-da-danca", ext: "mp4" }] },
        passos: [
          { faca: "Ligue as <b>Extensões</b> (botão lá em cima, à direita) para ver o tipo de cada arquivo.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "Abra o arquivo de <b>TEXTO</b> (.txt) com duplo clique.", ok: "/^abrir:arq:.*\\\\.txt$/", onde: "arq:bilhete.txt", erros: { "abrir:arq:*": "Esse não é texto. O texto termina em <b>.txt</b>." } },
          { faca: "Volte ao Explorador (📁 na barra de tarefas) e abra a <b>IMAGEM</b> (.jpg).", ok: "/^abrir:arq:.*\\\\.jpg$/", onde: "bar:exp", erros: { "abrir:arq:*": "Imagem termina em <b>.jpg</b>." } },
          { faca: "Agora o <b>SOM</b> (.mp3).", ok: "/^abrir:arq:.*\\\\.mp3$/", onde: "bar:exp", erros: { "abrir:arq:*": "Som (música) termina em <b>.mp3</b>." } },
          { faca: "E por último o <b>VÍDEO</b> (.mp4).", ok: "/^abrir:arq:.*\\\\.mp4$/", onde: "bar:exp", erros: { "abrir:arq:*": "Vídeo termina em <b>.mp4</b>." } }
        ],
        fimMsg: "Texto, imagem, som e vídeo: quatro tipos de dados, cada um com a sua extensão e o seu programa!",
        explicacao: "Tipos de dados: texto (.txt, .docx), imagem (.jpg, .png), som (.mp3) e vídeo (.mp4). Para o computador, tudo é guardado como números (0 e 1)." }'''

M6 = '''      { id: "m6-sim-mensagens", tipo: "sim_pc", titulo: "💬 No computador: mensagens boas e mensagens perigosas",
        enunciado: "<p>Chegaram mensagens na caixa de email do computador de treino. Decida o que fazer com cada uma. O <strong>Bit</strong> ajuda.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }],
        emails: [
          { id: "estranho", nome: "Gamer_Pro_2010", de: "gamerpro2010@email.com", assunto: "oi, quer ganhar skins?",
            html: "<p>oi!! sou da sua idade 😎 me manda seu <b>endereço</b>, o nome da sua <b>escola</b> e uma <b>foto</b> que eu te dou skins grátis. não conta pra ninguém!</p>" },
          { id: "corrente", nome: "Tia Neide", de: "neide.souza@email.com", assunto: "REPASSE PARA 10 AMIGOS!!!",
            html: "<p>Se você não repassar esta mensagem para 10 amigos em 1 hora, vai ter azar o ano inteiro!!!</p>" },
          { id: "colega", nome: "Ana (7º ano)", de: "ana.setimo@escola.edu.br", assunto: "Convite: grupo de estudos",
            html: "<p>Oi! Vamos fazer um grupo de estudos na biblioteca na quinta, depois da aula? Leve o caderno. 😊</p>" }
        ],
        passos: [
          { faca: "Abra o <b>Email</b>: duplo clique no ícone 📧 da área de trabalho.", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Leia a mensagem de <b>Gamer_Pro_2010</b>.", ok: "email:abrir:estranho", onde: "email:estranho" },
          { faca: "Desconhecido pedindo <b>endereço, escola e foto</b>, e ainda pede segredo: perigo! Nunca responda. Clique em <b>🚩 Denunciar</b> e conte a um adulto.", ok: "email:denunciar:estranho", onde: "email:denunciar", erros: { "email:excluir:estranho": "Excluir tira da sua caixa, mas <b>denunciar</b> avisa e protege outras crianças. Clique em ↺ Recomeçar e denuncie." } },
          { faca: "Abra a mensagem <b>REPASSE PARA 10 AMIGOS!!!</b>.", ok: "email:abrir:corrente", onde: "email:corrente" },
          { faca: "Corrente com ameaça de azar é mentira e só enche a caixa dos amigos. Não repasse: clique em <b>🗑️ Excluir</b>.", ok: "email:excluir:corrente", onde: "email:excluir", erros: { "email:denunciar:corrente": "Não é golpe perigoso, é só uma corrente boba: aqui basta <b>Excluir</b>. Clique em ↺ Recomeçar." } },
          { faca: "Por fim, abra o convite da <b>Ana</b>: essa é uma mensagem do bem!", ok: "email:abrir:colega", onde: "email:colega" }
        ],
        fimMsg: "Denunciou o desconhecido, excluiu a corrente e leu o convite da colega. Você sabe conviver na rede!",
        explicacao: "Não passe dados pessoais (endereço, escola, foto, senha) para desconhecidos e conte a um adulto. Não repasse correntes. Responda os colegas com respeito." }'''

# ---------- versões curtas para a trilha ----------
T_M1 = '''      { id: "m1-sim-janela", tipo: "sim_pc", titulo: "🖥️ No computador: abra a pasta e feche a janela",
        enunciado: "<p>Treine no computador de mentira. O <strong>Bit</strong> diz o que fazer, um passo de cada vez.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Jogos", tipo: "pasta" }],
        pastas: { "Jogos": [{ nome: "xadrez", ext: "exe" }, { nome: "quebra-cabeca", ext: "exe" }] },
        passos: [
          { faca: "Abra a pasta <b>Jogos</b> com <b>dois cliques rapidinhos</b>.", ok: "duplo:ic:Jogos", onde: "ic:Jogos" },
          { faca: "Aumente a janela: clique no <b>quadradinho ☐</b> (Maximizar), lá em cima à direita.", ok: "max:jan:exp", onde: "jan:exp:max" },
          { faca: "Agora feche a janela no <b>X</b>.", ok: "fechar:jan:exp", onde: "jan:exp:fechar" }
        ],
        fimMsg: "Abriu, maximizou e fechou. Muito bem!",
        explicacao: "Dois cliques abrem. ☐ aumenta a janela. X fecha." }'''
T_M4 = '''      { id: "m4-sim-pasta", tipo: "sim_pc", titulo: "📁 No computador: crie uma pasta e guarde um arquivo",
        enunciado: "<p>No computador de mentira, crie a sua pasta e guarde um arquivo nela. O <strong>Bit</strong> ajuda.</p>",
        abertas: ["exp"], inicioPasta: "Documentos",
        pastas: { "Documentos": [{ nome: "redacao", ext: "docx" }] },
        passos: [
          { faca: "Clique com o <b>botão direito</b> na parte branca e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito embaixo do arquivo, onde está vazio." },
          { faca: "Digite <b>Escola</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>escola$/" },
          { faca: "Arraste a <b>redacao</b> para dentro da pasta <b>Escola</b>.", ok: "mover:arq:redacao*>Escola", onde: "arq:redacao" }
        ],
        fimMsg: "Pasta criada e arquivo guardado!",
        explicacao: "Botão direito › Novo › Pasta cria a pasta. Arrastar guarda o arquivo nela." }'''
T_M7 = '''      { id: "m7-sim-acento", tipo: "sim_pc", titulo: "⌨️ No computador: digite com acento",
        enunciado: "<p>Digite no Bloco de Notas de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["notas"],
        passos: [
          { faca: "Digite: <b>Eu sou da escola.</b> (com E maiúsculo: segure <b>Shift</b> e aperte E)", ok: { estado: "notas", texto: "Eu sou da escola." }, onde: "notas:texto" },
          { faca: "Aperte <b>Enter</b> e digite: <b>Você é legal.</b> (o <b>é</b>: aperte o acento <b>´</b>, solte e aperte <b>e</b>)", ok: { estado: "notas", texto: "Eu sou da escola.\\nVocê é legal." }, dica: "O ê de Você: Shift + a tecla do ~, depois e." }
        ],
        fimMsg: "Maiúscula e acento certinhos!",
        explicacao: "Shift + letra = maiúscula. Primeiro o acento, depois a letra." }'''
T_M8 = '''      { id: "m8-sim-atalhos", tipo: "sim_pc", titulo: "⚡ No computador: copiar e colar com atalhos",
        enunciado: "<p>Use os atalhos no Bloco de Notas de treino. O <strong>Bit</strong> confere.</p>",
        abertas: ["notas"], notas: "Bom dia!",
        passos: [
          { faca: "Clique no texto e aperte <b>Ctrl + A</b> para selecionar tudo.", ok: "atalho:Ctrl+A", onde: "notas:texto" },
          { faca: "Aperte <b>Ctrl + C</b> para copiar.", ok: "atalho:Ctrl+C" },
          { faca: "Aperte a seta <b>→</b>, depois <b>Enter</b> e <b>Ctrl + V</b> para colar.", ok: { estado: "notas", texto: "Bom dia!\\nBom dia!" } }
        ],
        fimMsg: "Ctrl + A, Ctrl + C e Ctrl + V: você copiou e colou!",
        explicacao: "Ctrl + A seleciona tudo, Ctrl + C copia, Ctrl + V cola." }'''

if __name__ == "__main__":
    for m, b, mk in [("m3", M3, "m3-sim-programas"), ("m5", M5, "m5-sim-tipos"), ("m6", M6, "m6-sim-mensagens")]:
        print("6º 2027", m, inserir_fim(A, m, "pratica", b, '"%s"' % mk))
    for m, b, mk in [("m1", T_M1, "m1-sim-janela"), ("m4", T_M4, "m4-sim-pasta"), ("m7", T_M7, "m7-sim-acento"), ("m8", T_M8, "m8-sim-atalhos")]:
        print("6º 2027 trilha", m, inserir_fim(T, m, "pratica", b, '"%s"' % mk))
