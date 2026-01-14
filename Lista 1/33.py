""""
    Escreva um programa que calcule e exiba a média da nota dos alunos de uma turma em uma prova. O número de 
    alunos é desconhecido. Os dados de um aluno são: número de matrícula e a sua nota na prova em questão.
"""

student_id_data = []
student_grade_data = []
result = 0;

while(True):
    student_id = input("Entry student Id or /0 to exit: ")
    if student_id == "/0":
        break;
    student_id_data.append(student_id)
    student_grade = int(input("Entry studenty grade: "))
    student_grade_data.append(student_grade)

for item in student_grade_data:
    result += student_grade

print(f"The media is: {result / len(student_grade_data)}")