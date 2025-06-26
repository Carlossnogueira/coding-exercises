#include <iostream>

using namespace std;

double calculateMedia(double min, double max){
    return (min + max) / 2;
}

int main(){
    double min, max, media;

    cout << "Write min stock value: " << endl;
    cin >> min;
    cout << "Write max stock value: " << endl;
    cin >> max;
    media = calculateMedia(min,max);
    
    cout << "Media: " << media << endl;
    
    return 0;
}

