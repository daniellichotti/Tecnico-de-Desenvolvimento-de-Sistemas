import { ProductCardContainer } from './styled'

export function ProductCard({ nome, preco, categoria}) {
    return (
        <ProductCardContainer>
            <h1>{nome}</h1>
            <h2>{preco}</h2>
            <h2>{categoria}</h2>
            <button>Adicionar ao Carrinho</button>
        </ProductCardContainer>
    )
};
