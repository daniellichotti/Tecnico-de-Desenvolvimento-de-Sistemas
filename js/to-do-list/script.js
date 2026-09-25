const tasksCounter = document.getElementById('tasks-counter')
const toggleBtn = document.getElementById('toggle-btn')
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const itens = document.querySelector('.item')
let quantidade = document.querySelectorAll('ol li').length


todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = todoInput.value
    
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerText = text
    todoList.appendChild(item)
    
    quantidade++
    tasksCounter.textContent = 'Quantidade: ' + quantidade

    item.addEventListener('click', ()=>{
        item.classList.toggle('riscado') 
    })

})


function toggleTheme() {
    document.body.classList.toggle("dark-theme")

    if(document.body.className === 'dark-theme'){
        toggleBtn.textContent = '☀️'
    } else {
        toggleBtn.textContent = '🌕'
    }

}