"""
Escreva um programa que leia um número inteiro e exiba o seu módulo. 
O módulo de um número x é: 
x se x é maior ou igual a zero 
x * (-1) se x é menor que zero
"""

number = int(input("Type an integer number: "))
if number >= 0:
    modulus = number
else:
    modulus = number * (-1)
print("The modulos of the number is:", modulus)


