/*
    Exercício 1: Calculadora de Idade Canina

    Conceito: Variáveis, entrada/saída, operadores aritméticos
    Escreva um programa que pergunte a idade humana de um cachorro e calcule sua
    idade “canina”, sabendo que o primeiro ano de vida de um cachorro equivale a
    15 anos humanos, o segundo ano equivale a 9 anos humanos, e cada ano adicional
    equivale a 5 anos humanos.
    Exemplo: Se o cachorro tem 3 anos humanos → 15 + 9 + 5 = 29 anos caninos.
    Desafio extra: Trate entradas inválidas (idades negativas ou zero).
*/

#include <stdio.h>

int main()
{

    int idadeHumana = 0;
    int *idadeHumanaPrt = &idadeHumana;
    int soma = 0;

    printf("digite a idade humana do cachorro: \n");
    scanf("%d", idadeHumanaPrt); // aponta para o endereço

    if (*idadeHumanaPrt == 0 || *idadeHumanaPrt < 0)
    {
        printf("a idade é inválida\n");
    }

    /*
        1 2 3 4
        15 9 5 + 5
        1 - Pea a idade e subtrai por 3 = se for 4 anos ele tem 1
        2 - somamos os primeiros 3 anos 15 + 9 + 5 = 29
        3 - acrescenta a diferença 29 + 1 = 30
    */

    if (*idadeHumanaPrt == 1)
    {
        printf("O animal tem 15 anos\n");
    }
    else if (*idadeHumanaPrt == 2)
    {
        printf("O animal tem 24 anos\n");
    }
    else
    {
        soma = 15 + 9 + ((*idadeHumanaPrt - 2) * 5);
        printf("O animal tem %d anos\n", soma);
    }

    return 0;
}