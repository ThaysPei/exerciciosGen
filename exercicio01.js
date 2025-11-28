const entrada = require("readline-sync");


const salario = entrada.questionInt("Digite o salário: ");
console.log(`O seu salário é : ${salario}`);

const abono = entrada.questionInt("Adicione o abono: ");
console.log(`A abono adicionado foi: ${abono}`);

const novoSalario = salario + abono
console.log(`O seu novo salário é:  ${novoSalario}`)


