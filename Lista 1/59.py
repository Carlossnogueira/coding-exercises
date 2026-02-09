"""
  Escreva um programa que solicite dois caracteres de A a Z ao usuário e imprima o número de caracteres existente 
entre  eles.  Assuma  que  o  usuário  digite  os  2  caracteres  em  ordem  alfabética.  Caso  não  o  estejam,  emitir 
mensagem de erro. 
Exemplo: Digite 2 caracteres: j t O numero de caracteres entre eles é: 9
"""

import string

alfabeto = list(string.ascii_uppercase)

A = input("Primeiro caracter: ").upper()
B = input("Segundo caracter: ").upper()

indice_A = 0
indice_B = 0

for i in range(len(alfabeto)):
    if alfabeto[i] == A:
        indice_A = i
    
    if alfabeto[i] == B:
        indice_B = i

if indice_A > indice_B:
    print("Ordem de caracteres invalida!")

resultado = indice_B - indice_A - 1
print(f"O intervalo dos caracteres é de {resultado}")
