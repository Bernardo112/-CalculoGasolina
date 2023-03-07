// This is a JavaScript file

function GasolinaCalculo(){
    consumo = document.getElementById('KM').value / document.getElementById('Gasolina').value;
    marca = document.getElementById('inputGroupSelect01').value;
    modelo = document.getElementById('Modelo').value;

    document.getElementById('resultado').innerHTML = consumo + " KM/L";
}