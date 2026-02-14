/*
 * Faça  um  algoritmo  que  leia  a  idade  de  uma  pessoa  expressa  em  anos,  meses  e  dias  e  escreva  a  idade  dessa 
 * pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias
 */

import java.util.Scanner;

public class Nine {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
           
            System.out.println("Day?");
            int day = sc.nextInt();

            System.out.println("Month?");
            int month = sc.nextInt();

            System.out.println("Year?");
            int years = sc.nextInt();

            int result = (years * 365) + (month * 30) + day;
            System.out.printf("Your have: %d, days of life", result);
        }
    }
}
