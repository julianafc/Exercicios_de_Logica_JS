// Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:

// Média menor que 5, reprovação;

// Média entre 5 e 7, recuperação;

// Média acima de 7, passou de semestre;

const prompt = require('prompt-sync')();

let n1 = prompt("Digite a sua primeira nota:");
let n2 = prompt("Digite a sua segunda nota:");
let n3 = prompt("Digite a sua terceira nota:");

let media = (Number(n1) + Number(n2) + Number(n3)) / 3

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
    console.log(media);
}
