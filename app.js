/*음주 가능 나이 계산
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    ///condition === true
    console.log("Please write a real positive Number");   
} else if(age < 18) {
    ///condition === false
    console.log("You are to young. your age is " + age);
} else if(age >= 18 && age <= 50) {
    console.log("You can drink");
} else if(age >= 51 && age <= 80) {
    console.log("You should exercise");
}  else if(age === 100) {
    console.log("wow you are wise")
}  else if(age > 80 ) {
    console.log("You can do whatever you want");
} */

/* title에 속한 태그 변경
const title = document.getElementById("title");
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className); */


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);