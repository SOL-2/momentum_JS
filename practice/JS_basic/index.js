// // 콘솔로그에서 확인 가능
// console.log("Im Working.  Im JS. Im Beatiful. Im worth it");


// // JS 변수
// // a = 132;
// // b = a - 5;

// // console.log(b);



// // 변수생성 과정
// // Create(생성) -> Initialize(초기화) -> Use(사용)

// // const a = 132;  // 상수 : const, 변수 : let
// // let b = a - 5;
// // a = 4;  // error 발상
// // console.log(b, a);


// // var a = 132;
// // var b = a - 5
// // a = 4;
// // console.log(b, a)

// // String
// const what =  "Hansol";
// console.log(what);


// // Boolean
// const wat = true;


// // Number
// // Float


// // Array
// const mon = "Mon"
// const tue = "Tue"
// const wed = "Wed"
// const thu = "Thu"
// const fri = "Fri"

// console.log(mon, tue, wed, thu, fri);

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek);


// // object

// const sol = 
// {
//     name : "hansol", 
//     age : "31", 
//     gender : "Female", 
//     isAwesome : true,
//     favMovie : ["Classic", "HarryPoter"], 
//     favFood : 
//     [
//         {
//             name : "Sandwich", 
//             cheese : true 
//         },
//         {
//             name : "Pork Cutlet", 
//             cheese: false 
//         }
//     ]

// }

// console.log(sol.favFood);

// // console은 Object
// // log는 function

// console.log(console)


// // 자바스크립트에서 함수 만들기

// // function sayHello()
// // {
// //     console.log("Hello!");
// // }

// // 함수는 argument(인자)를 받음

// function sayHello(name, age)
// {
//     // console.log("Hello!", name, "You gave", age, "years of age");
//     return console.log(`Hello ${name} you are ${age} years old`)  
// }

// // sayHello("Sol", 31);
// // console.log("Hi");

// const greetSol = sayHello("hansol", 21)

// console.log(greetSol)

// const calculator = 
// {
//     plus: function(a,b)
//     {
//         return a + b;
//     },

//     minus: function(a,b)
//     {
//         return a - b;

//     }


// }

// const plus = calculator.plus(5,5)
// console.log(plus)

// const minus = calculator.minus(5,2)
// console.log(minus)




// // JS에서도 html을 수정할 수 있음
// // html 영역의 함수를 활용하여 변경
// // const title = document.getElementById("title");

// // css처럼 id로도 변경 가능
// const title = document.querySelector("#title"); 
// console.log(title)

// title.innerHTML = "Hi! from JavaScript";
// // title.style.color = 'red';
// document.title = 'I own you now';
// console.dir(title);

// // 이벤트를 발생시키기 위해 사용함
// // click, resize, submit, input change road

// // function handleResize()
// // {
// //     console.log("I have been resized")
// // }

// // 이렇게 쓰면 handleResize()가 호출하지 않았는데도 바로 호출됨(자동 호출)
// // window.addEventListener("resize", handleResize())


// function handleClick(event)
// {
//     title.style.color = 'blue';
   
// }

// title.addEventListener("click", handleClick);

// if("10" === 10)
// {
//     console.log('hi');
// }
// else if("10"==="10");
// {
//     console.log('lalala');
// }

// // 둘다 참이면 yes, 둘중에 하나라도 거짓이면 no
// if(20 > 5 && "sol" === "sol")
// {
//     console.log('yes');
// }

// else
// {
//     console.log("no");
// }

// // prompt는 사용하지 않을 예정
// // const age = prompt("How old are you");

// // // console.log(age)

// // if(age >= 18 && age <=21)
// // {
// //     console.log('You can drink but you should not')
// // }
// // else if(age > 21)
// // {
// //     console.log('go ahead')
// // }



const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e67e22";


// 글꼴 컬러 변경
// function handleClick()
// {
//     const currentCOLOR = title.style.color;
//     // console.log(currenCOLOR);

//     if (currentCOLOR === BASE_COLOR)
//     {
//         title.style.color = OTHER_COLOR;
//     }

//     else
//     {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init()
// {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

// // mouseenter : 마우스 올려둘때마다

// function handleOffline()
// {
//     console.log("bye");
// }

// function handleOnline()
// {
//     console.log("Welcome back")
// }

// // 와이파이 껐다 켰다 할 떄
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);



const CLICKED_CLASS = "clicked";

// function handleClick()
// {
//     // const currentClass = title.className;
    

//     // if(currentClass !== CLICKED_CLASS)
//     // {
//     //     title.classList.add(CLICKED_CLASS);
//     // }

//     // else
//     // {
//     //     title.classList.remove(CLICKED_CLASS);
//     // }


//     // clicked btn으로 변경
//     // const hasClass = title.classList.contains(CLICKED_CLASS);

//     // if (hasClass)
//     // {
//     //     title.classList.remove(CLICKED_CLASS);
        
//     // }

//     // else
//     // {
//     //     title.classList.add(CLICKED_CLASS);
//     // }
// }


// -> 해당 과정을 toggle이란 함수로 대체할 수 있음
// -> 클래스가 있는지 체크해서 있으면 add, 없으면 remove

function handleClick()
{
    title.classList.toggle(CLICKED_CLASS);
}

function init()
{
    title.addEventListener("click", handleClick);
}
init();




