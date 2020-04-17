const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//application칸에서 local Strorage에 여러 변수값들이 저장딘다.


const User_LS = "currentUser",
    SHOWING_CN = "showing";

//event는 발생하면 root에서 일어나고 form에서 일어나고 
//다른 모든 것들이 form을 제출하는 event가 발생하면
//documnet까지 쭉쭉 올라가면서 따른 데로 보내고 싶어해
//default가 새로고침이 되면서 변화를 전송하는 거고 prevent가 이걸 막아줘

function saveName(text){
    localStorage.setItem(User_LS, text);
}

function handleSubmit(event){
    event.preventDefault();  //이렇게 해주면 enter눌러도 새로고침이 안되네??
    const currentValue = input.value;
    console.log(input.value);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();