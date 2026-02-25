/*5. Conte quantas vezes um caractere especifico aparece.
Requisito: Percorrer usando foreach.
Exemplo: ('a', "banana") -> 3 */

public class Five {
    public static void main(String[] args) {
        
        String word = "banana";
        char character = 'a';
        int quantity = 0;
       

        for(char i :  word.toCharArray() ){
            if(i == character){
                quantity++;
            }
        }

        System.err.println("Char aparece: " + quantity + " vezes ");

    }
}
