const numeros = [5,10,15,20,25,30,35,40,45,50];

function pesquisa(arr, alvo){
    let inicio = 0;
    let fim = arr.length - 1;

    // i = 0
    // f = 9
    while (inicio <= fim){

        // 0 + 9 = 9
        // 9 / 2 = 4.5 = com o Math.floor fica 4
        const meio = Math.floor((inicio + fim) / 2);

        if(arr[meio] === alvo){
            return meio; 
        }
        
        // arr[4] = 25 for menor que o alvo 30
        // então o início passa a ser 5
        else if(arr[meio] < alvo){
            inicio = meio + 1;
        } 
        
        // arr[4] = 25 for maior que o alvo 30
        // então o fim passa a ser 3
        else if(arr[meio] > alvo){
            fim = meio - 1;
        }

        return -1; 
    }
}

console.log(pesquisa(numeros, 30));