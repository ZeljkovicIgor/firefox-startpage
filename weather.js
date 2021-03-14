import { isUpdateReady } from "./utils.js";

const WEATHERBIT_API_KEY = "0f031b64cc9d4a239f3f23d562456e91";
const BASE_URL = "http://api.weatherbit.io/v2.0/current";
const LAT_LONG = "?lat=45.267136&lon=19.833549"


function setWeatherDiv(temperature) {
    var weatherDiv = document.getElementsByClassName('weather')[0];
    const degreeSymbol = "&#176";
    
    if (temperature !== null) {
        weatherDiv.innerHTML = temperature + degreeSymbol + "C";
    }
}

function getWeather() {
    var weather = JSON.parse(localStorage.getItem('weather'));

    if ( isUpdateReady('lastWeatherUpdate', new Date().getHours()) ) {
        console.log('Weather is updating...');
    
        var url = BASE_URL + LAT_LONG + '&key=' + WEATHERBIT_API_KEY;
    
        fetch(url)
        .then(response => response.json())
        .then(({data}) => {
            setWeatherDiv(Math.floor(data[0].temp))
    
            localStorage.setItem('weather', JSON.stringify(data[0]));
        })
    }

    return weather;
}

export { getWeather, setWeatherDiv }
