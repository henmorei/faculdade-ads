let matrizPai = new Array();
const nMax = 30;

let n = 1;
for (let i = 1; i <= nMax / 3; i++) {
  let matrizSub = new Array();
  for (let j = 0; j < 3; j++) {
    matrizSub.push(n);
    n++;
  }
  matrizPai.push(matrizSub);
}
console.log(matrizPai);
