async function converter() {
    const valorReal = parseFloat(document.getElementById("valorReal").value);
    if (isNaN(valorReal) || valorReal <= 0) {
        alert("Por favor, insira um valor válido em reais.");
        return;
    }

    try {
        const url = 'https://v6.exchangerate-api.com/v6/54b568fa4a4228960fc80937/latest/BRL';
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const cotacaoRealDolar = data.conversion_rates.USD;
            const valorDolar = valorReal * cotacaoRealDolar;
            document.getElementById("resultado").innerText = `Valor em Dólares: $${valorDolar.toFixed(2)}`;
        } else {
            alert("Erro ao obter a cotação do real. Tente novamente mais tarde.");
        }
    } catch (error) {
        alert("Ocorreu um erro ao buscar a cotação. Tente novamente.");
    }
}


