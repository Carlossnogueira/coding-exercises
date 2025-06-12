/*
Faça um programa para calcular o estoque médio de uma peça, sendo que: 
ESTOQUE MÉDIO = (QUANTIDADE_MÍNIMA + QUANTIDADE_MÁXIMA) / 2.
*/

import scan from '../scan'

//const scan = require('prompt-sync')()
const estoqueMinimo:number = Number(scan('Quantidade mínima: '))
const estoqueMaximo:number = Number(scan('Digite a quantidade maxima: '))
console.log(`A média do estoque é de: ${calcularEstoqueMedio(estoqueMinimo,estoqueMaximo)}`)


function calcularEstoqueMedio(estoqueMinimo: number, estoqueMaximo: number){
    const estoqueMedio = (estoqueMinimo + estoqueMaximo) / 2
    return estoqueMedio
}
