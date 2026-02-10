"""
Escreva  um  programa  que  retorne  o  número  do  quadrante  (1,2,3  ou  4)  através  de  um  método  chamado 
VERIFICA_QUADRANTE, que deve receber um valor para x e um valor para y
"""

def VERIFICA_QUADRANTE(x,y):
    if x > 0 and y > 0:
        return "primeiro quadrante"
    if x < 0 and y > 0:
        return "segundo quadrante"
    if x < 0 and y < 0:
        return "terceiro quadrante"
    if x > 0 and y < 0:
        return "quarto quadrante"
    

x = int(input("Valor de x:"))
y = int(input("Valor de y:"))

print(f"Está no {VERIFICA_QUADRANTE(x,y)}")