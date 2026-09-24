const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const itens = document.querySelector('.item')

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = todoInput.value
    
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerText = text
    todoList.appendChild(item)

    item.addEventListener('click', ()=>{
        item.classList.toggle('riscado') 
    })
})
