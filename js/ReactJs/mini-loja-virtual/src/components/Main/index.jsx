import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { MainContainer } from "./styled";
import { useCart } from "../CartContext/CartContext";

export function Main() {
    const [productList, setProductList] = useState([])
    const { cartCount } = useCart()

    console.log(cartCount)

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProductList(data)

        }
        
        fetchProducts()
    }, [])
    
    return (
        <MainContainer>
            {productList.map((product) => (
                <ProductCard
                key={product.id}
                nome={product.title}
                preco={product.price}
                categoria={product.category}
                imagem={product.image}
                />
            ))
            }
            </MainContainer>
    )
};
