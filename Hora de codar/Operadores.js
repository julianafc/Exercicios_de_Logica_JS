// Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

const prompt = require('prompt-sync')();

let number1 = prompt("Digite o primeiro número:");
let number2 = prompt("Digite o segundo número:");

const soma = Number(number1) + Number(number2);
const subtracao = number1 - number2;
const multiplicacao = number1 * number2;
const divisao = number1 / number2;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);