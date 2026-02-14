/*

Escreva um programa que deverá ter as seguintes opções:

1 - Carregar Vetor  
2 - Listar Vetor 
3 - Exibir apenas os números pares do vetor 
4 - Exibir apenas os números ímpares do vetor 
5 - Exibir a quantidade de números pares existem nas posições ímpares do vetor 
6 - Exibir a quantidade de números ímpares existem nas posições pares do vetor 
7 - Sair 
 
Deverá ser implementado um método para realizar cada uma das opções de 1 a 6. 

*/

class Program {
    vet: number[] = [];

    CarregarVetor() {
        this.vet = [];
        let len = Number(prompt("Entre o tamanho do vetor: "));
        for (let i = 0; i < len; i++) {
            this.vet.push(Number(prompt(`Entre com o ${i + 1}º número:`)));
        }
    }

    ListarVetor() {
        console.log("Vetor completo:", this.vet.join(", "));
    }

    ExibirPares() {
        const pares = this.vet.filter(n => n % 2 === 0);
        console.log("Números pares:", pares.join(", "));
    }

    ExibirImpares() {
        const impares = this.vet.filter(n => n % 2 !== 0);
        console.log("Números ímpares:", impares.join(", "));
    }

    ParesNasPosicoesImpares() {
        let count = 0;
        for (let i = 1; i < this.vet.length; i += 2) {
            if (this.vet[i] % 2 === 0) count++;
        }
        console.log("Quantidade de pares em posições ímpares:", count);
    }

    ImparesNasPosicoesPares() {
        let count = 0;
        for (let i = 0; i < this.vet.length; i += 2) {
            if (this.vet[i] % 2 !== 0) count++;
        }
        console.log("Quantidade de ímpares em posições pares:", count);
    }

    Menu() {
        let opcao = 0;
        while (opcao !== 7) {
            opcao = Number(prompt(
                "1 - Carregar Vetor\n" +
                "2 - Listar Vetor\n" +
                "3 - Exibir apenas os números pares\n" +
                "4 - Exibir apenas os números ímpares\n" +
                "5 - Quantidade de pares em posições ímpares\n" +
                "6 - Quantidade de ímpares em posições pares\n" +
                "7 - Sair"
            ));

            switch (opcao) {
                case 1: this.CarregarVetor(); break;
                case 2: this.ListarVetor(); break;
                case 3: this.ExibirPares(); break;
                case 4: this.ExibirImpares(); break;
                case 5: this.ParesNasPosicoesImpares(); break;
                case 6: this.ImparesNasPosicoesPares(); break;
                case 7: console.log("Saindo..."); break;
                default: console.log("Opção inválida!");
            }
        }
    }
}

let programa = new Program();
programa.Menu();