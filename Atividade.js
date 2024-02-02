// Usamos o prompt-sync para  pedir o usuario a informamação
const prompt = require("prompt-sync")();

// Definição de funções para operações matemáticas
let soma = (x, y) => {
  return x + y;
};
let subtracao = (x, y) => {
  return x - y;
};
let divisao = (x, y) => {
  return x / y;
};
let multiplicacao = (x, y) => {
  return x * y;
};
    // Inicialização da variável de controle do loop
let i = 0;
// O for loop principal
for (i; i == 0; ) {
    // Solicita ao usuário escolher uma operação
  let controle = parseInt(
    prompt("1-Soma 2-Subtração 3-Divisão 4-Multiplicação 5-Sair : ")
  );
  // Verifica se a opção escolhida está no intervalo válido (1 a 5)
  if (controle > 0 && controle <= 5) {
    // Solicita ao usuário digitar dois números
    let num1 = parseFloat(prompt("Digite um número: "));
    let num2 = parseFloat(prompt("Digite outro número: "));
    let operacao;
    let result = 0;
    // Switch case para determinar a operação com base na escolha do usuário
    switch (controle) {
      case 1:
        result = soma(num1, num2);
        operacao = "soma";
        break;

      case 2:
        result = subtracao(num1, num2);
        operacao = "subtração";
        break;

      case 3:
        result = divisao(num1, num2);
        operacao = "divisão";
        break;

      case 4:
        result = multiplicacao(num1, num2);
        operacao = "multiplicação";
        break;

      case 5:
        console.log("Obrigado.");
        i++;
        break;
    }
     // Exibe o resultado da operação
    console.log(
     `O valor da ${operacao} entre ${num1} e ${num2} é de ${result.toFixed(2)}` 
    );
  } else {
    // Se a opção escolhida não estiver no intervalo válido, exibe mensagem de erro
    console.log("Por favor selecione uma opção válida.");
  }
}