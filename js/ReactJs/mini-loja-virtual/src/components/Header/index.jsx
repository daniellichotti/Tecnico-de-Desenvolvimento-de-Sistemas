import { HeaderContainer, ShoppingCartIconContainer } from "./styled";
import { ShoppingCartSimpleIcon } from '@phosphor-icons/react'

export function Header() {
    return (
        <HeaderContainer>
            <h1>Mini Lojinha Do Senai</h1>
            <ShoppingCartIconContainer>
                <ShoppingCartSimpleIcon size={30} color="#ffff" />
                <span>1</span>
            </ShoppingCartIconContainer>
        </HeaderContainer>
    )
};
