from comum import R
def DIGITE(frase_bit="EU GOSTO DE APRENDER"):
    return R(["⌨️ Como eu digito"], [
      ("Olha como eu faço com <b>outra</b> frase. Clico na caixa. Para as letras grandes, aperto uma vez o <b>Caps Lock</b> (a luzinha acende):", 0, "Caps Lock ligado 💡"),
      ("Digito letra por letra. Entre uma palavra e outra, aperto a <b>barra de espaço</b>, a tecla comprida:", 0, frase_bit, True),
      ("No fim, confiro se ficou igualzinho e aperto <b>Verificar</b>.", None, None, False, 2400)],
      "Agora é a sua vez: digite a frase da tarefa, igualzinho! 💪")
SOMA = R(["➕ Outra conta"], [("Olha como eu somo os números de <b>outro</b> caminho:", 0, "Casa → Praça → Escola = 4 + 1"), ("Somo devagar, número por número:", 0, "4 + 1 = 5", True, 2400)], "Agora é a sua vez: some os números da tarefa! 💪")
CESAR = R(["🔐 Outra palavra: LUA"], [("Com a chave 1, cada letra anda <b>1 casa para a frente</b> no alfabeto:", 0, "L → M"), ("", 0, "U → V", False, 700), ("", 0, "A → B", False, 900), ("LUA vira:", 0, "MVB", True, 2400)], "Agora é a sua vez: faça o mesmo com SOL! 💪")
