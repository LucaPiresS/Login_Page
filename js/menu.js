var menu = document.getElementById("menu")
var nav = document.getElementById("nav")
var sol = document.getElementById("sol")
var lua = document.getElementById("lua")
var titulo = document.getElementById("titulo")

menu.addEventListener('click', click)

function click() {
    menu.classList.toggle("toggle")
    nav.classList.toggle("toggle__nav")
    sol.classList.toggle("toggle__icon")
    lua.classList.toggle("toggle__icon")
    titulo.classList.toggle("toggle__titulo")
}