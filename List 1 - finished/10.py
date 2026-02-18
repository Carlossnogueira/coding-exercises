"""
Escrever  um  programa  que  leia  dois  números  inteiros  e  mostre  todos  os  relacionamentos  de  ordem  existentes 
entre eles. Os relacionamentos possíveis são:  Igual,  Não igual,  Maior,   Menor, Maior ou igual, Menor ou igual. 
"""

number1 = int(input("Number one: "))
number2 = int(input("Number two: "))

if number1 == number2:
    print(f"{number1} é igual a {number2}")
else:
    print(f"{number1} não é igual a {number2}")

if number1 > number2:
    print(f"{number1} é maior que {number2}")
else:
    print(f"{number1} não é maior que {number2}")

if number1 < number2:
    print(f"{number1} é menor que {number2}")
else:
    print(f"{number1} não é menor que {number2}")

if number1 >= number2:
    print(f"{number1} é maior ou igual a {number2}")
else:
    print(f"{number1} não é maior ou igual a {number2}")

if number1 <= number2:
    print(f"{number1} é menor ou igual a {number2}")
else:
    print(f"{number1} não é menor ou igual a {number2}")



