function GasolinaCalculo(){
    var consumo = document.getElementById('KM').value / document.getElementById('Gasolina').value;
    var marca = document.getElementById('inputGroupSelect01').value;
    var modelo = document.getElementById('Modelo').value;

    if(consumo >= 20){
        var value = document.getElementById('extremamente').innerHTML;
        document.getElementById('extremamente').innerHTML = '<border style="border-style: dotted; border-color: red;">' + value + '</border>';
    }
    else if (consumo >= 12 && consumo < 20){
        var value = document.getElementById('economico').innerHTML;
        document.getElementById('economico').innerHTML = '<border style="border-style: dotted; border-color: red;">' + value + '</border>';
    }
    else if (consumo >= 8 && consumo < 12){
        var value = document.getElementById('normal').innerHTML;
        document.getElementById('normal').innerHTML = '<border style="border-style: dotted; border-color: red;">' + value + '</border>';
    }
    else{
        var value = document.getElementById('altoConsumo').innerHTML;
        document.getElementById('altoConsumo').innerHTML = '<border style="border-style: dotted; border-color: red;">' + value + '</border>';
    }

    document.getElementById('resultado').innerHTML = "O seu carro de marca " + marca + " e de modelo " + modelo + " tem consumo de "+ consumo + " KM/L";
}