/*
    Fazer  um  programa  que  sorteie  um  número  de  0  a  100  e  que  permita  que  o  usuário  (sem  conhecer  o  número 
    sorteado)  tente  acertar.  Caso  não  acerte,  o  programa  deve  imprimir  uma  mensagem  informando  se  o  número 
    sorteado é maior ou menor que a tentativa feita. Ao acertar o número, o programa deve imprimir a quantidade de 
    tentativas feitas. 
*/

import java.util.Random;
import java.util.Scanner;

public class fifty {
    public static void main(String[] args) {
        Random rd = new Random();
        Scanner sc = new Scanner(System.in);
        int number = rd.nextInt(100);
        int n = 0;
        int tryed = 0;
        
        do {
            tryed++;
            System.out.println("Entry a number: ");
            n = sc.nextInt();
            if(n > number){
                System.out.println("Your number is bigger than assorted number");
            } else{
                 System.out.println("Your number is small than assorted number");
            }
        } while (n != number);

        System.out.println("The correct number is " + number + " you tryed " + tryed + " times.");
        sc.close();
    }
}
