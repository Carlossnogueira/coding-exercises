/*
 * Faça  um  algoritmo  que  leia  a  idade  de  uma  pessoa  expressa  em  anos,  meses  e  dias  e  escreva  a  idade  dessa 
 * pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias
 */


Console.WriteLine("Day?");
int day = int.Parse(Console.ReadLine());

Console.WriteLine("Month?");
int month = int.Parse(Console.ReadLine());

Console.WriteLine("Year?");
int year = int.Parse(Console.ReadLine());

int result = (year * 365) + (month * 30) + day;
Console.WriteLine($"Your have: {result}, days of life");
