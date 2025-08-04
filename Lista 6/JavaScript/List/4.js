const nomes = ["Ana", "João", "Carlos", "Beatriz", "Joana"];

// Filtra os nomes que começam com a letra "J"
const nomescomJ = nomes.filter((nome) => nome.startsWith("J"));
console.log(nomescomJ);  



const buscaOIndice = nomes.findIndex((nome) => nome === "Carlos")
console.log(buscaOIndice); 