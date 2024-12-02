function calcularReajuste() {

}
    const saldo = parseFloat(document.getElementById("saldo").value);
    if (isNaN(saldo) || saldo <= 0) {
        alert("Por favor, insira um saldo válido.");
        return;
    }
    const reajuste = saldo * 0.01;
    const saldoComReajuste = saldo + reajuste;

    document.getElementById("resultado").textContent = "Saldo com reajuste de 1%: R$ ${saldoComReajuste.toFixed(2)}";