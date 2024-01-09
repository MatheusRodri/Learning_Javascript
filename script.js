var area = document.getElementById("area");


function entrar() {

    var nome = prompt("Qual o seu nome?");

    if (nome == "" || nome == null) {
        alert("Digite seu nome novamente");
        entrar();
    }else{
        area.innerHTML = "Bem vindo " + nome + "!" + " ";

        let botaosair = document.createElement("button");
        botaosair.innerHTML = "Sair";
        botaosair.onclick = sair;

        area.appendChild(botaosair);

    }
    
}

function sair(){
    alert("Até a próxima!");
    area.innerHTML = "Você saiu!"
    

}