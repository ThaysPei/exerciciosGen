const entrada = require("readline-sync");

const funcaoMedia = (nota1, 
                    nota2, 
                    nota3, 
                    nota4, 
                    qtdDecimais) => {
    return ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(qtdDecimais)
}

const nota1 = entrada.questionInt("Digite a primeira nota: ");
console.log(`A sua nota é : ${nota1}`);

const nota2 = entrada.questionInt("Digite a segunda nota: ");
console.log(`A sua nota é : ${nota2}`);

const nota3 = entrada.questionInt("Digite a terceira nota: ");
console.log(`A sua nota é : ${nota3}`);

const nota4 = entrada.questionInt("Digite a quarta nota: ");
console.log(`A sua nota é : ${nota4}`);

const media = funcaoMedia(nota1, nota2, nota3, nota4, 1)
console.log(`A sua media é: ${media}`);
