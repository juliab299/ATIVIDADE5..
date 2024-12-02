function calcularMedia() {
   
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira notas válidas.");
        return;
    }

    
    const media = (nota1 + nota2 + nota3) / 3;

    let resultado;
    if (media >= 7) {
        resultado = "ALUNO APROVADO";
    } else {
        resultado = "ALUNO REPROVADO";
    }
    document.getElementById("resultado").innerText = "Média: ${media.toFixed(2)} - ${resultado}";
}