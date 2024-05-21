var menu = document.getElementById("menu")
var nav = document.getElementById("nav")
var titulo = document.getElementById("titulo")

menu.addEventListener('click', click)

function click() {
    menu.classList.toggle("toggle")
    nav.classList.toggle("toggle__nav")
    titulo.classList.toggle("toggle__titulo")
}