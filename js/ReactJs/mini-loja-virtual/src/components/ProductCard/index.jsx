import { useState } from 'react'
import { ImageContainer, ProductCardContainer } from './styled'

export function ProductCard({ nome, preco, categoria, imagem}) {
    const [contador, setContador] = useState(0)

    function contar(){
        setContador(contador+1)
        console.log(contador)
    }

    return (
        <ProductCardContainer>
            <ImageContainer>
                <img src={imagem} alt="" />
            </ImageContainer>
            <h1>{nome}</h1>
            <h2>${preco}</h2>
            <h2>{categoria}</h2>
            <button onClick={contar}>Adicionar ao Carrinho</button>
        </ProductCardContainer>
    )
};
