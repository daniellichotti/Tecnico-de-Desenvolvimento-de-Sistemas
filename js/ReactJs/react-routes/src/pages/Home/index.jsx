import { useState } from "react";
import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer, UserCard, UsersListContainer } from "./styled";
import axios from 'axios'

export function Home() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    function nextPage(){
        setPage(page+1)
        buscarUsuarios()
    }
    function prevPage(){
        if(page === 1){
            setPage(1)
        } else {
            setPage(page-1)
        }

        buscarUsuarios()
    }

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
            `https://reqres.in/api/users?page=${page}`,
            {
                headers: {
                    'x-api-key': import.meta.env.API_KEY
                }
            }
        )    
        
        const data = response.data.data

        setUsers(data)
    }

    if (users.length === 0) {
        return (
            <HomeContainer>
                <Header/>

                <ButtonsContainer>
                    <button onClick={buscarUsuario}>Buscar Usuario</button>
                    <button onClick={buscarUsuarios}>Buscar Usuarios</button>
                </ButtonsContainer>

                <h1>Não tem ninguem aqui! :(</h1>

                <ButtonsContainer>
                    <button onClick={prevPage}>Anterior</button>
                    <button onClick={nextPage}>Próximo</button>
                </ButtonsContainer>
            </HomeContainer>
        )
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

            <ButtonsContainer>
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Próximo</button>
            </ButtonsContainer>

        </HomeContainer>
    )
};
