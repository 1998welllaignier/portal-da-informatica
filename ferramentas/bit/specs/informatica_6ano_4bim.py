from comum import R, FRASE_TEMA
BIT = {
"Anote os metadados do arquivo “Sobre mim”": R(["🖱️ O que eu faço", "🪟 O que aparece na janela"], [
  ("Olha como eu faço com <b>outro</b> arquivo, o “Lista de compras”. Clico nele com o <b>botão direito</b> do mouse:", 0, "Botão direito no arquivo"),
  ("No menu, escolho <b>Propriedades</b>:", 0, "Propriedades"), ("Abre a janela com os <b>metadados</b>: as informações sobre o arquivo.", 1, "Tipo: Documento de Texto (.txt)"),
  ("", 1, "Tamanho: 120 bytes", True, 900), ("", 1, "Criado em: 03/11/2026 09:15", True, 1600),
  ("Eu só copio o que está escrito na janela. Os do <b>seu</b> arquivo vão ser diferentes!", None, None, False, 2400)],
  "Agora é a sua vez: abra as Propriedades do <b>seu</b> arquivo “Sobre mim” e copie o tipo, o tamanho e a data! 💪"),
"Complete as instruções de seleção": R(["🔀 Se… então… senão…"], [
  ("Olha como eu penso com um exemplo <b>diferente</b>. Primeiro a <b>condição</b>, uma pergunta de sim ou não:", 0, "Se estiver chovendo,"),
  ("Se a resposta for <b>SIM</b>, faço o “então”:", 0, "então levo o guarda-chuva,", True),
  ("Se for <b>NÃO</b>, faço o “senão”:", 0, "senão vou de boné.", True),
  ("O “então” e o “senão” são ações <b>diferentes</b>, e as duas combinam com a condição!", None, None, False, 2400)],
  "Agora é a sua vez: para cada condição da tarefa, escolha o que acontece no SIM (então) e no NÃO (senão)! 💪"),
"Crie a sua instrução de seleção": R(["🔀 Se…", "✅ então…", "❌ senão…"], [
  ("Olha como eu crio uma instrução <b>minha</b>. A condição é uma pergunta de sim ou não:", 0, "a fila da cantina estiver grande"),
  ("Se for SIM:", 1, "como o lanche que trouxe de casa", True), ("Se for NÃO:", 2, "compro um suco na cantina", True),
  ("Pronto: “Se a fila estiver grande, então como o lanche de casa, senão compro um suco.”", None, None, False, 2600)],
  "Agora é a sua vez: invente a <b>sua</b> instrução, com outra situação! 💪"),
"Reescreva as mensagens de forma respeitosa": R(["😠 Mensagem que ofende", "💬 Mesma ideia, com respeito"], [
  ("Olha como eu faço com <b>outra</b> mensagem:", 0, "“Que goleiro ruim, kkk, sai do time”"),
  ("A <b>ideia</b> é: o goleiro precisa melhorar. O que <b>ofende</b>: “ruim”, “kkk” e “sai do time”.", 0, "Ideia: ele pode melhorar na defesa", True),
  ("Reescrevo mantendo a ideia, sem deboche e ajudando:", 1, "“Hoje não deu, mas se você treinar"), ("", 1, "a defesa, vai pegar todas na próxima!”", False, 2600)],
  "Agora é a sua vez: reescreva as 3 mensagens mantendo a ideia, sem ofender ninguém! 💪"),
"Mensagem para um colega que está sofrendo cyberbullying": R(["💙 Como montar a mensagem"], [
  ("Olha como eu monto uma mensagem de apoio, em <b>3 partes</b>. 1️⃣ Mostro que me importo:", 0, "“Eu vi o que fizeram e sinto muito. Você não está sozinho.”"),
  ("2️⃣ Digo o que a pessoa pode fazer: <b>print</b>, <b>bloquear</b> e <b>contar a um adulto</b>:", 0, "“Tire print, bloqueie e conte para alguém da sua família.”", True),
  ("3️⃣ Fecho me colocando à disposição:", 0, "“Se quiser, eu vou com você falar com o professor.”"),
  ("Repare: é respeitosa e traz um <b>plano</b> para ajudar.", None, None, False, 2400)],
  "Agora é a sua vez: escreva a <b>sua</b> mensagem, com as suas palavras! 💪"),
"Contas de quanto cabe": R(["🧮 Quanto cabe?"], [
  ("Olha como eu calculo com <b>outro</b> exemplo: um cartão de memória de 2 GB.", 0, "2 GB ≈ 2000 MB"),
  ("Quantas músicas de 4 MB cabem? Eu <b>divido</b> o espaço pelo tamanho de uma música:", 0, "2000 ÷ 4 = 500 músicas", True),
  ("Lembre: 1 byte = 8 bits, e cada medida (KB → MB → GB) é cerca de <b>mil vezes</b> a anterior.", 0, "1 GB ≈ 1000 MB", False, 2600)],
  "Agora é a sua vez: faça as contas da tarefa dividindo o espaço pelo tamanho de cada arquivo! 💪"),
"O celular com 10 GB livres": R(["📱 Outro celular: 4 GB livres"], [
  ("Primeiro eu passo para MB:", 0, "4 GB ≈ 4000 MB"), ("Músicas de 8 MB? Divido:", 0, "4000 ÷ 8 = 500 músicas", True),
  ("Vídeos de 400 MB? Divido de novo:", 0, "4000 ÷ 400 = 10 vídeos", True),
  ("O arquivo menor cabe <b>muito mais</b> vezes!", None, None, False, 2400)],
  "Agora é a sua vez: passe 10 GB para MB e divida! 💪"),
"Desafio M4 · Quanto cabe?": R(["🧮 Outro exemplo"], [
  ("Pen drive de 1 GB e fotos de 5 MB:", 0, "1 GB ≈ 1000 MB"), ("Divido o espaço pelo tamanho de uma foto:", 0, "1000 ÷ 5 = 200 fotos", True, 2400)],
  "Agora é a sua vez: faça a conta com as músicas de 4 MB! 💪"),
"Escreva uma frase sobre o que você aprendeu em cada tema": FRASE_TEMA,
}
