import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100vw;
    padding: 0px 40px;

    box-shadow: 1px 2px 16px #e2e2e2;

    background-color: #f0fdfa;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--teal-700);

    button {
        cursor: pointer;
        background-color: transparent;
        padding: 8px;
        border: none;
    }
`