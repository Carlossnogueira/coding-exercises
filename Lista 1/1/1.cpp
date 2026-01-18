#include <iostream>


int main(){
    int min = 0;
    int max = 0;


    std::cout << "Write min stock value:\n" << std::endl;
    std::cin >> min;

    std::cout << "Write max stock value:\n" << std::endl;
    std:: cin >> max;

    double result =  (static_cast<double>(min) + static_cast<double>(max)) / 2;
    std::cout << "Media: " << result << std::endl; 
 

    return 0;
}