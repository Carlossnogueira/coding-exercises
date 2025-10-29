public class Moto extends Veiculo {

    public Moto(String marca, String modelo, int velocidadeMaxima) {
        super(marca, modelo, velocidadeMaxima);
    }

    @Override
    public String imprimirDetalhes() {
        return "Veiculo [marca=" + super.getMarca() + ", modelo=" + super.getModelo() + ", velocidadeMaxima="
                + super.getVelocidadeMaxima() + "] + Essa classe é uma moto";
    }

}
