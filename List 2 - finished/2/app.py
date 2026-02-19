from aluno import Aluno
from professor import Professor


aluno = Aluno("Eduardo","Jose",8248654)
print(aluno._nome + " " + aluno._sobrenome + " " + str(aluno.matricula))
aluno.set_matricula(3333)
print(aluno._nome + " " + aluno._sobrenome + " " + str(aluno.matricula))

professor = Professor("Adail","Nunes","Física")
print(professor.nome + " " + professor.sobrenome +" "+ professor.disciplina)
professor.set_disciplina("Química")
print(professor.nome + " " + professor.sobrenome +" "+ str(professor.disciplina))
