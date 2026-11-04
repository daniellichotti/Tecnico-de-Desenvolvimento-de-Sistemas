import { v4 } from 'uuid'
import { createUser, deleteUser, listAllUsers, listUserById, patchUser, putUser } from '../controller/users-controller.js'

export async function usersRoutes(app) {
    // listar todos usuarios
    app.get('/', listAllUsers)
    // listar um usuario
    app.get('/:id', listUserById)
    // Cadastrar um usuario
    app.post('/', createUser)
    // Deletar um usuario
    app.delete('/:id', deleteUser)
    // Atualizar todo o usuario
    app.put('/:id', putUser)
    // Atualizar parcialmente um usuario
    app.patch('/:id', patchUser)
}