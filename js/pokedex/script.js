const apiUrl = 'https://pokeapi.co/api/v2/'

const pokemonsContainer = document.getElementById("pokemonsContainer")

let page = 1
let limit = 20



async function getPokemons() {
    const res = await fetch(apiUrl+`pokemon/?offset=${page}&limit=${limit}`)
    const data = await res.json()

    createPokemonCard(data["results"][page]["url"])

}

async function createPokemonCard(url) {
    const res = await fetch(url)
    const data = await res.json()

    pokemonsContainer.innerHTML = `
            <div class="pokemonCard">
                <h2>${data["name"]}</h2>
                <p>id: ${data["id"]}</p>
                <img src="${data["sprites"]["front_default"]}" alt="">
            </div>
    `
}

function prevPage() {
    page -= 1
    console.log(page)
    getPokemons()
}
function nextPage() {
    console.log(page)
    page += 1
    getPokemons()
}

getPokemons()