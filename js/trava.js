/* ============================================================
   TRAVA DE HORÁRIO DAS TAREFAS
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   - Os textos de estudo (Para começar, O que significa?, Onde eu
     uso isso?) ficam sempre abertos, inclusive em casa.
   - As tarefas (Mão na massa, Básico, Desafio, Turbo, Perguntas
     rápidas, Autoavaliação, Resumo) só abrem no dia e na hora da
     aula da turma, com tolerância antes e depois.
   - O professor liga e desliga a trava no painel (Ano letivo) e
     libera fora do horário: a turma toda, só um aluno, ou faz o
     aluno seguir o horário de outra turma (config/liberar_<turma>).
   - A hora vem do servidor do site (não adianta mudar o relógio
     do computador).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const N = () => P.nuvem;
  let dif = 0, difEm = 0;
  async function agora() {
    if (Date.now() - difEm > 10 * 60000) {
      try {
        const r = await Promise.race([fetch(location.pathname + "?hora=" + Date.now(), { method: "HEAD", cache: "no-store" }), new Promise((_, x) => setTimeout(() => x(new Error("tempo")), 3000))]);
        const d = Date.parse(r.headers.get("date")); if (d) { dif = d - Date.now(); difEm = Date.now(); }
      } catch (e) { /* sem resposta: usa o relógio do computador */ }
    }
    return Date.now() + dif;
  }
  const cache = {};
  async function cfg(id) {
    const c = cache[id]; if (c && Date.now() - c.t < 60000) return c.v;
    let v = {};
    try { const sn = await N().db().collection("config").doc(id).get(); v = sn.exists ? sn.data() : {}; } catch (e) { v = {}; }
    cache[id] = { t: Date.now(), v }; return v;
  }
  const tol = () => (P.catalogo.toleranciaTarefas || 15) * 60000;
  const dur = () => (P.catalogo.duracaoAula || 75) * 60000;
  function noHorario(t, ms) {
    if (!t || !t.aula) return true;
    const d = new Date(ms); if (d.getDay() !== t.aula.dia) return false;
    const [H, M] = t.aula.ini.split(":").map(Number); const ini = new Date(d); ini.setHours(H, M, 0, 0);
    return ms >= ini.getTime() - tol() && ms <= ini.getTime() + dur() + tol();
  }
  const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  function horarioTxt(t) {
    if (!t || !t.aula) return "";
    const [H, M] = t.aula.ini.split(":").map(Number), fim = new Date(2000, 0, 1, H, M + (P.catalogo.duracaoAula || 75));
    const hm = (h, m) => h + "h" + (m ? String(m).padStart(2, "0") : "");
    return `${DIAS[t.aula.dia]}, das ${hm(H, M)} às ${hm(fim.getHours(), fim.getMinutes())}`;
  }
  P.trava = {
    noHorario, horarioTxt, limpar() { Object.keys(cache).forEach(k => delete cache[k]); },
    /* 📌 Missão de hoje da turma (config/hoje_<turma>), só vale no dia em que o professor marcou */
    async hoje(s) {
      if (!s || !s.nuvem || !N() || !N().pronto) return null;
      const h = await cfg("hoje_" + s.turma);
      return h && h.mid && h.dia === N().hoje() ? h : null;
    },
    /* {aberta:true} ou {aberta:false, fechada, horarios:[texto], hoje:{mid,titulo}} */
    async estado(s, mid) {
      if (!s || !s.nuvem || !N() || !N().pronto) return { aberta: true }; // visualização do professor, modo explorador
      const [g, lib, h] = await Promise.all([cfg("geral"), cfg("liberar_" + s.turma), this.hoje(s)]);
      const ms = await agora();
      const ids = s.alunoIds || [];
      if (g.travaHorario && lib.fechadaAte && ms < lib.fechadaAte) return { aberta: false, fechada: true };
      // liberado só para ele: se o professor escolheu a missão, só ela (e a missão de hoje da turma) abre (12/11/2026)
      const lib1 = ids.filter(id => ((lib.alunos || {})[id] || 0) > ms);
      if (lib1.length) {
        const so = lib1.map(id => (lib.alunosMissao || {})[id]).filter(Boolean);
        if (!so.length || lib1.length > so.length) return { aberta: true };            // liberado sem missão escolhida = todas
        if (!mid || so.includes(mid) || (h && h.mid === mid)) return { aberta: true };
        return { aberta: false, so: so[0], hoje: h && h.travar ? h : null };
      }
      if (h && h.travar && mid && mid !== h.mid) return { aberta: false, hoje: h };     // 📌 só a missão de hoje
      if (!g.travaHorario) return { aberta: true };
      if (lib.ate && ms < lib.ate) return { aberta: true };
      const turmas = [s.turma, ...ids.map(id => (lib.outra || {})[id]).filter(Boolean)].map(id => P.turma(id)).filter(Boolean);
      if (turmas.some(t => noHorario(t, ms))) return { aberta: true };
      return { aberta: false, horarios: turmas.map(t => `${t.nome}: ${horarioTxt(t)}`) };
    }
  };
})();
