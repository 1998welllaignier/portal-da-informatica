/* ============================================================
   ATIVIDADES — Informática 8º ano — 4º bimestre · TRILHA PASSO A PASSO
   Mesmas missões da turma, com um passo por vez, letra grande,
   quase tudo por clique e pouca digitação.
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-8ano-4bim-trilha", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "sim_adivinhe", titulo: "Jogo: adivinhe o número", max: 10, meta: 4, botoes: true,
        enunciado: "<p>Pensei num número de <strong>1 a 10</strong>. Clique no <strong>5</strong> (o meio). Eu digo se é maior ⬆️ ou menor ⬇️.</p>",
        explicacao: "Chutar o meio sempre é a <strong>busca binária</strong>: muito mais rápido que tentar 1, 2, 3…" },
      { tipo: "sim_bolha", titulo: "Arrume os números do menor para o maior",
        enunciado: "<p>Clique em <strong>⇄</strong> para trocar dois vizinhos de lugar, até ficar em <strong>ordem crescente</strong>.</p>",
        valores: [9, 2, 6, 4],
        explicacao: "Trocar vizinhos até ficar em ordem é o <strong>método da bolha</strong>." }
    ],
    basico: [
      { tipo: "sequencial", titulo: "Passo 1 · Procure o 9 olhando um por um",
        lista: [5, 8, 2, 9, 4], alvo: 9,
        enunciado: "<p>As cartas estão viradas. Clique na <strong>1ª carta</strong>, depois na <strong>2ª</strong>, depois na <strong>3ª</strong>… até achar o <strong>9</strong>.</p>",
        explicacao: "Você olhou 4 cartas: o 9 estava na 4ª posição. Isso é a <strong>busca sequencial</strong>: olhar um por um." },

      { tipo: "busca_binaria", titulo: "Passo 2 · Procure o 8 pelo meio", ajudaMeio: true,
        lista: [2, 4, 6, 8, 10], alvo: 8,
        enunciado: "<p>Esta lista está <strong>em ordem</strong>. Clique na carta do <strong>meio</strong> (ela tem a mãozinha 👆).</p>",
        explicacao: "1ª vez: o meio era o 6, e o 8 é maior, então a metade da esquerda foi jogada fora. 2ª vez: achou o 8! Procurar pelo meio é a <strong>busca binária</strong>." },

      { tipo: "bolha", titulo: "Passo 3 · Arrume [3, 1, 2] do menor para o maior", lista: [3, 1, 2],
        enunciado: "<p>Olhe os <strong>dois vizinhos</strong> destacados. Se o da esquerda for <strong>maior</strong>, clique em <strong>Trocar</strong>. Se já estão em ordem, clique em <strong>Manter</strong>.</p>",
        explicacao: "A lista ficou [1, 2, 3]: do menor para o maior. Isso é o <strong>método da bolha</strong>." },

      { tipo: "ordenar", titulo: "Passo 4 · Arrume os nomes de A até Z",
        itens: ["Ana", "Bia", "Caio", "Davi"],
        enunciado: "<p>Use as setas <strong>▲</strong> (subir) e <strong>▼</strong> (descer) para arrumar os nomes em <strong>ordem alfabética</strong>, como nos contatos do celular.</p>",
        explicacao: "Ana, Bia, Caio, Davi: de A até Z, como na lista de chamada." },

      { tipo: "tabela", titulo: "Passo 5 · Digite aqui no portal",
        enunciado: "<p>Digite os números em ordem, do menor para o maior: <strong>1 2 3 4</strong></p>",
        linhas: [["Digite aqui:", { r: "1 2 3 4", tipo: "letras", w: 12, ph: "1 2 3 4", dica: "Do menor para o maior: 1, 2, 3, 4." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Ordem crescente é do <strong>menor</strong> para o <strong>maior</strong>." }, { v: true }]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "O caminho do vídeo até o seu celular",
        enunciado: "<p>Clique nas etapas <strong>na ordem</strong>: de onde o vídeo está guardado até a sua tela.</p>",
        etapas: [
          { ic: "🏭", t: "Data center", dica: "Comece de onde o vídeo está guardado." },
          { ic: "🌊", t: "Cabo submarino" },
          { ic: "🏢", t: "Provedor de internet" },
          { ic: "📶", t: "Roteador Wi-Fi" },
          { ic: "📱", t: "Seu celular", dica: "Essa é a última etapa." }],
        okMsg: "Isso! O vídeo viaja por cabos até chegar em você.",
        explicacao: "A <strong>nuvem</strong> são computadores em <strong>data centers</strong>, ligados por cabos." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Passo 1 · Arrume o caminho do vídeo",
        itens: ["📱 Celular", "📶 Roteador (caixinha do Wi-Fi)", "🏢 Provedor (empresa da internet)", "🌊 Cabos no fundo do mar", "🏭 Data center"],
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>. O caminho começa no <strong>celular</strong> e termina no <strong>data center</strong>.</p>",
        explicacao: "Celular → roteador → provedor → cabos → data center. Depois, o vídeo volta pelo mesmo caminho." },

      { tipo: "classificar", titulo: "Passo 2 · Fila ou dividir o trabalho?",
        categorias: [{ id: "F", rot: "Fila", ic: "🧍🧍🧍", desc: "um de cada vez" }, { id: "D", rot: "Dividir o trabalho", ic: "👥", desc: "todos ao mesmo tempo" }],
        itens: [
          { t: "19 alunos mandam imprimir", ic: "🖨️", c: "F" },
          { t: "A fila do lanche", ic: "🍞", c: "F" },
          { t: "4 colegas dividem os exercícios", ic: "📚", c: "D" },
          { t: "O celular toca música e abre o jogo ao mesmo tempo", ic: "🎵", c: "D" }],
        explicacao: "Na <strong>fila</strong>, cada um espera a vez. Ao <strong>dividir o trabalho</strong>, cada parte é feita ao mesmo tempo." },

      { tipo: "escolha", titulo: "Passo 3 · Responda",
        perguntas: [
          { p: "📶 Qual é a caixinha do Wi-Fi?", opcoes: ["Roteador", "Impressora", "Teclado"], certo: 0 },
          { p: "☁️ Onde fica guardada a foto na nuvem?", opcoes: ["No data center, pela internet", "Numa nuvem de chuva", "Dentro do teclado"], certo: 0 }],
        explicacao: "O roteador espalha o Wi-Fi. A nuvem guarda a foto nos computadores do data center." },

      { tipo: "cartaz", titulo: "Passo 4 · Monte o cartaz do caminho da internet", tituloCartaz: "O caminho da internet",
        desenhos: ["📱", "📶", "☁️", "🐟", "🍕", "⚽"], minDesenhos: 3, maxDesenhos: 3, exigirDesenhos: ["📱", "📶", "☁️"],
        dicaDesenhos: "Clique nos 3 desenhos do caminho: o <strong>celular</strong> 📱, o <strong>roteador</strong> 📶 e a <strong>nuvem</strong> ☁️.",
        campos: [{ rot: "Quantos desenhos tem o caminho?", opcoes: ["2", "3", "4"], gab: "3", re: "^3$", dica: "São <strong>3</strong>: celular, roteador e nuvem." }],
        okMsg: "Cartaz pronto! Celular → roteador → nuvem. Ficou registrado para o professor." }
    ],
    vf: [{ v: true }, { v: false, why: "A nuvem é guardar no <strong>data center</strong>, pela internet." }, { v: true }]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "permissoes", titulo: "Permitir ou negar?",
        enunciado: "<p>O aplicativo <strong>precisa mesmo</strong> disso para funcionar?</p>",
        itens: [
          { ic: "🔦", app: "Lanterna", pede: "seus contatos", c: "N", why: "Lanterna só precisa do flash." },
          { ic: "🗺️", app: "Mapas", pede: "sua localização", c: "S", why: "O mapa precisa saber onde você está." },
          { ic: "🃏", app: "Jogo de cartas", pede: "o microfone", c: "N" },
          { ic: "📷", app: "Câmera", pede: "a câmera", c: "S" }],
        explicacao: "Só permita o que o aplicativo <strong>precisa</strong>. Seus dados são seus!" },
      { id: "m3-sim-noticia", opcional: true, tipo: "sim_pc", titulo: "📰 Simulador: confira a notícia antes de compartilhar",
        enunciado: "<p>Chegou uma notícia assustadora. Faça o que um <strong>checador</strong> faz, no navegador de mentira: leia até o fim, procure em outro site e confie na <strong>fonte oficial</strong>. O <strong>Bit</strong> acompanha.</p>",
        abertas: ["web"], inicioWeb: "zapnoticias-urgente.blog",
        web: {
          "zapnoticias-urgente.blog": { titulo: "URGENTE!!! Escolas vão fechar", seguro: false, palavras: "escolas fechar dezembro urgente", resumo: "Fiquei sabendo por um amigo de um primo...", html: "<p style='color:#c5221f;font-weight:800;font-size:18px'>🚨 URGENTE!!! TODAS AS ESCOLAS VÃO FECHAR EM DEZEMBRO!!!</p><p>Fiquei sabendo por um amigo de um primo que o governo vai fechar todas as escolas já no mês que vem. A mídia está escondendo isso de você!!! COMPARTILHE COM TODOS OS GRUPOS ANTES QUE APAGUEM!!!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p style='color:#777'>Sem autor · sem data · sem fonte</p>" },
          "noticias-bombasticas.com": { titulo: "BOMBA: escolas fechadas?", palavras: "escolas fechar dezembro bomba", resumo: "Veja o vídeo que estão tentando apagar!!!", html: "<p>Veja o vídeo que estão tentando apagar!!! (sem autor, sem data)</p>" },
          "seduc.pa.gov.br/calendario": { titulo: "Secretaria de Educação: calendário escolar", palavras: "escolas calendario dezembro aulas secretaria educacao fechar", resumo: "Calendário oficial: as aulas seguem até o fim do ano letivo.", html: "<p><b>Calendário escolar oficial.</b> As aulas seguem normalmente até o fim do ano letivo, com férias em janeiro. Nenhuma escola será fechada.</p><p style='color:#555'>Publicado pela Secretaria de Educação · 10/11/2026</p>" }
        },
        passos: [
          { faca: "Leia a notícia <b>até o fim</b>: role a página com a <b>rodinha do mouse</b> (ou a barra de rolagem).", ok: "rolar:fim:zapnoticias-urgente.blog", dica: "Coloque o mouse em cima do texto e gire a rodinha para baixo." },
          { faca: "Viu? Sem autor, sem data, sem fonte, cheia de pressa e <b>⚠️ Não seguro</b>. Antes de compartilhar, confira em outro lugar: abra uma <b>nova guia</b> no <b>+</b>.", ok: "novaAba", onde: "web:novaaba" },
          { faca: "No Buscador, pesquise <b>escolas fechar dezembro</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*escola/", onde: "web:busca" },
          { faca: "Entre no resultado da <b>fonte oficial</b>: o site do governo (termina em <b>.gov.br</b>).", ok: "link:seduc.pa.gov.br/calendario", erros: { "link:*": "Esse não é fonte oficial: sem autor nem data. Volte (←) e procure o site que termina em <b>.gov.br</b>." } },
        ],
        fimMsg: "Você checou como um profissional: leu até o fim, desconfiou da falta de autor e data, pesquisou e confiou na fonte oficial. Notícia falsa não passa por você!",
        explicacao: "Antes de compartilhar: leia até o fim, veja quem escreveu e quando, desconfie de pressa e letras maiúsculas, pesquise em outros sites e procure a fonte oficial." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Guardo comigo ou posso mostrar?",
        categorias: [{ id: "G", rot: "Guardo comigo", ic: "🔒", desc: "é meu dado pessoal" }, { id: "P", rot: "Posso mostrar", ic: "👍", desc: "não mostra quem eu sou" }],
        itens: [
          { t: "Minha senha", ic: "🔑", c: "G" },
          { t: "Endereço da minha casa", ic: "🏠", c: "G" },
          { t: "Meu telefone", ic: "📞", c: "G" },
          { t: "Minha cor favorita", ic: "🎨", c: "P" },
          { t: "Um desenho que eu fiz", ic: "🖍️", c: "P" }],
        explicacao: "Senha, endereço e telefone são <strong>dados pessoais</strong>: proteja. A cor favorita e um desenho podem ser mostrados." },

      { tipo: "classificar", modo: "tabela", titulo: "Passo 2 · O aplicativo precisa disso?", colunaItem: "Aplicativo e o que ele pede", colunaResp: "Precisa?",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "🔦 Lanterna pede os seus contatos", c: "N", why: "Lanterna não precisa de contatos: desconfie." },
          { t: "🗺️ Mapa pede o lugar onde você está", c: "S", why: "O mapa precisa saber onde você está." },
          { t: "📷 Câmera pede para usar a câmera", c: "S" },
          { t: "🧮 Calculadora pede o microfone", c: "N" }],
        explicacao: "Antes de clicar em “Permitir”, pergunte: o aplicativo precisa disso para funcionar?" },

      { tipo: "sinais", titulo: "Passo 3 · Marque os sinais de notícia falsa",
        enunciado: "<p class=\"regra\">“<strong>URGENTE!!!</strong> Celular carregando explode à noite. <strong>Compartilhe antes que apaguem!</strong>” <em>(sem nome de quem escreveu)</em></p>",
        opcoes: [
          { t: "❓ Não tem o nome de quem escreveu", certo: true },
          { t: "❗ Tem URGENTE!!! e muitos pontos de exclamação", certo: true },
          { t: "📤 Pede para compartilhar rápido", certo: true },
          { t: "📰 Tem o nome de um jornal e a data", certo: false, why: "A mensagem não tem jornal nem data." }],
        explicacao: "Três sinais de alerta: é melhor <strong>não compartilhar</strong>." },

      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa: <strong>MEUS DADOS</strong></p>",
        linhas: [["Digite aqui:", { r: "MEUS DADOS", tipo: "letras", w: 16, ph: "MEUS DADOS", dica: "Digite: MEUS DADOS." }]] }
    ],
    vf: [{ v: false, why: "A senha é segredo: não conte para ninguém." }, { v: true }, { v: true }]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { tipo: "escolha", titulo: "Apareceu o botão “Li e aceito”",
        enunciado: "<p>Você vai criar uma conta num jogo novo e aparece um texto comprido com o botão <strong>Li e aceito</strong>.</p>",
        perguntas: [{ p: "Clicar em “Li e aceito” é:", opcoes: ["Aceitar um contrato", "Só fechar a janela"], certo: 0, why: "Os termos de uso são um contrato." }],
        explicacao: "Clicar em <strong>Li e aceito</strong> é aceitar o <strong>contrato</strong> (os termos de uso)." },
      { id: "m4-sim-termos", opcional: true, tipo: "sim_pc", titulo: "📜 Simulador: cookies e termos de uso do FotoTop",
        enunciado: "<p>Você vai baixar o aplicativo inventado <strong>FotoTop</strong>. Antes, decida os <strong>cookies</strong> e leia os <strong>termos de uso</strong> no navegador de mentira. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app",
        campos: { "ck:anuncios": true, "ck:parceiros": true, "ck:essenciais": true },
        web: {
          "fototop.app": { titulo: "FotoTop: baixe grátis", html: "<p style='font-size:40px'>📸✨</p><p>Edite e publique fotos com filtros incríveis!</p><div style='position:sticky;bottom:0;background:#fff;border:2px solid #1a73e8;border-radius:10px;padding:10px 12px;margin-top:30px'><b>🍪 Nós usamos cookies</b><br>Para anúncios personalizados e para compartilhar dados com parceiros.<br><button data-ev='aceitar' data-k='pg:aceitar' class='pri'>Aceitar tudo</button><button data-ev='personalizar' data-k='pg:personalizar' data-ir='fototop.app/cookies'>Personalizar</button></div>" },
          "fototop.app/cookies": { titulo: "FotoTop: escolha os cookies", html: "<p><label><input type='checkbox' data-ev='essenciais' disabled> Essenciais (o site precisa para funcionar)</label></p><p><label><input type='checkbox' data-ev='anuncios' data-k='pg:anuncios'> Anúncios personalizados</label></p><p><label><input type='checkbox' data-ev='parceiros' data-k='pg:parceiros'> Compartilhar meus dados com parceiros</label></p><button data-ev='salvar' data-k='pg:salvar' data-ir='fototop.app/termos' class='pri'>Salvar escolhas</button>" },
          "fototop.app/termos": { titulo: "FotoTop: termos de uso", html: "<p data-ev='cl-conta' data-k='pg:cl-conta'>1. Você pode apagar a sua conta a qualquer momento em Configurações.</p><p data-ev='cl-idade' data-k='pg:cl-idade'>2. Uso permitido a partir de 13 anos.</p><p data-ev='cl-coleta' data-k='pg:cl-coleta'>3. Coletamos nome, email e data de nascimento para criar a sua conta.</p><p style='color:#666'>4. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>5. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>6. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>7. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>8. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>Parágrafo 1: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 2: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 3: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 4: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 5: a empresa pode atualizar estes termos e avisará por email.</p><p data-ev='cl-venda' data-k='pg:cl-venda'>9. Podemos <b>compartilhar suas fotos e sua localização com empresas parceiras de publicidade</b>.</p><p style='margin-top:16px'><button data-ev='aceitar-termos' data-k='pg:aceitar-termos'>Li e aceito</button><button data-ev='recusar' data-k='pg:recusar' class='pri'>Não aceito</button></p>" }
        },
        passos: [
          { faca: "Apareceu o aviso de <b>cookies</b>. Em vez de aceitar tudo sem pensar, clique em <b>Personalizar</b>.", ok: "pagina:personalizar", onde: "pg:personalizar", erros: { "pagina:aceitar": "Calma! <b>Aceitar tudo</b> libera anúncios e o envio dos seus dados para parceiros. Clique em <b>Personalizar</b> para escolher." } },
          { faca: "Desmarque <b>Anúncios personalizados</b> (clique na caixinha para tirar o ✔).", ok: { estado: "marcado", nome: "anuncios", valor: false }, onde: "pg:anuncios" },
          { faca: "Desmarque também <b>Compartilhar meus dados com parceiros</b>.", ok: { estado: "marcado", nome: "parceiros", valor: false }, onde: "pg:parceiros" },
          { faca: "Clique em <b>Salvar escolhas</b>. Os essenciais ficam: sem eles o site não funciona.", ok: "pagina:salvar", onde: "pg:salvar" },
          { faca: "Agora os <b>termos de uso</b>. Role <b>até o fim</b> antes de decidir.", ok: "rolar:fim:fototop.app/termos" },
          { faca: "Os termos falam em compartilhar suas fotos e localização com publicidade. Você não é obrigado a aceitar: clique em <b>Não aceito</b>.", ok: "pagina:recusar", onde: "pg:recusar", erros: { "pagina:aceitar-termos": "Você aceitou sem concordar com a frase 9! Neste treino, clique em <b>Não aceito</b>. Na vida real, converse com a família antes de aceitar." } }
        ],
        fimMsg: "Você personalizou os cookies, leu os termos até o fim, achou a frase perigosa e decidiu com consciência. Isso é cuidar dos seus dados!",
        explicacao: "Cookies: “Personalizar” deixa você escolher; só os essenciais são necessários. Termos de uso: leia até o fim, procure o que coletam e com quem compartilham. Pela LGPD, você tem direito de saber e de apagar os seus dados." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Passo 1 · Bom para mim ou atenção?",
        categorias: [{ id: "B", rot: "Bom para mim", ic: "👍", desc: "protege você" }, { id: "A", rot: "Atenção", ic: "⚠️", desc: "pode prejudicar" }],
        itens: [{ t: "Dá para apagar a conta", ic: "🗑️", c: "B" }, { t: "Passa os seus dados para outras empresas", ic: "🤝", c: "A" },
          { t: "Pega a sua localização o tempo todo", ic: "📍", c: "A" }, { t: "Pede só o e-mail", ic: "📧", c: "B" }],
        explicacao: "👍 Apagar a conta e pedir só o necessário. ⚠️ Passar dados para outras empresas e pegar a localização o tempo todo." },
      { tipo: "escolha", titulo: "Passo 2 · Grátis mesmo?",
        perguntas: [{ p: "Como o aplicativo grátis costuma ganhar dinheiro?", opcoes: ["Com propaganda", "Com nada"], certo: 0 }],
        explicacao: "Aplicativo grátis costuma ganhar dinheiro com <strong>propaganda</strong>." },
      { tipo: "sinais", titulo: "Passo 3 · As 3 perguntas antes de aceitar",
        enunciado: "<p>Marque as <strong>3 perguntas</strong> que eu faço antes de aceitar os termos.</p>",
        opcoes: [{ t: "📋 Que dados ele pega?", certo: true }, { t: "🤝 Com quem ele compartilha?", certo: true }, { t: "🗑️ Consigo apagar a minha conta?", certo: true },
          { t: "🎨 De que cor é o botão?", certo: false, why: "A cor do botão não protege os seus dados." }],
        explicacao: "As 3 perguntas: que dados pega, com quem compartilha e se dá para apagar a conta." },
      { tipo: "tabela", titulo: "Passo 4 · Digite aqui no portal",
        enunciado: "<p>Digite na caixa: <strong>LEIO ANTES DE ACEITAR</strong></p>",
        linhas: [["Digite aqui:", { r: "LEIO ANTES DE ACEITAR", tipo: "letras", w: 24, ph: "LEIO ANTES DE ACEITAR", dica: "Digite: LEIO ANTES DE ACEITAR." }]] }
    ],
    vf: [{ v: true }, { v: false, why: "Aplicativo grátis costuma ganhar dinheiro com propaganda." }, { v: true }]
  },

  /* ======================= 🔁 REVISÃO (só as missões que a turma estudou) ======================= */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Responda", perguntas: [{ p: "A busca binária precisa da lista:", opcoes: ["Em ordem", "Bagunçada"], certo: 0 }], explicacao: "A busca binária precisa da lista: Em ordem." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Responda", perguntas: [{ p: "Guardar fotos na nuvem é guardar:", opcoes: ["Em servidores, pela internet", "No céu"], certo: 0 }], explicacao: "Guardar fotos na nuvem é guardar: Em servidores, pela internet." },
      { tipo: "relembre", de: "m3" },
      { tipo: "escolha", de: "m3", titulo: "M3 · Responda", perguntas: [{ p: "Meu telefone é um:", opcoes: ["Dado pessoal", "Dado de ninguém"], certo: 0 }], explicacao: "Meu telefone é um: Dado pessoal." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Responda", perguntas: [{ p: "“Li e aceito” é:", opcoes: ["Um contrato", "Nada"], certo: 0 }], explicacao: "“Li e aceito” é: Um contrato." },
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Passo 1 · Confira as suas missões", html: "<p>Volte para a lista de missões. As missões prontas têm ✔. Se faltar alguma, faça o Básico dela.</p>" },
      { tipo: "escolha", titulo: "Passo 2 · Do que você mais gostou?",
        perguntas: [{ p: "Escolha a missão de que você mais gostou:", opcoes: ["🗂️ Listas", "☁️ Internet e nuvem", "🔍 Meus dados"], certo: -1 }],
        explicacao: "Muito bem! Você terminou o projeto final. 🎉" }
    ]
  }
});
