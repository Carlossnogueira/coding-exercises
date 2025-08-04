const frutas = ["maçã", "banana", "laranja", "uva", "kiwi", "abacaxi"];

const novasFrutas = frutas.slice(2, 4);
console.log(novasFrutas); 


frutas.splice(2, 2, "manga", "manga");
console.log(frutas);