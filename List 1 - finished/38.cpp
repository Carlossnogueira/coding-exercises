/*
    Faça  um  programa  que  leia  as  variáveis  C  e  N,  respectivamente  código  e  número  de  horas  trabalhadas  de  um
    operário. E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora. Quando o número de horas exceder a
    50,  calcule  o  excesso  de  pagamento  armazenando-o  na  variável  E,  caso  contrário  zerar  tal  variável.  A  hora
    excedente de trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário excedente. O
    programa  só  deve  parar  de  rodar  quando  o  usuário  responder  "S"  na  seguinte  pergunta,  "Deseja  encerrar  o
    programa?".
*/

#include <iostream>
#include <iomanip>
#include <cctype> 
int main()
{

    int C = 0, N = 0, E = 0;
    double extra = 0, real = 0, withExtra = 0;
    char wantContinue;

    while (true)
    {
        std::cout << "Entry employee code: " << std::endl;
        std::cin >> N;
        std::cout << "Entry number of hours worked: " << std::endl;
        std::cin >> N;

        if (N > 50)
        {
            E = N - 50;
        }

        real = static_cast<double>(N - E) * 10;
        extra = static_cast<double>(E) * 20;
        withExtra = real + extra;

        std::cout << std::fixed << std::setprecision(2) << "Salary is R$ " << real << " extra hours is R$ " << extra << " , total =  R$ " << withExtra << std::endl;

        std::cout << "Want exit the program? (press S or s)" << std::endl;
        std::cin >> wantContinue;

        char casted_char = static_cast<char>(std::toupper(static_cast<unsigned char>(wantContinue)));


        if (casted_char == 'S')
        {
            break;
        }
    }

    return 0;
}