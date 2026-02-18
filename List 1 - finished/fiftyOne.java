/*
    Fazer um programa para ler uma quantidade N de alunos. Ler a nota de cada um dos N alunos e calcular a média 
    aritmética  das  notas.  Contar  quantos  alunos  estão  com  a  nota  acima  de  7.0.  Obs.:  Se  nenhum  aluno  tirou  nota 
    acima de 5.0, imprimir mensagem: Não há nenhum aluno com nota acima de 5.
*/

import java.text.DecimalFormat;
import java.util.Scanner;

public class fiftyOne {
    public static void main(String[] args) {
        double[] grades = new double[3];
        double result = 0;
        double grade = 0;
        int moreThanFive = 0;
        Scanner sc = new Scanner(System.in);
        DecimalFormat dc = new DecimalFormat("0.00");

        for (int i = 0; i < grades.length; i++) {
            System.out.println("Entry the student grade");
            grade = sc.nextDouble();

            grades[i] = grade;

            if (grade >= 5.1) {
                moreThanFive++;
            }

        }

        for (int i = 0; i < grades.length; i++) {
            result += grades[i];
        }

        result = result / grades.length;

        if (moreThanFive > 1) {
            System.out.println("Students whith grade more than five:" + moreThanFive);
        } else {
            System.out.println("No student has grade more than five!");
        }

        System.out.println("Media is: " + dc.format(result));
        sc.close();

    }
}
