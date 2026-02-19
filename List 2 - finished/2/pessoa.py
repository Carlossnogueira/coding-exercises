class Pessoa():
    def __init__(self, nome:str, sobrenome:str):
        self.nome = nome
        self.sobrenome = sobrenome

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, valor):
        self._nome = valor

    # Getter e Setter para sobrenome
    @property
    def sobrenome(self):
        return self._sobrenome

    @sobrenome.setter
    def sobrenome(self, valor):
        self._sobrenome = valor
