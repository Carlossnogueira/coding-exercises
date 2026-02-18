/*
    Faça um programa que determine o maior e o menor entre N números lidos. A condição de parada é a entrada de 
    um valor 0, ou seja, o programa deve ficar executando até que a entrada seja igual a 0 (ZERO)
*/
int num = 0, gretter = 0;


while (true)
{
    Console.WriteLine("Entry a number, press 0 to exit");
    num = int.Parse(Console.ReadLine());

    if (num == 0)
        break;

    if(num > gretter)
        gretter = num;
}

Console.WriteLine($"Bigger number is: {gretter}");