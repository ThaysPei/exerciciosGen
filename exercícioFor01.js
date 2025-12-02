
// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor 
// do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o 
// intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const leia = require('readline-sync');

let num1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
let num2 = leia.questionInt('Digite o último numero do intervalo: ')
let multiplos = []

for(let i = num1; i <= num2; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} é múltiplo de 3 e 5`)
    }
    if(num2 < num1) {
        console.log('Intervalo inválido!')
        break
    }

}
