/*
    Exercício 4: Máquina de Tabuada
    Conceito: Laço for
    Crie um programa que peça um número inteiro ao usuário e exiba sua tabuada
    de 1 a 10 no formato:
    5 x 1 = 5
    5 x 2 = 10
    ...
    5 x 10 = 50
    Desafio: Permita que o usuário escolha até qual multiplicador ir (ex: tabuada
    do 7 até 15)
*/

#include <stdio.h>

void tabuada(int *multiplicador, int *limite)
{

    for (int i = 1; i <= (*limite); i++)
    {
        printf("%d * %d = %d\n", *multiplicador, i, *multiplicador * i);
    }

}

int main()
{

    int numero = 0;
    int limite = 0;

    int *ptrNumero = &numero;
    int *ptrLimite = &limite;

    printf("Coloque o multiplicador:\n");
    scanf("%d", ptrNumero);
    printf("Até qual multiplicador devemos ir?\n");
    scanf("%d", ptrLimite);
    tabuada(ptrNumero, ptrLimite);

    return 0;
}