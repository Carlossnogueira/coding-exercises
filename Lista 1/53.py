"""
Durante  uma  corrida  de  automóveis  com  N  voltas  de  duração  foram  anotados  para  um  piloto,  na  ordem,  os 
tempos registrados em cada volta. Fazer um programa para ler os tempos das N voltas, calcular e imprimir: 
i. melhor tempo; 
ii. a volta em que o melhor tempo ocorreu; 
iii. tempo médio das N voltas;
"""

voltas = 0
tempos =  []
melhor_tempo = 0
melhor_volta = 0
media = 0

voltas = int(input("Quantas voltas foram?"))

for i in range(voltas):
    tempo = int(input(f"Tempo da volta {i + 1} em minutos:"))
    tempos.append(tempo)

    if melhor_tempo == 0:
        melhor_tempo = tempo

    if tempo != 0 and tempo < melhor_tempo:
        melhor_tempo = tempo
        melhor_volta = i + 1

for i in range(0, voltas - 1):
    media += tempos[i]

media = media / voltas
print(f"Melhor tempo: {melhor_tempo} \nMelhor volta: {melhor_volta}\nMedia: {media}")

