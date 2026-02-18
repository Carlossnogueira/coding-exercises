//  Faça um programa para imprimir uma tabuada

console.log("Entry a number: ")
let tab = parseInt(prompt());

for(let i = 1; i < 11; i++){
    console.log(`${tab} x ${i} = ${tab * i}`)
}
