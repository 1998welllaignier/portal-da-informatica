/* ============================================================
   NUVEM — login dos alunos por código e registro automático
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   Usa o Firebase (plano gratuito). Os nomes e os códigos dos
   alunos NÃO ficam neste repositório: ficam só no banco de dados,
   protegido pelas regras de segurança (veja docs/firestore.rules).
   Sem internet, o portal continua funcionando no modo antigo
   (nome digitado, progresso só no navegador).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};

  const CONFIG = {
    apiKey: "AIzaSyCc3PtZ_gnHJgzwHR55xD3VcnCImTYvtBk",
    authDomain: "portal-da-informatica.firebaseapp.com",
    projectId: "portal-da-informatica",
    storageBucket: "portal-da-informatica.firebasestorage.app",
    messagingSenderId: "826782703812",
    appId: "1:826782703812:web:d97d4da2a86970fc1ce991"
  };
  const EMAIL_PROFESSOR = "professorwelingtonlaignier@gmail.com";

  const N = P.nuvem = { pronto: false, erro: null, EMAIL_PROFESSOR };
  if (typeof firebase === "undefined" || !firebase.initializeApp) { N.erro = "sem-sdk"; return; }

  /* Um "app" por aluno: o aluno 1 usa o app principal; o colega da dupla usa o app "dupla".
     Cada um tem a sua entrada anônima, a sua sessão e grava só o próprio progresso. */
  const apps = [];
  function app(i) {
    if (apps[i]) return apps[i];
    const a = i === 0 ? firebase.initializeApp(CONFIG) : firebase.initializeApp(CONFIG, "dupla" + i);
    const auth = a.auth();
    // a entrada vale só enquanto a aba estiver aberta (computadores compartilhados)
    const pronto = auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(() => null);
    apps[i] = { a, auth, db: a.firestore(), pronto };
    return apps[i];
  }
  try { app(0); N.pronto = true; } catch (e) { N.erro = e.message; return; }
  N.app = app;
  N.db = () => app(0).db;
  N.auth = () => app(0).auth;
  N.FV = firebase.firestore.FieldValue;

  const hoje = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  N.hoje = hoje;
  const restaurados = {}, enviados = {};
  const limpo = o => JSON.parse(JSON.stringify(o == null ? null : o));
  const esperarAuth = auth => new Promise(ok => { const u = auth.onAuthStateChanged(x => { u(); ok(x); }); });

  async function anonimo(i) {
    const x = app(i); await x.pronto;
    const atual = await esperarAuth(x.auth);
    if (atual && atual.isAnonymous) return atual;
    if (atual) await x.auth.signOut();
    const r = await x.auth.signInAnonymously();
    return r.user;
  }

  /* 1) Confere o código: devolve { acessoId, alunoId, nome } ou null */
  N.conferirCodigo = async function (i, turmaId, codigo) {
    await anonimo(i);
    const id = turmaId + "_" + codigo;
    const snap = await app(i).db.collection("acessos").doc(id).get();
    if (!snap.exists) return null;
    const d = snap.data();
    if (!d.ativo || d.turma !== turmaId) return null;
    return { acessoId: id, alunoId: d.alunoId, nome: d.nome || "", trilha: !!d.trilha };
  };

  /* 2) O aluno confirmou "Sou eu": grava a sessão e a entrada do dia */
  N.confirmar = async function (i, info, turmaId) {
    const x = app(i);
    const u = await anonimo(i);
    await x.db.collection("sessoes").doc(u.uid).set({ acessoId: info.acessoId, alunoId: info.alunoId, turma: turmaId, criadoEm: N.FV.serverTimestamp() });
    await registrarEntrada(i, info.alunoId, turmaId);
  };
  async function registrarEntrada(i, alunoId, turmaId) {
    const ref = app(i).db.collection("progresso").doc(alunoId + "_entrada");
    const dia = hoje();
    await ref.set({ alunoId, turma: turmaId, tipo: "entrada", dias: { [dia]: Date.now() }, atualizado: N.FV.serverTimestamp() }, { merge: true });
  }

  /* A sessão do navegador ainda vale? (a aba pode ter sido fechada) */
  N.sessaoValida = async function (s) {
    if (!s || !s.nuvem) return true;
    try {
      for (let i = 0; i < s.alunoIds.length; i++) {
        const x = app(i); await x.pronto;
        const u = await esperarAuth(x.auth);
        if (!u) return false;
      }
      return true;
    } catch (e) { return false; }
  };

  N.sair = async function () {
    Object.keys(restaurados).forEach(k => delete restaurados[k]);
    Object.keys(enviados).forEach(k => delete enviados[k]);
    for (let i = 0; i < apps.length; i++) {
      try {
        const u = apps[i].auth.currentUser;
        if (u && u.isAnonymous) { await apps[i].db.collection("sessoes").doc(u.uid).delete().catch(() => null); await apps[i].auth.signOut(); }
      } catch (e) { /* segue */ }
    }
  };

  /* ---------------- progresso das missões ---------------- */
  // parte do progresso local que pertence a uma missão
  function recorte(aid, mid, prog) {
    const { pages } = P.montarMissao(aid, mid);
    const atv = {}, vis = {};
    pages.forEach(pg => {
      if (prog.visitas[mid + "/" + pg.id]) vis[pg.id.replace(/[^\w-]/g, "_")] = prog.visitas[mid + "/" + pg.id];
      (pg.atividades || []).forEach(at => { if (prog.atv[at.id] && prog.atv[at.id].status) atv[at.id] = prog.atv[at.id]; });
    });
    return { atv, vis };
  }

  const timers = {};
  N.agendar = function (aid) {
    const s = P.sess && P.sess.get();
    if (!s || !s.nuvem) return;
    clearTimeout(timers[aid]);
    timers[aid] = setTimeout(() => N.enviar(aid).catch(e => console.warn("nuvem:", e)), 1500);
  };

  N.enviar = async function (aid) {
    const s = P.sess.get(); if (!s || !s.nuvem) return;
    const C = P.conteudo[aid]; if (!C) return;
    const ap = P.apostila(aid) || {};
    const prog = P.getProg(aid);
    const dia = hoje();
    for (const m of C.missoes) {
      const r = recorte(aid, m.id, prog);
      if (!Object.keys(r.atv).length && !Object.keys(r.vis).length) continue;
      const st = P.statusMissao(aid, m.id);
      const chave = aid + "/" + m.id;
      const assinatura = JSON.stringify([r, st]);
      if (enviados[chave] === assinatura) continue;
      const okB = !!(st.basico[1] && st.basico[0] === st.basico[1]);
      for (let i = 0; i < s.alunoIds.length; i++) {
        const alunoId = s.alunoIds[i];
        const ref = app(i).db.collection("progresso").doc(alunoId + "_" + aid + "_" + m.id);
        await ref.set(limpo({
          alunoId, turma: s.turma, aid, mid: m.id, unidade: ap.unidade || "", ano: new Date().getFullYear(),
          leitura: st.leitura, basico: st.basico, desafio: st.desafio, turbo: st.turbo, revisao: st.revisao,
          basicoOk: okB, atv: JSON.stringify(r.atv), vis: r.vis,  // atv em texto: o Firestore não aceita listas dentro de listas
          dupla: s.alunoIds.length > 1 ? s.alunoIds.filter(x => x !== alunoId) : [],
          dias: { [dia]: Date.now() }, atualizado: Date.now()
        }), { merge: true });
        if (okB) await ref.set({ basicoOkEm: { [dia]: Date.now() } }, { merge: true });
      }
      enviados[chave] = assinatura;
      N.ultimoEnvio = Date.now();
      document.dispatchEvent(new CustomEvent("nuvem:enviado", { detail: { aid, mid: m.id } }));
    }
  };

  /* Ao abrir uma apostila: traz da nuvem o que o aluno já fez em outro computador */
  N.restaurar = async function (aid) {
    const s = P.sess.get(); if (!s || !s.nuvem) return;
    const chave = s.alunoIds[0] + "|" + aid; if (restaurados[chave]) return;
    const C = P.conteudo[aid]; if (!C) return;
    const prog = P.getProg(aid);
    let mudou = false;
    const snaps = await Promise.all(C.missoes.map(m => app(0).db.collection("progresso").doc(s.alunoIds[0] + "_" + aid + "_" + m.id).get().catch(() => null)));
    snaps.forEach((sn, k) => {
      if (!sn || !sn.exists) return;
      const d = sn.data(), mid = C.missoes[k].id;
      let atv = {}; try { atv = typeof d.atv === "string" ? JSON.parse(d.atv) : (d.atv || {}); } catch (e) { atv = {}; }
      Object.entries(atv).forEach(([id, st]) => {
        const loc = prog.atv[id];
        if (!loc || !loc.status || ((st.quando || 0) > (loc.quando || 0) && st.status)) { prog.atv[id] = st; mudou = true; }
      });
      Object.entries(d.vis || {}).forEach(([pg, t]) => { if (!prog.visitas[mid + "/" + pg]) { prog.visitas[mid + "/" + pg] = t; mudou = true; } });
    });
    restaurados[chave] = true;
    if (mudou) P.setProg(aid, prog, true);
  };
})();
