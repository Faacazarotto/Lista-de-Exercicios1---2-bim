let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calcular(){

    let vlr1 = Number(primeiro.value);
    let vlr2 = Number(segundo.value);

    let valor = Math.max(vlr1, vlr2);

    resultado.innerHTML = "O maior resultado foi: " + valor;
}

gerar.onclick = function(){
    calcular();
}
