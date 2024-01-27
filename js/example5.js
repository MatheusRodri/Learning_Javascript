// Switch

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch (Number(valor)){
        case 1:
            alert("Você digitou 1 - Suco");
            break;
        case 2:
            alert("Você digitou 2 - Refrigerante");
            break;
        case 3:
            alert("Você digitou 3 - Água");
            break;
        case 4:
            alert("Você digitou 4 - Chamar o garçom");
            break;
        default:
            alert("Você digitou um valor inválido");
            break;
    }
}