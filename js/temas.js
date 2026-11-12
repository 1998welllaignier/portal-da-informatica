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
  let escolha = null;
  try { const q = new URLSearchParams(location.search).get("tema"); if (q) localStorage.setItem("pp-tema", q); escolha = localStorage.getItem("pp-tema"); } catch (e) {}
  const tema = escolha && escolha !== "auto" ? (escolha === "nenhum" ? null : escolha) : pelaData(new Date());
  P.tema = tema; P.temaPelaData = pelaData;
  if (!tema) return;
  document.documentElement.classList.add("tema-" + tema);

  function enfeitar() {
    if (tema === "natal") {
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
    }
  }
  if (document.body) enfeitar(); else document.addEventListener("DOMContentLoaded", enfeitar);
})();
