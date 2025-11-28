const entrada = require("readline-sync")

const geraProduto = (numero1, 
                    numero2, 
                    numero3, 
                    numero4, 
                    qtdDecimais) => {
    return ((numero1 * numero2) - (numero3 * numero4)).toFixed(qtdDecimais)
}

const pegarNumeros = () => {
    // Pegar numeros de 1 a 4.
}

const numero1 = entrada.questionFloat("digite o primeiro numero: ")
const numero2 = entrada.questionFloat("digite o segundo numero: ")
const numero3 = entrada.questionFloat("digite o terceiro numero: ")
const numero4 = entrada.questionFloat("digite o quarto numero: ")

console.log(geraProduto(numero1, numero2, numero3, numero4, 1))
