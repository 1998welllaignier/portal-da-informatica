"""Simuladores-ajudante (sim_pc) do 6º ano, 4º bimestre de 2026 (apostila em uso).
Entram NO FIM da seção, com id próprio e opcional: true (não mudam o progresso nem a nota de quem já fez).
Rodar da raiz do repositório: python3 ferramentas/simuladores/sim_6ano_2026.py"""
import sys; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir_fim

A = "dados/atividades/informatica-6ano-4bim.js"
T = "dados/atividades/informatica-6ano-4bim-trilha.js"

# ---------- M1: a minha pasta e o meu primeiro arquivo ----------
def m1_pasta(id_, curto=False):
    extra = "" if curto else '''
          { faca: "Para conferir, clique na pasta <b>Meus trabalhos</b>, no painel da esquerda do Explorador. O arquivo está lá?", ok: "abrir:pasta:Meus trabalhos", onde: "nav:Meus trabalhos", dica: "Clique no Explorador (barra de tarefas, 📁) e depois em Meus trabalhos, na lista da esquerda." },'''
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "🖥️ Simulador: crie a sua pasta e salve o seu primeiro arquivo",
        enunciado: "<p>Treine no <strong>computador de mentira</strong> o caminho completo: criar uma pasta, escrever no Bloco de Notas e salvar o arquivo dentro da pasta. O <strong>Bit</strong>, o seu ajudante, diz o que fazer e corrige na hora. Depois faça igualzinho no computador de verdade!</p>",
        area: [{{ nome: "Lixeira", app: "lixeira" }}],
        pastas: {{ "Documentos": [{{ nome: "lista-de-chamada", ext: "txt" }}] }},
        passos: [
          {{ faca: "Abra o <b>Explorador de Arquivos</b>: clique na pastinha amarela 📁 da <b>barra de tarefas</b>, lá embaixo.", ok: ["clique:bar:exp", "abrir:app:exp"], onde: "bar:exp" }},
          {{ faca: "No painel da esquerda, clique em <b>Documentos</b>.", ok: "abrir:pasta:Documentos", onde: "nav:Documentos" }},
          {{ faca: "Clique com o <b>botão direito</b> num espaço vazio (a parte branca embaixo dos arquivos) e escolha <b>Novo › Pasta</b>.", ok: "criar:pasta:Documentos", dica: "Botão direito na parte branca, onde não tem nenhum arquivo. No menu: Novo › Pasta." }},
          {{ faca: "Digite o nome <b>Meus trabalhos</b> e aperte <b>Enter</b>.", ok: "/^renomear:pasta:.*>meus trabalhos$/", dica: "Se o nome saiu errado: botão direito na pasta › Renomear." }},
          {{ faca: "Agora abra o <b>Bloco de Notas</b>: clique no botão <b>Iniciar ⊞</b> e depois em <b>Bloco de Notas</b> 📝.", ok: "abrir:app:notas", onde: "bar:iniciar", dica: "O Iniciar é o ⊞ da barra de tarefas. Ele abre a lista de programas." }},
          {{ faca: "Escreva uma frase sobre você começando com <b>Sobre mim:</b> (exemplo: <i>Sobre mim: eu gosto de futebol.</i>)", ok: {{ estado: "notas", texto: "Sobre mim:", contem: true }}, onde: "notas:texto" }},
          {{ faca: "Salve com <b>Ctrl + S</b>. Na janela <b>Salvar como</b>, escolha a pasta <b>Meus trabalhos</b>, dê o nome <b>sobre-mim</b> e clique em <b>Salvar</b>.", ok: {{ estado: "salvo", nome: "sobre-mim", pasta: "Meus trabalhos" }}, erros: {{ "salvar:*": "Quase! Confira: o nome é <b>sobre-mim</b> e a pasta é <b>Meus trabalhos</b>. Aperte <b>Ctrl + S</b> e salve de novo." }}, dica: "Ctrl + S abre a janela Salvar como. Em Pasta, escolha Meus trabalhos. Em Nome, digite sobre-mim." }},{extra}
        ],
        fimMsg: "Pasta criada, texto escrito e arquivo salvo no lugar certo. Agora faça o mesmo no computador da sala!",
        explicacao: "Para salvar um arquivo no lugar certo: crie a pasta (botão direito › Novo › Pasta), escreva no programa e use Ctrl + S (Salvar como), escolhendo a pasta e o nome." }}'''

M1_ORGANIZAR = '''      { id: "m1-sim-organizar", opcional: true, tipo: "sim_pc", titulo: "🗂️ Simulador: organize os arquivos em pastas",
        enunciado: "<p>A pasta <strong>Downloads</strong> está uma bagunça! Guarde cada arquivo na pasta certa, arrastando com o mouse. O <strong>Bit</strong> confere cada um.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: { "Downloads": [{ nome: "Fotos", tipo: "pasta" }, { nome: "Músicas da festa", tipo: "pasta" }, { nome: "Trabalhos", tipo: "pasta" }, { nome: "praia", ext: "jpg", figura: "🏖️" }, { nome: "forro-junino", ext: "mp3" }, { nome: "redacao-meio-ambiente", ext: "docx" }, { nome: "aniversario-da-vo", ext: "jpg", figura: "🎂" }] },
        passos: [
          { faca: "Primeiro, ligue as <b>Extensões</b> (botão lá em cima, à direita) para ver o tipo de cada arquivo.", ok: "extensoes:sim", onde: "exp:ext" },
          { faca: "A <b>praia.jpg</b> é uma foto. <b>Arraste</b> ela até a pasta <b>Fotos</b> e solte.", ok: "mover:arq:praia*>Fotos", onde: "arq:praia.jpg", erros: { "mover:arq:praia*": "Ops! Foto vai na pasta <b>Fotos</b>. Abra a pasta, arraste de volta para Downloads e tente de novo." } },
          { faca: "A <b>aniversario-da-vo.jpg</b> também é foto: leve para <b>Fotos</b>.", ok: "mover:arq:aniversario-da-vo*>Fotos", onde: "arq:aniversario-da-vo.jpg" },
          { faca: "O <b>.mp3</b> é uma música. Arraste para <b>Músicas da festa</b>.", ok: "mover:arq:forro-junino*>Músicas da festa", onde: "arq:forro-junino.mp3", erros: { "mover:arq:forro-junino*": "Música (.mp3) vai na pasta <b>Músicas da festa</b>." } },
          { faca: "E o <b>.docx</b> é um texto do Word: arraste para <b>Trabalhos</b>.", ok: "mover:arq:redacao-meio-ambiente*>Trabalhos", onde: "arq:redacao-meio-ambiente.docx" },
          { faca: "Confira: dê <b>duplo clique</b> na pasta <b>Fotos</b> para ver as duas fotos lá dentro.", ok: "abrir:pasta:Fotos", onde: "arq:Fotos" }
        ],
        fimMsg: "Downloads organizado: cada arquivo na sua pasta. Assim fica fácil achar depois!",
        explicacao: "Organizar é guardar cada arquivo numa pasta com nome claro. A extensão ajuda a saber o tipo: .jpg foto, .mp3 música, .docx texto." }'''

# ---------- M3: cidadão digital (senha forte e site seguro) ----------
M3_CONTA = '''      { id: "m3-sim-conta", opcional: true, tipo: "sim_pc", titulo: "🔐 Simulador: crie uma conta segura no site da biblioteca",
        enunciado: "<p>Treine no <strong>navegador de mentira</strong>: confira se o site é seguro, crie um usuário sem dados pessoais e uma senha forte. Nada aqui vai para a internet de verdade.</p>",
        abertas: ["web"],
        web: {
          "biblioteca.escola.br": { titulo: "Biblioteca Digital da Escola", palavras: "biblioteca livros escola",
            html: "<p>📚 Crie a sua conta para pegar livros digitais emprestados.</p><label class='campo'>Nome de usuário (não use o seu nome completo)<input data-campo='usuario' data-k='pg:usuario' placeholder='ex.: leitor_veloz'></label><label class='campo'>Senha<input data-campo='senha' data-k='pg:senha' type='text' placeholder='mínimo 8: letras, números e símbolos'></label><button data-ev='criar' data-k='pg:criar' class='pri'>Criar conta</button>" },
          "premios-gratis.net": { titulo: "Ganhe 1000 moedas!", seguro: false, html: "<p>🎁 Digite a sua senha do jogo para ganhar moedas grátis!</p>" }
        },
        passos: [
          { faca: "Clique na <b>barra de endereço</b>, digite <b>biblioteca.escola.br</b> e aperte <b>Enter</b>.", ok: "url:biblioteca.escola.br", onde: "web:url", dica: "A barra de endereço é a caixa comprida lá em cima do navegador." },
          { faca: "Antes de criar a conta, clique no <b>cadeado 🔒</b> ao lado do endereço para ver se a conexão é segura.", ok: "cadeado:biblioteca.escola.br", onde: "web:cadeado" },
          { faca: "Crie um <b>nome de usuário</b> que não mostra quem você é (sem nome completo, sem idade). Exemplo: <b>leitor_veloz</b>. Digite com pelo menos 5 letras.", ok: { estado: "campo", nome: "usuario", regex: "^\\\\S{5,}$" }, onde: "pg:usuario", dica: "Clique na caixa Nome de usuário e digite um apelido, sem espaço. Ex.: leitor_veloz" },
          { faca: "Agora a <b>senha forte</b>: pelo menos <b>8</b> caracteres, com letra <b>maiúscula</b>, <b>minúscula</b>, <b>número</b> e <b>símbolo</b> (! @ # $). Ex.: <b>Livro#2026azul</b> (invente a sua).", ok: { estado: "senhaForte", campo: "senha" }, onde: "pg:senha", dica: "Confira: tem maiúscula (A-Z)? minúscula (a-z)? número (0-9)? símbolo (! @ # $ %)? 8 ou mais caracteres?" },
          { faca: "Tudo certo! Clique em <b>Criar conta</b>.", ok: "pagina:criar", onde: "pg:criar" }
        ],
        fimMsg: "Conta criada com segurança: site com cadeado, usuário sem dados pessoais e senha forte. E lembre: senha não se empresta para ninguém!",
        explicacao: "Antes de digitar uma senha, confira o endereço e o cadeado. Senha forte tem 8 ou mais caracteres misturando maiúsculas, minúsculas, números e símbolos. Nome de usuário não deve mostrar nome completo, idade ou endereço." }'''

# ---------- M4: guardar, compactar e achar ----------
def m4_zip(id_, curto=False):
    maior = '''
          { faca: "Primeiro ligue as <b>Extensões</b> (botão lá em cima, à direita): assim você vê o <b>.zip</b> no fim do nome.", ok: "extensoes:sim", onde: "exp:ext" },''' if curto else '''
          { faca: "Ative as <b>Extensões</b> e olhe a coluna <b>Tamanho</b>. Clique <b>uma vez</b> no arquivo <b>maior</b> da pasta.", ok: "clique:arq:video-da-festa*", onde: "exp:ext", erros: { "clique:arq:*": "Esse não é o maior. Compare a coluna Tamanho: MB é maior que KB!" } },'''
    pesquisa = '''
          { faca: "Onde está a <b>receita-de-bolo</b>? Use a <b>pesquisa</b> 🔍 do Explorador: digite <b>bolo</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*bolo/", onde: "exp:busca" },
          { faca: "Achou! Abra a <b>receita-de-bolo</b> com <b>duplo clique</b>.", ok: "/^abrir:arq:receita-de-bolo/", onde: "arq:receita-de-bolo.txt" }''' if not curto else '''
          { faca: "Agora ache a <b>receita-de-bolo</b> pela <b>pesquisa</b> 🔍: digite <b>bolo</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*bolo/", onde: "exp:busca" }'''
    return f'''      {{ id: "{id_}", opcional: true, tipo: "sim_pc", titulo: "🗜️ Simulador: compacte, descompacte e ache arquivos",
        enunciado: "<p>No <strong>computador de mentira</strong>, compacte uma pasta em <strong>.zip</strong>, descompacte o .zip que um colega mandou e ache um arquivo pela pesquisa. O <strong>Bit</strong> confere cada passo.</p>",
        abertas: ["exp"], inicioPasta: "Downloads",
        pastas: {{
          "Downloads": [{{ nome: "Trabalho de Ciências", tipo: "pasta" }}, {{ nome: "video-da-festa", ext: "mp4", kb: 48600 }}, {{ nome: "foto-da-turma", ext: "jpg", kb: 3200, figura: "🧑‍🤝‍🧑" }}, {{ nome: "fotos-da-excursao", ext: "zip", kb: 9800, tem: [{{ nome: "cachoeira", ext: "jpg", kb: 4100, figura: "🏞️" }}, {{ nome: "onibus", ext: "jpg", kb: 3900, figura: "🚌" }}, {{ nome: "lanche", ext: "jpg", kb: 3500, figura: "🥪" }}] }}],
          "Trabalho de Ciências": [{{ nome: "capa", ext: "docx", kb: 820 }}, {{ nome: "pesquisa-planetas", ext: "docx", kb: 1450 }}, {{ nome: "cartaz", ext: "pptx", kb: 2600 }}],
          "Documentos": [{{ nome: "receita-de-bolo", ext: "txt", kb: 2, texto: "Bolo de cenoura\\n- 3 cenouras\\n- 3 ovos\\n- 2 xícaras de farinha\\n- 1 xícara de açúcar" }}]
        }},
        passos: [{maior}
          {{ faca: "A pasta <b>Trabalho de Ciências</b> é grande para mandar ao professor. Clique nela com o <b>botão direito</b> e escolha <b>{'Compactar para arquivo ZIP' if False else '[compactar]'}</b>.", ok: "compactar:arq:Trabalho de Ciências", onde: "arq:Trabalho de Ciências", dica: "No Windows 11 o menu diz <b>Compactar para arquivo ZIP</b>; no Windows 10, <b>Enviar para › Pasta compactada</b>." }},
          {{ faca: "Apareceu o <b>Trabalho de Ciências.zip</b> 🗜️: compare o tamanho dele com os arquivos lá de dentro (2,6 MB + 1,4 MB + 820 KB). Dê <b>duplo clique</b> no .zip para ver o que tem dentro.", ok: "/^abrir:arq:trabalho de ci.ncias(\\\\.zip)?$/", onde: "arq:Trabalho de Ciências.zip" }},
          {{ faca: "Feche essa janela no <b>X</b>.", ok: "fechar:jan:ver", onde: "jan:ver:fechar" }},
          {{ faca: "Um colega mandou <b>fotos-da-excursao.zip</b>. Para usar as fotos, descompacte: <b>botão direito</b> nele › <b>Extrair Tudo...</b>", ok: "extrair:arq:fotos-da-excursao*", onde: "arq:fotos-da-excursao.zip" }},{pesquisa}
        ],
        fimMsg: "Você compactou uma pasta (o .zip ficou menor), descompactou outro .zip e achou um arquivo pela pesquisa!",
        explicacao: "Compactar junta arquivos num só .zip e diminui o tamanho, bom para mandar pela internet. Descompactar (Extrair Tudo) tira os arquivos do .zip. A pesquisa 🔍 do Explorador acha um arquivo pelo nome." }}'''.replace("<b>[compactar]</b>", "<b>Compactar</b> (no Windows 10: Enviar para › Pasta compactada)")

if __name__ == "__main__":
    print("6º m1 pasta", inserir_fim(A, "m1", "basico", m1_pasta("m1-sim-pasta"), '"m1-sim-pasta"'))
    print("6º m1 organizar", inserir_fim(A, "m1", "desafio", M1_ORGANIZAR, '"m1-sim-organizar"'))
    print("6º m3 conta", inserir_fim(A, "m3", "pratica", M3_CONTA, '"m3-sim-conta"'))
    print("6º m4 zip", inserir_fim(A, "m4", "pratica", m4_zip("m4-sim-zip"), '"m4-sim-zip"'))
    print("6º trilha m1", inserir_fim(T, "m1", "basico", m1_pasta("m1-sim-pasta", True), '"m1-sim-pasta"'))
    print("6º trilha m4", inserir_fim(T, "m4", "pratica", m4_zip("m4-sim-zip", True), '"m4-sim-zip"'))
