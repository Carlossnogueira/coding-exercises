/*
    Escreva  um  programa  que  calcule  e  retorne  o  valor  da  hipotenusa  através  do  método  HIPOTENUSA.  O  método 
    recebe o valor da base e da altura de um triângulo. 
    
    Fórmulas: hipotenusa² = base² + altura²  
    
                    base x altura 
            área = ---------------------- 
                        2 
 */

function HIPOTENUSA(base: number, altura: number): number {
    let h = Math.sqrt(base ** 2 + altura ** 2)
    return h
}                       

const a = Number(prompt('Entre com a base: '))
const b = Number(prompt('Entre a altura: '))
console.log(`A hipotenusa é: ${HIPOTENUSA(a,b)}`)