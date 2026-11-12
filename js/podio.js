/* ============================================================
   🏆 PÓDIO DA AULA + 🧍 AVATAR DO ALUNO — Prof. Welington Laignier
   - Avatar: o aluno monta o bonequinho logo depois de digitar o código (com tempo).
     Fica em progresso/<alunoId>_avatar (o aluno só grava o próprio documento).
   - Pontos do pódio: só para a festa da aula. NÃO são nota e não vão para o boletim.
     Cada atividade da missão do dia vale pontos (Mão na massa 60, Básico 100, Desafio 150,
     Turbo 200); errar e pedir dica diminuem; terminar o Básico cedo dá bônus de rapidez.
     O total vira uma nota de 0 a 1000 sobre o máximo possível da apostila do aluno,
     por isso a Trilha 👣 (com menos atividades) disputa em pé de igualdade.
   - O pódio final fica em config/podio_<turma> (o professor grava ao finalizar a aula).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ======================= 🧍 AVATAR ======================= */
  const PELE = ["#fde3cf", "#f6cfa8", "#e3a878", "#c98a58", "#93592b", "#5e3a1f"];
  const COR = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#0d9488", "#3b82f6", "#1e3a8a", "#a855f7", "#ec4899", "#111827", "#ffffff", "#9ca3af"];
  const CAB = ["#1c1208", "#4a2c15", "#8b5a2b", "#d9a95b", "#e5e7eb", "#b91c1c", "#7c3aed", "#2563eb"];
  const OPC = {
    tipo: [["m", "Masculino"], ["f", "Feminino"]],
    cabelo: [["careca", "Careca"], ["curto", "Curto"], ["espetado", "Espetado"], ["cacheado", "Cacheado"], ["black", "Black power"], ["longo", "Longo"], ["coque", "Coque"], ["trancas", "Tranças"], ["moicano", "Moicano"], ["topete", "Penteado para trás"]],
    blusa: [["uniforme", "Uniforme da escola"], ["lisa", "Lisa"], ["listras", "Listras"], ["faixa", "Faixa"], ["futebol", "⚽ Camisa de futebol"], ["regata", "Regata"]],
    calca: [["calca", "Calça"], ["bermuda", "Bermuda"], ["saia", "Saia"]],
    bone: [["nenhum", "Sem boné"], ["frente", "Boné"], ["tras", "Aba para trás"]],
    estilo: [["lisa", "Lisa"], ["vertical", "Listras em pé"], ["horizontal", "Listras deitadas"], ["faixa", "Faixa"], ["metade", "Metade e metade"], ["gola", "Gola e mangas"]],
    roupa: [["nenhuma", "Nada por cima"], ["jaleco", "Jaleco"], ["terno", "Terno e gravata"], ["macacao", "Macacão"], ["colete", "Colete refletivo"], ["avental", "Avental"], ["bombeiro", "Roupa de bombeiro"], ["farda", "Farda"], ["astronauta", "Roupa de astronauta"]],
    chapeu: [["nenhum", "Nada"], ["capacete", "Capacete de obra"], ["chef", "Chapéu de chef"], ["quepe", "Quepe"], ["bombeiro", "Capacete de bombeiro"], ["palha", "Chapéu de palha"], ["boina", "Boina"], ["fone", "Fone de ouvido"], ["astronauta", "Capacete espacial"], ["cartola", "Cartola"], ["detetive", "Chapéu de detetive"], ["peruca", "Peruca colorida"], ["mergulho", "Máscara de mergulho"], ["coroa", "Coroa"], ["pirata", "Chapéu de pirata"]],
    rosto: [["nenhum", "Nada"], ["nariz", "Nariz de palhaço"], ["bigode", "Bigode"], ["mascara", "Máscara cirúrgica"], ["tapaolho", "Tapa-olho"], ["barba", "Barba"]],
    objeto: [["nenhum", "Nada"], ["estetoscopio", "Estetoscópio"], ["livro", "Livro"], ["prancheta", "Prancheta"], ["planta", "Planta da obra"], ["maleta", "Maleta"], ["notebook", "Notebook"], ["chave", "Chave inglesa"], ["pincel", "Pincel"], ["microfone", "Microfone"], ["tubo", "Tubo de ensaio"], ["colher", "Colher de pau"], ["bola", "Bola"], ["violao", "Violão"], ["mangueira", "Mangueira"], ["regador", "Regador"], ["pa", "Pá"], ["tijolo", "Colher e tijolo"], ["varinha", "Varinha mágica"], ["lupa", "Lupa"], ["boia", "Boia"], ["vara", "Vara de pescar"], ["vassoura", "Vassoura"], ["pao", "Pão"], ["bolo", "Bolo"], ["camera", "Câmera"], ["carta", "Carta"], ["balao", "Balões"], ["pizza", "Pizza"]],
    oculos: [["nenhum", "Sem óculos"], ["redondo", "Redondo"], ["quadrado", "Quadrado"], ["escuro", "Escuro"]]
  };
  // ideias de uniformes (combinações de cores e modelos; sem escudos nem nomes de times)
  const IDEIAS = [
    ["Listras em pé preto e branco", { estilo: "vertical", cor1: 9, cor2: 10, corCalcao: 9, corMeiao: 9, corChuteira: 2, numero: 9 }],
    ["Listras deitadas vermelho e preto", { estilo: "horizontal", cor1: 0, cor2: 9, corCalcao: 10, corMeiao: 0, corChuteira: 9, numero: 10 }],
    ["Amarela com detalhe verde", { estilo: "lisa", cor1: 2, cor2: 3, corCalcao: 6, corMeiao: 10, corChuteira: 3, numero: 10 }],
    ["Metade verde, metade branca", { estilo: "metade", cor1: 3, cor2: 10, corCalcao: 10, corMeiao: 3, corChuteira: 9, numero: 7 }],
    ["Branca com gola e mangas pretas", { estilo: "gola", cor1: 10, cor2: 9, corCalcao: 9, corMeiao: 10, corChuteira: 9, numero: 1 }],
    ["Branca com faixa azul", { estilo: "faixa", cor1: 10, cor2: 6, corCalcao: 6, corMeiao: 10, corChuteira: 5, numero: 5 }],
    ["Listras em pé verde e branco", { estilo: "vertical", cor1: 3, cor2: 10, corCalcao: 10, corMeiao: 3, corChuteira: 10, numero: 11 }],
    ["Azul com listras deitadas brancas", { estilo: "horizontal", cor1: 5, cor2: 10, corCalcao: 6, corMeiao: 5, corChuteira: 1, numero: 8 }],
    ["Vermelha lisa", { estilo: "lisa", cor1: 0, cor2: 10, corCalcao: 10, corMeiao: 0, corChuteira: 10, numero: 3 }],
    ["Preta com faixa branca", { estilo: "faixa", cor1: 9, cor2: 10, corCalcao: 9, corMeiao: 9, corChuteira: 0, numero: 4 }],
    ["Roxa com gola amarela", { estilo: "gola", cor1: 7, cor2: 2, corCalcao: 7, corMeiao: 2, corChuteira: 7, numero: 6 }],
    ["Metade azul, metade vermelha", { estilo: "metade", cor1: 6, cor2: 0, corCalcao: 6, corMeiao: 0, corChuteira: 2, numero: 2 }]
  ];
  // 💼 profissões (o aluno toca e o bonequinho veste; depois pode mudar tudo)
  const LIMPA = { roupa: "nenhuma", chapeu: "nenhum", objeto: "nenhum", rosto: "nenhum", bone: "nenhum" };
  const PROF = [
    ["👨‍🏫 Prof. Welington", { tipo: "m", pele: 1, cabelo: "topete", corCabelo: 0, rosto: "barba", blusa: "lisa", cor1: 10, calca: "calca", corCalca: 6, objeto: "notebook" }],
    ["🩺 Médica(o)", { blusa: "lisa", cor1: 5, calca: "calca", corCalca: 6, roupa: "jaleco", objeto: "estetoscopio" }],
    ["💉 Enfermeira(o)", { blusa: "lisa", cor1: 4, calca: "calca", corCalca: 4, objeto: "prancheta", rosto: "mascara" }],
    ["🦷 Dentista", { blusa: "lisa", cor1: 5, calca: "calca", corCalca: 10, roupa: "jaleco", rosto: "mascara" }],
    ["🐶 Veterinária(o)", { blusa: "lisa", cor1: 3, calca: "calca", corCalca: 3, roupa: "jaleco", objeto: "estetoscopio" }],
    ["📚 Professor(a)", { blusa: "lisa", cor1: 7, calca: "calca", corCalca: 9, objeto: "livro", oculos: "quadrado" }],
    ["👷 Engenheira(o)", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 6, roupa: "colete", chapeu: "capacete", objeto: "planta" }],
    ["🧱 Pedreiro(a)", { blusa: "regata", cor1: 11, calca: "bermuda", corCalca: 6, chapeu: "capacete", objeto: "tijolo" }],
    ["⚖️ Advogada(o)", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 9, roupa: "terno", corRoupa: 9, objeto: "maleta" }],
    ["💻 Programador(a)", { blusa: "lisa", cor1: 9, calca: "calca", corCalca: 6, chapeu: "fone", objeto: "notebook" }],
    ["👨‍🍳 Chef de cozinha", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 9, roupa: "avental", chapeu: "chef", objeto: "colher" }],
    ["🍕 Pizzaiolo(a)", { blusa: "lisa", cor1: 0, calca: "calca", corCalca: 9, roupa: "avental", chapeu: "chef", objeto: "pizza", rosto: "bigode" }],
    ["🥖 Padeiro(a)", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 11, roupa: "avental", chapeu: "chef", objeto: "pao" }],
    ["🎂 Confeiteira(o)", { blusa: "lisa", cor1: 8, calca: "calca", corCalca: 10, roupa: "avental", chapeu: "chef", objeto: "bolo" }],
    ["🚒 Bombeira(o)", { blusa: "lisa", cor1: 0, calca: "calca", corCalca: 9, roupa: "bombeiro", chapeu: "bombeiro", objeto: "mangueira" }],
    ["👮 Policial", { blusa: "lisa", cor1: 6, calca: "calca", corCalca: 6, roupa: "farda", corRoupa: 6, chapeu: "quepe", corRoupa2: 6 }],
    ["✈️ Piloto de avião", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 6, roupa: "terno", corRoupa: 6, chapeu: "quepe", oculos: "escuro" }],
    ["🚀 Astronauta", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 10, roupa: "astronauta", chapeu: "astronauta" }],
    ["🔬 Cientista", { blusa: "lisa", cor1: 7, calca: "calca", corCalca: 9, roupa: "jaleco", objeto: "tubo", oculos: "redondo" }],
    ["🔧 Mecânico(a)", { blusa: "lisa", cor1: 11, roupa: "macacao", corRoupa: 5, bone: "tras", corBone: 0, objeto: "chave" }],
    ["🌾 Agricultor(a)", { blusa: "listras", cor1: 0, cor2: 10, roupa: "macacao", corRoupa: 6, chapeu: "palha", objeto: "regador" }],
    ["🎨 Artista", { blusa: "listras", cor1: 10, cor2: 9, calca: "calca", corCalca: 9, roupa: "avental", chapeu: "boina", corRoupa: 0, objeto: "pincel" }],
    ["🎤 Cantor(a)", { blusa: "lisa", cor1: 8, calca: "calca", corCalca: 9, objeto: "microfone", oculos: "escuro" }],
    ["🎸 Músico(a)", { blusa: "lisa", cor1: 9, calca: "calca", corCalca: 6, objeto: "violao" }],
    ["🎥 Youtuber", { blusa: "lisa", cor1: 0, calca: "bermuda", corCalca: 9, bone: "tras", corBone: 9, objeto: "camera" }],
    ["📬 Carteiro(a)", { blusa: "lisa", cor1: 2, calca: "calca", corCalca: 6, bone: "frente", corBone: 6, objeto: "carta" }],
    ["🧹 Agente de limpeza", { blusa: "lisa", cor1: 1, calca: "calca", corCalca: 1, roupa: "colete", bone: "frente", corBone: 1, objeto: "vassoura" }],
    ["🏖️ Salva-vidas", { blusa: "regata", cor1: 0, calca: "bermuda", corCalca: 0, objeto: "boia", oculos: "escuro" }],
    ["🎣 Pescador(a)", { blusa: "lisa", cor1: 4, calca: "bermuda", corCalca: 11, chapeu: "palha", objeto: "vara" }],
    ["🤿 Mergulhador(a)", { blusa: "regata", cor1: 9, calca: "bermuda", corCalca: 9, chapeu: "mergulho" }],
    ["🪦 Coveiro(a)", { blusa: "lisa", cor1: 9, calca: "calca", corCalca: 9, roupa: "macacao", corRoupa: 11, chapeu: "palha", objeto: "pa" }],
    ["🤡 Palhaço(a)", { blusa: "listras", cor1: 2, cor2: 0, calca: "calca", corCalca: 5, chapeu: "peruca", rosto: "nariz", objeto: "balao" }],
    ["🎩 Mágico(a)", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 9, roupa: "terno", corRoupa: 9, chapeu: "cartola", objeto: "varinha", rosto: "bigode" }],
    ["🕵️ Detetive", { blusa: "lisa", cor1: 10, calca: "calca", corCalca: 11, roupa: "terno", corRoupa: 11, chapeu: "detetive", objeto: "lupa", rosto: "bigode" }],
    ["🏴‍☠️ Pirata", { blusa: "listras", cor1: 10, cor2: 0, calca: "bermuda", corCalca: 9, chapeu: "pirata", rosto: "tapaolho", objeto: "nenhum" }],
    ["👑 Rei ou rainha", { blusa: "lisa", cor1: 7, calca: "calca", corCalca: 7, chapeu: "coroa", objeto: "varinha" }]
  ];
  const PADRAO = { pele: 2, cabelo: "curto", corCabelo: 1, blusa: "uniforme", cor1: 10, cor2: 6, numero: 10, calca: "calca", corCalca: 6, estilo: "vertical", corCalcao: 10, corMeiao: 10, corChuteira: 9, bone: "nenhum", corBone: 0, roupa: "nenhuma", corRoupa: 9, chapeu: "nenhum", objeto: "nenhum", rosto: "nenhum", oculos: "nenhum" };
  const norm = a => { const x = Object.assign({}, PADRAO, a || {}); if (x.blusa === "time") x.blusa = "futebol"; return x; };

  // 🎅 no tema de Natal, quem está sem chapéu e sem boné ganha um gorrinho de Papai Noel
  function gorroNatal(a) {
    if (P.tema !== "natal" || (a.chapeu && a.chapeu !== "nenhum") || (a.bone && a.bone !== "nenhum")) return "";
    return `<path d="M36 25 Q44 4 66 6 Q86 8 92 20 L84 22 Q78 14 70 15 Q80 22 84 25 Z" fill="#dc2626"/><path d="M36 25 Q50 10 70 15 Q80 22 84 25 Z" fill="#b91c1c" opacity=".35"/><rect x="32" y="21" width="56" height="9" rx="4.5" fill="#fff" stroke="#e5e7eb"/><circle cx="92" cy="21" r="5" fill="#fff" stroke="#e5e7eb"/>`;
  }
  function svg(a0, px, busto) {
    const a = (x => (x.roupa === "macacao" && x.blusa !== "futebol" ? Object.assign(x, { corCalca: x.corRoupa, calca: "calca" }) : x))(norm(a0)), pele = PELE[a.pele] || PELE[2], c1 = COR[a.cor1] || COR[5], c2 = COR[a.cor2] || COR[10], cc = CAB[a.corCabelo] || CAB[1], cl = COR[a.corCalca] || COR[6], cb = COR[a.corBone] || COR[0];
    const sombra = "rgba(0,0,0,.18)";
    let atras = "", cabelo = "", blusa = "", pernas = "";
    // pernas e calça (camisa de futebol = uniforme de jogador: calção, meião e chuteira)
    const fut = a.blusa === "futebol";
    if (fut) { const ch = COR[a.corCalcao] || COR[10], me = COR[a.corMeiao] || COR[10], cu = COR[a.corChuteira] || COR[9];
      pernas = `<rect x="44" y="128" width="13" height="20" rx="5" fill="${pele}"/><rect x="63" y="128" width="13" height="20" rx="5" fill="${pele}"/><rect x="43" y="140" width="15" height="19" rx="4" fill="${me}" stroke="rgba(0,0,0,.12)"/><rect x="62" y="140" width="15" height="19" rx="4" fill="${me}" stroke="rgba(0,0,0,.12)"/><rect x="43" y="142" width="15" height="2.5" fill="${c2}"/><rect x="62" y="142" width="15" height="2.5" fill="${c2}"/><rect x="39" y="110" width="42" height="24" rx="7" fill="${ch}" stroke="rgba(0,0,0,.12)"/><rect x="59" y="118" width="2" height="16" fill="${sombra}"/>`
        + `<path d="M38 158 Q49 154 60 160 Q49 166 38 162 Z" fill="${cu}"/><path d="M82 158 Q71 154 60 160 Q71 166 82 162 Z" fill="${cu}"/>`; }
    else if (a.calca === "bermuda") pernas = `<rect x="44" y="132" width="13" height="26" rx="5" fill="${pele}"/><rect x="63" y="132" width="13" height="26" rx="5" fill="${pele}"/><rect x="40" y="110" width="40" height="28" rx="7" fill="${cl}"/><rect x="59" y="118" width="2" height="18" fill="${sombra}"/>`;
    else if (a.calca === "saia") pernas = `<rect x="45" y="132" width="12" height="26" rx="5" fill="${pele}"/><rect x="63" y="132" width="12" height="26" rx="5" fill="${pele}"/><path d="M40 110 H80 L88 140 H32 Z" fill="${cl}"/>`;
    else pernas = `<rect x="41" y="110" width="18" height="50" rx="6" fill="${cl}"/><rect x="61" y="110" width="18" height="50" rx="6" fill="${cl}"/><rect x="40" y="110" width="40" height="12" rx="5" fill="${cl}"/>`;
    if (!fut) pernas += `<ellipse cx="49" cy="161" rx="11" ry="5.5" fill="#1f2937"/><ellipse cx="71" cy="161" rx="11" ry="5.5" fill="#1f2937"/>`;
    // blusa
    const uni = a.blusa === "uniforme", AZ = "#1e2f6b", mc = uni ? AZ : c1, corpo = uni ? "#ffffff" : c1;
    const mg = fut && (a.estilo === "gola" || a.estilo === "metade") ? c2 : c1;
    const manga = a.blusa === "regata" ? "" : fut ? `<rect x="22" y="74" width="16" height="22" rx="7" fill="${mg}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${a.estilo === "metade" ? c2 : mg}"/>` : uni ? `<rect x="22" y="74" width="16" height="22" rx="7" fill="${AZ}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${AZ}"/>` : `<rect x="22" y="74" width="16" height="22" rx="7" fill="${c1}" stroke="${c1 === "#ffffff" ? "#cbd5e1" : "none"}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${c1}" stroke="${c1 === "#ffffff" ? "#cbd5e1" : "none"}"/>`;
    const bracos = `<rect x="24" y="${a.blusa === "regata" ? 74 : 90}" width="12" height="${a.blusa === "regata" ? 38 : 22}" rx="6" fill="${pele}"/><rect x="84" y="${a.blusa === "regata" ? 74 : 90}" width="12" height="${a.blusa === "regata" ? 38 : 22}" rx="6" fill="${pele}"/><circle cx="30" cy="114" r="6.5" fill="${pele}"/><circle cx="90" cy="114" r="6.5" fill="${pele}"/>`;
    let estampa = "";
    if (uni) estampa = `<rect x="36" y="84" width="48" height="11" fill="${AZ}"/><rect x="36" y="80" width="48" height="1.6" fill="#facc15"/><rect x="36" y="81.6" width="48" height="1.6" fill="#22c55e"/><rect x="36" y="83.2" width="48" height="1.2" fill="#ef4444"/><rect x="70" y="86" width="9" height="7" rx="1.5" fill="#ffffff"/><rect x="71.5" y="87.5" width="6" height="4" fill="#3b82f6"/>`;
    if (a.blusa === "listras") estampa = [44, 54, 64, 74].map(x => `<rect x="${x}" y="70" width="5" height="46" fill="${c2}"/>`).join("");
    if (a.blusa === "faixa") estampa = `<path d="M36 72 L48 70 L86 112 L74 116 Z" fill="${c2}"/>`;
    if (fut) { const E = a.estilo;
      estampa = E === "vertical" ? [40, 50, 60, 70, 80].map(x => `<rect x="${x - 2.5}" y="68" width="5" height="50" fill="${c2}"/>`).join("")
        : E === "horizontal" ? [72, 84, 96, 108].map(y => `<rect x="36" y="${y}" width="48" height="6" fill="${c2}"/>`).join("")
        : E === "faixa" ? `<path d="M36 70 L48 68 L86 112 L74 118 Z" fill="${c2}"/>` : E === "metade" ? `<rect x="60" y="68" width="24" height="50" fill="${c2}"/>` : "";
      estampa += `<text x="60" y="104" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="18" fill="${E === "lisa" || E === "gola" ? c2 : "#ffffff"}" stroke="${E === "lisa" || E === "gola" ? "none" : "rgba(0,0,0,.55)"}" stroke-width="1.2">${Math.max(0, Math.min(99, +a.numero || 0))}</text>`; }
    if (a.blusa === "time") estampa = `<rect x="36" y="70" width="48" height="8" fill="${c2}"/><text x="60" y="104" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="20" fill="${c2}">${Math.max(0, Math.min(99, +a.numero || 0))}</text>`;
    blusa = `${manga}${bracos}<rect x="36" y="68" width="48" height="50" rx="10" fill="${corpo}" stroke="${uni || corpo === "#ffffff" ? "#cbd5e1" : "none"}"/><g clip-path="url(#tr)">${estampa}</g>${a.blusa === "regata" ? `<path d="M50 68 Q60 80 70 68" fill="${pele}"/>` : uni ? `<path d="M50 68 L60 80 L70 68" fill="${AZ}"/><path d="M53 68 L60 76 L67 68" fill="${pele}"/>` : fut ? `<path d="M50 68 L60 79 L70 68" fill="${c2}"/><path d="M53 68 L60 75 L67 68" fill="${pele}"/>` : `<path d="M52 68 Q60 76 68 68" fill="${pele}"/>`}`;
    // cabelo
    const topo = `<path d="M36 42 Q36 16 60 16 Q84 16 84 42 Q78 30 60 28 Q42 30 36 42 Z" fill="${cc}"/>`;
    if (a.cabelo === "curto") cabelo = topo;
    if (a.cabelo === "espetado") cabelo = `<path d="M36 40 L38 22 L44 30 L48 14 L54 26 L60 10 L66 26 L72 14 L76 30 L82 22 L84 40 Q76 30 60 29 Q44 30 36 40 Z" fill="${cc}"/>`;
    if (a.cabelo === "cacheado") cabelo = [[40, 30], [48, 22], [58, 19], [68, 20], [77, 26], [82, 35], [37, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${cc}"/>`).join("");
    if (a.cabelo === "black") { atras = `<circle cx="60" cy="34" r="33" fill="${cc}"/>`; cabelo = ""; }
    if (a.cabelo === "longo") { atras = `<path d="M33 40 Q32 14 60 14 Q88 14 87 40 L90 86 Q76 92 70 70 L50 70 Q44 92 30 86 Z" fill="${cc}"/>`; cabelo = topo; }
    if (a.cabelo === "coque") { cabelo = topo + `<circle cx="60" cy="12" r="10" fill="${cc}"/>`; }
    if (a.cabelo === "trancas") { atras = `<rect x="30" y="38" width="9" height="44" rx="4.5" fill="${cc}"/><rect x="81" y="38" width="9" height="44" rx="4.5" fill="${cc}"/><circle cx="34.5" cy="84" r="4" fill="${c2}"/><circle cx="85.5" cy="84" r="4" fill="${c2}"/>`; cabelo = topo; }
    if (a.cabelo === "topete") cabelo = `<path d="M35 44 Q33 14 58 12 Q80 11 86 30 Q87 38 85 44 Q82 30 74 27 Q62 22 50 26 Q40 30 35 44 Z" fill="${cc}"/><path d="M44 22 Q58 12 76 18 M48 26 Q62 18 78 23" stroke="rgba(255,255,255,.25)" stroke-width="1.5" fill="none"/>`;
    if (a.cabelo === "moicano") cabelo = `<path d="M54 30 Q56 6 60 4 Q64 6 66 30 Z" fill="${cc}"/>`;
    // boné
    let bone = "";
    if (a.bone !== "nenhum") {
      bone = `<path d="M35 36 Q35 13 60 13 Q85 13 85 36 Z" fill="${cb}"/><circle cx="60" cy="14" r="2.5" fill="${sombra}"/>`;
      bone += a.bone === "frente" ? `<path d="M58 34 Q80 30 98 38 Q80 42 58 38 Z" fill="${cb}"/><path d="M58 37 Q80 40 98 38" stroke="${sombra}" stroke-width="2" fill="none"/>` : `<path d="M62 34 Q40 30 22 36 Q40 40 62 38 Z" fill="${cb}"/>`;
    }
    // 💼 profissões: roupa por cima, chapéu/capacete e objeto na mão
    const cr = COR[a.corRoupa] || COR[9], R = a.roupa;
    let roupa = "", chapeu = "", objeto = "", antesCabeca = "";
    const mangas = c => `<rect x="21" y="72" width="17" height="30" rx="7" fill="${c}"/><rect x="82" y="72" width="17" height="30" rx="7" fill="${c}"/>`;
    if (R === "jaleco") roupa = `${mangas("#ffffff")}<path d="M34 70 Q36 66 48 66 L60 92 L72 66 Q84 66 86 70 L88 138 L32 138 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/><path d="M48 66 L56 90 M72 66 L64 90" stroke="#cbd5e1" stroke-width="1.5"/><rect x="40" y="104" width="12" height="9" rx="2" fill="none" stroke="#cbd5e1"/><rect x="68" y="80" width="10" height="7" rx="1.5" fill="#3b82f6" opacity=".7"/>`;
    if (R === "terno") roupa = `${mangas(cr)}<path d="M35 70 Q37 66 49 66 L60 96 L71 66 Q83 66 85 70 L86 122 L34 122 Z" fill="${cr}"/><path d="M50 66 L60 96 L70 66 Z" fill="#ffffff"/><path d="M58 70 L62 70 L64 94 L60 100 L56 94 Z" fill="#dc2626"/><path d="M49 66 L55 84 L52 88 Z M71 66 L65 84 L68 88 Z" fill="rgba(0,0,0,.25)"/><circle cx="60" cy="108" r="1.6" fill="#e5e7eb"/>`;
    if (R === "macacao") roupa = `<rect x="44" y="82" width="32" height="36" rx="4" fill="${cr}"/><rect x="44" y="68" width="5" height="18" fill="${cr}"/><rect x="71" y="68" width="5" height="18" fill="${cr}"/><circle cx="46.5" cy="84" r="2" fill="#facc15"/><circle cx="73.5" cy="84" r="2" fill="#facc15"/><rect x="54" y="90" width="12" height="9" rx="2" fill="rgba(0,0,0,.15)"/>`;
    if (R === "colete") roupa = `<path d="M37 70 L52 68 L56 118 L36 118 Z M83 70 L68 68 L64 118 L84 118 Z" fill="#f97316"/><rect x="36" y="92" width="20" height="5" fill="#e5e7eb"/><rect x="64" y="92" width="20" height="5" fill="#e5e7eb"/><rect x="36" y="104" width="20" height="5" fill="#e5e7eb"/><rect x="64" y="104" width="20" height="5" fill="#e5e7eb"/>`;
    if (R === "avental") roupa = `<path d="M44 80 H76 L80 134 H40 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/><path d="M44 80 Q60 60 76 80" stroke="#ffffff" stroke-width="3" fill="none"/><rect x="52" y="104" width="16" height="10" rx="2" fill="none" stroke="#cbd5e1"/>`;
    if (R === "bombeiro") roupa = `${mangas("#b45309")}<rect x="34" y="66" width="52" height="58" rx="10" fill="#b45309"/><rect x="34" y="96" width="52" height="5" fill="#facc15"/><rect x="34" y="101" width="52" height="3" fill="#e5e7eb"/><rect x="21" y="92" width="17" height="4" fill="#facc15"/><rect x="82" y="92" width="17" height="4" fill="#facc15"/><rect x="59" y="68" width="2" height="56" fill="rgba(0,0,0,.25)"/>`;
    if (R === "farda") roupa = `${mangas(cr)}<rect x="35" y="66" width="50" height="54" rx="10" fill="${cr}"/><path d="M50 66 L60 78 L70 66" fill="rgba(0,0,0,.2)"/><path d="M71 80 l2 4 4 .5 -3 3 .8 4 -3.8 -2 -3.8 2 .8 -4 -3 -3 4 -.5 Z" fill="#facc15"/><rect x="35" y="110" width="50" height="6" fill="#111827"/><rect x="57" y="109" width="6" height="8" fill="#facc15"/><rect x="42" y="78" width="10" height="2" fill="#facc15"/>`;
    if (R === "astronauta") roupa = `${mangas("#f1f5f9")}<rect x="33" y="66" width="54" height="56" rx="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/><rect x="48" y="80" width="24" height="16" rx="3" fill="#cbd5e1"/><circle cx="54" cy="88" r="2.5" fill="#ef4444"/><circle cx="61" cy="88" r="2.5" fill="#22c55e"/><circle cx="68" cy="88" r="2.5" fill="#3b82f6"/><rect x="38" y="70" width="10" height="6" fill="#3b82f6"/>`;
    const CH = a.chapeu;
    if (CH === "capacete") chapeu = `<path d="M33 34 Q33 10 60 10 Q87 10 87 34 Z" fill="#facc15"/><rect x="28" y="32" width="64" height="6" rx="3" fill="#eab308"/><rect x="57" y="10" width="6" height="22" fill="#eab308"/>`;
    if (CH === "chef") chapeu = `<rect x="40" y="16" width="40" height="16" fill="#ffffff" stroke="#cbd5e1"/><circle cx="46" cy="10" r="9" fill="#ffffff"/><circle cx="60" cy="6" r="10" fill="#ffffff"/><circle cx="74" cy="10" r="9" fill="#ffffff"/><rect x="40" y="26" width="40" height="7" fill="#f1f5f9" stroke="#cbd5e1"/>`;
    if (CH === "quepe") chapeu = `<path d="M34 28 Q36 12 60 12 Q84 12 86 28 Z" fill="${cr}"/><rect x="34" y="26" width="52" height="7" fill="#111827"/><path d="M42 33 Q60 40 78 33 L78 31 L42 31 Z" fill="#111827"/><circle cx="60" cy="22" r="4" fill="#facc15"/>`;
    if (CH === "bombeiro") chapeu = `<path d="M34 34 Q34 9 60 9 Q86 9 86 34 Z" fill="#dc2626"/><path d="M26 34 Q60 44 94 34 L94 38 Q60 48 26 38 Z" fill="#b91c1c"/><path d="M54 13 h12 v14 h-12 Z" fill="#facc15"/>`;
    if (CH === "palha") chapeu = `<ellipse cx="60" cy="27" rx="38" ry="8" fill="#e5c07b"/><path d="M40 27 Q42 8 60 8 Q78 8 80 27 Z" fill="#e5c07b"/><rect x="40" y="21" width="40" height="5" fill="#b45309"/>`;
    if (CH === "boina") chapeu = `<ellipse cx="56" cy="20" rx="27" ry="10" fill="${cr}"/><circle cx="56" cy="10" r="2.5" fill="${cr}"/>`;
    if (CH === "fone") chapeu = `<path d="M34 42 Q34 12 60 12 Q86 12 86 42" stroke="#111827" stroke-width="5" fill="none"/><rect x="28" y="36" width="10" height="16" rx="4" fill="#ef4444"/><rect x="82" y="36" width="10" height="16" rx="4" fill="#ef4444"/>`;
    if (CH === "astronauta") { antesCabeca = ``; chapeu = `<circle cx="60" cy="42" r="33" fill="rgba(186,230,253,.35)" stroke="#e2e8f0" stroke-width="4"/><path d="M38 28 Q44 18 54 16" stroke="#ffffff" stroke-width="3" fill="none" opacity=".8"/>`; }
    const O = a.objeto, hx = 90, hy = 114;
    if (O === "estetoscopio") objeto = `<path d="M50 70 Q48 92 58 96 Q68 92 70 70" stroke="#475569" stroke-width="2.4" fill="none"/><circle cx="58" cy="98" r="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>`;
    if (O === "livro") objeto = `<rect x="${hx - 2}" y="${hy - 16}" width="16" height="20" rx="2" fill="#2563eb"/><rect x="${hx}" y="${hy - 14}" width="2" height="16" fill="#facc15"/>`;
    if (O === "prancheta") objeto = `<rect x="${hx - 2}" y="${hy - 18}" width="16" height="22" rx="2" fill="#b45309"/><rect x="${hx}" y="${hy - 14}" width="12" height="16" fill="#ffffff"/><rect x="${hx + 3}" y="${hy - 20}" width="6" height="4" fill="#6b7280"/><path d="M${hx + 2} ${hy - 10} h8 M${hx + 2} ${hy - 6} h8 M${hx + 2} ${hy - 2} h6" stroke="#9ca3af"/>`;
    if (O === "planta") objeto = `<rect x="${hx - 4}" y="${hy - 6}" width="24" height="8" rx="4" fill="#60a5fa"/><circle cx="${hx + 20}" cy="${hy - 2}" r="4" fill="#3b82f6"/>`;
    if (O === "maleta") objeto = `<rect x="${hx - 6}" y="${hy + 2}" width="20" height="15" rx="2" fill="#78350f"/><path d="M${hx} ${hy + 2} v-3 h8 v3" stroke="#78350f" stroke-width="2" fill="none"/>`;
    if (O === "notebook") objeto = `<rect x="44" y="104" width="32" height="18" rx="2" fill="#334155"/><rect x="46" y="106" width="28" height="14" rx="1" fill="#38bdf8"/><path d="M50 110 h10 M50 114 h16" stroke="#0f172a" stroke-width="1.5"/><rect x="40" y="122" width="40" height="4" rx="2" fill="#475569"/>`;
    if (O === "chave") objeto = `<rect x="${hx - 1}" y="${hy - 22}" width="4" height="22" rx="2" fill="#9ca3af"/><path d="M${hx - 5} ${hy - 26} a6 6 0 1 0 12 0 l-3 4 h-6 Z" fill="#9ca3af"/>`;
    if (O === "pincel") objeto = `<rect x="${hx}" y="${hy - 24}" width="3" height="22" fill="#b45309"/><path d="M${hx - 1} ${hy - 30} q2.5 -6 5 0 v6 h-5 Z" fill="#ef4444"/>`;
    if (O === "microfone") objeto = `<rect x="${hx - 1}" y="${hy - 14}" width="4" height="14" fill="#111827"/><circle cx="${hx + 1}" cy="${hy - 17}" r="5" fill="#6b7280"/>`;
    if (O === "tubo") objeto = `<rect x="${hx - 1}" y="${hy - 22}" width="6" height="20" rx="3" fill="#e0f2fe" stroke="#64748b"/><rect x="${hx - 1}" y="${hy - 12}" width="6" height="10" rx="3" fill="#22c55e"/>`;
    if (O === "colher") objeto = `<rect x="${hx}" y="${hy - 22}" width="3" height="20" fill="#b45309"/><ellipse cx="${hx + 1.5}" cy="${hy - 25}" rx="4" ry="6" fill="#d97706"/>`;
    if (O === "bola") objeto = `<circle cx="${hx + 2}" cy="${hy + 12}" r="8" fill="#ffffff" stroke="#111827"/><path d="M${hx + 2} ${hy + 8} l3 2 -1 3 h-4 l-1 -3 Z" fill="#111827"/>`;
    if (O === "violao") objeto = `<g transform="rotate(-35 60 110)"><ellipse cx="60" cy="118" rx="12" ry="10" fill="#b45309"/><ellipse cx="60" cy="104" rx="9" ry="8" fill="#b45309"/><circle cx="60" cy="112" r="3.5" fill="#451a03"/><rect x="58" y="72" width="4" height="30" fill="#78350f"/></g>`;
    if (O === "mangueira") objeto = `<path d="M${hx} ${hy} q10 -10 4 -24" stroke="#16a34a" stroke-width="4" fill="none"/><rect x="${hx + 1}" y="${hy - 30}" width="6" height="8" fill="#9ca3af"/>`;
    if (O === "regador") objeto = `<rect x="${hx - 4}" y="${hy + 2}" width="14" height="12" rx="2" fill="#22c55e"/><path d="M${hx + 10} ${hy + 6} l8 -6" stroke="#22c55e" stroke-width="3"/>`;
    if (CH === "cartola") chapeu = `<rect x="42" y="0" width="36" height="26" rx="2" fill="#111827"/><rect x="42" y="18" width="36" height="5" fill="#dc2626"/><ellipse cx="60" cy="27" rx="28" ry="5" fill="#111827"/>`;
    if (CH === "detetive") chapeu = `<path d="M38 28 Q40 10 60 10 Q80 10 82 28 Z" fill="#78716c"/><ellipse cx="60" cy="28" rx="30" ry="6" fill="#57534e"/><rect x="40" y="21" width="40" height="4" fill="#292524"/>`;
    if (CH === "peruca") chapeu = [[34, 30, "#ef4444"], [42, 18, "#f97316"], [54, 12, "#facc15"], [66, 12, "#22c55e"], [78, 18, "#3b82f6"], [86, 30, "#a855f7"], [30, 44, "#ec4899"], [90, 44, "#14b8a6"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="10" fill="${c}"/>`).join("");
    if (CH === "mergulho") chapeu = `<rect x="38" y="34" width="44" height="18" rx="8" fill="rgba(125,211,252,.55)" stroke="#0369a1" stroke-width="3"/><path d="M38 40 Q32 30 36 22" stroke="#0369a1" stroke-width="3" fill="none"/><rect x="86" y="10" width="5" height="34" rx="2.5" fill="#f97316"/><path d="M88 44 Q88 52 78 54" stroke="#f97316" stroke-width="4" fill="none"/>`;
    if (CH === "coroa") chapeu = `<path d="M40 24 L42 8 L51 18 L60 4 L69 18 L78 8 L80 24 Z" fill="#facc15" stroke="#ca8a04"/><circle cx="60" cy="16" r="2.5" fill="#ef4444"/><circle cx="48" cy="20" r="2" fill="#3b82f6"/><circle cx="72" cy="20" r="2" fill="#22c55e"/>`;
    if (CH === "pirata") chapeu = `<path d="M28 30 Q60 0 92 30 Q60 22 28 30 Z" fill="#111827"/><circle cx="60" cy="20" r="4" fill="#ffffff"/><path d="M56 26 l8 -6 M56 20 l8 6" stroke="#ffffff" stroke-width="1.5"/>`;
    if (O === "pa") objeto = `<rect x="${hx}" y="${hy - 44}" width="3.5" height="56" fill="#92400e"/><path d="M${hx - 6} ${hy + 10} h15 v8 q-7.5 8 -15 0 Z" fill="#9ca3af"/><rect x="${hx - 3}" y="${hy - 48}" width="10" height="5" rx="2" fill="#92400e"/>`;
    if (O === "tijolo") objeto = `<rect x="${hx - 4}" y="${hy + 2}" width="18" height="10" fill="#c2410c" stroke="#7c2d12"/><path d="M${hx - 4} ${hy + 7} h18 M${hx + 5} ${hy + 2} v5" stroke="#7c2d12"/><path d="M30 110 l-10 -10 l8 -2 Z" fill="#9ca3af"/>`;
    if (O === "varinha") objeto = `<rect x="${hx}" y="${hy - 26}" width="3" height="26" fill="#111827"/><rect x="${hx}" y="${hy - 26}" width="3" height="5" fill="#ffffff"/><path d="M${hx + 8} ${hy - 32} l1.5 4 4 .5 -3 2.5 1 4 -3.5 -2 -3.5 2 1 -4 -3 -2.5 4 -.5 Z" fill="#facc15"/>`;
    if (O === "lupa") objeto = `<rect x="${hx}" y="${hy - 16}" width="3.5" height="16" fill="#78350f"/><circle cx="${hx + 2}" cy="${hy - 23}" r="8" fill="rgba(186,230,253,.6)" stroke="#475569" stroke-width="2.5"/>`;
    if (O === "boia") objeto = `<circle cx="${hx}" cy="${hy + 4}" r="11" fill="#ef4444"/><circle cx="${hx}" cy="${hy + 4}" r="5" fill="#ffffff"/><path d="M${hx - 11} ${hy + 4} h5 M${hx + 6} ${hy + 4} h5 M${hx} ${hy - 7} v5 M${hx} ${hy + 10} v5" stroke="#ffffff" stroke-width="3"/>`;
    if (O === "vara") objeto = `<path d="M${hx} ${hy} L${hx + 22} ${hy - 50}" stroke="#78350f" stroke-width="2.5"/><path d="M${hx + 22} ${hy - 50} Q${hx + 26} ${hy - 20} ${hx + 24} ${hy}" stroke="#94a3b8" fill="none"/><path d="M${hx + 18} ${hy + 4} q6 -6 12 0 q-6 6 -12 0 Z M${hx + 30} ${hy + 4} l4 -3 v6 Z" fill="#38bdf8"/>`;
    if (O === "vassoura") objeto = `<rect x="${hx}" y="${hy - 40}" width="3" height="52" fill="#b45309"/><path d="M${hx - 7} ${hy + 12} h17 l3 12 h-23 Z" fill="#facc15"/>`;
    if (O === "pao") objeto = `<ellipse cx="${hx + 2}" cy="${hy - 2}" rx="12" ry="6" fill="#d97706"/><path d="M${hx - 4} ${hy - 4} l3 4 M${hx + 2} ${hy - 5} l3 4 M${hx + 8} ${hy - 4} l3 4" stroke="#92400e" stroke-width="1.5"/>`;
    if (O === "bolo") objeto = `<rect x="${hx - 8}" y="${hy - 12}" width="20" height="12" rx="2" fill="#f472b6"/><rect x="${hx - 8}" y="${hy - 14}" width="20" height="4" rx="2" fill="#ffffff"/><rect x="${hx + 1}" y="${hy - 21}" width="2" height="7" fill="#60a5fa"/><path d="M${hx + 2} ${hy - 24} q2 2 0 3 q-2 -1 0 -3" fill="#f97316"/>`;
    if (O === "camera") objeto = `<rect x="${hx - 6}" y="${hy - 12}" width="20" height="14" rx="3" fill="#111827"/><circle cx="${hx + 4}" cy="${hy - 5}" r="4.5" fill="#38bdf8" stroke="#475569" stroke-width="2"/><circle cx="${hx + 10}" cy="${hy - 10}" r="1.5" fill="#ef4444"/>`;
    if (O === "carta") objeto = `<rect x="${hx - 6}" y="${hy - 10}" width="20" height="13" fill="#fef3c7" stroke="#b45309"/><path d="M${hx - 6} ${hy - 10} l10 7 l10 -7" stroke="#b45309" fill="none"/><path d="M24 70 L46 118" stroke="#78350f" stroke-width="3"/><rect x="22" y="112" width="20" height="16" rx="3" fill="#2563eb"/>`;
    if (O === "balao") objeto = `<path d="M${hx} ${hy} L${hx - 4} ${hy - 40} M${hx} ${hy} L${hx + 8} ${hy - 44} M${hx} ${hy} L${hx + 16} ${hy - 36}" stroke="#94a3b8"/><ellipse cx="${hx - 4}" cy="${hy - 48}" rx="7" ry="9" fill="#ef4444"/><ellipse cx="${hx + 8}" cy="${hy - 52}" rx="7" ry="9" fill="#facc15"/><ellipse cx="${hx + 16}" cy="${hy - 44}" rx="7" ry="9" fill="#3b82f6"/>`;
    if (O === "pizza") objeto = `<path d="M${hx - 10} ${hy - 4} L${hx + 16} ${hy - 4} L${hx + 3} ${hy + 18} Z" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><circle cx="${hx}" cy="${hy + 1}" r="2" fill="#dc2626"/><circle cx="${hx + 7}" cy="${hy + 2}" r="2" fill="#dc2626"/><circle cx="${hx + 3}" cy="${hy + 8}" r="2" fill="#dc2626"/>`;
    const RO = a.rosto; let rosto = "";
    if (RO === "nariz") rosto = `<circle cx="60" cy="49" r="5" fill="#ef4444"/><circle cx="58.5" cy="47.5" r="1.4" fill="#ffffff" opacity=".7"/>`;
    if (RO === "bigode") rosto = `<path d="M60 51 Q52 47 46 53 Q53 52 60 54 Q67 52 74 53 Q68 47 60 51 Z" fill="${cc}"/>`;
    if (RO === "mascara") rosto = `<path d="M46 47 Q60 45 74 47 L72 58 Q60 64 48 58 Z" fill="#7dd3fc"/><path d="M46 49 L36 45 M74 49 L84 45" stroke="#e0f2fe" stroke-width="1.5"/><path d="M50 52 h20 M51 55 h18" stroke="#38bdf8" stroke-width="1"/>`;
    if (RO === "barba") rosto = `<path d="M36 44 Q37 60 46 66 Q53 71 60 71 Q67 71 74 66 Q83 60 84 44 Q81 56 74 58 Q67 52 60 54 Q53 52 46 58 Q39 56 36 44 Z" fill="${cc}"/><path d="M51 53 Q60 49 69 53 Q60 52 51 53 Z" fill="${cc}"/><path d="M52.5 55.5 Q60 62 67.5 55.5 Z" fill="#ffffff" stroke="#7f1d1d" stroke-width="1.6" stroke-linejoin="round"/>`;
    if (RO === "tapaolho") rosto = `<path d="M36 34 L84 46" stroke="#111827" stroke-width="2"/><ellipse cx="69" cy="44" rx="6" ry="5" fill="#111827"/>`;
    // óculos
    let oc = "";
    if (a.oculos === "redondo") oc = `<g fill="none" stroke="#111827" stroke-width="2.4"><circle cx="51" cy="44" r="7"/><circle cx="69" cy="44" r="7"/><path d="M58 44 H62"/></g>`;
    if (a.oculos === "quadrado") oc = `<g fill="none" stroke="#111827" stroke-width="2.4"><rect x="43" y="38" width="15" height="11" rx="3"/><rect x="62" y="38" width="15" height="11" rx="3"/><path d="M58 43 H62"/></g>`;
    if (a.oculos === "escuro") oc = `<g fill="#111827"><rect x="42" y="38" width="16" height="11" rx="4"/><rect x="62" y="38" width="16" height="11" rx="4"/><rect x="57" y="41" width="6" height="2.5"/></g>`;
    const olhos = a.oculos === "escuro" ? "" : `<circle cx="51" cy="44" r="2.8" fill="#1f2937"/><circle cx="69" cy="44" r="2.8" fill="#1f2937"/><circle cx="52" cy="43" r="1" fill="#fff"/><circle cx="70" cy="43" r="1" fill="#fff"/>`;
    const fem = a.tipo === "f" && a.oculos !== "escuro" ? `<path d="M46 41 l-3 -2.5 M47.5 39.8 l-2 -3 M74 41 l3 -2.5 M72.5 39.8 l2 -3" stroke="#1f2937" stroke-width="1.4" stroke-linecap="round"/>` : "";
    const uid = "a" + Math.random().toString(36).slice(2, 7);
    return `<svg class="avatar-svg${busto ? " busto" : ""}" viewBox="${busto ? "14 2 92 92" : "0 0 120 170"}" width="${px || 120}" height="${busto ? px || 120 : Math.round((px || 120) * 170 / 120)}" role="img" aria-label="Avatar">
      <defs><clipPath id="tr"><rect x="36" y="68" width="48" height="50" rx="10"/></clipPath></defs>
      ${pernas}${R === "macacao" ? `<rect x="41" y="110" width="38" height="12" rx="4" fill="${cr}"/>` : ""}${blusa}${roupa}${atras}<rect x="54" y="58" width="12" height="14" rx="4" fill="${pele}"/>
      <circle cx="35" cy="45" r="5" fill="${pele}"/><circle cx="85" cy="45" r="5" fill="${pele}"/><circle cx="60" cy="42" r="25" fill="${pele}"/>
      ${olhos}<circle cx="45" cy="52" r="3.5" fill="#f87171" opacity=".35"/><circle cx="75" cy="52" r="3.5" fill="#f87171" opacity=".35"/>
      ${fem}${a.rosto === "barba" ? "" : `<path d="M52 54 Q60 61 68 54" stroke="${a.tipo === "f" ? "#be123c" : "#7f1d1d"}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`}${CH !== "nenhum" && CH !== "fone" && CH !== "astronauta" ? (a.cabelo === "longo" || a.cabelo === "trancas" ? "" : "") : cabelo}${CH === "nenhum" ? bone : ""}${rosto}${chapeu}${gorroNatal(a)}${oc}${objeto}</svg>`.replace(/id="tr"/g, `id="${uid}"`).replace(/url\(#tr\)/g, `url(#${uid})`);
  }

  /* editor com cronômetro. resolve com o avatar escolhido (salvo, anterior ou padrão) */
  function editor(mount, { nome, anterior, segundos, dupla }) {
    return new Promise(resolve => {
      let a = norm(anterior), fim = Date.now() + (segundos || 120) * 1000, acabou = false;
      const sw = (lista, campo, cls) => lista.map((c, i) => `<button type="button" class="av-sw ${cls || ""}" data-c="${campo}" data-v="${i}" style="--c:${c}" aria-label="cor ${i + 1}"></button>`).join("");
      const op = campo => OPC[campo].map(([v, r]) => `<button type="button" class="av-op" data-c="${campo}" data-v="${v}">${r}</button>`).join("");
      const el = mount(`<section class="tela av-tela"><div class="av-cx">
        <div class="av-topo"><h1>🧍 Monte o seu avatar${nome ? `, <span>${esc(nome)}</span>` : ""}!</h1>
          <div class="av-tempo"><span id="av-s">${segundos || 120}</span>s<i><b id="av-b"></b></i></div></div>
        <div class="av-dupla">${dupla ? `👥 <b>Atividade em dupla: vez ${dupla.vez} de 2.</b> ${dupla.vez === 1 ? `Primeiro ${esc(nome)} monta o avatar; depois é a vez de <b>${esc(dupla.outro)}</b>.` : `Agora é a vez de <b>${esc(nome)}</b>.`} Cada um tem <b>1 minuto</b>.` : `⏱️ Você tem <b>2 minutos</b> para montar o seu avatar.`}
          ${anterior ? `Se o tempo acabar${dupla && dupla.vez === 1 ? ", passa para o colega e" : ","} você entra com o avatar da última vez.` : `Se o tempo acabar${dupla && dupla.vez === 1 ? " (aí passa para o colega)" : ""}, o portal <b>sorteia</b> o que você não escolheu: masculino ou feminino, tom de pele, tipo e cor do cabelo, e você entra com o uniforme de Curionópolis.`}
          <b>🔒 Depois de entrar, o avatar não muda durante a aula.</b></div>
        <div class="av-rapidos"><button type="button" class="btn btn-grande av-rap" id="av-pula" ${anterior ? "" : "disabled"}>😎 Usar o mesmo da última vez${anterior ? "" : "<small>(você ainda não tem)</small>"}</button>
          <button type="button" class="btn btn-grande av-rap uni" id="av-uni">🏫 Usar o uniforme de Curionópolis<small class="av-uni-trava">(escolha antes o passo 1 aqui embaixo 👇)</small></button></div>
        <p class="av-ou">ou monte um novo avatar aqui embaixo 👇</p>
        <div class="av-grid"><div class="av-prev" id="av-prev"></div>
          <div class="av-opcoes">
            <div class="av-passo1"><p class="av-passo">1️⃣ Primeiro, você!</p>
            <p class="av-t">🙂 Masculino ou feminino</p><div class="av-row">${op("tipo")}</div>
            <p class="av-t">🎨 Cor da pele</p><div class="av-row">${sw(PELE, "pele")}</div>
            <p class="av-t">💇 Cabelo</p><div class="av-row">${op("cabelo")}</div><div class="av-row">${sw(CAB, "corCabelo")}</div></div>
            <div class="av-passo2"><p class="av-passo">2️⃣ Agora, a roupa! <span class="av-trava">🔒 Escolha primeiro: masculino ou feminino, a cor da pele e o cabelo</span></p>
            <p class="av-t">👕 Blusa</p><div class="av-row">${op("blusa")}</div><div class="av-row"><small>Cor:</small> ${sw(COR, "cor1")}</div><div class="av-row"><small>Detalhe:</small> ${sw(COR, "cor2")}</div>
            <div class="av-fut" hidden><p class="av-t">⚽ Uniforme de jogador</p><div class="av-row"><small>Modelo:</small> ${op("estilo")}</div>
              <div class="av-row av-num"><small>Número da camisa:</small> <input type="number" id="av-num" min="0" max="99" value="${a.numero}"></div>
              <div class="av-row"><small>Calção:</small> ${sw(COR, "corCalcao")}</div><div class="av-row"><small>Meião:</small> ${sw(COR, "corMeiao")}</div><div class="av-row"><small>Chuteira:</small> ${sw(COR, "corChuteira")}</div>
              <p class="ajuda">Dica: monte com as cores do seu time do coração! 💚💛 <button type="button" class="btn btn-peq av-ideias-btn" id="av-ideias">💡 Ver ideias de uniformes</button></p></div>
            <div class="av-calca"><p class="av-t">👖 Calça</p><div class="av-row">${op("calca")}</div><div class="av-row">${sw(COR, "corCalca")}</div></div>
            <p class="av-t">💼 Profissão <button type="button" class="btn btn-peq av-ideias-btn" id="av-prof">💼 Ver profissões</button></p>
            <div class="av-row"><small>Roupa por cima:</small> ${op("roupa")}</div><div class="av-row"><small>Cor da roupa:</small> ${sw(COR, "corRoupa")}</div>
            <div class="av-row"><small>Na cabeça:</small> ${op("chapeu")}</div><div class="av-row"><small>Na mão:</small> ${op("objeto")}</div><div class="av-row"><small>No rosto:</small> ${op("rosto")}</div>
            <p class="av-t">🧢 Boné</p><div class="av-row">${op("bone")}</div><div class="av-row">${sw(COR, "corBone")}</div>
            <p class="av-t">👓 Óculos</p><div class="av-row">${op("oculos")}</div></div>
          </div></div>
        <div class="row-btns av-bts"><button type="button" class="btn btn-grande btn-ok" id="av-ok">✔ Pronto! Salvar o meu avatar</button></div>
        <p class="ajuda">${anterior ? "Este é o avatar que você usou da última vez: mude o que quiser ou entre com ele mesmo. " : ""}O avatar aparece no placar e no pódio da aula.</p></div></section>`);
      // passo 1 primeiro: as roupas, profissões e camisas de futebol só destravam depois de escolher masculino/feminino, pele e cabelo
      const fez = { tipo: !!(anterior && anterior.tipo), pele: !!anterior, cabelo: !!anterior };
      const pinta = () => {
        const livre = fez.tipo && fez.pele && fez.cabelo, p2 = el.querySelector(".av-passo2");
        p2.classList.toggle("travado", !livre); p2.querySelector(".av-trava").hidden = livre; p2.inert = !livre;
        // 🏫 uniforme: só depois do passo 1 (quem já tem avatar salvo usa o jeitinho da última vez)
        const ub = el.querySelector("#av-uni"), uLivre = livre || !!anterior; ub.disabled = !uLivre; ub.querySelector(".av-uni-trava").hidden = uLivre;
        el.querySelector("#av-prev").innerHTML = svg(a, 220);
        el.querySelectorAll("[data-c]").forEach(b => b.setAttribute("aria-pressed", String(a[b.dataset.c]) === String(b.dataset.v)));
        el.querySelector(".av-fut").hidden = a.blusa !== "futebol"; el.querySelector(".av-calca").hidden = a.blusa === "futebol";
      };
      el.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { const c = b.dataset.c, v = b.dataset.v; if (c in fez) fez[c] = true; if (c === "corCabelo") fez.cabelo = true; a[c] = /^\d+$/.test(v) && c !== "numero" && !OPC[c] ? +v : v;
        if (c === "blusa" && v === "futebol" && a.cor1 === 10 && a.cor2 === 6) { a.cor1 = 3; a.cor2 = 10; } pinta(); });
      // 💡 modal com ideias de uniformes de futebol (tocar numa ideia já veste o bonequinho; o tempo continua correndo)
      el.querySelector("#av-ideias").onclick = () => {
        const d = document.createElement("dialog"); d.className = "pp-dlg pp-dlg-larga av-ideias";
        d.innerHTML = `<form method="dialog"><h2>💡 Ideias de uniformes de futebol</h2><p class="ajuda">Toque numa ideia para vestir o seu jogador. Depois, mude as cores, o número, o calção, o meião e a chuteira do jeito que quiser. ⏱️ O tempo continua correndo!</p>
          <div class="av-ideias-grid">${IDEIAS.map(([rot, x], i) => `<button type="button" class="av-ideia" data-i="${i}">${svg(Object.assign({}, a, x, { blusa: "futebol" }), 110)}<span>${rot}</span></button>`).join("")}</div>
          <div class="row-btns"><button class="btn" value="x">Fechar</button></div></form>`;
        document.body.appendChild(d); d.showModal(); d.addEventListener("close", () => d.remove());
        d.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { Object.assign(a, IDEIAS[+b.dataset.i][1], { blusa: "futebol" }); el.querySelector("#av-num").value = a.numero; pinta(); d.close(); });
        const fecha = setInterval(() => { if (acabou) { clearInterval(fecha); if (d.open) d.close(); } else if (!d.isConnected) clearInterval(fecha); }, 300);
      };
      el.querySelector("#av-prof").onclick = () => {
        const d = document.createElement("dialog"); d.className = "pp-dlg pp-dlg-larga av-ideias";
        d.innerHTML = `<form method="dialog"><h2>💼 Profissões</h2><p class="ajuda">Toque numa profissão para vestir o seu bonequinho. Depois, mude as cores e o que quiser. ⏱️ O tempo continua correndo!</p>
          <div class="av-ideias-grid">${PROF.map(([rot, x], i) => `<button type="button" class="av-ideia" data-i="${i}">${svg(Object.assign({}, a, LIMPA, { oculos: "nenhum" }, x), 110)}<span>${rot}</span></button>`).join("")}</div>
          <div class="row-btns"><button class="btn" value="x">Fechar</button></div></form>`;
        document.body.appendChild(d); d.showModal(); d.addEventListener("close", () => d.remove());
        d.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { Object.assign(a, LIMPA, { oculos: "nenhum" }, PROF[+b.dataset.i][1]); pinta(); d.close(); });
        const fecha = setInterval(() => { if (acabou) { clearInterval(fecha); if (d.open) d.close(); } else if (!d.isConnected) clearInterval(fecha); }, 300);
      };
      el.querySelector("#av-num").oninput = e => { a.numero = Math.max(0, Math.min(99, +e.target.value || 0)); pinta(); };
      const sair = v => { if (acabou) return; acabou = true; clearInterval(iv); resolve(v); };
      el.querySelector("#av-ok").onclick = () => sair({ avatar: a, salvo: true });
      el.querySelector("#av-pula").onclick = () => { if (anterior) sair({ avatar: norm(anterior), salvo: false }); };
      // 🏫 uniforme da escola: mantém o jeitinho do aluno (masculino/feminino, pele, cabelo, óculos) e veste o uniforme
      el.querySelector("#av-uni").onclick = () => { if (!(fez.tipo && fez.pele && fez.cabelo) && !anterior) return; const base = anterior ? norm(anterior) : a;
        sair({ avatar: Object.assign({}, PADRAO, { tipo: base.tipo || a.tipo, pele: base.pele, cabelo: base.cabelo, corCabelo: base.corCabelo, oculos: base.oculos }, fez.pele ? { pele: a.pele } : {}, fez.cabelo ? { cabelo: a.cabelo, corCabelo: a.corCabelo } : {}, fez.tipo ? { tipo: a.tipo } : {}), salvo: true }); };
      const iv = setInterval(() => {
        const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000));
        el.querySelector("#av-s").textContent = r; el.querySelector("#av-b").style.width = (100 * r / (segundos || 120)) + "%";
        el.querySelector(".av-tempo").classList.toggle("fim", r <= 10);
        if (r <= 0) { P.toast && P.toast("⏰ Acabou o tempo!");
          // sem avatar salvo: uniforme de Curionópolis com o que o aluno já escolheu e cor de pele sorteada (se não escolheu)
          if (anterior) sair({ avatar: norm(anterior), salvo: false });
          else { const sorteia = n => Math.floor(Math.random() * n);
            sair({ avatar: Object.assign({}, PADRAO, {
              tipo: fez.tipo ? a.tipo : OPC.tipo[sorteia(2)][0],
              pele: fez.pele ? a.pele : sorteia(PELE.length),
              cabelo: fez.cabelo ? a.cabelo : OPC.cabelo[sorteia(OPC.cabelo.length)][0],
              corCabelo: fez.cabelo ? a.corCabelo : sorteia(4) }), salvo: true }); } }
      }, 250);
      pinta();
    });
  }

  /* depois do código: cada aluno da sessão monta o avatar (dupla: um de cada vez) */
  async function fluxoLogin(mount, infos, segundos) {
    const N = P.nuvem; if (!N || !N.app) return [];
    const usados = [];
    for (let i = 0; i < infos.length; i++) {
      const x = infos[i], ref = N.app(i).db.collection("progresso").doc(x.alunoId + "_avatar");
      let anterior = null, usadoEm = null; try { const sn = await ref.get(); if (sn.exists) { anterior = sn.data().avatar || null; usadoEm = sn.data().usadoEm || null; } } catch (e) {}
      const hoje = new Date().toLocaleDateString("sv-SE");
      // 🔒 já entrou hoje: o avatar não muda durante a aula
      if (anterior && usadoEm === hoje) { usados.push(norm(anterior)); P.toast && P.toast(`🔒 ${(x.nome || "").split(" ")[0]}, você já montou o avatar hoje: ele não muda durante a aula.`); continue; }
      const pn = y => (y.nome || "").split(" ")[0], du = infos.length > 1;
      if (du && i > 0) P.toast && P.toast(`👥 Agora é a vez de ${pn(x)} montar o avatar!`);
      const r = await editor(mount, { nome: pn(x), anterior, segundos: du ? 60 : segundos, dupla: du ? { vez: i + 1, outro: pn(infos[1 - i]) } : null });
      usados.push(r.avatar);
      try { await ref.set(Object.assign({ alunoId: x.alunoId, turma: x.turma || P.sess.get().turma, tipo: "avatar", usadoEm: hoje }, r.salvo ? { avatar: r.avatar, atualizado: Date.now() } : {}), { merge: true }); } catch (e) { console.warn("avatar", e); }
    }
    return usados;
  }
  /* avatares da sessão (para a barra de cima): guarda na sessão; se não tiver, busca uma vez na nuvem */
  let buscando = false;
  async function daSessao(s, aoTer) {
    if (!s || !s.nuvem || !s.alunoIds || (s.avatares && s.avatares.length === s.alunoIds.length) || buscando) return;
    const N = P.nuvem; if (!N || !N.app) return; buscando = true;
    try { const avs = await Promise.all(s.alunoIds.map((id, i) => N.app(i).db.collection("progresso").doc(id + "_avatar").get().then(sn => sn.exists ? sn.data().avatar : null).catch(() => null)));
      const ss = P.sess.get(); if (ss && ss.entrou === s.entrou) { P.sess.set(Object.assign({}, ss, { avatares: avs })); aoTer && aoTer(); } } finally { buscando = false; }
  }

  /* ======================= 🏆 PONTOS ======================= */
  const BASE = { pratica: 60, basico: 100, desafio: 150, turbo: 200 }, BONUS = 300;
  function pontosDoc(p, entradaTs, hoje) {
    if (!p || !p.aid || !p.mid || !P.montarMissao || !P.conteudo[p.aid]) return null;
    let mm; try { mm = P.montarMissao(p.aid, p.mid); } catch (e) { return null; }
    let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (e) {}
    let max = 0, raw = 0;
    mm.pages.forEach(pg => { const base = BASE[pg.id]; if (!base) return;
      (pg.atividades || []).forEach(at => { const T = (P.tipos || {})[at.tipo] || {}; if (T.semStatus || at.opcional) return;
        max += base; const st = atv[at.id]; if (!st || !st.status) return;
        let f = st.status === "certo" ? 1 : st.status === "ajuda" ? .6 : st.status === "enviado" ? .8 : .5;
        f -= .12 * (st.tentativas || 0) + .15 * (st.dicas || 0) + (st.viuResolucao ? .2 : 0);
        raw += base * Math.max(.3, Math.min(1, f)); }); });
    const dur = (P.catalogo.duracaoAula || 75) * 60000, okEm = (p.basicoOkEm || {})[hoje];
    if (p.basicoOk && okEm && entradaTs) raw += BONUS * Math.max(.1, Math.min(1, 1 - (okEm - entradaTs) / dur));
    max += BONUS;
    return { pontos: max ? Math.round(1000 * raw / max) : 0, okB: !!p.basicoOk, okEm: okEm || null };
  }
  const nomeCurto = n => { const p = String(n || "").trim().split(/\s+/); return p.length > 1 ? p[0] + " " + p[p.length - 1][0] + "." : p[0] || "?"; };
  /* ranking da missão do dia. alunos = cadastro da turma; prog = documentos de progresso da turma */
  function ranking(alunos, prog, mid, hoje) {
    const porId = {}; alunos.forEach(a => { porId[a.id] = a; });
    const ent = {}, av = {}; prog.forEach(p => { if (p.tipo === "entrada" && p.dias && p.dias[hoje]) ent[p.alunoId] = p.dias[hoje]; if (p.tipo === "avatar") av[p.alunoId] = p.avatar; });
    const docs = {}; prog.forEach(p => { if (p.mid === mid && p.dias && p.dias[hoje] && porId[p.alunoId]) { const o = docs[p.alunoId]; if (!o || (p.atualizado || 0) > (o.atualizado || 0)) docs[p.alunoId] = p; } });
    const vistos = new Set(), out = [];
    Object.keys(ent).concat(Object.keys(docs)).forEach(id => {
      if (vistos.has(id) || !porId[id]) return;
      const p = docs[id], par = ((p && p.dupla) || []).filter(x => porId[x]), ids = [id].concat(par);
      ids.forEach(x => vistos.add(x));
      const r = (p && pontosDoc(p, Math.min(...ids.map(x => ent[x] || Infinity).filter(isFinite)) || ent[id], hoje)) || { pontos: 0, okB: false, okEm: null };
      out.push({ ids, nomes: ids.map(x => nomeCurto(porId[x].nome)), avatares: ids.map(x => av[x] || null), pontos: r.pontos, okB: r.okB, okEm: r.okEm, trilha: ids.some(x => porId[x].trilha), ult: p ? p.atualizado || 0 : 0 });
    });
    out.sort((x, y) => y.pontos - x.pontos || (x.okEm || 9e15) - (y.okEm || 9e15) || x.nomes[0].localeCompare(y.nomes[0], "pt-BR"));
    out.forEach((e, i) => { e.pos = i > 0 && out[i - 1].pontos === e.pontos && out[i - 1].okEm === e.okEm ? out[i - 1].pos : i + 1; });
    return out;
  }

  /* ======================= 👑 rei da sala ======================= */
  // coroinha que flutua perto do avatar de quem está em 1º lugar (não fica encaixada na cabeça)
  function coroa(px) {
    return `<svg class="coroa" viewBox="0 0 40 30" width="${px}" height="${Math.round(px * .75)}" aria-hidden="true"><path d="M3 26 L5 9 L13 17 L20 4 L27 17 L35 9 L37 26 Z" fill="#facc15" stroke="#a16207" stroke-width="1.6" stroke-linejoin="round"/><rect x="3" y="23" width="34" height="5" rx="1.5" fill="#eab308" stroke="#a16207" stroke-width="1.2"/><circle cx="20" cy="4" r="2.6" fill="#ef4444"/><circle cx="5" cy="9" r="2.1" fill="#3b82f6"/><circle cx="35" cy="9" r="2.1" fill="#22c55e"/><circle cx="20" cy="18" r="2.4" fill="#ef4444"/><circle cx="11" cy="21" r="1.4" fill="#fff"/><circle cx="29" cy="21" r="1.4" fill="#fff"/></svg>`;
  }
  // reis = quem está em 1º lugar com pontos (empate no 1º lugar: todos ganham a coroa)
  const reis = rk => rk.filter(e => e.pos === 1 && e.pontos > 0);
  // "Rei" ou "Rainha" pelo avatar (masculino/feminino que o próprio aluno escolheu); dupla: "Reis"/"Rainhas"
  function tituloRei(avs) { const f = (avs || []).map(a => !!(a && a.tipo === "f")), n = f.length || 1, todas = f.length && f.every(Boolean);
    return n > 1 ? (todas ? "Rainhas da sala" : "Reis da sala") : (todas ? "Rainha da sala" : "Rei da sala"); }

  /* ======================= 🎉 telas do placar/pódio ======================= */
  const MED = ["🥇", "🥈", "🥉"];
  function linhaPlacar(e, i) {
    return `<div class="pl-lin ${i < 3 ? "top top" + (i + 1) : ""}" data-k="${esc(e.ids.join("+"))}" style="top:${i * 74}px">
      <span class="pl-pos">${i < 3 ? MED[i] : e.pos + "º"}</span><span class="pl-av${e.rei ? " rei" : ""}">${e.rei ? coroa(38) : ""}${e.avatares.map(a => svg(a, 38)).join("")}</span>
      <span class="pl-nome">${e.nomes.map(esc).join(" & ")}${e.trilha ? " 👣" : ""}${e.rei ? ` <small class="pl-rei">👑 ${tituloRei(e.avatares)}</small>` : ""}${e.okB ? ` <small class="pl-ok">✔ Básico</small>` : ""}</span>
      <span class="pl-pts">${e.pontos}<small> pts</small></span></div>`;
  }
  function podioHTML(rk) {
    const top = [1, 0, 2].map(i => rk[i]).map((e, k) => { if (!e) return `<div class="pd-col vazio"></div>`; const lug = [2, 1, 3][k];
      return `<div class="pd-col l${lug}" style="--d:${[1.4, 2.8, 0][k]}s"><div class="pd-av">${e.avatares.map(a => svg(a, lug === 1 ? 120 : 96)).join("")}</div>
        <div class="pd-nome">${e.nomes.map(esc).join(" & ")}</div><div class="pd-pts">${e.pontos} pts</div><div class="pd-bloco">${MED[lug - 1]}<b>${lug}º</b></div></div>`; }).join("");
    const resto = rk.slice(3);
    return `<div class="pd-palco">${top}</div>${resto.length ? `<div class="pd-resto">${resto.map(e => `<span class="pd-r"><b>${e.pos}º</b> ${e.avatares.map(a => svg(a, 26)).join("")} ${e.nomes.map(esc).join(" & ")} · ${e.pontos}</span>`).join("")}</div>` : ""}`;
  }
  // atraso = segundos até começar (no pódio do projetor espera o 1º lugar aparecer)
  function confete(raiz, atraso) {
    const cores = ["#facc15", "#f97316", "#22c55e", "#3b82f6", "#ec4899", "#a855f7"], a0 = atraso == null ? 3 : atraso;
    for (let i = 0; i < 120; i++) { const c = document.createElement("i"); c.className = "pd-conf"; c.style.cssText = `left:${Math.random() * 100}%;background:${cores[i % 6]};animation-delay:${a0 + Math.random() * 2.5}s;animation-duration:${2.5 + Math.random() * 2}s;transform:rotate(${Math.random() * 360}deg)`; raiz.appendChild(c); }
  }

  P.avatar = { svg, editor, fluxoLogin, daSessao, PADRAO };
  P.podio = { ranking, pontosDoc, linhaPlacar, podioHTML, confete, nomeCurto, MED, coroa, reis, tituloRei };
})();
