from comum import R, FRASE_TEMA
GRAFO = R(["🗺️ Outro grafo: Casa —2— Feira —3— Escola e Casa —1— Praça —1— Posto —2— Escola"], [
  ("Olha como eu calculo num grafo <b>diferente</b>. Somo os pesos de cada caminho:", 0, "Casa → Feira → Escola = 2 + 3 = 5 min"),
  ("", 0, "Casa → Praça → Posto → Escola = 1 + 1 + 2 = 4 min", False, 1200),
  ("O mais curto é o de <b>menor soma</b>, mesmo com mais paradas!", 0, "Mais curto: pela Praça e pelo Posto (4 min)", True, 2600)],
  "Agora é a sua vez: some os pesos dos caminhos da tarefa! 💪")
BIT = {
"Os caminhos da Casa até a Escola": GRAFO,
"M1 · Grafo: Casa —3— Praça —2— Escola e Casa —4— Mercado —4— Escola": GRAFO,
"1. Da escola (E) ao Mercado Municipal (M)": R(["🗺️ Somando quadras (outro caminho, de exemplo)"], [
  ("Olha como eu somo um caminho <b>de exemplo</b>: escrevo os vértices em ordem e o peso de cada trecho.", 0, "#X → Y → Z → W"),
  ("", 0, "X → Y: ½ quadra", False, 700), ("", 0, "Y → Z: 2 quadras", False, 700), ("", 0, "Z → W: 1 quadra", False, 900),
  ("Somo tudo. Meia quadra é <b>0,5</b>:", 0, "0,5 + 2 + 1 = 3,5 quadras", True, 2600)],
  "Agora é a sua vez: siga cada rua no mapa da tarefa, anote os vértices e some as quadras! (Pode escrever 6,5 ou 6½.) 💪"),
"2. A escola e os dois mercados": R(["🗺️ Comparando distâncias (exemplo)"], [
  ("Para saber o que fica <b>mais perto</b>, eu calculo as duas distâncias e comparo:", 0, "Até a farmácia: 1 + ½ = 1,5 quadra"),
  ("", 0, "Até a padaria: 2 + 1 = 3 quadras", False, 900), ("O menor número ganha:", 0, "Mais perto: a farmácia", True, 2400)],
  "Agora é a sua vez: calcule as distâncias até os dois mercados e compare! 💪"),
"Quantas senhas a força bruta precisa testar, no máximo?": R(["🔐 Senhas só de números"], [
  ("Cada dígito tem 10 opções (0 a 9). A cada dígito a mais, eu <b>multiplico por 10</b>:", 0, "1 dígito: 10"),
  ("", 0, "2 dígitos: 10 × 10 = 100", False, 900), ("", 0, "3 dígitos: 100 × 10 = 1.000", True, 1200),
  ("E o tempo? Se o programa testa <b>100</b> senhas por segundo, eu <b>divido</b>:", 0, "1.000 ÷ 100 = 10 segundos (exemplo)", True, 2600)],
  "Agora é a sua vez: continue multiplicando por 10 e faça a divisão da tarefa (1.000 por segundo)! 💪"),
"Escreva o crédito correto da foto da castanheira": R(["©️ Crédito de outra foto"], [
  ("Olha como eu escrevo o crédito de <b>outra</b> foto, seguindo o modelo <b>Foto: autor, site, licença</b>:", 0, "#Foto de um ipê, de João Lima, no site Natureza Livre, licença CC BY"),
  ("", 0, "Foto: João Lima, Natureza Livre, CC BY.", True, 2600)],
  "Agora é a sua vez: escreva o crédito da foto da <b>castanheira</b>, no mesmo modelo! 💪"),
"Por que um deepfake de um colega, mesmo “de brincadeira”, pode causar problemas sérios? O que a vítima deve fazer?": R(["⚠️ Por que é sério", "🛡️ O que a vítima faz"], [
  ("Vou pensar num caso <b>parecido</b>: um áudio falso imitando a voz de uma professora. Por que é sério?", 0, "Usa a voz dela sem autorização"),
  ("", 0, "Pode fazer as pessoas acreditarem numa mentira", False, 1000),
  ("E o que a vítima faz? Não apaga as provas, conta a um adulto e denuncia:", 1, "Guardar o áudio e os prints", True), ("", 1, "Contar à direção e denunciar", True, 2400)],
  "Agora é a sua vez: responda sobre o <b>deepfake do colega</b>, com as suas palavras! 💪"),
"Uma regra para usar a IA com responsabilidade na escola": R(["🤖 A regra", "💡 Por quê"], [
  ("Olha como eu monto uma regra, sobre <b>outro</b> assunto (o celular na aula):", 0, "Usar o celular só quando o professor pedir."),
  ("E explico o <b>porquê</b>, com um risco ou um benefício:", 1, "Porque as notificações tiram a atenção da explicação.", True, 2600)],
  "Agora é a sua vez: crie uma regra para usar a <b>IA</b> e explique por quê! 💪"),
"M2 · Cifra de César com chave 1 (cada letra anda 1 casa)": R(["🔐 Outra palavra: BOLA"], [
  ("Com chave 1, cada letra anda <b>1 casa para a frente</b> no alfabeto:", 0, "B → C"), ("", 0, "O → P", False, 700), ("", 0, "L → M", False, 700), ("", 0, "A → B", False, 900),
  ("BOLA cifrada fica:", 0, "CPMB", True), ("Para <b>decifrar</b>, eu volto 1 casa: TPM → S, O, L", 0, "TPM → SOL", True, 2600)],
  "Agora é a sua vez: cifre CASA e decifre PJ! 💪"),
"Escreva uma frase sobre o que você aprendeu em cada tema": FRASE_TEMA,
}
