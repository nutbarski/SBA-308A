// // make sure index.js is actually linked
// alert("Javscript linked!");

const apiKey="c9b0ff5acfd823f9cee794522755e037"; //open weather api key
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){ //Req 3, "Make use of Promises and async/await syntax as appropriate."
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); //Req 1, "Use fetch to communicate with external API + use data to populate content"

//shows error if city name isnt valid
if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{
    var data = await response.json();

    //update data fields
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mi/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}


}

// Req 2, "Create user interaction with the API through a search feature" -- this submits what the user typed into the search entry and pulls relevant data
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();