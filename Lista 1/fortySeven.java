/*
 Considere um vetor de 10 números inteiros positivos maiores que zero e um único número inteiro, também positivo 
e maior que zero. Faça um programa para: 
a. ler pelo teclado o vetor; 
b. ler pelo teclado o número X; 
c. dizer quantos números no vetor são maiores que X, menores que X e iguais a X. 
*/

import java.util.Scanner;

public class fortySeven {
    public static void main(String[] args) {

        int[] vet = new int[10];
        int x = 0, bigthan = 0, lessthan = 0, equal =0;

        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < vet.length; i++) {
            System.out.println("Entry the " + (i + 1) + " number ");
            vet[i] = sc.nextInt();
        }

        System.out.println("Entry the X number");
        x = sc.nextInt();

        for (int i =0; i < vet.length; i++){
            if(vet[i] > x){
                bigthan++;
            } else if (vet[i] < x) {
                lessthan++;
            } else{
                equal++;
            }
        }

        System.out.println("=== RESULT FOR NUMBER " + x + " ===\nBig than: " + bigthan + "\nLess than: " + lessthan +"\nEqual: " + equal);
        sc.close();

    }
}