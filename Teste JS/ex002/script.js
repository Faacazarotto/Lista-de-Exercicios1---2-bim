let vlrkg = document.querySelector("#valorkg");
let qtdkg = document.querySelector("#qtdkg");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");


function calculo(){
    let valorkg = Number(vlrkg.value);
    let quantidadekg = Number(qtdkg.value);

    let pagar = valorkg * quantidadekg;

    resultado.innerHTML = 
    "Valor a pagar R$" + pagar;
}

calcular.onclick = function(){
    calculo();
}