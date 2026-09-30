const apiUrl = 'https://pokeapi.co/api/v2/'

const pokemonDiv = document.getElementById("pokemon")




async function getPokemons() {
    const res = await fetch(apiUrl+'pokemon/?offset=0&limit=20')
    const data = await res.json()

    getPokemon(data["results"][0]["url"])

    /*
    for(let i = 0; i < data.length; i++){
        animesList.innerHTML += `
        <div class="animeCard">
        <h2>${data[i]["title"]}</h2>
        <p>id: ${data[i]["id"]}</p>
        <p>Rating: ${data[i]["rating"]}</p>
        </div>
        `
    }
    */
    
}

async function getPokemon(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data["sprites"]["front_default"])
    pokemonDiv.style.backgroundImage = `url(${data["sprites"]["front_default"]})`
    pokemonDiv.style.backgroundSize = '150%'
}

getPokemons()