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
   - ▶️ Modo "aula iniciada" (padrão desde 14/11/2026): as tarefas
     ficam fechadas até o professor tocar em "Iniciar a aula" no
     painel (config/hoje_<turma>.iniciadaDia = hoje) e fecham de novo
     no "Finalizar aula". Quem estuda em casa (🏠) não tem trava.
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
    /* 🏠 estudo em casa: progresso/<alunoId>_casa = { sessoes: { dia: início }, videos: { mid: quando } } */
    casaLimite() { return (P.catalogo.casaMinutos || 120) * 60000; },
    async casaEh(s) {
      if (!s || !s.nuvem || !N() || !N().pronto || !(s.alunoIds || []).length) return false;
      const lib = await cfg("liberar_" + s.turma); return s.alunoIds.every(id => (lib.casa || {})[id]);
    },
    async casaDoc(s) {
      try { const sn = await N().db().collection("progresso").doc(s.alunoIds[0] + "_casa").get(); return sn.exists ? sn.data() : {}; } catch (e) { return {}; }
    },
    async casaGravar(s, dados) {
      return N().db().collection("progresso").doc(s.alunoIds[0] + "_casa").set(Object.assign({ alunoId: s.alunoIds[0], turma: s.turma, tipo: "casa" }, dados), { merge: true });
    },
    async casaIniciar(s, mid) { const ms = await agora(), d = N().hoje(); await this.casaGravar(s, { sessoes: { [d]: ms }, missaoDia: { [d]: mid || "" } }); return ms; },
    async casaVideo(s, mid) { await this.casaGravar(s, { videos: { [mid]: Date.now() } }); },
    agora,
    /* 📌 Missão de hoje da turma (config/hoje_<turma>), só vale no dia em que o professor marcou */
    async hoje(s) {
      if (!s || !s.nuvem || !N() || !N().pronto) return null;
      const h = await cfg("hoje_" + s.turma), d = N().hoje();
      return h && h.dia === d && (h.mid || h.iniciadaDia === d) ? h : null;
    },
    /* {aberta:true} ou {aberta:false, fechada, horarios:[texto], hoje:{mid,titulo}} */
    async estado(s, mid) {
      if (!s || !s.nuvem || !N() || !N().pronto) return { aberta: true }; // visualização do professor, modo explorador
      const [g, lib, h] = await Promise.all([cfg("geral"), cfg("liberar_" + s.turma), this.hoje(s)]);
      const ms = await agora();
      const ids = s.alunoIds || [];
      const modoAula = g.modoAula !== false;   // ▶️ 14/11/2026: as tarefas só abrem depois que o professor INICIA a aula no painel
      // 🏠 quem estuda em casa não tem trava de aula: faz no próprio ritmo (config/liberar_<turma>.casa),
      //    com uma sessão de 2 horas por dia e o vídeo da missão antes das tarefas (14/11/2026)
      if (ids.length && ids.every(id => (lib.casa || {})[id])) {
        const cd = await this.casaDoc(s), hoje = N().hoje(), ini = (cd.sessoes || {})[hoje], lim = this.casaLimite();
        if (ini && ms > ini + lim) return { aberta: false, casaFim: true, ini, lim };
        // uma sessão por dia = UMA missão por dia (pedido em 14/11/2026): terminou antes das 2 h, não abre outra missão hoje
        const doDia = (cd.missaoDia || {})[hoje];
        if (ini && doDia && mid && mid !== doDia) return { aberta: false, casaOutra: doDia, ini, lim };
        return { aberta: true, casa: true, ini: ini || 0, lim, videoVisto: !!(mid && (cd.videos || {})[mid]) };
      }
      if ((g.travaHorario || modoAula) && lib.fechadaAte && ms < lib.fechadaAte) return { aberta: false, fechada: true };
      // liberado só para ele: se o professor escolheu a missão, só ela (e a missão de hoje da turma) abre (12/11/2026)
      const lib1 = ids.filter(id => ((lib.alunos || {})[id] || 0) > ms);
      if (lib1.length) {
        const so = lib1.map(id => (lib.alunosMissao || {})[id]).filter(Boolean);
        if (!so.length || lib1.length > so.length) return { aberta: true };            // liberado sem missão escolhida = todas
        if (!mid || so.includes(mid) || (h && h.mid === mid)) return { aberta: true };
        return { aberta: false, so: so[0], hoje: h && h.travar ? h : null };
      }
      if (modoAula) {
        if (lib.ate && ms < lib.ate) return { aberta: true };
        const iniciada = h && h.iniciadaDia === N().hoje();
        if (!iniciada) return { aberta: false, aguardando: true };
        // ⏰ fim automático (14/11/2026): sem o 🏁 Finalizar, as tarefas fecham sozinhas no fim do horário da aula
        //    (+ tolerância). Aula iniciada fora do horário (reposição) dura o tempo de uma aula a partir do início.
        const t = P.turma(s.turma), dur = (P.catalogo.duracaoAula || 75) * 60000, tl = (P.catalogo.toleranciaTarefas || 15) * 60000;
        let fim = (h.iniciadaEm || ms) + dur + tl;
        if (t && t.aula && t.aula.ini && noHorario(t, h.iniciadaEm || ms)) { const d = new Date(h.iniciadaEm || ms), [H, M] = t.aula.ini.split(":").map(Number); d.setHours(H, M, 0, 0); fim = d.getTime() + dur + tl; }
        if (ms > fim) return { aberta: false, encerrada: true };
        if (h.travar && h.mid && mid && mid !== h.mid) return { aberta: false, hoje: h };
        return { aberta: true };
      }
      if (h && h.travar && mid && mid !== h.mid) return { aberta: false, hoje: h };     // 📌 só a missão de hoje
      return { aberta: true }; // 🔒 trava de horário eliminada em 14/11/2026 (substituída pelo ▶️ Iniciar a aula); o código abaixo fica só de histórico
      if (lib.ate && ms < lib.ate) return { aberta: true };
      const turmas = [s.turma, ...ids.map(id => (lib.outra || {})[id]).filter(Boolean)].map(id => P.turma(id)).filter(Boolean);
      if (turmas.some(t => noHorario(t, ms))) return { aberta: true };
      return { aberta: false, horarios: turmas.map(t => `${t.nome}: ${horarioTxt(t)}`) };
    }
  };
})();
