function calcularAumento(){
    let salario = parseFloat(document.getElementById("salario").value);
    let percentualAumento = parseFloat(document.getElementById("percentualAumento").value);


    function calcular(salario, percentualAumento) {
        let aumento = salario * (percentualAumento / 100); // Calcula o aumento
        let novoSalario = salario + aumento; // Calcula o novo salário
        return { aumento, novoSalario };
    }
    let resultado = calcular(salario, percentualAumento);
    document.getElementById("resultadoAumento").innerText = "Valor do aumento: R$ " + resultado.aumento.toFixed(2);
            document.getElementById("resultadoNovoSalario").innerText = "Novo salário: R$ " + resultado.novoSalario.toFixed(2);






}