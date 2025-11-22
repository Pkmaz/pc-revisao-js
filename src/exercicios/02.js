// let botao = document.getElementById("btn")
// botao.onclick = () => {
//     let num = prompt("Digite um número:")
//     alert(num + " bazinga!")
// }

let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    alert("Botão foi clicado")
})

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault() //Com isso não é recarregada a página ao submeter um formulário
    console.log("Test")
})