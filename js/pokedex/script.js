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
                <h2>${data["name"].charAt(0).toUpperCase() + data["name"].slice(1)}</h2>
                <p>id: ${data["id"]}</p>
                <img src="${data["sprites"]["front_default"]}" alt="">
            </div>
    `
}

async function evolvePokemonAnimation() {
    
}

function prevPage() {
    page -= 1
    if(page <= 0) {
        page = 1
    }
    console.log(page)
    getPokemons()
}
function nextPage() {
    console.log(page)
    if(page>=limit-1) {
        limit += 20
    }
    page += 1
    getPokemons()
}

getPokemons()