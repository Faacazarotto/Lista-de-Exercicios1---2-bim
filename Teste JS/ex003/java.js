let resultado = document.querySelector("#resultado");
let valor = Math.floor(Math.random() * 10000);
let reajuste = valor * 0.01;
let salario = valor + reajuste;

resultado.innerHTML = "Salário gerado pelo sistema foi R$ " + valor + "<br> Com o Reajuste de 1% ficou para R$ " + salario;