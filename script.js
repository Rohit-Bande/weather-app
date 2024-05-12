
const API_key = "5fbdb912fc0a56aae2c051c8fe269f34";
const API_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(API_url + city + `&appid=${API_key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        var data = await response.json();

        // console.log(data);
    
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
         if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png";
         }
         else if(data.weather[0].main == 'clear'){
            weatherIcon.src = "images/clear.png";
         }
         else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png';
         }
         else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'image/drizzle.png';
         }
         else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "image/mist.png";
         }
    
         document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display = "none";
    }
   console.log(data);
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


