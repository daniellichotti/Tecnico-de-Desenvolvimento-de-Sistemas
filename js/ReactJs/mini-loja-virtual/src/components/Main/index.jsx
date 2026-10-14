import { ProductCard } from "../ProductCard";
import { MainContainer } from "./styled";

export function Main() {
    return (
        <MainContainer>
            {
                Array.from({ length: 20 }).map((_, index) => (
                <ProductCard 
                key={index} 
                nome="Arroz" 
                preco="89.90" 
                categoria="Alimentos" 
                />
            ))}
        </MainContainer>
    )
};
