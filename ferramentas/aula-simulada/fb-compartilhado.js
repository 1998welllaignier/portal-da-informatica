/* 🧪 Firebase de mentira COMPARTILHADO (turma simulada, 23/11/2026).
   Entra no lugar do firebase-app-compat.js (o Playwright troca o arquivo). Todas as páginas conectadas ao
   servidor da turma simulada (ferramentas/aula-simulada/servidor.js) veem os mesmos documentos, ao vivo.
   Papel da página: window.__fbPapel = "prof" (login Google do professor) ou "aluno" (entrada anônima). */
(function () {
  const CLI = Math.random().toString(36).slice(2, 10);
  const papel = window.__fbPapel || "aluno";
  const clone = o => o == null ? o : JSON.parse(JSON.stringify(o));
  let store = {};
  try { const x = new XMLHttpRequest(); x.open("GET", "/fb/tudo", false); x.send(); store = JSON.parse(x.responseText || "{}"); } catch (e) { console.warn("fb simulado: sem servidor", e); }
  const ouvintes = new Set();   // { tipo:"doc"|"col", path, filtros, cb }
  function notificar(path) { ouvintes.forEach(o => { try { if (o.tipo === "doc" ? o.path === path : path.startsWith(o.path + "/") && path.slice(o.path.length + 1).indexOf("/") < 0) o.dispara(); } catch (e) { console.warn(e); } }); }
  let fila = [], tm = null;
  function enviar(path, data) { fila.push({ path, data: data == null ? null : data }); if (!tm) tm = setTimeout(() => { const ops = fila; fila = []; tm = null;
    fetch("/fb/gravar", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ cli: CLI, ops }) }).catch(() => {}); }, 0); }
  try { const es = new EventSource("/fb/eventos"); es.onmessage = ev => { const m = JSON.parse(ev.data);
    if (m.tudo) { store = m.tudo; Object.keys(store).forEach(notificar); return; }
    if (m.cli === CLI) return; if (m.data == null) delete store[m.path]; else store[m.path] = m.data; notificar(m.path); }; } catch (e) {}

  const FV = { serverTimestamp: () => ({ __fv: "ts" }), increment: n => ({ __fv: "inc", val: n }), arrayUnion: (...a) => ({ __fv: "u", val: a }), arrayRemove: (...a) => ({ __fv: "r", val: a }), delete: () => ({ __fv: "del" }) };
  function resolve(atual, v) {
    if (v && typeof v === "object" && v.__fv) { if (v.__fv === "ts") return Date.now(); if (v.__fv === "inc") return (+atual || 0) + v.val; if (v.__fv === "u") return [...new Set([...(Array.isArray(atual) ? atual : []), ...v.val])];
      if (v.__fv === "r") return (Array.isArray(atual) ? atual : []).filter(x => !v.val.includes(x)); if (v.__fv === "del") return undefined; }
    if (v && typeof v === "object" && !Array.isArray(v)) { const r = {}; Object.keys(v).forEach(k => { const x = resolve(undefined, v[k]); if (x !== undefined) r[k] = x; }); return r; }
    return v;
  }
  function merge(a, b) { const r = clone(a || {}) || {};
    for (const k in b) { const v = b[k];
      if (v && typeof v === "object" && !Array.isArray(v) && !v.__fv) r[k] = merge(r[k] && typeof r[k] === "object" ? r[k] : {}, v);
      else { const x = resolve(r[k], v); if (x === undefined) delete r[k]; else r[k] = x; } }
    return r; }
  function expande(o) { const r = {}; for (const k in o) { const ps = k.split("."); let c = r; ps.slice(0, -1).forEach(p => { c = c[p] = c[p] || {}; }); c[ps[ps.length - 1]] = o[k]; } return r; }
  const snapDoc = path => ({ exists: path in store, id: path.split("/").pop(), ref: docRef(path), data: () => clone(store[path]) });
  function gravar(path, novo) { if (novo == null) delete store[path]; else store[path] = clone(novo); enviar(path, store[path]); notificar(path); }
  function docRef(path) { return {
    id: path.split("/").pop(), path,
    get: async () => snapDoc(path),
    set: async (o, opt) => gravar(path, opt && opt.merge ? merge(store[path], o) : resolve(undefined, clone2(o))),
    update: async o => gravar(path, merge(store[path] || {}, expande(o))),
    delete: async () => gravar(path, null),
    onSnapshot: (cb, err) => { const o = { tipo: "doc", path, dispara: () => cb(snapDoc(path)) }; ouvintes.add(o); setTimeout(o.dispara, 0); return () => ouvintes.delete(o); },
    collection: c => colRef(path + "/" + c) }; }
  const clone2 = o => { const r = {}; for (const k in o) r[k] = o[k]; return r; };
  const testa = (d, [f, op, v]) => { const x = f.split(".").reduce((a, k) => a == null ? a : a[k], d);
    return op === "==" ? x === v : op === "!=" ? x !== v : op === ">" ? x > v : op === ">=" ? x >= v : op === "<" ? x < v : op === "<=" ? x <= v : op === "in" ? v.includes(x) : op === "array-contains" ? Array.isArray(x) && x.includes(v) : true; };
  function colRef(cpath, filtros = [], lim = 0) { const q = {
    path: cpath, id: cpath.split("/").pop(),
    doc: id => docRef(cpath + "/" + (id || ("auto" + Math.random().toString(36).slice(2, 10)))),
    add: async o => { const r = q.doc(); await r.set(o); return r; },
    where: (f, op, v) => colRef(cpath, filtros.concat([[f, op, v]]), lim), orderBy: () => q, limit: n => colRef(cpath, filtros, n),
    get: async () => { let docs = Object.keys(store).filter(p => p.startsWith(cpath + "/") && p.slice(cpath.length + 1).indexOf("/") < 0).map(snapDoc).filter(s => filtros.every(f => testa(s.data(), f)));
      if (lim) docs = docs.slice(0, lim); return { docs, empty: !docs.length, size: docs.length, forEach: fn => docs.forEach(fn), docChanges: () => docs.map(d => ({ type: "added", doc: d })) }; },
    onSnapshot: (cb, err) => { let tm2 = null; const o = { tipo: "col", path: cpath, dispara: () => { clearTimeout(tm2); tm2 = setTimeout(async () => cb(await q.get()), 30); } }; ouvintes.add(o); o.dispara(); return () => ouvintes.delete(o); } }; return q; }
  const fs = { collection: c => colRef(c), doc: p => docRef(p),
    batch: () => { const ops = []; return { set: (r, o, opt) => ops.push(() => r.set(o, opt)), update: (r, o) => ops.push(() => r.update(o)), delete: r => ops.push(() => r.delete()), commit: async () => { for (const f of ops) await f(); } }; },
    runTransaction: async fn => fn({ get: r => r.get(), set: (r, o, opt) => r.set(o, opt), update: (r, o) => r.update(o) }), enablePersistence: async () => {} };
  function novoAuth() {
    let user = papel === "prof" ? { uid: "prof", email: "professorwelingtonlaignier@gmail.com", isAnonymous: false, displayName: "Prof. Welington" } : null;
    const obs = new Set();
    return { get currentUser() { return user; }, setPersistence: async () => {}, onAuthStateChanged: cb => { obs.add(cb); setTimeout(() => cb(user)); return () => obs.delete(cb); },
      signOut: async () => { user = null; obs.forEach(c => c(user)); }, signInAnonymously: async () => { user = { uid: "anon" + Math.random().toString(36).slice(2, 9), isAnonymous: true }; obs.forEach(c => c(user)); return { user }; },
      signInWithPopup: async () => ({ user }), getRedirectResult: async () => ({ user: null }) };
  }
  const apps = {};
  window.firebase = {
    initializeApp: (cfg, nome) => (apps[nome || "[DEFAULT]"] = apps[nome || "[DEFAULT]"] || (() => { const a = novoAuth(); return { auth: () => a, firestore: () => fs }; })()),
    auth: Object.assign(() => apps["[DEFAULT]"].auth(), { Auth: { Persistence: { SESSION: "session", LOCAL: "local" } }, GoogleAuthProvider: function () { this.setCustomParameters = () => {}; } }),
    firestore: Object.assign(() => fs, { FieldValue: FV, Timestamp: { fromMillis: ms => ({ toMillis: () => ms, seconds: ms / 1000 }), now: () => ({ toMillis: () => Date.now() }) } })
  };
  window.__fbStore = () => store;
})();
