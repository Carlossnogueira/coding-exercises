/*
    Escreva  um  programa  que  calcule  e  retorne  o  salário  atualizado  através  do método  REAJUSTE.  O método  deve 
    receber o valor do salário e o índice de reajuste.
*/

function REAJUSTE(salario: number, indice: number): Number {
    let novoSalario: number = salario * (1 + indice / 100);

    return novoSalario;
}

let salario = Number(prompt("Entre com o salário: "))
let indice = Number(prompt("Entre com o indice de aumento: "))
console.log(`O resultado é ${REAJUSTE(salario,indice).toFixed(2)}`)