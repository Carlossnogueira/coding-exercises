/*
  Faça um programa que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, 
    e  se  é  positivo  ou  negativo.  O  programa  só  deve  parar  de  rodar  quando  o  usuário  responder  "S"  na  seguinte 
    pergunta, "Deseja encerrar o programa?" .
*/


int num = 0;
string toContinue;

while (true)
{
    try
    {
        Console.WriteLine("Entry a number: ");
        num = int.Parse(Console.ReadLine());
        if (num % 2 == 0)
            Console.WriteLine($"{num} is odd");
        else
            Console.WriteLine($"{num} is even");
        Console.WriteLine("Whant to exit? press s");
        toContinue = Console.ReadLine().ToUpper();
        if (toContinue == "S")
            Environment.Exit(0);
    }
    catch
    {
        Console.WriteLine("Invalid number! Try again");
        continue;
    }
}