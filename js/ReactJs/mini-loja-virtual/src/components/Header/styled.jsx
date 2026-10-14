import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100vw;
    padding: 0px 48px;

    background-color: #ffbc3f;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: white;

        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 100;
    }
`

export const ShoppingCartIconContainer = styled.a`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        color: white;
        font-size: 16px;
        background-color: #ff833c;
        
        position: absolute;
        top: 45px;
        right: 40px;

        text-align: center;

    }
`