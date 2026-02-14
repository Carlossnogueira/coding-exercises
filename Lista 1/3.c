/*
    Faça um programa para pagamento de comissão de vendedores de peças, levando-se em consideração que sua 
    comissão será de 5% do total da venda e que você tem os seguintes dados: 
    - Identificação do vendedor 
    - Código da peça 
    - Preço unitário da peça 
    - Quantidade vendida
*/

#include <stdio.h>

int main() {

    char seller[80];
    int code, soldQuantity;
    double price, sellerCommission;
    double commissionRate = 0.05;
    double totalSold;

    printf("Enter seller ID:\n");
    fgets(seller, sizeof(seller), stdin);

    printf("Code number:\n");
    scanf("%d", &code);

    printf("Price of product:\n");
    scanf("%lf", &price);

    printf("Sold quantity:\n");
    scanf("%d", &soldQuantity);

    totalSold = (double)soldQuantity * price;
    sellerCommission = totalSold * commissionRate;

    printf("\n--- SALE REPORT ---\n");
    printf("Seller ID: %s", seller);
    printf("Product code: %d\n", code);
    printf("Unit price: %.2lf\n", price);
    printf("Quantity sold: %d\n", soldQuantity);
    printf("Total sold: %.2lf\n", totalSold);
    printf("Commission (5%%): %.2lf\n", sellerCommission);

    return 0;
}
