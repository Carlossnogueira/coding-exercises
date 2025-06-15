"""
Efetuar o cálculo da quantidade  de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 
12  Km  por  litro.  Para  obter  o  cálculo,  o  usuário  deve  fornecer  o  tempo  gasto  na  viagem  e  a  velocidade  média. 
Desta  forma,  será  possível  obter  a  distância  percorrida  com  a  fórmula  DISTANCIA  =  TEMPO  *  VELOCIDADE. 
Tendo  o  valor  da  distância,  basta  calcular  a  quantidade  de  litros  de  combustível  utilizada  na  viagem  com  a 
fórmula:  LITROS_USADOS  =  DISTANCIA  /  12.  O  programa  deve  apresentar  os  valores  da  velocidade  média, 
tempo gasto, a distância percorrida e a quantidade de litros utilizada na viagem. Dica: trabalhe com valores reais.
"""


autonomia = 12
velocidade = float(input("Digite a velocidade média da viagem (km/h):"))
tempo = float(input("Digite o tempo gasto na viagem (horas): "))
distancia = velocidade * tempo
litros_usados = distancia / autonomia

print(f"\nResultados da viagem:")
print(f"Velocidade média: {velocidade} km/h")
print(f"Tempo gasto: {tempo} horas")
print(f"Distância percorrida: {distancia} km")
print(f"Litros de combustível usados: {litros_usados:.2f} litros")