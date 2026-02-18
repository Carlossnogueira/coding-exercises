/*
* Escrever um programa declarando três variáveis do tipo inteiro (a, b e c). Ler um valor maior que zero para cada 
* variável  (se  o  valor  digitado  não  é  válido,  mostrar  mensagem  e  ler  novamente).  Exibe  o  menor  valor  lido 
* multiplicado pelo maior e o maior valor dividido pelo menor.
*/

int a,b,c;

a = ReturnValue("A");
b = ReturnValue("B");
c = ReturnValue("C");

int bigger = Math.Max(a, Math.Max(b,c));
int smaller = Math.Min(a, Math.Min(b,c));

Console.WriteLine($"Smaller ({smaller}) * Bigger ({bigger}) = {smaller * bigger}");
Console.WriteLine($"Bigger ({bigger}) / Smaller ({smaller}) = {bigger/smaller:f2}");


int ReturnValue(string variableName)
{
    int value;
    while (true)
    {
        Console.WriteLine($"Entry a valid value for variable {variableName}");
        value = int.Parse(Console.ReadLine());
        if(value > 0)
        {
            return value;
        }
        Console.WriteLine("Invalid number...");
    }
}