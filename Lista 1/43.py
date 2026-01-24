"""
    Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço. O monge, necessitando 
    de  alimentos,  indagou  à  rainha  sobre  o  pagamento,  se  poderia  ser  feito  com  grãos  de  trigo  dispostos  em  um 
    tabuleiro de xadrez, de tal forma que o primeiro quadro deveria conter apenas um grão e os quadros 
    subseqüentes,  o  dobro  do  quadro  anterior.  A  rainha  achou  o  trabalho  barato  e  pediu  que  o  serviço  fosse 
    executado,  sem  se  dar  conta  de  que  seria  impossível  efetuar  o  pagamento.  Faça  um  programa  para  calcular  o 
    número de grãos que o monge esperava receber.
"""

grains_atual_place = 1
total_grains = 0
places = 64

for i in range(places):
    total_grains += grains_atual_place
    grains_atual_place *= 2

print(f"Total grains: {total_grains}")