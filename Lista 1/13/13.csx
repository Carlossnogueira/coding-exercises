
// Escreva um programa que leia 3 números inteiros e imprima na tela os valores em ordem decrescente

int[] arr = new int[3];

for(int i =0 ; i < arr.Length; i++)
{
    Console.WriteLine($"Type the {i}° number:");
    int value = int.Parse(Console.ReadLine());
    arr[i] = value;
}

Array.Sort(arr);
Array.Reverse(arr);

Console.WriteLine("Result:");
foreach (int n in arr)
{
    Console.WriteLine(n);
}