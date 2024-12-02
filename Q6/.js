function fahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
let temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
alert(`A temperatura de ${temperaturaFahrenheit}°F corresponde a ${temperaturaCelsius.toFixed(2)}°C.`);