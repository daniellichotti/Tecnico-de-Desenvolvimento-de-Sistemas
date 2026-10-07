import { HeaderContainer, HeaderText, ListButtonImg, MenuButton } from "./styled";
import List from '../../assets/list.svg'

export function Header(){
    return (
        <HeaderContainer>
            <div/>
            <HeaderText>Lanchone Do Senai</HeaderText>
            <MenuButton>
                <ListButtonImg src={List} alt="" />
            </MenuButton>
        </HeaderContainer>
    )
}