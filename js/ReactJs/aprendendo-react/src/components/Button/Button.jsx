import "./Button.css"

function apertou(){
    alert("apertou!")
}

export function Button({ label }) {
    return (
        <button onClick={apertou} id="button-customization">{label}</button>
    )
};
