public class Veiculo {
    private String marca;
    private String modelo;
    private int velocidadeMaxima;
    
    
    public Veiculo(String marca, String modelo, int velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }


    public String imprimirDetalhes() {
        return "Veiculo [marca=" + marca + ", modelo=" + modelo + ", velocidadeMaxima=" + velocidadeMaxima + "]";
    }


    public String getMarca() {
        return marca;
    }


    public void setMarca(String marca) {
        this.marca = marca;
    }


    public String getModelo() {
        return modelo;
    }


    public void setModelo(String modelo) {
        this.modelo = modelo;
    }


    public int getVelocidadeMaxima() {
        return velocidadeMaxima;
    }


    public void setVelocidadeMaxima(int velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    
}
