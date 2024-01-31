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
    area.innerHTML = "Você saiu!";
}

function mediaAluno(nota1,nota2){
    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Aprovado com a média: " + media);

    }else if(media >= 5 && media < 7){
        console.log("Recuperação com a média: " + media);

    }
    else{
        console.log("Reprovado com a média: " + media);
        
    }
}

function aluno(nome,curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}