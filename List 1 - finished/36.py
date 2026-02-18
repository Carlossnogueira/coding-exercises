"""
36)  Faça um programa que leia 10 valores inteiros e positivos e: 
- Encontre o maior valor 
- Encontre o menor valor 
- Calcule a média dos números lidos 
"""


# I will use fast method for this exercise
numbers = []

for i in range (10):
    numbers.append(int(input("Entry a number:")))

bigger = max(numbers)
smaller = min(numbers)
media = sum(numbers) / 10

print(f"The bigger is {bigger} and the smaller is {smaller}. The media of all number is {media}")


