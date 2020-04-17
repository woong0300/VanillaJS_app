//HTML CSS JavaScript에서 계속 똑같은 class name을 쓰고 싶어


const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    //13.11.2이렇게 뜨는게 불편해서 01.03.04로 표기되게 하는 부분~~
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;

}

function init(){
    getTime();
    setInterval(getTime, 1000); //간격은 밀리세컨드야 1000이니까 1초마다
}

init();

//setInterval(function, 실행간격)

