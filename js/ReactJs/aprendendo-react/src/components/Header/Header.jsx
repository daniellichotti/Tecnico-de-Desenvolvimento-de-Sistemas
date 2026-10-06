import './Header.css'

export function Header({ title }) {
    return (
        <div id='header-container'>
            <h1>{title}</h1>
            <a href="#">Clique em mim!</a>
        </div>
    )
}