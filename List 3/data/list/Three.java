/* Crie uma função que receba uma List e retorne a soma de todos os elementos. */

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Three {

    public static int SumList(List<Integer> list) {
        int sum = 0;

        for (int i : list) {
            sum += i;
        }

        return sum;
    }

    public static void Main(String[] args) {

        List<Integer> list = new ArrayList<>();

        Random rd = new Random();

        for (int i = 0; i < 5; i++) {
            var n = rd.nextInt(0,100);
            list.add(n);
            System.out.println("Number to sum: " + n);
        }
        

        var result  = SumList(list);

        System.out.println("The result of sum of random numbers is: " + result );
    }

}
