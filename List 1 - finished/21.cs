/*
21)  Faça  um  programa  que  leia  um  número  inteiro  e  mostre  uma  mensagem  na  tela  indicando  se  este  número  é 
positivo ou negativo. Pare a execução do programa quando o usuário requisitar. 
*/

while (true)
{
    int number;
    string option;

    Console.WriteLine("Entry a number");
    number = int.Parse(Console.ReadLine());

    if (number >= 0)
        Console.WriteLine("Number is positive");
    else 
        Console.WriteLine("Number is negative");

    Console.WriteLine("Continue? (S/s)");
    option = Console.ReadLine().ToUpper();

    if(option == "S" || option == "s") continue;
    else Environment.Exit(0);
}