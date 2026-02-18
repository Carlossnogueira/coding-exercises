"""
Ler  dois  valores  inteiros  para  as  variáveis  A  e  B,  efetuar  a  troca  dos  valores  de  modo  que  a  variável  A  passe  a 
possuir o valor da variável B, e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.
"""

a = int(input("valor de A: "))
b = int(input("valor de B: "))
c = b

b = a
a = c

print(f"A: {a}, B: {b}")
