import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 936px;
    width: 100vw;

    background-color: #212121;
    color: white;

    padding: 99px 221px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`

export const CitiesContainer = styled.div`
    height: 236px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`

export const TopCities = styled.div`
    height: 154px;
    width: 104px;

    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
        color: #F5F5F5;
        font-size: 14px;
        font-weight: 100;
    }
`

export const Infos = styled.div`
    height: 185px;

    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
        color: #F5F5F5;
        font-size: 14px;
        font-weight: 100;
    }
`

export const InfoContainer = styled.div`
    height: 254px;
    width: 100%;

    border-top: 2px solid #424242;
    border-bottom: 2px solid #424242;

    display: flex;
    gap: 116.5px;
`

export const RightsContainer = styled.div`
    height: 53px;
    width: 100%;
`

