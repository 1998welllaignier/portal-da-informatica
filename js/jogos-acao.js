/* 🕹️ JOGOS DE AÇÃO da Sala de espera: inspirados nos jogos que os alunos jogam no celular, mas com nome, desenho e regras
   nossos (tema de informática). Ver js/jogos-base.js. Professor Welington Laignier. */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {}, J = P.jogosEspera; if (!J) return;
  const R = n => Math.floor(Math.random() * n), rnd = (a, b) => a + Math.random() * (b - a);
  const hudTxt = (c, D, W, esq, dir) => { c.fillStyle = "rgba(255,255,255,.85)"; D.rr(c, 8, 8, W - 16, 34, 10); c.fill(); D.texto(c, 22, 25, esq, "#0f172a", 18, "left"); D.texto(c, W - 22, 25, dir, "#0f172a", 18, "right"); };
  function virus(c, x, y, r, cor, rot) {
    c.save(); c.translate(x, y); c.rotate(rot || 0); c.fillStyle = cor || "#16a34a"; c.strokeStyle = "#14532d"; c.lineWidth = 3;
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; c.beginPath(); c.moveTo(Math.cos(a) * r * .8, Math.sin(a) * r * .8); c.lineTo(Math.cos(a) * r * 1.3, Math.sin(a) * r * 1.3); c.stroke(); c.beginPath(); c.arc(Math.cos(a) * r * 1.3, Math.sin(a) * r * 1.3, r * .14, 0, 7); c.fill(); }
    c.beginPath(); c.arc(0, 0, r, 0, 7); c.fill(); c.stroke();
    c.fillStyle = "#fff"; c.beginPath(); c.arc(-r * .35, -r * .15, r * .22, 0, 7); c.arc(r * .35, -r * .15, r * .22, 0, 7); c.fill();
    c.fillStyle = "#000"; c.beginPath(); c.arc(-r * .3, -r * .1, r * .1, 0, 7); c.arc(r * .4, -r * .1, r * .1, 0, 7); c.fill();
    c.strokeStyle = "#000"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(-r * .6, -r * .5); c.lineTo(-r * .1, -r * .3); c.moveTo(r * .6, -r * .5); c.lineTo(r * .1, -r * .3); c.moveTo(-r * .35, r * .4); c.quadraticCurveTo(0, r * .2, r * .35, r * .4); c.stroke(); c.restore();
  }
  J.virus = virus;
  function cartao(c, D, x, y, e, rot, s) { c.save(); c.translate(x, y); c.rotate(rot || 0); s = s || 1; c.fillStyle = "#fff"; c.strokeStyle = "#2563eb"; c.lineWidth = 3; D.rr(c, -26 * s, -30 * s, 52 * s, 60 * s, 8); c.fill(); c.stroke(); D.emoji(c, 0, 0, e, 30 * s); c.restore(); }

  /* ---------------- ⚔️ Corta-Vírus (inspirado em Fruit Ninja) ---------------- */
  J.registrar({ id: "corta-virus", nome: "Corta-Vírus", ic: "⚔️", cat: "acao", controle: "🖱️ Segure o botão do mouse e arraste para cortar.",
    como: ["🦠 Vírus e arquivos voam pela tela.", "🖱️ Segure o botão do mouse e passe por cima dos VÍRUS para cortar.", "📄 NÃO corte os arquivos bons (fotos, músicas, textos)!", "❤️ Se cortar um arquivo ou deixar um vírus cair, perde uma vida. São 3."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#1e1b4b", "#312e81"); const y = 170 - Math.sin(Math.min(1, t / 1.6) * Math.PI) * 120; virus(c, 140, t < 1.7 ? y : 70, 22, "#22c55e", t);
      cartao(c, D, 250, 180 - Math.sin(Math.min(1, t / 2.4) * Math.PI) * 90, "🖼️", .2, .8);
      if (t > 1.1 && t < 2.2) { c.strokeStyle = "#e0f2fe"; c.lineWidth = 5; c.beginPath(); c.moveTo(80, 40); c.lineTo(D.lerp(80, 200, (t - 1.1) / .6), D.lerp(40, 110, (t - 1.1) / .6)); c.stroke(); }
      D.mao(c, t < 1.1 ? 80 : D.lerp(80, 200, (t - 1.1) / .6), t < 1.1 ? 40 : D.lerp(40, 110, (t - 1.1) / .6), t > 1.1 && t < 1.8); },
    criar(api) { const { W, H, D } = api; let obj = [], pedacos = [], rastro = [], t = 0, prox = .5, vidas = 3, pts = 0, fim = false, combo = 0, msgs = [];
      const lanca = () => { const ruim = Math.random() < .68; const x = rnd(120, W - 120); obj.push({ x, y: H + 30, vx: rnd(-90, 90) + (x < W / 2 ? 60 : -60), vy: -rnd(470, 600), r: 28, ruim, e: ["🖼️", "🎵", "📄", "🎬", "📁"][R(5)], rot: 0, vr: rnd(-3, 3), cor: ["#22c55e", "#a855f7", "#ef4444", "#f97316"][R(4)] }); };
      const corta = (x1, y1, x2, y2) => { for (const o of obj) { if (o.morto) continue; const dx = x2 - x1, dy = y2 - y1, L = dx * dx + dy * dy || 1, k = Math.max(0, Math.min(1, ((o.x - x1) * dx + (o.y - y1) * dy) / L)), px = x1 + k * dx, py = y1 + k * dy;
        if (Math.hypot(o.x - px, o.y - py) < o.r + 6) { o.morto = true; if (o.ruim) { pts++; combo++; pedacos.push({ x: o.x, y: o.y, vx: -80, vy: -100, cor: o.cor, r: o.r, rot: o.rot }, { x: o.x, y: o.y, vx: 80, vy: -100, cor: o.cor, r: o.r, rot: o.rot }); msgs.push({ x: o.x, y: o.y, s: "+1", t: .7 }); if (pts % 3 === 0) api.ponto(); }
          else { vidas--; msgs.push({ x: o.x, y: o.y, s: "❌ era um arquivo bom!", t: 1.2 }); if (vidas <= 0) { fim = true; api.fim(pts); } } } } };
      return {
        update(dt) { if (fim) return; t += dt; prox -= dt; if (prox <= 0) { prox = Math.max(.45, 1.2 - pts * .015); lanca(); if (pts > 10 && Math.random() < .3) lanca(); }
          obj.forEach(o => { o.x += o.vx * dt; o.y += o.vy * dt; o.vy += 520 * dt; o.rot += o.vr * dt; });
          obj = obj.filter(o => { if (o.morto) return false; if (o.y > H + 60 && o.vy > 0) { if (o.ruim) { vidas--; msgs.push({ x: o.x, y: H - 40, s: "💔 o vírus escapou", t: 1 }); if (vidas <= 0 && !fim) { fim = true; api.fim(pts); } } return false; } return true; });
          pedacos.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 600 * dt; }); pedacos = pedacos.filter(p => p.y < H + 60);
          rastro = rastro.filter(r => (r.t -= dt) > 0); msgs = msgs.filter(m => (m.t -= dt) > 0); },
        draw(c) { D.fundo(c, W, H, "#1e1b4b", "#312e81"); c.fillStyle = "rgba(255,255,255,.05)"; for (let i = 0; i < 12; i++) c.fillRect(i * 70, 0, 2, H);
          obj.forEach(o => o.ruim ? virus(c, o.x, o.y, o.r, o.cor, o.rot) : cartao(c, D, o.x, o.y, o.e, o.rot));
          pedacos.forEach(p => { c.save(); c.globalAlpha = .7; virus(c, p.x, p.y, p.r * .7, p.cor, p.rot); c.restore(); });
          if (rastro.length > 1) { c.strokeStyle = "#e0f2fe"; c.lineCap = "round"; for (let i = 1; i < rastro.length; i++) { c.lineWidth = 8 * rastro[i].t / .25; c.beginPath(); c.moveTo(rastro[i - 1].x, rastro[i - 1].y); c.lineTo(rastro[i].x, rastro[i].y); c.stroke(); } }
          msgs.forEach(m => D.texto(c, m.x, m.y - (1 - m.t) * 30, m.s, "#fde68a", 18));
          hudTxt(c, D, W, `🦠 ${pts} vírus cortados`, "❤️".repeat(Math.max(0, vidas)) + "🖤".repeat(Math.max(0, 3 - vidas))); },
        move(x, y, apertado) { if (!apertado || fim) return; const u = rastro[rastro.length - 1]; rastro.push({ x, y, t: .25 }); if (u) corta(u.x, u.y, x, y); },
        desce(x, y) { rastro = [{ x, y, t: .25 }]; }
      }; } });

  /* ---------------- 🏃 Corrida no Cabo (inspirado em Subway Surfers) ---------------- */
  J.registrar({ id: "corrida-cabo", nome: "Corrida no Cabo", ic: "🏃", cat: "acao", controle: "⌨️ Setas ⬅️ ➡️ para trocar de faixa e ⬆️ para pular.",
    como: ["🏃 O seu avatar corre dentro do cabo de rede!", "⬅️ ➡️ Use as setas para trocar de faixa.", "⬆️ Aperte a seta para cima para PULAR os bugs 🐛.", "📦 Pegue os pacotes de dados. Bateu no muro 🧱? Fim de jogo!"],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#0c4a6e", "#0369a1"); c.fillStyle = "#1e293b"; c.beginPath(); c.moveTo(150, 40); c.lineTo(210, 40); c.lineTo(330, H); c.lineTo(30, H); c.fill();
      c.strokeStyle = "#38bdf8"; c.lineWidth = 2; [170, 190].forEach(x => { c.beginPath(); c.moveTo(x, 40); c.lineTo(30 + (x - 150) * 5, H); c.stroke(); });
      const lane = t < 1.5 ? 1 : 2, px = [80, 180, 280][lane]; D.emoji(c, 280, D.lerp(60, 150, (t % 2) / 2), "📦", 22); D.emoji(c, px, 180 - (t > 2.6 && t < 3.3 ? 40 : 0), "🏃", 40);
      D.tecla(c, 300, 20, t < 1.5 ? "⬆️" : "➡️", (t > 1.2 && t < 1.5) || (t > 2.6 && t < 2.9), 40); },
    criar(api) { const { W, H, D } = api; let lane = 1, alvoX = 1, pulo = 0, z = 0, vel = 9, obj = [], prox = 1.2, pts = 0, dist = 0, fim = false, img = null, msgs = [], ultPonto = 0;
      J.imagemAvatar(api.avatar, 120).then(i => img = i);
      const HZ = 120, persp = zz => 1 / (1 + zz * .12);          // zz: distância (0 = no jogador)
      const tela = (ln, zz) => { const k = persp(zz), y = HZ + (H - 40 - HZ) * k, cx = W / 2 + (ln - 1) * 170 * k; return { x: cx, y, k }; };
      return {
        update(dt) { if (fim) return; vel = 9 + Math.min(10, dist / 120); dist += vel * dt; pts = Math.floor(dist) + 0; prox -= dt;
          if (prox <= 0) { prox = Math.max(.45, 1.1 - dist / 900); const ln = R(3), tipo = Math.random() < .35 ? "pacote" : Math.random() < .5 ? "bug" : "muro"; obj.push({ ln, z: 30, tipo });
            if (tipo !== "pacote" && Math.random() < .35) obj.push({ ln: (ln + 1 + R(2)) % 3, z: 30, tipo: "pacote" }); }
          obj.forEach(o => o.z -= vel * dt); lane += (alvoX - lane) * Math.min(1, dt * 14); if (pulo > 0) pulo -= dt;
          for (const o of obj) { if (o.feito || o.z > .6 || o.z < -.6 || Math.round(lane) !== o.ln) continue;
            if (o.tipo === "pacote") { o.feito = true; dist += 10; msgs.push({ s: "📦 +10", t: .7 }); }
            else if (o.tipo === "bug" && pulo > 0) { o.feito = true; }
            else { fim = true; api.fim(pts); msgs.push({ s: o.tipo === "bug" ? "🐛 Faltou pular!" : "🧱 Bateu no muro!", t: 3 }); } }
          obj = obj.filter(o => o.z > -2 && !(o.feito && o.tipo === "pacote"));
          if (dist - ultPonto > 120) { ultPonto = dist; api.ponto(); } msgs = msgs.filter(m => (m.t -= dt) > 0); },
        draw(c) { D.fundo(c, W, H, "#0c4a6e", "#0ea5e9");
          c.fillStyle = "#0f172a"; c.beginPath(); const a = tela(-.5, 30), b = tela(2.5, 30), e = tela(2.5, 0), f = tela(-.5, 0); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.lineTo(e.x + 60, H); c.lineTo(f.x - 60, H); c.fill();
          c.strokeStyle = "#38bdf8"; c.lineWidth = 3; [.5, 1.5].forEach(l => { const p = tela(l, 30), q = tela(l, 0); c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(q.x, H); c.stroke(); });
          const fase = (dist * 2) % 2; for (let zz = fase; zz < 30; zz += 2) { const p = tela(-.5, zz), q = tela(2.5, zz); c.strokeStyle = "rgba(56,189,248,.25)"; c.lineWidth = 2 * p.k; c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(q.x, q.y); c.stroke(); }
          obj.slice().sort((x, y) => y.z - x.z).forEach(o => { if (o.z < -1) return; const p = tela(o.ln, Math.max(0, o.z)), s = 60 * p.k;
            if (o.tipo === "pacote") D.emoji(c, p.x, p.y - s * .6, "📦", s * .8);
            else if (o.tipo === "bug") D.emoji(c, p.x, p.y - s * .3, "🐛", s * .9);
            else { c.fillStyle = "#b91c1c"; c.fillRect(p.x - s * .8, p.y - s * 1.4, s * 1.6, s * 1.4); c.strokeStyle = "#7f1d1d"; c.lineWidth = 2; for (let i = 1; i < 4; i++) { c.beginPath(); c.moveTo(p.x - s * .8, p.y - s * 1.4 * i / 4); c.lineTo(p.x + s * .8, p.y - s * 1.4 * i / 4); c.stroke(); } D.texto(c, p.x, p.y - s * .7, "🧱", "#fff", s * .5); } });
          const p = tela(lane, 0), alt = pulo > 0 ? Math.sin((1 - pulo / .7) * Math.PI) * 90 : 0;
          c.fillStyle = "rgba(0,0,0,.3)"; c.beginPath(); c.ellipse(p.x, p.y - 4, 34, 10, 0, 0, 7); c.fill();
          if (img) { const ih = 90 * (img.height / img.width || 1.3); c.drawImage(img, p.x - 45, p.y - ih - alt, 90, ih); } else D.emoji(c, p.x, p.y - 50 - alt, "🏃", 80);
          msgs.forEach(m => D.texto(c, W / 2, 90 - (1 - Math.min(1, m.t)) * 20, m.s, "#fde68a", 26));
          hudTxt(c, D, W, `🏃 ${pts} metros`, "⬅️ ➡️ trocar faixa · ⬆️ pular"); },
        tecla(k, desce) { if (!desce || fim) return false; if (k === "ArrowLeft" || k === "a") alvoX = Math.max(0, alvoX - 1); else if (k === "ArrowRight" || k === "d") alvoX = Math.min(2, alvoX + 1); else if ((k === "ArrowUp" || k === " " || k === "w") && pulo <= 0) pulo = .7; else return false; },
        desce(x) { if (fim) return; const p = tela(lane, 0); if (Math.abs(x - p.x) < 60) { if (pulo <= 0) pulo = .7; } else alvoX = x < p.x ? Math.max(0, alvoX - 1) : Math.min(2, alvoX + 1); }
      }; } });

  /* ---------------- 📶 Voo do Wi-Fi (inspirado em Flappy Bird) ---------------- */
  function wifi(c, x, y, s, cor) { c.save(); c.translate(x, y); c.strokeStyle = cor || "#2563eb"; c.lineCap = "round"; c.lineWidth = 5 * s; [1, .66, .33].forEach(k => { c.beginPath(); c.arc(0, 8 * s, 26 * s * k, -Math.PI * .78, -Math.PI * .22); c.stroke(); }); c.fillStyle = cor || "#2563eb"; c.beginPath(); c.arc(0, 8 * s, 4 * s, 0, 7); c.fill(); c.restore(); }
  J.registrar({ id: "voo-wifi", nome: "Voo do Wi-Fi", ic: "📶", cat: "acao", controle: "🖱️ Clique ou aperte a barra de Espaço para subir.",
    como: ["📶 O sinal de Wi-Fi está voando!", "🖱️ Clique (ou aperte Espaço) para ele subir. Se não clicar, ele cai.", "🧱 Passe pelos buracos entre as paredes sem encostar.", "⭐ Cada parede que você passa vale 1 ponto."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#bae6fd", "#f0f9ff"); const x = 240 - t * 60; c.fillStyle = "#64748b"; c.fillRect(x, 0, 40, 70); c.fillRect(x, 150, 40, H); const y = 110 + Math.sin(t * 4) * 18; wifi(c, 110, y, 1); D.mao(c, 300, 170, Math.sin(t * 4) > .7); D.tecla(c, 230, 175, "Espaço", Math.sin(t * 4) > .7, 64); },
    criar(api) { const { W, H, D } = api; let y = H / 2, vy = 0, canos = [], prox = 0, pts = 0, fim = false, comecou = false, t = 0;
      const pula = () => { if (fim) return; comecou = true; vy = -330; };
      return {
        update(dt) { t += dt; if (fim || !comecou) return; vy += 900 * dt; y += vy * dt; prox -= dt; const v = 170 + Math.min(80, pts * 4);
          if (prox <= 0) { prox = 1.55; const vao = Math.max(130, 175 - pts * 2), cy = rnd(80 + vao / 2, H - 60 - vao / 2); canos.push({ x: W + 40, cy, vao }); }
          canos.forEach(p => { p.x -= v * dt; if (!p.ok && p.x + 40 < 160) { p.ok = true; pts++; if (pts % 2 === 0) api.ponto(); } });
          canos = canos.filter(p => p.x > -80);
          const bate = canos.some(p => 160 + 22 > p.x - 40 && 160 - 22 < p.x + 40 && (y - 18 < p.cy - p.vao / 2 || y + 18 > p.cy + p.vao / 2));
          if (bate || y > H - 30 || y < 0) { fim = true; api.fim(pts * 10); } },
        draw(c) { D.fundo(c, W, H, "#7dd3fc", "#f0f9ff"); c.fillStyle = "#86efac"; c.fillRect(0, H - 30, W, 30);
          canos.forEach(p => { c.fillStyle = "#475569"; c.fillRect(p.x - 40, 0, 80, p.cy - p.vao / 2); c.fillRect(p.x - 40, p.cy + p.vao / 2, 80, H); c.fillStyle = "#334155"; c.fillRect(p.x - 46, p.cy - p.vao / 2 - 18, 92, 18); c.fillRect(p.x - 46, p.cy + p.vao / 2, 92, 18);
            c.strokeStyle = "#64748b"; for (let yy = 20; yy < H; yy += 26) if (yy < p.cy - p.vao / 2 - 18 || yy > p.cy + p.vao / 2 + 18) { c.beginPath(); c.moveTo(p.x - 40, yy); c.lineTo(p.x + 40, yy); c.stroke(); } });
          c.save(); c.translate(160, y); c.rotate(Math.max(-.5, Math.min(.8, vy / 600))); wifi(c, 0, 0, 1.3); c.restore();
          if (!comecou) D.texto(c, W / 2, H / 2 + 80, "🖱️ Clique ou aperte Espaço para começar!", "#0f172a", 24);
          hudTxt(c, D, W, `📶 ${pts} paredes`, "🖱️ clique / Espaço = subir"); },
        tecla(k, desce) { if (desce && (k === " " || k === "ArrowUp")) pula(); else return false; },
        desce() { pula(); }
      }; } });

  /* ---------------- 🐍 Cobrinha dos Dados (inspirado em Snake) ---------------- */
  J.registrar({ id: "cobrinha", nome: "Cobrinha dos Dados", ic: "🐍", cat: "acao", controle: "⌨️ Use as setas ⬆️ ⬇️ ⬅️ ➡️.",
    como: ["🐍 A cobrinha anda sozinha.", "⌨️ Use as setas para mudar a direção.", "🔵 Coma os bits (0 e 1): a cobrinha cresce!", "💥 Não bata na parede nem no próprio corpo."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#ecfccb"); const n = Math.floor(t * 4); for (let i = 0; i < 5; i++) { c.fillStyle = i ? "#16a34a" : "#14532d"; c.fillRect(60 + ((n - i) % 9) * 22, 100, 20, 20); } D.texto(c, 60 + 7 * 22 + 10, 110, "1", "#2563eb", 18); D.tecla(c, 280, 150, "➡️", t % 1 < .3, 40); },
    criar(api) { const { W, H, D } = api; const C = 25, CW = Math.floor(W / C), CH = Math.floor((H - 50) / C); let cobra = [[5, 8], [4, 8], [3, 8]], dir = [1, 0], fila = [], comida, pts = 0, fim = false, acc = 0;
      const nova = () => { let p; do { p = [R(CW), R(CH)]; } while (cobra.some(s => s[0] === p[0] && s[1] === p[1])); comida = { p, b: R(2) }; }; nova();
      return {
        update(dt) { if (fim) return; acc += dt; const passo = Math.max(.06, .14 - pts * .003); if (acc < passo) return; acc = 0;
          if (fila.length) { const d = fila.shift(); if (d[0] !== -dir[0] || d[1] !== -dir[1]) dir = d; }
          const h = [cobra[0][0] + dir[0], cobra[0][1] + dir[1]];
          if (h[0] < 0 || h[1] < 0 || h[0] >= CW || h[1] >= CH || cobra.some(s => s[0] === h[0] && s[1] === h[1])) { fim = true; api.fim(pts * 10); return; }
          cobra.unshift(h); if (h[0] === comida.p[0] && h[1] === comida.p[1]) { pts++; if (pts % 3 === 0) api.ponto(); nova(); } else cobra.pop(); },
        draw(c) { c.fillStyle = "#14532d"; c.fillRect(0, 0, W, H); for (let x = 0; x < CW; x++) for (let y = 0; y < CH; y++) { c.fillStyle = (x + y) % 2 ? "#bbf7d0" : "#dcfce7"; c.fillRect(x * C, 50 + y * C, C, C); }
          c.fillStyle = "#2563eb"; D.rr(c, comida.p[0] * C + 2, 50 + comida.p[1] * C + 2, C - 4, C - 4, 6); c.fill(); D.texto(c, comida.p[0] * C + C / 2, 50 + comida.p[1] * C + C / 2 + 1, String(comida.b), "#fff", 16);
          cobra.forEach((s, i) => { c.fillStyle = i ? (i % 2 ? "#16a34a" : "#22c55e") : "#14532d"; D.rr(c, s[0] * C + 1, 50 + s[1] * C + 1, C - 2, C - 2, 7); c.fill(); });
          const h = cobra[0]; c.fillStyle = "#fff"; c.beginPath(); c.arc(h[0] * C + C / 2 + dir[0] * 4 - dir[1] * 5, 50 + h[1] * C + C / 2 + dir[1] * 4 - dir[0] * 5, 3, 0, 7); c.arc(h[0] * C + C / 2 + dir[0] * 4 + dir[1] * 5, 50 + h[1] * C + C / 2 + dir[1] * 4 + dir[0] * 5, 3, 0, 7); c.fill();
          hudTxt(c, D, W, `🐍 ${pts} bits comidos`, "⌨️ setas para virar"); },
        tecla(k, desce) { if (!desce) return false; const m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0], w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0] }[k]; if (!m) return false; if (fila.length < 3) fila.push(m); }
      }; } });

  /* ---------------- 🧱 Bloco a Bloco (inspirado em Tetris) ---------------- */
  const PECAS = [[[1, 1, 1, 1]], [[1, 1], [1, 1]], [[0, 1, 0], [1, 1, 1]], [[1, 0, 0], [1, 1, 1]], [[0, 0, 1], [1, 1, 1]], [[1, 1, 0], [0, 1, 1]], [[0, 1, 1], [1, 1, 0]]];
  const CORES = ["#06b6d4", "#eab308", "#a855f7", "#2563eb", "#f97316", "#ef4444", "#22c55e"];
  const gira = m => m[0].map((_, i) => m.map(l => l[i]).reverse());
  J.registrar({ id: "bloco-a-bloco", nome: "Bloco a Bloco", ic: "🧱", cat: "acao", controle: "⌨️ ⬅️ ➡️ mover · ⬆️ girar · ⬇️ descer · Espaço: cair de vez.",
    como: ["🧱 As peças caem de cima.", "⬅️ ➡️ Mova a peça. ⬆️ Gira a peça.", "⬇️ Desce mais rápido. Espaço: cai de uma vez.", "💾 Complete uma linha inteira: ela some e vira “arquivo salvo”!"],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#0f172a", "#1e293b"); const cs = 20, ox = 120; for (let x = 0; x < 6; x++) { c.fillStyle = x === 2 || x === 3 ? "#0f172a" : "#22c55e"; c.fillRect(ox + x * cs, 180, cs - 2, cs - 2); }
      const y = Math.min(140, 20 + t * 50); c.fillStyle = "#eab308"; [[2, 0], [3, 0], [2, 1], [3, 1]].forEach(([a, b]) => c.fillRect(ox + a * cs, y + b * cs, cs - 2, cs - 2)); D.tecla(c, 280, 80, "⬇️", t % 1 < .3, 40); if (t > 3) D.texto(c, W / 2, 30, "💾 Linha completa!", "#fde68a", 18); },
    criar(api) { const { W, H, D } = api; const C = 22, CW = 10, CH = 19, ox = (W - CW * C) / 2, oy = 20; let g = Array.from({ length: CH }, () => Array(CW).fill(0)), pc, px, py, cor, acc = 0, pts = 0, linhas = 0, fim = false, prox = R(7), flash = 0;
      const cabe = (m, x, y) => m.every((l, j) => l.every((v, i) => !v || (x + i >= 0 && x + i < CW && y + j < CH && (y + j < 0 || !g[y + j][x + i]))));
      const nova = () => { const k = prox; prox = R(7); pc = PECAS[k]; cor = k + 1; px = 3; py = -1; if (!cabe(pc, px, py + 1)) { fim = true; api.fim(pts); } };
      const fixa = () => { pc.forEach((l, j) => l.forEach((v, i) => { if (v && py + j >= 0) g[py + j][px + i] = cor; })); let n = 0; g = g.filter(l => { if (l.every(Boolean)) { n++; return false; } return true; });
        while (g.length < CH) g.unshift(Array(CW).fill(0)); if (n) { linhas += n; pts += [0, 10, 30, 60, 100][n]; flash = .6; api.ponto(); } nova(); };
      nova();
      return {
        update(dt) { if (fim) return; flash = Math.max(0, flash - dt); acc += dt; if (acc > Math.max(.12, .6 - linhas * .02)) { acc = 0; if (cabe(pc, px, py + 1)) py++; else fixa(); } },
        draw(c) { D.fundo(c, W, H, "#0f172a", "#1e293b"); c.fillStyle = "#020617"; c.fillRect(ox - 4, oy - 4, CW * C + 8, CH * C + 8);
          const bl = (x, y, k) => { c.fillStyle = CORES[k - 1]; c.fillRect(ox + x * C + 1, oy + y * C + 1, C - 2, C - 2); c.fillStyle = "rgba(255,255,255,.25)"; c.fillRect(ox + x * C + 1, oy + y * C + 1, C - 2, 5); };
          g.forEach((l, y) => l.forEach((v, x) => v && bl(x, y, v))); if (!fim) pc.forEach((l, j) => l.forEach((v, i) => v && py + j >= 0 && bl(px + i, py + j, cor)));
          D.texto(c, ox + CW * C + 90, 70, "Próxima:", "#e2e8f0", 16); PECAS[prox].forEach((l, j) => l.forEach((v, i) => { if (v) { c.fillStyle = CORES[prox]; c.fillRect(ox + CW * C + 50 + i * 20, 90 + j * 20, 18, 18); } }));
          D.texto(c, ox - 110, 70, `⭐ ${pts}`, "#fde68a", 24); D.texto(c, ox - 110, 105, `💾 ${linhas} linhas`, "#e2e8f0", 16);
          if (flash) D.texto(c, W / 2, H / 2, "💾 Arquivo salvo!", "#fde68a", 30); },
        tecla(k, desce) { if (!desce || fim) return false;
          if (k === "ArrowLeft" && cabe(pc, px - 1, py)) px--; else if (k === "ArrowRight" && cabe(pc, px + 1, py)) px++;
          else if (k === "ArrowDown") { if (cabe(pc, px, py + 1)) py++; } else if (k === "ArrowUp") { const r = gira(pc); if (cabe(r, px, py)) pc = r; else if (cabe(r, px - 1, py)) { pc = r; px--; } else if (cabe(r, px + 1, py)) { pc = r; px++; } }
          else if (k === " ") { while (cabe(pc, px, py + 1)) py++; fixa(); } else if (!["ArrowLeft", "ArrowRight"].includes(k)) return false; }
      }; } });

  /* ---------------- 🍬 Combina Ícones (inspirado em Candy Crush) ---------------- */
  const ICS = ["📁", "🖼️", "🎵", "📄", "💾", "🖱️"];
  J.registrar({ id: "combina-icones", nome: "Combina Ícones", ic: "🍬", cat: "acao", controle: "🖱️ Clique num ícone e depois no vizinho para trocar.",
    como: ["🍬 O tabuleiro está cheio de ícones.", "🖱️ Clique num ícone e depois num vizinho (do lado, em cima ou embaixo) para trocar os dois.", "✨ Formou 3 ou mais iguais em linha? Eles somem!", "🎯 Você tem 25 jogadas."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#fdf2f8"); const L = [["📁", "🎵", "📁"], ["🎵", "📁", "💾"], ["🖼️", "💾", "🎵"]]; const tr = t > 1.6; for (let y = 0; y < 3; y++) for (let x = 0; x < 3; x++) { let e = L[y][x]; if (tr && y === 0 && x === 1) e = "📁"; if (tr && y === 1 && x === 1) e = "🎵"; if (t > 2.6 && y === 0) continue; D.emoji(c, 120 + x * 60, 50 + y * 60, e, 36); }
      D.mao(c, t < 1 ? 180 : 180, t < 1 ? 115 : 55, (t > .6 && t < .9) || (t > 1.2 && t < 1.5)); },
    criar(api) { const { W, H, D } = api; const N = 8, C = 50, ox = (W - N * C) / 2, oy = 40; let g, sel = null, jog = 25, pts = 0, fim = false, anim = 0, msgs = [];
      const novo = () => ICS[R(ICS.length)];
      const acha = () => { const m = new Set(); for (let y = 0; y < N; y++) for (let x = 0; x < N - 2; x++) { const v = g[y][x]; if (v && v === g[y][x + 1] && v === g[y][x + 2]) { m.add(y * N + x); m.add(y * N + x + 1); m.add(y * N + x + 2); } }
        for (let x = 0; x < N; x++) for (let y = 0; y < N - 2; y++) { const v = g[y][x]; if (v && v === g[y + 1][x] && v === g[y + 2][x]) { m.add(y * N + x); m.add((y + 1) * N + x); m.add((y + 2) * N + x); } } return m; };
      const cai = () => { for (let x = 0; x < N; x++) { const col = []; for (let y = N - 1; y >= 0; y--) if (g[y][x]) col.push(g[y][x]); for (let y = N - 1, i = 0; y >= 0; y--, i++) g[y][x] = col[i] || novo(); } };
      do { g = Array.from({ length: N }, () => Array.from({ length: N }, novo)); } while (acha().size);
      const resolve = () => { let total = 0, m; while ((m = acha()).size) { total += m.size; m.forEach(k => g[Math.floor(k / N)][k % N] = null); cai(); } return total; };
      return {
        update(dt) { anim = Math.max(0, anim - dt); msgs = msgs.filter(x => (x.t -= dt) > 0); },
        draw(c) { D.fundo(c, W, H, "#fce7f3", "#fdf2f8"); c.fillStyle = "#fff"; D.rr(c, ox - 8, oy - 8, N * C + 16, N * C + 16, 14); c.fill();
          for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { if ((x + y) % 2) { c.fillStyle = "#fdf4ff"; c.fillRect(ox + x * C, oy + y * C, C, C); } if (sel && sel[0] === x && sel[1] === y) { c.fillStyle = "#fde68a"; D.rr(c, ox + x * C + 2, oy + y * C + 2, C - 4, C - 4, 8); c.fill(); } D.emoji(c, ox + x * C + C / 2, oy + y * C + C / 2 + 2, g[y][x], 32); }
          msgs.forEach(m => D.texto(c, W / 2, oy + N * C / 2 - (1 - m.t) * 40, m.s, "#be185d", 30));
          D.texto(c, ox - 90, 80, `⭐ ${pts}`, "#be185d", 26); D.texto(c, ox - 90, 120, `🎯 ${jog} jogadas`, "#0f172a", 16); },
        desce(mx, my) { if (fim) return; const x = Math.floor((mx - ox) / C), y = Math.floor((my - oy) / C); if (x < 0 || y < 0 || x >= N || y >= N) { sel = null; return; }
          if (!sel) { sel = [x, y]; return; } const [sx, sy] = sel; sel = null; if (Math.abs(sx - x) + Math.abs(sy - y) !== 1) { sel = [x, y]; return; }
          [g[sy][sx], g[y][x]] = [g[y][x], g[sy][sx]]; const n = resolve();
          if (!n) { [g[sy][sx], g[y][x]] = [g[y][x], g[sy][sx]]; msgs.push({ s: "Assim não forma 3 😉", t: .9 }); return; }
          jog--; pts += n * 5; if (n >= 4) msgs.push({ s: n >= 6 ? "🔥 Incrível!" : "✨ Muito bem!", t: .9 }); api.ponto(); if (jog <= 0) { fim = true; api.fim(pts); } }
      }; } });

  /* ---------------- 🔢 2048 dos Bytes ---------------- */
  J.registrar({ id: "2048-bytes", nome: "2048 dos Bytes", ic: "🔢", cat: "acao", controle: "⌨️ Use as setas ⬆️ ⬇️ ⬅️ ➡️.",
    como: ["🔢 As peças têm números: 2, 4, 8, 16…", "⌨️ As setas empurram TODAS as peças para um lado.", "➕ Duas peças iguais que se encontram viram uma só, com o dobro!", "🏆 Tente chegar a 1024 (1 KB = 1024 bytes)!"],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#faf5ff"); const x = t < 1 ? 110 : D.lerp(110, 230, Math.min(1, (t - 1) * 3)); const junta = t > 1.4;
      c.fillStyle = "#c4b5fd"; D.rr(c, x - 30, 80, 60, 60, 8); c.fill(); D.texto(c, x, 110, junta ? "" : "2", "#4c1d95", 26); c.fillStyle = junta ? "#8b5cf6" : "#c4b5fd"; D.rr(c, 200, 80, 60, 60, 8); c.fill(); D.texto(c, 230, 110, junta ? "4" : "2", junta ? "#fff" : "#4c1d95", 26); D.tecla(c, 290, 160, "➡️", t > .8 && t < 1.1, 40); },
    criar(api) { const { W, H, D } = api; const N = 4, C = 90, ox = (W - N * C) / 2, oy = 35; let g = Array.from({ length: N }, () => Array(N).fill(0)), pts = 0, fim = false, junt = 0, max = 2;
      const poe = () => { const v = []; g.forEach((l, y) => l.forEach((x, i) => !x && v.push([y, i]))); if (!v.length) return; const [y, x] = v[R(v.length)]; g[y][x] = Math.random() < .9 ? 2 : 4; };
      poe(); poe();
      const move = (dx, dy) => { let mudou = false; const ord = [0, 1, 2, 3]; const ys = dy > 0 ? ord.slice().reverse() : ord, xs = dx > 0 ? ord.slice().reverse() : ord; const feito = new Set();
        for (const y of ys) for (const x of xs) { if (!g[y][x]) continue; let cx = x, cy = y; while (true) { const nx = cx + dx, ny = cy + dy; if (nx < 0 || ny < 0 || nx >= N || ny >= N) break;
            if (!g[ny][nx]) { g[ny][nx] = g[cy][cx]; g[cy][cx] = 0; cx = nx; cy = ny; mudou = true; } else if (g[ny][nx] === g[cy][cx] && !feito.has(ny * N + nx)) { g[ny][nx] *= 2; g[cy][cx] = 0; feito.add(ny * N + nx); pts += g[ny][nx]; junt++; mudou = true; if (g[ny][nx] > max) { max = g[ny][nx]; } if (junt % 6 === 0) api.ponto(); break; } else break; } }
        if (mudou) poe(); const vazio = g.some(l => l.includes(0)), pode = g.some((l, y) => l.some((v, x) => (x < N - 1 && v === l[x + 1]) || (y < N - 1 && v === g[y + 1][x])));
        if (!vazio && !pode) { fim = true; api.fim(Math.round(pts / 4)); } };
      const cor = v => ["#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#f59e0b", "#d97706", "#16a34a"][Math.min(10, Math.log2(v) - 1)];
      return {
        draw(c) { D.fundo(c, W, H, "#faf5ff", "#f5f3ff"); c.fillStyle = "#4c1d95"; D.rr(c, ox - 8, oy - 8, N * C + 16, N * C + 16, 14); c.fill();
          g.forEach((l, y) => l.forEach((v, x) => { c.fillStyle = v ? cor(v) : "#6d28d9"; D.rr(c, ox + x * C + 4, oy + y * C + 4, C - 8, C - 8, 10); c.fill(); if (v) D.texto(c, ox + x * C + C / 2, oy + y * C + C / 2, v === 1024 ? "1 KB" : String(v), v <= 4 ? "#4c1d95" : "#fff", v >= 1000 ? 24 : 32); }));
          D.texto(c, ox - 110, 80, `⭐ ${pts}`, "#6d28d9", 24); D.texto(c, ox - 110, 115, `🏆 maior: ${max}`, "#0f172a", 16); D.texto(c, ox + N * C + 110, 80, "⌨️ setas", "#0f172a", 16); },
        tecla(k, desce) { if (!desce || fim) return false; const m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[k]; if (!m) return false; move(m[0], m[1]); }
      }; } });

  /* ---------------- 🧱 Quebra-Spam (inspirado em Breakout) ---------------- */
  J.registrar({ id: "quebra-spam", nome: "Quebra-Spam", ic: "📧", cat: "acao", controle: "🖱️ Mexa o mouse (ou ⬅️ ➡️) para mover a barra.",
    como: ["📧 Lá em cima tem blocos de SPAM (mensagens chatas).", "🖱️ Mexa o mouse para mover a barra embaixo.", "⚪ Rebata a bolinha para ela quebrar os blocos.", "❤️ Não deixe a bolinha cair! Você tem 3 vidas."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#0f172a", "#1e293b"); for (let i = 0; i < 6; i++) { if (t > 2 && i === 2) continue; c.fillStyle = ["#ef4444", "#f97316", "#eab308"][i % 3]; c.fillRect(30 + i * 52, 30, 48, 18); }
      const bx = 180 + Math.sin(t * 1.6) * 60, by = 150 - Math.abs(Math.sin(t * 1.6)) * 100; c.fillStyle = "#fff"; c.beginPath(); c.arc(bx, by, 7, 0, 7); c.fill(); c.fillStyle = "#38bdf8"; c.fillRect(bx - 40, 175, 80, 10); D.mao(c, bx, 190, false); },
    criar(api) { const { W, H, D } = api; let bx, by, vx, vy, px = W / 2, pw = 120, vidas = 3, pts = 0, fim = false, preso = true, blocos = [], nivel = 1, teclas = {};
      const monta = () => { blocos = []; for (let y = 0; y < 5; y++) for (let x = 0; x < 10; x++) blocos.push({ x: 30 + x * 74, y: 60 + y * 30, w: 70, h: 26, cor: ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"][y], vivo: true }); };
      const solta = () => { preso = false; const v = 330 + nivel * 30; vx = rnd(-.6, .6) * v; vy = -v; };
      monta(); bx = px; by = H - 60;
      return {
        update(dt) { if (fim) return; if (teclas.l) px -= 500 * dt; if (teclas.r) px += 500 * dt; px = Math.max(pw / 2, Math.min(W - pw / 2, px));
          if (preso) { bx = px; by = H - 52; return; } bx += vx * dt; by += vy * dt;
          if (bx < 8 || bx > W - 8) { vx = -vx; bx = Math.max(8, Math.min(W - 8, bx)); } if (by < 50) { vy = Math.abs(vy); }
          if (by > H - 48 && by < H - 30 && Math.abs(bx - px) < pw / 2 + 6 && vy > 0) { vy = -Math.abs(vy); vx = ((bx - px) / (pw / 2)) * 380; }
          for (const b of blocos) if (b.vivo && bx > b.x - 6 && bx < b.x + b.w + 6 && by > b.y - 6 && by < b.y + b.h + 6) { b.vivo = false; vy = -vy; pts++; if (pts % 5 === 0) api.ponto(); break; }
          if (blocos.every(b => !b.vivo)) { nivel++; monta(); preso = true; }
          if (by > H + 10) { vidas--; preso = true; if (vidas <= 0) { fim = true; api.fim(pts * 2); } } },
        draw(c) { D.fundo(c, W, H, "#0f172a", "#1e293b"); blocos.forEach(b => { if (!b.vivo) return; c.fillStyle = b.cor; D.rr(c, b.x, b.y, b.w, b.h, 5); c.fill(); D.texto(c, b.x + b.w / 2, b.y + b.h / 2, "SPAM", "rgba(0,0,0,.45)", 11); });
          c.fillStyle = "#38bdf8"; D.rr(c, px - pw / 2, H - 40, pw, 14, 7); c.fill(); c.fillStyle = "#fff"; c.beginPath(); c.arc(bx, by, 8, 0, 7); c.fill();
          if (preso && !fim) D.texto(c, W / 2, H / 2 + 60, "🖱️ Clique (ou Espaço) para lançar a bolinha", "#e2e8f0", 20);
          hudTxt(c, D, W, `📧 ${pts} spams quebrados · nível ${nivel}`, "❤️".repeat(Math.max(0, vidas))); },
        move(x) { px = x; }, desce() { if (preso && !fim) solta(); },
        tecla(k, desce) { if (k === "ArrowLeft") teclas.l = desce; else if (k === "ArrowRight") teclas.r = desce; else if (k === " " && desce && preso && !fim) solta(); else return false; }
      }; } });

  /* ---------------- 🫧 Bolhas de Pixels (inspirado em Bubble Shooter) ---------------- */
  const BC = ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7"];
  J.registrar({ id: "bolhas-pixels", nome: "Bolhas de Pixels", ic: "🫧", cat: "acao", controle: "🖱️ Mire com o mouse e clique para atirar.",
    como: ["🫧 Lá em cima tem bolhas coloridas (pixels).", "🖱️ Mire com o mouse e clique para atirar a bolha de baixo.", "✨ Junte 3 ou mais da mesma cor: elas estouram!", "⚠️ De vez em quando o teto desce. Não deixe as bolhas chegarem embaixo!"],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#e0f2fe"); [[140, "#ef4444"], [170, "#ef4444"], [200, "#3b82f6"], [230, "#22c55e"]].forEach(([x, cor]) => { if (t > 2.4 && cor === "#ef4444") return; c.fillStyle = cor; c.beginPath(); c.arc(x, 40, 14, 0, 7); c.fill(); });
      const k = Math.min(1, Math.max(0, (t - 1) / 1.2)); c.fillStyle = "#ef4444"; c.beginPath(); c.arc(D.lerp(180, 110, k), D.lerp(190, 40, k), 14, 0, 7); c.fill(); c.strokeStyle = "#64748b"; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(180, 190); c.lineTo(110, 40); c.stroke(); c.setLineDash([]); D.mao(c, 120, 70, t > .7 && t < 1); },
    criar(api) { const { W, H, D } = api; const r = 18, CO = 19, ox = (W - CO * 2 * r) / 2 + r; let g = [], tiro = null, prox = BC[R(4)], mira = { x: W / 2, y: 100 }, pts = 0, fim = false, tiros = 0, desce = 0;
      const cores = () => BC.slice(0, 4);
      const pos = (row, col) => ({ x: ox + col * 2 * r + (row % 2 ? r : 0), y: 40 + desce * 2 * r * .87 + row * 2 * r * .87 });
      for (let row = 0; row < 6; row++) { g[row] = []; for (let col = 0; col < CO - (row % 2); col++) g[row][col] = cores()[R(4)]; }
      const viz = (row, col) => { const d = row % 2 ? [[0, -1], [0, 1], [-1, 0], [-1, 1], [1, 0], [1, 1]] : [[0, -1], [0, 1], [-1, -1], [-1, 0], [1, -1], [1, 0]]; return d.map(([a, b]) => [row + a, col + b]).filter(([a, b]) => a >= 0 && g[a] && b >= 0 && b < CO - (a % 2)); };
      const cheio = (a, b) => g[a] && g[a][b];
      const gruda = (x, y, cor) => { let best = null, bd = 1e9; const lim = g.length + 1; for (let row = 0; row < lim; row++) { g[row] = g[row] || []; for (let col = 0; col < CO - (row % 2); col++) { if (cheio(row, col)) continue; const p = pos(row, col), d = Math.hypot(p.x - x, p.y - y); if (d < bd && (row === 0 || viz(row, col).some(([a, b]) => cheio(a, b)))) { bd = d; best = [row, col]; } } }
        if (!best) return; const [row, col] = best; g[row][col] = cor;
        const igual = [best], vis = new Set([row + "," + col]); for (let i = 0; i < igual.length; i++) viz(...igual[i]).forEach(([a, b]) => { if (g[a][b] === cor && !vis.has(a + "," + b)) { vis.add(a + "," + b); igual.push([a, b]); } });
        if (igual.length >= 3) { igual.forEach(([a, b]) => g[a][b] = null); pts += igual.length;
          const pres = new Set(), fila = []; (g[0] || []).forEach((v, b) => { if (v) { pres.add("0," + b); fila.push([0, b]); } }); for (let i = 0; i < fila.length; i++) viz(...fila[i]).forEach(([a, b]) => { if (g[a][b] && !pres.has(a + "," + b)) { pres.add(a + "," + b); fila.push([a, b]); } });
          g.forEach((l, a) => l.forEach((v, b) => { if (v && !pres.has(a + "," + b)) { g[a][b] = null; pts++; } })); api.ponto(); }
        tiros++; if (tiros % 7 === 0) desce++;
        const baixo = g.some((l, a) => l.some((v, b) => v && pos(a, b).y > H - 90)); if (baixo) { fim = true; api.fim(pts * 3); }
        if (g.every(l => l.every(v => !v))) { pts += 50; desce = 0; for (let row = 0; row < 6; row++) { g[row] = []; for (let col = 0; col < CO - (row % 2); col++) g[row][col] = cores()[R(4)]; } } };
      return {
        update(dt) { if (!tiro || fim) return; tiro.x += tiro.vx * dt; tiro.y += tiro.vy * dt; if (tiro.x < r || tiro.x > W - r) tiro.vx = -tiro.vx;
          const bate = tiro.y < 40 + desce * 2 * r * .87 || g.some((l, a) => l.some((v, b) => v && Math.hypot(pos(a, b).x - tiro.x, pos(a, b).y - tiro.y) < 2 * r - 4));
          if (bate) { gruda(tiro.x, tiro.y, tiro.cor); tiro = null; } },
        draw(c) { D.fundo(c, W, H, "#e0f2fe", "#f0f9ff"); c.fillStyle = "#cbd5e1"; c.fillRect(0, 0, W, 22 + desce * 2 * r * .87);
          g.forEach((l, a) => l.forEach((v, b) => { if (!v) return; const p = pos(a, b); c.fillStyle = v; c.beginPath(); c.arc(p.x, p.y, r - 1, 0, 7); c.fill(); c.fillStyle = "rgba(255,255,255,.4)"; c.beginPath(); c.arc(p.x - 5, p.y - 5, 5, 0, 7); c.fill(); }));
          c.strokeStyle = "#dc2626"; c.setLineDash([6, 6]); c.beginPath(); c.moveTo(0, H - 90); c.lineTo(W, H - 90); c.stroke(); c.setLineDash([]);
          const bx = W / 2, by = H - 40; const a = Math.atan2(mira.y - by, mira.x - bx); c.strokeStyle = "#64748b"; c.setLineDash([5, 6]); c.beginPath(); c.moveTo(bx, by); c.lineTo(bx + Math.cos(a) * 160, by + Math.sin(a) * 160); c.stroke(); c.setLineDash([]);
          if (tiro) { c.fillStyle = tiro.cor; c.beginPath(); c.arc(tiro.x, tiro.y, r - 1, 0, 7); c.fill(); } else { c.fillStyle = prox; c.beginPath(); c.arc(bx, by, r, 0, 7); c.fill(); }
          D.texto(c, 70, H - 30, `⭐ ${pts}`, "#0f172a", 22); D.texto(c, W - 110, H - 30, `teto desce em ${7 - tiros % 7}`, "#64748b", 14); },
        move(x, y) { mira = { x, y: Math.min(y, H - 80) }; },
        desce(x, y) { if (tiro || fim) return; mira = { x, y: Math.min(y, H - 80) }; const bx = W / 2, by = H - 40, a = Math.atan2(mira.y - by, mira.x - bx); if (Math.sin(a) > -.1) return; tiro = { x: bx, y: by, vx: Math.cos(a) * 700, vy: Math.sin(a) * 700, cor: prox };
          const pres = [...new Set(g.flat().filter(Boolean))]; prox = pres.length ? pres[R(pres.length)] : BC[R(4)]; }
      }; } });

  /* ---------------- 🔨 Acerta o Bug (inspirado em “acerte a toupeira”) ---------------- */
  J.registrar({ id: "acerta-bug", nome: "Acerta o Bug", ic: "🔨", cat: "acao", controle: "🖱️ Clique rápido nos bugs.",
    como: ["🐛 Bugs saem dos buracos do teclado gigante.", "🖱️ Clique neles bem rápido, antes que se escondam!", "📄 Cuidado: às vezes sai um arquivo bom. NÃO clique nele!", "🏁 Você tem 40 segundos."],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#fef9c3"); for (let i = 0; i < 6; i++) { const x = 60 + (i % 3) * 120, y = 60 + Math.floor(i / 3) * 90; c.fillStyle = "#334155"; c.beginPath(); c.ellipse(x, y + 20, 40, 14, 0, 0, 7); c.fill(); if (i === (Math.floor(t * 1.5) % 6)) D.emoji(c, x, y, "🐛", 34); }
      const i = Math.floor(t * 1.5) % 6; D.mao(c, 60 + (i % 3) * 120, 60 + Math.floor(i / 3) * 90, (t * 1.5) % 1 > .5); },
    criar(api) { const { W, H, D } = api; const bur = []; for (let y = 0; y < 3; y++) for (let x = 0; x < 4; x++) bur.push({ x: 130 + x * 180, y: 120 + y * 110, t: 0, tipo: null, hit: 0 });
      let pts = 0, tempo = 40, fim = false, prox = .6, msgs = [];
      return {
        update(dt) { if (fim) return; tempo -= dt; if (tempo <= 0) { fim = true; api.fim(pts); return; } prox -= dt;
          if (prox <= 0) { prox = Math.max(.35, .9 - pts * .01); const v = bur.filter(b => !b.tipo); if (v.length) { const b = v[R(v.length)]; b.tipo = Math.random() < .2 ? "arq" : "bug"; b.t = Math.max(.6, 1.3 - pts * .015); b.hit = 0; } }
          bur.forEach(b => { if (b.tipo) { b.t -= dt; if (b.t <= 0) b.tipo = null; } if (b.hit) b.hit = Math.max(0, b.hit - dt); }); msgs = msgs.filter(m => (m.t -= dt) > 0); },
        draw(c) { D.fundo(c, W, H, "#fef3c7", "#fffbeb");
          bur.forEach(b => { c.fillStyle = "#cbd5e1"; D.rr(c, b.x - 70, b.y - 40, 140, 90, 14); c.fill(); c.fillStyle = "#1e293b"; c.beginPath(); c.ellipse(b.x, b.y + 22, 52, 18, 0, 0, 7); c.fill();
            if (b.tipo) D.emoji(c, b.x, b.y - 2, b.tipo === "bug" ? "🐛" : "📄", 48); if (b.hit) D.emoji(c, b.x + 30, b.y - 30, "💥", 32); });
          msgs.forEach(m => D.texto(c, m.x, m.y - (1 - m.t) * 30, m.s, m.c, 20));
          hudTxt(c, D, W, `🐛 ${pts} bugs`, `⏱️ ${Math.ceil(tempo)}s`); },
        desce(x, y) { if (fim) return; const b = bur.find(b => Math.abs(b.x - x) < 70 && Math.abs(b.y - y) < 50); if (!b || !b.tipo) return;
          if (b.tipo === "bug") { pts++; b.hit = .3; msgs.push({ x: b.x, y: b.y - 40, s: "+1", c: "#16a34a", t: .6 }); if (pts % 3 === 0) api.ponto(); }
          else { pts = Math.max(0, pts - 2); msgs.push({ x: b.x, y: b.y - 40, s: "❌ era um arquivo!", c: "#dc2626", t: 1 }); } b.tipo = null; }
      }; } });

  /* ---------------- 🐔 Atravessa a Rede (inspirado em Crossy Road) ---------------- */
  J.registrar({ id: "atravessa-rede", nome: "Atravessa a Rede", ic: "🐔", cat: "acao", controle: "⌨️ Use as setas ⬆️ ⬇️ ⬅️ ➡️.",
    como: ["🐔 Leve o seu bonequinho até o outro lado.", "⌨️ Cada seta anda um passo.", "📦 Nas faixas de cabo passam pacotes de dados correndo: não deixe eles te atropelarem!", "🌳 Na grama você está seguro. Chegou em cima? Próxima fase!"],
    demo(c, t, W, H, D) { D.fundo(c, W, H, "#86efac"); [60, 110].forEach((y, i) => { c.fillStyle = "#334155"; c.fillRect(0, y - 20, W, 40); D.emoji(c, ((t * 90 * (i ? -1 : 1)) % 400 + 400) % 400 - 20, y, "📦", 26); });
      const y = t < 1 ? 170 : t < 2.4 ? 110 : 60; D.emoji(c, 180, y, "🐔", 30); D.tecla(c, 300, 160, "⬆️", (t > .7 && t < 1) || (t > 2.1 && t < 2.4), 40); },
    criar(api) { const { W, H, D } = api; const C = 50, COLS = 16, ROWS = 9; let faixas, px, py, pts = 0, fase = 1, fim = false, msgs = [];
      const monta = () => { faixas = []; for (let r = 0; r < ROWS; r++) { if (r === 0 || r === ROWS - 1 || Math.random() < .25) { faixas.push({ tipo: "grama" }); continue; }
          const dir = Math.random() < .5 ? 1 : -1, v = (60 + R(60) + fase * 15) * dir, n = 2 + R(2); faixas.push({ tipo: "cabo", v, carros: Array.from({ length: n }, (_, i) => ({ x: i * W / n + R(80), w: 60 + R(40) })) }); }
        px = Math.floor(COLS / 2); py = ROWS - 1; };
      monta();
      return {
        update(dt) { if (fim) return; faixas.forEach(f => { if (f.tipo !== "cabo") return; f.carros.forEach(c => { c.x += f.v * dt; if (c.x > W + 60) c.x = -c.w - 20; if (c.x < -c.w - 60) c.x = W + 20; }); });
          const f = faixas[py]; if (f.tipo === "cabo") { const cx = px * C + C / 2; if (f.carros.some(c => cx > c.x + 6 && cx < c.x + c.w - 6)) { fim = true; msgs.push({ s: "📦 Atropelado pelos dados!", t: 3 }); api.fim(pts); } }
          msgs = msgs.filter(m => (m.t -= dt) > 0); },
        draw(c) { const oy = 0; faixas.forEach((f, r) => { const y = oy + r * C; if (f.tipo === "grama") { c.fillStyle = r % 2 ? "#86efac" : "#4ade80"; c.fillRect(0, y, W, C); D.emoji(c, (r * 137) % W, y + C / 2, "🌳", 24); }
            else { c.fillStyle = "#334155"; c.fillRect(0, y, W, C); c.strokeStyle = "#facc15"; c.setLineDash([16, 14]); c.beginPath(); c.moveTo(0, y + C / 2); c.lineTo(W, y + C / 2); c.stroke(); c.setLineDash([]);
              f.carros.forEach(k => { c.fillStyle = "#2563eb"; D.rr(c, k.x, y + 8, k.w, C - 16, 8); c.fill(); D.emoji(c, k.x + k.w / 2, y + C / 2, "📦", 22); }); } });
          D.emoji(c, px * C + C / 2, py * C + C / 2, "🐔", 36);
          msgs.forEach(m => D.texto(c, W / 2, 150, m.s, "#fff", 28));
          hudTxt(c, D, W, `🐔 fase ${fase} · ⭐ ${pts}`, "⌨️ setas: 1 passo"); },
        tecla(k, desce) { if (!desce || fim) return false; const m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[k]; if (!m) return false;
          px = Math.max(0, Math.min(COLS - 1, px + m[0])); const ny = Math.max(0, Math.min(ROWS - 1, py + m[1])); if (ny < py) pts++; py = ny;
          if (py === 0) { fase++; pts += 10; api.ponto(); monta(); } }
      }; } });
})();
