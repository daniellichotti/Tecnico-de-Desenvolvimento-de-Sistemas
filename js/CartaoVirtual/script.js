const nomeTitular = document.getElementById("nomeTitular")
const numeroDoCartao = document.getElementById("numeroDoCartao")
const validadeDoCartao = document.getElementById("validadeDoCartao")
const codigoDeSeguranca = document.getElementById("codigoDeSeguranca")

const nomeTitularCartao = document.getElementById("nomeTitularCartao")
const numeroDoCartaoHeader = document.getElementById("numeroDoCartaoHeader")
const validDate = document.getElementById("validDate")
const cvv = document.getElementById("cvv")

//adiciona um "escutador de eventos"
nomeTitular.addEventListener('input', (event) => {
    const valorDigitado = event.target.value

    //inserir os dados no h1
    nomeTitularCartao.textContent = valorDigitado
})

numeroDoCartao.addEventListener('input', (event) => {
    const valorDigitado = event.target.value

    //inserir os dados no h1
    numeroDoCartaoHeader.textContent = valorDigitado
})

validadeDoCartao.addEventListener('input', (event) => {
    const valorDigitado = event.target.value

    //inserir os dados no h1
    validDate.textContent = valorDigitado
})

codigoDeSeguranca.addEventListener('input', (event) => {
    const valorDigitado = event.target.value

    //inserir os dados no h1
    cvv.textContent = valorDigitado
})




/**
window.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        document.body.style.backgroundColor = 'red'
    }
    if (event.key === 'a') {
        document.body.style.backgroundColor = 'green'
    }
    if (event.key === 's') {
        document.body.style.backgroundColor = 'yellow'
    }
    if (event.key === 'd') {
        document.body.style.backgroundColor = 'blue'
    }
})
 */

