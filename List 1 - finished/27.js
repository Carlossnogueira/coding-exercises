/*
    Escreva um programa que leia: 
    - a quantidade de números que deverá processar; 
    - os números que deverá processar,e calcule e exiba, para cada número a ser processado o seu fatorial. 
    Lembrete: O fatorial de um número N é dado pela fórmula: N! = 1 * 2 * 3 * 4 * 5 * ... * N
*/ 

// entrada do numero
let num = parseInt(prompt("Entry a number:"))

// inicio da conta
let fato = 1

/*
    i é igual ao numero selecionado
    enqunato o i for menor que 1 ele diminuira 1 do contador
*/ 
for(let i = num; i > 1; i--){
    // Multiplicação do primeiro numero e o contador decresente
    fato *= i;
    console.log(fato)
}