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
  // 🎒 o aluno do 5º ano avisa ao painel em qual aula está hoje (progresso/<aluno>_visita), para aparecer no painel daquela turma
  const visitou = {};
  function visita(s, tAula, d) { (s.alunoIds || []).forEach((id, i) => { const k = id + tAula + d; if (visitou[k]) return; visitou[k] = 1;
    try { N().app(i).db.collection("progresso").doc(id + "_visita").set({ alunoId: id, turma: s.turma, tipo: "visita", dia: d, aulaTurma: tAula, em: Date.now() }, { merge: true }).catch(() => { visitou[k] = 0; }); } catch (e) {} }); }
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
    casaLivreEh(lib, ids) { const ano = String(new Date().getFullYear()); return !!(ids && ids.length && ids.every(id => String((lib.casaLivre || {})[id] || "") === ano)); },
    async casaLivre(s) { const lib = await cfg("liberar_" + s.turma); return this.casaLivreEh(lib, s.alunoIds || []); },
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
      const lib = await cfg("liberar_" + s.turma), r = await this.aulaDe(s, lib), h = r.h, d = N().hoje();
      return h && h.dia === d && (h.mid || h.iniciadaDia === d) ? h : null;
    },
    /* 🏫 Qual aula vale AGORA para esta sessão: a da turma do aluno ou a de outra turma que ele frequenta
       (config/liberar_<turma>.outra). 25/11/2026: vale a aula iniciada MAIS RECENTEMENTE hoje. Antes, se a turma dele
       tivesse tido aula mais cedo no mesmo dia, ela "ganhava" e o aluno via "A aula de hoje já terminou" na aula da outra turma. */
    async aulaDe(s, lib) {
      const d = N().hoje(), own = await cfg("hoje_" + s.turma);
      let outras = [...new Set((s.alunoIds || []).map(id => ((lib || {}).outra || {})[id]).filter(x => x && x !== s.turma))];
      // 🎒 5º ano (25/11/2026, pedido do professor): os alunos do 5º ano entram na aula de QUALQUER turma que estiver
      //    acontecendo e fazem a mesma apostila dela (só conta a presença; não têm nota)
      if (s.serie === "5") outras = P.catalogo.series.filter(x => x.id !== "5").flatMap(x => x.turmas.map(t => t.id));
      let melhor = { h: own, tAula: s.turma, t: own && own.dia === d && own.iniciadaDia === d ? (own.iniciadaEm || 1) : 0 };
      for (const ot of outras) { const ho = await cfg("hoje_" + ot), t = ho && ho.dia === d && ho.iniciadaDia === d ? (ho.iniciadaEm || 1) : 0;
        if (t > melhor.t) melhor = { h: ho, tAula: ot, t }; }
      if (s.serie === "5" && melhor.tAula !== s.turma && melhor.t) visita(s, melhor.tAula, d);
      return melhor;
    },
    /* {aberta:true} ou {aberta:false, fechada, horarios:[texto], hoje:{mid,titulo}} */
    /* 🏠🔓 Reposição em casa (25/11/2026, pedido do professor): o professor libera VÁRIAS missões que o aluno perdeu
       (config/liberar_<turma>.repo = { alunoId: { mids: ["m1","m2"], ate: ms } }). Ele faz essas missões de casa, na hora
       que quiser, com a sessão de 2 horas por dia e o vídeo da missão antes das tarefas (igual ao 🏠 estudo em casa).
       As outras missões continuam com as regras normais da aula (🔒 "feita na aula com a turma"). */
    repoEh(lib, ids, ms) {
      if (!ids || !ids.length) return null;
      const rs = ids.map(id => ((lib || {}).repo || {})[id]).filter(r => r && r.ate > ms && Array.isArray(r.mids) && r.mids.length);
      if (rs.length !== ids.length) return null;
      const mids = rs[0].mids.filter(m => rs.every(r => r.mids.includes(m)));
      return mids.length ? { mids, ate: Math.min(...rs.map(r => r.ate)) } : null;
    },
    async repo(s) {
      if (!s || !s.nuvem || !N() || !N().pronto) return null;
      const lib = await cfg("liberar_" + s.turma); return this.repoEh(lib, s.alunoIds || [], await agora());
    },
    async estado(s, mid) {
      const r = await this.estado0(s, mid);
      // 🏠🔓 missão que NÃO está na reposição em casa: segue a regra da aula; se estiver fechada, o aviso explica
      if (!r.aberta && mid && mid !== "rc" && s && s.nuvem && N() && N().pronto && !r.casaFim) {
        try { const rp = await this.repo(s); if (rp && !rp.mids.includes(mid)) return Object.assign({}, r, { repoFora: rp }); } catch (e) {}
      }
      return r;
    },
    async estado0(s, mid) {
      if (!s || !s.nuvem || !N() || !N().pronto) return { aberta: true }; // visualização do professor, modo explorador
      let [g, lib, h] = await Promise.all([cfg("geral"), cfg("liberar_" + s.turma), this.hoje(s)]);
      // 🏫 aluno que frequenta a aula de outra turma (🏫 no painel, config/liberar_<turma>.outra): vale a aula iniciada
      //    mais recentemente hoje (a dele ou a da outra turma) — início, missão, trava e fim (18/11/2026; ajustado em 25/11/2026)
      let tAula = s.turma;
      { const r = await this.aulaDe(s, lib); tAula = r.tAula;
        if (tAula !== s.turma) { const lo = await cfg("liberar_" + tAula); lib = Object.assign({}, lib, { fechadaAte: lo.fechadaAte, ate: lo.ate || lib.ate }); } }
      const ms = await agora();
      const ids = s.alunoIds || [];
      // 📝 atividade de recuperação (15/11/2026): abre a qualquer hora para quem o professor liberou, e só para ele
      if (mid === "rc") { if (P.carregarPeriodo) await P.carregarPeriodo(); const pv = await cfg(P.docProva ? P.docProva(s.turma) : "prova_" + s.turma); return ids.length && ids.every(id => (pv.recAtv || []).includes(id)) ? { aberta: true } : { aberta: false, recFechada: true }; }
      const modoAula = g.modoAula !== false;   // ▶️ 14/11/2026: as tarefas só abrem depois que o professor INICIA a aula no painel
      // 🏠 quem estuda em casa não tem trava de aula: faz no próprio ritmo (config/liberar_<turma>.casa),
      //    com uma sessão de 2 horas por dia e o vídeo da missão antes das tarefas (14/11/2026)
      if (ids.length && ids.every(id => (lib.casa || {})[id])) {
        const cd = await this.casaDoc(s), hoje = N().hoje(), ini = (cd.sessoes || {})[hoje], lim = this.casaLimite();
        if (ini && ms > ini + lim) return { aberta: false, casaFim: true, ini, lim };
        // 📅 liberação semanal (18/11/2026, substitui o "uma missão por dia" de 14/11): a missão abre na segunda-feira
        //    da semana sugerida no plano (config/plano_<turma>); as que ficaram para trás continuam abertas e o aluno
        //    pode fazer mais de uma no mesmo dia para ficar em dia (sempre dentro das 2 horas do dia)
        // 🚀 "todas abertas, uma por dia" (18/11/2026): para quem começou com o bimestre quase no fim, o professor desliga a
        //    liberação semanal só para aquele aluno (config/liberar_<turma>.casaLivre = { alunoId: "ano" }); vale só no ano marcado.
        //    Todas as missões abrem, mas é UMA missão por dia (a do dia é a primeira que ele abriu hoje)
        const livre = this.casaLivreEh(lib, ids);
        if (livre) { const doDia = (cd.missaoDia || {})[hoje]; if (ini && doDia && mid && mid !== doDia) return { aberta: false, casaOutra: doDia, ini, lim }; }
        else if (mid) { const pl = await cfg("plano_" + s.turma), pm = (pl.missoes || []).find(x => x.mid === mid);
          if (pm && pm.ini && hoje < pm.ini) return { aberta: false, casaFutura: pm.ini, ini, lim }; }
        return { aberta: true, casa: true, ini: ini || 0, lim, videoVisto: !!(mid && (cd.videos || {})[mid]) };
      }
      // 🏠🔓 reposição em casa: a missão liberada abre a qualquer hora (até a data escolhida), como no estudo em casa.
      //    Exceção: se ela é a missão de hoje da turma e a aula está acontecendo, vale a aula normal.
      { const rp = this.repoEh(lib, ids, ms), hojeD = N().hoje();
        if (rp && mid && rp.mids.includes(mid) && !(h && h.mid === mid && h.iniciadaDia === hojeD)) {
          const cd = await this.casaDoc(s), ini = (cd.sessoes || {})[hojeD], lim = this.casaLimite();
          if (ini && ms > ini + lim) return { aberta: false, casaFim: true, ini, lim, repo: rp };
          return { aberta: true, casa: true, repo: rp, ini: ini || 0, lim, videoVisto: !!(cd.videos || {})[mid] };
        } }
      // liberado só para ele: se o professor escolheu a missão, só ela (e a missão de hoje da turma) abre (12/11/2026)
      // 24/11/2026 (aluno liberado continuava bloqueado): a liberação individual vem ANTES da turma "🔒 fechada"
      // (aula finalizada), da sala de espera e da aula não iniciada — o professor liberou ESTE aluno de propósito
      const lib1 = ids.filter(id => ((lib.alunos || {})[id] || 0) > ms);
      if (lib1.length) {
        const so = lib1.map(id => (lib.alunosMissao || {})[id]).filter(Boolean);
        if (!so.length || lib1.length > so.length) return { aberta: true };            // liberado sem missão escolhida = todas
        if (!mid || so.includes(mid) || (h && h.mid === mid)) return { aberta: true };
        return { aberta: false, so: so[0], hoje: h && h.travar ? h : null };
      }
      if ((g.travaHorario || modoAula) && lib.fechadaAte && ms < lib.fechadaAte) return { aberta: false, fechada: true };
      if (modoAula) {
        if (lib.ate && ms < lib.ate) return { aberta: true };
        const iniciada = h && h.iniciadaDia === N().hoje();
        if (!iniciada) return { aberta: false, aguardando: true };
        // 🚦 Sala de espera (20/11/2026): aula iniciada, mas as tarefas só abrem quando o professor der a 🏁 largada
        if (h.espera && !h.largadaEm) return { aberta: false, espera: true, hoje: h };
        // ⏰ fim automático (14/11/2026): sem o 🏁 Finalizar, as tarefas fecham sozinhas no fim do horário da aula
        //    (+ tolerância). Aula iniciada fora do horário (reposição) dura o tempo de uma aula a partir do início.
        const t = P.turma(tAula), dur = (P.catalogo.duracaoAula || 75) * 60000, tl = (P.catalogo.toleranciaTarefas || 15) * 60000;
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
