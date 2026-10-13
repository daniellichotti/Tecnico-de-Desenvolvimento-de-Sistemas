import { useState } from "react"

export function ButtonUseState() {
    const [contador, setContador] = useState(0)
    const [sinal, setSinal] = useState("Positivo")
    const [isDark, setIsDark] = useState(false)

    function aumentar(){
        setContador(contador+1)

        if(contador > 0) {
            setSinal("Positivo")
        } else {
            setSinal("Negativo")
        }
    }

    function diminuir(){
        setContador(contador-1)

        if(contador < 0) {
            setSinal("Negativo")
        } else {
            setSinal("Positivo")
        }
    }

    function zerar(){
        setContador(0)
    }

    function toggleTheme(){
        setIsDark(!isDark)
    }

    return (
        <div style={isDark ? {backgroundColor: "black", color: "white"} : {backgroundColor: "yellow", color: "black"}}>
            <h1>Contagem: {contador}</h1>
            <h2>{sinal}</h2>
            <button onClick={aumentar}>adicionar</button>
            <button onClick={diminuir}>diminuir</button>
            <button onClick={zerar}>zerar</button>
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    )
};
