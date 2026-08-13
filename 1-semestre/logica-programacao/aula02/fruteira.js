const prompt = require("prompt-sync")();

const nomeFruta = prompt("Qual fruta você comprou? ");
const quantFruta = Number(prompt("Quantas unidades? "));

const verificaQuantidade = function (qntFruta, nmFruta) {
  switch (true) {
    case (qntFruta >= 2):
      return `Você comprou ${qntFruta} unidades de ${nmFruta}s.`;
    case (qntFruta === 1):
      return `Você comprou ${qntFruta} unidade de ${nmFruta}.`;
    default:
      return "Número inválido!";
  }
};

const saida = verificaQuantidade(quantFruta, nomeFruta);
console.log(saida);
