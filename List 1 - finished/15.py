"""
Escreva um programa que leia quatro notas escolares de um aluno e apresentar uma mensagem que o aluno foi 
aprovado se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota 
do  recuperação,  somar  com  o  valor  da  média  e  obter  a  nova  média.  Se  a  nova  média  for  maior  ou  igual  a  7, 
apresentar  uma  mensagem  informando  que  o  aluno  foi  aprovado  na  recuperação.  Se  o  aluno  não  foi  aprovado, 
apresentar  uma mensagem  informando  esta  condição.  Apresentar  junto  com  as mensagens  o  valor  da  média  do 
aluno.
"""

notas = []
soma_notas = 0
media = 0

for i in range(4):
    notas.append(float(input("Entre com a nota: ")))
    soma_notas += notas[i]

media = soma_notas / 4

if media >= 7:
    print(f"Aprovado a media foi de {media}")
if media <= 7:
    recuperacao = float(input("Entre a nota de recuperação:"))
    soma_notas + recuperacao
    media = soma_notas / 5
    if media >= 7:
        print(f"Aprovado na recuperação! a media é de {media}")
    else:
        print(f"Reprovado! a media é de {media}")

