import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    min-height: 400px;
    width: 300px;

    padding: 16px;

    border-radius: 8px;

    background-color: white;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    h1 {
        padding: 4px;
        background-color: white;
        font-size: 24px;
        overflow: hidden;
    }
    h2 {
        background-color: white;
    }

    button {
        background-color: orange;
        border-radius: 8px;
        border: none;
        padding: 16px;
        margin-top: 16px;

        font-size: 16px;
        color: white;
        cursor: pointer;
    }
`

export const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {

        background-color: #bbbbbb;
        border-radius: 8px;
        padding: 24px;
        height: 200px;
        width: 200px;
    }
`