import styled from "styled-components";

export const MainContainer = styled.main`
    min-height: calc(100vh - 80px);
    width: 100vw;

    padding: 24px;

    background-color: #e8e8e3;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;
`

export const MealCard = styled.div`
    height: 200px;
    width: 150px;
    padding: 8px;

    text-decoration: none;

    border-radius: 8px;

    background-color: rgb(255, 255, 255, 0.4);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    opacity: 80%;

    h2 {
        color: #0c0c09;
        font-size: 18px;
        font-weight: bold;

        background-color: #7c7c67;
    }
    p {
        color: #0c0c09;
        font-size: 12px;
        font-weight: bold;

        background-color: #7c7c67;
    }
`