//Cambiando el css con JavaScript //

const encabezado = document.querySelector('h1');
console.log(encabezado);

encabezado.style.backgroundColor = 'red'; //cambia el background-color del h1//
console.log(encabezado.style);

encabezado.style.fontFamily = 'arial';

encabezado.style.textTransform = 'uppercase';

//es mejor quitar o colocar clases//

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');

console.log(card.classList);



