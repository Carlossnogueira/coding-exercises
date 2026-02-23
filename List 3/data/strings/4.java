/*
    Verifique se uma string e palindromo.
    Requisito: Resolver usando a logica do exercicio anterior.
    Exemplo: "ovo" -> true
*/

class Four{
    public static void main(String[] args) {

        String word = "ovo";
        String inverted = "";

        for(int i = word.length() - 1; i > -1; i--){
            char letter = word.charAt(i);
            inverted += String.valueOf(letter);
        }

        if(word.equals(inverted)){
            System.out.println("A palavra é um polindromo");
        } else {
            System.out.println("A palavra não é um polindromo");
        }

    }
}