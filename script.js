const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const temp = document.getElementById("temp");
const weatherImg = document.getElementById("weather-img");
const city = document.getElementById("city");
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const updateData=(data)=>{
    city.textContent = data.name;
    temp.textContent = String(Math.round(data.main.temp)) + "°C";
    weatherImg.textContent = "Imagine " + String(data.weather[0].description) + " symbol";
    humidity.textContent = String(data.main.humidity) + "%";
    wind.textContent = String(Math.round(data.wind.speed)) + "km/h"
}



const getData = async()=>{
    const cityName = searchBox.value.trim();
    if(!cityName){
        return;
    }
    const apiUrl = `${baseUrl}${cityName}&appid=${apiKey}`
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        console.log(data);
        updateData(data);
    }catch(error){
        console.log("fetch failed");
    }

}


searchBtn.addEventListener("click",getData);

