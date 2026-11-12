/* 🎄 Temas das épocas do ano: o portal se veste sozinho pela data (cronograma em TEMAS).
   Leve: só CSS e desenhos do próprio navegador. Nunca cobre textos nem tarefas (decoração sem clique).
   Para ver antes da data: abra o portal com ?tema=natal (fica lembrado neste navegador); ?tema=auto volta ao normal; ?tema=nenhum desliga. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  // [tema, mês/dia de início, mês/dia de fim] (o fim pode passar da virada do ano)
  const TEMAS = [["natal", "12-01", "01-06"]];
  function pelaData(d) {
    const md = String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    const t = TEMAS.find(([, ini, fim]) => ini <= fim ? md >= ini && md <= fim : md >= ini || md <= fim);
    return t ? t[0] : null;
  }
  // prioridade: escolha deste navegador (?tema=) > escolha do professor no painel (config/tema, vale para todos) > data
  let local = null;
  try { const q = new URLSearchParams(location.search).get("tema"); if (q) localStorage.setItem("pp-tema", q); local = localStorage.getItem("pp-tema"); } catch (e) {}
  const resolver = global => { const l = local && local !== "auto" ? local : null, g = global && global !== "auto" ? global : null, x = l || g;
    return x ? (x === "nenhum" ? null : x) : pelaData(new Date()); };
  let tema = null;
  function aplicar(novo) {
    if (novo === tema) return;
    document.documentElement.classList.forEach(c => { if (/^tema-/.test(c)) document.documentElement.classList.remove(c); });
    document.querySelectorAll(".tm-neve, .tm-arvore, .tm-noel").forEach(x => x.remove());
    tema = novo; P.tema = novo;
    if (!novo) return;
    document.documentElement.classList.add("tema-" + novo);
    if (document.body) enfeitar(); else document.addEventListener("DOMContentLoaded", enfeitar, { once: true });
  }
  P.temaPelaData = pelaData; P.TEMAS = TEMAS;
  function enfeitar() {
    if (tema === "natal" && !document.querySelector(".tm-neve, .tm-arvore")) {
      const reduz = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
      // ❄️ neve caindo de leve (atrás de tudo e sem clique)
      if (!reduz) { const n = document.createElement("div"); n.className = "tm-neve"; n.setAttribute("aria-hidden", "true");
        let h = ""; for (let i = 0; i < 36; i++) h += `<i style="left:${Math.random() * 100}%;animation-duration:${9 + Math.random() * 10}s;animation-delay:-${Math.random() * 18}s;font-size:${8 + Math.random() * 12}px;opacity:${.35 + Math.random() * .45}">❄</i>`;
        n.innerHTML = h; document.body.appendChild(n); }
      // 🎄 arvorezinha com luzes no canto (some em telas pequenas)
      const a = document.createElement("div"); a.className = "tm-arvore"; a.setAttribute("aria-hidden", "true");
      a.innerHTML = `<svg viewBox="0 0 80 100" width="74" height="92"><polygon points="40,4 44,14 54,14 46,20 49,30 40,24 31,30 34,20 26,14 36,14" fill="#facc15"/><path d="M40 18 L66 52 H54 L72 78 H8 L26 52 H14 Z" fill="#15803d"/><path d="M40 18 L66 52 H54 L72 78 H40 Z" fill="#166534"/><rect x="34" y="78" width="12" height="14" rx="2" fill="#78350f"/>
        <g class="tm-luzes"><circle cx="34" cy="40" r="3" fill="#ef4444"/><circle cx="48" cy="46" r="3" fill="#facc15"/><circle cx="28" cy="62" r="3" fill="#3b82f6"/><circle cx="44" cy="66" r="3" fill="#ef4444"/><circle cx="58" cy="70" r="3" fill="#facc15"/><circle cx="20" cy="72" r="3" fill="#f472b6"/></g>
        <g class="tm-luzes b"><circle cx="40" cy="32" r="3" fill="#3b82f6"/><circle cx="30" cy="50" r="3" fill="#f472b6"/><circle cx="54" cy="58" r="3" fill="#3b82f6"/><circle cx="36" cy="72" r="3" fill="#facc15"/><circle cx="64" cy="76" r="3" fill="#ef4444"/></g></svg>`;
      document.body.appendChild(a);
      // 🎅 Papai Noel descendo na cordinha e entrando na chaminé (canto de baixo, à direita)
      const pn = document.createElement("div"); pn.className = "tm-noel"; pn.setAttribute("aria-hidden", "true");
      pn.innerHTML = `<svg viewBox="0 0 120 200" width="96" height="160">
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
        <rect x="30" y="120" width="60" height="10" rx="2" fill="#92400e"/><path d="M30 121 Q45 114 60 120 Q75 114 90 121" fill="#fff"/></svg>`;
      document.body.appendChild(pn);
    }
  }
  aplicar(resolver(null));
  // escolha do professor (painel → 🎨 Tema): lida da nuvem uma vez, quando o Firebase estiver pronto
  P.aplicarTemaGlobal = g => aplicar(resolver(g));
  let tent = 0;
  (function lerGlobal() {
    const N = P.nuvem; if (!N || !N.app) { if (tent++ < 20) setTimeout(lerGlobal, 500); return; }
    try { N.app(0).db.collection("config").doc("tema").get().then(sn => { P.temaGlobal = sn.exists ? sn.data().modo || "auto" : "auto"; P.aplicarTemaGlobal(P.temaGlobal); }).catch(() => {}); } catch (e) {}
  })();
})();
