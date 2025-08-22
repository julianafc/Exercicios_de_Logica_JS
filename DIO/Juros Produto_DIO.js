// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código – Condição de pagamento:
// À vista Débito → recebe 10% de desconto;
// À vista no Dinheiro ou PIX → recebe 15% de desconto;
// Em duas vezes → preço normal de etiqueta sem juros;
// Acima de duas vezes → preço normal de etiqueta mais juros de 10%;

const prompt = require('prompt-sync')();

let precoProduto = prompt("Digite o preço do produto");
let metPagamento = prompt("Digite o método de pagamento:");

if (metPagamento === "Debito") {
    let valorDesconto = precoProduto * 0.1
    console.log("O seu desconto será de: " + valorDesconto);
} else if (metPagamento === "Dinheiro" && metPagamento === "PIX") {
    let valorDesconto = precoProduto * 0.15
    console.log("O seu desconto será de: " + valorDesconto);
} else if (metPagamento === "Parcelar em 2x") {
    console.log("Você não terá desconto");
} else if (metPagamento === "Parcelar além de 2x") {
    let valorJuros = precoProduto * 0.1
    console.log("Os seus juros serão de: " + valorJuros);
} else {
    console.log("Método de pagamento inválido");
}