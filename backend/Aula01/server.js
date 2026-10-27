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

    if (req.method === 'GET' && !idStr) {
        res.writeHead(200)
        return res.end(JSON.stringify(products))
    }

    if (req.method === 'GET' && idStr) {
        const product = products.find(p => p.id === Number(idStr))
        if(!product) {
            return res.writeHead(404).end(JSON.stringify({ erro: "Not Found" }))
        }
        
        return res.writeHead(200).end(JSON.stringify(product))
    }

    if (req.method === 'POST') {
        const body = await getBody(req)
        const newProduct = { id: Date.now(), ...body }
        products.push(newProduct)

        return res.writeHead(201).end(JSON.stringify(newProduct))
    }
})

server.listen(3000, () => {
    console.log(`API rodando em https://localhost:${3000}`)
})