import scan from '../scan'

/*
Efetuar o cálculo da quantidade  de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 
12  Km  por  litro.  Para  obter  o  cálculo,  o  usuário  deve  fornecer  o  tempo  gasto  na  viagem  e  a  velocidade  média. 
Desta  forma,  será  possível  obter  a  distância  percorrida  com  a  fórmula  DISTANCIA  =  TEMPO  *  VELOCIDADE. 
Tendo  o  valor  da  distância,  basta  calcular  a  quantidade  de  litros  de  combustível  utilizada  na  viagem  com  a 
fórmula:  LITROS_USADOS  =  DISTANCIA  /  12.  O  programa  deve  apresentar  os  valores  da  velocidade  média, 
tempo gasto, a distância percorrida e a quantidade de litros utilizada na viagem. Dica: trabalhe com valores reais.
*/

const autonomia: number = 12
const tempoGasto: number = Number(scan("Digite o tempo gasto na viagem: "))
const velocidade: number = Number(scan("Digite a velocidade média: "))

const distanciaPercorrida: number = tempoGasto * velocidade
const litrosUsados: number = distanciaPercorrida / autonomia

console.log(`
    Velocidade média: ${velocidade}\n
    Tempo gasto da viagem: ${tempoGasto} km/h\n
    Distância percorrida: ${distanciaPercorrida} km\n
    Combustivel usado: ${litrosUsados.toFixed(2)}\n
`)