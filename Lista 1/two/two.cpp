#include <iostream>

using namespace std;

int main(){

    double dolar, dolarValue, real;

    cout << "Write a dolar value: ";
    cin >> dolarValue;
    cout << "Write a dolar price:";
    cin >> dolar;
    real = dolarValue * dolar;
    cout << "Real value: " << real << "R$" << endl;

    return 0;
}