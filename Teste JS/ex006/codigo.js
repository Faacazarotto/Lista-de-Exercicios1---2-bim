let primeiro = document.querySelector
("#primeiro");
let segundo = document.querySelector
("#segundo");
let terceiro = document.querySelector
("#terceiro");
let quarto = document.querySelector
("#quarto");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");


function calcular(){
    
    let vlr1 = Number(primeiro.value);
    let vlr2 = Number(segundo.value);
    let vlr3 = Number(terceiro.value);
    let vlr4 = Number(quarto.value);
    
    let menor = Math.min(vlr1, vlr2, vlr3, vlr4);

    resultado.innerHTML = "O menor valor inserido foi: " + menor;
}

gerar.onclick = function(){
    calcular()
}