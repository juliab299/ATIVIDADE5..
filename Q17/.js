function calcularValorVenda() {

    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    let valorVenda;
    if (valorCompra < 20) {
        valorVenda = valorCompra * 1.45;
    } else {
        valorVenda = valorCompra * 1.30;
    }
    document.getElementById("resultado").innerText = "O valor de venda do produto será: R$ " + valorVenda.toFixed(2);
}