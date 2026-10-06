import { Button } from '../Button/Button'
import './Main.css'

export function Main({title, subtitle, content}) {
    return (
        <div id="main-container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
            <div>
                <Button label="Ok"/>
                <Button label="Cancelar"/>
            </div>
        </div>
    )
};
