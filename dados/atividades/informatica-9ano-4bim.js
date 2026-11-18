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
      pratica: [
        { tipo: "sim_grafo", titulo: "Ache o caminho mais curto até a escola",
        enunciado: "<p>Cada número na rua é o tempo em <strong>minutos a pé</strong> (o <strong>peso</strong> da aresta). Saindo de <strong>Casa</strong>, clique nos lugares, um vizinho por vez, até chegar na <strong>Escola</strong> com a <strong>menor soma</strong>. Depois clique em <strong>Verificar</strong>.</p>",
        vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, mercado: { nome: "Mercado", ic: "🛒", x: 160, y: 45 }, igreja: { nome: "Igreja", ic: "⛪", x: 160, y: 195 },
          campo: { nome: "Campo", ic: "⚽", x: 270, y: 45 }, praca: { nome: "Praça", ic: "🌳", x: 270, y: 195 }, escola: { nome: "Escola", ic: "🏫", x: 360, y: 120 } },
        arestas: [["casa", "mercado", 4], ["casa", "igreja", 2], ["mercado", "igreja", 1], ["mercado", "campo", 3], ["campo", "escola", 3], ["igreja", "praca", 3], ["praca", "escola", 2]],
        inicio: "casa", fim: "escola", menor: 7, solucao: ["casa", "igreja", "praca", "escola"], unidade: "min",
        dicas: ["Nem sempre o caminho que parece mais reto é o mais rápido. Some os pesos!", "Experimente passar pela Igreja."],
        explicacao: "Caminho mais curto: Casa → Igreja → Praça → Escola = 2 + 3 + 2 = <strong>7 min</strong>. Aplicativos de mapa fazem essa conta com milhões de vértices!" }
      ],
      basico: [
        { tipo: "info", titulo: "O grafo do bairro (pesos em minutos de caminhada)",
          html: `<div class="tabela-wrap"><table><thead><tr><th>Aresta (ligação)</th><th>Peso (minutos)</th></tr></thead><tbody>
          <tr><td>Casa – Padaria</td><td>4</td></tr><tr><td>Casa – Praça</td><td>3</td></tr><tr><td>Padaria – Escola</td><td>5</td></tr>
          <tr><td>Praça – Escola</td><td>7</td></tr><tr><td>Praça – Posto de saúde</td><td>2</td></tr><tr><td>Posto de saúde – Escola</td><td>3</td></tr></tbody></table></div>
          <p>No próximo passo, você mesmo monta este grafo na tela: cada lugar é um círculo (vértice) e cada ligação é uma linha (aresta), com o peso escrito em cima.</p>` },
        Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo do bairro: ligue os lugares", descricao: "Grafo do bairro para montar" }, bairro,
          { enunciado: "<p>Agora é você quem desenha o grafo. Clique em um lugar e depois no outro lugar ligado a ele, seguindo a tabela de arestas. O peso aparece em cima de cada linha.</p>",
            dicas: ["Comece pela Casa: ela se liga à Padaria e à Praça."],
            explicacao: "O grafo tem 5 vértices (os lugares) e 6 arestas (as ligações), cada uma com o seu peso em minutos." }),
        { tipo: "tabela", titulo: "Os caminhos da Casa até a Escola", enunciado: "<p>Use a tabela do <strong>grafo do bairro</strong>, logo acima. Para saber o total de um caminho, <strong>some os pesos</strong> (minutos) das ligações por onde ele passa. O mais curto é o de <strong>menor soma</strong>.</p>", robo: {"paineis": ["🗺️ Outro grafo: Casa —2— Feira —3— Escola e Casa —1— Praça —1— Posto —2— Escola"], "passos": [{"fala": "Olha como eu calculo num grafo <b>diferente</b>. Somo os pesos de cada caminho:", "painel": 0, "linha": "Casa → Feira → Escola = 2 + 3 = 5 min"}, {"fala": "", "painel": 0, "linha": "Casa → Praça → Posto → Escola = 1 + 1 + 2 = 4 min", "espera": 1200}, {"fala": "O mais curto é o de <b>menor soma</b>, mesmo com mais paradas!", "painel": 0, "linha": "Mais curto: pela Praça e pelo Posto (4 min)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: some os pesos dos caminhos da tarefa! 💪"},
          colunas: ["Caminho", "Total (minutos)"],
          linhas: [["Casa → Padaria → Escola", { r: "9", tipo: "num", w: 5, dica: "4 + 5" }], ["Casa → Praça → Escola", { r: "10", tipo: "num", w: 5 }], ["Casa → Praça → Posto de saúde → Escola", { r: "8", tipo: "num", w: 5 }],
            ["<strong>Qual é o caminho mais curto?</strong>", { op: ["Casa → Padaria → Escola", "Casa → Praça → Escola", "Casa → Praça → Posto de saúde → Escola"], r: "Casa → Praça → Posto de saúde → Escola" }]],
          dicas: ["Some os pesos de cada aresta do caminho.", "O mais curto é o de menor soma, mesmo que tenha mais paradas."],
          explicacao: "4 + 5 = 9 · 3 + 7 = 10 · 3 + 2 + 3 = 8. O mais curto é Casa → Praça → Posto de saúde → Escola (8 minutos), mesmo tendo mais paradas." },
        Object.assign({ tipo: "grafo", titulo: "Trace no mapa o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos", descricao: "Grafo do bairro com Casa, Padaria, Praça, Posto de saúde e Escola" }, bairro,
          { enunciado: "<p>Clique nos vértices, um depois do outro, começando pela Casa. A soma aparece ao lado.</p>", explicacao: "Casa → Praça → Posto de saúde → Escola = 3 + 2 + 3 = 8 minutos." }),
        { tipo: "arvore", titulo: "A árvore de pastas de um computador", enunciado: "<p>Olhe a árvore de pastas: a <strong>raiz</strong> é a pasta lá de cima, de onde tudo começa; as <strong>folhas</strong> são os arquivos, que não se dividem mais. O <strong>caminho</strong> é a sequência de pastas da raiz até o arquivo.</p>", modo: "pastas",
          raiz: { t: "📁 Documentos", filhos: [{ t: "📁 Escola", filhos: [{ t: "📄 redação.txt" }, { t: "📄 mapa.png" }] }, { t: "📁 Fotos", filhos: [{ t: "📄 aniversário.jpg" }] }] },
          perguntas: [
            { p: "Qual pasta é a raiz da árvore?", r: ["Documentos"], tipo: "letras" },
            { p: "Quantas folhas (arquivos) a árvore tem?", r: "3", num: true },
            { p: "Qual é o caminho da raiz até o arquivo mapa.png?", r: ["Documentos > Escola > mapa.png", "Documentos Escola mapa"], tipo: "letras" }],
          dicas: ["A raiz é onde a árvore começa. As folhas são os vértices do fim, que não se dividem mais.", "Escreva o caminho assim: Documentos > Escola > mapa.png"],
          explicacao: "Raiz: Documentos. Folhas: redação.txt, mapa.png e aniversário.jpg (3). Caminho: Documentos > Escola > mapa.png." },
        { tipo: "info", titulo: "🏘️ Na prática: o nosso bairro de verdade (feito junto com o professor)",
          html: `<p>Agora o grafo é o <strong>bairro da nossa escola</strong>, desenhado a partir do mapa do celular. Cada <strong>esquina</strong> virou um <strong>vértice</strong> (com uma letra) e cada trecho de rua virou uma <strong>aresta</strong>. O <strong>peso</strong> de cada aresta é quantas <strong>quadras</strong> (quarteirões) você anda naquele trecho. Os pesos são aproximados.</p>
          <div class="tabela-wrap"><table><thead><tr><th>Vértice</th><th>Onde fica</th></tr></thead><tbody>
          <tr><td><strong>E</strong></td><td>Escola (Av. Mato Grosso)</td></tr><tr><td><strong>A</strong></td><td>Esquina da R. Tucupi com a Av. Mato Grosso</td></tr><tr><td><strong>B</strong></td><td>Esquina da R. Cedro com a Av. Mato Grosso</td></tr>
          <tr><td><strong>U</strong></td><td>Comercial União (R. Tucupi com a Av. Alagoas)</td></tr><tr><td><strong>C</strong></td><td>Esquina da R. Tucupi com a Av. Bahia</td></tr><tr><td><strong>D</strong></td><td>Esquina da R. Cedro com a Av. Bahia</td></tr>
          <tr><td><strong>F</strong></td><td>Esquina da R. Tucupi com a Av. Carlos Santos</td></tr><tr><td><strong>G</strong></td><td>Esquina da R. Cedro com a Av. Carlos Santos</td></tr><tr><td><strong>M</strong></td><td>Mercado Municipal (Av. Carlos Santos, perto da R. Tucupi)</td></tr></tbody></table></div>
          <div class="tabela-wrap"><table><thead><tr><th>Aresta (rua)</th><th>Peso (quadras)</th></tr></thead><tbody>
          <tr><td>E – A (Av. Mato Grosso)</td><td>½</td></tr><tr><td>E – B (Av. Mato Grosso)</td><td>1</td></tr><tr><td>A – U (R. Tucupi)</td><td>1</td></tr><tr><td>U – C (R. Tucupi)</td><td>1</td></tr><tr><td>C – F (R. Tucupi)</td><td>2</td></tr>
          <tr><td>B – D (R. Cedro)</td><td>2</td></tr><tr><td>D – G (R. Cedro)</td><td>2</td></tr><tr><td>C – D (Av. Bahia)</td><td>1</td></tr><tr><td>F – G (Av. Carlos Santos)</td><td>1</td></tr><tr><td>F – M (Av. Carlos Santos)</td><td>½</td></tr></tbody></table></div>` },
        { tipo: "tabela", titulo: "1. Da escola (E) ao Mercado Municipal (M)", enunciado: "<p>Use a tabela de vértices e arestas do bairro, logo acima. Complete os vértices de cada caminho, em ordem, e <strong>some os pesos</strong> (quadras) das arestas. O mais curto é o de <strong>menor soma</strong>.</p>", robo: {"paineis": ["🗺️ Somando quadras (outro caminho, de exemplo)"], "passos": [{"fala": "Olha como eu somo um caminho <b>de exemplo</b>: escrevo os vértices em ordem e o peso de cada trecho.", "painel": 0, "titulo": "X → Y → Z → W"}, {"fala": "", "painel": 0, "linha": "X → Y: ½ quadra", "espera": 700}, {"fala": "", "painel": 0, "linha": "Y → Z: 2 quadras", "espera": 700}, {"fala": "", "painel": 0, "linha": "Z → W: 1 quadra", "espera": 900}, {"fala": "Somo tudo. Meia quadra é <b>0,5</b>:", "painel": 0, "linha": "0,5 + 2 + 1 = 3,5 quadras", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: siga cada rua no mapa da tarefa, anote os vértices e some as quadras! (Pode escrever 6,5 ou 6½.) 💪"},
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
        { tipo: "tabela", titulo: "2. A escola e os dois mercados", enunciado: "<p>Use a mesma tabela do bairro. Some as quadras do caminho mais curto da Escola (E) até o Comercial União (U) e compare com o caminho mais curto até o Mercado Municipal (M), que você achou na atividade 1.</p>", robo: {"paineis": ["🗺️ Comparando distâncias (exemplo)"], "passos": [{"fala": "Para saber o que fica <b>mais perto</b>, eu calculo as duas distâncias e comparo:", "painel": 0, "linha": "Até a farmácia: 1 + ½ = 1,5 quadra"}, {"fala": "", "painel": 0, "linha": "Até a padaria: 2 + 1 = 3 quadras", "espera": 900}, {"fala": "O menor número ganha:", "painel": 0, "linha": "Mais perto: a farmácia", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: calcule as distâncias até os dois mercados e compare! 💪"},
          linhas: [["Distância da escola (E) até o Comercial União (U), em quadras", { r: "1.5", tipo: "num", w: 5 }],
            ["Qual dos dois mercados fica mais perto da escola?", { op: ["Comercial União", "Mercado Municipal"], r: "Comercial União" }]],
          explicacao: "E → A → U = ½ + 1 = 1½ quadra. O Comercial União (1½) fica mais perto que o Mercado Municipal (5)." },
        { tipo: "escolha", titulo: "3. Obra e lama no caminho",
          enunciado: "<p>Lembre do <strong>caminho 3</strong> da atividade 1 (a tabela “Da escola (E) ao Mercado Municipal (M)”): ele vai pela <strong>R. Cedro e depois pela Av. Bahia</strong>, passando por <strong>E → B → D → C → F → M</strong>. Repare que ele usa a aresta <strong>C – D</strong> (Av. Bahia).</p><p>Lembre também: o <strong>peso</strong> de uma aresta é a distância, o tempo ou o esforço para passar por aquela rua.</p>",
          perguntas: [
            { p: "Se a Av. Bahia estiver fechada por uma obra entre C e D, o caminho 3 (E → B → D → C → F → M) ainda serve?", opcoes: ["Não serve, porque ele usa a aresta C – D, que está fechada", "Serve, porque é o caminho mais curto", "Serve, porque o grafo não muda"], certo: 0 },
            { p: "Se uma rua tiver muita lama, o <strong>peso</strong> dela aumenta ou diminui?", opcoes: ["Aumenta, porque andar ali leva mais tempo e dá mais trabalho", "Diminui, porque a rua fica mais curta", "Não muda nada"], certo: 0,
              why: "O <strong>peso</strong> de uma aresta mede o custo de passar por ela: distância, tempo ou esforço." }],
          explicacao: "O caminho 3 (E → B → D → C → F → M) não serve, porque ele usa a aresta C – D, que está fechada. Com lama, o peso aumenta, porque andar ali leva mais tempo e dá mais trabalho." }
      ],
      desafio: [
        { tipo: "arvore", titulo: "Árvore de decisão: adivinhe um objeto da sala", enunciado: "<p>Na árvore de decisão, cada <strong>❓ pergunta</strong> se divide em Sim e Não, e cada <strong>folha</strong> é uma resposta (um objeto). Jogue uma vez e depois responda olhando a árvore.</p>", modo: "decisao",
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
      pratica: [
        { tipo: "sim_cesar", titulo: "Decifre a mensagem: Cifra de César",
        enunciado: "<p>Júlio César trocava cada letra pela que está <strong>3 casas</strong> à frente no alfabeto. Gire a <strong>chave</strong> com as setas até a mensagem fazer sentido.</p>",
        cifrada: "VHJUHGR JXDUGDGR", resposta: "SEGREDO GUARDADO",
        explicacao: "A <strong>chave</strong> é o número de casas. Quem não sabe a chave vê só letras sem sentido." },
      { tipo: "sim_cesar", titulo: "Desafio: agora ninguém contou a chave!",
        enunciado: "<p>Teste chave por chave até achar a mensagem. Testar todas as possibilidades tem nome: <strong>ataque de força bruta</strong>.</p>",
        cifrada: "F XJSMF J XJLWJIT", resposta: "A SENHA E SEGREDO",
        explicacao: "Com só 25 chaves possíveis, a força bruta quebra a Cifra de César em segundos. Por isso a criptografia de hoje (como no HTTPS) usa chaves enormes." },
      { id: "m2-sim-golpes", tipo: "sim_pc", titulo: "🎣 Simulador: pesque o golpe na caixa de email",
        enunciado: "<p>Na caixa de email do computador de mentira há <strong>golpes</strong> misturados com mensagem verdadeira. Olhe o <strong>remetente</strong>, desconfie da pressa e proteja a sua conta. O <strong>Bit</strong> confere.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }, { nome: "Navegador", app: "web" }],
        emails: [
          { id: "pix", nome: "Banco do Brasil", de: "seguranca@banco-do-brasill.com.br", assunto: "⚠️ Seu Pix foi BLOQUEADO",
            html: "<p>Detectamos uma movimentação suspeita. Seu Pix será cancelado em 1 hora.</p><p>Para desbloquear, <a data-link='bb-desbloqueio-pix.xyz' data-k='pg:linkpix'>clique aqui e confirme sua senha</a>.</p>" },
          { id: "codigo", nome: "Primo Lucas", de: "lucas.primo2009@email.com", assunto: "me passa o código que chegou aí",
            html: "<p>Oi! Mandei sem querer um código de 6 números pro seu celular. Me passa ele rapidinho? 🙏</p>" },
          { id: "escola", nome: "Secretaria da Escola", de: "secretaria@escola.edu.br", assunto: "Ative a verificação em duas etapas",
            html: "<p>Turma, protejam a conta do portal da escola: ativem a verificação em duas etapas.</p><p><a data-link='conta.escola.edu.br/seguranca' data-k='pg:linkconta'>conta.escola.edu.br/seguranca</a></p>" }
        ],
        web: {
          "bb-desbloqueio-pix.xyz": { titulo: "Desbloqueio Pix", seguro: false, html: "<p>Digite sua senha do banco:</p><label class='campo'>Senha<input data-campo='senhabanco'></label>" },
          "conta.escola.edu.br/seguranca": { titulo: "Conta da escola: segurança", html: "<p>🔐 Segurança da conta</p><p><label><input type='checkbox' data-ev='2fa' data-k='pg:2fa'> Ativar verificação em duas etapas (senha + código no celular)</label></p><button data-ev='salvar2fa' data-k='pg:salvar2fa' class='pri'>Salvar</button>" }
        },
        passos: [
          { faca: "Abra o <b>Email</b> (duplo clique no 📧 da área de trabalho).", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Abra o email <b>⚠️ Seu Pix foi BLOQUEADO</b>.", ok: "email:abrir:pix", onde: "email:pix" },
          { faca: "Olhe o <b>remetente</b> com lupa: <i>banco-do-brasil<b>l</b></i>, com dois L! Pressa (1 hora) e pedido de senha. Não clique no link: <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:pix", "email:excluir:pix"], onde: "email:denunciar", erros: { "link:bb*": "Você clicou no link do golpe (é <b>phishing</b>: “pescaria” de senha). Feche essa guia, volte ao Email (📧 na barra) e denuncie." } },
          { faca: "Abra o email do <b>Primo Lucas</b>.", ok: "email:abrir:codigo", onde: "email:codigo" },
          { faca: "Ninguém manda código “sem querer”: é golpe para <b>roubar a sua conta</b> (o código é a 2ª etapa da senha). Nunca passe o código! Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:codigo", "email:excluir:codigo"], onde: "email:denunciar" },
          { faca: "Abra o email da <b>Secretaria da Escola</b> e clique no link <b>conta.escola.edu.br/seguranca</b>.", ok: "link:conta.escola.edu.br/seguranca", onde: "email:escola" },
          { faca: "Na página de segurança, marque <b>Ativar verificação em duas etapas</b>.", ok: { estado: "marcado", nome: "2fa" }, onde: "pg:2fa" },
          { faca: "Clique em <b>Salvar</b>. Agora, mesmo quem descobrir a sua senha não entra sem o código do seu celular.", ok: "pagina:salvar2fa", onde: "pg:salvar2fa" }
        ],
        fimMsg: "Você pescou os dois golpes pelo remetente e pela pressa e ativou a verificação em duas etapas. Conta protegida!",
        explicacao: "Phishing é o golpe que imita banco, loja ou amigo para pescar senha ou código. Confira o remetente letra por letra, desconfie de pressa e nunca passe senha ou código. A verificação em duas etapas protege mesmo se a senha vazar." }
      ],
      bonus: [
      
      ],
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
        { tipo: "cesar_livre", titulo: "Sua frase cifrada", chave: 3, minPalavras: 3,
          enunciado: "<p>Escreva uma frase sua e cifre com a <strong>chave 3</strong>. O portal confere se cada letra foi trocada certo. Depois, mostre só o texto cifrado a um colega e veja se ele consegue decifrar.</p>",
          dicas: ["Os acentos e o ç ficam de fora: escreva a frase sem eles.", "Os espaços continuam no mesmo lugar."],
          explicacao: "Cada letra andou 3 casas no alfabeto. Quem sabe a chave consegue fazer o caminho de volta e decifrar." }
      ],
      desafio: [
        { tipo: "tabela", titulo: "Quantas senhas a força bruta precisa testar, no máximo?", enunciado: "<p>Numa senha só de números, cada dígito pode ser de 0 a 9: são <strong>10 opções</strong>. Cada dígito a mais <strong>multiplica por 10</strong>: 1 dígito = 10, 2 dígitos = 10 × 10, e assim por diante. Pode digitar com ou sem ponto (10.000 ou 10000).</p>", robo: {"paineis": ["🔐 Senhas só de números"], "passos": [{"fala": "Cada dígito tem 10 opções (0 a 9). A cada dígito a mais, eu <b>multiplico por 10</b>:", "painel": 0, "linha": "1 dígito: 10"}, {"fala": "", "painel": 0, "linha": "2 dígitos: 10 × 10 = 100", "espera": 900}, {"fala": "", "painel": 0, "linha": "3 dígitos: 100 × 10 = 1.000", "marca": true, "espera": 1200}, {"fala": "E o tempo? Se o programa testa <b>100</b> senhas por segundo, eu <b>divido</b>:", "painel": 0, "linha": "1.000 ÷ 100 = 10 segundos (exemplo)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: continue multiplicando por 10 e faça a divisão da tarefa (1.000 por segundo)! 💪"},
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
        { tipo: "escolha", titulo: "Por que a cifra de César é fácil de quebrar?",
          perguntas: [
            { p: "Quantas chaves diferentes a cifra de César tem (com o alfabeto de 26 letras)?", opcoes: ["Só 25", "Milhões", "Infinitas"], certo: 0, why: "Deslocar 26 casas volta à letra original; então sobram 25 chaves úteis." },
            { p: "Por que isso deixa a cifra fácil de quebrar?", opcoes: ["Dá para testar todas as chaves em poucos minutos, como num ataque de força bruta", "Porque as letras ficam maiúsculas", "Porque a mensagem fica mais curta"], certo: 0 }],
          explicacao: "Porque só existem 25 chaves possíveis: dá para testar todas em poucos minutos, como na força bruta." }
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
      pratica: [
        { id: "m3-sim-credito", tipo: "sim_pc", titulo: "🖼️ Simulador: ache a autora da foto e escreva o crédito",
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
        explicacao: "Antes de usar uma imagem, veja a licença. CC BY deixa usar dando o crédito: autor, site e licença. “Todos os direitos reservados” precisa de autorização." },
        { id: "m3-pratica-1", tipo: "mensagens", titulo: "No seu feed: compartilhar ou não?", app: "📲 Feed",
        botoes: [{ id: "S", rot: "🔁 Pode compartilhar" }, { id: "N", rot: "🛑 Não compartilhe" }],
        enunciado: "<p>Pense em <strong>autoria</strong>, <strong>direito de imagem</strong> e se pode ser <strong>deepfake</strong>.</p>",
        itens: [
          { de: "@zoeira_9ano", t: "📸 Foto do colega fazendo careta no recreio, postada sem ele saber kkk", c: "N", why: "Direito de imagem: precisa de autorização da pessoa." },
          { de: "@noticias_ja", t: "🎥 Vídeo do prefeito dizendo que vai acabar com as férias! (sem fonte, voz meio robótica)", c: "N", why: "Pode ser deepfake. Confira em fontes confiáveis antes." },
          { de: "@arte_livre", t: "🖼️ Ilustração com licença CC BY — Autora: Ana Lima. Pode compartilhar dando crédito.", c: "S", why: "Licença Creative Commons com crédito à autora: pode!" },
          { de: "@prefeitura_oficial", t: "📢 Campanha de vacinação no posto do centro até sexta.", c: "S" },
          { de: "@memes_br", t: "🎵 Música inteira de um cantor famoso, baixada e repostada como se fosse sua", c: "N", why: "Isso é plágio e fere o direito autoral." }],
        okMsg: "Você pensa antes de compartilhar: autoria, imagem e verdade!" }
      ],
      bonus: [
      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: licença relâmpago",
        perguntas: [
          { p: "A foto tem licença <b>CC BY</b>. Posso usar no trabalho?", opcoes: ["Sim, dando o crédito (autor, site e licença)", "Não, nunca", "Sim, e posso dizer que é minha"], certo: 0, why: "CC BY deixa usar, desde que dê o crédito." },
          { p: "E se a foto diz <b>“Todos os direitos reservados”</b>?", opcoes: ["Só com autorização do autor", "Pode usar à vontade", "Basta mudar a cor"], certo: 0, why: "Todos os direitos reservados: precisa pedir autorização." }
        ] }
      ],
      basico: [
        { id: "m3-basico-1", tipo: "classificar", modo: "tabela", titulo: "Pode ou não pode?", colunaItem: "Situação", colunaResp: "P ou N",
          categorias: [{ id: "P", rot: "Pode" }, { id: "N", rot: "Não pode" }],
          itens: [
            { t: "Usar uma foto com licença CC BY em um trabalho, escrevendo o nome do autor.", c: "P" },
            { t: "Postar a foto de um colega dormindo na sala, sem a autorização dele.", c: "N", why: "Desrespeita o direito de imagem." },
            { t: "Copiar um texto da internet e entregar como se fosse seu.", c: "N", why: "Isso é plágio." },
            { t: "Usar um poema de Machado de Assis, que está em domínio público.", c: "P" },
            { t: "Baixar a música de um cantor e publicar no seu canal como se fosse sua.", c: "N" },
            { t: "Fazer um áudio com a voz de um professor, criada por IA, avisando que não vai ter aula.", c: "N", why: "É um deepfake: desrespeita o direito de imagem e engana as pessoas." }] },
        { id: "m3-sim-checagem", tipo: "sim_pc", titulo: "🎭 Simulador: o vídeo viral é verdade ou deepfake?",
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
        explicacao: "Deepfake é vídeo ou áudio falso feito com IA. Antes de compartilhar, procure em agências de checagem e em sites de notícias confiáveis." },
        { id: "m3-basico-2", tipo: "info", titulo: "Leia a situação", html: "<p class=\"regra\">Um vídeo mostra um jogador famoso dizendo que vai dar celulares para quem clicar em um link. A boca não acompanha a fala, a voz parece robótica e o vídeo não aparece em nenhum site de notícias.</p>" },
        { id: "m3-basico-3", tipo: "sinais", titulo: "Que sinais mostram que pode ser um deepfake?",
          opcoes: [
            { t: "A boca não acompanha a fala", certo: true }, { t: "A voz parece robótica", certo: true },
            { t: "Nenhum site de notícias confirma", certo: true }, { t: "Uma promessa de presente fácil por link", certo: true },
            { t: "O jogador é famoso", certo: false, why: "Ser famoso não é sinal de falsidade (mas famosos são muito imitados)." },
            { t: "O vídeo tem boa qualidade de imagem", certo: false, why: "Deepfakes também podem ter boa qualidade." }] },
        { id: "m3-basico-4", tipo: "escolha", titulo: "Motivo e atitude",
          perguntas: [
            { p: "Qual é o motivo de quem espalhou esse vídeo?", opcoes: ["Dinheiro: é um golpe com link", "Humor: é uma piada inocente", "Engano: o jogador errou ao falar"], certo: 0 },
            { p: "O que você faria ao receber esse vídeo?", opcoes: ["Não clico, não compartilho e aviso quem me mandou que pode ser golpe", "Clico rápido para garantir o celular", "Compartilho com a família para todos ganharem"], certo: 0 }] },
        { id: "m3-basico-5", tipo: "classificar", modo: "tabela", titulo: "Qual é o motivo?", colunaItem: "Mensagem", colunaResp: "D, P, H ou O",
          categorias: [{ id: "D", rot: "Dinheiro" }, { id: "P", rot: "Política" }, { id: "H", rot: "Humor" }, { id: "O", rot: "Ódio" }],
          itens: [
            { t: "“Você não vai acreditar no que aconteceu! Clique aqui” (o link abre um site cheio de propagandas).", c: "D" },
            { t: "Montagem de um candidato fazendo algo que nunca fez, publicada na véspera da eleição.", c: "P" },
            { t: "Um site de humor publica “Escola troca a merenda por pizza todos os dias” e muita gente acredita.", c: "H" },
            { t: "Um perfil falso publica fotos de um colega com apelidos ofensivos.", c: "O" }] },
        { id: "m3-basico-6", tipo: "cartaz", titulo: "Monte aqui o cartaz Eu respeito a autoria", tituloCartaz: "Eu respeito a autoria",
          campos: [
            { rot: "Embaixo dos desenhos, escreva <strong>Criado por:</strong> com o seu primeiro nome e <strong>Licença: CC BY</strong>:", ph: "Criado por: … · Licença: CC BY", gab: "Criado por: (seu primeiro nome) · Licença: CC BY", exemplo: "Criado por: Ana · Licença: CC BY", re: "criado\\s+por[\\s\\S]*cc\\s*-?\\s*by", dica: "Precisa ter <strong>Criado por:</strong> com o seu nome e <strong>Licença: CC BY</strong>." },
            { rot: "O que a licença CC BY deixa as outras pessoas fazerem? (esta resposta não vai para o cartaz)", cartaz: false, ph: "…", gab: "usar e compartilhar, desde que deem crédito ao autor", exemplo: "Usar e compartilhar, desde que deem crédito ao autor.", re: "cr[eé]dito|nome do autor|citar|citando|autor", dica: "Procure <strong>CC BY</strong> no <strong>💡 Para começar</strong>: o BY quer dizer “dar crédito”." }],
          okMsg: "Cartaz pronto e conferido! Ficou registrado para o professor." }
      ],
      desafio: [
        { tipo: "aberta", titulo: "Escreva o crédito correto da foto da castanheira", robo: {"paineis": ["©️ Crédito de outra foto"], "passos": [{"fala": "Olha como eu escrevo o crédito de <b>outra</b> foto, seguindo o modelo <b>Foto: autor, site, licença</b>:", "painel": 0, "titulo": "Foto de um ipê, de João Lima, no site Natureza Livre, licença CC BY"}, {"fala": "", "painel": 0, "linha": "Foto: João Lima, Natureza Livre, CC BY.", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: escreva o crédito da foto da <b>castanheira</b>, no mesmo modelo! 💪"},
          enunciado: "<p>Foto de uma castanheira, tirada por <strong>Maria Souza</strong>, encontrada no site <strong>Banco de Imagens Livres</strong>, com licença <strong>CC BY</strong>. Modelo: <em>Foto: nome do autor, site onde estava, licença.</em></p>",
          linhas: 2,
          criterios: ["Segui o modelo: Foto: autor, site, licença."], exemplo: "Foto: Maria Souza, Banco de Imagens Livres, CC BY.",
          conferir: { grupos: [{ dica: "começar com “Foto:”", alts: ["foto"] }, { dica: "o nome da autora (Maria Souza)", alts: ["maria souza"] }, { dica: "o site (Banco de Imagens Livres)", alts: ["banco de imagens livres"] }, { dica: "a licença (CC BY)", alts: ["cc by", "cc-by"] }],
            msg: "Crédito escrito do jeito certo: autor, site e licença!" } },
        { tipo: "escolha", titulo: "E se fosse “todos os direitos reservados”?",
          perguntas: [{ p: "Se a imagem tivesse o aviso “todos os direitos reservados”, você poderia usá-la sem pedir autorização?", opcoes: ["Não: precisaria pedir autorização ao autor", "Sim, basta escrever o nome do autor", "Sim, porque está na internet"], certo: 0, why: "“Todos os direitos reservados” (©) quer dizer que só o autor decide quem pode usar." }] }
      ],
      turbo: [
        { tipo: "aberta", titulo: "Por que um deepfake de um colega, mesmo “de brincadeira”, pode causar problemas sérios? O que a vítima deve fazer?", robo: {"paineis": ["⚠️ Por que é sério", "🛡️ O que a vítima faz"], "passos": [{"fala": "Vou pensar num caso <b>parecido</b>: um áudio falso imitando a voz de uma professora. Por que é sério?", "painel": 0, "linha": "Usa a voz dela sem autorização"}, {"fala": "", "painel": 0, "linha": "Pode fazer as pessoas acreditarem numa mentira", "espera": 1000}, {"fala": "E o que a vítima faz? Não apaga as provas, conta a um adulto e denuncia:", "painel": 1, "linha": "Guardar o áudio e os prints", "marca": true}, {"fala": "", "painel": 1, "linha": "Contar à direção e denunciar", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: responda sobre o <b>deepfake do colega</b>, com as suas palavras! 💪"},
          campos: [{ rot: "Por que pode causar problemas sérios?", linhas: 3 }, { rot: "O que a vítima deve fazer?", linhas: 3 }],
          criterios: ["Falei de direito de imagem e cyberbullying (pode ser crime).", "Disse o que a vítima faz: não apaga as provas, conta a um adulto, denuncia."],
          conferir: { minPalavras: 6, porCampo: [
            ["direito de imagem", "imagem", "cyberbullying", "crime", "humilh", "mentira", "falso", "reputac", "vergonha", "lei", "expoe", "expor", "constrang"],
            ["prova", "print", "nao apag", "adulto", "professor", "famil", "pais", "denunc", "policia", "delegacia", "conta", "contar"]] },
          exemplo: "Porque usa a imagem da pessoa sem autorização (direito de imagem), pode humilhar e ser cyberbullying, e isso pode ser crime. A vítima não apaga as provas (tira print), conta a um adulto de confiança e denuncia." }
      ],
      vf: [
        { v: false, corrigir: { trecho: "pode ser usado sem dar crédito ao autor", opcoes: ["pode ser usado sem dar crédito ao autor", "tem autor e precisa de crédito ou autorização"], certo: "tem autor e precisa de crédito ou autorização" } },
        { v: true }, { v: true }, { v: true },
        { v: false, corrigir: { trecho: "é espalhada por engano, nunca para ganhar dinheiro", opcoes: ["é espalhada por engano, nunca para ganhar dinheiro", "pode ser espalhada por dinheiro, política, humor, ódio ou engano"], certo: "pode ser espalhada por dinheiro, política, humor, ódio ou engano" } }
      ]
    },

    /* ======================= MISSÃO 4 ======================= */
    m4: {
      pratica: [
        { tipo: "mensagens", titulo: "Seja a IA: aprenda com os exemplos e separe os e-mails", app: "📧 E-mail",
          botoes: [{ id: "S", rot: "🚫 Spam" }, { id: "N", rot: "✅ Normal" }],
          enunciado: `<p><strong>1. Treino:</strong> estes exemplos já vieram com a resposta certa. Procure o <strong>padrão</strong>:</p>
            <div class="tabela-wrap"><table><thead><tr><th>E-mail de exemplo</th><th>Resposta</th></tr></thead><tbody>
            <tr><td>“GRÁTIS! Clique já e ganhe um prêmio!”</td><td>🚫 Spam</td></tr>
            <tr><td>“Prêmio garantido, só hoje, clique no link”</td><td>🚫 Spam</td></tr>
            <tr><td>“Reunião de pais na quinta, às 19h”</td><td>✅ Normal</td></tr>
            <tr><td>“Segue o trabalho de Ciências em anexo”</td><td>✅ Normal</td></tr></tbody></table></div>
            <p><strong>2. Use o que aprendeu:</strong> agora você é a IA. Separe os e-mails novos.</p>`,
          itens: [
            { de: "promo@sorteio.xyz", t: "Você foi escolhido! Prêmio GRÁTIS, clique já!", c: "S", why: "Tem o padrão do spam: grátis, prêmio, clique já." },
            { de: "Escola", t: "Lembrete: a prova de Informática é na semana que vem.", c: "N" },
            { de: "ofertas@ganhe.com", t: "Só hoje: clique no link e ganhe um celular", c: "S", why: "Pressa + prêmio + link: padrão de spam." },
            { de: "Prima Ana", t: "Mandei as fotos do aniversário no grupo da família.", c: "N" }],
          okMsg: "Você fez o que a IA faz: aprendeu um padrão com exemplos e usou nos e-mails novos!" }
      ],
      bonus: [
      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: a IA aprendeu certo?",
        perguntas: [
          { p: "Uma IA só viu fotos de gatos <b>brancos</b>. O que pode acontecer com um gato preto?", opcoes: ["Ela pode errar: é o viés", "Ela acerta sempre", "Ela vira um gato"], certo: 0, why: "A IA aprende com os exemplos; exemplos de um tipo só causam viés." },
          { p: "Qual é a ordem de como a IA aprende?", opcoes: ["Coletar, treinar, testar, usar", "Usar, testar, coletar, treinar", "Treinar, usar, coletar, testar"], certo: 0 }
        ] }
      ],
      basico: [
        { tipo: "ordenar", titulo: "Como a IA aprende: coloque as etapas em ordem",
          itens: ["Coletar muitos exemplos com a resposta certa (os dados)", "Treinar: procurar padrões nos exemplos", "Testar com exemplos que ela nunca viu", "Usar no dia a dia para fazer previsões"],
          dicas: ["Primeiro vêm os exemplos; depois o treino."],
          explicacao: "Coletar dados → treinar → testar → usar. No filtro de spam: milhares de e-mails marcados → descobre as palavras do spam → confere com e-mails novos → manda sozinho para a pasta Spam." },
        { tipo: "classificar", modo: "tabela", titulo: "Usa IA ou não usa?", colunaItem: "Situação", colunaResp: "IA?",
          categorias: [{ id: "S", rot: "🤖 Usa IA" }, { id: "N", rot: "⚙️ Não usa IA" }],
          itens: [
            { t: "O aplicativo escolhe o próximo vídeo pelo que você já assistiu", c: "S", why: "Recomendação aprende com o que você vê." },
            { t: "O celular desbloqueia reconhecendo o seu rosto", c: "S", why: "Reconhecimento facial é IA." },
            { t: "A calculadora faz 2 + 2", c: "N", why: "É uma conta fixa: não aprende com exemplos." },
            { t: "O teclado sugere a próxima palavra", c: "S", why: "Aprende com muitos textos." },
            { t: "O interruptor acende a lâmpada", c: "N", why: "Só liga e desliga: não aprende nada." },
            { t: "O tradutor passa uma frase do inglês para o português", c: "S", why: "O tradutor aprendeu com milhões de frases." }],
          explicacao: "Usa IA quando o programa aprendeu com muitos exemplos: recomendação, rosto, teclado e tradutor. Calculadora e interruptor seguem regras fixas." },
        { tipo: "escolha", titulo: "A IA também erra",
          perguntas: [
            { p: "Uma IA de fotos foi treinada quase só com fotos de cachorros brancos. O que deve acontecer?", opcoes: ["Ela pode errar mais com cachorros de outras cores: isso é viés", "Ela acerta todos os cachorros do mundo", "Ela vira um cachorro"], certo: 0, why: "Exemplos de um tipo só ensinam errado: viés." },
            { p: "O chatbot respondeu com toda a certeza a data de um fato histórico. O que eu faço?", opcoes: ["Confiro em outras fontes, porque o chatbot pode inventar respostas", "Copio sem conferir, porque IA nunca erra", "Apago o chatbot"], certo: 0 },
            { p: "Como evitar o viés ao treinar uma IA?", opcoes: ["Usar muitos exemplos, de vários tipos diferentes", "Usar poucos exemplos, todos iguais", "Não usar exemplos"], certo: 0 }],
          explicacao: "Exemplos poucos ou de um tipo só causam viés; a solução é ter exemplos variados. O chatbot pode inventar: sempre confira." }
      ],
      desafio: [
        { tipo: "classificar", modo: "tabela", titulo: "Impactos da IA: ajuda ou pede cuidado?", colunaItem: "Impacto", colunaResp: "👍 ou ⚠️",
          categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "C", rot: "⚠️ Pede cuidado" }],
          itens: [
            { t: "Legenda automática para pessoas surdas", c: "A" },
            { t: "Treinar a IA com milhões de fotos de pessoas sem pedir autorização", c: "C", why: "Usa dados pessoais sem consentimento." },
            { t: "Ajudar o médico a encontrar sinais de doença no exame", c: "A" },
            { t: "Criar o vídeo falso de um prefeito dizendo o que ele nunca disse", c: "C", why: "Deepfake: desinformação." },
            { t: "Prever chuva e pragas para o agricultor", c: "A" },
            { t: "Computadores gigantes que gastam muita energia e água para treinar a IA", c: "C", why: "Impacto no meio ambiente." }],
          explicacao: "👍 Acessibilidade, saúde e campo. ⚠️ Dados pessoais sem autorização, deepfakes e gasto de energia e água." },
        { tipo: "escolha", titulo: "A IA na nossa cidade",
          perguntas: [
            { p: "A prefeitura quer câmeras com reconhecimento facial na praça. Qual é a pergunta mais importante a fazer?", opcoes: ["Como os dados do rosto das pessoas serão guardados e protegidos?", "De que cor são as câmeras?", "Quantas câmeras cabem num poste?"], certo: 0, why: "Rosto é dado pessoal sensível (biometria)." },
            { p: "Uma loja trocou o caixa por uma máquina com IA. O que pode acontecer com o trabalho?", opcoes: ["Algumas profissões mudam ou diminuem, e outras novas aparecem", "Nenhum trabalho muda", "Todas as pessoas perdem o emprego"], certo: 0 },
            { p: "Semáforos com IA percebem onde tem mais carros. Qual é o impacto bom?", opcoes: ["Menos tempo parado no trânsito", "Mais engarrafamento", "Ruas sem semáforo"], certo: 0 }],
          explicacao: "Toda tecnologia tem impactos: o reconhecimento facial pede cuidado com os dados; o trabalho muda; o semáforo inteligente pode diminuir o tempo no trânsito." }
      ],
      turbo: [
        { tipo: "aberta", titulo: "Uma regra para usar a IA com responsabilidade na escola",
          campos: [{ rot: "A minha regra", linhas: 2 }, { rot: "Por que essa regra é importante", linhas: 3 }],
          criterios: ["A regra fala de conferir, estudar, dados pessoais ou dizer quando usou IA.", "O porquê explica um risco ou um benefício."],
          exemplo: "Regra: sempre confira a resposta da IA em outra fonte. Por quê: o chatbot pode inventar uma resposta errada com toda a certeza.",
          conferir: { minPalavras: 5, diferentes: "todos",
            grupos: [{ dica: "conferir as respostas", alts: ["confer", "checa", "verific", "fonte"] }, { dica: "usar para estudar, sem copiar", alts: ["estud", "aprend", "entend", "copi"] },
              { dica: "não colocar dados pessoais", alts: ["dado", "pessoa", "nome", "senha", "privac"] }, { dica: "dizer quando usou IA", alts: ["dizer", "avisar", "contar", "informar", "usei"] },
              { dica: "a IA pode errar ou inventar", alts: ["err", "invent", "viés", "vies", "falso", "mentir"] }],
            minGrupos: 2, msg: "Regra de quem usa a IA com responsabilidade!" } }
      ],
      vf: [
        { v: true },
        { v: false, corrigir: { trecho: "nunca erra, então não preciso", opcoes: ["nunca erra, então não preciso", "também erra, então preciso"], certo: "também erra, então preciso" }, why: "O chatbot pode inventar respostas." },
        { v: true },
        { v: true },
        { v: false, corrigir: { trecho: "Posso colocar", opcoes: ["Posso colocar", "Não devo colocar"], certo: "Não devo colocar" }, why: "Dados pessoais não vão para o chatbot." }
      ]
    },

    /* ======================= 🔁 REVISÃO PARA A PROVA =======================
       Cada atividade tem "de" (a missão). O portal mostra só as missões que a turma estudou. */
    rv: {
      basico: [
        { tipo: "relembre", de: "m1" },
        { tipo: "tabela", de: "m1", titulo: "M1 · Grafo: Casa —3— Praça —2— Escola e Casa —4— Mercado —4— Escola", robo: {"paineis": ["🗺️ Outro grafo: Casa —2— Feira —3— Escola e Casa —1— Praça —1— Posto —2— Escola"], "passos": [{"fala": "Olha como eu calculo num grafo <b>diferente</b>. Somo os pesos de cada caminho:", "painel": 0, "linha": "Casa → Feira → Escola = 2 + 3 = 5 min"}, {"fala": "", "painel": 0, "linha": "Casa → Praça → Posto → Escola = 1 + 1 + 2 = 4 min", "espera": 1200}, {"fala": "O mais curto é o de <b>menor soma</b>, mesmo com mais paradas!", "painel": 0, "linha": "Mais curto: pela Praça e pelo Posto (4 min)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: some os pesos dos caminhos da tarefa! 💪"},
          linhas: [["Casa → Praça → Escola soma:", { r: "5", tipo: "num", w: 3 }], ["Casa → Mercado → Escola soma:", { r: "8", tipo: "num", w: 3 }], ["Qual é o mais curto?", { op: ["Pela Praça", "Pelo Mercado"], r: "Pela Praça" }]],
          explicacao: "3 + 2 = 5 e 4 + 4 = 8: o mais curto é pela Praça (menor soma dos pesos)." },
        { tipo: "escolha", de: "m1", titulo: "M1 · Árvores",
          perguntas: [
            { p: "Uma árvore é um grafo:", opcoes: ["Sem ciclos, que começa na raiz e termina nas folhas", "Com muitos ciclos", "Sem vértices"], certo: 0 },
            { p: "Na árvore de pastas, a pasta onde tudo começa é a:", opcoes: ["Raiz", "Folha", "Aresta"], certo: 0 },
            { p: "Na árvore de decisão, cada folha é:", opcoes: ["Uma resposta", "Uma pergunta", "Um peso"], certo: 0 }],
          explicacao: "Árvore = grafo sem ciclos, da raiz às folhas. Na árvore de decisão, os vértices são perguntas de sim ou não e as folhas são respostas." },
        { tipo: "relembre", de: "m2" },
        { tipo: "tabela", de: "m2", titulo: "M2 · Cifra de César com chave 1 (cada letra anda 1 casa)", robo: {"paineis": ["🔐 Outra palavra: BOLA"], "passos": [{"fala": "Com chave 1, cada letra anda <b>1 casa para a frente</b> no alfabeto:", "painel": 0, "linha": "B → C"}, {"fala": "", "painel": 0, "linha": "O → P", "espera": 700}, {"fala": "", "painel": 0, "linha": "L → M", "espera": 700}, {"fala": "", "painel": 0, "linha": "A → B", "espera": 900}, {"fala": "BOLA cifrada fica:", "painel": 0, "linha": "CPMB", "marca": true}, {"fala": "Para <b>decifrar</b>, eu volto 1 casa: TPM → S, O, L", "painel": 0, "linha": "TPM → SOL", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: cifre CASA e decifre PJ! 💪"},
          linhas: [["Cifre a palavra CASA:", { r: ["DBTB"], tipo: "letras", w: 8, dica: "C → D, A → B, S → T, A → B" }], ["Decifre a palavra PJ (chave 1, volte 1 casa):", { r: ["OI"], tipo: "letras", w: 6 }]],
          explicacao: "Com chave 1, cada letra anda 1 casa: CASA → DBTB. Para decifrar, volta 1 casa: PJ → OI." },
        { tipo: "classificar", modo: "tabela", de: "m2", titulo: "M2 · Qual ataque é esse?", colunaItem: "Situação", colunaResp: "Ataque",
          categorias: [{ id: "F", rot: "Força bruta" }, { id: "R", rot: "Ransomware" }, { id: "E", rot: "Engenharia social" }, { id: "D", rot: "DDoS" }],
          itens: [{ t: "Um programa testa todas as senhas possíveis", c: "F" }, { t: "Os arquivos são criptografados e pedem resgate", c: "R" }, { t: "Alguém finge ser do suporte para pegar a sua senha", c: "E" }, { t: "Milhões de pedidos ao mesmo tempo derrubam o site", c: "D" }],
          explicacao: "Força bruta testa senhas; ransomware sequestra arquivos (defesa: backup); engenharia social engana a pessoa; DDoS derruba o site." },
        { tipo: "relembre", de: "m3" },
        { tipo: "escolha", de: "m3", titulo: "M3 · Autoria e imagem",
          perguntas: [
            { p: "Copiar o trabalho de outra pessoa e dizer que é seu é:", opcoes: ["Plágio", "Domínio público", "Crédito"], certo: 0 },
            { p: "Na licença CC BY, posso usar a obra desde que:", opcoes: ["Dê o crédito ao autor", "Diga que é minha", "Pague a escola"], certo: 0 },
            { p: "Publicar a foto de um colega sem autorização desrespeita o:", opcoes: ["Direito de imagem", "DNS", "Backup"], certo: 0 }],
          explicacao: "Plágio = apresentar como seu. CC BY = usar dando crédito. Direito de imagem = precisa de autorização." },
        { tipo: "classificar", modo: "tabela", de: "m3", titulo: "M3 · Sinal de deepfake ou não prova nada?", colunaItem: "Observação", colunaResp: "Sinal?",
          categorias: [{ id: "S", rot: "🚩 Sinal de alerta" }, { id: "N", rot: "Não prova nada" }],
          itens: [{ t: "A boca não acompanha a fala", c: "S" }, { t: "Famoso “dando” celular por um link", c: "S" }, { t: "O vídeo tem imagem de ótima qualidade", c: "N", why: "Deepfake também pode ter ótima qualidade." }, { t: "Voz robótica", c: "S" }],
          explicacao: "Boca fora de sincronia, voz robótica e promessa fácil por link são alertas. Boa qualidade não prova que é verdade." },
        { tipo: "relembre", de: "m4" },
        { tipo: "ordenar", de: "m4", titulo: "M4 · Como a IA aprende: em ordem",
          itens: ["Coletar muitos exemplos (dados)", "Treinar: achar padrões", "Testar com exemplos novos", "Usar para fazer previsões"],
          explicacao: "Coletar → treinar → testar → usar." },
        { tipo: "escolha", de: "m4", titulo: "M4 · IA com responsabilidade",
          perguntas: [{ p: "Exemplos poucos ou de um tipo só fazem a IA aprender errado. Isso é:", opcoes: ["Viés", "Backup", "Plágio"], certo: 0 }, { p: "O chatbot deu uma resposta. Eu:", opcoes: ["Confiro em outras fontes", "Copio sem ler", "Coloco os dados dos colegas"], certo: 0 }],
          explicacao: "Viés vem de exemplos ruins. O chatbot pode inventar: sempre confira." }
      ],
      desafio: [
        { tipo: "escolha", de: "m1", titulo: "Desafio M1", perguntas: [{ p: "Por que um grafo com ciclo não é uma árvore?", opcoes: ["Porque árvore nunca tem ciclo", "Porque tem pesos", "Porque tem mais de 3 vértices"], certo: 0 }] },
        { tipo: "escolha", de: "m2", titulo: "Desafio M2", perguntas: [{ p: "Qual é a melhor defesa contra o ransomware?", opcoes: ["Ter backup dos arquivos", "Pagar o resgate", "Desligar o monitor"], certo: 0 }, { p: "Por que senhas longas são mais seguras contra a força bruta?", opcoes: ["Porque há muito mais combinações para testar", "Porque são mais bonitas", "Porque o site gosta"], certo: 0 }] },
        { tipo: "escolha", de: "m3", titulo: "Desafio M3", perguntas: [{ p: "Uma notícia falsa feita para ganhar cliques e propaganda foi espalhada por:", opcoes: ["Dinheiro", "Humor", "Engano"], certo: 0 }] },
        { tipo: "escolha", de: "m4", titulo: "Desafio M4", perguntas: [{ p: "Câmeras com reconhecimento facial na praça: qual é o maior cuidado?", opcoes: ["Proteger os dados do rosto das pessoas", "A cor da câmera", "O tamanho do poste"], certo: 0 }] }
      ],
      turbo: [
        { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma dos pesos", "Menos paradas", "Mais ruas"], certo: 0 }] },
        { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "Só quem tem a chave consegue:", opcoes: ["Decifrar a mensagem", "Ver o cadeado", "Ligar o computador"], certo: 0 }] },
        { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Obras de domínio público:", opcoes: ["Todos podem usar livremente", "Ninguém pode usar", "Só o autor pode ver"], certo: 0 }] },
        { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "A IA aprende com:", opcoes: ["Muitos exemplos", "Mágica", "Nenhum dado"], certo: 0 }] }
      ]
    },

    /* ======================= PROJETO FINAL ======================= */
    pf: {
      basico: [
        { tipo: "info", titulo: "Confira as suas missões", html: "<p>Volte à lista de missões da apostila: cada missão com o <strong>Básico concluído</strong> aparece com ✔. Se faltar alguma (por exemplo, porque você faltou à aula), faça o Básico dela agora. O professor acompanha tudo pelo painel.</p>" },
        { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema", robo: {"paineis": ["✍️ Exemplo com outra matéria"], "passos": [{"fala": "Olha como eu escrevo uma boa frase, sobre <b>outra</b> matéria (Matemática):", "painel": 0, "titulo": "🧮 Frações"}, {"fala": "Começo com letra maiúscula, uso uma <b>palavra-chave</b> do tema e termino com ponto final:", "painel": 0, "linha": "Aprendi que a fração mostra partes de um inteiro.", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: uma frase para cada tema, com uma palavra-chave dele! 💪"},
          campos: [{ rot: "🕸️ Grafos e árvores", linhas: 2 }, { rot: "🔐 Criptografia e ataques", linhas: 2 }, { rot: "©️ Autoria, imagem e deepfakes", linhas: 2 }],
          criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."],
          conferir: { minPalavras: 4, porCampo: [
            ["grafo", "arvore", "vertice", "aresta", "peso", "caminho", "folha", "raiz", "decis", "no ", "ligac", "rede"],
            ["cripto", "cifra", "chave", "cesar", "senha", "forca bruta", "ataque", "phishing", "engenharia social", "segur", "codig", "decifr"],
            ["autor", "credito", "plagio", "imagem", "deepfake", "licenc", "direito", "creative commons", "falso", "fake", "inteligencia artificial", "copi"]] } }
      ],
      desafio: [
        { tipo: "ligar", titulo: "Desafio do bimestre: ligue cada termo ao seu significado", porRodada: 6,
        enunciado: "<p>Um termo de cada tema do bimestre. Clique no termo e depois no significado dele.</p>",
        pares: [{ a: "Aresta", b: "Ligação entre dois vértices de um grafo" }, { a: "Folha", b: "Fim de uma árvore, que não se divide mais" }, { a: "Chave", b: "Informação que permite cifrar e decifrar uma mensagem" }, { a: "Força bruta", b: "Ataque que testa todas as senhas possíveis" }, { a: "Plágio", b: "Copiar a obra de alguém e apresentar como sua" }, { a: "Deepfake", b: "Vídeo, foto ou áudio falso que imita uma pessoa, criado por inteligência artificial" }] }
      ],
      turbo: [
        { tipo: "aberta", titulo: "A missão de que eu mais gostei",
          enunciado: "<p>Escolha a missão de que você mais gostou e escreva duas ou três frases dizendo por quê. Se o professor ligar o projetor no fim da aula, você pode ler para a turma (é opcional).</p>",
          campos: [{ rot: "A missão de que eu mais gostei:", linhas: 1 }, { rot: "Por que eu gostei (duas ou três frases):", linhas: 3 }],
          criterios: ["Diz qual foi a missão.", "Explica o motivo com as suas palavras."],
          exemplo: "Missão 2. Eu gostei porque decifrei mensagens com a cifra de César e entendi por que uma senha longa é mais difícil de quebrar.",
          conferir: { minPalavras: 2, msg: "Registrado! O professor pode ler no painel." } }
      ]
    }
  });
})();
