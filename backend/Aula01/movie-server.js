import http from 'http'

const port = 3000

let movies = [
    { id: 1, title: "O Senhor dos Anéis", year: 2003, rating: 5},
    { id: 2, title: "O Senhor dos Anéis 2", year: 2004, rating: 5}
]

async function getBody(req) {
    let body = ''
    for await (const chunk of req) body += chunk

    return body ? JSON.parse(body) : {}
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const [, route, idStr] = req.url.split('/')
    const id = Number(idStr)

    if (route !== 'movies') {
        return res.writeHead(404).end(JSON.stringify({ erro: "Not Found!" }))
    }

    //GET ALL MOVIES
    if(req.method === 'GET' && !id) {
        return res.writeHead(200).end(JSON.stringify(movies))
    }

    //GET MOVIES BY ID
    if(req.method === 'GET' && id) {
        const movie = movies.find(p => p.id === id)
        if(!movie) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found"}))
        }

        return res.writeHead(200).end(JSON.stringify(movie))
    }

    // POST MOVIE
    if (req.method === 'POST') {
        const body = await getBody(req)
        const newMovie = { id: movies.length+1, ...body }
        movies.push(newMovie)

        return res.writeHead(201).end(JSON.stringify(newMovie))
    }

    // UPDATE MOVIE PUT
    if (req.method === 'PUT' && id) {
        const body = await getBody(req)
        const index = movies.findIndex(p => p.id === id)
        if (index === -1) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }

        movies[index] = { ...movies[index], ...body }

        return res.writeHead(200).end(JSON.stringify(movies[index]))
    }

     // DELETE MOVIE
    if (req.method === 'DELETE' && id) {
        movies = movies.filter(p => p.id !== id)
        
        return res.writeHead(204).end(JSON.stringify({ sucess: "Item removido com sucesso!" }))
    }
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port} 🖥️`)
})