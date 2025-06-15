"""
Ler  quatro  valores  numéricos  inteiros  e  apresentar  o  resultado  dois  a  dois  da  adição  e  multiplicação  entre  os 
valores lidos, baseando-se na utilização do conceito de propriedade distributiva. Dica: se forem lidas as variáveis 
A, B, C e D, devem ser somados e multiplicados os valores de A com B, A com C e A com D; depois B com C, B 
com  D  e  por  último  C  com  D.  Note  que  para  cada  operação  serão  utilizadas  seis  combinações.  Assim  sendo, 
devem ser realizadas doze operações de processamento, sendo seis para as adições e seis para as 
multiplicações.
"""


A = int(input("Digite o valor de A: "))
B = int(input("Digite o valor de B: "))
C = int(input("Digite o valor de C: "))
D = int(input("Digite o valor de D: "))


print("\nResultados das Adições:")
print(f"A + B = {A + B}")
print(f"A + C = {A + C}")
print(f"A + D = {A + D}")
print(f"B + C = {B + C}")
print(f"B + D = {B + D}")
print(f"C + D = {C + D}")


print("\nResultados das Multiplicações:")
print(f"A * B = {A * B}")
print(f"A * C = {A * C}")
print(f"A * D = {A * D}")
print(f"B * C = {B * C}")
print(f"B * D = {B * D}")
print(f"C * D = {C * D}")