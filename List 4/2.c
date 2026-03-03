/**
    Exercício 2: O Caixa Eletrônico
    Conceito: Operadores de divisão e resto, tomada de decisão
    Um caixa eletrônico precisa entregar o menor número possível de cédulas para
    um saque. As cédulas disponíveis são: R$ 100, R$ 50, R$ 20, R$ 10, R$ 5, R$
    2. O programa deve ler o valor do saque (inteiro) e mostrar quantas cédulas de
    cada tipo serão entregues.
    Exigência especial: O programa deve verificar se o valor é válido (positivo
    e múltiplo de 2, já que não temos cédula de 1 real). Se não for, exiba uma
    mensagem de erro.
 */

#include <stdio.h>
#include <stdlib.h>

int main()
{

    int valor = 0;
    int temporario = 0;
    int *ptr = &valor;
    int conta = 0;

    int nota100 = 0;
    int nota50 = 0;
    int nota20 = 0;
    int nota10 = 0;
    int nota5 = 0;

    printf("Digite o valor para o saque:\n");
    // ptr é o endereço de memória
    scanf("%d", ptr);

    // *ptr é o valor dentro daquele local
    // no 155 até daria para entregar as notas, mas o valor é inválido porque não é múltiplo de 2
    if (*ptr % 2 > 0.0 || *ptr <= 0)
    {
        printf("O valor é inválido!");
        return 0;
    }

    temporario = *ptr;

    if (*ptr > 100)
    {
        nota100 = *ptr / 100;
        *ptr = *ptr % 100;
    }

    if (*ptr >= 50)
    {
        nota50 = *ptr / 50;
        *ptr = *ptr % 50;
    }

    if (*ptr >= 20)
    {
        nota20 = *ptr / 20;
        *ptr = *ptr % 20;
    }

    if (*ptr >= 10)
    {
        nota10 = *ptr / 10;
        *ptr = *ptr % 10;
    }

    if (*ptr >= 5)
    {
        nota5 = *ptr / 5;
        *ptr = *ptr % 5;
    }

    printf("Para o valor de %d, serão entregues:\n", temporario);
    printf("%d cédulas de R$ 100\n", nota100);
    printf("%d cédulas de R$ 50\n", nota50);
    printf("%d cédulas de R$ 20\n", nota20);
    printf("%d cédulas de R$ 10\n", nota10);
    printf("%d cédulas de R$ 5\n", nota5);

    return 0;
}