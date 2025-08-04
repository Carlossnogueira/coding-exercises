const valores = [10, 25, 30, 5, 40];
const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);


// Reforçando -- Fora do contexto do exercicio, mas útil para entender o reduce
const numeros = [2,4,6,8,10]
const reducao = numeros.reduce((ac,val)  => ac + val, 0);
console.log(reducao);

const preco = [
    {produto: 'Arroz', valor: 10},
    {produto: 'Feijão', valor: 5},
    {produto: 'Macarrão', valor: 3},
    {produto: 'Carne', valor: 20},
]

// 0 é o valor inicial do acumulador
const precototal = preco.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.valor, 0);
console.log("preço total: " + precototal);


// Retorna true se algum elemento do array satisfaz a condição
const verificar = valores.some((x) => x < 10);
console.log(verificar);