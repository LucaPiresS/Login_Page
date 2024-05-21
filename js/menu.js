var btn = document.getElementById('btn__abrir__menu')
var menu = document.getElementById('menu')
var btn__fechar = document.getElementById('btn__fechar')

btn.addEventListener('click', () => {
    menu.classList.add('abrir__menu')
    btn.classList.add('btn__fechar')
    btn.style.display = 'none'
})

btn__fechar.addEventListener('click', () => {
    menu.classList.remove('abrir__menu')
    btn.style.display = 'flex'
})
