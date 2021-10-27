function skywalker() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.responseText);
                let firstname = document.getElementById("firstname");
                let lastname = document.getElementById("lastname");
                let hair = document.getElementById("hair");
                let eyes = document.getElementById("eyes");
                firstname.innerText = "Prénom: "  + response.name[0] + response.name[1] + response.name[2] + response.name[3];
                lastname.innerText = "Nom: " + response.name[5] + response.name[6] + response.name[7] + response.name[8] + response.name[9]
                + response.name[10] + response.name[11] + response.name[12] + response.name[13];
                hair.innerText = "couleur des cheveux: " + response.hair_color;
                eyes.innerText = "couleur des yeux: " + response.eye_color;
            }else{

            }
        }
    }
    httpRequest.open("GET", "https://swapi.dev/api/people/1/");
    httpRequest.send();
   
}

    