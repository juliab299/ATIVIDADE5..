function converterParaFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    
    if (isNaN(celsius)) {
        alert("Por favor, insira uma temperatura válida em Celsius.");
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Exibindo o resultado
    document.getElementById("resultado").innerText = "Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)} °F";
}