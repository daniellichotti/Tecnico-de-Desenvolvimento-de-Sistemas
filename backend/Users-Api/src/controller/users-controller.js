import { deleteUserService, getAllUsers, getUserById, patchUserService, postUser, putUserService } from "../services/users-services.js"


export async function listAllUsers(request, response){
    const users = await getAllUsers()

    return response.code(200).send(users)
}

export async function listUserById(request, response){
        const user = await getUserById(request.params.id)

        if(!user) {
            response.code(404).send({ message: "User not found!"})
        }

        response.code(200).send(user)
}

export async function createUser(request, response) {
        const newUser = await postUser(request.body)

        response.code(201).send(newUser)
}

export async function deleteUser(request, response){
        const message = await deleteUserService(request.params.id)

        response.code(202).send({ message: message })
    }

export async function putUser(request, response) {
        const message = await putUserService(request.params.id, request.body)

        response.code(200).send({ message:  message})
}

export async function patchUser(request, response){
        const message = await patchUserService(request.params.id, request.body)

        response.code(200).send({ message: message })
}