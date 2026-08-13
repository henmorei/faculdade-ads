const prompt = require("prompt-sync")();

function tabNumero(num){
    for (i = 0; i <= num; i++){
        prod = num * i;
        console.log(`${i} * ${num} = ${prod}`);
    }
}

const numInput = prompt('Digite o número para fazer 1 a N * N: ');
tabNumero(numInput);
