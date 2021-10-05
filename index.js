// 1. ways to print in JavaScript
// Javscript console API
// console.log("Hello world");
// document.write("testtest");

//2. JavaScript console API
// console.log("Hello world");
// console.warn("thisis warning");
// console.error("thisis warning");
// console.assert(4 == 4);

//3. JS variables
// What are variables? - Containers to store data variables

// var number1 = 34;
// var number2 = 56;

// console.log(number1 + number2);

// 4. Datatypes in JS
// String
var str = "this is a string";
var str2 = "this is also a string";

// Numbers
var num1 = 455;
var num2 = 45.45;

// Objects
var marks = {
  chintan: 45,
  chintanOne: 54,
  chintanThree: 87.45,
};
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

var und; // undefined
// console.log(und);

var n = null; // null
//console.log(n);

/* 
At a very high level there are two types of Data types:
1. Primitive data types: undefined, null, numbers, string, Boolean, Symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "string", 4, 5];
//console.log(arr);

// Operators in JS
// Arithmatic operators
var x = 1;
var y = 2;
// console.log("the value of x + y is", x + y);
// console.log("the value of x - y is", x - y);
// console.log("the value of x * y is", x * y);
// console.log("the value of x / y is", x / y);

// Assignemnt operators

var c = y;
c += 2; // c = c + 2;
c -= 1; // c = c - 1;
c *= 2; // c = c * 2;
c /= 2; // c = c / 2;

// Comparison operators
var d = 4;
var e = 5;

// console.log(d == e);
// console.log(d >= e);
// console.log(d <= e);
// console.log(d > e);
// console.log(d < e);

// Logical Operators
// logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
// console.log(!false);
// console.log(!true);

// function in JS

function avg(a, b) {
  c = a * b;
  if (c >= 100) {
    c = a * b - (a * b) / 10;
    return "Yay !! you got 10% discount";
  } else {
    return c;
  }
}
// avg(5, 2);
// DRY = Do not repeat yourself
c1 = avg(5, 2);
c2 = avg(14, 16);
c3 = avg(14, 20);
c4 = avg(10, 54);
c5 = avg(5, 15);

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);
// console.log(c5);

// Conditionals in JavaScript

var age = 28;
// single if statement
// if (age > 10) {
//   console.log("adult");
// }

// if - else statement
// if (age > 10) {
//   console.log("adult");
// } else {
//   console.log("kid");
// }

// if else - ladder
// age = 10;
// if (age > 25) {
//   console.log("can drink");
// } else if (age > 18) {
//   console.log("able to drive");
// } else if (age > 12) {
//   console.log("teenage - can not drink");
// } else {
//   console.log("you are a kid");
// }
// console.log("end of ladder");

// var arr = [1, 2, 3, 4, 5, 6, 7];

// for (i = 0; i < arr.length; i++) {
//   if (i == 4) {
//     //break;
//     continue;
//   }
//   console.log(arr[i]);
// }

var chintan = ["chintan", "IT", "JS", "react", "html", "css"];
// console.log(chintan);

// for (i = 0; i < arr.length; i++) {
//   if (i == 4) {
//     // break;
//     continue;
//   }
//   console.log(chintan[i]);
// }
// arr.forEach(function (element) {
//   console.log(element);
// });
// console.log("test");
// let j = 0;
// // while (j < arr.length) {
// //   console.log(arr[j]);
// //   j++;
// // }
// console.log("test");

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

let myArray = ["Chintan", "react", null, 25, true];
// Array methods
// myArray.pop();
// myArray.push("hasti");
// myArray.shift();
// const newArr = myArray.unshift("suthar");
// console.log(newArr);
// console.log(myArray);

// String methods in JS
let myString = "Chintan is my name, living in Sydney";
// console.log(myString.length);
// console.log(myString.indexOf("name"));
// console.log(myString.slice(0, 10));
d = myString.replace("Sydney", "Brisbane");
// console.log(d);

let myDate = new Date();
// console.log(myDate.getDay());

// DOM manipulation

let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement("p");
// createdElement.innerText = "this is test and extra tag";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement("b");
// createdElement2.innerText = "this is test and extra bold tag";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ---> remove an element
// Selecting using Query

// sel = document.querySelectorAll(".container");
// console.log(sel);

// Events in JavaScript
// function clicked() {
//   console.log("the button was clicked");
// }
// window.onload = function () {
//   console.log("the document was loaded");
// };
// firstContainer.addEventListener("click", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "content changed on this container";
//   console.log("clicked on container");
// });

// firstContainer.addEventListener("mouseover", function () {
//   console.log("mouse on container");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("mouse out of container");
// });
// let testVar = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function () {
//   document.querySelectorAll(".container")[1].innerHTML = testVar;
//   console.log("mouseup when clicked on container");
// });
// firstContainer.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "content changed on this container";
//   console.log("mousedown when clicked on container");
// });

// arrow functoins
sum = (a, b) => {
  return a + b;
};
// Set timeout and setinterval
chintanTime = () => {
  //document.querySelectorAll(".container")[1].innerHTML =
  "content changed on this container after 2 sec";
  //console.log("this is log after 2 sec");
};
//setTimeout(chintanTime, 2000);
//clr = setInterval(chintanTime, 2000);
// use clearTimeout/clearInterval to cancel setInterval/setTimeout

// // JavaScript localstorage
// localStorage.setItem('name', 'chintan')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem("name");
// localStorage.clear();
// // JSON
// //  JavaScript Object Notation
// // JSON supports only double quotes
// // useful to transport data
// obj = { name: "chintan", age: 20 };
// jso = JSON.stringify(obj);
// console.log(jso);
// parsed = JSON.parse(`{"name":"chintan","age":20, "a": {"this": "that"}}`);
// console.log(parsed);
