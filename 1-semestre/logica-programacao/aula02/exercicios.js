// Elaborar os seguintes programas de entrada, processamento e saída.
// - Elaborar um programa que leia 2 notas de um aluno. Calcule e mostre a média
// das notas.
// -Elaborar um programa que leia o valor de um jantar. Sabendo que a taxa do
// garçom é de 10%, calcule e mostre a taxa do garçom e o valor total a ser pago.
// -Elaborar um programa que leia o valor de um veículo. Mostre a promoção de
// financiamento da revenda, que consiste em 50% de entrada e o valor do saldo
// em 12x.
// -Elaborar um programa que leia nome e idade de um aluno. Calcule o ano que
// ele nasceu. Exiba mensagem informando o nome do aluno e seu ano de
// nascimento.
// -Elaborar um programa que leia um número. Exiba os vizinhos deste número
// (anterior e posterior)

const prompt = require("prompt-sync")();

console.log("##### EXERCÍCIOS AULA 02 #####");

console.log("(1) Cálculo de médias");
const userSelect = Number(prompt("Selecione o execicio: "));
switch (userSelect) {
  case 1:
    exercicio001();
}

function exercicio001() {
  console.log("#### Cálculo de médias ####");
  const quantiNotas = prompt("Quantas notas serão computadas? ");
  let arrayNotas = [];
  let somaNotas = 0;
  for (let i = 0; i < quantiNotas; i++) {
    let nota = Number(prompt(`Digite a nota ${i + 1}: `));
    somaNotas = somaNotas + nota;
    arrayNotas.push(nota);
  }
  mediaNotas = somaNotas / quantiNotas;
  console.log(`A média das notas ${arrayNotas} é ${mediaNotas.toFixed(2)}`);
}
