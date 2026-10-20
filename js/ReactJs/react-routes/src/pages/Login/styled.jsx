import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: var(--bg-color);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginSuccess = styled.div`
    height: 50px;
    width: 85%;

    border-radius: 8px;

    background-color: #72e969;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: #007c04;
    }
`

export const LoginFail = styled.div`
    height: 50px;
    width: 85%;

    border-radius: 8px;

    background-color: #e96969;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: #7c0000;
        font-size: 16px;
    }
`

export const LoginContainer = styled.div`
    height: 350px;
    width: 300px;

    border-radius: 16px;
    box-shadow: 4px 4px 10px #7b8189;

    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        input {
            height: 20px;
            
            padding: 16px 8px;
            
            border: none;
            border-radius: 4px;
            outline: none;
            background-color: #C1CAD6;
        }

        label {
            font-size: 20px; 
        }
    } 
    

    button {
        height: 40px;
        width: 100%;

        border: none;
        border-radius: 8px;
        
        background-color: var(--teal-300);
        
        color: white;
        font-size: 20px;

        cursor: pointer;
        transition: .1s ease-out;
        
        &:hover {
            background-color:  var(--teal-400);
        }
    }
`