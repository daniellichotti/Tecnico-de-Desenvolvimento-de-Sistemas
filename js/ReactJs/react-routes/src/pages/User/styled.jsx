import styled from 'styled-components'

export const UserContainer = styled.div`

    padding: 20px;
    width: 100vw;
    min-height: 100vh;

    background-color: var(--bg-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 200px;
        width: 200px;
        border: 3px solid var(--teal-700);
        border-radius: 8px;
    }
`

export const BackButton = styled.button`
    background-color: var(--teal-600);
    height: 70px;
    padding: 24px;
    border: none;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #8f8f8f;

    font-size: 20px;

    color: var(--teal-100);

    transition: .2s ease;
    cursor: pointer;

    &:hover {
        background-color: var(--teal-700);

        scale: 110%;
    }
`