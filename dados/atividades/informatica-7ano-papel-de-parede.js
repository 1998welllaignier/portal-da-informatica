/* ============================================================
   ATIVIDADES — ⭐ Aula especial: Meu papel de parede (todas as séries)
   Gerado por ferramentas/aula_especial/gerar.py a partir deste modelo (informatica-7ano-papel-de-parede).
   Professor Welington Laignier · Portal da Informática
   ============================================================ */
PORTAL.registrarAtividades("informatica-7ano-papel-de-parede", {
  ae: {
    pratica: [
      { tipo: "classificar", titulo: "Aceita ou não aceita como papel de parede?",
        enunciado: "<p>Olhe o final do nome (a extensão) e veja a tabela <strong>Formato · Serve como papel de parede?</strong></p>",
        categorias: [{ id: "S", rot: "✅ Aceita", ic: "🖼️", desc: "pode ser papel de parede" }, { id: "N", rot: "❌ Não aceita", ic: "🚫", desc: "precisa converter" }],
        itens: [
          { t: "ferias.jpg", ic: "📷", c: "S" },
          { t: "desenho.png", ic: "🎨", c: "S" },
          { t: "estadio.webp", ic: "🏟️", c: "N", why: "O papel de parede do Windows não aceita .webp: converta para .png ou .jpg no Paint." },
          { t: "foto-nova.jxl", ic: "🆕", c: "N", why: "O .jxl é novo demais: o papel de parede ainda não aceita." },
          { t: "antiga.bmp", ic: "🖼️", c: "S" }],
        explicacao: "Aceitam: <strong>.jpg, .png, .bmp, .gif e .tif</strong>. Não aceitam: <strong>.webp</strong> e <strong>.jxl</strong>." }
    ],
    basico: [
      { tipo: "escolha", titulo: "Passo 1 · Qual é o meu Windows?",
        enunciado: "<p>Veja a tabela <strong>Jeito · Como fazer · O que aparece</strong>.</p>",
        perguntas: [
          { p: "O botão Iniciar (⊞) está no centro da barra de tarefas. O Windows provavelmente é:", opcoes: ["Windows 11", "Windows 10"], certo: 0 },
          { p: "O botão Iniciar (⊞) está no canto esquerdo. O Windows provavelmente é:", opcoes: ["Windows 11", "Windows 10"], certo: 1 },
          { p: "Para ter certeza da versão, eu abro:", opcoes: ["Configurações › Sistema › Sobre", "O Paint", "A Lixeira"], certo: 0 },
          { p: "Na janela Executar (⊞ + R), qual comando mostra a versão do Windows?", opcoes: ["winver", "paint", "exit"], certo: 0 }],
        explicacao: "Iniciar <strong>no centro</strong>: Windows 11. <strong>No canto esquerdo</strong>: Windows 10. Para ter certeza: <strong>Configurações › Sistema › Sobre</strong> ou <strong>⊞ + R › winver</strong>." },

      { tipo: "ordenar", titulo: "Passo 2 · Arrume os passos para converter",
        enunciado: "<p>Use as setas <strong>▲</strong> e <strong>▼</strong>. Veja a tabela do <strong>Passo 4</strong>.</p>",
        itens: ["Botão direito na imagem .webp › Abrir com › Paint", "Paint: Arquivo › Salvar como › Imagem PNG", "Clicar em Salvar", "Botão direito na imagem .png › Definir como plano de fundo da área de trabalho"],
        explicacao: "Abrir no Paint → Salvar como Imagem PNG → Salvar → botão direito na imagem nova › Definir como plano de fundo." },

      { tipo: "sim_windows", titulo: "Passo 3 · 🖥️ Simulador: coloque o estádio no papel de parede", alvo: "estadio",
        enunciado: "<p>Esta é uma área de trabalho <strong>de mentira</strong>, igual à do Windows. Siga a lista: descubra o Windows, salve a imagem no navegador (botão direito › <strong>Salvar imagem como…</strong>), descubra o formato, converta no Paint e coloque como papel de parede. Use o <strong>botão direito</strong> do mouse como no computador de verdade!</p>",
        explicacao: "Você fez o caminho completo: <strong>descobrir o Windows → baixar → ver o formato (.webp) → converter no Paint (.png) → definir como papel de parede</strong>. Agora pode fazer igual no computador de verdade." },

      { tipo: "escolha", titulo: "Passo 4 · Renomear não converte!",
        perguntas: [
          { p: "Se eu só renomear estadio.webp para estadio.png, a imagem vira .png de verdade?", opcoes: ["Não: por dentro continua .webp; precisa salvar de novo no Paint", "Sim, é só trocar o nome"], certo: 0 },
          { p: "Na janela Procurar fotos do papel de parede, a imagem .webp:", opcoes: ["Nem aparece, porque não é um formato aceito", "Aparece em primeiro lugar"], certo: 0 }],
        explicacao: "Trocar o nome não muda o que tem dentro do arquivo. <strong>Converter</strong> é salvar de novo em outro formato. E a janela do papel de parede só mostra os formatos aceitos." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 Desafio · Por que tanto .webp?",
        perguntas: [
          { p: "Por que muitos sites usam imagens .webp?", opcoes: ["Porque deixam a imagem bem menor e o site abre mais rápido", "Porque o papel de parede aceita melhor"], certo: 0 },
          { p: "Qual programa que já vem no Windows abre .webp e salva em .png?", opcoes: ["Paint", "Calculadora", "Bloco de Notas"], certo: 0 },
          { p: "PNG é a sigla em inglês de:", opcoes: ["Portable Network Graphics (Gráficos Portáteis para Rede)", "Papel Novo Gráfico"], certo: 0 }],
        explicacao: "O <strong>WebP</strong> deixa a imagem menor (site mais rápido). O <strong>Paint</strong> abre .webp e salva em .png. PNG = <em>Portable Network Graphics</em>." }
    ],
    vf: [
      { v: true },
      { v: false, why: "O papel de parede do Windows 10 e do Windows 11 comum <strong>não aceita .webp</strong>: converta para .png ou .jpg." },
      { v: true },
      { v: true },
      { v: false, why: "Renomear não converte: por dentro a imagem continua .webp. É preciso <strong>salvar de novo</strong> em outro formato (no Paint)." }
    ]
  }
});
