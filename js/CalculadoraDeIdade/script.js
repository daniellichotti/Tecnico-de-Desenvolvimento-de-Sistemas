function calcularIdade() {
    const inputName = document.getElementById('name').value
    const inputBirthDate = document.getElementById('birthDate').value
    const resultado = document.getElementById('resultado')
    const resultadoPodeDirigir = document.getElementById('resultadoPodeDirigir')

    if(!inputBirthDate) {
        resultado.textContent = 'Por favor, insira uma data válida!'
        resultado.style.backgroundColor = 'red'
    }
    else if(!inputName) {
        resultado.textContent = 'Por favor, insira nome!'
        resultado.style.backgroundColor = 'red'
    }

    const [year, month, day] = inputBirthDate.split('-')
    const birthDateFormated = new Date(year, month - 1, day)
    const today = new Date()

    if (birthDateFormated.getFullYear() > today.getFullYear()) {
        resultado.textContent = 'Por favor, insira uma data válida!'
        resultado.style.backgroundColor = 'red'
    } else {
        let idade = today.getFullYear() - birthDateFormated.getFullYear()

        resultado.textContent = `Você tem ${idade} anos!`
        resultado.style.backgroundColor = 'green'
    }
}