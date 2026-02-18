/*
Dados dois vetores x e y, ambos com n elementos, determinar o produto escalar desses vetores. Ou seja, realizar 
a soma de todos dos resultados da multiplicação de x[i] por y[i]. 
*/

let x = [10, 30, 40, 60]
let y = [50, 80, 40, 60]
let result = 0

for (let i = 0; i < x.length; i++) {
    result += x[i] * y[i]
    console.log(`${x[i]} * ${y[i]} = ${x[i] * y[i]}`)
}

console.log(`result is ${result}`)