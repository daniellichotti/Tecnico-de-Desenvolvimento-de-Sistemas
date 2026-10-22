import { useForm } from "react-hook-form"

export function CreateUser() {
    const { register, handleSubmit, reset } = useForm()

    function onSubmit(data) {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register("first_name", {
                required: "O nome é obrigatorio!",
                minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
            })}/>
            <input type="text" placeholder="Sobrenome" {...register("last_name", {
                required: "O sobrenome é obrigatorio!",
                minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
            })}/>
            <input type="email" placeholder="email" {...register("email", {
                required: "O email é obrigatorio!",
                minLength: { value: 2, message: "Mínimo de 2 caracteres!" }
            })}/>
            <input type="file" accept="image/*" {...register("avatar")}/>
            <button type="submit">Cadastrar usuário</button>
        </form>
    )
};
