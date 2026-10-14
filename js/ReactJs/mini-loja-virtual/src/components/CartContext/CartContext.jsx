import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }){
    const [cartCount, setCartCount] = useState(0)
    
    const increment = () => setCartCount((prev) => prev + 1)

    return(
        <CartContext.Provider value={{cartCount, increment}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)