// Generar HTML con JavaScript //

const enlace = document.createElement('a'); //creando enlace//
enlace.textContent = 'nuevo-enlace'; //agregando texto//
enlace.href = '/nuevo-enlace'; //agregando href//
enlace.target = '_blank'; 
console.log(enlace);

//ahora se selecciona el sitio en donnde se va a posicionar//

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //agrega el enlace//