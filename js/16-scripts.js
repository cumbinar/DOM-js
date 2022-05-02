//Eventos al dar scroll con el mouse//

/*window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);
})*/

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if (ubicacion.top < 100) {
        console.log('El elemento ya está visible');
    } else {
        console.log('Aún no, da más scrool');
    }
})

