import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100vw;

    padding: 0px 24px;

    background-color: #7c7c67;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderText = styled.h1`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 40px;
    font-weight: 100;
    word-spacing: 8px;

    color: #d8d8d0;
`

export const MenuButton = styled.button`
    width: 30px;
    height: 30px;

    border-radius: 8px;
    border: none;

    cursor: pointer;

    background-color: #d8d8d0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f4f4f0;
    }
`

export const ListButtonImg = styled.img`
    height: 16px;
    width: 16px;
`