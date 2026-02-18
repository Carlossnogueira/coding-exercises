# Escreva um programa que leia 3 números inteiros e imprima na tela os valores em ordem decrescente

arr = []

for i in range(3):
    arr.append(int(input("Type an integer number: ")))

a = arr[0]
b = arr[1]
c = arr[2] 

plus = 0
mid = 0
minus = 0

if a >= b and a >= c:
    plus = a
    if b >= c:
        mid = b
        minus = c
    else:
        mid = c
        minus = b
if b >= a and b >= c:
    plus = b
    if a >= c:
        mid = a
        minus = c
    else:
        mid = c
        minus = b
if b >= a and b >= c:
    plus = b
    if a >= c:
        mid = a
        minus = c
    else:
        mid = c
        minus = b
if c >= a and c >= b:
    plus = c
    if a >= b:
        mid = a
        minus = b
    else:
        mid = b
        minus = a

print(f"{plus}, {mid}, {minus}")
