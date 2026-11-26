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
  const restaurados = {}, enviados = {}, jaOk = {};
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
    if (snap.exists) {
      const d = snap.data();
      if (!d.ativo || d.turma !== turmaId) return null;
      return { acessoId: id, alunoId: d.alunoId, nome: d.nome || "", trilha: !!d.trilha, turma: turmaId, serie: d.serie || "" };   // 🎒 serie: só nos Agregados (26/11/2026)
    }
    // 🏫 18/11/2026: o aluno escolheu a turma onde ASSISTE à aula, mas o código é da turma dele. Procura o código nas outras
    //    turmas da mesma série e aceita se o professor marcou que ele frequenta esta turma (config/liberar_<turma dele>.outra)
    const tt = P.turma && P.turma(turmaId); if (!tt) return null;
    const serie = (P.catalogo.series || []).find(x => x.turmas.some(y => y.id === turmaId)); if (!serie) return null;
    for (const y of serie.turmas) {
      if (y.id === turmaId) continue;
      const sn = await app(i).db.collection("acessos").doc(y.id + "_" + codigo).get().catch(() => null);
      if (!sn || !sn.exists) continue;
      const d = sn.data(); if (!d.ativo || d.turma !== y.id) continue;
      const lb = await app(i).db.collection("config").doc("liberar_" + y.id).get().catch(() => null);
      if (lb && lb.exists && ((lb.data().outra || {})[d.alunoId]) === turmaId) return { acessoId: y.id + "_" + codigo, alunoId: d.alunoId, nome: d.nome || "", trilha: !!d.trilha, turma: y.id, assiste: turmaId };
    }
    return null;
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
    // dias[dia] = última entrada do dia; entradas[dia] = todas as entradas do dia (📄 relatório do aluno, 18/11/2026)
    const ag = Date.now();
    await ref.set({ alunoId, turma: turmaId, tipo: "entrada", dias: { [dia]: ag }, entradas: { [dia]: { [String(ag)]: true } }, atualizado: N.FV.serverTimestamp() }, { merge: true });
  }

  /* 🔐 UM COMPUTADOR POR VEZ (20/11/2026, pedido do professor): o mesmo código não pode ficar aberto em dois computadores
     ao mesmo tempo (evita o "espertinho" que entra com o código do colega para errar as questões por ele).
     progresso/<aluno>_sessao = { uid (navegador dono), ping (hora do servidor, renovada a cada 60 s), pc, tentativas }.
     Quem entra primeiro fica; outro computador só entra se o primeiro ficar 2,5 min sem sinal (aba fechada, PC desligado)
     ou se o professor liberar no painel (config/liberar_<turma>.sessaoLivre[aluno]). Tudo pela hora do servidor. */
  const ms = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;
  const VIVO = 150000;
  // 💻 número do computador da sala (20/11/2026): o atalho da área de trabalho de cada PC abre o portal com ?pc=N
  //    (ex.: …/?pc=6) e o número fica guardado neste navegador; sem número, vale um código aleatório de 4 letras.
  //    Também vale digitar uma vez …/#/pc/6 (o "#" passa por qualquer redirecionamento do endereço curto professorwell.com.br).
  try { const q = new URLSearchParams(location.search).get("pc"); if (q && /^\d{1,2}$/.test(q)) localStorage.setItem("portalJK:pc", "PC" + (+q));
    const hm = location.hash.match(/^#\/?pc[=\/](\d{1,2})$/i); if (hm) { localStorage.setItem("portalJK:pc", "PC" + (+hm[1])); history.replaceState(null, "", location.pathname + location.search + "#/");
      setTimeout(() => { try { P.toast && P.toast("💻 Este computador agora é o PC " + (+hm[1]) + ". Pode fechar e entrar normalmente."); } catch (e) {} }, 1200); } } catch (e) {}
  const pcId = () => { try { let k = localStorage.getItem("portalJK:pc"); if (!k) { k = Math.random().toString(36).slice(2, 6).toUpperCase(); localStorage.setItem("portalJK:pc", k); } return k; } catch (e) { return "?"; } };
  N.sessaoChecar = async function (i, alunoId, turmaId) {
    const x = app(i), u = x.auth.currentUser, ref = x.db.collection("progresso").doc(alunoId + "_sessao");
    await ref.set({ alunoId, turma: turmaId, tipo: "sessao", agora: N.FV.serverTimestamp() }, { merge: true });
    const [sn, lb] = await Promise.all([ref.get(), x.db.collection("config").doc("liberar_" + turmaId).get().catch(() => null)]);
    const d = sn.exists ? sn.data() : {}, agora = ms(d.agora), livre = ms(((lb && lb.exists && lb.data().sessaoLivre) || {})[alunoId]);
    const liberado = livre && agora - livre < 600000 && agora - livre > -60000;   // a liberação do professor vale 10 min
    const outro = d.uid && u && d.uid !== u.uid && d.pc !== pcId() && agora - ms(d.ping) < VIVO && !liberado;
    if (outro) { await ref.set({ bloqueio: { em: N.FV.serverTimestamp(), pc: pcId(), pcDono: d.pc || "?" }, tentativas: N.FV.increment(1) }, { merge: true }).catch(() => {}); return { ok: false }; }
    await ref.set({ uid: u.uid, ping: N.FV.serverTimestamp(), pc: pcId(), bloqueio: null }, { merge: true });
    return { ok: true };
  };
  let vigia = null;
  N.sessaoVigiar = function (s, aoSair) {
    if (!s || !s.nuvem || !(s.alunoIds || []).length) return;
    const chave = s.alunoIds.join("+") + s.entrou; if (vigia && vigia.chave === chave) return;
    if (vigia) vigia.parar();
    // o sinal só é renovado se o código ainda é deste navegador (transação): um computador que voltou do "sono" não toma de volta
    const unsubs = [], ping = () => s.alunoIds.forEach((id, i) => { const u = app(i).auth.currentUser; if (!u) return; const db = app(i).db, ref = db.collection("progresso").doc(id + "_sessao");
      db.runTransaction(async t => { const sn = await t.get(ref), d = sn.exists ? sn.data() : {};
        if (d.uid && d.uid !== u.uid) return false;
        t.set(ref, { alunoId: id, turma: s.turma, tipo: "sessao", uid: u.uid, ping: N.FV.serverTimestamp(), pc: pcId() }, { merge: true }); return true;
      }).then(ok => { if (ok === false && vigia && vigia.chave === chave) { vigia.parar(); aoSair && aoSair(); } }).catch(() => {}); });
    ping(); const iv = setInterval(ping, 60000);
    s.alunoIds.forEach((id, i) => { try { unsubs.push(app(i).db.collection("progresso").doc(id + "_sessao").onSnapshot(sn => {
      const d = sn.exists ? sn.data() : {}, u = app(i).auth.currentUser;
      if (d.uid && u && d.uid !== u.uid && vigia && vigia.chave === chave) { vigia.parar(); aoSair && aoSair(); } }, () => {})); } catch (e) {} });
    vigia = { chave, parar: () => { clearInterval(iv); unsubs.forEach(f => { try { f(); } catch (e) {} }); vigia = null; } };
  };
  N.sessaoSoltar = async function (s) {   // ao clicar em Sair: libera o código na hora
    if (vigia) vigia.parar();
    if (!s || !s.nuvem) return;
    await Promise.all((s.alunoIds || []).map((id, i) => app(i).db.collection("progresso").doc(id + "_sessao").set({ alunoId: id, turma: s.turma, tipo: "sessao", ping: 0 }, { merge: true }).catch(() => {})));
  };
  N.pcId = pcId;

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
      // ♾️ 26/11/2026: o Laboratório sem fim não tem "status" (é sem fim); antes ficava de fora e o XP dele não chegava ao painel, ao placar nem ao pódio
      (pg.atividades || []).forEach(at => { const st = prog.atv[at.id]; if (st && (st.status || (at.tipo === "lab" && (st.tot || st.xp)))) atv[at.id] = st; });
    });
    // 🌟 Vez da Helena (25/11/2026): as cartas não são atividades da página; vão junto pelo prefixo "<missão>-hz-"
    Object.keys(prog.atv || {}).forEach(k => { if (k.indexOf(mid + "-hz-") === 0 && prog.atv[k] && prog.atv[k].status) atv[k] = prog.atv[k]; });
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
      let xpVisto = null; try { if (P.podio && P.podio.xpDoc) xpVisto = P.podio.xpDoc(aid, m.id, prog.atv || {}); } catch (e) {}
      const assinatura = JSON.stringify([r, st, xpVisto]);
      if (enviados[chave] === assinatura) continue;
      const okB = !!st.basicoOk;   // 🎯 21/11/2026: no modelo em espiral, o visto pede o aproveitamento mínimo (statusMissao)
      for (let i = 0; i < s.alunoIds.length; i++) {
        const alunoId = s.alunoIds[i];
        const ref = app(i).db.collection("progresso").doc(alunoId + "_" + aid + "_" + m.id);
        if (!okB && m.id !== "rc" && jaOk[chave + alunoId] === undefined) { try { const sn = await ref.get(); jaOk[chave + alunoId] = !!(sn.exists && sn.data().basicoOk); } catch (e) { jaOk[chave + alunoId] = true; } }
        await ref.set(limpo({
          alunoId, turma: s.turma, aid, mid: m.id, unidade: ap.unidade || "", ano: new Date().getFullYear(),
          leitura: st.leitura, basico: st.basico, ...(st.aprov != null ? { basicoAprov: Math.round(st.aprov * 100), basicoLimiar: Math.round(st.limiar * 100) } : {}), desafio: st.desafio, turbo: st.turbo, revisao: st.revisao,
          // 🔒 o visto não volta atrás (17/11/2026): se entrar tarefa obrigatória nova numa missão já concluída, quem já tinha
          //    o Básico continua com ele (só grava basicoOk:false em quem nunca concluiu)
          ...(okB || m.id === "rc" || !jaOk[chave + alunoId] ? { basicoOk: m.id === "rc" ? false : okB } : {}), atv: JSON.stringify(r.atv), vis: r.vis,  // atv em texto: o Firestore não aceita listas dentro de listas
          ...(m.id === "rc" && Array.isArray(P.recMissoes) && P.notaRecuperacao ? (x => x ? { notaRec: x.nota, recFeitas: x.feitas, recTotal: x.total, recMissoes: P.recMissoes } : {})(P.notaRecuperacao(aid)) : {}),
          dupla: s.alunoIds.length > 1 ? s.alunoIds.filter(x => x !== alunoId) : [],
          // 🏆 26/11/2026: o XP da missão exatamente como a barra do aluno mostra; o placar, o Ao vivo e o pódio usam este número
          ...(xpVisto != null ? { xp: xpVisto } : {}),
          dias: { [dia]: Date.now() }, atualizado: Date.now()
        }), { merge: true });
        if (okB && m.id !== "rc") await ref.set({ basicoOkEm: { [dia]: Date.now() } }, { merge: true });
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
        if (st && !st.status && loc && (loc.tot || 0) >= (st.tot || 0)) return;   // ♾️ laboratório: fica o que tem mais respostas (não volta atrás)
        if (!loc || !loc.status || ((st.quando || 0) > (loc.quando || 0) && st.status)) { prog.atv[id] = st; mudou = true; }
      });
      Object.entries(d.vis || {}).forEach(([pg, t]) => { if (!prog.visitas[mid + "/" + pg]) { prog.visitas[mid + "/" + pg] = t; mudou = true; } });
    });
    restaurados[chave] = true;
    if (mudou) P.setProg(aid, prog, true);
  };
})();
