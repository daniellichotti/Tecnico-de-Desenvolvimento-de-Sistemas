import axios from "axios"
import { useForm } from "react-hook-form"

export function CreateUser() {
    const { register, handleSubmit, reset } = useForm()

    async function onSubmit(data) {
        console.log(data)
        const response = await axios.post(
                `https://reqres.in/api/users`, 
                data,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            )
        reset()

        console.log(response.status)
    }

    return (
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
        </form>
    )
};
