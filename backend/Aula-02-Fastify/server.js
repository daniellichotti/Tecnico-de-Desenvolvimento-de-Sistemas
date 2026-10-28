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

    console.log(tasksDone)

    response.code(200).send(tasksDone)
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

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})