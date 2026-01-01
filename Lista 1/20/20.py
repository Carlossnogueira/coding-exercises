"""
Escrever um programa declarando três variáveis do tipo inteiro (a, b e c). Ler um valor maior que zero para cada 
variável  (se  o  valor  digitado  não  é  válido,  mostrar  mensagem  e  ler  novamente).  Exibe  o  menor  valor  lido 
multiplicado pelo maior e o maior valor dividido pelo menor.
"""

a = 0
b = 0
c = 0

bigger = 0 
smaller = 0

temp = 0 

while True:
    temp = int(input("A value: "))
    if temp <= 0:
        print("invalid number! try again...")
        continue
    else:
        a = temp
    temp = int(input("B value: "))
    if temp <= 0:
        print("invalid number! try again...")
        continue
    else:
        b = temp
    temp = int(input("C value: "))
    if temp <= 0:
        print("invalid number! try again...")
        continue
    else:
        c = temp
    break;

if a > b and a > c:
    bigger = a
    if b < c:
        smaller = b
    else:
        smaller = c

if b > a and b > c:
    bigger = b
    if a < c:
        smaller = a
    else:
        smaller = c

if c > a and c > b:
    bigger = c
    if a < b:
        smaller = a
    else:
        smaller = b 

print(f"Smaller number {smaller} * bigger number {bigger} = {smaller * bigger}")
print(f"Bigger number {bigger} / smaller number {smaller} = {bigger/smaller}")


