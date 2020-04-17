//자바스크립트가 오류가 나도 HTML이랑 CSS는 문제가 없어~
// 자바스크립트 파일은 항상 Body의 밑에 있어야 됨
// js file should placa at bottom of body tag
const a = 221;
let b = a-5;
//const name = "Hee woong";  //큰 따옴표로 적어주면 String
const what = false;

// let 과 const var의 차이를 봅시다.
//let's see the differences between let const and var
//첫 사용은 const로 필요하기 전까지는 let이나 var을 쓰지 않도록!!
/*
var의 문제점
3년전에는 var만 쓸 수 있었는데 이제는 let을 쓸 수 있구만
*/
var input = prompt('이름을 입력하시오.');
discriminate(input);
showDaysOfWeek();
//Object로 데이터를 다루는 방법
//각 object key값들 간에 , comma를 찍어주는게 핵심!!!!
//String을 ""로 묶어주는 것도 꼭 지키고!! 알제???
const myInfo = {
    name:"heewoong", 
    age:29,
    gender: "male", 
    livingPlace:"Seoul",
    favMovies:["Star wars", "Ford v Ferrari", "Old boy"],
    favFood: [  //object안에 object로 된 array를 만들수도 있으
        {
            name: "kimchi",
            fatty:false
        },
        {
            name:"Big mac",
            fatty:true
        }
    ]
}
//DB에서 가져온 데이터 리스트라면 array가 편하고
//데이터를 합쳐야 된다면 object가 편할 수 있제
//object를 array안에 넣을 수도 있고

//이게 시사하는 바
//const인 object의 내부값을 바꿀수가 있는거네???
console.log(myInfo.gender);
myInfo.gender = "female";
console.log(myInfo.gender);
console.log(myInfo);

console.log(a, b);
console.log(name);

//요런 식으로도 파악할 수 있으~~
console.log(myInfo.favFood[0].fatty);
console.log(myInfo.favFood[0].name);

function discriminate(String){
    if(String === "name"){
        console.log(true);
    }
    else{
        console.log(false);
    }
}


function showDaysOfWeek(){
    const dayOfWeek = ["mon", "tue", "wed","thu","fri"];
    var i = 0;
    while(i < dayOfWeek.length){
        console.log(dayOfWeek[i]);
        i++;
        console.log(dayOfWeek);
    }
}


//          #2 Practice - 2.1 My First Function
console.log(console);
//console객체 안에 있는 함수들? key들이 싹다 나오고 있네 ㅋㅋㅋㅋ
console.log('Greetings Nicolas');
console.log('Greetings Hun');
console.log('Greetings Liyn');
console.log('Greetings hyun');

//argumnet(인자)를 주고 사용하도록 짜야지??
//function이 argument를 받아서 활용할 수 있도록 준비시켜야지??
//parameter, argument같은 말
function Greet(word){
    console.log(word);
}

const dayOfWeek = ["mon", "tue", "wed","thu","fri"];
for(i = 0; i < 5;i++){
    Greet(dayOfWeek[i]);
}

function sayHi(name, age){
    console.log("Hi!,",name, ", you have", age, "years of age.");
}

sayHi("Nicolas", 15);
//자바스크립트에서는 '' "" 모두 스트링이여 ``이거는???? 숫자 1옆에 백틱!!!

//          #2 Practice - 2.2 More Function funs
// ``백틱 과 '' 작은 따옴표  "" 큰 따옴표의 차이점
//``백틱을 사용한 String의 새로운 사용방법
function sayHello(name, age){
    console.log("Hello!,"+name+ ", you have"+ age+ "years of age.");
    console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}
//return 값과 같은거야 sayHello의 Return 값이 되버리는 거야
//걍 console.log를 찍어버리면 undefined가 찍히지만 리턴으로 하면 그게 안생겨
const greetNicolas = sayHello("Nicolas", 15);
console.log(greetNicolas);
sayHello("Nicolas", 15);

//          직접 console.log처럼 object안에 함수를 만들어보자
const calculator = {
    plus: function(a, b){
        return a + b;
    }

}

const plus = calculator.plus(5, 5);
console.log(plus);
//마치 console.log처럼 되버렸구만??!!