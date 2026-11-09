import { useEffect, useState } from "react"
import axios from 'axios'
import { ListSection, MainContainer, RegisterSection } from "./styled"

export function Main() {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    const fetchUsers = async () => {
        const response = await axios.get('http://127.0.0.1:3003/users')
        setUsers(response.data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post('http://127.0.0.1:3003/users', formData)

        setUsers([...users, formData])
        console.log(response)
    }
    
    useEffect(() => {
        fetchUsers();
    }, [users])
    

    return (
        <MainContainer>
            <h1>Sistema de cadastro de usuarios Senai 2000</h1>

            <RegisterSection>
                <h2>Cadastro de Usuários:</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        placeholder="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </RegisterSection>

            <ListSection>
                <h2>Lista de Usuários:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>email</th>
                                    <th>nome</th>
                                    <th>senha</th>
                                    <th>data de cadastro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.name}</td>
                                            <td>{user.password}</td>
                                            <td>{user.createdAt}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
            </ListSection>
            
        </MainContainer>
    )
};
