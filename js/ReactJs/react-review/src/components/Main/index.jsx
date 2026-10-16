import { useState } from "react";
import { FormContainer, LoginContainer, LoginFail, LoginSuccess, MainContainer } from "./styled";

export function Main(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)

    function handleSubmit(e){
        e.preventDefault()

        if(username === 'dnl' && password === '123'){
            setAuth(true)
        } else {
            setAuth(false)
        }
    }

    return (
        <MainContainer>
            <LoginContainer>
                <h1>Login</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <div>
                        <label>Usuário</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={ (e) => { setUsername(e.target.value) } }
                            placeholder="Digite seu usuário" 
                            required
                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={ (e) => { setPassword(e.target.value) } }
                            placeholder="Digite sua senha" 
                            required
                        />
                    </div>

                    <button type="submit">Entrar</button>
                </FormContainer>
                {
                    auth ? 
                    (
                        <LoginSuccess>
                            <h1>Sucesso!</h1>
                        </LoginSuccess>
                    ) 
                    : 
                    (
                        <LoginFail>
                            <h1>Credenciais inválidas!</h1>
                        </LoginFail>
                    )
                }
                    
                    
            </LoginContainer>
        </MainContainer>
    )
}