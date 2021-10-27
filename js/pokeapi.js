function getPokemons() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
               let response = JSON.parse(httpRequest.responseText);
               let ul = document.getElementById("pokelist");
               for(let pokemon of response.results) {
                   ul.innerHTML += `<li>${pokemon.name}</li>`
               }
            }else {

            }
        }
    }
    httpRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/");
    httpRequest.send();
}