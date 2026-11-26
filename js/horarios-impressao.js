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
    // 26/11/2026 (2ª versão, pedido do professor: "não dá para diferenciar manhã, tarde, 1º e 2º horário"):
    // um bloco para cada turno, com faixa de título própria, e cada linha com o nome do horário (1º, 2º…) e a hora de início
    const turnos = [["manha", "☀️", "Manhã", inis.filter(i => i < 720)], ["tarde", "🌇", "Tarde", inis.filter(i => i >= 720)]].filter(x => x[3].length);
    const chip = x => `<span class="turma" style="--c:${COR[x.t.serie.id] || "#334155"};--f:${FUNDO[x.t.serie.id] || "#f1f5f9"}">${esc(x.t.nome)}</span>`;
    const blocos = turnos.map(([k, ic, nome, hs]) => `<section class="turno t-${k}">
      <h3 class="turno-tit"><span class="ic">${ic}</span> ${nome.toUpperCase()}</h3>
      <table><thead><tr><th class="hora">Horário</th>${dias.map(d => `<th>${DIAS[d]}</th>`).join("")}</tr></thead>
      <tbody>${hs.map((i, n) => `<tr class="${n % 2 ? "par" : ""}"><th class="hora"><span class="ord">${n + 1}º horário</span><span class="hh">${fhm(i)}</span></th>${dias.map(d => {
        const xs = H.filter(x => x.dia === d && x.i === i);
        return xs.length ? `<td>${xs.map(chip).join("")}</td>` : `<td class="vazio">—</td>`; }).join("")}</tr>`).join("")}</tbody></table></section>`).join("");
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
  h2 { font-size: 15pt; margin: 5mm 0 3.5mm; text-align: center; letter-spacing: .02em; }
  .turno { margin: 0 0 5mm; border: ${mono ? "0.7mm solid #000" : "0.6mm solid var(--tc)"}; border-radius: 3.5mm; overflow: hidden; }
  .t-manha { --tc: #d97706; --tf: #fef3c7; --tt: #78350f; }
  .t-tarde { --tc: #4338ca; --tf: #e0e7ff; --tt: #1e1b4b; }
  .turno-tit { margin: 0; padding: 2.2mm 4mm; font-size: 15pt; font-weight: 900; letter-spacing: .12em; display: flex; align-items: center; gap: 2mm;
    ${mono ? "border-bottom: 0.7mm solid #000;" : "background: var(--tc); color: #fff;"} }
  ${mono ? ".t-manha .turno-tit { background: #fff; color: #000; } .t-tarde .turno-tit { background: #000; color: #fff; }" : ""}
  .turno-tit .ic { font-size: 16pt; letter-spacing: 0; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { border: ${mono ? "0.35mm solid #000" : "0.3mm solid #cbd5e1"}; padding: 3.4mm 1.8mm; text-align: center; vertical-align: middle; }
  tr:first-child th, tr:first-child td { border-top: 0; }
  th:first-child, td:first-child { border-left: 0; } th:last-child, td:last-child { border-right: 0; }
  tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }
  thead th { font-size: 10.5pt; padding: 1.8mm; ${mono ? "background: #fff; border-bottom: 0.6mm solid #000;" : "background: var(--tf); color: var(--tt);"} }
  th.hora { width: 31mm; }
  tbody th.hora { ${mono ? "" : "background: var(--tf); color: var(--tt);"} }
  th.hora .ord { display: block; font-size: 9.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
  th.hora .hh { display: block; font-size: 17pt; font-weight: 900; line-height: 1.1; }
  tbody tr.par td { ${mono ? "background: repeating-linear-gradient(135deg, #fff 0 2.2mm, #eee 2.2mm 2.6mm);" : "background: #f8fafc;"} }
  .turma { display: block; font-weight: 800; font-size: 20pt; border-radius: 2.5mm; padding: 3.8mm 0; background: #fff;
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
  ${blocos}
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
