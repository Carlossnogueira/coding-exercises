/*
    Uma  agência  de  publicidade  pediu  à  agência  de  modelos  Luz  &  Beleza  para  encontrar  uma  modelo  que  tenha 
    idade  entre  18  e  20  anos  para  participar  de  uma  campanha  publicitária  milionária  de  produtos  de  beleza.  Foram 
    inscritas 20 candidatas e, ao se inscreverem, forneceram nome e idade. Tais informações foram armazenadas em 
    2  vetores  distintos.  Faça  um  programa  para  imprima  o  vetor  que  contém  os  nomes  das  candidatas  aptas  a 
    concorrer a uma vaga para a campanha milionária.
*/

import java.util.Scanner;

public class fortyEight {
    public static void main(String[] args) {
      
        Scanner sc = new  Scanner(System.in);
        int[] years = new int[20];
        String[] names = new String[20];
        String modelName = "";
        int modelYears = 0;

        for(int i = 0; i <names.length; i++){
            System.out.println("Entry model name: ");
            modelName = sc.next();
            System.out.println("Model years old: ");
            modelYears = sc.nextInt();

            names[i] = modelName;
            years[i] = modelYears;
        }

        System.out.println("=== Model list: ===");
        for(int i =0; i < names.length; i++){
            if(years[i] >= 18 && years[i] <= 20){
               System.out.println("Model name: " + names[i] + ", is " + years[i] + " year's old");
            }
        }

        sc.close();
    }
}
