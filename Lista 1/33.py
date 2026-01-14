""""
    Escreva um programa que calcule e exiba a média da nota dos alunos de uma turma em uma prova. O número de 
    alunos é desconhecido. Os dados de um aluno são: número de matrícula e a sua nota na prova em questão.
"""

student_id = ""
quantity = 0
grade = 0


while(True):

    student_id = input("Entry student Id or /0 to exit: ")

    if student_id == "/0":
        break;

    grade += int(input("Entry studenty grade: "))
    quantity += 1

if quantity > 1:
    print(f"The media is: {grade / quantity }")
else:
    print("No students...")