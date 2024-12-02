function calcularReajuste(valorproduto){
const reajuste = 33.33/ 100; 
const valorCorrigido = valorproduto + (valorproduto * reajuste);
return valorCorrigido;

}
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let valorCorrigido = calcularReajuste(valorProduto);
alert(`O valor corrigido do produto com 33,33% de reajuste é: R$ ${valorCorrigido.toFixed(2)}`);