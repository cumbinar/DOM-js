//querySelector retorna máximo un elemento el primero que encuentra//

const card = document.querySelector('.card');
console.log(card);

//se puede tener selectores específicos como en css//

const info = document.querySelector('.premium .info');
console.log(info); //selecciona la clase info que es hijo de premium//


//seleccionar el segundo card de hospedaje//

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundoCard);

//también selecciona id con la misma sintaxis de css #//


const formulario = document.querySelector('#formulario');
console.log(formulario);

//se puede seleccionae elementos html//


const navegacion = document.querySelector('nav');
console.log(navegacion);

const pie = document.querySelector('footer');
console.log(pie);
