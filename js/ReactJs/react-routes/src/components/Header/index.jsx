import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";
import { SignOutIcon } from '@phosphor-icons/react'

export function Header() {
    const navigate = useNavigate()

    function logout(){
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    return (
        <HeaderContainer>
            <div/>
            <h1>Senaibook</h1>
            <button onClick={logout}>
                <SignOutIcon size={28} color="#0f766e" />
            </button>
        </HeaderContainer>
    )
};
