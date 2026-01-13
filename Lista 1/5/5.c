#include <stdio.h>

int main(){

    int fuelEfficiency = 12;
    double avaregeSpeed, distanceTraveled, litersUsed;
    int timeSpent;


    printf("Enter the average speed of the trip (km/h):\n");
    scanf("%lf", &avaregeSpeed);
    getchar();
    printf("Enter the time spent on the trip (hours):\n");
    scanf("%d", &timeSpent);

    distanceTraveled = avaregeSpeed * (double)timeSpent;
    litersUsed = distanceTraveled / (double)fuelEfficiency;

    printf("\nTrip Results:");
    printf("Average speed: %.2lf km/h\n", avaregeSpeed);
    printf("Time spent: %d hours\n", timeSpent);
    printf("Distance traveled: %.2lf km\n", distanceTraveled );
    printf("Fuel used: %.2lf liters\n", litersUsed);

    return 0;
}