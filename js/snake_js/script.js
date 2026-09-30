const snake = document.getElementById("snake")
const gameContainer = document.getElementById("gameContainer")

let velocidade = 4

let cima = false
let baixo = false
let esquerda = false
let direita = false

document.addEventListener("keypress", (event) => {
    if(event.key === 'w'){
        cima = true
        baixo = false
        esquerda = false
        direita = false
    }
    if(event.key === 's'){
        cima = false
        baixo = true
        esquerda = false
        direita = false
    }
    if(event.key === 'a'){
        cima = false
        baixo = false
        esquerda = true
        direita = false
    }
    if(event.key === 'd'){
        cima = false
        baixo = false
        esquerda = false
        direita = true
    }
})

function moveSnake() {
    let x = snake.offsetLeft
    let y = snake.offsetTop
    
    if(cima) {
        y -= velocidade
    }
    if(baixo) {
        y += velocidade
    }
    if(esquerda) {
        x -= velocidade
    }
    if(direita) {
        x += velocidade
    }

    snake.style.left = x + 'px'
    snake.style.top = y + 'px'
    snake.style.transform = 'none'

    
    requestAnimationFrame(moveSnake)
}

function createFruit() {
    const newFruit = document.createElement("div")
    newFruit.classList.add("fruit")
    gameContainer.appendChild(newFruit)

    newFruit.style.top = Math.random() * gameContainer.offsetHeight + 'px'
    
    newFruit.style.left = (Math.random() * gameContainer.offsetWidth) + 'px'

    console.log(Math.random() * gameContainer.offsetHeight)
}

requestAnimationFrame(moveSnake)
setInterval(createFruit, 3000)
