//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador 
// (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o 
// Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e 
// o novo Salário reajustado.

const entrada = require("readline-sync");

const colaborador = entrada.question("Digite o nome do colaborador: ");
const codigoCargo = entrada.questionInt("Digite o Codigo do Cargo (1 a 6): \n1 - Gerente \n2 - vendedor \n3 - Supervisor \n\nNumero do cargo: ");
const salario = entrada.questionFloat("Digite o Salario atual: ");

let cargo = "";
let percentualReajuste = 0;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente"; 
        percentualReajuste = 0.10; 
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07; 
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;

    default:
        console.log("Código de cargo inválido!");
        break
}

const valorReajuste = salario * percentualReajuste;
const novoSalario = salario + valorReajuste;

console.log(`Colaborador: ${colaborador}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
