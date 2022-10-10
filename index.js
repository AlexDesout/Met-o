// const ville = "Castres"



function getMeteo(event){
    event.preventDefault();
    // console.log("test")
    let ville = document.getElementById("ville").value;
    let textHTML = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville},France&units=metric&lang=fr&appid=1c759b526e6d29cb90e1258a8add75c2` // l’url de la ressource de l’API
   

    let fetchOptions = {method : 'GET'} // les options de fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
    .then( (response) => { return response.json() })
    .then( (dataJSON) => { // dataJSON = les données renvoyées
        console.log(dataJSON)// ici le traitement des données
        let met = dataJSON;
        

        textHTML+= `Ville : ${met.name} <br>
        Temperature : ${met.main.temp} <br>
        Pression :  ${met.main.pressure} <br>
        Humidité :  ${met.main.humidity} <br>
        Vitesse du vent : ${met.wind.speed}<br>
        Description : ${met.weather[0].description} <br>`;
        // console.log(met.name);
        document.getElementById("info").innerHTML = textHTML;
        const image = document.createElement("img");
        image.src= `http://openweathermap.org/img/wn/${met.weather[0].icon}@2x.png`
        document.getElementById("info").appendChild(image);
    
    
    })
    .catch( (error) => {
        console.log(error) // gestion des erreurs
    })
    

    
    
}


document.getElementById("envoi").addEventListener("submit", getMeteo);

// getMeteo();