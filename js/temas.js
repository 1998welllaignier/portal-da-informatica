/* 🎉 Temas das datas comemorativas: o portal se veste sozinho pela data (calendário em TEMAS).
   Leve: só CSS e desenhos do próprio navegador. Nada cobre textos nem tarefas (decoração sem clique).
   Painel → 🎨 Tema: Automático pela data, um tema escolhido à mão (para todos) ou Sem tema.
   Só num navegador: ?tema=<id> (fica lembrado), ?tema=auto volta a seguir o painel/data, ?tema=nenhum desliga. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};

  /* ---------- datas móveis (Carnaval e Páscoa) ---------- */
  function pascoa(ano) { // algoritmo de Meeus/Jones/Butcher (calendário gregoriano)
    const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3),
      h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
      mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
  }
  const mais = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const md = d => String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const fmt = s => s.split("-").reverse().join("/");

  /* ---------- calendário: [id, nome, início, fim] (mês-dia; o fim pode passar da virada do ano) ---------- */
  // regra das aulas (segunda a quinta): o tema fica na semana da data, terminando no próprio dia.
  // Data numa segunda ou terça: começa na quinta anterior (para pegar pelo menos 2 dias de aula). extra = semanas a mais antes.
  function janela(ano, mmdd, extra) {
    const d = new Date(ano + "-" + mmdd + "T12:00:00"), dia = d.getDay();
    const ini = dia === 1 || dia === 2 ? mais(d, -(dia + 3)) : mais(d, -((dia + 6) % 7)); // segunda da semana (data na segunda ou terça: desde a quinta anterior)
    return [md(mais(ini, -7 * (extra || 0))), md(d)];
  }
  function calendario(ano) {
    const pa = pascoa(ano), carn = mais(pa, -47); // terça de Carnaval
    return [
      ["carnaval", "🎭 Carnaval", md(mais(carn, -6)), md(mais(carn, 1))],          // da quarta antes até a Quarta-feira de Cinzas
      ["pascoa", "🐰 Páscoa", md(mais(pa, -6)), md(pa)],                            // Semana Santa (segunda a domingo de Páscoa)
      ["indigenas", "🪶 Dia dos Povos Indígenas", ...janela(ano, "04-19")],
      ["curionopolis", "🎂 Aniversário de Curionópolis", ...janela(ano, "05-10")],
      ["junina", "🌽 Festa Junina", ...janela(ano, "06-24", 1)],                    // 2 semanas, até o dia de São João
      ["folclore", "🍃 Dia do Folclore", ...janela(ano, "08-22")],
      ["patria", "🇧🇷 Semana da Pátria", ...janela(ano, "09-07")],
      ["criancas", "🎈 Dia das Crianças", ...janela(ano, "10-12")],
      ["professor", "🍎 Dia do Professor", ...janela(ano, "10-15")],
      ["consciencia", "✊🏿 Consciência Negra", ...janela(ano, "11-20")],
      ["padroeira", "⛪ Padroeira de Curionópolis", ...janela(ano, "11-27")],
      ["natal", "🎄 Natal", "12-01", "01-06"]
    ].map((x, i, arr) => { // se encostar no tema anterior, começa no dia seguinte ao fim dele
      if (i && x[2] <= arr[i - 1][3] && x[0] !== "natal") x[2] = md(mais(new Date(ano + "-" + arr[i - 1][3] + "T12:00:00"), 1)); return x; });
  }
  function pelaData(d) {
    const x = md(d), t = calendario(d.getFullYear()).find(([, , ini, fim]) => ini <= fim ? x >= ini && x <= fim : x >= ini || x <= fim);
    return t ? t[0] : null;
  }
  P.temaCalendario = ano => calendario(ano || new Date().getFullYear()).map(([id, nome, ini, fim]) => ({ id, nome, ini: fmt(ini), fim: fmt(fim) }));
  P.temaPelaData = pelaData;

  /* ---------- desenhos ---------- */
  const IGREJA = `<svg viewBox="0 0 120 150" width="96" height="120">
      <rect x="20" y="62" width="80" height="80" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><path d="M14 66 L60 30 L106 66 Z" fill="#1d4ed8"/><path d="M20 66 L60 36 L100 66" fill="none" stroke="#fff" stroke-width="2"/>
      <rect x="46" y="6" width="28" height="34" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><path d="M42 8 L60 -6 L78 8 Z" fill="#1d4ed8"/>
      <g class="tm-sino"><path d="M52 30 Q52 16 60 16 Q68 16 68 30 Z" fill="#eab308" stroke="#a16207" stroke-width="1.5"/><circle cx="60" cy="31" r="2.5" fill="#a16207"/></g>
      <path d="M60 -16 V-4 M55 -11 H65" stroke="#a16207" stroke-width="3" stroke-linecap="round"/>
      <path d="M48 142 V108 Q60 92 72 108 V142 Z" fill="#78350f"/><circle cx="60" cy="84" r="9" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
      <rect x="28" y="96" width="12" height="18" rx="6" fill="#bfdbfe"/><rect x="80" y="96" width="12" height="18" rx="6" fill="#bfdbfe"/><rect x="10" y="140" width="100" height="6" fill="#94a3b8"/></svg>`;
  const BAOBA = `<svg viewBox="0 0 140 130" width="120" height="112"><path d="M58 128 Q62 90 54 66 L44 50 M58 128 H84 Q78 90 86 66 L98 52 M70 70 V40 M54 66 Q40 60 26 62 M86 66 Q100 58 116 60" stroke="#78350f" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M48 128 Q58 96 56 76 Q70 70 84 76 Q82 96 94 128 Z" fill="#92400e"/><ellipse cx="30" cy="54" rx="22" ry="12" fill="#15803d"/><ellipse cx="70" cy="34" rx="28" ry="15" fill="#16a34a"/><ellipse cx="112" cy="52" rx="22" ry="12" fill="#15803d"/><ellipse cx="50" cy="44" rx="14" ry="8" fill="#22c55e"/><ellipse cx="92" cy="42" rx="14" ry="8" fill="#22c55e"/>
      <circle cx="120" cy="14" r="10" fill="#facc15" class="tm-sol"/></svg>`;
  const SOL_FLORESTA = `<svg viewBox="0 0 140 110" width="120" height="94"><circle cx="104" cy="28" r="16" fill="#f59e0b" class="tm-sol"/><g stroke="#f59e0b" stroke-width="3" class="tm-sol"><path d="M104 4 V0 M104 56 V52 M80 28 H76 M132 28 H128 M87 11 L84 8 M121 45 L124 48 M121 11 L124 8 M87 45 L84 48"/></g>
      <path d="M0 110 Q20 60 34 80 Q44 40 62 74 Q76 50 90 78 Q104 64 140 110 Z" fill="#166534"/><path d="M10 110 Q30 80 48 96 Q66 76 84 98 Q104 84 130 110 Z" fill="#15803d"/>
      <path d="M0 104 l10 -6 l10 6 l10 -6 l10 6 l10 -6 l10 6 l10 -6 l10 6 l10 -6 l10 6 l10 -6 l10 6 l10 -6 l10 6" stroke="#f59e0b" stroke-width="3" fill="none"/></svg>`;
  const BOLO = n => `<svg viewBox="0 0 120 120" width="100" height="100"><g class="tm-balao"><path d="M18 64 Q14 40 26 30" stroke="#94a3b8" fill="none"/><ellipse cx="26" cy="22" rx="12" ry="15" fill="#ef4444"/><path d="M98 60 Q104 38 94 28" stroke="#94a3b8" fill="none"/><ellipse cx="94" cy="20" rx="12" ry="15" fill="#3b82f6"/></g>
      <rect x="22" y="70" width="76" height="40" rx="6" fill="#f9a8d4"/><path d="M22 80 Q32 88 41 80 Q51 88 60 80 Q70 88 79 80 Q89 88 98 80" stroke="#fff" stroke-width="5" fill="none"/><rect x="34" y="52" width="52" height="20" rx="5" fill="#fbcfe8"/>
      <rect x="57" y="36" width="6" height="16" fill="#facc15"/><path d="M60 24 Q65 31 60 36 Q55 31 60 24 Z" fill="#f97316" class="tm-chama"/><text x="60" y="98" text-anchor="middle" font-size="16" font-weight="900" fill="#be185d" font-family="sans-serif">${n} anos</text><rect x="14" y="108" width="92" height="6" rx="3" fill="#cbd5e1"/></svg>`;
  const FOGUEIRA = `<svg viewBox="0 0 120 110" width="100" height="92"><g class="tm-chama"><path d="M60 14 Q82 44 72 70 Q66 52 60 60 Q54 48 46 70 Q36 44 60 14 Z" fill="#f97316"/><path d="M60 36 Q72 56 66 72 Q60 62 54 72 Q48 56 60 36 Z" fill="#facc15"/></g>
      <path d="M24 96 L96 74 M24 74 L96 96 M30 86 H90" stroke="#78350f" stroke-width="10" stroke-linecap="round"/></svg>`;
  const MILHO = `<svg viewBox="0 0 90 120" width="70" height="94"><path d="M44 112 Q20 70 34 30 Q46 70 44 112 Z M46 112 Q70 70 56 30 Q44 70 46 112 Z" fill="#65a30d"/><ellipse cx="45" cy="52" rx="14" ry="34" fill="#facc15"/>
      <g fill="#eab308">${Array.from({ length: 18 }, (_, i) => `<circle cx="${38 + (i % 3) * 7}" cy="${26 + Math.floor(i / 3) * 9}" r="3"/>`).join("")}</g></svg>`;
  const MASCARA = `<svg viewBox="0 0 130 90" width="110" height="76"><path d="M10 34 Q30 10 64 30 Q98 10 120 34 Q114 64 86 60 Q72 58 64 46 Q56 58 42 60 Q16 64 10 34 Z" fill="#7c3aed" stroke="#facc15" stroke-width="3"/>
      <ellipse cx="40" cy="40" rx="12" ry="8" fill="#fff"/><ellipse cx="88" cy="40" rx="12" ry="8" fill="#fff"/><path d="M120 34 Q130 20 126 6 M118 30 Q126 12 112 4" stroke="#ec4899" stroke-width="3" fill="none"/><circle cx="64" cy="24" r="4" fill="#facc15"/>
      <path d="M64 46 Q60 70 52 86" stroke="#22c55e" stroke-width="3" fill="none"/></svg>`;
  const SERPENTINA = `<svg viewBox="0 0 120 120" width="96" height="96"><path class="tm-mola" d="M10 10 Q40 20 30 40 Q20 60 50 64 Q80 68 70 90 Q64 104 90 112" stroke="#ec4899" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M40 4 Q70 16 62 34 Q54 52 84 54 Q112 56 104 80" stroke="#22c55e" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M80 8 Q106 20 98 38" stroke="#facc15" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`;
  const COELHO = `<svg viewBox="0 0 120 130" width="96" height="104"><g class="tm-orelha"><ellipse cx="46" cy="30" rx="9" ry="26" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="46" cy="30" rx="4" ry="18" fill="#fbcfe8"/></g><ellipse cx="72" cy="30" rx="9" ry="26" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="72" cy="30" rx="4" ry="18" fill="#fbcfe8"/>
      <ellipse cx="60" cy="98" rx="30" ry="28" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><circle cx="60" cy="62" r="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><circle cx="52" cy="58" r="2.5" fill="#1f2937"/><circle cx="68" cy="58" r="2.5" fill="#1f2937"/><ellipse cx="60" cy="66" rx="3.5" ry="2.5" fill="#f472b6"/>
      <ellipse cx="96" cy="114" rx="11" ry="14" fill="#a78bfa"/><path d="M86 112 Q96 106 106 112" stroke="#fff" stroke-width="3" fill="none"/><ellipse cx="24" cy="116" rx="10" ry="12" fill="#fcd34d"/><path d="M15 116 l4 -4 l4 4 l4 -4 l4 4" stroke="#fff" stroke-width="2.5" fill="none"/></svg>`;
  const FOLHAS = `<svg viewBox="0 0 130 110" width="110" height="94"><path class="tm-mola" d="M64 100 Q20 96 30 60 Q40 30 64 20 Q88 30 98 60 Q108 96 64 100 Z" fill="#16a34a"/><path d="M64 100 V24 M64 56 L44 44 M64 72 L86 60 M64 86 L46 78" stroke="#bbf7d0" stroke-width="2.5" fill="none"/>
      <path d="M18 104 Q14 80 30 70 Q34 92 18 104 Z" fill="#65a30d"/><path d="M110 104 Q118 84 104 72 Q98 92 110 104 Z" fill="#84cc16"/><circle cx="104" cy="22" r="10" fill="#f97316"/><path d="M104 12 Q108 4 114 6" stroke="#15803d" stroke-width="3" fill="none"/></svg>`;
  const BANDEIRAS_BR = `<svg viewBox="0 0 120 120" width="96" height="96"><path d="M20 118 V10" stroke="#78350f" stroke-width="4"/><g class="tm-mola"><path d="M22 12 H104 V64 H22 Z" fill="#16a34a"/><path d="M63 18 L98 38 L63 58 L28 38 Z" fill="#facc15"/><circle cx="63" cy="38" r="12" fill="#1d4ed8"/><path d="M51 36 Q63 32 75 40" stroke="#fff" stroke-width="2" fill="none"/></g></svg>`;
  const PIPA = `<svg viewBox="0 0 120 130" width="96" height="104"><g class="tm-pipa"><path d="M60 6 L94 40 L60 86 L26 40 Z" fill="#f43f5e"/><path d="M60 6 L60 86 M26 40 H94" stroke="#fff" stroke-width="2"/><path d="M60 6 L94 40 L60 40 Z" fill="#facc15"/><path d="M26 40 L60 86 L60 40 Z" fill="#3b82f6"/>
      <path d="M60 86 Q50 100 62 108 Q74 116 64 128" stroke="#334155" stroke-width="1.5" fill="none"/><path d="M58 98 l-6 2 l6 2 Z M62 112 l6 2 l-6 2 Z" fill="#22c55e"/></g></svg>`;
  const MACA_LIVROS = `<svg viewBox="0 0 120 110" width="100" height="92"><rect x="14" y="84" width="92" height="14" rx="2" fill="#1d4ed8"/><rect x="20" y="70" width="80" height="14" rx="2" fill="#dc2626"/><rect x="10" y="56" width="88" height="14" rx="2" fill="#16a34a"/><path d="M14 63 H94" stroke="#fff" stroke-width="1.5"/>
      <path d="M60 22 Q46 16 42 32 Q40 52 60 54 Q80 52 78 32 Q74 16 60 22 Z" fill="#ef4444"/><path d="M60 22 Q62 12 68 8" stroke="#78350f" stroke-width="3" fill="none"/><path d="M62 16 Q72 8 78 16 Q70 20 62 16 Z" fill="#22c55e"/><ellipse cx="52" cy="32" rx="3" ry="6" fill="#fff" opacity=".5"/></svg>`;

  /* ---------- cada tema: classes do CSS, enfeites dos cantos, o que cai, faixa de mensagem e enfeite do avatar ---------- */
  const DEF = {
    carnaval: { esq: MASCARA, dir: SERPENTINA, cai: { tipo: "confete", n: 40 }, avatar: "mascara", faixa: "🥁 <b>Carnaval:</b> a maior festa popular do Brasil, nos dias antes da Quarta-feira de Cinzas, com escolas de samba, blocos, frevo e marchinhas. A escola <b>Unidos da Informática</b> está na avenida: alegria com respeito, porque o Carnaval é festa para todos!" },
    pascoa: { dir: COELHO, faixa: "🐰 <b>Páscoa:</b> a festa cristã que celebra a ressurreição de Jesus. Virou também tempo de partilha, de esperança e de ovos de chocolate com quem a gente gosta. 🍫" },
    indigenas: { esq: SOL_FLORESTA, faixa: "🪶 <b>19 de abril · Dia dos Povos Indígenas.</b> O Brasil tem centenas de povos indígenas, cada um com a sua língua, a sua história e a sua cultura. Eles não são coisa do passado: estão aqui hoje. Respeito e valorização!" },
    curionopolis: { dir: BOLO(new Date().getFullYear() - 1988), cai: { tipo: "balao", n: 10 }, faixa: `🎂 <b>10 de maio · Aniversário de Curionópolis!</b> A nossa cidade foi criada em 10 de maio de 1988 e faz ${new Date().getFullYear() - 1988} anos. Parabéns, Curionópolis!` },
    junina: { esq: FOGUEIRA, dir: MILHO, avatar: "palha", faixa: "🌽 <b>Festa Junina:</b> as festas de junho homenageiam Santo Antônio, São João e São Pedro e celebram a colheita, com quadrilha, fogueira, bandeirinhas e comidas de milho. Bem-vindos ao <b>Arraiá da Informática</b>! 🎶" },
    folclore: { esq: FOLHAS, cai: { tipo: "folha", n: 18 }, faixa: "🍃 <b>22 de agosto · Dia do Folclore.</b> Curupira, Iara, Boto, Saci, Boitatá… as lendas, as danças e as brincadeiras que contam a história do nosso povo." },
    patria: { dir: BANDEIRAS_BR, faixa: "🇧🇷 <b>7 de setembro · Independência do Brasil (1822).</b> Semana da Pátria: conhecer a nossa história é cuidar do nosso futuro." },
    criancas: { dir: PIPA, cai: { tipo: "balao", n: 14 }, avatar: "festa", faixa: "🎈 <b>12 de outubro · Dia das Crianças!</b> Brincar, aprender e sonhar: hoje a festa é de vocês!" },
    professor: { esq: MACA_LIVROS, faixa: "🍎 <b>15 de outubro · Dia do Professor.</b> A data lembra a primeira lei do Brasil sobre as escolas de primeiras letras, de 15 de outubro de 1827. Obrigado a todos os professores que ensinam com carinho: que tal agradecer ao seu hoje?" },
    consciencia: { esq: BAOBA, faixa: "✊🏿 <b>20 de novembro · Dia Nacional de Zumbi e da Consciência Negra.</b> Zumbi e Dandara dos Palmares lutaram pela liberdade do povo negro. Conheça e valorize a história e a cultura afro-brasileira, que estão na nossa música, na comida, nas palavras e no jeito de ser do Brasil. <b>Racismo é crime</b> (Lei nº 7.716/1989): respeito é para todos." },
    padroeira: { esq: IGREJA, cai: { tipo: "estrela", n: 14 }, faixa: "⛪ <b>27 de novembro · Festa de Nossa Senhora das Graças, padroeira de Curionópolis.</b> Dias de festejo, fé e encontro na nossa cidade." },
    natal: { natal: true, avatar: "gorro", faixa: "🎄 <b>Natal:</b> a festa cristã que celebra o nascimento de Jesus. É tempo de família, de solidariedade e de fazer o bem a quem está perto. Feliz Natal e boas festas!" }
  };

  /* ---------- nome do tema na plaquinha pendurada embaixo da barra de cima ---------- */
  // [nome divertido, nome oficial] (datas de conscientização sem trocadilho, por respeito)
  const NOME = { carnaval: ["🎭 Unidos da Informática", "Carnaval"], pascoa: ["🐰 Páscoa Conectada", "Páscoa"], indigenas: ["🪶 Dia dos Povos Indígenas", "19 de abril"],
    curionopolis: ["🎂 Parabéns, Curionópolis!", "Aniversário da cidade · 10 de maio"], junina: ["🌽 Arraiá da Informática", "Festa Junina · São João"], folclore: ["🍃 Lendas do Brasil", "Dia do Folclore · 22 de agosto"],
    patria: ["🇧🇷 Brasil Conectado", "Semana da Pátria · 7 de setembro"], criancas: ["🎈 Criançada Digital", "Dia das Crianças · 12 de outubro"], professor: ["🍎 Mestres do Saber", "Dia do Professor · 15 de outubro"],
    consciencia: ["✊🏿 Semana da Consciência Negra", "20 de novembro · Zumbi e Dandara"], padroeira: ["⛪ Festa da Padroeira", "Nossa Senhora das Graças · 27 de novembro"], natal: ["🎄 Feliz Natal!", "Natal Conectado"] };
  P.temaNome = id => (NOME[id] || [""])[0];

  /* ---------- enfeite do avatar (só em quem está sem chapéu e sem boné) ---------- */
  P.enfeiteAvatar = function (a) {
    const d = tema && DEF[tema], tipo = d && d.avatar; if (!tipo) return "";
    const livre = !(a.chapeu && a.chapeu !== "nenhum") && !(a.bone && a.bone !== "nenhum");
    if (tipo === "gorro" && livre) return `<path d="M36 25 Q44 4 66 6 Q86 8 92 20 L84 22 Q78 14 70 15 Q80 22 84 25 Z" fill="#dc2626"/><path d="M36 25 Q50 10 70 15 Q80 22 84 25 Z" fill="#b91c1c" opacity=".35"/><rect x="32" y="21" width="56" height="9" rx="4.5" fill="#fff" stroke="#e5e7eb"/><circle cx="92" cy="21" r="5" fill="#fff" stroke="#e5e7eb"/>`;
    if (tipo === "palha" && livre) return `<ellipse cx="60" cy="24" rx="38" ry="7" fill="#eab308" stroke="#a16207" stroke-width="1.5"/><path d="M40 24 Q42 4 60 4 Q78 4 80 24 Z" fill="#facc15" stroke="#a16207" stroke-width="1.5"/><path d="M41 18 H79" stroke="#dc2626" stroke-width="4"/><path d="M48 10 L52 6 M66 8 L70 12 M30 26 L26 30 M90 26 L94 30" stroke="#a16207" stroke-width="1.5"/><rect x="62" y="10" width="7" height="6" fill="#3b82f6" transform="rotate(12 65 13)"/>`;
    if (tipo === "festa" && livre) return `<path d="M50 22 L62 -6 L74 22 Z" fill="#a855f7"/><path d="M53 15 L71 15 M56 8 L68 8" stroke="#facc15" stroke-width="3"/><circle cx="62" cy="-6" r="4" fill="#f43f5e"/><ellipse cx="62" cy="22" rx="13" ry="3" fill="#7c3aed"/>`;
    if (tipo === "mascara" && (!a.oculos || a.oculos === "nenhum")) return `<path d="M36 42 Q46 32 60 40 Q74 32 84 42 Q80 54 68 52 Q62 50 60 46 Q58 50 52 52 Q40 54 36 42 Z" fill="#7c3aed" stroke="#facc15" stroke-width="1.8"/><ellipse cx="51" cy="44" rx="4" ry="2.6" fill="#fff"/><ellipse cx="69" cy="44" rx="4" ry="2.6" fill="#fff"/><circle cx="51" cy="44" r="1.8" fill="#1f2937"/><circle cx="69" cy="44" r="1.8" fill="#1f2937"/><path d="M84 40 Q92 30 88 22" stroke="#ec4899" stroke-width="2.5" fill="none"/>`;
    return "";
  };

  /* ---------- aplicar ---------- */
  let local = null;
  try { const q = new URLSearchParams(location.search).get("tema"); if (q) localStorage.setItem("pp-tema", q); local = localStorage.getItem("pp-tema"); } catch (e) {}
  const valido = x => x && (x === "nenhum" || DEF[x]);
  const resolver = global => { const l = valido(local) ? local : null, g = valido(global) ? global : null, x = l || g;
    return x ? (x === "nenhum" ? null : x) : pelaData(new Date()); };
  let tema = null;
  function limpar() {
    Array.from(document.documentElement.classList).forEach(c => { if (/^tema-/.test(c)) document.documentElement.classList.remove(c); });
    document.querySelectorAll(".tm-el").forEach(x => x.remove());
  }
  function aplicar(novo) {
    if (novo === tema) return;
    limpar(); tema = novo; P.tema = novo;
    if (!novo) return;
    document.documentElement.classList.add("tema-on", "tema-" + novo);
    if (document.body) enfeitar(); else document.addEventListener("DOMContentLoaded", enfeitar, { once: true });
  }
  const reduz = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const el = (cls, html) => { const d = document.createElement("div"); d.className = "tm-el " + cls; d.setAttribute("aria-hidden", "true"); d.innerHTML = html; document.body.appendChild(d); return d; };
  function particulas(cfg) {
    if (reduz()) return;
    const cores = ["#ef4444", "#facc15", "#22c55e", "#3b82f6", "#ec4899", "#a855f7", "#f97316"];
    const sobe = cfg.tipo === "balao";
    let h = "";
    for (let i = 0; i < cfg.n; i++) {
      const c = cores[i % cores.length], dur = (sobe ? 14 : 8) + Math.random() * 10, s = `left:${Math.random() * 100}%;animation-duration:${dur}s;animation-delay:-${Math.random() * dur}s;`;
      if (cfg.tipo === "neve") h += `<i style="${s}font-size:${8 + Math.random() * 12}px;opacity:${.35 + Math.random() * .45}">❄</i>`;
      else if (cfg.tipo === "confete") h += `<i class="cf" style="${s}background:${c};transform:rotate(${Math.random() * 360}deg)"></i>`;
      else if (cfg.tipo === "folha") h += `<i style="${s}font-size:${12 + Math.random() * 10}px;opacity:.7">${["🍃", "🍂"][i % 2]}</i>`;
      else if (cfg.tipo === "estrela") h += `<i style="${s}font-size:${8 + Math.random() * 8}px;color:#facc15;opacity:.6">✦</i>`;
      else if (cfg.tipo === "balao") h += `<i class="bl" style="${s}--c:${c}"></i>`;
    }
    el("tm-cai" + (sobe ? " sobe" : ""), h);
  }
  function enfeitar() {
    if (!tema || document.querySelector(".tm-el")) return;
    const d = DEF[tema] || {};
    if (d.natal) {
      particulas({ tipo: "neve", n: 36 });
      el("tm-canto esq tm-arvore", `<svg viewBox="0 0 80 100" width="74" height="92"><polygon points="40,4 44,14 54,14 46,20 49,30 40,24 31,30 34,20 26,14 36,14" fill="#facc15"/><path d="M40 18 L66 52 H54 L72 78 H8 L26 52 H14 Z" fill="#15803d"/><path d="M40 18 L66 52 H54 L72 78 H40 Z" fill="#166534"/><rect x="34" y="78" width="12" height="14" rx="2" fill="#78350f"/>
        <g class="tm-luzes"><circle cx="34" cy="40" r="3" fill="#ef4444"/><circle cx="48" cy="46" r="3" fill="#facc15"/><circle cx="28" cy="62" r="3" fill="#3b82f6"/><circle cx="44" cy="66" r="3" fill="#ef4444"/><circle cx="58" cy="70" r="3" fill="#facc15"/><circle cx="20" cy="72" r="3" fill="#f472b6"/></g>
        <g class="tm-luzes b"><circle cx="40" cy="32" r="3" fill="#3b82f6"/><circle cx="30" cy="50" r="3" fill="#f472b6"/><circle cx="54" cy="58" r="3" fill="#3b82f6"/><circle cx="36" cy="72" r="3" fill="#facc15"/><circle cx="64" cy="76" r="3" fill="#ef4444"/></g></svg>`);
      el("tm-canto dir tm-noel", `<svg viewBox="0 0 120 200" width="96" height="160">
        <defs><clipPath id="tm-cl"><rect x="0" y="0" width="120" height="128"/></clipPath></defs>
        <g clip-path="url(#tm-cl)"><g class="tm-noel-corpo">
          <line x1="60" y1="-200" x2="60" y2="52" stroke="#a16207" stroke-width="2.5"/>
          <circle cx="47" cy="56" r="5" fill="#fff"/><circle cx="73" cy="56" r="5" fill="#fff"/>
          <path d="M47 58 L44 80 M73 58 L76 80" stroke="#dc2626" stroke-width="9" stroke-linecap="round"/>
          <ellipse cx="60" cy="96" rx="22" ry="24" fill="#dc2626"/><rect x="38" y="94" width="44" height="7" fill="#111827"/><rect x="55" y="93" width="10" height="9" rx="2" fill="#facc15"/>
          <path d="M57 74 V118" stroke="#fff" stroke-width="4"/>
          <circle cx="60" cy="68" r="14" fill="#fcd9b6"/><path d="M46 70 Q48 92 60 94 Q72 92 74 70 Q66 78 60 77 Q54 78 46 70 Z" fill="#fff"/>
          <circle cx="55" cy="65" r="1.8" fill="#1f2937"/><circle cx="65" cy="65" r="1.8" fill="#1f2937"/><circle cx="60" cy="70" r="2.6" fill="#f87171"/>
          <path d="M45 60 Q50 40 66 42 Q80 46 84 58 L76 60 Q72 52 66 52 Z" fill="#dc2626"/><rect x="44" y="56" width="32" height="6" rx="3" fill="#fff"/><circle cx="84" cy="59" r="4" fill="#fff"/>
        </g></g>
        <path d="M0 200 L0 168 L120 150 L120 200 Z" fill="#7f1d1d"/><path d="M0 168 L120 150" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
        <rect x="34" y="128" width="52" height="40" fill="#b45309"/><path d="M34 138 H86 M34 150 H86 M48 128 V138 M70 138 V150 M48 150 V160" stroke="#78350f" stroke-width="2"/>
        <rect x="30" y="120" width="60" height="10" rx="2" fill="#92400e"/><path d="M30 121 Q45 114 60 120 Q75 114 90 121" fill="#fff"/></svg>`);
    }
    if (d.cai) particulas(d.cai);
    // 🪧 plaquinha com o nome do tema, pendurada logo abaixo da barra de cima
    if (NOME[tema]) { const pl = el("tm-selo", `<span class="tm-fio"></span><span class="tm-fio d"></span><b>${NOME[tema][0]}<small>${NOME[tema][1]}</small></b>`);
      const pos = () => { const tb = document.querySelector("#topbar, .topbar"); pl.style.top = (tb ? Math.max(0, tb.getBoundingClientRect().bottom) : 0) + "px"; };
      pos(); window.addEventListener("resize", pos); window.addEventListener("scroll", pos, { passive: true }); setTimeout(pos, 600); setTimeout(pos, 2000); }
    if (d.esq) el("tm-canto esq", d.esq);
    if (d.dir) el("tm-canto dir", d.dir);
    // faixa de mensagem logo abaixo da barra de cima (o aluno pode fechar; volta no dia seguinte)
    if (d.faixa) {
      const chave = "pp-faixa-" + tema + "-" + md(new Date()); let fechou = false; try { fechou = localStorage.getItem(chave) === "1"; } catch (e) {}
      if (!fechou) { const f = document.createElement("div"); f.className = "tm-el tm-faixa"; f.setAttribute("role", "note");
        f.innerHTML = `<p>${d.faixa}</p><button type="button" aria-label="Fechar mensagem">✕</button>`;
        f.querySelector("button").onclick = () => { try { localStorage.setItem(chave, "1"); } catch (e) {} f.remove(); };
        const tb = document.querySelector("#topbar, .topbar"); if (tb) tb.after(f); else document.body.prepend(f); }
    }
  }
  aplicar(resolver(null));
  // escolha do professor (painel → 🎨 Tema): lida da nuvem uma vez, quando o Firebase estiver pronto
  P.aplicarTemaGlobal = g => aplicar(resolver(g));
  let tent = 0;
  // fora do portal (página inicial, sem Firebase): lê a mesma escolha pela API pública do Firestore
  function lerREST() {
    fetch("https://firestore.googleapis.com/v1/projects/portal-da-informatica/databases/(default)/documents/config/tema")
      .then(r => r.ok ? r.json() : null).then(j => { const v = j && j.fields && j.fields.modo && j.fields.modo.stringValue; P.temaGlobal = v || "auto"; P.aplicarTemaGlobal(P.temaGlobal); }).catch(() => {});
  }
  (function lerGlobal() {
    const N = P.nuvem; if (!N || !N.app) { if (typeof firebase === "undefined" && document.readyState !== "loading") return lerREST(); if (tent++ < 20) setTimeout(lerGlobal, 500); else lerREST(); return; }
    try { N.app(0).db.collection("config").doc("tema").get().then(sn => { P.temaGlobal = sn.exists ? sn.data().modo || "auto" : "auto"; P.aplicarTemaGlobal(P.temaGlobal); }).catch(() => {}); } catch (e) {}
  })();
})();
