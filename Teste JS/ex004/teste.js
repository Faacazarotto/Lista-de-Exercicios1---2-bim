//Variaveis criadas com as chamadas no HTML
/*
querySelector("#")  --> Seleciona IDs
querySelector(".")  --> Seleciona Class
QuerySelectorById("nomedaid")  --> Seleciona apenas as IDs (não precisa colocar # para chamar a ID)
*/

let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let terceiro = document.querySelector("#terceiro");
let btCalcular = document.querySelector("#btCalcular");
let h3resultado = document.querySelector("#h3resultado");


function calcular(){
    let vlr1 = Number(primeiro.value);
    let vlr2 = Number(segundo.value);
    let vlr3 = Number(terceiro.value);
    /*parseInt  --> Transforma em Numero inteiro
    parseFloat -- > Transforma em Numero Decimal
    */

    //Calcular a Med. Aritmetica
    let medAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //Med. Ponderada
    let somVlrPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somPesos = 3 + 2 + 5;
    let medPonderada = somVlrPesos / somPesos;


    let somaMedias = medAritmetica + medPonderada;

    let medMedias = somaMedias / 2;

    h3resultado.innerHTML = 
    "Media Aritmetica: " + medAritmetica + "<br>"+
    "Media Ponderada: " + medPonderada + "<br>"+
    "Soma das Medias: " + somaMedias + "<br>"+
    "Medias das Medias: " + medMedias;

}

btCalcular.onclick = function(){
    calcular();
}
