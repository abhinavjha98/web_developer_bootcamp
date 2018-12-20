// var tag = document.getElementByid("highlight");
// console.log(tag);

// var tags = document.getElementsByClassName("bolded");
// console.log(tags[0]);

// var tags = document.getElementsByTagName("li");
// console.log(tags[0]);

// var tagss = document.querySelector('#highlight');
// console.log(tagss);

// var h1 = document.querySelector("h1");

// h1.addEventListener("click",function(){
// alert("hello")})

var button = document.querySelector("button")
var para = document.querySelector("h1")

button.addEventListener("click",change);

function change(){
para.textContent = "Hello magic";
}