/*
1. Crie uma List e adicione 5 números informados pelo usuário. Exiba todos os números usando
foreach
*/

List<int> numbers = new List<int>();
int e = 0;

for(int i = 0; i < 5; i++)
{
    Console.WriteLine($"Please, number {i + 1}: ");
    e = int.Parse(Console.ReadLine());
    numbers.Add(e);
}

foreach(int i in numbers)
{
    Console.WriteLine(i);
}