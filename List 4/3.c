/*
Exercício 3: Classificador de Triângulos
Conceito: Condicionais aninhadas, operadores lógicos
Leia três valores reais que representam os lados de um triângulo. Determine:
1. Se eles realmente formam um triângulo (cada lado menor que a soma dos
outros dois) 2. Se formam, classifique em: Equilátero (3 lados iguais), Isósceles
(2 lados iguais) ou Escaleno (todos diferentes) 3. Além disso, classifique em:
Acutângulo, Retângulo ou Obtusângulo (use o Teorema de Pitágoras)

Exigência especial: Use apenas if/else, sem operadores ternários

*/

#include <stdio.h>
#include <stdlib.h>

void Indentificar(int *valor1, int *valor2, int *valor3)
{

    printf("Primeiro valor:\n");
    scanf("%d", valor1);
    printf("Segundo valor:\n");
    scanf("%d", valor2);
    printf("Terceiro valor:\n");
    scanf("%d", valor3);

    if (*valor1 < *valor2 + *valor3 && *valor2 < *valor1 + *valor3 && *valor3 < *valor1 + *valor2)
    {
        printf("Trinangulo");
    }

    if (*valor1 == *valor2 && *valor2 == *valor3)
    {
        printf("Equilatero");
    }

    if (*valor1 == *valor2 || *valor2 == *valor3 || *valor1 == *valor3)
    {
        printf("Isosceles");
    }

    if (*valor1 != *valor2 && *valor2 != *valor3 && *valor1 != *valor3)
    {
        printf("Escaleno\n");
    }

    // Teorema de Pitágoras
    // a² + b² = c²
    // c² > a² + b² → Obtusângulo
    // c² < a² + b² → Acutângulo
    // c² = a² + b² → Retângulo -- ok

    if ((*valor1 * *valor1) + (*valor2 * *valor2) == (*valor3 * *valor3) ||
        (*valor1 * *valor1) + (*valor3 * *valor3) == (*valor2 * *valor2) ||
        (*valor2 * *valor2) + (*valor3 * *valor3) == (*valor1 * *valor1))
    {
        printf("Retangulo\n");
    }
    else if ((*valor1 * *valor1) + (*valor2 * *valor2) > (*valor3 * *valor3) ||
             (*valor1 * *valor1) + (*valor3 * *valor3) > (*valor2 * *valor2) ||
             (*valor2 * *valor2) + (*valor3 * *valor3) > (*valor1 * *valor1))
    {
        printf("Obtusangulo\n");
    }
    else
    {
        printf("Acutangulo\n");
    }
}

int main()
{

    int valor1 = 0;
    int valor2 = 0;
    int valor3 = 0;

    int *ptr_valor1 = &valor1;
    int *ptr_valor2 = &valor2;
    int *ptr_valor3 = &valor3;

    Indentificar(ptr_valor1, ptr_valor2, ptr_valor3);

    return 0;
}