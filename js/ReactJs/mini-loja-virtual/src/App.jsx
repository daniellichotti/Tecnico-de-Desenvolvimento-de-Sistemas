import './App.css'
import { CartProvider } from './components/CartContext/CartContext'
import { Header } from './components/Header'
import { Main } from './components/Main'

export function App() {
  
  return (
    <CartProvider>
      <Header/>
      <Main/>
    </CartProvider>
  )
}
