import mysql from 'mysql2/promise'

export const db = await mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123",
    database: "my-data-base",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

console.log("Conectado ao mysql!")