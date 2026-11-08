/* Impressão digital da resposta da prova (a mesma conta no portal, no painel e no gerador). */
(function (raiz) {
  function provaHash(aid, qid, resposta) {
    const str = "JK-prova|" + aid + "|" + qid + "|" + String(resposta).normalize("NFC").trim();
    let h1 = 0xdeadbeef ^ 7, h2 = 0x41c6ce57 ^ 7;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  if (typeof module !== "undefined" && module.exports) module.exports = provaHash;
  else { raiz.PORTAL = raiz.PORTAL || {}; raiz.PORTAL.provaHash = provaHash; }
})(typeof window !== "undefined" ? window : this);
