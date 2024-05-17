let valor = document.querySelector("#valor");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calcular(){
    let vlr = Number(valor.value);

    let resposta = vlr % 2;

    if(resposta == 0){
        resultado.innerHTML = "PAR"
    }
    else{
        resultado.innerHTML = "IMPAR"
    }
}

gerar.onclick = function(){
    calcular();
}