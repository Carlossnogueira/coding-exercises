//   Faça um programa que gera e escreve os números ímpares dos números lidos entre 100 e 200. 
//      

let num = parseInt(prompt())
let numTwo = parseInt(prompt())

for(let i = 0; i < numTwo; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}