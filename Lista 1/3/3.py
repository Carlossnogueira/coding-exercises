"""
Faça um programa para pagamento de comissão de vendedores de peças, levando-se em consideração que sua 
comissão será de 5% do total da venda e que você tem os seguintes dados: 
- Identificação do vendedor 
- Código da peça 
- Preço unitário da peça 
- Quantidade vendida
"""

comission = 0.05
indentificacao_vendedor = input("Indentificação do vendedor:")
codigo_peca = int(input("Código da peça:"))
preco_unitario_peca = float(input("Preço unitário:"))
quantidade_vendida = float(input("Quantidade vendida:"))

valor_vendido = preco_unitario_peca * quantidade_vendida
comissao_vendedor = valor_vendido * comission

print(f"Identificação do vendedor:{indentificacao_vendedor}\nCódigo da peça: {codigo_peca}\nValor vendido: {valor_vendido}\n Comissão do vendedor: {comissao_vendedor:.2f}")  