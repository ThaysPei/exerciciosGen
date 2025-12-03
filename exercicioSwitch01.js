//Com base na tabela abaixo, escreva um algoritmo que leia o código
// de um item (número inteiro entre 1 e 6) e a quantidade comprada deste
// item (número inteiro). A seguir, mostre na tela o valor total da conta
// e o nome do produto que foi comprado.

const entrada = require("readline-sync");

console.log("1 = cachorro quente,\n 2 = x-salada \n3 = x-bacon \n4 = bauru \n5 = refrigerante \n6 = suco de laranja");

const item = entrada.questionInt("Digite um codigo entre 1 e 6: ");
const quantidadeComprada = entrada.questionInt("Digite a quantidade comprada desse item: ");

let valorTotal;

switch (item) {
  case 1:
    valorTotal = quantidadeComprada * 10;
    console.log("Voce comprou cachorro-quente " + valorTotal.toFixed(2));
    break;
  case 2:
     valorTotal = quantidadeComprada * 15;
    console.log("Voce comprou x-salada " + valorTotal.toFixed(2) );
    break;
  case 3:
     valorTotal = quantidadeComprada * 18;
    console.log("Voce comprou x-bacon " + valorTotal.toFixed(2));
    break;
  case 4:
     valorTotal = quantidadeComprada * 12;
    console.log("Voce comprou bauru " + valorTotal.toFixed(2));
    break;
  case 5:
     valorTotal = quantidadeComprada * 8;
    console.log("Voce comprou refrigerante " + valorTotal.toFixed(2));
    break;
  case 6:
     valorTotal = quantidadeComprada * 13;
    console.log("Voce comprou suco de laranja " +  valorTotal.toFixed(2));
    break;

  default:
    console.log("voce precisa escolher um item");
    break;
}
