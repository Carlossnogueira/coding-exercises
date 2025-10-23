#include <stdio.h>
#include <string.h>

int main()
{

    double dolar, dolarValue, real;
    printf("Write a dolar value:\n");
    scanf("%lf", &dolar);
    printf("Write dolar price:\n");
    scanf("%lf", &dolarValue);

    real = dolarValue * dolar;
    printf("The result is: %.2f", real);

    return 0;
}