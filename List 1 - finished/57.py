"""
Fazer um programa que leia uma frase e imprima somente as vogais
"""

vogais = ["a","i","u","e","o"]
frase = input("Entre a frase")
so_vogais = []


for i in range(len(frase)):
    for j in range(len(vogais)):
        if frase[i] == vogais[j]:
            so_vogais.append(frase[i])

print([so_vogais])