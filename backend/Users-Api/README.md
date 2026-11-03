1. npm init -y
    a. Entrar no package.json e alterar "type" para "module"
    b. Adicionar ',' depois de "test" e acrescentar:
        `
        "dev": "node --watch server.js"
        `
2. npm install fastify uuid