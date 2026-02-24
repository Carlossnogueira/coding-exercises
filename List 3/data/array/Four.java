
/*
    Dado um array de inteiros, calcule a média dos valores. Use array.Length 
*/

public class Four {
    public static void main(String[] args) {
        
        int[] arr = {1,2,3,4,5,6};
        int sum = 0;
        double result = 0;

        for (int i : arr) {
            sum += i;
        }

        System.out.println(sum);
        System.out.println(arr.length);
        result = (double) sum / arr.length;
        
        System.out.println(result);

    }
}
