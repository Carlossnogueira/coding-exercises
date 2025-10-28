# Exercícios de Programação Orientada a Objetos (POO)

## Nível 1 – Básico

1. **Classe Pessoa**
   - Crie uma classe `Pessoa` com os atributos: `nome`, `idade` e `email`.
   - Adicione um método que imprima os dados da pessoa.
   - Crie 2 objetos e teste o método.

2. **Classe Retângulo**
   - Crie uma classe `Retangulo` com `largura` e `altura`.
   - Adicione métodos para calcular área e perímetro.
   - Crie um objeto e teste os métodos.

3. **Classe ContaBancaria**
   - Crie uma classe `ContaBancaria` com atributos: `titular`, `saldo`.
   - Adicione métodos: `depositar(valor)` e `sacar(valor)`.
   - Crie um objeto, deposite e saque valores, imprimindo o saldo.

---

## Nível 2 – Herança e Polimorfismo

4. **Animais**
   - Crie uma classe `Animal` com método `fazerSom()`.
   - Crie classes `Cachorro` e `Gato` que herdam de `Animal` e sobrescrevam `fazerSom()`.
   - Teste chamando o método de cada objeto.

5. **Veículos**
   - Crie uma classe `Veiculo` com atributos `marca`, `modelo` e `velocidadeMaxima`.
   - Crie classes `Carro` e `Moto` que herdam de `Veiculo`.
   - Adicione um método `imprimirDetalhes()` sobrescrito em cada classe.

---

## Nível 3 – Encapsulamento e Interfaces

6. **Livro**
   - Crie uma classe `Livro` com atributos `titulo`, `autor` e `preco`.
   - Os atributos devem ser privados e acessados via getters/setters.
   - Teste criando objetos e alterando valores.

7. **Interface Pagamento**
   - Crie uma interface `IPagamento` com método `pagar()`.
   - Crie classes `CartaoCredito` e `Boleto` que implementam `IPagamento`.
   - Teste chamando `pagar()` de cada objeto.

---

## Nível 4 – Exercícios Práticos

8. **Sistema Escolar**
   - Crie classes: `Pessoa`, `Aluno` (herda Pessoa) e `Professor` (herda Pessoa).
   - `Aluno` deve ter uma lista de notas e um método para calcular média.
   - `Professor` deve ter uma lista de disciplinas e um método para imprimir suas disciplinas.
   - Teste criando objetos e usando os métodos.

9. **Loja de Produtos**
   - Crie classe `Produto` com `nome`, `preco`, `quantidadeEstoque`.
   - Crie uma classe `Carrinho` que pode adicionar/remover produtos e calcular total.
   - Teste adicionando produtos e mostrando total da compra.

10. **Polimorfismo com Formas Geométricas**
    - Crie uma classe `Forma` com método `calcularArea()`.
    - Crie classes `Circulo`, `Quadrado` e `Triangulo` que sobrescrevam `calcularArea()`.
    - Crie uma lista de formas e calcule a área total usando polimorfismo.

---

> 💡 **Dica:** Faça um exercício de cada vez. Tente primeiro sem olhar a solução e só depois revise. Experimente criar objetos diferentes, testar métodos e modificar atributos para praticar de verdade.

