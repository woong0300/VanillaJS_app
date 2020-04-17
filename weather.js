const weather = document.querySelector(".js-weather");

const API_KEY = "72745cb5ccec38c3f977fec7f13c7753";
const COORDS = "coords";
//API를 통해서 처음으로 기능을 쓰는구만~!
//request를 보내고 데이터를 가져올 수 있으!!
//이게 바로 자바스크립트의 강점이제~!!!
function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}
//fetch와 then구문들 잘 봐야겠는데???? 쪼까 거시기하구만

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //자바 스크립트 팁: 객체의 key와 값이 같을 경우에는 
    //latitude : latitute -> latitute하나로 적어줄 수 있으
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Geo Error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init();