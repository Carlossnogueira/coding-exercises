/*
 Faça um programa que leia um número. Se positivo  armazene-o em A, se for negativo, em B. No final mostrar o resultado.
*/


int number,A,B;

Console.WriteLine("Entry a number: ");
number = int.Parse(Console.ReadLine());

if(number >= 0)
{
    A = number;
    Console.WriteLine("Number is positive!");
} else
{
    B = number;
    Console.WriteLine("Number is negative!");
}