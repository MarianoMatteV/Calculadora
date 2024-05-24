// Primeiro criei uma variável com o nome de resultado e chamei o display.

const resultado = document.querySelector('.resultado');


// Criei uma função que quando o usuário apertar em algum número/operação, este número/operação será chamado.
function apertar(char){
    if(resultado.innerText == '0' && char != '.'){
        resultado.innerText = char
    } else{
        if(!(char == '.' && resultado.innerText[resultado.innerText.length - 1] == '.'))
        resultado.innerText += char
    }
}

// Criei uma função para o resultado sempre voltar à 0.
function apagar(){
    resultado.innerHTML = "0"
}

// Criei uma função que transforma a operação no resultado final.
function resultFinal(){
    resultado.innerHTML = eval(resultado.innerHTML)
}