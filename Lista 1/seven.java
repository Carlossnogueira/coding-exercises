import java.util.Scanner;

class seven {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Entry with Fahrenheit:");
        float F = sc.nextFloat();
        float C = (F - 32) * 5 / 9;
        
        System.out.println(String.format("Celcius: %.2f", C));
    }
}
