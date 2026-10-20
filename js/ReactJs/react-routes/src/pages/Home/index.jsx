import { useState } from "react";
import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer, UserCard, UsersListContainer } from "./styled";
import axios from 'axios'

export function Home() {
    const [users, setUsers] = useState([])

    async function buscarUsuario() {
        const response = await axios.get(
            'https://reqres.in/api/users/2',
            {
                headers: {
                    'x-api-key': import.meta.env.API_KEY
                }
            }
        )    
        
        const data = response.data.data

        console.log(data.email)
    }

    async function buscarUsuarios() {
        const response = await axios.get(
            'https://reqres.in/api/users?page=1',
            {
                headers: {
                    'x-api-key': import.meta.env.API_KEY
                }
            }
        )    
        
        const data = response.data.data

        setUsers(data)
    }

    return (
        <HomeContainer>
            <Header/>

            <ButtonsContainer>
                <button onClick={buscarUsuario}>Buscar Usuario</button>
                <button onClick={buscarUsuarios}>Buscar Usuarios</button>
            </ButtonsContainer>
            
            <UsersListContainer>
                {
                    users.map((user) => (
                            <UserCard key={user.id}>
                                <img src={user.avatar} alt="" />
                                <div>
                                    <h2>{user.first_name} {user.last_name} </h2>
                                    <p>{user.email}</p>
                                </div>
                            </UserCard>
                    ))
                }
            </UsersListContainer>
        </HomeContainer>
    )
};
