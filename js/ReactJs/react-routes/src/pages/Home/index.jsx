import { useState } from "react";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styled";
import axios from 'axios'

export function Home() {
    const [users, setUsers] = useState([])

    async function buscarUsuario() {
        const response = await axios.get(
            'https://reqres.in/api/users/2',
            {
                headers: {
                    'x-api-key': 'free_user_3KyeFEQHfmE2Y6lUMx3g19dNbNO'
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
            <button onClick={buscarUsuario}>Buscar Usuario</button>
            <button onClick={buscarUsuarios}>Buscar Usuarios</button>
            {
                users.map((user) => (
                        <div key={user.id}>
                            <img src={user.avatar} alt="" />
                            <h2>{user.first_name} {user.last_name} </h2>
                            <p>{user.email}</p>
                        </div>
                ))
            }
        </HomeContainer>
    )
};
