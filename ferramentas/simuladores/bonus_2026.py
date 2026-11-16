"""⭐ Bônus relâmpago (16/11/2026): tarefinhas curtas (5 a 10 min) que abrem quando o aluno termina TUDO da aula.
Valem XP a mais (até +150) e a medalha ⭐ no placar; não entram na nota. Seção `bonus: [...]` da missão.
Rodar da raiz: python3 ferramentas/simuladores/bonus_2026.py"""
import sys, re; sys.path.insert(0, "ferramentas/simuladores")
from inserir import inserir_fim, _secao, _itens

D = "dados/atividades/informatica-%s.js"


def mover_secao(p, missao, de, para, id_):
    """tira a atividade `id_` da seção `de` e põe no fim da seção `para` (o id não muda: o progresso continua valendo)"""
    s = open(p).read(); a, f = _secao(s, missao, de); its = _itens(s, a, f)
    k = [i for i, (x, y) in enumerate(its) if re.match(r'\{\s*id\s*:\s*"%s"' % re.escape(id_), s[x:y])]
    if not k: return "não achei"
    x, y = its[k[0]]; bloco = s[x:y].replace(" opcional: true,", "", 1)
    # apaga com a vírgula vizinha
    ini, fim = x, y
    m = re.match(r"\s*,", s[fim:])
    if m: fim += m.end()
    else:
        m2 = re.search(r",\s*$", s[:ini])
        if m2: ini = m2.start()
    s = s[:ini] + s[fim:]
    open(p, "w").write(s)
    return inserir_fim(p, missao, para, "      " + bloco, "\0nunca\0")


B = {}
B[("5ano-4bim", "m2")] = '''      { id: "m2-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: enigmas da lista e do grafo",
        perguntas: [
          { p: "Na lista <b>🍎, 🍌, 🍇, 🍓</b>, qual fruta está na <b>3ª posição</b>?", opcoes: ["🍇 Uva", "🍌 Banana", "🍓 Morango"], certo: 0, why: "Contando do começo: 1ª maçã, 2ª banana, 3ª uva." },
          { p: "Num grafo de amizades, Ana está ligada a Bia e a Caio. Quantas <b>arestas</b> (linhas) saem da Ana?", opcoes: ["2", "1", "3"], certo: 0, why: "Uma linha até a Bia e outra até o Caio: 2 arestas." },
          { p: "O que é um <b>vértice</b> no grafo?", opcoes: ["A bolinha (por exemplo, uma pessoa ou um lugar)", "A linha que liga duas bolinhas", "O nome do grafo"], certo: 0, why: "Vértice é a bolinha; aresta é a linha que liga." }
        ] }'''
B[("6ano-4bim", "m2")] = '''      { id: "m2-bonus-1", tipo: "ordenar", titulo: "⭐ Bônus: o algoritmo do pão com manteiga",
        enunciado: "<p>Coloque os passos na ordem certa (sequência).</p>",
        itens: ["Pegar o pão", "Abrir o pão com a faca", "Passar a manteiga", "Fechar o pão", "Comer"],
        alternativas: [[0, 1, 2, 3, 4]],
        explicacao: "Sequência: cada passo depois do outro. Se trocar a ordem, o pão fica sem manteiga!" },
      { id: "m2-bonus-2", tipo: "escolha", titulo: "⭐ Bônus: repetição ou seleção?",
        perguntas: [
          { p: "“Bata palmas <b>5 vezes</b>.” Isso é…", opcoes: ["Repetição", "Seleção", "Sequência"], certo: 0, why: "Fazer a mesma coisa várias vezes é repetição." },
          { p: "“<b>SE</b> estiver frio, <b>ENTÃO</b> vista o casaco.” Isso é…", opcoes: ["Seleção (uma escolha)", "Repetição", "Sequência"], certo: 0, why: "SE... ENTÃO escolhe um caminho: seleção." },
          { p: "No labirinto, o robô anda 3 casas para a frente. Qual comando é mais curto?", opcoes: ["repita 3 vezes: ande", "ande, ande, ande, ande", "vire, vire, vire"], certo: 0, why: "A repetição escreve o mesmo passo uma vez só e repete." }
        ] }'''
