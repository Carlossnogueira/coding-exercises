#include <iostream>
#include <iomanip>

int main()
{

    double dolar = 0;
    double dolarValue = 0;
    double real = 0;

    std::cout << "Write a dolar value:" << std::endl;
    std::cin >> dolar;

    std::cout << "Write dolar price:" << std::endl;
    std::cin >> dolarValue;

    real = dolarValue * dolar;

    std::cout << std::fixed << std::setprecision(2);
    std::cout << "The result is: " << real << std::endl;
    

    return 0;
}