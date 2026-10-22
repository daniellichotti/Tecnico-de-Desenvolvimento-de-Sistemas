import styled from 'styled-components'

export const CreateUserContainer = styled.div`
    width: 100vw;
    min-height: 100vh;

    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    form {
        width: 30%;
        padding: 40px;
        border-radius: 8px;
        margin-bottom: 10%;
        box-shadow: 4px 4px 10px #c9c9c9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;

        background-color: white;

        input {
            width: 250px;
            height: 40px;
            padding: 8px;
            border: 2px solid var(--teal-700);
            border-radius: 8px;
            background-color: white;
            color: var(--teal-700);
        }
        
        button {
            width: 250px;
            height: 40px;
            padding: 8px;
            border: 2px solid var(--teal-700);
            border-radius: 8px;
            background-color: var(--teal-300);
            color: var(--teal-700);
            cursor: pointer;
        }
    }
`