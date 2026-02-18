/*
    Dada uma seqüência de n números (vetor de inteiros), imprimi-la na ordem inversa que foi realizada a leitura.
*/

//               0  1  2  3  4  5
int[] numbers = {10,20,30,40,50,60};

for(int i = numbers.Length -1; i > -1; i--)
{
    Console.WriteLine(numbers[i]);
}