// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
const commander = new Carro('Jeep', 'Branco', 1 / 9)

console.log(uno)
console.log(uno.calcularGastoPercurso(70, 5));
console.log(commander)
console.log(commander.calcularGastoPercurso(70, 5))