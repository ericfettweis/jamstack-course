var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos){
    var crd = pos.coords;
    console.log("Lat:" + crd.latitude);
    console.log("Lng:" + crd.longitude);
    const url = `/.netlify/functions/weatherapi?lat=${crd.latitude}&lng=${crd.longitude}`;
    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        document.getElementById('city').textContent=data.name;
        document.getElementById('temp').textContent=`${Math.round(data.main.temp)}°C`;
    })
}

function error(err){
    console.warn(`ERROR(${err.mcode}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error);