// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis.Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const prompt = require('prompt-sync')();

let precoEtanol = prompt('Digite o preço do etanol: ');
let precoGasolina = prompt('Digite o preço da gasolina: ');
let distanciaEmKm = prompt('Digite a distância da sua viagem:');
let gastoMedio = prompt('Digite o gasto médio em km do seu veículo por litro:');

let tipoCombustivel = prompt('Digite o tipo de combustível (etanol ou gasolina): ').toLowerCase();

const valorGasolina = precoGasolina * (distanciaEmKm / gastoMedio);
const valorEtanol = precoEtanol * (distanciaEmKm / gastoMedio);

if (tipoCombustivel === "gasolina") {
    console.log(valorGasolina.toFixed(2));
} else if (tipoCombustivel === "etanol") {
    console.log(valorEtanol.toFixed(2));
} else {
    console.log("Tipo de combustível inválido");
}