numeros = [5,10,15,20,25,30,35,40,45,50]


def pesquisa_binaria(arr, alvo):
    inicio = 0
    fim = len(arr) - 1

    while inicio <= fim:
        meio = (inicio + fim) // 2

        if arr[meio] == alvo:
            return meio
        elif arr[meio] < alvo:
            fim = meio + 1
        else:
            fim = meio - 1

    return -1


print(pesquisa_binaria(numeros, 25))  