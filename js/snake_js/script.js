const snake = document.getElementById("snake")
const gameContainer = document.getElementById("gameContainer")

let velocidade = 4

let pontos = 0

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

    if(cima) y -= velocidade
    if(baixo) y += velocidade
    if(esquerda) x -= velocidade
    if(direita) x += velocidade

    if(x < 0) x = 0
    if(y < 0) y = 0

    if(x > gameContainer.offsetWidth - snake.offsetWidth) {
        x = gameContainer.offsetWidth - snake.offsetWidth
    }

    if(y > gameContainer.offsetHeight - snake.offsetHeight) {
        y = gameContainer.offsetHeight - snake.offsetHeight
    }

    snake.style.left = x + 'px'
    snake.style.top = y + 'px'
    snake.style.transform = 'none'

    // VERIFICA COLISÃO COM AS FRUTAS
    const snakeRect = snake.getBoundingClientRect()
    const fruits = document.querySelectorAll(".fruit")
    
    fruits.forEach((fruit) => {
        const fruitRect = fruit.getBoundingClientRect()
        
        if (
            snakeRect.left < fruitRect.right &&
            snakeRect.right > fruitRect.left &&
            snakeRect.top < fruitRect.bottom &&
            snakeRect.bottom > fruitRect.top
        ) {
            pontos++
            snake.style.height = ((pontos*4)+20) + 'px'
            snake.style.width = ((pontos*4)+20) + 'px'
            
            fruit.remove()

            console.log("Pontos:", pontos)
        }
    })

    requestAnimationFrame(moveSnake)
}


function createFruit() {
    const newFruit = document.createElement("div")

    newFruit.classList.add("fruit")

    gameContainer.appendChild(newFruit)

    newFruit.style.top =
        Math.random() * (gameContainer.offsetHeight - newFruit.offsetHeight) + 'px'

    newFruit.style.left =
        Math.random() * (gameContainer.offsetWidth - newFruit.offsetWidth) + 'px'
}



requestAnimationFrame(moveSnake)
setInterval(createFruit, 3000)
