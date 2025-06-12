/*
Faça um programa que: 
- Leia a cotação do dólar 
- Leia um valor em dólares 
- Converta esse valor para Real 
- Mostre o resultado 
*/

package main

import "fmt"

func main() {
	var cotDolar float32
	var valEmDolar float32
	fmt.Println("Digite a cotação do Dolar:")
	fmt.Scanln(&cotDolar)
	fmt.Printf("Digite um valor em Dolar:")
	fmt.Scanln(&valEmDolar)
	result := convertDolar(cotDolar,valEmDolar)
	fmt.Println("O valor em Real é: ", result)
}

func convertDolar(cot float32, val float32) float32 {
	return val * cot
}