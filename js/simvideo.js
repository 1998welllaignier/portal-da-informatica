/* ============================================================
   🎬 SIMULADOR DE EDITOR DE VÍDEO — tipo de atividade "sim_video" (22/11/2026, pedido do professor)
   Os computadores da sala não têm editor de vídeo (nem câmera, nem som). Aqui o aluno monta o vídeo
   do projeto da equipe num editor de mentira, no Windows 11, o mais parecido possível com um editor de verdade:
   importa as gravações (cada cena tem 2 tomadas: uma boa e uma com defeito), escolhe as tomadas boas,
   põe na ordem na linha do tempo, corta as sobras do começo e do fim, coloca título e música baixinha
   e exporta com um nome claro. Tudo fica salvo no progresso do aluno (nuvem): continua na outra aula.
   Os computadores não têm som: a fala gravada aparece escrita embaixo da prévia, e o som vira desenho (onda).
   Nenhum nome de programa de verdade: o aplicativo se chama só "Editor de Vídeo".
   Campos da atividade (todos opcionais): equipe ("Equipe Verde"), turma ("7º A").
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const { esc } = P.util;
  const svgURL = s => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);

  /* ---------- 🎨 os desenhos das cenas (SVG 320×180, inventados, sem pessoas reais) ---------- */
  const PELE = "#f2c9a0";
  function crianca(x, y, s, camisa, sil, extra = "") {
    const f = c => sil ? "#141414" : c;
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <rect x="-15" y="18" width="30" height="40" rx="9" fill="${f(camisa)}"/>
      <rect x="-13" y="56" width="11" height="26" rx="4" fill="${f("#2b4c7e")}"/><rect x="2" y="56" width="11" height="26" rx="4" fill="${f("#2b4c7e")}"/>
      <circle cx="0" cy="0" r="17" fill="${f(PELE)}"/>
      <path d="M-17 -3 Q-16 -20 0 -20 Q16 -20 17 -3 Q10 -12 0 -11 Q-10 -12 -17 -3Z" fill="${f("#3b2618")}"/>
      ${sil ? "" : `<circle cx="-6" cy="0" r="2.2" fill="#222"/><circle cx="6" cy="0" r="2.2" fill="#222"/><path d="M-6 8 Q0 13 6 8" stroke="#a0522d" stroke-width="2" fill="none" stroke-linecap="round"/>`}
      ${extra}</g>`;
  }
  const celVelho = (x, y) => `<rect x="${x}" y="${y}" width="12" height="20" rx="2" fill="#555" stroke="#222"/><rect x="${x + 2}" y="${y + 3}" width="8" height="9" fill="#9ccfa0"/>`;
  function base(n, modo) {
    const sil = modo === "contraluz";
    if (n === 1) return `<rect width="320" height="180" fill="${sil ? "#d9d4c8" : "#fde7c6"}"/>
        <rect x="${sil ? 70 : 220}" y="22" width="${sil ? 180 : 70}" height="${sil ? 120 : 60}" fill="${sil ? "#fffdf2" : "#bfe3ff"}" stroke="#a97c50" stroke-width="5"/>
        ${sil ? `<rect x="70" y="22" width="180" height="120" fill="#fff" opacity=".85"/>` : `<line x1="255" y1="22" x2="255" y2="82" stroke="#a97c50" stroke-width="3"/><rect x="24" y="52" width="70" height="8" fill="#a97c50"/><rect x="30" y="34" width="10" height="18" fill="#e76f51"/><rect x="44" y="38" width="10" height="14" fill="#2a9d8f"/><rect x="58" y="30" width="10" height="22" fill="#e9c46a"/>`}
        <rect y="150" width="320" height="30" fill="${sil ? "#8d8573" : "#c08a5a"}"/>
        ${crianca(160, 70, 1.05, "#3a86ff", sil, sil ? "" : `<g transform="translate(14 22)">${celVelho(0, 0)}</g>`)}`;
    if (n === 2) return `<rect width="320" height="180" fill="#9fd3f5"/><circle cx="270" cy="34" r="16" fill="#ffd166"/>
        <rect y="120" width="320" height="60" fill="#8d6e4a"/><ellipse cx="220" cy="150" rx="70" ry="14" fill="#5b4632" opacity=".7"/>
        <path d="M170 150 Q200 138 240 152 Q260 160 290 150" stroke="#2f5d2f" stroke-width="4" fill="none" opacity=".8"/>
        <rect x="190" y="78" width="54" height="64" rx="4" fill="#6b7280" stroke="#374151" stroke-width="3"/><rect x="186" y="72" width="62" height="10" rx="3" fill="#4b5563"/>
        <text x="217" y="113" font-size="9" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">LIXO</text>
        <g transform="rotate(-25 214 60)">${celVelho(208, 50)}</g><path d="M212 76 l0 -8 M218 76 l3 -7" stroke="#555" stroke-width="2"/>
        <text x="258" y="148" font-size="10" fill="#3f2a14" font-family="Arial">metais ↓</text>
        ${crianca(80, 70, 1, "#2a9d8f", false, `<rect x="14" y="20" width="26" height="7" rx="3" fill="${PELE}" transform="rotate(-15 14 20)"/>`)}`;
    if (n === 3) return `<rect width="320" height="180" fill="#f1f5f9"/><rect x="0" y="0" width="320" height="26" fill="#0f766e"/>
        <text x="160" y="18" font-size="12" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">LOJA DE ELETRÔNICOS</text>
        <rect y="150" width="320" height="30" fill="#cbd5e1"/>
        <rect x="186" y="58" width="80" height="94" rx="6" fill="#22c55e" stroke="#166534" stroke-width="3"/>
        <text x="226" y="84" font-size="20" text-anchor="middle" fill="#fff">♻</text>
        <text x="226" y="100" font-size="8.5" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">PONTO DE</text>
        <text x="226" y="110" font-size="8.5" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">COLETA</text>
        <text x="226" y="124" font-size="6.5" text-anchor="middle" fill="#ecfdf5" font-family="Arial">pilhas · celulares</text>
        <rect x="206" y="132" width="40" height="5" rx="2" fill="#14532d"/>
        ${modo === "barulho" ? `<g opacity=".95"><rect x="10" y="118" width="120" height="30" rx="12" fill="#ef4444"/><circle cx="30" cy="150" r="13" fill="#222"/><circle cx="110" cy="150" r="13" fill="#222"/>
          <text x="60" y="110" font-size="13" fill="#b91c1c" font-family="Arial" font-weight="bold">VRUUUM!!</text><path d="M-4 128 l12 0 M-4 136 l14 0" stroke="#999" stroke-width="3"/></g>` : ""}
        ${crianca(modo === "barulho" ? 150 : 130, 70, 1, "#f4a261", false, modo === "barulho" ? `<circle cx="-18" cy="0" r="6" fill="${PELE}"/><circle cx="18" cy="0" r="6" fill="${PELE}"/>` : `<g transform="translate(22 14)">${celVelho(0, 0)}</g>`)}`;
    return `<defs><linearGradient id="f4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14532d"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs>
        <rect width="320" height="180" fill="url(#f4)"/><text x="110" y="62" font-size="18" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">Obrigado!</text>
        <text x="110" y="86" font-size="10" text-anchor="middle" fill="#bbf7d0" font-family="Arial">Cuide do planeta ♻</text>
        <text x="110" y="120" font-size="8.5" text-anchor="middle" fill="#d1fae5" font-family="Arial">Roteiro, gravação e edição:</text>
        <text x="110" y="132" font-size="8.5" text-anchor="middle" fill="#d1fae5" font-family="Arial">Equipe Verde</text>
        ${crianca(240, 70, 1.05, "#e63946", false, `<rect x="14" y="2" width="8" height="24" rx="4" fill="${PELE}" transform="rotate(25 14 20)"/>`)}`;
  }
  /* fase: "c" conteúdo, "i" sobra do começo (ajeitando o celular), "f" sobra do fim (indo desligar) */
  function quadro(n, modo, fase) {
    let g = base(n, modo);
    if (fase !== "c") g = `<g transform="rotate(${fase === "i" ? -7 : 6} 160 90) translate(${fase === "i" ? -10 : 12} 6)" filter="url(#bl)">${g}</g>
        <ellipse cx="${fase === "i" ? 60 : 270}" cy="${fase === "i" ? 150 : 40}" rx="58" ry="40" fill="${PELE}" opacity=".95"/>`;
    if (modo === "escuro") g += `<rect width="320" height="180" fill="#000" opacity=".72"/>`;
    const defs = `<defs><filter id="bl"><feGaussianBlur stdDeviation="2.2"/></filter></defs>`;
    if (modo === "vertical") return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#000"/>${defs}
        <svg x="109" y="0" width="102" height="180" viewBox="110 0 102 180" preserveAspectRatio="xMidYMid slice">${g}</svg></svg>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180">${defs}<rect width="320" height="180" fill="#000"/>${g}</svg>`;
  }
  const CACHE = {};
  const img = (n, modo, fase = "c") => CACHE[n + modo + fase] || (CACHE[n + modo + fase] = svgURL(quadro(n, modo, fase)));

  /* ---------- 🎞️ as gravações (cada cena: 2 tomadas; uma boa e uma com defeito) ---------- */
  const CENAS = ["abertura", "problema", "solução", "fim"];
  const FALA = {
    1: "Você tem um desses em casa? Um celular velho, parado na gaveta?",
    2: "No lixo comum, ele solta metais que contaminam o solo e a água.",
    3: "Leve a um ponto de coleta! Muitas lojas têm caixas para pilhas e celulares.",
    4: "Cuide do planeta! Esse vídeo foi feito pela Equipe Verde. Tchau!"
  };
  const ARQS = [
    { id: "c1a", n: 1, t: 1, modo: "contraluz", dur: 15, ini: 3, fim: 2, res: "1920 × 1080", def: "Gravada contra a luz da janela: o rosto ficou escuro." },
    { id: "c1b", n: 1, t: 2, modo: "bom", dur: 15, ini: 3, fim: 2, res: "1920 × 1080" },
    { id: "c2a", n: 2, t: 1, modo: "vertical", dur: 24, ini: 4, fim: 2, res: "1080 × 1920 (vertical)", def: "Gravada com o celular em pé: no computador, ficam faixas pretas dos lados." },
    { id: "c2b", n: 2, t: 2, modo: "bom", dur: 24, ini: 4, fim: 2, res: "1920 × 1080" },
    { id: "c3a", n: 3, t: 1, modo: "bom", dur: 23, ini: 3, fim: 2, res: "1920 × 1080" },
    { id: "c3b", n: 3, t: 2, modo: "barulho", dur: 23, ini: 3, fim: 2, res: "1920 × 1080", def: "Uma moto passou bem na hora da fala: o barulho cobriu a voz." },
    { id: "c4a", n: 4, t: 1, modo: "escuro", dur: 14, ini: 2, fim: 2, res: "1920 × 1080", def: "Gravada sem luz de frente: ficou tudo escuro." },
    { id: "c4b", n: 4, t: 2, modo: "bom", dur: 14, ini: 2, fim: 2, res: "1920 × 1080" }
  ].map(f => Object.assign(f, { nome: `cena${f.n}-${CENAS[f.n - 1].replace("ç", "c").replace("ã", "a")}-tomada${f.t}.mp4`, bom: f.modo === "bom" }));
  const MUS = { id: "mus", nome: "musica-livre-violao.mp3", dur: 70, autor: "Rio Sereno", site: "Banco de Sons Livres", lic: "CC BY" };
  const arq = id => ARQS.find(f => f.id === id);
  const fmt = s => { s = Math.max(0, s); const m = Math.floor(s / 60), r = s - m * 60; return `${String(m).padStart(2, "0")}:${r.toFixed(2).padStart(5, "0")}`; };
  const fmtC = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  const num = v => String(Math.round(v * 10) / 10).replace(".", ",");

  /* onda do som (desenho): baixinha nas sobras, forte na fala, cheia de pico no barulho */
  function onda(f, a, b, w) {
    let d = "", seed = f.n * 97 + f.t * 13;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const N = Math.max(8, Math.round(w / 3));
    for (let i = 0; i < N; i++) {
      const s = a + (b - a) * i / N, fala = s >= f.ini && s <= f.dur - f.fim;
      const amp = f.modo === "barulho" && fala ? 0.75 + rnd() * 0.25 : fala ? 0.25 + rnd() * 0.6 : 0.04 + rnd() * 0.05;
      const x = (i / N * w).toFixed(1), h = (amp * 9).toFixed(1);
      d += `M${x} ${(10 - h)}V${(10 + +h).toFixed(1)}`;
    }
    return `<svg class="sv-onda" viewBox="0 0 ${w} 20" preserveAspectRatio="none"><path d="${d}" stroke="currentColor" stroke-width="1.6"/></svg>`;
  }

  /* ---------- estilo ---------- */
  if (!document.getElementById("simvideo-css")) {
    const st = document.createElement("style"); st.id = "simvideo-css";
    st.textContent = `
.sv-cartao.sw-cartao{padding:6px 14px;margin:0 0 8px;border-width:3px;box-shadow:4px 4px 0 #facc15;gap:12px}
.sv-cartao .swc-num{width:50px;height:50px;font-size:11px;border-width:3px}.sv-cartao .swc-num b{font-size:1.35rem}
.sv-cartao .swc-linha{font-size:1.02rem;gap:10px}.sv-cartao .swc-gest{zoom:.62}.sv-cartao .swc-prog{margin-top:5px}
.sv-cartao .swc-todas{margin-top:3px;font-size:.82rem}.swc-dica{margin:5px 0 0;font-size:.9rem;color:#92400e;background:#fff3c4;border-radius:6px;padding:3px 8px}
.sv-fundo{position:absolute;inset:0;background:radial-gradient(ellipse at 60% 55%,#9ec9f5 0%,#5b8fd6 35%,#24467f 70%,#132544 100%)}
.sv-fundo::after{content:"";position:absolute;left:38%;top:22%;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#e3f0ff 0%,rgba(157,197,245,.55) 45%,transparent 70%);filter:blur(4px)}
.sv-app{position:absolute;left:0;top:0;width:1000px;height:556px;background:#1b1b1f;color:#e8e8ee;display:flex;flex-direction:column;z-index:20;font-size:12px}
.sv-app.jan{left:30px;top:20px;width:940px;height:516px;border-radius:8px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.5)}
.sv-tit{height:30px;display:flex;align-items:center;background:#202024;padding-left:10px;gap:8px;flex:none;font-size:12px;color:#ddd}
.sv-tit .t{flex:1}.sv-tit button{width:44px;height:30px;border:0;background:none;color:#ddd;font-size:13px;cursor:pointer}.sv-tit button:hover{background:#3a3a40}.sv-tit button.x:hover{background:#e81123;color:#fff}
.sv-topo{height:40px;display:flex;align-items:center;gap:8px;padding:0 10px;background:#25252b;border-bottom:1px solid #34343c;flex:none}
.sv-nome{background:transparent;border:1px solid transparent;color:#fff;font:600 13px "Segoe UI",system-ui,sans-serif;padding:4px 6px;border-radius:4px;width:220px}.sv-nome:hover,.sv-nome:focus{border-color:#555;outline:none;background:#1b1b1f}
.sv-topo .esp{flex:1}.sv-ib{background:none;border:0;color:#ddd;font-size:15px;padding:5px 8px;border-radius:5px;cursor:pointer}.sv-ib:hover{background:#3a3a42}.sv-ib:disabled{opacity:.35;cursor:default;background:none}
.sv-exp{background:#7c5cff;color:#fff;border:0;border-radius:6px;padding:7px 16px;font:600 12.5px "Segoe UI",system-ui,sans-serif;cursor:pointer}.sv-exp:hover{background:#6a4ae6}
.sv-meio{flex:1;display:flex;min-height:0}
.sv-trilho{width:58px;background:#202024;display:flex;flex-direction:column;align-items:center;padding-top:6px;gap:2px;flex:none;border-right:1px solid #2e2e35}
.sv-trilho div{width:52px;padding:6px 0 5px;text-align:center;border-radius:6px;cursor:pointer;font-size:10px;color:#bbb;line-height:1.2}.sv-trilho div b{display:block;font-size:17px;font-weight:normal}
.sv-trilho div:hover{background:#2e2e36}.sv-trilho div.sel{background:#34304d;color:#fff}.sv-trilho div.off{opacity:.45;cursor:default}
.sv-painel{width:232px;background:#222227;border-right:1px solid #2e2e35;padding:10px;overflow-y:auto;flex:none;scrollbar-width:thin;scrollbar-color:#555 transparent}
.sv-painel h4{margin:0 0 8px;font-size:13px;font-weight:600;color:#fff}
.sv-imp{width:100%;background:#7c5cff;color:#fff;border:0;border-radius:6px;padding:8px;font:600 12px "Segoe UI",system-ui,sans-serif;cursor:pointer;margin-bottom:10px}.sv-imp:hover{background:#6a4ae6}
.sv-vazio{color:#999;font-size:11.5px;line-height:1.45;padding:6px 2px}
.sv-grade{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sv-m{position:relative;cursor:grab;border-radius:6px;overflow:hidden;background:#000;border:2px solid transparent}.sv-m:hover{border-color:#7c5cff}
.sv-m img{width:100%;aspect-ratio:16/9;display:block;pointer-events:none}.sv-m .d{position:absolute;right:3px;top:3px;background:rgba(0,0,0,.7);font-size:9.5px;padding:1px 4px;border-radius:3px}
.sv-m .n{display:block;font-size:9.5px;color:#ccc;padding:3px 4px;background:#222227;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sv-m .mais{position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#7c5cff;color:#fff;border:0;font-size:15px;line-height:20px;cursor:pointer;display:none}.sv-m:hover .mais{display:block}
.sv-mus{display:flex;gap:8px;align-items:center;background:#2b2b31;border-radius:8px;padding:8px;cursor:grab;margin-bottom:6px;border:2px solid transparent}.sv-mus:hover{border-color:#7c5cff}
.sv-mus .ic{width:36px;height:36px;border-radius:6px;background:linear-gradient(135deg,#f59e0b,#ef4444);display:flex;align-items:center;justify-content:center;font-size:18px}.sv-mus small{display:block;color:#aaa;font-size:10px}
.sv-mus .mais{margin-left:auto;width:24px;height:24px;border-radius:50%;background:#7c5cff;color:#fff;border:0;font-size:15px;cursor:pointer}
.sv-txtop{background:#2b2b31;border-radius:8px;padding:12px 8px;text-align:center;cursor:pointer;margin-bottom:8px;border:2px solid transparent}.sv-txtop:hover{border-color:#7c5cff}
.sv-txtop b{display:block;font-size:17px;color:#fff;font-family:Georgia,serif}.sv-txtop small{color:#aaa}
.sv-prev{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 10px 4px;min-width:0;background:#18181c}
.sv-tela{position:relative;flex:none;width:400px;height:225px;background:#000;box-shadow:0 2px 10px rgba(0,0,0,.6);overflow:hidden}
.sv-tela img{width:100%;height:100%;display:block}
.sv-tela .tit{position:absolute;left:0;right:0;top:26%;text-align:center;font:700 27px Georgia,serif;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.8);padding:0 16px}
.sv-tela .preto{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#666;font-size:12px;text-align:center;padding:20px;background:#000}
.sv-fala{width:400px;flex:none;min-height:30px;margin-top:5px;background:#26262c;border-radius:6px;padding:5px 9px;font-size:11px;color:#ddd;box-sizing:border-box;line-height:1.35}.sv-fala i{color:#999}
.sv-ctl{display:flex;align-items:center;gap:6px;margin-top:2px;width:400px;flex:none}.sv-ctl .tc{font:12px Consolas,monospace;color:#ccc;margin-left:6px}.sv-ctl .esp{flex:1}.sv-ctl .pl{font-size:18px}
.sv-prop{width:206px;background:#222227;border-left:1px solid #2e2e35;padding:10px;overflow-y:auto;flex:none;scrollbar-width:thin}
.sv-prop h4{margin:0 0 6px;font-size:12.5px;color:#fff}.sv-prop .lin{display:flex;justify-content:space-between;gap:6px;padding:4px 0;border-bottom:1px solid #2f2f36;font-size:11px;color:#bbb}.sv-prop .lin b{color:#eee;font-weight:600;text-align:right}
.sv-prop .grp{margin-top:10px;font-size:11px;color:#aaa}.sv-prop .grp>span{display:block;margin-bottom:4px;color:#ddd;font-weight:600}
.sv-step{display:flex;align-items:center;gap:4px;margin:3px 0}.sv-step button{width:24px;height:22px;border:1px solid #444;background:#2b2b31;color:#fff;border-radius:4px;cursor:pointer}.sv-step button:hover{background:#3a3a44}
.sv-step output{flex:1;text-align:center;background:#1b1b1f;border:1px solid #3a3a42;border-radius:4px;padding:2px 0;font:11.5px Consolas,monospace;color:#fff}
.sv-prop input[type=text]{width:100%;box-sizing:border-box;background:#1b1b1f;border:1px solid #444;color:#fff;border-radius:4px;padding:5px 6px;font:12px "Segoe UI",system-ui,sans-serif}
.sv-prop input[type=range]{width:100%;accent-color:#7c5cff}
.sv-aviso{margin-top:8px;background:#3b2a14;color:#fcd9a0;border-radius:6px;padding:6px 7px;font-size:10.5px;line-height:1.35}
.sv-tl{height:178px;background:#1e1e23;border-top:1px solid #34343c;display:flex;flex-direction:column;flex:none}
.sv-tlbar{height:30px;display:flex;align-items:center;gap:2px;padding:0 8px;border-bottom:1px solid #2e2e35;flex:none}.sv-tlbar .esp{flex:1}.sv-tlbar .tot{font:11.5px Consolas,monospace;color:#ccc;margin-right:8px}.sv-tlbar .tot b.ok{color:#4ade80}.sv-tlbar .tot b.mal{color:#f87171}
.sv-tlbar .sv-ib{font-size:12.5px}
.sv-tlc{flex:1;display:flex;min-height:0}
.sv-tlrot{width:64px;flex:none;padding-top:20px;border-right:1px solid #2e2e35}.sv-tlrot div{height:32px;display:flex;align-items:center;justify-content:center;font-size:10.5px;color:#aaa;gap:4px;margin-bottom:4px}
.sv-tlrot div.vid{height:44px}
.sv-tlsc{flex:1;overflow-x:auto;overflow-y:hidden;position:relative;scrollbar-width:thin;scrollbar-color:#555 transparent}
.sv-tlin{position:relative;height:100%}
.sv-regua{height:18px;position:relative;border-bottom:1px solid #2e2e35;cursor:pointer;margin-bottom:2px}.sv-regua span{position:absolute;top:2px;font:9.5px Consolas,monospace;color:#888;transform:translateX(-50%)}.sv-regua i{position:absolute;bottom:0;width:1px;height:5px;background:#555}
.sv-faixa{position:relative;height:32px;margin-bottom:4px;background:#25252b;border-radius:4px}.sv-faixa.vid{height:44px}
.sv-faixa.alvo{outline:2px dashed #7c5cff;outline-offset:-2px}
.sv-faixa .ph{position:absolute;left:8px;top:50%;transform:translateY(-50%);color:#666;font-size:10.5px;pointer-events:none;white-space:nowrap}
.sv-clip{position:absolute;top:0;bottom:0;border-radius:5px;overflow:hidden;cursor:grab;box-sizing:border-box;border:2px solid #0000}
.sv-clip.v{background:#2d3c55}.sv-clip.tx{background:#7a3f9a}.sv-clip.au{background:#1f5f5a}
.sv-clip.sel{border-color:#fff;z-index:3}.sv-clip.arr{opacity:.55;cursor:grabbing}
.sv-clip .fs{position:absolute;left:0;right:0;top:0;height:26px;background-size:auto 100%;background-repeat:repeat-x;opacity:.95}
.sv-clip .nm{position:absolute;left:4px;top:2px;font-size:9.5px;background:rgba(0,0,0,.6);padding:0 4px;border-radius:3px;white-space:nowrap;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis}
.sv-clip.v .sv-onda{position:absolute;left:0;right:0;bottom:0;height:16px;width:100%;color:#9ec3ff}.sv-clip.au .sv-onda{position:absolute;left:0;bottom:2px;height:22px;width:100%;color:#7ee0d4}
.sv-clip.tx .nm,.sv-clip.au .nm{top:50%;transform:translateY(-50%);background:none;font-size:10.5px}.sv-clip.au .nm{top:9px}
.sv-alca{position:absolute;top:0;bottom:0;width:9px;background:#fff;cursor:ew-resize;z-index:2;display:none;align-items:center;justify-content:center;color:#333;font-size:9px;font-weight:bold}
.sv-clip.sel .sv-alca{display:flex}.sv-alca.e{left:0;border-radius:3px 0 0 3px}.sv-alca.d{right:0;border-radius:0 3px 3px 0}
.sv-ins{position:absolute;top:-2px;bottom:-2px;width:3px;background:#a78bfa;border-radius:2px;z-index:6;pointer-events:none}
.sv-cab{position:absolute;top:0;bottom:0;width:2px;background:#fff;z-index:8;pointer-events:none}.sv-cab::before{content:"";position:absolute;left:-6px;top:0;border:7px solid transparent;border-top:9px solid #fff;border-bottom:0}
.sv-fant{position:absolute;z-index:999;pointer-events:none;width:110px;opacity:.85;border:2px solid #a78bfa;border-radius:6px;overflow:hidden;background:#000}.sv-fant img{width:100%;display:block}.sv-fant span{display:block;font-size:10px;color:#fff;background:#222;padding:2px 4px}
.sv-dlg{position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:300;display:flex;align-items:center;justify-content:center}
.sv-dlgw{background:#f3f3f3;color:#111;border-radius:8px;box-shadow:0 12px 40px rgba(0,0,0,.5);overflow:hidden;display:flex;flex-direction:column}
.sv-dlgw .sw-tit{background:#fff}
.sv-abrir{width:720px;height:440px}.sv-abrir .cmd{display:flex;align-items:center;gap:6px;padding:6px 10px;background:#f9f9f9;border-bottom:1px solid #e5e5e5;font-size:12px}
.sv-abrir .cmd .u{flex:1;background:#fff;border:1px solid #ddd;border-radius:4px;padding:4px 8px}
.sv-abrir .cor{flex:1;display:flex;min-height:0;background:#fff}.sv-abrir .nav{width:160px;border-right:1px solid #eee;padding:6px 0;font-size:12px}.sv-abrir .nav div{padding:6px 12px}.sv-abrir .nav div.sel{background:#e5f1fb}
.sv-abrir .grd{flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:10px;overflow:auto;align-content:start}
.sv-abrir .it{border:1px solid transparent;border-radius:4px;padding:4px;cursor:pointer;font-size:10.5px;text-align:center;word-break:break-all;user-select:none}.sv-abrir .it:hover{background:#e5f3ff}.sv-abrir .it.sel{background:#cce8ff;border-color:#99d1ff}
.sv-abrir .it img{width:100%;aspect-ratio:16/9;display:block;margin-bottom:3px;border:1px solid #ddd;background:#000}.sv-abrir .it .ai{font-size:34px;display:block;line-height:52px}
.sv-abrir .pe{display:flex;align-items:center;gap:8px;padding:8px 12px;border-top:1px solid #e5e5e5;font-size:12px;background:#f3f3f3}.sv-abrir .pe .u{flex:1;background:#fff;border:1px solid #ccc;padding:4px 8px;border-radius:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sv-bt{border:1px solid #d0d0d0;background:#fbfbfb;border-radius:4px;padding:6px 18px;font:12px "Segoe UI",system-ui,sans-serif;cursor:pointer}.sv-bt:hover{background:#f0f0f0}.sv-bt.pri{background:#0067c0;color:#fff;border-color:#0067c0}.sv-bt.pri:hover{background:#1975c5}.sv-bt:disabled{opacity:.5;cursor:default}
.sv-expd{width:520px;background:#26262c;color:#eee;border-radius:10px;padding:18px 20px}.sv-expd h3{margin:0 0 4px;font-size:17px}.sv-expd p{margin:0 0 12px;color:#aaa;font-size:12px}
.sv-expd label{display:block;font-size:11.5px;color:#ccc;margin:8px 0 4px}.sv-expd input{width:100%;box-sizing:border-box;background:#1b1b1f;border:1px solid #555;color:#fff;border-radius:5px;padding:7px 8px;font:13px "Segoe UI",system-ui,sans-serif}
.sv-q{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:4px}.sv-q div{background:#1b1b1f;border:2px solid #3a3a42;border-radius:8px;padding:9px;cursor:pointer;font-size:11px;color:#aaa}.sv-q div b{display:block;color:#fff;font-size:15px}.sv-q div.sel{border-color:#7c5cff;background:#2a2540}
.sv-q div em{display:inline-block;margin-top:3px;background:#7c5cff;color:#fff;font-style:normal;font-size:9.5px;border-radius:3px;padding:0 4px}
.sv-expd .bts{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}.sv-expd .sv-bt{background:#33333b;color:#eee;border-color:#555}.sv-expd .sv-bt.pri{background:#7c5cff;border-color:#7c5cff;color:#fff}
.sv-barra{height:10px;background:#1b1b1f;border-radius:5px;overflow:hidden;margin:14px 0 6px}.sv-barra i{display:block;height:100%;background:linear-gradient(90deg,#7c5cff,#a78bfa);border-radius:5px;transition:width .2s}
.sv-pronto{text-align:center}.sv-pronto .ok{font-size:40px}.sv-pronto img{width:300px;border-radius:6px;margin:8px auto;display:block}
.sv-toast{position:absolute;left:50%;top:44px;transform:translateX(-50%);z-index:500;background:#fffbeb;color:#5b4500;border:2px solid #f59e0b;border-radius:10px;padding:9px 14px;font-size:13px;max-width:620px;box-shadow:0 6px 20px rgba(0,0,0,.4);line-height:1.4}
.sv-err{background:#4c1d1d;color:#fecaca;border-radius:6px;padding:7px 9px;font-size:11.5px;margin-top:10px;line-height:1.4}.sv-err b{color:#fff}
.sv-menu{position:absolute;z-index:400;background:#2b2b31;border:1px solid #444;border-radius:8px;padding:4px;min-width:170px;box-shadow:0 6px 20px rgba(0,0,0,.5)}.sv-menu div{padding:6px 10px;border-radius:4px;cursor:pointer;color:#eee}.sv-menu div:hover{background:#3d3d46}.sv-menu div.off{color:#777;cursor:default}.sv-menu div.off:hover{background:none}`;
    document.head.appendChild(st);
  }

  T.sim_video = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      const equipe = at.equipe || "Equipe Verde";
      if (!st.v) Object.assign(st, { v: 1, g: {}, imp: [], tl: [], tx: null, mu: null, exp: null, nome: "Projeto sem título", aberto: false });
      const ui = { app: st.aberto, max: true, aba: "midia", sel: null, t: 0, play: false, dlg: null, dsel: [], hist: [], fut: [], drag: null, zoom: 1, start: false, wu: P.winui ? P.winui.novoEstado() : {}, menu: null, expQ: "1080", expNome: "", prog: 0, todas: false, dica: "" };
      const salvar = () => ctx.salvar();
      let tt = 0; const aviso = m => { ui.toast = m; clearTimeout(tt); tt = setTimeout(() => { ui.toast = ""; if (c.isConnected) draw(); }, 7000); draw(); };

      /* ---------- contas ---------- */
      const durClip = k => k.b - k.a;
      const total = () => st.tl.reduce((s, k) => s + durClip(k), 0);
      const inicioDe = i => st.tl.slice(0, i).reduce((s, k) => s + durClip(k), 0);
      const fimTotal = () => Math.max(total(), st.tx ? st.tx.t0 + st.tx.d : 0);
      function clipEm(t) { let s = 0; for (let i = 0; i < st.tl.length; i++) { const d = durClip(st.tl[i]); if (t < s + d || i === st.tl.length - 1 && t <= s + d) return { i, k: st.tl[i], loc: st.tl[i].a + (t - s) }; s += d; } return null; }
      const ordemOk = () => st.tl.length === 4 && st.tl.every((k, i) => arq(k.f).n === i + 1);
      const tomadasOk = () => ordemOk() && st.tl.every(k => arq(k.f).bom);
      const corteDe = k => { const f = arq(k.f); return { sobraI: k.a < f.ini - 0.25, sobraF: k.b > f.dur - f.fim + 0.25, comeuI: k.a > f.ini + 1.25, comeuF: k.b < f.dur - f.fim - 1.25 }; };
      const corteOk = () => tomadasOk() && st.tl.every(k => { const x = corteDe(k); return !x.sobraI && !x.sobraF && !x.comeuI && !x.comeuF; }) && total() <= 60;
      const tituloOk = () => !!(st.tx && st.tx.txt.trim().length >= 3 && st.tx.t0 <= 1);
      const musOk = () => !!(st.mu && st.mu.vol > 0 && st.mu.vol <= 30);
      const nomeOk = n => /^20\d\d-[0-9a-z]+(-[0-9a-z]+){2,}\.mp4$/i.test(n) && !/final|sem-?titulo|video\d|aaa/i.test(n);
      const metas = () => [
        ["abrir", "Abra o 🎬 Editor de Vídeo (clique duas vezes no ícone da área de trabalho) e crie um vídeo novo.", st.aberto],
        ["importar", "Importe as gravações: Sua mídia › ⬆ Importar mídia › pasta Gravações da equipe (selecione todas).", ARQS.every(f => st.imp.includes(f.id))],
        ["tomadas", "Arraste para a linha do tempo só a tomada boa de cada cena (rosto claro, celular deitado, sem barulho), na ordem do roteiro: abertura, problema, solução, fim.", tomadasOk()],
        ["cortar", "Corte as sobras do começo e do fim de cada cena (a parte em que o narrador ainda se ajeita): o vídeo tem de ficar com até 1 minuto.", corteOk()],
        ["titulo", "Coloque um título no começo do vídeo: 🅃 Texto › Título (escreva o nome do vídeo).", tituloOk()],
        ["musica", "Coloque a música livre na faixa de áudio e deixe o volume baixinho (até 30%), para não cobrir a voz.", musOk()],
        ["exportar", "Exporte em 1080p com um nome claro (ano-turma-equipe-tema), por exemplo: 2027-7A-equipe-verde-lixo-eletronico.mp4", !!(st.exp && st.exp.ok)]
      ];
      const terminou = () => metas().every(m => m[2]);
      function fim() { if (terminou() && !st.status) ctx.concluir("certo", `Vídeo exportado: <strong>${esc(st.exp.nome)}</strong> (${fmtC(st.exp.dur)}). Você escolheu as tomadas boas, cortou as sobras, colocou título e música baixinha e exportou com um nome claro. 🎬`); }

      /* ---------- desfazer ---------- */
      const snap = () => JSON.stringify({ tl: st.tl, tx: st.tx, mu: st.mu });
      function mudar(fn) { ui.hist.push(snap()); if (ui.hist.length > 40) ui.hist.shift(); ui.fut = []; fn(); st.exp = null; salvar(); }
      function voltar(de, para) { if (!de.length) return; para.push(snap()); const o = JSON.parse(de.pop()); st.tl = o.tl; st.tx = o.tx; st.mu = o.mu; ui.sel = null; salvar(); draw(); }

      /* ---------- pedaços da tela ---------- */
      function htmlDesk() {
        const WU = P.winui, LG = WU ? WU.logo("11") : "⊞";
        const ic = (dbl, e, n) => `<div class="sw-ic" data-dbl="${dbl}"><span class="e">${e}</span>${n}</div>`;
        const bar = `<div class="sw-bar">${WU ? WU.widget11() : ""}<button class="sw-ini" data-a="start" title="Iniciar">${LG}</button><button data-a="start" title="Pesquisar">🔍</button><button title="Visão de Tarefas" class="wu-tv">⧉</button><button title="Explorador de Arquivos">📁</button><button title="Google Chrome">🌐</button><button class="${ui.app ? "ativo" : ""}" data-a="app" title="Editor de Vídeo">🎬</button>${WU ? WU.bandeja("11", "14:20", "22/11/2027") : ""}</div>`;
        const start = ui.start && WU ? WU.iniciar("11", { estado: ui.wu, fixados: ["video", "exp", "chrome", "fotos", "cfg", "calc", "notas", "paint", "camera", "store", "musica", "alarmes"], attr: id => id === "video" ? 'data-a="app"' : "" }) : "";
        return `<div class="sv-fundo" data-a="desk"></div><div class="sw-icons">${ic("lixo", "🗑️", "Lixeira")}${ic("app", "🎬", "Editor de Vídeo")}${ic("exp", "📁", "Explorador de Arquivos")}</div>${ui.app ? htmlApp() : ""}${start}${bar}`;
      }
      function htmlApp() {
        const cab = `<div class="sv-tit"><span>🎬</span><span class="t">${st.aberto ? esc(st.nome) + " – " : ""}Editor de Vídeo</span><button data-a="min" title="Minimizar">—</button><button data-a="maxi" title="${ui.max ? "Restaurar" : "Maximizar"}">${ui.max ? "❐" : "☐"}</button><button class="x" data-a="fechar" title="Fechar">✕</button></div>`;
        if (!st.aberto) return `<div class="sv-app ${ui.max ? "" : "jan"}">${cab}<div style="flex:1;padding:30px 40px;overflow:auto">
            <h2 style="margin:0 0 4px;font-size:24px;font-weight:600">Olá! 👋</h2><p style="color:#aaa;margin:0 0 22px">O que vamos criar hoje?</p>
            <div style="display:flex;gap:16px"><div data-a="novo" style="width:200px;height:120px;border-radius:10px;background:linear-gradient(135deg,#7c5cff,#c084fc);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;font-size:14px;font-weight:600"><span style="font-size:30px">＋</span>Criar um vídeo novo</div>
            <div style="width:200px;height:120px;border-radius:10px;background:#2b2b31;display:flex;align-items:center;justify-content:center;color:#888;cursor:default">📂 Abrir projeto</div></div>
            <h3 style="margin:28px 0 8px;font-size:14px">Seus vídeos</h3><p style="color:#888">Você ainda não tem nenhum vídeo.</p></div></div>`;
        const trilho = [["midia", "📁", "Sua mídia"], ["musica", "🎵", "Música e sons"], ["texto", "🅃", "Texto"], ["x", "✨", "Transições"], ["x", "🎨", "Filtros"]]
          .map(([k, e, n]) => `<div class="${k === "x" ? "off" : ui.aba === k ? "sel" : ""}" ${k === "x" ? 'title="(não usado neste treino)"' : `data-a="aba:${k}"`}><b>${e}</b>${n}</div>`).join("");
        return `<div class="sv-app ${ui.max ? "" : "jan"}">${cab}
          <div class="sv-topo"><button class="sv-ib" title="Menu">☰</button><input class="sv-nome" id="sv-nome" value="${esc(st.nome)}" aria-label="Nome do projeto" maxlength="40">
            <span class="esp"></span><button class="sv-ib" data-a="desf" title="Desfazer" ${ui.hist.length ? "" : "disabled"}>↶</button><button class="sv-ib" data-a="ref" title="Refazer" ${ui.fut.length ? "" : "disabled"}>↷</button>
            <button class="sv-exp" data-a="exportar">⬆ Exportar</button></div>
          <div class="sv-meio"><div class="sv-trilho">${trilho}</div><div class="sv-painel">${htmlPainel()}</div>${htmlPrev()}<div class="sv-prop">${htmlProp()}</div></div>
          ${htmlTl()}${htmlDlg()}</div>`;
      }
      function htmlPainel() {
        if (ui.aba === "musica") return `<h4>Música e sons</h4><p class="sv-vazio">Músicas livres para usar, com crédito.</p>
          <div class="sv-mus" data-arr="mus"><span class="ic">🎸</span><span>${esc(MUS.nome)}<small>${fmtC(MUS.dur)} · ${MUS.lic}</small></span><button class="mais" data-a="add:mus" title="Adicionar à linha do tempo">+</button></div>
          <p class="sv-vazio">Arraste para a faixa 🎵 Áudio, ou clique no <b>+</b>. Os computadores da sala não têm som: o som aparece como onda.</p>`;
        if (ui.aba === "texto") return `<h4>Texto</h4><div class="sv-txtop" data-a="add:tx"><b>Título</b><small>Clique para pôr no começo do vídeo</small></div>
          <div class="sv-txtop" style="opacity:.45;cursor:default" title="(não usado neste treino)"><b style="font-family:inherit;font-size:13px">Legenda simples</b><small>texto pequeno embaixo</small></div>`;
        const lista = ARQS.filter(f => st.imp.includes(f.id));
        return `<h4>Sua mídia</h4><button class="sv-imp" data-a="importar">⬆ Importar mídia</button>
          ${lista.length ? `<div class="sv-grade">${lista.map(f => `<div class="sv-m" data-arr="${f.id}" title="${esc(f.nome)}"><img src="${img(f.n, f.modo)}" alt=""><span class="d">${fmtC(f.dur)}</span><button class="mais" data-a="add:${f.id}" title="Adicionar à linha do tempo">+</button><span class="n">${esc(f.nome)}</span></div>`).join("")}</div>
            <p class="sv-vazio">Arraste para a faixa 🎞️ Vídeo, ou clique no <b>+</b>. Clique numa gravação na linha do tempo para ver as informações dela →</p>`
          : `<p class="sv-vazio">Nenhuma mídia ainda. Clique em <b>Importar mídia</b> e escolha os vídeos que a equipe gravou.</p>`}`;
      }
      function htmlQuadro(t) {
        const r = clipEm(t);
        if (!r) return { tela: `<div class="preto">Arraste os vídeos para a linha do tempo.<br>A prévia aparece aqui.</div>`, fala: `<i>A fala gravada aparece aqui (os computadores não têm som).</i>` };
        const f = arq(r.k.f), fase = r.loc < f.ini ? "i" : r.loc > f.dur - f.fim ? "f" : "c";
        const titulo = st.tx && st.tx.txt.trim() && t >= st.tx.t0 && t <= st.tx.t0 + st.tx.d ? `<div class="tit">${esc(st.tx.txt)}</div>` : "";
        const fala = fase === "i" ? `🔇 <i>(silêncio… o narrador ainda se ajeita e olha para o celular)</i>` : fase === "f" ? `🔇 <i>(silêncio… o narrador vai desligar a gravação)</i>`
          : f.modo === "barulho" ? `🔊 <b>[VRUUUM… barulho de moto]</b> <i>…ponto de… …lojas têm…</i>` : `🔊 “${esc(FALA[f.n])}”`;
        return { tela: `<img src="${img(f.n, f.modo, fase)}" alt="Cena ${f.n}">${titulo}`, fala };
      }
      function htmlPrev() {
        const q = htmlQuadro(ui.t);
        return `<div class="sv-prev"><div class="sv-tela" id="sv-tela">${q.tela}</div><div class="sv-fala" id="sv-fala">${q.fala}</div>
          <div class="sv-ctl"><button class="sv-ib" data-a="ini" title="Ir para o começo">⏮</button><button class="sv-ib pl" data-a="play" title="Reproduzir">${ui.play ? "⏸" : "▶"}</button><button class="sv-ib" data-a="fimv" title="Ir para o fim">⏭</button>
          <span class="tc" id="sv-tc">${fmt(ui.t)} / ${fmt(fimTotal())}</span><span class="esp"></span><span style="color:#888;font-size:11px">16:9</span><button class="sv-ib" title="Tela cheia (não usado neste treino)">⛶</button></div></div>`;
      }
      function htmlProp() {
        const s = ui.sel;
        if (s == null) return `<h4>Propriedades</h4><p class="sv-vazio">Clique num item da linha do tempo para ver e mudar as propriedades dele.</p>`;
        if (s === "tx" && st.tx) return `<h4>🅃 Título</h4><div class="grp"><span>Texto</span><input type="text" id="sv-txt" value="${esc(st.tx.txt)}" maxlength="40" placeholder="Escreva o título"></div>
          <div class="lin">Começa em<b>${num(st.tx.t0)} s</b></div><div class="lin">Duração<b>${num(st.tx.d)} s</b></div><div class="lin">Fonte<b>Georgia</b></div><div class="lin">Cor<b>⬜ Branco</b></div>
          <div class="grp"><span>Posição na linha do tempo</span><div class="sv-step"><button data-a="txm:-0.5">−</button><output>${num(st.tx.t0)} s</output><button data-a="txm:0.5">+</button></div></div>`;
        if (s === "mu" && st.mu) return `<h4>🎵 Áudio</h4><div class="lin">Arquivo<b>${esc(MUS.nome)}</b></div><div class="lin">Autor<b>${esc(MUS.autor)}</b></div><div class="lin">Site<b>${esc(MUS.site)}</b></div><div class="lin">Licença<b>${MUS.lic}</b></div>
          <div class="grp"><span>🔊 Volume: <b id="sv-volv">${st.mu.vol}%</b></span><input type="range" id="sv-vol" min="0" max="100" step="5" value="${st.mu.vol}" aria-label="Volume da música"></div>
          ${st.mu.vol > 30 ? `<p class="sv-aviso">⚠️ Música de fundo alta cobre a voz do narrador. Deixe baixinha.</p>` : ""}`;
        const k = st.tl[s]; if (!k) return "";
        const f = arq(k.f), x = corteDe(k);
        return `<h4>🎞️ ${esc(f.nome)}</h4><div class="lin">Resolução<b>${f.res}</b></div><div class="lin">Duração original<b>${num(f.dur)} s</b></div><div class="lin">Na linha do tempo<b>${num(durClip(k))} s</b></div>
          <div class="grp"><span>✂️ Cortar o começo (até)</span><div class="sv-step"><button data-a="cut:a:-0.5">−</button><output>${num(k.a)} s</output><button data-a="cut:a:0.5">+</button></div></div>
          <div class="grp"><span>✂️ Cortar o fim (a partir de)</span><div class="sv-step"><button data-a="cut:b:-0.5">−</button><output>${num(k.b)} s</output><button data-a="cut:b:0.5">+</button></div></div>
          <p class="sv-vazio" style="margin-top:6px">Dica: também dá para cortar puxando as alças brancas ‹ › nas pontas do vídeo, na linha do tempo. Use ▶ ou clique na régua para ver onde começa a fala.</p>
          ${x.comeuI || x.comeuF ? `<p class="sv-aviso">⚠️ Você cortou um pedaço da fala. Volte um pouco o corte.</p>` : ""}`;
      }
      const pps = () => 11 * ui.zoom * Math.max(1, 80 / Math.max(80, total() + 12));
      function htmlTl() {
        const k = pps(), larg = Math.max(860, (Math.max(total(), MUS.dur, 80) + 8) * k);
        const tot = total(), ok = tot > 0 && tot <= 60;
        let reg = ""; for (let s = 0; s * k < larg; s += 5) reg += `<i style="left:${s * k}px"></i>${s % 10 === 0 ? `<span style="left:${s * k + (s ? 0 : 10)}px">${fmtC(s)}</span>` : ""}`;
        const vids = st.tl.map((c, i) => { const f = arq(c.f), x = inicioDe(i) * k, w = durClip(c) * k;
          return `<div class="sv-clip v ${ui.sel === i ? "sel" : ""}" data-clip="${i}" style="left:${x}px;width:${w}px"><div class="fs" style="background-image:url('${img(f.n, f.modo)}');background-position:${-c.a * k}px 0"></div>${onda(f, c.a, c.b, Math.max(10, w))}<span class="nm">${esc(f.nome)}</span>
            <span class="sv-alca e" data-alca="${i}:a">‹</span><span class="sv-alca d" data-alca="${i}:b">›</span></div>`; }).join("");
        const tx = st.tx ? `<div class="sv-clip tx ${ui.sel === "tx" ? "sel" : ""}" data-clip="tx" style="left:${st.tx.t0 * k}px;width:${st.tx.d * k}px"><span class="nm">🅃 ${esc(st.tx.txt || "Título")}</span></div>` : `<span class="ph">🅃 Texto: escolha 🅃 Texto › Título</span>`;
        const mu = st.mu ? `<div class="sv-clip au ${ui.sel === "mu" ? "sel" : ""}" data-clip="mu" style="left:0;width:${Math.min(MUS.dur, Math.max(tot, 1)) * k}px">${onda({ n: 9, t: 9, ini: 0, fim: 0, dur: 99, modo: "bom" }, 0, 60, 400)}<span class="nm">🎵 ${esc(MUS.nome)} · 🔊 ${st.mu.vol}%</span></div>` : `<span class="ph">🎵 Áudio: arraste a música aqui</span>`;
        return `<div class="sv-tl"><div class="sv-tlbar"><button class="sv-ib" data-a="desf" title="Desfazer" ${ui.hist.length ? "" : "disabled"}>↶</button><button class="sv-ib" data-a="ref" title="Refazer" ${ui.fut.length ? "" : "disabled"}>↷</button>
            <button class="sv-ib" data-a="dividir" title="Dividir no ponto da agulha" ${typeof ui.sel === "number" ? "" : "disabled"}>✂ Dividir</button><button class="sv-ib" data-a="excluir" title="Excluir o item selecionado" ${ui.sel == null ? "disabled" : ""}>🗑 Excluir</button>
            <button class="sv-ib" data-a="esq" title="Mover para a esquerda" ${typeof ui.sel === "number" && ui.sel > 0 ? "" : "disabled"}>◀</button><button class="sv-ib" data-a="dir" title="Mover para a direita" ${typeof ui.sel === "number" && ui.sel < st.tl.length - 1 ? "" : "disabled"}>▶</button>
            <span class="esp"></span><span class="tot">Duração do vídeo: <b class="${tot ? ok ? "ok" : "mal" : ""}">${fmtC(tot)}</b>${tot > 60 ? " (passou de 1 min!)" : ""}</span>
            <button class="sv-ib" data-a="zoom:-" title="Diminuir zoom">🔍−</button><button class="sv-ib" data-a="zoom:+" title="Aumentar zoom">🔍+</button></div>
          <div class="sv-tlc"><div class="sv-tlrot"><div>🅃 Texto</div><div class="vid">🎞️ Vídeo</div><div>🎵 Áudio</div></div>
          <div class="sv-tlsc" id="sv-tlsc"><div class="sv-tlin" style="width:${larg}px"><div class="sv-regua" data-regua="1">${reg}</div>
            <div class="sv-faixa" data-faixa="tx">${tx}</div><div class="sv-faixa vid" data-faixa="v">${vids || `<span class="ph">🎞️ Vídeo: arraste as gravações aqui, na ordem do roteiro</span>`}</div><div class="sv-faixa" data-faixa="au">${mu}</div>
            <div class="sv-cab" id="sv-cab" style="left:${ui.t * k}px"></div></div></div></div></div>`;
      }
      function htmlDlg() {
        const d = ui.dlg; if (!d) return "";
        if (d === "abrir") return `<div class="sv-dlg"><div class="sv-dlgw sv-abrir"><div class="sw-tit"><span class="t">Abrir</span><button class="x" data-a="dlgx" title="Fechar">✕</button></div>
          <div class="cmd">← → ↑ <span class="u">💻 › Vídeos › Gravações da equipe</span><span>🔍 Pesquisar</span></div>
          <div class="cor"><div class="nav"><div>🏠 Início</div><div>🖥️ Área de Trabalho</div><div>⬇️ Downloads</div><div>📄 Documentos</div><div>🖼️ Imagens</div><div class="sel">🎬 Vídeos</div><div style="padding-left:24px" class="sel">📁 Gravações da equipe</div></div>
          <div class="grd">${ARQS.map(f => `<div class="it ${ui.dsel.includes(f.id) ? "sel" : ""}" data-sel="${f.id}" data-dbl="imp1:${f.id}"><img src="${img(f.n, f.modo)}" alt="">${esc(f.nome)}</div>`).join("")}<div class="it" style="opacity:.6;cursor:default"><span class="ai">📄</span>roteiro-equipe-verde.docx</div></div></div>
          <div class="pe">Nome: <span class="u">${ui.dsel.length > 1 ? ui.dsel.map(id => `"${arq(id).nome}"`).join(" ") : ui.dsel.length ? arq(ui.dsel[0]).nome : ""}</span><span>Arquivos de vídeo ▾</span></div>
          <div class="pe" style="justify-content:space-between;border:0"><small style="color:#666">Dica: <b>Ctrl + A</b> seleciona todos; com <b>Ctrl</b> apertado, clique em vários.</small><span><button class="sv-bt pri" data-a="dlgok" ${ui.dsel.length ? "" : "disabled"}>Abrir</button> <button class="sv-bt" data-a="dlgx">Cancelar</button></span></div></div></div>`;
        if (d === "exp") return `<div class="sv-dlg"><div class="sv-expd"><h3>⬆ Exportar o vídeo</h3><p>O vídeo pronto vai virar um arquivo .mp4 na pasta Vídeos.</p>
          <label for="sv-en">Nome do arquivo</label><input id="sv-en" value="${esc(ui.expNome)}" maxlength="70" autocomplete="off">
          <label>Qualidade</label><div class="sv-q">${[["480", "480p", "Menor, fica borrado no projetor"], ["720", "720p", "Boa"], ["1080", "1080p", "Alta definição"]].map(([v, b, t]) => `<div class="${ui.expQ === v ? "sel" : ""}" data-a="q:${v}"><b>${b}</b>${t}${v === "1080" ? "<br><em>Recomendado</em>" : ""}</div>`).join("")}</div>
          <p style="margin-top:10px">Duração: <b style="color:#fff">${fmtC(total())}</b> · Tamanho aproximado: <b style="color:#fff">${Math.round(total() * { 480: 0.3, 720: 0.6, 1080: 1.1 }[ui.expQ])} MB</b></p>
          ${ui.expErro ? `<p class="sv-err">✖ ${ui.expErro}</p>` : ""}<div class="bts"><button class="sv-bt" data-a="dlgx">Cancelar</button><button class="sv-bt pri" data-a="expok">Exportar</button></div></div></div>`;
        if (d === "prog") return `<div class="sv-dlg"><div class="sv-expd"><h3>Exportando o vídeo…</h3><p>${esc(ui.expNome)} · ${ui.expQ}p</p><div class="sv-barra"><i style="width:${ui.prog}%"></i></div><p>${ui.prog}% · Não feche o editor</p></div></div>`;
        if (d === "pronto") return `<div class="sv-dlg"><div class="sv-expd sv-pronto"><div class="ok">✅</div><h3>Seu vídeo está pronto!</h3><p>Salvo em <b style="color:#fff">Vídeos › ${esc(st.exp.nome)}</b> · ${fmtC(st.exp.dur)} · ${st.exp.q}p</p>
          <img src="${img(1, "bom")}" alt=""><div class="bts" style="justify-content:center"><button class="sv-bt" data-a="dlgx">Fechar</button><button class="sv-bt pri" data-a="assistir">▶ Assistir</button></div></div></div>`;
        return "";
      }

      /* ---------- 🃏 cartão da missão (igual aos outros simuladores) ---------- */
      function cartao(ms, dg) {
        const i = ms.findIndex(m => !m[2]), feito = i < 0, t = feito ? "Você cumpriu todas as metas! 🎉" : ms[i][1];
        const g = !feito && P.gesto && P.gesto.deTexto(t);
        return `<div class="sw-cartao sv-cartao"><div class="swc-num">${feito ? "<b>🏆</b>" : `<b>${i + 1}</b>de ${ms.length}`}</div>
          <div class="swc-meio"><div class="swc-linha">${g ? `<span class="swc-gest">${P.gesto(g[0], g[1])}</span>` : ""}<span class="swc-t">${t}</span></div>
          <div class="swc-prog">${ms.map((m, j) => `<i class="${m[2] ? "ok" : j === i ? "at" : ""}"></i>`).join("")}</div>
          ${dg ? `<p class="swc-dica">💡 ${dg}</p>` : ""}<details class="swc-todas"><summary>📋 ver todas as metas</summary><ul class="sw-check">${ms.map((m, j) => `<li class="${m[2] ? "ok" : ""}">${m[2] ? "✅" : "⬜"} <b>${j + 1}.</b> ${m[1]}</li>`).join("")}</ul></details></div></div>`;
      }
      /* dica automática: o que está errado na montagem agora */
      function diagnostico() {
        if (!st.aberto || st.tl.length < 4) return "";
        if (!ordemOk()) { const ns = st.tl.map(k => arq(k.f).n); return st.tl.length > 4 && new Set(ns).size < ns.length ? "Tem cena repetida na linha do tempo: deixe só <b>uma tomada</b> de cada cena (exclua a outra 🗑)." : "A ordem do roteiro é: <b>1 abertura → 2 problema → 3 solução → 4 fim</b>. Arraste os vídeos (ou use ◀ ▶) até ficarem na ordem."; }
        const ruim = st.tl.map(k => arq(k.f)).find(f => !f.bom);
        if (ruim) return `Assista à cena ${ruim.n} (${esc(ruim.nome)}): ${ruim.def} Troque pela <b>outra tomada</b> da mesma cena.`;
        if (!corteOk()) { const i = st.tl.findIndex(k => { const x = corteDe(k); return x.sobraI || x.sobraF; }); if (i >= 0) return `Na cena ${i + 1}, ainda tem sobra (🔇 silêncio, o narrador se ajeitando). Selecione o vídeo e corte o começo e o fim até onde a fala começa e termina.`;
          const j = st.tl.findIndex(k => { const x = corteDe(k); return x.comeuI || x.comeuF; }); if (j >= 0) return `Na cena ${j + 1}, o corte comeu um pedaço da fala. Volte um pouco o corte.`; }
        return "";
      }

      /* ---------- desenho ---------- */
      function draw() {
        const ms = metas(), dg = diagnostico();
        const sc = c.querySelector("#sv-tlsc"), scl = sc ? sc.scrollLeft : 0, foco = document.activeElement && document.activeElement.id;
        c.innerHTML = `<div class="sw sw11">${cartao(ms, dg)}
          <div class="sw-moldura"><div class="sw-tela">${htmlDesk()}${ui.menu ? htmlMenu() : ""}${ui.toast ? `<div class="sv-toast" role="status">💡 ${ui.toast}</div>` : ""}</div></div>
          <div class="sw-acoes"><button class="btn btn-link" data-r="reset">↺ Recomeçar do zero</button>${st.exp && st.exp.ok ? `<button class="btn btn-sec" data-r="ver">▶ Assistir ao meu vídeo</button>` : ""}</div></div>`;
        { const d = c.querySelector(".swc-todas"); if (d) { d.open = !!ui.todas; d.ontoggle = () => { ui.todas = d.open; }; } }
        const mold = c.querySelector(".sw-moldura"), tela = c.querySelector(".sw-tela");
        /* 📐 o editor inteiro (com a linha do tempo) tem de caber na tela, inclusive em monitor 1366 × 768 */
        const ajusta = () => { const atv = c.closest(".atv"), cheia = atv && atv.classList.contains("simc-foco");
          let k = mold.parentElement.clientWidth / 1000; const card = c.querySelector(".sv-cartao");
          k = Math.min(k, (innerHeight - (cheia ? 0 : 80) - (card ? card.offsetHeight : 90) - 40) / 600);
          if (cheia) { const cab = atv.querySelector(".atv-cab"); k = Math.min(k, (innerHeight - (cab ? cab.offsetHeight : 50) - (card ? card.offsetHeight : 90) - 30) / 600);
            if (card) requestAnimationFrame(() => { const d = card.getBoundingClientRect().top - atv.getBoundingClientRect().top - (cab ? cab.offsetHeight : 50) - 4; if (Math.abs(d) > 2) atv.scrollTop += d; }); }
          k = Math.max(0.45, k); mold.style.width = (1000 * k) + "px"; mold.style.margin = "0 auto"; tela.style.transform = `scale(${k})`; mold.style.height = (600 * k) + "px"; };
        ajusta(); if (!c._rz) { c._rz = () => { const m = c.querySelector(".sw-moldura"); if (m && c.isConnected) draw(); }; addEventListener("resize", () => { clearTimeout(c._rzt); c._rzt = setTimeout(c._rz, 120); }); } if (window.ResizeObserver) { if (c._ro) c._ro.disconnect(); c._ro = new ResizeObserver(ajusta); c._ro.observe(mold.parentElement); }
        if (P.winui) P.winui.ligar(c, ui.wu, draw);
        const sc2 = c.querySelector("#sv-tlsc"); if (sc2) sc2.scrollLeft = scl;
        const nm = c.querySelector("#sv-nome"); if (nm) { nm.onchange = () => { st.nome = nm.value.trim() || "Projeto sem título"; salvar(); draw(); }; nm.onkeydown = e => { if (e.key === "Enter") nm.blur(); }; }
        const tx = c.querySelector("#sv-txt"); if (tx) { tx.oninput = () => { if (!st.tx) return; st.tx.txt = tx.value; salvar(); atualizaPrev(); const lb = c.querySelector('[data-clip="tx"] .nm'); if (lb) lb.textContent = "🅃 " + (tx.value || "Título"); }; tx.onchange = () => { st.exp = null; salvar(); draw(); }; if (foco === "sv-txt") { tx.focus(); tx.setSelectionRange(tx.value.length, tx.value.length); } }
        const vol = c.querySelector("#sv-vol"); if (vol) { vol.oninput = () => { st.mu.vol = +vol.value; c.querySelector("#sv-volv").textContent = vol.value + "%"; }; vol.onchange = () => { st.exp = null; salvar(); draw(); fim(); }; }
        const en = c.querySelector("#sv-en"); if (en) { en.oninput = () => { ui.expNome = en.value; }; if (foco === "sv-en" || ui.dlg === "exp") { en.focus(); } }
      }
      function htmlMenu() {
        const m = ui.menu; if (!m) return "";
        const it = m.tipo === "clip" ? [["✂ Dividir", "dividir"], ["🗑 Excluir", "excluir"], ["◀ Mover para a esquerda", "esq"], ["▶ Mover para a direita", "dir"]] : [["🗑 Excluir", "excluir"]];
        return `<div class="sv-menu" style="left:${m.x}px;top:${m.y}px">${it.map(([t, a]) => `<div data-a="${a}">${t}</div>`).join("")}</div>`;
      }
      function atualizaPrev() {
        const q = htmlQuadro(ui.t), tl = c.querySelector("#sv-tela"), fl = c.querySelector("#sv-fala"), tc = c.querySelector("#sv-tc"), cb = c.querySelector("#sv-cab");
        if (tl) tl.innerHTML = q.tela; if (fl) fl.innerHTML = q.fala; if (tc) tc.textContent = `${fmt(ui.t)} / ${fmt(fimTotal())}`; if (cb) cb.style.left = ui.t * pps() + "px";
      }
      let raf = 0, ult = 0;
      function tocar(on) {
        ui.play = on; cancelAnimationFrame(raf);
        const b = c.querySelector('[data-a="play"]'); if (b) b.textContent = on ? "⏸" : "▶";
        if (!on) return;
        if (ui.t >= fimTotal() - 0.05) ui.t = 0;
        ult = performance.now();
        const passo = agora => { if (!ui.play || !c.isConnected) return; ui.t += (agora - ult) / 1000; ult = agora;
          if (ui.t >= fimTotal()) { ui.t = fimTotal(); atualizaPrev(); tocar(false); return; }
          atualizaPrev(); raf = requestAnimationFrame(passo); };
        raf = requestAnimationFrame(passo);
      }

      /* ---------- ações ---------- */
      function addVideo(id, pos) { const f = arq(id); mudar(() => { const k = { f: id, a: 0, b: f.dur }; if (pos == null || pos > st.tl.length) st.tl.push(k); else st.tl.splice(pos, 0, k); ui.sel = pos == null ? st.tl.length - 1 : pos; }); }
      function addMus() { if (st.mu) { ui.sel = "mu"; return; } mudar(() => { st.mu = { vol: 100 }; ui.sel = "mu"; }); }
      function acao(a, e) {
        const [k, v, w] = a.split(":");
        ui.menu = null; ui.toast = "";
        if (k === "start") { ui.start = !ui.start; draw(); return; }
        if (k === "desk") { ui.start = false; draw(); return; }
        ui.start = false;
        if (k === "app") { ui.app = true; draw(); return; }
        if (k === "min" || k === "fechar") { tocar(false); ui.app = false; draw(); return; }
        if (k === "maxi") { ui.max = !ui.max; draw(); return; }
        if (k === "novo") { st.aberto = true; salvar(); draw(); return; }
        if (k === "aba") { ui.aba = v; draw(); return; }
        if (k === "importar") { ui.dlg = "abrir"; ui.dsel = []; draw(); return; }
        if (k === "dlgx") { ui.dlg = null; draw(); return; }
        if (k === "dlgok") { ui.dsel.forEach(id => { if (!st.imp.includes(id)) st.imp.push(id); }); st.imp.sort((x, y) => ARQS.findIndex(f => f.id === x) - ARQS.findIndex(f => f.id === y)); ui.dlg = null; ui.aba = "midia"; salvar(); draw(); return; }
        if (k === "add") { if (v === "mus") addMus(); else if (v === "tx") { if (!st.tx) mudar(() => { st.tx = { txt: "", t0: 0, d: 4 }; }); ui.sel = "tx"; } else addVideo(v); draw(); fim(); return; }
        if (k === "play") { tocar(!ui.play); return; }
        if (k === "ini") { ui.t = 0; atualizaPrev(); return; }
        if (k === "fimv") { ui.t = fimTotal(); atualizaPrev(); return; }
        if (k === "desf") { tocar(false); voltar(ui.hist, ui.fut); return; }
        if (k === "ref") { tocar(false); voltar(ui.fut, ui.hist); return; }
        if (k === "zoom") { ui.zoom = Math.min(3, Math.max(1, ui.zoom + (v === "+" ? 0.5 : -0.5))); draw(); return; }
        if (k === "excluir") { const s = ui.sel; if (s == null) return; mudar(() => { if (s === "tx") st.tx = null; else if (s === "mu") st.mu = null; else st.tl.splice(s, 1); ui.sel = null; }); draw(); return; }
        if (k === "esq" || k === "dir") { const s = ui.sel, j = s + (k === "esq" ? -1 : 1); if (typeof s !== "number" || j < 0 || j >= st.tl.length) return; mudar(() => { const [x] = st.tl.splice(s, 1); st.tl.splice(j, 0, x); ui.sel = j; }); draw(); fim(); return; }
        if (k === "dividir") { const s = ui.sel; if (typeof s !== "number") return; const ini = inicioDe(s), cl = st.tl[s], loc = cl.a + (ui.t - ini);
          if (ui.t <= ini + 0.2 || loc >= cl.b - 0.2) { aviso("Para dividir, primeiro leve a agulha branca (clique na régua) para o meio do vídeo selecionado."); return; }
          mudar(() => { st.tl.splice(s, 1, { f: cl.f, a: cl.a, b: Math.round(loc * 10) / 10 }, { f: cl.f, a: Math.round(loc * 10) / 10, b: cl.b }); ui.sel = s + 1; }); draw(); return; }
        if (k === "cut") { const s = ui.sel, cl = st.tl[s]; if (!cl) return; const f = arq(cl.f), d = +w;
          mudar(() => { if (v === "a") cl.a = Math.min(cl.b - 1, Math.max(0, Math.round((cl.a + d) * 10) / 10)); else cl.b = Math.max(cl.a + 1, Math.min(f.dur, Math.round((cl.b + d) * 10) / 10)); }); ui.t = Math.min(ui.t, total()); draw(); fim(); return; }
        if (k === "txm") { if (!st.tx) return; mudar(() => { st.tx.t0 = Math.max(0, Math.round((st.tx.t0 + +v) * 10) / 10); }); draw(); fim(); return; }
        if (k === "exportar") {
          tocar(false);
          if (!st.tl.length) { aviso("A linha do tempo está vazia: monte o vídeo antes de exportar."); return; }
          const falta = metas().slice(0, 6).find(m => !m[2]);
          if (falta) { aviso(`Antes de exportar, falta: ${falta[1]}`); return; }
          ui.expNome = ui.expNome || (st.nome !== "Projeto sem título" ? st.nome : "video") + ".mp4"; ui.dlg = "exp"; draw(); return;
        }
        if (k === "q") { ui.expQ = v; ui.expErro = ""; draw(); return; }
        if (k === "expok") {
          let n = ui.expNome.trim().replace(/\s+/g, "-"); if (!/\.mp4$/i.test(n)) n += ".mp4"; ui.expNome = n;
          if (!nomeOk(n)) { ui.expErro = `O nome <b>${esc(n)}</b> não ajuda a achar o vídeo depois. Use <b>ano-turma-equipe-tema</b>, com hífens e sem espaços. Exemplo: <b>2027-7A-equipe-verde-lixo-eletronico.mp4</b>`; ctx.errou(`O nome “${esc(n)}” não ajuda a achar o vídeo depois. Use <b>ano-turma-equipe-tema</b>, com hífens e sem espaços. Exemplo: <b>2027-7A-equipe-verde-lixo-eletronico.mp4</b>`); draw(); return; }
          if (ui.expQ !== "1080") { ui.expErro = `Em ${ui.expQ}p o vídeo fica pequeno e borrado no projetor. Escolha <b>1080p</b>.`; draw(); ctx.errou(`Em ${ui.expQ}p o vídeo fica pequeno e borrado no projetor. Escolha <b>1080p</b> (alta definição).`); return; }
          ui.expErro = ""; ui.dlg = "prog"; ui.prog = 0; draw();
          const ti = setInterval(() => { ui.prog = Math.min(100, ui.prog + 4 + Math.round(Math.random() * 6)); const bi = c.querySelector(".sv-barra i"), tx2 = c.querySelector(".sv-expd p:last-child"); if (bi) bi.style.width = ui.prog + "%"; if (tx2) tx2.textContent = ui.prog + "% · Não feche o editor";
            if (ui.prog >= 100 || !c.isConnected) { clearInterval(ti); st.exp = { ok: true, nome: n, q: 1080, dur: Math.round(total() * 10) / 10, quando: Date.now(), tl: st.tl, tx: st.tx, mu: st.mu }; salvar(); ui.dlg = "pronto"; draw(); fim(); } }, 140);
          return;
        }
        if (k === "assistir") { ui.dlg = null; ui.t = 0; draw(); tocar(true); return; }
      }

      /* ---------- mouse: cliques, duplos cliques, arrastar e soltar ---------- */
      const pt = e => { const r = c.querySelector(".sw-tela").getBoundingClientRect(), k = r.width / 1000; return [(e.clientX - r.left) / k, (e.clientY - r.top) / k]; };
      const tlX = e => { const sc = c.querySelector("#sv-tlsc"); if (!sc) return 0; const r = sc.getBoundingClientRect(), k = r.width / sc.clientWidth; return (e.clientX - r.left) / k + sc.scrollLeft; };
      const indicePara = x => { const k = pps(); let s = 0; for (let i = 0; i < st.tl.length; i++) { const d = durClip(st.tl[i]) * k; if (x < s + d / 2) return i; s += d; } return st.tl.length; };
      c.onclick = e => {
        const r = e.target.closest("[data-r]");
        if (r) { const v = r.dataset.r;
          if (v === "reset") { (P.confirmar ? P.confirmar("Recomeçar do zero? A montagem e o vídeo exportado serão apagados.", "Sim, recomeçar") : Promise.resolve(true)).then(ok => { if (!ok) return; tocar(false); for (const x of ["g", "imp", "tl", "tx", "mu", "exp", "nome", "aberto", "v"]) delete st[x]; Object.assign(st, { v: 1, g: {}, imp: [], tl: [], tx: null, mu: null, exp: null, nome: "Projeto sem título", aberto: false }); Object.assign(ui, { app: false, sel: null, t: 0, hist: [], fut: [], dlg: null }); salvar(); draw(); }); }
          if (v === "ver") { ui.app = true; ui.dlg = null; ui.t = 0; draw(); tocar(true); c.querySelector(".sw-moldura").scrollIntoView({ block: "center", behavior: "smooth" }); }
          return; }
        if (!e.target.closest(".sw-tela")) return;
        const s = e.target.closest("[data-sel]");
        if (s) { const id = s.dataset.sel; if (e.ctrlKey || e.metaKey) ui.dsel = ui.dsel.includes(id) ? ui.dsel.filter(x => x !== id) : ui.dsel.concat(id); else ui.dsel = [id]; draw(); return; }
        const t = e.target.closest("[data-a]"); if (t && !t.disabled) { acao(t.dataset.a, e); return; }
        if (ui.menu || ui.start) { ui.menu = null; ui.start = false; draw(); }
      };
      c.ondblclick = e => {
        const t = e.target.closest("[data-dbl]"); if (!t || !e.target.closest(".sw-tela")) return;
        const [k, v] = t.dataset.dbl.split(":");
        if (k === "app") acao("app"); else if (k === "imp1") { ui.dsel = [v]; acao("dlgok"); }
      };
      c.onkeydown = e => {
        if (ui.dlg === "abrir" && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a") { e.preventDefault(); ui.dsel = ARQS.map(f => f.id); draw(); return; }
        if (ui.dlg === "exp" && e.key === "Enter") { acao("expok"); return; }
        if (e.target.matches("input")) return;
        if ((e.key === "Delete" || e.key === "Backspace") && ui.sel != null && ui.app) { e.preventDefault(); acao("excluir"); }
        if (e.key === " " && ui.app && st.aberto && !ui.dlg) { e.preventDefault(); tocar(!ui.play); }
      };
      c.tabIndex = -1;
      c.oncontextmenu = e => {
        if (!e.target.closest(".sw-tela")) return; e.preventDefault();
        const cl = e.target.closest("[data-clip]"); if (!cl) { ui.menu = null; draw(); return; }
        const id = cl.dataset.clip; ui.sel = /^\d+$/.test(id) ? +id : id; const [x, y] = pt(e); ui.menu = { tipo: /^\d+$/.test(id) ? "clip" : "outro", x: Math.min(x, 820), y: Math.min(y, 470) }; draw();
      };
      c.onpointerdown = e => {
        if (e.button !== 0 || !e.target.closest(".sw-tela") || ui.dlg) return;
        const al = e.target.closest("[data-alca]"), cl = e.target.closest("[data-clip]"), mi = e.target.closest("[data-arr]"), rg = e.target.closest("[data-regua]");
        if (e.target.closest("button")) return;
        if (rg || (e.target.closest("[data-faixa]") && !cl)) { tocar(false); const seek = ev => { ui.t = Math.max(0, Math.min(fimTotal(), tlX(ev) / pps())); atualizaPrev(); }; seek(e);
          const mv = ev => seek(ev), up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); }; addEventListener("pointermove", mv); addEventListener("pointerup", up); return; }
        if (al) { e.preventDefault(); tocar(false); const [i, lado] = al.dataset.alca.split(":"), k = st.tl[+i], f = arq(k.f), x0 = tlX(e), a0 = k.a, b0 = k.b; let mexeu = false; ui.hist.push(snap()); ui.fut = [];
          const mv = ev => { const d = (tlX(ev) - x0) / pps(); mexeu = true;
            if (lado === "a") k.a = Math.min(k.b - 1, Math.max(0, Math.round((a0 + d) * 10) / 10)); else k.b = Math.max(k.a + 1, Math.min(f.dur, Math.round((b0 + d) * 10) / 10));
            ui.t = inicioDe(+i) + (lado === "a" ? 0 : durClip(k) - 0.05); const tl = c.querySelector(".sv-tl"); if (tl) { tl.outerHTML = htmlTl(); } atualizaPrev(); };
          const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); if (!mexeu) ui.hist.pop(); else { st.exp = null; salvar(); } draw(); fim(); };
          addEventListener("pointermove", mv); addEventListener("pointerup", up); return; }
        if (cl || mi) {
          e.preventDefault(); tocar(false);
          const id = cl ? cl.dataset.clip : mi.dataset.arr, [x0, y0] = pt(e); let arr = false, fant = null, alvo = null;
          const mv = ev => { const [x, y] = pt(ev); if (!arr && Math.hypot(x - x0, y - y0) < 6) return;
            if (!arr) { arr = true; if (cl) cl.classList.add("arr");
              const f = arq(id); fant = document.createElement("div"); fant.className = "sv-fant"; fant.innerHTML = id === "mus" ? `<span>🎵 ${esc(MUS.nome)}</span>` : f ? `<img src="${img(f.n, f.modo)}" alt=""><span>${esc(f.nome)}</span>` : `<span>🅃 Título</span>`; c.querySelector(".sw-tela").appendChild(fant); }
            fant.style.left = (x + 8) + "px"; fant.style.top = (y + 8) + "px";
            c.querySelectorAll(".sv-faixa.alvo,.sv-ins").forEach(z => z.classList ? (z.classList.contains("sv-ins") ? z.remove() : z.classList.remove("alvo")) : 0);
            const fx = document.elementsFromPoint(ev.clientX, ev.clientY).find(z => z.dataset && z.dataset.faixa); alvo = null;
            const tipoOk = fx && (id === "mus" ? fx.dataset.faixa === "au" : id === "tx" ? fx.dataset.faixa === "tx" : fx.dataset.faixa === "v");
            if (tipoOk) { fx.classList.add("alvo"); alvo = fx.dataset.faixa;
              if (alvo === "v") { const ix = indicePara(tlX(ev)); alvo = ix; const mk = document.createElement("div"); mk.className = "sv-ins"; mk.style.left = (inicioDe(ix) * pps() - 1) + "px"; fx.appendChild(mk); } }
          };
          const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); if (fant) fant.remove();
            if (!arr) { if (cl) { ui.sel = /^\d+$/.test(id) ? +id : id; if (typeof ui.sel === "number") ui.t = inicioDe(ui.sel); draw(); } return; }
            if (alvo == null) { draw(); return; }
            if (cl && /^\d+$/.test(id)) { const de = +id; let para = alvo; if (para > de) para--; if (para !== de) mudar(() => { const [x] = st.tl.splice(de, 1); st.tl.splice(para, 0, x); ui.sel = para; }); }
            else if (!cl) { if (id === "mus") addMus(); else addVideo(id, alvo); }
            draw(); fim(); };
          addEventListener("pointermove", mv); addEventListener("pointerup", up);
        }
      };

      ctx.resolver = () => {
        tocar(false);
        Object.assign(st, { aberto: true, imp: ARQS.map(f => f.id), nome: "Celular no lixo? Não!",
          tl: ARQS.filter(f => f.bom).map(f => ({ f: f.id, a: f.ini, b: f.dur - f.fim })), tx: { txt: "Celular no lixo? Não!", t0: 0, d: 4 }, mu: { vol: 20 } });
        st.exp = { ok: true, nome: "2027-7A-equipe-verde-lixo-eletronico.mp4", q: 1080, dur: total(), quando: Date.now(), tl: st.tl, tx: st.tx, mu: st.mu };
        ui.app = true; ui.dlg = null; ui.sel = null; salvar(); draw();
      };
      draw();
    },
    imprimir() { return `<p>Monte o vídeo no Editor de Vídeo do portal (simulador): escolha as tomadas boas, corte as sobras, coloque título e música baixinha e exporte com um nome claro.</p>`; },
    resumoResposta(at, st) { return st.exp && st.exp.ok ? `🎬 ${esc(st.exp.nome)} · ${fmtC(st.exp.dur)} · ${st.exp.q}p` : `montagem com ${(st.tl || []).length} trecho(s)`; }
  };
})();
