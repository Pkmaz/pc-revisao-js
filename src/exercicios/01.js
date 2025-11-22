// Desconto em compra
// Regra de negócio:
// - Se valor compra >= 100 -> 10% de desconto
// - Se valorCompra < 100 -> Sem desconto
// Criar uma função que execute isso!

let escopoGlobal = 10 // Variável de escopo global

function calcularDesconto(valorCompra){
    let desconto = 0 // escopo de função
    if (valorCompra >= 100) {
        desconto = valorCompra * 0.1
    }
    valorFinal = valorCompra - desconto // JS já entende que é uma variável de escopo let
    return{
        valorCompra,
        desconto,
        valorFinal
    }
}

console.log(calcularDesconto(1200));