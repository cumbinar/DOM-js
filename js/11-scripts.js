//eventos con JavaScript//


const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    console.log('Diste click en el botón')
});

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {

    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
    } else {
        footer.classList.add('activo');
    }
    
}