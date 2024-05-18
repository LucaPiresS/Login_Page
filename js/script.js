var sol = document.getElementById("sol")
var lua = document.getElementById("lua")

sol.addEventListener('click', click)
lua.addEventListener('click', click)

function click() {
    document.body.classList.toggle('dark__mode')
}