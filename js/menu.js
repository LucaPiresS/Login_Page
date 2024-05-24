var btn = document.getElementById('btn__abrir__menu')
var menu = document.getElementById('menu')
var btn__fechar = document.getElementById('btn__fechar')

btn.addEventListener('click', () => {
    menu.classList.add('abrir__menu')
    btn.classList.add('btn__fechar')
    btn.style.opacity = '0.0'
})

btn__fechar.addEventListener('click', () => {
    menu.classList.remove('abrir__menu')
    btn.style.opacity = '1'
})
