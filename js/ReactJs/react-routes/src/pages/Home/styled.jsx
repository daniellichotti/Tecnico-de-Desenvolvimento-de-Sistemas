import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: var(--bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;


    button {
        height: 32px;
        width: 200px;

        background-color: var(--teal-300);
        border: none;
        border-radius: 8px;
        color: var(--teal-700);
        cursor: pointer;
    }
`


export const UsersListContainer = styled.div`
    padding: 32px;
    
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;

`

export const UserCard = styled.div`

    padding: 16px;
    border-radius: 8px;

    background-color: var(--teal-200);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    cursor: pointer;
    transition: .1s ease;

    &:hover {
        background-color: var(--teal-300);
    }

    img {
        height: 72px;
        border-radius: 99%;
        border: 3px solid var(--teal-700);
    }
`