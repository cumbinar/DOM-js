// Generar HTML con JavaScript //

const enlace = document.createElement('a'); //creando enlace//
enlace.textContent = 'Nuevo-Enlace'; //agregando texto//
enlace.href = '/nuevo-enlace'; //agregando href//
enlace.target = '_blank'; 
console.log(enlace);

//ahora se selecciona el sitio en donnde se va a posicionar//

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //agrega el enlace al final//

const enlace2 = document.createElement('a'); //creando enlace//
enlace2.textContent = 'Cumbi'; //agregando texto//
enlace2.href = '/nuevo-enlace2'; //agregando href//
enlace2.target = '_blank'; 
navegacion.insertBefore(enlace2, navegacion.children[2]); //lo ubica antes del elemento de referencia//