/* 🖨️ HORÁRIOS PARA IMPRIMIR (26/11/2026, pedido do professor)
   Folha A4 em pé com os horários das aulas de Informática, para entregar aos alunos. Duas versões:
   "cor" (impressora colorida) e "mono" (impressora preto e branco: sem fundos, com bordas e padrões).
   Lê os horários do catálogo (dados/catalogo.js, turma.aula = { dia, ini }), então muda sozinha quando os horários mudarem.
   Usado pelo painel (🕘 Horários › 🖨️ Imprimir horários): P.horariosImpressao.abrir(turmas, modo). */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const COR = { "5": "#16a34a", "6": "#2563eb", "7": "#7c3aed", "8": "#ea580c", "9": "#db2777" };
  const FUNDO = { "5": "#dcfce7", "6": "#dbeafe", "7": "#ede9fe", "8": "#ffedd5", "9": "#fce7f3" };
  const hm = x => { const [a, b] = String(x).split(":").map(Number); return a * 60 + b; };
  const fhm = m => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;

  // turmas: [{ id, nome, aula: { dia, ini }, serie: { id, nome } }] (o painel manda todasTurmas())
  function html(turmas, modo) {
    const cat = P.catalogo || {}, mono = modo === "mono";
    const H = turmas.filter(t => t.aula && t.aula.ini && !t.livre && !t.arquivada).map(t => ({ t, dia: t.aula.dia, i: hm(t.aula.ini) }));
    const dias = [...new Set(H.map(x => x.dia))].sort((a, b) => a - b);
    const inis = [...new Set(H.map(x => x.i))].sort((a, b) => a - b);
    const series = [...new Map(H.map(x => [x.t.serie.id, x.t.serie])).values()].sort((a, b) => String(a.id).localeCompare(String(b.id)));
    const temAG = (cat.series || []).some(s => s.agregados);
    const hoje = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const linhas = inis.map((i, k) => {
      const turno = i < 720 ? "manha" : "tarde", trocou = !k || (inis[k - 1] < 720) !== (i < 720);
      return (trocou ? `<tr class="turno"><th colspan="${dias.length + 1}">${turno === "manha" ? "☀️ Manhã" : "🌇 Tarde"}</th></tr>` : "") +
        `<tr><th class="hora">${fhm(i)}</th>${dias.map(d => {
          const xs = H.filter(x => x.dia === d && x.i === i);
          return xs.length ? `<td>${xs.map(x => `<span class="turma s${esc(x.t.serie.id)}" style="--c:${COR[x.t.serie.id] || "#334155"};--f:${FUNDO[x.t.serie.id] || "#f1f5f9"}">${esc(x.t.nome)}</span>`).join("")}</td>` : `<td class="vazio">—</td>`;
        }).join("")}</tr>`;
    }).join("");
    return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Horários de Informática · ${esc(cat.professor || "")}</title>
<style>
  @page { size: A4 portrait; margin: 12mm; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { margin: 0; }
  body { font-family: "Segoe UI", Inter, Arial, sans-serif; color: #0f172a; width: 186mm; margin: 0 auto; font-size: 11.5pt; }
  .cab { display: flex; align-items: center; gap: 5mm; border-bottom: ${mono ? "1.2mm solid #000" : "1.2mm solid #1d4ed8"}; padding-bottom: 4mm; }
  .selo { width: 22mm; height: 22mm; border-radius: 5mm; display: grid; place-items: center; font-size: 30pt; flex: none;
    ${mono ? "border: 0.8mm solid #000;" : "background: linear-gradient(135deg, #1d4ed8, #7c3aed); color: #fff;"} }
  .cab h1 { margin: 0; font-size: 21pt; line-height: 1.1; }
  .cab .prof { margin: 1mm 0 0; font-size: 15pt; font-weight: 800; ${mono ? "" : "color: #1d4ed8;"} }
  .cab .esc { margin: 1mm 0 0; font-size: 10.5pt; color: ${mono ? "#000" : "#475569"}; }
  h2 { font-size: 15pt; margin: 6mm 0 3mm; text-align: center; letter-spacing: .02em; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { border: ${mono ? "0.4mm solid #000" : "0.35mm solid #cbd5e1"}; padding: 4.5mm 1.8mm; text-align: center; vertical-align: middle; }
  thead th { font-size: 11.5pt; ${mono ? "background: #fff; border-bottom: 0.9mm solid #000;" : "background: #0f172a; color: #fff;"} }
  th.hora { width: 27mm; font-size: 15pt; ${mono ? "" : "background: #f8fafc;"} }
  thead th.hora { font-size: 11.5pt; ${mono ? "" : "background: #0f172a; color: #fff;"} }
  th.hora small { display: block; font-size: 9pt; font-weight: 500; color: ${mono ? "#000" : "#64748b"}; }
  tr.turno th { text-align: left; font-size: 11pt; padding: 1.6mm 3mm; ${mono ? "background: #fff; border-top: 0.9mm solid #000;" : "background: #e0e7ff; color: #1e3a8a;"} }
  .turma { display: block; font-weight: 800; font-size: 20pt; border-radius: 2.5mm; padding: 4mm 0;
    ${mono ? "border: 0.6mm solid #000;" : "background: var(--f); color: var(--c); border: 0.5mm solid var(--c);"} }
  td.vazio { color: ${mono ? "#000" : "#94a3b8"}; font-size: 12pt; }
  .legenda { display: flex; flex-wrap: wrap; gap: 2mm 4mm; justify-content: center; margin: 3mm 0 0; font-size: 10pt; }
  .legenda span { display: inline-flex; align-items: center; gap: 1.5mm; }
  .legenda i { width: 4mm; height: 4mm; border-radius: 1mm; display: inline-block; ${mono ? "border: 0.4mm solid #000;" : "background: var(--c);"} }
  .caixas { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-top: 6mm; }
  .cx { border: ${mono ? "0.5mm solid #000" : "0.5mm solid #cbd5e1"}; border-radius: 3mm; padding: 3mm 4mm; ${mono ? "" : "background: #f8fafc;"} }
  .cx h3 { margin: 0 0 1.5mm; font-size: 12pt; }
  .cx p, .cx li { margin: 0 0 1.4mm; font-size: 11pt; line-height: 1.4; }
  .cx ol { margin: 0; padding-left: 5mm; }
  .site { font-size: 15pt; font-weight: 800; letter-spacing: .02em; ${mono ? "" : "color: #1d4ed8;"} }
  .rod { margin-top: 6mm; padding-top: 2.5mm; border-top: ${mono ? "0.4mm solid #000" : "0.4mm solid #cbd5e1"}; display: flex; justify-content: space-between; font-size: 9pt; color: ${mono ? "#000" : "#64748b"}; }
  @media screen { body { padding: 8mm 0; } .dica-imp { position: fixed; top: 8px; right: 8px; background: #fef3c7; border: 2px solid #f59e0b; border-radius: 10px; padding: 8px 12px; font-size: 13px; } }
  @media print { .dica-imp { display: none; } }
</style></head><body>
  <p class="dica-imp">🖨️ Folha A4 em pé${mono ? " · preto e branco" : " · colorida"}. Se a janela de imprimir não abrir, aperte <b>Ctrl + P</b>.</p>
  <header class="cab"><div class="selo">💻</div><div>
    <h1>Aulas de Informática</h1>
    <p class="prof">${esc(cat.professor || "Professor Welington Laignier")}</p>
    <p class="esc">EMEF Juscelino Kubitschek · Curionópolis – PA · <b>professorwell.com.br</b></p></div></header>
  <h2>🗓️ Horários das aulas na Sala de Informática</h2>
  <table><thead><tr><th class="hora">Início</th>${dias.map(d => `<th>${DIAS[d]}</th>`).join("")}</tr></thead><tbody>${linhas}</tbody></table>
  ${mono ? "" : `<div class="legenda">${series.map(s => `<span style="--c:${COR[s.id] || "#334155"}"><i></i>${esc(s.nome)}</span>`).join("")}</div>`}
  <div class="caixas">
    <div class="cx"><h3>⏰ Como são as aulas</h3>
      <p>As aulas são no <b>contraturno</b>, uma vez por semana para cada turma.</p>
      <p>Chegue no horário: quem entra cedo já começa ganhando pontos na sala de espera.</p>
      ${temAG ? `<p>🎒 <b>Agregados</b>: sem horário fixo; fazem as missões pelo portal.</p>` : ""}</div>
    <div class="cx"><h3>🌐 Como entrar no portal</h3>
      <p class="site">professorwell.com.br</p>
      <ol><li>Abra o site no navegador.</li><li>Escolha a sua <b>série</b> e a sua <b>turma</b>.</li><li>Digite o seu <b>código de 4 números</b> (não mostre para os colegas).</li></ol>
      <p>Também dá para estudar em casa, no celular ou no computador.</p></div>
  </div>
  <footer class="rod"><span>${esc(cat.professor || "")} · Informática</span><span>Horários atualizados em ${hoje}</span></footer>
</body></html>`;
  }

  // abre a folha numa janela nova e chama a impressão
  function abrir(turmas, modo) {
    const w = window.open("", "_blank");
    if (!w) { (P.aviso || alert)("O navegador bloqueou a janela. Permita janelas (pop-ups) para este site e tente de novo."); return; }
    w.document.open(); w.document.write(html(turmas, modo)); w.document.close();
    setTimeout(() => { try { w.focus(); w.print(); } catch (e) {} }, 600);
  }
  P.horariosImpressao = { html, abrir };
})();
