/*
Faça um programa que: 
- Leia a cotação do dólar 
- Leia um valor em dólares 
- Converta esse valor para Real 
- Mostre o resultado 
*/

import scan from '../scan'

const cotDolar:number = Number(scan('Digite a cotação do dólar: '))
const valorDolar: number = Number(scan('Digite o valor em dólar: '))
const valorReal: number = valorDolar * cotDolar
console.log(`O valor em real é: R$${valorReal.toFixed(2)}`)