B[("7ano-4bim", "m2")] = '''      { id: "m2-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: detetive de algoritmos",
        perguntas: [
          { p: "Dividir “organizar a festa da turma” em <b>convites, comida, música e decoração</b> é…", opcoes: ["Decomposição", "Depuração", "Reúso"], certo: 0, why: "Decompor é quebrar um problema grande em partes menores." },
          { p: "Na lista <b>cores = [azul, verde, amarelo]</b>, qual item está na posição 2?", opcoes: ["verde", "azul", "amarelo"], certo: 0, why: "Contando do 1: azul é o 1, verde é o 2." },
          { p: "O robô deveria andar 4 casas, mas o programa diz “repita 3 vezes: ande”. Achar e corrigir esse erro é…", opcoes: ["Depuração (achar o bug)", "Decomposição", "Reúso"], certo: 0, why: "Depurar é achar e corrigir o erro: trocar 3 por 4." },
          { p: "Criar o bloco “desenhar casa” uma vez e usar nas 3 casas da rua é…", opcoes: ["Reúso", "Depuração", "Lista"], certo: 0, why: "Reúso: escreve uma vez, usa várias." }
        ] }'''
B[("8ano-4bim", "m1")] = '''      { id: "m1-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: corrida de buscas",
        perguntas: [
          { p: "Lista em ordem de 1 a 100. Na busca binária, qual número você olha primeiro?", opcoes: ["O do meio (50)", "O 1", "O 100"], certo: 0, why: "A binária sempre começa pelo meio e descarta metade." },
          { p: "Procurando o 80 e o meio é 50, qual metade você descarta?", opcoes: ["De 1 a 50", "De 51 a 100", "Nenhuma"], certo: 0, why: "80 é maior que 50, então ele só pode estar na metade de cima." },
          { p: "Na lista <b>4, 1</b>, o método da bolha faz o quê?", opcoes: ["Troca: fica 1, 4", "Nada", "Apaga o 4"], certo: 0, why: "Vizinhos fora de ordem trocam de lugar." }
        ] }'''
B[("8ano-4bim", "m4")] = '''      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: quem paga o grátis?",
        perguntas: [
          { p: "Um aplicativo é grátis. Como a empresa ganha dinheiro?", opcoes: ["Com anúncios e com os dados dos usuários", "Não ganha nada", "Com o dinheiro da escola"], certo: 0, why: "Quando é grátis, quem paga é a propaganda (feita com os seus dados)." },
          { p: "Qual direito da LGPD você usa ao pedir: “apaguem a minha conta”?", opcoes: ["Apagar (eliminação)", "Corrigir", "Saber"], certo: 0, why: "A LGPD garante o direito de pedir que apaguem os seus dados." }
        ] }'''
B[("9ano-4bim", "m3")] = '''      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: licença relâmpago",
        perguntas: [
          { p: "A foto tem licença <b>CC BY</b>. Posso usar no trabalho?", opcoes: ["Sim, dando o crédito (autor, site e licença)", "Não, nunca", "Sim, e posso dizer que é minha"], certo: 0, why: "CC BY deixa usar, desde que dê o crédito." },
          { p: "E se a foto diz <b>“Todos os direitos reservados”</b>?", opcoes: ["Só com autorização do autor", "Pode usar à vontade", "Basta mudar a cor"], certo: 0, why: "Todos os direitos reservados: precisa pedir autorização." }
        ] }'''
B[("9ano-4bim", "m4")] = '''      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: a IA aprendeu certo?",
        perguntas: [
          { p: "Uma IA só viu fotos de gatos <b>brancos</b>. O que pode acontecer com um gato preto?", opcoes: ["Ela pode errar: é o viés", "Ela acerta sempre", "Ela vira um gato"], certo: 0, why: "A IA aprende com os exemplos; exemplos de um tipo só causam viés." },
          { p: "Qual é a ordem de como a IA aprende?", opcoes: ["Coletar, treinar, testar, usar", "Usar, testar, coletar, treinar", "Treinar, usar, coletar, testar"], certo: 0 }
        ] }'''

B[("5ano-4bim", "m3")] = '''      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: verdadeiro ou falso relâmpago",
        perguntas: [
          { p: "“O sol é quente <b>E</b> o gelo é frio.” Essa frase é…", opcoes: ["Verdadeira (as duas partes são verdadeiras)", "Falsa"], certo: 0, why: "Com E, as duas partes precisam ser verdadeiras: e são!" },
          { p: "“O peixe voa <b>OU</b> o pássaro voa.” Essa frase é…", opcoes: ["Verdadeira (basta uma parte ser verdadeira)", "Falsa"], certo: 0, why: "Com OU, basta uma parte verdadeira: o pássaro voa." },
          { p: "<b>SE</b> chover, <b>ENTÃO</b> levo o guarda-chuva. Hoje choveu. O que eu faço?", opcoes: ["Levo o guarda-chuva", "Levo o boné", "Fico em casa"], certo: 0 }
        ] }'''
