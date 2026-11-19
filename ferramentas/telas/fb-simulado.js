(function(){
const store = window.__store = {};   // path -> data
const user = { uid: "prof", email: "professorwelingtonlaignier@gmail.com", isAnonymous: false, displayName: "Prof" };
function docRef(path){ return {
  id: path.split("/").pop(), path,
  get: async () => ({ exists: path in store, id: path.split("/").pop(), data: () => store[path] ? JSON.parse(JSON.stringify(store[path])) : undefined }),
  set: async (o, opt) => { store[path] = (opt && opt.merge && store[path]) ? deepMerge(store[path], o) : JSON.parse(JSON.stringify(o)); },
  update: async o => { store[path] = deepMerge(store[path] || {}, o); },
  delete: async () => { delete store[path]; },
  onSnapshot: (cb) => { (async () => cb(await docRef(path).get()))(); return () => {}; },
  collection: c => colRef(path + "/" + c)
};}
function deepMerge(a, b){ const r = JSON.parse(JSON.stringify(a || {})); for (const k in b){ const v = b[k]; if (v && typeof v === "object" && !Array.isArray(v) && !v.__fv) r[k] = deepMerge(r[k] || {}, v); else if (v && v.__fv === "del") delete r[k]; else if (v && v.__fv) r[k] = v.val; else r[k] = v; } return r; }
function colRef(cpath, filtros = []){ const q = {
  doc: id => docRef(cpath + "/" + (id || ("auto" + Math.random().toString(36).slice(2,8)))),
  add: async o => { const r = q.doc(); await r.set(o); return r; },
  where: (f, op, v) => colRef(cpath, filtros.concat([[f, op, v]])),
  orderBy: () => q, limit: () => q,
  get: async () => { const docs = Object.keys(store).filter(p => p.startsWith(cpath + "/") && p.slice(cpath.length + 1).indexOf("/") < 0).map(p => ({ id: p.split("/").pop(), ref: docRef(p), exists: true, data: () => JSON.parse(JSON.stringify(store[p])) })).filter(d => filtros.every(([f, op, v]) => { const x = d.data()[f]; return op === "==" ? x === v : op === "in" ? v.includes(x) : op === "array-contains" ? (x || []).includes(v) : true; })); return { docs, empty: !docs.length, size: docs.length, forEach: fn => docs.forEach(fn) }; },
  onSnapshot: cb => { (async () => cb(await q.get()))(); return () => {}; }
}; return q; }
const fs = { collection: c => colRef(c), batch: () => { const ops = []; return { set: (r, o, opt) => ops.push(() => r.set(o, opt)), update: (r, o) => ops.push(() => r.update(o)), delete: r => ops.push(() => r.delete()), commit: async () => { for (const f of ops) await f(); } }; }, runTransaction: async fn => fn({ get: r => r.get(), set: (r, o, opt) => r.set(o, opt), update: (r, o) => r.update(o) }) };
const auth = { currentUser: user, setPersistence: async () => {}, onAuthStateChanged: cb => { setTimeout(() => cb(user)); return () => {}; }, signOut: async () => {}, signInAnonymously: async () => ({ user }) };
window.firebase = { initializeApp: () => ({ auth: () => auth, firestore: () => fs }),
  auth: Object.assign(() => auth, { Auth: { Persistence: { SESSION: "session" } }, GoogleAuthProvider: function(){} }),
  firestore: Object.assign(() => fs, { FieldValue: { serverTimestamp: () => Date.now(), increment: n => ({ __fv: "inc", val: n }), arrayUnion: (...a) => ({ __fv: "u", val: a }), delete: () => ({ __fv: "del" }) }, Timestamp: { now: () => ({ toMillis: () => Date.now() }) } }) };
})();
