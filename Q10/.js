function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    if (numero < 0) {
        document.getElementById("resultado").innerText = "Você digitou um número negativo.";
    } else if (numero > 0) {
        document.getElementById("resultado").innerText = "Você digitou um número positivo.";
    } else {
        document.getElementById("resultado").innerText = "Você digitou zero.";
    }
}
            