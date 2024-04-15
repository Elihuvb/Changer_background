const body = document.querySelector(".body-container");
let btn = document.createElement("BUTTON");

btn.setAttribute("tyoe", "button");


let numbers = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

body.appendChild(btn);

btn.onclick = () =>{
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();
    body.style.backgroundColor = color;
    btn.innerHTML = color;
}