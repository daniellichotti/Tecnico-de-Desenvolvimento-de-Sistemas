// IF e ELSE no JS!!
/* 
let age = 31

if (age < 18){
    console.log('Menor de idade')
} else if (age < 60){
    console.log('Maior de idade')
} else {
    console.log('Idoso')
}

let option = 3

switch(option) {
    case 1:
        console.log('Consultar horarios')
        break
    case 2:
        console.log('Agendar consulta')
        break
    //pode adicionar mais cases
    default:
        console.log('Opcao inválida')
}

let result = 1
try {
    console.log(result)
    throw new Error('Erro novo detectado')
} catch(error) {
    console.log(error)
    console.log('Sistema fora do ar, tente novamente mais tarde!')
} finally {
    console.log('fim')
}


//Laços de repetição (LOOPS)
let execute = true
while (execute) {
    let response = window.prompt('deseja continuar? 1- sim 2 - nao')
    if(response === '2'){
        execute = false
    }
}

console.log('fim')

let age = 19
while(age < 25) {
    console.log('não pode entrar!!!')
    age+=1
}

value = 0
do {
    value++
    console.log('hi')
} while (value < 10)

for(step = 0; step <= 10; step++) {
    console.log(step)
}

function celsiusToFahrenheit (celsius) {
    return (celsius * 9/5) + 32
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
console.log(celsiusToFahrenheit(132))
console.log(fahrenheitToCelsius(269.6))

function calculaTempoViagem(distance, vm) {
    return distance / vm
}

console.log(calculaTempoViagem(200, 100))

*/
function fibbonacciAteN(n) {
    let ant = 0
    let atual = 1
    let prox = ant + atual
    let somatorio = ant + atual + prox

    console.log(ant)
    console.log(atual)
    console.log(prox)

    while(prox < n){
        ant = atual
        atual = prox
        prox = ant + atual
        if (prox > n){
            break
        }
        somatorio += prox
        console.log(prox)
    }

    console.log(`O somatório é: ${somatorio}`)
}

fibbonacciAteN(15)