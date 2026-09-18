//declarando uma variavel sem valor
var user
console.log(user)

//declarando uma variavel com valor e reatribuindo
var userEmail = 'thiaguinho@yahoo.com'
console.log(userEmail)
userEmail = 'thiagao@yahoo.com'
console.log(userEmail)

//redeclarando variaveis (JS é CASE SENSITIVE!)
var produto = 'arroz'
console.log(produto)
var produto = 'feijao'
var Produto = 'macarrão'
console.log(Produto)

//let só pode declarar 1 vez por escopo
let usuario
console.log(usuario)

let number = 10
console.log(number)
number = 11
console.log(number)

//usamos const para variaveis que não queremos reatribuiçoes
const pi = 3.14
console.log(pi)
//pi = 3.14156

//escopo LET E CONST SÓ EXISTEM DENTRO DE UM ESCOPO
{
    let aluno2 = 'gustavo'
    const aluno3 = 'thiago'
    var aluno1 = 'pedro'
}

console.log(aluno1)

//boas praticas
let lastname //pode fazer, mas é uma péssima prática
let lastName //camelcase
let last_name //snake_case
let ação //pode fazer, mas é uma péssima prática

let $email = 'gabriel@yahoo.com'
let _email = 'gabriel@yahoo.com'

//nao pode
//let 1pedro = 'arroz'

console.log(typeof('arroz'))
console.log(typeof(1))
console.log(typeof(11.4))
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof(lastname))
var x = null
console.log(typeof(x))

//Coeção Implícita
console.log(5+5) //10
console.log('5'+'5') //55
console.log('5'+5) //55
console.log('5'-5) //0
console.log(true + 1) //2 true vira 1
console.log(false + 1) //1 false vira 0
console.log(null + 1) //1 null vira 0
console.log(undefined + 1) //NaN undefined não vira nada!

//Type Casting

console.log(String(1))
console.log(number.toString())

console.log(Number('5'))
console.log(parseInt('42'))
console.log(parseInt('42.5'))
console.log(parseFloat('42.5'))
console.log(parseInt('10 anos'))
console.log(parseInt('anos 10')) //tem q começar com numeros
console.log(parseInt('1010', 2)) //2 em binario é 10 em decimal
console.log(parseInt('FF', 16)) //ff em binario é 256 em decimal
console.log(parseInt('08'))//hoje é seguro mas antigamente era interpretado como base 8




//operaçoes aritméticas
console.log('Soma: ', 1+3)
console.log('Subtração: ', 1-3)
console.log('Multiplicação: ', 1*3)
console.log('Multiplicação Decimal: ', 1.4*3.3)
console.log('Divisão: ', 1/3)
console.log('Resto: ', 1%3)
console.log('Exponencial: ', 2 ** 8)

//incrementador
var numberToIncrement = 0 //0
numberToIncrement++ //1
console.log(numberToIncrement++) //1
console.log(++numberToIncrement) //3
console.log(numberToIncrement += 12)

//decrementador
var numberToDecrement = 0 //0
numberToDecrement-- //-1
console.log(numberToDecrement--) //-1
console.log(--numberToDecrement) //-3
console.log(numberToDecrement -= 11) //-14

//isso é um comentario de uma linha

/*
Isso é um 
comentario 
de multiplas 
linhas
*/

/**
 * 
 * @param {float} base - base do triangulo 
 * @param {float} altura - altura do triangulo 
 * @returns {float} area do triangulo
*/
function calcularAreaTriangulo(base, altura) {
    console.log((base*altura)/2)
}
calcularAreaTriangulo(5, 2)


console.clear()

/**
 * 
 * @param {float} altura do cilindro
 * @param {float} raio da base do cilindro
 * @returns {float} volume do cilindro
 */
function calcularVolumeCilindro(altura, raio) {
    return altura * 3.14 * (raio ** 2)
}

console.log(calcularVolumeCilindro(35.0, 5.2))

/**
 * 
 * @param {Int} a - coeficiente do x²
 * @param {Int} b - coeficiente do x³
 * @param {Int} c - - coeficiente
 * @returns {Float} raiz da equação do 2º grau
 */
function calculaBaskara(a, b, c) {
    let delta = b ** 2 - (4 * a *c)
    let raizDelta = delta ** (-2)
    let xPos = (-1*b + raizDelta)/2*a
    let xNeg = (-1*b - raizDelta)/2*a  

    return [xPos, xNeg]
}

console.log(...calculaBaskara(1, -5, 6))