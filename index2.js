const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color; 
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();
title.addEventListener("click", handleClick);
//여기서 중요한건 handleClick()로 적는게 아닌거야!!
//()붙여주면 함수를 호출해서 시행한다는 의미인거고 이벤트 리스너에서는 이걸
//발생하는 것을 기다리는 것이라서 빼고 이름만 적어주는 거야

const age = prompt("How old are you?");

console.log(age);
if(age > 18){
    console.log("you can do it!!");
}
else{
    console.log("you have to wait for", 18 - age,"years");
    console.log("you have to wait for"+ 18 - age +"years");
}

//HTML Javascript DOM event MDN을 검색하면 이벤트 종류들 다 나와~~
//이벤트의 근원은 MDN에 다 나와있으~~네트워크 이벤트, 리소스 이벤트 ~


//WiFi연결 상태를 리슨할 수도 있네????
function handleOffline(){
    console.log("Bye bye");
}
function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);