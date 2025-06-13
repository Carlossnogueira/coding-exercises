/*
Faça um programa para pagamento de comissão de vendedores de peças, levando-se em consideração que sua 
comissão será de 5% do total da venda e que você tem os seguintes dados: 
- Identificação do vendedor 
- Código da peça 
- Preço unitário da peça 
- Quantidade vendida
*/

import scan from '../scan'

const comission: number = 0.05
const identificacaoVendedor: string = scan("Indentificação do vendedor:")
const codPeca: number = Number(scan("Código da peça:"))
const precoUnitarioPeca: number = Number(scan("Preço unitário:"))
const quantidadeVendida: number = Number(scan("Quantidade vendida:"))

const valorVendido: number = precoUnitarioPeca * quantidadeVendida
const comissaoVendedor: number = valorVendido * comission
console.log(`
    Identificação do vendedor: ${identificacaoVendedor}\n
    Código da peça: ${codPeca}\n
    Valor vendido: ${valorVendido}\n
    Comissão do vendedor: ${comissaoVendedor.toFixed(2)}\n
`)






