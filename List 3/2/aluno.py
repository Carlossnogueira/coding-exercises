from pessoa import Pessoa

class Aluno(Pessoa):
    def __init__(self,nome:str,sobrenome:str,matricula:int):
        super().__init__(nome,sobrenome)
        self.matricula = matricula

    def set_matricula(self,matricula):
        self.matricula = matricula

    def matricula(self):
        return self.matricula
