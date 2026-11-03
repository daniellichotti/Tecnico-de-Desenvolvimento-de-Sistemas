import Fastify from 'fastify'
import { v4 } from 'uuid'

let users = [
    { id: "1", name: "Pedro", email: "pedrinho@yahoo.com", password: "123", createdAt: "10-10-10" },
    { id: "2", name: "Filipe", email: "filipinho@yahoo.com", password: "456", createdAt: "10-10-10" },
    { id: "3", name: "Danilo", email: "daniliinho@yahoo.com", password: "789", createdAt: "10-10-10" },
    { id: "4", name: "William", email: "williamzinho@yahoo.com", password: "101112", createdAt: "10-10-10" }
]

const app = Fastify({ logger: true })

// listar todos usuarios
app.get('/users', async (request, response) => {
    response.code(200).send(users)
})

// listar um usuario
app.get('/users/:id', async (request, response) => {
    const user = users.find(user => user.id === request.params.id)

    if(!user) {
        response.code(404).send({ message: "User not found!"})
    }

    response.code(200).send(user)
})

// Cadastrar um usuario
app.post('/users', async (request, response) => {
    const newUser = { 
        id: v4(), 
        createdAt: new Date(),
        ...request.body
    }

    users.push(newUser)

    response.code(201).send({ message: "User created!" })
})

// Deletar um usuario
app.delete('/users/:id', async (request, response) => {
    users = users.filter(user => user.id !== request.params.id)

    response.code(202).send({ message: "User deleted!" })
})

// Atualizar todo o usuario
app.put('/users/:id', async (request, response) => {
    const index = users.findIndex(user => user.id === request.params.id)

    if(index === -1) {
        response.code(404).send({ message: "User not found!" })
    }

    users[index] = request.body

    response.code(200).send({ message: "User updated!" })
})

// Atualizar todo o usuario
app.patch('/users/:id', async (request, response) => {
    const index = users.findIndex(user => user.id === request.params.id)

    if(index === -1) {
        response.code(404).send({ message: "User not found!" })
    }

    users[index] = {  ...users[index], ...request.body }

    response.code(200).send({ message: "User updated!" })
})

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})


// Atualizar parcialmente um usuario
//app.patch()