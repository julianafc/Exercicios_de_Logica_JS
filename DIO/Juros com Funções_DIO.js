// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código – Condição de pagamento:
// À vista Débito → recebe 10% de desconto; (1)
// À vista no Dinheiro ou PIX → recebe 15% de desconto; (2)
// Em duas vezes → preço normal de etiqueta sem juros; (3)
// Acima de duas vezes → preço normal de etiqueta mais juros de 10%; (4)

const prompt = require('prompt-sync')();

let precoProduto = prompt("Digite o preço do produto");
let metPagamento = prompt("Digite o método de pagamento: Débito (1), Dinheiro ou PIX (2), Em até 2x (3), Além de 2x (4)");

function desconto(valor, desconto) {
    return valor * desconto;
}

function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto);
}

function aplicarJuros(valor, juros) {
    return Number(valor) + Number((valor * juros));
}

if (metPagamento === "1") {
    console.log("O seu desconto será de: " + desconto(precoProduto, 0.1) + ". Então o valor total da sua compra é de: R$" + aplicarDesconto(precoProduto, 0.1))
} else if (metPagamento === "2") {
    console.log("O seu desconto será de: " + desconto(precoProduto, 0.15) + ". Então o valor total da sua compra é de: R$" + aplicarDesconto(precoProduto, 0.15))
} else if (metPagamento === "3") {
    console.log("Você não terá desconto. Então o valor total da sua compra é de: R$" + precoProduto);
} else if (metPagamento === "4") {
    let valorJuros = precoProduto * 0.1
    console.log("Os seus juros serão de: " + desconto(precoProduto, 0.1) + ". Então o valor total da sua compra é de: R$" + aplicarJuros(precoProduto, 0.1));
} else {
    console.log("Método de pagamento inválido");
}