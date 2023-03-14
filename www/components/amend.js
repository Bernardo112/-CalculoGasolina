function GasolinaCalculo(){
    var consumo = document.getElementById('KM').value / document.getElementById('Gasolina').value;
    var marca = document.getElementById('inputGroupSelect01').value;
    var modelo = document.getElementById('Modelo').value;

    if(consumo >= 20){
        document.getElementById('economia').innerHTML = '<border style="border-style: dotted; border-color: red;">Extremamente Econômico</border>';
    }
    else if (consumo >=12 && consumo < 20){
        document.getElementById('economia').innerHTML = '<border style="border-style: dotted; border-color: red;">Econômico</border>';
    }
    else if (consumo >= 8 && consumo < 12){
        document.getElementById('economia').innerHTML = '<border style="border-style: dotted; border-color: red;">Normal</border>';
    }
    else if (consumo < 8){
        document.getElementById('economia').innerHTML = '<border style="border-style: dotted; border-color: red;">Alto Consumo</border>';
    }

    document.getElementById('resultado').innerHTML = "O seu carro de marca " + marca + " e de modelo " + modelo + " tem consumo de "+ consumo + " KM/L";
}