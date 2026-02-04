# Dado dois vetores, A (5 elementos) e B (8 elementos), faça um programa em C que imprima todos os elementos  comuns aos dois vetores

# I prefer to do it in python :D

A = [5,10,35,25,20]
B = [4,8,6,45,10,22,58,68,35]
E = []

for i in range(len(A)):
    for j in range(len(B)):
        if A[i] == B[j]:
            E.append(A[i])

for i in E:
    print(i)