"""
 Fazer um programa para armazenar em um vetor, vários números inteiros e positivos e calcular a média. Imprimir 
também o maior. A quantidade de números lidos será definida pelo usuário. 
"""

vet = []
quantidade = int(input("Entre a quantidade de números: "))

for i in range(quantidade):
    n = int(input(f"Entre com o {i+1}º número positivo e inteiro: "))
    vet.append(n)


maior = vet[0] 
soma = 0

for num in vet:
    soma += num
    if num > maior:
        maior = num

media = soma / quantidade

print(f"\nMaior: {maior}")
print(f"Média: {media:.2f}")