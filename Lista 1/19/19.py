"""
Escreva  um  programa  que  leia  três  valores  para  os  lados  de  um  triângulo  (variáveis  A,  B  e  C).  Verificar  se  cada 
lado é menor que a soma dos outros dois lados. Se sim, saber de A==B e se B==C, sendo verdade o triângulo é 
eqüilátero;  Se  não,  verificar  de  A==B  ou  se  A==C  ou  se  B==C,  sendo  verdade  o  triângulo  é  isósceles;  e  caso 
contrário,  o  triângulo  será  escaleno.  Caso  os  lados  fornecidos  não  caracterizarem  um  triângulo,  avisar  a 
ocorrência.
"""

a = int(input("A: "))
b = int(input("B: "))
c = int(input("C: "))


if a < b + c and b < a + c and c < a + b:
    
    if a == b and b == c:
        print("Triângulo equilátero")
    
    elif a == b or a == c or b == c:
        print("Triângulo isósceles")
    
    else:
        print("Triângulo escaleno")

else:
    print("Os valores informados não formam um triângulo")
