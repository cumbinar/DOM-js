//Eventos sobre los Inputs: entradas con el teclado//

const busqueda = document.querySelector('.busqueda'); //me ubico sobre la clase busqueda//

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo con el teclado...')

})

busqueda.addEventListener('keyup', () => {
    console.log('oprime y suelta')

})

busqueda.addEventListener('blur', () => {
    console.log('ubicarse y dar click por fuera')

})

busqueda.addEventListener('copy', () => {
    console.log('cuando se copia un texto')

})

busqueda.addEventListener('paste', () => {
    console.log('cuando se pega un texto')

})

busqueda.addEventListener('cut', () => {
    console.log('cuando se corta un texto')

})

busqueda.addEventListener('input', () => {
    console.log('cuando se ingresa y se ejecuta varios eventos menos el blur')

})

busqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value) //lo que el usuario escribe//

})




