/*¿Qué es el Event Bubbling?
se presiona en un elemento y se activan otros como el div padre
esto lleva a eventos no esperados...*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', () => {
    console.log('click en card');
})

infoDiv.addEventListener('click', () => {
    console.log('click en info');
})

titulo.addEventListener('click', () => {
    console.log('click en titulo');
})