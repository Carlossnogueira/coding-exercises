"""
    Escreva  um  programa  que  leia  um  conjunto  de  números  positivos  e  exiba  o  menor  e  o  maior.  Suporemos  que  o 
    número de elementos deste conjunto  não é conhecido, e que um número negativo será  utilizado para sinalizar  o 
    fim dos dados
"""


num = 0
big = 0
small = 0

while True:
    num = int(input("Entry a number"))

    if num <= 0:
        break

    if small == 0:
        small = num

    if big < num:
        big = num
    
    if small > num:
        num = small

print(f"small number: {small}, bigger: {big}")