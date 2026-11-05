import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllUsers() {
    const [ users ] = await db.query("SELECT * FROM usuarios")

    return users
}

export async function getUserById(id) {
    const [ user ] = await db.query("SELECT * FROM usuarios WHERE id = ?", [id])
    
    return user
}

export async function postUser(body) {
    const { name, email, password } = body

    const user = await db.query("INSERT INTO usuarios (id, name, email, password, createdAt) VALUES (?, ?, ?, ?, ?)", [v4(), name, email, password, "arroz"])
    
    return user
}

export async function deleteUserService(id) {
    users = users.filter(user => user.id !== id)

    return "User deleted!"
}

export async function putUserService(id, body){
    const index = users.findIndex(user => user.id === id)

    if(index === -1) {
        response.code(404).send({ message: "User not found!" })
    }

    users[index] = body

    return "User updated!"
}

export async function patchUserService(id, body){
    const index = users.findIndex(user => user.id === id)

    if(index === -1) {
        response.code(404).send({ message: "User not found!" })
    }

    users[index] = {  ...users[index], ...body }

    return "User updated!"
}