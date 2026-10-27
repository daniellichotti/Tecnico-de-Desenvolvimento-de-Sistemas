import http from 'http';

let products = [
    { id: 1, name: "Mouse Gamer", price: 150 },
    { id: 2, name: "Teclado Gamer", price: 350 },
    { id: 3, name: "Headset", price: 50 },
]

async function getBody(req) {
    let body = ''
    for await (const chunk of req) body += chunk
    
    return body ? JSON.parse(body) : {}
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const [, route, idStr] = req.url.split('/')

    if(route !== 'products') {
        return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
    }

    // GET ALL
    if (req.method === 'GET' && !idStr) {
        res.writeHead(200)
        return res.end(JSON.stringify(products))
    }

    // GET BY ID
    if (req.method === 'GET' && idStr) {
        const product = products.find(p => p.id === Number(idStr))
        if(!product) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }
        
        return res.writeHead(200).end(JSON.stringify(product))
    }

    // POST PRODUCT
    if (req.method === 'POST') {
        const body = await getBody(req)
        const newProduct = { id: Date.now(), ...body }
        products.push(newProduct)

        return res.writeHead(201).end(JSON.stringify(newProduct))
    }

    // UPDATE PRODUCT PUT
    if (req.method === 'PUT' && idStr) {
        const body = await getBody(req)
        const index = products.findIndex(p => p.id === Number(idStr))
        if (index === -1) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }

        products[index] = { ...products[index], ...body }

        return res.writeHead(200).end(JSON.stringify(products[index]))
    }

    // DELETE PRODUCT
    if (req.method === 'DELETE' && idStr) {
        products = products.filter(p => p.id !== Number(idStr))
        

        return res.writeHead(204).end(JSON.stringify({ sucess: "Item removido com sucesso!" }))
    }
})

server.listen(3000, () => {
    console.log(`API rodando em http://localhost:${3000}`)
})