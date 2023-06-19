let ip1 = document.querySelector("#ip1");
let ip2 = document.querySelector("#ip2");
let add = document.querySelector("#Addition");
let sub = document.querySelector("#Subtraction");
let mul = document.querySelector("#Multiplication");
let div = document.querySelector("#Division");
let ans = document.querySelector("#answer");
let clr = document.querySelector("#clear");


let a = Number(ip1.value);
let b = Number(ip2.value);

add.addEventListener("click", function(){
    console.log("OK");
    ans.value=Number(ip1.value)+Number(ip2.value);
})
sub.addEventListener("click", function(){
    console.log("OK");
    ans.value=Number(ip1.value)-Number(ip2.value);
})
mul.addEventListener("click", function(){
    console.log("OK");
    ans.value=Number(ip1.value)*Number(ip2.value);
})
div.addEventListener("click", function(){
    console.log("OK");
    ans.value=Number(ip1.value)/Number(ip2.value);
})