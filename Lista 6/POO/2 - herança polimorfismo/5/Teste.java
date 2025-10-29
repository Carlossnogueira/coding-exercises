public class Teste{
    public static void main(String[] args) {
        Carro carro = new Carro("marca de carro", "modelo de carro", 150);
        Moto moto = new Moto("marca de moto", "modelo de moto", 110);

        System.out.println(carro.imprimirDetalhes());
        System.out.println(moto.imprimirDetalhes());
    }
}
