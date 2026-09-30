const apiUrl = 'https://pokeapi.co/api/v2/'

const pokemonsContainer = document.getElementById("pokemonsContainer")

let page = 40
let limit = 20



async function getPokemons() {
    const res = await fetch(apiUrl+`pokemon/?offset=${page}&limit=${limit}`)
    const data = await res.json()

    for(let i = 0; i < data["results"].length; i++){
        getPokemon(data["results"][i]["url"])
    }
}

async function getPokemon(url) {
    const res = await fetch(url)
    const data = await res.json()

    const newPokemon = document.createElement("div")
    newPokemon.classList.add("pokemon")
    pokemonsContainer.appendChild(newPokemon)

    console.log(data["sprites"]["front_default"])
    newPokemon.style.backgroundImage = `url(${data["sprites"]["front_default"]})`
    //newPokemon.style.backgroundSize = '150%'
}

getPokemons()