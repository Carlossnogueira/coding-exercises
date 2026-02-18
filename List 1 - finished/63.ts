/*
    Escreva um programa que verifique se um número é par ou ímpar através de um método chamado VERIFICA. O 
    método deverá receber um número inteiro (n) e deverá retornar a mensagem “PAR” ou “ÍMPAR”.
*/


function verifica(n:number){
    if(n < 0)
        console.log("Não pode ser negativo")
    
    if(n % 2 === 0){
        console.log("PAR")
    } else{
        console.log("ÍMPAR")
    }
}

let result = verifica(Number(prompt("Entre com o número")))