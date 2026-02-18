# Escreva um programa que leia dois números e apresente a diferença do maior para o menor.

number_one = int(input("Entry first number"))
number_two = int(input("Entry secound number"))
dif = 0

if number_one > number_two:
    dif = number_one - number_two
else:
    dif = number_two - number_one

print(f"The dif of numbers is {dif}")

