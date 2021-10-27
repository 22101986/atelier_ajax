// instanciation de l'objet pour gerer les requêts et reponsese
let httpRequest = new XMLHttpRequest();
let button = document.getElementById("button")
// code déclenché quand une reponse arrive du serveur 
httpRequest.onreadystatechange = function() {
    button.onclick = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText)
            let p = document.getElementById("content");
            p.innerText = data.firstname + " " + data.lastname;
        } else {
            console.log("une erreur est survenue")
    }} else {
        console.log("chargement en cours");
    }}
};
// envoi de le requête au serveur 
httpRequest.open('GET', 'data/exemple.json');
httpRequest.send();

