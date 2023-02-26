const COORDS_LS = 'coords';
const API_KEY = 'eca117222ba3ff3a497bad480606749f';
const weatherContainer = document.querySelector('.js-weather')

function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then(function(response) {
     return response.json();
  }).then(function(json) {
    const temperature = json.main.temp;
    const temperatureFix = temperature.toFixed(1);
    const place = json.name;
    weatherContainer.innerText = `${temperatureFix} @ ${place}`;
  })
}

function saveCoords(positionObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(positionObj)); 
}

function geoSuccessHandler(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const positionObj = {
    latitude,
    longitude,
   }
   saveCoords(positionObj);
   getWeather(latitude, longitude)
}

function geoErrorHandler() {
   throw new Error("Ошбика определения геопозиции")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler)
}

function getCoords() {
    const coords = localStorage.getItem(COORDS_LS);
    if (coords === null) {
        askForCoords();
    } else {
        const loadedCoords = JSON.parse(coords);
        getWeather(loadedCoords.latitude, loadedCoords.longitude)
    }
}





function init() {
  getCoords();
}

init();