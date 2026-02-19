/*
2) Leia 5 números do usuário e armazene em um array. Depois imprima apenas os números
maiores que 10.
*/

int[] n = new int[5];

for(int i =0; i< n.Length; i++)
{
    Console.WriteLine($"Entry number {i+1}");
    n[i] = int.Parse(Console.ReadLine());
}

foreach(int c in n)
{
    if(c > 10)
        Console.WriteLine(c);
}
