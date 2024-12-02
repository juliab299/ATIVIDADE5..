function calcularSoma() {
    
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    
    let soma = numero1 + numero2;
    if (soma > 20) {
        soma += 8;
    } else {
        soma -= 5; 
    }
    document.getElementById('resultado').innerText = "Resultado final: " + soma;
}