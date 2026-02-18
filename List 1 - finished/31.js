/*
    Escrever um programa que leia um conjunto de números positivos, e exiba se o número lido é par ou ímpar. Exiba 
    ao  final  a  soma  total  dos  números  pares  lidos  e  também  a  soma  dos  números  ímpares  lidos.  Suporemos  que  o 
    número de elementos deste conjunto  não é conhecido, e que um número negativo será  utilizado para sinalizar  o 
    fim dos dados. 
*/

let numbers = []
let odd = []
let even = []

let oddSum = 0
let evenSum = 0

while (true) {
    console.log("Entry a number or a negative number to stop")
    let num = parseInt(prompt(""));

    if (num <= 0) break;
    numbers.push(num)

    if(num % 2 === 0){
        console.log(`${num} is odd`)
        odd.push(num)
    } else {
        console.log(`${num} is even`)
        even.push(num)
    }

}

odd.forEach((number) => {
    oddSum += number
})

even.forEach((number) => {
    evenSum += number
})

console.log(`odd sum is ${oddSum}`)
console.log(`even sum is ${evenSum}`)