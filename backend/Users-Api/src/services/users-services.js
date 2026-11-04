import { v4 } from "uuid"

let users = [
    { id: "1", name: "Pedro", email: "pedrinho@yahoo.com", password: "123", createdAt: "10-10-10" },
    { id: "2", name: "Filipe", email: "filipinho@yahoo.com", password: "456", createdAt: "10-10-10" },
    { id: "3", name: "Danilo", email: "daniliinho@yahoo.com", password: "789", createdAt: "10-10-10" },
    { id: "4", name: "William", email: "williamzinho@yahoo.com", password: "101112", createdAt: "10-10-10" }
]

export async function getAllUsers() {
    return users
}

export async function getUserById(id) {
    return users.find(user => user.id === id)
}

export async function postUser(body) {
    const newUser = { 
            id: v4(), 
            createdAt: new Date(),
            ...body
        }

    users.push(newUser)
    
    return newUser
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