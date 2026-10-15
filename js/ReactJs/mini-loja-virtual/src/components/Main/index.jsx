import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { MainContainer } from "./styled";
import {ClockLoader, RingLoader} from 'react-spinners'

export function Main() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()

                setProductList(data)
            } catch (error) {
                console.log('Erro ao buscar os produtos: ', error)
            } finally {
                await new Promise((res) => setTimeout(res, 4000))
                setLoading(false)
            }

        }
        
        fetchProducts()
    }, [])

    if(loading) {
        return (
            <MainContainer style={{alignItems: "center"}}>
                <ClockLoader color="#ff8c00" loading={loading} size={50}/>
            </MainContainer>
        )
    }
    
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
