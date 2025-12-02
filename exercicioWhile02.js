const leia = require('readline-sync');

let menor21 = 0;   
let maior50 = 0;
let idades = leia.questionInt('Digite a idade: ');
console.log(menor21)

while(idades != 0) {

    if(idades < 21){
        menor21++;
    }
    if(idades > 50){
        maior50++;
    }
    console.log(menor21)
//    idades = leia.questionInt('Digite a idade: ');
}
console.log(menor21)
console.log(`Quantidade de pessoas menores de 21 anos: ${menor21}`);
console.log(`Quantidade de pessoas maiores de 50 anos: ${maior50}`);
