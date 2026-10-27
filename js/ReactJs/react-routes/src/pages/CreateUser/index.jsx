import axios from "axios"
import { useForm } from "react-hook-form"
import { CreateUserContainer } from "./styled"
import { Header } from "../../components/Header"
import { useState } from "react"

export function CreateUser() {
    const { register, handleSubmit, reset } = useForm()
    const [state, setState] = useState(null)

    async function onSubmit(data) {

        try {
            const response = await axios.post(
                    `https://reqres.in/api/users`, 
                    data,
                    {
                        headers: {
                            'x-api-key': import.meta.env.API_KEY
                        }
                    }
                )

            setState(response.status)
            console.log(response.status)
        } catch (error) {
            console.log(error.code)
            setState(400)
        } finally {
            reset()
        }
    }

    return (
        <CreateUserContainer>
            <Header/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nome" {...register("name", {
                    required: "O nome é obrigatorio!",
                    minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
                })}/>
                <input type="text" placeholder="Emprego" {...register("job", {
                    required: "O emprego é obrigatorio!",
                    minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
                })}/>
                <button type="submit">Cadastrar usuário</button>
                {   
                    state === null ? 
                    (
                        <>
                        </>
                    ) 
                    :
                        state === 201 ? 
                        (
                            <p style={{backgroundColor: '#9fff9f'}}>Usuário criado com sucesso!</p>
                        )
                        :
                        (
                            <p style={{backgroundColor: '#ff9f9f'}}>Erro ao cadastrar usuário!</p>
                        )
                }
            </form>
        </CreateUserContainer>

    )
};
