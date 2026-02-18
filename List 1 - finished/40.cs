/*
    A  Secretaria  de  Meio  Ambiente  que  controla  o  índice  de  poluição  mantém  03  grupos  de  indústrias  que  são 
    altamente  poluentes  do  meio  ambiente.  O  índice  de  poluição  aceitável  varia  de  0,05  até  0,25.  Se  o  índice  sobe 
    para 0,3 as indústrias do 1º  grupo são intimadas a suspenderem suas atividades, se o índice crescer para 0,4 as 
    industrias do 1º  e 2º  grupo  são intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos 
    devem  ser  notificados  a  paralisarem  suas  atividades.  Faça  um  programa  que  leia  o  índice  de  poluição  medido  e 
    emita  a  notificação  adequada  aos  diferentes  grupos  de  empresas.  O  algoritmo  só  deve  parar  de  rodar  quando  o 
    usuário responder "S" na seguinte pergunta, "Deseja encerrar o programa?". 
*/


string toContinue;
double pollution;

do
{
    Console.WriteLine("Entry poluition level:");
    poluition = double.Parse(Console.ReadLine());

    if (pollution <= 0.05 && pollution <= 0.25)
        Console.WriteLine("Poluition level is acceptable");
    if (pollution > 0.25 && pollution <= 0.30)
        Console.WriteLine("Industry of group one needs stop it's actives");
    if (pollution > 0.30 && pollution <= 0.40)
        Console.WriteLine("Industry of group one and two needs stop yours actives");
    if (pollution > 0.50)
        Console.WriteLine("All Industry groups need to stop it's actives");

    Console.WriteLine("Whant to exit? press s");
    toContinue = Console.ReadLine().ToUpper();
    if (toContinue == "S")
        break;

} while (toContinue != "S");

