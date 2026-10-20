import styled from 'styled-components'

export const ErrorContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: var(--bg-color);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const TextContainer = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        h1 {
            font-size: 40px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color: #134e4a;
        }
    }

    p {
        color: #134e4a;
        margin-top: 20px;
        font-size: 24px;
        width: 300px;
        
        background-color: #f0fdfa;
        padding: 8px;
    }
`

export const ImgContainer = styled.img`
    height: 200px;
    width: 300px;

    mix-blend-mode: luminosity;

    border-radius: 99%;
`

export const HomeButton = styled.button`
    height: 40px;
    width: 120px;
    background-color: #f0fdfa;
    border: none;
    transition: .1s ease;
    
    &:hover {
        background-color: #e3f0ee;
    }
`

export const ImgButtonContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`