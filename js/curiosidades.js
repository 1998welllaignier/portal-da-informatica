/* 📚 Curiosidades das datas comemorativas: quando um tema está no ar, cada aluno vê UMA VEZ por período
   (na primeira aula em que entrar) uma janela com curiosidades da data. O botão de fechar só libera depois de 1 min 30 s.
   Fica registrado em progresso/<aluno>_temas (vistos["<tema>-<ano>"]). Depois, o aluno pode reabrir pela faixa (📚 Saiba mais), sem tempo. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  const SEG = 90;
  // cada item: [ícone, título, texto]
  const C = {
    consciencia: { tit: "✊🏿 Semana da Consciência Negra", sub: "20 de novembro · Dia Nacional de Zumbi e da Consciência Negra", itens: [
      ["📅", "Por que 20 de novembro?", "É a data da morte de Zumbi dos Palmares, em 1695. Desde 2024, o dia é feriado nacional (Lei nº 14.759/2023)."],
      ["🏞️", "Quilombo dos Palmares", "Foi o maior quilombo das Américas, na Serra da Barriga (hoje Alagoas). Ali, pessoas escravizadas que fugiram viveram livres e resistiram por quase 100 anos."],
      ["👑", "Zumbi e Dandara", "Zumbi foi o último líder de Palmares. Dandara foi uma guerreira que lutou ao lado dele. Os dois estão no Livro dos Heróis e Heroínas da Pátria."],
      ["🌳", "O baobá do tema", "O baobá é uma árvore africana que pode viver mais de mil anos. Para muitos povos africanos, é a árvore da memória e dos antepassados."],
      ["🥁", "A África no nosso dia a dia", "Palavras como cafuné, moleque, caçula e samba vêm de línguas africanas. A capoeira é Patrimônio Cultural da Humanidade (UNESCO, 2014)."],
      ["⚖️", "Racismo é crime", "No Brasil, o racismo é crime inafiançável e imprescritível (Constituição e Lei nº 7.716/1989). Mais da metade dos brasileiros se declara preta ou parda (Censo 2022). Respeito é para todos!"]
    ] },
    padroeira: { tit: "⛪ Festa da Padroeira", sub: "27 de novembro · Nossa Senhora das Graças", itens: [
      ["⛪", "A paróquia da nossa cidade", "A paróquia de Curionópolis é dedicada a Nossa Senhora das Graças, lembrada no dia 27 de novembro."],
      ["🏅", "A Medalha Milagrosa", "A devoção vem de Paris, na França: em 1830, a jovem Catarina Labouré contou ter visto Nossa Senhora, que pediu uma medalha, conhecida como Medalha Milagrosa."],
      ["🔔", "O sino da igreja", "Antigamente, o sino era o \"relógio\" e o \"alto-falante\" da cidade: avisava as horas, as missas, as festas e até as emergências."],
      ["🎉", "Festejo é cultura", "Nas festas de padroeiro há novenas, procissão e arraial com comidas típicas. Mesmo quem tem outra religião pode conhecer e respeitar essa tradição da cidade."]
    ] },
    natal: { tit: "🎄 Natal", sub: "25 de dezembro", itens: [
      ["⭐", "O que se comemora", "Para os cristãos, o Natal celebra o nascimento de Jesus. Para muita gente, é tempo de família, solidariedade e de fazer o bem."],
      ["🎅", "Quem inspirou o Papai Noel?", "São Nicolau, um bispo que viveu no século IV na cidade de Mira (hoje Turquia) e ficou famoso por ajudar pessoas pobres e crianças."],
      ["🎄", "A árvore de Natal", "O costume começou na Alemanha. O pinheiro foi escolhido porque continua verde mesmo no inverno."],
      ["☀️", "Neve no Brasil?", "Aqui o Natal é no verão! A neve dos enfeites é uma tradição que veio da Europa, onde dezembro é inverno."],
      ["🐑", "O primeiro presépio", "Francisco de Assis montou o primeiro presépio \"vivo\", com pessoas e animais, em 1223, na Itália."]
    ] },
    carnaval: { tit: "🎭 Carnaval · Unidos da Informática", sub: "a maior festa popular do Brasil", itens: [
      ["📅", "Por que a data muda?", "O Carnaval acontece 47 dias antes da Páscoa, e a Páscoa muda de data todo ano. Por isso o Carnaval também muda."],
      ["🥩", "De onde vem o nome", "Vem do latim \"carne vale\", algo como \"adeus, carne\": era a última festa antes da Quaresma, quando muitos cristãos deixam de comer carne."],
      ["🥁", "A primeira escola de samba", "A \"Deixa Falar\", criada no Rio de Janeiro em 1928, é considerada a primeira escola de samba do Brasil."],
      ["☂️", "Frevo", "O frevo, de Pernambuco, com a sombrinha colorida, é Patrimônio Cultural da Humanidade (UNESCO, 2012)."],
      ["🎭", "Brincar com respeito", "Fantasia é diversão. Mas zoar a cor, o corpo ou a cultura de alguém não é brincadeira: Carnaval bom é com respeito."]
    ] },
    pascoa: { tit: "🐰 Páscoa", sub: "data móvel", itens: [
      ["✝️", "O que se comemora", "Para os cristãos, a Páscoa celebra a ressurreição de Jesus. É a festa mais importante do calendário cristão."],
      ["🌕", "Por que a data muda?", "A Páscoa é o primeiro domingo depois da primeira lua cheia que vem após 21 de março. Por isso cai entre março e abril."],
      ["🕎", "Páscoa judaica", "Para os judeus, a Pessach lembra a libertação do povo hebreu da escravidão no Egito. A palavra \"Páscoa\" vem de \"Pessach\", que quer dizer \"passagem\"."],
      ["🥚", "Ovo e coelho", "O ovo é símbolo de vida nova, e o coelho, que tem muitos filhotes, também. Os ovos de chocolate ficaram populares no século XIX."]
    ] },
    indigenas: { tit: "🪶 Dia dos Povos Indígenas", sub: "19 de abril", itens: [
      ["📜", "O nome mudou", "Desde 2022, o antigo \"Dia do Índio\" se chama Dia dos Povos Indígenas (Lei nº 14.402/2022), para lembrar que são muitos povos diferentes."],
      ["👥", "Quantos são?", "No Censo 2022, cerca de 1,7 milhão de pessoas se declararam indígenas no Brasil, de centenas de povos, com centenas de línguas diferentes."],
      ["🗣️", "Palavras que usamos todo dia", "Abacaxi, pipoca, mandioca, jacaré, capim e o próprio nome \"Pará\" vêm do tupi. \"Pará\" quer dizer algo como \"rio grande como o mar\"."],
      ["🏡", "Bem perto de nós", "Aqui na região de Carajás vive o povo Xikrin do Cateté, do grupo Mebêngôkre (Kayapó)."],
      ["🛏️", "Herança no dia a dia", "Dormir em rede, tomar banho todo dia e comer farinha de mandioca são costumes que aprendemos com os povos indígenas."]
    ] },
    curionopolis: { tit: "🎂 Parabéns, Curionópolis!", sub: "10 de maio", itens: [
      ["📜", "Quando nasceu", "Curionópolis foi criada em 10 de maio de 1988, quando deixou de fazer parte de Marabá e virou município."],
      ["⛏️", "Serra Pelada", "O distrito de Serra Pelada é da nossa cidade. Nos anos 1980, foi o maior garimpo de ouro a céu aberto do mundo, com dezenas de milhares de garimpeiros."],
      ["🏷️", "De onde vem o nome", "O nome homenageia Sebastião Rodrigues de Moura, conhecido como Major Curió, que coordenou o garimpo de Serra Pelada."],
      ["🗺️", "Onde fica", "No sudeste do Pará, na região de Carajás, uma das regiões de mineração mais importantes do Brasil."]
    ] },
    junina: { tit: "🌽 Festa Junina · Arraiá da Informática", sub: "junho", itens: [
      ["🙏", "Três santos", "As festas homenageiam Santo Antônio (13/06), São João (24/06) e São Pedro (29/06). Vieram de Portugal e se misturaram com as festas da colheita do milho."],
      ["🇫🇷", "Quadrilha francesa", "A quadrilha veio de uma dança francesa. Por isso os gritos \"anarriê\" (en arrière, \"para trás\") e \"balancê\"."],
      ["🐂", "Boi-bumbá", "No Norte, a festa tem boi-bumbá. O mais famoso é o Festival de Parintins, no Amazonas, com o Garantido e o Caprichoso."],
      ["🎈", "Balão, não!", "Soltar balão é crime ambiental (Lei nº 9.605/1998): ele pode cair aceso e causar incêndios em matas e casas."]
    ] },
    folclore: { tit: "🍃 Lendas do Brasil", sub: "22 de agosto · Dia do Folclore", itens: [
      ["📜", "Por que 22 de agosto?", "Em 22 de agosto de 1846, o inglês William Thoms criou a palavra \"folk-lore\", que quer dizer \"saber do povo\"."],
      ["👣", "Curupira", "Protetor das matas, tem cabelo de fogo e os pés virados para trás: as pegadas enganam os caçadores, que vão para o lado errado."],
      ["🧜", "Iara", "A \"mãe-d'água\" dos rios: com o seu canto, atrai os pescadores para o fundo das águas."],
      ["🐬", "Boto-cor-de-rosa", "Lenda da Amazônia: nas noites de festa, o boto vira um rapaz de roupa branca e chapéu, para esconder o furo do nariz."],
      ["🌪️", "Saci e Boitatá", "O Saci, de uma perna só e gorro vermelho, faz travessuras dentro do redemoinho. O Boitatá é uma cobra de fogo que protege os campos."]
    ] },
    patria: { tit: "🇧🇷 Semana da Pátria", sub: "7 de setembro", itens: [
      ["📅", "7 de setembro de 1822", "Dom Pedro declarou a independência do Brasil de Portugal, às margens do riacho Ipiranga, em São Paulo."],
      ["🌴", "E o Pará?", "O Pará só aderiu à independência em 15 de agosto de 1823, quase um ano depois. Por isso 15 de agosto é feriado no nosso estado."],
      ["⭐", "As estrelas da bandeira", "São 27, uma para cada estado e o Distrito Federal, e mostram o céu do Rio de Janeiro na manhã de 15 de novembro de 1889."],
      ["🎵", "O Hino Nacional", "A música é de Francisco Manuel da Silva, e a letra, de Joaquim Osório Duque Estrada."]
    ] },
    criancas: { tit: "🎈 Dia das Crianças", sub: "12 de outubro", itens: [
      ["📜", "Desde 1924", "A data foi criada por decreto em 1924, mas só ficou famosa nos anos 1960, com campanhas de lojas de brinquedos."],
      ["⚖️", "Criança tem direitos", "O ECA (Estatuto da Criança e do Adolescente, Lei nº 8.069/1990) garante direito à escola, à saúde, ao lazer e à proteção."],
      ["⛪", "Feriado duplo", "No mesmo dia é festa de Nossa Senhora Aparecida, padroeira do Brasil. Por isso 12 de outubro é feriado nacional."],
      ["🌍", "No mundo", "A ONU comemora o Dia Mundial da Criança em 20 de novembro, data em que aprovou a Convenção sobre os Direitos da Criança (1989)."]
    ] },
    professor: { tit: "🍎 Dia do Professor", sub: "15 de outubro", itens: [
      ["📜", "Por que 15 de outubro?", "Em 15 de outubro de 1827, Dom Pedro I criou as primeiras escolas de \"primeiras letras\" do Brasil, para ensinar a ler, escrever e contar."],
      ["🌍", "No mundo", "A UNESCO comemora o Dia Mundial dos Professores em 5 de outubro."],
      ["📖", "Patrono da educação", "Paulo Freire, educador pernambucano conhecido no mundo todo, é o Patrono da Educação Brasileira (Lei nº 12.612/2012)."],
      ["💬", "Que tal?", "Agradeça hoje a um professor que marcou a sua vida. Um \"obrigado\" faz o dia de qualquer professor!"]
    ] }
  };
  P.curiosidades = C;

  function chave(tema) { const d = new Date(), a = d.getFullYear(); return tema + "-" + (tema === "natal" && d.getMonth() === 0 ? a - 1 : a); }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function janela(tema, comTempo) {
    const c = C[tema]; if (!c) return Promise.resolve(false);
    return new Promise(fim => {
      const d = document.createElement("dialog"); d.className = "pp-dlg pp-dlg-larga cur-dlg tema-" + tema;
      d.innerHTML = `<div class="cur-topo"><p class="cur-sup">📚 Você sabia?</p><h2>${c.tit}</h2><p class="cur-sub">${esc(c.sub)}</p></div>
        <div class="cur-grade">${c.itens.map(([ic, t, x], i) => `<article class="cur-card" style="--d:${i * .15}s"><span class="cur-ic">${ic}</span><h3>${esc(t)}</h3><p>${esc(x)}</p></article>`).join("")}</div>
        <div class="row-btns cur-bts"><button type="button" class="btn btn-grande" id="cur-ok"></button></div>`;
      document.body.appendChild(d); d.showModal();
      const b = d.querySelector("#cur-ok"); let r = comTempo ? SEG : 0, iv = null;
      const pinta = () => { b.disabled = r > 0; b.innerHTML = r > 0 ? `⏳ Leia com calma… ${Math.floor(r / 60)}:${String(r % 60).padStart(2, "0")}` : "✔ Li e aprendi!"; };
      pinta(); if (r > 0) iv = setInterval(() => { r--; pinta(); if (r <= 0) clearInterval(iv); }, 1000);
      d.addEventListener("cancel", e => { if (r > 0) e.preventDefault(); }); // Esc não fecha antes do tempo
      b.onclick = () => { if (r > 0) return; d.close(); };
      d.addEventListener("close", () => { clearInterval(iv); d.remove(); fim(true); });
    });
  }
  P.verCuriosidades = tema => janela(tema || P.tema, false);

  // depois do código e do avatar: se há tema com curiosidades e o aluno (ou a dupla) ainda não viu neste período, mostra com tempo
  P.curiosidadesNoLogin = async function (infos, turma) {
    const tema = P.tema; if (!tema || !C[tema] || !P.nuvem || !P.nuvem.app) return;
    const k = chave(tema), N = P.nuvem;
    const refs = infos.map((x, i) => N.app(i).db.collection("progresso").doc(x.alunoId + "_temas"));
    let falta = false;
    for (const r of refs) { try { const sn = await r.get(); if (!(sn.exists && (sn.data().vistos || {})[k])) falta = true; } catch (e) { falta = true; } }
    if (!falta) return;
    await janela(tema, true);
    await Promise.all(refs.map((r, i) => r.set({ alunoId: infos[i].alunoId, turma, tipo: "temas", vistos: { [k]: Date.now() } }, { merge: true }).catch(e => console.warn("curiosidades", e))));
  };
})();
