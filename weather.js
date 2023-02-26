const COORDS_LS = 'coords';

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
   saveCoords(positionObj)
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
        //функция получения погоды
    }
}





function init() {
  getCoords();
}

init();