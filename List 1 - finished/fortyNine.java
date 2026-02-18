/*
 Leia 2 vetores de inteiros V1 e V2 de N componentes cada (no máximo 50). Determine e imprima quantas vezes 
que V1 e V2 possuem valores idênticos nas mesmas posições.
*/

import java.util.Random;

public class fortyNine {
    public static void main(String[] args) {
        Random random = new Random();

        int[] V1 = new int[50];
        int[] V2 = new int[50];
        int equalQuantity = 0;
        String equalNumbers = "";
        String V1Numbers = "";
        String V2Numbers = "";

        for (int i = 0; i < V1.length; i++) {
            V1[i] = random.nextInt(100);
            V2[i] = random.nextInt(100);
            V1Numbers += V1[i] + ",";
            V2Numbers += V2[i] + ",";
            if(V1[i] == V2[i]){
                equalQuantity++;
                equalNumbers += V1[i] + ",";
            }
        }

        System.out.println("V1 numbers: " + V1Numbers);
        System.out.println("V2 numbers: " + V2Numbers);
        System.out.println("Has " + equalQuantity + " numbers: " + equalNumbers);

    }
}
