#include <stdio.h>

int main()
{
    int id;
    int quantity = 0;
    double grade;
    double total = 0.0;

    while (1)
    {
        printf("Entry student Id or 0 to exit:\n");
        scanf("%d", &id);
        if (id == 0)
        {
            break;
        }

        printf("Entry the grade:\n");
        scanf("%lf", &grade);

        total += grade;
        quantity++;

    }

    // Debug
    printf("id: %d\n", id);
    printf("total: %lf\n", total);
    printf("quantity: %d\n", quantity);

    if (quantity > 0)
    {
        printf("The grade is: %.2lf\n", total / quantity);
    }
    else
    {
        printf("No students.\n");
    }

    return 0;
}