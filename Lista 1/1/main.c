/*
Faça um programa para calcular o estoque médio de uma peça, sendo que: 
ESTOQUE MÉDIO = (QUANTIDADE_MÍNIMA + QUANTIDADE_MÁXIMA) / 2
*/
#include <stdio.h>
#include <math.h>

int main() {
    int min, max;
    double estoqueMedio;

    printf("Digite a quantidade mínima: ");
    scanf("%d", &min);

    printf("Digite a quantidade máxima: ");
    scanf("%d", &max);  

    estoqueMedio = (min + max) / 2.0;
    if(fmod(estoqueMedio,1.0) == 0.0){
        printf("O estoque médio é: %.0f\n", estoqueMedio);
    }  else {
        printf("O estoque médio é: %.1f\n", estoqueMedio);
    }

    return 0;
}