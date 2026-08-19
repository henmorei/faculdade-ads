const prompt = require("prompt-sync")();
console.clear();

function converteNum(num) {
  return Number(num.replace(',', '.'));
}

//////////////////////////////////////////////////////////////////

console.log("##### EXERCÍCIOS AULA 02 #####\n");
console.log("(1) Cálculo de médias");
console.log("(2) Cálculo de taxa do garçom");
console.log("(3) Cálculo de financiamento");
console.log("(4) Cálculo de idade");
console.log("(5) Números vizinhos");

const userSelect = Number(prompt("Selecione o execicio: "));
switch (userSelect) {
  case 1:
    exercicio001();
    break
    break
  case 2:
    exercicio002();
    break
  case 3:
    exercicio003();
    break
  case 4:
    exercicio004();
    break
  case 5:
    exercicio005();
    break
  default:
    prompt('Opção inválida, tente novamente....');
}

//////////////////////////////////////////////////////////////////

function exercicio001() {

  // Elaborar um programa que leia 2 notas de um aluno. Calcule e mostre a média
  // das notas.

  console.clear();
  console.log("#### Cálculo de médias ####\n");
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
};

function exercicio002() {

  // -Elaborar um programa que leia o valor de um jantar. Sabendo que a taxa do
  // garçom é de 10%, calcule e mostre a taxa do garçom e o valor total a ser pago.

  console.clear();
  console.log('#### Cálculo de taxa do garçom ####\n');
  valorTaxa = Number(prompt('Qual a porcentagem da taxa de serviço? '));
  valorJantar = prompt('Qual o valor  do jantar? ');
  valorJantar = converteNum(valorJantar);
  valorJantar = prompt('Qual o valor  do jantar? ');
  valorJantar = converteNum(valorJantar);
  totalTaxa = (valorJantar * (valorTaxa / 100));
  totalJantar = (valorJantar + totalTaxa);

  console.log(`
    ================================================
    CUPOM FISCAL
    ================================================
    Valor do jantar                R$${valorJantar.toFixed(2)}
    Porcentagem de serviço         ${valorTaxa}%
    Valor da taxa                  R$${totalTaxa.toFixed(2)}
    -----------------------------------------------
    Total a PAGAR                  R$${totalJantar.toFixed(2)}
    ================================================`);
};

function exercicio003() {

  // -Elaborar um programa que leia o valor de um veículo. Mostre a promoção de
  // financiamento da revenda, que consiste em 50% de entrada e o valor do saldo
  // em 12x.

  console.clear();
  console.log('#### Cálculo de financiamento ####\n');

  const valorCarro = Number(prompt('Qual o valor do veículo? '));
  console.log(`
    Valor de revenda

    Valor de entrada R$${(valorCarro * 0.5).toFixed(2)}
    + 12x R$${((valorCarro * 0.5) / 12).toFixed(2)}
    `)

};


function exercicio004() {

  // -Elaborar um programa que leia nome e idade de um aluno. Calcule o ano que
  // ele nasceu. Exiba mensagem informando o nome do aluno e seu ano de
  // nascimento.

  console.clear();
  console.log('#### Cálculo de idade ####\n');

  const entradaNome = prompt("Digite seu nome: ");
  const entradaData = prompt("Digite sua data de nascimento (DD/MM/YYYY): ");

  const partes = entradaData.split('/');

  const diaNasc = parseInt(partes[0], 10);
  const mesNasc = parseInt(partes[1], 10);
  const anoNasc = parseInt(partes[2], 10);

  const hoje = new Date();
  let idade = hoje.getFullYear() - anoNasc;
  const mesAtual = hoje.getMonth() + 1;
  const diaAtual = hoje.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  console.log(`${entradaNome}, sua idade é ${idade} anos.`);
};

function exercicio005() {
  console.log('#### Números vizinhos ####\n');
  const entradaNumero = Number(prompt("Digite um número: "));
  console.log(`Os números vizinhos de ${entradaNumero} são ${entradaNumero - 1} e ${entradaNumero + 1}`);
};  

