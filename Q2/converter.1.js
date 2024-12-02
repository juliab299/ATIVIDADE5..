async function converter() {
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    if (isNaN(valorDolar) || valorDolar <= 0) {
        alert("Por favor, insira um valor válido em dólar.");
        return;
    }

    try {
        const url = 'https://v6.exchangerate-api.com/v6/54b568fa4a4228960fc80937/latest/USD';
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const cotacaoDolarReal = data.conversion_rates.BRL;
            const valorReal = valorDolar * cotacaoDolarReal;
            document.getElementById("resultado").innerText = `Valor em Reais: R$ ${valorReal.toFixed(2)}`;
        } else {
            alert("Erro ao obter a cotação do dólar. Tente novamente mais tarde.");
        }
    } catch (error) {
        alert("Ocorreu um erro ao buscar a cotação. Tente novamente.");
    }
}