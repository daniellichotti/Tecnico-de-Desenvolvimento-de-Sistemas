import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

export function App() {

  return (
    <>
      <Header title="Hamburgeria"/>

      <Main title="Extra! Extra!" subtitle="Pedro não foi embora e esta preso na chuva!" content="Finalmente temos o pedro entre nós no segundo horario"/>
      <Main title="Alerta da Defesa Civil" subtitle="Vai chover bagarai!" content="Prepare a capa de chuva!"/>
      <Footer/>
    </>
  )
}
