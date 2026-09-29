const animesList = document.getElementById("animesList")
const animeForm = document.getElementById("animeForm")
const titleInput = document.getElementById("titleInput")
const ratingInput = document.getElementById("ratingInput")

animeForm.addEventListener('submit', (event) => {
    event.preventDefault()

    postAnime({
        "title": titleInput.value,
        "rating": ratingInput.value
    })

    animesList.innerHTML = ''
    getAnimes()
})

async function getAnimes() {
    const res = await fetch('http://localhost:3000/animes')
    const data = await res.json()

    for(let i = 0; i < data.length; i++){
        animesList.innerHTML += `
            <li>
                <h2>${data[i]["title"]}</h2>
                <p>id: ${data[i]["id"]}</p>
                <p>Rating: ${data[i]["rating"]}</p>
            </li>
        `
    }
    
}

async function getAnime(id) {
    const res = await fetch('http://localhost:3000/animes/'+id)
    const data = await res.json()

    console.log(`O ${data["title"]} tem ${data["rating"]} estrelas!`)
}

async function postAnime(anime) {
    const res = await fetch('http://localhost:3000/animes', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(anime)
    })

    console.log(res)
}

async function deleteAnime(id) {
    const res = await fetch('http://localhost:3000/animes/'+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })

    console.log(res)
}

async function pathAnime(id) {
    const res = await fetch('http://localhost:3000/animes/'+id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "title": "DBZ"
        })
    })
}

async function putAnime(id) {
    const res = await fetch('http://localhost:3000/animes/'+id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "title": "DBZ",
            "rating": 10
        })
    })
}

getAnimes()
//getAnime(1)

//for(let i=0; i<1; i++) {
  //  postAnime({
    //    "title": "Guren Lagan",
    //    "rating": 5
    //})
//}
//deleteAnime(1)
//pathAnime(3)
//putAnime("3")
