/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 9º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
(function () {
  const bairro = {
    vertices: [
      { id: "C", rot: "Casa", x: 70, y: 170 }, { id: "Pa", rot: "Padaria", x: 240, y: 60 },
      { id: "Pr", rot: "Praça", x: 230, y: 270 }, { id: "Po", rot: "Posto de saúde", x: 360, y: 320 },
      { id: "E", rot: "Escola", x: 450, y: 150 }],
    arestas: [["C", "Pa", 4], ["C", "Pr", 3], ["Pa", "E", 5], ["Pr", "E", 7], ["Pr", "Po", 2], ["Po", "E", 3]]
  };
  const real = {
    vertices: [
      { id: "E", rot: "Escola", x: 250, y: 50 }, { id: "A", rot: "Tucupi × Mato Grosso", x: 150, y: 50 },
      { id: "B", rot: "Cedro × Mato Grosso", x: 400, y: 50 }, { id: "U", rot: "Comercial União", x: 150, y: 145 },
      { id: "C", rot: "Tucupi × Bahia", x: 150, y: 240 }, { id: "D", rot: "Cedro × Bahia", x: 400, y: 240 },
      { id: "F", rot: "Tucupi × Carlos Santos", x: 150, y: 370 }, { id: "G", rot: "Cedro × Carlos Santos", x: 400, y: 370 },
      { id: "M", rot: "Mercado Municipal", x: 50, y: 300 }],
    arestas: [["E", "A", 0.5], ["E", "B", 1], ["A", "U", 1], ["U", "C", 1], ["C", "F", 2], ["B", "D", 2], ["D", "G", 2], ["C", "D", 1], ["F", "G", 1], ["F", "M", 0.5]]
  };

  PORTAL.registrarAtividades("informatica-9ano-4bim", {

    /* ======================= MISSÃO 1 ======================= */
    m1: {
      basico: [
        { tipo: "info", titulo: "O grafo do bairro (pesos em minutos de caminhada)",
          html: `<div class="tabela-wrap"><table><thead><tr><th>Aresta (ligação)</th><th>Peso (minutos)</th></tr></thead><tbody>
          <tr><td>Casa – Padaria</td><td>4</td></tr><tr><td>Casa – Praça</td><td>3</td></tr><tr><td>Padaria – Escola</td><td>5</td></tr>
          <tr><td>Praça – Escola</td><td>7</td></tr><tr><td>Praça – Posto de saúde</td><td>2</td></tr><tr><td>Posto de saúde – Escola</td><td>3</td></tr></tbody></table></div>
          <p>Na apostila impressa você desenha o grafo: cada lugar é um círculo (vértice) e cada ligação é uma linha (aresta) com o peso escrito em cima.</p>` },
        { tipo: "tabela", titulo: "Os caminhos da Casa até a Escola",
          colunas: ["Caminho", "Total (minutos)"],
          linhas: [["Casa → Padaria → Escola", { r: "9", tipo: "num", w: 5, dica: "4 + 5" }], ["Casa → Praça → Escola", { r: "10", tipo: "num", w: 5 }], ["Casa → Praça → Posto de saúde → Escola", { r: "8", tipo: "num", w: 5 }],
            ["<strong>Qual é o caminho mais curto?</strong>", { op: ["Casa → Padaria → Escola", "Casa → Praça → Escola", "Casa → Praça → Posto de saúde → Escola"], r: "Casa → Praça → Posto de saúde → Escola" }]],
          dicas: ["Some os pesos de cada aresta do caminho.", "O mais curto é o de menor soma, mesmo que tenha mais paradas."],
          explicacao: "4 + 5 = 9 · 3 + 7 = 10 · 3 + 2 + 3 = 8. O mais curto é Casa → Praça → Posto de saúde → Escola (8 minutos), mesmo tendo mais paradas." },
        Object.assign({ tipo: "grafo", titulo: "Trace no mapa o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos", descricao: "Grafo do bairro com Casa, Padaria, Praça, Posto de saúde e Escola" }, bairro,
          { enunciado: "<p>Clique nos vértices, um depois do outro, começando pela Casa. A soma aparece ao lado.</p>", explicacao: "Casa → Praça → Posto de saúde → Escola = 3 + 2 + 3 = 8 minutos." }),
        { tipo: "arvore", titulo: "A árvore de pastas de um computador", modo: "pastas",
          raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📄 redação.txt" }, { t: "📄 mapa.png" }] }, { t: "📁 Fotos", filhos: [{ t: "📄 aniversário.jpg" }] }] },
          perguntas: [
            { p: "Qual pasta é a raiz da árvore?", r: ["Documentos"], tipo: "letras" },
            { p: "Quantas folhas (arquivos) a árvore tem?", r: "3", num: true },
            { p: "Qual é o caminho da raiz até o arquivo mapa.png?", r: ["Documentos > Escola > mapa.png", "Documentos Escola mapa"], tipo: "letras" }],
          dicas: ["A raiz é onde a árvore começa. As folhas são os vértices do fim, que não se dividem mais.", "Escreva o caminho assim: Documentos > Escola > mapa.png"],
          explicacao: "Raiz: Documentos. Folhas: redação.txt, mapa.png e aniversário.jpg (3). Caminho: Documentos > Escola > mapa.png." },
        { tipo: "pc", titulo: "No computador: o grafo do bairro no Paint", programa: "Paint",
          passos: ["Desenhe círculos com o nome de cada lugar e linhas ligando os lugares, com o peso de cada linha.", "Pinte de <strong>outra cor</strong> o caminho mais curto da Casa até a Escola.", "Com o desenho na tela, chame o professor para conferir e carimbar (não precisa salvar)."] },

        { tipo: "info", titulo: "🏘️ Na prática: o nosso bairro de verdade (feito junto com o professor)",
          html: `<p>Agora o grafo é o <strong>bairro da nossa escola</strong>, desenhado a partir do mapa do celular. Cada <strong>esquina</strong> virou um <strong>vértice</strong> (com uma letra) e cada trecho de rua virou uma <strong>aresta</strong>. O <strong>peso</strong> de cada aresta é quantas <strong>quadras</strong> (quarteirões) você anda naquele trecho. Os pesos são aproximados.</p>
          <div class="tabela-wrap"><table><thead><tr><th>Vértice</th><th>Onde fica</th></tr></thead><tbody>
          <tr><td><strong>E</strong></td><td>Escola (Av. Mato Grosso)</td></tr><tr><td><strong>A</strong></td><td>Esquina da R. Tucupi com a Av. Mato Grosso</td></tr><tr><td><strong>B</strong></td><td>Esquina da R. Cedro com a Av. Mato Grosso</td></tr>
          <tr><td><strong>U</strong></td><td>Comercial União (R. Tucupi com a Av. Alagoas)</td></tr><tr><td><strong>C</strong></td><td>Esquina da R. Tucupi com a Av. Bahia</td></tr><tr><td><strong>D</strong></td><td>Esquina da R. Cedro com a Av. Bahia</td></tr>
          <tr><td><strong>F</strong></td><td>Esquina da R. Tucupi com a Av. Carlos Santos</td></tr><tr><td><strong>G</strong></td><td>Esquina da R. Cedro com a Av. Carlos Santos</td></tr><tr><td><strong>M</strong></td><td>Mercado Municipal (Av. Carlos Santos, perto da R. Tucupi)</td></tr></tbody></table></div>
          <div class="tabela-wrap"><table><thead><tr><th>Aresta (rua)</th><th>Peso (quadras)</th></tr></thead><tbody>
          <tr><td>E – A (Av. Mato Grosso)</td><td>½</td></tr><tr><td>E – B (Av. Mato Grosso)</td><td>1</td></tr><tr><td>A – U (R. Tucupi)</td><td>1</td></tr><tr><td>U – C (R. Tucupi)</td><td>1</td></tr><tr><td>C – F (R. Tucupi)</td><td>2</td></tr>
          <tr><td>B – D (R. Cedro)</td><td>2</td></tr><tr><td>D – G (R. Cedro)</td><td>2</td></tr><tr><td>C – D (Av. Bahia)</td><td>1</td></tr><tr><td>F – G (Av. Carlos Santos)</td><td>1</td></tr><tr><td>F – M (Av. Carlos Santos)</td><td>½</td></tr></tbody></table></div>` },
        { tipo: "tabela", titulo: "1. Da escola (E) ao Mercado Municipal (M)",
          colunas: ["Caminho", "Vértices (em ordem)", "Soma dos pesos (quadras)"],
          linhas: [
            ["1 · pela R. Tucupi", "E → A → U → C → F → M", { r: "5", tipo: "num", w: 5 }],
            ["2 · pela R. Cedro", { r: ["E B D G F M"], tipo: "letras", w: 16, ph: "E → ...", dica: "Pela R. Cedro: E → B → D → G e depois F → M." }, { r: "6.5", tipo: "num", w: 5 }],
            ["3 · R. Cedro e depois Av. Bahia", { r: ["E B D C F M"], tipo: "letras", w: 16, ph: "E → ..." }, { r: "6.5", tipo: "num", w: 5 }],
            ["<strong>Qual é o caminho mais curto?</strong>", { op: ["Caminho 1", "Caminho 2", "Caminho 3"], r: "Caminho 1" }, ""]],
          dicas: ["½ + 1 + 1 + 2 + ½ = ?", "Você pode escrever 6,5 ou 6½."],
          explicacao: "Caminho 1: ½ + 1 + 1 + 2 + ½ = 5. Caminho 2: E → B → D → G → F → M = 1 + 2 + 2 + 1 + ½ = 6½. Caminho 3: E → B → D → C → F → M = 1 + 2 + 1 + 2 + ½ = 6½. O mais curto é o 1, pela R. Tucupi, porque tem a menor soma." },
        Object.assign({ tipo: "grafo", titulo: "Confira no mapa: trace o caminho mais curto de E até M", de: "E", para: "M", unidade: "quadras", largura: 520, altura: 400, descricao: "Grafo do bairro real da escola" }, real,
          { explicacao: "E → A → U → C → F → M: 5 quadras." }),
        { tipo: "tabela", titulo: "2. A escola e os dois mercados",
          linhas: [["Distância da escola (E) até o Comercial União (U), em quadras", { r: "1.5", tipo: "num", w: 5 }],
            ["Qual dos dois mercados fica mais perto da escola?", { op: ["Comercial União", "Mercado Municipal"], r: "Comercial União" }]],
          explicacao: "E → A → U = ½ + 1 = 1½ quadra. O Comercial União (1½) fica mais perto que o Mercado Municipal (5)." },
        { tipo: "aberta", titulo: "3. Obra e lama no caminho",
          campos: [{ rot: "Se a Av. Bahia estiver fechada entre C e D, o caminho 3 ainda serve? Por quê?", linhas: 2 }, { rot: "Se uma rua tiver muita lama, o “peso” dela aumenta ou diminui? Por quê?", linhas: 2 }],
          criterios: ["Respondi usando as palavras aresta e peso.", "Expliquei o motivo."],
          exemplo: "Não serve, porque ele usa a aresta C – D, que está fechada. Com lama, o peso aumenta, porque andar ali leva mais tempo e dá mais trabalho." }
      ],
      desafio: [
        { tipo: "arvore", titulo: "Árvore de decisão: adivinhe um objeto da sala", modo: "decisao",
          raiz: { t: "❓ É eletrônico?", filhos: [
            { r: "Sim", t: "❓ Tem tela?", filhos: [{ r: "Sim", t: "🖥️ Monitor" }, { r: "Não", t: "⌨️ Teclado" }] },
            { r: "Não", t: "❓ Serve para escrever?", filhos: [{ r: "Sim", t: "✏️ Lápis" }, { r: "Não", t: "🪑 Cadeira" }] }] },
          perguntas: [
            { p: "a) Quantas perguntas, no máximo, são feitas até chegar a uma resposta?", r: "2", num: true },
            { p: "b) Quantas folhas (respostas) a árvore tem?", r: "4", num: true },
            { p: "c) Para incluir o mouse, que pergunta nova você colocaria no lugar da folha Teclado?", aberta: true, exemplo: "Tem teclas para digitar? (sim → teclado; não → mouse)" }],
          explicacao: "a) 2 perguntas. b) 4 folhas: monitor, teclado, lápis e cadeira. c) Uma pergunta de sim ou não que separe o mouse do teclado, por exemplo: “Tem teclas para digitar?” (sim → teclado; não → mouse)." }
      ],
      turbo: [
        { tipo: "escolha", titulo: "Grafo de amizades",
          enunciado: "<p>Ana é amiga de Bruno e de Carla; Bruno é amigo de Davi; Carla é amiga de Davi e de Elisa.</p>",
          perguntas: [
            { p: "Quem tem mais amigos (de qual vértice saem mais arestas)?", opcoes: ["Carla, com 3 amigos", "Ana, com 2 amigos", "Davi, com 3 amigos"], certo: 0, why: "Carla é amiga de Ana, Davi e Elisa." },
            { p: "Esse grafo tem um ciclo?", opcoes: ["Sim: Ana → Bruno → Davi → Carla → Ana", "Não tem ciclo"], certo: 0 },
            { p: "Por que ele não é uma árvore?", opcoes: ["Porque tem um ciclo, e árvore nunca tem ciclo", "Porque tem mais de 4 vértices", "Porque não tem pesos"], certo: 0 }] }
      ],
      vf: [
        { v: true },
        { v: false, corrigir: { trecho: "é sempre o mais curto", opcoes: ["é sempre o mais curto", "nem sempre é o mais curto"], certo: "nem sempre é o mais curto" }, why: "O mais curto é o de menor soma dos pesos." },
        { v: true },
        { v: true },
        { v: false, corrigir: { trecho: "uma pergunta", opcoes: ["uma pergunta", "uma resposta", "uma raiz"], certo: "uma resposta" } }
      ]
    },

    /* ======================= MISSÃO 2 ======================= */
    m2: {
      basico: [
        { tipo: "cesar", titulo: "Cifra de César com chave 3", chaveInicial: 3,
          enunciado: "<p>Use a tira: para <strong>cifrar</strong>, troque a letra de cima pela de baixo; para <strong>decifrar</strong>, faça o caminho inverso. Os acentos ficam de fora.</p>",
          tarefas: [{ tipo: "cifrar", claro: "ESCOLA", cifrado: "HVFROD" }, { tipo: "decifrar", claro: "INFORMATICA", cifrado: "LQIRUPDWLFD" }, { tipo: "decifrar", claro: "SENHA FORTE", cifrado: "VHQKD IRUWH" }],
          dicas: ["E → H, S → V, C → F…", "Para decifrar, ande 3 casas para trás: L → I, Q → N…"],
          explicacao: "ESCOLA → HVFROD · LQIRUPDWLFD → INFORMÁTICA · VHQKD IRUWH → SENHA FORTE." },
        { tipo: "classificar", modo: "tabela", titulo: "Qual é o ataque?", colunaItem: "Situação", colunaResp: "F, R, E ou D",
          categorias: [{ id: "F", rot: "Força bruta" }, { id: "R", rot: "Ransomware" }, { id: "E", rot: "Engenharia social" }, { id: "D", rot: "DDoS" }],
          itens: [
            { t: "Os arquivos do computador ficaram ilegíveis e apareceu uma mensagem pedindo dinheiro para devolvê-los.", c: "R" },
            { t: "Alguém liga dizendo ser do banco e pede o código que chegou por SMS.", c: "E" },
            { t: "Um programa tenta 0000, 0001, 0002... até acertar a senha do celular.", c: "F" },
            { t: "O site de inscrições sai do ar porque recebeu milhões de pedidos falsos ao mesmo tempo.", c: "D" },
            { t: "Uma mensagem diz que você ganhou um prêmio e pede que você clique e digite a sua senha.", c: "E", why: "É phishing: engana a pessoa para ela mesma entregar a senha." }],
          dicas: ["Engenharia social engana a <strong>pessoa</strong>; força bruta testa senhas; ransomware tranca arquivos; DDoS derruba sites."],
          explicacao: "R · E · F · D · E. DDoS significa <em>Distributed Denial of Service</em>, Negação de Serviço Distribuída." },
        { tipo: "pc", titulo: "No computador: sua frase cifrada", programa: "Bloco de Notas",
          passos: ["Linha 1 — <strong>Texto claro:</strong> uma frase sua de 3 palavras (sem dados pessoais).", "Linha 2 — <strong>Chave: 3</strong>", "Linha 3 — <strong>Texto cifrado:</strong> a sua frase cifrada.", "Chame o professor para conferir e carimbar."] }
      ],
      desafio: [
        { tipo: "tabela", titulo: "Quantas senhas a força bruta precisa testar, no máximo?",
          colunas: ["Senha só de números", "Combinações possíveis"],
          linhas: [["1 dígito", "10"], ["2 dígitos", { r: "100", tipo: "num", w: 10 }], ["4 dígitos", { r: "10000", tipo: "num", w: 10 }], ["6 dígitos", { r: "1000000", tipo: "num", w: 10 }],
            ["Se o programa testa 1.000 senhas por segundo, quanto tempo leva, no máximo, para uma senha de 4 dígitos? (em segundos)", { r: "10", tipo: "num", w: 6 }]],
          dicas: ["Cada dígito a mais multiplica por 10.", "10.000 ÷ 1.000 = ?"],
          explicacao: "100 · 10.000 · 1.000.000. Para 4 dígitos: 10.000 ÷ 1.000 = 10 segundos. Cada dígito a mais multiplica o trabalho da força bruta por 10." }
      ],
      turbo: [
        { tipo: "cesar", titulo: "Força bruta: descubra a chave de FRNLT", chaveInicial: 1,
          enunciado: "<p>Digite <strong>FRNLT</strong> no campo “Experimente” e mude a chave com − e + até o <strong>Decifrado</strong> virar uma palavra.</p>",
          tarefas: [{ tipo: "chave", cifrado: "FRNLT", chave: 5, palavra: "AMIGO" }],
          explicacao: "Com a chave 5, FRNLT vira AMIGO." },
        { tipo: "aberta", titulo: "Por que a cifra de César é fácil de quebrar?", linhas: 2,
          criterios: ["Falei que existem poucas chaves possíveis (só 25).", "Relacionei com a força bruta."],
          exemplo: "Porque só existem 25 chaves possíveis: dá para testar todas em poucos minutos, como na força bruta." }
      ],
      vf: [
        { v: true }, { v: true },
        { v: false, corrigir: { trecho: "mais difícil", opcoes: ["mais difícil", "mais fácil"], certo: "mais fácil" }, why: "4 dígitos: 10.000 combinações; 6 dígitos: 1.000.000." },
        { v: true },
        { v: false, corrigir: { trecho: "um programa que testa todas as senhas possíveis", opcoes: ["um programa que testa todas as senhas possíveis", "enganar a pessoa para ela mesma entregar a senha", "um vírus que apaga arquivos"], certo: "enganar a pessoa para ela mesma entregar a senha" } }
      ]
    },

    /* ======================= MISSÃO 3 ======================= */
    m3: {
      basico: [
        { tipo: "classificar", modo: "tabela", titulo: "Pode ou não pode?", colunaItem: "Situação", colunaResp: "P ou N",
          categorias: [{ id: "P", rot: "Pode" }, { id: "N", rot: "Não pode" }],
          itens: [
            { t: "Usar uma foto com licença CC BY em um trabalho, escrevendo o nome do autor.", c: "P" },
            { t: "Postar a foto de um colega dormindo na sala, sem a autorização dele.", c: "N", why: "Desrespeita o direito de imagem." },
            { t: "Copiar um texto da internet e entregar como se fosse seu.", c: "N", why: "Isso é plágio." },
            { t: "Usar um poema de Machado de Assis, que está em domínio público.", c: "P" },
            { t: "Baixar a música de um cantor e publicar no seu canal como se fosse sua.", c: "N" },
            { t: "Fazer um áudio com a voz de um professor, criada por IA, avisando que não vai ter aula.", c: "N", why: "É um deepfake: desrespeita o direito de imagem e engana as pessoas." }] },
        { tipo: "info", titulo: "Leia a situação", html: "<p class=\"regra\">Um vídeo mostra um jogador famoso dizendo que vai dar celulares para quem clicar em um link. A boca não acompanha a fala, a voz parece robótica e o vídeo não aparece em nenhum site de notícias.</p>" },
        { tipo: "sinais", titulo: "Que sinais mostram que pode ser um deepfake?",
          opcoes: [
            { t: "A boca não acompanha a fala", certo: true }, { t: "A voz parece robótica", certo: true },
            { t: "Nenhum site de notícias confirma", certo: true }, { t: "Uma promessa de presente fácil por link", certo: true },
            { t: "O jogador é famoso", certo: false, why: "Ser famoso não é sinal de falsidade (mas famosos são muito imitados)." },
            { t: "O vídeo tem boa qualidade de imagem", certo: false, why: "Deepfakes também podem ter boa qualidade." }] },
        { tipo: "escolha", titulo: "Motivo e atitude",
          perguntas: [
            { p: "Qual é o motivo de quem espalhou esse vídeo?", opcoes: ["Dinheiro: é um golpe com link", "Humor: é uma piada inocente", "Engano: o jogador errou ao falar"], certo: 0 },
            { p: "O que você faria ao receber esse vídeo?", opcoes: ["Não clico, não compartilho e aviso quem me mandou que pode ser golpe", "Clico rápido para garantir o celular", "Compartilho com a família para todos ganharem"], certo: 0 }] },
        { tipo: "classificar", modo: "tabela", titulo: "Qual é o motivo?", colunaItem: "Mensagem", colunaResp: "D, P, H ou O",
          categorias: [{ id: "D", rot: "Dinheiro" }, { id: "P", rot: "Política" }, { id: "H", rot: "Humor" }, { id: "O", rot: "Ódio" }],
          itens: [
            { t: "“Você não vai acreditar no que aconteceu! Clique aqui” (o link abre um site cheio de propagandas).", c: "D" },
            { t: "Montagem de um candidato fazendo algo que nunca fez, publicada na véspera da eleição.", c: "P" },
            { t: "Um site de humor publica “Escola troca a merenda por pizza todos os dias” e muita gente acredita.", c: "H" },
            { t: "Um perfil falso publica fotos de um colega com apelidos ofensivos.", c: "O" }] },
        { tipo: "pc", titulo: "No computador: cartaz Eu respeito a autoria", programa: "Paint",
          passos: ["Escreva o título <strong>Eu respeito a autoria</strong>.", "Faça um desenho seu (não use fotos de colegas nem imagens copiadas da internet).", "Embaixo, escreva: <strong>Criado por: (seu primeiro nome) · Licença: CC BY</strong>.", "Chame o professor para conferir e carimbar."] }
      ],
      desafio: [
        { tipo: "aberta", titulo: "Escreva o crédito correto da foto da castanheira",
          enunciado: "<p>Foto de uma castanheira, tirada por <strong>Maria Souza</strong>, encontrada no site <strong>Banco de Imagens Livres</strong>, com licença <strong>CC BY</strong>. Modelo: <em>Foto: nome do autor, site onde estava, licença.</em></p>",
          linhas: 2, exigir: ["Maria Souza", "Banco de Imagens Livres", "CC BY"],
          criterios: ["Segui o modelo: Foto: autor, site, licença."], exemplo: "Foto: Maria Souza, Banco de Imagens Livres, CC BY." },
        { tipo: "escolha", titulo: "E se fosse “todos os direitos reservados”?",
          perguntas: [{ p: "Se a imagem tivesse o aviso “todos os direitos reservados”, você poderia usá-la sem pedir autorização?", opcoes: ["Não: precisaria pedir autorização ao autor", "Sim, basta escrever o nome do autor", "Sim, porque está na internet"], certo: 0, why: "“Todos os direitos reservados” (©) quer dizer que só o autor decide quem pode usar." }] }
      ],
      turbo: [
        { tipo: "aberta", titulo: "Por que um deepfake de um colega, mesmo “de brincadeira”, pode causar problemas sérios? O que a vítima deve fazer?", linhas: 4,
          criterios: ["Falei de direito de imagem e cyberbullying (pode ser crime).", "Disse o que a vítima faz: não apaga as provas, conta a um adulto, denuncia."] }
      ],
      vf: [
        { v: false, corrigir: { trecho: "pode ser usado sem dar crédito ao autor", opcoes: ["pode ser usado sem dar crédito ao autor", "tem autor e precisa de crédito ou autorização"], certo: "tem autor e precisa de crédito ou autorização" } },
        { v: true }, { v: true }, { v: true },
        { v: false, corrigir: { trecho: "é espalhada por engano, nunca para ganhar dinheiro", opcoes: ["é espalhada por engano, nunca para ganhar dinheiro", "pode ser espalhada por dinheiro, política, humor, ódio ou engano"], certo: "pode ser espalhada por dinheiro, política, humor, ódio ou engano" } }
      ]
    },

    /* ======================= PROJETO FINAL ======================= */
    pf: {
      basico: [
        { tipo: "autoavaliacao", titulo: "Folheie a apostila impressa: quais missões já têm o carimbo do Básico?",
          itens: ["🕸️ Missão 1 – Grafos e árvores", "🔐 Missão 2 – Criptografia e ataques", "©️ Missão 3 – Autoria, imagem e deepfakes"] },
        { tipo: "info", titulo: "Faltou algum carimbo?", html: "<p>Se faltar algum carimbo (por exemplo, porque você faltou à aula), volte à missão agora, faça o Básico e peça o carimbo ao professor.</p>" },
        { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
          campos: [{ rot: "🕸️ Grafos e árvores", linhas: 2 }, { rot: "🔐 Criptografia e ataques", linhas: 2 }, { rot: "©️ Autoria, imagem e deepfakes", linhas: 2 }],
          criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."], minPalavras: 4 }
      ],
      desafio: [
        { tipo: "pc", titulo: "No computador: digite as suas três frases", programa: "Bloco de Notas",
          passos: ["Digite as três frases no Bloco de Notas.", "Confira letra maiúscula, acentos e pontuação.", "Mostre ao professor."] }
      ],
      turbo: [
        { tipo: "pc", titulo: "Apresente para a turma", programa: "Projetor da sala",
          passos: ["Escolha a missão de que você mais gostou.", "Prepare duas ou três frases dizendo por quê.", "Apresente para a turma, no projetor."] }
      ]
    }
  });
})();
