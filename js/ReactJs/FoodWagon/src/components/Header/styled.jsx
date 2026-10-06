import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 0px 220px;

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
        font-size: 18px;
        font-weight: bold;
    }

    img {
        width: 14px;
        height: 25px;
        margin-left: 12px;
        margin-right: 9px;
    }
`