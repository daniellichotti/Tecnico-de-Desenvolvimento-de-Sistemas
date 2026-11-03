import Fastify from 'fastify'

const app = Fastify({ logger: true })

// listar todos usuarios
app.get()
// listar um usuario
app.get()
// Cadastrar um usuario
app.post()
// Deletar um usuario
app.delete()
// Atualizar todo o usuario
app.put()
// Atualizar parcialmente um usuario
app.patch()

app.listen({ port: 3000 }, (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})