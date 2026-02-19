/*
Inverta uma string.
Requisito: Nao pode usar metodos prontos como Reverse().
Exemplo: "abc" -> "cba"
*/

string Invert(string text)
{
    string tx = "";

    for (int i = text.Length - 1; i > -1; i--)
    {
        tx += text[i];
    }

    return tx;
}

Console.WriteLine(Invert("abc"));

// using reverse
string t = "abc";
char[] c = t.ToCharArray();
Array.Reverse(c);
Console.WriteLine(new string(c));

