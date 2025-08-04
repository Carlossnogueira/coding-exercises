// 9 indices - 10 elementos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pesquisaBinaria(arr, alvo){
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim){
        const meio = Math.floor((inicio + fim) / 2);

        if(arr[meio] === alvo){
            return meio; // Se o meio for o alvo, retorna o índice
        } else if (arr[meio] < alvo){
            inicio = meio + 1; // Se o meio for menor que o alvo, busca na metade direita
        } else if(arr[meio] > alvo){
            fim = meio - 1; // Se o meio for maior que o alvo, busca na metade esquerda
        }
    }

    return 0; 
}

console.log(pesquisaBinaria(numeros, 5)); 
