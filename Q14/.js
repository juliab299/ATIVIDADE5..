function verificarMaiorNumero() {
    
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);
    
    
    let maiorNumero = numero1;
    
    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3;
    }

    document.getElementById('resultado').innerText = "O maior número é: " + maiorNumero;
}