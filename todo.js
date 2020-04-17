const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//greeting에서랑 여기서 input이 이름이 겹치면 곤란
//자바스크립트 모듈을 isolation하는 거는 유튜브 클론코딩강의에서 볼 수 있으


//filter랑 forEach를 잘 기억하자~!!!!

const TODOS_LS = 'toDos'

let toDos = [];

/* filter를 통해 모든 아이템들에게 실행된다.
function filterFn(toDo){
    //return toDo.id === 1;  요렇게 해주면 id가 1인 넘만 리턴해
}
*/

function deleteToDo(event){
    //console.dir(event.target); father 등 다른 property들을 볼 수 있으
    const btn = event.target
    const li = btn.parentNode;
    toDoList.removeChild(li); //여기까지만 하면 화면에서만 없어진거
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    //console.log(cleanToDos);
    //filter는 array의 모든 아이템을 통해 함수를 살행하고 그리고
    //ture인 아이템들만 가지고 새로운 array를 만들어낸다.
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//한가지 주의할 점!! 로컬스토리지에는 String이 저장되는거야!!
//로컬스트리지에 저장될 때 object라고 뜨는 이유가 그거야.

//toDos array안에 toDosObj 오브젝트를 넣는거제~~

//자바스크립트를 통해 원하는 document를 생성하는 함수가 처음으로 쓰인다~
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

//JSON은 자바스크립트 오브젝트 노테이션이여
//데이터 전달할 시 자바스크립트가 다룰 수 있도록 오브젝트로 바꿔주는겨

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    console.log(loadedToDos);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);  //위에랑 밑에 로그의 차이를 봐바~
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();