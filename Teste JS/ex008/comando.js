let codigo = document.querySelector("#codigo");
let pesquisar = document.querySelector("#pesquisar")
let resultado = document.querySelector("#resultado");

function pesquisa(){
    let numero = Number(codigo.value);

    if(numero == 1){
        resultado.innerHTML = 
        numero + " - Parafuso";
    }
    else if(numero == 2){
        resultado.innerHTML = 
        numero + " - Porca";
    }
    else if(numero == 3){
        resultado.innerHTML = 
        numero + " - Prego";
    }
    else{
        resultado.innerHTML = 
        numero + " - Diversos";
    }


}

pesquisar.onclick = function(){
    pesquisa();
}