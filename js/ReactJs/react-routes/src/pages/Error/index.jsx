import { ErrorContainer, HomeButton, ImgButtonContainer, ImgContainer, TextContainer } from "./styled";
import { BugIcon } from '@phosphor-icons/react'
import bmoImg from '../../assets/thumb-1920-1408045.jpg'
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate()

    function handleClick(){
        navigate('/home')
    }

    return (
        <ErrorContainer>
            <TextContainer>
                <div>
                    <BugIcon size={60} color="#134e4a" />
                    <h1>404</h1>
                </div>
                <p>Não encontramos a página desejada, tem certeza que está correta?</p>
            </TextContainer>
            <ImgButtonContainer>
                <ImgContainer src={bmoImg} alt="" />
                <HomeButton onClick={handleClick}>Voltar para Home</HomeButton>
            </ImgButtonContainer>
        </ErrorContainer>
    )
};
