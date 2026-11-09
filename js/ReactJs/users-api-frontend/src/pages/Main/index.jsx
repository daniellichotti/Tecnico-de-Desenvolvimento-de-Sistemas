import { useEffect, useState } from "react"
import axios from 'axios'

export function Main() {
    const [users, setUsers] = useState([])
    
    const fetchUsers = async () => {
        const response = await axios.get('http://127.0.0.1:3003/users')
        setUsers(response.data)
    }
    
    useEffect(() => {
        fetchUsers();
    }, [])
    

    return (
        <>
            <h1>Header</h1>
            <h2>cadastro</h2>
            <h2>lista</h2>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                        <h1>{user.password}</h1>
                        <h1>{user.id}</h1>
                        <h1>{user.createdAt}</h1>
                    </div>
                ))
            }
        </>
    )
};
