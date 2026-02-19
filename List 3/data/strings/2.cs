/*
Conte quantas vogais existem em uma string.
Requisito: Fazer manualmente percorrendo caractere por caractere.
Exemplo: "casa" -> 2
*/

int Vowels(string text)
{
    char[] vowels = new char[5] {'a','i','u','e','o'};
    int quantity = 0;

    for (int i = 0; i < text.Length; i++)
    {
       for (int j = 0; j < vowels.Length; j++)
       {
         if(text[i] == vowels[j])
            quantity++;
       }
    }

    return quantity;
}



Console.WriteLine(Vowels("casa"));