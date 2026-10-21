import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function User() {
    const { id } = useParams()

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

    console.log(user)
    return (
        <h1>PAgina de USUARio</h1>
    )
};
