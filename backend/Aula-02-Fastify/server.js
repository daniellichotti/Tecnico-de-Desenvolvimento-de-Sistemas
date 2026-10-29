import Fastify from 'fastify'
import { v4 } from 'uuid'

let tasks = [
    { id: 1, title: 'Estudar JavaScript', date: '10-10-27', done: false},
    { id: 2, title: 'Estudar Ingles', date: '11-11-27', done: false},
    { id: 3, title: 'Comprar arroz', date: '12-12-27', done: false}
]

const app = Fastify( { logger: true } )

// ROTA GET
app.get('/tasks', async (request, response) => {
    response.code(200).send(tasks)
})

// ROTA GET BY ID COM URL PARAMS
app.get('/tasks/:id', async (request, response) => {
    const task = tasks.find(task => task.id === request.params.id)

    response.code(200).send(task)
})

// ROTA GET COM URL QUERY localhost:3000/tasks?done=true
app.get('/tasks-done', async (request, response) => {
    
    let tasksDone = tasks.filter(task => String(task.done) === request.query.done)

    response.code(200).send(tasksDone)
})

// ROTA DELETE
app.delete('/tasks/:id', async (request, response) => {
    tasks = tasks.filter(task => task.id !== request.params.id)

    response.code(202).send(tasks)
})

// ROTA POST
app.post('/tasks', async (request, response) => {
    const newTask = { 
        id: v4(), 
        date: new Date(),
        done: false,
        ...request.body 
        }
    tasks.push(newTask)
    response.code(201).send(newTask)
})

// ROTA PUT
app.put('/tasks', async (request, response) => {

    const body = request.body
    const index = tasks.findIndex(p => p.id === body.id)
    if (index === -1) {
        return { error: "Erro, task não encontrada"}
    }

    tasks[index] = { ...tasks[index], ...body }

    response.code(200).send(tasks[index])
})

// ROTA PATCH - UPDATE DONE
app.patch('/tasks/:id', async (request, response) => {

    //const body = request.body
    const index = tasks.findIndex(p => p.id === request.params.id)
    if (index === -1) {
        return { error: "Erro, task não encontrada"}
    }

    tasks[index] = { ...tasks[index], "done": !tasks[index].done }

    response.code(200).send(tasks[index])
})

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})