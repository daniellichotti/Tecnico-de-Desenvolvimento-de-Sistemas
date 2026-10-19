import { ErrorContainer, ImgContainer } from "./styled";
import { BugIcon } from '@phosphor-icons/react'
import bmoImg from '../../assets/thumb-1920-1408045.jpg'

export function Error() {
    return (
        <ErrorContainer>
            <BugIcon size={60} color="#134e4a" />
            <h1>404</h1>
            <p>Não encontramos a página desejada, tem certeza que está correta?</p>
            <ImgContainer src={bmoImg} alt="" />
        </ErrorContainer>
    )
};
