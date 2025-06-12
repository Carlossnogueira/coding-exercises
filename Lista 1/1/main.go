/*
Faça um programa para calcular o estoque médio de uma peça, sendo que: 
ESTOQUE MÉDIO = (QUANTIDADE_MÍNIMA + QUANTIDADE_MÁXIMA) / 2.
*/

package main

import "fmt"

func main() {
	var min int
	var max int
	fmt.Println("Digite a quantidade minima:")
	fmt.Scan(&min)
	fmt.Println("Digite a quantidade maxima:")
	fmt.Scan(&max)
	resultado := estoqueMedio(min,max)
	fmt.Println("O estoque medio e: ", resultado)
}

func estoqueMedio(min, max int) int{
	estoque := (min + max) / 2
	return estoque
}