import Fastify from 'fastify'

const app = Fastify( { logger: true } )

// ROTA GET
app.get('/', async () => {
    return { mensagem: 'Acorda thiago!' }
})

// ROTA GET BY ID COM URL PARAMS
app.get('/animes/:id', async (request) => {
    return { id: request.params.id }
})

// ROTA GET COM URL QUERY
app.get('/animes', async (request) => {
    return { rating: request.query.rating }
})

// ROTA POST
app.post('/eco', async (request) => {
    return { eco: request.body }
})

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})