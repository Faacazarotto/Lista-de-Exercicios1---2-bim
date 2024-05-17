//Variaveis criadas com as chamadas do HTML

let primeiro = document.querySelector("#pagamento");
let segundo = document.querySelector("#preco");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#h3resultado");

function troco(){
    let pago = parseFloat(primeiro.value);
    let valor = parseFloat(segundo.value);

    let Troco = pago - valor;

    h3resultado.innerHTML = 
    "Troco R$" + Troco;
}

calcular.onclick = function(){
    troco();
}