import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 0px 120px;

    height: 78px;
    width: 100vw;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 197px;
        height: 36px;
    }
`

export const DeliverContainer = styled.div`
    width: 566px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        font-size: 14px;
        font-weight: bold;
    }

    p {
        margin-right: 4px;
        font-size: 14px;
        font-weight: 100;
    }

    img {
        width: 14px;
        height: 25px;
        margin-left: 12px;
        margin-right: 9px;
    }
`

export const SearchFoodContainer = styled.div`
    width: 124px;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    input {
        height: 18px;
        width: 124px;

        outline: none;
        border: none;

        font-size: 14px;
        font-weight: bold;
    }

    button {
        width: 118px;
        height: 46px;
        padding: 14px 24px;

        background-color: white;
        border: none;

        border-radius: 8px;

        box-shadow: 0px 5px 10px rgb(255, 174, 0, 0.25);

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        cursor: pointer;

        color: #FFAE00;

        font-size: 14px;
        font-weight: bold;

        img {
            height: 18px;
            width: 16px;
        }
    }
`