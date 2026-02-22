/*3) Dado um array de inteiros, calcule a soma de todos os elementos. */
class Thee{
    public static void main(String[] args) {
        int[] list = {1,2,3,4,5};

        int sum = 0;

        for(int i : list){
            sum += i;
        }

        System.out.println(sum);

    }
}