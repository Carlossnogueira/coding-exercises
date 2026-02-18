/*
    Faça um programa de conversão de base numérica. O programa deverá apresentar uma tela de entrada com as
    seguintes opções:
    1 – Adição
    2 – Subtração
    3 – Multiplicação
    4 – Divisão
    Informe a opção:

    A  partir  da  opção  escolhida,  o  programa  deverá  solicitar  para  que  o  usuário  digite  dois  números.  Em  seguida,  o
    programa  deve  exibir  o  resultado  da  opção  indicada  pelo  usuário  e  perguntar  ao  usuário  se  ele  deseja  voltar  ao
    menu  principal.  Caso  a  resposta  seja   ́S ́  ou   ́s ́,  deverá  voltar  ao  menu,  caso  contrário  deverá  encerrar  o
    programa.
*/

#include <iostream>
#include <iomanip>
#include <cctype>
#include <string>

int sum(int numberOne, int numberTwo)
{
    int result = numberOne + numberTwo;
    return result;
}

int sub(int numberOne, int numberTwo)
{
    int result = numberOne - numberTwo;
    return result;
}

int multply(int numberOne, int numberTwo)
{
    int result = numberOne * numberTwo;
    return result;
}

double division(int numberOne, int numberTwo)
{
    double result = numberOne / numberTwo;
    return result;
}

int main()
{

    int option, numberOne = 0, numberTwo = 0;
    char wantContinue;

    while (true)
    {
        std::cout << "Entry an option: \n1.addition\n2.subtraction\n3.multiplication\n4.division" << std::endl;
        std::cin >> option;

        std::cout << "Entry first number:" << std::endl;
        std::cin >> numberOne;

        std::cout << "Entry second:" << std::endl;
        std::cin >> numberTwo;

        switch (option)
        {
        case 1:
            std::cout << "The sum of " << numberOne << " + " << numberTwo << " is " << sum(numberOne, numberTwo) << std::endl;
            break;
        case 2:
            std::cout << "The subtraction of " << numberOne << " - " << numberTwo << " is " << sub(numberOne, numberTwo) << std::endl;
            break;
        case 3:
            std::cout << "The multiplication of " << numberOne << " * " << numberTwo << " is " << multply(numberOne, numberTwo) << std::endl;
            break;
        case 4:
            std::cout << std::setprecision << std::setprecision(2);
            std::cout << "The multiplication of " << numberOne << " / " << numberTwo << " is " << division(numberOne, numberTwo) << std::endl;
            break;
        }

        std::cout << "Whant to continue? press S or s or another key to exit" << std::endl;
        std::cin >> wantContinue;

        // std::toupper expects an unsigned char (or EOF),
        // so we cast to unsigned char before calling it
        // and cast back to char afterwards.
        // Cast to unsigned char to avoid undefined behavior in std::toupper
        char upper_c = static_cast<char>(std::toupper(static_cast<unsigned char>(wantContinue)));


        if(upper_c == 'S'){
            continue;
            numberOne = 0;
            numberOne = 0;
            option = 0;
        }
        
        break;
    }

    return 0;
}