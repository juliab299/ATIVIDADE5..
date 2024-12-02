function verificarParOuImpar() {
    let numero = parseInt(document.getElementById('numero').value);
    if (numero % 2 === 0) {
        document.getElementById('resultado').innerText = "O número " + numero + " é PAR.";
    } else {
        document.getElementById('resultado').innerText = "O número " + numero + " é ÍMPAR.";
    }
}