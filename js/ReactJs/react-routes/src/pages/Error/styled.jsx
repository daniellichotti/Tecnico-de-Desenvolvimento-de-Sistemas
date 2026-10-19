import styled from 'styled-components'

export const ErrorContainer = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: #99f6e4;

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
