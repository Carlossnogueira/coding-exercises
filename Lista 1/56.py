"""
Fazer  um  programa  para  ler  um  vetor  de  inteiros  positivos  de  50  posições.  Imprimir  a  quantidade  de  números 
pares e de múltiplos de 5. 
"""

import random

# vou pular a parte da leitura
vetor = []
impar = 0
multiplo = 0


for i in range(50):
    vetor.append(random.randint(0,9999))

for i in range(len(vetor)):
    if vetor[i] % 5 == 0:
        multiplo += 1
    if vetor[i] % 2 == 0:
        impar += 1

print(vetor)
print(f"Impares: {impar}, multiplos: {multiplo}")
    