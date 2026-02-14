/*
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:  
V =  3.14159 * R * R * A 
Onde as variáveis: V, R e A representam respectivamente o volume, o raio e a altura.
*/

import java.util.Scanner;

public class eight{
    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        float V = 3.14159f;

        System.out.println("Raio:");
        float R = sc.nextFloat();

        System.out.println("Altura:");
        float A = sc.nextFloat();

        V = V * R * R * A;

        System.out.println("O resultado é: " + V);
        sc.close();
    }
}