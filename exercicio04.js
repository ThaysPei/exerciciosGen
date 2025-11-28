const entrada = require("readline-sync")

const numero1 = entrada.questionFloat("digite o primeiro numero: ")
const numero2 = entrada.questionFloat("digite o segundo numero: ")
const numero3 = entrada.questionFloat("digite o terceiro numero: ")
const numero4 = entrada.questionFloat("digite o quarto numero: ")

const produto = (numero1 * numero2) - (numero3 * numero4)

console.log(produto.toFixed(1))
