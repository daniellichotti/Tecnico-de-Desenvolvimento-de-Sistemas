import { ImageContainer, ProductCardContainer } from './styled'
import { useCart } from '../CartContext/CartContext'

export function ProductCard({ nome, preco, categoria, imagem}) {
    const { increment } = useCart()

    

    return (
        <ProductCardContainer>
            <ImageContainer>
                <img src={imagem} alt="" />
            </ImageContainer>
            <h1>{nome}</h1>
            <h2>${preco}</h2>
            <h2>{categoria}</h2>
            <button onClick={increment}>Adicionar ao Carrinho</button>
        </ProductCardContainer>
    )
};
