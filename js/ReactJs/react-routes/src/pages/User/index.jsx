import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BackButton, UserContainer, UserPageContainer } from "./styled"
import { Header } from '../../components/Header'

export function User() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(()=> {
        async function getUser() {
            const response = await axios.get(
                `https://reqres.in/api/users/${id}`,
                {
                    headers: {
                        'x-api-key': import.meta.env.API_KEY
                    }
                }
            )

            const data = response.data.data

            setUser(data)
        }

        getUser()
    }, [id])

    function toHome(){
        navigate('/home') 
    }

    return (
        <UserPageContainer>
            <Header/>
            <UserContainer>

                {
                    user === null ?
                    (
                        <h1>Carregando...</h1>
                    ) : (
                        <div>
                            <img src={user.avatar} alt="" />
                            <h1>Nome: {user.first_name}</h1>
                            <h2>Sobrenome: {user.last_name}</h2>
                            <h2>Contato: {user.email}</h2>
                        </div>
                    )                
                }

                <BackButton onClick={toHome}>Voltar para Home</BackButton>
            </UserContainer>
        </UserPageContainer>
    )
};
