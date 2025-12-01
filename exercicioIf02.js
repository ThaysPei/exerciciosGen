//Escreva um algoritmo que leia um número inteiro via teclado e mostre na 
// tela uma mensagem indicando se este número é par ou ímpar e se o número 
// é positivo ou negativo. Veja os exemplos abaixo:


const entrada = require("readline-sync")

const numero1 = entrada.questionInt('Digite o primeiro numero: ')

if( numero1 % 2 === 0){
    console.log('O seu numero é par')
} else {
    console.log('O seu numero é ímpar')
}

if( numero1 > 0 ) {
    console.log('O seu numero é positivo')
}else{
    console.log('O seu numero é negativo')
}