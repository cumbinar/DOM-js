//Eventos con el Mouse//

const nav = document.querySelector('.navegacion');
//registrar un evento//

nav.addEventListener('click', (e) => {
    console.log('click en nav')
    nav.style.backgroundColor = 'red';
})

nav.addEventListener('mouseout', (e) => {
    console.log('mouse outt')
    nav.style.backgroundColor = 'transparent';
})