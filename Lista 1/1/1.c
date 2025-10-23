#include <stdio.h>
#include <string.h>

int main(){
    int min, max, result;

    printf("Write min stock value:\n");
    scanf("%d", &min);
    printf("Write max stock value:\n");
    scanf("%d", &max);

    result = (min+max)/2;
    printf("Media: %d", result);

    return 0;
}
