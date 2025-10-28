public class ContaBancaria {

    private String Titular;
    private Double Saldo;

    public ContaBancaria(String titular, Double saldo) {
        Titular = titular;
        Saldo = saldo;
    }

    public String getTitular() {
        return Titular;
    }

    public void setTitular(String titular) {
        Titular = titular;
    }

    public Double getSaldo() {
        return Saldo;
    }

    public void setSaldo(Double saldo) {
        Saldo = saldo;
    }

    public Double DepositarValor(Double valor) {

        if (valor < 0) {
            System.out.println("Valor do deposito é menor que o minimo de 1,00");
            return this.getSaldo();
        }

        this.setSaldo(this.getSaldo() + valor);
        return  this.getSaldo();
    }

    public Double SacarValor(Double valor){
        if(this.getSaldo() < valor){
            System.out.println("Valor do saque e maior que o valor guardado.");
            return this.getSaldo();
        }

        this.setSaldo(this.getSaldo() - valor);
        return getSaldo(); 
    }

}
