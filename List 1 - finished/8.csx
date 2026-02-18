/*
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:  
V =  3.14159 * R * R * A 
Onde as variáveis: V, R e A representam respectivamente o volume, o raio e a altura.
*/

double V = 3.14159;

Console.WriteLine("Raio:");
double R = double.Parse(Console.ReadLine());
Console.WriteLine("Altura:");
double A = double.Parse(Console.ReadLine());

Console.WriteLine("O resultado é: " + (V * R * R * A));

