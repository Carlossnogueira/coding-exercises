/*
    Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  faça  um  programa  que  calcule  seu  peso  ideal, 
    utilizando as seguintes fórmulas: (h = altura) 
    - Para homens: (72.7*h) - 58 
    - Para mulheres: (62.1 *h) - 44.7 
*/

console.log("M to man and W to woman:")
let op: string = prompt()?.toString().toUpperCase() ?? "0";
console.log("Entry your height:")
let H : number = parseFloat(prompt() ?? "0");

switch (op) {
    case "M":
            console.log(`Ideal weight is ${((72.7*H) - 58).toFixed(2)}`)
        break;
    case "W":
        console.log(`Ideal weight is ${((62.1*H) - 44.7).toFixed(2)}`)
        break;
}
