//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C 
// e imprima na tela se a soma de A + B é maior, menor ou igual a C.


const entrada = require("readline-sync")
 
const a = entrada.questionInt('Digite o primeiro valor: ');
const b = entrada.questionInt('Digite o segundo valor: ')
const c = entrada.questionInt('Digite o terceiro valor: ')
const soma = a + b;

if( soma > c ){
    console.log(' a soma de a + b é maior que c')
}else if ( soma - c){
    console.log(' A soma de a + b é menor que c')
}else{
    console.log('A soma de a + b é igual a c+' )
}
