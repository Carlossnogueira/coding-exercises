/*
    Escreva  um  programa  que  calcule  e  exiba  a  soma  dos  quadrados  dos  20  primeiros  números  inteiros  positivos 
    ímpares a partir do número informado pelo usuário menor que 10 e maior que zero.
*/


let num = 0;
let counter = 0;
let oddPush = 0;
let result = 0;

do {
    console.log("Entry a number greater than 0 and less then 10: ");
    num = parseInt(prompt(""));
} while (num <= 0 || num >= 10);

if (num % 2 === 0) {
    num++;
}

while (oddPush < 20) {

    let temp = num + counter;

    if (temp % 2 >= 1) {
        oddPush++
        result += temp*temp;
    }

    counter++;
}

console.log(`The sum is ${result}`)

