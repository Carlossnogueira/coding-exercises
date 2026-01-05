/*
    Escreva  um  programa  que  leia  dois  números  inteiros  e  apresente  as  opções  para  usuário  escolher  o  que  deseja 
    realizar: 
    1 – Verificar se um dos números lidos é ou não múltiplo do outro 
    2 – Verificar se os dois números lidos são pares 
    3 – Verificar se a média dos dois números é maior ou igual a 7. 
    4 – Sair 
*/

console.log("Entry an option: \n1.Verify Multiples\n2.Pairs\n3.Grather than or equal to 7")
let option: number = Number(prompt())
let result: number = 0

console.log("Value one: ")
let valueOne: number = Number(prompt())

console.log("Value two: ")
let valueTwo: number = Number(prompt())

switch (option) {
    case 1:
        VerifyMultiples(valueOne, valueTwo);
        break;
    case 2:
        Pairs(valueOne, valueTwo);
        break;
    case 3:
        GratherThenSeven(valueOne, valueTwo);
        break;
}


function Pairs(numberOne: number, numberTwo: number) {
    let pairOne: number = numberOne  % 2
    let pairTwo: number = numberTwo  % 2

    if (pairOne == 0)
        console.log(`${numberOne} is pair`)
    else
        console.log(`${numberOne} isn't pair`)

    if (pairTwo == 0)
        console.log(`${numberTwo} is pair`)
    else
        console.log(`${numberTwo} isn't pair`)


}

function GratherThenSeven(numberOne: number, numberTwo: number) {

    if (numberOne > 7) {
        console.log(`${numberOne} is grather than 7`)
    } else if (numberOne == 7) {
        console.log(`${numberOne} is equal to 7`)
    } else {
        console.log(`${numberOne} is smaller than 7`)
    }

    if (numberTwo > 7) {
        console.log(`${numberTwo} is grather than 7`)
    } else if (numberTwo == 7) {
        console.log(`${numberTwo} is equal to 7`)
    } else {
        console.log(`${numberTwo} is smaller than 7`)
    }

}

function VerifyMultiples(numberOne: number, numberTwo: number) {
    let result: number = numberOne  % numberTwo;

    if (result == 0) {
        console.log(`${numberOne} is multiple of ${numberTwo}`)
    } else {
        console.log(`${numberOne} isn't multiple of ${numberTwo}`)
    }
}