const entrada = require("readline-sync")

const salarioBruto = entrada.questionFloat("Digite o seu salario bruto")
const adicionalNoturno = entrada.questionFloat("Digite o seu adicional noturno")
const horasExtras = entrada.questionFloat("Digite suas horas extras")
const descontos = entrada.questionFloat("Digite o seu desconto") 
const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log(salarioLiquido)
