var peso;
var altura;
var imc;
var resultado;



function calcular(event){
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");
    if(imc < 17){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Muito abaixo do peso';
    }
    else if(imc > 17 && imc <= 18.49){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> abaixo do peso';
    }
    else if(imc > 18.49 && imc <= 24.99){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> peso normal';
    }
    else if(imc > 24.99 && imc <= 29.99){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> acima do peso';
    }
    else if(imc > 29.99 && imc <= 34.99){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Obesidade I';
    }
    else if(imc > 34.99 && imc <= 39.99){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Obesidade II (severa)';
    }
    else if(imc > 39.99){
        
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Obesidade III (mórbida)';
    }
    else{
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Erro';
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

    document.getElementById("peso").focus();
}