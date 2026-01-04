/*
Escreva um programa que exiba as seguintes opções e realize os que se pede em cada uma delas: 
1 – Adição 
2 – Subtração 
3 – Multiplicação 
4 – Divisão
*/

console.log("Entry an option: \n1.Sum\n2.Subtraction\n3.Multiplication\n4.Division")
let option = Number(prompt())
let result = 0

console.log("Value one: ")
let valueOne = Number(prompt())

console.log("Value two: ")
let valueTwo = Number(prompt())


switch (option) {
    case 1:
        result = valueOne + valueTwo;
        console.log(`Result ${result}`)
        break;
    case 2:
        result = valueOne - valueTwo;
        console.log(`Result ${result}`)
        break;
    case 3:
        result = valueOne * valueTwo;
        console.log(`Result ${result}`)
        break;
    case 4:
        result = valueOne / valueTwo
        console.log(`Result ${result.toFixed(2)}`)
}