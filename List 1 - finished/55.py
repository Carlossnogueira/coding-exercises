"""
Fazer  um  programa  que  leia  uma  frase  de  até  50  caracteres  e  imprima  a  frase  sem  os  espaços  em  branco. 
Imprimir também a quantidade de espaços em branco da frase.
"""

frase = ""
em_branco = 0
sem_branco = ""

while True:
    frase = input("Digite uma frase de até 50 caracteres:")

    if len(frase) > 50:
        print("Frase invalida")
        continue

    break

for i in range(len(frase)):
    if frase[i] == " ":
        em_branco += 1
    else:
        sem_branco += frase[i]

print(f"Frase sem espaço: {sem_branco}\nQuantidade de espaços: {em_branco}")
