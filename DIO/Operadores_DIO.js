// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const prompt = require("prompt-sync")();

let combustivel = prompt("Qual o valor do combustível?");
let kmLitro = prompt("Quantos KM o seu veículo roda com 1 litro?");
let distancia = prompt("Qual a distância da sua viagem?");

const gasto = combustivel * (distancia / kmLitro);

console.log(`O gasto da sua viagem será de: R$ ${gasto.toFixed(2)}`);
