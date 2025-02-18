var peso;
var altura;
var imc;
var resultado;

function calcular() {

    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return false;
    }

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2);

    if (imc < 17) {
        resultado.innerHTML += '<br/> Você está muito abaixo do peso.';
    } else if (imc < 18.5) {
        resultado.innerHTML += '<br/> Você está abaixo do peso.';
    } else if (imc < 25) {
        resultado.innerHTML += '<br/> Você está no peso normal.';
    } else {
        resultado.innerHTML += '<br/> Você está acima do peso.';
    }
    
    return false; 
}
