function classificarNadador() {

    let idade = parseInt(document.getElementById('idade').value);
    
    
    let categoria;
    if (idade >= 18) {
        categoria = "Adulto";
    } else if (idade >= 14) {
        categoria = "Juvenil";
    } else if (idade >= 9) {
        categoria = "Infantil";
    } else {
        categoria = "Mirim";
    }
    
    document.getElementById('resultado').innerText = "Categoria: " + categoria;
}