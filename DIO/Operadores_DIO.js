const prompt = require("prompt-sync")();

let combustivel = prompt("Qual o valor do combustível?");
let kmLitro = prompt("Quantos KM o seu veículo roda com 1 litro?");
let distancia = prompt("Qual a distância da sua viagem?");

const gasto = combustivel * (distancia / kmLitro);

console.log(`O gasto da sua viagem será de: R$ ${gasto.toFixed(2)}`);
