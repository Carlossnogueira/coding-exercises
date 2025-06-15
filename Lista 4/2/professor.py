from pessoa import Pessoa

class Professor(Pessoa):
    def __init__(self,nome,sobrenome,disciplina):
        super().__init__(nome,sobrenome)
        self.disciplina = disciplina

    def set_disciplina(self,disciplina):
        self.disciplina = disciplina

    def disciplina(self):
        return self.disciplina
