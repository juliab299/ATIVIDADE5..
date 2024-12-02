function verificarAprovacao() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('media').innerText = "A média aritmética foi: " + media.toFixed(2);
    if (media >= 7) {
        document.getElementById('resultado').innerText = "ALUNO APROVADO";
    } else if (media >= 5 && media < 7) {
        document.getElementById('resultado').innerText = "ALUNO EM RECUPERAÇÃO";
    } else {
        document.getElementById('resultado').innerText = "ALUNO REPROVADO";
    }
}