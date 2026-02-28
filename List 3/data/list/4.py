"""
 Dada uma List, retorne o maior número da lista. Não use LINQ. Faça manualmente
"""

list = [1, 2, 3, 4, 5]
maior = 0


for i in range(len(list)):
    if maior == 0:
        maior = list[i]

    if list[i] > maior:
        maior = list[i]

print(maior)  