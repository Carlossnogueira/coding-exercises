"""
Escreva um programa que leia um número inteiro (variável CODIGO). Verificar se o código é igual a 1, igual a 2 ou 
igual a 3. Caso não seja, apresentar a mensagem “Código inválido”. Ao ser verificado o código e constatado que é 
um  valor  válido,  o  programa  deve  verificar  cada  código  em  separado  para  determinar  seu  valor  por  extenso,  ou 
seja, apresentar a mensagem “um”, ”dois” ou “três”. (Utilizar o comando Switch). 
"""

CODIGO = int(input("Digite um número"))

if CODIGO > 3 or CODIGO < 1:
    print("Número inválido")

match CODIGO:
    case 1:
        print("Número valido, número um")
    case 2:
        print("Número valido, número dois")
    case 3:
        print("Número valido, número três")




