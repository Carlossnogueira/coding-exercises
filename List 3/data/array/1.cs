/*
Crie um array de inteiros com 5 posições. Atribua valores manualmente e imprima todos usando
um for tradicional.
*/

int[] numbers = new int[5];
int e; 

for(int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"Please, number {i + 1}: ");
    e = int.Parse(Console.ReadLine());
    numbers[i] = e;
}

for(int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}