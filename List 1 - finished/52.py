"""" 
Fazer um programa ler um vetor de inteiros e positivos e imprimir quantas vezes aparece o número 1, 3 e 4, nesta 
ordem. O vetor terá no máximo 100 posições. Sair do programa quando for digitado -1. 
"""

vet = []
show = 0

for i in range(100):
    num = int(input("Entry a number or -1 to exit"))
    if num == -1:
        break
    vet.append(num)
   

# tamanho = 100  array do indice é 99 preciso de 97 para ele contar três casas para frente
for i in range(len(vet) - 2):
    if vet[i] == 1 and vet[i + 1] == 3 and vet[i + 2] == 4:
        show += 1

print(show)
