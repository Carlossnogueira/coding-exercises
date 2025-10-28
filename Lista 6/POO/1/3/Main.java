import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {

        DecimalFormat df = new DecimalFormat("00.00");

        ContaBancaria conta = new ContaBancaria("Luis Rodrigues dos Santos", 20.00);
        
        var saldoFormatado = df.format(conta.getSaldo());


        var resultDeposito = conta.DepositarValor(30.00);
        var resultSaque = conta.SacarValor(10.00);
        
       
        var depositoFormatado = df.format(resultDeposito);
        var saqueFormatado = df.format(resultSaque);

        System.out.println("\nProprietário da conta: " + conta.getTitular() + "\nValor atual da conta: " + saldoFormatado + "\nApós o deposito: "+depositoFormatado+
        "\nDepois do saque: " + saqueFormatado);
      }
}
