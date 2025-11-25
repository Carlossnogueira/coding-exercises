/*
  Escreva um programa que leia dois números e exiba mensagem informando o valor do maior número e o valor do 
menor número. Se os dois números forem iguais, o programa deve exibir mensagem informando este fato
*/


let num1 = 1
let num2 = 2

if(num1 === num2)
    console.log("Ambos os numeros são iguais")
else if(num1 > num2) 
    console.log(`${num1} é maior que ${num2}`)
else
    console.log(`${num2} é maior que ${num1}`)