B[("5ano-4bim", "m4")] = '''      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: internet com cuidado",
        perguntas: [
          { p: "Um site diz “VOCÊ GANHOU UM CELULAR!!! CLIQUE AQUI!!!”. O que você faz?", opcoes: ["Não clico e conto a um adulto", "Clico rápido", "Mando meu endereço"], certo: 0, why: "Prêmio que você não pediu e muitas exclamações são sinais de golpe." },
          { p: "Quer usar o desenho que a Maria fez. O que é certo?", opcoes: ["Pedir para a Maria e dizer que foi ela que fez", "Dizer que foi você", "Usar sem falar nada"], certo: 0, why: "Respeitar a autoria é dar o crédito a quem fez." }
        ] }'''
B[("6ano-4bim", "m3")] = '''      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: qual senha é mais forte?",
        perguntas: [
          { p: "Qual destas senhas é a <b>mais forte</b>?", opcoes: ["Tr3m#Az7ul!", "123456", "pedro2013"], certo: 0, why: "Mistura maiúsculas, minúsculas, números e símbolos, e não tem o seu nome." },
          { p: "O colega pediu a sua senha emprestada. O que você faz?", opcoes: ["Não empresto: senha é só minha", "Empresto só hoje", "Escrevo na lousa"], certo: 0 },
          { p: "O celular velho parou de funcionar. Para onde ele vai?", opcoes: ["Ponto de coleta de eletrônicos", "Lixo comum", "Rio"], certo: 0, why: "Eletrônico tem peças que podem ser recicladas e materiais que poluem: ponto de coleta." }
        ] }'''
B[("6ano-4bim", "m4")] = '''      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: bits e bytes relâmpago",
        perguntas: [
          { p: "Lâmpadas que valem 8, 4, 2 e 1. Acesas: a de <b>8</b> e a de <b>1</b>. Que número é?", opcoes: ["9", "81", "5"], certo: 0, why: "8 + 1 = 9." },
          { p: "O que é maior?", opcoes: ["1 GB", "1 MB", "1 KB"], certo: 0, why: "KB < MB < GB: o GB é o maior." },
          { p: "Qual extensão é de <b>vídeo</b>?", opcoes: [".mp4", ".txt", ".jpg"], certo: 0 }
        ] }'''
B[("7ano-4bim", "m3")] = '''      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: golpe ou não?",
        perguntas: [
          { p: "SMS: “Seu pacote está preso. Pague R$ 2 neste link: correios-entrega.xyz”. É…", opcoes: ["Golpe: link estranho e pressa", "Seguro"], certo: 0, why: "Site oficial não termina em .xyz; pedido de pagamento por link é golpe comum." },
          { p: "Chegou um código de 6 números que você não pediu e alguém pede para você mandar. Você…", opcoes: ["Não manda para ninguém", "Manda rápido", "Posta no grupo"], certo: 0, why: "Esse código é a 2ª etapa da sua senha: passar o código entrega a sua conta." }
        ] }'''
# 7º M4 é montada por função: o bônus foi colocado à mão no arquivo
_B7M4 = '''      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: o GPS relâmpago",
        perguntas: [
          { p: "Caminho A: 2 + 5 = 7 min. Caminho B: 3 + 3 = 6 min. Qual o GPS escolhe?", opcoes: ["O B (6 min)", "O A (7 min)"], certo: 0, why: "O mais curto é o de menor soma dos pesos." },
          { p: "Num grafo, a Escola está ligada à Casa, à Praça e à Padaria. Qual é o <b>grau</b> da Escola?", opcoes: ["3", "1", "4"], certo: 0, why: "Grau é quantas arestas chegam no vértice: 3." }
        ] }'''

MOVER = [("8ano-4bim", "m3", "pratica", "m3-sim-noticia"), ("8ano-4bim-trilha", "m3", "pratica", "m3-sim-noticia"),
         ("9ano-4bim", "m2", "pratica", "m2-sim-golpes"), ("9ano-4bim-trilha", "m2", "pratica", "m2-sim-golpes")]

if __name__ == "__main__":
    for (arq, m), bloco in B.items():
        print(arq, m, inserir_fim_bonus := None) if False else None
        ids = re.findall(r'id: "([^"]+)"', bloco)
        for k, b in enumerate(re.split(r"(?<=\}),\n(?=      \{ id: \"m\d-bonus-)", bloco)):
            print(arq, m, ids[k], inserir_fim(D % arq, m, "bonus", b, '"%s"' % ids[k]))
    for arq, m, de, id_ in MOVER:
        print(arq, m, id_, "→ bônus:", mover_secao(D % arq, m, de, "bonus", id_))
